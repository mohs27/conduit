const p=/(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:\?hash=(.*))?/,i=new Map,o=new Map;function l(e){const n=e.match(p);return{videoId:n?.[1],hash:n?.[2]}}async function u(e,n){if(i.has(e))return i.get(e);if(o.has(e))return o.get(e);const m=`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${e}`,c=window.fetch(m,{mode:"cors",signal:n.signal}).then(t=>t.json()).then(t=>{const h=/vimeocdn.com\/video\/(.*)?_/,s=t?.thumbnail_url?.match(h)?.[1],a=s?`https://i.vimeocdn.com/video/${s}_1920x1080.webp`:"",r={title:t?.title??"",duration:t?.duration??0,poster:a,pro:t.account_type!=="basic"};return i.set(e,r),r}).finally(()=>o.delete(e));return o.set(e,c),c}export{u as getVimeoVideoInfo,l as resolveVimeoVideoId};
//# sourceMappingURL=vidstack-BTBUzdbF-g1Q0NaiI.js.map