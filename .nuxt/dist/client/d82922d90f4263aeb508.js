(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{284:function(e,o,t){var content=t(287);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(51).default)("11a797ae",content,!0,{sourceMap:!1})},285:function(e,o,t){e.exports=t.p+"img/8e95687.png"},286:function(e,o,t){"use strict";var l=t(284);t.n(l).a},287:function(e,o,t){o=e.exports=t(50)(!1);var l=t(167)(t(288));o.push([e.i,".welcome{position:relative;width:100%;height:100%}.welcome .welcome-main{width:100%;text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100vh}.welcome .welcome-main .welcome-title .welcome-go-home,.welcome .welcome-main .welcome-title img{width:100%}.welcome .welcome-main .welcome-title .welcome-go-home .welcome-go-home__button{color:#fff;background-color:rgba(197,0,0,.3);border-color:rgba(197,48,39,.3)}.welcome .welcome-main .welcome-title .welcome-go-home .welcome-go-home__button:hover{color:#fff;background-color:#c53027;border-color:#c53027}.welcome .welcome-main #particles-js{position:fixed;z-index:-1;width:100%;height:100%;background-image:url("+l+")}",""])},288:function(e,o,t){e.exports=t.p+"img/871d198.jpg"},289:function(e,o,t){"use strict";t.r(o);t(166);var l={name:"Welcome",data:function(){return{blogUrl:"https://blog.guoyucloud.com",mobileAppUrl:"https://m.guoyucloud.com",pcAppUrl:"https://main.guoyucloud.com"}},components:{},methods:{_isMobile:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},_goHome:function(){this._isMobile()?window.open(this.mobileAppUrl):window.open(this.pcAppUrl)},_goBlog:function(){window.open(this.blogUrl)}}},n=(t(286),t(18)),component=Object(n.a)(l,(function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",{staticClass:"welcome"},[l("div",{staticClass:"welcome-main"},[l("div",{staticClass:"welcome-title"},[l("img",{attrs:{src:t(285),alt:""}}),e._v(" "),l("div",{staticClass:"welcome-go-home"},[l("el-button",{staticClass:"welcome-go-home__button",attrs:{round:"",type:"danger"},on:{click:function(o){return e._goHome()}}},[e._v("\n\t\t\t\t\t进入主页\n\t\t\t\t")]),e._v(" "),l("el-button",{staticClass:"welcome-go-home__button",attrs:{round:"",type:"danger"},on:{click:function(o){return e._goBlog()}}},[e._v("\n\t\t\t\t\t进入博客\n\t\t\t\t")])],1)]),e._v(" "),l("client-only",[l("vue-particles",{attrs:{color:"#dedede","particle-opacity":.7,"particles-number":80,"shape-type":"circle","particle-size":4,"lines-color":"#dedede","lines-width":1,"line-linked":!0,"line-opacity":.4,"lines-distance":150,"move-speed":3,"hover-effect":!0,"hover-mode":"grab","click-effect":!0,"click-mode":"push"}})],1)],1)])}),[],!1,null,null,null);o.default=component.exports}}]);