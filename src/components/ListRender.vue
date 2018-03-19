<template>
	<div id="list-render">
		<h2>用 v-for 把一个数组对应为一组元素</h2>
		<!-- 我们用 v-for 指令根据一组数组的选项列表进行渲染。v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名 -->
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<td>Larry</td>
					<td>the Bird</td>
					<td>@twitter</td>
				</tr>
				<tr v-for="da in tableDatas" v-bind:key="da.id" v-bind:title="da.id">
					<td>{{ da.fName }}</td>
					<td>{{ da.lName }}</td>
					<td>{{ da.uName }}</td>
				</tr>
			</tbody>
		</table>
		<!-- 你也可以用 of 替代 in 作为分隔符，因为它是最接近 JavaScript 迭代器的语法： -->
		<ul id="example-2" class="nav navbar nav-divider" v-if="items.length">
		  <li v-for="(item, index) in items">
		    {{ parentMessage }} - {{ index }} - {{ item.message }}
		  </li>
		</ul>
		<ul id="v-for-object" class="demo">
		  <li v-for="(value, key, index) in object">
		    {{ index+1 }} ---- {{ key }} ---- {{ value }}
		  </li>
		</ul>
		<hr>
		<p class="text-warning">显示过滤/排序结果</p>
		<ul class="list-group list-unstyled ">
			<li v-for="n in evenNumbers">{{ n }}</li>
			<li class="divider nav-divider"><hr></li>
			<li v-for="n2 in (1, 5)">{{ n2 }} </li>
		</ul>
		<hr>
		<!-- v-for on a <template>

		类似于 v-if，你也可以利用带有 v-for 的 <template> 渲染多个元素。比如：
		<ul>
		  <template v-for="item in items">
		    <li>{{ item.msg }}</li>
		    <li class="divider"></li>
		  </template>
		</ul> -->
		<ChildListRender :items="items"></ChildListRender>		
	</div>
</template>
<script>
	import ChildListRender from '../components/ChildListRender'

	export default {
		data () {
			return {
				parentMessage: 'Parent',
			    items: [
			      { message: 'Foo' },
			      { message: 'Bar' }
			    ],
				tableDatas: [
			        {id: 1, fName: 'Learn JavaScript', lName: '2222', uName: '222ddd2'},
			        {id: 2, fName: 'weqweq', lName: 'ggad', uName: 'awe'},
			        {id: 3, fName: '杨大双', lName: '杨捷成', uName: '结合才能养'},
				],
			    object: {
			      firstName: 'John',
			      lastName: 'Doe',
			      age: 30
			    },
			    numbers: [ 1, 2, 3, 4, 5 ]
			}
		},
		computed: {
			evenNumbers() {
				return this.numbers.filter((number) => {
					return number % 2 === 0;
				})
			}
		},
		components: {
			ChildListRender,
		}
	}
</script>