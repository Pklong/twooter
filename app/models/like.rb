class Like < ApplicationRecord
  validates :user_id, :twoot_id, presence: true
  validates :user_id, uniqueness: { scope: :twoot_id }

  belongs_to :user
  belongs_to :twoot
end
