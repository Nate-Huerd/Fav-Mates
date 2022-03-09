const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Menu } = require('../models/index');

router.get('/', async (req, res) => {
  Restaurant.findAll({
    attributes: ['id', 'name'],
    include: [
      {
        model: Menu,
        attributes: ['id', 'name', 'price', 'restaurant_id'],
        limit: 3
      },
    ],
  })
  .then(dbRestaurantData => {
    const restaurants = dbRestaurantData.map(restaurant => restaurant.get({ plain: true }));
    res.render('restaurant-full-list', { restaurants, loggedIn: req.session.loggedIn });
  })
});

module.exports = router;