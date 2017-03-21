	require(["vue", "museui", "page/index/index"], function(Vue, museui, app){
		Vue.use(museui);
		new Vue({
			el: "#main",
			data: {
				data: data
			},
			components: {
				app: app
			},
			methods: {
		        handleClick: function() {
		        	console.log(this);
		        }
		    }
		});
	});