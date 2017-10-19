class Beer < ApplicationRecord
  validates :name, presence: true
  validates :type_id, presence: true
  # belongs_to :user
  # belongs_to :brewery
  # belongs_to :availability
  belongs_to :type, presence: true
end
