# app/controllers/Plants_controller.rb
class InfoplantsController < ApplicationController

  def index
    @plants = Plant.search(
      query: params[:query],
      typology: params[:typology],
      climate: params[:climate],
      light: params[:light],
      irrigation: params[:irrigation],
      use: params[:use],
      size: params[:size]
    )|| []
  end

  def show
    @plant = Plant.find(params[:id])
  end
end
