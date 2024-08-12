class NurseryProfileController < ApplicationController
  before_action :set_user, only: [:profile]

  def index
    @nurseries = User.where(nursery: true)
  end

  def show
    @nursery = User.find(params[:id])
  end



  def satisfy_order
    plant_id = params[:plant_id]
    user_email = params[:email]

    reservations = Reservation.where(nursery_plant_id: plant_id, user_email: user_email)

    if reservations.any?
      num_reservations_to_remove = reservations.count

      nursery_plant = NurseryPlant.find_by(id: plant_id)
      if nursery_plant
        nursery_plant.decrement!(:num_reservations, num_reservations_to_remove)
      end

      reservations.destroy_all

      render json: { success: true }
    else
      render json: { success: false, message: 'Prenotazioni non trovate' }
    end
  end



  def profile
    @nursery = Nursery.find_by(id_owner: current_user.id)
    nursery_ids = Nursery.where(id_owner: current_user.id).pluck(:id)
    nursery_plant_ids = NurseryPlant.where(nursery_id: nursery_ids).pluck(:id)

    @myplants = Plant.joins(:nursery_plants)
                     .where(nursery_plants: { id: nursery_plant_ids })
                     .select('plants.id, plants.name, nursery_plants.id as nursery_plant_id, nursery_plants.max_disponibility as disp, nursery_plants.num_reservations as res,
                              typology, light, size, irrigation, use, climate, irrigation, description')

    @reservations = Reservation.joins(:nursery_plant)
                               .where(nursery_plants: { id: nursery_plant_ids })
                               .pluck(:user_email, :nursery_plant_id)
                               .group_by { |email, id| id }
  end


  private

  def set_user
    @user = User.find(session[:user_id])
  end


end
