import{a as ie,b as re}from"./chunk-YTVJF2QZ.js";import{b as te,i as ae}from"./chunk-NHAPQC3W.js";import"./chunk-KFFE56HM.js";import{j as ee}from"./chunk-LC6JGRRQ.js";import"./chunk-2WKEWB2B.js";import{F as Q,c as $}from"./chunk-3T4WVZA5.js";import"./chunk-F2X3VGZZ.js";import{ea as K,fa as u,na as T}from"./chunk-AAQOC4TC.js";import{j as P,l as Y,t as Z,u as y}from"./chunk-F7YKD2CL.js";import{$ as N,Aa as n,Ab as D,Bb as z,Cb as X,Lb as k,Ma as f,Mb as l,N as b,Na as S,Nb as s,O as x,Qa as w,Sa as h,T as C,Ub as B,_ as H,ba as v,bb as F,cb as p,cc as L,db as E,eb as I,ec as V,fb as M,fc as j,gb as d,ha as q,jb as G,lb as U,mb as J,nb as i,ob as r,pb as m,tb as R,ya as _,yb as W,zb as g}from"./chunk-J6TCZN46.js";import"./chunk-C6Q5SG76.js";var de=["*"];function me(e,c){if(e&1&&(i(0,"span",3),l(1),r()),e&2){let t=g();n(),s(t.label)}}function ue(e,c){if(e&1&&m(0,"span",5),e&2){let t=g(2);d(t.icon),p("ngClass","p-avatar-icon")}}function ge(e,c){if(e&1&&h(0,ue,1,3,"span",4),e&2){let t=g(),a=k(5);p("ngIf",t.icon)("ngIfElse",a)}}function ve(e,c){if(e&1){let t=R();i(0,"img",7),W("error",function(o){H(t);let A=g(2);return N(A.imageError(o))}),r()}if(e&2){let t=g(2);p("src",t.image,_),F("aria-label",t.ariaLabel)}}function fe(e,c){if(e&1&&h(0,ve,1,2,"img",6),e&2){let t=g();p("ngIf",t.image)}}var he=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,ye={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},ne=(()=>{class e extends T{name="avatar";theme=he;classes=ye;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var be=(()=>{class e extends ${label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new q;_componentStyle=C(ne);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(a,o){a&2&&(F("data-pc-name","avatar")("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy),M(o.style),d(o.hostClass),I("p-avatar",!0)("p-component",!0)("p-avatar-circle",o.shape==="circle")("p-avatar-lg",o.size==="large")("p-avatar-xl",o.size==="xlarge")("p-avatar-image",o.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[B([ne]),w],ngContentSelectors:de,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(a,o){if(a&1&&(D(),z(0),h(1,me,2,1,"span",2)(2,ge,1,2,"ng-template",null,0,j)(4,fe,1,1,"ng-template",null,1,j)),a&2){let A=k(3);n(),p("ngIf",o.label)("ngIfElse",A)}},dependencies:[y,P,Y,u],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=S({type:e});static \u0275inj=x({imports:[be,u,u]})}return e})();var xe=["*"],Ce={root:"p-avatar-group p-component"},se=(()=>{class e extends T{name="avatargroup";classes=Ce;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var _e=(()=>{class e extends ${styleClass;style;get hostClass(){return this.styleClass}get hostStyle(){return this.style}_componentStyle=C(se);static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-avatarGroup"],["p-avatar-group"],["p-avatargroup"]],hostVars:8,hostBindings:function(a,o){a&2&&(M(o.hostStyle),d(o.hostClass),I("p-avatar-group",!0)("p-component",!0))},inputs:{styleClass:"styleClass",style:"style"},features:[B([se]),w],ngContentSelectors:xe,decls:1,vars:0,template:function(a,o){a&1&&(D(),z(0))},dependencies:[y,u],encapsulation:2,changeDetection:0})}return e})(),pe=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=S({type:e});static \u0275inj=x({imports:[_e,u,u]})}return e})();function Se(e,c){if(e&1&&(i(0,"div",2)(1,"div",20)(2,"div",1),m(3,"i"),i(4,"div")(5,"b")(6,"span"),l(7),r()(),i(8,"span"),l(9),r(),i(10,"p"),l(11),r()()(),m(12,"img",21),r()()),e&2){let t=c.$implicit;n(3),d("pi "+t.icon+" "+t.color+" p-4 t-0"),E("font-size",64,"px"),n(3),d("block whitespace-nowrap "+t.color),n(),s(t.label),n(),d("block text-4xl font-bold "+t.color),E("font-size",28,"px"),n(),s(t.value),n(),d("block text-4xl font-bold "+t.color),E("font-size",16,"px"),n(),s(t.porcent),n(),X("alt",t.label),p("src",t.image,_)}}function we(e,c){e&1&&(i(0,"tr")(1,"th"),l(2,"Cliente"),r(),i(3,"th"),l(4,"Producto"),r(),i(5,"th"),l(6,"Cantidad"),r(),i(7,"th"),l(8,"Total"),r(),i(9,"th"),l(10,"Estado"),r()())}function Ee(e,c){if(e&1&&(i(0,"tr")(1,"td"),l(2),r(),i(3,"td"),l(4),r(),i(5,"td"),l(6),r(),i(7,"td"),l(8),L(9,"currency"),r(),i(10,"td"),l(11),r()()),e&2){let t=c.$implicit;n(2),s(t.client),n(2),s(t.product),n(2),s(t.quantity),n(2),s(V(9,5,t.total,"USD")),n(3),s(t.status)}}var O=class e{stats=[{label:"Productos en Stock Cr\xEDtico",porcent:"5%",value:5,icon:"pi-exclamation-triangle",color:"text-red-500",image:"/demo/images/dashboard/danger.svg"},{label:"Ventas sin Factura",porcent:"79.4%",value:4,icon:"pi-ban",color:"text-yellow-500",image:"/demo/images/dashboard/warning.svg"},{label:"Ventas con Factura",porcent:"20.6%",value:6,icon:"pi-file",color:"text-green-500",image:"/demo/images/dashboard/success.svg"},{label:"Total Productos Vendidos",porcent:"100%",value:440,icon:"pi-shopping-cart",color:"text-blue-500",image:"/demo/images/dashboard/users.svg"},{label:"Visitantes Activos",porcent:"5%",value:12,icon:"pi-users",color:"text-purple-500",image:"/demo/images/dashboard/interactions.svg"}];recentOrders=[{client:"Constructora ABC",product:"Cemento Portland",quantity:50,total:750,status:"Pendiente"},{client:"Inmobiliaria XYZ",product:"Ladrillos",quantity:100,total:1200,status:"Enviado"},{client:"Cliente Particular",product:"Arena",quantity:20,total:200,status:"Pendiente"},{client:"Constructora ABC",product:"Varilla Acero",quantity:30,total:450,status:"Entregado"},{client:"Cliente Particular",product:"Grava",quantity:15,total:180,status:"Pendiente"}];salesChartData={labels:["Lunes","Martes","Mi\xE9rcoles","Jueves","Viernes","S\xE1bado","Domingo"],datasets:[{label:"Ventas USD",data:[120,150,180,200,250,300,320],fill:!1,borderColor:"#3b82f6",tension:.4}]};categoryChartData={labels:["Cemento","Ladrillos","Arena","Varilla","Grava"],datasets:[{data:[300,250,100,150,120],backgroundColor:["#3b82f6","#22c55e","#facc15","#ef4444","#8b5cf6"],hoverOffset:10}]};salesToday=1250.5;lowStockCount=8;pendingOrders=12;topProduct="Cemento Portland";adminName="Juan P\xE9rez";acquisitionData;chartOptions={responsive:!0};latestCustomers=[{initials:"BS",name:"Brooklyn Simmons",role:"Manager at Mitsubishi",colorClass:"bg-green-100 text-green-700"},{initials:"LA",name:"Leslie Alexander",role:"Customer Success at General Electric",colorClass:"bg-yellow-100 text-yellow-700"},{initials:"JB",name:"Jerome Bell",role:"Mario Carrier at Nintendo",colorClass:"bg-blue-100 text-blue-700"}];ngOnInit(){this.acquisitionData={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Signups",backgroundColor:"#42A5F5",data:[12,19,3,5,2,3,9]},{label:"Active Users",backgroundColor:"#66BB6A",data:[2,3,20,5,1,4,7]}]}}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-home"]],decls:41,vars:18,consts:[[1,"grid","grid-cols-12","gap-8","mb-4"],[1,"flex"],[1,"w-full","md:col-6","xl:col-3","p-2"],[1,"w-full","p-2"],[1,"card"],["type","bar",2,"height","370px",3,"data","options"],[1,"p-4","w-full"],[1,"card","h-full"],["type","line",2,"width","100%","height","300px",3,"data","options"],["type","pie",2,"width","100%","height","300px",3,"data","options"],[1,"card","w-full","p-4","bg-white","rounded-xl","shadow-md","border-l-4","border-blue-500"],[1,"text-gray-500","font-semibold"],[1,"text-2xl","font-bold"],[1,"card","w-full","p-4","bg-white","rounded-xl","shadow-md","border-l-4","border-green-500"],[1,"card","w-full","p-4","bg-white","rounded-xl","shadow-md","border-l-4","border-yellow-500"],[1,"card","w-full","p-4","bg-white","rounded-xl","shadow-md","border-l-4","border-red-500"],[1,"flex","w-full","p-2"],[3,"value","paginator","rows","responsiveLayout","ngClass"],["pTemplate","header"],["pTemplate","body"],[1,"card","p-0","overflow-hidden","flex-col-2"],[1,"w-full",3,"src","alt"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1),U(2,Se,13,19,"div",2,G),r(),i(4,"div",1)(5,"div",3)(6,"div",4),m(7,"p-chart",5),r()(),i(8,"div",6)(9,"div",7),m(10,"p-chart",8),r()()(),i(11,"div",1)(12,"div",6)(13,"div",4),m(14,"p-chart",9),r()(),i(15,"div",3)(16,"div",10)(17,"p",11),l(18,"Ventas Hoy"),r(),i(19,"h2",12),l(20),L(21,"currency"),r()(),i(22,"div",13)(23,"p",11),l(24,"Productos en Stock Cr\xEDtico"),r(),i(25,"h2",12),l(26),r()(),i(27,"div",14)(28,"p",11),l(29,"\xD3rdenes Pendientes"),r(),i(30,"h2",12),l(31),r()(),i(32,"div",15)(33,"p",11),l(34,"Productos M\xE1s Vendidos"),r(),i(35,"h2",12),l(36),r()()(),i(37,"div",16)(38,"p-table",17),h(39,we,11,0,"ng-template",18)(40,Ee,12,8,"ng-template",19),r()()()()),t&2&&(n(2),J(a.stats),n(5),p("data",a.acquisitionData)("options",a.chartOptions),n(3),p("data",a.salesChartData)("options",a.chartOptions),n(4),p("data",a.categoryChartData)("options",a.chartOptions),n(6),s(V(21,15,a.salesToday,"USD")),n(6),s(a.lowStockCount),n(5),s(a.pendingOrders),n(5),s(a.topProduct),n(2),p("value",a.recentOrders)("paginator",!0)("rows",5)("responsiveLayout","scroll")("ngClass","w-full"))},dependencies:[ae,te,K,Q,ee,le,pe,y,P,Z,re,ie],styles:[".chart-card[_ngcontent-%COMP%]{height:300px}"]})};export{O as default};
