class NurseryProfileController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:profile, :update_profile]
  before_action :set_nursery, only: [:profile, :update_profile]

  def satisfy_order
    plant_id = params[:plant_id]
    user_email = params[:email]

    reservations = Reservation.where(nursery_plant_id: plant_id, user_email: user_email)

    if reservations.any?
      num_reservations_to_remove = reservations.count
      nursery_plant = NurseryPlant.find_by(id: plant_id)
      user = User.find_by(email: user_email)
      nursery = Nursery.find_by(id: nursery_plant&.nursery_id)

      if nursery_plant && user && nursery
        nursery_plant.decrement!(:num_reservations, num_reservations_to_remove)
        nursery_plant.decrement!(:max_disponibility, num_reservations_to_remove)

        reservations.destroy_all

        begin
          UserMailer.order_satisfied_email(user, nursery, nursery_plant.plant, num_reservations_to_remove).deliver_now
          Rails.logger.info "Email inviata con successo!"
        rescue => e
          Rails.logger.error "Errore durante l'invio dell'email: #{e.message}"
          render json: { success: false, message: 'Errore durante l\'invio dell\'email.' }, status: :internal_server_error and return
        end

        render json: { success: true }
      else
        Rails.logger.error "Dati mancanti: #{nursery_plant.nil? ? 'NurseryPlant' : ''} #{user.nil? ? 'User' : ''} #{nursery.nil? ? 'Nursery' : ''}"
        render json: { success: false, message: 'Dati insufficienti per soddisfare la richiesta' }, status: :unprocessable_entity
      end
    else
      render json: { success: false, message: 'Prenotazioni non trovate' }
    end
  end

  def profile
    plant_ids = Myplant.where(user_id: current_user.id).pluck(:plant_id)
    @myplants = Plant.where(id: plant_ids)

    if @user
      sql_query = <<-SQL
        SELECT p.name AS plant_name, n.email AS nursery_email, r.id AS resid, np.id AS np_id, r.user_email AS user_email, COUNT(*) AS quantity
        FROM reservations r
        JOIN nursery_plants np ON np.id = r.nursery_plant_id
        JOIN plants p ON p.id = np.plant_id
        JOIN nurseries n ON n.id = np.nursery_id
        WHERE r.user_email = ?
        GROUP BY p.name, n.email
      SQL

      @user_reservations = Reservation.find_by_sql([sql_query, @user.email])
    else
      redirect_to root_path, alert: 'Utente non trovato.'
    end

    load_nursery_data
  end

  def update_profile
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end

    if params[:user]
      if password_update_valid?
        if valid_address_updpro?
          if @user.otp_required_for_login
            otp_code = @user.generate_otp
            UserMailer.otp_email(@user.email, @user.nome, otp_code, 'profilo').deliver_now

            session[:pending_user_params] = user_params.to_h
            session[:otp_user_id] = @user.id
            session[:otp_for] = 'profilo'

            redirect_to login_verify_otp_path and return
          else
            @user.update(user_params)
            flash[:notice] = "Profilo aggiornato con successo."
            redirect_to nursery_profile_path
          end
        else
          load_nursery_data
          flash.now[:alert] = @user.errors.full_messages.join(', ')
          render :profile
        end
      else
        load_nursery_data
        flash.now[:alert] = @user.errors.full_messages.join(', ')
        render :profile
      end
    end
  end


  private

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

  def set_user
    @user = current_user
  end

  def set_nursery
    @nursery = Nursery.find_by(id_owner: current_user.id) if current_user
  end

  def nursery_params
    params.require(:nursery).permit(:name, :address, :number, :email, :open_time, :close_time, :description)
  end

  def user_params
    params.require(:user).permit(:nome, :cognome, :email, :current_password, :password, :password_confirmation, :address)
  end

  def password_update_valid?
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      if params[:user][:current_password].present?
        unless Devise::Encryptor.compare(User, @user.encrypted_password, params[:user][:current_password])
          @user.errors.add(:current_password, 'La password inserita è errata!')
          return false
        end
      end
      return true
    end

    if params[:user][:current_password].blank?
      @user.errors.add(:current_password, 'La password attuale è richiesta.')
      return false
    end

    unless Devise::Encryptor.compare(User, @user.encrypted_password, params[:user][:current_password])
      @user.errors.add(:current_password, 'La password inserita è errata!')
      return false
    end

    if params[:user][:password] == params[:user][:current_password]
      @user.errors.add(:password, 'La nuova password non può essere uguale alla precedente')
      return false
    end

    unless valid_password?(params[:user][:password])
      @user.errors.add(:password, 'La nuova password non rispetta i requisiti:<ul>
                                    <li>deve avere almeno una lettera maiuscola;</li>
                                    <li>deve avere almeno una lettera minuscola;</li>
                                    <li>deve contenere almeno un numero;</li>
                                    <li>deve contenere almeno un carattere speciale.</li>
                                  </ul>'.html_safe)
      return false
    end

    unless params[:user][:password] == params[:user][:password_confirmation]
      @user.errors.add(:password_confirmation, 'La password confermata deve essere uguale a quella nuova precedentemente inserita')
      return false
    end

    true
  end

  def valid_password?(password)
    password.match?(/\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}\z/)
  end

  def send_otp_email(otp_for)
    otp_code = @user.generate_otp
    UserMailer.otp_email(@user.email, @user.nome, otp_code, otp_for).deliver_now
  end

  def clear_temporary_session_data
    session.delete(:pending_user_params)
    session.delete(:pending_nursery_params)
    session.delete(:otp_user_id)
    session.delete(:otp_for)
  end

  def valid_address_updpro?
    results = geo(params[:user][:address])
    if results.present? && results.first.coordinates.present?
      true
    else
      @user.errors.add(:address, 'L\'indirizzo inserito non esiste o è stato scritto in modo errato!')
      false
    end
  end

  def geo(address)
    Geocoder.search(address)
  end
end
