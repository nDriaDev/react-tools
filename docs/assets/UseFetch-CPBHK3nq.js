import{r as f,j as r}from"./index-09xe1hXZ.js";const x=(o,{suspensable:p,onError:l,onLoading:t,...u}={})=>{const[d,n]=f.useState({loading:!1,error:void 0,data:void 0,suspended:!1}),c=f.useRef();if(d.suspended)throw c.current;const j=f.useCallback(h=>{if(p){let e;return c.current=fetch(o,{...u,...h}).then(s=>{var a,i;return e=s,!e.headers.get("Content-Type")||(a=e.headers.get("Content-Type"))!=null&&a.startsWith("text")?e.text():(i=e.headers.get("Content-Type"))!=null&&i.includes("json")?e.json():e.blob()}).then(s=>{if(e.ok)n({error:void 0,loading:!1,data:s,suspended:!1}),c.current=void 0,t&&t(!1);else{const a=s||e.status+" - "+e.statusText;n({loading:!1,data:void 0,error:a,suspended:!1}),c.current=void 0,t&&t(!1),l&&l(a)}}).catch(s=>{const a=typeof s=="string"?s:s.message;n({error:a,data:void 0,loading:!1,suspended:!1}),c.current=void 0,t&&t(!1),l&&l(a)}),n({loading:!0,data:void 0,error:void 0,suspended:!0}),c.current}else{let e;return t&&t(!0),n({loading:!0,error:void 0,data:void 0,suspended:!1}),fetch(o,{...u,...h}).then(s=>{var a,i;return e=s,!e.headers.get("Content-Type")||(a=e.headers.get("Content-Type"))!=null&&a.startsWith("text")?e.text():(i=e.headers.get("Content-Type"))!=null&&i.includes("json")?e.json():e.blob()}).then(s=>{if(e.ok)n({error:void 0,loading:!1,data:s,suspended:!1}),t&&t(!1);else{const a=s||e.status+" - "+e.statusText;n({loading:!1,data:void 0,error:a,suspended:!1}),t&&t(!1),l&&l(a)}}).catch(s=>{const a=typeof s=="string"?s:s.message;n({error:a,data:void 0,loading:!1,suspended:!1}),t&&t(!1),l&&l(a)})}},[u,o,l,t,p]);return[d.data,j,d.loading,d.error]},v=()=>{const[o,p]=x("https://jsonplaceholder.typicode.com/comments?id=5",{cache:"no-cache",suspensable:!0}),[l,t,u,d]=x("https://jsonplaceholder.typicode.com/comments?id=5",{cache:"no-cache"});return u?r.jsx("p",{children:"Loading..."}):d?r.jsxs("p",{children:["Error: ",JSON.stringify(d)]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>p(),children:"Call suspensable"}),r.jsx("button",{onClick:()=>t(),children:"Call"}),r.jsx("pre",{children:JSON.stringify(o??l,null,2)})]})},y=()=>r.jsx(f.Suspense,{fallback:"loading suspense...",children:r.jsx(v,{})});export{v as Delayed,y as UseFetch};