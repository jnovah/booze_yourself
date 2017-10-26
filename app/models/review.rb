class Review < ApplicationRecord
  belongs_to :user
  belongs_to :beer

  validates_presence_of :rating
end
