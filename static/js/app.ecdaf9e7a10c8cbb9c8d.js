webpackJsonp([8],{"+V+a":function(t,e){},"+Xq4":function(t,e){},"+ed2":function(t,e){},"+j82":function(t,e){!function(){if("undefined"!=typeof window){var t,e="ontouchstart"in window;document.createTouch||(document.createTouch=function(t,e,r,a,o,s,i){return new n(e,r,{pageX:a,pageY:o,screenX:s,screenY:i,clientX:a-window.pageXOffset,clientY:o-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var t=a(),e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length=arguments.length,t}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var n=function(t,e,n,r,a){r=r||0,a=a||0,this.identifier=e,this.target=t,this.clientX=n.clientX+r,this.clientY=n.clientY+a,this.screenX=n.screenX+r,this.screenY=n.screenY+a,this.pageX=n.pageX+r,this.pageY=n.pageY+a},r=!1;u.multiTouchOffset=75,e||new u}function a(){var t=[];return t.item=function(t){return this[t]||null},t.identifiedTouch=function(t){return this[t+1]||null},t}function o(e){return function(n){var a,o,u;("mousedown"===n.type&&(r=!0),"mouseup"===n.type&&(r=!1),"mousemove"!==n.type||r)&&(("mousedown"===n.type||!t||t&&!t.dispatchEvent)&&(t=n.target),null==t.closest("[data-no-touch-simulate]")&&(a=e,o=n,(u=document.createEvent("Event")).initEvent(a,!0,!0),u.altKey=o.altKey,u.ctrlKey=o.ctrlKey,u.metaKey=o.metaKey,u.shiftKey=o.shiftKey,u.touches=i(o),u.targetTouches=i(o),u.changedTouches=s(o),t.dispatchEvent(u)),"mouseup"===n.type&&(t=null))}}function s(e){var r=a();return r.push(new n(t,1,e,0,0)),r}function i(t){return"mouseup"===t.type?a():s(t)}function u(){window.addEventListener("mousedown",o("touchstart"),!0),window.addEventListener("mousemove",o("touchmove"),!0),window.addEventListener("mouseup",o("touchend"),!0)}}()},"/SKB":function(t,e){},0:function(t,e){},"0+S2":function(t,e){},"0DIp":function(t,e){},"0Udj":function(t,e){},"0Y+T":function(t,e){},"8a0f":function(t,e){},"9NA7":function(t,e){},"9S6h":function(t,e){},"9fCr":function(t,e){},CNiB:function(t,e){},"D+QW":function(t,e){},HZoF:function(t,e){},KOkH:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("tAVL");var r=n("z90b"),a=n.n(r),o=(n("xisQ"),n("SBrL")),s=n.n(o),i=(n("uvlK"),n("lxre")),u=n.n(i),c=(n("dlG5"),n("MpXg")),l=n.n(c),h=(n("OMF1"),n("Maz4")),d=n.n(h),f=(n("jydU"),n("WQwN")),p=n.n(f),g=(n("9ULi"),n("lQdh")),m=n.n(g),v=(n("Mcfu"),n("r9aq")),y=n.n(v),x=(n("QP/A"),n("pyxX")),w=n.n(x),C=(n("cnGM"),n("S6j6")),b=n.n(C),T=(n("tcuZ"),n("iMPx")),A=n.n(T),S=(n("FDxC"),n("w+oK")),k=n.n(S),E=(n("GKy3"),n("4vvA")),B=n.n(E),D=(n("tLo2"),n("blRl")),U=n.n(D),M=(n("2PSJ"),n("A9fu")),I=n.n(M),X=(n("wvM5"),n("MyDk")),$=n.n(X),R=(n("MHRi"),n("6xqC")),L=n.n(R),Y=(n("Rv11"),n("TMdk")),G=n.n(Y),P=(n("dL9u"),n("L00R")),N=n.n(P),j=(n("jgNZ"),n("syWm")),q=n.n(j),z=(n("dKGA"),n("kSul")),F=n.n(z),O=(n("CCOf"),n("rrcz")),K=n.n(O),V=(n("3evy"),n("Irlo")),_=n.n(V),W=(n("i9vB"),n("Mqtp")),Z=n.n(W),H=(n("pLKN"),n("mZJz")),J=n.n(H),Q=(n("uTM9"),n("Jq84")),tt=n.n(Q),et=(n("ZV4y"),n("fcGX")),nt=n.n(et),rt=n("7+uW"),at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{"u-app":this.uapp},attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var ot=n("VU/8")({name:"App",data:function(){return{uapp:!1}}},at,!1,function(t){n("oXHB")},null,null).exports,st=n("/ocq");rt.default.use(st.a);var it=new st.a({routes:[{path:"/",name:"Home",component:function(){return n.e(3).then(n.bind(null,"xkS0"))},redirect:"/index",meta:{keepAlive:!0},children:[{path:"/index",name:"index",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"mlqX"))},meta:{keepAlive:!0}},{path:"/exam",name:"exam",component:function(){return n.e(1).then(n.bind(null,"Pj63"))},meta:{keepAlive:!0}},{path:"/subject",name:"subject",component:function(){return n.e(2).then(n.bind(null,"V3Wk"))}},{path:"/user",name:"user",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"i/Eh"))},meta:{keepAlive:!0}}]},{path:"/login",name:"login",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"UkDw"))},meta:{anonymous:!0}}]}),ut=n("mtWM"),ct=n.n(ut),lt=n("7hDC"),ht=n.n(lt),dt=n("En79"),ft=n.n(dt),pt=n("PXCl"),gt=n("mtWM"),mt=n("mw3O"),vt={},yt="",xt={Version:"3.1.0"};function wt(t,e){return"my"==t?"https://szone-my.7net.cc"+e:"api"==t?"https://szone-api.7net.cc"+e:"score"==t?"https://szone-score.7net.cc"+e:void 0}function Ct(){return bt.apply(this,arguments)}function bt(){return(bt=ht()(ft.a.mark(function t(){var e,n;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("token"),t.next=3,gt.get(wt("my","/userInfo/GetUserInfo"),{headers:{Version:"3.1.0",Token:e}});case 3:return n=t.sent,console.log("---query user info---"),console.log(n),200==n.status&&200==n.data.status?(yt=e,vt=n.data.data,localStorage.setItem("userInfo",JSON.stringify(n.data.data)),console.log("---userData---"),console.log(vt)):kt(),t.abrupt("return",n);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Tt(){return(Tt=ht()(ft.a.mark(function t(e,n){var r,a;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={userCode:e,password:pt.encode(n)},console.log("---user login---"),t.next=4,gt.post(wt("my","/login"),mt.stringify(r),{headers:xt});case 4:return a=t.sent,console.log(a),200==a.status&&200==a.data.status&&(localStorage.setItem("token",a.data.data.token),a=Ct()),t.abrupt("return",a);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function At(){return(At=ht()(ft.a.mark(function t(e){var n,r;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={userCode:pt.encode(e)},t.next=3,gt.post(wt("my","/login/sendsms"),mt.stringify(n),{headers:xt});case 3:return r=t.sent,console.log("---短信验证码发送---"),console.log(r),t.abrupt("return",r);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function St(){return(St=ht()(ft.a.mark(function t(e,n,r){var a,o;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={userCode:e,verifyCode:n,token:r},console.log("---phone login---"),t.next=4,gt.post(wt("my","/login/entry"),mt.stringify(a),{headers:xt});case 4:return o=t.sent,console.log(o),200==o.status&&200==o.data.status&&(localStorage.setItem("token",o.data.data.token),o=Ct()),t.abrupt("return",o);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function kt(){yt="",localStorage.setItem("token",yt)}function Et(){return(Et=ht()(ft.a.mark(function t(){var e,n;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={studentName:vt.studentName,schoolGuid:vt.schoolGuid},t.next=3,gt.get(wt("score","/exam/getExamCount?")+mt.stringify(e),{headers:{Version:"3.1.0",Token:yt}});case 3:n=t.sent,console.log("----get exam count---"),console.log(n);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Bt(){return(Bt=ht()(ft.a.mark(function t(e,n){var r,a;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={grade:vt.grade,rows:e,startIndex:n,schoolGuid:vt.schoolGuid,studentName:vt.studentName},console.log("token:"+yt),console.log(r),t.next=5,gt.get(wt("score","/exam/getClaimExams?")+mt.stringify(r),{headers:{Version:"3.1.0",Token:yt}});case 5:return 200!=(a=t.sent).status&&kt(),console.log("----get exam list---"),console.log(a),t.abrupt("return",a);case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Dt(){return(Dt=ht()(ft.a.mark(function t(e){var n,r,a;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),n={examGuid:e.examGuid,studentCode:e.studentCode,schoolGuid:e.schoolGuid,grade:e.gradeCodeString,ruCode:e.ruCode},r={Version:"3.1.0",Token:yt,"Content-Type":"application/x-www-form-urlencoded"},t.next=5,gt.post(wt("score","/Question/Subjects"),mt.stringify(n),{headers:r});case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Ut(){return(Ut=ht()(ft.a.mark(function t(e,n,r){var a,o,s;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={schoolGuid:e.schoolGuid,studentCode:e.studentCode,studentName:vt.studentName,grade:e.gradeCodeString,ruCode:e.ruCode,examGuid:e.examGuid,examSchoolGuid:n.schoolGuid,examType:n.examType,subject:r.km,compareClassAvg:r.compareClassAvg},o={Version:"3.1.0",Token:yt,"Content-Type":"application/x-www-form-urlencoded"},t.next=4,gt.post(wt("score","/Question/SubjectGrade"),mt.stringify(a),{headers:o});case 4:return s=t.sent,t.abrupt("return",s);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Mt(){return(Mt=ht()(ft.a.mark(function t(e,n,r){var a,o,s;return ft.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={asiresponse:r.question.asiresponse,examGuid:e.examGuid,srcSubject:r.srcKM,studentName:vt.studentName,ruCode:e.ruCode,scoreStatus:"-1",schoolGuid:e.schoolGuid},o={Version:"3.1.0",Token:yt,"Content-Type":"application/x-www-form-urlencoded"},t.next=4,gt.post(wt("score","/Question/AnswerCardUrl"),mt.stringify(a),{headers:o});case 4:return s=t.sent,t.abrupt("return",s);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}var It={loadInfo:function(){yt=localStorage.getItem("token"),vt=JSON.parse(localStorage.getItem("userInfo"))},isLogin:function(){return!(""==yt)},queryUserInfo:Ct,getSMSCode:function(t){return At.apply(this,arguments)},getUserData:function(){return vt},userLogin:function(t,e){return Tt.apply(this,arguments)},phoneLogin:function(t,e,n){return St.apply(this,arguments)},userLogout:kt,queryExamCount:function(){return Et.apply(this,arguments)},queryExamList:function(t,e){return Bt.apply(this,arguments)},querySubjectInfo:function(t){return Dt.apply(this,arguments)},querySubjectGrade:function(t,e,n){return Ut.apply(this,arguments)},queryAnswerCard:function(t,e,n){return Mt.apply(this,arguments)}},Xt=n("mw3O"),$t=n.n(Xt),Rt=n("I0MY"),Lt=n.n(Rt),Yt=n("hilY");n("+j82");rt.default.use(nt.a),rt.default.use(tt.a),rt.default.use(J.a),rt.default.use(Yt.a),rt.default.use(Z.a),rt.default.use(_.a),rt.default.use(K.a),rt.default.use(F.a),rt.default.use(q.a),rt.default.use(N.a),rt.default.use(G.a),rt.default.use(L.a),rt.default.use($.a),rt.default.use(I.a),rt.default.use(U.a),rt.default.use(B.a),rt.default.use(k.a),rt.default.use(A.a),rt.default.use(b.a),rt.default.use(w.a),rt.default.use(y.a),rt.default.use(m.a),rt.default.use(p.a),rt.default.use(d.a),rt.default.use(l.a),rt.default.use(u.a),rt.default.use(s.a),rt.default.use(a.a),rt.default.use(Lt.a),rt.default.config.productionTip=!1,rt.default.prototype.http=ct.a,rt.default.prototype.zone=It,rt.default.prototype.qs=$t.a,rt.default.prototype.user={id:0,name:"",token:0,icon:""},ct.a.defaults.baseURL="",new rt.default({el:"#app",router:it,components:{App:ot},template:"<App/>"})},OEKK:function(t,e){},PXCl:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){n.d(e,"version",function(){return r}),n.d(e,"VERSION",function(){return a}),n.d(e,"atob",function(){return M}),n.d(e,"atobPolyfill",function(){return U}),n.d(e,"btoa",function(){return y}),n.d(e,"btoaPolyfill",function(){return v}),n.d(e,"fromBase64",function(){return L}),n.d(e,"toBase64",function(){return S}),n.d(e,"utob",function(){return T}),n.d(e,"encode",function(){return S}),n.d(e,"encodeURI",function(){return k}),n.d(e,"encodeURL",function(){return k}),n.d(e,"btou",function(){return D}),n.d(e,"decode",function(){return L}),n.d(e,"isValid",function(){return Y}),n.d(e,"fromUint8Array",function(){return w}),n.d(e,"toUint8Array",function(){return X}),n.d(e,"extendString",function(){return P}),n.d(e,"extendUint8Array",function(){return N}),n.d(e,"extendBuiltins",function(){return j}),n.d(e,"Base64",function(){return q});const r="3.7.2",a=r,o="function"==typeof atob,s="function"==typeof btoa,i="function"==typeof t,u="function"==typeof TextDecoder?new TextDecoder:void 0,c="function"==typeof TextEncoder?new TextEncoder:void 0,l=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),h=(t=>{let e={};return l.forEach((t,n)=>e[t]=n),e})(),d=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,f=String.fromCharCode.bind(String),p="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),g=t=>t.replace(/=/g,"").replace(/[+\/]/g,t=>"+"==t?"-":"_"),m=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),v=t=>{let e,n,r,a,o="";const s=t.length%3;for(let s=0;s<t.length;){if((n=t.charCodeAt(s++))>255||(r=t.charCodeAt(s++))>255||(a=t.charCodeAt(s++))>255)throw new TypeError("invalid character found");o+=l[(e=n<<16|r<<8|a)>>18&63]+l[e>>12&63]+l[e>>6&63]+l[63&e]}return s?o.slice(0,s-3)+"===".substring(s):o},y=s?t=>btoa(t):i?e=>t.from(e,"binary").toString("base64"):v,x=i?e=>t.from(e).toString("base64"):t=>{let e=[];for(let n=0,r=t.length;n<r;n+=4096)e.push(f.apply(null,t.subarray(n,n+4096)));return y(e.join(""))},w=(t,e=!1)=>e?g(x(t)):x(t),C=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?f(192|e>>>6)+f(128|63&e):f(224|e>>>12&15)+f(128|e>>>6&63)+f(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return f(240|e>>>18&7)+f(128|e>>>12&63)+f(128|e>>>6&63)+f(128|63&e)},b=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,T=t=>t.replace(b,C),A=i?e=>t.from(e,"utf8").toString("base64"):c?t=>x(c.encode(t)):t=>y(T(t)),S=(t,e=!1)=>e?g(A(t)):A(t),k=t=>S(t,!0),E=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,B=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return f(55296+(e>>>10))+f(56320+(1023&e));case 3:return f((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return f((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},D=t=>t.replace(E,B),U=t=>{if(t=t.replace(/\s+/g,""),!d.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,n,r,a="";for(let o=0;o<t.length;)e=h[t.charAt(o++)]<<18|h[t.charAt(o++)]<<12|(n=h[t.charAt(o++)])<<6|(r=h[t.charAt(o++)]),a+=64===n?f(e>>16&255):64===r?f(e>>16&255,e>>8&255):f(e>>16&255,e>>8&255,255&e);return a},M=o?t=>atob(m(t)):i?e=>t.from(e,"base64").toString("binary"):U,I=i?e=>p(t.from(e,"base64")):t=>p(M(t),t=>t.charCodeAt(0)),X=t=>I(R(t)),$=i?e=>t.from(e,"base64").toString("utf8"):u?t=>u.decode(I(t)):t=>D(M(t)),R=t=>m(t.replace(/[-_]/g,t=>"-"==t?"+":"/")),L=t=>$(R(t)),Y=t=>{if("string"!=typeof t)return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},G=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),P=function(){const t=(t,e)=>Object.defineProperty(String.prototype,t,G(e));t("fromBase64",function(){return L(this)}),t("toBase64",function(t){return S(this,t)}),t("toBase64URI",function(){return S(this,!0)}),t("toBase64URL",function(){return S(this,!0)}),t("toUint8Array",function(){return X(this)})},N=function(){const t=(t,e)=>Object.defineProperty(Uint8Array.prototype,t,G(e));t("toBase64",function(t){return w(this,t)}),t("toBase64URI",function(){return w(this,!0)}),t("toBase64URL",function(){return w(this,!0)})},j=()=>{P(),N()},q={version:r,VERSION:a,atob:M,atobPolyfill:U,btoa:y,btoaPolyfill:v,fromBase64:L,toBase64:S,encode:S,encodeURI:k,encodeURL:k,utob:T,btou:D,decode:L,isValid:Y,fromUint8Array:w,toUint8Array:X,extendString:P,extendUint8Array:N,extendBuiltins:j}}.call(e,n("EuP9").Buffer)},UR9n:function(t,e){},"Uf+m":function(t,e){},V08F:function(t,e){},XqYu:function(t,e){},YAYC:function(t,e){},"Z+4s":function(t,e){},Zzpz:function(t,e){},aG1J:function(t,e){},"c/In":function(t,e){},gMie:function(t,e){},hSFT:function(t,e){},j7dL:function(t,e){},jLuM:function(t,e){},k86u:function(t,e){},ldAg:function(t,e){},"lk/p":function(t,e){},nqem:function(t,e){},oXHB:function(t,e){},s1Ps:function(t,e){},sPX0:function(t,e,n){"use strict";var r={props:{width:{type:Number,default:800},height:{type:Number,default:300},lineWidth:{type:Number,default:4},lineColor:{type:String,default:"#000000"},bgColor:{type:String,default:""},isCrop:{type:Boolean,default:!1},isClearBgColor:{type:Boolean,default:!0},format:{type:String,default:"image/png"},quality:{type:Number,default:1}},data:()=>({hasDrew:!1,resultImg:"",points:[],canvasTxt:null,startX:0,startY:0,isDrawing:!1,sratio:1}),computed:{ratio(){return this.height/this.width},stageInfo(){return this.$refs.canvas.getBoundingClientRect()},myBg(){return this.bgColor?this.bgColor:"rgba(255, 255, 255, 0)"}},watch:{myBg:function(t){this.$refs.canvas.style.background=t}},beforeMount(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy(){window.removeEventListener("resize",this.$_resizeHandler)},mounted(){const t=this.$refs.canvas;t.height=this.height,t.width=this.width,t.style.background=this.myBg,this.$_resizeHandler(),document.onmouseup=(()=>{this.isDrawing=!1})},methods:{$_resizeHandler(){const t=this.$refs.canvas;t.style.width=this.width+"px";const e=parseFloat(window.getComputedStyle(t).width);t.style.height=this.ratio*e+"px",this.canvasTxt=t.getContext("2d"),this.canvasTxt.scale(1*this.sratio,1*this.sratio),this.sratio=e/this.width,this.canvasTxt.scale(1/this.sratio,1/this.sratio)},mouseDown(t){(t=t||event).preventDefault(),this.isDrawing=!0,this.hasDrew=!0;let e={x:t.offsetX,y:t.offsetY};this.drawStart(e)},mouseMove(t){if((t=t||event).preventDefault(),this.isDrawing){let e={x:t.offsetX,y:t.offsetY};this.drawMove(e)}},mouseUp(t){(t=t||event).preventDefault();let e={x:t.offsetX,y:t.offsetY};this.drawEnd(e),this.isDrawing=!1},touchStart(t){if((t=t||event).preventDefault(),this.hasDrew=!0,1===t.touches.length){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawStart(e)}},touchMove(t){if((t=t||event).preventDefault(),1===t.touches.length){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawMove(e)}},touchEnd(t){if((t=t||event).preventDefault(),1===t.touches.length){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawEnd(e)}},drawStart(t){this.startX=t.x,this.startY=t.y,this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.lineWidth=this.lineWidth*this.sratio,this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(t)},drawMove(t){this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.strokeStyle=this.lineColor,this.canvasTxt.lineWidth=this.lineWidth*this.sratio,this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.startY=t.y,this.startX=t.x,this.points.push(t)},drawEnd(t){this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(t),this.points.push({x:-1,y:-1})},generate(t){let e=t&&t.format?t.format:this.format,n=t&&t.quality?t.quality:this.quality;return new Promise((t,r)=>{if(this.hasDrew){var a=this.canvasTxt.getImageData(0,0,this.$refs.canvas.width,this.$refs.canvas.height);this.canvasTxt.globalCompositeOperation="destination-over",this.canvasTxt.fillStyle=this.myBg,this.canvasTxt.fillRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.resultImg=this.$refs.canvas.toDataURL(e,n);var o=this.resultImg;if(this.canvasTxt.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.canvasTxt.putImageData(a,0,0),this.canvasTxt.globalCompositeOperation="source-over",this.isCrop){const t=this.getCropArea(a.data);var s=document.createElement("canvas");const r=s.getContext("2d");s.width=t[2]-t[0],s.height=t[3]-t[1];const i=this.canvasTxt.getImageData(...t);r.globalCompositeOperation="destination-over",r.putImageData(i,0,0),r.fillStyle=this.myBg,r.fillRect(0,0,s.width,s.height),o=s.toDataURL(e,n),s=null}t(o)}else r("Warning: Not Signned!")})},reset(){this.canvasTxt.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.isClearBgColor&&(this.$emit("update:bgColor",""),this.$refs.canvas.style.background="rgba(255, 255, 255, 0)"),this.points=[],this.hasDrew=!1,this.resultImg=""},getCropArea(t){for(var e=this.$refs.canvas.width,n=0,r=this.$refs.canvas.height,a=0,o=0;o<this.$refs.canvas.width;o++)for(var s=0;s<this.$refs.canvas.height;s++){var i=4*(o+this.$refs.canvas.width*s);(t[i]>0||t[i+1]>0||t[i+2]||t[i+3]>0)&&(a=Math.max(s,a),n=Math.max(o,n),r=Math.min(s,r),e=Math.min(o,e))}return[++e,++r,++n,++a]}}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"canvas",on:{mousedown:this.mouseDown,mousemove:this.mouseMove,mouseup:this.mouseUp,touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.touchEnd}})},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("ldAg")},"data-v-a1968bcc",null);e.a=o.exports},"vm/u":function(t,e){},yggM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ecdaf9e7a10c8cbb9c8d.js.map