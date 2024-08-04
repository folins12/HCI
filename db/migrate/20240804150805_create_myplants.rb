class CreateMyplants < ActiveRecord::Migration[6.0]
  def change
    create_table :myplants do |t|
      t.string :pianta, null: false
      t.string :proprietario, null: false
      t.integer :disponibilita, default: -1

      t.timestamps
    end

    add_index :myplants, :proprietario
  end
end

