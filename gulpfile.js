var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();

gulp.task('build', ['scripts', 'html']);
gulp.task('serve', ['browser-sync']);
gulp.task('vendor', ['vendorJS', 'vendorCSS', 'vendorFonts']);

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
    gulp.watch("app/**/**/*.html", ['html-watch']);
});

gulp.task('html-watch', ['html'], function (done) {
    browserSync.reload();
    done();
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

gulp.task('vendorJS', function() {
  return gulp.src('vendor.js')
    .pipe(browserify())
    .pipe(gulp.dest('dist'));
});

gulp.task('vendorCSS', function() {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/ng-tags-input/build/ng-tags-input.min.css'])
    .pipe(concat('vendorCSS.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('vendorFonts', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function() {
  return gulp.src('app/**/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(clean());
});
