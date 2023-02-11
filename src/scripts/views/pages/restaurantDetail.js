import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurants';
import {createRestaurantDetailTemplate} from '../templates/template-creator';

const restaurantDetail = {
  async render() {
    return `
    <section class="detail">
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('.detail');
    console.log(restaurant.categories);
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default restaurantDetail;
