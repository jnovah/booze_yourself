class Api::V1::TypesController < ApplicationController
  def index
      render json: Type.all
  end
end
