class Parking < ActiveRecord::Base
  validates :parking_lot_number, presence: true
  validates_uniqueness_of :parking_lot_number, scope: [:parking_type]
  validates :parking_type, inclusion: { in: %w(bike car),
                                        message: "%{value} is not a valid type" }, presence: true

  def clear_vehicle_date
    self.vehicle_reg_no = nil
    self.parked_time = nil
    self.unpark_code = nil
    self.save
  end

  def park_vehicle(number)
    self.vehicle_reg_no = number.gsub(/\s+/, "").upcase
    self.parked_time = DateTime.now.utc
    self.unpark_code = rand(100000..999999)
    self.save
  end
end
