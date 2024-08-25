# spec/requests/addplant_request.rb
require 'rails_helper'

RSpec.describe "Myplants", type: :request do
  let!(:user) { User.create( nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@example.com',
                            password: 'Password1!', password_confirmation: 'Password1!',
                            address: 'Via Roma 123', nursery: false) }
  let!(:plant) { Plant.create( name: 'Aloe Vera', typology: 'Da Appartamento', light: '2',
                              irrigation: '1', size: '1', climate: 'Arido', use: 'Medicinale') }
  let!(:myplant) { Myplant.create(user: user, plant: plant) }

  

  before do
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
  end
  describe "POST /addmyplant" do

    context "when the request is valid" do
      it "creates a new Myplant and returns success" do
        post '/addmyplant', params: { plant_id: plant.id }, headers: { 'ACCEPT' => 'application/json' }
        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_truthy
      end
    end

    #context "when the request is invalid" do
    #  it "returns an error when saving fails" do
    #    # Simula un errore di salvataggio
    #    allow_any_instance_of(Myplant).to receive(:save).and_return(false)
    #    allow_any_instance_of(Myplant).to receive_message_chain(:errors, :full_messages).and_return(["Errore nel salvataggio della prenotazione."])
    #    post '/addmyplant', params: { plant_id: nil }, headers: { 'ACCEPT' => 'application/json' }
    #    expect(response).to have_http_status(:unprocessable_entity)
    #    json_response = JSON.parse(response.body)
    #    expect(json_response['success']).to be_falsey
    #    expect(json_response['message']).to eq("Errore nel salvataggio della prenotazione.")
    #    expect(json_response['errors']).to include("Errore nel salvataggio della prenotazione.")
    #  end
    #end

  end

  describe "POST /removemyplant" do
    context "when the myplant exists" do
      it "removes the Myplant and returns success" do
        post '/removemyplant', params: { plant_id: plant.id }, headers: { 'ACCEPT' => 'application/json' }
        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_truthy

        # Verifica che la Myplant sia stata effettivamente rimossa
        expect(Myplant.find_by(user: user, plant: plant)).to be_nil
      end
    end

    #context "when the myplant does not exist" do
    #  it "returns an error" do
    #    # Proviamo a rimuovere una Myplant che non esiste
    #    delete '/removemyplant', params: { plant_id: 999 }, headers: { 'ACCEPT' => 'application/json' } # Un ID che non esiste
    #    expect(response).to have_http_status(:unprocessable_entity)
    #    json_response = JSON.parse(response.body)
    #    expect(json_response['success']).to be_falsey
    #    expect(json_response['message']).to eq("Errore nella rimozione della pianta.")
    #    expect(json_response['errors']).to include("Pianta non trovata")
    #  end
    #end
  end
end
