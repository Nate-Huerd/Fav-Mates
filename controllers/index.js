const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const shoppingCartRoutes = require('./shopping-cart-routes');
const restaurantRoutes = require('./restaurant-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes); 
router.use('/shopping-cart', shoppingCartRoutes);
router.use('/restaurants', restaurantRoutes);

router.use((req, res) => {
  res.send("<h1>Work in Progress (Wrong route :c )</h1>")
});

module.exports = router;