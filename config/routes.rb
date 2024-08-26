Rails.application.routes.draw do
  
  get 'test_mailer', to: 'test_mailer#index'

  devise_for :users, skip: [:sessions, :registrations]

  root 'home#index'
  #get 'reservations/new'
  #get 'reservations/create'
  #get 'sessions/new'
  #get 'sessions/create'
  #get 'sessions/destroy'
  #get 'registrations/new'
  #get 'registrations/create'
  get 'about', to: 'home#about', as: 'about'

  get 'myplants', to: 'myplants#index'

  get 'infoplants', to: 'infoplants#index'
  get 'infoplants/:id', to: 'infoplants#show', as: 'infoplant'
  post 'addmyplant', to: 'myplants#addmyplant'

  get 'nurseries', to: 'nurseries#index'
  get 'nurseries/:id', to: 'nurseries#show', as: 'nursery'
  post 'nurseries', to: 'nurseries#create'

  get 'nurseries/:id/edit_image', to: 'nurseries#edit_image', as: 'edit_nursery_image'
  patch 'nurseries/:id/update_image', to: 'nurseries#update_image', as: 'update_nursery_image'

  #patch '/nurseries', to: 'nurseries#update'
  #get 'locations/get_coordinates', to: 'locations#get_coordinates'

  #get 'register', to: 'registrations#new'
  #post 'register', to: 'registrations#create'

  #get 'register_nursery', to: 'nurseries#new', as: 'new_nursery'
  #post 'register_nursery', to: 'nurseries#create', as: 'create_nursery'

  get 'users/fetch_weather', to: 'users#fetch_weather'

  #get 'login', to: 'sessions#new'
  #post 'login', to: 'sessions#create'
  #get 'logout', to: 'sessions#destroy'


  get 'user_profile', to: 'users#profile'
  patch 'user_profile', to: 'users#update'
  post 'removemyplant', to: 'myplants#removemyplant'

  post 'add_to_nursery', to: 'nursery_plants#add_to_nursery'
  post 'decreserve', to: 'users#decreserve'

  get 'nursery_profile', to: 'nursery_profile#profile', as: 'nursery_profile'
  post 'incdisp', to: 'nursery_plants#incdisp'
  post 'decdisp', to: 'nursery_plants#decdisp'
  post 'removenursplant', to: 'nursery_plants#removenursplant'

  patch 'nursery_profile/update', to: 'nursery_profile#update_profile', as: 'update_nursery_profile'

  resources :users, only: [:show, :edit, :update]
  post 'reserve', to: 'nursery_plants#reserve'

  resources :nursery_profile do
    post 'satisfy_order', on: :collection
  end

  #devise_scope :user do
    #get 'login', to: 'users/sessions#new'
    #get 'register', to: 'users/registrations#new'
   # post 'register', to: 'users/registrations#create'
  #end

  as :user do
    get 'login', to: 'sessions#new', as: :new_user_session
    post 'login', to: 'sessions#create', as: :user_session
    get 'logout', to: 'sessions#destroy', as: :destroy_user_session
  
    get 'signup', to: 'registrations#new', as: :new_user_registration
    post 'signup', to: 'registrations#create', as: :user_registration

    get 'login/verify_otp', to: 'users#verify_otp', as: :login_verify_otp
    post 'login/verify_otp', to: 'users#verify_otp'
  
    get 'signup/verify_otp', to: 'registrations#verify_otp', as: :register_verify_otp
    post 'signup/verify_otp', to: 'registrations#verify_otp'

    get 'register_nursery', to: 'nurseries#new', as: 'register_nursery'
    post 'register_nursery', to: 'nurseries#create'

    get 'forgot_password', to: 'sessions#new_password_reset', as: :new_password_reset
    post 'forgot_password', to: 'sessions#send_reset_password_token', as: :send_reset_password_token
    get 'reset_password', to: 'sessions#edit_password_reset', as: :edit_password_reset
    post 'reset_password', to: 'sessions#reset_password', as: :reset_password
    get 'resend_reset_password_token', to: 'sessions#resend_reset_password_token'
    post 'resend_reset_password_token', to: 'sessions#resend_reset_password_token'

  end

  post 'auth/login', to: 'jwt#login'
  post 'testprova', to: 'infoplants#prova'

end
