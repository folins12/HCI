class NurseryPlant < ApplicationRecord
  belongs_to :nursery
  belongs_to :plant
  has_many :reservations
end
