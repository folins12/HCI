class UsersController < ApplicationController
  before_action :authenticate_user! # Assicurati che questo metodo sia disponibile
  before_action :set_user, only: [:profile, :update]

  def show
    Rails.logger.debug "Session user_id: #{session[:user_id]}"
    Rails.logger.debug "User email: #{@user.email}"
    Rails.logger.debug "Plants found: #{@plants.inspect}"
  end

  def edit
  end

  def profile
    # La vista profile.html.erb mostrerà i dettagli dell'utente e il modulo di modifica
  end

  def update
    if password_update_valid?
      if @user.update(user_params)
        redirect_to user_profile_path, notice: 'Profilo aggiornato con successo.'
      else
        render :profile
      end
    else
      flash.now[:alert] = @error_message
      render :profile
    end
  end

  private

  def set_user
    @user = current_user
  end

  def user_params
    params.require(:user).permit(:nome, :cognome, :email, :password, :password_confirmation, :nursery)
  end

  def password_update_valid?
    current_password = params[:user][:current_password]
    new_password = params[:user][:password]
    password_confirmation = params[:user][:password_confirmation]

    if new_password.present? && (new_password == current_password)
      @error_message = "La nuova password non può essere uguale a quella vecchia."
      @user.errors.add(:password, @error_message)
      return false
    elsif new_password.present? && new_password != password_confirmation
      @error_message = "La password confermata è diversa da quella precedentemente inserita."
      @user.errors.add(:password_confirmation, @error_message)
      return false
    elsif new_password.blank? && password_confirmation.present?
      @error_message = "Se la conferma della password è presente, la nuova password deve essere compilata."
      @user.errors.add(:password, @error_message)
      return false
    else
      @error_message = nil
      return true
    end
  end
end
