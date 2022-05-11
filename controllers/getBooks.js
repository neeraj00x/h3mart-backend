const req = require('express/lib/request');
const Books = require('../models/books.js');

function getBooks(request, response) {
    try {
        let page = request.query.page;

        Books.find({},{ _id: 0, __v:0 },{ skip: 5*(page-1), limit: 5 }, function (err, result) {
            if (err) throw err;
            if (result) {
                let res= {
                    page: page,
                    books: result
                }
                response.json(res)
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