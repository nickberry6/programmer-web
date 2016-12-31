var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();

gulp.task('build', ['scripts', 'html']);
gulp.task('serve', ['browser-sync']);

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 6543,
        server: {
            baseDir: "./dist",
            middleware: function (req, res, next) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              next();
            }
        }
    });
    gulp.watch("app/**/*.js", ['js-watch']);
});

gulp.task('js-watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('scripts', function() {
  return gulp.src('app/index.js')
    .pipe(browserify())
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function() {
  return gulp.src('vendor.js')
    .pipe(browserify())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(clean());
});
