require "json"

class Api::V1::BeersController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]

  def index
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

  def create
  search_value = params[:search_value]
  beer_search_result = Beer.where("lower(name) LIKE ?", "%#{search_value.downcase}%")
  # brewery_search_result = Brewery.where("lower(name) LIKE ?", "%#{search_value.downcase}%")
  search_result = beer_search_result.to_json
  # brewery_search_result = brewery_search_result.json
  # search_result.concat(brewery_search_result)
  search_result = JSON.parse(search_result)
  render json: search_result
end
end
