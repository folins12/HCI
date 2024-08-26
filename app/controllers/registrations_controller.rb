class RegistrationsController < Devise::RegistrationsController
  before_action :set_devise_mapping, only: [:new, :create]

  def new
    @user = User.new
    set_minimum_password_length
  end

  def create
    @user = User.new(user_params)
    normalize_and_validate_user(@user)
    if @user.errors.any?
      puts "User errors: #{@user.errors.full_messages}"
      render :new
    else
      @user.generate_otp_secret unless @user.otp_secret.present?
      if @user.save
        session[:otp_user_id] = @user.id
        session[:otp_for] = 'registration'
  
        if @user.nursery
          session[:temporary_user_data] = @user.attributes.slice('nome', 'cognome', 'email', 'password', 'address', 'nursery')
          redirect_to register_nursery_path
        else
          send_otp_and_start_timer(@user, 'registrazione')
          puts "Redirecting to OTP verification"
          redirect_to register_verify_otp_path
        end
      else
        logger.debug "User save failed: #{@user.errors.full_messages}"
        render :new
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
      puts "quasi finito?"
      if @user.verify_otp(otp_attempt)
        puts "finito?"
        clear_temporary_session_data
        sign_in_and_redirect @user, event: :authentication
        redirect_to nursery_profile_path if @user.nursery == 1
        #render json: { success: true }
      else
        flash.now[:alert] = "Codice OTP non valido o scaduto. Riprova."
        render :verify_otp
      end
    elsif request.get?
      # Invia un nuovo OTP solo se l'utente richiede un nuovo codice
      if params[:resend_otp] == "true"
        send_otp_and_start_timer(@user, 'registrazione')
        flash[:notice] = "Un nuovo codice OTP è stato inviato."
      end
      render :verify_otp
    end
  end    

  private

  def send_otp_and_start_timer(user, purpose)
    user.invalidate_otp
    new_otp = user.generate_otp
    UserMailer.otp_email(user, new_otp, purpose).deliver_now
  end

  def user_params
    params.require(:user).permit(:nome, :cognome, :email, :password, :password_confirmation, :nursery, :address)
  end

  def set_devise_mapping
    @devise_mapping = Devise.mappings[:user]
  end

  def set_minimum_password_length
    if @devise_mapping && @devise_mapping.validatable?
      @minimum_password_length = resource_class.password_length.min
    end
  end

  def normalize_and_validate_user(user)
    user.email = user.email.downcase.strip
    user.nome = user.nome.strip.titleize
    user.cognome = user.cognome.strip.titleize
    user.address = user.address.strip

    validate_user(user)
  end

  def validate_user(user)
    user.errors.add(:nome, "Per proseguire è necessario inserire il nome") if user.nome.blank?
    user.errors.add(:cognome, "Per proseguire è necessario inserire il cognome") if user.cognome.blank?

    if User.exists?(email: user.email)
      user.errors.add(:email, "Impossibile utilizzare questo indirizzo email per la registrazione. Qualcuno ha già effettuato l'iscrizione utilizzando questo indirizzo!")
    end

    if user.password.present? && (
      user.password.length < 8 ||
      !user.password.match(/[A-Z]/) ||
      !user.password.match(/\d/) ||
      !user.password.match(/[\W_]/)
    )
      user.errors.add(:password, "La password inserita non è valida, crearne una che rispetti i seguenti requisiti: 
        - Almeno 8 caratteri 
        - Deve contenere almeno una lettera maiuscola 
        - Deve contenere almeno un numero 
        - Deve contenere almeno un carattere speciale")
    end
    user.errors.add(:password_confirmation, "La password confermata è diversa da quella inserita precedentemente") if user.password != user.password_confirmation

    user.errors.add(:address, "Per proseguire è necessario inserire l'indirizzo") if user.address.blank?
    user.errors.add(:address, "L'indirizzo inserito non è valido.") unless valid_address?(user.address)
    
    if !valid_email_domain?(user.email)
      user.errors.add(:email, "L'indirizzo email che hai inserito contiene un dominio inesistente!")
    end
  end

  def valid_email_domain?(email)
    domain = email.split('@').last
    User::VALID_DOMAINS.include?(domain)
  end

  def valid_address?(address)
    results = geo(address)
    results.present? && results.first.coordinates.present?
  end

  def geo(address)
    Geocoder.search(address)
  end

  def clear_temporary_session_data
    session.delete(:temporary_user_data)
    session.delete(:otp_user_id)
  end
end
