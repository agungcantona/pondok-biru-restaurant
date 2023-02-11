import HomePage from '../views/pages/homePage';
import ListOfRestaurant from '../views/pages/restaurantList';
import restaurantDetail from '../views/pages/restaurantDetail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': HomePage,
  '/restaurant-list': ListOfRestaurant,
  '/detail/:id': restaurantDetail,
  '/favorites': Favorites,
};

export default routes;
