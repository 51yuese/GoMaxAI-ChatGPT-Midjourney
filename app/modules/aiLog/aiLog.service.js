'use strict';function _0x5f2c(_0x5502e5,_0x575e8c){const _0x144988=_0x1449();return _0x5f2c=function(_0x5f2cfd,_0x1d303d){_0x5f2cfd=_0x5f2cfd-0xa4;let _0x14a55d=_0x144988[_0x5f2cfd];return _0x14a55d;},_0x5f2c(_0x5502e5,_0x575e8c);}const _0x5499eb=_0x5f2c;(function(_0x2f7fb8,_0x381b01){const _0x22acd1=_0x5f2c,_0x260ad0=_0x2f7fb8();while(!![]){try{const _0x530614=parseInt(_0x22acd1(0xb5))/0x1+-parseInt(_0x22acd1(0xae))/0x2*(parseInt(_0x22acd1(0xb0))/0x3)+-parseInt(_0x22acd1(0xb6))/0x4*(-parseInt(_0x22acd1(0xcd))/0x5)+parseInt(_0x22acd1(0xc0))/0x6+-parseInt(_0x22acd1(0xac))/0x7+-parseInt(_0x22acd1(0xce))/0x8+-parseInt(_0x22acd1(0xc7))/0x9*(-parseInt(_0x22acd1(0xa7))/0xa);if(_0x530614===_0x381b01)break;else _0x260ad0['push'](_0x260ad0['shift']());}catch(_0x1ef3a6){_0x260ad0['push'](_0x260ad0['shift']());}}}(_0x1449,0x5c09e));var __decorate=this&&this[_0x5499eb(0xc9)]||function(_0x1aa6b6,_0x2b4fe0,_0x72cb8e,_0x3d719b){const _0x1d1f9b=_0x5499eb;var _0x55eead=arguments[_0x1d1f9b(0xd0)],_0x11f007=_0x55eead<0x3?_0x2b4fe0:_0x3d719b===null?_0x3d719b=Object[_0x1d1f9b(0xb8)](_0x2b4fe0,_0x72cb8e):_0x3d719b,_0x495c72;if(typeof Reflect==='object'&&typeof Reflect[_0x1d1f9b(0xb1)]===_0x1d1f9b(0xbe))_0x11f007=Reflect[_0x1d1f9b(0xb1)](_0x1aa6b6,_0x2b4fe0,_0x72cb8e,_0x3d719b);else{for(var _0x1934dc=_0x1aa6b6[_0x1d1f9b(0xd0)]-0x1;_0x1934dc>=0x0;_0x1934dc--)if(_0x495c72=_0x1aa6b6[_0x1934dc])_0x11f007=(_0x55eead<0x3?_0x495c72(_0x11f007):_0x55eead>0x3?_0x495c72(_0x2b4fe0,_0x72cb8e,_0x11f007):_0x495c72(_0x2b4fe0,_0x72cb8e))||_0x11f007;}return _0x55eead>0x3&&_0x11f007&&Object[_0x1d1f9b(0xc3)](_0x2b4fe0,_0x72cb8e,_0x11f007),_0x11f007;},__metadata=this&&this[_0x5499eb(0xa5)]||function(_0x430cea,_0x1227df){const _0x597b13=_0x5499eb;if(typeof Reflect==='object'&&typeof Reflect[_0x597b13(0xbd)]===_0x597b13(0xbe))return Reflect[_0x597b13(0xbd)](_0x430cea,_0x1227df);},__param=this&&this[_0x5499eb(0xbc)]||function(_0x1c8bbb,_0x16b5c0){return function(_0x54417d,_0x4c3ce9){_0x16b5c0(_0x54417d,_0x4c3ce9,_0x1c8bbb);};};Object[_0x5499eb(0xc3)](exports,_0x5499eb(0xb7),{'value':!![]}),exports[_0x5499eb(0xc6)]=void 0x0;const typeorm_1=require(_0x5499eb(0xcb)),common_1=require(_0x5499eb(0xbf)),typeorm_2=require(_0x5499eb(0xa9)),relate_contant_1=require('../../common/constants/relate.contant'),aiLogExt_entity_1=require(_0x5499eb(0xba)),aiAgreeLog_entity_1=require(_0x5499eb(0xa8));function _0x1449(){const _0x1d17d0=['relateId','suno','AiLogService','1350SjxKpP','connection','__decorate','aiAgreeLogEntity','typeorm','user','1565fafvIU','4534024lTQLMU','visitNum','length','round','ELogRelateType','save','Injectable','delete','findOne','relateType','random','Repository','__metadata','playNum','33830qvyrxU','./aiAgreeLog.entity','@nestjs/typeorm','Connection','AiLogExtEntity','1273461gLpUTk','BAD_REQUEST','995378gDrKbD','agree','3qjbPgx','decorate','agreeNum','action','getByRelateId','102809jtqYhY','3532TozHMY','__esModule','getOwnPropertyDescriptor','HttpException','./aiLogExt.entity','increaseVisit','__param','metadata','function','@nestjs/common','4420302uVKfMF','design:paramtypes','aiLogExtEntity','defineProperty'];_0x1449=function(){return _0x1d17d0;};return _0x1449();}let AiLogService=class AiLogService{constructor(_0x277c8e,_0x42728e,_0x11aefc){const _0x361d6f=_0x5499eb;this[_0x361d6f(0xc2)]=_0x277c8e,this[_0x361d6f(0xca)]=_0x42728e,this['connection']=_0x11aefc;}async['getAgreeByRelateId'](_0x5f2559,_0xa6948d){const _0x4d2303=_0x5499eb,_0x483dcb=await this[_0x4d2303(0xca)][_0x4d2303(0xd6)]({'where':{'relateId':_0xa6948d,'relateType':_0x5f2559}});return _0x483dcb;}async[_0x5499eb(0xaf)](_0x2511fb,_0x82fdee){const _0x3a899a=_0x5499eb;try{const _0x52bf3e=_0x2511fb[_0x3a899a(0xcc)]['id'],_0x2fa87b=await this[_0x3a899a(0xca)][_0x3a899a(0xd6)]({'where':{'userId':_0x52bf3e,'relateId':_0x82fdee[_0x3a899a(0xc4)],'relateType':_0x82fdee[_0x3a899a(0xd7)]}});return await this[_0x3a899a(0xc8)]['transaction'](async()=>{const _0x4898cf=_0x3a899a;if(_0x2fa87b&&_0x2fa87b[_0x4898cf(0xb3)]===_0x82fdee[_0x4898cf(0xb3)])await this[_0x4898cf(0xca)][_0x4898cf(0xd5)]({'id':_0x2fa87b['id']});else{const _0x26f955={..._0x82fdee,'userId':_0x52bf3e,'relateId':_0x82fdee[_0x4898cf(0xc4)],'relateType':_0x82fdee[_0x4898cf(0xd7)],'id':_0x2fa87b?_0x2fa87b['id']:null};await this['aiAgreeLogEntity']['save'](_0x26f955);}let _0x43ad65=await this[_0x4898cf(0xc2)][_0x4898cf(0xd6)]({'where':{'relateId':_0x82fdee[_0x4898cf(0xc4)]}});!_0x43ad65&&(_0x43ad65=new aiLogExt_entity_1['AiLogExtEntity'](),_0x43ad65[_0x4898cf(0xc4)]=_0x82fdee[_0x4898cf(0xc4)],_0x43ad65['relateType']=_0x82fdee[_0x4898cf(0xd7)],_0x43ad65[_0x4898cf(0xb2)]=0x0),_0x2fa87b&&_0x2fa87b[_0x4898cf(0xb3)]===_0x82fdee[_0x4898cf(0xb3)]?_0x82fdee['action']===_0x4898cf(0xaf)?_0x43ad65[_0x4898cf(0xb2)]=_0x43ad65[_0x4898cf(0xb2)]-0x1:_0x43ad65[_0x4898cf(0xb2)]=_0x43ad65[_0x4898cf(0xb2)]+0x1:_0x82fdee['action']==='agree'?_0x43ad65['agreeNum']=_0x43ad65[_0x4898cf(0xb2)]+Math['round'](Math[_0x4898cf(0xd8)]()*0x14):_0x43ad65[_0x4898cf(0xb2)]=_0x43ad65['agreeNum']-0x1,_0x43ad65[_0x4898cf(0xb2)]=_0x43ad65[_0x4898cf(0xb2)]<0x0?0x0:_0x43ad65[_0x4898cf(0xb2)],await this['aiLogExtEntity'][_0x4898cf(0xd3)](_0x43ad65);}),!![];}catch(_0x1d821b){throw new common_1[(_0x3a899a(0xb9))](_0x1d821b['message'],common_1['HttpStatus'][_0x3a899a(0xad)]);}}async[_0x5499eb(0xb4)](_0x38fbd5,_0x283208){const _0x1b6b8b=_0x5499eb,_0x52d660=await this[_0x1b6b8b(0xc2)][_0x1b6b8b(0xd6)]({'where':{'relateId':_0x283208,'relateType':_0x38fbd5}});return _0x52d660;}async['musicPlay'](_0x5ad0b1){const _0x314b79=_0x5499eb;let _0x4882e4=await this['aiLogExtEntity'][_0x314b79(0xd6)]({'where':{'relateId':_0x5ad0b1,'relateType':relate_contant_1[_0x314b79(0xd2)][_0x314b79(0xc5)]}});!_0x4882e4&&(_0x4882e4=new aiLogExt_entity_1['AiLogExtEntity'](),_0x4882e4[_0x314b79(0xc4)]=_0x5ad0b1,_0x4882e4[_0x314b79(0xd7)]=relate_contant_1['ELogRelateType'][_0x314b79(0xc5)]),_0x4882e4[_0x314b79(0xa6)]=_0x4882e4[_0x314b79(0xa6)]+Math['round'](Math[_0x314b79(0xd8)]()*0x14),await this[_0x314b79(0xc2)][_0x314b79(0xd3)](_0x4882e4);}async[_0x5499eb(0xbb)](_0x66796c,_0x13e5cc){const _0x12c03b=_0x5499eb;let _0x2e595f=await this[_0x12c03b(0xc2)][_0x12c03b(0xd6)]({'where':{'relateId':_0x13e5cc,'relateType':_0x66796c}});!_0x2e595f&&(_0x2e595f=new aiLogExt_entity_1['AiLogExtEntity'](),_0x2e595f['relateId']=_0x13e5cc,_0x2e595f[_0x12c03b(0xd7)]=_0x66796c),_0x2e595f[_0x12c03b(0xcf)]=_0x2e595f[_0x12c03b(0xcf)]+Math[_0x12c03b(0xd1)](Math[_0x12c03b(0xd8)]()*0x14),await this['aiLogExtEntity'][_0x12c03b(0xd3)](_0x2e595f);}};AiLogService=__decorate([(0x0,common_1[_0x5499eb(0xd4)])(),__param(0x0,(0x0,typeorm_2['InjectRepository'])(aiLogExt_entity_1[_0x5499eb(0xab)])),__param(0x1,(0x0,typeorm_2['InjectRepository'])(aiAgreeLog_entity_1['AiAgreeLogEntity'])),__metadata(_0x5499eb(0xc1),[typeorm_1[_0x5499eb(0xa4)],typeorm_1[_0x5499eb(0xa4)],typeorm_1[_0x5499eb(0xaa)]])],AiLogService),exports[_0x5499eb(0xc6)]=AiLogService;