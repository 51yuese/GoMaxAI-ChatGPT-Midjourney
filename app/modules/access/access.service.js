'use strict';const _0x1183c6=_0x3878;(function(_0x626c94,_0x39c6e9){const _0x1ed2e9=_0x3878,_0x4928c1=_0x626c94();while(!![]){try{const _0x456798=parseInt(_0x1ed2e9(0xf1))/0x1*(-parseInt(_0x1ed2e9(0xf6))/0x2)+-parseInt(_0x1ed2e9(0xf4))/0x3*(-parseInt(_0x1ed2e9(0xc1))/0x4)+parseInt(_0x1ed2e9(0xe5))/0x5*(-parseInt(_0x1ed2e9(0xd1))/0x6)+parseInt(_0x1ed2e9(0xcb))/0x7*(parseInt(_0x1ed2e9(0x10b))/0x8)+-parseInt(_0x1ed2e9(0xc8))/0x9+parseInt(_0x1ed2e9(0x100))/0xa+-parseInt(_0x1ed2e9(0xbd))/0xb*(-parseInt(_0x1ed2e9(0xf9))/0xc);if(_0x456798===_0x39c6e9)break;else _0x4928c1['push'](_0x4928c1['shift']());}catch(_0x591fa0){_0x4928c1['push'](_0x4928c1['shift']());}}}(_0x4096,0xd6728));function _0x4096(){const _0x16cf68=['createRandomUid','save','51052VJTBnQ','queryAccessCount','管理员已存在','typeorm','catch','getOne','count','10189278JtBGfw','handleManagerUpdate','handleManagerAdd','55111PZVGpn','defineProperty','参数错误','handleSaveAccess','accessLabel','handleUpdateStatus','276AsIiEf','accessEntity','DESC','userId','handleResetPassword','Injectable','set','createPsd','filter','checked','@nestjs/typeorm','../../common/utils','managerStatus','assign','../user/user.service','decorate','delUser','comparePassword','@manager.com','HttpException','79320XtuHMU','design:paramtypes','affected','queryByPage','123456','userMap','flat','__metadata','分页参数错误','find','__decorate','forEach','78dKYMxI','stringify','findOne','69BZjgoU','AccessService','620YWSuyq','length','AccessEntity','69684lBjngb','__param','getManagerAccess','BAD_REQUEST','metadata','update','queryUserByUsername','15251870xSMzzY','UserService','includes','parse','setManagerDelete','updateUserPassword','__esModule','HttpStatus','log','@nestjs/common','./access.entity','424FBdIMD','userService','createdAt','function','添加管理员失败','Repository','get','map','用户不存在','password','1001tADfTp','InjectRepository'];_0x4096=function(){return _0x16cf68;};return _0x4096();}var __decorate=this&&this[_0x1183c6(0xef)]||function(_0x493558,_0x1b9879,_0x4c4b3b,_0x2b91f6){const _0x13f848=_0x1183c6;var _0x2ce850=arguments[_0x13f848(0xf7)],_0x52baa5=_0x2ce850<0x3?_0x1b9879:_0x2b91f6===null?_0x2b91f6=Object['getOwnPropertyDescriptor'](_0x1b9879,_0x4c4b3b):_0x2b91f6,_0x225422;if(typeof Reflect==='object'&&typeof Reflect[_0x13f848(0xe0)]===_0x13f848(0x10e))_0x52baa5=Reflect[_0x13f848(0xe0)](_0x493558,_0x1b9879,_0x4c4b3b,_0x2b91f6);else{for(var _0x1f3e06=_0x493558[_0x13f848(0xf7)]-0x1;_0x1f3e06>=0x0;_0x1f3e06--)if(_0x225422=_0x493558[_0x1f3e06])_0x52baa5=(_0x2ce850<0x3?_0x225422(_0x52baa5):_0x2ce850>0x3?_0x225422(_0x1b9879,_0x4c4b3b,_0x52baa5):_0x225422(_0x1b9879,_0x4c4b3b))||_0x52baa5;}return _0x2ce850>0x3&&_0x52baa5&&Object[_0x13f848(0xcc)](_0x1b9879,_0x4c4b3b,_0x52baa5),_0x52baa5;},__metadata=this&&this[_0x1183c6(0xec)]||function(_0x918a64,_0x3d7739){const _0x48c7ae=_0x1183c6;if(typeof Reflect==='object'&&typeof Reflect[_0x48c7ae(0xfd)]===_0x48c7ae(0x10e))return Reflect['metadata'](_0x918a64,_0x3d7739);},__param=this&&this[_0x1183c6(0xfa)]||function(_0x5e861f,_0x226b29){return function(_0x3afdb8,_0x40169e){_0x226b29(_0x3afdb8,_0x40169e,_0x5e861f);};};Object[_0x1183c6(0xcc)](exports,_0x1183c6(0x106),{'value':!![]}),exports['AccessService']=void 0x0;const common_1=require(_0x1183c6(0x109)),typeorm_1=require(_0x1183c6(0xdb)),access_entity_1=require(_0x1183c6(0x10a)),typeorm_2=require(_0x1183c6(0xc4)),user_service_1=require(_0x1183c6(0xdf)),utils_1=require(_0x1183c6(0xdc));function _0x3878(_0x2df05c,_0x2b1b05){const _0x409663=_0x4096();return _0x3878=function(_0x387865,_0x45e0ae){_0x387865=_0x387865-0xb7;let _0x18185f=_0x409663[_0x387865];return _0x18185f;},_0x3878(_0x2df05c,_0x2b1b05);}let AccessService=class AccessService{constructor(_0x2eb8c7,_0x30c0e6){const _0x1a59b8=_0x1183c6;this[_0x1a59b8(0xd2)]=_0x2eb8c7,this[_0x1a59b8(0x10c)]=_0x30c0e6,this[_0x1a59b8(0xea)]=new Map(),this[_0x1a59b8(0xea)]['clear']();}async[_0x1183c6(0xc6)](_0x501f5f){const _0x44a027=_0x1183c6;return await this[_0x44a027(0xd2)][_0x44a027(0xf3)]({'where':{'userId':_0x501f5f}});}async[_0x1183c6(0xfb)](_0x5e6a70){const _0x3531b1=_0x1183c6,{id:_0x2563d4}=_0x5e6a70;if(!_0x2563d4)throw new common_1[(_0x3531b1(0xe4))](_0x3531b1(0xcd),common_1[_0x3531b1(0x107)][_0x3531b1(0xfc)]);const _0x3a4950=await this[_0x3531b1(0x10c)]['getUserById'](_0x2563d4);if(!_0x3a4950)throw new common_1[(_0x3531b1(0xe4))](_0x3531b1(0xbb),common_1[_0x3531b1(0x107)]['BAD_REQUEST']);const _0x17f6fa=await this[_0x3531b1(0xd2)][_0x3531b1(0xf3)]({'where':{'userId':_0x3a4950['id']}});if(!_0x17f6fa)throw new common_1[(_0x3531b1(0xe4))]('管理员不存在',common_1[_0x3531b1(0x107)][_0x3531b1(0xfc)]);const {role:_0x115422,username:_0x17e400}=_0x3a4950;return Object[_0x3531b1(0xde)](Object[_0x3531b1(0xde)]({},_0x17f6fa),{'role':_0x115422,'password':_0x3a4950[_0x3531b1(0xbc)],'username':_0x17e400,'id':_0x3a4950['id']});}async['queryManagerAccess'](_0x3fa787,_0x3d4a5e){const _0x5b6ee9=_0x1183c6,{page:page=0x1,size:size=0xa,username:_0x5b180f,status:_0x3c1ecf}=_0x3fa787;if(!page||!size)throw new common_1[(_0x5b6ee9(0xe4))](_0x5b6ee9(0xed),0x190);const _0x57fab3={'userType':0x1};if(_0x5b180f){const {rows:_0x196f89}=await this[_0x5b6ee9(0x10c)][_0x5b6ee9(0xe8)]({'page':page,'size':size,'username':_0x5b180f,'email':'','status':0x0,'keyword':''}),_0x748db1=_0x196f89['map'](_0xc5ab2e=>_0xc5ab2e['id']),_0x390594=await this[_0x5b6ee9(0xd2)]['findBy']({'userId':(0x0,typeorm_2['In'])(_0x748db1)}),_0x528e90=new Map();_0x196f89[_0x5b6ee9(0xf0)](_0x586fcd=>{const _0x591420=_0x5b6ee9;_0x528e90[_0x591420(0xd7)](_0x586fcd['id'],_0x586fcd);});const _0x9ce7d0=_0x390594[_0x5b6ee9(0xba)](_0x3bb6b1=>Object[_0x5b6ee9(0xde)]({},_0x3bb6b1,_0x528e90[_0x5b6ee9(0xb9)](_0x3bb6b1['userId'])));let _0x113f17=_0x3c1ecf>0x0?_0x9ce7d0[_0x5b6ee9(0xd9)](_0x5f329e=>_0x5f329e[_0x5b6ee9(0xdd)]===_0x3c1ecf):_0x9ce7d0;return{'rows':_0x113f17||[],'count':_0x113f17[_0x5b6ee9(0xf7)]||0x0};}[0x1,0x2,'1','2'][_0x5b6ee9(0x102)](_0x3c1ecf)&&(_0x57fab3[_0x5b6ee9(0xdd)]=_0x3c1ecf);const [_0x4b22ce,_0x52470b]=await this[_0x5b6ee9(0xd2)]['findAndCount']({'skip':(page-0x1)*size,'where':_0x57fab3,'take':size,'order':{'createdAt':_0x5b6ee9(0xd3)},'cache':!![],'select':['managerStatus',_0x5b6ee9(0xd4),_0x5b6ee9(0xcf),'id']}),_0x46f58d=_0x4b22ce[_0x5b6ee9(0xba)](_0x4f4a59=>_0x4f4a59[_0x5b6ee9(0xd4)]),_0x3287ce=await this[_0x5b6ee9(0x10c)]['queryUserInfoByIds'](_0x46f58d);_0x3287ce[_0x5b6ee9(0xf0)](_0x18c214=>this[_0x5b6ee9(0xea)][_0x5b6ee9(0xd7)](_0x18c214['id'],_0x18c214));const _0x26fc4=_0x4b22ce[_0x5b6ee9(0xba)](_0x1054b0=>{const _0x57c555=_0x5b6ee9,_0x151fed=this[_0x57c555(0xea)][_0x57c555(0xb9)](_0x1054b0[_0x57c555(0xd4)]);return Object[_0x57c555(0xde)]({},_0x151fed,_0x1054b0);});return{'rows':_0x26fc4||[],'count':_0x52470b||0x0};}async['queryAccessByIds'](_0x5a68c1){const _0x26bde4=_0x1183c6;return await this[_0x26bde4(0xd2)][_0x26bde4(0xee)]({'where':{'userId':(0x0,typeorm_2['In'])(_0x5a68c1)},'select':['id','accessLabel',_0x26bde4(0x10d),_0x26bde4(0xd4)]});}async[_0x1183c6(0xc2)](){const _0x43fcbd=_0x1183c6;return await this['accessEntity'][_0x43fcbd(0xc7)]();}async[_0x1183c6(0x104)](_0x2b6d43){const _0x1885aa=_0x1183c6,{id:_0x38a2ce}=_0x2b6d43,_0x1f00bc=await this[_0x1885aa(0xd2)][_0x1885aa(0xf3)]({'where':{'id':_0x38a2ce}}),_0x380f21=await this[_0x1885aa(0x10c)][_0x1885aa(0xe1)]({'id':_0x1f00bc[_0x1885aa(0xd4)],'moreId':0x0});if(_0x380f21)return this[_0x1885aa(0xd2)]['delete']({'id':_0x38a2ce});return![];}async[_0x1183c6(0xca)](_0x5d5ac4){const _0x381b64=_0x1183c6,{username:_0x394b49,access:_0x1b02f2,role:_0x4de454,password:_0x55da5}=_0x5d5ac4,_0xb0f860=await this[_0x381b64(0x10c)][_0x381b64(0xff)](_0x394b49);if(_0xb0f860&&(0x0,utils_1[_0x381b64(0xe2)])(_0x394b49,_0xb0f860[_0x381b64(0xbc)]))throw new common_1[(_0x381b64(0xe4))](_0x381b64(0xc3),common_1['HttpStatus'][_0x381b64(0xfc)]);const _0x258e42=(0x0,utils_1[_0x381b64(0xd8)])(_0x55da5),_0x544aee=(0x0,utils_1[_0x381b64(0xbf)])()+_0x381b64(0xe3),_0x5f4719=await this[_0x381b64(0x10c)]['createUser']({'email':_0x544aee,'username':_0x394b49,'status':0x1,'password':_0x258e42,'sex':0x1,'role':_0x4de454});if(!_0x5f4719)throw new common_1[(_0x381b64(0xe4))](_0x381b64(0xb7),common_1[_0x381b64(0x107)]['BAD_REQUEST']);try{const _0xd38da8=_0x1b02f2[_0x381b64(0xf7)]&&JSON['parse'](_0x1b02f2)[_0x381b64(0xba)](_0x5f51df=>_0x5f51df['checked'])['flat'](),_0x8b59f0=await this[_0x381b64(0xce)]({'userType':0x1,'access':_0x1b02f2,'userId':_0x5f4719['id'],'accessLabel':_0xd38da8[_0x381b64(0xf7)]?_0xd38da8:''});return!!_0x8b59f0;}catch(_0x9aebe4){console[_0x381b64(0x108)]('error:\x20',_0x9aebe4);throw new common_1[(_0x381b64(0xe4))](_0x9aebe4,common_1[_0x381b64(0x107)][_0x381b64(0xfc)]);}}async[_0x1183c6(0xce)](_0x1798e3){const _0x8f1c3d=_0x1183c6,{userType:_0x35a8ce,access:_0x5aab97,userId:_0x1520e0,accessLabel:_0x59ff5a}=_0x1798e3;return await this[_0x8f1c3d(0xd2)][_0x8f1c3d(0xc0)]({'userType':_0x35a8ce,'access':_0x5aab97,'userId':_0x1520e0,'accessLabel':_0x59ff5a&&JSON['stringify'](_0x59ff5a)||''});}async[_0x1183c6(0xc9)](_0x50b1ac){const _0x1b3ca0=_0x1183c6,{id:_0x3192c9,userId:_0x15bd5f,access:_0x309b69}=_0x50b1ac,_0x56f920=await this[_0x1b3ca0(0x10c)]['queryOne']({'id':_0x15bd5f});if(!_0x56f920)throw new common_1[(_0x1b3ca0(0xe4))]('管理员不存在，请核对',common_1['HttpStatus']['GONE']);try{const _0x45ab51=_0x309b69[_0x1b3ca0(0xf7)]&&JSON[_0x1b3ca0(0x103)](_0x309b69)[_0x1b3ca0(0xba)](_0x2448df=>_0x2448df[_0x1b3ca0(0xda)])[_0x1b3ca0(0xeb)](),_0x380e5f=await this[_0x1b3ca0(0xd2)]['update']({'userId':_0x56f920['id']},{'userId':_0x15bd5f,'access':_0x309b69,'accessLabel':_0x45ab51&&JSON[_0x1b3ca0(0xf2)](_0x45ab51)||''})[_0x1b3ca0(0xc5)](_0x185c04=>{throw _0x185c04;});return!!_0x380e5f;}catch(_0x136029){return console[_0x1b3ca0(0x108)](_0x136029),![];}}async[_0x1183c6(0xd0)](_0x5b3854){const _0x171355=_0x1183c6,{id:_0x4a3471,status:_0x5ec3ef}=_0x5b3854,_0x1459f6=await this['accessEntity'][_0x171355(0xfe)](_0x4a3471,{'managerStatus':_0x5ec3ef});return _0x1459f6[_0x171355(0xe7)]>0x0;}async[_0x1183c6(0xd5)](_0x4913a3){const _0x173fe0=_0x1183c6,{id:_0x1cdac1}=_0x4913a3,_0x527245=_0x173fe0(0xe9),_0x7549aa=await this[_0x173fe0(0xd2)][_0x173fe0(0xf3)]({'where':{'id':_0x1cdac1}});return this[_0x173fe0(0x10c)][_0x173fe0(0x105)](_0x7549aa['userId'],_0x527245);}};AccessService=__decorate([(0x0,common_1[_0x1183c6(0xd6)])(),__param(0x0,(0x0,typeorm_1[_0x1183c6(0xbe)])(access_entity_1[_0x1183c6(0xf8)])),__metadata(_0x1183c6(0xe6),[typeorm_2[_0x1183c6(0xb8)],user_service_1[_0x1183c6(0x101)]])],AccessService),exports[_0x1183c6(0xf5)]=AccessService;