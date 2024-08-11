class ReservationController < ApplicationController
  

  def decreserve
    reserve = Reservation.find_by(plant_id: params[:plant_id], user_id: current_user.id)
    if reserve && reserve.destroy
      render json: { success: true }
    else
      render json: { success: false, message: "Errore nella rimozione della pianta.", errors: reserve ? reserve.errors.full_messages : ["Pianta non trovata"] }, status: :unprocessable_entity
    end
  end
end