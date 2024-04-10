import{B as ve,D as pe,E as xe,C as z,j as T,a as te,e as r,v as j,S as D,A as M,k as Se,r as _,F as me,t as ye,x as J,y as x,_ as De,l as Ce,K as h,w as g,G as Z,T as V,L as re,O as ue,Q as we,Z as Ie,M as Le,H as Ae,$ as Pe,V as Be,U as Ge}from"./routing-BmD2xUmi.js";import{a5 as Ee,m as X,P as le,r as W,o as qe,p as de,a6 as Ve,n as je,i as $e,a7 as Ue,a8 as He,c as Me,a9 as Je,aa as Ke,ab as he,ac as Qe,ad as ne,O as ae,ae as We,L as ze,I as Xe,N as Ye,a4 as ge,Q as Ze,af as fe,$ as et,ag as tt}from"./syncStore-BssUQgBy.js";import{L as be,u as rt}from"./Link-Dg-h0Eyu.js";import{d as nt}from"./index-BnPmuIsI.js";import{F as _e}from"./Field-BXIxlrTp.js";import{b as at}from"./index-B3L84c1c.js";import{u as lt}from"./useIntersectionObserver-DOCe7fLW.js";import{E as it}from"./EmptyState-BuYdpmYU.js";import{P as st}from"./PlaylistCard-BxVwlLgx.js";import{C as ot,S as ct}from"./Description-BLDREoDG.js";import{A as ut}from"./components-BMGKah2q.js";import"./index-Cb4tY8hP.js";import"./index-DPECAXpK.js";const Ne=ve();function Re(){const e=pe(Ne);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}const Te=ve();function ie(){const e=pe(Te);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function dt(e){const t=Ee(),i=Re(),a=`${t.generateId("item")}-${xe()}`;e=X({id:a},e);const[s,l]=z(e,["value","disabled","onPointerDown"]),[o,c]=T(),[n,m]=T(),[d,f]=T(),[v,b]=T(),[S,y]=T(!1),R=te(()=>i.isSelectedValue(s.value)),N=te(()=>s.disabled||t.isDisabled()||!1),k=F=>{W(F,s.onPointerDown),S()&&F.preventDefault()},G=te(()=>({...t.dataset(),"data-disabled":N()?"":void 0,"data-checked":R()?"":void 0})),p={value:()=>s.value,dataset:G,isSelected:R,isDisabled:N,inputId:o,labelId:n,descriptionId:d,inputRef:v,select:()=>i.setSelectedValue(s.value),generateId:qe(()=>l.id),registerInput:de(c),registerLabel:de(m),registerDescription:de(f),setIsFocused:y,setInputRef:b};return r(Te.Provider,{value:p,get children(){return r(le,j({as:"div",role:"group",onPointerDown:k},G,l))}})}function gt(e){const t=ie();e=X({id:t.generateId("control")},e);const[i,a]=z(e,["onClick","onKeyDown"]);return r(le,j({as:"div",onClick:o=>{W(o,i.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:o=>{W(o,i.onKeyDown),o.key===Ve.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),a))}function ft(e){const t=ie();e=X({id:t.generateId("indicator")},e);const[i,a]=z(e,["ref","forceMount"]),s=je(()=>i.forceMount||t.isSelected());return r(D,{get when(){return s.isPresent()},get children(){return r(le,j({as:"div",ref(l){var o=$e(s.setRef,i.ref);typeof o=="function"&&o(l)}},()=>t.dataset(),a))}})}var mt=x("<input type=radio>");function vt(e){const t=Ee(),i=Re(),a=ie();e=X({id:a.generateId("input")},e);const[s,l]=z(e,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),o=()=>[s["aria-labelledby"],a.labelId(),s["aria-labelledby"]!=null&&l["aria-label"]!=null?l.id:void 0].filter(Boolean).join(" ")||void 0,c=()=>[s["aria-describedby"],a.descriptionId(),i.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,n=f=>{W(f,s.onChange),f.stopPropagation(),i.setSelectedValue(a.value());const v=f.target;v.checked=a.isSelected()},m=f=>{W(f,s.onFocus),a.setIsFocused(!0)},d=f=>{W(f,s.onBlur),a.setIsFocused(!1)};return M(()=>Se(a.registerInput(l.id))),(()=>{var f=_(mt);f.addEventListener("blur",d),f.addEventListener("focus",m),f.addEventListener("change",n);var v=$e(a.setInputRef,s.ref);return typeof v=="function"&&me(v,f),ye(f,j({get name(){return t.name()},get value(){return a.value()},get checked(){return a.isSelected()},get required(){return t.isRequired()},get disabled(){return a.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return{...Ue,...s.style}},get"aria-labelledby"(){return o()},get"aria-describedby"(){return c()}},()=>a.dataset(),l),!1,!1),J(),f})()}var pt=x("<label>");function $t(e){const t=ie();return e=X({id:t.generateId("label")},e),M(()=>Se(t.registerLabel(e.id))),(()=>{var i=_(pt);return ye(i,j({get for(){return t.inputId()}},()=>t.dataset(),e),!1,!1),J(),i})()}function ht(e){let t;const i=`radiogroup-${xe()}`;e=X({id:i,orientation:"vertical"},e);const[a,s,l]=z(e,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],He),[o,c]=Me({value:()=>a.value,defaultValue:()=>a.defaultValue,onChange:b=>a.onChange?.(b)}),{formControlContext:n}=Je(s);Ke(()=>t,()=>c(a.defaultValue??""));const m=()=>n.getAriaLabelledBy(he(s.id),l["aria-label"],a["aria-labelledby"]),d=()=>n.getAriaDescribedBy(a["aria-describedby"]),f=b=>b===o(),v={ariaDescribedBy:d,isSelectedValue:f,setSelectedValue:b=>{n.isReadOnly()||n.isDisabled()||(c(b),t?.querySelectorAll("[type='radio']").forEach(S=>{const y=S;y.checked=f(y.value)}))}};return r(Qe.Provider,{value:n,get children(){return r(Ne.Provider,{value:v,get children(){return r(le,j({as:"div",ref(b){var S=$e(y=>t=y,a.ref);typeof S=="function"&&S(b)},role:"radiogroup",get id(){return he(s.id)},get"aria-invalid"(){return n.validationState()==="invalid"||void 0},get"aria-required"(){return n.isRequired()||void 0},get"aria-disabled"(){return n.isDisabled()||void 0},get"aria-readonly"(){return n.isReadOnly()||void 0},get"aria-orientation"(){return a.orientation},get"aria-labelledby"(){return m()},get"aria-describedby"(){return d()}},()=>n.dataset(),l))}})}})}function bt(e,t){let i={},a=Object.keys(e);for(let s=0,l=a.length;s<l;s+=1){let o=a[s];t.includes(o)||Object.defineProperty(i,o,{get(){return e[o]},configurable:!0,enumerable:!0})}return i}function _t(e,t){return r(De,j({get component(){return e()}},t))}function xt(e){return typeof e=="function"}function St(e,t){return i=>{"ref"in e&&xt(e.ref)&&e.ref(i),t(i)}}function yt(e,t,i){return r(D,{get when(){var a;return(a=e.unmount)!=null?a:!0},get fallback(){return i()},get children(){return r(D,{get when(){return t()},get children(){return i()}})}})}var Fe=ve();function Ct(e){let t=pe(Fe);if(t)return t;throw new Error(`<${e}> must be used inside a <Transition>`)}function q(e){return e?e.split(" "):[]}function U(e,t){let i=t.filter(a=>a);i.length&&e.classList.add(...i)}function H(e,t){let i=t.filter(a=>a);i.length&&e.classList.remove(...i)}function wt(e){let t=Ct("TransitionChild"),[i,a]=T(t.show),[s,l]=T(),o=!0;function c(n,m){var d,f;if(m){if(o){let v=q(e.enter),b=q(e.enterFrom),S=q(e.enterTo),y=q(e.entered),R=()=>{var N;H(n,v),H(n,S),U(n,y),(N=e.afterEnter)==null||N.call(e)};(d=e.beforeEnter)==null||d.call(e),U(n,v),U(n,b),requestAnimationFrame(()=>{H(n,b),U(n,S),n.addEventListener("transitionend",R,{once:!0}),n.addEventListener("animationend",R,{once:!0})})}}else{let v=q(e.leave),b=q(e.leaveFrom),S=q(e.leaveTo),y=q(e.entered);(f=e.beforeLeave)==null||f.call(e),H(n,y),U(n,v),U(n,b),requestAnimationFrame(()=>{H(n,b),U(n,S)});let R=()=>{var N;H(n,v),H(n,S),a(!1),(N=e.afterLeave)==null||N.call(e)};n.addEventListener("transitionend",R,{once:!0}),n.addEventListener("animationend",R,{once:!0})}}return M(()=>{let n=t.show;n&&a(!0);let m=s();m instanceof HTMLElement?c(m,n):o=!0}),yt(e,i,()=>_t(()=>{var n;return(n=e.as)!=null?n:"div"},j(bt(e,["as","enter","enterFrom","enterTo","leave","leaveFrom","leaveTo","unmount","afterEnter","afterLeave","appear","beforeEnter","beforeLeave","entered","ref"]),{ref:St(e,n=>{l(()=>n)})})))}function Oe(e){let[t,i]=z(e,["show"]);return r(Fe.Provider,{value:t,get children(){return r(wt,i)}})}var It=x('<div class="flex items-center gap-2">'),Et=x('<span class="bg-accent1 text-text3 rounded px-2 ">'),Nt=x('<span class="bg-primary text-text3 rounded px-2 ">'),Rt=x("<button>"),Tt=x('<div class="flex gap-2 items-center mb-2 flex-wrap"><div class="flex items-center gap-1"><!$><!/><span class=font-bold></span><!$><!/></div><!$><!/>'),Ft=x('<input type=date class="bg-accent1 text-text3 rounded px-2">'),Ot=x('<div class="flex gap-2 items-center flex-wrap"><input type=date class="bg-accent1 text-text3 rounded px-2"><span class=font-bold>AND</span><input type=date class="bg-accent1 text-text3 rounded px-2">'),kt=x('<div class="flex gap-2 items-center flex-wrap"><!$><!/><!$><!/><!$><!/><!$><!/>'),Dt=x('<div class="h-full w-full "><!$><!/><!$><!/>');const Lt=["description","duration","name","subscribers","thumbnail","type","url","verified","videos","views","uploaderVerified","uploaderUrl","uploaderName","uploaded","title","isShort","playlistType","shortDescription","uploadedDate"],At=e=>r(ht,{get value(){return e.value},get onChange(){return e.onChange},class:"",get children(){var t=_(It);return g(t,r(Z,{get each(){return e.options},children:i=>r(dt,{value:i,class:"flex items-center gap-1 rounded  focus-within:ring-2 focus-within:ring-primary",get children(){return[r(vt,{class:"flex items-center gap-1"}),r(gt,{class:"flex items-center justify-center w-5 h-5 rounded-full  border border-text2 data-[checked]:border-primary data-[checked]:bg-white focus-visible:border-spacing-1 focus-visible:border-primary",get children(){return r(ft,{class:"w-2.5 h-2.5 rounded-full bg-primary"})}}),r($t,{class:"",children:i})]}})})),t}}),Pt=e=>(()=>{var t=_(Et);return g(t,()=>String(e.field)),t})(),Bt=e=>(()=>{var t=_(Nt);return g(t,()=>e.value),t})(),Gt=e=>(()=>{var t=_(Rt);return Ie(t,"click",e.onClick,!0),g(t,r(nt,{fill:"currentColor",class:"w-3 h-3"})),J(),t})(),qt=e=>{const[t,i]=T(!1);return[(()=>{var a=_(Tt),s=a.firstChild,l=s.firstChild,[o,c]=h(l.nextSibling),n=o.nextSibling,m=n.nextSibling,[d,f]=h(m.nextSibling),v=s.nextSibling,[b,S]=h(v.nextSibling);return g(s,r(Pt,{get field(){return e.field}}),o,c),g(n,()=>e.operatorText),g(s,r(Bt,{get value(){return e.value}}),d,f),g(a,r(Gt,{onClick:()=>e.removeCondition()}),b,S),a})(),r(At,{get value(){return e.selectedOperator},onChange:a=>{i(!0),e.selectOperator(a)},options:["AND","OR"]}),r(Oe,{enter:"transition duration-300 ease-in-out transform",enterFrom:"opacity-0 translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition duration-300 ease-in-out transform",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-2",class:"my-2",get show(){return t()},get children(){return r(ke,{addCondition:a=>{i(!1),e.addCondition(a)}})}})]},ke=e=>{const[t,i]=T(""),[a,s]=T({value:"title",label:"title",disabled:!1}),[l,o]=T({value:"INCLUDES",label:"INCLUDES",disabled:!1});return(()=>{var c=_(kt),n=c.firstChild,[m,d]=h(n.nextSibling),f=m.nextSibling,[v,b]=h(f.nextSibling),S=v.nextSibling,[y,R]=h(S.nextSibling),N=y.nextSibling,[k,G]=h(N.nextSibling);return g(c,r(ne,{get value(){return a()},get options(){return Lt.map(p=>({value:p,label:p,disabled:!1}))},onChange:p=>{s(p)}}),m,d),g(c,r(ne,{get value(){return l()},onChange:p=>o(p),get options(){return["INCLUDES","NOT_INCLUDES","LESS_THAN","GREATER_THAN","IS","IS_NOT","IS_BEFORE","IS_AFTER","IS_BETWEEN"].map(p=>({value:p,label:p,disabled:!1}))}}),v,b),g(c,r(we,{get children(){return[r(V,{get when(){return l().value==="IS_BEFORE"||l().value==="IS_AFTER"},get children(){var p=_(Ft);return p.$$input=F=>i(F.currentTarget.value),re(()=>ue(p,"value",t())),J(),p}}),r(V,{get when(){return l().value==="IS_BETWEEN"},get children(){return[te(()=>(i(JSON.stringify({start:new Date("1970-01-01").toISOString(),end:new Date().toISOString()})),[])),(()=>{var p=_(Ot),F=p.firstChild,K=F.nextSibling,C=K.nextSibling;return F.$$input=O=>i(JSON.stringify({start:O.currentTarget.value,end:JSON.parse(t()).end})),C.$$input=O=>i(JSON.stringify({start:JSON.parse(t()).start,end:O.currentTarget.value})),re(()=>ue(F,"value",JSON.parse(t()).start)),re(()=>ue(C,"value",JSON.parse(t()).end)),J(),p})()]}}),r(V,{get when(){return l().value==="INCLUDES"||l().value==="NOT_INCLUDES"},get children(){return r(_e,{placeholder:"String or Regex",type:"text",get value(){return t()},get validationState(){return Number.isNaN(parseInt(t()))?"invalid":"valid"},onInput:p=>i(p)})}}),r(V,{get when(){return l().value==="LESS_THAN"||l().value==="GREATER_THAN"},get children(){return r(_e,{type:"number",get value(){return t()},get validationState(){return Number.isNaN(parseInt(t()))?"invalid":"valid"},onInput:p=>i(p)})}}),r(V,{get when(){return l().value==="IS"||l().value==="IS_NOT"},get children(){return r(ne,{get value(){return{value:t(),label:t(),disabled:!1}},options:[{value:"true",label:"true",disabled:!1},{value:"false",label:"false",disabled:!1}],onChange:p=>i(p.value)})}})]}}),y,R),g(c,r(ae,{label:"Add Condition",appearance:"danger",onClick:()=>{e.addCondition({type:l().value,field:a().value,value:t()})}}),k,G),c})()},Vt=e=>{const t=(c,n)=>{const[m,d]=T(!1);let f;return M(()=>{clearTimeout(f),f=setTimeout(()=>{d(!0)},100)}),r(Oe,{enter:"transition-all duration-300 ease-in-out transform",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-all duration-300 ease-in-out transform",leaveFrom:"opacity-100 ",leaveTo:"opacity-0 ",class:"my-2",get show(){return m()},get children(){return r(qt,{get operatorText(){return c.type},get field(){return c.field},get value(){return c.value},addCondition:i,addOperator:s,removeCondition:()=>{a(n),o(n)},get selectedOperator(){return e.filter.operators[n]},selectOperator:v=>{e.filter.operators[n]?l(n,v):s(v)}})}})},i=c=>{e.setFilter(n=>({conditions:[...n.conditions,c],operators:n.operators}))},a=c=>{const n=[...e.filter.conditions];n.splice(c,1),e.setFilter(m=>({...m,conditions:n}))},s=c=>{e.setFilter(n=>({conditions:n.conditions,operators:[...n.operators,c]}))},l=(c,n)=>{const m=[...e.filter.operators];m[c]=n,e.setFilter(d=>({...d,operators:m}))},o=c=>{const n=[...e.filter.operators];n.splice(c,1),e.setFilter(m=>({...m,operators:n}))};return(()=>{var c=_(Dt),n=c.firstChild,[m,d]=h(n.nextSibling),f=m.nextSibling,[v,b]=h(f.nextSibling);return g(c,r(D,{get when(){return e.filter.conditions.length===0},get children(){return r(ke,{addCondition:i})}}),m,d),g(c,r(Z,{get each(){return e.filter.conditions},children:(S,y)=>t(S,y())}),v,b),c})()},jt=(e,t,i=console.error)=>{if(e.conditions.length===0)return!0;let a=[];try{for(let l of e.conditions){let o=!1;switch(l.type){case"INCLUDES":o=new RegExp(l.value).test(t[l.field]?.toString().toLowerCase().trim());break;case"NOT_INCLUDES":o=!new RegExp(l.value).test(t[l.field]?.toString().toLowerCase().trim());break;case"LESS_THAN":const c=parseInt(l.value),n=parseInt(t[l.field]?.toString());o=isNaN(c)||isNaN(n)?!1:n<c;break;case"GREATER_THAN":const m=parseInt(l.value),d=parseInt(t[l.field]?.toString());o=isNaN(m)||isNaN(d)?!1:d>m;break;case"IS":o=new RegExp(l.value).test(t[l.field]?.toString());break;case"IS_NOT":o=!new RegExp(l.value).test(t[l.field]?.toString());case"IS_BEFORE":const f=new Date(l.value),v=new Date(t[l.field]?.toString());o=isNaN(f.getTime())||isNaN(v.getTime())?!1:v.getTime()<f.getTime();break;case"IS_AFTER":const b=new Date(l.value),S=new Date(t[l.field]?.toString());o=isNaN(b.getTime())||isNaN(S.getTime())?!1:S.getTime()>b.getTime();break;case"IS_BETWEEN":let y=null,R=null;try{let k=JSON.parse(l.value);k.start&&(y=new Date(k.start)),k.end&&(R=new Date(k.end))}catch(k){i(k),o=!1;break}if(!y||!R){o=!1;break}const N=new Date(t[l.field]?.toString());o=isNaN(N.getTime())?!1:N.getTime()>=y.getTime()&&N.getTime()<=R.getTime();break}a.push(o)}let s=a[0];for(let l=0;l<e.operators.length;l++){let o=e.operators[l],c=a[l+1];if(o==="AND"){if(c===void 0)break;s=s&&c}else o==="OR"&&(s=s||c)}return s}catch(s){return i(s),!1}};Ce(["click","input"]);var Ut=x('<div class="relative w-20 overflow-hidden rounded-full group-hover:ring-2 group-focus-visible:ring-2 ring-accent1 transition-all duration-200"><img class="w-full rounded-full group-hover:scale-105 group-focus-visible:scale-105"loading=lazy>'),Ht=x('<div class="flex gap-1"><span></span><!$><!/>'),Mt=x("<p>&#183; <!$><!/> videos"),Jt=x('<p class="two-line-ellipsis ">'),Kt=x("<p><!$><!/> subscribers"),Qt=x('<div class="mx-4 my-2 flex flex-col gap-2 items-start w-full lg:w-72 max-h-20 lg:max-h-full max-w-md"><div class="flex items-center gap-2 w-full lg:flex-col lg:items-start"><!$><!/><div class="flex flex-col justify-center gap-1 min-w-0 w-full h-20 max-h-20 text-text2 text-xs self-end"><div class="flex items-center gap-1"><!$><!/><!$><!/></div><!$><!/><!$><!/></div><!$><!/>'),Wt=x("<p>");function zt(e){return(()=>{var t=_(Qt),i=t.firstChild,a=i.firstChild,[s,l]=h(a.nextSibling),o=s.nextSibling,c=o.firstChild,n=c.firstChild,[m,d]=h(n.nextSibling),f=m.nextSibling,[v,b]=h(f.nextSibling),S=c.nextSibling,[y,R]=h(S.nextSibling),N=y.nextSibling,[k,G]=h(N.nextSibling),p=o.nextSibling,[F,K]=h(p.nextSibling);return g(i,r(be,{get href(){return e.item.url},class:"group outline-none",get children(){var C=_(Ut),O=C.firstChild;return re(()=>Le(O,"src",e.item.thumbnail)),C}}),s,l),g(c,r(be,{class:"link text-sm",get href(){return e.item.url},get children(){var C=_(Ht),O=C.firstChild,u=O.nextSibling,[$,w]=h(u.nextSibling);return g(O,()=>e.item.name),g(C,r(D,{get when(){return e.item.verified},get children(){return r(ot,{})}}),$,w),C}}),m,d),g(c,r(D,{get when(){return e.item.videos>=0},get children(){var C=_(Mt),O=C.firstChild,u=O.nextSibling,[$,w]=h(u.nextSibling);return $.nextSibling,g(C,()=>e.item.videos,$,w),C}}),v,b),g(o,r(D,{get when(){return e.item.description},get children(){var C=_(Jt);return g(C,()=>e.item.description),C}}),y,R),g(o,r(D,{get when(){return e.item.subscribers>=0},get fallback(){return _(Wt)},get children(){var C=_(Kt),O=C.firstChild,[u,$]=h(O.nextSibling);return u.nextSibling,g(C,()=>We(e.item.subscribers).format("0a").toUpperCase(),u,$),C}}),k,G),g(i,r(ct,{get id(){return e.item.url.split("/").pop()},get name(){return e.item.name}}),F,K),t})()}var Xt=x('<div class="flex items-center justify-between my-2"><!$><!/><button>Advanced Filters'),Yt=x('<div class="bg-red-300 p-2 rounded-md text-red-900 flex justify-between items-center"><span></span><span>x<!$><!/></span> '),Zt=x('<div class="flex flex-col justify-center items-center gap-4 h-full min-w-[20rem] min-h-[10rem]"><!$><!/><div class="flex flex-col gap-2"><div class="flex gap-2"><!$><!/><!$><!/></div><!$><!/>'),er=x('<div class=mt-2><p class="">Did you mean <!$><!/>?'),tr=x('<div class="flex flex-col items-center justify-center w-full h-full">'),rr=x('<div class="w-full flex justify-center">'),nr=x('<div class="flex flex-wrap justify-center min-h-screen h-full items-start"><!$><!/><!$><!/><!$><!/><div class="w-full h-20 mt-2">'),ar=x('<div class="flex flex-wrap py-12 items-center justify-center w-full h-full">'),lr=x(`<div>Something went wrong 
<!$><!/><button>Retry`);function br(){const e=["all","videos","channels","playlists","music_songs","music_videos","music_albums","music_playlists"],[t,i]=Ae(),[a,s]=T(t.filter??"all"),l=ze(),[o,c]=rt(),[n]=Xe(),m=async({pageParam:u="initial"})=>u==="initial"?await(await fetch(`${n.instance.api_url}/search?q=${t.search_query}&filter=${a()}`)).json():await tt(`${n.instance.api_url}/nextpage/search`,{nextpage:u,q:t.search_query,filter:a()}),d=at(()=>({queryKey:["search",t.search_query,a()],queryFn:m,enabled:!!(n.instance?.api_url&&t.search_query&&a()&&!Pe),getNextPageParam:u=>u.nextpage,refetchOnMount:!1,refetchOnReconnect:!1,initialPageParam:"initial",initialData:()=>{}}));M(()=>{document.title=t.search_query+" - Conduit",S()}),M(()=>{console.log("app state loading",d.isLoading,d.isFetching),c({loading:d.isLoading||d.isFetching||d.isRefetching})});const f=lt({setTarget:()=>N()});let v;M(()=>{if(console.log(f(),N(),"intersecting"),f()){d.fetchNextPage();return}!d.isFetching||!d.hasNextPage||(clearInterval(v),v=setInterval(()=>{const u=y().getBoundingClientRect().bottom;N().getBoundingClientRect().bottom<u&&(d.fetchNextPage(),console.log("fetching next page"))},1e3))});function b(u){s(u),i({filter:u})}function S(){const u=t.search_query;if(!u)return;const $=Ye("search_history",[],"json","localStorage");if($.includes(u)){const w=$.indexOf(u);$.splice(w,1)}$.unshift(u),$.length>10&&$.shift(),localStorage.setItem("search_history",JSON.stringify($))}const[y,R]=T(void 0),[N,k]=T(void 0),[G,p]=T(!1),[F,K]=T([]),[C,O]=T(JSON.parse(localStorage.getItem("search_filter")??"null")??{conditions:[],operators:[]});return r(Ge,{get fallback(){return(()=>{var u=_(ar);return g(u,r(Z,{get each(){return Array(40).fill(0)},children:()=>r(ge,{v:void 0})})),u})()},get children(){return[(()=>{var u=_(Xt),$=u.firstChild,[w,A]=h($.nextSibling),L=w.nextSibling;return g(u,r(ne,{get options(){return e.map(E=>({value:E,label:E.replace(/_/g," ").replace(/\b\w/g,B=>B.toUpperCase())}))},get value(){return{value:a(),label:a().replace(/_/g," ").replace(/\b\w/g,E=>E.toUpperCase()),disabled:!1}},onChange:E=>b(E.value)}),w,A),L.$$click=()=>p(!0),J(),u})(),r(D,{get when(){return F().length>0},get children(){var u=_(Yt),$=u.firstChild,w=$.nextSibling,A=w.firstChild,L=A.nextSibling,[E,B]=h(L.nextSibling);return g($,()=>F()[F().length-1]),g(w,()=>F().length,E,B),u}}),r(Be,{fallback:(u,$)=>(()=>{var w=_(lr),A=w.firstChild,L=A.nextSibling,[E,B]=h(L.nextSibling),Q=E.nextSibling;return g(w,()=>u.message,E,B),Ie(Q,"click",$,!0),J(),w})(),get children(){return r(Ze,{get isOpen(){return G()},setIsOpen:p,title:"Advanced Filters",get children(){var u=_(Zt),$=u.firstChild,[w,A]=h($.nextSibling),L=w.nextSibling,E=L.firstChild,B=E.firstChild,[Q,ee]=h(B.nextSibling),se=Q.nextSibling,[oe,I]=h(se.nextSibling),P=E.nextSibling,[Y,ce]=h(P.nextSibling);return g(u,r(Vt,{get filter(){return C()},setFilter:O}),w,A),g(E,r(ae,{appearance:"link",label:"Save Filter",onClick:()=>{localStorage.setItem("search_filter",JSON.stringify(C()))}}),Q,ee),g(E,r(ae,{appearance:"subtle",label:"Clear Filter",onClick:()=>{K([]),O({conditions:[],operators:[]})}}),oe,I),g(L,r(ae,{label:"Done",onClick:()=>{p(!1)}}),Y,ce),u}})}}),r(D,{get when(){return d.data?.pages?.[0].corrected},get children(){var u=_(er),$=u.firstChild,w=$.firstChild,A=w.nextSibling,[L,E]=h(A.nextSibling);return L.nextSibling,g($,r(ut,{get href(){return`/results?search_query=${d.data?.pages[0].suggestion}&filter=${a()}`},class:"link !text-accent1",get children(){return d.data?.pages[0].suggestion}}),L,E),u}}),(()=>{var u=_(nr),$=u.firstChild,[w,A]=h($.nextSibling),L=w.nextSibling,[E,B]=h(L.nextSibling),Q=E.nextSibling,[ee,se]=h(Q.nextSibling),oe=ee.nextSibling;return me(I=>R(I),u),g(u,r(D,{get when(){return d.data?.pages?.[0]?.items.length===0},get children(){var I=_(tr);return g(I,r(it,{})),I}}),w,A),g(u,r(D,{get when(){return d.data?.pages?.[0]?.items&&d.data.pages[0].items.length>0},get fallback(){return r(Z,{get each(){return Array(40).fill(0)},children:()=>r(ge,{v:void 0})})},get children(){return r(Z,{get each(){return d.data.pages?.map(I=>I.items).flat().filter((I,P,Y)=>Y.findIndex(ce=>ce?.url===I?.url)===P).filter(I=>!l.store.blocklist[I.uploaderUrl?.split("/").pop()])},children:I=>r(D,{get when(){return jt(C(),I,P=>K(Y=>[...Y,P.message]))},get children(){return r(we,{get children(){return[r(V,{get when(){return fe(I,"type","stream")},keyed:!0,children:P=>r(ge,{v:P})}),r(V,{get when(){return fe(I,"type","channel")},keyed:!0,children:P=>r(zt,{item:P})}),r(V,{get when(){return fe(I,"type","playlist")},keyed:!0,children:P=>r(st,{item:P})})]}})}})})}}),E,B),g(u,r(D,{get when(){return o.loading},get children(){var I=_(rr);return g(I,r(et,{})),I}}),ee,se),me(I=>k(I),oe),u})()]}})}Ce(["click"]);export{br as default};
//# sourceMappingURL=results-CjgOVixw.js.map