<template>
	<div >
		<div ref="title" class="time">
    <h1  @click="timeClick($event.target)" @mouseenter="titleHover()" @mouseout="titleHover2()">{{nowTime}}</h1>
    </div>
	<nav-page ref="navBox" />
	</div>
</template>

<script>
import {inputMixin} from './Mixin/inputMixin.js' 
import NavPage from './NavPage/NavPage.vue'
export default {
	name: "TimeInfo",
	components: { NavPage },
  data() {
    return {
      nowTime: '',
			currentTime: '',
    }
	},
mixins:[inputMixin],
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
		},
		timeClick(e) {
			let n = this.$refs.navBox.$refs.NavBox.$refs.navbox
			let m = this.$store.state.eventMotto
			let i = this.$store.state.eventInput0
			let c0 = this.$store.state.eventCover
			if (n.style.display != "block") {
				i.style.opacity = "0";
				this.inputBlur();
				m.style.opacity = "0";
				m.style.animation = "none";
				m.style.display = "none";
				n.style.display = "block";
				c0.style.display = "block"
				this.$refs.navBox.$refs.btnUser.style.display = "block";
				this.$refs.navBox.$refs.btnSettings.style.display = "block";
			} else {
				this.$refs.navbox.navboxClick(e)
			}
		 },
		titleHover() {
			this.$refs.title.style.transform = "scale(1.15)";
			setTimeout(() => this.$refs.title.style.transform = "scale(1.1)", 250);
		},
		titleHover2() {
			this.$refs.title.style.transform = "scale(0.95)";
			setTimeout(() => this.$refs.title.style.transform = "scale(1)", 250);
		}
  }
}
</script>

<style scoped>
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
h1:hover::after {
	transform:scale3d(1,1,1)
}
h1:active {
	color:rgba(255,255,255,.6)
}
</style>