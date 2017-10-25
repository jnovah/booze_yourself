class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :avg_score

  belongs_to :brewery
end
