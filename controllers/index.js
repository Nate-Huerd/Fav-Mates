const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('../controllers/home-routes');
const shoppingCartRoutes = require('../controllers/shopping-cart-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes); 
router.use('/shopping-cart', shoppingCartRoutes);

router.use((req, res) => {
  res.send("<h1>Work in Progress (Wrong route :c )</h1>")
});

module.exports = router;
