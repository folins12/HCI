# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def show
    # Questa azione mostra il profilo utente
  end

  def nursery_profile
    # Questa azione mostra il profilo del vivaio
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def authenticate_user!
    unless session[:user_id]
      redirect_to login_path, alert: "Devi effettuare il login per accedere a questa pagina."
    end
  end
end
