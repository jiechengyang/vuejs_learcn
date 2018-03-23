<template>
	<!-- https://www.cnblogs.com/XmanLin/p/7667670.html -->
	<div>
		<h1>我是父组件的标题</h1>
		<childOneCom>
			<p>这是一些初始内容</p>
			<p>这是另外一些初始内容</p>
		</childOneCom>
	</div>
</template>
<script>
	import childOneCom from './childOneCom' // 单个插槽--子组件
	
	export default {
		components : {
			childOneCom,
		}
	}
</script>
