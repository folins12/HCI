class AddOtpFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :otp_generated, :string
    add_column :users, :otp_sent_at, :datetime
  end
end
