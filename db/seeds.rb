User.destroy_all

User.create!(name: Faker::TwinPeaks.character, password: 'starwars')
User.create!(name: Faker::TwinPeaks.character, password: 'giraffe')
User.create!(name: Faker::TwinPeaks.character, password: 'starwars')
User.create!(name: Faker::TwinPeaks.character, password: 'starwars')
