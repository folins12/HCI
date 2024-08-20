class RenameEncryptedPasswordColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :encrypted_password_, :encrypted_password
  end
end
