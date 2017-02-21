User.destroy_all

users = [
  User.create!(name: "patrick", password: 'password'),
  User.create!(name: Faker::Ancient.hero, password: 'starwars'),
  User.create!(name: Faker::Ancient.hero, password: 'giraffe'),
  User.create!(name: Faker::Ancient.hero, password: 'starwars'),
  User.create!(name: Faker::Ancient.hero, password: 'starwars')
]

40.times do |x|
  users[rand(users.length)].twoots.create!(body: Faker::Hacker.say_something_smart)
end
