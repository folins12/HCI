class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  validates :email, presence: true, uniqueness: true
  validates :nome, presence: true
  validates :cognome, presence: true
  validates :address, presence: true

  attr_accessor :current_password

  before_create :generate_otp_secret, :set_otp_required

  def generate_otp_secret
    self.otp_secret = ROTP::Base32.random_base32
  end  

  def generate_otp
    if otp_secret.present?
      self.otp_sent_at = Time.current
      totp = ROTP::TOTP.new(otp_secret, digits: 8)
      otp = totp.now
      update(otp_generated: otp, otp_sent_at: Time.current)
      otp
    else
      errors.add(:base, "OTP secret non è stato impostato.")
      nil
    end
  end

  def verify_otp(otp_attempt)
    otp_attempt = otp_attempt.strip
    return false if otp_expired?

    totp = ROTP::TOTP.new(otp_secret, digits: 8)
    is_verified = totp.verify(otp_attempt, drift_behind: 60)
    is_verified
  end

  def otp_expired?
    otp_sent_at < 3.minutes.ago
  end

  def invalidate_otp
    update(otp_generated: nil)
  end

  def send_reset_password_instructions
    raw_token = generate_reset_password_token
    UserMailer.reset_password_email(self, raw_token).deliver_now
  end

  def verify_reset_password_token(raw_token)
    return false if reset_password_token.blank?

    BCrypt::Password.new(reset_password_token) == raw_token
  end

  private

  def generate_reset_password_token
    raw_token = rand(100000..999999).to_s # Genera un token a 6 cifre
    enc_token = BCrypt::Password.create(raw_token) # Cifra il token
    update(reset_password_token: enc_token, reset_password_sent_at: Time.now.utc)
    raw_token
  end

end