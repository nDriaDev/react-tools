import{r,j as a}from"./index-5eafcd1e.js";import{v as y}from"./mov_bbb-3a4cadaf.js";import{u as x}from"./useSyncExternalStore-543af22c.js";const k=({onConnecting:o,onConnect:l,onDisconnect:i,onError:c}={})=>{const n="RemotePlayback"in window,u=r.useRef(),d=r.useRef("disconnected"),e=r.useRef(),p=r.useRef(),m=r.useCallback(s=>e.current&&n?e.current.watchAvailability(s).then(t=>{p.current=t}).catch(t=>{if(c)c(t);else throw t}):Promise.resolve(),[n,c]),f=r.useCallback(()=>p.current&&e.current&&n?e.current.cancelWatchAvailability().catch(s=>{if(c)c(s);else throw s}):Promise.resolve(),[n,c]),b=r.useCallback(()=>n&&e.current?e.current.prompt():Promise.resolve(),[n]),h=r.useCallback(s=>{s&&n?(e.current=s.remote,e.current.onconnect=t=>{l&&l(t),d.current="connected",u.current&&u.current()},e.current.onconnecting=t=>{o&&o(t),d.current="connecting",u.current&&u.current()},e.current.ondisconnect=t=>{i&&i(t),d.current="disconnected",u.current&&u.current()},m(t=>!t&&(d.current="unavailable"))):(e.current&&(f(),e.current.onconnect=null,e.current.onconnecting=null,e.current.ondisconnect=null),e.current=void 0)},[n,l,o,i,m,f]),v=x(r.useCallback(s=>(u.current=s,()=>{u.current=void 0}),[]),r.useCallback(()=>d.current,[]));return{ref:h,isSupported:n,state:v,prompt:b}},P=()=>{const{isSupported:o,ref:l,prompt:i,state:c}=k();return a.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"fit-content",alignItems:"center",margin:"0 auto"},children:[a.jsxs("p",{children:["Is supported: ",o?"Yes":"No"]}),a.jsxs("p",{children:["Current state: ",c]}),a.jsxs("video",{ref:l,width:"400",controls:!0,children:[a.jsx("source",{src:y,type:"video/mp4"}),"Your browser does not support HTML video."]}),a.jsx("button",{style:{marginTop:20},onClick:i,disabled:c==="unavailable",children:"Prompt"})]})};export{P as UseRemotePlayback};
