"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[431,2812],{431:(e,a,r)=>{r.r(a),r.d(a,{default:()=>d});var t=r(50715),s=r(31256);const d={id:"@jupyterlab/theme-dark-extension:plugin",description:"Adds a dark theme.",requires:[t.IThemeManager,s.ITranslator],activate:(e,a,r)=>{const t=r.load("jupyterlab");a.register({name:"JupyterLab Dark",displayName:t.__("JupyterLab Dark"),isLight:!1,themeScrollbars:!0,load:()=>a.loadCSS("@jupyterlab/theme-dark-extension/index.css"),unload:()=>Promise.resolve(void 0)})},autoStart:!0}}}]);