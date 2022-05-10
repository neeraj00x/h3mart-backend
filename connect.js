const mongoose = require('mongoose');
const connectionString = `mongodb+srv://newuser:AwXhOCbIijl9a4oh@cluster0.m0xlx.mongodb.net/Cluster0?retryWrites=true&w=majority`;

function connect() {
    mongoose.connect(connectionString);
}

module.exports = connect; 