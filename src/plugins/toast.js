/**
 * [说明]
 * @file: toast.js
 * @description: 简易的消息提示框
 * @modify: https://github.com/lin-xin/vue-toast
 * @author: JCY
 */

'use strict'

var Toast = {}

// 避免重复 install，设立 flag
Toast.installed = false;
Toast.show = false;
Toast.vm = null;

Toast.install = function(Vue, options) {
	if ( Toast.installed ) {
		return;
	}

	let opts = {
		defaultType: 'bottom',
		ms: 1000
	}

	for ( var p in options) {
		opts[p] = options[p]
	}

	let toast = function(tips, type) {
		type = type || opts.defaultType
		var template = '<div v-show="show"  class="vue-toast" :class="type">{{ tips }}</div>'
		if (Toast.show) {
			return;
		}

/*		let toastTpl = Vue.extend({
			template: '<div class="vue-toast toast-' + type + '">' + tips + '</div>'
		})

		// 挂载toast实例到根 DOM 元素后
		let tpl = new toastTpl().$mount().$el*/
		if ( !Toast.vm ) {
			let toastTpl = Vue.extend({
				data () {
					return {
						show: Toast.show,
						tips: tips,
						type: 'toast-' + type
					}
				},
				template: template
			})

			Toast.vm = new toastTpl()
			var tpl =  Toast.vm.$mount().$el
			document.body.appendChild(tpl)
		}
		Toast.vm.type = 'toast-' + type;
		Toast.vm.show = Toast.show = true
		setTimeout(() => {
		  Toast.vm.show = Toast.show = false
		}, opts.ms)
/*		document.body.appendChild(tpl)
		setTimeout(() => {
		  document.body.removeChild(tpl)
		}, opts.ms)*/
	}

	Vue.prototype.$toast = toast

	var posArr = ['top', 'right', 'bottom', 'left', 'center']
	posArr.forEach(function(type) {
	  	Vue.prototype.$toast[type] = function(tips) {
	  		return toast(tips, type)
	  	}
	})

	Toast.installed = true;
}

// Vue 是全局变量时，自动调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Toast)
}

export default Toast
