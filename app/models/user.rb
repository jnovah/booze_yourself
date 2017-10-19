class User < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  has_many :beers
  validates :username, presence: true
  validates :state, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
