'use strict';const _0x42ed1a=_0x5ebd;(function(_0x382089,_0x33839c){const _0x33351e=_0x5ebd,_0x7cfe61=_0x382089();while(!![]){try{const _0x5ea623=-parseInt(_0x33351e(0x13d))/0x1+parseInt(_0x33351e(0x15f))/0x2+-parseInt(_0x33351e(0x14d))/0x3*(parseInt(_0x33351e(0x13f))/0x4)+-parseInt(_0x33351e(0x140))/0x5+-parseInt(_0x33351e(0x149))/0x6+parseInt(_0x33351e(0x136))/0x7+-parseInt(_0x33351e(0x157))/0x8*(-parseInt(_0x33351e(0x14e))/0x9);if(_0x5ea623===_0x33839c)break;else _0x7cfe61['push'](_0x7cfe61['shift']());}catch(_0x146182){_0x7cfe61['push'](_0x7cfe61['shift']());}}}(_0x5373,0xccb0c));function _0x5ebd(_0x396903,_0x19cccf){const _0x5373f4=_0x5373();return _0x5ebd=function(_0x5ebda3,_0x3bdd6a){_0x5ebda3=_0x5ebda3-0x135;let _0xe57e35=_0x5373f4[_0x5ebda3];return _0xe57e35;},_0x5ebd(_0x396903,_0x19cccf);}var __decorate=this&&this[_0x42ed1a(0x137)]||function(_0x1ffa25,_0x2f91a8,_0x20d945,_0x5ab64a){const _0x8efe1e=_0x42ed1a;var _0x59f5c7=arguments[_0x8efe1e(0x13b)],_0x4e93ca=_0x59f5c7<0x3?_0x2f91a8:_0x5ab64a===null?_0x5ab64a=Object['getOwnPropertyDescriptor'](_0x2f91a8,_0x20d945):_0x5ab64a,_0x3d58a9;if(typeof Reflect==='object'&&typeof Reflect[_0x8efe1e(0x15d)]===_0x8efe1e(0x151))_0x4e93ca=Reflect['decorate'](_0x1ffa25,_0x2f91a8,_0x20d945,_0x5ab64a);else{for(var _0xd30ec2=_0x1ffa25[_0x8efe1e(0x13b)]-0x1;_0xd30ec2>=0x0;_0xd30ec2--)if(_0x3d58a9=_0x1ffa25[_0xd30ec2])_0x4e93ca=(_0x59f5c7<0x3?_0x3d58a9(_0x4e93ca):_0x59f5c7>0x3?_0x3d58a9(_0x2f91a8,_0x20d945,_0x4e93ca):_0x3d58a9(_0x2f91a8,_0x20d945))||_0x4e93ca;}return _0x59f5c7>0x3&&_0x4e93ca&&Object[_0x8efe1e(0x152)](_0x2f91a8,_0x20d945,_0x4e93ca),_0x4e93ca;},__metadata=this&&this[_0x42ed1a(0x154)]||function(_0xb7ef97,_0x1c0b3a){const _0x4f1b02=_0x42ed1a;if(typeof Reflect===_0x4f1b02(0x13a)&&typeof Reflect[_0x4f1b02(0x13e)]==='function')return Reflect[_0x4f1b02(0x13e)](_0xb7ef97,_0x1c0b3a);};function _0x5373(){const _0x170d16=['axios','crypto','toString','./../globalConfig/globalConfig.service','application/x-www-form-urlencoded','design:paramtypes','convertToEnglish','3928122PtnAoo','Injectable','data','auto','416445ZbuBOd','3823164Hcezeh','BAD_REQUEST','翻译失败[','function','defineProperty','HttpException','__metadata','__esModule','FanyiService','56hrZDPu','post','digest','update','baiduFanyiAppId','baiduFanyiSecret','decorate','globalConfigService','160758hREJDR','https://fanyi-api.baidu.com/api/trans/vip/translate','now','1697976ArBzPv','__decorate','HttpStatus','GlobalConfigService','object','length','default','123488bDcDZZ','metadata','44IRZfcR','764835pfWSnH','createHash'];_0x5373=function(){return _0x170d16;};return _0x5373();}Object[_0x42ed1a(0x152)](exports,_0x42ed1a(0x155),{'value':!![]}),exports[_0x42ed1a(0x156)]=void 0x0;const globalConfig_service_1=require(_0x42ed1a(0x145)),common_1=require('@nestjs/common'),axios_1=require(_0x42ed1a(0x142)),crypto=require(_0x42ed1a(0x143));let FanyiService=class FanyiService{constructor(_0x2a7345){const _0x7d73dd=_0x42ed1a;this[_0x7d73dd(0x15e)]=_0x2a7345;}async[_0x42ed1a(0x148)](_0x451f46){const _0x2abcef=_0x42ed1a;if(!_0x451f46)throw new common_1[(_0x2abcef(0x153))]('请输入要翻译的内容!',common_1[_0x2abcef(0x138)]['BAD_REQUEST']);const {baiduFanyiAppId:_0x37485a,baiduFanyiSecret:_0x13c421}=await this[_0x2abcef(0x15e)]['getConfigs']([_0x2abcef(0x15b),_0x2abcef(0x15c)]);if(!_0x37485a||!_0x13c421)throw new common_1[(_0x2abcef(0x153))]('当前管理员还未开放翻译服务、请联系管理员开通吧!',common_1[_0x2abcef(0x138)][_0x2abcef(0x14f)]);const _0x11d898=Date[_0x2abcef(0x135)]()[_0x2abcef(0x144)](),_0x593995=crypto[_0x2abcef(0x141)]('md5')[_0x2abcef(0x15a)](_0x37485a+_0x451f46+_0x11d898+_0x13c421)[_0x2abcef(0x159)]('hex'),_0x102b02=_0x2abcef(0x160),_0x1c9559={'q':_0x451f46['toString'](),'from':_0x2abcef(0x14c),'to':'en','appid':_0x37485a,'salt':_0x11d898,'sign':_0x593995},_0x3343f3=await axios_1[_0x2abcef(0x13c)][_0x2abcef(0x158)](_0x102b02,_0x1c9559,{'headers':{'Content-Type':_0x2abcef(0x146)}}),{from:_0x2d0d1f,to:_0x385430,trans_result:_0xa6152b,error_code:_0xde5abe,error_msg:_0x215734}=_0x3343f3[_0x2abcef(0x14b)];if(_0xde5abe)throw new common_1['HttpException'](_0x2abcef(0x150)+_0xde5abe+']['+_0x215734+']!',common_1[_0x2abcef(0x138)][_0x2abcef(0x14f)]);if(!_0xa6152b||!_0xa6152b[_0x2abcef(0x13b)])throw new common_1[(_0x2abcef(0x153))](_0x2abcef(0x150)+_0xde5abe+']['+_0x215734+']!',common_1[_0x2abcef(0x138)][_0x2abcef(0x14f)]);else return _0xa6152b[0x0]['dst'];return _0xa6152b;}};FanyiService=__decorate([(0x0,common_1[_0x42ed1a(0x14a)])(),__metadata(_0x42ed1a(0x147),[globalConfig_service_1[_0x42ed1a(0x139)]])],FanyiService),exports[_0x42ed1a(0x156)]=FanyiService;