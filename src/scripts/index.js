import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurantData from '../DATA.json';

let toggleIcon = document.querySelector('.nav-icon');
let sideMenu = document.querySelector('.side-nav');
let main = document.querySelector('.main');

toggleIcon.addEventListener('click', function(e){
  sideMenu.classList.toggle('open');
  e.stopPropagation();
})

main.addEventListener('click', function(e){
  sideMenu.classList.remove('open');
  e.stopPropagation();
})

toggleIcon.addEventListener('keyup', function(e){
  if (e.key === 'Enter') {
    sideMenu.classList.toggle('open');
    e.stopPropagation();
  }
})


document.addEventListener('DOMContentLoaded', function(){
    let restaurantList = document.querySelector('.restaurant-list');
    restaurantList.ariaLabel = 'Restaurant List'

    restaurantData.restaurants.forEach(restaurant =>{
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('restaurant-item');
        itemDiv.ariaLabel = `${restaurant.name}, Lokasi di ${restaurant.city}`;
        itemDiv.tabIndex = 0;

        let img = document.createElement('img');
        img.alt = restaurant.name
        img.src = restaurant.pictureId;

        let textDiv = document.createElement('div');
        textDiv.classList.add('restaurant-text');

        let restaurantName = document.createElement('h2');
        const textName = document.createTextNode(restaurant.name);
        restaurantName.appendChild(textName);
        restaurantName.classList.add('restaurant-name');

        let restaurantCity = document.createElement('p');
        const textCity = document.createTextNode(restaurant.city);
        restaurantCity.appendChild(textCity);
        restaurantCity.classList.add('restaurant-city');

        let restaurantRate = document.createElement('p')
        const textRate = document.createTextNode(`Rating : ${restaurant.rating}`);
        restaurantRate.appendChild(textRate);
        restaurantRate.classList.add('restaurant-rate');
        
        let restaurantDescription = document.createElement('p');
        const textDescription = document.createTextNode(restaurant.description);
        restaurantDescription.appendChild(textDescription);
        restaurantDescription.classList.add('restaurant-description');

        textDiv.appendChild(restaurantName);
        textDiv.appendChild(restaurantCity);
        textDiv.appendChild(restaurantRate);
        textDiv.appendChild(restaurantDescription);

        itemDiv.appendChild(img);
        itemDiv.appendChild(textDiv);

        restaurantList.appendChild(itemDiv);
    })
});