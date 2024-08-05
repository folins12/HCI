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

ActiveRecord::Schema.define(version: 2024_08_05_112104) do

  create_table "infoplants", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "habitat"
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
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nursery_id"], name: "index_nursery_plants_on_nursery_id"
    t.index ["plant_id"], name: "index_nursery_plants_on_plant_id"
  end

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "nursery_plant_id", null: false
    t.string "user_name"
    t.string "user_email"
    t.datetime "pickup_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nursery_plant_id"], name: "index_reservations_on_nursery_plant_id"
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

  add_foreign_key "nursery_plants", "nurseries", column: "nursery_id"
  add_foreign_key "nursery_plants", "plants"
  add_foreign_key "reservations", "nursery_plants"
end
