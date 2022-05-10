const Books = require("../models/books")

function addBook(request, response) {
    try {
        const newBook = new Books(request.body);
        newBook.save().then(function () {
            console.log('Saved!');
        });
        response.status(200).json({ message: 'Successfully added!', body: request.body })
    }
    catch (e) {
        response.status(500).json(e);
    }
}

module.exports = addBook;