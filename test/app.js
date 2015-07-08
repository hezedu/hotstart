var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var zupu = require('zupu.js');
app.use(function(req, res, next) {
  //console.log(typeof req.socket.server._events.request)
  //console.log(Object.keys(req.socket.server._events.request));
  //res.writeHead(200, {'Content-Type': 'text/html'});
/*  res.writeHead(200, {'Content-Type': 'text/html'});
  zupu.init(res);
  res.write(zupu(req));*/
  res.render('hotstart',{data:zupu(req)});
  //console.log(req.socket.server._events.request.toString());
  //next();
});

app.use('/', routes);
app.use('/users', users);














var hotstart = require('hotstart');

app.use(hotstart({
  dir: __dirname,  //must
  handle: '/app.js',  // app.js
  ignore:['/public','/node_modules'], //ignore dir . if view cache is false, then will push view path
  suffix:['.js'],  //suffix Filter. if view cache is true, then will push view engine
  route: '/hotstart', //a simple web route
  tpl: 'jade',  //tpl engine cache clear. EJS jade only supports
}, app));

//Simple conf.if you used executable's express to create your app.you only set:
app.use(hotstart({dir:__dirname, tpl:'jade'},app));


















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
