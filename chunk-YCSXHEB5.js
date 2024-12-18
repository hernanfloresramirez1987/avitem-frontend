import{b as te}from"./chunk-IK3PAYAS.js";import{e as ce}from"./chunk-CWCI5DGM.js";import{a as ie,d as ne}from"./chunk-WHKXZIHG.js";import{$ as M,L as W,M as Y,ba as ee,ea as oe}from"./chunk-KPQAMRWQ.js";import{k as K,m as P,o as X,r as Z}from"./chunk-QXCPPJ4C.js";import{$ as D,Cb as j,Db as _,Gb as A,Hb as R,Ib as F,Jb as S,Ta as r,U as T,Ub as H,V as B,Vb as $,W as z,Wb as G,Xb as J,ab as N,cb as v,da as g,db as q,ea as E,gb as p,ib as l,jb as t,ma as O,mb as w,na as m,nb as k,oa as C,pa as L,qa as b,tb as x,ua as y,ub as f,vb as d,wb as I,xb as V,yc as h,zb as Q,zc as U}from"./chunk-3ETRBYPY.js";var ae=(()=>{class e extends ce{static \u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})();static \u0275cmp=g({type:e,selectors:[["MinusIcon"]],standalone:!0,features:[v,$],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(L(),x(0,"svg",0),d(1,"path",1),f()),n&2&&(k(o.getClassNames()),l("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var he=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,de={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},re=(()=>{class e extends ee{name="checkbox";theme=he;classes=de;static \u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var ue=["checkboxicon"],be=["input"],pe=()=>({"p-checkbox-input":!0}),ke=e=>({checked:e,class:"p-checkbox-icon"});function xe(e,a){if(e&1&&d(0,"span",8),e&2){let i=_(3);t("ngClass",i.checkboxIcon),l("data-pc-section","icon")}}function fe(e,a){e&1&&d(0,"CheckIcon",9),e&2&&(t("styleClass","p-checkbox-icon"),l("data-pc-section","icon"))}function ge(e,a){if(e&1&&(I(0),p(1,xe,1,2,"span",7)(2,fe,1,2,"CheckIcon",6),V()),e&2){let i=_(2);r(),t("ngIf",i.checkboxIcon),r(),t("ngIf",!i.checkboxIcon)}}function me(e,a){e&1&&d(0,"MinusIcon",9),e&2&&(t("styleClass","p-checkbox-icon"),l("data-pc-section","icon"))}function Ce(e,a){if(e&1&&(I(0),p(1,ge,3,2,"ng-container",4)(2,me,1,2,"MinusIcon",6),V()),e&2){let i=_();r(),t("ngIf",i.checked),r(),t("ngIf",i._indeterminate())}}function ye(e,a){}function ve(e,a){e&1&&p(0,ye,0,0,"ng-template")}var _e={provide:ie,useExisting:T(()=>le),multi:!0},le=(()=>{class e extends oe{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new y;onFocus=new y;onBlur=new y;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Y(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=N(void 0);checkboxicon;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=D(re);ngOnChanges(i){super.ngOnChanges(i),i.indeterminate&&this._indeterminate.set(i.indeterminate.currentValue)}updateModel(i){let n,o=this.injector.get(ne,null,{optional:!0,self:!0}),c=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=c.filter(s=>!W(s,this.value)):n=c?[...c,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onBlur.emit(i),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(i){this.model=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){setTimeout(()=>{this.disabled=i,this.cd.markForCheck()})}static \u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})();static \u0275cmp=g({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,c){if(n&1&&A(c,ue,5),n&2){let s;F(s=S())&&(o.checkboxicon=s.first)}},viewQuery:function(n,o){if(n&1&&R(be,5),n&2){let c;F(c=S())&&(o.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",h],binary:[2,"binary","binary",h],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",U],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",h],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",h],required:[2,"required","required",h],autofocus:[2,"autofocus","autofocus",h],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[H([_e,re]),q,v,O,$],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let c=Q();x(0,"div",1)(1,"input",2,0),j("focus",function(u){return m(c),C(o.onInputFocus(u))})("blur",function(u){return m(c),C(o.onInputBlur(u))})("change",function(u){return m(c),C(o.handleChange(u))}),f(),x(3,"div",3),p(4,Ce,3,2,"ng-container",4)(5,ve,1,0,null,5),f()()}n&2&&(w(o.style),k(o.styleClass),t("ngClass",o.containerClass),l("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),r(),w(o.inputStyle),k(o.inputClass),t("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",G(26,pe)),l("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),r(3),t("ngIf",!o.checkboxicon),r(),t("ngTemplateOutlet",o.checkboxicon)("ngTemplateOutletContext",J(27,ke,o.checked)))},dependencies:[Z,K,P,X,te,ae,M],encapsulation:2,changeDetection:0})}return e})(),Ge=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=z({imports:[le,M,M]})}return e})();export{le as a,Ge as b};
