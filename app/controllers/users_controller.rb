class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:profile, :update]

  def show
    Rails.logger.debug "Session user_id: #{session[:user_id]}"
    Rails.logger.debug "User email: #{@user.email}"
    Rails.logger.debug "Plants found: #{@plants.inspect}"
  end

  def edit
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
      redirect_to root_path, alert: 'User not found.'
    end
  end

  def decreserve
    Rails.logger.debug "Reservation ID received: #{params[:reservation_id]}"
    reservation = Reservation.find_by(nursery_plant_id: params[:nurseryplant_id], user_email: params[:user_email])

    if reservation
      if reservation.destroy
        nursery_plant = NurseryPlant.find_by(id: reservation.nursery_plant_id)

        if nursery_plant
          new_value = [nursery_plant.num_reservations - 1, 0].max

          if nursery_plant.update(num_reservations: new_value)
            render json: { success: true, message: "Reservation removal successful." }
          else
            render json: { success: false, message: "Error updating number of reservations.", errors: nursery_plant.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { success: false, message: "Plant not found." }, status: :not_found
        end
      else
        render json: { success: false, message: "Error canceling reservation.", errors: reservation.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { success: false, message: "Reservation not found." }, status: :not_found
    end
  end

  def update
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end

    if password_update_valid? && valid_address_updpro?
      if @user.otp_required_for_login
        # Genera OTP e invia via email
        otp_code = @user.generate_otp
        UserMailer.otp_email(@user.email, @user.nome, otp_code, 'profilo').deliver_now

        # Memorizza i parametri dell'utente nella sessione
        session[:pending_user_params] = user_params.to_h
        session[:otp_user_id] = @user.id
        session[:otp_for] = 'profilo'

        redirect_to login_verify_otp_path and return
      else
        @user.update(user_params)
        flash[:notice] = "Profile updated successfully."
        user_profile_path
      end
    else
      flash.now[:alert] = @user.errors.full_messages.join(', ')
      render :profile
    end
  end

  def verify_otp
    @user = User.find_by(id: session[:otp_user_id])

    unless @user
      flash[:alert] = "User not found. Please try again."
      redirect_to new_user_registration_path and return
    end

    if request.post?
      otp_attempt = params[:otp_attempt].strip

      if @user.verify_otp(otp_attempt)

        if session[:otp_for] == 'vivaio'
          if session[:pending_nursery_params]
            @nursery = Nursery.find_by(id_owner: @user.id)
            @nursery.update(session[:pending_nursery_params])
            clear_temporary_session_data
            flash[:notice] = "Nursery successfully updated!"
            redirect_to nursery_profile_path
          else
            clear_temporary_session_data
            flash[:alert] = "No changes to apply."
            redirect_to nursery_profile_path
          end
        else

          if session[:pending_user_params]
            @user.update(session[:pending_user_params])
            clear_temporary_session_data
            flash[:notice] = "Profile updated successfully!"
            if @user.nursery==0
              redirect_to user_profile_path
            else
              redirect_to nursery_profile_path
            end
          else
            clear_temporary_session_data
            flash[:alert] = "No changes to apply."
            if @user.nursery==0
              redirect_to user_profile_path
            else
              redirect_to nursery_profile_path
            end
          end
        end

      else
        flash.now[:alert] = "Invalid or expired OTP code. Request another one to try to log in."
        render 'sessions/verify_otp'
      end
    elsif request.get?
      if params[:resend_otp] == "true"
        @user.invalidate_otp
        otp_code = @user.generate_otp
        UserMailer.otp_email(@user.email, @user.nome, otp_code, 'profilo').deliver_now
        flash[:notice] = "A new OTP code has been sent."
      end
      render 'sessions/verify_otp'
    end
  end

  def valid_address_updpro?
    results = geo(params[:user][:address])
    if results.present? && results.first.coordinates.present?
      true
    else
      @user.errors.add(:address, 'The address entered does not exist or was written incorrectly!')
      false
    end
  end

  def geo(address)
    Geocoder.search(address)
  end

  def fetch_weather
    lat = params[:lat]
    lon = params[:lon]

    if lat.present? && lon.present?
      weather_data = fetch_weather_data(lat, lon)
      if weather_data
        render json: { weather: weather_data }
      else
        render json: { error: 'Weather data not available' }, status: :bad_request
      end
    else
      render json: { error: 'Invalid coordinates' }, status: :bad_request
    end
  end

  private

  def fetch_weather_data(lat, lon)
    api_key = '58a0cdb53732cbf60b00188b157bbdba'
    url = "https://api.openweathermap.org/data/2.5/weather?lat=#{lat}&lon=#{lon}&units=metric&appid=#{api_key}"
    response = Net::HTTP.get(URI(url))
    JSON.parse(response)
  rescue StandardError => e
    Rails.logger.error "Error retrieving weather data: #{e.message}"
    nil
  end

  def set_user
    @user = User.find_by(id: params[:id]) || current_user
    if @user.nil?
      redirect_to root_path, alert: 'User not found.'
    end
  end

  def user_params
    params.require(:user).permit(:nome, :cognome, :email, :current_password, :password, :password_confirmation, :address)
  end

  def password_update_valid?
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      if params[:user][:current_password].present?
        unless Devise::Encryptor.compare(User, @user.encrypted_password, params[:user][:current_password])
          @user.errors.add(:current_password, 'The password you entered is incorrect!')
          return false
        end
      end
      return true
    end

    if params[:user][:current_password].blank?
      @user.errors.add(:current_password, 'Current password is required.')
      return false
    end

    unless Devise::Encryptor.compare(User, @user.encrypted_password, params[:user][:current_password])
      @user.errors.add(:current_password, 'The password you entered is incorrect!')
      return false
    end

    if params[:user][:password] == params[:user][:current_password]
      @user.errors.add(:password, 'The new password cannot be the same as the previous one')
      return false
    end

    unless valid_password?(params[:user][:password])
      @user.errors.add(:password, 'The new password does not meet the requirements:<ul>
                                    <li>must have at least one capital letter;</li>
                                    <li>must have at least one lowercase letter;</li>
                                    <li>must contain at least one number;</li>
                                    <li>must contain at least one special character.</li>
                                  </ul>'.html_safe)
      return false
    end

    unless params[:user][:password] == params[:user][:password_confirmation]
      @user.errors.add(:password_confirmation, 'The confirmed password must be the same as the new one previously entered')
      return false
    end

    true
  end

  def valid_password?(password)
    password.match?(/\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}\z/)
  end

  def clear_temporary_session_data
    session.delete(:pending_user_params)
    session.delete(:otp_user_id)
    session.delete(:otp_for)
  end
end
