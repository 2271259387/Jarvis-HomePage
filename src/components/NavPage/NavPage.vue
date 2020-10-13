<template>
  <div class="nav-page">
		<nav-box ref="NavBox" />
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
import {mixin} from '../Mixin/mixin.js'
import PagePop from "./PagePop"
import NavBox from "./NavBox"
export default {
	name: "NavPage",
	components: {PagePop,NavBox},
  data() {
    return {
			reduceMotion: false,
			popGeneralSettings: null,
			popBg: null,
			popDonate: null,
			popFeedback: null
    }
	},
mixins:[mixin],
  mounted() {
		this.popGeneralSettings = this.$refs.pagePop.$refs.popGeneralSettings
		this.popBg = this.$refs.pagePop.$refs.popBg
		this.popDonate = this.$refs.pagePop.$refs.popDonate
		this.popFeedback = this.$refs.pagePop.$refs.popFeedback
  },
  methods: {
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
			}
		
  }
}
</script>

<style scoped lang="scss">
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
	right:50px;
	@media screen and (max-width:600px) {
		right:20px;
      top:10px
	}
}
.btnUser {
	right:90px;
	@media screen and (max-width:600px) {
		right:60px;
      top:10px
	}
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
	transform-origin:95% 10%;
	@media screen and (max-width:600px) {
		right:60px;
      top:45px
	}
}
#menuSettings {
	right:50px;
	top:65px;
	transform-origin:95% 10%;
	@media screen and (max-width:600px) {
		right:20px;
      top:45px
	}
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
</style>