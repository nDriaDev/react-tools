import{r as n,j as i}from"./index-09xe1hXZ.js";import{u as a}from"./useRerender-BnCx-7mF.js";import{u as o}from"./useInterval-45x9DDzJ.js";import{u}from"./useLazyRef-vaF909wL.js";const l=()=>(console.log("initializer run..."),Array(100).fill(!0).reduce((r,s,e)=>r+e,0)),c=()=>(console.log("initializerLazy run..."),Array(100).fill(!0).reduce((r,s,e)=>r+e,0)),y=()=>{const r=a(),[s]=o(()=>r(),1e3),e=u(c),t=n.useRef(l());return s(),i.jsxs("div",{children:[i.jsxs("p",{children:["Value is: ",t.current]}),i.jsxs("p",{children:["LazyValue is: ",e.current]})]})};export{y as UseLazyRef};