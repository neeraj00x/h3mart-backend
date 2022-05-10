const mongoose = require('mongoose');

const Orders = mongoose.model('orders', 
{
    name: String,
    emailId: String,
    number: Number,
    books: Array,
    quantity: Array,
    totalamount: Number,
});

module.exports = Orders;
