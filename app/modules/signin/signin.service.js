'use strict';const _0x6b9db9=_0x5309;(function(_0x41a60a,_0xce7bae){const _0x4a7faa=_0x5309,_0x17851b=_0x41a60a();while(!![]){try{const _0x2be19b=-parseInt(_0x4a7faa(0x17a))/0x1+parseInt(_0x4a7faa(0x166))/0x2+parseInt(_0x4a7faa(0x14c))/0x3+parseInt(_0x4a7faa(0x153))/0x4+-parseInt(_0x4a7faa(0x136))/0x5+-parseInt(_0x4a7faa(0x169))/0x6+-parseInt(_0x4a7faa(0x158))/0x7*(-parseInt(_0x4a7faa(0x171))/0x8);if(_0x2be19b===_0xce7bae)break;else _0x17851b['push'](_0x17851b['shift']());}catch(_0x5c809d){_0x17851b['push'](_0x17851b['shift']());}}}(_0x5089,0x463c3));function _0x5309(_0x2aeea2,_0x1cb9c5){const _0x508927=_0x5089();return _0x5309=function(_0x5309f3,_0x431f12){_0x5309f3=_0x5309f3-0x12e;let _0x2c4bda=_0x508927[_0x5309f3];return _0x2c4bda;},_0x5309(_0x2aeea2,_0x1cb9c5);}var __decorate=this&&this[_0x6b9db9(0x177)]||function(_0x3c4b84,_0x2cf28c,_0x2276e8,_0x413bd4){const _0x2ad94e=_0x6b9db9;var _0x18d329=arguments[_0x2ad94e(0x164)],_0x1f395e=_0x18d329<0x3?_0x2cf28c:_0x413bd4===null?_0x413bd4=Object[_0x2ad94e(0x152)](_0x2cf28c,_0x2276e8):_0x413bd4,_0x5d97fb;if(typeof Reflect===_0x2ad94e(0x14f)&&typeof Reflect['decorate']==='function')_0x1f395e=Reflect[_0x2ad94e(0x17b)](_0x3c4b84,_0x2cf28c,_0x2276e8,_0x413bd4);else{for(var _0x2a9c8d=_0x3c4b84[_0x2ad94e(0x164)]-0x1;_0x2a9c8d>=0x0;_0x2a9c8d--)if(_0x5d97fb=_0x3c4b84[_0x2a9c8d])_0x1f395e=(_0x18d329<0x3?_0x5d97fb(_0x1f395e):_0x18d329>0x3?_0x5d97fb(_0x2cf28c,_0x2276e8,_0x1f395e):_0x5d97fb(_0x2cf28c,_0x2276e8))||_0x1f395e;}return _0x18d329>0x3&&_0x1f395e&&Object['defineProperty'](_0x2cf28c,_0x2276e8,_0x1f395e),_0x1f395e;},__metadata=this&&this[_0x6b9db9(0x14a)]||function(_0x30edce,_0x590116){const _0x29edd2=_0x6b9db9;if(typeof Reflect===_0x29edd2(0x14f)&&typeof Reflect[_0x29edd2(0x12e)]===_0x29edd2(0x167))return Reflect['metadata'](_0x30edce,_0x590116);},__param=this&&this['__param']||function(_0x56cf6d,_0x3fb9de){return function(_0x20940f,_0x528b9f){_0x3fb9de(_0x20940f,_0x528b9f,_0x56cf6d);};};Object[_0x6b9db9(0x143)](exports,_0x6b9db9(0x134),{'value':!![]}),exports[_0x6b9db9(0x14e)]=void 0x0;const globalConfig_service_1=require(_0x6b9db9(0x16e)),userBalance_service_1=require(_0x6b9db9(0x13a)),common_1=require(_0x6b9db9(0x175)),signIn_entity_1=require(_0x6b9db9(0x14d)),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require(_0x6b9db9(0x161)),date_1=require('../../common/utils/date'),user_entity_1=require(_0x6b9db9(0x151)),balance_constant_1=require(_0x6b9db9(0x145));let SigninService=class SigninService{constructor(_0x59e63c,_0x1045e3,_0x2a6ebd,_0x4a263a){const _0x35b4ad=_0x6b9db9;this[_0x35b4ad(0x141)]=_0x59e63c,this[_0x35b4ad(0x14b)]=_0x1045e3,this[_0x35b4ad(0x140)]=_0x2a6ebd,this[_0x35b4ad(0x135)]=_0x4a263a;}async['sign'](_0x531bd7){const _0x104a78=_0x6b9db9,{id:_0x492928}=_0x531bd7[_0x104a78(0x173)],_0x21008e=(0x0,date_1['default'])(new Date())[_0x104a78(0x13d)](_0x104a78(0x16b)),_0x1a4dc5=await this[_0x104a78(0x141)][_0x104a78(0x13c)]({'where':{'userId':_0x492928,'signInDate':_0x21008e}});if(_0x1a4dc5)throw new common_1[(_0x104a78(0x15f))]('今日已签到、改天再来吧!.',common_1[_0x104a78(0x15d)]['BAD_REQUEST']);const {model3Count:_0x1a1342,model4Count:_0xd8b9ad,drawMjCount:_0x5d8c33}=await this[_0x104a78(0x135)][_0x104a78(0x150)]();await this[_0x104a78(0x141)][_0x104a78(0x146)]({'userId':_0x492928,'signInTime':new Date(),'signInDate':_0x21008e,'isSigned':!![]}),await this['userBalanceService'][_0x104a78(0x170)](_0x492928,{'model3Count':_0x1a1342,'model4Count':_0xd8b9ad,'drawMjCount':_0x5d8c33}),await this['userBalanceService'][_0x104a78(0x16a)]({'userId':_0x492928,'rechargeType':balance_constant_1['RechargeType'][_0x104a78(0x162)],'model3Count':_0x1a1342,'model4Count':_0xd8b9ad,'drawMjCount':_0x5d8c33});const _0x11b888=(0x0,date_1[_0x104a78(0x139)])(new Date())[_0x104a78(0x12f)](0x1,_0x104a78(0x15b))[_0x104a78(0x13d)](_0x104a78(0x16b)),_0x3c9149=await this[_0x104a78(0x141)][_0x104a78(0x13c)]({'where':{'userId':_0x492928,'signInDate':_0x11b888}});if(_0x3c9149){common_1[_0x104a78(0x131)][_0x104a78(0x178)]('用户'+_0x492928+_0x104a78(0x16c),_0x104a78(0x14e));const _0x360175=await this[_0x104a78(0x14b)][_0x104a78(0x13c)]({'where':{'id':_0x492928}});if(!_0x360175)throw new common_1[(_0x104a78(0x15f))]('用户不存在',common_1[_0x104a78(0x15d)][_0x104a78(0x13e)]);const {consecutiveDays:consecutiveDays=0x0}=_0x360175;await this['userEntity'][_0x104a78(0x147)]({'id':_0x492928},{'consecutiveDays':consecutiveDays+0x1});}else common_1[_0x104a78(0x131)]['debug']('用户'+_0x492928+_0x104a78(0x160),_0x104a78(0x14e)),await this[_0x104a78(0x14b)]['update']({'id':_0x492928},{'consecutiveDays':0x1});return _0x104a78(0x157);}async[_0x6b9db9(0x149)](_0x446232){const _0xf7fa7d=_0x6b9db9;try{const {id:_0xe471f5}=_0x446232[_0xf7fa7d(0x173)],_0x34768=(0x0,date_1[_0xf7fa7d(0x139)])()[_0xf7fa7d(0x13b)](_0xf7fa7d(0x137))[_0xf7fa7d(0x13d)](_0xf7fa7d(0x176)),_0x44eb2f=(0x0,date_1[_0xf7fa7d(0x139)])()[_0xf7fa7d(0x174)](_0xf7fa7d(0x137))['format'](_0xf7fa7d(0x176)),_0x8e0b7=this['signinEntity'][_0xf7fa7d(0x15a)]('signin'),_0x23ccdf=await _0x8e0b7[_0xf7fa7d(0x154)]('signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned')[_0xf7fa7d(0x163)](_0xf7fa7d(0x179),{'userId':_0x446232['user']['id']})[_0xf7fa7d(0x163)]('signin.signInTime\x20>=\x20:firstDay',{'firstDay':_0x34768})[_0xf7fa7d(0x163)](_0xf7fa7d(0x156),{'lastDay':_0x44eb2f})['getRawMany'](),_0x2052d4=new Date(_0x34768),_0x568d04=new Date(_0x44eb2f),_0x41a91b=[],_0xf39983=new Date(_0x2052d4);while(_0xf39983<=_0x568d04){_0x41a91b['push']((0x0,date_1[_0xf7fa7d(0x139)])(new Date(_0xf39983))[_0xf7fa7d(0x13d)]('YYYY-MM-DD')),_0xf39983[_0xf7fa7d(0x168)](_0xf39983[_0xf7fa7d(0x148)]()+0x1);}const _0x2a44fa=[];for(const _0x2a1beb of _0x41a91b){const _0x144a60=_0x23ccdf[_0xf7fa7d(0x15c)](_0x652266=>_0x652266[_0xf7fa7d(0x16d)]===_0x2a1beb);!_0x144a60?_0x2a44fa[_0xf7fa7d(0x165)]({'signInDate':_0x2a1beb,'isSigned':![]}):(_0x144a60[_0xf7fa7d(0x142)]=!![],_0x2a44fa[_0xf7fa7d(0x165)](_0x144a60));}return _0x2a44fa;}catch(_0x1e0cfc){console[_0xf7fa7d(0x172)](_0xf7fa7d(0x16f),_0x1e0cfc);throw new common_1[(_0xf7fa7d(0x15f))](_0xf7fa7d(0x159),common_1['HttpStatus']['BAD_REQUEST']);}}};SigninService=__decorate([(0x0,common_1[_0x6b9db9(0x130)])(),__param(0x0,(0x0,typeorm_1[_0x6b9db9(0x144)])(signIn_entity_1[_0x6b9db9(0x15e)])),__param(0x1,(0x0,typeorm_1[_0x6b9db9(0x144)])(user_entity_1[_0x6b9db9(0x133)])),__metadata(_0x6b9db9(0x13f),[typeorm_2['Repository'],typeorm_2[_0x6b9db9(0x132)],userBalance_service_1[_0x6b9db9(0x155)],globalConfig_service_1[_0x6b9db9(0x138)]])],SigninService),exports['SigninService']=SigninService;function _0x5089(){const _0x22ca48=['./../userBalance/userBalance.service','startOf','findOne','format','BAD_REQUEST','design:paramtypes','userBalanceService','signinEntity','isSigned','defineProperty','InjectRepository','../../common/constants/balance.constant','save','update','getDate','getSigninLog','__metadata','userEntity','519936qMGghY','./signIn.entity','SigninService','object','getSignatureGiftConfig','../user/user.entity','getOwnPropertyDescriptor','1592180MdtLhS','select','UserBalanceService','signin.signInTime\x20<=\x20:lastDay','Sign\x20in\x20successful.','70DDvmFN','获取签到数据失败！','createQueryBuilder','day','find','HttpStatus','SigninEntity','HttpException','昨天没签到、今天重置天数！','typeorm','SIGN_IN','andWhere','length','push','242304JbwWqz','function','setDate','1060920TttPKT','saveRecordRechargeLog','YYYY-MM-DD','昨天签到了、今天是连续签到！','signInDate','./../globalConfig/globalConfig.service','error:\x20','addBalanceToUser','227888DxOOsr','log','user','endOf','@nestjs/common','YYYY-MM-DD\x20HH:mm:ss','__decorate','debug','signin.userId\x20=\x20:userId','71208jzaCMS','decorate','metadata','subtract','Injectable','Logger','Repository','UserEntity','__esModule','globalConfigService','2208290SGqgPw','month','GlobalConfigService','default'];_0x5089=function(){return _0x22ca48;};return _0x5089();}