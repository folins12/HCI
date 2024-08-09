class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :nome
      t.string :cognome
      t.string :address

      t.timestamps
    end
  end
end
