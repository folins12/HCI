class NurseriesController < ApplicationController
  before_action :authenticate_user!
  def index
    @nurseries = params[:query].present? ? Nursery.search(params[:query]) : Nursery.order(:position)
    @max_id = Nursery.maximum(:id)
  end

  def show
    @nursery = Nursery.find(params[:id])
    @plants = @nursery.plants
  end

end
