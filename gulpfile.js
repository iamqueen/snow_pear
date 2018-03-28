var gulp = require('gulp'),
	connect = require('gulp-connect'),
	image = require('gulp-image'),
	less = require('gulp-less'),
	watch = require('gulp-watch');


gulp.task('server', function(){
	connect.server({
		root: './',
		port: 8000,
		livereload: true
	})
});

gulp.task('imageMin', function(){
	watch('src/images', {ignoreInitial: false})
	.pipe(image())
	.pipe(gulp.dest('src/dist'));
});

gulp.task('less', function(){
	gulp.src('less/test.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watchs', function () {
    gulp.watch('less/test.less', ['less']); //当所有less文件发生改变时，调用testLess任务
});

gulp.task('set', ['watchs']);


