class NurseryPlant < ApplicationRecord
  belongs_to :nursery
  belongs_to :plant
  has_many :reservations

  validates :max_disponibility, presence: true
  validates :num_reservations, presence: true
end
