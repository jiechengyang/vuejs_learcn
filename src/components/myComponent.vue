<template>
	<div>
<!--
	绑定内联样式 		
		v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名 
	自动添加前缀
		当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀
-->
		<h1 style="margin-left: -5%;z-index:1000" v-bind:style="{ position: absolute, top: topSize, left: leftSize}">自定义的组件</h1>
		<div  class="zhezhao"></div>
		<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">多重值</div>
	</div>
</template>
<style>
	.zhezhao {
		top:0px;
		left: 0px;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		background-color: #000;
		position: fixed;
		z-index: 999;
	}
</style>
<script>
    export default {
    	name: 'MyComponent',
    	data() {
    		return {
    			absolute: 'fixed',
    			zIndex: 1000,
    			topSize: '50%',
    			leftSize: '50%',
    		}
    	}
    }
</script>