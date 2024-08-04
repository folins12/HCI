class AddNurseryToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :nursery, :boolean, default: false, null: false
  end
end

