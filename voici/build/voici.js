var _JUPYTERLAB;(()=>{var e,t,r,l,n,a,o,i,u,s,m,h,d,p,f,c,y,b,g,P,j={31068:(e,t,r)=>{"use strict";Promise.all([r.e(5688),r.e(4173),r.e(4651),r.e(6343),r.e(4183),r.e(8707),r.e(9844),r.e(1601),r.e(4122),r.e(2094),r.e(8211),r.e(427),r.e(5945),r.e(8748),r.e(281),r.e(9711),r.e(1256),r.e(715),r.e(6769),r.e(6231),r.e(731),r.e(5388),r.e(5666),r.e(9407),r.e(1277),r.e(2363),r.e(4299),r.e(8047),r.e(922),r.e(6975),r.e(6775),r.e(4968),r.e(2740),r.e(7867),r.e(474),r.e(8250),r.e(2143),r.e(7),r.e(5074),r.e(5040)]).then(r.bind(r,4786))},80551:(e,t,r)=>{r.p=function(){let e=Object.create(null);if("undefined"!=typeof document&&document){const t=document.getElementById("jupyter-config-data");t&&(e=JSON.parse(t.textContent||"{}"))}return e.fullStaticUrl||""}()+"/"}},v={};function w(e){var t=v[e];if(void 0!==t)return t.exports;var r=v[e]={id:e,loaded:!1,exports:{}};return j[e].call(r.exports,r,r.exports,w),r.loaded=!0,r.exports}w.m=j,w.c=v,w.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return w.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,w.t=function(r,l){if(1&l&&(r=this(r)),8&l)return r;if("object"==typeof r&&r){if(4&l&&r.__esModule)return r;if(16&l&&"function"==typeof r.then)return r}var n=Object.create(null);w.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var o=2&l&&r;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,w.d(n,a),n},w.d=(e,t)=>{for(var r in t)w.o(t,r)&&!w.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((t,r)=>(w.f[r](e,t),t)),[])),w.u=e=>(7869===e?"@jupyter-widgets/controls":e)+".js",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},l="_JUPYTERLAB.CORE_OUTPUT:",w.l=(e,t,n,a)=>{if(r[e])r[e].push(t);else{var o,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var m=u[s];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==l+n){o=m;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,w.nc&&o.setAttribute("nonce",w.nc),o.setAttribute("data-webpack",l+n),o.src=e),r[e]=[t];var h=(t,l)=>{o.onerror=o.onload=null,clearTimeout(d);var n=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(l))),t)return t(l)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),i&&document.head.appendChild(o)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),w.j=8807,(()=>{w.S={};var e={},t={};w.I=(r,l)=>{l||(l=[]);var n=t[r];if(n||(n=t[r]={}),!(l.indexOf(n)>=0)){if(l.push(n),e[r])return e[r];w.o(w.S,r)||(w.S[r]={});var a=w.S[r],o="_JUPYTERLAB.CORE_OUTPUT",i=(e,t,r,l)=>{var n=a[e]=a[e]||{},i=n[t];(!i||!i.loaded&&(!l!=!i.eager?l:o>i.from))&&(n[t]={get:r,from:o,eager:!!l})},u=[];return"default"===r&&(i("@jupyter-widgets/base","6.0.8",(()=>Promise.all([w.e(4651),w.e(6343),w.e(3264),w.e(8211),w.e(281),w.e(9614)]).then((()=>()=>w(43264))))),i("@jupyter-widgets/jupyterlab-manager","5.0.11",(()=>Promise.all([w.e(4651),w.e(4183),w.e(9844),w.e(8211),w.e(427),w.e(5945),w.e(281),w.e(9711),w.e(1256),w.e(6769),w.e(5666),w.e(922),w.e(4968),w.e(2740),w.e(474),w.e(2609),w.e(9438)]).then((()=>()=>w(25842))))),i("@jupyterlab/application","4.2.4",(()=>Promise.all([w.e(4729),w.e(8211),w.e(427),w.e(5945),w.e(8748),w.e(281),w.e(9711),w.e(1256),w.e(715),w.e(6769),w.e(6231),w.e(731),w.e(5388),w.e(5666),w.e(1277),w.e(32),w.e(6775)]).then((()=>()=>w(84729))))),i("@jupyterlab/apputils","4.3.4",(()=>Promise.all([w.e(1670),w.e(4183),w.e(9684),w.e(8211),w.e(427),w.e(5945),w.e(8748),w.e(281),w.e(9711),w.e(1256),w.e(6769),w.e(6231),w.e(731),w.e(5388),w.e(9407),w.e(2363),w.e(4968),w.e(9890)]).then((()=>()=>w(79684))))),i("@jupyterlab/coreutils","6.2.4",(()=>Promise.all([w.e(8925),w.e(8211),w.e(427)]).then((()=>()=>w(11306))))),i("@jupyterlab/docregistry","4.2.4",(()=>Promise.all([w.e(5688),w.e(6382),w.e(5044),w.e(8211),w.e(427),w.e(5945),w.e(8748),w.e(281),w.e(9711),w.e(1256),w.e(715),w.e(731),w.e(5388),w.e(5666),w.e(9407)]).then((()=>()=>w(95044))))),i("@jupyterlab/json-extension","4.2.4",(()=>Promise.all([w.e(281),w.e(1256),w.e(715),w.e(9407),w.e(7867),w.e(8017)]).then((()=>()=>w(58017))))),i("@jupyterlab/logconsole","4.2.4",(()=>Promise.all([w.e(4653),w.e(8211),w.e(427),w.e(281),w.e(1256),w.e(5666),w.e(922)]).then((()=>()=>w(34653))))),i("@jupyterlab/mainmenu","4.2.4",(()=>Promise.all([w.e(8211),w.e(5945),w.e(281),w.e(715),w.e(5388),w.e(3249)]).then((()=>()=>w(83249))))),i("@jupyterlab/markdownviewer-extension","4.2.4",(()=>Promise.all([w.e(9252),w.e(8211),w.e(427),w.e(8748),w.e(281),w.e(1256),w.e(715),w.e(5388),w.e(5666),w.e(32),w.e(4968),w.e(8250),w.e(5768)]).then((()=>()=>w(25768))))),i("@jupyterlab/mathjax-extension","4.2.4",(()=>Promise.all([w.e(8211),w.e(5666),w.e(3307)]).then((()=>()=>w(85688))))),i("@jupyterlab/nbformat","4.2.4",(()=>Promise.all([w.e(8211),w.e(6468)]).then((()=>()=>w(16468))))),i("@jupyterlab/notebook","4.2.4",(()=>Promise.all([w.e(5688),w.e(4173),w.e(6382),w.e(9252),w.e(8493),w.e(8211),w.e(427),w.e(5945),w.e(8748),w.e(281),w.e(9711),w.e(1256),w.e(715),w.e(6769),w.e(6231),w.e(731),w.e(5388),w.e(5666),w.e(9407),w.e(1277),w.e(2363),w.e(32),w.e(4299),w.e(8047),w.e(922),w.e(9906)]).then((()=>()=>w(58493))))),i("@jupyterlab/outputarea","4.2.4",(()=>Promise.all([w.e(7483),w.e(8211),w.e(427),w.e(5945),w.e(281),w.e(1256),w.e(715),w.e(6769),w.e(6231),w.e(5666),w.e(9906)]).then((()=>()=>w(77483))))),i("@jupyterlab/rendermime-extension","4.2.4",(()=>Promise.all([w.e(8211),w.e(1256),w.e(715),w.e(5666),w.e(8766)]).then((()=>()=>w(98766))))),i("@jupyterlab/rendermime","4.2.4",(()=>Promise.all([w.e(5312),w.e(8211),w.e(427),w.e(8748),w.e(281),w.e(1256),w.e(715),w.e(731),w.e(9906)]).then((()=>()=>w(75312))))),i("@jupyterlab/services","7.2.4",(()=>Promise.all([w.e(1670),w.e(7883),w.e(8211),w.e(427),w.e(8748),w.e(9711),w.e(6231),w.e(1277),w.e(9907)]).then((()=>()=>w(17883))))),i("@jupyterlab/settingregistry","4.2.4",(()=>Promise.all([w.e(8696),w.e(1601),w.e(9530),w.e(8211),w.e(427),w.e(9711),w.e(7079)]).then((()=>()=>w(49530))))),i("@jupyterlab/theme-dark-extension","4.2.4",(()=>Promise.all([w.e(1256),w.e(715),w.e(431)]).then((()=>()=>w(431))))),i("@jupyterlab/theme-light-extension","4.2.4",(()=>Promise.all([w.e(1256),w.e(715),w.e(3989)]).then((()=>()=>w(23989))))),i("@jupyterlab/translation","4.2.4",(()=>Promise.all([w.e(1670),w.e(9582),w.e(8211),w.e(427),w.e(8748),w.e(6769),w.e(6231)]).then((()=>()=>w(89582))))),i("@jupyterlab/ui-components","4.2.4",(()=>Promise.all([w.e(6343),w.e(8707),w.e(7155),w.e(8211),w.e(427),w.e(5945),w.e(8748),w.e(281),w.e(9711),w.e(1256),w.e(6231),w.e(731),w.e(9407),w.e(1277),w.e(4299),w.e(7079),w.e(7867)]).then((()=>()=>w(17155))))),i("@jupyterlite/contents","0.4.0",(()=>Promise.all([w.e(2224),w.e(8211),w.e(8748)]).then((()=>()=>w(12224))))),i("@jupyterlite/iframe-extension","0.4.0",(()=>Promise.all([w.e(8211),w.e(281),w.e(9376)]).then((()=>()=>w(49376))))),i("@jupyterlite/kernel","0.4.0",(()=>Promise.all([w.e(7032),w.e(5498),w.e(8211),w.e(427),w.e(8748),w.e(6769)]).then((()=>()=>w(95498))))),i("@jupyterlite/server-extension","0.4.0",(()=>Promise.all([w.e(8696),w.e(6557),w.e(8211),w.e(5945),w.e(8748),w.e(2143),w.e(7),w.e(9665)]).then((()=>()=>w(26557))))),i("@jupyterlite/server","0.4.0",(()=>Promise.all([w.e(7032),w.e(8211),w.e(427),w.e(8748),w.e(6769),w.e(6775),w.e(9774)]).then((()=>()=>w(85625))))),i("@lumino/algorithm","1.9.2",(()=>w.e(464).then((()=>()=>w(50464))))),i("@lumino/algorithm","1.9.2",(()=>w.e(3455).then((()=>()=>w(53455))))),i("@lumino/algorithm","2.0.2",(()=>w.e(8135).then((()=>()=>w(38135))))),i("@lumino/application","2.4.1",(()=>Promise.all([w.e(8211),w.e(281),w.e(7079),w.e(2842)]).then((()=>()=>w(92842))))),i("@lumino/commands","2.3.1",(()=>Promise.all([w.e(3916),w.e(8211),w.e(427),w.e(5945),w.e(9711),w.e(2363),w.e(6975)]).then((()=>()=>w(3916))))),i("@lumino/coreutils","2.2.0",(()=>Promise.all([w.e(5764),w.e(5945)]).then((()=>()=>w(75764))))),i("@lumino/datagrid","2.4.1",(()=>Promise.all([w.e(8862),w.e(8211),w.e(427),w.e(5945),w.e(281),w.e(731),w.e(2363),w.e(8047),w.e(6975)]).then((()=>()=>w(38862))))),i("@lumino/disposable","2.1.3",(()=>Promise.all([w.e(427),w.e(7556)]).then((()=>()=>w(7556))))),i("@lumino/domutils","1.8.2",(()=>w.e(9405).then((()=>()=>w(39405))))),i("@lumino/domutils","2.0.2",(()=>w.e(1621).then((()=>()=>w(41621))))),i("@lumino/dragdrop","2.1.5",(()=>Promise.all([w.e(8487),w.e(9711)]).then((()=>()=>w(88487))))),i("@lumino/keyboard","2.0.2",(()=>w.e(9981).then((()=>()=>w(69981))))),i("@lumino/messaging","1.10.3",(()=>Promise.all([w.e(238),w.e(9802)]).then((()=>()=>w(20238))))),i("@lumino/messaging","1.10.3",(()=>Promise.all([w.e(4463),w.e(7193)]).then((()=>()=>w(24463))))),i("@lumino/messaging","2.0.2",(()=>Promise.all([w.e(4135),w.e(5945)]).then((()=>()=>w(34135))))),i("@lumino/polling","2.1.3",(()=>Promise.all([w.e(8211),w.e(427),w.e(6049)]).then((()=>()=>w(86049))))),i("@lumino/properties","2.0.2",(()=>w.e(6573).then((()=>()=>w(26573))))),i("@lumino/signaling","2.1.3",(()=>Promise.all([w.e(8211),w.e(5945),w.e(3992)]).then((()=>()=>w(73992))))),i("@lumino/virtualdom","2.0.2",(()=>Promise.all([w.e(3649),w.e(5945)]).then((()=>()=>w(43649))))),i("@lumino/widgets","2.5.0",(()=>Promise.all([w.e(3311),w.e(8211),w.e(427),w.e(5945),w.e(9711),w.e(6231),w.e(731),w.e(2363),w.e(4299),w.e(8047),w.e(7079),w.e(6975)]).then((()=>()=>w(93311))))),i("@voila-dashboards/voila","0.5.7",(()=>Promise.all([w.e(5688),w.e(4173),w.e(1670),w.e(7883),w.e(4187),w.e(8211),w.e(427),w.e(5945),w.e(8748),w.e(281),w.e(9711),w.e(1256),w.e(715),w.e(6769),w.e(6231),w.e(731),w.e(5388),w.e(5666),w.e(1277),w.e(2363),w.e(32),w.e(4299),w.e(8047),w.e(2740),w.e(8250),w.e(5074)]).then((()=>()=>w(84187))))),i("react-dom","18.3.1",(()=>Promise.all([w.e(3144),w.e(9407)]).then((()=>()=>w(43144))))),i("react","18.3.1",(()=>w.e(4041).then((()=>()=>w(14041)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var t=w.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var l=r.length-1;l>-1&&(!e||!/^http(s?):/.test(e));)e=r[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),n=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),l=r[1]?t(r[1]):[];return r[2]&&(l.length++,l.push.apply(l,t(r[2]))),r[3]&&(l.push([]),l.push.apply(l,t(r[3]))),l},a=(e,t)=>{e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var l=e[r],a=(typeof l)[0];if(r>=t.length)return"u"==a;var o=t[r],i=(typeof o)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&l!=o)return l<o;r++}},o=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var l=1,n=1;n<e.length;n++)l--,r+="u"==(typeof(i=e[n]))[0]?"-":(l>0?".":"")+(l=2,i);return r}var a=[];for(n=1;n<e.length;n++){var i=e[n];a.push(0===i?"not("+u()+")":1===i?"("+u()+" || "+u()+")":2===i?a.pop()+" "+a.pop():o(i))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,t)=>{if(0 in e){t=n(t);var r=e[0],l=r<0;l&&(r=-r-1);for(var a=0,o=1,u=!0;;o++,a++){var s,m,h=o<e.length?(typeof e[o])[0]:"";if(a>=t.length||"o"==(m=(typeof(s=t[a]))[0]))return!u||("u"==h?o>r&&!l:""==h!=l);if("u"==m){if(!u||"u"!=h)return!1}else if(u)if(h==m)if(o<=r){if(s!=e[o])return!1}else{if(l?s>e[o]:s<e[o])return!1;s!=e[o]&&(u=!1)}else if("s"!=h&&"n"!=h){if(l||o<=r)return!1;u=!1,o--}else{if(o<=r||m<h!=l)return!1;u=!1}else"s"!=h&&"n"!=h&&(u=!1,o--)}}var d=[],p=d.pop.bind(d);for(a=1;a<e.length;a++){var f=e[a];d.push(1==f?p()|p():2==f?p()&p():f?i(f,t):!p())}return!!p()},u=(e,t)=>e&&w.o(e,t),s=e=>(e.loaded=1,e.get()),m=e=>Object.keys(e).reduce(((t,r)=>(e[r].eager&&(t[r]=e[r]),t)),{}),h=(e,t,r,l)=>{var n=l?m(e[t]):e[t];return(t=Object.keys(n).reduce(((e,t)=>!i(r,t)||e&&!a(e,t)?e:t),0))&&n[t]},d=(e,t,r,l,n)=>{var a=e[r];return"No satisfying version ("+o(l)+")"+(n?" for eager consumption":"")+" of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(a).map((e=>e+" from "+a[e].from)).join(", ")},p=e=>{throw new Error(e)},f=(e,t,r)=>r?r():((e,t)=>p("Shared module "+t+" doesn't exist in shared scope "+e))(e,t),c=(e=>function(t,r,l,n,a){var o=w.I(t);return o&&o.then&&!l?o.then(e.bind(e,t,w.S[t],r,!1,n,a)):e(t,w.S[t],r,l,n,a)})(((e,t,r,l,n,a)=>{if(!u(t,r))return f(e,r,a);var o=h(t,r,n,l);return o?s(o):a?a():void p(d(t,e,r,n,l))})),y={},b={68211:()=>c("default","@lumino/coreutils",!1,[1,2,0,0],(()=>Promise.all([w.e(5764),w.e(5945)]).then((()=>()=>w(75764))))),30427:()=>c("default","@lumino/signaling",!1,[1,2,0,0],(()=>Promise.all([w.e(8211),w.e(5945),w.e(3992)]).then((()=>()=>w(73992))))),45945:()=>c("default","@lumino/algorithm",!1,[1,2,0,0],(()=>w.e(8135).then((()=>()=>w(38135))))),28748:()=>c("default","@jupyterlab/coreutils",!1,[1,6,2,4],(()=>Promise.all([w.e(8925),w.e(427)]).then((()=>()=>w(11306))))),80281:()=>c("default","@lumino/widgets",!1,[1,2,0,0],(()=>Promise.all([w.e(3311),w.e(8211),w.e(427),w.e(5945),w.e(9711),w.e(6231),w.e(731),w.e(2363),w.e(4299),w.e(8047),w.e(7079),w.e(6975)]).then((()=>()=>w(93311))))),49711:()=>c("default","@lumino/disposable",!1,[1,2,0,0],(()=>Promise.all([w.e(427),w.e(7556)]).then((()=>()=>w(7556))))),31256:()=>c("default","@jupyterlab/translation",!1,[1,4,2,4],(()=>Promise.all([w.e(1670),w.e(9582),w.e(8211),w.e(427),w.e(8748),w.e(6769),w.e(6231)]).then((()=>()=>w(89582))))),50715:()=>c("default","@jupyterlab/apputils",!1,[1,4,3,4],(()=>Promise.all([w.e(1670),w.e(4183),w.e(9684),w.e(8211),w.e(427),w.e(5945),w.e(8748),w.e(281),w.e(9711),w.e(1256),w.e(6769),w.e(6231),w.e(731),w.e(5388),w.e(9407),w.e(2363),w.e(4968),w.e(9890)]).then((()=>()=>w(79684))))),6769:()=>c("default","@jupyterlab/services",!1,[1,7,2,4],(()=>Promise.all([w.e(1670),w.e(7883),w.e(8748),w.e(9711),w.e(6231),w.e(1277),w.e(2288)]).then((()=>()=>w(17883))))),76231:()=>c("default","@lumino/properties",!1,[1,2,0,0],(()=>w.e(6573).then((()=>()=>w(26573))))),60731:()=>c("default","@lumino/messaging",!1,[1,2,0,0],(()=>Promise.all([w.e(4135),w.e(5945)]).then((()=>()=>w(34135))))),15388:()=>c("default","@jupyterlab/ui-components",!1,[1,4,2,4],(()=>Promise.all([w.e(6343),w.e(8707),w.e(7155),w.e(427),w.e(5945),w.e(8748),w.e(9711),w.e(1256),w.e(6231),w.e(731),w.e(9407),w.e(1277),w.e(4299),w.e(7079),w.e(7867)]).then((()=>()=>w(17155))))),15666:()=>c("default","@jupyterlab/rendermime",!1,[1,4,2,4],(()=>Promise.all([w.e(5312),w.e(427),w.e(8748),w.e(281),w.e(1256),w.e(715),w.e(731),w.e(9906)]).then((()=>()=>w(75312))))),59407:()=>c("default","react",!1,[1,18,2,0],(()=>w.e(4041).then((()=>()=>w(14041))))),71277:()=>c("default","@lumino/polling",!1,[1,2,0,0],(()=>w.e(8430).then((()=>()=>w(86049))))),72363:()=>c("default","@lumino/domutils",!1,[1,2,0,0],(()=>w.e(1621).then((()=>()=>w(41621))))),74299:()=>c("default","@lumino/virtualdom",!1,[1,2,0,0],(()=>w.e(3649).then((()=>()=>w(43649))))),38047:()=>c("default","@lumino/dragdrop",!1,[1,2,0,0],(()=>Promise.all([w.e(8487),w.e(9711)]).then((()=>()=>w(88487))))),10922:()=>c("default","@jupyterlab/outputarea",!1,[1,4,2,4],(()=>Promise.all([w.e(7483),w.e(5945),w.e(715),w.e(6769),w.e(6231),w.e(9906)]).then((()=>()=>w(77483))))),96975:()=>c("default","@lumino/keyboard",!1,[1,2,0,0],(()=>w.e(9981).then((()=>()=>w(69981))))),66775:()=>c("default","@lumino/application",!1,[1,2,0,0],(()=>Promise.all([w.e(281),w.e(7079),w.e(461)]).then((()=>()=>w(92842))))),54968:()=>c("default","@jupyterlab/settingregistry",!1,[1,4,2,4],(()=>Promise.all([w.e(8696),w.e(1601),w.e(9530),w.e(9711),w.e(7079)]).then((()=>()=>w(49530))))),2740:()=>c("default","@jupyter-widgets/base",!1,[1,6,0,6],(()=>Promise.all([w.e(4651),w.e(6343),w.e(3264),w.e(9614)]).then((()=>()=>w(43264))))),57867:()=>c("default","react-dom",!1,[1,18,2,0],(()=>w.e(3144).then((()=>()=>w(43144))))),90474:()=>c("default","@jupyterlab/notebook",!1,[1,4,2,4],(()=>Promise.all([w.e(5688),w.e(4173),w.e(6382),w.e(9252),w.e(8493),w.e(8748),w.e(715),w.e(6769),w.e(6231),w.e(731),w.e(5388),w.e(9407),w.e(1277),w.e(2363),w.e(32),w.e(4299),w.e(8047),w.e(9906)]).then((()=>()=>w(58493))))),28250:()=>c("default","@jupyterlab/application",!1,[1,4,2,4],(()=>Promise.all([w.e(4729),w.e(5945),w.e(9711),w.e(6769),w.e(6231),w.e(731),w.e(1277),w.e(32),w.e(6775)]).then((()=>()=>w(84729))))),52143:()=>c("default","@jupyterlite/server",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>Promise.all([w.e(7032),w.e(427),w.e(6769),w.e(6775),w.e(4536)]).then((()=>()=>w(85625))))),50007:()=>c("default","@jupyterlite/kernel",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>Promise.all([w.e(7032),w.e(5498),w.e(427),w.e(6769)]).then((()=>()=>w(95498))))),15074:()=>c("default","@jupyter-widgets/jupyterlab-manager",!1,[1,5,0,9],(()=>Promise.all([w.e(4651),w.e(4183),w.e(9844),w.e(6769),w.e(922),w.e(4968),w.e(2740),w.e(474),w.e(2609),w.e(7057)]).then((()=>()=>w(25842))))),4266:()=>c("default","@jupyterlab/json-extension",!1,[1,4,2,4],(()=>w.e(2779).then((()=>()=>w(58017))))),17395:()=>c("default","@lumino/datagrid",!1,[1,2,0,0],(()=>w.e(8862).then((()=>()=>w(38862))))),19290:()=>c("default","@jupyterlab/rendermime-extension",!1,[1,4,2,4],(()=>w.e(6385).then((()=>()=>w(98766))))),25258:()=>c("default","@jupyterlab/logconsole",!1,[1,4,2,4],(()=>w.e(4653).then((()=>()=>w(34653))))),30514:()=>c("default","@jupyterlab/theme-dark-extension",!1,[1,4,2,4],(()=>w.e(2812).then((()=>()=>w(431))))),35328:()=>c("default","@voila-dashboards/voila",!1,[2,0,5,5],(()=>Promise.all([w.e(5688),w.e(4173),w.e(1670),w.e(7883),w.e(4187),w.e(6769),w.e(5388),w.e(2363),w.e(32),w.e(4299),w.e(8047),w.e(2740),w.e(8250)]).then((()=>()=>w(84187))))),54138:()=>c("default","@jupyterlab/theme-light-extension",!1,[1,4,2,4],(()=>w.e(6370).then((()=>()=>w(23989))))),59054:()=>c("default","@jupyterlab/markdownviewer-extension",!1,[1,4,2,4],(()=>Promise.all([w.e(9252),w.e(32),w.e(3387)]).then((()=>()=>w(25768))))),60661:()=>c("default","@jupyterlite/iframe-extension",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>w.e(6995).then((()=>()=>w(49376))))),61384:()=>c("default","@jupyterlab/mathjax-extension",!1,[1,4,2,4],(()=>w.e(926).then((()=>()=>w(85688))))),76274:()=>c("default","@jupyterlab/mainmenu",!1,[1,4,2,4],(()=>Promise.all([w.e(715),w.e(5388),w.e(5630)]).then((()=>()=>w(83249))))),19614:()=>c("default","@lumino/messaging",!1,[1,2,0,0],(()=>Promise.all([w.e(238),w.e(9802)]).then((()=>()=>w(20238))))),60032:()=>c("default","@jupyterlab/docregistry",!1,[1,4,2,4],(()=>Promise.all([w.e(5688),w.e(6382),w.e(5044),w.e(5945),w.e(9711),w.e(731),w.e(5388),w.e(9407)]).then((()=>()=>w(95044))))),49906:()=>c("default","@jupyterlab/nbformat",!1,[1,4,2,4],(()=>w.e(4087).then((()=>()=>w(16468))))),47079:()=>c("default","@lumino/commands",!1,[1,2,0,0],(()=>Promise.all([w.e(3916),w.e(427),w.e(5945),w.e(9711),w.e(2363),w.e(6975)]).then((()=>()=>w(3916))))),59665:()=>c("default","@jupyterlite/contents",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>w.e(2224).then((()=>()=>w(12224))))),59802:()=>c("default","@lumino/algorithm",!1,[1,2,0,0],(()=>w.e(464).then((()=>()=>w(50464))))),67193:()=>c("default","@lumino/algorithm",!1,[1,2,0,0],(()=>w.e(3455).then((()=>()=>w(53455))))),54711:()=>c("default","@jupyterlite/server-extension",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>Promise.all([w.e(8696),w.e(6557),w.e(7),w.e(9665)]).then((()=>()=>w(26557))))),36081:()=>c("default","@lumino/messaging",!1,[1,2,0,0],(()=>w.e(4463).then((()=>()=>w(24463))))),90547:()=>c("default","@lumino/domutils",!1,[1,2,0,0],(()=>w.e(9405).then((()=>()=>w(39405)))))},g={7:[50007],32:[60032],281:[80281],427:[30427],474:[90474],715:[50715],731:[60731],922:[10922],1256:[31256],1277:[71277],2143:[52143],2363:[72363],2609:[25258,76274],2740:[2740],4299:[74299],4711:[54711],4968:[54968],5040:[4266,17395,19290,25258,30514,35328,54138,59054,60661,61384,76274],5074:[15074],5388:[15388],5666:[15666],5945:[45945],6231:[76231],6769:[6769],6775:[66775],6975:[96975],7079:[47079],7193:[67193],7867:[57867],7869:[36081,90547],8047:[38047],8211:[68211],8250:[28250],8748:[28748],9407:[59407],9614:[19614],9665:[59665],9711:[49711],9802:[59802],9906:[49906]},P={},w.f.consumes=(e,t)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(y,e))return t.push(y[e]);if(!P[e]){var r=t=>{y[e]=0,w.m[e]=r=>{delete w.c[e],r.exports=t()}};P[e]=!0;var l=t=>{delete y[e],w.m[e]=r=>{throw delete w.c[e],t}};try{var n=b[e]();n.then?t.push(y[e]=n.then(r).catch(l)):r(n)}catch(e){l(e)}}}))},(()=>{w.b=document.baseURI||self.location.href;var e={8807:0};w.f.j=(t,r)=>{var l=w.o(e,t)?e[t]:void 0;if(0!==l)if(l)r.push(l[2]);else if(/^(12(56|77)|2(143|363|609|740|81)|4(27|299|711|74|968)|5(074|388|666|945)|6([79]75|231|769)|7(86[79]||079|15|193|31)|8(047|211|250|748)|9(22|407|614|665|711|802|906)|32)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>l=e[t]=[r,n]));r.push(l[2]=n);var a=w.p+w.u(t),o=new Error;w.l(a,(r=>{if(w.o(e,t)&&(0!==(l=e[t])&&(e[t]=void 0),l)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,l[1](o)}}),"chunk-"+t,t)}};var t=(t,r)=>{var l,n,a=r[0],o=r[1],i=r[2],u=0;if(a.some((t=>0!==e[t]))){for(l in o)w.o(o,l)&&(w.m[l]=o[l]);i&&i(w)}for(t&&t(r);u<a.length;u++)n=a[u],w.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),w.nc=void 0,w(80551);var O=w(31068);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).CORE_OUTPUT=O})();