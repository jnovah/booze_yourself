class Api::V1::BeersController < ApplicationController
<<<<<<< HEAD
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, only: [:show]
=======
  skip_before_action :verify_authenticity_token
>>>>>>> e9b69bfa29e47b4ce94fec40ca3200419757bccd

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
<<<<<<< HEAD
    render json: Beer.find(params[:id]), serializer: BeerShowSerializer
=======
    render json: Beer.find(params[:id])
  end

  def create
    search_value = params[:search_value]
    beer_search_result = Beer.where("lower(name) LIKE ?", "%#{search_value.downcase}%")
    # brewery_search_result = Brewery.where("lower(name) LIKE ?", "%#{search_value.downcase}%")
    search_result = beer_search_result.to_json
    # brewery_search_result = brewery_search_result.json
    # search_result.concat(brewery_search_result)
    search_result = JSON.parse(search_result)
    render json: search_result
>>>>>>> e9b69bfa29e47b4ce94fec40ca3200419757bccd
  end
end
