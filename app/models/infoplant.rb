class Infoplant < ApplicationRecord
  validates :light, inclusion: { in: 1..4 }
  validates :irrigation, inclusion: { in: 1..3 }
  validates :size, inclusion: { in: 1..3 }

  #
  ## Filtra per tipologia
  #def self.filter_by_typology(typology)
  #  where(typology: typology) if typology.present?
  #end
#
  ## Filtra per luce
  #def self.filter_by_light(light)
  #  where(light: light) if light.present?
  #end
#
  ## Filtra per uso
  #def self.filter_by_use(use)
  #  where(use: use) if use.present?
  #end
#
  ## Metodo di classe per applicare tutti i filtri
  #def self.apply_filters(filters)
  #  results = self.all
  #  results = results.filter_by_typology(filters[:typology])
  #  results = results.filter_by_light(filters[:light])
  #  results = results.filter_by_use(filters[:use])
  #  results
  #end
#
  #def self.search(query)
  #  if query.present?
  #    where('LOWER(name) LIKE ?',"%#{query.downcase}%")
  #  else
  #    all
  #  end
  #end 

  def self.search(params = {})
    results = all  

    query=params[:query]
    if query.present? && !query.strip.empty?
      results = results.where('LOWER(name) LIKE ?', "%#{query.strip.downcase}%")
    end

    typology=params[:typology]
    if typology.present? && !typology.strip.empty?
      results = results.where('LOWER(typology) LIKE ?', "%#{typology.strip.downcase}%")
    end
    
    climate=params[:climate]
    if climate.present? && !climate.strip.empty?
      results = results.where('LOWER(climate) LIKE ?', "%#{climate.strip.downcase}%")
    end

    light=params[:light]
    if light.present? && !light.strip.empty?
      results = results.where('light LIKE ?', "%#{light}%")
    end

    irrigation=params[:irrigation]
    if irrigation.present? && !irrigation.strip.empty?
      results = results.where('irrigation LIKE ?', "%#{irrigation}%")
    end

    use=params[:use]
    if use.present? && !use.strip.empty?
      results = results.where('LOWER(use) LIKE ?', "%#{use.strip.downcase}%")
    end

    size=params[:size]
    if size.present? && !size.strip.empty?
      results = results.where('size LIKE ?', "%#{size}%")
    end

    results
  end

end
