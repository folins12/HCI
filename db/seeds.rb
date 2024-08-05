# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# db/seeds.rb# db/seeds.rb

Infoplant.create([
  {
    name: "Loto",
    typology: "Aquatic Plant",
    light: 4,
    irrigation: 1,  # Per una pianta acquatica, l'irrigazione potrebbe non essere applicabile come per le piante terrestri
    size: 2,
    climate: "Tropical",
    use: "Ornamental",
    description: "Il loto è una pianta acquatica con fiori grandi e colorati che galleggiano sulla superficie dell'acqua. È spesso utilizzato in laghetti ornamentali e giardini acquatici."
  }
])


