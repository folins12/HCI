class NurseryProfileController < ApplicationController
  before_action :set_user, only: [:profile, :update_profile]
  before_action :set_nursery, only: [:profile, :update_profile]

  def profile
    @nursery = Nursery.find_by(id_owner: current_user.id)
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

  def update_profile
    # Aggiorna il profilo solo se i parametri sono presenti
    if @nursery.update(nursery_params)
      flash[:notice] = "Profilo aggiornato con successo."
      redirect_to nursery_profile_path
    else
      # Ricarica le piante e le prenotazioni se c'è un errore
      load_nursery_data
      flash.now[:alert] = "Errore nell'aggiornamento del profilo."
      render :profile
    end
  end

  def edit_profile
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

  def user_params
    params.require(:nursery_user).permit(:nome, :cognome, :current_password, :password, :password_confirmation, :address)
  end

  def nursery_params
    params.require(:nursery).permit(:name, :address, :number, :email, :open_time, :close_time, :description)
  end

  def profile_update_valid?
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

  def valid_password?(password)
    # Definisci qui i criteri di validità della password
    password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[\W_]/)
  end
end
