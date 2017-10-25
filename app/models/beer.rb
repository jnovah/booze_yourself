class Beer < ApplicationRecord
  validates :name, presence: true
  validates :type_id, presence: true
  belongs_to :brewery
  has_many :reviews
  # belongs_to :user
  # belongs_to :availability
  belongs_to :type
end
