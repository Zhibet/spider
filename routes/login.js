const express = require('express');
const passport = require('passport');
const loginRoute = express.Router();

loginRoute.get('/login', async(req,res)=>{
    const style = '/login.css'
    const title = 'Spider login';
    res.render('loginpage',{title,style})
})

loginRoute.post('/login',passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login', 
    })
);

module.exports = loginRoute;