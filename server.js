const path = require('path');

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// commented out until it exists
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// how the session will look
const sess = {
  secret: 'extremely secret',
  cookie: {
    // max age is set to one day right now
    maxAge:  24 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

// set up sessions in app
app.use(session(sess));

// set up handlebars engine
// helpers commented out because it doesn't exist yet
const hbs = exphbs.create({ /* helpers */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// all the routes server will use
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`))
});