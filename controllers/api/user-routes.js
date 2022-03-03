const router = require('express').Router();
const { User } = require('../../models');

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

module.exports = router;