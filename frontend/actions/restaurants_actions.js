import * as RestaurantApiUtil from '../util/restaurants_api_util.js';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveAllRestaurants = (restaurants) =>({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = (restaurant) =>({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const fetchRestaurants = () => dispatch => {
  return RestaurantApiUtil.fetchRestaurants().then(restaurants=>dispatch(receiveAllRestaurants(restaurants)));
};

export const fetchRestaurant = (id) => dispatch => {
  return RestaurantApiUtil.fetchRestaurant(id).then(restaurant=>dispatch(receiveRestaurant(restaurant)));
};
