class CreateNurseries < ActiveRecord::Migration[6.1]
  def change
    create_table :nurseries do |t|
      t.string :name
      t.integer :number
      t.string :email
      t.string :address
      t.string :location
      t.integer :open_time
      t.integer :close_time
      t.text :description

      t.timestamps
    end
  end
end
