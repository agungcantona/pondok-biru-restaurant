/* eslint-disable no-unused-vars */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantList {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async searchRestaurant() {
    const response = await fetch(API_ENDPOINT.SEARCH);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantList;
