class NurseryProfileController < ApplicationController
  before_action :set_user, only: [:profile, :update_profile]
  before_action :set_nursery, only: [:profile, :update_profile]

  def profile
    load_nursery_data
  end

  def update_profile
    if params[:nursery_user]
      if profile_update_valid?
        @user.update(user_params)
      else
        load_nursery_data
        flash.now[:alert] = "Errore nell'aggiornamento del profilo. Verifica i dati inseriti."
        render :profile and return
      end
    end
  
    if params[:nursery]
      if nursery_update_valid?
        @nursery.update(nursery_params)
        flash[:notice] = "Profilo aggiornato con successo."
        redirect_to nursery_profile_path
      else
        load_nursery_data
        flash.now[:alert] = "Errore nell'aggiornamento del vivaio. Verifica i dati inseriti."
        render :profile
      end
    end
  end
  
  

  def edit_profile
    # Render the edit profile view
  end

  private

  def load_nursery_data
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
    @nursery = Nursery.find_by(id_owner: current_user.id)
  end

  def nursery_params
    params.require(:nursery).permit(:name, :address, :number, :email, :open_time, :close_time, :description)
  end

  def profile_update_valid?
    return true unless params[:nursery_user] # Nessun controllo necessario se non ci sono modifiche al profilo
  
    if params[:nursery_user][:password].blank? && params[:nursery_user][:password_confirmation].blank?
      if params[:nursery_user][:current_password].present?
        unless @user.authenticate(params[:nursery_user][:current_password])
          @user.errors.add(:current_password, 'Password errata!')
          return false
        end
      end
      return true
    end
  
    if params[:nursery_user][:current_password].blank?
      @user.errors.add(:current_password, 'La password attuale è richiesta.')
      return false
    end
  
    unless @user.authenticate(params[:nursery_user][:current_password])
      @user.errors.add(:current_password, 'Password errata!')
      return false
    end
  
    if params[:nursery_user][:password] == params[:nursery_user][:current_password]
      @user.errors.add(:password, 'La nuova password non può essere uguale alla precedente')
      return false
    end
  
    unless valid_password?(params[:nursery_user][:password])
      @user.errors.add(:password, 'La nuova password non rispetta i requisiti: - almeno una maiuscola; - almeno una minuscola; - almeno un numero; - almeno un carattere speciale.')
      return false
    end
  
    unless params[:nursery_user][:password] == params[:nursery_user][:password_confirmation]
      @user.errors.add(:password_confirmation, 'La password confermata deve essere uguale a quella nuova precedentemente inserita')
      return false
    end
  
    true
  end
  

  def nursery_update_valid?

    number = params[:nursery][:number].to_s.strip
    unless number.length == 10 && number.match?(/\A\d{10}\z/)
      @nursery.errors.add(:number, 'Il numero di telefono deve essere composto esattamente da 10 cifre.')
      return false

    if @nursery.open_time >= @nursery.close_time
      @nursery.errors.add(:base, 'La fascia oraria inserita non è valida.')
      return false
    end

    if @nursery.description.blank?
      @nursery.errors.add(:description, 'La descrizione non può essere vuota.')
      return false
    end

    end

    true
  end

  def valid_password?(password)
    password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[\W_]/)
  end
end
