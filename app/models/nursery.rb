class Nursery < ApplicationRecord
  has_one_attached :nursery_image

  has_many :nursery_plants
  has_many :plants, through: :nursery_plants
  has_many :reservations, through: :nursery_plants

  belongs_to :user, foreign_key: 'id_owner'
  validates :name, :number, :email, :address, :location, :open_time, :close_time, :description, presence: true

  def self.search(query)
    if query.present?
      where('LOWER(name) LIKE ? OR LOWER(location) LIKE ? OR LOWER(description) LIKE ?',
            "%#{query.downcase}%", "%#{query.downcase}%", "%#{query.downcase}%")
    else
      all
    end
  end
end
