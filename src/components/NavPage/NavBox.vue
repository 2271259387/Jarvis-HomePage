<template>
  <div >
    <div class="navbox" ref="navbox" @click="navboxClick($event.target)">
      <div class="navbox0" id="navbox0" >
				<div class="navboxes" id="navbox1" ref="navbox1">
						<div class="navboxCustom shouldNotFade">
							<div class="presetNavArea shouldNotFade">
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
								<div class="customNav shouldNotFade" @click="$parent.showPop($parent.popBg)">
									<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(147, 106, 209);">&#xe60b;</i><div class="cusNavTitle shouldNotFade">壁纸</div>
								</div>
								<div class="customNav shouldNotFade">
									<i class="iconfont cusNavIcon shouldNotFade" style="color: rgb(237, 149, 43);">&#xe65a;</i><div class="cusNavTitle shouldNotFade">主题</div>
								</div>
							</div>
							<div class="customNav shouldNotFade shouldNotSwitch" @click='cusNavClick($event,this)'>
								<i class="iconfont cusNavIcon shouldNotFade" >&#xe6da;</i><div class="cusNavTitle shouldNotFade"></div>
							</div>
						</div>
				</div>
				<div class="navboxes" id="navbox2" ref="navbox2">
				<span class="shouldNotFade" id="noteListWrap" ref="noteListWrap">
				<span class="shouldNotFade" id="noteList" ref="noteList">
				<div class="noteItem shouldNotFade" @click="newNote()">
				<i class="iconfont shouldNotFade" id="iconAdd">&#xe7e8;</i><span class="noteTitle shouldNotFade" id="noteTitle0">新便笺</span>
				</div>
				</span>
				</span>
				<textarea class="shouldNotFade" id="textNote" ref="textNote" placeholder="在此键入以创建新的便笺" @input="saveNote()"></textarea>
				<div class="shouldNotFade" id="noteToolBar" ref="noteToolBar">
				<span class="toolBarBtns" id="btnDelNote" title="删除便笺" @click="delNote()"><i class="iconfont shouldNotFade">&#xe614;</i></span>
				<span class="toolBarBtns" id="btnPinNote" title="固定便笺到主屏幕" @click="pinNote()"><i class="iconfont shouldNotFade" id="iconPin">&#xe849;</i></span>
				</div>
				</div>
      </div>
			<div class="navboxSwitch">
			<span class="nbSwitch shouldNotFade" id="nbSwitch1" ref="nbSwitch1" @click="nbSwitch1_Click()"><span class="shouldNotFade current" ref="nbSwitch1_0"></span></span>
			<span class="nbSwitch shouldNotFade" id="nbSwitch2" ref="nbSwitch2" @click="nbSwitch2_Click()"><span class="shouldNotFade" ref="nbSwitch2_0"></span></span>
			</div>
    </div>
  </div>
</template>

<script>

export default {
	name: "NavBox",
	data() {
		return {
			currentNoteIsNew: true,
			currentNoteIsNew: "",
			currentEditingNote: "",
			currentTime: ""
		}
	},
  components: {

	},
	mounted() {
		this.currentTime = this.$parent.$parent.currentTime
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
				this.$parent.hideMenu(this.$parent.$refs.menuSettings)
				c0.style.display = "none"
				n1.style.opacity = "0";
				m.style.display = "";
				this.$parent.$refs.btnUser.style.opacity = "0";
				this.$parent.$refs.btnSettings.style.opacity = "0";
				setTimeout(() => {
					n1.style.display = "none";
					this.$parent.$refs.btnUser.style.display = "none";
					this.$parent.$refs.btnSettings.style.display = "none";
					n1.style.opacity = "";
					this.$parent.$refs.btnUser.style.opacity = "";
					this.$parent.$refs.btnSettings.style.opacity = "";
				},
				250);
			 }
      },
      cusNavClick(e, obj) {
			if (currentEditingNav != obj) {
				currentEditingNav = obj;
				frmSetCustomNav.style.left = e.clientX - 150 + "px";
				frmSetCustomNav.style.top = e.clientY - 180 + "px";
				frmSetCustomNav.style.display = "block";
				setTimeout(() => {
					frmSetCustomNav.style.opacity = "1";
					frmSetCustomNav.style.transform = "scale(1.05)";
				},
				50);
				setTimeout(() => frmSetCustomNav.style.transform = "scale(1)", 300);
			} else {
				this.closeFrmCusNav();
				currentEditingNav = "";
			}
		},
		 newNote() {
			this.$refs.noteToolBar.style.display = "none";
			if (document.getElementById("noteItem" + this.currentEditingNote) != undefined) {
				document.getElementById("noteItem" + this.currentEditingNote).classList.remove("current");
			}
			this.currentNotes = Number(this.currentNotes) + 1;
			this.currentEditingNote = Number(this.$refs.noteList.lastElementChild.id.replace("noteItem", "")) + 1;
			this.currentNoteIsNew = true;
			this.$refs.textNote.value = "";
			this.$refs.textNote.focus();
			this.currentNotes = Number(this.currentNotes) - 1;
			this.currentEditingNote = Number(this.$refs.noteList.lastElementChild.id.replace("noteItem", "")) - 1;
		},
		 openNote(obj) {
			if (document.getElementById("noteItem" + this.currentEditingNote) != undefined) {
				document.getElementById("noteItem" + this.currentEditingNote).classList.remove("current");
			}
			this.currentNoteIsNew = false;
			this.currentEditingNote = obj.id.replace("noteItem", "");
			this.$refs.textNote.value = localStorage.getItem("note" + this.currentEditingNote);
			this.$refs.noteToolBar.style.display = "block";
			document.getElementById("noteItem" + this.currentEditingNote).classList.add("current");
		},
		 noteChanged() {
			if (this.$refs.textNote.value != "" && this.$refs.noteListWrap.style.left != "0px") {
				this.$refs.textNote.style.left = "200px";
				this.$refs.textNote.style.width = "460px";
				this.$refs.noteListWrap.style.left = "0px";
				this.$refs.noteToolBar.style.display = "block";
				this.newNote()
			}
			if (this.$refs.textNote.value != "" && this.currentNoteIsNew == true) {
				this.currentNotes = Number(this.currentNotes) + 1;
				this.currentEditingNote = Number(this.$refs.noteList.lastElementChild.id.replace("noteItem", "")) + 1;
				var newNoteDiv = document.createElement("div");
				newNoteDiv.className = "noteItem";	
				newNoteDiv.classList.add("shouldNotFade");
				newNoteDiv.classList.add("current");
				newNoteDiv.id = "noteItem" + this.currentEditingNote;
				newNoteDiv.onclick = function() {
					openNote(this)
				}
				var newNoteSpan1 = document.createElement("span");
				newNoteSpan1.className = "noteTitle";
				newNoteSpan1.classList.add("shouldNotFade");
				newNoteSpan1.id = "noteTitle" + this.currentEditingNote;
				var newbr = document.createElement("br")
				var newNoteSpan2 = document.createElement("span");
				newNoteSpan2.className = "noteTime";
				newNoteSpan2.classList.add("shouldNotFade");
				newNoteSpan2.id = "noteTime" + this.currentEditingNote;
				newNoteDiv.appendChild(newNoteSpan1);
				newNoteDiv.appendChild(newbr);
				newNoteDiv.appendChild(newNoteSpan2);
				this.$refs.noteList.appendChild(newNoteDiv);
				this.$refs.noteList.scrollTop = this.$refs.noteList.clientHeight;
				localStorage.setItem("currentNotes", this.currentNotes);
				localStorage.setItem("maximumNoteNumber", this.currentEditingNote);
				this.$refs.noteToolBar.style.display = "block";
				this.currentNoteIsNew = false;
			}
			if (this.$refs.textNote.value == "" && this.currentNotes == "1" && this.$refs.noteListWrap.style.left == "0px") {
				this.$refs.textNote.style.left = "0px";
				this.$refs.textNote.style.width = "660px";
				this.$refs.noteListWrap.style.left = "-200px";
				this.$refs.noteToolBar.style.display = "none";
			}
			if (this.$refs.textNote.value == "") {
				this.$refs.noteList.removeChild(document.getElementById("noteItem" + this.currentEditingNote));
				this.currentNotes = Number(this.currentNotes) - 1;
				this.currentNoteIsNew = true;
				localStorage.setItem("currentNotes", this.currentNotes);
				localStorage.setItem("maximumNoteNumber", Number(this.$refs.noteList.lastElementChild.id.replace("noteItem", "")));
				this.$refs.noteToolBar.style.display = "none";
			}
			if (document.getElementById("noteTitle" + this.currentEditingNote) != undefined) {
				document.getElementById("noteTitle" + this.currentEditingNote).innerText = this.$refs.textNote.value;
				document.getElementById("noteTime" + this.currentEditingNote).innerText = this.currentTime;
			}
			// if (this.currentEditingNote == pinnedNoteNum) {
			// 	pinnedNoteContent.innerText = textNote.value;
			// 	pinnedNoteTime.innerText = currentTime;
			// }
			// if (this.currentEditingNote == pinnedNoteNum && textNote.value == "") {
			// 	unpinNote();
			// }
		},
		 saveNote() {
			this.noteChanged();
			if (this.$refs.textNote.value != "") {
				localStorage.setItem("note" + this.currentEditingNote, this.$refs.textNote.value);
				localStorage.setItem("noteTime" + this.currentEditingNote, this.currentTime);
			} else {
				localStorage.removeItem("note" + this.currentEditingNote);
				localStorage.removeItem("noteTime" + this.currentEditingNote);
			}
		},
			delNote() {
				if (confirm("删除这条便笺？")) {
					this.$refs.textNote.value = "";
					this.saveNote();
				}
			},
			// pinNote() {
			// 	pinnedNoteContent.innerText = textNote.value;
			// 	pinnedNoteTime.innerText = document.getElementById("noteTime" + currentEditingNote).innerText;
			// 	pinnedNoteNum = currentEditingNote;
			// 	localStorage.setItem("pinnedNoteNum", currentEditingNote);
			// 	showPinnedNote();
			// },
    	nbSwitch1_Click() {
			if (this.$refs.navbox1.style.left != "0px") {
				this.$refs.nbSwitch2_0.classList.remove("current");
				this.$refs.nbSwitch1_0.classList.add("current");
				this.navboxScale0();
				setTimeout(() => {
					this.$refs.navbox1.style.left = "0px";
					this.$refs.navbox2.style.left = "100%";
				}, 250);
				setTimeout(() => this.navboxScale1(), 500);
			}
		},
			nbSwitch2_Click() {
			if (this.$refs.navbox2.style.left != "0px") {
				this.$refs.nbSwitch1_0.classList.remove("current");
				this.$refs.nbSwitch2_0.classList.add("current");
				this.navboxScale0();
				setTimeout(() => {
					this.$refs.navbox1.style.left = "-100%";
					this.$refs.navbox2.style.left = "0px";
				}, 250);
				setTimeout(() => this.navboxScale1(), 500);
			}
		},
		  navboxScale0() {
			this.$refs.navbox1.style.transform = "scale(0.9)";
			this.$refs.navbox2.style.transform = "scale(0.9)";
		},
 			navboxScale1() {
			this.$refs.navbox1.style.transform = "scale(1)";
			this.$refs.navbox2.style.transform = "scale(1)";
		}
  }
}
</script>

<style scoped lang="scss">
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
	width:690px;
	height:250px;
	overflow:hidden;
	@media screen and (max-width:600px) {
		width:100%;
		left:0;
		margin-left:0;
		margin-top:170px
	}
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
	height:100%;
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
	top:500px;
	@media screen and (max-width:1370px) {
		top:auto;
	bottom:100px
	}
}
.navboxTmp {
	bottom:200px
}

#noteListWrap {
	position:absolute;
	left:-200px;
	width:190px;
	height: 237.32px;
	overflow:hidden;
	border-radius:15px;
	transition:all .25s;
	-webkit-backdrop-filter:blur(30px);
	backdrop-filter:blur(30px)
}
#noteList {
	position:absolute;
	width:222px;
	height: 237.32px;
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
    position: absolute;
    left: 0px;
    width: 660px;
    height: calc(100vh - 370px);
    color: black;
    font-family: "microsoft yahei light", "microsoft yahei", Helvetica, sans-serif, 等线;
    font-size: small;
    background-color: rgba(255,255,255,.6);
    resize: none;
    padding: 10px 10px 10px 20px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    border-radius: 15px;
		transition: all 0.25s ease 0s;
		@media screen and (max-width:600px) {
			left:5%;
      width:90%
		}
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

.navboxCustom {
	  height: 100%;
    margin: 0 auto;
    max-width: 660px;
    text-align: left;
    color: #fff;
    font-size: 0;
    overflow-y: auto;
		transition: all .25s;
		@media screen and (max-width:600px) {
			left:5%;
      margin-left:0;
      width:90%
		}
		@media screen and (min-width:600px) and (max-width:900px) {
			margin-left:-250px;
			width:500px
		}
		@media screen and (max-height:600px) {
			bottom:110px
		}
		@media screen and (max-height:550px) {
			display:none
		}
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
		@media screen and (max-width:600px){
			width:20%
		}
		@media screen and (min-width:600px) and (max-width:900px) {
			width:20%
		}
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
.presetNavArea .cusNavIcon{
	width: 26px;
    height: 26px;
    margin-top: -13px;
    margin-left: -13px;
    border-radius: 0;
    font-size: 26px;
}
.cusNavIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    margin-left: -12px;
    border: none;
    border-radius: 3px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .25s;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
}
</style>