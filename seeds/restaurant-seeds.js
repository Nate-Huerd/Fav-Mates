const sequelize = require('../config/connection');
const { Restaurant } = require('../models');

const restaurantData = [
  {
    name: `Good Food Place`
  },
  {
    name: `Rita's`
  },
  {
    name: `Grampa's`
  },
  {
    name: `The Spice Melange`
  },
  {
    name: `Four Guys`
  },
  {
    name: `Burger Queen`
  },
  {
    name: `WackArnold's`
  },
  {
    name: `Burrito Bell`
  },
  {
    name: `Raising Dane's`
  },
  {
    name: `Habanero's`
  },
  {
    name: `Jimmy Joe's`
  },
  {
    name: `Witch Witch`
  },
  {
    name: `Narf Narf Grill`
  },
  {
    name: `Gyro Way`
  },
  {
    name: `Wanda's`
  },
  {
    name: `Moe's`
  },
  {
    name: `The Empty Nest`
  },
  {
    name: `The Pretzel Wagon`
  },
  {
    name: `The Hot Salad`
  },
  {
    name: `Hollywood Hamburgers`
  },
  {
    name: `Croissant Bang Bang`
  },
];


let imgSrcArray = [
  'bar-and-lounge.jpg',
  'cheesey.jpg',
  'chef-hat.jpg',
  'cherry-tomato.jpg',
  'food-truck.jpg',
  'healthy.jpg',
  'kid-burger.jpg',
  'mexican.jpg',
  'organic-lorem-ipsum.jpg',
  'pizza.jpg',
  'restaurant-lorem-ipsum.jpg',
  'resturant_1.jpg',
  'resturant_2.jpg',
  'smile.jpg',
  'spoon-and-fork.jpg',
  'stir-fried-tofu.jpg',
  'sun-and-moon.jpg',
  'tempura.jpg',
  'waffle.jpg',
  'munching.jpg',
  'open-area.jpg',
  'ramen.jpg',
];

let restaurantList = [];

for (let i = 0; i < restaurantData.length; i++) {
  let name = restaurantData[i].name;
  let image = imgSrcArray[i];
  let restaurant = {
    name: name,
    imageUrl: image || null
  }
  restaurantList.push(restaurant);
}

// console.log(restaurantList);

const seedRestaurants = () => Restaurant.bulkCreate(restaurantList);

// seedRestaurants();
module.exports = seedRestaurants;