class NurseriesController < ApplicationController
  before_action :authenticate_user!

  def new
    @nursery = Nursery.new
  end

  def create
    @nursery = Nursery.new(nursery_params)
    @nursery.id_owner = current_user.id  # Associa il vivaio all'utente corrente

    if @nursery.save
      flash[:notice] = "Nursery successfully registered."
      redirect_to root_path
    else
      flash.now[:alert] = "There was a problem registering the nursery."
      render :new
    end
  end

  private

  def nursery_params
    params.require(:nursery).permit(:name, :number, :email, :address, :location, :open_time, :close_time, :description)
  end
end