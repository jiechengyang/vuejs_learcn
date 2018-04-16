<template>
    <appLayout>
    	<h1 slot="header">这是一个页面的标题</h1>
    	<p>主要内容的一个段落</p>
    	<p>主要内容的另外一个段落</p>
    	<p slot="footer">这是一些页脚信息</p>        
    </appLayout>
</template>
<script>
	import appLayout from './appLayout'

	export default {
		data() {
			return {

			}
		},
		components: {
			appLayout
		}
	}
</script>