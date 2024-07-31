Rails.application.routes.draw do
  root 'home#index'

  get 'myplants', to: 'myplants#index'

  get 'infoplants', to: 'infoplants#index'
  #resources :infoplants

  get 'nurseries', to: 'nurseries#index'
  resources :nurseries, only: [:index, :show]

  post 'login', to: 'sessions#create'
  
end
