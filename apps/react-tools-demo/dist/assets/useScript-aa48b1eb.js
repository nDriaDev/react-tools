import{r as i}from"./index-5eafcd1e.js";import{u as v}from"./useEffectOnce-bbae9380.js";import{u as E}from"./useSyncExternalStore-543af22c.js";const p=e=>{let r="script";for(const[s,t]of Object.entries(e))t&&(r+=`[${s}${typeof t=="boolean"?"":`="${t}"`}]`);return document.querySelector(r)},S=e=>{const r=document.createElement("script");return e.src&&(r.src=e.src),e.async&&(r.async=!0),e.defer&&(r.defer=!0),e.type&&r.setAttribute("type",e.type),e.crossorigin&&r.setAttribute("crossorigin",e.crossorigin),e.fetchpriority&&r.setAttribute("fetchpriority",e.fetchpriority),e.integrity&&r.setAttribute("integrity",e.integrity),e.nonce&&r.setAttribute("nonce",e.nonce),e.nomodule&&r.setAttribute("nomodule",e.nomodule.toString()),e.referrerpolicy&&r.setAttribute("referrerpolicy",e.referrerpolicy),r.setAttribute("data-status","loading"),r},L=function(e,r){const s=i.useRef(r),t=i.useRef(e),[f,g]=i.useState(s.current.handleAppending?1:0),A=i.useCallback((o,n)=>{o&&(t.current=o),n&&(s.current.iframe=n),g(l=>l+1)},[]),m=i.useCallback(()=>{var n;const o=p(t.current);(n=o==null?void 0:o.parentElement)==null||n.removeChild(o)},[]);return v(()=>()=>{s.current.removeOnUnmount&&m()}),[E(i.useCallback(o=>{var n,l;if(f%2===0){let u,y=!0;u=p(t.current),u||(y=!1,u=S(t.current));const a=c=>{const d=p(t.current);d==null||d.setAttribute("data-status",c.type==="load"?"ready":"error"),o()};return u.addEventListener("load",a,{passive:!0}),u.addEventListener("error",a,{passive:!0}),!y&&(((l=(n=s.current.iframe)==null?void 0:n.contentWindow)==null?void 0:l.document)||document).body.appendChild(u),()=>{const c=p(t.current);c==null||c.removeEventListener("load",a),c==null||c.removeEventListener("error",a)}}else return()=>{}},[f]),i.useCallback(()=>{var n;return((n=p(t.current))==null?void 0:n.getAttribute("data-status"))??(s.current.handleAppending?"idle":"loading")},[])),A,m]};export{L as u};
