Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    get 'users/:name', to: 'users#show'
    resources :woots, except: [:new, :edit, :update]
    resources :twoots, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
  get "/*path", to: "static_pages#root"
end
