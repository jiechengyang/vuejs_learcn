<template>
    <div class="row">
    <p>动物列表</p>
    <childThreeCom>
       <template slot-scope="props" slot="child-ul">
           <li class="child-ul">{{ props.text }}</li>
       </template>
    </childThreeCom>
    </div>
</template>
<script>
    //父组件
    // 在父组件的模板里，使用一个Vue自带的特殊组件<template> ，
    // 并在该组件上使用scope属性，值是一个临时的变量，存着的是由子组件传过来的
    // prop对象，在下面的例子中我把他命名为props。
    //  获得由子传过来的prop对象。这时候，父组件就可以访问子组件在自定义属性上暴露的数据了。
	import childThreeCom from './childThreeCom'
	export default {
		data() {
			return {

			}
		},
		components: {
			childThreeCom
		}
	}
</script>