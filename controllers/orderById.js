function getBooks(req, res) {
    try {
        {
            var query = req.query.task;

            Tasks.find({
                'task': query
            }, function (err, result) {
                if (err) throw err;
                if (result) {
                    res.json(result)
                } else {
                    res.send(JSON.stringify({
                        error: 'Error'
                    }))
                }
            })
        }
    }
    catch (t) {
        response.status(500).send(t, 'Some error happened in GET Request');
    }
}

module.exports = getBooks;