Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    get 'users/:name', to: 'users#show'
    resources :twoots, except: [:new, :edit, :update]
    resources :likes, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  get "/*path", to: "static_pages#root"
end
