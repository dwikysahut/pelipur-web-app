(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{145:function(t,e,n){"use strict";var r=n(5);var a=n(30);var u=n(6);function E(t){"@babel/helpers - typeof";return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function T(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */T=function t(){return a};var a={},t=Object.prototype,f=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function t(e,n,r){return e[n]=r}}function u(t,e,n,r){var o=e&&e.prototype instanceof c?e:c,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(i,a,u){var c="suspendedStart";return function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return x()}for(u.method=t,u.arg=e;;){var n=u.delegate;if(n){var r=w(n,u);if(r){if(r===s)continue;return r}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if("suspendedStart"===c)throw c="completed",u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);c="executing";var o=l(i,a,u);if("normal"===o.type){if(c=u.done?"completed":"suspendedYield",o.arg===s)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(c="completed",u.method="throw",u.arg=o.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=u;var s={};function c(){}function p(){}function d(){}var y={};i(y,o,function(){return this});var h=Object.getPrototypeOf,m=h&&h(h(j([])));m&&m!==t&&f.call(m,o)&&(y=m);var v=d.prototype=c.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function g(u,c){function s(t,e,n,r){var o=l(u[t],u,e);if("throw"!==o.type){var i=o.arg,a=i.value;return a&&"object"==E(a)&&f.call(a,"__await")?c.resolve(a.__await).then(function(t){s("next",t,n,r)},function(t){s("throw",t,n,r)}):c.resolve(a).then(function(t){i.value=t,n(i)},function(t){return s("throw",t,n,r)})}r(o.arg)}var e;this._invoke=function(n,r){function t(){return new c(function(t,e){s(n,r,t,e)})}return e=e?e.then(t,t):t()}}function w(t,e){var n=t.iterator[e.method];if(undefined===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=undefined,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;){if(f.call(e,n))return t.value=e[n],t.done=!1,t}return t.value=undefined,t.done=!0,t};return r.next=r}}return{next:x}}function x(){return{value:undefined,done:!0}}return p.prototype=d,i(v,"constructor",d),i(d,"constructor",p),p.displayName=i(d,r,"GeneratorFunction"),a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i(t,r,"GeneratorFunction")),t.prototype=Object.create(v),t},a.awrap=function(t){return{__await:t}},b(g.prototype),i(g.prototype,n,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new g(u(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(v),i(v,r,"Generator"),i(v,o,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),a.keys=function(n){var r=[];for(var t in n){r.push(t)}return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=j,S.prototype={constructor:S,reset:function t(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(O),!e)for(var n in this){"t"===n.charAt(0)&&f.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=undefined)}},stop:function t(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function t(n){if(this.done)throw n;var r=this;function e(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=undefined),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=f.call(i,"catchLoc"),c=f.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function t(e,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&f.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function t(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),s},finish:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var i=o.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function t(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=undefined),s}},a}function c(t,e,n,r,o,i,a){try{var u=t[i](a);var c=u.value}catch(t){n(t);return}if(u.done){e(c)}else{Promise.resolve(c).then(r,o)}}function s(u){return function(){var t=this,a=arguments;return new Promise(function(e,n){var r=u.apply(t,a);function o(t){c(r,e,n,o,i,"next",t)}function i(t){c(r,e,n,o,i,"throw",t)}o(undefined)})}}function o(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}function f(t,e,n){if(e)i(t.prototype,e);if(n)i(t,n);Object.defineProperty(t,"prototype",{writable:false});return t}function l(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});Object.defineProperty(t,"prototype",{writable:false});if(e)g(t,e)}function p(o){var i=v();return function t(){var e=w(o),n;if(i){var r=w(this).constructor;n=Reflect.construct(e,arguments,r)}else{n=e.apply(this,arguments)}return d(this,n)}}function d(t,e){if(e&&(E(e)==="object"||typeof e==="function")){return e}else if(e!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return y(t)}function y(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}function h(t){var r=typeof Map==="function"?new Map:undefined;h=function t(e){if(e===null||!b(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof r!=="undefined"){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return m(e,arguments,w(this).constructor)}n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});return g(n,e)};return h(t)}function m(t,e,n){if(v()){m=Reflect.construct.bind()}else{m=function t(e,n,r){var o=[null];o.push.apply(o,n);var i=Function.bind.apply(e,o);var a=new i;if(r)g(a,r.prototype);return a}}return m.apply(null,arguments)}function v(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(t){return false}}function b(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function g(t,e){g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function t(e,n){e.__proto__=n;return e};return g(t,e)}function w(t){w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function t(e){return e.__proto__||Object.getPrototypeOf(e)};return w(t)}var _=function(t){l(n,t);var e=p(n);function n(){o(this,n);return e.apply(this,arguments)}f(n,[{key:"connectedCallback",value:function t(){this._idTarget="";if(localStorage.getItem("role")==="2"){this.loadUserChat()}else if(localStorage.getItem("role")==="1"){this.loadAdminChat()}}},{key:"attributeChangedCallback",value:function t(e,n,r){this[e]=r;this.loadAdminChat()}},{key:"loadAdminChat",value:function(){var t=s(T().mark(function t(){var i=this;var n;return T().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:this.renderAdminChat();n=function(){var e=s(T().mark(function t(){var n;return T().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:n=[];e.next=3;return a["a"].database().ref("users").orderByChild("updatedAt").on("value",function(){var e=s(T().mark(function t(n){var r,o;return T().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:console.log(Object.values(n.val()));r=document.querySelector(".user-list");r.innerHTML="";console.log(n.val());o=[];n.forEach(function(t){o.unshift(t.val())});Object(u["u"])(o,r);i._onClickUserList();case 8:case"end":return e.stop()}}},t)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}},t)}));return function t(){return e.apply(this,arguments)}}();e.next=4;return n();case 4:case"end":return e.stop()}}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_onClickUserList",value:function t(){var n=this;var e=document.querySelectorAll(".user-list__item");console.log(e);var r=function(){var n=s(T().mark(function t(n){return T().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:a["a"].database().ref("messages/".concat(localStorage.getItem("id"),"/").concat(n)).on("value",function(t){var e=[];var n=t.val();for(var r in n){var o={from:n[r].from,message:n[r].message,to:n[r].to};e.push(o);if(e.length>15){e.splice(0,6)}}Object(u["d"])(e,localStorage.getItem("id"))});case 1:case"end":return e.stop()}}},t)}));return function t(e){return n.apply(this,arguments)}}();e.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();t.stopPropagation();console.log(t.currentTarget.dataset.id);n._idTarget=t.currentTarget.dataset.id;r(t.currentTarget.dataset.id);if(n._idTarget!==""){var e=document.querySelector("#inputMessageAdmin");e.removeAttribute("disabled");r(n._idTarget)}})});if(this._idTarget===""){var o=document.querySelector("#inputMessageAdmin");o.setAttribute("disabled",true)}var i=document.querySelector("#inputMessageAdmin");document.querySelector("#submitMessageAdmin").addEventListener("click",function(t){t.preventDefault();if(i.value!==""){a["a"].database().ref("/messages/".concat(localStorage.getItem("id"),"/").concat(n._idTarget,"/").concat((new Date).getTime())).set({from:localStorage.getItem("id"),message:i.value,to:n._idTarget});a["a"].database().ref("/messages/".concat(n._idTarget,"/").concat(localStorage.getItem("id"),"/").concat((new Date).getTime())).set({from:localStorage.getItem("id"),message:i.value,to:n._idTarget});a["a"].database().ref("/users/".concat(n._idTarget)).update({lastSender:localStorage.getItem("id")});r(n._idTarget)}i.value=""})}},{key:"loadUserChat",value:function t(){this.renderChatUser();var e=function(){var e=s(T().mark(function t(){return T().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:a["a"].database().ref("messages/".concat(localStorage.getItem("id"),"/").concat(r["a"].ADMIN_ID)).on("value",function(t){var e=[];var n=t.val();for(var r in n){var o={from:n[r].from,message:n[r].message,to:n[r].to};e.push(o);if(e.length>15){e.splice(0,6)}}Object(u["e"])(e,localStorage.getItem("id"))});case 1:case"end":return e.stop()}}},t)}));return function t(){return e.apply(this,arguments)}}();e();var n=document.querySelector("#inputMessage");document.querySelector("#submitMessage").addEventListener("click",function(t){t.preventDefault();if(n.value!==""){a["a"].database().ref("/messages/".concat(localStorage.getItem("id"),"/").concat(r["a"].ADMIN_ID,"/").concat((new Date).getTime())).set({from:localStorage.getItem("id"),message:n.value,to:r["a"].ADMIN_ID});a["a"].database().ref("/messages/".concat(r["a"].ADMIN_ID,"/").concat(localStorage.getItem("id"),"/").concat((new Date).getTime())).set({from:localStorage.getItem("id"),message:n.value,to:r["a"].ADMIN_ID});a["a"].database().ref("/users/".concat(localStorage.getItem("id"))).set({id:localStorage.getItem("id"),email:localStorage.getItem("email"),nama:localStorage.getItem("nama"),lastSender:localStorage.getItem("id"),updatedAt:(new Date).getTime()});e()}n.value=""})}},{key:"renderAdminChat",value:function t(){this.innerHTML='\n    <div class="chat-admin" id="chatContainer">\n        <div class="chat__inner">\n\n            <div class="user-list">\n\n\n            </div>\n            <div class="chat__item-admin">\n                <div class="text-message">\n                  \n\n                </div>\n            </div>\n\n        </div>\n        <div class="chat__form">\n            <form class="chat__form__form-message">\n                <div class="form__input">\n                    <textarea id="inputMessageAdmin" name="inputMessage" placeholder="Type here..."\n                        class="form-control input-message" rows="1"></textarea>\n                </div>\n                <div class="form__submit-container">\n                    <button type="submit" id="submitMessageAdmin" class="submit-button">Submit</button>\n                </div>\n            </form>\n        </div>\n\n    </div>'}},{key:"renderChatUser",value:function t(){this.innerHTML='\n       \n\n  <div class="chat" id="chatContainer">\n  <div class="chat__item-container">\n    <div class="text-message">\n     \n    </div>\n  </div>\n  <div class="chat__form">\n    <form class="chat__form__form-message">\n        <div class="form__input">\n            <textarea id="inputMessage" name="inputMessage" placeholder="Type here..." class="form-control input-message" rows="2"></textarea>\n        </div>\n        <div class="form__submit-container">\n            <button type="submit" id="submitMessage" class="submit-button">Submit</button>\n        </div>\n    </form>\n  </div>\n\n</div>\n</div>\n      '}}],[{key:"observedAttributes",get:function t(){return["disabled"]}}]);return n}(h(HTMLElement));customElements.define("live-chat",_)},155:function(t,e){function n(t){"@babel/helpers - typeof";return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}function i(t,e,n){if(e)o(t.prototype,e);if(n)o(t,n);Object.defineProperty(t,"prototype",{writable:false});return t}function a(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});Object.defineProperty(t,"prototype",{writable:false});if(e)y(t,e)}function u(o){var i=p();return function t(){var e=h(o),n;if(i){var r=h(this).constructor;n=Reflect.construct(e,arguments,r)}else{n=e.apply(this,arguments)}return c(this,n)}}function c(t,e){if(e&&(n(e)==="object"||typeof e==="function")){return e}else if(e!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return s(t)}function s(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}function f(t){var r=typeof Map==="function"?new Map:undefined;f=function t(e){if(e===null||!d(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof r!=="undefined"){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return l(e,arguments,h(this).constructor)}n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});return y(n,e)};return f(t)}function l(t,e,n){if(p()){l=Reflect.construct.bind()}else{l=function t(e,n,r){var o=[null];o.push.apply(o,n);var i=Function.bind.apply(e,o);var a=new i;if(r)y(a,r.prototype);return a}}return l.apply(null,arguments)}function p(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(t){return false}}function d(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function y(t,e){y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function t(e,n){e.__proto__=n;return e};return y(t,e)}function h(t){h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function t(e){return e.__proto__||Object.getPrototypeOf(e)};return h(t)}var m=function(t){a(n,t);var e=u(n);function n(){r(this,n);return e.apply(this,arguments)}i(n,[{key:"connectedCallback",value:function t(){this.render()}},{key:"mitraContainer",get:function t(){return document.querySelector("#mitraList")}},{key:"render",value:function t(){this.innerHTML='\n        <style>\n          .list-mitra{\n            width:90%;\n            text-align:center;\n            margin: 0 auto;\n            padding: 0 0 60px 0;\n          }\n\n        .list-mitra h2 {\n          font-size: 23px;\n          font-weight: 500;\n          margin-bottom: 20px;\n        }\n\n        .list-mitra ul{\n          margin:auto;\n          display:flex;\n          padding: 0;\n          justify-content: center;\n          gap: 10%;\n        }\n\n        .list-mitra ul li{\n          list-style:none;\n        }\n\n        .list-mitra img{\n          width:80px;\n          border-radius: 50%;\n        }\n\n        @media screen and (min-width: 700px) {\n          .list-mitra img{\n            width:120px;\n          }\n        }\n      </style>\n        \n      <div class="list-mitra">\n        <h2>Mitra</h2>\n        <ul \n          data-aos="fade-up"\n          data-aos-offset="200"\n          data-aos-delay="50"\n          data-aos-duration="1000"\n          data-aos-easing="ease-in-out"\n          data-aos-mirror="true"\n          data-aos-once="true"\n          id=\'mitraList\'>\n        </ul>\n      </div>\n    '}}]);return n}(f(HTMLElement));customElements.define("list-mitra",m)},183:function(t,e,n){"use strict";var r=n(2);function o(t){"@babel/helpers - typeof";return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}function u(t,e,n){if(e)a(t.prototype,e);if(n)a(t,n);Object.defineProperty(t,"prototype",{writable:false});return t}function c(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});Object.defineProperty(t,"prototype",{writable:false});if(e)m(t,e)}function s(o){var i=y();return function t(){var e=v(o),n;if(i){var r=v(this).constructor;n=Reflect.construct(e,arguments,r)}else{n=e.apply(this,arguments)}return f(this,n)}}function f(t,e){if(e&&(o(e)==="object"||typeof e==="function")){return e}else if(e!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return l(t)}function l(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}function p(t){var r=typeof Map==="function"?new Map:undefined;p=function t(e){if(e===null||!h(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof r!=="undefined"){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return d(e,arguments,v(this).constructor)}n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});return m(n,e)};return p(t)}function d(t,e,n){if(y()){d=Reflect.construct.bind()}else{d=function t(e,n,r){var o=[null];o.push.apply(o,n);var i=Function.bind.apply(e,o);var a=new i;if(r)m(a,r.prototype);return a}}return d.apply(null,arguments)}function y(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(t){return false}}function h(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function m(t,e){m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function t(e,n){e.__proto__=n;return e};return m(t,e)}function v(t){v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function t(e){return e.__proto__||Object.getPrototypeOf(e)};return v(t)}var b=function(t){c(n,t);var e=s(n);function n(){i(this,n);return e.apply(this,arguments)}u(n,[{key:"item",set:function t(e){this._item=e;this.render()}},{key:"render",value:function t(){this.innerHTML='\n      <div class="wrapper-news">\n        <div class="wrapper-news__item">\n          <div \n            data-aos="zoom-in"\n            data-aos-offset="200"\n            data-aos-delay="50"\n            data-aos-duration="1000"\n            data-aos-easing="ease-in-out"\n            data-aos-mirror="true"\n            data-aos-once="true" \n            class="item-news__image">\n            <img src="'.concat(this._item.urlToImage!==null?this._item.urlToImage:"./images/no_image_available.png",'" alt="').concat(this._item.title,'" >\n            </div>\n          <div\n            data-aos="zoom-in"\n            data-aos-offset="200"\n            data-aos-delay="50"\n            data-aos-duration="1000"\n            data-aos-easing="ease-in-out"\n            data-aos-mirror="true"\n            data-aos-once="true" \n            class="item-news__content">\n            <h3>').concat(this._item.title,"</h3>\n            <p>").concat(this._item.description,'</p>\n            <div class="item-news__footer">\n              <span>').concat(Object(r["b"])(this._item.publishedAt),'</span>\n              <span><a href="').concat(this._item.url,'" target="_blank" rel="noreferrer" class="news-link">Selengkapnya <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    ')}}]);return n}(p(HTMLElement));customElements.define("news-list",b)},186:function(t,e){function n(t){"@babel/helpers - typeof";return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}function i(t,e,n){if(e)o(t.prototype,e);if(n)o(t,n);Object.defineProperty(t,"prototype",{writable:false});return t}function a(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});Object.defineProperty(t,"prototype",{writable:false});if(e)y(t,e)}function u(o){var i=p();return function t(){var e=h(o),n;if(i){var r=h(this).constructor;n=Reflect.construct(e,arguments,r)}else{n=e.apply(this,arguments)}return c(this,n)}}function c(t,e){if(e&&(n(e)==="object"||typeof e==="function")){return e}else if(e!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return s(t)}function s(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}function f(t){var r=typeof Map==="function"?new Map:undefined;f=function t(e){if(e===null||!d(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof r!=="undefined"){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return l(e,arguments,h(this).constructor)}n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});return y(n,e)};return f(t)}function l(t,e,n){if(p()){l=Reflect.construct.bind()}else{l=function t(e,n,r){var o=[null];o.push.apply(o,n);var i=Function.bind.apply(e,o);var a=new i;if(r)y(a,r.prototype);return a}}return l.apply(null,arguments)}function p(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(t){return false}}function d(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function y(t,e){y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function t(e,n){e.__proto__=n;return e};return y(t,e)}function h(t){h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function t(e){return e.__proto__||Object.getPrototypeOf(e)};return h(t)}var m=function(t){a(n,t);var e=u(n);function n(){r(this,n);return e.apply(this,arguments)}i(n,[{key:"connectedCallback",value:function t(){this.render()}},{key:"render",value:function t(){this.innerHTML='\n        <div id="loader" class="loader-container">\n            <div class="loader-content"></div>\n        </div>\n    '}}]);return n}(f(HTMLElement));customElements.define("loader-content",m)}}]);