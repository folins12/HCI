# app/controllers/myplants_controller.rb
class MyplantsController < ApplicationController
  def index
    @myplants = Myplant.all
    
  end

  def show
    @myplant = Myplant.find(params[:id])
  end

  def addmyplant
    myplant = Myplant.find_by(id: params[:myplant_id])
    Rails.logger.info("Parametri della richiesta: #{params.inspect}")
    Rails.logger.info current_user
    Rails.logger.info current_user.id
    myplant = Myplant.new(plant_id: myplant.id, user_id: current_user.id)

    if myplant.save
      render json: { success: true }
    else
      # Log degli errori di validazione
      Rails.logger.error("Errori di validazione: #{myplant.errors.full_messages.join(', ')}")
      render json: { success: false, message: "Errore nel salvataggio della prenotazione.", errors: myplant.errors.full_messages }, status: :unprocessable_entity
    end
    #if myplant
    #  if myplant.save
    #    Myplant.create(plant_id: myplant.id, std_user_id: current_user.id)
    #    render json: { success: true }
    #  else
    #    render json: { success: false, message: "Errore nel salvataggio della prenotazione." }
    #  end
    #else
    #  render json: { success: false, message: "Piantina non trovata." }
    #end

  end
  

end

