import { combineReducers } from 'redux';

import SessionsReducer from './sessions_reducer';
import RestaurantsReducer from './restaurants_reducer';
import RestaurantReducer from './restaurant_reducer';
import reviewReducer from './review_reducer';
import searchReducer from './search_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: SessionsReducer,
  restaurants: RestaurantsReducer,
  restaurant: RestaurantReducer,
  reviews: reviewReducer,
  searches: searchReducer
  // filters: filterReducer
});

export default rootReducer;
