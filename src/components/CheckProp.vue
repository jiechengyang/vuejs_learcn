<template>
	<div>
		<p>{{ propA }}</p>
		<p>{{ propB }}</p>
		<p>{{ propC }}</p>
		<p>{{ propD }}</p>
		<p>{{ propE }}</p>
		<p>{{ propF }}</p>
	</div>	
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			// 基础类型检测 (`null` 指允许任何类型)
			propA: Number,
			// // 可能是多种类型
			propB: [String, Number],
			// // 必传且是字符串
			propC: {
			  type: String,
			  required: true
			},
			// // 数值且有默认值
			propD: {
			  type: Number,
			  default: 100
			},
			// // 数组/对象的默认值应当由一个工厂函数返回
			propE: {
			  type: Object,
			  default: function () {
			    return { message: 'hello' }
			  }
			},
			// // 自定义验证函数
			propF: {
			  validator: function (value) {
			  	console.log('propF：%d', value);
			    return value > 10
			  }
			}
		},
	}
</script>