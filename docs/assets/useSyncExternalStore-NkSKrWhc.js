import{r as t}from"./index-lctRWbll.js";function s(n,e){const[o,a]=t.useState(e()),r=t.useCallback(()=>{a(e())},[e]);return t.useEffect(()=>(r(),n(r)),[r,n]),o}const c=t.useSyncExternalStore===void 0?s:t.useSyncExternalStore;export{c as u};