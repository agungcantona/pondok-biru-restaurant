import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import {createRestaurantsTemplateList} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h1 aria-label="Restaurant List" class="main-title template" tabindex="0">Favorite Restaurants</h1>
    <div class="restaurant-list favorites" id="restaurant-all-list">
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-all-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsTemplateList(restaurant);
    });
  },
};

export default Favorite;
