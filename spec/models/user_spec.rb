require 'rails_helper'

RSpec.describe User, type: :model do

  describe "password encryption" do
    it "does not save passwords to database" do
      User.create!(name: "Scooby Doo", password: "Snacks")
      user = User.find_by_credentials("Scooby Doo", "Snacks")

      expect(user.password).not_to be("Snacks")
    end

    it "encrypts password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(name: "Jack", password: "password")
    end
  end

  describe "validations" do
    subject { FactoryGirl.build(:user) }
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:session_token) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password) }
  end
end
