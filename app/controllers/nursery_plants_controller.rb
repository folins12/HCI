class NurseryPlantsController < ApplicationController
  protect_from_forgery with: :null_session

  def add_to_nursery
    nursery = Nursery.find_by(id_owner: current_user.id)

    if nursery.nil?
      render json: { success: false, message: "No nursery found for the current user." }, status: :unprocessable_entity
      return
    end

    existing_nursery_plant = NurseryPlant.find_by(nursery_id: nursery.id, plant_id: params[:plant_id])
    if existing_nursery_plant
      render json: { success: false, message: "The plant is already present in the nursery." }, status: :unprocessable_entity
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
      render json: { success: false, message: "Error saving plant in nursery.", errors: nursery_plant.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def incdisp
    nursery_plant = NurseryPlant.find_by(nursery_id: params[:nursery_id], plant_id: params[:plant_id])
    if nursery_plant
      nursery_plant.increment!(:max_disponibility)
      render json: { success: true , max_disponibility:nursery_plant.max_disponibility}
    else
      render json: { success: false }
    end
  end

  def reserve
    nursery_plant = NurseryPlant.find_by(id: params[:nursery_plant_id])
    if nursery_plant && nursery_plant.max_disponibility - nursery_plant.num_reservations > 0
      nursery_plant.num_reservations += 1
      if nursery_plant.save
        Reservation.create(nursery_plant_id: nursery_plant.id, user_email: current_user.email)
        render json: { success: true, new_availability: nursery_plant.max_disponibility - nursery_plant.num_reservations }
      else
        render json: { success: false, message: "Error saving booking." }
      end
    else
      render json: { success: false, message: "Sold out. There is no more availability for this plant." }
    end
  end

  def decdisp
    nursery_plant = NurseryPlant.find_by(nursery_id: params[:nursery_id], plant_id: params[:plant_id])
    if nursery_plant
      if nursery_plant.max_disponibility - nursery_plant.num_reservations > 0
        nursery_plant.decrement!(:max_disponibility)
        render json: { success: true ,max_disponibility: nursery_plant.max_disponibility}
      else
        render json: { success: false , message: "cant decrease more."}
      end
    else
      render json: { success: false , message: "nursery_plant not found."}
    end
  end

  def removenursplant
    plant = NurseryPlant.find_by(plant_id: params[:plant_id], nursery_id: params[:nursery_id])
    if plant
      if plant.num_reservations<=0
        if plant.destroy
          render json: { success: true }
        end
      else
        render json: {success: false, message: "Ci sono degli ordini in sospeso"}
      end
    else
      render json: { success: false, message: "Error deleting plant.", errors: plant ? plant.errors.full_messages : "Plant not found" }, status: :unprocessable_entity
    end
  end
end
