class RenamePasswordDigestToEncryptedPassword < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :password_digest, :encrypted_password_
  end
end
