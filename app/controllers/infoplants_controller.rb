class InfoplantsController < ApplicationController
  def index
    @nrs_users = User.where(nursery: 1)
    @std_users = User.where(nursery: 0)

    @plants = Plant.search(
      query: params[:query],
      typology: params[:typology],
      climate: params[:climate],
      light: params[:light],
      irrigation: params[:irrigation],
      use: params[:use],
      size: params[:size]
    ) || []

    if current_user
      @user_plants = Myplant.where(user_id: current_user.id).pluck(:plant_id)

      if current_user.nursery == 1
        @nursery_id = Nursery.find_by(id_owner: current_user.id)&.id
        @nursery_plants = NurseryPlant.where(nursery_id: @nursery_id).pluck(:plant_id) if @nursery_id
      end
    end
  end

  def show
    @plant = Plant.find(params[:id])
  end
end
