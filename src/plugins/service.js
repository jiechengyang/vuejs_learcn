/**
 * [说明]
 * @file: service.js
 * @flow: 【声明插件】——【写插件】——【注册插件】——【使用插件】
 * @author: JCY
 */

export default {

	/**
	 * [install description]
	 * @param  {[object]} Vue     [Vue的实例]
	 * @param  {[object]} options [一些设置选项]
	 * @return {[type]}         [description]
	 */
	install: function(Vue, options) {
		// 将添加的内容写在该函数内

		// 1. 添加全局方法或属性
		Vue.testAlert = function() {
			alert('测试的弹框！')
		}

		Vue.prototype.NOTICE = false;

		// 2. 添加全局资源

		Vue.filter('formatTime', function(val, fmt) {
			/**
			 * [byFormat 时间格式化过滤器，输入内容是number或者Date对象，输出是YYYY-MM-DD HH-MM-SS]
			 * @param  {[type]} fmt [description]
			 * @notes  RegExp.$n:正则表达式的子表达式匹配 n:[1-9] 子表达式? 刑如(正则式子)这样的为子表达式
			 *         例: pattern:/^X(\d+)Y(\d+)Z(\d+)$/ str:X98Y87Z65 
			 *         解: 里面有三个字表达式 第一个(\d+)匹配$1 第二个(\d+)匹配$2 第三个(\d+)匹配$3
			 *         答: RegExp.$1对应98 RegExp.$2对应87 RegExp.$3对应65
			 * @return {[string]}     [格式化后的字符串]
			 */
			Date.prototype.byFormat = function(fmt) {
				let o = {
					'M+': this.getMonth() + 1 , //'月'
					'd+': this.getDate(), //日
					'h+': this.getHours(), //时
					'm+': this.getMinutes(), //分
					's+': this.getSeconds(), //'秒'
					'q+': Math.floor( ( this.getMonth() + 3 ) / 3 ), //季度
					'S': this.getMilliseconds() //毫秒
				}

				if ( /(y+)/.test(fmt) ) {
					fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
				}

				for (var k in o) {
					if ( new RegExp('(' + k + ')').test(fmt) ) {
						fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00') + o[k]).substr(('' + o[k]).length))
					}
				}

				return fmt
			}

			fmt = fmt ||'yyyy-MM-dd hh:mm:ss'

			return new Date(val).byFormat(fmt)
		})
		// 3. 注入组件
		Vue.mixin({
			// 这里的代码会在每个组件（包括根组件）的created执行之前执行
			created: function() {
				if ( this.NOTICE )
				console.log('组件开始加载')
			},
			methods: {
				tPlugFunc: function() {
					console.log('minin methods text')					
				}
			}
		})

		// 4. 添加实例方法
		Vue.prototype.numbereeeeee = 1;

		Vue.prototype.doubleNumber = function(val, multiple) {
			multiple = multiple || 2
			if ( typeof(val) == 'number' ) {
				return val * multiple
			} else if ( !isNaN(Number(val)) ) {
				return Number(val) * multiple
			} else {
				return null
			}
		}

		// 服务组，将实例方法整合到$service中，避免命名冲突

		//手机号码合法性检查
		Vue.prototype.$service = {
			phoneNumberCheck: function(phone){
				var pattern = /^1[0-9]{10}$/

				return pattern.test(phone);
			},
			phoneFromat: function(phone) {
				// var arr = phone.split('');
				return phone.substr(0, 3) + '****' + phone.substr(-2);
			}
		}
	}
}