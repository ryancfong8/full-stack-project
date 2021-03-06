import React from 'react';
import SlideShow from './slideshow';
import FeaturedRestaurant from './featured_restaurant';
import SearchBar from "../greeting/search_bar";


class Home extends React.Component {
  constructor (props) {
    super(props);
    window.scrollTo(0, 0);
  }

  componentDidMount () {
    this.props.fetchRestaurants();
  }

  render () {
    return(
      <div>
        <div className = "slide-search">
          <div className = "search-title">
            <text className = "title1">Pleytime</text>
            <SearchBar fetchRestaurants = {this.props.fetchRestaurants} location = {this.props.location.pathname} />
            <text className = "slogan">Connect with local restaurants. Discover great "pleytes" in San Francisco.</text>
          </div>
          <SlideShow />
        </div>

        <h3 className="f-h1">Featured Restaurants</h3>
        <div className = "Featured">
          {this.props.restaurants.slice(0,6).map((restaurant) => (
            <FeaturedRestaurant key={restaurant.id} restaurant = {restaurant}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
