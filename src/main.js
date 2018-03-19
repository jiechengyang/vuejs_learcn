// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


Vue.config.productionTip = false
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
  components: { App },
  template: '<App/>',
  data: testData,
  created(){
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a);  	
  },
  items: ['a', 'b', 'c'],
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
console.log('result:', vm.a == testData.a);
// 设置属性也会影响到原始数据
vm.a = 2
console.log('testData a is :', testData.a);
// ……反之亦然
testData.a = 3
vm.b = 'hi';
console.log('vm a is :', vm.a);
Vue.set(vm.userProfile, 'age', 27);
vm.$set(vm.userProfile, 'sex', '男');
console.log(vm.userProfile);
// // Vue.set
// Vue.set(vm.items, indexOfItem, newValue)
// // Array.prototype.splice
// vm.items.splice(indexOfItem, 1, newValue)
