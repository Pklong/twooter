require 'faker'

10.times do
  User.create(
    name: "#{Faker::Fallout.character}",
    password: 'vaulty'
  )
end

40.times do
  User.all.sample.twoots.create(body: "#{Faker::Fallout.quote}")
end
