import{r as n,j as i}from"./index-uMjCFCDe.js";import{u as a}from"./useRerender-yT4mnaH2.js";import{u as o}from"./useInterval-4BBSQkwH.js";import{u}from"./useLazyRef-f_i0DF3L.js";const l=()=>(console.log("initializer run..."),Array(100).fill(!0).reduce((r,s,e)=>r+e,0)),c=()=>(console.log("initializerLazy run..."),Array(100).fill(!0).reduce((r,s,e)=>r+e,0)),y=()=>{const r=a(),[s]=o(()=>r(),1e3),e=u(c),t=n.useRef(l());return s(),i.jsxs("div",{children:[i.jsxs("p",{children:["Value is: ",t.current]}),i.jsxs("p",{children:["LazyValue is: ",e.current]})]})};export{y as UseLazyRef};