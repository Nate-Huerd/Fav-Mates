const router = require('express').Router();

const { User, Restaurant, Menu } = require('../models');
const sequelize = require('../config/connection')

// login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/sign-up', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('sign-up');
});

router.get('/about-us', (req, res) => {
  // if user is logged in redirect to homepage
  res.render('about-us');
});

// page for single restaurant
router.get('/restaurants/:id', (req, res) => {
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
    console.log(restaurant);
    res.render('single-restaurant', restaurant, loggedIn: req.session.loggedIn);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/', (req, res) => {
  console.log('========== Home Page Route ============');
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  }); 
})

module.exports = router;