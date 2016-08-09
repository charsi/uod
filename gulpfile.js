
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var obfuscate = require('gulp-obfuscate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', () => {
  gulp.src('./js-src/*.js')
	.pipe(sourcemaps.init())
    //.pipe(obfuscate())
	.pipe(uglify())
	.pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('watch', () => {
    gulp.watch(['./js-src/*.js'], ['scripts']);
});


gulp.task('default', ['scripts']);