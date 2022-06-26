(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],[,function(e,Le,ze){"use strict";(function(e){ze.d(Le,"a",function(){return F});ze.d(Le,"b",function(){return k});ze.d(Le,"c",function(){return j});ze.d(Le,"d",function(){return me});ze.d(Le,"e",function(){return g});ze.d(Le,"f",function(){return m});ze.d(Le,"g",function(){return S});ze.d(Le,"h",function(){return O});ze.d(Le,"i",function(){return E});ze.d(Le,"j",function(){return de});ze.d(Le,"k",function(){return J});ze.d(Le,"l",function(){return we});ze.d(Le,"m",function(){return z});ze.d(Le,"n",function(){return N});ze.d(Le,"o",function(){return x});ze.d(Le,"p",function(){return B});ze.d(Le,"q",function(){return We});ze.d(Le,"r",function(){return he});ze.d(Le,"s",function(){return K});ze.d(Le,"t",function(){return pe});ze.d(Le,"u",function(){return re});ze.d(Le,"v",function(){return H});ze.d(Le,"w",function(){return Z});ze.d(Le,"x",function(){return q});ze.d(Le,"y",function(){return le});ze.d(Le,"z",function(){return T});ze.d(Le,"A",function(){return be});ze.d(Le,"B",function(){return ye});ze.d(Le,"C",function(){return ve});ze.d(Le,"D",function(){return Te});ze.d(Le,"E",function(){return ke});ze.d(Le,"F",function(){return fe});ze.d(Le,"G",function(){return Ae});ze.d(Le,"H",function(){return Ce});ze.d(Le,"I",function(){return je});ze.d(Le,"J",function(){return te});function o(r,e){var t=typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=f(r))||e&&r&&typeof r.length==="number"){if(t)r=t;var n=0;var i=function e(){};return{s:i,n:function e(){if(n>=r.length)return{done:true};return{done:false,value:r[n++]}},e:function e(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o=true,a=false,u;return{s:function e(){t=t.call(r)},n:function e(){var r=t.next();o=r.done;return r},e:function e(r){a=true;u=r},f:function e(){try{if(!o&&t["return"]!=null)t["return"]()}finally{if(a)throw u}}}}function u(e,r){return a(e)||i(e,r)||f(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,r){if(!e)return;if(typeof e==="string")return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}function n(e,r){if(r==null||r>e.length)r=e.length;for(var t=0,n=new Array(r);t<r;t++){n[t]=e[t]}return n}function i(e,r){var t=e==null?null:typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t==null)return;var n=[];var i=true;var o=false;var a,u;try{for(t=t.call(e);!(i=(a=t.next()).done);i=true){n.push(a.value);if(r&&n.length===r)break}}catch(e){o=true;u=e}finally{try{if(!i&&t["return"]!=null)t["return"]()}finally{if(o)throw u}}return n}function a(e){if(Array.isArray(e))return e}function I(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(r)h(e,r)}function R(i){var o=l();return function e(){var r=d(i),t;if(o){var n=d(this).constructor;t=Reflect.construct(r,arguments,n)}else{t=r.apply(this,arguments)}return V(this,t)}}function V(e,r){if(r&&(v(r)==="object"||typeof r==="function")){return r}else if(r!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return c(e)}function c(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function r(e){var n=typeof Map==="function"?new Map:undefined;r=function e(r){if(r===null||!W(r))return r;if(typeof r!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof n!=="undefined"){if(n.has(r))return n.get(r);n.set(r,t)}function t(){return s(r,arguments,d(this).constructor)}t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});return h(t,r)};return r(e)}function s(e,r,t){if(l()){s=Reflect.construct.bind()}else{s=function e(r,t,n){var i=[null];i.push.apply(i,t);var o=Function.bind.apply(r,i);var a=new o;if(n)h(a,n.prototype);return a}}return s.apply(null,arguments)}function l(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function W(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function h(e,r){h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(r,t){r.__proto__=t;return r};return h(e,r)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(r){return r.__proto__||Object.getPrototypeOf(r)};return d(e)}function v(e){"@babel/helpers - typeof";return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function p(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function b(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function y(e,r,t){if(r)b(e.prototype,r);if(t)b(e,t);Object.defineProperty(e,"prototype",{writable:false});return e}
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
 */var _={NODE_CLIENT:false,NODE_ADMIN:false,SDK_VERSION:"${JSCORE_VERSION}"};
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
 */var g=function e(r,t){if(!r){throw m(t)}};var m=function e(r){return new Error("Firebase Database ("+_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};
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
 */var w=function e(r){var t=[];var n=0;for(var i=0;i<r.length;i++){var o=r.charCodeAt(i);if(o<128){t[n++]=o}else if(o<2048){t[n++]=o>>6|192;t[n++]=o&63|128}else if((o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320){o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023);t[n++]=o>>18|240;t[n++]=o>>12&63|128;t[n++]=o>>6&63|128;t[n++]=o&63|128}else{t[n++]=o>>12|224;t[n++]=o>>6&63|128;t[n++]=o&63|128}}return t};var L=function e(r){var t=[];var n=0,i=0;while(n<r.length){var o=r[n++];if(o<128){t[i++]=String.fromCharCode(o)}else if(o>191&&o<224){var a=r[n++];t[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){var u=r[n++];var f=r[n++];var c=r[n++];var s=((o&7)<<18|(u&63)<<12|(f&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(s>>10));t[i++]=String.fromCharCode(56320+(s&1023))}else{var l=r[n++];var h=r[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return t.join("")};var S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz"+"0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob==="function",encodeByteArray:function e(r,t){if(!Array.isArray(r)){throw Error("encodeByteArray takes an array as a parameter")}this.init_();var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_;var i=[];for(var o=0;o<r.length;o+=3){var a=r[o];var u=o+1<r.length;var f=u?r[o+1]:0;var c=o+2<r.length;var s=c?r[o+2]:0;var l=a>>2;var h=(a&3)<<4|f>>4;var d=(f&15)<<2|s>>6;var v=s&63;if(!c){v=64;if(!u){d=64}}i.push(n[l],n[h],n[d],n[v])}return i.join("")},encodeString:function e(r,t){if(this.HAS_NATIVE_SUPPORT&&!t){return btoa(r)}return this.encodeByteArray(w(r),t)},decodeString:function e(r,t){if(this.HAS_NATIVE_SUPPORT&&!t){return atob(r)}return L(this.decodeStringToByteArray(r,t))},decodeStringToByteArray:function e(r,t){this.init_();var n=t?this.charToByteMapWebSafe_:this.charToByteMap_;var i=[];for(var o=0;o<r.length;){var a=n[r.charAt(o++)];var u=o<r.length;var f=u?n[r.charAt(o)]:0;++o;var c=o<r.length;var s=c?n[r.charAt(o)]:64;++o;var l=o<r.length;var h=l?n[r.charAt(o)]:64;++o;if(a==null||f==null||s==null||h==null){throw Error()}var d=a<<2|f>>4;i.push(d);if(s!==64){var v=f<<4&240|s>>2;i.push(v);if(h!==64){var p=s<<6&192|h;i.push(p)}}}return i},init_:function e(){if(!this.byteToCharMap_){this.byteToCharMap_={};this.charToByteMap_={};this.byteToCharMapWebSafe_={};this.charToByteMapWebSafe_={};for(var r=0;r<this.ENCODED_VALS.length;r++){this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r);this.charToByteMap_[this.byteToCharMap_[r]]=r;this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r);this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r;if(r>=this.ENCODED_VALS_BASE.length){this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r;this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r}}}}};var O=function e(r){var t=w(r);return S.encodeByteArray(t,true)};var E=function e(r){return O(r).replace(/\./g,"")};var A=function e(r){try{return S.decodeString(r,true)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function z(e){return x(undefined,e)}function x(e,r){if(!(r instanceof Object)){return r}switch(r.constructor){case Date:var t=r;return new Date(t.getTime());case Object:if(e===undefined){e={}}break;case Array:e=[];break;default:return r}for(var n in r){if(!r.hasOwnProperty(n)||!U(n)){continue}e[n]=x(e[n],r[n])}return e}function U(e){return e!=="__proto__"}
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
 */var F=function(){function e(){var t=this;p(this,e);this.reject=function(){};this.resolve=function(){};this.promise=new Promise(function(e,r){t.resolve=e;t.reject=r})}y(e,[{key:"wrapCallback",value:function e(t){var n=this;return function(e,r){if(e){n.reject(e)}else{n.resolve(r)}if(typeof t==="function"){n.promise["catch"](function(){});if(t.length===1){t(e)}else{t(e,r)}}}}}]);return e}();
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
 */function J(e,r){if(e.uid){throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.')}var t={alg:"none",type:"JWT"};var n=r||"demo-project";var i=e.iat||0;var o=e.sub||e.user_id;if(!o){throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")}var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);var u="";return[E(JSON.stringify(t)),E(JSON.stringify(a)),u].join(".")}
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
 */function C(){if(typeof navigator!=="undefined"&&typeof navigator["userAgent"]==="string"){return navigator["userAgent"]}else{return""}}function H(){return typeof window!=="undefined"&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function G(){try{return Object.prototype.toString.call(e.process)==="[object process]"}catch(e){return false}}function K(){return(typeof self==="undefined"?"undefined":v(self))==="object"&&self.self===self}function $(){var e=(typeof chrome==="undefined"?"undefined":v(chrome))==="object"?chrome.runtime:(typeof browser==="undefined"?"undefined":v(browser))==="object"?browser.runtime:undefined;return v(e)==="object"&&e.id!==undefined}function q(){return(typeof navigator==="undefined"?"undefined":v(navigator))==="object"&&navigator["product"]==="ReactNative"}function Q(){return C().indexOf("Electron/")>=0}function X(){var e=C();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Y(){return C().indexOf("MSAppHost/")>=0}function Z(){return _.NODE_CLIENT===true||_.NODE_ADMIN===true}function ee(){return!G()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function re(){return(typeof indexedDB==="undefined"?"undefined":v(indexedDB))==="object"}function te(){return new Promise(function(e,r){try{var t=true;var n="validate-browser-context-for-indexeddb-analytics-module";var i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close();if(!t){self.indexedDB.deleteDatabase(n)}e(true)};i.onupgradeneeded=function(){t=false};i.onerror=function(){var e;r(((e=i.error)===null||e===void 0?void 0:e.message)||"")}}catch(e){r(e)}})}function ne(){if(typeof navigator==="undefined"||!navigator.cookieEnabled){return false}return true}function ie(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof e!=="undefined"){return e}throw new Error("Unable to locate global object.")}
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
 */var oe="FirebaseError";var j=function(e){I(o,e);var i=R(o);function o(e,r,t){var n;p(this,o);n=i.call(this,r);n.code=e;n.customData=t;n.name=oe;Object.setPrototypeOf(c(n),o.prototype);if(Error.captureStackTrace){Error.captureStackTrace(c(n),k.prototype.create)}return n}return y(o)}(r(Error));var k=function(){function n(e,r,t){p(this,n);this.service=e;this.serviceName=r;this.errors=t}y(n,[{key:"create",value:function e(r){var t=(arguments.length<=1?undefined:arguments[1])||{};var n="".concat(this.service,"/").concat(r);var i=this.errors[r];var o=i?ae(i,t):"Error";var a="".concat(this.serviceName,": ").concat(o," (").concat(n,").");var u=new j(n,a,t);return u}}]);return n}();function ae(e,n){return e.replace(ue,function(e,r){var t=n[r];return t!=null?String(t):"<".concat(r,"?>")})}var ue=/\{\$([^}]+)}/g;
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
 */function T(e){return JSON.parse(e)}function fe(e){return JSON.stringify(e)}
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
 */var D=function e(r){var t={},n={},i={},o="";try{var a=r.split(".");t=T(A(a[0])||"");n=T(A(a[1])||"");o=a[2];i=n["d"]||{};delete n["d"]}catch(e){}return{header:t,claims:n,data:i,signature:o}};var ce=function e(r){var t=D(r).claims;var n=Math.floor((new Date).getTime()/1e3);var i=0,o=0;if(v(t)==="object"){if(t.hasOwnProperty("nbf")){i=t["nbf"]}else if(t.hasOwnProperty("iat")){i=t["iat"]}if(t.hasOwnProperty("exp")){o=t["exp"]}else{o=i+86400}}return!!n&&!!i&&!!o&&n>=i&&n<=o};var se=function e(r){var t=D(r).claims;if(v(t)==="object"&&t.hasOwnProperty("iat")){return t["iat"]}return null};var le=function e(r){var t=D(r),n=t.claims;return!!n&&v(n)==="object"&&n.hasOwnProperty("iat")};var he=function e(r){var t=D(r).claims;return v(t)==="object"&&t["admin"]===true};
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
 */function de(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function ve(e,r){if(Object.prototype.hasOwnProperty.call(e,r)){return e[r]}else{return undefined}}function pe(e){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){return false}}return true}function be(e,r,t){var n={};for(var i in e){if(Object.prototype.hasOwnProperty.call(e,i)){n[i]=r.call(t,e[i],i,e)}}return n}function N(e,r){if(e===r){return true}var t=Object.keys(e);var n=Object.keys(r);for(var i=0,o=t;i<o.length;i++){var a=o[i];if(!n.includes(a)){return false}var u=e[a];var f=r[a];if(M(u)&&M(f)){if(!N(u,f)){return false}}else if(u!==f){return false}}for(var c=0,s=n;c<s.length;c++){var l=s[c];if(!t.includes(l)){return false}}return true}function M(e){return e!==null&&v(e)==="object"}
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
 */function ye(e){var i=[];var r=function e(){var r=u(a[o],2),t=r[0],n=r[1];if(Array.isArray(n)){n.forEach(function(e){i.push(encodeURIComponent(t)+"="+encodeURIComponent(e))})}else{i.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}};for(var o=0,a=Object.entries(e);o<a.length;o++){r()}return i.length?"&"+i.join("&"):""}function _e(e){var o={};var r=e.replace(/^\?/,"").split("&");r.forEach(function(e){if(e){var r=e.split("="),t=u(r,2),n=t[0],i=t[1];o[decodeURIComponent(n)]=decodeURIComponent(i)}});return o}function ge(e){var r=e.indexOf("?");if(!r){return""}var t=e.indexOf("#",r);return e.substring(r,t>0?t:undefined)}
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
 */var me=function(){function r(){p(this,r);this.chain_=[];this.buf_=[];this.W_=[];this.pad_=[];this.inbuf_=0;this.total_=0;this.blockSize=512/8;this.pad_[0]=128;for(var e=1;e<this.blockSize;++e){this.pad_[e]=0}this.reset()}y(r,[{key:"reset",value:function e(){this.chain_[0]=1732584193;this.chain_[1]=4023233417;this.chain_[2]=2562383102;this.chain_[3]=271733878;this.chain_[4]=3285377520;this.inbuf_=0;this.total_=0}},{key:"compress_",value:function e(r,t){if(!t){t=0}var n=this.W_;if(typeof r==="string"){for(var i=0;i<16;i++){n[i]=r.charCodeAt(t)<<24|r.charCodeAt(t+1)<<16|r.charCodeAt(t+2)<<8|r.charCodeAt(t+3);t+=4}}else{for(var o=0;o<16;o++){n[o]=r[t]<<24|r[t+1]<<16|r[t+2]<<8|r[t+3];t+=4}}for(var a=16;a<80;a++){var u=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=(u<<1|u>>>31)&4294967295}var f=this.chain_[0];var c=this.chain_[1];var s=this.chain_[2];var l=this.chain_[3];var h=this.chain_[4];var d,v;for(var p=0;p<80;p++){if(p<40){if(p<20){d=l^c&(s^l);v=1518500249}else{d=c^s^l;v=1859775393}}else{if(p<60){d=c&s|l&(c|s);v=2400959708}else{d=c^s^l;v=3395469782}}var b=(f<<5|f>>>27)+d+h+v+n[p]&4294967295;h=l;l=s;s=(c<<30|c>>>2)&4294967295;c=f;f=b}this.chain_[0]=this.chain_[0]+f&4294967295;this.chain_[1]=this.chain_[1]+c&4294967295;this.chain_[2]=this.chain_[2]+s&4294967295;this.chain_[3]=this.chain_[3]+l&4294967295;this.chain_[4]=this.chain_[4]+h&4294967295}},{key:"update",value:function e(r,t){if(r==null){return}if(t===undefined){t=r.length}var n=t-this.blockSize;var i=0;var o=this.buf_;var a=this.inbuf_;while(i<t){if(a===0){while(i<=n){this.compress_(r,i);i+=this.blockSize}}if(typeof r==="string"){while(i<t){o[a]=r.charCodeAt(i);++a;++i;if(a===this.blockSize){this.compress_(o);a=0;break}}}else{while(i<t){o[a]=r[i];++a;++i;if(a===this.blockSize){this.compress_(o);a=0;break}}}}this.inbuf_=a;this.total_+=t}},{key:"digest",value:function e(){var e=[];var r=this.total_*8;if(this.inbuf_<56){this.update(this.pad_,56-this.inbuf_)}else{this.update(this.pad_,this.blockSize-(this.inbuf_-56))}for(var t=this.blockSize-1;t>=56;t--){this.buf_[t]=r&255;r/=256}this.compress_(this.buf_);var n=0;for(var i=0;i<5;i++){for(var o=24;o>=0;o-=8){e[n]=this.chain_[i]>>o&255;++n}}return e}}]);return r}();function we(e,r){var t=new Se(e,r);return t.subscribe.bind(t)}var Se=function(){function n(e,r){var t=this;p(this,n);this.observers=[];this.unsubscribes=[];this.observerCount=0;this.task=Promise.resolve();this.finalized=false;this.onNoObservers=r;this.task.then(function(){e(t)})["catch"](function(e){t.error(e)})}y(n,[{key:"next",value:function e(r){this.forEachObserver(function(e){e.next(r)})}},{key:"error",value:function e(r){this.forEachObserver(function(e){e.error(r)});this.close(r)}},{key:"complete",value:function e(){this.forEachObserver(function(e){e.complete()});this.close()}},{key:"subscribe",value:function e(r,t,n){var i=this;var o;if(r===undefined&&t===undefined&&n===undefined){throw new Error("Missing Observer.")}if(Ee(r,["next","error","complete"])){o=r}else{o={next:r,error:t,complete:n}}if(o.next===undefined){o.next=P}if(o.error===undefined){o.error=P}if(o.complete===undefined){o.complete=P}var a=this.unsubscribeOne.bind(this,this.observers.length);if(this.finalized){this.task.then(function(){try{if(i.finalError){o.error(i.finalError)}else{o.complete()}}catch(e){}return})}this.observers.push(o);return a}},{key:"unsubscribeOne",value:function e(r){if(this.observers===undefined||this.observers[r]===undefined){return}delete this.observers[r];this.observerCount-=1;if(this.observerCount===0&&this.onNoObservers!==undefined){this.onNoObservers(this)}}},{key:"forEachObserver",value:function e(r){if(this.finalized){return}for(var t=0;t<this.observers.length;t++){this.sendOne(t,r)}}},{key:"sendOne",value:function e(r,t){var n=this;this.task.then(function(){if(n.observers!==undefined&&n.observers[r]!==undefined){try{t(n.observers[r])}catch(e){if(typeof console!=="undefined"&&console.error){console.error(e)}}}})}},{key:"close",value:function e(r){var t=this;if(this.finalized){return}this.finalized=true;if(r!==undefined){this.finalError=r}this.task.then(function(){t.observers=undefined;t.onNoObservers=undefined})}}]);return n}();function Oe(n,i){return function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++){r[t]=arguments[t]}Promise.resolve(true).then(function(){n.apply(void 0,r)})["catch"](function(e){if(i){i(e)}})}}function Ee(e,r){if(v(e)!=="object"||e===null){return false}var t=o(r),n;try{for(t.s();!(n=t.n()).done;){var i=n.value;if(i in e&&typeof e[i]==="function"){return true}}}catch(e){t.e(e)}finally{t.f()}return false}function P(){}
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
 */var Ae=function e(r,t,n,i){var o;if(i<t){o="at least "+t}else if(i>n){o=n===0?"none":"no more than "+n}if(o){var a=r+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+o+".";throw new Error(a)}};function B(e,r){return"".concat(e," failed: ").concat(r," argument ")}function xe(e,r,t){if(t&&!r){return}if(typeof r!=="string"){throw new Error(B(e,"namespace")+"must be a valid firebase namespace.")}}function Ce(e,r,t,n){if(n&&!t){return}if(typeof t!=="function"){throw new Error(B(e,r)+"must be a valid function.")}}function je(e,r,t,n){if(n&&!t){return}if(v(t)!=="object"||t===null){throw new Error(B(e,r)+"must be a valid context object.")}}
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
 */var ke=function e(r){var t=[];var n=0;for(var i=0;i<r.length;i++){var o=r.charCodeAt(i);if(o>=55296&&o<=56319){var a=o-55296;i++;g(i<r.length,"Surrogate pair missing trail surrogate.");var u=r.charCodeAt(i)-56320;o=65536+(a<<10)+u}if(o<128){t[n++]=o}else if(o<2048){t[n++]=o>>6|192;t[n++]=o&63|128}else if(o<65536){t[n++]=o>>12|224;t[n++]=o>>6&63|128;t[n++]=o&63|128}else{t[n++]=o>>18|240;t[n++]=o>>12&63|128;t[n++]=o>>6&63|128;t[n++]=o&63|128}}return t};var Te=function e(r){var t=0;for(var n=0;n<r.length;n++){var i=r.charCodeAt(n);if(i<128){t++}else if(i<2048){t+=2}else if(i>=55296&&i<=56319){t+=4;n++}else{t+=3}}return t};
/**
 * @license
 * Copyright 2022 Google LLC
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
 */var De=function e(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=Math.random()*16|0,t=e==="x"?r:r&3|8;return t.toString(16)})};
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
 */var Ne=1e3;var Me=2;var Pe=4*60*60*1e3;var Be=.5;function Ie(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Ne;var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:Me;var n=r*Math.pow(t,e);var i=Math.round(Be*n*(Math.random()-.5)*2);return Math.min(Pe,n+i)}
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
 */function Re(e){if(!Number.isFinite(e)){return"".concat(e)}return e+Ve(e)}function Ve(e){e=Math.abs(e);var r=e%100;if(r>=10&&r<=20){return"th"}var t=e%10;if(t===1){return"st"}if(t===2){return"nd"}if(t===3){return"rd"}return"th"}
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
 */function We(e){if(e&&e._delegate){return e._delegate}else{return e}}}).call(this,ze(75))}]]);