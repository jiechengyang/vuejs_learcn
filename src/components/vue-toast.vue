<template>
	<div id="VueToast">
		<div class="panel">
			<div class="panel-heading">
				toast消息提示框示例效果
			</div>
			<div class="panel-body">
		        <button @click="openToast('top')" class="btn btn-default btn-lg">上</button>
		        <button @click="openToast('right')" class="btn btn-default btn-lg">右</button>
		        <button @click="openToast()" class="btn btn-default btn-lg">下</button>
		        <button @click="openToast('left')" class="btn btn-default btn-lg">左</button>
		        <button @click="openToast('center')" class="btn btn-default btn-lg">中间</button>				
			</div>
		</div>	
	</div>
</template>

<script type="text/javascript">
	'use strict'
	import '@/assets/css/toast.css'

	export default {
		name: 'vue-toast',
		data () {
			return {

			}
		},
		methods: {
			openToast: function(type) {
				this.$toast('测试内容', type);
				// this.$toast[type]()
			}
		}
	}
</script>
