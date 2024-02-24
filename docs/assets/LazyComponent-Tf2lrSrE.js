import{j as p,r as l,_ as u}from"./index-t7AdqrYD.js";const c=[],m=({factory:o,componentName:e,beforeLoad:n,afterLoad:s})=>{const i=o.toString();for(const r of c)if(r.factorySerialized===i){if(r.response)return s&&s(),r.response&&r.response();throw r.error?r.error:r.promise}const t={factorySerialized:String.raw`${i}`,promise:(n&&n(),o().then(r=>{"default"in r&&(t.response=r.default),e&&e in r&&(t.response=r[e]);const a=Reflect.ownKeys(r).filter(f=>f!=="__esModule");throw a.length>0&&(t.response=r[a[0]]),Error("Invalid import")}).catch(r=>t.error=r))};throw c.push(t),t.promise},d=({factory:o,componentName:e,fallback:n,beforeLoad:s,afterLoad:i})=>p.jsx(l.Suspense,{fallback:n,children:p.jsx(m,{factory:o,componentName:e,beforeLoad:s,afterLoad:i})});function _(){return p.jsx(d,{factory:()=>u(()=>import("./LazyComp--2zb9xqb.js"),__vite__mapDeps([0,1,2])).then(async o=>(await new Promise(e=>setTimeout(e,5e3)),o)),fallback:p.jsx("p",{children:"Loading component..."})})}export{_ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LazyComp--2zb9xqb.js","assets/index-t7AdqrYD.js","assets/index-81s9do9M.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
