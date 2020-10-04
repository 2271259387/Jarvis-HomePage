<template >
<div class="wrap">
<div class="search">
<form id="form0" :action="action" target="_blank">
<div align="center"> 
<input name="" type=hidden >
<input id="input0" type=text :name="name" size=30 class="input">
</div>
</form>
  <div id="section">
     <span v-for="(item, index) in list" :key="index"  class="sectionBox"
     :class="{action:currentIndex == index}" @click="checkClick(index)">{{item.name}}</span> 
  </div>
</div>
</div>
</template>

<script>

export default {
  name: "Search",
  data() {
    return {
      list: [
        {name:"百度",bianhao:"&#xe651;"},
        {name:"必应",bianhao:"&#xe608;"},
        {name:"谷歌",bianhao:"&#xe624;"}
      ],
      currentIndex: 0,
      action: "",
      name: ""
    }
  },
  mounted() {
    
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
    }
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
#section {
	
	position:absolute;
	top:260px;
	left:50%;
	margin-left:-130px;
	width:300px;
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
	background-color:rgba(14, 187, 240, 0.3);
	cursor:default
}
 
</style>