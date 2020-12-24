class ParkingController < ApplicationController
  include ParkingParamsHelper, ParkingHelper
  skip_before_filter :verify_authenticity_token
  before_action :load_vehicle_data, only: [:park_or_find_vehicle, :unpark_vehicle]

  def create
    Parking.create({:parking_type => create_params[:parkingType], :parking_lot_number => create_params[:parkingLotNumber]})
    render :json => {message: "New Parking Lot created successfully"}.to_json
  rescue => e
    render :json => {message: "Error in creating parking lot"}.to_json, :status => 400
  end

  def park_or_find_vehicle
    if @vehicle_data.present?
      render :json => {message: "Vehicle Already Parked", data: @vehicle_data}.to_json
    else
      park_vehicle(vehicle_park_params[:parkingType], vehicle_park_params[:vehicleRegNo])
    end
  end

  def unpark_vehicle
    if @vehicle_data.blank?
      render :json =>  {message: "Vehicle not found in parking lot"}.to_json, :status => 404
    elsif @vehicle_data.unpark_code == vehicle_unpark_params[:unParkCode] && @vehicle_data.clear_vehicle_date
      render :json => {message: "Vehicle Unparked", data: @vehicle_data}.to_json
    else
      render :json => {message: "UnPark Code is wrong"}.to_json, :status => 400
    end
  end

  def get_available_lots
    available_lots = Parking.where(:vehicle_reg_no => nil)
    render :json =>  {message: "Available parking lots", :data => available_lots}.to_json
  end

  private

  def load_vehicle_data
    @vehicle_data = Parking.where(:vehicle_reg_no => vehicle_park_params[:vehicleRegNo].gsub(/\s+/, "").upcase).first
  end
end
