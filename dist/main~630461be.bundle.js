(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{117:function(t,e,n){"use strict";var r=n(51);var i=n(2);function E(t){"@babel/helpers - typeof";return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */O=function t(){return i};var i={},t=Object.prototype,l=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function t(e,n,r){return e[n]=r}}function c(t,e,n,r){var o=e&&e.prototype instanceof u?e:u,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(a,i,c){var u="suspendedStart";return function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return j()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){var r=b(n,c);if(r){if(r===s)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===u)throw u="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u="executing";var o=f(a,i,c);if("normal"===o.type){if(u=c.done?"completed":"suspendedYield",o.arg===s)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u="completed",c.method="throw",c.arg=o.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var s={};function u(){}function h(){}function p(){}var d={};a(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&l.call(y,o)&&(d=y);var g=p.prototype=u.prototype=Object.create(d);function m(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function w(c,u){function s(t,e,n,r){var o=f(c[t],c,e);if("throw"!==o.type){var a=o.arg,i=a.value;return i&&"object"==E(i)&&l.call(i,"__await")?u.resolve(i.__await).then(function(t){s("next",t,n,r)},function(t){s("throw",t,n,r)}):u.resolve(i).then(function(t){a.value=t,n(a)},function(t){return s("throw",t,n,r)})}r(o.arg)}var e;this._invoke=function(n,r){function t(){return new u(function(t,e){s(n,r,t,e)})}return e=e?e.then(t,t):t()}}function b(t,e){var n=t.iterator[e.method];if(undefined===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=undefined,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;){if(l.call(e,n))return t.value=e[n],t.done=!1,t}return t.value=undefined,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:undefined,done:!0}}return h.prototype=p,a(g,"constructor",p),a(p,"constructor",h),h.displayName=a(p,r,"GeneratorFunction"),i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,r,"GeneratorFunction")),t.prototype=Object.create(g),t},i.awrap=function(t){return{__await:t}},m(w.prototype),a(w.prototype,n,function(){return this}),i.AsyncIterator=w,i.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var a=new w(c(t,e,n,r),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(g),a(g,r,"Generator"),a(g,o,function(){return this}),a(g,"toString",function(){return"[object Generator]"}),i.keys=function(n){var r=[];for(var t in n){r.push(t)}return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=L,_.prototype={constructor:_,reset:function t(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(x),!e)for(var n in this){"t"===n.charAt(0)&&l.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=undefined)}},stop:function t(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function t(n){if(this.done)throw n;var r=this;function e(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=undefined),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var c=l.call(a,"catchLoc"),u=l.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function t(e,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&l.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function t(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),s},finish:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var a=o.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function t(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=undefined),s}},i}function u(t,e,n,r,o,a,i){try{var c=t[a](i);var u=c.value}catch(t){n(t);return}if(c.done){e(u)}else{Promise.resolve(u).then(r,o)}}function c(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){u(r,e,n,o,a,"next",t)}function a(t){u(r,e,n,o,a,"throw",t)}o(undefined)})}}function a(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}function s(t,e,n){if(e)o(t.prototype,e);if(n)o(t,n);Object.defineProperty(t,"prototype",{writable:false});return t}var l=function(){function o(t){var e=t.view,n=t.dataDb,r=t.authDb;a(this,o);this._view=e;this._dataDb=n;this._authDb=r;this._getAllCollectionsHandler()}s(o,[{key:"_buttonGeneratePartnerHandler",value:function t(){var a=this;this._view.buttonGeneratePartnerListener(function(t){console.log(t);t.forEach(function(o){o.addEventListener("click",function(){var e=c(O().mark(function t(n){var r;return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:console.log(n.target.dataset.id);console.log(n.target.dataset.kota);e.prev=2;o.classList.add("none");Object(i["h"])(a._view.loaderElementListener());e.next=7;return a._dataDb.getPartnersByCity(n.target.dataset.id,localStorage.getItem("token"));case 7:r=e.sent;if(r.status===200){Object(i["a"])(a._view.loaderElementListener());a._renderPartnersDropdown(r.data.data,n.target.dataset.id)}e.next=14;break;case 11:e.prev=11;e.t0=e["catch"](2);o.classList.remove("none");case 14:case"end":return e.stop()}}},t,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}())})})}},{key:"_getAllCollectionsHandler",value:function(){var t=c(O().mark(function t(){var o=this;var n;return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;Object(i["h"])(this._view.loaderListener());e.next=4;return this._dataDb.getAllCollections(localStorage.getItem("token"));case 4:n=e.sent;console.log(n);if(n.status===200){this._renderCollections(n.data.data)}e.next=12;break;case 9:e.prev=9;e.t0=e["catch"](0);if(e.t0.response.data.data.message){Object(i["e"])(e.t0.response.data.data.message,function(){var e=c(O().mark(function t(n){var r;return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;e.next=3;return o._authDb.refreshToken({token:n});case 3:r=e.sent;if(r.status===200){localStorage.setItem("token",r.data.data.token);localStorage.setItem("refreshToken",r.data.data.refreshToken);o._getAllCollectionsHandler()}e.next=11;break;case 7:e.prev=7;e.t0=e["catch"](0);console.log(e.t0);if(e.t0.response.status===403){Object(i["m"])("Session Expired, Please Login First","#/logout")}case 11:e.prev=11;setTimeout(function(){Object(i["a"])(o._view.loaderListener())},500);return e.finish(11);case 14:case"end":return e.stop()}}},t,null,[[0,7,11,14]])}));return function(t){return e.apply(this,arguments)}}())}case 12:e.prev=12;setTimeout(function(){Object(i["a"])(o._view.loaderListener())},500);return e.finish(12);case 15:case"end":return e.stop()}}},t,this,[[0,9,12,15]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"_renderCollections",value:function t(e){this._view.showCollections(e,c(O().mark(function t(){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:case"end":return e.stop()}}},t)})));this._buttonGeneratePartnerHandler();this._rejectActionHandler();this._finishActionHandler()}},{key:"_renderPartnersDropdown",value:function t(e,n){var r=this;this._view.showPartners(e,n,function(t){r._acceptActionHandler(t,n)})}},{key:"_acceptActionHandler",value:function t(r,e){var o=this;if(r.value!==""){this._view.acceptCollectionListener(function(t){t.forEach(function(t){if(t.dataset.id===e){t.removeAttribute("disabled")}console.log(t);t.addEventListener("click",function(){var e=c(O().mark(function t(n){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:n.preventDefault();Object(i["l"])("Yakin untuk Melanjutkan","Data sudah disetujui",c(O().mark(function t(){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;e.next=3;return o._acceptCollectionHandler(r,n.target.dataset.id);case 3:e.next=8;break;case 5:e.prev=5;e.t0=e["catch"](0);console.log(e.t0);case 8:case"end":return e.stop()}}},t,null,[[0,5]])})));case 2:case"end":return e.stop()}}},t)}));return function(t){return e.apply(this,arguments)}}())})})}}},{key:"_rejectActionHandler",value:function t(){var r=this;this._view.rejectCollectionListener(function(t){t.forEach(function(t){console.log(t);t.addEventListener("click",function(){var e=c(O().mark(function t(n){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:n.preventDefault();Object(i["l"])("Yakin untuk Menolak","Data berhasil Ditolak",c(O().mark(function t(){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;e.next=3;return r._rejectCollectionHandler(n.target.dataset.id);case 3:e.next=8;break;case 5:e.prev=5;e.t0=e["catch"](0);console.log(e.t0);case 8:case"end":return e.stop()}}},t,null,[[0,5]])})));case 2:case"end":return e.stop()}}},t)}));return function(t){return e.apply(this,arguments)}}())})})}},{key:"_finishActionHandler",value:function t(){var r=this;this._view.finishCollectionListener(function(t){t.forEach(function(t){console.log(t);t.addEventListener("click",function(){var e=c(O().mark(function t(n){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:n.preventDefault();Object(i["l"])("Yakin untuk Melanjutkan","Pengumpulan selesai",c(O().mark(function t(){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;e.next=3;return r._finishCollectionHandler(n.target.dataset.id);case 3:e.next=8;break;case 5:e.prev=5;e.t0=e["catch"](0);console.log(e.t0);case 8:case"end":return e.stop()}}},t,null,[[0,5]])})));case 2:case"end":return e.stop()}}},t)}));return function(t){return e.apply(this,arguments)}}())})})}},{key:"_acceptCollectionHandler",value:function(){var n=c(O().mark(function t(n,r){var o;return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;console.log(r);e.next=4;return this._dataDb.confirmCollection(localStorage.getItem("token"),{id_mitra:n.value,id_status:2},r);case 4:o=e.sent;if(o.status===200){Object(i["k"])("Pengajuan Berhasil Disetujui");this._getAllCollectionsHandler()}e.next=11;break;case 8:e.prev=8;e.t0=e["catch"](0);Object(i["m"])("Oops... Something Wrong");case 11:case"end":return e.stop()}}},t,this,[[0,8]])}));function t(t,e){return n.apply(this,arguments)}return t}()},{key:"_rejectCollectionHandler",value:function(){var e=c(O().mark(function t(n){var r;return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;console.log(n);e.next=4;return this._dataDb.putCollection(localStorage.getItem("token"),{id_status:3},n);case 4:r=e.sent;if(r.status===200){Object(i["k"])("Pengajuan Telah Ditolak");this._getAllCollectionsHandler()}e.next=11;break;case 8:e.prev=8;e.t0=e["catch"](0);Object(i["m"])("Oops... Something Wrong");case 11:case"end":return e.stop()}}},t,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"_finishCollectionHandler",value:function(){var e=c(O().mark(function t(n){var r;return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;console.log(n);e.next=4;return this._dataDb.putCollection(localStorage.getItem("token"),{id_status:4},n);case 4:r=e.sent;if(r.status===200){Object(i["k"])("Pengumpulan minyak Selesai");this._getAllCollectionsHandler()}e.next=11;break;case 8:e.prev=8;e.t0=e["catch"](0);Object(i["m"])("Oops... Something Wrong");case 11:case"end":return e.stop()}}},t,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"_addCollectionHandler",value:function t(){var r=this;this._view.collectionFormListener(function(){var e=c(O().mark(function t(n){return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:if(!(n.tanggal.value.length>0&&n.waktu.value.length>0&&n.total_minyak.value.length>0&&n.pesan.value.length>0&&n.id_kota.value.length>0&&n.alamat.value.length>0)){e.next=8;break}if(!(n.total_minyak.value<1)){e.next=4;break}Object(i["o"])(n.total_minyak);return e.abrupt("return");case 4:e.next=6;return r._postCollectionHandler(n,localStorage.getItem("token"));case 6:e.next=9;break;case 8:Object(i["d"])(n.tanggal,n.waktu,n.total_minyak,n.id_kota,n.pesan,n.alamat);case 9:case"end":return e.stop()}}},t)}));return function(t){return e.apply(this,arguments)}}())}},{key:"_postCollectionHandler",value:function(){var n=c(O().mark(function t(n,r){var o;return O().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:e.prev=0;e.next=3;return this._dataDb.postColletion({tanggal:n.tanggal.value,waktu:n.waktu.value,total_minyak:n.total_minyak.value,pesan:n.pesan.value,id_kota:n.id_kota.value,alamat:n.alamat.value},r);case 3:o=e.sent;if(!(o.status===200)){e.next=8;break}e.next=7;return Object(i["k"])("".concat(o.data.message),"");case 7:Object(i["j"])(n);case 8:e.next=14;break;case 10:e.prev=10;e.t0=e["catch"](0);e.next=14;return Object(i["m"])("".concat(e.t0.response.data.message));case 14:case"end":return e.stop()}}},t,this,[[0,10]])}));function t(t,e){return n.apply(this,arguments)}return t}()}]);return o}();var f=l;var h=n(99);var p=n(14);var d=n(13);function S(t){"@babel/helpers - typeof";return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function P(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */P=function t(){return i};var i={},t=Object.prototype,l=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function t(e,n,r){return e[n]=r}}function c(t,e,n,r){var o=e&&e.prototype instanceof u?e:u,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(a,i,c){var u="suspendedStart";return function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return j()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){var r=b(n,c);if(r){if(r===s)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===u)throw u="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u="executing";var o=f(a,i,c);if("normal"===o.type){if(u=c.done?"completed":"suspendedYield",o.arg===s)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u="completed",c.method="throw",c.arg=o.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var s={};function u(){}function h(){}function p(){}var d={};a(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&l.call(y,o)&&(d=y);var g=p.prototype=u.prototype=Object.create(d);function m(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function w(c,u){function s(t,e,n,r){var o=f(c[t],c,e);if("throw"!==o.type){var a=o.arg,i=a.value;return i&&"object"==S(i)&&l.call(i,"__await")?u.resolve(i.__await).then(function(t){s("next",t,n,r)},function(t){s("throw",t,n,r)}):u.resolve(i).then(function(t){a.value=t,n(a)},function(t){return s("throw",t,n,r)})}r(o.arg)}var e;this._invoke=function(n,r){function t(){return new u(function(t,e){s(n,r,t,e)})}return e=e?e.then(t,t):t()}}function b(t,e){var n=t.iterator[e.method];if(undefined===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=undefined,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;){if(l.call(e,n))return t.value=e[n],t.done=!1,t}return t.value=undefined,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:undefined,done:!0}}return h.prototype=p,a(g,"constructor",p),a(p,"constructor",h),h.displayName=a(p,r,"GeneratorFunction"),i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,r,"GeneratorFunction")),t.prototype=Object.create(g),t},i.awrap=function(t){return{__await:t}},m(w.prototype),a(w.prototype,n,function(){return this}),i.AsyncIterator=w,i.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var a=new w(c(t,e,n,r),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(g),a(g,r,"Generator"),a(g,o,function(){return this}),a(g,"toString",function(){return"[object Generator]"}),i.keys=function(n){var r=[];for(var t in n){r.push(t)}return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=L,_.prototype={constructor:_,reset:function t(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(x),!e)for(var n in this){"t"===n.charAt(0)&&l.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=undefined)}},stop:function t(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function t(n){if(this.done)throw n;var r=this;function e(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=undefined),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var c=l.call(a,"catchLoc"),u=l.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function t(e,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&l.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function t(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),s},finish:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var a=o.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function t(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=undefined),s}},i}function v(t,e,n,r,o,a,i){try{var c=t[a](i);var u=c.value}catch(t){n(t);return}if(c.done){e(u)}else{Promise.resolve(u).then(r,o)}}function y(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){v(r,e,n,o,a,"next",t)}function a(t){v(r,e,n,o,a,"throw",t)}o(undefined)})}}var g=new h["a"];var m={render:function t(){return y(P().mark(function t(){return P().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:return e.abrupt("return",{footer:false,content:g.getTemplate()});case 1:case"end":return e.stop()}}},t)}))()},afterRender:function t(){return y(P().mark(function t(){return P().wrap(function t(e){while(1){switch(e.prev=e.next){case 0:new f({view:g,dataDb:p["a"],authDb:d["a"]});case 1:case"end":return e.stop()}}},t)}))()}};var w=e["a"]=m}}]);