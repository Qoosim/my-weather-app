!function(n){var t={};function e(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)e.d(i,a,function(t){return n[t]}.bind(null,a));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=22)}([function(n,t,e){var i=e(1),a=e(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var r={insert:"head",singleton:!1};i(a,r);n.exports=a.locals||{}},function(n,t,e){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),o=[];function s(n){for(var t=-1,e=0;e<o.length;e++)if(o[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},i=[],a=0;a<n.length;a++){var r=n[a],c=t.base?r[0]+t.base:r[0],d=e[c]||0,l="".concat(c," ").concat(d);e[c]=d+1;var u=s(l),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:h(p,t),references:1}),i.push(l)}return i}function d(n){var t=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var a=e.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{var o=r(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,e,i){var a=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=u(t,a);else{var r=document.createTextNode(a),o=n.childNodes;o[t]&&n.removeChild(o[t]),o.length?n.insertBefore(r,o[t]):n.appendChild(r)}}function f(n,t,e){var i=e.css,a=e.media,r=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var m=null,g=0;function h(n,t){var e,i,a;if(t.singleton){var r=g++;e=m||(m=d(t)),i=p.bind(null,e,r,!1),a=p.bind(null,e,r,!0)}else e=d(t),i=f.bind(null,e,t),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else a()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var a=s(e[i]);o[a].references--}for(var r=c(n,t),d=0;d<e.length;d++){var l=s(e[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}e=r}}}},function(n,t,e){var i=e(3),a=e(4),r=e(5),o=e(6),s=e(7),c=e(8),d=e(9),l=e(10),u=e(11),p=e(12),f=e(13),m=e(14),g=e(15),h=e(16),b=e(17),y=e(18),w=e(19),v=e(20),x=e(21);t=i(!1);var k=a(r),j=a(o),C=a(s),z=a(c),E=a(d),M=a(l),W=a(u),L=a(p),O=a(f),S=a(m),I=a(g),T=a(h),B=a(b),$=a(y),_=a(w),H=a(v),N=a(x);t.push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  transition: all 1s cubic-bezier(0.45, 1.4, 0.12, 1.8);\n}\n\nbody {\n  background-color: gray;\n  font-family: futura-light, sans-serif;\n  overflow: hidden;\n}\n\n/* ================ fonts ================ */\n\n@font-face {\n  font-family: futura-bold;\n  src: url("+k+') format("ttf");\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: futura-normal;\n  src: url('+j+') format("ttf");\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: futura-light;\n  src: url('+C+') format("ttf");\n  font-weight: 200;\n}\n\n/* ================ generic ================ */\n\n.row-flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.col-flex {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: "" !important;\n}\n\n.bs-xl {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n.bs-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.lg-br {\n  border-radius: 2%;\n}\n\n.f-fil {\n  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));\n}\n\n.f-fil-m {\n  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));\n}\n\n/* ================ section ================ */\n\nnav h1 {\n  color: white;\n}\n\nsection {\n  margin: 20px 0;\n}\n\nsection form {\n  justify-content: center !important;\n}\n\nsection div {\n  margin: 0 auto;\n}\n\n/* ================= main dash ================= */\n\n#main-dash {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 100%;\n  max-width: 530px;\n\n  /*   margin: 0 auto; */\n  min-height: 571px;\n}\n\n/* ================ data-cards ================ */\n\n.data-card {\n  position: relative;\n  justify-content: space-around;\n  width: 45vw;\n  margin: 15px;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);\n}\n\n.hum {\n  justify-content: space-around;\n}\n\n.speed {\n  width: 50%;\n}\n\n.speed p {\n  font-size: 2.5rem;\n  margin: 0;\n  color: white;\n}\n\n.win-dir {\n  width: 50%;\n}\n\n.win-dir p {\n  margin: 0;\n  font-size: 1.2rem;\n  color: white;\n}\n\n.wind-arrow {\n  background-image: url('+z+");\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\n  position: relative;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 0;\n  fill: white;\n}\n\n.percent {\n  width: 20%;\n}\n\n.percent p {\n  margin: 0 0 15px 0;\n  font-size: 1.2rem;\n  color: white;\n}\n\n.humidity {\n  width: 33%;\n}\n\n.humidity p {\n  font-size: 2.5rem;\n  margin: 0;\n  color: white;\n}\n\n.drop {\n  background-image: url("+E+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  fill: white;\n}\n\n.card-title {\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 0;\n  text-transform: uppercase;\n  color: white;\n}\n\n/* City Card information */\n\n.city-card {\n  position: relative;\n  justify-content: space-around;\n  width: 100%;\n  margin: 5px 15px 15px 15px;\n}\n\n.city-name p {\n  font-size: 2rem;\n  line-height: 2.1rem;\n}\n\n.state-name p {\n  font-size: 1.2rem;\n  line-height: 2.1rem;\n}\n\n.state-name p,\n.city-name p {\n  font-family: futura-light, sans-serif;\n  margin-bottom: 0;\n  text-transform: uppercase;\n  color: white;\n}\n\n.city-name p:hover {\n  border: dashed 1px white;\n}\n\n.country-flag {\n  position: absolute;\n  bottom: 0;\n  right: 5px;\n}\n\n.country-flag img {\n  width: 50px;\n  opacity: 0.5;\n}\n\n/* Add new city action */\n\n.input-new-city {\n  width: 70%;\n  font-size: 1.8rem;\n  line-height: 3.5rem;\n  background-color: transparent;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n}\n\n.input-city-show {\n  border: dashed 1px white;\n}\n\n.edit-action-btn {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n}\n\n#ok-text {\n  background-image: url("+M+");\n}\n\n#cancel-text {\n  background-image: url("+W+");\n}\n\n/* ================ weather lab | back-Scale ================ */\n\n.lab {\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  padding: 5px;\n  margin: 20px auto 5px auto;\n  max-width: 320px;\n  max-height: 284px;\n  height: 50vh;\n  min-height: 270px;\n  background-color: transparent;\n}\n\n#back-scale {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.3);\n  -webkit-mask-image: url("+L+");\n  mask-image: url("+L+");\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  mask-position: center;\n}\n\n.wi {\n  position: absolute;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\n}\n\n#sunny {\n  bottom: 16%;\n  right: 22%;\n  background-image: url("+O+");\n}\n\n#stormy {\n  bottom: 50%;\n  left: 12%;\n  background-image: url("+S+");\n}\n\n#snowy {\n  bottom: 16%;\n  left: 22%;\n  background-image: url("+I+");\n}\n\n#part-cloud {\n  bottom: 51%;\n  right: 12%;\n  background-image: url("+T+");\n}\n\n#showers {\n  top: 13%;\n  left: 26%;\n  background-image: url("+B+");\n}\n\n#cloudy {\n  top: 12%;\n  right: 21%;\n  transform: translateX(-50%);\n  background-image: url("+$+");\n}\n\n#bar-arrow {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-image: url("+_+");\n  width: 110%;\n  height: 110%;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: all 1s ease-in-out;\n}\n\n#pressure {\n  position: absolute;\n  bottom: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #fff;\n  font-size: 1.3rem;\n}\n\n#temp {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #fff;\n  font-size: 2.8rem;\n  z-index: 2;\n}\n\n#temp span:nth-child(2) {\n  align-self: flex-start;\n  font-size: 1.5rem;\n\n  /* vertical-align: super; */\n}\n\n.units {\n  bottom: 10%;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 90% 90%;\n  width: 50.53px;\n  height: 25.33px;\n  margin: 0;\n  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.6));\n}\n\n.c-units {\n  background-image: url("+H+");\n  cursor: pointer;\n}\n\n.f-units {\n  background-image: url("+N+");\n  cursor: pointer;\n}\n\n/*  Background - image */\n.image {\n  /*   background-image: url(https://images.unsplash.com/photo-1572553257259-272f8b389fa8?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE1MTEzM30;);\n */\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  /*   background-color: rgba(255, 255, 255, 0.2); */\n  width: 100%;\n  height: 100%;\n\n  /* background-blend-mode: difference; */\n\n  /*  opacity: 0.5; */\n  z-index: -2;\n}\n\n.image-gradient {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: -1;\n}\n\n/* =========== credits ============ */\n\n#credits {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n}\n\n.web-credit {\n  margin-bottom: 5px;\n  border-bottom: 0.5px solid dimgray;\n}\n\n.web-credit a {\n  color: burlywood;\n  text-decoration: none;\n  cursor: pointer;\n  z-index: 0;\n  font-size: 0.7rem;\n  text-align: right;\n}\n\n.design-credit a {\n  color: dimgray;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 0.6rem;\n  text-align: left;\n  z-index: 0;\n}\n\n.img-credit a {\n  color: dimgray;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 0.6rem;\n  text-align: left;\n  z-index: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  /* ================= credits ================ */\n\n  .web-credit a {\n    font-size: 1.1rem;\n  }\n\n  .design-credit a {\n    font-size: 0.9rem;\n  }\n\n  .img-credit a {\n    font-size: 0.9rem;\n  }\n}\n",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var a=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([a]).join("\n")}var o,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);i&&a[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){"use strict";e.r(t),t.default=e.p+"fonts/af72c25a6945b0f48abb1412d1ef5829.ttf"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"fonts/4e762c29ef7b44ca51cbe3fa14901444.ttf"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"fonts/ead7282f8edac7904e5314afb63c4932.ttf"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/8a13b7ced487bf58ab6f7d49d109f2c4.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/7d2472af34021843f9826cfd317692b7.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/6e7dbc616840a3d98cb216f3afe75f7f.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/83a811fde63879b8a50c938ac97704c9.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/cbf07250a577b30eb49435664ab66cb9.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/1b14915e0b233877b50d2aeeae6d9209.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/2f593042514e4ccfd4797b3bfacbf2bb.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/6833226b6d42d58c572a9e303e6f55c7.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/96061670df7689bb5f78d59d12c9fe5e.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/75ce2d1a0669f92ae9c6fe18e1ba86d3.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/024a46cce6bf62103134472d7f0b8c00.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/9e7a56e46573739328cd40b71e724f9d.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/b627408f3ca49f24c47c8f0c75976e2c.svg"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/32c479ef6b5870d3df5c196128c8fb1e.svg"},function(n,t,e){"use strict";e.r(t);e(0);const i={getMyIP:async()=>{const n=/(?=ip=)ip=(\d+[.]\d+[.]\d+[.]\d+)/g,t=/(?=loc)loc=(\w+)\n/g;try{const e=await fetch("https://www.cloudflare.com/cdn-cgi/trace",{mode:"cors"}),i=await e.text(),a=i.match(n)[0].replace(/\n|\r/g,""),r=i.match(t)[0].replace(/\n|\r/g,"");return a&&r?[a.split("ip=").join(""),r.split("loc=").join("")]:[]}catch(n){throw n}}};const a={getMyCity:async()=>{const n=await i.getMyIP();if(n===[])return!1;try{const t=await fetch("https://freegeoip.app/json/"+n[0],{mode:"cors"}),e=await t.json();return console.log("This is the city information retrieved"),console.log(e),e}catch(n){throw n}}};const r={loadMySessionWeather:async(n,t="metric")=>{const e=await a.getMyCity();if(e)try{e.latitude,e.longitude;const i=e.city,a=e.country_code,r=`https://api.openweathermap.org/data/2.5/weather?q=${i},${a}&lang=en&units=${t}&appid=6810a7e34f2939f2cbca81e558486741`;console.log("querying with :/n"+r);const o=await fetch(r,{mode:"cors"}),s=await o.json();n.updateWeatherObject(s),n.updateCountryObject(e.country_name)}catch(n){throw console.warn("error here on openweathermap() ",n),n}},loadMyCityWeather:async(n="london",t="metric",e="en")=>{const i=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&units=${t}&lang=${e}&APPID=6810a7e34f2939f2cbca81e558486741`,{mode:"cors"});return await i.json()}};const o={loadImg:async function(n="sunny clouds"){let t={};const e=`https://api.unsplash.com/search/photos?query=${n}&orientation=portrait&per_page=20&client_id=kwHPLm7uuNSdNT1BHrYrKcI6FcCYZ3y5n0NGn4lRb9Y`,i=document.querySelector(".image");try{const n=await fetch(e),a=await n.json(),r=Math.floor(Math.random()*Math.floor(20));if(""!==a.results[r].id){const n=a.results[r].urls.small;t=a.results[r],i.style.backgroundImage=`url(${n})`}}catch(n){throw n}return t}};const s=(()=>{const n=(n,t,e="",i="")=>{const a=document.getElementById(n),r=document.createElement(t);""!==e&&r.setAttribute("id",e),""!==i&&r.setAttribute("class",i),a.appendChild(r)},t=(n,t)=>{let e='<div class="data-card row-flex bs-xl lg-br ">';return e+='<div class="card-title f-fil col-flex">Wind</div>',e+='<div class="speed col-flex">',e+=`<p class="f-fil">${t?n.wind.speed.toFixed(1):n.wind.speed}</p>`,e+="</div>",e+='<div class="win-dir col-flex">',e+=`<p class="f-fil">${n.wind.unit}</p>`,e+='<div id="wind-arrow" class="wind-arrow"></div>',e+="</div></div>",e},e=n=>{let t='<div class="data-card row-flex bs-xl hum lg-br ">';return t+='<div class="card-title f-fil col-flex">Humidity</div>',t+='<div class="drop"></div>',t+='<div class="humidity col-flex">',t+=`<p class="f-fil">${n.main.humidity}</p></div>`,t+='<div class="percent col-flex"><p class="f-fil">%</p></div></div>',t},i=n=>{const t=(n=>{switch(!0){case n>=800&&n<=804:return-8.249289925*n*n+13208.61119*n-5287208.395;case n>=701&&n<=781:return-.00157282646*n*n+1.82322848*n-465.3239501;case n>=200&&n<=232:return.02079436717*n*n+-10.08168264*n+1121.535281;case n>=300&&n<=321:return-.05028726802*n*n+30.48646455*n-4632.223787;case n>=500&&n<=531:return.01112129237*n*n+-12.52634698*n+3454.698266;case n>=600&&n<=622:return-.05678032989*n*n+68.48273427*n-20770.321;default:return 0}})(n.weather.id);document.getElementById("bar-arrow").style.transform=`translateX(-50%) translateY(-50%) rotate(${t}deg)`},a=(n,t)=>{let e='<div id="temp" class="f-fil row-flex">';return e+=`<span>${t?n.main.temp.toFixed(1):n.main.temp}</span>`,e+="<span>o</span>",e+=`<span>${n.main.unit}</span></div>`,e+='<div id="back-scale">',e+='<div id="sunny" class="wi"></div>',e+='<div id="part-cloud" class="wi"></div>',e+='<div id="cloudy" class="wi"></div>',e+='<div id="showers" class="wi"></div>',e+='<div id="snowy" class="wi"></div>',e+='<div id="stormy" class="wi"></div></div>',e+='<div id="bar-arrow"></div>',e+=`<div id="pressure" class="f-fil">${n.main.pressure}hPa</div>`,e+='<div id="unitButton" class="f-fil units"></div>',e},r=n=>{const o=document.getElementById("unitButton"),s=n.getWeatherObject(),c=n.getDataReady();"C"===s.main.unit?(o.classList.remove("f-units"),o.classList.add("c-units")):(o.classList.remove("c-units"),o.classList.add("f-units"));o.addEventListener("click",(function(o){o.stopPropagation(),n.toggleUnits();const d=a(s,c);document.getElementById("weather-lab").innerHTML=d;let l=t(s,c);l+=e(s),document.getElementById("wind-hum-dash").innerHTML=l,i(s),r(n)}),!1)};return{buildWinHumDash:i=>{const a=i.getWeatherObject(),r=i.getDataReady();n("main-dash","div","wind-hum-dash","data-box row-flex");let o=t(a,r);o+=e(a),document.getElementById("wind-hum-dash").innerHTML=o,n("main-dash","div","city-dash","data-box row-flex");const s=(n=>{let t='<div class="city-card hum lg-br ">';return t+='<div id="inputCity" class="city-name f-fil">',t+=`<p class="f-fil-m">${n.name}</p></div>`,t+='<div class="state-name">',t+=` <p class="f-fil-m">${n.country}</p></div>`,t+='<div class="country-flag">',t+=`<img src="https://www.countryflags.io/${n.sys.country}/flat/64.png"></img>`,t+="</div></div>",t})(a);document.getElementById("city-dash").innerHTML=s,(n=>{document.getElementById("wind-arrow").style.transform=`rotate(${n.wind.deg-90}deg)`})(a)},buildWeatherLab:t=>{document.getElementById("main-dash").innerHTML="";const e=t.getWeatherObject(),r=t.getDataReady();n("main-dash","div","weather-lab","lab");const o=a(e,r);document.getElementById("weather-lab").innerHTML=o,i(e)},addSystemToggle:r,buildCredits:n=>{let t='<div class="web-credit">\n        <a href="https://www.carlosanriquez.com">Web Development: Carlos Anriquez | 2020</a>\n        </div>';t+='<div class="design-credit">\n        <a href="https://dribbble.com/dslv">UI design by: Piotr Sliwa @dribbble</a>\n        </div>',t+=(n=>`<div class="img-credit">\n        <a href="${n.links.html}">Photo by: ${n.user.username} @unsplash</a>\n        </div>`)(n),document.getElementById("credits").innerHTML=t}}})();const c={getCountryName:async n=>{const t="https://restcountries.eu/rest/v2/alpha/"+n;try{const n=await fetch(t,{mode:"cors"});return(await n.json()).nativeName}catch(n){throw n}}};const d=(()=>{const n=n=>{const t=n.getWeatherObject().name,a=document.getElementById("inputCity");a.addEventListener("click",(function r(o){n.getEditingCity()||(n.setEditingCity(),a.classList.add("row-flex"),a.classList.add("input-city-show"),this.removeEventListener(o,r,!0),this.innerHTML=`<input type="text" id="newCityName" name="newCityName" \n                    value="${t}"\n                    class="input-new-city f-fil" \n                    required minlength="4" maxlength="20" size="10">\n                    <div id="ok-text" class="edit-action-btn"></div>\n                    <div id="cancel-text" class="edit-action-btn"></div>`,e(n),i(n))}),!1)},t=async t=>{const e=t.getWeatherObject().targetCity;try{const i=await r.loadMyCityWeather(e);200===i.cod&&t.updateWeatherObject(i);const a=t.getWeatherObject(),d=await c.getCountryName(a.sys.country);t.updateCountryObject(d),s.buildWeatherLab(t),s.buildWinHumDash(t),n(t),s.addSystemToggle(t),t.clearEditingCity();const l=a.weather.description+" weather ",u=await o.loadImg(l);s.buildCredits(u)}catch(n){throw n}},e=n=>{document.getElementById("ok-text").addEventListener("click",(function(){const e=document.getElementById("newCityName");n.getWeatherObject().targetCity=e.value,t(n)}),!1)},i=t=>{document.getElementById("cancel-text").addEventListener("click",(function(e){e.stopPropagation(),s.buildWeatherLab(t),s.buildWinHumDash(t),n(t),s.addSystemToggle(t),t.clearEditingCity()}),!1)};return{initSessionWeather:async function(t){try{await r.loadMySessionWeather(t);const e=t.getWeatherObject();s.buildWeatherLab(t),s.buildWinHumDash(t),n(t),s.addSystemToggle(t);const i=e.weather.description+" weather ",a=await o.loadImg(i);s.buildCredits(a)}catch(n){throw n}},initCityQueryWeather:t}})();const l=()=>{let n=!1,t={},e=!1;return{getTimeStamp:()=>t.timeStamp,setDataReady:()=>{n=!0},clearDataReady:()=>{n=!1},getDataReady:()=>n,updateWeatherObject:e=>{t.clouds.all=e.clouds.all,t.coord.lat=e.coord.lat,t.coord.lon=e.coord.lon,t.main.temp=e.main.temp,t.main.pressure=e.main.pressure,t.main.humidity=e.main.humidity,t.main.temp_max=e.main.temp_max,t.main.temp_min=e.main.temp_min,t.name=e.name,t.sys.id=e.sys.id,t.sys.sunrise=e.sys.sunrise,t.sys.sunset=e.sys.sunset,t.sys.country=e.sys.country,t.sys.type=e.sys.type,t.timezone=e.timezone,t.weather.description=e.weather[0].description,t.weather.main=e.weather[0].main,t.weather.id=e.weather[0].id,t.wind.deg=e.wind.deg,t.wind.speed=e.wind.speed,n=!0},getWeatherObject:()=>t,initWeatherObject:()=>{t={name:"...........",country:"..........",targetCity:"empty",timeZone:"",timeStamp:"",clouds:{all:""},coord:{lat:"",lon:""},main:{temp:"-.-",unit:"C",pressure:"----",humidity:"--",temp_max:"",temp_min:""},sys:{id:"",sunrise:"",sunset:"",country:"AR",type:""},weather:{id:0,main:"",description:"",arrow:90},wind:{deg:0,speed:"-.-",unit:"km/h"}},n=!1},setEditingCity:()=>{e=!0},clearEditingCity:()=>{e=!1},getEditingCity:()=>e,toggleUnits:()=>{if("C"===t.main.unit){const n=32+1.8*parseFloat(t.main.temp);t.main.temp=n,t.main.unit="F";const e=parseFloat(t.wind.speed)/1.609;t.wind.speed=e,t.wind.unit="mph"}else{const n=(parseFloat(t.main.temp)-32)*(5/9);t.main.temp=n,t.main.unit="C";const e=1.609*parseFloat(t.wind.speed);t.wind.speed=e,t.wind.unit="km/h"}return t.main.unit},updateCountryObject:n=>{t.country=n}}};const u=l();u.initWeatherObject(),document.addEventListener("DOMContentLoaded",()=>{d.initSessionWeather(u)})}]);