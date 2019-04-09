var gulp = require('gulp'),
    connect = require('gulp-connect');

var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});

gulp.task('js-lib', function () {
    return gulp.src([
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./app/lib/'));
});


gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch('./app/scss/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app/css'))
      .pipe(connect.reload());
  });

gulp.task('default', ['js-lib', 'sass', 'connect', 'watch']);


