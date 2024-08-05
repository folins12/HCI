class CreateInfoplants < ActiveRecord::Migration[6.1]
  def change
    create_table :infoplants do |t|
      t.string :name
      t.string :typology #giardino acquatica appartamento
      t.integer :light, limit: 1, null: false #1-4
      t.integer :irrigation, limit: 1, null: false #1-3
      t.integer :size, limit: 1, null: false #1-3
      t.string :climate #tropicale temperato freddo arido mediterraneo
      t.string :use #medicinale Culinario decorativa aromatica
      t.text :description

      t.timestamps
    end
  end
end