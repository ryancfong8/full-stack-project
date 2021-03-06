class Api::RestaurantsController < ApplicationController
  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
    render :show
  end

  def index
    restaurants = bounds ? Restaurants.in_bounds(bounds) : Restaurant.all
    if params[:query]
      restaurants = restaurants.where('name ILIKE ? OR description ILIKE ? OR price = ?', "%#{params[:query]}%", "%#{params[:query]}%", "#{params[:query]}")
    end
    @restaurants = restaurants
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update(restaurant_params)
      render :show
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :address, :hours, :price, :lat, :long,)
  end

  def bounds
    params[:bounds]
  end
end
