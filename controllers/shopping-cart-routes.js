const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Restaurant, Menu } = require('../models/index');

// eventually include withAuth

router.get('/', async (req, res) => {
   let session = {};
   session.cart = [];
   session.username = 'example wth';
   let testItem = {
     name: 'Test Item',
     price: 12,
     restaurantID: 1
   };
   let testItem2 = {
     name: 'Test Item2',
     price: 10,
     restaurantID: 1
   };
   session.cart.push(testItem);
   session.cart.push(testItem2)
   res.render('shopping-cart', session);
});

module.exports = router;