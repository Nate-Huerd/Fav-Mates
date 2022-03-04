const router = require('express').Router();

// const apiRoutes = require('./api/'); //don't need these yet
const homeRoutes = require('../controllers/home-routes');
// const dashboardRoutes = require('./dashboard-routes.js'); //don't need these yet

// router.use('/dashboard', dashboardRoutes); //don't need these yet
router.use('/', homeRoutes);
// router.use('/api', apiRoutes); //don't need these yet
router.use((req, res) => {
  res.send("<h1>Work in Progress (Wrong route :c )</h1>")
});

router.use('/', homeRoutes);


module.exports = router;
