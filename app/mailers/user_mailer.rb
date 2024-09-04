class UserMailer < ApplicationMailer
  def otp_email(email, nome, otp_code, purpose)
    @nome = nome
    @otp_code = otp_code
    @purpose = purpose # "registrazione" o "login"
    
    # Controllo del soggetto basato su `purpose`
    subject_line = case @purpose
                    when 'registrazione'
                      'Il tuo codice OTP per la registrazione'
                    when 'vivaio'
                      'Il tuo codice OTP per modificare le informazioni del vivaio'
                    when 'profilo'
                      'Il tuo codice OTP per modificare il profilo'
                    else
                      'Il tuo codice OTP'
                    end

    mail(to: email, subject: subject_line) do |format|
      format.text { render plain: "Ciao #{@nome},\n\nEcco il tuo codice OTP per #{purpose}: #{@otp_code}" }
      format.html { render html: "<p>Ciao #{@nome},</p><p>Ecco il tuo codice OTP per #{purpose}: <strong>#{@otp_code}</strong></p>".html_safe }
    end
  end

  def reset_password_email(user, token)
    @user = user
    @token = token # Token raw inviato via email
    mail(to: @user.email, subject: 'Reimposta la tua password') do |format|
      format.html { render 'reset_password_email' }
    end
  end

  def order_satisfied_email(user, nursery, plant, quantity)
    @user = user
    @nursery = nursery
    @plant = plant
    @quantity = quantity

    mail(to: @user.email, subject: "La tua richiesta è stata presa in carico dal vivaio #{@nursery.name}") do |format|
      format.html { render 'order_satisfied_email' }
    end
  end
end
