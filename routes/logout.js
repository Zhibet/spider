const express = require('express');
const logout = express.Router();

logout.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Pass errors to the error handler
    }
    res.redirect('/login'); 
  });
});

module.exports = logout;
