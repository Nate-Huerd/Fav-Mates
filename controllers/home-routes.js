const router = require('express').Router();
const { User } = require('../models');

// login page

router.get('/', (req, res) => {
  console.log('========== Home Page Route ============');
  res.render('homepage')  
})

router.get('/login', (req, res) => {
  // if user is logged in redirect to homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;