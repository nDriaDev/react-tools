import{r as i,j as r}from"./index-75043133.js";import{u as c}from"./useResizeObserver-6fa0bcbb.js";import"./useEffectOnce-75fd0f35.js";const l=()=>{const[o,s]=i.useState(()=>new DOMRect),[n]=c(i.useCallback(u=>{s(e=>{const t=u[0].target.getBoundingClientRect();return t.top!==e.top||t.left!==e.left||t.right!==(e==null?void 0:e.right)||t.bottom!==e.bottom?t:e})},[]));return[n,o]},f=()=>{const[o,s]=l();return r.jsxs("div",{style:{margin:"0 auto"},children:[r.jsxs("p",{children:["Dimensions: ",JSON.stringify(s)]}),r.jsx("br",{}),r.jsx("div",{ref:o,style:{margin:"0 auto",width:100,height:100,overflow:"auto",resize:"both",border:"1px solid lightblue"}})]})};export{f as UseMeasure};