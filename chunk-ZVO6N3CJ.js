import{$ as h,L as k,Y as z,Z as J,ba as H,da as P}from"./chunk-Y55QQ4V5.js";import{k as N,m as O,n as R,o as w,r as B}from"./chunk-QXCPPJ4C.js";import{$ as S,Db as g,Eb as j,Fb as _,Gb as p,Ib as s,Jb as f,Nb as T,Pb as b,Ta as a,Ub as E,V as C,Vb as q,W as M,ab as x,cb as D,da as F,ea as Q,gb as c,ib as I,jb as r,nb as $,qa as v,tb as l,ub as m,yb as y}from"./chunk-3ETRBYPY.js";var A=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,G={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},V=(()=>{class e extends H{name="card";theme=A;classes=G;static \u0275fac=(()=>{let n;return function(t){return(n||(n=v(e)))(t||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var K=["header"],L=["title"],U=["subtitle"],W=["content"],X=["footer"],Y=["*",[["p-header"]],[["p-footer"]]],Z=["*","p-header","p-footer"];function ee(e,d){e&1&&y(0)}function te(e,d){if(e&1&&(l(0,"div",8),_(1,1),c(2,ee,1,0,"ng-container",6),m()),e&2){let n=g();a(2),r("ngTemplateOutlet",n.headerTemplate)}}function ne(e,d){e&1&&y(0)}function ie(e,d){if(e&1&&(l(0,"div",9),T(1),c(2,ne,1,0,"ng-container",6),m()),e&2){let n=g();a(),b(" ",n._header," "),a(),r("ngTemplateOutlet",n.titleTemplate)}}function ae(e,d){e&1&&y(0)}function re(e,d){if(e&1&&(l(0,"div",10),T(1),c(2,ae,1,0,"ng-container",6),m()),e&2){let n=g();a(),b(" ",n.subheader," "),a(),r("ngTemplateOutlet",n.subtitleTemplate)}}function oe(e,d){e&1&&y(0)}function ce(e,d){e&1&&y(0)}function de(e,d){if(e&1&&(l(0,"div",11),_(1,2),c(2,ce,1,0,"ng-container",6),m()),e&2){let n=g();a(2),r("ngTemplateOutlet",n.footerTemplate)}}var le=(()=>{class e extends P{_header;subheader;set style(n){k(this._style(),n)||this._style.set(n)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_style=x(null);_componentStyle=S(V);getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=(()=>{let n;return function(t){return(n||(n=v(e)))(t||e)}})();static \u0275cmp=F({type:e,selectors:[["p-card"]],contentQueries:function(o,t,u){if(o&1&&(p(u,z,5),p(u,J,5),p(u,K,5),p(u,L,5),p(u,U,5),p(u,W,5),p(u,X,5)),o&2){let i;s(i=f())&&(t.headerFacet=i.first),s(i=f())&&(t.footerFacet=i.first),s(i=f())&&(t.headerTemplate=i.first),s(i=f())&&(t.titleTemplate=i.first),s(i=f())&&(t.subtitleTemplate=i.first),s(i=f())&&(t.contentTemplate=i.first),s(i=f())&&(t.footerTemplate=i.first)}},inputs:{_header:[0,"header","_header"],subheader:"subheader",style:"style",styleClass:"styleClass"},standalone:!0,features:[E([V]),D,q],ngContentSelectors:Z,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(o,t){o&1&&(j(Y),l(0,"div",0),c(1,te,3,1,"div",1),l(2,"div",2),c(3,ie,3,2,"div",3)(4,re,3,2,"div",4),l(5,"div",5),_(6),c(7,oe,1,0,"ng-container",6),m(),c(8,de,3,1,"div",7),m()()),o&2&&($(t.styleClass),r("ngClass","p-card p-component")("ngStyle",t._style()),I("data-pc-name","card"),a(),r("ngIf",t.headerFacet||t.headerTemplate),a(2),r("ngIf",t._header||t.titleTemplate),a(),r("ngIf",t.subheader||t.subtitleTemplate),a(3),r("ngTemplateOutlet",t.contentTemplate),a(),r("ngIf",t.footerFacet||t.footerTemplate))},dependencies:[B,N,O,w,R,h],encapsulation:2,changeDetection:0})}return e})(),Qe=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Q({type:e});static \u0275inj=M({imports:[le,h,h]})}return e})();export{Qe as a};
