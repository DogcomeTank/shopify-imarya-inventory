const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const crypto = require('crypto');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nonce = require('nonce')();
const bodyParser = require('body-parser');
const querystring = require('querystring');
const request = require('request-promise');
const mongoose = require('mongoose');
const key = require('./model/keys');



// view engine setup
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.json()); // parse client request data to json format
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'mySecrete',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } //only set this to true if you are in HTTPS connection
}));

app.set('views', path.join(__dirname, 'views'));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/')));
app.use(express.static(path.join(__dirname, 'public')));

// admin1pass

const index = require('./routes/index');
const Products = require('./routes/Products');

app.use('/', index);
app.use('/products', Products);



app.listen(8080, () => {
  console.log('http://localhost:8080 -- "Ctrl + C to exit."');
});