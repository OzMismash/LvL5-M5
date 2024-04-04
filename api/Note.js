const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    price: Number,
    closeDate: String,
    image: String,
    condition: String,
    description: String,
    paymentOptions: String,
    username: String,
    reviews: Number,
    location: String,
});

module.exports = mongoose.model('Note', noteSchema);