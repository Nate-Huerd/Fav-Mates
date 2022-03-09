const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Restaurant, Menu } = require('../models/index');

// eventually include withAuth

router.get('/', async (req, res) => {
   res.render('shopping-cart', { shopping-cart, loggedIn: req.session.loggedIn });
});

module.exports = router;