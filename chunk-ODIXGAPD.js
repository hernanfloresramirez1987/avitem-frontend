import{a as w}from"./chunk-GSRQG255.js";import{e as b}from"./chunk-CWCI5DGM.js";import{T as y}from"./chunk-KPQAMRWQ.js";import{b as I}from"./chunk-6BQ35XOF.js";import{Ta as o,V as m,Vb as g,_ as d,cb as h,da as c,ib as a,jb as C,nb as v,pa as u,qa as f,tb as l,ub as s,vb as p}from"./chunk-3ETRBYPY.js";var H=class e{constructor(i){this.http=i}url=`${w.URL_API}`;getAllEmployes(){return this.http.get(`${this.url}empleado`)}saveEmploye(i){return console.log(i),this.http.post(`${this.url}empleado`,i)}savePromise(i){return console.log(i),this.http.post(`${this.url}empleado`,i).toPromise()}static \u0275fac=function(r){return new(r||e)(d(I))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})};var $=(()=>{class e extends b{pathId;ngOnInit(){this.pathId="url(#"+y()+")"}static \u0275fac=(()=>{let r;return function(t){return(r||(r=f(e)))(t||e)}})();static \u0275cmp=c({type:e,selectors:[["PlusIcon"]],standalone:!0,features:[h,g],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,t){n&1&&(u(),l(0,"svg",0)(1,"g"),p(2,"path",1),s(),l(3,"defs")(4,"clipPath",2),p(5,"rect",3),s()()()),n&2&&(v(t.getClassNames()),a("aria-label",t.ariaLabel)("aria-hidden",t.ariaHidden)("role",t.role),o(),a("clip-path",t.pathId),o(3),C("id",t.pathId))},encapsulation:2})}return e})();export{$ as a,H as b};