Rails.application.routes.draw do
  get '/', to: 'sessions#index'
  get '/:id', to: 'sessions#show'
  post '/', to: 'sessions#create'
  post '/:id', to: 'sessions#join'
  get '/games/:id', to: 'games#show'
  post '/games/:id', to: 'games#submit'
end
