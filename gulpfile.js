var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');

var paths = {
  scripts: 'view/src/**/*.js',
  styles: ['view/src/**/*.{css,scss}'],
  index: 'view/src/index.html',
  partials: ['view/src/**/*.html', '!view/src/index.html'],
  dest: './view/dest'
};

var pipes = {};

pipes.cleanDest = function () {
  return gulp.src('view/dest/', {read: false})
    .pipe(plugins.clean());
};

pipes.builtPartialScripts = function() {
  return gulp.src(paths.partials)
    .pipe(gulp.dest(paths.dest));
};

pipes.builtAppStyles = function() {
  return gulp.src(paths.styles)
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest(paths.dest));
};

pipes.builtVendorStyles = function() {
  return gulp.src(mainBowerFiles('**/*.css'))
    .pipe(plugins.concat('vendor.css'))
    .pipe(gulp.dest(paths.dest+"/assets/css"));
};

pipes.builtVendorScripts = function() {
  return gulp.src(mainBowerFiles('**/*.js'))
    .pipe(plugins.order(['jquery.min.js', 'angular.min.js','angular-route.min.js','bootstrap.min.js']))
    .pipe(plugins.concat('vendor.js'))
    // .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dest+"/assets/js"));
};

//built app cripts
pipes.builtAppScripts = function() {
  return gulp.src(paths.scripts)
    .pipe(pipes.orderAppScripts())
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dest));
};

//order vendor scripts
pipes.orderVendorScripts = function() {
  return plugins.order(['jquery.min.js', 'angular.min.js','angular-route.min.js','bootstrap.min.js']);
};

//put app.js into first order
pipes.orderAppScripts = function() {
  return plugins.order(['view/src/app/app.js', paths.scripts]);
};

//copy bower-components into app folder
pipes.bowerFiles = function() {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest(paths.dest + '/bower_components'));
};

pipes.builtIndex = function() {
  
  var vendorStyles = pipes.builtVendorStyles();
  var vendorScripts = pipes.builtVendorScripts();
  var appScripts = pipes.builtAppScripts();
  var appStyles = pipes.builtAppStyles();
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