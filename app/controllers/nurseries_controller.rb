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

    validate_nursery(@nursery)

    if @nursery.errors.empty?
      session[:otp_nursery_data] = nursery_params.slice('name','number','email','address','location','open_time','close_time','description')
      puts session[:otp_nursery_data]
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
      if @user.otp_required_for_login
        otp_code = @user.generate_otp
        UserMailer.otp_email(@user.email, @user.nome, otp_code, 'vivaio').deliver_now
        session[:pending_nursery_params] = nursery_params.to_h
        session[:otp_user_id] = @user.id
        session[:otp_for] = 'vivaio'
        redirect_to login_verify_otp_path and return
      else
        @nursery.update(nursery_params)
        flash[:notice] = "Informazioni aggiornate con successo."
        redirect_to nursery_profile_path and return
      end
    else
      flash.now[:alert] = @nursery.errors.full_messages.join(', ')
      render 'nursery_profile/profile'
    end
  end

  def edit_image
    @nursery = Nursery.find(params[:id])
  end

  def update_image
    @nursery = Nursery.find(params[:id])
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

  private

  def send_otp_email(user, otp_code, purpose)
    UserMailer.otp_email(user.email, user.nome, otp_code, purpose).deliver_now
  end

  def validate_nursery(nursery)
    number_str = nursery.number.to_s

    if number_str.blank? || number_str.length != 10
      nursery.errors.add(:number, "Il numero di telefono inserito non è valido. Deve essere di 10 cifre.")
      nursery.number = ''
    elsif Nursery.exists?(number: number_str)
      nursery.errors.add(:number, "Questo numero appartiene già ad un altro vivaio, pertanto non può essere utilizzato!")
      nursery.number = ''
    end

    if !valid_time?(nursery.open_time) || !valid_time?(nursery.close_time)
      nursery.errors.add(:base, "L'ora inserita non è valida. Deve essere compresa tra 0 e 24.")
      nursery.open_time = ''
      nursery.close_time = ''
    elsif nursery.open_time.to_i >= nursery.close_time.to_i
      nursery.errors.add(:base, "La fascia oraria inserita non è accettabile.")
      nursery.open_time = ''
      nursery.close_time = ''
    end

    if nursery.address.blank?
      nursery.errors.add(:address, "Per proseguire è necessario inserire l'indirizzo")
      nursery.address = ''
    else
      unless valid_address?(nursery.address)
        nursery.errors.add(:address, "L'indirizzo inserito non è valido.")
        nursery.address = ''
      end
    end
  end

  def valid_time?(time_str)
    time = time_str.to_i
    time.between?(0, 24)
  end

  def valid_address?(address)
    results = geo(address)
    if results.present? && results.first.coordinates.present?
      return true
    else
      return false
    end
  end

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
      @nursery.errors.add(:address, 'L\'indirizzo inserito è errato!')
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
                               .pluck(:user_email, :date_reservation, :time_reservation, :number_of_plants, :state, :id)
  end

end
