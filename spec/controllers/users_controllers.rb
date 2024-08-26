require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "POST #create" do
    let(:valid_user_params) do
      {
        nome: 'Mario',
        cognome: 'Rossi',
        email: 'mario.rossi@gmail.com',
        password: 'Password1!',
        password_confirmation: 'Password1!',
        address: 'Via Roma 123',
        nursery: false
      }
    end

    context "with valid parameters" do
      it "creates a new user and redirects to OTP verification page" do
        expect {
          post :create, params: { user: valid_user_params }
        }.to change(User, :count).by(1)

        user = User.last
        expect(session[:otp_user_id]).to eq(user.id)
        expect(session[:otp_for]).to eq('registration')
        expect(response).to redirect_to(register_verify_otp_path)
      end
    end

    context "with invalid parameters" do
      it "renders the new template" do
        invalid_user_params = valid_user_params.merge(email: "")
        post :create, params: { user: invalid_user_params }

        expect(response).to render_template(:new)
        expect(assigns(:user).errors).not_to be_empty
      end
    end
  end
end
RSpec.describe UsersController, type: :controller do
  describe "POST #verify_otp" do
    let(:user) { create(:user, otp_secret: "123456") }

    before do
      session[:otp_user_id] = user.id
    end

    context "with valid OTP" do
      it "authenticates the user and redirects to nursery profile if applicable" do
        allow(user).to receive(:verify_otp).with("123456").and_return(true)

        post :verify_otp, params: { otp_attempt: "123456" }

        expect(response).to redirect_to(nursery_profile_path)
        expect(flash[:alert]).to be_nil
      end
    end

    context "with invalid OTP" do
      it "renders the verify_otp template with an alert" do
        allow(user).to receive(:verify_otp).with("wrong_otp").and_return(false)

        post :verify_otp, params: { otp_attempt: "wrong_otp" }

        expect(response).to render_template(:verify_otp)
        expect(flash[:alert]).to eq("Codice OTP non valido o scaduto. Riprova.")
      end
    end

    context "when resending OTP" do
      it "sends a new OTP and shows a notice" do
        get :verify_otp, params: { resend_otp: "true" }

        expect(flash[:notice]).to eq("Un nuovo codice OTP è stato inviato.")
        expect(response).to render_template(:verify_otp)
      end
    end
  end
end
