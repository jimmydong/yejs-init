'use strict';
    
//载入插件
var gulp 		= require('gulp'),
    scss 		= require('gulp-sass'), //编译sass文件
    rjs			= require('requirejs'), //编译js文件
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

gulp.task('js-build', function() {
	rjs.optimize({
			baseUrl: "./dist/",
		    mainConfigFile: "./dist/page/config.js",
			name: "page/index/_index",
			out: "dist/page/index/_index_build.js"
	});
	reload({stream: true});
})

function jsBuild(event){
	//console.log("jsBuild: " + event.path);
	if(event.path.match(/_build/g)) return;
	if(! event.path.match(new RegExp(__dirname + '/dist/'))) return;
	rjs.optimize({
		baseUrl: "./dist/",
	    mainConfigFile: "./dist/page/config.js",
		name: "page/index/_index",
		out: "dist/page/index/_index_build.js"
	});
	console.log(event.path + " changed, rebuild ok");
	reload();
}

// browserSync server
gulp.task('server', function(){
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
	gulp.watch(["dist/**/*.html","dist/**/*.js"], jsBuild);
	gulp.watch("dist/*.html").on('change', reload);
});



//默认执行以下任务:
//gulp.task('default', ['js-build']);
gulp.task('default', ['server']);


