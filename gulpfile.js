var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  gulp.src('./public/js/src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('watch', function() {
    gulp.watch(['./public/js/src/*.js'], ['scripts']);
});


gulp.task('default', ['scripts']);