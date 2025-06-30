import{a as St,b as xi,c as Tn,e as xn,h as In,i as On,n as rt,o as jt,p as Ln}from"./chunk-PZZ6QWDK.js";import{Aa as P,Ab as nt,Bb as ot,Ca as je,Ea as se,Eb as ae,F as Ci,Fa as S,Gb as le,H as Si,Ha as vn,Hb as ce,Ib as Ai,Ja as Di,K as Pe,Kb as An,M as Ot,Ma as $,Mb as ze,N as b,Na as I,Nb as Ge,O as x,Oa as E,Pa as _n,Q as H,Qa as y,S as Z,Sa as Lt,T as g,U as Ei,Ub as w,Wb as Ti,Ya as Cn,Z as W,_a as Sn,aa as Be,ba as m,bb as U,cb as L,da as wi,db as En,eb as z,f as ct,fb as wn,g as mn,gb as Q,ha as j,i as bn,ia as He,j as ne,jc as Ht,ka as mt,l as Pt,la as bt,ma as Y,n as oe,nb as yt,ob as vt,oc as C,pb as ut,pc as Ct,qa as Bt,qb as We,qc as dt,r as vi,rb as Ue,rc as pt,s as _i,sb as Dn,sc as ue,t as ke,w as yn,yb as _t,z as re,zb as it}from"./chunk-H3HIGMDG.js";import{a as f,b as et}from"./chunk-C6Q5SG76.js";var Wt=class{},Mn=(()=>{class e extends Wt{getTranslation(t){return ne({})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),pe=class{},Fn=(()=>{class e{handle(t){return t.key}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function qe(e,n){if(e===n)return!0;if(e===null||n===null)return!1;if(e!==e&&n!==n)return!0;let t=typeof e,i=typeof n,o,r,s;if(t==i&&t=="object")if(Array.isArray(e)){if(!Array.isArray(n))return!1;if((o=e.length)==n.length){for(r=0;r<o;r++)if(!qe(e[r],n[r]))return!1;return!0}}else{if(Array.isArray(n))return!1;s=Object.create(null);for(r in e){if(!qe(e[r],n[r]))return!1;s[r]=!0}for(r in n)if(!(r in s)&&typeof n[r]<"u")return!1;return!0}return!1}function Et(e){return typeof e<"u"&&e!==null}function ge(e){return Ke(e)&&!Ni(e)&&e!==null}function Ke(e){return typeof e=="object"}function Ni(e){return Array.isArray(e)}function $i(e){return typeof e=="string"}function vr(e){return typeof e=="function"}function Ii(e,n){let t=Object.assign({},e);return Ke(e)?(Ke(e)&&Ke(n)&&Object.keys(n).forEach(i=>{ge(n[i])?i in e?t[i]=Ii(e[i],n[i]):Object.assign(t,{[i]:n[i]}):Object.assign(t,{[i]:n[i]})}),t):Ii({},n)}function Oi(e,n){let t=n.split(".");n="";do n+=t.shift(),Et(e)&&Et(e[n])&&(ge(e[n])||Ni(e[n])||!t.length)?(e=e[n],n=""):t.length?n+=".":e=void 0;while(t.length);return e}function _r(e,n,t){let i=n.split("."),o=e;for(let r=0;r<i.length;r++){let s=i[r];r===i.length-1?o[s]=t:((!o[s]||!ge(o[s]))&&(o[s]={}),o=o[s])}}var Ut=class{},Vn=(()=>{class e extends Ut{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,i){if($i(t))return this.interpolateString(t,i);if(vr(t))return this.interpolateFunction(t,i)}interpolateFunction(t,i){return t(i)}interpolateString(t,i){return i?t.replace(this.templateMatcher,(o,r)=>{let s=Oi(i,r);return Et(s)?s:o}):t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),zt=class{},Nn=(()=>{class e extends zt{compile(t,i){return t}compileTranslations(t,i){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),he=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new j;onLangChange=new j;onDefaultLangChange=new j},Li=new H("ISOLATE_TRANSLATE_SERVICE"),Mi=new H("USE_DEFAULT_LANG"),Fi=new H("DEFAULT_LANGUAGE"),Vi=new H("USE_EXTEND"),de=e=>Pt(e)?e:ne(e),fe=(()=>{class e{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(t){this.store.defaultLang=t}get currentLang(){return this.store.currentLang}set currentLang(t){this.store.currentLang=t}get langs(){return this.store.langs}set langs(t){this.store.langs=t}get translations(){return this.store.translations}set translations(t){this.store.translations=t}constructor(t,i,o,r,s,a=!0,l=!1,c=!1,u){this.store=t,this.currentLoader=i,this.compiler=o,this.parser=r,this.missingTranslationHandler=s,this.useDefaultLang=a,this.extend=c,l&&(this.store=new he),u&&this.setDefaultLang(u)}setDefaultLang(t){if(t===this.defaultLang)return;let i=this.retrieveTranslations(t);typeof i<"u"?(this.defaultLang==null&&(this.defaultLang=t),i.pipe(re(1)).subscribe(()=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(this.lastUseLanguage=t,t===this.currentLang)return ne(this.translations[t]);this.currentLang||(this.currentLang=t);let i=this.retrieveTranslations(t);return Pt(i)?(i.pipe(re(1)).subscribe(()=>{this.changeLang(t)}),i):(this.changeLang(t),ne(this.translations[t]))}changeLang(t){t===this.lastUseLanguage&&(this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t))}retrieveTranslations(t){if(typeof this.translations[t]>"u"||this.extend)return this._translationRequests[t]=this._translationRequests[t]||this.loadAndCompileTranslations(t),this._translationRequests[t]}getTranslation(t){return this.loadAndCompileTranslations(t)}loadAndCompileTranslations(t){this.pending=!0;let i=this.currentLoader.getTranslation(t).pipe(Ci(1),re(1));return this.loadingTranslations=i.pipe(oe(o=>this.compiler.compileTranslations(o,t)),Ci(1),re(1)),this.loadingTranslations.subscribe({next:o=>{this.translations[t]=this.extend&&this.translations[t]?f(f({},o),this.translations[t]):o,this.updateLangs(),this.pending=!1},error:o=>{this.pending=!1}}),i}setTranslation(t,i,o=!1){let r=this.compiler.compileTranslations(i,t);(o||this.extend)&&this.translations[t]?this.translations[t]=Ii(this.translations[t],r):this.translations[t]=r,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){let i=t.filter(o=>!this.langs.includes(o));i.length>0&&(this.langs=[...this.langs,...i])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(t,i,o){let r;if(t&&(r=this.runInterpolation(Oi(t,i),o)),r===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.runInterpolation(Oi(this.translations[this.defaultLang],i),o)),r===void 0){let s={key:i,translateService:this};typeof o<"u"&&(s.interpolateParams=o),r=this.missingTranslationHandler.handle(s)}return r!==void 0?r:i}runInterpolation(t,i){if(Ni(t))return t.map(o=>this.runInterpolation(o,i));if(ge(t)){let o={};for(let r in t){let s=this.runInterpolation(t[r],i);s!==void 0&&(o[r]=s)}return o}else return this.parser.interpolate(t,i)}getParsedResult(t,i,o){if(i instanceof Array){let r={},s=!1;for(let l of i)r[l]=this.getParsedResultForKey(t,l,o),s=s||Pt(r[l]);if(!s)return r;let a=i.map(l=>de(r[l]));return ke(a).pipe(oe(l=>{let c={};return l.forEach((u,d)=>{c[i[d]]=u}),c}))}return this.getParsedResultForKey(t,i,o)}get(t,i){if(!Et(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(yn(o=>de(this.getParsedResult(o,t,i)))):de(this.getParsedResult(this.translations[this.currentLang],t,i))}getStreamOnTranslationChange(t,i){if(!Et(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return vi(_i(()=>this.get(t,i)),this.onTranslationChange.pipe(Si(o=>{let r=this.getParsedResult(o.translations,t,i);return de(r)})))}stream(t,i){if(!Et(t)||!t.length)throw new Error('Parameter "key" required');return vi(_i(()=>this.get(t,i)),this.onLangChange.pipe(Si(o=>{let r=this.getParsedResult(o.translations,t,i);return de(r)})))}instant(t,i){if(!Et(t)||t.length===0)throw new Error('Parameter "key" is required and cannot be empty');let o=this.getParsedResult(this.translations[this.currentLang],t,i);return Pt(o)?Array.isArray(t)?t.reduce((r,s)=>(r[s]=s,r),{}):t:o}set(t,i,o=this.currentLang){_r(this.translations[o],t,$i(i)?this.compiler.compile(i,o):this.compiler.compileTranslations(i,o)),this.updateLangs(),this.onTranslationChange.emit({lang:o,translations:this.translations[o]})}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.loadAndCompileTranslations(t)}resetLang(t){delete this._translationRequests[t],delete this.translations[t]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let t=this.getBrowserCultureLang();return t?t.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(i){return new(i||e)(Z(he),Z(Wt),Z(zt),Z(Ut),Z(pe),Z(Mi),Z(Li),Z(Vi),Z(Fi))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var xa=(()=>{class e{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(t,i){this.translate=t,this._ref=i}updateValue(t,i,o){let r=s=>{this.value=s!==void 0?s:t,this.lastKey=t,this._ref.markForCheck()};if(o){let s=this.translate.getParsedResult(o,t,i);Pt(s)?s.subscribe(r):r(s)}this.translate.get(t,i).subscribe(r)}transform(t,...i){if(!t||!t.length)return t;if(qe(t,this.lastKey)&&qe(i,this.lastParams))return this.value;let o;if(Et(i[0])&&i.length)if($i(i[0])&&i[0].length){let r=i[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{o=JSON.parse(r)}catch(s){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${i[0]}`)}}else ge(i[0])&&(o=i[0]);return this.lastKey=t,this.lastParams=i,this.updateValue(t,o),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{this.lastKey&&r.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,o,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,o,r.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,o))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(i){return new(i||e)(S(fe,16),S(Ht,16))};static \u0275pipe=_n({name:"translate",type:e,pure:!1});static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Ia=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[t.loader||{provide:Wt,useClass:Mn},t.compiler||{provide:zt,useClass:Nn},t.parser||{provide:Ut,useClass:Vn},t.missingTranslationHandler||{provide:pe,useClass:Fn},he,{provide:Li,useValue:t.isolate},{provide:Mi,useValue:t.useDefaultLang},{provide:Vi,useValue:t.extend},{provide:Fi,useValue:t.defaultLanguage},fe]}}static forChild(t={}){return{ngModule:e,providers:[t.loader||{provide:Wt,useClass:Mn},t.compiler||{provide:zt,useClass:Nn},t.parser||{provide:Ut,useClass:Vn},t.missingTranslationHandler||{provide:pe,useClass:Fn},{provide:Li,useValue:t.isolate},{provide:Mi,useValue:t.useDefaultLang},{provide:Vi,useValue:t.extend},{provide:Fi,useValue:t.defaultLanguage},fe]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({})}return e})();var $n=class e{constructor(n){this.translate=n;this.translate.setDefaultLang(e.lan)}static lan="es";changeLanguage$=new mn(e.lan);changeLanguage(n){e.lan=n,this.translate.use(n),this.changeLanguage$.next(n)}static \u0275fac=function(t){return new(t||e)(Z(fe))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};function Mt(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}function wt(e,n){if(e&&n){let t=i=>{Mt(e,i)||(e.classList?e.classList.add(i):e.className+=" "+i)};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function Sr(){return window.innerWidth-document.documentElement.offsetWidth}function Gt(e){for(let n of document?.styleSheets)try{for(let t of n?.cssRules)for(let i of t?.style)if(e.test(i))return{name:i,value:t.style.getPropertyValue(i).trim()}}catch{}return null}function Na(e="p-overflow-hidden"){let n=Gt(/-scrollbar-width$/);n?.name&&document.body.style.setProperty(n.name,Sr()+"px"),wt(document.body,e)}function Ft(e,n){if(e&&n){let t=i=>{e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function $a(e="p-overflow-hidden"){let n=Gt(/-scrollbar-width$/);n?.name&&document.body.style.removeProperty(n.name),Ft(document.body,e)}function kn(e){let n={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),n}function me(){let e=window,n=document,t=n.documentElement,i=n.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||i.clientWidth,r=e.innerHeight||t.clientHeight||i.clientHeight;return{width:o,height:r}}function ki(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function Pi(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Ra(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:kn(e),l=a.height,c=a.width,u=n.offsetHeight,d=n.offsetWidth,p=n.getBoundingClientRect(),h=Pi(),_=ki(),D=me(),V,B,N="top";p.top+u+l>D.height?(V=p.top+h-l,N="bottom",V<0&&(V=h)):V=u+p.top+h,p.left+c>D.width?B=Math.max(0,p.left+_+d-c):B=p.left+_,e.style.top=V+"px",e.style.left=B+"px",e.style.transformOrigin=N,t&&(e.style.marginTop=N==="bottom"?`calc(${(o=(i=Gt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=Gt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Er(e,n){e&&(typeof n=="string"?e.style.cssText=n:Object.entries(n||{}).forEach(([t,i])=>e.style[t]=i))}function st(e,n){if(e instanceof HTMLElement){let t=e.offsetWidth;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return t}return 0}function ka(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:kn(e),l=n.offsetHeight,c=n.getBoundingClientRect(),u=me(),d,p,h="top";c.top+l+a.height>u.height?(d=-1*a.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,e.style.top=d+"px",e.style.left=p+"px",e.style.transformOrigin=h,t&&(e.style.marginTop=h==="bottom"?`calc(${(o=(i=Gt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=Gt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function be(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function Bi(e){let n=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?n=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?n=e.el.nativeElement:n=e.el)),be(n)?n:void 0}function Hi(e,n){let t=Bi(e);if(t)t.appendChild(n);else throw new Error("Cannot append "+n+" to "+e)}var Ri=void 0;function Rn(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(Ri!=null)return Ri;let n=document.createElement("div");Er(n,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(n);let t=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),Ri=t,t}}function Ze(e,n={}){if(be(e)){let t=(i,o)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[i]?[(s=e?.$attrs)==null?void 0:s[i]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?t(i,c):Object.entries(c).map(([p,h])=>i==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([i,o])=>{if(o!=null){let r=i.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?Ze(e,o):(o=i==="class"?[...new Set(t("class",o))].join(" ").trim():i==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=o),e.setAttribute(i,o))}})}}function Pa(e,n={},...t){if(e){let i=document.createElement(e);return Ze(i,n),i.append(...t),i}}function Pn(e,n){if(e){e.style.opacity="0";let t=+new Date,i="0",o=function(){i=`${+e.style.opacity+(new Date().getTime()-t)/n}`,e.style.opacity=i,t=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function wr(e,n){return be(e)?Array.from(e.querySelectorAll(n)):[]}function ft(e,n){return be(e)?e.matches(n)?e:e.querySelector(n):null}function Ba(e,n){e&&document.activeElement!==e&&e.focus(n)}function Bn(e,n=""){let t=wr(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`),i=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&i.push(o);return i}function Ha(e,n){let t=Bn(e,n);return t.length>0?t[0]:null}function ji(e){if(e){let n=e.offsetHeight,t=getComputedStyle(e);return n-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),n}return 0}function Dr(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0}function Ar(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0}function Hn(e){if(e){let n=e.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n}return null}function ja(e){var n;if(e){let t=(n=Hn(e))==null?void 0:n.childNodes,i=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return i;t[o].nodeType===1&&i++}}return-1}function Wa(e,n){let t=Bn(e,n);return t.length>0?t[t.length-1]:null}function Wi(e){if(e){let n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function X(e,n){if(e){let t=e.offsetHeight;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return t}return 0}function Ua(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Tr(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Hn(e))}function za(e,n){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return(t=n?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let o=Bi((r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e);return o?.nodeType===9||Tr(o)?o:void 0}}function Ui(e){if(e){let n=e.offsetWidth,t=getComputedStyle(e);return n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),n}return 0}function xr(e){return!!(e&&e.offsetParent!=null)}function Ga(e){return!xr(e)}function Ka(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function qa(e,n){var t,i;if(e){let o=e.parentElement,r=Wi(o),s=me(),a=e.offsetParent?e.offsetWidth:Ar(e),l=e.offsetParent?e.offsetHeight:Dr(e),c=st((t=o?.children)==null?void 0:t[0]),u=X((i=o?.children)==null?void 0:i[0]),d="",p="";r.left+c+a>s.width-Rn()?r.left<a?n%2===1?d=r.left?"-"+r.left+"px":"100%":n%2===0&&(d=s.width-a-Rn()+"px"):d="-100%":d="100%",e.getBoundingClientRect().top+u+l>s.height?p=`-${l-u}px`:p="0px",e.style.top=p,e.style.left=d}}function jn(e){var n;e&&("remove"in Element.prototype?e.remove():(n=e.parentNode)==null||n.removeChild(e))}function Wn(e,n){let t=Bi(e);if(t)t.removeChild(n);else throw new Error("Cannot remove "+n+" from "+e)}function Za(e,n){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=t?parseFloat(t):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=e.getBoundingClientRect(),l=n.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-r,c=e.scrollTop,u=e.clientHeight,d=X(n);l<0?e.scrollTop=c+l:l+d>u&&(e.scrollTop=c+l-u+d)}function Un(e,n="",t){be(e)&&t!==null&&t!==void 0&&e.setAttribute(n,t)}function zn(){let e=new Map;return{on(n,t){let i=e.get(n);return i?i.push(t):i=[t],e.set(n,i),this},off(n,t){let i=e.get(n);return i&&i.splice(i.indexOf(t)>>>0,1),this},emit(n,t){let i=e.get(n);i&&i.slice().map(o=>{o(t)})},clear(){e.clear()}}}var Ir=Object.defineProperty,Gn=Object.getOwnPropertySymbols,Or=Object.prototype.hasOwnProperty,Lr=Object.prototype.propertyIsEnumerable,Kn=(e,n,t)=>n in e?Ir(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Mr=(e,n)=>{for(var t in n||(n={}))Or.call(n,t)&&Kn(e,t,n[t]);if(Gn)for(var t of Gn(n))Lr.call(n,t)&&Kn(e,t,n[t]);return e};function R(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function zi(e,n,t=new WeakSet){if(e===n)return!0;if(!e||!n||typeof e!="object"||typeof n!="object"||t.has(e)||t.has(n))return!1;t.add(e).add(n);let i=Array.isArray(e),o=Array.isArray(n),r,s,a;if(i&&o){if(s=e.length,s!=n.length)return!1;for(r=s;r--!==0;)if(!zi(e[r],n[r],t))return!1;return!0}if(i!=o)return!1;let l=e instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==n.getTime();let u=e instanceof RegExp,d=n instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==n.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(n).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!zi(e[a],n[a],t))return!1;return!0}function Fr(e,n){return zi(e,n)}function Zn(e){return!!(e&&e.constructor&&e.call&&e.apply)}function A(e){return!R(e)}function Ye(e,n){if(!e||!n)return null;try{let t=e[n];if(A(t))return t}catch{}if(Object.keys(e).length){if(Zn(n))return n(e);if(n.indexOf(".")===-1)return e[n];{let t=n.split("."),i=e;for(let o=0,r=t.length;o<r;++o){if(i==null)return null;i=i[t[o]]}return i}}return null}function Gi(e,n,t){return t?Ye(e,t)===Ye(n,t):Fr(e,n)}function Ja(e,n){if(e!=null&&n&&n.length){for(let t of n)if(Gi(e,t))return!0}return!1}function tl(e,n){let t=-1;if(A(e))try{t=e.findLastIndex(n)}catch{t=e.lastIndexOf([...e].reverse().find(n))}return t}function at(e,n=!0){return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)}function J(e,...n){return Zn(e)?e(...n):e}function Dt(e,n=!0){return typeof e=="string"&&(n||e!=="")}function qn(e){return Dt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Qe(e,n="",t={}){let i=qn(n).split("."),o=i.shift();return o?at(e)?Qe(J(e[Object.keys(e).find(r=>qn(r)===o)||""],t),i.join("."),t):void 0:J(e,t)}function Xe(e,n=!0){return Array.isArray(e)&&(n||e.length!==0)}function el(e){return e instanceof Date&&e.constructor===Date}function Yn(e){return A(e)&&!isNaN(e)}function il(e=""){return A(e)&&e.length===1&&!!e.match(/\S| /)}function G(e,n){if(n){let t=n.test(e);return n.lastIndex=0,t}return!1}function Vt(...e){let n=(t={},i={})=>{let o=Mr({},t);return Object.keys(i).forEach(r=>{at(i[r])&&r in t&&at(t[r])?o[r]=n(t[r],i[r]):o[r]=i[r]}),o};return e.reduce((t,i,o)=>o===0?i:n(t,i),{})}function Nt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function K(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let i in t)e=e.replace(t[i],i)}return e}function Je(e){return Dt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,t)=>t===0?n:"-"+n.toLowerCase()).toLowerCase():e}function Ki(e){return Dt(e)?e.replace(/[A-Z]/g,(n,t)=>t===0?n:"."+n.toLowerCase()).toLowerCase():e}var ti={};function $t(e="pui_id_"){return ti.hasOwnProperty(e)||(ti[e]=0),ti[e]++,`${e}${ti[e]}`}function Vr(){let e=[],n=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(a=>a.value!==s)},i=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(n(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>i(s,!0)}}var rl=Vr();var Qn=["*"],Nr=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(Nr||{}),yl=(()=>{class e{requireConfirmationSource=new ct;acceptConfirmationSource=new ct;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var k=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),vl=(()=>{class e{static AND="and";static OR="or"}return e})(),_l=(()=>{class e{filter(t,i,o,r,s){let a=[];if(t)for(let l of t)for(let c of i){let u=Ye(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=K(i.toString()).toLocaleLowerCase(o);return K(t.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=K(i.toString()).toLocaleLowerCase(o);return K(t.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=K(i.toString()).toLocaleLowerCase(o);return K(t.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=K(i.toString()).toLocaleLowerCase(o),s=K(t.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()===i.getTime():t==i?!0:K(t.toString()).toLocaleLowerCase(o)==K(i.toString()).toLocaleLowerCase(o),notEquals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!1:t==null?!0:t.getTime&&i.getTime?t.getTime()!==i.getTime():t==i?!1:K(t.toString()).toLocaleLowerCase(o)!=K(i.toString()).toLocaleLowerCase(o),in:(t,i)=>{if(i==null||i.length===0)return!0;for(let o=0;o<i.length;o++)if(Gi(t,i[o]))return!0;return!1},between:(t,i)=>i==null||i[0]==null||i[1]==null?!0:t==null?!1:t.getTime?i[0].getTime()<=t.getTime()&&t.getTime()<=i[1].getTime():i[0]<=t&&t<=i[1],lt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<i.getTime():t<i,lte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<=i.getTime():t<=i,gt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>i.getTime():t>i,gte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>=i.getTime():t>=i,is:(t,i,o)=>this.filters.equals(t,i,o),isNot:(t,i,o)=>this.filters.notEquals(t,i,o),before:(t,i,o)=>this.filters.lt(t,i,o),after:(t,i,o)=>this.filters.gt(t,i,o),dateIs:(t,i)=>i==null?!0:t==null?!1:t.toDateString()===i.toDateString(),dateIsNot:(t,i)=>i==null?!0:t==null?!1:t.toDateString()!==i.toDateString(),dateBefore:(t,i)=>i==null?!0:t==null?!1:t.getTime()<i.getTime(),dateAfter:(t,i)=>i==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>i.getTime())};register(t,i){this.filters[t]=i}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Cl=(()=>{class e{messageSource=new ct;clearSource=new ct;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Sl=(()=>{class e{clickSource=new ct;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var El=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=$({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Qn,decls:1,vars:0,template:function(i,o){i&1&&(nt(),ot(0))},encapsulation:2})}return e})(),wl=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=$({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Qn,decls:1,vars:0,template:function(i,o){i&1&&(nt(),ot(0))},encapsulation:2})}return e})(),Xn=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(i){return new(i||e)(S(je))};static \u0275dir=E({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),ht=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({imports:[rt]})}return e})(),Dl=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})();var lo=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(S(se),S(bt))};static \u0275dir=E({type:e})}return e})(),co=(()=>{class e extends lo{static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=E({type:e,features:[y]})}return e})(),ui=new H("");var $r={provide:ui,useExisting:Ot(()=>uo),multi:!0};function Rr(){let e=xi()?xi().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var kr=new H(""),uo=(()=>{class e extends lo{_compositionMode;_composing=!1;constructor(t,i,o){super(t,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Rr())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(S(se),S(bt),S(kr,8))};static \u0275dir=E({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&_t("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[w([$r]),y]})}return e})();function tn(e){return e==null||en(e)===0}function en(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var di=new H(""),nn=new H(""),Pr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Jn=class{static min(n){return Br(n)}static max(n){return Hr(n)}static required(n){return po(n)}static requiredTrue(n){return jr(n)}static email(n){return Wr(n)}static minLength(n){return Ur(n)}static maxLength(n){return zr(n)}static pattern(n){return Gr(n)}static nullValidator(n){return ii()}static compose(n){return yo(n)}static composeAsync(n){return _o(n)}};function Br(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function Hr(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function po(e){return tn(e.value)?{required:!0}:null}function jr(e){return e.value===!0?null:{required:!0}}function Wr(e){return tn(e.value)||Pr.test(e.value)?null:{email:!0}}function Ur(e){return n=>{let t=n.value?.length??en(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function zr(e){return n=>{let t=n.value?.length??en(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function Gr(e){if(!e)return ii;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(tn(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function ii(e){return null}function ho(e){return e!=null}function fo(e){return Cn(e)?bn(e):e}function go(e){let n={};return e.forEach(t=>{n=t!=null?f(f({},n),t):n}),Object.keys(n).length===0?null:n}function mo(e,n){return n.map(t=>t(e))}function Kr(e){return!e.validate}function bo(e){return e.map(n=>Kr(n)?n:t=>n.validate(t))}function yo(e){if(!e)return null;let n=e.filter(ho);return n.length==0?null:function(t){return go(mo(t,n))}}function vo(e){return e!=null?yo(bo(e)):null}function _o(e){if(!e)return null;let n=e.filter(ho);return n.length==0?null:function(t){let i=mo(t,n).map(fo);return ke(i).pipe(oe(go))}}function Co(e){return e!=null?_o(bo(e)):null}function to(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function So(e){return e._rawValidators}function Eo(e){return e._rawAsyncValidators}function qi(e){return e?Array.isArray(e)?e:[e]:[]}function ni(e,n){return Array.isArray(e)?e.includes(n):e===n}function eo(e,n){let t=qi(n);return qi(e).forEach(o=>{ni(t,o)||t.push(o)}),t}function io(e,n){return qi(n).filter(t=>!ni(e,t))}var oi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=vo(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Co(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},Rt=class extends oi{name;get formDirective(){return null}get path(){return null}},kt=class extends oi{_parent=null;name=null;valueAccessor=null},ri=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},qr={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Wl=et(f({},qr),{"[class.ng-submitted]":"isSubmitted"}),Ul=(()=>{class e extends ri{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(S(kt,2))};static \u0275dir=E({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&z("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[y]})}return e})(),zl=(()=>{class e extends ri{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(S(Rt,10))};static \u0275dir=E({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&z("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[y]})}return e})();var ye="VALID",ei="INVALID",Kt="PENDING",ve="DISABLED",At=class{},si=class extends At{value;source;constructor(n,t){super(),this.value=n,this.source=t}},_e=class extends At{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Ce=class extends At{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},qt=class extends At{status;source;constructor(n,t){super(),this.status=n,this.source=t}},Zi=class extends At{source;constructor(n){super(),this.source=n}},Yi=class extends At{source;constructor(n){super(),this.source=n}};function on(e){return(pi(e)?e.validators:e)||null}function Zr(e){return Array.isArray(e)?vo(e):e||null}function rn(e,n){return(pi(n)?n.asyncValidators:e)||null}function Yr(e){return Array.isArray(e)?Co(e):e||null}function pi(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function wo(e,n,t){let i=e.controls;if(!(n?Object.keys(i):i).length)throw new Pe(1e3,"");if(!i[t])throw new Pe(1001,"")}function Do(e,n,t){e._forEachChild((i,o)=>{if(t[o]===void 0)throw new Pe(1002,"")})}var Zt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return dt(this.statusReactive)}set status(n){dt(()=>this.statusReactive.set(n))}_status=pt(()=>this.statusReactive());statusReactive=Y(void 0);get valid(){return this.status===ye}get invalid(){return this.status===ei}get pending(){return this.status==Kt}get disabled(){return this.status===ve}get enabled(){return this.status!==ve}errors;get pristine(){return dt(this.pristineReactive)}set pristine(n){dt(()=>this.pristineReactive.set(n))}_pristine=pt(()=>this.pristineReactive());pristineReactive=Y(!0);get dirty(){return!this.pristine}get touched(){return dt(this.touchedReactive)}set touched(n){dt(()=>this.touchedReactive.set(n))}_touched=pt(()=>this.touchedReactive());touchedReactive=Y(!1);get untouched(){return!this.touched}_events=new ct;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(eo(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(eo(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(io(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(io(n,this._rawAsyncValidators))}hasValidator(n){return ni(this._rawValidators,n)}hasAsyncValidator(n){return ni(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(et(f({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new Ce(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new Ce(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(et(f({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new _e(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new _e(!0,i))}markAsPending(n={}){this.status=Kt;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new qt(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(et(f({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ve,this.errors=null,this._forEachChild(o=>{o.disable(et(f({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new si(this.value,i)),this._events.next(new qt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(et(f({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ye,this._forEachChild(i=>{i.enable(et(f({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(et(f({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ye||this.status===Kt)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new si(this.value,t)),this._events.next(new qt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(et(f({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ve:ye}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Kt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=fo(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new qt(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?ve:this.errors?ei:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Kt)?Kt:this._anyControlsHaveStatus(ei)?ei:ye}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new _e(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ce(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){pi(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Zr(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Yr(this._rawAsyncValidators)}},ai=class extends Zt{constructor(n,t,i){super(on(t),rn(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){Do(this,!0,n),Object.keys(n).forEach(i=>{wo(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,r)=>{i=t(i,o,r)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Qi=class extends ai{};var hi=new H("",{providedIn:"root",factory:()=>fi}),fi="always";function Ao(e,n){return[...n.path,e]}function Xi(e,n,t=fi){sn(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Xr(e,n),ts(e,n),Jr(e,n),Qr(e,n)}function no(e,n,t=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),ci(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function li(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Qr(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function sn(e,n){let t=So(e);n.validator!==null?e.setValidators(to(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=Eo(e);n.asyncValidator!==null?e.setAsyncValidators(to(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();li(n._rawValidators,o),li(n._rawAsyncValidators,o)}function ci(e,n){let t=!1;if(e!==null){if(n.validator!==null){let o=So(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.validator);r.length!==o.length&&(t=!0,e.setValidators(r))}}if(n.asyncValidator!==null){let o=Eo(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.asyncValidator);r.length!==o.length&&(t=!0,e.setAsyncValidators(r))}}}let i=()=>{};return li(n._rawValidators,i),li(n._rawAsyncValidators,i),t}function Xr(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&To(e,n)})}function Jr(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&To(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function To(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function ts(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function es(e,n){e==null,sn(e,n)}function is(e,n){return ci(e,n)}function xo(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function ns(e){return Object.getPrototypeOf(e.constructor)===co}function os(e,n){e._syncPendingControls(),n.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Io(e,n){if(!n)return null;Array.isArray(n);let t,i,o;return n.forEach(r=>{r.constructor===uo?t=r:ns(r)?i=r:o=r}),o||i||t||null}function rs(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function oo(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function ro(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Se=class extends Zt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(on(t),rn(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),pi(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ro(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){oo(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){oo(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){ro(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var ss=e=>e instanceof Se;var as={provide:kt,useExisting:Ot(()=>an)},so=Promise.resolve(),an=(()=>{class e extends kt{_changeDetectorRef;callSetDisabledState;control=new Se;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new j;constructor(t,i,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Io(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),xo(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Xi(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){so.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&C(i);so.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ao(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(S(Rt,9),S(di,10),S(nn,10),S(ui,10),S(Ht,8),S(hi,8))};static \u0275dir=E({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[w([as]),y,W]})}return e})();var Kl=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=E({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})(),ls={provide:ui,useExisting:Ot(()=>cs),multi:!0},cs=(()=>{class e extends co{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=E({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&_t("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[w([ls]),y]})}return e})();var Oo=new H("");var us={provide:Rt,useExisting:Ot(()=>ds)},ds=(()=>{class e extends Rt{callSetDisabledState;get submitted(){return dt(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=pt(()=>this._submittedReactive());_submittedReactive=Y(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new j;constructor(t,i,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ci(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return Xi(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){no(t.control||null,t,!1),rs(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),os(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Zi(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new Yi(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,o=this.form.get(t.path);i!==o&&(no(i||null,t),ss(o)&&(Xi(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);es(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&is(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){sn(this.form,this),this._oldForm&&ci(this._oldForm,this)}static \u0275fac=function(i){return new(i||e)(S(di,10),S(nn,10),S(hi,8))};static \u0275dir=E({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&_t("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[w([us]),y,W]})}return e})();var ps={provide:kt,useExisting:Ot(()=>hs)},hs=(()=>{class e extends kt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new j;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Io(this,r)}ngOnChanges(t){this._added||this._setUpControl(),xo(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Ao(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||e)(S(Rt,13),S(di,10),S(nn,10),S(ui,10),S(Oo,8))};static \u0275dir=E({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[w([ps]),y,W]})}return e})();var fs=(()=>{class e{_validator=ii;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ii,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||e)};static \u0275dir=E({type:e,features:[W]})}return e})();var gs={provide:di,useExisting:Ot(()=>ms),multi:!0};var ms=(()=>{class e extends fs{required;inputName="required";normalizeInput=C;createValidator=t=>po;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=E({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&U("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[w([gs]),y]})}return e})();var Lo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({})}return e})(),Ji=class extends Zt{constructor(n,t,i){super(on(t),rn(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){Do(this,!1,n),n.forEach((i,o)=>{wo(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function ao(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var ql=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,i=null){let o=this._reduceControls(t),r={};return ao(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new ai(o,r)}record(t,i=null){let o=this._reduceControls(t);return new Qi(o,i)}control(t,i,o){let r={};return this.useNonNullable?(ao(i)?r=i:(r.validators=i,r.asyncValidators=o),new Se(t,et(f({},r),{nonNullable:!0}))):new Se(t,i,o)}array(t,i,o){let r=t.map(s=>this._createControl(s));return new Ji(r,i,o)}_reduceControls(t){let i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){if(t instanceof Se)return t;if(t instanceof Zt)return t;if(Array.isArray(t)){let i=t[0],o=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(i,o,r)}else return this.control(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Zl=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:hi,useValue:t.callSetDisabledState??fi}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({imports:[Lo]})}return e})(),Yl=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Oo,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:hi,useValue:t.callSetDisabledState??fi}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({imports:[Lo]})}return e})();var ys=Object.defineProperty,vs=Object.defineProperties,_s=Object.getOwnPropertyDescriptors,gi=Object.getOwnPropertySymbols,Vo=Object.prototype.hasOwnProperty,No=Object.prototype.propertyIsEnumerable,Mo=(e,n,t)=>n in e?ys(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,T=(e,n)=>{for(var t in n||(n={}))Vo.call(n,t)&&Mo(e,t,n[t]);if(gi)for(var t of gi(n))No.call(n,t)&&Mo(e,t,n[t]);return e},Qt=(e,n)=>vs(e,_s(n)),gt=(e,n)=>{var t={};for(var i in e)Vo.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&gi)for(var i of gi(e))n.indexOf(i)<0&&No.call(e,i)&&(t[i]=e[i]);return t};var Cs=zn(),q=Cs;function Fo(e,n){Xe(e)?e.push(...n||[]):at(e)&&Object.assign(e,n)}function Ss(e){return at(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Es(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ln(e="",n=""){return Es(`${Dt(e,!1)&&Dt(n,!1)?`${e}-`:e}${n}`)}function $o(e="",n=""){return`--${ln(e,n)}`}function ws(e=""){let n=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(n+t)%2!==0}function Ro(e,n="",t="",i=[],o){if(Dt(e)){let r=/{([^}]*)}/g,s=e.trim();if(ws(s))return;if(G(s,r)){let a=s.replaceAll(r,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!i.some(_=>G(h,_)));return`var(${$o(t,Je(p.join("-")))}${A(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return G(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(Yn(e))return e}function Ds(e,n,t){Dt(n,!1)&&e.push(`${n}:${t};`)}function Yt(e,n){return e?`${e}{${n}}`:""}var Xt=(...e)=>As(v.getTheme(),...e),As=(e={},n,t,i)=>{if(n){let{variable:o,options:r}=v.defaults||{},{prefix:s,transform:a}=e?.options||r||{},c=G(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||R(i)&&a==="strict"?v.getTokenValue(n):Ro(c,void 0,s,[o.excludedKeyRegex],t)}return""};var Ts=(e={})=>{let{preset:n,options:t}=e;return{preset(i){return n=n?Vt(n,i):i,this},options(i){return t=t?T(T({},t),i):i,this},primaryPalette(i){let{semantic:o}=n||{};return n=Qt(T({},n),{semantic:Qt(T({},o),{primary:i})}),this},surfacePalette(i){var o,r;let{semantic:s}=n||{},a=i?.hasOwnProperty("light")?i?.light:i,l=i?.hasOwnProperty("dark")?i?.dark:i,c={colorScheme:{light:T(T({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:T(T({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return n=Qt(T({},n),{semantic:T(T({},s),c)}),this},define({useDefaultPreset:i=!1,useDefaultOptions:o=!1}={}){return{preset:i?v.getPreset():n,options:o?v.getOptions():t}},update({mergePresets:i=!0,mergeOptions:o=!0}={}){let r={preset:i?Vt(v.getPreset(),n):n,options:o?T(T({},v.getOptions()),t):t};return v.setTheme(r),r},use(i){let o=this.define(i);return v.setTheme(o),o}}};function xs(e,n={}){let t=v.defaults.variable,{prefix:i=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=n,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let _=G(p,r)?ln(u):ln(u,Je(p)),D=Ss(h);if(at(D)){let{variables:V,tokens:B}=s(D,_);Fo(d.tokens,B),Fo(d.variables,V)}else d.tokens.push((i?_.replace(`${i}-`,""):_).replaceAll("-",".")),Ds(d.variables,$o(_),Ro(D,_,i,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,i);return{value:a,tokens:l,declarations:a.join(""),css:Yt(o,a.join(""))}}var lt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let n=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var i;return(i=n.map(o=>o.resolve(t)).find(o=>o.matched))!=null?i:this.rules.custom.resolve(t)})}},_toVariables(e,n){return xs(e,{prefix:n?.prefix})},getCommon({name:e="",theme:n={},params:t,set:i,defaults:o}){var r,s,a,l,c,u,d;let{preset:p,options:h}=n,_,D,V,B,N,It,tt;if(A(p)&&h.transform!=="strict"){let{primitive:Ee,semantic:we,extend:De}=p,te=we||{},{colorScheme:Ae}=te,Te=gt(te,["colorScheme"]),xe=De||{},{colorScheme:Ie}=xe,ee=gt(xe,["colorScheme"]),ie=Ae||{},{dark:Oe}=ie,Le=gt(ie,["dark"]),Me=Ie||{},{dark:Fe}=Me,Ve=gt(Me,["dark"]),Ne=A(Ee)?this._toVariables({primitive:Ee},h):{},$e=A(Te)?this._toVariables({semantic:Te},h):{},Re=A(Le)?this._toVariables({light:Le},h):{},pn=A(Oe)?this._toVariables({dark:Oe},h):{},hn=A(ee)?this._toVariables({semantic:ee},h):{},fn=A(Ve)?this._toVariables({light:Ve},h):{},gn=A(Fe)?this._toVariables({dark:Fe},h):{},[er,ir]=[(r=Ne.declarations)!=null?r:"",Ne.tokens],[nr,or]=[(s=$e.declarations)!=null?s:"",$e.tokens||[]],[rr,sr]=[(a=Re.declarations)!=null?a:"",Re.tokens||[]],[ar,lr]=[(l=pn.declarations)!=null?l:"",pn.tokens||[]],[cr,ur]=[(c=hn.declarations)!=null?c:"",hn.tokens||[]],[dr,pr]=[(u=fn.declarations)!=null?u:"",fn.tokens||[]],[hr,fr]=[(d=gn.declarations)!=null?d:"",gn.tokens||[]];_=this.transformCSS(e,er,"light","variable",h,i,o),D=ir;let gr=this.transformCSS(e,`${nr}${rr}`,"light","variable",h,i,o),mr=this.transformCSS(e,`${ar}`,"dark","variable",h,i,o);V=`${gr}${mr}`,B=[...new Set([...or,...sr,...lr])];let br=this.transformCSS(e,`${cr}${dr}color-scheme:light`,"light","variable",h,i,o),yr=this.transformCSS(e,`${hr}color-scheme:dark`,"dark","variable",h,i,o);N=`${br}${yr}`,It=[...new Set([...ur,...pr,...fr])],tt=J(p.css,{dt:Xt})}return{primitive:{css:_,tokens:D},semantic:{css:V,tokens:B},global:{css:N,tokens:It},style:tt}},getPreset({name:e="",preset:n={},options:t,params:i,set:o,defaults:r,selector:s}){var a,l,c;let u,d,p;if(A(n)&&t.transform!=="strict"){let h=e.replace("-directive",""),_=n,{colorScheme:D,extend:V,css:B}=_,N=gt(_,["colorScheme","extend","css"]),It=V||{},{colorScheme:tt}=It,Ee=gt(It,["colorScheme"]),we=D||{},{dark:De}=we,te=gt(we,["dark"]),Ae=tt||{},{dark:Te}=Ae,xe=gt(Ae,["dark"]),Ie=A(N)?this._toVariables({[h]:T(T({},N),Ee)},t):{},ee=A(te)?this._toVariables({[h]:T(T({},te),xe)},t):{},ie=A(De)?this._toVariables({[h]:T(T({},De),Te)},t):{},[Oe,Le]=[(a=Ie.declarations)!=null?a:"",Ie.tokens||[]],[Me,Fe]=[(l=ee.declarations)!=null?l:"",ee.tokens||[]],[Ve,Ne]=[(c=ie.declarations)!=null?c:"",ie.tokens||[]],$e=this.transformCSS(h,`${Oe}${Me}`,"light","variable",t,o,r,s),Re=this.transformCSS(h,Ve,"dark","variable",t,o,r,s);u=`${$e}${Re}`,d=[...new Set([...Le,...Fe,...Ne])],p=J(B,{dt:Xt})}return{css:u,tokens:d,style:p}},getPresetC({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let{preset:s,options:a}=n,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:i,defaults:o})},getPresetD({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=n,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:i,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,n){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?n.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:n.options.darkModeSelector):[]},getLayerOrder(e,n={},t,i){let{cssLayer:o}=n;return o?`@layer ${J(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:n,params:t,set:o,defaults:r}),a=Object.entries(i).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=Nt(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){var s;let a={name:e,theme:n,params:t,set:o,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(i).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Nt(l)}</style>`:""},createTokens(e={},n,t="",i="",o={}){return Object.entries(e).forEach(([r,s])=>{let a=G(r,n.variable.excludedKeyRegex)?t:t?`${t}.${Ki(r)}`:Ki(r),l=i?`${i}.${r}`:r;at(s)?this.createTokens(s,n,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),G(s,d)){let _=s.trim().replaceAll(d,B=>{var N;let It=B.replace(/{|}/g,""),tt=(N=o[It])==null?void 0:N.computed(c,u);return Xe(tt)&&tt.length===2?`light-dark(${tt[0].value},${tt[1].value})`:tt?.value}),D=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,V=/var\([^)]+\)/g;p=G(_.replace(V,"0"),D)?`calc(${_})`:_}return R(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(e,n,t){var i;let r=(l=>l.split(".").filter(u=>!G(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(n),s=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,a=[(i=e[r])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=gt(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(e,n,t,i){return t==="class"||t==="attr"?Yt(A(n)?`${e}${n},${e} ${n}`:e,i):Yt(e,A(n)?Yt(n,i):i)},transformCSS(e,n,t,i,o={},r,s,a){if(A(n)){let{cssLayer:l}=o;if(i!=="style"){let c=this.getColorSchemeOption(o,s);n=t==="dark"?c.reduce((u,{type:d,selector:p})=>(A(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",n):this.getSelectorRule(p,a,d,n)),u),""):Yt(a??":root",n)}if(l){let c={name:"primeui",order:"primeui"};at(l)&&(c.name=J(l.name,{name:e,type:i})),A(c.name)&&(n=Yt(`@layer ${c.name}`,n),r?.layerNames(c.name))}return n}return""}},v={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:n}=e;n&&(this._theme=Qt(T({},n),{options:T(T({},this.defaults.options),n.options)}),this._tokens=lt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),q.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Qt(T({},this.theme),{preset:e}),this._tokens=lt.createTokens(e,this.defaults),this.clearLoadedStyleNames(),q.emit("preset:change",e),q.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Qt(T({},this.theme),{options:e}),this.clearLoadedStyleNames(),q.emit("options:change",e),q.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return lt.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",n){return lt.getCommon({name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return lt.getPresetC(t)},getDirective(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return lt.getPresetD(t)},getCustomPreset(e="",n,t,i){let o={name:e,preset:n,options:this.options,selector:t,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return lt.getPreset(o)},getLayerOrderCSS(e=""){return lt.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",n,t="style",i){return lt.transformCSS(e,n,i,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",n,t={}){return lt.getCommonStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,n,t={}){return lt.getStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),q.emit(`theme:${n}:load`,e),!this._loadingStyles.size&&q.emit("theme:load"))}};function ac(...e){let n=Vt(v.getPreset(),...e);return v.setPreset(n),n}function lc(e){return Ts().surfacePalette(e).update().preset}var Is=0,ko=(()=>{class e{document=g(St);use(t,i={}){let o=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++Is}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:_={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=t,Ze(s,{type:"text/css",media:d,nonce:p});let D=this.document.head;h&&D.firstChild?D.insertBefore(s,D.firstChild):D.appendChild(s),Un(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Jt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Os=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Ls=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,O=(()=>{class e{name="base";useStyle=g(ko);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,i={},o=r=>r)=>{let r=o(J(t,{dt:Xt}));return r?this.useStyle.use(Nt(r),f({name:this.name},i)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},i="")=>this.load(this.theme,t,(o="")=>v.transformCSS(t.name||this.name,`${o}${i}`));loadGlobalCSS=(t={})=>this.load(Ls,t);loadGlobalTheme=(t={},i="")=>this.load(Os,t,(o="")=>v.transformCSS(t.name||this.name,`${o}${i}`));getCommonTheme=t=>v.getCommon(this.name,t);getComponentTheme=t=>v.getComponent(this.name,t);getDirectiveTheme=t=>v.getDirective(this.name,t);getPresetTheme=(t,i,o)=>v.getCustomPreset(this.name,t,i,o);getLayerOrderThemeCSS=()=>v.getLayerOrderCSS(this.name);getStyleSheet=(t="",i={})=>{if(this.css){let o=J(this.css,{dt:Xt}),r=Nt(`${o}${t}`),s=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,i={})=>v.getCommonStyleSheet(this.name,t,i);getThemeStyleSheet=(t,i={})=>{let o=[v.getStyleSheet(this.name,t,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=J(this.theme,{dt:Xt}),a=Nt(v.transformCSS(r,s)),l=Object.entries(i).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ms=(()=>{class e{theme=Y(void 0);csp=Y({nonce:void 0});isThemeChanged=!1;document=g(St);baseStyle=g(O);constructor(){ue(()=>{q.on("theme:change",t=>{dt(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),ue(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){v.clearLoadedStyleNames(),q.clear()}onThemeChange(t){v.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!v.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,f({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,f({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,f({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(f({name:"global-style"},s),r),v.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:i,csp:o}=t||{};i&&this.theme.set(i),o&&this.csp.set(o)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),cn=(()=>{class e extends Ms{ripple=Y(!1);platformId=g(Bt);inputStyle=Y(null);inputVariant=Y(null);overlayOptions={};csp=Y({nonce:void 0});filterMatchModeOptions={text:[k.STARTS_WITH,k.CONTAINS,k.NOT_CONTAINS,k.ENDS_WITH,k.EQUALS,k.NOT_EQUALS],numeric:[k.EQUALS,k.NOT_EQUALS,k.LESS_THAN,k.LESS_THAN_OR_EQUAL_TO,k.GREATER_THAN,k.GREATER_THAN_OR_EQUAL_TO],date:[k.DATE_IS,k.DATE_IS_NOT,k.DATE_BEFORE,k.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ct;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=f(f({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:i,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c,filterMatchModeOptions:u}=t||{};i&&this.csp.set(i),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),u&&(this.filterMatchModeOptions=u),a&&this.setThemeConfig({theme:a,csp:i})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Fs=new H("PRIME_NG_CONFIG");function Oc(...e){let n=e?.map(i=>({provide:Fs,useValue:i,multi:!1})),t=Sn(()=>{let i=g(cn);e?.forEach(o=>i.setConfig(o))});return Ei([...n,t])}var Po=(()=>{class e extends O{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),M=(()=>{class e{document=g(St);platformId=g(Bt);el=g(bt);injector=g(wi);cd=g(Ht);renderer=g(se);config=g(cn);baseComponentStyle=g(Po);baseStyle=g(O);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=$t("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,i="",o={}){return Qe(t,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Ln(this.platformId)){let{dt:i}=t;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>q.off("theme:change",t))}_loadStyles(){let t=()=>{Jt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Jt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Jt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Jt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!v.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,f({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,f({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,f({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(f({name:"global-style"},this.styleOptions),r),v.setLoadedStyleName("common")}if(!v.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,f({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(f({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),v.setLoadedStyleName(this.componentStyle?.name)}if(!v.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,f({name:"layer-order",first:!0},this.styleOptions)),v.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:i}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,f({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Jt.clearLoadedStyleNames(),q.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,i){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let i=this.componentStyle?.inlineStyles?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:f({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||e)};static \u0275dir=E({type:e,inputs:{dt:"dt"},features:[w([Po,O]),W]})}return e})();var Vs=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Ns={root:({instance:e,props:n})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":n.size==="small","p-inputtext-lg":n.size==="large","p-invalid":n.invalid,"p-variant-filled":n.variant==="filled","p-inputtext-fluid":n.fluid}]},Bo=(()=>{class e extends O{name="inputtext";theme=Vs;classes=Ns;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var tu=(()=>{class e extends M{ngModel;variant;fluid;pSize;filled;_componentStyle=g(Bo);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return R(this.fluid)?!!i:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||e)(S(an,8))};static \u0275dir=E({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,o){if(i&1&&_t("input",function(s){return o.onInput(s)}),i&2){let r;z("p-filled",o.filled)("p-variant-filled",((r=o.variant)!==null&&r!==void 0?r:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",C],pSize:"pSize"},features:[w([Bo]),y]})}return e})(),eu=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({})}return e})();var un=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,i){t&&i&&(t.classList?t.classList.add(i):t.className+=" "+i)}static addMultipleClasses(t,i){if(t&&i)if(t.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,i){t&&i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,i){t&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,i){return t&&i?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(i){return i!==t})}static find(t,i){return Array.from(t.querySelectorAll(i))}static findSingle(t,i){return this.isElement(t)?t.querySelector(i):null}static index(t){let i=t.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==t)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,i){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,i,o="self"){o!=="self"&&t&&i&&this.appendChild(t,i)}static alignOverlay(t,i,o="self",r=!0){t&&i&&(r&&(t.style.minWidth=`${e.getOuterWidth(i)}px`),o==="self"?this.relativePosition(t,i):this.absolutePosition(t,i))}static relativePosition(t,i,o=!0){let r=N=>{if(N)return getComputedStyle(N).getPropertyValue("position")==="relative"?N:r(N.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.offsetHeight,l=i.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},_,D;l.top+a+s.height>d.height?(_=l.top-h.top-s.height,t.style.transformOrigin="bottom",l.top+_<0&&(_=-1*l.top)):(_=a+l.top-h.top,t.style.transformOrigin="top");let V=l.left+s.width-d.width,B=l.left-h.left;s.width>d.width?D=(l.left-h.left)*-1:V>0?D=B-V:D=l.left-h.left,t.style.top=_+"px",t.style.left=D+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,i,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=i.offsetHeight,c=i.offsetWidth,u=i.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),_,D;u.top+l+s>h.height?(_=u.top+d-s,t.style.transformOrigin="bottom",_<0&&(_=d)):(_=l+u.top+d,t.style.transformOrigin="top"),u.left+a>h.width?D=Math.max(0,u.left+p+c-a):D=u.left+p,t.style.top=_+"px",t.style.left=D+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,i=[]){return t.parentNode===null?i:this.getParents(t.parentNode,i.concat([t.parentNode]))}static getScrollableParents(t){let i=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&i.push(d)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementDimensions(t){let i={};return t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",i}static scrollInView(t,i){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,p=t.clientHeight,h=this.getOuterHeight(i);u<0?t.scrollTop=d+u:u+h>p&&(t.scrollTop=d+u-p+h)}static fadeIn(t,i){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,i){var o=1,r=50,s=i,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,i)}static getOuterWidth(t,i){let o=t.offsetWidth;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let i=getComputedStyle(t);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(t){let i=getComputedStyle(t);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(t,i){let o=t.offsetHeight;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let t=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,i){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,i=t.indexOf("MSIE ");if(i>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,i){if(this.isElement(i))i.appendChild(t);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(t);else throw"Cannot append "+i+" to "+t}static removeChild(t,i){if(this.isElement(i))i.removeChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+i}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(t,i,o){t[i].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,i){t&&document.activeElement!==t&&t.focus(i)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,i=""){let o=this.find(t,this.getFocusableSelectorString(i)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,i=""){let o=this.findSingle(t,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,i=""){let o=this.getFocusableElements(t,i);return o.length>0?o[0]:null}static getLastFocusableElement(t,i){let o=this.getFocusableElements(t,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,i=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,i){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,i){if(t){let o=t.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,i={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(t,i="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(i,o)}static setAttributes(t,i={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,i=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return e})(),mi=class{element;listener;scrollableParents;constructor(n,t=()=>{}){this.element=n,this.listener=t}bindScrollListener(){this.scrollableParents=un.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ho=(()=>{class e extends M{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(Bt);document=g(St);host=g(bt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){jt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=un.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=E({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",C],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[y]})}return e})(),du=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({})}return e})();var $s=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Rs={root:({props:e,instance:n})=>["p-badge p-component",{"p-badge-circle":A(e.value)&&String(e.value).length===1,"p-badge-dot":R(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},jo=(()=>{class e extends O{name="badge";theme=$s;classes=Rs;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var dn=(()=>{class e extends M{styleClass=mt();style=mt();badgeSize=mt();size=mt();severity=mt();value=mt();badgeDisabled=mt(!1,{transform:C});_componentStyle=g(jo);containerClass=pt(()=>{let t="p-badge p-component";return A(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),R(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=$({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(wn(o.style()),Q(o.containerClass()),En("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[w([jo]),y],decls:1,vars:1,template:function(i,o){i&1&&ze(0),i&2&&Ge(o.value())},dependencies:[rt,ht],encapsulation:2,changeDetection:0})}return e})(),Wo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({imports:[dn,ht,ht]})}return e})();var Ps=["*"],Bs=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Hs=(()=>{class e extends O{name="baseicon";inlineStyles=Bs;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var bi=(()=>{class e extends M{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=R(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=$({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",C],styleClass:"styleClass"},features:[w([Hs]),y],ngContentSelectors:Ps,decls:1,vars:0,template:function(i,o){i&1&&(nt(),ot(0))},encapsulation:2,changeDetection:0})}return e})();var Uo=(()=>{class e extends bi{pathId;ngOnInit(){this.pathId="url(#"+$t()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=$({type:e,selectors:[["SpinnerIcon"]],features:[y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(Be(),yt(0,"svg",0)(1,"g"),ut(2,"path",1),vt(),yt(3,"defs")(4,"clipPath",2),ut(5,"rect",3),vt()()()),i&2&&(Q(o.getClassNames()),U("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),P(),U("clip-path",o.pathId),P(3),L("id",o.pathId))},encapsulation:2})}return e})();var Bu=(()=>{class e extends bi{static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=$({type:e,selectors:[["TimesIcon"]],features:[y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(Be(),yt(0,"svg",0),ut(1,"path",1),vt()),i&2&&(Q(o.getClassNames()),U("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var js=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Ws={root:"p-ink"},zo=(()=>{class e extends O{name="ripple";theme=js;classes=Ws;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Go=(()=>{class e extends M{zone=g(He);_componentStyle=g(zo);animationListener;mouseDownListener;timeout;constructor(){super(),ue(()=>{jt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(Ft(i,"p-ink-active"),!ji(i)&&!Ui(i)){let a=Math.max(st(this.el.nativeElement),X(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let o=Wi(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-Ui(i)/2,s=t.pageY-o.top+this.document.body.scrollLeft-ji(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),wt(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Ft(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&Ft(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Ft(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,jn(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=E({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[w([zo]),y]})}return e})(),Yu=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({})}return e})();var Us=["content"],zs=["loadingicon"],Gs=["icon"],Ks=["*"],Zo=e=>({class:e});function qs(e,n){e&1&&Dn(0)}function Zs(e,n){if(e&1&&ut(0,"span",8),e&2){let t=it(3);L("ngClass",t.iconClass()),U("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ys(e,n){if(e&1&&ut(0,"SpinnerIcon",9),e&2){let t=it(3);L("styleClass",t.spinnerIconClass())("spin",!0),U("aria-hidden",!0)("data-pc-section","loadingicon")}}function Qs(e,n){if(e&1&&(We(0),Lt(1,Zs,1,3,"span",6)(2,Ys,1,4,"SpinnerIcon",7),Ue()),e&2){let t=it(2);P(),L("ngIf",t.loadingIcon),P(),L("ngIf",!t.loadingIcon)}}function Xs(e,n){}function Js(e,n){if(e&1&&Lt(0,Xs,0,0,"ng-template",10),e&2){let t=it(2);L("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function ta(e,n){if(e&1&&(We(0),Lt(1,Qs,3,2,"ng-container",2)(2,Js,1,1,null,5),Ue()),e&2){let t=it();P(),L("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),P(),L("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ti(3,Zo,t.iconClass()))}}function ea(e,n){if(e&1&&ut(0,"span",8),e&2){let t=it(2);Q(t.icon),L("ngClass",t.iconClass()),U("data-pc-section","icon")}}function ia(e,n){}function na(e,n){if(e&1&&Lt(0,ia,0,0,"ng-template",10),e&2){let t=it(2);L("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function oa(e,n){if(e&1&&(We(0),Lt(1,ea,1,4,"span",11)(2,na,1,1,null,5),Ue()),e&2){let t=it();P(),L("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),P(),L("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ti(3,Zo,t.iconClass()))}}function ra(e,n){if(e&1&&(yt(0,"span",12),ze(1),vt()),e&2){let t=it();U("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),P(),Ge(t.label)}}function sa(e,n){if(e&1&&ut(0,"p-badge",13),e&2){let t=it();L("value",t.badge)("severity",t.badgeSeverity)}}var aa=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,la={root:({instance:e,props:n})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},xt=(()=>{class e extends O{name="button";theme=aa;classes=la;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Tt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Ko=(()=>{class e extends M{_componentStyle=g(xt);static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=E({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,o){i&2&&z("p-button-label",!0)},features:[w([xt]),y]})}return e})(),qo=(()=>{class e extends M{_componentStyle=g(xt);static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=E({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,o){i&2&&z("p-button-icon",!0)},features:[w([xt]),y]})}return e})(),vd=(()=>{class e extends M{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Di(qo);labelSignal=Di(Ko);isIconOnly=pt(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Tt);isTextButton=pt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(xt);ngAfterViewInit(){super.ngAfterViewInit(),wt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let t=[Tt.button,Tt.component];return this.icon&&!this.label&&R(this.htmlElement.textContent)&&t.push(Tt.iconOnly),this.loading&&(t.push(Tt.disabled,Tt.loading),!this.icon&&this.label&&t.push(Tt.labelOnly),this.icon&&!this.label&&!R(this.htmlElement.textContent)&&t.push(Tt.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return R(this.fluid)?!!i:this.fluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],i=this.htmlElement.classList.value.split(" ").find(o=>t.some(r=>o===`p-button-${r}`));i&&this.htmlElement.classList.remove(i)}createLabel(){if(!ft(this.htmlElement,".p-button-label")&&this.label){let i=this.document.createElement("span");this.icon&&!this.label&&i.setAttribute("aria-hidden","true"),i.className="p-button-label",i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!ft(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let i=this.document.createElement("span");i.className="p-button-icon",i.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&wt(i,o);let r=this.getIconClass();r&&wt(i,r),!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=ft(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=ft(this.htmlElement,".p-button-icon"),i=ft(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275dir=E({type:e,selectors:[["","pButton",""]],contentQueries:function(i,o,r){i&1&&(Ai(r,o.iconSignal,qo,5),Ai(r,o.labelSignal,Ko,5)),i&2&&An(2)},hostVars:4,hostBindings:function(i,o){i&2&&z("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],outlined:[2,"outlined","outlined",C],size:"size",plain:[2,"plain","plain",C],fluid:[2,"fluid","fluid",C],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[w([xt]),y,W]})}return e})(),ca=(()=>{class e extends M{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new j;onFocus=new j;onBlur=new j;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return R(this.fluid)?!!i:this.fluid}_componentStyle=g(xt);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[i])=>t+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=$({type:e,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(ae(r,Us,5),ae(r,zs,5),ae(r,Gs,5),ae(r,Xn,4)),i&2){let s;le(s=ce())&&(o.contentTemplate=s.first),le(s=ce())&&(o.loadingIconTemplate=s.first),le(s=ce())&&(o.iconTemplate=s.first),le(s=ce())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",C],loading:[2,"loading","loading",C],loadingIcon:"loadingIcon",raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],plain:[2,"plain","plain",C],severity:"severity",outlined:[2,"outlined","outlined",C],link:[2,"link","link",C],tabindex:[2,"tabindex","tabindex",Ct],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",C],fluid:[2,"fluid","fluid",C],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[w([xt]),y,W],ngContentSelectors:Ks,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(nt(),yt(0,"button",0),_t("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),ot(1),Lt(2,qs,1,0,"ng-container",1)(3,ta,3,5,"ng-container",2)(4,oa,3,5,"ng-container",2)(5,ra,2,3,"span",3)(6,sa,1,2,"p-badge",4),vt()),i&2&&(L("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),U("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),P(2),L("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),P(),L("ngIf",o.loading),P(),L("ngIf",!o.loading),P(),L("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),P(),L("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[rt,Tn,xn,On,In,Go,Ho,Uo,Wo,dn,ht],encapsulation:2,changeDetection:0})}return e})(),_d=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({imports:[rt,ca,ht,ht]})}return e})();var ua=["*"],da=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,pa={root:"p-iconfield"},Yo=(()=>{class e extends O{name="iconfield";theme=da;classes=pa;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ha=(()=>{class e extends M{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=g(Yo);static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=$({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,o){i&2&&(Q(o._styleClass),z("p-iconfield-left",o.iconPosition==="left")("p-iconfield-right",o.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[w([Yo]),y],ngContentSelectors:ua,decls:1,vars:0,template:function(i,o){i&1&&(nt(),ot(0))},dependencies:[rt],encapsulation:2,changeDetection:0})}return e})(),Fd=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({imports:[ha]})}return e})();var fa=["*"],ga={root:"p-inputicon"},Qo=(()=>{class e extends O{name="inputicon";classes=ga;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Kd=(()=>{class e extends M{styleClass;get hostClasses(){return this.styleClass}_componentStyle=g(Qo);static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275cmp=$({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,o){i&2&&(Q(o.hostClasses),z("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[w([Qo]),y],ngContentSelectors:fa,decls:1,vars:0,template:function(i,o){i&1&&(nt(),ot(0))},dependencies:[rt,ht],encapsulation:2,changeDetection:0})}return e})();var Xo=class e{static isArray(n,t=!0){return Array.isArray(n)&&(t||n.length!==0)}static isObject(n,t=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(t||Object.keys(n).length!==0)}static equals(n,t,i){return i?this.resolveFieldData(n,i)===this.resolveFieldData(t,i):this.equalsByValue(n,t)}static equalsByValue(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=this.isDate(n),c=this.isDate(t);if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static resolveFieldData(n,t){if(n&&t){if(this.isFunction(t))return t(n);if(t.indexOf(".")==-1)return n[t];{let i=t.split("."),o=n;for(let r=0,s=i.length;r<s;++r){if(o==null)return null;o=o[i[r]]}return o}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,t,i){let o;n&&t!==i&&(i>=n.length&&(i%=n.length,t%=n.length),n.splice(i,0,n.splice(t,1)[0]))}static insertIntoOrderedArray(n,t,i,o){if(i.length>0){let r=!1;for(let s=0;s<i.length;s++)if(this.findIndexInList(i[s],o)>t){i.splice(s,0,n),r=!0;break}r||i.push(n)}else i.push(n)}static findIndexInList(n,t){let i=-1;if(t){for(let o=0;o<t.length;o++)if(t[o]==n){i=o;break}}return i}static contains(n,t){if(n!=null&&t&&t.length){for(let i of t)if(this.equals(n,i))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,t,i,o=1){let r=-1,s=this.isEmpty(n),a=this.isEmpty(t);return s&&a?r=0:s?r=o:a?r=-o:typeof n=="string"&&typeof t=="string"?r=n.localeCompare(t,i,{numeric:!0}):r=n<t?-1:n>t?1:0,r}static sort(n,t,i=1,o,r=1){let s=e.compare(n,t,o,i),a=i;return(e.isEmpty(n)||e.isEmpty(t))&&(a=r===1?i:r),a*s}static merge(n,t){if(!(n==null&&t==null)){{if((n==null||typeof n=="object")&&(t==null||typeof t=="object"))return f(f({},n||{}),t||{});if((n==null||typeof n=="string")&&(t==null||typeof t=="string"))return[n||"",t||""].join(" ")}return t||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...t){return this.isFunction(n)?n(...t):n}static findLastIndex(n,t){let i=-1;if(this.isNotEmpty(n))try{i=n.findLastIndex(t)}catch{i=n.lastIndexOf([...n].reverse().find(t))}return i}static findLast(n,t){let i;if(this.isNotEmpty(n))try{i=n.findLast(t)}catch{i=[...n].reverse().find(t)}return i}static deepEquals(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=n instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static minifyCSS(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}static isString(n,t=!0){return typeof n=="string"&&(t||n!=="")}},Jo=0;function fp(e="pn_id_"){return Jo++,`${e}${Jo}`}function ma(){let e=[],n=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},i=()=>e.length>0?e[e.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(n(r,a)))},clear:r=>{r&&(t(o(r)),r.style.zIndex="")},getCurrent:()=>i(),generateZIndex:n,revertZIndex:t}}var yi=ma();var ba=({dt:e})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${e("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${e("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${e("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${e("tooltip.background")};
    color: ${e("tooltip.color")};
    padding: ${e("tooltip.padding")};
    box-shadow: ${e("tooltip.shadow")};
    border-radius: ${e("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0;
    border-right-color: ${e("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-left-color: ${e("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}
`,ya={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},tr=(()=>{class e extends O{name="tooltip";theme=ba;classes=ya;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var xp=(()=>{class e extends M{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:$t("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=g(tr);interactionInProgress=!1;constructor(t,i){super(),this.zone=t,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),jt(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=f(f({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Mt(t.relatedTarget,"p-tooltip")||Mt(t.relatedTarget,"p-tooltip-text")||Mt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Hi(this.container,this.el.nativeElement):Hi(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Pn(this.container,250),this.getOption("tooltipZIndex")==="auto"?yi.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&yi.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof je){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,r]of i[t].entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+ki(),o=t.top+Pi();return{left:i,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?ft(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=st(t),o=(X(t)-X(this.container))/2;this.alignTooltip(i,o)}alignLeft(){this.preAlign("left");let t=st(this.container),i=(X(this.el.nativeElement)-X(this.container))/2;this.alignTooltip(-t,i)}alignTop(){this.preAlign("top");let t=(st(this.el.nativeElement)-st(this.container))/2,i=X(this.container);this.alignTooltip(t,-i)}alignBottom(){this.preAlign("bottom");let t=(st(this.el.nativeElement)-st(this.container))/2,i=X(this.el.nativeElement);this.alignTooltip(t,i)}alignTooltip(t,i){let o=this.getHostOffset(),r=o.left+t,s=o.top+i;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=f(f({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Mt(t,"p-inputwrapper")?ft(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,o=t.left,r=st(this.container),s=X(this.container),a=me();return o+r>a.width||o<0||i<0||i+s>a.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new mi(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Wn(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&yi.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(S(He),S(vn))};static \u0275dir=E({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",C],showDelay:[2,"showDelay","showDelay",Ct],hideDelay:[2,"hideDelay","hideDelay",Ct],life:[2,"life","life",Ct],positionTop:[2,"positionTop","positionTop",Ct],positionLeft:[2,"positionLeft","positionLeft",Ct],autoHide:[2,"autoHide","autoHide",C],fitContent:[2,"fitContent","fitContent",C],hideOnEscape:[2,"hideOnEscape","hideOnEscape",C],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[w([tr]),y,W]})}return e})(),Ip=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=x({})}return e})();export{Wt as a,fe as b,xa as c,Ia as d,$n as e,Mt as f,wt as g,Na as h,Ft as i,$a as j,me as k,Ra as l,Er as m,st as n,ka as o,Hi as p,Pa as q,wr as r,ft as s,Ba as t,Bn as u,Ha as v,ji as w,ja as x,Wa as y,X as z,Ua as A,za as B,Ui as C,xr as D,Ga as E,Ka as F,qa as G,Za as H,Un as I,R as J,Fr as K,A as L,Ye as M,Gi as N,Ja as O,tl as P,J as Q,Xe as R,el as S,il as T,$t as U,Nr as V,yl as W,k as X,vl as Y,_l as Z,Cl as _,Sl as $,El as aa,wl as ba,Xn as ca,ht as da,Dl as ea,Ts as fa,ac as ga,lc as ha,O as ia,cn as ja,Oc as ka,M as la,Go as ma,Yu as na,ui as oa,uo as pa,Jn as qa,kt as ra,Ul as sa,zl as ta,an as ua,Kl as va,cs as wa,ds as xa,hs as ya,ms as za,ql as Aa,Zl as Ba,Yl as Ca,tu as Da,eu as Ea,un as Fa,mi as Ga,Ho as Ha,du as Ia,bi as Ja,Uo as Ka,Bu as La,vd as Ma,ca as Na,_d as Oa,ha as Pa,Fd as Qa,Kd as Ra,Xo as Sa,fp as Ta,yi as Ua,xp as Va,Ip as Wa};
