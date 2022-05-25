Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/signup' => 'users#new'
      resources :users
      post '/login', to: 'sessions#login'
      delete '/logout', to: 'sessions#logout'
      get '/logged_in', to: 'sessions#logged_in?'
    end
  end
end
