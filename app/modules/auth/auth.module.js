'use strict';function _0x12b1(){const _0x49010f=['../mailer/mailer.service','../chatgpt/whiteList.entity','PassportModule','AccountLogEntity','../userBalance/userBalance.entity','332530NRSquM','registerAsync','Global','./auth.service','ConfigService','JwtStrategy','236812KKrQGu','BalanceEntity','@nestjs/typeorm','../../common/auth/jwtAuth.guard','register','../userBalance/accountLog.entity','RedisCacheModule','MidjourneyEntity','jwt','../redisCache/redisCache.service','getOwnPropertyDescriptor','decorate','234506RdZWHs','WhiteListEntity','147VpYTiE','@nestjs/common','UserEntity','SalesUsersEntity','JwtAuthGuard','defineProperty','UserBalanceService','../sales/salesUsers.entity','__esModule','../redisCache/redisCache.module','../user/user.module','../midjourney/midjourney.entity','../userBalance/balance.entity','AuthController','../access/access.service','JwtModule','AccessEntity','AuthService','../globalConfig/config.entity','./../verification/verifycation.entity','874875FcTUcj','../chatLog/chatLog.entity','21496fcurkQ','RedisCacheService','VerificationService','../user/user.entity','355456PgHDse','AuthModule','../access/access.entity','__decorate','634116rlIhdj','TypeOrmModule','../chatGroup/chatGroup.entity','ChatLogEntity','FingerprintLogEntity','@nestjs/passport','object','../crami/cramiPackage.entity','get','ChatGroupEntity','length','./auth.controller','nestjs-config','../userBalance/userBalance.service','UserModule'];_0x12b1=function(){return _0x49010f;};return _0x12b1();}const _0x38f22c=_0x3448;(function(_0x17f466,_0xb1c3d){const _0xa798bd=_0x3448,_0x39eec3=_0x17f466();while(!![]){try{const _0x36699f=parseInt(_0xa798bd(0xb4))/0x1+-parseInt(_0xa798bd(0xd0))/0x2+parseInt(_0xa798bd(0xca))/0x3+parseInt(_0xa798bd(0xa8))/0x4+-parseInt(_0xa798bd(0xa2))/0x5+-parseInt(_0xa798bd(0xd4))/0x6+parseInt(_0xa798bd(0xb6))/0x7*(-parseInt(_0xa798bd(0xcc))/0x8);if(_0x36699f===_0xb1c3d)break;else _0x39eec3['push'](_0x39eec3['shift']());}catch(_0x251085){_0x39eec3['push'](_0x39eec3['shift']());}}}(_0x12b1,0x2bb2b));function _0x3448(_0x4752f0,_0x38c43f){const _0x12b124=_0x12b1();return _0x3448=function(_0x3448f2,_0x42cfca){_0x3448f2=_0x3448f2-0x9e;let _0x379e24=_0x12b124[_0x3448f2];return _0x379e24;},_0x3448(_0x4752f0,_0x38c43f);}var __decorate=this&&this[_0x38f22c(0xd3)]||function(_0x3e33fc,_0xea2326,_0x348c80,_0x5a1588){const _0x3a0489=_0x38f22c;var _0xd9157d=arguments[_0x3a0489(0xde)],_0x21c28e=_0xd9157d<0x3?_0xea2326:_0x5a1588===null?_0x5a1588=Object[_0x3a0489(0xb2)](_0xea2326,_0x348c80):_0x5a1588,_0x41947d;if(typeof Reflect===_0x3a0489(0xda)&&typeof Reflect[_0x3a0489(0xb3)]==='function')_0x21c28e=Reflect['decorate'](_0x3e33fc,_0xea2326,_0x348c80,_0x5a1588);else{for(var _0x23f3c5=_0x3e33fc[_0x3a0489(0xde)]-0x1;_0x23f3c5>=0x0;_0x23f3c5--)if(_0x41947d=_0x3e33fc[_0x23f3c5])_0x21c28e=(_0xd9157d<0x3?_0x41947d(_0x21c28e):_0xd9157d>0x3?_0x41947d(_0xea2326,_0x348c80,_0x21c28e):_0x41947d(_0xea2326,_0x348c80))||_0x21c28e;}return _0xd9157d>0x3&&_0x21c28e&&Object['defineProperty'](_0xea2326,_0x348c80,_0x21c28e),_0x21c28e;};Object[_0x38f22c(0xbb)](exports,_0x38f22c(0xbe),{'value':!![]}),exports[_0x38f22c(0xd1)]=void 0x0;const verifycation_entity_1=require(_0x38f22c(0xc9)),typeorm_1=require(_0x38f22c(0xaa)),verification_service_1=require('./../verification/verification.service'),mailer_service_1=require(_0x38f22c(0xe3)),nestjs_config_1=require(_0x38f22c(0xe0)),auth_controller_1=require(_0x38f22c(0xdf)),common_1=require(_0x38f22c(0xb7)),auth_service_1=require(_0x38f22c(0xa5)),user_module_1=require(_0x38f22c(0xc0)),passport_1=require(_0x38f22c(0xd9)),jwt_1=require('@nestjs/jwt'),jwt_strategy_1=require('../../common/auth/jwt.strategy'),jwtAuth_guard_1=require(_0x38f22c(0xab)),userBalance_service_1=require(_0x38f22c(0xe1)),balance_entity_1=require(_0x38f22c(0xc2)),accountLog_entity_1=require(_0x38f22c(0xad)),config_entity_1=require(_0x38f22c(0xc8)),cramiPackage_entity_1=require(_0x38f22c(0xdb)),redisCache_service_1=require(_0x38f22c(0xb1)),redisCache_module_1=require(_0x38f22c(0xbf)),userBalance_entity_1=require(_0x38f22c(0xa1)),salesUsers_entity_1=require(_0x38f22c(0xbd)),user_entity_1=require(_0x38f22c(0xcf)),whiteList_entity_1=require(_0x38f22c(0x9e)),fingerprint_entity_1=require('../userBalance/fingerprint.entity'),chatLog_entity_1=require(_0x38f22c(0xcb)),chatGroup_entity_1=require(_0x38f22c(0xd6)),midjourney_entity_1=require(_0x38f22c(0xc1)),access_service_1=require(_0x38f22c(0xc4)),access_entity_1=require(_0x38f22c(0xd2));let AuthModule=class AuthModule{};AuthModule=__decorate([(0x0,common_1[_0x38f22c(0xa4)])(),(0x0,common_1['Module'])({'imports':[user_module_1[_0x38f22c(0xe2)],passport_1[_0x38f22c(0x9f)][_0x38f22c(0xac)]({'defaultStrategy':_0x38f22c(0xb0)}),jwt_1[_0x38f22c(0xc5)][_0x38f22c(0xa3)]({'useFactory':async _0x59a97a=>_0x59a97a[_0x38f22c(0xdc)]('jwt'),'inject':[nestjs_config_1[_0x38f22c(0xa6)]]}),typeorm_1[_0x38f22c(0xd5)]['forFeature']([verifycation_entity_1['VerifycationEntity'],balance_entity_1[_0x38f22c(0xa9)],accountLog_entity_1[_0x38f22c(0xa0)],config_entity_1['ConfigEntity'],cramiPackage_entity_1['CramiPackageEntity'],redisCache_module_1[_0x38f22c(0xae)],userBalance_entity_1['UserBalanceEntity'],salesUsers_entity_1[_0x38f22c(0xb9)],user_entity_1[_0x38f22c(0xb8)],whiteList_entity_1[_0x38f22c(0xb5)],fingerprint_entity_1[_0x38f22c(0xd8)],chatLog_entity_1[_0x38f22c(0xd7)],chatGroup_entity_1[_0x38f22c(0xdd)],midjourney_entity_1[_0x38f22c(0xaf)],access_entity_1[_0x38f22c(0xc6)]])],'controllers':[auth_controller_1[_0x38f22c(0xc3)]],'providers':[auth_service_1[_0x38f22c(0xc7)],access_service_1['AccessService'],jwt_strategy_1[_0x38f22c(0xa7)],jwtAuth_guard_1[_0x38f22c(0xba)],mailer_service_1['MailerService'],verification_service_1[_0x38f22c(0xce)],userBalance_service_1[_0x38f22c(0xbc)],redisCache_service_1[_0x38f22c(0xcd)]],'exports':[auth_service_1['AuthService']]})],AuthModule),exports[_0x38f22c(0xd1)]=AuthModule;