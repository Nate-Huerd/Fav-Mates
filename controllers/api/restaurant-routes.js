const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Restaurant, Menu } = require('../../models');

// get all restaurants
router.get('/', (req, res) => {
  Restaurant.findAll({
    attributes: ['id', 'name'],
    include: [
      {
        model: Menu,
        attributes: ['id', 'name', 'price', 'restaurant_id']
      }
    ]
  }).then(dbRestaurantData => res.json(dbRestaurantData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// get a single restaurant
router.get('/:id', (req, res) => {
  Restaurant.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name'],
    include: [
      {
        model: Menu,
        attributes: ['id', 'name', 'price']
      }
    ]
  })
  .then(dbRestaurantData => {
    if (!dbRestaurantData) {
      res.status(404).json({ message: 'No restaurant with this id' })
    }
    res.json(dbRestaurantData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// create a restaurant
router.post('/', (req, res) => {
  Restaurant.create({
    name: req.body.name,
  })
  .then(dbRestaurantData => res.json(dbRestaurantData))
  .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  Restaurant.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbRestaurantData => {
    if (!dbRestaurantData) {
      res.status(404).json({ message: 'No restaurant with that id' })
      return;
    }
    res.json(dbRestaurantData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;