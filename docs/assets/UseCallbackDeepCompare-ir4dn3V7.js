import{r as s,j as a}from"./index-K3kjPFtB.js";import{i as o}from"./isDeepEqual-miY4iMQs.js";const i=(e,r)=>{const t=s.useRef();return(!t.current||!o(t.current,r))&&(t.current=r),s.useCallback(e,t.current)},u=()=>{const[e,r]=s.useState({id:0,name:"state"}),[t,n]=s.useState("Nothing to show..."),c=s.useCallback(()=>{n(`useCallback: id:${e.id} - name:${e.name}`)},[e]),m=i(()=>{n(`useCallbackDeepCompare: id:${e.id} - name:${e.name}`)},[e]);return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Current state: id: ",e.id," - name: ",e.name]}),a.jsx("p",{children:t}),a.jsx("button",{style:{margin:"0 .25rem"},onClick:()=>r(l=>({...l,id:l.id+1})),children:"Increment state counter"}),a.jsx("button",{style:{margin:"0 .25rem"},onClick:c,children:"Set defaultCallback message"}),a.jsx("button",{style:{margin:"0 .25rem"},onClick:m,children:"Set callbackCompare message"})]})};u.displayName="UseCallbackDeepCompare";export{u as UseCallbackDeepCompare};