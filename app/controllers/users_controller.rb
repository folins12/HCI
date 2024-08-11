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
    # Recupera le piante dell'utente
    plant_ids = Myplant.where(user_id: current_user.id).pluck(:plant_id)
    @myplants = Plant.where(id: plant_ids)

    if @user
      # Recupera le prenotazioni dell'utente
      sql_query = <<-SQL
        SELECT p.name AS plant_name, n.email AS nursery_email, r.id AS resid, COUNT(*) AS quantity
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
  end

  def decreserve
    reserve = Reservation.where(id: params[:reservation_id])
    if reserve
      if reserve.first
        if reserve.first.destroy
          nursery_plant = NurseryPlant.find_by(id: reserve.first.nursery_plant_id)
          new_value = [nursery_plant.num_reservations - 1, 0].max
          nursery_plant.update(num_reservations: new_value)
          render json: { success: true , message: "prenotazione avvenuta con successo."}
        else
          render json: { success: false, message: "Errore nella cancellazione della prenotazione.", errors: reserve.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { success: false, message: "Errore nella cancellazione della prenotazione."}
      end
    else
      render json: { success: false, message: "Errore nella cancellazione della prenotazione."}
    end
  end

  def update
    if @user && password_update_valid?
      if @user.update(user_params)
        redirect_to user_profile_path, notice: 'Profilo aggiornato con successo.'
      else
        render :profile
      end
    else
      flash.now[:alert] = @error_message
      render :profile
    end
  end

  def fetch_weather
    lat = params[:lat]
    lon = params[:lon]

    if lat.present? && lon.present?
      weather_data = fetch_weather_data(lat, lon)
      if weather_data
        render json: { weather: weather_data }
      else
        render json: { error: 'Dati meteo non disponibili' }, status: :bad_request
      end
    else
      render json: { error: 'Coordinate non valide' }, status: :bad_request
    end
  end

  private

  def fetch_weather_data(lat, lon)
    api_key = '58a0cdb53732cbf60b00188b157bbdba'
    url = "https://api.openweathermap.org/data/2.5/weather?lat=#{lat}&lon=#{lon}&units=metric&appid=#{api_key}"
    response = Net::HTTP.get(URI(url))
    JSON.parse(response)
  rescue StandardError => e
    Rails.logger.error "Errore durante il recupero dei dati meteo: #{e.message}"
    nil
  end

  def set_user
    @user = User.find_by(id: params[:id]) || current_user
    if @user.nil?
      redirect_to root_path, alert: 'Utente non trovato.'
    end
  end


  def user_params
    params.require(:user).permit(:nome, :cognome, :email, :password, :password_confirmation, :nursery, :indirizzo)
  end

  def password_update_valid?
    current_password = params[:user][:current_password]
    new_password = params[:user][:password]
    password_confirmation = params[:user][:password_confirmation]

    if new_password.present? && (new_password == current_password)
      @error_message = "La nuova password non può essere uguale a quella vecchia."
      @user.errors.add(:password, @error_message)
      return false
    elsif new_password.present? && new_password != password_confirmation
      @error_message = "La password confermata è diversa da quella precedentemente inserita."
      @user.errors.add(:password_confirmation, @error_message)
      return false
    elsif new_password.blank? && password_confirmation.present?
      @error_message = "Se la conferma della password è presente, la nuova password deve essere compilata."
      @user.errors.add(:password, @error_message)
      return false
    else
      @error_message = nil
      return true
    end
  end
end
