# app/controllers/infoplants_controller.rb
class InfoplantsController < ApplicationController
  def index
    @infoplants = Infoplant.all
  end

  def show
    @infoplant = Infoplant.find(params[:id])
  end
end
