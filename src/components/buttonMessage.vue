<template>
	<div>
		<input type="text" v-model="message" />
		<button v-on:click="handleSendMessage">发送</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				message : 'Test Message',
			}
		},
		methods: {
			handleSendMessage: function() {
				this.$emit('message', {message: this.message});
			}
		}
	}
</script>