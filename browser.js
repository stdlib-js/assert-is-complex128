// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var x=String.fromCharCode,k=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,a,o,p,l,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function A(e){var r,t;if(!I(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var C,R=Object.prototype,O=R.toString,P=R.__defineGetter__,Z=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var G=C;function N(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"number"==typeof e}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=U();function B(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&Y.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=B()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[D],r=J(e,D);try{e[D]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[D]=t:delete e[D],i}:function(e){return z.call(e)},K=Number,Q=K.prototype.toString,ee=B();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function te(e){return X(e)||re(e)}function ie(e,r){if(!(this instanceof ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!X(e))throw new TypeError(A("invalid argument. Real component must be a number. Value: `%s`.",e));if(!X(r))throw new TypeError(A("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}N(te,"isPrimitive",X),N(te,"isObject",re),N(ie,"BYTES_PER_ELEMENT",8),N(ie.prototype,"BYTES_PER_ELEMENT",8),N(ie.prototype,"byteLength",16),N(ie.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),N(ie.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ne=U(),ae=Object.prototype.toString,oe="function"==typeof Symbol?Symbol:void 0,ce="function"==typeof oe?oe.toStringTag:"",se=ne&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return ae.call(e);t=e[ce],r=J(e,ce);try{e[ce]=void 0}catch(r){return ae.call(e)}return i=ae.call(e),r?e[ce]=t:delete e[ce],i}:function(e){return ae.call(e)},pe="function"==typeof Object.defineProperty?Object.defineProperty:null,le=Object.defineProperty;function ue(e){return"number"==typeof e}function fe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ge(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+fe(n):fe(n)+e,i&&(e="-"+e)),e}var de=String.prototype.toLowerCase,he=String.prototype.toUpperCase;function we(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ue(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ge(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ge(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===he.call(e.specifier)?he.call(t):de.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function be(e){return"string"==typeof e}var ye=Math.abs,ve=String.prototype.toLowerCase,me=String.prototype.toUpperCase,_e=String.prototype.replace,Ee=/e\+(\d)$/,xe=/e-(\d)$/,ke=/^(\d+)$/,Se=/^(\d+)e/,Te=/\.0$/,Ve=/\.0*e/,je=/(\..*[^0])0*e/;function $e(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ue(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ye(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=_e.call(t,je,"$1e"),t=_e.call(t,Ve,"e"),t=_e.call(t,Te,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_e.call(t,Ee,"e+0$1"),t=_e.call(t,xe,"e-0$1"),e.alternate&&(t=_e.call(t,ke,"$1."),t=_e.call(t,Se,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===me.call(e.specifier)?me.call(t):ve.call(t)}function Fe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ie(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Fe(i):Fe(i)+e}var Ae=String.fromCharCode,Ce=isNaN,Re=Array.isArray;function Oe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Pe(e){var r,t,i,n,a,o,c,s,p;if(!Re(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(be(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Oe(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ce(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ce(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=we(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ce(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ce(a)?String(i.arg):Ae(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=$e(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ge(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ie(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ze=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Le(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function We(e){var r,t,i,n;for(t=[],n=0,i=Ze.exec(e);i;)(r=e.slice(n,Ze.lastIndex-i[0].length)).length&&t.push(r),t.push(Le(i)),n=Ze.lastIndex,i=Ze.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ge(e){return"string"==typeof e}function Ne(e){var r,t;if(!Ge(e))throw new TypeError(Ne("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[We(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Pe.apply(null,r)}var Xe,Ue=Object.prototype,Me=Ue.toString,Be=Ue.__defineGetter__,ze=Ue.__defineSetter__,Ye=Ue.__lookupGetter__,Je=Ue.__lookupSetter__;function qe(){return/^\s*function\s*([^(]*)/i}Xe=function(){try{return pe({},"x",{}),!0}catch(e){return!1}}()?le:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Me.call(e))throw new TypeError(Ne("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Me.call(t))throw new TypeError(Ne("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Ye.call(e,r)||Je.call(e,r)?(i=e.__proto__,e.__proto__=Ue,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Be&&Be.call(e,r,t.get),o&&ze&&ze.call(e,r,t.set),e};var De=/^\s*function\s*([^(]*)/i;Xe(qe,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:De});var He="function"==typeof Object.defineProperty?Object.defineProperty:null,Ke=Object.defineProperty;function Qe(e){return"number"==typeof e}function er(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function rr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+er(n):er(n)+e,i&&(e="-"+e)),e}var tr=String.prototype.toLowerCase,ir=String.prototype.toUpperCase;function nr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Qe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=rr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=rr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ir.call(e.specifier)?ir.call(t):tr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ar(e){return"string"==typeof e}var or=Math.abs,cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,pr=String.prototype.replace,lr=/e\+(\d)$/,ur=/e-(\d)$/,fr=/^(\d+)$/,gr=/^(\d+)e/,dr=/\.0$/,hr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Qe(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":or(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=pr.call(t,wr,"$1e"),t=pr.call(t,hr,"e"),t=pr.call(t,dr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=pr.call(t,lr,"e+0$1"),t=pr.call(t,ur,"e-0$1"),e.alternate&&(t=pr.call(t,fr,"$1."),t=pr.call(t,gr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===sr.call(e.specifier)?sr.call(t):cr.call(t)}function yr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function vr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+yr(i):yr(i)+e}var mr=String.fromCharCode,_r=isNaN,Er=Array.isArray;function xr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function kr(e){var r,t,i,n,a,o,c,s,p;if(!Er(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ar(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=xr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,_r(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,_r(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=nr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!_r(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=_r(a)?String(i.arg):mr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=br(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=rr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=vr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Sr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Vr(e){var r,t,i,n;for(t=[],n=0,i=Sr.exec(e);i;)(r=e.slice(n,Sr.lastIndex-i[0].length)).length&&t.push(r),t.push(Tr(i)),n=Sr.lastIndex,i=Sr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function jr(e){return"string"==typeof e}function $r(e){var r,t;if(!jr(e))throw new TypeError($r("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Vr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return kr.apply(null,r)}var Fr,Ir=Object.prototype,Ar=Ir.toString,Cr=Ir.__defineGetter__,Rr=Ir.__defineSetter__,Or=Ir.__lookupGetter__,Pr=Ir.__lookupSetter__;Fr=function(){try{return He({},"x",{}),!0}catch(e){return!1}}()?Ke:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ar.call(e))throw new TypeError($r("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ar.call(t))throw new TypeError($r("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Or.call(e,r)||Pr.call(e,r)?(i=e.__proto__,e.__proto__=Ir,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Cr&&Cr.call(e,r,t.get),o&&Rr&&Rr.call(e,r,t.set),e};var Zr,Lr=Fr,Wr=U(),Gr=Object.prototype.toString,Nr="function"==typeof Symbol?Symbol:void 0,Xr="function"==typeof Nr?Nr.toStringTag:"",Ur=Wr&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return Gr.call(e);t=e[Xr],r=J(e,Xr);try{e[Xr]=void 0}catch(r){return Gr.call(e)}return i=Gr.call(e),r?e[Xr]=t:delete e[Xr],i}:function(e){return Gr.call(e)};Zr=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ur(e)};var Mr=Zr;function Br(e){return"number"==typeof e}function zr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Yr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+zr(n):zr(n)+e,i&&(e="-"+e)),e}var Jr=String.prototype.toLowerCase,qr=String.prototype.toUpperCase;function Dr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Br(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Yr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Yr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===qr.call(e.specifier)?qr.call(t):Jr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Hr(e){return"string"==typeof e}var Kr=Math.abs,Qr=String.prototype.toLowerCase,et=String.prototype.toUpperCase,rt=String.prototype.replace,tt=/e\+(\d)$/,it=/e-(\d)$/,nt=/^(\d+)$/,at=/^(\d+)e/,ot=/\.0$/,ct=/\.0*e/,st=/(\..*[^0])0*e/;function pt(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Br(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Kr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=rt.call(t,st,"$1e"),t=rt.call(t,ct,"e"),t=rt.call(t,ot,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=rt.call(t,tt,"e+0$1"),t=rt.call(t,it,"e-0$1"),e.alternate&&(t=rt.call(t,nt,"$1."),t=rt.call(t,at,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===et.call(e.specifier)?et.call(t):Qr.call(t)}function lt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ut(e,r,t){var i=r-e.length;return i<0?e:e=t?e+lt(i):lt(i)+e}var ft=String.fromCharCode,gt=isNaN,dt=Array.isArray;function ht(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wt(e){var r,t,i,n,a,o,c,s,p;if(!dt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Hr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=ht(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,gt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,gt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Dr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!gt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=gt(a)?String(i.arg):ft(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=pt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Yr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ut(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var bt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function vt(e){var r,t,i,n;for(t=[],n=0,i=bt.exec(e);i;)(r=e.slice(n,bt.lastIndex-i[0].length)).length&&t.push(r),t.push(yt(i)),n=bt.lastIndex,i=bt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function mt(e){return"string"==typeof e}function _t(e){var r,t;if(!mt(e))throw new TypeError(_t("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[vt(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return wt.apply(null,r)}function Et(e){return null!==e&&"object"==typeof e}var xt=function(e){if("function"!=typeof e)throw new TypeError(_t("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Mr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Et);function kt(e){var r,t,i;if(("Object"===(t=se(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=De.exec(i.toString()))return r[1]}return function(e){return Et(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}(e)?"Buffer":t}return function(e,r,t){Lr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Et,"isObjectLikeArray",xt),function(e){return e instanceof ie||"Complex128"===kt(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplex128=r();
//# sourceMappingURL=browser.js.map