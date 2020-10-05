<template>
  <div class="nav-page">
    <div class="navbox" id="navbox" ref="navbox" @click="Navbox_Click(event)">
      <div class="navbox0" id="navbox0">
      <div class="navboxes" id="navbox1">
      <table>
      <tr>
      <td><a href="https://fanyi.baidu.com/" target="_blank" class="nav_links">翻译</a></td>
      <td><a href="https://map.baidu.com/" target="_blank" class="nav_links">地图</a></td>
      <td><a href="https://image.baidu.com/" target="_blank" class="nav_links">图片</a></td>
      <td><a href="https://mail.qq.com/" target="_blank" class="nav_links">QQ邮箱</a></td>
      <td><a href="https://email.163.com/" target="_blank" class="nav_links">网易邮箱</a></td>
      </tr>
      <tr>
      <td><a href="https://www.jd.com/" target="_blank" class="nav_links">京东</a></td>
      <td><a href="https://www.taobao.com/" target="_blank" class="nav_links">淘宝</a></td>
      <td><a href="https://www.bilibili.com/" target="_blank" class="nav_links">Bilibili</a></td>
      <td><a href="https://www.youku.com/" target="_blank" class="nav_links">优酷</a></td>
      <td><a href="https://pan.baidu.com/" target="_blank" class="nav_links">网盘</a></td>
      </tr>
      <tr>
      <td><a href="https://github.com/" target="_blank" class="nav_links">GitHub</a></td>
      <td><a href="https://www.tmall.com/" target="_blank" class="nav_links">天猫</a></td>
      <td><a href="https://airportal.cn/" target="_blank" class="nav_links">空投</a></td>
      <td><a href="https://tieba.baidu.com/" target="_blank" class="nav_links">贴吧</a></td>
      <td><a href="https://music.163.com/" target="_blank" class="nav_links">云音乐</a></td>
      </tr>
      </table>
    </div>
    <div class="navboxes" id="navbox2">
      <span class="shouldNotFade" id="noteListWrap">
      <span class="shouldNotFade" id="noteList">
      <div class="noteItem shouldNotFade" onclick="newNote()">
      <i class="iconfont shouldNotFade" id="iconAdd">&#xe620;</i><span class="noteTitle shouldNotFade" id="noteTitle0">新便笺</span>
      </div>
      </span>
      </span>
      <textarea class="shouldNotFade" id="textNote" placeholder="在此键入以创建新的便笺" oninput="saveNote()"></textarea>
      <div class="shouldNotFade" id="noteToolBar">
      <span class="toolBarBtns" id="btnDelNote" title="删除便笺" onclick="delNote()"><i class="iconfont shouldNotFade">&#xe614;</i></span>
      <span class="toolBarBtns" id="btnPinNote" title="固定便笺到主屏幕" onclick="pinNote()"><i class="iconfont shouldNotFade" id="iconPin">&#xe849;</i></span>
      </div>
    </div>
    </div>
    <div class="navboxSwitch">

    <span class="nbSwitch shouldNotFade" id="nbSwitch1" onclick="nbSwitch1_Click()"><span class="shouldNotFade current" id="nbSwitch1_0"></span></span>
    <span class="nbSwitch shouldNotFade" id="nbSwitch2" onclick="nbSwitch2_Click()"><span class="shouldNotFade" id="nbSwitch2_0"></span></span>
    </div>
    <div id="navboxCustom">
    </div>
    <div class="shouldNotFade" id="frmSetCustomNav">
    <div class="popCaptionS shouldNotFade">添加网站捷径</div>
    <span class="btnCloseS shouldNotFade" id="btnCloseFrmCusNav" onclick="closeFrmCusNav()"></span>
    <input class="inputCustom shouldNotFade" id="inputCustomUrl" placeholder="网址">
    <input class="inputCustom shouldNotFade" id="inputCustomTitle" onkeydown="iptCusNavKeyDown(event)" placeholder="标题">
    <div class="btnCustom shouldNotFade" id="btnAddCusNav" onclick="addCusNav()">添加</div>
    </div>
    <div class="shouldNotFade" id="menuCusNav">
    <div class="userMenuItem" id="cusNavMenuDel" onclick="delCusNav()"><i class="iconfont" id="iconDel">&#xeb95;</i>删除</div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavPage",
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
.navbox {
	animation:fadeIn .25s linear;
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background-color:transparent;
	display:none;
	transition:all .25s
}
.navbox0 {
	position:absolute;
	margin-top:200px;
	left:calc(50% - 330px);
	width:660px;
	height:250px;
	overflow:hidden
}
.navboxes {
	position:absolute;
	width:100%;
	overflow:hidden;
	transition:all .25s
}
#navboxCus {
	left:-100%;
	height:200px
}
#navbox1 {
	left:0;
	height:200px
}
#navbox2 {
	left:100%;
	color:#fff;
	height:250px
}
.navboxSwitch,.navboxTmp {
	position:absolute;
	left:50%;
	width:650px;
	margin-left:-325px;
	text-align:center
}
.navboxSwitch {
	z-index:50;
	top:450px
}
.navboxTmp {
	bottom:200px
}
#navboxCustom {
	position:absolute;
	left:50%;
	margin-left:-425px;
	bottom:150px;
	width:850px;
	text-align:center
}
.customNav {
	position:relative;
	display:inline-block;
	width:100px;
	height:70px;
	margin-left:3px;
	margin-right:3px;
	background-color:rgba(255,255,255,.1);
	border-radius:5px;
	text-align:center;
	cursor:pointer;
	transition:all .35s
}
.customNav:hover {
	background-color:rgba(255,255,255,.5)
}
.customNav:hover>.iconAddNav {
	color:rgba(0,0,0,.5)
}
.customNav:active {
	background-color:rgba(255,255,255,.9)
}
.customNav.added {
	background-color:rgba(255,255,255,.5)
}
.customNav.added:hover {
	background-color:rgba(255,255,255,.7)
}
.customNav.added:hover>.cusNavTitle {
	color:#000
}
.customNav.added:active {
	background-color:rgba(255,255,255,.9)
}
.customNav.added>.iconAddNav {
	opacity:0
}
.iconAddNav {
	position:absolute;
	color:rgba(255,255,255,.3);
	top:50%;
	left:50%;
	margin-left:-11px;
	margin-top:-12px;
	transition:all .35s
}
.cusNavIcon {
	position:absolute;
	top:15px;
	left:50%;
	width:24px;
	height:24px;
	margin-left:-12px;
	border:none;
	background-position:center;
	background-size:contain;
	background-repeat:no-repeat;
	transition:all .25s
}
.cusNavIcon.round {
	border-radius:20px
}
.cusNavTitle {
	position:absolute;
	top:45px;
	left:0;
	width:100%;
	font-size:10px;
	text-align:center;
	color:rgba(0,0,0,.8);
	transition:all .25s
}
#frmSetCustomNav {
	z-index:51;
	display:none;
	opacity:0;
	transform:scale(.5);
	position:absolute;
	top:50%;
	left:20%;
	width:300px;
	height:156px;
	background-color:#fff;
	border-radius:10px;
	box-shadow:rgba(0,0,0,.1) 0 10px 15px;
	transition:all .25s;
	transform-origin:50% 100%
}
</style>