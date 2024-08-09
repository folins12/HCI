class CreateMyplants < ActiveRecord::Migration[6.1]
  def change
    create_table :myplants do |t|
      t.references :plant, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

