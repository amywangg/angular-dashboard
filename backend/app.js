 // Imported required packages
 const express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 cors = require('cors'),
 mongoose = require('mongoose');
 logger = require('morgan');
 
 require('babel-register')({
    presets: [ 'env' ]
})

// MongoDB Databse url
var mongoDatabase = 'mongodb://localhost:27017/log';

// Created express server
const app = express();
Promise = global.Promise;
 
// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
 () => { console.log('Database is connected') },
 err => { console.log('There is problem while connecting database ' + err) }
);
mongoose.Promise = global.Promise;
 
// All the express routes
const fileRoutes = require('../backend/routes/File.route');
 
// Allows cross-origin domains to access this API
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

//  helps logs what requests are being made
app.use(logger('dev'));
// Conver incoming data to JSON format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Enabled CORS
app.use(cors());
 
// Setup for the server port number
const port = process.env.PORT || 4000;
 
// Routes Configuration
app.use('/files', fileRoutes);
 

// Staring our express server
const server = app.listen(port, function () {
 console.log('Server Lisening On Port : ' + port);
});
