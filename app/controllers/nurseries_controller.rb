class NurseriesController < ApplicationController
    
  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.all
  end

  def show
    @nursery = Nursery.find(params[:id])
  end

end
