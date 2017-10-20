class Api::V1::BeersController < ApplicationController
  def index
    render json: Beer.all.limit(20)
  end
end
