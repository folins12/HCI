class CreateNurseryPlants < ActiveRecord::Migration[6.1]
  def change
    create_table :nursery_plants do |t|
      t.references :nursery, null: false, foreign_key: true
      t.references :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
