'use strict';const _0xa3dd1=_0x280b;(function(_0x176238,_0x47fc7f){const _0x1bece5=_0x280b,_0x58a7c1=_0x176238();while(!![]){try{const _0x2e2978=parseInt(_0x1bece5(0x8d))/0x1*(parseInt(_0x1bece5(0x7e))/0x2)+-parseInt(_0x1bece5(0x84))/0x3*(parseInt(_0x1bece5(0x9d))/0x4)+-parseInt(_0x1bece5(0xa0))/0x5*(parseInt(_0x1bece5(0x99))/0x6)+parseInt(_0x1bece5(0x95))/0x7*(parseInt(_0x1bece5(0x9a))/0x8)+parseInt(_0x1bece5(0x98))/0x9+-parseInt(_0x1bece5(0x82))/0xa+parseInt(_0x1bece5(0xa2))/0xb;if(_0x2e2978===_0x47fc7f)break;else _0x58a7c1['push'](_0x58a7c1['shift']());}catch(_0x218d25){_0x58a7c1['push'](_0x58a7c1['shift']());}}}(_0x9055,0xe640a));Object[_0xa3dd1(0xa5)](exports,_0xa3dd1(0x8a),{'value':!![]}),exports[_0xa3dd1(0x97)]=exports[_0xa3dd1(0x92)]=exports[_0xa3dd1(0x94)]=exports[_0xa3dd1(0x88)]=void 0x0;const axios=require('axios'),jwt=require(_0xa3dd1(0xa3));function generateToken(_0x272939,_0x4d0d74=0x3e8*0x3c*0x3c*0x18*0x168){const _0x5410e5=_0xa3dd1,[_0x1e2243,_0x4c0f3a]=_0x272939[_0x5410e5(0xa1)]('.'),_0x441ff5={'api_key':_0x1e2243,'exp':Math[_0x5410e5(0x83)](Date[_0x5410e5(0x96)]())+_0x4d0d74*0x3e8,'timestamp':Math[_0x5410e5(0x83)](Date[_0x5410e5(0x96)]())};return jwt[_0x5410e5(0x9b)](_0x441ff5,_0x4c0f3a,{'algorithm':_0x5410e5(0x8e),'header':{'alg':_0x5410e5(0x8e),'sign_type':'SIGN'}});}exports[_0xa3dd1(0x88)]=generateToken;function compilerMetaJsonStr(_0x58927d){const _0x25044f=_0xa3dd1;let _0x4fa06d={};try{_0x4fa06d=JSON[_0x25044f(0x89)](_0x58927d);}catch(_0x47107b){_0x4fa06d={'usage':{'completion_tokens':0x31,'prompt_tokens':0x14d,'total_tokens':0x18f}},console['error'](_0x25044f(0xa4),_0x58927d);}return _0x4fa06d;}exports[_0xa3dd1(0x94)]=compilerMetaJsonStr;function _0x280b(_0x2e2cd2,_0x50b73e){const _0x9055cf=_0x9055();return _0x280b=function(_0x280bfd,_0x297ea6){_0x280bfd=_0x280bfd-0x7d;let _0xc4cfbd=_0x9055cf[_0x280bfd];return _0xc4cfbd;},_0x280b(_0x2e2cd2,_0x50b73e);}function _0x9055(){const _0x577751=['defineProperty','id:','end','stream','catch','194zyqlSe','event:','POST','log','11626040KHCELS','round','3CJnywC','/sse-invoke','is_end','text','generateToken','parse','__esModule','application/json','data:','3782MpBTiC','HS256','trim','usage','data','compilerStream','meta:','compilerMetaJsonStr','7MofeUs','now','sendMessageFromZhipu','14189256EZikKA','64926QKZhGg','3350344xooywe','sign','length','5641012WtMjnn','then','replace','475mqOEJO','split','23999085jwbpmW','jsonwebtoken','json\x20parse\x20error\x20from\x20zhipu!'];_0x9055=function(){return _0x577751;};return _0x9055();}function compilerStream(_0x4b37f0){const _0xfe8f79=_0xa3dd1;var _0x153465;console[_0xfe8f79(0x81)](_0x4b37f0);if(_0x4b37f0[_0xfe8f79(0x9c)]===0x3)return{'event':_0x4b37f0[0x0][_0xfe8f79(0x9f)](_0xfe8f79(0x7f),''),'id':_0x4b37f0[0x1][_0xfe8f79(0x9f)](_0xfe8f79(0xa6),''),'is_end':![],'result':_0x4b37f0[0x2][_0xfe8f79(0x9f)](_0xfe8f79(0x8c),'')[_0xfe8f79(0x8f)]()};if(_0x4b37f0['length']===0x4)return{'event':_0x4b37f0[0x0]['replace'](_0xfe8f79(0x7f),''),'id':_0x4b37f0[0x1][_0xfe8f79(0x9f)](_0xfe8f79(0xa6),''),'result':_0x4b37f0[0x2][_0xfe8f79(0x9f)](_0xfe8f79(0x8c),'')['trim'](),'is_end':!![],'usage':(_0x153465=compilerMetaJsonStr(_0x4b37f0[0x3][_0xfe8f79(0x9f)](_0xfe8f79(0x93),'')))===null||_0x153465===void 0x0?void 0x0:_0x153465[_0xfe8f79(0x90)]};}exports[_0xa3dd1(0x92)]=compilerStream;async function sendMessageFromZhipu(_0x1293d4,{onProgress:_0x3fbf03,key:_0x10e5bc,model:_0x2ff582,temperature:temperature=0.95}){const _0x3ff50f=await generateToken(_0x10e5bc);return new Promise((_0x50aed7,_0x57b9d7)=>{const _0x5351dd=_0x280b,_0x231328='https://open.bigmodel.cn/api/paas/v3/model-api/'+_0x2ff582+_0x5351dd(0x85),_0x38eb09={'method':_0x5351dd(0x80),'url':_0x231328,'responseType':_0x5351dd(0xa8),'headers':{'Content-Type':_0x5351dd(0x8b),'Authorization':_0x3ff50f},'data':{'prompt':_0x1293d4,'temperature':temperature}};axios(_0x38eb09)[_0x5351dd(0x9e)](_0x352d53=>{const _0x12420f=_0x5351dd,_0x497560=_0x352d53[_0x12420f(0x91)];let _0x24c7b,_0x421913='';_0x497560['on'](_0x12420f(0x91),_0x2914e9=>{const _0x21a43f=_0x12420f,_0x2cc87f=_0x2914e9['toString']()['split']('\x0a')['filter'](_0x2cf3a6=>_0x2cf3a6[_0x21a43f(0x8f)]()!=='');console[_0x21a43f(0x81)](_0x2cc87f);const _0x26a878=compilerStream(_0x2cc87f);console[_0x21a43f(0x81)](_0x26a878);if(!_0x26a878)return;const {id:_0x5d97ba,result:_0x20165d,is_end:_0x1b5210}=_0x26a878;_0x20165d&&(_0x421913+=_0x20165d['trim']()),_0x1b5210&&(_0x26a878[_0x21a43f(0x86)]=![],_0x24c7b=_0x26a878,_0x24c7b[_0x21a43f(0x87)]=_0x421913),_0x3fbf03(_0x26a878);}),_0x497560['on'](_0x12420f(0xa7),()=>{_0x50aed7(_0x24c7b),_0x421913='';});})[_0x5351dd(0x7d)](_0x1c07b2=>{console['log']('error:\x20',_0x1c07b2);});});}exports[_0xa3dd1(0x97)]=sendMessageFromZhipu;