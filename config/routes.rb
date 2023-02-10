Rails.application.routes.draw do
  resources :staffs
  resources :employees
  resources :customers, only: [:index, :show, :create, :update, :destroy]


  resources :staffs, only: [:index, :show, :create, :update, :destroy]
  
  resources :sessions, only: [:create]


  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  root to: "static#home"
end
