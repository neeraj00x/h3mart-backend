var { nanoid } = require("nanoid");
const Orders = require("../models/orders")

function createOrder(request, response) {
    try{
        request.body.orderId = nanoid(7);
        console.log(request.body);
        const newOrder = new Orders(request.body);
        newOrder.save().then(function() {
            console.log('Saved!');
        });
        response.status(200).json({message: 'Successfully added!', orderId: request.body.orderId, body: request.body})
    }
    catch(e) {
        response.status(500).json(e);
    }
}

module.exports = createOrder;