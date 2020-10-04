<template>
  <div class="wrap">
    <div class="time">
    <h1  @click="Title_Click(event);" 
    @mouseenter="titleHover()" @mouseout="titleHover2()">{{nowTime}}</h1>
  </div>
  </div>
</template>

<script>

export default {
  name: "TimeInfo",
  data() {
    return {
      nowTime: '',
      currentTime: ''
    }
  },
  created(){
    this.Time()
    setInterval(this.Time, 1000);
  },
  methods: {
  Time() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	this.nowTime = hours + ":" + minutes;
	this.currentTime = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
  }
  }
}
</script>

<style scoped>
.wrap {
  width: 1100px;
  margin: 0 auto;
}
.time {
	position:absolute;
	width:100px;
	left:50%;
	margin-left:-47.5px;
	top:100px;
	text-align:center;
	transition:all .25s
}
h1 {
	color:#fff;
	font-size:36px;
	font-weight:inherit;
	text-shadow:0 0 20px rgba(0,0,0,.35);
	cursor:pointer;
	transition:all .25s;
	animation-name:delayedFadeIn;
	animation-duration:2s;
	animation-iteration-count:1;
	animation-delay:0s
}
h1::after {
	content:'';
	display:block;
	width:100%;
	height:2px;
	position:absolute;
	bottom:20px;
	background:#108ef5;
	transition:all .25s;
	transform:scale3d(0,1,1);
	transform-origin:50% 0
}
h1:hover::after {
	transform:scale3d(1,1,1)
}
h1:active::after {
	background:rgba(14, 187, 240, .6)
}
h1:active {
	color:rgba(255,255,255,.6)
}
</style>