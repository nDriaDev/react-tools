import{r as c,j as e}from"./index-HAZn9Uo2.js";const u=(n,t)=>{const o=c.useRef();c.useEffect(()=>{if(!o.current)o.current=t;else{const s=Reflect.ownKeys(t);for(const r of s)Reflect.get(t,r)!==Reflect.get(o.current,r)&&console.log(n+" component updated",o,t)}},[n,t]),c.useEffect(()=>(console.log(n+" component mounted"),()=>{console.log(n+" component unmounted")}),[])},l=n=>{const[t,o]=c.useState(n.init);return u("Counter",{state:t,props:n}),e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Counter is: ",t]}),e.jsx("button",{type:"button",onClick:()=>o(s=>s+1),children:"Increment"}),e.jsx("button",{type:"button",onClick:()=>o(s=>s-1),children:"Decrement"})]})},f=()=>{const[n,t]=c.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(o=>o+1),children:"Increment"}),e.jsx("br",{}),e.jsx(l,{init:n})]})};export{f as UseLogger};