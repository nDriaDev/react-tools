import{r as s,j as n}from"./index-grzBBzk-.js";import{u as a}from"./useEventListener-MdmJgei-.js";import"./useMemoizedFn-0ayyqkFx.js";const i=({element:e,listener:t,effectType:r,listenerOpts:o})=>{a({type:"contextmenu",listener:t,effectType:r,listenerOpts:o,element:e})},x=()=>{const e=s.useRef(null);return i({element:e,listener:s.useCallback(t=>{t.preventDefault()},[])}),n.jsxs("div",{children:[n.jsx("p",{ref:e,children:"The context menu on this paragraph is disabled."}),n.jsx("p",{children:"On this paragraph context menu is enabled."})]})};export{x as UseContextMenu};