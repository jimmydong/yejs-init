define(function(require){
  	var Vue = require("vue")
  	var tpl = require("text!page/system/index.html!strip");	//注意：修改模板路径！！！
  	Vue.config.debug = true;
  	Vue.config.devtools = true;
  	vheader = require("component/vue/header")
  	
  	return Vue.extend({
		template: tpl,
		props: ['data'],
		data: function(){
			return {}
		},
		components: {
			vheader: vheader
		},
		methods: {
		}
	});
});
