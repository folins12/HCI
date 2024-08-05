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

  create_table "examples", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

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

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.text "description"
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

end
