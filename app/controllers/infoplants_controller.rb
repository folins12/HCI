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
      @myplants = Myplant.where(user_id: current_user.id).pluck(:plant_id)
      if current_user.nursery == true
        @nursery = Nursery.find_by(id_owner: current_user.id)
        @nursery_plants = NurseryPlant.where(nursery_id: @nursery.id).pluck(:plant_id)
      end
    end
  end

  def show
    @plant = Plant.find(params[:id])
  end
end
