const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    img:{type:String},
    title: {type:String},
    description: {type:String}
});

const cardModel = new mongoose.model('Card',cardSchema);

module.exports = cardModel;