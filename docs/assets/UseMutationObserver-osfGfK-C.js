import{r as s,j as n}from"./index-K3kjPFtB.js";import{u as h}from"./useEffectOnce-8ac9fXVo.js";const x=(d,o)=>{const t=s.useRef(),u=s.useRef(!0),c=s.useRef();return h(()=>()=>{var e;c.current=void 0,(e=t.current)==null||e.disconnect(),t.current=void 0}),[s.useCallback(e=>{!u.current||!e||e&&(!c.current||c.current!==e)&&(c.current=e,t.current=new MutationObserver(d),t.current.observe(e,o))},[d,o]),s.useCallback(()=>{u.current&&(u.current=!1,t.current&&c.current&&t.current.disconnect())},[]),s.useCallback(()=>{u.current||(u.current=!0,t.current&&c.current&&t.current.observe(c.current,o))},[o]),s.useCallback(()=>{var e;return(e=t.current)==null?void 0:e.takeRecords()},[])]},v=()=>{const[d,o]=s.useState([]),[t,u]=s.useState([]),[c,e,f]=x(r=>{for(const l of r){const i=[];l.addedNodes.forEach(a=>i.push(`Added node: ${a.textContent}`)),l.removedNodes.forEach(a=>i.push(`Removed node: ${a.textContent}`)),o(a=>a.concat(i))}},{childList:!0,subtree:!0});return n.jsxs("div",{children:[n.jsx("button",{onClick:()=>u(r=>[...r,r.length.toString()]),children:"ADD child"}),n.jsx("button",{onClick:()=>u(r=>r.filter((l,i)=>i!==r.length-1)),children:"Remove child"}),n.jsx("button",{onClick:f,children:"Reconnect"}),n.jsx("button",{onClick:e,children:"Disconnect"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto auto",gap:50},children:[n.jsx("div",{children:n.jsx("ul",{ref:c,children:t.map(r=>n.jsxs("li",{children:["Item ",r]},r))})}),n.jsx("div",{children:d.map(r=>n.jsx("p",{children:r}))})]})]})};export{v as UseMutationObserver};