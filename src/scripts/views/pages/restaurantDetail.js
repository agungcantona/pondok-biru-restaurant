import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurants';
import {createRestaurantDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const restaurantDetail = {
  async render() {
    return `
    <section class="detail template">
    </section>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantsContainer = document.querySelector('.detail');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        rating: restaurant.rating,
        categories: restaurant.categories,
        customerReviews: restaurant.customerReviews,
        menus: restaurant.menus,
      },
    });

    const restaurantData = {
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      city: restaurant.city,
      address: restaurant.address,
      rating: restaurant.rating,
      categories: restaurant.categories,
      customerReviews: restaurant.customerReviews,
      menus: restaurant.menus,
    };
    console.log(restaurantData);
  },
};

export default restaurantDetail;
