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