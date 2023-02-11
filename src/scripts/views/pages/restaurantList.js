import RestaurantDbSource from '../../data/restaurants';
import {createRestaurantsTemplateList} from '../templates/template-creator';

const ListOfRestaurant = {
  async render() {
    return `
        <h1 aria-label="Restaurant List" class="main-title" tabindex="0">Restaurant List</h1>
        <!-- Daftar Restoran -->
        <div class="restaurant-list" id="restaurant-all-list">
        </div>
      `;
  },

  async afterRender() {
    const restaurantsData = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant-all-list');
    restaurantsData.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsTemplateList(restaurant);
    });
  },
};

export default ListOfRestaurant;
