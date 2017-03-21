define(function(require){
  	var Vue = require("vue");
  	var bus = require("bus");
  	var tpl = require("text!component/util/MultiSelect.html!strip");
  	Vue.config.debug = true;
  	Vue.config.devtools = true;
  	
  	return Vue.extend({
		template: tpl,
		props: ["categorys"],
		data: function(){
			return {
				first: 0,
				second: 0,
				third: 0
			}
		},
		computed: {
			showSecond: function() {
				// 因为Vue会默认给对象添加一个属性，这里就判断>1了
				if (this.first == 0) {
					return false;
				}
				return Object.getOwnPropertyNames(this.categorys[this.first]['child']).length > 1?true:false;
			
			},
			secondList: function() {
				if (!this.showSecond) {
					return {};
				}
				return this.categorys[this.first]['child'];
			},
			showThird: function() {
				if (!this.showSecond || this.second == 0) {
					return false;
				}
				return Object.getOwnPropertyNames(this.secondList[this.second]['child']).length > 1?true:false;
			},
			thirdList: function() {
				if (!this.showThird) {
					return {};
				}
				return this.secondList[this.second]['child'];
			}
		},
		created: function() {
		},
		watch: {
			first: function(val) {
				this.second = this.third = 0;
				this.onSelectChange();
			},
			second: function(val) {
				this.third = 0;
				this.onSelectChange();
			},
			third: function(val) {
				this.onSelectChange();
			}
		},
		methods: {
			onSelectChange: function() {
				bus.$emit('select-category', {
					first: this.first,
					second: this.second,
					third: this.third
				});
			}
		},
		components: {
		}
	});
});
