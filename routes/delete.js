const express = require('express');
const deleteRoute = express.Router();
const Card = require('../models/card'); 

deleteRoute.get('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Card.findByIdAndDelete(id); 
        res.redirect('/'); 
    } catch (err) {
        res.redirect('/'); 
    }
});

module.exports = deleteRoute;
