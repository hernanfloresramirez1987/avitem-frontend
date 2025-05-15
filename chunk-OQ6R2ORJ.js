import{H as z,I as x,Z as A,_,da as N,ga as P,ha as se,ja as Q,na as re,pa as ce,wa as ue}from"./chunk-SIBHBHQR.js";import{c as ae,i as I,m as V}from"./chunk-RHZWWJMM.js";import{$a as c,Bb as p,Ca as g,Cb as b,Gb as ne,Hb as ie,Na as L,Nb as S,O as $,Oa as K,P as B,Pb as H,Q as j,Qb as F,Ra as w,Sa as J,Ta as r,V as E,_a as m,_b as le,aa as G,ba as Y,bb as O,cb as W,da as f,db as q,fb as y,gc as u,hc as D,ib as X,ja as C,jb as Z,kb as v,lb as T,mb as ee,pb as k,qb as te,rb as oe,ub as M,vb as s,zb as d}from"./chunk-4LBSLQEY.js";var me=["icon"],ye=["content"],de=e=>({$implicit:e}),_e=(e,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":a});function Ce(e,a){e&1&&k(0)}function ve(e,a){if(e&1&&ee(0,"span",0),e&2){let t=s(3);q(t.checked?t.onIcon:t.offIcon),c("ngClass",F(4,_e,t.iconPos==="left",t.iconPos==="right")),m("data-pc-section","icon")}}function Te(e,a){if(e&1&&r(0,ve,1,7,"span",2),e&2){let t=s(2);y(t.onIcon||t.offIcon?0:-1)}}function ke(e,a){e&1&&k(0)}function xe(e,a){if(e&1&&r(0,ke,1,0,"ng-container",1),e&2){let t=s(2);c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",H(2,de,t.checked))}}function $e(e,a){if(e&1&&(r(0,Te,1,1)(1,xe,1,4,"ng-container"),v(2,"span",0),ne(3),T()),e&2){let t=s();y(t.iconTemplate?1:0),g(2),c("ngClass",t.cx("label")),m("data-pc-section","label"),g(),ie(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Be=({dt:e})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
    padding: ${e("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${e("togglebutton.content.border.radius")};
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${e("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${e("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Ee={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ge=(()=>{class e extends N{name="togglebutton";theme=Be;classes=Ee;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var Le={provide:Q,useExisting:$(()=>U),multi:!0},U=(()=>{class e extends P{get hostClass(){return this.styleClass||""}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new C;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=E(ge);onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,i){if(n&1&&(d(i,me,4),d(i,ye,4),d(i,A,4)),n&2){let l;p(l=b())&&(o.iconTemplate=l.first),p(l=b())&&(o.contentTemplate=l.first),p(l=b())&&(o.templates=l)}},hostVars:23,hostBindings:function(n,o){n&1&&M("keydown",function(l){return o.onKeyDown(l)})("click",function(l){return o.toggle(l)}),n&2&&(oe("tabindex",o.tabindex)("disabled",o.disabled),m("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled)("type","button"),q(o.hostClass),O("p-togglebutton",!0)("p-togglebutton-checked",o.checked)("p-disabled",o.disabled)("p-togglebutton-sm",o.size==="small")("p-inputfield-sm",o.size==="small")("p-togglebutton-lg",o.size==="large")("p-inputfield-lg",o.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",u],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",D],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",u],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[S([Le,ge]),J([se]),w],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(v(0,"span",0),r(1,Ce,1,0,"ng-container",1)(2,$e,4,4),T()),n&2&&(c("ngClass",o.cx("content")),g(),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",H(4,de,o.checked)),g(),y(o.contentTemplate?-1:2))},dependencies:[V,ae,I,_],encapsulation:2,changeDetection:0})}return e})();var we=["item"],Oe=(e,a)=>({$implicit:e,index:a});function Me(e,a){return this.getOptionLabel(a)}function Se(e,a){e&1&&k(0)}function Fe(e,a){if(e&1&&r(0,Se,1,0,"ng-container",3),e&2){let t=s(2),n=t.$implicit,o=t.$index,i=s();c("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",F(2,Oe,n,o))}}function De(e,a){e&1&&r(0,Fe,1,5,"ng-template",null,0,le)}function Ie(e,a){if(e&1){let t=te();v(0,"p-toggleButton",2),M("onChange",function(o){let i=G(t),l=i.$implicit,h=i.$index,R=s();return Y(R.onOptionSelect(o,l,h))}),r(1,De,2,0),T()}if(e&2){let t=a.$implicit,n=s();c("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(t))("onLabel",n.getOptionLabel(t))("offLabel",n.getOptionLabel(t))("disabled",n.disabled||n.isOptionDisabled(t))("allowEmpty",n.getAllowEmpty())("size",n.size),g(),y(n.itemTemplate||n._itemTemplate?1:-1)}}var Ve=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,ze={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},pe=(()=>{class e extends N{name="selectbutton";theme=Ve;classes=ze;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var Ae={provide:Q,useExisting:$(()=>be),multi:!0},be=(()=>{class e extends P{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(t){this._unselectable=t,this.allowEmpty=!t}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new C;onChange=new C;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=E(pe);getAllowEmpty(){return this.allowEmpty||this.value?.length!==1}getOptionLabel(t){return this.optionLabel?z(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?z(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?z(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,n,o){if(this.disabled||this.isOptionDisabled(n))return;let i=this.isSelected(n);if(i&&this.unselectable)return;let l=this.getOptionValue(n),h;if(this.multiple)i?h=this.value.filter(R=>!x(R,l,this.equalityKey)):h=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;h=i?null:l}this.focusedIndex=o,this.value=h,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[l],index:l});n==="prev"?o.index===0?i=this.el.nativeElement.children.length-1:i=o.index-1:o.index===this.el.nativeElement.children.length-1?i=0:i=o.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!x(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(x(i,o,this.dataKey)){n=!0;break}}}else n=x(this.getOptionValue(t),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,i){if(n&1&&(d(i,we,4),d(i,A,4)),n&2){let l;p(l=b())&&(o.itemTemplate=l.first),p(l=b())&&(o.templates=l)}},hostVars:10,hostBindings:function(n,o){n&2&&(m("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),W(o.style),O("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",u],tabindex:[2,"tabindex","tabindex",D],multiple:[2,"multiple","multiple",u],allowEmpty:[2,"allowEmpty","allowEmpty",u],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",u],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",u]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[S([Ae,pe]),w],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&X(0,Ie,2,9,"p-toggleButton",1,Me,!0),n&2&&Z(o.options)},dependencies:[U,ue,re,ce,V,I,_],encapsulation:2,changeDetection:0})}return e})(),vt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=K({type:e});static \u0275inj=j({imports:[be,_,_]})}return e})();export{be as a,vt as b};
