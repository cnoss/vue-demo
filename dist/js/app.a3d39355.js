(function(e){function t(t){for(var n,a,c=t[0],i=t[1],l=t[2],s=0,b=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(b.length)b.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1c8f8047"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"56d24118"}[e]+".css",o=i.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===o))return t()}var b=document.getElementsByTagName("style");for(c=0;c<b.length;c++){l=b[c],s=l.getAttribute("data-href");if(s===n||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],d.parentNode.removeChild(d),r(u)},d.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var b=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",b.name="ChunkLoadError",b.type=n,b.request=a,r[1](b)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"12d2":function(e,t,r){"use strict";r("c7dd")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"nav"},o=Object(n["g"])("Home"),u=Object(n["g"])(" | "),c=Object(n["g"])("About"),i=Object(n["g"])(" | "),l=Object(n["g"])("Informatiker");function s(e,t,r,s,b,d){var v=Object(n["x"])("Header"),f=Object(n["x"])("router-link"),p=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(v),Object(n["h"])("div",a,[Object(n["h"])(f,{to:"/"},{default:Object(n["C"])((function(){return[o]})),_:1}),u,Object(n["h"])(f,{to:"/about"},{default:Object(n["C"])((function(){return[c]})),_:1}),i,Object(n["h"])(f,{to:"/informatiker"},{default:Object(n["C"])((function(){return[l]})),_:1})]),Object(n["h"])(p)],64)}var b=Object(n["D"])("data-v-1bd941b5");Object(n["t"])("data-v-1bd941b5");var d={class:"header"},v=Object(n["h"])("h1",null,"Famous Computer Scientists",-1);Object(n["r"])();var f=b((function(e,t,r,a,o,u){return Object(n["q"])(),Object(n["d"])("div",d,[o.route?(Object(n["q"])(),Object(n["d"])("button",{key:0,type:"button",onClick:t[1]||(t[1]=function(t){return e.$router.push("/")})},"« Back")):Object(n["e"])("",!0),v])})),p={name:"Header",data:function(){return{route:!1}},watch:{$route:function(e){"/"!==e.fullPath?this.route=!0:this.route=!1}}};r("fcab");p.render=f,p.__scopeId="data-v-1bd941b5";var h=p,g={name:"App",components:{Header:h}};r("12d2");g.render=s;var m=g,j=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),O=r("cf05"),k=r.n(O),y={class:"home"},w=Object(n["h"])("img",{alt:"Vue logo",src:k.a},null,-1);function _(e,t,r,a,o,u){var c=Object(n["x"])("HelloWorld");return Object(n["q"])(),Object(n["d"])("div",y,[w,Object(n["h"])(c,{msg:"Welcome to Your Vue.js App"})])}var C=Object(n["D"])("data-v-b9167eee");Object(n["t"])("data-v-b9167eee");var x={class:"hello"},A=Object(n["f"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);Object(n["r"])();var E=C((function(e,t,r,a,o,u){return Object(n["q"])(),Object(n["d"])("div",x,[Object(n["h"])("h1",null,Object(n["z"])(r.msg),1),A])})),P={name:"HelloWorld",props:{msg:String}};r("8497");P.render=E,P.__scopeId="data-v-b9167eee";var S=P,H={name:"Home",components:{HelloWorld:S}};H.render=_;var N=H,q=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/informatiker",name:"Informatiker Übersicht",component:function(){return r.e("about").then(r.bind(null,"a90a"))}},{path:"/detail",name:"Informatiker",component:function(){return r.e("about").then(r.bind(null,"ac1a"))}}],I=Object(j["a"])({history:Object(j["b"])("/"),routes:q}),T=I,L=r("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(n["c"])(m).use(T).mount("#app")},"6c98":function(e,t,r){},8497:function(e,t,r){"use strict";r("c45a")},c45a:function(e,t,r){},c7dd:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},fcab:function(e,t,r){"use strict";r("6c98")}});
//# sourceMappingURL=app.a3d39355.js.map