class Myplant < ApplicationRecord
  belongs_to :user
  belongs_to :plant
  validates :plant_id, presence: true
  validates :user_id, presence: true
end
