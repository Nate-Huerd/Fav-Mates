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
  {
    name: `Lego Land Tacos`
  },
  {
    name: `The Dude`
  }
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

seedRestaurants();
module.exports = seedRestaurants;