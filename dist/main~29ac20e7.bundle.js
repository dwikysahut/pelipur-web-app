(function(p){function n(n){var t=n[0];var e=n[1];var o=n[2];var i,r,a=0,d=[];for(;a<t.length;a++){r=t[a];if(Object.prototype.hasOwnProperty.call(s,r)&&s[r]){d.push(s[r][0])}s[r]=0}for(i in e){if(Object.prototype.hasOwnProperty.call(e,i)){p[i]=e[i]}}if(m)m(n);while(d.length){d.shift()()}c.push.apply(c,o||[]);return l()}function l(){var n;for(var t=0;t<c.length;t++){var e=c[t];var o=true;for(var i=1;i<e.length;i++){var r=e[i];if(s[r]!==0)o=false}if(o){c.splice(t--,1);n=a(a.s=e[0])}}return n}var e={};var s={21:0};var c=[];function a(n){if(e[n]){return e[n].exports}var t=e[n]={i:n,l:false,exports:{}};p[n].call(t.exports,t,t.exports,a);t.l=true;return t.exports}a.m=p;a.c=e;a.d=function(n,t,e){if(!a.o(n,t)){Object.defineProperty(n,t,{enumerable:true,get:e})}};a.r=function(n){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(n,"__esModule",{value:true})};a.t=function(t,n){if(n&1)t=a(t);if(n&8)return t;if(n&4&&typeof t==="object"&&t&&t.__esModule)return t;var e=Object.create(null);a.r(e);Object.defineProperty(e,"default",{enumerable:true,value:t});if(n&2&&typeof t!="string")for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e};a.n=function(t){var n=t&&t.__esModule?function n(){return t["default"]}:function n(){return t};a.d(n,"a",n);return n};a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)};a.p="";var t=window["webpackJsonp"]=window["webpackJsonp"]||[];var o=t.push.bind(t);t.push=n;t=t.slice();for(var i=0;i<t.length;i++)n(t[i]);var m=o;c.push([189,11,2,14,5,9,17,8,1,10,3,4,6,0,7,15,12,16,13,23,22,27,30,34,20,35,33,32,40,43,31,44,38,26,24,36,25,28,39,19,18,37,41,29,42]);return l()})({121:function(n,t,e){var o=e(52);var i=e(122);i=i.__esModule?i.default:i;if(typeof i==="string"){i=[[n.i,i,""]]}var r={};r.insert="head";r.singleton=false;var a=o(i,r);n.exports=i.locals||{}},122:function(n,t,e){var o=e(21);var i=e(123);var r=e(124);var a=e(125);var d=e(126);var p=e(127);var l=e(128);var s=e(129);var c=e(130);var m=e(131);var x=e(132);var f=e(133);var g=e(134);var h=e(135);t=o(false);t.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400;700&family=Poppins:wght@400;500;600;700&family=Quicksand:wght@300;400;500;700&display=swap);"]);t.i(i);t.i(r);t.i(a);t.i(d);t.i(p);t.i(l);t.i(s);t.i(c);t.i(m);t.i(x);t.i(f);var u=g(h);t.push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n}\n\nmain,\nbody {\n  min-height: 100vh;\n  scroll-margin-top: 40px;\n  font-family: 'Poppins', sans-serif;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.skip-link {\n  position: absolute;\n  top: -50px;\n  left: 0;\n  background-color: black;\n  color: white;\n  padding: 15px;\n  line-height: 15px;\n  z-index: 100;\n  min-width: 44px;\n  min-height: 44px;\n  font-size: 15px;\n  border-radius: 5px;\n  text-decoration: none;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  max-height: 100px;\n  padding: 16px 32px;\n}\n\n.header__inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n}\n\n.header__inner__title {\n  color: white;\n  font-weight: 400;\n  font-family: 'Oleo Script Swash Caps', cursive;\n  font-style: italic;\n  font-size: large;\n  margin: 0;\n  letter-spacing: 8px;\n}\n\n.header__inner__tag {\n  font-size: 0.5em;\n}\n\n.nav__list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0;\n  flex-direction: column;\n  margin: 10px 0;\n\n}\n\n.nav__item {\n  list-style: none;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n\n.nav__list li {\n  line-height: normal;\n  list-style: none;\n  display: flex;\n  width: 100%;\n  min-width: fit-content;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap !important;\n}\n\n.nav__item a.active {\n  background-color: #069a8e;\n  border-radius: 5px;\n  padding: 15px;\n  color: white !important;\n}\n\n.dropdown-content {\n  display: flex;\n  visibility: visible;\n  border-top: 1px solid white;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: static;\n  opacity: 1;\n  width: 100%;\n  min-width: 120px;\n  background-color: #005555;\n  transition: all 0.7s ease-in-out;\n  transition: visibility 0s, opacity 0.3s linear;\n  z-index: 4;\n  gap: 7px;\n  border-radius: 0 0 5px 5px;\n}\n\n#hamburger.rotate {\n  transform: rotate(90deg);\n  transform-origin: center center;\n  background-color: transparent;\n  transition: all 0.7s ease-in-out;\n}\n\nbutton#hambuger {\n  transition: all 0.7s ease-in-out;\n  color: #005555;\n}\n\n.menu-toggle button {\n  width: 44px;\n  height: 44px;\n  font-size: 22px;\n  opacity: 2;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.7s ease-in-out;\n  color: #005555;\n}\n\n.menu-toggle button {\n  opacity: 1;\n  border-radius: 3px;\n}\n\n.nav__list li:nth-child(4) {\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n.nav__list li:nth-child(5) {\n  border-radius: 5px;\n}\n\n.dropdown-dashboard {\n  margin-top: 12px;\n}\n\n.nav__item.dropdown {\n  width: 100%;\n  margin: 0 !important;\n}\n\n.profile-pict {\n  display: none;\n}\n.content-collection{\n  padding: 40px;\n}\n.header-icon {\n  display: flex;\n  justify-content: end;\n}\n\n.header-icon i {\n  color: white;\n  position: absolute;\n}\n\n.header__inner h1 {\n  font-size: 2rem;\n  color: #005555;\n}\n\n.header__inner h4 {\n  font-size: 6px;\n  color: white;\n}\n\n.nav__item a {\n  text-decoration: none;\n  font-family: 'Poppins', sans-serif;\n  color: white;\n  width: 100%;\n  font-size: 13px;\n  padding: 15px;\n  text-align: center;\n}\n\n.fa.fa-sort-desc {\n  color: #005555;\n}\n\n.nav__item a:hover {\n  color: white !important;\n  background-color: #069a8e;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.nav__item {\n  margin: 0;\n}\n\n#drawer {\n  width: 100%;\n  position: absolute;\n  background-color: #005555;\n  left: 0;\n  opacity: 0;\n  top: 70px;\n  text-align: center;\n  z-index: 5;\n  transition: all 0.8s;\n  transform: translate(-100%, 0);\n}\n\n.btn-drawer {\n  opacity: 1;\n  color: white;\n  font-size: 32px;\n  padding: 8px;\n  line-height: 8px;\n  border: none;\n  background-color: transparent !important;\n}\n\n.dropdown-content li {\n  color: white;\n}\n\n.dropdown-content a {\n  width: 100%;\n  color: white !important;\n  padding: 14px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n}\n\n.dropdown-content a:hover {\n  color: white;\n  border-radius: 0 0 5px 5px;\n}\n\n#drawer.slide {\n  transform: translate(0, 0);\n  opacity: 1;\n}\n\n.nav__item.dropdown:hover .dropdown-content {\n  visibility: visible;\n  opacity: 1;\n  z-index: 200;\n}\n\n.header__inner img {\n  width: 100%;\n}\n\n.hero {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  background-position: initial;\n  margin-bottom: 70px;\n  height: 600px;\n  filter: brightness(1) contrast(1.1);\n  background-attachment: fixed;\n  background-size: cover;  \n  background-repeat: no-repeat;\n  background-image: url("+u+");\n}\n\n.hero__inner {\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.hero__inner__image {\n  width: 100%;\n  flex-basis: 60%;\n}\n\n.hero__inner__text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero__inner__image > img {\n  width: 100%;\n  transform: scaleX(-1);\n}\n\n.hero__highlight {\n  color: #069a8e;\n  font-size: 39px;\n  font-weight: 500;\n}\n\n.hero__title {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 2.9em;\n  font-weight: lighter;\n  line-height: 1.4;\n  padding: 15px;\n  color: black;\n}\n\n.hero__join {\n  display: block;\n  width: 150px;\n  min-height: 20px;\n  line-height: 20px;\n  padding: 13px;\n  border-radius: 5px;\n  background-color: #069a8e;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 500;\n  border: none;\n  margin-top: 25px;\n  opacity: 1;\n  transition: 0.3s;\n  text-decoration: none;\n}\n\n.hero__join:hover {\n  opacity: 0.9;\n  color: #005555;\n  background-color: white;\n  box-shadow: 0 0 0 1px #005555;\n}\n\n.carousel-inner {\n  min-height: 330px;\n}\n\n.carousel-item {\n  max-height: 500px !important;\n  background-color: #069a8e;\n  border-radius: 5px;\n}\n\n.carousel.slide {\n  width: 80%;\n  margin: 0 auto 70px;\n  background-color: #069a8e;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.carousel-item h2 {\n  text-align: center;\n  margin: 40px auto 15px;\n  font-size: 23px;\n  font-weight: 500;\n  padding: 0 20px;\n}\n\n.carousel-item p {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  width: 70%;\n  font-size: 15px;\n}\n\narticle {\n  width: 80%;\n  margin: 0 auto 70px;\n  padding: 20px 15px;\n  background-color: white;\n  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */\n  border-radius: 5px;\n}\n\n.news-title {\n  font-size: 23px;\n  font-weight: 500;\n  text-align: center;\n  margin: 10px auto 20px;\n}\n\n.item-produk {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n  box-sizing: border-box;\n}\n\n.news-list {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end ;\n}\n\n.news-list a {\n  text-align: right;\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n  display: block;\n  margin-top: 20px;\n  text-decoration: none;\n}\n\n.news-list a:hover {\n  color: #069a8e;\n}\n\n.card {\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 5px !important;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n}\n\n.card .card-item {\n  background-color: white;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 5px;\n}\n\n.card-item > a {\n  text-decoration: none;\n}\n\n.card-item > a > h2:hover {\n  color: #069a8e;\n  text-decoration: none;\n}\n\n.card img {\n  width: 100%;\n  border-radius: 5px;\n  filter: brightness(0.7) ;\n}\n\n.card h4 {\n  padding: 0 10px;\n  margin-top: -20px;\n  position: relative;\n  color: white;\n  font-size: 13px;\n}\n\n.card h3 {\n  padding: 10px;\n  color: #005555;\n  font-size: 17px !important;\n}\n\n.card p {\n  padding: 5px;\n  font-family: sans-serif;\n  font-weight: lighter;\n}\n\n.news-container {\n  margin: 0 auto;\n  padding: 20px 0;\n}\n\n.wrapper-news {\n  padding: 10px 20px;\n  margin: 0 auto;\n}\n\n.wrapper-news__item {\n  box-shadow: 2px 2px 2px 2px rgba(0.2, 0.2, 0.2, 0.2);\n  display: flex;\n  padding: 16px;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: space-evenly;\n  border-radius: 6px;\n}\n\n.item-news__image > img {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n  border-radius: 5px;\n}\n\n.item-news__image {\n  /* min-height: 120px; */\n  width: 100%;\n  /* height: 200px; */\n}\n\n.item-news__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.item-news__content h3 {\n  padding: 0;\n  margin: 10px 0;\n  font-size: 17px;\n}\n\n.item-news__footer {\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  justify-content: space-between;\n}\n\n.footer__date {\n  font-style: italic;\n  font-size: 14px;\n}\n\n.news-link {\n  text-decoration: none;\n  color: black;\n}\n\n.news-link:hover {\n  color: #005555;\n}\n\nfooter {\n  display: grid;\n  padding: 30px;\n  gap: 30px;\n  line-height: 1.9;\n  background-color: #005555;\n}\n\nfooter .alamat {\n  text-align: center;\n  font-size: 15px;\n  color: white;\n}\n\nfooter .medsos li {\n  list-style: none;\n  text-align: center;\n  color: white;\n}\n\nfooter .medsos p {\n  color: white;\n}\n\nfooter .jadwal ul {\n  padding-left: 0 !important;\n  margin-bottom: 0;\n}\n\nfooter .jadwal ul li {\n  list-style: none;\n}\n\nfooter .jadwal {\n  color: white;\n  text-align: center;\n}\n\nfooter .jadwal p {\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 0;\n}\n\nfooter .alamat h3 {\n  font-size: 15px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\nfooter .alamat p {\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 0;\n}\n\nfooter .copyrig p {\n  text-align: center;\n  color: white;\n  font-size: 13px;\n  font-weight: lighter;\n  margin-bottom: 0 !important;\n}\n\n.copyrig {\n  box-sizing: border-box;\n  border-radius: 5px;\n\n}\n\nfooter .jadwal h3 {\n  font-size: 15px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\nfooter .fa {\n  font-size: 25px;\n}\n\n.fa.fa-instagram,\n.fa.fa-facebook-official,\n.fa.fa-envelope,\n.fa.fa-whatsapp {\n  color: white !important;\n}\n\n\n\n\n\n\n\n\n\n\n\n.fa.fa-commenting {\n  color: white;\n}\n\n.btn-open-chat.show {\n  display: block !important;\n}\n\n.btn-open-chat{\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  opacity: 0;\n  border: none;\n  position: fixed;\n  right: 20px;\n  opacity: 1;\n  display: none;\n  z-index: 10;\n  box-shadow: 0 0 0 0.6px white;\n  bottom:65px;\n  background-color: #005555;\n}\n\n.chat.show {\n  display: flex;\n}\n\n.chat {\n  padding: 8px;\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  border-radius: 5px;\n  min-width: 290px;\n  max-width: 20%;\n  z-index: 10;\n  height: 50%;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12.5px;\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);\n  background-color: white;\n}\n\n.chat-admin.show {\n  display: flex;\n}\n.unread {\n  color:#CCCC00;\n}\n\n.chat-admin {\n  padding: 8px;\n  position: fixed;\n  \n  right: 10px;\n  bottom: 10px;\n  border-radius: 5px;\n  width:50%;\n  z-index: 10;\n  margin-left: auto;\n  margin-right: auto;\n  height: 50%;\n  display: none;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12.5px;\n  flex-direction: column;\n  justify-content: space-between;\n\n  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);\n  background-color: white;\n}\n.chat__item-container {\n  min-height: 220px;\n  max-height: 100%;\n  overflow: -moz-scrollbars-vertical;\n  overflow-y: scroll;\n  background-color: white;\n}\n.chat__form__form-message {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 0;\n}\n.chat__inner {\n  display: flex;\n  overflow: hidden;\n  flex: 1;\n}\n\n.user-list {\n  flex-basis: 25%;\n  overflow: auto;\n  padding: 8px 2px;\n  flex-direction: column;\n  overflow: -moz-scrollbars-vertical;\n  border-right:0.4px solid black;\n}\n\n.user-list__item {\n  display: flex;\n  white-space: nowrap;\n  overflow: hidden;\n  flex-direction: column;\n  cursor: pointer;\n  z-index: 10;\n  text-overflow: ellipsis;\n  padding: 5px 4px;\n  border-bottom: 0.4px solid black;\n}\n\n.chat__form__form-message > .form__input {\n  flex-basis: 90%;\n}\n.user-list__item p {\n  margin: 0;\n  font-size: 10px;\n  word-wrap: break-word;      /* IE 5.5-7 */\n  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */\n  white-space: pre-wrap;      /* current browsers */\n}\n.user-list__item span {\n  color: gray;\n  font-size: 0.7em;\n}\n\n.chat__item-admin {\n  min-height: 220px;\n  max-height: 100%;\n  flex-basis: 75%;\n  overflow: -moz-scrollbars-vertical;\n  overflow-y: scroll;\n  background-color: white;\n}\n\n.form__submit-container {\n  \n  display: flex;\n  margin-left: 10px;\n  justify-content: flex-end;\n}\n.chat__form__form-message > .form__input {\n  min-height: 44px;\n}\n.chat__form__form-message > .form__input > .form-control {\n\n  height: 100% !important;\n}\n.submit-button {\n  color: black;\n  opacity: 100%;\n  padding: 0px 5px;\n  min-height: 44px;\n  min-width: 44px;\n  border-radius: 6px;\n  background-color: white;\n  font-size: 0.7em;\n  border: 1px solid gray;\n}\n.input-message {\n  height: 20px;\n}\n.text-message {\n  display: flex;\n  flex-direction: column;\n  padding: 6px;\n}\n.container-message.sender {\n  align-self: flex-end;\n}\n.container-message.receiver {\n  align-self: flex-start;\n}\n.text-message.sender {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #005555;\n  border-radius: 10px 10px 0px 10px;\n}\n.text-message.receiver {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 0px 10px 10px 10px;\n}\n.sender,\n.receiver {\n  min-width: 40px;\n}\n.text-message.sender > p,\n.text-message.receiver > p {\n  padding: 0;\n  margin: 0;\n}\n.sender > p {\n  color: white;\n}\n.sender-name {\n  font-size: 0.7em;\n}\n\ninput.danger,\ntextarea.danger {\n  border: 1px solid red !important;\n}\n\n\n/* go to top button */\n.btn-go-top > .fa.fa-arrow-up{\n  color: #005555;\n  \n}\n.btn-go-top.show {\n  display: block !important;\n}\n.btn-go-top{\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  opacity: 0;\n  border: 0.5px solid #005555;\n  position: fixed;\n  right: 20px;\n  display: none;\n  opacity: 1;\n  margin-bottom: 70px;\n  z-index: 10;\n  box-shadow: 0 0 0 0.6px #005555;\n  bottom: 80px;\n  background-color: white;\n}\n\n\n/* news list detail */\n\n\n.medsos {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.medsos h3 {\n  font-size: 15px;\n  font-weight: 500;\n  color: white;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.medsos ul {\n  display: flex;\n  padding-left: 0 !important;\n  box-sizing: border-box;\n  margin-bottom: 0;\n}\n\n.medsos ul li a{\n  width: 44px;\n  height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n}\n\n.medsos ul li {\n  margin: auto;\n  box-sizing: border-box;\n}\n\n.medsos ul li:hover {\n  background-color: rgb(4, 109, 127);\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n\n.medsos img {\n  width: 50%;\n  max-height: 100px;\n  cursor: pointer;\n  box-sizing: border-box;\n  /* grid-template-columns: ; */\n}\n\n/* LOADER */\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #005555;\n  border-bottom: 16px solid #005555;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\ncustom-loader {\n  position: fixed;\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 99;\n}\n\npre-loader {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 99;\n}\n\nloader-content {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  width: fit-content;\n}\n.loader-container {\n  width: fit-content;\n}\n.loader-content {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #005555;\n  border-bottom: 16px solid #005555;\n  width: 30px;\n  height: 30px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n/* loader dots */\n.dots {\n  width: 50px;\n  height: 50px;\n  color: white;\n  background: radial-gradient(circle closest-side, currentColor 90%, transparent) 0% 50%,\n  radial-gradient(circle closest-side, currentColor 90%, transparent) 50% 50%,\n  radial-gradient(circle closest-side, currentColor 90%, transparent) 100% 50%;\n  \n  background-size:  calc(100%/3) 12px;\n  background-repeat: no-repeat;\n  animation:  dots 1s infinite linear;\n\n}\n@keyframes dots {\n  20%{\n      background-position: 0% 0%, 50% 50%, 100% 50%;\n  }\n  40%{\n      background-position: 0% 100%, 50% 0%, 100% 50%;\n  }\n  60%{\n      background-position: 0% 50%, 50% 100%, 100% 0%;\n  }\n  80%{\n      background-position: 0% 50%, 50% 50%, 100% 100%;\n  }\n  \n}\n\n@keyframes dots {\n  20%{\n      background-position: 0% 0%, 50% 50%, 100% 50%;\n  }\n  40%{\n      background-position: 0% 100%, 50% 0%, 100% 50%;\n  }\n  60%{\n      background-position: 0% 50%, 50% 100%, 100% 0%;\n  }\n  80%{\n      background-position: 0% 50%, 50% 50%, 100% 100%;\n  }\n  \n}\n\n\nbutton > i {\n  pointer-events: none;\n}\n.btn__update.city,\n.btn__delete.city {\n  padding: 0 8px;\n}\n\n\n/* image zoom */\n\n.img-partner {\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n#partner:hover {opacity: 0.7;}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n}\n\n/* Modal Content (image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 60%;\n  max-width: 700px;\n}\n\n/* Caption of Modal Image */\n.partner-caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n}\n\n/* Add Animation */\n.modal-content, .partner-caption {  \n  -webkit-animation-name: zoom;\n  -webkit-animation-duration: 0.6s;\n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@-webkit-keyframes zoom {\n  from {-webkit-transform:scale(0)} \n  to {-webkit-transform:scale(1)}\n}\n\n@keyframes zoom {\n  from {transform:scale(0)} \n  to {transform:scale(1)}\n}\n\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n.partner-caption {\n  color: white;\n  text-align: center;\n}\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n  .modal-content {\n    width: 100%;\n  }\n}\n\n.card-item > a {\n  text-decoration: none;\n}\n.card-item > a > h2:hover {\n  color: #069a8e;\n  text-decoration: none;\n}\n\n/* table */\ntable > tbody > tr > td, th {\n  vertical-align: middle;\n}\n.empty-table{\n  text-align: center;\n  height: 300px;\n    vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.empty-table h4{\n    font-weight: lighter;\n}\n",""]);n.exports=t},126:function(n,t,e){var o=e(21);t=o(false);t.push([n.i,'/* .content {\n  padding: 30px;\n} */\n\n/* .content__title {\n  font-weight: 600;\n  padding: 20px;\n  line-height: 20px;\n  font-size: 23px;\n  color: #005555;\n  text-align: center;\n  border-bottom: 2px solid #069a8e;\n} */\n\n.content__form {\n  border-radius: 5px;\n  padding: 25px;\n  margin: 3% 0 55px;\n  border: 1px solid #dddddd;\n}\n\n.content__form-item {\n  display: grid;\n  grid-template-rows: 1fr;\n  margin-bottom: 20px;\n}\n\n.content__form-item label {\n  line-height: 44px;\n}\n\n.content__form-item-img {\n  display: grid;\n  grid-template-rows: 1fr;\n  margin-bottom: 40px;\n  line-height: 38px;\n}\n\n.content__form-item input, .content__form-item select {\n  min-width: 44px;\n  min-height: 44px;\n  border-radius: 5px;\n  padding: 0 10px;\n  font-size: inherit;\n  border: 1px solid #dddddd;\n}\n\n.content__form-item.list__date input {\n  width: 150px;\n}\n\n.content__form-item-img input {\n  width: 200px;\n}\n\n.content__form-item input:focus,\n.content__form-item-img input:focus,\n.content__form-item select:focus,\n.content__table select:focus,\n.content__form-item textarea:focus,\n.btn__delete:focus,\n.btn__update:focus,\n.btn__save:focus {\n  outline-color: #069a8e;\n}\n\n.content__form-item textarea {\n  border-radius: 5px;\n  font-size: inherit;\n  padding: 12px;\n  border: 1px solid #dddddd;\n}\n\n.content__form-item:last-child {\n  margin-bottom: 0;\n}\n\n.content__form .btn__form {\n  /* margin: 20px 0 0; */\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px,1fr));\n  column-gap: 10px;\n  row-gap: 10px;\n  direction: rtl;\n}\n\n.btn__delete {\n  background-color: #eb5353;\n}\n\n.btn__update {\n  background-color: #ff8c32;\n}\n\n.btn__save {\n  background-color: #36ae7c;\n}\n\n.content__form button:hover {\n  content: "";\n  opacity: 0.8;\n}\n\n/* checkboxes */\n\n.select-box {\n  position: static;\n}\n\n.select-box select {\n  width: 100%;\n  font-weight: bold;\n}\n\n.overSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n#checkBoxes {\n  display: none;\n  position: relative;\n  border: 1px #dadada solid;\n  opacity: 0;\n  width: inherit;\n  height: 150px;\n  overflow-y: auto;\n  /* z-index: 10; */\n  transition: visibility 0s, opacity 0.3s linear;\n  background-color: white;\n}\n#selectCityDisplay{\n  caret-color: transparent;\n  background-color: white;\n}\n#checkBoxes label {\n  display: flex;\n  padding: 5px;\n\n}\n#checkBoxes input {\n  margin-right: 10px;\n}\n#checkBoxes input[type="checkbox"]{\n  min-width: auto !important;\n}\n#checkBoxes label:hover {\n  background-color: #005555;\n  color: white;\n\n}\n\n@media screen and (min-width: 600px) {\n  .content__form-item, .content__form-item-img {\n    display: grid;\n    grid-template-columns: 25% auto;\n    /* margin-bottom: 10px; */\n  }\n\n  .content__form-item.list input {\n    width: 250px;\n  }\n  \n  .content__form-item.list__small input, .content__form-item.list__small select {\n    width: 200px;\n  }\n}\n\n@media screen and (min-width: 798px) {\n  /* .content {\n    padding: 2% 10%;\n  } */\n\n  /* .content__form {\n    margin: 3% 0 0;\n  } */\n\n  .content__title.list {\n    margin-top: 40px;\n  }\n}\n\n.img-partner {\n  width: 44px;\n\n}\n.btn__update#editPartnerButton{\n  display: none;\n}',""]);n.exports=t},128:function(n,t,e){var o=e(21);t=o(false);t.push([n.i,"/* submenu start   */\n.sub-menu {\n  width: 50%;\n}\n.nav__list li .sub-menu {\n  display: none;\n  list-style: none;\n  width: 150px;\n  color: #bf1722;\n}\n\n.nav__list li:hover .sub-menu {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  justify-content: space-evenly;\n  background-color: #005555;\n  width: 120px;\n}\n.nav__list .sub-menu a {\n  color: white;\n  width: 100px;\n}\n\n/* .nav__list li a:hover {\n  background-color: #069a8e;\n  color: white;\n  border-radius: 5px;\n}\n\n@media screen and (max-width: 600px) {\n  .sub-menu {\n    margin-top: -10px;\n    margin-bottom: 50px;\n    margin-top: -40px;\n  }\n}\n/* submenu-end */\n",""]);n.exports=t},129:function(n,t,e){var o=e(21);t=o(false);t.push([n.i,'/* .content {\n  padding: 30px;\n} */\n\n/* .content__title {\n  font-weight: 600;\n  padding: 20px;\n  line-height: 20px;\n  font-size: 23px;\n  color: #005555;\n  text-align: center;\n  border-bottom: 2px solid #069a8e;\n} */\n\n/* .content__form {\n  border-radius: 5px;\n  padding: 25px;\n  margin: 7% 0 20%;\n  border: 1px solid #dddddd !important;\n} */\n\n.content__form-item,\n.content__form-item-date,\n.content__form-item-time,\n.content__form-item-time,\n.content__form-item-city {\n  display: grid;\n  grid-template-rows: 1fr;\n  margin-bottom: 20px;\n}\n\n.content__form-item-total-list {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 20px;\n  /* justify-content: space-around; */\n}\n\n.content__form-item label,\n.content__form-item-date label,\n.content__form-item-time label,\n.content__form-item-total label,\n.content__form-item-city label {\n  line-height: 44px;\n}\n\n.content__form-item-total-list label {\n  margin-left: 10px;\n}\n\n.content__form-item input,\n.content__form-item-date input,\n.content__form-item-time input,\n.content__form-item-total input,\n.content__form-item-city select {\n  min-width: 44px;\n  min-height: 44px;\n  border-radius: 5px;\n  padding: 0 10px;\n  font-size: inherit;\n  border: 1px solid #dddddd;\n}\n\n.content__form-item input.danger,\n.content__form-item-date input.danger,\n.content__form-item-time input.danger,\n.content__form-item-total select.danger {\n  border: 1px solid red;\n}\n\n.content__form-item-date input,\n.content__form-item-time input,\n.content__form-item-total input {\n  width: 150px;\n}\n\n.content__form-item-city select {\n  width: 200px;\n}\n\n.content__form-item input:focus,\n.content__form-item-date input:focus,\n.content__form-item-time input:focus,\n.content__form-item-total input:focus,\n.content__form-item-city select:focus,\n.content__form-item textarea:focus,\n.btn__delete:focus,\n.btn__update:focus,\n.btn__save:focus {\n  outline-color: #069a8e;\n}\n\n.content__form-item textarea {\n  border-radius: 5px;\n  font-size: inherit;\n  padding: 12px;\n  border: 1px solid #dddddd;\n}\n\n.content__form-item:last-child,\n.content__form-item-date:last-child,\n.content__form-item-time:last-child,\n.content__form-item-total-list:last-child {\n  margin-bottom: 0;\n}\n\n.btn__collection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 30px;\n  margin-top: 25px;\n}\n\n.btn-item {\n  display: flex;\n  flex-direction: row;\n  gap: 30px;\n}\n\n.content__form .btn {\n  /* margin: 20px 0 0; */\n  display: grid;\n  /* grid-template-columns: repeat(auto-fill, 100px); */\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  column-gap: 10px;\n  direction: rtl;\n}\n\n.btn__form button,\n.btn__collection button {\n  display: block;\n  padding: 13px;\n  min-width: 100px;\n  min-height: 44px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  color: #fff;\n  /* margin-bottom: 10px; */\n}\n.btn__collection button.outline{\n  background-color: white;\n  border: 1px solid #069a8e;\n  color: #069a8e;\n  \n}\n.btn__delete {\n  background-color: #eb5353;\n}\n\n.btn__update {\n  background-color: #ff8c32;\n}\n\n.btn__save {\n  background-color: #36ae7c;\n}\n\n.btn__last {\n  background-color: #7F8487;\n}\n\n.content__form button:hover {\n  content: "";\n  opacity: 0.8;\n}\n\n@media screen and (min-width: 500px) {\n  .btn__collection {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .content__form-item {\n    display: grid;\n    grid-template-columns: 25% auto;\n    margin-bottom: 10px;\n  }\n\n  .content__form-item-date {\n    display: grid;\n    grid-template-columns: 25% auto;\n    margin-bottom: 10px;\n  }\n\n  .content__form-item-time,\n  .content__form-item-city {\n    display: grid;\n    grid-template-columns: 25% auto;\n    margin-bottom: 10px;\n  }\n\n  .content__form-item-total {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 25%);\n    /* display: flex;\n    flex-direction: row; */\n    margin-bottom: 10px;\n  }\n\n  /* .content__form-item-total .liter {\n  } */\n}\n\n@media screen and (min-width: 798px) {\n  /* .content {\n    padding: 2% 10%;\n  } */\n\n  .content__form {\n    margin: 3% 0 0;\n  }\n\n  .content__form-item-time label {\n    line-height: normal;\n  }\n\n  .content__form-item-total-list label {\n    line-height: 44px;\n  }\n}\n\n@media screen and (min-width: 886px) {\n  .content__form-item-time label,\n  .content__form-item-total label {\n    line-height: 44px;\n  }\n}\n',""]);n.exports=t},131:function(n,t,e){var o=e(21);t=o(false);t.push([n.i,"/* .content {\n  padding: 30px;\n} */\n\n/* .content__title {\n  font-weight: 600;\n  padding: 20px;\n  line-height: 20px;\n  font-size: 23px;\n  color: #005555;\n  text-align: center;\n  border-bottom: 2px solid #069a8e;\n} */\n\n.content__table {\n  overflow-x: auto;\n  margin-top: 7%;\n  margin-bottom: 70px;\n}\n\n.content__table .th__space {\n  min-width: 200px;\n}\n\n.status {\n  color: #fff;\n  padding: 5px 0;\n  border-radius: 25px;\n  width: 100px;\n  display: inline-block;\n}\n\n.status.success {\n  background-color: #36ae7c;\n}\n\n.status.taken {\n  background-color: #ff8c32;\n}\n\n.status.rejected {\n  background-color: #eb5353;\n}\n\ntable {\n  padding: 5px;\n  width: 100%;\n  margin: 1% 0;\n  border-collapse: collapse;\n}\n\ntd,\nth {\n  border: 1px solid #dddddd !important;\n  text-align: center !important;\n  padding: 8px 10px;\n}\n\nth {\n  text-align: center;\n}\n\n@media screen and (min-width: 500px) {\n  .content__table {\n    margin-top: 1%;\n  }\n\n  /* table {\n    margin-top: 4%;\n  } */\n}\n\n@media screen and (min-width: 798px) {\n  /* .content {\n    padding: 1% 4%;\n  } */\n\n  table {\n    margin-top: 2%;\n    border: 1px solid #005555;\n  }\n\n  /* .btn__space {\n    width: 14%;\n  } */\n\n  .content__table {\n    margin-bottom: 0;\n  }\n\n  /* .content__table .btn {\n    justify-content: space-between\n  } */\n\n  /* .btn__save {\n    margin-bottom: 0px;\n  } */\n}\n",""]);n.exports=t},132:function(n,t,e){var o=e(21);t=o(false);t.push([n.i,".notfound {\n    text-align: center;\n    padding-top: 2%;\n  }\n  \n  .notfound p {\n    font-size: 28px;\n    font-weight: bold;\n    color: #005555;\n    text-transform: capitalize;\n  }\n  \n  .notfound img {\n    width: 60%;\n  }\n  \n  @media screen and (max-width: 689px) {\n    .notfound p {\n      font-size: 18px;\n    }\n  }",""]);n.exports=t},133:function(n,t,e){var o=e(21);t=o(false);t.push([n.i,".unauthorize {\n    text-align: center;\n    padding-top: 2%;\n  }\n  \n  .unauthorize p {\n    font-size: 28px;\n    font-weight: bold;\n    color: #005555;\n    text-transform: capitalize;\n  }\n  \n  .unauthorize img {\n    width: 30%;\n  }\n  \n  @media screen and (max-width: 689px) {\n    .unauthorize p {\n      font-size: 18px;\n    }\n  }",""]);n.exports=t},136:function(n,t,e){var o=e(52);var i=e(137);i=i.__esModule?i.default:i;if(typeof i==="string"){i=[[n.i,i,""]]}var r={};r.insert="head";r.singleton=false;var a=o(i,r);n.exports=i.locals||{}},137:function(n,t,e){var o=e(21);t=o(false);t.push([n.i,"@media screen and (min-width: 455px) {\n    .carousel-inner {\n      min-height: 280px\n    }\n  }\n  \n  @media screen and (min-width: 600px) {\n    .item-produk {\n      grid-template-columns: repeat(2, 1fr) !important;\n    }\n  \n    footer {\n      grid-template-columns: 1fr 1fr 1fr;\n      grid-template-areas:\n        'alamat jadwal medsos'\n        'copyright copyright copyright';\n      padding: 30px 40px 20px;\n    }\n  \n    footer .alamat {\n      grid-area: alamat;\n      text-align: center;\n      font-size: 15px;\n    }\n  \n    footer .jadwal {\n      grid-area: jadwal;\n    }\n  \n    footer .medsos li {\n      grid-area: medsos;\n      list-style: none;\n      text-align: center;\n    }\n    \n    footer .medsos p {\n      color: white;\n      margin-top: -50px;\n    }\n  \n    footer .copyrig {\n      grid-area: copyright;\n      border-radius: 5px;\n    }\n  \n    .copyrig p {\n      text-align: center;\n      color: #005555;\n    }\n    .btn-open-chat{\n      bottom: 75px;\n    }\n  }\n  \n  @media screen and (min-width: 700px) {\n    .header-icon {\n      display: flex;\n      justify-content: end;\n    }\n    .header-icon i {\n      color: white;\n    }\n  \n    #drawer {\n      width: inherit;\n      position: relative;\n      top: 0;\n      opacity: 1;\n      transform: translate(0);\n      background:transparent;\n      color: #005555;\n    }\n    \n    .nav__list {\n      flex-direction: row;\n      margin: 0;\n      gap: 10px;\n    }\n  \n    .nav__list li:nth-child(4) {\n      margin-top: 0;\n      margin-bottom: 0;\n    }\n  \n    .dropdown-dashboard {\n      margin-top: 0;\n    }\n  \n    .nav .nav__item.dropdown {\n      text-decoration: none;\n      color: white;\n      font-size: 13px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n    }\n  \n    .profile-pict {\n      display: block;\n      width: 44px;\n      height: max-content;\n      border-radius: 50%;\n      margin-left: 8px;\n      padding: 5px;\n    }\n    \n    .profile-pict > img {\n      width: 100%;\n      border-radius: 50%;\n    }\n  \n    .dropdown-content {\n      visibility: hidden;\n      position: absolute;\n      top: 40px;\n      right: -25px;\n      background-color: white;\n      box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n      transition: visibility 0s, opacity 0.3s linear;\n    }\n  \n    .btn-drawer {\n      display: none;\n    }\n  \n    .nav__item a {\n      color: #005555 !important;\n    }\n  \n    .hero__title {\n      font-size: 2.9em;\n      font-weight: lighter;\n      background: transparent;\n      color: black;\n    }\n  \n    .hero__inner{\n      flex-direction: row !important;\n    }\n  \n    .hero__inner__text {\n      align-items: center;\n    }\n  \n    .carousel-inner {\n      min-height: 230px;\n    }\n  \n    .wrapper-news {\n      width: 80%;\n      max-width: 800px;\n    }\n    \n    .wrapper-news__item {\n      flex-direction: row;\n      gap: 20px;\n    }\n  \n    .item-news__image {\n      min-width: 300px;\n      width: 400px;\n      max-width: 300px;\n      min-height: 190px;\n      max-height: 220px;\n    }\n  }\n  \n  @media screen and (min-width: 800px) {\n    .hero__highlight {\n      font-size: 50px !important;\n    }\n\n\n  }\n  \n  @media screen and (min-width: 900px) {\n    article {\n      padding: 20px;\n    }\n  \n    .item-produk {\n      grid-template-columns: repeat(3, 1fr) !important;\n      gap: 20px;\n    }\n  }\n  \n  @media screen and (min-width: 950px) {\n    .carousel-inner {\n      min-height: 200px;\n    }\n  \n    .medsos {\n      width: 80%;\n      width: 80%;\n      margin: 0 auto;\n    }\n  }\n  ",""]);n.exports=t}});