 <template>
	<div>
		<input type="text" v-model="message"  class="form-control"/>
		<!-- spin -->
		<button v-on:click="handleSendMessage" class="btn btn-default"><icon name="send" scale="1" ></icon> 发送</button>
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