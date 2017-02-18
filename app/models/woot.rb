class Woot < ApplicationRecord
  belongs_to :user
  has_many :twoots
end
