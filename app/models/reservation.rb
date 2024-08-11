class Reservation < ApplicationRecord
  belongs_to :nursery_plant
  validates :user_email, presence: true
end
