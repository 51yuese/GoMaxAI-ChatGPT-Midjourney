'use strict';function _0x2d1b(_0x40e7cd,_0x471476){const _0x5ec899=_0x5ec8();return _0x2d1b=function(_0x2d1b1c,_0x46ce75){_0x2d1b1c=_0x2d1b1c-0x178;let _0x186f02=_0x5ec899[_0x2d1b1c];return _0x186f02;},_0x2d1b(_0x40e7cd,_0x471476);}const _0x40c11c=_0x2d1b;function _0x5ec8(){const _0x460c86=['uasge','4531736HEZFuP','includes','344832GdHSHO','V2.0','text','9vWeDEF','853028ZMPCgd','V1.5','2aUxpga','ChatMessage','map','6WaNNpe','getModel','spark','1064275ZoWNUM','sendMessageFromXunFei','usage','spark-node-sdk','6WkPzor','130aTaGvz','fromUser','6204gBbuOl','XunFeiSpark','content','log','chatAsync','defineProperty','3358110OMSnjm','ModelVersion','8480EeoYvI','695087Yhtptq'];_0x5ec8=function(){return _0x460c86;};return _0x5ec8();}(function(_0x20d2d4,_0x4da4a0){const _0x227c2b=_0x2d1b,_0x1119a0=_0x20d2d4();while(!![]){try{const _0x1cdfcf=-parseInt(_0x227c2b(0x189))/0x1*(parseInt(_0x227c2b(0x193))/0x2)+-parseInt(_0x227c2b(0x196))/0x3*(-parseInt(_0x227c2b(0x191))/0x4)+parseInt(_0x227c2b(0x179))/0x5*(-parseInt(_0x227c2b(0x17d))/0x6)+parseInt(_0x227c2b(0x186))/0x7+-parseInt(_0x227c2b(0x18b))/0x8*(-parseInt(_0x227c2b(0x190))/0x9)+-parseInt(_0x227c2b(0x188))/0xa*(parseInt(_0x227c2b(0x180))/0xb)+-parseInt(_0x227c2b(0x18d))/0xc*(-parseInt(_0x227c2b(0x17e))/0xd);if(_0x1cdfcf===_0x4da4a0)break;else _0x1119a0['push'](_0x1119a0['shift']());}catch(_0x467860){_0x1119a0['push'](_0x1119a0['shift']());}}}(_0x5ec8,0x5b461));Object[_0x40c11c(0x185)](exports,'__esModule',{'value':!![]}),exports[_0x40c11c(0x181)]=void 0x0;const spark_node_sdk_1=require(_0x40c11c(0x17c));class XunFeiSpark{constructor(_0x3d3c58){const _0x3bb6fc=_0x40c11c;this['message']={},this[_0x3bb6fc(0x197)]=_0x5bf197=>{const _0xa67018=_0x3bb6fc;return _0x5bf197['includes'](_0xa67018(0x192))?spark_node_sdk_1[_0xa67018(0x187)]['V1_5']:_0x5bf197[_0xa67018(0x18c)](_0xa67018(0x18e))?spark_node_sdk_1[_0xa67018(0x187)]['V2']:spark_node_sdk_1[_0xa67018(0x187)]['V3'];};const {appid:_0x245607,secret:_0x3ab128,key:_0x1cbd54}=_0x3d3c58;this[_0x3bb6fc(0x178)]=new spark_node_sdk_1['SparkClient'](_0x245607,_0x1cbd54,_0x3ab128);}async[_0x40c11c(0x17a)](_0x25ecea,_0x3e8c44){const _0x19bfa6=_0x40c11c;let _0x3cb8c5={'usage':{'completion_tokens':0x0,'prompt_tokens':0x0,'question_tokens':0x0,'total_tokens':0x0},'text':''},_0x3b7c94='';const {temperature:_0x1e24a0,chatId:_0x157a39,model:_0x42b87f,onProgress:_0x857ad6,abortController:_0x19f083}=_0x3e8c44,_0x1363a5=this[_0x19bfa6(0x197)](_0x42b87f);let _0x2a8a31=typeof _0x25ecea==='string'?[spark_node_sdk_1[_0x19bfa6(0x194)]['fromUser'](_0x25ecea)]:_0x25ecea[_0x19bfa6(0x195)](_0x5336d6=>spark_node_sdk_1[_0x19bfa6(0x194)][_0x19bfa6(0x17f)](_0x5336d6[_0x19bfa6(0x182)]));return await this[_0x19bfa6(0x178)][_0x19bfa6(0x184)](_0x1363a5,_0x2a8a31,_0x12c41b=>{const _0x2adcd6=_0x19bfa6;try{_0x12c41b&&(_0x3b7c94+=_0x12c41b[_0x2adcd6(0x18f)]),_0x3cb8c5[_0x2adcd6(0x17b)]=_0x12c41b[_0x2adcd6(0x18a)],_0x3cb8c5[_0x2adcd6(0x18f)]=_0x3b7c94,_0x857ad6(_0x3cb8c5);}catch(_0x4781ec){console[_0x2adcd6(0x183)](_0x4781ec),_0x857ad6(_0x3cb8c5);}},{'temperature':_0x1e24a0||0.5,'max_tokens':0x800,'top_k':0x4,'chat_id':null},_0x157a39,_0x19f083),{'text':_0x3b7c94,'usage':_0x3cb8c5[_0x19bfa6(0x17b)]};}}exports[_0x40c11c(0x181)]=XunFeiSpark;