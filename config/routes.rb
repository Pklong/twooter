Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api do
    defaults format: :json do
      resource :session, only: [:create, :destroy]
      resources :users, param: :name, except: [:new, :edit]
      resources :twoots, except: [:new, :edit]
    end
  end

  get '*path', to: 'static_pages#root'
end
