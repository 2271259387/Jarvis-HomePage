<template >
<div class="wrap">
<div class="search">
<form id="form0" :action="action" target="_blank">
<input name="" type=hidden >
<input ref="input0" type=text :name="name" size=30 class="input" 
placeholder="search" @focus="inputFocus()" autocomplete="off">
<img class="bgbox" id="bgbox" src="../assets/BG_1.jpg">
<div class="cover" ref="cover" @click="inputBlur()"></div>
</form>
  <div id="section" ref="section0">
     <span v-for="(item, index) in list" :key="index"  class="sectionBox" 
     :class="{action:currentIndex == index}" @click="checkClick(index)"><i class="iconfont" v-html="item.icon"></i></span> 
  </div>
</div>
</div>

</template>

<script>
import {inputMixin} from './Mixin/inputMixin.js' 
export default {
  name: "Search",
  data() {
    return {
      list: [
        {name:"百度",icon:"&#xe654;"},
        {name:"必应",icon:"&#xe8c9;"},
        {name:"谷歌",icon:"&#xe613;"}
      ],
      currentIndex: 0,
      action: "",
      name: ""
    }
	},
mixins:[inputMixin],
  mounted() {
		//将input0和section0 cover的Dom元素放在vuex
		this.$store.state.eventInput0 = this.$refs.input0
		this.$store.state.eventSection0 = this.$refs.section0
		this.$store.state.eventCover = this.$refs.cover
		this.inputFocus()
		this.action="https://www.baidu.com/s"
		this.name="word"
		this.$refs.input0.focus()
  },
  methods: {
    checkClick(index){
      this.currentIndex = index
      switch (index) {
	case 0:
    this.action = "https://www.baidu.com/s";
		this.name = "word";
		break;
	case 1:
    this.action = "https://www.bing.com/search";
		this.name = "q";
		break;
	case 2:
    this.action = "https://www.google.com/search";
		this.name = "q";
		break;
	}
		},
	// inputFocus() {
	// let e = this.$store.state.eventMotto
	// e.style.opacity = "1"
	// this.$refs.section0.style.display = "block";
	// this.$refs.input0.classList.add("focus");
	// this.$refs.cover.style.display = "block"
	// setTimeout(() => {
	// 	this.$refs.section0.style.opacity = "1";
	// 	this.$refs.section0.style.top = innerWidth > 600 ? "270px": "155px";
	// },
	// 100);
	// }
	}
}
</script>

<style scoped>
.wrap {
  width: 1100px;
  margin: 0 auto;
}
.input {
	position:absolute;
	top:200px;
	left:calc(50% - 115px);
	width:230px;
	outline:none;
	border:none;
	padding:13px 15px;
	border-radius:30px;
	font-size:small;
	font-weight:400;
	font-family:microsoft yahei,sans-serif;
	text-align:center;
	background-color:rgba(255,255,255,.25);
	box-shadow:rgba(0,0,0,.2) 0 0 10px;
	-webkit-backdrop-filter:blur(10px);
	backdrop-filter:blur(10px);
	transition:background-color .25s,box-shadow .25s,left .25s,opacity .25s,top .25s,width .25s
}
.input:hover {
	background-color:rgba(255,255,255,.6);
	box-shadow:rgba(0,0,0,.3) 0 0 10px;
	left:calc(50% - 265px);
	width:530px
}
.input.focus {
	background-color:rgba(255,255,255,.9);
	box-shadow:rgba(0,0,0,.2) 0 0 10px;
	left:calc(50% - 265px);
	width:530px
}
.input::placeholder,textarea::placeholder {
	color:#fff;
	text-shadow:0 0 10px rgba(0,0,0,.3);
	transition:all .25s
}
.input:hover::placeholder {
	color:#646464;
	text-shadow:0 0 10px transparent
}
.input.focus::placeholder {
	color:transparent;
	text-shadow:0 0 10px transparent
}
.bgbox {
	
	
	z-index:-3;
	position:fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	object-fit:cover;
	transition:opacity 1s,transform .25s,filter .25s
}
.cover {
	display: none;
	z-index:-1;
	position:fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background-image:radial-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100%),radial-gradient(rgba(0,0,0,0) 33%,rgba(0,0,0,0.3) 166%);
	transition:all .25s
}
#section {
	display: none;
	opacity:0;
	position:absolute;
	top:220px;
	left:50%;
	margin-left:-130px;
	width:260px;
	text-align:center;
	transition:all .25s
}
.sectionBox {
	position:relative;
	padding:30px;
	padding-top:5px;
  padding-bottom:5px;
  font-size: 14px;
	margin-left:5px;
	margin-right:5px;
	background-color:rgba(255,255,255,.1);
	border-radius:20px;
	transition:all .25s;
	cursor:pointer
}

.action {
	background-color:rgba(255,255,255,.3);
	cursor:default
}
 
</style>