class Api::V1::BeersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, only: [:show]

  def index
    # beerList = $brewery_db.beers.all
    # Beer.all.each do |beer|
    #   brewery = JSON.parse($brewery_db.brewery("DYA1CI").beers)
    #   our_brewery = Brewery.create!(name: brewery.name, website: brewery.website, brewery_db_id: brewery.id)
    #   beer.brewery_id = our_brewery.id
    # end
    render json: Beer.all.limit(20)
  end

  def show
    render json: Beer.find(params[:id]), serializer: BeerShowSerializer
  end
end
