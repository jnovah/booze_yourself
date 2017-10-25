class BeerShowSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :description, :abv, :avg_score, :type_id, :type_name, :user_aut

  belongs_to :brewery

  def type_name
    object.type.name
  end

  def type_id
    object.type.id
  end

  def user_aut
    user_signed_in?
  end
end
