class NurseriesController < ApplicationController
  def index
    @nurseries = Nursery.all
  end

  def show
    @nursery = Nursery.find(params[:id])
  end
end
