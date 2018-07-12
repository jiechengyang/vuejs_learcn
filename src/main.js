// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import service from './plugins/service'
import Toast from '@/plugins/toast'

Vue.use(Toast, {
  defaultType: 'bottom',
  ms: 2500
})

Vue.use(service)

// 全局注册（在 `main .js` 文件中）
// 请访问FontAwesome 官网以查询可以使用的 name 值，如 beer、file、camera 等
Vue.component('icon', Icon)

Vue.config.productionTip = false
// 取消 Vue 所有的日志与警告--默认false
// Vue.config.silent = true;
// console.log('vue config', Vue.config);
var testData = {
	a: 1,
	foo: 'bar',
  userProfile: {
    name: 'Anika'
  },
  currentRoute: window.location.pathname,
}
/* eslint-disable no-new */
var vm = new Vue({	
  el: '#app',
  components: {App},
  template: '<App/>',
  data: testData,
  created(){
    // `this` 指向 vm 实例
  },
  items: ['a', 'b', 'c'],
})

console.log('当前实例化的Vue对象vm：', vm)
// 获得这个实例上的属性
// 返回源数据中对应的字段
// console.log('result:', vm.a == testData.a);
// 设置属性也会影响到原始数据
vm.a = 2
// console.log('testData a is :', testData.a);
// ……反之亦然
testData.a = 3
vm.b = 'hi';

// Vue.set
  // Vue.set(vm.userProfile, 'age', 27);
  // vm.$set(vm.userProfile, 'sex', '男');
  // Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
  // vm.items.splice(indexOfItem, 1, newValue)
