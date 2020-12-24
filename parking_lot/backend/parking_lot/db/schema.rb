# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20201222131917) do

  create_table "parkings", force: :cascade do |t|
    t.string   "parking_type"
    t.string   "parking_lot_number"
    t.string   "vehicle_reg_no"
    t.integer  "unpark_code"
    t.datetime "parked_time"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "parkings", ["parking_type", "vehicle_reg_no"], name: "index_parkings_on_parking_type_and_vehicle_reg_no"
  add_index "parkings", ["vehicle_reg_no"], name: "index_parkings_on_vehicle_reg_no", unique: true

end
