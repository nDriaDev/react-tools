import{r as n,j as s}from"./index-7b09dd01.js";import{u as o}from"./useEvents-a425123c.js";const i=n.memo(()=>{const[,e]=o(),a=n.useCallback(t=>{e(new CustomEvent("demo",{detail:{value:t.target.value}}))},[e]);return s.jsx("input",{type:"text",onChange:a})}),c=()=>{const[e,a]=n.useState({value:""}),[t]=o();return n.useEffect(()=>{const r=t("demo",u=>{a(u.detail)});return()=>{r()}},[t]),s.jsxs("div",{children:[s.jsxs("p",{children:["Value is: ",e.value]}),s.jsx(i,{})]})};c.displayName="UseEvents";export{c as UseEvents};
