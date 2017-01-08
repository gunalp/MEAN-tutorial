var defaults = {
  componentFolder : 'components/',
  appFolder : 'public/'
};

//Developer Dependencies
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  browserify = require('gulp-browserify'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  notifier = require('node-notifier');

//Task list
var taskList = ['sass'];
gulp.task('default', taskList);

gulp.task('sass', function(){
  gulp.src(defaults.componentFolder + 'scss/*')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths : require('node-bourbon').includePaths
    })).on('error', function (error) {
    gutil.log('\n', error.messageFormatted);
    
    notifier.notify({
      title : 'SASS Compile Error',
      message : error.message + '\nFile:' + error.file + ':' + error.line + ':' + error.column,
      sound : true
    })
  })
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(defaults.appFolder + 'css/'));
});


gulp.task('watch', function(){
  //
  gulp.watch(defaults.componentFolder + 'scss/*.scss', ['sass']);
});