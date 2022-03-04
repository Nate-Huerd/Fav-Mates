const User = require('./User');
const Restaurant = require('./Restaurant');
const Menu = require('../seeds/menu-seeds');

Restaurant.hasMany(Menu, {
    foreignKey: 'restaurant_id',
});

Menu.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
});

module.exports = { User, Restaurant };