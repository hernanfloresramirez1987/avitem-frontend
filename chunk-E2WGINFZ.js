import{b as y,c as r}from"./chunk-G3NPY3FS.js";import"./chunk-KMTJYQVB.js";import{a as w,b as T}from"./chunk-JI2D5FUO.js";import{f as C,k as S}from"./chunk-3YQGU6DU.js";import"./chunk-QHXP6WP5.js";import{G as z,H as D}from"./chunk-VGPVKNXR.js";import"./chunk-NMGI7OHJ.js";import"./chunk-BGDQL7ML.js";import"./chunk-RFNYDZMX.js";import"./chunk-SDCDJF6I.js";import{Cb as v,Nb as s,Ta as n,Ua as a,Ub as b,Vb as g,ab as h,d as u,da as f,jb as l,tb as o,ub as i,vb as p}from"./chunk-I66JML2L.js";var m=class d{constructor(e,t){this.tipoempleadoService=e;this.router=t;this.loadTipoEmpleado()}itemsTipoempleado=h([]);loadTipoEmpleado(){return u(this,null,function*(){yield this.tipoempleadoService.getAll().subscribe({next:e=>{console.log(e),this.itemsTipoempleado.set(e)},error:e=>{console.log(e)}})})}goDashboard=()=>this.router.navigate(["/dashboard"]);static \u0275fac=function(t){return new(t||d)(a(r),a(C))};static \u0275cmp=f({type:d,selectors:[["app-authorization"]],standalone:!0,features:[b([r]),g],decls:10,vars:2,consts:[[2,"display","flex","justify-content","center","align-items","center","flex-direction","column"],["src","https://johajuli.files.wordpress.com/2016/05/defineroles.jpg?w=640","alt","Imagen",2,"width","25%"],[1,"mb-2"],[1,"p-float-label","pb-2"],["optionLabel","nombre","styleClass","w-full",3,"options"],["for","idcargo"],["label","Acceder","styleClass","w-full",3,"onClick","raised"]],template:function(t,c){t&1&&(o(0,"div",0),p(1,"img",1),o(2,"div",2)(3,"h4"),s(4,"Con qu\xE9 rol desea ingresar"),i(),o(5,"span",3),p(6,"p-dropdown",4),o(7,"label",5),s(8,"Select Rol"),i()(),o(9,"p-button",6),v("onClick",function(){return c.goDashboard()}),i()()()),t&2&&(n(6),l("options",c.itemsTipoempleado()),n(3),l("raised",!0))},dependencies:[S,y,T,w,D,z]})};export{m as default};
