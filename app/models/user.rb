class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
  validates :nome, presence: true
  validates :cognome, presence: true
  validates :nursery, inclusion: { in: [true, false] } # Validazione per booleano

  has_many :nurseries

  attr_accessor :current_password

  validate :validate_passwords

  # Metodo per la validazione delle password
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

end
