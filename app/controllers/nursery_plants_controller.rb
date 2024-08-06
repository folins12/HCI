class NurseryPlantsController < ApplicationController
  protect_from_forgery with: :null_session

  def reserve
    nursery_plant = NurseryPlant.find(params[:nursery_plant_id])

    if nursery_plant.max_disponibility - nursery_plant.num_reservations > 0
      nursery_plant.num_reservations += 1

      if nursery_plant.save
        Reservation.create(nursery_plant_id: nursery_plant.id, user_email: current_user.email)
        render json: { success: true, new_availability: nursery_plant.max_disponibility - nursery_plant.num_reservations }
      else
        render json: { success: false, message: "Errore nel salvataggio della prenotazione." }
      end
    else
      render json: { success: false, message: "Sold out. Non ci sono più disponibilità per questa pianta." }
    end
  end
end
