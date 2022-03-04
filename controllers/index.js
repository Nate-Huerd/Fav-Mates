const router = require('express').Router();

<<<<<<< HEAD
// const apiRoutes = require('./api/'); //don't need these yet
const homeRoutes = require('../controllers/home-route');
// const dashboardRoutes = require('./dashboard-routes.js'); //don't need these yet

// router.use('/dashboard', dashboardRoutes); //don't need these yet
router.use('/', homeRoutes);
// router.use('/api', apiRoutes); //don't need these yet

router.use((req, res) => {
  res.send("<h1>Work in Progress (Wrong route :c )</h1>")
});
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;