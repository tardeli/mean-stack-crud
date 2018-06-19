var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/unoesc', err => {
  if (err) {
    console.error('Não foi possível conectar ao mongodb')
    console.log(err)
  }
});

var indexRouter = require('./routes/index');
var produtoRouter = require('./routes/produto');

var app = express();

app.set('view engine', 'ejs');
app.use(cors(), logger('dev'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/produto', produtoRouter);

module.exports = app;
