<template>
	<div id="todo-list-example">
	  <input
	    v-model="newTodoText"
	    v-on:keyup.enter="addNewTodo"
	    placeholder="添加一个菜单(请输入菜单名称后回车即可完成)"
	    class = "form-control"
	  >
	  <ul class="navbar-nav">
	    <li
	      v-for="(todo, index) in todos"
	      v-bind:title="todo.title"
	    >{{ todo.title }}  <button class="btn btn-danger btn-sm" @click="removeThis(index)">x</button></li>
	  </ul>
	</div>	
</template>
<script>
	export default {
		data() {
			return {
				newTodoText: '',
				nextTodoId: this.todos.length,
			}
		},
		props: ['todos'],
		methods: {
			addNewTodo: function () {
			  this.todos.push({
			    id: this.nextTodoId++,
			    title: this.newTodoText
			  })
			  this.newTodoText = ''
			},
			removeThis: function (index) {
				// console.log(index);return;
				this.todos.splice(index, 1);
			}
		},

	}
</script>