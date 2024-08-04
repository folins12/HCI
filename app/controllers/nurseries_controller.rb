class NurseriesController < ApplicationController
  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.order(:position)
    @max_id = Nursery.maximum(:id) #|| 6  Imposta l'ID massimo presente nel database o usa 6 come valore predefinito
  end

  def show
    @nursery = Nursery.find(params[:id])
  end
end
