var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var order = require('gulp-order');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');

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

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: '.'
		}
	});
});

gulp.task('watch', function() {
	watch(['src/**/*.js', 'src/**/*.css', '!src/**/templates.js', 'example/*'], function() {
		gulp.run('build');
	});
});

gulp.task('build', ['js', 'css']);
gulp.task('dev', ['build', 'browserSync', 'watch']);

