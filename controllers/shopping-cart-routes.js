const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Restaurant, Menu } = require('../models/index');

// eventually include withAuth

router.get('/', async (req, res) => {
   res.render('shopping-cart', req.session);
});

router.get('/complete', (req, res) => {
  let date = new Date();
  res.render('order-complete', { date: date, grandTotal: req.session.grandTotal });
})

module.exports = router;