

var db = require('./config/db');
var config = require('./config/config');

var express = require("express");
var mongoose = requir('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

mongoose.contect('mongodb://localhost/vegApp');
mongoose.connection.once('open', function(){
	console.log('connected');
});

var app = express();
app.locals.pretty = true;

app.use(bodyParser.json());
console.log(__dirname);
console.log(path.normalize(__dirname));
var root = path.normalize(__dirmane + '/..');
console.log(root);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(root, 'client')));
app.set('appPath', 'client');

require('./routes')(app);

app.listen(9000);
