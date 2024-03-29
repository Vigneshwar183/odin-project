var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const auth = require('./routes/auth')
const session = require('express-session');
const mongoose = require('mongoose');
require('./passport');
require('dotenv').config();

const mongodb = process.env.mongodb;
mongoose.connect(mongodb,{useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const passport = require('passport');

var app = express();

const cors = require('cors')
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({resave: false, saveUninitialized: true, secret:process.env.sessionSecret}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
