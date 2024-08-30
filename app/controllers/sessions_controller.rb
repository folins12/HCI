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
      sign_in(@user)
      redirect_to root_path, notice: 'Login effettuato con successo!'
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
    User.all.each do |user|
      if user.verify_reset_password_token(params[:reset_token])
  
        if valid_password?(params[:new_password])
          if params[:new_password] == params[:confirm_password]
            user.password = params[:new_password]
            user.reset_password_token = nil
            
            if user.save
              sign_in_and_redirect user, event: :authentication
            else
              flash.now[:alert] = "Errore nel salvare la nuova password."
              render :edit_password_reset
            end
          else
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
  
        return
      end
    end
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