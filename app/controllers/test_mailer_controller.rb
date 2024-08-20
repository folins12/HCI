# app/controllers/test_mailer_controller.rb
class TestMailerController < ApplicationController
  def index
    # Assicurati che ci sia almeno un utente nel database
    user = User.first
    if user
      UserMailer.otp_email(user).deliver_now
      render plain: "Email sent"
    else
      render plain: "No user found"
    end
  end
end
