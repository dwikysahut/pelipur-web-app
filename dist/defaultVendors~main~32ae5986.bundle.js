(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{12:function(T,e,t){"use strict";t.r(e);t.d(e,"SDK_VERSION",function(){return we});t.d(e,"_DEFAULT_ENTRY_NAME",function(){return w});t.d(e,"_addComponent",function(){return k});t.d(e,"_addOrOverwriteComponent",function(){return ve});t.d(e,"_apps",function(){return _});t.d(e,"_clearComponents",function(){return me});t.d(e,"_components",function(){return E});t.d(e,"_getProvider",function(){return O});t.d(e,"_registerComponent",function(){return x});t.d(e,"_removeServiceInstance",function(){return be});t.d(e,"deleteApp",function(){return xe});t.d(e,"getApp",function(){return Ee});t.d(e,"getApps",function(){return ke});t.d(e,"initializeApp",function(){return _e});t.d(e,"onLog",function(){return Oe});t.d(e,"registerVersion",function(){return L});t.d(e,"setLogLevel",function(){return Ce});var l=t(23);var r=t(28);var p=t(1);t.d(e,"FirebaseError",function(){return p["c"]});var M=t(119);var n,a;function o(e){return H(e)||U(e)||u(e)||R()}function R(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function U(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function H(e){if(Array.isArray(e))return c(e)}function C(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */C=function e(){return o};var o={},e=Object.prototype,f=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},a=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function e(t,r,n){return t[r]=n}}function c(e,t,r,n){var a=t&&t.prototype instanceof s?t:s,i=Object.create(a.prototype),o=new k(n||[]);return i._invoke=function(i,o,c){var s="suspendedStart";return function(e,t){if("executing"===s)throw new Error("Generator is already running");if("completed"===s){if("throw"===e)throw t;return O()}for(c.method=e,c.arg=t;;){var r=c.delegate;if(r){var n=w(r,c);if(n){if(n===u)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===s)throw s="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);s="executing";var a=l(i,o,c);if("normal"===a.type){if(s=c.done?"completed":"suspendedYield",a.arg===u)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(s="completed",c.method="throw",c.arg=a.arg)}}}(e,r,o),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}o.wrap=c;var u={};function s(){}function p(){}function h(){}var d={};i(d,a,function(){return this});var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==e&&f.call(b,a)&&(d=b);var m=h.prototype=s.prototype=Object.create(d);function g(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function y(c,s){function u(e,t,r,n){var a=l(c[e],c,t);if("throw"!==a.type){var i=a.arg,o=i.value;return o&&"object"==j(o)&&f.call(o,"__await")?s.resolve(o.__await).then(function(e){u("next",e,r,n)},function(e){u("throw",e,r,n)}):s.resolve(o).then(function(e){i.value=e,r(i)},function(e){return u("throw",e,r,n)})}n(a.arg)}var t;this._invoke=function(r,n){function e(){return new s(function(e,t){u(r,n,e,t)})}return t=t?t.then(e,e):e()}}function w(e,t){var r=e.iterator[t.method];if(undefined===r){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=undefined,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;){if(f.call(t,r))return e.value=t[r],e.done=!1,e}return e.value=undefined,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:undefined,done:!0}}return p.prototype=h,i(m,"constructor",h),i(h,"constructor",p),p.displayName=i(h,n,"GeneratorFunction"),o.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,n,"GeneratorFunction")),e.prototype=Object.create(m),e},o.awrap=function(e){return{__await:e}},g(y.prototype),i(y.prototype,r,function(){return this}),o.AsyncIterator=y,o.async=function(e,t,r,n,a){void 0===a&&(a=Promise);var i=new y(c(e,t,r,n),a);return o.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(m),i(m,n,"Generator"),i(m,a,function(){return this}),i(m,"toString",function(){return"[object Generator]"}),o.keys=function(r){var n=[];for(var e in r){n.push(e)}return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=x,k.prototype={constructor:k,reset:function e(t){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!t)for(var r in this){"t"===r.charAt(0)&&f.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=undefined)}},stop:function e(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function e(r){if(this.done)throw r;var n=this;function t(e,t){return o.type="throw",o.arg=r,n.next=e,t&&(n.method="next",n.arg=undefined),!!t}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var c=f.call(i,"catchLoc"),s=f.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function e(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&f.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=r,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function e(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),u},finish:function e(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),u}},catch:function e(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var i=a.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function e(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=undefined),u}},o}function s(e,t,r,n,a,i,o){try{var c=e[i](o);var s=c.value}catch(e){r(e);return}if(c.done){t(s)}else{Promise.resolve(s).then(n,a)}}function i(c){return function(){var e=this,o=arguments;return new Promise(function(t,r){var n=c.apply(e,o);function a(e){s(n,t,r,a,i,"next",e)}function i(e){s(n,t,r,a,i,"throw",e)}a(undefined)})}}function j(e){"@babel/helpers - typeof";return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function h(t,e){var r=typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&typeof t.length==="number"){if(r)t=r;var n=0;var a=function e(){};return{s:a,n:function e(){if(n>=t.length)return{done:true};return{done:false,value:t[n++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=true,o=false,c;return{s:function e(){r=r.call(t)},n:function e(){var t=r.next();i=t.done;return t},e:function e(t){o=true;c=t},f:function e(){try{if(!i&&r["return"]!=null)r["return"]()}finally{if(o)throw c}}}}function u(e,t){if(!e)return;if(typeof e==="string")return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}function c(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,n=new Array(t);r<t;r++){n[r]=e[r]}return n}function f(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function b(e,t,r){if(t)v(e.prototype,t);if(r)v(e,r);Object.defineProperty(e,"prototype",{writable:false});return e}
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
 */var V=function(){function t(e){d(this,t);this.container=e}b(t,[{key:"getPlatformInfoString",value:function e(){var t=this.container.getProviders();return t.map(function(e){if($(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}else{return null}}).filter(function(e){return e}).join(" ")}}]);return t}();function $(e){var t=e.getComponent();return(t===null||t===void 0?void 0:t.type)==="VERSION"}var m="@firebase/app";var g="0.7.27";
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
 */var y=new r["b"]("@firebase/app");var B="@firebase/app-compat";var G="@firebase/analytics-compat";var Y="@firebase/analytics";var z="@firebase/app-check-compat";var J="@firebase/app-check";var K="@firebase/auth";var W="@firebase/auth-compat";var X="@firebase/database";var q="@firebase/database-compat";var Q="@firebase/functions";var Z="@firebase/functions-compat";var ee="@firebase/installations";var te="@firebase/installations-compat";var re="@firebase/messaging";var ne="@firebase/messaging-compat";var ae="@firebase/performance";var ie="@firebase/performance-compat";var oe="@firebase/remote-config";var ce="@firebase/remote-config-compat";var se="@firebase/storage";var ue="@firebase/storage-compat";var fe="@firebase/firestore";var le="@firebase/firestore-compat";var pe="firebase";var he="9.8.4";
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
 */var w="[DEFAULT]";var de=(n={},f(n,m,"fire-core"),f(n,B,"fire-core-compat"),f(n,Y,"fire-analytics"),f(n,G,"fire-analytics-compat"),f(n,J,"fire-app-check"),f(n,z,"fire-app-check-compat"),f(n,K,"fire-auth"),f(n,W,"fire-auth-compat"),f(n,X,"fire-rtdb"),f(n,q,"fire-rtdb-compat"),f(n,Q,"fire-fn"),f(n,Z,"fire-fn-compat"),f(n,ee,"fire-iid"),f(n,te,"fire-iid-compat"),f(n,re,"fire-fcm"),f(n,ne,"fire-fcm-compat"),f(n,ae,"fire-perf"),f(n,ie,"fire-perf-compat"),f(n,oe,"fire-rc"),f(n,ce,"fire-rc-compat"),f(n,se,"fire-gcs"),f(n,ue,"fire-gcs-compat"),f(n,fe,"fire-fst"),f(n,le,"fire-fst-compat"),f(n,"fire-js","fire-js"),f(n,pe,"fire-js-all"),n);
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
 */var _=new Map;var E=new Map;function k(t,r){try{t.container.addComponent(r)}catch(e){y.debug("Component ".concat(r.name," failed to register with FirebaseApp ").concat(t.name),e)}}function ve(e,t){e.container.addOrOverwriteComponent(t)}function x(e){var t=e.name;if(E.has(t)){y.debug("There were multiple attempts to register component ".concat(t,"."));return false}E.set(t,e);var r=h(_.values()),n;try{for(r.s();!(n=r.n()).done;){var a=n.value;k(a,e)}}catch(e){r.e(e)}finally{r.f()}return true}function O(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:true});if(r){void r.triggerHeartbeat()}return e.container.getProvider(t)}function be(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:w;O(e,t).clearInstance(r)}function me(){E.clear()}
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
 */var ge=(a={},f(a,"no-app","No Firebase App '{$appName}' has been created - "+"call Firebase App.initializeApp()"),f(a,"bad-app-name","Illegal App name: '{$appName}"),f(a,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),f(a,"app-deleted","Firebase App named '{$appName}' already deleted"),f(a,"invalid-app-argument","firebase.{$appName}() takes either no argument or a "+"Firebase App instance."),f(a,"invalid-log-argument","First argument to `onLog` must be null or a function."),f(a,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),f(a,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),f(a,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),f(a,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),a);var S=new p["b"]("app","Firebase",ge);
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
 */var ye=function(){function a(e,t,r){var n=this;d(this,a);this._isDeleted=false;this._options=Object.assign({},e);this._config=Object.assign({},t);this._name=t.name;this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled;this._container=r;this.container.addComponent(new l["a"]("app",function(){return n},"PUBLIC"))}b(a,[{key:"automaticDataCollectionEnabled",get:function e(){this.checkDestroyed();return this._automaticDataCollectionEnabled},set:function e(t){this.checkDestroyed();this._automaticDataCollectionEnabled=t}},{key:"name",get:function e(){this.checkDestroyed();return this._name}},{key:"options",get:function e(){this.checkDestroyed();return this._options}},{key:"config",get:function e(){this.checkDestroyed();return this._config}},{key:"container",get:function e(){return this._container}},{key:"isDeleted",get:function e(){return this._isDeleted},set:function e(t){this._isDeleted=t}},{key:"checkDestroyed",value:function e(){if(this.isDeleted){throw S.create("app-deleted",{appName:this._name})}}}]);return a}();
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
 */var we=he;function _e(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(j(t)!=="object"){var r=t;t={name:r}}var n=Object.assign({name:w,automaticDataCollectionEnabled:false},t);var a=n.name;if(typeof a!=="string"||!a){throw S.create("bad-app-name",{appName:String(a)})}var i=_.get(a);if(i){if(Object(p["n"])(e,i.options)&&Object(p["n"])(n,i.config)){return i}else{throw S.create("duplicate-app",{appName:a})}}var o=new l["b"](a);var c=h(E.values()),s;try{for(c.s();!(s=c.n()).done;){var u=s.value;o.addComponent(u)}}catch(e){c.e(e)}finally{c.f()}var f=new ye(e,n,o);_.set(a,f);return f}function Ee(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:w;var t=_.get(e);if(!t){throw S.create("no-app",{appName:e})}return t}function ke(){return Array.from(_.values())}function xe(e){return A.apply(this,arguments)}function A(){A=i(C().mark(function e(r){var n;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:n=r.name;if(!_.has(n)){t.next=6;break}_["delete"](n);t.next=5;return Promise.all(r.container.getProviders().map(function(e){return e["delete"]()}));case 5:r.isDeleted=true;case 6:case"end":return t.stop()}}},e)}));return A.apply(this,arguments)}function L(e,t,r){var n;var a=(n=de[e])!==null&&n!==void 0?n:e;if(r){a+="-".concat(r)}var i=a.match(/\s|\//);var o=t.match(/\s|\//);if(i||o){var c=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];if(i){c.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")'))}if(i&&o){c.push("and")}if(o){c.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")'))}y.warn(c.join(" "));return}x(new l["a"]("".concat(a,"-version"),function(){return{library:a,version:t}},"VERSION"))}function Oe(e,t){if(e!==null&&typeof e!=="function"){throw S.create("invalid-log-argument")}Object(r["d"])(e,t)}function Ce(e){Object(r["c"])(e)}
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
 */var je="firebase-heartbeat-database";var Se=1;var D="firebase-heartbeat-store";var I=null;function N(){if(!I){I=Object(M["a"])(je,Se,{upgrade:function e(t,r){switch(r){case 0:t.createObjectStore(D)}}})["catch"](function(e){throw S.create("storage-open",{originalErrorMessage:e.message})})}return I}function Ae(e){return P.apply(this,arguments)}function P(){P=i(C().mark(function e(r){var n,a;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return N();case 3:a=t.sent;return t.abrupt("return",a.transaction(D).objectStore(D).get(De(r)));case 7:t.prev=7;t.t0=t["catch"](0);throw S.create("storage-get",{originalErrorMessage:(n=t.t0)===null||n===void 0?void 0:n.message});case 10:case"end":return t.stop()}}},e,null,[[0,7]])}));return P.apply(this,arguments)}function Le(e,t){return F.apply(this,arguments)}function F(){F=i(C().mark(function e(r,n){var a,i,o,c;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return N();case 3:i=t.sent;o=i.transaction(D,"readwrite");c=o.objectStore(D);t.next=8;return c.put(n,De(r));case 8:return t.abrupt("return",o.done);case 11:t.prev=11;t.t0=t["catch"](0);throw S.create("storage-set",{originalErrorMessage:(a=t.t0)===null||a===void 0?void 0:a.message});case 14:case"end":return t.stop()}}},e,null,[[0,11]])}));return F.apply(this,arguments)}function De(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var Ie=1024;var Ne=30*24*60*60*1e3;var Pe=function(){function n(e){var t=this;d(this,n);this.container=e;this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new Me(r);this._heartbeatsCachePromise=this._storage.read().then(function(e){t._heartbeatsCache=e;return e})}b(n,[{key:"triggerHeartbeat",value:function(){var e=i(C().mark(function e(){var r,n,a;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:r=this.container.getProvider("platform-logger").getImmediate();n=r.getPlatformInfoString();a=Fe();if(!(this._heartbeatsCache===null)){t.next=7;break}t.next=6;return this._heartbeatsCachePromise;case 6:this._heartbeatsCache=t.sent;case 7:if(!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:this._heartbeatsCache.heartbeats.push({date:a,agent:n});case 12:this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(function(e){var t=new Date(e.date).valueOf();var r=Date.now();return r-t<=Ne});return t.abrupt("return",this._storage.overwrite(this._heartbeatsCache));case 14:case"end":return t.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getHeartbeatsHeader",value:function(){var e=i(C().mark(function e(){var r,n,a,i,o;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:if(!(this._heartbeatsCache===null)){t.next=3;break}t.next=3;return this._heartbeatsCachePromise;case 3:if(!(this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)){t.next=5;break}return t.abrupt("return","");case 5:r=Fe();n=Te(this._heartbeatsCache.heartbeats),a=n.heartbeatsToSend,i=n.unsentEntries;o=Object(p["i"])(JSON.stringify({version:2,heartbeats:a}));this._heartbeatsCache.lastSentHeartbeatDate=r;if(!(i.length>0)){t.next=15;break}this._heartbeatsCache.heartbeats=i;t.next=13;return this._storage.overwrite(this._heartbeatsCache);case 13:t.next=17;break;case 15:this._heartbeatsCache.heartbeats=[];void this._storage.overwrite(this._heartbeatsCache);case 17:return t.abrupt("return",o);case 18:case"end":return t.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]);return n}();function Fe(){var e=new Date;return e.toISOString().substring(0,10)}function Te(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Ie;var a=[];var i=e.slice();var t=h(e),o;try{var r=function e(){var t=o.value;var r=a.find(function(e){return e.agent===t.agent});if(!r){a.push({agent:t.agent,dates:[t.date]});if(Re(a)>n){a.pop();return"break"}}else{r.dates.push(t.date);if(Re(a)>n){r.dates.pop();return"break"}}i=i.slice(1)};for(t.s();!(o=t.n()).done;){var c=r();if(c==="break")break}}catch(e){t.e(e)}finally{t.f()}return{heartbeatsToSend:a,unsentEntries:i}}var Me=function(){function t(e){d(this,t);this.app=e;this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}b(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){var e=i(C().mark(function e(){return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:if(Object(p["u"])()){t.next=4;break}return t.abrupt("return",false);case 4:return t.abrupt("return",Object(p["J"])().then(function(){return true})["catch"](function(){return false}));case 5:case"end":return t.stop()}}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"read",value:function(){var e=i(C().mark(function e(){var r,n;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return this._canUseIndexedDBPromise;case 2:r=t.sent;if(r){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:t.next=9;return Ae(this.app);case 9:n=t.sent;return t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"overwrite",value:function(){var t=i(C().mark(function e(r){var n,a,i;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return this._canUseIndexedDBPromise;case 2:a=t.sent;if(a){t.next=7;break}return t.abrupt("return");case 7:t.next=9;return this.read();case 9:i=t.sent;return t.abrupt("return",Le(this.app,{lastSentHeartbeatDate:(n=r.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:r.heartbeats}));case 11:case"end":return t.stop()}}},e,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"add",value:function(){var t=i(C().mark(function e(r){var n,a,i;return C().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return this._canUseIndexedDBPromise;case 2:a=t.sent;if(a){t.next=7;break}return t.abrupt("return");case 7:t.next=9;return this.read();case 9:i=t.sent;return t.abrupt("return",Le(this.app,{lastSentHeartbeatDate:(n=r.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[].concat(o(i.heartbeats),o(r.heartbeats))}));case 11:case"end":return t.stop()}}},e,this)}));function e(e){return t.apply(this,arguments)}return e}()}]);return t}();function Re(e){return Object(p["i"])(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Ue(e){x(new l["a"]("platform-logger",function(e){return new V(e)},"PRIVATE"));x(new l["a"]("heartbeat",function(e){return new Pe(e)},"PRIVATE"));L(m,g,e);L(m,g,"esm2017");L("fire-js","")}Ue("")},43:function(e,t,r){"use strict";r.d(t,"a",function(){return k});var u=r(1);var a=r(23);var f=r(12);var n=r(28);var i;function o(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function l(e,t,r){if(t)s(e.prototype,t);if(r)s(e,r);Object.defineProperty(e,"prototype",{writable:false});return e}
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
 */var p=function(){function n(e,t){var r=this;c(this,n);this._delegate=e;this.firebase=t;Object(f["_addComponent"])(e,new a["a"]("app-compat",function(){return r},"PUBLIC"));this.container=e.container}l(n,[{key:"automaticDataCollectionEnabled",get:function e(){return this._delegate.automaticDataCollectionEnabled},set:function e(t){this._delegate.automaticDataCollectionEnabled=t}},{key:"name",get:function e(){return this._delegate.name}},{key:"options",get:function e(){return this._delegate.options}},{key:"delete",value:function e(){var t=this;return new Promise(function(e){t._delegate.checkDestroyed();e()}).then(function(){t.firebase.INTERNAL.removeApp(t.name);return Object(f["deleteApp"])(t._delegate)})}},{key:"_getService",value:function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:f["_DEFAULT_ENTRY_NAME"];var n;this._delegate.checkDestroyed();var a=this._delegate.container.getProvider(t);if(!a.isInitialized()&&((n=a.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"){a.initialize()}return a.getImmediate({identifier:r})}},{key:"_removeServiceInstance",value:function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:f["_DEFAULT_ENTRY_NAME"];this._delegate.container.getProvider(t).clearInstance(r)}},{key:"_addComponent",value:function e(t){Object(f["_addComponent"])(this._delegate,t)}},{key:"_addOrOverwriteComponent",value:function e(t){Object(f["_addOrOverwriteComponent"])(this._delegate,t)}},{key:"toJSON",value:function e(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}]);return n}();
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
 */var h=(i={},o(i,"no-app","No Firebase App '{$appName}' has been created - "+"call Firebase App.initializeApp()"),o(i,"invalid-app-argument","firebase.{$appName}() takes either no argument or a "+"Firebase App instance."),i);var d=new u["b"]("app-compat","Firebase",h);
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
 */function v(o){var a={};var c={__esModule:true,initializeApp:t,app:n,registerVersion:f["registerVersion"],setLogLevel:f["setLogLevel"],onLog:f["onLog"],apps:null,SDK_VERSION:f["SDK_VERSION"],INTERNAL:{registerComponent:i,removeApp:e,useAsService:s,modularAPIs:f}};c["default"]=c;Object.defineProperty(c,"apps",{get:r});function e(e){delete a[e]}function n(e){e=e||f["_DEFAULT_ENTRY_NAME"];if(!Object(u["j"])(a,e)){throw d.create("no-app",{appName:e})}return a[e]}n["App"]=o;function t(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var r=f["initializeApp"](e,t);if(Object(u["j"])(a,r.name)){return a[r.name]}var n=new o(r,c);a[r.name]=n;return n}function r(){return Object.keys(a).map(function(e){return a[e]})}function i(a){var i=a.name;var r=i.replace("-compat","");if(f["_registerComponent"](a)&&a.type==="PUBLIC"){var e=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:n();if(typeof t[r]!=="function"){throw d.create("invalid-app-argument",{appName:i})}return t[r]()};if(a.serviceProps!==undefined){Object(u["o"])(e,a.serviceProps)}c[r]=e;o.prototype[r]=function(){var e=this._getService.bind(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}return e.apply(this,a.multipleInstances?r:[])}}return a.type==="PUBLIC"?c[r]:null}function s(e,t){if(t==="serverAuth"){return null}var r=t;return r}return c}
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
 */function b(){var t=v(p);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:b,extendNamespace:e,createSubscribe:u["l"],ErrorFactory:u["b"],deepExtend:u["o"]});function e(e){Object(u["o"])(t,e)}return t}var m=b();
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
 */var g=new n["b"]("@firebase/app-compat");var y="@firebase/app-compat";var w="0.1.28";
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
 */function _(e){Object(f["registerVersion"])(y,w,e)}
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
 */if(Object(u["s"])()&&self.firebase!==undefined){g.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var E=self.firebase.SDK_VERSION;if(E&&E.indexOf("LITE")>=0){g.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}}var k=m;_()}}]);