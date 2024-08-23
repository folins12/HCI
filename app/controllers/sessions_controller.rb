class SessionsController < Devise::SessionsController
  before_action :find_user, only: [:create, :verify_otp]

  def create
    if @user.nil?
      flash[:alert] = "Non esiste nessun account registrato con questo indirizzo email."
      render :new and return
    elsif !@user.valid_password?(params[:user][:password])
      flash[:alert] = "Password errata per questo indirizzo."
      render :new and return
    else
      if @user.otp_required_for_login
        unless session[:otp_user_id].present? && session[:otp_for] == 'login'
          otp_code = @user.generate_otp
          UserMailer.otp_email(@user, otp_code, 'login').deliver_now
        end
        
        session[:otp_user_id] = @user.id
        session[:otp_for] = 'login'
        redirect_to login_verify_otp_path and return
      else
        sign_in(@user)
        redirect_to root_path, notice: 'Login effettuato con successo!'
      end
    end
  end  

  def verify_otp
    @user = User.find_by(id: session[:otp_user_id])
  
    unless @user
      flash[:alert] = "Utente non trovato. Per favore, riprova."
      redirect_to new_user_registration_path and return
    end
  
    if request.post?
      otp_attempt = params[:otp_attempt].strip
  
      if @user.verify_otp(otp_attempt)
        clear_temporary_session_data
        sign_in_and_redirect @user, event: :authentication
      else
        flash.now[:alert] = "Codice OTP non valido o scaduto. Richiedine un altro per provare ad accedere."
        render :verify_otp
      end
    elsif request.get?
      if params[:resend_otp] == "true"
        @user.invalidate_otp
        otp_code = @user.generate_otp
        UserMailer.otp_email(@user, otp_code, 'login').deliver_now
        flash[:notice] = "Un nuovo codice OTP è stato inviato."
      end
      render :verify_otp
    end
  end    

  def new_password_reset
    render :password_reset
  end

  def edit_password_reset
    render :edit_password_reset
  end
  
  def reset_password
    reset_token = params[:reset_token].to_s.strip
    email = params[:email].to_s.strip
  
    Rails.logger.info "Received reset_token: #{reset_token}"
    Rails.logger.info "Received email: #{email}"
    
    user = User.find_by(email: email)
    
    if user
      Rails.logger.info "Found user with email: #{email}"
      
      # Verifica il token di reset
      if user.verify_reset_password_token(reset_token)
        if valid_password?(params[:new_password])
          if params[:new_password] == params[:confirm_password]
            user.password = params[:new_password]
            user.clear_reset_password_token
            if user.save
              Rails.logger.info "Password successfully updated for user with email: #{email}"
              sign_in_and_redirect user, event: :authentication
            else
              Rails.logger.info "Error saving new password for user with email: #{email}"
              flash.now[:alert] = "Errore nel salvare la nuova password."
              render :edit_password_reset
            end
          else
            Rails.logger.info "Password and confirmation do not match for user with email: #{email}"
            flash.now[:alert] = "La password confermata è diversa da quella inserita precedentemente."
            render :edit_password_reset
          end
        else
          flash.now[:alert] = "La password inserita non è valida. Crea una password che rispetti i seguenti requisiti: 
            - Almeno 8 caratteri 
            - Deve contenere almeno una lettera maiuscola 
            - Deve contenere almeno un numero 
            - Deve contenere almeno un carattere speciale."
          render :edit_password_reset
        end
      else
        Rails.logger.info "Invalid reset token: #{reset_token}"
        flash.now[:alert] = "Il token inserito è errato. Puoi cliccare sul link sottostante per richiederne un altro."
        render :edit_password_reset
      end
    else
      Rails.logger.info "User not found with email: #{email}"
      flash.now[:alert] = "Non esiste alcun account corrispondente a questo indirizzo email."
      render :edit_password_reset
    end
  end
  

  def send_reset_password_token
    user = User.find_by(email: params[:email])
    if user.present?
      raw_token = user.generate_reset_password_token
      UserMailer.reset_password_email(user, raw_token).deliver_now
      flash[:notice] = "Token di reset inviato alla tua email."
      redirect_to edit_password_reset_path
    else
      flash[:alert] = "Non esiste alcun account corrispondente a questo indirizzo email."
      redirect_to new_password_reset_path
    end
  end  
  
  def resend_reset_password_token
    user = User.find_by(email: params[:email])
    if user.present?
      raw_token = user.generate_reset_password_token
      UserMailer.reset_password_email(user, raw_token).deliver_now
      flash[:notice] = "Un nuovo token di reset è stato inviato alla tua email."
    else
      flash[:alert] = "Non esiste alcun account corrispondente a questo indirizzo email."
    end
    redirect_to new_password_reset_path
  end  

  private

  def find_user
    @user = User.find_by(email: params[:user][:email].downcase.strip)
  end

  def valid_password?(password)
    password.present? && password.length >= 8 && 
      password.match?(/[A-Z]/) && password.match?(/\d/) && 
      password.match?(/[!@#$%^&*(),.?":{}|<>]/)
  end

  def clear_temporary_session_data
    session.delete(:otp_user_id)
    session.delete(:otp_for)
  end
end
