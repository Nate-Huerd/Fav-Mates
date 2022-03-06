const router = require('express').Router();

const userRoutes = require('./user-routes');

const menuRoutes = require('./menu-routes');

router.use('/users', userRoutes);
router.use('/menu', menuRoutes);

module.exports = router;