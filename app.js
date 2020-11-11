// app.js
require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// serve files in static' folder at root URL '/'
app.use('/', express.static('./'));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://allen:allen666666@cluster0.txdt3.mongodb.net/test?retryWrites=true&w=majority';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

// middleware
//app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
//app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

//let port = 8080;

//app.listen(port, () => {
  //  console.log('Server is up and running on port numner ' + port);
//});
var buddha = " \n\
                            _ooOoo_ \n\
                           o8888888o \n\
                           88\" . \"88 \n\
                           (| -_- |) \n\
                            O\\ = /O \n\
                        ____/`---'\\____ \n\
                      .   ' \\\\| |// `. \n\
                       / \\\\||| : |||// \\ \n\
                     / _||||| -:- |||||- \\ \n\
                       | | \\\\\\ - /// | | \n\
                     | \\_| ''\\---/'' | | \n\
                      \\ .-\\__ `-` ___/-. / \n\
                   ___`. .' /--.--\\ `. . __ \n\
                .\"\" '< `.___\\_<|>_/___.' >'\"\". \n\
               | | : `- \\`.;`\\ _ /`;.`/ - ` : | | \n\
                 \\ \\ `-. \\_ __\\ /__ _/ .-` / / \n\
         ======`-.____`-.___\\_____/___.-`____.-'====== \n\
                            `=---=' \n\
                            'No BUGS!' \n\
";
console.log(buddha);

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
