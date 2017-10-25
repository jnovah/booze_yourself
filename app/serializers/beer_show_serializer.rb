class BeerShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :abv, :avg_score, :type_id, :type_name

  belongs_to :brewery

  def type_name
    object.type.name
  end

  def type_id
    object.type.id
  end
end
