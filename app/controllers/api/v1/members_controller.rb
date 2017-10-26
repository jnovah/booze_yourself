class Api::V1::MembersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!

  def index
    member = { username: current_user.username, signed_in: user_signed_in?, avatar: current_user.avatar.url}
    if user_signed_in?
      render json: member
    end
  end

end
