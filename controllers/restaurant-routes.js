const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Menu } = require('../models/index');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  }
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

// page for single restaurant
router.get('/:id', withAuth, (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  Restaurant.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name'],
    include: [
      {
        model: Menu,
        attributes: ['id', 'name', 'price']
      }
    ]
  })
  .then(dbRestaurantData => {
    let restaurant = dbRestaurantData.get({ plain: true });
    res.render('single-restaurant', {restaurant, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;