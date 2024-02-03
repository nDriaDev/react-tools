import{r as i,j as t}from"./index-5eafcd1e.js";import{u as A}from"./useSyncExternalStore-543af22c.js";const L=({mode:p,locationOptions:u,onError:o})=>{const v=i.useRef(),n=i.useRef({isSupported:!!navigator&&"geolocation"in navigator}),l=i.useRef({isSupported:!!navigator&&"geolocation"in navigator}),g=i.useRef(),s=i.useCallback(e=>{l.current={position:e,isSupported:!0},g.current&&g.current()},[]),c=i.useCallback(e=>{if(o)o(e);else throw e},[o]),x=A(i.useCallback(e=>(navigator&&"geolocation"in navigator?(g.current=e,p==="observe"?v.current=navigator.geolocation.watchPosition(s,c,u):p==="current"?navigator.geolocation.getCurrentPosition(s,c,u):e()):l.current={isSupported:!1},()=>{g.current=void 0,p==="observe"&&v.current&&navigator.geolocation.clearWatch(v.current)}),[s,c,u,p]),i.useCallback(()=>{var e,d,h,r,a,f,b,C,P,S,k,w,y,R;return(((e=n.current)==null?void 0:e.isSupported)!==((d=n.current)==null?void 0:d.isSupported)||((r=(h=n.current)==null?void 0:h.position)==null?void 0:r.timestamp)!==((f=(a=l.current)==null?void 0:a.position)==null?void 0:f.timestamp)||((C=(b=n.current)==null?void 0:b.position)==null?void 0:C.coords.latitude)!==((S=(P=l.current)==null?void 0:P.position)==null?void 0:S.coords.latitude)||((w=(k=n.current)==null?void 0:k.position)==null?void 0:w.coords.longitude)!==((R=(y=l.current)==null?void 0:y.position)==null?void 0:R.coords.longitude))&&(n.current={...l.current}),n.current},[])),m=i.useCallback(()=>{let e,d;const h=new Promise((r,a)=>{e=r,d=a});if(navigator&&"geolocation"in navigator)navigator.geolocation.getCurrentPosition(r=>{s(r),e()},r=>{c(r),d()},u);else return Promise.resolve();return h},[s,c,u]),j=i.useCallback(()=>{let e,d,h,r=new Promise((a,f)=>{d=a,h=f});return navigator&&"geolocation"in navigator?e=navigator.geolocation.watchPosition(a=>{s(a),d()},a=>{c(a),h()},u):r=Promise.resolve(),r.then(()=>()=>e&&navigator.geolocation.clearWatch(e))},[s,c,u]);return[x,m,j]},E=()=>{var n,l,g,s,c,x,m,j;const[p,u]=i.useState(""),[o,v]=L({mode:"manual",onError(e){u(e.message)}});return t.jsxs("div",{style:{textAlign:"left",width:"fit-content",margin:"0 auto"},children:[p&&t.jsx("p",{style:{color:"red"},children:p}),t.jsx("br",{}),t.jsx("button",{onClick:v,children:"Get Location"}),t.jsx("br",{}),t.jsxs("p",{children:["isSupported: ",o.isSupported?"true":"false"]}),t.jsxs("p",{children:["Timestamp: ",(n=o==null?void 0:o.position)==null?void 0:n.timestamp]}),t.jsx("p",{children:"Coords:"}),t.jsxs("div",{style:{paddingLeft:10,textAlign:"left",width:"fit-content",margin:"0 auto"},children:[t.jsxs("p",{children:["accuracy: ",(l=o.position)==null?void 0:l.coords.accuracy]}),t.jsxs("p",{children:["altitude: ",(g=o.position)==null?void 0:g.coords.altitude]}),t.jsxs("p",{children:["altitudeAccuracy: ",(s=o.position)==null?void 0:s.coords.altitudeAccuracy]}),t.jsxs("p",{children:["heading: ",(c=o.position)==null?void 0:c.coords.heading]}),t.jsxs("p",{children:["latitude: ",(x=o.position)==null?void 0:x.coords.latitude]}),t.jsxs("p",{children:["longitude: ",(m=o.position)==null?void 0:m.coords.longitude]}),t.jsxs("p",{children:["speed: ",(j=o.position)==null?void 0:j.coords.speed]})]})]})};export{E as UseGeolocation};
