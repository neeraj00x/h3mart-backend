const Books = require('../models/books.js');

function getBooks(request, response) {
    try {
        Books.find({},{ _id: 0, __v:0 }, function (err, result) {
            if (err) throw err;
            if (result) {
                response.json(result)
            } else {
                response.send(JSON.stringify({
                    error: 'Error'
                }))
            }
        });
    }
    catch(t) {
        response.status(500).send(t,'Some error happened in GET Request');
    }
}

module.exports = getBooks;