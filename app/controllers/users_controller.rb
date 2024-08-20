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
      redirect_to root_path, alert: 'Utente non trovato.'
    end
  end

  def decreserve
    Rails.logger.debug "ID Prenotazione ricevuto: #{params[:reservation_id]}"
    reservation = Reservation.find_by(nursery_plant_id: params[:nurseryplant_id], user_email: params[:user_email])

    if reservation
      if reservation.destroy
        nursery_plant = NurseryPlant.find_by(id: reservation.nursery_plant_id)

        if nursery_plant
          new_value = [nursery_plant.num_reservations - 1, 0].max

          if nursery_plant.update(num_reservations: new_value)
            render json: { success: true, message: "Rimozione prenotazione avvenuta con successo." }
          else
            render json: { success: false, message: "Errore nell'aggiornamento del numero di prenotazioni.", errors: nursery_plant.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { success: false, message: "Pianta non trovata." }, status: :not_found
        end
      else
        render json: { success: false, message: "Errore nella cancellazione della prenotazione.", errors: reservation.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { success: false, message: "Prenotazione non trovata." }, status: :not_found
    end
  end

  def update
    # Rimuovi la password e la conferma della password se non sono state inserite
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end
  
    # Se la validazione della password non è riuscita, rimani sulla stessa pagina
    if password_update_valid?
      if @user.update(user_params)
        redirect_to user_profile_path, notice: 'Profilo aggiornato con successo.'
      else
        # Se l'aggiornamento dell'utente fallisce, visualizza la pagina di profilo con errori
        flash.now[:alert] = @user.errors.full_messages.join(', ')
        render :profile
      end
    else
      # Se la validazione della password non è riuscita, visualizza la pagina di profilo con errori
      flash.now[:alert] = @user.errors.full_messages.join(', ')
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
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      if params[:user][:current_password].present?
        unless Devise::Encryptor.compare(User, @user.encrypted_password, params[:user][:current_password])
          @user.errors.add(:current_password, 'Password errata!')
          return false
        end
      end
      # Se non c'è password attuale da verificare o è corretta, non cambiare la password e ritorna true.
      return true
    end
  
    if params[:user][:current_password].blank?
      @user.errors.add(:current_password, 'La password attuale è richiesta.')
      return false
    end
  
    # Verifica la password attuale
    unless Devise::Encryptor.compare(User, @user.encrypted_password, params[:user][:current_password])
      @user.errors.add(:current_password, 'Password errata!')
      return false
    end
  
    # Verifica se la nuova password è uguale alla precedente
    if params[:user][:password] == params[:user][:current_password]
      @user.errors.add(:password, 'La nuova password non può essere uguale alla precedente')
      return false
    end
  
    # Verifica la complessità della nuova password
    unless valid_password?(params[:user][:password])
      @user.errors.add(:password, 'La nuova password non rispetta i requisiti: 
      - almeno una maiuscola; 
      - almeno una minuscola; 
      - almeno un numero; 
      - almeno un carattere speciale.')
      return false
    end
  
    # Verifica se la conferma della password corrisponde
    unless params[:user][:password] == params[:user][:password_confirmation]
      @user.errors.add(:password_confirmation, 'La password confermata deve essere uguale a quella nuova precedentemente inserita')
      return false
    end
  
    true
  end
  

  def valid_password?(password)
    # Controlla che la password contenga almeno una maiuscola, una minuscola, un numero e un carattere speciale
    password.match?(/\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}\z/)
  end

end
