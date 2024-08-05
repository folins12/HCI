# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# db/seeds.rb# db/seeds.rb


# Assumendo che hai già creato dei vivai e delle piante
nursery = Nursery.first
plant = Plant.first

# Associa una pianta a un vivaio
NurseryPlant.create(nursery: nursery, plant: plant)
Infoplant.create([
  {
    name: "Rosa",
    typology: "Fiore",
    light: 3,
    irrigation: 2,
    size: 2,
    climate: "Temperato",
    use: "Ornamentale",
    description: "La rosa è un fiore ornamentale molto popolare e apprezzato per la sua bellezza e il suo profumo."
  },
  {
    name: "Basilico",
    typology: "Erba aromatica",
    light: 4,
    irrigation: 3,
    size: 1,
    climate: "Mediterraneo",
    use: "Culinario",
    description: "Il basilico è una pianta aromatica utilizzata in cucina per insaporire vari piatti, come il pesto."
  }
])
