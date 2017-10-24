class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :brewery, :avg_score, :abv, :type
end
