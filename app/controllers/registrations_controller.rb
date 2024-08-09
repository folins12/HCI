class RegistrationsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if User.exists?(email: @user.email)
      @user.errors.add(:email, "L'indirizzo email inserito è già stato utilizzato per un account!")
    elsif @user.password.length < 6
      @user.errors.add(:password, "Password troppo corta e poco sicura. Deve essere lunga almeno 6 caratteri!")
    elsif @user.password != @user.password_confirmation
      @user.errors.add(:password_confirmation, "La password inserita è diversa da quella inserita precedentemente!")
    end

    if @user.errors.any?
      render :new
    else
      if @user.save
        session[:user_id] = @user.id
        redirect_to root_path, notice: "Registrazione avvenuta con successo"
      else
        render :new
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:nome, :cognome, :email, :password, :password_confirmation, :nursery, :address)
  end
end
