import{r as n,j as t}from"./index-HAZn9Uo2.js";import{u as h}from"./useRaf-jshrW517.js";import{u as c}from"./useResizeObserver-bkUtSKAv.js";import"./useEffectOnce-UzWkctVu.js";const d=()=>{const[r,i]=n.useState({width:0,height:0}),[o]=h((e,x,s)=>{i({width:s.width,height:s.height})}),[a]=c(e=>{o(e[0].contentRect)});return t.jsxs("div",{children:[t.jsx("p",{children:"Textarea dimension: "+JSON.stringify(r)}),t.jsx("textarea",{ref:a,rows:3})]})};export{d as UseRaf};