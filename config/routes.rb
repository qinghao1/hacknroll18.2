Rails.application.routes.draw do
  get '/', to: 'sessions#index'
  post '/', to: 'sessions#create'

  get '/:id', to: 'sessions#show'
  post '/:id', to: 'sessions#join'
  
  get '/games/:id', to: 'games#show'
  post '/games/:id', to: 'games#submit'
end
