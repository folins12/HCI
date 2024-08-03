# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# db/seeds.rb# db/seeds.rb

Nursery.create!(
  [
    {
      name: "Blue Sky Nursery",
      number: "9012345678",
      email: "info@bluesky.com",
      address: "789 Blue Sky Boulevard",
      location: "Skytown",
      open_time: 7,
      close_time: 19,
      description: "Where the sky's the limit for learning."
    },
    {
      name: "Magic Forest",
      number: "0123456789",
      email: "magic@forest.com",
      address: "321 Enchanted Lane",
      location: "Mystic Woods",
      open_time: 8,
      close_time: 16,
      description: "A magical place where learning comes alive."
    }
  ]
)
