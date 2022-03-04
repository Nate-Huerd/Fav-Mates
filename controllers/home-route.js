const router = require('express').Router();
// const sequelize = require('../config/connection'); don't need quite yet until models are ready!
// const { Menu_Items, Resturants, User} = require('../models'); // commented this out since we aren't sure what models we are going to use yet

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('========== Home Page Route ============');
    res.render('homepage')  
})


module.exports = router;