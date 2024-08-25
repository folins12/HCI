# spec/requests/registration_request.rb
require 'rails_helper'

RSpec.describe "User Registrations", type: :request do
  let(:valid_user_attributes) do
    {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
      password: 'Password1!',
      password_confirmation: 'Password1!',
      address: 'Via Roma 123',
      nursery: false
    }
  end

  before do
    # Mocking email delivery to avoid sending real emails
    allow(UserMailer).to receive_message_chain(:otp_email, :deliver_now)
  end

  it "registers a new user and verifies OTP" do
    # Simulate the user registration
    post new_user_registration_path, params: { user: valid_user_attributes }
    expect(response).to redirect_to(register_verify_otp_path)
    
    # Retrieve the user ID from the session
    user_id = session[:otp_user_id]
    expect(user_id).to be_present

    # Simulate the OTP verification
    otp_code = User.find(user_id).otp_secret # Assuming OTP code is same as the secret for the sake of example

    post verify_otp_path, params: { otp_attempt: otp_code }

    expect(response).to redirect_to(nursery_profile_path)
    expect(flash[:notice]).to eq("Un nuovo codice OTP è stato inviato.")
  end
end