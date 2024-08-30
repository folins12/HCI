class NurseriesController < ApplicationController
  before_action :set_nursery, only: [:show, :edit_image, :update_image, :update]
  before_action :set_user, only: [:update, :verify_otp]

  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.order(:position)
    @max_id = Nursery.maximum(:id)
  end

  def show
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Il vivaio richiesto non è stato trovato."
    redirect_to nurseries_path
  end

  def new
    @nursery = Nursery.new
  end  

  def create
    @nursery = Nursery.new(nursery_params)
    @user = User.find_by(id: session[:otp_user_id])
  
    validate_nursery(@nursery)
  
    @nursery.user = @user
  
    if @nursery.errors.empty? && @nursery.save
      @user.update(nursery: @nursery)
      redirect_to register_verify_otp_path
    else
      # Aggiungi il messaggio di errore specifico per l'email
      if @nursery.errors[:email].include?("dominio non valido. Usa un dominio accettabile.")
        @nursery.errors.add(:email, "Inserisci un indirizzo email con un dominio valido.")
      end
      render :new
    end
  end  

  def update
    if valid_address_updpro? && nursery_update_valid?
      if @nursery.update(nursery_params)
        if @user.otp_required_for_login
          otp_code = @user.generate_otp
          UserMailer.otp_email(@user, otp_code, 'vivaio').deliver_now
          session[:pending_nursery_params] = nursery_params.to_h
          session[:otp_user_id] = @user.id
          session[:otp_for] = 'vivaio'
          redirect_to login_verify_otp_path and return
        else
          flash[:notice] = "Informazioni aggiornate con successo."
          redirect_to nursery_profile_path and return
        end
      end
    end
  
    load_nursery_data
    flash.now[:alert] = @nursery.errors.full_messages.join(', ')
    render 'nursery_profile/profile'
  end  

  def edit_image
  end

  def update_image
    if params[:nursery].nil? || params[:nursery][:nursery_image].nil?
      flash[:error] = "Parametri mancanti."
      redirect_to nursery_profile_path and return
    end
  
    if @nursery.update(nursery_image_params)
      redirect_to nursery_profile_path, notice: 'Immagine aggiornata con successo.'
    else
      render :edit_image
    end
  end

  def verify_otp
    @user = User.find_by(id: session[:otp_user_id])
    unless @user
      flash[:alert] = "Utente non trovato. Per favore, riprova."
      redirect_to new_user_registration_path and return
    end
  
    if request.post?
      otp_attempt = params[:otp_attempt].strip
  
      if @user.verify_otp(otp_attempt)
        case session[:otp_for]
        when 'vivaio'
          if session[:pending_nursery_params]
            @nursery.update(session[:pending_nursery_params])
            clear_temporary_session_data
            flash[:notice] = "Vivaio aggiornato con successo!"
            redirect_to nursery_profile_path
          else
            clear_temporary_session_data
            flash[:alert] = "Nessuna modifica da applicare."
            redirect_to nursery_profile_path
          end
        else
          clear_temporary_session_data
          flash[:alert] = "Tipo di aggiornamento non valido."
          redirect_to nursery_profile_path
        end
      else
        flash.now[:alert] = "Codice OTP non valido o scaduto. Richiedine un altro per provare ad accedere."
        render :verify_otp
      end
    elsif request.get?
      if params[:resend_otp] == "true"
        @user.invalidate_otp
        otp_code = @user.generate_otp
        UserMailer.otp_email(@user, otp_code, session[:otp_for]).deliver_now
        flash[:notice] = "Un nuovo codice OTP è stato inviato."
      end
      render :verify_otp
    end
  end

  private

  def set_nursery
    @nursery = Nursery.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Il vivaio richiesto non è stato trovato."
    redirect_to nurseries_path
  end
  
  def nursery_params
    params.require(:nursery).permit(:name, :number, :email, :address, :location, :open_time, :close_time, :description)
  end

  def nursery_image_params
    params.require(:nursery).permit(:nursery_image)
  end

  def set_user
    @user = current_user
  end

  def valid_address_updpro?
    results = geo(params[:nursery][:address])
    if results.present? && results.first.coordinates.present?
      true
    else
      @nursery.errors.add(:address, 'Indirizzo errato!')
      false
    end
  end

  def geo(address)
    Geocoder.search(address)
  end

  def nursery_update_valid?
    number = params[:nursery][:number].to_s.strip
    unless number.length == 10 && number.match?(/\A\d{10}\z/)
      @nursery.errors.add(:number, 'Il numero di telefono deve essere composto esattamente da 10 cifre.')
      return false
    end
  
    open_time = params[:nursery][:open_time].to_i
    close_time = params[:nursery][:close_time].to_i
  
    if open_time < 0 || open_time > 24 || close_time < 0 || close_time > 24
      @nursery.errors.add(:base, 'L\'orario inserito non è valido. Deve essere tra 0 e 24.')
      return false
    end
  
    if open_time >= close_time
      @nursery.errors.add(:base, 'La fascia oraria inserita non è valida.')
      return false
    end
  
    if @nursery.description.blank?
      @nursery.errors.add(:description, 'La descrizione non può essere vuota.')
      return false
    end
  
    true
  end
  

  def clear_temporary_session_data
    session.delete(:pending_user_params)
    session.delete(:pending_nursery_params)
    session.delete(:otp_user_id)
    session.delete(:otp_for)
  end  

  def load_nursery_data
    return unless current_user

    nursery_ids = Nursery.where(id_owner: current_user.id).pluck(:id)
    nursery_plant_ids = NurseryPlant.where(nursery_id: nursery_ids).pluck(:id)

    @myplants = Plant.joins(:nursery_plants)
                     .where(nursery_plants: { id: nursery_plant_ids })
                     .select('plants.id, plants.name, nursery_plants.id as nursery_plant_id, nursery_plants.max_disponibility as disp, nursery_plants.num_reservations as res,
                              typology, light, size, irrigation, use, climate, description')

    @reservations = Reservation.joins(:nursery_plant)
                               .where(nursery_plants: { id: nursery_plant_ids })
                               .pluck(:user_email, :nursery_plant_id)
                               .group_by { |email, id| id }
  end

end
