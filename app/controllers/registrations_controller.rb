class RegistrationsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    # Controlla l'unicità dell'email, la lunghezza della password, ecc.
    if User.exists?(email: @user.email)
      @user.errors.add(:email, "L'indirizzo email inserito è già stato utilizzato per un account!")
    elsif @user.password.length < 6
      @user.errors.add(:password, "Password troppo corta e poco sicura. Deve essere lunga almeno 6 caratteri!")
    elsif @user.password != @user.password_confirmation
      @user.errors.add(:password_confirmation, "La password inserita è diversa da quella inserita precedentemente!")
    end

    # Verifica se ci sono errori (compresa la validazione dell'indirizzo)
    if @user.errors.any?
      render :new
    else
      if @user.save
        session[:user_id] = @user.id
        if @user.nursery
          redirect_to new_nursery_path
        else
          redirect_to root_path, notice: "Registrazione avvenuta con successo"
        end
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
