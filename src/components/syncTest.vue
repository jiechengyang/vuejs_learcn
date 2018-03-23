<template>
	<div @click="increment">
		<button type="button" class="btn btn-default">点我+1</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				copyFoo: this.foo
			}
		},
		props: ['foo'],
		methods: {
			increment: function() {
				// console.log(this.foo);return;
				this.foo += 1;
				this.copyFoo = this.foo;
				this.$emit('update:foo', this.copyFoo)
			}
		}
	}
</script>