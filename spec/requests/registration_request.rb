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
      nursery: true
    }
  end

  let(:valid_nursery_attributes) do
    {
      name: 'vivaioProva',
      number: 1234567890,
      email: 'emailvivaio@gmail.com',
      address: 'via olivella, 32, Albano Laziale',
      location: 'Albano',
      open_time: '9:00',
      close_time: '18:00', 
      description: 'random description'
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
    allow(UserMailer).to receive(:otp_email).and_return(double(deliver_now: true))
  end
  
  context "when the request is valid, may take a while..." do
    it "registers a new user1 and verifies OTP" do
      post user_registration_path, params: { user: valid_user_attributes1 }

      expect(session[:otp_user_data]['email']).to eq('mario.rossi@gmail.com')
      expect(session[:otp_user_data]['nome']).to eq('Mario')

      expect(session[:otp_code]).to be_present
      expect(session[:otp_secret]).to be_present

      expect(UserMailer).to have_received(:otp_email).with('mario.rossi@gmail.com', 'Mario', session[:otp_code], 'registrazione')
      
      expect(response).to redirect_to(register_verify_otp_path)

      post signup_verify_otp_path, params: { otp_attempt: session[:otp_code] }
      expect(response).to have_http_status(:found)

      user_nursery = User.last
      expect(user_nursery).to be_present
      expect(user_nursery.nome).to eq('Mario')
    end

    it "registers a new user2 and verifies OTP" do
      post user_registration_path, params: { user: valid_user_attributes2 }

      expect(session[:otp_user_data]['email']).to eq('luigi.biangi@yahoo.com')
      expect(session[:otp_user_data]['nome']).to eq('Luigi')

      expect(session[:otp_code]).to be_present
      expect(session[:otp_secret]).to be_present

      expect(UserMailer).to have_received(:otp_email).with('luigi.biangi@yahoo.com', 'Luigi', session[:otp_code], 'registrazione')
      
      expect(response).to redirect_to(register_verify_otp_path)

      # Simulate OTP verification
      post signup_verify_otp_path, params: { otp_attempt: session[:otp_code] }
      expect(response).to have_http_status(:found)

      user_nursery = User.last
      expect(user_nursery).to be_present
      expect(user_nursery.nome).to eq('Luigi')
    end

    it "registers a new user3 and his nursery and verifies OTP" do
      post user_registration_path, params: { user: valid_user_attributes3 }

      expect(session[:otp_user_data]['email']).to eq('andrea.folino@studenti.uniroma1.it')
      expect(session[:otp_user_data]['nome']).to eq('Andrea')

      expect(session[:otp_code]).to be_present
      expect(session[:otp_secret]).to be_present

      expect(UserMailer).to have_received(:otp_email).with('andrea.folino@studenti.uniroma1.it', 'Andrea', session[:otp_code], 'registrazione')
      
      expect(response).to redirect_to(register_nursery_path)

      #reg vivaio
      post register_nursery_path, params: { nursery: valid_nursery_attributes }
      expect(session[:otp_nursery_data]).to be_present

      expect(response).to redirect_to(register_verify_otp_path)

      post signup_verify_otp_path, params: { otp_attempt: session[:otp_code] }
      expect(response).to have_http_status(:found)

      user_nursery = User.last
      expect(user_nursery).to be_present
      expect(user_nursery.nome).to eq('Andrea')
      # Verifica che il vivaio sia stato creato e associato all'utente
      created_nursery = Nursery.last
      expect(created_nursery).to be_present
      expect(created_nursery.name).to eq('vivaioProva')
      expect(created_nursery.user.nome).to eq("Andrea")

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
