import{r as n}from"./index-5eafcd1e.js";import{u as D}from"./useEffectOnce-bbae9380.js";let c=!1;const a=new Set;function h(s){var o;const t=n.useRef();c||((o=navigator.mediaDevices)!=null&&o.ondevicechange&&(navigator.mediaDevices.ondevicechange=r=>{a.forEach(e=>e(r))}),c=!0);const d=n.useRef(async r=>{var e;if(!((e=navigator.mediaDevices)!=null&&e.enumerateDevices))throw Error("getDevicesList not supported");if(r){if(!("ondevicechange"in navigator.mediaDevices))throw Error("onDevicesChange not supported");t.current=r,a.add(t.current)}try{(await navigator.mediaDevices.getUserMedia({audio:!0,video:!0})).getTracks().forEach(g=>g.stop())}catch{}return navigator.mediaDevices.enumerateDevices()}),u=n.useRef(r=>{var e;if(!((e=navigator.mediaDevices)!=null&&e.getSupportedConstraints))throw Error("getSupportedConstraintsList not supported");if(r){if(!("ondevicechange"in navigator.mediaDevices))throw Error("onDevicesChange not supported");t.current=r,a.add(t.current)}return navigator.mediaDevices.getSupportedConstraints()}),v=n.useRef((r,e)=>{var i;if(!((i=navigator.mediaDevices)!=null&&i.getDisplayMedia))throw Error("getDisplay not supported");if(e){if(!("ondevicechange"in navigator.mediaDevices))throw Error("onDevicesChange not supported");t.current=e,a.add(t.current)}return navigator.mediaDevices.getDisplayMedia(r)}),p=n.useRef((r,e)=>{const i=navigator.mediaDevices.getUserMedia??navigator.mediaDevices.webkitGetUserMedia??navigator.mediaDevices.mozGetUserMedia??null;if(!i)throw Error("getMediaInput not supported");if(e){if(!("ondevicechange"in navigator.mediaDevices))throw Error("onDevicesChange not supported");t.current=e,a.add(t.current)}return i(r)});return D(()=>()=>{t.current&&a.delete(t.current)}),s==="devicesList"?d.current:s==="supportedConstraintsList"?u.current:s==="DisplayCapture"?v.current:p.current}export{h as u};
