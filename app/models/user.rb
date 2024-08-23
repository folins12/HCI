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
    token = generate_reset_password_token
    UserMailer.reset_password_email(self, token).deliver_now
  end  

  def generate_reset_password_token
    raw_code = SecureRandom.random_number(100000..999999).to_s
    encrypted_code = BCrypt::Password.create(raw_code)
    self.reset_password_token = encrypted_code
    self.reset_password_sent_at = Time.now.utc
    save(validate: false)
    raw_code
  end

  def verify_reset_password_token(token_attempt)
    return false if reset_password_token.nil?

    # Confronta il token inviato con il token cifrato nel database
    BCrypt::Password.new(reset_password_token) == token_attempt
  end

  def clear_reset_password_token
    self.reset_password_token = nil
    self.reset_password_sent_at = nil
    save(validate: false)
  end

  private

  def set_otp_required
    self.otp_required_for_login = true
  end
end
