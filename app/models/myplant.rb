class Myplant < ApplicationRecord
  belongs_to :user
  belongs_to :plant
  validates :plant_id, presence: true
  validates :std_user_id, presence: true
end
