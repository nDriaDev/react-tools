import{r as t,j as e}from"./index-75043133.js";import{u as d}from"./usePerformAction-20005851.js";import{u as a}from"./useScript-a003c896.js";import"./useEffectOnce-75fd0f35.js";import"./useSyncExternalStore-4a64d9ce.js";const i=t.memo(({btnRef:s})=>e.jsxs("div",{className:"dropdown",children:[e.jsx("button",{ref:s,className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown button"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx("p",{className:"dropdown-item",children:"Action"})}),e.jsx("li",{children:e.jsx("p",{className:"dropdown-item",children:"Another action"})}),e.jsx("li",{children:e.jsx("p",{className:"dropdown-item",children:"Something else here"})})]})]})),c=t.memo(({action:s})=>{const[r,n]=t.useState(""),l=t.useCallback(async o=>{n(o.target.value),o.target.value==="2"&&s()},[s]);return e.jsxs("select",{onChange:l,value:r,children:[e.jsx("option",{}),e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"})]})}),p=()=>{const s=t.useRef(null),r=()=>{var n;return(n=s.current)==null?void 0:n.click()};return e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Component without performAction"})}),e.jsx(c,{action:r}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{btnRef:s})]})},u=()=>{const s=t.useRef(null),r=d(()=>{var n;return(n=s.current)==null?void 0:n.click()});return e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Component with performAction"})}),e.jsx(c,{action:r}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{btnRef:s})]})},m=()=>{const[s]=a({src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",crossorigin:"anonymous"},{removeOnUnmount:!0});return s==="loading"?null:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:50},children:[e.jsx(p,{}),e.jsx(u,{})]})};m.displayName="UsePerformAction";export{m as UsePerformAction};