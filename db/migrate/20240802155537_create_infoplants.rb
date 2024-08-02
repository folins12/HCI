class CreateInfoplants < ActiveRecord::Migration[6.1]
  def change
    create_table :infoplants do |t|
      t.string :name
      t.text :description
      t.string :habitat

      t.timestamps
    end
  end
end
