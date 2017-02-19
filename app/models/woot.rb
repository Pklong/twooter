class Woot < ApplicationRecord
  belongs_to :user
  has_many :twoots
  has_many :likes

  def like_count
    likes.count
  end
end
