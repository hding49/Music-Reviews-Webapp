// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// serve files in static' folder at root URL '/'
app.use('/', express.static('./'));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://haoran:allen666666@cluster0-8essi.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

