module ParkingParamsHelper
  def create_params
    params.permit(:parkingType, :parkingLotNumber)
  end

  def vehicle_park_params
    params.permit(:vehicleRegNo, :parkingType)
  end

  def vehicle_unpark_params
    params.permit(:vehicleRegNo, :unParkCode)
  end
end
