import{r as c,j as i}from"./index-5eafcd1e.js";import{u as o}from"./useMediaDevices-25b076cd.js";import"./useEffectOnce-bbae9380.js";const h=()=>{const l=o("devicesList"),[t,n]=c.useState([]),a=async()=>{try{const e=await l(async()=>{n(await l())});n(e.reduce((s,r)=>(s.every(d=>d.deviceId!==r.deviceId)&&s.push(r),s),[]))}catch(e){alert(e.message)}};return i.jsxs("div",{style:{display:"grid",gridTemplateRows:"auto auto",justifyContent:"center",gap:50,maxHeight:350,overflow:"auto"},children:[i.jsx("button",{onClick:a,children:"Acquire"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"center",gap:50,maxHeight:350,overflow:"auto"},children:[i.jsxs("div",{style:{textAlign:"center"},children:[i.jsxs("p",{children:["Camera ",t.filter(e=>e.kind==="videoinput").length]}),i.jsx("ul",{children:t.filter(e=>e.kind==="videoinput").map(e=>i.jsx("li",{children:e.label},e.label))})]}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsxs("p",{children:["Spearker ",t.filter(e=>e.kind==="audiooutput").length]}),i.jsx("ul",{children:t.filter(e=>e.kind==="audiooutput").map(e=>i.jsx("li",{children:e.label},e.label))})]}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsxs("p",{children:["Microphones ",t.filter(e=>e.kind==="audioinput").length]}),i.jsx("ul",{children:t.filter(e=>e.kind==="audioinput").map(e=>i.jsx("li",{children:e.label},e.label))})]})]})]})};export{h as UseMediaDevices};
