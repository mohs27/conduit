import{ssrElement as f,mergeProps as v}from"solid-js/web";import{mergeProps as h,splitProps as m,createMemo as g}from"solid-js";import{j as C,l as d,h as u,o as l,u as P}from"./routing.mjs";function y(t){t=h({inactiveClass:"inactive",activeClass:"active"},t);const[,e]=m(t,["href","state","class","activeClass","inactiveClass","end"]),n=C(()=>t.href),s=d(n),r=u(),a=g(()=>{const c=n();if(c===void 0)return[!1,!1];const i=l(c.split(/[?#]/,1)[0]).toLowerCase(),o=l(r.pathname).toLowerCase();return[t.end?i===o:o.startsWith(i),i===o]});return f("a",v(e,{get href(){return s()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!a()[0],[t.activeClass]:a()[0],...e.classList}},link:!0,get"aria-current"(){return a()[1]?"page":void 0}}),void 0,!0)}function A(t){const e=P(),n=u(),{href:s,state:r}=t,a=typeof s=="function"?s({navigate:e,location:n}):s;return e(a,{replace:!0,state:r}),null}export{y as A,A as N};
//# sourceMappingURL=components.mjs.map