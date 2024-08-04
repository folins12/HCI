class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
  validates :nome, presence: true
  validates :cognome, presence: true
  validates :nursery, inclusion: { in: [true, false] } # Validazione per booleano
end
