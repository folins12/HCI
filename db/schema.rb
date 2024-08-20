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

ActiveRecord::Schema.define(version: 2024_08_18_145637) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "myplants", force: :cascade do |t|
    t.integer "plant_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_myplants_on_proprietario"
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
    t.integer "nursery_plant_id", null: false
    t.string "user_email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nursery_plant_id"], name: "index_reservations_on_nursery_plant_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "encrypted_password"
    t.string "nome"
    t.string "cognome"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "nursery", default: false, null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "otp_secret"
    t.boolean "otp_required_for_login"
    t.string "otp_generated"
    t.datetime "otp_sent_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "myplants", "plants"
  add_foreign_key "myplants", "users"
  add_foreign_key "nurseries", "users", column: "id_owner"
  add_foreign_key "nursery_plants", "nurseries", column: "nursery_id"
  add_foreign_key "nursery_plants", "plants"
  add_foreign_key "reservations", "nursery_plants"
end
