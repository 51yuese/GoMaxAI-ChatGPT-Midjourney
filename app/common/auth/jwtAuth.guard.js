'use strict';const _0x488bca=_0x4763;(function(_0x46881f,_0x3e124b){const _0x2ea35c=_0x4763,_0x389ef8=_0x46881f();while(!![]){try{const _0x2d865b=-parseInt(_0x2ea35c(0x8b))/0x1+parseInt(_0x2ea35c(0x87))/0x2+-parseInt(_0x2ea35c(0x8d))/0x3*(parseInt(_0x2ea35c(0xc1))/0x4)+parseInt(_0x2ea35c(0xbc))/0x5*(-parseInt(_0x2ea35c(0xb5))/0x6)+parseInt(_0x2ea35c(0x86))/0x7*(-parseInt(_0x2ea35c(0x95))/0x8)+parseInt(_0x2ea35c(0xac))/0x9*(parseInt(_0x2ea35c(0xa6))/0xa)+-parseInt(_0x2ea35c(0x8a))/0xb*(-parseInt(_0x2ea35c(0xa1))/0xc);if(_0x2d865b===_0x3e124b)break;else _0x389ef8['push'](_0x389ef8['shift']());}catch(_0xfb6070){_0x389ef8['push'](_0x389ef8['shift']());}}}(_0x381c,0xcf3af));var __decorate=this&&this[_0x488bca(0xb2)]||function(_0x99c60f,_0x9b1a98,_0x840a2b,_0x3e8e61){const _0x15bc29=_0x488bca;var _0x458867=arguments[_0x15bc29(0x93)],_0xca1eeb=_0x458867<0x3?_0x9b1a98:_0x3e8e61===null?_0x3e8e61=Object['getOwnPropertyDescriptor'](_0x9b1a98,_0x840a2b):_0x3e8e61,_0x5b1336;if(typeof Reflect===_0x15bc29(0xa2)&&typeof Reflect[_0x15bc29(0xa8)]===_0x15bc29(0xaa))_0xca1eeb=Reflect['decorate'](_0x99c60f,_0x9b1a98,_0x840a2b,_0x3e8e61);else{for(var _0x590e98=_0x99c60f['length']-0x1;_0x590e98>=0x0;_0x590e98--)if(_0x5b1336=_0x99c60f[_0x590e98])_0xca1eeb=(_0x458867<0x3?_0x5b1336(_0xca1eeb):_0x458867>0x3?_0x5b1336(_0x9b1a98,_0x840a2b,_0xca1eeb):_0x5b1336(_0x9b1a98,_0x840a2b))||_0xca1eeb;}return _0x458867>0x3&&_0xca1eeb&&Object['defineProperty'](_0x9b1a98,_0x840a2b,_0xca1eeb),_0xca1eeb;},__metadata=this&&this[_0x488bca(0x8f)]||function(_0x259e2f,_0x45a1fc){const _0x30a34f=_0x488bca;if(typeof Reflect===_0x30a34f(0xa2)&&typeof Reflect[_0x30a34f(0x91)]===_0x30a34f(0xaa))return Reflect['metadata'](_0x259e2f,_0x45a1fc);};Object[_0x488bca(0x9e)](exports,_0x488bca(0xb9),{'value':!![]}),exports[_0x488bca(0x8c)]=void 0x0;function _0x4763(_0x2114d1,_0x136808){const _0x381c84=_0x381c();return _0x4763=function(_0x47634a,_0x33ab2b){_0x47634a=_0x47634a-0x84;let _0xd6642c=_0x381c84[_0x47634a];return _0xd6642c;},_0x4763(_0x2114d1,_0x136808);}const redisCache_service_1=require(_0x488bca(0x84)),common_1=require(_0x488bca(0x94)),passport_1=require(_0x488bca(0x9c)),jwt=require(_0x488bca(0xbf)),core_1=require('@nestjs/core'),globalConfig_service_1=require('../../modules/globalConfig/globalConfig.service'),utils_1=require(_0x488bca(0x99)),auth_service_1=require('../../modules/auth/auth.service');let JwtAuthGuard=class JwtAuthGuard extends(0x0,passport_1[_0x488bca(0xa5)])(_0x488bca(0xa3)){constructor(_0x54e0d0,_0x1f936c,_0x1f9040,_0x56b22c){const _0x78e3fc=_0x488bca;super(),this['redisCacheService']=_0x54e0d0,this[_0x78e3fc(0xc3)]=_0x1f936c,this['globalConfigService']=_0x1f9040,this[_0x78e3fc(0x9f)]=_0x56b22c;}async[_0x488bca(0xa7)](_0x1fc9e6){const _0x415a11=_0x488bca;let _0x25386c=![];!this[_0x415a11(0xa0)]&&(this[_0x415a11(0xa0)]=this['moduleRef']['get'](redisCache_service_1[_0x415a11(0xb0)],{'strict':![]}));const _0x3e6077=_0x1fc9e6[_0x415a11(0xb3)]()[_0x415a11(0x9a)](),_0x1bbef7=this[_0x415a11(0xb4)](_0x3e6077);_0x3e6077[_0x415a11(0x89)]=this[_0x415a11(0xc0)](_0x1bbef7);const _0x21ea72=this['globalConfigService'][_0x415a11(0xb6)]();if(_0x21ea72&&!_0x3e6077[_0x415a11(0x88)][_0x415a11(0x92)]('getInfo')){const _0x36ac5e=(0x0,utils_1['getRandomItemFromArray'])(utils_1[_0x415a11(0xc2)]);throw new common_1[(_0x415a11(0xa4))]((0x0,utils_1[_0x415a11(0xbe)])(_0x36ac5e),common_1['HttpStatus'][_0x415a11(0xa9)]);}else _0x25386c=!![];return!_0x25386c&&process['exit'](0x1),await this[_0x415a11(0xa0)]['checkTokenAuth'](_0x1bbef7,_0x3e6077),!![];}[_0x488bca(0xb4)](_0x45bf70){const _0xe2a495=_0x488bca;if(!_0x45bf70[_0xe2a495(0xba)]['authorization']){if(_0x45bf70['headers'][_0xe2a495(0x96)]){let _0x35e1b9=_0x45bf70[_0xe2a495(0xba)]['fingerprint'];return _0x35e1b9>0x7fffffff&&(_0x35e1b9=_0x35e1b9[_0xe2a495(0x85)]()[_0xe2a495(0xad)](-0x9),_0x35e1b9=Number(String(Number(_0x35e1b9))),console['log'](_0xe2a495(0x97),_0x35e1b9)),this[_0xe2a495(0x9f)][_0xe2a495(0xbb)](_0x35e1b9);}return null;}const _0x36553e=_0x45bf70[_0xe2a495(0xba)][_0xe2a495(0xb8)][_0xe2a495(0xae)]('\x20');if(_0x36553e[_0xe2a495(0x93)]!==0x2||_0x36553e[0x0]!=='Bearer')return null;return _0x36553e[0x1];}[_0x488bca(0xc0)](_0x46c73e){const _0x2f3dc0=_0x488bca;try{return jwt[_0x2f3dc0(0xb1)](_0x46c73e,process[_0x2f3dc0(0xaf)][_0x2f3dc0(0x8e)]);}catch(_0x1aa830){throw new common_1[(_0x2f3dc0(0xa4))]('亲爱的用户,请登录后继续操作,我们正在等您的到来！',common_1[_0x2f3dc0(0xbd)]['UNAUTHORIZED']);}}['handleRequest'](_0x225e9a,_0x498025,_0x2ccbb6){const _0x15ae40=_0x488bca;if(_0x225e9a||!_0x498025){console['log'](_0x15ae40(0x9b),_0x225e9a);throw _0x225e9a||new common_1[(_0x15ae40(0x9d))]();}return _0x498025;}};JwtAuthGuard=__decorate([(0x0,common_1[_0x488bca(0xb7)])(),__metadata(_0x488bca(0xab),[redisCache_service_1[_0x488bca(0xb0)],core_1['ModuleRef'],globalConfig_service_1[_0x488bca(0x90)],auth_service_1[_0x488bca(0x98)]])],JwtAuthGuard),exports['JwtAuthGuard']=JwtAuthGuard;function _0x381c(){const _0x509d7b=['jsonwebtoken','validateToken','3956DauUec','copyRightMsg','moduleRef','../../modules/redisCache/redisCache.service','toString','3259494WYMcwI','798980VuFQRk','path','user','24424763yTuxcU','1010666OlIutX','JwtAuthGuard','1851hiFJLD','JWT_SECRET','__metadata','GlobalConfigService','metadata','includes','length','@nestjs/common','16jwVQqo','fingerprint','id:\x20','AuthService','../utils','getRequest','err:\x20','@nestjs/passport','UnauthorizedException','defineProperty','authService','redisCacheService','24YbWvIe','object','jwt','HttpException','AuthGuard','10PGlWdh','canActivate','decorate','BAD_REQUEST','function','design:paramtypes','458937GGjYFC','slice','split','env','RedisCacheService','verify','__decorate','switchToHttp','extractToken','6YsUDOm','getGoMaxAiToken','Injectable','authorization','__esModule','headers','createTokenFromFingerprint','7451855MFTdHj','HttpStatus','decrypt'];_0x381c=function(){return _0x509d7b;};return _0x381c();}