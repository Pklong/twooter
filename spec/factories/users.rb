FactoryGirl.define do
  factory :user do
    name { Faker::StarWars.droid }
    password "nomoon"
  end
end
