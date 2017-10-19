Rails.application.routes.draw do
  root "static_files#index"
  devise_for :users

  get '*path', to: 'static_files#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :users, controllers: {
  #   sessions: 'users/sessions'
  # }
  # devise_for :users do
  #   get '/users/sign_out' => 'devise/sessions#destroy'
  # end
end
