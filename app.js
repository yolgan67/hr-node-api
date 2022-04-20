var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

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


// app.use('/',indexRouter);
app.use(cors());
app.use('/candidates', candidateRouter,function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  });

app.listen(process.env.PORT || 3000 , () => console.log(`Example app listening on port ${process.env.PORT || 3000}!`))
