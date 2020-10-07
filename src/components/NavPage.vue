<template>
  <div class="nav-page">
    <div class="navbox" ref="navbox" @click="navboxClick($event.target)">
      <div class="navbox0" id="navbox0">
				<div class="navboxes" id="navbox1">
						<div class="navboxCustom shouldNotFade">
							<a href="https://fanyi.baidu.com/" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(45, 149, 191);">&#xe6da;</i><div class="cusNavTitle shouldNotFade">翻译</div>
							  </div>
							</a>
							<a href="https://map.baidu.com/" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(149, 178, 58);">&#xe68a;</i><div class="cusNavTitle shouldNotFade">地图</div>
							  </div>
							</a>
							<a href="https://image.baidu.com/" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(243, 82, 92);">&#xe6ce;</i><div class="cusNavTitle shouldNotFade">图片</div>
							  </div>
							</a>
							<a href="https://pan.baidu.com/" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(255, 176, 59);">&#xe66f;</i><div class="cusNavTitle shouldNotFade">云盘</div>
							  </div>
							</a>
							<a href="https://airportal.cn" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(64, 142, 240);">&#xe604;</i><div class="cusNavTitle shouldNotFade">空投</div>
							  </div>
							</a>
							<a href="https://mail.qq.com" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(245, 127, 79);">&#xe662;</i><div class="cusNavTitle shouldNotFade">QQ邮箱</div>
							  </div>
							</a>
							<a href="https://music.163.com/" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(242, 68, 82);">&#xe600;</i><div class="cusNavTitle shouldNotFade">云音乐</div>
							  </div>
							</a>
							<a href="https://www.bilibili.com/" target="_blank">
								<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(45, 149, 191);">&#xe619;</i><div class="cusNavTitle shouldNotFade">哔哩哔哩</div>
							  </div>
							</a>
							<div class="customNav shouldNotFade" @click="showPop(popBg)">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(147, 106, 209);">&#xe60b;</i><div class="cusNavTitle shouldNotFade">壁纸</div>
							</div>
							<div class="customNav shouldNotFade">
								<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(237, 149, 43);">&#xe65a;</i><div class="cusNavTitle shouldNotFade">主题</div>
							</div>
						</div>
				<!-- <table>
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
				</table> -->
				</div>
				<div class="navboxes" id="navbox2">
				<span class="shouldNotFade" id="noteListWrap">
				<span class="shouldNotFade" id="noteList">
				<div class="noteItem shouldNotFade" @click="newNote()">
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
			<span class="nbSwitch shouldNotFade" id="nbSwitch1" @click="nbSwitch1_Click()"><span class="shouldNotFade current" id="nbSwitch1_0"></span></span>
			<span class="nbSwitch shouldNotFade" id="nbSwitch2" @click="nbSwitch2_Click()"><span class="shouldNotFade" id="nbSwitch2_0"></span></span>
			</div>
    </div>
		<div class="btnUser" ref="btnUser" title="用户" ><i class="iconfont">&#xe63e;</i></div>
			<div id="menuUser">
			<div class="userMenuItem" id="userMenuMyAccount" ><span id="menuTextUsername">User</span>账号管理</div>
			<div class="userMenuItem" id="userMenuLogout" >退出登录</div>
			</div>
			<div class="btnSettings" ref="btnSettings" title="设置" @click="btnSettingsClick()"><i class="iconfont">&#xe603;</i></div>
			<div id="menuSettings" ref="menuSettings">
			<div class="userMenuItem" id="setMenuGeneral" @click="showPop(popGeneralSettings)">常规设置</div>
			<div class="userMenuItem" id="setMenuBgPref" @click="showPop(popBg)">背景图像偏好</div>
			<div class="userMenuItem" id="setMenuDonate" @click="showPop(popDonate)">捐助我</div>
			<div class="userMenuItem" id="setMenuFeedback" @click="showPop(popFeedback)">反馈</div>
		</div>
		<page-pop ref="pagePop" />
  </div>
</template>

<script>
import PagePop from "./PagePop"
export default {
	name: "NavPage",
	components: {PagePop},
  data() {
    return {
			
			reduceMotion: false,
			popGeneralSettings: null,
			popBg: null,
			popDonate: null,
			popFeedback: null
    }
  },
  mounted() {
		this.popGeneralSettings = this.$refs.pagePop.$refs.popGeneralSettings
		this.popBg = this.$refs.pagePop.$refs.popBg
		this.popDonate = this.$refs.pagePop.$refs.popDonate
		this.popFeedback = this.$refs.pagePop.$refs.popFeedback
  },
  methods: {
		navboxClick(e) {
				let i = this.$store.state.eventInput0
				let n1 = this.$refs.navbox
				let c0 = this.$store.state.eventCover
				let m = this.$store.state.eventMotto
				if(e.classList.contains("shouldNotFade") == false){
				i.style.opacity = "1";
				// if (bgPreference == "Live") {
				// 	if (reduceMotion === false) {
				// 		liveBgBox.style.transform = "";
				// 	}
				// 	liveBgBox.style.filter = "";
				// } else {
				// 	if (reduceMotion === false) {
				// 		bgbox.style.transform = "";
				// 	}
				// 	bgbox.style.filter = "";
				// }
				this.hideMenu(this.$refs.menuSettings)
				c0.style.display = "none"
				n1.style.opacity = "0";
				m.style.display = "";
				this.$refs.btnUser.style.opacity = "0";
				this.$refs.btnSettings.style.opacity = "0";
				setTimeout(() => {
					n1.style.display = "none";
					this.$refs.btnUser.style.display = "none";
					this.$refs.btnSettings.style.display = "none";
					n1.style.opacity = "";
					this.$refs.btnUser.style.opacity = "";
					this.$refs.btnSettings.style.opacity = "";
				},
				250);
			 }
		  },
			btnSettingsClick() {
				if (this.$refs.menuSettings.style.opacity === "1") {
					this.hideMenu(this.$refs.menuSettings);
				} else {
					this.showMenu(this.$refs.menuSettings);
				}
			},
			showMenu(theMenu) {
				theMenu.style.display = "block";
				setTimeout(() => {
					theMenu.style.opacity = "1";
					theMenu.style.transform = "scale(1.05)";
				},
				50);
				setTimeout(() => theMenu.style.transform = "scale(1)", 300);
			},
			hideMenu(theMenu) {
				theMenu.style.transform = "scale(0.5)";
				theMenu.style.opacity = "0";
				setTimeout(() => theMenu.style.display = "none", 250);
			},
			showPop(thePopUp) {
				let c1 = this.$store.state.eventCover1
				c1.style.display = "block";
				thePopUp.style.display = "block";
				if (this.reduceMotion === false) {
					setTimeout(() => {
						c1.style.opacity = "1";
						thePopUp.style.opacity = "1";
						thePopUp.classList.add("showPop");
						setTimeout(() => {
							thePopUp.style.transform = "rotate3d(0,0,0,0deg)";
							thePopUp.classList.remove("showPop");
						},
						350);
					},
					100);
				} else {
					c1.style.opacity = "1";
					thePopUp.style.transition = "all 0s";
					thePopUp.style.transform = "rotate3d(0,0,0,0deg)";
					thePopUp.style.transition = "all 0.25s";
					setTimeout(() => thePopUp.style.opacity = "1", 25);
				}
			}
  }
}
</script>

<style scoped>
.btnSettings,.btnUser {
	width: 20px;
	height: 20px;
	animation:fadeIn .25s linear;
	display:none;
	position:absolute;
	top:30px;
	background-color:transparent;
	color:rgba(255,255,255,.35);
	font-size:22px;
	cursor:pointer;
	transition:all .25s
}
.btnSettings {
	right:50px
}
.btnUser {
	right:90px
}
.btnSettings:hover {
	color:rgba(255,255,255,.65);
	transform:rotate(60deg)
}
.btnUser:hover {
	color:rgba(255,255,255,.65)
}
.btnSettings:active,.btnUser:active {
	color:rgba(255,255,255,.8)
}
#menuUser,#menuSettings,#menuCusNav,#menuSearch,#tipBoxCopyPaste {
	display:none;
	opacity:0;
	transform:scale(.5);
	position:absolute;
	width:160px;
	background-color:#fff;
	border-radius:10px;
	box-shadow:rgba(0,0,0,.1) 0 2px 10px;
	transition:all .25s;
	overflow:hidden
}
#menuUser {
	right:90px;
	top:65px;
	transform-origin:95% 10%
}
#menuSettings {
	right:50px;
	top:65px;
	transform-origin:95% 10%
}
#menuCusNav {
	width:140px
}
#menuSearch {
	z-index:99;
	background-color:#fff
}
.userMenuItem,.searchMenuItem {
	padding-left:20px;
	padding-top:12px;
	padding-bottom:12px;
	font-size:11px;
	transition:all .25s
}
.userMenuItem:hover {
	background-color:rgba(0,0,0,.1)
}
.userMenuItem:active {
	background-color:rgba(0,0,0,.2)
}


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
	width:670px;
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
	height:250px
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
	top:500px
}
.navboxTmp {
	bottom:200px
}

.inputCustom,.inputLogin {
	position:relative;
	margin-top:10px;
	padding:0 15px;
	left:10%;
	width:80%;
	height:25px;
	border:none;
	outline:none;
	border-radius:20px;
	background-color:rgba(0,0,0,.05);
	transition:all .25s
}

#noteListWrap {
	position:absolute;
	left:-200px;
	width:190px;
	height:200px;
	overflow:hidden;
	border-radius:15px;
	transition:all .25s;
	-webkit-backdrop-filter:blur(30px);
	backdrop-filter:blur(30px)
}
#noteList {
	position:absolute;
	width:222px;
	height:200px;
	background-color:transparent;
	overflow-x:hidden
}
.noteItem {
	position:relative;
	display:block;
	left:0;
	width:190px;
	padding:10px;
	padding-left:20px;
	font-size:small;
	border-bottom:solid 1px rgba(255,255,255,.1);
	transition:all .25s;
	animation-name:fadeIn;
	animation-duration:.5s;
	animation-iteration-count:1;
	animation-delay:0s
}
.noteItem.current {
	border-left:solid 5px #70c000
}
.noteItem:hover {
	background-color:rgba(255,255,255,.1)
}
.noteItem:active {
	background-color:rgba(255,255,255,.2)
}
.noteTitle {
	display:inline-block;
	width:150px;
	height:17.6px;
	overflow:hidden;
	margin-bottom:-3.6px
}
#noteTitle0 {
	position:absolute;
	top:10px;
	margin-left:5px
}
.noteTime {
	font-size:10px;
	color:rgba(255,255,255,.3)
}
#iconAdd {
	font-size:small
}
#textNote {
	position:absolute;
	left:0;
	width:660px;
	height:200px;
	padding:10px;
	padding-left:20px;
	color:#000;
	font-family:microsoft yahei light,microsoft yahei,Helvetica,sans-serif,等线;
	font-size:small;
	background-color:rgba(255,255,255,.6);
	border:none;
	outline:none;
	resize:none;
	border-radius:15px;
	transition:all .25s;
	scrollbar-color:rgba(0,0,0,.15) #fff;
	-webkit-backdrop-filter:blur(30px);
	backdrop-filter:blur(30px)
}
::-webkit-scrollbar {
	width:5px
}
#textNote::-webkit-scrollbar-thumb {
	background-color:rgba(0,0,0,.15);
	border-radius:3px
}
#textNote::-webkit-scrollbar-thumb:hover {
	background-color:rgba(0,0,0,.3)
}
textarea::-webkit-input-placeholder {
	color:rgba(0,0,0,.5)
}
textarea::-moz-placeholder {
	color:rgba(0,0,0,.6)
}
textarea:hover::-webkit-input-placeholder {
	color:rgba(0,0,0,.7)
}
textarea:hover:-moz-placeholder {
	color:rgba(0,0,0,.8)
}
textarea:hover::-moz-placeholder {
	color:rgba(0,0,0,.8)
}
textarea:hover::-ms-input-placeholder {
	color:rgba(0,0,0,.7)
}
#noteToolBar {
	position:absolute;
	display:none;
	left:210px;
	top:210px;
	width:100px
}
.toolBarBtns {
	margin-left:5px;
	color:rgba(255,255,255,.35);
	cursor:pointer;
	transition:all .25s
}
.toolBarBtns:hover {
	color:rgba(255,255,255,.6)
}
.toolBarBtns:active {
	color:rgba(255,255,255,.8)
}
#iconPin {
	position:absolute;
	transform:rotate(35deg)
}
.nbSwitch {
	position:absolute;
	width:24px;
	height:20px;
	left:50%;
	cursor:pointer
}
.nbSwitch .current {
	background-color:rgba(255,255,255,.5)
}
.nbSwitch span {
	position:absolute;
	width:20px;
	height:4px;
	top:8px;
	left:2px;
	background-color:rgba(255,255,255,.3);
	transition:all .25s;
	border-radius:3px
}
.nbSwitch:hover span {
	background-color:rgba(255,255,255,.5)
}
.nbSwitch:active span {
	background-color:#70c000
}
#nbSwitch0 {
	margin-left:-25px
}
#nbSwitch1 {
	margin-left:-25px
}
#nbSwitch2 {
	margin-left:1px
}
td {
	word-break:keep-all
}
.nav_links {
	text-align:center;
	text-decoration:none;
	color:#fff;
	font-size:small;
	background-color:transparent;
	padding-top:8px;
	padding-bottom:8px;
	padding-left:30px;
	padding-right:30px;
	margin:14.6px;
	margin-top:0;
	margin-bottom:5px;
	float:left;
	cursor:pointer;
	transition:all .25s;
	border-radius:20px
}
#newNavLink {
	opacity:1
}
a.nav_links:link,a.nav_links:visted {
	color:#fff;
	background-color:transparent
}
a.nav_links:hover {
	color:#70c000;
	background-color:rgba(255,255,255,.1)
}
a.nav_links:active {
	color:#70c000;
	background-color:rgba(255,255,255,.2)
}
#nav_function {
	float:none
}
.navboxCustom {
	  height: 100%;
    margin: 0 auto;
    max-width: 660px;
    text-align: left;
    color: #fff;
    font-size: 0;
    overflow-y: auto;
    transition: all .25s;
}
.customNav {
	position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 25px;
    margin-top: 10px;
    margin-bottom: 40px;
    border-radius: 10px;
    text-align: center;
    background-color: #cdcdcd;
    cursor: pointer;
    transition: background-color .35s;
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
.cusNavTitle{
bottom: -25px;
    color: #fff;
    font-size: 10px;
    left: 5%;
    overflow: hidden;
    position: absolute;
    text-align: center;
    text-overflow: ellipsis;
    transition: all .25s;
    white-space: nowrap;
		width: 90%;
}
.cusNavIcon{
	width: 26px;
    height: 26px;
    margin-top: -2px;
    margin-left: -2px;
    border-radius: 0;
    font-size: 26px;
}
</style>