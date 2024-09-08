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
      render :new
    else
      #session[:otp_user_id] = @user.id
      session[:otp_user_data] = user_params.slice('nome', 'cognome', 'email', 'password', 'password_confirmation', 'address', 'nursery')
      otp_secret = ROTP::Base32.random_base32
      totp = ROTP::TOTP.new(otp_secret, digits: 8)
      otp_code = totp.now
  
      session[:otp_secret] = otp_secret
      session[:otp_code] = otp_code
  
      # Passa i dati individuali al mailer
      UserMailer.otp_email(session[:otp_user_data]['email'], session[:otp_user_data]['nome'], otp_code, 'registrazione').deliver_now
      
      if user_params[:nursery]=="true"
        redirect_to register_nursery_path
      else
        redirect_to register_verify_otp_path
      end
    end
  end
  

  def verify_otp
    @user_data = session[:otp_user_data]
    puts "verify otpHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
    puts @user_data

    return redirect_to new_user_registration_path, alert: "Sessione scaduta o utente non trovato." unless @user_data

    # Recupera il secret e l'OTP dalla sessione
    otp_secret = session[:otp_secret]
    otp_code = session[:otp_code]
    
    if request.post?
      otp_attempt = params[:otp_attempt].strip
      
      totp = ROTP::TOTP.new(otp_secret, digits: 8)
      if totp.verify(otp_attempt, drift_behind: 60)
        # Verifica OTP e crea l'utente nel database
        @user = User.new(@user_data)
        @user.otp_secret = otp_secret  # Imposta il secret sull'utente
        @user.save(validate: false)  # Salva l'utente
        puts "YYYYYYYYYYYYYYYYYy"
        puts @user
        puts @user_data
        if @user_data["nursery"]=="true"
          puts "XXXXXXXXXXXXXXXXXXXXXX"
          @nursery_data = session[:otp_nursery_data].merge!('id_owner' => @user.id)
          puts @nursery_data
          @nursery=Nursery.new(@nursery_data)
          @nursery.save()
        end


        clear_temporary_session_data
        sign_in_and_redirect @user, event: :authentication
        #
        redirect_to nursery_profile_path if @user.nursery == 1
      else
        flash.now[:alert] = "Codice OTP non valido o scaduto. Riprova."
        render :verify_otp
      end
    elsif request.get?
      if params[:resend_otp] == "true"
        otp_secret = session[:otp_secret]
        totp = ROTP::TOTP.new(otp_secret, digits: 8)
        otp_code = totp.now
        session[:otp_code] = otp_code
        UserMailer.otp_email(@user_data['email'], @user_data['nome'], otp_code, 'registrazione').deliver_now
        flash[:notice] = "Un nuovo codice OTP è stato inviato."
      end
      render :verify_otp
    end
  end

  private

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
    session.delete(:otp_user_data)
    session.delete(:otp_secret)
    session.delete(:otp_code)
  end
end
