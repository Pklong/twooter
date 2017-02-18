class Twoot < ApplicationRecord
  belongs_to :woot
  belongs_to :user

  validates :user_id, uniqueness: { scope: :woot_id }
end
