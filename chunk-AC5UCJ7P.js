import{a as re,b as oe,c as ae}from"./chunk-66VDLTXG.js";import{b as Z,c as ne}from"./chunk-B5EANN4G.js";import{C as O,F as Q,G as W,T as X,U as Y,aa as ee,b as k,ba as te,c as q,da as ie,e as A,g as G,h,j as R,k as U,m as $,n as H,o as z,p as J,r as K}from"./chunk-IE3H7VCA.js";import{a as D,i as V}from"./chunk-CIYWZG3H.js";import"./chunk-NMGI7OHJ.js";import{s as L}from"./chunk-DQQKSOUK.js";import{Ab as B,Bb as S,Kb as o,Lb as g,Mb as b,Sa as t,Sb as j,Ta as x,V as E,_ as P,bc as a,cc as l,ea as F,hb as s,jb as d,oa as T,ob as f,pa as M,tb as r,ub as i,vb as u,zb as N}from"./chunk-2SHBWNGG.js";var le=(()=>{class e{#e;constructor(p){this.http=p,this.#e=ne.URL_API,this.getAll=()=>this.http.get(`${this.#e}categorias`)}static{this.\u0275fac=function(m){return new(m||e)(P(D))}}static{this.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function me(e,v){e&1&&(r(0,"span"),o(1,"Error en el Nombre."),i())}function ce(e,v){e&1&&(r(0,"span"),o(1,"Error en el Nombre."),i())}function se(e,v){e&1&&(r(0,"span"),o(1),a(2,"translate"),i()),e&2&&(t(),b("Error en el ",l(2,1,"inventory.fechaIngreso"),"."))}function ue(e,v){e&1&&(r(0,"span"),o(1),a(2,"translate"),i()),e&2&&(t(),b("Error en el ",l(2,1,"inventory.unidadMedida"),"."))}function fe(e,v){e&1&&(r(0,"span"),o(1),a(2,"translate"),i()),e&2&&(t(),b("Error en el ",l(2,1,"inventory.codigoProducto"),"."))}function ge(e,v){e&1&&(r(0,"span"),o(1),a(2,"translate"),i()),e&2&&(t(),b("Error en el ",l(2,1,"inventory.id_categoria"),"."))}function ve(e,v){if(e&1){let p=N();r(0,"div",17),u(1,"p-button",18),r(2,"p-button",19),B("click",function(){T(p);let n=S();return M(n.saveProcto())}),i()()}if(e&2){let p=S();t(2),d("disabled",!p.registroForm.valid)}}var ke=(()=>{class e{constructor(p,m,n,C,_){this.categoriasServ=p,this.translate=m,this.translateLanService=n,this.fb=C,this.router=_,this.translateLanService.changeLanguage$.subscribe(c=>this.translate.use(c)),this.registroForm=this.fb.group({nombre:["",[h.required]],descripcion:[""],fechaIngreso:["",h.required],unidadMedida:["",h.required],codigoProducto:["",h.required],id_categoria:["",h.required]}),this.categoriasServ.getAll().subscribe(c=>{this.categorias=c})}saveProcto(){}static{this.\u0275fac=function(m){return new(m||e)(x(le),x(k),x(A),x(J),x(V))}}static{this.\u0275cmp=F({type:e,selectors:[["app-product-create"]],standalone:!0,features:[j],decls:44,vars:37,consts:[[3,"formGroup"],[3,"header"],[1,"align-items-left","justify-content-top","pr-2"],[1,"flex","flex-column","md:flex-row","flex-row"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full"],["for","nombre",1,"w-20rem"],["pInputText","","type","text",1,"w-full",3,"formControlName"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full","px-2"],["for","description",1,"w-20rem"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","md:w-full"],["for","fechaIngreso",1,"w-15rem"],[1,"flex","flex-column","flex-row","md:flex-row"],["for","unidadMedida",1,"w-15rem"],["for","codigoProducto",1,"w-15rem"],["for","LastName",1,"w-15rem"],["optionLabel","nombre","styleClass","w-full","placeholder","Select una Categoria",1,"w-full","lg:w-full",3,"formControlName","options"],["pTemplate","footer"],[1,"flex","gap-3","mt-1"],["label","Cancel","severity","secondary","styleClass","w-full",1,"w-full"],["label","Save","styleClass","w-full",1,"w-full",3,"click","disabled"]],template:function(m,n){if(m&1&&(r(0,"form",0)(1,"p-card",1),a(2,"translate"),a(3,"uppercase"),r(4,"div",2)(5,"div",3)(6,"div",4)(7,"label",5),o(8),a(9,"translate"),i(),u(10,"input",6),s(11,me,2,0,"span"),i(),r(12,"div",7)(13,"label",8),o(14),a(15,"translate"),i(),u(16,"input",6),s(17,ce,2,0,"span"),i(),r(18,"div",9)(19,"label",10),o(20),a(21,"translate"),i(),u(22,"input",6),s(23,se,3,3,"span"),i()(),r(24,"div",11)(25,"div",4)(26,"label",12),o(27),a(28,"translate"),i(),u(29,"input",6),s(30,ue,3,3,"span"),i(),r(31,"div",7)(32,"label",13),o(33),a(34,"translate"),i(),u(35,"input",6),s(36,fe,3,3,"span"),i(),r(37,"div",4)(38,"label",14),o(39),a(40,"translate"),i(),u(41,"p-dropdown",15),s(42,ge,3,3,"span"),i()()(),s(43,ve,3,1,"ng-template",16),i()()),m&2){let C,_,c,y,w,I;d("formGroup",n.registroForm),t(),d("header",l(3,23,l(2,21,"labels.register_product"))),t(7),g(l(9,25,"inventory.nombre")),t(2),d("formControlName","nombre"),t(),f(11,(C=n.registroForm.get("nombre"))!=null&&C.invalid&&((C=n.registroForm.get("nombre"))!=null&&C.touched)?11:-1),t(3),g(l(15,27,"inventory.description")),t(2),d("formControlName","descripcion"),t(),f(17,(_=n.registroForm.get("description"))!=null&&_.invalid&&((_=n.registroForm.get("description"))!=null&&_.touched)?17:-1),t(3),g(l(21,29,"inventory.fechaIngreso")),t(2),d("formControlName","fechaIngreso"),t(),f(23,(c=n.registroForm.get("fechaIngreso"))!=null&&c.invalid&&((c=n.registroForm.get("fechaIngreso"))!=null&&c.touched)?23:-1),t(4),g(l(28,31,"inventory.unidadMedida")),t(2),d("formControlName","unidadMedida"),t(),f(30,(y=n.registroForm.get("unidadMedida"))!=null&&y.invalid&&((y=n.registroForm.get("unidadMedida"))!=null&&y.touched)?30:-1),t(3),g(l(34,33,"inventory.codigoProducto")),t(2),d("formControlName","codigoProducto"),t(),f(36,(w=n.registroForm.get("codigoProducto"))!=null&&w.invalid&&((w=n.registroForm.get("codigoProducto"))!=null&&w.touched)?36:-1),t(3),g(l(40,35,"inventory.id_categoria")),t(2),d("formControlName","id_categoria")("options",n.categorias),t(),f(42,(I=n.registroForm.get("id_categoria"))!=null&&I.invalid&&((I=n.registroForm.get("id_categoria"))!=null&&I.touched)?42:-1)}},dependencies:[oe,re,O,K,$,G,R,U,H,z,W,Q,te,ee,Y,X,Z,ae,ie,q,L]})}}return e})();export{ke as default};
