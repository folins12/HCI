# app/controllers/myplants_controller.rb
class MyplantsController < ApplicationController
  def index
    @myplants = Myplant.all

  end

  def show
    @myplant = Myplant.find(params[:id])
  end

  def addmyplant
    myplant = Myplant.new(plant_id: params[:plant_id], user_id: current_user.id)
    if myplant.save
      render json: { success: true }
    else
      render json: { success: false, message: "Error saving booking.", errors: myplant.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def removemyplant
    myplant = Myplant.find_by(plant_id: params[:plant_id], user_id: current_user.id)
    if myplant && myplant.destroy
      render json: { success: true }
    else
      render json: { success: false, message: "Error removing plant.", errors: myplant ? myplant.errors.full_messages : ["Plant not found"] }, status: :unprocessable_entity
    end
  end


end
