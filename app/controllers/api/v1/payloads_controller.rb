require "json"
class Api::V1::PayloadsController < ApplicationController
  # protect_from_forgery unless: -> { request.format.json? }

  # before_action :authenticate_user!, only: [:create]
  skip_before_action :verify_authenticity_token


  def create
    binding.pry
  end

  private

  def payload_params
    params.require(:payload).permit(:beer_name, :abv, :availability, :description, :type, :brewery_name, :brewery_website)
  end
end
