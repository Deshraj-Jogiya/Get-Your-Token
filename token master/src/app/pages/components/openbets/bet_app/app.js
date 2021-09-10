var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var betsRouter = require('./routes/bets');

var app = express();

// DB Connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true
};

try {
  mongoose.connect("mongodb://127.0.0.1:27017/betDB", options);
  console.log("\x1b[32m%s\x1b[0m", "Database connected...");
} catch (err) {
  console.error("Error while connecting database\n", err);
}

// view engine setup
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bets', betsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
