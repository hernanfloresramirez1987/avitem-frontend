import{D as X,T as Y,U as Z,f as K,i as P}from"./chunk-GGYH7DSO.js";import{k as q,m as W,p as z,u as J}from"./chunk-JAFPLUWG.js";import{Cb as C,Db as y,Ib as T,Jb as j,Kb as A,Lb as _,Mb as L,Nb as O,Sa as a,Ta as p,Tb as G,U as B,V as F,W as V,Zb as I,_b as Q,da as f,db as M,ea as N,fa as E,hb as D,ib as r,jb as l,nb as v,oa as c,pa as d,sc as H,tb as h,ua as S,ub as b,vb as R,xa as m,xc as k,yc as U,zb as g}from"./chunk-PQPLRZS3.js";var x=["input"],ee=(o,s,e,t)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":o,"p-radiobutton-disabled":s,"p-radiobutton-focused":e,"p-variant-filled":t}),te=(o,s,e)=>({"p-radiobutton-box":!0,"p-highlight":o,"p-disabled":s,"p-focus":e}),ie=(o,s,e)=>({"p-radiobutton-label":!0,"p-radiobutton-label-active":o,"p-disabled":s,"p-radiobutton-label-focus":e});function oe(o,s){if(o&1){let e=g();h(0,"label",7),C("click",function(i){c(e);let n=y();return d(n.select(i))}),L(1),b()}if(o&2){let e=y(),t=_(3);v(e.labelStyleClass),l("ngClass",I(6,ie,t.checked,e.disabled,e.focused)),r("for",e.inputId)("data-pc-section","label"),a(),O(e.label)}}var ne={provide:K,useExisting:B(()=>re),multi:!0},ae=(()=>{class o{accessors=[];add(e,t){this.accessors.push([e,t])}remove(e){this.accessors=this.accessors.filter(t=>t[1]!==e)}select(e){this.accessors.forEach(t=>{this.isSameGroup(t,e)&&t[1]!==e&&t[1].writeValue(e.value)})}isSameGroup(e,t){return e[0].control?e[0].control.root===t.control.control.root&&e[1].name===t.name:!1}static \u0275fac=function(t){return new(t||o)};static \u0275prov=F({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),re=(()=>{class o{cd;injector;registry;config;value;formControlName;name;disabled;label;variant="outlined";tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;labelStyleClass;autofocus;onClick=new m;onFocus=new m;onBlur=new m;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;constructor(e,t,i,n){this.cd=e,this.injector=t,this.registry=i,this.config=n}ngOnInit(){this.control=this.injector.get(P),this.checkName(),this.registry.add(this.control,this)}handleClick(e,t,i){this.disabled||(this.select(e),i&&t.focus())}select(e){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=function(t){return new(t||o)(p(H),p(S),p(ae),p(X))};static \u0275cmp=N({type:o,selectors:[["p-radioButton"]],viewQuery:function(t,i){if(t&1&&T(x,5),t&2){let n;j(n=A())&&(i.inputViewChild=n.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[f.HasDecoratorInputTransform,"disabled","disabled",k],label:"label",variant:"variant",tabindex:[f.HasDecoratorInputTransform,"tabindex","tabindex",U],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",autofocus:[f.HasDecoratorInputTransform,"autofocus","autofocus",k]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[G([ne]),M],decls:7,vars:30,consts:[["input",""],[3,"click","ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio","pAutoFocus","",3,"focus","blur","checked","disabled","value","autofocus"],[3,"ngClass"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(t,i){if(t&1){let n=g();h(0,"div",1),C("click",function(u){c(n);let $=_(3);return d(i.handleClick(u,$,!0))}),h(1,"div",2)(2,"input",3,0),C("focus",function(u){return c(n),d(i.onInputFocus(u))})("blur",function(u){return c(n),d(i.onInputBlur(u))}),b()(),h(4,"div",4),R(5,"span",5),b()(),D(6,oe,2,10,"label",6)}t&2&&(v(i.styleClass),l("ngStyle",i.style)("ngClass",Q(21,ee,i.checked,i.disabled,i.focused,i.variant==="filled"||i.config.inputStyle()==="filled")),r("data-pc-name","radiobutton")("data-pc-section","root"),a(),r("data-pc-section","hiddenInputWrapper"),a(),l("checked",i.checked)("disabled",i.disabled)("value",i.value)("autofocus",i.autofocus),r("id",i.inputId)("name",i.name)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("tabindex",i.tabindex)("data-pc-section","hiddenInput"),a(2),l("ngClass",I(26,te,i.checked,i.disabled,i.focused)),r("data-pc-section","input"),a(),r("data-pc-section","icon"),a(),l("ngIf",i.label))},dependencies:[q,W,z,Y],encapsulation:2,changeDetection:0})}return o})(),Ie=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=E({type:o});static \u0275inj=V({imports:[J,Z]})}return o})();export{re as a,Ie as b};
