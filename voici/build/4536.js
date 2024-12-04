"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4536,9774],{85625:(e,t,r)=>{r.r(t),r.d(t,{IServiceWorkerManager:()=>u,JupyterLiteServer:()=>l,Router:()=>a,ServiceWorkerManager:()=>_,WORKER_NAME:()=>d});var s=r(6769),i=r(66775),n=r(30427),o=r(84651);class a{constructor(){this._routes=[]}get(e,t){this._add("GET",e,t)}put(e,t){this._add("PUT",e,t)}post(e,t){this._add("POST",e,t)}patch(e,t){this._add("PATCH",e,t)}delete(e,t){this._add("DELETE",e,t)}async route(e){const t=new URL(e.url),{method:r}=e,{pathname:s}=t;for(const i of this._routes){if(i.method!==r)continue;const n=s.match(i.pattern);if(!n)continue;const o=n.slice(1);let a;if("PATCH"===i.method||"PUT"===i.method||"POST"===i.method)try{a=JSON.parse(await e.text())}catch{a=void 0}return i.callback.call(null,{pathname:s,body:a,query:Object.fromEntries(t.searchParams)},...o)}throw new Error("Cannot route "+e.method+" "+e.url)}_add(e,t,r){"string"==typeof t&&(t=new RegExp(t)),this._routes.push({method:e,pattern:t,callback:r})}}class c{constructor(e){this._stream=new n.Stream(this),this._serverSettings=e.serverSettings}async emit(e){}dispose(){}get isDisposed(){return!0}get stream(){return this._stream}get serverSettings(){return this._serverSettings}}class l extends i.Application{constructor(e){var t;super(e),this.name="JupyterLite Server",this.namespace=this.name,this.version="unknown",this._router=new a;const r={...s.ServerConnection.makeSettings(),WebSocket:o.WebSocket,fetch:null!==(t=this.fetch.bind(this))&&void 0!==t?t:void 0};this._serviceManager=new s.ServiceManager({standby:"never",serverSettings:r,events:new c({serverSettings:r})})}get router(){return this._router}get serviceManager(){return this._serviceManager}async fetch(e,t){if(!(e instanceof Request))throw Error("Request info is not a Request");return this._router.route(e)}attachShell(e){}evtResize(e){}registerPluginModule(e){let t=e.default;Object.prototype.hasOwnProperty.call(e,"__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){console.error(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}var h=r(68211);const g=r.p+"service-worker.js",u=new h.Token("@jupyterlite/server-extension:IServiceWorkerManager"),d=`${g}`.split("/").slice(-1)[0];var v=r(28748);const p=v.PageConfig.getOption("appVersion");class _{constructor(e){var t;this.unregisterOldServiceWorkers=e=>{const t=`${e}-version`,r=localStorage.getItem(t);(r&&r!==p||!r)&&(console.info("New version, unregistering existing service workers."),navigator.serviceWorker.getRegistrations().then((e=>{for(const t of e)t.unregister()})).then((()=>{console.info("All existing service workers have been unregistered.")}))),localStorage.setItem(t,p)},this._registration=null,this._registrationChanged=new n.Signal(this),this._ready=new h.PromiseDelegate;const r=null!==(t=null==e?void 0:e.workerUrl)&&void 0!==t?t:v.URLExt.join(v.PageConfig.getBaseUrl(),d),s=new URL(r,window.location.href),i=v.PageConfig.getOption("enableServiceWorkerCache")||"false";s.searchParams.set("enableCache",i),this.initialize(s.href).catch(console.warn)}get registrationChanged(){return this._registrationChanged}get enabled(){return null!==this._registration}get ready(){return this._ready.promise}async initialize(e){const{serviceWorker:t}=navigator;let r=null;if(t){if(t.controller){const e=t.controller.scriptURL;this.unregisterOldServiceWorkers(e),r=await t.getRegistration(e)||null,console.info("JupyterLite ServiceWorker was already registered")}}else console.warn("ServiceWorkers not supported in this browser");if(!r&&t)try{console.info("Registering new JupyterLite ServiceWorker",e),r=await t.register(e),console.info("JupyterLite ServiceWorker was sucessfully registered")}catch(e){console.warn(e),console.warn(`JupyterLite ServiceWorker registration unexpectedly failed: ${e}`)}this._setRegistration(r),r?this._ready.resolve(void 0):this._ready.reject(void 0)}_setRegistration(e){this._registration=e,this._registrationChanged.emit(this._registration)}}}}]);