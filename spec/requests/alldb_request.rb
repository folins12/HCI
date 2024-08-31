# spec/requests/addplant_request.rb
require 'rails_helper'

RSpec.describe "DB comunications", type: :request do
  let!(:user1) { User.create!( id:1,  nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@gmail.com',
                            password: 'Password1!',
                            address: 'Via Roma 123', nursery: false) }
  let!(:plant) { Plant.create( name: 'Aloe Vera', typology: 'Da Appartamento', light: '2',
                              irrigation: '1', size: '1', climate: 'Arido', use: 'Medicinale') }
  let!(:myplant) { Myplant.create(user_id: user1.id, plant_id: plant.id) }

  before do
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user1)
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
      
    context "when the request is invalid" do
      it "returns an error when saving fails" do
        allow_any_instance_of(Myplant).to receive(:save).and_return(false)
        allow_any_instance_of(Myplant).to receive_message_chain(:errors, :full_messages).and_return(["Errore nel salvataggio della prenotazione."])
        post '/addmyplant', params: { plant_id: nil }, headers: { 'ACCEPT' => 'application/json' }
        
        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("Errore nel salvataggio della prenotazione.")
        expect(json_response['errors']).to include("Errore nel salvataggio della prenotazione.")
      end
    end

  end

  describe "POST /removemyplant" do
    context "when the myplant exists" do
      it "removes the Myplant and returns success" do
        post '/removemyplant', params: { plant_id: plant.id }, headers: { 'ACCEPT' => 'application/json' }
        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_truthy

        # Verifica che la Myplant sia stata effettivamente rimossa
        expect(Myplant.find_by(user: user1, plant: plant)).to be_nil
      end
    end

    context "when the myplant does not exist" do
      it "returns an error" do
        # Proviamo a rimuovere una Myplant che non esiste
        post '/removemyplant', params: { plant_id: 999 }, headers: { 'ACCEPT' => 'application/json' } # Un ID che non esiste
        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("Errore nella rimozione della pianta.")
        expect(json_response['errors']).to include("Pianta non trovata")
      end
    end

  end

  let!(:user2) { User.create( nome: 'Luigi', cognome: 'Bianchi', email: 'luigi.bianchi@gmail.com',
  password: 'Password2!', password_confirmation: 'Password2!',
  address: 'Via Milano 321', nursery: true) }

  let!(:nursery) {Nursery.create( name: 'viaio di luigi', number: 1234567890,
                  id_owner:user2.id, email: 'emailviacio@gmail.com',
                  address: 'via Giovanni Giolitti 34, Roma', location: 'Roma',
                  open_time: '9:00', close_time: '18:00', description: 'description' )}
  
  describe "POST /add_to_nursery" do
    context "when the request is valid" do
      it "creates a new nursery-plant and returns success" do
        #setto il current_user a user2
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user2)
        post '/add_to_nursery', params: { plant_id: plant.id }, headers: { 'ACCEPT' => 'application/json' }
        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)

        expect(json_response['success']).to be_truthy
      end
    end

    context "when the request is invalid" do
      it "returns an error when the user is not a nursery" do
        allow_any_instance_of(NurseryPlant).to receive(:save).and_return(false)
        allow_any_instance_of(NurseryPlant).to receive_message_chain(:errors, :full_messages).and_return(["Errore nel salvataggio della prenotazione."])
        #con ancora il current_user a user1
        post '/add_to_nursery', params: { plant_id: plant.id }, headers: { 'ACCEPT' => 'application/json' }
        
        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("Nessun vivaio trovato per l'utente corrente.")
      end

      it "returns an error when saving fails" do
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user2)
        allow_any_instance_of(NurseryPlant).to receive(:save).and_return(false)
        allow_any_instance_of(NurseryPlant).to receive_message_chain(:errors, :full_messages).and_return(["Errore nel salvataggio della prenotazione."])
        post '/add_to_nursery', params: { plant_id: nil }, headers: { 'ACCEPT' => 'application/json' }
        
        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("Errore nel salvataggio della pianta nel vivaio.")
        expect(json_response['errors']).to include("Errore nel salvataggio della prenotazione.")
      end
    end
  end

  describe "POST /removenursplant" do
    context "when the myplant exists" do
      it "removes the Myplant and returns success" do
        nursplant = NurseryPlant.create(nursery_id: nursery.id, plant_id: plant.id, max_disponibility: 1, num_reservations: 0)
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user2)
        post '/removenursplant', params: { plant_id: plant.id , nursery_id: nursery.id}, headers: { 'ACCEPT' => 'application/json' }
        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_truthy

        # Verifica che la Myplant sia stata effettivamente rimossa
        expect(NurseryPlant.find_by(nursery: nursery, plant: plant)).to be_nil
      end
    end

    context "when the plant does not exist" do
      it "returns an error" do
        # Proviamo a rimuovere una Myplant che non esiste
        post '/removenursplant', params: { plant_id: 999 , nursery_id: nursery.id }, headers: { 'ACCEPT' => 'application/json' } # Un ID che non esiste
        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("Errore nell'eliminazione della pianta.")
      end
    end

  end

  let(:np) {NurseryPlant.create(nursery_id: nursery.id, plant_id: plant.id, max_disponibility: 1, num_reservations: 0)}
  let(:reservation) {Reservation.create(nursery_plant_id: np.id, user_email: user1.email)}
  
  describe "POST /reserve" do
    context "when the request is valid" do
      it "make a reservarion and returns success" do
        post '/reserve', params: { nursery_plant_id: np.id }, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['new_availability']).to eq((np.max_disponibility-np.num_reservations)-1)
        expect(json_response['success']).to be_truthy
      end
    end

    context "when the request is not valid" do
      it "returns an error" do
        post '/reserve', params: { nursery_plant_id: 99 }, headers: { 'ACCEPT' => 'application/json' }
        
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
      end
    end
  end

  describe "POST /removenursplant" do
    context "when the request is valid" do
      it "delete a reservarion and returns success" do
        post '/removenursplant', params: { plant_id: np.plant_id, nursery_id: np.nursery_id}, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_truthy
      end
    end

    context "when the request is not valid" do
      it "returns an error con pianta sbagliata" do
        post '/removenursplant', params: { plant_id: 99, nursery_id: np.nursery_id }, headers: { 'ACCEPT' => 'application/json' }
        
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("Errore nell'eliminazione della pianta.")
        expect(json_response['errors']).to eq("Pianta non trovata")
      end

    end
  end

  describe "POST /incdisp" do
    context "when the request is valid" do
      it "increase disponibility and returns success" do
        post '/incdisp', params: { nursery_id: np.nursery_id, plant_id: np.plant_id }, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_truthy
        expect(json_response['max_disponibility']).to eq(np.max_disponibility+1)
      end
    end

    context "when the request is not valid" do
      it "returns an error" do
        post '/incdisp', params: { nursery_id: np.nursery_id, plant_id: 3 }, headers: { 'ACCEPT' => 'application/json' }
        
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
      end
    end
  end

  describe "POST /decdisp" do
    context "when the request is valid" do
      it "increase disponibility and returns success" do
        post '/decdisp', params: { nursery_id: np.nursery_id, plant_id: np.plant_id }, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_truthy
        expect(json_response['max_disponibility']).to eq(np.max_disponibility-1)
      end
    end

    context "when the request is not valid" do
      it "returns an error when cant find the nursery_plant" do
        post '/decdisp', params: { nursery_id: np.nursery_id, plant_id: 3 }, headers: { 'ACCEPT' => 'application/json' }
        
        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("nursery_plant not found.")
      end

      it "returns an error when cant decrease" do
        post '/decdisp', params: { nursery_id: np.nursery_id, plant_id: np.plant_id }, headers: { 'ACCEPT' => 'application/json' }
        post '/decdisp', params: { nursery_id: np.nursery_id, plant_id: np.plant_id }, headers: { 'ACCEPT' => 'application/json' }

        json_response = JSON.parse(response.body)
        expect(json_response['success']).to be_falsey
        expect(json_response['message']).to eq("cant decrease more.")
      end
    end

  end

end
