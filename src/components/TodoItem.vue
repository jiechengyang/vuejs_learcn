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
        /*
            在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
        */
        created () {
        	this.newMessage = this.message;
        	// console.log(this.newMessage);
        },
	    // computed: {
	    //     newMessage(){
	    //         return this.message.split({text: '这是计算属性（在计算属性中对 prop 进行处理）'});
	    //     }
	    // }
    }
</script>
