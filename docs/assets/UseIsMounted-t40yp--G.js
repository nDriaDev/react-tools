import{r,j as s}from"./index-d1B4j_sD.js";import{u as c}from"./useEffectOnce-xpu-5qvP.js";const d=()=>{const e=r.useRef(!1);return c(()=>(e.current=!0,()=>{e.current=!1})),r.useCallback(()=>e.current,[])},o=()=>new Promise(e=>setTimeout(e,5e3)),l=({setMessage:e})=>(c(()=>{o().then(()=>{e(t=>({...t,child1:"OK"}))})}),s.jsx("p",{children:"Child 1"})),u=({setMessage:e})=>{const t=d();return c(()=>{o().then(()=>{t()&&e(n=>({...n,child2:"OK"}))})}),s.jsx("p",{children:"Child 2"})},h=()=>{const[e,t]=r.useState(!0),[n,i]=r.useState({child1:"",child2:""});return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Message Child1: ",n.child1]}),s.jsxs("p",{children:["Message Child2: ",n.child2]}),s.jsx("button",{type:"button",onClick:()=>{t(!e),i({child1:"",child2:""})},children:e?"Hide":"Show"}),e&&s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:50},children:[s.jsx(l,{setMessage:i}),s.jsx(u,{setMessage:i})]})]})};h.displayName="UseIsMounted";export{h as UseIsMounted};