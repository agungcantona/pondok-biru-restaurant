import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANTS_LIST: `${CONFIG.BASE_URL}/list`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
