const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Restaurant, Menu } = require('../models/index');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  res.render('shopping-cart', req.session);
});

router.get('/complete', withAuth, (req, res) => {
  let date = new Date();
  res.render('order-complete', { date: date, grandTotal: req.session.grandTotal, loggedIn: req.session.loggedIn });
})

module.exports = router;