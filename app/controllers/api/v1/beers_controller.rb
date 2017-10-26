require "json"

class Api::V1::BeersController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, only: [:show, :create]

  def index
    # beerList = $brewery_db.beers.all
    # Beer.all.each do |beer|
    #   brewery = JSON.parse($brewery_db.brewery("DYA1CI").beers)
    #   our_brewery = Brewery.create!(name: brewery.name, website: brewery.website, brewery_db_id: brewery.id)
    #   beer.brewery_id = our_brewery.id
    # end
    beer_array = []
    beers = Beer.all.limit(22)
    beers.each do |beer|

      rating = 0
      iterations = 0
      beer.reviews.each do |review|
        iterations += 1;
        rating += review.rating.to_i;
      end
      if iterations == 0
        rating = 'No Ratings'
      else
        rating = (rating.to_f / iterations).round(1)
      end
      entry = { id: beer.id, name: beer.name, brewery: {name: beer.brewery.name, website: beer.brewery.website}, rating: rating }
      beer_array.push(entry)
    end
    render json: {beers: beer_array, current_user: {status: user_signed_in?, id: current_user.id}}.to_json
  end

  def show
    beer = Beer.find(params[:id])
    reviews = []
    beer.reviews.each do |review|
      entry = { id: review.id, rating: review.rating, description: review.description, username: review.user.username, avatar: review.user.avatar, beer_id: review.beer_id, created_at: review.created_at}
      reviews.push(entry)
    end
    render json: {beer: beer, brewery: beer.brewery, current_user: {status: user_signed_in?, id: current_user.id}, reviews: reviews }.to_json
  end

  # def create
  #   beer = Beer.new(beer_params)
  # end
  #
  # private
  #
  # def beer_params
  #   binding.pry
  #   params.require(:beer).permit(:)
  # end
end
