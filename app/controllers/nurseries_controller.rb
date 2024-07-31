class NurseriesController < ApplicationController
  #def index
  #  if params[:query].present?
  #    @nurseries = Nursery.search(params[:query])
  #  else
  #    @nurseries = Nursery.all
  #  end
  #end
  
  def index
    @nurseries = Nursery.all
  end

  def show
    @nursery = Nursery.find(params[:id])
  end
end
