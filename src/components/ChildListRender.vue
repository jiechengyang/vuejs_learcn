<template>
	<div id="todo-list-example">
	  <p class="text-danger">一个组件的 v-for</p>
	  <ul>
	    <li v-for = "item in items">{{ item.message }}</li>
	  </ul>
	  <div class="line"></div>
	  <h3 class="text-danger">下面是一个简单的 todo list 的完整例子：</h3>
	  <todos :todos="todos"></todos>
	</div>	
</template>
<style type="text/css">
	.line {
		width: 100%;
		height: 1px;
		background-color: #eee;
	}
</style>
<script>
	import todos from '../components/todos'

	export default {
		data() {
			return {
				todos: [
				  {
				    id: 1,
				    title: 'Do the dishes',
				  },
				  {
				    id: 2,
				    title: 'Take out the trash',
				  },
				  {
				    id: 3,
				    title: 'Mow the lawn'
				  }
				],
			}
		},
		props: ['items'],
		components: {
			todos
		}		
	}
</script>