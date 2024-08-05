# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email])
    if user.nil?
      flash.now[:email_error] = "Non esiste un account registrato con questa email, prova con un'altra oppure effettua la registrazione."
      flash.now[:email] = params[:email]
      render :new
    elsif user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: 'Logged in!'
    else
      flash.now[:password_error] = "Password errata per questo indirizzo email!"
      flash.now[:email] = params[:email]
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path, notice: 'Logged out!'
  end
end
