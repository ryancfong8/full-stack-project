Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create ]
    resource :session, only:[:create, :destroy]
    resources :restaurants, only: [:create, :destroy, :index, :show, :update]
    resources :reviews, only: [:create, :update, :index, :show, :destroy]
    resources :photos, only: [:create, :destroy]
    resources :searches, only: [:show]
  end
end
