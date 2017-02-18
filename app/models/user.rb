class User < ApplicationRecord
  attr_reader :password
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true

  has_many :woots, dependent: :destroy
  has_many :twoots, dependent: :destroy

  after_initialize :ensure_session_token

  def self.find_by_credentials name, password
    user = User.find_by(name: name)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    token = nil
    until token || User.find_by(session_token: token)
      token = SecureRandom.urlsafe_base64
    end
    token
  end

  def is_password? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password= password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

    private

    def ensure_session_token
      self.session_token ||= User.generate_session_token
    end
end
