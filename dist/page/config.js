/**
 * YEJS 配置文件
 */
requirejs.config({
	baseUrl: "../",
	waitSeconds: 200,
    paths :{
        bus: "./lib/bus",
        jquery:"./lib/jquery.min",
        vue:"./lib/vue2",
        lodash : "./lib/lodash.min",
        text: "./lib/text",
        mintui: "./lib/mint-ui",
        museui: "./lib/muse-ui",
        vuerouter: "./lib/vue-router",
        ysvue: "./lib/ys-vue", // YS-VUE的自定义插件
        ys: "./lib/ys", // 自定义功能函数的模块
        components: "./component"
    },
    packages: [
    ]
});


/* ---------------------------- 公用函数 ------------------------------ */
(function( w ){
	var loadJS = function( src, cb ){
		"use strict";
		var ref = w.document.getElementsByTagName( "script" )[ 0 ];
		var script = w.document.createElement( "script" );
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore( script, ref );
		if (cb && typeof(cb) === "function") {
			script.onload = cb;
		}
		return script;
	};
	// commonjs
	if( typeof module !== "undefined" ){
		module.exports = loadJS;
	}
	else {
		w.loadJS = loadJS;
	}
}( typeof global !== "undefined" ? global : this ));
