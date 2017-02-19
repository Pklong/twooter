class Like < ApplicationRecord
  validates :user_id, :woot_id, presence: true
  validates :user_id, uniqueness: { scope: :woot_id }

  belongs_to :user
  belongs_to :woot
end
