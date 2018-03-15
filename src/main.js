// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
var testData = {
	a: 1,
	foo: 'bar',
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
  }
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
