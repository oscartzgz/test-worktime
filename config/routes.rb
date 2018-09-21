Rails.application.routes.draw do
  namespace :api, format: :json do
    resources :employees
  end

  get 'home/login'
  get 'home/index'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
