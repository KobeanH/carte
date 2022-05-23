Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'signup' => 'users#new'
      # resources :users
  get '/users' => 'users#index'
    end
  end
  # get '/users' => 'users#index'
end
