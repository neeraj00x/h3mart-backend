const { getBooks, createOrder, addBook } = require('./controllers');
const connect = require('./connect');
const express = require('express');
const Orders = require('./models/orders.js');
var cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> res.send("vh"));
app.get('/api/v1/books', getBooks);
app.post('/api/v1/addBooks', addBook);
app.post('/api/v1/books', createOrder);
app.get('/find', cors(), function(req, res) {
    var query = req.query.task;

    Orders.find({
        'task': query
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
})

app.listen(port, function() {
    try{
        connect();
        console.log('Server Started at port', port);
    }  
    catch (e) {
        console.log("Server couldn't be started", port);
    }
})