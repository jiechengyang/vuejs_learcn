<template>
    <div>
      <label v-if="label">{{ label }}</label>
      $
      <input
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        v-on:focus="selectAll"
        v-on:blur="formatValue"
      >
    </div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		props: {
			value: {
				type: String,
				default: 0,
			},
			label: {
				type: String,
				default: '',
			}
		},
		mounted: function() {
			this.formatValue()
		},
		methods: {
			updateValue (value) {
				this.$emit('input', value);
			},
			formatValue: function () {
			    this.$refs.input.value = this.value;
			},
			selectAll: function(event) {
				setTimeout(function() {
					event.target.select()
				}, 0)
			}
		}
	}
</script>