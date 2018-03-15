<template>
  <div >
    <ol>
      <li v-for="groceryList in message">{{ groceryList.text }}</li>
    </ol>
	</div>
</template>
<script>
    export default {
    	name: 'child',
    	data () {
    		return {
    			newMessage: null,
    		}
    	},
        // 在 props 中声明获取父组件的数据通过 message 传过来
        props: ['message'],
        created () {
        	this.newMessage = this.message;
        	console.log(this.newMessage);
        },
	    // computed: {
	    //     newMessage(){
	    //         return this.message.split({text: '这是计算属性（在计算属性中对 prop 进行处理）'});
	    //     }
	    // }
    }
</script>
