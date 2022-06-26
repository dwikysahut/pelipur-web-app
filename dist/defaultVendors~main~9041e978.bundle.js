(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{4:function(e,ol,sl){"use strict";(function(W){sl.d(ol,"a",function(){return Us});sl.d(ol,"b",function(){return a});sl.d(ol,"c",function(){return _r});sl.d(ol,"d",function(){return M});sl.d(ol,"e",function(){return Mu});sl.d(ol,"f",function(){return ue});sl.d(ol,"g",function(){return zo});sl.d(ol,"h",function(){return q});sl.d(ol,"i",function(){return Ks});sl.d(ol,"j",function(){return Ku});sl.d(ol,"k",function(){return Ju});sl.d(ol,"l",function(){return du});sl.d(ol,"m",function(){return pu});sl.d(ol,"n",function(){return ju});sl.d(ol,"o",function(){return Yu});sl.d(ol,"p",function(){return Vu});sl.d(ol,"q",function(){return nu});sl.d(ol,"r",function(){return Qu});sl.d(ol,"s",function(){return $u});sl.d(ol,"t",function(){return tl});sl.d(ol,"u",function(){return wu});sl.d(ol,"v",function(){return Cu});sl.d(ol,"w",function(){return hu});sl.d(ol,"x",function(){return su});sl.d(ol,"y",function(){return uu});sl.d(ol,"z",function(){return lu});sl.d(ol,"A",function(){return cu});sl.d(ol,"B",function(){return ou});sl.d(ol,"C",function(){return Iu});sl.d(ol,"D",function(){return Su});sl.d(ol,"E",function(){return Ou});sl.d(ol,"F",function(){return xu});sl.d(ol,"G",function(){return $s});sl.d(ol,"H",function(){return Du});sl.d(ol,"I",function(){return Ys});sl.d(ol,"J",function(){return Gs});sl.d(ol,"K",function(){return Js});sl.d(ol,"L",function(){return rl});sl.d(ol,"M",function(){return el});sl.d(ol,"N",function(){return Xs});sl.d(ol,"O",function(){return Zs});sl.d(ol,"P",function(){return eu});sl.d(ol,"Q",function(){return gu});sl.d(ol,"R",function(){return yu});sl.d(ol,"S",function(){return tu});var n=sl(12);var t=sl(23);var g=sl(1);var r=sl(28);function U(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */U=function e(){return o};var o={},e=Object.prototype,c=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},i=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",r=t.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function e(t,n,r){return t[n]=r}}function s(e,t,n,r){var i=t&&t.prototype instanceof u?t:u,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(a,o,s){var u="suspendedStart";return function(e,t){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===e)throw t;return I()}for(s.method=e,s.arg=t;;){var n=s.delegate;if(n){var r=k(n,s);if(r){if(r===l)continue;return r}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===u)throw u="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);u="executing";var i=h(a,o,s);if("normal"===i.type){if(u=s.done?"completed":"suspendedYield",i.arg===l)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(u="completed",s.method="throw",s.arg=i.arg)}}}(e,n,o),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}o.wrap=s;var l={};function u(){}function f(){}function d(){}var v={};a(v,i,function(){return this});var p=Object.getPrototypeOf,_=p&&p(p(T([])));_&&_!==e&&c.call(_,i)&&(v=_);var y=d.prototype=u.prototype=Object.create(v);function m(e){["next","throw","return"].forEach(function(t){a(e,t,function(e){return this._invoke(t,e)})})}function g(s,u){function l(e,t,n,r){var i=h(s[e],s,t);if("throw"!==i.type){var a=i.arg,o=a.value;return o&&"object"==E(o)&&c.call(o,"__await")?u.resolve(o.__await).then(function(e){l("next",e,n,r)},function(e){l("throw",e,n,r)}):u.resolve(o).then(function(e){a.value=e,n(a)},function(e){return l("throw",e,n,r)})}r(i.arg)}var t;this._invoke=function(n,r){function e(){return new u(function(e,t){l(n,r,e,t)})}return t=t?t.then(e,e):e()}}function k(e,t){var n=e.iterator[t.method];if(undefined===n){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=undefined,k(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=h(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;){if(c.call(t,n))return e.value=t[n],e.done=!1,e}return e.value=undefined,e.done=!0,e};return r.next=r}}return{next:I}}function I(){return{value:undefined,done:!0}}return f.prototype=d,a(y,"constructor",d),a(d,"constructor",f),f.displayName=a(d,r,"GeneratorFunction"),o.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a(e,r,"GeneratorFunction")),e.prototype=Object.create(y),e},o.awrap=function(e){return{__await:e}},m(g.prototype),a(g.prototype,n,function(){return this}),o.AsyncIterator=g,o.async=function(e,t,n,r,i){void 0===i&&(i=Promise);var a=new g(s(e,t,n,r),i);return o.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},m(y),a(y,r,"Generator"),a(y,i,function(){return this}),a(y,"toString",function(){return"[object Generator]"}),o.keys=function(n){var r=[];for(var e in n){r.push(e)}return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=T,C.prototype={constructor:C,reset:function e(t){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(b),!t)for(var n in this){"t"===n.charAt(0)&&c.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=undefined)}},stop:function e(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function e(n){if(this.done)throw n;var r=this;function t(e,t){return o.type="throw",o.arg=n,r.next=e,t&&(r.method="next",r.arg=undefined),!!t}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var s=c.call(a,"catchLoc"),u=c.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function e(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&c.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=n,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(o)},complete:function e(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function e(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function e(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var a=i.arg;b(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function e(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=undefined),l}},o}function B(e,t){return H(e)||z(e,t)||ne(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function z(e,t){var n=e==null?null:typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n==null)return;var r=[];var i=true;var a=false;var o,s;try{for(n=n.call(e);!(i=(o=n.next()).done);i=true){r.push(o.value);if(t&&r.length===t)break}}catch(e){a=true;s=e}finally{try{if(!i&&n["return"]!=null)n["return"]()}finally{if(a)throw s}}return r}function H(e){if(Array.isArray(e))return e}function V(e,t,n,r,i,a,o){try{var s=e[a](o);var u=s.value}catch(e){n(e);return}if(s.done){t(u)}else{Promise.resolve(u).then(r,i)}}function Y(s){return function(){var e=this,o=arguments;return new Promise(function(t,n){var r=s.apply(e,o);function i(e){V(r,t,n,i,a,"next",e)}function a(e){V(r,t,n,i,a,"throw",e)}i(undefined)})}}function o(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)G(e,t)}function G(e,t){G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,n){t.__proto__=n;return t};return G(e,t)}function s(i){var a=$();return function e(){var t=J(i),n;if(a){var r=J(this).constructor;n=Reflect.construct(t,arguments,r)}else{n=t.apply(this,arguments)}return K(this,n)}}function K(e,t){if(t&&(E(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return Q(e)}function Q(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function $(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function J(e){J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return J(e)}function X(e){return te(e)||ee(e)||ne(e)||Z()}function Z(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ee(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function te(e){if(Array.isArray(e))return re(e)}function v(t,e){var n=typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=ne(t))||e&&t&&typeof t.length==="number"){if(n)t=n;var r=0;var i=function e(){};return{s:i,n:function e(){if(r>=t.length)return{done:true};return{done:false,value:t[r++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=true,o=false,s;return{s:function e(){n=n.call(t)},n:function e(){var t=n.next();a=t.done;return t},e:function e(t){o=true;s=t},f:function e(){try{if(!a&&n["return"]!=null)n["return"]()}finally{if(o)throw s}}}}function ne(e,t){if(!e)return;if(typeof e==="string")return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor)n=e.constructor.name;if(n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}function re(e,t){if(t==null||t>e.length)t=e.length;for(var n=0,r=new Array(t);n<t;n++){r[n]=e[n]}return r}function E(e){"@babel/helpers - typeof";return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function d(e,t,n){if(t)ie(e.prototype,t);if(n)ie(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}var ae="@firebase/database";var oe="0.13.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se="";function ue(e){se=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le=function(){function t(e){f(this,t);this.domStorage_=e;this.prefix_="firebase:"}d(t,[{key:"set",value:function e(t,n){if(n==null){this.domStorage_.removeItem(this.prefixedName_(t))}else{this.domStorage_.setItem(this.prefixedName_(t),Object(g["F"])(n))}}},{key:"get",value:function e(t){var n=this.domStorage_.getItem(this.prefixedName_(t));if(n==null){return null}else{return Object(g["z"])(n)}}},{key:"remove",value:function e(t){this.domStorage_.removeItem(this.prefixedName_(t))}},{key:"prefixedName_",value:function e(t){return this.prefix_+t}},{key:"toString",value:function e(){return this.domStorage_.toString()}}]);return t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce=function(){function e(){f(this,e);this.cache_={};this.isInMemoryStorage=true}d(e,[{key:"set",value:function e(t,n){if(n==null){delete this.cache_[t]}else{this.cache_[t]=n}}},{key:"get",value:function e(t){if(Object(g["j"])(this.cache_,t)){return this.cache_[t]}return null}},{key:"remove",value:function e(t){delete this.cache_[t]}}]);return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function e(t){try{if(typeof window!=="undefined"&&typeof window[t]!=="undefined"){var n=window[t];n.setItem("firebase:sentinel","cache");n.removeItem("firebase:sentinel");return new le(n)}}catch(e){}return new ce};var fe=he("localStorage");var de=he("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve=new r["b"]("@firebase/database");var pe=function(){var e=1;return function(){return e++}}();var _e=function e(t){var n=Object(g["E"])(t);var e=new g["d"];e.update(n);var r=e.digest();return g["g"].encodeByteArray(r)};var ye=function e(){var t="";for(var n=0;n<arguments.length;n++){var r=n<0||arguments.length<=n?undefined:arguments[n];if(Array.isArray(r)||r&&E(r)==="object"&&typeof r.length==="number"){t+=e.apply(null,r)}else if(E(r)==="object"){t+=Object(g["F"])(r)}else{t+=r}t+=" "}return t};var me=null;var ge=true;var ke=function e(t,n){Object(g["e"])(!n||t===true||t===false,"Can't turn on custom loggers persistently.");if(t===true){ve.logLevel=r["a"].VERBOSE;me=ve.log.bind(ve);if(n){de.set("logging_enabled",true)}}else if(typeof t==="function"){me=t}else{me=null;de.remove("logging_enabled")}};var m=function e(){if(ge===true){ge=false;if(me===null&&de.get("logging_enabled")===true){ke(true)}}if(me){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++){n[r]=arguments[r]}var i=ye.apply(null,n);me(i)}};var we=function e(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){t[n]=arguments[n]}m.apply(void 0,[r].concat(t))}};var be=function e(){var t="FIREBASE INTERNAL ERROR: "+ye.apply(void 0,arguments);ve.error(t)};var p=function e(){var t="FIREBASE FATAL ERROR: ".concat(ye.apply(void 0,arguments));ve.error(t);throw new Error(t)};var k=function e(){var t="FIREBASE WARNING: "+ye.apply(void 0,arguments);ve.warn(t)};var Ce=function e(){if(typeof window!=="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1){k("Insecure Firebase access from a secure page. "+"Please use https in calls to new Firebase().")}};var Te=function e(t){return typeof t==="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)};var Ie=function e(t){if(Object(g["w"])()||document.readyState==="complete"){t()}else{var n=false;var r=function e(){if(!document.body){setTimeout(e,Math.floor(10));return}if(!n){n=true;t()}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",r,false);window.addEventListener("load",r,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){r()}});window.attachEvent("onload",r)}}};var u="[MIN_NAME]";var l="[MAX_NAME]";var Ee=function e(t,n){if(t===n){return 0}else if(t===u||n===l){return-1}else if(n===u||t===l){return 1}else{var r=Le(t),i=Le(n);if(r!==null){if(i!==null){return r-i===0?t.length-n.length:r-i}else{return-1}}else if(i!==null){return 1}else{return t<n?-1:1}}};var Se=function e(t,n){if(t===n){return 0}else if(t<n){return-1}else{return 1}};var Pe=function e(t,n){if(n&&t in n){return n[t]}else{throw new Error("Missing required key ("+t+") in object: "+Object(g["F"])(n))}};var Oe=function e(t){if(E(t)!=="object"||t===null){return Object(g["F"])(t)}var n=[];for(var r in t){n.push(r)}n.sort();var i="{";for(var a=0;a<n.length;a++){if(a!==0){i+=","}i+=Object(g["F"])(n[a]);i+=":";i+=e(t[n[a]])}i+="}";return i};var Ne=function e(t,n){var r=t.length;if(r<=n){return[t]}var i=[];for(var a=0;a<r;a+=n){if(a+n>r){i.push(t.substring(a,r))}else{i.push(t.substring(a,a+n))}}return i};function h(e,t){for(var n in e){if(e.hasOwnProperty(n)){t(n,e[n])}}}var xe=function e(t){Object(g["e"])(!Te(t),"Invalid JSON number");var n=11,r=52;var i=(1<<n-1)-1;var a,o,s,u,l;if(t===0){o=0;s=0;a=1/t===-Infinity?1:0}else{a=t<0;t=Math.abs(t);if(t>=Math.pow(2,1-i)){u=Math.min(Math.floor(Math.log(t)/Math.LN2),i);o=u+i;s=Math.round(t*Math.pow(2,r-u)-Math.pow(2,r))}else{o=0;s=Math.round(t/Math.pow(2,1-i-r))}}var c=[];for(l=r;l;l-=1){c.push(s%2?1:0);s=Math.floor(s/2)}for(l=n;l;l-=1){c.push(o%2?1:0);o=Math.floor(o/2)}c.push(a?1:0);c.reverse();var h=c.join("");var f="";for(l=0;l<64;l+=8){var d=parseInt(h.substr(l,8),2).toString(16);if(d.length===1){d="0"+d}f=f+d}return f.toLowerCase()};var Re=function e(){return!!((typeof window==="undefined"?"undefined":E(window))==="object"&&window["chrome"]&&window["chrome"]["extension"]&&!/^chrome/.test(window.location.href))};var je=function e(){return(typeof Windows==="undefined"?"undefined":E(Windows))==="object"&&E(Windows.UI)==="object"};function De(e,t){var n="Unknown Error";if(e==="too_big"){n="The data requested exceeds the maximum size "+"that can be accessed with a single request."}else if(e==="permission_denied"){n="Client doesn't have permission to access the desired data."}else if(e==="unavailable"){n="The service is unavailable"}var r=new Error(e+" at "+t._path.toString()+": "+n);r.code=e.toUpperCase();return r}var Ae=new RegExp("^-?(0*)\\d{1,10}$");var Fe=-2147483648;var qe=2147483647;var Le=function e(t){if(Ae.test(t)){var n=Number(t);if(n>=Fe&&n<=qe){return n}}return null};var Me=function e(t){try{t()}catch(t){setTimeout(function(){var e=t.stack||"";k("Exception was thrown by user callback.",e);throw t},Math.floor(0))}};var We=function e(){var t=(typeof window==="undefined"?"undefined":E(window))==="object"&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0};var Ue=function e(t,n){var r=setTimeout(t,n);if(E(r)==="object"&&r["unref"]){r["unref"]()}return r};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be=function(){function r(e,t){var n=this;f(this,r);this.appName_=e;this.appCheckProvider=t;this.appCheck=t===null||t===void 0?void 0:t.getImmediate({optional:true});if(!this.appCheck){t===null||t===void 0?void 0:t.get().then(function(e){return n.appCheck=e})}}d(r,[{key:"getToken",value:function e(n){var r=this;if(!this.appCheck){return new Promise(function(e,t){setTimeout(function(){if(r.appCheck){r.getToken(n).then(e,t)}else{e(null)}},0)})}return this.appCheck.getToken(n)}},{key:"addTokenChangeListener",value:function e(t){var n;(n=this.appCheckProvider)===null||n===void 0?void 0:n.get().then(function(e){return e.addTokenListener(t)})}},{key:"notifyForInvalidToken",value:function e(){k('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze=function(){function i(e,t,n){var r=this;f(this,i);this.appName_=e;this.firebaseOptions_=t;this.authProvider_=n;this.auth_=null;this.auth_=n.getImmediate({optional:true});if(!this.auth_){n.onInit(function(e){return r.auth_=e})}}d(i,[{key:"getToken",value:function e(n){var r=this;if(!this.auth_){return new Promise(function(e,t){setTimeout(function(){if(r.auth_){r.getToken(n).then(e,t)}else{e(null)}},0)})}return this.auth_.getToken(n)["catch"](function(e){if(e&&e.code==="auth/token-not-initialized"){m("Got auth/token-not-initialized error.  Treating as null token.");return null}else{return Promise.reject(e)}})}},{key:"addTokenChangeListener",value:function e(t){if(this.auth_){this.auth_.addAuthTokenListener(t)}else{this.authProvider_.get().then(function(e){return e.addAuthTokenListener(t)})}}},{key:"removeTokenChangeListener",value:function e(t){this.authProvider_.get().then(function(e){return e.removeAuthTokenListener(t)})}},{key:"notifyForInvalidToken",value:function e(){var t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not '+"initialized correctly. ";if("credential"in this.firebaseOptions_){t+='Make sure the "credential" property provided to initializeApp() '+'is authorized to access the specified "databaseURL" and is from the correct '+"project."}else if("serviceAccount"in this.firebaseOptions_){t+='Make sure the "serviceAccount" property provided to initializeApp() '+'is authorized to access the specified "databaseURL" and is from the correct '+"project."}else{t+='Make sure the "apiKey" and "databaseURL" properties provided to '+"initializeApp() match the values provided for your app at "+"https://console.firebase.google.com/."}k(t)}}]);return i}();var He=function(){function t(e){f(this,t);this.accessToken=e}d(t,[{key:"getToken",value:function e(t){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function e(t){t(this.accessToken)}},{key:"removeTokenChangeListener",value:function e(t){}},{key:"notifyForInvalidToken",value:function e(){}}]);return t}();He.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve="5";var Ye="v";var Ge="s";var Ke="r";var Qe="f";var $e=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;var Je="ls";var Xe="p";var Ze="ac";var et="websocket";var tt="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt=function(){function s(e,t,n,r){var i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var a=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"";var o=arguments.length>6&&arguments[6]!==undefined?arguments[6]:false;f(this,s);this.secure=t;this.namespace=n;this.webSocketOnly=r;this.nodeAdmin=i;this.persistenceKey=a;this.includeNamespaceInQueryParams=o;this._host=e.toLowerCase();this._domain=this._host.substr(this._host.indexOf(".")+1);this.internalHost=fe.get("host:"+e)||this._host}d(s,[{key:"isCacheableHost",value:function e(){return this.internalHost.substr(0,2)==="s-"}},{key:"isCustomHost",value:function e(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}},{key:"host",get:function e(){return this._host},set:function e(t){if(t!==this.internalHost){this.internalHost=t;if(this.isCacheableHost()){fe.set("host:"+this._host,this.internalHost)}}}},{key:"toString",value:function e(){var t=this.toURLString();if(this.persistenceKey){t+="<"+this.persistenceKey+">"}return t}},{key:"toURLString",value:function e(){var t=this.secure?"https://":"http://";var n=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(t).concat(this.host,"/").concat(n)}}]);return s}();function rt(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function it(e,t,n){Object(g["e"])(typeof t==="string","typeof type must == string");Object(g["e"])(E(n)==="object","typeof params must == object");var r;if(t===et){r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?"}else if(t===tt){r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}else{throw new Error("Unknown connection type: "+t)}if(rt(e)){n["ns"]=e.namespace}var i=[];h(n,function(e,t){i.push(e+"="+t)});return r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at=function(){function e(){f(this,e);this.counters_={}}d(e,[{key:"incrementCounter",value:function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;if(!Object(g["j"])(this.counters_,t)){this.counters_[t]=0}this.counters_[t]+=n}},{key:"get",value:function e(){return Object(g["m"])(this.counters_)}}]);return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot={};var st={};function ut(e){var t=e.toString();if(!ot[t]){ot[t]=new at}return ot[t]}function lt(e,t){var n=e.toString();if(!st[n]){st[n]=t()}return st[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct=function(){function t(e){f(this,t);this.onMessage_=e;this.pendingResponses=[];this.currentResponseNum=0;this.closeAfterResponse=-1;this.onClose=null}d(t,[{key:"closeAfter",value:function e(t,n){this.closeAfterResponse=t;this.onClose=n;if(this.closeAfterResponse<this.currentResponseNum){this.onClose();this.onClose=null}}},{key:"handleResponse",value:function e(t,n){var i=this;this.pendingResponses[t]=n;var r=function e(){var n=i.pendingResponses[i.currentResponseNum];delete i.pendingResponses[i.currentResponseNum];var t=function e(t){if(n[t]){Me(function(){i.onMessage_(n[t])})}};for(var r=0;r<n.length;++r){t(r)}if(i.currentResponseNum===i.closeAfterResponse){if(i.onClose){i.onClose();i.onClose=null}return"break"}i.currentResponseNum++};while(this.pendingResponses[this.currentResponseNum]){var a=r();if(a==="break")break}}}]);return t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht="start";var ft="close";var dt="pLPCommand";var vt="pRTLPCB";var pt="id";var _t="pw";var yt="ser";var mt="cb";var gt="seg";var kt="ts";var wt="d";var bt="dframe";var Ct=1870;var Tt=30;var It=Ct-Tt;var Et=25e3;var St=3e4;var Pt=function(){function u(e,t,n,r,i,a,o){var s=this;f(this,u);this.connId=e;this.repoInfo=t;this.applicationId=n;this.appCheckToken=r;this.authToken=i;this.transportSessionId=a;this.lastSessionId=o;this.bytesSent=0;this.bytesReceived=0;this.everConnected_=false;this.log_=we(e);this.stats_=ut(t);this.urlFn=function(e){if(s.appCheckToken){e[Ze]=s.appCheckToken}return it(t,tt,e)}}d(u,[{key:"open",value:function e(t,n){var u=this;this.curSegmentNum=0;this.onDisconnect_=n;this.myPacketOrderer=new ct(t);this.isClosed_=false;this.connectTimeoutTimer_=setTimeout(function(){u.log_("Timed out trying to connect.");u.onClosed_();u.connectTimeoutTimer_=null},Math.floor(St));Ie(function(){if(u.isClosed_){return}u.scriptTagHolder=new Ot(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){t[n]=arguments[n]}var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4];u.incrementIncomingBytes_(t);if(!u.scriptTagHolder){return}if(u.connectTimeoutTimer_){clearTimeout(u.connectTimeoutTimer_);u.connectTimeoutTimer_=null}u.everConnected_=true;if(r===ht){u.id=i;u.password=a}else if(r===ft){if(i){u.scriptTagHolder.sendNewPolls=false;u.myPacketOrderer.closeAfter(i,function(){u.onClosed_()})}else{u.onClosed_()}}else{throw new Error("Unrecognized command received: "+r)}},function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){t[n]=arguments[n]}var r=t[0],i=t[1];u.incrementIncomingBytes_(t);u.myPacketOrderer.handleResponse(r,i)},function(){u.onClosed_()},u.urlFn);var e={};e[ht]="t";e[yt]=Math.floor(Math.random()*1e8);if(u.scriptTagHolder.uniqueCallbackIdentifier){e[mt]=u.scriptTagHolder.uniqueCallbackIdentifier}e[Ye]=Ve;if(u.transportSessionId){e[Ge]=u.transportSessionId}if(u.lastSessionId){e[Je]=u.lastSessionId}if(u.applicationId){e[Xe]=u.applicationId}if(u.appCheckToken){e[Ze]=u.appCheckToken}if(typeof location!=="undefined"&&location.hostname&&$e.test(location.hostname)){e[Ke]=Qe}var t=u.urlFn(e);u.log_("Connecting via long-poll to "+t);u.scriptTagHolder.addTag(t,function(){})})}},{key:"start",value:function e(){this.scriptTagHolder.startLongPoll(this.id,this.password);this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function e(){}},{key:"shutdown_",value:function e(){this.isClosed_=true;if(this.scriptTagHolder){this.scriptTagHolder.close();this.scriptTagHolder=null}if(this.myDisconnFrame){document.body.removeChild(this.myDisconnFrame);this.myDisconnFrame=null}if(this.connectTimeoutTimer_){clearTimeout(this.connectTimeoutTimer_);this.connectTimeoutTimer_=null}}},{key:"onClosed_",value:function e(){if(!this.isClosed_){this.log_("Longpoll is closing itself");this.shutdown_();if(this.onDisconnect_){this.onDisconnect_(this.everConnected_);this.onDisconnect_=null}}}},{key:"close",value:function e(){if(!this.isClosed_){this.log_("Longpoll is being closed.");this.shutdown_()}}},{key:"send",value:function e(t){var n=Object(g["F"])(t);this.bytesSent+=n.length;this.stats_.incrementCounter("bytes_sent",n.length);var r=Object(g["h"])(n);var i=Ne(r,It);for(var a=0;a<i.length;a++){this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[a]);this.curSegmentNum++}}},{key:"addDisconnectPingFrame",value:function e(t,n){if(Object(g["w"])()){return}this.myDisconnFrame=document.createElement("iframe");var r={};r[bt]="t";r[pt]=t;r[_t]=n;this.myDisconnFrame.src=this.urlFn(r);this.myDisconnFrame.style.display="none";document.body.appendChild(this.myDisconnFrame)}},{key:"incrementIncomingBytes_",value:function e(t){var n=Object(g["F"])(t).length;this.bytesReceived+=n;this.stats_.incrementCounter("bytes_received",n)}}],[{key:"forceAllow",value:function e(){u.forceAllow_=true}},{key:"forceDisallow",value:function e(){u.forceDisallow_=true}},{key:"isAvailable",value:function e(){if(Object(g["w"])()){return false}else if(u.forceAllow_){return true}else{return!u.forceDisallow_&&typeof document!=="undefined"&&document.createElement!=null&&!Re()&&!je()}}}]);return u}();var Ot=function(){function s(e,t,n,r){f(this,s);this.onDisconnect=n;this.urlFn=r;this.outstandingRequests=new Set;this.pendingSegs=[];this.currentSerial=Math.floor(Math.random()*1e8);this.sendNewPolls=true;if(!Object(g["w"])()){this.uniqueCallbackIdentifier=pe();window[dt+this.uniqueCallbackIdentifier]=e;window[vt+this.uniqueCallbackIdentifier]=t;this.myIFrame=s.createIFrame_();var i="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){var a=document.domain;i='<script>document.domain="'+a+'";<\/script>'}var o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open();this.myIFrame.doc.write(o);this.myIFrame.doc.close()}catch(e){m("frame writing exception");if(e.stack){m(e.stack)}m(e)}}else{this.commandCB=e;this.onMessageCB=t}}d(s,[{key:"close",value:function e(){var t=this;this.alive=false;if(this.myIFrame){this.myIFrame.doc.body.innerHTML="";setTimeout(function(){if(t.myIFrame!==null){document.body.removeChild(t.myIFrame);t.myIFrame=null}},Math.floor(0))}var n=this.onDisconnect;if(n){this.onDisconnect=null;n()}}},{key:"startLongPoll",value:function e(t,n){this.myID=t;this.myPW=n;this.alive=true;while(this.newRequest_()){}}},{key:"newRequest_",value:function e(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var t={};t[pt]=this.myID;t[_t]=this.myPW;t[yt]=this.currentSerial;var n=this.urlFn(t);var r="";var i=0;while(this.pendingSegs.length>0){var a=this.pendingSegs[0];if(a.d.length+Tt+r.length<=Ct){var o=this.pendingSegs.shift();r=r+"&"+gt+i+"="+o.seg+"&"+kt+i+"="+o.ts+"&"+wt+i+"="+o.d;i++}else{break}}n=n+r;this.addLongPollTag_(n,this.currentSerial);return true}else{return false}}},{key:"enqueueSegment",value:function e(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r});if(this.alive){this.newRequest_()}}},{key:"addLongPollTag_",value:function e(t,n){var r=this;this.outstandingRequests.add(n);var i=function e(){r.outstandingRequests["delete"](n);r.newRequest_()};var a=setTimeout(i,Math.floor(Et));var o=function e(){clearTimeout(a);i()};this.addTag(t,o)}},{key:"addTag",value:function e(n,r){var i=this;if(Object(g["w"])()){this.doNodeLongPoll(n,r)}else{setTimeout(function(){try{if(!i.sendNewPolls){return}var t=i.myIFrame.doc.createElement("script");t.type="text/javascript";t.async=true;t.src=n;t.onload=t.onreadystatechange=function(){var e=t.readyState;if(!e||e==="loaded"||e==="complete"){t.onload=t.onreadystatechange=null;if(t.parentNode){t.parentNode.removeChild(t)}r()}};t.onerror=function(){m("Long-poll script failed to load: "+n);i.sendNewPolls=false;i.close()};i.myIFrame.doc.body.appendChild(t)}catch(e){}},Math.floor(1))}}}],[{key:"createIFrame_",value:function e(){var t=document.createElement("iframe");t.style.display="none";if(document.body){document.body.appendChild(t);try{var n=t.contentWindow.document;if(!n){m("No IE domain setting required")}}catch(e){var r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else{throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready."}if(t.contentDocument){t.doc=t.contentDocument}else if(t.contentWindow){t.doc=t.contentWindow.document}else if(t.document){t.doc=t.document}return t}}]);return s}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt=16384;var xt=45e3;var Rt=null;if(typeof MozWebSocket!=="undefined"){Rt=MozWebSocket}else if(typeof WebSocket!=="undefined"){Rt=WebSocket}var jt=function(){function s(e,t,n,r,i,a,o){f(this,s);this.connId=e;this.applicationId=n;this.appCheckToken=r;this.authToken=i;this.keepaliveTimer=null;this.frames=null;this.totalFrames=0;this.bytesSent=0;this.bytesReceived=0;this.log_=we(this.connId);this.stats_=ut(t);this.connURL=s.connectionURL_(t,a,o,r,n);this.nodeAdmin=t.nodeAdmin}d(s,[{key:"open",value:function e(t,n){var r=this;this.onDisconnect=n;this.onMessage=t;this.log_("Websocket connecting to "+this.connURL);this.everConnected_=false;fe.set("previous_websocket_failure",true);try{var i;if(Object(g["w"])()){var a=this.nodeAdmin?"AdminNode":"Node";var o={headers:{"User-Agent":"Firebase/".concat(Ve,"/").concat(se,"/").concat(W.platform,"/").concat(a),"X-Firebase-GMPID":this.applicationId||""}};if(this.authToken){o.headers["Authorization"]="Bearer ".concat(this.authToken)}if(this.appCheckToken){o.headers["X-Firebase-AppCheck"]=this.appCheckToken}var s=W["env"];var u=this.connURL.indexOf("wss://")===0?s["HTTPS_PROXY"]||s["https_proxy"]:s["HTTP_PROXY"]||s["http_proxy"];if(u){o["proxy"]={origin:u}}}this.mySock=new Rt(this.connURL,[],i)}catch(e){this.log_("Error instantiating WebSocket.");var l=e.message||e.data;if(l){this.log_(l)}this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected.");r.everConnected_=true};this.mySock.onclose=function(){r.log_("Websocket connection was disconnected.");r.mySock=null;r.onClosed_()};this.mySock.onmessage=function(e){r.handleIncomingFrame(e)};this.mySock.onerror=function(e){r.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;if(t){r.log_(t)}r.onClosed_()}}},{key:"start",value:function e(){}},{key:"markConnectionHealthy",value:function e(){fe.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function e(t){this.frames.push(t);if(this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=Object(g["z"])(n);this.onMessage(r)}}},{key:"handleNewFrameCount_",value:function e(t){this.totalFrames=t;this.frames=[]}},{key:"extractFrameCount_",value:function e(t){Object(g["e"])(this.frames===null,"We already have a frame buffer");if(t.length<=6){var n=Number(t);if(!isNaN(n)){this.handleNewFrameCount_(n);return null}}this.handleNewFrameCount_(1);return t}},{key:"handleIncomingFrame",value:function e(t){if(this.mySock===null){return}var n=t["data"];this.bytesReceived+=n.length;this.stats_.incrementCounter("bytes_received",n.length);this.resetKeepAlive();if(this.frames!==null){this.appendFrame_(n)}else{var r=this.extractFrameCount_(n);if(r!==null){this.appendFrame_(r)}}}},{key:"send",value:function e(t){this.resetKeepAlive();var n=Object(g["F"])(t);this.bytesSent+=n.length;this.stats_.incrementCounter("bytes_sent",n.length);var r=Ne(n,Nt);if(r.length>1){this.sendString_(String(r.length))}for(var i=0;i<r.length;i++){this.sendString_(r[i])}}},{key:"shutdown_",value:function e(){this.isClosed_=true;if(this.keepaliveTimer){clearInterval(this.keepaliveTimer);this.keepaliveTimer=null}if(this.mySock){this.mySock.close();this.mySock=null}}},{key:"onClosed_",value:function e(){if(!this.isClosed_){this.log_("WebSocket is closing itself");this.shutdown_();if(this.onDisconnect){this.onDisconnect(this.everConnected_);this.onDisconnect=null}}}},{key:"close",value:function e(){if(!this.isClosed_){this.log_("WebSocket is being closed");this.shutdown_()}}},{key:"resetKeepAlive",value:function e(){var t=this;clearInterval(this.keepaliveTimer);this.keepaliveTimer=setInterval(function(){if(t.mySock){t.sendString_("0")}t.resetKeepAlive()},Math.floor(xt))}},{key:"sendString_",value:function e(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection.");setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function e(t,n,r,i,a){var o={};o[Ye]=Ve;if(!Object(g["w"])()&&typeof location!=="undefined"&&location.hostname&&$e.test(location.hostname)){o[Ke]=Qe}if(n){o[Ge]=n}if(r){o[Je]=r}if(i){o[Ze]=i}if(a){o[Xe]=a}return it(t,et,o)}},{key:"forceDisallow",value:function e(){s.forceDisallow_=true}},{key:"isAvailable",value:function e(){var t=false;if(typeof navigator!=="undefined"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/;var r=navigator.userAgent.match(n);if(r&&r.length>1){if(parseFloat(r[1])<4.4){t=true}}}return!t&&Rt!==null&&!s.forceDisallow_}},{key:"previouslyFailed",value:function e(){return fe.isInMemoryStorage||fe.get("previous_websocket_failure")===true}}]);return s}();jt.responsesRequiredToBeHealthy=2;jt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt=function(){function u(e){f(this,u);this.initTransports_(e)}d(u,[{key:"initTransports_",value:function e(t){var n=jt&&jt["isAvailable"]();var r=n&&!jt.previouslyFailed();if(t.webSocketOnly){if(!n){k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.")}r=true}if(r){this.transports_=[jt]}else{var i=this.transports_=[];var a=v(u.ALL_TRANSPORTS),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;if(s&&s["isAvailable"]()){i.push(s)}}}catch(e){a.e(e)}finally{a.f()}u.globalTransportInitialized_=true}}},{key:"initialTransport",value:function e(){if(this.transports_.length>0){return this.transports_[0]}else{throw new Error("No transports available")}}},{key:"upgradeTransport",value:function e(){if(this.transports_.length>1){return this.transports_[1]}else{return null}}}],[{key:"ALL_TRANSPORTS",get:function e(){return[Pt,jt]}},{key:"IS_TRANSPORT_INITIALIZED",get:function e(){return this.globalTransportInitialized_}}]);return u}();Dt.globalTransportInitialized_=false;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At=6e4;var Ft=5e3;var qt=10*1024;var Lt=100*1024;var Mt="t";var Wt="d";var Ut="s";var Bt="r";var zt="e";var Ht="o";var Vt="a";var Yt="n";var Gt="p";var Kt="h";var Qt=function(){function c(e,t,n,r,i,a,o,s,u,l){f(this,c);this.id=e;this.repoInfo_=t;this.applicationId_=n;this.appCheckToken_=r;this.authToken_=i;this.onMessage_=a;this.onReady_=o;this.onDisconnect_=s;this.onKill_=u;this.lastSessionId=l;this.connectionCount=0;this.pendingDataMessages=[];this.state_=0;this.log_=we("c:"+this.id+":");this.transportManager_=new Dt(t);this.log_("Connection created");this.start_()}d(c,[{key:"start_",value:function e(){var t=this;var n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId);this.primaryResponsesRequired_=n["responsesRequiredToBeHealthy"]||0;var r=this.connReceiver_(this.conn_);var i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_;this.rx_=this.conn_;this.secondaryConn_=null;this.isHealthy_=false;setTimeout(function(){t.conn_&&t.conn_.open(r,i)},Math.floor(0));var a=n["healthyTimeout"]||0;if(a>0){this.healthyTimeout_=Ue(function(){t.healthyTimeout_=null;if(!t.isHealthy_){if(t.conn_&&t.conn_.bytesReceived>Lt){t.log_("Connection exceeded healthy timeout but has received "+t.conn_.bytesReceived+" bytes.  Marking connection healthy.");t.isHealthy_=true;t.conn_.markConnectionHealthy()}else if(t.conn_&&t.conn_.bytesSent>qt){t.log_("Connection exceeded healthy timeout but has sent "+t.conn_.bytesSent+" bytes.  Leaving connection alive.")}else{t.log_("Closing unhealthy connection after timeout.");t.close()}}},Math.floor(a))}}},{key:"nextTransportId_",value:function e(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function e(t){var n=this;return function(e){if(t===n.conn_){n.onConnectionLost_(e)}else if(t===n.secondaryConn_){n.log_("Secondary connection lost.");n.onSecondaryConnectionLost_()}else{n.log_("closing an old connection")}}}},{key:"connReceiver_",value:function e(t){var n=this;return function(e){if(n.state_!==2){if(t===n.rx_){n.onPrimaryMessageReceived_(e)}else if(t===n.secondaryConn_){n.onSecondaryMessageReceived_(e)}else{n.log_("message on old connection")}}}}},{key:"sendRequest",value:function e(t){var n={t:"d",d:t};this.sendData_(n)}},{key:"tryCleanupConnection",value:function e(){if(this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_){this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId);this.conn_=this.secondaryConn_;this.secondaryConn_=null}}},{key:"onSecondaryControl_",value:function e(t){if(Mt in t){var n=t[Mt];if(n===Vt){this.upgradeIfSecondaryHealthy_()}else if(n===Bt){this.log_("Got a reset on secondary, closing it");this.secondaryConn_.close();if(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_){this.close()}}else if(n===Ht){this.log_("got pong on secondary.");this.secondaryResponsesRequired_--;this.upgradeIfSecondaryHealthy_()}}}},{key:"onSecondaryMessageReceived_",value:function e(t){var n=Pe("t",t);var r=Pe("d",t);if(n==="c"){this.onSecondaryControl_(r)}else if(n==="d"){this.pendingDataMessages.push(r)}else{throw new Error("Unknown protocol layer: "+n)}}},{key:"upgradeIfSecondaryHealthy_",value:function e(){if(this.secondaryResponsesRequired_<=0){this.log_("Secondary connection is healthy.");this.isHealthy_=true;this.secondaryConn_.markConnectionHealthy();this.proceedWithUpgrade_()}else{this.log_("sending ping on secondary.");this.secondaryConn_.send({t:"c",d:{t:Gt,d:{}}})}}},{key:"proceedWithUpgrade_",value:function e(){this.secondaryConn_.start();this.log_("sending client ack on secondary");this.secondaryConn_.send({t:"c",d:{t:Vt,d:{}}});this.log_("Ending transmission on primary");this.conn_.send({t:"c",d:{t:Yt,d:{}}});this.tx_=this.secondaryConn_;this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function e(t){var n=Pe("t",t);var r=Pe("d",t);if(n==="c"){this.onControl_(r)}else if(n==="d"){this.onDataMessage_(r)}}},{key:"onDataMessage_",value:function e(t){this.onPrimaryResponse_();this.onMessage_(t)}},{key:"onPrimaryResponse_",value:function e(){if(!this.isHealthy_){this.primaryResponsesRequired_--;if(this.primaryResponsesRequired_<=0){this.log_("Primary connection is healthy.");this.isHealthy_=true;this.conn_.markConnectionHealthy()}}}},{key:"onControl_",value:function e(t){var n=Pe(Mt,t);if(Wt in t){var r=t[Wt];if(n===Kt){this.onHandshake_(r)}else if(n===Yt){this.log_("recvd end transmission on primary");this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i){this.onDataMessage_(this.pendingDataMessages[i])}this.pendingDataMessages=[];this.tryCleanupConnection()}else if(n===Ut){this.onConnectionShutdown_(r)}else if(n===Bt){this.onReset_(r)}else if(n===zt){be("Server Error: "+r)}else if(n===Ht){this.log_("got pong on primary.");this.onPrimaryResponse_();this.sendPingOnPrimaryIfNecessary_()}else{be("Unknown control packet command: "+n)}}}},{key:"onHandshake_",value:function e(t){var n=t.ts;var r=t.v;var i=t.h;this.sessionId=t.s;this.repoInfo_.host=i;if(this.state_===0){this.conn_.start();this.onConnectionEstablished_(this.conn_,n);if(Ve!==r){k("Protocol version mismatch detected")}this.tryStartUpgrade_()}}},{key:"tryStartUpgrade_",value:function e(){var t=this.transportManager_.upgradeTransport();if(t){this.startUpgrade_(t)}}},{key:"startUpgrade_",value:function e(t){var n=this;this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId);this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;var r=this.connReceiver_(this.secondaryConn_);var i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i);Ue(function(){if(n.secondaryConn_){n.log_("Timed out trying to upgrade.");n.secondaryConn_.close()}},Math.floor(At))}},{key:"onReset_",value:function e(t){this.log_("Reset packet received.  New host: "+t);this.repoInfo_.host=t;if(this.state_===1){this.close()}else{this.closeConnections_();this.start_()}}},{key:"onConnectionEstablished_",value:function e(t,n){var r=this;this.log_("Realtime connection established.");this.conn_=t;this.state_=1;if(this.onReady_){this.onReady_(n,this.sessionId);this.onReady_=null}if(this.primaryResponsesRequired_===0){this.log_("Primary connection is healthy.");this.isHealthy_=true}else{Ue(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(Ft))}}},{key:"sendPingOnPrimaryIfNecessary_",value:function e(){if(!this.isHealthy_&&this.state_===1){this.log_("sending ping on primary.");this.sendData_({t:"c",d:{t:Gt,d:{}}})}}},{key:"onSecondaryConnectionLost_",value:function e(){var t=this.secondaryConn_;this.secondaryConn_=null;if(this.tx_===t||this.rx_===t){this.close()}}},{key:"onConnectionLost_",value:function e(t){this.conn_=null;if(!t&&this.state_===0){this.log_("Realtime connection failed.");if(this.repoInfo_.isCacheableHost()){fe.remove("host:"+this.repoInfo_.host);this.repoInfo_.internalHost=this.repoInfo_.host}}else if(this.state_===1){this.log_("Realtime connection lost.")}this.close()}},{key:"onConnectionShutdown_",value:function e(t){this.log_("Connection shutdown command received. Shutting down...");if(this.onKill_){this.onKill_(t);this.onKill_=null}this.onDisconnect_=null;this.close()}},{key:"sendData_",value:function e(t){if(this.state_!==1){throw"Connection is not connected"}else{this.tx_.send(t)}}},{key:"close",value:function e(){if(this.state_!==2){this.log_("Closing realtime connection.");this.state_=2;this.closeConnections_();if(this.onDisconnect_){this.onDisconnect_();this.onDisconnect_=null}}}},{key:"closeConnections_",value:function e(){this.log_("Shutting down all connections");if(this.conn_){this.conn_.close();this.conn_=null}if(this.secondaryConn_){this.secondaryConn_.close();this.secondaryConn_=null}if(this.healthyTimeout_){clearTimeout(this.healthyTimeout_);this.healthyTimeout_=null}}}]);return c}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=function(){function e(){f(this,e)}d(e,[{key:"put",value:function e(t,n,r,i){}},{key:"merge",value:function e(t,n,r,i){}},{key:"refreshAuthToken",value:function e(t){}},{key:"refreshAppCheckToken",value:function e(t){}},{key:"onDisconnectPut",value:function e(t,n,r){}},{key:"onDisconnectMerge",value:function e(t,n,r){}},{key:"onDisconnectCancel",value:function e(t,n){}},{key:"reportStats",value:function e(t){}}]);return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt=function(){function t(e){f(this,t);this.allowedEvents_=e;this.listeners_={};Object(g["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}d(t,[{key:"trigger",value:function e(t){if(Array.isArray(this.listeners_[t])){var n=X(this.listeners_[t]);for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++){i[a-1]=arguments[a]}for(var o=0;o<n.length;o++){n[o].callback.apply(n[o].context,i)}}}},{key:"on",value:function e(t,n,r){this.validateEventType_(t);this.listeners_[t]=this.listeners_[t]||[];this.listeners_[t].push({callback:n,context:r});var i=this.getInitialEvent(t);if(i){n.apply(r,i)}}},{key:"off",value:function e(t,n,r){this.validateEventType_(t);var i=this.listeners_[t]||[];for(var a=0;a<i.length;a++){if(i[a].callback===n&&(!r||r===i[a].context)){i.splice(a,1);return}}}},{key:"validateEventType_",value:function e(t){Object(g["e"])(this.allowedEvents_.find(function(e){return e===t}),"Unknown event: "+t)}}]);return t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt=function(e){o(n,e);var t=s(n);function n(){var e;f(this,n);e=t.call(this,["online"]);e.online_=true;if(typeof window!=="undefined"&&typeof window.addEventListener!=="undefined"&&!Object(g["v"])()){window.addEventListener("online",function(){if(!e.online_){e.online_=true;e.trigger("online",true)}},false);window.addEventListener("offline",function(){if(e.online_){e.online_=false;e.trigger("online",false)}},false)}return e}d(n,[{key:"getInitialEvent",value:function e(t){Object(g["e"])(t==="online","Unknown event type: "+t);return[this.online_]}},{key:"currentlyOnline",value:function e(){return this.online_}}],[{key:"getInstance",value:function e(){return new n}}]);return n}(Jt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt=32;var en=768;var _=function(){function i(e,t){f(this,i);if(t===void 0){this.pieces_=e.split("/");var n=0;for(var r=0;r<this.pieces_.length;r++){if(this.pieces_[r].length>0){this.pieces_[n]=this.pieces_[r];n++}}this.pieces_.length=n;this.pieceNum_=0}else{this.pieces_=e;this.pieceNum_=t}}d(i,[{key:"toString",value:function e(){var t="";for(var n=this.pieceNum_;n<this.pieces_.length;n++){if(this.pieces_[n]!==""){t+="/"+this.pieces_[n]}}return t||"/"}}]);return i}();function y(){return new _("")}function w(e){if(e.pieceNum_>=e.pieces_.length){return null}return e.pieces_[e.pieceNum_]}function tn(e){return e.pieces_.length-e.pieceNum_}function b(e){var t=e.pieceNum_;if(t<e.pieces_.length){t++}return new _(e.pieces_,t)}function nn(e){if(e.pieceNum_<e.pieces_.length){return e.pieces_[e.pieces_.length-1]}return null}function rn(e){var t="";for(var n=e.pieceNum_;n<e.pieces_.length;n++){if(e.pieces_[n]!==""){t+="/"+encodeURIComponent(String(e.pieces_[n]))}}return t||"/"}function an(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function on(e){if(e.pieceNum_>=e.pieces_.length){return null}var t=[];for(var n=e.pieceNum_;n<e.pieces_.length-1;n++){t.push(e.pieces_[n])}return new _(t,0)}function C(e,t){var n=[];for(var r=e.pieceNum_;r<e.pieces_.length;r++){n.push(e.pieces_[r])}if(t instanceof _){for(var i=t.pieceNum_;i<t.pieces_.length;i++){n.push(t.pieces_[i])}}else{var a=t.split("/");for(var o=0;o<a.length;o++){if(a[o].length>0){n.push(a[o])}}}return new _(n,0)}function T(e){return e.pieceNum_>=e.pieces_.length}function I(e,t){var n=w(e),r=w(t);if(n===null){return t}else if(n===r){return I(b(e),b(t))}else{throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within "+"outerPath ("+e+")")}}function sn(e,t){var n=an(e,0);var r=an(t,0);for(var i=0;i<n.length&&i<r.length;i++){var a=Ee(n[i],r[i]);if(a!==0){return a}}if(n.length===r.length){return 0}return n.length<r.length?-1:1}function un(e,t){if(tn(e)!==tn(t)){return false}for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++){if(e.pieces_[n]!==t.pieces_[r]){return false}}return true}function S(e,t){var n=e.pieceNum_;var r=t.pieceNum_;if(tn(e)>tn(t)){return false}while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r]){return false}++n;++r}return true}var ln=d(function e(t,n){f(this,e);this.errorPrefix_=n;this.parts_=an(t,0);this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++){this.byteLength_+=Object(g["D"])(this.parts_[r])}fn(this)});function cn(e,t){if(e.parts_.length>0){e.byteLength_+=1}e.parts_.push(t);e.byteLength_+=Object(g["D"])(t);fn(e)}function hn(e){var t=e.parts_.pop();e.byteLength_-=Object(g["D"])(t);if(e.parts_.length>0){e.byteLength_-=1}}function fn(e){if(e.byteLength_>en){throw new Error(e.errorPrefix_+"has a key path longer than "+en+" bytes ("+e.byteLength_+").")}if(e.parts_.length>Zt){throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zt+") or object contains a cycle "+dn(e))}}function dn(e){if(e.parts_.length===0){return""}return"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vn=function(e){o(i,e);var r=s(i);function i(){var t;f(this,i);t=r.call(this,["visible"]);var n;var e;if(typeof document!=="undefined"&&typeof document.addEventListener!=="undefined"){if(typeof document["hidden"]!=="undefined"){e="visibilitychange";n="hidden"}else if(typeof document["mozHidden"]!=="undefined"){e="mozvisibilitychange";n="mozHidden"}else if(typeof document["msHidden"]!=="undefined"){e="msvisibilitychange";n="msHidden"}else if(typeof document["webkitHidden"]!=="undefined"){e="webkitvisibilitychange";n="webkitHidden"}}t.visible_=true;if(e){document.addEventListener(e,function(){var e=!document[n];if(e!==t.visible_){t.visible_=e;t.trigger("visible",e)}},false)}return t}d(i,[{key:"getInitialEvent",value:function e(t){Object(g["e"])(t==="visible","Unknown event type: "+t);return[this.visible_]}}],[{key:"getInstance",value:function e(){return new i}}]);return i}(Jt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn=1e3;var _n=60*5*1e3;var yn=3*1e3;var mn=30*1e3;var gn=1.3;var kn=3e4;var wn="server_kill";var bn=3;var Cn=function(e){o(y,e);var l=s(y);function y(e,t,n,r,i,a,o,s){var u;f(this,y);u=l.call(this);u.repoInfo_=e;u.applicationId_=t;u.onDataUpdate_=n;u.onConnectStatus_=r;u.onServerInfoUpdate_=i;u.authTokenProvider_=a;u.appCheckTokenProvider_=o;u.authOverride_=s;u.id=y.nextPersistentConnectionId_++;u.log_=we("p:"+u.id+":");u.interruptReasons_={};u.listens=new Map;u.outstandingPuts_=[];u.outstandingGets_=[];u.outstandingPutCount_=0;u.outstandingGetCount_=0;u.onDisconnectRequestQueue_=[];u.connected_=false;u.reconnectDelay_=pn;u.maxReconnectDelay_=_n;u.securityDebugCallback_=null;u.lastSessionId=null;u.establishConnectionTimer_=null;u.visible_=false;u.requestCBHash_={};u.requestNumber_=0;u.realtime_=null;u.authToken_=null;u.appCheckToken_=null;u.forceTokenRefresh_=false;u.invalidAuthTokenCount_=0;u.invalidAppCheckTokenCount_=0;u.firstConnection_=true;u.lastConnectionAttemptTime_=null;u.lastConnectionEstablishedTime_=null;if(s&&!Object(g["w"])()){throw new Error("Auth override specified in options, but not supported on non Node.js platforms")}vn.getInstance().on("visible",u.onVisible_,Q(u));if(e.host.indexOf("fblocal")===-1){Xt.getInstance().on("online",u.onOnline_,Q(u))}return u}d(y,[{key:"sendRequest",value:function e(t,n,r){var i=++this.requestNumber_;var a={r:i,a:t,b:n};this.log_(Object(g["F"])(a));Object(g["e"])(this.connected_,"sendRequest call when we're not connected not allowed.");this.realtime_.sendRequest(a);if(r){this.requestCBHash_[i]=r}}},{key:"get",value:function e(t){var n=this;this.initConnection_();var r=new g["a"];var i={p:t._path.toString(),q:t._queryObject};var a={action:"g",request:i,onComplete:function e(t){var n=t["d"];if(t["s"]==="ok"){r.resolve(n)}else{r.reject(n)}}};this.outstandingGets_.push(a);this.outstandingGetCount_++;var o=this.outstandingGets_.length-1;if(!this.connected_){setTimeout(function(){var e=n.outstandingGets_[o];if(e===undefined||a!==e){return}delete n.outstandingGets_[o];n.outstandingGetCount_--;if(n.outstandingGetCount_===0){n.outstandingGets_=[]}n.log_("get "+o+" timed out on connection");r.reject(new Error("Client is offline."))},yn)}if(this.connected_){this.sendGet_(o)}return r.promise}},{key:"listen",value:function e(t,n,r,i){this.initConnection_();var a=t._queryIdentifier;var o=t._path.toString();this.log_("Listen called for "+o+" "+a);if(!this.listens.has(o)){this.listens.set(o,new Map)}Object(g["e"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query");Object(g["e"])(!this.listens.get(o).has(a),"listen() called twice for same path/queryId.");var s={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(a,s);if(this.connected_){this.sendListen_(s)}}},{key:"sendGet_",value:function e(t){var n=this;var r=this.outstandingGets_[t];this.sendRequest("g",r.request,function(e){delete n.outstandingGets_[t];n.outstandingGetCount_--;if(n.outstandingGetCount_===0){n.outstandingGets_=[]}if(r.onComplete){r.onComplete(e)}})}},{key:"sendListen_",value:function e(i){var a=this;var o=i.query;var s=o._path.toString();var u=o._queryIdentifier;this.log_("Listen on "+s+" for "+u);var t={p:s};var n="q";if(i.tag){t["q"]=o._queryObject;t["t"]=i.tag}t["h"]=i.hashFn();this.sendRequest(n,t,function(e){var t=e["d"];var n=e["s"];y.warnOnListenWarnings_(t,o);var r=a.listens.get(s)&&a.listens.get(s).get(u);if(r===i){a.log_("listen response",e);if(n!=="ok"){a.removeListen_(s,u)}if(i.onComplete){i.onComplete(n,t)}}})}},{key:"refreshAuthToken",value:function e(t){this.authToken_=t;this.log_("Auth token refreshed");if(this.authToken_){this.tryAuth()}else{if(this.connected_){this.sendRequest("unauth",{},function(){})}}this.reduceReconnectDelayIfAdminCredential_(t)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function e(t){var n=t&&t.length===40;if(n||Object(g["r"])(t)){this.log_("Admin auth credential detected.  Reducing max reconnect time.");this.maxReconnectDelay_=mn}}},{key:"refreshAppCheckToken",value:function e(t){this.appCheckToken_=t;this.log_("App check token refreshed");if(this.appCheckToken_){this.tryAppCheck()}else{if(this.connected_){this.sendRequest("unappeck",{},function(){})}}}},{key:"tryAuth",value:function e(){var r=this;if(this.connected_&&this.authToken_){var i=this.authToken_;var t=Object(g["y"])(i)?"auth":"gauth";var n={cred:i};if(this.authOverride_===null){n["noauth"]=true}else if(E(this.authOverride_)==="object"){n["authvar"]=this.authOverride_}this.sendRequest(t,n,function(e){var t=e["s"];var n=e["d"]||"error";if(r.authToken_===i){if(t==="ok"){r.invalidAuthTokenCount_=0}else{r.onAuthRevoked_(t,n)}}})}}},{key:"tryAppCheck",value:function e(){var r=this;if(this.connected_&&this.appCheckToken_){this.sendRequest("appcheck",{token:this.appCheckToken_},function(e){var t=e["s"];var n=e["d"]||"error";if(t==="ok"){r.invalidAppCheckTokenCount_=0}else{r.onAppCheckRevoked_(t,n)}})}}},{key:"unlisten",value:function e(t,n){var r=t._path.toString();var i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i);Object(g["e"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var a=this.removeListen_(r,i);if(a&&this.connected_){this.sendUnlisten_(r,i,t._queryObject,n)}}},{key:"sendUnlisten_",value:function e(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);var a={p:t};var o="n";if(i){a["q"]=r;a["t"]=i}this.sendRequest(o,a)}},{key:"onDisconnectPut",value:function e(t,n,r){this.initConnection_();if(this.connected_){this.sendOnDisconnect_("o",t,n,r)}else{this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}}},{key:"onDisconnectMerge",value:function e(t,n,r){this.initConnection_();if(this.connected_){this.sendOnDisconnect_("om",t,n,r)}else{this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}}},{key:"onDisconnectCancel",value:function e(t,n){this.initConnection_();if(this.connected_){this.sendOnDisconnect_("oc",t,null,n)}else{this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}}},{key:"sendOnDisconnect_",value:function e(t,n,r,i){var a={p:n,d:r};this.log_("onDisconnect "+t,a);this.sendRequest(t,a,function(e){if(i){setTimeout(function(){i(e["s"],e["d"])},Math.floor(0))}})}},{key:"put",value:function e(t,n,r,i){this.putInternal("p",t,n,r,i)}},{key:"merge",value:function e(t,n,r,i){this.putInternal("m",t,n,r,i)}},{key:"putInternal",value:function e(t,n,r,i,a){this.initConnection_();var o={p:n,d:r};if(a!==undefined){o["h"]=a}this.outstandingPuts_.push({action:t,request:o,onComplete:i});this.outstandingPutCount_++;var s=this.outstandingPuts_.length-1;if(this.connected_){this.sendPut_(s)}else{this.log_("Buffering put: "+n)}}},{key:"sendPut_",value:function e(t){var n=this;var r=this.outstandingPuts_[t].action;var i=this.outstandingPuts_[t].request;var a=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_;this.sendRequest(r,i,function(e){n.log_(r+" response",e);delete n.outstandingPuts_[t];n.outstandingPutCount_--;if(n.outstandingPutCount_===0){n.outstandingPuts_=[]}if(a){a(e["s"],e["d"])}})}},{key:"reportStats",value:function e(t){var r=this;if(this.connected_){var n={c:t};this.log_("reportStats",n);this.sendRequest("s",n,function(e){var t=e["s"];if(t!=="ok"){var n=e["d"];r.log_("reportStats","Error sending stats: "+n)}})}}},{key:"onDataMessage_",value:function e(t){if("r"in t){this.log_("from server: "+Object(g["F"])(t));var n=t["r"];var r=this.requestCBHash_[n];if(r){delete this.requestCBHash_[n];r(t["b"])}}else if("error"in t){throw"A server-side error has occurred: "+t["error"]}else if("a"in t){this.onDataPush_(t["a"],t["b"])}}},{key:"onDataPush_",value:function e(t,n){this.log_("handleServerMessage",t,n);if(t==="d"){this.onDataUpdate_(n["p"],n["d"],false,n["t"])}else if(t==="m"){this.onDataUpdate_(n["p"],n["d"],true,n["t"])}else if(t==="c"){this.onListenRevoked_(n["p"],n["q"])}else if(t==="ac"){this.onAuthRevoked_(n["s"],n["d"])}else if(t==="apc"){this.onAppCheckRevoked_(n["s"],n["d"])}else if(t==="sd"){this.onSecurityDebugPacket_(n)}else{be("Unrecognized action received from server: "+Object(g["F"])(t)+"\nAre you using the latest client?")}}},{key:"onReady_",value:function e(t,n){this.log_("connection ready");this.connected_=true;this.lastConnectionEstablishedTime_=(new Date).getTime();this.handleTimestamp_(t);this.lastSessionId=n;if(this.firstConnection_){this.sendConnectStats_()}this.restoreState_();this.firstConnection_=false;this.onConnectStatus_(true)}},{key:"scheduleConnect_",value:function e(t){var n=this;Object(g["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?");if(this.establishConnectionTimer_){clearTimeout(this.establishConnectionTimer_)}this.establishConnectionTimer_=setTimeout(function(){n.establishConnectionTimer_=null;n.establishConnection_()},Math.floor(t))}},{key:"initConnection_",value:function e(){if(!this.realtime_&&this.firstConnection_){this.scheduleConnect_(0)}}},{key:"onVisible_",value:function e(t){if(t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_){this.log_("Window became visible.  Reducing delay.");this.reconnectDelay_=pn;if(!this.realtime_){this.scheduleConnect_(0)}}this.visible_=t}},{key:"onOnline_",value:function e(t){if(t){this.log_("Browser went online.");this.reconnectDelay_=pn;if(!this.realtime_){this.scheduleConnect_(0)}}else{this.log_("Browser went offline.  Killing connection.");if(this.realtime_){this.realtime_.close()}}}},{key:"onRealtimeDisconnect_",value:function e(){this.log_("data client disconnected");this.connected_=false;this.realtime_=null;this.cancelSentTransactions_();this.requestCBHash_={};if(this.shouldReconnect_()){if(!this.visible_){this.log_("Window isn't visible.  Delaying reconnect.");this.reconnectDelay_=this.maxReconnectDelay_;this.lastConnectionAttemptTime_=(new Date).getTime()}else if(this.lastConnectionEstablishedTime_){var t=(new Date).getTime()-this.lastConnectionEstablishedTime_;if(t>kn){this.reconnectDelay_=pn}this.lastConnectionEstablishedTime_=null}var n=(new Date).getTime()-this.lastConnectionAttemptTime_;var r=Math.max(0,this.reconnectDelay_-n);r=Math.random()*r;this.log_("Trying to reconnect in "+r+"ms");this.scheduleConnect_(r);this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gn)}this.onConnectStatus_(false)}},{key:"establishConnection_",value:function(){var e=Y(U().mark(function e(){var n=this;var r,i,a,o,s,u,l,c,h,f,d,v,p,_;return U().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:if(!this.shouldReconnect_()){t.next=30;break}this.log_("Making a connection attempt");this.lastConnectionAttemptTime_=(new Date).getTime();this.lastConnectionEstablishedTime_=null;r=this.onDataMessage_.bind(this);i=this.onReady_.bind(this);a=this.onRealtimeDisconnect_.bind(this);o=this.id+":"+y.nextConnectionId_++;s=this.lastSessionId;u=false;l=null;c=function e(){if(l){l.close()}else{u=true;a()}};h=function e(t){Object(g["e"])(l,"sendRequest call when we're not connected not allowed.");l.sendRequest(t)};this.realtime_={close:c,sendRequest:h};f=this.forceTokenRefresh_;this.forceTokenRefresh_=false;t.prev=16;t.next=19;return Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);case 19:d=t.sent;v=B(d,2);p=v[0];_=v[1];if(!u){m("getToken() completed. Creating connection.");this.authToken_=p&&p.accessToken;this.appCheckToken_=_&&_.token;l=new Qt(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,r,i,a,function(e){k(e+" ("+n.repoInfo_.toString()+")");n.interrupt(wn)},s)}else{m("getToken() completed but was canceled")}t.next=30;break;case 26:t.prev=26;t.t0=t["catch"](16);this.log_("Failed to get token: "+t.t0);if(!u){if(this.repoInfo_.nodeAdmin){k(t.t0)}c()}case 30:case"end":return t.stop()}}},e,this,[[16,26]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"interrupt",value:function e(t){m("Interrupting connection for reason: "+t);this.interruptReasons_[t]=true;if(this.realtime_){this.realtime_.close()}else{if(this.establishConnectionTimer_){clearTimeout(this.establishConnectionTimer_);this.establishConnectionTimer_=null}if(this.connected_){this.onRealtimeDisconnect_()}}}},{key:"resume",value:function e(t){m("Resuming connection for reason: "+t);delete this.interruptReasons_[t];if(Object(g["t"])(this.interruptReasons_)){this.reconnectDelay_=pn;if(!this.realtime_){this.scheduleConnect_(0)}}}},{key:"handleTimestamp_",value:function e(t){var n=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}},{key:"cancelSentTransactions_",value:function e(){for(var t=0;t<this.outstandingPuts_.length;t++){var n=this.outstandingPuts_[t];if(n&&"h"in n.request&&n.queued){if(n.onComplete){n.onComplete("disconnect")}delete this.outstandingPuts_[t];this.outstandingPutCount_--}}if(this.outstandingPutCount_===0){this.outstandingPuts_=[]}}},{key:"onListenRevoked_",value:function e(t,n){var r;if(!n){r="default"}else{r=n.map(function(e){return Oe(e)}).join("$")}var i=this.removeListen_(t,r);if(i&&i.onComplete){i.onComplete("permission_denied")}}},{key:"removeListen_",value:function e(t,n){var r=new _(t).toString();var i;if(this.listens.has(r)){var a=this.listens.get(r);i=a.get(n);a["delete"](n);if(a.size===0){this.listens["delete"](r)}}else{i=undefined}return i}},{key:"onAuthRevoked_",value:function e(t,n){m("Auth token revoked: "+t+"/"+n);this.authToken_=null;this.forceTokenRefresh_=true;this.realtime_.close();if(t==="invalid_token"||t==="permission_denied"){this.invalidAuthTokenCount_++;if(this.invalidAuthTokenCount_>=bn){this.reconnectDelay_=mn;this.authTokenProvider_.notifyForInvalidToken()}}}},{key:"onAppCheckRevoked_",value:function e(t,n){m("App check token revoked: "+t+"/"+n);this.appCheckToken_=null;this.forceTokenRefresh_=true;if(t==="invalid_token"||t==="permission_denied"){this.invalidAppCheckTokenCount_++;if(this.invalidAppCheckTokenCount_>=bn){this.appCheckTokenProvider_.notifyForInvalidToken()}}}},{key:"onSecurityDebugPacket_",value:function e(t){if(this.securityDebugCallback_){this.securityDebugCallback_(t)}else{if("msg"in t){console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}}}},{key:"restoreState_",value:function e(){this.tryAuth();this.tryAppCheck();var t=v(this.listens.values()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;var i=v(r.values()),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;this.sendListen_(o)}}catch(e){i.e(e)}finally{i.f()}}}catch(e){t.e(e)}finally{t.f()}for(var s=0;s<this.outstandingPuts_.length;s++){if(this.outstandingPuts_[s]){this.sendPut_(s)}}while(this.onDisconnectRequestQueue_.length){var u=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(u.action,u.pathString,u.data,u.onComplete)}for(var l=0;l<this.outstandingGets_.length;l++){if(this.outstandingGets_[l]){this.sendGet_(l)}}}},{key:"sendConnectStats_",value:function e(){var t={};var n="js";if(Object(g["w"])()){if(this.repoInfo_.nodeAdmin){n="admin_node"}else{n="node"}}t["sdk."+n+"."+se.replace(/\./g,"-")]=1;if(Object(g["v"])()){t["framework.cordova"]=1}else if(Object(g["x"])()){t["framework.reactnative"]=1}this.reportStats(t)}},{key:"shouldReconnect_",value:function e(){var t=Xt.getInstance().currentlyOnline();return Object(g["t"])(this.interruptReasons_)&&t}}],[{key:"warnOnListenWarnings_",value:function e(t,n){if(t&&E(t)==="object"&&Object(g["j"])(t,"w")){var r=Object(g["C"])(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){var i='".indexOn": "'+n._queryParams.getIndex().toString()+'"';var a=n._path.toString();k("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(i," at ")+"".concat(a," to your security rules for better performance."))}}}}]);return y}($t);Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=function(){function r(e,t){f(this,r);this.name=e;this.node=t}d(r,null,[{key:"Wrap",value:function e(t,n){return new r(t,n)}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn=function(){function e(){f(this,e)}d(e,[{key:"getCompare",value:function e(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function e(t,n){var r=new P(u,t);var i=new P(u,n);return this.compare(r,i)!==0}},{key:"minPost",value:function e(){return P.MIN}}]);return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In;var En=function(e){o(n,e);var t=s(n);function n(){f(this,n);return t.apply(this,arguments)}d(n,[{key:"compare",value:function e(t,n){return Ee(t.name,n.name)}},{key:"isDefinedOn",value:function e(t){throw Object(g["f"])("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function e(t,n){return false}},{key:"minPost",value:function e(){return P.MIN}},{key:"maxPost",value:function e(){return new P(l,In)}},{key:"makePost",value:function e(t,n){Object(g["e"])(typeof t==="string","KeyIndex indexValue must always be a string.");return new P(t,In)}},{key:"toString",value:function e(){return".key"}}],[{key:"__EMPTY_NODE",get:function e(){return In},set:function e(t){In=t}}]);return n}(Tn);var O=new En;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn=function(){function o(e,t,n,r){var i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;f(this,o);this.isReverse_=r;this.resultGenerator_=i;this.nodeStack_=[];var a=1;while(!e.isEmpty()){e=e;a=t?n(e.key,t):1;if(r){a*=-1}if(a<0){if(this.isReverse_){e=e.left}else{e=e.right}}else if(a===0){this.nodeStack_.push(e);break}else{this.nodeStack_.push(e);if(this.isReverse_){e=e.right}else{e=e.left}}}}d(o,[{key:"getNext",value:function e(){if(this.nodeStack_.length===0){return null}var t=this.nodeStack_.pop();var n;if(this.resultGenerator_){n=this.resultGenerator_(t.key,t.value)}else{n={key:t.key,value:t.value}}if(this.isReverse_){t=t.left;while(!t.isEmpty()){this.nodeStack_.push(t);t=t.right}}else{t=t.right;while(!t.isEmpty()){this.nodeStack_.push(t);t=t.left}}return n}},{key:"hasNext",value:function e(){return this.nodeStack_.length>0}},{key:"peek",value:function e(){if(this.nodeStack_.length===0){return null}var t=this.nodeStack_[this.nodeStack_.length-1];if(this.resultGenerator_){return this.resultGenerator_(t.key,t.value)}else{return{key:t.key,value:t.value}}}}]);return o}();var N=function(){function o(e,t,n,r,i){f(this,o);this.key=e;this.value=t;this.color=n!=null?n:o.RED;this.left=r!=null?r:x.EMPTY_NODE;this.right=i!=null?i:x.EMPTY_NODE}d(o,[{key:"copy",value:function e(t,n,r,i,a){return new o(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,a!=null?a:this.right)}},{key:"count",value:function e(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function e(){return false}},{key:"inorderTraversal",value:function e(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}},{key:"reverseTraversal",value:function e(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}},{key:"min_",value:function e(){if(this.left.isEmpty()){return this}else{return this.left.min_()}}},{key:"minKey",value:function e(){return this.min_().key}},{key:"maxKey",value:function e(){if(this.right.isEmpty()){return this.key}else{return this.right.maxKey()}}},{key:"insert",value:function e(t,n,r){var i=this;var a=r(t,i.key);if(a<0){i=i.copy(null,null,null,i.left.insert(t,n,r),null)}else if(a===0){i=i.copy(null,n,null,null,null)}else{i=i.copy(null,null,null,null,i.right.insert(t,n,r))}return i.fixUp_()}},{key:"removeMin_",value:function e(){if(this.left.isEmpty()){return x.EMPTY_NODE}var t=this;if(!t.left.isRed_()&&!t.left.left.isRed_()){t=t.moveRedLeft_()}t=t.copy(null,null,null,t.left.removeMin_(),null);return t.fixUp_()}},{key:"remove",value:function e(t,n){var r,i;r=this;if(n(t,r.key)<0){if(!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()){r=r.moveRedLeft_()}r=r.copy(null,null,null,r.left.remove(t,n),null)}else{if(r.left.isRed_()){r=r.rotateRight_()}if(!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()){r=r.moveRedRight_()}if(n(t,r.key)===0){if(r.right.isEmpty()){return x.EMPTY_NODE}else{i=r.right.min_();r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}},{key:"isRed_",value:function e(){return this.color}},{key:"fixUp_",value:function e(){var t=this;if(t.right.isRed_()&&!t.left.isRed_()){t=t.rotateLeft_()}if(t.left.isRed_()&&t.left.left.isRed_()){t=t.rotateRight_()}if(t.left.isRed_()&&t.right.isRed_()){t=t.colorFlip_()}return t}},{key:"moveRedLeft_",value:function e(){var t=this.colorFlip_();if(t.right.left.isRed_()){t=t.copy(null,null,null,null,t.right.rotateRight_());t=t.rotateLeft_();t=t.colorFlip_()}return t}},{key:"moveRedRight_",value:function e(){var t=this.colorFlip_();if(t.left.left.isRed_()){t=t.rotateRight_();t=t.colorFlip_()}return t}},{key:"rotateLeft_",value:function e(){var t=this.copy(null,null,o.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight_",value:function e(){var t=this.copy(null,null,o.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip_",value:function e(){var t=this.left.copy(null,null,!this.left.color,null,null);var n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}},{key:"checkMaxDepth_",value:function e(){var t=this.check_();return Math.pow(2,t)<=this.count()+1}},{key:"check_",value:function e(){if(this.isRed_()&&this.left.isRed_()){throw new Error("Red node has red child("+this.key+","+this.value+")")}if(this.right.isRed_()){throw new Error("Right child of ("+this.key+","+this.value+") is red")}var t=this.left.check_();if(t!==this.right.check_()){throw new Error("Black depths differ")}else{return t+(this.isRed_()?0:1)}}}]);return o}();N.RED=true;N.BLACK=false;var Pn=function(){function e(){f(this,e)}d(e,[{key:"copy",value:function e(t,n,r,i,a){return this}},{key:"insert",value:function e(t,n,r){return new N(t,n,null)}},{key:"remove",value:function e(t,n){return this}},{key:"count",value:function e(){return 0}},{key:"isEmpty",value:function e(){return true}},{key:"inorderTraversal",value:function e(t){return false}},{key:"reverseTraversal",value:function e(t){return false}},{key:"minKey",value:function e(){return null}},{key:"maxKey",value:function e(){return null}},{key:"check_",value:function e(){return 0}},{key:"isRed_",value:function e(){return false}}]);return e}();var x=function(){function r(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:r.EMPTY_NODE;f(this,r);this.comparator_=e;this.root_=t}d(r,[{key:"insert",value:function e(t,n){return new r(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,N.BLACK,null,null))}},{key:"remove",value:function e(t){return new r(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,N.BLACK,null,null))}},{key:"get",value:function e(t){var n;var r=this.root_;while(!r.isEmpty()){n=this.comparator_(t,r.key);if(n===0){return r.value}else if(n<0){r=r.left}else if(n>0){r=r.right}}return null}},{key:"getPredecessorKey",value:function e(t){var n,r=this.root_,i=null;while(!r.isEmpty()){n=this.comparator_(t,r.key);if(n===0){if(!r.left.isEmpty()){r=r.left;while(!r.right.isEmpty()){r=r.right}return r.key}else if(i){return i.key}else{return null}}else if(n<0){r=r.left}else if(n>0){i=r;r=r.right}}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function e(){return this.root_.isEmpty()}},{key:"count",value:function e(){return this.root_.count()}},{key:"minKey",value:function e(){return this.root_.minKey()}},{key:"maxKey",value:function e(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function e(t){return this.root_.inorderTraversal(t)}},{key:"reverseTraversal",value:function e(t){return this.root_.reverseTraversal(t)}},{key:"getIterator",value:function e(t){return new Sn(this.root_,null,this.comparator_,false,t)}},{key:"getIteratorFrom",value:function e(t,n){return new Sn(this.root_,t,this.comparator_,false,n)}},{key:"getReverseIteratorFrom",value:function e(t,n){return new Sn(this.root_,t,this.comparator_,true,n)}},{key:"getReverseIterator",value:function e(t){return new Sn(this.root_,null,this.comparator_,true,t)}}]);return r}();x.EMPTY_NODE=new Pn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,t){return Ee(e.name,t.name)}function Nn(e,t){return Ee(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn;function Rn(e){xn=e}var jn=function e(t){if(typeof t==="number"){return"number:"+xe(t)}else{return"string:"+t}};var Dn=function e(t){if(t.isLeafNode()){var n=t.val();Object(g["e"])(typeof n==="string"||typeof n==="number"||E(n)==="object"&&Object(g["j"])(n,".sv"),"Priority must be a string or number.")}else{Object(g["e"])(t===xn||t.isEmpty(),"priority of unexpected type.")}Object(g["e"])(t===xn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;var Fn=function(){function o(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:o.__childrenNodeConstructor.EMPTY_NODE;f(this,o);this.value_=e;this.priorityNode_=t;this.lazyHash_=null;Object(g["e"])(this.value_!==undefined&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value.");Dn(this.priorityNode_)}d(o,[{key:"isLeafNode",value:function e(){return true}},{key:"getPriority",value:function e(){return this.priorityNode_}},{key:"updatePriority",value:function e(t){return new o(this.value_,t)}},{key:"getImmediateChild",value:function e(t){if(t===".priority"){return this.priorityNode_}else{return o.__childrenNodeConstructor.EMPTY_NODE}}},{key:"getChild",value:function e(t){if(T(t)){return this}else if(w(t)===".priority"){return this.priorityNode_}else{return o.__childrenNodeConstructor.EMPTY_NODE}}},{key:"hasChild",value:function e(){return false}},{key:"getPredecessorChildName",value:function e(t,n){return null}},{key:"updateImmediateChild",value:function e(t,n){if(t===".priority"){return this.updatePriority(n)}else if(n.isEmpty()&&t!==".priority"){return this}else{return o.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}}},{key:"updateChild",value:function e(t,n){var r=w(t);if(r===null){return n}else if(n.isEmpty()&&r!==".priority"){return this}else{Object(g["e"])(r!==".priority"||tn(t)===1,".priority must be the last token in a path");return this.updateImmediateChild(r,o.__childrenNodeConstructor.EMPTY_NODE.updateChild(b(t),n))}}},{key:"isEmpty",value:function e(){return false}},{key:"numChildren",value:function e(){return 0}},{key:"forEachChild",value:function e(t,n){return false}},{key:"val",value:function e(t){if(t&&!this.getPriority().isEmpty()){return{".value":this.getValue(),".priority":this.getPriority().val()}}else{return this.getValue()}}},{key:"hash",value:function e(){if(this.lazyHash_===null){var t="";if(!this.priorityNode_.isEmpty()){t+="priority:"+jn(this.priorityNode_.val())+":"}var n=E(this.value_);t+=n+":";if(n==="number"){t+=xe(this.value_)}else{t+=this.value_}this.lazyHash_=_e(t)}return this.lazyHash_}},{key:"getValue",value:function e(){return this.value_}},{key:"compareTo",value:function e(t){if(t===o.__childrenNodeConstructor.EMPTY_NODE){return 1}else if(t instanceof o.__childrenNodeConstructor){return-1}else{Object(g["e"])(t.isLeafNode(),"Unknown node type");return this.compareToLeafNode_(t)}}},{key:"compareToLeafNode_",value:function e(t){var n=E(t.value_);var r=E(this.value_);var i=o.VALUE_TYPE_ORDER.indexOf(n);var a=o.VALUE_TYPE_ORDER.indexOf(r);Object(g["e"])(i>=0,"Unknown leaf type: "+n);Object(g["e"])(a>=0,"Unknown leaf type: "+r);if(i===a){if(r==="object"){return 0}else{if(this.value_<t.value_){return-1}else if(this.value_===t.value_){return 0}else{return 1}}}else{return a-i}}},{key:"withIndex",value:function e(){return this}},{key:"isIndexed",value:function e(){return true}},{key:"equals",value:function e(t){if(t===this){return true}else if(t.isLeafNode()){var n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else{return false}}}],[{key:"__childrenNodeConstructor",get:function e(){return An},set:function e(t){An=t}}]);return o}();Fn.VALUE_TYPE_ORDER=["object","boolean","number","string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn;var Ln;function Mn(e){qn=e}function Wn(e){Ln=e}var Un=function(e){o(n,e);var t=s(n);function n(){f(this,n);return t.apply(this,arguments)}d(n,[{key:"compare",value:function e(t,n){var r=t.node.getPriority();var i=n.node.getPriority();var a=r.compareTo(i);if(a===0){return Ee(t.name,n.name)}else{return a}}},{key:"isDefinedOn",value:function e(t){return!t.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function e(t,n){return!t.getPriority().equals(n.getPriority())}},{key:"minPost",value:function e(){return P.MIN}},{key:"maxPost",value:function e(){return new P(l,new Fn("[PRIORITY-POST]",Ln))}},{key:"makePost",value:function e(t,n){var r=qn(t);return new P(n,new Fn("[PRIORITY-POST]",r))}},{key:"toString",value:function e(){return".priority"}}]);return n}(Tn);var c=new Un;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn=Math.log(2);var zn=function(){function i(e){f(this,i);var t=function e(t){return parseInt(Math.log(t)/Bn,10)};var n=function e(t){return parseInt(Array(t+1).join("1"),2)};this.count=t(e+1);this.current_=this.count-1;var r=n(this.count);this.bits_=e+1&r}d(i,[{key:"nextBitIsOne",value:function e(){var t=!(this.bits_&1<<this.current_);this.current_--;return t}}]);return i}();var Hn=function e(c,t,h,n){c.sort(t);var f=function e(t,n){var r=n-t;var i;var a;if(r===0){return null}else if(r===1){i=c[t];a=h?h(i):i;return new N(a,i.node,N.BLACK,null,null)}else{var o=parseInt(r/2,10)+t;var s=e(t,o);var u=e(o+1,n);i=c[o];a=h?h(i):i;return new N(a,i.node,N.BLACK,s,u)}};var r=function e(t){var n=null;var r=null;var u=c.length;var i=function e(t,n){var r=u-t;var i=u;u-=t;var a=f(r+1,i);var o=c[r];var s=h?h(o):o;l(new N(s,o.node,n,null,a))};var l=function e(t){if(n){n.left=t;n=t}else{r=t;n=t}};for(var a=0;a<t.count;++a){var o=t.nextBitIsOne();var s=Math.pow(2,t.count-(a+1));if(o){i(s,N.BLACK)}else{i(s,N.BLACK);i(s,N.RED)}}return r};var i=new zn(c.length);var a=r(i);return new x(n||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn;var Yn={};var Gn=function(){function h(e,t){f(this,h);this.indexes_=e;this.indexSet_=t}d(h,[{key:"get",value:function e(t){var n=Object(g["C"])(this.indexes_,t);if(!n){throw new Error("No index defined for "+t)}if(n instanceof x){return n}else{return null}}},{key:"hasIndex",value:function e(t){return Object(g["j"])(this.indexSet_,t.toString())}},{key:"addIndex",value:function e(t,n){Object(g["e"])(t!==O,"KeyIndex always exists and isn't meant to be added to the IndexMap.");var r=[];var i=false;var a=n.getIterator(P.Wrap);var o=a.getNext();while(o){i=i||t.isDefinedOn(o.node);r.push(o);o=a.getNext()}var s;if(i){s=Hn(r,t.getCompare())}else{s=Yn}var u=t.toString();var l=Object.assign({},this.indexSet_);l[u]=t;var c=Object.assign({},this.indexes_);c[u]=s;return new h(c,l)}},{key:"addToIndexes",value:function e(u,l){var c=this;var t=Object(g["A"])(this.indexes_,function(e,t){var n=Object(g["C"])(c.indexSet_,t);Object(g["e"])(n,"Missing index implementation for "+t);if(e===Yn){if(n.isDefinedOn(u.node)){var r=[];var i=l.getIterator(P.Wrap);var a=i.getNext();while(a){if(a.name!==u.name){r.push(a)}a=i.getNext()}r.push(u);return Hn(r,n.getCompare())}else{return Yn}}else{var o=l.get(u.name);var s=e;if(o){s=s.remove(new P(u.name,o))}return s.insert(u,u.node)}});return new h(t,this.indexSet_)}},{key:"removeFromIndexes",value:function e(n,r){var t=Object(g["A"])(this.indexes_,function(e){if(e===Yn){return e}else{var t=r.get(n.name);if(t){return e.remove(new P(n.name,t))}else{return e}}});return new h(t,this.indexSet_)}}],[{key:"Default",get:function e(){Object(g["e"])(Yn&&c,"ChildrenNode.ts has not been loaded");Vn=Vn||new h({".priority":Yn},{".priority":c});return Vn}}]);return h}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn;var R=function(){function u(e,t,n){f(this,u);this.children_=e;this.priorityNode_=t;this.indexMap_=n;this.lazyHash_=null;if(this.priorityNode_){Dn(this.priorityNode_)}if(this.children_.isEmpty()){Object(g["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}d(u,[{key:"isLeafNode",value:function e(){return false}},{key:"getPriority",value:function e(){return this.priorityNode_||Kn}},{key:"updatePriority",value:function e(t){if(this.children_.isEmpty()){return this}else{return new u(this.children_,t,this.indexMap_)}}},{key:"getImmediateChild",value:function e(t){if(t===".priority"){return this.getPriority()}else{var n=this.children_.get(t);return n===null?Kn:n}}},{key:"getChild",value:function e(t){var n=w(t);if(n===null){return this}return this.getImmediateChild(n).getChild(b(t))}},{key:"hasChild",value:function e(t){return this.children_.get(t)!==null}},{key:"updateImmediateChild",value:function e(t,n){Object(g["e"])(n,"We should always be passing snapshot nodes");if(t===".priority"){return this.updatePriority(n)}else{var r=new P(t,n);var i,a;if(n.isEmpty()){i=this.children_.remove(t);a=this.indexMap_.removeFromIndexes(r,this.children_)}else{i=this.children_.insert(t,n);a=this.indexMap_.addToIndexes(r,this.children_)}var o=i.isEmpty()?Kn:this.priorityNode_;return new u(i,o,a)}}},{key:"updateChild",value:function e(t,n){var r=w(t);if(r===null){return n}else{Object(g["e"])(w(t)!==".priority"||tn(t)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(b(t),n);return this.updateImmediateChild(r,i)}}},{key:"isEmpty",value:function e(){return this.children_.isEmpty()}},{key:"numChildren",value:function e(){return this.children_.count()}},{key:"val",value:function e(n){if(this.isEmpty()){return null}var r={};var i=0,a=0,o=true;this.forEachChild(c,function(e,t){r[e]=t.val(n);i++;if(o&&u.INTEGER_REGEXP_.test(e)){a=Math.max(a,Number(e))}else{o=false}});if(!n&&o&&a<2*i){var t=[];for(var s in r){t[s]=r[s]}return t}else{if(n&&!this.getPriority().isEmpty()){r[".priority"]=this.getPriority().val()}return r}}},{key:"hash",value:function e(){if(this.lazyHash_===null){var r="";if(!this.getPriority().isEmpty()){r+="priority:"+jn(this.getPriority().val())+":"}this.forEachChild(c,function(e,t){var n=t.hash();if(n!==""){r+=":"+e+":"+n}});this.lazyHash_=r===""?"":_e(r)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function e(t,n,r){var i=this.resolveIndex_(r);if(i){var a=i.getPredecessorKey(new P(t,n));return a?a.name:null}else{return this.children_.getPredecessorKey(t)}}},{key:"getFirstChildName",value:function e(t){var n=this.resolveIndex_(t);if(n){var r=n.minKey();return r&&r.name}else{return this.children_.minKey()}}},{key:"getFirstChild",value:function e(t){var n=this.getFirstChildName(t);if(n){return new P(n,this.children_.get(n))}else{return null}}},{key:"getLastChildName",value:function e(t){var n=this.resolveIndex_(t);if(n){var r=n.maxKey();return r&&r.name}else{return this.children_.maxKey()}}},{key:"getLastChild",value:function e(t){var n=this.getLastChildName(t);if(n){return new P(n,this.children_.get(n))}else{return null}}},{key:"forEachChild",value:function e(t,n){var r=this.resolveIndex_(t);if(r){return r.inorderTraversal(function(e){return n(e.name,e.node)})}else{return this.children_.inorderTraversal(n)}}},{key:"getIterator",value:function e(t){return this.getIteratorFrom(t.minPost(),t)}},{key:"getIteratorFrom",value:function e(t,n){var r=this.resolveIndex_(n);if(r){return r.getIteratorFrom(t,function(e){return e})}else{var i=this.children_.getIteratorFrom(t.name,P.Wrap);var a=i.peek();while(a!=null&&n.compare(a,t)<0){i.getNext();a=i.peek()}return i}}},{key:"getReverseIterator",value:function e(t){return this.getReverseIteratorFrom(t.maxPost(),t)}},{key:"getReverseIteratorFrom",value:function e(t,n){var r=this.resolveIndex_(n);if(r){return r.getReverseIteratorFrom(t,function(e){return e})}else{var i=this.children_.getReverseIteratorFrom(t.name,P.Wrap);var a=i.peek();while(a!=null&&n.compare(a,t)>0){i.getNext();a=i.peek()}return i}}},{key:"compareTo",value:function e(t){if(this.isEmpty()){if(t.isEmpty()){return 0}else{return-1}}else if(t.isLeafNode()||t.isEmpty()){return 1}else if(t===$n){return-1}else{return 0}}},{key:"withIndex",value:function e(t){if(t===O||this.indexMap_.hasIndex(t)){return this}else{var n=this.indexMap_.addIndex(t,this.children_);return new u(this.children_,this.priorityNode_,n)}}},{key:"isIndexed",value:function e(t){return t===O||this.indexMap_.hasIndex(t)}},{key:"equals",value:function e(t){if(t===this){return true}else if(t.isLeafNode()){return false}else{var n=t;if(!this.getPriority().equals(n.getPriority())){return false}else if(this.children_.count()===n.children_.count()){var r=this.getIterator(c);var i=n.getIterator(c);var a=r.getNext();var o=i.getNext();while(a&&o){if(a.name!==o.name||!a.node.equals(o.node)){return false}a=r.getNext();o=i.getNext()}return a===null&&o===null}else{return false}}}},{key:"resolveIndex_",value:function e(t){if(t===O){return null}else{return this.indexMap_.get(t.toString())}}}],[{key:"EMPTY_NODE",get:function e(){return Kn||(Kn=new u(new x(Nn),null,Gn.Default))}}]);return u}();R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Qn=function(e){o(n,e);var t=s(n);function n(){f(this,n);return t.call(this,new x(Nn),R.EMPTY_NODE,Gn.Default)}d(n,[{key:"compareTo",value:function e(t){if(t===this){return 0}else{return 1}}},{key:"equals",value:function e(t){return t===this}},{key:"getPriority",value:function e(){return this}},{key:"getImmediateChild",value:function e(t){return R.EMPTY_NODE}},{key:"isEmpty",value:function e(){return false}}]);return n}(R);var $n=new Qn;Object.defineProperties(P,{MIN:{value:new P(u,R.EMPTY_NODE)},MAX:{value:new P(l,$n)}});En.__EMPTY_NODE=R.EMPTY_NODE;Fn.__childrenNodeConstructor=R;Rn($n);Wn($n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn=true;function j(r){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(r===null){return R.EMPTY_NODE}if(E(r)==="object"&&".priority"in r){e=r[".priority"]}Object(g["e"])(e===null||typeof e==="string"||typeof e==="number"||E(e)==="object"&&".sv"in e,"Invalid priority type found: "+E(e));if(E(r)==="object"&&".value"in r&&r[".value"]!==null){r=r[".value"]}if(E(r)!=="object"||".sv"in r){var t=r;return new Fn(t,j(e))}if(!(r instanceof Array)&&Jn){var i=[];var a=false;var n=r;h(n,function(e,t){if(e.substring(0,1)!=="."){var n=j(t);if(!n.isEmpty()){a=a||!n.getPriority().isEmpty();i.push(new P(e,n))}}});if(i.length===0){return R.EMPTY_NODE}var o=Hn(i,On,function(e){return e.name},Nn);if(a){var s=Hn(i,c.getCompare());return new R(o,j(e),new Gn({".priority":s},{".priority":c}))}else{return new R(o,j(e),Gn.Default)}}else{var u=R.EMPTY_NODE;h(r,function(e,t){if(Object(g["j"])(r,e)){if(e.substring(0,1)!=="."){var n=j(t);if(n.isLeafNode()||!n.isEmpty()){u=u.updateImmediateChild(e,n)}}}});return u.updatePriority(j(e))}}Mn(j);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn=function(e){o(r,e);var n=s(r);function r(e){var t;f(this,r);t=n.call(this);t.indexPath_=e;Object(g["e"])(!T(e)&&w(e)!==".priority","Can't create PathIndex with empty path or .priority key");return t}d(r,[{key:"extractChild",value:function e(t){return t.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function e(t){return!t.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function e(t,n){var r=this.extractChild(t.node);var i=this.extractChild(n.node);var a=r.compareTo(i);if(a===0){return Ee(t.name,n.name)}else{return a}}},{key:"makePost",value:function e(t,n){var r=j(t);var i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new P(n,i)}},{key:"maxPost",value:function e(){var t=R.EMPTY_NODE.updateChild(this.indexPath_,$n);return new P(l,t)}},{key:"toString",value:function e(){return an(this.indexPath_,0).join("/")}}]);return r}(Tn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn=function(e){o(n,e);var t=s(n);function n(){f(this,n);return t.apply(this,arguments)}d(n,[{key:"compare",value:function e(t,n){var r=t.node.compareTo(n.node);if(r===0){return Ee(t.name,n.name)}else{return r}}},{key:"isDefinedOn",value:function e(t){return true}},{key:"indexedValueChanged",value:function e(t,n){return!t.equals(n)}},{key:"minPost",value:function e(){return P.MIN}},{key:"maxPost",value:function e(){return P.MAX}},{key:"makePost",value:function e(t,n){var r=j(t);return new P(n,r)}},{key:"toString",value:function e(){return".value"}}]);return n}(Tn);var er=new Zn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";var nr="-";var rr="z";var ir=786;var ar=function(){var a=0;var o=[];return function(e){var t=e===a;a=e;var n;var r=new Array(8);for(n=7;n>=0;n--){r[n]=tr.charAt(e%64);e=Math.floor(e/64)}Object(g["e"])(e===0,"Cannot push at time == 0");var i=r.join("");if(!t){for(n=0;n<12;n++){o[n]=Math.floor(Math.random()*64)}}else{for(n=11;n>=0&&o[n]===63;n--){o[n]=0}o[n]++}for(n=0;n<12;n++){i+=tr.charAt(o[n])}Object(g["e"])(i.length===20,"nextPushId: Length should be 20.");return i}}();var or=function e(t){if(t===""+qe){return nr}var n=Le(t);if(n!=null){return""+(n+1)}var r=new Array(t.length);for(var i=0;i<r.length;i++){r[i]=t.charAt(i)}if(r.length<ir){r.push(nr);return r.join("")}var a=r.length-1;while(a>=0&&r[a]===rr){a--}if(a===-1){return l}var o=r[a];var s=tr.charAt(tr.indexOf(o)+1);r[a]=s;return r.slice(0,a+1).join("")};var sr=function e(t){if(t===""+Fe){return u}var n=Le(t);if(n!=null){return""+(n-1)}var r=new Array(t.length);for(var i=0;i<r.length;i++){r[i]=t.charAt(i)}if(r[r.length-1]===nr){if(r.length===1){return""+qe}delete r[r.length-1];return r.join("")}r[r.length-1]=tr.charAt(tr.indexOf(r[r.length-1])-1);return r.join("")+rr.repeat(ir-r.length)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e){return{type:"value",snapshotNode:e}}function lr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function cr(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function hr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function fr(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr=function(){function t(e){f(this,t);this.index_=e}d(t,[{key:"updateChild",value:function e(t,n,r,i,a,o){Object(g["e"])(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=t.getImmediateChild(n);if(s.getChild(i).equals(r.getChild(i))){if(s.isEmpty()===r.isEmpty()){return t}}if(o!=null){if(r.isEmpty()){if(t.hasChild(n)){o.trackChildChange(cr(n,s))}else{Object(g["e"])(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node")}}else if(s.isEmpty()){o.trackChildChange(lr(n,r))}else{o.trackChildChange(hr(n,r,s))}}if(t.isLeafNode()&&r.isEmpty()){return t}else{return t.updateImmediateChild(n,r).withIndex(this.index_)}}},{key:"updateFullNode",value:function e(r,n,i){if(i!=null){if(!r.isLeafNode()){r.forEachChild(c,function(e,t){if(!n.hasChild(e)){i.trackChildChange(cr(e,t))}})}if(!n.isLeafNode()){n.forEachChild(c,function(e,t){if(r.hasChild(e)){var n=r.getImmediateChild(e);if(!n.equals(t)){i.trackChildChange(hr(e,t,n))}}else{i.trackChildChange(lr(e,t))}})}}return n.withIndex(this.index_)}},{key:"updatePriority",value:function e(t,n){if(t.isEmpty()){return R.EMPTY_NODE}else{return t.updatePriority(n)}}},{key:"filtersNodes",value:function e(){return false}},{key:"getIndexedFilter",value:function e(){return this}},{key:"getIndex",value:function e(){return this.index_}}]);return t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vr=function(){function t(e){f(this,t);this.indexedFilter_=new dr(e.getIndex());this.index_=e.getIndex();this.startPost_=t.getStartPost_(e);this.endPost_=t.getEndPost_(e)}d(t,[{key:"getStartPost",value:function e(){return this.startPost_}},{key:"getEndPost",value:function e(){return this.endPost_}},{key:"matches",value:function e(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}},{key:"updateChild",value:function e(t,n,r,i,a,o){if(!this.matches(new P(n,r))){r=R.EMPTY_NODE}return this.indexedFilter_.updateChild(t,n,r,i,a,o)}},{key:"updateFullNode",value:function e(t,n,r){if(n.isLeafNode()){n=R.EMPTY_NODE}var i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);var a=this;n.forEachChild(c,function(e,t){if(!a.matches(new P(e,t))){i=i.updateImmediateChild(e,R.EMPTY_NODE)}});return this.indexedFilter_.updateFullNode(t,i,r)}},{key:"updatePriority",value:function e(t,n){return t}},{key:"filtersNodes",value:function e(){return true}},{key:"getIndexedFilter",value:function e(){return this.indexedFilter_}},{key:"getIndex",value:function e(){return this.index_}}],[{key:"getStartPost_",value:function e(t){if(t.hasStart()){var n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else{return t.getIndex().minPost()}}},{key:"getEndPost_",value:function e(t){if(t.hasEnd()){var n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else{return t.getIndex().maxPost()}}}]);return t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pr=function(){function t(e){f(this,t);this.rangedFilter_=new vr(e);this.index_=e.getIndex();this.limit_=e.getLimit();this.reverse_=!e.isViewFromLeft()}d(t,[{key:"updateChild",value:function e(t,n,r,i,a,o){if(!this.rangedFilter_.matches(new P(n,r))){r=R.EMPTY_NODE}if(t.getImmediateChild(n).equals(r)){return t}else if(t.numChildren()<this.limit_){return this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,a,o)}else{return this.fullLimitUpdateChild_(t,n,r,a,o)}}},{key:"updateFullNode",value:function e(t,n,r){var i;if(n.isLeafNode()||n.isEmpty()){i=R.EMPTY_NODE.withIndex(this.index_)}else{if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);var a;if(this.reverse_){a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_)}else{a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_)}var o=0;while(a.hasNext()&&o<this.limit_){var s=a.getNext();var u=void 0;if(this.reverse_){u=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0}else{u=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0}if(u){i=i.updateImmediateChild(s.name,s.node);o++}else{break}}}else{i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);var l;var c;var h;var f;if(this.reverse_){f=i.getReverseIterator(this.index_);l=this.rangedFilter_.getEndPost();c=this.rangedFilter_.getStartPost();var d=this.index_.getCompare();h=function e(t,n){return d(n,t)}}else{f=i.getIterator(this.index_);l=this.rangedFilter_.getStartPost();c=this.rangedFilter_.getEndPost();h=this.index_.getCompare()}var v=0;var p=false;while(f.hasNext()){var _=f.getNext();if(!p&&h(l,_)<=0){p=true}var y=p&&v<this.limit_&&h(_,c)<=0;if(y){v++}else{i=i.updateImmediateChild(_.name,R.EMPTY_NODE)}}}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}},{key:"updatePriority",value:function e(t,n){return t}},{key:"filtersNodes",value:function e(){return true}},{key:"getIndexedFilter",value:function e(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function e(){return this.index_}},{key:"fullLimitUpdateChild_",value:function e(t,n,r,i,a){var o;if(this.reverse_){var s=this.index_.getCompare();o=function e(t,n){return s(n,t)}}else{o=this.index_.getCompare()}var u=t;Object(g["e"])(u.numChildren()===this.limit_,"");var l=new P(n,r);var c=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_);var h=this.rangedFilter_.matches(l);if(u.hasChild(n)){var f=u.getImmediateChild(n);var d=i.getChildAfterChild(this.index_,c,this.reverse_);while(d!=null&&(d.name===n||u.hasChild(d.name))){d=i.getChildAfterChild(this.index_,d,this.reverse_)}var v=d==null?1:o(d,l);var p=h&&!r.isEmpty()&&v>=0;if(p){if(a!=null){a.trackChildChange(hr(n,r,f))}return u.updateImmediateChild(n,r)}else{if(a!=null){a.trackChildChange(cr(n,f))}var _=u.updateImmediateChild(n,R.EMPTY_NODE);var y=d!=null&&this.rangedFilter_.matches(d);if(y){if(a!=null){a.trackChildChange(lr(d.name,d.node))}return _.updateImmediateChild(d.name,d.node)}else{return _}}}else if(r.isEmpty()){return t}else if(h){if(o(c,l)>=0){if(a!=null){a.trackChildChange(cr(c.name,c.node));a.trackChildChange(lr(n,r))}return u.updateImmediateChild(n,r).updateImmediateChild(c.name,R.EMPTY_NODE)}else{return t}}else{return t}}}]);return t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _r=function(){function t(){f(this,t);this.limitSet_=false;this.startSet_=false;this.startNameSet_=false;this.startAfterSet_=false;this.endSet_=false;this.endNameSet_=false;this.endBeforeSet_=false;this.limit_=0;this.viewFrom_="";this.indexStartValue_=null;this.indexStartName_="";this.indexEndValue_=null;this.indexEndName_="";this.index_=c}d(t,[{key:"hasStart",value:function e(){return this.startSet_}},{key:"hasStartAfter",value:function e(){return this.startAfterSet_}},{key:"hasEndBefore",value:function e(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function e(){if(this.viewFrom_===""){return this.startSet_}else{return this.viewFrom_==="l"}}},{key:"getIndexStartValue",value:function e(){Object(g["e"])(this.startSet_,"Only valid if start has been set");return this.indexStartValue_}},{key:"getIndexStartName",value:function e(){Object(g["e"])(this.startSet_,"Only valid if start has been set");if(this.startNameSet_){return this.indexStartName_}else{return u}}},{key:"hasEnd",value:function e(){return this.endSet_}},{key:"getIndexEndValue",value:function e(){Object(g["e"])(this.endSet_,"Only valid if end has been set");return this.indexEndValue_}},{key:"getIndexEndName",value:function e(){Object(g["e"])(this.endSet_,"Only valid if end has been set");if(this.endNameSet_){return this.indexEndName_}else{return l}}},{key:"hasLimit",value:function e(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function e(){return this.limitSet_&&this.viewFrom_!==""}},{key:"getLimit",value:function e(){Object(g["e"])(this.limitSet_,"Only valid if limit has been set");return this.limit_}},{key:"getIndex",value:function e(){return this.index_}},{key:"loadsAllData",value:function e(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function e(){return this.loadsAllData()&&this.index_===c}},{key:"copy",value:function e(){var e=new t;e.limitSet_=this.limitSet_;e.limit_=this.limit_;e.startSet_=this.startSet_;e.indexStartValue_=this.indexStartValue_;e.startNameSet_=this.startNameSet_;e.indexStartName_=this.indexStartName_;e.endSet_=this.endSet_;e.indexEndValue_=this.indexEndValue_;e.endNameSet_=this.endNameSet_;e.indexEndName_=this.indexEndName_;e.index_=this.index_;e.viewFrom_=this.viewFrom_;return e}}]);return t}();function yr(e){if(e.loadsAllData()){return new dr(e.getIndex())}else if(e.hasLimit()){return new pr(e)}else{return new vr(e)}}function mr(e,t){var n=e.copy();n.limitSet_=true;n.limit_=t;n.viewFrom_="l";return n}function gr(e,t){var n=e.copy();n.limitSet_=true;n.limit_=t;n.viewFrom_="r";return n}function kr(e,t,n){var r=e.copy();r.startSet_=true;if(t===undefined){t=null}r.indexStartValue_=t;if(n!=null){r.startNameSet_=true;r.indexStartName_=n}else{r.startNameSet_=false;r.indexStartName_=""}return r}function wr(e,t,n){var r;if(e.index_===O){if(typeof t==="string"){t=or(t)}r=kr(e,t,n)}else{var i;if(n==null){i=l}else{i=or(n)}r=kr(e,t,i)}r.startAfterSet_=true;return r}function br(e,t,n){var r=e.copy();r.endSet_=true;if(t===undefined){t=null}r.indexEndValue_=t;if(n!==undefined){r.endNameSet_=true;r.indexEndName_=n}else{r.endNameSet_=false;r.indexEndName_=""}return r}function Cr(e,t,n){var r;var i;if(e.index_===O){if(typeof t==="string"){t=sr(t)}i=br(e,t,n)}else{if(n==null){r=u}else{r=sr(n)}i=br(e,t,r)}i.endBeforeSet_=true;return i}function Tr(e,t){var n=e.copy();n.index_=t;return n}function Ir(e){var t={};if(e.isDefault()){return t}var n;if(e.index_===c){n="$priority"}else if(e.index_===er){n="$value"}else if(e.index_===O){n="$key"}else{Object(g["e"])(e.index_ instanceof Xn,"Unrecognized index type!");n=e.index_.toString()}t["orderBy"]=Object(g["F"])(n);if(e.startSet_){t["startAt"]=Object(g["F"])(e.indexStartValue_);if(e.startNameSet_){t["startAt"]+=","+Object(g["F"])(e.indexStartName_)}}if(e.endSet_){t["endAt"]=Object(g["F"])(e.indexEndValue_);if(e.endNameSet_){t["endAt"]+=","+Object(g["F"])(e.indexEndName_)}}if(e.limitSet_){if(e.isViewFromLeft()){t["limitToFirst"]=e.limit_}else{t["limitToLast"]=e.limit_}}return t}function Er(e){var t={};if(e.startSet_){t["sp"]=e.indexStartValue_;if(e.startNameSet_){t["sn"]=e.indexStartName_}}if(e.endSet_){t["ep"]=e.indexEndValue_;if(e.endNameSet_){t["en"]=e.indexEndName_}}if(e.limitSet_){t["l"]=e.limit_;var n=e.viewFrom_;if(n===""){if(e.isViewFromLeft()){n="l"}else{n="r"}}t["vf"]=n}if(e.index_!==c){t["i"]=e.index_.toString()}return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr=function(e){o(c,e);var a=s(c);function c(e,t,n,r){var i;f(this,c);i=a.call(this);i.repoInfo_=e;i.onDataUpdate_=t;i.authTokenProvider_=n;i.appCheckTokenProvider_=r;i.log_=we("p:rest:");i.listens_={};return i}d(c,[{key:"reportStats",value:function e(t){throw new Error("Method not implemented.")}},{key:"listen",value:function e(t,n,i,a){var o=this;var s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);var u=c.getListenId_(t,i);var l={};this.listens_[u]=l;var r=Ir(t._queryParams);this.restRequest_(s+".json",r,function(e,t){var n=t;if(e===404){n=null;e=null}if(e===null){o.onDataUpdate_(s,n,false,i)}if(Object(g["C"])(o.listens_,u)===l){var r;if(!e){r="ok"}else if(e===401){r="permission_denied"}else{r="rest_error:"+e}a(r,null)}})}},{key:"unlisten",value:function e(t,n){var r=c.getListenId_(t,n);delete this.listens_[r]}},{key:"get",value:function e(t){var r=this;var n=Ir(t._queryParams);var i=t._path.toString();var a=new g["a"];this.restRequest_(i+".json",n,function(e,t){var n=t;if(e===404){n=null;e=null}if(e===null){r.onDataUpdate_(i,n,false,null);a.resolve(n)}else{a.reject(new Error(n))}});return a.promise}},{key:"refreshAuthToken",value:function e(t){}},{key:"restRequest_",value:function e(o){var s=this;var u=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var l=arguments.length>2?arguments[2]:undefined;u["format"]="export";return Promise.all([this.authTokenProvider_.getToken(false),this.appCheckTokenProvider_.getToken(false)]).then(function(e){var t=B(e,2),n=t[0],r=t[1];if(n&&n.accessToken){u["auth"]=n.accessToken}if(r&&r.token){u["ac"]=r.token}var i=(s.repoInfo_.secure?"https://":"http://")+s.repoInfo_.host+o+"?"+"ns="+s.repoInfo_.namespace+Object(g["B"])(u);s.log_("Sending REST request for "+i);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(l&&a.readyState===4){s.log_("REST Response for "+i+" received. status:",a.status,"response:",a.responseText);var e=null;if(a.status>=200&&a.status<300){try{e=Object(g["z"])(a.responseText)}catch(e){k("Failed to parse JSON response for "+i+": "+a.responseText)}l(null,e)}else{if(a.status!==401&&a.status!==404){k("Got unsuccessful REST response for "+i+" Status: "+a.status)}l(a.status)}l=null}};a.open("GET",i,true);a.send()})}}],[{key:"getListenId_",value:function e(t,n){if(n!==undefined){return"tag$"+n}else{Object(g["e"])(t._queryParams.isDefault(),"should have a tag if it's not a default query.");return t._path.toString()}}}]);return c}($t);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr=function(){function e(){f(this,e);this.rootNode_=R.EMPTY_NODE}d(e,[{key:"getNode",value:function e(t){return this.rootNode_.getChild(t)}},{key:"updateSnapshot",value:function e(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}]);return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(){return{value:null,children:new Map}}function Nr(e,t,n){if(T(t)){e.value=n;e.children.clear()}else if(e.value!==null){e.value=e.value.updateChild(t,n)}else{var r=w(t);if(!e.children.has(r)){e.children.set(r,Or())}var i=e.children.get(r);t=b(t);Nr(i,t,n)}}function xr(n,e){if(T(e)){n.value=null;n.children.clear();return true}else{if(n.value!==null){if(n.value.isLeafNode()){return false}else{var t=n.value;n.value=null;t.forEachChild(c,function(e,t){Nr(n,new _(e),t)});return xr(n,e)}}else if(n.children.size>0){var r=w(e);e=b(e);if(n.children.has(r)){var i=xr(n.children.get(r),e);if(i){n.children["delete"](r)}}return n.children.size===0}else{return true}}}function Rr(e,r,i){if(e.value!==null){i(r,e.value)}else{jr(e,function(e,t){var n=new _(r.toString()+"/"+e);Rr(t,n,i)})}}function jr(e,n){e.children.forEach(function(e,t){n(t,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr=function(){function t(e){f(this,t);this.collection_=e;this.last_=null}d(t,[{key:"get",value:function e(){var t=this.collection_.get();var n=Object.assign({},t);if(this.last_){h(this.last_,function(e,t){n[e]=n[e]-t})}this.last_=t;return n}}]);return t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar=10*1e3;var Fr=30*1e3;var qr=5*60*1e3;var Lr=function(){function r(e,t){f(this,r);this.server_=t;this.statsToReport_={};this.statsListener_=new Dr(e);var n=Ar+(Fr-Ar)*Math.random();Ue(this.reportStats_.bind(this),Math.floor(n))}d(r,[{key:"reportStats_",value:function e(){var n=this;var t=this.statsListener_.get();var r={};var i=false;h(t,function(e,t){if(t>0&&Object(g["j"])(n.statsToReport_,e)){r[e]=t;i=true}});if(i){this.server_.reportStats(r)}Ue(this.reportStats_.bind(this),Math.floor(Math.random()*2*qr))}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e["OVERWRITE"]=0]="OVERWRITE";e[e["MERGE"]=1]="MERGE";e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE";e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(D||(D={}));function Mr(){return{fromUser:true,fromServer:false,queryId:null,tagged:false}}function Wr(){return{fromUser:false,fromServer:true,queryId:null,tagged:false}}function Ur(e){return{fromUser:false,fromServer:true,queryId:e,tagged:true}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br=function(){function r(e,t,n){f(this,r);this.path=e;this.affectedTree=t;this.revert=n;this.type=D.ACK_USER_WRITE;this.source=Mr()}d(r,[{key:"operationForChild",value:function e(t){if(!T(this.path)){Object(g["e"])(w(this.path)===t,"operationForChild called for unrelated child.");return new r(b(this.path),this.affectedTree,this.revert)}else if(this.affectedTree.value!=null){Object(g["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths.");return this}else{var n=this.affectedTree.subtree(new _(t));return new r(y(),n,this.revert)}}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zr=function(){function n(e,t){f(this,n);this.source=e;this.path=t;this.type=D.LISTEN_COMPLETE}d(n,[{key:"operationForChild",value:function e(t){if(T(this.path)){return new n(this.source,y())}else{return new n(this.source,b(this.path))}}}]);return n}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hr=function(){function r(e,t,n){f(this,r);this.source=e;this.path=t;this.snap=n;this.type=D.OVERWRITE}d(r,[{key:"operationForChild",value:function e(t){if(T(this.path)){return new r(this.source,y(),this.snap.getImmediateChild(t))}else{return new r(this.source,b(this.path),this.snap)}}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=function(){function r(e,t,n){f(this,r);this.source=e;this.path=t;this.children=n;this.type=D.MERGE}d(r,[{key:"operationForChild",value:function e(t){if(T(this.path)){var n=this.children.subtree(new _(t));if(n.isEmpty()){return null}else if(n.value){return new Hr(this.source,y(),n.value)}else{return new r(this.source,y(),n)}}else{Object(g["e"])(w(this.path)===t,"Can't get a merge for a child not on the path of the operation");return new r(this.source,b(this.path),this.children)}}},{key:"toString",value:function e(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yr=function(){function r(e,t,n){f(this,r);this.node_=e;this.fullyInitialized_=t;this.filtered_=n}d(r,[{key:"isFullyInitialized",value:function e(){return this.fullyInitialized_}},{key:"isFiltered",value:function e(){return this.filtered_}},{key:"isCompleteForPath",value:function e(t){if(T(t)){return this.isFullyInitialized()&&!this.filtered_}var n=w(t);return this.isCompleteForChild(n)}},{key:"isCompleteForChild",value:function e(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}},{key:"getNode",value:function e(){return this.node_}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr=d(function e(t){f(this,e);this.query_=t;this.index_=this.query_._queryParams.getIndex()});function Kr(t,e,n,r){var i=[];var a=[];e.forEach(function(e){if(e.type==="child_changed"&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)){a.push(fr(e.childName,e.snapshotNode))}});Qr(t,i,"child_removed",e,r,n);Qr(t,i,"child_added",e,r,n);Qr(t,i,"child_moved",a,r,n);Qr(t,i,"child_changed",e,r,n);Qr(t,i,"value",e,r,n);return i}function Qr(r,i,t,e,a,o){var n=e.filter(function(e){return e.type===t});n.sort(function(e,t){return Jr(r,e,t)});n.forEach(function(t){var n=$r(r,t,o);a.forEach(function(e){if(e.respondsTo(t.type)){i.push(e.createEvent(n,r.query_))}})})}function $r(e,t,n){if(t.type==="value"||t.type==="child_removed"){return t}else{t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_);return t}}function Jr(e,t,n){if(t.childName==null||n.childName==null){throw Object(g["f"])("Should only compare child_ events.")}var r=new P(t.childName,t.snapshotNode);var i=new P(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e,t){return{eventCache:e,serverCache:t}}function Zr(e,t,n,r){return Xr(new Yr(t,n,r),e.serverCache)}function ei(e,t,n,r){return Xr(e.eventCache,new Yr(t,n,r))}function ti(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ni(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ri;var ii=function e(){if(!ri){ri=new x(Se)}return ri};var A=function(){function s(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:ii();f(this,s);this.value=e;this.children=t}d(s,[{key:"isEmpty",value:function e(){return this.value===null&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function e(t,n){if(this.value!=null&&n(this.value)){return{path:y(),value:this.value}}else{if(T(t)){return null}else{var r=w(t);var i=this.children.get(r);if(i!==null){var a=i.findRootMostMatchingPathAndValue(b(t),n);if(a!=null){var o=C(new _(r),a.path);return{path:o,value:a.value}}else{return null}}else{return null}}}}},{key:"findRootMostValueAndPath",value:function e(t){return this.findRootMostMatchingPathAndValue(t,function(){return true})}},{key:"subtree",value:function e(t){if(T(t)){return this}else{var n=w(t);var r=this.children.get(n);if(r!==null){return r.subtree(b(t))}else{return new s(null)}}}},{key:"set",value:function e(t,n){if(T(t)){return new s(n,this.children)}else{var r=w(t);var i=this.children.get(r)||new s(null);var a=i.set(b(t),n);var o=this.children.insert(r,a);return new s(this.value,o)}}},{key:"remove",value:function e(t){if(T(t)){if(this.children.isEmpty()){return new s(null)}else{return new s(null,this.children)}}else{var n=w(t);var r=this.children.get(n);if(r){var i=r.remove(b(t));var a;if(i.isEmpty()){a=this.children.remove(n)}else{a=this.children.insert(n,i)}if(this.value===null&&a.isEmpty()){return new s(null)}else{return new s(this.value,a)}}else{return this}}}},{key:"get",value:function e(t){if(T(t)){return this.value}else{var n=w(t);var r=this.children.get(n);if(r){return r.get(b(t))}else{return null}}}},{key:"setTree",value:function e(t,n){if(T(t)){return n}else{var r=w(t);var i=this.children.get(r)||new s(null);var a=i.setTree(b(t),n);var o;if(a.isEmpty()){o=this.children.remove(r)}else{o=this.children.insert(r,a)}return new s(this.value,o)}}},{key:"fold",value:function e(t){return this.fold_(y(),t)}},{key:"fold_",value:function e(n,r){var i={};this.children.inorderTraversal(function(e,t){i[e]=t.fold_(C(n,e),r)});return r(n,this.value,i)}},{key:"findOnPath",value:function e(t,n){return this.findOnPath_(t,y(),n)}},{key:"findOnPath_",value:function e(t,n,r){var i=this.value?r(n,this.value):false;if(i){return i}else{if(T(t)){return null}else{var a=w(t);var o=this.children.get(a);if(o){return o.findOnPath_(b(t),C(n,a),r)}else{return null}}}}},{key:"foreachOnPath",value:function e(t,n){return this.foreachOnPath_(t,y(),n)}},{key:"foreachOnPath_",value:function e(t,n,r){if(T(t)){return this}else{if(this.value){r(n,this.value)}var i=w(t);var a=this.children.get(i);if(a){return a.foreachOnPath_(b(t),C(n,i),r)}else{return new s(null)}}}},{key:"foreach",value:function e(t){this.foreach_(y(),t)}},{key:"foreach_",value:function e(n,r){this.children.inorderTraversal(function(e,t){t.foreach_(C(n,e),r)});if(this.value){r(n,this.value)}}},{key:"foreachChild",value:function e(n){this.children.inorderTraversal(function(e,t){if(t.value){n(e,t.value)}})}}],[{key:"fromObject",value:function e(t){var n=new s(null);h(t,function(e,t){n=n.set(new _(e),t)});return n}}]);return s}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai=function(){function t(e){f(this,t);this.writeTree_=e}d(t,null,[{key:"empty",value:function e(){return new t(new A(null))}}]);return t}();function oi(e,t,n){if(T(t)){return new ai(new A(n))}else{var r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){var i=r.path;var a=r.value;var o=I(i,t);a=a.updateChild(o,n);return new ai(e.writeTree_.set(i,a))}else{var s=new A(n);var u=e.writeTree_.setTree(t,s);return new ai(u)}}}function si(e,n,t){var r=e;h(t,function(e,t){r=oi(r,C(n,e),t)});return r}function ui(e,t){if(T(t)){return ai.empty()}else{var n=e.writeTree_.setTree(t,new A(null));return new ai(n)}}function li(e,t){return ci(e,t)!=null}function ci(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);if(n!=null){return e.writeTree_.get(n.path).getChild(I(n.path,t))}else{return null}}function hi(e){var n=[];var t=e.writeTree_.value;if(t!=null){if(!t.isLeafNode()){t.forEachChild(c,function(e,t){n.push(new P(e,t))})}}else{e.writeTree_.children.inorderTraversal(function(e,t){if(t.value!=null){n.push(new P(e,t.value))}})}return n}function fi(e,t){if(T(t)){return e}else{var n=ci(e,t);if(n!=null){return new ai(new A(n))}else{return new ai(e.writeTree_.subtree(t))}}}function di(e){return e.writeTree_.isEmpty()}function vi(e,t){return pi(y(),e.writeTree_,t)}function pi(n,e,r){if(e.value!=null){return r.updateChild(n,e.value)}else{var i=null;e.children.inorderTraversal(function(e,t){if(e===".priority"){Object(g["e"])(t.value!==null,"Priority writes must always be leaf nodes");i=t.value}else{r=pi(C(n,e),t,r)}});if(!r.getChild(n).isEmpty()&&i!==null){r=r.updateChild(C(n,".priority"),i)}return r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e,t){return Mi(t,e)}function yi(e,t,n,r,i){Object(g["e"])(r>e.lastWriteId,"Stacking an older write on top of newer ones");if(i===undefined){i=true}e.allWrites.push({path:t,snap:n,writeId:r,visible:i});if(i){e.visibleWrites=oi(e.visibleWrites,t,n)}e.lastWriteId=r}function mi(e,t,n,r){Object(g["e"])(r>e.lastWriteId,"Stacking an older merge on top of newer ones");e.allWrites.push({path:t,children:n,writeId:r,visible:true});e.visibleWrites=si(e.visibleWrites,t,n);e.lastWriteId=r}function gi(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t){return r}}return null}function ki(t,n){var e=t.allWrites.findIndex(function(e){return e.writeId===n});Object(g["e"])(e>=0,"removeWrite called with nonexistent writeId.");var r=t.allWrites[e];t.allWrites.splice(e,1);var i=r.visible;var a=false;var o=t.allWrites.length-1;while(i&&o>=0){var s=t.allWrites[o];if(s.visible){if(o>=e&&wi(s,r.path)){i=false}else if(S(r.path,s.path)){a=true}}o--}if(!i){return false}else if(a){bi(t);return true}else{if(r.snap){t.visibleWrites=ui(t.visibleWrites,r.path)}else{var u=r.children;h(u,function(e){t.visibleWrites=ui(t.visibleWrites,C(r.path,e))})}return true}}function wi(e,t){if(e.snap){return S(e.path,t)}else{for(var n in e.children){if(e.children.hasOwnProperty(n)&&S(C(e.path,n),t)){return true}}return false}}function bi(e){e.visibleWrites=Ti(e.allWrites,Ci,y());if(e.allWrites.length>0){e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId}else{e.lastWriteId=-1}}function Ci(e){return e.visible}function Ti(e,t,n){var r=ai.empty();for(var i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path;var s=void 0;if(a.snap){if(S(n,o)){s=I(n,o);r=oi(r,s,a.snap)}else if(S(o,n)){s=I(o,n);r=oi(r,y(),a.snap.getChild(s))}else;}else if(a.children){if(S(n,o)){s=I(n,o);r=si(r,s,a.children)}else if(S(o,n)){s=I(o,n);if(T(s)){r=si(r,y(),a.children)}else{var u=Object(g["C"])(a.children,w(s));if(u){var l=u.getChild(b(s));r=oi(r,y(),l)}}}else;}else{throw Object(g["f"])("WriteRecord should have .snap or .children")}}}return r}function Ii(e,n,t,r,i){if(!r&&!i){var a=ci(e.visibleWrites,n);if(a!=null){return a}else{var o=fi(e.visibleWrites,n);if(di(o)){return t}else if(t==null&&!li(o,y())){return null}else{var s=t||R.EMPTY_NODE;return vi(o,s)}}}else{var u=fi(e.visibleWrites,n);if(!i&&di(u)){return t}else{if(!i&&t==null&&!li(u,y())){return null}else{var l=function e(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(S(t.path,n)||S(n,t.path))};var c=Ti(e.allWrites,l,n);var h=t||R.EMPTY_NODE;return vi(c,h)}}}}function Ei(e,t,n){var r=R.EMPTY_NODE;var i=ci(e.visibleWrites,t);if(i){if(!i.isLeafNode()){i.forEachChild(c,function(e,t){r=r.updateImmediateChild(e,t)})}return r}else if(n){var a=fi(e.visibleWrites,t);n.forEachChild(c,function(e,t){var n=vi(fi(a,new _(e)),t);r=r.updateImmediateChild(e,n)});hi(a).forEach(function(e){r=r.updateImmediateChild(e.name,e.node)});return r}else{var o=fi(e.visibleWrites,t);hi(o).forEach(function(e){r=r.updateImmediateChild(e.name,e.node)});return r}}function Si(e,t,n,r,i){Object(g["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=C(t,n);if(li(e.visibleWrites,a)){return null}else{var o=fi(e.visibleWrites,a);if(di(o)){return i.getChild(n)}else{return vi(o,i.getChild(n))}}}function Pi(e,t,n,r){var i=C(t,n);var a=ci(e.visibleWrites,i);if(a!=null){return a}else{if(r.isCompleteForChild(n)){var o=fi(e.visibleWrites,i);return vi(o,r.getNode().getImmediateChild(n))}else{return null}}}function Oi(e,t){return ci(e.visibleWrites,t)}function Ni(e,t,n,r,i,a,o){var s;var u=fi(e.visibleWrites,t);var l=ci(u,y());if(l!=null){s=l}else if(n!=null){s=vi(u,n)}else{return[]}s=s.withIndex(o);if(!s.isEmpty()&&!s.isLeafNode()){var c=[];var h=o.getCompare();var f=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o);var d=f.getNext();while(d&&c.length<i){if(h(d,r)!==0){c.push(d)}d=f.getNext()}return c}else{return[]}}function xi(){return{visibleWrites:ai.empty(),allWrites:[],lastWriteId:-1}}function Ri(e,t,n,r){return Ii(e.writeTree,e.treePath,t,n,r)}function ji(e,t){return Ei(e.writeTree,e.treePath,t)}function Di(e,t,n,r){return Si(e.writeTree,e.treePath,t,n,r)}function Ai(e,t){return Oi(e.writeTree,C(e.treePath,t))}function Fi(e,t,n,r,i,a){return Ni(e.writeTree,e.treePath,t,n,r,i,a)}function qi(e,t,n){return Pi(e.writeTree,e.treePath,t,n)}function Li(e,t){return Mi(C(e.treePath,t),e.writeTree)}function Mi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wi=function(){function e(){f(this,e);this.changeMap=new Map}d(e,[{key:"trackChildChange",value:function e(t){var n=t.type;var r=t.childName;Object(g["e"])(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking");Object(g["e"])(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var a=i.type;if(n==="child_added"&&a==="child_removed"){this.changeMap.set(r,hr(r,t.snapshotNode,i.snapshotNode))}else if(n==="child_removed"&&a==="child_added"){this.changeMap["delete"](r)}else if(n==="child_removed"&&a==="child_changed"){this.changeMap.set(r,cr(r,i.oldSnap))}else if(n==="child_changed"&&a==="child_added"){this.changeMap.set(r,lr(r,t.snapshotNode))}else if(n==="child_changed"&&a==="child_changed"){this.changeMap.set(r,hr(r,t.snapshotNode,i.oldSnap))}else{throw Object(g["f"])("Illegal combination of changes: "+t+" occurred after "+i)}}else{this.changeMap.set(r,t)}}},{key:"getChanges",value:function e(){return Array.from(this.changeMap.values())}}]);return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=function(){function e(){f(this,e)}d(e,[{key:"getCompleteChild",value:function e(t){return null}},{key:"getChildAfterChild",value:function e(t,n,r){return null}}]);return e}();var Bi=new Ui;var zi=function(){function r(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;f(this,r);this.writes_=e;this.viewCache_=t;this.optCompleteServerCache_=n}d(r,[{key:"getCompleteChild",value:function e(t){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(t)){return n.getNode().getImmediateChild(t)}else{var r=this.optCompleteServerCache_!=null?new Yr(this.optCompleteServerCache_,true,false):this.viewCache_.serverCache;return qi(this.writes_,t,r)}}},{key:"getChildAfterChild",value:function e(t,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ni(this.viewCache_);var a=Fi(this.writes_,i,n,1,r,t);if(a.length===0){return null}else{return a[0]}}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e){return{filter:e}}function Vi(e,t){Object(g["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed");Object(g["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Yi(e,t,n,r,i){var a=new Wi;var o,s;if(n.type===D.OVERWRITE){var u=n;if(u.source.fromUser){o=$i(e,t,u.path,u.snap,r,i,a)}else{Object(g["e"])(u.source.fromServer,"Unknown source.");s=u.source.tagged||t.serverCache.isFiltered()&&!T(u.path);o=Qi(e,t,u.path,u.snap,r,i,s,a)}}else if(n.type===D.MERGE){var l=n;if(l.source.fromUser){o=Xi(e,t,l.path,l.children,r,i,a)}else{Object(g["e"])(l.source.fromServer,"Unknown source.");s=l.source.tagged||t.serverCache.isFiltered();o=ea(e,t,l.path,l.children,r,i,s,a)}}else if(n.type===D.ACK_USER_WRITE){var c=n;if(!c.revert){o=ta(e,t,c.path,c.affectedTree,r,i,a)}else{o=ra(e,t,c.path,r,i,a)}}else if(n.type===D.LISTEN_COMPLETE){o=na(e,t,n.path,r,a)}else{throw Object(g["f"])("Unknown operation type: "+n.type)}var h=a.getChanges();Gi(t,o,h);return{viewCache:o,changes:h}}function Gi(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty();var a=ti(e);if(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority())){n.push(ur(ti(t)))}}}function Ki(e,t,n,r,i,a){var o=t.eventCache;if(Ai(r,n)!=null){return t}else{var s,u;if(T(n)){Object(g["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data");if(t.serverCache.isFiltered()){var l=ni(t);var c=l instanceof R?l:R.EMPTY_NODE;var h=ji(r,c);s=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var f=Ri(r,ni(t));s=e.filter.updateFullNode(t.eventCache.getNode(),f,a)}}else{var d=w(n);if(d===".priority"){Object(g["e"])(tn(n)===1,"Can't have a priority with additional path components");var v=o.getNode();u=t.serverCache.getNode();var p=Di(r,n,v,u);if(p!=null){s=e.filter.updatePriority(v,p)}else{s=o.getNode()}}else{var _=b(n);var y;if(o.isCompleteForChild(d)){u=t.serverCache.getNode();var m=Di(r,n,o.getNode(),u);if(m!=null){y=o.getNode().getImmediateChild(d).updateChild(_,m)}else{y=o.getNode().getImmediateChild(d)}}else{y=qi(r,d,t.serverCache)}if(y!=null){s=e.filter.updateChild(o.getNode(),d,y,_,i,a)}else{s=o.getNode()}}}return Zr(t,s,o.isFullyInitialized()||T(n),e.filter.filtersNodes())}}function Qi(e,t,n,r,i,a,o,s){var u=t.serverCache;var l;var c=o?e.filter:e.filter.getIndexedFilter();if(T(n)){l=c.updateFullNode(u.getNode(),r,null)}else if(c.filtersNodes()&&!u.isFiltered()){var h=u.getNode().updateChild(n,r);l=c.updateFullNode(u.getNode(),h,null)}else{var f=w(n);if(!u.isCompleteForPath(n)&&tn(n)>1){return t}var d=b(n);var v=u.getNode().getImmediateChild(f);var p=v.updateChild(d,r);if(f===".priority"){l=c.updatePriority(u.getNode(),p)}else{l=c.updateChild(u.getNode(),f,p,d,Bi,null)}}var _=ei(t,l,u.isFullyInitialized()||T(n),c.filtersNodes());var y=new zi(i,_,a);return Ki(e,_,n,i,y,s)}function $i(e,t,n,r,i,a,o){var s=t.eventCache;var u,l;var c=new zi(i,t,a);if(T(n)){l=e.filter.updateFullNode(t.eventCache.getNode(),r,o);u=Zr(t,l,true,e.filter.filtersNodes())}else{var h=w(n);if(h===".priority"){l=e.filter.updatePriority(t.eventCache.getNode(),r);u=Zr(t,l,s.isFullyInitialized(),s.isFiltered())}else{var f=b(n);var d=s.getNode().getImmediateChild(h);var v;if(T(f)){v=r}else{var p=c.getCompleteChild(h);if(p!=null){if(nn(f)===".priority"&&p.getChild(on(f)).isEmpty()){v=p}else{v=p.updateChild(f,r)}}else{v=R.EMPTY_NODE}}if(!d.equals(v)){var _=e.filter.updateChild(s.getNode(),h,v,f,c,o);u=Zr(t,_,s.isFullyInitialized(),e.filter.filtersNodes())}else{u=t}}}return u}function Ji(e,t){return e.eventCache.isCompleteForChild(t)}function Xi(r,i,a,e,o,s,u){var l=i;e.foreach(function(e,t){var n=C(a,e);if(Ji(i,w(n))){l=$i(r,l,n,t,o,s,u)}});e.foreach(function(e,t){var n=C(a,e);if(!Ji(i,w(n))){l=$i(r,l,n,t,o,s,u)}});return l}function Zi(e,n,t){t.foreach(function(e,t){n=n.updateChild(e,t)});return n}function ea(a,o,e,t,s,u,l,c){if(o.serverCache.getNode().isEmpty()&&!o.serverCache.isFullyInitialized()){return o}var h=o;var n;if(T(e)){n=t}else{n=new A(null).setTree(e,t)}var f=o.serverCache.getNode();n.children.inorderTraversal(function(e,t){if(f.hasChild(e)){var n=o.serverCache.getNode().getImmediateChild(e);var r=Zi(a,n,t);h=Qi(a,h,new _(e),r,s,u,l,c)}});n.children.inorderTraversal(function(e,t){var n=!o.serverCache.isCompleteForChild(e)&&t.value===undefined;if(!f.hasChild(e)&&!n){var r=o.serverCache.getNode().getImmediateChild(e);var i=Zi(a,r,t);h=Qi(a,h,new _(e),i,s,u,l,c)}});return h}function ta(e,t,r,n,i,a,o){if(Ai(i,r)!=null){return t}var s=t.serverCache.isFiltered();var u=t.serverCache;if(n.value!=null){if(T(r)&&u.isFullyInitialized()||u.isCompleteForPath(r)){return Qi(e,t,r,u.getNode().getChild(r),i,a,s,o)}else if(T(r)){var l=new A(null);u.getNode().forEachChild(O,function(e,t){l=l.set(new _(e),t)});return ea(e,t,r,l,i,a,s,o)}else{return t}}else{var c=new A(null);n.foreach(function(e,t){var n=C(r,e);if(u.isCompleteForPath(n)){c=c.set(e,u.getNode().getChild(n))}});return ea(e,t,r,c,i,a,s,o)}}function na(e,t,n,r,i){var a=t.serverCache;var o=ei(t,a.getNode(),a.isFullyInitialized()||T(n),a.isFiltered());return Ki(e,o,n,r,Bi,i)}function ra(e,t,n,r,i,a){var o;if(Ai(r,n)!=null){return t}else{var s=new zi(r,t,i);var u=t.eventCache.getNode();var l;if(T(n)||w(n)===".priority"){var c;if(t.serverCache.isFullyInitialized()){c=Ri(r,ni(t))}else{var h=t.serverCache.getNode();Object(g["e"])(h instanceof R,"serverChildren would be complete if leaf node");c=ji(r,h)}c=c;l=e.filter.updateFullNode(u,c,a)}else{var f=w(n);var d=qi(r,f,t.serverCache);if(d==null&&t.serverCache.isCompleteForChild(f)){d=u.getImmediateChild(f)}if(d!=null){l=e.filter.updateChild(u,f,d,b(n),s,a)}else if(t.eventCache.getNode().hasChild(f)){l=e.filter.updateChild(u,f,R.EMPTY_NODE,b(n),s,a)}else{l=u}if(l.isEmpty()&&t.serverCache.isFullyInitialized()){o=Ri(r,ni(t));if(o.isLeafNode()){l=e.filter.updateFullNode(l,o,a)}}}o=t.serverCache.isFullyInitialized()||Ai(r,y())!=null;return Zr(t,l,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia=function(){function h(e,t){f(this,h);this.query_=e;this.eventRegistrations_=[];var n=this.query_._queryParams;var r=new dr(n.getIndex());var i=yr(n);this.processor_=Hi(i);var a=t.serverCache;var o=t.eventCache;var s=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null);var u=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null);var l=new Yr(s,a.isFullyInitialized(),r.filtersNodes());var c=new Yr(u,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=Xr(c,l);this.eventGenerator_=new Gr(this.query_)}d(h,[{key:"query",get:function e(){return this.query_}}]);return h}();function aa(e){return e.viewCache_.serverCache.getNode()}function oa(e){return ti(e.viewCache_)}function sa(e,t){var n=ni(e.viewCache_);if(n){if(e.query._queryParams.loadsAllData()||!T(t)&&!n.getImmediateChild(w(t)).isEmpty()){return n.getChild(t)}}return null}function ua(e){return e.eventRegistrations_.length===0}function la(e,t){e.eventRegistrations_.push(t)}function ca(e,t,n){var r=[];if(n){Object(g["e"])(t==null,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach(function(e){var t=e.createCancelEvent(n,i);if(t){r.push(t)}})}if(t){var a=[];for(var o=0;o<e.eventRegistrations_.length;++o){var s=e.eventRegistrations_[o];if(!s.matches(t)){a.push(s)}else if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(o+1));break}}e.eventRegistrations_=a}else{e.eventRegistrations_=[]}return r}function ha(e,t,n,r){if(t.type===D.MERGE&&t.source.queryId!==null){Object(g["e"])(ni(e.viewCache_),"We should always have a full cache before handling merges");Object(g["e"])(ti(e.viewCache_),"Missing event cache, even though we have a server cache")}var i=e.viewCache_;var a=Yi(e.processor_,i,t,n,r);Vi(e.processor_,a.viewCache);Object(g["e"])(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back");e.viewCache_=a.viewCache;return da(e,a.changes,a.viewCache.eventCache.getNode(),null)}function fa(e,t){var n=e.viewCache_.eventCache;var r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(c,function(e,t){r.push(lr(e,t))})}if(n.isFullyInitialized()){r.push(ur(n.getNode()))}return da(e,r,n.getNode(),t)}function da(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return Kr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va;var pa=d(function e(){f(this,e);this.views=new Map});function _a(e){Object(g["e"])(!va,"__referenceConstructor has already been defined");va=e}function ya(){Object(g["e"])(va,"Reference.ts has not been loaded");return va}function ma(e){return e.views.size===0}function ga(e,t,n,r){var i=t.source.queryId;if(i!==null){var a=e.views.get(i);Object(g["e"])(a!=null,"SyncTree gave us an op for an invalid query.");return ha(a,t,n,r)}else{var o=[];var s=v(e.views.values()),u;try{for(s.s();!(u=s.n()).done;){var l=u.value;o=o.concat(ha(l,t,n,r))}}catch(e){s.e(e)}finally{s.f()}return o}}function ka(e,t,n,r,i){var a=t._queryIdentifier;var o=e.views.get(a);if(!o){var s=Ri(n,i?r:null);var u=false;if(s){u=true}else if(r instanceof R){s=ji(n,r);u=false}else{s=R.EMPTY_NODE;u=false}var l=Xr(new Yr(s,u,false),new Yr(r,i,false));return new ia(t,l)}return o}function wa(e,t,n,r,i,a){var o=ka(e,t,r,i,a);if(!e.views.has(t._queryIdentifier)){e.views.set(t._queryIdentifier,o)}la(o,n);return fa(o,n)}function ba(e,t,n,r){var i=t._queryIdentifier;var a=[];var o=[];var s=Sa(e);if(i==="default"){var u=v(e.views.entries()),l;try{for(u.s();!(l=u.n()).done;){var c=B(l.value,2),h=c[0],f=c[1];o=o.concat(ca(f,n,r));if(ua(f)){e.views["delete"](h);if(!f.query._queryParams.loadsAllData()){a.push(f.query)}}}}catch(e){u.e(e)}finally{u.f()}}else{var d=e.views.get(i);if(d){o=o.concat(ca(d,n,r));if(ua(d)){e.views["delete"](i);if(!d.query._queryParams.loadsAllData()){a.push(d.query)}}}}if(s&&!Sa(e)){a.push(new(ya())(t._repo,t._path))}return{removed:a,events:o}}function Ca(e){var t=[];var n=v(e.views.values()),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(!i.query._queryParams.loadsAllData()){t.push(i)}}}catch(e){n.e(e)}finally{n.f()}return t}function Ta(e,t){var n=null;var r=v(e.views.values()),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;n=n||sa(a,t)}}catch(e){r.e(e)}finally{r.f()}return n}function Ia(e,t){var n=t._queryParams;if(n.loadsAllData()){return Pa(e)}else{var r=t._queryIdentifier;return e.views.get(r)}}function Ea(e,t){return Ia(e,t)!=null}function Sa(e){return Pa(e)!=null}function Pa(e){var t=v(e.views.values()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;if(r.query._queryParams.loadsAllData()){return r}}}catch(e){t.e(e)}finally{t.f()}return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oa;function Na(e){Object(g["e"])(!Oa,"__referenceConstructor has already been defined");Oa=e}function xa(){Object(g["e"])(Oa,"Reference.ts has not been loaded");return Oa}var Ra=1;var ja=d(function e(t){f(this,e);this.listenProvider_=t;this.syncPointTree_=new A(null);this.pendingWriteTree_=xi();this.tagToQueryMap=new Map;this.queryToTagMap=new Map});function Da(e,t,n,r,i){yi(e.pendingWriteTree_,t,n,r,i);if(!i){return[]}else{return Qa(e,new Hr(Mr(),t,n))}}function Aa(e,t,n,r){mi(e.pendingWriteTree_,t,n,r);var i=A.fromObject(n);return Qa(e,new Vr(Mr(),t,i))}function Fa(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var r=gi(e.pendingWriteTree_,t);var i=ki(e.pendingWriteTree_,t);if(!i){return[]}else{var a=new A(null);if(r.snap!=null){a=a.set(y(),true)}else{h(r.children,function(e){a=a.set(new _(e),true)})}return Qa(e,new Br(r.path,a,n))}}function qa(e,t,n){return Qa(e,new Hr(Wr(),t,n))}function La(e,t,n){var r=A.fromObject(n);return Qa(e,new Vr(Wr(),t,r))}function Ma(e,t){return Qa(e,new zr(Wr(),t))}function Wa(e,t,n){var r=to(e,n);if(r){var i=no(r);var a=i.path,o=i.queryId;var s=I(a,t);var u=new zr(Ur(o),s);return ro(e,a,u)}else{return[]}}function Ua(n,e,t,r){var i=e._path;var a=n.syncPointTree_.get(i);var o=[];if(a&&(e._queryIdentifier==="default"||Ea(a,e))){var s=ba(a,e,t,r);if(ma(a)){n.syncPointTree_=n.syncPointTree_.remove(i)}var u=s.removed;o=s.events;var l=-1!==u.findIndex(function(e){return e._queryParams.loadsAllData()});var c=n.syncPointTree_.findOnPath(i,function(e,t){return Sa(t)});if(l&&!c){var h=n.syncPointTree_.subtree(i);if(!h.isEmpty()){var f=io(h);for(var d=0;d<f.length;++d){var v=f[d],p=v.query;var _=Xa(n,v);n.listenProvider_.startListening(ao(p),Za(n,p),_.hashFn,_.onComplete)}}}if(!c&&u.length>0&&!r){if(l){var y=null;n.listenProvider_.stopListening(ao(e),y)}else{u.forEach(function(e){var t=n.queryToTagMap.get(eo(e));n.listenProvider_.stopListening(ao(e),t)})}}oo(n,u)}return o}function Ba(e,t){var n=Va(t,e),r=n.syncPoint,i=n.serverCache,a=n.writesCache,o=n.serverCacheComplete;var s=ka(r,t,a,i,o);if(!r.views.has(t._queryIdentifier)){r.views.set(t._queryIdentifier,s)}if(!t._queryParams.loadsAllData()){return Za(e,t)}return null}function za(e,t,n,r){var i=to(e,r);if(i!=null){var a=no(i);var o=a.path,s=a.queryId;var u=I(o,t);var l=new Hr(Ur(s),u,n);return ro(e,o,l)}else{return[]}}function Ha(e,t,n,r){var i=to(e,r);if(i){var a=no(i);var o=a.path,s=a.queryId;var u=I(o,t);var l=A.fromObject(n);var c=new Vr(Ur(s),u,l);return ro(e,o,c)}else{return[]}}function Va(e,t){var r=e._path;var i=null;var a=false;t.syncPointTree_.foreachOnPath(r,function(e,t){var n=I(e,r);i=i||Ta(t,n);a=a||Sa(t)});var n=t.syncPointTree_.get(r);if(!n){n=new pa;t.syncPointTree_=t.syncPointTree_.set(r,n)}else{a=a||Sa(n);i=i||Ta(n,y())}var o;if(i!=null){o=true}else{o=false;i=R.EMPTY_NODE;var s=t.syncPointTree_.subtree(r);s.foreachChild(function(e,t){var n=Ta(t,y());if(n){i=i.updateImmediateChild(e,n)}})}var u=Ea(n,e);if(!u&&!e._queryParams.loadsAllData()){var l=eo(e);Object(g["e"])(!t.queryToTagMap.has(l),"View does not exist, but we have a tag");var c=so();t.queryToTagMap.set(l,c);t.tagToQueryMap.set(c,l)}var h=_i(t.pendingWriteTree_,r);return{syncPoint:n,writesCache:h,serverCache:i,serverCacheComplete:o,foundAncestorDefaultView:a,viewAlreadyExists:u}}function Ya(e,t,n){var r=Va(t,e),i=r.syncPoint,a=r.serverCache,o=r.writesCache,s=r.serverCacheComplete,u=r.viewAlreadyExists,l=r.foundAncestorDefaultView;var c=wa(i,t,n,o,a,s);if(!u&&!l){var h=Ia(i,t);c=c.concat(uo(e,t,h))}return c}function Ga(e,i,t){var n=true;var r=e.pendingWriteTree_;var a=e.syncPointTree_.findOnPath(i,function(e,t){var n=I(e,i);var r=Ta(t,n);if(r){return r}});return Ii(r,i,a,t,n)}function Ka(e,t){var r=t._path;var i=null;e.syncPointTree_.foreachOnPath(r,function(e,t){var n=I(e,r);i=i||Ta(t,n)});var n=e.syncPointTree_.get(r);if(!n){n=new pa;e.syncPointTree_=e.syncPointTree_.set(r,n)}else{i=i||Ta(n,y())}var a=i!=null;var o=a?new Yr(i,true,false):null;var s=_i(e.pendingWriteTree_,t._path);var u=ka(n,t,s,a?o.getNode():R.EMPTY_NODE,a);return oa(u)}function Qa(e,t){return $a(t,e.syncPointTree_,null,_i(e.pendingWriteTree_,y()))}function $a(e,t,n,r){if(T(e.path)){return Ja(e,t,n,r)}else{var i=t.get(y());if(n==null&&i!=null){n=Ta(i,y())}var a=[];var o=w(e.path);var s=e.operationForChild(o);var u=t.children.get(o);if(u&&s){var l=n?n.getImmediateChild(o):null;var c=Li(r,o);a=a.concat($a(s,u,l,c))}if(i){a=a.concat(ga(i,e,r,n))}return a}}function Ja(a,e,o,s){var t=e.get(y());if(o==null&&t!=null){o=Ta(t,y())}var u=[];e.children.inorderTraversal(function(e,t){var n=o?o.getImmediateChild(e):null;var r=Li(s,e);var i=a.operationForChild(e);if(i){u=u.concat(Ja(i,t,n,r))}});if(t){u=u.concat(ga(t,a,s,o))}return u}function Xa(r,n){var i=n.query;var a=Za(r,i);return{hashFn:function e(){var t=aa(n)||R.EMPTY_NODE;return t.hash()},onComplete:function e(t){if(t==="ok"){if(a){return Wa(r,i._path,a)}else{return Ma(r,i._path)}}else{var n=De(t,i);return Ua(r,i,null,n)}}}}function Za(e,t){var n=eo(t);return e.queryToTagMap.get(n)}function eo(e){return e._path.toString()+"$"+e._queryIdentifier}function to(e,t){return e.tagToQueryMap.get(t)}function no(e){var t=e.indexOf("$");Object(g["e"])(t!==-1&&t<e.length-1,"Bad queryKey.");return{queryId:e.substr(t+1),path:new _(e.substr(0,t))}}function ro(e,t,n){var r=e.syncPointTree_.get(t);Object(g["e"])(r,"Missing sync point for query tag that we're tracking");var i=_i(e.pendingWriteTree_,t);return ga(r,n,i,null)}function io(e){return e.fold(function(e,t,n){if(t&&Sa(t)){var r=Pa(t);return[r]}else{var i=[];if(t){i=Ca(t)}h(n,function(e,t){i=i.concat(t)});return i}})}function ao(e){if(e._queryParams.loadsAllData()&&!e._queryParams.isDefault()){return new(xa())(e._repo,e._path)}else{return e}}function oo(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=eo(r);var a=e.queryToTagMap.get(i);e.queryToTagMap["delete"](i);e.tagToQueryMap["delete"](a)}}}function so(){return Ra++}function uo(e,t,n){var r=t._path;var i=Za(e,t);var a=Xa(e,n);var o=e.listenProvider_.startListening(ao(t),i,a.hashFn,a.onComplete);var s=e.syncPointTree_.subtree(r);if(i){Object(g["e"])(!Sa(s.value),"If we're adding a query, it shouldn't be shadowed")}else{var u=s.fold(function(e,t,n){if(!T(e)&&t&&Sa(t)){return[Pa(t).query]}else{var r=[];if(t){r=r.concat(Ca(t).map(function(e){return e.query}))}h(n,function(e,t){r=r.concat(t)});return r}});for(var l=0;l<u.length;++l){var c=u[l];e.listenProvider_.stopListening(ao(c),Za(e,c))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lo=function(){function r(e){f(this,r);this.node_=e}d(r,[{key:"getImmediateChild",value:function e(t){var n=this.node_.getImmediateChild(t);return new r(n)}},{key:"node",value:function e(){return this.node_}}]);return r}();var co=function(){function r(e,t){f(this,r);this.syncTree_=e;this.path_=t}d(r,[{key:"getImmediateChild",value:function e(t){var n=C(this.path_,t);return new r(this.syncTree_,n)}},{key:"node",value:function e(){return Ga(this.syncTree_,this.path_)}}]);return r}();var ho=function e(t){t=t||{};t["timestamp"]=t["timestamp"]||(new Date).getTime();return t};var fo=function e(t,n,r){if(!t||E(t)!=="object"){return t}Object(g["e"])(".sv"in t,"Unexpected leaf node or priority contents");if(typeof t[".sv"]==="string"){return vo(t[".sv"],n,r)}else if(E(t[".sv"])==="object"){return po(t[".sv"],n)}else{Object(g["e"])(false,"Unexpected server value: "+JSON.stringify(t,null,2))}};var vo=function e(t,n,r){switch(t){case"timestamp":return r["timestamp"];default:Object(g["e"])(false,"Unexpected server value: "+t)}};var po=function e(t,n,r){if(!t.hasOwnProperty("increment")){Object(g["e"])(false,"Unexpected server value: "+JSON.stringify(t,null,2))}var i=t["increment"];if(typeof i!=="number"){Object(g["e"])(false,"Unexpected increment value: "+i)}var a=n.node();Object(g["e"])(a!==null&&typeof a!=="undefined","Expected ChildrenNode.EMPTY_NODE for nulls");if(!a.isLeafNode()){return i}var o=a;var s=o.getValue();if(typeof s!=="number"){return i}return s+i};var _o=function e(t,n,r,i){return mo(n,new co(r,t),i)};var yo=function e(t,n,r){return mo(t,new lo(n),r)};function mo(e,r,i){var t=e.getPriority().val();var n=fo(t,r.getImmediateChild(".priority"),i);var a;if(e.isLeafNode()){var o=e;var s=fo(o.getValue(),r,i);if(s!==o.getValue()||n!==o.getPriority().val()){return new Fn(s,j(n))}else{return e}}else{var u=e;a=u;if(n!==u.getPriority().val()){a=a.updatePriority(new Fn(n))}u.forEachChild(c,function(e,t){var n=mo(t,r.getImmediateChild(e),i);if(n!==t){a=a.updateImmediateChild(e,n)}});return a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var go=d(function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{children:{},childCount:0};f(this,e);this.name=t;this.parent=n;this.node=r});function ko(e,t){var n=t instanceof _?t:new _(t);var r=e,i=w(n);while(i!==null){var a=Object(g["C"])(r.node.children,i)||{children:{},childCount:0};r=new go(i,r,a);n=b(n);i=w(n)}return r}function wo(e){return e.node.value}function bo(e,t){e.node.value=t;Oo(e)}function Co(e){return e.node.childCount>0}function To(e){return wo(e)===undefined&&!Co(e)}function Io(n,r){h(n.node.children,function(e,t){r(new go(e,n,t))})}function Eo(e,t,n,r){if(n&&!r){t(e)}Io(e,function(e){Eo(e,t,true,r)});if(n&&r){t(e)}}function So(e,t,n){var r=n?e:e.parent;while(r!==null){if(t(r)){return true}r=r.parent}return false}function Po(e){return new _(e.parent===null?e.name:Po(e.parent)+"/"+e.name)}function Oo(e){if(e.parent!==null){No(e.parent,e.name,e)}}function No(e,t,n){var r=To(n);var i=Object(g["j"])(e.node.children,t);if(r&&i){delete e.node.children[t];e.node.childCount--;Oo(e)}else if(!r&&!i){e.node.children[t]=n.node;e.node.childCount++;Oo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xo=/[\[\].#$\/\u0000-\u001F\u007F]/;var Ro=/[\[\].#$\u0000-\u001F\u007F]/;var jo=10*1024*1024;var Do=function e(t){return typeof t==="string"&&t.length!==0&&!xo.test(t)};var Ao=function e(t){return typeof t==="string"&&t.length!==0&&!Ro.test(t)};var Fo=function e(t){if(t){t=t.replace(/^\/*\.info(\/|$)/,"/")}return Ao(t)};var qo=function e(t){return t===null||typeof t==="string"||typeof t==="number"&&!Te(t)||t&&E(t)==="object"&&Object(g["j"])(t,".sv")};var F=function e(t,n,r,i){if(i&&n===undefined){return}Lo(Object(g["p"])(t,"value"),n,r)};var Lo=function n(r,e,t){var i=t instanceof _?new ln(t,r):t;if(e===undefined){throw new Error(r+"contains undefined "+dn(i))}if(typeof e==="function"){throw new Error(r+"contains a function "+dn(i)+" with contents = "+e.toString())}if(Te(e)){throw new Error(r+"contains "+e.toString()+" "+dn(i))}if(typeof e==="string"&&e.length>jo/3&&Object(g["D"])(e)>jo){throw new Error(r+"contains a string greater than "+jo+" utf8 bytes "+dn(i)+" ('"+e.substring(0,50)+"...')")}if(e&&E(e)==="object"){var a=false;var o=false;h(e,function(e,t){if(e===".value"){a=true}else if(e!==".priority"&&e!==".sv"){o=true;if(!Do(e)){throw new Error(r+" contains an invalid key ("+e+") "+dn(i)+".  Keys must be non-empty strings "+'and can\'t contain ".", "#", "$", "/", "[", or "]"')}}cn(i,e);n(r,t,i);hn(i)});if(a&&o){throw new Error(r+' contains ".value" child '+dn(i)+" in addition to actual children.")}}};var Mo=function e(t,n){var r,i;for(r=0;r<n.length;r++){i=n[r];var a=an(i);for(var o=0;o<a.length;o++){if(a[o]===".priority"&&o===a.length-1);else if(!Do(a[o])){throw new Error(t+"contains an invalid key ("+a[o]+") in path "+i.toString()+". Keys must be non-empty strings "+'and can\'t contain ".", "#", "$", "/", "[", or "]"')}}}n.sort(sn);var s=null;for(r=0;r<n.length;r++){i=n[r];if(s!==null&&S(s,i)){throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString())}s=i}};var Wo=function e(t,n,r,i){if(i&&n===undefined){return}var a=Object(g["p"])(t,"values");if(!(n&&E(n)==="object")||Array.isArray(n)){throw new Error(a+" must be an object containing the children to replace.")}var o=[];h(n,function(e,t){var n=new _(e);Lo(a,t,C(r,n));if(nn(n)===".priority"){if(!qo(t)){throw new Error(a+"contains an invalid value for '"+n.toString()+"', which must be a valid "+"Firebase priority (a string, finite number, server value, or null).")}}o.push(n)});Mo(a,o)};var Uo=function e(t,n,r){if(r&&n===undefined){return}if(Te(n)){throw new Error(Object(g["p"])(t,"priority")+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, "+"server value, or null).")}if(!qo(n)){throw new Error(Object(g["p"])(t,"priority")+"must be a valid Firebase priority "+"(a string, finite number, server value, or null).")}};var Bo=function e(t,n,r,i){if(i&&r===undefined){return}if(!Do(r)){throw new Error(Object(g["p"])(t,n)+'was an invalid key = "'+r+'".  Firebase keys must be non-empty strings and '+'can\'t contain ".", "#", "$", "/", "[", or "]").')}};var zo=function e(t,n,r,i){if(i&&r===undefined){return}if(!Ao(r)){throw new Error(Object(g["p"])(t,n)+'was an invalid path = "'+r+'". Paths must be non-empty strings and '+'can\'t contain ".", "#", "$", "[", or "]"')}};var Ho=function e(t,n,r,i){if(r){r=r.replace(/^\/*\.info(\/|$)/,"/")}zo(t,n,r,i)};var q=function e(t,n){if(w(n)===".info"){throw new Error(t+" failed = Can't modify data under /.info/")}};var Vo=function e(t,n){var r=n.path.toString();if(!(typeof n.repoInfo.host==="string")||n.repoInfo.host.length===0||!Do(n.repoInfo.namespace)&&n.repoInfo.host.split(":")[0]!=="localhost"||r.length!==0&&!Fo(r)){throw new Error(Object(g["p"])(t,"url")+"must be a valid firebase URL and "+'the path can\'t contain ".", "#", "$", "[", or "]".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yo=d(function e(){f(this,e);this.eventLists_=[];this.recursionDepth_=0});function Go(e,t){var n=null;for(var r=0;r<t.length;r++){var i=t[r];var a=i.getPath();if(n!==null&&!un(a,n.path)){e.eventLists_.push(n);n=null}if(n===null){n={events:[],path:a}}n.events.push(i)}if(n){e.eventLists_.push(n)}}function Ko(e,t,n){Go(e,n);Qo(e,function(e){return un(e,t)})}function L(e,t,n){Go(e,n);Qo(e,function(e){return S(e,t)||S(t,e)})}function Qo(e,t){e.recursionDepth_++;var n=true;for(var r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i){var a=i.path;if(t(a)){$o(e.eventLists_[r]);e.eventLists_[r]=null}else{n=false}}}if(n){e.eventLists_=[]}e.recursionDepth_--}function $o(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(n!==null){e.events[t]=null;var r=n.getEventRunner();if(me){m("event: "+n.toString())}Me(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jo="repo_interrupt";var Xo=25;var Zo=function(){function i(e,t,n,r){f(this,i);this.repoInfo_=e;this.forceRestClient_=t;this.authTokenProvider_=n;this.appCheckProvider_=r;this.dataUpdateCount=0;this.statsListener_=null;this.eventQueue_=new Yo;this.nextWriteId_=1;this.interceptServerDataCallback_=null;this.onDisconnect_=Or();this.transactionQueueTree_=new go;this.persistentConnection_=null;this.key=this.repoInfo_.toURLString()}d(i,[{key:"toString",value:function e(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]);return i}();function es(s,e,t){s.stats_=ut(s.repoInfo_);if(s.forceRestClient_||We()){s.server_=new Sr(s.repoInfo_,function(e,t,n,r){rs(s,e,t,n,r)},s.authTokenProvider_,s.appCheckProvider_);setTimeout(function(){return is(s,true)},0)}else{if(typeof t!=="undefined"&&t!==null){if(E(t)!=="object"){throw new Error("Only objects are supported for option databaseAuthVariableOverride")}try{Object(g["F"])(t)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}s.persistentConnection_=new Cn(s.repoInfo_,e,function(e,t,n,r){rs(s,e,t,n,r)},function(e){is(s,e)},function(e){as(s,e)},s.authTokenProvider_,s.appCheckProvider_,t);s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(function(e){s.server_.refreshAuthToken(e)});s.appCheckProvider_.addTokenChangeListener(function(e){s.server_.refreshAppCheckToken(e.token)});s.statsReporter_=lt(s.repoInfo_,function(){return new Lr(s.stats_,s.server_)});s.infoData_=new Pr;s.infoSyncTree_=new ja({startListening:function e(t,n,r,i){var a=[];var o=s.infoData_.getNode(t._path);if(!o.isEmpty()){a=qa(s.infoSyncTree_,t._path,o);setTimeout(function(){i("ok")},0)}return a},stopListening:function e(){}});os(s,"connected",false);s.serverSyncTree_=new ja({startListening:function e(r,t,n,i){s.server_.listen(r,n,t,function(e,t){var n=i(e,t);L(s.eventQueue_,r._path,n)});return[]},stopListening:function e(t,n){s.server_.unlisten(t,n)}})}function ts(e){var t=e.infoData_.getNode(new _(".info/serverTimeOffset"));var n=t.val()||0;return(new Date).getTime()+n}function ns(e){return ho({timestamp:ts(e)})}function rs(e,t,n,r,i){e.dataUpdateCount++;var a=new _(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i){if(r){var s=Object(g["A"])(n,function(e){return j(e)});o=Ha(e.serverSyncTree_,a,s,i)}else{var u=j(n);o=za(e.serverSyncTree_,a,u,i)}}else if(r){var l=Object(g["A"])(n,function(e){return j(e)});o=La(e.serverSyncTree_,a,l)}else{var c=j(n);o=qa(e.serverSyncTree_,a,c)}var h=a;if(o.length>0){h=Es(e,a)}L(e.eventQueue_,h,o)}function is(e,t){os(e,"connected",t);if(t===false){hs(e)}}function as(n,e){h(e,function(e,t){os(n,e,t)})}function os(e,t,n){var r=new _("/.info/"+t);var i=j(n);e.infoData_.updateSnapshot(r,i);var a=qa(e.infoSyncTree_,r,i);L(e.eventQueue_,r,a)}function ss(e){return e.nextWriteId_++}function us(i,a){var e=Ka(i.serverSyncTree_,a);if(e!=null){return Promise.resolve(e)}return i.server_.get(a).then(function(e){var t=j(e).withIndex(a._queryParams.getIndex());if(a._queryParams.loadsAllData()){qa(i.serverSyncTree_,a._path,t)}else{var n=Ba(i.serverSyncTree_,a);za(i.serverSyncTree_,a._path,t,n)}var r=Ua(i.serverSyncTree_,a,null);if(r.length>0){ks(i,"unexpected cancel events in repoGetValue")}return t},function(e){ks(i,"get for query "+Object(g["F"])(a)+" failed: "+e);return Promise.reject(new Error(e))})}function ls(i,a,e,t,o){ks(i,"set",{path:a.toString(),value:e,priority:t});var n=ns(i);var r=j(e,t);var s=Ga(i.serverSyncTree_,a);var u=yo(r,s,n);var l=ss(i);var c=Da(i.serverSyncTree_,a,u,l,true);Go(i.eventQueue_,c);i.server_.put(a.toString(),r.val(true),function(e,t){var n=e==="ok";if(!n){k("set at "+a+" failed: "+e)}var r=Fa(i.serverSyncTree_,l,!n);L(i.eventQueue_,a,r);ws(i,o,e,t)});var h=Rs(i,a);Es(i,h);L(i.eventQueue_,h,[])}function cs(a,o,e,s){ks(a,"update",{path:o.toString(),value:e});var n=true;var r=ns(a);var i={};h(e,function(e,t){n=false;i[e]=_o(C(o,e),j(t),a.serverSyncTree_,r)});if(!n){var u=ss(a);var t=Aa(a.serverSyncTree_,o,i,u);Go(a.eventQueue_,t);a.server_.merge(o.toString(),e,function(e,t){var n=e==="ok";if(!n){k("update at "+o+" failed: "+e)}var r=Fa(a.serverSyncTree_,u,!n);var i=r.length>0?Es(a,o):o;L(a.eventQueue_,i,r);ws(a,s,e,t)});h(e,function(e){var t=Rs(a,C(o,e));Es(a,t)});L(a.eventQueue_,o,[])}else{m("update() called with empty data.  Don't do anything.");ws(a,s,"ok",undefined)}}function hs(r){ks(r,"onDisconnectEvents");var i=ns(r);var a=Or();Rr(r.onDisconnect_,y(),function(e,t){var n=_o(e,t,r.serverSyncTree_,i);Nr(a,e,n)});var o=[];Rr(a,y(),function(e,t){o=o.concat(qa(r.serverSyncTree_,e,t));var n=Rs(r,e);Es(r,n)});r.onDisconnect_=Or();L(r.eventQueue_,y(),o)}function fs(n,r,i){n.server_.onDisconnectCancel(r.toString(),function(e,t){if(e==="ok"){xr(n.onDisconnect_,r)}ws(n,i,e,t)})}function ds(n,r,e,i){var a=j(e);n.server_.onDisconnectPut(r.toString(),a.val(true),function(e,t){if(e==="ok"){Nr(n.onDisconnect_,r,a)}ws(n,i,e,t)})}function vs(n,r,e,t,i){var a=j(e,t);n.server_.onDisconnectPut(r.toString(),a.val(true),function(e,t){if(e==="ok"){Nr(n.onDisconnect_,r,a)}ws(n,i,e,t)})}function ps(r,i,n,a){if(Object(g["t"])(n)){m("onDisconnect().update() called with empty data.  Don't do anything.");ws(r,a,"ok",undefined);return}r.server_.onDisconnectMerge(i.toString(),n,function(e,t){if(e==="ok"){h(n,function(e,t){var n=j(t);Nr(r.onDisconnect_,C(i,e),n)})}ws(r,a,e,t)})}function _s(e,t,n){var r;if(w(t._path)===".info"){r=Ya(e.infoSyncTree_,t,n)}else{r=Ya(e.serverSyncTree_,t,n)}Ko(e.eventQueue_,t._path,r)}function ys(e,t,n){var r;if(w(t._path)===".info"){r=Ua(e.infoSyncTree_,t,n)}else{r=Ua(e.serverSyncTree_,t,n)}Ko(e.eventQueue_,t._path,r)}function ms(e){if(e.persistentConnection_){e.persistentConnection_.interrupt(Jo)}}function gs(e){if(e.persistentConnection_){e.persistentConnection_.resume(Jo)}}function ks(e){var t="";if(e.persistentConnection_){t=e.persistentConnection_.id+":"}for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++){r[i-1]=arguments[i]}m.apply(void 0,[t].concat(r))}function ws(e,r,i,a){if(r){Me(function(){if(i==="ok"){r(null)}else{var e=(i||"error").toUpperCase();var t=e;if(a){t+=": "+a}var n=new Error(t);n.code=e;r(n)}})}}function bs(e,t,n,r,i,a){ks(e,"transaction on "+t);var o={path:t,update:n,onComplete:r,status:null,order:pe(),applyLocally:a,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null};var s=Cs(e,t,undefined);o.currentInputSnapshot=s;var u=o.update(s.val());if(u===undefined){o.unwatcher();o.currentOutputSnapshotRaw=null;o.currentOutputSnapshotResolved=null;if(o.onComplete){o.onComplete(null,false,o.currentInputSnapshot)}}else{Lo("transaction failed: Data returned ",u,o.path);o.status=0;var l=ko(e.transactionQueueTree_,t);var c=wo(l)||[];c.push(o);bo(l,c);var h;if(E(u)==="object"&&u!==null&&Object(g["j"])(u,".priority")){h=Object(g["C"])(u,".priority");Object(g["e"])(qo(h),"Invalid priority returned by transaction. "+"Priority must be a valid string, finite number, server value, or null.")}else{var f=Ga(e.serverSyncTree_,t)||R.EMPTY_NODE;h=f.getPriority().val()}var d=ns(e);var v=j(u,h);var p=yo(v,s,d);o.currentOutputSnapshotRaw=v;o.currentOutputSnapshotResolved=p;o.currentWriteId=ss(e);var _=Da(e.serverSyncTree_,t,p,o.currentWriteId,o.applyLocally);L(e.eventQueue_,t,_);Ts(e,e.transactionQueueTree_)}}function Cs(e,t,n){return Ga(e.serverSyncTree_,t,n)||R.EMPTY_NODE}function Ts(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t.transactionQueueTree_;if(!e){xs(t,e)}if(wo(e)){var n=Os(t,e);Object(g["e"])(n.length>0,"Sending zero length transaction queue");var r=n.every(function(e){return e.status===0});if(r){Is(t,Po(e),n)}}else if(Co(e)){Io(e,function(e){Ts(t,e)})}}function Is(u,l,c){var e=c.map(function(e){return e.currentWriteId});var t=Cs(u,l,e);var n=t;var r=t.hash();for(var i=0;i<c.length;i++){var a=c[i];Object(g["e"])(a.status===0,"tryToSendTransactionQueue_: items in queue should all be run.");a.status=1;a.retryCount++;var o=I(l,a.path);n=n.updateChild(o,a.currentOutputSnapshotRaw)}var s=n.val(true);var h=l;u.server_.put(h.toString(),s,function(e){ks(u,"transaction put response",{path:h.toString(),status:e});var n=[];if(e==="ok"){var r=[];var t=function e(t){c[t].status=2;n=n.concat(Fa(u.serverSyncTree_,c[t].currentWriteId));if(c[t].onComplete){r.push(function(){return c[t].onComplete(null,true,c[t].currentOutputSnapshotResolved)})}c[t].unwatcher()};for(var i=0;i<c.length;i++){t(i)}xs(u,ko(u.transactionQueueTree_,l));Ts(u,u.transactionQueueTree_);L(u.eventQueue_,l,n);for(var a=0;a<r.length;a++){Me(r[a])}}else{if(e==="datastale"){for(var o=0;o<c.length;o++){if(c[o].status===3){c[o].status=4}else{c[o].status=0}}}else{k("transaction at "+h.toString()+" failed: "+e);for(var s=0;s<c.length;s++){c[s].status=4;c[s].abortReason=e}}Es(u,l)}},r)}function Es(e,t){var n=Ps(e,t);var r=Po(n);var i=Os(e,n);Ss(e,i,r);return r}function Ss(d,v,p){if(v.length===0){return}var _=[];var y=[];var e=v.filter(function(e){return e.status===0});var m=e.map(function(e){return e.currentWriteId});var t=function e(t){var n=v[t];var r=I(p,n.path);var i=false,a=void 0;Object(g["e"])(r!==null,"rerunTransactionsUnderNode_: relativePath should not be null.");if(n.status===4){i=true;a=n.abortReason;y=y.concat(Fa(d.serverSyncTree_,n.currentWriteId,true))}else if(n.status===0){if(n.retryCount>=Xo){i=true;a="maxretry";y=y.concat(Fa(d.serverSyncTree_,n.currentWriteId,true))}else{var o=Cs(d,n.path,m);n.currentInputSnapshot=o;var s=v[t].update(o.val());if(s!==undefined){Lo("transaction failed: Data returned ",s,n.path);var u=j(s);var l=E(s)==="object"&&s!=null&&Object(g["j"])(s,".priority");if(!l){u=u.updatePriority(o.getPriority())}var c=n.currentWriteId;var h=ns(d);var f=yo(u,o,h);n.currentOutputSnapshotRaw=u;n.currentOutputSnapshotResolved=f;n.currentWriteId=ss(d);m.splice(m.indexOf(c),1);y=y.concat(Da(d.serverSyncTree_,n.path,f,n.currentWriteId,n.applyLocally));y=y.concat(Fa(d.serverSyncTree_,c,true))}else{i=true;a="nodata";y=y.concat(Fa(d.serverSyncTree_,n.currentWriteId,true))}}}L(d.eventQueue_,p,y);y=[];if(i){v[t].status=2;(function(e){setTimeout(e,Math.floor(0))})(v[t].unwatcher);if(v[t].onComplete){if(a==="nodata"){_.push(function(){return v[t].onComplete(null,false,v[t].currentInputSnapshot)})}else{_.push(function(){return v[t].onComplete(new Error(a),false,null)})}}}};for(var n=0;n<v.length;n++){t(n)}xs(d,d.transactionQueueTree_);for(var r=0;r<_.length;r++){Me(_[r])}Ts(d,d.transactionQueueTree_)}function Ps(e,t){var n;var r=e.transactionQueueTree_;n=w(t);while(n!==null&&wo(r)===undefined){r=ko(r,n);t=b(t);n=w(t)}return r}function Os(e,t){var n=[];Ns(e,t,n);n.sort(function(e,t){return e.order-t.order});return n}function Ns(t,e,n){var r=wo(e);if(r){for(var i=0;i<r.length;i++){n.push(r[i])}}Io(e,function(e){Ns(t,e,n)})}function xs(t,e){var n=wo(e);if(n){var r=0;for(var i=0;i<n.length;i++){if(n[i].status!==2){n[r]=n[i];r++}}n.length=r;bo(e,n.length>0?n:undefined)}Io(e,function(e){xs(t,e)})}function Rs(t,e){var n=Po(Ps(t,e));var r=ko(t.transactionQueueTree_,e);So(r,function(e){js(t,e)});js(t,r);Eo(r,function(e){js(t,e)});return n}function js(e,t){var n=wo(t);if(n){var r=[];var i=[];var a=-1;for(var o=0;o<n.length;o++){if(n[o].status===3);else if(n[o].status===1){Object(g["e"])(a===o-1,"All SENT items should be at beginning of queue.");a=o;n[o].status=3;n[o].abortReason="set"}else{Object(g["e"])(n[o].status===0,"Unexpected transaction status in abort");n[o].unwatcher();i=i.concat(Fa(e.serverSyncTree_,n[o].currentWriteId,true));if(n[o].onComplete){r.push(n[o].onComplete.bind(null,new Error("set"),false,null))}}}if(a===-1){bo(t,undefined)}else{n.length=a+1}L(e.eventQueue_,Po(t),i);for(var s=0;s<r.length;s++){Me(r[s])}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){var t="";var n=e.split("/");for(var r=0;r<n.length;r++){if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}}return t}function As(e){var t={};if(e.charAt(0)==="?"){e=e.substring(1)}var n=v(e.split("&")),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(i.length===0){continue}var a=i.split("=");if(a.length===2){t[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}else{k("Invalid query segment '".concat(i,"' in query '").concat(e,"'"))}}}catch(e){n.e(e)}finally{n.f()}return t}var Fs=function e(t,n){var r=qs(t),i=r.namespace;if(r.domain==="firebase.com"){p(r.host+" is no longer supported. "+"Please use <YOUR FIREBASE>.firebaseio.com instead")}if((!i||i==="undefined")&&r.domain!=="localhost"){p("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com")}if(!r.secure){Ce()}var a=r.scheme==="ws"||r.scheme==="wss";return{repoInfo:new nt(r.host,r.secure,i,a,n,"",i!==r.subdomain),path:new _(r.pathString)}};var qs=function e(t){var n="",r="",i="",a="",o="";var s=true,u="https",l=443;if(typeof t==="string"){var c=t.indexOf("//");if(c>=0){u=t.substring(0,c-1);t=t.substring(c+2)}var h=t.indexOf("/");if(h===-1){h=t.length}var f=t.indexOf("?");if(f===-1){f=t.length}n=t.substring(0,Math.min(h,f));if(h<f){a=Ds(t.substring(h,f))}var d=As(t.substring(Math.min(t.length,f)));c=n.indexOf(":");if(c>=0){s=u==="https"||u==="wss";l=parseInt(n.substring(c+1),10)}else{c=n.length}var v=n.slice(0,c);if(v.toLowerCase()==="localhost"){r="localhost"}else if(v.split(".").length<=2){r=v}else{var p=n.indexOf(".");i=n.substring(0,p).toLowerCase();r=n.substring(p+1);o=i}if("ns"in d){o=d["ns"]}}return{host:n,port:l,domain:r,subdomain:i,secure:s,scheme:u,pathString:a,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ls=function(){function i(e,t,n,r){f(this,i);this.eventType=e;this.eventRegistration=t;this.snapshot=n;this.prevName=r}d(i,[{key:"getPath",value:function e(){var t=this.snapshot.ref;if(this.eventType==="value"){return t._path}else{return t.parent._path}}},{key:"getEventType",value:function e(){return this.eventType}},{key:"getEventRunner",value:function e(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function e(){return this.getPath().toString()+":"+this.eventType+":"+Object(g["F"])(this.snapshot.exportVal())}}]);return i}();var Ms=function(){function r(e,t,n){f(this,r);this.eventRegistration=e;this.error=t;this.path=n}d(r,[{key:"getPath",value:function e(){return this.path}},{key:"getEventType",value:function e(){return"cancel"}},{key:"getEventRunner",value:function e(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function e(){return this.path.toString()+":cancel"}}]);return r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ws=function(){function n(e,t){f(this,n);this.snapshotCallback=e;this.cancelCallback=t}d(n,[{key:"onValue",value:function e(t,n){this.snapshotCallback.call(null,t,n)}},{key:"onCancel",value:function e(t){Object(g["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback");return this.cancelCallback.call(null,t)}},{key:"hasCancelCallback",get:function e(){return!!this.cancelCallback}},{key:"matches",value:function e(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==undefined&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}]);return n}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Us=function(){function n(e,t){f(this,n);this._repo=e;this._path=t}d(n,[{key:"cancel",value:function e(){var t=new g["a"];fs(this._repo,this._path,t.wrapCallback(function(){}));return t.promise}},{key:"remove",value:function e(){q("OnDisconnect.remove",this._path);var t=new g["a"];ds(this._repo,this._path,null,t.wrapCallback(function(){}));return t.promise}},{key:"set",value:function e(t){q("OnDisconnect.set",this._path);F("OnDisconnect.set",t,this._path,false);var n=new g["a"];ds(this._repo,this._path,t,n.wrapCallback(function(){}));return n.promise}},{key:"setWithPriority",value:function e(t,n){q("OnDisconnect.setWithPriority",this._path);F("OnDisconnect.setWithPriority",t,this._path,false);Uo("OnDisconnect.setWithPriority",n,false);var r=new g["a"];vs(this._repo,this._path,t,n,r.wrapCallback(function(){}));return r.promise}},{key:"update",value:function e(t){q("OnDisconnect.update",this._path);Wo("OnDisconnect.update",t,this._path,false);var n=new g["a"];ps(this._repo,this._path,t,n.wrapCallback(function(){}));return n.promise}}]);return n}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var a=function(){function a(e,t,n,r){f(this,a);this._repo=e;this._path=t;this._queryParams=n;this._orderByCalled=r}d(a,[{key:"key",get:function e(){if(T(this._path)){return null}else{return nn(this._path)}}},{key:"ref",get:function e(){return new M(this._repo,this._path)}},{key:"_queryIdentifier",get:function e(){var t=Er(this._queryParams);var n=Oe(t);return n==="{}"?"default":n}},{key:"_queryObject",get:function e(){return Er(this._queryParams)}},{key:"isEqual",value:function e(t){t=Object(g["q"])(t);if(!(t instanceof a)){return false}var n=this._repo===t._repo;var r=un(this._path,t._path);var i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function e(){return this.toString()}},{key:"toString",value:function e(){return this._repo.toString()+rn(this._path)}}]);return a}();function Bs(e,t){if(e._orderByCalled===true){throw new Error(t+": You can't combine multiple orderBy calls.")}}function zs(e){var t=null;var n=null;if(e.hasStart()){t=e.getIndexStartValue()}if(e.hasEnd()){n=e.getIndexEndValue()}if(e.getIndex()===O){var r="Query: When ordering by key, you may only pass one argument to "+"startAt(), endAt(), or equalTo().";var i="Query: When ordering by key, the argument passed to startAt(), startAfter(), "+"endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){var a=e.getIndexStartName();if(a!==u){throw new Error(r)}else if(typeof t!=="string"){throw new Error(i)}}if(e.hasEnd()){var o=e.getIndexEndName();if(o!==l){throw new Error(r)}else if(typeof n!=="string"){throw new Error(i)}}}else if(e.getIndex()===c){if(t!=null&&!qo(t)||n!=null&&!qo(n)){throw new Error("Query: When ordering by priority, the first argument passed to startAt(), "+"startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value "+"(null, a number, or a string).")}}else{Object(g["e"])(e.getIndex()instanceof Xn||e.getIndex()===er,"unknown index type.");if(t!=null&&E(t)==="object"||n!=null&&E(n)==="object"){throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or "+"equalTo() cannot be an object.")}}}function Hs(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit()){throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use "+"limitToFirst() or limitToLast() instead.")}}var M=function(e){o(r,e);var n=s(r);function r(e,t){f(this,r);return n.call(this,e,t,new _r,false)}d(r,[{key:"parent",get:function e(){var t=on(this._path);return t===null?null:new r(this._repo,t)}},{key:"root",get:function e(){var t=this;while(t.parent!==null){t=t.parent}return t}}]);return r}(a);var Vs=function(){function i(e,t,n){f(this,i);this._node=e;this.ref=t;this._index=n}d(i,[{key:"priority",get:function e(){return this._node.getPriority().val()}},{key:"key",get:function e(){return this.ref.key}},{key:"size",get:function e(){return this._node.numChildren()}},{key:"child",value:function e(t){var n=new _(t);var r=Ks(this.ref,t);return new i(this._node.getChild(n),r,c)}},{key:"exists",value:function e(){return!this._node.isEmpty()}},{key:"exportVal",value:function e(){return this._node.val(true)}},{key:"forEach",value:function e(n){var r=this;if(this._node.isLeafNode()){return false}var t=this._node;return!!t.forEachChild(this._index,function(e,t){return n(new i(t,Ks(r.ref,e),c))})}},{key:"hasChild",value:function e(t){var n=new _(t);return!this._node.getChild(n).isEmpty()}},{key:"hasChildren",value:function e(){if(this._node.isLeafNode()){return false}else{return!this._node.isEmpty()}}},{key:"toJSON",value:function e(){return this.exportVal()}},{key:"val",value:function e(){return this._node.val()}}]);return i}();function Ys(e,t){e=Object(g["q"])(e);e._checkNotDeleted("ref");return t!==undefined?Ks(e._root,t):e._root}function Gs(e,t){e=Object(g["q"])(e);e._checkNotDeleted("refFromURL");var n=Fs(t,e._repo.repoInfo_.nodeAdmin);Vo("refFromURL",n);var r=n.repoInfo;if(!e._repo.repoInfo_.isCustomHost()&&r.host!==e._repo.repoInfo_.host){p("refFromURL"+": Host name does not match the current database: "+"(found "+r.host+" but expected "+e._repo.repoInfo_.host+")")}return Ys(e,n.path.toString())}function Ks(e,t){e=Object(g["q"])(e);if(w(e._path)===null){Ho("child","path",t,false)}else{zo("child","path",t,false)}return new M(e._repo,C(e._path,t))}function Qs(e){e=Object(g["q"])(e);return new Us(e._repo,e._path)}function $s(e,t){e=Object(g["q"])(e);q("push",e._path);F("push",t,e._path,true);var n=ts(e._repo);var r=ar(n);var i=Ks(e,r);var a=Ks(e,r);var o;if(t!=null){o=Xs(a,t).then(function(){return a})}else{o=Promise.resolve(a)}i.then=o.then.bind(o);i["catch"]=o.then.bind(o,undefined);return i}function Js(e){q("remove",e._path);return Xs(e,null)}function Xs(e,t){e=Object(g["q"])(e);q("set",e._path);F("set",t,e._path,false);var n=new g["a"];ls(e._repo,e._path,t,null,n.wrapCallback(function(){}));return n.promise}function Zs(e,t){e=Object(g["q"])(e);q("setPriority",e._path);Uo("setPriority",t,false);var n=new g["a"];ls(e._repo,C(e._path,".priority"),t,null,n.wrapCallback(function(){}));return n.promise}function eu(e,t,n){q("setWithPriority",e._path);F("setWithPriority",t,e._path,false);Uo("setWithPriority",n,false);if(e.key===".length"||e.key===".keys"){throw"setWithPriority failed: "+e.key+" is a read-only object."}var r=new g["a"];ls(e._repo,e._path,t,n,r.wrapCallback(function(){}));return r.promise}function tu(e,t){Wo("update",t,e._path,false);var n=new g["a"];cs(e._repo,e._path,t,n.wrapCallback(function(){}));return n.promise}function nu(t){t=Object(g["q"])(t);return us(t._repo,t).then(function(e){return new Vs(e,new M(t._repo,t._path),t._queryParams.getIndex())})}var ru=function(){function n(e){f(this,n);this.callbackContext=e}d(n,[{key:"respondsTo",value:function e(t){return t==="value"}},{key:"createEvent",value:function e(t,n){var r=n._queryParams.getIndex();return new Ls("value",this,new Vs(t.snapshotNode,new M(n._repo,n._path),r))}},{key:"getEventRunner",value:function e(t){var n=this;if(t.getEventType()==="cancel"){return function(){return n.callbackContext.onCancel(t.error)}}else{return function(){return n.callbackContext.onValue(t.snapshot,null)}}}},{key:"createCancelEvent",value:function e(t,n){if(this.callbackContext.hasCancelCallback){return new Ms(this,t,n)}else{return null}}},{key:"matches",value:function e(t){if(!(t instanceof n)){return false}else if(!t.callbackContext||!this.callbackContext){return true}else{return t.callbackContext.matches(this.callbackContext)}}},{key:"hasAnyCallback",value:function e(){return this.callbackContext!==null}}]);return n}();var iu=function(){function n(e,t){f(this,n);this.eventType=e;this.callbackContext=t}d(n,[{key:"respondsTo",value:function e(t){var n=t==="children_added"?"child_added":t;n=n==="children_removed"?"child_removed":n;return this.eventType===n}},{key:"createCancelEvent",value:function e(t,n){if(this.callbackContext.hasCancelCallback){return new Ms(this,t,n)}else{return null}}},{key:"createEvent",value:function e(t,n){Object(g["e"])(t.childName!=null,"Child events should have a childName.");var r=Ks(new M(n._repo,n._path),t.childName);var i=n._queryParams.getIndex();return new Ls(t.type,this,new Vs(t.snapshotNode,r,i),t.prevName)}},{key:"getEventRunner",value:function e(t){var n=this;if(t.getEventType()==="cancel"){return function(){return n.callbackContext.onCancel(t.error)}}else{return function(){return n.callbackContext.onValue(t.snapshot,t.prevName)}}}},{key:"matches",value:function e(t){if(t instanceof n){return this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext))}return false}},{key:"hasAnyCallback",value:function e(){return!!this.callbackContext}}]);return n}();function au(r,e,t,n,i){var a;if(E(n)==="object"){a=undefined;i=n}if(typeof n==="function"){a=n}if(i&&i.onlyOnce){var o=t;var s=function e(t,n){ys(r._repo,r,l);o(t,n)};s.userCallback=t.userCallback;s.context=t.context;t=s}var u=new Ws(t,a||undefined);var l=e==="value"?new ru(u):new iu(e,u);_s(r._repo,r,l);return function(){return ys(r._repo,r,l)}}function ou(e,t,n,r){return au(e,"value",t,n,r)}function su(e,t,n,r){return au(e,"child_added",t,n,r)}function uu(e,t,n,r){return au(e,"child_changed",t,n,r)}function lu(e,t,n,r){return au(e,"child_moved",t,n,r)}function cu(e,t,n,r){return au(e,"child_removed",t,n,r)}function hu(e,t,n){var r=null;var i=n?new Ws(n):null;if(t==="value"){r=new ru(i)}else if(t){r=new iu(t,i)}ys(e._repo,e,r)}var e=d(function e(){f(this,e)});var fu=function(e){o(i,e);var r=s(i);function i(e,t){var n;f(this,i);n=r.call(this);n._value=e;n._key=t;return n}d(i,[{key:"_apply",value:function e(t){F("endAt",this._value,t._path,true);var n=br(t._queryParams,this._value,this._key);Hs(n);zs(n);if(t._queryParams.hasEnd()){throw new Error("endAt: Starting point was already set (by another call to endAt, "+"endBefore or equalTo).")}return new a(t._repo,t._path,n,t._orderByCalled)}}]);return i}(e);function du(e,t){Bo("endAt","key",t,true);return new fu(e,t)}var vu=function(e){o(i,e);var r=s(i);function i(e,t){var n;f(this,i);n=r.call(this);n._value=e;n._key=t;return n}d(i,[{key:"_apply",value:function e(t){F("endBefore",this._value,t._path,false);var n=Cr(t._queryParams,this._value,this._key);Hs(n);zs(n);if(t._queryParams.hasEnd()){throw new Error("endBefore: Starting point was already set (by another call to endAt, "+"endBefore or equalTo).")}return new a(t._repo,t._path,n,t._orderByCalled)}}]);return i}(e);function pu(e,t){Bo("endBefore","key",t,true);return new vu(e,t)}var _u=function(e){o(i,e);var r=s(i);function i(e,t){var n;f(this,i);n=r.call(this);n._value=e;n._key=t;return n}d(i,[{key:"_apply",value:function e(t){F("startAt",this._value,t._path,true);var n=kr(t._queryParams,this._value,this._key);Hs(n);zs(n);if(t._queryParams.hasStart()){throw new Error("startAt: Starting point was already set (by another call to startAt, "+"startBefore or equalTo).")}return new a(t._repo,t._path,n,t._orderByCalled)}}]);return i}(e);function yu(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var t=arguments.length>1?arguments[1]:undefined;Bo("startAt","key",t,true);return new _u(e,t)}var mu=function(e){o(i,e);var r=s(i);function i(e,t){var n;f(this,i);n=r.call(this);n._value=e;n._key=t;return n}d(i,[{key:"_apply",value:function e(t){F("startAfter",this._value,t._path,false);var n=wr(t._queryParams,this._value,this._key);Hs(n);zs(n);if(t._queryParams.hasStart()){throw new Error("startAfter: Starting point was already set (by another call to startAt, "+"startAfter, or equalTo).")}return new a(t._repo,t._path,n,t._orderByCalled)}}]);return i}(e);function gu(e,t){Bo("startAfter","key",t,true);return new mu(e,t)}var ku=function(e){o(r,e);var n=s(r);function r(e){var t;f(this,r);t=n.call(this);t._limit=e;return t}d(r,[{key:"_apply",value:function e(t){if(t._queryParams.hasLimit()){throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst "+"or limitToLast).")}return new a(t._repo,t._path,mr(t._queryParams,this._limit),t._orderByCalled)}}]);return r}(e);function wu(e){if(typeof e!=="number"||Math.floor(e)!==e||e<=0){throw new Error("limitToFirst: First argument must be a positive integer.")}return new ku(e)}var bu=function(e){o(r,e);var n=s(r);function r(e){var t;f(this,r);t=n.call(this);t._limit=e;return t}d(r,[{key:"_apply",value:function e(t){if(t._queryParams.hasLimit()){throw new Error("limitToLast: Limit was already set (by another call to limitToFirst "+"or limitToLast).")}return new a(t._repo,t._path,gr(t._queryParams,this._limit),t._orderByCalled)}}]);return r}(e);function Cu(e){if(typeof e!=="number"||Math.floor(e)!==e||e<=0){throw new Error("limitToLast: First argument must be a positive integer.")}return new bu(e)}var Tu=function(e){o(r,e);var n=s(r);function r(e){var t;f(this,r);t=n.call(this);t._path=e;return t}d(r,[{key:"_apply",value:function e(t){Bs(t,"orderByChild");var n=new _(this._path);if(T(n)){throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.")}var r=new Xn(n);var i=Tr(t._queryParams,r);zs(i);return new a(t._repo,t._path,i,true)}}]);return r}(e);function Iu(e){if(e==="$key"){throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.')}else if(e==="$priority"){throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.')}else if(e==="$value"){throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.')}zo("orderByChild","path",e,false);return new Tu(e)}var Eu=function(e){o(n,e);var t=s(n);function n(){f(this,n);return t.apply(this,arguments)}d(n,[{key:"_apply",value:function e(t){Bs(t,"orderByKey");var n=Tr(t._queryParams,O);zs(n);return new a(t._repo,t._path,n,true)}}]);return n}(e);function Su(){return new Eu}var Pu=function(e){o(n,e);var t=s(n);function n(){f(this,n);return t.apply(this,arguments)}d(n,[{key:"_apply",value:function e(t){Bs(t,"orderByPriority");var n=Tr(t._queryParams,c);zs(n);return new a(t._repo,t._path,n,true)}}]);return n}(e);function Ou(){return new Pu}var Nu=function(e){o(n,e);var t=s(n);function n(){f(this,n);return t.apply(this,arguments)}d(n,[{key:"_apply",value:function e(t){Bs(t,"orderByValue");var n=Tr(t._queryParams,er);zs(n);return new a(t._repo,t._path,n,true)}}]);return n}(e);function xu(){return new Nu}var Ru=function(e){o(i,e);var r=s(i);function i(e,t){var n;f(this,i);n=r.call(this);n._value=e;n._key=t;return n}d(i,[{key:"_apply",value:function e(t){F("equalTo",this._value,t._path,false);if(t._queryParams.hasStart()){throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or "+"equalTo).")}if(t._queryParams.hasEnd()){throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or "+"equalTo).")}return new fu(this._value,this._key)._apply(new _u(this._value,this._key)._apply(t))}}]);return i}(e);function ju(e,t){Bo("equalTo","key",t,true);return new Ru(e,t)}function Du(e){var t=Object(g["q"])(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++){r[i-1]=arguments[i]}for(var a=0,o=r;a<o.length;a++){var s=o[a];t=s._apply(t)}return t}_a(M);Na(M);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Au="FIREBASE_DATABASE_EMULATOR_HOST";var Fu={};var qu=false;function Lu(e,t,n,r){e.repoInfo_=new nt("".concat(t,":").concat(n),false,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams);if(r){e.authTokenProvider_=r}}function Mu(e,t,n,r,i){var a=r||e.options.databaseURL;if(a===undefined){if(!e.options.projectId){p("Can't determine Firebase Database URL. Be sure to include "+" a Project ID when calling firebase.initializeApp().")}m("Using default host for project ",e.options.projectId);a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com")}var o=Fs(a,i);var s=o.repoInfo;var u;var l=undefined;if(typeof W!=="undefined"&&W.env){l=W.env[Au]}if(l){u=true;a="http://".concat(l,"?ns=").concat(s.namespace);o=Fs(a,i);s=o.repoInfo}else{u=!o.repoInfo.secure}var c=i&&u?new He(He.OWNER):new ze(e.name,e.options,t);Vo("Invalid Firebase Database URL",o);if(!T(o.path)){p("Database URL must point to the root of a Firebase Database "+"(not including a child path).")}var h=Uu(s,e,c,new Be(e.name,n));return new zu(h,e)}function Wu(e,t){var n=Fu[t];if(!n||n[e.key]!==e){p("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted."))}ms(e);delete n[e.key]}function Uu(e,t,n,r){var i=Fu[t.name];if(!i){i={};Fu[t.name]=i}var a=i[e.toURLString()];if(a){p("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.")}a=new Zo(e,qu,n,r);i[e.toURLString()]=a;return a}function Bu(e){qu=e}var zu=function(){function n(e,t){f(this,n);this._repoInternal=e;this.app=t;this["type"]="database";this._instanceStarted=false}d(n,[{key:"_repo",get:function e(){if(!this._instanceStarted){es(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]);this._instanceStarted=true}return this._repoInternal}},{key:"_root",get:function e(){if(!this._rootInternal){this._rootInternal=new M(this._repo,y())}return this._rootInternal}},{key:"_delete",value:function e(){if(this._rootInternal!==null){Wu(this._repo,this.app.name);this._repoInternal=null;this._rootInternal=null}return Promise.resolve()}},{key:"_checkNotDeleted",value:function e(t){if(this._rootInternal===null){p("Cannot call "+t+" on a deleted database.")}}}]);return n}();function Hu(){if(Dt.IS_TRANSPORT_INITIALIZED){k("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}}function Vu(){Hu();Pt.forceDisallow()}function Yu(){Hu();jt.forceDisallow();Pt.forceAllow()}function Gu(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Object(n["getApp"])();var t=arguments.length>1?arguments[1]:undefined;return Object(n["_getProvider"])(e,"database").getImmediate({identifier:t})}function Ku(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};e=Object(g["q"])(e);e._checkNotDeleted("useEmulator");if(e._instanceStarted){p("Cannot call useEmulator() after instance has already been initialized.")}var i=e._repoInternal;var a=undefined;if(i.repoInfo_.nodeAdmin){if(r.mockUserToken){p('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".')}a=new He(He.OWNER)}else if(r.mockUserToken){var o=typeof r.mockUserToken==="string"?r.mockUserToken:Object(g["k"])(r.mockUserToken,e.app.options.projectId);a=new He(o)}Lu(i,t,n,a)}function Qu(e){e=Object(g["q"])(e);e._checkNotDeleted("goOffline");ms(e._repo)}function $u(e){e=Object(g["q"])(e);e._checkNotDeleted("goOnline");gs(e._repo)}function Ju(e,t){ke(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(e){ue(n["SDK_VERSION"]);Object(n["_registerComponent"])(new t["a"]("database",function(e,t){var n=t.instanceIdentifier;var r=e.getProvider("app").getImmediate();var i=e.getProvider("auth-internal");var a=e.getProvider("app-check-internal");return Mu(r,i,a,n)},"PUBLIC").setMultipleInstances(true));Object(n["registerVersion"])(ae,oe,e);Object(n["registerVersion"])(ae,oe,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zu={".sv":"timestamp"};function el(){return Zu}function tl(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nl=function(){function n(e,t){f(this,n);this.committed=e;this.snapshot=t}d(n,[{key:"toJSON",value:function e(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}]);return n}();function rl(a,e,t){var n;a=Object(g["q"])(a);q("Reference.transaction",a._path);if(a.key===".length"||a.key===".keys"){throw"Reference.transaction failed: "+a.key+" is a read-only object."}var r=(n=t===null||t===void 0?void 0:t.applyLocally)!==null&&n!==void 0?n:true;var o=new g["a"];var i=function e(t,n,r){var i=null;if(t){o.reject(t)}else{i=new Vs(r,new M(a._repo,a._path),c);o.resolve(new nl(n,i))}};var s=ou(a,function(){});bs(a._repo,a._path,e,i,s,r);return o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn;Cn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Cn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Qt;var il=function e(i){var a=Cn.prototype.put;Cn.prototype.put=function(e,t,n,r){if(r!==undefined){r=i()}a.call(this,e,t,n,r)};return function(){Cn.prototype.put=a}};nt;var al=function e(t){Bu(t)};Xu()}).call(this,sl(76))}}]);