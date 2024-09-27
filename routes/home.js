const express = require('express');
const homeRoute = express.Router();
const isAuthenticated = require('../authenticated');
const card = require('../models/card')

homeRoute.get('/',isAuthenticated, async(req,res)=>{
    const user = req.user.username;
    const style = '/home.css'
    const title = 'Project Spider';
    const cards = await card.find({});

    res.render('homepage',{title,user,cards,style})
})

module.exports = homeRoute;