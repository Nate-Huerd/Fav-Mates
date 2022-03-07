const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Restaurant, Menu } = require('../models/index');

// eventually include withAuth

router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
   res.render('shopping-cart', req.session);
});

router.get('/complete', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  
  let date = new Date();
  res.render('order-complete', { date: date, grandTotal: req.session.grandTotal });
  // req.session.cart = [];
  // req.session.grandTotal = 0;
})

module.exports = router;