const seedMenu = require('./menu-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedMenu();
  console.log('--------------');
  console.log()

};

seedAll();
