import{b as R,c as W,e as A,g as Z}from"./chunk-SB7R4BYR.js";import{B as X,C as Y,e as H,f as V,l as $,m as z,n as w,o as G,q as J,r as K}from"./chunk-EDEZTJ5Y.js";import"./chunk-YWVDTYYJ.js";import{k as Q,m as k,n as P,o as L,q as U,r as q}from"./chunk-3IJEYNLI.js";import{Ab as b,Bb as E,Db as p,Eb as m,Fb as y,Lb as O,Ra as i,Sa as _,V as S,Vb as l,Wb as r,ab as M,da as h,ea as B,gb as f,hb as F,ib as c,mb as N,nb as n,ob as e,pb as o,sb as v,va as j,vb as g,wb as D,xb as C,yb as T}from"./chunk-NFVV6V22.js";var ne=["*",[["p-header"]],[["p-footer"]]],ae=["*","p-header","p-footer"];function le(t,u){t&1&&v(0)}function re(t,u){if(t&1&&(n(0,"div",8),C(1,1),f(2,le,1,0,"ng-container",6),e()),t&2){let a=g();i(2),c("ngTemplateOutlet",a.headerTemplate)}}function pe(t,u){t&1&&v(0)}function oe(t,u){if(t&1&&(n(0,"div",9),p(1),f(2,pe,1,0,"ng-container",6),e()),t&2){let a=g();i(),y(" ",a.header," "),i(),c("ngTemplateOutlet",a.titleTemplate)}}function me(t,u){t&1&&v(0)}function de(t,u){if(t&1&&(n(0,"div",10),p(1),f(2,me,1,0,"ng-container",6),e()),t&2){let a=g();i(),y(" ",a.subheader," "),i(),c("ngTemplateOutlet",a.subtitleTemplate)}}function se(t,u){t&1&&v(0)}function ce(t,u){t&1&&v(0)}function fe(t,u){if(t&1&&(n(0,"div",11),C(1,2),f(2,ce,1,0,"ng-container",6),e()),t&2){let a=g();i(2),c("ngTemplateOutlet",a.footerTemplate)}}var ee=(()=>{class t{el;header;subheader;set style(a){V.equals(this._style(),a)||this._style.set(a)}styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_style=M(null);constructor(a){this.el=a}ngAfterContentInit(){this.templates.forEach(a=>{switch(a.getType()){case"header":this.headerTemplate=a.template;break;case"title":this.titleTemplate=a.template;break;case"subtitle":this.subtitleTemplate=a.template;break;case"content":this.contentTemplate=a.template;break;case"footer":this.footerTemplate=a.template;break;default:this.contentTemplate=a.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(s){return new(s||t)(_(j))};static \u0275cmp=h({type:t,selectors:[["p-card"]],contentQueries:function(s,d,I){if(s&1&&(T(I,$,5),T(I,z,5),T(I,w,4)),s&2){let x;b(x=E())&&(d.headerFacet=x.first),b(x=E())&&(d.footerFacet=x.first),b(x=E())&&(d.templates=x)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:ae,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(s,d){s&1&&(D(ne),n(0,"div",0),f(1,re,3,1,"div",1),n(2,"div",2),f(3,oe,3,2,"div",3)(4,de,3,2,"div",4),n(5,"div",5),C(6),f(7,se,1,0,"ng-container",6),e(),f(8,fe,3,1,"div",7),e()()),s&2&&(N(d.styleClass),c("ngClass","p-card p-component")("ngStyle",d._style()),F("data-pc-name","card"),i(),c("ngIf",d.headerFacet||d.headerTemplate),i(2),c("ngIf",d.header||d.titleTemplate),i(),c("ngIf",d.subheader||d.subtitleTemplate),i(3),c("ngTemplateOutlet",d.contentTemplate),i(),c("ngIf",d.footerFacet||d.footerTemplate))},dependencies:[Q,k,L,P],styles:[`@layer primeng{.p-card-header img{width:100%}}
`],encapsulation:2,changeDetection:0})}return t})(),te=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=B({type:t});static \u0275inj=S({imports:[q,G]})}return t})();function xe(t,u){t&1&&(n(0,"div",31),o(1,"p-button",32)(2,"p-button",33),e())}var Ue=(()=>{class t{constructor(a,s){this.translate=a,this.translateLanService=s,this.translateLanService.changeLanguage$.subscribe(d=>this.translate.use(d)),console.log("Esto no traduce")}static{this.\u0275fac=function(s){return new(s||t)(_(R),_(A))}}static{this.\u0275cmp=h({type:t,selectors:[["app-users-create"]],standalone:!0,features:[O],decls:110,vars:71,consts:[[3,"header"],[1,"flex","flex-column","md:flex-row","sm:flex-row"],[1,"align-items-left","justify-content-top","pr-2"],[1,"flex","flex-column","md:flex-row","flex-row"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4"],["for","OwnerEmail",1,"w-15rem"],["pInputText","","type","text",1,"w-full"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","px-2"],["for","ServiceName",1,"w-15rem"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full","md:w-full"],["for","DirectPhone",1,"w-15rem"],[1,"flex","flex-column","flex-row","md:flex-row"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","pr-1"],["for","PublicPhone",1,"w-15rem"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","pl-1"],["for","ComEmail",1,"w-15rem"],["for","Web",1,"w-15rem"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","w-full"],[1,"w-full","md:w-6","flex","flex-column","align-items-left","justify-content-top","pl-2"],["for","CompName",1,"w-15rem"],["for","FirstName",1,"w-15rem"],["pInputText","","type","password",1,"w-full"],["for","LastName",1,"w-15rem"],[1,"flex","flex-column","align-items-left","justify-content-top","px-2"],["for","WherehouseName",1,"w-15rem"],["pInputText","","id","WherehouseName","type","text",1,"w-full"],["for","Type",1,"w-15rem"],["pInputText","","id","Type","type","text",1,"w-full"],["for","Country",1,"w-15rem"],["pInputText","","id","Country","type","text",1,"w-full"],["pTemplate","footer"],[1,"flex","gap-3","mt-1"],["label","Cancel","severity","secondary","styleClass","w-full",1,"w-full"],["label","Save","styleClass","w-full",1,"w-full"]],template:function(s,d){s&1&&(n(0,"p-card",0),l(1,"translate"),l(2,"uppercase"),n(3,"div",1)(4,"div",2)(5,"h6"),p(6),l(7,"translate"),l(8,"uppercase"),e(),n(9,"div",3)(10,"div",4)(11,"label",5),p(12),l(13,"translate"),e(),o(14,"input",6),e(),n(15,"div",7)(16,"label",5),p(17),l(18,"translate"),e(),o(19,"input",6),e(),n(20,"div",4)(21,"label",8),p(22),l(23,"translate"),e(),o(24,"input",6),e()(),n(25,"div",3)(26,"div",9)(27,"label",10),p(28),l(29,"translate"),e(),o(30,"input",6),e()(),n(31,"div",11)(32,"div",12)(33,"label",13),p(34),l(35,"translate"),e(),o(36,"input",6),e(),n(37,"div",14)(38,"label",15),p(39),l(40,"translate"),e(),o(41,"input",6),e()(),n(42,"div",3)(43,"div",4)(44,"label",16),p(45),l(46,"translate"),e(),o(47,"input",6),e(),n(48,"div",7)(49,"label",16),p(50),l(51,"translate"),e(),o(52,"input",6),e(),n(53,"div",4)(54,"label",16),p(55),l(56,"translate"),e(),o(57,"input",6),e()(),n(58,"div",11)(59,"div",17)(60,"label",16),p(61),l(62,"translate"),e(),o(63,"input",6),e()()(),n(64,"div",18)(65,"h6"),p(66),l(67,"translate"),l(68,"uppercase"),e(),n(69,"div",4)(70,"label",19),p(71),l(72,"translate"),e(),o(73,"input",6),e(),n(74,"div",4)(75,"label",20),p(76),l(77,"translate"),e(),o(78,"input",21),e(),n(79,"div",4)(80,"label",20),p(81),l(82,"translate"),e(),o(83,"input",21),e(),n(84,"div",4)(85,"label",22),p(86),l(87,"translate"),e(),o(88,"input",6),e()(),n(89,"div",23)(90,"h6"),p(91),l(92,"translate"),l(93,"uppercase"),e(),n(94,"div",4)(95,"label",24),p(96),l(97,"translate"),e(),o(98,"input",25),e(),n(99,"div",4)(100,"label",26),p(101),l(102,"translate"),e(),o(103,"input",27),e(),n(104,"div",4)(105,"label",28),p(106),l(107,"translate"),e(),o(108,"input",29),e()()(),f(109,xe,3,0,"ng-template",30),e()),s&2&&(c("header",r(2,23,r(1,21,"labels.register_employee"))),i(6),m(r(8,27,r(7,25,"user_employee.detail_people"))),i(6),m(r(13,29,"user_employee.ci")),i(5),m(r(18,31,"user_employee.ciExpedit")),i(5),m(r(23,33,"user_employee.ciComplement")),i(6),m(r(29,35,"user_employee.name")),i(6),y("",r(35,37,"user_employee.app"),"e"),i(5),m(r(40,39,"user_employee.apm")),i(6),m(r(46,41,"user_employee.sexo")),i(5),m(r(51,43,"user_employee.fnaci")),i(5),m(r(56,45,"user_employee.telefono")),i(6),m(r(62,47,"user_employee.email")),i(5),m(r(68,51,r(67,49,"user_employee.detail_user"))),i(5),m(r(72,53,"user_employee.username")),i(5),m(r(77,55,"user_employee.password")),i(5),m(r(82,57,"user_employee.reppit_password")),i(5),m(r(87,59,"user_employee.rol")),i(5),m(r(93,63,r(92,61,"user_employee.detail_employee"))),i(5),m(r(97,65,"user_employee.type")),i(5),m(r(102,67,"user_employee.cargo")),i(5),y("",r(107,69,"user_employee.salary"),"Country"))},dependencies:[te,ee,w,H,K,J,Y,X,Z,W,U]})}}return t})();export{Ue as default};
