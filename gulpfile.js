var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps'),
  traceur = require('gulp-traceur'),
  watch = require('gulp-watch');

var paths = {
  scripts: ['./jssrc/**/*.js']
};

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(traceur())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('default', ['scripts']);

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
});
