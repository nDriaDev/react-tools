import{r as a,j as o}from"./index-HAZn9Uo2.js";import{E as u}from"./ErrorBoundary-28YAWNvA.js";import{u as l}from"./useEffectOnce-UzWkctVu.js";import{i as m}from"./isDeepEqual-miY4iMQs.js";const r=[],h=(i,c,n={})=>{let t=-1;l(()=>()=>{n.cache==="unmount"&&(t!==-1&&r.splice(t,1),t=-1)});for(const e in r)if(m([...c,n.identifier??String.raw`${i.toString()}`],[...r[e].deps,r[e].identifier]))if(r[e].cache&&r[e].cache!=="unmount"&&Date.now()>r[e].cache){r.splice(Number(e),1);break}else{if(t=Number(e),"error"in r[e])throw n.cleanOnError&&(r[e].errorTimeout!==-1&&clearTimeout(r[e].errorTimeout),r[e].errorTimeout=setTimeout(()=>{r.splice(Number(e),1)},20)),r[e].error;if("response"in r[e])return r[e].response;throw r[e].promise}const s={deps:c,identifier:n.identifier??String.raw`${i.toString()}`,cache:n.cache?n.cache==="unmount"?"unmount":Date.now()+n.cache*1e3:null,promise:i().then(e=>{s.response=e}).catch(e=>{s.error=e})};throw t=r.push(s)-1,s.promise},f=()=>{const i=h(async()=>await new Promise((c,n)=>{console.log("called"),setTimeout(()=>{Math.random()>.5?c([1,2,3,4,5]):n("Error throwed by promise")},4e3)}),[],{cache:25,cleanOnError:!0,identifier:"ss"});return o.jsx(o.Fragment,{children:o.jsx("pre",{children:JSON.stringify(i)})})},w=()=>{const i=a.useCallback((c,n,t)=>o.jsx("button",{onClick:t,children:"Retry"}),[]);return o.jsx(u,{fallback:i,children:o.jsx(a.Suspense,{fallback:"loading...",children:o.jsx(f,{})})})};export{w as UsePromiseSuspensible};