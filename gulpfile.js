'use strict';
var gulp = require('gulp');

//var u = require('uglify');
var del = require('del');

var config = require('./gulp.config')();

var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function() {
  return gulp.src('ticket-component.html')
    .pipe(vulcanize())
    .pipe(gulp.dest('dist/elements'));
});

gulp.task('default', function () {

});
