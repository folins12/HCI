class NurseryProfileController < ApplicationController
  before_action :set_user, only: [:profile]

  def index
    @nurseries = User.where(nursery: true)
  end

  def show
    @nursery = User.find(params[:id])
  end

  def profile
    # Logica per visualizzare il profilo vivaio
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end
end
