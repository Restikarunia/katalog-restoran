import TheRestaurantsDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const listRestaurant = {
  async render() {
    return `
      <div class="content">
        <div class="hero-image">
            <picture>
              <source media="(max-width: 600px)" srcset="../images/heros/hero-image_4-small.jpg">
              <img 
                  src='../images/heros/hero-image_4-large.jpg' 
                  alt="poster"></img>
          
            </picture>
          </div>

        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantsDbSource.RestaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default listRestaurant;
