class Twoot < ApplicationRecord
  validates :author, :body, presence: true

  belongs_to :author,
             class_name: "User",
             foreign_key: :author_id

end
