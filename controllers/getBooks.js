function getBooks(request, response) {
    try {
        task = request.query.task;
        response.status(200).json({task: request.query.name , url: request.url, message: "success"})
    }
    catch(t) {
        response.status(500).send(t,'Some error happened in GET Request');
    }
}

module.exports = getBooks;