/**
 * author: JC.
 * date: 2017.03.16
 * desc: URL跳转.
 * Vue.$vdirect({_c:"hello",_a:"world"});
 */
define(['vue'], function(Vue){
	var ysvue = {};
	ysvue.install = function (Vue, options) {
		// 不叫redirect是因为这个名字太普通了，避免日后和其他的插件混淆
		if (ysvue.installed) {
			return;
		}

		Vue.prototype.$vdirect = function(urlArgs) {
			var prefix = '/?';
			var args = [];
			for(var x in urlArgs) {
				args.push(x + "=" + urlArgs[x]);
			}
			window.location.href = prefix + args.join("&");
		}
	}

	return ysvue;
});