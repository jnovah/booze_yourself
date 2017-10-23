class Api::V1::BeersController < ApplicationController
  def index
    beerList = $brewery_db.beers.all
    render json: beerList.first
  end
end
