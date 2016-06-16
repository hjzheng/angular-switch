var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var order = require('gulp-order');
var rename = require('gulp-rename');

gulp.task('templateCache', function () {
	return gulp.src('src/**/*.html')
		.pipe(templateCache({module: 'uiSwitch'}))
		.pipe(gulp.dest('src'));
});

gulp.task('JS', function() {
	return gulp.src('src/*/**.js')
		.pipe(concat('angular-switch.tpl.js'))
		.pipe(gulp.dest('./src'));
});

gulp.task('CSS', function() {
	return gulp.src('src/*/**.css')
		.pipe(rename('angular-switch.css'))
		.pipe(gulp.dest('./src'));
});

gulp.task('default', ['JS', 'CSS']);

