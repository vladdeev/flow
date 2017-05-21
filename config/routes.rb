Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :workspaces do
      resources :projects do
        resources :tasks, only: [:index]
      end
      resources :users, only: [:index]
    end
    resources :tasks do
      resources :comments
    end
    resources :comments, only: [:show, :update, :destroy]
  end

  post 'join/:workspace_id/', to: 'api/users#join', defaults: { format: :json }
end
