class AddIndexToParking < ActiveRecord::Migration
  def change
    add_index :parkings, [:parking_type, :vehicle_reg_no]
    add_index :parkings, :vehicle_reg_no, unique: true
  end
end
