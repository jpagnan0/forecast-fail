Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, :location, only: [:index, :create]
      post 'users/:name', to: 'users#loggedin'
    end
  end


end
