var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var candidateRouter = require('./routes/candidateRoutes');

var app = express();

const db = require('./config/db')();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',indexRouter);
app.use('/candidates', candidateRouter);

app.use((req, res, next) => {
  res.setheaders('Access-Control-Allow-Origin', '*');
  res.setheaders('Access-Control-Allow-Headers', '*');
  next();
  });



app.listen(process.env.PORT || 3000 , () => console.log(`Example app listening on port ${process.env.PORT || 3000}!`))

