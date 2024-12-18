import{g as le,l as w,s as de,t as ce}from"./chunk-CWCI5DGM.js";import{c as pe,d as k,f as I,h as E,i as O,j as V}from"./chunk-NMGI7OHJ.js";import{$ as S,ba as ae,c as re,ea as se,l as oe}from"./chunk-KPQAMRWQ.js";import{k as W,m as ee,n as te,o as ne,r as ie}from"./chunk-QXCPPJ4C.js";import{$ as L,Cb as g,Db as l,Eb as Q,Fb as H,Hb as x,Ib as y,Jb as v,Mb as q,Ta as s,Ub as G,V as D,Vb as J,W as M,Xb as K,Yb as X,cb as Z,da as B,db as j,ea as F,gb as p,gc as Y,ib as d,jb as o,ma as A,mb as $,na as m,nb as z,oa as f,qa as C,tb as c,ua as b,ub as u,vb as P,wb as R,xb as N,yb as h,yc as _,zb as T,zc as U}from"./chunk-3ETRBYPY.js";var fe=({dt:e})=>`

.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: ${e("drawer.background")};
    color: ${e("drawer.color")};
    border: 1px solid ${e("drawer.border.color")};
    box-shadow: ${e("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${e("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${e("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${e("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${e("drawer.title.font.weight")};
    font-size: ${e("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

/* PrimeVue animations

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
*/

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {

    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}
`,ue={mask:({instance:e})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"})},_e={mask:({instance:e})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":e.modal,"p-drawer-open":e.containerVisible,"p-drawer-full":e.fullScreen,[`p-drawer-${e.position}`]:!!e.position}),root:({instance:e})=>({"p-drawer p-component":!0,"p-drawer-full":e.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},me=(()=>{class e extends ae{name="drawer";theme=fe;classes=_e;inlineStyles=ue;static \u0275fac=(()=>{let t;return function(i){return(t||(t=C(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})(),he=["maskRef"],we=["container"],be=["closeButton"],ge=["*"],xe=(e,a)=>({transform:e,transition:a}),ye=e=>({value:"visible",params:e});function ve(e,a){e&1&&h(0)}function Se(e,a){e&1&&h(0)}function Ce(e,a){e&1&&P(0,"TimesIcon"),e&2&&d("data-pc-section","closeicon")}function Te(e,a){}function ke(e,a){e&1&&p(0,Te,0,0,"ng-template")}function Ie(e,a){if(e&1&&(c(0,"span",11),p(1,ke,1,0,null,5),u()),e&2){let t=l(4);d("data-pc-section","closeicon"),s(),o("ngTemplateOutlet",t.closeIconTemplate)}}function Ee(e,a){if(e&1){let t=T();c(0,"p-button",9),g("onClick",function(i){m(t);let r=l(3);return f(r.close(i))})("keydown.enter",function(i){m(t);let r=l(3);return f(r.close(i))}),p(1,Ce,1,1,"TimesIcon",8)(2,Ie,2,2,"span",10),u()}if(e&2){let t=l(3);o("ngClass",t.cx("closeButton"))("buttonProps",t.closeButtonProps)("ariaLabel",t.ariaCloseLabel),d("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),s(),o("ngIf",!t.closeIconTemplate),s(),o("ngIf",t.closeIconTemplate)}}function Oe(e,a){e&1&&h(0)}function Ve(e,a){e&1&&h(0)}function De(e,a){if(e&1&&(R(0),c(1,"div",6),p(2,Ve,1,0,"ng-container",5),u(),N()),e&2){let t=l(3);s(),o("ngClass",t.cx("footer")),d("data-pc-section","footer"),s(),o("ngTemplateOutlet",t.footerTemplate)}}function Me(e,a){if(e&1&&(c(0,"div",6),p(1,Se,1,0,"ng-container",5)(2,Ee,3,7,"p-button",7),u(),c(3,"div",6),H(4),p(5,Oe,1,0,"ng-container",5),u(),p(6,De,3,3,"ng-container",8)),e&2){let t=l(2);o("ngClass",t.cx("header")),d("data-pc-section","header"),s(),o("ngTemplateOutlet",t.headerTemplate),s(),o("ngIf",t.showCloseIcon),s(),o("ngClass",t.cx("content")),d("data-pc-section","content"),s(2),o("ngTemplateOutlet",t.contentTemplate),s(),o("ngIf",t.footerTemplate)}}function Le(e,a){if(e&1){let t=T();c(0,"div",3,0),g("@panelState.start",function(i){m(t);let r=l();return f(r.onAnimationStart(i))})("@panelState.done",function(i){m(t);let r=l();return f(r.onAnimationEnd(i))})("click",function(i){m(t);let r=l();return f(r.maskClickListener(i))}),c(2,"div",4),g("keydown",function(i){m(t);let r=l();return f(r.onKeyDown(i))}),p(3,ve,1,0,"ng-container",5)(4,Me,7,8,"ng-template",null,1,Y),u()()}if(e&2){let t=q(5),n=l();$(n.maskStyle),o("ngClass",n.cx("mask"))("ngStyle",n.sx("mask"))("@panelState",K(15,ye,X(12,xe,n.transformOptions,n.transitionOptions))),d("data-pc-name","mask")("data-pc-section","mask"),s(2),z(n.styleClass),o("ngClass",n.cx("root")),d("data-pc-section","root"),s(),o("ngTemplateOutlet",n.headlessTemplate||t)}}var Be=O([I({transform:"{{transform}}",opacity:0}),k("{{transition}}")]),Fe=O([k("{{transition}}",I({transform:"{{transform}}",opacity:0}))]),Ae=(()=>{class e extends se{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps;dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){switch(this._position=t,t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}maskStyle;onShow=new b;onHide=new b;visibleChange=new b;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;documentEscapeListener;_componentStyle=L(me);headerTemplate;footerTemplate;closeIconTemplate;headlessTemplate;contentTemplate;ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let n=Object.keys(t).find(i=>i.includes("Template"));n&&(this[`_${n}`]=t[n].currentValue)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template||this.headerTemplate;break;case"footer":this.footerTemplate=t.template||this.footerTemplate;break;case"closeicon":this.closeIconTemplate=t.template||this.closeIconTemplate;break;case"headless":this.headlessTemplate=t.template||this.headlessTemplate;break;case"content":this.contentTemplate=t.template||this.headlessTemplate;break}})}onKeyDown(t){t.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&w.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(t=!0){t&&this.onHide.emit({})}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}maskClickListener(t){this.dismissible&&this.close(t),this.blockScroll&&re()}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(t){switch(t.toState){case"void":this.hide(!1),w.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){if(this.appendTo)return this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):oe(this.appendTo,this.container)}bindDocumentEscapeListener(){let t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(t,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===w.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindGlobalListeners(){this.unbindDocumentEscapeListener()}ngOnDestroy(){this.initialized=!1,this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&w.clear(this.container),this.container=null,this.unbindGlobalListeners(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=C(e)))(i||e)}})();static \u0275cmp=B({type:e,selectors:[["p-sidebar"]],viewQuery:function(n,i){if(n&1&&(x(he,5),x(we,5),x(be,5)),n&2){let r;y(r=v())&&(i.maskRef=r.first),y(r=v())&&(i.containerViewChild=r.first),y(r=v())&&(i.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",_],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",_],baseZIndex:[2,"baseZIndex","baseZIndex",U],modal:[2,"modal","modal",_],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",_],showCloseIcon:[2,"showCloseIcon","showCloseIcon",_],closeOnEscape:[2,"closeOnEscape","closeOnEscape",_],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",maskStyle:"maskStyle",headerTemplate:"headerTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",headlessTemplate:"headlessTemplate",contentTemplate:"contentTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},standalone:!0,features:[G([me]),j,Z,A,J],ngContentSelectors:ge,decls:1,vars:1,consts:[["maskRef",""],["notHeadless",""],[3,"ngClass","ngStyle","style","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],[3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["class","p-sidebar-close-icon",4,"ngIf"],[1,"p-sidebar-close-icon"]],template:function(n,i){n&1&&(Q(),p(0,Le,6,17,"div",2)),n&2&&o("ngIf",i.visible)},dependencies:[ie,W,ee,ne,te,S,le,ce,de],encapsulation:2,data:{animation:[pe("panelState",[E("void => visible",[V(Be)]),E("visible => void",[V(Fe)])])]},changeDetection:0})}return e})(),ot=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[Ae,S,S]})}return e})();export{Ae as a,ot as b};
