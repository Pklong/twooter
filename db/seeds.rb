require 'faker'

10.times do
  User.create(
    name: "#{Faker::Fallout.character}",
    password: 'vaulty'
  )
end
