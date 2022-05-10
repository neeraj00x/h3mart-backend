const Orders = require('../models/orders.js');

function getBooks(req, res) {
    try {
        {
            var query = req.query.orderId;

            Orders.findOne({
                'orderId': query,
            },{ _id: 0, __v:0 }, function (err, result) {
                if (err) throw err;
                if (result) {
                    res.json(result)
                } else {
                    res.send(JSON.stringify({
                        error: 'Error'
                    }))
                }
            });
        }
    }
    catch (t) {
        res.status(500).send(t, 'Some error happened in GET Request');
    }
}

module.exports = getBooks;