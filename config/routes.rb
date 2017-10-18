Rails.application.routes.draw do
<<<<<<< HEAD
  devise_for :users
  root "static_files#index"
=======
  root "static_files#index"

  get '*path', to: 'static_files#index'
>>>>>>> aa5a89f304da0496fd3d6aca928c3b191f144ec9
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
