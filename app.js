var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var http = require('http');
const hbs = require('hbs'); 

const app = express();
let PORT;

// function set(port) {
//   PORT = port;
// }

// view engine setup
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(express.Router());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// Page Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const pageTest = require('./routes/pageTest');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/client', pageTest);


  const apiRauter = require('./routes/api'); 
  // Data Request Rauters
  app.post('/api', async function(req,res,next){
    console.log("got a POST  request");
    return await apiRauter.DeliveryTables(req,res);
  });
  
  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// http.createServer(app).listen(PORT);


module.exports = app;
