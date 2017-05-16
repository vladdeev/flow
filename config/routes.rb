Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :workspaces do
      resources :projects
      resources :users, only: [:index]
    end
    resources :tasks
  end

  post 'join/:workspace_id/:user_id/', to: 'api/users#join', defaults: { :format => 'json' }
end
