# spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do
  
  #let(:valid_user_attributes) do
  #  {
  #    nome: 'Mario',
  #    cognome: 'Rossi',
  #    email: 'mario.rossi@example.com',
  #    password: 'Password1!',
  #    password_confirmation: 'Password1!',
  #    address: 'Via Roma 123',
  #    nursery: false
  #  }
  #end
#
  #before do
  #  # Mocking email delivery to avoid sending real emails
  #  allow(UserMailer).to receive_message_chain(:otp_email, :deliver_now)
  #end
#
  #it "registers a new user and verifies OTP" do
  #  # Simulate the user registration
  #  post user_registration_path, params: { user: valid_user_attributes }
#
  #  expect(response).to redirect_to(register_verify_otp_path)
#
  #  # Retrieve the user ID from the session
  #  user_id = session[:otp_user_id]
  #  expect(user_id).to be_present
#
  #  # Simulate the OTP verification
  #  otp_code = User.find(user_id).otp_secret # Assuming OTP code is same as the secret for the sake of example
#
  #  post register_verify_otp_path, params: { otp_attempt: otp_code }
#
  #  expect(response).to redirect_to(nursery_profile_path)
  #end





  it "is valid with valid login" do
    user = User.new(email: "test@example.com", nome: "nomeprova", cognome:"cognomeprova", password:"P4sSw0rdS1cUR4", address:"viale regina margherira, 2, Roma", nursery:0, )
    expect(user).to be_valid
  end

  it "is invalid without an email" do
    user = User.new(email: nil)
    expect(user).not_to be_valid
  end
end