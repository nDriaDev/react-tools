import{r as o,j as e}from"./index-uMjCFCDe.js";import{u as s}from"./useEventListener-PhtLLSs2.js";import"./useMemoizedFn-oHC1E6-h.js";const i=()=>{const r=o.useRef(null),n=s({type:"click",listener:t=>console.log(t)});return s({type:"click",listener:t=>{t.stopPropagation()},element:r,listenerOpts:{capture:!0}}),e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(),children:"Remove"}),e.jsx("button",{ref:r,style:{marginLeft:10},children:"click to log"})]})};i.displayName="UseEventListener";export{i as UseEventListener};