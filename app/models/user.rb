class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
  validates :nome, presence: true
  validates :cognome, presence: true
  validates :nursery, inclusion: { in: [true, false] }
  validates :address, presence: true  # Usa address qui, se necessario

  has_many :nurseries
  has_many :myplants

  attr_accessor :current_password

  validate :validate_passwords

  def validate_passwords
    if password.present? || password_confirmation.present?
      if password == current_password
        errors.add(:password, "Password analoga a quella precedente! Inserire una nuova password!") if password.present?
      elsif password.present? && password_confirmation.blank?
        errors.add(:password_confirmation, "La conferma della password è necessaria.")
      elsif password.present? && password != password_confirmation
        errors.add(:password_confirmation, "Password diversa da quella nuova inserita nella casella precedente.")
      end
    end
  end

  validate :valid_address_format

  private

  def valid_address_format
    unless address =~ /\A(via|viale|v\.le)\s.+,\s.*\z/i
      errors.add(:address, "Indirizzo non valido: deve iniziare con Via, Viale, o V.le e contenere una virgola. Esempio: Via Roma 1, Albano Laziale")
    end
  end

end
