const router = require('express').Router();
<<<<<<< HEAD
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
=======

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
>>>>>>> 4ffe37cef7807bfc7856e582e1c3b335574ed32f
