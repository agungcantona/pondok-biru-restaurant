import RestaurantDbSource from '../../data/restaurants';
import {aboutPageTemplate, createRestaurantsTemplateList} from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero-image" aria-label="hero-image" tabindex="0">
    <h1 class="hero-text">Pondok Biru</h1>
    </div>
    
    <section class="about-container">
    </section>

    <h1 aria-label="Restaurant List" class="main-title" tabindex="0">Restaurant List</h1>
    <div class="restaurant-list" id="restaurant-small-list">
    </div>

    <a href="/#/restaurant-list" class="see-all-link ">
        See All Restaurants
        <i class="uil uil-angle-double-right see-all-icon"></i>
    </a>
    `;
  },

  async afterRender() {
    const restaurantsData = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant-small-list');
    restaurantsData.slice(-3).forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsTemplateList(restaurant);
    });

    const aboutContainer = document.querySelector('.about-container');
    aboutContainer.innerHTML += aboutPageTemplate;
  },
};

export default Home;

