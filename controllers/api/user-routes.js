const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Menu } = require('../../models');

// get all users
router.get('/', (req,res) => {
  User.findAll({
    attributes: ['id', 'username']
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// get one user by id
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: ['id', 'username'],
    where: {
      id: req.params.id
    },
    /* include: [
      other stuff from other tables
     ] */
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => res.status(500).json(err));

})

// login a registered user
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with this username'})
      return;
    }

    // check for valid password
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Wrong password' });
      return;
    }

    req.session.save(() => {
      // create session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.name;
      req.session.loggedIn = true;
      req.session.cart = [];
      res.json({
        user: dbUserData,
          message: 'You are logged in'
      });
    })
  })
})

// create a new user
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      req.session.cart = [];
      res.json(dbUserData);
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// log out user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // destroy session for user
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// delete a user
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user with that id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// add items to user's cart
router.post('/order', (req, res) => {
  // console.log(req.session.cart);
  Menu.findAll({
    where: {
      id: req.body.orderArray
    }
  }).then(dbMenuData => {
    let cart =dbMenuData.map(item => item.get({ plain: true}));    
    // console.log(cart);

    req.session.cart = cart;
    res.json(req.session.cart)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// add grand total to session
router.post('/addTotal', (req, res) => {
  req.session.grandTotal = req.body.grandTotal;
  res.json(req.session.grandTotal);
});

module.exports = router;