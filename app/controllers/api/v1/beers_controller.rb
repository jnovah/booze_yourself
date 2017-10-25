require "json"

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
    beer = Beer.find(params[:id])
    reviews = []
    beer.reviews.each do |review|
      entry = { id: review.id, rating: review.rating, description: review.description, username: review.user.username, avatar: review.user.avatar, beer_id: review.beer_id}
      reviews.push(entry)
    end
    render json: {beer: beer, brewery: beer.brewery,  current_user: {status: user_signed_in?, id: current_user.id}, reviews: reviews }.to_json
  end
end
