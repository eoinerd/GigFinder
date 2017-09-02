var express = require('express');
var path = require('path');
var gigs = require('./scripts/gigsControllerData');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongojs = require('mongojs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });
//app.get('/gigs', gigs.getAll);
app.get('/data/gig/:id', gigs.get);
app.get('/data/gig', gigs.getAll);
app.post('/data/gig/:id', gigs.save);

// var db = mongojs('mongodb://eoinGigs:fiatpunto26@ds121534.mlab.com:21534/gigs', ['gigsOn']);

var db = mongojs('mongodb://eoinEvents:fiatpunto26@ds161032.mlab.com:61032/events', ['events']);

 db.events.find(function(err, events) {
        console.log(events);
        if (err) {
            console.log(err);
        } else {
            console.log(events);
        }
     
     app.get('/gigs', function() {
         return events;
     });
    });
    
var $ = require('gulp-load-plugins')();
var yeoman = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist'
};


$.connect.server({
    root: [yeoman.app, '.tmp'],
    livereload: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        middleware: function (connect) {
          return [
            modRewrite([
              '!(\\..+)$ / [L]'
            ]),
            lrSnippet,
            mountFolder(connect, '.tmp'),
            mountFolder(connect, yeomanConfig.app)
          ];
        }
      },
    },
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000
  });
  