# app/controllers/nurseries_controller.rb
class NurseryController < ApplicationController
  before_action :set_user, only: [:profile]

  def index
    @nursery = User.where(nursery: true)
  end

  def show
    @nursery = User.find(params[:id])
  end

  def profile
    render :profile
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end
end
