Rails.application.routes.draw do
  get 'piante', to: 'plants#index'
  get 'vivai', to: 'vivai#index'
  get 'home', to: 'home#index'
  root 'pages#home'
end
