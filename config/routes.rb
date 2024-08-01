Rails.application.routes.draw do

  root 'home#index'

  get 'about', to: 'home#about', as: 'about'

  get 'myplants', to: 'myplants#index'

  get 'infoplants', to: 'infoplants#index'
  get 'infoplants/show'

  get 'nurseries', to: 'nurseries#index'
  resources :nurseries, only: [:index, :show]

  post 'login', to: 'sessions#create'

end
