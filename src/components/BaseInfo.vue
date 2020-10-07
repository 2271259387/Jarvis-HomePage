<template>
  <div class="baseInfo">
    <div class="footer">
    <a href="https://www.maorx.cn/" title="毛若昕丨静水流深" 
    target="_blank" class="links"> 2020毛若昕</a> 丨 <a title="关于青柠起始页" 
    class="links" @click="showAbout()">关于</a>
    </div>
    <div class="cover1" ref="cover1">
      <div class="popUp" ref="popAbout" id="popAbout">
      <span class="btnClose" @click="closePop(popAbout)" ></span>
      <div class="pTitle centerAligned">开始</div>
      <div class="pContent centerAligned">
      <p id="pVersion">version</p>
      <p class="pAbout">这里是DwardChan的个人起始页<br>感谢<a href="https://cn.bing.com/" class="links1" title="必应" target="_blank">必应</a>提供的每日美图、<a href="https://hitokoto.cn/" class="links1" title="Hitokoto - 一言" target="_blank">Hitokoto - 一言</a>提供的奇怪格言<br>如果你喜欢这个主页，可以<a onclick="showPop(popDonate)" class="links1">捐助我</a>。Have a nice day!</p>
      <div id="changeLog">
        感谢毛若昕设计的Web模板
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script> 
import {mixin} from './Mixin/mixin.js'
export default {
  name: "BaseInfo",
  data() {
    return {
      reduceMotion: false,
      popUpClosing: false,
      popAbout: null
    }
  },
mixins:[mixin],
  mounted() {
    this.$store.state.eventCover1 = this.$refs.cover1
    this.popAbout = this.$refs.popAbout
  },
  methods: {
   showAbout() {
      this.showPop(this.$refs.popAbout)
    } 
  }
}
</script>

<style scoped>
.links {
	text-decoration:none;
	color:rgba(255,255,255,.6);
	cursor:pointer;
	transition:all .25s
}
a.links:link,a.links:visted {
	color:rgba(255,255,255,.6)
}
a.links:hover {
	color:#fff
}
a.links:active {
	color:rgba(255,255,255,.6)
}
.footer {
	position:absolute;
	top:100%;
	margin-top:-30px;
	width:100%;
	font-size:12px;
	color:rgba(255,255,255,.6);
	text-align:center;
	text-shadow:0 0 20px rgba(0,0,0,.8)
}

</style>