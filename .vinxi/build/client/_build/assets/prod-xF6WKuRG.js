function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/srt-parser-CLUj-8Vk.js","assets/syncStore-BssUQgBy.js","assets/routing-BmD2xUmi.js","assets/Link-Dg-h0Eyu.js","assets/components-BMGKah2q.js","assets/index-BnPmuIsI.js","assets/index-DPECAXpK.js","assets/index-Cb4tY8hP.js","assets/syncStore-CgD1nZSu.css","assets/ssa-parser-CJUgTnfn.js","assets/errors-nIGggbx0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as N}from"./syncStore-BssUQgBy.js";const Q={LoadFail:0,BadSignature:1,BadTimestamp:2,BadSettingValue:3,BadFormat:4,UnknownSetting:5};class Z extends Error{code;line;constructor(t){super(t.reason),this.code=t.code,this.line=t.line}}const z=/\r?\n|\r/gm;class U{writable;readable;constructor(t){const e=new tt(t);this.writable=new WritableStream({write(s){e.transform(s)},close(){e.close()}}),this.readable=new ReadableStream({start(s){e.onLine=a=>s.enqueue(a),e.onClose=()=>s.close()}})}}class tt{x="";y;onLine;onClose;constructor(t){this.y=new TextDecoder(t)}transform(t){this.x+=this.y.decode(t,{stream:!0});const e=this.x.split(z);this.x=e.pop()||"";for(let s=0;s<e.length;s++)this.onLine(e[s].trim())}close(){this.x&&this.onLine(this.x.trim()),this.x="",this.onClose()}}async function et(i,t){const e=new ReadableStream({start(s){const a=i.split(z);for(const r of a)s.enqueue(r);s.close()}});return R(e,t)}async function R(i,t){const e=t?.type??"vtt";let s;if(typeof e=="string")switch(e){case"srt":s=(await N(()=>import("./srt-parser-CLUj-8Vk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))).default;break;case"ssa":case"ass":s=(await N(()=>import("./ssa-parser-CJUgTnfn.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8]))).default;break;default:s=(await Promise.resolve().then(function(){return vt})).default}else s=e;let a;const r=i.getReader(),n=s(),o=!!t?.strict||!!t?.errors;await n.init({strict:!1,...t,errors:o,type:e,cancel(){r.cancel(),a=n.done(!0)}});let l=1;for(;;){const{value:h,done:c}=await r.read();if(c){n.parse("",l),a=n.done(!1);break}n.parse(h,l),l++}return a}async function it(i,t){const e=await i;if(!e.ok||!e.body)return{metadata:{},cues:[],regions:[],errors:[void 0]};const s=e.headers.get("content-type")||"",a=s.match(/text\/(.*?)(?:;|$)/)?.[1],r=s.match(/charset=(.*?)(?:;|$)/)?.[1];return j(e.body,{type:a,encoding:r,...t})}async function j(i,{encoding:t="utf-8",...e}={}){const s=i.pipeThrough(new U(t));return R(s,e)}class $ extends EventTarget{id="";startTime;endTime;text;pauseOnExit=!1;constructor(t,e,s){super(),this.startTime=t,this.endTime=e,this.text=s}addEventListener(t,e,s){super.addEventListener(t,e,s)}removeEventListener(t,e,s){super.removeEventListener(t,e,s)}}const k=typeof document>"u",st=k?$:window.VTTCue;class V extends st{region=null;vertical="";snapToLines=!0;line="auto";lineAlign="start";position="auto";positionAlign="auto";size=100;align="center";style}class G{id="";width=100;lines=3;regionAnchorX=0;regionAnchorY=100;viewportAnchorX=0;viewportAnchorY=100;scroll=""}const P=",",rt="%";function nt(i){const t=parseInt(i,10);return Number.isNaN(t)?null:t}function b(i){const t=parseInt(i.replace(rt,""),10);return!Number.isNaN(t)&&t>=0&&t<=100?t:null}function M(i){if(!i.includes(P))return null;const[t,e]=i.split(P).map(b);return t!==null&&e!==null?[t,e]:null}function at(i){const t=parseFloat(i);return Number.isNaN(t)?null:t}const ot="WEBVTT",O=",",lt="%",m=/[:=]/,ht=/^[\s\t]*(region|vertical|line|position|size|align)[:=]/,ct="NOTE",ut="REGION",ft=/^REGION:?[\s\t]+/,T=/[\s\t]+/,dt="-->",pt=/[\s\t]*-->[\s\t]+/,mt=/start|center|end|left|right/,gt=/start|center|end/,Tt=/line-(?:left|right)|center|auto/,bt=/^(?:(\d{1,2}):)?(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;var H=(i=>(i[i.None=0]="None",i[i.Header=1]="Header",i[i.Cue=2]="Cue",i[i.Region=3]="Region",i[i.Note=4]="Note",i))(H||{});class D{f;c=0;g={};h={};j=[];a=null;b=null;k=[];d;l="";async init(t){this.f=t,t.strict&&(this.c=1),t.errors&&(this.d=(await N(()=>import("./errors-nIGggbx0.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8]))).ParseErrorBuilder)}parse(t,e){if(t==="")this.a?(this.j.push(this.a),this.f.onCue?.(this.a),this.a=null):this.b?(this.h[this.b.id]=this.b,this.f.onRegion?.(this.b),this.b=null):this.c===1&&(this.i(t,e),this.f.onHeaderMetadata?.(this.g)),this.c=0;else if(this.c)switch(this.c){case 1:this.i(t,e);break;case 2:if(this.a){const s=this.a.text.length>0;!s&&ht.test(t)?this.m(t.split(T),e):this.a.text+=(s?`
`:"")+t}break;case 3:this.n(t.split(T),e);break}else if(t.startsWith(ct))this.c=4;else if(t.startsWith(ut))this.c=3,this.b=new G,this.n(t.replace(ft,"").split(T),e);else if(t.includes(dt)){const s=this.o(t,e);s&&(this.a=new V(s[0],s[1],""),this.a.id=this.l,this.m(s[2],e)),this.c=2}else e===1&&this.i(t,e);this.l=t}done(){return{metadata:this.g,cues:this.j,regions:Object.values(this.h),errors:this.k}}i(t,e){if(e>1){if(m.test(t)){const[s,a]=t.split(m);s&&(this.g[s]=(a||"").replace(T,""))}}else t.startsWith(ot)?this.c=1:this.e(this.d?.p())}o(t,e){const[s,a=""]=t.split(pt),[r,...n]=a.split(T),o=v(s),l=v(r);if(o!==null&&l!==null&&l>o)return[o,l,n];o===null&&this.e(this.d?.q(s,e)),l===null&&this.e(this.d?.r(r,e)),o!=null&&l!==null&&l>o&&this.e(this.d?.s(o,l,e))}n(t,e){let s;for(let a=0;a<t.length;a++)if(m.test(t[a])){s=!1;const[r,n]=t[a].split(m);switch(r){case"id":this.b.id=n;break;case"width":const o=b(n);o!==null?this.b.width=o:s=!0;break;case"lines":const l=nt(n);l!==null?this.b.lines=l:s=!0;break;case"regionanchor":const h=M(n);h!==null?(this.b.regionAnchorX=h[0],this.b.regionAnchorY=h[1]):s=!0;break;case"viewportanchor":const c=M(n);c!==null?(this.b.viewportAnchorX=c[0],this.b.viewportAnchorY=c[1]):s=!0;break;case"scroll":n==="up"?this.b.scroll="up":s=!0;break;default:this.e(this.d?.t(r,n,e))}s&&this.e(this.d?.u(r,n,e))}}m(t,e){let s;for(let a=0;a<t.length;a++)if(s=!1,m.test(t[a])){const[r,n]=t[a].split(m);switch(r){case"region":const o=this.h[n];o&&(this.a.region=o);break;case"vertical":n==="lr"||n==="rl"?(this.a.vertical=n,this.a.region=null):s=!0;break;case"line":const[l,h]=n.split(O);if(l.includes(lt)){const g=b(l);g!==null?(this.a.line=g,this.a.snapToLines=!1):s=!0}else{const g=at(l);g!==null?this.a.line=g:s=!0}gt.test(h)?this.a.lineAlign=h:h&&(s=!0),this.a.line!=="auto"&&(this.a.region=null);break;case"position":const[c,f]=n.split(O),y=b(c);y!==null?this.a.position=y:s=!0,f&&Tt.test(f)?this.a.positionAlign=f:f&&(s=!0);break;case"size":const _=b(n);_!==null?(this.a.size=_,_<100&&(this.a.region=null)):s=!0;break;case"align":mt.test(n)?this.a.align=n:s=!0;break;default:this.e(this.d?.v(r,n,e))}s&&this.e(this.d?.w(r,n,e))}}e(t){if(t){if(this.k.push(t),this.f.strict)throw this.f.cancel(),t;this.f.onError?.(t)}}}function v(i){const t=i.match(bt);if(!t)return null;const e=t[1]?parseInt(t[1],10):0,s=parseInt(t[2],10),a=parseInt(t[3],10),r=t[4]?parseInt(t[4].padEnd(3,"0"),10):0,n=e*3600+s*60+a+r/1e3;return e<0||s<0||a<0||r<0||s>59||a>59?null:n}function wt(){return new D}var vt=Object.freeze({__proto__:null,VTTBlock:H,VTTParser:D,default:wt,parseVTTTimestamp:v});const yt=/[0-9]/,At=/[\s\t]+/,F={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span",timestamp:"span"},Et={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" ","&lrm;":"‎","&rlm;":"‏"},_t=/&(?:amp|lt|gt|quot|#(0+)?39|nbsp|lrm|rlm);/g,St=new Set(["white","lime","cyan","red","yellow","magenta","blue","black"]),Nt=new Set(Object.keys(F));function W(i){let t="",e=1,s=[],a=[],r;for(let h=0;h<i.text.length;h++){const c=i.text[h];switch(e){case 1:c==="<"?(l(),e=2):t+=c;break;case 2:switch(c){case`
`:case"	":case" ":n(),e=4;break;case".":n(),e=3;break;case"/":e=5;break;case">":n(),e=1;break;default:!t&&yt.test(c)&&(e=6),t+=c;break}break;case 3:switch(c){case"	":case" ":case`
`:o(),r&&r.class?.trim(),e=4;break;case".":o();break;case">":o(),r&&r.class?.trim(),e=1;break;default:t+=c}break;case 4:c===">"?(t=t.replace(At," "),r?.type==="v"?r.voice=S(t):r?.type==="lang"&&(r.lang=S(t)),t="",e=1):t+=c;break;case 5:c===">"&&(t="",r=a.pop(),e=1);break;case 6:if(c===">"){const f=v(t);f!==null&&f>=i.startTime&&f<=i.endTime&&(t="timestamp",n(),r.time=f),t="",e=1}else t+=c;break}}function n(){if(Nt.has(t)){const h=r;r=Rt(t),h?(a[a.length-1]!==h&&a.push(h),h.children.push(r)):s.push(r)}t="",e=1}function o(){if(r&&t){const h=t.replace("bg_","");St.has(h)?r[t.startsWith("bg_")?"bgColor":"color"]=h:r.class=r.class?r.class+" "+t:t}t=""}function l(){if(!t)return;const h={type:"text",data:S(t)};r?r.children.push(h):s.push(h),t=""}return e===1&&l(),s}function Rt(i){return{tagName:F[i],type:i,children:[]}}function S(i){return i.replace(_t,t=>Et[t]||"'")}function u(i,t,e){i.style.setProperty(`--${t}`,e+"")}function d(i,t,e=!0){i.setAttribute(`data-${t}`,e===!0?"":e+"")}function A(i,t){i.setAttribute("data-part",t)}function kt(i){return parseFloat(getComputedStyle(i).lineHeight)||0}function Ct(i){if(k)throw Error("[media-captions] called `createVTTCueTemplate` on the server - use `renderVTTCueString`");const t=document.createElement("template");return t.innerHTML=C(i),{cue:i,content:t.content}}function C(i,t=0){return I(W(i),t)}function I(i,t=0){let e,s="";for(const a of i)if(a.type==="text")s+=a.data;else{const r=a.type==="timestamp";e={},e.class=a.class,e.title=a.type==="v"&&a.voice,e.lang=a.type==="lang"&&a.lang,e["data-part"]=a.type==="v"&&"voice",r&&(e["data-part"]="timed",e["data-time"]=a.time,e["data-future"]=a.time>t,e["data-past"]=a.time<t),e.style=`${a.color?`color: ${a.color};`:""}${a.bgColor?`background-color: ${a.bgColor};`:""}`;const n=Object.entries(e).filter(o=>o[1]).map(o=>`${o[0]}="${o[1]===!0?"":o[1]}"`).join(" ");s+=`<${a.tagName}${n?" "+n:""}>${I(a.children)}</${a.tagName}>`}return s}function X(i,t){if(!k)for(const e of i.querySelectorAll('[data-part="timed"]')){const s=Number(e.getAttribute("data-time"));Number.isNaN(s)||(s>t?d(e,"future"):e.removeAttribute("data-future"),s<t?d(e,"past"):e.removeAttribute("data-past"))}}function It(i,t){let e=null,s;function a(){r(),i(...s),s=void 0}function r(){clearTimeout(e),e=null}function n(){s=[].slice.call(arguments),r(),e=setTimeout(a,t)}return n}const p=Symbol(0);function L(i){return i instanceof HTMLElement?{top:i.offsetTop,width:i.clientWidth,height:i.clientHeight,left:i.offsetLeft,right:i.offsetLeft+i.clientWidth,bottom:i.offsetTop+i.clientHeight}:{...i}}function E(i,t,e){switch(t){case"+x":i.left+=e,i.right+=e;break;case"-x":i.left-=e,i.right-=e;break;case"+y":i.top+=e,i.bottom+=e;break;case"-y":i.top-=e,i.bottom-=e;break}}function Lt(i,t){return i.left<=t.right&&i.right>=t.left&&i.top<=t.bottom&&i.bottom>=t.top}function xt(i,t){for(let e=0;e<t.length;e++)if(Lt(i,t[e]))return t[e];return null}function B(i,t){return t.top>=0&&t.bottom<=i.height&&t.left>=0&&t.right<=i.width}function Pt(i,t,e){switch(e){case"+x":return t.left<0;case"-x":return t.right>i.width;case"+y":return t.top<0;case"-y":return t.bottom>i.height}}function Mt(i,t){const e=Math.max(0,Math.min(i.width,t.right)-Math.max(0,t.left)),s=Math.max(0,Math.min(i.height,t.bottom)-Math.max(0,t.top));return e*s/(i.height*i.width)}function x(i,t){return{top:t.top/i.height,left:t.left/i.width,right:(i.width-t.right)/i.width,bottom:(i.height-t.bottom)/i.height}}function q(i,t){return t.top=t.top*i.height,t.left=t.left*i.width,t.right=i.width-t.right*i.width,t.bottom=i.height-t.bottom*i.height,t}const Y=["top","left","right","bottom"];function K(i,t,e,s){const a=x(t,e);for(const r of Y)u(i,`${s}-${r}`,a[r]*100+"%")}function J(i,t,e,s){let a=1,r,n={...t};for(let o=0;o<s.length;o++){for(;Pt(i,t,s[o])||B(i,t)&&xt(t,e);)E(t,s[o],1);if(B(i,t))return t;const l=Mt(i,t);a>l&&(r={...t},a=l),t={...n}}return r||n}const w=Symbol(0);function Ot(i,t,e,s){let a=e.firstElementChild,r=jt(t),n,o=[];if(e[p]||(e[p]=Bt(i,e)),n=q(i,{...e[p]}),e[w])o=[e[w]==="top"?"+y":"-y","+x","-x"];else if(t.snapToLines){let l;switch(t.vertical){case"":o=["+y","-y"],l="height";break;case"rl":o=["+x","-x"],l="width";break;case"lr":o=["-x","+x"],l="width";break}let h=kt(a),c=h*Math.round(r),f=i[l]+h,y=o[0];Math.abs(c)>f&&(c=c<0?-1:1,c*=Math.ceil(f/h)*h),r<0&&(c+=t.vertical===""?i.height:i.width,o=o.reverse()),E(n,y,c)}else{const l=t.vertical==="",h=l?"+y":"+x",c=l?n.height:n.width;E(n,h,(l?i.height:i.width)*r/100),E(n,h,t.lineAlign==="center"?c/2:t.lineAlign==="end"?c:0),o=l?["-y","+y","-x","+x"]:["-x","+x","-y","+y"]}return n=J(i,n,s,o),K(e,i,n,"cue"),n}function Bt(i,t){const e=L(t),s=zt(t);if(t[w]=!1,s.top&&(e.top=s.top,e.bottom=s.top+e.height,t[w]="top"),s.bottom){const a=i.height-s.bottom;e.top=a-e.height,e.bottom=a,t[w]="bottom"}return s.left&&(e.left=s.left),s.right&&(e.right=i.width-s.right),x(i,e)}function zt(i){const t={};for(const e of Y)t[e]=parseFloat(i.style.getPropertyValue(`--cue-${e}`));return t}function jt(i){return i.line==="auto"?i.snapToLines?-1:100:i.line}function $t(i){if(i.position==="auto")switch(i.align){case"start":case"left":return 0;case"right":case"end":return 100;default:return 50}return i.position}function Vt(i,t){if(i.positionAlign==="auto")switch(i.align){case"start":return t==="ltr"?"line-left":"line-right";case"end":return t==="ltr"?"line-right":"line-left";case"center":return"center";default:return`line-${i.align}`}return i.positionAlign}const Gt=["-y","+y","-x","+x"];function Ht(i,t,e,s){let a=Array.from(e.querySelectorAll('[data-part="cue-display"]')),r=0,n=Math.max(0,a.length-t.lines);for(let l=a.length-1;l>=n;l--)r+=a[l].offsetHeight;u(e,"region-height",r+"px"),e[p]||(e[p]=x(i,L(e)));let o={...e[p]};return o=q(i,o),o.width=e.clientWidth,o.height=r,o.right=o.left+o.width,o.bottom=o.top+r,o=J(i,o,s,Gt),K(e,i,o,"region"),o}class Dt{overlay;z;A=0;C="ltr";B=[];D=!1;E;h=new Map;j=new Map;get dir(){return this.C}set dir(t){this.C=t,d(this.overlay,"dir",t)}get currentTime(){return this.A}set currentTime(t){this.A=t,this.update()}constructor(t,e){this.overlay=t,this.dir=e?.dir??"ltr",t.setAttribute("translate","yes"),t.setAttribute("aria-live","off"),t.setAttribute("aria-atomic","true"),A(t,"captions"),this.G(),this.E=new ResizeObserver(this.I.bind(this)),this.E.observe(t)}changeTrack({regions:t,cues:e}){this.reset(),this.J(t);for(const s of e)this.j.set(s,null);this.update()}addCue(t){this.j.set(t,null),this.update()}removeCue(t){this.j.delete(t),this.update()}update(t=!1){this.H(t)}reset(){this.j.clear(),this.h.clear(),this.B=[],this.overlay.textContent=""}destroy(){this.reset(),this.E.disconnect()}I(){this.D=!0,this.K()}K=It(()=>{this.D=!1,this.G();for(const t of this.h.values())t[p]=null;for(const t of this.j.values())t&&(t[p]=null);this.H(!0)},50);G(){this.z=L(this.overlay),u(this.overlay,"overlay-width",this.z.width+"px"),u(this.overlay,"overlay-height",this.z.height+"px")}H(t=!1){if(!this.j.size||this.D)return;let e,s=[...this.j.keys()].filter(r=>this.A>=r.startTime&&this.A<=r.endTime).sort((r,n)=>r.startTime!==n.startTime?r.startTime-n.startTime:r.endTime-n.endTime),a=s.map(r=>r.region);for(let r=0;r<this.B.length;r++){if(e=this.B[r],s[r]===e)continue;if(e.region&&!a.includes(e.region)){const o=this.h.get(e.region.id);o&&(o.removeAttribute("data-active"),t=!0)}const n=this.j.get(e);n&&(n.remove(),t=!0)}for(let r=0;r<s.length;r++){e=s[r];let n=this.j.get(e);n||this.j.set(e,n=this.L(e));const o=this.F(e)&&this.h.get(e.region.id);o&&!o.hasAttribute("data-active")&&(requestAnimationFrame(()=>d(o,"active")),t=!0),n.isConnected||((o||this.overlay).append(n),t=!0)}if(t){const r=[],n=new Set;for(let o=s.length-1;o>=0;o--){if(e=s[o],n.has(e.region||e))continue;const l=this.F(e),h=l?this.h.get(e.region.id):this.j.get(e);l?r.push(Ht(this.z,e.region,h,r)):r.push(Ot(this.z,e,h,r)),n.add(l?e.region:e)}}X(this.overlay,this.A),this.B=s}J(t){if(t)for(const e of t){const s=this.M(e);this.h.set(e.id,s),this.overlay.append(s)}}M(t){const e=document.createElement("div");return A(e,"region"),d(e,"id",t.id),d(e,"scroll",t.scroll),u(e,"region-width",t.width+"%"),u(e,"region-anchor-x",t.regionAnchorX),u(e,"region-anchor-y",t.regionAnchorY),u(e,"region-viewport-anchor-x",t.viewportAnchorX),u(e,"region-viewport-anchor-y",t.viewportAnchorY),u(e,"region-lines",t.lines),e}L(t){const e=document.createElement("div"),s=$t(t),a=Vt(t,this.C);if(A(e,"cue-display"),t.vertical!==""&&d(e,"vertical"),u(e,"cue-text-align",t.align),t.style)for(const n of Object.keys(t.style))e.style.setProperty(n,t.style[n]);if(this.F(t))u(e,"cue-offset",`${s-(a==="line-right"?100:a==="center"?50:0)}%`);else if(u(e,"cue-writing-mode",t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl"),!t.style?.["--cue-width"]){let n=s;a==="line-left"?n=100-s:a==="center"&&s<=50?n=s*2:a==="center"&&s>50&&(n=(100-s)*2);const o=t.size<n?t.size:n;t.vertical===""?u(e,"cue-width",o+"%"):u(e,"cue-height",o+"%")}const r=document.createElement("div");return A(r,"cue"),t.id&&d(r,"id",t.id),r.innerHTML=C(t),e.append(r),e}F(t){return t.region&&t.size===100&&t.vertical===""&&t.line==="auto"}}const Wt=Object.freeze(Object.defineProperty({__proto__:null,CaptionsRenderer:Dt,ParseError:Z,ParseErrorCode:Q,TextCue:$,VTTCue:V,VTTRegion:G,createVTTCueTemplate:Ct,parseByteStream:j,parseResponse:it,parseText:et,parseTextStream:R,parseVTTTimestamp:v,renderVTTCueString:C,renderVTTTokensString:I,tokenizeVTTCue:W,updateTimedVTTCueNodes:X},Symbol.toStringTag,{value:"Module"}));export{Z as P,D as V,H as a,V as b,Q as c,Wt as d,v as p};
//# sourceMappingURL=prod-xF6WKuRG.js.map