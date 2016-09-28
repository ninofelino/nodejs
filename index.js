const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'models/datafile' });
db.loadDatabase(function (err) {    // Callback is optional
  // Now commands will be executed
});

// create sample database
var doc = {};
//  db.insert({ref:'reference'}, function (err, newDoc) {});
db.insert()


// ----------------------

var express = require('express');
var app = express();
var routes = require('./routes/test');
var pg = require('./routes/postgre');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();   
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var test = require('./routes/test');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/test',routes.list);
app.get('/pg',pg.list);
app.get('/pg/:sql',pg.sql);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


