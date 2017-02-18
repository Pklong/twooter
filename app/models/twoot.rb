class Twoot < ApplicationRecord
  belongs_to :woot
  belongs_to :user

  validate :user_id, uniqueness: { scope: :woot_id }
end
