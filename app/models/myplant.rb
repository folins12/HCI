class Myplant < ApplicationRecord
  validates :pianta, presence: true
  validates :proprietario, presence: true
end
