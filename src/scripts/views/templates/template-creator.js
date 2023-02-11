/* eslint-disable indent */
import CONFIG from '../../globals/config';

const aboutPageTemplate = `
    <h1 class="main-title" aria-label="About Pondok Biru" tabindex="0">About Pondok Biru</h1>
    <div class="about-container">
        <div class="about-content">
        <img src="./images/heros/hero-image_1.jpg" alt="about image" class="about-img" tabindex="0">
        <div class="about-description" tabindex="0" aria-label="Pondok Biru Description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in magni error fugit veniam, saepe maxime? Veniam, ducimus. Adipisci, doloribus? Accusamus, dolores nulla? Non ad iusto ducimus ratione! Dignissimos earum id, tempore aliquam ut excepturi quaerat neque et a culpa voluptas exercitationem illo aut fugit ipsa labore modi deleniti illum.</p> 
            <ul>
            <li class="about-list" tabindex="0">
                <i class="uil uil uil-linkedin about-icon"></i>
                <p class="about-linkerdin"> Creator : </p> 
                <a href="https://www.linkedin.com/in/agung-cantona/" class="about-link" target=”_blank”> Agung Cantona S. </a>
            </li>
            <li class="about-list" tabindex="0">
                <i class="uil uil-envelope about-icon"></i>
                <p> Email : pondokbiru@domain.com </p> 
            </li>
            <li class="about-list" tabindex="0">
                <i class="uil uil-phone about-icon"></i>
                <p> Phone Number : 08123456789 </p> 
            </li>
            </ul>
        </div>
        </div>
    </div>
`;

const createRestaurantsTemplateList = (restaurants) => `
    <div class="restaurant-item" aria-label="${restaurants.name}" tabindex="0">
        <img alt="${restaurants.name}" src="${CONFIG.BASE_IMAGE_URL + '/large/' + restaurants.pictureId}">
        <div class="restaurant-text">
            <a href="/#/detail/${restaurants.id}">
                <h2 class="restaurant-name">${restaurants.name}</h2>
            </a>
            <p class="restaurant-city">${restaurants.city}</p>
            <p class="restaurant-rate">Rating : ${restaurants.rating}</p>
            <p class="restaurant-description">
                ${restaurants.description}
            </p>
            <a href="/#/detail/${restaurants.id}" class="detail-link">
                Detail
                <i class="uil uil-angle-double-right link-icon"></i>
            </a>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-container">
<h1 class="detail-title" aria-label="Restaurant Detail">Restaurant Detail</h1>
            <h2 aria-label="Restaurant Name">${restaurant.name}</h2>
            <img class="detail-img" src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}"/>
                <div class="detail-description" aria-label="Restaurant Description">
                    <div class="description-header">
                        <h4 class="detail-alamat">${restaurant.address}</h4>
                        <h3 class="detail-city">${restaurant.city}</h3>
                        <div class="link-container">
                            <p class="detail-rate">${restaurant.rating}</p>
                            <div class="category-links">
                                ${restaurant.categories.map((category) => {
                                    return '<a href="#" class="category-link">'+category.name+'</a>';
                                }).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="description-main">
                        <p>${restaurant.description}</p>
                    </div>
                    <div class="description-footer">
                        <h4 class="detail-sub" aria-label="menu">Menu</h4>
                        <div class="menu">
                            <div class="menu-food">
                                <h5 class="menu-sub">Foods</h5>
                                ${restaurant.menus.foods.map((food) => {
                                    return '<p class="menu-content">' + food.name + '</p>';
                                }).join('')}
                            </div>
                            <div class="menu-drink">
                                <h5 class="menu-sub">Drinks</h5>
                                ${restaurant.menus.drinks.map((drink) => {
                                    return '<p class="menu-content">' + drink.name + '</p>';
                                }).join('')}
                            </div>
                        </div>
                    <div class="review" aria-label="review">
                        <h4 class="detail-sub">
                            Restaurant Review
                        </h4>
                        
                        ${restaurant.customerReviews.map((customerReview) => {
                            const review = `
                                <div class="review-container">
                                    <p class="reviewer-name">${customerReview.name}</p>
                                    <p class="reviewer-date">${customerReview.date}</p>
                                    <p class="reviewer-description">${customerReview.review}</p>
                                </div>
                                `;
                            return review;
                            }).join('')}
                        
                    </div>
                </div>
            </div>
        </div>
`;

export {aboutPageTemplate, createRestaurantsTemplateList, createRestaurantDetailTemplate};
