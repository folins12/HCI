class Nursery < ApplicationRecord
  has_one_attached :nursery_image

  has_many :nursery_plants
  has_many :plants, through: :nursery_plants
  has_many :reservations, through: :nursery_plants

  belongs_to :user, foreign_key: 'id_owner'
  validates :name, :number, :email, :address, :location, :open_time, :close_time, :description, presence: true
  validate :validate_email_domain

  VALID_DOMAINS = %w[
    gmail.com
    yahoo.com
    outlook.com
    hotmail.com
    aol.com
    icloud.com
    mail.com
    msn.com
    live.com
    zoho.com
    protonmail.com
    gmx.com
    yandex.com
    comcast.net
    att.net
    sbcglobal.net
    btinternet.com
    virginmedia.com
    tiscali.it
    libero.it
    alice.it
    studenti.uniroma1.it
  ].freeze

  def self.search(query)
    if query.present?
      where('LOWER(name) LIKE ? OR LOWER(location) LIKE ? OR LOWER(description) LIKE ?',
            "%#{query.downcase}%", "%#{query.downcase}%", "%#{query.downcase}%")
    else
      all
    end
  end

  private

  def validate_email_domain
    domain = email.split('@').last
    unless VALID_DOMAINS.include?(domain)
      errors.add(:email, "Inserisci un indirizzo email con un dominio valido.")
    end
  end

end
