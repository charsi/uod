var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  gulp.src('./src-js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('watch', function() {
    gulp.watch(['./src-js/*.js'], ['scripts']);
});


gulp.task('default', ['scripts']);