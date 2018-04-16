<template>
	<div class="panel panel-default">
	        <div class="panel-heading">
	            <h5 class="panel-title">作用域插槽</h5>
	        </div>
	        <div class="panel-body">
	            <ul class="post-list">
					<slot name="child-ul" v-for="item in animal" v-bind:text="item.name"></slot>
	            </ul>
	        </div>
	    </div>	
</template>
<script>
	export default {
		data() {
			return {
				animal:[
				 {name:'大象'},
				 {name:'小狗'},
				 {name:'小猫'},
				 {name:'老虎'}
				]				
			}
		}
	}
</script>