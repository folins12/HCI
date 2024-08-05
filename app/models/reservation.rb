class Reservation < ApplicationRecord
  belongs_to :nursery_plant

  validates :user_name, presence: true
  validates :user_email, presence: true
  validates :pickup_time, presence: true
end
