import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="headerr">
      <div className="logo-can">
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/ee6e743f-c9e4-4ec3-b066-c11ff7935a77/logo-search-grid-2x?logoTemplateVersion=2&v=638897551182400000&layout=auto-1-1"
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Card</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

// FIXED CARD COMPONENT
const Card = ({ resdata }) => {
  console.log(resdata);

  // correct destructuring
  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    sla: { deliveryTime, costForTwo},
  } = resdata?.info;

  return (
    <div className="card">
      <img
        className="card-img"
        alt="restaurant img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>Price:"{costForTwo}"</h4>
      <h4>Rating: ⭐ {avgRatingString}</h4>
      <h4>Delivery: {deliveryTime} min</h4>
    </div>
  );
};

const resList = [
  {
"info": {
"id": "345940",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/6b96e536-5f86-43dc-8986-f644f52e1f28_345940.JPG",
"locality": "Kharadi",
"areaName": "Kharadi",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Desserts"
],
"avgRating": 4.5,
"parentId": "1040",
"avgRatingString": "4.5",
"totalRatingsString": "4.8K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 5.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "625"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/theobroma-kharadi-rest345940",
"type": "WEBLINK"
}
},
{
"info": {
"id": "573081",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/9716dfb2-066e-4f52-a2f8-61c8af509332_573081.JPG",
"locality": "Bakori Road",
"areaName": "Wagholi",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Rolls & Wraps",
"Fast Food"
],
"avgRating": 4.1,
"parentId": "547",
"avgRatingString": "4.1",
"totalRatingsString": "4.3K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 1.9,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-06 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/kfc-bakori-road-wagholi-rest573081",
"type": "WEBLINK"
}
},
{
"info": {
"id": "176276",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/a9575d86-25b9-400f-87f0-a46f6e8599db_176276.jpg",
"locality": "Wagholi",
"areaName": "Ashtapur",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.2,
"parentId": "166",
"avgRatingString": "4.2",
"totalRatingsString": "14K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-06 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹29"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "2.0",
"ratingCount": "<3"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/burger-king-wagholi-ashtapur-rest176276",
"type": "WEBLINK"
}
},
{
"info": {
"id": "87868",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/8c7f1d8f-73da-4d2e-ab88-da895f0446de_87868.JPG",
"locality": "Wagholi",
"areaName": "Wagholi",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "13K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-06 01:55:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "7.4K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/mcdonalds-wagholi-rest87868",
"type": "WEBLINK"
}
},
{
"info": {
"id": "408182",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/84426fac-b5b5-4976-8d3b-0dc5f67a9f79_408182.JPG",
"locality": "Wagholi",
"areaName": "Wagholi",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4,
"parentId": "721",
"avgRatingString": "4.0",
"totalRatingsString": "4.1K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-06 02:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.6",
"ratingCount": "295"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/pizza-hut-wagholi-rest408182",
"type": "WEBLINK"
}
},
{
"info": {
"id": "292847",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/55cc3fd9-fb0b-4a63-82e2-3fec9f9cf5bf_292847.JPG",
"locality": "Nagar Road",
"areaName": "Wagholi",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.2,
"parentId": "2456",
"avgRatingString": "4.2",
"totalRatingsString": "3.5K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹55"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/dominos-pizza-nagar-road-wagholi-rest292847",
"type": "WEBLINK"
}
},
{
"info": {
"id": "626248",
"name": "CakeZone Patisserie",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/25e5852d-7df9-41b0-a321-26e24eb5c7ac_626248.JPG",
"locality": "Haveli- North of Mutha River",
"areaName": "Baif Road",
"costForTwo": "₹200 for two",
"cuisines": [
"Bakery",
"Desserts",
"Sweets",
"Ice Cream"
],
"avgRating": 4.3,
"parentId": "7003",
"avgRatingString": "4.3",
"totalRatingsString": "1.8K+",
"sla": {
"deliveryTime": 22,
"lastMileTravel": 0.9,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "0.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-06 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹380"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/cakezone-patisserie-haveli-north-of-mutha-river-baif-road-rest626248",
"type": "WEBLINK"
}
},
{
"info": {
"id": "27808",
"name": "Natural Ice Cream",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/b59c420a-e3db-42ea-89e6-ce5f62d8314e_27808.jpg",
"locality": "Dhole Patil Road",
"areaName": "Kharadi",
"costForTwo": "₹150 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"avgRating": 4.8,
"veg": true,
"parentId": "2093",
"avgRatingString": "4.8",
"totalRatingsString": "6.0K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 5.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "ABOVE ₹1200",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/natural-ice-cream-dhole-patil-road-kharadi-rest27808",
"type": "WEBLINK"
}
},
{
"info": {
"id": "49252",
"name": "Sweet Truth - Cake and Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/27/696300e2-a24d-4410-9668-ab7a32051ca2_49252.JPG",
"locality": "Kesnand Road",
"areaName": "Wagholi",
"costForTwo": "₹450 for two",
"cuisines": [
"Desserts",
"Ice Cream",
"Bakery",
"Beverages"
],
"avgRating": 4.3,
"parentId": "4444",
"avgRatingString": "4.3",
"totalRatingsString": "2.4K+",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 2,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/sweet-truth-cake-and-desserts-kesnand-road-wagholi-rest49252",
"type": "WEBLINK"
}
},
{
"info": {
"id": "156107",
"name": "The Good Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/2fada64d-b03e-4c32-9471-ea90fe1a13b3_156107.jpg",
"locality": "Kesnand Road",
"areaName": "Wagholi",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Pastas",
"Punjabi",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "7918",
"avgRatingString": "4.3",
"totalRatingsString": "2.7K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/the-good-bowl-kesnand-road-wagholi-rest156107",
"type": "WEBLINK"
}
},
{
"info": {
"id": "720353",
"name": "Wendy's Burgers",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/67d76710-aefd-49b4-9458-4a48f0a3ed20_720353.JPG",
"locality": "Kesnand Road",
"areaName": "Wagholi",
"costForTwo": "₹200 for two",
"cuisines": [
"Burgers",
"American",
"Fast Food",
"Snacks"
],
"avgRating": 4.4,
"parentId": "972",
"avgRatingString": "4.4",
"totalRatingsString": "1.8K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/wendys-burgers-kesnand-road-wagholi-rest720353",
"type": "WEBLINK"
}
},
{
"info": {
"id": "318924",
"name": "Baskin Robbins Ice Cream Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/a13b1ebf-9031-4a82-9782-7da50e76d48f_318924.jpg",
"locality": "Bakori Road",
"areaName": "Wagholi",
"costForTwo": "₹250 for two",
"cuisines": [
"Desserts",
"Ice Cream"
],
"avgRating": 4.6,
"veg": true,
"parentId": "5588",
"avgRatingString": "4.6",
"totalRatingsString": "513",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/baskin-robbins-ice-cream-desserts-bakori-road-wagholi-rest318924",
"type": "WEBLINK"
}
},
{
"info": {
"id": "242684",
"name": "NIC Ice Creams",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/c913937a-9436-4a13-94d1-27c95a0d8e59_242684.JPG",
"locality": "Ubale Nagar",
"areaName": "Wagholi",
"costForTwo": "₹120 for two",
"cuisines": [
"Desserts",
"Ice Cream"
],
"avgRating": 4.7,
"veg": true,
"parentId": "6249",
"avgRatingString": "4.7",
"totalRatingsString": "3.8K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:50:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹123"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/nic-ice-creams-ubale-nagar-wagholi-rest242684",
"type": "WEBLINK"
}
},
{
"info": {
"id": "623597",
"name": "EatFit",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/6/a38df886-c187-4dba-a85b-8c557ea3ae7c_623597.jpg",
"locality": "Baif Road",
"areaName": "Wagholi",
"costForTwo": "₹270 for two",
"cuisines": [
"Chinese",
"Healthy Food",
"Tandoor",
"Pizzas",
"North Indian",
"Thalis",
"Biryani"
],
"avgRating": 4.4,
"parentId": "76139",
"avgRatingString": "4.4",
"totalRatingsString": "1.7K+",
"sla": {
"deliveryTime": 18,
"lastMileTravel": 0.9,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "0.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-05 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "High%20Protein/rx%20tag%205.png",
"description": "High Protein"
},
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "High Protein",
"imageId": "High%20Protein/rx%20tag%205.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-cbba8c78-f658-4ef5-a5d3-456d6468e4de"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/eatfit-baif-road-wagholi-rest623597",
"type": "WEBLINK"
}
}
];

const Body = () => {
  return (
    <div className="res-container">
      <div className="res-ser">search</div>

      <div className="res-card">
        {resList.map((restaurant) => (
          <Card key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
