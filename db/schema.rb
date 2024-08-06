# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_08_05_143929) do

  create_table "infoplants", force: :cascade do |t|
    t.string "name"
    t.string "typology"
    t.integer "light", limit: 1, null: false
    t.integer "irrigation", limit: 1, null: false
    t.integer "size", limit: 1, null: false
    t.string "climate"
    t.string "use"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "myplants", force: :cascade do |t|
    t.string "pianta", null: false
    t.string "proprietario", null: false
    t.integer "disponibilita", default: -1
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["proprietario"], name: "index_myplants_on_proprietario"
  end

  create_table "nurseries", force: :cascade do |t|
    t.string "name"
    t.integer "id_owner", null: false
    t.integer "number"
    t.string "email"
    t.string "address"
    t.string "location"
    t.integer "open_time"
    t.integer "close_time"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "nursery_plants", force: :cascade do |t|
    t.integer "nursery_id", null: false
    t.integer "plant_id", null: false
    t.integer "max_disponibility"
    t.integer "num_reservations"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nursery_id"], name: "index_nursery_plants_on_nursery_id"
    t.index ["plant_id"], name: "index_nursery_plants_on_plant_id"
  end

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.string "typology"
    t.integer "light"
    t.integer "irrigation"
    t.integer "size"
    t.string "climate"
    t.text "use"
    t.datetime "created_at", precision: 6, null: false
    t.text "description"
    t.datetime "updated_at", precision: 6, null: false
  end


  create_table "reservations", force: :cascade do |t|
    t.integer "nursery_plant_id"
    t.string "user_email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end


  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "nome"
    t.string "cognome"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "nursery", default: false, null: false
  end

  add_foreign_key "nurseries", "users", column: "id_owner"
  add_foreign_key "nursery_plants", "nurseries", column: "nursery_id"
  add_foreign_key "nursery_plants", "plants"
  add_foreign_key "reservations", "nursery_plants"
  add_foreign_key "reservations", "users", column: "user_email", primary_key: "email"
end
