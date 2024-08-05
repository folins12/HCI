# app/controllers/infoplants_controller.rb
class InfoplantsController < ApplicationController

  

  def index
    #@infoplants = params[:query].present? ? Infoplant.search(params[:query]) : Infoplant.all
    @infoplants = Infoplant.search(
      query: params[:query],
      typology: params[:typology],
      climate: params[:climate],
      light: params[:light],
      irrigation: params[:irrigation],
      use: params[:use],
      size: params[:size]
    )|| []
  end

  ## Filtraggio per tipologia
  #if params[:typology].present?
  #  @infoplants = @infoplants.where(typology: params[:typology])
  #end
  ## Filtraggio per luce
  #if params[:light].present?
  #  @infoplants = @infoplants.where(light: params[:light])
  #end
  ## Filtraggio per uso
  #if params[:use].present?
  #  @infoplants = @infoplants.where(use: params[:use])
  #end

  def show
    @infoplant = Infoplant.find(params[:id])
  end
end
