class Api::V1::LocationController < ApplicationController

  def index
    @location = Location.all
    render json: @location
  end

  def update
    @location.update(location_params)
    if @location.save
      render json: @location, status: :accepted
    else
      render json: {errors: @location.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def location_params
    params.permit(:city, :zipcode)
  end

end
