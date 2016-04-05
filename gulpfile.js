/*jslint node: true */
'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default',function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: './node_module/**'
  })
  .on('restart',function() {
    console.log("Restarting . . .");
  });
});