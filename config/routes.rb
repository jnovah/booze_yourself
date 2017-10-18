Rails.application.routes.draw do
  root "static_files#index"
<<<<<<< HEAD

  get '*path', to: 'static_files#index'
=======
>>>>>>> ffb635117678a0548736569aaad40c1af2a7edc3
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
