import{r as u,j as l}from"./index-5eafcd1e.js";import{u as y}from"./useSyncExternalStore-543af22c.js";const s=new Set;function g(e={type:"client"}){const n=u.useRef({x:null,y:null}),r=u.useRef({x:null,y:null});return y(u.useCallback(c=>{const t=d=>{var E;const{screenX:m,screenY:x,clientX:p,clientY:h,pageX:v,pageY:w}=d;let i=null,o=null,a;e.type==="client"?(i=p,o=h):e.type==="page"?(i=v,o=w):(i=m,o=x),(e.relativeElement&&"current"in e.relativeElement?e.relativeElement.current:e.relativeElement)&&(a=((E=e.relativeElement)!=null&&E.current?e.relativeElement.current:e.relativeElement).getBoundingClientRect(),i=v-(a.left+window.scrollX),o=w-(a.top+window.scrollY)),r.current={x:i,y:o,relativeElementDim:a},s.forEach(f=>f())};return s.size===0&&(window.addEventListener("pointerdown",t),window.addEventListener("pointermove",t),window.addEventListener("pointerup",t)),s.add(c),()=>{s.delete(c),s.size===0&&(window.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",t))}},[e.relativeElement,e.type]),u.useCallback(()=>((n.current.x!==r.current.x||n.current.y!==r.current.y)&&(n.current=r.current),n.current),[]))}const R=()=>{const e=u.useRef(null),{x:n,y:r,relativeElementDim:{top:c=null,left:t=null,width:d=null,height:m=null}={}}=g({relativeElement:e});return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:e,style:{width:"200px",height:"200px",backgroundColor:"gray",color:"white",lineHeight:"200px",textAlign:"center"},children:"element"}),l.jsxs("div",{children:[l.jsxs("p",{children:["Mouse Position relative to Element - x: ",n,", y: ",r]}),l.jsxs("p",{children:["Element Dimensions - top: ",c,"  left: ",t,"  width: ",d,"  height: ",m]})]})]})};export{R as UseMouse};
