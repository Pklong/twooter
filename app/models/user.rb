class User < ApplicationRecord
  validates :name, :password_digest, :session_token, presence: true
  validates :name, :session_token, uniqueness: true
  attr_reader :password
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  def self.find_by_credentials(name, pw)
    user = User.find_by(name: name)
    user && user.is_password?(pw) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end
end
