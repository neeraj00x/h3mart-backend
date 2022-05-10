const { getBooks, createOrder, addBook, getOrderById } = require('./controllers');
const connect = require('./connect');
const express = require('express');
// const Orders = require('./models/orders.js');
// var cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> res.sendFile(__dirname+'/index.html'));
app.get('/api/v1/books', getBooks);
app.post('/api/v1/books', addBook);
app.get('/api/v1/order', getOrderById);
app.post('/api/v1/order', createOrder);

app.listen(process.env.PORT || port, function() {
    try{
        connect();
        console.log('Server Started at port', port);
    }  
    catch (e) {
        console.log("Server couldn't be started", port);
    }
})