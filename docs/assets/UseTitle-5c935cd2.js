import{r as c}from"./index-75043133.js";const o=t=>{document.title=t},r=()=>document.title,s=t=>{t&&(document.title=t);try{c.useLayoutEffect(()=>{t&&(document.title=t)},[])}catch{return[r,o]}return[r,o]},i=s()[0](),u=()=>{const[,t]=s("Title 1");c.useEffect(()=>{const e=setTimeout(()=>{t("Title 2")},3e3);return()=>{clearTimeout(e),t(i)}},[t])};export{u as UseTitle};