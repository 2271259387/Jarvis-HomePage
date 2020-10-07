<template>
  <div class="page-pop">
    <div class="popUp" id="popGeneralSettings" ref="popGeneralSettings">
    <span class="btnClose" @click="closePop(popGeneralSettings)" ></span>
    <div class="pTitle">常规设置</div>
    <div class="pContent" id="contentGSet">
    <div class="setOptBox">
    <span class="setOptCaption">减弱动态效果</span>
    <span class="setOptComment">动效显示不流畅或影响你的鼠标操作时，可以开启此项。</span>
    <label class="switch"><input type="checkbox" ref="chkReduceMotion"><div class="slider" @click="setReduceMotion()"></div></label>
    </div>
    </div>
    </div>
    <div class="popUp" id="popBg" ref="popBg">
    <span class="btnClose" @click="closePop(popBg)" ></span>
    <div class="pTitle">背景图像偏好</div>
    <div class="pContent" id="contentBg">
    <div class="pTitleS">自定义</div>
    <div class="bgPreviewBox" id="bgPreBoxCus" @click="changeWp(this)">
      <div class="bgPreBoxInner unset" id="bgPreBoxInCus"><span class="bgPreBoxMask"></span>
      <i class="iconfont iconCheck shouldNotFade">&#xe622;</i>
      <i class="iconfont iconImg shouldNotFade">&#xeb9a;</i>
      </div></div>
    <div class="bgCusBoxR">
    <span class="titleBold">将您喜爱的任意图像设为壁纸。</span>
    <div class="pTitleS">建议图像尺寸：1920×1080 或更高</div><br>
    <button class="btnRectangle" id="btnBrowse">浏览...</button>
    <input id="inputImg" type="file">
    </div>
    <div class="pTitleS">默认</div>
    <div class="bgPreviewBox" id="bgPreBoxD1" @click="changeWp(this)"><div class="bgPreBoxInner" id="bgPreBoxIn1"><span class="bgPreBoxMask"></span><i class="iconfont iconCheck shouldNotFade">&#xe622;</i></div></div>
    <div class="bgPreviewBox" id="bgPreBoxD2" @click="changeWp(this)"><div class="bgPreBoxInner" id="bgPreBoxIn2"><span class="bgPreBoxMask"></span><i class="iconfont iconCheck shouldNotFade">&#xe622;</i></div></div>
    <div class="bgPreviewBox" id="bgPreBoxD3" @click="changeWp(this)"><div class="bgPreBoxInner" id="bgPreBoxIn3"><span class="bgPreBoxMask"></span><i class="iconfont iconCheck shouldNotFade">&#xe622;</i></div></div>
    <div class="pTitleS">必应</div>
    <div class="bgPreviewBox" id="bgPreBoxBing" @click="changeWp(this)"><div class="bgPreBoxInner" id="bgPreBoxInBing"><span class="bgPreBoxMask"></span><i class="iconfont iconCheck shouldNotFade">&#xe622;</i></div></div>
    <div class="pTitleS" id="bgTitleDynamic">动态</div>
    <div class="bgPreviewBox" id="bgPreBoxLive" @click="changeWp(this)"><div class="bgPreBoxInner" id="bgPreBoxInLive"><span class="bgPreBoxMask"></span><i class="iconfont iconCheck shouldNotFade">&#xe622;</i></div></div>
    </div>
    </div>
    <div class="popUp" id="popDonate" ref="popDonate">
    <span class="btnClose" @click="closePop(popDonate)" ></span>
    <div class="pTitle">捐助我</div>
    <div class="pContent" id="contentDonate">
    <p class="pAbout">我是一名在校大学生，每月高昂的服务器费用均由我从生活费中自费。<br>如果你喜欢我的网站，简单的捐赠是对我最大的物质和精神支持~爱你们！</p>
    </div>
    </div>
    <div class="popUp" id="popFeedback" ref="popFeedback">
    <span class="btnClose" @click="closePop(popFeedback)" ></span>
    <div class="pTitle">反馈</div>
      
        <div class="pContent" id="contentFeedback"> 
        <p class="pAbout">如需反馈问题、提供建议、或者与作者谈笑风生，请加入QQ群：<a class="links1" target="_blank" href="https://shang.qq.com/wpa/qunwpa?idkey=4adebda6979ca4579475da14cdf84e6cc5860c88d97859049e07bdc16a2aecc3">835838180</a><br>建议先阅读下面的常见问题解答喔</p>
        <div class="feedbackItem"><span class="titleBold">新用户注册失败？</span>
        <div class="pTitleS">如果提示是以“邮件发送失败...”开头，则是由于近期新用户注册数量实在太大，我们的注册邮件推送服务达到了每日发送数量限额（每天约7000~10000个新用户注册名额）。请您在第二天早点来试试，为您带来的不便我们深表歉意！</div></div>
        <div class="feedbackItem"><span class="titleBold">不喜欢新版的二级页面，如何回到旧版界面？</span>
        <div class="pTitleS">请点此前往<a href="https://a.maorx.cn/old">青柠起始页 | 经典版</a>。</div></div>
        <div class="feedbackItem"><span class="titleBold">预设的网站捷径可以删除吗？</span>
        <div class="pTitleS">可以，在图标上单击鼠标右键或触摸长按就会看到删除按钮了。</div></div>
        <div class="feedbackItem"><span class="titleBold">如何在「自定义网站捷径」页面和「便笺」页面之间快速切换？</span>
        <div class="pTitleS">如果你用的是电脑，在起始页二级页面【左右两侧的空白处】滚动鼠标滚轮即可快速左右切换两个页面。</div></div>
        <div class="feedbackItem"><span class="titleBold">为什么按下回车无法搜索/同时打开两次搜索结果页面？</span>
        <div class="pTitleS">1. 可能是你安装的浏览器扩展冲突了，可以把扩展都关掉逐个排查； 2. 可能是你的浏览器没有开启“允许弹出窗口”权限，打开就行啦。</div></div>
        <div class="feedbackItem"><span class="titleBold">界面动画卡顿掉帧很严重？</span>
        <div class="pTitleS">可以在「常规设置」里开启「低配置模式」或「减弱动态效果」。</div></div>
        <div class="feedbackItem"><span class="titleBold">每次打开网站捷径页都要点击「时间」，有更快捷的方法吗？</span>
        <div class="pTitleS">在页面空白处直接单击鼠标右键即可。或者在「常规设置」里开启「起始页加载时自动显示二级页面」。</div></div>
        <div class="feedbackItem"><span class="titleBold">每次重启浏览器都要重新登录账号？</span>
        <div class="pTitleS">可能是因为浏览器开启了“退出时清理浏览痕迹”或者没有允许起始页的 Cookie 权限，把权限打开就会自动登录了。</div></div>
        </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: "PagePop",
 
  data() {
    return {
      popUpClosing: false,
      popGeneralSettings: null,
      popBg: null,
      popDonate: null,
      popFeedback: null,
      chkReduceMotion: {checked:false},
      reduceMotion: false,
      
    }
  },
  mounted() {
    this.popGeneralSettings = this.$refs.popGeneralSettings
    this.popBg = this.$refs.popBg
    this.popDonate = this.$refs.popDonate
    this.popFeedback = this.$refs.popFeedback
    this.reduceMotion = localStorage.getItem("reduceMotion") == "on";
    this.$refs.chkReduceMotion.checked = this.reduceMotion
  },
  methods:{
  closePop(obj) {
    this.popUpClosing = true;
    let c1 = this.$store.state.eventCover1
    c1.style.opacity = "0";
    obj.style.opacity = "0";
    if (this.reduceMotion === false) {
      obj.style.transform = "rotate3d(1,1,0,20deg)";
    }
    setTimeout(() => {
      c1.style.display = "none";
      obj.style.display = "none";
      if (this.reduceMotion === false) {
        obj.style.transform = "rotate3d(1,1,0,90deg)";
      }
      this.popUpClosing = false;
    },
    350);
  },
  setReduceMotion() {
    if (this.chkReduceMotion.checked == true) {
      this.reduceMotion = false;
      localStorage.setItem("reduceMotion", "off");
    } else {
      this.reduceMotion = true;
      localStorage.setItem("reduceMotion", "on");
    }
			}
  },

}
</script>

<style scoped>
input[type=file] {
	display:none
}
.titleBold {
	font-family:microsoft yahei,sans-serif;
	font-size:15px;
	font-weight:700
}
.bgCusBoxR {
	position:absolute;
	display:inline-block;
	margin-left:20px;
	margin-top:8px
}
.bgCusBoxR .pTitleS {
	line-height:8px
}
#contentGSet {
	width:calc(100% - 140px)
}
.page-scroll{
    width: 100%;
    height: 400px;
    overflow: hidden;
}
</style>