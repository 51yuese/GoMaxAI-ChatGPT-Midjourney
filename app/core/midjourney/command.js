'use strict';const _0x2f04e9=_0x432b;(function(_0x4ff44f,_0x11fb4d){const _0x302d91=_0x432b,_0x285f3f=_0x4ff44f();while(!![]){try{const _0x538cab=parseInt(_0x302d91(0xf1))/0x1+-parseInt(_0x302d91(0xe6))/0x2+parseInt(_0x302d91(0xe4))/0x3+parseInt(_0x302d91(0xf5))/0x4+parseInt(_0x302d91(0xe1))/0x5*(-parseInt(_0x302d91(0xdd))/0x6)+parseInt(_0x302d91(0xf6))/0x7+-parseInt(_0x302d91(0xe9))/0x8;if(_0x538cab===_0x11fb4d)break;else _0x285f3f['push'](_0x285f3f['shift']());}catch(_0xf541a7){_0x285f3f['push'](_0x285f3f['shift']());}}}(_0x1d71,0x8a1f1));function _0x432b(_0x39957c,_0x3d2c40){const _0x1d719d=_0x1d71();return _0x432b=function(_0x432bdf,_0x31ede6){_0x432bdf=_0x432bdf-0xda;let _0x5807b6=_0x1d719d[_0x432bdf];return _0x5807b6;},_0x432b(_0x39957c,_0x3d2c40);}Object[_0x2f04e9(0xf4)](exports,'__esModule',{'value':!![]}),exports['MidjourneyCommand']=exports[_0x2f04e9(0xf9)]=void 0x0;const fetch=require(_0x2f04e9(0xe5));exports[_0x2f04e9(0xf9)]=['ask',_0x2f04e9(0xf8),_0x2f04e9(0xfa),'fast',_0x2f04e9(0xe2),'imagine',_0x2f04e9(0xea),'prefer',_0x2f04e9(0xdc),_0x2f04e9(0xfc),_0x2f04e9(0xf0),'settings','show',_0x2f04e9(0xef),_0x2f04e9(0xfb),_0x2f04e9(0xe3)];function _0x1d71(){const _0x2413ae=['resolve','35OThiIN','help','subscribe','1411590KEnNVA','isomorphic-fetch','989364AssLjo','then','/application-commands/search?','6341048sANcUg','info','length','apiBaseUrl','command\x20not\x20found','/api/v9/channels/','stealth','relax','1057252wgSvol','token','reject','defineProperty','862872RemCZx','7297332eBoXIR','opts','blend','Commands','describe','shorten','public','commandCaches','channel_id','json','private','799644WIGBIW','false','MidjourneyCommand'];_0x1d71=function(){return _0x2413ae;};return _0x1d71();}class MidjourneyCommand{constructor(_0x4f3bb8){const _0x2e2223=_0x2f04e9;this[_0x2e2223(0xf7)]=_0x4f3bb8,this[_0x2e2223(0xfd)]={};}['getCommand'](_0x56e88f){const _0x26924b=_0x2f04e9;if(!this[_0x26924b(0xfd)][_0x56e88f]){const _0x398536=new URLSearchParams({'type':'1','query':_0x56e88f,'limit':'1','include_applications':_0x26924b(0xde)});return fetch(this[_0x26924b(0xf7)][_0x26924b(0xec)]+_0x26924b(0xee)+this[_0x26924b(0xf7)][_0x26924b(0xda)]+_0x26924b(0xe8)+_0x398536,{'headers':{'authorization':this[_0x26924b(0xf7)][_0x26924b(0xf2)]}})[_0x26924b(0xe7)](_0x4cdfa8=>_0x4cdfa8[_0x26924b(0xdb)]())['then'](({application_commands:_0x2fb777})=>{const _0x721bd8=_0x26924b;return _0x2fb777[_0x721bd8(0xeb)]?(this['commandCaches'][_0x56e88f]=_0x2fb777[0x0],this[_0x721bd8(0xfd)][_0x56e88f]):Promise[_0x721bd8(0xf3)](new Error(_0x721bd8(0xed)));});}return Promise[_0x26924b(0xe0)](this[_0x26924b(0xfd)][_0x56e88f]);}}exports[_0x2f04e9(0xdf)]=MidjourneyCommand;