'use strict';
    
//载入插件
var gulp 		= require('gulp'),
    scss 		= require('gulp-sass'), //编译sass文件
    minifyCss 	= require('gulp-minify-css'), //压缩css文件
	sourcemaps 	= require('gulp-sourcemaps'), //Map
	browserSync = require('browser-sync').create();
var reload		= browserSync.reload;

gulp.task('scss-build', function() {
    gulp.src('src/scss/*.scss')
	.pipe( sourcemaps.init() )
    .pipe( scss().on('error', scss.logError) )
    .pipe( sourcemaps.write('./') )
	.pipe( gulp.dest('dist/css') )
	.pipe( reload({stream: true}) );
});

// browserSync server
gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./dist/",
			index: "index.html",
			directory: true
		},
		ui: false,
		ghostMode: false,
		logLevel: "debug",
		host: '0.0.0.0',
		port: 3080,
		open: false
	});
	gulp.watch("src/**/*.scss", ['scss-build']);
	gulp.watch("dist/*.html").on('change', reload);
});

//默认执行以下任务:
gulp.task('default',['server']);


