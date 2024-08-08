class NurseryProfileController < ApplicationController
  before_action :set_user, only: [:profile]

  def index
    @nurseries = User.where(nursery: true)
  end

  def show
    @nursery = User.find(params[:id])
  end

  def profile
    @myplants = NurseryPlant
                  .joins(:plant)
                  .where(nursery_id: current_user.id)
                  .select('nursery_plants.max_disponibility as disp, nursery_plants.num_reservations as res,
                          plants.name, typology, light, size, irrigation, use, climate, irrigation, description')
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end
end
