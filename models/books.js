const mongoose = require('mongoose');

const Books = mongoose.model('books', 
{
    name: String,
    price: Number,
});

module.exports = Books;
