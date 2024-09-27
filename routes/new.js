const express = require('express');
const newRoute = express.Router();
const cards = require('../models/card');
const isAuthenticated = require('../authenticated');

newRoute.get('/new',isAuthenticated,(req,res)=>{
    const style = 'new.css'
    const title = 'Card Form'
    res.render('newpage',{style,title})
})

newRoute.post('/new',async (req, res) => {
    try {
        const { img, title, description } = req.body; 

        const newCard = new cards({
            img,
            title,
            description,
        });

        await newCard.save();

        res.redirect('/');
    } catch (error) {
        console.error('Error adding card:', error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = newRoute;