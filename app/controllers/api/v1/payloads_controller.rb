require "json"
class Api::V1::PayloadsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  # before_action :authenticate_user!, only: [:create]
  skip_before_action :verify_authenticity_token

  def index
    render json: Payload.first
  end

  def create
    payload = payload_params
    brewery_search_value = payload[:brewery_name]
    type_search_value = payload[:type]
    beer_search_value = payload[:beer_name]

    brewery_search_result = Brewery.where("lower(name) LIKE ?", "%#{brewery_search_value.downcase}%")
    type_search_result = Type.where("lower(name) LIKE ?", "%#{type_search_value.downcase}%")
    beer_search_result = Beer.where("lower(name) LIKE ?", "%#{beer_search_value.downcase}%")

    brewery_id = ''
    type_id = ''
    beer = ''

    if brewery_search_result.length == 0
      Brewery.create(name: brewery_search_value, website: payload[:brewery_website]);
      brewery_id = Brewery.last[:id];
    else
      brewery_id = brewery_search_result.first[:id];
    end

    if type_search_result.length == 0
      Type.create(name: type_search_value);
      type_id = Type.last[:id];
    else
      type_id = type_search_result.first[:id];
    end

    if beer_search_result.length == 0
      Beer.create(name: beer_search_value, abv: payload[:abv], brewery_id: brewery_id, type_id: type_id);
      beer = Beer.last;
    end

    render json: beer
  end

  private

  def payload_params
    params.require(:payload).permit(:beer_name, :abv, :availability, :description, :type, :brewery_name, :brewery_website)
  end
end
