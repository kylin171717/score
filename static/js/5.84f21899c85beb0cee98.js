webpackJsonp([5],{UkDw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("ksHv");var s=n("njuB"),a=n.n(s),o=(n("wvM5"),n("MyDk")),r=n.n(o),i={watch:{$route:function(t,e){}},components:{"vehicle-header":n("teIl").a,"van-field":r.a,"van-divider":a.a},data:function(){return{codeImgSrc:"",type:"pw",smsBtnDisabled:!1,smsBtnName:"发送验证码",loading:!1,userQuery:{account:"",password:"",phone:"",smsCode:"",token:""},userData:null}},created:function(){},methods:{onTypeSelect:function(t){this.type=t},sendSMSCode:function(){if(null===this.userQuery.account.match("^1+[0-9]{10,10}$"))return this.$toast("请输入正确的手机号");var t=this;this.zone.getSMSCode(this.userQuery.account).then(function(e){200==e.status&&200==e.data.status&&(t.userQuery.phone=t.userQuery.account,t.userQuery.token=e.data.data.token,t.$toast("短信验证码已发送"),t.smsBtnDisabled=!0,t.smsSendTime(61,function(e){e>0&&t.userQuery.account==t.userQuery.phone?t.smsBtnName="重新发送("+e+")":(t.smsBtnName="发送验证码",t.smsBtnDisabled=!1)}))})},login:function(){"pw"==this.type?this.userLogin():this.phoneLogin()},userLogin:function(){var t=this;return""==this.userQuery.account||""==this.userQuery.account.trim()?this.$toast("请输入用户名"):""==this.userQuery.password||""==this.userQuery.password.trim()?this.$toast("请输入密码"):(this.loading=!0,void this.zone.userLogin(this.userQuery.account,this.userQuery.password).then(function(e){t.loading=!1,t.$toast(e.data.message),200==e.status&&200==e.data.status&&t.$router.push("/")}))},phoneLogin:function(){var t=this;return null===this.userQuery.account.match("^1+[0-9]{10,10}$")?this.$toast("请输入正确的手机号"):null===this.userQuery.smsCode.match("^[0-9]{6,6}$")?this.$toast("请输入正确的短信验证码"):(this.loading=!0,void this.zone.phoneLogin(this.userQuery.account,this.userQuery.smsCode,this.userQuery.token).then(function(e){t.loading=!1,t.$toast(e.data.message),200==e.status&&200==e.data.status&&t.$router.push("/")}))},smsSendTime:function(t,e){var n=this;--t>0&&setTimeout(function(){n.smsSendTime(t,e)},1e3),e(t)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("vehicle-header",{attrs:{noSearch:"",back:!1,title:"查分助手"}}),t._v(" "),n("h2",[t._v("帐号登陆")]),t._v(" "),t._m(0),t._v(" "),"pw"==t.type?n("div",{staticClass:"login-input"},[n("van-cell-group",{attrs:{inset:""}},[n("van-field",{attrs:{size:"large",placeholder:"请输入帐号",type:"text",label:"帐号"},model:{value:t.userQuery.account,callback:function(e){t.$set(t.userQuery,"account",e)},expression:"userQuery.account"}}),t._v(" "),n("van-field",{attrs:{size:"large",placeholder:"请输入密码",type:"password",label:"密码"},scopedSlots:t._u([{key:"button",fn:function(){},proxy:!0}],null,!1,804099711),model:{value:t.userQuery.password,callback:function(e){t.$set(t.userQuery,"password",e)},expression:"userQuery.password"}})],1),t._v(" "),n("br"),t._v(" "),n("p",{staticStyle:{"text-decoration":"underline",color:"red"},on:{click:function(e){return t.onTypeSelect("sms")}}},[t._v("短信验证码登录")])],1):n("div",{staticClass:"login-input"},[n("van-cell-group",{attrs:{inset:""}},[n("van-field",{attrs:{size:"large",placeholder:"请手机号码",type:"text",label:"手机号"},model:{value:t.userQuery.account,callback:function(e){t.$set(t.userQuery,"account",e)},expression:"userQuery.account"}}),t._v(" "),n("van-field",{attrs:{size:"large",placeholder:"请输短信验证码",type:"",label:"验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[n("van-button",{attrs:{size:"mini","native-type":"button",disabled:t.smsBtnDisabled,type:"primary"},on:{click:t.sendSMSCode}},[t._v(t._s(t.smsBtnName))])]},proxy:!0}]),model:{value:t.userQuery.smsCode,callback:function(e){t.$set(t.userQuery,"smsCode",e)},expression:"userQuery.smsCode"}})],1),t._v(" "),n("br"),t._v(" "),n("p",{staticStyle:{"text-decoration":"underline",color:"red"},on:{click:function(e){return t.onTypeSelect("pw")}}},[t._v("密码登录")])],1),t._v(" "),n("div",{staticClass:"login-btn"},[n("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{block:"",type:"info"},on:{click:function(e){return t.login()}}},[t._v("登陆")]),t._v(" "),n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{disabled:"",block:"",loading:"",type:"info","loading-text":"正在登陆..."}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-logo"},[e("img",{attrs:{src:n("7Otq")}})])}]};var u=n("VU/8")(i,c,!1,function(t){n("zBxL")},"data-v-33e4cf32",null);e.default=u.exports},cuWE:function(t,e){},f4Ia:function(t,e){},ksHv:function(t,e,n){n("XqYu"),n("f4Ia")},njuB:function(t,e,n){"use strict";var s=n("R6lU");e.__esModule=!0,e.default=void 0;var a=s(n("AA6R")),o=n("VxeN"),r=n("qOQ7"),i=(0,o.createNamespace)("divider"),c=i[0],u=i[1];function l(t,e,n,s){var o;return t("div",(0,a.default)([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:u((o={dashed:e.dashed,hairline:e.hairline},o["content-"+e.contentPosition]=n.default,o))},(0,r.inherit)(s,!0)]),[n.default&&n.default()])}l.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}};var d=c(l);e.default=d},teIl:function(t,e,n){"use strict";n("jydU");var s=n("WQwN"),a=n.n(s),o=(n("tcuZ"),n("iMPx")),r={props:{back:{type:Boolean,default:!0},title:"",iconName:"",iconTo:"",rightText:"",backPath:"",noSearch:{type:Boolean,default:!1},isSearch:{type:Boolean,default:!0},rightClick:{type:Function,default:function(){}}},data:function(){return{search:{word:""}}},components:{"van-nav-bar":n.n(o).a,"van-icon":a.a},methods:{_back:function(){if(this.backPath)return this.$router.push({path:this.backPath});this.$router.go(this.backPath||-1)},onClickRight:function(){void 0==this.iconTo||""==this.iconTo?this.$emit("iconClick"):this.$router.push({path:this.iconTo})},onSearch:function(){this.$emit("querySearch",this.search)},onCancel:function(){this.$emit("cancelSearch")}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.back?n("van-nav-bar",{staticClass:"v-nav-bar",staticStyle:{"border-bottom":"1px solid #f1f1f1"},attrs:{title:t.title,fixed:"","left-arrow":"","right-text":t.rightText},on:{"click-left":t._back,"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:t.iconName,color:"grey",size:"20"}})]},proxy:!0}],null,!1,2361510147)}):n("van-nav-bar",{staticStyle:{"border-bottom":"1px solid #f1f1f1"},attrs:{fixed:"",title:t.title}}),t._v(" "),0==t.noSearch?n("form",{staticClass:"search",attrs:{action:"/"}},[t.isSearch?n("van-search",{attrs:{shape:"round","show-action":"",background:"#4fc08d",placeholder:"请输入搜索关键词"},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.search.word,callback:function(e){t.$set(t.search,"word",e)},expression:"search.word"}}):n("div",{staticStyle:{height:"54px",background:"#4fc08d"}})],1):t._e(),t._v(" "),n("div",{style:t.noSearch?"height:47px;":"height:101px;"})],1)},staticRenderFns:[]};var c=n("VU/8")(r,i,!1,function(t){n("cuWE")},"data-v-155d212a",null);e.a=c.exports},zBxL:function(t,e){}});
//# sourceMappingURL=5.84f21899c85beb0cee98.js.map