var db = require('./config/db');
var config = require('./config/config');
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var expressJwt = require('express-jwt');
var secret = config.JWT_SECRET;

mongoose.connect('mongodb://localhost/vegApp');
mongoose.connection.once('open', function(){
	console.log('connected');
});

var app = express();
app.locals.pretty = true;

app.use(bodyParser.json());
console.log(__dirname);
console.log(path.normalize(__dirname));
var root = path.normalize(__dirname + '/..');
console.log(root);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(root, 'client')));
app.set('appPath', 'client');
app.use('/auth', require('./auth'));
app.use('/api', function (req, res, next) {
  console.log('req', req.query, req.params, req.body);
  next();
});
app.use('/api', expressJwt({secret: secret}));
app.use('/api/users', require('./api/users'));
app.listen(9000);
