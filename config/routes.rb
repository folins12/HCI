Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end



#Rails.application.routes.draw do
#  root 'home#index'
#  resources :plants
#end

Rails.application.routes.draw do
  get 'home/index'
  resources :plants
  root 'plants#index'
end
