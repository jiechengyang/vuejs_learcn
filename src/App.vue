<template>
  <div id="app">
    <h1>{{ company }}</h1>
    <img src="./assets/logo.png">
    <!-- 组件来构建大型应用 -->
    <HelloWorld/>
    <!-- 条件判断 -->
    <span>
      <strong v-if="seen"  v-bind:style="text_red">Now you see me</strong>
    </span>
    <!-- 循环语句 -->
    <div style="padding-top:20px">
        <ol>
            <li v-for="todo in todos">{{ todo.text }}</li>
        </ol>
    </div>
    <!-- 处理用户输入 -->
    <div>
       <textarea readonly="readonly" cols="40" rows="10">{{ userMessage }}</textarea>
       <button type="button" v-on:click="reverseMessage">reverseMessage</button>
    </div>
    <!-- 表单输入和应用状态中做双向数据绑定 -->
    <div>
        <input v-model="message_two">
    </div>
    <!-- 组件应用之子父调用 -->
    <child :message="groceryLists"></child>
  </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import child from './components/TodoItem'

export default {
  name: 'App',
  data () {
    return {
      company: '街城阳',
      seen: true,
      text_red: 'color:red',
      todos: [
        {text: 'Learn JavaScript'},
        {text: 'Learn NodeJs'},
        {text: 'Learn VueJs'},
        {text: 'Bulid something awesome'}
      ],
      userMessage: 'Hello VueJs wo shi ni die die',
      message_two: '爱神的箭阿斯加德静安寺',
      groceryLists: [
        { text: 'Vegetables' },
        { text: 'Cheese' },
        { text: 'Whatever else humans are supposed to eat' },
        { text: 'ssssssssssssss' }
      ]
    }
  },
  components: {
    HelloWorld,
    child
  },
  methods: {
    reverseMessage() {
      // this.a.data();
      // console.log(this.userMessage);return;
      this.userMessage = this.userMessage.split('').reverse().join('');
      return true;
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
