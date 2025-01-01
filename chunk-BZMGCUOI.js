import{a as fe}from"./chunk-FO4ZYBBL.js";import{a as ge,b as Ce,c as _e,d as Ee}from"./chunk-PMFKEO3L.js";import{a as ve,b as xe,c as we}from"./chunk-66VDLTXG.js";import{a as re,b as le}from"./chunk-IKOPYAAT.js";import{a as se,b as me}from"./chunk-B5EANN4G.js";import{C as te,F as ie,G as ne,S as ae,T as oe,U as pe,aa as de,b as A,ba as ue,c as W,da as ce,e as z,g as H,h as u,j as J,k as K,m as Q,n as X,o as Y,p as Z,r as ee}from"./chunk-IE3H7VCA.js";import{i as $}from"./chunk-CIYWZG3H.js";import"./chunk-NMGI7OHJ.js";import{s as O}from"./chunk-DQQKSOUK.js";import{Ab as T,Bb as F,D as j,Kb as p,Lb as d,Mb as g,Sa as e,Sb as P,Ta as w,Ub as R,bc as a,cc as o,ea as U,hb as x,jb as s,mb as q,oa as M,ob as C,pa as k,pb as V,rb as D,sb as L,tb as r,ub as t,vb as m,zb as G}from"./chunk-2SHBWNGG.js";var ye=()=>({width:"100%"});function be(i,f){i&1&&(r(0,"span"),p(1,"Error en el CI."),t())}function he(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.ciExpedit"),"."))}function Ie(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.name"),"."))}function Se(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.app"),"."))}function Be(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.apm"),"."))}function Ne(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.direccion"),"."))}function Te(i,f){if(i&1&&(m(0,"p-radioButton",42),r(1,"label",43),p(2),t()),i&2){let n=f.$implicit;s("inputId",n.key)("value",n)("formControlName","sexo"),e(),s("for",n.key),e(),d(n.name)}}function Fe(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.fnaci"),"."))}function je(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.email"),"."))}function Ue(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.username"),"."))}function Me(i,f){i&1&&(r(0,"span"),p(1),a(2,"translate"),t()),i&2&&(e(),g("Error en el ",o(2,1,"users.password"),"."))}function ke(i,f){if(i&1){let n=G();r(0,"div",44),m(1,"p-button",45),r(2,"p-button",46),T("click",function(){M(n);let l=F();return k(l.saveEmployee())}),t()()}if(i&2){let n=F();e(2),s("disabled",!n.registroForm.valid)}}var st=(()=>{class i{constructor(n,v,l,_,E,y){this.employeeServ=n,this.usersServ=v,this.translate=l,this.translateLanService=_,this.fb=E,this.router=y,this.checkComplementCI=!0,this.translateLanService.changeLanguage$.subscribe(c=>this.translate.use(c)),this.usersServ.getExpedidoOptions().subscribe(c=>this.expedidoOptions=c),this.usersServ.getSexo().subscribe(c=>this.sexo=c),this.usersServ.getTipo().subscribe(c=>this.tipo=c),this.usersServ.getCargo().subscribe(c=>this.cargo=c),this.usersServ.getRol().subscribe(c=>this.rol=c),this.registroForm=this.fb.group({ci:["",[u.required,u.pattern(/^[0-9]{6,10}$/)]],ciExpedit:["",[u.required]],ciComplement:[""],nombre:["",u.required],app:["",u.required],apm:[""],sexo:["",u.required],fNaci:["",u.required],direccion:["",u.required],telefono:["",[]],email:["",[u.required,u.email]],idTipo:[,[u.required]],idCargo:[,[u.required]],fechaIngreso:[new Date,u.required],salario:[""],username:["",[u.required,u.minLength(3)]],rol:["",u.required],password:["",[u.required,u.minLength(8)]],reppit_password:["",u.required]},{validators:this.passwordMatchValidator})}passwordMatchValidator(n){let v=n.get("password")?.value,l=n.get("reppit_password")?.value;return v===l?null:{passwordsMismatch:!0}}ngOnInit(){this.registroForm.valueChanges.pipe(j(5e3)).subscribe(n=>{console.log("Errores:",n.errors);for(let v in this.registroForm.controls)console.log(`${v}:`,this.registroForm.get(v)?.errors)})}saveEmployee(){console.log(this.asignarValores()),this.employeeServ.postEmployee(this.asignarValores()).subscribe(n=>{n.CodigoEstado==="201"&&this.router.navigate(["users/employees"])})}asignarValores(){let n=this.registroForm.value;return this.employeRegister={u_username:n.username,u_password:n.password,u_rol:n.rol.code,p_ci:n.ci,p_ciExpedit:n.ciExpedit.code,p_ciComplement:n.ciComplement,p_nombre:n.nombre,p_app:n.app,p_apm:n.apm,p_sexo:n.sexo.key,p_fnaci:n.fNaci,p_direccion:n.direccion,p_telefono:n.telefono,p_email:n.email,e_idtipo:n.idTipo.code,e_idcargo:n.idCargo.code,e_fing:n.fechaIngreso,e_salario:n.salario}}static{this.\u0275fac=function(v){return new(v||i)(w(fe),w(Ee),w(A),w(z),w(Z),w($))}}static{this.\u0275cmp=U({type:i,selectors:[["app-users-create"]],standalone:!0,features:[P],decls:127,vars:106,consts:[[3,"formGroup"],[3,"header"],[1,"flex","flex-column","md:flex-row","sm:flex-row"],[1,"align-items-left","justify-content-top","pr-2"],[1,"flex","flex-column","md:flex-row","flex-row"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full"],["for","ci",1,"w-20rem"],["pInputText","","type","text",1,"w-full",3,"formControlName"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","px-2","pb-4"],["for","ServiceName",1,"w-15rem"],["type","text","pInputText","","placeholder","complemento",3,"disabled"],["type","button","pButton","","icon","pi pi-check",1,"p-button-primary",3,"click"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full","w-full"],["for","expedition",1,"w-15rem"],["optionLabel","name","styleClass","w-full","placeholder","Select a Extension",1,"w-full","lg:w-full",3,"formControlName","options"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","lg:w-full","md:w-full"],["for","DirectPhone",1,"w-15rem"],[1,"flex","flex-column","flex-row","md:flex-row"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","pr-1"],["for","PublicPhone",1,"w-15rem"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","pl-1"],["for","apm",1,"w-15rem"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","w-full"],["for","Web",1,"w-15rem"],["pInputText","","type","direccion",1,"w-full",3,"formControlName"],[1,"flex","justify-content-left","w-full"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4","px-2","w-full"],["styleClass","w-full",1,"w-full","lg:w-full",3,"formControlName"],[1,"flex","flex-wrap","justify-content-left","align-items-center","gap-2","pb-4"],["pInputText","","type","tel","styleClass","w-full",1,"w-full","lg:w-full",3,"formControlName"],["pInputText","","type","email",1,"w-full",3,"formControlName"],[1,"w-full","md:w-6","flex","flex-column","align-items-left","justify-content-top","pl-2"],["for","username",1,"w-15rem"],["for","password",1,"w-15rem"],["pInputText","","type","password",1,"w-full",3,"formControlName"],["for","repit password",1,"w-15rem"],["for","LastName",1,"w-15rem"],[1,"flex","flex-column","align-items-left","justify-content-top","px-2"],["for","type",1,"w-15rem"],["for","Type",1,"w-15rem"],["for","salary",1,"w-15rem"],["pTemplate","footer"],["styleClass","w-full",1,"w-full","lg:w-full",3,"inputId","value","formControlName"],[1,"ml-2","justify-content-center",3,"for"],[1,"flex","gap-3","mt-1"],["label","Cancel","severity","secondary","styleClass","w-full",1,"w-full"],["label","Save","styleClass","w-full",1,"w-full",3,"click","disabled"]],template:function(v,l){if(v&1&&(r(0,"form",0)(1,"p-card",1),a(2,"translate"),a(3,"uppercase"),r(4,"div",2)(5,"div",3)(6,"h6"),p(7),a(8,"translate"),a(9,"uppercase"),t(),r(10,"div",4)(11,"div",5)(12,"label",6),p(13),a(14,"translate"),t(),m(15,"input",7),x(16,be,2,0,"span"),t(),r(17,"div",8)(18,"label",9),p(19),a(20,"translate"),t(),r(21,"p-inputGroup"),m(22,"input",10),r(23,"button",11),T("click",function(){return l.checkComplementCI=!l.checkComplementCI}),t()()(),r(24,"div",12)(25,"label",13),p(26),a(27,"translate"),t(),m(28,"p-dropdown",14),x(29,he,3,3,"span"),t()(),r(30,"div",4)(31,"div",15)(32,"label",16),p(33),a(34,"translate"),t(),m(35,"input",7),x(36,Ie,3,3,"span"),t()(),r(37,"div",17)(38,"div",18)(39,"label",19),p(40),a(41,"translate"),t(),m(42,"input",7),x(43,Se,3,3,"span"),t(),r(44,"div",20)(45,"label",21),p(46),a(47,"translate"),t(),m(48,"input",7),x(49,Be,3,3,"span"),t()(),r(50,"div",17)(51,"div",22)(52,"label",23),p(53),a(54,"translate"),t(),m(55,"input",24),x(56,Ne,3,3,"span"),t()(),r(57,"div",4)(58,"div",25),D(59,Te,3,5,null,null,V),t(),r(61,"div",26)(62,"label",23),p(63),a(64,"translate"),t(),m(65,"p-calendar",27),x(66,Fe,3,3,"span"),t(),r(67,"div",28)(68,"label",23),p(69),a(70,"translate"),t(),m(71,"input",29),t()(),r(72,"div",17)(73,"div",22)(74,"label",23),p(75),a(76,"translate"),t(),m(77,"input",30),x(78,je,3,3,"span"),t()()(),r(79,"div",31)(80,"h6"),p(81),a(82,"translate"),a(83,"uppercase"),t(),r(84,"div",28)(85,"label",32),p(86),a(87,"translate"),t(),m(88,"input",7),x(89,Ue,3,3,"span"),t(),r(90,"div",28)(91,"label",33),p(92),a(93,"translate"),t(),m(94,"input",34),x(95,Me,3,3,"span"),t(),r(96,"div",28)(97,"label",35),p(98),a(99,"translate"),t(),m(100,"input",34),t(),r(101,"div",28)(102,"label",36),p(103),a(104,"translate"),t(),m(105,"p-dropdown",14),t()(),r(106,"div",37)(107,"h6"),p(108),a(109,"translate"),a(110,"uppercase"),t(),r(111,"div",28)(112,"label",38),p(113),a(114,"translate"),t(),m(115,"p-dropdown",14),t(),r(116,"div",28)(117,"label",39),p(118),a(119,"translate"),t(),m(120,"p-dropdown",14),t(),r(121,"div",28)(122,"label",40),p(123),a(124,"translate"),t(),m(125,"input",7),t()()(),x(126,ke,3,1,"ng-template",41),t()()),v&2){let _,E,y,c,b,h,I,S,B,N;s("formGroup",l.registroForm),e(),s("header",o(3,57,o(2,55,"labels.register_employee"))),e(6),d(o(9,61,o(8,59,"users.detail_people"))),e(6),d(o(14,63,"users.ci")),e(2),s("formControlName","ci"),e(),C(16,(_=l.registroForm.get("ci"))!=null&&_.invalid&&((_=l.registroForm.get("ci"))!=null&&_.touched)?16:-1),e(3),d(o(20,65,"users.ciComplement")),e(3),s("disabled",l.checkComplementCI),e(4),d(o(27,67,"users.ciExpedit")),e(2),q(R(105,ye)),s("formControlName","ciExpedit")("options",l.expedidoOptions),e(),C(29,(E=l.registroForm.get("ciExpedit"))!=null&&E.invalid&&((E=l.registroForm.get("ciExpedit"))!=null&&E.touched)?29:-1),e(4),d(o(34,69,"users.name")),e(2),s("formControlName","nombre"),e(),C(36,(y=l.registroForm.get("nombre"))!=null&&y.invalid&&((y=l.registroForm.get("nombre"))!=null&&y.touched)?36:-1),e(4),g("",o(41,71,"users.app"),"e"),e(2),s("formControlName","app"),e(),C(43,(c=l.registroForm.get("app"))!=null&&c.invalid&&((c=l.registroForm.get("app"))!=null&&c.touched)?43:-1),e(3),d(o(47,73,"users.apm")),e(2),s("formControlName","apm"),e(),C(49,(b=l.registroForm.get("apm"))!=null&&b.invalid&&((b=l.registroForm.get("apm"))!=null&&b.touched)?49:-1),e(4),d(o(54,75,"users.direccion")),e(2),s("formControlName","direccion"),e(),C(56,(h=l.registroForm.get("direccion"))!=null&&h.invalid&&((h=l.registroForm.get("direccion"))!=null&&h.touched)?56:-1),e(3),L(l.sexo),e(4),d(o(64,77,"users.fnaci")),e(2),s("formControlName","fNaci"),e(),C(66,(I=l.registroForm.get("fNaci"))!=null&&I.invalid&&((I=l.registroForm.get("fNaci"))!=null&&I.touched)?66:-1),e(3),d(o(70,79,"users.telefono")),e(2),s("formControlName","telefono"),e(4),d(o(76,81,"users.email")),e(2),s("formControlName","email"),e(),C(78,(S=l.registroForm.get("email"))!=null&&S.invalid&&((S=l.registroForm.get("email"))!=null&&S.touched)?78:-1),e(3),d(o(83,85,o(82,83,"users.detail_user"))),e(5),d(o(87,87,"users.username")),e(2),s("formControlName","username"),e(),C(89,(B=l.registroForm.get("username"))!=null&&B.invalid&&((B=l.registroForm.get("username"))!=null&&B.touched)?89:-1),e(3),d(o(93,89,"users.password")),e(2),s("formControlName","password"),e(),C(95,(N=l.registroForm.get("password"))!=null&&N.invalid&&((N=l.registroForm.get("password"))!=null&&N.touched)?95:-1),e(3),d(o(99,91,"users.reppit_password")),e(2),s("formControlName","reppit_password"),e(3),d(o(104,93,"users.rol")),e(2),s("formControlName","rol")("options",l.rol),e(3),d(o(110,97,o(109,95,"users.detail_employee"))),e(5),d(o(114,99,"users.type")),e(2),s("formControlName","idTipo")("options",l.tipo),e(3),d(o(119,101,"users.position")),e(2),s("formControlName","idCargo")("options",l.cargo),e(3),g("",o(124,103,"users.salary"),"Country"),e(2),s("formControlName","salario")}},dependencies:[xe,ve,te,ee,Q,H,J,K,X,Y,ne,ie,le,re,ue,de,pe,ae,oe,me,se,we,Ce,ge,_e,ce,W,O]})}}return i})();export{st as default};
