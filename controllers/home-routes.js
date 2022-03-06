const router = require('express').Router();
const { User } = require('../models');
const sequelize = require('../config/connection');

// login page


router.get('/login', (req, res) => {
  // if user is logged in redirect to homepage
  console.log("hello!");
  res.render('login');
});


router.get('/', (req, res) => {
  console.log('========== Home Page Route ============');
  res.render('homepage')  
})

module.exports = router;