Rails.application.routes.draw do
  get 'reservations/new'
  get 'reservations/create'
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  get 'registrations/new'
  get 'registrations/create'
  root 'home#index'

  get 'about', to: 'home#about', as: 'about'

  get 'myplants', to: 'myplants#index'

  get 'infoplants', to: 'infoplants#index'
  get 'infoplants/:id', to: 'infoplants#show', as: 'infoplant'

  get 'nurseries', to: 'nurseries#index'
  get 'nurseries/:id', to: 'nurseries#show', as: 'nursery'

  get 'register', to: 'registrations#new'
  post 'register', to: 'registrations#create'

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  get 'user_profile', to: 'users#profile'
  get 'nursery_profile', to: 'nursery#profile', as: 'nursery_profile'

  resources :users, only: [:show]

  resources :nurseries do
    resources :nursery_plants, only: [] do
      resources :reservations, only: [:new, :create]
    end
  end

end
