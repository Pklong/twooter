require 'faker'

FactoryBot.define do
  factory :user do
    name { Faker::Fallout.unique.character.delete(' ') }
    password "vault-boy"
  end
end
