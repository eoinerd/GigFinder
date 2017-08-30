var express = require('express');
var path = require('path');
var gigs = require('./scripts/gigsControllerData');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var mongojs = require('mongojs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/gig/:id', gigs.get);
app.get('/data/gig', gigs.getAll);
app.post('/data/gig/:id', gigs.save);
app.get('*', function(req, res) { res.sendFile(rootPath + '/GigFinder/app/index.html'); });


// app.listen(9000);
// console.log('listening on port 8000....');

var $ = require('gulp-load-plugins')();
var yeoman = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist'
};

$.connect.server({
    root: [yeoman.app, '.tmp'],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000
  });