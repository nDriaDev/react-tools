import{r as o,j as e}from"./index-5eafcd1e.js";import{u as x}from"./useMemoizedFn-9a270ad4.js";const j=t=>{const[a,s]=o.useState(t),i=x(()=>a),n=o.useCallback(()=>s(t),[t]);return[a,s,i,n]},l={},r=o.memo(({id:t,name:a,value:s,onChange:i})=>(l[t]=l[t]!==void 0?++l[t]:1,e.jsxs("div",{style:{gridTemplateColumns:"1fr 1.5fr",justifyContent:"center",textAlign:"left",display:"grid",gap:5},children:[e.jsxs("label",{htmlFor:t,children:[a,": render ",l[t]]}),e.jsx("input",{type:"text",id:t,name:a,value:s,onChange:i})]}))),p=()=>{const[t,a,s,i]=j({id:"",name:"",eta:""}),[n,m]=o.useState({id:"",name:"",eta:""}),u=o.useCallback(d=>{const g=s();a({...g,[d.target.name]:d.target.value})},[s,a]),c=o.useCallback(d=>{m({...n,[d.target.name]:d.target.value})},[n,m]);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:50},children:[e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"With get and reset"})}),e.jsxs("div",{style:{gridTemplateRows:"auto auto auto auto",justifyContent:"center",display:"grid",gap:"10px"},children:[e.jsx(r,{id:"idG",name:"id",value:t.id,onChange:u}),e.jsx(r,{id:"nameG",name:"name",value:t.name,onChange:u}),e.jsx(r,{id:"etaG",name:"eta",value:t.eta,onChange:u}),e.jsx("button",{onClick:i,children:"Reset State"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Without get and reset"})}),e.jsxs("div",{style:{gridTemplateRows:"auto auto auto",justifyContent:"center",display:"grid",gap:"10px"},children:[e.jsx(r,{id:"id",name:"id",value:n.id,onChange:c}),e.jsx(r,{id:"name",name:"name",value:n.name,onChange:c}),e.jsx(r,{id:"eta",name:"eta",value:n.eta,onChange:c})]})]})]})};p.displayName="UseStateGetReset";export{p as UseStateGetReset};
