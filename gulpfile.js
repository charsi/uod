'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var obfuscate = require('gulp-obfuscate');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var stripDebug = require('gulp-strip-debug');


var assetsDir = './js-src/*.js';
var publicDir = './public/js/';


gulp.task('compile', () => {
	return gulp.src(assetsDir)
		.pipe(sourcemaps.init({identityMap:true, debug:true }))
		//.pipe(obfuscate())
		.pipe(babel({
				presets: ['babel-preset-env']
			}))
		.pipe(stripDebug())
		//.pipe(uglify())
		.pipe(sourcemaps.write('maps',{includeContent: false, sourceRoot: '/usr/src/app/js-src/'}))
		.pipe(gulp.dest(publicDir))
});


gulp.task('watch', () => {

	return gulp.watch(assetsDir, ['compile']);
});

gulp.task('start-dev',['watch'], function(){
	return nodemon({ 
		"verbose": true,
		ignore : ['public/js/*','js-src/*']
	})
  //have nodemon run watch on start
  .on('restart', function(){
    console.log(' -----------        Server restarted      ------------ ');
  })
  .on('start', ['compile']);
});

gulp.task('start-live',['watch'], function(){
	return nodemon({ 
		"verbose": true,
		ignore : ['public/js/*','js-src/*']
	})
  //have nodemon run watch on start
  .on('restart', function(){
    console.log(' -----------        Server restarted      ------------ ');
  })
  .on('start', ['compile']);
});



