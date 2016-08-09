
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', () => {
  gulp.src('./public/js/src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('watch', () => {
    gulp.watch(['./public/js/src/*.js'], ['scripts']);
});


gulp.task('default', ['scripts']);