'use strict';function _0x57ec(){const _0x58c717=['order','des','HttpException','payService','orderEntity','goodsId','createQueryBuilder','queryAllOrder','log','queryPayType','../pay/pay.service','getRawOne','findOne','createOrderId','@nestjs/common','Repository','total','defineProperty','../crami/cramiPackage.entity','cramiPackageEntity','price','__decorate','userEntity','globalConfigService','save','1540yRdaey','select','message','DESC','query','assign','356808ppCUwD','InjectRepository','coverImg','GlobalConfigService','SUM(order.price)','payPlatform','Injectable','订单不存在!','goodsInfo','__param','40472LFQeZd','1285308ZZgyCi','find','decorate','3044515vnQfYD','status','./../user/user.entity','UserEntity','userId','OrderEntity','total_price','OrderService','__metadata','user','create','pay','email','queryByOrderId','forEach','BAD_REQUEST','321856xcJQtq','PayService','../../common/utils','count','套餐不存在!','metadata','HttpStatus','UNAUTHORIZED','890740lVkzAR','userInfo','length','12WaMeso','./order.entity','name','function','deleteNotPay','object','findAndCount','deleteOrder','design:paramtypes','getOwnPropertyDescriptor','channel','23730687XPCvFM','orderId','map'];_0x57ec=function(){return _0x58c717;};return _0x57ec();}const _0x536f7a=_0x2562;function _0x2562(_0xbac82f,_0x4d3de7){const _0x57ec0c=_0x57ec();return _0x2562=function(_0x256252,_0x6b7a0c){_0x256252=_0x256252-0xaf;let _0x4ae751=_0x57ec0c[_0x256252];return _0x4ae751;},_0x2562(_0xbac82f,_0x4d3de7);}(function(_0x250775,_0x50de6d){const _0x17d0aa=_0x2562,_0x4d02a3=_0x250775();while(!![]){try{const _0x1a518e=-parseInt(_0x17d0aa(0xdc))/0x1+parseInt(_0x17d0aa(0x102))/0x2+parseInt(_0x17d0aa(0xe7))/0x3+-parseInt(_0x17d0aa(0xfa))/0x4+-parseInt(_0x17d0aa(0xea))/0x5*(parseInt(_0x17d0aa(0xaf))/0x6)+-parseInt(_0x17d0aa(0xd6))/0x7*(parseInt(_0x17d0aa(0xe6))/0x8)+parseInt(_0x17d0aa(0xba))/0x9;if(_0x1a518e===_0x50de6d)break;else _0x4d02a3['push'](_0x4d02a3['shift']());}catch(_0x6d0570){_0x4d02a3['push'](_0x4d02a3['shift']());}}}(_0x57ec,0xb545b));var __decorate=this&&this[_0x536f7a(0xd2)]||function(_0x4c4e94,_0x294334,_0x13f61b,_0x5ebd57){const _0x5b7f0d=_0x536f7a;var _0x319d27=arguments['length'],_0x2df1c3=_0x319d27<0x3?_0x294334:_0x5ebd57===null?_0x5ebd57=Object[_0x5b7f0d(0xb8)](_0x294334,_0x13f61b):_0x5ebd57,_0x2b1c84;if(typeof Reflect===_0x5b7f0d(0xb4)&&typeof Reflect[_0x5b7f0d(0xe9)]===_0x5b7f0d(0xb2))_0x2df1c3=Reflect['decorate'](_0x4c4e94,_0x294334,_0x13f61b,_0x5ebd57);else{for(var _0x876ab0=_0x4c4e94[_0x5b7f0d(0x104)]-0x1;_0x876ab0>=0x0;_0x876ab0--)if(_0x2b1c84=_0x4c4e94[_0x876ab0])_0x2df1c3=(_0x319d27<0x3?_0x2b1c84(_0x2df1c3):_0x319d27>0x3?_0x2b1c84(_0x294334,_0x13f61b,_0x2df1c3):_0x2b1c84(_0x294334,_0x13f61b))||_0x2df1c3;}return _0x319d27>0x3&&_0x2df1c3&&Object[_0x5b7f0d(0xce)](_0x294334,_0x13f61b,_0x2df1c3),_0x2df1c3;},__metadata=this&&this[_0x536f7a(0xf2)]||function(_0x27e12b,_0x3006cb){const _0x5389eb=_0x536f7a;if(typeof Reflect===_0x5389eb(0xb4)&&typeof Reflect[_0x5389eb(0xff)]==='function')return Reflect[_0x5389eb(0xff)](_0x27e12b,_0x3006cb);},__param=this&&this[_0x536f7a(0xe5)]||function(_0x256a5e,_0x30a197){return function(_0x413b0c,_0x918686){_0x30a197(_0x413b0c,_0x918686,_0x256a5e);};};Object[_0x536f7a(0xce)](exports,'__esModule',{'value':!![]}),exports[_0x536f7a(0xf1)]=void 0x0;const user_entity_1=require(_0x536f7a(0xec)),typeorm_1=require('@nestjs/typeorm'),common_1=require(_0x536f7a(0xcb)),typeorm_2=require('typeorm'),order_entity_1=require(_0x536f7a(0xb0)),cramiPackage_entity_1=require(_0x536f7a(0xcf)),utils_1=require(_0x536f7a(0xfc)),pay_service_1=require(_0x536f7a(0xc7)),globalConfig_service_1=require('../globalConfig/globalConfig.service');let OrderService=class OrderService{constructor(_0x3ff468,_0x33779b,_0x369dd6,_0x4b3633,_0x364979){const _0x5e166d=_0x536f7a;this['orderEntity']=_0x3ff468,this[_0x5e166d(0xd0)]=_0x33779b,this[_0x5e166d(0xd3)]=_0x369dd6,this[_0x5e166d(0xc0)]=_0x4b3633,this['globalConfigService']=_0x364979;}async['buy'](_0x1037ca,_0x431e9a){const _0x3c729b=_0x536f7a;try{const {goodsId:_0x19112a,count:count=0x1,payType:_0x4c50e5}=_0x1037ca,{id:_0x349518}=_0x431e9a[_0x3c729b(0xf3)];if(_0x349518>0xf4240)throw new common_1[(_0x3c729b(0xbf))]('请先注册账号后购买商品！',common_1[_0x3c729b(0x100)][_0x3c729b(0x101)]);const _0x373024=await this[_0x3c729b(0xf4)](_0x349518,_0x19112a,count,_0x4c50e5),_0x49b256=await this['payService'][_0x3c729b(0xf5)](_0x349518,_0x373024[_0x3c729b(0xbb)],_0x4c50e5);return Object[_0x3c729b(0xdb)](Object[_0x3c729b(0xdb)]({},_0x49b256),{'orderId':_0x373024[_0x3c729b(0xbb)],'platform':_0x373024[_0x3c729b(0xe1)],'total':_0x373024[_0x3c729b(0xcd)]});}catch(_0x103e3c){if(_0x103e3c[_0x3c729b(0xeb)]===0x191)throw new common_1[(_0x3c729b(0xbf))](_0x103e3c[_0x3c729b(0xd8)],common_1[_0x3c729b(0x100)][_0x3c729b(0x101)]);throw new common_1[(_0x3c729b(0xbf))](_0x103e3c['message']||'购买失败!',common_1[_0x3c729b(0x100)]['BAD_REQUEST']);}}async[_0x536f7a(0xf7)](_0x143ef2,_0x50274f){const _0x19c1aa=_0x536f7a,{id:_0x1311c8}=_0x143ef2[_0x19c1aa(0xf3)],{orderId:_0x5486fe}=_0x50274f,_0x41289a=await this[_0x19c1aa(0xc1)][_0x19c1aa(0xc9)]({'where':{'userId':_0x1311c8,'orderId':_0x5486fe}});if(!_0x41289a)throw new common_1[(_0x19c1aa(0xbf))]('订单不存在!',common_1[_0x19c1aa(0x100)][_0x19c1aa(0xf9)]);return _0x41289a;}async[_0x536f7a(0xf4)](_0x45c485,_0x666826,_0x56da4b,_0x244b8b){const _0x41fa2c=_0x536f7a,_0xe4cdd0=await this[_0x41fa2c(0xd4)][_0x41fa2c(0xc6)](),_0x28c4df=await this['cramiPackageEntity'][_0x41fa2c(0xc9)]({'where':{'id':_0x666826}});if(!_0x28c4df)throw new common_1[(_0x41fa2c(0xbf))](_0x41fa2c(0xfe),common_1[_0x41fa2c(0x100)]['BAD_REQUEST']);const _0x347162={};_0x347162[_0x41fa2c(0xbb)]=(0x0,utils_1[_0x41fa2c(0xca)])(),console[_0x41fa2c(0xc5)]('do\x20',_0x347162['orderId']),_0x347162[_0x41fa2c(0xee)]=_0x45c485,_0x347162[_0x41fa2c(0xc2)]=_0x666826,_0x347162['price']=Number(_0x28c4df[_0x41fa2c(0xd1)]),_0x347162[_0x41fa2c(0xfd)]=_0x56da4b,_0x347162[_0x41fa2c(0xcd)]=Number(_0x28c4df[_0x41fa2c(0xd1)])*_0x56da4b,_0x347162['payPlatform']=_0xe4cdd0,_0x347162[_0x41fa2c(0xb9)]=_0x244b8b;const _0x9804fe=await this[_0x41fa2c(0xc1)][_0x41fa2c(0xd5)](_0x347162);return _0x9804fe;}async[_0x536f7a(0xda)](_0x371b90,_0x47142f,_0x48600b){const _0x4d9267=_0x536f7a;return await this[_0x4d9267(0xc1)][_0x4d9267(0xb5)]({'where':{'userId':_0x371b90},'order':{'id':_0x4d9267(0xd9)},'skip':(_0x47142f-0x1)*_0x48600b,'take':_0x48600b});}async[_0x536f7a(0xc4)](_0x14874b){const _0x1aa15e=_0x536f7a,{page:_0x4e9acc,size:_0x4d0859,userId:_0x4fdef3,platform:_0x1978be,status:_0x4bf1af}=_0x14874b,_0x28c566={};if(_0x4fdef3)_0x28c566[_0x1aa15e(0xee)]=_0x4fdef3;if(_0x1978be)_0x28c566['payPlatform']=_0x1978be;if(_0x4bf1af)_0x28c566[_0x1aa15e(0xeb)]=_0x4bf1af;const [_0x580a7f,_0x293a67]=await this[_0x1aa15e(0xc1)][_0x1aa15e(0xb5)]({'order':{'id':_0x1aa15e(0xd9)},'where':_0x28c566,'skip':(_0x4e9acc-0x1)*_0x4d0859,'take':_0x4d0859}),_0x2a5b99=_0x580a7f[_0x1aa15e(0xbc)](_0x470747=>_0x470747[_0x1aa15e(0xee)]),_0x2d3902=_0x580a7f[_0x1aa15e(0xbc)](_0x12cfc5=>_0x12cfc5[_0x1aa15e(0xc2)]),_0x3bac89=await this[_0x1aa15e(0xd3)][_0x1aa15e(0xe8)]({'where':{'id':(0x0,typeorm_2['In'])(_0x2a5b99)},'select':['id','username',_0x1aa15e(0xf6)]}),_0x3197ae=await this[_0x1aa15e(0xd0)][_0x1aa15e(0xe8)]({'where':{'id':(0x0,typeorm_2['In'])(_0x2d3902)},'select':['id',_0x1aa15e(0xb1),_0x1aa15e(0xde),_0x1aa15e(0xbe)]});_0x580a7f[_0x1aa15e(0xf8)](_0x21ab13=>{const _0x1f5bd9=_0x1aa15e;_0x21ab13[_0x1f5bd9(0x103)]=_0x3bac89[_0x1f5bd9(0xe8)](_0xe638fc=>_0xe638fc['id']===_0x21ab13[_0x1f5bd9(0xee)]),_0x21ab13[_0x1f5bd9(0xe4)]=_0x3197ae[_0x1f5bd9(0xe8)](_0x3709b6=>_0x3709b6['id']===_0x21ab13[_0x1f5bd9(0xc2)]);});const _0x37359b=await this['orderEntity'][_0x1aa15e(0xc3)](_0x1aa15e(0xbd))[_0x1aa15e(0xd7)](_0x1aa15e(0xe0),_0x1aa15e(0xf0))[_0x1aa15e(0xc8)]();return Object['assign']({'rows':_0x580a7f,'count':_0x293a67},_0x37359b);}async[_0x536f7a(0xb6)](_0x5f0c5d){const _0x4df506=_0x536f7a,{orderId:_0xb0e3f7}=_0x5f0c5d,_0x463b93=await this[_0x4df506(0xc1)][_0x4df506(0xc9)]({'where':{'orderId':_0xb0e3f7}});if(!_0x463b93)throw new common_1['HttpException'](_0x4df506(0xe3),common_1[_0x4df506(0x100)][_0x4df506(0xf9)]);return await this[_0x4df506(0xc1)]['delete']({'orderId':_0xb0e3f7});}async[_0x536f7a(0xb3)](){return await this['orderEntity']['delete']({'status':0x0});}};OrderService=__decorate([(0x0,common_1[_0x536f7a(0xe2)])(),__param(0x0,(0x0,typeorm_1[_0x536f7a(0xdd)])(order_entity_1[_0x536f7a(0xef)])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(cramiPackage_entity_1['CramiPackageEntity'])),__param(0x2,(0x0,typeorm_1[_0x536f7a(0xdd)])(user_entity_1[_0x536f7a(0xed)])),__metadata(_0x536f7a(0xb7),[typeorm_2[_0x536f7a(0xcc)],typeorm_2[_0x536f7a(0xcc)],typeorm_2[_0x536f7a(0xcc)],pay_service_1[_0x536f7a(0xfb)],globalConfig_service_1[_0x536f7a(0xdf)]])],OrderService),exports[_0x536f7a(0xf1)]=OrderService;