/*! For license information please see app~48bafecf.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklost_and_found_finder=self.webpackChunklost_and_found_finder||[]).push([[959],{1454:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(5540),a=e(2237),o=e(8386);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(){c=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,i=Object.create(o.prototype),c=new T(r||[]);return a(i,"_invoke",{value:O(t,e,c)}),i}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function b(){}function w(){}function k(){}var x={};h(x,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(F([])));E&&E!==e&&r.call(E,u)&&(x=E);var _=k.prototype=b.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(a,o,c,u){var l=p(t[a],t,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==i(h)&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,a){e(t,r,n,a)}))}return o=o?o.then(a,a):a()}})}function O(n,e,r){var a=d;return function(o,i){if(a===y)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=y;var l=p(n,e,r);if("normal"===l.type){if(a=r.done?v:m,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}function P(n,e){var r=e.method,a=n.iterator[r];if(a===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function G(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,o=function e(){for(;++a<n.length;)if(r.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(i(n)+" is not iterable")}return w.prototype=k,a(_,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:w,configurable:!0}),w.displayName=h(k,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===w||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},j(S.prototype),h(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new S(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),h(_,s,"Generator"),h(_,u,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=F,T.prototype={constructor:T,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function a(r,a){return c.type="throw",c.arg=n,e.next=r,a&&(e.method="next",e.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;G(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:F(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function u(t,n,e,r,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,a)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){u(o,r,a,i,c,"next",t)}function c(t){u(o,r,a,i,c,"throw",t)}i(void 0)}))}}const s={render:function(){return l(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div id="detail-page">\n    <header class="item-detail-header">\n      <h2>ITEM DETAIL</h2>\n    </header>\n    <div id="detail-item">\n      <div class="loading-animation">\n        <div class="loader"></div>\n        <div class="loading-text">Loading Item Detail</div>\n      </div>\n    </div>\n    <div class="detail-function">\n      <p></p>\n    </div>\n  </div>\n     ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return l(c().mark((function t(){var n,e,i,u,l;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.Z.parseActiveUrlWithoutCombiner(),t.next=3,r.Z.item(n.id);case 3:e=t.sent,"",i="found"===e.status?"Silahkan hubungi kontak yang tertera diatas, pastikan anda dapat membuktikan kepemilikan barang tersebut.<br>\n      Kehilangan, dan pencurian bukan tanggung jawab kami, jika masih tidak ada tanggapan<br>\n      silahkan hubungin pihak berwajib untuk menindak lanjuti.":"Silahkan hubungi kontak yang tertera diatas jika anda menemukan barang tersebut.",document.querySelector(".detail-function p").innerHTML=i,u=document.querySelector("#detail-item"),(l=u.querySelector(".loading-animation")).style.display="flex",u.innerHTML='\n      <div class="detail-image">\n        <img src="'.concat(a.Z.BASE_IMAGE_URL).concat(e.iditem_image,'" alt="item-detail-img">\n      </div>\n\n      <div class="detail-information">\n        <div class="detail-title ').concat("lost"===e.status?"lost":"found"===e.status?"found":"",'">\n          <h3>').concat("lost"===e.status?"Lost Item":"found"===e.status?"Found Item":e.status,'</h3>\n        </div>\n        <div class="detail-body">\n          <div class="information-person">\n            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/person-male.png" alt="person-male"/>\n            <p>Dipublish oleh : ').concat(e.user_name,'</p>\n          </div>\n          <div class="information-time">\n            <img width="20" height="20" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1"/>\n            <p>Tanggal : ').concat(new Date(e.item_date).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),'</p>\n          </div>\n          <div class="information-place">\n            <img width="20" height="20" src="https://img.icons8.com/ios/30/marker--v1.png" alt="marker--v1"/>\n            <p>Lokasi : ').concat(e.item_location,'</p>\n          </div>\n          <div class="information-email">\n            <img width="20" height="20" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-at-mail-dreamstale-lineal-dreamstale-2.png" alt="external-at-mail-dreamstale-lineal-dreamstale-2" alt="marker--v1"/>\n            <p>Email : ').concat(e.user_email,'</p>\n          </div>\n          <div class="information-phone">\n            <img width="20" height="20" src="https://img.icons8.com/carbon-copy/100/phone.png" alt="marker--v1"/>\n            <p>Number : ').concat(e.user_phone,"</p>\n          </div>\n          <p>Detail Informasi :</p>\n          <p>").concat(e.item_description,'</p>\n          <div class="logo-filler">\n            <img src="icon.png">\n          </div>\n        </div>\n      </div>\n    '),u.querySelector(".detail-image img").onload=function(){l.style.display="none"};case 13:case"end":return t.stop()}}),t)})))()}}},4282:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(7350),a=e(5438),o=e(7224);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(){c=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,i=Object.create(o.prototype),c=new T(r||[]);return a(i,"_invoke",{value:O(t,e,c)}),i}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function b(){}function w(){}function k(){}var x={};h(x,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(F([])));E&&E!==e&&r.call(E,u)&&(x=E);var _=k.prototype=b.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(a,o,c,u){var l=p(t[a],t,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==i(h)&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,a){e(t,r,n,a)}))}return o=o?o.then(a,a):a()}})}function O(n,e,r){var a=d;return function(o,i){if(a===y)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=y;var l=p(n,e,r);if("normal"===l.type){if(a=r.done?v:m,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}function P(n,e){var r=e.method,a=n.iterator[r];if(a===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function G(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,o=function e(){for(;++a<n.length;)if(r.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(i(n)+" is not iterable")}return w.prototype=k,a(_,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:w,configurable:!0}),w.displayName=h(k,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===w||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},j(S.prototype),h(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new S(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),h(_,s,"Generator"),h(_,u,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=F,T.prototype={constructor:T,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function a(r,a){return c.type="throw",c.arg=n,e.next=r,a&&(e.method="next",e.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;G(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:F(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function u(t,n,e,r,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,a)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){u(o,r,a,i,c,"next",t)}function c(t){u(o,r,a,i,c,"throw",t)}i(void 0)}))}}const s={render:function(){return l(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <h2 class="page-title">Kenali Peranmu!</h2>\n        <div id="finder-profile">\n            <div class="profile-card">\n                <div class="profile-img">\n                  <img src="'.concat(r.Z,'">\n                  <h2>Finder</h2>\n                 </div>\n                 <div class="profile-info">\n                    <h3>Finder</h3>\n                    <p>Finder adalah seseorang yang menemukan barang yang hilang. Finder berperan penting dalam proses mencari dan mungkin mengembalikan barang yang hilang.</p>\n                </div>\n              </div>\n\n              <div class="profile-card">\n                <div class="profile-img">\n                  <img src="').concat(a.Z,'">\n                  <h2>Helper</h2>\n                </div>\n               <div class="profile-info">\n                  <h3>Helper</h3>\n                  <p>Helper merujuk pada individu yang menawarkan bantuan atau dukungan kepada mereka yang membutuhkannya.\n                  dalam konteks situs web ini, seorang helper bisa menjadi seseorang yang memberikan panduan, nasihat, atau bantuan praktis kepada penemu\n                  dan pencari dalam upaya mereka untuk menemukan atau mendapatkan kembali barang yang hilang.</p>\n              </div>\n            </div>\n\n            <div class="profile-card">\n                <div class="profile-img">\n                  <img src="').concat(o.Z,'">\n                  <h2>Seeker<h2>\n                 </div>\n                 <div class="profile-info">\n                    <h3>Seeker</h3>\n                    <p>Seeker adalah seseorang yang sedang aktif mencari barang yang hilang. Mereka mencari informasi\n                    , sumber daya, atau layanan yang dapat membantu mereka dalam menemukan barang yang hilang. Pencari mengandalkan bantuan dan alat\n                    yang disediakan oleh situs web untuk meningkatkan peluang mereka dalam menemukan barang yang hilang.</p>\n                </div>\n              </div>\n         </div>\n         <div class="warning-card">\n            <div class="warning-card-content">\n              <p>Penting untuk diingat bahwa peran finder, seeker, dan helper di situs web ini bertujuan untuk membantu proses penemuan dan pemulihan barang yang hilang. Namun, perlu diperhatikan bahwa setiap individu yang menggunakan situs ini bertanggung jawab atas tindakan dan keputusan mereka sendiri.</p><br>\n              <p>Kami mengingatkan Anda untuk mematuhi undang-undang pencurian yang berlaku. Tindakan pencurian adalah ilegal dan melanggar hak milik orang lain. Kami tidak mendukung atau bertanggung jawab atas tindakan yang melanggar hukum.</p><br>\n              <p>Dalam penggunaan situs ini, pengguna diharapkan untuk berperilaku dengan integritas dan bertindak sesuai dengan hukum yang berlaku. Jika Anda menemukan barang yang hilang, kami mendorong Anda untuk bekerja sama dengan pihak berwenang dan mengikuti prosedur yang sesuai untuk mengembalikan barang tersebut kepada pemiliknya.</p><br>\n              <p>Kami tidak dapat memberikan nasihat hukum secara langsung. Jika Anda memiliki pertanyaan hukum atau kekhawatiran terkait pertanggungjawaban hukum, disarankan untuk berkonsultasi dengan ahli hukum yang berkualifikasi di wilayah Anda.</p>\n            </div>\n          </div>\n      '));case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return l(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},9699:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(){a=function(){return n};var t,n={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var a=n&&n.prototype instanceof b?n:b,o=Object.create(a.prototype),c=new T(r||[]);return i(o,"_invoke",{value:O(t,e,c)}),o}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function b(){}function w(){}function k(){}var x={};h(x,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(F([])));E&&E!==e&&o.call(E,u)&&(x=E);var _=k.prototype=b.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(a,i,c,u){var l=p(t[a],t,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==r(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,a){e(t,r,n,a)}))}return a=a?a.then(o,o):o()}})}function O(n,e,r){var a=d;return function(o,i){if(a===y)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=y;var l=p(n,e,r);if("normal"===l.type){if(a=r.done?v:m,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}function P(n,e){var r=e.method,a=n.iterator[r];if(a===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function G(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,i=function e(){for(;++a<n.length;)if(o.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(r(n)+" is not iterable")}return w.prototype=k,i(_,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:w,configurable:!0}),w.displayName=h(k,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===w||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},j(S.prototype),h(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new S(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),h(_,s,"Generator"),h(_,u,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=F,T.prototype={constructor:T,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!n)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,a){return c.type="throw",c.arg=n,e.next=r,a&&(e.method="next",e.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;G(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:F(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function o(t,n,e,r,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,a)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var i=t.apply(n,e);function c(t){o(i,r,a,c,u,"next",t)}function u(t){o(i,r,a,c,u,"throw",t)}c(void 0)}))}}e.d(n,{Z:()=>c});const c={render:function(){return i(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <h2 class="form-title">Form Menemukan Barang</h2>\n      <div class="card form-container">\n          <form>\n      <div class="mb-3">\n          <label for="exampleInputEmail1" class="form-label">Email address</label>\n          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">\n          <div id="emailHelp" class="form-text">We\'ll never share your email with anyone else.</div>\n      </div>\n      <div class="mb-3">\n          <label for="exampleInputPassword1" class="form-label">Password</label>\n          <input type="password" class="form-control" id="exampleInputPassword1">\n      </div>\n      <div class="mb-3 form-check">\n          <input type="checkbox" class="form-check-input" id="exampleCheck1">\n          <label class="form-check-label" for="exampleCheck1">Check me out</label>\n      </div>\n      <button type="submit" class="btn btn-primary">Submit</button>\n      </form>\n      </div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return i(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},1087:(t,n,e)=>{e.d(n,{Z:()=>l}),e(9897);var r=e(9319),a=e(6356);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,i=Object.create(o.prototype),c=new T(r||[]);return a(i,"_invoke",{value:O(t,e,c)}),i}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function b(){}function w(){}function k(){}var x={};h(x,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(F([])));E&&E!==e&&r.call(E,u)&&(x=E);var _=k.prototype=b.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(a,i,c,u){var l=p(t[a],t,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==o(h)&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,a){e(t,r,n,a)}))}return i=i?i.then(a,a):a()}})}function O(n,e,r){var a=d;return function(o,i){if(a===y)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=y;var l=p(n,e,r);if("normal"===l.type){if(a=r.done?v:m,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}function P(n,e){var r=e.method,a=n.iterator[r];if(a===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function G(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,i=function e(){for(;++a<n.length;)if(r.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(o(n)+" is not iterable")}return w.prototype=k,a(_,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:w,configurable:!0}),w.displayName=h(k,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===w||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},j(S.prototype),h(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new S(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),h(_,s,"Generator"),h(_,u,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=F,T.prototype={constructor:T,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function a(r,a){return c.type="throw",c.arg=n,e.next=r,a&&(e.method="next",e.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;G(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:F(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function c(t,n,e,r,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){c(o,r,a,i,u,"next",t)}function u(t){c(o,r,a,i,u,"throw",t)}i(void 0)}))}}const l={render:function(){return u(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="hero">\n      <div class="hero-text">\n        <h3>Halo!</h3>\n        <h1>Menemukan Barang?</h1>\n        <p>Laporkan penemuan mu disini, agar sang pemilik dapat menemukan barangnya!</p>\n      </div>\n      <div class="bg-image">\n        <img src="'.concat(r.Z,'" alt="Hero Image">\n      </div>\n    </div>\n    <div id="information-section">\n        <p>Harap pastikan untuk membaca dan memahami <b>Syarat dan Ketentuan</b> website kami guna menghindari penggunaan yang tidak tepat atau melanggar prosedur. Setelah Anda memahami syarat dan ketentuan tersebut, silakan manfaatkan fitur-fitur website kami sebaik mungkin. Kami berharap dengan tulus agar barang-barang yang hilang segera ditemukan dan dikembalikan kepada pemiliknya. Terima kasih atas kerjasamanya!</p>\n    </div>\n    <div id="form-section">\n      <found-form></found-form>\n    </div>\n    '));case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return u(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector(".submit-btn button").addEventListener("click",a.Z);case 2:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~48bafecf.bundle.js.map