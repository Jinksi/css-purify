var gulp = require('gulp');
var purify = require('gulp-purifycss');

gulp.task('css', function() {
  return gulp.src('./style.css')
    .pipe(purify(['./src/**/*.html'], {
      rejected: true
    }))
    .pipe(gulp.dest('./cleansed/'));
});
