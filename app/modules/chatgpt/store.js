'use strict';const _0x5e5c0b=_0x1a44;(function(_0x1171c9,_0x300adc){const _0x453c27=_0x1a44,_0x3dcf61=_0x1171c9();while(!![]){try{const _0x56bb98=-parseInt(_0x453c27(0x78))/0x1*(parseInt(_0x453c27(0x83))/0x2)+-parseInt(_0x453c27(0x90))/0x3+-parseInt(_0x453c27(0x87))/0x4+parseInt(_0x453c27(0x8c))/0x5*(parseInt(_0x453c27(0x8a))/0x6)+-parseInt(_0x453c27(0x94))/0x7*(-parseInt(_0x453c27(0x8e))/0x8)+parseInt(_0x453c27(0x82))/0x9+-parseInt(_0x453c27(0x93))/0xa*(-parseInt(_0x453c27(0x88))/0xb);if(_0x56bb98===_0x300adc)break;else _0x3dcf61['push'](_0x3dcf61['shift']());}catch(_0x30567e){_0x3dcf61['push'](_0x3dcf61['shift']());}}}(_0xfd7d,0x6fdcd));function _0xfd7d(){const _0x18c4d4=['content','reduce','2948060NThIsp','33ufHvFC','push','3360ndgOor','chat','3635oQocyN','expires','32CSQOmE','_recursivePruning','228396RNErIZ','汇总的文本数量:\x20','_getTokenCount','2329630VbRFVx','287518zKbuhi','buildMessageFromParentMessageId','@dqbd/tiktoken','getData','generateKey','replace','splice','encode','max','86197tjAfFq','log','concat','formatOptions','NineStore','user','length','store','namespace','uuid','2336598fKBlzB','6nHpswh','cl100k_base'];_0xfd7d=function(){return _0x18c4d4;};return _0xfd7d();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['NineStore']=void 0x0;function _0x1a44(_0x12074b,_0x577a92){const _0xfd7dab=_0xfd7d();return _0x1a44=function(_0x1a448b,_0x14c239){_0x1a448b=_0x1a448b-0x73;let _0x173cbe=_0xfd7dab[_0x1a448b];return _0x173cbe;},_0x1a44(_0x12074b,_0x577a92);}const uuid_1=require(_0x5e5c0b(0x81)),tiktoken_1=require(_0x5e5c0b(0x96)),tokenizer=(0x0,tiktoken_1['get_encoding'])(_0x5e5c0b(0x84));class NineStore{constructor(_0x4861ee){const _0x5a1e3c=_0x5e5c0b,{store:_0x1205c0,namespace:_0x74cd,expires:_0x4e1bcb}=this[_0x5a1e3c(0x7b)](_0x4861ee);this[_0x5a1e3c(0x7f)]=_0x1205c0,this[_0x5a1e3c(0x80)]=_0x74cd,this['expires']=_0x4e1bcb;}[_0x5e5c0b(0x7b)](_0x761366){const _0x2fb879=_0x5e5c0b,{store:_0x87485a,expires:expires=0x3e8*0x3c*0x3c*0x18*0x3,namespace:namespace=_0x2fb879(0x8b)}=_0x761366;return{'store':_0x87485a,'namespace':namespace,'expires':expires};}[_0x5e5c0b(0x73)](_0x271a39){const _0x3cc94c=_0x5e5c0b;return this['namespace']?this[_0x3cc94c(0x80)]+'-'+_0x271a39:_0x271a39;}async[_0x5e5c0b(0x97)](_0x384c16){const _0x35b83d=await this['store']['get'](_0x384c16);return _0x35b83d;}async['setData'](_0xe0c58b,_0x408859=this[_0x5e5c0b(0x8d)]){const _0x5b9282=_0x5e5c0b;await this[_0x5b9282(0x7f)]['set'](_0xe0c58b['id'],_0xe0c58b,_0x408859);}async[_0x5e5c0b(0x95)](_0x423e54,_0x43c6cc){const _0xc2c67d=_0x5e5c0b;let {maxRounds:_0x59773a,maxModelToken:_0x202b67,maxResponseTokens:_0x1728d5,systemMessage:systemMessage='',name:_0x20f011}=_0x43c6cc,{parentMessageId:_0x28ae2b}=_0x43c6cc,_0x22b8fb=[],_0x4f1a2c=0x0;systemMessage&&_0x22b8fb[_0xc2c67d(0x89)]({'role':'system','content':systemMessage});const _0x24a4af=_0x22b8fb[_0xc2c67d(0x7e)];let _0x2e6f49=0x0,_0x1678da=_0x423e54?_0x22b8fb[_0xc2c67d(0x7a)]([{'role':_0xc2c67d(0x7d),'content':_0x423e54,'name':_0x20f011}]):_0x22b8fb;do{if(!_0x28ae2b)break;const _0x182bfc=await this[_0xc2c67d(0x97)](_0x28ae2b);if(!_0x182bfc)break;const {text:_0x390869,name:_0x399b9c,role:_0x2b88df}=_0x182bfc;_0x1678da=_0x1678da['slice'](0x0,_0x24a4af)[_0xc2c67d(0x7a)]([{'role':_0x2b88df,'content':_0x390869,'name':_0x399b9c},..._0x1678da['slice'](_0x24a4af)]),_0x2e6f49++;if(_0x59773a&&_0x2e6f49>=_0x59773a)break;if(_0x202b67&&_0x1728d5){const _0x56d917=_0x202b67-_0x1728d5;_0x4f1a2c=await this[_0xc2c67d(0x92)](_0x1678da);const _0x1ee6ae=_0x4f1a2c+0xc8<=_0x56d917;!_0x1ee6ae&&(_0x1678da=this[_0xc2c67d(0x8f)](_0x22b8fb,_0x56d917,systemMessage));}_0x28ae2b=_0x182bfc['parentMessageId'];}while(!![]);const _0x2963cf=Math[_0xc2c67d(0x77)](0x1,Math['min'](_0x202b67-_0x4f1a2c,_0x1728d5));return _0x1678da;}async[_0x5e5c0b(0x92)](_0xd2f2c9){const _0x591ce3=_0x5e5c0b;let _0x10112c=_0xd2f2c9[_0x591ce3(0x86)]((_0x4403cc,_0x510a32)=>{const _0x5d5eff=_0x591ce3;return _0x4403cc+=_0x510a32[_0x5d5eff(0x85)];},'');return console[_0x591ce3(0x79)](_0x591ce3(0x91),_0x10112c),_0x10112c=_0x10112c[_0x591ce3(0x74)](/<\|endoftext\|>/g,''),tokenizer[_0x591ce3(0x76)](_0x10112c)[_0x591ce3(0x7e)];}async[_0x5e5c0b(0x8f)](_0x5c3d46,_0x26779f,_0x3f2e36){const _0x49a40d=_0x5e5c0b,_0x3a231b=await this[_0x49a40d(0x92)](_0x5c3d46);if(_0x3a231b<=_0x26779f)return _0x5c3d46;return _0x5c3d46[_0x49a40d(0x75)](_0x3f2e36?0x1:0x0,0x1),this['_recursivePruning'](_0x5c3d46,_0x26779f,_0x3f2e36);}['getUuid'](){return(0x0,uuid_1['v4'])();}}exports[_0x5e5c0b(0x7c)]=NineStore;