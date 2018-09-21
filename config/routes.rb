Rails.application.routes.draw do
  resources :employees, only: [:index, :show, :create, :destroy]

  get 'home/login'

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
