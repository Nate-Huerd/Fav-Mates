const seedMenu = require('./menu-seeds');
const seedRestaurants = require('./restaurant-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedRestaurants();
  console.log('--------------');
  await seedMenu();
  console.log('Seeds done');
  process.exit(0);
};

seedAll();