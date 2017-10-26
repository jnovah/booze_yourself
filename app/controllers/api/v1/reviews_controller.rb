class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  # before_action :authenticate_user!, only: [:create]
  skip_before_action :verify_authenticity_token

  def index
    if :beer_id
      render json: Beer.find(params[:beer_id]).reviews
    end
  end

  def create
      review = Review.new(review_params)
    if review.save
      review = Review.last
      entry = { id: review.id, rating: review.rating, description: review.description, username: review.user.username, avatar: review.user.avatar, beer_id: review.beer_id, created_at: review.created_at}

      render json: entry
    end
  end

  private

  def review_params
    params.require(:review).permit(:beer_id, :rating, :description, :user_id)
  end

end
