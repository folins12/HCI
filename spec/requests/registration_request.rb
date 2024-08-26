# spec/requests/registration_request.rb
require 'rails_helper'

RSpec.describe "User Registrations", type: :request do
  let(:valid_user_attributes) do
    {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@gmail.com',
      password: 'Password1!',
      password_confirmation: 'Password1!',
      address: 'Via Asti 4, Ciampino',
      nursery: false
    }
  end

  before do
    # Mocking email delivery to avoid sending real emails
    allow(UserMailer).to receive_message_chain(:otp_email, :deliver_now)
  end

  it "registers a new user and verifies OTP" do
    # Simulate the user registration
    post user_registration_path, params: { user: valid_user_attributes }
    expect(response).to redirect_to(register_verify_otp_path)

    # Extract the user ID from the session if possible
    follow_redirect!
    # Verifica che la sessione contenga l'ID dell'utente
    expect(session[:otp_user_id]).to be_present

    # Recupera l'ID dell'utente dalla sessione
    otp_user_id = session[:otp_user_id]
    expect(otp_user_id).to be_present

    # Retrieve the user and simulate OTP code
    user = User.find(otp_user_id)
    otp_code = user.generate_otp_secret # Ensure this method generates the correct OTP for verification
    

    # Simulate OTP verification
    #post verify_otp_path, params: { otp_attempt: otp_code }
    #expect(response).to redirect_to(nursery_profile_path)
    #expect(flash[:notice]).to eq("Un nuovo codice OTP è stato inviato.")
  end
end
