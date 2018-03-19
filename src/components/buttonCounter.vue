<template>
	<button v-on:click="incrementCounter" class="btn btn-info">{{ counter }}</button>
</template>
<script>
	export default {
		data() {
			return {
				counter: 0,
			}
		},
		methods: {
			incrementCounter: function() {
				this.counter += 1;
				this.$emit('increment');
			}
		}
	}
</script>