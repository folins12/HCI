class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.references :nursery_plant, null: false, foreign_key: true
      t.string :user_name
      t.string :user_email
      t.datetime :pickup_time

      t.timestamps
    end
  end
end
