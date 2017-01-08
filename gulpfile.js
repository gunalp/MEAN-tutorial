var gulp = require('gulp');
var sass = require('gulp-sass');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');

var paths = {
  image     :   'view/src/components/image/*.png',
  scripts   :   'view/src/**/*.js',
  styles    :   ['view/src/components/scss/*.scss'],
  index     :   'view/src/index.html',
  partials  :   ['view/src/**/*.html', '!view/src/index.html'],
  dest      :   './view/dest'
};

var pipes = {};

pipes.cleanDest = function () {
  return gulp.src('view/dest/', {read: false})
    .pipe(plugins.clean());
};

pipes.builtAppImage = function () {
  return gulp.src(paths.image)
    .pipe(gulp.dest(paths.dest+"/components/image"));
};

pipes.builtAppStyles = function() {
  return gulp.src(paths.styles)
    .pipe(sass({})).on('error',function (error) {
      console.log('\n', error.messageFormatted)
    })
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest(paths.dest+"/components/css"));
};

pipes.builtVendorStyles = function() {
  return gulp.src(mainBowerFiles('**/*.css'))
    .pipe(plugins.concat('vendor.css'))
    .pipe(gulp.dest(paths.dest+"/components/css"));
};

pipes.builtVendorScripts = function() {
  return gulp.src(mainBowerFiles('**/*.js'))
    .pipe(plugins.order(['jquery.min.js', 'angular.min.js','angular-route.min.js','bootstrap.min.js']))
    .pipe(plugins.concat('vendor.js'))
    // .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dest+"/components/js"));
};

pipes.builtAppScripts = function() {
  return gulp.src(paths.scripts)
    .pipe(pipes.orderAppScripts())
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dest));
};

pipes.orderVendorScripts = function() {
  return plugins.order(['jquery.min.js', 'angular.min.js','angular-route.min.js','bootstrap.min.js']);
};

pipes.orderAppScripts = function() {
  return plugins.order(['view/src/app/app.js', paths.scripts]);
};

pipes.builtPartialScripts = function() {
  return gulp.src(paths.partials)
    .pipe(gulp.dest(paths.dest));
};

pipes.bowerFiles = function() {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest(paths.dest + '/bower_components'));
};

pipes.builtIndex = function() {
  
  var vendorStyles = pipes.builtVendorStyles();
  var vendorScripts = pipes.builtVendorScripts();
  var appScripts = pipes.builtAppScripts();
  var appStyles = pipes.builtAppStyles();
  var appImage = pipes.builtAppImage();
  pipes.builtPartialScripts();
  
  return gulp.src('view/src/index.html')
    .pipe(gulp.dest(paths.dest))
    .pipe(plugins.inject(vendorScripts, {relative:true, name:'bowerjs'}))
    .pipe(plugins.inject(vendorStyles, {relative:true, name:'bowercss'}))
    // .pipe(plugins.inject(gulp.src(mainBowerFiles()), {relative:true, name:'bower'}))
    .pipe(plugins.inject(appScripts, {relative:true}))
    .pipe(plugins.inject(appStyles, {relative:true}))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('clean-app', pipes.cleanDest);
gulp.task('default', ['clean-app'], pipes.builtIndex);

gulp.task('watch', ['default'], function() {
  
  gulp.watch(paths.index, function() {
    return pipes.builtIndex();
  });
  
  gulp.watch(paths.scripts, function() {
    return pipes.builtAppScripts();
  });
  
  gulp.watch(paths.styles, function() {
    return pipes.builtAppStyles();
  });
  
  gulp.watch(paths.partials, function() {
    return pipes.builtPartialScripts();
  });
});