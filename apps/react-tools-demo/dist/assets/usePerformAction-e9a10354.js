import{r as e}from"./index-5eafcd1e.js";function f(r){const[u,n]=e.useState(r),t=e.useRef();return r!==u&&(t.current!==null&&clearTimeout(t.current),t.current=setTimeout(()=>n(r))),u}const a=e.useDeferredValue!==void 0?e.useDeferredValue:f,d=r=>{const[u,n]=e.useReducer(c=>c+1e-4,0),t=a(u),o=e.useRef(r),s=e.useRef();return e.useEffect(()=>{t!==0&&(s.current?o.current(...s.current):o.current())},[t]),e.useCallback((...c)=>{s.current=c,n()},[])};export{d as u};
