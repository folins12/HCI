class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :nursery_plant

  validates :user_id, presence: true
  validates :nursery_plant_id, presence: true
end
