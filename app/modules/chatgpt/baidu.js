'use strict';function _0x2c2f(_0x46f265,_0x45ff75){const _0x1433ed=_0x1433();return _0x2c2f=function(_0x2c2f0f,_0x470166){_0x2c2f0f=_0x2c2f0f-0x8b;let _0x175fd3=_0x1433ed[_0x2c2f0f];return _0x175fd3;},_0x2c2f(_0x46f265,_0x45ff75);}const _0x1df25b=_0x2c2f;(function(_0xcde079,_0x2f5fc1){const _0x290970=_0x2c2f,_0x12cede=_0xcde079();while(!![]){try{const _0x6e3e15=-parseInt(_0x290970(0x8d))/0x1+parseInt(_0x290970(0x9e))/0x2*(parseInt(_0x290970(0x97))/0x3)+-parseInt(_0x290970(0x99))/0x4*(parseInt(_0x290970(0xa1))/0x5)+parseInt(_0x290970(0xa4))/0x6+-parseInt(_0x290970(0x98))/0x7+parseInt(_0x290970(0x91))/0x8*(-parseInt(_0x290970(0xad))/0x9)+-parseInt(_0x290970(0xb0))/0xa*(-parseInt(_0x290970(0xa9))/0xb);if(_0x6e3e15===_0x2f5fc1)break;else _0x12cede['push'](_0x12cede['shift']());}catch(_0x19cf9f){_0x12cede['push'](_0x12cede['shift']());}}}(_0x1433,0xa576e));Object[_0x1df25b(0xa5)](exports,_0x1df25b(0xb3),{'value':!![]}),exports[_0x1df25b(0x8f)]=exports[_0x1df25b(0x90)]=void 0x0;const axios=require(_0x1df25b(0x8e)),getApiModelMaps=()=>{const _0x24db91=_0x1df25b;let _0x56bd60={};const _0x2ce86e={'ERNIE-Bot':'completions','ERNIE-Bot-turbo':_0x24db91(0xa2),'ERNIE-Bot-4.0':_0x24db91(0xae),'BLOOMZ-7B':'bloomz_7b1','Llama-2-7b-chat':'llama_2_7b','Llama-2-13b-chat':_0x24db91(0xb1),'ChatGLM2-6B-32K':_0x24db91(0x9f),'Qianfan-Chinese-Llama-2-7B':_0x24db91(0xaf)};return Object[_0x24db91(0xab)](_0x2ce86e)[_0x24db91(0x9d)](_0x52ff5d=>{const _0x3d59da=_0x24db91;_0x56bd60[''+_0x52ff5d[_0x3d59da(0x96)]()]=_0x2ce86e[_0x52ff5d];}),_0x56bd60;};function getAccessToken(_0x4cceec,_0x2a1460){const _0x3ff972=_0x1df25b;let _0x6d7cbc=_0x3ff972(0xb4)+_0x4cceec+_0x3ff972(0x92)+_0x2a1460;return new Promise((_0x4c3247,_0x4d8d24)=>{const _0x299cb9=_0x3ff972;axios[_0x299cb9(0x9a)](_0x6d7cbc)[_0x299cb9(0x8c)](_0x460a26=>{const _0x351623=_0x299cb9;_0x4c3247(_0x460a26[_0x351623(0xa6)]['access_token']);})[_0x299cb9(0x93)](_0x1f216b=>{_0x4d8d24(_0x1f216b);});});}function _0x1433(){const _0x2ea032=['getAccessToken','424fSLApO','&client_secret=','catch','split','stream','toLowerCase','702VxOHBf','2762823rSIdNk','4YXpqOX','post','https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/','replace','map','4764DkUyhr','chatglm2_6b_32k','data:\x20','5556935lITGoF','eb-instant','application/json','1768506RDeFSh','defineProperty','data','trim','filter','5879797RqnnIF','parse','keys','POST','26577PRFwUg','completions_pro','qianfan_chinese_llama_2_7b','50CdcLPP','llama_2_13b','end','__esModule','https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=','?access_token=','then','1184447pithWR','axios','sendMessageFromBaidu'];_0x1433=function(){return _0x2ea032;};return _0x1433();}exports[_0x1df25b(0x90)]=getAccessToken;function sendMessageFromBaidu(_0x15129d,{onProgress:_0x4f4a9b,accessToken:_0x47449a,model:_0x56348b,temperature:temperature=0.95}){const _0x34a44f=_0x1df25b,_0x810feb=getApiModelMaps()[_0x56348b[_0x34a44f(0xa7)]()[_0x34a44f(0x96)]()];return new Promise((_0x3cebdd,_0x211268)=>{const _0x28060a=_0x34a44f,_0x5d0fad=_0x28060a(0x9b)+_0x810feb+_0x28060a(0x8b)+_0x47449a,_0x4e046d={'method':_0x28060a(0xac),'url':_0x5d0fad,'responseType':_0x28060a(0x95),'headers':{'Content-Type':_0x28060a(0xa3)},'data':{'stream':!![],'messages':_0x15129d}};axios(_0x4e046d)[_0x28060a(0x8c)](_0x4c104f=>{const _0x1654dd=_0x28060a,_0x5ad3e8=_0x4c104f[_0x1654dd(0xa6)];let _0x259b93={},_0x1fc054='',_0x23c5ef='';_0x5ad3e8['on'](_0x1654dd(0xa6),_0x12792c=>{const _0xafaebd=_0x1654dd,_0x117d7f=_0x12792c['toString']()[_0xafaebd(0x94)]('\x0a\x0a')[_0xafaebd(0xa8)](_0x3d2041=>_0x3d2041[_0xafaebd(0xa7)]()!=='');for(const _0xc6c0fb of _0x117d7f){const _0x1dd946=_0xc6c0fb[_0xafaebd(0x9c)](_0xafaebd(0xa0),'');try{const _0x27accb=_0x1fc054+_0x1dd946,_0x111552=JSON[_0xafaebd(0xaa)](_0x27accb);_0x1fc054='';const {is_end:_0x4fc98e,result:_0x2b2a17}=_0x111552;_0x2b2a17&&(_0x23c5ef+=_0x2b2a17),_0x4fc98e&&(_0x259b93=_0x111552,_0x259b93['text']=_0x23c5ef),_0x4f4a9b(_0x111552);}catch(_0x15eef2){_0x1fc054=_0x1dd946;}}}),_0x5ad3e8['on'](_0x1654dd(0xb2),()=>{_0x23c5ef='',_0x1fc054='',_0x3cebdd(_0x259b93);});})[_0x28060a(0x93)](_0x4c1607=>{console['log'](_0x4c1607),_0x211268(new Error(_0x4c1607));});});}exports['sendMessageFromBaidu']=sendMessageFromBaidu;