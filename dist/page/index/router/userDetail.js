define(function(require){
  	var Vue = require("vue");
  	var bus = require("bus");
  	var tpl = require("text!page/index/router/userDetail.html!strip");

  	return {
		template: tpl,
		props: ['data'],
		data: function() {
			return {
			}
		},
	};
});