import HomePage from '../views/pages/homePage';
import ListOfRestaurant from '../views/pages/restaurantList';
import restaurantDetail from '../views/pages/restaurantDetail';

const routes = {
  '/': HomePage,
  '/restaurant-list': ListOfRestaurant,
  '/detail/:id': restaurantDetail,
};

export default routes;
