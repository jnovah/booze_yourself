class Payload < ApplicationRecord
  validates_presence_of :beer_name, :brewery_name
end
