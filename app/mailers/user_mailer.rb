class UserMailer < ApplicationMailer
  def otp_email(user, otp_code, purpose)
    @user = user
    @otp_code = otp_code
    @purpose = purpose # "registrazione" o "login"
    
    # Controllo del soggetto basato su `purpose`
    subject_line = case @purpose
                    when 'registrazione'
                      'Il tuo codice OTP per la registrazione'
                    when 'login'
                      'Il tuo codice OTP per il login'
                    when 'profilo'
                      'Il tuo codice OTP per modificare il profilo'
                    else
                      'Il tuo codice OTP'
                    end

    mail(to: @user.email, subject: subject_line) do |format|
      format.text { render plain: "Ciao #{@user.nome},\n\nEcco il tuo codice OTP per #{purpose}: #{@otp_code}" }
      format.html { render html: "<p>Ciao #{@user.nome},</p><p>Ecco il tuo codice OTP per #{purpose}: <strong>#{@otp_code}</strong></p>".html_safe }
    end
  end

  def reset_password_email(user, token)
    @user = user
    @token = token # Token raw inviato via email
    mail(to: @user.email, subject: 'Reimposta la tua password') do |format|
      format.html { render 'reset_password_email' }
    end
  end

end
