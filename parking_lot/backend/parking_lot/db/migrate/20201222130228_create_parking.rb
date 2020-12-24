class CreateParking < ActiveRecord::Migration
  def up
    create_table :parkings do |t|
      t.string :parking_type
      t.string :parking_lot_number
      t.string :vehicle_reg_no
      t.integer :unpark_code
      t.datetime :parked_time
      t.timestamps
    end
  end

  def down
    drop_table :parkings
  end
end
