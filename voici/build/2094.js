"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2094],{25767:(e,t,a)=>{a.d(t,{A:()=>W});var r=a(28250),n=a(89009),o=a(41205),i=a(31256),s=a(15388),d=a(59407),l=a.n(d),c=a(50715);class u extends l().Component{constructor(e){super(e),this._handleChange=e=>{this.setState({value:e.currentTarget.value})},this._handleSubmit=e=>{e.preventDefault();const t=parseInt(this._textInput.value,10);return!isNaN(t)&&isFinite(t)&&1<=t&&t<=this.props.maxLine&&this.props.handleSubmit(t),!1},this._handleFocus=()=>{this.setState({hasFocus:!0})},this._handleBlur=()=>{this.setState({hasFocus:!1})},this._textInput=null,this.translator=e.translator||i.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.state={value:"",hasFocus:!1,textInputId:c.DOMUtils.createDomID()+"-line-number-input"}}componentDidMount(){this._textInput.focus()}render(){return l().createElement("div",{className:"jp-lineFormSearch"},l().createElement("form",{name:"lineColumnForm",onSubmit:this._handleSubmit,noValidate:!0},l().createElement("div",{className:(0,s.classes)("jp-lineFormWrapper","lm-lineForm-wrapper",this.state.hasFocus?"jp-lineFormWrapperFocusWithin":void 0)},l().createElement("input",{type:"text",id:this.state.textInputId,className:"jp-lineFormInput",onChange:this._handleChange,onFocus:this._handleFocus,onBlur:this._handleBlur,value:this.state.value,ref:e=>{this._textInput=e}}),l().createElement("div",{className:"jp-baseLineForm jp-lineFormButtonContainer"},l().createElement(s.lineFormIcon.react,{className:"jp-baseLineForm jp-lineFormButtonIcon",elementPosition:"center"}),l().createElement("input",{type:"submit",className:"jp-baseLineForm jp-lineFormButton",value:""}))),l().createElement("label",{className:"jp-lineFormCaption",htmlFor:this.state.textInputId},this._trans.__("Go to line number between 1 and %1",this.props.maxLine))))}}function m(e){const t=(e.translator||i.nullTranslator).load("jupyterlab");return l().createElement(o.pC,{onClick:e.handleClick,source:t.__("Ln %1, Col %2",e.line,e.column),title:t.__("Go to line number…"),tabIndex:0,onKeyDown:t=>{"Enter"!==t.key&&"Spacebar"!==t.key&&" "!==t.key||(t.preventDefault(),t.stopPropagation(),e.handleClick())}})}class f extends s.VDomRenderer{constructor(e){super(new f.Model),this._popup=null,this.addClass("jp-mod-highlighted"),this.translator=e||i.nullTranslator}render(){return null===this.model?null:l().createElement(m,{line:this.model.line,column:this.model.column,translator:this.translator,handleClick:()=>this._handleClick()})}_handleClick(){this._popup&&this._popup.dispose();const e=s.ReactWidget.create(l().createElement(u,{handleSubmit:e=>this._handleSubmit(e),currentLine:this.model.line,maxLine:this.model.editor.lineCount,translator:this.translator}));this._popup=(0,o.yp)({body:e,anchor:this,align:"right"})}_handleSubmit(e){this.model.editor.setCursorPosition({line:e-1,column:0}),this._popup.dispose(),this.model.editor.focus()}}!function(e){class t extends s.VDomModel{constructor(){super(...arguments),this._onSelectionChanged=()=>{const e=this._getAllState(),t=this.editor.getCursorPosition();this._line=t.line+1,this._column=t.column+1,this._triggerChange(e,this._getAllState())},this._line=1,this._column=1,this._editor=null}get editor(){return this._editor}set editor(e){var t;const a=this._editor;(null===(t=null==a?void 0:a.model)||void 0===t?void 0:t.selections)&&a.model.selections.changed.disconnect(this._onSelectionChanged);const r=this._getAllState();if(this._editor=e,this._editor){this._editor.model.selections.changed.connect(this._onSelectionChanged);const e=this._editor.getCursorPosition();this._column=e.column+1,this._line=e.line+1}else this._column=1,this._line=1;this._triggerChange(r,this._getAllState())}get line(){return this._line}get column(){return this._column}_getAllState(){return[this._line,this._column]}_triggerChange(e,t){e[0]===t[0]&&e[1]===t[1]||this.stateChanged.emit(void 0)}}e.Model=t}(f||(f={}));var h,p=a(22944),_=a(80886);!function(e){e.deleteLine="codemirror:delete-line",e.toggleBlockComment="codemirror:toggle-block-comment",e.toggleComment="codemirror:toggle-comment",e.selectNextOccurrence="codemirror:select-next-occurrence"}(h||(h={}));const g=".cm-content",v={id:"@jupyterlab/codemirror-extension:commands",description:"Registers commands acting on selected/active CodeMirror editor.",autoStart:!0,optional:[i.ITranslator],activate:(e,t)=>{const a=(t=null!=t?t:i.nullTranslator).load("jupyterlab"),r=e=>e.classList.contains(g),n=()=>{var t,a;const n=null!==(t=e.contextMenuHitTest(r))&&void 0!==t?t:null===(a=document.activeElement)||void 0===a?void 0:a.closest(g);if(n&&"cmView"in n)return n.cmView.view},o=()=>!!n();e.commands.addCommand(h.deleteLine,{label:a.__("Delete the current line"),execute:()=>{const e=n();e&&(0,p.SA)(e)},isEnabled:o}),e.commands.addCommand(h.toggleBlockComment,{label:a.__("Toggle Block Comment"),caption:a.__("Toggles block commends in languages which support it (e.g. C, JavaScript)"),execute:()=>{const e=n();e&&(0,p.NH)(e)},isEnabled:o}),e.commands.addCommand(h.toggleComment,{label:a.__("Toggle Comment"),execute:()=>{const e=n();e&&(0,p.qh)(e)},isEnabled:o}),e.commands.addCommand(h.selectNextOccurrence,{label:a.__("Select Next Occurrence"),execute:()=>{const e=n();e&&(0,_.dg)(e)},isEnabled:o})}};var y=a(86776),b=a(74173),E=a(54968),w=a(68211),C=a(88707),T=a(11601),x=a.n(T),$=a(74421),j=a.n($),k=a(41580),P=a.n(k);const S={allErrors:!0,multipleOfPrecision:8,strict:!1,verbose:!0,discriminator:!1},z=/^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,F=/^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;var I=a(46123),M=a.n(I);class A{constructor(e,t){const{additionalMetaSchemas:a,customFormats:r,ajvOptionsOverrides:n,ajvFormatOptions:o,AjvClass:i}=e;this.ajv=function(e,t,a={},r,n=x()){const o=new n({...S,...a});return r?j()(o,r):!1!==r&&j()(o),o.addFormat("data-url",F),o.addFormat("color",z),o.addKeyword(C.Rr),o.addKeyword(C.FF),Array.isArray(e)&&o.addMetaSchema(e),P()(t)&&Object.keys(t).forEach((e=>{o.addFormat(e,t[e])})),o}(a,r,n,o,i),this.localizer=t}reset(){this.ajv.removeSchema()}toErrorList(e,t=[]){return(0,C.SL)(e,t)}rawValidation(e,t){let a,r,n;e[C.K0]&&(r=this.ajv.getSchema(e[C.K0]));try{void 0===r&&(r=this.ajv.compile(e)),r(t)}catch(e){a=e}return r&&("function"==typeof this.localizer&&this.localizer(r.errors),n=r.errors||void 0,r.errors=null),{errors:n,validationError:a}}validateFormData(e,t,a,r,n){return function(e,t,a,r,n,o,i){const{validationError:s}=t;let d=function(e=[],t){return e.map((e=>{const{instancePath:a,keyword:r,params:n,schemaPath:o,parentSchema:i,...s}=e;let{message:d=""}=s,l=a.replace(/\//g,"."),c=`${l} ${d}`.trim();if("missingProperty"in n){l=l?`${l}.${n.missingProperty}`:n.missingProperty;const e=n.missingProperty,a=(0,C.$R)(M()(t,`${l.replace(/^\./,"")}`)).title;if(a)d=d.replace(e,a);else{const t=M()(i,[C.s1,e,"title"]);t&&(d=d.replace(e,t))}c=d}else{const e=(0,C.$R)(M()(t,`${l.replace(/^\./,"")}`)).title;if(e)c=`'${e}' ${d}`.trim();else{const e=null==i?void 0:i.title;e&&(c=`'${e}' ${d}`.trim())}}return{name:r,property:l,message:d,params:n,stack:c,schemaPath:o}}))}(t.errors,i);s&&(d=[...d,{stack:s.message}]),"function"==typeof o&&(d=o(d,i));let l=(0,C.MD)(d);if(s&&(l={...l,$schema:{__errors:[s.message]}}),"function"!=typeof n)return{errors:d,errorSchema:l};const c=(0,C.NV)(e,r,a,r,!0),u=n(c,(0,C.JF)(c),i),m=(0,C.fV)(u);return(0,C.k6)({errors:d,errorSchema:l},m)}(this,this.rawValidation(t,e),e,t,a,r,n)}handleSchemaUpdate(e){var t,a;const r=null!==(t=e[C.K0])&&void 0!==t?t:C.at;void 0===this.ajv.getSchema(r)?this.ajv.addSchema(e,r):(0,C.c2)(e,null===(a=this.ajv.getSchema(r))||void 0===a?void 0:a.schema)||(this.ajv.removeSchema(r),this.ajv.addSchema(e,r))}isValid(e,t,a){var r;try{this.handleSchemaUpdate(a);const n=(0,C.vh)(e),o=null!==(r=n[C.K0])&&void 0!==r?r:(0,C.$K)(n);let i;return i=this.ajv.getSchema(o),void 0===i&&(i=this.ajv.addSchema(n,o).getSchema(o)||this.ajv.compile(n)),i(t)}catch(e){return console.warn("Error encountered compiling schema:",e),!1}}}a(46343);const L=function(e={}){return new A(e,void 0)}(),R="@jupyterlab/codemirror-extension:plugin",V={id:"@jupyterlab/codemirror-extension:languages",description:"Provides the CodeMirror languages registry.",provides:b.SW,optional:[i.ITranslator],activate:(e,t)=>{const r=new b.T9;for(const e of b.T9.getDefaultLanguages(t))r.addLanguage(e);return r.addLanguage({name:"ipythongfm",mime:"text/x-ipythongfm",load:async()=>{const[e,t,n]=await Promise.all([Promise.all([a.e(7488),a.e(9162),a.e(2552),a.e(4642)]).then(a.bind(a,14642)),a.e(7572).then(a.bind(a,47572)),a.e(5637).then(a.bind(a,25637))]),o=e.markdown({base:e.markdownLanguage,codeLanguages:e=>r.findBest(e),extensions:[(0,b.vE)(y.Tg.define(n.stexMath).parser)]});return new y.Yy(o.language,[o.support,(0,b.Q0)(t.pythonLanguage)])}}),r}},D={id:"@jupyterlab/codemirror-extension:themes",description:"Provides the CodeMirror theme registry",provides:b.hc,optional:[i.ITranslator],activate:(e,t)=>{const a=new b.k8;for(const e of b.k8.getDefaultThemes(t))a.addTheme(e);return a}},O={id:"@jupyterlab/codemirror-extension:extensions",description:"Provides the CodeMirror extension factory registry.",provides:b.B,requires:[b.hc],optional:[i.ITranslator,E.ISettingRegistry,s.IFormRendererRegistry],activate:(e,t,a,r,n)=>{const o=new b.AG;for(const e of b.AG.getDefaultExtensions({themes:t,translator:a}))o.addExtension(e);if(r){const t=e=>{var t;o.baseConfiguration=null!==(t=e.get("defaultConfig").composite)&&void 0!==t?t:{}};Promise.all([r.load(R),e.restored]).then((([e])=>{t(e),e.changed.connect(t)})),null==n||n.addRenderer(`${R}.defaultConfig`,{fieldRenderer:e=>{const t=l().useMemo((()=>o.settingsSchema),[]),r={};for(const[e,a]of Object.entries(o.defaultConfiguration))void 0!==t[e]&&(r[e]=a);return l().createElement("div",{className:"jp-FormGroup-contentNormal"},l().createElement("h3",{className:"jp-FormGroup-fieldLabel jp-FormGroup-contentItem"},e.schema.title),e.schema.description&&l().createElement("div",{className:"jp-FormGroup-description"},e.schema.description),l().createElement(s.FormComponent,{schema:{title:e.schema.title,description:e.schema.description,type:"object",properties:t,additionalProperties:!1},validator:L,formData:{...r,...e.formData},formContext:{defaultFormData:r},liveValidate:!0,onChange:t=>{var a;const n={};for(const[e,o]of Object.entries(null!==(a=t.formData)&&void 0!==a?a:{})){const t=r[e];void 0!==t&&w.JSONExt.deepEqual(o,t)||(n[e]=o)}e.onChange(n)},tagName:"div",translator:null!=a?a:i.nullTranslator}))}})}return o}},N={id:"@jupyterlab/codemirror-extension:binding",description:"Register the CodeMirror extension factory binding the editor and the shared model.",autoStart:!0,requires:[b.B],activate:(e,t)=>{t.addExtension({name:"shared-model-binding",factory:e=>{var t;const a=e.model.sharedModel;return b.AG.createImmutableExtension((0,b.rX)({ytext:a.ysource,undoManager:null!==(t=a.undoManager)&&void 0!==t?t:void 0}))}})}},B={id:"@jupyterlab/codemirror-extension:services",description:"Provides the service to instantiate CodeMirror editors.",provides:n.Fe,requires:[b.SW,b.B],optional:[i.ITranslator],activate:(e,t,a,r)=>({factoryService:new b.Ez({extensions:a,languages:t,translator:null!=r?r:i.nullTranslator}),mimeTypeService:new b.mN(t)})},U={id:"@jupyterlab/codemirror-extension:line-col-status",description:"Provides the code editor cursor position model.",autoStart:!0,requires:[i.ITranslator],optional:[r.ILabShell,o.$O],provides:n.UT,activate:(e,t,a,r)=>{const n=new f(t),o=new Set;function i(e,t){Promise.all([...o].map((e=>e(t.newValue)))).then((e=>{var t;n.model.editor=null!==(t=e.filter((e=>null!==e))[0])&&void 0!==t?t:null})).catch((e=>{console.error("Get editors",e)}))}return r&&r.registerStatusItem(U.id,{priority:1,item:n,align:"right",rank:2,isActive:()=>!!n.model.editor}),a&&a.currentChanged.connect(i),{addEditorProvider:t=>{o.add(t),e.shell.currentWidget&&i(e.shell,{newValue:e.shell.currentWidget,oldValue:null})},update:()=>{i(e.shell,{oldValue:e.shell.currentWidget,newValue:e.shell.currentWidget})}}}},W=[v,V,D,N,O,B,U]},66008:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{APPLICATION_JAVASCRIPT_MIMETYPE:()=>APPLICATION_JAVASCRIPT_MIMETYPE,ExperimentalRenderedJavascript:()=>ExperimentalRenderedJavascript,TEXT_JAVASCRIPT_MIMETYPE:()=>TEXT_JAVASCRIPT_MIMETYPE,default:()=>__WEBPACK_DEFAULT_EXPORT__,rendererFactory:()=>rendererFactory});var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15666),_jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0__);const TEXT_JAVASCRIPT_MIMETYPE="text/javascript",APPLICATION_JAVASCRIPT_MIMETYPE="application/javascript";function evalInContext(code,element,document,window){return eval(code)}class ExperimentalRenderedJavascript extends _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0__.RenderedJavaScript{render(e){const t=this.translator.load("jupyterlab"),a=()=>{try{const t=e.data[this.mimeType];return t&&evalInContext(t,this.node,document,window),Promise.resolve()}catch(e){return Promise.reject(e)}};if(!e.trusted){const e=document.createElement("pre");e.textContent=t.__("Are you sure that you want to run arbitrary Javascript within your JupyterLab session?");const r=document.createElement("button");return r.textContent=t.__("Run"),this.node.appendChild(e),this.node.appendChild(r),r.onclick=e=>{this.node.textContent="",a()},Promise.resolve()}return a()}}const rendererFactory={safe:!1,mimeTypes:[TEXT_JAVASCRIPT_MIMETYPE,APPLICATION_JAVASCRIPT_MIMETYPE],createRenderer:e=>new ExperimentalRenderedJavascript(e)},extension={id:"@jupyterlab/javascript-extension:factory",description:"Adds renderer for JavaScript content.",rendererFactory,rank:0,dataType:"string"},__WEBPACK_DEFAULT_EXPORT__=extension},44222:(e,t,a)=>{a.r(t),a.d(t,{createMarkdownParser:()=>l,default:()=>c});var r=a(68211),n=a(28748),o=a(74173),i=a(15666);new r.Token("@jupyterlab/mermaid:IMermaidManager","a manager for rendering mermaid text-based diagrams");const s=new r.Token("@jupyterlab/mermaid:IMermaidMarkdown","a manager for rendering mermaid text-based diagrams in markdown fenced code blocks"),d="```~~~";function l(e,t){return{render:a=>u.render(a,e,t)}}const c={id:"@jupyterlab/markedparser-extension:plugin",description:"Provides the Markdown parser.",autoStart:!0,provides:i.IMarkdownParser,requires:[o.SW],optional:[s],activate:(e,t,a)=>l(t,{blocks:a?[a]:[]})};var u;!function(e){let t=null,o=null,i=[],s=null,l={},c=new n.LruCache;async function u(e){if(o)return o;if(t)return await t.promise;i=(null==e?void 0:e.blocks)||[],i=i.sort(((e,t)=>{var a,r;return(null!==(a=e.rank)&&void 0!==a?a:1/0)-(null!==(r=t.rank)&&void 0!==r?r:1/0)})),t=new r.PromiseDelegate;const[{marked:n,Renderer:s},d]=await Promise.all([a.e(5321).then(a.bind(a,95321)),m()]);for(const e of d)n.use(e);return l={async:!0,gfm:!0,walkTokens:h,renderer:f(s)},o=n,t.resolve(o),o}async function m(){return Promise.all([(async()=>(await a.e(8530).then(a.bind(a,78530))).gfmHeadingId())(),(async()=>(await a.e(6818).then(a.bind(a,56818))).mangle())()])}function f(e){const t=new e,a=t.code;return t.code=(e,r)=>{for(const t of i)if(t.languages.includes(r)){const a=t.render(e);if(null!=a)return a}const n=`${r}${d}${e}${d}`,o=c.get(n);return null!=o?o:a.call(t,e,r)},t}async function h(e){if("code"===e.type){if(e.lang)for(const t of i)if(t.languages.includes(e.lang))return void await t.walk(e.text);await async function(e){const{lang:t,text:a}=e;if(!t||!s)return;const r=`${t}${d}${a}${d}`;if(c.get(r))return;const n=document.createElement("div");try{await s.highlight(a,s.findBest(t),n);const e=`<pre><code class="language-${t}">${n.innerHTML}</code></pre>`;c.set(r,e)}catch(e){console.error(`Failed to highlight ${t} code`,e)}finally{n.remove()}}(e)}}e.render=async function(e,t,a){return s=t,o||(o=await u(a)),o(e,l)},e.initializeMarked=u}(u||(u={}))},41205:(e,t,a)=>{a.d(t,{NZ:()=>o,$O:()=>f,a3:()=>m,pC:()=>u,yp:()=>l});var r=a(59407),n=a.n(r);function o(e){const{spacing:t,children:a,className:n,...o}=e,i=r.Children.count(a);return r.createElement("div",{className:`jp-StatusBar-GroupItem ${n||""}`,...o},r.Children.map(a,((e,a)=>0===a?r.createElement("div",{style:{marginRight:`${t}px`}},e):a===i-1?r.createElement("div",{style:{marginLeft:`${t}px`}},e):r.createElement("div",{style:{margin:`0px ${t}px`}},e))))}var i,s=a(15388),d=a(80281);function l(e){const t=new c(e);return e.startHidden||t.launch(),t}class c extends d.Widget{constructor(e){super(),this._body=e.body,this._body.addClass("jp-StatusBar-HoverItem"),this._anchor=e.anchor,this._align=e.align,e.hasDynamicSize&&(this._observer=new ResizeObserver((()=>{this.update()}))),(this.layout=new d.PanelLayout).addWidget(e.body),this._body.node.addEventListener("resize",(()=>{this.update()}))}launch(){this._setGeometry(),d.Widget.attach(this,document.body),this.update(),this._anchor.addClass("jp-mod-clicked"),this._anchor.removeClass("jp-mod-highlight")}onUpdateRequest(e){this._setGeometry(),super.onUpdateRequest(e)}onAfterAttach(e){var t;document.addEventListener("click",this,!1),this.node.addEventListener("keydown",this,!1),window.addEventListener("resize",this,!1),null===(t=this._observer)||void 0===t||t.observe(this._body.node)}onBeforeDetach(e){var t;null===(t=this._observer)||void 0===t||t.disconnect(),document.removeEventListener("click",this,!1),this.node.removeEventListener("keydown",this,!1),window.removeEventListener("resize",this,!1)}onResize(){this.update()}dispose(){var e;null===(e=this._observer)||void 0===e||e.disconnect(),super.dispose(),this._anchor.removeClass("jp-mod-clicked"),this._anchor.addClass("jp-mod-highlight")}handleEvent(e){switch(e.type){case"keydown":this._evtKeydown(e);break;case"click":this._evtClick(e);break;case"resize":this.onResize()}}_evtClick(e){!e.target||this._body.node.contains(e.target)||this._anchor.node.contains(e.target)||this.dispose()}_evtKeydown(e){27===e.keyCode&&(e.stopPropagation(),e.preventDefault(),this.dispose())}_setGeometry(){let e=0;const t=this._anchor.node.getBoundingClientRect(),a=this._body.node.getBoundingClientRect();"right"===this._align&&(e=-(a.width-t.width));const r=window.getComputedStyle(this._body.node);s.HoverBox.setGeometry({anchor:t,host:document.body,maxHeight:500,minHeight:20,node:this._body.node,offset:{horizontal:e},privilege:"forceAbove",style:r})}}function u(e){const{title:t,source:a,className:n,...o}=e;return r.createElement("span",{className:`jp-StatusBar-TextItem ${n}`,title:t,...o},a)}function m(e){return n().createElement("div",{className:"jp-Statusbar-ProgressCircle",role:"progressbar","aria-label":e.label||"Unlabelled progress circle","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.progress},n().createElement("svg",{viewBox:"0 0 250 250"},n().createElement("circle",{cx:"125",cy:"125",r:"104",stroke:"var(--jp-inverse-layout-color3)",strokeWidth:"20",fill:"none"}),n().createElement("path",{className:"jp-Statusbar-ProgressCirclePath",transform:"translate(125,125) scale(.9)",d:(e=>{const t=Math.max(3.6*e,.1),a=t*Math.PI/180,r=104*Math.sin(a),n=-104*Math.cos(a);return"M 0 0 v -104 A 104 104 1 "+(t<180?1:0)+" 0 "+r.toFixed(4)+" "+n.toFixed(4)+" z"})(e.progress),fill:"var(--jp-inverse-layout-color3)"})))}a(45945),a(49711),d.Widget,function(e){e.statusItemDefaults={align:"left",rank:0,priority:0,isActive:()=>!0,activeStateChanged:void 0}}(i||(i={}));const f=new(a(68211).Token)("@jupyterlab/statusbar:IStatusBar","A service for the status bar on the application. Use this if you want to add new status bar items.")},60457:(e,t,a)=>{a.r(t),a.d(t,{RenderedVega:()=>d,VEGALITE3_MIME_TYPE:()=>o,VEGALITE4_MIME_TYPE:()=>i,VEGALITE5_MIME_TYPE:()=>s,VEGA_MIME_TYPE:()=>n,default:()=>c,rendererFactory:()=>l});var r=a(80281);const n="application/vnd.vega.v5+json",o="application/vnd.vegalite.v3+json",i="application/vnd.vegalite.v4+json",s="application/vnd.vegalite.v5+json";class d extends r.Widget{constructor(e){super(),this._mimeType=e.mimeType,this._resolver=e.resolver,this.addClass("jp-RenderedVegaCommon5"),this.addClass(this._mimeType===n?"jp-RenderedVega5":"jp-RenderedVegaLite")}async renderModel(e){const t=e.data[this._mimeType];if(void 0===t)return;const a=e.metadata[this._mimeType],r=a&&a.embed_options?a.embed_options:{};"false"===document.body.dataset.jpThemeLight&&(r.theme="dark");const o=this._mimeType===n?"vega":"vega-lite",i=null!=u.vega?u.vega:await u.ensureVega(),s=document.createElement("div");this.node.textContent="",this.node.appendChild(s),this._result&&this._result.finalize();const d=i.vega.loader({http:{credentials:"same-origin"}});if(this._result=await i.default(s,t,{actions:!0,defaultStyle:!0,...r,mode:o,loader:{...d,sanitize:async(e,t)=>{const a=this._resolver;if((null==a?void 0:a.isLocal)&&a.isLocal(e)){const t=await a.resolveUrl(e);e=await a.getDownloadUrl(t)}return d.sanitize(e,t)}}}),e.data["image/png"])return;const l=await this._result.view.toImageURL("png","number"==typeof r.scaleFactor?r.scaleFactor:r.scaleFactor?r.scaleFactor.png:r.scaleFactor);e.setData({data:{...e.data,"image/png":l.split(",")[1]}})}dispose(){this._result&&this._result.finalize(),super.dispose()}}const l={safe:!0,mimeTypes:[n,o,i,s],createRenderer:e=>new d(e)},c={id:"@jupyterlab/vega5-extension:factory",description:"Provides a renderer for Vega 5 and Vega-Lite 3 to 5 content.",rendererFactory:l,rank:57,dataType:"json",documentWidgetFactoryOptions:[{name:"Vega5",primaryFileType:"vega5",fileTypes:["vega5","json"],defaultFor:["vega5"]},{name:"Vega-Lite5",primaryFileType:"vega-lite5",fileTypes:["vega-lite3","vega-lite4","vega-lite5","json"],defaultFor:["vega-lite3","vega-lite4","vega-lite5"]}],fileTypes:[{mimeTypes:[n],name:"vega5",extensions:[".vg",".vg.json",".vega"],icon:"ui-components:vega"},{mimeTypes:[s],name:"vega-lite5",extensions:[".vl",".vl.json",".vegalite"],icon:"ui-components:vega"},{mimeTypes:[i],name:"vega-lite4",extensions:[],icon:"ui-components:vega"},{mimeTypes:[o],name:"vega-lite3",extensions:[],icon:"ui-components:vega"}]};var u;!function(e){e.ensureVega=function(){return e.vegaReady||(e.vegaReady=Promise.all([a.e(981),a.e(1449)]).then(a.bind(a,31449))),e.vegaReady}}(u||(u={}))},24598:(e,t,a)=>{a(45945),a(66775),a(68211),a(17395),a(49711),a(72363),a(38047),a(96975),a(60731),a(71277),a(76231),a(30427),a(74299),a(80281),a(57867)},65733:(e,t)=>{function a(e,t){return{validate:e,compare:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.formatNames=t.fastFormats=t.fullFormats=void 0,t.fullFormats={date:a(o,i),time:a(d,l),"date-time":a((function(e){const t=e.split(c);return 2===t.length&&o(t[0])&&d(t[1],!0)}),u),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:function(e){return m.test(e)&&f.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:function(e){if(v.test(e))return!1;try{return new RegExp(e),!0}catch(e){return!1}},uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:function(e){return h.lastIndex=0,h.test(e)},int32:{type:"number",validate:function(e){return Number.isInteger(e)&&e<=_&&e>=p}},int64:{type:"number",validate:function(e){return Number.isInteger(e)}},float:{type:"number",validate:g},double:{type:"number",validate:g},password:!0,binary:!0},t.fastFormats={...t.fullFormats,date:a(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,i),time:a(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,l),"date-time":a(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,u),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},t.formatNames=Object.keys(t.fullFormats);const r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,n=[0,31,28,31,30,31,30,31,31,30,31,30,31];function o(e){const t=r.exec(e);if(!t)return!1;const a=+t[1],o=+t[2],i=+t[3];return o>=1&&o<=12&&i>=1&&i<=(2===o&&function(e){return e%4==0&&(e%100!=0||e%400==0)}(a)?29:n[o])}function i(e,t){if(e&&t)return e>t?1:e<t?-1:0}const s=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;function d(e,t){const a=s.exec(e);if(!a)return!1;const r=+a[1],n=+a[2],o=+a[3],i=a[5];return(r<=23&&n<=59&&o<=59||23===r&&59===n&&60===o)&&(!t||""!==i)}function l(e,t){if(!e||!t)return;const a=s.exec(e),r=s.exec(t);return a&&r?(e=a[1]+a[2]+a[3]+(a[4]||""))>(t=r[1]+r[2]+r[3]+(r[4]||""))?1:e<t?-1:0:void 0}const c=/t|\s/i;function u(e,t){if(!e||!t)return;const[a,r]=e.split(c),[n,o]=t.split(c),s=i(a,n);return void 0!==s?s||l(r,o):void 0}const m=/\/|:/,f=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,h=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,p=-(2**31),_=2**31-1;function g(){return!0}const v=/[^\\]\\Z/},74421:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(65733),n=a(31038),o=a(17898),i=new o.Name("fullFormats"),s=new o.Name("fastFormats"),d=(e,t={keywords:!0})=>{if(Array.isArray(t))return l(e,t,r.fullFormats,i),e;const[a,o]="fast"===t.mode?[r.fastFormats,s]:[r.fullFormats,i];return l(e,t.formats||r.formatNames,a,o),t.keywords&&n.default(e),e};function l(e,t,a,r){var n,i;null!==(n=(i=e.opts.code).formats)&&void 0!==n||(i.formats=o._`require("ajv-formats/dist/formats").${r}`);for(const r of t)e.addFormat(r,a[r])}d.get=(e,t="full")=>{const a=("fast"===t?r.fastFormats:r.fullFormats)[e];if(!a)throw new Error(`Unknown format "${e}"`);return a},e.exports=t=d,Object.defineProperty(t,"__esModule",{value:!0}),t.default=d},31038:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatLimitDefinition=void 0;const r=a(11601),n=a(17898),o=n.operators,i={formatMaximum:{okStr:"<=",ok:o.LTE,fail:o.GT},formatMinimum:{okStr:">=",ok:o.GTE,fail:o.LT},formatExclusiveMaximum:{okStr:"<",ok:o.LT,fail:o.GTE},formatExclusiveMinimum:{okStr:">",ok:o.GT,fail:o.LTE}},s={message:({keyword:e,schemaCode:t})=>n.str`should be ${i[e].okStr} ${t}`,params:({keyword:e,schemaCode:t})=>n._`{comparison: ${i[e].okStr}, limit: ${t}}`};t.formatLimitDefinition={keyword:Object.keys(i),type:"string",schemaType:"string",$data:!0,error:s,code(e){const{gen:t,data:a,schemaCode:o,keyword:s,it:d}=e,{opts:l,self:c}=d;if(!l.validateFormats)return;const u=new r.KeywordCxt(d,c.RULES.all.format.definition,"format");function m(e){return n._`${e}.compare(${a}, ${o}) ${i[s].fail} 0`}u.$data?function(){const a=t.scopeValue("formats",{ref:c.formats,code:l.code.formats}),r=t.const("fmt",n._`${a}[${u.schemaCode}]`);e.fail$data(n.or(n._`typeof ${r} != "object"`,n._`${r} instanceof RegExp`,n._`typeof ${r}.compare != "function"`,m(r)))}():function(){const a=u.schema,r=c.formats[a];if(!r||!0===r)return;if("object"!=typeof r||r instanceof RegExp||"function"!=typeof r.compare)throw new Error(`"${s}": format "${a}" does not define "compare" function`);const o=t.scopeValue("formats",{key:a,ref:r,code:l.code.formats?n._`${l.code.formats}${n.getProperty(a)}`:void 0});e.fail$data(m(o))}()},dependencies:["format"]},t.default=e=>(e.addKeyword(t.formatLimitDefinition),e)}}]);