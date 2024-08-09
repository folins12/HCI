# app/controllers/myplants_controller.rb
class MyplantsController < ApplicationController
  def index
    @myplants = Myplant.all
    
  end

  def show
    @myplant = Myplant.find(params[:id])
  end

  def addmyplant
    myplant = Myplant.new(plant_id: params[:myplant_id], user_id: current_user.id)
    if myplant.save
      render json: { success: true }
    else
      render json: { success: false, message: "Errore nel salvataggio della prenotazione.", errors: myplant.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def removemyplant
    myplant = Myplant.find_by(plant_id: params[:plant_id], user_id: current_user.id)
    if myplant && myplant.destroy
      render json: { success: true }
      #qui
    else
      render json: { success: false, message: "Errore nella rimozione della pianta.", errors: myplant ? myplant.errors.full_messages : ["Pianta non trovata"] }, status: :unprocessable_entity
    end
  end
  

end

