# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# db/seeds.rb# db/seeds.rb


# db/seeds.rb

Plant.create([
  {
    name: 'Rosa',
    typology: 'giardino',
    light: 3,
    irrigation: 2,
    size: 2,
    climate: 'temperato',
    use: 'decorativa',
    description: 'La rosa è una delle piante ornamentali più conosciute e apprezzate per la bellezza dei suoi fiori.'
  },
  {
    name: 'Ninfea',
    typology: 'acquatica',
    light: 4,
    irrigation: 3,
    size: 2,
    climate: 'tropicale',
    use: 'decorativa',
    description: 'La ninfea è una pianta acquatica molto apprezzata per i suoi fiori galleggianti.'
  },
  {
    name: 'Aloe Vera',
    typology: 'appartamento',
    light: 2,
    irrigation: 1,
    size: 1,
    climate: 'arido',
    use: 'medicinale',
    description: 'L\'Aloe Vera è conosciuta per le sue proprietà medicinali e lenitive.'
  },
  {
    name: 'Basilico',
    typology: 'appartamento',
    light: 3,
    irrigation: 2,
    size: 1,
    climate: 'mediterraneo',
    use: 'culinario',
    description: 'Il basilico è una pianta aromatica molto utilizzata in cucina, soprattutto nella preparazione del pesto.'
  },
  {
    name: 'Lavanda',
    typology: 'giardino',
    light: 4,
    irrigation: 1,
    size: 2,
    climate: 'temperato',
    use: 'aromatica',
    description: 'La lavanda è apprezzata per il suo profumo e viene spesso utilizzata per profumare ambienti e tessuti.'
  },
  {
    name: 'Felce',
    typology: 'appartamento',
    light: 2,
    irrigation: 2,
    size: 3,
    climate: 'tropicale',
    use: 'decorativa',
    description: 'La felce è una pianta verde molto decorativa, adatta per ambienti interni.'
  },
  {
    name: 'Cactus',
    typology: 'appartamento',
    light: 4,
    irrigation: 1,
    size: 1,
    climate: 'arido',
    use: 'decorativa',
    description: 'Il cactus è una pianta succulenta che richiede poca acqua ed è facile da curare.'
  },
  {
    name: 'Orchidea',
    typology: 'appartamento',
    light: 3,
    irrigation: 2,
    size: 2,
    climate: 'tropicale',
    use: 'decorativa',
    description: 'L\'orchidea è una pianta dai fiori eleganti e duraturi, molto apprezzata per la sua bellezza.'
  },
  {
    name: 'Salvia',
    typology: 'giardino',
    light: 3,
    irrigation: 2,
    size: 2,
    climate: 'mediterraneo',
    use: 'culinario',
    description: 'La salvia è una pianta aromatica utilizzata in cucina per il suo sapore unico.'
  },
  {
    name: 'Menta',
    typology: 'giardino',
    light: 3,
    irrigation: 3,
    size: 1,
    climate: 'temperato',
    use: 'aromatica',
    description: 'La menta è una pianta aromatica molto apprezzata per il suo aroma fresco e le sue proprietà digestive.'
  },
  {
    name: 'Gelsomino',
    typology: 'giardino',
    light: 4,
    irrigation: 2,
    size: 3,
    climate: 'temperato',
    use: 'decorativa',
    description: 'Il gelsomino è una pianta rampicante con fiori profumati, spesso utilizzata per decorare pergolati e giardini.'
  },
  {
    name: 'Begonia',
    typology: 'appartamento',
    light: 2,
    irrigation: 2,
    size: 1,
    climate: 'tropicale',
    use: 'decorativa',
    description: 'La begonia è una pianta da fiore molto decorativa, ideale per ambienti interni.'
  },
  {
    name: 'Papavero',
    typology: 'giardino',
    light: 3,
    irrigation: 2,
    size: 2,
    climate: 'temperato',
    use: 'decorativa',
    description: 'Il papavero è una pianta dai fiori colorati, spesso utilizzata per abbellire giardini e aiuole.'
  },
  {
    name: 'Erba Cipollina',
    typology: 'giardino',
    light: 3,
    irrigation: 2,
    size: 1,
    climate: 'temperato',
    use: 'culinario',
    description: 'L\'erba cipollina è una pianta aromatica molto utilizzata in cucina per il suo sapore delicato.'
  },
  {
    name: 'Edera',
    typology: 'giardino',
    light: 2,
    irrigation: 2,
    size: 3,
    climate: 'temperato',
    use: 'decorativa',
    description: 'L\'edera è una pianta rampicante molto resistente, ideale per coprire muri e recinzioni.'
  }
])
