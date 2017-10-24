require "net/http"

class Api::V1::BreweriesController < ApplicationController
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
