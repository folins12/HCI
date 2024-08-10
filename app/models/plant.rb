class Plant < ApplicationRecord
  has_many :nursery_plants
  has_many :nurseries, through: :nursery_plants
  has_many :myplants
  has_many :reservations, through: :nursery_plants

  validates :light, inclusion: { in: 1..4 }
  validates :irrigation, inclusion: { in: 1..3 }
  validates :size, inclusion: { in: 1..3 }


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
