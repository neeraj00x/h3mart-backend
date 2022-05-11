const req = require('express/lib/request');
const Books = require('../models/books.js');

function getBooks(request, response) {
    try {
        let page = +request.query.page;
        let skip = Math.max(5*(page-1),0)
        let size = Math.min((+request.query.size)?request.query.size:5, 5);

        Books.find({},{ _id: 0, __v:0 },{ skip: skip, limit: size }, function (err, result) {
            if (err) throw err;
            if (result) {
                let res= {
                    page: (page)?page:1,
                    items: (page && size)?size:5,
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