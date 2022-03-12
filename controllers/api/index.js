const router = require('express').Router();

const userRoutes = require('./user-routes');
const menuRoutes = require('./menu-routes');
const restaurantRoutes = require('./restaurant-routes');

router.use('/users', userRoutes);
router.use('/menu', menuRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;