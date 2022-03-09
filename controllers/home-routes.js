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
  res.render('about-us', {loggedIn: req.session.loggedIn});
});




router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  }); 
})

module.exports = router;