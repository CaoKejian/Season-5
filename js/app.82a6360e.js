(function(e){function s(s){for(var o,n,r=s[0],c=s[1],l=s[2],d=0,m=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&m.push(t[n][0]),t[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(s);while(m.length)m.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,s=0;s<a.length;s++){for(var i=a[s],o=!0,n=1;n<i.length;n++){var c=i[n];0!==t[c]&&(o=!1)}o&&(a.splice(s--,1),e=r(r.s=i[0]))}return e}var o={},t={app:0},a=[];function n(e){return r.p+"js/"+({Goods:"Goods",Shopcart:"Shopcart",User:"User"}[e]||e)+"."+{Goods:"de2e1643",Shopcart:"8f6cda47",User:"d1ff1631"}[e]+".js"}function r(s){if(o[s])return o[s].exports;var i=o[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var s=[],i=t[e];if(0!==i)if(i)s.push(i[2]);else{var o=new Promise((function(s,o){i=t[e]=[s,o]}));s.push(i[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=n(e);var l=new Error;a=function(s){c.onerror=c.onload=null,clearTimeout(d);var i=t[e];if(0!==i){if(i){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}t[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(s)},r.m=e,r.c=o,r.d=function(e,s,i){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)r.d(i,o,function(s){return e[s]}.bind(null,o));return i},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var d=0;d<c.length;d++)s(c[d]);var p=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,s,i){e.exports=i("56d7")},"04b3":function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU1QjBERDZGN0EzQzExRUFBQzkzQjBCNDExM0U2MUNFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU1QjBERDcwN0EzQzExRUFBQzkzQjBCNDExM0U2MUNFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTVCMERENkQ3QTNDMTFFQUFDOTNCMEI0MTEzRTYxQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTVCMERENkU3QTNDMTFFQUFDOTNCMEI0MTEzRTYxQ0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55BWaqAAAB3ElEQVR42qSVyytEURzHxzV5JHZIpDyivPKMJEVJ7GzsLTwWLDzzaDwiDGaMsBiykOylaFJEYuGZ8jcQFmRlQfn+6nvrmO7cuWN+9bnzO/ec8z2/+zu/cybC6/VW2my2FrACnm3hWTSYBGd2PHZBFmgFpeAjDOFTUAXaNDy2+DID3IKEf4peUFRsR4TnGL5YJsVjQxQ9B9X0N8GgxsYUGKOfLTlivqzYEaihvwY6xNGUAbOgk34FuLMQ+QlooD8NevQOzW/gBuiinwduQEwA0WNQR38GjKudmsEELxhRxK9BlMHn19NfAg5/ES1ANPNMjVgBxXXzKZ+/LRtlJGA3yZ9s5htYBkXc0E/QyP5FMBRosj3I5njAO39r+e4LTIAFs4mahXKSz31S2p/BRK0K+7iJuiWB+2B1biYcxROl53QYtNMvBg8gJdQcR7KGC9l2ASf9eOAGuYw8h+mxFPGpIipVMaD0SbuffjK4NArQSPhQOftSDX0GY9zKYvmsc7uZ8AFoUk5Ur8keuJTIJedXTNMfYY2rNitnf9BCxbiVxUvAI0jUBeO4Wrly9TlCuIs9rBixdN6KqSK8D8rYsa5efSGYU7m40sCeCL+CH7AKusP4v5OLaxR8g5dfAQYAJUFXq6LtWDAAAAAASUVORK5CYII="},"04bc":function(e,s,i){e.exports=i.p+"img/红白葡萄酒.c9366784.jpg"},1:function(e,s){},"18d5":function(e,s,i){"use strict";i("707e")},"1aa2":function(e,s,i){e.exports=i.p+"img/guizu.df0ad97c.jpg"},"337d":function(e,s,i){e.exports=i.p+"img/图书馆.d782e875.jpg"},"34a3":function(e,s,i){"use strict";i("7685")},"39c3":function(e,s,i){"use strict";i("c61b")},5676:function(e,s,i){e.exports=i.p+"img/culture.33de563b.jpg"},"56d7":function(e,s,i){"use strict";i.r(s);var o=i("2b0e"),t=function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"app"}},[s("Topbar",{key:e.topbarKeyValue}),s("Login",{directives:[{name:"show",rawName:"v-show",value:e.isShowLoginModal,expression:"isShowLoginModal"}]}),s("router-view"),s("transition",{attrs:{name:"fade"}},[s("Toast",{directives:[{name:"show",rawName:"v-show",value:e.isShowToast,expression:"isShowToast"}]})],1),s("Footer")],1)},a=[],n=(i("14d9"),function(){var e=this,s=e._self._c;return s("div",{staticClass:"topbar"},[s("div",{staticClass:"all"},[e._m(0),s("div",{staticClass:"rightbar"},[s("ul",{staticClass:"rightul",on:{click:function(s){return e.hdClick()}}},[s("li",{on:{click:function(s){return e.$router.push("/home")}}},[s("i",{staticClass:"iconfont icon-shouye"}),s("span",[e._v("首页")])]),s("li",{on:{click:function(s){return e.$router.push("/goods")}}},[s("i",{staticClass:"iconfont icon-31quanbushangpin"}),s("span",[e._v("全部商品")])]),s("li",{on:{click:function(s){return e.$router.push("/user")}}},[s("i",{staticClass:"iconfont icon-gerenzhongxin"}),s("span",[e._v("个人中心")])]),s("li",{on:{click:function(s){return e.$router.push("/shopcart")}}},[s("i",{staticClass:"iconfont icon-gouwuche"}),s("span",[e._v("购物车")])]),s("li",[s("button",{directives:[{name:"show",rawName:"v-show",value:!e.isLogined,expression:"!isLogined"}],staticClass:"login",on:{click:function(s){return e.chanIsShowLoginModal(!0)}}},[e._v("登陆 - login")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLogined,expression:"isLogined"}],staticClass:"input-img"},[s("img",{attrs:{src:e.userInfo.headImg,alt:""}})])])])])])])}),r=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"logoimg"},[s("a",{attrs:{href:"#"}})])}],c=i("2f62"),l=i("bc3a"),d={namespaced:!0,state:{isShowLoginModal:!1},mutations:{chanIsShowLoginModal(e,s){e.isShowLoginModal=s}},actions:{}},p={namespaced:!0,state:{isShowToast:!1,msg:"",type:""},mutations:{chanIsShowToast(e,s){e.isShowToast=s.isShow,e.msg=s.msg,e.type=s.type}},actions:{asyncChanIsShowToast(e,s){e.commit("chanIsShowToast",{isShow:!0,msg:s.msg,type:s.type}),setTimeout(()=>{e.commit("chanIsShowToast",{isShow:!1,msg:s.msg,type:s.type})},1500)}}},m={namespaced:!0,state:{isLogined:!!localStorage.getItem("x-auth-token")},mutations:{chanIsLogined(e,s){e.isLogined=s}},actions:{}},g={namespaced:!0,state:{cartTotal:0,userInfo:{headImg:i("04b3")}},mutations:{chanUserInfo(e,s){e.cartTotal=s.cartTotal,e.userInfo=s.userInfo},initUserInfo(e){e.cartTotal=0,e.userInfo={}}},actions:{async asyncChanUserInfo({commit:e}){let s=await _();e("chanUserInfo",s.data)}}};o["a"].use(c["a"]);var h=new c["a"].Store({modules:{showLoginModal:d,loginStatus:m,toastStatus:p,userInfo:g}});const u=l["a"].create({baseURL:"http://kumanxuan1.f3322.net:8881/cms",timeout:5e3});u.interceptors.request.use(e=>{let s=localStorage.getItem("x-auth-token");return s&&(e.headers["x-auth-token"]=s),e},e=>Promise.reject(e)),u.interceptors.response.use(e=>{let s=e.data;return 0!=s.code&&400!=s.code&&407!=s.code?(h.dispatch("toastStatus/asyncChanIsShowToast",{msg:s.message,type:"danger"}),!1):s},e=>(h.dispatch("toastStatus/asyncChanIsShowToast",{msg:e,type:"danger"}),Promise.reject(e)));var f=u,b=i("4328"),w=i.n(b);const v=e=>f.post("/sendSMS",w.a.stringify(e)),y=e=>f.post("/phoneRegin",w.a.stringify(e)),S=e=>f.post("/wechatUsers/PCLogin",w.a.stringify(e)),C=e=>f.post("/wechatUsers/binding",w.a.stringify(e)),_=()=>f.get("/shop/userProfiles",w.a.stringify());var I={name:"Top",data(){return{}},watch:{"$route.path":{handler(e,s){let i=localStorage.getItem("x-auth-token");this.chanIsLogined(Boolean(i)),i?this.asyncChanUserInfo():this.initUserInfo()}}},created(){this.$nextTick().then(async()=>{setTimeout(async()=>{let e=this.$route.query.code;if(e){let s=await S({code:e});0==s.code?(console.log("微信扫码登录成功"),this.asyncChanIsShowToast({msg:"登录成功!",type:"success"}),localStorage.setItem("x-auth-token",s["x-auth-token"]),this.chanIsLogined(!0),this.$router.push(this.$route.path),this.asyncChanUserInfo()):400==s.code?(this.asyncChanIsShowToast({msg:"code失效，请重新扫码",type:"warning"}),this.chanIsShowLoginModal(!0)):407==s.code&&(this.asyncChanIsShowToast({msg:"请使用手机号绑定微信",type:"warning"}),this.chanIsShowLoginModal(!0),localStorage.setItem("uuid",s.uuid))}else{let e=localStorage.getItem("x-auth-token");this.chanIsLogined(Boolean(e)),e?this.asyncChanUserInfo():this.initUserInfo()}},100)})},computed:{...Object(c["d"])({isLogined:e=>e.loginStatus.isLogined,cartTotal:e=>e.userInfo.cartTotal,userInfo:e=>e.userInfo.userInfo})},methods:{...Object(c["c"])({chanIsShowLoginModal:"showLoginModal/chanIsShowLoginModal",chanIsShowToast:"toastStatus/chanIsShowToast",chanIsLogined:"loginStatus/chanIsLogined",initUserInfo:"userInfo/initUserInfo"}),...Object(c["b"])({asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast",asyncChanUserInfo:"userInfo/asyncChanUserInfo"}),hdClick(){let e=localStorage.getItem("x-auth-token");if(e)return!1;e||this.asyncChanIsShowToast({msg:"您还没有登陆",type:"danger"})}}},x=I,j=(i("cd71"),i("2877")),k=Object(j["a"])(x,n,r,!1,null,"c8908c10",null),M=k.exports,L=function(){var e=this;e._self._c;return e._m(0)},z=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"footer"},[s("div",{staticClass:"bottombar"},[s("div",{staticClass:"smallbar"},[s("div",{staticClass:"sm-logo"}),s("span",{staticClass:"line"},[e._v("|")]),s("div",{staticClass:"sm-word"},[s("i",{staticClass:"iconfont icon-shouye1"}),s("span",[e._v("酒庄地址")])]),s("span",{staticClass:"line"},[e._v("|")]),s("div",{staticClass:"sm-word"},[s("i",{staticClass:"iconfont icon-shouye2"}),s("span",[e._v("电话：0374-8888888")])])])]),s("hr",{staticClass:"bottombar-line"}),s("div",{staticClass:"bottomword"},[s("span",[e._v(" © 2022 (SEASON-5.COM.CN), All rights reserved. ")]),s("span",[e._v(" 豫ICP备66666666号-1")]),s("span",{staticClass:"jack"},[e._v(" Designed by JacksonYao&&Cao kejian")])])])}],A={name:"Footer"},T=A,N=(i("cc94"),Object(j["a"])(T,L,z,!1,null,"af4f9ba6",null)),U=N.exports,O=function(){var e=this,s=e._self._c;return s("div",{staticClass:"login-modal"},[s("div",{staticClass:"mask",on:{click:function(s){return e.chanIsShowLoginModal(!1)}}}),s("div",{staticClass:"login-box"},[e._m(0),s("img",{staticClass:"close",attrs:{src:i("04b3"),alt:""},on:{click:function(s){return e.chanIsShowLoginModal(!1)}}}),s("ul",{staticClass:"title"},[s("li",{class:0==e.isShowForm?"login-active":"",on:{click:function(s){e.isShowForm=!1}}},[e._v("验证码登录")]),s("li",{class:1==e.isShowForm?"login-active":"",on:{click:e.weixinClick}},[e._v("扫码登录")])]),s("div",{staticClass:"body"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShowForm,expression:"!isShowForm"}],staticClass:"form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"phoneput",attrs:{type:"",name:"",placeholder:"请输入手机号"},domProps:{value:e.phoneNumber},on:{input:function(s){s.target.composing||(e.phoneNumber=s.target.value)}}}),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.SMScode,expression:"SMScode"}],attrs:{type:"",name:"",placeholder:"请输入验证码"},domProps:{value:e.SMScode},on:{input:function(s){s.target.composing||(e.SMScode=s.target.value)}}}),s("span",{staticClass:"groupbtn get-code"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.isShowCount,expression:"isShowCount"}],on:{click:e.getSMScode}},[e._v("获取验证码")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShowCount,expression:"!isShowCount"}]},[e._v(e._s(e.count)+"s后重新发送")])])]),e._m(1),s("button",{staticClass:"bodybtn",attrs:{type:""},on:{click:e.submitLogin}},[e._v(" 登陆/注册")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowForm,expression:"isShowForm"}],staticClass:"qrc",attrs:{id:"weixin"}})])])])},G=[function(){var e=this,s=e._self._c;return s("h1",[e._v("第五季节欢迎你"),s("br"),e._v("Welcome to SEASON-5")])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"userxieyi"},[s("span",[e._v("同意"),s("a",{attrs:{href:"javascript:;"}},[e._v("用户协议")]),e._v("和"),s("a",{attrs:{href:"javascript:;"}},[e._v("隐私政策")])])])}];i("b7ef");const R=e=>{let s=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;return s.test(e)};var E={name:"Login",data(){return{isShowForm:!1,phoneNumber:"",count:60,maxcount:60,isShowCount:!0,timer:null,SMScode:""}},methods:{...Object(c["c"])({chanIsShowLoginModal:"showLoginModal/chanIsShowLoginModal",chanIsLogined:"loginStatus/chanIsLogined"}),...Object(c["b"])({asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast",asyncChanUserInfo:"userInfo/asyncChanUserInfo"}),weixinClick(){this.isShowForm=!0;let e=this;new WxLogin({id:"weixin",appid:"wx67cfaf9e3ad31a0d",scope:"snsapi_login",redirect_uri:"https://sc.wolfcode.cn/cms/wechatUsers/shop/PC",state:encodeURIComponent(window.btoa("http://127.0.0.1:8080"+e.$route.path)),href:"data:text/css;base64,Lyogd3hsb2dpbi5jc3MgKi8NCi5pbXBvd2VyQm94IC50aXRsZSwgLmltcG93ZXJCb3ggLmluZm97DQogIGRpc3BsYXk6IG5vbmU7DQp9DQoNCi8qIC5pbXBvd2VyQm94IC5xcmNvZGV7DQogIG1hcmdpbi10b3A6IDIwcHg7DQp9ICov"})},countDown(){this.timer=setInterval(()=>{this.count--,0==this.count&&(clearInterval(this.timer),this.count=this.maxcount,this.isShowCount=!0)},1e3)},verifyFn(){return!!R(this.phoneNumber)||(this.asyncChanIsShowToast({msg:"请输入正确的手机号",type:"warning"}),!1)},async getSMScode(){if(!this.verifyFn())return;let e=await v({phone:this.phoneNumber});e&&(this.isShowCount=!1,this.countDown())},async submitLogin(){if(!this.verifyFn())return;if(!this.SMScode.trim())return void this.asyncChanIsShowToast({msg:"请输入正确的手机号",type:"warning"});let e=localStorage.getItem("uuid"),s=null;s=e?await C({verifyCode:this.SMScode.trim(),phone:this.phoneNumber.trim(),uuid:e}):await y({verifyCode:456,phone:15912345678}),s&&(this.asyncChanIsShowToast({msg:"登录成功!",type:"success"}),this.chanIsShowLoginModal(!1),localStorage.setItem("x-auth-token",s["x-auth-token"]),this.chanIsLogined(!0),e&&(localStorage.removeItem("uuid"),this.$router.push(this.$route.path)),this.asyncChanUserInfo())}}},D=E,Q=(i("39c3"),Object(j["a"])(D,O,G,!1,null,"a3bc5cd4",null)),B=Q.exports,F=function(){var e=this,s=e._self._c;return s("div",{staticClass:"toast"},[s("i",{staticClass:"iconfont",class:"success"==e.type?"icon-toast_chenggong":"warning"==e.type?"icon-toast-jinggao":"icon-toast-shibai_huaban"}),s("span",[e._v(e._s(e.msg))])])},Y=[],P={data(){return{}},computed:{...Object(c["d"])({msg:e=>e.toastStatus.msg,type:e=>e.toastStatus.type})}},Z=P,J=(i("34a3"),Object(j["a"])(Z,F,Y,!1,null,null,null)),V=J.exports,W=(i("bd4b"),{data(){return{topbarKeyValue:1}},watch:{"$route.path":{handler(){this.topbarKeyValue++}}},computed:{...Object(c["d"])({isShowLoginModal:e=>e.showLoginModal.isShowLoginModal,isShowToast:e=>e.toastStatus.isShowToast})},components:{Topbar:M,Footer:U,Login:B,Toast:V}}),X=W,H=(i("d302"),Object(j["a"])(X,t,a,!1,null,null,null)),K=H.exports,$=i("8c4f"),q=function(){var e=this,s=e._self._c;return s("div",{staticClass:"home"},[s("div",{staticClass:"swiper-demo"},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},e._l(e.imgArr,(function(e,i){return s("div",{key:i,staticClass:"swiper-slide"},[s("img",{attrs:{src:e.imgSrc,alt:""}})])})),0),s("div",{staticClass:"swiper-pagination"}),s("div",{staticClass:"swiper-button-prev"}),s("div",{staticClass:"swiper-button-next"})])]),s("div",{staticClass:"culture"},[e._m(0),s("hr",{staticClass:"fenge-line"}),s("div",{staticClass:"pic-kuangjia"},[s("div",{staticClass:"threepic"},e._l(e.img,(function(i,o){return o<3?s("div",{key:i.id,staticClass:"bianli"},[s("img",{attrs:{src:i.goods.img,alt:""}}),s("h3",[e._v(e._s(i.goods.name))]),s("span",[e._v(e._s(i.goods.describe))])]):e._e()})),0)]),s("hr",{staticClass:"mingjiu-line"}),s("img",{staticClass:"culture-pic",attrs:{src:i("5676"),alt:""}}),e._m(1)])])},ee=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"guizu"},[s("img",{attrs:{src:i("1aa2"),alt:""}})])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"jiu-cluture"},[s("div",{staticClass:"english"},[s("img",{attrs:{src:i("f701"),alt:""}})]),s("div",{staticClass:"container"},[s("div",{staticClass:"container-div"},[s("div",{staticClass:"span"},[s("div"),s("span",[e._v("酒是人类生活中的主要饮料之一。中国制酒历史源远流长，品种繁多，名酒荟萃，享誉中外。黄酒是世界上最古老的酒类之一，约在三千多年前，商周时代，中国人独创酒曲复式发酵法，开始大量酿制黄酒。酒渗透于整个中华五千年的文明史中，从文学艺术创作、文化娱乐到饮食烹饪、养生保健等各方面在中国人生活中都占有重要的位置。当今，酒文化的核心便是“酒民文化”。")])]),s("img",{attrs:{src:i("f3fe"),alt:""}})]),s("div",{staticClass:"container-div"},[s("div",{staticClass:"span"},[s("span",[e._v("人的酒行为更为普遍，酒与人的命运更为密切，真正的饮酒，即便是形态层面的饮酒，需要表达的也多是精神层面的内容——客从远方来，无酒不足以表达深情厚意；良辰佳节，无酒不足以显示欢快惬意；丧葬忌日，无酒不足以致其哀伤肠断；蹉跎困顿，无酒不足以消除寂寥忧伤；春风得意，无酒不足以抒发豪情壮志。总的来说，随着时代的变迁，如今中国的酒文化已渐渐演变成中国特有的政治文化、中国特有的人情文化、中国商业权利寻租文化以及中国特有的公关饭局文化。")]),s("div")]),s("img",{attrs:{src:i("337d"),alt:""}})]),s("div",{staticClass:"container-div"},[s("div",{staticClass:"span"},[s("div"),s("span",[e._v("酒文化是中华民族饮食文化的—个重要组成部分。酒是人类最古老的食物之一，它的历史几乎是与人类文化史一道开始的。自从酒出现之后，作为一种物质文化，酒的形态多种多样，其发展历程与经济发展史同步，而酒又不仅仅是一种食物，它还具有精神文化价值。作为一种精神文化它体现在社会政治生活、文学艺术乃至人的人生态度、审美情趣等诸多方面。在这个意义上讲，饮酒不是就饮酒而饮酒，它也是在饮文化。")])]),s("img",{attrs:{src:i("d194"),alt:""}})])]),s("div",{staticClass:"container-bottom"},[s("span",[e._v("葡萄和酒的象征意义在宗教上随处可见。耶稣创造的有关酒的第一个奇迹是在佳娜的婚礼上，他把水变成了美酒。耶稣说：“我是真正的葡萄，我的父亲是种植葡萄的农民。”对耶稣的门徒来说，酒是上帝之子的鲜血。在圣体圣事等仪式上，葡萄和酒受到了教士们的普遍青睐。在中世纪的艺术画中，钉在十字架上的耶稣被表现得像一串压榨机下的葡萄。直到18世纪，人们还认为喝下去的酒会在体内变成血液。在疫病流行时，所有的人都会喝酒避邪。")])])])}],se=i("41d6"),ie=(i("dfa4"),i("6fdc")),oe={name:"Home",data(){return{imgArr:[{imgSrc:i("ade4")},{imgSrc:i("a2ae")},{imgSrc:i("5bb2")},{imgSrc:i("04bc")},{imgSrc:i("b485")}],img:""}},mounted(){new se["a"](".swiper-container",{loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},coverflow:{rotate:30,stretch:10,depth:60,modifier:2,slideShadows:!0}})},async created(){const e=await ie;this.img=e}},te=oe,ae=(i("18d5"),Object(j["a"])(te,q,ee,!1,null,"4af8f35c",null)),ne=ae.exports;const re=$["a"].prototype.push;$["a"].prototype.push=function(e){return re.call(this,e).catch(e=>{})},o["a"].use($["a"]);const ce=[{path:"/",redirect:"/home"},{path:"/home",component:ne},{path:"/user",component:()=>i.e("User").then(i.bind(null,"1511"))},{path:"/goods",component:()=>i.e("Goods").then(i.bind(null,"8629"))},{path:"/shopcart",component:()=>i.e("Shopcart").then(i.bind(null,"8647"))}],le=new $["a"]({base:"",routes:ce});var de=le;i("ed2c");o["a"].config.productionTip=!1,new o["a"]({router:de,store:h,render:e=>e(K)}).$mount("#app")},"5abe":function(e,s,i){},"5bb2":function(e,s,i){e.exports=i.p+"img/外景.f45f955b.jpg"},"6fdc":function(e){e.exports=JSON.parse('[{"goods":{"id":1,"price":12780,"alcohol":13,"sales":"563","year":"2018-05-24","kinds":"红葡萄酒","ml":750,"region":"波雅克","describe":"拉菲古堡是法国1855五大一级名庄之一。自17世纪开始，拉菲古堡就不断书写着关于葡萄酒行业的神话，打造了无数葡萄酒爱好者争相追捧的佳酿。对于2016年份酒款，众多酒评家都为它打出了100分的满分评价，品质卓越。2016年份的这款酒散发着百合花、黑蔓越莓、黑醋栗和雪茄盒的美妙香气，并伴有丁香花、甘草、湿泥土和甜烟草的气息，表现出相当强大的力量感，但又不乏精妙细致的口感。其酒体饱满，单宁精细且耐嚼，结构强健而精巧，余味多汁绵长。","name":"2016年拉菲古堡红葡萄酒","img":"https://wineshopimage.wine-world.com/caebf8bd-cf6e-4e32-9bdb-42aa5b76b505.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"赤霞珠"}},{"goods":{"id":2,"price":19490,"alcohol":14,"sales":873,"year":"2017-08-24","kinds":"红葡萄酒","ml":750,"region":"玛歌","describe":"这是一款来自法国波尔多玛歌产区的红葡萄酒，产自1855五大一级庄之一的玛歌酒庄。2015年对于玛歌酒庄来说是具有历史意义的一年，为了纪念这个特殊年份和致敬酒庄已逝的总经理保罗·庞塔利尔（Paul Pontallier），酒庄为2015年份打造了特别设计的酒瓶，采用丝网印刷装饰，用线条将金色的主建筑和银白的酒窖交叠勾勒于瓶身，象征着两座建筑的相得益彰，华丽非凡。该酒酒体饱满，散发着玫瑰花瓣、醋栗、李子和一丝矿物质气息，带有黑醋栗、矿物质和花朵的风味，口感尤其丝滑，单宁结构紧实，质地细腻，初入口时香气比较含蓄，但余味无穷，陈年潜力强","name":"2015年玛歌酒庄红葡萄酒","img":"https://wineshopimage.wine-world.com/0ed9ef2d-5e8c-42b0-95a5-f0a74ef4166e.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"赤霞珠"}},{"goods":{"id":3,"price":15450,"alcohol":14,"sales":247,"year":"2011-06-29","kinds":"红葡萄酒","ml":750,"region":"波雅克","describe":"这是一款来自法国波尔多波雅克产区的红葡萄酒，产自1855一级庄——拉图酒庄。拉图酒庄在18世纪时就已声名显赫，当时法国的王室显贵和美国前总统托马斯·杰斐逊（Thomas Jefferson）都对其青睐有加。2009年的拉图酒庄红葡萄酒品质出色，获得知名酒评家罗伯特帕克（Robert Parker）、詹姆斯·萨克林（James Suckling）和杰夫·里弗（Jeff Leve）的三重满分评价。此酒散发着黑醋栗、黑樱桃和李子的成熟水果芬芳，具有草本的清新气息，且夹杂些许雪松、茴香、松露和肉干的复杂味道，并有丝丝泥土芳香点缀其间。其酒体饱满强劲，力量感十足，单宁成熟且富有颗粒，口感清新，框架出色且平衡感佳，余味多汁且极其悠长并夹杂矿物气息，陈年潜力出色。","name":"2009年拉图酒庄红葡萄酒","img":"https://wineshopimage.wine-world.com/bb3da049-aa9c-4d4a-a9f0-1ce6a59ff7bf.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"赤霞珠"}},{"goods":{"id":4,"price":12480,"alcohol":12,"sales":776,"year":"2020-07-22","kinds":"红葡萄酒","ml":750,"region":"波雅克","describe":"作为波尔多五大一级庄之一，拉菲古堡酿造的葡萄酒总能收获无数赞美之词，获得各界人士的追捧。拉菲古堡的佳酿的确有着美丽、温柔且大方的灵魂，这在其优雅、精致与细腻的葡萄酒风格上体现得淋漓尽致。2018年份的这款正牌酒呈深邃的紫红色，香气优雅而馥郁，从杯中散发紫丁香、红玫瑰、泥土与肉桂棒的气息，并伴有雪松、烟草及些许榛果和咖啡的气息。其酒体适中，口感绝佳，紧致且富有层次，架构如岩石般坚固，单宁细腻柔顺，兼具精致感与力量感，令人印象深刻。","name":"2018年拉菲古堡红葡萄酒","img":"https://wineshopimage.wine-world.com/f51812b5-7e37-4dbb-a0e7-bb4f793196af.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"赤霞珠"}},{"goods":{"id":5,"price":11750,"alcohol":14,"sales":563,"year":"2007-07-21","kinds":"红葡萄酒","ml":750,"region":"波雅克","describe":"这是一款来自法国波尔多产区波雅克村的红葡萄酒，是波尔多一级名庄——拉图城堡（Chateau Latour）的正牌酒。这款酒色泽深邃，呈现宝石红色调，散发着层层美妙的烟草、雪茄盒、杉木箱、森林地表、烟熏和焦糖的香气，风味中带有黑醋栗、茴香、丁香和摩卡的味道，单宁精细，余味悠长，陈年潜力十分突出。","name":"2005年拉图城堡红葡萄酒","img":"https://wineshopimage.wine-world.com/6ab05183-4f80-427e-b9f3-619a493b723c.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"赤霞珠"}},{"goods":{"id":6,"price":10980,"alcohol":12,"sales":842,"year":"2020-07-16","kinds":"红葡萄酒","ml":750,"region":"圣埃美隆特级园","describe":"欧颂酒庄（Chateau Ausone）是圣埃美隆（Saint-Emilion）四大一级A等酒庄（Premier Grand Cru Classe A）和传奇的波尔多八大名庄之一，出产的葡萄酒素有“诗人之酒”的美誉。欧颂酒庄有着无数光环加身，在波尔多乃至整个葡萄酒界都是焦点之一。2018年份的欧颂红葡萄酒颜色呈深邃的宝石红色，略带紫红色的色泽，初时香气内敛，随后迸发出馥郁的香气，散发出黑樱桃、黑莓、蓝莓和李子的成熟水果芬芳，具有甘草、蘑菇和碘酒的气息，并伴有巧克力、碎砾石、紫罗兰和薰衣草的香气，隐约间夹杂丝丝雪松和铅笔芯的气息。其酒体饱满，口感紧致，单宁精致且如奶油般丝滑，大量丰富的黑色水果风味撑起坚实的框架，凸显出惊人的张力与表现力，余味绵延悠长，令人回味，是一款拥有出色陈年潜力的红葡萄酒","name":"2018年欧颂酒庄红葡萄酒","img":"https://wineshopimage.wine-world.com/85a27be9-11a9-45b6-8e2c-7161a27466d3.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"品丽珠"}},{"goods":{"id":7,"price":10800,"alcohol":13,"sales":653,"year":"2007-06-05","kinds":"红葡萄酒","ml":750,"region":"波雅克","describe":"这是一款来自法国波尔多波雅克产区的红葡萄酒，由“波尔多五大名庄”之一的木桐·罗斯柴尔德酒庄（又名：木桐酒庄）酿制。其2005年的酒标由意大利雕塑家吉塞普·佩诺内（Guiseppe Penone）设计，酒标上绘有葡萄种植者的“绿手”、葡萄叶的活泼伸展以及饮酒人张开的手指，试图将种植者手指所散发的生命力，通过葡萄叶延伸到饮者的手中，意境独特。这款酒色泽深浓，香气优雅而复杂，散发着细腻的木质、烘烤和香草的芬芳，并伴有浓郁的水果以及些许薄荷和香料的气息，口感强劲醇厚，美味多汁，入口后呈现出桑葚和黑加仑的味道，回味绵长。","name":"2005年木桐·罗斯柴尔德酒庄干红葡萄酒","img":"https://wineshopimage.wine-world.com/8f0b5ad7-37f1-4a1e-a8a6-b23b8b413dd7.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"赤霞珠"}},{"goods":{"id":8,"price":10680,"alcohol":12.5,"sales":262,"year":"2014-06-09","kinds":"红葡萄酒","ml":750,"region":"波雅克","describe":"拉菲古堡红葡萄酒的盛名在18世纪时便已广为流传，曾被黎塞留元帅赞为“可与奥林匹斯山上众神饮用的玉液琼浆相媲美”。对于2012年的拉菲古堡红葡萄酒，著名葡萄酒评论家罗伯特·帕克（Robert Parker）是这样评价的，“它一如既往地优雅，酒体适中，浓缩度较高，口感柔顺，散发着燧石、白巧克力、黑醋栗和石墨的香气，陈年潜力可达20年。”2012年的拉菲古堡红葡萄酒由91%的赤霞珠、8.5%的梅洛以及0.5%的味而多调配而成，带有新鲜的红色浆果的风味，风格内敛，酒体中等，优雅细腻。","name":"2012年拉菲古堡红葡萄酒","img":"https://wineshopimage.wine-world.com/5c9c3438-4723-4953-935b-f1d357ec4c5b.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"赤霞珠"}},{"goods":{"id":9,"price":10680,"alcohol":12.5,"sales":632,"year":"2017-06-09","kinds":"红葡萄酒","ml":750,"region":"波雅克","describe":"这是一款来自法国波尔多波雅克产区的红葡萄酒，由波尔多1855一级庄——拉菲古堡出品。拉菲古堡的佳酿有着美丽、温柔且大方的灵魂，在其优雅、精致与细腻的葡萄酒风格上体现得淋漓尽致。2015年份的这款酒获得了众多酒评家的一致好评，酒液颜色深邃，充溢着黑色覆盆子、红醋栗和碎李子的香气，并缀以一丝雪茄盒、紫罗兰和灌木的气息，酒体中等，口感强劲，单宁柔顺且坚实，质地如天鹅绒般柔滑，风格优雅，余味清新柔和，颇具深度。","name":"2015年拉菲古堡红葡萄酒","img":"https://wineshopimage.wine-world.com/ffac0e00-9fdc-4810-8e24-14b293fe03b1.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"赤霞珠"}},{"goods":{"id":10,"price":10380,"alcohol":13.5,"sales":843,"year":"2018-07-11","kinds":"红葡萄酒","ml":750,"region":"圣埃美隆特级园","describe":"这是一款来自法国波尔多产区的红葡萄酒。这款酒为圣埃美隆一级A等酒庄欧颂的正牌酒，有“诗人之酒”的美誉，从它的身上我们也可以感受到属于诗人的独特气质：高傲又带有些孤芳自赏。该酒呈宝石红色，散发着黑色水果、甘草、咖啡和花朵的香气，伴有一丝潮湿石头的气息，酒体饱满，口感丰富，香气浓郁且集中，陈年潜力强。","name":"2016年欧颂酒庄红葡萄酒","img":"https://wineshopimage.wine-world.com/ed77bca2-d4cb-42f2-8af0-148191559b66.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"梅洛"}},{"goods":{"id":11,"price":10850,"alcohol":14.5,"sales":578,"year":"2019-06-12","kinds":"白葡萄酒","ml":750,"region":"佩萨克-雷奥良","describe":"这是一款来自法国波尔多格拉夫产区的白葡萄酒，由大名鼎鼎的侯伯王庄园出品。侯伯王庄园是波尔多1855分级中唯一一个不在梅多克地区的一级庄，同时它也入选了格拉夫列级庄。酒庄葡萄园内仅有大约3公顷的土地种植白葡萄品种，白葡萄酒产量极为稀少，品质卓绝。2018年侯伯王庄园白葡萄酒选用80.6%的长相思和19.4%的赛美蓉混酿而成，酒液呈动人的淡柠檬黄色。成酒香气馥郁，散发出活泼的菠萝、百香果、柑橘、芒果和香料的气息，交织着些许桃花、野百合和湿石头的芬芳，口感强劲，质地柔滑，层次分明，余味美妙悠长。","name":"2018年侯伯王庄园白葡萄酒","img":"https://wineshopimage.wine-world.com/1626e368-f715-479d-b59a-52be9a31cc92.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"长相思"}},{"goods":{"id":12,"price":10550,"alcohol":14,"sales":463,"year":"2017-05-28","kinds":"白葡萄酒","ml":750,"region":"佩萨克-雷奥良","describe":"这是一款来自法国波尔多格拉夫产区的白葡萄酒，由大名鼎鼎的侯伯王庄园出品。侯伯王庄园是波尔多1855分级中唯一一个不在梅多克地区的一级庄，同时它也入选了格拉夫列级庄。酒庄葡萄园内仅有大约3公顷的土地种植白葡萄品种，白葡萄酒产量极低，品质卓绝。2018年侯伯王庄园白葡萄酒选用70.5%的长相思和29.5%的赛美蓉混酿而成，成酒香气优雅、复杂，充满柑橘、桃子和柠檬的果香和白花的芬芳，酒体饱满，口感尤其集中，充满活力","name":"2016年侯伯王庄园白葡萄酒","img":"https://wineshopimage.wine-world.com/544ba22a-f9da-49e2-abdb-9cb3a2ad258f.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"长相思 "}},{"goods":{"id":13,"price":7250,"alcohol":14.5,"sales":996,"year":"2019-05-17","kinds":"白葡萄酒","ml":750,"region":"佩萨克-雷奥良","describe":"美讯酒庄地处格拉夫地区的最北端，与侯伯王酒庄（Chateau Haut-Brion）同属于克兰斯帝龙酒业公司（Domaine Clarence Dillon）所有，两座酒庄共享优秀的酿酒团队。从2009年起，在伦敦国际葡萄酒交易所（Liv-ex）每两年会发布一次的波尔多酒庄分级中，美讯酒庄5次皆与1855分级中的五座一级庄并列一级庄，其实力不言而喻。2018年份的这款美讯酒庄白葡萄酒风格浓郁，口感活泼，带有柠檬、酸橙、燧石和奶油的风味，此外还蕴含着一丝矿物质气息，余味美妙，具有极佳的清新感。","name":"2018年美讯酒庄白葡萄酒","img":"https://wineshopimage.wine-world.com/3331dcbe-1425-4417-b31f-7fd7e5790b0b.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"长相思"}},{"goods":{"id":14,"price":1590,"alcohol":13,"sales":883,"year":"2013-12-10","kinds":"白葡萄酒","ml":750,"region":"默尔索","describe":"这是一款来自法国勃艮第产区的白葡萄酒。这款酒带有杏仁和蜂蜜的香味，酒体饱满，口感丰富，层次感强烈，风格复杂，入口顺滑，余韵美妙，适合和虾仁、蔬菜和沙拉佐餐。","name":"2012年格鲁酒庄佩尼斯（默尔索一级园）白葡萄酒","img":"https://wineshopimage.wine-world.com/3d827d69-6da8-4c95-ad55-4519a9d3c109.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"霞多丽"}},{"goods":{"id":15,"price":1480,"alcohol":13,"sales":2325,"year":"2014-12-01","kinds":"白葡萄酒","ml":750,"region":"默尔索","describe":"这是一款来自法国勃艮第产区的白葡萄酒。默尔索位于伯恩丘，拥有19个一级园，出产的葡萄酒在品质上与普里尼-蒙哈谢（Puligny-Montrachet）比肩。这里出产的葡萄酒大多为金色或浅黄色，其中隐约泛着绿色的闪光，陈年后渐渐发展成青铜色。这款酒酒液清透明亮，有时可以看到银色的光泽，香气极为芬芳，年轻的时候散发着五月花、接骨木花、蕨、橙花、马鞭草、烤杏仁、烤榛子和燧石的芳香，其中还夹杂了黄油、蜂蜜和柑橘水果的气息，口感丰富、饱满，可以感受到明显的榛子风味，如丝绸般柔滑，余味悠长，很有结构，需要陈年一段时间才能达到足够的成熟度，是一款适合长期储存的白葡萄酒。","name":"2013年格鲁修德酒庄热那弗耶（默尔索一级园）白葡萄酒","img":"https://wineshopimage.wine-world.com/bbd51542-a7be-4402-b09d-3f4925fb92ad.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"霞多丽"}},{"goods":{"id":16,"price":1450,"alcohol":13,"sales":1941,"year":"2014-12-02","kinds":"白葡萄酒","ml":750,"region":"默尔索","describe":"这是一款来自法国勃艮第产区的白葡萄酒。默尔索位于伯恩丘，出产的葡萄酒在品质上与普里尼-蒙哈谢（Puligny-Montrachet）比肩。这里出产的葡萄酒大多为金色或浅黄色，其中隐约泛着绿色的闪光，陈年后渐渐发展成青铜色。这款酒散发着清新的水果香味，酒体中等，口感鲜爽，美味多汁，余味良好","name":"2013年格鲁酒庄（默尔索一级园）白葡萄酒","img":"https://wineshopimage.wine-world.com/fde1ff3d-89db-4ebe-9c16-f53fb8d4428b.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"霞多丽"}},{"goods":{"id":17,"price":1450,"alcohol":13.5,"sales":1924,"year":"2019-09-05","kinds":"白葡萄酒","ml":750,"region":"波尔多","describe":"2018年爱诗途白葡萄酒攀升至一个全新的高度，对平衡、清爽与陈年潜力这三者的追求达到了极致，最终培育出一款纯正直率的精致佳酿。此酒酒液呈明亮的金黄色，香气诱人，散发出酸菠萝、白花、柠檬皮和白葡萄柚的芬芳，还伴有碎岩石、稻草和浪花的气息。其酒体适中，口感柔滑，柑橘和苹果味浓郁，富含矿物质和草药味，回味悠长。","name":"2018年爱诗途白葡萄酒","img":"https://wineshopimage.wine-world.com/c2881117-c5b7-484f-8499-3aea3b409f6b.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"长相思"}},{"goods":{"id":18,"price":675,"alcohol":13,"sales":2155,"year":"2015-02-03","kinds":"白葡萄酒","ml":750,"region":"默尔索","describe":"这款葡萄酒来自法国勃艮第的伯恩丘产区，产自一座家族式精品酒庄——加拉德酒庄。现任酒庄庄主弗洛朗·加拉德（Florent Garaudet）是加拉德家族的第5代传人，也是一位年轻而充满活力的酿酒师。这款酒采用默尔索（Meursault）的霞多丽酿制，具有典型的默尔索村风格。酒款散发着坚果、苹果、柠檬皮、白胡椒和蜂蜜香气，并有矿物与咸鲜风味，酸度适中，收尾圆润。","name":"2013年加拉德酒庄（默尔索村）白葡萄酒","img":"https://wineshopimage.wine-world.com/55ea1578-7101-472c-9ebc-9579532bbf7b.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"霞多丽"}},{"goods":{"id":19,"price":625,"alcohol":14,"sales":3212,"year":"2019-01-14","kinds":"白葡萄酒","ml":750,"region":"苏玳","describe":"这是一款来自法国波尔多苏玳产区的甜白葡萄酒，为苏玳及巴萨克一级庄——拉菲莱斯古堡酒庄的正牌酒。酒庄以出产馥郁甜美的贵腐甜白葡萄酒而闻名，在1855年苏玳及巴萨克分级中，荣获“一级庄”的头衔，排在苏玳分级的金字塔塔身顶部。2016年份的该酒选用赛美蓉、长相思和密斯卡岱混酿而成，呈淡柠檬黄色，香气馥郁，柑橘、橙花、西柚、酸橙和柠檬茶的芳香从杯中飘逸而出，并伴有肉豆蔻和生姜的气息，口感优雅清新，余味悠长。","name":"2016年莱斯古堡贵腐甜白葡萄酒","img":"https://wineshopimage.wine-world.com/6917132e-871e-4450-9359-0e68cd6fa069.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"赛美蓉"}},{"goods":{"id":20,"price":7150,"alcohol":46,"sales":1,"year":"2017-05-22","kinds":"白葡萄酒","ml":750,"region":"普里奥拉托","describe":"玛吉尔庄园（Mas d\'en Gil）坐落在西班牙两大DOCa产区之一的普里奥拉托（Priorat），现如今为罗维拉（Rovira）家族所掌管。罗维拉家族将耕作与大自然更紧密地结合在一起，并不断改善酿造工艺，致力于在古老而神秘的普里奥拉托酿造出经典且优质的西班牙佳酿。2016年份的马吉尔庄园科马白葡萄酒在不锈钢桶中发酵，并在500升的橡木桶中熟化6个月，并在发售前经过几年的瓶中陈酿。成酒细腻纯净，质地优良，酒体饱满，风味浓郁却不失精致，余味夹带丝丝苦意。","name":"2016年玛吉尔庄园科马白葡萄酒","img":"https://wineshopimage.wine-world.com/a7dfce48-f0ef-4531-aaf6-7e097bef349e.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"维奥娜"}},{"goods":{"id":21,"price":39,"alcohol":76,"sales":751,"year":"2021-03-22","kinds":"威士忌","ml":700,"region":"高地","describe":"这款巴布莱尔25年威士忌先在旧波本桶中熟成，然后转至初填的西班牙橡木桶中。其酒液色泽呈熟铜色，具有成熟杏子与肉桂的诱人香气，黑森林蛋糕的优雅，柑橘与甘草的清香，美丽且奇妙复杂；口感醇厚，浓郁的油柑橘、果仁巧克力糖、新鲜烟草的味道在舌尖轻轻跳跃；回味持久，带着血橙的果香。","name":"巴布莱尔25年单一麦芽威士忌","img":"https://wineshopimage.wine-world.com/200b7892-bcbb-4055-b8bd-f24450531632.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":22,"price":39,"alcohol":43,"sales":205,"year":"2021-08-10","kinds":"威士忌","ml":700,"region":"高地","describe":"麦卡伦酿酒团队采用高比例的初次装桶的美洲和欧洲雪莉橡木桶熟成，从而创造出了这款精致细腻、个性突出、色泽丰富的木质香辛调威士忌。这款威士忌呈深邃的宝石红褐色，柔和的香草气息和丰富的葡萄干香气，与甜蜜的新鲜苹果、柠檬以及橙子等水果味和谐交融，并与生姜根、肉桂、肉豆蔻和丁香的香辛料气息相均衡。入口强烈的葡萄干香甜风味占据主导地位，随之而来的是香草和黑巧克力味，最后袭来的是淡淡的柑橘水果风味，余味悠长、丰富且如丝般柔顺。","name":"麦卡伦皓钻单一麦芽苏格兰威士忌","img":"https://wineshopimage.wine-world.com/b04ab1f2-3c7b-4e4a-971b-baf0123c9106.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":23,"price":2958,"alcohol":43,"sales":256,"year":"2021-08-05","kinds":"deserunt sed","ml":700,"region":"日本","describe":"山崎是日本威士忌的开山鼻祖，同时也是日本老牌企业三得利（Suntory）的旗舰品牌，致力于酿造符合日本细腻口味的威士忌。在酿造过程中，山崎会使用自制的日本水楢橡木桶（Mizunara Cask），这种酒桶由北海道树龄200年以上的水楢木制成，能赋予酒液檀香等淡雅迷人的东方气息。这款威士忌曾四次荣获威士忌国际烈酒挑战赛（ISC）金奖。酒液呈琥珀色，散发着草莓、樱桃和水楢木的香气。入口带有浓郁的覆盆子、白桃和椰子风味，口感细腻优雅，余味中蕴含着甜香草和一缕肉桂的气息。","name":"山崎12年单一麦芽日本威士忌","img":"https://wineshopimage.wine-world.com/397583dc-1c51-46a9-bee9-05dc7b5d8f61.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":24,"price":1760,"alcohol":43,"sales":538,"year":"2021-09-09","kinds":"威士忌","ml":700,"region":"日本","describe":"三得利集团（Suntory）旗下知名威士忌品牌“响”（Hibiki）于1989年推出，以纪念集团成立90周年，此后一直被视为日本威士忌的典范。这款威士忌呈明亮清澈的琥珀色，散发着玫瑰和荔枝的芬芳，并伴有些许迷迭香、橡木和檀香的气息。这款酒口感甜美，带有糖渍橙皮和白巧克力的风味，余味悠长而精致，带有一缕水楢木的气息。","name":"响和风醇韵调配型日本威士忌","img":"https://wineshopimage.wine-world.com/58ab75cd-6126-4ffa-a935-7eea69a752d1.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":25,"price":1550,"alcohol":40,"sales":457,"year":"2012-09-12","kinds":"威士忌","ml":700,"region":"爱尔兰","describe":"百世醇21年单一麦芽爱尔兰威士忌在欧罗索（Oloroso）雪莉桶和波本桶中熟成至少19年后在马德拉（Madeira）桶中熟化2年。此款威士忌散发着太妃糖、烤坚果、枣片、蔓越橘和巧克力的香气，并伴有馥郁的麦芽和细微的坚果葡萄干香气。入口呈现出蜂蜜、香蕉面包和黑莓等风味，富有深度，余韵丰富而悠长。","name":"百世醇21年单一麦芽爱尔兰威士忌","img":"https://wineshopimage.wine-world.com/539954c0-26f2-45da-908e-5e946ece4578.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":26,"price":1338,"alcohol":43,"sales":452,"year":"2020-08-13","kinds":"威士忌","ml":700,"region":"日本","describe":"白州由日本老牌企业三得利株式会社（Suntory）所有，坐落于在日本南阿尔卑斯山脉（Japanese Southern Alps）的凯科马加塔克山（Mt. Kaikomagatake）海拔700多米处的山林深处。它的四周被森林与各种各样的植物环绕着，受到森林微气候的影响，其出产的麦芽威士忌具有独特的风格。这款威士忌呈浅金色，散发着薄荷、蜜瓜和黄瓜的香气，入口带有西柚和柠檬百里香的风味，余味清新，伴有些许烟熏味。","name":"白州1973单一麦芽日本威士忌","img":"https://wineshopimage.wine-world.com/f1436240-9171-4ce1-a889-10446aa7dbf4.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":27,"price":6480,"alcohol":46,"sales":515,"year":"2018-01-20","kinds":"威士忌","ml":9,"region":"高地","describe":"富特尼位于英国苏格兰高地产区，自1826年以来始终专注于酿造单一麦芽威士忌，秉承传统的酿酒工艺，其酿酒所采用的大麦均来自英国优质的制造商。由于放置在酒厂仓库的酒桶能“呼吸”到沿海的空气，成酒带有海洋独特的咸味。这款威士忌先后经过美国橡木桶和西班牙橡木桶的熟化，酒液呈青铜色，色泽透亮，散发着浓郁的香料和黑巧克力的气息，入口即能感受到巧克力、太妃糖和奶油香草的风味，余味悠长且带有一丝香料味道，优雅而富有魅力。","name":"富特尼25年单一麦芽威士忌","img":"https://wineshopimage.wine-world.com/f893a83e-a554-46e4-bb62-6ac449235674.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":28,"price":472,"alcohol":43,"sales":598,"year":"2018-08-21","kinds":"威士忌","ml":700,"region":"艾雷岛","describe":"卡尔里拉创建于1846年，坐落于苏格兰艾莱岛（Islay，又名“艾雷岛”）的东海岸，其出品的威士忌将海洋与烟熏风味巧妙的融合。这款威士忌在亚历山大麝香（Moscatel）桶中经过两次熟成，为酒液带来了馥郁的果味和香甜的气息。独特的麦芽香甜感烘托出该款威士忌清新的香气，以及泥煤、肉桂和烟熏的风味。滨海空气的的芳香与清甜的烟熏风味相辅相成，带来口感复杂、浓郁而辛辣的口感。","name":"卡尔里拉艾莱岛单一麦芽苏格兰威士忌（酒厂限定版）","img":"https://wineshopimage.wine-world.com/8d9e19fd-2704-4bd7-89cb-db1c9ec3dad0.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":29,"price":656,"alcohol":40,"sales":821,"year":"1998-02-08","kinds":"威士忌","ml":700,"region":"斯佩塞","describe":"格兰威特是首批采用法国橡木酿造威士忌的酿酒厂之一，选用法国多尔多涅河（Dordogne）地区的利穆赞（Limousin）橡木制作橡木桶。这种橡木桶常被用于熟化干邑，由于其密度较低，因此威士忌能够更好的浸入其中。酿酒厂谨慎地把控威士忌在桶中的熟成时间，以恰到好处地获得独特且令人愉悦的香料风味以及富含异国情调且丰富的口感。这款威士忌呈深邃的金黄色，散发着馥郁的奶油和黄油的气息。入口呈现出甜美的水果、精致的香料和坚果的风味，悠长的余韵中带有甜杏仁和香料的气息。","name":"格兰威特15年法国橡木桶陈酿单一麦芽苏格兰威士忌","img":"https://wineshopimage.wine-world.com/fab08195-e683-4b3b-8658-1ac9e3ee0855.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":30,"price":296,"alcohol":40,"sales":586,"year":"2008-08-24","kinds":"威士忌","ml":700,"region":"爱尔兰","describe":"百世醇10年单一麦芽爱尔兰威士忌经过三重蒸馏，在雪莉桶和波本桶中熟成至少10年，为酒体带来蜂蜜、香草和牛奶巧克力的香气。其酒液呈琥珀金色，香气清新诱人，柑橘类水果的芳香与独特的百世醇蜂蜜香交织在一起，新鲜香草、奶油和牛奶巧克力的甜香萦绕其中。在口感上，香草、牛奶巧克力、新鲜金银花的香甜醇厚与橡木烘烤的精致气息巧妙相融，尾韵清爽、干净。","name":"百世醇10年单一麦芽爱尔兰威士忌","img":"https://wineshopimage.wine-world.com/fc414396-ba96-4328-825c-265b059d4b74.jpg?x-oss-process=image/resize,m_lfit,l_900","type":"威士忌"}},{"goods":{"id":31,"price":625,"alcohol":13.5,"sales":1458,"year":"2019-01-14","kinds":"甜酒","ml":750,"region":"苏玳","describe":"这是一款来自法国波尔多苏玳产区的甜白葡萄酒，为苏玳及巴萨克一级庄——拉菲莱斯古堡酒庄的正牌酒。酒庄以出产馥郁甜美的贵腐甜白葡萄酒而闻名，在1855年苏玳及巴萨克分级中，荣获“一级庄”的头衔，排在苏玳分级的金字塔塔身顶部。2016年份的该酒选用赛美蓉、长相思和密斯卡岱混酿而成，呈淡柠檬黄色，香气馥郁，柑橘、橙花、西柚、酸橙和柠檬茶的芳香从杯中飘逸而出，并伴有肉豆蔻和生姜的气息，口感优雅清新，余味悠长。","name":"2016年莱斯古堡贵腐甜白葡萄酒","img":"https://wineshopimage.wine-world.com/6917132e-871e-4450-9359-0e68cd6fa069.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"赛美蓉"}},{"goods":{"id":32,"price":505,"alcohol":8.5,"sales":2107,"year":"2019-07-23","kinds":"甜酒","ml":750,"region":"莱茵高","describe":"这是一款来自德国莱茵高产区的甜白葡萄酒，产自拥有680多年历史的德国名庄——莱茵豪森城堡。莱茵豪森城堡目前隶属德国最大的酒业集团雷根穆勒（Lergenmuller），酒庄出品的佳酿是全球多家航空公司的头等舱指定用酒。2018年份的这款酒散发着桃子、杏子和异国水果的气息，入口后能感受到其风味在口中迸发，酒体偏饱满，清新的酸度赋予了其优雅的特征，从第一口到最后一滴，这款酒都能给人以美妙的体验。","name":"2018年莱茵豪森城堡马布朗特级园雷司令晚收白葡萄酒","img":"https://wineshopimage.wine-world.com/a7fb2a1f-92ca-4695-8ccd-7cf70b189795.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"雷司令"}},{"goods":{"id":33,"price":335,"alcohol":14.5,"sales":2344,"year":"2020-04-14","kinds":"甜酒","ml":750,"region":"苏玳","describe":"莱斯古堡位于法国波尔多格拉夫的苏玳产区内，在1855年苏玳&巴萨克分级时，该酒庄凭借着卓越的风土和高品质的贵腐甜白葡萄酒，荣获“一级庄”的头衔。在卓越风土的滋养和极高品质要求的推动下，莱斯古堡成就的佳酿层出不穷。这款酒为酒庄的副牌酒——莱斯珍宝贵腐甜白葡萄酒，其2018年份酒液呈浅柠檬色，略带金色光泽，散发着柠檬和橙汁的芬芳，具有梨子和苹果的成熟果香，伴有蛋奶酥、烘烤面包和杏仁糖的味道。酒体中等，口感甜美，十分迷人，余味清新悠长夹带蜂蜜芳香。","name":"2018年莱斯珍宝贵腐甜白葡萄酒","img":"https://wineshopimage.wine-world.com/8e4cda7f-961f-4080-bc1a-12f89313a0b9.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"赛美蓉"}},{"goods":{"id":34,"price":335,"alcohol":7.5,"sales":1264,"year":"2019-06-18","kinds":"甜酒","ml":750,"region":"莱茵高","describe":"这是一款来自德国莱茵高产区的甜白葡萄酒，该酒产自拥有680多年历史的德国名庄——莱茵豪森城堡。莱茵豪森城堡目前隶属德国最大的酒业集团雷根穆勒（Lergenmuller），酒庄出品的佳酿是全球多家酒店及航空公司的头等舱指定用酒。这款特级园的晚收雷司令呈现出迷人的金黄色，在杯中散发出各种成熟的果香，其中红苹果、桃子和葡萄干的香气十分馥郁，果香中还带有蜂蜜与特级园风土带来的矿物气息。稍甜的口感让它成为甜品的最佳搭档，但这款酒同样也非常适合搭配中国各种偏辣的菜肴。","name":"2018年莱茵豪森城堡霍亨莱特级园雷司令晚收白葡萄酒","img":"https://wineshopimage.wine-world.com/0b83ab18-c334-42db-8a3c-01079e631ff6.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"雷司令"}},{"goods":{"id":35,"price":225,"alcohol":7,"sales":1464,"year":"2021-06-25","kinds":"甜酒","ml":750,"region":"马尔堡","describe":"这是一款来自新西兰马尔堡产区的白葡萄酒。2021年凉爽的夏季和干燥、晴朗的秋季使酒庄收获了优质的酿酒葡萄，酿造的葡萄酒风格优雅，结构紧致，富有能量与精致感。这款酒酒液颜色介于淡绿色与浅稻草色之间，散发出经典的苹果、酸橙和柑橘皮的香气，夹带一丝橙花的香蜜感，拥有浓郁水果香气及清新的矿物质感。口感清爽，果香浓郁，甜度、酸度与坚实的结构良好平衡，余味清新爽口。","name":"2021年芙朗酒庄晚收雷司令白葡萄酒","img":"https://wineshopimage.wine-world.com/c14e96cd-310b-42bb-9945-d0bb26540012.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"雷司令"}},{"goods":{"id":36,"price":398,"alcohol":12.5,"sales":3465,"year":"2017-01-26","kinds":"甜酒","ml":750,"region":"波尔多","describe":"这是一款产自法国波尔多产区的白葡萄酒，来自位于卡迪拉克（Cadillac）地区附近的著名精品酒庄——玲阁堡。2016年玲阁堡贵腐甜白葡萄酒呈现出明亮而迷人的金黄色，果香浓郁，散发着桃子和杏子的芳香，口感平衡，伴有蜂蜜的味道，余味芬芳怡人。","name":"2016年玲阁堡贵腐甜白葡萄酒","img":"https://wineshopimage.wine-world.com/28d837e9-8d1a-4796-9ee6-8554aa02a149.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"雷司令"}},{"goods":{"id":37,"price":50,"alcohol":9,"sales":4531,"year":"2015-09-12","kinds":"甜酒","ml":375,"region":"智利","describe":"干露酒庄是智利知名葡萄酒业集团，多次荣获世界畅销葡萄酒品牌称号。羊驼系列是干露旗下的亲民品牌，性价比高，适合搭配各类美食。这款甜白葡萄酒散发着清新的水果香气、花香及一丝蜂蜜的香气，带有恰到好处的酸度，口感平衡，十分易饮。","name":"2015年干露羊驼莫斯卡托白葡萄酒","img":"https://wineshopimage.wine-world.com/52225088-5eeb-49c3-9e75-a7e0e3ab24a4.jpg?x-oss-process=image/resize,m_lfit,l_400","type":"雷司令"}}]')},"707e":function(e,s,i){},7685:function(e,s,i){},9048:function(e,s,i){},a2ae:function(e,s,i){e.exports=i.p+"img/内景2.e79230d9.jpg"},a8a4:function(e,s,i){},ade4:function(e,s,i){e.exports=i.p+"img/一种红酒.ffd51a8b.jpg"},b485:function(e,s,i){e.exports=i.p+"img/鸡尾酒2.c477ff49.jpg"},bd4b:function(e,s,i){},c61b:function(e,s,i){},cc94:function(e,s,i){"use strict";i("a8a4")},cd71:function(e,s,i){"use strict";i("5abe")},d194:function(e,s,i){e.exports=i.p+"img/田园.f756e887.jpg"},d302:function(e,s,i){"use strict";i("9048")},ed2c:function(e,s,i){},f3fe:function(e,s,i){e.exports=i.p+"img/喝酒.695a816d.jpg"},f701:function(e,s,i){e.exports=i.p+"img/english.b5496b69.jpg"}});