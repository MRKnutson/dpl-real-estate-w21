class Api::PropertiesController < ApplicationController
  
  before_action :set_page, only: [:city]
  def index
    render json: Property.available
  end

  def get_cities
    render json: Address.get_cities
  end

  def city
    # .page method is provided by kaminari GEM 
    properties = Property.page(@page).per(18).by_city(params[:city])
    # .total_pages method is provided by kaminari GEM 
    total_pages = properties.total_pages
    render json: {properties: properties, total_pages: total_pages}
  end

  private

  def set_page
    @page = params[:page] || 1
  end

end
