class SessionsController < Devise::SessionsController
  before_action :find_user, only: [:create, :confirm_otp]

  def create
    if @user.nil?
      flash[:alert] = "Non esiste nessun account registrato con questo indirizzo email."
      render :new and return
    elsif !@user.valid_password?(params[:user][:password])
      flash[:alert] = "Password errata per questo indirizzo."
      render :new and return
    else
      if @user.otp_required_for_login
        # Invia l'OTP solo se non è già stato inviato per questa sessione
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
      # Invia un nuovo OTP solo se esplicitamente richiesto dall'utente
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
    # Questo metodo può essere opzionalmente rimosso se non serve più
    render :password_reset
  end

  def edit_password_reset
    render :edit_password_reset
  end
  
  def reset_password
    Rails.logger.info "Received reset_token: #{params[:reset_token]}"
  
    User.all.each do |user|
      if user.verify_reset_password_token(params[:reset_token])
        Rails.logger.info "Token verified successfully for user: #{user.email}"
  
        if valid_password?(params[:new_password])
          if params[:new_password] == params[:confirm_password]
            user.password = params[:new_password]
            user.reset_password_token = nil
            
            if user.save
              Rails.logger.info "Password successfully updated for user: #{user.email}"
              sign_in_and_redirect user, event: :authentication
            else
              Rails.logger.error "Failed to save new password for user: #{user.email}"
              flash.now[:alert] = "Errore nel salvare la nuova password."
              render :edit_password_reset
            end
          else
            Rails.logger.info "Password confirmation does not match."
            flash.now[:alert] = "La password confermata è diversa da quella inserita precedentemente."
            render :edit_password_reset
          end
        else
          Rails.logger.info "Invalid password format."
          flash.now[:alert] = "La password inserita non è valida. Crea una password che rispetti i seguenti requisiti: 
          - Almeno 8 caratteri 
          - Deve contenere almeno una lettera maiuscola 
          - Deve contenere almeno un numero 
          - Deve contenere almeno un carattere speciale."
          render :edit_password_reset
        end
  
        return
      end
    end
  
    Rails.logger.info "No user found with the given reset_password_token."
    flash.now[:alert] = "Il token inserito è errato."
    render :edit_password_reset
  end
  

  def send_reset_password_token
    user = User.find_by(email: params[:email])
    if user.present?
      user.send_reset_password_instructions
      flash[:notice] = "Token di reset inviato alla tua email."
      redirect_to edit_password_reset_path # Reindirizza alla vista per inserire la nuova password
    else
      flash[:alert] = "Non esiste alcun account corrispondente a questo indirizzo email."
      redirect_to new_password_reset_path
    end
  end  
  

  private

  def find_user
    @user = User.find_by(email: params[:user][:email].downcase.strip)
  end

  def valid_password?(password)
    # Verifica se la password rispetta i requisiti minimi
    password.present? && password.length >= 8 && 
      password.match?(/[A-Z]/) && password.match?(/\d/) && 
      password.match?(/[!@#$%^&*(),.?":{}|<>]/)
  end

  def clear_temporary_session_data
    session.delete(:temporary_user_data)
    session.delete(:otp_user_id)
  end

end