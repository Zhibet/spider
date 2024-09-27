require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const ejs = require('ejs');
const User = require('./models/user');
const engine = require('ejs-mate');
const session = require('express-session');
const homeRoute = require('./routes/home');
const loginRoute = require('./routes/login');
const logout = require('./routes/logout');
const newRoute = require('./routes/new');
const deleteRoute = require('./routes/delete');

const app = express();

// MongoDB connection with error handling
mongoose.connect(process.env.url);
  
// EJS setup
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'))

// Body parser setup
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

// Session configuration
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // Ensures LocalStrategy is used for authentication
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware for current user
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// Routes
app.use('/', homeRoute);
app.use('/', loginRoute);
app.use('/', logout);
app.use('/',newRoute);
app.use('/',deleteRoute)

// Run the app
const port = process.env.port;
app.listen(port, () => {
  console.log(`The server is live on port ${port}`);
});
