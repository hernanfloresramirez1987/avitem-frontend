import{ia as v,la as F}from"./chunk-EBX3HSBQ.js";import{n as h}from"./chunk-NZR6XVXW.js";import{Ab as g,Ma as a,N as u,Na as b,O as s,Pa as f,Qa as c,Sb as m,T as i,ba as r,nb as d,ob as l,zb as y}from"./chunk-5DVEH5ZE.js";var j=["*"],C=({dt:t})=>`
.p-buttongroup .p-button {
    margin: 0;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-buttongroup .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-buttongroup {
    display:flex;
}

.p-buttongroup > .p-button {
    flex: 1;
}

/* For PrimeNG */

.p-buttongroup .p-button:focus,
.p-buttongroup p-button:focus .p-button,
.p-buttonset .p-button:focus,
.p-buttonset .p-button:focus,
.p-buttonset p-button:focus .p-button,
.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover,
.p-buttongroup p-button:not(:last-child) .p-button,
.p-buttongroup p-button:not(:last-child) .p-button:hover,
.p-buttonset .p-button:not(:last-child),
.p-buttonset .p-button:not(:last-child):hover,
.p-buttonset p-button:not(:last-child) .p-button,
.p-buttonset p-button:not(:last-child) .p-button:hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type),
.p-buttongroup p-button:not(:first-of-type):not(:last-of-type) .p-button,
.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),
.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type),
.p-buttongroup p-button:first-of-type:not(:only-of-type) .p-button,
.p-buttonset .p-button:first-of-type:not(:only-of-type),
.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type),
.p-buttongroup p-button:last-of-type:not(:only-of-type) .p-button,
.p-buttonset .p-button:last-of-type:not(:only-of-type),
.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,B={root:"p-buttongroup p-component"},D=(()=>{class t extends v{name="buttongroup";theme=C;classes=B;static \u0275fac=(()=>{let o;return function(p){return(o||(o=r(t)))(p||t)}})();static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})();var I=(()=>{class t extends F{_componentStyle=i(D);static \u0275fac=(()=>{let o;return function(p){return(o||(o=r(t)))(p||t)}})();static \u0275cmp=a({type:t,selectors:[["p-buttonGroup"],["p-buttongroup"],["p-button-group"]],features:[m([D]),c],ngContentSelectors:j,decls:2,vars:0,consts:[["role","group",1,"p-buttongroup","p-component"]],template:function(n,p){n&1&&(y(),d(0,"span",0),g(1),l())},dependencies:[h],encapsulation:2,changeDetection:0})}return t})(),A=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=b({type:t});static \u0275inj=s({imports:[I]})}return t})();var M=class t{transform(e){return e&&e.toLowerCase().split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}static \u0275fac=function(o){return new(o||t)};static \u0275pipe=f({name:"capitalize",type:t,pure:!0})};export{I as a,A as b,M as c};
