(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpage-pages-mine-setting"],{2788:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uIcon:e("cf17").default,uPopup:e("ff7e").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"body"},[e("v-uni-view",{staticClass:"settingBox"},t._l(t.settingList,(function(n){return e("v-uni-view",{key:n.id,staticClass:"userAgreement settingItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick(n.id,n.title)}}},[e("v-uni-text",[t._v(t._s(n.title))]),e("u-icon",{attrs:{name:"arrow-right"}})],1)})),1),e("v-uni-view",{staticClass:"loginOut",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.loginOut.apply(void 0,arguments)}}},[t._v("退出登录")]),e("v-uni-view",{staticClass:"bottomBanner"},[e("v-uni-view",{staticStyle:{width:"472rpx"}},[t._v("Copyright ©️ "+t._s(t.copyrightData.companyName)+"版权所有"+t._s(t.copyrightData.filingNumber))])],1),e("u-popup",{attrs:{safeAreaInsetBottom:!1,show:t.popShow,round:15,mode:"center"},on:{close:function(n){arguments[0]=n=t.$handleEvent(n),t.popClose.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"popBox"},[e("v-uni-view",{staticClass:"topTitle"},[e("v-uni-view",{staticStyle:{width:"36rpx",height:"104rpx"}}),e("v-uni-view",{staticClass:"title"},[t._v("提示")]),e("v-uni-view",{staticClass:"icon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.popClose.apply(void 0,arguments)}}},[e("u-icon",{attrs:{name:"close",size:"18"}})],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"contentIntro1"},[t._v("重要提示")]),e("v-uni-view",{staticClass:"contentIntro1"},[t._v("您在"+t._s(t.systemName)+"下列信息将被清空且无法恢复，并将视为放弃相关权利，请谨慎操作：")]),e("v-uni-view",{staticClass:"contentIntro2"},[t._v("1、个人信息资料、身份认证信息等；")]),e("v-uni-view",{staticClass:"contentIntro2"},[t._v("2、创作信息、订单信息、交易信息、积分记录、会员服务等。")])],1),e("v-uni-view",{staticClass:"btnBox"},[e("v-uni-view",{staticClass:"cancel",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-view",{staticStyle:{width:"2rpx",height:"30rpx","background-color":"#262643"}}),e("v-uni-view",{staticClass:"confirm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)}}},[t._v("确认注销")])],1)],1)],1)],1)},a=[]},"3c2d":function(t,n,e){"use strict";var i=e("5674"),o=e.n(i);o.a},"55ee":function(t,n,e){"use strict";e.r(n);var i=e("2788"),o=e("83db");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("3c2d");var s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"7fa24c73",null,!1,i["a"],void 0);n["default"]=c.exports},5674:function(t,n,e){var i=e("addf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("00baef64",i,!0,{sourceMap:!1,shadowMode:!1})},"5f2e":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{settingList:[{id:0,title:"用户服务协议"},{id:1,title:"用户隐私政策"},{id:2,title:"创作协议服务"},{id:3,title:"会员服务协议"},{id:4,title:"注销账号"}],popShow:!1,systemName:"",copyrightData:{companyName:"",filingNumber:""}}},onShow:function(){this.getSystemName(),this.getCopyright()},methods:{handleClick:function(t,n){0==t||1==t||2==t||3==t?uni.navigateTo({url:"/subpage/pages/mine/protocolCommon?protocolName="+n,success:function(t){uni.$emit("protocolType",n)}}):4==t&&(this.popShow=!0)},popClose:function(){this.popShow=!1},cancel:function(){this.popShow=!1},confirm:function(){var t=this;this.$Request.get("/api/user/destroy").then((function(n){uni.removeStorageSync("token"),uni.removeStorageSync("userinfo"),t.popShow=!1}))},loginOut:function(){uni.removeStorageSync("token"),uni.removeStorageSync("userinfo"),uni.removeStorageSync("sessionId"),uni.removeStorageSync("appid"),uni.removeStorageSync("gtpsSessionId"),uni.reLaunch({url:"/pages/main/user/newIndex"})},getSystemName:function(){var t=this;this.$Request.post("/api/config/query",{keys:["siteName"]}).then((function(n){t.systemName=n.data.siteName}))},getCopyright:function(){var t=this;this.$Request.post("/api/config/copyright",{keys:["filingNumber","companyName","agreementTitle","policyTitle"]}).then((function(n){t.copyrightData=n.data}))}}};n.default=i},"83db":function(t,n,e){"use strict";e.r(n);var i=e("5f2e"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},addf:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-7fa24c73]{height:calc(100vh - %?88?%);padding:0 %?22?% 0 %?24?%;background-color:#0c0c16}.settingBox[data-v-7fa24c73]{color:#fff;font-size:%?30?%;padding-top:%?38?%}.settingBox .settingItem[data-v-7fa24c73]{display:flex;justify-content:space-between;height:%?120?%;line-height:%?120?%;border-bottom:1px solid #17161b}.loginOut[data-v-7fa24c73]{color:#ff4757;font-size:%?30?%;text-align:center;margin-top:%?138?%}.bottomBanner[data-v-7fa24c73]{width:100%;position:absolute;bottom:%?74?%;display:flex;justify-content:center;text-align:center;color:#999;font-size:%?24?%;line-height:%?40?%}.popBox[data-v-7fa24c73]{width:%?600?%;height:%?654?%;background-color:#17161b;border-radius:%?20?%}.popBox .topTitle[data-v-7fa24c73]{display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:%?32?%}.popBox .topTitle .icon[data-v-7fa24c73]{margin-right:%?24?%}.content[data-v-7fa24c73]{margin-top:%?20?%;padding:0 %?56?% 0 %?40?%}.content .contentIntro1[data-v-7fa24c73]{color:#fff;font-size:%?28?%;line-height:%?55?%}.content .contentIntro2[data-v-7fa24c73]{color:#ff4757;font-size:%?28?%;line-height:%?55?%}.btnBox[data-v-7fa24c73]{width:%?600?%;height:%?100?%;display:flex;align-items:center;position:absolute;bottom:0;border-top:%?2?% solid #262643;text-align:center;line-height:%?100?%}.btnBox .cancel[data-v-7fa24c73]{width:%?300?%;height:100%;color:#999;font-size:%?28?%}.btnBox .confirm[data-v-7fa24c73]{width:%?300?%;height:100%;color:#1e90ff;font-size:%?28?%}',""]),t.exports=n}}]);