import{a as te,b as ie,c as ne}from"./chunk-66VDLTXG.js";import{b as X}from"./chunk-UNDUGNLZ.js";import{C as J,F as K,G as O,T as Q,U as W,aa as Y,b as D,ba as Z,c as V,da as ee,e as q,g as k,h as C,j as G,k as R,m as A,n as U,o as $,p as z,r as H}from"./chunk-IE3H7VCA.js";import{i as L}from"./chunk-CIYWZG3H.js";import"./chunk-NMGI7OHJ.js";import{s as j}from"./chunk-DQQKSOUK.js";import{Ab as M,Bb as I,Kb as r,Lb as f,Mb as y,Sa as e,Sb as N,Ta as x,Ub as B,bc as a,cc as l,ea as S,hb as d,jb as p,oa as F,ob as u,pa as P,tb as o,ub as i,vb as m,zb as T}from"./chunk-2SHBWNGG.js";var oe=()=>[];function re(t,g){t&1&&(o(0,"span"),r(1,"Error en el Nombre."),i())}function ae(t,g){t&1&&(o(0,"span"),r(1,"Error en el Nombre."),i())}function le(t,g){t&1&&(o(0,"span"),r(1),a(2,"translate"),i()),t&2&&(e(),y("Error en el ",l(2,1,"inventory.fechaIngreso"),"."))}function pe(t,g){t&1&&(o(0,"span"),r(1),a(2,"translate"),i()),t&2&&(e(),y("Error en el ",l(2,1,"inventory.unidadMedida"),"."))}function de(t,g){t&1&&(o(0,"span"),r(1),a(2,"translate"),i()),t&2&&(e(),y("Error en el ",l(2,1,"inventory.codigoProducto"),"."))}function me(t,g){t&1&&(o(0,"span"),r(1),a(2,"translate"),i()),t&2&&(e(),y("Error en el ",l(2,1,"inventory.id_categoria"),"."))}function ce(t,g){if(t&1){let c=T();o(0,"div",17),m(1,"p-button",18),o(2,"p-button",19),M("click",function(){F(c);let n=I();return P(n.saveProcto())}),i()()}if(t&2){let c=I();e(2),p("disabled",!c.registroForm.valid)}}var Ne=(()=>{class t{constructor(c,s,n,v){this.translate=c,this.translateLanService=s,this.fb=n,this.router=v,this.translateLanService.changeLanguage$.subscribe(_=>this.translate.use(_)),this.registroForm=this.fb.group({nombre:["",[C.required]],descripcion:[""],fechaIngreso:["",C.required],unidadMedida:["",C.required],codigoProducto:["",C.required],id_categoria:["",C.required]})}saveProcto(){}static{this.\u0275fac=function(s){return new(s||t)(x(D),x(q),x(z),x(L))}}static{this.\u0275cmp=S({type:t,selectors:[["app-product-create"]],standalone:!0,features:[N],decls:44,vars:38,consts:[[3,"formGroup"],[3,"header"],[1,"align-items-left","justify-content-top","pr-2"],[1,"flex","flex-column","md:flex-row","flex-row"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full"],["for","nombre",1,"w-20rem"],["pInputText","","type","text",1,"w-full",3,"formControlName"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full","px-2"],["for","description",1,"w-20rem"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","md:w-full"],["for","fechaIngreso",1,"w-15rem"],[1,"flex","flex-column","flex-row","md:flex-row"],["for","unidadMedida",1,"w-15rem"],["for","codigoProducto",1,"w-15rem"],["for","LastName",1,"w-15rem"],["optionLabel","name","styleClass","w-full","placeholder","Select una Categoria",1,"w-full","lg:w-full",3,"formControlName","options"],["pTemplate","footer"],[1,"flex","gap-3","mt-1"],["label","Cancel","severity","secondary","styleClass","w-full",1,"w-full"],["label","Save","styleClass","w-full",1,"w-full",3,"click","disabled"]],template:function(s,n){if(s&1&&(o(0,"form",0)(1,"p-card",1),a(2,"translate"),a(3,"uppercase"),o(4,"div",2)(5,"div",3)(6,"div",4)(7,"label",5),r(8),a(9,"translate"),i(),m(10,"input",6),d(11,re,2,0,"span"),i(),o(12,"div",7)(13,"label",8),r(14),a(15,"translate"),i(),m(16,"input",6),d(17,ae,2,0,"span"),i(),o(18,"div",9)(19,"label",10),r(20),a(21,"translate"),i(),m(22,"input",6),d(23,le,3,3,"span"),i()(),o(24,"div",11)(25,"div",4)(26,"label",12),r(27),a(28,"translate"),i(),m(29,"input",6),d(30,pe,3,3,"span"),i(),o(31,"div",7)(32,"label",13),r(33),a(34,"translate"),i(),m(35,"input",6),d(36,de,3,3,"span"),i(),o(37,"div",4)(38,"label",14),r(39),a(40,"translate"),i(),m(41,"p-dropdown",15),d(42,me,3,3,"span"),i()()(),d(43,ce,3,1,"ng-template",16),i()()),s&2){let v,_,b,w,h,E;p("formGroup",n.registroForm),e(),p("header",l(3,23,l(2,21,"labels.register_product"))),e(7),f(l(9,25,"inventory.nombre")),e(2),p("formControlName","nombre"),e(),u(11,(v=n.registroForm.get("nombre"))!=null&&v.invalid&&((v=n.registroForm.get("nombre"))!=null&&v.touched)?11:-1),e(3),f(l(15,27,"inventory.description")),e(2),p("formControlName","descripcion"),e(),u(17,(_=n.registroForm.get("description"))!=null&&_.invalid&&((_=n.registroForm.get("description"))!=null&&_.touched)?17:-1),e(3),f(l(21,29,"inventory.fechaIngreso")),e(2),p("formControlName","fechaIngreso"),e(),u(23,(b=n.registroForm.get("fechaIngreso"))!=null&&b.invalid&&((b=n.registroForm.get("fechaIngreso"))!=null&&b.touched)?23:-1),e(4),f(l(28,31,"inventory.unidadMedida")),e(2),p("formControlName","unidadMedida"),e(),u(30,(w=n.registroForm.get("unidadMedida"))!=null&&w.invalid&&((w=n.registroForm.get("unidadMedida"))!=null&&w.touched)?30:-1),e(3),f(l(34,33,"inventory.codigoProducto")),e(2),p("formControlName","codigoProducto"),e(),u(36,(h=n.registroForm.get("codigoProducto"))!=null&&h.invalid&&((h=n.registroForm.get("codigoProducto"))!=null&&h.touched)?36:-1),e(3),f(l(40,35,"inventory.id_categoria")),e(2),p("formControlName","id_categoria")("options",B(37,oe)),e(),u(42,(E=n.registroForm.get("id_categoria"))!=null&&E.invalid&&((E=n.registroForm.get("id_categoria"))!=null&&E.touched)?42:-1)}},dependencies:[ie,te,J,H,A,k,G,R,U,$,O,K,Z,Y,W,Q,X,ne,ee,V,j]})}}return t})();export{Ne as default};
