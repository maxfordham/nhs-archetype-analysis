var _JUPYTERLAB;(()=>{var e,t,r,l,n,o,a,i,u,s,m,h,d,p,f,c,y,b,g,P,v={75408:(e,t,r)=>{"use strict";Promise.all([r.e(4122),r.e(4343),r.e(8211),r.e(427),r.e(8748),r.e(1256),r.e(715),r.e(5666),r.e(32),r.e(922),r.e(474),r.e(2143),r.e(5074),r.e(1815)]).then(r.bind(r,64617))},80551:(e,t,r)=>{r.p=function(){let e=Object.create(null);if("undefined"!=typeof document&&document){const t=document.getElementById("jupyter-config-data");t&&(e=JSON.parse(t.textContent||"{}"))}return e.fullStaticUrl||""}()+"/"}},j={};function O(e){var t=j[e];if(void 0!==t)return t.exports;var r=j[e]={id:e,loaded:!1,exports:{}};return v[e].call(r.exports,r,r.exports,O),r.loaded=!0,r.exports}O.m=v,O.c=j,O.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return O.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,O.t=function(r,l){if(1&l&&(r=this(r)),8&l)return r;if("object"==typeof r&&r){if(4&l&&r.__esModule)return r;if(16&l&&"function"==typeof r.then)return r}var n=Object.create(null);O.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&l&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,O.d(n,o),n},O.d=(e,t)=>{for(var r in t)O.o(t,r)&&!O.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},O.f={},O.e=e=>Promise.all(Object.keys(O.f).reduce(((t,r)=>(O.f[r](e,t),t)),[])),O.u=e=>(7869===e?"@jupyter-widgets/controls":e)+".js",O.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),O.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},l="_JUPYTERLAB.CORE_OUTPUT:",O.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var a,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var m=u[s];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==l+n){a=m;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,O.nc&&a.setAttribute("nonce",O.nc),a.setAttribute("data-webpack",l+n),a.src=e),r[e]=[t];var h=(t,l)=>{a.onerror=a.onload=null,clearTimeout(d);var n=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(l))),t)return t(l)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),i&&document.head.appendChild(a)}},O.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),O.j=5154,(()=>{O.S={};var e={},t={};O.I=(r,l)=>{l||(l=[]);var n=t[r];if(n||(n=t[r]={}),!(l.indexOf(n)>=0)){if(l.push(n),e[r])return e[r];O.o(O.S,r)||(O.S[r]={});var o=O.S[r],a="_JUPYTERLAB.CORE_OUTPUT",i=(e,t,r,l)=>{var n=o[e]=o[e]||{},i=n[t];(!i||!i.loaded&&(!l!=!i.eager?l:a>i.from))&&(n[t]={get:r,from:a,eager:!!l})},u=[];return"default"===r&&(i("@jupyter-widgets/base","6.0.8",(()=>Promise.all([O.e(4651),O.e(6343),O.e(3264),O.e(8211),O.e(281),O.e(9614)]).then((()=>()=>O(43264))))),i("@jupyter-widgets/jupyterlab-manager","5.0.11",(()=>Promise.all([O.e(4651),O.e(4183),O.e(9844),O.e(8211),O.e(427),O.e(5945),O.e(281),O.e(9711),O.e(1256),O.e(6769),O.e(5666),O.e(922),O.e(4968),O.e(2740),O.e(474),O.e(2609),O.e(9438)]).then((()=>()=>O(25842))))),i("@jupyterlab/application","4.2.4",(()=>Promise.all([O.e(4729),O.e(8211),O.e(427),O.e(5945),O.e(8748),O.e(281),O.e(9711),O.e(1256),O.e(715),O.e(6769),O.e(6231),O.e(731),O.e(5388),O.e(5666),O.e(1277),O.e(32),O.e(6775)]).then((()=>()=>O(84729))))),i("@jupyterlab/apputils","4.3.4",(()=>Promise.all([O.e(1670),O.e(4183),O.e(9684),O.e(8211),O.e(427),O.e(5945),O.e(8748),O.e(281),O.e(9711),O.e(1256),O.e(6769),O.e(6231),O.e(731),O.e(5388),O.e(9407),O.e(2363),O.e(4968),O.e(9890)]).then((()=>()=>O(79684))))),i("@jupyterlab/coreutils","6.2.4",(()=>Promise.all([O.e(8925),O.e(8211),O.e(427)]).then((()=>()=>O(11306))))),i("@jupyterlab/docregistry","4.2.4",(()=>Promise.all([O.e(5688),O.e(6382),O.e(5044),O.e(8211),O.e(427),O.e(5945),O.e(8748),O.e(281),O.e(9711),O.e(1256),O.e(715),O.e(731),O.e(5388),O.e(5666),O.e(9407)]).then((()=>()=>O(95044))))),i("@jupyterlab/json-extension","4.2.4",(()=>Promise.all([O.e(281),O.e(1256),O.e(715),O.e(9407),O.e(7867),O.e(8017)]).then((()=>()=>O(58017))))),i("@jupyterlab/logconsole","4.2.4",(()=>Promise.all([O.e(4653),O.e(8211),O.e(427),O.e(281),O.e(1256),O.e(5666),O.e(922)]).then((()=>()=>O(34653))))),i("@jupyterlab/mainmenu","4.2.4",(()=>Promise.all([O.e(8211),O.e(5945),O.e(281),O.e(715),O.e(5388),O.e(3249)]).then((()=>()=>O(83249))))),i("@jupyterlab/markdownviewer-extension","4.2.4",(()=>Promise.all([O.e(9252),O.e(8211),O.e(427),O.e(8748),O.e(281),O.e(1256),O.e(715),O.e(5388),O.e(5666),O.e(32),O.e(4968),O.e(8250),O.e(5768)]).then((()=>()=>O(25768))))),i("@jupyterlab/mathjax-extension","4.2.4",(()=>Promise.all([O.e(8211),O.e(5666),O.e(3307)]).then((()=>()=>O(85688))))),i("@jupyterlab/nbformat","4.2.4",(()=>Promise.all([O.e(8211),O.e(6468)]).then((()=>()=>O(16468))))),i("@jupyterlab/notebook","4.2.4",(()=>Promise.all([O.e(5688),O.e(4173),O.e(6382),O.e(9252),O.e(8493),O.e(8211),O.e(427),O.e(5945),O.e(8748),O.e(281),O.e(9711),O.e(1256),O.e(715),O.e(6769),O.e(6231),O.e(731),O.e(5388),O.e(5666),O.e(9407),O.e(1277),O.e(2363),O.e(32),O.e(4299),O.e(8047),O.e(922),O.e(9906)]).then((()=>()=>O(58493))))),i("@jupyterlab/outputarea","4.2.4",(()=>Promise.all([O.e(7483),O.e(8211),O.e(427),O.e(5945),O.e(281),O.e(1256),O.e(715),O.e(6769),O.e(6231),O.e(5666),O.e(9906)]).then((()=>()=>O(77483))))),i("@jupyterlab/rendermime-extension","4.2.4",(()=>Promise.all([O.e(8211),O.e(1256),O.e(715),O.e(5666),O.e(8766)]).then((()=>()=>O(98766))))),i("@jupyterlab/rendermime","4.2.4",(()=>Promise.all([O.e(5312),O.e(8211),O.e(427),O.e(8748),O.e(281),O.e(1256),O.e(715),O.e(731),O.e(9906)]).then((()=>()=>O(75312))))),i("@jupyterlab/services","7.2.4",(()=>Promise.all([O.e(1670),O.e(7883),O.e(8211),O.e(427),O.e(8748),O.e(9711),O.e(6231),O.e(1277),O.e(9907)]).then((()=>()=>O(17883))))),i("@jupyterlab/settingregistry","4.2.4",(()=>Promise.all([O.e(8696),O.e(1601),O.e(9530),O.e(8211),O.e(427),O.e(9711),O.e(7079)]).then((()=>()=>O(49530))))),i("@jupyterlab/theme-dark-extension","4.2.4",(()=>Promise.all([O.e(1256),O.e(715),O.e(431)]).then((()=>()=>O(431))))),i("@jupyterlab/theme-light-extension","4.2.4",(()=>Promise.all([O.e(1256),O.e(715),O.e(3989)]).then((()=>()=>O(23989))))),i("@jupyterlab/translation","4.2.4",(()=>Promise.all([O.e(1670),O.e(9582),O.e(8211),O.e(427),O.e(8748),O.e(6769),O.e(6231)]).then((()=>()=>O(89582))))),i("@jupyterlab/ui-components","4.2.4",(()=>Promise.all([O.e(6343),O.e(8707),O.e(7155),O.e(8211),O.e(427),O.e(5945),O.e(8748),O.e(281),O.e(9711),O.e(1256),O.e(6231),O.e(731),O.e(9407),O.e(1277),O.e(4299),O.e(7079),O.e(7867)]).then((()=>()=>O(17155))))),i("@jupyterlite/contents","0.4.0",(()=>Promise.all([O.e(2224),O.e(8211),O.e(8748)]).then((()=>()=>O(12224))))),i("@jupyterlite/iframe-extension","0.4.0",(()=>Promise.all([O.e(8211),O.e(281),O.e(9376)]).then((()=>()=>O(49376))))),i("@jupyterlite/kernel","0.4.0",(()=>Promise.all([O.e(7032),O.e(5498),O.e(8211),O.e(427),O.e(8748),O.e(6769)]).then((()=>()=>O(95498))))),i("@jupyterlite/server-extension","0.4.0",(()=>Promise.all([O.e(8696),O.e(6557),O.e(8211),O.e(5945),O.e(8748),O.e(2143),O.e(7),O.e(9665)]).then((()=>()=>O(26557))))),i("@jupyterlite/server","0.4.0",(()=>Promise.all([O.e(7032),O.e(8211),O.e(427),O.e(8748),O.e(6769),O.e(6775),O.e(9774)]).then((()=>()=>O(85625))))),i("@lumino/algorithm","1.9.2",(()=>O.e(464).then((()=>()=>O(50464))))),i("@lumino/algorithm","1.9.2",(()=>O.e(3455).then((()=>()=>O(53455))))),i("@lumino/algorithm","2.0.2",(()=>O.e(8135).then((()=>()=>O(38135))))),i("@lumino/application","2.4.1",(()=>Promise.all([O.e(8211),O.e(281),O.e(7079),O.e(2842)]).then((()=>()=>O(92842))))),i("@lumino/commands","2.3.1",(()=>Promise.all([O.e(3916),O.e(8211),O.e(427),O.e(5945),O.e(9711),O.e(2363),O.e(6975)]).then((()=>()=>O(3916))))),i("@lumino/coreutils","2.2.0",(()=>Promise.all([O.e(5764),O.e(5945)]).then((()=>()=>O(75764))))),i("@lumino/datagrid","2.4.1",(()=>Promise.all([O.e(8862),O.e(8211),O.e(427),O.e(5945),O.e(281),O.e(731),O.e(2363),O.e(8047),O.e(6975)]).then((()=>()=>O(38862))))),i("@lumino/disposable","2.1.3",(()=>Promise.all([O.e(427),O.e(7556)]).then((()=>()=>O(7556))))),i("@lumino/domutils","1.8.2",(()=>O.e(9405).then((()=>()=>O(39405))))),i("@lumino/domutils","2.0.2",(()=>O.e(1621).then((()=>()=>O(41621))))),i("@lumino/dragdrop","2.1.5",(()=>Promise.all([O.e(8487),O.e(9711)]).then((()=>()=>O(88487))))),i("@lumino/keyboard","2.0.2",(()=>O.e(9981).then((()=>()=>O(69981))))),i("@lumino/messaging","1.10.3",(()=>Promise.all([O.e(238),O.e(9802)]).then((()=>()=>O(20238))))),i("@lumino/messaging","1.10.3",(()=>Promise.all([O.e(4463),O.e(7193)]).then((()=>()=>O(24463))))),i("@lumino/messaging","2.0.2",(()=>Promise.all([O.e(4135),O.e(5945)]).then((()=>()=>O(34135))))),i("@lumino/polling","2.1.3",(()=>Promise.all([O.e(8211),O.e(427),O.e(6049)]).then((()=>()=>O(86049))))),i("@lumino/properties","2.0.2",(()=>O.e(6573).then((()=>()=>O(26573))))),i("@lumino/signaling","2.1.3",(()=>Promise.all([O.e(8211),O.e(5945),O.e(3992)]).then((()=>()=>O(73992))))),i("@lumino/virtualdom","2.0.2",(()=>Promise.all([O.e(3649),O.e(5945)]).then((()=>()=>O(43649))))),i("@lumino/widgets","2.5.0",(()=>Promise.all([O.e(3311),O.e(8211),O.e(427),O.e(5945),O.e(9711),O.e(6231),O.e(731),O.e(2363),O.e(4299),O.e(8047),O.e(7079),O.e(6975)]).then((()=>()=>O(93311))))),i("@voila-dashboards/voila","0.5.7",(()=>Promise.all([O.e(5688),O.e(4173),O.e(1670),O.e(7883),O.e(4187),O.e(8211),O.e(427),O.e(5945),O.e(8748),O.e(281),O.e(9711),O.e(1256),O.e(715),O.e(6769),O.e(6231),O.e(731),O.e(5388),O.e(5666),O.e(1277),O.e(2363),O.e(32),O.e(4299),O.e(8047),O.e(2740),O.e(8250),O.e(5074)]).then((()=>()=>O(84187))))),i("react-dom","18.3.1",(()=>Promise.all([O.e(3144),O.e(9407)]).then((()=>()=>O(43144))))),i("react","18.3.1",(()=>O.e(4041).then((()=>()=>O(14041)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;O.g.importScripts&&(e=O.g.location+"");var t=O.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var l=r.length-1;l>-1&&(!e||!/^http(s?):/.test(e));)e=r[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),O.p=e})(),n=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),l=r[1]?t(r[1]):[];return r[2]&&(l.length++,l.push.apply(l,t(r[2]))),r[3]&&(l.push([]),l.push.apply(l,t(r[3]))),l},o=(e,t)=>{e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var l=e[r],o=(typeof l)[0];if(r>=t.length)return"u"==o;var a=t[r],i=(typeof a)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&l!=a)return l<a;r++}},a=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var l=1,n=1;n<e.length;n++)l--,r+="u"==(typeof(i=e[n]))[0]?"-":(l>0?".":"")+(l=2,i);return r}var o=[];for(n=1;n<e.length;n++){var i=e[n];o.push(0===i?"not("+u()+")":1===i?"("+u()+" || "+u()+")":2===i?o.pop()+" "+o.pop():a(i))}return u();function u(){return o.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,t)=>{if(0 in e){t=n(t);var r=e[0],l=r<0;l&&(r=-r-1);for(var o=0,a=1,u=!0;;a++,o++){var s,m,h=a<e.length?(typeof e[a])[0]:"";if(o>=t.length||"o"==(m=(typeof(s=t[o]))[0]))return!u||("u"==h?a>r&&!l:""==h!=l);if("u"==m){if(!u||"u"!=h)return!1}else if(u)if(h==m)if(a<=r){if(s!=e[a])return!1}else{if(l?s>e[a]:s<e[a])return!1;s!=e[a]&&(u=!1)}else if("s"!=h&&"n"!=h){if(l||a<=r)return!1;u=!1,a--}else{if(a<=r||m<h!=l)return!1;u=!1}else"s"!=h&&"n"!=h&&(u=!1,a--)}}var d=[],p=d.pop.bind(d);for(o=1;o<e.length;o++){var f=e[o];d.push(1==f?p()|p():2==f?p()&p():f?i(f,t):!p())}return!!p()},u=(e,t)=>e&&O.o(e,t),s=e=>(e.loaded=1,e.get()),m=e=>Object.keys(e).reduce(((t,r)=>(e[r].eager&&(t[r]=e[r]),t)),{}),h=(e,t,r,l)=>{var n=l?m(e[t]):e[t];return(t=Object.keys(n).reduce(((e,t)=>!i(r,t)||e&&!o(e,t)?e:t),0))&&n[t]},d=(e,t,r,l,n)=>{var o=e[r];return"No satisfying version ("+a(l)+")"+(n?" for eager consumption":"")+" of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=e=>{throw new Error(e)},f=(e,t,r)=>r?r():((e,t)=>p("Shared module "+t+" doesn't exist in shared scope "+e))(e,t),c=(e=>function(t,r,l,n,o){var a=O.I(t);return a&&a.then&&!l?a.then(e.bind(e,t,O.S[t],r,!1,n,o)):e(t,O.S[t],r,l,n,o)})(((e,t,r,l,n,o)=>{if(!u(t,r))return f(e,r,o);var a=h(t,r,n,l);return a?s(a):o?o():void p(d(t,e,r,n,l))})),y={},b={68211:()=>c("default","@lumino/coreutils",!1,[1,2,0,0],(()=>Promise.all([O.e(5764),O.e(5945)]).then((()=>()=>O(75764))))),80281:()=>c("default","@lumino/widgets",!1,[1,2,0,0],(()=>Promise.all([O.e(3311),O.e(8211),O.e(427),O.e(5945),O.e(9711),O.e(6231),O.e(731),O.e(2363),O.e(4299),O.e(8047),O.e(7079),O.e(6975)]).then((()=>()=>O(93311))))),19614:()=>c("default","@lumino/messaging",!1,[1,2,0,0],(()=>Promise.all([O.e(238),O.e(9802)]).then((()=>()=>O(20238))))),30427:()=>c("default","@lumino/signaling",!1,[1,2,0,0],(()=>Promise.all([O.e(8211),O.e(5945),O.e(3992)]).then((()=>()=>O(73992))))),45945:()=>c("default","@lumino/algorithm",!1,[1,2,0,0],(()=>O.e(8135).then((()=>()=>O(38135))))),49711:()=>c("default","@lumino/disposable",!1,[1,2,0,0],(()=>Promise.all([O.e(427),O.e(7556)]).then((()=>()=>O(7556))))),31256:()=>c("default","@jupyterlab/translation",!1,[1,4,2,4],(()=>Promise.all([O.e(1670),O.e(9582),O.e(8211),O.e(427),O.e(8748),O.e(6769),O.e(6231)]).then((()=>()=>O(89582))))),6769:()=>c("default","@jupyterlab/services",!1,[1,7,2,4],(()=>Promise.all([O.e(1670),O.e(7883),O.e(8748),O.e(9711),O.e(6231),O.e(1277),O.e(2288)]).then((()=>()=>O(17883))))),15666:()=>c("default","@jupyterlab/rendermime",!1,[1,4,2,4],(()=>Promise.all([O.e(5312),O.e(427),O.e(8748),O.e(281),O.e(1256),O.e(715),O.e(731),O.e(9906)]).then((()=>()=>O(75312))))),10922:()=>c("default","@jupyterlab/outputarea",!1,[1,4,2,4],(()=>Promise.all([O.e(7483),O.e(5945),O.e(715),O.e(6769),O.e(6231),O.e(9906)]).then((()=>()=>O(77483))))),54968:()=>c("default","@jupyterlab/settingregistry",!1,[1,4,2,4],(()=>Promise.all([O.e(8696),O.e(1601),O.e(9530),O.e(9711),O.e(7079)]).then((()=>()=>O(49530))))),2740:()=>c("default","@jupyter-widgets/base",!1,[1,6,0,6],(()=>Promise.all([O.e(4651),O.e(6343),O.e(3264),O.e(9614)]).then((()=>()=>O(43264))))),90474:()=>c("default","@jupyterlab/notebook",!1,[1,4,2,4],(()=>Promise.all([O.e(5688),O.e(4173),O.e(6382),O.e(9252),O.e(8493),O.e(8748),O.e(715),O.e(6769),O.e(6231),O.e(731),O.e(5388),O.e(9407),O.e(1277),O.e(2363),O.e(32),O.e(4299),O.e(8047),O.e(9906)]).then((()=>()=>O(58493))))),25258:()=>c("default","@jupyterlab/logconsole",!1,[1,4,2,4],(()=>O.e(4653).then((()=>()=>O(34653))))),76274:()=>c("default","@jupyterlab/mainmenu",!1,[1,4,2,4],(()=>Promise.all([O.e(715),O.e(5388),O.e(5630)]).then((()=>()=>O(83249))))),28748:()=>c("default","@jupyterlab/coreutils",!1,[1,6,2,4],(()=>Promise.all([O.e(8925),O.e(427)]).then((()=>()=>O(11306))))),50715:()=>c("default","@jupyterlab/apputils",!1,[1,4,3,4],(()=>Promise.all([O.e(1670),O.e(4183),O.e(9684),O.e(8211),O.e(427),O.e(5945),O.e(8748),O.e(281),O.e(9711),O.e(1256),O.e(6769),O.e(6231),O.e(731),O.e(5388),O.e(9407),O.e(2363),O.e(4968),O.e(9890)]).then((()=>()=>O(79684))))),76231:()=>c("default","@lumino/properties",!1,[1,2,0,0],(()=>O.e(6573).then((()=>()=>O(26573))))),60731:()=>c("default","@lumino/messaging",!1,[1,2,0,0],(()=>Promise.all([O.e(4135),O.e(5945)]).then((()=>()=>O(34135))))),15388:()=>c("default","@jupyterlab/ui-components",!1,[1,4,2,4],(()=>Promise.all([O.e(6343),O.e(8707),O.e(7155),O.e(427),O.e(5945),O.e(8748),O.e(9711),O.e(1256),O.e(6231),O.e(731),O.e(9407),O.e(1277),O.e(4299),O.e(7079),O.e(7867)]).then((()=>()=>O(17155))))),71277:()=>c("default","@lumino/polling",!1,[1,2,0,0],(()=>O.e(8430).then((()=>()=>O(86049))))),60032:()=>c("default","@jupyterlab/docregistry",!1,[1,4,2,4],(()=>Promise.all([O.e(5688),O.e(6382),O.e(5044),O.e(5945),O.e(9711),O.e(731),O.e(5388),O.e(9407)]).then((()=>()=>O(95044))))),66775:()=>c("default","@lumino/application",!1,[1,2,0,0],(()=>Promise.all([O.e(281),O.e(7079),O.e(461)]).then((()=>()=>O(92842))))),59407:()=>c("default","react",!1,[1,18,2,0],(()=>O.e(4041).then((()=>()=>O(14041))))),72363:()=>c("default","@lumino/domutils",!1,[1,2,0,0],(()=>O.e(1621).then((()=>()=>O(41621))))),57867:()=>c("default","react-dom",!1,[1,18,2,0],(()=>O.e(3144).then((()=>()=>O(43144))))),28250:()=>c("default","@jupyterlab/application",!1,[1,4,2,4],(()=>Promise.all([O.e(4729),O.e(5945),O.e(9711),O.e(6769),O.e(6231),O.e(731),O.e(1277),O.e(32),O.e(6775)]).then((()=>()=>O(84729))))),74299:()=>c("default","@lumino/virtualdom",!1,[1,2,0,0],(()=>O.e(3649).then((()=>()=>O(43649))))),38047:()=>c("default","@lumino/dragdrop",!1,[1,2,0,0],(()=>Promise.all([O.e(8487),O.e(9711)]).then((()=>()=>O(88487))))),49906:()=>c("default","@jupyterlab/nbformat",!1,[1,4,2,4],(()=>O.e(4087).then((()=>()=>O(16468))))),47079:()=>c("default","@lumino/commands",!1,[1,2,0,0],(()=>Promise.all([O.e(3916),O.e(427),O.e(5945),O.e(9711),O.e(2363),O.e(6975)]).then((()=>()=>O(3916))))),52143:()=>c("default","@jupyterlite/server",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>Promise.all([O.e(7032),O.e(427),O.e(6769),O.e(6775),O.e(4536)]).then((()=>()=>O(85625))))),50007:()=>c("default","@jupyterlite/kernel",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>Promise.all([O.e(7032),O.e(5498),O.e(427),O.e(6769)]).then((()=>()=>O(95498))))),59665:()=>c("default","@jupyterlite/contents",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>O.e(2224).then((()=>()=>O(12224))))),96975:()=>c("default","@lumino/keyboard",!1,[1,2,0,0],(()=>O.e(9981).then((()=>()=>O(69981))))),59802:()=>c("default","@lumino/algorithm",!1,[1,2,0,0],(()=>O.e(464).then((()=>()=>O(50464))))),67193:()=>c("default","@lumino/algorithm",!1,[1,2,0,0],(()=>O.e(3455).then((()=>()=>O(53455))))),15074:()=>c("default","@jupyter-widgets/jupyterlab-manager",!1,[1,5,0,9],(()=>Promise.all([O.e(4651),O.e(4183),O.e(9844),O.e(6769),O.e(922),O.e(4968),O.e(2740),O.e(474),O.e(2609),O.e(7057)]).then((()=>()=>O(25842))))),30514:()=>c("default","@jupyterlab/theme-dark-extension",!1,[1,4,2,4],(()=>O.e(2812).then((()=>()=>O(431))))),35328:()=>c("default","@voila-dashboards/voila",!1,[2,0,5,5],(()=>Promise.all([O.e(5688),O.e(4173),O.e(1670),O.e(7883),O.e(4187),O.e(6769),O.e(5388),O.e(2363),O.e(32),O.e(4299),O.e(8047),O.e(2740),O.e(8250)]).then((()=>()=>O(84187))))),54138:()=>c("default","@jupyterlab/theme-light-extension",!1,[1,4,2,4],(()=>O.e(6370).then((()=>()=>O(23989))))),36081:()=>c("default","@lumino/messaging",!1,[1,2,0,0],(()=>O.e(4463).then((()=>()=>O(24463))))),90547:()=>c("default","@lumino/domutils",!1,[1,2,0,0],(()=>O.e(9405).then((()=>()=>O(39405))))),54711:()=>c("default","@jupyterlite/server-extension",!1,[,[2,0,4,0],[2,0,3,0],[2,0,2,0],1,1],(()=>Promise.all([O.e(8696),O.e(6557),O.e(7),O.e(9665)]).then((()=>()=>O(26557)))))},g={7:[50007],32:[60032],281:[80281],427:[30427],474:[90474],715:[50715],731:[60731],922:[10922],1256:[31256],1277:[71277],1815:[30514,35328,45945,49711,54138,60731,71277,76231,80281],2143:[52143],2363:[72363],2609:[25258,76274],2740:[2740],4299:[74299],4711:[54711],4968:[54968],5074:[15074],5388:[15388],5666:[15666],5945:[45945],6231:[76231],6769:[6769],6775:[66775],6975:[96975],7079:[47079],7193:[67193],7867:[57867],7869:[36081,90547],8047:[38047],8211:[68211],8250:[28250],8748:[28748],9407:[59407],9614:[19614],9665:[59665],9711:[49711],9802:[59802],9906:[49906]},P={},O.f.consumes=(e,t)=>{O.o(g,e)&&g[e].forEach((e=>{if(O.o(y,e))return t.push(y[e]);if(!P[e]){var r=t=>{y[e]=0,O.m[e]=r=>{delete O.c[e],r.exports=t()}};P[e]=!0;var l=t=>{delete y[e],O.m[e]=r=>{throw delete O.c[e],t}};try{var n=b[e]();n.then?t.push(y[e]=n.then(r).catch(l)):r(n)}catch(e){l(e)}}}))},(()=>{O.b=document.baseURI||self.location.href;var e={5154:0};O.f.j=(t,r)=>{var l=O.o(e,t)?e[t]:void 0;if(0!==l)if(l)r.push(l[2]);else if(/^(12(56|77)|2(143|363|609|740|81)|4(27|299|711|74|968)|5(074|388|666|945)|6([79]75|231|769)|7(86[79]||079|15|193|31)|8(047|211|250|748)|9(22|407|614|665|711|802|906)|32)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>l=e[t]=[r,n]));r.push(l[2]=n);var o=O.p+O.u(t),a=new Error;O.l(o,(r=>{if(O.o(e,t)&&(0!==(l=e[t])&&(e[t]=void 0),l)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,l[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var l,n,o=r[0],a=r[1],i=r[2],u=0;if(o.some((t=>0!==e[t]))){for(l in a)O.o(a,l)&&(O.m[l]=a[l]);i&&i(O)}for(t&&t(r);u<o.length;u++)n=o[u],O.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),O.nc=void 0,O(80551);var w=O(75408);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).CORE_OUTPUT=w})();