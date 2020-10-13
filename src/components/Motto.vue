<template>
  <div class="motto" ref="motto" @click="inputBlur()">
    <span class="bg" ref="bg"></span>
    <p class="content">{{"「 "+content+"」"}}</p>
    <p class="author">{{"——"+author}}</p>
  </div>
</template>

<script>
import {inputMixin} from './Mixin/inputMixin.js' 
export default {
  name: "Motto",
  data() {
    return {
      content: '',
      author: ''
    }
  },
mixins:[inputMixin],
  created() {
    this.getMotto()
  },
  mounted() {
		this.$store.state.eventMotto = this.$refs.motto
  },
  methods: {
    getMotto() {
      let api = "https://v1.hitokoto.cn/?c=d&c=h&c=i&c=j&encode=json"
      this.$http.get(api).then((res) => {
        this.content = res.body.hitokoto
        this.author = res.body.from
      }, (err) =>{
        console.log(err);
      });
    }
  }
}
</script>

<style scoped lang="scss">
.motto {
	position:absolute;
	top:100%;
	margin-top:-200px;
	width:100%;
	font-size:small;
	text-align:center;
	cursor:default;
	transition:all .5s;
	animation-name:delayedFadeIn;
	animation-duration:3s;
	animation-iteration-count:1;
	animation-delay:0s;
	@media screen and (max-width:600px) {
		top:550px;
		font-size:.7em;
		width:80%;
		left:50%;
		margin-left:-40%
	}
	@media screen and (min-width:600px) and (max-width:900px) {
		font-size:small;
	margin-top:-15%
	}
	@media screen and (max-height:550px) {
		display:none
	}
}
.bg {
	z-index:-1;
	opacity:0;
	position:absolute;
	left:0;
	width:100%;
	height:100%;
	background-image:linear-gradient(130deg,rgba(255,255,255,0.9),rgba(255,255,255,0.9),rgba(255,255,255,0));
	transition:all .5s
}
.content {
	color:rgba(255,255,255,.9);
	text-shadow:0 0 20px rgba(0,0,0,.8);
	transition:all .25s
}
.author {
	opacity:0;
	color:rgba(0,0,0,.9);
	transition:all .25s
}
.motto:hover {
	color:rgba(0,0,0,.9)
}
.motto:hover .bg {
	opacity:1
}
.motto:hover .content {
	color:rgba(0,0,0,.9);
	text-shadow:0 0 20px transparent
}
.motto:hover .author {
	opacity:1
}
</style>