define(function(require){
  	var Vue = require("vue");
  	var bus = require("bus");
  	var tpl = require("text!page/index/router/pageHome.html!strip");

  	return {
		template: tpl,
		props: ['data'],
		data: function() {
			return {
				users: [
					{id: 1, name: "user1", head: "/image/avatar.jpg"},
					{id: 2, name: "user2", head: "/image/avatar.jpg"},
					{id: 3, name: "user3", head: "/image/avatar.jpg"},
					{id: 4, name: "user4", head: "/image/avatar.jpg"},
					{id: 5, name: "user5", head: "/image/avatar.jpg"}													
				],
			}
		},
	};
});