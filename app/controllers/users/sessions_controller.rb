class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]

  def new
    binding.pry
    super
  end

  def destroy
    binding.pry
    super
  end

  protected

  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute, :username, :state, :img, :avatar])
  end
end
