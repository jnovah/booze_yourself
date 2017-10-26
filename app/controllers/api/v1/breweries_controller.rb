require "net/http"
require "json"

class Api::V1::BreweriesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, only: [:show, :create]

  # skip_before_action :verify_authenticity_token


  def index
    # Beer.all.each do |beer|
    #   url = "http://api.brewerydb.com/v2/beer/" + beer.brewery_db_id + "/breweries/?key=6e8622bccf5170704fa8452aab7efb48"
    #   uri = URI(url)
    #   response = Net::HTTP.get(uri)
    #   body = JSON.parse(response)
    #   brewery = Brewery.find_by(brewery_db_id: body["data"].first["id"])
    #   beer.update( brewery_id: brewery.id )
    # end
    render json: Beer.first
  end

  
end
