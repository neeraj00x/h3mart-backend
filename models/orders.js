const mongoose = require('mongoose');

const Orders = mongoose.model('orders',
    {
        orderId: {
            type: String,
            required: true
        },
        user: {
            name: String,
            emailId: String,
            phone: Number
        },
        books: Array,
        quantity: Array,
        totalamount: Number
    });

module.exports = Orders;
