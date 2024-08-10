class NurseryPlant < ApplicationRecord
  belongs_to :nursery
  belongs_to :plant
  has_many :reservations, dependent: :destroy

  validates :max_disponibility, presence: true
  validates :num_reservations, presence: true
end
