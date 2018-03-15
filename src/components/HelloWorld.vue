<template>
<!-- Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。
通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定： -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-once>这个将不会改变: {{ msg }}</span>
    <pre>{{ description }} </pre>
    <!-- #原生HTML -->
    <p>Using mustaches {{ rawHtml }}</p>
    <p>Using v-html directive:<span v-html="rawHtml"></span></p>
    <!-- #特性:v-bind -->
    <div v-bind:id="'div_' + dynamicId">动态绑定id</div>
    <button type="button" v-bind:disabled="isButtonDisabled">按钮的禁用</button>
    <hr/>
    <!-- javascript -->
    javascript计算：<span style="color:green">{{ number+1 }}</span><br/>
    三元表达式 :{{ ok ? 'Yes' : 'No' }}<br/>
    函数的使用 : {{ description.split(',').reverse().join(',') }}
    <!-- 参数的动态设置 -->
    <hr/>
    a标记动态绑定URL:<a v-bind:href="url" v-bind:title="title" v-bind:target="target">{{ title }}</a>
    <hr />
    <!-- 修饰符 
        修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
    -->
    <!-- 去掉修饰符.prevent就能提交 -->
    <form v-on:submit.prevent="onSubmit">
      <input type="submit" name="提交">
    </form>
    <hr/>
    <h3>以上的都是全写，下面的缩写</h3>
    <hr/>
    <!-- 缩写 
      v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的特性。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，v- 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue.js 管理所有模板的单页面应用程序 (SPA - single page application) 时，v- 前缀也变得没那么重要了。因此，Vue.js 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：     
    -->
    v-bind缩写:<a :href="url" target="_blank" >{{ title }}</a><br/>
    v-on 缩写: <button type="button" @click="doSomething">Click me</button>
    <hr/>
    <!-- 计算属性 -->
    <p>Original message: "{{ msg }}"</p>
    <p >Computed reversed message: "{{ reversedMessage }}"</p>
    <!-- 计算属性缓存 vs 方法 -->
    <p>计算属性缓存 vs 方法："{{ reversedMessage2() }}"</p>
    <p>当前的事件:{{ now }}</p>
    <!-- 计算属性的 setter -->
    <p>计算属性的 setter: {{ fullName }}</p>
    <hr/>
    <!-- 侦听器 -->
    <h3>侦听器</h3>
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p v-html="answer"></p>    
    <hr>
    <!-- 绑定 HTML Class -->
    <div v-bind:class="{ active: isActive }">绑定 HTML Class</div>
    <div class="static"
         v-bind:class="{ active: isActive, 'text-danger': hasError }">
    </div>
    <div v-bind:class="classObject">classObject</div>
    <!-- 数组语法 -->
    <div v-bind:class="[activeClass, errorClass]">数组语法</div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">三元表达式</div>
    <hr>
    </div>
</template>
<script>
import utils from '../js/utils'
var _ = require('lodash');
var axios = require('axios');
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢 迎 来 到 我 的 vue demo',
      description: '初次见面,多多指教',
      rawHtml: '<span style="color:red">The should be red.</span>',
      dynamicId: 'dynamicId_' + parseInt(Math.random()*10),
      isButtonDisabled: true, /*如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 <button> 元素中*/
      number: 1,
      ok: 1,
      url: 'http://114.115.142.133',
      target: '_blank',
      title: 'jcycms',
      onSubmit: function() {
        alert(222);
      },
      doSomething: function(event) {
        var event = window.event || event;
        console.log(event);
        alert('谢谢');
      },
      firstName: '张三',
      lastName: '李四',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      isActive: true,
      hasError: true,
      error: false,
      activeClass: 'active',
      errorClass: 'text-danger',
    }
  },
  computed: {  
    // 计算属性的 getter  
    reversedMessage() {  
      // `this` 指向 vm 实例  
      return this.msg.split('').reverse().join('')  
    },
    now: function() {
      return utils.formatDate(new Date(), 'yyyy-MM-dd hh : mm');
    },
    fullName: {
     get: function() {
        return this.firstName + ' ' + this.lastName;  
     },
     set(newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];

     }      
    },
    classObject: function() {
        return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
    }
  }, 
  methods: {
    reversedMessage2() {
      return this.msg.split('').reverse().join('')  
    },
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        // if (this.question.indexOf('?') === -1) {
        //   this.answer = 'Questions usually contain a question mark. ;-)'
        //   return
        // }

        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api?answer=' + vm.question)
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer) + '<img src=\''+ response.data.image +'\'/>'
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为判定用户停止输入等待的毫秒数
      500
    )
  },
  watch: {
    question(newQuestion, oldQuestion) {
        this.answer = 'Waiting for you stop typing ...';
        this.getAnswer();
    }
  }
}
/*注意:
  fun() {

  }
  ==
  fun:function(){

  }*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  color:#f69
}
</style>
