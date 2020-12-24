module ParkingHelper

  def park_vehicle(parkingType, vehicleRegNo)
    first_available_parking_lot = Parking.where(:vehicle_reg_no => nil, :parking_type => vehicle_park_params[:parkingType]).first
    if first_available_parking_lot.present? && first_available_parking_lot.park_vehicle(vehicle_park_params[:vehicleRegNo])
      render :json =>  {message: "Parking lot allocated", data: first_available_parking_lot}.to_json
    else
      render :json =>  {message: "No parking lot available"}.to_json, :status => 404
    end
  end

end
