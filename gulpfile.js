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

gulp.task('js', ['templateCache'], function() {
	return gulp.src('src/**/*.js')
		.pipe(concat('angular-switch.tpl.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
	return gulp.src('src/**/*.css')
		.pipe(rename('angular-switch.css'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js', 'css']);

