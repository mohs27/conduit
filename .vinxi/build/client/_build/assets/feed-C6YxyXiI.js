import{j as d,A as l,e,r as s,S as o,w as p,K as f,G as O,F as j,U as k,y as i}from"./routing-BmD2xUmi.js";import{I as C,L as T,$ as A,a0 as E,a1 as F,a2 as R,a3 as I,G as P,O as q,a4 as N}from"./syncStore-BssUQgBy.js";import{c as G}from"./index-B3L84c1c.js";import{E as K}from"./Error-BKJrmN_l.js";import{u as L}from"./useIntersectionObserver-DOCe7fLW.js";import{E as M}from"./EmptyState-BuYdpmYU.js";import{u as U}from"./Link-Dg-h0Eyu.js";import{a as z}from"./index-BnPmuIsI.js";import{T as B}from"./index-DyZHI5kj.js";import"./index-Cb4tY8hP.js";import"./index-DPECAXpK.js";import"./components-BMGKah2q.js";var D=i("<p>Refresh (Shift + R)"),H=i('<div class="h-[80vh] w-full flex items-center justify-center">'),J=i('<div class="mx-2 flex flex-wrap gap-2 justify-center"><!$><!/><!$><!/>'),Q=i('<div class="h-20 ">');function le(){const[m,h]=d(10),[a]=C(),n=T(),r=G(()=>({queryKey:["feed",a.instance.api_url,n.store.subscriptions],queryFn:async()=>{const t=await fetch(a.instance.api_url+"/feed/unauthenticated",{method:"POST",body:JSON.stringify(Object.keys(n.store.subscriptions))});if(!t.ok)throw new Error("Error fetching feed");return t.json()},enabled:!!(a.instance?.api_url&&Object.keys(n.store.subscriptions).length>0),placeholderData:Array(50).fill(void 0),refetchOnMount:!0,refetchOnReconnect:!0})),[g,b]=d(),y=L({setTarget:()=>g()});l(()=>{y()&&h(t=>t+10)});const[V,w]=U();return l(()=>{console.log(n.store.subscriptions,Object.keys(n.store.subscriptions),"feed"),w({loading:r.isRefetching||r.isFetching})}),l(()=>{console.log(r.data,"feed")}),e(k,{get fallback(){return e(A,{})},get children(){return[e(E,{get children(){return[e(F,{class:"fixed bottom-20 sm:bottom-10 right-10 rounded-full w-10 h-10 bg-primary z-50 flex items-center justify-center",onClick:()=>{r.isFetching||r.refetch()},get children(){return e(z,{fill:"currentColor",class:"w-6 h-6"})}}),e(R,{get children(){return e(I,{class:"p-2 bg-bg2 rounded max-w-[min(calc(100vw-16px),380px)] animate-[contentHide] data-[expanded]:animate-[contentShow]",get children(){return[e(P,{}),s(D)]}})}})]}}),e(B,{children:"Feed | Conduit"}),e(o,{get when(){return!Object.keys(n.store.subscriptions).length},get children(){var t=s(H);return p(t,e(M,{message:"You have no subscriptions.",get children(){return e(q,{as:"a",label:"Import",href:"/import"})}})),t}}),e(o,{get when(){return Object.keys(n.store.subscriptions).length},get children(){var t=s(J),S=t.firstChild,[u,x]=f(S.nextSibling),_=u.nextSibling,[$,v]=f(_.nextSibling);return p(t,e(o,{get when(){return!Array.isArray(r.data)},get children(){return e(K,{get error(){return r.data}})}}),u,x),p(t,e(o,{get when(){return r.data&&r.data.length>0},get children(){return e(O,{get each(){return r.data?.filter(c=>!n.store.blocklist[c?.uploaderUrl?.split("/").pop()]).slice(0,m())},children:c=>e(N,{v:c})})}}),$,v),t}}),(()=>{var t=s(Q);return j(b,t),t})()]}})}export{le as default};
//# sourceMappingURL=feed-C6YxyXiI.js.map