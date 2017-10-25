class Api::V1::UsersController < ApplicationController
protect_from_forgery unless: -> { request.format.json? }
before_filter :authenticate_user!, :only => [:edit, :show, :update, :create, :destroy]
binding.pry


def current_user
  user_signed_in?
end

end
