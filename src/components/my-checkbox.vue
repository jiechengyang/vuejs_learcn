<template>
	<div>
		<h1>{{value}}</h1>
		<div>
			<input type="text"  readonly="readonly" v-model="val" class="form-control" size="5">
			<button @click="plus" class="btn btn-default btn-sm">+</button>
			<button @click="minu" class="btn btn-default btn-sm">-</button>			
		</div>

	</div>
</template>
<script>
	export default {
		data () {
			return {
				val: this.value,
			}
		},
		props: {
			value: Number,
		},
		methods: {
			plus: function() {
				this.$emit('input', ++this.val) //触发 input 事件，并传入新值
			},
			minu: function() {

				this.$emit('input', this.val > 0 ? --this.val : 0) //触发 input 事件，并传入新值
			}
		}
	}
</script>