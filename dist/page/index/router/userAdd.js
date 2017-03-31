define(function(require){
  	var Vue = require("vue");
  	var bus = require("bus");
  	var tpl = require("text!page/index/router/userAdd.html!strip");

  	return {
		template: tpl,
		props: ['data'],
		data: function() {
			return {
			}
		},
	};
});