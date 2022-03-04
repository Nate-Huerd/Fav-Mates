const router = require('express').Router();
const { User, Restaurant, Menu } = require('../models');

router.get('/', (req, res) => {
  console.log('========== Home Page Route ============');
  res.render('homepage')  
})

// login page
router.get('/login', (req, res) => {
  // if user is logged in redirect to homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// page for single restaurant
router.get('/restaurant/:id', (req, res) => {
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
    res.render('single-restaurant', restaurant);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;