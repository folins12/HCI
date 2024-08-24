# spec/requests/prova_request_spec.rb

require 'rails_helper'

RSpec.describe "Infoplants", type: :request do
  describe "POST /testprova" do
    it "returns a successful response with JSON" do
      post '/testprova'
      expect(response).to have_http_status(:ok)  # Verifica che la risposta abbia stato HTTP 200 OK
      expect(response.body).to include('"success":true')  # Verifica che il corpo della risposta contenga "success":true
    end
  end
end
