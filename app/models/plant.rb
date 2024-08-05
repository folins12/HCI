class Plant < ApplicationRecord
  has_many :nursery_plants
  has_many :nurseries, through: :nursery_plants
end
