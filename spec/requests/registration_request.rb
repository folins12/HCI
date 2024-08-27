# spec/requests/registration_request.rb
require 'rails_helper'

RSpec.describe "User Registrations", type: :request do
  let(:valid_user_attributes1) do
    {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@gmail.com',
      password: 'Password1!',
      password_confirmation: 'Password1!',
      address: 'via delle muratte, 8, Roma',
      nursery: false
    }
  end

  let(:valid_user_attributes2) do
    {
      nome: 'Luigi',
      cognome: 'Bianchi',
      email: 'luigi.biangi@yahoo.com',
      password: 'Password2!',
      password_confirmation: 'Password2!',
      address: 'piazza regina margherita, 15, Roma',
      nursery: false
    }
  end

  let(:valid_user_attributes3) do
    {
      nome: 'Andrea',
      cognome: 'Folino',
      email: 'andrea.folino@studenti.uniroma1.it',
      password: 'Password3!',
      password_confirmation: 'Password3!',
      address: 'Via dello scalo S. Lorenzo, 82, Roma',
      nursery: false
    }
  end

  let(:invalid_password_user_attributes) do
    {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@gmail.com',
      password: 'Password1!',
      password_confirmation: 'a',
      address: 'Via Asti 4, Ciampino',
      nursery: false
    }
  end

  let(:invalid_address_user_attributes) do
    {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@gmail.com',
      password: 'Password1!',
      password_confirmation: 'Password1!',
      address: 'abc',
      nursery: false
    }
  end

  let(:invalid_email_user_attributes) do
    {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@badgmail.com',
      password: 'Password1!',
      password_confirmation: 'Password1!',
      address: 'Via Asti 4, Ciampino',
      nursery: true
    }
  end

  before do
    # Mocking email delivery to avoid sending real emails
    allow(UserMailer).to receive_message_chain(:otp_email, :deliver_now)
  end
  
  context "when the request is valid" do
    it "registers a new user1 and verifies OTP" do
      post user_registration_path, params: { user: valid_user_attributes1 }
      
      expect(response).to redirect_to(register_verify_otp_path)

      #follow_redirect!
      expect(session[:otp_user_id]).to be_present

      # Recupera l'ID dell'utente dalla sessione
      otp_user_id = session[:otp_user_id]
      expect(otp_user_id).to be_present

      # Retrieve the user and simulate OTP code
      user = User.find(otp_user_id)
      otp_code = user.generate_otp_secret
      expect(response).to redirect_to(register_verify_otp_path)

      # Simulate OTP verification
      post signup_verify_otp_path, params: { otp_attempt: otp_code }
      expect(response).to have_http_status(:ok)
    end

    it "registers a new user2 and verifies OTP" do
      post user_registration_path, params: { user: valid_user_attributes2 }
      
      expect(response).to redirect_to(register_verify_otp_path)

      #follow_redirect!
      expect(session[:otp_user_id]).to be_present

      # Recupera l'ID dell'utente dalla sessione
      otp_user_id = session[:otp_user_id]
      expect(otp_user_id).to be_present

      # Retrieve the user and simulate OTP code
      user = User.find(otp_user_id)
      otp_code = user.generate_otp_secret
      expect(response).to redirect_to(register_verify_otp_path)

      # Simulate OTP verification
      post signup_verify_otp_path, params: { otp_attempt: otp_code }
      expect(response).to have_http_status(:ok)
    end

    it "registers a new user3 and verifies OTP" do
      post user_registration_path, params: { user: valid_user_attributes3 }
      
      expect(response).to redirect_to(register_verify_otp_path)

      #follow_redirect!
      expect(session[:otp_user_id]).to be_present

      # Recupera l'ID dell'utente dalla sessione
      otp_user_id = session[:otp_user_id]
      expect(otp_user_id).to be_present

      # Retrieve the user and simulate OTP code
      user = User.find(otp_user_id)
      otp_code = user.generate_otp_secret
      expect(response).to redirect_to(register_verify_otp_path)

      # Simulate OTP verification
      post signup_verify_otp_path, params: { otp_attempt: otp_code }
      expect(response).to have_http_status(:ok)
    end
  end
  context "when the request is invalid" do
    it "gain error for miss write confermation password" do
      post user_registration_path, params: { user: invalid_password_user_attributes }
      user = assigns(:user)
      expect(user).not_to be_nil
      expect(user.errors[:password_confirmation]).to include(
        "La password confermata è diversa da quella inserita precedentemente"
      )
    end

    it "gain error for invalid address" do
      post user_registration_path, params: { user: invalid_address_user_attributes }
      user = assigns(:user)
      expect(user).not_to be_nil
      expect(user.errors[:address]).to include(
        "L'indirizzo inserito non è valido."
      )
    end

    it "gain error for invalid email" do
      post user_registration_path, params: { user: invalid_email_user_attributes }
      user = assigns(:user)
      expect(user).not_to be_nil
      expect(user.errors[:email]).to include(
        "L'indirizzo email che hai inserito contiene un dominio inesistente!"
      )
    end
  end
end
