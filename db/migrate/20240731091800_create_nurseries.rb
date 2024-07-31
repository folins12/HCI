class CreateNurseries < ActiveRecord::Migration[6.1]
  def change
    create_table :nurseries do |t|
      t.string :name
      t.string :location
      t.text :description

    end
  end
end
