# app/controllers/myplants_controller.rb
class MyplantsController < ApplicationController
  def index
    @myplants = Myplant.all
  end

  def show
    @myplant = Myplant.find(params[:id])
  end

  # Altre azioni...
end

