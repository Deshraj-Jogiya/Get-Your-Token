var app = require('express')();

var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var validator = require('express-validator');

// require mongoose
const mongoose = require('./config/mongoose');
require('dotenv').config();

// import controller
var AuthController = require('./controllers/AuthController');

// import Router file
var pageRouter = require('./routers/route');

var session = require('express-session');
const bodyParser = require('body-parser');
var flash = require('connect-flash');
var i18n = require("i18n-express");

//middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//HTTPS redirect middleware
function ensureSecure(req, res, next) {
    //Heroku stores the origin protocol in a header variable. The app itself is isolated within the dyno and all request objects have an HTTP protocol.
    if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
        //Serve Angular App by passing control to the next middleware
        next();
    } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
        //Redirect if not HTTP with original request URL
        res.redirect('https://' + req.hostname + req.url);
    }
}
app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1200000
  }
}));

app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(flash());
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
  siteLangs: ["en"],
  textsVarName: 'translation'
}));

app.use('/public', express.static('public'));

app.get('/layouts/', function (req, res) {
  res.render('view');
});

// apply controller
AuthController(app);

//For set layouts of html view
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Define All Route 
pageRouter(app);

app.use('/', ensureSecure);
app.get('/', function (req, res) {
  res.redirect('/');
});

var port = process.env.PORT || 5000;
http.listen(port, function () {
  console.log(`listening on *:${port}`);
});
