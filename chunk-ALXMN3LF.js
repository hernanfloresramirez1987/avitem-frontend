import{a as Te,b as Ne,c as De,d as Pe,e as Me}from"./chunk-QICJ2XHG.js";import{a as Ee}from"./chunk-53ARNPTS.js";import{a as Ie,b as Ve}from"./chunk-OF4KQEBK.js";import{a as we}from"./chunk-QPDKSILO.js";import{b as Se,j as ye}from"./chunk-YOQYYWRA.js";import{b as Fe}from"./chunk-OVNQVQR5.js";import{a as _e,b as ve,c as be,d as xe,e as U}from"./chunk-PZTL2RAH.js";import{G as ce,J as me,K as ue,X as fe,Y as he,b as W,c as X,d as Z,e as ee,ea as ge,fa as Ce,g as te,h as A,j as ie,k as ae,m as ne,n as le,o as oe,p as re,q as se,s as pe,x as de}from"./chunk-GGYH7DSO.js";import"./chunk-4YRY4IP2.js";import{a as B,i as K,j as Q}from"./chunk-NM3HJ4DI.js";import{s as z,t as k}from"./chunk-JAFPLUWG.js";import{$ as P,Cb as S,Db as I,Gb as q,Mb as r,Nb as d,Sa as a,Ta as h,Tb as H,Ub as J,V as D,Wb as V,a as T,b as N,bb as O,dc as c,ea as R,ec as m,hb as v,jb as s,kb as Y,mb as L,oa as M,ob as C,pa as j,s as G,tb as n,ub as e,vb as g,zb as $}from"./chunk-PQPLRZS3.js";var ke=(()=>{class l{constructor(){this.#e=U.URL_API,this.http=P(B),this.getAllClients=()=>this.http.get(`${this.#e}clientes`)}#e;static{this.\u0275fac=function(o){return new(o||l)}}static{this.\u0275prov=D({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var Be=(()=>{class l{constructor(){this.#e=U.URL_API,this.http=P(B),this.postSaveVenta=t=>this.http.post(`${this.#e}ventas/register`,t)}#e;static{this.\u0275fac=function(o){return new(o||l)}}static{this.\u0275prov=D({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var Ue=()=>({width:"100%"}),Ge=()=>({width:"100%"}),Re=()=>["/inventory/products"];function Oe(l,_){l&1&&(n(0,"small",8),r(1,"Error en el Fecha de Compra."),e())}function Ye(l,_){l&1&&(n(0,"small",8),r(1,"Error en el Proveedor Seleccionado."),e())}function qe(l,_){l&1&&(n(0,"small",8),r(1,"Error en el Producto seleccionado."),e())}function He(l,_){l&1&&(n(0,"small",8),r(1,"Error en el Producto Seleccionado."),e())}function Je(l,_){l&1&&(n(0,"small",8),r(1,"Error en el Fecha de Compra."),e())}function ze(l,_){l&1&&(n(0,"small",8),r(1,"Error en el Precio de Compra."),e())}function Ke(l,_){l&1&&(n(0,"small",8),r(1,"Error en el Precio de Venta."),e())}function Qe(l,_){l&1&&(n(0,"tr")(1,"th",26),r(2,"No"),e(),n(3,"th",27),r(4,"Producto"),e(),n(5,"th",28),r(6,"Cantidad"),e(),n(7,"th",28),r(8,"Precio Unitario"),e(),n(9,"th",28),r(10,"Precio Total"),e(),n(11,"th",29),r(12,"Option"),e()())}function We(l,_){if(l&1){let t=$();n(0,"tr")(1,"td",30),r(2),e(),n(3,"td"),r(4),e(),n(5,"td",30),r(6),e(),n(7,"td",30),r(8),e(),n(9,"td",30),r(10),e(),n(11,"td",31)(12,"p-buttonGroup")(13,"p-button",21),c(14,"translate"),S("click",function(){let i=M(t).$implicit,u=I();return j(u.deleteDetail(i))}),e()()()()}if(l&2){let t=_.$implicit,o=_.rowIndex,i=I();a(2),d(o+1),a(),Y("background-color",i.getColorBackground(t.color))("color",i.getColor(t.color)),a(),d(t.name_product),a(2),d(t.cantidad),a(2),d(t.precioUnitario),a(2),d(t.cantidad*t.precioUnitario),a(3),s("title",m(14,10,"label.delet_detall"))}}function Xe(l,_){if(l&1){let t=$();n(0,"div",32),g(1,"p-button",33),n(2,"p-button",34),S("click",function(){M(t);let i=I();return j(i.cleanAll())}),e(),n(3,"p-button",35),S("click",function(){M(t);let i=I();return j(i.submitSales())}),e()()}if(l&2){let t=I();a(),s("routerLink",V(2,Re)),a(2),s("disabled",!t.salesForm.valid)}}var Ot=(()=>{class l{constructor(t,o,i,u,y,b,x,w,F,E,Le){this.confirmationServ=t,this.clientServ=o,this.employeesServ=i,this.ventasServ=u,this.productosServ=y,this.translate=b,this.translateLanService=x,this.fb=w,this.router=F,this.datePipe=E,this.toastServ=Le,this.detailView=[],this.stateInputs=O(!0),this.currentDate=this.datePipe.transform(new Date,"dd/MM/yyyy"),this.total=0,this.totalVenta=0,this.translateLanService.changeLanguage$.subscribe(f=>this.translate.use(f)),this.salesForm=this.fb.group({fechaVenta:[this.currentDate],tokenSIN:[""],id_cliente:["",[A.required]],id_empleado:["",[A.required]],cantidad:[""],precioUnitario:[""],precioUnitarioVenta:[""],id_producto:[""]}),this.productosServ.postProductsGet().subscribe(f=>{this.productos=f.map(p=>N(T({},p),{displayProduct:`${p.nombre} (${p.color}) - ${p.unidadMedida}`})),this.stateInputs.set(!1)}),this.clientServ.getAllClients().subscribe({next:f=>{console.log(f),this.clientes=f.map(p=>N(T({},p),{displayCliente:`${p.nombre} (${p.app}) ${p.apm}`}))},error:f=>console.log(f)}),this.employeesServ.postEmployees(null).pipe(G(f=>({data:Array.isArray(f)?[...f]:[],page:0,rows:0,total_records:0,loaded:!0,loading:!1,error:null}))).subscribe(f=>{console.log(f),this.empleados=f.data.map(p=>N(T({},p),{displayEmpleado:`${p.nombre} ${p.app} ${p.apm}, ${p.idcargo}`})),this.stateInputs.set(!1)})}asignarValores(){let t=this.salesForm.value;return console.log(String(this.datePipe.transform(this.getLastDateOfYear(new Date().getFullYear()),"yyyy-MM-dd"))),this.ventasRegister={fechaVenta:String(this.datePipe.transform(new Date,"yyyy-MM-dd")),total:this.total,id_cliente:t.id_cliente.id,id_empleado:t.id_empleado.id,confactura:1,token_SIM:"tokenSIM",detalle:this.detailView.map(o=>(console.log(o),{cantidad:o.cantidad,precioUnitario:o.precioUnitario,id_producto:o.id_producto}))},console.log(`console.log(this.comprasRegister);
 `,this.ventasRegister),this.ventasRegister}getLastDateOfYear(t){return new Date(t,11,31)}notifySuccess(){this.toastServ.showSuccess("Operation Successful","The action was completed successfully.")}notifyError(){this.toastServ.showError("Operation Failed","An error occurred while processing the action.")}getColorBackground(t){switch(t){case"Natural":return"#cccccc";case"Champan":return"#FBE7C6";case"Negro":return"#000000";case"Madera":return"#8B4513";default:return"#FFFFFF"}}getColor(t){switch(t){case"Natural":return"#000000";case"Champan":return"#000000";case"Negro":return"#FFFFFF";case"Madera":return"#FFFFFF";default:return"#FFFFFF"}}deleteDetail(t){this.detailView=this.detailView.filter(o=>o!==t),this.funcTotal(),this.cleanForms()}changeTotalVenta(){}addDetail(){if(!this.salesForm.value.id_producto){alert("Debe de seleccionar producto para agregarlo. Por favor seleccione uno.");return}let t=Number(this.salesForm.value.id_producto.id);if(this.detailView.some(i=>i.id_producto===t||this.salesForm.value.id_producto=="")){alert("Este producto ya ha sido agregado. Por favor selecciona otro.");return}this.detailView.push({name_product:this.salesForm.value.id_producto.nombre,color:this.salesForm.value.id_producto.color,cantidad:Number(this.salesForm.value.cantidad),precioUnitario:Number(this.salesForm.value.precioUnitario),id_producto:Number(this.salesForm.value.id_producto.id)}),console.log(this.detailView),this.funcTotal(),this.cleanForms()}updateData(){console.log("updateData() { } ")}funcTotal(){this.total=this.detailView.reduce((t,o)=>{let i=Number(o.cantidad)||0,u=Number(o.precioUnitario)||0;return t+i*u},0)}cleanForms(){this.salesForm.patchValue({total:this.total,id_producto:"",cantidad:"",precioUnitario:"",precioVenta:""},{emitEvent:!1}),this.totalVenta=0}cleanAll(){}submitSales(){if(this.salesForm.valid){let t=this.asignarValores();console.log(t),t.detalle=JSON.stringify(t.detalle),this.confirm(t)}else console.error("Formulario inv\xE1lido")}confirm(t){this.confirmationServ.confirm({message:"Are you sure you want to perform this action?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.ventasServ.postSaveVenta(t).subscribe({next:o=>{console.log("Action confirmed!"),o.CodigoEstado==="201"?(this.notifySuccess(),setTimeout(()=>{console.log("Venta registrada correctamente"),this.router.navigate(["/transactions/ventas"])},3e3)):console.log(o)},error:o=>{console.error("Error al registrar la compra:",o)}})},reject:()=>{console.log("Action rejected!")}})}static{this.\u0275fac=function(o){return new(o||l)(h(de),h(ke),h(we),h(Be),h(Ee),h(W),h(ee),h(se),h(K),h(k),h(Me))}}static{this.\u0275cmp=R({type:l,selectors:[["app-sale-create"]],standalone:!0,features:[H([k]),J],decls:73,vars:68,consts:[[3,"formGroup"],[3,"header"],[1,"flex","flex-column","md:flex-row","sm:flex-row","w-full"],[1,"align-items-left","justify-content-top","w-full"],[1,"flex","flex-column","md:flex-row","gap-2","w-full"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full"],[1,"w-25rem"],["dateFormat","dd/mm/yy","type","text","styleClass","w-full",1,"w-full",3,"formControlName"],[2,"color","red"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full","px-2"],["pInputText","","type","text",1,"w-full",3,"value","disabled"],["optionLabel","displayCliente","styleClass","w-full","placeholder","Seleccionar un Cliente",1,"w-full","lg:w-full",3,"formControlName","options"],["optionLabel","displayEmpleado","placeholder","Seleccionar Empleado","styleClass","w-full",1,"w-full","lg:w-full",3,"formControlName","options"],[1,"flex","flex-column","md:flex-row","flex-row"],["optionLabel","displayProduct","styleClass","w-full","placeholder","Seleccionar un producto",1,"w-full","lg:w-full",3,"formControlName","options"],["pInputText","","type","number",1,"w-full",3,"change","formControlName"],["pInputText","","type","number","disabled","",1,"w-full",3,"value"],[1,"justify-content-center","align-items-center"],[1,""],[1,"flex","justify-content-between"],["icon","pi pi-plus","severity","primary",3,"click","title"],["icon","pi pi-trash","severity","danger",3,"click","title"],[3,"value","tableStyle","styleClass"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],[2,"width","6%","text-align","right"],[2,"width","40%"],[2,"width","12%","text-align","right"],[2,"width","6%"],[2,"text-align","right"],[1,"flex","flex-wrap","justify-content-left"],[1,"flex","gap-3","mt-1"],["label","Cancel","severity","danger","styleClass","w-full",1,"w-full",3,"routerLink"],["label","Limpiar","severity","secondary","styleClass","w-full",1,"w-full",3,"click"],["label","Save","styleClass","w-full",1,"w-full",3,"click","disabled"]],template:function(o,i){if(o&1&&(g(0,"p-toast")(1,"p-confirmDialog"),n(2,"form",0)(3,"p-card",1),c(4,"translate"),c(5,"uppercase"),n(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"label",6),r(11),c(12,"translate"),e(),g(13,"p-calendar",7),v(14,Oe,2,0,"small",8),e(),n(15,"div",9)(16,"label",6),r(17),c(18,"translate"),e(),g(19,"input",10),e(),n(20,"div",9)(21,"label",6),r(22),c(23,"translate"),e(),g(24,"p-dropdown",11),v(25,Ye,2,0,"small",8),e(),n(26,"div",5)(27,"label",6),r(28),c(29,"translate"),e(),g(30,"p-dropdown",12),v(31,qe,2,0,"small",8),e()(),n(32,"div",13)(33,"div",9)(34,"label",6),r(35),c(36,"translate"),e(),g(37,"p-dropdown",14),v(38,He,2,0,"small",8),e(),n(39,"div",9)(40,"label",6),r(41),c(42,"translate"),e(),n(43,"input",15),S("change",function(){return i.changeTotalVenta()}),e(),v(44,Je,2,0,"small",8),e(),n(45,"div",9)(46,"label",6),r(47),c(48,"translate"),e(),n(49,"input",15),S("change",function(){return i.changeTotalVenta()}),e(),v(50,ze,2,0,"small",8),e(),n(51,"div",9)(52,"label",6),r(53),c(54,"translate"),e(),g(55,"input",16),v(56,Ke,2,0,"small",8),e(),n(57,"div",17)(58,"label",18),r(59),c(60,"translate"),e(),n(61,"div",19)(62,"p-buttonGroup")(63,"p-button",20),c(64,"translate"),S("click",function(){return i.addDetail()}),e(),n(65,"p-button",21),c(66,"translate"),S("click",function(){return i.updateData()}),e()()()()(),n(67,"h4"),r(68,"Detalles"),e(),n(69,"p-table",22),v(70,Qe,13,0,"ng-template",23)(71,We,15,12,"ng-template",24),e()()(),v(72,Xe,4,3,"ng-template",25),e()()),o&2){let u,y,b,x,w,F,E;a(2),s("formGroup",i.salesForm),a(),s("header",m(5,41,m(4,39,"labels.register_sales"))),a(8),d(m(12,43,"sales.fechaVenta")),a(2),s("formControlName","fechaVenta"),a(),C(14,(u=i.salesForm.get("fechaVenta"))!=null&&u.invalid&&((u=i.salesForm.get("fechaVenta"))!=null&&u.touched)?14:-1),a(3),d(m(18,45,"sales.precio_total")),a(2),s("value",i.total)("disabled",!0),a(3),d(m(23,47,"sales.id_cliente")),a(2),L(V(65,Ue)),s("formControlName","id_cliente")("options",i.clientes),a(),C(25,(y=i.salesForm.get("id_cliente"))!=null&&y.invalid&&((y=i.salesForm.get("id_cliente"))!=null&&y.touched)?25:-1),a(3),d(m(29,49,"sales.id_empleado")),a(2),s("formControlName","id_empleado")("options",i.empleados),a(),C(31,(b=i.salesForm.get("id_empleado"))!=null&&b.invalid&&((b=i.salesForm.get("id_empleado"))!=null&&b.touched)?31:-1),a(4),d(m(36,51,"sales.id_producto")),a(2),L(V(66,Ue)),s("formControlName","id_producto")("options",i.productos),a(),C(38,(x=i.salesForm.get("id_producto"))!=null&&x.invalid&&((x=i.salesForm.get("id_producto"))!=null&&x.touched)?38:-1),a(3),d(m(42,53,"sales.cantidad")),a(2),s("formControlName","cantidad"),a(),C(44,(w=i.salesForm.get("cantidad"))!=null&&w.invalid&&((w=i.salesForm.get("cantidad"))!=null&&w.touched)?44:-1),a(3),d(m(48,55,"sales.precioVenta")),a(2),s("formControlName","precioUnitario"),a(),C(50,(F=i.salesForm.get("precioUnitario"))!=null&&F.invalid&&((F=i.salesForm.get("precioUnitario"))!=null&&F.touched)?50:-1),a(3),d(m(54,57,"sales.totalVenta")),a(2),q("value",i.totalVenta),a(),C(56,(E=i.salesForm.get("totaCompra"))!=null&&E.invalid&&((E=i.salesForm.get("totaCompra"))!=null&&E.touched)?56:-1),a(3),d(m(60,59,"sales.options")),a(4),s("title",m(64,61,"label.add_detall")),a(2),s("title",m(66,63,"label.delet_detall")),a(4),s("value",i.detailView)("tableStyle",V(67,Ge))("styleClass","p-datatable-sm")}},dependencies:[pe,ne,te,le,ie,ae,oe,re,xe,be,ce,Z,X,ue,me,Ce,ge,Fe,he,fe,z,ve,_e,Ne,Te,ye,Se,Ve,Ie,Pe,De,Q]})}}return l})();export{Ot as default};
