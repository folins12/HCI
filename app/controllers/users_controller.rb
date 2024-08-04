# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def show
    Rails.logger.debug "Session user_id: #{session[:user_id]}"
    Rails.logger.debug "User email: #{@user.email}"
    Rails.logger.debug "Plants found: #{@plants.inspect}"
  end

  private

  def set_user
    @user = User.find_by(id: session[:user_id])
    Rails.logger.debug "User set: #{@user.inspect}"
  end

  def authenticate_user!
    unless session[:user_id]
      redirect_to login_path, alert: "Devi effettuare il login per accedere a questa pagina."
    end
  end
end
