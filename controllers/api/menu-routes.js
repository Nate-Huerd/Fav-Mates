const router = require('express').Router();
const { Menu, Restaurant } = require('../../models');

// get all menu items
router.get('/', (req, res) => {
  Menu.findAll({
    attributes: ['id', 'name', 'price', 'restaurant_id'],
    include: [
      {
        model: Restaurant,
        attributes: ['name']
      }
    ]
  })
  .then(dbMenuData => res.json(dbMenuData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// get one menu item
router.get('/:id', (req, res) => {
  Menu.findOne({
    attributes: ['id', 'name', 'price', 'restaurant_id'],
    where: {
      id: req.params.id
    }
  })
  .then(dbMenuData => {
    if (!dbMenuData) {
      res.status(404).json({ message: 'No menu item with this id' })
      return;
    }
    res.json(dbMenuData);
  })
  .catch(err => res.status(500).json(err));
});

// create a menu item
router.post('/', (req, res) => {
  Menu.create({
    name: req.body.name,
    price: req.body.price,
    restaurant_id: req.body.restaurant_id
  })
  .then(dbMenuData => res.json(dbMenuData))
  .catch(err => res.status(500).json(err));
});

// delete a menu item
router.delete('/:id', (req, res) => {
  Menu.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbMenuData => {
    if (!dbMenuData) {
      res.status(404).json({ message: 'No menu item with that id' });
      return;
    }
    res.json(dbMenuData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router