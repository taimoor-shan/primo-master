import{I as p,as as T,a1 as x,s as O,Z as U}from"./index.0bca4926.js";const f=[];function L(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const r=new Set;function a(s){if(O(e,s)&&(e=s,n)){const i=!f.length;for(const l of r)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){a(s(e))}function o(s,i=p){const l=[s,i];return r.add(l),r.size===1&&(n=t(a)||p),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:c,subscribe:o}}function K(e,t,n){const r=!Array.isArray(e),a=r?[e]:e,c=t.length<2;return L(n,o=>{let s=!1;const i=[];let l=0,_=p;const h=()=>{if(l)return;_();const u=t(r?i[0]:i,o);c?o(u):_=U(u)?u:p},R=a.map((u,g)=>T(u,S=>{i[g]=S,l&=~(1<<g),s&&h()},()=>{l|=1<<g}));return s=!0,h(),function(){x(R),_(),s=!1}})}var y;const N=((y=globalThis.__sveltekit_11ypcmv)==null?void 0:y.base)??"";var A;const P=((A=globalThis.__sveltekit_11ypcmv)==null?void 0:A.assets)??N,V="1703197322319",$="sveltekit:snapshot",z="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},w=location.origin;function D(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function G(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const k={...v,"":v.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function X(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function B(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||j(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===w&&e.hasAttribute("download");return{url:n,external:a,target:r,download:c}}function H(e){let t=null,n=null,r=null,a=null,c=null,o=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),a===null&&(a=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),o===null&&(o=d(s,"replacestate")),s=E(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:k[r??"off"],preload_data:k[a??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(o)}}function m(e){const t=b(e);let n=!0;function r(){n=!0,t.update(o=>o)}function a(o){n=!1,t.set(o)}function c(o){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&o(s=i)})}return{notify:r,set:a,subscribe:c}}function Y(){const{set:e,subscribe:t}=b(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const o=(await a.json()).version!==V;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:r}}function j(e,t){return e.origin!==w||!e.pathname.startsWith(t)}let I;function W(e){I=e.client}function Z(e){return(...t)=>I[e](...t)}const F={url:m({}),page:m({}),navigating:b(null),updated:Y()};export{C as I,v as P,z as S,$ as a,B as b,H as c,F as d,N as e,X as f,D as g,W as h,j as i,I as j,K as k,Z as l,w as o,L as r,G as s,b as w};
//# sourceMappingURL=singletons.8ee9b9e3.js.map
