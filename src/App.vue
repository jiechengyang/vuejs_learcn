<template>
  <div id="app" class="container content-wrapper">
    <!-- <div class="row"> -->
        <div class="navbar-top">
          <ul class="nav nav-tabs  navbar-navnav-menu">
            <li role="presentation" class="active"><a href="#jiaocheng1" data-toggle="tab">模板语法~事件处理</a></li>
            <li role="presentation"><a href="#jiaocheng2" data-toggle="tab">表单输入绑定~组件</a></li>
            <li role="presentation"><a href="#jiaocheng3" data-toggle="tab">过渡 & 动画~可复用性 & 组合</a></li>
            <li role="presentation"><a href="#jiaocheng4" data-toggle="tab">规模化(路由/状态管理/服务端渲染)~内在(深入响应式原理)</a></li>
          </ul>
        </div>
        <div  class="tab-content">
            <div class="jiaocheng1  tab-pane fade in active" id="jiaocheng1">
              <div class="row">
                 <div class=" col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <h1>{{ company }}</h1>
                      <img src="./assets/logo.png">
                      <!-- 用在组件上 绑定css-->
                      <MyComponent v-bind:class="{ hide: isHide}"></MyComponent>
                      <!-- 组件来构建大型应用 -->
                      <HelloWorld/>
                      <h3 class="text-info">条件判断</h3>
                      <span>
                        <strong v-if="seen"  v-bind:style="text_red">Now you see me</strong>
                      </span>
                      <h3 class="text-info">循环语句</h3>
                      <div style="padding-top:20px">
                          <ol>
                              <li v-for="todo in todos">{{ todo.text }}</li>
                          </ol>
                      </div>
                    </div>
                    <div class=" col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <h3 class="text-info">处理用户输入</h3>
                        <div class="form-group">
                           <textarea readonly="readonly" cols="4" rows="3" class="form-control">{{ userMessage }}</textarea>
                           <button type="button" v-on:click="reverseMessage" class="btn btn-default btn-danger">reverseMessage</button>
                        </div>
                        <h3 class="text-info">表单输入和应用状态中做双向数据绑定</h3>
                        <div class="form-group">
                            <input v-model="message_two" class="form-control">
                        </div>
                        <h3 class="text-info">组件应用之子父调用</h3>
                        <child :message="groceryLists"></child>
                        <h3 class="text-info">条件渲染</h3>
                        <WhereDisplay></WhereDisplay>
                        <h3 class="text-info">列表渲染</h3>
                        <ListRender></ListRender>        
                    </div>                
              </div>
              <div class="clearfix"></div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <h3 class="text-info">事件处理-监听事件</h3>
                  <div>
                      <button class="btn btn-default" @click="counter +=1">Add One</button>
                      <p>The button above has been clicked {{ counter }} times.</p>
                  </div>
                  <h3 class="text-info">事件处理-事件处理方法</h3>
                  <div>
                    <!-- `greet` 是在下面定义的方法名 -->
                    <button v-on:click="greet">Greet</button>
                    <button v-on:click="warn('Form cannot be submitted yet.', $event)" class="btn btn-default">
                      有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入
                    </button>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <h3 class="text-info">事件处理-事件修饰符</h3>
                  <div>
                    <!-- 阻止单击事件继续传播 -->
                    <a v-on:click.stop="doThis">阻止单击事件继续传播</a>

                    <!-- 提交事件不再重载页面 -->
                    <form v-on:submit.prevent="onSubmit">提交事件不再重载页面</form>

                    <!-- 修饰符可以串联 -->
                    <a v-on:click.stop.prevent="doThat">修饰符可以串联</a>

                    <!-- 只有修饰符 -->
                    <form v-on:submit.prevent>只有修饰符</form>

                    <!-- 添加事件监听器时使用事件捕获模式 -->
                    <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
                    <div v-on:click.capture="doThis">添加事件监听器时使用事件捕获模式</div>

                    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
                    <!-- 即事件不是从内部元素触发的 -->
                    <div v-on:click.self="doThat">事件不是从内部元素触发的</div>
                    <!-- 点击事件将只会触发一次 -->
                    <a v-on:click.once="doThis">点击事件将只会触发一次</a>
                    <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
                    <!-- 而不会等待 `onScroll` 完成  -->
                    <!-- 这其中包含 `event.preventDefault()` 的情况 -->
                    <div v-on:scroll.passive="onScroll">滚动事件的默认行为</div>
                    <p class="text-warning">
                      使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
                    </p>
                  </div>
                  <h3 class="text-info">事件处理-按键修饰符</h3>
                  <div>
                    <input  v-model="keyword" v-on:keyup.13="submit" placeholder="回车提交"/>
                    <!-- 同上 -->
                    <!-- <input v-on:keyup.enter="submit"> -->
                    <!-- 缩写语法 -->
                    <!-- <input @keyup.enter="submit"> -->
                    <!-- 
                      .enter
                      .tab
                      .delete (捕获“删除”和“退格”键)
                      .esc
                      .space
                      .up
                      .down
                      .left
                      .right 
                    -->
                  </div>
                  <h3 class="text-info">事件处理-按键修饰符-.exact 修饰符</h3>
                  <div>
                    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
                    <button @click.ctrl="onClick"> Alt 或 Shift 被一同按下时也会触发</button>

                    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
                    <button @click.ctrl.exact="onCtrlClick">有且只有 Ctrl 被按下的时候才触发</button>

                    <!-- 没有任何系统修饰符被按下的时候才触发 -->
                    <button @click.exact="onClick">没有任何系统修饰符被按下的时候才触发</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="jiaocheng2 tab-pane fade" id="jiaocheng2">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <h3 class="text-info">文本(用 v-model 指令在表单 `input` 及 `textarea` 元素上创建双向数据绑定)</h3>
                  <div class="form-inline">
                    <input v-model="testname" placeholder="修改我" class="form-control" style="">
                    <span>TestName is: {{ testname }}</span>
                  </div>
                  <div class="form-inline">
                      <label>Multiline message is:</label>
                      <textarea v-model="testname" placeholder="add multiple lines"  class="form-control" ></textarea>
                  </div>
                  <h3 class="text-info">复选框/单选框/下拉框</h3>
                  <div class="form-inline">
                    <h5>单个复选框，绑定到布尔值</h5>
                    <input type="checkbox" id="checkbox_Test" v-model="checked" class="form-control">
                    <label for="checkbox">{{ checked }}</label>
                  </div>
                  <div class="form-inline">
                    <h5>多个复选框，绑定到同一个数组：</h5>
                    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                    <label for="jack">Jack</label>
                    <input type="checkbox" id="john" value="John" v-model="checkedNames">
                    <label for="john">John</label>
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                    <label for="mike">Mike</label>    
                    <span class="text-primary">Checked names: {{ checkedNames }}</span>                
                  </div>
                  <div class="form-inline">
                    <h5>单选按钮</h5>
                    <input type="radio" id="one" value="One" v-model="picked">
                    <label for="one">One</label>
                    <br>
                    <input type="radio" id="two" value="Two" v-model="picked">
                    <label for="two">Two</label>
                    <br>
                    <span>Picked: {{ picked }}</span>
                  </div>
                  <div class="form-inline">
                    <h5>选择框</h5>
                    <select v-model="selected" class="form-control">
                      <option disabled value="">请选择</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                    <span>Selected: {{ selected }}</span>
                  </div>
                  <div class="form-inline">
                    <h5>多选时 (绑定到一个数组)：</h5>
                    <select class="form-control" v-model="selecteds" multiple>
                      <option>A-a</option>
                      <option>B-b</option>
                      <option>C-c</option>
                    </select>
                    <br>
                    <span>Selected: {{ selecteds }}</span>
                  </div>
                  <div class="form-inline">
                    <h5>用 v-for 渲染的动态选项</h5>
                    <select v-model="selected_dynmc" class="form-control">
                      <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                    <span>Selected: {{ selected_dynmc }}</span>
                  </div>
                  <h3 class="text-info">值绑定</h3>
                  <div class="form-inline">
                    <!-- 当选中时，`picked` 为字符串 "a" -->
                    <input type="radio" v-model="picked" value="a" class="form-control">当选中时，`picked` 为字符串 "a"

                    <!-- `toggle` 为 true 或 false -->
                    <input type="checkbox" v-model="toggle" class="form-control">`toggle` 为 true 或 false

                    <!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
                    当选中第一个选项时，`selected` 为字符串 "abc" 
                    <select v-model="selected" class="form-control">
                      <option value="abc">ABC</option>
                    </select>
                  </div>
                  <div class="form-inline">
                    <h3>值绑定-复选框</h3>
                    <input type="checkbox" v-model="yeswif" true-value="yes" false-value="no"/>
                  </div>
                  <h3 class="text-info">修饰符</h3>
                  <div class="form-inline">
                    <h5>.lazy(在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步)</h5>
                    <input v-model.lazy="msg"  class="form-control">
                    <h5>.number(想自动将用户的输入值转为数值类型)</h5>
                    <input v-model.number="age" type="number" class="form-control">
                    <h5>.trim(要自动过滤用户输入的首尾空白字符)</h5>
                    <input v-model.trim="msg">
                  </div>
                  <!-- 组件：prop 向下传递，事件向上传递 -->
                  <h3 class="text-info">组件(prop 向下传递，事件向上传递)</h3>
                  <div class="form-inline">
                    <h5>Prop 验证</h5>
                    <!-- 
                      字面量语法 vs 动态语法
                      传递真正的数值  <child v-bind:some-prop="1"></child>
                    -->
                    <hr>
                    <div class="form-group">
                      <CheckProps 
                        :propA="100" 
                        :propB="'eeeeeeeeeeeeeeee'"
                        :propC="'你好啊'"
                        :propD="101"
                        :propE="{a:'a'}"
                        :propF="123"
                      >
                      </CheckProps>                      
                    </div>  
                  </div>
                  <div class="form-inline">
                    <h5>非Prop属性</h5>
                    <bs_date_input data-3d-date-picker="true" class="date-picker-theme-dark"></bs_date_input>
                  </div>
                </div>
                <!-- 接上-自定义事件 -->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <h3 class="text-info">自定义事件</h3>
                  <pre class="text-warning">
                    我们知道，父组件使用 prop 传递数据给子组件。但子组件怎么跟父组件通信呢？这个时候 Vue 的自定义事件系统就派得上用场了。
                  </pre>
                  <div class="form-inline">
                    <div id="counter-event-example">
                      <p>{{ total }}</p>
                      <buttonCounter v-on:increment="incrementTotal"></buttonCounter>
                      <buttonCounter v-on:increment="incrementTotal"></buttonCounter>
                    </div>
                  </div>
                  <div id="message-event-example" class="demo form-inline">
                    <p v-for="msgd in msgData">{{ msgd }}</p>
                    <p><buttonMessage v-on:message="handleMessage"></buttonMessage></p>
                  </div>
                  <!-- 给组件绑定原生事件 -->
                  <div class="form-inline">
                    <bindProtoEvent @click.native="doTheThing" class="my_cursor"></bindProtoEvent>
                  </div>
                  <div class="form-inline">
                    <!-- sync 修饰符 -->
                    <syncTest :foo.sync="bar"></syncTest>
                    <span>{{ bar }}</span>
                    <!-- <syncTest :foo="bar" @update:foo="val => bar = val"></syncTest> -->                    
                  </div>
                  <!-- 使用自定义事件的表单输入组件 -->
                  <div class="form-inline">
                      <h4>使用自定义事件的表单输入组件</h4>
                      <currencyInput label="Price" v-model="price"></currencyInput>
                      <currencyInput label="Shipping" v-model="shipping"></currencyInput>
                      <currencyInput label="Handling" v-model="handling"></currencyInput>
                      <currencyInput label="Discount"  v-model="discount"></currencyInput>
                      <p>CountMoney: ${{ countMoney }}</p>
                  </div>
                  <div class="form-inline">
                      <h4>自定义组件的 v-model</h4>
                      <myCheckbox v-model="foo"></myCheckbox>
                  </div>
                  <h3 class="text-info">使用插槽分发内容</h3>
                  <textarea readonly="readonly" class="form-control" cols="4" rows="10">
  自己这段时间在自学vue.js，发现关于插槽这方面，官方文档中，没有详细的讲解使用方法与示例，我自己试着来总结了一下。然后根据官方文档写了几个使用插槽的例子。每个例子都要引入vue.js。示例中上面为HTML代码，下面为JavaScript代码。
  最初在 "slot" 标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容
                  </textarea>  
                  <div class="form-inline">
                      <h4>一、单个插槽</h4>
                      <myOneParentCom></myOneParentCom>
                      <h4>二、具名插槽</h4>
                      <myTwoParentCom></myTwoParentCom>
                      <h4>三、作用域插槽</h4>
                      <myThreeParentCom></myThreeParentCom>
                  </div>
                  <div class="form-inline">
                      <h4>异步组件</h4>
                      <!-- 点击按钮后，show为真,先获取child组件，再渲染div内容 -->
                      <input type="button"  @click="showchild" value="显示/隐藏" class="btn btn-default">
                      <div id="contain" v-if="show">
                          <asyncChild></asyncChild>
                      </div>
                  </div>
                  <div class="form-inline">
                      <h4>组件间的循环引用示例</h4>
                      <ul class="post-list">
                        <li v-for="folder in folders">
                          <tree-folder :folder="folder"></tree-folder>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="jiaocheng3 tab-pane fade" id="jiaocheng3">
              <div class="row">
                <h3 class="text-info">单元素/组件的过渡</h3>
                <div class="form-inline">
                    <button type="button" class="btn btn-default btn-danger" @click="show = !show">Toggle</button>
                    <transition name="fade">
                      <p v-if="show">hello</p>
                    </transition>
                </div>
                <h3 class="text-info">CSS过渡</h3>
                <div class="form-inline">
                    <button type="button" @click="show = !show"></button>
                </div>
              </div>
            </div>
            <div class="jiaocheng3 tab-pane fade" id="jiaocheng4">jiaocheng4</div>
        </div>
    <!-- </div> -->
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld'
import child from './components/TodoItem'
import MyComponent from './components/myComponent' 
import WhereDisplay from './components/WhereDisplay'
import ListRender from './components/ListRender'
import CheckProps from './components/CheckProp'
import bs_date_input from './components/bs_date_input'
import buttonCounter from './components/buttonCounter'
import buttonMessage from './components/buttonMessage'
import bindProtoEvent from './components/bindProtoEvent'
import syncTest from './components/syncTest'
import currencyInput from './components/currencyInput'
import utils from './js/utils'
import myCheckbox from './components/my-checkbox'
import myOneParentCom from './components/myOneParentCom' // 单个插槽--父组件
import myTwoParentCom from './components/myTwoParentCom' // 具名插槽--父组件
import myThreeParentCom from './components/myThreeParentCom' //作用域插槽--父组件
import TreeFolder from './components/tree-folder'

export default {
  name: 'App',
  data () {
    return {
      company: '街城阳',
      keyword: '',
      testname: '',
      checked: true,
      seen: true,
      text_red: 'color:red',
      todos: [
        {text: 'Learn JavaScript'},
        {text: 'Learn NodeJs'},
        {text: 'Learn VueJs'},
        {text: 'Bulid something awesome'}
      ],
      userMessage: 'Hello VueJs wo shi ni die die',
      message_two: '爱神的箭阿斯加德静安寺',
      groceryLists: [
        { text: 'Vegetables' },
        { text: 'Cheese' },
        { text: 'Whatever else humans are supposed to eat' },
        { text: 'ssssssssssssss' }
      ],
      isHide:true,
      counter: 0,
      checkedNames: [],
      picked: '',
      selected: '',
      selecteds: [],
      selected_dynmc: '',
      options: [
        {text: '请选择', value: ''},
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'},
        {text: 'Four', value: 'D'},
      ],
      toggle: true,
      yeswif: 'yes',
      msg: 'Ykdaskdkaskdjksad',
      age: null,
      total: 0,
      msgData: [],
      bar: 0,
      price: '0',
      shipping: '0',
      handling: '0',
      discount: '0',
      foo: 0,
      asyncMsg: '异步组件',
      show:false,
      folders: [
        {
          name: 'folder1',
          children: [{
            name: 'folder1 - folder1',
            children: [{
              name: 'folder1 - folder1 - folder1'
            }]
          }, {
            name: 'folder1 - folder2',
            children: [{
              name: 'folder1 - folder2 - folder1'
            }, {
              name: 'folder1 - folder2 - folder2'
            }]
          }]
        },
        {
          name: 'folder 2',
          children: [{
            name: 'folder2 - folder1',
            children: [{
              name: 'folder2 - folder1 - folder1'
            }]
          }, {
            name: 'folder2 - folder2',
            children: [{
              name: 'folder2-content1'
            }]
          }]
        },
        {
          name: 'folder 3',
          children: [{
            name: 'folder3 - folder1',
            children: [{
              name: 'folder3 - folder1 - folder1'
            }]
          }, {
            name: 'folder3 - folder2',
            children: [{
              name: 'folder3-content1'
            }]
          }]
        }
      ],
    }
  },
  components: {
    HelloWorld,
    child,
    MyComponent,
    WhereDisplay,
    ListRender,
    CheckProps,
    bs_date_input,
    buttonCounter,
    buttonMessage,
    bindProtoEvent,
    syncTest,
    currencyInput,
    myCheckbox,
    myOneParentCom,
    myTwoParentCom,
    myThreeParentCom,
    asyncChild: function(resolve) {
        require(['./components/asyncChild.vue'], resolve);
    },
    TreeFolder,

  },
  methods: {
    reverseMessage() {
      // this.a.data();
      // console.log(this.userMessage);return;
      this.userMessage = this.userMessage.split('').reverse().join('');
      return true;
    },
    greet: function (event) {
        alert('Hello' + this.company);
        // `event`是原生dom事件
        if (event) {
          alert(event.target.tagName);
        }
    },
    warn(message, event) {
      console.log(event);
      if (event) {
          event.preventDefault();
      }
      alert(message);
    },
    submit: function() {
      alert("提交成功(您的答案是:" + this.keyword + ")");
    },
    doThis: function(event) {
      console.log(event);
    },
    doThat: function() {
      alert('..............');
    },
    onScroll: function(event) {
      alert(event.target.tagName);
    },
    onCtrlClick: function() {
      alert('onCtrlClick');
    },
    onClick: function() {
      alert('onClick');
    },
    incrementTotal: function() {
      this.total += 1
    },
    handleMessage: function(payload) {
      this.msgData.push(payload.message);
    },
    doTheThing: function() {
      alert('doTheThing');
    },
    showchild: function() {
      if(!this.show) {
        this.show = true;
      } else {
        this.show = false; 
      }
      
    },
  },
  computed: {
    countMoney: function() {
      return ((this.price * 100 +  this.shipping * 100 + this.handling * 100 - this.discount * 100) / 100).toFixed(2);
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hide {
  display:none;
}
.my_cursor {
  cursor:pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
