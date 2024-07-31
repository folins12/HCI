class Nursery < ApplicationRecord
  def self.search(query)
    if query.present?
      where('LOWER(name) LIKE ? OR LOWER(location) LIKE ? OR LOWER(description) LIKE ?', 
            "%#{query.downcase}%", "%#{query.downcase}%", "%#{query.downcase}%")
    else
      all
    end
  end
end
