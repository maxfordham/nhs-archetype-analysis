/*! For license information please see 910.ac15ad91a96883a9cfa0.js.LICENSE.txt */
"use strict";(self.webpackChunk_jupyterlite_xeus=self.webpackChunk_jupyterlite_xeus||[]).push([[910],{910:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});const n="function",a="64e10b34-2bf7-4616-9668-f99de5aa046e",o="get",r="has",i="set",{isArray:l}=Array;let{SharedArrayBuffer:c,window:f}=globalThis,{notify:d,wait:p,waitAsync:u}=Atomics,g=null;u||(u=e=>({value:new Promise((t=>{let s=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");s.onmessage=t,s.postMessage(e)}))}));try{new c(4)}catch(e){c=ArrayBuffer;const t=new WeakMap;if(f){const e=new Map,{prototype:{postMessage:s}}=Worker,n=t=>{const s=t.data?.[a];if(!l(s)){t.stopImmediatePropagation();const{id:n,sb:a}=s;e.get(n)(a)}};g=function(e,...o){const r=e?.[a];if(l(r)){const[e,s]=r;t.set(s,e),this.addEventListener("message",n)}return s.call(this,e,...o)},u=s=>({value:new Promise((n=>{e.set(t.get(s),n)})).then((n=>{e.delete(t.get(s)),t.delete(s);for(let e=0;e<n.length;e++)s[e]=n[e];return"ok"}))})}else{const e=(e,t)=>({[a]:{id:e,sb:t}});d=s=>{postMessage(e(t.get(s),s))},addEventListener("message",(e=>{const s=e.data?.[a];if(l(s)){const[e,n]=s;t.set(n,e)}}))}}const{Int32Array:w,Map:h,Uint16Array:y}=globalThis,{BYTES_PER_ELEMENT:m}=w,{BYTES_PER_ELEMENT:E}=y,b=new WeakSet,k=new WeakMap,A={value:{then:e=>e()}};let M=0;const v=(e,{parse:t=JSON.parse,stringify:s=JSON.stringify,transform:f,interrupt:v}=JSON)=>{if(!k.has(e)){const T=g||e.postMessage,_=(t,...s)=>T.call(e,{[a]:s},{transfer:t}),P=typeof v===n?v:v?.handler,S=v?.delay||42,W=new TextDecoder("utf-16"),x=(e,t)=>e?u(t,0):(P?((e,t,s)=>{for(;"timed-out"===p(e,0,0,t);)s()})(t,S,P):p(t,0),A);let B=!1;k.set(e,new Proxy(new h,{[r]:(e,t)=>"string"==typeof t&&!t.startsWith("_"),[o]:(s,n)=>"then"===n?null:(...s)=>{const a=M++;let o=new w(new c(2*m)),r=[];b.has(s.at(-1)||r)&&b.delete(r=s.pop()),_(r,a,o,n,f?s.map(f):s);const i=e!==globalThis;let l=0;return B&&i&&(l=setTimeout(console.warn,1e3,`💀🔒 - Possible deadlock if proxy.${n}(...args) is awaited`)),x(i,o).value.then((()=>{clearTimeout(l);const e=o[1];if(!e)return;const s=E*e;return o=new w(new c(s+s%m)),_([],a,o),x(i,o).value.then((()=>t(W.decode(new y(o.buffer).slice(0,e)))))}))},[i](t,o,r){const i=typeof r;if(i!==n)throw new Error(`Unable to assign ${o} as ${i}`);if(!t.size){const n=new h;e.addEventListener("message",(async e=>{const o=e.data?.[a];if(l(o)){e.stopImmediatePropagation();const[a,r,...i]=o;let l;if(i.length){const[e,o]=i;if(t.has(e)){B=!0;try{const i=await t.get(e)(...o);if(void 0!==i){const e=s(f?f(i):i);n.set(a,e),r[1]=e.length}}catch(e){l=e}finally{B=!1}}else l=new Error(`Unsupported action: ${e}`);r[0]=1}else{const e=n.get(a);n.delete(a);for(let t=new y(r.buffer),s=0;s<e.length;s++)t[s]=e.charCodeAt(s)}if(d(r,0),l)throw l}}))}return!!t.set(o,r)}}))}return k.get(e)};v.transfer=(...e)=>(b.add(e),e);const T=v}}]);