webpackJsonp([6],{"U+pJ":function(t,e){},"i/Eh":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("jydU");var s=o("WQwN"),n=o.n(s),a=(o("2PSJ"),o("A9fu")),r={components:{"van-tag":o.n(a).a,"van-icon":n.a},created:function(){var t=this.$store.getters.getUserInfo();void 0!=t.nickName&&(this.userInfo.nickName=t.nickName),void 0!=t.userCode&&(this.userInfo.userCode=t.userCode),void 0!=t.schoolName&&(this.userInfo.schoolName=t.schoolName),void 0!=t.studentName&&(this.userInfo.studentName=t.studentName),this.headerIcon="@/assets/logo.png"},data:function(){return{userInfo:{nickName:"",userCode:"",schoolName:"",studentName:""},headerIcon:"",list:[{text:"我的消息",icon:"chat-o",path:"",color:"#0ebf8f"},{text:"更改密码",icon:"envelop-o",path:"",color:"#e00b9c"},{text:"检查更新",icon:"user-circle-o",path:"",color:"#FF9800"},{text:"关于我们",icon:"user-circle-o",path:"",color:"#FF9800"},{text:"安全退出",icon:"cash-back-record",path:"/login",color:"#03A9F4",group:!0}]}},methods:{link:function(t){if(!t.path)return this.$toast("没有配置好path");"/login"==t.path&&this.zone.userLogout(),console.log("跳转到"+t.path),this.$router.push({path:t.path})}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user-info"},[o("div",{staticClass:"info"},[t._m(0),t._v(" "),o("div",[o("p",[t._v(t._s(t.userInfo.nickName))]),t._v(" "),o("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.userInfo.userCode))]),t._v(" "),o("van-tag",{attrs:{plain:"",type:"primary"}},[t._v(t._s(t.userInfo.schoolName))]),t._v(" "),o("van-tag",{attrs:{plain:"",type:"success"}},[t._v(t._s(t.userInfo.studentName))])],1)]),t._v(" "),o("div",{staticClass:"list"},t._l(t.list,function(e,s){return o("div",{key:s,staticClass:"row",class:{group:e.group},on:{click:function(o){return t.link(e)}}},[o("div",{staticClass:"text"},[o("van-icon",{attrs:{color:e.color,name:e.icon}}),t._v("\n        "+t._s(e.text)+"\n      ")],1),t._v(" "),o("div",[o("van-icon",{attrs:{name:"arrow"}})],1)])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:o("7Otq")}})])}]};var c=o("VU/8")(r,i,!1,function(t){o("U+pJ")},"data-v-ddfd086a",null);e.default=c.exports}});
//# sourceMappingURL=6.fd6082151c701dfa24db.js.map