<template v-if="loginType === 'username'">
	<div id="where-display">
		<h2 v-if="ok">Yes</h2>
		<h2 v-else>No</h2>
		<div v-if="Math.random() > 0.5">
		  Now you see me
		</div>
		<!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别 -->
		<div v-else>
		  Now you don't
		</div>
		<hr>
		<div v-if="type === 'A'">正确答案是A</div>
		<div v-else-if="type === 'B'">正确答案是B</div>
		<div v-else-if="type === 'C'">正确答案是C</div>
		<div v-else>A/B/C都不是正确答案</div>
		<hr>
		<!-- 用 key 管理可复用的元素 -->
		<hr>
		<p v-show="yes">v-show:注意，v-show 不支持 template 元素，也不支持 v-else</p>
	</div>
</template>
<!-- <template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">	
</template> -->
<script>
	export default {
		data () {
			return {
				ok: false,
				type: 'D',
				loginType: 'username',
				yes: true,
			}
		}
	}
</script>