import{r as c,j as m}from"./index-5eafcd1e.js";import{u as j}from"./useEffectOnce-bbae9380.js";function d(s){return s.length===0?"":`importScripts(${s.map(e=>`'${e}'`).toString()})`}function R(s){return o=>{postMessage(["RUNNING"]);const e=o.data[0];return Promise.resolve(s.apply(void 0,e)).then(r=>{postMessage(["SUCCESS",r])}).catch(r=>{postMessage(["ERROR",r])})}}function b(s,o){const e=`${o?d(o)+"; ":""}onmessage=(${R})(${s})`,r=new Blob([e],{type:"text/javascript"});return URL.createObjectURL(r)}const g=(s,o)=>{const e=c.useRef(),r=c.useRef(""),u=c.useRef(""),n=c.useRef({resolve:void 0,reject:void 0}),a=c.useCallback((...t)=>{var l;const i=new Promise((p,f)=>{n.current={resolve:p,reject:f}});return u.current==="RUNNING"?Promise.reject(Error("Fn Worker alreay running.")):((l=e.current)==null||l.postMessage([[...t]]),i)},[]);return j(()=>(r.current=b(s,o),e.current=new Worker(r.current),e.current.onmessage=t=>{const[i,l]=t.data;u.current=i,i!=="RUNNING"&&(i==="SUCCESS"?n.current.resolve&&n.current.resolve(l):n.current.reject&&n.current.reject(l))},e.current.onmessageerror=t=>{n.current.reject&&n.current.reject(t.data)},e.current.onerror=t=>{n.current.reject&&n.current.reject(t)},()=>{var t;URL.revokeObjectURL(r.current),(t=e.current)==null||t.terminate(),e.current=void 0,r.current=""})),a},S=()=>{const[s,o]=c.useState(Date.now()),[e,r]=c.useState(""),u=c.useCallback(()=>Array(5e6).fill(!0).map(()=>Math.random()*11).slice(0,5).map(t=>Math.floor(t)),[]),n=g(u);return c.useEffect(()=>{const a=setInterval(()=>o(Date.now()),1);return()=>clearInterval(a)},[]),m.jsxs("div",{children:[m.jsxs("p",{children:["Timestamp: ",s]}),m.jsxs("p",{children:["Result: ",e||""]}),m.jsx("button",{onClick:()=>{r("Pending..."),r(u().join(","))},children:"Start in Main Thread"}),m.jsx("button",{onClick:()=>{r("Pending..."),n().then(a=>r(a.join(",")))},children:"Start in Web Worker"})]})};export{S as UseWebWorkerFn};
