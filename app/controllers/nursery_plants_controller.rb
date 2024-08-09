class NurseryPlantsController < ApplicationController
  protect_from_forgery with: :null_session

  def add_to_nursery
    nursery = Nursery.find_by(id_owner: current_user.id)

    if nursery.nil?
      render json: { success: false, message: "Nessun vivaio trovato per l'utente corrente." }, status: :unprocessable_entity
      return
    end

    existing_nursery_plant = NurseryPlant.find_by(nursery_id: nursery.id, plant_id: params[:plant_id])
    if existing_nursery_plant
      render json: { success: false, message: "La pianta è già presente nel vivaio." }, status: :unprocessable_entity
      return
    end

    nursery_plant = NurseryPlant.new(
      nursery_id: nursery.id,
      plant_id: params[:plant_id],
      max_disponibility: 1,
      num_reservations: 0
    )

    if nursery_plant.save
      render json: { success: true }
    else
      render json: { success: false, message: "Errore nel salvataggio della pianta nel vivaio.", errors: nursery_plant.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
