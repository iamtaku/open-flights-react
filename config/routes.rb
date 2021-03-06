Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only:[:create, :destroy]
    end
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end
  get '*path', to: 'pages#index', via: :all

end
