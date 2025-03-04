function Og(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(o,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function an(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zg={exports:{}},El={},Ig={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),ck=Symbol.for("react.portal"),uk=Symbol.for("react.fragment"),dk=Symbol.for("react.strict_mode"),pk=Symbol.for("react.profiler"),fk=Symbol.for("react.provider"),hk=Symbol.for("react.context"),mk=Symbol.for("react.forward_ref"),gk=Symbol.for("react.suspense"),_k=Symbol.for("react.memo"),vk=Symbol.for("react.lazy"),$p=Symbol.iterator;function bk(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ug=Object.assign,Ng={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Ng,this.updater=n||Fg}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hg(){}Hg.prototype=Mr.prototype;function id(e,t,n){this.props=e,this.context=t,this.refs=Ng,this.updater=n||Fg}var ld=id.prototype=new Hg;ld.constructor=id;Ug(ld,Mr.prototype);ld.isPureReactComponent=!0;var qp=Array.isArray,Wg=Object.prototype.hasOwnProperty,sd={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function Vg(e,t,n){var o,a={},r=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(r=""+t.key),t)Wg.call(t,o)&&!Bg.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){for(var d=Array(c),l=0;l<c;l++)d[l]=arguments[l+2];a.children=d}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)a[o]===void 0&&(a[o]=c[o]);return{$$typeof:$a,type:e,key:r,ref:i,props:a,_owner:sd.current}}function yk(e,t){return{$$typeof:$a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cd(e){return typeof e=="object"&&e!==null&&e.$$typeof===$a}function kk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gp=/\/+/g;function rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kk(""+e.key):t.toString(36)}function Li(e,t,n,o,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case $a:case ck:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+rs(i,0):o,qp(a)?(n="",e!=null&&(n=e.replace(Gp,"$&/")+"/"),Li(a,t,n,"",function(l){return l})):a!=null&&(cd(a)&&(a=yk(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Gp,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",qp(e))for(var c=0;c<e.length;c++){r=e[c];var d=o+rs(r,c);i+=Li(r,t,n,d,a)}else if(d=bk(e),typeof d=="function")for(e=d.call(e),c=0;!(r=e.next()).done;)r=r.value,d=o+rs(r,c++),i+=Li(r,t,n,d,a);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function si(e,t,n){if(e==null)return e;var o=[],a=0;return Li(e,o,"","",function(r){return t.call(n,r,a++)}),o}function wk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},Di={transition:null},xk={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Di,ReactCurrentOwner:sd};ve.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!cd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ve.Component=Mr;ve.Fragment=uk;ve.Profiler=pk;ve.PureComponent=id;ve.StrictMode=dk;ve.Suspense=gk;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xk;ve.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Ug({},e.props),a=e.key,r=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,i=sd.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Wg.call(t,d)&&!Bg.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){c=Array(d);for(var l=0;l<d;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:$a,type:e.type,key:a,ref:r,props:o,_owner:i}};ve.createContext=function(e){return e={$$typeof:hk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fk,_context:e},e.Consumer=e};ve.createElement=Vg;ve.createFactory=function(e){var t=Vg.bind(null,e);return t.type=e,t};ve.createRef=function(){return{current:null}};ve.forwardRef=function(e){return{$$typeof:mk,render:e}};ve.isValidElement=cd;ve.lazy=function(e){return{$$typeof:vk,_payload:{_status:-1,_result:e},_init:wk}};ve.memo=function(e,t){return{$$typeof:_k,type:e,compare:t===void 0?null:t}};ve.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ve.useCallback=function(e,t){return gt.current.useCallback(e,t)};ve.useContext=function(e){return gt.current.useContext(e)};ve.useDebugValue=function(){};ve.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};ve.useEffect=function(e,t){return gt.current.useEffect(e,t)};ve.useId=function(){return gt.current.useId()};ve.useImperativeHandle=function(e,t,n){return gt.current.useImperativeHandle(e,t,n)};ve.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};ve.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};ve.useMemo=function(e,t){return gt.current.useMemo(e,t)};ve.useReducer=function(e,t,n){return gt.current.useReducer(e,t,n)};ve.useRef=function(e){return gt.current.useRef(e)};ve.useState=function(e){return gt.current.useState(e)};ve.useSyncExternalStore=function(e,t,n){return gt.current.useSyncExternalStore(e,t,n)};ve.useTransition=function(){return gt.current.useTransition()};ve.version="18.2.0";Ig.exports=ve;var b=Ig.exports;const Se=an(b),Sk=Og({__proto__:null,default:Se},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ck=b,Ek=Symbol.for("react.element"),Tk=Symbol.for("react.fragment"),Ak=Object.prototype.hasOwnProperty,Pk=Ck.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jk={key:!0,ref:!0,__self:!0,__source:!0};function $g(e,t,n){var o,a={},r=null,i=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Ak.call(t,o)&&!jk.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:Ek,type:e,key:r,ref:i,props:a,_owner:Pk.current}}El.Fragment=Tk;El.jsx=$g;El.jsxs=$g;zg.exports=El;var p=zg.exports,Kc={},qg={exports:{}},Dt={},Gg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,V){var w=U.length;U.push(V);e:for(;0<w;){var G=w-1>>>1,Y=U[G];if(0<a(Y,V))U[G]=V,U[w]=Y,w=G;else break e}}function n(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var V=U[0],w=U.pop();if(w!==V){U[0]=w;e:for(var G=0,Y=U.length,E=Y>>>1;G<E;){var le=2*(G+1)-1,ke=U[le],re=le+1,Ce=U[re];if(0>a(ke,w))re<Y&&0>a(Ce,ke)?(U[G]=Ce,U[re]=w,G=re):(U[G]=ke,U[le]=w,G=le);else if(re<Y&&0>a(Ce,w))U[G]=Ce,U[re]=w,G=re;else break e}}return V}function a(U,V){var w=U.sortIndex-V.sortIndex;return w!==0?w:U.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,c=i.now();e.unstable_now=function(){return i.now()-c}}var d=[],l=[],u=1,s=null,f=3,h=!1,y=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var V=n(l);V!==null;){if(V.callback===null)o(l);else if(V.startTime<=U)o(l),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(l)}}function x(U){if(k=!1,g(U),!y)if(n(d)!==null)y=!0,ce(C);else{var V=n(l);V!==null&&ee(x,V.startTime-U)}}function C(U,V){y=!1,k&&(k=!1,v(R),R=-1),h=!0;var w=f;try{for(g(V),s=n(d);s!==null&&(!(s.expirationTime>V)||U&&!I());){var G=s.callback;if(typeof G=="function"){s.callback=null,f=s.priorityLevel;var Y=G(s.expirationTime<=V);V=e.unstable_now(),typeof Y=="function"?s.callback=Y:s===n(d)&&o(d),g(V)}else o(d);s=n(d)}if(s!==null)var E=!0;else{var le=n(l);le!==null&&ee(x,le.startTime-V),E=!1}return E}finally{s=null,f=w,h=!1}}var _=!1,A=null,R=-1,j=5,T=-1;function I(){return!(e.unstable_now()-T<j)}function H(){if(A!==null){var U=e.unstable_now();T=U;var V=!0;try{V=A(!0,U)}finally{V?K():(_=!1,A=null)}}else _=!1}var K;if(typeof m=="function")K=function(){m(H)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,X=ne.port2;ne.port1.onmessage=H,K=function(){X.postMessage(null)}}else K=function(){S(H,0)};function ce(U){A=U,_||(_=!0,K())}function ee(U,V){R=S(function(){U(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,ce(C))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(U){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var w=f;f=V;try{return U()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var w=f;f=U;try{return V()}finally{f=w}},e.unstable_scheduleCallback=function(U,V,w){var G=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?G+w:G):w=G,U){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=w+Y,U={id:u++,callback:V,priorityLevel:U,startTime:w,expirationTime:Y,sortIndex:-1},w>G?(U.sortIndex=w,t(l,U),n(d)===null&&U===n(l)&&(k?(v(R),R=-1):k=!0,ee(x,w-G))):(U.sortIndex=Y,t(d,U),y||h||(y=!0,ce(C))),U},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(U){var V=f;return function(){var w=f;f=V;try{return U.apply(this,arguments)}finally{f=w}}}})(Kg);Gg.exports=Kg;var Rk=Gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg=b,Lt=Rk;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,wa={};function Wo(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(wa[e]=t,e=0;e<t.length;e++)Yg.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,Mk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kp={},Qp={};function Lk(e){return Qc.call(Qp,e)?!0:Qc.call(Kp,e)?!1:Mk.test(e)?Qp[e]=!0:(Kp[e]=!0,!1)}function Dk(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ok(e,t,n,o){if(t===null||typeof t>"u"||Dk(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,n,o,a,r,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=i}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){at[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];at[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){at[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){at[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){at[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){at[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){at[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){at[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){at[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function dd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ud,dd);at[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ud,dd);at[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ud,dd);at[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){at[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});at.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){at[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function pd(e,t,n,o){var a=at.hasOwnProperty(t)?at[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ok(t,n,a,o)&&(n=null),o||a===null?Lk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var In=Qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),Yp=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=Yp&&e[Yp]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,as;function na(e){if(as===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);as=t&&t[1]||""}return`
`+as+e}var is=!1;function ls(e,t){if(!e||is)return"";is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var o=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){o=l}e.call(t.prototype)}else{try{throw Error()}catch(l){o=l}e()}}catch(l){if(l&&o&&typeof l.stack=="string"){for(var a=l.stack.split(`
`),r=o.stack.split(`
`),i=a.length-1,c=r.length-1;1<=i&&0<=c&&a[i]!==r[c];)c--;for(;1<=i&&0<=c;i--,c--)if(a[i]!==r[c]){if(i!==1||c!==1)do if(i--,c--,0>c||a[i]!==r[c]){var d=`
`+a[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=c);break}}}finally{is=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?na(e):""}function zk(e){switch(e.tag){case 5:return na(e.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return e=ls(e.type,!1),e;case 11:return e=ls(e.type.render,!1),e;case 1:return e=ls(e.type,!0),e;default:return""}}function Zc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Yc:return"Profiler";case fd:return"StrictMode";case Jc:return"Suspense";case Xc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xg:return(e.displayName||"Context")+".Consumer";case Jg:return(e._context.displayName||"Context")+".Provider";case hd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case md:return t=e.displayName||null,t!==null?t:Zc(e.type)||"Memo";case Gn:t=e._payload,e=e._init;try{return Zc(e(t))}catch{}}return null}function Ik(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(t);case 8:return t===fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function lo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function e_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fk(e){var t=e_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=Fk(e))}function t_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=e_(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eu(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jp(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=lo(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function n_(e,t){t=t.checked,t!=null&&pd(e,"checked",t,!1)}function tu(e,t){n_(e,t);var n=lo(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nu(e,t.type,n):t.hasOwnProperty("defaultValue")&&nu(e,t.type,lo(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nu(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oa=Array.isArray;function gr(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+lo(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ou(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(W(92));if(oa(n)){if(1<n.length)throw Error(W(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:lo(n)}}function o_(e,t){var n=lo(t.value),o=lo(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function ef(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function r_(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?r_(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,a_=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uk=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(e){Uk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ua[t]=ua[e]})});function i_(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ua.hasOwnProperty(e)&&ua[e]?(""+t).trim():t+"px"}function l_(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=i_(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Nk=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(e,t){if(t){if(Nk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function iu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function gd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,_r=null,vr=null;function tf(e){if(e=Ka(e)){if(typeof su!="function")throw Error(W(280));var t=e.stateNode;t&&(t=Rl(t),su(e.stateNode,e.type,t))}}function s_(e){_r?vr?vr.push(e):vr=[e]:_r=e}function c_(){if(_r){var e=_r,t=vr;if(vr=_r=null,tf(e),t)for(e=0;e<t.length;e++)tf(t[e])}}function u_(e,t){return e(t)}function d_(){}var ss=!1;function p_(e,t,n){if(ss)return e(t,n);ss=!0;try{return u_(e,t,n)}finally{ss=!1,(_r!==null||vr!==null)&&(d_(),c_())}}function Sa(e,t){var n=e.stateNode;if(n===null)return null;var o=Rl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var cu=!1;if(Ln)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{cu=!1}function Hk(e,t,n,o,a,r,i,c,d){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(u){this.onError(u)}}var da=!1,Qi=null,Yi=!1,uu=null,Wk={onError:function(e){da=!0,Qi=e}};function Bk(e,t,n,o,a,r,i,c,d){da=!1,Qi=null,Hk.apply(Wk,arguments)}function Vk(e,t,n,o,a,r,i,c,d){if(Bk.apply(this,arguments),da){if(da){var l=Qi;da=!1,Qi=null}else throw Error(W(198));Yi||(Yi=!0,uu=l)}}function Bo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nf(e){if(Bo(e)!==e)throw Error(W(188))}function $k(e){var t=e.alternate;if(!t){if(t=Bo(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return nf(a),e;if(r===o)return nf(a),t;r=r.sibling}throw Error(W(188))}if(n.return!==o.return)n=a,o=r;else{for(var i=!1,c=a.child;c;){if(c===n){i=!0,n=a,o=r;break}if(c===o){i=!0,o=a,n=r;break}c=c.sibling}if(!i){for(c=r.child;c;){if(c===n){i=!0,n=r,o=a;break}if(c===o){i=!0,o=r,n=a;break}c=c.sibling}if(!i)throw Error(W(189))}}if(n.alternate!==o)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function h_(e){return e=$k(e),e!==null?m_(e):null}function m_(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=m_(e);if(t!==null)return t;e=e.sibling}return null}var g_=Lt.unstable_scheduleCallback,of=Lt.unstable_cancelCallback,qk=Lt.unstable_shouldYield,Gk=Lt.unstable_requestPaint,Ve=Lt.unstable_now,Kk=Lt.unstable_getCurrentPriorityLevel,_d=Lt.unstable_ImmediatePriority,__=Lt.unstable_UserBlockingPriority,Ji=Lt.unstable_NormalPriority,Qk=Lt.unstable_LowPriority,v_=Lt.unstable_IdlePriority,Tl=null,vn=null;function Yk(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Zk,Jk=Math.log,Xk=Math.LN2;function Zk(e){return e>>>=0,e===0?32:31-(Jk(e)/Xk|0)|0}var pi=64,fi=4194304;function ra(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,r=e.pingedLanes,i=n&268435455;if(i!==0){var c=i&~a;c!==0?o=ra(c):(r&=i,r!==0&&(o=ra(r)))}else i=n&~a,i!==0?o=ra(i):r!==0&&(o=ra(r));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,r=t&-t,a>=r||a===16&&(r&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-tn(t),a=1<<n,o|=e[n],t&=~a;return o}function e0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t0(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-tn(r),c=1<<i,d=a[i];d===-1?(!(c&n)||c&o)&&(a[i]=e0(c,t)):d<=t&&(e.expiredLanes|=c),r&=~c}}function du(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function b_(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function cs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tn(t),e[t]=n}function n0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-tn(n),r=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~r}}function vd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-tn(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var xe=0;function y_(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var k_,bd,w_,x_,S_,pu=!1,hi=[],Zn=null,eo=null,to=null,Ca=new Map,Ea=new Map,Qn=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rf(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":eo=null;break;case"mouseover":case"mouseout":to=null;break;case"pointerover":case"pointerout":Ca.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(t.pointerId)}}function Br(e,t,n,o,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Ka(t),t!==null&&bd(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function r0(e,t,n,o,a){switch(t){case"focusin":return Zn=Br(Zn,e,t,n,o,a),!0;case"dragenter":return eo=Br(eo,e,t,n,o,a),!0;case"mouseover":return to=Br(to,e,t,n,o,a),!0;case"pointerover":var r=a.pointerId;return Ca.set(r,Br(Ca.get(r)||null,e,t,n,o,a)),!0;case"gotpointercapture":return r=a.pointerId,Ea.set(r,Br(Ea.get(r)||null,e,t,n,o,a)),!0}return!1}function C_(e){var t=Ao(e.target);if(t!==null){var n=Bo(t);if(n!==null){if(t=n.tag,t===13){if(t=f_(n),t!==null){e.blockedOn=t,S_(e.priority,function(){w_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);lu=o,n.target.dispatchEvent(o),lu=null}else return t=Ka(n),t!==null&&bd(t),e.blockedOn=n,!1;t.shift()}return!0}function af(e,t,n){Oi(e)&&n.delete(t)}function a0(){pu=!1,Zn!==null&&Oi(Zn)&&(Zn=null),eo!==null&&Oi(eo)&&(eo=null),to!==null&&Oi(to)&&(to=null),Ca.forEach(af),Ea.forEach(af)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,pu||(pu=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,a0)))}function Ta(e){function t(a){return Vr(a,e)}if(0<hi.length){Vr(hi[0],e);for(var n=1;n<hi.length;n++){var o=hi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Zn!==null&&Vr(Zn,e),eo!==null&&Vr(eo,e),to!==null&&Vr(to,e),Ca.forEach(t),Ea.forEach(t),n=0;n<Qn.length;n++)o=Qn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)C_(n),n.blockedOn===null&&Qn.shift()}var br=In.ReactCurrentBatchConfig,Zi=!0;function i0(e,t,n,o){var a=xe,r=br.transition;br.transition=null;try{xe=1,yd(e,t,n,o)}finally{xe=a,br.transition=r}}function l0(e,t,n,o){var a=xe,r=br.transition;br.transition=null;try{xe=4,yd(e,t,n,o)}finally{xe=a,br.transition=r}}function yd(e,t,n,o){if(Zi){var a=fu(e,t,n,o);if(a===null)bs(e,t,o,el,n),rf(e,o);else if(r0(a,e,t,n,o))o.stopPropagation();else if(rf(e,o),t&4&&-1<o0.indexOf(e)){for(;a!==null;){var r=Ka(a);if(r!==null&&k_(r),r=fu(e,t,n,o),r===null&&bs(e,t,o,el,n),r===a)break;a=r}a!==null&&o.stopPropagation()}else bs(e,t,o,null,n)}}var el=null;function fu(e,t,n,o){if(el=null,e=gd(o),e=Ao(e),e!==null)if(t=Bo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=f_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return el=e,null}function E_(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kk()){case _d:return 1;case __:return 4;case Ji:case Qk:return 16;case v_:return 536870912;default:return 16}default:return 16}}var Jn=null,kd=null,zi=null;function T_(){if(zi)return zi;var e,t=kd,n=t.length,o,a="value"in Jn?Jn.value:Jn.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===a[r-o];o++);return zi=a.slice(e,1<o?1-o:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function lf(){return!1}function Ot(e){function t(n,o,a,r,i){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?mi:lf,this.isPropagationStopped=lf,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=Ot(Lr),Ga=Fe({},Lr,{view:0,detail:0}),s0=Ot(Ga),us,ds,$r,Al=Fe({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(us=e.screenX-$r.screenX,ds=e.screenY-$r.screenY):ds=us=0,$r=e),us)},movementY:function(e){return"movementY"in e?e.movementY:ds}}),sf=Ot(Al),c0=Fe({},Al,{dataTransfer:0}),u0=Ot(c0),d0=Fe({},Ga,{relatedTarget:0}),ps=Ot(d0),p0=Fe({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),f0=Ot(p0),h0=Fe({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m0=Ot(h0),g0=Fe({},Lr,{data:0}),cf=Ot(g0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=b0[e])?!!t[e]:!1}function xd(){return y0}var k0=Fe({},Ga,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w0=Ot(k0),x0=Fe({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=Ot(x0),S0=Fe({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),C0=Ot(S0),E0=Fe({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=Ot(E0),A0=Fe({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=Ot(A0),j0=[9,13,27,32],Sd=Ln&&"CompositionEvent"in window,pa=null;Ln&&"documentMode"in document&&(pa=document.documentMode);var R0=Ln&&"TextEvent"in window&&!pa,A_=Ln&&(!Sd||pa&&8<pa&&11>=pa),df=" ",pf=!1;function P_(e,t){switch(e){case"keyup":return j0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function M0(e,t){switch(e){case"compositionend":return j_(t);case"keypress":return t.which!==32?null:(pf=!0,df);case"textInput":return e=t.data,e===df&&pf?null:e;default:return null}}function L0(e,t){if(or)return e==="compositionend"||!Sd&&P_(e,t)?(e=T_(),zi=kd=Jn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return A_&&t.locale!=="ko"?null:t.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D0[e.type]:t==="textarea"}function R_(e,t,n,o){s_(o),t=tl(t,"onChange"),0<t.length&&(n=new wd("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var fa=null,Aa=null;function O0(e){W_(e,0)}function Pl(e){var t=ir(e);if(t_(t))return e}function z0(e,t){if(e==="change")return t}var M_=!1;if(Ln){var fs;if(Ln){var hs="oninput"in document;if(!hs){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),hs=typeof hf.oninput=="function"}fs=hs}else fs=!1;M_=fs&&(!document.documentMode||9<document.documentMode)}function mf(){fa&&(fa.detachEvent("onpropertychange",L_),Aa=fa=null)}function L_(e){if(e.propertyName==="value"&&Pl(Aa)){var t=[];R_(t,Aa,e,gd(e)),p_(O0,t)}}function I0(e,t,n){e==="focusin"?(mf(),fa=t,Aa=n,fa.attachEvent("onpropertychange",L_)):e==="focusout"&&mf()}function F0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Aa)}function U0(e,t){if(e==="click")return Pl(t)}function N0(e,t){if(e==="input"||e==="change")return Pl(t)}function H0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:H0;function Pa(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Qc.call(t,a)||!rn(e[a],t[a]))return!1}return!0}function gf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _f(e,t){var n=gf(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gf(n)}}function D_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?D_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function O_(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function W0(e){var t=O_(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&D_(n.ownerDocument.documentElement,n)){if(o!==null&&Cd(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,r=Math.min(o.start,a);o=o.end===void 0?r:Math.min(o.end,a),!e.extend&&r>o&&(a=o,o=r,r=a),a=_f(n,r);var i=_f(n,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var B0=Ln&&"documentMode"in document&&11>=document.documentMode,rr=null,hu=null,ha=null,mu=!1;function vf(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||rr==null||rr!==Ki(o)||(o=rr,"selectionStart"in o&&Cd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ha&&Pa(ha,o)||(ha=o,o=tl(hu,"onSelect"),0<o.length&&(t=new wd("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=rr)))}function gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},ms={},z_={};Ln&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function jl(e){if(ms[e])return ms[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z_)return ms[e]=t[n];return e}var I_=jl("animationend"),F_=jl("animationiteration"),U_=jl("animationstart"),N_=jl("transitionend"),H_=new Map,bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function po(e,t){H_.set(e,t),Wo(t,[e])}for(var gs=0;gs<bf.length;gs++){var _s=bf[gs],V0=_s.toLowerCase(),$0=_s[0].toUpperCase()+_s.slice(1);po(V0,"on"+$0)}po(I_,"onAnimationEnd");po(F_,"onAnimationIteration");po(U_,"onAnimationStart");po("dblclick","onDoubleClick");po("focusin","onFocus");po("focusout","onBlur");po(N_,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Wo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function yf(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Vk(o,t,void 0,e),e.currentTarget=null}function W_(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var c=o[i],d=c.instance,l=c.currentTarget;if(c=c.listener,d!==r&&a.isPropagationStopped())break e;yf(a,c,l),r=d}else for(i=0;i<o.length;i++){if(c=o[i],d=c.instance,l=c.currentTarget,c=c.listener,d!==r&&a.isPropagationStopped())break e;yf(a,c,l),r=d}}}if(Yi)throw e=uu,Yi=!1,uu=null,e}function Me(e,t){var n=t[yu];n===void 0&&(n=t[yu]=new Set);var o=e+"__bubble";n.has(o)||(B_(t,e,2,!1),n.add(o))}function vs(e,t,n){var o=0;t&&(o|=4),B_(n,e,o,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function ja(e){if(!e[_i]){e[_i]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(q0.has(n)||vs(n,!1,e),vs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,vs("selectionchange",!1,t))}}function B_(e,t,n,o){switch(E_(t)){case 1:var a=i0;break;case 4:a=l0;break;default:a=yd}n=a.bind(null,t,n,e),a=void 0,!cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bs(e,t,n,o,a){var r=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var c=o.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;i=i.return}for(;c!==null;){if(i=Ao(c),i===null)return;if(d=i.tag,d===5||d===6){o=r=i;continue e}c=c.parentNode}}o=o.return}p_(function(){var l=r,u=gd(n),s=[];e:{var f=H_.get(e);if(f!==void 0){var h=wd,y=e;switch(e){case"keypress":if(Ii(n)===0)break e;case"keydown":case"keyup":h=w0;break;case"focusin":y="focus",h=ps;break;case"focusout":y="blur",h=ps;break;case"beforeblur":case"afterblur":h=ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=C0;break;case I_:case F_:case U_:h=f0;break;case N_:h=T0;break;case"scroll":h=s0;break;case"wheel":h=P0;break;case"copy":case"cut":case"paste":h=m0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=uf}var k=(t&4)!==0,S=!k&&e==="scroll",v=k?f!==null?f+"Capture":null:f;k=[];for(var m=l,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,v!==null&&(x=Sa(m,v),x!=null&&k.push(Ra(m,x,g)))),S)break;m=m.return}0<k.length&&(f=new h(f,y,null,n,u),s.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==lu&&(y=n.relatedTarget||n.fromElement)&&(Ao(y)||y[Dn]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=l,y=y?Ao(y):null,y!==null&&(S=Bo(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=l),h!==y)){if(k=sf,x="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=uf,x="onPointerLeave",v="onPointerEnter",m="pointer"),S=h==null?f:ir(h),g=y==null?f:ir(y),f=new k(x,m+"leave",h,n,u),f.target=S,f.relatedTarget=g,x=null,Ao(u)===l&&(k=new k(v,m+"enter",y,n,u),k.target=g,k.relatedTarget=S,x=k),S=x,h&&y)t:{for(k=h,v=y,m=0,g=k;g;g=Qo(g))m++;for(g=0,x=v;x;x=Qo(x))g++;for(;0<m-g;)k=Qo(k),m--;for(;0<g-m;)v=Qo(v),g--;for(;m--;){if(k===v||v!==null&&k===v.alternate)break t;k=Qo(k),v=Qo(v)}k=null}else k=null;h!==null&&kf(s,f,h,k,!1),y!==null&&S!==null&&kf(s,S,y,k,!0)}}e:{if(f=l?ir(l):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=z0;else if(ff(f))if(M_)C=N0;else{C=F0;var _=I0}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=U0);if(C&&(C=C(e,l))){R_(s,C,n,u);break e}_&&_(e,f,l),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&nu(f,"number",f.value)}switch(_=l?ir(l):window,e){case"focusin":(ff(_)||_.contentEditable==="true")&&(rr=_,hu=l,ha=null);break;case"focusout":ha=hu=rr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,vf(s,n,u);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":vf(s,n,u)}var A;if(Sd)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else or?P_(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(A_&&n.locale!=="ko"&&(or||R!=="onCompositionStart"?R==="onCompositionEnd"&&or&&(A=T_()):(Jn=u,kd="value"in Jn?Jn.value:Jn.textContent,or=!0)),_=tl(l,R),0<_.length&&(R=new cf(R,e,null,n,u),s.push({event:R,listeners:_}),A?R.data=A:(A=j_(n),A!==null&&(R.data=A)))),(A=R0?M0(e,n):L0(e,n))&&(l=tl(l,"onBeforeInput"),0<l.length&&(u=new cf("onBeforeInput","beforeinput",null,n,u),s.push({event:u,listeners:l}),u.data=A))}W_(s,t)})}function Ra(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tl(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Sa(e,n),r!=null&&o.unshift(Ra(e,r,a)),r=Sa(e,t),r!=null&&o.push(Ra(e,r,a))),e=e.return}return o}function Qo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kf(e,t,n,o,a){for(var r=t._reactName,i=[];n!==null&&n!==o;){var c=n,d=c.alternate,l=c.stateNode;if(d!==null&&d===o)break;c.tag===5&&l!==null&&(c=l,a?(d=Sa(n,r),d!=null&&i.unshift(Ra(n,d,c))):a||(d=Sa(n,r),d!=null&&i.push(Ra(n,d,c)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var G0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function wf(e){return(typeof e=="string"?e:""+e).replace(G0,`
`).replace(K0,"")}function vi(e,t,n){if(t=wf(t),wf(e)!==t&&n)throw Error(W(425))}function nl(){}var gu=null,_u=null;function vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,xf=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof xf<"u"?function(e){return xf.resolve(null).then(e).catch(J0)}:bu;function J0(e){setTimeout(function(){throw e})}function ys(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Ta(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Ta(t)}function no(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),gn="__reactFiber$"+Dr,Ma="__reactProps$"+Dr,Dn="__reactContainer$"+Dr,yu="__reactEvents$"+Dr,X0="__reactListeners$"+Dr,Z0="__reactHandles$"+Dr;function Ao(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dn]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sf(e);e!==null;){if(n=e[gn])return n;e=Sf(e)}return t}e=n,n=e.parentNode}return null}function Ka(e){return e=e[gn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function Rl(e){return e[Ma]||null}var ku=[],lr=-1;function fo(e){return{current:e}}function Le(e){0>lr||(e.current=ku[lr],ku[lr]=null,lr--)}function je(e,t){lr++,ku[lr]=e.current,e.current=t}var so={},ut=fo(so),xt=fo(!1),Oo=so;function Cr(e,t){var n=e.type.contextTypes;if(!n)return so;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=t[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function St(e){return e=e.childContextTypes,e!=null}function ol(){Le(xt),Le(ut)}function Cf(e,t,n){if(ut.current!==so)throw Error(W(168));je(ut,t),je(xt,n)}function V_(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(W(108,Ik(e)||"Unknown",a));return Fe({},n,o)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||so,Oo=ut.current,je(ut,e),je(xt,xt.current),!0}function Ef(e,t,n){var o=e.stateNode;if(!o)throw Error(W(169));n?(e=V_(e,t,Oo),o.__reactInternalMemoizedMergedChildContext=e,Le(xt),Le(ut),je(ut,e)):Le(xt),je(xt,n)}var An=null,Ml=!1,ks=!1;function $_(e){An===null?An=[e]:An.push(e)}function ew(e){Ml=!0,$_(e)}function ho(){if(!ks&&An!==null){ks=!0;var e=0,t=xe;try{var n=An;for(xe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}An=null,Ml=!1}catch(a){throw An!==null&&(An=An.slice(e+1)),g_(_d,ho),a}finally{xe=t,ks=!1}}return null}var sr=[],cr=0,al=null,il=0,Nt=[],Ht=0,zo=null,Pn=1,jn="";function So(e,t){sr[cr++]=il,sr[cr++]=al,al=e,il=t}function q_(e,t,n){Nt[Ht++]=Pn,Nt[Ht++]=jn,Nt[Ht++]=zo,zo=e;var o=Pn;e=jn;var a=32-tn(o)-1;o&=~(1<<a),n+=1;var r=32-tn(t)+a;if(30<r){var i=a-a%5;r=(o&(1<<i)-1).toString(32),o>>=i,a-=i,Pn=1<<32-tn(t)+a|n<<a|o,jn=r+e}else Pn=1<<r|n<<a|o,jn=e}function Ed(e){e.return!==null&&(So(e,1),q_(e,1,0))}function Td(e){for(;e===al;)al=sr[--cr],sr[cr]=null,il=sr[--cr],sr[cr]=null;for(;e===zo;)zo=Nt[--Ht],Nt[Ht]=null,jn=Nt[--Ht],Nt[Ht]=null,Pn=Nt[--Ht],Nt[Ht]=null}var Rt=null,jt=null,Oe=!1,en=null;function G_(e,t){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,jt=no(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zo!==null?{id:Pn,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Rt=e,jt=null,!0):!1;default:return!1}}function wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(Oe){var t=jt;if(t){var n=t;if(!Tf(e,t)){if(wu(e))throw Error(W(418));t=no(n.nextSibling);var o=Rt;t&&Tf(e,t)?G_(o,n):(e.flags=e.flags&-4097|2,Oe=!1,Rt=e)}}else{if(wu(e))throw Error(W(418));e.flags=e.flags&-4097|2,Oe=!1,Rt=e}}}function Af(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function bi(e){if(e!==Rt)return!1;if(!Oe)return Af(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vu(e.type,e.memoizedProps)),t&&(t=jt)){if(wu(e))throw K_(),Error(W(418));for(;t;)G_(e,t),t=no(t.nextSibling)}if(Af(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=no(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=Rt?no(e.stateNode.nextSibling):null;return!0}function K_(){for(var e=jt;e;)e=no(e.nextSibling)}function Er(){jt=Rt=null,Oe=!1}function Ad(e){en===null?en=[e]:en.push(e)}var tw=In.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ll=fo(null),sl=null,ur=null,Pd=null;function jd(){Pd=ur=sl=null}function Rd(e){var t=ll.current;Le(ll),e._currentValue=t}function Su(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){sl=e,Pd=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function qt(e){var t=e._currentValue;if(Pd!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(sl===null)throw Error(W(308));ur=e,sl.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Po=null;function Md(e){Po===null?Po=[e]:Po.push(e)}function Q_(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,Md(t)):(n.next=a.next,a.next=n),t.interleaved=n,On(e,o)}function On(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kn=!1;function Ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,we&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,On(e,n)}return a=o.interleaved,a===null?(t.next=t,Md(o)):(t.next=a.next,a.next=t),o.interleaved=t,On(e,n)}function Fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,vd(e,n)}}function Pf(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=i:r=r.next=i,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cl(e,t,n,o){var a=e.updateQueue;Kn=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,l=d.next;d.next=null,i===null?r=l:i.next=l,i=d;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==i&&(c===null?u.firstBaseUpdate=l:c.next=l,u.lastBaseUpdate=d))}if(r!==null){var s=a.baseState;i=0,u=l=d=null,c=r;do{var f=c.lane,h=c.eventTime;if((o&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var y=e,k=c;switch(f=t,h=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){s=y.call(h,s,f);break e}s=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,f=typeof y=="function"?y.call(h,s,f):y,f==null)break e;s=Fe({},s,f);break e;case 2:Kn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[c]:f.push(c))}else h={eventTime:h,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(l=u=h,d=s):u=u.next=h,i|=f;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;f=c,c=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(u===null&&(d=s),a.baseState=d,a.firstBaseUpdate=l,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else r===null&&(a.shared.lanes=0);Fo|=i,e.lanes=i,e.memoizedState=s}}function jf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(W(191,a));a.call(o)}}}var J_=new Qg.Component().refs;function Cu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ll={isMounted:function(e){return(e=e._reactInternals)?Bo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=mt(),a=ao(e),r=Rn(o,a);r.payload=t,n!=null&&(r.callback=n),t=oo(e,r,a),t!==null&&(nn(t,e,a,o),Fi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=mt(),a=ao(e),r=Rn(o,a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=oo(e,r,a),t!==null&&(nn(t,e,a,o),Fi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),o=ao(e),a=Rn(n,o);a.tag=2,t!=null&&(a.callback=t),t=oo(e,a,o),t!==null&&(nn(t,e,o,n),Fi(t,e,o))}};function Rf(e,t,n,o,a,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!Pa(n,o)||!Pa(a,r):!0}function X_(e,t,n){var o=!1,a=so,r=t.contextType;return typeof r=="object"&&r!==null?r=qt(r):(a=St(t)?Oo:ut.current,o=t.contextTypes,r=(o=o!=null)?Cr(e,a):so),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),t}function Mf(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function Eu(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=J_,Ld(e);var r=t.contextType;typeof r=="object"&&r!==null?a.context=qt(r):(r=St(t)?Oo:ut.current,a.context=Cr(e,r)),a.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Cu(e,t,r,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ll.enqueueReplaceState(a,a.state,null),cl(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var o=n.stateNode}if(!o)throw Error(W(147,e));var a=o,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(i){var c=a.refs;c===J_&&(c=a.refs={}),i===null?delete c[r]:c[r]=i},t._stringRef=r,t)}if(typeof e!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lf(e){var t=e._init;return t(e._payload)}function Z_(e){function t(v,m){if(e){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function o(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function a(v,m){return v=io(v,m),v.index=0,v.sibling=null,v}function r(v,m,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function i(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,m,g,x){return m===null||m.tag!==6?(m=As(g,v.mode,x),m.return=v,m):(m=a(m,g),m.return=v,m)}function d(v,m,g,x){var C=g.type;return C===nr?u(v,m,g.props.children,x,g.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gn&&Lf(C)===m.type)?(x=a(m,g.props),x.ref=qr(v,m,g),x.return=v,x):(x=Vi(g.type,g.key,g.props,null,v.mode,x),x.ref=qr(v,m,g),x.return=v,x)}function l(v,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Ps(g,v.mode,x),m.return=v,m):(m=a(m,g.children||[]),m.return=v,m)}function u(v,m,g,x,C){return m===null||m.tag!==7?(m=Do(g,v.mode,x,C),m.return=v,m):(m=a(m,g),m.return=v,m)}function s(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=As(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ci:return g=Vi(m.type,m.key,m.props,null,v.mode,g),g.ref=qr(v,null,m),g.return=v,g;case tr:return m=Ps(m,v.mode,g),m.return=v,m;case Gn:var x=m._init;return s(v,x(m._payload),g)}if(oa(m)||Hr(m))return m=Do(m,v.mode,g,null),m.return=v,m;yi(v,m)}return null}function f(v,m,g,x){var C=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:c(v,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ci:return g.key===C?d(v,m,g,x):null;case tr:return g.key===C?l(v,m,g,x):null;case Gn:return C=g._init,f(v,m,C(g._payload),x)}if(oa(g)||Hr(g))return C!==null?null:u(v,m,g,x,null);yi(v,g)}return null}function h(v,m,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(g)||null,c(m,v,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ci:return v=v.get(x.key===null?g:x.key)||null,d(m,v,x,C);case tr:return v=v.get(x.key===null?g:x.key)||null,l(m,v,x,C);case Gn:var _=x._init;return h(v,m,g,_(x._payload),C)}if(oa(x)||Hr(x))return v=v.get(g)||null,u(m,v,x,C,null);yi(m,x)}return null}function y(v,m,g,x){for(var C=null,_=null,A=m,R=m=0,j=null;A!==null&&R<g.length;R++){A.index>R?(j=A,A=null):j=A.sibling;var T=f(v,A,g[R],x);if(T===null){A===null&&(A=j);break}e&&A&&T.alternate===null&&t(v,A),m=r(T,m,R),_===null?C=T:_.sibling=T,_=T,A=j}if(R===g.length)return n(v,A),Oe&&So(v,R),C;if(A===null){for(;R<g.length;R++)A=s(v,g[R],x),A!==null&&(m=r(A,m,R),_===null?C=A:_.sibling=A,_=A);return Oe&&So(v,R),C}for(A=o(v,A);R<g.length;R++)j=h(A,v,R,g[R],x),j!==null&&(e&&j.alternate!==null&&A.delete(j.key===null?R:j.key),m=r(j,m,R),_===null?C=j:_.sibling=j,_=j);return e&&A.forEach(function(I){return t(v,I)}),Oe&&So(v,R),C}function k(v,m,g,x){var C=Hr(g);if(typeof C!="function")throw Error(W(150));if(g=C.call(g),g==null)throw Error(W(151));for(var _=C=null,A=m,R=m=0,j=null,T=g.next();A!==null&&!T.done;R++,T=g.next()){A.index>R?(j=A,A=null):j=A.sibling;var I=f(v,A,T.value,x);if(I===null){A===null&&(A=j);break}e&&A&&I.alternate===null&&t(v,A),m=r(I,m,R),_===null?C=I:_.sibling=I,_=I,A=j}if(T.done)return n(v,A),Oe&&So(v,R),C;if(A===null){for(;!T.done;R++,T=g.next())T=s(v,T.value,x),T!==null&&(m=r(T,m,R),_===null?C=T:_.sibling=T,_=T);return Oe&&So(v,R),C}for(A=o(v,A);!T.done;R++,T=g.next())T=h(A,v,R,T.value,x),T!==null&&(e&&T.alternate!==null&&A.delete(T.key===null?R:T.key),m=r(T,m,R),_===null?C=T:_.sibling=T,_=T);return e&&A.forEach(function(H){return t(v,H)}),Oe&&So(v,R),C}function S(v,m,g,x){if(typeof g=="object"&&g!==null&&g.type===nr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ci:e:{for(var C=g.key,_=m;_!==null;){if(_.key===C){if(C=g.type,C===nr){if(_.tag===7){n(v,_.sibling),m=a(_,g.props.children),m.return=v,v=m;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gn&&Lf(C)===_.type){n(v,_.sibling),m=a(_,g.props),m.ref=qr(v,_,g),m.return=v,v=m;break e}n(v,_);break}else t(v,_);_=_.sibling}g.type===nr?(m=Do(g.props.children,v.mode,x,g.key),m.return=v,v=m):(x=Vi(g.type,g.key,g.props,null,v.mode,x),x.ref=qr(v,m,g),x.return=v,v=x)}return i(v);case tr:e:{for(_=g.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(v,m.sibling),m=a(m,g.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Ps(g,v.mode,x),m.return=v,v=m}return i(v);case Gn:return _=g._init,S(v,m,_(g._payload),x)}if(oa(g))return y(v,m,g,x);if(Hr(g))return k(v,m,g,x);yi(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(v,m.sibling),m=a(m,g),m.return=v,v=m):(n(v,m),m=As(g,v.mode,x),m.return=v,v=m),i(v)):n(v,m)}return S}var Tr=Z_(!0),ev=Z_(!1),Qa={},bn=fo(Qa),La=fo(Qa),Da=fo(Qa);function jo(e){if(e===Qa)throw Error(W(174));return e}function Dd(e,t){switch(je(Da,t),je(La,e),je(bn,Qa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ru(t,e)}Le(bn),je(bn,t)}function Ar(){Le(bn),Le(La),Le(Da)}function tv(e){jo(Da.current);var t=jo(bn.current),n=ru(t,e.type);t!==n&&(je(La,e),je(bn,n))}function Od(e){La.current===e&&(Le(bn),Le(La))}var ze=fo(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function zd(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var Ui=In.ReactCurrentDispatcher,xs=In.ReactCurrentBatchConfig,Io=0,Ie=null,Ke=null,et=null,dl=!1,ma=!1,Oa=0,nw=0;function it(){throw Error(W(321))}function Id(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function Fd(e,t,n,o,a,r){if(Io=r,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?iw:lw,e=n(o,a),ma){r=0;do{if(ma=!1,Oa=0,25<=r)throw Error(W(301));r+=1,et=Ke=null,t.updateQueue=null,Ui.current=sw,e=n(o,a)}while(ma)}if(Ui.current=pl,t=Ke!==null&&Ke.next!==null,Io=0,et=Ke=Ie=null,dl=!1,t)throw Error(W(300));return e}function Ud(){var e=Oa!==0;return Oa=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ie.memoizedState=et=e:et=et.next=e,et}function Gt(){if(Ke===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=et===null?Ie.memoizedState:et.next;if(t!==null)et=t,Ke=e;else{if(e===null)throw Error(W(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},et===null?Ie.memoizedState=et=e:et=et.next=e}return et}function za(e,t){return typeof t=="function"?t(e):t}function Ss(e){var t=Gt(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var o=Ke,a=o.baseQueue,r=n.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}o.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,o=o.baseState;var c=i=null,d=null,l=r;do{var u=l.lane;if((Io&u)===u)d!==null&&(d=d.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),o=l.hasEagerState?l.eagerState:e(o,l.action);else{var s={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};d===null?(c=d=s,i=o):d=d.next=s,Ie.lanes|=u,Fo|=u}l=l.next}while(l!==null&&l!==r);d===null?i=o:d.next=c,rn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do r=a.lane,Ie.lanes|=r,Fo|=r,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cs(e){var t=Gt(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do r=e(r,i.action),i=i.next;while(i!==a);rn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function nv(){}function ov(e,t){var n=Ie,o=Gt(),a=t(),r=!rn(o.memoizedState,a);if(r&&(o.memoizedState=a,wt=!0),o=o.queue,Nd(iv.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Ia(9,av.bind(null,n,o,a,t),void 0,null),tt===null)throw Error(W(349));Io&30||rv(n,t,a)}return a}function rv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function av(e,t,n,o){t.value=n,t.getSnapshot=o,lv(t)&&sv(e)}function iv(e,t,n){return n(function(){lv(t)&&sv(e)})}function lv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function sv(e){var t=On(e,1);t!==null&&nn(t,e,1,-1)}function Df(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t.queue=e,e=e.dispatch=aw.bind(null,Ie,e),[t.memoizedState,e]}function Ia(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function cv(){return Gt().memoizedState}function Ni(e,t,n,o){var a=fn();Ie.flags|=e,a.memoizedState=Ia(1|t,n,void 0,o===void 0?null:o)}function Dl(e,t,n,o){var a=Gt();o=o===void 0?null:o;var r=void 0;if(Ke!==null){var i=Ke.memoizedState;if(r=i.destroy,o!==null&&Id(o,i.deps)){a.memoizedState=Ia(t,n,r,o);return}}Ie.flags|=e,a.memoizedState=Ia(1|t,n,r,o)}function Of(e,t){return Ni(8390656,8,e,t)}function Nd(e,t){return Dl(2048,8,e,t)}function uv(e,t){return Dl(4,2,e,t)}function dv(e,t){return Dl(4,4,e,t)}function pv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fv(e,t,n){return n=n!=null?n.concat([e]):null,Dl(4,4,pv.bind(null,t,e),n)}function Hd(){}function hv(e,t){var n=Gt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Id(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function mv(e,t){var n=Gt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Id(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function gv(e,t,n){return Io&21?(rn(n,t)||(n=b_(),Ie.lanes|=n,Fo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function ow(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var o=xs.transition;xs.transition={};try{e(!1),t()}finally{xe=n,xs.transition=o}}function _v(){return Gt().memoizedState}function rw(e,t,n){var o=ao(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},vv(e))bv(t,n);else if(n=Q_(e,t,n,o),n!==null){var a=mt();nn(n,e,o,a),yv(n,t,o)}}function aw(e,t,n){var o=ao(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(vv(e))bv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,c=r(i,n);if(a.hasEagerState=!0,a.eagerState=c,rn(c,i)){var d=t.interleaved;d===null?(a.next=a,Md(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}n=Q_(e,t,a,o),n!==null&&(a=mt(),nn(n,e,o,a),yv(n,t,o))}}function vv(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function bv(e,t){ma=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yv(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,vd(e,n)}}var pl={readContext:qt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},iw={readContext:qt,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:qt,useEffect:Of,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,pv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=fn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=rw.bind(null,Ie,e),[o.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Df,useDebugValue:Hd,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Df(!1),t=e[0];return e=ow.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Ie,a=fn();if(Oe){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),tt===null)throw Error(W(349));Io&30||rv(o,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Of(iv.bind(null,o,r,e),[e]),o.flags|=2048,Ia(9,av.bind(null,o,r,n,t),void 0,null),n},useId:function(){var e=fn(),t=tt.identifierPrefix;if(Oe){var n=jn,o=Pn;n=(o&~(1<<32-tn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lw={readContext:qt,useCallback:hv,useContext:qt,useEffect:Nd,useImperativeHandle:fv,useInsertionEffect:uv,useLayoutEffect:dv,useMemo:mv,useReducer:Ss,useRef:cv,useState:function(){return Ss(za)},useDebugValue:Hd,useDeferredValue:function(e){var t=Gt();return gv(t,Ke.memoizedState,e)},useTransition:function(){var e=Ss(za)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:nv,useSyncExternalStore:ov,useId:_v,unstable_isNewReconciler:!1},sw={readContext:qt,useCallback:hv,useContext:qt,useEffect:Nd,useImperativeHandle:fv,useInsertionEffect:uv,useLayoutEffect:dv,useMemo:mv,useReducer:Cs,useRef:cv,useState:function(){return Cs(za)},useDebugValue:Hd,useDeferredValue:function(e){var t=Gt();return Ke===null?t.memoizedState=e:gv(t,Ke.memoizedState,e)},useTransition:function(){var e=Cs(za)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:nv,useSyncExternalStore:ov,useId:_v,unstable_isNewReconciler:!1};function Pr(e,t){try{var n="",o=t;do n+=zk(o),o=o.return;while(o);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:a,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cw=typeof WeakMap=="function"?WeakMap:Map;function kv(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){hl||(hl=!0,Iu=o),Tu(e,t)},n}function wv(e,t,n){n=Rn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){Tu(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Tu(e,t),typeof o!="function"&&(ro===null?ro=new Set([this]):ro.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function zf(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new cw;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=xw.bind(null,e,t,n),t.then(e,e))}function If(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ff(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,oo(n,t,1))),n.lanes|=1),e)}var uw=In.ReactCurrentOwner,wt=!1;function ft(e,t,n,o){t.child=e===null?ev(t,null,n,o):Tr(t,e.child,n,o)}function Uf(e,t,n,o,a){n=n.render;var r=t.ref;return yr(t,a),o=Fd(e,t,n,o,r,a),n=Ud(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zn(e,t,a)):(Oe&&n&&Ed(t),t.flags|=1,ft(e,t,o,a),t.child)}function Nf(e,t,n,o,a){if(e===null){var r=n.type;return typeof r=="function"&&!Qd(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,xv(e,t,r,o,a)):(e=Vi(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&a)){var i=r.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(i,o)&&e.ref===t.ref)return zn(e,t,a)}return t.flags|=1,e=io(r,o),e.ref=t.ref,e.return=t,t.child=e}function xv(e,t,n,o,a){if(e!==null){var r=e.memoizedProps;if(Pa(r,o)&&e.ref===t.ref)if(wt=!1,t.pendingProps=o=r,(e.lanes&a)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,zn(e,t,a)}return Au(e,t,n,o,a)}function Sv(e,t,n){var o=t.pendingProps,a=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(pr,Pt),Pt|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(pr,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:n,je(pr,Pt),Pt|=o}else r!==null?(o=r.baseLanes|n,t.memoizedState=null):o=n,je(pr,Pt),Pt|=o;return ft(e,t,a,n),t.child}function Cv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Au(e,t,n,o,a){var r=St(n)?Oo:ut.current;return r=Cr(t,r),yr(t,a),n=Fd(e,t,n,o,r,a),o=Ud(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zn(e,t,a)):(Oe&&o&&Ed(t),t.flags|=1,ft(e,t,n,a),t.child)}function Hf(e,t,n,o,a){if(St(n)){var r=!0;rl(t)}else r=!1;if(yr(t,a),t.stateNode===null)Hi(e,t),X_(t,n,o),Eu(t,n,o,a),o=!0;else if(e===null){var i=t.stateNode,c=t.memoizedProps;i.props=c;var d=i.context,l=n.contextType;typeof l=="object"&&l!==null?l=qt(l):(l=St(n)?Oo:ut.current,l=Cr(t,l));var u=n.getDerivedStateFromProps,s=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";s||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==o||d!==l)&&Mf(t,i,o,l),Kn=!1;var f=t.memoizedState;i.state=f,cl(t,o,i,a),d=t.memoizedState,c!==o||f!==d||xt.current||Kn?(typeof u=="function"&&(Cu(t,n,u,o),d=t.memoizedState),(c=Kn||Rf(t,n,c,o,f,d,l))?(s||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),i.props=o,i.state=d,i.context=l,o=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Y_(e,t),c=t.memoizedProps,l=t.type===t.elementType?c:Jt(t.type,c),i.props=l,s=t.pendingProps,f=i.context,d=n.contextType,typeof d=="object"&&d!==null?d=qt(d):(d=St(n)?Oo:ut.current,d=Cr(t,d));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==s||f!==d)&&Mf(t,i,o,d),Kn=!1,f=t.memoizedState,i.state=f,cl(t,o,i,a);var y=t.memoizedState;c!==s||f!==y||xt.current||Kn?(typeof h=="function"&&(Cu(t,n,h,o),y=t.memoizedState),(l=Kn||Rf(t,n,l,o,f,y,d)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,y,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,y,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=y),i.props=o,i.state=y,i.context=d,o=l):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return Pu(e,t,n,o,r,a)}function Pu(e,t,n,o,a,r){Cv(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&Ef(t,n,!1),zn(e,t,r);o=t.stateNode,uw.current=t;var c=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Tr(t,e.child,null,r),t.child=Tr(t,null,c,r)):ft(e,t,c,r),t.memoizedState=o.state,a&&Ef(t,n,!0),t.child}function Ev(e){var t=e.stateNode;t.pendingContext?Cf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cf(e,t.context,!1),Dd(e,t.containerInfo)}function Wf(e,t,n,o,a){return Er(),Ad(a),t.flags|=256,ft(e,t,n,o),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tv(e,t,n){var o=t.pendingProps,a=ze.current,r=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),je(ze,a&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,r?(o=t.mode,r=t.child,i={mode:"hidden",children:i},!(o&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Il(i,o,0,null),e=Do(e,o,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Ru(n),t.memoizedState=ju,e):Wd(t,i));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return dw(e,t,i,o,c,a,n);if(r){r=o.fallback,i=t.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:o.children};return!(i&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=io(a,d),o.subtreeFlags=a.subtreeFlags&14680064),c!==null?r=io(c,r):(r=Do(r,i,n,null),r.flags|=2),r.return=t,o.return=t,o.sibling=r,t.child=o,o=r,r=t.child,i=e.child.memoizedState,i=i===null?Ru(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~n,t.memoizedState=ju,o}return r=e.child,e=r.sibling,o=io(r,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Wd(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,o){return o!==null&&Ad(o),Tr(t,e.child,null,n),e=Wd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dw(e,t,n,o,a,r,i){if(n)return t.flags&256?(t.flags&=-257,o=Es(Error(W(422))),ki(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=o.fallback,a=t.mode,o=Il({mode:"visible",children:o.children},a,0,null),r=Do(r,a,i,null),r.flags|=2,o.return=t,r.return=t,o.sibling=r,t.child=o,t.mode&1&&Tr(t,e.child,null,i),t.child.memoizedState=Ru(i),t.memoizedState=ju,r);if(!(t.mode&1))return ki(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var c=o.dgst;return o=c,r=Error(W(419)),o=Es(r,o,void 0),ki(e,t,i,o)}if(c=(i&e.childLanes)!==0,wt||c){if(o=tt,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,On(e,a),nn(o,e,a,-1))}return Kd(),o=Es(Error(W(421))),ki(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Sw.bind(null,e),a._reactRetry=t,null):(e=r.treeContext,jt=no(a.nextSibling),Rt=t,Oe=!0,en=null,e!==null&&(Nt[Ht++]=Pn,Nt[Ht++]=jn,Nt[Ht++]=zo,Pn=e.id,jn=e.overflow,zo=t),t=Wd(t,o.children),t.flags|=4096,t)}function Bf(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Su(e.return,t,n)}function Ts(e,t,n,o,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=a)}function Av(e,t,n){var o=t.pendingProps,a=o.revealOrder,r=o.tail;if(ft(e,t,o.children,n),o=ze.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,n,t);else if(e.tag===19)Bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(je(ze,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ts(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ul(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ts(t,!0,n,null,r);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=io(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=io(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pw(e,t,n){switch(t.tag){case 3:Ev(t),Er();break;case 5:tv(t);break;case 1:St(t.type)&&rl(t);break;case 4:Dd(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;je(ll,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(je(ze,ze.current&1),t.flags|=128,null):n&t.child.childLanes?Tv(e,t,n):(je(ze,ze.current&1),e=zn(e,t,n),e!==null?e.sibling:null);je(ze,ze.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Av(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),je(ze,ze.current),o)break;return null;case 22:case 23:return t.lanes=0,Sv(e,t,n)}return zn(e,t,n)}var Pv,Mu,jv,Rv;Pv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mu=function(){};jv=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,jo(bn.current);var r=null;switch(n){case"input":a=eu(e,a),o=eu(e,o),r=[];break;case"select":a=Fe({},a,{value:void 0}),o=Fe({},o,{value:void 0}),r=[];break;case"textarea":a=ou(e,a),o=ou(e,o),r=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=nl)}au(n,o);var i;n=null;for(l in a)if(!o.hasOwnProperty(l)&&a.hasOwnProperty(l)&&a[l]!=null)if(l==="style"){var c=a[l];for(i in c)c.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wa.hasOwnProperty(l)?r||(r=[]):(r=r||[]).push(l,null));for(l in o){var d=o[l];if(c=a!=null?a[l]:void 0,o.hasOwnProperty(l)&&d!==c&&(d!=null||c!=null))if(l==="style")if(c){for(i in c)!c.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in d)d.hasOwnProperty(i)&&c[i]!==d[i]&&(n||(n={}),n[i]=d[i])}else n||(r||(r=[]),r.push(l,n)),n=d;else l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(r=r||[]).push(l,d)):l==="children"?typeof d!="string"&&typeof d!="number"||(r=r||[]).push(l,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(wa.hasOwnProperty(l)?(d!=null&&l==="onScroll"&&Me("scroll",e),r||c===d||(r=[])):(r=r||[]).push(l,d))}n&&(r=r||[]).push("style",n);var l=r;(t.updateQueue=l)&&(t.flags|=4)}};Rv=function(e,t,n,o){n!==o&&(t.flags|=4)};function Gr(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function fw(e,t,n){var o=t.pendingProps;switch(Td(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return St(t.type)&&ol(),lt(t),null;case 3:return o=t.stateNode,Ar(),Le(xt),Le(ut),zd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,en!==null&&(Nu(en),en=null))),Mu(e,t),lt(t),null;case 5:Od(t);var a=jo(Da.current);if(n=t.type,e!==null&&t.stateNode!=null)jv(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(W(166));return lt(t),null}if(e=jo(bn.current),bi(t)){o=t.stateNode,n=t.type;var r=t.memoizedProps;switch(o[gn]=t,o[Ma]=r,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",o),Me("close",o);break;case"iframe":case"object":case"embed":Me("load",o);break;case"video":case"audio":for(a=0;a<aa.length;a++)Me(aa[a],o);break;case"source":Me("error",o);break;case"img":case"image":case"link":Me("error",o),Me("load",o);break;case"details":Me("toggle",o);break;case"input":Jp(o,r),Me("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},Me("invalid",o);break;case"textarea":Zp(o,r),Me("invalid",o)}au(n,r),a=null;for(var i in r)if(r.hasOwnProperty(i)){var c=r[i];i==="children"?typeof c=="string"?o.textContent!==c&&(r.suppressHydrationWarning!==!0&&vi(o.textContent,c,e),a=["children",c]):typeof c=="number"&&o.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&vi(o.textContent,c,e),a=["children",""+c]):wa.hasOwnProperty(i)&&c!=null&&i==="onScroll"&&Me("scroll",o)}switch(n){case"input":ui(o),Xp(o,r,!0);break;case"textarea":ui(o),ef(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=nl)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=r_(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[gn]=t,e[Ma]=o,Pv(e,t,!1,!1),t.stateNode=e;e:{switch(i=iu(n,o),n){case"dialog":Me("cancel",e),Me("close",e),a=o;break;case"iframe":case"object":case"embed":Me("load",e),a=o;break;case"video":case"audio":for(a=0;a<aa.length;a++)Me(aa[a],e);a=o;break;case"source":Me("error",e),a=o;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=o;break;case"details":Me("toggle",e),a=o;break;case"input":Jp(e,o),a=eu(e,o),Me("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=Fe({},o,{value:void 0}),Me("invalid",e);break;case"textarea":Zp(e,o),a=ou(e,o),Me("invalid",e);break;default:a=o}au(n,a),c=a;for(r in c)if(c.hasOwnProperty(r)){var d=c[r];r==="style"?l_(e,d):r==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&a_(e,d)):r==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&xa(e,d):typeof d=="number"&&xa(e,""+d):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(wa.hasOwnProperty(r)?d!=null&&r==="onScroll"&&Me("scroll",e):d!=null&&pd(e,r,d,i))}switch(n){case"input":ui(e),Xp(e,o,!1);break;case"textarea":ui(e),ef(e);break;case"option":o.value!=null&&e.setAttribute("value",""+lo(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?gr(e,!!o.multiple,r,!1):o.defaultValue!=null&&gr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)Rv(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(W(166));if(n=jo(Da.current),jo(bn.current),bi(t)){if(o=t.stateNode,n=t.memoizedProps,o[gn]=t,(r=o.nodeValue!==n)&&(e=Rt,e!==null))switch(e.tag){case 3:vi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(o.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[gn]=t,t.stateNode=o}return lt(t),null;case 13:if(Le(ze),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&jt!==null&&t.mode&1&&!(t.flags&128))K_(),Er(),t.flags|=98560,r=!1;else if(r=bi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(W(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(W(317));r[gn]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),r=!1}else en!==null&&(Nu(en),en=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ze.current&1?Qe===0&&(Qe=3):Kd())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Ar(),Mu(e,t),e===null&&ja(t.stateNode.containerInfo),lt(t),null;case 10:return Rd(t.type._context),lt(t),null;case 17:return St(t.type)&&ol(),lt(t),null;case 19:if(Le(ze),r=t.memoizedState,r===null)return lt(t),null;if(o=(t.flags&128)!==0,i=r.rendering,i===null)if(o)Gr(r,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ul(e),i!==null){for(t.flags|=128,Gr(r,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)r=n,e=o,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(ze,ze.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ve()>jr&&(t.flags|=128,o=!0,Gr(r,!1),t.lanes=4194304)}else{if(!o)if(e=ul(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!Oe)return lt(t),null}else 2*Ve()-r.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,o=!0,Gr(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Ve(),t.sibling=null,n=ze.current,je(ze,o?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return Gd(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Pt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function hw(e,t){switch(Td(t),t.tag){case 1:return St(t.type)&&ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),Le(xt),Le(ut),zd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Od(t),null;case 13:if(Le(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le(ze),null;case 4:return Ar(),null;case 10:return Rd(t.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var wi=!1,st=!1,mw=typeof WeakSet=="function"?WeakSet:Set,Q=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){He(e,t,o)}else n.current=null}function Lu(e,t,n){try{n()}catch(o){He(e,t,o)}}var Vf=!1;function gw(e,t){if(gu=Zi,e=O_(),Cd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var i=0,c=-1,d=-1,l=0,u=0,s=e,f=null;t:for(;;){for(var h;s!==n||a!==0&&s.nodeType!==3||(c=i+a),s!==r||o!==0&&s.nodeType!==3||(d=i+o),s.nodeType===3&&(i+=s.nodeValue.length),(h=s.firstChild)!==null;)f=s,s=h;for(;;){if(s===e)break t;if(f===n&&++l===a&&(c=i),f===r&&++u===o&&(d=i),(h=s.nextSibling)!==null)break;s=f,f=s.parentNode}s=h}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:e,selectionRange:n},Zi=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,S=y.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?k:Jt(t.type,k),S);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(x){He(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return y=Vf,Vf=!1,y}function ga(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&Lu(t,n,r)}a=a.next}while(a!==o)}}function Ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mv(e){var t=e.alternate;t!==null&&(e.alternate=null,Mv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[Ma],delete t[yu],delete t[X0],delete t[Z0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lv(e){return e.tag===5||e.tag===3||e.tag===4}function $f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nl));else if(o!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function zu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}var ot=null,Xt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Dv(e,t,n),n=n.sibling}function Dv(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:st||dr(n,t);case 6:var o=ot,a=Xt;ot=null,Vn(e,t,n),ot=o,Xt=a,ot!==null&&(Xt?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(Xt?(e=ot,n=n.stateNode,e.nodeType===8?ys(e.parentNode,n):e.nodeType===1&&ys(e,n),Ta(e)):ys(ot,n.stateNode));break;case 4:o=ot,a=Xt,ot=n.stateNode.containerInfo,Xt=!0,Vn(e,t,n),ot=o,Xt=a;break;case 0:case 11:case 14:case 15:if(!st&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var r=a,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&Lu(n,t,i),a=a.next}while(a!==o)}Vn(e,t,n);break;case 1:if(!st&&(dr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(c){He(n,t,c)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(st=(o=st)||n.memoizedState!==null,Vn(e,t,n),st=o):Vn(e,t,n);break;default:Vn(e,t,n)}}function qf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mw),t.forEach(function(o){var a=Cw.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Yt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var r=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 5:ot=c.stateNode,Xt=!1;break e;case 3:ot=c.stateNode.containerInfo,Xt=!0;break e;case 4:ot=c.stateNode.containerInfo,Xt=!0;break e}c=c.return}if(ot===null)throw Error(W(160));Dv(r,i,a),ot=null,Xt=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(l){He(a,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ov(t,e),t=t.sibling}function Ov(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),dn(e),o&4){try{ga(3,e,e.return),Ol(3,e)}catch(k){He(e,e.return,k)}try{ga(5,e,e.return)}catch(k){He(e,e.return,k)}}break;case 1:Yt(t,e),dn(e),o&512&&n!==null&&dr(n,n.return);break;case 5:if(Yt(t,e),dn(e),o&512&&n!==null&&dr(n,n.return),e.flags&32){var a=e.stateNode;try{xa(a,"")}catch(k){He(e,e.return,k)}}if(o&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,i=n!==null?n.memoizedProps:r,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&n_(a,r),iu(c,i);var l=iu(c,r);for(i=0;i<d.length;i+=2){var u=d[i],s=d[i+1];u==="style"?l_(a,s):u==="dangerouslySetInnerHTML"?a_(a,s):u==="children"?xa(a,s):pd(a,u,s,l)}switch(c){case"input":tu(a,r);break;case"textarea":o_(a,r);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var h=r.value;h!=null?gr(a,!!r.multiple,h,!1):f!==!!r.multiple&&(r.defaultValue!=null?gr(a,!!r.multiple,r.defaultValue,!0):gr(a,!!r.multiple,r.multiple?[]:"",!1))}a[Ma]=r}catch(k){He(e,e.return,k)}}break;case 6:if(Yt(t,e),dn(e),o&4){if(e.stateNode===null)throw Error(W(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(k){He(e,e.return,k)}}break;case 3:if(Yt(t,e),dn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(t.containerInfo)}catch(k){He(e,e.return,k)}break;case 4:Yt(t,e),dn(e);break;case 13:Yt(t,e),dn(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||($d=Ve())),o&4&&qf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(st=(l=st)||u,Yt(t,e),st=l):Yt(t,e),dn(e),o&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!u&&e.mode&1)for(Q=e,u=e.child;u!==null;){for(s=Q=u;Q!==null;){switch(f=Q,h=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:dr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){He(o,n,k)}}break;case 5:dr(f,f.return);break;case 22:if(f.memoizedState!==null){Kf(s);continue}}h!==null?(h.return=f,Q=h):Kf(s)}u=u.sibling}e:for(u=null,s=e;;){if(s.tag===5){if(u===null){u=s;try{a=s.stateNode,l?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=s.stateNode,d=s.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=i_("display",i))}catch(k){He(e,e.return,k)}}}else if(s.tag===6){if(u===null)try{s.stateNode.nodeValue=l?"":s.memoizedProps}catch(k){He(e,e.return,k)}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===e)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;u===s&&(u=null),s=s.return}u===s&&(u=null),s.sibling.return=s.return,s=s.sibling}}break;case 19:Yt(t,e),dn(e),o&4&&qf(e);break;case 21:break;default:Yt(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lv(n)){var o=n;break e}n=n.return}throw Error(W(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(xa(a,""),o.flags&=-33);var r=$f(e);zu(e,r,a);break;case 3:case 4:var i=o.stateNode.containerInfo,c=$f(e);Ou(e,c,i);break;default:throw Error(W(161))}}catch(d){He(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _w(e,t,n){Q=e,zv(e)}function zv(e,t,n){for(var o=(e.mode&1)!==0;Q!==null;){var a=Q,r=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||wi;if(!i){var c=a.alternate,d=c!==null&&c.memoizedState!==null||st;c=wi;var l=st;if(wi=i,(st=d)&&!l)for(Q=a;Q!==null;)i=Q,d=i.child,i.tag===22&&i.memoizedState!==null?Qf(a):d!==null?(d.return=i,Q=d):Qf(a);for(;r!==null;)Q=r,zv(r),r=r.sibling;Q=a,wi=c,st=l}Gf(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,Q=r):Gf(e)}}function Gf(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Ol(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!st)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&jf(t,r,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jf(t,i,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var s=u.dehydrated;s!==null&&Ta(s)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}st||t.flags&512&&Du(t)}catch(f){He(t,t.return,f)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Kf(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Qf(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ol(4,t)}catch(d){He(t,n,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(d){He(t,a,d)}}var r=t.return;try{Du(t)}catch(d){He(t,r,d)}break;case 5:var i=t.return;try{Du(t)}catch(d){He(t,i,d)}}}catch(d){He(t,t.return,d)}if(t===e){Q=null;break}var c=t.sibling;if(c!==null){c.return=t.return,Q=c;break}Q=t.return}}var vw=Math.ceil,fl=In.ReactCurrentDispatcher,Bd=In.ReactCurrentOwner,$t=In.ReactCurrentBatchConfig,we=0,tt=null,qe=null,rt=0,Pt=0,pr=fo(0),Qe=0,Fa=null,Fo=0,zl=0,Vd=0,_a=null,kt=null,$d=0,jr=1/0,Tn=null,hl=!1,Iu=null,ro=null,xi=!1,Xn=null,ml=0,va=0,Fu=null,Wi=-1,Bi=0;function mt(){return we&6?Ve():Wi!==-1?Wi:Wi=Ve()}function ao(e){return e.mode&1?we&2&&rt!==0?rt&-rt:tw.transition!==null?(Bi===0&&(Bi=b_()),Bi):(e=xe,e!==0||(e=window.event,e=e===void 0?16:E_(e.type)),e):1}function nn(e,t,n,o){if(50<va)throw va=0,Fu=null,Error(W(185));qa(e,n,o),(!(we&2)||e!==tt)&&(e===tt&&(!(we&2)&&(zl|=n),Qe===4&&Yn(e,rt)),Ct(e,o),n===1&&we===0&&!(t.mode&1)&&(jr=Ve()+500,Ml&&ho()))}function Ct(e,t){var n=e.callbackNode;t0(e,t);var o=Xi(e,e===tt?rt:0);if(o===0)n!==null&&of(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&of(n),t===1)e.tag===0?ew(Yf.bind(null,e)):$_(Yf.bind(null,e)),Y0(function(){!(we&6)&&ho()}),n=null;else{switch(y_(o)){case 1:n=_d;break;case 4:n=__;break;case 16:n=Ji;break;case 536870912:n=v_;break;default:n=Ji}n=Vv(n,Iv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Iv(e,t){if(Wi=-1,Bi=0,we&6)throw Error(W(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var o=Xi(e,e===tt?rt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=gl(e,o);else{t=o;var a=we;we|=2;var r=Uv();(tt!==e||rt!==t)&&(Tn=null,jr=Ve()+500,Lo(e,t));do try{kw();break}catch(c){Fv(e,c)}while(!0);jd(),fl.current=r,we=a,qe!==null?t=0:(tt=null,rt=0,t=Qe)}if(t!==0){if(t===2&&(a=du(e),a!==0&&(o=a,t=Uu(e,a))),t===1)throw n=Fa,Lo(e,0),Yn(e,o),Ct(e,Ve()),n;if(t===6)Yn(e,o);else{if(a=e.current.alternate,!(o&30)&&!bw(a)&&(t=gl(e,o),t===2&&(r=du(e),r!==0&&(o=r,t=Uu(e,r))),t===1))throw n=Fa,Lo(e,0),Yn(e,o),Ct(e,Ve()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(W(345));case 2:Co(e,kt,Tn);break;case 3:if(Yn(e,o),(o&130023424)===o&&(t=$d+500-Ve(),10<t)){if(Xi(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){mt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=bu(Co.bind(null,e,kt,Tn),t);break}Co(e,kt,Tn);break;case 4:if(Yn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-tn(o);r=1<<i,i=t[i],i>a&&(a=i),o&=~r}if(o=a,o=Ve()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*vw(o/1960))-o,10<o){e.timeoutHandle=bu(Co.bind(null,e,kt,Tn),o);break}Co(e,kt,Tn);break;case 5:Co(e,kt,Tn);break;default:throw Error(W(329))}}}return Ct(e,Ve()),e.callbackNode===n?Iv.bind(null,e):null}function Uu(e,t){var n=_a;return e.current.memoizedState.isDehydrated&&(Lo(e,t).flags|=256),e=gl(e,t),e!==2&&(t=kt,kt=n,t!==null&&Nu(t)),e}function Nu(e){kt===null?kt=e:kt.push.apply(kt,e)}function bw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],r=a.getSnapshot;a=a.value;try{if(!rn(r(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yn(e,t){for(t&=~Vd,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tn(t),o=1<<n;e[n]=-1,t&=~o}}function Yf(e){if(we&6)throw Error(W(327));kr();var t=Xi(e,0);if(!(t&1))return Ct(e,Ve()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var o=du(e);o!==0&&(t=o,n=Uu(e,o))}if(n===1)throw n=Fa,Lo(e,0),Yn(e,t),Ct(e,Ve()),n;if(n===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Co(e,kt,Tn),Ct(e,Ve()),null}function qd(e,t){var n=we;we|=1;try{return e(t)}finally{we=n,we===0&&(jr=Ve()+500,Ml&&ho())}}function Uo(e){Xn!==null&&Xn.tag===0&&!(we&6)&&kr();var t=we;we|=1;var n=$t.transition,o=xe;try{if($t.transition=null,xe=1,e)return e()}finally{xe=o,$t.transition=n,we=t,!(we&6)&&ho()}}function Gd(){Pt=pr.current,Le(pr)}function Lo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Q0(n)),qe!==null)for(n=qe.return;n!==null;){var o=n;switch(Td(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ol();break;case 3:Ar(),Le(xt),Le(ut),zd();break;case 5:Od(o);break;case 4:Ar();break;case 13:Le(ze);break;case 19:Le(ze);break;case 10:Rd(o.type._context);break;case 22:case 23:Gd()}n=n.return}if(tt=e,qe=e=io(e.current,null),rt=Pt=t,Qe=0,Fa=null,Vd=zl=Fo=0,kt=_a=null,Po!==null){for(t=0;t<Po.length;t++)if(n=Po[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,r=n.pending;if(r!==null){var i=r.next;r.next=a,o.next=i}n.pending=o}Po=null}return e}function Fv(e,t){do{var n=qe;try{if(jd(),Ui.current=pl,dl){for(var o=Ie.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}dl=!1}if(Io=0,et=Ke=Ie=null,ma=!1,Oa=0,Bd.current=null,n===null||n.return===null){Qe=1,Fa=t,qe=null;break}e:{var r=e,i=n.return,c=n,d=t;if(t=rt,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var l=d,u=c,s=u.tag;if(!(u.mode&1)&&(s===0||s===11||s===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=If(i);if(h!==null){h.flags&=-257,Ff(h,i,c,r,t),h.mode&1&&zf(r,l,t),t=h,d=l;var y=t.updateQueue;if(y===null){var k=new Set;k.add(d),t.updateQueue=k}else y.add(d);break e}else{if(!(t&1)){zf(r,l,t),Kd();break e}d=Error(W(426))}}else if(Oe&&c.mode&1){var S=If(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ff(S,i,c,r,t),Ad(Pr(d,c));break e}}r=d=Pr(d,c),Qe!==4&&(Qe=2),_a===null?_a=[r]:_a.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var v=kv(r,d,t);Pf(r,v);break e;case 1:c=d;var m=r.type,g=r.stateNode;if(!(r.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ro===null||!ro.has(g)))){r.flags|=65536,t&=-t,r.lanes|=t;var x=wv(r,c,t);Pf(r,x);break e}}r=r.return}while(r!==null)}Hv(n)}catch(C){t=C,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function Uv(){var e=fl.current;return fl.current=pl,e===null?pl:e}function Kd(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(Fo&268435455)&&!(zl&268435455)||Yn(tt,rt)}function gl(e,t){var n=we;we|=2;var o=Uv();(tt!==e||rt!==t)&&(Tn=null,Lo(e,t));do try{yw();break}catch(a){Fv(e,a)}while(!0);if(jd(),we=n,fl.current=o,qe!==null)throw Error(W(261));return tt=null,rt=0,Qe}function yw(){for(;qe!==null;)Nv(qe)}function kw(){for(;qe!==null&&!qk();)Nv(qe)}function Nv(e){var t=Bv(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Hv(e):qe=t,Bd.current=null}function Hv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hw(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,qe=null;return}}else if(n=fw(n,t,Pt),n!==null){qe=n;return}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Qe===0&&(Qe=5)}function Co(e,t,n){var o=xe,a=$t.transition;try{$t.transition=null,xe=1,ww(e,t,n,o)}finally{$t.transition=a,xe=o}return null}function ww(e,t,n,o){do kr();while(Xn!==null);if(we&6)throw Error(W(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(n0(e,r),e===tt&&(qe=tt=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,Vv(Ji,function(){return kr(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=$t.transition,$t.transition=null;var i=xe;xe=1;var c=we;we|=4,Bd.current=null,gw(e,n),Ov(n,e),W0(_u),Zi=!!gu,_u=gu=null,e.current=n,_w(n),Gk(),we=c,xe=i,$t.transition=r}else e.current=n;if(xi&&(xi=!1,Xn=e,ml=a),r=e.pendingLanes,r===0&&(ro=null),Yk(n.stateNode),Ct(e,Ve()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(hl)throw hl=!1,e=Iu,Iu=null,e;return ml&1&&e.tag!==0&&kr(),r=e.pendingLanes,r&1?e===Fu?va++:(va=0,Fu=e):va=0,ho(),null}function kr(){if(Xn!==null){var e=y_(ml),t=$t.transition,n=xe;try{if($t.transition=null,xe=16>e?16:e,Xn===null)var o=!1;else{if(e=Xn,Xn=null,ml=0,we&6)throw Error(W(331));var a=we;for(we|=4,Q=e.current;Q!==null;){var r=Q,i=r.child;if(Q.flags&16){var c=r.deletions;if(c!==null){for(var d=0;d<c.length;d++){var l=c[d];for(Q=l;Q!==null;){var u=Q;switch(u.tag){case 0:case 11:case 15:ga(8,u,r)}var s=u.child;if(s!==null)s.return=u,Q=s;else for(;Q!==null;){u=Q;var f=u.sibling,h=u.return;if(Mv(u),u===l){Q=null;break}if(f!==null){f.return=h,Q=f;break}Q=h}}}var y=r.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var S=k.sibling;k.sibling=null,k=S}while(k!==null)}}Q=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,Q=i;else e:for(;Q!==null;){if(r=Q,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ga(9,r,r.return)}var v=r.sibling;if(v!==null){v.return=r.return,Q=v;break e}Q=r.return}}var m=e.current;for(Q=m;Q!==null;){i=Q;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,Q=g;else e:for(i=m;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ol(9,c)}}catch(C){He(c,c.return,C)}if(c===i){Q=null;break e}var x=c.sibling;if(x!==null){x.return=c.return,Q=x;break e}Q=c.return}}if(we=a,ho(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Tl,e)}catch{}o=!0}return o}finally{xe=n,$t.transition=t}}return!1}function Jf(e,t,n){t=Pr(n,t),t=kv(e,t,1),e=oo(e,t,1),t=mt(),e!==null&&(qa(e,1,t),Ct(e,t))}function He(e,t,n){if(e.tag===3)Jf(e,e,n);else for(;t!==null;){if(t.tag===3){Jf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ro===null||!ro.has(o))){e=Pr(n,e),e=wv(t,e,1),t=oo(t,e,1),e=mt(),t!==null&&(qa(t,1,e),Ct(t,e));break}}t=t.return}}function xw(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(rt&n)===n&&(Qe===4||Qe===3&&(rt&130023424)===rt&&500>Ve()-$d?Lo(e,0):Vd|=n),Ct(e,t)}function Wv(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=mt();e=On(e,t),e!==null&&(qa(e,t,n),Ct(e,n))}function Sw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wv(e,n)}function Cw(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(W(314))}o!==null&&o.delete(t),Wv(e,n)}var Bv;Bv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,pw(e,t,n);wt=!!(e.flags&131072)}else wt=!1,Oe&&t.flags&1048576&&q_(t,il,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Hi(e,t),e=t.pendingProps;var a=Cr(t,ut.current);yr(t,n),a=Fd(null,t,o,e,a,n);var r=Ud();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(o)?(r=!0,rl(t)):r=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ld(t),a.updater=Ll,t.stateNode=a,a._reactInternals=t,Eu(t,o,e,n),t=Pu(null,t,o,!0,r,n)):(t.tag=0,Oe&&r&&Ed(t),ft(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Tw(o),e=Jt(o,e),a){case 0:t=Au(null,t,o,e,n);break e;case 1:t=Hf(null,t,o,e,n);break e;case 11:t=Uf(null,t,o,e,n);break e;case 14:t=Nf(null,t,o,Jt(o.type,e),n);break e}throw Error(W(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Jt(o,a),Au(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Jt(o,a),Hf(e,t,o,a,n);case 3:e:{if(Ev(t),e===null)throw Error(W(387));o=t.pendingProps,r=t.memoizedState,a=r.element,Y_(e,t),cl(t,o,null,n);var i=t.memoizedState;if(o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){a=Pr(Error(W(423)),t),t=Wf(e,t,o,n,a);break e}else if(o!==a){a=Pr(Error(W(424)),t),t=Wf(e,t,o,n,a);break e}else for(jt=no(t.stateNode.containerInfo.firstChild),Rt=t,Oe=!0,en=null,n=ev(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),o===a){t=zn(e,t,n);break e}ft(e,t,o,n)}t=t.child}return t;case 5:return tv(t),e===null&&xu(t),o=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,vu(o,a)?i=null:r!==null&&vu(o,r)&&(t.flags|=32),Cv(e,t),ft(e,t,i,n),t.child;case 6:return e===null&&xu(t),null;case 13:return Tv(e,t,n);case 4:return Dd(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Tr(t,null,o,n):ft(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Jt(o,a),Uf(e,t,o,a,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,r=t.memoizedProps,i=a.value,je(ll,o._currentValue),o._currentValue=i,r!==null)if(rn(r.value,i)){if(r.children===a.children&&!xt.current){t=zn(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){i=r.child;for(var d=c.firstContext;d!==null;){if(d.context===o){if(r.tag===1){d=Rn(-1,n&-n),d.tag=2;var l=r.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?d.next=d:(d.next=u.next,u.next=d),l.pending=d}}r.lanes|=n,d=r.alternate,d!==null&&(d.lanes|=n),Su(r.return,n,t),c.lanes|=n;break}d=d.next}}else if(r.tag===10)i=r.type===t.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(W(341));i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Su(i,n,t),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===t){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}ft(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,yr(t,n),a=qt(a),o=o(a),t.flags|=1,ft(e,t,o,n),t.child;case 14:return o=t.type,a=Jt(o,t.pendingProps),a=Jt(o.type,a),Nf(e,t,o,a,n);case 15:return xv(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Jt(o,a),Hi(e,t),t.tag=1,St(o)?(e=!0,rl(t)):e=!1,yr(t,n),X_(t,o,a),Eu(t,o,a,n),Pu(null,t,o,!0,e,n);case 19:return Av(e,t,n);case 22:return Sv(e,t,n)}throw Error(W(156,t.tag))};function Vv(e,t){return g_(e,t)}function Ew(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,o){return new Ew(e,t,n,o)}function Qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tw(e){if(typeof e=="function")return Qd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hd)return 11;if(e===md)return 14}return 2}function io(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vi(e,t,n,o,a,r){var i=2;if(o=e,typeof e=="function")Qd(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nr:return Do(n.children,a,r,t);case fd:i=8,a|=8;break;case Yc:return e=Vt(12,n,t,a|2),e.elementType=Yc,e.lanes=r,e;case Jc:return e=Vt(13,n,t,a),e.elementType=Jc,e.lanes=r,e;case Xc:return e=Vt(19,n,t,a),e.elementType=Xc,e.lanes=r,e;case Zg:return Il(n,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jg:i=10;break e;case Xg:i=9;break e;case hd:i=11;break e;case md:i=14;break e;case Gn:i=16,o=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=Vt(i,n,t,a),t.elementType=e,t.type=o,t.lanes=r,t}function Do(e,t,n,o){return e=Vt(7,e,o,t),e.lanes=n,e}function Il(e,t,n,o){return e=Vt(22,e,o,t),e.elementType=Zg,e.lanes=n,e.stateNode={isHidden:!1},e}function As(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function Ps(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Aw(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Yd(e,t,n,o,a,r,i,c,d){return e=new Aw(e,t,n,c,d),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Vt(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(r),e}function Pw(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function $v(e){if(!e)return so;e=e._reactInternals;e:{if(Bo(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var n=e.type;if(St(n))return V_(e,n,t)}return t}function qv(e,t,n,o,a,r,i,c,d){return e=Yd(n,o,!0,e,a,r,i,c,d),e.context=$v(null),n=e.current,o=mt(),a=ao(n),r=Rn(o,a),r.callback=t??null,oo(n,r,a),e.current.lanes=a,qa(e,a,o),Ct(e,o),e}function Fl(e,t,n,o){var a=t.current,r=mt(),i=ao(a);return n=$v(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(r,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=oo(a,t,i),e!==null&&(nn(e,a,i,r),Fi(e,a,i)),i}function _l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jd(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function jw(){return null}var Gv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xd(e){this._internalRoot=e}Ul.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));Fl(e,t,null,null)};Ul.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Uo(function(){Fl(null,e,null,null)}),t[Dn]=null}};function Ul(e){this._internalRoot=e}Ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=x_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qn.length&&t!==0&&t<Qn[n].priority;n++);Qn.splice(n,0,e),n===0&&C_(e)}};function Zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zf(){}function Rw(e,t,n,o,a){if(a){if(typeof o=="function"){var r=o;o=function(){var l=_l(i);r.call(l)}}var i=qv(t,o,e,0,null,!1,!1,"",Zf);return e._reactRootContainer=i,e[Dn]=i.current,ja(e.nodeType===8?e.parentNode:e),Uo(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var c=o;o=function(){var l=_l(d);c.call(l)}}var d=Yd(e,0,!1,null,null,!1,!1,"",Zf);return e._reactRootContainer=d,e[Dn]=d.current,ja(e.nodeType===8?e.parentNode:e),Uo(function(){Fl(t,d,n,o)}),d}function Hl(e,t,n,o,a){var r=n._reactRootContainer;if(r){var i=r;if(typeof a=="function"){var c=a;a=function(){var d=_l(i);c.call(d)}}Fl(t,i,e,a)}else i=Rw(n,t,e,a,o);return _l(i)}k_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ra(t.pendingLanes);n!==0&&(vd(t,n|1),Ct(t,Ve()),!(we&6)&&(jr=Ve()+500,ho()))}break;case 13:Uo(function(){var o=On(e,1);if(o!==null){var a=mt();nn(o,e,1,a)}}),Jd(e,1)}};bd=function(e){if(e.tag===13){var t=On(e,134217728);if(t!==null){var n=mt();nn(t,e,134217728,n)}Jd(e,134217728)}};w_=function(e){if(e.tag===13){var t=ao(e),n=On(e,t);if(n!==null){var o=mt();nn(n,e,t,o)}Jd(e,t)}};x_=function(){return xe};S_=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};su=function(e,t,n){switch(t){case"input":if(tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=Rl(o);if(!a)throw Error(W(90));t_(o),tu(o,a)}}}break;case"textarea":o_(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};u_=qd;d_=Uo;var Mw={usingClientEntryPoint:!1,Events:[Ka,ir,Rl,s_,c_,qd]},Kr={findFiberByHostInstance:Ao,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lw={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=h_(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{Tl=Si.inject(Lw),vn=Si}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mw;Dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(t))throw Error(W(200));return Pw(e,t,null,n)};Dt.createRoot=function(e,t){if(!Zd(e))throw Error(W(299));var n=!1,o="",a=Gv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Yd(e,1,!1,null,null,n,!1,o,a),e[Dn]=t.current,ja(e.nodeType===8?e.parentNode:e),new Xd(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=h_(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return Uo(e)};Dt.hydrate=function(e,t,n){if(!Nl(t))throw Error(W(200));return Hl(null,e,t,!0,n)};Dt.hydrateRoot=function(e,t,n){if(!Zd(e))throw Error(W(405));var o=n!=null&&n.hydratedSources||null,a=!1,r="",i=Gv;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qv(t,null,e,1,n??null,a,!1,r,i),e[Dn]=t.current,ja(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ul(t)};Dt.render=function(e,t,n){if(!Nl(t))throw Error(W(200));return Hl(null,e,t,!1,n)};Dt.unmountComponentAtNode=function(e){if(!Nl(e))throw Error(W(40));return e._reactRootContainer?(Uo(function(){Hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};Dt.unstable_batchedUpdates=qd;Dt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Nl(n))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return Hl(e,t,n,!1,o)};Dt.version="18.2.0-next-9e3b772b8-20220608";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(e){console.error(e)}}Kv(),qg.exports=Dt;var ep=qg.exports;const ia=an(ep),Dw=Og({__proto__:null,default:ia},[ep]);var eh=ep;Kc.createRoot=eh.createRoot,Kc.hydrateRoot=eh.hydrateRoot;const Ow="modulepreload",zw=function(e){return"/"+e},th={},N=function(t,n,o){let a=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");a=Promise.all(n.map(i=>{if(i=zw(i),i in th)return;th[i]=!0;const c=i.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!o)for(let s=r.length-1;s>=0;s--){const f=r[s];if(f.href===i&&(!c||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Ow,c||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),c)return new Promise((s,f)=>{u.addEventListener("load",s),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})}))}return a.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function We(){return We=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},We.apply(this,arguments)}var Be;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Be||(Be={}));const nh="popstate";function Iw(e){e===void 0&&(e={});function t(a,r){let{pathname:i="/",search:c="",hash:d=""}=yn(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Ua("",{pathname:i,search:c,hash:d},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){let i=a.document.querySelector("base"),c="";if(i&&i.getAttribute("href")){let d=a.location.href,l=d.indexOf("#");c=l===-1?d:d.slice(0,l)}return c+"#"+(typeof r=="string"?r:No(r))}function o(a,r){co(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(r)+")")}return Uw(t,n,o,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function co(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fw(){return Math.random().toString(36).substr(2,8)}function oh(e,t){return{usr:e.state,key:e.key,idx:t}}function Ua(e,t,n,o){return n===void 0&&(n=null),We({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||o||Fw()})}function No(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Uw(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:r=!1}=o,i=a.history,c=Be.Pop,d=null,l=u();l==null&&(l=0,i.replaceState(We({},i.state,{idx:l}),""));function u(){return(i.state||{idx:null}).idx}function s(){c=Be.Pop;let S=u(),v=S==null?null:S-l;l=S,d&&d({action:c,location:k.location,delta:v})}function f(S,v){c=Be.Push;let m=Ua(k.location,S,v);n&&n(m,S),l=u()+1;let g=oh(m,l),x=k.createHref(m);try{i.pushState(g,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(x)}r&&d&&d({action:c,location:k.location,delta:1})}function h(S,v){c=Be.Replace;let m=Ua(k.location,S,v);n&&n(m,S),l=u();let g=oh(m,l),x=k.createHref(m);i.replaceState(g,"",x),r&&d&&d({action:c,location:k.location,delta:0})}function y(S){let v=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof S=="string"?S:No(S);return he(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let k={get action(){return c},get location(){return e(a,i)},listen(S){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(nh,s),d=S,()=>{a.removeEventListener(nh,s),d=null}},createHref(S){return t(a,S)},createURL:y,encodeLocation(S){let v=y(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:h,go(S){return i.go(S)}};return k}var Ne;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ne||(Ne={}));const Nw=new Set(["lazy","caseSensitive","path","id","index","children"]);function Hw(e){return e.index===!0}function Hu(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((a,r)=>{let i=[...n,r],c=typeof a.id=="string"?a.id:i.join("-");if(he(a.index!==!0||!a.children,"Cannot specify children on an index route"),he(!o[c],'Found a route id collision on id "'+c+`".  Route id's must be globally unique within Data Router usages`),Hw(a)){let d=We({},a,t(a),{id:c});return o[c]=d,d}else{let d=We({},a,t(a),{id:c,children:void 0});return o[c]=d,a.children&&(d.children=Hu(a.children,t,i,o)),d}})}function fr(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?yn(t):t,a=Or(o.pathname||"/",n);if(a==null)return null;let r=Qv(e);Bw(r);let i=null;for(let c=0;i==null&&c<r.length;++c)i=Xw(r[c],t1(a));return i}function Ww(e,t){let{route:n,pathname:o,params:a}=e;return{id:n.id,pathname:o,params:a,data:t[n.id],handle:n.handle}}function Qv(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(r,i,c)=>{let d={relativePath:c===void 0?r.path||"":c,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};d.relativePath.startsWith("/")&&(he(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let l=Mn([o,d.relativePath]),u=n.concat(d);r.children&&r.children.length>0&&(he(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Qv(r.children,t,u,l)),!(r.path==null&&!r.index)&&t.push({path:l,score:Yw(l,r.index),routesMeta:u})};return e.forEach((r,i)=>{var c;if(r.path===""||!((c=r.path)!=null&&c.includes("?")))a(r,i);else for(let d of Yv(r.path))a(r,i,d)}),t}function Yv(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(o.length===0)return a?[r,""]:[r];let i=Yv(o.join("/")),c=[];return c.push(...i.map(d=>d===""?r:[r,d].join("/"))),a&&c.push(...i),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function Bw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jw(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Vw=/^:[\w-]+$/,$w=3,qw=2,Gw=1,Kw=10,Qw=-2,rh=e=>e==="*";function Yw(e,t){let n=e.split("/"),o=n.length;return n.some(rh)&&(o+=Qw),t&&(o+=qw),n.filter(a=>!rh(a)).reduce((a,r)=>a+(Vw.test(r)?$w:r===""?Gw:Kw),o)}function Jw(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function Xw(e,t){let{routesMeta:n}=e,o={},a="/",r=[];for(let i=0;i<n.length;++i){let c=n[i],d=i===n.length-1,l=a==="/"?t:t.slice(a.length)||"/",u=Zw({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},l);if(!u)return null;Object.assign(o,u.params);let s=c.route;r.push({params:o,pathname:Mn([a,u.pathname]),pathnameBase:a1(Mn([a,u.pathnameBase])),route:s}),u.pathnameBase!=="/"&&(a=Mn([a,u.pathnameBase]))}return r}function Zw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=e1(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let r=a[0],i=r.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:o.reduce((l,u,s)=>{let{paramName:f,isOptional:h}=u;if(f==="*"){let k=c[s]||"";i=r.slice(0,r.length-k.length).replace(/(.)\/+$/,"$1")}const y=c[s];return h&&!y?l[f]=void 0:l[f]=n1(y||"",f),l},{}),pathname:r,pathnameBase:i,pattern:e}}function e1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),co(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,d)=>(o.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function t1(e){try{return decodeURI(e)}catch(t){return co(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function n1(e,t){try{return decodeURIComponent(e)}catch(n){return co(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function o1(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?yn(e):e;return{pathname:n?n.startsWith("/")?n:r1(n,t):t,search:i1(o),hash:l1(a)}}function r1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function js(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wl(e,t){let n=Jv(e);return t?n.map((o,a)=>a===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Bl(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=yn(e):(a=We({},e),he(!a.pathname||!a.pathname.includes("?"),js("?","pathname","search",a)),he(!a.pathname||!a.pathname.includes("#"),js("#","pathname","hash",a)),he(!a.search||!a.search.includes("#"),js("#","search","hash",a)));let r=e===""||a.pathname==="",i=r?"/":a.pathname,c;if(i==null)c=n;else{let s=t.length-1;if(!o&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),s-=1;a.pathname=f.join("/")}c=s>=0?t[s]:"/"}let d=o1(a,c),l=i&&i!=="/"&&i.endsWith("/"),u=(r||i===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(l||u)&&(d.pathname+="/"),d}const Mn=e=>e.join("/").replace(/\/\/+/g,"/"),a1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,l1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class tp{constructor(t,n,o,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function Xv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zv=["post","put","patch","delete"],s1=new Set(Zv),c1=["get",...Zv],u1=new Set(c1),d1=new Set([301,302,303,307,308]),p1=new Set([307,308]),Rs={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},f1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h1=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),tb="remix-router-transitions";function m1(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let P=e.detectErrorBoundary;a=L=>({hasErrorBoundary:P(L)})}else a=h1;let r={},i=Hu(e.routes,a,void 0,r),c,d=e.basename||"/",l=We({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,s=new Set,f=null,h=null,y=null,k=e.hydrationData!=null,S=fr(i,e.history.location,d),v=null;if(S==null){let P=Ut(404,{pathname:e.history.location.pathname}),{matches:L,route:F}=ph(i);S=L,v={[F.id]:P}}let m,g=S.some(P=>P.route.lazy),x=S.some(P=>P.route.loader);if(g)m=!1;else if(!x)m=!0;else if(l.v7_partialHydration){let P=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null;m=S.every(F=>F.route.loader&&F.route.loader.hydrate!==!0&&(P&&P[F.route.id]!==void 0||L&&L[F.route.id]!==void 0))}else m=e.hydrationData!=null;let C,_={historyAction:e.history.action,location:e.history.location,matches:S,initialized:m,navigation:Rs,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},A=Be.Pop,R=!1,j,T=!1,I=new Map,H=null,K=!1,ne=!1,X=[],ce=[],ee=new Map,U=0,V=-1,w=new Map,G=new Set,Y=new Map,E=new Map,le=new Set,ke=new Map,re=new Map,Ce=!1;function Ye(){if(u=e.history.listen(P=>{let{action:L,location:F,delta:q}=P;if(Ce){Ce=!1;return}co(re.size===0||q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let J=Cn({currentLocation:_.location,nextLocation:F,historyAction:L});if(J&&q!=null){Ce=!0,e.history.go(q*-1),Je(J,{state:"blocked",location:F,proceed(){Je(J,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),e.history.go(q)},reset(){let pe=new Map(_.blockers);pe.set(J,Qr),Ue({blockers:pe})}});return}return ln(L,F)}),n){E1(t,I);let P=()=>T1(t,I);t.addEventListener("pagehide",P),H=()=>t.removeEventListener("pagehide",P)}return _.initialized||ln(Be.Pop,_.location,{initialHydration:!0}),C}function Et(){u&&u(),H&&H(),s.clear(),j&&j.abort(),_.fetchers.forEach((P,L)=>ae(L)),_.blockers.forEach((P,L)=>Wn(L))}function Z(P){return s.add(P),()=>s.delete(P)}function Ue(P,L){L===void 0&&(L={}),_=We({},_,P);let F=[],q=[];l.v7_fetcherPersist&&_.fetchers.forEach((J,pe)=>{J.state==="idle"&&(le.has(pe)?q.push(pe):F.push(pe))}),[...s].forEach(J=>J(_,{deletedFetchers:q,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),l.v7_fetcherPersist&&(F.forEach(J=>_.fetchers.delete(J)),q.forEach(J=>ae(J)))}function Sn(P,L,F){var q,J;let{flushSync:pe}=F===void 0?{}:F,se=_.actionData!=null&&_.navigation.formMethod!=null&&Zt(_.navigation.formMethod)&&_.navigation.state==="loading"&&((q=P.state)==null?void 0:q._isRedirect)!==!0,ie;L.actionData?Object.keys(L.actionData).length>0?ie=L.actionData:ie=null:se?ie=_.actionData:ie=null;let te=L.loaderData?dh(_.loaderData,L.loaderData,L.matches||[],L.errors):_.loaderData,be=_.blockers;be.size>0&&(be=new Map(be),be.forEach((Ae,nt)=>be.set(nt,Qr)));let Xe=R===!0||_.navigation.formMethod!=null&&Zt(_.navigation.formMethod)&&((J=P.state)==null?void 0:J._isRedirect)!==!0;c&&(i=c,c=void 0),K||A===Be.Pop||(A===Be.Push?e.history.push(P,P.state):A===Be.Replace&&e.history.replace(P,P.state));let de;if(A===Be.Pop){let Ae=I.get(_.location.pathname);Ae&&Ae.has(P.pathname)?de={currentLocation:_.location,nextLocation:P}:I.has(P.pathname)&&(de={currentLocation:P,nextLocation:_.location})}else if(T){let Ae=I.get(_.location.pathname);Ae?Ae.add(P.pathname):(Ae=new Set([P.pathname]),I.set(_.location.pathname,Ae)),de={currentLocation:_.location,nextLocation:P}}Ue(We({},L,{actionData:ie,loaderData:te,historyAction:A,location:P,initialized:!0,navigation:Rs,revalidation:"idle",restoreScrollPosition:Vp(P,L.matches||_.matches),preventScrollReset:Xe,blockers:be}),{viewTransitionOpts:de,flushSync:pe===!0}),A=Be.Pop,R=!1,T=!1,K=!1,ne=!1,X=[],ce=[]}async function Hn(P,L){if(typeof P=="number"){e.history.go(P);return}let F=Wu(_.location,_.matches,d,l.v7_prependBasename,P,l.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:q,submission:J,error:pe}=ah(l.v7_normalizeFormMethod,!1,F,L),se=_.location,ie=Ua(_.location,q,L&&L.state);ie=We({},ie,e.history.encodeLocation(ie));let te=L&&L.replace!=null?L.replace:void 0,be=Be.Push;te===!0?be=Be.Replace:te===!1||J!=null&&Zt(J.formMethod)&&J.formAction===_.location.pathname+_.location.search&&(be=Be.Replace);let Xe=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,de=(L&&L.unstable_flushSync)===!0,Ae=Cn({currentLocation:se,nextLocation:ie,historyAction:be});if(Ae){Je(Ae,{state:"blocked",location:ie,proceed(){Je(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),Hn(P,L)},reset(){let nt=new Map(_.blockers);nt.set(Ae,Qr),Ue({blockers:nt})}});return}return await ln(be,ie,{submission:J,pendingError:pe,preventScrollReset:Xe,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:de})}function ti(){if(Nr(),Ue({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){ln(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}ln(A||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function ln(P,L,F){j&&j.abort(),j=null,A=P,K=(F&&F.startUninterruptedRevalidation)===!0,ik(_.location,_.matches),R=(F&&F.preventScrollReset)===!0,T=(F&&F.enableViewTransition)===!0;let q=c||i,J=F&&F.overrideNavigation,pe=fr(q,L,d),se=(F&&F.flushSync)===!0;if(!pe){let nt=Ut(404,{pathname:L.pathname}),{matches:It,route:Ze}=ph(q);Tt(),Sn(L,{matches:It,loaderData:{},errors:{[Ze.id]:nt}},{flushSync:se});return}if(_.initialized&&!ne&&y1(_.location,L)&&!(F&&F.submission&&Zt(F.submission.formMethod))){Sn(L,{matches:pe},{flushSync:se});return}j=new AbortController;let ie=Jr(e.history,L,j.signal,F&&F.submission),te,be;if(F&&F.pendingError)be={[ba(pe).route.id]:F.pendingError};else if(F&&F.submission&&Zt(F.submission.formMethod)){let nt=await ni(ie,L,F.submission,pe,{replace:F.replace,flushSync:se});if(nt.shortCircuited)return;te=nt.pendingActionData,be=nt.pendingActionError,J=Ms(L,F.submission),se=!1,ie=new Request(ie.url,{signal:ie.signal})}let{shortCircuited:Xe,loaderData:de,errors:Ae}=await Xl(ie,L,pe,J,F&&F.submission,F&&F.fetcherSubmission,F&&F.replace,F&&F.initialHydration===!0,se,te,be);Xe||(j=null,Sn(L,We({matches:pe},te?{actionData:te}:{},{loaderData:de,errors:Ae})))}async function ni(P,L,F,q,J){J===void 0&&(J={}),Nr();let pe=S1(L,F);Ue({navigation:pe},{flushSync:J.flushSync===!0});let se,ie=Vu(q,L);if(!ie.route.action&&!ie.route.lazy)se={type:Ne.error,error:Ut(405,{method:P.method,pathname:L.pathname,routeId:ie.route.id})};else if(se=await Yr("action",P,ie,q,r,a,d,l.v7_relativeSplatPath),P.signal.aborted)return{shortCircuited:!0};if(Mo(se)){let te;return J&&J.replace!=null?te=J.replace:te=se.location===_.location.pathname+_.location.search,await bo(_,se,{submission:F,replace:te}),{shortCircuited:!0}}if(hr(se)){let te=ba(q,ie.route.id);return(J&&J.replace)!==!0&&(A=Be.Push),{pendingActionData:{},pendingActionError:{[te.route.id]:se.error}}}if(Ro(se))throw Ut(400,{type:"defer-action"});return{pendingActionData:{[ie.route.id]:se.data}}}async function Xl(P,L,F,q,J,pe,se,ie,te,be,Xe){let de=q||Ms(L,J),Ae=J||pe||mh(de),nt=c||i,[It,Ze]=ih(e.history,_,F,Ae,L,l.v7_partialHydration&&ie===!0,ne,X,ce,le,Y,G,nt,d,be,Xe);if(Tt(Ee=>!(F&&F.some(De=>De.route.id===Ee))||It&&It.some(De=>De.route.id===Ee)),V=++U,It.length===0&&Ze.length===0){let Ee=cn();return Sn(L,We({matches:F,loaderData:{},errors:Xe||null},be?{actionData:be}:{},Ee?{fetchers:new Map(_.fetchers)}:{}),{flushSync:te}),{shortCircuited:!0}}if(!K&&(!l.v7_partialHydration||!ie)){Ze.forEach(De=>{let un=_.fetchers.get(De.key),li=Xr(void 0,un?un.data:void 0);_.fetchers.set(De.key,li)});let Ee=be||_.actionData;Ue(We({navigation:de},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},Ze.length>0?{fetchers:new Map(_.fetchers)}:{}),{flushSync:te})}Ze.forEach(Ee=>{ee.has(Ee.key)&&ge(Ee.key),Ee.controller&&ee.set(Ee.key,Ee.controller)});let qo=()=>Ze.forEach(Ee=>ge(Ee.key));j&&j.signal.addEventListener("abort",qo);let{results:es,loaderResults:Go,fetcherResults:Bn}=await ai(_.matches,F,It,Ze,P);if(P.signal.aborted)return{shortCircuited:!0};j&&j.signal.removeEventListener("abort",qo),Ze.forEach(Ee=>ee.delete(Ee.key));let ko=fh(es);if(ko){if(ko.idx>=It.length){let Ee=Ze[ko.idx-It.length].key;G.add(Ee)}return await bo(_,ko.result,{replace:se}),{shortCircuited:!0}}let{loaderData:ts,errors:ns}=uh(_,F,It,Go,Xe,Ze,Bn,ke);ke.forEach((Ee,De)=>{Ee.subscribe(un=>{(un||Ee.done)&&ke.delete(De)})});let os=cn(),Ko=zt(V),ii=os||Ko||Ze.length>0;return We({loaderData:ts,errors:ns},ii?{fetchers:new Map(_.fetchers)}:{})}function oi(P,L,F,q){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ee.has(P)&&ge(P);let J=(q&&q.unstable_flushSync)===!0,pe=c||i,se=Wu(_.location,_.matches,d,l.v7_prependBasename,F,l.v7_relativeSplatPath,L,q==null?void 0:q.relative),ie=fr(pe,se,d);if(!ie){z(P,L,Ut(404,{pathname:se}),{flushSync:J});return}let{path:te,submission:be,error:Xe}=ah(l.v7_normalizeFormMethod,!0,se,q);if(Xe){z(P,L,Xe,{flushSync:J});return}let de=Vu(ie,te);if(R=(q&&q.preventScrollReset)===!0,be&&Zt(be.formMethod)){ri(P,L,te,de,ie,J,be);return}Y.set(P,{routeId:L,path:te}),Zl(P,L,te,de,ie,J,be)}async function ri(P,L,F,q,J,pe,se){if(Nr(),Y.delete(P),!q.route.action&&!q.route.lazy){let De=Ut(405,{method:se.formMethod,pathname:F,routeId:L});z(P,L,De,{flushSync:pe});return}let ie=_.fetchers.get(P);sn(P,C1(se,ie),{flushSync:pe});let te=new AbortController,be=Jr(e.history,F,te.signal,se);ee.set(P,te);let Xe=U,de=await Yr("action",be,q,J,r,a,d,l.v7_relativeSplatPath);if(be.signal.aborted){ee.get(P)===te&&ee.delete(P);return}if(l.v7_fetcherPersist&&le.has(P)){if(Mo(de)||hr(de)){sn(P,qn(void 0));return}}else{if(Mo(de))if(ee.delete(P),V>Xe){sn(P,qn(void 0));return}else return G.add(P),sn(P,Xr(se)),bo(_,de,{fetcherSubmission:se});if(hr(de)){z(P,L,de.error);return}}if(Ro(de))throw Ut(400,{type:"defer-action"});let Ae=_.navigation.location||_.location,nt=Jr(e.history,Ae,te.signal),It=c||i,Ze=_.navigation.state!=="idle"?fr(It,_.navigation.location,d):_.matches;he(Ze,"Didn't find any matches after fetcher action");let qo=++U;w.set(P,qo);let es=Xr(se,de.data);_.fetchers.set(P,es);let[Go,Bn]=ih(e.history,_,Ze,se,Ae,!1,ne,X,ce,le,Y,G,It,d,{[q.route.id]:de.data},void 0);Bn.filter(De=>De.key!==P).forEach(De=>{let un=De.key,li=_.fetchers.get(un),sk=Xr(void 0,li?li.data:void 0);_.fetchers.set(un,sk),ee.has(un)&&ge(un),De.controller&&ee.set(un,De.controller)}),Ue({fetchers:new Map(_.fetchers)});let ko=()=>Bn.forEach(De=>ge(De.key));te.signal.addEventListener("abort",ko);let{results:ts,loaderResults:ns,fetcherResults:os}=await ai(_.matches,Ze,Go,Bn,nt);if(te.signal.aborted)return;te.signal.removeEventListener("abort",ko),w.delete(P),ee.delete(P),Bn.forEach(De=>ee.delete(De.key));let Ko=fh(ts);if(Ko){if(Ko.idx>=Go.length){let De=Bn[Ko.idx-Go.length].key;G.add(De)}return bo(_,Ko.result)}let{loaderData:ii,errors:Ee}=uh(_,_.matches,Go,ns,void 0,Bn,os,ke);if(_.fetchers.has(P)){let De=qn(de.data);_.fetchers.set(P,De)}zt(qo),_.navigation.state==="loading"&&qo>V?(he(A,"Expected pending action"),j&&j.abort(),Sn(_.navigation.location,{matches:Ze,loaderData:ii,errors:Ee,fetchers:new Map(_.fetchers)})):(Ue({errors:Ee,loaderData:dh(_.loaderData,ii,Ze,Ee),fetchers:new Map(_.fetchers)}),ne=!1)}async function Zl(P,L,F,q,J,pe,se){let ie=_.fetchers.get(P);sn(P,Xr(se,ie?ie.data:void 0),{flushSync:pe});let te=new AbortController,be=Jr(e.history,F,te.signal);ee.set(P,te);let Xe=U,de=await Yr("loader",be,q,J,r,a,d,l.v7_relativeSplatPath);if(Ro(de)&&(de=await rb(de,be.signal,!0)||de),ee.get(P)===te&&ee.delete(P),!be.signal.aborted){if(le.has(P)){sn(P,qn(void 0));return}if(Mo(de))if(V>Xe){sn(P,qn(void 0));return}else{G.add(P),await bo(_,de);return}if(hr(de)){z(P,L,de.error);return}he(!Ro(de),"Unhandled fetcher deferred data"),sn(P,qn(de.data))}}async function bo(P,L,F){let{submission:q,fetcherSubmission:J,replace:pe}=F===void 0?{}:F;L.revalidate&&(ne=!0);let se=Ua(P.location,L.location,{_isRedirect:!0});if(he(se,"Expected a location on the redirect navigation"),n){let Ae=!1;if(L.reloadDocument)Ae=!0;else if(eb.test(L.location)){const nt=e.history.createURL(L.location);Ae=nt.origin!==t.location.origin||Or(nt.pathname,d)==null}if(Ae){pe?t.location.replace(L.location):t.location.assign(L.location);return}}j=null;let ie=pe===!0?Be.Replace:Be.Push,{formMethod:te,formAction:be,formEncType:Xe}=P.navigation;!q&&!J&&te&&be&&Xe&&(q=mh(P.navigation));let de=q||J;if(p1.has(L.status)&&de&&Zt(de.formMethod))await ln(ie,se,{submission:We({},de,{formAction:L.location}),preventScrollReset:R});else{let Ae=Ms(se,q);await ln(ie,se,{overrideNavigation:Ae,fetcherSubmission:J,preventScrollReset:R})}}async function ai(P,L,F,q,J){let pe=await Promise.all([...F.map(te=>Yr("loader",J,te,L,r,a,d,l.v7_relativeSplatPath)),...q.map(te=>te.matches&&te.match&&te.controller?Yr("loader",Jr(e.history,te.path,te.controller.signal),te.match,te.matches,r,a,d,l.v7_relativeSplatPath):{type:Ne.error,error:Ut(404,{pathname:te.path})})]),se=pe.slice(0,F.length),ie=pe.slice(F.length);return await Promise.all([hh(P,F,se,se.map(()=>J.signal),!1,_.loaderData),hh(P,q.map(te=>te.match),ie,q.map(te=>te.controller?te.controller.signal:null),!0)]),{results:pe,loaderResults:se,fetcherResults:ie}}function Nr(){ne=!0,X.push(...Tt()),Y.forEach((P,L)=>{ee.has(L)&&(ce.push(L),ge(L))})}function sn(P,L,F){F===void 0&&(F={}),_.fetchers.set(P,L),Ue({fetchers:new Map(_.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function z(P,L,F,q){q===void 0&&(q={});let J=ba(_.matches,L);ae(P),Ue({errors:{[J.route.id]:F},fetchers:new Map(_.fetchers)},{flushSync:(q&&q.flushSync)===!0})}function $(P){return l.v7_fetcherPersist&&(E.set(P,(E.get(P)||0)+1),le.has(P)&&le.delete(P)),_.fetchers.get(P)||f1}function ae(P){let L=_.fetchers.get(P);ee.has(P)&&!(L&&L.state==="loading"&&w.has(P))&&ge(P),Y.delete(P),w.delete(P),G.delete(P),le.delete(P),_.fetchers.delete(P)}function me(P){if(l.v7_fetcherPersist){let L=(E.get(P)||0)-1;L<=0?(E.delete(P),le.add(P)):E.set(P,L)}else ae(P);Ue({fetchers:new Map(_.fetchers)})}function ge(P){let L=ee.get(P);he(L,"Expected fetch controller: "+P),L.abort(),ee.delete(P)}function vt(P){for(let L of P){let F=$(L),q=qn(F.data);_.fetchers.set(L,q)}}function cn(){let P=[],L=!1;for(let F of G){let q=_.fetchers.get(F);he(q,"Expected fetcher: "+F),q.state==="loading"&&(G.delete(F),P.push(F),L=!0)}return vt(P),L}function zt(P){let L=[];for(let[F,q]of w)if(q<P){let J=_.fetchers.get(F);he(J,"Expected fetcher: "+F),J.state==="loading"&&(ge(F),w.delete(F),L.push(F))}return vt(L),L.length>0}function yo(P,L){let F=_.blockers.get(P)||Qr;return re.get(P)!==L&&re.set(P,L),F}function Wn(P){_.blockers.delete(P),re.delete(P)}function Je(P,L){let F=_.blockers.get(P)||Qr;he(F.state==="unblocked"&&L.state==="blocked"||F.state==="blocked"&&L.state==="blocked"||F.state==="blocked"&&L.state==="proceeding"||F.state==="blocked"&&L.state==="unblocked"||F.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+F.state+" -> "+L.state);let q=new Map(_.blockers);q.set(P,L),Ue({blockers:q})}function Cn(P){let{currentLocation:L,nextLocation:F,historyAction:q}=P;if(re.size===0)return;re.size>1&&co(!1,"A router only supports one blocker at a time");let J=Array.from(re.entries()),[pe,se]=J[J.length-1],ie=_.blockers.get(pe);if(!(ie&&ie.state==="proceeding")&&se({currentLocation:L,nextLocation:F,historyAction:q}))return pe}function Tt(P){let L=[];return ke.forEach((F,q)=>{(!P||P(q))&&(F.cancel(),L.push(q),ke.delete(q))}),L}function ak(P,L,F){if(f=P,y=L,h=F||null,!k&&_.navigation===Rs){k=!0;let q=Vp(_.location,_.matches);q!=null&&Ue({restoreScrollPosition:q})}return()=>{f=null,y=null,h=null}}function Bp(P,L){return h&&h(P,L.map(q=>Ww(q,_.loaderData)))||P.key}function ik(P,L){if(f&&y){let F=Bp(P,L);f[F]=y()}}function Vp(P,L){if(f){let F=Bp(P,L),q=f[F];if(typeof q=="number")return q}return null}function lk(P){r={},c=Hu(P,a,void 0,r)}return C={get basename(){return d},get future(){return l},get state(){return _},get routes(){return i},get window(){return t},initialize:Ye,subscribe:Z,enableScrollRestoration:ak,navigate:Hn,fetch:oi,revalidate:ti,createHref:P=>e.history.createHref(P),encodeLocation:P=>e.history.encodeLocation(P),getFetcher:$,deleteFetcher:me,dispose:Et,getBlocker:yo,deleteBlocker:Wn,_internalFetchControllers:ee,_internalActiveDeferreds:ke,_internalSetRoutes:lk},C}function g1(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Wu(e,t,n,o,a,r,i,c){let d,l;if(i){d=[];for(let s of t)if(d.push(s),s.route.id===i){l=s;break}}else d=t,l=t[t.length-1];let u=Bl(a||".",Wl(d,r),Or(e.pathname,n)||e.pathname,c==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&l&&l.route.index&&!np(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Mn([n,u.pathname])),No(u)}function ah(e,t,n,o){if(!o||!g1(o))return{path:n};if(o.formMethod&&!x1(o.formMethod))return{path:n,error:Ut(405,{method:o.formMethod})};let a=()=>({path:n,error:Ut(400,{type:"invalid-body"})}),r=o.formMethod||"get",i=e?r.toUpperCase():r.toLowerCase(),c=ob(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!Zt(i))return a();let f=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((h,y)=>{let[k,S]=y;return""+h+k+"="+S+`
`},""):String(o.body);return{path:n,submission:{formMethod:i,formAction:c,formEncType:o.formEncType,formData:void 0,json:void 0,text:f}}}else if(o.formEncType==="application/json"){if(!Zt(i))return a();try{let f=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:i,formAction:c,formEncType:o.formEncType,formData:void 0,json:f,text:void 0}}}catch{return a()}}}he(typeof FormData=="function","FormData is not available in this environment");let d,l;if(o.formData)d=Bu(o.formData),l=o.formData;else if(o.body instanceof FormData)d=Bu(o.body),l=o.body;else if(o.body instanceof URLSearchParams)d=o.body,l=ch(d);else if(o.body==null)d=new URLSearchParams,l=new FormData;else try{d=new URLSearchParams(o.body),l=ch(d)}catch{return a()}let u={formMethod:i,formAction:c,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:l,json:void 0,text:void 0};if(Zt(u.formMethod))return{path:n,submission:u};let s=yn(n);return t&&s.search&&np(s.search)&&d.append("index",""),s.search="?"+d,{path:No(s),submission:u}}function _1(e,t){let n=e;if(t){let o=e.findIndex(a=>a.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function ih(e,t,n,o,a,r,i,c,d,l,u,s,f,h,y,k){let S=k?Object.values(k)[0]:y?Object.values(y)[0]:void 0,v=e.createURL(t.location),m=e.createURL(a),g=k?Object.keys(k)[0]:void 0,C=_1(n,g).filter((A,R)=>{let{route:j}=A;if(j.lazy)return!0;if(j.loader==null)return!1;if(r)return j.loader.hydrate?!0:t.loaderData[j.id]===void 0&&(!t.errors||t.errors[j.id]===void 0);if(v1(t.loaderData,t.matches[R],A)||c.some(H=>H===A.route.id))return!0;let T=t.matches[R],I=A;return lh(A,We({currentUrl:v,currentParams:T.params,nextUrl:m,nextParams:I.params},o,{actionResult:S,defaultShouldRevalidate:i||v.pathname+v.search===m.pathname+m.search||v.search!==m.search||nb(T,I)}))}),_=[];return u.forEach((A,R)=>{if(r||!n.some(K=>K.route.id===A.routeId)||l.has(R))return;let j=fr(f,A.path,h);if(!j){_.push({key:R,routeId:A.routeId,path:A.path,matches:null,match:null,controller:null});return}let T=t.fetchers.get(R),I=Vu(j,A.path),H=!1;s.has(R)?H=!1:d.includes(R)?H=!0:T&&T.state!=="idle"&&T.data===void 0?H=i:H=lh(I,We({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},o,{actionResult:S,defaultShouldRevalidate:i})),H&&_.push({key:R,routeId:A.routeId,path:A.path,matches:j,match:I,controller:new AbortController})}),[C,_]}function v1(e,t,n){let o=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return o||a}function nb(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function lh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function sh(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let a=n[e.id];he(a,"No route found in manifest");let r={};for(let i in o){let d=a[i]!==void 0&&i!=="hasErrorBoundary";co(!d,'Route "'+a.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!d&&!Nw.has(i)&&(r[i]=o[i])}Object.assign(a,r),Object.assign(a,We({},t(a),{lazy:void 0}))}async function Yr(e,t,n,o,a,r,i,c,d){d===void 0&&(d={});let l,u,s,f=k=>{let S,v=new Promise((m,g)=>S=g);return s=()=>S(),t.signal.addEventListener("abort",s),Promise.race([k({request:t,params:n.params,context:d.requestContext}),v])};try{let k=n.route[e];if(n.route.lazy)if(k){let S,v=await Promise.all([f(k).catch(m=>{S=m}),sh(n.route,r,a)]);if(S)throw S;u=v[0]}else if(await sh(n.route,r,a),k=n.route[e],k)u=await f(k);else if(e==="action"){let S=new URL(t.url),v=S.pathname+S.search;throw Ut(405,{method:t.method,pathname:v,routeId:n.route.id})}else return{type:Ne.data,data:void 0};else if(k)u=await f(k);else{let S=new URL(t.url),v=S.pathname+S.search;throw Ut(404,{pathname:v})}he(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(k){l=Ne.error,u=k}finally{s&&t.signal.removeEventListener("abort",s)}if(w1(u)){let k=u.status;if(d1.has(k)){let v=u.headers.get("Location");if(he(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!eb.test(v))v=Wu(new URL(t.url),o.slice(0,o.indexOf(n)+1),i,!0,v,c);else if(!d.isStaticRequest){let m=new URL(t.url),g=v.startsWith("//")?new URL(m.protocol+v):new URL(v),x=Or(g.pathname,i)!=null;g.origin===m.origin&&x&&(v=g.pathname+g.search+g.hash)}if(d.isStaticRequest)throw u.headers.set("Location",v),u;return{type:Ne.redirect,status:k,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(d.isRouteRequest)throw{type:l===Ne.error?Ne.error:Ne.data,response:u};let S;try{let v=u.headers.get("Content-Type");v&&/\bapplication\/json\b/.test(v)?u.body==null?S=null:S=await u.json():S=await u.text()}catch(v){return{type:Ne.error,error:v}}return l===Ne.error?{type:l,error:new tp(k,u.statusText,S),headers:u.headers}:{type:Ne.data,data:S,statusCode:u.status,headers:u.headers}}if(l===Ne.error)return{type:l,error:u};if(k1(u)){var h,y;return{type:Ne.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:Ne.data,data:u}}function Jr(e,t,n,o){let a=e.createURL(ob(t)).toString(),r={signal:n};if(o&&Zt(o.formMethod)){let{formMethod:i,formEncType:c}=o;r.method=i.toUpperCase(),c==="application/json"?(r.headers=new Headers({"Content-Type":c}),r.body=JSON.stringify(o.json)):c==="text/plain"?r.body=o.text:c==="application/x-www-form-urlencoded"&&o.formData?r.body=Bu(o.formData):r.body=o.formData}return new Request(a,r)}function Bu(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function ch(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function b1(e,t,n,o,a){let r={},i=null,c,d=!1,l={};return n.forEach((u,s)=>{let f=t[s].route.id;if(he(!Mo(u),"Cannot handle redirect results in processLoaderData"),hr(u)){let h=ba(e,f),y=u.error;o&&(y=Object.values(o)[0],o=void 0),i=i||{},i[h.route.id]==null&&(i[h.route.id]=y),r[f]=void 0,d||(d=!0,c=Xv(u.error)?u.error.status:500),u.headers&&(l[f]=u.headers)}else Ro(u)?(a.set(f,u.deferredData),r[f]=u.deferredData.data):r[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!d&&(c=u.statusCode),u.headers&&(l[f]=u.headers)}),o&&(i=o,r[Object.keys(o)[0]]=void 0),{loaderData:r,errors:i,statusCode:c||200,loaderHeaders:l}}function uh(e,t,n,o,a,r,i,c){let{loaderData:d,errors:l}=b1(t,n,o,a,c);for(let u=0;u<r.length;u++){let{key:s,match:f,controller:h}=r[u];he(i!==void 0&&i[u]!==void 0,"Did not find corresponding fetcher result");let y=i[u];if(!(h&&h.signal.aborted))if(hr(y)){let k=ba(e.matches,f==null?void 0:f.route.id);l&&l[k.route.id]||(l=We({},l,{[k.route.id]:y.error})),e.fetchers.delete(s)}else if(Mo(y))he(!1,"Unhandled fetcher revalidation redirect");else if(Ro(y))he(!1,"Unhandled fetcher deferred data");else{let k=qn(y.data);e.fetchers.set(s,k)}}return{loaderData:d,errors:l}}function dh(e,t,n,o){let a=We({},t);for(let r of n){let i=r.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(a[i]=t[i]):e[i]!==void 0&&r.route.loader&&(a[i]=e[i]),o&&o.hasOwnProperty(i))break}return a}function ba(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function ph(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ut(e,t){let{pathname:n,routeId:o,method:a,type:r}=t===void 0?{}:t,i="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&n&&o?c="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":r==="defer-action"?c="defer() is not supported in actions":r==="invalid-body"&&(c="Unable to encode submission body")):e===403?(i="Forbidden",c='Route "'+o+'" does not match URL "'+n+'"'):e===404?(i="Not Found",c='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",a&&n&&o?c="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":a&&(c='Invalid request method "'+a.toUpperCase()+'"')),new tp(e||500,i,new Error(c),!0)}function fh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Mo(n))return{result:n,idx:t}}}function ob(e){let t=typeof e=="string"?yn(e):e;return No(We({},t,{hash:""}))}function y1(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ro(e){return e.type===Ne.deferred}function hr(e){return e.type===Ne.error}function Mo(e){return(e&&e.type)===Ne.redirect}function k1(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function w1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function x1(e){return u1.has(e.toLowerCase())}function Zt(e){return s1.has(e.toLowerCase())}async function hh(e,t,n,o,a,r){for(let i=0;i<n.length;i++){let c=n[i],d=t[i];if(!d)continue;let l=e.find(s=>s.route.id===d.route.id),u=l!=null&&!nb(l,d)&&(r&&r[d.route.id])!==void 0;if(Ro(c)&&(a||u)){let s=o[i];he(s,"Expected an AbortSignal for revalidating fetcher deferred result"),await rb(c,s,a).then(f=>{f&&(n[i]=f||n[i])})}}}async function rb(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ne.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Ne.error,error:a}}return{type:Ne.data,data:e.deferredData.data}}}function np(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Vu(e,t){let n=typeof t=="string"?yn(t).search:t.search;if(e[e.length-1].route.index&&np(n||""))return e[e.length-1];let o=Jv(e);return o[o.length-1]}function mh(e){let{formMethod:t,formAction:n,formEncType:o,text:a,formData:r,json:i}=e;if(!(!t||!n||!o)){if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:a};if(r!=null)return{formMethod:t,formAction:n,formEncType:o,formData:r,json:void 0,text:void 0};if(i!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:i,text:void 0}}}function Ms(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function S1(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Xr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function C1(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function qn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function E1(e,t){try{let n=e.sessionStorage.getItem(tb);if(n){let o=JSON.parse(n);for(let[a,r]of Object.entries(o||{}))r&&Array.isArray(r)&&t.set(a,new Set(r||[]))}}catch{}}function T1(e,t){if(t.size>0){let n={};for(let[o,a]of t)n[o]=[...a];try{e.sessionStorage.setItem(tb,JSON.stringify(n))}catch(o){co(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Na.apply(this,arguments)}const Vl=b.createContext(null),ab=b.createContext(null),mo=b.createContext(null),$l=b.createContext(null),Fn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ib=b.createContext(null);function A1(e,t){let{relative:n}=t===void 0?{}:t;zr()||he(!1);let{basename:o,navigator:a}=b.useContext(mo),{hash:r,pathname:i,search:c}=cb(e,{relative:n}),d=i;return o!=="/"&&(d=i==="/"?o:Mn([o,i])),a.createHref({pathname:d,search:c,hash:r})}function zr(){return b.useContext($l)!=null}function uo(){return zr()||he(!1),b.useContext($l).location}function lb(e){b.useContext(mo).static||b.useLayoutEffect(e)}function op(){let{isDataRoute:e}=b.useContext(Fn);return e?H1():P1()}function P1(){zr()||he(!1);let e=b.useContext(Vl),{basename:t,future:n,navigator:o}=b.useContext(mo),{matches:a}=b.useContext(Fn),{pathname:r}=uo(),i=JSON.stringify(Wl(a,n.v7_relativeSplatPath)),c=b.useRef(!1);return lb(()=>{c.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!c.current)return;if(typeof l=="number"){o.go(l);return}let s=Bl(l,JSON.parse(i),r,u.relative==="path");e==null&&t!=="/"&&(s.pathname=s.pathname==="/"?t:Mn([t,s.pathname])),(u.replace?o.replace:o.push)(s,u.state,u)},[t,o,i,r,e])}const j1=b.createContext(null);function sb(e){let t=b.useContext(Fn).outlet;return t&&b.createElement(j1.Provider,{value:e},t)}function cb(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=b.useContext(mo),{matches:a}=b.useContext(Fn),{pathname:r}=uo(),i=JSON.stringify(Wl(a,o.v7_relativeSplatPath));return b.useMemo(()=>Bl(e,JSON.parse(i),r,n==="path"),[e,i,r,n])}function R1(e,t,n,o){zr()||he(!1);let{navigator:a}=b.useContext(mo),{matches:r}=b.useContext(Fn),i=r[r.length-1],c=i?i.params:{};i&&i.pathname;let d=i?i.pathnameBase:"/";i&&i.route;let l=uo(),u;if(t){var s;let S=typeof t=="string"?yn(t):t;d==="/"||(s=S.pathname)!=null&&s.startsWith(d)||he(!1),u=S}else u=l;let f=u.pathname||"/",h=d==="/"?f:f.slice(d.length)||"/",y=fr(e,{pathname:h}),k=z1(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},c,S.params),pathname:Mn([d,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?d:Mn([d,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),r,n,o);return t&&k?b.createElement($l.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Be.Pop}},k):k}function M1(){let e=N1(),t=Xv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:a},n):null,null)}const L1=b.createElement(M1,null);class D1 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Fn.Provider,{value:this.props.routeContext},b.createElement(ib.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O1(e){let{routeContext:t,match:n,children:o}=e,a=b.useContext(Vl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Fn.Provider,{value:t},o)}function z1(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var r;if((r=n)!=null&&r.errors)e=n.matches;else return null}let i=e,c=(a=n)==null?void 0:a.errors;if(c!=null){let u=i.findIndex(s=>s.route.id&&(c==null?void 0:c[s.route.id]));u>=0||he(!1),i=i.slice(0,Math.min(i.length,u+1))}let d=!1,l=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<i.length;u++){let s=i[u];if((s.route.HydrateFallback||s.route.hydrateFallbackElement)&&(l=u),s.route.id){let{loaderData:f,errors:h}=n,y=s.route.loader&&f[s.route.id]===void 0&&(!h||h[s.route.id]===void 0);if(s.route.lazy||y){d=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((u,s,f)=>{let h,y=!1,k=null,S=null;n&&(h=c&&s.route.id?c[s.route.id]:void 0,k=s.route.errorElement||L1,d&&(l<0&&f===0?(W1("route-fallback",!1),y=!0,S=null):l===f&&(y=!0,S=s.route.hydrateFallbackElement||null)));let v=t.concat(i.slice(0,f+1)),m=()=>{let g;return h?g=k:y?g=S:s.route.Component?g=b.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=u,b.createElement(O1,{match:s,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||f===0)?b.createElement(D1,{location:n.location,revalidation:n.revalidation,component:k,error:h,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var ub=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ub||{}),vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vl||{});function I1(e){let t=b.useContext(Vl);return t||he(!1),t}function F1(e){let t=b.useContext(ab);return t||he(!1),t}function U1(e){let t=b.useContext(Fn);return t||he(!1),t}function db(e){let t=U1(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function N1(){var e;let t=b.useContext(ib),n=F1(vl.UseRouteError),o=db(vl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function H1(){let{router:e}=I1(ub.UseNavigateStable),t=db(vl.UseNavigateStable),n=b.useRef(!1);return lb(()=>{n.current=!0}),b.useCallback(function(a,r){r===void 0&&(r={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Na({fromRouteId:t},r)))},[e,t])}const gh={};function W1(e,t,n){!t&&!gh[e]&&(gh[e]=!0)}function pn(e){let{to:t,replace:n,state:o,relative:a}=e;zr()||he(!1);let{future:r,static:i}=b.useContext(mo),{matches:c}=b.useContext(Fn),{pathname:d}=uo(),l=op(),u=Bl(t,Wl(c,r.v7_relativeSplatPath),d,a==="path"),s=JSON.stringify(u);return b.useEffect(()=>l(JSON.parse(s),{replace:n,state:o,relative:a}),[l,s,a,n,o]),null}function En(e){return sb(e.context)}function B1(e){let{basename:t="/",children:n=null,location:o,navigationType:a=Be.Pop,navigator:r,static:i=!1,future:c}=e;zr()&&he(!1);let d=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:d,navigator:r,static:i,future:Na({v7_relativeSplatPath:!1},c)}),[d,c,r,i]);typeof o=="string"&&(o=yn(o));let{pathname:u="/",search:s="",hash:f="",state:h=null,key:y="default"}=o,k=b.useMemo(()=>{let S=Or(u,d);return S==null?null:{location:{pathname:S,search:s,hash:f,state:h,key:y},navigationType:a}},[d,u,s,f,h,y,a]);return k==null?null:b.createElement(mo.Provider,{value:l},b.createElement($l.Provider,{children:n,value:k}))}new Promise(()=>{});function V1(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:b.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ha.apply(this,arguments)}function $1(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function q1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function G1(e,t){return e.button===0&&(!t||t==="_self")&&!q1(e)}function $u(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let o=e[n];return t.concat(Array.isArray(o)?o.map(a=>[n,a]):[[n,o]])},[]))}function K1(e,t){let n=$u(e);return t&&t.forEach((o,a)=>{n.has(a)||t.getAll(a).forEach(r=>{n.append(a,r)})}),n}const Q1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Y1="6";try{window.__reactRouterVersion=Y1}catch{}function J1(e,t){return m1({basename:t==null?void 0:t.basename,future:Ha({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Iw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||X1(),routes:e,mapRouteProperties:V1,window:t==null?void 0:t.window}).initialize()}function X1(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ha({},t,{errors:Z1(t.errors)})),t}function Z1(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,a]of t)if(a&&a.__type==="RouteErrorResponse")n[o]=new tp(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let r=window[a.__subType];if(typeof r=="function")try{let i=new r(a.message);i.stack="",n[o]=i}catch{}}if(n[o]==null){let r=new Error(a.message);r.stack="",n[o]=r}}else n[o]=a;return n}const ex=b.createContext({isTransitioning:!1}),tx=b.createContext(new Map),nx="startTransition",_h=Sk[nx],ox="flushSync",vh=Dw[ox];function rx(e){_h?_h(e):e()}function Zr(e){vh?vh(e):e()}class ax{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function ix(e){let{fallbackElement:t,router:n,future:o}=e,[a,r]=b.useState(n.state),[i,c]=b.useState(),[d,l]=b.useState({isTransitioning:!1}),[u,s]=b.useState(),[f,h]=b.useState(),[y,k]=b.useState(),S=b.useRef(new Map),{v7_startTransition:v}=o||{},m=b.useCallback(A=>{v?rx(A):A()},[v]),g=b.useCallback((A,R)=>{let{deletedFetchers:j,unstable_flushSync:T,unstable_viewTransitionOpts:I}=R;j.forEach(K=>S.current.delete(K)),A.fetchers.forEach((K,ne)=>{K.data!==void 0&&S.current.set(ne,K.data)});let H=n.window==null||typeof n.window.document.startViewTransition!="function";if(!I||H){T?Zr(()=>r(A)):m(()=>r(A));return}if(T){Zr(()=>{f&&(u&&u.resolve(),f.skipTransition()),l({isTransitioning:!0,flushSync:!0,currentLocation:I.currentLocation,nextLocation:I.nextLocation})});let K=n.window.document.startViewTransition(()=>{Zr(()=>r(A))});K.finished.finally(()=>{Zr(()=>{s(void 0),h(void 0),c(void 0),l({isTransitioning:!1})})}),Zr(()=>h(K));return}f?(u&&u.resolve(),f.skipTransition(),k({state:A,currentLocation:I.currentLocation,nextLocation:I.nextLocation})):(c(A),l({isTransitioning:!0,flushSync:!1,currentLocation:I.currentLocation,nextLocation:I.nextLocation}))},[n.window,f,u,S,m]);b.useLayoutEffect(()=>n.subscribe(g),[n,g]),b.useEffect(()=>{d.isTransitioning&&!d.flushSync&&s(new ax)},[d]),b.useEffect(()=>{if(u&&i&&n.window){let A=i,R=u.promise,j=n.window.document.startViewTransition(async()=>{m(()=>r(A)),await R});j.finished.finally(()=>{s(void 0),h(void 0),c(void 0),l({isTransitioning:!1})}),h(j)}},[m,i,u,n.window]),b.useEffect(()=>{u&&i&&a.location.key===i.location.key&&u.resolve()},[u,f,a.location,i]),b.useEffect(()=>{!d.isTransitioning&&y&&(c(y.state),l({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),k(void 0))},[d.isTransitioning,y]),b.useEffect(()=>{},[]);let x=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:A=>n.navigate(A),push:(A,R,j)=>n.navigate(A,{state:R,preventScrollReset:j==null?void 0:j.preventScrollReset}),replace:(A,R,j)=>n.navigate(A,{replace:!0,state:R,preventScrollReset:j==null?void 0:j.preventScrollReset})}),[n]),C=n.basename||"/",_=b.useMemo(()=>({router:n,navigator:x,static:!1,basename:C}),[n,x,C]);return b.createElement(b.Fragment,null,b.createElement(Vl.Provider,{value:_},b.createElement(ab.Provider,{value:a},b.createElement(tx.Provider,{value:S.current},b.createElement(ex.Provider,{value:d},b.createElement(B1,{basename:C,location:a.location,navigationType:a.historyAction,navigator:x,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?b.createElement(lx,{routes:n.routes,future:n.future,state:a}):t))))),null)}function lx(e){let{routes:t,future:n,state:o}=e;return R1(t,void 0,o,n)}const sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=b.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:r,replace:i,state:c,target:d,to:l,preventScrollReset:u,unstable_viewTransition:s}=t,f=$1(t,Q1),{basename:h}=b.useContext(mo),y,k=!1;if(typeof l=="string"&&cx.test(l)&&(y=l,sx))try{let g=new URL(window.location.href),x=l.startsWith("//")?new URL(g.protocol+l):new URL(l),C=Or(x.pathname,h);x.origin===g.origin&&C!=null?l=C+x.search+x.hash:k=!0}catch{}let S=A1(l,{relative:a}),v=ux(l,{replace:i,state:c,target:d,preventScrollReset:u,relative:a,unstable_viewTransition:s});function m(g){o&&o(g),g.defaultPrevented||v(g)}return b.createElement("a",Ha({},f,{href:y||S,onClick:k||r?o:m,ref:n,target:d}))});var bh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bh||(bh={}));var yh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yh||(yh={}));function ux(e,t){let{target:n,replace:o,state:a,preventScrollReset:r,relative:i,unstable_viewTransition:c}=t===void 0?{}:t,d=op(),l=uo(),u=cb(e,{relative:i});return b.useCallback(s=>{if(G1(s,n)){s.preventDefault();let f=o!==void 0?o:No(l)===No(u);d(e,{replace:f,state:a,preventScrollReset:r,relative:i,unstable_viewTransition:c})}},[l,d,u,o,a,n,e,r,i,c])}function dx(e){let t=b.useRef($u(e)),n=b.useRef(!1),o=uo(),a=b.useMemo(()=>K1(o.search,n.current?null:t.current),[o.search]),r=op(),i=b.useCallback((c,d)=>{const l=$u(typeof c=="function"?c(a):c);n.current=!0,r("?"+l,d)},[r,a]);return[a,i]}const pb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20aria-label='Github'%20class='feather%20feather-github'%3e%3cpath%20d='M9%2019c-5%201.5-5-2.5-7-3m14%206v-3.87a3.37%203.37%200%200%200-.94-2.61c3.14-.35%206.44-1.54%206.44-7A5.44%205.44%200%200%200%2020%204.77%205.07%205.07%200%200%200%2019.91%201S18.73.65%2016%202.48a13.38%2013.38%200%200%200-7%200C6.27.65%205.09%201%205.09%201A5.07%205.07%200%200%200%205%204.77a5.44%205.44%200%200%200-1.5%203.78c0%205.42%203.3%206.61%206.44%207A3.37%203.37%200%200%200%209%2018.13V22'%3e%3c/path%3e%3c/svg%3e",fb="/assets/react-red-4jE0oKjI.webp";function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},bl.apply(this,arguments)}function rp(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function qu(e,t){return qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},qu(e,t)}function ap(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qu(e,t)}function px(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function fx(e,t){e.classList?e.classList.add(t):px(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function kh(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function hx(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=kh(e.className,t):e.setAttribute("class",kh(e.className&&e.className.baseVal||"",t))}const wh={disabled:!1},ip=Se.createContext(null);var hb=function(t){return t.scrollTop},la="unmounted",Eo="exited",Wt="entering",_n="entered",Wa="exiting",Un=function(e){ap(t,e);function t(o,a){var r;r=e.call(this,o,a)||this;var i=a,c=i&&!i.isMounting?o.enter:o.appear,d;return r.appearStatus=null,o.in?c?(d=Eo,r.appearStatus=Wt):d=_n:o.unmountOnExit||o.mountOnEnter?d=la:d=Eo,r.state={status:d},r.nextCallback=null,r}t.getDerivedStateFromProps=function(a,r){var i=a.in;return i&&r.status===la?{status:Eo}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var r=null;if(a!==this.props){var i=this.state.status;this.props.in?i!==Wt&&i!==_n&&(r=Wt):(i===Wt||i===_n)&&(r=Wa)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,r,i,c;return r=i=c=a,a!=null&&typeof a!="number"&&(r=a.exit,i=a.enter,c=a.appear!==void 0?a.appear:i),{exit:r,enter:i,appear:c}},n.updateStatus=function(a,r){if(a===void 0&&(a=!1),r!==null)if(this.cancelNextCallback(),r===Wt){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:ia.findDOMNode(this);i&&hb(i)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Eo&&this.setState({status:la})},n.performEnter=function(a){var r=this,i=this.props.enter,c=this.context?this.context.isMounting:a,d=this.props.nodeRef?[c]:[ia.findDOMNode(this),c],l=d[0],u=d[1],s=this.getTimeouts(),f=c?s.appear:s.enter;if(!a&&!i||wh.disabled){this.safeSetState({status:_n},function(){r.props.onEntered(l)});return}this.props.onEnter(l,u),this.safeSetState({status:Wt},function(){r.props.onEntering(l,u),r.onTransitionEnd(f,function(){r.safeSetState({status:_n},function(){r.props.onEntered(l,u)})})})},n.performExit=function(){var a=this,r=this.props.exit,i=this.getTimeouts(),c=this.props.nodeRef?void 0:ia.findDOMNode(this);if(!r||wh.disabled){this.safeSetState({status:Eo},function(){a.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:Wa},function(){a.props.onExiting(c),a.onTransitionEnd(i.exit,function(){a.safeSetState({status:Eo},function(){a.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,r){r=this.setNextCallback(r),this.setState(a,r)},n.setNextCallback=function(a){var r=this,i=!0;return this.nextCallback=function(c){i&&(i=!1,r.nextCallback=null,a(c))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(a,r){this.setNextCallback(r);var i=this.props.nodeRef?this.props.nodeRef.current:ia.findDOMNode(this),c=a==null&&!this.props.addEndListener;if(!i||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],l=d[0],u=d[1];this.props.addEndListener(l,u)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===la)return null;var r=this.props,i=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var c=rp(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Se.createElement(ip.Provider,{value:null},typeof i=="function"?i(a,c):Se.cloneElement(Se.Children.only(i),c))},t}(Se.Component);Un.contextType=ip;Un.propTypes={};function Yo(){}Un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Yo,onEntering:Yo,onEntered:Yo,onExit:Yo,onExiting:Yo,onExited:Yo};Un.UNMOUNTED=la;Un.EXITED=Eo;Un.ENTERING=Wt;Un.ENTERED=_n;Un.EXITING=Wa;const mx=Un;var gx=function(t,n){return t&&n&&n.split(" ").forEach(function(o){return fx(t,o)})},Ls=function(t,n){return t&&n&&n.split(" ").forEach(function(o){return hx(t,o)})},lp=function(e){ap(t,e);function t(){for(var o,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=e.call.apply(e,[this].concat(r))||this,o.appliedClasses={appear:{},enter:{},exit:{}},o.onEnter=function(c,d){var l=o.resolveArguments(c,d),u=l[0],s=l[1];o.removeClasses(u,"exit"),o.addClass(u,s?"appear":"enter","base"),o.props.onEnter&&o.props.onEnter(c,d)},o.onEntering=function(c,d){var l=o.resolveArguments(c,d),u=l[0],s=l[1],f=s?"appear":"enter";o.addClass(u,f,"active"),o.props.onEntering&&o.props.onEntering(c,d)},o.onEntered=function(c,d){var l=o.resolveArguments(c,d),u=l[0],s=l[1],f=s?"appear":"enter";o.removeClasses(u,f),o.addClass(u,f,"done"),o.props.onEntered&&o.props.onEntered(c,d)},o.onExit=function(c){var d=o.resolveArguments(c),l=d[0];o.removeClasses(l,"appear"),o.removeClasses(l,"enter"),o.addClass(l,"exit","base"),o.props.onExit&&o.props.onExit(c)},o.onExiting=function(c){var d=o.resolveArguments(c),l=d[0];o.addClass(l,"exit","active"),o.props.onExiting&&o.props.onExiting(c)},o.onExited=function(c){var d=o.resolveArguments(c),l=d[0];o.removeClasses(l,"exit"),o.addClass(l,"exit","done"),o.props.onExited&&o.props.onExited(c)},o.resolveArguments=function(c,d){return o.props.nodeRef?[o.props.nodeRef.current,c]:[c,d]},o.getClassNames=function(c){var d=o.props.classNames,l=typeof d=="string",u=l&&d?d+"-":"",s=l?""+u+c:d[c],f=l?s+"-active":d[c+"Active"],h=l?s+"-done":d[c+"Done"];return{baseClassName:s,activeClassName:f,doneClassName:h}},o}var n=t.prototype;return n.addClass=function(a,r,i){var c=this.getClassNames(r)[i+"ClassName"],d=this.getClassNames("enter"),l=d.doneClassName;r==="appear"&&i==="done"&&l&&(c+=" "+l),i==="active"&&a&&hb(a),c&&(this.appliedClasses[r][i]=c,gx(a,c))},n.removeClasses=function(a,r){var i=this.appliedClasses[r],c=i.base,d=i.active,l=i.done;this.appliedClasses[r]={},c&&Ls(a,c),d&&Ls(a,d),l&&Ls(a,l)},n.render=function(){var a=this.props;a.classNames;var r=rp(a,["classNames"]);return Se.createElement(mx,bl({},r,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(Se.Component);lp.defaultProps={classNames:""};lp.propTypes={};const _x=lp;var Ci,Ei;function vx(e,t){return!(e===t||Se.isValidElement(e)&&Se.isValidElement(t)&&e.key!=null&&e.key===t.key)}var Rr={out:"out-in",in:"in-out"},yl=function(t,n,o){return function(){var a;t.props[n]&&(a=t.props)[n].apply(a,arguments),o()}},bx=(Ci={},Ci[Rr.out]=function(e){var t=e.current,n=e.changeState;return Se.cloneElement(t,{in:!1,onExited:yl(t,"onExited",function(){n(Wt,null)})})},Ci[Rr.in]=function(e){var t=e.current,n=e.changeState,o=e.children;return[t,Se.cloneElement(o,{in:!0,onEntered:yl(o,"onEntered",function(){n(Wt)})})]},Ci),yx=(Ei={},Ei[Rr.out]=function(e){var t=e.children,n=e.changeState;return Se.cloneElement(t,{in:!0,onEntered:yl(t,"onEntered",function(){n(_n,Se.cloneElement(t,{in:!0}))})})},Ei[Rr.in]=function(e){var t=e.current,n=e.children,o=e.changeState;return[Se.cloneElement(t,{in:!1,onExited:yl(t,"onExited",function(){o(_n,Se.cloneElement(n,{in:!0}))})}),Se.cloneElement(n,{in:!0})]},Ei),sp=function(e){ap(t,e);function t(){for(var o,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return o=e.call.apply(e,[this].concat(r))||this,o.state={status:_n,current:null},o.appeared=!1,o.changeState=function(c,d){d===void 0&&(d=o.state.current),o.setState({status:c,current:d})},o}var n=t.prototype;return n.componentDidMount=function(){this.appeared=!0},t.getDerivedStateFromProps=function(a,r){return a.children==null?{current:null}:r.status===Wt&&a.mode===Rr.in?{status:Wt}:r.current&&vx(r.current,a.children)?{status:Wa}:{current:Se.cloneElement(a.children,{in:!0})}},n.render=function(){var a=this.props,r=a.children,i=a.mode,c=this.state,d=c.status,l=c.current,u={children:r,current:l,changeState:this.changeState,status:d},s;switch(d){case Wt:s=yx[i](u);break;case Wa:s=bx[i](u);break;case _n:s=l}return Se.createElement(ip.Provider,{value:{isMounting:!this.appeared}},s)},t}(Se.Component);sp.propTypes={};sp.defaultProps={mode:Rr.out};const kx=sp;function wx(){const{pathname:e}=uo(),t=uo(),n=sb(),o=b.useRef(null),a=b.useRef(null),r=b.useRef({}),i=b.useRef(null),c=b.useCallback(()=>{a.current&&(a.current.style.width="100%")},[]),d=b.useCallback(()=>{a.current&&(a.current.style.width="0")},[]);return b.useEffect(()=>{if(window.innerWidth<1e3)return;const l=Object.values(r.current);for(const u of l){const s=(u==null?void 0:u.getAttribute("href"))??"";if(u&&s===window.location.hash){u==null||u.classList.add("active"),(u==null?void 0:u.offsetTop)>window.innerHeight&&(u==null||u.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}));break}}},[]),p.jsxs(p.Fragment,{children:[!["/",""].includes(e)&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:c,className:"open-nav",children:"☰"}),p.jsxs("nav",{ref:a,className:"nav",children:[p.jsx("button",{onClick:d,className:"btn-close",children:"X"}),p.jsxs("div",{className:"title-search-container",children:[p.jsxs("div",{className:"title-container",children:[p.jsxs(D,{to:"/",className:"title",children:[p.jsx("img",{src:fb,alt:"react",className:"img"}),p.jsx("p",{className:"text",translate:"no",children:"React Tools"})]}),p.jsx(D,{to:"https://github.com/nDriaDev/react-tools",children:p.jsx("img",{src:pb,className:"img",alt:"github"})})]}),p.jsxs("div",{className:"search-container",children:[p.jsx("input",{list:"routes",id:"input-routes",name:"input-routes",className:"search",placeholder:"🔎 Search...",onChange:l=>{var u,s;(u=r.current[l.target.value])==null||u.click(),(s=r.current[l.target.value])==null||s.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}),p.jsxs("datalist",{id:"routes",children:[p.jsx("option",{value:"createPubSubStore"}),p.jsx("option",{value:"useArray"}),p.jsx("option",{value:"useDerivedState"}),p.jsx("option",{value:"useLocalStorageState"}),p.jsx("option",{value:"useMap"}),p.jsx("option",{value:"usePrevious"}),p.jsx("option",{value:"useProxyState"}),p.jsx("option",{value:"useReducerGetReset"}),p.jsx("option",{value:"useReducerHistory"}),p.jsx("option",{value:"useReducerHistoryGetter"}),p.jsx("option",{value:"useSessionStorageState"}),p.jsx("option",{value:"useSet"}),p.jsx("option",{value:"useStateGetReset"}),p.jsx("option",{value:"useStateHistory"}),p.jsx("option",{value:"useStateHistoryGetter"}),p.jsx("option",{value:"useStateValidator"}),p.jsx("option",{value:"useSyncExternalStore"}),p.jsx("option",{value:"useDeferredValue"}),p.jsx("option",{value:"useEffectCompare"}),p.jsx("option",{value:"useEffectDeepCompare"}),p.jsx("option",{value:"useEffectOnce"}),p.jsx("option",{value:"useIsMounted"}),p.jsx("option",{value:"useLayoutEffectCompare"}),p.jsx("option",{value:"useLayoutEffectDeepCompare"}),p.jsx("option",{value:"useLayoutEffectOnce"}),p.jsx("option",{value:"useLogger"}),p.jsx("option",{value:"useRerender"}),p.jsx("option",{value:"useCallbackCompare"}),p.jsx("option",{value:"useCallbackDeepCompare"}),p.jsx("option",{value:"useId"}),p.jsx("option",{value:"useLazyRef"}),p.jsx("option",{value:"useMemoCompare"}),p.jsx("option",{value:"useMemoDeepCompare"}),p.jsx("option",{value:"useMemoizedFn"}),p.jsx("option",{value:"useMergedRef"}),p.jsx("option",{value:"useBeforeUnload"}),p.jsx("option",{value:"useClickOutside"}),p.jsx("option",{value:"useContextMenu"}),p.jsx("option",{value:"useDocumentVisibility"}),p.jsx("option",{value:"useDoubleClick"}),p.jsx("option",{value:"useEventDispatcher"}),p.jsx("option",{value:"useEventListener"}),p.jsx("option",{value:"useEvents"}),p.jsx("option",{value:"useHotKeys"}),p.jsx("option",{value:"useHover"}),p.jsx("option",{value:"useInfiniteScroll"}),p.jsx("option",{value:"useIntersectionObserver"}),p.jsx("option",{value:"useIsOnline"}),p.jsx("option",{value:"useLongPress"}),p.jsx("option",{value:"useMeasure"}),p.jsx("option",{value:"useMouse"}),p.jsx("option",{value:"useMutationObserver"}),p.jsx("option",{value:"useNetwork"}),p.jsx("option",{value:"usePerformAction"}),p.jsx("option",{value:"usePinchZoom"}),p.jsx("option",{value:"usePointerLock"}),p.jsx("option",{value:"useResizeObserver"}),p.jsx("option",{value:"useResponsive"}),p.jsx("option",{value:"useScreen"}),p.jsx("option",{value:"useScrollIntoView"}),p.jsx("option",{value:"useSwipe"}),p.jsx("option",{value:"useVisible"}),p.jsx("option",{value:"useActiveElement"}),p.jsx("option",{value:"useAnimation"}),p.jsx("option",{value:"useAudio"}),p.jsx("option",{value:"useBattery"}),p.jsx("option",{value:"useBluetooth"}),p.jsx("option",{value:"useBroadcastChannel"}),p.jsx("option",{value:"useClipboard"}),p.jsx("option",{value:"useColorScheme"}),p.jsx("option",{value:"useDebounce"}),p.jsx("option",{value:"useDeviceMotion"}),p.jsx("option",{value:"useDeviceOrientation"}),p.jsx("option",{value:"useDialogBox"}),p.jsx("option",{value:"useDisplayMedia"}),p.jsx("option",{value:"useDocumentPIP"}),p.jsx("option",{value:"useEventSource"}),p.jsx("option",{value:"useEyeDropper"}),p.jsx("option",{value:"useFetch"}),p.jsx("option",{value:"useFPS"}),p.jsx("option",{value:"useFullscreen"}),p.jsx("option",{value:"useGeolocation"}),p.jsx("option",{value:"useIdleCallback"}),p.jsx("option",{value:"useInterval"}),p.jsx("option",{value:"useLock"}),p.jsx("option",{value:"useMediaDevices"}),p.jsx("option",{value:"useMediaQuery"}),p.jsx("option",{value:"usePermission"}),p.jsx("option",{value:"usePIP"}),p.jsx("option",{value:"usePopover"}),p.jsx("option",{value:"usePromiseSuspensible"}),p.jsx("option",{value:"usePublishSubscribe"}),p.jsx("option",{value:"useRaf"}),p.jsx("option",{value:"useReducedMotion"}),p.jsx("option",{value:"useRemotePlayback"}),p.jsx("option",{value:"useScreenWakeLock"}),p.jsx("option",{value:"useScript"}),p.jsx("option",{value:"useShare"}),p.jsx("option",{value:"useSpeechRecognition"}),p.jsx("option",{value:"useSpeechSynthesis"}),p.jsx("option",{value:"useTextSelection"}),p.jsx("option",{value:"useThrottle"}),p.jsx("option",{value:"useTimeout"}),p.jsx("option",{value:"useTitle"}),p.jsx("option",{value:"useVibrate"}),p.jsx("option",{value:"useVideo"}),p.jsx("option",{value:"useWebSocket"}),p.jsx("option",{value:"useWebWorker"}),p.jsx("option",{value:"useWebWorkerFn"}),p.jsx("option",{value:"ErrorBoundary"}),p.jsx("option",{value:"For"}),p.jsx("option",{value:"ForMemoized"}),p.jsx("option",{value:"LazyComponent"}),p.jsx("option",{value:"Show"}),p.jsx("option",{value:"ShowMemoized"}),p.jsx("option",{value:"SwitchCase"}),p.jsx("option",{value:"SwitchCaseMemoized"}),p.jsx("option",{value:"alphanumericCompare"}),p.jsx("option",{value:"changeStringCase"}),p.jsx("option",{value:"clickElementOnKeydownEvent"}),p.jsx("option",{value:"defaultSerializer"}),p.jsx("option",{value:"detectBrowser"}),p.jsx("option",{value:"getBase64"}),p.jsx("option",{value:"getKeyObjectFromValue"}),p.jsx("option",{value:"getObjectFromDottedString"}),p.jsx("option",{value:"hotKeyHandler"}),p.jsx("option",{value:"isAsync"}),p.jsx("option",{value:"isClient"}),p.jsx("option",{value:"isDeepEqual"}),p.jsx("option",{value:"isMouseEvent"}),p.jsx("option",{value:"isShallowEqual"}),p.jsx("option",{value:"isTouchEvent"}),p.jsx("option",{value:"lazy"}),p.jsx("option",{value:"mergeObjects"}),p.jsx("option",{value:"removePropertiesFromArrayObjects"}),p.jsx("option",{value:"uniqueElementsArray"})]})]})]}),p.jsxs("details",{open:!0,className:"type",children:[p.jsx("summary",{translate:"no",children:"Hooks"}),p.jsxs("details",{open:!0,className:"sub-type",children:[p.jsx("summary",{translate:"no",children:"State"}),p.jsxs("div",{className:"container-details",children:[p.jsx(D,{ref:l=>r.current.createPubSubStore=l,to:"/hooks/state/createPubSubStore",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.createPubSubStore)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"createPubSubStore"}),p.jsx(D,{ref:l=>r.current.useArray=l,to:"/hooks/state/useArray",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useArray)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useArray"}),p.jsx(D,{ref:l=>r.current.useDerivedState=l,to:"/hooks/state/useDerivedState",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDerivedState)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDerivedState"}),p.jsx(D,{ref:l=>r.current.useLocalStorageState=l,to:"/hooks/state/useLocalStorageState",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLocalStorageState)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLocalStorageState"}),p.jsx(D,{ref:l=>r.current.useMap=l,to:"/hooks/state/useMap",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMap)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMap"}),p.jsx(D,{ref:l=>r.current.usePrevious=l,to:"/hooks/state/usePrevious",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePrevious)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePrevious"}),p.jsx(D,{ref:l=>r.current.useProxyState=l,to:"/hooks/state/useProxyState",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useProxyState)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useProxyState"}),p.jsx(D,{ref:l=>r.current.useReducerGetReset=l,to:"/hooks/state/useReducerGetReset",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useReducerGetReset)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useReducerGetReset"}),p.jsx(D,{ref:l=>r.current.useReducerHistory=l,to:"/hooks/state/useReducerHistory",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useReducerHistory)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useReducerHistory"}),p.jsx(D,{ref:l=>r.current.useReducerHistoryGetter=l,to:"/hooks/state/useReducerHistoryGetter",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useReducerHistoryGetter)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useReducerHistoryGetter"}),p.jsx(D,{ref:l=>r.current.useSessionStorageState=l,to:"/hooks/state/useSessionStorageState",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useSessionStorageState)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useSessionStorageState"}),p.jsx(D,{ref:l=>r.current.useSet=l,to:"/hooks/state/useSet",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useSet)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useSet"}),p.jsx(D,{ref:l=>r.current.useStateGetReset=l,to:"/hooks/state/useStateGetReset",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useStateGetReset)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useStateGetReset"}),p.jsx(D,{ref:l=>r.current.useStateHistory=l,to:"/hooks/state/useStateHistory",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useStateHistory)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useStateHistory"}),p.jsx(D,{ref:l=>r.current.useStateHistoryGetter=l,to:"/hooks/state/useStateHistoryGetter",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useStateHistoryGetter)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useStateHistoryGetter"}),p.jsx(D,{ref:l=>r.current.useStateValidator=l,to:"/hooks/state/useStateValidator",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useStateValidator)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useStateValidator"}),p.jsx(D,{ref:l=>r.current.useSyncExternalStore=l,to:"/hooks/state/useSyncExternalStore",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useSyncExternalStore)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useSyncExternalStore"})]})]}),p.jsxs("details",{open:!0,className:"sub-type",children:[p.jsx("summary",{translate:"no",children:"Lifecycle"}),p.jsxs("div",{className:"container-details",children:[p.jsx(D,{ref:l=>r.current.useDeferredValue=l,to:"/hooks/lifecycle/useDeferredValue",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDeferredValue)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDeferredValue"}),p.jsx(D,{ref:l=>r.current.useEffectCompare=l,to:"/hooks/lifecycle/useEffectCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEffectCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEffectCompare"}),p.jsx(D,{ref:l=>r.current.useEffectDeepCompare=l,to:"/hooks/lifecycle/useEffectDeepCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEffectDeepCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEffectDeepCompare"}),p.jsx(D,{ref:l=>r.current.useEffectOnce=l,to:"/hooks/lifecycle/useEffectOnce",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEffectOnce)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEffectOnce"}),p.jsx(D,{ref:l=>r.current.useIsMounted=l,to:"/hooks/lifecycle/useIsMounted",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useIsMounted)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useIsMounted"}),p.jsx(D,{ref:l=>r.current.useLayoutEffectCompare=l,to:"/hooks/lifecycle/useLayoutEffectCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLayoutEffectCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLayoutEffectCompare"}),p.jsx(D,{ref:l=>r.current.useLayoutEffectDeepCompare=l,to:"/hooks/lifecycle/useLayoutEffectDeepCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLayoutEffectDeepCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLayoutEffectDeepCompare"}),p.jsx(D,{ref:l=>r.current.useLayoutEffectOnce=l,to:"/hooks/lifecycle/useLayoutEffectOnce",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLayoutEffectOnce)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLayoutEffectOnce"}),p.jsx(D,{ref:l=>r.current.useLogger=l,to:"/hooks/lifecycle/useLogger",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLogger)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLogger"}),p.jsx(D,{ref:l=>r.current.useRerender=l,to:"/hooks/lifecycle/useRerender",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useRerender)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useRerender"})]})]}),p.jsxs("details",{open:!0,className:"sub-type",children:[p.jsx("summary",{translate:"no",children:"Performance"}),p.jsxs("div",{className:"container-details",children:[p.jsx(D,{ref:l=>r.current.useCallbackCompare=l,to:"/hooks/performance/useCallbackCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useCallbackCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useCallbackCompare"}),p.jsx(D,{ref:l=>r.current.useCallbackDeepCompare=l,to:"/hooks/performance/useCallbackDeepCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useCallbackDeepCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useCallbackDeepCompare"}),p.jsx(D,{ref:l=>r.current.useId=l,to:"/hooks/performance/useId",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useId)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useId"}),p.jsx(D,{ref:l=>r.current.useLazyRef=l,to:"/hooks/performance/useLazyRef",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLazyRef)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLazyRef"}),p.jsx(D,{ref:l=>r.current.useMemoCompare=l,to:"/hooks/performance/useMemoCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMemoCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMemoCompare"}),p.jsx(D,{ref:l=>r.current.useMemoDeepCompare=l,to:"/hooks/performance/useMemoDeepCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMemoDeepCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMemoDeepCompare"}),p.jsx(D,{ref:l=>r.current.useMemoizedFn=l,to:"/hooks/performance/useMemoizedFn",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMemoizedFn)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMemoizedFn"}),p.jsx(D,{ref:l=>r.current.useMergedRef=l,to:"/hooks/performance/useMergedRef",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMergedRef)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMergedRef"})]})]}),p.jsxs("details",{open:!0,className:"sub-type",children:[p.jsx("summary",{translate:"no",children:"Events"}),p.jsxs("div",{className:"container-details",children:[p.jsx(D,{ref:l=>r.current.useBeforeUnload=l,to:"/hooks/events/useBeforeUnload",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useBeforeUnload)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useBeforeUnload"}),p.jsx(D,{ref:l=>r.current.useClickOutside=l,to:"/hooks/events/useClickOutside",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useClickOutside)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useClickOutside"}),p.jsx(D,{ref:l=>r.current.useContextMenu=l,to:"/hooks/events/useContextMenu",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useContextMenu)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useContextMenu"}),p.jsx(D,{ref:l=>r.current.useDocumentVisibility=l,to:"/hooks/events/useDocumentVisibility",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDocumentVisibility)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDocumentVisibility"}),p.jsx(D,{ref:l=>r.current.useDoubleClick=l,to:"/hooks/events/useDoubleClick",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDoubleClick)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDoubleClick"}),p.jsx(D,{ref:l=>r.current.useEventDispatcher=l,to:"/hooks/events/useEventDispatcher",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEventDispatcher)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEventDispatcher"}),p.jsx(D,{ref:l=>r.current.useEventListener=l,to:"/hooks/events/useEventListener",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEventListener)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEventListener"}),p.jsx(D,{ref:l=>r.current.useEvents=l,to:"/hooks/events/useEvents",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEvents)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEvents"}),p.jsx(D,{ref:l=>r.current.useHotKeys=l,to:"/hooks/events/useHotKeys",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useHotKeys)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useHotKeys"}),p.jsx(D,{ref:l=>r.current.useHover=l,to:"/hooks/events/useHover",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useHover)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useHover"}),p.jsx(D,{ref:l=>r.current.useInfiniteScroll=l,to:"/hooks/events/useInfiniteScroll",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useInfiniteScroll)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useInfiniteScroll"}),p.jsx(D,{ref:l=>r.current.useIntersectionObserver=l,to:"/hooks/events/useIntersectionObserver",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useIntersectionObserver)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useIntersectionObserver"}),p.jsx(D,{ref:l=>r.current.useIsOnline=l,to:"/hooks/events/useIsOnline",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useIsOnline)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useIsOnline"}),p.jsx(D,{ref:l=>r.current.useLongPress=l,to:"/hooks/events/useLongPress",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLongPress)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLongPress"}),p.jsx(D,{ref:l=>r.current.useMeasure=l,to:"/hooks/events/useMeasure",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMeasure)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMeasure"}),p.jsx(D,{ref:l=>r.current.useMouse=l,to:"/hooks/events/useMouse",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMouse)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMouse"}),p.jsx(D,{ref:l=>r.current.useMutationObserver=l,to:"/hooks/events/useMutationObserver",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMutationObserver)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMutationObserver"}),p.jsx(D,{ref:l=>r.current.useNetwork=l,to:"/hooks/events/useNetwork",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useNetwork)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useNetwork"}),p.jsx(D,{ref:l=>r.current.usePerformAction=l,to:"/hooks/events/usePerformAction",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePerformAction)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePerformAction"}),p.jsx(D,{ref:l=>r.current.usePinchZoom=l,to:"/hooks/events/usePinchZoom",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePinchZoom)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePinchZoom"}),p.jsx(D,{ref:l=>r.current.usePointerLock=l,to:"/hooks/events/usePointerLock",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePointerLock)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePointerLock"}),p.jsx(D,{ref:l=>r.current.useResizeObserver=l,to:"/hooks/events/useResizeObserver",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useResizeObserver)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useResizeObserver"}),p.jsx(D,{ref:l=>r.current.useResponsive=l,to:"/hooks/events/useResponsive",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useResponsive)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useResponsive"}),p.jsx(D,{ref:l=>r.current.useScreen=l,to:"/hooks/events/useScreen",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useScreen)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useScreen"}),p.jsx(D,{ref:l=>r.current.useScrollIntoView=l,to:"/hooks/events/useScrollIntoView",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useScrollIntoView)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useScrollIntoView"}),p.jsx(D,{ref:l=>r.current.useSwipe=l,to:"/hooks/events/useSwipe",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useSwipe)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useSwipe"}),p.jsx(D,{ref:l=>r.current.useVisible=l,to:"/hooks/events/useVisible",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useVisible)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useVisible"})]})]}),p.jsxs("details",{open:!0,className:"sub-type",children:[p.jsx("summary",{translate:"no",children:"API DOM"}),p.jsxs("div",{className:"container-details",children:[p.jsx(D,{ref:l=>r.current.useActiveElement=l,to:"/hooks/api-dom/useActiveElement",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useActiveElement)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useActiveElement"}),p.jsx(D,{ref:l=>r.current.useAnimation=l,to:"/hooks/api-dom/useAnimation",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useAnimation)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useAnimation"}),p.jsx(D,{ref:l=>r.current.useAudio=l,to:"/hooks/api-dom/useAudio",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useAudio)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useAudio"}),p.jsx(D,{ref:l=>r.current.useBattery=l,to:"/hooks/api-dom/useBattery",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useBattery)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useBattery"}),p.jsx(D,{ref:l=>r.current.useBluetooth=l,to:"/hooks/api-dom/useBluetooth",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useBluetooth)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useBluetooth"}),p.jsx(D,{ref:l=>r.current.useBroadcastChannel=l,to:"/hooks/api-dom/useBroadcastChannel",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useBroadcastChannel)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useBroadcastChannel"}),p.jsx(D,{ref:l=>r.current.useClipboard=l,to:"/hooks/api-dom/useClipboard",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useClipboard)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useClipboard"}),p.jsx(D,{ref:l=>r.current.useColorScheme=l,to:"/hooks/api-dom/useColorScheme",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useColorScheme)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useColorScheme"}),p.jsx(D,{ref:l=>r.current.useDebounce=l,to:"/hooks/api-dom/useDebounce",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDebounce)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDebounce"}),p.jsx(D,{ref:l=>r.current.useDeviceMotion=l,to:"/hooks/api-dom/useDeviceMotion",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDeviceMotion)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDeviceMotion"}),p.jsx(D,{ref:l=>r.current.useDeviceOrientation=l,to:"/hooks/api-dom/useDeviceOrientation",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDeviceOrientation)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDeviceOrientation"}),p.jsx(D,{ref:l=>r.current.useDialogBox=l,to:"/hooks/api-dom/useDialogBox",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDialogBox)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDialogBox"}),p.jsx(D,{ref:l=>r.current.useDisplayMedia=l,to:"/hooks/api-dom/useDisplayMedia",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDisplayMedia)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDisplayMedia"}),p.jsx(D,{ref:l=>r.current.useDocumentPIP=l,to:"/hooks/api-dom/useDocumentPIP",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useDocumentPIP)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useDocumentPIP"}),p.jsx(D,{ref:l=>r.current.useEventSource=l,to:"/hooks/api-dom/useEventSource",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEventSource)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEventSource"}),p.jsx(D,{ref:l=>r.current.useEyeDropper=l,to:"/hooks/api-dom/useEyeDropper",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useEyeDropper)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useEyeDropper"}),p.jsx(D,{ref:l=>r.current.useFetch=l,to:"/hooks/api-dom/useFetch",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useFetch)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useFetch"}),p.jsx(D,{ref:l=>r.current.useFPS=l,to:"/hooks/api-dom/useFPS",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useFPS)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useFPS"}),p.jsx(D,{ref:l=>r.current.useFullscreen=l,to:"/hooks/api-dom/useFullscreen",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useFullscreen)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useFullscreen"}),p.jsx(D,{ref:l=>r.current.useGeolocation=l,to:"/hooks/api-dom/useGeolocation",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useGeolocation)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useGeolocation"}),p.jsx(D,{ref:l=>r.current.useIdleCallback=l,to:"/hooks/api-dom/useIdleCallback",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useIdleCallback)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useIdleCallback"}),p.jsx(D,{ref:l=>r.current.useInterval=l,to:"/hooks/api-dom/useInterval",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useInterval)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useInterval"}),p.jsx(D,{ref:l=>r.current.useLock=l,to:"/hooks/api-dom/useLock",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useLock)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useLock"}),p.jsx(D,{ref:l=>r.current.useMediaDevices=l,to:"/hooks/api-dom/useMediaDevices",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMediaDevices)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMediaDevices"}),p.jsx(D,{ref:l=>r.current.useMediaQuery=l,to:"/hooks/api-dom/useMediaQuery",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useMediaQuery)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useMediaQuery"}),p.jsx(D,{ref:l=>r.current.usePermission=l,to:"/hooks/api-dom/usePermission",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePermission)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePermission"}),p.jsx(D,{ref:l=>r.current.usePIP=l,to:"/hooks/api-dom/usePIP",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePIP)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePIP"}),p.jsx(D,{ref:l=>r.current.usePopover=l,to:"/hooks/api-dom/usePopover",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePopover)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePopover"}),p.jsx(D,{ref:l=>r.current.usePromiseSuspensible=l,to:"/hooks/api-dom/usePromiseSuspensible",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePromiseSuspensible)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePromiseSuspensible"}),p.jsx(D,{ref:l=>r.current.usePublishSubscribe=l,to:"/hooks/api-dom/usePublishSubscribe",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.usePublishSubscribe)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"usePublishSubscribe"}),p.jsx(D,{ref:l=>r.current.useRaf=l,to:"/hooks/api-dom/useRaf",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useRaf)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useRaf"}),p.jsx(D,{ref:l=>r.current.useReducedMotion=l,to:"/hooks/api-dom/useReducedMotion",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useReducedMotion)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useReducedMotion"}),p.jsx(D,{ref:l=>r.current.useRemotePlayback=l,to:"/hooks/api-dom/useRemotePlayback",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useRemotePlayback)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useRemotePlayback"}),p.jsx(D,{ref:l=>r.current.useScreenWakeLock=l,to:"/hooks/api-dom/useScreenWakeLock",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useScreenWakeLock)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useScreenWakeLock"}),p.jsx(D,{ref:l=>r.current.useScript=l,to:"/hooks/api-dom/useScript",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useScript)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useScript"}),p.jsx(D,{ref:l=>r.current.useShare=l,to:"/hooks/api-dom/useShare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useShare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useShare"}),p.jsx(D,{ref:l=>r.current.useSpeechRecognition=l,to:"/hooks/api-dom/useSpeechRecognition",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useSpeechRecognition)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useSpeechRecognition"}),p.jsx(D,{ref:l=>r.current.useSpeechSynthesis=l,to:"/hooks/api-dom/useSpeechSynthesis",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useSpeechSynthesis)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useSpeechSynthesis"}),p.jsx(D,{ref:l=>r.current.useTextSelection=l,to:"/hooks/api-dom/useTextSelection",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useTextSelection)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useTextSelection"}),p.jsx(D,{ref:l=>r.current.useThrottle=l,to:"/hooks/api-dom/useThrottle",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useThrottle)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useThrottle"}),p.jsx(D,{ref:l=>r.current.useTimeout=l,to:"/hooks/api-dom/useTimeout",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useTimeout)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useTimeout"}),p.jsx(D,{ref:l=>r.current.useTitle=l,to:"/hooks/api-dom/useTitle",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useTitle)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useTitle"}),p.jsx(D,{ref:l=>r.current.useVibrate=l,to:"/hooks/api-dom/useVibrate",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useVibrate)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useVibrate"}),p.jsx(D,{ref:l=>r.current.useVideo=l,to:"/hooks/api-dom/useVideo",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useVideo)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useVideo"}),p.jsx(D,{ref:l=>r.current.useWebSocket=l,to:"/hooks/api-dom/useWebSocket",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useWebSocket)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useWebSocket"}),p.jsx(D,{ref:l=>r.current.useWebWorker=l,to:"/hooks/api-dom/useWebWorker",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useWebWorker)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useWebWorker"}),p.jsx(D,{ref:l=>r.current.useWebWorkerFn=l,to:"/hooks/api-dom/useWebWorkerFn",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.useWebWorkerFn)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"useWebWorkerFn"})]})]})]}),p.jsxs("details",{open:!0,className:"type",children:[p.jsx("summary",{translate:"no",children:"Components"}),p.jsxs("div",{className:"sub-type",children:[p.jsx(D,{ref:l=>r.current.ErrorBoundary=l,to:"/components/ErrorBoundary",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.ErrorBoundary)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"ErrorBoundary"}),p.jsx(D,{ref:l=>r.current.For=l,to:"/components/For",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.For)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"For"}),p.jsx(D,{ref:l=>r.current.ForMemoized=l,to:"/components/ForMemoized",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.ForMemoized)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"ForMemoized"}),p.jsx(D,{ref:l=>r.current.LazyComponent=l,to:"/components/LazyComponent",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.LazyComponent)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"LazyComponent"}),p.jsx(D,{ref:l=>r.current.Show=l,to:"/components/Show",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.Show)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"Show"}),p.jsx(D,{ref:l=>r.current.ShowMemoized=l,to:"/components/ShowMemoized",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.ShowMemoized)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"ShowMemoized"}),p.jsx(D,{ref:l=>r.current.SwitchCase=l,to:"/components/SwitchCase",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.SwitchCase)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"SwitchCase"}),p.jsx(D,{ref:l=>r.current.SwitchCaseMemoized=l,to:"/components/SwitchCaseMemoized",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.SwitchCaseMemoized)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"SwitchCaseMemoized"})]})]}),p.jsxs("details",{open:!0,className:"type",children:[p.jsx("summary",{translate:"no",children:"Utils"}),p.jsxs("div",{className:"sub-type",children:[p.jsx(D,{ref:l=>r.current.alphanumericCompare=l,to:"/utils/alphanumericCompare",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.alphanumericCompare)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"alphanumericCompare"}),p.jsx(D,{ref:l=>r.current.changeStringCase=l,to:"/utils/changeStringCase",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.changeStringCase)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"changeStringCase"}),p.jsx(D,{ref:l=>r.current.clickElementOnKeydownEvent=l,to:"/utils/clickElementOnKeydownEvent",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.clickElementOnKeydownEvent)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"clickElementOnKeydownEvent"}),p.jsx(D,{ref:l=>r.current.defaultSerializer=l,to:"/utils/defaultSerializer",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.defaultSerializer)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"defaultSerializer"}),p.jsx(D,{ref:l=>r.current.detectBrowser=l,to:"/utils/detectBrowser",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.detectBrowser)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"detectBrowser"}),p.jsx(D,{ref:l=>r.current.getBase64=l,to:"/utils/getBase64",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.getBase64)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"getBase64"}),p.jsx(D,{ref:l=>r.current.getKeyObjectFromValue=l,to:"/utils/getKeyObjectFromValue",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.getKeyObjectFromValue)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"getKeyObjectFromValue"}),p.jsx(D,{ref:l=>r.current.getObjectFromDottedString=l,to:"/utils/getObjectFromDottedString",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.getObjectFromDottedString)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"getObjectFromDottedString"}),p.jsx(D,{ref:l=>r.current.hotKeyHandler=l,to:"/utils/hotKeyHandler",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.hotKeyHandler)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"hotKeyHandler"}),p.jsx(D,{ref:l=>r.current.isAsync=l,to:"/utils/isAsync",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.isAsync)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"isAsync"}),p.jsx(D,{ref:l=>r.current.isClient=l,to:"/utils/isClient",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.isClient)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"isClient"}),p.jsx(D,{ref:l=>r.current.isDeepEqual=l,to:"/utils/isDeepEqual",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.isDeepEqual)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"isDeepEqual"}),p.jsx(D,{ref:l=>r.current.isMouseEvent=l,to:"/utils/isMouseEvent",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.isMouseEvent)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"isMouseEvent"}),p.jsx(D,{ref:l=>r.current.isShallowEqual=l,to:"/utils/isShallowEqual",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.isShallowEqual)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"isShallowEqual"}),p.jsx(D,{ref:l=>r.current.isTouchEvent=l,to:"/utils/isTouchEvent",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.isTouchEvent)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"isTouchEvent"}),p.jsx(D,{ref:l=>r.current.lazy=l,to:"/utils/lazy",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.lazy)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"lazy"}),p.jsx(D,{ref:l=>r.current.mergeObjects=l,to:"/utils/mergeObjects",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.mergeObjects)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"mergeObjects"}),p.jsx(D,{ref:l=>r.current.removePropertiesFromArrayObjects=l,to:"/utils/removePropertiesFromArrayObjects",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.removePropertiesFromArrayObjects)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"removePropertiesFromArrayObjects"}),p.jsx(D,{ref:l=>r.current.uniqueElementsArray=l,to:"/utils/uniqueElementsArray",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.uniqueElementsArray)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"uniqueElementsArray"})]})]}),p.jsxs("details",{open:!0,className:"type",children:[p.jsx("summary",{translate:"no",children:"Types"}),p.jsx("div",{className:"sub-type",children:p.jsx(D,{ref:l=>r.current.utilityTypes=l,to:"/types/utilityTypes",onClick:()=>{var l,u;Object.values(r.current).forEach(s=>s==null?void 0:s.classList.remove("active")),(l=r.current.utilityTypes)==null||l.classList.add("active"),(u=i.current)==null||u.scrollTo(0,0),window.innerWidth<1190&&d()},translate:"no",children:"utilityTypes"})})]})]})]}),p.jsx("div",{className:"container",ref:i,children:p.jsx(kx,{children:p.jsx(_x,{nodeRef:o,timeout:300,classNames:"page",unmountOnExit:!0,children:()=>p.jsx("div",{ref:o,className:"page",children:n})},t.pathname)})})]})}function xx({children:e}){return p.jsxs("div",{className:"demo",translate:"no",children:[p.jsx("span",{className:"demo-label",children:"DEMO"}),e]})}function Sx(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Cx=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ex=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Tx={};function xh(e,t){return((t||Tx).jsx?Ex:Cx).test(e)}const Ax=/[ \t\n\f\r]/g;function Px(e){return typeof e=="object"?e.type==="text"?Sh(e.value):!1:Sh(e)}function Sh(e){return e.replace(Ax,"")===""}let Ya=class{constructor(t,n,o){this.property=t,this.normal=n,o&&(this.space=o)}};Ya.prototype.property={};Ya.prototype.normal={};Ya.prototype.space=null;function mb(e,t){const n={},o={};let a=-1;for(;++a<e.length;)Object.assign(n,e[a].property),Object.assign(o,e[a].normal);return new Ya(n,o,t)}function Gu(e){return e.toLowerCase()}let Kt=class{constructor(t,n){this.property=t,this.attribute=n}};Kt.prototype.space=null;Kt.prototype.boolean=!1;Kt.prototype.booleanish=!1;Kt.prototype.overloadedBoolean=!1;Kt.prototype.number=!1;Kt.prototype.commaSeparated=!1;Kt.prototype.spaceSeparated=!1;Kt.prototype.commaOrSpaceSeparated=!1;Kt.prototype.mustUseProperty=!1;Kt.prototype.defined=!1;let jx=0;const ue=Vo(),$e=Vo(),gb=Vo(),B=Vo(),Pe=Vo(),wr=Vo(),At=Vo();function Vo(){return 2**++jx}const Ku=Object.freeze(Object.defineProperty({__proto__:null,boolean:ue,booleanish:$e,commaOrSpaceSeparated:At,commaSeparated:wr,number:B,overloadedBoolean:gb,spaceSeparated:Pe},Symbol.toStringTag,{value:"Module"})),Ds=Object.keys(Ku);let cp=class extends Kt{constructor(t,n,o,a){let r=-1;if(super(t,n),Ch(this,"space",a),typeof o=="number")for(;++r<Ds.length;){const i=Ds[r];Ch(this,Ds[r],(o&Ku[i])===Ku[i])}}};cp.prototype.defined=!0;function Ch(e,t,n){n&&(e[t]=n)}const Rx={}.hasOwnProperty;function Ir(e){const t={},n={};let o;for(o in e.properties)if(Rx.call(e.properties,o)){const a=e.properties[o],r=new cp(o,e.transform(e.attributes||{},o),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(o)&&(r.mustUseProperty=!0),t[o]=r,n[Gu(o)]=o,n[Gu(r.attribute)]=o}return new Ya(t,n,e.space)}const _b=Ir({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),vb=Ir({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function bb(e,t){return t in e?e[t]:t}function yb(e,t){return bb(e,t.toLowerCase())}const kb=Ir({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:yb,properties:{xmlns:null,xmlnsXLink:null}}),wb=Ir({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:$e,ariaAutoComplete:null,ariaBusy:$e,ariaChecked:$e,ariaColCount:B,ariaColIndex:B,ariaColSpan:B,ariaControls:Pe,ariaCurrent:null,ariaDescribedBy:Pe,ariaDetails:null,ariaDisabled:$e,ariaDropEffect:Pe,ariaErrorMessage:null,ariaExpanded:$e,ariaFlowTo:Pe,ariaGrabbed:$e,ariaHasPopup:null,ariaHidden:$e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Pe,ariaLevel:B,ariaLive:null,ariaModal:$e,ariaMultiLine:$e,ariaMultiSelectable:$e,ariaOrientation:null,ariaOwns:Pe,ariaPlaceholder:null,ariaPosInSet:B,ariaPressed:$e,ariaReadOnly:$e,ariaRelevant:null,ariaRequired:$e,ariaRoleDescription:Pe,ariaRowCount:B,ariaRowIndex:B,ariaRowSpan:B,ariaSelected:$e,ariaSetSize:B,ariaSort:null,ariaValueMax:B,ariaValueMin:B,ariaValueNow:B,ariaValueText:null,role:null}}),Mx=Ir({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:yb,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:wr,acceptCharset:Pe,accessKey:Pe,action:null,allow:null,allowFullScreen:ue,allowPaymentRequest:ue,allowUserMedia:ue,alt:null,as:null,async:ue,autoCapitalize:null,autoComplete:Pe,autoFocus:ue,autoPlay:ue,blocking:Pe,capture:null,charSet:null,checked:ue,cite:null,className:Pe,cols:B,colSpan:null,content:null,contentEditable:$e,controls:ue,controlsList:Pe,coords:B|wr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ue,defer:ue,dir:null,dirName:null,disabled:ue,download:gb,draggable:$e,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ue,formTarget:null,headers:Pe,height:B,hidden:ue,high:B,href:null,hrefLang:null,htmlFor:Pe,httpEquiv:Pe,id:null,imageSizes:null,imageSrcSet:null,inert:ue,inputMode:null,integrity:null,is:null,isMap:ue,itemId:null,itemProp:Pe,itemRef:Pe,itemScope:ue,itemType:Pe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ue,low:B,manifest:null,max:null,maxLength:B,media:null,method:null,min:null,minLength:B,multiple:ue,muted:ue,name:null,nonce:null,noModule:ue,noValidate:ue,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ue,optimum:B,pattern:null,ping:Pe,placeholder:null,playsInline:ue,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ue,referrerPolicy:null,rel:Pe,required:ue,reversed:ue,rows:B,rowSpan:B,sandbox:Pe,scope:null,scoped:ue,seamless:ue,selected:ue,shadowRootDelegatesFocus:ue,shadowRootMode:null,shape:null,size:B,sizes:null,slot:null,span:B,spellCheck:$e,src:null,srcDoc:null,srcLang:null,srcSet:null,start:B,step:null,style:null,tabIndex:B,target:null,title:null,translate:null,type:null,typeMustMatch:ue,useMap:null,value:$e,width:B,wrap:null,align:null,aLink:null,archive:Pe,axis:null,background:null,bgColor:null,border:B,borderColor:null,bottomMargin:B,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ue,declare:ue,event:null,face:null,frame:null,frameBorder:null,hSpace:B,leftMargin:B,link:null,longDesc:null,lowSrc:null,marginHeight:B,marginWidth:B,noResize:ue,noHref:ue,noShade:ue,noWrap:ue,object:null,profile:null,prompt:null,rev:null,rightMargin:B,rules:null,scheme:null,scrolling:$e,standby:null,summary:null,text:null,topMargin:B,valueType:null,version:null,vAlign:null,vLink:null,vSpace:B,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ue,disableRemotePlayback:ue,prefix:null,property:null,results:B,security:null,unselectable:null}}),Lx=Ir({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:bb,properties:{about:At,accentHeight:B,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:B,amplitude:B,arabicForm:null,ascent:B,attributeName:null,attributeType:null,azimuth:B,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:B,by:null,calcMode:null,capHeight:B,className:Pe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:B,diffuseConstant:B,direction:null,display:null,dur:null,divisor:B,dominantBaseline:null,download:ue,dx:null,dy:null,edgeMode:null,editable:null,elevation:B,enableBackground:null,end:null,event:null,exponent:B,externalResourcesRequired:null,fill:null,fillOpacity:B,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:wr,g2:wr,glyphName:wr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:B,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:B,horizOriginX:B,horizOriginY:B,id:null,ideographic:B,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:B,k:B,k1:B,k2:B,k3:B,k4:B,kernelMatrix:At,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:B,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:B,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:B,overlineThickness:B,paintOrder:null,panose1:null,path:null,pathLength:B,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Pe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:B,pointsAtY:B,pointsAtZ:B,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:At,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:At,rev:At,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:At,requiredFeatures:At,requiredFonts:At,requiredFormats:At,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:B,specularExponent:B,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:B,strikethroughThickness:B,string:null,stroke:null,strokeDashArray:At,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:B,strokeOpacity:B,strokeWidth:null,style:null,surfaceScale:B,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:At,tabIndex:B,tableValues:null,target:null,targetX:B,targetY:B,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:At,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:B,underlineThickness:B,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:B,values:null,vAlphabetic:B,vMathematical:B,vectorEffect:null,vHanging:B,vIdeographic:B,version:null,vertAdvY:B,vertOriginX:B,vertOriginY:B,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:B,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Dx=/^data[-\w.:]+$/i,Eh=/-[a-z]/g,Ox=/[A-Z]/g;function zx(e,t){const n=Gu(t);let o=t,a=Kt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Dx.test(t)){if(t.charAt(4)==="-"){const r=t.slice(5).replace(Eh,Fx);o="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=t.slice(4);if(!Eh.test(r)){let i=r.replace(Ox,Ix);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}a=cp}return new a(o,t)}function Ix(e){return"-"+e.toLowerCase()}function Fx(e){return e.charAt(1).toUpperCase()}const Ux={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Nx=mb([vb,_b,kb,wb,Mx],"html"),up=mb([vb,_b,kb,wb,Lx],"svg");function Hx(e){return e.join(" ").trim()}var xb={},Th=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Wx=/\n/g,Bx=/^\s*/,Vx=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,$x=/^:\s*/,qx=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Gx=/^[;\s]*/,Kx=/^\s+|\s+$/g,Qx=`
`,Ah="/",Ph="*",To="",Yx="comment",Jx="declaration",Xx=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,o=1;function a(y){var k=y.match(Wx);k&&(n+=k.length);var S=y.lastIndexOf(Qx);o=~S?y.length-S:o+y.length}function r(){var y={line:n,column:o};return function(k){return k.position=new i(y),l(),k}}function i(y){this.start=y,this.end={line:n,column:o},this.source=t.source}i.prototype.content=e;function c(y){var k=new Error(t.source+":"+n+":"+o+": "+y);if(k.reason=y,k.filename=t.source,k.line=n,k.column=o,k.source=e,!t.silent)throw k}function d(y){var k=y.exec(e);if(k){var S=k[0];return a(S),e=e.slice(S.length),k}}function l(){d(Bx)}function u(y){var k;for(y=y||[];k=s();)k!==!1&&y.push(k);return y}function s(){var y=r();if(!(Ah!=e.charAt(0)||Ph!=e.charAt(1))){for(var k=2;To!=e.charAt(k)&&(Ph!=e.charAt(k)||Ah!=e.charAt(k+1));)++k;if(k+=2,To===e.charAt(k-1))return c("End of comment missing");var S=e.slice(2,k-2);return o+=2,a(S),e=e.slice(k),o+=2,y({type:Yx,comment:S})}}function f(){var y=r(),k=d(Vx);if(k){if(s(),!d($x))return c("property missing ':'");var S=d(qx),v=y({type:Jx,property:jh(k[0].replace(Th,To)),value:S?jh(S[0].replace(Th,To)):To});return d(Gx),v}}function h(){var y=[];u(y);for(var k;k=f();)k!==!1&&(y.push(k),u(y));return y}return l(),h()};function jh(e){return e?e.replace(Kx,To):To}var Zx=xr&&xr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xb,"__esModule",{value:!0});var eS=Zx(Xx);function tS(e,t){var n=null;if(!e||typeof e!="string")return n;var o=(0,eS.default)(e),a=typeof t=="function";return o.forEach(function(r){if(r.type==="declaration"){var i=r.property,c=r.value;a?t(i,c,r):c&&(n=n||{},n[i]=c)}}),n}var Rh=xb.default=tS;const nS=Rh.default||Rh,Sb=Cb("end"),dp=Cb("start");function Cb(e){return t;function t(n){const o=n&&n.position&&n.position[e]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function oS(e){const t=dp(e),n=Sb(e);if(t&&n)return{start:t,end:n}}function ya(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Mh(e.position):"start"in e||"end"in e?Mh(e):"line"in e||"column"in e?Qu(e):""}function Qu(e){return Lh(e&&e.line)+":"+Lh(e&&e.column)}function Mh(e){return Qu(e&&e.start)+"-"+Qu(e&&e.end)}function Lh(e){return e&&typeof e=="number"?e:1}class dt extends Error{constructor(t,n,o){super(),typeof n=="string"&&(o=n,n=void 0);let a="",r={},i=!1;if(n&&("line"in n&&"column"in n?r={place:n}:"start"in n&&"end"in n?r={place:n}:"type"in n?r={ancestors:[n],place:n.position}:r={...n}),typeof t=="string"?a=t:!r.cause&&t&&(i=!0,a=t.message,r.cause=t),!r.ruleId&&!r.source&&typeof o=="string"){const d=o.indexOf(":");d===-1?r.ruleId=o:(r.source=o.slice(0,d),r.ruleId=o.slice(d+1))}if(!r.place&&r.ancestors&&r.ancestors){const d=r.ancestors[r.ancestors.length-1];d&&(r.place=d.position)}const c=r.place&&"start"in r.place?r.place.start:r.place;this.ancestors=r.ancestors||void 0,this.cause=r.cause||void 0,this.column=c?c.column:void 0,this.fatal=void 0,this.file,this.message=a,this.line=c?c.line:void 0,this.name=ya(r.place)||"1:1",this.place=r.place||void 0,this.reason=this.message,this.ruleId=r.ruleId||void 0,this.source=r.source||void 0,this.stack=i&&r.cause&&typeof r.cause.stack=="string"?r.cause.stack:"",this.actual,this.expected,this.note,this.url}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const pp={}.hasOwnProperty,rS=new Map,aS=/[A-Z]/g,iS=/-([a-z])/g,lS=new Set(["table","tbody","thead","tfoot","tr"]),sS=new Set(["td","th"]),Eb="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function cS(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let o;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=_S(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=gS(n,t.jsx,t.jsxs)}const a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:o,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?up:Nx,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},r=Tb(a,e,void 0);return r&&typeof r!="string"?r:a.create(e,a.Fragment,{children:r||void 0},void 0)}function Tb(e,t,n){if(t.type==="element")return uS(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return dS(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return fS(e,t,n);if(t.type==="mdxjsEsm")return pS(e,t);if(t.type==="root")return hS(e,t,n);if(t.type==="text")return mS(e,t)}function uS(e,t,n){const o=e.schema;let a=o;t.tagName.toLowerCase()==="svg"&&o.space==="html"&&(a=up,e.schema=a),e.ancestors.push(t);const r=Pb(e,t.tagName,!1),i=vS(e,t);let c=hp(e,t);return lS.has(t.tagName)&&(c=c.filter(function(d){return typeof d=="string"?!Px(d):!0})),Ab(e,i,r,t),fp(i,c),e.ancestors.pop(),e.schema=o,e.create(t,r,i,n)}function dS(e,t){if(t.data&&t.data.estree&&e.evaluater){const o=t.data.estree.body[0];return o.type,e.evaluater.evaluateExpression(o.expression)}Ba(e,t.position)}function pS(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ba(e,t.position)}function fS(e,t,n){const o=e.schema;let a=o;t.name==="svg"&&o.space==="html"&&(a=up,e.schema=a),e.ancestors.push(t);const r=t.name===null?e.Fragment:Pb(e,t.name,!0),i=bS(e,t),c=hp(e,t);return Ab(e,i,r,t),fp(i,c),e.ancestors.pop(),e.schema=o,e.create(t,r,i,n)}function hS(e,t,n){const o={};return fp(o,hp(e,t)),e.create(t,e.Fragment,o,n)}function mS(e,t){return t.value}function Ab(e,t,n,o){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=o)}function fp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function gS(e,t,n){return o;function o(a,r,i,c){const l=Array.isArray(i.children)?n:t;return c?l(r,i,c):l(r,i)}}function _S(e,t){return n;function n(o,a,r,i){const c=Array.isArray(r.children),d=dp(o);return t(a,r,i,c,{columnNumber:d?d.column-1:void 0,fileName:e,lineNumber:d?d.line:void 0},void 0)}}function vS(e,t){const n={};let o,a;for(a in t.properties)if(a!=="children"&&pp.call(t.properties,a)){const r=yS(e,a,t.properties[a]);if(r){const[i,c]=r;e.tableCellAlignToStyle&&i==="align"&&typeof c=="string"&&sS.has(t.tagName)?o=c:n[i]=c}}if(o){const r=n.style||(n.style={});r[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return n}function bS(e,t){const n={};for(const o of t.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&e.evaluater){const r=o.data.estree.body[0];r.type;const i=r.expression;i.type;const c=i.properties[0];c.type,Object.assign(n,e.evaluater.evaluateExpression(c.argument))}else Ba(e,t.position);else{const a=o.name;let r;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&e.evaluater){const c=o.value.data.estree.body[0];c.type,r=e.evaluater.evaluateExpression(c.expression)}else Ba(e,t.position);else r=o.value===null?!0:o.value;n[a]=r}return n}function hp(e,t){const n=[];let o=-1;const a=e.passKeys?new Map:rS;for(;++o<t.children.length;){const r=t.children[o];let i;if(e.passKeys){const d=r.type==="element"?r.tagName:r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement"?r.name:void 0;if(d){const l=a.get(d)||0;i=d+"-"+l,a.set(d,l+1)}}const c=Tb(e,r,i);c!==void 0&&n.push(c)}return n}function yS(e,t,n){const o=zx(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=o.commaSeparated?Sx(n):Hx(n)),o.property==="style"){let a=typeof n=="object"?n:kS(e,String(n));return e.stylePropertyNameCase==="css"&&(a=wS(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&o.space?Ux[o.property]||o.property:o.attribute,n]}}function kS(e,t){const n={};try{nS(t,o)}catch(a){if(!e.ignoreInvalidStyle){const r=a,i=new dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Eb+"#cannot-parse-style-attribute",i}}return n;function o(a,r){let i=a;i.slice(0,2)!=="--"&&(i.slice(0,4)==="-ms-"&&(i="ms-"+i.slice(4)),i=i.replace(iS,SS)),n[i]=r}}function Pb(e,t,n){let o;if(!n)o={type:"Literal",value:t};else if(t.includes(".")){const a=t.split(".");let r=-1,i;for(;++r<a.length;){const c=xh(a[r])?{type:"Identifier",name:a[r]}:{type:"Literal",value:a[r]};i=i?{type:"MemberExpression",object:i,property:c,computed:!!(r&&c.type==="Literal"),optional:!1}:c}o=i}else o=xh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(o.type==="Literal"){const a=o.value;return pp.call(e.components,a)?e.components[a]:a}if(e.evaluater)return e.evaluater.evaluateExpression(o);Ba(e)}function Ba(e,t){const n=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Eb+"#cannot-handle-mdx-estrees-without-createevaluater",n}function wS(e){const t={};let n;for(n in e)pp.call(e,n)&&(t[xS(n)]=e[n]);return t}function xS(e){let t=e.replace(aS,CS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function SS(e,t){return t.toUpperCase()}function CS(e){return"-"+e.toLowerCase()}const Os={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ES={};function mp(e,t){const n=t||ES,o=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,a=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return jb(e,o,a)}function jb(e,t,n){if(TS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Dh(e.children,t,n)}return Array.isArray(e)?Dh(e,t,n):""}function Dh(e,t,n){const o=[];let a=-1;for(;++a<e.length;)o[a]=jb(e[a],t,n);return o.join("")}function TS(e){return!!(e&&typeof e=="object")}const Oh=document.createElement("i");function gp(e){const t="&"+e+";";Oh.innerHTML=t;const n=Oh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Mt(e,t,n,o){const a=e.length;let r=0,i;if(t<0?t=-t>a?0:a+t:t=t>a?a:t,n=n>0?n:0,o.length<1e4)i=Array.from(o),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);r<o.length;)i=o.slice(r,r+1e4),i.unshift(t,0),e.splice(...i),r+=1e4,t+=1e4}function Bt(e,t){return e.length>0?(Mt(e,e.length,0,t),e):t}const zh={}.hasOwnProperty;function Rb(e){const t={};let n=-1;for(;++n<e.length;)AS(t,e[n]);return t}function AS(e,t){let n;for(n in t){const a=(zh.call(e,n)?e[n]:void 0)||(e[n]={}),r=t[n];let i;if(r)for(i in r){zh.call(a,i)||(a[i]=[]);const c=r[i];PS(a[i],Array.isArray(c)?c:c?[c]:[])}}}function PS(e,t){let n=-1;const o=[];for(;++n<t.length;)(t[n].add==="after"?e:o).push(t[n]);Mt(e,0,0,o)}function Mb(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function on(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ht=go(/[A-Za-z]/),ct=go(/[\dA-Za-z]/),jS=go(/[#-'*+\--9=?A-Z^-~]/);function kl(e){return e!==null&&(e<32||e===127)}const Yu=go(/\d/),RS=go(/[\dA-Fa-f]/),MS=go(/[!-/:-@[-`{-~]/);function oe(e){return e!==null&&e<-2}function Te(e){return e!==null&&(e<0||e===32)}function _e(e){return e===-2||e===-1||e===32}const ql=go(new RegExp("\\p{P}|\\p{S}","u")),Ho=go(/\s/);function go(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Fr(e){const t=[];let n=-1,o=0,a=0;for(;++n<e.length;){const r=e.charCodeAt(n);let i="";if(r===37&&ct(e.charCodeAt(n+1))&&ct(e.charCodeAt(n+2)))a=2;else if(r<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(r))||(i=String.fromCharCode(r));else if(r>55295&&r<57344){const c=e.charCodeAt(n+1);r<56320&&c>56319&&c<57344?(i=String.fromCharCode(r,c),a=1):i="�"}else i=String.fromCharCode(r);i&&(t.push(e.slice(o,n),encodeURIComponent(i)),o=n+a+1,i=""),a&&(n+=a,a=0)}return t.join("")+e.slice(o)}function ye(e,t,n,o){const a=o?o-1:Number.POSITIVE_INFINITY;let r=0;return i;function i(d){return _e(d)?(e.enter(n),c(d)):t(d)}function c(d){return _e(d)&&r++<a?(e.consume(d),c):(e.exit(n),t(d))}}const LS={tokenize:DS};function DS(e){const t=e.attempt(this.parser.constructs.contentInitial,o,a);let n;return t;function o(c){if(c===null){e.consume(c);return}return e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),ye(e,t,"linePrefix")}function a(c){return e.enter("paragraph"),r(c)}function r(c){const d=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=d),n=d,i(c)}function i(c){if(c===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(c);return}return oe(c)?(e.consume(c),e.exit("chunkText"),r):(e.consume(c),i)}}const OS={tokenize:zS},Ih={tokenize:IS};function zS(e){const t=this,n=[];let o=0,a,r,i;return c;function c(g){if(o<n.length){const x=n[o];return t.containerState=x[1],e.attempt(x[0].continuation,d,l)(g)}return l(g)}function d(g){if(o++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,a&&m();const x=t.events.length;let C=x,_;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){_=t.events[C][1].end;break}v(o);let A=x;for(;A<t.events.length;)t.events[A][1].end=Object.assign({},_),A++;return Mt(t.events,C+1,0,t.events.slice(x)),t.events.length=A,l(g)}return c(g)}function l(g){if(o===n.length){if(!a)return f(g);if(a.currentConstruct&&a.currentConstruct.concrete)return y(g);t.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ih,u,s)(g)}function u(g){return a&&m(),v(o),f(g)}function s(g){return t.parser.lazy[t.now().line]=o!==n.length,i=t.now().offset,y(g)}function f(g){return t.containerState={},e.attempt(Ih,h,y)(g)}function h(g){return o++,n.push([t.currentConstruct,t.containerState]),f(g)}function y(g){if(g===null){a&&m(),v(0),e.consume(g);return}return a=a||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:r,_tokenizer:a}),k(g)}function k(g){if(g===null){S(e.exit("chunkFlow"),!0),v(0),e.consume(g);return}return oe(g)?(e.consume(g),S(e.exit("chunkFlow")),o=0,t.interrupt=void 0,c):(e.consume(g),k)}function S(g,x){const C=t.sliceStream(g);if(x&&C.push(null),g.previous=r,r&&(r.next=g),r=g,a.defineSkip(g.start),a.write(C),t.parser.lazy[g.start.line]){let _=a.events.length;for(;_--;)if(a.events[_][1].start.offset<i&&(!a.events[_][1].end||a.events[_][1].end.offset>i))return;const A=t.events.length;let R=A,j,T;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){if(j){T=t.events[R][1].end;break}j=!0}for(v(o),_=A;_<t.events.length;)t.events[_][1].end=Object.assign({},T),_++;Mt(t.events,R+1,0,t.events.slice(A)),t.events.length=_}}function v(g){let x=n.length;for(;x-- >g;){const C=n[x];t.containerState=C[1],C[0].exit.call(t,e)}n.length=g}function m(){a.write([null]),r=void 0,a=void 0,t.containerState._closeFlow=void 0}}function IS(e,t,n){return ye(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function wl(e){if(e===null||Te(e)||Ho(e))return 1;if(ql(e))return 2}function Gl(e,t,n){const o=[];let a=-1;for(;++a<e.length;){const r=e[a].resolveAll;r&&!o.includes(r)&&(t=r(t,n),o.push(r))}return t}const Ju={name:"attention",tokenize:US,resolveAll:FS};function FS(e,t){let n=-1,o,a,r,i,c,d,l,u;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(o=n;o--;)if(e[o][0]==="exit"&&e[o][1].type==="attentionSequence"&&e[o][1]._open&&t.sliceSerialize(e[o][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[o][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[o][1].end.offset-e[o][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;d=e[o][1].end.offset-e[o][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const s=Object.assign({},e[o][1].end),f=Object.assign({},e[n][1].start);Fh(s,-d),Fh(f,d),i={type:d>1?"strongSequence":"emphasisSequence",start:s,end:Object.assign({},e[o][1].end)},c={type:d>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},r={type:d>1?"strongText":"emphasisText",start:Object.assign({},e[o][1].end),end:Object.assign({},e[n][1].start)},a={type:d>1?"strong":"emphasis",start:Object.assign({},i.start),end:Object.assign({},c.end)},e[o][1].end=Object.assign({},i.start),e[n][1].start=Object.assign({},c.end),l=[],e[o][1].end.offset-e[o][1].start.offset&&(l=Bt(l,[["enter",e[o][1],t],["exit",e[o][1],t]])),l=Bt(l,[["enter",a,t],["enter",i,t],["exit",i,t],["enter",r,t]]),l=Bt(l,Gl(t.parser.constructs.insideSpan.null,e.slice(o+1,n),t)),l=Bt(l,[["exit",r,t],["enter",c,t],["exit",c,t],["exit",a,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=Bt(l,[["enter",e[n][1],t],["exit",e[n][1],t]])):u=0,Mt(e,o-1,n-o+3,l),n=o+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function US(e,t){const n=this.parser.constructs.attentionMarkers.null,o=this.previous,a=wl(o);let r;return i;function i(d){return r=d,e.enter("attentionSequence"),c(d)}function c(d){if(d===r)return e.consume(d),c;const l=e.exit("attentionSequence"),u=wl(d),s=!u||u===2&&a||n.includes(d),f=!a||a===2&&u||n.includes(o);return l._open=!!(r===42?s:s&&(a||!f)),l._close=!!(r===42?f:f&&(u||!s)),t(d)}}function Fh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const NS={name:"autolink",tokenize:HS};function HS(e,t,n){let o=0;return a;function a(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),r}function r(h){return ht(h)?(e.consume(h),i):l(h)}function i(h){return h===43||h===45||h===46||ct(h)?(o=1,c(h)):l(h)}function c(h){return h===58?(e.consume(h),o=0,d):(h===43||h===45||h===46||ct(h))&&o++<32?(e.consume(h),c):(o=0,l(h))}function d(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||kl(h)?n(h):(e.consume(h),d)}function l(h){return h===64?(e.consume(h),u):jS(h)?(e.consume(h),l):n(h)}function u(h){return ct(h)?s(h):n(h)}function s(h){return h===46?(e.consume(h),o=0,u):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||ct(h))&&o++<63){const y=h===45?f:s;return e.consume(h),y}return n(h)}}const Ja={tokenize:WS,partial:!0};function WS(e,t,n){return o;function o(r){return _e(r)?ye(e,a,"linePrefix")(r):a(r)}function a(r){return r===null||oe(r)?t(r):n(r)}}const Lb={name:"blockQuote",tokenize:BS,continuation:{tokenize:VS},exit:$S};function BS(e,t,n){const o=this;return a;function a(i){if(i===62){const c=o.containerState;return c.open||(e.enter("blockQuote",{_container:!0}),c.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),r}return n(i)}function r(i){return _e(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function VS(e,t,n){const o=this;return a;function a(i){return _e(i)?ye(e,r,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):r(i)}function r(i){return e.attempt(Lb,t,n)(i)}}function $S(e){e.exit("blockQuote")}const Db={name:"characterEscape",tokenize:qS};function qS(e,t,n){return o;function o(r){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(r),e.exit("escapeMarker"),a}function a(r){return MS(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}const Ob={name:"characterReference",tokenize:GS};function GS(e,t,n){const o=this;let a=0,r,i;return c;function c(s){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),d}function d(s){return s===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(s),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),r=31,i=ct,u(s))}function l(s){return s===88||s===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(s),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,i=RS,u):(e.enter("characterReferenceValue"),r=7,i=Yu,u(s))}function u(s){if(s===59&&a){const f=e.exit("characterReferenceValue");return i===ct&&!gp(o.sliceSerialize(f))?n(s):(e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(s)&&a++<r?(e.consume(s),u):n(s)}}const Uh={tokenize:QS,partial:!0},Nh={name:"codeFenced",tokenize:KS,concrete:!0};function KS(e,t,n){const o=this,a={tokenize:C,partial:!0};let r=0,i=0,c;return d;function d(_){return l(_)}function l(_){const A=o.events[o.events.length-1];return r=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,c=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(_)}function u(_){return _===c?(i++,e.consume(_),u):i<3?n(_):(e.exit("codeFencedFenceSequence"),_e(_)?ye(e,s,"whitespace")(_):s(_))}function s(_){return _===null||oe(_)?(e.exit("codeFencedFence"),o.interrupt?t(_):e.check(Uh,k,x)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(_))}function f(_){return _===null||oe(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),s(_)):_e(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ye(e,h,"whitespace")(_)):_===96&&_===c?n(_):(e.consume(_),f)}function h(_){return _===null||oe(_)?s(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(_))}function y(_){return _===null||oe(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),s(_)):_===96&&_===c?n(_):(e.consume(_),y)}function k(_){return e.attempt(a,x,S)(_)}function S(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),v}function v(_){return r>0&&_e(_)?ye(e,m,"linePrefix",r+1)(_):m(_)}function m(_){return _===null||oe(_)?e.check(Uh,k,x)(_):(e.enter("codeFlowValue"),g(_))}function g(_){return _===null||oe(_)?(e.exit("codeFlowValue"),m(_)):(e.consume(_),g)}function x(_){return e.exit("codeFenced"),t(_)}function C(_,A,R){let j=0;return T;function T(X){return _.enter("lineEnding"),_.consume(X),_.exit("lineEnding"),I}function I(X){return _.enter("codeFencedFence"),_e(X)?ye(_,H,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(X):H(X)}function H(X){return X===c?(_.enter("codeFencedFenceSequence"),K(X)):R(X)}function K(X){return X===c?(j++,_.consume(X),K):j>=i?(_.exit("codeFencedFenceSequence"),_e(X)?ye(_,ne,"whitespace")(X):ne(X)):R(X)}function ne(X){return X===null||oe(X)?(_.exit("codeFencedFence"),A(X)):R(X)}}}function QS(e,t,n){const o=this;return a;function a(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),r)}function r(i){return o.parser.lazy[o.now().line]?n(i):t(i)}}const zs={name:"codeIndented",tokenize:JS},YS={tokenize:XS,partial:!0};function JS(e,t,n){const o=this;return a;function a(l){return e.enter("codeIndented"),ye(e,r,"linePrefix",5)(l)}function r(l){const u=o.events[o.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?i(l):n(l)}function i(l){return l===null?d(l):oe(l)?e.attempt(YS,i,d)(l):(e.enter("codeFlowValue"),c(l))}function c(l){return l===null||oe(l)?(e.exit("codeFlowValue"),i(l)):(e.consume(l),c)}function d(l){return e.exit("codeIndented"),t(l)}}function XS(e,t,n){const o=this;return a;function a(i){return o.parser.lazy[o.now().line]?n(i):oe(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a):ye(e,r,"linePrefix",5)(i)}function r(i){const c=o.events[o.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?t(i):oe(i)?a(i):n(i)}}const ZS={name:"codeText",tokenize:nC,resolve:eC,previous:tC};function eC(e){let t=e.length-4,n=3,o,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(o=n;++o<t;)if(e[o][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(o=n-1,t++;++o<=t;)a===void 0?o!==t&&e[o][1].type!=="lineEnding"&&(a=o):(o===t||e[o][1].type==="lineEnding")&&(e[a][1].type="codeTextData",o!==a+2&&(e[a][1].end=e[o-1][1].end,e.splice(a+2,o-a-2),t-=o-a-2,o=a+2),a=void 0);return e}function tC(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function nC(e,t,n){let o=0,a,r;return i;function i(s){return e.enter("codeText"),e.enter("codeTextSequence"),c(s)}function c(s){return s===96?(e.consume(s),o++,c):(e.exit("codeTextSequence"),d(s))}function d(s){return s===null?n(s):s===32?(e.enter("space"),e.consume(s),e.exit("space"),d):s===96?(r=e.enter("codeTextSequence"),a=0,u(s)):oe(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),d):(e.enter("codeTextData"),l(s))}function l(s){return s===null||s===32||s===96||oe(s)?(e.exit("codeTextData"),d(s)):(e.consume(s),l)}function u(s){return s===96?(e.consume(s),a++,u):a===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(s)):(r.type="codeTextData",l(s))}}function zb(e){const t={};let n=-1,o,a,r,i,c,d,l;for(;++n<e.length;){for(;n in t;)n=t[n];if(o=e[n],n&&o[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(d=o[1]._tokenizer.events,r=0,r<d.length&&d[r][1].type==="lineEndingBlank"&&(r+=2),r<d.length&&d[r][1].type==="content"))for(;++r<d.length&&d[r][1].type!=="content";)d[r][1].type==="chunkText"&&(d[r][1]._isInFirstContentOfListItem=!0,r++);if(o[0]==="enter")o[1].contentType&&(Object.assign(t,oC(e,n)),n=t[n],l=!0);else if(o[1]._container){for(r=n,a=void 0;r--&&(i=e[r],i[1].type==="lineEnding"||i[1].type==="lineEndingBlank");)i[0]==="enter"&&(a&&(e[a][1].type="lineEndingBlank"),i[1].type="lineEnding",a=r);a&&(o[1].end=Object.assign({},e[a][1].start),c=e.slice(a,n),c.unshift(o),Mt(e,a,n-a+1,c))}}return!l}function oC(e,t){const n=e[t][1],o=e[t][2];let a=t-1;const r=[],i=n._tokenizer||o.parser[n.contentType](n.start),c=i.events,d=[],l={};let u,s,f=-1,h=n,y=0,k=0;const S=[k];for(;h;){for(;e[++a][1]!==h;);r.push(a),h._tokenizer||(u=o.sliceStream(h),h.next||u.push(null),s&&i.defineSkip(h.start),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(u),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),s=h,h=h.next}for(h=n;++f<c.length;)c[f][0]==="exit"&&c[f-1][0]==="enter"&&c[f][1].type===c[f-1][1].type&&c[f][1].start.line!==c[f][1].end.line&&(k=f+1,S.push(k),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(i.events=[],h?(h._tokenizer=void 0,h.previous=void 0):S.pop(),f=S.length;f--;){const v=c.slice(S[f],S[f+1]),m=r.pop();d.unshift([m,m+v.length-1]),Mt(e,m,2,v)}for(f=-1;++f<d.length;)l[y+d[f][0]]=y+d[f][1],y+=d[f][1]-d[f][0]-1;return l}const rC={tokenize:lC,resolve:iC},aC={tokenize:sC,partial:!0};function iC(e){return zb(e),e}function lC(e,t){let n;return o;function o(c){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),a(c)}function a(c){return c===null?r(c):oe(c)?e.check(aC,i,r)(c):(e.consume(c),a)}function r(c){return e.exit("chunkContent"),e.exit("content"),t(c)}function i(c){return e.consume(c),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function sC(e,t,n){const o=this;return a;function a(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),ye(e,r,"linePrefix")}function r(i){if(i===null||oe(i))return n(i);const c=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?t(i):e.interrupt(o.parser.constructs.flow,n,t)(i)}}function Ib(e,t,n,o,a,r,i,c,d){const l=d||Number.POSITIVE_INFINITY;let u=0;return s;function s(v){return v===60?(e.enter(o),e.enter(a),e.enter(r),e.consume(v),e.exit(r),f):v===null||v===32||v===41||kl(v)?n(v):(e.enter(o),e.enter(i),e.enter(c),e.enter("chunkString",{contentType:"string"}),k(v))}function f(v){return v===62?(e.enter(r),e.consume(v),e.exit(r),e.exit(a),e.exit(o),t):(e.enter(c),e.enter("chunkString",{contentType:"string"}),h(v))}function h(v){return v===62?(e.exit("chunkString"),e.exit(c),f(v)):v===null||v===60||oe(v)?n(v):(e.consume(v),v===92?y:h)}function y(v){return v===60||v===62||v===92?(e.consume(v),h):h(v)}function k(v){return!u&&(v===null||v===41||Te(v))?(e.exit("chunkString"),e.exit(c),e.exit(i),e.exit(o),t(v)):u<l&&v===40?(e.consume(v),u++,k):v===41?(e.consume(v),u--,k):v===null||v===32||v===40||kl(v)?n(v):(e.consume(v),v===92?S:k)}function S(v){return v===40||v===41||v===92?(e.consume(v),k):k(v)}}function Fb(e,t,n,o,a,r){const i=this;let c=0,d;return l;function l(h){return e.enter(o),e.enter(a),e.consume(h),e.exit(a),e.enter(r),u}function u(h){return c>999||h===null||h===91||h===93&&!d||h===94&&!c&&"_hiddenFootnoteSupport"in i.parser.constructs?n(h):h===93?(e.exit(r),e.enter(a),e.consume(h),e.exit(a),e.exit(o),t):oe(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),s(h))}function s(h){return h===null||h===91||h===93||oe(h)||c++>999?(e.exit("chunkString"),u(h)):(e.consume(h),d||(d=!_e(h)),h===92?f:s)}function f(h){return h===91||h===92||h===93?(e.consume(h),c++,s):s(h)}}function Ub(e,t,n,o,a,r){let i;return c;function c(f){return f===34||f===39||f===40?(e.enter(o),e.enter(a),e.consume(f),e.exit(a),i=f===40?41:f,d):n(f)}function d(f){return f===i?(e.enter(a),e.consume(f),e.exit(a),e.exit(o),t):(e.enter(r),l(f))}function l(f){return f===i?(e.exit(r),d(i)):f===null?n(f):oe(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),ye(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===i||f===null||oe(f)?(e.exit("chunkString"),l(f)):(e.consume(f),f===92?s:u)}function s(f){return f===i||f===92?(e.consume(f),u):u(f)}}function ka(e,t){let n;return o;function o(a){return oe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n=!0,o):_e(a)?ye(e,o,n?"linePrefix":"lineSuffix")(a):t(a)}}const cC={name:"definition",tokenize:dC},uC={tokenize:pC,partial:!0};function dC(e,t,n){const o=this;let a;return r;function r(h){return e.enter("definition"),i(h)}function i(h){return Fb.call(o,e,c,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function c(h){return a=on(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),d):n(h)}function d(h){return Te(h)?ka(e,l)(h):l(h)}function l(h){return Ib(e,u,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function u(h){return e.attempt(uC,s,s)(h)}function s(h){return _e(h)?ye(e,f,"whitespace")(h):f(h)}function f(h){return h===null||oe(h)?(e.exit("definition"),o.parser.defined.push(a),t(h)):n(h)}}function pC(e,t,n){return o;function o(c){return Te(c)?ka(e,a)(c):n(c)}function a(c){return Ub(e,r,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(c)}function r(c){return _e(c)?ye(e,i,"whitespace")(c):i(c)}function i(c){return c===null||oe(c)?t(c):n(c)}}const fC={name:"hardBreakEscape",tokenize:hC};function hC(e,t,n){return o;function o(r){return e.enter("hardBreakEscape"),e.consume(r),a}function a(r){return oe(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}const mC={name:"headingAtx",tokenize:_C,resolve:gC};function gC(e,t){let n=e.length-2,o=3,a,r;return e[o][1].type==="whitespace"&&(o+=2),n-2>o&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(o===n-1||n-4>o&&e[n-2][1].type==="whitespace")&&(n-=o+1===n?2:4),n>o&&(a={type:"atxHeadingText",start:e[o][1].start,end:e[n][1].end},r={type:"chunkText",start:e[o][1].start,end:e[n][1].end,contentType:"text"},Mt(e,o,n-o+1,[["enter",a,t],["enter",r,t],["exit",r,t],["exit",a,t]])),e}function _C(e,t,n){let o=0;return a;function a(u){return e.enter("atxHeading"),r(u)}function r(u){return e.enter("atxHeadingSequence"),i(u)}function i(u){return u===35&&o++<6?(e.consume(u),i):u===null||Te(u)?(e.exit("atxHeadingSequence"),c(u)):n(u)}function c(u){return u===35?(e.enter("atxHeadingSequence"),d(u)):u===null||oe(u)?(e.exit("atxHeading"),t(u)):_e(u)?ye(e,c,"whitespace")(u):(e.enter("atxHeadingText"),l(u))}function d(u){return u===35?(e.consume(u),d):(e.exit("atxHeadingSequence"),c(u))}function l(u){return u===null||u===35||Te(u)?(e.exit("atxHeadingText"),c(u)):(e.consume(u),l)}}const vC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Hh=["pre","script","style","textarea"],bC={name:"htmlFlow",tokenize:xC,resolveTo:wC,concrete:!0},yC={tokenize:CC,partial:!0},kC={tokenize:SC,partial:!0};function wC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function xC(e,t,n){const o=this;let a,r,i,c,d;return l;function l(E){return u(E)}function u(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),s}function s(E){return E===33?(e.consume(E),f):E===47?(e.consume(E),r=!0,k):E===63?(e.consume(E),a=3,o.interrupt?t:w):ht(E)?(e.consume(E),i=String.fromCharCode(E),S):n(E)}function f(E){return E===45?(e.consume(E),a=2,h):E===91?(e.consume(E),a=5,c=0,y):ht(E)?(e.consume(E),a=4,o.interrupt?t:w):n(E)}function h(E){return E===45?(e.consume(E),o.interrupt?t:w):n(E)}function y(E){const le="CDATA[";return E===le.charCodeAt(c++)?(e.consume(E),c===le.length?o.interrupt?t:H:y):n(E)}function k(E){return ht(E)?(e.consume(E),i=String.fromCharCode(E),S):n(E)}function S(E){if(E===null||E===47||E===62||Te(E)){const le=E===47,ke=i.toLowerCase();return!le&&!r&&Hh.includes(ke)?(a=1,o.interrupt?t(E):H(E)):vC.includes(i.toLowerCase())?(a=6,le?(e.consume(E),v):o.interrupt?t(E):H(E)):(a=7,o.interrupt&&!o.parser.lazy[o.now().line]?n(E):r?m(E):g(E))}return E===45||ct(E)?(e.consume(E),i+=String.fromCharCode(E),S):n(E)}function v(E){return E===62?(e.consume(E),o.interrupt?t:H):n(E)}function m(E){return _e(E)?(e.consume(E),m):T(E)}function g(E){return E===47?(e.consume(E),T):E===58||E===95||ht(E)?(e.consume(E),x):_e(E)?(e.consume(E),g):T(E)}function x(E){return E===45||E===46||E===58||E===95||ct(E)?(e.consume(E),x):C(E)}function C(E){return E===61?(e.consume(E),_):_e(E)?(e.consume(E),C):g(E)}function _(E){return E===null||E===60||E===61||E===62||E===96?n(E):E===34||E===39?(e.consume(E),d=E,A):_e(E)?(e.consume(E),_):R(E)}function A(E){return E===d?(e.consume(E),d=null,j):E===null||oe(E)?n(E):(e.consume(E),A)}function R(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||Te(E)?C(E):(e.consume(E),R)}function j(E){return E===47||E===62||_e(E)?g(E):n(E)}function T(E){return E===62?(e.consume(E),I):n(E)}function I(E){return E===null||oe(E)?H(E):_e(E)?(e.consume(E),I):n(E)}function H(E){return E===45&&a===2?(e.consume(E),ce):E===60&&a===1?(e.consume(E),ee):E===62&&a===4?(e.consume(E),G):E===63&&a===3?(e.consume(E),w):E===93&&a===5?(e.consume(E),V):oe(E)&&(a===6||a===7)?(e.exit("htmlFlowData"),e.check(yC,Y,K)(E)):E===null||oe(E)?(e.exit("htmlFlowData"),K(E)):(e.consume(E),H)}function K(E){return e.check(kC,ne,Y)(E)}function ne(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),X}function X(E){return E===null||oe(E)?K(E):(e.enter("htmlFlowData"),H(E))}function ce(E){return E===45?(e.consume(E),w):H(E)}function ee(E){return E===47?(e.consume(E),i="",U):H(E)}function U(E){if(E===62){const le=i.toLowerCase();return Hh.includes(le)?(e.consume(E),G):H(E)}return ht(E)&&i.length<8?(e.consume(E),i+=String.fromCharCode(E),U):H(E)}function V(E){return E===93?(e.consume(E),w):H(E)}function w(E){return E===62?(e.consume(E),G):E===45&&a===2?(e.consume(E),w):H(E)}function G(E){return E===null||oe(E)?(e.exit("htmlFlowData"),Y(E)):(e.consume(E),G)}function Y(E){return e.exit("htmlFlow"),t(E)}}function SC(e,t,n){const o=this;return a;function a(i){return oe(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),r):n(i)}function r(i){return o.parser.lazy[o.now().line]?n(i):t(i)}}function CC(e,t,n){return o;function o(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),e.attempt(Ja,t,n)}}const EC={name:"htmlText",tokenize:TC};function TC(e,t,n){const o=this;let a,r,i;return c;function c(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),d}function d(w){return w===33?(e.consume(w),l):w===47?(e.consume(w),C):w===63?(e.consume(w),g):ht(w)?(e.consume(w),R):n(w)}function l(w){return w===45?(e.consume(w),u):w===91?(e.consume(w),r=0,y):ht(w)?(e.consume(w),m):n(w)}function u(w){return w===45?(e.consume(w),h):n(w)}function s(w){return w===null?n(w):w===45?(e.consume(w),f):oe(w)?(i=s,ee(w)):(e.consume(w),s)}function f(w){return w===45?(e.consume(w),h):s(w)}function h(w){return w===62?ce(w):w===45?f(w):s(w)}function y(w){const G="CDATA[";return w===G.charCodeAt(r++)?(e.consume(w),r===G.length?k:y):n(w)}function k(w){return w===null?n(w):w===93?(e.consume(w),S):oe(w)?(i=k,ee(w)):(e.consume(w),k)}function S(w){return w===93?(e.consume(w),v):k(w)}function v(w){return w===62?ce(w):w===93?(e.consume(w),v):k(w)}function m(w){return w===null||w===62?ce(w):oe(w)?(i=m,ee(w)):(e.consume(w),m)}function g(w){return w===null?n(w):w===63?(e.consume(w),x):oe(w)?(i=g,ee(w)):(e.consume(w),g)}function x(w){return w===62?ce(w):g(w)}function C(w){return ht(w)?(e.consume(w),_):n(w)}function _(w){return w===45||ct(w)?(e.consume(w),_):A(w)}function A(w){return oe(w)?(i=A,ee(w)):_e(w)?(e.consume(w),A):ce(w)}function R(w){return w===45||ct(w)?(e.consume(w),R):w===47||w===62||Te(w)?j(w):n(w)}function j(w){return w===47?(e.consume(w),ce):w===58||w===95||ht(w)?(e.consume(w),T):oe(w)?(i=j,ee(w)):_e(w)?(e.consume(w),j):ce(w)}function T(w){return w===45||w===46||w===58||w===95||ct(w)?(e.consume(w),T):I(w)}function I(w){return w===61?(e.consume(w),H):oe(w)?(i=I,ee(w)):_e(w)?(e.consume(w),I):j(w)}function H(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),a=w,K):oe(w)?(i=H,ee(w)):_e(w)?(e.consume(w),H):(e.consume(w),ne)}function K(w){return w===a?(e.consume(w),a=void 0,X):w===null?n(w):oe(w)?(i=K,ee(w)):(e.consume(w),K)}function ne(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||Te(w)?j(w):(e.consume(w),ne)}function X(w){return w===47||w===62||Te(w)?j(w):n(w)}function ce(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function ee(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),U}function U(w){return _e(w)?ye(e,V,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):V(w)}function V(w){return e.enter("htmlTextData"),i(w)}}const _p={name:"labelEnd",tokenize:LC,resolveTo:MC,resolveAll:RC},AC={tokenize:DC},PC={tokenize:OC},jC={tokenize:zC};function RC(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function MC(e,t){let n=e.length,o=0,a,r,i,c;for(;n--;)if(a=e[n][1],r){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(r=n,a.type!=="labelLink")){o=2;break}}else a.type==="labelEnd"&&(i=n);const d={type:e[r][1].type==="labelLink"?"link":"image",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:"label",start:Object.assign({},e[r][1].start),end:Object.assign({},e[i][1].end)},u={type:"labelText",start:Object.assign({},e[r+o+2][1].end),end:Object.assign({},e[i-2][1].start)};return c=[["enter",d,t],["enter",l,t]],c=Bt(c,e.slice(r+1,r+o+3)),c=Bt(c,[["enter",u,t]]),c=Bt(c,Gl(t.parser.constructs.insideSpan.null,e.slice(r+o+4,i-3),t)),c=Bt(c,[["exit",u,t],e[i-2],e[i-1],["exit",l,t]]),c=Bt(c,e.slice(i+1)),c=Bt(c,[["exit",d,t]]),Mt(e,r,e.length,c),e}function LC(e,t,n){const o=this;let a=o.events.length,r,i;for(;a--;)if((o.events[a][1].type==="labelImage"||o.events[a][1].type==="labelLink")&&!o.events[a][1]._balanced){r=o.events[a][1];break}return c;function c(f){return r?r._inactive?s(f):(i=o.parser.defined.includes(on(o.sliceSerialize({start:r.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),d):n(f)}function d(f){return f===40?e.attempt(AC,u,i?u:s)(f):f===91?e.attempt(PC,u,i?l:s)(f):i?u(f):s(f)}function l(f){return e.attempt(jC,u,s)(f)}function u(f){return t(f)}function s(f){return r._balanced=!0,n(f)}}function DC(e,t,n){return o;function o(s){return e.enter("resource"),e.enter("resourceMarker"),e.consume(s),e.exit("resourceMarker"),a}function a(s){return Te(s)?ka(e,r)(s):r(s)}function r(s){return s===41?u(s):Ib(e,i,c,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(s)}function i(s){return Te(s)?ka(e,d)(s):u(s)}function c(s){return n(s)}function d(s){return s===34||s===39||s===40?Ub(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(s):u(s)}function l(s){return Te(s)?ka(e,u)(s):u(s)}function u(s){return s===41?(e.enter("resourceMarker"),e.consume(s),e.exit("resourceMarker"),e.exit("resource"),t):n(s)}}function OC(e,t,n){const o=this;return a;function a(c){return Fb.call(o,e,r,i,"reference","referenceMarker","referenceString")(c)}function r(c){return o.parser.defined.includes(on(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?t(c):n(c)}function i(c){return n(c)}}function zC(e,t,n){return o;function o(r){return e.enter("reference"),e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),a}function a(r){return r===93?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}const IC={name:"labelStartImage",tokenize:FC,resolveAll:_p.resolveAll};function FC(e,t,n){const o=this;return a;function a(c){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(c),e.exit("labelImageMarker"),r}function r(c){return c===91?(e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelImage"),i):n(c)}function i(c){return c===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(c):t(c)}}const UC={name:"labelStartLink",tokenize:NC,resolveAll:_p.resolveAll};function NC(e,t,n){const o=this;return a;function a(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),r}function r(i){return i===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(i):t(i)}}const Is={name:"lineEnding",tokenize:HC};function HC(e,t){return n;function n(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ye(e,t,"linePrefix")}}const $i={name:"thematicBreak",tokenize:WC};function WC(e,t,n){let o=0,a;return r;function r(l){return e.enter("thematicBreak"),i(l)}function i(l){return a=l,c(l)}function c(l){return l===a?(e.enter("thematicBreakSequence"),d(l)):o>=3&&(l===null||oe(l))?(e.exit("thematicBreak"),t(l)):n(l)}function d(l){return l===a?(e.consume(l),o++,d):(e.exit("thematicBreakSequence"),_e(l)?ye(e,c,"whitespace")(l):c(l))}}const yt={name:"list",tokenize:$C,continuation:{tokenize:qC},exit:KC},BC={tokenize:QC,partial:!0},VC={tokenize:GC,partial:!0};function $C(e,t,n){const o=this,a=o.events[o.events.length-1];let r=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,i=0;return c;function c(h){const y=o.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!o.containerState.marker||h===o.containerState.marker:Yu(h)){if(o.containerState.type||(o.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check($i,n,l)(h):l(h);if(!o.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),d(h)}return n(h)}function d(h){return Yu(h)&&++i<10?(e.consume(h),d):(!o.interrupt||i<2)&&(o.containerState.marker?h===o.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),l(h)):n(h)}function l(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||h,e.check(Ja,o.interrupt?n:u,e.attempt(BC,f,s))}function u(h){return o.containerState.initialBlankLine=!0,r++,f(h)}function s(h){return _e(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return o.containerState.size=r+o.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function qC(e,t,n){const o=this;return o.containerState._closeFlow=void 0,e.check(Ja,a,r);function a(c){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,ye(e,t,"listItemIndent",o.containerState.size+1)(c)}function r(c){return o.containerState.furtherBlankLines||!_e(c)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,i(c)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,e.attempt(VC,t,i)(c))}function i(c){return o.containerState._closeFlow=!0,o.interrupt=void 0,ye(e,e.attempt(yt,t,n),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c)}}function GC(e,t,n){const o=this;return ye(e,a,"listItemIndent",o.containerState.size+1);function a(r){const i=o.events[o.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===o.containerState.size?t(r):n(r)}}function KC(e){e.exit(this.containerState.type)}function QC(e,t,n){const o=this;return ye(e,a,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function a(r){const i=o.events[o.events.length-1];return!_e(r)&&i&&i[1].type==="listItemPrefixWhitespace"?t(r):n(r)}}const Wh={name:"setextUnderline",tokenize:JC,resolveTo:YC};function YC(e,t){let n=e.length,o,a,r;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){o=n;break}e[n][1].type==="paragraph"&&(a=n)}else e[n][1].type==="content"&&e.splice(n,1),!r&&e[n][1].type==="definition"&&(r=n);const i={type:"setextHeading",start:Object.assign({},e[a][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[a][1].type="setextHeadingText",r?(e.splice(a,0,["enter",i,t]),e.splice(r+1,0,["exit",e[o][1],t]),e[o][1].end=Object.assign({},e[r][1].end)):e[o][1]=i,e.push(["exit",i,t]),e}function JC(e,t,n){const o=this;let a;return r;function r(l){let u=o.events.length,s;for(;u--;)if(o.events[u][1].type!=="lineEnding"&&o.events[u][1].type!=="linePrefix"&&o.events[u][1].type!=="content"){s=o.events[u][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||s)?(e.enter("setextHeadingLine"),a=l,i(l)):n(l)}function i(l){return e.enter("setextHeadingLineSequence"),c(l)}function c(l){return l===a?(e.consume(l),c):(e.exit("setextHeadingLineSequence"),_e(l)?ye(e,d,"lineSuffix")(l):d(l))}function d(l){return l===null||oe(l)?(e.exit("setextHeadingLine"),t(l)):n(l)}}const XC={tokenize:ZC};function ZC(e){const t=this,n=e.attempt(Ja,o,e.attempt(this.parser.constructs.flowInitial,a,ye(e,e.attempt(this.parser.constructs.flow,a,e.attempt(rC,a)),"linePrefix")));return n;function o(r){if(r===null){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function a(r){if(r===null){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const e2={resolveAll:Hb()},t2=Nb("string"),n2=Nb("text");function Nb(e){return{tokenize:t,resolveAll:Hb(e==="text"?o2:void 0)};function t(n){const o=this,a=this.parser.constructs[e],r=n.attempt(a,i,c);return i;function i(u){return l(u)?r(u):c(u)}function c(u){if(u===null){n.consume(u);return}return n.enter("data"),n.consume(u),d}function d(u){return l(u)?(n.exit("data"),r(u)):(n.consume(u),d)}function l(u){if(u===null)return!0;const s=a[u];let f=-1;if(s)for(;++f<s.length;){const h=s[f];if(!h.previous||h.previous.call(o,o.previous))return!0}return!1}}}function Hb(e){return t;function t(n,o){let a=-1,r;for(;++a<=n.length;)r===void 0?n[a]&&n[a][1].type==="data"&&(r=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==r+2&&(n[r][1].end=n[a-1][1].end,n.splice(r+2,a-r-2),a=r+2),r=void 0);return e?e(n,o):n}}function o2(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const o=e[n-1][1],a=t.sliceStream(o);let r=a.length,i=-1,c=0,d;for(;r--;){const l=a[r];if(typeof l=="string"){for(i=l.length;l.charCodeAt(i-1)===32;)c++,i--;if(i)break;i=-1}else if(l===-2)d=!0,c++;else if(l!==-1){r++;break}}if(c){const l={type:n===e.length||d||c<2?"lineSuffix":"hardBreakTrailing",start:{line:o.end.line,column:o.end.column-c,offset:o.end.offset-c,_index:o.start._index+r,_bufferIndex:r?i:o.start._bufferIndex+i},end:Object.assign({},o.end)};o.end=Object.assign({},l.start),o.start.offset===o.end.offset?Object.assign(o,l):(e.splice(n,0,["enter",l,t],["exit",l,t]),n+=2)}n++}return e}function r2(e,t,n){let o=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const a={},r=[];let i=[],c=[];const d={consume:m,enter:g,exit:x,attempt:A(C),check:A(_),interrupt:A(_,{interrupt:!0})},l={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:h,sliceSerialize:f,now:y,defineSkip:k,write:s};let u=t.tokenize.call(l,d);return t.resolveAll&&r.push(t),l;function s(I){return i=Bt(i,I),S(),i[i.length-1]!==null?[]:(R(t,0),l.events=Gl(r,l.events,l),l.events)}function f(I,H){return i2(h(I),H)}function h(I){return a2(i,I)}function y(){const{line:I,column:H,offset:K,_index:ne,_bufferIndex:X}=o;return{line:I,column:H,offset:K,_index:ne,_bufferIndex:X}}function k(I){a[I.line]=I.column,T()}function S(){let I;for(;o._index<i.length;){const H=i[o._index];if(typeof H=="string")for(I=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===I&&o._bufferIndex<H.length;)v(H.charCodeAt(o._bufferIndex));else v(H)}}function v(I){u=u(I)}function m(I){oe(I)?(o.line++,o.column=1,o.offset+=I===-3?2:1,T()):I!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===i[o._index].length&&(o._bufferIndex=-1,o._index++)),l.previous=I}function g(I,H){const K=H||{};return K.type=I,K.start=y(),l.events.push(["enter",K,l]),c.push(K),K}function x(I){const H=c.pop();return H.end=y(),l.events.push(["exit",H,l]),H}function C(I,H){R(I,H.from)}function _(I,H){H.restore()}function A(I,H){return K;function K(ne,X,ce){let ee,U,V,w;return Array.isArray(ne)?Y(ne):"tokenize"in ne?Y([ne]):G(ne);function G(re){return Ce;function Ce(Ye){const Et=Ye!==null&&re[Ye],Z=Ye!==null&&re.null,Ue=[...Array.isArray(Et)?Et:Et?[Et]:[],...Array.isArray(Z)?Z:Z?[Z]:[]];return Y(Ue)(Ye)}}function Y(re){return ee=re,U=0,re.length===0?ce:E(re[U])}function E(re){return Ce;function Ce(Ye){return w=j(),V=re,re.partial||(l.currentConstruct=re),re.name&&l.parser.constructs.disable.null.includes(re.name)?ke():re.tokenize.call(H?Object.assign(Object.create(l),H):l,d,le,ke)(Ye)}}function le(re){return I(V,w),X}function ke(re){return w.restore(),++U<ee.length?E(ee[U]):ce}}}function R(I,H){I.resolveAll&&!r.includes(I)&&r.push(I),I.resolve&&Mt(l.events,H,l.events.length-H,I.resolve(l.events.slice(H),l)),I.resolveTo&&(l.events=I.resolveTo(l.events,l))}function j(){const I=y(),H=l.previous,K=l.currentConstruct,ne=l.events.length,X=Array.from(c);return{restore:ce,from:ne};function ce(){o=I,l.previous=H,l.currentConstruct=K,l.events.length=ne,c=X,T()}}function T(){o.line in a&&o.column<2&&(o.column=a[o.line],o.offset+=a[o.line]-1)}}function a2(e,t){const n=t.start._index,o=t.start._bufferIndex,a=t.end._index,r=t.end._bufferIndex;let i;if(n===a)i=[e[n].slice(o,r)];else{if(i=e.slice(n,a),o>-1){const c=i[0];typeof c=="string"?i[0]=c.slice(o):i.shift()}r>0&&i.push(e[a].slice(0,r))}return i}function i2(e,t){let n=-1;const o=[];let a;for(;++n<e.length;){const r=e[n];let i;if(typeof r=="string")i=r;else switch(r){case-5:{i="\r";break}case-4:{i=`
`;break}case-3:{i=`\r
`;break}case-2:{i=t?" ":"	";break}case-1:{if(!t&&a)continue;i=" ";break}default:i=String.fromCharCode(r)}a=r===-2,o.push(i)}return o.join("")}const l2={42:yt,43:yt,45:yt,48:yt,49:yt,50:yt,51:yt,52:yt,53:yt,54:yt,55:yt,56:yt,57:yt,62:Lb},s2={91:cC},c2={[-2]:zs,[-1]:zs,32:zs},u2={35:mC,42:$i,45:[Wh,$i],60:bC,61:Wh,95:$i,96:Nh,126:Nh},d2={38:Ob,92:Db},p2={[-5]:Is,[-4]:Is,[-3]:Is,33:IC,38:Ob,42:Ju,60:[NS,EC],91:UC,92:[fC,Db],93:_p,95:Ju,96:ZS},f2={null:[Ju,e2]},h2={null:[42,95]},m2={null:[]},g2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:h2,contentInitial:s2,disable:m2,document:l2,flow:u2,flowInitial:c2,insideSpan:f2,string:d2,text:p2},Symbol.toStringTag,{value:"Module"}));function _2(e){const n=Rb([g2,...(e||{}).extensions||[]]),o={defined:[],lazy:{},constructs:n,content:a(LS),document:a(OS),flow:a(XC),string:a(t2),text:a(n2)};return o;function a(r){return i;function i(c){return r2(o,r,c)}}}function v2(e){for(;!zb(e););return e}const Bh=/[\0\t\n\r]/g;function b2(){let e=1,t="",n=!0,o;return a;function a(r,i,c){const d=[];let l,u,s,f,h;for(r=t+(typeof r=="string"?r.toString():new TextDecoder(i||void 0).decode(r)),s=0,t="",n&&(r.charCodeAt(0)===65279&&s++,n=void 0);s<r.length;){if(Bh.lastIndex=s,l=Bh.exec(r),f=l&&l.index!==void 0?l.index:r.length,h=r.charCodeAt(f),!l){t=r.slice(s);break}if(h===10&&s===f&&o)d.push(-3),o=void 0;else switch(o&&(d.push(-5),o=void 0),s<f&&(d.push(r.slice(s,f)),e+=f-s),h){case 0:{d.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,d.push(-2);e++<u;)d.push(-1);break}case 10:{d.push(-4),e=1;break}default:o=!0,e=1}s=f+1}return c&&(o&&d.push(-5),t&&d.push(t),d.push(null)),d}}const y2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function k2(e){return e.replace(y2,w2)}function w2(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),r=a===120||a===88;return Mb(n.slice(r?2:1),r?16:10)}return gp(n)||e}const Wb={}.hasOwnProperty;function x2(e,t,n){return typeof t!="string"&&(n=t,t=void 0),S2(n)(v2(_2(n).document().write(b2()(e,t,!0))))}function S2(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(oi),autolinkProtocol:j,autolinkEmail:j,atxHeading:r(ti),blockQuote:r(Et),characterEscape:j,characterReference:j,codeFenced:r(Z),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:r(Z,i),codeText:r(Ue,i),codeTextData:j,data:j,codeFlowValue:j,definition:r(Sn),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:r(Hn),hardBreakEscape:r(ln),hardBreakTrailing:r(ln),htmlFlow:r(ni,i),htmlFlowData:j,htmlText:r(ni,i),htmlTextData:j,image:r(Xl),label:i,link:r(oi),listItem:r(Zl),listItemValue:f,listOrdered:r(ri,s),listUnordered:r(ri),paragraph:r(bo),reference:E,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:r(ti),strong:r(ai),thematicBreak:r(sn)},exit:{atxHeading:d(),atxHeadingSequence:C,autolink:d(),autolinkEmail:Ye,autolinkProtocol:Ce,blockQuote:d(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:re,codeFenced:d(S),codeFencedFence:k,codeFencedFenceInfo:h,codeFencedFenceMeta:y,codeFlowValue:T,codeIndented:d(v),codeText:d(X),codeTextData:T,data:T,definition:d(),definitionDestinationString:x,definitionLabelString:m,definitionTitleString:g,emphasis:d(),hardBreakEscape:d(H),hardBreakTrailing:d(H),htmlFlow:d(K),htmlFlowData:T,htmlText:d(ne),htmlTextData:T,image:d(ee),label:V,labelText:U,lineEnding:I,link:d(ce),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:le,resourceDestinationString:w,resourceTitleString:G,resource:Y,setextHeading:d(R),setextHeadingLineSequence:A,setextHeadingText:_,strong:d(),thematicBreak:d()}};Bb(t,(e||{}).mdastExtensions||[]);const n={};return o;function o(z){let $={type:"root",children:[]};const ae={stack:[$],tokenStack:[],config:t,enter:c,exit:l,buffer:i,resume:u,data:n},me=[];let ge=-1;for(;++ge<z.length;)if(z[ge][1].type==="listOrdered"||z[ge][1].type==="listUnordered")if(z[ge][0]==="enter")me.push(ge);else{const vt=me.pop();ge=a(z,vt,ge)}for(ge=-1;++ge<z.length;){const vt=t[z[ge][0]];Wb.call(vt,z[ge][1].type)&&vt[z[ge][1].type].call(Object.assign({sliceSerialize:z[ge][2].sliceSerialize},ae),z[ge][1])}if(ae.tokenStack.length>0){const vt=ae.tokenStack[ae.tokenStack.length-1];(vt[1]||Vh).call(ae,void 0,vt[0])}for($.position={start:$n(z.length>0?z[0][1].start:{line:1,column:1,offset:0}),end:$n(z.length>0?z[z.length-2][1].end:{line:1,column:1,offset:0})},ge=-1;++ge<t.transforms.length;)$=t.transforms[ge]($)||$;return $}function a(z,$,ae){let me=$-1,ge=-1,vt=!1,cn,zt,yo,Wn;for(;++me<=ae;){const Je=z[me];switch(Je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Je[0]==="enter"?ge++:ge--,Wn=void 0;break}case"lineEndingBlank":{Je[0]==="enter"&&(cn&&!Wn&&!ge&&!yo&&(yo=me),Wn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Wn=void 0}if(!ge&&Je[0]==="enter"&&Je[1].type==="listItemPrefix"||ge===-1&&Je[0]==="exit"&&(Je[1].type==="listUnordered"||Je[1].type==="listOrdered")){if(cn){let Cn=me;for(zt=void 0;Cn--;){const Tt=z[Cn];if(Tt[1].type==="lineEnding"||Tt[1].type==="lineEndingBlank"){if(Tt[0]==="exit")continue;zt&&(z[zt][1].type="lineEndingBlank",vt=!0),Tt[1].type="lineEnding",zt=Cn}else if(!(Tt[1].type==="linePrefix"||Tt[1].type==="blockQuotePrefix"||Tt[1].type==="blockQuotePrefixWhitespace"||Tt[1].type==="blockQuoteMarker"||Tt[1].type==="listItemIndent"))break}yo&&(!zt||yo<zt)&&(cn._spread=!0),cn.end=Object.assign({},zt?z[zt][1].start:Je[1].end),z.splice(zt||me,0,["exit",cn,Je[2]]),me++,ae++}if(Je[1].type==="listItemPrefix"){const Cn={type:"listItem",_spread:!1,start:Object.assign({},Je[1].start),end:void 0};cn=Cn,z.splice(me,0,["enter",Cn,Je[2]]),me++,ae++,yo=void 0,Wn=!0}}}return z[$][1]._spread=vt,ae}function r(z,$){return ae;function ae(me){c.call(this,z(me),me),$&&$.call(this,me)}}function i(){this.stack.push({type:"fragment",children:[]})}function c(z,$,ae){this.stack[this.stack.length-1].children.push(z),this.stack.push(z),this.tokenStack.push([$,ae]),z.position={start:$n($.start),end:void 0}}function d(z){return $;function $(ae){z&&z.call(this,ae),l.call(this,ae)}}function l(z,$){const ae=this.stack.pop(),me=this.tokenStack.pop();if(me)me[0].type!==z.type&&($?$.call(this,z,me[0]):(me[1]||Vh).call(this,z,me[0]));else throw new Error("Cannot close `"+z.type+"` ("+ya({start:z.start,end:z.end})+"): it’s not open");ae.position.end=$n(z.end)}function u(){return mp(this.stack.pop())}function s(){this.data.expectingFirstListItemValue=!0}function f(z){if(this.data.expectingFirstListItemValue){const $=this.stack[this.stack.length-2];$.start=Number.parseInt(this.sliceSerialize(z),10),this.data.expectingFirstListItemValue=void 0}}function h(){const z=this.resume(),$=this.stack[this.stack.length-1];$.lang=z}function y(){const z=this.resume(),$=this.stack[this.stack.length-1];$.meta=z}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const z=this.resume(),$=this.stack[this.stack.length-1];$.value=z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const z=this.resume(),$=this.stack[this.stack.length-1];$.value=z.replace(/(\r?\n|\r)$/g,"")}function m(z){const $=this.resume(),ae=this.stack[this.stack.length-1];ae.label=$,ae.identifier=on(this.sliceSerialize(z)).toLowerCase()}function g(){const z=this.resume(),$=this.stack[this.stack.length-1];$.title=z}function x(){const z=this.resume(),$=this.stack[this.stack.length-1];$.url=z}function C(z){const $=this.stack[this.stack.length-1];if(!$.depth){const ae=this.sliceSerialize(z).length;$.depth=ae}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function A(z){const $=this.stack[this.stack.length-1];$.depth=this.sliceSerialize(z).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function j(z){const ae=this.stack[this.stack.length-1].children;let me=ae[ae.length-1];(!me||me.type!=="text")&&(me=Nr(),me.position={start:$n(z.start),end:void 0},ae.push(me)),this.stack.push(me)}function T(z){const $=this.stack.pop();$.value+=this.sliceSerialize(z),$.position.end=$n(z.end)}function I(z){const $=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ae=$.children[$.children.length-1];ae.position.end=$n(z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes($.type)&&(j.call(this,z),T.call(this,z))}function H(){this.data.atHardBreak=!0}function K(){const z=this.resume(),$=this.stack[this.stack.length-1];$.value=z}function ne(){const z=this.resume(),$=this.stack[this.stack.length-1];$.value=z}function X(){const z=this.resume(),$=this.stack[this.stack.length-1];$.value=z}function ce(){const z=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";z.type+="Reference",z.referenceType=$,delete z.url,delete z.title}else delete z.identifier,delete z.label;this.data.referenceType=void 0}function ee(){const z=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";z.type+="Reference",z.referenceType=$,delete z.url,delete z.title}else delete z.identifier,delete z.label;this.data.referenceType=void 0}function U(z){const $=this.sliceSerialize(z),ae=this.stack[this.stack.length-2];ae.label=k2($),ae.identifier=on($).toLowerCase()}function V(){const z=this.stack[this.stack.length-1],$=this.resume(),ae=this.stack[this.stack.length-1];if(this.data.inReference=!0,ae.type==="link"){const me=z.children;ae.children=me}else ae.alt=$}function w(){const z=this.resume(),$=this.stack[this.stack.length-1];$.url=z}function G(){const z=this.resume(),$=this.stack[this.stack.length-1];$.title=z}function Y(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function le(z){const $=this.resume(),ae=this.stack[this.stack.length-1];ae.label=$,ae.identifier=on(this.sliceSerialize(z)).toLowerCase(),this.data.referenceType="full"}function ke(z){this.data.characterReferenceType=z.type}function re(z){const $=this.sliceSerialize(z),ae=this.data.characterReferenceType;let me;ae?(me=Mb($,ae==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):me=gp($);const ge=this.stack.pop();ge.value+=me,ge.position.end=$n(z.end)}function Ce(z){T.call(this,z);const $=this.stack[this.stack.length-1];$.url=this.sliceSerialize(z)}function Ye(z){T.call(this,z);const $=this.stack[this.stack.length-1];$.url="mailto:"+this.sliceSerialize(z)}function Et(){return{type:"blockquote",children:[]}}function Z(){return{type:"code",lang:null,meta:null,value:""}}function Ue(){return{type:"inlineCode",value:""}}function Sn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Hn(){return{type:"emphasis",children:[]}}function ti(){return{type:"heading",depth:0,children:[]}}function ln(){return{type:"break"}}function ni(){return{type:"html",value:""}}function Xl(){return{type:"image",title:null,url:"",alt:null}}function oi(){return{type:"link",title:null,url:"",children:[]}}function ri(z){return{type:"list",ordered:z.type==="listOrdered",start:null,spread:z._spread,children:[]}}function Zl(z){return{type:"listItem",spread:z._spread,checked:null,children:[]}}function bo(){return{type:"paragraph",children:[]}}function ai(){return{type:"strong",children:[]}}function Nr(){return{type:"text",value:""}}function sn(){return{type:"thematicBreak"}}}function $n(e){return{line:e.line,column:e.column,offset:e.offset}}function Bb(e,t){let n=-1;for(;++n<t.length;){const o=t[n];Array.isArray(o)?Bb(e,o):C2(e,o)}}function C2(e,t){let n;for(n in t)if(Wb.call(t,n))switch(n){case"canContainEols":{const o=t[n];o&&e[n].push(...o);break}case"transforms":{const o=t[n];o&&e[n].push(...o);break}case"enter":case"exit":{const o=t[n];o&&Object.assign(e[n],o);break}}}function Vh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ya({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ya({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ya({start:t.start,end:t.end})+") is still open")}function E2(e){const t=this;t.parser=n;function n(o){return x2(o,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function T2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function A2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function P2(e,t){const n=t.value?t.value+`
`:"",o={};t.lang&&(o.className=["language-"+t.lang]);let a={type:"element",tagName:"code",properties:o,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function j2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function R2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function M2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",o=String(t.identifier).toUpperCase(),a=Fr(o.toLowerCase()),r=e.footnoteOrder.indexOf(o);let i,c=e.footnoteCounts.get(o);c===void 0?(c=0,e.footnoteOrder.push(o),i=e.footnoteOrder.length):i=r+1,c+=1,e.footnoteCounts.set(o,c);const d={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+a,id:n+"fnref-"+a+(c>1?"-"+c:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,d);const l={type:"element",tagName:"sup",properties:{},children:[d]};return e.patch(t,l),e.applyData(t,l)}function L2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function D2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Vb(e,t){const n=t.referenceType;let o="]";if(n==="collapsed"?o+="[]":n==="full"&&(o+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+o}];const a=e.all(t),r=a[0];r&&r.type==="text"?r.value="["+r.value:a.unshift({type:"text",value:"["});const i=a[a.length-1];return i&&i.type==="text"?i.value+=o:a.push({type:"text",value:o}),a}function O2(e,t){const n=String(t.identifier).toUpperCase(),o=e.definitionById.get(n);if(!o)return Vb(e,t);const a={src:Fr(o.url||""),alt:t.alt};o.title!==null&&o.title!==void 0&&(a.title=o.title);const r={type:"element",tagName:"img",properties:a,children:[]};return e.patch(t,r),e.applyData(t,r)}function z2(e,t){const n={src:Fr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const o={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,o),e.applyData(t,o)}function I2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const o={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,o),e.applyData(t,o)}function F2(e,t){const n=String(t.identifier).toUpperCase(),o=e.definitionById.get(n);if(!o)return Vb(e,t);const a={href:Fr(o.url||"")};o.title!==null&&o.title!==void 0&&(a.title=o.title);const r={type:"element",tagName:"a",properties:a,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function U2(e,t){const n={href:Fr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const o={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function N2(e,t,n){const o=e.all(t),a=n?H2(n):$b(t),r={},i=[];if(typeof t.checked=="boolean"){const u=o[0];let s;u&&u.type==="element"&&u.tagName==="p"?s=u:(s={type:"element",tagName:"p",properties:{},children:[]},o.unshift(s)),s.children.length>0&&s.children.unshift({type:"text",value:" "}),s.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),r.className=["task-list-item"]}let c=-1;for(;++c<o.length;){const u=o[c];(a||c!==0||u.type!=="element"||u.tagName!=="p")&&i.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!a?i.push(...u.children):i.push(u)}const d=o[o.length-1];d&&(a||d.type!=="element"||d.tagName!=="p")&&i.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:r,children:i};return e.patch(t,l),e.applyData(t,l)}function H2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let o=-1;for(;!t&&++o<n.length;)t=$b(n[o])}return t}function $b(e){const t=e.spread;return t??e.children.length>1}function W2(e,t){const n={},o=e.all(t);let a=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++a<o.length;){const i=o[a];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const r={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(o,!0)};return e.patch(t,r),e.applyData(t,r)}function B2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function V2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function $2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function q2(e,t){const n=e.all(t),o=n.shift(),a=[];if(o){const i={type:"element",tagName:"thead",properties:{},children:e.wrap([o],!0)};e.patch(t.children[0],i),a.push(i)}if(n.length>0){const i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},c=dp(t.children[1]),d=Sb(t.children[t.children.length-1]);c&&d&&(i.position={start:c,end:d}),a.push(i)}const r={type:"element",tagName:"table",properties:{},children:e.wrap(a,!0)};return e.patch(t,r),e.applyData(t,r)}function G2(e,t,n){const o=n?n.children:void 0,r=(o?o.indexOf(t):1)===0?"th":"td",i=n&&n.type==="table"?n.align:void 0,c=i?i.length:t.children.length;let d=-1;const l=[];for(;++d<c;){const s=t.children[d],f={},h=i?i[d]:void 0;h&&(f.align=h);let y={type:"element",tagName:r,properties:f,children:[]};s&&(y.children=e.all(s),e.patch(s,y),y=e.applyData(s,y)),l.push(y)}const u={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,u),e.applyData(t,u)}function K2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const $h=9,qh=32;function Q2(e){const t=String(e),n=/\r?\n|\r/g;let o=n.exec(t),a=0;const r=[];for(;o;)r.push(Gh(t.slice(a,o.index),a>0,!0),o[0]),a=o.index+o[0].length,o=n.exec(t);return r.push(Gh(t.slice(a),a>0,!1)),r.join("")}function Gh(e,t,n){let o=0,a=e.length;if(t){let r=e.codePointAt(o);for(;r===$h||r===qh;)o++,r=e.codePointAt(o)}if(n){let r=e.codePointAt(a-1);for(;r===$h||r===qh;)a--,r=e.codePointAt(a-1)}return a>o?e.slice(o,a):""}function Y2(e,t){const n={type:"text",value:Q2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function J2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const X2={blockquote:T2,break:A2,code:P2,delete:j2,emphasis:R2,footnoteReference:M2,heading:L2,html:D2,imageReference:O2,image:z2,inlineCode:I2,linkReference:F2,link:U2,listItem:N2,list:W2,paragraph:B2,root:V2,strong:$2,table:q2,tableCell:K2,tableRow:G2,text:Y2,thematicBreak:J2,toml:Ti,yaml:Ti,definition:Ti,footnoteDefinition:Ti};function Ti(){}const qb=-1,Kl=0,xl=1,Sl=2,vp=3,bp=4,yp=5,kp=6,Gb=7,Kb=8,Kh=typeof self=="object"?self:globalThis,Z2=(e,t)=>{const n=(a,r)=>(e.set(r,a),a),o=a=>{if(e.has(a))return e.get(a);const[r,i]=t[a];switch(r){case Kl:case qb:return n(i,a);case xl:{const c=n([],a);for(const d of i)c.push(o(d));return c}case Sl:{const c=n({},a);for(const[d,l]of i)c[o(d)]=o(l);return c}case vp:return n(new Date(i),a);case bp:{const{source:c,flags:d}=i;return n(new RegExp(c,d),a)}case yp:{const c=n(new Map,a);for(const[d,l]of i)c.set(o(d),o(l));return c}case kp:{const c=n(new Set,a);for(const d of i)c.add(o(d));return c}case Gb:{const{name:c,message:d}=i;return n(new Kh[c](d),a)}case Kb:return n(BigInt(i),a);case"BigInt":return n(Object(BigInt(i)),a)}return n(new Kh[r](i),a)};return o},Qh=e=>Z2(new Map,e)(0),Jo="",{toString:eE}={},{keys:tE}=Object,ea=e=>{const t=typeof e;if(t!=="object"||!e)return[Kl,t];const n=eE.call(e).slice(8,-1);switch(n){case"Array":return[xl,Jo];case"Object":return[Sl,Jo];case"Date":return[vp,Jo];case"RegExp":return[bp,Jo];case"Map":return[yp,Jo];case"Set":return[kp,Jo]}return n.includes("Array")?[xl,n]:n.includes("Error")?[Gb,n]:[Sl,n]},Ai=([e,t])=>e===Kl&&(t==="function"||t==="symbol"),nE=(e,t,n,o)=>{const a=(i,c)=>{const d=o.push(i)-1;return n.set(c,d),d},r=i=>{if(n.has(i))return n.get(i);let[c,d]=ea(i);switch(c){case Kl:{let u=i;switch(d){case"bigint":c=Kb,u=i.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+d);u=null;break;case"undefined":return a([qb],i)}return a([c,u],i)}case xl:{if(d)return a([d,[...i]],i);const u=[],s=a([c,u],i);for(const f of i)u.push(r(f));return s}case Sl:{if(d)switch(d){case"BigInt":return a([d,i.toString()],i);case"Boolean":case"Number":case"String":return a([d,i.valueOf()],i)}if(t&&"toJSON"in i)return r(i.toJSON());const u=[],s=a([c,u],i);for(const f of tE(i))(e||!Ai(ea(i[f])))&&u.push([r(f),r(i[f])]);return s}case vp:return a([c,i.toISOString()],i);case bp:{const{source:u,flags:s}=i;return a([c,{source:u,flags:s}],i)}case yp:{const u=[],s=a([c,u],i);for(const[f,h]of i)(e||!(Ai(ea(f))||Ai(ea(h))))&&u.push([r(f),r(h)]);return s}case kp:{const u=[],s=a([c,u],i);for(const f of i)(e||!Ai(ea(f)))&&u.push(r(f));return s}}const{message:l}=i;return a([c,{name:d,message:l}],i)};return r},Yh=(e,{json:t,lossy:n}={})=>{const o=[];return nE(!(t||n),!!t,new Map,o)(e),o},Cl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Qh(Yh(e,t)):structuredClone(e):(e,t)=>Qh(Yh(e,t));function oE(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function rE(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function aE(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||oE,o=e.options.footnoteBackLabel||rE,a=e.options.footnoteLabel||"Footnotes",r=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},c=[];let d=-1;for(;++d<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[d]);if(!l)continue;const u=e.all(l),s=String(l.identifier).toUpperCase(),f=Fr(s.toLowerCase());let h=0;const y=[],k=e.footnoteCounts.get(s);for(;k!==void 0&&++h<=k;){y.length>0&&y.push({type:"text",value:" "});let m=typeof n=="string"?n:n(d,h);typeof m=="string"&&(m={type:"text",value:m}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(d,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const S=u[u.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const m=S.children[S.children.length-1];m&&m.type==="text"?m.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...y)}else u.push(...y);const v={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(u,!0)};e.patch(l,v),c.push(v)}if(c.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:r,properties:{...Cl(i),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(c,!0)},{type:"text",value:`
`}]}}const Ql=function(e){if(e==null)return cE;if(typeof e=="function")return Yl(e);if(typeof e=="object")return Array.isArray(e)?iE(e):lE(e);if(typeof e=="string")return sE(e);throw new Error("Expected function, string, or object as test")};function iE(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ql(e[n]);return Yl(o);function o(...a){let r=-1;for(;++r<t.length;)if(t[r].apply(this,a))return!0;return!1}}function lE(e){const t=e;return Yl(n);function n(o){const a=o;let r;for(r in e)if(a[r]!==t[r])return!1;return!0}}function sE(e){return Yl(t);function t(n){return n&&n.type===e}}function Yl(e){return t;function t(n,o,a){return!!(uE(n)&&e.call(this,n,typeof o=="number"?o:void 0,a||void 0))}}function cE(){return!0}function uE(e){return e!==null&&typeof e=="object"&&"type"in e}const Qb=[],dE=!0,Xu=!1,pE="skip";function Yb(e,t,n,o){let a;typeof t=="function"&&typeof n!="function"?(o=n,n=t):a=t;const r=Ql(a),i=o?-1:1;c(e,void 0,[])();function c(d,l,u){const s=d&&typeof d=="object"?d:{};if(typeof s.type=="string"){const h=typeof s.tagName=="string"?s.tagName:typeof s.name=="string"?s.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(d.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=Qb,y,k,S;if((!t||r(d,l,u[u.length-1]||void 0))&&(h=fE(n(d,u)),h[0]===Xu))return h;if("children"in d&&d.children){const v=d;if(v.children&&h[0]!==pE)for(k=(o?v.children.length:-1)+i,S=u.concat(v);k>-1&&k<v.children.length;){const m=v.children[k];if(y=c(m,k,S)(),y[0]===Xu)return y;k=typeof y[1]=="number"?y[1]:k+i}}return h}}}function fE(e){return Array.isArray(e)?e:typeof e=="number"?[dE,e]:e==null?Qb:[e]}function wp(e,t,n,o){let a,r,i;typeof t=="function"&&typeof n!="function"?(r=void 0,i=t,a=n):(r=t,i=n,a=o),Yb(e,r,c,a);function c(d,l){const u=l[l.length-1],s=u?u.children.indexOf(d):void 0;return i(d,s,u)}}const Zu={}.hasOwnProperty,hE={};function mE(e,t){const n=t||hE,o=new Map,a=new Map,r=new Map,i={...X2,...n.handlers},c={all:l,applyData:_E,definitionById:o,footnoteById:a,footnoteCounts:r,footnoteOrder:[],handlers:i,one:d,options:n,patch:gE,wrap:bE};return wp(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const s=u.type==="definition"?o:a,f=String(u.identifier).toUpperCase();s.has(f)||s.set(f,u)}}),c;function d(u,s){const f=u.type,h=c.handlers[f];if(Zu.call(c.handlers,f)&&h)return h(c,u,s);if(c.options.passThrough&&c.options.passThrough.includes(f)){if("children"in u){const{children:k,...S}=u,v=Cl(S);return v.children=c.all(u),v}return Cl(u)}return(c.options.unknownHandler||vE)(c,u,s)}function l(u){const s=[];if("children"in u){const f=u.children;let h=-1;for(;++h<f.length;){const y=c.one(f[h],u);if(y){if(h&&f[h-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Jh(y.value)),!Array.isArray(y)&&y.type==="element")){const k=y.children[0];k&&k.type==="text"&&(k.value=Jh(k.value))}Array.isArray(y)?s.push(...y):s.push(y)}}}return s}}function gE(e,t){e.position&&(t.position=oS(e))}function _E(e,t){let n=t;if(e&&e.data){const o=e.data.hName,a=e.data.hChildren,r=e.data.hProperties;if(typeof o=="string")if(n.type==="element")n.tagName=o;else{const i="children"in n?n.children:[n];n={type:"element",tagName:o,properties:{},children:i}}n.type==="element"&&r&&Object.assign(n.properties,Cl(r)),"children"in n&&n.children&&a!==null&&a!==void 0&&(n.children=a)}return n}function vE(e,t){const n=t.data||{},o="value"in t&&!(Zu.call(n,"hProperties")||Zu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function bE(e,t){const n=[];let o=-1;for(t&&n.push({type:"text",value:`
`});++o<e.length;)o&&n.push({type:"text",value:`
`}),n.push(e[o]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Jh(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Xh(e,t){const n=mE(e,t),o=n.one(e,void 0),a=aE(n),r=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return a&&r.children.push({type:"text",value:`
`},a),r}function yE(e,t){return e&&"run"in e?async function(n,o){const a=Xh(n,{file:o,...t});await e.run(a,o)}:function(n,o){return Xh(n,{file:o,...t||e})}}function Zh(e){if(e)throw e}var qi=Object.prototype.hasOwnProperty,Jb=Object.prototype.toString,em=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,nm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Jb.call(t)==="[object Array]"},om=function(t){if(!t||Jb.call(t)!=="[object Object]")return!1;var n=qi.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&qi.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!o)return!1;var a;for(a in t);return typeof a>"u"||qi.call(t,a)},rm=function(t,n){em&&n.name==="__proto__"?em(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},am=function(t,n){if(n==="__proto__")if(qi.call(t,n)){if(tm)return tm(t,n).value}else return;return t[n]},kE=function e(){var t,n,o,a,r,i,c=arguments[0],d=1,l=arguments.length,u=!1;for(typeof c=="boolean"&&(u=c,c=arguments[1]||{},d=2),(c==null||typeof c!="object"&&typeof c!="function")&&(c={});d<l;++d)if(t=arguments[d],t!=null)for(n in t)o=am(c,n),a=am(t,n),c!==a&&(u&&a&&(om(a)||(r=nm(a)))?(r?(r=!1,i=o&&nm(o)?o:[]):i=o&&om(o)?o:{},rm(c,{name:n,newValue:e(u,i,a)})):typeof a<"u"&&rm(c,{name:n,newValue:a}));return c};const Fs=an(kE);function ed(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function wE(){const e=[],t={run:n,use:o};return t;function n(...a){let r=-1;const i=a.pop();if(typeof i!="function")throw new TypeError("Expected function as last argument, not "+i);c(null,...a);function c(d,...l){const u=e[++r];let s=-1;if(d){i(d);return}for(;++s<a.length;)(l[s]===null||l[s]===void 0)&&(l[s]=a[s]);a=l,u?xE(u,c)(...l):i(null,...l)}}function o(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),t}}function xE(e,t){let n;return o;function o(...i){const c=e.length>i.length;let d;c&&i.push(a);try{d=e.apply(this,i)}catch(l){const u=l;if(c&&n)throw u;return a(u)}c||(d&&d.then&&typeof d.then=="function"?d.then(r,a):d instanceof Error?a(d):r(d))}function a(i,...c){n||(n=!0,t(i,...c))}function r(i){a(null,i)}}const hn={basename:SE,dirname:CE,extname:EE,join:TE,sep:"/"};function SE(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Xa(e);let n=0,o=-1,a=e.length,r;if(t===void 0||t.length===0||t.length>e.length){for(;a--;)if(e.codePointAt(a)===47){if(r){n=a+1;break}}else o<0&&(r=!0,o=a+1);return o<0?"":e.slice(n,o)}if(t===e)return"";let i=-1,c=t.length-1;for(;a--;)if(e.codePointAt(a)===47){if(r){n=a+1;break}}else i<0&&(r=!0,i=a+1),c>-1&&(e.codePointAt(a)===t.codePointAt(c--)?c<0&&(o=a):(c=-1,o=i));return n===o?o=i:o<0&&(o=e.length),e.slice(n,o)}function CE(e){if(Xa(e),e.length===0)return".";let t=-1,n=e.length,o;for(;--n;)if(e.codePointAt(n)===47){if(o){t=n;break}}else o||(o=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function EE(e){Xa(e);let t=e.length,n=-1,o=0,a=-1,r=0,i;for(;t--;){const c=e.codePointAt(t);if(c===47){if(i){o=t+1;break}continue}n<0&&(i=!0,n=t+1),c===46?a<0?a=t:r!==1&&(r=1):a>-1&&(r=-1)}return a<0||n<0||r===0||r===1&&a===n-1&&a===o+1?"":e.slice(a,n)}function TE(...e){let t=-1,n;for(;++t<e.length;)Xa(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":AE(n)}function AE(e){Xa(e);const t=e.codePointAt(0)===47;let n=PE(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function PE(e,t){let n="",o=0,a=-1,r=0,i=-1,c,d;for(;++i<=e.length;){if(i<e.length)c=e.codePointAt(i);else{if(c===47)break;c=47}if(c===47){if(!(a===i-1||r===1))if(a!==i-1&&r===2){if(n.length<2||o!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(d=n.lastIndexOf("/"),d!==n.length-1){d<0?(n="",o=0):(n=n.slice(0,d),o=n.length-1-n.lastIndexOf("/")),a=i,r=0;continue}}else if(n.length>0){n="",o=0,a=i,r=0;continue}}t&&(n=n.length>0?n+"/..":"..",o=2)}else n.length>0?n+="/"+e.slice(a+1,i):n=e.slice(a+1,i),o=i-a-1;a=i,r=0}else c===46&&r>-1?r++:r=-1}return n}function Xa(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const jE={cwd:RE};function RE(){return"/"}function td(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function ME(e){if(typeof e=="string")e=new URL(e);else if(!td(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return LE(e)}function LE(e){if(e.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const o=t.codePointAt(n+2);if(o===70||o===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(t)}const Us=["history","path","basename","stem","extname","dirname"];class Xb{constructor(t){let n;t?td(t)?n={path:t}:typeof t=="string"||DE(t)?n={value:t}:n=t:n={},this.cwd=jE.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Us.length;){const r=Us[o];r in n&&n[r]!==void 0&&n[r]!==null&&(this[r]=r==="history"?[...n[r]]:n[r])}let a;for(a in n)Us.includes(a)||(this[a]=n[a])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(t){Hs(t,"basename"),Ns(t,"basename"),this.path=hn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(t){im(this.basename,"dirname"),this.path=hn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(t){if(Ns(t,"extname"),im(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){td(t)&&(t=ME(t)),Hs(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(t){Hs(t,"stem"),Ns(t,"stem"),this.path=hn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,o){const a=this.message(t,n,o);throw a.fatal=!0,a}info(t,n,o){const a=this.message(t,n,o);return a.fatal=void 0,a}message(t,n,o){const a=new dt(t,n,o);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ns(e,t){if(e&&e.includes(hn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+hn.sep+"`")}function Hs(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function im(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function DE(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const OE=function(e){const o=this.constructor.prototype,a=o[e],r=function(){return a.apply(r,arguments)};Object.setPrototypeOf(r,o);const i=Object.getOwnPropertyNames(a);for(const c of i){const d=Object.getOwnPropertyDescriptor(a,c);d&&Object.defineProperty(r,c,d)}return r},zE={}.hasOwnProperty;class xp extends OE{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=wE()}copy(){const t=new xp;let n=-1;for(;++n<this.attachers.length;){const o=this.attachers[n];t.use(...o)}return t.data(Fs(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Vs("data",this.frozen),this.namespace[t]=n,this):zE.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Vs("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const a=n.call(t,...o);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Pi(t),o=this.parser||this.Parser;return Ws("parse",o),o(String(n),n)}process(t,n){const o=this;return this.freeze(),Ws("process",this.parser||this.Parser),Bs("process",this.compiler||this.Compiler),n?a(void 0,n):new Promise(a);function a(r,i){const c=Pi(t),d=o.parse(c);o.run(d,c,function(u,s,f){if(u||!s||!f)return l(u);const h=s,y=o.stringify(h,f);UE(y)?f.value=y:f.result=y,l(u,f)});function l(u,s){u||!s?i(u):r?r(s):n(void 0,s)}}}processSync(t){let n=!1,o;return this.freeze(),Ws("processSync",this.parser||this.Parser),Bs("processSync",this.compiler||this.Compiler),this.process(t,a),sm("processSync","process",n),o;function a(r,i){n=!0,Zh(r),o=i}}run(t,n,o){lm(t),this.freeze();const a=this.transformers;return!o&&typeof n=="function"&&(o=n,n=void 0),o?r(void 0,o):new Promise(r);function r(i,c){const d=Pi(n);a.run(t,d,l);function l(u,s,f){const h=s||t;u?c(u):i?i(h):o(void 0,h,f)}}}runSync(t,n){let o=!1,a;return this.run(t,n,r),sm("runSync","run",o),a;function r(i,c){Zh(i),a=c,o=!0}}stringify(t,n){this.freeze();const o=Pi(n),a=this.compiler||this.Compiler;return Bs("stringify",a),lm(t),a(t,o)}use(t,...n){const o=this.attachers,a=this.namespace;if(Vs("use",this.frozen),t!=null)if(typeof t=="function")d(t,n);else if(typeof t=="object")Array.isArray(t)?c(t):i(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function r(l){if(typeof l=="function")d(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[u,...s]=l;d(u,s)}else i(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function i(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(l.plugins),l.settings&&(a.settings=Fs(!0,a.settings,l.settings))}function c(l){let u=-1;if(l!=null)if(Array.isArray(l))for(;++u<l.length;){const s=l[u];r(s)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function d(l,u){let s=-1,f=-1;for(;++s<o.length;)if(o[s][0]===l){f=s;break}if(f===-1)o.push([l,...u]);else if(u.length>0){let[h,...y]=u;const k=o[f][1];ed(k)&&ed(h)&&(h=Fs(!0,k,h)),o[f]=[l,h,...y]}}}}const IE=new xp().freeze();function Ws(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Bs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Vs(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function lm(e){if(!ed(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function sm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Pi(e){return FE(e)?e:new Xb(e)}function FE(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function UE(e){return typeof e=="string"||NE(e)}function NE(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const HE="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cm=[],um={allowDangerousHtml:!0},WE=/^(https?|ircs?|mailto|xmpp)$/i,BE=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function VE(e){const t=e.allowedElements,n=e.allowElement,o=e.children||"",a=e.className,r=e.components,i=e.disallowedElements,c=e.rehypePlugins||cm,d=e.remarkPlugins||cm,l=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...um}:um,u=e.skipHtml,s=e.unwrapDisallowed,f=e.urlTransform||$E,h=IE().use(E2).use(d).use(yE,l).use(c),y=new Xb;typeof o=="string"&&(y.value=o);for(const m of BE)Object.hasOwn(e,m.from)&&(""+m.from+(m.to?"use `"+m.to+"` instead":"remove it")+HE+m.id,void 0);const k=h.parse(y);let S=h.runSync(k,y);return a&&(S={type:"element",tagName:"div",properties:{className:a},children:S.type==="root"?S.children:[S]}),wp(S,v),cS(S,{Fragment:p.Fragment,components:r,ignoreInvalidStyle:!0,jsx:p.jsx,jsxs:p.jsxs,passKeys:!0,passNode:!0});function v(m,g,x){if(m.type==="raw"&&x&&typeof g=="number")return u?x.children.splice(g,1):x.children[g]={type:"text",value:m.value},g;if(m.type==="element"){let C;for(C in Os)if(Object.hasOwn(Os,C)&&Object.hasOwn(m.properties,C)){const _=m.properties[C],A=Os[C];(A===null||A.includes(m.tagName))&&(m.properties[C]=f(String(_||""),C,m))}}if(m.type==="element"){let C=t?!t.includes(m.tagName):i?i.includes(m.tagName):!1;if(!C&&n&&typeof g=="number"&&(C=!n(m,g,x)),C&&x&&typeof g=="number")return s&&m.children?x.children.splice(g,1,...m.children):x.children.splice(g,1),g}}}function $E(e){const t=e.indexOf(":"),n=e.indexOf("?"),o=e.indexOf("#"),a=e.indexOf("/");return t<0||a>-1&&t>a||n>-1&&t>n||o>-1&&t>o||WE.test(e.slice(0,t))?e:""}function qE(e,t){if(e==null)return{};var n=rp(e,t),o,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function nd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function GE(e){if(Array.isArray(e))return nd(e)}function KE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function QE(e,t){if(e){if(typeof e=="string")return nd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nd(e,t)}}function YE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JE(e){return GE(e)||KE(e)||QE(e)||YE()}function Va(e){"@babel/helpers - typeof";return Va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Va(e)}function XE(e,t){if(Va(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Va(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ZE(e){var t=XE(e,"string");return Va(t)=="symbol"?t:String(t)}function Zb(e,t,n){return t=ZE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function mr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dm(Object(n),!0).forEach(function(o){Zb(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dm(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function eT(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var $s={};function tT(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return $s[t]||($s[t]=eT(e)),$s[t]}function nT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(r){return r!=="token"}),a=tT(o);return a.reduce(function(r,i){return mr(mr({},r),n[i])},t)}function pm(e){return e.join(" ")}function oT(e,t){var n=0;return function(o){return n+=1,o.map(function(a,r){return ey({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(r)})})}}function ey(e){var t=e.node,n=e.stylesheet,o=e.style,a=o===void 0?{}:o,r=e.useInlineStyles,i=e.key,c=t.properties,d=t.type,l=t.tagName,u=t.value;if(d==="text")return u;if(l){var s=oT(n,r),f;if(!r)f=mr(mr({},c),{},{className:pm(c.className)});else{var h=Object.keys(n).reduce(function(v,m){return m.split(".").forEach(function(g){v.includes(g)||v.push(g)}),v},[]),y=c.className&&c.className.includes("token")?["token"]:[],k=c.className&&y.concat(c.className.filter(function(v){return!h.includes(v)}));f=mr(mr({},c),{},{className:pm(k)||void 0,style:nT(c.className,Object.assign({},c.style,a),n)})}var S=s(t.children);return Se.createElement(l,bl({key:i},f),S)}}const rT=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var aT=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function fm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fm(Object(n),!0).forEach(function(o){Zb(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fm(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var iT=/\n/g;function lT(e){return e.match(iT)}function sT(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(a,r){var i=r+n;return Se.createElement("span",{key:"line-".concat(r),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(i):o},"".concat(i,`
`))})}function cT(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,a=o===void 0?{float:"left",paddingRight:"10px"}:o,r=e.numberStyle,i=r===void 0?{}:r,c=e.startingLineNumber;return Se.createElement("code",{style:Object.assign({},n,a)},sT({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:c}))}function uT(e){return"".concat(e.toString().length,".25em")}function ty(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function ny(e,t,n){var o={display:"inline-block",minWidth:uT(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,r=mn(mn({},o),a);return r}function Gi(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,a=e.largestLineNumber,r=e.showInlineLineNumbers,i=e.lineProps,c=i===void 0?{}:i,d=e.className,l=d===void 0?[]:d,u=e.showLineNumbers,s=e.wrapLongLines,f=typeof c=="function"?c(n):c;if(f.className=l,n&&r){var h=ny(o,n,a);t.unshift(ty(n,h))}return s&u&&(f.style=mn(mn({},f.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:f,children:t}}function oy(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var a=e[o];if(a.type==="text")n.push(Gi({children:[a],className:JE(new Set(t))}));else if(a.children){var r=t.concat(a.properties.className);oy(a.children,r).forEach(function(i){return n.push(i)})}}return n}function dT(e,t,n,o,a,r,i,c,d){var l,u=oy(e.value),s=[],f=-1,h=0;function y(C,_){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Gi({children:C,lineNumber:_,lineNumberStyle:c,largestLineNumber:i,showInlineLineNumbers:a,lineProps:n,className:A,showLineNumbers:o,wrapLongLines:d})}function k(C,_){if(o&&_&&a){var A=ny(c,_,i);C.unshift(ty(_,A))}return C}function S(C,_){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||A.length>0?y(C,_,A):k(C,_)}for(var v=function(){var _=u[h],A=_.children[0].value,R=lT(A);if(R){var j=A.split(`
`);j.forEach(function(T,I){var H=o&&s.length+r,K={type:"text",value:"".concat(T,`
`)};if(I===0){var ne=u.slice(f+1,h).concat(Gi({children:[K],className:_.properties.className})),X=S(ne,H);s.push(X)}else if(I===j.length-1){var ce=u[h+1]&&u[h+1].children&&u[h+1].children[0],ee={type:"text",value:"".concat(T)};if(ce){var U=Gi({children:[ee],className:_.properties.className});u.splice(h+1,0,U)}else{var V=[ee],w=S(V,H,_.properties.className);s.push(w)}}else{var G=[K],Y=S(G,H,_.properties.className);s.push(Y)}}),f=h}h++};h<u.length;)v();if(f!==u.length-1){var m=u.slice(f+1,u.length);if(m&&m.length){var g=o&&s.length+r,x=S(m,g);s.push(x)}}return t?s:(l=[]).concat.apply(l,s)}function pT(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(a,r){return ey({node:a,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(r)})})}function ry(e){return e&&typeof e.highlightAuto<"u"}function fT(e){var t=e.astGenerator,n=e.language,o=e.code,a=e.defaultCodeValue;if(ry(t)){var r=rT(t,n);return n==="text"?{value:a,language:"text"}:r?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:a}}catch{return{value:a}}}function hT(e,t){return function(o){var a=o.language,r=o.children,i=o.style,c=i===void 0?t:i,d=o.customStyle,l=d===void 0?{}:d,u=o.codeTagProps,s=u===void 0?{className:a?"language-".concat(a):void 0,style:mn(mn({},c['code[class*="language-"]']),c['code[class*="language-'.concat(a,'"]')])}:u,f=o.useInlineStyles,h=f===void 0?!0:f,y=o.showLineNumbers,k=y===void 0?!1:y,S=o.showInlineLineNumbers,v=S===void 0?!0:S,m=o.startingLineNumber,g=m===void 0?1:m,x=o.lineNumberContainerStyle,C=o.lineNumberStyle,_=C===void 0?{}:C,A=o.wrapLines,R=o.wrapLongLines,j=R===void 0?!1:R,T=o.lineProps,I=T===void 0?{}:T,H=o.renderer,K=o.PreTag,ne=K===void 0?"pre":K,X=o.CodeTag,ce=X===void 0?"code":X,ee=o.code,U=ee===void 0?(Array.isArray(r)?r[0]:r)||"":ee,V=o.astGenerator,w=qE(o,aT);V=V||e;var G=k?Se.createElement(cT,{containerStyle:x,codeStyle:s.style||{},numberStyle:_,startingLineNumber:g,codeString:U}):null,Y=c.hljs||c['pre[class*="language-"]']||{backgroundColor:"#fff"},E=ry(V)?"hljs":"prismjs",le=h?Object.assign({},w,{style:Object.assign({},Y,l)}):Object.assign({},w,{className:w.className?"".concat(E," ").concat(w.className):E,style:Object.assign({},l)});if(j?s.style=mn(mn({},s.style),{},{whiteSpace:"pre-wrap"}):s.style=mn(mn({},s.style),{},{whiteSpace:"pre"}),!V)return Se.createElement(ne,le,G,Se.createElement(ce,s,U));(A===void 0&&H||j)&&(A=!0),H=H||pT;var ke=[{type:"text",value:U}],re=fT({astGenerator:V,language:a,code:U,defaultCodeValue:ke});re.language===null&&(re.value=ke);var Ce=re.value.length+g,Ye=dT(re,A,I,k,v,g,Ce,_,j);return Se.createElement(ne,le,Se.createElement(ce,s,!v&&G,H({rows:Ye,stylesheet:c,useInlineStyles:h})))}}var mT=_T,gT=Object.prototype.hasOwnProperty;function _T(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)gT.call(n,o)&&(e[o]=n[o])}return e}var ay=iy,Sp=iy.prototype;Sp.space=null;Sp.normal={};Sp.property={};function iy(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var hm=mT,vT=ay,bT=yT;function yT(e){for(var t=e.length,n=[],o=[],a=-1,r,i;++a<t;)r=e[a],n.push(r.property),o.push(r.normal),i=r.space;return new vT(hm.apply(null,n),hm.apply(null,o),i)}var Cp=kT;function kT(e){return e.toLowerCase()}var ly=sy,Qt=sy.prototype;Qt.space=null;Qt.attribute=null;Qt.property=null;Qt.boolean=!1;Qt.booleanish=!1;Qt.overloadedBoolean=!1;Qt.number=!1;Qt.commaSeparated=!1;Qt.spaceSeparated=!1;Qt.commaOrSpaceSeparated=!1;Qt.mustUseProperty=!1;Qt.defined=!1;function sy(e,t){this.property=e,this.attribute=t}var kn={},wT=0;kn.boolean=$o();kn.booleanish=$o();kn.overloadedBoolean=$o();kn.number=$o();kn.spaceSeparated=$o();kn.commaSeparated=$o();kn.commaOrSpaceSeparated=$o();function $o(){return Math.pow(2,++wT)}var cy=ly,mm=kn,uy=Ep;Ep.prototype=new cy;Ep.prototype.defined=!0;var dy=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],xT=dy.length;function Ep(e,t,n,o){var a=-1,r;for(gm(this,"space",o),cy.call(this,e,t);++a<xT;)r=dy[a],gm(this,r,(n&mm[r])===mm[r])}function gm(e,t,n){n&&(e[t]=n)}var _m=Cp,ST=ay,CT=uy,Za=ET;function ET(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},a=e.properties,r=e.transform,i={},c={},d,l;for(d in a)l=new CT(d,r(o,d),a[d],t),n.indexOf(d)!==-1&&(l.mustUseProperty=!0),i[d]=l,c[_m(d)]=d,c[_m(l.attribute)]=d;return new ST(i,c,t)}var TT=Za,AT=TT({space:"xlink",transform:PT,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function PT(e,t){return"xlink:"+t.slice(5).toLowerCase()}var jT=Za,RT=jT({space:"xml",transform:MT,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function MT(e,t){return"xml:"+t.slice(3).toLowerCase()}var LT=DT;function DT(e,t){return t in e?e[t]:t}var OT=LT,py=zT;function zT(e,t){return OT(e,t.toLowerCase())}var IT=Za,FT=py,UT=IT({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:FT,properties:{xmlns:null,xmlnsXLink:null}}),Tp=kn,NT=Za,bt=Tp.booleanish,Ft=Tp.number,wo=Tp.spaceSeparated,HT=NT({transform:WT,properties:{ariaActiveDescendant:null,ariaAtomic:bt,ariaAutoComplete:null,ariaBusy:bt,ariaChecked:bt,ariaColCount:Ft,ariaColIndex:Ft,ariaColSpan:Ft,ariaControls:wo,ariaCurrent:null,ariaDescribedBy:wo,ariaDetails:null,ariaDisabled:bt,ariaDropEffect:wo,ariaErrorMessage:null,ariaExpanded:bt,ariaFlowTo:wo,ariaGrabbed:bt,ariaHasPopup:null,ariaHidden:bt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:wo,ariaLevel:Ft,ariaLive:null,ariaModal:bt,ariaMultiLine:bt,ariaMultiSelectable:bt,ariaOrientation:null,ariaOwns:wo,ariaPlaceholder:null,ariaPosInSet:Ft,ariaPressed:bt,ariaReadOnly:bt,ariaRelevant:null,ariaRequired:bt,ariaRoleDescription:wo,ariaRowCount:Ft,ariaRowIndex:Ft,ariaRowSpan:Ft,ariaSelected:bt,ariaSetSize:Ft,ariaSort:null,ariaValueMax:Ft,ariaValueMin:Ft,ariaValueNow:Ft,ariaValueText:null,role:null}});function WT(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Ur=kn,BT=Za,VT=py,fe=Ur.boolean,$T=Ur.overloadedBoolean,ta=Ur.booleanish,Re=Ur.number,pt=Ur.spaceSeparated,ji=Ur.commaSeparated,qT=BT({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:VT,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ji,acceptCharset:pt,accessKey:pt,action:null,allow:null,allowFullScreen:fe,allowPaymentRequest:fe,allowUserMedia:fe,alt:null,as:null,async:fe,autoCapitalize:null,autoComplete:pt,autoFocus:fe,autoPlay:fe,capture:fe,charSet:null,checked:fe,cite:null,className:pt,cols:Re,colSpan:null,content:null,contentEditable:ta,controls:fe,controlsList:pt,coords:Re|ji,crossOrigin:null,data:null,dateTime:null,decoding:null,default:fe,defer:fe,dir:null,dirName:null,disabled:fe,download:$T,draggable:ta,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:fe,formTarget:null,headers:pt,height:Re,hidden:fe,high:Re,href:null,hrefLang:null,htmlFor:pt,httpEquiv:pt,id:null,imageSizes:null,imageSrcSet:ji,inputMode:null,integrity:null,is:null,isMap:fe,itemId:null,itemProp:pt,itemRef:pt,itemScope:fe,itemType:pt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:fe,low:Re,manifest:null,max:null,maxLength:Re,media:null,method:null,min:null,minLength:Re,multiple:fe,muted:fe,name:null,nonce:null,noModule:fe,noValidate:fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:fe,optimum:Re,pattern:null,ping:pt,placeholder:null,playsInline:fe,poster:null,preload:null,readOnly:fe,referrerPolicy:null,rel:pt,required:fe,reversed:fe,rows:Re,rowSpan:Re,sandbox:pt,scope:null,scoped:fe,seamless:fe,selected:fe,shape:null,size:Re,sizes:null,slot:null,span:Re,spellCheck:ta,src:null,srcDoc:null,srcLang:null,srcSet:ji,start:Re,step:null,style:null,tabIndex:Re,target:null,title:null,translate:null,type:null,typeMustMatch:fe,useMap:null,value:ta,width:Re,wrap:null,align:null,aLink:null,archive:pt,axis:null,background:null,bgColor:null,border:Re,borderColor:null,bottomMargin:Re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:fe,declare:fe,event:null,face:null,frame:null,frameBorder:null,hSpace:Re,leftMargin:Re,link:null,longDesc:null,lowSrc:null,marginHeight:Re,marginWidth:Re,noResize:fe,noHref:fe,noShade:fe,noWrap:fe,object:null,profile:null,prompt:null,rev:null,rightMargin:Re,rules:null,scheme:null,scrolling:ta,standby:null,summary:null,text:null,topMargin:Re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:fe,disableRemotePlayback:fe,prefix:null,property:null,results:Re,security:null,unselectable:null}}),GT=bT,KT=AT,QT=RT,YT=UT,JT=HT,XT=qT,ZT=GT([QT,KT,YT,JT,XT]),eA=Cp,tA=uy,nA=ly,Ap="data",oA=iA,rA=/^data[-\w.:]+$/i,fy=/-[a-z]/g,aA=/[A-Z]/g;function iA(e,t){var n=eA(t),o=t,a=nA;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Ap&&rA.test(t)&&(t.charAt(4)==="-"?o=lA(t):t=sA(t),a=tA),new a(o,t))}function lA(e){var t=e.slice(5).replace(fy,uA);return Ap+t.charAt(0).toUpperCase()+t.slice(1)}function sA(e){var t=e.slice(4);return fy.test(t)?e:(t=t.replace(aA,cA),t.charAt(0)!=="-"&&(t="-"+t),Ap+t)}function cA(e){return"-"+e.toLowerCase()}function uA(e){return e.charAt(1).toUpperCase()}var dA=pA,vm=/[#.]/g;function pA(e,t){for(var n=e||"",o=t||"div",a={},r=0,i,c,d;r<n.length;)vm.lastIndex=r,d=vm.exec(n),i=n.slice(r,d?d.index:n.length),i&&(c?c==="#"?a.id=i:a.className?a.className.push(i):a.className=[i]:o=i,r+=i.length),d&&(c=d[0],r++);return{type:"element",tagName:o,properties:a,children:[]}}var Pp={};Pp.parse=mA;Pp.stringify=gA;var bm="",fA=" ",hA=/[ \t\n\r\f]+/g;function mA(e){var t=String(e||bm).trim();return t===bm?[]:t.split(hA)}function gA(e){return e.join(fA).trim()}var jp={};jp.parse=_A;jp.stringify=vA;var od=",",ym=" ",sa="";function _A(e){for(var t=[],n=String(e||sa),o=n.indexOf(od),a=0,r=!1,i;!r;)o===-1&&(o=n.length,r=!0),i=n.slice(a,o).trim(),(i||!r)&&t.push(i),a=o+1,o=n.indexOf(od,a);return t}function vA(e,t){var n=t||{},o=n.padLeft===!1?sa:ym,a=n.padRight?ym:sa;return e[e.length-1]===sa&&(e=e.concat(sa)),e.join(a+od+o).trim()}var bA=oA,km=Cp,yA=dA,wm=Pp.parse,xm=jp.parse,kA=xA,wA={}.hasOwnProperty;function xA(e,t,n){var o=n?AA(n):null;return a;function a(i,c){var d=yA(i,t),l=Array.prototype.slice.call(arguments,2),u=d.tagName.toLowerCase(),s;if(d.tagName=o&&wA.call(o,u)?o[u]:u,c&&SA(c,d)&&(l.unshift(c),c=null),c)for(s in c)r(d.properties,s,c[s]);return hy(d.children,l),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function r(i,c,d){var l,u,s;d==null||d!==d||(l=bA(e,c),u=l.property,s=d,typeof s=="string"&&(l.spaceSeparated?s=wm(s):l.commaSeparated?s=xm(s):l.commaOrSpaceSeparated&&(s=wm(xm(s).join(" ")))),u==="style"&&typeof d!="string"&&(s=TA(s)),u==="className"&&i.className&&(s=i.className.concat(s)),i[u]=EA(l,u,s))}}function SA(e,t){return typeof e=="string"||"length"in e||CA(t.tagName,e)}function CA(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function hy(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)hy(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function EA(e,t,n){var o,a,r;if(typeof n!="object"||!("length"in n))return Sm(e,t,n);for(a=n.length,o=-1,r=[];++o<a;)r[o]=Sm(e,t,n[o]);return r}function Sm(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||km(n)===km(t))&&(o=!0),o}function TA(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function AA(e){for(var t=e.length,n=-1,o={},a;++n<t;)a=e[n],o[a.toLowerCase()]=a;return o}var PA=ZT,jA=kA,my=jA(PA,"div");my.displayName="html";var RA=my,MA=RA;const LA="Æ",DA="&",OA="Á",zA="Â",IA="À",FA="Å",UA="Ã",NA="Ä",HA="©",WA="Ç",BA="Ð",VA="É",$A="Ê",qA="È",GA="Ë",KA=">",QA="Í",YA="Î",JA="Ì",XA="Ï",ZA="<",e3="Ñ",t3="Ó",n3="Ô",o3="Ò",r3="Ø",a3="Õ",i3="Ö",l3='"',s3="®",c3="Þ",u3="Ú",d3="Û",p3="Ù",f3="Ü",h3="Ý",m3="á",g3="â",_3="´",v3="æ",b3="à",y3="&",k3="å",w3="ã",x3="ä",S3="¦",C3="ç",E3="¸",T3="¢",A3="©",P3="¤",j3="°",R3="÷",M3="é",L3="ê",D3="è",O3="ð",z3="ë",I3="½",F3="¼",U3="¾",N3=">",H3="í",W3="î",B3="¡",V3="ì",$3="¿",q3="ï",G3="«",K3="<",Q3="¯",Y3="µ",J3="·",X3=" ",Z3="¬",eP="ñ",tP="ó",nP="ô",oP="ò",rP="ª",aP="º",iP="ø",lP="õ",sP="ö",cP="¶",uP="±",dP="£",pP='"',fP="»",hP="®",mP="§",gP="­",_P="¹",vP="²",bP="³",yP="ß",kP="þ",wP="×",xP="ú",SP="û",CP="ù",EP="¨",TP="ü",AP="ý",PP="¥",jP="ÿ",RP={AElig:LA,AMP:DA,Aacute:OA,Acirc:zA,Agrave:IA,Aring:FA,Atilde:UA,Auml:NA,COPY:HA,Ccedil:WA,ETH:BA,Eacute:VA,Ecirc:$A,Egrave:qA,Euml:GA,GT:KA,Iacute:QA,Icirc:YA,Igrave:JA,Iuml:XA,LT:ZA,Ntilde:e3,Oacute:t3,Ocirc:n3,Ograve:o3,Oslash:r3,Otilde:a3,Ouml:i3,QUOT:l3,REG:s3,THORN:c3,Uacute:u3,Ucirc:d3,Ugrave:p3,Uuml:f3,Yacute:h3,aacute:m3,acirc:g3,acute:_3,aelig:v3,agrave:b3,amp:y3,aring:k3,atilde:w3,auml:x3,brvbar:S3,ccedil:C3,cedil:E3,cent:T3,copy:A3,curren:P3,deg:j3,divide:R3,eacute:M3,ecirc:L3,egrave:D3,eth:O3,euml:z3,frac12:I3,frac14:F3,frac34:U3,gt:N3,iacute:H3,icirc:W3,iexcl:B3,igrave:V3,iquest:$3,iuml:q3,laquo:G3,lt:K3,macr:Q3,micro:Y3,middot:J3,nbsp:X3,not:Z3,ntilde:eP,oacute:tP,ocirc:nP,ograve:oP,ordf:rP,ordm:aP,oslash:iP,otilde:lP,ouml:sP,para:cP,plusmn:uP,pound:dP,quot:pP,raquo:fP,reg:hP,sect:mP,shy:gP,sup1:_P,sup2:vP,sup3:bP,szlig:yP,thorn:kP,times:wP,uacute:xP,ucirc:SP,ugrave:CP,uml:EP,uuml:TP,yacute:AP,yen:PP,yuml:jP},MP={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var gy=LP;function LP(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var DP=OP;function OP(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var zP=IP;function IP(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var FP=zP,UP=gy,NP=HP;function HP(e){return FP(e)||UP(e)}var Ri,WP=59,BP=VP;function VP(e){var t="&"+e+";",n;return Ri=Ri||document.createElement("i"),Ri.innerHTML=t,n=Ri.textContent,n.charCodeAt(n.length-1)===WP&&e!=="semi"||n===t?!1:n}var Cm=RP,Em=MP,$P=gy,qP=DP,_y=NP,GP=BP,KP=lj,QP={}.hasOwnProperty,Xo=String.fromCharCode,YP=Function.prototype,Tm={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},JP=9,Am=10,XP=12,ZP=32,Pm=38,ej=59,tj=60,nj=61,oj=35,rj=88,aj=120,ij=65533,Zo="named",Rp="hexadecimal",Mp="decimal",Lp={};Lp[Rp]=16;Lp[Mp]=10;var Jl={};Jl[Zo]=_y;Jl[Mp]=$P;Jl[Rp]=qP;var vy=1,by=2,yy=3,ky=4,wy=5,rd=6,xy=7,_o={};_o[vy]="Named character references must be terminated by a semicolon";_o[by]="Numeric character references must be terminated by a semicolon";_o[yy]="Named character references cannot be empty";_o[ky]="Numeric character references cannot be empty";_o[wy]="Named character references must be known";_o[rd]="Numeric character references cannot be disallowed";_o[xy]="Numeric character references cannot be outside the permissible Unicode range";function lj(e,t){var n={},o,a;t||(t={});for(a in Tm)o=t[a],n[a]=o??Tm[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),sj(e,n)}function sj(e,t){var n=t.additional,o=t.nonTerminated,a=t.text,r=t.reference,i=t.warning,c=t.textContext,d=t.referenceContext,l=t.warningContext,u=t.position,s=t.indent||[],f=e.length,h=0,y=-1,k=u.column||1,S=u.line||1,v="",m=[],g,x,C,_,A,R,j,T,I,H,K,ne,X,ce,ee,U,V,w,G;for(typeof n=="string"&&(n=n.charCodeAt(0)),U=Y(),T=i?E:YP,h--,f++;++h<f;)if(A===Am&&(k=s[y]||1),A=e.charCodeAt(h),A===Pm){if(j=e.charCodeAt(h+1),j===JP||j===Am||j===XP||j===ZP||j===Pm||j===tj||j!==j||n&&j===n){v+=Xo(A),k++;continue}for(X=h+1,ne=X,G=X,j===oj?(G=++ne,j=e.charCodeAt(G),j===rj||j===aj?(ce=Rp,G=++ne):ce=Mp):ce=Zo,g="",K="",_="",ee=Jl[ce],G--;++G<f&&(j=e.charCodeAt(G),!!ee(j));)_+=Xo(j),ce===Zo&&QP.call(Cm,_)&&(g=_,K=Cm[_]);C=e.charCodeAt(G)===ej,C&&(G++,x=ce===Zo?GP(_):!1,x&&(g=_,K=x)),w=1+G-X,!C&&!o||(_?ce===Zo?(C&&!K?T(wy,1):(g!==_&&(G=ne+g.length,w=1+G-ne,C=!1),C||(I=g?vy:yy,t.attribute?(j=e.charCodeAt(G),j===nj?(T(I,w),K=null):_y(j)?K=null:T(I,w)):T(I,w))),R=K):(C||T(by,w),R=parseInt(_,Lp[ce]),cj(R)?(T(xy,w),R=Xo(ij)):R in Em?(T(rd,w),R=Em[R]):(H="",uj(R)&&T(rd,w),R>65535&&(R-=65536,H+=Xo(R>>>10|55296),R=56320|R&1023),R=H+Xo(R))):ce!==Zo&&T(ky,w)),R?(le(),U=Y(),h=G-1,k+=G-X+1,m.push(R),V=Y(),V.offset++,r&&r.call(d,R,{start:U,end:V},e.slice(X-1,G)),U=V):(_=e.slice(X-1,G),v+=_,k+=_.length,h=G-1)}else A===10&&(S++,y++,k=0),A===A?(v+=Xo(A),k++):le();return m.join("");function Y(){return{line:S,column:k,offset:h+(u.offset||0)}}function E(ke,re){var Ce=Y();Ce.column+=re,Ce.offset+=re,i.call(l,_o[ke],Ce,ke)}function le(){v&&(m.push(v),a&&a.call(c,v,{start:U,end:Y()}),v="")}}function cj(e){return e>=55296&&e<=57343||e>1114111}function uj(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Sy={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,i={},c={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof d?new d(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++r}),m.__id},clone:function m(g,x){x=x||{};var C,_;switch(c.util.type(g)){case"Object":if(_=c.util.objId(g),x[_])return x[_];C={},x[_]=C;for(var A in g)g.hasOwnProperty(A)&&(C[A]=m(g[A],x));return C;case"Array":return _=c.util.objId(g),x[_]?x[_]:(C=[],x[_]=C,g.forEach(function(R,j){C[j]=m(R,x)}),C);default:return g}},getLanguage:function(m){for(;m;){var g=a.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(a,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var x in g)if(g[x].src==m)return g[x]}return null}},isActive:function(m,g,x){for(var C="no-"+g;m;){var _=m.classList;if(_.contains(g))return!0;if(_.contains(C))return!1;m=m.parentElement}return!!x}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(m,g){var x=c.util.clone(c.languages[m]);for(var C in g)x[C]=g[C];return x},insertBefore:function(m,g,x,C){C=C||c.languages;var _=C[m],A={};for(var R in _)if(_.hasOwnProperty(R)){if(R==g)for(var j in x)x.hasOwnProperty(j)&&(A[j]=x[j]);x.hasOwnProperty(R)||(A[R]=_[R])}var T=C[m];return C[m]=A,c.languages.DFS(c.languages,function(I,H){H===T&&I!=m&&(this[I]=A)}),A},DFS:function m(g,x,C,_){_=_||{};var A=c.util.objId;for(var R in g)if(g.hasOwnProperty(R)){x.call(g,R,g[R],C||R);var j=g[R],T=c.util.type(j);T==="Object"&&!_[A(j)]?(_[A(j)]=!0,m(j,x,null,_)):T==="Array"&&!_[A(j)]&&(_[A(j)]=!0,m(j,x,R,_))}}},plugins:{},highlightAll:function(m,g){c.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,x){var C={callback:x,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),c.hooks.run("before-all-elements-highlight",C);for(var _=0,A;A=C.elements[_++];)c.highlightElement(A,g===!0,C.callback)},highlightElement:function(m,g,x){var C=c.util.getLanguage(m),_=c.languages[C];c.util.setLanguage(m,C);var A=m.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(A,C);var R=m.textContent,j={element:m,language:C,grammar:_,code:R};function T(H){j.highlightedCode=H,c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,c.hooks.run("after-highlight",j),c.hooks.run("complete",j),x&&x.call(j.element)}if(c.hooks.run("before-sanity-check",j),A=j.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!j.code){c.hooks.run("complete",j),x&&x.call(j.element);return}if(c.hooks.run("before-highlight",j),!j.grammar){T(c.util.encode(j.code));return}if(g&&o.Worker){var I=new Worker(c.filename);I.onmessage=function(H){T(H.data)},I.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else T(c.highlight(j.code,j.grammar,j.language))},highlight:function(m,g,x){var C={code:m,grammar:g,language:x};if(c.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=c.tokenize(C.code,C.grammar),c.hooks.run("after-tokenize",C),d.stringify(c.util.encode(C.tokens),C.language)},tokenize:function(m,g){var x=g.rest;if(x){for(var C in x)g[C]=x[C];delete g.rest}var _=new s;return f(_,_.head,m),u(m,_,g,_.head,0),y(_)},hooks:{all:{},add:function(m,g){var x=c.hooks.all;x[m]=x[m]||[],x[m].push(g)},run:function(m,g){var x=c.hooks.all[m];if(!(!x||!x.length))for(var C=0,_;_=x[C++];)_(g)}},Token:d};o.Prism=c;function d(m,g,x,C){this.type=m,this.content=g,this.alias=x,this.length=(C||"").length|0}d.stringify=function m(g,x){if(typeof g=="string")return g;if(Array.isArray(g)){var C="";return g.forEach(function(T){C+=m(T,x)}),C}var _={type:g.type,content:m(g.content,x),tag:"span",classes:["token",g.type],attributes:{},language:x},A=g.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(_.classes,A):_.classes.push(A)),c.hooks.run("wrap",_);var R="";for(var j in _.attributes)R+=" "+j+'="'+(_.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+R+">"+_.content+"</"+_.tag+">"};function l(m,g,x,C){m.lastIndex=g;var _=m.exec(x);if(_&&C&&_[1]){var A=_[1].length;_.index+=A,_[0]=_[0].slice(A)}return _}function u(m,g,x,C,_,A){for(var R in x)if(!(!x.hasOwnProperty(R)||!x[R])){var j=x[R];j=Array.isArray(j)?j:[j];for(var T=0;T<j.length;++T){if(A&&A.cause==R+","+T)return;var I=j[T],H=I.inside,K=!!I.lookbehind,ne=!!I.greedy,X=I.alias;if(ne&&!I.pattern.global){var ce=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,ce+"g")}for(var ee=I.pattern||I,U=C.next,V=_;U!==g.tail&&!(A&&V>=A.reach);V+=U.value.length,U=U.next){var w=U.value;if(g.length>m.length)return;if(!(w instanceof d)){var G=1,Y;if(ne){if(Y=l(ee,V,m,K),!Y||Y.index>=m.length)break;var re=Y.index,E=Y.index+Y[0].length,le=V;for(le+=U.value.length;re>=le;)U=U.next,le+=U.value.length;if(le-=U.value.length,V=le,U.value instanceof d)continue;for(var ke=U;ke!==g.tail&&(le<E||typeof ke.value=="string");ke=ke.next)G++,le+=ke.value.length;G--,w=m.slice(V,le),Y.index-=V}else if(Y=l(ee,0,w,K),!Y)continue;var re=Y.index,Ce=Y[0],Ye=w.slice(0,re),Et=w.slice(re+Ce.length),Z=V+w.length;A&&Z>A.reach&&(A.reach=Z);var Ue=U.prev;Ye&&(Ue=f(g,Ue,Ye),V+=Ye.length),h(g,Ue,G);var Sn=new d(R,H?c.tokenize(Ce,H):Ce,X,Ce);if(U=f(g,Ue,Sn),Et&&f(g,U,Et),G>1){var Hn={cause:R+","+T,reach:Z};u(m,g,x,U.prev,V,Hn),A&&Hn.reach>A.reach&&(A.reach=Hn.reach)}}}}}}function s(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function f(m,g,x){var C=g.next,_={value:x,prev:g,next:C};return g.next=_,C.prev=_,m.length++,_}function h(m,g,x){for(var C=g.next,_=0;_<x&&C!==m.tail;_++)C=C.next;g.next=C,C.prev=g,m.length-=_}function y(m){for(var g=[],x=m.head.next;x!==m.tail;)g.push(x.value),x=x.next;return g}if(!o.document)return o.addEventListener&&(c.disableWorkerMessageHandler||o.addEventListener("message",function(m){var g=JSON.parse(m.data),x=g.language,C=g.code,_=g.immediateClose;o.postMessage(c.highlight(C,c.languages[x],x)),_&&o.close()},!1)),c;var k=c.util.currentScript();k&&(c.filename=k.src,k.hasAttribute("data-manual")&&(c.manual=!0));function S(){c.manual||c.highlightAll()}if(!c.manual){var v=document.readyState;v==="loading"||v==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return c}(t);e.exports&&(e.exports=n),typeof xr<"u"&&(xr.Prism=n)})(Sy);var dj=Sy.exports,pj=Dp;Dp.displayName="markup";Dp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Dp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:r},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var fj=Op;Op.displayName="css";Op.aliases=[];function Op(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}var hj=zp;zp.displayName="clike";zp.aliases=[];function zp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var mj=Ip;Ip.displayName="javascript";Ip.aliases=["js"];function Ip(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ca=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof xr=="object"?xr:{},gj=Mj();ca.Prism={manual:!0,disableWorkerMessageHandler:!0};var _j=MA,vj=KP,Cy=dj,bj=pj,yj=fj,kj=hj,wj=mj;gj();var Fp={}.hasOwnProperty;function Ey(){}Ey.prototype=Cy;var Ge=new Ey,xj=Ge;Ge.highlight=Cj;Ge.register=ei;Ge.alias=Sj;Ge.registered=Ej;Ge.listLanguages=Tj;ei(bj);ei(yj);ei(kj);ei(wj);Ge.util.encode=jj;Ge.Token.stringify=Aj;function ei(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ge.languages[e.displayName]===void 0&&e(Ge)}function Sj(e,t){var n=Ge.languages,o=e,a,r,i,c;t&&(o={},o[e]=t);for(a in o)for(r=o[a],r=typeof r=="string"?[r]:r,i=r.length,c=-1;++c<i;)n[r[c]]=n[a]}function Cj(e,t){var n=Cy.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ge.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Fp.call(Ge.languages,t))o=Ge.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function Ej(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Fp.call(Ge.languages,e)}function Tj(){var e=Ge.languages,t=[],n;for(n in e)Fp.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function Aj(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ge.util.type(e)==="Array"?Pj(e,t):(o={type:e.type,content:Ge.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ge.hooks.run("wrap",o),_j(o.tag+"."+o.classes.join("."),Rj(o.attributes),o.content))}function Pj(e,t){for(var n=[],o=e.length,a=-1,r;++a<o;)r=e[a],r!==""&&r!==null&&r!==void 0&&n.push(r);for(a=-1,o=n.length;++a<o;)r=n[a],n[a]=Ge.Token.stringify(r,t,n);return n}function jj(e){return e}function Rj(e){var t;for(t in e)e[t]=vj(e[t]);return e}function Mj(){var e="Prism"in ca,t=e?ca.Prism:void 0;return n;function n(){e?ca.Prism=t:delete ca.Prism,e=void 0,t=void 0}}const Up=an(xj);var wn=hT(Up,{});wn.registerLanguage=function(e,t){return Up.register(t)};wn.alias=function(e,t){return Up.alias(e,t)};var qs,jm;function Lj(){if(jm)return qs;jm=1,qs=e,e.displayName="bash",e.aliases=["shell"];function e(t){(function(n){var o="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:a,environment:{pattern:RegExp("\\$"+o),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+o),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+o),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+o),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=n.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=r.variable[1].inside,d=0;d<i.length;d++)c[i[d]]=n.languages.bash[i[d]];n.languages.shell=n.languages.bash})(t)}return qs}var Gs,Rm;function Dj(){if(Rm)return Gs;Rm=1,Gs=e,e.displayName="lua",e.aliases=[];function e(t){t.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}return Gs}var Ks,Mm;function Ty(){if(Mm)return Ks;Mm=1,Ks=e,e.displayName="typescript",e.aliases=["ts"];function e(t){(function(n){n.languages.typescript=n.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),n.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete n.languages.typescript.parameter,delete n.languages.typescript["literal-property"];var o=n.languages.extend("typescript",{});delete o["class-name"],n.languages.typescript["class-name"].inside=o,n.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),n.languages.ts=n.languages.typescript})(t)}return Ks}var Qs,Lm;function Oj(){if(Lm)return Qs;Lm=1,Qs=e,e.displayName="json",e.aliases=["webmanifest"];function e(t){t.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},t.languages.webmanifest=t.languages.json}return Qs}var Ys,Dm;function zj(){if(Dm)return Ys;Dm=1,Ys=e,e.displayName="jsx",e.aliases=[];function e(t){(function(n){var o=n.util.clone(n.languages.javascript),a=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function c(u,s){return u=u.replace(/<S>/g,function(){return a}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(u,s)}i=c(i).source,n.languages.jsx=n.languages.extend("markup",o),n.languages.jsx.tag.pattern=c(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=o.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:c(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:c(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var d=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(d).join(""):""},l=function(u){for(var s=[],f=0;f<u.length;f++){var h=u[f],y=!1;if(typeof h!="string"&&(h.type==="tag"&&h.content[0]&&h.content[0].type==="tag"?h.content[0].content[0].content==="</"?s.length>0&&s[s.length-1].tagName===d(h.content[0].content[1])&&s.pop():h.content[h.content.length-1].content==="/>"||s.push({tagName:d(h.content[0].content[1]),openedBraces:0}):s.length>0&&h.type==="punctuation"&&h.content==="{"?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&h.type==="punctuation"&&h.content==="}"?s[s.length-1].openedBraces--:y=!0),(y||typeof h=="string")&&s.length>0&&s[s.length-1].openedBraces===0){var k=d(h);f<u.length-1&&(typeof u[f+1]=="string"||u[f+1].type==="plain-text")&&(k+=d(u[f+1]),u.splice(f+1,1)),f>0&&(typeof u[f-1]=="string"||u[f-1].type==="plain-text")&&(k=d(u[f-1])+k,u.splice(f-1,1),f--),u[f]=new n.Token("plain-text",k,null,k)}h.content&&typeof h.content!="string"&&l(h.content)}};n.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||l(u.tokens)})})(t)}return Ys}var Js,Om;function Ij(){if(Om)return Js;Om=1,Js=e,e.displayName="markdown",e.aliases=["md"];function e(t){(function(n){var o=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function a(f){return f=f.replace(/<inner>/g,function(){return o}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+f+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),c=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;n.languages.markdown=n.languages.extend("markup",{}),n.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:n.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+c+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+c+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:n.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+c+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:n.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:a(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:a(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:a(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:a(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(f){["url","bold","italic","strike","code-snippet"].forEach(function(h){f!==h&&(n.languages.markdown[f].inside.content.inside[h]=n.languages.markdown[h])})}),n.hooks.add("after-tokenize",function(f){if(f.language!=="markdown"&&f.language!=="md")return;function h(y){if(!(!y||typeof y=="string"))for(var k=0,S=y.length;k<S;k++){var v=y[k];if(v.type!=="code"){h(v.content);continue}var m=v.content[1],g=v.content[3];if(m&&g&&m.type==="code-language"&&g.type==="code-block"&&typeof m.content=="string"){var x=m.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");x=(/[a-z][\w-]*/i.exec(x)||[""])[0].toLowerCase();var C="language-"+x;g.alias?typeof g.alias=="string"?g.alias=[g.alias,C]:g.alias.push(C):g.alias=[C]}}}h(f.tokens)}),n.hooks.add("wrap",function(f){if(f.type==="code-block"){for(var h="",y=0,k=f.classes.length;y<k;y++){var S=f.classes[y],v=/language-(.+)/.exec(S);if(v){h=v[1];break}}var m=n.languages[h];if(m)f.content=n.highlight(s(f.content.value),m,h);else if(h&&h!=="none"&&n.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);f.attributes.id=g,n.plugins.autoloader.loadLanguages(h,function(){var x=document.getElementById(g);x&&(x.innerHTML=n.highlight(x.textContent,n.languages[h],h))})}}});var d=RegExp(n.languages.markup.tag.pattern.source,"gi"),l={amp:"&",lt:"<",gt:">",quot:'"'},u=String.fromCodePoint||String.fromCharCode;function s(f){var h=f.replace(d,"");return h=h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(y,k){if(k=k.toLowerCase(),k[0]==="#"){var S;return k[1]==="x"?S=parseInt(k.slice(2),16):S=Number(k.slice(1)),u(S)}else{var v=l[k];return v||y}}),h}n.languages.md=n.languages.markdown})(t)}return Js}var Xs,zm;function Fj(){if(zm)return Xs;zm=1,Xs=e,e.displayName="scss",e.aliases=[];function e(t){t.languages.scss=t.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),t.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),t.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),t.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),t.languages.scss.atrule.inside.rest=t.languages.scss}return Xs}var Zs,Im;function Uj(){if(Im)return Zs;Im=1;var e=zj(),t=Ty();Zs=n,n.displayName="tsx",n.aliases=[];function n(o){o.register(e),o.register(t),function(a){var r=a.util.clone(a.languages.typescript);a.languages.tsx=a.languages.extend("jsx",r),delete a.languages.tsx.parameter,delete a.languages.tsx["literal-property"];var i=a.languages.tsx.tag;i.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+i.pattern.source+")",i.pattern.flags),i.lookbehind=!0}(o)}return Zs}var Ay={},Py={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Py);var vo=Py.exports,ec={},Fm;function Nj(){return Fm||(Fm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",maxHeight:"inherit",height:"inherit",padding:"0 1em",display:"block",overflow:"auto"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",margin:".5em 0",overflow:"visible",padding:"1px",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em"},'pre[class*="language-"] > code':{position:"relative",zIndex:"1",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em",position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal"},'pre[class*="language-"]:before':{content:"''",display:"block",position:"absolute",bottom:"0.75em",left:"0.18em",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(-2deg)",MozTransform:"rotate(-2deg)",msTransform:"rotate(-2deg)",OTransform:"rotate(-2deg)",transform:"rotate(-2deg)"},'pre[class*="language-"]:after':{content:"''",display:"block",position:"absolute",bottom:"0.75em",left:"auto",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)",right:"0.75em"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:".7"},'pre[class*="language-"].line-numbers.line-numbers':{paddingLeft:"0"},'pre[class*="language-"].line-numbers.line-numbers code':{paddingLeft:"3.8em"},'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows':{left:"0"},'pre[class*="language-"][data-line]':{paddingTop:"0",paddingBottom:"0",paddingLeft:"0"},"pre[data-line] code":{position:"relative",paddingLeft:"4em"},"pre .line-highlight":{marginTop:"0"}};e.default=t}(ec)),ec}var tc={},Um;function Hj(){return Um||(Um=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"white",background:"none",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",background:"hsl(30, 20%, 25%)",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:".3em solid hsl(30, 20%, 40%)",borderRadius:".5em",boxShadow:"1px 1px .5em black inset"},':not(pre) > code[class*="language-"]':{background:"hsl(30, 20%, 25%)",padding:".15em .2em .05em",borderRadius:".3em",border:".13em solid hsl(30, 20%, 40%)",boxShadow:"1px 1px .3em -.1em black inset",whiteSpace:"normal"},comment:{color:"hsl(30, 20%, 50%)"},prolog:{color:"hsl(30, 20%, 50%)"},doctype:{color:"hsl(30, 20%, 50%)"},cdata:{color:"hsl(30, 20%, 50%)"},punctuation:{Opacity:".7"},namespace:{Opacity:".7"},property:{color:"hsl(350, 40%, 70%)"},tag:{color:"hsl(350, 40%, 70%)"},boolean:{color:"hsl(350, 40%, 70%)"},number:{color:"hsl(350, 40%, 70%)"},constant:{color:"hsl(350, 40%, 70%)"},symbol:{color:"hsl(350, 40%, 70%)"},selector:{color:"hsl(75, 70%, 60%)"},"attr-name":{color:"hsl(75, 70%, 60%)"},string:{color:"hsl(75, 70%, 60%)"},char:{color:"hsl(75, 70%, 60%)"},builtin:{color:"hsl(75, 70%, 60%)"},inserted:{color:"hsl(75, 70%, 60%)"},operator:{color:"hsl(40, 90%, 60%)"},entity:{color:"hsl(40, 90%, 60%)",cursor:"help"},url:{color:"hsl(40, 90%, 60%)"},".language-css .token.string":{color:"hsl(40, 90%, 60%)"},".style .token.string":{color:"hsl(40, 90%, 60%)"},variable:{color:"hsl(40, 90%, 60%)"},atrule:{color:"hsl(350, 40%, 70%)"},"attr-value":{color:"hsl(350, 40%, 70%)"},keyword:{color:"hsl(350, 40%, 70%)"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},deleted:{color:"red"}};e.default=t}(tc)),tc}var nc={},Nm;function Wj(){return Nm||(Nm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"black",color:"white",boxShadow:"-.3em 0 0 .3em black, .3em 0 0 .3em black"},'pre[class*="language-"]':{fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:".4em .8em",margin:".5em 0",overflow:"auto",background:`url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>')`,backgroundSize:"1em 1em"},':not(pre) > code[class*="language-"]':{padding:".2em",borderRadius:".3em",boxShadow:"none",whiteSpace:"normal"},comment:{color:"#aaa"},prolog:{color:"#aaa"},doctype:{color:"#aaa"},cdata:{color:"#aaa"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#0cf"},tag:{color:"#0cf"},boolean:{color:"#0cf"},number:{color:"#0cf"},constant:{color:"#0cf"},symbol:{color:"#0cf"},selector:{color:"yellow"},"attr-name":{color:"yellow"},string:{color:"yellow"},char:{color:"yellow"},builtin:{color:"yellow"},operator:{color:"yellowgreen"},entity:{color:"yellowgreen",cursor:"help"},url:{color:"yellowgreen"},".language-css .token.string":{color:"yellowgreen"},variable:{color:"yellowgreen"},inserted:{color:"yellowgreen"},atrule:{color:"deeppink"},"attr-value":{color:"deeppink"},keyword:{color:"deeppink"},regex:{color:"orange"},important:{color:"orange",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},deleted:{color:"red"},"pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix)":{backgroundColor:"rgba(255, 0, 0, .3)",display:"inline"},"pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix)":{backgroundColor:"rgba(255, 0, 0, .3)",display:"inline"},"pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix)":{backgroundColor:"rgba(0, 255, 128, .3)",display:"inline"},"pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix)":{backgroundColor:"rgba(0, 255, 128, .3)",display:"inline"}};e.default=t}(nc)),nc}var oc={},Hm;function Bj(){return Hm||(Hm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#272822",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#272822",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#8292a2"},prolog:{color:"#8292a2"},doctype:{color:"#8292a2"},cdata:{color:"#8292a2"},punctuation:{color:"#f8f8f2"},namespace:{Opacity:".7"},property:{color:"#f92672"},tag:{color:"#f92672"},constant:{color:"#f92672"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},boolean:{color:"#ae81ff"},number:{color:"#ae81ff"},selector:{color:"#a6e22e"},"attr-name":{color:"#a6e22e"},string:{color:"#a6e22e"},char:{color:"#a6e22e"},builtin:{color:"#a6e22e"},inserted:{color:"#a6e22e"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#e6db74"},"attr-value":{color:"#e6db74"},function:{color:"#e6db74"},"class-name":{color:"#e6db74"},keyword:{color:"#66d9ef"},regex:{color:"#fd971f"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(oc)),oc}var rc={},Wm;function Vj(){return Wm||(Wm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#657b83",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#657b83",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",backgroundColor:"#fdf6e3"},'pre[class*="language-"]::-moz-selection':{background:"#073642"},'pre[class*="language-"] ::-moz-selection':{background:"#073642"},'code[class*="language-"]::-moz-selection':{background:"#073642"},'code[class*="language-"] ::-moz-selection':{background:"#073642"},'pre[class*="language-"]::selection':{background:"#073642"},'pre[class*="language-"] ::selection':{background:"#073642"},'code[class*="language-"]::selection':{background:"#073642"},'code[class*="language-"] ::selection':{background:"#073642"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdf6e3",padding:".1em",borderRadius:".3em"},comment:{color:"#93a1a1"},prolog:{color:"#93a1a1"},doctype:{color:"#93a1a1"},cdata:{color:"#93a1a1"},punctuation:{color:"#586e75"},namespace:{Opacity:".7"},property:{color:"#268bd2"},tag:{color:"#268bd2"},boolean:{color:"#268bd2"},number:{color:"#268bd2"},constant:{color:"#268bd2"},symbol:{color:"#268bd2"},deleted:{color:"#268bd2"},selector:{color:"#2aa198"},"attr-name":{color:"#2aa198"},string:{color:"#2aa198"},char:{color:"#2aa198"},builtin:{color:"#2aa198"},url:{color:"#2aa198"},inserted:{color:"#2aa198"},entity:{color:"#657b83",background:"#eee8d5",cursor:"help"},atrule:{color:"#859900"},"attr-value":{color:"#859900"},keyword:{color:"#859900"},function:{color:"#b58900"},"class-name":{color:"#b58900"},regex:{color:"#cb4b16"},important:{color:"#cb4b16",fontWeight:"bold"},variable:{color:"#cb4b16"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(rc)),rc}var ac={},Bm;function $j(){return Bm||(Bm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#ccc",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ccc",background:"#2d2d2d",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{background:"#2d2d2d",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#999"},"block-comment":{color:"#999"},prolog:{color:"#999"},doctype:{color:"#999"},cdata:{color:"#999"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},deleted:{color:"#e2777a"},"function-name":{color:"#6196cc"},boolean:{color:"#f08d49"},number:{color:"#f08d49"},function:{color:"#f08d49"},property:{color:"#f8c555"},"class-name":{color:"#f8c555"},constant:{color:"#f8c555"},symbol:{color:"#f8c555"},selector:{color:"#cc99cd"},important:{color:"#cc99cd",fontWeight:"bold"},atrule:{color:"#cc99cd"},keyword:{color:"#cc99cd"},builtin:{color:"#cc99cd"},string:{color:"#7ec699"},char:{color:"#7ec699"},"attr-value":{color:"#7ec699"},regex:{color:"#7ec699"},variable:{color:"#7ec699"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}};e.default=t}(ac)),ac}var ic={},Vm;function qj(){return Vm||(Vm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"white",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",textShadow:"0 -.1em .2em black",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",background:"hsl(0, 0%, 8%)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",textShadow:"0 -.1em .2em black",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",borderRadius:".5em",border:".3em solid hsl(0, 0%, 33%)",boxShadow:"1px 1px .5em black inset",margin:".5em 0",overflow:"auto",padding:"1em"},':not(pre) > code[class*="language-"]':{background:"hsl(0, 0%, 8%)",borderRadius:".3em",border:".13em solid hsl(0, 0%, 33%)",boxShadow:"1px 1px .3em -.1em black inset",padding:".15em .2em .05em",whiteSpace:"normal"},'pre[class*="language-"]::-moz-selection':{background:"hsla(0, 0%, 93%, 0.15)",textShadow:"none"},'pre[class*="language-"]::selection':{background:"hsla(0, 0%, 93%, 0.15)",textShadow:"none"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"]::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},comment:{color:"hsl(0, 0%, 47%)"},prolog:{color:"hsl(0, 0%, 47%)"},doctype:{color:"hsl(0, 0%, 47%)"},cdata:{color:"hsl(0, 0%, 47%)"},punctuation:{Opacity:".7"},namespace:{Opacity:".7"},tag:{color:"hsl(14, 58%, 55%)"},boolean:{color:"hsl(14, 58%, 55%)"},number:{color:"hsl(14, 58%, 55%)"},deleted:{color:"hsl(14, 58%, 55%)"},keyword:{color:"hsl(53, 89%, 79%)"},property:{color:"hsl(53, 89%, 79%)"},selector:{color:"hsl(53, 89%, 79%)"},constant:{color:"hsl(53, 89%, 79%)"},symbol:{color:"hsl(53, 89%, 79%)"},builtin:{color:"hsl(53, 89%, 79%)"},"attr-name":{color:"hsl(76, 21%, 52%)"},"attr-value":{color:"hsl(76, 21%, 52%)"},string:{color:"hsl(76, 21%, 52%)"},char:{color:"hsl(76, 21%, 52%)"},operator:{color:"hsl(76, 21%, 52%)"},entity:{color:"hsl(76, 21%, 52%)",cursor:"help"},url:{color:"hsl(76, 21%, 52%)"},".language-css .token.string":{color:"hsl(76, 21%, 52%)"},".style .token.string":{color:"hsl(76, 21%, 52%)"},variable:{color:"hsl(76, 21%, 52%)"},inserted:{color:"hsl(76, 21%, 52%)"},atrule:{color:"hsl(218, 22%, 55%)"},regex:{color:"hsl(42, 75%, 65%)"},important:{color:"hsl(42, 75%, 65%)",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},".language-markup .token.tag":{color:"hsl(33, 33%, 52%)"},".language-markup .token.attr-name":{color:"hsl(33, 33%, 52%)"},".language-markup .token.punctuation":{color:"hsl(33, 33%, 52%)"},"":{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",borderBottom:"1px dashed hsl(0, 0%, 33%)",borderTop:"1px dashed hsl(0, 0%, 33%)",marginTop:"0.75em",zIndex:"0"},".line-highlight.line-highlight:before":{backgroundColor:"hsl(215, 15%, 59%)",color:"hsl(24, 20%, 95%)"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"hsl(215, 15%, 59%)",color:"hsl(24, 20%, 95%)"}};e.default=t}(ic)),ic}var lc={},$m;function Gj(){return $m||($m=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(lc)),lc}var sc={},qm;function Kj(){return qm||(qm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2b2b2b",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#d4d0ab"},prolog:{color:"#d4d0ab"},doctype:{color:"#d4d0ab"},cdata:{color:"#d4d0ab"},punctuation:{color:"#fefefe"},property:{color:"#ffa07a"},tag:{color:"#ffa07a"},constant:{color:"#ffa07a"},symbol:{color:"#ffa07a"},deleted:{color:"#ffa07a"},boolean:{color:"#00e0e0"},number:{color:"#00e0e0"},selector:{color:"#abe338"},"attr-name":{color:"#abe338"},string:{color:"#abe338"},char:{color:"#abe338"},builtin:{color:"#abe338"},inserted:{color:"#abe338"},operator:{color:"#00e0e0"},entity:{color:"#00e0e0",cursor:"help"},url:{color:"#00e0e0"},".language-css .token.string":{color:"#00e0e0"},".style .token.string":{color:"#00e0e0"},variable:{color:"#00e0e0"},atrule:{color:"#ffd700"},"attr-value":{color:"#ffd700"},function:{color:"#ffd700"},keyword:{color:"#00e0e0"},regex:{color:"#ffd700"},important:{color:"#ffd700",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(sc)),sc}var cc={},Gm;function Qj(){return Gm||(Gm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(cc)),cc}var uc={},Km;function Yj(){return Km||(Km=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#f5f7ff",color:"#5e6687"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#f5f7ff",color:"#5e6687",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"]::selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#dfe2f1"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#898ea4"},prolog:{color:"#898ea4"},doctype:{color:"#898ea4"},cdata:{color:"#898ea4"},punctuation:{color:"#5e6687"},namespace:{Opacity:".7"},operator:{color:"#c76b29"},boolean:{color:"#c76b29"},number:{color:"#c76b29"},property:{color:"#c08b30"},tag:{color:"#3d8fd1"},string:{color:"#22a2c9"},selector:{color:"#6679cc"},"attr-name":{color:"#c76b29"},entity:{color:"#22a2c9",cursor:"help"},url:{color:"#22a2c9"},".language-css .token.string":{color:"#22a2c9"},".style .token.string":{color:"#22a2c9"},"attr-value":{color:"#ac9739"},keyword:{color:"#ac9739"},control:{color:"#ac9739"},directive:{color:"#ac9739"},unit:{color:"#ac9739"},statement:{color:"#22a2c9"},regex:{color:"#22a2c9"},atrule:{color:"#22a2c9"},placeholder:{color:"#3d8fd1"},variable:{color:"#3d8fd1"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #202746",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#c94922"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:"0.4em solid #c94922",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#dfe2f1"},".line-numbers .line-numbers-rows > span:before":{color:"#979db4"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"}};e.default=t}(uc)),uc}var dc={},Qm;function Jj(){return Qm||(Qm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#fff",textShadow:"0 1px 1px #000",fontFamily:'Menlo, Monaco, "Courier New", monospace',direction:"ltr",textAlign:"left",wordSpacing:"normal",whiteSpace:"pre",wordWrap:"normal",lineHeight:"1.4",background:"none",border:"0",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",textShadow:"0 1px 1px #000",fontFamily:'Menlo, Monaco, "Courier New", monospace',direction:"ltr",textAlign:"left",wordSpacing:"normal",whiteSpace:"pre",wordWrap:"normal",lineHeight:"1.4",background:"#222",border:"0",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"15px",margin:"1em 0",overflow:"auto",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},'pre[class*="language-"] code':{float:"left",padding:"0 15px 0 0"},':not(pre) > code[class*="language-"]':{background:"#222",padding:"5px 10px",lineHeight:"1",MozBorderRadius:"3px",WebkitBorderRadius:"3px",borderRadius:"3px"},comment:{color:"#797979"},prolog:{color:"#797979"},doctype:{color:"#797979"},cdata:{color:"#797979"},selector:{color:"#fff"},operator:{color:"#fff"},punctuation:{color:"#fff"},namespace:{Opacity:".7"},tag:{color:"#ffd893"},boolean:{color:"#ffd893"},atrule:{color:"#B0C975"},"attr-value":{color:"#B0C975"},hex:{color:"#B0C975"},string:{color:"#B0C975"},property:{color:"#c27628"},entity:{color:"#c27628",cursor:"help"},url:{color:"#c27628"},"attr-name":{color:"#c27628"},keyword:{color:"#c27628"},regex:{color:"#9B71C6"},function:{color:"#e5a638"},constant:{color:"#e5a638"},variable:{color:"#fdfba8"},number:{color:"#8799B0"},important:{color:"#E45734"},deliminator:{color:"#E45734"},".line-highlight.line-highlight":{background:"rgba(255, 255, 255, .2)"},".line-highlight.line-highlight:before":{top:".3em",backgroundColor:"rgba(255, 255, 255, .3)",color:"#fff",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},".line-highlight.line-highlight[data-end]:after":{top:".3em",backgroundColor:"rgba(255, 255, 255, .3)",color:"#fff",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},".line-numbers .line-numbers-rows > span":{borderRight:"3px #d9d336 solid"}};e.default=t}(dc)),dc}var pc={},Ym;function Xj(){return Ym||(Ym=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#111b27",background:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#111b27",background:"#e3eaf2",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{background:"#8da1b9"},'pre[class*="language-"] ::-moz-selection':{background:"#8da1b9"},'code[class*="language-"]::-moz-selection':{background:"#8da1b9"},'code[class*="language-"] ::-moz-selection':{background:"#8da1b9"},'pre[class*="language-"]::selection':{background:"#8da1b9"},'pre[class*="language-"] ::selection':{background:"#8da1b9"},'code[class*="language-"]::selection':{background:"#8da1b9"},'code[class*="language-"] ::selection':{background:"#8da1b9"},':not(pre) > code[class*="language-"]':{background:"#e3eaf2",padding:"0.1em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#3c526d"},prolog:{color:"#3c526d"},doctype:{color:"#3c526d"},cdata:{color:"#3c526d"},punctuation:{color:"#111b27"},"delimiter.important":{color:"#006d6d",fontWeight:"inherit"},"selector.parent":{color:"#006d6d"},tag:{color:"#006d6d"},"tag.punctuation":{color:"#006d6d"},"attr-name":{color:"#755f00"},boolean:{color:"#755f00"},"boolean.important":{color:"#755f00"},number:{color:"#755f00"},constant:{color:"#755f00"},"selector.attribute":{color:"#755f00"},"class-name":{color:"#005a8e"},key:{color:"#005a8e"},parameter:{color:"#005a8e"},property:{color:"#005a8e"},"property-access":{color:"#005a8e"},variable:{color:"#005a8e"},"attr-value":{color:"#116b00"},inserted:{color:"#116b00"},color:{color:"#116b00"},"selector.value":{color:"#116b00"},string:{color:"#116b00"},"string.url-link":{color:"#116b00"},builtin:{color:"#af00af"},"keyword-array":{color:"#af00af"},package:{color:"#af00af"},regex:{color:"#af00af"},function:{color:"#7c00aa"},"selector.class":{color:"#7c00aa"},"selector.id":{color:"#7c00aa"},"atrule.rule":{color:"#a04900"},combinator:{color:"#a04900"},keyword:{color:"#a04900"},operator:{color:"#a04900"},"pseudo-class":{color:"#a04900"},"pseudo-element":{color:"#a04900"},selector:{color:"#a04900"},unit:{color:"#a04900"},deleted:{color:"#c22f2e"},important:{color:"#c22f2e",fontWeight:"bold"},"keyword-this":{color:"#005a8e",fontWeight:"bold"},this:{color:"#005a8e",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},entity:{cursor:"help"},".language-markdown .token.title":{color:"#005a8e",fontWeight:"bold"},".language-markdown .token.title .token.punctuation":{color:"#005a8e",fontWeight:"bold"},".language-markdown .token.blockquote.punctuation":{color:"#af00af"},".language-markdown .token.code":{color:"#006d6d"},".language-markdown .token.hr.punctuation":{color:"#005a8e"},".language-markdown .token.url > .token.content":{color:"#116b00"},".language-markdown .token.url-link":{color:"#755f00"},".language-markdown .token.list.punctuation":{color:"#af00af"},".language-markdown .token.table-header":{color:"#111b27"},".language-json .token.operator":{color:"#111b27"},".language-scss .token.variable":{color:"#006d6d"},"token.tab:not(:empty):before":{color:"#3c526d"},"token.cr:before":{color:"#3c526d"},"token.lf:before":{color:"#3c526d"},"token.space:before":{color:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{color:"#e3eaf2",background:"#005a8e"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{color:"#e3eaf2",background:"#005a8e"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{color:"#e3eaf2",background:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{color:"#e3eaf2",background:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{color:"#e3eaf2",background:"#3c526d"},".line-highlight.line-highlight":{background:"linear-gradient(to right, #8da1b92f 70%, #8da1b925)"},".line-highlight.line-highlight:before":{backgroundColor:"#3c526d",color:"#e3eaf2",boxShadow:"0 1px #8da1b9"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"#3c526d",color:"#e3eaf2",boxShadow:"0 1px #8da1b9"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"#3c526d1f"},".line-numbers.line-numbers .line-numbers-rows":{borderRight:"1px solid #8da1b97a",background:"#d0dae77a"},".line-numbers .line-numbers-rows > span:before":{color:"#3c526dda"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"#7c00aa"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"#7c00aa"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"#7c00aa"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"#c22f2e1f"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"#c22f2e1f"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"#116b001f"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"#116b001f"},".command-line .command-line-prompt":{borderRight:"1px solid #8da1b97a"},".command-line .command-line-prompt > span:before":{color:"#3c526dda"}};e.default=t}(pc)),pc}var fc={},Jm;function Zj(){return Jm||(Jm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#e3eaf2",background:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#e3eaf2",background:"#111b27",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{background:"#3c526d"},'pre[class*="language-"] ::-moz-selection':{background:"#3c526d"},'code[class*="language-"]::-moz-selection':{background:"#3c526d"},'code[class*="language-"] ::-moz-selection':{background:"#3c526d"},'pre[class*="language-"]::selection':{background:"#3c526d"},'pre[class*="language-"] ::selection':{background:"#3c526d"},'code[class*="language-"]::selection':{background:"#3c526d"},'code[class*="language-"] ::selection':{background:"#3c526d"},':not(pre) > code[class*="language-"]':{background:"#111b27",padding:"0.1em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#8da1b9"},prolog:{color:"#8da1b9"},doctype:{color:"#8da1b9"},cdata:{color:"#8da1b9"},punctuation:{color:"#e3eaf2"},"delimiter.important":{color:"#66cccc",fontWeight:"inherit"},"selector.parent":{color:"#66cccc"},tag:{color:"#66cccc"},"tag.punctuation":{color:"#66cccc"},"attr-name":{color:"#e6d37a"},boolean:{color:"#e6d37a"},"boolean.important":{color:"#e6d37a"},number:{color:"#e6d37a"},constant:{color:"#e6d37a"},"selector.attribute":{color:"#e6d37a"},"class-name":{color:"#6cb8e6"},key:{color:"#6cb8e6"},parameter:{color:"#6cb8e6"},property:{color:"#6cb8e6"},"property-access":{color:"#6cb8e6"},variable:{color:"#6cb8e6"},"attr-value":{color:"#91d076"},inserted:{color:"#91d076"},color:{color:"#91d076"},"selector.value":{color:"#91d076"},string:{color:"#91d076"},"string.url-link":{color:"#91d076"},builtin:{color:"#f4adf4"},"keyword-array":{color:"#f4adf4"},package:{color:"#f4adf4"},regex:{color:"#f4adf4"},function:{color:"#c699e3"},"selector.class":{color:"#c699e3"},"selector.id":{color:"#c699e3"},"atrule.rule":{color:"#e9ae7e"},combinator:{color:"#e9ae7e"},keyword:{color:"#e9ae7e"},operator:{color:"#e9ae7e"},"pseudo-class":{color:"#e9ae7e"},"pseudo-element":{color:"#e9ae7e"},selector:{color:"#e9ae7e"},unit:{color:"#e9ae7e"},deleted:{color:"#cd6660"},important:{color:"#cd6660",fontWeight:"bold"},"keyword-this":{color:"#6cb8e6",fontWeight:"bold"},this:{color:"#6cb8e6",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},entity:{cursor:"help"},".language-markdown .token.title":{color:"#6cb8e6",fontWeight:"bold"},".language-markdown .token.title .token.punctuation":{color:"#6cb8e6",fontWeight:"bold"},".language-markdown .token.blockquote.punctuation":{color:"#f4adf4"},".language-markdown .token.code":{color:"#66cccc"},".language-markdown .token.hr.punctuation":{color:"#6cb8e6"},".language-markdown .token.url .token.content":{color:"#91d076"},".language-markdown .token.url-link":{color:"#e6d37a"},".language-markdown .token.list.punctuation":{color:"#f4adf4"},".language-markdown .token.table-header":{color:"#e3eaf2"},".language-json .token.operator":{color:"#e3eaf2"},".language-scss .token.variable":{color:"#66cccc"},"token.tab:not(:empty):before":{color:"#8da1b9"},"token.cr:before":{color:"#8da1b9"},"token.lf:before":{color:"#8da1b9"},"token.space:before":{color:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{color:"#111b27",background:"#6cb8e6"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{color:"#111b27",background:"#6cb8e6"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{color:"#111b27",background:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{color:"#111b27",background:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{color:"#111b27",background:"#8da1b9"},".line-highlight.line-highlight":{background:"linear-gradient(to right, #3c526d5f 70%, #3c526d55)"},".line-highlight.line-highlight:before":{backgroundColor:"#8da1b9",color:"#111b27",boxShadow:"0 1px #3c526d"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"#8da1b9",color:"#111b27",boxShadow:"0 1px #3c526d"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"#8da1b918"},".line-numbers.line-numbers .line-numbers-rows":{borderRight:"1px solid #0b121b",background:"#0b121b7a"},".line-numbers .line-numbers-rows > span:before":{color:"#8da1b9da"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"#c699e3"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"#c699e3"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"#c699e3"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"#cd66601f"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"#cd66601f"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"#91d0761f"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"#91d0761f"},".command-line .command-line-prompt":{borderRight:"1px solid #0b121b"},".command-line .command-line-prompt > span:before":{color:"#8da1b9da"}};e.default=t}(fc)),fc}var hc={},Xm;function eR(){return Xm||(Xm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0 0 0 #358ccb, 0 0 0 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local",margin:".5em 0",padding:"0 1em"},'pre[class*="language-"] > code':{display:"block"},':not(pre) > code[class*="language-"]':{position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:".7"}};e.default=t}(hc)),hc}var mc={},Zm;function tR(){return Zm||(Zm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag.punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value.punctuation":{color:"#a5c261"},"attr-value.punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}};e.default=t}(mc)),mc}var gc={},eg;function nR(){return eg||(eg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#282a36",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#282a36",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#6272a4"},prolog:{color:"#6272a4"},doctype:{color:"#6272a4"},cdata:{color:"#6272a4"},punctuation:{color:"#f8f8f2"},".namespace":{Opacity:".7"},property:{color:"#ff79c6"},tag:{color:"#ff79c6"},constant:{color:"#ff79c6"},symbol:{color:"#ff79c6"},deleted:{color:"#ff79c6"},boolean:{color:"#bd93f9"},number:{color:"#bd93f9"},selector:{color:"#50fa7b"},"attr-name":{color:"#50fa7b"},string:{color:"#50fa7b"},char:{color:"#50fa7b"},builtin:{color:"#50fa7b"},inserted:{color:"#50fa7b"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#f1fa8c"},"attr-value":{color:"#f1fa8c"},function:{color:"#f1fa8c"},"class-name":{color:"#f1fa8c"},keyword:{color:"#8be9fd"},regex:{color:"#ffb86c"},important:{color:"#ffb86c",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(gc)),gc}var _c={},tg;function oR(){return tg||(tg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#6c6783"},prolog:{color:"#6c6783"},doctype:{color:"#6c6783"},cdata:{color:"#6c6783"},punctuation:{color:"#6c6783"},namespace:{Opacity:".7"},tag:{color:"#e09142"},operator:{color:"#e09142"},number:{color:"#e09142"},property:{color:"#9a86fd"},function:{color:"#9a86fd"},"tag-id":{color:"#eeebff"},selector:{color:"#eeebff"},"atrule-id":{color:"#eeebff"},"code.language-javascript":{color:"#c4b9fe"},"attr-name":{color:"#c4b9fe"},"code.language-css":{color:"#ffcc99"},"code.language-scss":{color:"#ffcc99"},boolean:{color:"#ffcc99"},string:{color:"#ffcc99"},entity:{color:"#ffcc99",cursor:"help"},url:{color:"#ffcc99"},".language-css .token.string":{color:"#ffcc99"},".language-scss .token.string":{color:"#ffcc99"},".style .token.string":{color:"#ffcc99"},"attr-value":{color:"#ffcc99"},keyword:{color:"#ffcc99"},control:{color:"#ffcc99"},directive:{color:"#ffcc99"},unit:{color:"#ffcc99"},statement:{color:"#ffcc99"},regex:{color:"#ffcc99"},atrule:{color:"#ffcc99"},placeholder:{color:"#ffcc99"},variable:{color:"#ffcc99"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #eeebff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#c4b9fe"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #8a75f5",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#2c2937"},".line-numbers .line-numbers-rows > span:before":{color:"#3c3949"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"}};e.default=t}(_c)),_c}var vc={},ng;function rR(){return ng||(ng=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#322d29",color:"#88786d"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#322d29",color:"#88786d",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"]::selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#6f5849"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#6a5f58"},prolog:{color:"#6a5f58"},doctype:{color:"#6a5f58"},cdata:{color:"#6a5f58"},punctuation:{color:"#6a5f58"},namespace:{Opacity:".7"},tag:{color:"#bfa05a"},operator:{color:"#bfa05a"},number:{color:"#bfa05a"},property:{color:"#88786d"},function:{color:"#88786d"},"tag-id":{color:"#fff3eb"},selector:{color:"#fff3eb"},"atrule-id":{color:"#fff3eb"},"code.language-javascript":{color:"#a48774"},"attr-name":{color:"#a48774"},"code.language-css":{color:"#fcc440"},"code.language-scss":{color:"#fcc440"},boolean:{color:"#fcc440"},string:{color:"#fcc440"},entity:{color:"#fcc440",cursor:"help"},url:{color:"#fcc440"},".language-css .token.string":{color:"#fcc440"},".language-scss .token.string":{color:"#fcc440"},".style .token.string":{color:"#fcc440"},"attr-value":{color:"#fcc440"},keyword:{color:"#fcc440"},control:{color:"#fcc440"},directive:{color:"#fcc440"},unit:{color:"#fcc440"},statement:{color:"#fcc440"},regex:{color:"#fcc440"},atrule:{color:"#fcc440"},placeholder:{color:"#fcc440"},variable:{color:"#fcc440"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #fff3eb",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#a48774"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #816d5f",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#35302b"},".line-numbers .line-numbers-rows > span:before":{color:"#46403d"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"}};e.default=t}(vc)),vc}var bc={},og;function aR(){return og||(og=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2d2a",color:"#687d68"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2d2a",color:"#687d68",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#435643"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#435643"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#435643"},'code[class*="language-"]::selection':{textShadow:"none",background:"#435643"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#435643"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#535f53"},prolog:{color:"#535f53"},doctype:{color:"#535f53"},cdata:{color:"#535f53"},punctuation:{color:"#535f53"},namespace:{Opacity:".7"},tag:{color:"#a2b34d"},operator:{color:"#a2b34d"},number:{color:"#a2b34d"},property:{color:"#687d68"},function:{color:"#687d68"},"tag-id":{color:"#f0fff0"},selector:{color:"#f0fff0"},"atrule-id":{color:"#f0fff0"},"code.language-javascript":{color:"#b3d6b3"},"attr-name":{color:"#b3d6b3"},"code.language-css":{color:"#e5fb79"},"code.language-scss":{color:"#e5fb79"},boolean:{color:"#e5fb79"},string:{color:"#e5fb79"},entity:{color:"#e5fb79",cursor:"help"},url:{color:"#e5fb79"},".language-css .token.string":{color:"#e5fb79"},".language-scss .token.string":{color:"#e5fb79"},".style .token.string":{color:"#e5fb79"},"attr-value":{color:"#e5fb79"},keyword:{color:"#e5fb79"},control:{color:"#e5fb79"},directive:{color:"#e5fb79"},unit:{color:"#e5fb79"},statement:{color:"#e5fb79"},regex:{color:"#e5fb79"},atrule:{color:"#e5fb79"},placeholder:{color:"#e5fb79"},variable:{color:"#e5fb79"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #f0fff0",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#b3d6b3"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #5c705c",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#2c302c"},".line-numbers .line-numbers-rows > span:before":{color:"#3b423b"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"}};e.default=t}(bc)),bc}var yc={},rg;function iR(){return rg||(rg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#b6ad9a"},prolog:{color:"#b6ad9a"},doctype:{color:"#b6ad9a"},cdata:{color:"#b6ad9a"},punctuation:{color:"#b6ad9a"},namespace:{Opacity:".7"},tag:{color:"#063289"},operator:{color:"#063289"},number:{color:"#063289"},property:{color:"#b29762"},function:{color:"#b29762"},"tag-id":{color:"#2d2006"},selector:{color:"#2d2006"},"atrule-id":{color:"#2d2006"},"code.language-javascript":{color:"#896724"},"attr-name":{color:"#896724"},"code.language-css":{color:"#728fcb"},"code.language-scss":{color:"#728fcb"},boolean:{color:"#728fcb"},string:{color:"#728fcb"},entity:{color:"#728fcb",cursor:"help"},url:{color:"#728fcb"},".language-css .token.string":{color:"#728fcb"},".language-scss .token.string":{color:"#728fcb"},".style .token.string":{color:"#728fcb"},"attr-value":{color:"#728fcb"},keyword:{color:"#728fcb"},control:{color:"#728fcb"},directive:{color:"#728fcb"},unit:{color:"#728fcb"},statement:{color:"#728fcb"},regex:{color:"#728fcb"},atrule:{color:"#728fcb"},placeholder:{color:"#93abdc"},variable:{color:"#93abdc"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #2d2006",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#896724"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #896724",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#ece8de"},".line-numbers .line-numbers-rows > span:before":{color:"#cdc4b1"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"}};e.default=t}(yc)),yc}var kc={},ag;function lR(){return ag||(ag=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#1d262f",color:"#57718e"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#1d262f",color:"#57718e",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"]::selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#004a9e"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#4a5f78"},prolog:{color:"#4a5f78"},doctype:{color:"#4a5f78"},cdata:{color:"#4a5f78"},punctuation:{color:"#4a5f78"},namespace:{Opacity:".7"},tag:{color:"#0aa370"},operator:{color:"#0aa370"},number:{color:"#0aa370"},property:{color:"#57718e"},function:{color:"#57718e"},"tag-id":{color:"#ebf4ff"},selector:{color:"#ebf4ff"},"atrule-id":{color:"#ebf4ff"},"code.language-javascript":{color:"#7eb6f6"},"attr-name":{color:"#7eb6f6"},"code.language-css":{color:"#47ebb4"},"code.language-scss":{color:"#47ebb4"},boolean:{color:"#47ebb4"},string:{color:"#47ebb4"},entity:{color:"#47ebb4",cursor:"help"},url:{color:"#47ebb4"},".language-css .token.string":{color:"#47ebb4"},".language-scss .token.string":{color:"#47ebb4"},".style .token.string":{color:"#47ebb4"},"attr-value":{color:"#47ebb4"},keyword:{color:"#47ebb4"},control:{color:"#47ebb4"},directive:{color:"#47ebb4"},unit:{color:"#47ebb4"},statement:{color:"#47ebb4"},regex:{color:"#47ebb4"},atrule:{color:"#47ebb4"},placeholder:{color:"#47ebb4"},variable:{color:"#47ebb4"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #ebf4ff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#7eb6f6"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #34659d",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#1f2932"},".line-numbers .line-numbers-rows > span:before":{color:"#2c3847"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"}};e.default=t}(kc)),kc}var wc={},ig;function sR(){return ig||(ig=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#24242e",color:"#767693"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#24242e",color:"#767693",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"]::selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#5151e6"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#5b5b76"},prolog:{color:"#5b5b76"},doctype:{color:"#5b5b76"},cdata:{color:"#5b5b76"},punctuation:{color:"#5b5b76"},namespace:{Opacity:".7"},tag:{color:"#dd672c"},operator:{color:"#dd672c"},number:{color:"#dd672c"},property:{color:"#767693"},function:{color:"#767693"},"tag-id":{color:"#ebebff"},selector:{color:"#ebebff"},"atrule-id":{color:"#ebebff"},"code.language-javascript":{color:"#aaaaca"},"attr-name":{color:"#aaaaca"},"code.language-css":{color:"#fe8c52"},"code.language-scss":{color:"#fe8c52"},boolean:{color:"#fe8c52"},string:{color:"#fe8c52"},entity:{color:"#fe8c52",cursor:"help"},url:{color:"#fe8c52"},".language-css .token.string":{color:"#fe8c52"},".language-scss .token.string":{color:"#fe8c52"},".style .token.string":{color:"#fe8c52"},"attr-value":{color:"#fe8c52"},keyword:{color:"#fe8c52"},control:{color:"#fe8c52"},directive:{color:"#fe8c52"},unit:{color:"#fe8c52"},statement:{color:"#fe8c52"},regex:{color:"#fe8c52"},atrule:{color:"#fe8c52"},placeholder:{color:"#fe8c52"},variable:{color:"#fe8c52"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #ebebff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#aaaaca"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #7676f4",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#262631"},".line-numbers .line-numbers-rows > span:before":{color:"#393949"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"}};e.default=t}(wc)),wc}var xc={},lg;function cR(){return lg||(lg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:"1px solid #dddddd",backgroundColor:"white"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{background:"#b3d4fc"},'pre[class*="language-"]::selection':{background:"#b3d4fc"},'pre[class*="language-"] ::selection':{background:"#b3d4fc"},'code[class*="language-"]::selection':{background:"#b3d4fc"},'code[class*="language-"] ::selection':{background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{padding:".2em",paddingTop:"1px",paddingBottom:"1px",background:"#f8f8f8",border:"1px solid #dddddd"},comment:{color:"#999988",fontStyle:"italic"},prolog:{color:"#999988",fontStyle:"italic"},doctype:{color:"#999988",fontStyle:"italic"},cdata:{color:"#999988",fontStyle:"italic"},namespace:{Opacity:".7"},string:{color:"#e3116c"},"attr-value":{color:"#e3116c"},punctuation:{color:"#393A34"},operator:{color:"#393A34"},entity:{color:"#36acaa"},url:{color:"#36acaa"},symbol:{color:"#36acaa"},number:{color:"#36acaa"},boolean:{color:"#36acaa"},variable:{color:"#36acaa"},constant:{color:"#36acaa"},property:{color:"#36acaa"},regex:{color:"#36acaa"},inserted:{color:"#36acaa"},atrule:{color:"#00a4db"},keyword:{color:"#00a4db"},"attr-name":{color:"#00a4db"},".language-autohotkey .token.selector":{color:"#00a4db"},function:{color:"#9a050f",fontWeight:"bold"},deleted:{color:"#9a050f"},".language-autohotkey .token.tag":{color:"#9a050f"},tag:{color:"#00009f"},selector:{color:"#00009f"},".language-autohotkey .token.keyword":{color:"#00009f"},important:{fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(xc)),xc}var Sc={},sg;function uR(){return sg||(sg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#ebdbb2",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ebdbb2",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#1d2021"},'pre[class*="language-"]::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"] ::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"]::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"] ::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"]::selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"] ::selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"]::selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"] ::selection':{color:"#fbf1c7",background:"#7c6f64"},':not(pre) > code[class*="language-"]':{background:"#1d2021",padding:"0.1em",borderRadius:"0.3em"},comment:{color:"#a89984"},prolog:{color:"#a89984"},cdata:{color:"#a89984"},delimiter:{color:"#fb4934"},boolean:{color:"#fb4934"},keyword:{color:"#fb4934"},selector:{color:"#fb4934"},important:{color:"#fb4934"},atrule:{color:"#fb4934"},operator:{color:"#a89984"},punctuation:{color:"#a89984"},"attr-name":{color:"#a89984"},tag:{color:"#fabd2f"},"tag.punctuation":{color:"#fabd2f"},doctype:{color:"#fabd2f"},builtin:{color:"#fabd2f"},entity:{color:"#d3869b"},number:{color:"#d3869b"},symbol:{color:"#d3869b"},property:{color:"#fb4934"},constant:{color:"#fb4934"},variable:{color:"#fb4934"},string:{color:"#b8bb26"},char:{color:"#b8bb26"},"attr-value":{color:"#a89984"},"attr-value.punctuation":{color:"#a89984"},url:{color:"#b8bb26",textDecoration:"underline"},function:{color:"#fabd2f"},regex:{background:"#b8bb26"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#a89984"},deleted:{background:"#fb4934"}};e.default=t}(Sc)),Sc}var Cc={},cg;function dR(){return cg||(cg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#3c3836",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#3c3836",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#f9f5d7"},'pre[class*="language-"]::-moz-selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"] ::-moz-selection':{color:"#282828",background:"#a89984"},'code[class*="language-"]::-moz-selection':{color:"#282828",background:"#a89984"},'code[class*="language-"] ::-moz-selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"]::selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"] ::selection':{color:"#282828",background:"#a89984"},'code[class*="language-"]::selection':{color:"#282828",background:"#a89984"},'code[class*="language-"] ::selection':{color:"#282828",background:"#a89984"},':not(pre) > code[class*="language-"]':{background:"#f9f5d7",padding:"0.1em",borderRadius:"0.3em"},comment:{color:"#7c6f64"},prolog:{color:"#7c6f64"},cdata:{color:"#7c6f64"},delimiter:{color:"#9d0006"},boolean:{color:"#9d0006"},keyword:{color:"#9d0006"},selector:{color:"#9d0006"},important:{color:"#9d0006"},atrule:{color:"#9d0006"},operator:{color:"#7c6f64"},punctuation:{color:"#7c6f64"},"attr-name":{color:"#7c6f64"},tag:{color:"#b57614"},"tag.punctuation":{color:"#b57614"},doctype:{color:"#b57614"},builtin:{color:"#b57614"},entity:{color:"#8f3f71"},number:{color:"#8f3f71"},symbol:{color:"#8f3f71"},property:{color:"#9d0006"},constant:{color:"#9d0006"},variable:{color:"#9d0006"},string:{color:"#797403"},char:{color:"#797403"},"attr-value":{color:"#7c6f64"},"attr-value.punctuation":{color:"#7c6f64"},url:{color:"#797403",textDecoration:"underline"},function:{color:"#b57614"},regex:{background:"#797403"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#7c6f64"},deleted:{background:"#9d0006"}};e.default=t}(Cc)),Cc}var Ec={},ug;function pR(){return ug||(ug=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={"code[class*='language-']":{color:"#d6e7ff",background:"#030314",textShadow:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:"1em",lineHeight:"1.5",letterSpacing:".2px",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",textAlign:"left",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},"pre[class*='language-']":{color:"#d6e7ff",background:"#030314",textShadow:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:"1em",lineHeight:"1.5",letterSpacing:".2px",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",textAlign:"left",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",border:"1px solid #2a4555",borderRadius:"5px",padding:"1.5em 1em",margin:"1em 0",overflow:"auto"},"pre[class*='language-']::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-'] ::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-']::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-'] ::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-']::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-'] ::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-']::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-'] ::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},":not(pre) > code[class*='language-']":{color:"#f0f6f6",background:"#2a4555",padding:"0.2em 0.3em",borderRadius:"0.2em",boxDecorationBreak:"clone"},comment:{color:"#446e69"},prolog:{color:"#446e69"},doctype:{color:"#446e69"},cdata:{color:"#446e69"},punctuation:{color:"#d6b007"},property:{color:"#d6e7ff"},tag:{color:"#d6e7ff"},boolean:{color:"#d6e7ff"},number:{color:"#d6e7ff"},constant:{color:"#d6e7ff"},symbol:{color:"#d6e7ff"},deleted:{color:"#d6e7ff"},selector:{color:"#e60067"},"attr-name":{color:"#e60067"},builtin:{color:"#e60067"},inserted:{color:"#e60067"},string:{color:"#49c6ec"},char:{color:"#49c6ec"},operator:{color:"#ec8e01",background:"transparent"},entity:{color:"#ec8e01",background:"transparent"},url:{color:"#ec8e01",background:"transparent"},".language-css .token.string":{color:"#ec8e01",background:"transparent"},".style .token.string":{color:"#ec8e01",background:"transparent"},atrule:{color:"#0fe468"},"attr-value":{color:"#0fe468"},keyword:{color:"#0fe468"},function:{color:"#78f3e9"},"class-name":{color:"#78f3e9"},regex:{color:"#d6e7ff"},important:{color:"#d6e7ff"},variable:{color:"#d6e7ff"}};e.default=t}(Ec)),Ec}var Tc={},dg;function fR(){return dg||(dg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',fontSize:"16px",lineHeight:"1.375",direction:"ltr",textAlign:"left",wordSpacing:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",background:"#322931",color:"#b9b5b8"},'pre[class*="language-"]':{fontFamily:'"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',fontSize:"16px",lineHeight:"1.375",direction:"ltr",textAlign:"left",wordSpacing:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",background:"#322931",color:"#b9b5b8",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#797379"},prolog:{color:"#797379"},doctype:{color:"#797379"},cdata:{color:"#797379"},punctuation:{color:"#b9b5b8"},".namespace":{Opacity:".7"},null:{color:"#fd8b19"},operator:{color:"#fd8b19"},boolean:{color:"#fd8b19"},number:{color:"#fd8b19"},property:{color:"#fdcc59"},tag:{color:"#1290bf"},string:{color:"#149b93"},selector:{color:"#c85e7c"},"attr-name":{color:"#fd8b19"},entity:{color:"#149b93",cursor:"help"},url:{color:"#149b93"},".language-css .token.string":{color:"#149b93"},".style .token.string":{color:"#149b93"},"attr-value":{color:"#8fc13e"},keyword:{color:"#8fc13e"},control:{color:"#8fc13e"},directive:{color:"#8fc13e"},unit:{color:"#8fc13e"},statement:{color:"#149b93"},regex:{color:"#149b93"},atrule:{color:"#149b93"},placeholder:{color:"#1290bf"},variable:{color:"#1290bf"},important:{color:"#dd464c",fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid red",OutlineOffset:".4em"}};e.default=t}(Tc)),Tc}var Ac={},pg;function hR(){return pg||(pg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#263E52",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#263E52",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#5c98cd"},prolog:{color:"#5c98cd"},doctype:{color:"#5c98cd"},cdata:{color:"#5c98cd"},punctuation:{color:"#f8f8f2"},".namespace":{Opacity:".7"},property:{color:"#F05E5D"},tag:{color:"#F05E5D"},constant:{color:"#F05E5D"},symbol:{color:"#F05E5D"},deleted:{color:"#F05E5D"},boolean:{color:"#BC94F9"},number:{color:"#BC94F9"},selector:{color:"#FCFCD6"},"attr-name":{color:"#FCFCD6"},string:{color:"#FCFCD6"},char:{color:"#FCFCD6"},builtin:{color:"#FCFCD6"},inserted:{color:"#FCFCD6"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#66D8EF"},"attr-value":{color:"#66D8EF"},function:{color:"#66D8EF"},"class-name":{color:"#66D8EF"},keyword:{color:"#6EB26E"},regex:{color:"#F05E5D"},important:{color:"#F05E5D",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Ac)),Ac}var Pc={},fg;function mR(){return fg||(fg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#eee",background:"#2f2f2f",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#eee",background:"#2f2f2f",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#363636"},'pre[class*="language-"]::-moz-selection':{background:"#363636"},'code[class*="language-"] ::-moz-selection':{background:"#363636"},'pre[class*="language-"] ::-moz-selection':{background:"#363636"},'code[class*="language-"]::selection':{background:"#363636"},'pre[class*="language-"]::selection':{background:"#363636"},'code[class*="language-"] ::selection':{background:"#363636"},'pre[class*="language-"] ::selection':{background:"#363636"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#fd9170"},".language-sass > code":{color:"#fd9170"},".language-scss > code":{color:"#fd9170"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#c792ea"},"attr-name":{color:"#ffcb6b"},"attr-value":{color:"#a5e844"},attribute:{color:"#a5e844"},boolean:{color:"#c792ea"},builtin:{color:"#ffcb6b"},cdata:{color:"#80cbc4"},char:{color:"#80cbc4"},class:{color:"#ffcb6b"},"class-name":{color:"#f2ff00"},comment:{color:"#616161"},constant:{color:"#c792ea"},deleted:{color:"#ff6666"},doctype:{color:"#616161"},entity:{color:"#ff6666"},function:{color:"#c792ea"},hexcode:{color:"#f2ff00"},id:{color:"#c792ea",fontWeight:"bold"},important:{color:"#c792ea",fontWeight:"bold"},inserted:{color:"#80cbc4"},keyword:{color:"#c792ea"},number:{color:"#fd9170"},operator:{color:"#89ddff"},prolog:{color:"#616161"},property:{color:"#80cbc4"},"pseudo-class":{color:"#a5e844"},"pseudo-element":{color:"#a5e844"},punctuation:{color:"#89ddff"},regex:{color:"#f2ff00"},selector:{color:"#ff6666"},string:{color:"#a5e844"},symbol:{color:"#c792ea"},tag:{color:"#ff6666"},unit:{color:"#fd9170"},url:{color:"#ff6666"},variable:{color:"#ff6666"}};e.default=t}(Pc)),Pc}var jc={},hg;function gR(){return hg||(hg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#90a4ae",background:"#fafafa",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#90a4ae",background:"#fafafa",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"]::-moz-selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"] ::-moz-selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"] ::-moz-selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"]::selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"]::selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"] ::selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"] ::selection':{background:"#cceae7",color:"#263238"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#f76d47"},".language-sass > code":{color:"#f76d47"},".language-scss > code":{color:"#f76d47"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#7c4dff"},"attr-name":{color:"#39adb5"},"attr-value":{color:"#f6a434"},attribute:{color:"#f6a434"},boolean:{color:"#7c4dff"},builtin:{color:"#39adb5"},cdata:{color:"#39adb5"},char:{color:"#39adb5"},class:{color:"#39adb5"},"class-name":{color:"#6182b8"},comment:{color:"#aabfc9"},constant:{color:"#7c4dff"},deleted:{color:"#e53935"},doctype:{color:"#aabfc9"},entity:{color:"#e53935"},function:{color:"#7c4dff"},hexcode:{color:"#f76d47"},id:{color:"#7c4dff",fontWeight:"bold"},important:{color:"#7c4dff",fontWeight:"bold"},inserted:{color:"#39adb5"},keyword:{color:"#7c4dff"},number:{color:"#f76d47"},operator:{color:"#39adb5"},prolog:{color:"#aabfc9"},property:{color:"#39adb5"},"pseudo-class":{color:"#f6a434"},"pseudo-element":{color:"#f6a434"},punctuation:{color:"#39adb5"},regex:{color:"#6182b8"},selector:{color:"#e53935"},string:{color:"#f6a434"},symbol:{color:"#7c4dff"},tag:{color:"#e53935"},unit:{color:"#f76d47"},url:{color:"#e53935"},variable:{color:"#e53935"}};e.default=t}(jc)),jc}var Rc={},mg;function _R(){return mg||(mg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#c3cee3",background:"#263238",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#c3cee3",background:"#263238",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#363636"},'pre[class*="language-"]::-moz-selection':{background:"#363636"},'code[class*="language-"] ::-moz-selection':{background:"#363636"},'pre[class*="language-"] ::-moz-selection':{background:"#363636"},'code[class*="language-"]::selection':{background:"#363636"},'pre[class*="language-"]::selection':{background:"#363636"},'code[class*="language-"] ::selection':{background:"#363636"},'pre[class*="language-"] ::selection':{background:"#363636"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#fd9170"},".language-sass > code":{color:"#fd9170"},".language-scss > code":{color:"#fd9170"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#c792ea"},"attr-name":{color:"#ffcb6b"},"attr-value":{color:"#c3e88d"},attribute:{color:"#c3e88d"},boolean:{color:"#c792ea"},builtin:{color:"#ffcb6b"},cdata:{color:"#80cbc4"},char:{color:"#80cbc4"},class:{color:"#ffcb6b"},"class-name":{color:"#f2ff00"},color:{color:"#f2ff00"},comment:{color:"#546e7a"},constant:{color:"#c792ea"},deleted:{color:"#f07178"},doctype:{color:"#546e7a"},entity:{color:"#f07178"},function:{color:"#c792ea"},hexcode:{color:"#f2ff00"},id:{color:"#c792ea",fontWeight:"bold"},important:{color:"#c792ea",fontWeight:"bold"},inserted:{color:"#80cbc4"},keyword:{color:"#c792ea",fontStyle:"italic"},number:{color:"#fd9170"},operator:{color:"#89ddff"},prolog:{color:"#546e7a"},property:{color:"#80cbc4"},"pseudo-class":{color:"#c3e88d"},"pseudo-element":{color:"#c3e88d"},punctuation:{color:"#89ddff"},regex:{color:"#f2ff00"},selector:{color:"#f07178"},string:{color:"#c3e88d"},symbol:{color:"#c792ea"},tag:{color:"#f07178"},unit:{color:"#f07178"},url:{color:"#fd9170"},variable:{color:"#f07178"}};e.default=t}(Rc)),Rc}var Mc={},gg;function vR(){return gg||(gg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#d6deeb",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",fontSize:"1em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",fontSize:"1em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#011627"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},':not(pre) > code[class*="language-"]':{color:"white",background:"#011627",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"rgb(99, 119, 119)",fontStyle:"italic"},prolog:{color:"rgb(99, 119, 119)",fontStyle:"italic"},cdata:{color:"rgb(99, 119, 119)",fontStyle:"italic"},punctuation:{color:"rgb(199, 146, 234)"},".namespace":{color:"rgb(178, 204, 214)"},deleted:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"},symbol:{color:"rgb(128, 203, 196)"},property:{color:"rgb(128, 203, 196)"},tag:{color:"rgb(127, 219, 202)"},operator:{color:"rgb(127, 219, 202)"},keyword:{color:"rgb(127, 219, 202)"},boolean:{color:"rgb(255, 88, 116)"},number:{color:"rgb(247, 140, 108)"},constant:{color:"rgb(130, 170, 255)"},function:{color:"rgb(130, 170, 255)"},builtin:{color:"rgb(130, 170, 255)"},char:{color:"rgb(130, 170, 255)"},selector:{color:"rgb(199, 146, 234)",fontStyle:"italic"},doctype:{color:"rgb(199, 146, 234)",fontStyle:"italic"},"attr-name":{color:"rgb(173, 219, 103)",fontStyle:"italic"},inserted:{color:"rgb(173, 219, 103)",fontStyle:"italic"},string:{color:"rgb(173, 219, 103)"},url:{color:"rgb(173, 219, 103)"},entity:{color:"rgb(173, 219, 103)"},".language-css .token.string":{color:"rgb(173, 219, 103)"},".style .token.string":{color:"rgb(173, 219, 103)"},"class-name":{color:"rgb(255, 203, 139)"},atrule:{color:"rgb(255, 203, 139)"},"attr-value":{color:"rgb(255, 203, 139)"},regex:{color:"rgb(214, 222, 235)"},important:{color:"rgb(214, 222, 235)",fontWeight:"bold"},variable:{color:"rgb(214, 222, 235)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Mc)),Mc}var Lc={},_g;function bR(){return _g||(_g=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:`"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2E3440",fontFamily:`"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2E3440",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#636f88"},prolog:{color:"#636f88"},doctype:{color:"#636f88"},cdata:{color:"#636f88"},punctuation:{color:"#81A1C1"},".namespace":{Opacity:".7"},property:{color:"#81A1C1"},tag:{color:"#81A1C1"},constant:{color:"#81A1C1"},symbol:{color:"#81A1C1"},deleted:{color:"#81A1C1"},number:{color:"#B48EAD"},boolean:{color:"#81A1C1"},selector:{color:"#A3BE8C"},"attr-name":{color:"#A3BE8C"},string:{color:"#A3BE8C"},char:{color:"#A3BE8C"},builtin:{color:"#A3BE8C"},inserted:{color:"#A3BE8C"},operator:{color:"#81A1C1"},entity:{color:"#81A1C1",cursor:"help"},url:{color:"#81A1C1"},".language-css .token.string":{color:"#81A1C1"},".style .token.string":{color:"#81A1C1"},variable:{color:"#81A1C1"},atrule:{color:"#88C0D0"},"attr-value":{color:"#88C0D0"},function:{color:"#88C0D0"},"class-name":{color:"#88C0D0"},keyword:{color:"#81A1C1"},regex:{color:"#EBCB8B"},important:{color:"#EBCB8B",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Lc)),Lc}var Dc={},vg;function yR(){return vg||(vg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"]::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},prolog:{color:"hsl(220, 10%, 40%)"},cdata:{color:"hsl(220, 10%, 40%)"},doctype:{color:"hsl(220, 14%, 71%)"},punctuation:{color:"hsl(220, 14%, 71%)"},entity:{color:"hsl(220, 14%, 71%)",cursor:"help"},"attr-name":{color:"hsl(29, 54%, 61%)"},"class-name":{color:"hsl(29, 54%, 61%)"},boolean:{color:"hsl(29, 54%, 61%)"},constant:{color:"hsl(29, 54%, 61%)"},number:{color:"hsl(29, 54%, 61%)"},atrule:{color:"hsl(29, 54%, 61%)"},keyword:{color:"hsl(286, 60%, 67%)"},property:{color:"hsl(355, 65%, 65%)"},tag:{color:"hsl(355, 65%, 65%)"},symbol:{color:"hsl(355, 65%, 65%)"},deleted:{color:"hsl(355, 65%, 65%)"},important:{color:"hsl(355, 65%, 65%)"},selector:{color:"hsl(95, 38%, 62%)"},string:{color:"hsl(95, 38%, 62%)"},char:{color:"hsl(95, 38%, 62%)"},builtin:{color:"hsl(95, 38%, 62%)"},inserted:{color:"hsl(95, 38%, 62%)"},regex:{color:"hsl(95, 38%, 62%)"},"attr-value":{color:"hsl(95, 38%, 62%)"},"attr-value > .token.punctuation":{color:"hsl(95, 38%, 62%)"},variable:{color:"hsl(207, 82%, 66%)"},operator:{color:"hsl(207, 82%, 66%)"},function:{color:"hsl(207, 82%, 66%)"},url:{color:"hsl(187, 47%, 55%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(220, 14%, 71%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(220, 14%, 71%)"},".language-css .token.selector":{color:"hsl(355, 65%, 65%)"},".language-css .token.property":{color:"hsl(220, 14%, 71%)"},".language-css .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.string.url":{color:"hsl(95, 38%, 62%)"},".language-css .token.important":{color:"hsl(286, 60%, 67%)"},".language-css .token.atrule .token.rule":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.operator":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(5, 48%, 51%)"},".language-json .token.operator":{color:"hsl(220, 14%, 71%)"},".language-json .token.null.keyword":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.url":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.operator":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.content":{color:"hsl(207, 82%, 66%)"},".language-markdown .token.url > .token.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.url-reference.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(95, 38%, 62%)"},".language-markdown .token.bold .token.content":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.italic .token.content":{color:"hsl(286, 60%, 67%)"},".language-markdown .token.strike .token.content":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.list.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(355, 65%, 65%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.cr:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.lf:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.space:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},".line-highlight.line-highlight":{background:"hsla(220, 100%, 80%, 0.04)"},".line-highlight.line-highlight:before":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(220, 100%, 80%, 0.04)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".command-line .command-line-prompt":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(220, 14%, 45%)"},".command-line .command-line-prompt > span:before":{color:"hsl(220, 14%, 45%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(286, 60%, 67%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(224, 13%, 17%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(224, 13%, 17%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(224, 13%, 17%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(224, 13%, 17%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(219, 13%, 22%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(220, 14%, 71%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(220, 14%, 71%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(220, 14%, 71%)"}};e.default=t}(Dc)),Dc}var Oc={},bg;function kR(){return bg||(bg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"]::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},prolog:{color:"hsl(230, 4%, 64%)"},cdata:{color:"hsl(230, 4%, 64%)"},doctype:{color:"hsl(230, 8%, 24%)"},punctuation:{color:"hsl(230, 8%, 24%)"},entity:{color:"hsl(230, 8%, 24%)",cursor:"help"},"attr-name":{color:"hsl(35, 99%, 36%)"},"class-name":{color:"hsl(35, 99%, 36%)"},boolean:{color:"hsl(35, 99%, 36%)"},constant:{color:"hsl(35, 99%, 36%)"},number:{color:"hsl(35, 99%, 36%)"},atrule:{color:"hsl(35, 99%, 36%)"},keyword:{color:"hsl(301, 63%, 40%)"},property:{color:"hsl(5, 74%, 59%)"},tag:{color:"hsl(5, 74%, 59%)"},symbol:{color:"hsl(5, 74%, 59%)"},deleted:{color:"hsl(5, 74%, 59%)"},important:{color:"hsl(5, 74%, 59%)"},selector:{color:"hsl(119, 34%, 47%)"},string:{color:"hsl(119, 34%, 47%)"},char:{color:"hsl(119, 34%, 47%)"},builtin:{color:"hsl(119, 34%, 47%)"},inserted:{color:"hsl(119, 34%, 47%)"},regex:{color:"hsl(119, 34%, 47%)"},"attr-value":{color:"hsl(119, 34%, 47%)"},"attr-value > .token.punctuation":{color:"hsl(119, 34%, 47%)"},variable:{color:"hsl(221, 87%, 60%)"},operator:{color:"hsl(221, 87%, 60%)"},function:{color:"hsl(221, 87%, 60%)"},url:{color:"hsl(198, 99%, 37%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(230, 8%, 24%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(230, 8%, 24%)"},".language-css .token.selector":{color:"hsl(5, 74%, 59%)"},".language-css .token.property":{color:"hsl(230, 8%, 24%)"},".language-css .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.string.url":{color:"hsl(119, 34%, 47%)"},".language-css .token.important":{color:"hsl(301, 63%, 40%)"},".language-css .token.atrule .token.rule":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.operator":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(344, 84%, 43%)"},".language-json .token.operator":{color:"hsl(230, 8%, 24%)"},".language-json .token.null.keyword":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.url":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.operator":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.content":{color:"hsl(221, 87%, 60%)"},".language-markdown .token.url > .token.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.url-reference.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(119, 34%, 47%)"},".language-markdown .token.bold .token.content":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.italic .token.content":{color:"hsl(301, 63%, 40%)"},".language-markdown .token.strike .token.content":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.list.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(5, 74%, 59%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.cr:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.lf:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.space:before":{color:"hsla(230, 8%, 24%, 0.2)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},".line-highlight.line-highlight":{background:"hsla(230, 8%, 24%, 0.05)"},".line-highlight.line-highlight:before":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(230, 8%, 24%, 0.05)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".command-line .command-line-prompt":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(230, 1%, 62%)"},".command-line .command-line-prompt > span:before":{color:"hsl(230, 1%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(301, 63%, 40%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(0, 0, 95%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(0, 0, 95%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(0, 0, 95%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(0, 0, 95%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(0, 0%, 100%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(230, 8%, 24%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(230, 8%, 24%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(230, 8%, 24%)"}};e.default=t}(Oc)),Oc}var zc={},yg;function wR(){return yg||(yg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"15px",lineHeight:"1.5",color:"#dccf8f",textShadow:"0"},'pre[class*="language-"]':{MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"15px",lineHeight:"1.5",color:"#DCCF8F",textShadow:"0",borderRadius:"5px",border:"1px solid #000",background:"#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",padding:"12px",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{borderRadius:"5px",border:"1px solid #000",color:"#DCCF8F",background:"#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",padding:"2px 6px"},namespace:{Opacity:".7"},comment:{color:"#586e75",fontStyle:"italic"},prolog:{color:"#586e75",fontStyle:"italic"},doctype:{color:"#586e75",fontStyle:"italic"},cdata:{color:"#586e75",fontStyle:"italic"},number:{color:"#b89859"},string:{color:"#468966"},char:{color:"#468966"},builtin:{color:"#468966"},inserted:{color:"#468966"},"attr-name":{color:"#b89859"},operator:{color:"#dccf8f"},entity:{color:"#dccf8f",cursor:"help"},url:{color:"#dccf8f"},".language-css .token.string":{color:"#dccf8f"},".style .token.string":{color:"#dccf8f"},selector:{color:"#859900"},regex:{color:"#859900"},atrule:{color:"#cb4b16"},keyword:{color:"#cb4b16"},"attr-value":{color:"#468966"},function:{color:"#b58900"},variable:{color:"#b58900"},placeholder:{color:"#b58900"},property:{color:"#b89859"},tag:{color:"#ffb03b"},boolean:{color:"#b89859"},constant:{color:"#b89859"},symbol:{color:"#b89859"},important:{color:"#dc322f"},statement:{color:"#dc322f"},deleted:{color:"#dc322f"},punctuation:{color:"#dccf8f"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(zc)),zc}var Ic={},kg;function xR(){return kg||(kg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={"code[class*='language-']":{color:"#9efeff",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",fontFamily:"'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontWeight:"400",fontSize:"17px",lineHeight:"25px",letterSpacing:"0.5px",textShadow:"0 1px #222245"},"pre[class*='language-']":{color:"#9efeff",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",fontFamily:"'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontWeight:"400",fontSize:"17px",lineHeight:"25px",letterSpacing:"0.5px",textShadow:"0 1px #222245",padding:"2em",margin:"0.5em 0",overflow:"auto",background:"#1e1e3f"},"pre[class*='language-']::-moz-selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-'] ::-moz-selection":{color:"inherit",background:"#a599e9"},"code[class*='language-']::-moz-selection":{color:"inherit",background:"#a599e9"},"code[class*='language-'] ::-moz-selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-']::selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-'] ::selection":{color:"inherit",background:"#a599e9"},"code[class*='language-']::selection":{color:"inherit",background:"#a599e9"},"code[class*='language-'] ::selection":{color:"inherit",background:"#a599e9"},":not(pre) > code[class*='language-']":{background:"#1e1e3f",padding:"0.1em",borderRadius:"0.3em"},"":{fontWeight:"400"},comment:{color:"#b362ff"},prolog:{color:"#b362ff"},cdata:{color:"#b362ff"},delimiter:{color:"#ff9d00"},keyword:{color:"#ff9d00"},selector:{color:"#ff9d00"},important:{color:"#ff9d00"},atrule:{color:"#ff9d00"},operator:{color:"rgb(255, 180, 84)",background:"none"},"attr-name":{color:"rgb(255, 180, 84)"},punctuation:{color:"#ffffff"},boolean:{color:"rgb(255, 98, 140)"},tag:{color:"rgb(255, 157, 0)"},"tag.punctuation":{color:"rgb(255, 157, 0)"},doctype:{color:"rgb(255, 157, 0)"},builtin:{color:"rgb(255, 157, 0)"},entity:{color:"#6897bb",background:"none"},symbol:{color:"#6897bb"},number:{color:"#ff628c"},property:{color:"#ff628c"},constant:{color:"#ff628c"},variable:{color:"#ff628c"},string:{color:"#a5ff90"},char:{color:"#a5ff90"},"attr-value":{color:"#a5c261"},"attr-value.punctuation":{color:"#a5c261"},"attr-value.punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline",background:"none"},function:{color:"rgb(250, 208, 0)"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#00ff00"},deleted:{background:"#ff000d"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"},"class-name":{color:"#fb94ff"},".language-css .token.string":{background:"none"},".style .token.string":{background:"none"},".line-highlight.line-highlight":{marginTop:"36px",background:"linear-gradient(to right, rgba(179, 98, 255, 0.17), transparent)"},".line-highlight.line-highlight:before":{content:"''"},".line-highlight.line-highlight[data-end]:after":{content:"''"}};e.default=t}(Ic)),Ic}var Fc={},wg;function SR(){return wg||(wg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#839496",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#839496",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#002b36"},':not(pre) > code[class*="language-"]':{background:"#002b36",padding:".1em",borderRadius:".3em"},comment:{color:"#586e75"},prolog:{color:"#586e75"},doctype:{color:"#586e75"},cdata:{color:"#586e75"},punctuation:{color:"#93a1a1"},".namespace":{Opacity:".7"},property:{color:"#268bd2"},keyword:{color:"#268bd2"},tag:{color:"#268bd2"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#b58900"},constant:{color:"#b58900"},symbol:{color:"#dc322f"},deleted:{color:"#dc322f"},number:{color:"#859900"},selector:{color:"#859900"},"attr-name":{color:"#859900"},string:{color:"#859900"},char:{color:"#859900"},builtin:{color:"#859900"},inserted:{color:"#859900"},variable:{color:"#268bd2"},operator:{color:"#EDEDED"},function:{color:"#268bd2"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"}};e.default=t}(Fc)),Fc}var Uc={},xg;function CR(){return xg||(xg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",backgroundColor:"transparent !important",backgroundImage:"linear-gradient(to bottom, #2a2139 75%, #34294f)"},':not(pre) > code[class*="language-"]':{backgroundColor:"transparent !important",backgroundImage:"linear-gradient(to bottom, #2a2139 75%, #34294f)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#8e8e8e"},"block-comment":{color:"#8e8e8e"},prolog:{color:"#8e8e8e"},doctype:{color:"#8e8e8e"},cdata:{color:"#8e8e8e"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},number:{color:"#e2777a"},unit:{color:"#e2777a"},hexcode:{color:"#e2777a"},deleted:{color:"#e2777a"},property:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"},selector:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"},"function-name":{color:"#6196cc"},boolean:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},"selector.id":{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},function:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},"class-name":{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"},constant:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},symbol:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},important:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",fontWeight:"bold"},atrule:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},keyword:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},"selector.class":{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},builtin:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},string:{color:"#f87c32"},char:{color:"#f87c32"},"attr-value":{color:"#f87c32"},regex:{color:"#f87c32"},variable:{color:"#f87c32"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}};e.default=t}(Uc)),Uc}var Nc={},Sg;function ER(){return Sg||(Sg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:"1px solid #dddddd",backgroundColor:"white"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{background:"#C1DEF1"},'pre[class*="language-"] ::-moz-selection':{background:"#C1DEF1"},'code[class*="language-"]::-moz-selection':{background:"#C1DEF1"},'code[class*="language-"] ::-moz-selection':{background:"#C1DEF1"},'pre[class*="language-"]::selection':{background:"#C1DEF1"},'pre[class*="language-"] ::selection':{background:"#C1DEF1"},'code[class*="language-"]::selection':{background:"#C1DEF1"},'code[class*="language-"] ::selection':{background:"#C1DEF1"},':not(pre) > code[class*="language-"]':{padding:".2em",paddingTop:"1px",paddingBottom:"1px",background:"#f8f8f8",border:"1px solid #dddddd"},comment:{color:"#008000",fontStyle:"italic"},prolog:{color:"#008000",fontStyle:"italic"},doctype:{color:"#008000",fontStyle:"italic"},cdata:{color:"#008000",fontStyle:"italic"},namespace:{Opacity:".7"},string:{color:"#A31515"},punctuation:{color:"#393A34"},operator:{color:"#393A34"},url:{color:"#36acaa"},symbol:{color:"#36acaa"},number:{color:"#36acaa"},boolean:{color:"#36acaa"},variable:{color:"#36acaa"},constant:{color:"#36acaa"},inserted:{color:"#36acaa"},atrule:{color:"#0000ff"},keyword:{color:"#0000ff"},"attr-value":{color:"#0000ff"},".language-autohotkey .token.selector":{color:"#0000ff"},".language-json .token.boolean":{color:"#0000ff"},".language-json .token.number":{color:"#0000ff"},'code[class*="language-css"]':{color:"#0000ff"},function:{color:"#393A34"},deleted:{color:"#9a050f"},".language-autohotkey .token.tag":{color:"#9a050f"},selector:{color:"#800000"},".language-autohotkey .token.keyword":{color:"#00009f"},important:{color:"#e90",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},"class-name":{color:"#2B91AF"},".language-json .token.property":{color:"#2B91AF"},tag:{color:"#800000"},"attr-name":{color:"#ff0000"},property:{color:"#ff0000"},regex:{color:"#ff0000"},entity:{color:"#ff0000"},"directive.tag.tag":{background:"#ffff00",color:"#393A34"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#a5a5a5"},".line-numbers .line-numbers-rows > span:before":{color:"#2B91AF"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"}};e.default=t}(Nc)),Nc}var Hc={},Cg;function TR(){return Cg||(Cg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};e.default=t}(Hc)),Hc}var Wc={},Eg;function AR(){return Eg||(Eg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordWrap:"normal",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"14px",color:"#76d9e6",textShadow:"none"},'pre[class*="language-"]':{MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordWrap:"normal",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"14px",color:"#76d9e6",textShadow:"none",background:"#2a2a2a",padding:"15px",borderRadius:"4px",border:"1px solid #e1e1e8",overflow:"auto",position:"relative"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{background:"#2a2a2a",padding:"0.15em 0.2em 0.05em",borderRadius:".3em",border:"0.13em solid #7a6652",boxShadow:"1px 1px 0.3em -0.1em #000 inset"},'pre[class*="language-"] code':{whiteSpace:"pre",display:"block"},namespace:{Opacity:".7"},comment:{color:"#6f705e"},prolog:{color:"#6f705e"},doctype:{color:"#6f705e"},cdata:{color:"#6f705e"},operator:{color:"#a77afe"},boolean:{color:"#a77afe"},number:{color:"#a77afe"},"attr-name":{color:"#e6d06c"},string:{color:"#e6d06c"},entity:{color:"#e6d06c",cursor:"help"},url:{color:"#e6d06c"},".language-css .token.string":{color:"#e6d06c"},".style .token.string":{color:"#e6d06c"},selector:{color:"#a6e22d"},inserted:{color:"#a6e22d"},atrule:{color:"#ef3b7d"},"attr-value":{color:"#ef3b7d"},keyword:{color:"#ef3b7d"},important:{color:"#ef3b7d",fontWeight:"bold"},deleted:{color:"#ef3b7d"},regex:{color:"#76d9e6"},statement:{color:"#76d9e6",fontWeight:"bold"},placeholder:{color:"#fff"},variable:{color:"#fff"},bold:{fontWeight:"bold"},punctuation:{color:"#bebec5"},italic:{fontStyle:"italic"},"code.language-markup":{color:"#f9f9f9"},"code.language-markup .token.tag":{color:"#ef3b7d"},"code.language-markup .token.attr-name":{color:"#a6e22d"},"code.language-markup .token.attr-value":{color:"#e6d06c"},"code.language-markup .token.style":{color:"#76d9e6"},"code.language-markup .token.script":{color:"#76d9e6"},"code.language-markup .token.script .token.keyword":{color:"#76d9e6"},".line-highlight.line-highlight":{padding:"0",background:"rgba(255, 255, 255, 0.08)"},".line-highlight.line-highlight:before":{padding:"0.2em 0.5em",backgroundColor:"rgba(255, 255, 255, 0.4)",color:"black",height:"1em",lineHeight:"1em",boxShadow:"0 1px 1px rgba(255, 255, 255, 0.7)"},".line-highlight.line-highlight[data-end]:after":{padding:"0.2em 0.5em",backgroundColor:"rgba(255, 255, 255, 0.4)",color:"black",height:"1em",lineHeight:"1em",boxShadow:"0 1px 1px rgba(255, 255, 255, 0.7)"}};e.default=t}(Wc)),Wc}var Bc={},Tg;function PR(){return Tg||(Tg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#22da17",fontFamily:"monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",lineHeight:"25px",fontSize:"18px",margin:"5px 0"},'pre[class*="language-"]':{color:"white",fontFamily:"monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",lineHeight:"25px",fontSize:"18px",margin:"0.5em 0",background:"#0a143c",padding:"1em",overflow:"auto"},'pre[class*="language-"] *':{fontFamily:"monospace"},':not(pre) > code[class*="language-"]':{color:"white",background:"#0a143c",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},comment:{color:"rgb(99, 119, 119)",fontStyle:"italic"},prolog:{color:"rgb(99, 119, 119)",fontStyle:"italic"},cdata:{color:"rgb(99, 119, 119)",fontStyle:"italic"},punctuation:{color:"rgb(199, 146, 234)"},".namespace":{color:"rgb(178, 204, 214)"},deleted:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"},symbol:{color:"rgb(128, 203, 196)"},property:{color:"rgb(128, 203, 196)"},tag:{color:"rgb(127, 219, 202)"},operator:{color:"rgb(127, 219, 202)"},keyword:{color:"rgb(127, 219, 202)"},boolean:{color:"rgb(255, 88, 116)"},number:{color:"rgb(247, 140, 108)"},constant:{color:"rgb(34 183 199)"},function:{color:"rgb(34 183 199)"},builtin:{color:"rgb(34 183 199)"},char:{color:"rgb(34 183 199)"},selector:{color:"rgb(199, 146, 234)",fontStyle:"italic"},doctype:{color:"rgb(199, 146, 234)",fontStyle:"italic"},"attr-name":{color:"rgb(173, 219, 103)",fontStyle:"italic"},inserted:{color:"rgb(173, 219, 103)",fontStyle:"italic"},string:{color:"rgb(173, 219, 103)"},url:{color:"rgb(173, 219, 103)"},entity:{color:"rgb(173, 219, 103)"},".language-css .token.string":{color:"rgb(173, 219, 103)"},".style .token.string":{color:"rgb(173, 219, 103)"},"class-name":{color:"rgb(255, 203, 139)"},atrule:{color:"rgb(255, 203, 139)"},"attr-value":{color:"rgb(255, 203, 139)"},regex:{color:"rgb(214, 222, 235)"},important:{color:"rgb(214, 222, 235)",fontWeight:"bold"},variable:{color:"rgb(214, 222, 235)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Bc)),Bc}(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"a11yDark",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"atomDark",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"base16AteliersulphurpoolLight",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"cb",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"coldarkCold",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"coldarkDark",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(e,"coy",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"coyWithoutShadows",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e,"darcula",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"dark",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"dracula",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"duotoneDark",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e,"duotoneEarth",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"duotoneForest",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"duotoneLight",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"duotoneSea",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e,"duotoneSpace",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(e,"funky",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"ghcolors",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e,"gruvboxDark",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(e,"gruvboxLight",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(e,"holiTheme",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(e,"hopscotch",{enumerable:!0,get:function(){return K.default}}),Object.defineProperty(e,"lucario",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(e,"materialDark",{enumerable:!0,get:function(){return X.default}}),Object.defineProperty(e,"materialLight",{enumerable:!0,get:function(){return ce.default}}),Object.defineProperty(e,"materialOceanic",{enumerable:!0,get:function(){return ee.default}}),Object.defineProperty(e,"nightOwl",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(e,"nord",{enumerable:!0,get:function(){return V.default}}),Object.defineProperty(e,"okaidia",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"oneDark",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"oneLight",{enumerable:!0,get:function(){return G.default}}),Object.defineProperty(e,"pojoaque",{enumerable:!0,get:function(){return Y.default}}),Object.defineProperty(e,"prism",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"shadesOfPurple",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(e,"solarizedDarkAtom",{enumerable:!0,get:function(){return le.default}}),Object.defineProperty(e,"solarizedlight",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"synthwave84",{enumerable:!0,get:function(){return ke.default}}),Object.defineProperty(e,"tomorrow",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"twilight",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"vs",{enumerable:!0,get:function(){return re.default}}),Object.defineProperty(e,"vscDarkPlus",{enumerable:!0,get:function(){return Ce.default}}),Object.defineProperty(e,"xonokai",{enumerable:!0,get:function(){return Ye.default}}),Object.defineProperty(e,"zTouch",{enumerable:!0,get:function(){return Et.default}});var n=t(Nj()),o=t(Hj()),a=t(Wj()),r=t(Bj()),i=t(Vj()),c=t($j()),d=t(qj()),l=t(Gj()),u=t(Kj()),s=t(Qj()),f=t(Yj()),h=t(Jj()),y=t(Xj()),k=t(Zj()),S=t(eR()),v=t(tR()),m=t(nR()),g=t(oR()),x=t(rR()),C=t(aR()),_=t(iR()),A=t(lR()),R=t(sR()),j=t(cR()),T=t(uR()),I=t(dR()),H=t(pR()),K=t(fR()),ne=t(hR()),X=t(mR()),ce=t(gR()),ee=t(_R()),U=t(vR()),V=t(bR()),w=t(yR()),G=t(kR()),Y=t(wR()),E=t(xR()),le=t(SR()),ke=t(CR()),re=t(ER()),Ce=t(TR()),Ye=t(AR()),Et=t(PR())})(Ay);function Ag(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let o=0,a=n.indexOf(t);for(;a!==-1;)o++,a=n.indexOf(t,a+t.length);return o}function jR(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function RR(e,t,n){const a=Ql((n||{}).ignore||[]),r=MR(t);let i=-1;for(;++i<r.length;)Yb(e,"text",c);function c(l,u){let s=-1,f;for(;++s<u.length;){const h=u[s],y=f?f.children:void 0;if(a(h,y?y.indexOf(h):void 0,f))return;f=h}if(f)return d(l,u)}function d(l,u){const s=u[u.length-1],f=r[i][0],h=r[i][1];let y=0;const S=s.children.indexOf(l);let v=!1,m=[];f.lastIndex=0;let g=f.exec(l.value);for(;g;){const x=g.index,C={index:g.index,input:g.input,stack:[...u,l]};let _=h(...g,C);if(typeof _=="string"&&(_=_.length>0?{type:"text",value:_}:void 0),_===!1?f.lastIndex=x+1:(y!==x&&m.push({type:"text",value:l.value.slice(y,x)}),Array.isArray(_)?m.push(..._):_&&m.push(_),y=x+g[0].length,v=!0),!f.global)break;g=f.exec(l.value)}return v?(y<l.value.length&&m.push({type:"text",value:l.value.slice(y)}),s.children.splice(S,1,...m)):m=[l],S+m.length}}function MR(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let o=-1;for(;++o<n.length;){const a=n[o];t.push([LR(a[0]),DR(a[1])])}return t}function LR(e){return typeof e=="string"?new RegExp(jR(e),"g"):e}function DR(e){return typeof e=="function"?e:function(){return e}}const Vc="phrasing",$c=["autolink","link","image","label"];function OR(){return{transforms:[WR],enter:{literalAutolink:IR,literalAutolinkEmail:qc,literalAutolinkHttp:qc,literalAutolinkWww:qc},exit:{literalAutolink:HR,literalAutolinkEmail:NR,literalAutolinkHttp:FR,literalAutolinkWww:UR}}}function zR(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Vc,notInConstruct:$c},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Vc,notInConstruct:$c},{character:":",before:"[ps]",after:"\\/",inConstruct:Vc,notInConstruct:$c}]}}function IR(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function qc(e){this.config.enter.autolinkProtocol.call(this,e)}function FR(e){this.config.exit.autolinkProtocol.call(this,e)}function UR(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function NR(e){this.config.exit.autolinkEmail.call(this,e)}function HR(e){this.exit(e)}function WR(e){RR(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,BR],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,VR]],{ignore:["link","linkReference"]})}function BR(e,t,n,o,a){let r="";if(!jy(a)||(/^w/i.test(t)&&(n=t+n,t="",r="http://"),!$R(n)))return!1;const i=qR(n+o);if(!i[0])return!1;const c={type:"link",title:null,url:r+t+i[0],children:[{type:"text",value:t+i[0]}]};return i[1]?[c,{type:"text",value:i[1]}]:c}function VR(e,t,n,o){return!jy(o,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function $R(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function qR(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],o=n.indexOf(")");const a=Ag(e,"(");let r=Ag(e,")");for(;o!==-1&&a>r;)e+=n.slice(0,o+1),n=n.slice(o+1),o=n.indexOf(")"),r++;return[e,n]}function jy(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Ho(n)||ql(n))&&(!t||n!==47)}Ry.peek=o4;function GR(){return{enter:{gfmFootnoteDefinition:QR,gfmFootnoteDefinitionLabelString:YR,gfmFootnoteCall:ZR,gfmFootnoteCallString:e4},exit:{gfmFootnoteDefinition:XR,gfmFootnoteDefinitionLabelString:JR,gfmFootnoteCall:n4,gfmFootnoteCallString:t4}}}function KR(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:r4,footnoteReference:Ry}}}function QR(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function YR(){this.buffer()}function JR(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=on(this.sliceSerialize(e)).toLowerCase()}function XR(e){this.exit(e)}function ZR(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function e4(){this.buffer()}function t4(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=on(this.sliceSerialize(e)).toLowerCase()}function n4(e){this.exit(e)}function Ry(e,t,n,o){const a=n.createTracker(o);let r=a.move("[^");const i=n.enter("footnoteReference"),c=n.enter("reference");return r+=a.move(n.safe(n.associationId(e),{...a.current(),before:r,after:"]"})),c(),i(),r+=a.move("]"),r}function o4(){return"["}function r4(e,t,n,o){const a=n.createTracker(o);let r=a.move("[^");const i=n.enter("footnoteDefinition"),c=n.enter("label");return r+=a.move(n.safe(n.associationId(e),{...a.current(),before:r,after:"]"})),c(),r+=a.move("]:"+(e.children&&e.children.length>0?" ":"")),a.shift(4),r+=a.move(n.indentLines(n.containerFlow(e,a.current()),a4)),i(),r}function a4(e,t,n){return t===0?e:(n?"":"    ")+e}const i4=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];My.peek=d4;function l4(){return{canContainEols:["delete"],enter:{strikethrough:c4},exit:{strikethrough:u4}}}function s4(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:i4}],handlers:{delete:My}}}function c4(e){this.enter({type:"delete",children:[]},e)}function u4(e){this.exit(e)}function My(e,t,n,o){const a=n.createTracker(o),r=n.enter("strikethrough");let i=a.move("~~");return i+=n.containerPhrasing(e,{...a.current(),before:i,after:"~"}),i+=a.move("~~"),r(),i}function d4(){return"~"}function p4(e,t={}){const n=(t.align||[]).concat(),o=t.stringLength||h4,a=[],r=[],i=[],c=[];let d=0,l=-1;for(;++l<e.length;){const y=[],k=[];let S=-1;for(e[l].length>d&&(d=e[l].length);++S<e[l].length;){const v=f4(e[l][S]);if(t.alignDelimiters!==!1){const m=o(v);k[S]=m,(c[S]===void 0||m>c[S])&&(c[S]=m)}y.push(v)}r[l]=y,i[l]=k}let u=-1;if(typeof n=="object"&&"length"in n)for(;++u<d;)a[u]=Pg(n[u]);else{const y=Pg(n);for(;++u<d;)a[u]=y}u=-1;const s=[],f=[];for(;++u<d;){const y=a[u];let k="",S="";y===99?(k=":",S=":"):y===108?k=":":y===114&&(S=":");let v=t.alignDelimiters===!1?1:Math.max(1,c[u]-k.length-S.length);const m=k+"-".repeat(v)+S;t.alignDelimiters!==!1&&(v=k.length+v+S.length,v>c[u]&&(c[u]=v),f[u]=v),s[u]=m}r.splice(1,0,s),i.splice(1,0,f),l=-1;const h=[];for(;++l<r.length;){const y=r[l],k=i[l];u=-1;const S=[];for(;++u<d;){const v=y[u]||"";let m="",g="";if(t.alignDelimiters!==!1){const x=c[u]-(k[u]||0),C=a[u];C===114?m=" ".repeat(x):C===99?x%2?(m=" ".repeat(x/2+.5),g=" ".repeat(x/2-.5)):(m=" ".repeat(x/2),g=m):g=" ".repeat(x)}t.delimiterStart!==!1&&!u&&S.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&v==="")&&(t.delimiterStart!==!1||u)&&S.push(" "),t.alignDelimiters!==!1&&S.push(m),S.push(v),t.alignDelimiters!==!1&&S.push(g),t.padding!==!1&&S.push(" "),(t.delimiterEnd!==!1||u!==d-1)&&S.push("|")}h.push(t.delimiterEnd===!1?S.join("").replace(/ +$/,""):S.join(""))}return h.join(`
`)}function f4(e){return e==null?"":String(e)}function h4(e){return e.length}function Pg(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function m4(e,t,n,o){const a=n.enter("blockquote"),r=n.createTracker(o);r.move("> "),r.shift(2);const i=n.indentLines(n.containerFlow(e,r.current()),g4);return a(),i}function g4(e,t,n){return">"+(n?"":" ")+e}function _4(e,t){return jg(e,t.inConstruct,!0)&&!jg(e,t.notInConstruct,!1)}function jg(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let o=-1;for(;++o<t.length;)if(e.includes(t[o]))return!0;return!1}function Rg(e,t,n,o){let a=-1;for(;++a<n.unsafe.length;)if(n.unsafe[a].character===`
`&&_4(n.stack,n.unsafe[a]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function v4(e,t){const n=String(e);let o=n.indexOf(t),a=o,r=0,i=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===a?++r>i&&(i=r):r=1,a=o+t.length,o=n.indexOf(t,a);return i}function b4(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function y4(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function k4(e,t,n,o){const a=y4(n),r=e.value||"",i=a==="`"?"GraveAccent":"Tilde";if(b4(e,n)){const s=n.enter("codeIndented"),f=n.indentLines(r,w4);return s(),f}const c=n.createTracker(o),d=a.repeat(Math.max(v4(r,a)+1,3)),l=n.enter("codeFenced");let u=c.move(d);if(e.lang){const s=n.enter(`codeFencedLang${i}`);u+=c.move(n.safe(e.lang,{before:u,after:" ",encode:["`"],...c.current()})),s()}if(e.lang&&e.meta){const s=n.enter(`codeFencedMeta${i}`);u+=c.move(" "),u+=c.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...c.current()})),s()}return u+=c.move(`
`),r&&(u+=c.move(r+`
`)),u+=c.move(d),l(),u}function w4(e,t,n){return(n?"":"    ")+e}function Np(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function x4(e,t,n,o){const a=Np(n),r=a==='"'?"Quote":"Apostrophe",i=n.enter("definition");let c=n.enter("label");const d=n.createTracker(o);let l=d.move("[");return l+=d.move(n.safe(n.associationId(e),{before:l,after:"]",...d.current()})),l+=d.move("]: "),c(),!e.url||/[\0- \u007F]/.test(e.url)?(c=n.enter("destinationLiteral"),l+=d.move("<"),l+=d.move(n.safe(e.url,{before:l,after:">",...d.current()})),l+=d.move(">")):(c=n.enter("destinationRaw"),l+=d.move(n.safe(e.url,{before:l,after:e.title?" ":`
`,...d.current()}))),c(),e.title&&(c=n.enter(`title${r}`),l+=d.move(" "+a),l+=d.move(n.safe(e.title,{before:l,after:a,...d.current()})),l+=d.move(a),c()),i(),l}function S4(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}Ly.peek=C4;function Ly(e,t,n,o){const a=S4(n),r=n.enter("emphasis"),i=n.createTracker(o);let c=i.move(a);return c+=i.move(n.containerPhrasing(e,{before:c,after:a,...i.current()})),c+=i.move(a),r(),c}function C4(e,t,n){return n.options.emphasis||"*"}function E4(e,t){let n=!1;return wp(e,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return n=!0,Xu}),!!((!e.depth||e.depth<3)&&mp(e)&&(t.options.setext||n))}function T4(e,t,n,o){const a=Math.max(Math.min(6,e.depth||1),1),r=n.createTracker(o);if(E4(e,n)){const u=n.enter("headingSetext"),s=n.enter("phrasing"),f=n.containerPhrasing(e,{...r.current(),before:`
`,after:`
`});return s(),u(),f+`
`+(a===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const i="#".repeat(a),c=n.enter("headingAtx"),d=n.enter("phrasing");r.move(i+" ");let l=n.containerPhrasing(e,{before:"# ",after:`
`,...r.current()});return/^[\t ]/.test(l)&&(l="&#x"+l.charCodeAt(0).toString(16).toUpperCase()+";"+l.slice(1)),l=l?i+" "+l:i,n.options.closeAtx&&(l+=" "+i),d(),c(),l}Dy.peek=A4;function Dy(e){return e.value||""}function A4(){return"<"}Oy.peek=P4;function Oy(e,t,n,o){const a=Np(n),r=a==='"'?"Quote":"Apostrophe",i=n.enter("image");let c=n.enter("label");const d=n.createTracker(o);let l=d.move("![");return l+=d.move(n.safe(e.alt,{before:l,after:"]",...d.current()})),l+=d.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter("destinationLiteral"),l+=d.move("<"),l+=d.move(n.safe(e.url,{before:l,after:">",...d.current()})),l+=d.move(">")):(c=n.enter("destinationRaw"),l+=d.move(n.safe(e.url,{before:l,after:e.title?" ":")",...d.current()}))),c(),e.title&&(c=n.enter(`title${r}`),l+=d.move(" "+a),l+=d.move(n.safe(e.title,{before:l,after:a,...d.current()})),l+=d.move(a),c()),l+=d.move(")"),i(),l}function P4(){return"!"}zy.peek=j4;function zy(e,t,n,o){const a=e.referenceType,r=n.enter("imageReference");let i=n.enter("label");const c=n.createTracker(o);let d=c.move("![");const l=n.safe(e.alt,{before:d,after:"]",...c.current()});d+=c.move(l+"]["),i();const u=n.stack;n.stack=[],i=n.enter("reference");const s=n.safe(n.associationId(e),{before:d,after:"]",...c.current()});return i(),n.stack=u,r(),a==="full"||!l||l!==s?d+=c.move(s+"]"):a==="shortcut"?d=d.slice(0,-1):d+=c.move("]"),d}function j4(){return"!"}Iy.peek=R4;function Iy(e,t,n){let o=e.value||"",a="`",r=-1;for(;new RegExp("(^|[^`])"+a+"([^`]|$)").test(o);)a+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++r<n.unsafe.length;){const i=n.unsafe[r],c=n.compilePattern(i);let d;if(i.atBreak)for(;d=c.exec(o);){let l=d.index;o.charCodeAt(l)===10&&o.charCodeAt(l-1)===13&&l--,o=o.slice(0,l)+" "+o.slice(d.index+1)}}return a+o+a}function R4(){return"`"}function Fy(e,t){const n=mp(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Uy.peek=M4;function Uy(e,t,n,o){const a=Np(n),r=a==='"'?"Quote":"Apostrophe",i=n.createTracker(o);let c,d;if(Fy(e,n)){const u=n.stack;n.stack=[],c=n.enter("autolink");let s=i.move("<");return s+=i.move(n.containerPhrasing(e,{before:s,after:">",...i.current()})),s+=i.move(">"),c(),n.stack=u,s}c=n.enter("link"),d=n.enter("label");let l=i.move("[");return l+=i.move(n.containerPhrasing(e,{before:l,after:"](",...i.current()})),l+=i.move("]("),d(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(d=n.enter("destinationLiteral"),l+=i.move("<"),l+=i.move(n.safe(e.url,{before:l,after:">",...i.current()})),l+=i.move(">")):(d=n.enter("destinationRaw"),l+=i.move(n.safe(e.url,{before:l,after:e.title?" ":")",...i.current()}))),d(),e.title&&(d=n.enter(`title${r}`),l+=i.move(" "+a),l+=i.move(n.safe(e.title,{before:l,after:a,...i.current()})),l+=i.move(a),d()),l+=i.move(")"),c(),l}function M4(e,t,n){return Fy(e,n)?"<":"["}Ny.peek=L4;function Ny(e,t,n,o){const a=e.referenceType,r=n.enter("linkReference");let i=n.enter("label");const c=n.createTracker(o);let d=c.move("[");const l=n.containerPhrasing(e,{before:d,after:"]",...c.current()});d+=c.move(l+"]["),i();const u=n.stack;n.stack=[],i=n.enter("reference");const s=n.safe(n.associationId(e),{before:d,after:"]",...c.current()});return i(),n.stack=u,r(),a==="full"||!l||l!==s?d+=c.move(s+"]"):a==="shortcut"?d=d.slice(0,-1):d+=c.move("]"),d}function L4(){return"["}function Hp(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function D4(e){const t=Hp(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function O4(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Hy(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function z4(e,t,n,o){const a=n.enter("list"),r=n.bulletCurrent;let i=e.ordered?O4(n):Hp(n);const c=e.ordered?i==="."?")":".":D4(n);let d=t&&n.bulletLastUsed?i===n.bulletLastUsed:!1;if(!e.ordered){const u=e.children?e.children[0]:void 0;if((i==="*"||i==="-")&&u&&(!u.children||!u.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(d=!0),Hy(n)===i&&u){let s=-1;for(;++s<e.children.length;){const f=e.children[s];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){d=!0;break}}}}d&&(i=c),n.bulletCurrent=i;const l=n.containerFlow(e,o);return n.bulletLastUsed=i,n.bulletCurrent=r,a(),l}function I4(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function F4(e,t,n,o){const a=I4(n);let r=n.bulletCurrent||Hp(n);t&&t.type==="list"&&t.ordered&&(r=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+r);let i=r.length+1;(a==="tab"||a==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(i=Math.ceil(i/4)*4);const c=n.createTracker(o);c.move(r+" ".repeat(i-r.length)),c.shift(i);const d=n.enter("listItem"),l=n.indentLines(n.containerFlow(e,c.current()),u);return d(),l;function u(s,f,h){return f?(h?"":" ".repeat(i))+s:(h?r:r+" ".repeat(i-r.length))+s}}function U4(e,t,n,o){const a=n.enter("paragraph"),r=n.enter("phrasing"),i=n.containerPhrasing(e,o);return r(),a(),i}const N4=Ql(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function H4(e,t,n,o){return(e.children.some(function(i){return N4(i)})?n.containerPhrasing:n.containerFlow).call(n,e,o)}function W4(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Wy.peek=B4;function Wy(e,t,n,o){const a=W4(n),r=n.enter("strong"),i=n.createTracker(o);let c=i.move(a+a);return c+=i.move(n.containerPhrasing(e,{before:c,after:a,...i.current()})),c+=i.move(a+a),r(),c}function B4(e,t,n){return n.options.strong||"*"}function V4(e,t,n,o){return n.safe(e.value,o)}function $4(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function q4(e,t,n){const o=(Hy(n)+(n.options.ruleSpaces?" ":"")).repeat($4(n));return n.options.ruleSpaces?o.slice(0,-1):o}const By={blockquote:m4,break:Rg,code:k4,definition:x4,emphasis:Ly,hardBreak:Rg,heading:T4,html:Dy,image:Oy,imageReference:zy,inlineCode:Iy,link:Uy,linkReference:Ny,list:z4,listItem:F4,paragraph:U4,root:H4,strong:Wy,text:V4,thematicBreak:q4};function G4(){return{enter:{table:K4,tableData:Mg,tableHeader:Mg,tableRow:Y4},exit:{codeText:J4,table:Q4,tableData:Gc,tableHeader:Gc,tableRow:Gc}}}function K4(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function Q4(e){this.exit(e),this.data.inTable=void 0}function Y4(e){this.enter({type:"tableRow",children:[]},e)}function Gc(e){this.exit(e)}function Mg(e){this.enter({type:"tableCell",children:[]},e)}function J4(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,X4));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function X4(e,t){return t==="|"?t:e}function Z4(e){const t=e||{},n=t.tableCellPadding,o=t.tablePipeAlign,a=t.stringLength,r=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:i,tableCell:d,tableRow:c}};function i(h,y,k,S){return l(u(h,k,S),h.align)}function c(h,y,k,S){const v=s(h,k,S),m=l([v]);return m.slice(0,m.indexOf(`
`))}function d(h,y,k,S){const v=k.enter("tableCell"),m=k.enter("phrasing"),g=k.containerPhrasing(h,{...S,before:r,after:r});return m(),v(),g}function l(h,y){return p4(h,{align:y,alignDelimiters:o,padding:n,stringLength:a})}function u(h,y,k){const S=h.children;let v=-1;const m=[],g=y.enter("table");for(;++v<S.length;)m[v]=s(S[v],y,k);return g(),m}function s(h,y,k){const S=h.children;let v=-1;const m=[],g=y.enter("tableRow");for(;++v<S.length;)m[v]=d(S[v],h,y,k);return g(),m}function f(h,y,k){let S=By.inlineCode(h,y,k);return k.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function e5(){return{exit:{taskListCheckValueChecked:Lg,taskListCheckValueUnchecked:Lg,paragraph:n5}}}function t5(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:o5}}}function Lg(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function n5(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const o=n.children[0];if(o&&o.type==="text"){const a=t.children;let r=-1,i;for(;++r<a.length;){const c=a[r];if(c.type==="paragraph"){i=c;break}}i===n&&(o.value=o.value.slice(1),o.value.length===0?n.children.shift():n.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,n.position.start=Object.assign({},o.position.start)))}}this.exit(e)}function o5(e,t,n,o){const a=e.children[0],r=typeof e.checked=="boolean"&&a&&a.type==="paragraph",i="["+(e.checked?"x":" ")+"] ",c=n.createTracker(o);r&&c.move(i);let d=By.listItem(e,t,n,{...o,...c.current()});return r&&(d=d.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),d;function l(u){return u+i}}function r5(){return[OR(),GR(),l4(),G4(),e5()]}function a5(e){return{extensions:[zR(),KR(),s4(),Z4(e),t5()]}}const i5={tokenize:p5,partial:!0},Vy={tokenize:f5,partial:!0},$y={tokenize:h5,partial:!0},qy={tokenize:m5,partial:!0},l5={tokenize:g5,partial:!0},Gy={tokenize:u5,previous:Qy},Ky={tokenize:d5,previous:Yy},Nn={tokenize:c5,previous:Jy},xn={};function s5(){return{text:xn}}let xo=48;for(;xo<123;)xn[xo]=Nn,xo++,xo===58?xo=65:xo===91&&(xo=97);xn[43]=Nn;xn[45]=Nn;xn[46]=Nn;xn[95]=Nn;xn[72]=[Nn,Ky];xn[104]=[Nn,Ky];xn[87]=[Nn,Gy];xn[119]=[Nn,Gy];function c5(e,t,n){const o=this;let a,r;return i;function i(s){return!ad(s)||!Jy.call(o,o.previous)||Wp(o.events)?n(s):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),c(s))}function c(s){return ad(s)?(e.consume(s),c):s===64?(e.consume(s),d):n(s)}function d(s){return s===46?e.check(l5,u,l)(s):s===45||s===95||ct(s)?(r=!0,e.consume(s),d):u(s)}function l(s){return e.consume(s),a=!0,d}function u(s){return r&&a&&ht(o.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(s)):n(s)}}function u5(e,t,n){const o=this;return a;function a(i){return i!==87&&i!==119||!Qy.call(o,o.previous)||Wp(o.events)?n(i):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(i5,e.attempt(Vy,e.attempt($y,r),n),n)(i))}function r(i){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(i)}}function d5(e,t,n){const o=this;let a="",r=!1;return i;function i(s){return(s===72||s===104)&&Yy.call(o,o.previous)&&!Wp(o.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),a+=String.fromCodePoint(s),e.consume(s),c):n(s)}function c(s){if(ht(s)&&a.length<5)return a+=String.fromCodePoint(s),e.consume(s),c;if(s===58){const f=a.toLowerCase();if(f==="http"||f==="https")return e.consume(s),d}return n(s)}function d(s){return s===47?(e.consume(s),r?l:(r=!0,d)):n(s)}function l(s){return s===null||kl(s)||Te(s)||Ho(s)||ql(s)?n(s):e.attempt(Vy,e.attempt($y,u),n)(s)}function u(s){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(s)}}function p5(e,t,n){let o=0;return a;function a(i){return(i===87||i===119)&&o<3?(o++,e.consume(i),a):i===46&&o===3?(e.consume(i),r):n(i)}function r(i){return i===null?n(i):t(i)}}function f5(e,t,n){let o,a,r;return i;function i(l){return l===46||l===95?e.check(qy,d,c)(l):l===null||Te(l)||Ho(l)||l!==45&&ql(l)?d(l):(r=!0,e.consume(l),i)}function c(l){return l===95?o=!0:(a=o,o=void 0),e.consume(l),i}function d(l){return a||o||!r?n(l):t(l)}}function h5(e,t){let n=0,o=0;return a;function a(i){return i===40?(n++,e.consume(i),a):i===41&&o<n?r(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?e.check(qy,t,r)(i):i===null||Te(i)||Ho(i)?t(i):(e.consume(i),a)}function r(i){return i===41&&o++,e.consume(i),a}}function m5(e,t,n){return o;function o(c){return c===33||c===34||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===63||c===95||c===126?(e.consume(c),o):c===38?(e.consume(c),r):c===93?(e.consume(c),a):c===60||c===null||Te(c)||Ho(c)?t(c):n(c)}function a(c){return c===null||c===40||c===91||Te(c)||Ho(c)?t(c):o(c)}function r(c){return ht(c)?i(c):n(c)}function i(c){return c===59?(e.consume(c),o):ht(c)?(e.consume(c),i):n(c)}}function g5(e,t,n){return o;function o(r){return e.consume(r),a}function a(r){return ct(r)?n(r):t(r)}}function Qy(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Te(e)}function Yy(e){return!ht(e)}function Jy(e){return!(e===47||ad(e))}function ad(e){return e===43||e===45||e===46||e===95||ct(e)}function Wp(e){let t=e.length,n=!1;for(;t--;){const o=e[t][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){n=!0;break}if(o._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const _5={tokenize:C5,partial:!0};function v5(){return{document:{91:{tokenize:w5,continuation:{tokenize:x5},exit:S5}},text:{91:{tokenize:k5},93:{add:"after",tokenize:b5,resolveTo:y5}}}}function b5(e,t,n){const o=this;let a=o.events.length;const r=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let i;for(;a--;){const d=o.events[a][1];if(d.type==="labelImage"){i=d;break}if(d.type==="gfmFootnoteCall"||d.type==="labelLink"||d.type==="label"||d.type==="image"||d.type==="link")break}return c;function c(d){if(!i||!i._balanced)return n(d);const l=on(o.sliceSerialize({start:i.end,end:o.now()}));return l.codePointAt(0)!==94||!r.includes(l.slice(1))?n(d):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),t(d))}}function y5(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;const r={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},i={type:"chunkString",contentType:"string",start:Object.assign({},r.start),end:Object.assign({},r.end)},c=[e[n+1],e[n+2],["enter",o,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",r,t],["enter",i,t],["exit",i,t],["exit",r,t],e[e.length-2],e[e.length-1],["exit",o,t]];return e.splice(n,e.length-n+1,...c),e}function k5(e,t,n){const o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let r=0,i;return c;function c(s){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),d}function d(s){return s!==94?n(s):(e.enter("gfmFootnoteCallMarker"),e.consume(s),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",l)}function l(s){if(r>999||s===93&&!i||s===null||s===91||Te(s))return n(s);if(s===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return a.includes(on(o.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(s)}return Te(s)||(i=!0),r++,e.consume(s),s===92?u:l}function u(s){return s===91||s===92||s===93?(e.consume(s),r++,l):l(s)}}function w5(e,t,n){const o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let r,i=0,c;return d;function d(y){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),l}function l(y){return y===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",u):n(y)}function u(y){if(i>999||y===93&&!c||y===null||y===91||Te(y))return n(y);if(y===93){e.exit("chunkString");const k=e.exit("gfmFootnoteDefinitionLabelString");return r=on(o.sliceSerialize(k)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return Te(y)||(c=!0),i++,e.consume(y),y===92?s:u}function s(y){return y===91||y===92||y===93?(e.consume(y),i++,u):u(y)}function f(y){return y===58?(e.enter("definitionMarker"),e.consume(y),e.exit("definitionMarker"),a.includes(r)||a.push(r),ye(e,h,"gfmFootnoteDefinitionWhitespace")):n(y)}function h(y){return t(y)}}function x5(e,t,n){return e.check(Ja,t,e.attempt(_5,t,n))}function S5(e){e.exit("gfmFootnoteDefinition")}function C5(e,t,n){const o=this;return ye(e,a,"gfmFootnoteDefinitionIndent",5);function a(r){const i=o.events[o.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?t(r):n(r)}}function E5(e){let n=(e||{}).singleTilde;const o={tokenize:r,resolveAll:a};return n==null&&(n=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function a(i,c){let d=-1;for(;++d<i.length;)if(i[d][0]==="enter"&&i[d][1].type==="strikethroughSequenceTemporary"&&i[d][1]._close){let l=d;for(;l--;)if(i[l][0]==="exit"&&i[l][1].type==="strikethroughSequenceTemporary"&&i[l][1]._open&&i[d][1].end.offset-i[d][1].start.offset===i[l][1].end.offset-i[l][1].start.offset){i[d][1].type="strikethroughSequence",i[l][1].type="strikethroughSequence";const u={type:"strikethrough",start:Object.assign({},i[l][1].start),end:Object.assign({},i[d][1].end)},s={type:"strikethroughText",start:Object.assign({},i[l][1].end),end:Object.assign({},i[d][1].start)},f=[["enter",u,c],["enter",i[l][1],c],["exit",i[l][1],c],["enter",s,c]],h=c.parser.constructs.insideSpan.null;h&&Mt(f,f.length,0,Gl(h,i.slice(l+1,d),c)),Mt(f,f.length,0,[["exit",s,c],["enter",i[d][1],c],["exit",i[d][1],c],["exit",u,c]]),Mt(i,l-1,d-l+3,f),d=l+f.length-2;break}}for(d=-1;++d<i.length;)i[d][1].type==="strikethroughSequenceTemporary"&&(i[d][1].type="data");return i}function r(i,c,d){const l=this.previous,u=this.events;let s=0;return f;function f(y){return l===126&&u[u.length-1][1].type!=="characterEscape"?d(y):(i.enter("strikethroughSequenceTemporary"),h(y))}function h(y){const k=wl(l);if(y===126)return s>1?d(y):(i.consume(y),s++,h);if(s<2&&!n)return d(y);const S=i.exit("strikethroughSequenceTemporary"),v=wl(y);return S._open=!v||v===2&&!!k,S._close=!k||k===2&&!!v,c(y)}}}class T5{constructor(){this.map=[]}add(t,n,o){A5(this,t,n,o)}consume(t){if(this.map.sort(function(r,i){return r[0]-i[0]}),this.map.length===0)return;let n=this.map.length;const o=[];for(;n>0;)n-=1,o.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];o.push([...t]),t.length=0;let a=o.pop();for(;a;)t.push(...a),a=o.pop();this.map.length=0}}function A5(e,t,n,o){let a=0;if(!(n===0&&o.length===0)){for(;a<e.map.length;){if(e.map[a][0]===t){e.map[a][1]+=n,e.map[a][2].push(...o);return}a+=1}e.map.push([t,n,o])}}function P5(e,t){let n=!1;const o=[];for(;t<e.length;){const a=e[t];if(n){if(a[0]==="enter")a[1].type==="tableContent"&&o.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const r=o.length-1;o[r]=o[r]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return o}function j5(){return{flow:{null:{tokenize:R5,resolveAll:M5}}}}function R5(e,t,n){const o=this;let a=0,r=0,i;return c;function c(T){let I=o.events.length-1;for(;I>-1;){const ne=o.events[I][1].type;if(ne==="lineEnding"||ne==="linePrefix")I--;else break}const H=I>-1?o.events[I][1].type:null,K=H==="tableHead"||H==="tableRow"?_:d;return K===_&&o.parser.lazy[o.now().line]?n(T):K(T)}function d(T){return e.enter("tableHead"),e.enter("tableRow"),l(T)}function l(T){return T===124||(i=!0,r+=1),u(T)}function u(T){return T===null?n(T):oe(T)?r>1?(r=0,o.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),h):n(T):_e(T)?ye(e,u,"whitespace")(T):(r+=1,i&&(i=!1,a+=1),T===124?(e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),i=!0,u):(e.enter("data"),s(T)))}function s(T){return T===null||T===124||Te(T)?(e.exit("data"),u(T)):(e.consume(T),T===92?f:s)}function f(T){return T===92||T===124?(e.consume(T),s):s(T)}function h(T){return o.interrupt=!1,o.parser.lazy[o.now().line]?n(T):(e.enter("tableDelimiterRow"),i=!1,_e(T)?ye(e,y,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):y(T))}function y(T){return T===45||T===58?S(T):T===124?(i=!0,e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),k):C(T)}function k(T){return _e(T)?ye(e,S,"whitespace")(T):S(T)}function S(T){return T===58?(r+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(T),e.exit("tableDelimiterMarker"),v):T===45?(r+=1,v(T)):T===null||oe(T)?x(T):C(T)}function v(T){return T===45?(e.enter("tableDelimiterFiller"),m(T)):C(T)}function m(T){return T===45?(e.consume(T),m):T===58?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(T),e.exit("tableDelimiterMarker"),g):(e.exit("tableDelimiterFiller"),g(T))}function g(T){return _e(T)?ye(e,x,"whitespace")(T):x(T)}function x(T){return T===124?y(T):T===null||oe(T)?!i||a!==r?C(T):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(T)):C(T)}function C(T){return n(T)}function _(T){return e.enter("tableRow"),A(T)}function A(T){return T===124?(e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),A):T===null||oe(T)?(e.exit("tableRow"),t(T)):_e(T)?ye(e,A,"whitespace")(T):(e.enter("data"),R(T))}function R(T){return T===null||T===124||Te(T)?(e.exit("data"),A(T)):(e.consume(T),T===92?j:R)}function j(T){return T===92||T===124?(e.consume(T),R):R(T)}}function M5(e,t){let n=-1,o=!0,a=0,r=[0,0,0,0],i=[0,0,0,0],c=!1,d=0,l,u,s;const f=new T5;for(;++n<e.length;){const h=e[n],y=h[1];h[0]==="enter"?y.type==="tableHead"?(c=!1,d!==0&&(Dg(f,t,d,l,u),u=void 0,d=0),l={type:"table",start:Object.assign({},y.start),end:Object.assign({},y.end)},f.add(n,0,[["enter",l,t]])):y.type==="tableRow"||y.type==="tableDelimiterRow"?(o=!0,s=void 0,r=[0,0,0,0],i=[0,n+1,0,0],c&&(c=!1,u={type:"tableBody",start:Object.assign({},y.start),end:Object.assign({},y.end)},f.add(n,0,[["enter",u,t]])),a=y.type==="tableDelimiterRow"?2:u?3:1):a&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")?(o=!1,i[2]===0&&(r[1]!==0&&(i[0]=i[1],s=Mi(f,t,r,a,void 0,s),r=[0,0,0,0]),i[2]=n)):y.type==="tableCellDivider"&&(o?o=!1:(r[1]!==0&&(i[0]=i[1],s=Mi(f,t,r,a,void 0,s)),r=i,i=[r[1],n,0,0])):y.type==="tableHead"?(c=!0,d=n):y.type==="tableRow"||y.type==="tableDelimiterRow"?(d=n,r[1]!==0?(i[0]=i[1],s=Mi(f,t,r,a,n,s)):i[1]!==0&&(s=Mi(f,t,i,a,n,s)),a=0):a&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")&&(i[3]=n)}for(d!==0&&Dg(f,t,d,l,u),f.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=P5(t.events,n))}return e}function Mi(e,t,n,o,a,r){const i=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",c="tableContent";n[0]!==0&&(r.end=Object.assign({},er(t.events,n[0])),e.add(n[0],0,[["exit",r,t]]));const d=er(t.events,n[1]);if(r={type:i,start:Object.assign({},d),end:Object.assign({},d)},e.add(n[1],0,[["enter",r,t]]),n[2]!==0){const l=er(t.events,n[2]),u=er(t.events,n[3]),s={type:c,start:Object.assign({},l),end:Object.assign({},u)};if(e.add(n[2],0,[["enter",s,t]]),o!==2){const f=t.events[n[2]],h=t.events[n[3]];if(f[1].end=Object.assign({},h[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){const y=n[2]+1,k=n[3]-n[2]-1;e.add(y,k,[])}}e.add(n[3]+1,0,[["exit",s,t]])}return a!==void 0&&(r.end=Object.assign({},er(t.events,a)),e.add(a,0,[["exit",r,t]]),r=void 0),r}function Dg(e,t,n,o,a){const r=[],i=er(t.events,n);a&&(a.end=Object.assign({},i),r.push(["exit",a,t])),o.end=Object.assign({},i),r.push(["exit",o,t]),e.add(n+1,0,r)}function er(e,t){const n=e[t],o=n[0]==="enter"?"start":"end";return n[1][o]}const L5={tokenize:O5};function D5(){return{text:{91:L5}}}function O5(e,t,n){const o=this;return a;function a(d){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?n(d):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),r)}function r(d){return Te(d)?(e.enter("taskListCheckValueUnchecked"),e.consume(d),e.exit("taskListCheckValueUnchecked"),i):d===88||d===120?(e.enter("taskListCheckValueChecked"),e.consume(d),e.exit("taskListCheckValueChecked"),i):n(d)}function i(d){return d===93?(e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),c):n(d)}function c(d){return oe(d)?t(d):_e(d)?e.check({tokenize:z5},t,n)(d):n(d)}}function z5(e,t,n){return ye(e,o,"whitespace");function o(a){return a===null?n(a):t(a)}}function I5(e){return Rb([s5(),v5(),E5(e),j5(),D5()])}const F5={};function U5(e){const t=this,n=e||F5,o=t.data(),a=o.micromarkExtensions||(o.micromarkExtensions=[]),r=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),i=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);a.push(I5(n)),r.push(r5()),i.push(a5(n))}var Xy={};(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Uj()),o=n.default;e.default=o})(Xy);const N5=an(Xy);var Zy={};(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Ty()),o=n.default;e.default=o})(Zy);const H5=an(Zy);var ek={};(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Fj()),o=n.default;e.default=o})(ek);const W5=an(ek);var tk={};(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Lj()),o=n.default;e.default=o})(tk);const B5=an(tk);var nk={};(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Ij()),o=n.default;e.default=o})(nk);const V5=an(nk);var ok={};(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Oj()),o=n.default;e.default=o})(ok);const $5=an(ok);var rk={};(function(e){var t=vo;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Dj()),o=n.default;e.default=o})(rk);const q5=an(rk);wn.registerLanguage("tsx",N5);wn.registerLanguage("typescript",H5);wn.registerLanguage("scss",W5);wn.registerLanguage("bash",B5);wn.registerLanguage("markdown",V5);wn.registerLanguage("json",$5);wn.registerLanguage("lua",q5);function G5({source:e}){const t=e.split(`
`).map(n=>n.indexOf(" [See demo")!==-1?n.substring(0,n.indexOf(" [See")):n).join(`
`);return p.jsx("div",{className:"docs",children:p.jsx("div",{className:"docs-md",children:p.jsx(VE,{remarkPlugins:[U5],components:{h1(n){return p.jsx("h1",{...n,translate:"no"})},h3(n){return p.jsx("h3",{...n,translate:"no"})},code({className:n,...o}){const a=/language-(\w+)/.exec(n||"");return a?p.jsx(wn,{style:Ay.oneDark,language:a[1],PreTag:"div",showLineNumbers:!1,useInlineStyles:!0,children:String(o.children).replace(/\n$/,"")}):p.jsx("code",{className:n,...o})},pre:n=>{var a;const o=(a=n.children[0])==null?void 0:a.props.className.replace(/language-/g,"");return p.jsxs("div",{className:"relative overflow-x-hidden",children:[p.jsx("span",{style:{bottom:0,right:0},children:o}),p.jsx("pre",{...n})]})}},children:t})})})}function O({component:e,markdown:t}){return p.jsxs(p.Fragment,{children:[e&&p.jsx(xx,{children:e}),t&&p.jsx(G5,{source:t})]})}const M=()=>p.jsx("div",{style:{position:"absolute",inset:0,display:"flex",width:"100%",height:"99vh",justifyContent:"center",alignItems:"center"},children:p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"80",height:"71.24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:[p.jsx("animateTransform",{attributeName:"transform",type:"rotate",dur:".8s",values:"0 0 0;360 0 0;",repeatCount:"indefinite"}),p.jsx("path",{fill:"#f84956",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})]})}),K5=`# ErrorBoundary
Wrapper component that lets you display some fallback UI when your application throws an error during rendering. [See demo](https://react-tools.ndria.dev/#/components/ErrorBoundary)

## Usage

\`\`\`tsx
const Component = () => {
	throw new Error("An error occurred.");
	return <p>Component</p>
}
export default function EB() {
	return <ErrorBoundary fallback={(error: Error, _, retry) => <><p>{error.name} - {error.message} </p><button onClick={retry}>Retry</button></>}>
		<Component/>
	</ErrorBoundary>
}
\`\`\`

> The component uses _ErrorBoundary_ Component to wrap _Component_. _Component_ throw an error so _ErrorBoundary_ catch it and show the _fallback_ element passing to it _error_ and _retry_ function. [See demo](https://react-tools.ndria.dev/#/components/ErrorBoundary)


## API

\`\`\`tsx
class ErrorBoundary extends Component<PropsWithChildren<{ onCatch?: (error: Error, info: ErrorInfo) => void, fallback?: ReactNode | ((error: Error, info: ErrorInfo, retry: () => void) => ReactNode) | ((props: { error: Error, info: ErrorInfo, retry: () => void })=>JSX.Element)}>, { hasError: boolean, error?:Error, info?: ErrorInfo }>
\`\`\`


> ### Params
>
> - __props__: _Object_
> - __props.onCatch?__: _(error:Error, info:ErrorInfo)=>void_  
function that will be executed on component did catch.
> - __props.fallback?__: _ReactNode|((error: Error, info: ErrorInfo, retry: ()=>void)=>ReactNode)|((props: { error: Error, info: ErrorInfo, retry: ()=>void })=>JSX.Element)_  
it is rendered when an error occurred. It can be an element, or a Component or a function. If it is a component or a function, it receive the _error_ the _info_ and the _retry_ function as props. _retry_ function try to rerender.
> - __props.children__: _ReactNode_  
element to render.
>



> ### Returns
>
> __result__: element or fallback.
> - _JSX.Element_  
>`,Q5=`# For
Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://react-tools.ndria.dev/#/components/For)

## Usage

\`\`\`tsx
const Paragraph = memo(({ index, firstName, lastName }: { index: string, firstName: string, lastName: string }) => {
	console.log("P render");
	return <p>{index}: {firstName} - {lastName}</p>
})

export default function ForComponent() {
	const [arr, setArr] = useState([
		{ id: "1", firstName: "firstName1", lastName: "lastName1" },
		{ id: "2", firstName: "firstName2", lastName: "lastName2" },
		{ id: "3", firstName: "firstName3", lastName: "lastName3" }
	]);

	useEffect(() => {
		const id2 = setInterval(() => {
			setArr(a => {
				const added = Math.random() > 0.5;
				console.log(added ? "added" : "removed");
				const id = Math.max(...[0, ...a.map(el => Number(el.id))])+1
				return added
					? [{ id: "" + id, firstName: "firstName" + id, lastName: "lastName" + id }, ...a]
					: a.filter((_, index) => index !== 0)
			})
		}, 3500);
		return () => {
			clearInterval(id2)
		}
	}, [])

	return <>
		<For
			of={arr}
			elementKey="id"
		>
			{(item, _, key) => <Paragraph index={key as string} firstName={item.firstName} lastName={item.lastName} />}
		</For>
	</>
}
\`\`\`

> The component has a _arr_ array state variable of objects that every 3 seconds added or removed an element. It uses _For_ component to iterate _arr_ and to render the memoized _Paragraph_ component, specifing __id__ element property as _elementKey_ prop. _Paragraph_ component logs in console a message before return the tag p. If you open dev tools, you can see that message is displayed only three times at first, and once when an element is added to _arr_ variable.


## API

\`\`\`tsx
For<T, S extends T>({ of, elementKey, fallback, filter, sort, map, children }: { of: Array<T>, elementKey?: (T|S) extends object ? keyof (T|S) | ((item: T|S) => Key) : Key | ((item: T|S) => Key), children: (item: T|S, index: number, key: Key) => ReactNode, fallback?: ReactNode, filter?: Parameters<Array<T>["filter"]>[0], sort?: true | Parameters<Array<T>["sort"]>[0], map?: (...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S }): null|JSX.Element|Array<JSX.Element>
\`\`\`


> ### Params
>
> - __props__: _Object_  
component properties object.
> - __props.of__: _Array<T>_  
array of elements.
> - __props.elementKey?__: _(T|S) extends object ? keyof (T|S) | ((item: T|S) => Key) : Key | ((item: T|S) => Key)_  
if the elements are objects, this prop can be a key of the elements in __of__ prop, or a function with one parameter which type is the type of the elements in __of__ prop and returns a __React.Key__ type, otherwise this prop can be the function described before or a __React.Key__. If it isn't specified, element index in __of__ props will be used as key.
> - __props.children__: _(item: T|S, index: number, key: Key) => ReactNode_  
it's a function that takes the current item as first argument and optionally a second argument that is the index of current item and a third element that is the key specified in the _elementKey_ prop. Item is the current element of __of__ prop or, if __map__ prop is present, is the current element produces from __map__ prop.
> - __props.fallback?__: _ReactNode_  
optional element to render when _of_ prop is an empty array.
> - __props.filter?__: _Parameters<Array<T>["filter"]>[0]_  
callback executed to filter _of_ elements.
> - __props.map?__: _undefined|((...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S)_  
callback executed to map _of_ elements.
> - __props.sort?__: _true|Parameters<Array<T>["sort"]>[0]_  
callback executed to sort _of_ elements or __\`true\`__ to use native sort.
>



> ### Returns
>
> __result__: elements list, rendered from _of_ prop or _fallback_ if exist, otherwise null.
> - _null|JSX.Element|Array<JSX.Element>_  
>`,Y5=`# 


## Usage

Memoized implementation of _For_ component.

Please visit [For component](#/components/For) example to see how it works.





`,J5=`# LazyComponent
Component Wrapper to lazy loading a Component. [See demo](https://react-tools.ndria.dev/#/components/LazyComponent)

## Usage

\`\`\`tsx
export default function LC() {
	return (
		<LazyComponent
			factory={() => import('./LazyComp').then(async res => {
				await new Promise(resolve => setTimeout(resolve, 5000));
				return res;
			})}
			fallback={<p>Loading component...</p>}
		/>
	);
}
\`\`\`

> The component uses _LazyComponent_ component to lazy load a component imported dynamically by _factory_ prop. The component loading is delayed by 5 seconds. During this time, _fallback_ prop is shown that renders a p element with the text __Loading component...__.


## API

\`\`\`tsx
LazyComponent<T extends { default: ComponentType<unknown> } | { [k: string]: ComponentType<unknown> }>({ factory, componentName, fallback, beforeLoad, afterLoad }: { factory: () => Promise<T>, componentName?: string, fallback?: ReactNode, beforeLoad?: ()=>void, afterLoad?: ()=>void })
\`\`\`


> ### Params
>
> - __param__: _Object_  
properties to load component.
> - __param.factory__: _() => Promise<{ [k:string]: T }>_  
function that returns a Promise or another thenable.
> - __param.componentName?__: _string_  
name of the of the module to load lazy. If it is missing, and the _load_ execution result not have a default property, the first key in res is returned as result.
> - __object.fallback?__: _ReactNode_  
optional element to render when _when_ prop is false.
> - __param.beforeLoad?__: _()=>void_  
function that will be executed before loading component .
> - __param.afterLoad?__: _()=>void_  
function that will be executed after loading component .
>



> ### Returns
>
> __element__
> - _JSX.Element_  
>`,X5=`# Show
Generic component used to conditional render part of the view: it renders _children_ when the _when_ prop is truthy, otherwise the _fallback_ prop, if it is present, or null. [See demo](https://react-tools.ndria.dev/#/components/Show)

## Usage

\`\`\`tsx
export default function ShowComponent() {
	const [show, setShow] = useReducer(t => !t, false);

	return <>
		<button onClick={setShow}>{show ? "hide" : "show"}</button>
		<Show when={show} fallback={<p>hidden</p>}>
			<p>Shown</p>
		</Show>
	</>
}
\`\`\`

> The component has a state boolean variable _show_ updated by a button element and uses _Show_ generic component to conditional render a p element. If _show_ is true, a _p element_ with __Shown__ text value is shown otherwise is shown a _p element_ with __Hidden__ text value.


## API

\`\`\`tsx
Show<T>({ when, fallback, children }: PropsWithChildren<{ when: T|boolean|undefined|null, fallback?: ReactNode }>)
\`\`\`


> ### Params
>
> - __object__: _PropsWithChildren<{when: T|boolean|undefined|null, fallback?: ReactNode}>_
> - __object.when__: _T|boolean|undefined|null_  
boolean indicating if to show _children_ or _fallback_/_null_.
> - __object.fallback?__: _ReactNode_  
optional element to render when _when_ prop is false.
> - __object.children?__: _PropsWithChildren<any>["children"]_  
optional element to render when _when_ prop is true.
>



> ### Returns
>
> __element__: the element rendered or null.
> - _JSX.Element|null_  
>`,Z5=`# 


## Usage

Memoized implementation of _Show_ component.

Please visit [Show component](#/components/Show) example to see how it works.





`,eM=`# SwitchCase
It works like switch-case construct. It useful for when there are more than 2 mutual exclusive conditions. [See demo](https://react-tools.ndria.dev/#/components/SwitchCase)

## Usage

\`\`\`tsx
export default function SM() {
	const valuesCounter = useRef([1, 2, 3]);
	const [indexCounter, setIndexCounter] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setIndexCounter(i => i%4+1 === 4 ? 0 : i%4+1), 2000);
		return () => clearInterval(id);
	}, []);

	return (<div style={{textAlign: "left", display: "flex", flexDirection: "column", alignItems: "center"}}>
		<p style={{width: 230}}>Counter values: {JSON.stringify(valuesCounter.current, null, 2)}</p>
		<p style={{width: 230}}>Counter index: {indexCounter}</p>
		<SwitchCase.Switch fallback={<p style={{color: "darkorange", width: 230}}>Counter value unsetted.</p>}>
			<SwitchCase.Case when={indexCounter === 0}>
				<p style={{color: "darkturquoise", width: 230, fontWeight: 800}}>Counter value is 1.</p>
			</SwitchCase.Case>
			<SwitchCase.Case when={indexCounter === 1}>
				<p style={{color: "darkkhaki", width: 230, fontWeight: 800}}>Counter value is 2.</p>
			</SwitchCase.Case>
			<SwitchCase.Case when={indexCounter === 2}>
				<p style={{color: "darkcyan", width: 230, fontWeight: 800}}>Counter value is 3.</p>
			</SwitchCase.Case>
		</SwitchCase.Switch>
	</div>);
}
\`\`\`

> The component has an array of numbers and a variable state number used like index of array. Every 2 seconds index changes value. It uses __SwitchCase__ component to render different p element with a text indicating the value of array with the current index.


## API

\`\`\`tsx
SwitchCase = { Switch, Case };
\`\`\`


> ### Params
>
> - __object__: _Object_  
Object with _Switch_ and _Case_ components.
>



> ### Returns
>
> 
> - __Object__:  
>     - __Switch__ : _(props:{children:ReactElement<CaseProps>|ReactElement<CaseProps>[], fallback?:ReactNode})=>JSX.Element|null_  
>     - __Case__ : _(props:{children:ReactNode, when:booleaan|undefined|null})=>JSX.Element|nul_  
>`,tM=`# 


## Usage

Memoized implementation of _SwitchCase_ component.

Please visit [SwitchCase component](#/components/SwitchCase) example to see how it works.





`,nM=`# alphanumericCompare
Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not. [See demo](https://react-tools.ndria.dev/#/utils/alphanumericCompare)

## API

\`\`\`tsx
alphanumericCompare({ string1, string2, compareType, locales, opts }: {string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", locales?: Intl.LocalesArgument, opts?: Intl.CollatorOptions}): boolean|number
\`\`\`


> ### Params
>
> - __param__: _Object_  
object
> - __param.string1__: _string_  
first string to compare.
> - __param.string2__: _string_  
second string to compare.
> - __param.compareType?__: _"<" | ">" | "=" | ">=" | "<="_  
type of compare to verify.
> - __param.locales?__: _Intl.LocalesArgument_  
A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported.
> - __param.opts?__: _Intl.CollatorOptions_  
An object adjusting the output format. Corresponds to the options parameter of the Intl.Collator() constructor.
>



> ### Returns
>
> __result__: boolean or number that indicates whether the indicated comparison is respected or not.
> - _boolean|number_  
>`,oM=`# changeStringCase
Function that given a string, a case type, and an optional delimiter, returns the string in the specified case or empty string. [See demo](https://react-tools.ndria.dev/#/utils/changeStringCase)

## API

\`\`\`tsx
changeStringCase({string, caseType, delimiter}:{ string?: string, caseType: "pascalCase" | "snakeCase" | "kebabCase" | "camelCase", delimiter?: "upperCase" | "lowerCase" | string}): string
\`\`\`


> ### Params
>
> - __param__: _Object_  
object
> - __param.string?__: _string|undefined_  
string to the which change case.
> - __param.caseType__: _"pascalCase" | "snakeCase" | "kebabCase" | "camelCase"_  
selected case to change string.
> - __param.delemiter?__: _"upperCase" | "lowerCase" | string_  
optional delemiter for case that support it.
>



> ### Returns
>
> __result__: string with changed case or empty string.
> - _string_  
>`,rM=`# clickElementOnKeydownEvent
Function which, given a triggering code, executes _click_ on element when a keyDown event with triggering code is executed. [See demo](https://react-tools.ndria.dev/#/utils/clickElementOnKeydownEvent)

## API

\`\`\`tsx
clickElementOnKeydownEvent(codeTriggering: KeyboardEventCode): ((e: KeyboardEvent) => void)
\`\`\`


> ### Params
>
> - __codeTriggering__: _codeTriggering: KeyboardEventCode_
>



> ### Returns
>
> 
> - _(e: KeyboardEvent) => void_  
>`,aM=`# createPubSubStore
A state management hook implemented on Publish-Subscribe pattern. It allows components to subscribe to state changes and receive updates whenever the state is modified, providing a scalable and decoupled state management solution.__N.B.: to work properly, objects like Set, Map, Date or more generally objects without _Symbol.iterator_ must be treated as immutable__. [See demo](https://react-tools.ndria.dev/#/hooks/state/createPubSubStore)

## Usage

\`\`\`tsx
//File store.ts
const store = createPubSubStore(
	{
		user: {
			id: 0,
			name: "",
			eta: 0
		},
		spinner: false
	},
	{
		toggleSpinner: (store, val: boolean) => {
			store.spinner = val;
		}
	}
);
export const { usePubSubStore, mutateStore } = store;

//import {usePubSubStore} from '../store.ts';
const Comp1 = () => {
	const [state, setState] = usePubSubStore(store => store.user);

	return <div>
		<label htmlFor="id">ID:</label>
		<input type="number" name="id" value={state.id} onChange={(e) => setState(store => ({ ...store, id: Number(e.target.value) }))} />
		<label htmlFor="name">NAME:</label>
		<input type="text" name="name" value={state.name} onChange={(e) => setState(store => ({ ...store, name: e.target.value }))} />
		<label htmlFor="eta">ETA:</label>
		<input type="number" name="eta" value={state.eta} onChange={(e) => setState(store => ({ ...store, eta: Number(e.target.value) }))} />
	</div>
}

//import {usePubSubStore} from '../store.ts';
const Comp2 = memo(() => {
	const [state, setState, , mutators] = usePubSubStore(store => store.user.name);

	return <div>
		<label htmlFor="name">NAME:</label>
		<input type="text" name="name" value={state} onChange={(e) => setState(e.target.value)} />
		<button onClick={async () => {
			mutators.toggleSpinner(true);
			await new Promise(res => setTimeout(res, 4000));
			mutators.toggleSpinner(false);
		}}>Enable Spinner</button>
	</div>
})

//import {usePubSubStore} from '../store.ts';
export const CreatePubSubStore = () => {
	const [spinner] = usePubSubStore(store => store.spinner);
	return <div style={{ display: "grid", gridTemplateRows: "auto auto", gap: 20, justifyContent: "center" }}>
		<fieldset style={{padding: 20}}>
			<legend>Component 2</legend>
			<Comp2 />
		</fieldset>
		{
			spinner
				? <p>Loading...</p>
				: <fieldset style={{padding: 20}}>
					<legend>Component 1</legend>
					<Comp1 />
				</fieldset>
		}
	</div>
}
\`\`\`

> In this example it has been used _createPubSubStore_ hook to create a global store that contains a _user_ object and a _spinner_ value to handle logic of two components. The _updateStore_ and _usePubSubStore_ function returned from __createPubSubStore__ are exported to be used from other components:
> - __Component 1_ uses _usePubSubStore_ hook subscribing _user_ object from __store__ to edit user object properties by three input tags.
> - __Component 2_ uses:
> 	- _usePubSubStore_ hook subscribing only _name_ property of _user_ object from __store__ to edit name value.
> 	- _updateStore_ hook to update _spinner_ property from __store__ when button _handle spinner_ is clicked.


## API

\`\`\`tsx
createPubSubStore<T extends object, E extends Record<string, (store: T, ...args: any) => void>>(obj: T, mutatorsFn?: E, persist?: "localStorage" | "sessionStorge"): { getStore: () => T; mutateStore: (cb: (globStore: T) => void) => void; mutators: Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>, usePubSubStore: { (subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>] }}
\`\`\`


> ### Params
>
> - __obj__: _T extends object_  
Object that rapresent the initialState of the store.
> - __mutatorsFn?__: _E extends Record<string, (store: T, ...args: any) => void>_  
Object that contains specified void function to mutate the store value, not the store itself, that receives the store as first parameter and other optional parameters.
> - __persist=undefined?__: _"localStorage" | "sessionStorge"|undefined_  
value that indicates where persist the store, on the local or session Storage. If it isn't provided then store will not persist.
>



> ### Returns
>
> __result__:  __Object__:  
    - __getStore__ : _()=>T_  
    - __mutateStore__ : _(cb:(globStore:T)=>void)_  
    - __usePubSubStore__ : _<C>(subscribe?: (store: T) => C)=>[T|C, (store: T|C|((currStore: T) => T)|((currStore: C) => C)) => void, () => T]_  
> An object with:
> - __getStore__: __IMMUTABLE__ function that returns the store object.
> - __mutateStore__:  __IMMUTABLE__ function that modifies the store value, not the store itself, by a void callback function that receives an only parameter, the store. Changes will be published to every subscriber.
> - __mutators__: object with  __IMMUTABLE__ functions built on _mutatorsFn_ param, if it is present: they work like __mutateStore__ function and they can be executed passing them optional parameters if specified in _mutatorsFn param_. Changes will be published to every subscriber.
> - __usePubSubStore__: It's the hook to be used inside components to access the store. It receives an optional callback _subscribe_ to specify to which part of store you want to subscribe.If callback missed, the whole store will be subscribed. It returns an array of four elements:
>     - _first element_: the __state__. It represents what has been subscribed.
> 	   - _second element_: the __setState__. An _immutable_ function to update the state. It can be executed given it a new version of the subscribed value or with a callback that receives the subscribed value and returns a new version of it.
>     - _third element_: the __getState__. An _immutable_ function that returns the current subscribed value.
>     - _fourth element_: the __mutators__. Like above.
>`,iM=`# defaultSerializer
Function to serialize any type of value. [See demo](https://react-tools.ndria.dev/#/utils/defaultSerializer)

## API

\`\`\`tsx
defaultSerializer<T>(target: T)
\`\`\`


> ### Params
>
> - __target__: _T_
>



> ### Returns
>
> 
> - _string_  
>`,lM=`# detectBrowser
It detects used browser or return __"No detection"__. [See demo](https://react-tools.ndria.dev/#/utils/detectBrowser)

## API

\`\`\`tsx
detectBrowser(): "chrome" | "firefox" | "safari" | "opera" | "edge" | "No detection"
\`\`\`





> ### Returns
>
> __result__
> - _"chrome"|"firefox"|"safari"|"opera"|"edge"|"No detection"_  
>`,sM=`# getBase64
Function to obtain a Base64 from value specified if supported, otherwise throw an Error. [See demo](https://react-tools.ndria.dev/#/utils/getBase64)

## API

\`\`\`tsx
getBase64<T>(target: string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[], options?: ToDataURLOptions | UseBase64ObjectOptions<T>): Promise<string>
\`\`\`


> ### Params
>
> - __target__: _string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[]_
> - __options?__: _ToDataURLOptions | UseBase64ObjectOptions<T>_
>



> ### Returns
>
> 
> - _string_  
>`,cM=`# getKeyObjectFromValue
Function that given an object and a value, returns the corrispondent key of this value or undefined. [See demo](https://react-tools.ndria.dev/#/utils/getKeyObjectFromValue)

## API

\`\`\`tsx
getKeyObjectFromValue<T extends Record<string, unknown>, E extends string|number|symbol = keyof T>(object: T, value?: unknown): E | undefined
\`\`\`


> ### Params
>
> - __object__: _Record<string,unknown>_  
object from which get key by a value.
> - __value__: _unknown_  
value of the object
>



> ### Returns
>
> __key__: object key for the given value.
> - _keyof Record<string,unknown>|undefined_  
>`,uM=`# getObjectFromDottedString
Function that, given a path, a value and an optional object, returns an object with as many properties as there are in the path, assigning the value passed to the last one specified. [See demo](https://react-tools.ndria.dev/#/utils/getObjectFromDottedString)

## API

\`\`\`tsx
getObjectFromDottedString<T, E extends Record<string, unknown>>(path: string, value: T, object?: E): E
\`\`\`


> ### Params
>
> - __path__: _string_  
string value separated by dot, indicating that path where assign the passed value.
> - __value__: _unknown_  
value to assign to the property specified in path.
> - __object?__: _Record<string,unknown>_  
optional object that will be used as start object.
>



> ### Returns
>
> __result__: object create by path and value indicated.
> - _Record<string, unknown>_  
>`,dM="# hotKeyHandler\nUtility function for _onKeyDown_ and _onKeyUp_ events handler that supports keys combination. [See demo](https://react-tools.ndria.dev/#/utils/hotKeyHandler)\n\n## API\n\n```tsx\nhotKeyHandler(hotKeys: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>): (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void\n```\n\n\n> ### Params\n>\n> - __hotKeys__: _`${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`_  \nhotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.\n> - __listener__: _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>_  \nlistener to be executed on specified event\n>\n\n\n\n> ### Returns\n>\n> \n> - _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void_  \n>",pM=`# isAsync
It detects if a function is asynchronous. [See demo](https://react-tools.ndria.dev/#/utils/isAsync)

## API

\`\`\`tsx
isAsync<T extends unknown[], E = unknown>(fn: E | Promise<E> | ((...args: T)=> E | Promise<E>)): boolean
\`\`\`


> ### Params
>
> - __fn__: _(...args: unknown[])=> unknown | Promise<unknown>_
>



> ### Returns
>
> __result__
> - _boolean_  
>`,fM=`# isClient
It detects if code is running on client. [See demo](https://react-tools.ndria.dev/#/utils/isClient)

## API

\`\`\`tsx
isClient(): boolean
\`\`\`





> ### Returns
>
> __result__
> - _boolean_  
>`,hM=`# isDeepEqual
It returns true if the params are equal in depth. [See demo](https://react-tools.ndria.dev/#/utils/isDeepEqual)

## API

\`\`\`tsx
isDeepEqual(objA: unknown, objB: unknown, map = new WeakMap()):boolean
\`\`\`


> ### Params
>
> - __objA__: _unknown_
> - __objB__: _unknown_
> - __map=new WeakMap()?__: _WeakMap_
>



> ### Returns
>
> __result__
> - _boolean_  
>`,mM=`# isMouseEvent
It returns true if the event param is of MouseEvent type. [See demo](https://react-tools.ndria.dev/#/utils/isMouseEvent)

## API

\`\`\`tsx
isMouseEvent(event: SyntheticEvent): boolean
\`\`\`


> ### Params
>
> - __event__: _SyntheticEvent_
>



> ### Returns
>
> __result__
> - _boolean_  
>`,gM=`# isShallowEqual
It returns true if the params are equal until first level depth. [See demo](https://react-tools.ndria.dev/#/utils/isShallowEqual)

## API

\`\`\`tsx
isShallowEqual(objA: unknown, objB: unknown): boolean
\`\`\`


> ### Params
>
> - __objA__: _unknown_
> - __objB__: _unknown_
>



> ### Returns
>
> __result__
> - _boolean_  
>`,_M=`# isTouchEvent
It returns true if the event param is of TouchEvent type. [See demo](https://react-tools.ndria.dev/#/utils/isTouchEvent)

## API

\`\`\`tsx
isTouchEvent(event: SyntheticEvent | Event): boolean
\`\`\`


> ### Params
>
> - __event__: _SyntheticEvent_
>



> ### Returns
>
> __result__
> - _boolean_  
>`,vM=`# lazy
Wrapper around _React.lazy_ that works also with component without default export and with possibility to execute a function before and after component loading. [See demo](https://react-tools.ndria.dev/#/utils/lazy)

## API

\`\`\`tsx
lazy<T extends ComponentType<unknown>>(load: () => Promise<{ [k:string]: T }>, opts: { componentName?: string, beforeLoad?: () => void, afterLoad?: () => void } = {}): LazyExoticComponent<T>
\`\`\`


> ### Params
>
> - __load__: _() => Promise<{ [k:string]: T }>_  
function that returns a Promise or another thenable.
> - __opts?__: _Object_  
optional settings.
> - __opts.componentName?__: _string_  
name of the of the module to load lazy. If it is missing, and the _load_ execution result not have a default property, the first key in res is returned as result.
> - __opts.beforeLoad?__: _()=> void_  
function that will be executed before load component.
> - __opts.afterLoad?__: _()=> void_  
function that will be executed after load component.
>



> ### Returns
>
> __result__: a React component you can render in your tree.
> - _LazyExoticComponent<T>_  
>`,bM=`# mergeObjects
Function that, given two objects version, merges them into a single one. Via an optional parameter _forceUndefinedValue_ you can define how undefined values are treated. [See demo](https://react-tools.ndria.dev/#/utils/mergeObjects)

## API

\`\`\`tsx
mergeObjects<T extends object>(oldObj: T, newObj: RecursivePartial<T>, forceUndefinedValue?: boolean): T
\`\`\`


> ### Params
>
> - __oldObj__: _object_  
previous object version.
> - __newObj__: _RecursivePartial<object>_  
new object version.
> - __forceUndefinedValue=false?__: _boolean_  
boolean to indicate how treat undefined value.
>



> ### Returns
>
> __result__: mergedObject
> - _Record<string, any>_  
>`,yM=`# removePropertiesFromArrayObjects
Function that, given an array of objects and a property or an array of properties, return a new array without specified properties. [See demo](https://react-tools.ndria.dev/#/utils/removePropertiesFromArrayObjects)

## API

\`\`\`tsx
removePropertiesFromArrayObjects<T, E extends string | number | symbol = keyof T>(array: T[], property: E | E[]): Omit<T, E>[]
\`\`\`


> ### Params
>
> - __array__: _T[]_  
array of object.
> - __property__: _keyof T| (keyof T)[]_  
a property object or an array of properties inside objects of the given array.
>



> ### Returns
>
> __array__: a new array without targeted properites.
> - _Omit<T,E>[]_  
>`,kM=`# uniqueElementsArray
Function that given one or more array of object, returns a single array with unique elements by a specified property, an array of properties or _none_. [See demo](https://react-tools.ndria.dev/#/utils/uniqueElementsArray)

## API

\`\`\`tsx
uniqueElementsArray<T extends string | number | boolean | ((...args: unknown[]) => unknown) | bigint | object>(property: keyof T | (keyof T)[] | "none", ...args: (T[])[]): T[]
\`\`\`


> ### Params
>
> - __property__: _keyof T | (keyof T)[] | "none"_  
propertyo or array of properties of the arrays, or _none_. If elements of the arrays aren't objects, _none_ is required.
> - __args__: _(T[])[]_  
arrays from which remove duplicated.
>



> ### Returns
>
> __result__: array
> - _T[]_  
>`,wM=`# useActiveElement
Hook that returns activeElement and listen its changes. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useActiveElement)

## Usage

\`\`\`tsx
export const UseActiveElement = () => {
	const activeElement = useActiveElement();

	return (<>
		<p>Active element is: {activeElement?.tagName}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<span tabIndex={0} style={{backgroundColor: '#1A1A1A', borderRadius: 8, cursor: "pointer", padding: "15px 25px", margin: 'auto'}}>Span</span>
			<p tabIndex={0} style={{backgroundColor: '#1A1A1A', borderRadius: 8, cursor: "pointer", padding: "15px 25px", margin: 0}}>P</p>
			<button>Button</button>
		</div>
	</>)
}
\`\`\`

> The component has 3 HTML elements: a _span_ element with __tabindex__ attribute, a _p_ element with __tabindex__ attribute and a _button_ element. It renders also the current _active element_. If element focused changes, _active element_ displayed will change.


## API

\`\`\`tsx
useActiveElement():Element|null
\`\`\`





> ### Returns
>
> __activeELement__
> - __Union of__:  
>     - _Element_  
>     - _null_  
>`,xM=`# useAnimation
Hook to use [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useAnimation)

## Usage

\`\`\`tsx
export const UseAnimation = () => {
	const { ref, playAnimation, pauseAnimation, finishAnimation, reverseAnimation } = useAnimation({
		keyFrames: [
			{ clipPath: 'circle(20% at 0% 30%)' },
			{ clipPath: 'circle(20% at 50% 80%)' },
			{ clipPath: 'circle(20% at 100% 30%)' },
		],
		immediate: true,
		opts: {
			duration: 3000,
			iterations: 2,
			direction: 'alternate',
			easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
		}
	});

	return <div>
		<p ref={ref} style={{ color: '#d23e49', fontSize: '3rem', lineHeight: 1, fontWeight: 800, display: 'inline-flex', padding: '0 5rem' }}>useAnimate</p>
		<div style={{ display: 'flex', justifyContent: "center", gap: 20 }}>
			<button onClick={playAnimation}>Play</button>
			<button onClick={pauseAnimation}>Pause</button>
			<button onClick={reverseAnimation}>Reverse</button>
			<button onClick={finishAnimation}>Finish</button>
		</div>
	</div>
}
\`\`\`

> The component uses _useAnimation_ to compute an animation on p element. Use the buttons to perform action on animation.


## API

\`\`\`tsx
useAnimation<T extends Element>({ keyFrames, immediate, opts, onCancel, onFinish, onRemove, onError }: UseAnimationProps): UseAnimationResult<T>
\`\`\`


> ### Params
>
> - __param__: _UseAnimationProps_  
object
> - __param.keyFrames__: _Keyframe[] | PropertyIndexedKeyframes | null_  
array of keyfram objects ot a keyframe object whose properties are arrays of values to iterate over.
> - __param.immediate=false?__: _boolean_  
boolean to start animation immediatly or not.
> - __param.opts?__: _number | KeyframeAnimationOptions_  
either an integer representing the animation's duration (in milliseconds), or an Object containing one or more timing properties.
> - __param.onFinish?__: _(this: Animation, evt: AnimationPlaybackEvent) => void_  
function that will be executed when animation has been finished.
> - __param.onRemove?__: _(this: Animation, evt: Event) => void_  
function that will be executed when animation has been removed.
> - __param.onCancel?__: _(this: Animation, evt: AnimationPlaybackEvent) => void_  
function that will be executed when animation has been canceled.
> - __param.onError?__: _(err: unknown) => void_  
function that will be executed when an error occurred.
>



> ### Returns
>
> __result__:  _UseAnimationResult_  
> Object with these properties:
> - __isSupported__: boolean to indicate if Web Animations API is supported or not.
> - __ref__: RefCallback that need to be attached to element to animate.
> - __playAnimation__: function to play animation.
> - __pauseAnimation__: function to pause animation.
> - __finishAnimation__: function to finish animation.
> - __cancelAnimation__: function to cancel animation.
> - __persistAnimation__: function to persist animation.
> - __reverseAnimation__: function to reverse animation.
> - __commitStyles__: function that writes the computed values of the animation's current styles into its target element's style attribute.
> - __updatePlaybackRate__: function that sets the speed of an animation after first synchronizing its playback position.
>`,SM=`# useArray
Hook to use _Array data structure_ to handle component state with all Array methods. [See demo](https://react-tools.ndria.dev/#/hooks/state/useArray)

## Usage

\`\`\`tsx
const UseArray = () => {
	const array = useArray<string>();

	const inputRef = useRef<HTMLInputElement>(null);

	const pop = useCallback(() => {
		array.pop();
	}, [array]);

	const push = useCallback(() => {
		array.push(inputRef.current!.value);
	}, [array]);

	return (<>
		{array.join(",")}
		<br />
		<input ref={inputRef} type="text" />
		<br />
		<div style={{ marginTop: 15, gridTemplateColumns: 'auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={push}>Push</button>
			<button onClick={pop}>Pop</button>
		</div>
	</>);
}

UseArray.displayName = "UseArray";

export { UseArray }
\`\`\`

> The component has:
> - A _useArray_ internal state.
> - An uncontrolled input with _inputRef_ ref used to execute buttons actions.
> - A button _Push_ that push the input value into state by _push_ method of Array interface.
> - A button _Pop_ that remove last item into state by _pop_ method of Array interface.


## API

\`\`\`tsx
useArray<T>(initialState?: Array<T> | (() => Array<T>))
\`\`\`


> ### Params
>
> - __initialState?__: _Array<T> | (() => Array<T>_  
An Array or function that returns it.
>



> ### Returns
>
> 
> - _Array<T>_  
>`,CM=`# useAudio
Hook to use an HTML audio element. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useAudio)

## Usage

\`\`\`tsx
export const UseAudio = () => {
	const {MediaElement, state, controls: {play, pause}} = useAudio({ src: audio, controls: true });

	return <div>
		{MediaElement}
		<p>Status: {state.paused ? "paused" : state.playing ? "playing" : "ready"}</p>
		<button onClick={play} disabled={state.playing}>Play</button>
		<button onClick={pause} disabled={state.paused}>Pause</button>
	</div>
}

\`\`\`

> The component use _useAudio_ hook to use an audio track.


## API

\`\`\`tsx
useAudiocreateHTMLMediaHook<HTMLAudioElement>("audio");
\`\`\`


> ### Params
>
> - __param__: _UseAudioProps_  
Media HTML Attributes of an html audio element.
>



> ### Returns
>
> __result__:  _UseAudioResult_  
> Object with these properties:
> - __state__: object with current audio properties:
> 		- _buffered_: array of objects, with __start__ and __end__ properties, or null. It indicates the ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed.
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> - __controls__: object with current audio properties:
> 		- _play_: function to set audio.
> 		- _pause_: function to pause audio.
> 		- _mute_: function to mute audio.
> 		- _unmute_: function to unmute audio.
> 		- _playbackRate_: function to set audio playbackRate.
> 		- _volume_: function to set audio volume.
> 		- _seek_: function to seek to the given time with low precision.
> - MediaElement: HTMLAudioElement to render.
> - ref: ref to HTMLAudioElement.
>`,EM=`# useBattery
Hook for accessing and monitoring device battery status. Refer to [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useBattery)

## Usage

\`\`\`tsx
export const UseBattery = () => {
	const status = useBattery();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(status).map(el => (
				<p key={el}>{el}: {el === "isSupported" ? status.isSupported ? "Yes" : "No": status[el as keyof typeof status]}</p>
			))
		}
	</div>)
}
\`\`\`

> The component displays device battery information.


## API

\`\`\`tsx
useBattery(opts?: { onChargingChange?: (evt: Event) => void, onChargingTimeChange?: (evt: Event) => void, onDischargingTimeChange?: (evt: Event) => void, onLevelChange?: (evt: Event) => void }): BatteryStatus
\`\`\`


> ### Params
>
> - __opts?__: _Object_  
optional object parameter to listen battery events change.
> - __opts.onChargingChange?__: _(evt: Event) => void_  
callback that will be executed when chargingchange event is fired.
> - __opts.onChargingTimeChange?__: _(evt: Event) => void_  
callback that will be executed when chargingtimechange event is fired.
> - __opts.onDischargingTimeChange?__: _(evt: Event) => void_  
callback that will be executed when dischargingtimechange event is fired.
> - __opts.onLevelChange?__: _(evt: Event) => void_  
callback that will be executed when levelchange event is fired.
>



> ### Returns
>
> __result__:  _BatteryStatus_  
> Object with:
> - __isSupported__: boolean that indicates if Battery Status API is available.
> - __level__: number that indicates battery level: is a number between 0 and 1.
> - __charging__: boolean that indicates if battery is charging.
> - __chargingTime__: number that indicates time in seconds remaining to full charge, or infinity.
> - __dischargingTime__: number that indicates time in seconds remaining to empty charge, rounded in 15 minutes by API.
>`,TM=`# useBeforeUnload
Hook to handle beforeunload event. [See demo](https://react-tools.ndria.dev/#/hooks/events/useBeforeUnload)

## Usage

\`\`\`tsx
export const UseBeforeUnload = () => {
	useBeforeUnload({
		listener: useCallback((evt: BeforeUnloadEvent) => {
			evt.preventDefault();
			evt.returnValue = true;
		}, [])
	});

	return (<>
		<a href="/">Go To home</a>
	</>);
}
\`\`\`

> The component uses _useBeforeUnload_ hook to ask confirm to user if he is sure to leave page when he changes page.


## API

\`\`\`tsx
useBeforeUnload({element, listener, opts}:{ element?: RefObject<HTMLElement> | Window | undefined, listener: (evt: BeforeUnloadEvent) => void, opts?: boolean | AddEventListenerOptions}): ()=>void
\`\`\`


> ### Params
>
> - __options__: _Object_
> - __options.listener__: _(evt: BeforeUnloadEvent) => void_  
listener to be executed on beforeunload event fired.
> - __options.element=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
> - __options.listenerOpts?__: _boolean | AddEventListenerOptions_  
options for listener
>



> ### Returns
>
> __remove__: function to manually remove listener.
> - _()=>void_  
>`,AM=`# useBluetooth
Hook to use [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useBluetooth)

## Usage

\`\`\`tsx
export const UseBluetooth = () => {
	const [value, requestDevice] = useBluetooth();

	const [error, setError] = useState("");

	const getDevice = useCallback(() => {
		requestDevice().catch(err => {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError(err as string);
			}
		})
	}, [requestDevice]);

	return <>
		<p>
			Bluetooth supported: {value.isSupported ? "Yes" : "No"}
		</p>
		{
			value.isConnected &&
			<p>
					Device Name: {value.device?.name}
			</p>
		}
		<button type="button" onClick={getDevice} disabled={!value.isSupported}>Get Bluetooth device</button>
		{
			error &&
			<p style={{color: 'red'}}>
					{error}
			</p>
		}
	</>
}
\`\`\`

> The component uses _useBluetooth_ hook to detect if Bluetooth API is supported and show all available bluetooth devices and show renders its name after connection.


## API

\`\`\`tsx
useBluetooth():[{isSupported: boolean, isConnected: boolean, device: BluetoothDevice|null, server: BluetoothRemoteGATTServer|null}, (opts?: BluetoothDevicesOptions)=>Promise<void>]
\`\`\`





> ### Returns
>
> __result__
> - __Array__:  
>     - __Object__:  
>         - __isSupported__ : _boolean_  
>         - __isConnected__ : _boolean_  
>         - __device__ : _BluetoothDevice|null_  
>         - __server__ : _BluetoothRemoteGATTServer|null_  
>     - _(opts?: BluetoothDevicesOptions)=>Promise<void>_  
>`,PM=`# useBroadcastChannel
Hook to use [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useBroadcastChannel)

## Usage

\`\`\`tsx
export const UseBroadcastChannel = () => {
	const [state, setState] = useBroadcastChannel<string>("react-tools");

	return <div>
		<h2>Open page on multiple tab to see how hook work</h2>
		<p>State: {state}</p>
		<form
			onSubmit={(e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				setState(((e.target as HTMLFormElement).elements.namedItem("text") as HTMLInputElement).value)
			}}
		>
			<input name="text" type="text" />
			<button type="submit">SEND</button>
		</form>
	</div>
}
\`\`\`

> The component uses _useBroadcastChannel_ hook to send a text in a broadcast channel


## API

\`\`\`tsx
useBroadcastChannel<T>(name: string, onMessage?: (evt:MessageEvent<T>)=>void, onError?: (evt: MessageEvent)=>void):[T|undefined, (data:T)=>void]
\`\`\`


> ### Params
>
> - __name__: _string_  
broadcast channel name.
> - __onMessage?__: _(evt:MessageEvent)=>void_  
function that will be execute when a message occurred.
> - __onError?__: _(evt:MessageEvent)=>void_  
function that will be execute when a error message occurred.
>



> ### Returns
>
> __result__:  __Array__:  
    - _T|undefined_  
    - _(data:T)=>void_  
> Array of:
> - first element: __data__ received in broadcast channel.
> - second element: __send__ function to send data on broadcast channel.
>`,jM=`# useCallbackCompare
Custom useCallback that returns memoized callback that changes only when comparator function, received as third parameter, returns true. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useCallbackCompare)

## Usage

\`\`\`tsx
const UseCallbackCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [message, setMessage] = useState("Nothing to show...");

	const defaultCallback = useCallback(() => {
		setMessage(\`useCallback: id:\${state.id} - name:\${state.name}\`);
	}, [state]);

	const callbackCompare = useCallbackCompare(
		() => {
			setMessage(\`useCallbackCompare: id:\${state.id} - name:\${state.name}\`);
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{message}</p>
		<button style={{margin: '0 .25rem'}} onClick={() => setState(t => ({ ...t, id: t.id + 1 }))}>Increment state counter</button>
		<button style={{margin: '0 .25rem'}} onClick={defaultCallback}>Set defaultCallback message</button>
		<button style={{margin: '0 .25rem'}} onClick={callbackCompare}>Set callbackCompare message</button>
	</>);
};

UseCallbackCompare.displayName = "UseCallbackCompare";

export { UseCallbackCompare };
\`\`\`

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a useMemo that return that value of _state variable_.
> - a useMemoCompare that return that value of _state variable_ and a function compare that compares _state name property_.
> - a button with a function attached to onClick event that increment _state id property_.
> 
> Since compare function compares only _name property_, useMemoCompare is executed only once and its state value isn't updated. You can see this in dev tool console also.


## API

\`\`\`tsx
useCallbackCompare<T extends Function, E = unknown>(cb: T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T
\`\`\`


> ### Params
>
> - __cb__: _T_  
callback.
> - __deps__: _DependencyListTyped_  
typed DependencyList.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new \`deps\`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useCallback.
>



> ### Returns
>
> __cb__: memoized callback
> - _T_  
>`,RM=`# useCallbackDeepCompare
Custom useCallback that returns memoized callback that changes only if deps are different in depth. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useCallbackDeepCompare)

## Usage

\`\`\`tsx
const UseCallbackDeepCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [message, setMessage] = useState("Nothing to show...");

	const defaultCallback = useCallback(() => {
		setMessage(\`useCallback: id:\${state.id} - name:\${state.name}\`);
	}, [state]);

	const callbackCompare = useCallbackDeepCompare(
		() => {
			setMessage(\`useCallbackDeepCompare: id:\${state.id} - name:\${state.name}\`);
		},
		[state]
	);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{message}</p>
		<button style={{margin: '0 .25rem'}} onClick={() => setState(t => ({ ...t, id: t.id + 1 }))}>Increment state counter</button>
		<button style={{margin: '0 .25rem'}} onClick={defaultCallback}>Set defaultCallback message</button>
		<button style={{margin: '0 .25rem'}} onClick={callbackCompare}>Set callbackCompare message</button>
	</>);
};

UseCallbackDeepCompare.displayName = "UseCallbackDeepCompare";

export { UseCallbackDeepCompare };
\`\`\`

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _message useState variable_ that's a string rendered in a tag p.
> - a _useCallback_ function that update _message variable_ with _state variable_ values.
> - a _useCallbackDeepCompare_ function that update _message variable_ with _state variable_ values.
> - a button with a function attached to onClick event that increment _state id property_.
> - a button with a _useCallback_ function attached to onClick event.
> - a button with a _useCallbackDeepCompare_ function attached to onClick event.
> 
> _useCallbackDeepCompare_ updates its state value and sets correct message since it compares changes in depth.


## API

\`\`\`tsx
useCallbackDeepCompare<T extends Function>(cb: T, deps: DependencyList):T
\`\`\`


> ### Params
>
> - __cb__: _T_  
callback.
> - __deps__: _React.DependencyList_  
DependencyList.
>



> ### Returns
>
> __cb__: memoized callback
> - _T_  
>`,MM=`# useClickOutside
Hook to listen and execute an action when there is a click outside an element. [See demo](https://react-tools.ndria.dev/#/hooks/events/useClickOutside)

## Usage

\`\`\`tsx
export const UseClickOutside = () => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, () => setIsOpen(false));

	return <div style={{ margin: "0 auto", width: "fit-content" }}>
		<button onClick={() => setIsOpen(true)} disabled={isOpen}>Dropdown</button>
		<div ref={ref}>
			{
				isOpen && <Dropdown/>
			}
		</div>
	</div>
}
\`\`\`

> The component renders a button to open a dropdown. When dropdown is open, the button is disabled. To close dropdown is used _useClickOutside_ that keeps a reference to dropdown container and closes dropdown when there is a click outside dropdown container.


## API

\`\`\`tsx
useClickOutside(target: RefObject<HTMLElement> | HTMLElement, handler: (evt: Event) => void):void
\`\`\`


> ### Params
>
> - __target__: _RefObject<HTMLElement> | HTMLElement_  
DOM element or ref
> - __handler__: _(evt:Event)=>void_  
callback to be executed.
>


`,LM=`# useClipboard
Hook to handle Clipboard. Refers to [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). __N.B.__: The hook has the same compatibility issues as the Clipboard API for Firefox, i.e. it is currently impossible to read from the clipboard. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useClipboard)

## Usage

\`\`\`tsx
export const UseClipboard = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [val, setVal] = useState("");
	const [value, write, read] = useClipboard({ useValue: true, target: ref, dataType: "text" });
	const copy = useCallback(async () => {
		await write(getSelection()?.toString() || "");
	}, [write])

	const paste = useCallback(async () => {
		const value = await read();
		setVal(value as string);
	}, [read])

	return <div style={{ display: "grid", gridTemplateColumns: "50% 50%", columnGap: 15 }}>
		<div ref={ref} style={{ position: "relative", border: "1px solid lightgray" }}>
			<div style={{ display: "grid", gridTemplateColumns: "100px 100px", justifyContent: "center", columnGap: 15 }}>
				<button onClick={copy}>Copy</button>
				<button onClick={paste}>Paste</button>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
		</div>
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 15, border: "1px solid lightgray" }}>
			<div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto" }}>
				<p><strong>Use ClipboardValue:</strong></p>
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</div>
			<div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto" }}>
				<p><strong>Internal value:</strong></p>
				<pre>{JSON.stringify(val, null, 2)}</pre>
			</div>
		</div>
	</div>
}
\`\`\`

> - The component has an internal state _val_ and invokes _useClipboard_ hook with these properties: _useValue_=__true__ _target_=__ref__ and _dataType_=__text__. It means that hook will return _value_ of type __string__ and _write_ and _read_ functions that handle __text__ data type. The component declares also two functions:
> 	- _copy_ that invokes __write__ function to write into clipboard text selected.
> 	- _paste_ that invokes __read__ function to get value from clipboard and setting it to internal stave variable _val_.
> - __ref__ is attached to a div that contains two buttons _COPY_ and _PASTE_, that have _copy_ and _paste_ functions respectively to handle their click event and two paragraph texts.
> - Another div is rendered that displays the internal state _val_ and current _clipboard_ values.


## API

\`\`\`tsx
useClipboard({ useValue, dataType, target }: { useValue: boolean, dataType: "text" | "any", target?: RefObject<HTMLElement> | HTMLElement }): [string, (text: string) => Promise<void>, () => Promise<string>] | [string | Blob | (string | Blob)[], (blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>] | [(text: string) => Promise<void>, () => Promise<string>] | [(blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>]
\`\`\`


> ### Params
>
> - __param__: _Object_
> - __param.useValue__: _boolean_  
return a value with current clipboard value or not.
> - __param.target?__: _RefObject<HTMLElement>|HTMLElement_  
target on which delimiter handling.
> - __param.dataType?__: _"text"|"any"_  
data type handling. Based on it, Hook will return the functions for writing or reading text only or any type of data.
>



> ### Returns
>
> __array__: elements depends on _useValue_ and _dataType_ values: if _dataType_ equals __text__ there will are only function to writing and reading text data type, otherwise any data type. If _useValue_ is true the first element will be _clipboard current value_.
> - __Union of__:  
>     - __Array__:  
>         - _string_  
>         - _(text: string) => Promise<void>_  
>         - _() => Promise<string>_  
>     - __Array__:  
>         - _string|Blob|(string|Blob)[]_  
>         - _(blob: Blob|Blob[]) => Promise<void>_  
>         - _() => Promise<string|Blob|(string|Blob)[]>_  
>     - __Array__:  
>         - _(text: string) => Promise<void>_  
>         - _() => Promise<string>_  
>     - __Array__:  
>         - _(blob: Blob|Blob[]) => Promise<void>_  
>         - _() => Promise<string|Blob|(string|Blob)[]>_  
>`,DM=`# useColorScheme
Hook to handle ColorScheme. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useColorScheme)

## Usage

\`\`\`tsx
export const UseColorScheme = () => {
	const [value, update] = useColorScheme({
		defaultValue: "mediaQuery",
		returnValue: true,
		getter: useCallback(() => sessionStorage.getItem("color-scheme") as "dark" | "light" | null, []),
		setter: useCallback((val: "dark" | "light") => sessionStorage.setItem("color-scheme", val), [])
	});

	return (
		<div className="container-themed" data-color={value}>
			<p>Current color-scheme is: {value}</p>
			<button onClick={() => update(value === "dark" ? "light" : "dark")}>Change color</button>
		</div>
	);
}
\`\`\`

> The component uses _useColorScheme_ with these properties:
> - _defaultValue_: __"mediaQuery"__, so it read color-scheme with media query.
> - _returnValue_: __true__, so it returns current value.
> - _getter_: a function that returns value from sessionStorage item with key "color-scheme".
> - _setter_: a function that save current value to sessionStorage item with key "color-scheme".
> The component renders a div with a class container that changes border and text colors by color-scheme selected and a button to manually change value.


## API

\`\`\`tsx
useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light"|"dark") => void, returnValue: boolean }): ["light" | "dark", (schema: "light" | "dark") => void] | ((schema: "light" | "dark") => void)
\`\`\`


> ### Params
>
> - __param__: _Object_
> - __param.defaultValue__: _"dark"|"light"|"mediaQuery"_  
initial value if _getter_ function isn't present or isn't return a valid value. It can be _dark_ _light_ or _mediaQuery_ which means that must to be used media query prefers-color-scheme to detect initial value.
> - __param.getter?__: _()=>"dark"|"light"|null|undefined_  
an optional function used to initialize current value. For example, it can be useful for reading the value from an attribute of an html file or from localStorage.
> - __param.setter?__: _("dark"|"light")=>void_  
an optional function, which should work in conjunction with the _getter_ function, to run when the color scheme changes to save the value for future runs.
> - __param.returnValue__: _boolean_  
if true returns only a function to manually change the color scheme value.
>



> ### Returns
>
> __result__: if _returnValue_ is true, _result_ is the function to update color scheme value, otherwise is an array where first element is current value and second element is the function to update value.
> - __Union of__:  
>     - __Array__:  
>         - _"dark"|"light"_  
>         - _(schema:"dark"|"light") => void_  
>     - _(schema:"dark"|"light") => void_  
>`,OM=`# useContextMenu
Hook to add contextmenu event listener. The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key. [See demo](https://react-tools.ndria.dev/#/hooks/events/useContextMenu)

## Usage

\`\`\`tsx
export const UseContextMenu = () => {
	const pRef = useRef<HTMLParagraphElement>(null);
	useContextMenu({
		element: pRef,
		listener: useCallback((evt: PointerEvent) => {
			evt.preventDefault();
		}, [])
	});

	return <div>
		<p ref={pRef}>The context menu on this paragraph is disabled.</p>
		<p>On this paragraph context menu is enabled.</p>
	</div>
}
\`\`\`

> The component uses _useContextMenu_ hook and renders two paragraph. It uses the hook to disabled native contextmenu event on first paragraph.


## API

\`\`\`tsx
useContextMenu({ element, listener, effectType, listenerOpts }: { element: RefObject<HTMLElement> | Window, listener: (evt: PointerEvent) => void | Promise<void>, effectType?: "normal" | "layout", listenerOpts?: boolean | AddEventListenerOptions | undefined })
\`\`\`


> ### Params
>
> - __param__: _Object_  
props
> - __param.listener?__: _(evt: PointerEvent)=>void|Promise<void>_  
listener function executed when event fires.
> - __options.element=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
> - __param.effectType="normal"?__: _"normal"|"layout"_  
props
> - __param.listenerOpts?__: _boolean | AddEventListenerOptions_  
props
>


`,zM=`# useDebounce
Hook to delay a function execution with possibility to cancel execution and to invoke them immediately. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDebounce)

## Usage

\`\`\`tsx
export const UseDebounce = () => {
	const [state, setState] = useState("");
	const [toggle, setToggle] = useState(true);
	const [fn, cancel, immediate] = useDebounce(
		useCallback((e: BaseSyntheticEvent) => setState(e.target.value), []),
		{
			delay: 1000
		}
	);

	const onChange = useCallback((e: BaseSyntheticEvent) => {
		toggle
			? fn(e)
			: immediate(e)
	}, [fn, immediate, toggle]);

	return (<div>
		<p>State is: {state}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<input type="text" onChange={onChange} />
			<button onClick={cancel}>Cancel</button>
			<button onClick={() => setToggle(t => !t)}>{toggle ? "Active immediate" : "Active debounced"}</button>
		</div>
	</div>);
}
\`\`\`

> The component has:
> - A _state_ internal state.
> - A _toggle_ internal state used to choice which function execute on the OnChange event of the input element.
> - A _useDebounce_ hook that receives a function that updates _state_ variable with input element value and a delay of 1000ms. It returns the debounced function _fn_, the function to cancel debounced function execution _cancel_ and the function to immediately execute function _immediate_.
> - A _useCallback_ setted as Onchange function of the input element that executes _fn_ or _immediate_ to handle onChange, by _toggle_ value.


## API

\`\`\`tsx
useDebounce<T extends unknown[]>(fn: (...args: T)=>void, opts: { delay: number, focusedWindow?: boolean }): [(...args: T) => void, () => void, (...args: T) => void]
\`\`\`


> ### Params
>
> - __fn__: _T extends (...args: unknown[]) => void_  
The function to debounce.
> - __opts__: _Object_  
options for debounce behaviors.
> - __opts.delay__: _number_  
time in milliseconds to delay function execution.
> - __opts.focusedWindow?__: _boolean_  
if true, the function is executed after delay but only if the window is focused. __N.B._: works only in browser context.
>



> ### Returns
>
> __- array with debounced function, cancel function to abor debounced function and and immediate function to execute function immediately.__
> - __Array__:  
>     - _(...args: unknown[]) => void_  
>     - _()=>void_  
>     - _(...args: unknown[]) => void_  
>`,IM=`# useDeferredValue
_useDeferredValue_ hook polyfilled for React versions below 18. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useDeferredValue)

## API

\`\`\`tsx
useDeferredValue<T>(value: T): T
\`\`\`


> ### Params
>
> - __value__: _T_
>



> ### Returns
>
> __deferred value__
> - _T_  
>`,FM=`# useDerivedState
Hook useful when the internal state of a component depends on one or more props. It receives an _initial state_ and a _dependency array_ that works the same way as that of a _useEffect_, _useMemo_, and _useCallback_. Every time the dependencies change, the __derived state__ is resetted to _initial state_. A third optional parameter can be passed, to execute a _compute_ function after the dependencies are updated, without having a _useEffect_ within the component. [See demo](https://react-tools.ndria.dev/#/hooks/state/useDerivedState)

## Usage

\`\`\`tsx
export const UseDerivedState = () => {
	const [state, setState] = useState("");
	const [state1, setState1] = useState("");
	const [state2, setState2] = useState("");

	return <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
		<div>
			<p>Without useDerivedState</p>
			<input type="text" placeholder="User.." value={state1} onChange={(e) => setState1(e.target.value)} />
			<WithoutUseDerivedState user={state1} />
		</div>
		<div>
			<p>With useDerivedState</p>
			<input type="text" placeholder="User.." value={state} onChange={(e) => setState(e.target.value)} />
			<WithUseDerivedState user={state} />
		</div>
		<div>
			<p>With useDerivedState and compute</p>
			<input type="text" placeholder="User.." value={state2} onChange={(e) => setState2(e.target.value)} />
			<WithUseDerivedStateAndCompute user={state2} />
		</div>
	</div>
}

const WithoutUseDerivedState = memo(({user}:{user:string}) => {
	renders[1]++;
	const [state, setState] = useState<{ loading: boolean, friends: string[] }>({ loading: true, friends: [] });

	useEffect(() => {
		setState({ loading: true, friends: [] });
		serverAPI(user).then(data => setState({ loading: false, friends: data }));
	}, [user])

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[1]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})

const WithUseDerivedStateAndCompute = memo(({ user }: { user: string }) => {
	renders[2]++;
	const [state, setState] = useDerivedState<{ loading: boolean, friends: string[] }>(
		{ loading: true, friends: [] },
		[user],
		() => {
			state.loading && serverAPI(user).then(data => {
				setState({ loading: false, friends: data })
			});
		}
	);

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[2]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})

const WithUseDerivedState = memo(({ user }: { user: string }) => {
	renders[3]++;
	const [state, setState] = useDerivedState<{loading: boolean, friends: string[]}>(
		{ loading: true, friends: [] },
		[user]
	);

	useEffect(() => {
		serverAPI(user).then(data => {
			setState({ loading: false, friends: data })
		});
	}, [setState, user]);

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[3]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})
\`\`\`

> The component has _three internal string states_ and renders three input fields and three components that receive one state each. These three components have an object as internal state with two properties _loading_, initially set to __true__, and _friends_ which is an initially empty array.
> Based on the _user_ prop they receive, they set the _loading_ property of the internal state to __true__ and invoke a _serverAPI_ function that simulates a backend call and returns a list of names filtered by the passed _prop_. This list values the _friends_ property of the internal state and this list together with the passed _user_ prop are rendered:
> - The _Without useDerivedState_ component uses the _useState_ and _useEffect_ hooks to implement this logic.
> - The _With useDerivedState_ component uses the _useDerivedState_ hook and the _useEffect_.
> - The _With useDerivedStateAndCompute_ component uses the _useDerivedState_ hook and the optional third parameter to implement all logic.
> 
> Each component also renders a counter of the times it is rendered.
> 
> The component without _useDerivedState_ hook is rendered one more time every time its _prop_ changes while the other two have the same number of renders.
> 
> Furthermore, if you debug the code you can see how in the first component there is no synchronization in the updating of the values since in a first render the rendered _prop_ user is updated and in a second render the writing \`loading\` is rendered instead of the list of names.


## API

\`\`\`tsx
useDerivedState<T>(initialState: T | (() => T), deps: DependencyList, compute?: EffectCallback): [T, Dispatch<SetStateAction<T>>]
\`\`\`


> ### Params
>
> - __initialState__: _T|()=>T_
> - __deps__: _DependencyList_  
dependencies list from which depends derived state.
> - __compute?__: _EffectCallback_  
function that will be executed when dependencies list change after resetting derived state to __initialState__.
>



> ### Returns
>
> __result__: array with a stateful value and a function to update it.
> - __Array__:  
>     - _T_  
>     - _Dispatch<SetStateAction<T>>_  
>`,UM=`# useDeviceMotion
Hook to handle [device motion](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDeviceMotion)

## Usage

\`\`\`tsx
export const UseDeviceMotion = () => {
	const data = useDeviceMotion();

	return <div style={{ textAlign: "center" }}>
		{
			Object.keys(data).map(key => {
				const value = data[key as keyof typeof data];
				return value !== null && typeof value === "object" && Reflect.get(value, "x")
					? <Fragment key={key}>
						<p>{key}:</p>
						<ul>
							<li>x: {Reflect.get(data[key as keyof typeof data] as object, "x")}</li>
							<li>y: {Reflect.get(data[key as keyof typeof data] as object, "y")}</li>
							<li>z: {Reflect.get(data[key as keyof typeof data] as object, "z")}</li>
						</ul>
					</Fragment>
					: value !== null && typeof value === "object" && Reflect.get(value, "alpha")
						? <Fragment key={key}>
							<p>{key}:</p>
							<ul>
								<li>alpha: {Reflect.get(data[key as keyof typeof data] as object, "alpha")}</li>
								<li>beta: {Reflect.get(data[key as keyof typeof data] as object, "beta")}</li>
								<li>gamma: {Reflect.get(data[key as keyof typeof data] as object, "gamma")}</li>
							</ul>
						</Fragment>
						: <p key={key}>{key}: {value !== null ? value.toString(): ""}</p>
			})
		}
	</div>
}
\`\`\`

> The component uses _useDeviceMotion_ hook to show device motion details.


## API

\`\`\`tsx
useDeviceMotion(): DeviceMotionProps
\`\`\`





> ### Returns
>
> __props__: device motion properties.
> - _DeviceMotionProps_  
>`,NM=`# useDeviceOrientation
Hook to handle [device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDeviceOrientation)

## Usage

\`\`\`tsx
export const UseDeviceOrientation = () => {
	const data = useDeviceOrientation();

	return <div style={{ textAlign: "center" }}>
		{
			Object.keys(data).map(key => {
				const value = data[key as keyof typeof data];
				return <p key={key}>{key}: {value !== null ? value.toString(): ""}</p>
			})
		}
	</div>
}
\`\`\`

> The component uses _useDeviceOrientation_ hook to show device orientation details.


## API

\`\`\`tsx
useDeviceOrientation(): DeviceOrientationProps
\`\`\`





> ### Returns
>
> __props__: device orientation properties.
> - _DeviceOrientationProps_  
>`,HM=`# useDialogBox
Hook to use Dialog Box _prompt_, _alert_ or _confirm_. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDialogBox)

## Usage

\`\`\`tsx
export const UseDialogBox = () => {
	const [response, setResponse] = useState("");
	const openPrompt = useDialogBox("prompt");
	const openAlert = useDialogBox("alert");
	const openConfirm = useDialogBox("confirm");

	return <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
		<p>Response: {response}</p>
		<div style={{ display: 'flex', gap: 10, justifyContent: "center" }}>
			<button
				onClick={() => {
					const resp = openPrompt("Are you open a prompt?");
					setResponse(resp!);
				}}
			>
				Open Prompt
			</button>
			<button
				onClick={() => {
					openAlert("You open a alert");
				}}
			>
				Open Alert
			</button>
			<button
				onClick={() => {
					const resp = openConfirm("You open a confirm. it's ok?");
					setResponse(resp ? "ok" : "ko");
				}}
			>
				Open Confirm
			</button>
		</div>
	</div>
}
\`\`\`

> The component renders three button that execute three _useDialogBox_ hook with a __type__ for each one.


## API

\`\`\`tsx
useDialogBox(type: "prompt" | "confirm" | "alert"): ((message?: string, _default?: string) => string | null) | ((message?: any) => void) | ((message?: string) => boolean)
\`\`\`


> ### Params
>
> - __type__: _"prompt"|"alert"|"confirm"_  
set dialog box type.
>



> ### Returns
>
> __open__: function to activate dialog box.
> - __Union of__:  
>     - _((message?: string, default?: string) => string|null)_  
>     - _((message?: any) => void)_  
>     - _((message?: string) => boolean)_  
>`,WM=`# useDisplayMedia
Hook to capture the contents of a display. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDisplayMedia)

## Usage

\`\`\`tsx
export const UseDisplayMedia = () => {
	const [stream, start, stop] = useDisplayMedia();
	const ref = useRef<HTMLVideoElement>(null);

	const init = async () => {
		await start();
	}

	if (ref.current) {
		stream
			? (ref.current.srcObject = stream)
			: (ref.current.srcObject = null);
	}

	return <div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 20, maxHeight: 350, overflow: "auto" }}>
		<button onClick={init}>Start</button>
		<button onClick={stop}>Stop</button>
		<video autoPlay width={300} height={200} ref={ref}/>
	</div>
}

\`\`\`

> The component renders a button that if clicked activate the capturing of the screen selected by user and render it on a video element.


## API

\`\`\`tsx
useDisplayMedia(): [MediaStream | undefined, (options?: TDisplayMediaStreamOptions) => Promise<void>, () => void]
\`\`\`





> ### Returns
>
> __result__:  __Union of__:  
    - __Array__:  
        - _MediaStream|undefined_  
        - _(options: TDisplayMediaStreamOption_  
    - _undefined) => Promise<void>, ()=>void]_  
> Array containing:
> - first element: the captured stream.
> - second element: function that starts capture.
> - third element: function that stops capture.
>`,BM=`# useDocumentPIP
Hook to use Document PIP [(Document-Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDocumentPIP)

## Usage

\`\`\`tsx
export const UseDocumentPIP = () => {
	const [show, setShow] = useState(true);
	const [c, setC] = useState(0);
	const { isSupported, openPIP, PipWindow, closePIP } = useDocumentPIP({
		onOpened: useCallback(() => setShow(false), []),
		onClose: useCallback(() => setShow(true), [])
	});

	return <div>
		<p>Window Counter</p>
		<button onClick={() => setC(c => c + 1)}>{c}</button>
		<p>Supported: {isSupported ? 'Yes' : 'No'}</p>
		{
			show &&
			<>
				<div>
					<button
						onClick={() => openPIP({
							inheritCSS: true
						})}
					>
						Open PIP
					</button>
				</div>
			</>
		}
		<PipWindow>
			<div style={{display: 'flex', flexDirection: "column", alignItems: "center", width: "100%", gap: 20}}>
				<h4 style={{textAlign: "center"}}>PIP Window Counter</h4>
				<button onClick={() => setC(c => c + 1)}>{c}</button>
				<button onClick={closePIP}>Close</button>
			</div>
		</PipWindow>
	</div>
}
\`\`\`

> The component uses _useDocumentPIP_ hook to show in a separate window the counter showed renderes by the component.


## API

\`\`\`tsx
useDocumentPIP({ options: { inheritCSS, window: wind } = { window: { height: 300, width: 450 } }, onOpen, onOpened, onClose, onError }: UseDocumentPIPProps): UseDocumentPIPResult
\`\`\`


> ### Params
>
> - __param__: _UseDocumentPIPProps_  
object
> - __param.options?__: _DocumentPIPOptions_  
object
> - __param.options.inheritCSS?__: _boolean_  
boolean that indicates if PIP window will inherit CSS from main window.
> - __param.options.window?__: _Object_  
object
> - __param.options.width=450?__: _number_  
number that indicates PIP window width. Default value is 450.
> - __param.options.height=300?__: _number_  
number that indicates PIP window height. Default value is 300.
> - __param.onOpen?__: _()=>void_  
function that will be executed on PIP opening.
> - __param.onOpened?__: _(evt: DocumentPictureInPictureEvent)=>void_  
function that will be executed when PIP is opened.
> - __param.onClose?__: _(evt: PageTransitionEvent)=>void_  
function that will be executed on PIP closing.
> - __param.onError?__: _(err: unknown)=>void_  
function that will be executed when error is throwing.
>



> ### Returns
>
> __result__:  _UseDocumentPIPResult_  
> Object with four properties:
> - __isSupported__: boolean that indicates if PIP is supported or not.
> - __openPIP__: function to open PIP.
> - __closePIP__: function to close PIP.
> - __PipWindow__: Component that wraps the element to render in Document Picture in Picture.
>`,VM=`# useDocumentVisibility
Hook to track document visibility. Refers to [Document VisibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState). [See demo](https://react-tools.ndria.dev/#/hooks/events/useDocumentVisibility)

## Usage

\`\`\`tsx
export const UseDocumentVisibility = () => {
	const status = useDocumentVisibility();
	const [messages, setMessages] = useState <{ status: DocumentVisibilityState, date: string }[]>([]);

	useEffect(() => {
		setMessages(m => ([...m, {status: status, date: new Date().toLocaleTimeString()}]))
	}, [status])

	return (<div>
		<h3>Status:</h3>
		{
			messages.map(el => (
				<p key={el.date}>{el.date}: {el.status}</p>
			))
		}
	</div>);
}
\`\`\`

> The component tracks every document visibility status change and display them on screen with date they taking place. Minimize window or change tab to show them.


## API

\`\`\`tsx
useDocumentVisibility(): DocumentVisibilityState
\`\`\`





> ### Returns
>
> __documentVisibility__
> - _DocumentVisibilityState_  
>`,$M=`# useDoubleClick
Hook to handle double click event. Double clicking in react as well as with vanilla js, it is possible to manage it but it is not possible to have both managers on the same element. Thanks to this hook it is possible to do this, and it works with all events that can be associated with a user click (for example _mousedown_ but also _touchstart_). [See demo](https://react-tools.ndria.dev/#/hooks/events/useDoubleClick)

## Usage

\`\`\`tsx
export const UseDoubleClick = () => {
	const [message, setMessage] = useState("");
	const handler = useDoubleClick({
		doubleClick: useCallback(() => {
			setMessage("Double click executed.")
		}, []),
		singleClick: useCallback(() => {
			setMessage("Single click executed.")
		}, [])
	});

	return <div>
		<p>Message: {message}</p>
		<button onClick={handler}>Click/DoubleClick</button>
	</div>
}
\`\`\`

> The component renders a tag p with __message__ state variable and a button which has an onClick handler. Its handler is __handler__, the returned function of _useDoubleClick_ hook that set __message__ value in different way by click type.


## API

\`\`\`tsx
useDoubleClick<T extends Element = Element, E extends Event = Event>(handler: ((evt: SyntheticEvent<T, E>) => Promise<void> | void) | { doubleClick: (evt: SyntheticEvent<T, E>) => Promise<void> | void, singleClick?: (evt: SyntheticEvent<T, E>) => Promise<void> | void, tolerance?: number }): ((evt: SyntheticEvent<T, E>) => Promise<void> | void)
\`\`\`


> ### Params
>
> - __handler__: _((evt: SyntheticEvent<T, E>) => Promise<void>|void)|Object_
> - __handler.doubleClick__: _((evt: SyntheticEvent<T, E>) => Promise<void> | void)_  
callback executed on double click.
> - __handler.singleClick?__: _((evt: SyntheticEvent<T, E>) => Promise<void> | void)_  
callback executed on single click.
> - __handler.tolerance=300?__: _number_  
delay to execute __singleClick__ callback.
>



> ### Returns
>
> __callback__
> - _((evt: SyntheticEvent<T, E>) => Promise<void>|void)_  
>`,qM=`# useEffectCompare
Custom useEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useEffectCompare)

## Usage

\`\`\`tsx
const UseEffectCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [messages, setMessages] = useState({ effect: "", effectCompare: "" });

	useEffect(() => {
		console.log("useEffect execution..");
		setMessages(m => ({ ...m, effect: \`useEffect --> Current state is: id: \${state.id} - name: \${state.name}\` }));
		return () => {
			console.log("useEffect clean up execution..");
			setMessages(m => ({ ...m, effect: "" }));
		}
	}, [state]);

	useEffectCompare(
		() => {
			console.log("useEffectCompare execution..");
			setMessages(m => ({ ...m, effectCompare: \`useEffectCompare --> Current state is: id: \${state.id} - name: \${state.name}\` }));
			return () => {
				console.log("useEffectCompare clean up execution..");
				setMessages(m => ({ ...m, effectCompare: "" }));
			}
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);


	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{messages.effect}</p>
		<p>{messages.effectCompare}</p>
		<button onClick={() => setState(t=> ({ ...t, id: t.id+1 }))}>Increment</button>
	</>);
};

UseEffectCompare.displayName = "UseEffectCompare";

export { UseEffectCompare };
\`\`\`

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _messages useState variable_ with _effect_ and _effectCompare_ properties that are rendered.
> - a _useEffect_ that update _messages effect property_ when _state_ change.
> - a _useEffectCompare_ that update _messages effect property_. CompareFn returns true when _state name property_ change.
> - a button with a function attached to onClick event that increment _state id property_.
> 
> Since compareFn compares only _name property_, useEffectCompare is reexecuted only once and its state value isn't updated. You can see this in dev tool console also.


## API

\`\`\`tsx
useEffectCompare<T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>)
\`\`\`


> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyListTyped_  
typed dependency list.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new \`deps\`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useEffect.
>



> ### Returns
>
> 
> - _void_  
>`,GM=`# useEffectDeepCompare
Custom useEffect that reexecutes EffectCallback only when deps are different in depth. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useEffectDeepCompare)

## Usage

\`\`\`tsx
const UseEffectDeepCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [renders, setRenders] = useState({memo:0, deepMemo: 0});

	useEffect(() => {
		console.log("Render default useEffect");
		setRenders(r => ({...r, memo: r.memo+1}));
	}, [state])

	useEffectDeepCompare(() => {
		console.log("Render memoDeepCompare");
		setRenders(r => ({...r, deepMemo: r.deepMemo+1}));
	}, [state]);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>useEffect render: {renders.memo}</p>
		<p>useEffectDeepCompare render: {renders.deepMemo}</p>
		<button onClick={() => setState(t=> ({ ...t}))}>Increment</button>
	</>);
};

UseEffectDeepCompare.displayName = "UseEffectDeepCompare";

export { UseEffectDeepCompare };
\`\`\`

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _renders useState variable_ with _memo_ and _deepMemo_ properties.
> - a useEffect that updates _renders memo property_ when _state variable_ change.
> - a useMemoDeepCompare that updates _renders deepMemo property_ when _state variable_ change.
> - a button with a function attached to onClick event that assigns to _state variable_ the same value.
> 
> Since useEffectDeepCompare checks for differences in depth, it is executed only once and it don't update renders deepMemo property. You can see this in dev tool console also.


## API

\`\`\`tsx
useEffectDeepCompare(cb: EffectCallback, deps: DependencyList):void
\`\`\`


> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyList_  
dependency list.
>



> ### Returns
>
> 
> - _void_  
>`,KM=`# useEffectOnce
Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useEffectOnce)

## Usage

\`\`\`tsx
const Child1 = () => {
	const [messages, setMessages] = useState<string[]>([]);

	useEffect(() => {
		setMessages(m => ([...m, "run effect"]));
		return () => {
			setMessages(m => ([...m, "run clean up function effect"]));
		}
	}, []);
	return (<div>
		<p><strong>UseEffect</strong></p>
		{messages.map((mess, index) => <p key={index}>{mess}</p>)}
	</div>);
}

const Child2 = () => {
	const [messages, setMessages] = useState<string[]>([]);

	useEffectOnce(() => {
		setMessages(m => ([...m, "run effect"]));
		return () => {
			setMessages(m => ([...m, "run clean up function effect"]));
		}
	});

	return (<div>
		<p><strong>UseEffectOnce</strong></p>
		{messages.map((mess, index) => <p key={index}>{mess}</p>)}
	</div>);
}

const UseEffectOnce = () => {
	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<Child1 />
			<Child2 />
		</div>
	);
};

UseEffectOnce.displayName = "UseEffectOnce";

export { UseEffectOnce };
\`\`\`

> The component has:
> - a _Child1_ component with a _messages useState variable_ and _useEffect_ that sets a message for effect and clean up executions.
> - a _Child2_ component with a _messages useState variable_ and _useEffectOnce_ that sets a message for effect and clean up executions.
> 
> Since _React 18 StrictMode_ executes effects twice (mount - unmount - mount), the _useEffect_ will print _run effect_ message twice, _useEffectOnce_ no.


## API

\`\`\`tsx
useEffectOnce(effect: EffectCallback)
\`\`\`


> ### Params
>
> - __effect__: _EffectCallback_
>


`,QM=`# useEventDispatcher
Hook to dispatch an Event or a CustomEvent. [See demo](https://react-tools.ndria.dev/#/hooks/events/useEventDispatcher)

## Usage

\`\`\`tsx
export const UseEventDispatcher = () => {
	const [state, setState] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useEventDispatcher(inputRef);

	const onSubmit = useCallback((e: BaseSyntheticEvent) => {
		dispatch(new CustomEvent("demo", { detail: e.target[0].value }));
		e.preventDefault();
	}, [dispatch]);

	useEventListener({
		type: "demo",
		element: inputRef,
		listener: (evt: CustomEvent) => {
			setState((evt as CustomEvent<string>).detail);
		},
	});

	return (<>
		<em>State is: </em> {state}
		<br />
		<form noValidate onSubmit={onSubmit}>
			<input type="text" ref={inputRef}/>
		</form>
	</>)

}
\`\`\`

> The component has:
> - A state variable.
> - An _inputRef_ ref variable attacched to an input element contained in a form.
> - An dispatch function returned from _useEventDispatcher_ with _inputRef_ as element.
> - An onSubmit function to handle form onSubmit that invokes _dispatch_ function with a CustomEvent("demo") which detail is valued with input value taken from onSubmit event.
> - A useEventListener of type _demo_, on element _inputRef_ and with a listener that takes CustomEvent and invokes setState with event detail.


## API

\`\`\`tsx
useEventDispatcher(element: RefObject<HTMLElement> | Window = window): (evt: Event | CustomEvent) => void
\`\`\`


> ### Params
>
> - __element=window?__: _RefObject<HTMLElement> | Window_  
target on which dispatch event
>



> ### Returns
>
> __dispatch__: function that dispatch the event on target
> - __Union of__:  
>     - _(evt: Event_  
>     - _CustomEvent) => void_  
>`,YM=`# useEventListener
Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle. [See demo](https://react-tools.ndria.dev/#/hooks/events/useEventListener)

## Usage

\`\`\`tsx
const UseEventListener = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const remove = useEventListener({ type: "click", listener: (e: Event) => console.log(e) });
	useEventListener({
		type: "click", listener: (e: Event) => {
			e.stopPropagation();
	}, element: buttonRef, listenerOpts: {capture: true} });

	return (<>
		<button onClick={() => remove()}>Remove</button>
		<button ref={buttonRef} style={{marginLeft: 10}}>click to log</button>
	</>);
}

UseEventListener.displayName = "UseEventListener";

export { UseEventListener };
\`\`\`

> The component has:
> - A _buttonRef_ ref variable linked to an button node element with text click to log.
> - A _useEventListener_ invocation with these options: _type_="click", _listener_=(e:Event)=>console.log(e). So the eventListener is attached to window and the invocation result is used to initialize a variable remove that remove the eventListener.
> - A _useEventListener_ invocation like that above but attached at button node by _buttonRef_ with _listenerOpts_ capture=_true_ and that stops event propagation.
> - A _button_ with text Remove that, if clicked, invokes the removeEventListener.
> 
> At every click on Demo area the eventListener attached on object window logs in console the event, while the eventListener attached on button logs when button is clicked. When button remove is clicked it removes the eventListener on window object. The button eventListener is removed during component unmount.


## API

\`\`\`tsx
useEventListener<T extends keyof WindowEventMap, E extends Element>({ type, listener, element = window, listenerOpts, effectType = "normal" }: { type: T|(T[]), listener: ((evt: WindowEventMap[T]) => unknown | Promise<unknown>), element?: RefObject<E> | E | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void)
\`\`\`


> ### Params
>
> - __options__: _Object_
> - __options.type__: _keyof WindowEventMap|(keyof WindowEventMap)[]_  
event or events type.
> - __options.listener__: _(evt: Event | CustomEvent) => void_  
listener to be executed on specified event.
> - __options.element=window?__: _RefObject<Element> | Element | Window_  
element on which attaching eventListener.
> - __options.listenerOpts?__: _boolean | AddEventListenerOptions_  
options for listener.
> - __options.effectType="normal"?__: _"normal"|"layout"_  
option to set which hook is used to attach event listener.
>



> ### Returns
>
> __remove__: used to manually remove the eventListener, otherwise is removed when component is unmounted.
> - _()=>void_  
>`,JM=`# useEventSource
Hook to handle an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) connection to an HTTP server, which sends events in text/event-stream format. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useEventSource)

## API

\`\`\`tsx
useEventSource<T>({ url, opts, events, immediateConnection, onOpen, onError, onMessage }: UseEventSourceProps): UseEventSourceResult<T>
\`\`\`


> ### Params
>
> - __param__: _UseEventSourceProps_  
object
> - __param.url?__: _string|URL_  
string that represents the location of the remote resource serving the events/messages.
> - __param.opts?__: _EventSourceInit_  
options to configure the new connection. The possible entries are: __withCredentials__ -> boolean value, defaulting to false, indicating if CORS should be set to include credentials.
> - __param.events?__: _{name: string, handler?:(evt:MessagEvent)=>void}[]_  
array of objects with properties __name__ and __handler__ to listen specified events from source.
> - __param.immediateConnection?__: _boolean_  
boolean to start connection immediatly.
> - __param.onOpen?__: _(evt: Event)=>void_  
function that will be executed when connection is opened.
> - __param.onError?__: _(evt: Event)=>void_  
function that will be executed when an error occurred.
> - __param.onMessage?__: _(evt: MessageEvent<T>)=>void_  
function that will be executed when a message from without event arrived.
>



> ### Returns
>
> __result__:  _UseEventSourceResult_  
> Object with these properties:
> - __status__: string rapresenting eventsource state connection: __READY__ __CONNECTING__ __OPENED__ or __CLOSED__.
> - __data__: last data value arrived from eventSource.
> - __open__: function that opens connection.
> - __close__: function that closes connection.
>`,XM=`# useEvents
Communication system based on Events pattern implemented on a EventTarget subclass. AddListener and dispatch functions to communicate. The result of invoking the _addListener_ function in turn returns a function that can be used to _removeListener_ on event. Otherwise, the listener is automatically removed when the component that has instantiated it is unmounted. [See demo](https://react-tools.ndria.dev/#/hooks/events/useEvents)

## Usage

\`\`\`tsx
const ChildComponent = memo(() => {
	const [, dispatch] = useEvents();
	const onChange = useCallback((e: BaseSyntheticEvent) => {
		dispatch(new CustomEvent("demo", { detail: {value: e.target.value} }));
	}, [dispatch]);
	return (
		<input type="text" onChange={onChange} />
	);
})
const UseEvents = () => {
	const [state, setState] = useState({ value: "" });
	const [ addListener ] = useEvents();

	useEffect(() => {
		const unsub = addListener("demo", (evt) => {
			setState((evt as CustomEvent).detail);
		})
		return () => {
			unsub();
		}
	}, [addListener]);

	return <div>
		<p>Value is: {state.value}</p>
		<ChildComponent/>
	</div>
}

UseEvents.displayName = "UseEvents";

export { UseEvents };
\`\`\`

> The component has:
> - A _useState_ that receives an object, with _value property.
> - A _useEvents_ that returns _addListener_ function.
> - A child component that has _useEvents_ that returns _dispatch_ function and renders an input text with an onChange handler that invoke the _dispatch_ function with a custom event with type _demo_ and with a custom event with input value as _detail_.
> 
> The main component calls _addlistener_ that updates component state inside an useEffect, in this way the listener _addListener_ is done only once and when the component is unmounted, it executes the _unlisten_.


## API

\`\`\`tsx
useEvents(): [(type: string, callback:<T>(evt: Event|CustomEvent<T>) => void, options?: boolean | AddEventListenerOptions) => ()=>void, <T>(evt: Event|CustomEvent<T>) => void]
\`\`\`





> ### Returns
>
> __result__: contains the _addListener_ and _dispatch_ functions.
> - __Union of__:  
>     - __Array__:  
>         - _(type: string, callback<T>:(evt: Even_  
>     - _CustomEvent<T>) => void, options?: boolean_  
>     - _AddEventListenerOptions) => ()=>void, <T>(evt: Event_  
>     - _CustomEvent<T>) => void]_  
>`,ZM=`# useEyeDropper
Hook to use [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useEyeDropper)

## Usage

\`\`\`tsx
export const UseEyeDropper = () => {
	const [color, setColor] = useState("");
	const { isSupported, open } = useEyeDropper();

	const onClick = async () => {
		const result = await open();
		setColor(result!);
	};

	return <div style={{ textAlign: "center" }}>
		<p>Is supported: {isSupported.toString()}</p>
		<button onClick={onClick}>Get Color</button>
		<br />
		<br />
		<label>Color </label><input type="color" value={color}/>
	</div>
}
\`\`\`

> The component uses _useEyeDropper_ hook to know if EyeDropper API is supported and returns a button to get a color with EyeDropper API.


## API

\`\`\`tsx
useEyeDropper({ onStart, onFinish }: { onStart?: () => void, onFinish?: (result: \`#\${string}\`) => void } = {})
\`\`\`


> ### Params
>
> - __opts__: _Object_  
options.
> - __opts.onStart?__: _()=>void_  
function that will be executed on __open__ invocation.
> - __opts.onFinish?__: _(result: \`#\${string}\`) => void_  
function that will be on __open__ retuns.
>



> ### Returns
>
> __result__: __isSupported__ to known if EyeDropper API is supported and __share__ function to use EyeDropper API.
> - __Object__:  
>     - __isSupported__ : _boolean_  
>     - __open__ : _(signal?: AbortSignal) => Promise<\`#\${string}\`>|Promise<void>_  
>`,eL=`# useFPS
Hook to detect FPS (Frames per second). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useFPS)

## Usage

\`\`\`tsx
export const UseFPS = () => {
	const fps = useFPS();
	return <p>FPS: {fps.currentFps} - avg: {fps.avg} - Max FPS: {fps.maxFps}</p>
}
\`\`\`

> The component uses _useFPS_ hook to compute FPS and shows details on screen.


## API

\`\`\`tsx
useFPS({ everySeconds, windowSize }:UseFPSProps={windowSize:10, everySeconds:.5}): UseFPSResult
\`\`\`


> ### Params
>
> - __opts?__: _UseFPSProps_  
configuration options to detect FPS.
> - __opts.everySeconds=0.5?__: _number_  
it indicates how often to compute FPS. Default is 0.5 second.
> - __opts.windowSize=10?__: _number_  
it indicates how FPS result keep in memory and computing average. Default is 10.
>



> ### Returns
>
> __result__:  _UseFPSResult_  
> Stateful object with these properties:
> -  __fps__: array of computed FPS by _windowSize_.
> -  __currentFps__: current FPS value.
> -  __avg__: average of FPS values kept in memory.
> -  __maxFps__: maximum FPS value computed.
>`,tL=`# useFetch
Hook to use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with more control and the possibility to execute request with suspense support. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useFetch)

## Usage

\`\`\`tsx
export const Delayed = () => {
	const [data, callSuspensable] = useFetch("https://jsonplaceholder.typicode.com/comments?id=5", { cache: "no-cache", suspensable: true });
	const [data1, call, loading, error] = useFetch("https://jsonplaceholder.typicode.com/comments?id=5", { cache: "no-cache" });

	if (loading ) {
		return <p>Loading...</p>
	}
	if (error) {
		return <p>Error: {JSON.stringify(error)}</p>
	}
	return <>
		<button onClick={() => callSuspensable()}>Call suspensable</button>
		<button onClick={() => call()}>Call</button>
		<pre>{JSON.stringify(data??data1, null, 2)}</pre>
	</>
}

export const UseFetch = () => {
	return <Suspense fallback="loading suspense...">
		<Delayed />
	</Suspense>
}
\`\`\`

> The component uses _useFetch_ hook to call jsonplaceholder API with suspense support and without it.


## API

\`\`\`tsx
useFetch<T>(url: RequestInfo | URL, { suspensable, onError, onLoading, ...rest }: RequestInit & { suspensable?: boolean, onLoading?: (loading: boolean) => void, onError?: (err: unknown) => void } = {}): [T|undefined, (conf?: RequestInit) => Promise<void>, boolean, unknown]
\`\`\`


> ### Params
>
> - __url__: _RequestInfo|URL_  
The resource that you wish to fetch. This can either be a string, a Request object or an URL object.
> - __options?__: _Object_  
An object containing any custom settings you want to apply to the fetch invokation.
> - __...options.rest?__: _RequestInit_  
properties to customize fetch settings.
> - __options.onLoading?__: _(loading: boolean)=>void_  
function that will be executed when loading state changes.
> - __options.onError?__: _(error:unknown)=>void_  
function that will be executed when error occurred.
> - __options.suspensable?__: _boolean_  
boolean that indicates if fetch request need to be suspends or not.
>



> ### Returns
>
> :  __Array__:  
    - _T|undefined_  
    - _(conf?: RequestInit) => Promise<void>_  
    - _boolean_  
    - _unknown_  
> Array with:
> - __data__: data returned from fetch.
> - __call__: function to fetch request.
> - __loading__: value that handle loading state.
> - __error__: value that handle error state.
>`,nL=`# useFullscreen
Hook to use [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useFullscreen)

## Usage

\`\`\`tsx
export const UseFullscreen = () => {
	const [isFullscreen, cbRef, enterFullscreen, exitFullscreen] = useFullscreen();
	return (
		<div ref={cbRef}>
			<div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
			<div>
				<button type="button" onClick={()=>enterFullscreen()}>
					enter Fullscreen
				</button>
				<button type="button" onClick={exitFullscreen} style={{ margin: '0 8px' }}>
					exit Fullscreen
				</button>
			</div>
		</div>
	);
}
\`\`\`

> The component render a div with a label to indicate if it is in fullscreen mode or not and two button to enter and exit from fullscreen mode.


## API

\`\`\`tsx
useFullscreen<T extends Element>(onEnter?: () => void|Promise<void>, onChange?: (evt: Event) => void, onExit?: () => void|Promise<void>): [boolean, RefCallback<T>, (opts?: FullscreenOptions) => Promise<void>, () => Promise<void>]
\`\`\`


> ### Params
>
> - __onEnter?__: _()=>void|Promise<void>_  
callback that will be executed before enter in fullscreen mode.
> - __onChange?__: _(evt: Event)=>void_  
callback that will be executed when target element fullscreen change.
> - __onExit?__: _()=>void|Promise<void>_  
callback that will be executed before exit from fullscreen mode.
>



> ### Returns
>
> __result__: array with: _isFullscreen_: boolean to indicate if there is fullscreen or not; _refCallback_: ref callback to be attached at target element; _enter_: function to enter in fullscreen mode; _exit_: function to exit from fullscreen mode.
> - __Array__:  
>     - _boolean_  
>     - _RefCallback<T>_  
>     - _(opts?: FullscreenOptions) => Promise<void>_  
>     - _() => Promise<void>_  
>`,oL=`# useGeolocation
Hook to use user's geographic location. Refer to [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useGeolocation)

## Usage

\`\`\`tsx
export const UseGeolocation = () => {
	const [error, setError] = useState("")
	const [location, currentPosition] = useGeolocation({
		mode: "manual",
		onError(error) {
			setError(error.message);
		}
	});

	return (<div style={{ textAlign: "left", width: 'fit-content', margin:'0 auto' }}>
		{
			error && <p style={{ color: 'red' }}>{error}</p>
		}
		<br/>
		<button onClick={currentPosition}>Get Location</button>
		<br />
		<p >isSupported: {location.isSupported ? "true" : "false"}</p>
		<p >Timestamp: {location?.position?.timestamp}</p>
		<p >Coords:</p>
		<div style={{paddingLeft: 10, textAlign: 'left', width: 'fit-content', margin: '0 auto'}}>
			<p>accuracy: {location.position?.coords.accuracy}</p>
			<p>altitude: {location.position?.coords.altitude}</p>
			<p>altitudeAccuracy: {location.position?.coords.altitudeAccuracy}</p>
			<p>heading: {location.position?.coords.heading}</p>
			<p>latitude: {location.position?.coords.latitude}</p>
			<p>longitude: {location.position?.coords.longitude}</p>
			<p>speed: {location.position?.coords.speed}</p>
		</div>
	</div>)
}
\`\`\`

> The component displays geographic location info.


## API

\`\`\`tsx
useGeolocation({mode, locationOptions, onError}: { locationOptions?: PositionOptions, mode: "observe" | "current" | "manual", onError?: (error: GeolocationPositionError) => void }): [GeoLocationObject, ()=>Promise<void>, ()=>Promise<()=>void>]
\`\`\`


> ### Params
>
> - __opts__: _Object_  
options to use geolocation.
> - __opts.locationOptions?__: _PositionOptions_  
An optional object which provides options for retrieval of the position data.
> - __opts.mode?__: _boolean_  
it establishes how to obtain the geographic location:
> - __opts.onError?__: _GeolocationPositionError_  
callback that will be executed if there will be errors.
>



> ### Returns
>
> __results__:  __Array__:  
    - _GeoLocationObject|undefined_  
    - _(successCallback: PositionCallback, errorCallback?: PositionErrorCallback|null|undefined, options?: PositionOptions|undefined) => number|void_  
    - _()=>void_  
> Array with:
> - _first element_: is the location object with two properties: __isSupported__ and __position__.
> - _second element_: function to obtain manually current location.
> - _third element_: function to obtain location on every changes.
>`,rL=`# useHotKeys
Hook to listen for the keyboard press, support key combinations, built on [hotKeyHandler](#/hotKeyHandler) utility function. [See demo](https://react-tools.ndria.dev/#/hooks/events/useHotKeys)

## Usage

\`\`\`tsx
export const UseHotKeys = () => {
	const [state, setState] = useState("");
	useHotKeys({
		hotKey: "ctrl+shift+b",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrl+shift+b")
		}
	});
	useHotKeys({
		hotKey: "ctrlCommand++",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrlCommand++")
		}
	});
	useHotKeys({
		hotKey: "ctrlCommand+a",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrlCommand+a")
		}
	});
	useHotKeys({
		hotKey: "Escape",
		listener: (evt) => {
			evt.preventDefault();
			setState("")
		}
	});

	return <>
		<p>Message: {state ? <><strong style={{color: "darkcyan"}}>{state}</strong> pressed.</>: ""}</p>
	</>
}
\`\`\`

> The component uses _useHotKeys_ hook to print a message on _ctrl+shift+a_, _ctrlCommand+p_ and _ctrlCommand+a_ keys combinations and clear message when _Escape_ is pressed.


## API

\`\`\`tsx
useHotKeys({ hotKey, type = "keydown", target = window, listener, listenerOpts }: { hotKey: \`\${string}\` | \`\${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+\${string}\` | \`\${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+\${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+\${string}\`, type?: "keydown" | "keyup", target?: RefObject<HTMLElement> | Window, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>, listenerOpts?: boolean | AddEventListenerOptions }): (() => void)
\`\`\`


> ### Params
>
> - __options__: _Object_
> - __options.hotKey__: _\`\${string}\` | \`\${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+\${string}\` | \`\${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+\${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+\${string}\`_  
hotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.
> - __options.type="keydown"?__: _"keydown"|"keyup"_  
event type.
> - __options.listener__: _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>_  
listener to be executed on specified event.
> - __options.target=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
> - __options.listenerOpts?__: _boolean | AddEventListenerOptions_  
options for listener.
>



> ### Returns
>
> __remove__: used to manually remove the eventListener, otherwise is removed when component is unmounted.
> - _()=>void_  
>`,aL=`# useHover
Hook that determines whether the item is hovered or not and handles state hovers. [See demo](https://react-tools.ndria.dev/#/hooks/events/useHover)

## Usage

\`\`\`tsx
export const UseHover = () => {
	const pRef = useRef<HTMLParagraphElement>(null);
	const hover = useHover(pRef);

	return (
		<div>
			<p>Is hover: {hover ? "hover" : "not hover"}</p>
			<p ref={pRef}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id delectus deserunt atque! Est id voluptatem sint accusamus non doloribus totam nobis nostrum provident facilis eos eum, placeat consequatur minus quidem.</p>
		</div>
	);
}
\`\`\`

> The component renders a paragraph element with some text to which is attacched a ref used for __useHover__ hook that returns if element is hovered or not. This value is rendered into another paragraph element.
> 
> When mouse is hovered paragraph element, status changes to true.


## API

\`\`\`tsx
useHover(target: RefObject<HTMLElement> | HTMLElement, opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: boolean }): boolean | void
\`\`\`


> ### Params
>
> - __target__: _RefObject<HTMLElement> | HTMLElement_  
DOM element or ref
> - __opts?__: _{ onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: boolean }_  
__onEnter__ function to be executed on starting hover, __onLeave__ function to be executed on hover finished, __onChange__ function to be executed when hover state changes, __return value__ boolean to return hover state value or not.
>



> ### Returns
>
> __result__: if __returnValue__ option is true or not specified, hook return state hover value, otherwise returns nothing.
> - _boolean|void_  
>`,iL=`# useId
_useId_ hook polyfilled for React versions below 18: __not use for key prop__. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useId)

## API

\`\`\`tsx
useId(): string
\`\`\`





> ### Returns
>
> 
> - _string_  
>`,lL=`# useIdleCallback
Hook to invoke a callback when the browser is idle. Refer to [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useIdleCallback)

## Usage

\`\`\`tsx
export const UseIdleCallback = () => {
	const [iterations, setIterations] = useState(0);
	const [log, setLog] = useState("");
	const [isSupported, invoke] = useIdleCallback(() => setLog("RequestIdleCallback executed"));

	const start = async() => {
		invoke();
		for (let i = 0; i < 5_000; i++) {
			setTimeout(() => setIterations(i + 1), 5);
		}
	}
	const reset = () => {
		setLog("");
		setIterations(0);
	}
	return (<div>
		<p>Supported: {isSupported ? "Yes" : "No"}</p>
		<p>Iterations are: {iterations}</p>
		<p>Log is: {log}</p>
		<button onClick={start}>START</button>
		<button onClick={reset}>RESET</button>
	</div>);
}
\`\`\`

> The component has:
> - a __iterations__ variable of type string.
> - a __log__ variable of type string.
> - a function __invoke__ returned from _useIdleCallback_ hook, initialized with a cb that update __log__ variable with message _"RequestIdleCallback executed"_.
> - a button start that when clicked executes __start__ function that executes __invoke__ function and updates __iterations__ variable inside a loop with iteration index.


## API

\`\`\`tsx
useIdleCallback(cb: (deadline?: IdleDeadline | DOMHighResTimeStamp | void) => void, opts?: {timeout: number , unsupportedBehavior?: "animationFrame" | "timeout" | "immediatly" }): [boolean, () => void, () => void]
\`\`\`


> ### Params
>
> - __cb -callback that should be called in the near future.__: _(deadline?: IdleDeadline | DOMHighResTimeStamp | void)=> void_
> - __opts?__: _IdleRequestOptions & { unsupportedBehavior: "animationFrame"|"timeout"|"immediatly" }_  
Contains optional configuration parameters.
>



> ### Returns
>
> __result__:  __Array__:  
    - _()=>void_  
    - _()=>void_  
> Array with three elements:
> - first element: __isSupported__; boolean value that indicates if _requestIdleCallback_ is supported or not.
> - second element: __invoke__: function to invoke execution.
> - third element: __cancel__: function to cancel execution.
>`,sL=`# useInfiniteScroll
Hook to deal with large sets of data. It allow users to scroll through content endlessly without explicit pagination or loading new pages. [See demo](https://react-tools.ndria.dev/#/hooks/events/useInfiniteScroll)

## Usage

\`\`\`tsx
export const UseInfiniteScroll = () => {
	const ref = useRef<HTMLDivElement>(null);
	const resultData = useMemo(() => Array(40).fill(undefined).map((_, index)=> index.toString()),[]);

	const getLoadMoreList = useCallback((data?: string[]): Promise<string[]> => {
		let list;
		if (!data) {
			list = resultData.slice(0, 10);
		} else {
			const limit = 10;
			let start = 0;
			if (data!.length !== resultData.length) {
				start = data!.length;
			}
			const end = start + limit;
			list = [...data, ...resultData.slice(start, end)];
		}
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(list!);
			}, 1000);
		});
	}, [resultData]);

	const { data, loading, loadData, fullData } = useInfiniteScroll<string[], HTMLDivElement>({
		request: getLoadMoreList,
		ref,
		hasMoreData: useCallback((d?: string[]) => (d || []).length !== resultData.length, [resultData]),
		threshold: 240
	});

	return (<>
		<h2 style={{textAlign: "left"}}>Items List</h2>
		<div ref={ref} style={{ height: 250, overflow: 'auto', border: '1px solid', padding: 12 }}>
			<div>
				{data?.map((item) => (
					<div key={item} style={{ padding: 12, border: '1px solid #f5f5f5' }}>
						item-{Number(item) + 1}
					</div>
				))}
			</div>
			<div style={{ marginTop: 8 }}>
				{!fullData && (
					<button type="button" onClick={loadData} disabled={loading}>
						{loading ? 'Loading more...' : 'Click to load more'}
					</button>
				)}

				{fullData && <span>No more data</span>}
			</div>
		</div>
	</>);
}
\`\`\`

> The component uses _useInfiniteScroll_ hook to render an items list that load all items while user scroll its container.


## API

\`\`\`tsx
useInfiniteScroll<T, E extends Element>({ request, ref, hasMoreData, threshold, onBefore, onError, onSuccess }: { request: (data?: T) => Promise<T>, ref: RefObject<E>, hasMoreData: (data?: T) => boolean, threshold?: number, onBefore?: () => void, onSuccess?: () => void, onError?: (err: unknown) => void }): { data: T | undefined, loading: boolean, fullData: boolean, updateData: (data: T | ((currentState?: T) => T)) => void, loadData: () => Promise<void> }
\`\`\`


> ### Params
>
> - __param__: _Object_
> - __param.request__: _(data?: T | undefined) => Promise<T>_  
request to obtain data.
> - __param.ref__: _RefObject<E extends Element>_  
a reference to container element.
> - __param.hasMoreData__: _(data?: T | undefined) => boolean_  
function that will be executed every time _data_ changes to detect if there will be new data values.
> - __param.threshold=0?__: _number|undefined_  
a threshold value by which load next data during scroll.
> - __param.onBefore?__: _()=>void_  
function that will be executed before to execute __request__.
> - __param.onSuccess?__: _()=>void_  
function that will be executed if __request__ execution has success.
> - __param.onError?__: _(err:unknown)=>void_  
function that will be executed if an error occurred calling __request__.
>



> ### Returns
>
> __result__:  __Object__:  
    - __data__ : _T|undefined_  
    - __loading__ : _boolean_  
    - __fullData__ : _boolean_  
    - __updateData__ : _(data:T|((currentState?:T)=>T))=>void_  
    - __loadData__ : _()=>Promise<void>_  
> Object with these properties:
> - __data__: data returned from _request_ execution.
> - __loading__: boolean that will be true if a _request_ execution is in pending, otherwise it will be false.
> - __fullData__: boolean that indicates if all data are returned or not.
> - __updateData__: function to update data from outside.
> - __loadData__:  function to manual load next data.
>`,cL=`# useIntersectionObserver
Hook to use Intersection Observer. Refer to [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). [See demo](https://react-tools.ndria.dev/#/hooks/events/useIntersectionObserver)

## Usage

\`\`\`tsx
export const UseIntersectionObserver = () => {
	const [state, setState] = useState(false);
	const [refCb, disconnect, reconnect] = useIntersectionObserver<HTMLTextAreaElement>(
		(entries) => {
			const result = entries[0].isIntersecting;
			result !== state && setState(result);
		}
	);

	return <div>
		<p>{"Is intersected: " + state}</p>
		<div style={{ position: "relative", width: "fit-contenr", height: 200, border: '1px solid lightblue', overflow: 'auto' }}>
			<textarea ref={refCb} style={{ position: "absolute", top: 400 }} rows={3}></textarea>
		</div>
		<br/>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
	</div>
}
\`\`\`

> The component renders a textarea element with a ref that receives callback returned from __useIntersectionObserver__ hook. There are also two button to disconnect and reconnect observer by functions returned from hook. The textarea element is inside a div, at 400px from top, so it isn't visible. It need to scroll div to see textarea.
> 
> Hook is initialized with a callback that verifies if textarea element intersecting window amd set result into __state variable__. The __state variable__ value is displayed on screen.


## API

\`\`\`tsx
useIntersectionObserver<T extends Element>(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit):[RefCallback<T>, () => void, () => void]
\`\`\`


> ### Params
>
> - __cb__: _IntersectionObserverCallback_  
The function which is called when the percentage of the target element is visible crosses a threshold. The callback is called with two parameters: __entries__ and __observer__.
> - __opts?__: _IntersectionObserverInit_  
An options object allowing you to set options for the observation.
>



> ### Returns
>
> __result__: array with: callback for ref element attribute to observe, function to _disconnect_ observer, function to _reconnect_ observer.
> - __Array__:  
>     - _RefCallback<T>_  
>     - _()=>void_  
>     - _()=>void_  
>`,uL=`# useInterval
Hook to handle setInterval timer function with the possibility to clear and promisify execution. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useInterval)

## Usage

\`\`\`tsx
export const UseInterval = () => {
	const [count, setCount] = useState(0);
	const [interval, setInterval] = useState(1000);
	const [apply, clear, applyPromisy] = useInterval(
		() => setCount(c => c + 1),
		interval
	)

	return (
		<div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<p>Count: {count}</p>
			<p>interval: {interval}</p>
			<div style={{ display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
				<button onClick={apply}>Increment count</button>
				<button onClick={clear}>Clear Interval</button>
				<button onClick={async()=>applyPromisy().then(()=>setInterval(1000))}>Increment promisy</button>
				<button onClick={() => setInterval(d => d + 1000)}>Increment interval</button>
				<button onClick={() => setInterval(() => 1000)}>Clear interval</button>
			</div>
		</div>
	);
}
\`\`\`

> The component has:
> - A _count_ state initialized to _0_.
> - A _interval_ state initialized to _1000_.
> - A _useInterval_ that receives a _callback_ to update _count_ by 1 and _interval_ as time to interval execution.
> - Two p tag to diplay current _count_ and _interval_ variable.
> - A button to execute _apply_ function returned from _useInterval_.
> - A button to increment by 1000 _interval_ state.
> - A button to restore _interval_ state to 1000.
> - A button to execute _clear_ function returned from _useInterval_.
> - A button to execute _applyPromisy_ function returned from _useInterval_ tha after _count_ state update, restore _interval_ state to 1000.


## API

\`\`\`tsx
useInterval<TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay: number): [(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>]
\`\`\`


> ### Params
>
> - __callback__: _(...args: unknown[])=>void_  
Function to call when the timer elapses.
> - __delay__: _number_  
The number of milliseconds to wait before calling the \`callback\`.
>



> ### Returns
>
> __- array: first element is the function to call setInterval; second element is the function to clearInterval; thrid element promisify setInterval.__
> - __Array__:  
>     - _(...args: TArgs) => void_  
>     - _() => void_  
>     - _(...args: TArgs) => Promise<void>_  
>`,dL=`# useIsMounted
Hoos to know when a component is mounted or not. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useIsMounted)

## Usage

\`\`\`tsx
const sleep = () => new Promise(res => setTimeout(res, 5000));

const Child1 = ({ setMessage }: { setMessage: React.Dispatch<React.SetStateAction<{child1: string;child2: string;}>>}) => {
	useEffectOnce(() => {
		sleep().then(()=>{setMessage(t=>({...t, child1: "OK"}))})
	})
	return <p>Child 1</p>;
}

const Child2 = ({ setMessage }: { setMessage: React.Dispatch<React.SetStateAction<{ child1: string; child2: string; }>> }) => {
	const isMounted = useIsMounted();
	useEffectOnce(() => {
		sleep().then(() => { isMounted() && setMessage(t => ({...t, child2: "OK"})) })
	})
	return <p>Child 2</p>;
}

const UseIsMounted = () => {
	const [show, setShow] = useState(true);
	const [message, setMessage] = useState({child1: "", child2: ""});
	return (
		<>
			<p>Message Child1: {message.child1}</p>
			<p>Message Child2: {message.child2}</p>
			<button type="button" onClick={() => {
				setShow(!show);
				setMessage({ child1: "", child2: "" });
			}}>
				{show ? "Hide":"Show"}
			</button>
			{
				show &&
				<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
					<Child1 setMessage={setMessage} />
					<Child2 setMessage={setMessage} />
				</div>
			}
		</>
	);
}

UseIsMounted.displayName = "UseIsMounted";

export { UseIsMounted };
\`\`\`

> The component has:
> - A message _state_ object variable with two properties: _child1_ and _child2_.
> - A show _state_ variable that shows and hides two child components by clicking on a button.
> - A _Child1_ component that inside a _useEffectOnce_, \`after 5 second\`, update _child1_ property of _message state_ with \`OK\`
> - A _Child2_ component that inside a _useEffectOnce_, \`after 5 second\` and if _isMounted_ function returns true update _child1_ property of _message state_ with \`OK\`
> 
> If child components are showed and hides before 5 seconds, only _Child1_ component update its message because hiding components, isMounted() returns false so _Child2_ don't update its message.


## API

\`\`\`tsx
useIsMounted(): ()=>boolean
\`\`\`





> ### Returns
>
> 
> - _()=>boolean_  
>`,pL=`# useIsOnline
Hook to detect network connection status. [See demo](https://react-tools.ndria.dev/#/hooks/events/useIsOnline)

## Usage

\`\`\`tsx
export const UseIsOnline = () => {
	const connectionState = useIsOnline();

	return (<div style={{ textAlign: "center" }}>
		<p>Online: {JSON.stringify(connectionState)}</p>
	</div>)
}
\`\`\`

> The component display the network connection informations. Try to change connection type from console to see changes.


## API

\`\`\`tsx
useIsOnline(): boolean
\`\`\`





> ### Returns
>
> __isOnline__
> - _boolean_  
>`,fL=`# useLayoutEffectCompare
Custom useLayoutEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useLayoutEffectCompare)

## Usage

The implementation is like that _useEffectCompare_.

Please visit [useEffectCompare](#/hooks/lifecycle/useEffectCompare) example to see how it works.

## API

\`\`\`tsx
useLayoutEffectCompare<T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>)
\`\`\`


> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyListTyped_  
typed dependency list.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new \`deps\`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useLayoutEffect.
>



> ### Returns
>
> 
> - _void_  
>`,hL=`# useLayoutEffectDeepCompare
Custom useEffect that reexecutes EffectCallback only when deps are different in depth. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useLayoutEffectDeepCompare)

## Usage

The implementation is like that _useEffectDeepCompare_.

Please visit [useEffectDeepCompare](#/hooks/lifecycle/useEffectDeepCompare) example to see how it works.

## API

\`\`\`tsx
useLayoutEffectDeepCompare(cb: EffectCallback, deps: DependencyList):void
\`\`\`


> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyList_  
dependency list.
>



> ### Returns
>
> 
> - _void_  
>`,mL=`# useLayoutEffectOnce
Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useLayoutEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useLayoutEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useLayoutEffectOnce)

## Usage

The implementation is like that _useEffectOnce_.

Please visit [useEffectOnce](#/hooks/lifecycle/useEffectOnce) example to see how it works.

## API

\`\`\`tsx
useLayoutEffectOnce(effect: EffectCallback)
\`\`\`


> ### Params
>
> - __effect__: _EffectCallback_
>


`,gL=`# useLazyRef
Hook that works 'partially' like the _useState_ hook with lazy initialization: ensures that the __initializer__ function is executed only once. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useLazyRef)

## Usage

\`\`\`tsx
const initializer = () => {
	console.log("initializer run...")
	return Array(100).fill(true).reduce((prev, _, index) => prev + index, 0);
}

const initializerLazy = () => {
	console.log("initializerLazy run...")
	return Array(100).fill(true).reduce((prev, _, index) => prev + index, 0);
}

export const UseLazyRef = () => {
	const rerender = useRerender();
	const [apply] = useInterval(() => rerender(), 1000);
	const lazyValue = useLazyRef(initializerLazy);
	const value = useRef(initializer());

	apply();

	return (
		<div>
			<p>Value is: {value.current}</p>
			<p>LazyValue is: {lazyValue.current}</p>
		</div>
	);
}
\`\`\`

> There are two functions __initializer__ and __initializerLazy__ that log a message when they runs then sum and return number from 0 to 100.
> 
> The component has:
> - a __lazyValue__ creates by _useLazyRef_ hook with __initializerLazy__ function as param.
> - a __value__ creates by _useRef_ hook with __initializer__ function executed as param.
> - a __rerender__ function created by _useRerender_ hook to force a rerender.
> - a __apply__ function created by _useInterval_ hook to execute __rerender__ function every second.
> - render a div with __lazyValue__ and __value__ values.
> 
> If you open devtools will see that __initializerLazy__ message is logged once while __initializer__ message every rerender.


## API

\`\`\`tsx
useLazyRef<T>(initializer: () => T): React.MutableRefObject<T>
\`\`\`


> ### Params
>
> - __initializer__: _()=>T_
>



> ### Returns
>
> 
> - _React.MutableRefObject<T>_  
>`,_L=`# useLocalStorageState
Custom _useState_ hook implementation using _LocalStorage_, with immutable _getter state_ function and to _remove_ key from localStorage. [See demo](https://react-tools.ndria.dev/#/hooks/state/useLocalStorageState)

## Usage

\`\`\`tsx
const Child = memo(() => {
	const [state] = useLocalStorageState<string>({key:"demo", opts: {mode: "read"}});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
})

const Child2 = memo(() => {
	const [setState] = useLocalStorageState<string>({key:"demo", opts: {mode: "write"}});
	return (<>
		<h3>Child component 2</h3>
		<form onSubmit={(e: BaseSyntheticEvent) => {
			setState(e.target[0].value);
			e.preventDefault();
		}}>
			<input type="text" />
		</form>
	</>)
})

const UseLocalStorageState = () => {
	const [, , , remove] = useLocalStorageState({ key: "demo", initialState: "prova" });
	const clear = useCallback(() => remove(), [remove]);

	useEffectOnce(() => {
		return () => clear();
	})

	return (<>
		<Child />
		<br />
		<Child2/>
	</>);
}

UseLocalStorageState.displayName = "UseLocalStorageState";

export { UseLocalStorageState };
\`\`\`

> The component has:
> - An internal _useLocalStorage_ state with __key__ _demo_ and __initialState__ _prova_ from which gets __remove__ function.
> - A Child component 1 that uses _useLocalStorage_ with _read_ __mode__ and __key__ _demo_ to read from localStorage.
> - A Child component 2 that uses _useLocalStorage_ with _write_ __mode__ and __key__  _demo_ to write to LocalStorage with an onSubmit form event with a input text value.
> - An useEffect that invokes __remove__ function and delete item with key _demo_ from localStorage when the component unmounts.
> 
> When component is mounted, the Child1 state is _prova_. It can be changed by Child2. If you change state and open the page into another tab, after mounting, the Child1 display the new value of state and every changes made is reflected in both tabs.


## API

\`\`\`tsx
useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void]
\`\`\`


> ### Params
>
> - __params__: _Object_
> - __params.key__: _string_  
item key in local storage.
> - __params.initialState?__: _T | () => T_  
value or a function , optional.
> - __params.opts={serializer: JSON.stringify, deserializer: jSON.parse, mode: "read/write"}?__: _{serializer: (item: T)=> string, deserializer: (item: string)=> T, mode?: "read" | "write" | "read/write"}_  
object with serializer and deserializer function to handle values in localStorage and mode property to use hook only to read, write or both.
>



> ### Returns
>
> 
> - __Union of__:  
>     - __Array__:  
>         - _T_  
>         - _() => T_  
>         - _() => void_  
>     - __Array__:  
>         - _Dispatch<SetStateAction<T>>_  
>         - _() => T_  
>         - _() => void_  
>     - __Array__:  
>         - _T_  
>         - _Dispatch<SetStateAction<T>>_  
>         - _() => T_  
>         - _() => void_  
>`,vL=`# useLock
Hook to use [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useLock)

## Usage

\`\`\`tsx
export const UseLock = () => {
	const [, setBuffer] = useState<number[]>([]);
	const [lock, setLock] = useState<{ held: string[], pending: string[] }>({ held: [], pending: [] });
	const [messages, setMessages] = useState<{ consumer: string[], buffer: number[][], producer: string[] }>({
		consumer: [],
		buffer: [],
		producer: []
	});
	const do_something = useCallback((mode: "read" | "write") => {
		return new Promise<void>((res) => {
			setTimeout(() => {
				if (mode === "read") {
					let el: number | undefined;
					let buffer: number[];
					setBuffer(b => {
						buffer = b.filter((_, index, arr) => {
							if (index !== arr.length - 1) {
								return true;
							} else {
								el = _;
								return false;
							}
						});
						return buffer;
					})
					setMessages(m => ({ producer: [...m.producer, "-"].filter((_, index, arr) => arr.length - index <= 5), buffer: [...m.buffer, buffer].filter((_,index,arr)=>arr.length-index<=5), consumer: [...m.consumer, el !== undefined ? "Consumer has read " + el : "Consumer has read nothing"].filter((_,index, arr) => arr.length-index<=5)}))
				} else {
					const n = Math.floor(Math.random() * 11);
					let buffer: number[];
					setBuffer(b => {
						buffer = [n, ...b];
						return buffer;
					});
					setMessages(m => ({ consumer: [...m.consumer, "-"].filter((_, index, arr) => arr.length - index <= 5), buffer: [...m.buffer, buffer].filter((_, index, arr) => arr.length - index <= 5), producer: [...m.producer, "Producer has written " + n].filter((_, index, arr) => arr.length - index <= 5) }));
				}
				res();
			}, 1600);
		});
	}, []);

	const [createExclusiveLock, query] = useLock("resource", async () => {
		await do_something("read");
	});

	const [createSharedLock] = useLock("resource", async () => {
		await do_something("write");
	}, { mode: "shared" });

	useEffect(() => {
		const interval = setInterval(async () => {
			const n = Math.floor(Math.random() * 11);
			n <= 6 ? createExclusiveLock() : createSharedLock();
		}, 700);
		return () => clearInterval(interval);
	}, [createExclusiveLock, createSharedLock]);

	useEffect(() => {
		const interval = setInterval(async () => {
			const result = await query();
			const held = (result.held || []).map(el => \`\${el.mode === "exclusive" ? "Reader" : "Writer"} require \${el.mode} lock\`);
			const pending = (result.pending || []).map(el => \`\${el.mode === "exclusive" ? "Reader" : "Writer"} require \${el.mode} lock\`);
			setLock({ held, pending });
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [query]);

	return <div>
		<div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "auto auto auto auto auto", justifyContent: "center", gap: 50, overflow: 'auto', maxHeight: 400 }}>
			<div style={{ overflow: 'auto', maxHeight: 400 }}>
				<h3>Producer</h3>
				{
					messages.producer.map((m, index) => <p key={index}>{m}</p>)
				}
			</div>
			<div>
				<h3>Buffer</h3>
				{
					messages.buffer.map((m, index) => <p key={index}>{JSON.stringify(m)}</p>)
				}
			</div>
			<div style={{ display: "grid", gridTemplateColumns: "auto", justifyContent: "center", gap: 50, overflow: 'auto', maxHeight: 400 }}>
				<div>
					<h3>Consumer </h3>
					{
						messages.consumer.map((m, index) => <p key={index}>{m}</p>)
					}
				</div>
			</div>
			<div style={{ overflow: 'auto', maxHeight: 400 }}>
				<h4>Held Lock</h4>
				{
					lock.held.map((el, index) => <p key={index}>{el}</p>)
				}
			</div>
			<div style={{ overflow: 'auto', maxHeight: 400 }}>
				<h4>Pending Lock</h4>
				{
					lock.pending.map((el, index) => <p key={index}>{el}</p>)
				}
			</div>
		</div>
	</div>
}
\`\`\`

> The component uses _useLock_ hook to simulate a buffer write by a producer and read from a consumer.


## API

\`\`\`tsx
useLock<T>(name?: string, cb?: LockGrantedCallback, opts?: LockOptions): [(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>, () => Promise<LockManagerSnapshot>]
\`\`\`


> ### Params
>
> - __name?__: _string_  
an identifier for the lock.
> - __options?__: _LockGrantedCallback | LockOptions_  
an object describing characteristics of the lock.
> - __callback?__: _LockGrantedCallback_  
method called when the lock is granted.
>



> ### Returns
>
> __result__:  __Array__:  
    - _<T>(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>_  
    - _() => Promise<LockManagerSnapshot>_  
> Array with two element:
> - first element: __acquire__ function that requests a Lock object with parameters specified in hook invocation or passed to this function. The requested Lock is passed to the callback specified in hook or passed to this function. It returns a Promise that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.
> - second element: __query__ function that returns a Promise that resolves with an object containing information about held and pending locks.
>`,bL=`# useLogger
Hook to log componet details during Lifecycle events. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useLogger)

## Usage

\`\`\`tsx
const Counter = (props: {init: number}) => {
	const [state, setState] = useState<number>(props.init);
	useLogger("Counter", { state, props });

	return (<>
		<p>Counter is: {state}</p>
		<button type="button" onClick={() => setState(t => t + 1)}>Increment</button>
		<button type="button" onClick={() => setState(t => t - 1)}>Decrement</button>
	</>);
}
export const UseLogger = () => {
	const [state, setState] = useState(0);
	return <>
		<button type="button" onClick={() => setState(t => t + 1)}>Increment</button>
		<br/>
		<Counter init={state}/>
	</>
}
\`\`\`

> The component uses _useLogger_ hook to trace component state in lifecycle events.


## API

\`\`\`tsx
useLogger(name: string, props: object)
\`\`\`


> ### Params
>
> - __name__: _string_  
component name.
> - __props__: _object_  
props object to track.
>


`,yL=`# useLongPress
Hook to execute a callback on a long press event. [See demo](https://react-tools.ndria.dev/#/hooks/events/useLongPress)

## Usage

\`\`\`tsx
export const UseLongPress = () => {
	const [pressCounter, setPressCounter] = useState(0);
	const [clickCounter, setClickCounter] = useState(0);
	const [color, setColor] = useState(-1)


	const cbRef = useLongPress<HTMLButtonElement>(() => {
		setPressCounter((s) => s + 1);
		setColor(1);
	}, {
		normalPress: () => setClickCounter((s) => s + 1),
		onStart() {
			setColor(0);
		},
		onFinish() {
			setColor(-1);
		},
	});

	return (
		<div>
			<button ref={cbRef} type="button" style={{ ...(color === -1 ? {} : { backgroundColor: color === -1 ? "inherit" : color === 0 ? "#8e830f" : "#0b5f07"})}}>
				Press me
			</button>
			<p>pressCounter: {pressCounter}</p>
			<p>clickCounter: {clickCounter}</p>
		</div>
	);
}
\`\`\`

> The component has:
> - a __pressCounter__ state variable.
> - a __clickCounter__ state variable.
> - a RefCallback __cbRef__ attached to a button __Press me__. It is returned from _useLongPress_ hook that has a cb a function to update __pressCounter__ state and _normalPress_ option to update __clickCounter__ state.
> - it renders a div with __Press me__ button and two p elements that display __pressCounter__ and __clickCounter__.
> 
> When the button is clicked for less than a second, _normalPress_ callback is executed, otherwise _long press_ callback is executed.


## API

\`\`\`tsx
useLongPress<T extends Element = Element, E extends Event = Event>(cb: useLongPressCallback<E>, { duration = 1000, normalPress, onStart, onFinish }: useLongPressOptions<E>): RefCallback<T>
\`\`\`


> ### Params
>
> - __cb__: _(evt:E)=>void_  
callback to execute after a certain duration.
> - __opts__: _Object_
> - __opts.duration=1000?__: _number_  
long press event duration in milliseconds.
> - __opts.onStart?__: _(evt:E)=>void_  
callback that will be executed on initial press event.
> - __opts.onFinish?__: _(evt:E)=>void_  
callback that will be executed when long press callback has done.
> - __opts.normalPress?__: _(evt:E)=>void_  
callback executed on normal press event.
>



> ### Returns
>
> __ref callback__: to be attached on target element.
> - _RefCallback<T>_  
>`,kL=`# useMap
Hook to use _Map data structure_ to handle component state with all Map methods. [See demo](https://react-tools.ndria.dev/#/hooks/state/useMap)

## Usage

\`\`\`tsx
const UseMap = () => {
	const map = useMap<string, number>();

	const inputRef = useRef<HTMLInputElement>(null);

	const del = useCallback(() => {
		map.delete(inputRef.current!.value);
	}, [map]);

	const set = useCallback(() => {
		const [key, value] = inputRef.current!.value.split("-");
		map.set(key, Number(value));
	}, [map]);

	const clear = useCallback(() => {
		map.clear();
	}, [map]);

	const incrementAll = useCallback(() => {
		map.forEach((value, key, map) => { map.set(key, value + 1) });
	}, [map]);

	const parsed = useMemo(() => {
		const temp: string[] = [];
		temp.map
		map.forEach((value, key) => temp.push(key + " - " + value));
		return temp.join(", ");
	}, [map]);

	return (<>
		{parsed}
		<br/>
		<input ref={inputRef} type="text" />
		<br />
		<div style={{ marginTop: 15, gridTemplateColumns: 'auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={set}>Set</button>
			<button onClick={del}>Delete</button>
			<button onClick={clear}>Clear</button>
			<button onClick={incrementAll}>Increment all</button>
		</div>
	</>);
}

UseMap.displayName = "UseMap";

export {UseMap}
\`\`\`

> The component has:
> - A _useMap_ internal state.
> - An uncontrolled input with _inputRef_ ref used to execute buttons actions.
> - A button _Set_ that set the input value (format like __id__ _-_ __value__) into state by _set_ method of Map interface.
> - A button _Delete_ that remove item into state by _key_, written in input by _delete_ method of Map interface.
> - A button _Clear_ that clear state by _clear_ method of Map interface.
> - A button _IncrementAll_ that adds 1 to every value into map by _forEach_ method of Map interface.
> - A variable parsed create with useMemo that memoized a concatenated string of state key-value pairs, separated by comma.


## API

\`\`\`tsx
useMap<K, V>(initialState?: Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>))
\`\`\`


> ### Params
>
> - __initialState?__: _Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>)_  
An Array or other iterable object whose elements are key-value pairs, or function that returns it.
>



> ### Returns
>
> 
> - _Map<K,V>_  
>`,wL=`# useMeasure
Hook to  measure and track element's dimensions. [See demo](https://react-tools.ndria.dev/#/hooks/events/useMeasure)

## Usage

\`\`\`tsx
export const UseMeasure = () => {
	const [cbRef, state] = useMeasure<HTMLDivElement>();

	return <div style={{margin: '0 auto'}}>
		<p>Dimensions: {JSON.stringify(state)}</p>
		<br />
		<div ref={cbRef} style={{margin:'0 auto', width: 100, height: 100, overflow: 'auto', resize: 'both', border: '1px solid lightblue'}}/>
	</div>
}
\`\`\`

> The component tracks div element dimensions and display them on screen. Try to resize div to see its current dimensions.


## API

\`\`\`tsx
useMeasure<T extends Element>(): [React.RefCallback<T>, DOMRectReadOnly]
\`\`\`





> ### Returns
>
> __result__: a refCallback for target element and a object with target element size.
> - __Array__:  
>     - _React.RefCallback<T>_  
>     - _DOMRectReadOnly_  
>`,xL=`# useMediaDevices
Hook to use [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface methods, that give access to any hardware source of media data. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useMediaDevices)

## Usage

\`\`\`tsx
export const UseMediaDevices = () => {
	const action = useMediaDevices("devicesList");
	const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

	const onClick = async () => {
		try {
			const devices = await action(async () => {
				setDevices(await action());
			});
			setDevices(devices.reduce((prev, curr) => {
				if (prev.every(el => el.deviceId !== curr.deviceId)) {
					prev.push(curr);
				}
				return prev;
			}, [] as MediaDeviceInfo[]));
		} catch (error) {
			alert((error as Error).message);
		}
	}

	return <div style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
		<button onClick={onClick}>Acquire</button>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
			<div style={{textAlign: "center"}}>
				<p>Camera {devices.filter(el => el.kind === "videoinput").length}</p>
				<ul>
					{
						devices.filter(el => el.kind === "videoinput").map(el => <li key={el.label}>{el.label}</li>)
					}
				</ul>
			</div>
			<div style={{textAlign: "center"}}>
				<p>Spearker {devices.filter(el => el.kind === "audiooutput").length}</p>
				<ul>
					{
						devices.filter(el => el.kind === "audiooutput").map(el => <li key={el.label}>{el.label}</li>)
					}
				</ul>
			</div>
			<div style={{textAlign: "center"}}>
				<p>Microphones {devices.filter(el => el.kind === "audioinput").length}</p>
				<ul>
					{
						devices.filter(el => el.kind === "audioinput").map(el => <li key={el.label}>{el.label}</li>)
					}
				</ul>
			</div>
		</div>
	</div>
}
\`\`\`

> The component uses _useMediaDevices_ to get list of all media devices and groups them into _CAMERA_ _SPEAKERS_ and _MICROPHONE_ sections.


## API

\`\`\`tsx
useMediaDevices(action: UseMediaDevicesProps): UseMediaDevicesResult
\`\`\`


> ### Params
>
> - __action__: _UseMediaDevicesProps_  
it is a string that identifies which method to return as a result. It can be _devicesList_, _supportedConstraintsList_, _DisplayCapture_, or _mediaInputCapture_.
>



> ### Returns
>
> __result__:  _UseMediaDevicesResult_  
> if __action__ is:
> - _devicesList_: so _result_ is __enumeratedDevices__ method of MediaDevices interface.
> - _supportedConstraintsList_: so _result_ is __getSupportedConstraints__ method of MediaDevices interface.
> - _DisplayCapture_: so _result_ is __getDisplayMedia__ method of MediaDevices interface.
> - _mediaInputCapture_: so _result_ is __getUserMedia__ method of MediaDevices interface.
>`,SL=`# useMediaQuery
Hook to handle CSS mediaQuery. It returns an object with __matches__ and __media__ properties and receives an optional _onChange_ function to handle _MediaQueryListEvent change_ event. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useMediaQuery)

## Usage

\`\`\`tsx
export const UseMediaQuery = () => {
	const mediaQuery = useMediaQuery('(prefers-color-scheme: dark)');

	return <div style={{textAlign: "left"}}>
		<p>
			Color-scheme: {mediaQuery.matches ? "dark" : "light"}
		</p>
		<p>
			Media matched: {mediaQuery.media}
		</p>
	</div>
}
\`\`\`

> The component uses _useMediaQuery_ hook to detect color-scheme and displays result.


## API

\`\`\`tsx
useMediaQuery(mediaQuery: string, onChange?: (evt: MediaQueryListEvent) => void ): {matches: boolean, media: string}
\`\`\`


> ### Params
>
> - __mediaQuery__: _string_  
media query to test.
> - __onChange?__: _(evt: MediaQueryListEvent) => void_  
MediaQueryListEvent change handler.
>



> ### Returns
>
> __result__: object with __matches__, boolean value that returns true if the document currently matches the media query, __media__, string that represents media query.
> - __Object__:  
>     - __matches__ : _boolean_  
>     - __media__ : _string_  
>`,CL=`# useMemoCompare
Custom useMemo that returns memoized value that changes only when comparator function, received as third parameter, returns true. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useMemoCompare)

## Usage

\`\`\`tsx
const UseMemoCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });

	const defaultMemo = useMemo(() => {
		console.log("Render defaultMemo");
		return <p>useMemo: id:{state.id} - name:{state.name}</p>
	}, [state]);

	const memoCompare = useMemoCompare(
		() => {
			console.log("Render memoCompare");
			return <p>useMemoCompare: id:{state.id} - name:{state.name}</p>
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		{defaultMemo}
		{memoCompare}
		<button onClick={() => setState(t => ({ ...t, id: t.id + 1 }))}>Increment</button>
	</>);
};

UseMemoCompare.displayName = "UseMemoCompare";

export { UseMemoCompare };
\`\`\`

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _message useState variable_ that's a string rendered in a tag p.
> - a _useCallback_ function that update _message variable_ with _state variable_ values.
> - a _useCallbackCompare_ function that update _message variable_ with _state variable_ values and a compare function that checks if name property of state change.
> - a button with a function attached to onClick event that increment _state id property_.
> - a button with a _useCallback_ function attached to onClick event.
> - a button with a _useCallbackCompare_ function attached to onClick event.
> 
> Since compare function compares only _name property_, useCallbackCompare don't update its state value and set always same message.


## API

\`\`\`tsx
useMemoCompare<T = unknown, E = unknown>(cb: () => T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T
\`\`\`


> ### Params
>
> - __factory__: _() => T_  
computes value.
> - __deps__: _DependencyListTyped_  
typed DependencyList.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new \`deps\`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useMemo.
>



> ### Returns
>
> __result__: memoized value
> - _T_  
>`,EL=`# useMemoDeepCompare
Custom useMemo that returns memoized value that changes only if deps are different in depth. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useMemoDeepCompare)

## Usage

\`\`\`tsx
const UseMemoDeepCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [renders, setRenders] = useState({memo:0, deepMemo: 0});

	const defaultMemo = useMemo(() => {
		console.log("Render defaultMemo");
		setRenders(r => ({...r, memo: r.memo+1}));
		return \`useMemo: id:\${state.id} - name:\${state.name}\`
	}, [state]);

	const memoCompare = useMemoDeepCompare(() => {
		console.log("Render memoDeepCompare");
		setRenders(r => ({...r, deepMemo: r.deepMemo+1}));
		return \`useMemoDeepCompare: id:\${state.id} - name:\${state.name}\`
	}, [state]);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{defaultMemo}{\` ---> render: \${renders.memo}\`}</p>
		<p>{memoCompare}{\` ---> render: \${renders.deepMemo}\`}</p>
		<button onClick={() => setState(t=> ({ ...t}))}>Increment</button>
	</>);
};

UseMemoDeepCompare.displayName = "UseMemoDeepCompare";

export { UseMemoDeepCompare };
\`\`\`

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _renders useState variable_ with _memo_ and _deepMemo_ properties.
> - a useMemo that returns that value of _state object_ and updates _renders memo property_.
> - a useMemoDeepCompare that returns that value of _state object_ and updates _renders deepMemo property_.
> - a button with a function attached to onClick event that assigns to _state variable_ the same value.
> 
> Since _useMemoDeepCompare_ checks for differences in depth, it is executed only once and it don't update renders deepMemo property. You can see this in dev tool console also.


## API

\`\`\`tsx
useMemoDeepCompare<T=unknown>(cb: () => T, deps: DependencyList):T
\`\`\`


> ### Params
>
> - __factory__: _() => T_  
computes value.
> - __deps__: _DependencyList_  
DependencyList.
>



> ### Returns
>
> __result__: memoized value
> - _T_  
>`,TL=`# useMemoizedFn
Hook to store a function that will never change while keeping its dependencies always up to date. Can be used instead of _useCallback_, without esplicity dependencies array. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useMemoizedFn)

## Usage

\`\`\`tsx
export const UseMemoizedFn = () => {
	const [state, setState] = useState({memoizedValue: "", value: ""});

	const updateStateMemoized = useMemoizedFn((e: BaseSyntheticEvent) => setState({...state, memoizedValue: e.target.value}));
	const updateState = useCallback((e: BaseSyntheticEvent) => setState({...state, value: e.target.value}), [state])
	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<div>
				<p><strong>updateStateMemoized</strong></p>
				<div style={{ gridTemplateRows: "auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="idG" name="id" value={state.memoizedValue} onChange={updateStateMemoized} />
				</div>
			</div>
			<div>
				<p><strong>updateState</strong></p>
				<div style={{ gridTemplateRows: "auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="eta" name="eta" value={state.value} onChange={updateState} />
				</div>
			</div>
		</div>
	);
}


\`\`\`

> The component has:
> - A _useState_ that receives an object, with two properties _memoizedValue and _value_ passed respectively like value to _input component 1_ nd _input component 2_.
> - A _updateStateMemoized_ function to handle onChange event of the _input component 1_, create with _useMemoizedFn_.
> - A _updateState_ function to handle onChange event of the _input component 2_, created with _useCallback_.
> - Both functions update state with a new object create with previous state object and the new value that the specific input component has changed.
> 
> When value of _input component 1_ changes, the state changes and _updateState_ function is reevaluated, so a new value props is passed to _input component 2_ that rerenders.
> Instead when value of _input component 2_ changes, the _updateStateMemoized_ function doesn't change, so _input component 1_ doesn't rerender.


## API

\`\`\`tsx
useMemoizedFn<T extends (...args: any[]) => any>(fn: T)
\`\`\`


> ### Params
>
> - __fn__: _T_
>



> ### Returns
>
> __memoizedFn__
> - _T_  
>`,AL=`# useMergedRef
Hook to merge multiple refs into one. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useMergedRef)

## Usage

\`\`\`tsx
export const UseMergedRef = () => {
	const [state, setState] = useState(false);
	const [refCb] = useResizeObserver<HTMLDivElement>(
		useCallback((entries: ResizeObserverEntry[]) => {
			const result = entries[0].contentRect.width < 100;
			result !== state && setState(result);
		}, [state])
	);
	const ref = useRef<HTMLDivElement>(null);
	const mergedRef = useMergedRef<HTMLDivElement>(ref, refCb);

	const changeBorderColor = () => {
		ref.current && (ref.current.style.border = ref.current.style.border.indexOf("lightgray") !== -1
			? '1px solid darkcyan'
			: '1px solid lightgray'
		);
	}

	return <div>
		<p>{"Has width < 100 px: " + state}</p>
		<div ref={mergedRef} style={{border: '1px solid lightgray', width: 150, height: 200, resize: "both", overflow: 'auto'}}></div>
		<br />
		<button onClick={changeBorderColor}>Change border color</button>
	</div>
}
\`\`\`

> The component has a ref to change border color of a div element when a button is clicked and use _useResizeObserver_ hook to observe the size of div element to check when its width is less of 100px. Since _useResizeObserver_ works with a ref attached to an element, there are two ref that will be attached to the div element. So it has been used _useMergedRef_ hook to merge refs.


## API

\`\`\`tsx
useMergedRef<T>(...refs: Ref<T>[]): Ref<T>
\`\`\`


> ### Params
>
> - __refs__: _Ref<T>[]_
>



> ### Returns
>
> __mergedRef__
> - _RefObject<T>_  
>`,PL=`# useMouse
Hook to track mouse position also in relationship with an element. It works with pointerEvents. [See demo](https://react-tools.ndria.dev/#/hooks/events/useMouse)

## Usage

\`\`\`tsx
export const UseMouse = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { x, y, relativeElementDim: { top = null, left = null, width = null, height = null } = {} } = useMouse({ relativeElement: ref });

	return (
		<>
			<div
				ref={ref}
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: 'gray',
					color: 'white',
					lineHeight: '200px',
					textAlign: 'center',
				}}
			>
				element
			</div>
			<div>
				<p>
					Mouse Position relative to Element - x: {x}, y: {y}
				</p>
				<p>
					Element Dimensions - top: {top}  left: {left}  width: {width}  height: {height}
				</p>
			</div>
		</>
	);
}
\`\`\`

> The component tracks the relative mouse position to _element_


## API

\`\`\`tsx
useMouse(opts: { type?: "client" | "page" | "screen", relativeElement?: RefObject<HTMLElement | null> | HTMLElement } = { type: "client" }): { x: number | null, y: number | null } | { x: number | null, y: number | null, relativeElementDim?: DOMRect }
\`\`\`


> ### Params
>
> - __opts__: _Object_
> - __opts.type="client"?__: _"client"|"page"|"screen"_  
position by client page or screen.
> - __opts.relativeElement?__: _RefObject<HTMLElement> | HTMLElement_  
if it is presents, position is relative to element.
>



> ### Returns
>
> __ object__: postion by axis and if relativeElement is present, relativeElement dimensions also.
> - __Union of__:  
>     - __Object__:  
>         - __x__ : _number|null_  
>         - __y__ : _number|null_  
>     - __Object__:  
>         - __x__ : _number|null_  
>         - __y__ : _number|null_  
>         - __relativeElementDim?__ : _DOMRec_  
>`,jL=`# useMutationObserver
Hook to use Mutation Observer. Refer to [Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). [See demo](https://react-tools.ndria.dev/#/hooks/events/useMutationObserver)

## Usage

\`\`\`tsx
export const UseMutationObserver = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [data, setData] = useState<string[]>([]);
	const [cbRef, disconnect, reconnect] = useMutationObserver<HTMLUListElement>(
		mutations => {
			for (const mutation of mutations) {
				const arr: string[] = [];
				mutation.addedNodes.forEach(node => arr.push(\`Added node: \${node.textContent}\`));
				mutation.removedNodes.forEach(node => arr.push(\`Removed node: \${node.textContent}\`));
				setMessages(m => m.concat(arr));
			}
		},
		{
			childList: true,
			subtree: true
		}
	)

	return <div>
		<button onClick={() => setData(d => [...d, d.length.toString()])}>ADD child</button>
		<button onClick={() => setData(d => d.filter((_, index) => index !== d.length - 1))}>Remove child</button>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: 50 }}>
			<div>
				<ul ref={cbRef}>
					{
						data.map(el => <li key={el}>Item {el}</li>)
					}
				</ul>
			</div>
			<div>
				{
					messages.map(el => <p>{el}</p>)
				}
			</div>
		</div>
	</div>
}
\`\`\`

> The component has an ul element and two button to add and remove li childs. The __cbRef__ callback returned from _useMutationObserver_ hook is attached to ul element, so then ul childs change, the callback passed to hook update __messages__ state variable with added and removed nodes.


## API

\`\`\`tsx
useMutationObserver<T extends Element>(cb: MutationCallback, opts?: MutationObserverInit): [RefCallback<T>, () => void, () => void, () => MutationRecord[] | undefined]
\`\`\`


> ### Params
>
> - __cb__: _MutationCallback_  
The function which will be called on each DOM change that qualifies given the observed node or subtree and options. The callback takes as input two parameters: __mutationList__ and __observer__.
> - __opts?__: _MutationObserverInit_  
An options object allowing you to set options for the observation.
>



> ### Returns
>
> __result__: array with: cb for ref component attribute to observe, function to _disconnect_ observer, function _takeRecords_ to take observer records not yet processed, function to _reconnect_ observer.
> - __Array__:  
>     - _RefCallback<T>_  
>     - _()=>void_  
>     - _()=>void_  
>     - _() => MutationRecord[]|undefined_  
>`,RL=`# useNetwork
Hook to detect network connection infos, refer to [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation). It takes optinally a parameter __selectedInfo__ to specify a subset of connection status property. [See demo](https://react-tools.ndria.dev/#/hooks/events/useNetwork)

## Usage

\`\`\`tsx
export const UseNetwork = () => {
	const connectionState = useNetwork();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(connectionState).map(el => (
				<p key={el}>{el}: {JSON.stringify(connectionState[el as keyof typeof connectionState])}</p>
			))
		}
	</div>)
}
\`\`\`

> The component display the network connection informations. Try to change connection type from console to see changes.


## API

\`\`\`tsx
useNetwork<T extends keyof ConnectionState>(selectedInfo?: ArrayMinLength1<T>): ConnectionState | {[k in T] : ConnectionState[k]}
\`\`\`


> ### Params
>
> - __selectedInfo?__: _ArrayMinLength1<T>_  
array of connection property.
>



> ### Returns
>
> __object__: Network connection property or a subset if __selectedInfo__ is specified.
> - _ConnectionState|{[k in T] : ConnectionState[k]}_  
>`,ML=`# usePIP
Hook to use PIP [(Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/usePIP)

## Usage

\`\`\`tsx
export const UsePIP = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [show, setShow] = useState(true);
	const { isSupported, openPIP } = usePIP({
		target: videoRef,
		onOpen: () => setShow(false),
		onClose: () => setShow(true)
	});

	return <div>
		<p>Supported: {isSupported ? 'Yes' : 'No'}</p>
		{
			show &&
			<>
				<video ref={videoRef} width="400" controls>
					<source src={video} type="video/mp4" />
					Your browser does not support HTML video.
				</video>
				<div>
					<button onClick={openPIP}>Open PIP</button>
				</div>
			</>
		}
	</div>
}

\`\`\`

> The component uses _usePIP_ hook to show a video and a button to enable PIP.


## API

\`\`\`tsx
usePIP({ onOpen, onOpened, onClose, onError, target }: UsePIPProps): UsePIPResult
\`\`\`


> ### Params
>
> - __param__: _UsePIPProps_  
object
> - __param.target__: _RefObject<HTMLVideoElement>|HTMLVideoElement_  
element to PIP.
> - __param.onOpen?__: _()=>void_  
function that will be executed on PIP opening.
> - __param.onOpened?__: _(pip: PictureInPictureWindow)=>void_  
function that will be executed when PIP is opened.
> - __param.onClose?__: _(evt: PictureInPictureEvent)=>void_  
function that will be executed on PIP closing.
> - __param.onError?__: _(err: unknown)=>void_  
function that will be executed when error is throwing.
>



> ### Returns
>
> __result__:  _UsePIPResult_  
> Object with three properties:
> - __isSupported__: boolean that indicates if PIP is supported or not.
> - __openPIP__: function to open PIP.
> - __closePIP__: function to close PIP.
>`,LL=`# usePerformAction
Hook that executes a callback after a render. [See demo](https://react-tools.ndria.dev/#/hooks/events/usePerformAction)

## Usage

\`\`\`tsx
const Child1 = () => {
	const ref = useRef<HTMLButtonElement>(null);
	const perform = (() => ref.current?.click());
	return (<div>
		<p><strong>
			Component without performAction
		</strong></p>
		<Select action={perform}/>
		<br />
		<br />
		<Dropdown btnRef={ref}/>
	</div>);
}

const Child2 = () => {
	const ref = useRef<HTMLButtonElement>(null);
	const perform = usePerformAction(() => ref.current?.click());
	return (<div>
		<p><strong>
			Component with performAction
		</strong></p>
		<Select action={perform} />
		<br />
		<br />
		<Dropdown btnRef={ref} />
	</div>);
}

const UsePerformAction = () => {
	const [status] = useScript(
		{
			src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
			integrity:"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
			crossorigin: "anonymous"
		},
		{
			removeOnUnmount: true
		}
	);

	if (status === "loading") {
		return null;
	}

	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<Child1 />
			<Child2 />
		</div>
	);
}

UsePerformAction.displayName = "UsePerformAction";

export { UsePerformAction };
\`\`\`

> The component load bootstrap script with _useScript_ hook to use Bootstrap Dropdown, and renders two child components that render a Select and a Dropdown components. Every child component when select value is _2_, executes a click on dropdown to open it by a ref attached on dropdown button.
> 
> The _Child1_ executes click on button but dropdown isn't displayed. The _Child2_ executes click with _usePerformAction_ hook and shows the dropdown.


## API

\`\`\`tsx
usePerformAction<T extends (...args: unknown[]) => void>(cb: T): (...args: Parameters<T>) => void
\`\`\`


> ### Params
>
> - __cb__: _(...args: unknown[])=>void_  
callback to execute
>



> ### Returns
>
> __performAction__
> - _(...args: unknown[]) => void_  
>`,DL=`# usePermission
Hook to query the status of API permissions attributed to the current context. Refer to [PermissionAPI](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/usePermission)

## Usage

\`\`\`tsx
export const UsePermission = () => {
	const [accelerometer] = usePermission("accelerometer");
	const [camera] = usePermission("camera");
	const [microphone] = usePermission("microphone");
	const [notifications] = usePermission("notifications");
	const [speaker] = usePermission("speaker-selection");

	return <div>
		<p>accelerometer: {accelerometer}</p>
		<p>camera: {camera}</p>
		<p>microphone: {microphone}</p>
		<p>notifications: {notifications}</p>
		<p>speaker: {speaker}</p>
	</div>
}
\`\`\`

> The component uses _usePermission_ hook to check permission status of accelerometer, camera, microphone, notifications ans speaker.


## API

\`\`\`tsx
usePermission(permission: TPermissionName): UsePermissionResult
\`\`\`


> ### Params
>
> - __permission__: _TPermissionName_  
name of the API whose permissions you want to query.
>



> ### Returns
>
> __result__:  _UsePermissionResult_  
> Array of two elements:
> - first element: current state of the request permission: one of __'asking'__, __'granted'__, __'denied'__, __'prompt'__ or __'not supported'__.
> - second element: function to manual query fot permission status.
>`,OL=`# usePinchZoom
Hook to handle pinch zoom gestures. [See demo](https://react-tools.ndria.dev/#/hooks/events/usePinchZoom)

## Usage

\`\`\`tsx
export const UsePinchZoom = () => {
	const [state, setState] = useState("");
	const ref = useRef<HTMLDivElement>(null);
	const listener = useCallback((_:Event, type: "zoomIn" | "zoomOut") => {
		setState(type === "zoomIn" ? "Zooming in..." : "Zooming out...");
	}, []);
	usePinchZoom({
		listener,
		target: ref
	});

	return (
		<div ref={ref} style={{ margin: '0 auto', width: 300, height: 300, overflow: 'auto', resize: 'both', border: '1px solid lightblue' }}>
			{state}
		</div>
	);
}
\`\`\`

> The component renders a bordered div element. When pinch zoom gestures are executed in this div, a message is shown inside it with zoom type.


## API

\`\`\`tsx
usePinchZoom({ target = window, listener }: { target?: RefObject<HTMLElement> | Window, listener: (evt: PointerEvent, type: "zoomIn" | "zoomOut") => void | Promise<void> }): (()=>void)
\`\`\`


> ### Params
>
> - __options__: _Object_
> - __options.listener__: _(evt: PointerEvent, type: "zoomIn"|"zoomOut") => void | Promise<void>_  
listener to be executed on pinch zoom event.
> - __options.target=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
>



> ### Returns
>
> __remove__: remove listener manually.
> - _()=>void_  
>`,zL=`# usePointerLock
Hook to use [PointerLock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API). [See demo](https://react-tools.ndria.dev/#/hooks/events/usePointerLock)

## Usage

\`\`\`tsx
export const UsePointerLock = () => {
	const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const mousemove = useRef((e: MouseEvent) => {
		function updateCoord(delta: {x: number, y: number}, max: {x: number, y: number}) {
			setPosition(t => {
				let x = t.x + delta.x;
				let y = t.y + delta.y;
				x %= max.x;
				y %= max.y;
				if (x < 0) {
					x += max.x;
				}
				if (y < 0) {
					y += max.y;
				}
				canvasDraw(x, y, canvasRef.current!);
				return { x, y };
			});
		}
		updateCoord({x:e.movementX, y: e.movementY}, {x:canvasRef.current!.width, y:canvasRef.current!.height});
	});

	const onError = useCallback(() => alert("PointerLock API not supported."), []);

	const onLock = useCallback(() => {
		canvasRef.current!.addEventListener('mousemove', mousemove.current);
	}, []);

	const onUnlock = useCallback(() => canvasRef.current!.removeEventListener("mousemove", mousemove.current), []);

	const { lock } = usePointerLock({
		target: canvasRef,
		onError,
		onLock,
		onUnlock
	});

	useLayoutEffect(() => {
		canvasRef.current && canvasDraw(20, 20, canvasRef.current);
	}, []);

	return (<>
		<div>
			{
				position && <p>Position X:{position.x} - Y:{position.y}</p>
			}
		</div>
		<canvas ref={canvasRef} width="640" height="360" onClick={lock}>
			Your browser does not support HTML5 canvas
		</canvas>
	</>);
}
\`\`\`

> The component uses _usePointerLock_ hook to acquire pointer lock. Clicking on canvas area and moving mouse you will directly control the ball inside the canvas. Pressing escape you return to expected state.


## API

\`\`\`tsx
usePointerLock<T extends HTMLElement>({ target, unadjustedMovement, onLock, onUnlock, onError }: UsePointerLockProps<T>): UsePointerLockResult
\`\`\`


> ### Params
>
> - __param__: _UsePointerLockProps_  
object
> - __param.target__: _RefObject<T>|T_  
element that requires lock.
> - __param.unadjustedMovement?__: _boolean_  
Disables OS-level adjustment for mouse acceleration, and accesses raw mouse input instead. The default value is false; setting it to true will disable mouse acceleration.
> - __param.onError__: _(e: unknown)=>void_  
function that will be executed when an error throwing during request.
> - __param.onLock?__: _(target: RefObject<T>|T) => void_  
function that will be executed when lock has been acquired.
> - __param.onUnlock?__: _() => void_  
function that will be executed when lock has been released.
>



> ### Returns
>
> __result__:  _UsePointerLockResult_  
> Object with two properties:
> - __lock__: function to acquire lock.
> - __unlock__: function to release lock.
>`,IL=`# usePopover
Hook to use [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/usePopover)

## Usage

\`\`\`tsx
export const UsePopover = () => {
	const { Popover, isSupported, isOpen, showPopover} = usePopover({
		mode: "auto",
	})

	const style = useMemo<CSSProperties>(() => ({
		width: 300,
		height: 200,
		position: "absolute"
	}), []);

	return <div>
		<p>Is supported: {isSupported ? "Yes" : "No"}</p>
		<button onClick={showPopover} disabled={isOpen}>Open Popover</button>
		<Popover style={style}>
			<h2>
				Popover heading
			</h2>
			<p>Popover content</p>
		</Popover>
	</div>
}
\`\`\`

> The component uses _usePopover_ hook to show a popover when a button is clicked.


## API

\`\`\`tsx
usePopover({ mode, onBeforeToggle, onToggle }: UsePopoverProps): UsePopoverResult
\`\`\`


> ### Params
>
> - __param__: _UsePopoverProps_  
object
> - __param.mode__: _"auto"|"manual"_  
popover state: __auto__ indicates that popover can be "light dismissed" by selecting outside the popover area, by contrast __manual__ popover must always be explicity hidden.
> - __param.onBeforeToggle?__: _(evt: ToggleEvent) => void_  
function that will be executed before popover showed/hidden.
> - __param.onToggle?__: _(evt: ToggleEvent) => void_  
function that will be executed when popover has been showed/hidden.
>



> ### Returns
>
> __result__:  _UsePopoverResult_  
> Object with these properties:
> - __isSupported__: boolean that indicates if Popover API is supported or not.
> - __isSupported__: boolean that indicates if popover is opened or not.
> - __showPopover__: function to show popover.
> - __hidePopover__: function to hide popover.
> - __togglePopover__: function to toggle popover.
> - __Popover__: Component that wraps the element to render in popover. It can be stylized with _className_ and _style_ props.
>`,FL=`# usePrevious
It's track the previous value of a variable, with possibility to enable/disable tracking. [See demo](https://react-tools.ndria.dev/#/hooks/state/usePrevious)

## Usage

\`\`\`tsx
function UsePrevious() {
    const [count, setCount] = useState(0);
    const [previous, toggleTrack] = usePrevious(count);


    return (<>
        <button onClick={() => setCount((count) => {
            const val = count + 1;
            if (val === 6) {
                toggleTrack(false);
            }
            if (val === 12) {
                toggleTrack(true);
            }
            if (val === 15) {
                toggleTrack(false);
            }
            return val;
        })}>
            increment
        </button>
        <button onClick={() => toggleTrack(false)}>
            no track
        </button>
        <button onClick={() => toggleTrack(true)}>
            track
        </button>
        <p>
            Count is {count}
        </p>
        <p>
            Previous is {previous === undefined ? 'undefined' : previous as number}
        </p>
    </>);
}

UsePrevious.displayName = "UsePrevious";

export { UsePrevious };
\`\`\`

> The component has:
> - _counter useState variable_.
> - _previous variable_  returned by usePreviousHook, linked to _counter_ value and _toggleTracking_ function.
> - button _increment_ that executes function to update _counter value_. It executes _toggleTracking_ respectivelly to _disable/renable_ tracking when value to update is _6/12_. When value to update is _15_ it executes _toggleTracking_ to disable tracking with _15_ as last value.
> - button _no track_ that executes _toggleTracking_ to stop tracking.
> - button _track_ that executes _toggleTracking_ to restart tracking.
> 
> When increment button set _6_ as value, previous value stop tracking with _5_ as last value because no value was passed to _toggleTracking_. Same thing happens when increment set _12_ as value, the tracking restart from _12_. When increment set _15_ as value, last value tracked is _15_because it was passed to _toggleTracking_ as value to disable tracking.


## API

\`\`\`tsx
usePrevious<T = unknown>(variable: T): [T|undefined, (enable: boolean) => void]
\`\`\`


> ### Params
>
> - __variable__: _T_  
variable whose value is to be tracked.
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _T|undefined_  
>     - _(enable:boolean)=>void_  
>`,UL=`# usePromiseSuspensible
Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. This hook can be used in conditional blocks. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/usePromiseSuspensible)

## Usage

\`\`\`tsx
const Delayed = () => {
	const [data, invalidate] = usePromiseSuspensible(
		async () => {
			return await new Promise<number[]>((res, rej) => {
				console.log("called");
				setTimeout(() => {
					Math.random() > 0.5
						? res([1, 2, 3, 4, 5])
						: rej("Error throwed by promise");
				}, 4000);
			});
		},
		[],
		{
			cache: 25, //25 seconds
			cleanOnError: true,
			identifier: "ss",
			invalidateManually: true
		}
	);

	return <>
		<button onClick={invalidate}>Invalidate</button>
		<pre>{JSON.stringify(data)}</pre>
	</>;
}

export const UsePromiseSuspensible = () => {
	const fallback = useCallback<(error: Error, info: React.ErrorInfo, retry: () => void) => React.ReactNode>((_, __, retry) => {
		return <button onClick={retry}>Retry</button>
	}, []);

	return <ErrorBoundary fallback={fallback}>
		<Suspense fallback="loading...">
			<Delayed />
		</Suspense>
	</ErrorBoundary>
}
\`\`\`

> The _Delayed_ component uses _usePromiseSuspensible_ hook to call a promise that resolves with an array of number or reject: if promise has been resolved, array number is rendered with a button to invalidate result, otherwise an alert is invocked. Delayed component is returned from _UsePromiseSuspensible_ component.


## API

\`\`\`tsx
usePromiseSuspensible<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: boolean } = {}): Awaited<ReturnType<typeof promise>> | [Awaited<ReturnType<typeof promise>>, () => void]
\`\`\`


> ### Params
>
> - __promise__: _()=>Promise<T>_  
Function that returns a promise to suspense.
> - __deps__: _DependencyList_  
DependencyList for promise to suspense.
> - __options?__: _{ clearCacheOnUnmount?: "unmount"|number, cleanOnError?: boolean }_  
optional options.
> - __options.cache=undefined?__: _"unmount"|number_  
value can be "unmount", to clean promise cached at component unmounting, or it can be the duration in __seconds__ of cached promise.
> - __options.cleanOnError=undefined?__: _boolean_  
if true, when there is an error, remove promise from cache with a delay of 20 millisecond (due to multiple renders of react strict mode).
> - __options.invalidateManually=undefined?__: _boolean_  
if true, returns resolved promise value and a function to invalidate and revaluate promise.
> - __options.identifier=undefined?__: _string_  
a string to identify _promise_. If it isn't present, a serialization of _promise_ will be used.
>



> ### Returns
>
> __result__: resolve promise value.
> - __Union of__:  
>     - _Awaited<ReturnType<T>>_  
>     - __Array__:  
>         - _Awaited<ReturnType<T>>_  
>         - _()=>void_  
>`,NL=`# useProxyState
Hook to handle component state that allows you to use an object for your state and mutating it in a way more idiomatic for JS. __*N.B.*__ not destructure state, otherwise break changes updated. [See demo](https://react-tools.ndria.dev/#/hooks/state/useProxyState)

## Usage

\`\`\`tsx
const Child1 = memo(({ state, onClick }: { state: number, onClick: ()=>void }) => {
	return (<>
		<p>Num value is: {state}</p>
		<button onClick={onClick} type={'button'}>Increment</button>
	</>);
});

const Child2 = memo(({ state, onClick }: { state: string, onClick: () => void }) => {
	return (<>
		<p>Random value is: {state}</p>
		<button onClick={onClick} type={'button'}>
			Change random
		</button>
	</>);
});

const UseProxyState = () => {
	const state = useProxyState({ num: 0, nested: { random: "" } }, true);
	const increment = useCallback(() => state.num++, [state.num]);
	const random = useCallback(() => state.nested.random = Math.random().toFixed(2), [state.nested]);
	return (
		<div>
			<p>
				Current Value (in the proxy state): {state.num}  -  random: {state.nested.random}
			</p>
			<Child1 state={state.num} onClick={increment}/>
			<Child2 state={state.nested.random} onClick={random} />
		</div>
	);
}

UseProxyState.displayName = "UseProxyState";

export { UseProxyState };
\`\`\`

> The component has:
> - a state created with _useProxyStore_, that is a object with _num_ property, a number, and _nested_ property that is a object with _random_ property that is a string.
> - a useCallback function _increment_ that increment _num_ property.
> - a useCallback function _random_ that generate random number, assigned to _nested.random_ property.
> - a _Child1_ component that receives _num_ and _increment_ as props.
> - a _Child2_ component that receives _nested.random_ and _random_ as props.


## API

\`\`\`tsx
useProxyState<T extends Record<string, any>>(initialState: T | (() => T), proxyInDepth:boolean=false): T
\`\`\`


> ### Params
>
> - __initialState__: _T | () => T_  
value or function
> - __proxyInDepth=false?__: _boolean_  
if true, it creates proxy for nested object also.
>



> ### Returns
>
> __state__
> - _T_  
>`,HL=`# usePublishSubscribe
Communication system based on PubSub pattern. Instantiate a topic and use the publish and subscribe functions to communicate. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/usePublishSubscribe)

## Usage

\`\`\`tsx
const ChildComponent = memo(() => {
	const [, publish] = usePublishSubscribe("demo");
	const onChange = useCallback((e: BaseSyntheticEvent) => {
		publish({ value: e.target.value })
	}, [publish]);
	return (
		<input type="text" onChange={onChange} />
	);
})
const UsePublishSubscribe = () => {
	const [state, setState] = useState({ value: "" });
	const [subscribe] = usePublishSubscribe<typeof state>("demo");

	useEffect(() => {
		const unsub = subscribe((obj?: { value: string }) => {
			obj && setState(obj);
		})
		return () => {
			unsub();
		}
	}, [subscribe]);

	return <div>
		<p>Value is: {state.value}</p>
		<ChildComponent/>
	</div>
}

UsePublishSubscribe.displayName = "UsePublishSubscribe";

export { UsePublishSubscribe };
\`\`\`

> The component has:
> - A _useState_ that receives an object, with _value property.
> - A _usePubSubModel_ that receives __demo__ as topic and returns the _subscribe_ function.
> - A child component that use _usePubSubModel_ to get _publish_ function and renders an input text with an onChange handler that invoke the publish function with input value as param.
> 
> The main component subscribe a listener, that updates component state, to the topic __demo__ inside an useEffect, in this way the listener _subscription_ is done only once and when the component is unmounted, it executes the _unsubscription_. The _subscription_ can be done outside useEffect also, what's important is that listener doesn't change when component rerenders (so it can be declared outside the component or with useCallback for example). In this case the _unsubscription_ is executed from hook.


## API

\`\`\`tsx
usePublishSubscribe<T>(topic: string): [(listener: (value?: T) => Promise<void> | void) => () => void, (value?: T) => Promise<void> ]
\`\`\`


> ### Params
>
> - __topic__: _string_
>



> ### Returns
>
> __result__: contains the _publish_ and _subscribe_ functions. The result of invoking the _subscribe_ function in turn returns a function that can be used to _unsubscribe_ the topic
> - __Union of__:  
>     - __Array__:  
>         - _(listener: (value?: T) => Promise<void_  
>     - _void) => () => void, (value?: T) => Promise<void> ]_  
>`,WL=`# useRaf
Hook to execute a callback function with _requestAnimationFrame_ to optimize performance. Refer to (requestAnimationFrame)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame]. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useRaf)

## Usage

\`\`\`tsx
export const UseRaf = () => {
	const [state, setState] = useState({ width: 0, height: 0 });
	const [start] = useRaf((_: number, __:()=>void, dim: DOMRectReadOnly) => {
		setState({ width: dim.width, height: dim.height });
	});
	const [refCb] = useResizeObserver<HTMLTextAreaElement>(
		(entries: ResizeObserverEntry[]) => {
			start(entries[0].contentRect);
		}
	);

	return <div>
		<p>{"Textarea dimension: " + JSON.stringify(state)}</p>
		<textarea ref={refCb} rows={3}></textarea>
	</div>
}
\`\`\`

> The component renders a textarea element and when it is resized, updates __state__ variable inside function __start__ returned from _useRaf_ hook.


## API

\`\`\`tsx
useRaf<T extends unknown[]>(cb: (timer: number, repeat: ()=>void, ...args: T) => void): [(...args: T)=>void, ()=>void]
\`\`\`


> ### Params
>
> - __cb__: _(timer:number, repeat:()=>void, ...args: T)=>void_  
 callback to execute prior to the next repaint. In addition to the classic timeStamp parameter, which indicates the end time of rendering of the previous frame, the second parameter is a function which, if invoked, re-executes the requestAnimationFrame with the callback itself, and finally various parameters can be added, passed with the invocation function returned by the hook.
>



> ### Returns
>
> __results__: array with __start__ function to invoke _requestAnimationFrame_ and __cancel__ function to invoke _cancelAnimationFrame_.
> - __Array__:  
>     - _(...args: T)=>void_  
>     - _()=>void_  
>`,BL=`# useReducedMotion
Hook to detect if user prefers to reduce motion. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useReducedMotion)

## Usage

\`\`\`tsx
export const UseReducedMotion = () => {
	const value = useReducedMotion();

	return <>
		<p
			style={{ color: value ? "red" : "rgb(152, 195, 121)"}}
		>
			{value ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
		</p>
	</>
}
\`\`\`

> The component display user preferences about reducing motion.


## API

\`\`\`tsx
useReducedMotion(): boolean
\`\`\`





> ### Returns
>
> __result__: it is true if user prefers reduced motion, otherwise it is false.
> - _boolean_  
>`,VL=`# useReducerGetReset
Custom useReducer with get and reset state functions. [See demo](https://react-tools.ndria.dev/#/hooks/state/useReducerGetReset)

## Usage

The implementation is like that _useStateGetReset_ but built on _useReducer_.

Please visit [useStateGetReset](#/hooks/state/useStateGetReset) example to see how it works.

## API

\`\`\`tsx
useReducerGetReset<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>, ()=>ReducerState<R>, ()=>void]
\`\`\`


> ### Params
>
> - __reducer__: _R extends Reducer<any, any>_  
The reducer function that specifies how the state gets updated.
> - __initialState__: _ReducerState<R>_  
The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
> - __initializer?__: _(init: ReducerState<R>) => ReducerState<R>_  
Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _ReducerState<R>_  
>     - _Dispatch<ReducerAction<R>>_  
>     - _()=>ReducerState<R>_  
>     - _()=>void_  
>`,$L=`# useReducerHistory
Custom useReducer that tracks and allows to use previous values. [See demo](https://react-tools.ndria.dev/#/hooks/state/useReducerHistory)

## Usage

The implementation is like that _useStateHistory_ but built on _useReducer_.

Please visit [useStateHistory](#/hooks/state/useStateHistory) example to see how it works.

## API

\`\`\`tsx
useReducerHistory<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>, capacity: number | "no-limit" = "no-limit"): [ReducerState<R>, Dispatch<ReducerAction<R>>, { history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable: boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void }]
\`\`\`


> ### Params
>
> - __reducer__: _R extends Reducer<any, any>_  
The reducer function that specifies how the state gets updated.
> - __initialState__: _ReducerState<R>_  
The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
> - __initializer?__: _(init: ReducerState<R>) => ReducerState<R>_  
Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
> - __capacity="no-limit"?__: _number | "no-limit"_  
history capacity (default 'no-limit').
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _ReducerState<R>_  
>     - _Dispatch<ReducerAction<R>>_  
>     - __Object__:  
>         - __history__ : _readonly ReducerState<R>[]_  
>         - __presentPointer__ : _number_  
>         - __trackUpdate__ : _(enable:boolean) => void_  
>         - __canUndo__ : _boolean_  
>         - __canRedo__ : _boolean_  
>         - __undo__ : _() => void_  
>         - __redo__ : _() => void_  
>         - __go__ : _(index: number) => void_  
>         - __clear__ : _(value?: ReducerAction<R>) => void_  
>`,qL=`# useReducerHistoryGetter
Custom useReducer with getter state function and that tracks and allows to use previous values. [See demo](https://react-tools.ndria.dev/#/hooks/state/useReducerHistoryGetter)

## Usage

The implementation is like that _useReducerHistory_, adding getter function of _useReducerGetReset_.

Please visit [useReducerHistory](#/hooks/state/useReducerHistory) and [useReducerGetReset](#/hooks/state/useReducerGetReset) examples to see how it works.

## API

\`\`\`tsx
useReducerHistoryGetter<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>, capacity: number | "no-limit" = "no-limit"): [ReducerState<R>, Dispatch<ReducerAction<R>>,()=>ReducerState<R>, { history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable: boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void }]
\`\`\`


> ### Params
>
> - __reducer__: _R extends Reducer<any, any>_  
The reducer function that specifies how the state gets updated.
> - __initialState__: _ReducerState<R>_  
The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
> - __initializer?__: _(init: ReducerState<R>) => ReducerState<R>_  
Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
> - __capacity="no-limit"?__: _number | "no-limit"_  
history capacity (default 'no-limit').
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _ReducerState<R>_  
>     - _Dispatch<ReducerAction<R>>_  
>     - _()=>ReducerState<R>_  
>     - __Object__:  
>         - __history__ : _readonly ReducerState<R>[]_  
>         - __presentPointer__ : _number_  
>         - __trackUpdate__ : _(enable:boolean) => void_  
>         - __canUndo__ : _boolean_  
>         - __canRedo__ : _boolean_  
>         - __undo__ : _() => void_  
>         - __redo__ : _() => void_  
>         - __go__ : _(index: number) => void_  
>         - __clear__ : _(value?: ReducerAction<R>) => void_  
>`,GL=`# useRemotePlayback
Hook to use [RemotePlayback API](https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useRemotePlayback)

## Usage

\`\`\`tsx
export const UseRemotePlayback = () => {
	const { isSupported, ref, prompt, state } = useRemotePlayback<HTMLVideoElement>();

	return <div style={{display: "flex", flexDirection: "column", width: 'fit-content', alignItems: "center", margin: '0 auto'}}>
		<p>Is supported: {isSupported ? 'Yes' : 'No'}</p>
		<p>Current state: {state}</p>
		<video ref={ref} width="400" controls>
			<source src={video} type="video/mp4" />
			Your browser does not support HTML video.
		</video>
		<button style={{marginTop: 20}} onClick={prompt} disabled={state === "unavailable"}>Prompt</button>
	</div>
}

\`\`\`

> The component use _useRemotePlayback_ hook to play a video in a remote device.


## API

\`\`\`tsx
useRemotePlayback<T extends HTMLMediaElement>({ onConnecting, onConnect, onDisconnect, onError }: UseRemotePlaybackProps={}): UseRemotePlaybackResult<T>
\`\`\`


> ### Params
>
> - __param__: _UseRemotePlaybackProps_  
object
> - __param.onConnecting?__: _(evt:Event) => void_  
function that will be executed when remote device has been connected.
> - __param.onConnect?__: _(evt:Event) => void_  
function that will be executed when remote device connecting.
> - __param.onDisconnect?__: _(evt:Event) => void_  
function that will be executed when remote device has been disconnected.
> - __param.onError?__: _(err: unknown) => void_  
function that will be executed on error watching or cancel watching devices availability.
>



> ### Returns
>
> __result__:  _UseRemotePlaybackResult_  
> Object with these properties:
> - __ref__: ref to attach media element.
> - __isSupported__: boolean that indicates if RemotePlayback API is available or not.
> - __state__: remote device state: _connected_, _connecting_ or _disconnect_.
> - __prompt__: function that prompts the user to select an available remote playback device and give permission for the current media to be played using that device.
>`,KL=`# useRerender
Hook to force a render. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useRerender)

## Usage

\`\`\`tsx
const UseRerender = () => {
	const update = useRerender();

	return (<>
		<button type="button" onClick={update}>Update</button>
		<br />
		<br />
		{new Date().toLocaleTimeString()}
	</>);
}

UseRerender.displayName = "UseRerender";

export { UseRerender };
\`\`\`

> The component has:
> - a button that execute the update
> 
> The component displays the current time. When button is clicked, it rerenders and current time is updated.


## API

\`\`\`tsx
useRerender<T>(withValue?: true|false|never): DispatchWithoutAction | [T, DispatchWithoutAction]
\`\`\`


> ### Params
>
> - __withValue?__: _boolean_  
optional boolean value: if it is true, an array with _value_ and _rerender_ function is returned.
>



> ### Returns
>
> __array with _value_ and _updateValue_ function or _rerender_ function.__
> - _DispatchWithoutAction|[T,DispatchWithoutAction]_  
>`,QL=`# useResizeObserver
Hook to use Resize Observer. Refer to [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API). [See demo](https://react-tools.ndria.dev/#/hooks/events/useResizeObserver)

## Usage

\`\`\`tsx
export const UseResizeObserver = () => {
	const [state, setState] = useState(false);
	const [refCb, disconnect, reconnect] = useResizeObserver<HTMLTextAreaElement>(
		(entries: ResizeObserverEntry[]) => {
			const result = entries[0].contentRect.width < 100;
			result !== state && setState(result);
		}
	);

	return <div>
		<p>{"Has width < 100 px: " + state}</p>
		<textarea ref={refCb} rows={3}></textarea>
		<br/>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
	</div>
}
\`\`\`

> The component renders a textarea element with a ref that receives callback returned from _useResizeObserver__ hook. There are also two button to disconnect and reconnect observer by functions returned from hook.
> 
> Hook is initialized with a callback that verifies if textarea element has a width minor or major of 100 px amd set result into __state variable__. The __state variable__ value is displayed on screen.


## API

\`\`\`tsx
useResizeObserver<T extends Element>(cb: ResizeObserverCallback, opts?: ResizeObserverOptions):[RefCallback<T>, () => void, () => void]
\`\`\`


> ### Params
>
> - __cb__: _ResizeObserverCallback_  
The function called whenever an observed resize occurs. The callback is called with two parameters: __entries__ and __observer__.
> - __opts?__: _ResizeObserverOptions_  
An options object allowing you to set options for the observation.
>



> ### Returns
>
> __result__: array with: cb for ref component attribute to observe, function to _disconnect_ observer, function to _reconnect_ observer.
> - __Array__:  
>     - _RefCallback<T>_  
>     - _()=>void_  
>     - _()=>void_  
>`,YL=`# useResponsive
Hook for getting responsive window size. [See demo](https://react-tools.ndria.dev/#/hooks/events/useResponsive). It receives an optional param __config__ to manually setting breakpoint keys. __config__ can have a keys subset and value can be a number or an object with _value_ and _condition_ properties. If _value_ is a number, the condition will be ">". By default Breakpoints are:
- xs: { value: 576, condition: "<" }
- sm: { value: 576, condition: ">=" }
- md: { value: 768, condition: ">=" }
- lg: { value: 992, condition: ">=" }
- xl: { value: 1200, condition: ">=" }

## Usage

\`\`\`tsx
export const UseResponsive = () => {
	const responsive = useResponsive();

	return <p>{JSON.stringify(responsive, null, 2)}</p>
}
\`\`\`

> The component initialize _useResponsive_ hook without param and displays screen size value.
> 
> Try to change window size to see how value changes.


## API

\`\`\`tsx
useResponsive<T extends UseResponsiveKeys>(config?: UseResponsiveBreakpoints<T>): { [s in (keyof typeof defaultConfig)]: boolean } | { [s in UseResponsiveKeys<T>]: boolean }
\`\`\`


> ### Params
>
> - __config?__: _UseResponsiveBreakpoints_  
custom breakpoint object.
>



> ### Returns
>
> __breakpoint key__: returns the __size key__ of the __config__, parameter if passed otherwise  __default config__, corresponding to the size of the window.
> - _keyof UseResponsiveBreakpoints_  
>`,JL=`# useScreen
Hook to work with [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API) and [Window Management API](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API). [See demo](https://react-tools.ndria.dev/#/hooks/events/useScreen)

## Usage

\`\`\`tsx
export const UseScreen = () => {
	const [details] = useScreen(true);

	return <div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto", border: "1px solid lightgray" }}>
		<p><strong>Current screen:</strong></p>
		<pre>{JSON.stringify(details.currentScreen, null, 2)}</pre>
		<p><strong>Screens:</strong></p>
		{
			details.screens?.map((el, index) => (
				<pre key={index}>{el.label}</pre>
			))
		}
	</div>
}
\`\`\`

> The component shows screens information.


## API

\`\`\`tsx
useScreen(allScreen?:boolean): [ScreenDetails, (orientation: OrientationLockType) => Promise<void>, ()=>void]
\`\`\`


> ### Params
>
> - __allScreen=false?__: _boolean_  
to interact with all screens or only with current screen.
>



> ### Returns
>
> :  __Array__:  
    - _ScreenDetails_  
    - _(orientation: OrientationLockType)=>void_  
    - _()=> void_  
> It contains:
> - __details__: an object with two properties:
>     - _currentScreen_: object of type _ScreenDetail_ with informations of current screen.
>     - _screens_: a _ScreenDetail_ array of all available screens, if browser supports this functionality, otherwise _undefined_.
>     - A _ScreenDetail_ object has these properties:
>         - __availHeight__
>         - __availWidth__
>         - __height__
>         - __width__
>         - __colorDepth__
>         - __pixelDepth__
>         - __orientation__:
>             - __angle__
>             - __type__
>         - __availLeft__: only available if browser supports them, otherwise is _undefined_
>         - __availTop__: only available if browser supports them, otherwise is _undefined_
>         - __left__: only available if browser supports them, otherwise is _undefined_
>         - __top__: only available if browser supports them, otherwise is _undefined_
>         - __devicePixelRatio__: only available if browser supports them, otherwise is _undefined_
>         - __isInternal__: only available if browser supports them, otherwise is _undefined_
>         - __isPrimary__: only available if browser supports them, otherwise is _undefined_
>         - __label__: only available if browser supports them, otherwise is _undefined_
> - __lock__: function that locks the orientation of the containing document to the specified orientation. Typically orientation locking is only enabled on mobile devices, and when the browser context is full screen.
> - __unlock__: function that unlocks the orientation of the containing document from its default orientation.
>`,XL=`# useScreenWakeLock
Hook to use [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useScreenWakeLock)

## Usage

\`\`\`tsx
export const UseScreenWakeLock = () => {
	const [info, acquire, release] = useScreenWakeLock();

	return <>
		<p>WakeLock API supported: {info.isSupported ? "Yes" : "No"}</p>
		<p>WakeLock type: {info.type ? info.type : "WakeLock not found."}</p>
		<p>WakeLock active: {info.isActive ? "Yes" : "No"}</p>
		<button
			type="button"
			onClick={() => {
				info.isActive ? release() : acquire();
			}}
			disabled={!info.isSupported}
		>
			{info.isActive ? "UnLock": "Lock"}
		</button>
	</>
}
\`\`\`

> The component uses _useScreenWakeLock_ hook to detect if WakeLock API is available and renders informations about it. It has a button also, to acquire and release a WakeLock.


## API

\`\`\`tsx
useScreenWakeLock(onRelease?: (evt?: Event) =>void): [{isSupported: boolean, type: "screen"|null, isActive: boolean|null}, ()=>Promise<void>, ()=>Promise<void>]
\`\`\`


> ### Params
>
> - __onRelease?__: _(evt?:Event)=>void_  
function that will be executed on release event.
>



> ### Returns
>
> __result__:  __Array__:  
    - __Object__:  
        - __isSupported__ : _boolean_  
        - __type__ : _"screen"|null_  
        - __isActive__ : _boolean|null_  
    - _()=>Promise<void>_  
    - _()=>Promise<void>_  
> - 1. __info__: object with these properties:
> 		- _isSupported_: returns a boolean to know if API is available.
> 		- _type_: returns a string representation of the currently acquired WakeLock type.
> 		- _isActive_: returns a boolean indicating whether the WakeLockSentinel has been activated.
> - 2. __acquire__: function to request a WakeLock.
> - 3. __release__: function to release a WakeLock.
>`,ZL=`# useScript
Hook to dinamically load an external script like Google Analitycs. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useScript)

## Usage

\`\`\`tsx
export const UseScript = () => {
	const [status, append, remove] = useScript(
		{
			src: \`https://code.jquery.com/jquery-3.5.1.min.js\`
		},
		{
			handleAppending: true,
		}
	)
	const message: string = status === "ready" ? jQuery.fn.jquery : "N.D.";

	useEffect(() => {
		const id = setTimeout(() => {
			append();
		}, 3000);
		return () => {
			clearTimeout(id);
			remove();
		};
	}, [append, remove]);
	return (<>
		<p>Script status: {status}</p>
		<p>jQuery version: {message}</p>
	</>);
}
\`\`\`

> The component load _jQuery_ script by _useScript_ hook and when it is __ready__ displays the jQuery version. When the component unmount, the script is removed.
> The script is loaded by _appendScript_ function inside a timeout to allow visibility status changes.


## API

\`\`\`tsx
useScriptuseScript: UseScript = function (attributes, options)
\`\`\`


> ### Params
>
> - __attributes__: _{ src?: string, async?: boolean, crossorigin?: "anonymous" | "use-credentials" | "", defer?: boolean, fetchpriority?: "high" | "low" | "auto", integrity?: string, nomodule?: boolean, nonce?: string, referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url", type?: string }_  
script attributes.
> - __options__: _{ handleAppending?: boolean, removeOnUnmount?: boolean, iframe?: HTMLIFrameElement }_  
to handle appending and removing script, to automatically remove script when component unmount and to append script to an iframe.
>



> ### Returns
>
> __array__: first element returns script status and second and thirds elements allow to manually handle script.
> - __Array__:  
>     - _status: UseScriptStatus_  
>     - _(attributes: UseScriptProps["attributes"], iframe?: HTMLIFrameElement) => void_  
>     - _() => void_  
>`,e9=`# useScrollIntoView
Hook to scroll an element into view. [See demo](https://react-tools.ndria.dev/#/hooks/events/useScrollIntoView)

## Usage

\`\`\`tsx

export const UseScrollIntoView = () => {
	const { scroll, targetRef } = useScrollIntoView<HTMLParagraphElement, HTMLDivElement>({
		scrollableElement: ()=>document.querySelector('.container') as HTMLDivElement
	});

	return (
		<div>
			<button
				onClick={()=>scroll('start')}
			>
				Scroll to target
			</button>
			<div
				style={{
					width: '100%',
					height: '50vh',
				}}
			/>
			<p ref={targetRef}>Hello there</p>
		</div>
	);
}
\`\`\`




## API

\`\`\`tsx
useScrollIntoView<T extends Element, E extends Element | null = null>({ duration = 1000, axis = "y", animation = easeInOutSine, offset = 0, cancelable = false, onFinish, scrollableElement }: { duration?: number, axis?: "x" | "y", animation?: (t: number) => number, offset?: number, cancelable?: boolean, onFinish?: () => void, scrollableElement: (()=>E)|E|React.RefObject<E|null> }): { targetRef: React.MutableRefObject<T | null>, scroll: (alignment?: "start" | "center" | "end") => void, cancel: () => void }
\`\`\`


> ### Params
>
> - __param__: _Object_
> - __param.duration=1000?__: _number_  
animation duration in milliseconds.
> - __param.axis="x"?__: _"x"|"y"_  
scrolling axis.
> - __param.animation=easeInOutSine?__: _(t:number)=>number_  
easing animation function. Refer to [https://easings.net/](https://easings.net/).
> - __param.offset=0?__: _number_  
additional distance.
> - __param.cancelable=false?__: _boolean_  
to establish if animation can be interrupted by user scroll.
> - __param.onFinish?__: _()=>void_  
callback to be executed when animation ends.
> - __param.scrollableElement?__: _(()=>E)|E|React.RefObject<E|null>_  
scrollable parent element, ref or function that returns element.
>



> ### Returns
>
> __result__: a __targetRef__ to target element, a __scroll__ function to start scrolling, a __cancel__ function to cancel scrolling.
> - __Object__:  
>     - __targetRef__ : _React.MutableRefObject<T|null>_  
>     - __scroll__ : _(alignment?: "start"|"center"|"end")=>void_  
>     - __cancel__ : _()=>void_  
>`,t9=`# useSessionStorageState
Custom _useState_ hook implementation using _sessionStorage_, with immutable _getter state_ function and to _remove_ key from sessionStorage. [See demo](https://react-tools.ndria.dev/#/hooks/state/useSessionStorageState)

## Usage

\`\`\`tsx
const Child = () => {
	const [state] = useSessionStorageState<string>({key:"demo", opts: {mode: "read"}});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
}

const Child2 = () => {
	const [setState] = useSessionStorageState<string>({key:"demo", opts: {mode: "write"}});
	return (<>
		<h3>Child component 2</h3>
		<form onSubmit={(e: BaseSyntheticEvent) => {
			setState(e.target[0].value);
			e.preventDefault();
		}}>
			<input type="text" />
		</form>
	</>)
}

const UseSessionStorageState = () => {
	const [, , , remove] = useSessionStorageState({ key: "demo", initialState: "prova" });

	const clear = useCallback(() => remove(), [remove]);

	useEffect(() => {
		return () => {
			clear();
		}
	}, [clear]);

	return (<>
		<Child />
		<br />
		<Child2/>
	</>);
}

UseSessionStorageState.displayName = "UseSessionStorageState";

export { UseSessionStorageState };
\`\`\`

> The component has:
> - An internal _useSessionStorage_ state with __key__ _demo_ and __initialState__ _prova_ from which gets __remove__ function.
> - A Child component 1 that uses _useSessionStorage_ with _read_ __mode__ and __key__ _demo_ to read from sessionStorage.
> - A Child component 2 that uses _useSessionStorage_ with _write_ __mode__ and __key__  _demo_ to write to sessionStorage with an onSubmit form event with a input text value.
> - An useEffect that invokes __remove__ function and delete item with key _demo_ from sessionStorage when the component unmounts.
> 
> When component is mounted, the Child1 state is _prova_. It can be changed by Child2. If you open the page into another tab, changes aren't reflected in both tabs.


## API

\`\`\`tsx
useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void]
\`\`\`


> ### Params
>
> - __params__: _Object_
> - __params.key__: _string_  
item key in session storage.
> - __params.initialState?__: _T | () => T_  
value or a function , optional.
> - __params.opts={serializer: JSON.stringify, deserializer: jSON.parse, mode: "read/write"}?__: _{serializer: (item: T)=> string, deserializer: (item: string)=> T, mode?: "read" | "write" | "read/write"}_  
object with serializer and deserializer function to handle values in sessionStorage and mode property to use hook only to read, write or both.
>



> ### Returns
>
> 
> - __Union of__:  
>     - __Array__:  
>         - _T_  
>         - _() => T_  
>         - _() => void_  
>     - __Array__:  
>         - _Dispatch<SetStateAction<T>>_  
>         - _() => T_  
>         - _() => void_  
>     - __Array__:  
>         - _T_  
>         - _Dispatch<SetStateAction<T>>_  
>         - _() => T_  
>         - _() => void_  
>`,n9=`# useSet
Hook to use _Set data structure_ to handle component state with all Set methods. [See demo](https://react-tools.ndria.dev/#/hooks/state/useSet)

## Usage

\`\`\`tsx
const UseSet = () => {
	const set = useSet<string | number>();

	const inputRef = useRef<HTMLInputElement>(null);

	const del = useCallback(() => {
		set.delete(inputRef.current!.value);
	}, [set]);

	const add = useCallback(() => {
		const { value } = inputRef.current!;
		set.add(value);
	}, [set]);

	const clear = useCallback(() => {
		set.clear();
	}, [set]);

	const parsed = useMemo(() => {
		const temp: (string|number)[] = [];
		set.forEach((value) => temp.push(value));
		return temp.join(", ");
	}, [set]);

	return (<>
		{parsed}
		<br/>
		<input ref={inputRef} type="text" />
		<br />
		<div style={{ marginTop: 15, gridTemplateColumns: 'auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={add}>Add</button>
			<button onClick={del}>Delete</button>
			<button onClick={clear}>Clear</button>
		</div>
	</>);
}

UseSet.displayName = "UseSet";

export {UseSet}
\`\`\`

> The component has:
> - A _useSet_ internal state.
> - An uncontrolled input with _inputRef_ ref used to execute buttons actions.
> - A button _Add_ that adds the input value into state by _add_ method of Set interface.
> - A button _Delete_ that remove item into state by _key_, written in input by _delete_ method of Set interface.
> - A button _Clear_ that clear state by _clear_ method of Set interface.
> - A variable _parsed_ create with __useMemo__ that memoized a concatenated string of state values, separated by comma.


## API

\`\`\`tsx
useSet<T>(initialState?: Iterable<T> | (() => Iterable<T>))
\`\`\`


> ### Params
>
> - __initialState?__: _Iterable<T> | (() => Iterable<T>)_  
An iterable object whose elements are added to Set, or function that returns it.
>



> ### Returns
>
> 
> - _Set<T>_  
>`,o9=`# useShare
Hook to use [Web Share Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useShare)

## Usage

\`\`\`tsx
export const UseShare = () => {
	const sharedDate = useRef<ShareData>({
		title: "React-tools",
		text: "React tools",
		url: window.location.origin + "/index.html"
	})
	const { isSupported, share } = useShare();

	const onClick = () => share(sharedDate.current);

	return <div style={{textAlign: "center"}}>
		<p>Is supported: {isSupported.toString()}</p>
		<button onClick={onClick}>Share</button>
	</div>
}
\`\`\`

> The component uses _useShare_ hook to know if Web share API is supported and returns a button to share link to this library.


## API

\`\`\`tsx
useShare(): {isSupported: boolean, share: (data?: ShareData)=>Promise<void>}
\`\`\`





> ### Returns
>
> __object__: __isSupported__ to known if share API is supported and __share__ function to use Web share API.
> - __Object__:  
>     - __isSupported__ : _boolean_  
>     - __share__ : _(data?: ShareData) => Promise<void>_  
>`,r9=`# useSpeechRecognition
Hook to use _SpeechRecognition API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useSpeechRecognition)

## Usage

\`\`\`tsx
export const UseSpeechRecognition = () => {
	const colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow', 'transparent']
	const grammar = \`#JSGF V1.0; grammar colors; public <color> = \${colors.join(' | ')} ;\`

	const btnRef = useRef<HTMLButtonElement>(null);
	const perform = usePerformAction(() => btnRef.current?.focus());

	const [message, setMessage] = useState("Ready");

	const [state, start, stop] = useSpeechRecognition({
		onStart: useCallback(() => {
			setMessage("Listening...")
		}, []),
		onEnd: useCallback(() => {
			stop();
			setMessage("Finish");
			perform();
		}, [perform]),
		onNoMatch: useCallback(() => {
			setMessage("Color not recognized.")
		}, []),
		onError: useCallback((ev: SpeechRecognitionErrorEvent) => {
			setMessage(\`Error occurred in recognition: \${ev.message ? ev.message : ev.error}\`);
		}, []),
	});

	const onStart = () => {
		const grammars = new SpeechGrammarListP() as SpeechGrammarList;
		grammars.addFromString(grammar, 1);
		start({
			lang: "en-US",
			continuous: false,
			interimResults: false,
			maxAlternatives: 1,
			grammars
		});
	}

	const color = useMemo(() => {
		let colr = "transparent";
		if (state.result.results) {
			const color = state.result.results[0][0].transcript;
			if (colors.includes(color)) {
				colr = color;
			}
		}
		return colr;
	}, [state.result.results, colors]);

	return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
		{
			state.isSupported
				? <>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p>Click on start to say a color to change backgroundColor of bordered div. Try</p>
						<div style={{ display: 'flex', flexWrap: "wrap", gap: 10 }}>
							{
								colors.map(el => <span key={el} style={{ color: el }}>{el}</span>)
							}
						</div>
					</div>
					<p>{message}</p>
					<div style={{ border: "1px solid lightgray", width: 300, height: 150, backgroundColor: color, margin: '0 auto' }}>
						{
							state.result && <p>Color is: {color}</p>
						}
					</div>
					<div style={{ display: 'flex', justifyContent: "center", gap: 10 }}>
						<button ref={btnRef} onClick={onStart} disabled={state.isListening}>Start</button>
					</div>
				</>
				: <p>Speech Recognition not supported</p>
		}
	</div>
}
\`\`\`

> This component use _useSpeechRecognition_ hook to simulate a Speech color change app. When button _start_ is clicked, you can say an HTML color keyword and the bordered div color will change to that color.


## API

\`\`\`tsx
useSpeechRecognition({ alreadyStarted, defaultConfig, onAudioStart, onAudioEnd, onEnd, onError, onNoMatch, onResult, onSoundStart, onSoundEnd, onSpeechStart, onSpeechEnd, onStart }: UseSpeechRecognitionProps): [SpeechRecognitionState, (config?: SpeechRecognitionConfig) => void, () => void, (resultAlso?: boolean) => void]
\`\`\`


> ### Params
>
> - __opts__: _UseSpeechRecognitionProps_  
options.
> - __opts.alreadyStarted=false?__: _boolean_  
istant start SpeechRecognition if it is available.
> - __opts.defaultConfig?__: _Object_  
config parameters for current SpeechRecognition.
> - __opts.defaultConfig.grammars?__: _SpeechGrammarList_  
a _SpeechGrammarList_ containing the SpeechGrammar objects that represent your grammar for your app.
> - __opts.defaultConfig.lang?__: _LanguageBCP47Tags_  
a string representing the BCP 47 language tag for the current SpeechRecognition.
> - __opts.defaultConfig.continuous?__: _boolean_  
a boolean value representing the current SpeechRecognition's continuous status. true means continuous, and false means not continuous (single result each time.).
> - __opts.defaultConfig.interimResults?__: _boolean_  
a boolean value representing the state of the current SpeechRecognition's interim results. true means interim results are returned, and false means they aren't.
> - __opts.defaultConfig.maxAlternatives?__: _number_  
a number representing the maximum returned alternatives for each result.
> - __opts.onAudioStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _audiostart_ event is dispatched.
> - __opts.onAudioEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _audioend_ event is dispatched.
> - __opts.onEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _end_ event is dispatched.
> - __opts.onError?__: _((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null_  
function that will be executed when _error_ event is dispatched.
> - __opts.onNoMatch?__: _((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null_  
function that will be executed when _nomatch_ event is dispatched.
> - __opts.onResult?__: _((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null_  
function that will be executed when _result_ event is dispatched.
> - __opts.onSoundStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _soundstart_ event is dispatched.
> - __opts.onSoundEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _soundend_ event is dispatched.
> - __opts.onSpeechStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _speechstart_ event is dispatched.
> - __opts.onSpeechEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _speechend_ event is dispatched.
> - __opts.onStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _start_ event is dispatched.
>



> ### Returns
>
> __result__:  __Array__:  
    - _SpeechRecognitionState_  
    - _(config?: SpeechRecognitionConfig)=>void_  
    - _()=>void_  
    - _(resultAlso?:boolean)=>void_  
> - 1. __state__: object with these properties:
> 		- _isSupported_: returns a boolean to know if API is available.
> 		- _isListening_: returns a boolean indicating current SpeechRecognition execution or not.
> 		- _result_: returns result of SpeechRecognition execution.
> - 2. __start__: function to start SpeechRecognition.
> - 3. __stop__: function to stop SpeechRecognition.
> - 4. __reset__: function to reset SpeechRecognition with optional parameter to reset results also.
>`,a9=`# useSpeechSynthesis
Hook to use _SpeechSynthesis API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useSpeechSynthesis)

## Usage

\`\`\`tsx
export const UseSpeechSynthesis = () => {
	const { state, speak, pause, resume, cancel } = useSpeechSynthesis({
		onError(ev) {
			console.log(ev)
		},
	});
	const [form, setForm] = useState<{ text: string, volume: string, voice: string, lang: string, rate: string, pitch: string }>({ text: "", volume: "0.1", voice: "", lang: "", rate: "1", pitch: "1" });

	if (!state.isSupported) {
		return <div style={{ display: "flex", justifyContent: "center" }}>
			<p>Speech Synthesis not supported</p>
		</div>
	}

	return <div style={{ display: "flex", flexDirection: "column", gap: 10, justifyContent: "center", width: 'fit-content' }}>
		<div>
			<label htmlFor="text">Text to speak</label>
			<input type="text" value={form.text} onChange={e => setForm(f => ({...f, text: e.target.value}))} id="text" name="text"/>
		</div>
		<div>
			<label htmlFor="text">Voices</label>
			<select value={form.voice} onChange={e => setForm(f => ({ ...f, voice: e.target.value }))} disabled={state.status === "speaking"}>
				<>
					{
						(state.voices || []).map(el => (
							<option key={el.name} value={el.name}>{ \`\${el.name} - \${el.lang}\${el.default ? ' - DEFAULT' : ''}\` }</option>
						))
					}
				</>
			</select>
		</div>
		<div>
			<label htmlFor="text">Voices</label>
			<select value={form.lang} onChange={e => setForm(f => ({ ...f, lang: e.target.value }))} disabled={state.status === "speaking"}>
				<>
					{
						["en-US", "it-IT", "en-GB", "de-DE", "es-ES", "fr-FR"].map(el => (
							<option key={el} value={el}>{\`\${el}\`}</option>
						))
					}
				</>
			</select>
		</div>
		<div>
			<label htmlFor="volume">Volume</label>
			<input type="range" id="volume" name="volume" min="0" max="1" step="0.1" value={form.volume} onChange={e => setForm(f => ({...f, volume: e.target.value}))} disabled={state.status === "speaking"}/>
		</div>
		<div>
			<label htmlFor="range">Rate</label>
			<input type="range" id="range" name="range" min="0.1" max="10" step="0.1" value={form.rate} onChange={e => setForm(f => ({...f, rate: e.target.value}))} disabled={state.status === "speaking"}/>
		</div>
		<div>
			<label htmlFor="pitch">Pitch</label>
			<input type="range" id="pitch" name="pitch" value={form.pitch} min="0" max="2" step="0.1" onChange={e => setForm(f => ({ ...f, pitch: e.target.value }))} disabled={state.status === "speaking"}/>
		</div>
		<div style={{ display: "flex", gap: 10 }}>
			<button
				type="button"
				onClick={() => {
					speak({
						text: form.text,
						lang: form.lang as LanguageBCP47Tags,
						voice: (state.voices || []).filter(v => v.name === form.voice)[0],
						volume: Number(form.volume),
						rate: Number(form.rate),
						pitch: Number(form.pitch),
					})
				}}
				disabled={state.status === "paused"}
			>
				Speak
			</button>
			<button
				type="button"
				onClick={() => {
					speak({
						text: form.text,
						lang: form.lang as LanguageBCP47Tags,
						voice: (state.voices || []).filter(v => v.name === form.voice)[0],
						volume: Number(form.volume),
						rate: Number(form.rate),
						pitch: Number(form.pitch),
						startImmediatly: true
					})
				}}
			>
				Speak immediatly
			</button>
			<button
				type="button"
				onClick={() => {
					state.status === "paused" ? resume() : pause();
				}}
				disabled={!["speaking", "paused"].includes(state.status)}
			>
				{state.status === "paused" ? "Resume" : "Pause"}
			</button>
			<button
				type="button"
				onClick={cancel}
				disabled={state.status === "end"}
			>
				Cancel
			</button>
		</div>
	</div>
}
\`\`\`

> The component use _useSpeechSynthesis_ hook to read a text from an input text. Other fields are renders to setting properties as _voice_ _rate_ and _pitch_ of SpeechRecognition.


## API

\`\`\`tsx
useSpeechSynthesis(opts?: UseSpeechSynthesisProps): ReturnType<UseSpeechSynthesis>
\`\`\`


> ### Params
>
> - __opts?__: _UseSpeechSynthesisProps_  
options.
> - __opts.onSpeak?__: _() => void_  
function that will be executed when _speak_ event is fired.
> - __opts.onStart?__: _SpeechSynthesisUtterance["onstart"]_  
function that will be executed when _start_ event is fired.
> - __opts.onPause?__: _SpeechSynthesisUtterance["onpause"]_  
function that will be executed when _pause_ event is fired.
> - __opts.onResume?__: _SpeechSynthesisUtterance["onresume"]_  
function that will be executed when _resume_ event is fired.
> - __opts.onBoundary?__: _SpeechSynthesisUtterance["onboundary"]_  
function that will be executed when _boundary_ event is fired.
> - __opts.onMark?__: _SpeechSynthesisUtterance["onmark"]_  
function that will be executed when _mark_ event is fired.
> - __opts.onError?__: _SpeechSynthesisUtterance["onerror"]_  
function that will be executed when _error_ event is fired.
> - __opts.onEnd?__: _SpeechSynthesisUtterance["onend"]_  
function that will be executed when _end_ event is fired.
> - __opts.onCancel?__: _SpeechSynthesisonCancel_  
function that will be executed when _cancel_ event is fired.
> - __opts.lang?__: _LanguageBCP47Tags_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/lang).
> - __opts.pitch?__: _SpeechSynthesisUtterance["pitch"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pitch).
> - __opts.rate?__: _SpeechSynthesisUtterance["rate"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/rate).
> - __opts.voice?__: _SpeechSynthesisUtterance["voice"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/voice).
> - __opts.volume?__: _SpeechSynthesisUtterance["volume"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/volume).
>



> ### Returns
>
> __return__:  _ReturnType<UseSpeechSynthesis>_  
> -  __state__: object with these properties:
> 		- _isSupported_: Returns a boolean value indicating SpeechSynthesis availability.
> 		- _status_: Returns the current status of SpeechSynthesis between: _ready_ _speaking_ _paused_ _error_ _end_ and _unavailable_.
> 		- _hasPending_: Returns a boolean indicating the presence of texts to speech.
> 		- _voices_: Returns the list of available voices.
> -  __speak__: Function to start speaking.
> -  __pause__: Function to keep in pause speaking.
> -  __resume__: Function to resume speaking.
> -  __cancel__: Function to cancel speaking.
>`,i9=`# useStateGetReset
Custom useState with get and reset state functions. [See demo](https://react-tools.ndria.dev/#/hooks/state/useStateGetReset)

## Usage

\`\`\`tsx
const UseStateGetReset = () => {
	const [stateG, setStateG, getState, resetState] = useStateGetReset({ id: "", name: "", eta: "" });
	const [state, setState] = useState({ id: "", name: "", eta: "" });

	const onChangeGetter = useCallback((e: BaseSyntheticEvent) => {
		const state = getState();
		setStateG({
			...state,
			[e.target.name]: e.target.value
		});
	}, [getState, setStateG])

	const onChange = useCallback((e: BaseSyntheticEvent) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}, [state, setState])

	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<div>
				<p><strong>With get and reset</strong></p>
				<div style={{ gridTemplateRows: "auto auto auto auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="idG" name="id" value={stateG.id} onChange={onChangeGetter} />
					<Input id="nameG" name="name" value={stateG.name} onChange={onChangeGetter} />
					<Input id="etaG" name="eta" value={stateG.eta} onChange={onChangeGetter} />
					<button onClick={resetState}>Reset State</button>
				</div>
			</div>
			<div>
				<p><strong>Without get and reset</strong></p>
				<div style={{ gridTemplateRows: "auto auto auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="id" name="id" value={state.id} onChange={onChange} />
					<Input id="name" name="name" value={state.name} onChange={onChange} />
					<Input id="eta" name="eta" value={state.eta} onChange={onChange} />
				</div>
			</div>
		</div>
	);
};

UseStateGetReset.displayName = "UseStateGetReset";

export { UseStateGetReset };
\`\`\`

> The component has:
> - A _useStateGetReset_ that receives an object, with three properties _id_, _name_, _eta_, and returns a tuple with _stateG_, _setterG_, _getter_ and _resetter_.
> - A _useState_ that receives same object of useStateGetter and returns a tuple with _state_ and _setter_.
> - Each property of _state_ and _stateG_ is rendered an Input component that renders the input and label fields and the _component's number of renders_.
> - A _onChangeGetter_ function made with useCallback to handle stateGetter input onChange, reading other values with getter function.
> - A _onChange_ function made with useCallback to handle stater input onChange, reading other values by state variable.
> - A button that executes the _resetter_ function on _stateG_.
> 
> The two functions onChange and onChange Getter update their respective _state_ every time they are executed. Since the _onChange_ function depends on the state, every time this changes it will be reevaluated and this will also trigger the rerender of the input components that have not undergone a change to their _value_ variable. The _onChangeGetter_ doesn't have this behavior: since the _getter_ function isn't reevaluated even if the _stateG_ changes, so the _onChangeGetter_ is never reevaluated and only the input component that has a change in the _value_ variable is rerendered.


## API

\`\`\`tsx
useStateGetReset<T>(initialState?: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void] | [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => T | undefined, () => void]
\`\`\`


> ### Params
>
> - __initialState__: _T | () => T_  
value or a function.
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _T_  
>     - _Dispatch<SetStateAction<T>>_  
>     - _() => T_  
>     - _()=>void_  
>`,l9=`# useStateHistory
Custom useState that tracks and allows to use previous values. [See demo](https://react-tools.ndria.dev/#/hooks/state/useStateHistory)

## Usage

\`\`\`tsx
function UseStateHistory() {

	const [count, setCount, {go, presentPointer, history, trackUpdate, canRedo, canUndo, redo, undo, clear}] = useStateHistory(0, 10);

	return (<>
		<p>
			Count is {count}
		</p>
		<p>
			Current pointer is {presentPointer}
		</p>
		<p>
			History is {JSON.stringify(history)}
		</p>
		<div style={{ gridTemplateColumns: 'auto auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={() => setCount((count) => (count + 1))}>
				increment
			</button>
			<button onClick={() => setCount((count) => {
				trackUpdate(false);
				return count + 1;
			})}>
				disableHistory and increment
			</button>
			<button onClick={() => trackUpdate(false)}>
				disable history
			</button>
			<button onClick={() => trackUpdate(true)}>
				enable history
			</button>
			<button onClick={() => clear()}>Clear</button>
			<button onClick={undo} disabled={!canUndo}>Undo</button>
			<button onClick={redo} disabled={!canRedo}>Redo</button>
			<button onClick={() => go(+(document.querySelector('#go') as HTMLInputElement).value)}>
				Go
				<input type='number' id='go' style={{ marginLeft: 35, maxWidth: 40 }} />
			</button>
		</div>
	</>);
}

UseStateHistory.displayName = "UseStateHistory";

export { UseStateHistory };

\`\`\`

> The component has:
> - a counter _useHistoryState_ variable with _initialState=0_ and _memory=10_.
> - a button to increment _counter_.
> - a button to increment _counter_ and to disable _history_.
> - a button to disabled _history_.
> - a button to enable _history_.
> - a button to undo _operation_.
> - a button to redo _operation_.
> - an input and button to go at specified value.
> - a button to clear history.


## API

\`\`\`tsx
useStateHistory<T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, { history: readonly T[], presentPointer: number, trackUpdate: (enable:boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: T) => void }]
\`\`\`


> ### Params
>
> - __initialState__: _T | () => T_  
value or a function.
> - __capacity="no-limit"?__: _number | "no-limit"_  
history capacity (default 'no-limit').
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _T_  
>     - _Dispatch<SetStateAction<T>>_  
>     - __Object__:  
>         - __history__ : _readonly T[]_  
>         - __presentPointer__ : _number_  
>         - __trackUpdate__ : _(enable:boolean) => void_  
>         - __canUndo__ : _boolean_  
>         - __canRedo__ : _boolean_  
>         - __undo__ : _() => void_  
>         - __redo__ : _() => void_  
>         - __go__ : _(index: number) => void_  
>         - __clear__ : _(value?: T) => void_  
>`,s9=`# useStateHistoryGetter
Custom useState with getter state function and that tracks and allows to use previous values. [See demo](https://react-tools.ndria.dev/#/hooks/state/useStateHistoryGetter)

## Usage

The implementation is like that _useStateHistory_, adding getter function of _useStateGetReset_.

Please visit [useStateHistory](#/hooks/state/useStateHistory) and [useStateGetReset](#/hooks/state/useStateGetReset) examples to see how it works.

## API

\`\`\`tsx
useStateHistoryGetter<T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, () => T, ReturnType<typeof useStateHistory<T>>[2]]
\`\`\`


> ### Params
>
> - __initialState__: _T | () => T_  
value or a function.
> - __capacity="no-limit"?__: _number | "no-limit"_  
history capacity (default 'no-limit').
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _T_  
>     - _Dispatch<SetStateAction<T>>_  
>     - _() => T_  
>     - __Object__:  
>         - __history__ : _readonly T[]_  
>         - __presentPointer__ : _number_  
>         - __trackUpdate__ : _(enable:boolean) => void_  
>         - __canUndo__ : _boolean_  
>         - __canRedo__ : _boolean_  
>         - __undo__ : _() => void_  
>         - __redo__ : _() => void_  
>         - __go__ : _(index: number) => void_  
>         - __clear__ : _(value?: T) => void_  
>`,c9=`# useStateValidator
Custom _useState_ hook that validates state on every update. [See demo](https://react-tools.ndria.dev/#/hooks/state/useStateValidator)

## Usage

\`\`\`tsx
export const UseStateValidator = () => {
	const [state, setState, validation] = useStateValidator(
		{
			name: "", email: ""
		},
		(state, validation) => {
			if (state.name.length > 10) {
				validation.name.invalid = true;
				validation.name.message = "Max Length 10 characters"
			}
			if (!state.email.includes("@")) {
				validation.email.invalid = true;
				validation.email.message = "@ is missing"
			}
			return validation;
		}
	);

	return <div>
		<div style={{display: "flex", flexDirection: "column", width: 'fit-content', margin: "0 auto"}}>
			<input type="text" name="name" value={state.name} onChange={e => setState(s => ({...s, [e.target.name]: e.target.value}))} />
			{
				validation.name.invalid &&
				<span style={{ color: "red" }}>{validation.name.message}</span>
			}
		</div>
		<div style={{display: "flex", flexDirection: "column", width: 'fit-content', margin: "0 auto"}}>
			<input type="text" name="email" value={state.email} onChange={e => setState(s => ({...s, [e.target.name]: e.target.value}))} />
			{
				validation.email.invalid &&
				<span style={{ color: "red" }}>{validation.email.message}</span>
			}
		</div>
	</div>
}
\`\`\`

> The component uses _useStateValidator_ hook to declare a state object with _name_ and _email_ properties attached to two input tag and validates them during typing.


## API

\`\`\`tsx
useStateValidator<T>(initialState: T | (() => T), validator: StateValidator<T>): [T, Dispatch<SetStateAction<T>>, T extends object ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: string}]
\`\`\`


> ### Params
>
> - __initialState__: _T | () => T_  
value or a function.
> - __validator__: _StateValidator_  
function that will be executed to validate state.
>



> ### Returns
>
> __} invalid__:  __Array__:  
    - _T_  
    - _Dispatch<SetStateAction<T>>_  
    - _T extends object ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: strin_  
> Array with:
> - first element: __state__ value.
> - second element: __setState__ function to update state.
> - third element: __valid__ validation value/object for state.
>`,u9=`# useSwipe
Hook to handle swipe gesture. [See demo](https://react-tools.ndria.dev/#/hooks/events/useSwipe)

## Usage

\`\`\`tsx
export const UseSwipe = () => {
	const divRef = useRef<HTMLDivElement>(null);
	useSwipe({
		target: divRef,
		onSwipe(_, direction, delta) {
			console.log(direction)
			delta.x >=0 && (divRef.current!.style.left = delta.x + "px");
		},
		onSwipeEnd(_, __, delta) {
			divRef.current!.style.left = \`\${delta.x>330 ? "400" : "0"}px\`
		},
	});
	const reset = () => {
		divRef.current!.style.left = "0";
	}
	return <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 400, height: 100, border: "1px solid lightgray", overflow: "hidden", margin: "0 auto" }}>
		<button onClick={reset}>RESET</button>
		<div ref={divRef} style={{ position: "absolute", backgroundColor: "rgb(73 84 104)", zIndex: 100, inset: 0 }}><p>SWIPE</p></div>
	</div>
}
\`\`\`

> The component uses _useSwipe_ hook to handle swipe event on a div element.


## API

\`\`\`tsx
useSwipe({ target, onSwipeStart, onSwipe, onSwipeEnd, options }: UseSwipeProps): UseSwipeResult
\`\`\`


> ### Params
>
> - __param__: _UseSwipeProps_  
object
> - __param.target__: _RefObject<Element>|Element_  
element on which attach swipe event.
> - __param.onSwipeStart?__: _(e: MouseEvent|TouchEvent) => void_  
callback that will be executed when swipe starts.
> - __param.onSwipe?__: _(e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: {x: number, y: number}) => void_  
callback that will be executed when swipe moves.
> - __param.onSwipeEnd?__: _(e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: { x: number, y: number }) => void_  
callback that will be executed when swipe ends.
> - __param.options?__: _Object_  
object to set option for listener.
> - __param.options.passive=true?__: _boolean_  
if true, handler callback never calls _preventDefault_ method.
> - __param.options.threshold=0?__: _threshold_  
a threshold value for swipe event.
>



> ### Returns
>
> __- callback that stops listener.__
> - _UseSwipeResult_  
>`,d9=`# useSyncExternalStore
_useSyncExternalStore_ hook polyfilled for React versions below 18 ___only client side___. [See demo](https://react-tools.ndria.dev/#/hooks/state/useSyncExternalStore)

## API

\`\`\`tsx
useSyncExternalStore<Snapshot>(subscribe: (onStoreChange: () => void) => () => void, getSnapshot: () => Snapshot): Snapshot
\`\`\`


> ### Params
>
> - __subscribe__: _(onStoreChange: () => void) => ()=>void_  
function to register a callback that is called whenever the store changes.
> - __getSnapshot__: _()=>Snapshot_  
function that returns the current value of the store.
>



> ### Returns
>
> __result__: state
> - _Snapshot_  
>`,p9=`# useTextSelection
Hook to track text selection. Refers to [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useTextSelection)

## Usage

\`\`\`tsx
export const UseTextSelection = () => {
	const ref = useRef<HTMLDivElement>(null);
	const selection = useTextSelection({ target: ref, onEnd: () => {getSelection()?.removeAllRanges()} });
	const rectangles = useMemo(() => {
		if (!selection) {
			return null;
		} else {
			const rectangles = [];
			rectangles.push(
				<div
					key="outside-rectangle"
					style={{
						position: "absolute",
						border: ".5px solid red",
						top: selection.outsideRectangle.top + "px",
						left: selection.outsideRectangle.left + "px",
						width: selection.outsideRectangle.width + "px",
						height: selection.outsideRectangle.height + "px",
					}}
				></div>
			);
			selection.innerRectangles.forEach((el, index) => {
				rectangles.push(<div
					key={"inner-rectangle-"+index}
					style={{
						position: "absolute",
						border: ".5px solid darkcyan",
						top: el.top + "px",
						left: el.left + "px",
						width: el.width + "px",
						height: el.height + "px",
					}}
				></div>);
			})
			return rectangles;
		}
	}, [selection]);

	return <div style={{ display: "grid", gridTemplateColumns: "50% 50%", columnGap: 15 }}>
		<div ref={ref} style={{ position: "relative", border: "1px solid lightgray" }}>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			{rectangles}
		</div>
		<div style={{textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto", border: "1px solid lightgray"}}>
			<p><strong>Selection:</strong></p>
			<pre>{JSON.stringify(selection, null, 2)}</pre>
		</div>
	</div>
}
\`\`\`

> The component renders a grid with two columns. First column contains _two tag p elements_ with text and secondo column the result of _useTextSelection hook_.
> 
> _useTextSelection_ is initialized with a _target_ property that has a ref attached to first column div and _onEnd_ property that has a function that clean selection. When text is selected appears colored rectangles with the coordinates returned from hook.


## API

\`\`\`tsx
useTextSelection({ target, onStart, onChange, onEnd }: { target?: RefObject<HTMLElement> | HTMLElement, onStart?: (evt: Event) => void, onChange?: (evt: Event) => void, onEnd?: (evt: Event) => void } = {}): TextSelection | null
\`\`\`


> ### Params
>
> - __param__: _Object_  
object with selection properties
> - __param.target?__: _RefObject<HTMLElement> | HTMLElement_  
element in which allow selection. Default is _document.body_.
> - __param.onStart?__: _(evt: Event) => void_  
function to execute when selection starts.
> - __param.onChange?__: _(evt: Event) => void_  
function to execute while selection changes.
> - __param.onEnd?__: _(evt: Event) => void_  
function to execute while selection ends.
>



> ### Returns
>
> __TextSelection__: object with: _text_: selected text; _direction_: selection direction; _outsideRectangle_: a __DOMRect__ of selection rectangle; _innerRectangles_: list of __DOMRect__ representing the selection slices.
> - __Object__:  
>     - __text__ : _string_  
>     - __direction__ : _"forward"|"backward"_  
>     - __outsideRectangle__ : _DOMRect_  
>     - __innerRectangles__ : _DOMRect[]_  
>`,f9=`# useThrottle
Hook to limit function execution frequency. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useThrottle)

## Usage

\`\`\`tsx
export const UseThrottle = () => {
	const [state, setState] = useState(0);
	const [fn, cancel, immediate] = useThrottle(
		useCallback(() => new Promise(res => setTimeout(() => res(setState(t => t + 1)), 3000)), []),
		{
			waitFn: true
		}
	);


	return (<div>
		<p>State is: {state}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<button onClick={fn}>Throttled increment</button>
			<button onClick={immediate}>Immediatly increment</button>
			<button onClick={cancel}>Cancel</button>
		</div>
	</div>);
}
\`\`\`

> The component has:
> - A _state_ internal with _0_ value.
> - A _useThrottle_ hook that receives an async function that increments _state_ variable after 3 seconds and _waitFn_ true as option. It returns the debounced function _fn_, the function to cancel throttle limitation _cancel_ and the function _immediate_ to immediately execute function. Each function is executed by onClick event of three button elements.


## API

\`\`\`tsx
useThrottle<T extends unknown[]>(fn: (...args: T) => void | Promise<void> , opts: { delay?: number, waitFn?: boolean }): [(...args: T) => void, () => void, (...args: T) => void]
\`\`\`


> ### Params
>
> - __fn__: _T extends (...args: unknown[]) => void_  
The function to handle.
> - __opts__: _Object_  
options for throttle behaviors.
> - __opts.delay?__: _number_  
time in milliseconds to limit next function execution.
> - __opts.waitFn?__: _boolean_  
if true, next function execution taking place when current has finished.
>



> ### Returns
>
> __- array with throttled function, cancel function to allow other execution and immediate function to execute function immediately.__
> - __Array__:  
>     - _(...args: unknown[]) => void_  
>     - _()=>void_  
>     - _(...args: unknown[]) => void_  
>`,h9=`# useTimeout
Hook to handle setTimeout timer function with the possibility to clear and promisify execution. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useTimeout)

## Usage

\`\`\`tsx
export const UseTimeout = () => {
	const [count, setCount] = useState(0);
	const [delay, setDelay] = useState(1000);
	const [apply, clear, applyPromisy] = useTimeout(
		() => setCount(c => c + 1),
		delay
	)

	return (
		<div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<p>Count: {count}</p>
			<p>Delay: {delay}</p>
			<div style={{ display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
				<button onClick={apply}>Increment count</button>
				<button onClick={clear}>Clear Timeout</button>
				<button onClick={async()=>applyPromisy().then(()=>setDelay(1000))}>Increment promisy</button>
				<button onClick={() => setDelay(d => d + 1000)}>Increment delay</button>
				<button onClick={() => setDelay(() => 1000)}>Clear delay</button>
			</div>
		</div>
	);
}
\`\`\`

> The component has:
> - A _count_ state initialized to _0_.
> - A _delay_ state initialized to _1000_.
> - A _useTimeout_ that receives a _callback_ to update _count_ by 1 and _delay_ as time to delay execution.
> - Two p tag to diplay current _count_ and _delay_ variable.
> - A button to execute _apply_ function returned from _useTimeout_.
> - A button to increment by 1000 _delay_ state.
> - A button to restore _delay_ state to 1000.
> - A button to execute _clear_ function returned from _useTimeout_.
> - A button to execute _applyPromisy_ function returned from _useTimeout_ tha after _count_ state update, restore _delay_ state to 1000.


## API

\`\`\`tsx
useTimeout<TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay: number): [(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>]
\`\`\`


> ### Params
>
> - __callback__: _(...args: unknown[])=>void_  
Function to call when the timer elapses.
> - __delay__: _number_  
The number of milliseconds to wait before calling the \`callback\`.
>



> ### Returns
>
> __- array: first element is the function to call setTimeout; second element is the function to clearTimeout; thrid element promisify setTimeout.__
> - __Array__:  
>     - _(...args: TArgs) => void_  
>     - _() => void_  
>     - _(...args: TArgs) => Promise<void>_  
>`,m9=`# useTitle
Hook to handling app page title. It works _outside Component_ also and it returns array of two functions to read and write title. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useTitle)

## Usage

\`\`\`tsx
const previousTitle = useTitle()[0]();

export const UseTitle = () => {
	const [,setTitle] = useTitle("Title 1");

	useEffect(() => {
		const id = setTimeout(() => {
			setTitle("Title 2");
		}, 3000);
		return () => {
			clearTimeout(id);
			setTitle(previousTitle);
		}
	}, [setTitle]);
}
\`\`\`

> First, in a variable outside the component is kept track of the page title. The _useTitle_ hook is invoked in the component with the _title_ __Title 1__ parameter and the returned _setTitle_ function is used. After 3 seconds the title is changed with the _setTitle_ function to _title_ __Title 2__.
> 
> When the component is unmounted, the title saved in the variable outside the component is set as the title.


## API

\`\`\`tsx
useTitle(title?: string): [() => string, (title: string) => void]
\`\`\`


> ### Params
>
> - __title?__: _string_
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _() => string_  
>     - _(title: string) => void_  
>`,g9=`# useVibrate
Hook to use device vibration hardware. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useVibrate)

## Usage

\`\`\`tsx
export const UseVibrate = () => {
	const { isSupported, vibrate, cancel } = useVibrate();

	return <div>
		<p>Supported: {isSupported.toString()}</p>
		<button type="button" onClick={() => vibrate([200, 30, 200, 30, 200])}>Vibrate</button>
		<button type="button" onClick={cancel}>Cancel</button>
	</div>
}
\`\`\`

> The component uses _useVibrate_ hook to know if vibrate is supported and to activate/deactivate vibration with two buttons.


## API

\`\`\`tsx
useVibrate():{isSupported: boolean, vibrate: ((pattern: number | number[]) => void), cancel: ()=>void}
\`\`\`





> ### Returns
>
> __result__:  __Union of__:  
    - __Object__:  
        - __isSupported__ : _boolean_  
        - __vibrate__ : _((pattern: numbe_  
    - _number[]) => void), cancel: ()=>void}_  
> - _isSupported_: boolean to detect if vibration is supported or not.
> - _vibrate_: function to activate device vibration hardware.
> - _cancel_: function to stop vibration running.
>`,_9=`# useVideo
Hook to use an HTML video element. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useVideo)

## Usage

\`\`\`tsx
export const UseVideo = () => {
	const {MediaElement, state, controls: {play, pause}} = useVideo({ src: video, controls: true });

	return <div>
		{MediaElement}
		<p>Status: {state.paused ? "paused" : state.playing ? "playing" : "ready"}</p>
		<button onClick={play} disabled={state.playing}>Play</button>
		<button onClick={pause} disabled={state.paused}>Pause</button>
	</div>
}

\`\`\`

> The component use _useVideo_ hook to use a video track.


## API

\`\`\`tsx
useVideocreateHTMLMediaHook<HTMLVideoElement>("video");
\`\`\`


> ### Params
>
> - __param__: _UseVideoProps_  
Media HTML Attributes of an html video element.
>



> ### Returns
>
> __result__:  _UseVideoResult_  
> Object with these properties:
> - __state__: object with current video properties:
> 		- _buffered_: array of objects, with __start__ and __end__ properties, or null. It indicates the ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed.
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> - __controls__: object with current video properties:
> 		- _play_: function to set video.
> 		- _pause_: function to pause video.
> 		- _mute_: function to mute video.
> 		- _unmute_: function to unmute video.
> 		- _playbackRate_: function to set video playbackRate.
> 		- _volume_: function to set video volume.
> 		- _seek_: function to seek to the given time with low precision.
> - MediaElement: HTMLVideoElement to render.
> - ref: ref to HTMLVideoElement.
>`,v9=`# useVisible
Hook to know if an element is visible and optionally the visible area ration of the element. [See demo](https://react-tools.ndria.dev/#/hooks/events/useVisible)

## Usage

\`\`\`tsx
export const UseVisible = () => {
	const [cbRef, isVisible, ratio] = useVisible({
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
		withRatio: true
	});
	return (
		<div>
			<div style={{ marginTop: 16, color: ratio === 1 ? '#98c379' : ratio === 0 ? '#e46962' : '#d2c04c' }}>
				<p>isVisible: {isVisible ? 'visible' : 'hidden'}</p>
				<p>ratio: {ratio}</p>
			</div>
			<div style={{ margin: 'auto', width: 300, height: 300, overflow: 'scroll', border: '1px solid' }}>
				<p>scrollable div</p>
				<div style={{ height: 800 }}>
					<div
						ref={cbRef}
						style={{
							border: '1px solid',
							margin: '320px auto 0px',
							height: 100,
							width: 100,
							textAlign: 'center',
						}}
					>
						bordered div
					</div>
				</div>
			</div>
		</div>
	);
}
\`\`\`

> The component renders a scrollable div with inside a bordered div element to which is attached __cbRef_ refCallback returned from _useVisible_ hook. Component displays the bordered div __visibility__ and __ratio__ that change when parent div is scrolled.


## API

\`\`\`tsx
useVisible<T extends Element>(opts?: IntersectionObserverInit & { withRatio?: boolean }): [RefCallback<T>, boolean] | [RefCallback<T>, boolean, number]
\`\`\`


> ### Params
>
> - __opts__: _{root?: Element|Document|null, rootMargin?: string, threshold?: number|number[], withRatio?: boolean}_  
object to set options to observation.
>



> ### Returns
>
> __result__: callback for ref element attribute to observe, a boolean to known if element is visible or not and eventually the element ratio.
> - __Union of__:  
>     - __Array__:  
>         - _RefCallback<T>_  
>         - _boolean_  
>     - __Array__:  
>         - _RefCallback<T>_  
>         - _boolean_  
>         - _number_  
>`,b9=`# useWebSocket
Hook for creating and managing a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) connection to a server, as well as for sending and receiving data on the connection. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useWebSocket)

## API

\`\`\`tsx
useWebSocket<T = string | ArrayBuffer | Blob> ({ url, protocols, binaryType, onOpen, onMessage, onError, onClose, immediateConnection, bufferingData, autoReconnect }: UseWebSocketProps): UseWebSocketResult<T>
\`\`\`


> ### Params
>
> - __param__: _UseWebSocketProps_  
object
> - __param.url?__: _UseWebSocketProps_  
the URL to which to connect; this should be the URL to which the WebSocket server will respond.
> - __param.protocols?__: _UseWebSocketProps_  
either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols.
> - __param.binaryType?__: _UseWebSocketProps_  
the type of binary data being received over the WebSocket connection.
> - __param.immediateConnection?__: _UseWebSocketProps_  
boolean to open webSocket connection immediatly.
> - __param.onOpen?__: _UseWebSocketProps_  
function that will be executed when webSocket connection has been opened.
> - __param.onMessage?__: _UseWebSocketProps_  
function that will be executed when message arrived from webSocket.
> - __param.onError?__: _UseWebSocketProps_  
function that will be executed when an error occurred.
> - __param.onClose?__: _UseWebSocketProps_  
function that will be executed when webSocket connection has been closed.
> - __param.bufferingData?__: _UseWebSocketProps_  
boolean that indicates to use a buffer to keep data sent if connection aren't already opened.
> - __param.autoReconnect?__: _UseWebSocketProps_  
boolean or object with properties __retries__, __delay__ and __onFailed__. If an error closes connection and its value isn't false or undefined, a connection will be restored every _delay_ milliseconds for __retries__ time: if connection won't be restored __onFailed__ function will be executed if it is present.
>



> ### Returns
>
> __result__:  _UseWebSocketResult_  
> Object with these properties:
> - __status__: string rapresenting webSocket state connection: __READY__ __CONNECTING__ __OPENED__ or __CLOSED__.
> - __data__: last data value arrived from webSocket.
> - __open__: function that opens connection with optional _url_ param .
> - __send__: function that sends data by webSocket.
> - __close__: function that closes connection with optional _code_ and _reason_ params.
>`,y9=`# useWebWorker
Hook to use [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), handling registration and communication. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useWebWorker)

## Usage

\`\`\`tsx
export const UseWebWorker = () => {
	const [ts, setTs] = useState(Date.now());
	const [mess, setMess] = useState<string>("");

	const { send } = useWebWorker({
		url: new URL('./worker.ts', import.meta.url),
		onMessage: useCallback((e: MessageEvent) => {
			setMess(e.data.res.join(","))
		}, [])
	});

	useEffect(() => {
		const id = setInterval(() => setTs(Date.now()), 1);
		return () => clearInterval(id);
	}, []);

	return <div>
		<p>Timestamp: {ts}</p>
		<p>Result: {mess ? mess : ""}</p>
		<button
			onClick={() => {
				setMess("Pending...");
				send("heavyTask");
			}}
		>
			START
		</button>
	</div>
}
\`\`\`

> The component uses _useWebWorker_ hook to execute an heavy function in a worker to avoid burdening the main thread.


## API

\`\`\`tsx
useWebWorker({ url, options, onMessage, onError, onMessageError }: UseWebWorkerProps): UseWebWorkerResult
\`\`\`


> ### Params
>
> - __param__: _UseWebWorkerProps_  
object
> - __param.url?__: _string|URL_  
A string representing the URL of the script the worker will execute. It must obey the same-origin policy.
> - __param.options?__: _WorkerOptions_  
An object containing option properties that can be set when creating the object instance.
> - __param.onMessage?__: _(e: MessageEvent)=>void_  
function that will be executed when a message occurred.
> - __param.onMessageError?__: _(e: MessageEvent)=>void_  
function that will be executed when a messageError occurred.
> - __param.onError?__: _(e: Event)=>void_  
function that will be executed when an error occurred.
>



> ### Returns
>
> __result__:  _UseWebWorkerResult_  
> Object with these properties:
> - __send__: function to send a message to worker.
> - __terminate__: function to terminate worker.
>`,k9=`# useWebWorkerFn
Hook to run expensive functions using a Web Worker without blocking the UI handling execution as Promise. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useWebWorkerFn)

## Usage

\`\`\`tsx
export const UseWebWorkerFn = () => {
	const [ts, setTs] = useState(Date.now());
	const [mess, setMess] = useState<string>("");
	const heavyTask = useCallback(() => {
		const numbers: number[] = Array(5_000_000).fill(true).map(() => Math.random() * 11)
		return numbers.slice(0, 5).map(el => Math.floor(el))
	}, []);
	const execute = useWebWorkerFn(heavyTask);

	useEffect(() => {
		const id = setInterval(() => setTs(Date.now()), 1);
		return () => clearInterval(id);
	}, []);

	return <div>
		<p>Timestamp: {ts}</p>
		<p>Result: {mess ? mess : ""}</p>
		<button
			onClick={() => {
				setMess("Pending...");
				setMess(heavyTask().join(","))
			}}
		>
			Start in Main Thread
		</button>
		<button
			onClick={() => {
				setMess("Pending...");
				execute().then(res => setMess(res.join(",")));
			}}
		>
			Start in Web Worker
		</button>
	</div>
}
\`\`\`

> The component uses _useWebWorkerFn_ hook to execute an expensive function in a worker. Same function can be executed in main thread. Try to execute it to see the differences.


## API

\`\`\`tsx
useWebWorkerFn<T extends (...args: unknown[]) => unknown>(fn: UseWebWorkerFnProps<T>["fn"], deps?: UseWebWorkerFnProps<T>["deps"]): UseWebWorkerFnResult<T>
\`\`\`


> ### Params
>
> - __fn__: _UseWebWorkerFnProps["fn"]_  
Expensive function to be executed in worker.
> - __deps?__: _UseWebWorkerFnProps["deps"]_  
An array that contains the external dependencies needed to run the worker.
>



> ### Returns
>
> __execute__: function to execute expansive function: return a promise.
> - _UseWebWorkerFnResult_  
>`,w9="# Utility Types\n\nTypescript utility types for specified use cases.\n\n## NestedKeyOf\n\nUtility type that constructs a type by picking all properties and nested proprerties from __`T`__ in form _`property.nestedProprerty`_.\n```tsx\ntype NestedKeyOf<T extends Record<string, unknown>>\n```\n\n## ErrorModel\n\nUtility type that constructs an object from __`T`__ and whose property values are _`boolean`_.\n```tsx\ntype ErrorModel<T extends object>\n```\n\n## SelectivePartial\n\nUtility type that works like __Partial__ but allows to specify which properties set to optional.\n```tsx\ntype SelectivePartial<T extends object, E extends keyof T>\n```\n\n## RecursivePartial\n\nUtility type that works like __Partial__ but set nested properties to optional also.\n```tsx\ntype RecursivePartial<T extends object>\n```\n\n## Optional\n\nUtility type that constructs a type that is __`T`__ or __`E`__, if specified otherwise __`null`__.\n```tsx\ntype Optional<T = unknown, E = null>\n```\n\n## DependencyListTyped\n\nUtility type that works like __DependencyList__ react type but it can be specified dependencies list element types.\n```tsx\ntype DependencyListTyped<T = unknown>\n```\n\n## Union\n\nUtility type that given an array constructs union type from array elements type.\n```tsx\ntype Union<T extends unknown[]>\n```\n\n## ExtractTail\n\nUtility type that given an array extracts a new array with all elements from array expect first.\n```tsx\ntype ExtractTail<T extends unknown[]>\n```\n\n## ExtractMiddle\n\nUtility type that given an array extracts a new array with all elements from array expect first and last.\n```tsx\ntype ExtractMiddle<T extends unknown[]>\n```\n\n## ExtractHead\n\nUtility type that given an array extracts a new array with all elements from array expect last.\n```tsx\ntype ExtractHead<T extends unknown[]>\n```\n\n## PartialRecord\n\nUtility type that constructs a record with all properties set to optional.\n```tsx\ntype PartialRecord<K extends keyof any, T>\n```\n\n## ArrayMinLength1\n\nUtility type that constructs an array of __`T`__ with one element at least.\n```tsx\ntype ArrayMinLength1<T>\n```\n\n## LanguageBCP47Tags\n\nUtility type for Language BCP-47 tags.\n```tsx\ntype LanguageBCP47Tags\n```\n\n## TypedArray\n\nUtility type for __`Typed Arrays`__.\n```tsx\ntype TypedArray\n```\n\n## KeyboardEventCode\n\nUtility type for __`Keyboard Event Code`__\n```tsx\ntype KeyboardEventCode\n```\n\n",x9="react-tools-demo",S9="1.10.2",C9="module",E9={generator:"node scripts/generateMarkdown.js && node scripts/generateRouter.js && node scripts/generateMainLayout.js",dev:"pnpm --filter react-tools-demo run generator && vite","dev:no-docs":"node scripts/generateRouter.js no-docs && node scripts/generateMainLayout.js && vite",build:"pnpm --filter react-tools-demo run generator && tsc && vite build && rm -rf ../../docs && mv ./dist ./../../docs",lint:"eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite build && vite preview"},T9={react:"^18.2.0","react-dom":"^18.2.0","react-transition-group":"^4.4.5"},A9={"@types/react":"^18.2.55","@types/react-dom":"^18.2.19","@types/react-syntax-highlighter":"^15.5.11","@types/react-transition-group":"^4.4.10","@typescript-eslint/eslint-plugin":"^7.12.0","@typescript-eslint/parser":"^7.12.0","@vitejs/plugin-react":"^4.2.1",eslint:"^8.56.0","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-react-refresh":"^0.4.5","react-markdown":"^9.0.1","react-router-dom":"^6.22.0","react-syntax-highlighter":"^15.5.0","remark-gfm":"^4.0.0",typescript:"^5.4.5",vite:"^5.0.12","vite-plugin-mkcert":"^1.17.3"},P9={name:x9,private:!0,version:S9,type:C9,scripts:E9,dependencies:T9,devDependencies:A9};function j9(){return p.jsxs("div",{className:"home-container",children:[p.jsx(D,{to:"https://github.com/nDriaDev/react-tools",children:p.jsx("img",{src:fb,alt:"react",className:"logo"})}),p.jsx("h1",{className:"title",style:{marginBottom:0},translate:"no",children:"React-Tools"}),p.jsx("h2",{className:"h3 version",children:P9.version}),p.jsx("h3",{className:"title h2",style:{textAlign:"center"},children:"A collection of Hooks, Components, Utilities and Types for React"}),p.jsx("div",{className:"npm-container",children:p.jsxs("p",{className:"npm-command",translate:"no",children:[p.jsx("code",{children:"npm i @ndriadev/react-tools"}),p.jsx("button",{className:"npm-copy",type:"button","aria-label":"Copy install command line",onClick:()=>(navigator.clipboard.writeText("npm i @ndriadev/react-tools"),document.activeElement.blur()),children:p.jsx("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"copy",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:p.jsx("path",{d:"M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"})})})]})}),p.jsx(D,{className:"get-started",onClick:()=>{var e;return(e=document.querySelector(".container"))==null?void 0:e.scrollTo(0,0)},to:"/hooks",children:"GET STARTED"}),p.jsxs("div",{className:"features-container",children:[p.jsxs("div",{className:"cell cell1",children:[p.jsx("div",{className:"title",translate:"no",children:"Typescript"}),p.jsx("div",{className:"body",children:"Written in typescript for type safety."})]}),p.jsxs("div",{className:"cell cell2",children:[p.jsx("div",{className:"title",translate:"no",children:"Tree Shakable"}),p.jsx("div",{className:"body",children:"Import only that you use. Indivual import cost is tiny."})]}),p.jsxs("div",{className:"cell cell3",children:[p.jsx("div",{className:"title",translate:"no",children:"Demos"}),p.jsx("div",{className:"body",children:"All implementations have a demo that allow you to try them."})]}),p.jsxs("div",{className:"footer",children:[p.jsx(D,{to:"https://github.com/nDriaDev/react-tools",children:p.jsx("img",{src:pb,className:"img",alt:"github"})}),p.jsx(D,{to:"https://ndria.dev",target:"_blank",children:"nDriaDev"})]})]})]})}function R9(){const[e]=dx();return e.has("route")?p.jsx(pn,{to:`/${e.get("route")}`,replace:!0}):p.jsx(j9,{})}const M9=b.lazy(()=>N(()=>import("./ErrorBoundary-a5IwiVy1.js"),__vite__mapDeps([0,1])).then(e=>({default:"default"in e?e.default:e.ErrorBoundary}))),L9=b.lazy(()=>N(()=>import("./For-5mNkdc_Z.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.For}))),D9=b.lazy(()=>N(()=>import("./LazyComponent-PlIid0R_.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.LazyComponent}))),O9=b.lazy(()=>N(()=>import("./Show-2JMcnCSi.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.Show}))),z9=b.lazy(()=>N(()=>import("./SwitchCase-dD2mbNZs.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.SwitchCase}))),I9=b.lazy(()=>N(()=>import("./UseActiveElement-t4ceUBmS.js"),__vite__mapDeps([2,3])).then(e=>({default:"default"in e?e.default:e.UseActiveElement}))),F9=b.lazy(()=>N(()=>import("./UseAnimation-RQx50MbJ.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseAnimation}))),U9=b.lazy(()=>N(()=>import("./UseAudio-9BaxchUq.js"),__vite__mapDeps([4,5])).then(e=>({default:"default"in e?e.default:e.UseAudio}))),N9=b.lazy(()=>N(()=>import("./UseBattery-q40NxBdc.js"),__vite__mapDeps([6,3])).then(e=>({default:"default"in e?e.default:e.UseBattery}))),H9=b.lazy(()=>N(()=>import("./UseBluetooth-yBY6tm6S.js"),__vite__mapDeps([7,3])).then(e=>({default:"default"in e?e.default:e.UseBluetooth}))),W9=b.lazy(()=>N(()=>import("./UseBroadcastChannel-8VuNNoXT.js"),__vite__mapDeps([8,3])).then(e=>({default:"default"in e?e.default:e.UseBroadcastChannel}))),B9=b.lazy(()=>N(()=>import("./UseClipboard-NcLNHGFg.js"),__vite__mapDeps([9,3])).then(e=>({default:"default"in e?e.default:e.UseClipboard}))),V9=b.lazy(()=>N(()=>import("./UseColorScheme-oibjXnPy.js"),__vite__mapDeps([10,3])).then(e=>({default:"default"in e?e.default:e.UseColorScheme}))),$9=b.lazy(()=>N(()=>import("./UseDebounce-zgDH3IOi.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseDebounce}))),q9=b.lazy(()=>N(()=>import("./UseDeviceMotion-aNTofvcc.js"),__vite__mapDeps([11,3])).then(e=>({default:"default"in e?e.default:e.UseDeviceMotion}))),G9=b.lazy(()=>N(()=>import("./UseDeviceOrientation-vhBmlpFP.js"),__vite__mapDeps([12,3])).then(e=>({default:"default"in e?e.default:e.UseDeviceOrientation}))),K9=b.lazy(()=>N(()=>import("./UseDialogBox-FJEV6PFx.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseDialogBox}))),Q9=b.lazy(()=>N(()=>import("./UseDisplayMedia-X3C4bFS3.js"),__vite__mapDeps([13,14,15,3])).then(e=>({default:"default"in e?e.default:e.UseDisplayMedia}))),Y9=b.lazy(()=>N(()=>import("./UseDocumentPIP-4Ao72zbI.js"),__vite__mapDeps([16,17,15])).then(e=>({default:"default"in e?e.default:e.UseDocumentPIP}))),J9=b.lazy(()=>N(()=>import("./UseEyeDropper-DnGD6wED.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseEyeDropper}))),X9=b.lazy(()=>N(()=>import("./UseFPS-waD1vZv_.js"),__vite__mapDeps([18,19,15])).then(e=>({default:"default"in e?e.default:e.UseFPS}))),Z9=b.lazy(()=>N(()=>import("./UseFetch-bVZ3RGUN.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseFetch}))),eD=b.lazy(()=>N(()=>import("./UseFullscreen-wHfcpmEe.js"),__vite__mapDeps([20,3])).then(e=>({default:"default"in e?e.default:e.UseFullscreen}))),tD=b.lazy(()=>N(()=>import("./UseGeolocation-Flv-9YgA.js"),__vite__mapDeps([21,3])).then(e=>({default:"default"in e?e.default:e.UseGeolocation}))),nD=b.lazy(()=>N(()=>import("./UseIdleCallback-gNHq1Ak_.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseIdleCallback}))),oD=b.lazy(()=>N(()=>import("./UseInterval-VLrTr59d.js"),__vite__mapDeps([22,23])).then(e=>({default:"default"in e?e.default:e.UseInterval}))),rD=b.lazy(()=>N(()=>import("./UseLock-pTYmsLNI.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseLock}))),aD=b.lazy(()=>N(()=>import("./UseMediaDevices-S7tBZtto.js"),__vite__mapDeps([24,14,15])).then(e=>({default:"default"in e?e.default:e.UseMediaDevices}))),iD=b.lazy(()=>N(()=>import("./UseMediaQuery-PEcuS-qa.js"),__vite__mapDeps([25,26,3])).then(e=>({default:"default"in e?e.default:e.UseMediaQuery}))),lD=b.lazy(()=>N(()=>import("./UsePIP-fNfH1-M4.js"),__vite__mapDeps([27,28])).then(e=>({default:"default"in e?e.default:e.UsePIP}))),sD=b.lazy(()=>N(()=>import("./UsePermission-p0DM-rFN.js"),__vite__mapDeps([29,3])).then(e=>({default:"default"in e?e.default:e.UsePermission}))),cD=b.lazy(()=>N(()=>import("./UsePopover-WL5PjvTK.js"),__vite__mapDeps([30,31,32,3])).then(e=>({default:"default"in e?e.default:e.UsePopover}))),uD=b.lazy(()=>N(()=>import("./UsePromiseSuspensible-l-ymPIVY.js"),__vite__mapDeps([33,1,15,34])).then(e=>({default:"default"in e?e.default:e.UsePromiseSuspensible}))),dD=b.lazy(()=>N(()=>import("./UsePublishSubscribe-n5ybVQyt.js"),__vite__mapDeps([35,36])).then(e=>({default:"default"in e?e.default:e.UsePublishSubscribe}))),pD=b.lazy(()=>N(()=>import("./UseRaf-UKkb4G0U.js"),__vite__mapDeps([37,19,38,15])).then(e=>({default:"default"in e?e.default:e.UseRaf}))),fD=b.lazy(()=>N(()=>import("./UseReducedMotion-mgiRJmBi.js"),__vite__mapDeps([39,40,26,3])).then(e=>({default:"default"in e?e.default:e.UseReducedMotion}))),hD=b.lazy(()=>N(()=>import("./UseRemotePlayback-pjp4A9G1.js"),__vite__mapDeps([41,28,3])).then(e=>({default:"default"in e?e.default:e.UseRemotePlayback}))),mD=b.lazy(()=>N(()=>import("./UseScreenWakeLock-0Qo4Gqrx.js"),__vite__mapDeps([42,3])).then(e=>({default:"default"in e?e.default:e.UseScreenWakeLock}))),gD=b.lazy(()=>N(()=>import("./UseScript-ClZ3lmFJ.js"),__vite__mapDeps([43,44,15,3])).then(e=>({default:"default"in e?e.default:e.UseScript}))),_D=b.lazy(()=>N(()=>import("./UseShare-5zCK0asc.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseShare}))),vD=b.lazy(()=>N(()=>import("./UseSpeechRecognition-8depN3uq.js"),__vite__mapDeps([45,46,3,15])).then(e=>({default:"default"in e?e.default:e.UseSpeechRecognition}))),bD=b.lazy(()=>N(()=>import("./UseSpeechSynthesis-mOpEjeHE.js"),__vite__mapDeps([47,3])).then(e=>({default:"default"in e?e.default:e.UseSpeechSynthesis}))),yD=b.lazy(()=>N(()=>import("./UseTextSelection-GMR0jumE.js"),__vite__mapDeps([48,3,34])).then(e=>({default:"default"in e?e.default:e.UseTextSelection}))),kD=b.lazy(()=>N(()=>import("./UseThrottle-EosJvTFA.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseThrottle}))),wD=b.lazy(()=>N(()=>import("./UseTimeout-ztowQDQ-.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseTimeout}))),xD=b.lazy(()=>N(()=>import("./UseTitle-3ShT4y9x.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseTitle}))),SD=b.lazy(()=>N(()=>import("./UseVibrate-eT1f6LSt.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseVibrate}))),CD=b.lazy(()=>N(()=>import("./UseVideo-CqDtvDsd.js"),__vite__mapDeps([49,28,5])).then(e=>({default:"default"in e?e.default:e.UseVideo}))),ED=b.lazy(()=>N(()=>import("./UseWebWorker-bOVqj3vz.js"),__vite__mapDeps([50,15])).then(e=>({default:"default"in e?e.default:e.UseWebWorker}))),TD=b.lazy(()=>N(()=>import("./UseWebWorkerFn-VoTMZd7P.js"),__vite__mapDeps([51,15])).then(e=>({default:"default"in e?e.default:e.UseWebWorkerFn}))),AD=b.lazy(()=>N(()=>import("./UseBeforeUnload-6umoMwip.js"),__vite__mapDeps([52,53,54])).then(e=>({default:"default"in e?e.default:e.UseBeforeUnload}))),PD=b.lazy(()=>N(()=>import("./UseClickOutside-acvxHO7y.js"),__vite__mapDeps([55,53,54])).then(e=>({default:"default"in e?e.default:e.UseClickOutside}))),jD=b.lazy(()=>N(()=>import("./UseContextMenu-0Gk7UeAo.js"),__vite__mapDeps([56,53,54])).then(e=>({default:"default"in e?e.default:e.UseContextMenu}))),RD=b.lazy(()=>N(()=>import("./UseDocumentVisibility-HMMpCJPD.js"),__vite__mapDeps([57,3])).then(e=>({default:"default"in e?e.default:e.UseDocumentVisibility}))),MD=b.lazy(()=>N(()=>import("./UseDoubleClick-VH2B4E1t.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseDoubleClick}))),LD=b.lazy(()=>N(()=>import("./UseEventDispatcher-HZF3dJTj.js"),__vite__mapDeps([58,54,53])).then(e=>({default:"default"in e?e.default:e.UseEventDispatcher}))),DD=b.lazy(()=>N(()=>import("./UseEventListener-uH8Xn9aS.js"),__vite__mapDeps([59,53,54])).then(e=>({default:"default"in e?e.default:e.UseEventListener}))),OD=b.lazy(()=>N(()=>import("./UseEvents-flGuZTJz.js"),__vite__mapDeps([60,61])).then(e=>({default:"default"in e?e.default:e.UseEvents}))),zD=b.lazy(()=>N(()=>import("./UseHotKeys-1jW8UbwP.js"),__vite__mapDeps([62,53,54])).then(e=>({default:"default"in e?e.default:e.UseHotKeys}))),ID=b.lazy(()=>N(()=>import("./UseHover-QqS13tv0.js"),__vite__mapDeps([63,3])).then(e=>({default:"default"in e?e.default:e.UseHover}))),FD=b.lazy(()=>N(()=>import("./UseInfiniteScroll-LSnp5dVN.js"),__vite__mapDeps([64,3])).then(e=>({default:"default"in e?e.default:e.UseInfiniteScroll}))),UD=b.lazy(()=>N(()=>import("./UseIntersectionObserver-_nW3QuaG.js"),__vite__mapDeps([65,15])).then(e=>({default:"default"in e?e.default:e.UseIntersectionObserver}))),ND=b.lazy(()=>N(()=>import("./UseIsOnline-epgYv72a.js"),__vite__mapDeps([66,67,3])).then(e=>({default:"default"in e?e.default:e.UseIsOnline}))),HD=b.lazy(()=>N(()=>import("./UseLongPress-jsdYNXRy.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseLongPress}))),WD=b.lazy(()=>N(()=>import("./UseMeasure-_IRSOQEO.js"),__vite__mapDeps([68,38,15])).then(e=>({default:"default"in e?e.default:e.UseMeasure}))),BD=b.lazy(()=>N(()=>import("./UseMouse-mIvtIbcA.js"),__vite__mapDeps([69,3])).then(e=>({default:"default"in e?e.default:e.UseMouse}))),VD=b.lazy(()=>N(()=>import("./UseMutationObserver-DI2Tkcd1.js"),__vite__mapDeps([70,15])).then(e=>({default:"default"in e?e.default:e.UseMutationObserver}))),$D=b.lazy(()=>N(()=>import("./UseNetwork-FCC4vhX7.js"),__vite__mapDeps([71,67,3])).then(e=>({default:"default"in e?e.default:e.UseNetwork}))),qD=b.lazy(()=>N(()=>import("./UsePerformAction-FQ19guzZ.js"),__vite__mapDeps([72,46,44,15,3])).then(e=>({default:"default"in e?e.default:e.UsePerformAction}))),GD=b.lazy(()=>N(()=>import("./UsePinchZoom-FFoVgK9k.js"),__vite__mapDeps([73,53,54])).then(e=>({default:"default"in e?e.default:e.UsePinchZoom}))),KD=b.lazy(()=>N(()=>import("./UsePointerLock-SskOx8nZ.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UsePointerLock}))),QD=b.lazy(()=>N(()=>import("./UseResizeObserver-veskilwz.js"),__vite__mapDeps([74,38,15])).then(e=>({default:"default"in e?e.default:e.UseResizeObserver}))),YD=b.lazy(()=>N(()=>import("./UseResponsive-jRWpk0OQ.js"),__vite__mapDeps([75,3])).then(e=>({default:"default"in e?e.default:e.UseResponsive}))),JD=b.lazy(()=>N(()=>import("./UseScreen-605AqHWd.js"),__vite__mapDeps([76,3])).then(e=>({default:"default"in e?e.default:e.UseScreen}))),XD=b.lazy(()=>N(()=>import("./UseScrollIntoView-1ZKkwGv8.js"),__vite__mapDeps([77,53,54,40,26,3])).then(e=>({default:"default"in e?e.default:e.UseScrollIntoView}))),ZD=b.lazy(()=>N(()=>import("./UseSwipe-KFDeV_zT.js"),__vite__mapDeps([78,53,54])).then(e=>({default:"default"in e?e.default:e.UseSwipe}))),eO=b.lazy(()=>N(()=>import("./UseVisible-zICedEB4.js"),__vite__mapDeps([79,15,3])).then(e=>({default:"default"in e?e.default:e.UseVisible}))),tO=b.lazy(()=>N(()=>import("./UseEffectCompare-xuCK3rcA.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseEffectCompare}))),nO=b.lazy(()=>N(()=>import("./UseEffectDeepCompare-IY3LJJ79.js"),__vite__mapDeps([80,34])).then(e=>({default:"default"in e?e.default:e.UseEffectDeepCompare}))),oO=b.lazy(()=>N(()=>import("./UseEffectOnce-PrLsEBJb.js"),__vite__mapDeps([81,15])).then(e=>({default:"default"in e?e.default:e.UseEffectOnce}))),rO=b.lazy(()=>N(()=>import("./UseIsMounted-ADopCD30.js"),__vite__mapDeps([82,15])).then(e=>({default:"default"in e?e.default:e.UseIsMounted}))),aO=b.lazy(()=>N(()=>import("./UseLogger-uHqPbRTg.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseLogger}))),iO=b.lazy(()=>N(()=>import("./UseRerender-pgFkXSwT.js"),__vite__mapDeps([83,17])).then(e=>({default:"default"in e?e.default:e.UseRerender}))),lO=b.lazy(()=>N(()=>import("./UseCallbackCompare-LFLORF0W.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseCallbackCompare}))),sO=b.lazy(()=>N(()=>import("./UseCallbackDeepCompare-0E8U9KBK.js"),__vite__mapDeps([84,34])).then(e=>({default:"default"in e?e.default:e.UseCallbackDeepCompare}))),cO=b.lazy(()=>N(()=>import("./UseLazyRef-oNVjNWI2.js"),__vite__mapDeps([85,17,23,31])).then(e=>({default:"default"in e?e.default:e.UseLazyRef}))),uO=b.lazy(()=>N(()=>import("./UseMemoCompare-E6S7qGJM.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseMemoCompare}))),dO=b.lazy(()=>N(()=>import("./UseMemoDeepCompare-Zgf9pcgW.js"),__vite__mapDeps([86,34])).then(e=>({default:"default"in e?e.default:e.UseMemoDeepCompare}))),pO=b.lazy(()=>N(()=>import("./UseMemoizedFn-iZJrQMTj.js"),__vite__mapDeps([87,54])).then(e=>({default:"default"in e?e.default:e.UseMemoizedFn}))),fO=b.lazy(()=>N(()=>import("./UseMergedRef-I9HpgYaS.js"),__vite__mapDeps([88,38,15,32])).then(e=>({default:"default"in e?e.default:e.UseMergedRef}))),hO=b.lazy(()=>N(()=>import("./CreatePubSubStore-ulLEdZex.js"),__vite__mapDeps([89,3,36,31,34])).then(e=>({default:"default"in e?e.default:e.CreatePubSubStore}))),mO=b.lazy(()=>N(()=>import("./UseArray-m-0xLc9Z.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseArray}))),gO=b.lazy(()=>N(()=>import("./UseDerivedState-ifuSJUho.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseDerivedState}))),_O=b.lazy(()=>N(()=>import("./UseLocalStorageState-CaG-u8QD.js"),__vite__mapDeps([90,61,54,15])).then(e=>({default:"default"in e?e.default:e.UseLocalStorageState}))),vO=b.lazy(()=>N(()=>import("./UseMap-50deOtfI.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseMap}))),bO=b.lazy(()=>N(()=>import("./UsePrevious-eXGn4TI4.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UsePrevious}))),yO=b.lazy(()=>N(()=>import("./UseProxyState-VBOwWutf.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseProxyState}))),kO=b.lazy(()=>N(()=>import("./UseSessionStorageState-TzKr2Fa9.js"),__vite__mapDeps([91,61,54])).then(e=>({default:"default"in e?e.default:e.UseSessionStorageState}))),wO=b.lazy(()=>N(()=>import("./UseSet-4b26vuvG.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseSet}))),xO=b.lazy(()=>N(()=>import("./UseStateGetReset-D2LGlOj9.js"),__vite__mapDeps([92,54])).then(e=>({default:"default"in e?e.default:e.UseStateGetReset}))),SO=b.lazy(()=>N(()=>import("./UseStateHistory-SA4hJeRK.js"),__vite__mapDeps([])).then(e=>({default:"default"in e?e.default:e.UseStateHistory}))),CO=b.lazy(()=>N(()=>import("./UseStateValidator-pVbq0ZqE.js"),__vite__mapDeps([93,54])).then(e=>({default:"default"in e?e.default:e.UseStateValidator})));function EO(){const e=J1([{path:"/",element:p.jsx(wx,{}),children:[{index:!0,element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(R9,{})})},{path:"hooks",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/hooks/state/createPubSubStore",replace:!0})},{path:"state",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/createPubSubStore",replace:!0})},{path:"createPubSubStore",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:aM,component:p.jsx(hO,{})})})},{path:"useArray",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:SM,component:p.jsx(mO,{})})})},{path:"useDerivedState",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:FM,component:p.jsx(gO,{})})})},{path:"useLocalStorageState",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:_L,component:p.jsx(_O,{})})})},{path:"useMap",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:kL,component:p.jsx(vO,{})})})},{path:"usePrevious",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:FL,component:p.jsx(bO,{})})})},{path:"useProxyState",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:NL,component:p.jsx(yO,{})})})},{path:"useReducerGetReset",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:VL})})},{path:"useReducerHistory",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:$L})})},{path:"useReducerHistoryGetter",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:qL})})},{path:"useSessionStorageState",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:t9,component:p.jsx(kO,{})})})},{path:"useSet",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:n9,component:p.jsx(wO,{})})})},{path:"useStateGetReset",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:i9,component:p.jsx(xO,{})})})},{path:"useStateHistory",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:l9,component:p.jsx(SO,{})})})},{path:"useStateHistoryGetter",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:s9})})},{path:"useStateValidator",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:c9,component:p.jsx(CO,{})})})},{path:"useSyncExternalStore",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:d9})})}]},{path:"lifecycle",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/useDeferredValue",replace:!0})},{path:"useDeferredValue",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:IM})})},{path:"useEffectCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:qM,component:p.jsx(tO,{})})})},{path:"useEffectDeepCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:GM,component:p.jsx(nO,{})})})},{path:"useEffectOnce",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:KM,component:p.jsx(oO,{})})})},{path:"useIsMounted",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:dL,component:p.jsx(rO,{})})})},{path:"useLayoutEffectCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:fL})})},{path:"useLayoutEffectDeepCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:hL})})},{path:"useLayoutEffectOnce",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:mL})})},{path:"useLogger",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:bL,component:p.jsx(aO,{})})})},{path:"useRerender",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:KL,component:p.jsx(iO,{})})})}]},{path:"performance",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/useCallbackCompare",replace:!0})},{path:"useCallbackCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:jM,component:p.jsx(lO,{})})})},{path:"useCallbackDeepCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:RM,component:p.jsx(sO,{})})})},{path:"useId",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:iL})})},{path:"useLazyRef",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:gL,component:p.jsx(cO,{})})})},{path:"useMemoCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:CL,component:p.jsx(uO,{})})})},{path:"useMemoDeepCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:EL,component:p.jsx(dO,{})})})},{path:"useMemoizedFn",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:TL,component:p.jsx(pO,{})})})},{path:"useMergedRef",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:AL,component:p.jsx(fO,{})})})}]},{path:"events",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/useBeforeUnload",replace:!0})},{path:"useBeforeUnload",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:TM,component:p.jsx(AD,{})})})},{path:"useClickOutside",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:MM,component:p.jsx(PD,{})})})},{path:"useContextMenu",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:OM,component:p.jsx(jD,{})})})},{path:"useDocumentVisibility",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:VM,component:p.jsx(RD,{})})})},{path:"useDoubleClick",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:$M,component:p.jsx(MD,{})})})},{path:"useEventDispatcher",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:QM,component:p.jsx(LD,{})})})},{path:"useEventListener",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:YM,component:p.jsx(DD,{})})})},{path:"useEvents",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:XM,component:p.jsx(OD,{})})})},{path:"useHotKeys",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:rL,component:p.jsx(zD,{})})})},{path:"useHover",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:aL,component:p.jsx(ID,{})})})},{path:"useInfiniteScroll",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:sL,component:p.jsx(FD,{})})})},{path:"useIntersectionObserver",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:cL,component:p.jsx(UD,{})})})},{path:"useIsOnline",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:pL,component:p.jsx(ND,{})})})},{path:"useLongPress",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:yL,component:p.jsx(HD,{})})})},{path:"useMeasure",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:wL,component:p.jsx(WD,{})})})},{path:"useMouse",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:PL,component:p.jsx(BD,{})})})},{path:"useMutationObserver",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:jL,component:p.jsx(VD,{})})})},{path:"useNetwork",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:RL,component:p.jsx($D,{})})})},{path:"usePerformAction",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:LL,component:p.jsx(qD,{})})})},{path:"usePinchZoom",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:OL,component:p.jsx(GD,{})})})},{path:"usePointerLock",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:zL,component:p.jsx(KD,{})})})},{path:"useResizeObserver",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:QL,component:p.jsx(QD,{})})})},{path:"useResponsive",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:YL,component:p.jsx(YD,{})})})},{path:"useScreen",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:JL,component:p.jsx(JD,{})})})},{path:"useScrollIntoView",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:e9,component:p.jsx(XD,{})})})},{path:"useSwipe",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:u9,component:p.jsx(ZD,{})})})},{path:"useVisible",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:v9,component:p.jsx(eO,{})})})}]},{path:"api-dom",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/useActiveElement",replace:!0})},{path:"useActiveElement",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:wM,component:p.jsx(I9,{})})})},{path:"useAnimation",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:xM,component:p.jsx(F9,{})})})},{path:"useAudio",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:CM,component:p.jsx(U9,{})})})},{path:"useBattery",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:EM,component:p.jsx(N9,{})})})},{path:"useBluetooth",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:AM,component:p.jsx(H9,{})})})},{path:"useBroadcastChannel",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:PM,component:p.jsx(W9,{})})})},{path:"useClipboard",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:LM,component:p.jsx(B9,{})})})},{path:"useColorScheme",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:DM,component:p.jsx(V9,{})})})},{path:"useDebounce",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:zM,component:p.jsx($9,{})})})},{path:"useDeviceMotion",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:UM,component:p.jsx(q9,{})})})},{path:"useDeviceOrientation",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:NM,component:p.jsx(G9,{})})})},{path:"useDialogBox",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:HM,component:p.jsx(K9,{})})})},{path:"useDisplayMedia",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:WM,component:p.jsx(Q9,{})})})},{path:"useDocumentPIP",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:BM,component:p.jsx(Y9,{})})})},{path:"useEventSource",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:JM})})},{path:"useEyeDropper",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:ZM,component:p.jsx(J9,{})})})},{path:"useFetch",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:tL,component:p.jsx(Z9,{})})})},{path:"useFPS",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:eL,component:p.jsx(X9,{})})})},{path:"useFullscreen",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:nL,component:p.jsx(eD,{})})})},{path:"useGeolocation",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:oL,component:p.jsx(tD,{})})})},{path:"useIdleCallback",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:lL,component:p.jsx(nD,{})})})},{path:"useInterval",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:uL,component:p.jsx(oD,{})})})},{path:"useLock",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:vL,component:p.jsx(rD,{})})})},{path:"useMediaDevices",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:xL,component:p.jsx(aD,{})})})},{path:"useMediaQuery",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:SL,component:p.jsx(iD,{})})})},{path:"usePermission",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:DL,component:p.jsx(sD,{})})})},{path:"usePIP",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:ML,component:p.jsx(lD,{})})})},{path:"usePopover",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:IL,component:p.jsx(cD,{})})})},{path:"usePromiseSuspensible",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:UL,component:p.jsx(uD,{})})})},{path:"usePublishSubscribe",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:HL,component:p.jsx(dD,{})})})},{path:"useRaf",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:WL,component:p.jsx(pD,{})})})},{path:"useReducedMotion",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:BL,component:p.jsx(fD,{})})})},{path:"useRemotePlayback",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:GL,component:p.jsx(hD,{})})})},{path:"useScreenWakeLock",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:XL,component:p.jsx(mD,{})})})},{path:"useScript",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:ZL,component:p.jsx(gD,{})})})},{path:"useShare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:o9,component:p.jsx(_D,{})})})},{path:"useSpeechRecognition",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:r9,component:p.jsx(vD,{})})})},{path:"useSpeechSynthesis",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:a9,component:p.jsx(bD,{})})})},{path:"useTextSelection",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:p9,component:p.jsx(yD,{})})})},{path:"useThrottle",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:f9,component:p.jsx(kD,{})})})},{path:"useTimeout",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:h9,component:p.jsx(wD,{})})})},{path:"useTitle",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:m9,component:p.jsx(xD,{})})})},{path:"useVibrate",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:g9,component:p.jsx(SD,{})})})},{path:"useVideo",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:_9,component:p.jsx(CD,{})})})},{path:"useWebSocket",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:b9})})},{path:"useWebWorker",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:y9,component:p.jsx(ED,{})})})},{path:"useWebWorkerFn",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:k9,component:p.jsx(TD,{})})})}]}]},{path:"components",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/components/ErrorBoundary",replace:!0})},{path:"ErrorBoundary",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:K5,component:p.jsx(M9,{})})})},{path:"For",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:Q5,component:p.jsx(L9,{})})})},{path:"ForMemoized",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:Y5})})},{path:"LazyComponent",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:J5,component:p.jsx(D9,{})})})},{path:"Show",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:X5,component:p.jsx(O9,{})})})},{path:"ShowMemoized",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:Z5})})},{path:"SwitchCase",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:eM,component:p.jsx(z9,{})})})},{path:"SwitchCaseMemoized",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:tM})})}]},{path:"utils",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/utils/alphanumericCompare",replace:!0})},{path:"alphanumericCompare",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:nM})})},{path:"changeStringCase",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:oM})})},{path:"clickElementOnKeydownEvent",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:rM})})},{path:"defaultSerializer",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:iM})})},{path:"detectBrowser",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:lM})})},{path:"getBase64",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:sM})})},{path:"getKeyObjectFromValue",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:cM})})},{path:"getObjectFromDottedString",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:uM})})},{path:"hotKeyHandler",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:dM})})},{path:"isAsync",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:pM})})},{path:"isClient",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:fM})})},{path:"isDeepEqual",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:hM})})},{path:"isMouseEvent",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:mM})})},{path:"isShallowEqual",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:gM})})},{path:"isTouchEvent",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:_M})})},{path:"lazy",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:vM})})},{path:"mergeObjects",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:bM})})},{path:"removePropertiesFromArrayObjects",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:yM})})},{path:"uniqueElementsArray",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:kM})})}]},{path:"types",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(En,{})}),children:[{index:!0,element:p.jsx(pn,{to:"/types/utilityTypes",replace:!0})},{path:"utilityTypes",element:p.jsx(b.Suspense,{fallback:p.jsx(M,{}),children:p.jsx(O,{markdown:w9})})}]}]}]);return p.jsx(ix,{router:e})}function TO(){return p.jsx(EO,{})}Kc.createRoot(document.getElementById("root")).render(p.jsx(b.StrictMode,{children:p.jsx(TO,{})}));export{N as _,ep as a,p as j,b as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ErrorBoundary-a5IwiVy1.js","assets/ErrorBoundary-3wx0bnRX.js","assets/UseActiveElement-t4ceUBmS.js","assets/useSyncExternalStore-qwlLTx5F.js","assets/UseAudio-9BaxchUq.js","assets/createHTMLMediaElement-ai51otSG.js","assets/UseBattery-q40NxBdc.js","assets/UseBluetooth-yBY6tm6S.js","assets/UseBroadcastChannel-8VuNNoXT.js","assets/UseClipboard-NcLNHGFg.js","assets/UseColorScheme-oibjXnPy.js","assets/UseDeviceMotion-aNTofvcc.js","assets/UseDeviceOrientation-vhBmlpFP.js","assets/UseDisplayMedia-X3C4bFS3.js","assets/useMediaDevices-llGLMfzW.js","assets/useEffectOnce-N1eE4_ox.js","assets/UseDocumentPIP-4Ao72zbI.js","assets/useRerender-r2fXwD9M.js","assets/UseFPS-waD1vZv_.js","assets/useRaf-qPr6X2mR.js","assets/UseFullscreen-wHfcpmEe.js","assets/UseGeolocation-Flv-9YgA.js","assets/UseInterval-VLrTr59d.js","assets/useInterval-s6fdk_6c.js","assets/UseMediaDevices-S7tBZtto.js","assets/UseMediaQuery-PEcuS-qa.js","assets/useMediaQuery-WMcPm-eM.js","assets/UsePIP-fNfH1-M4.js","assets/mov_bbb-wTtoEAf2.js","assets/UsePermission-p0DM-rFN.js","assets/UsePopover-WL5PjvTK.js","assets/useLazyRef-AmiTbpcy.js","assets/useMergedRef--AXWBu8C.js","assets/UsePromiseSuspensible-l-ymPIVY.js","assets/isDeepEqual-miY4iMQs.js","assets/UsePublishSubscribe-n5ybVQyt.js","assets/PublishSubscribePattern-aUbEeFKT.js","assets/UseRaf-UKkb4G0U.js","assets/useResizeObserver-IBKdFu5-.js","assets/UseReducedMotion-mgiRJmBi.js","assets/useReducedMotion-JYE_FI8r.js","assets/UseRemotePlayback-pjp4A9G1.js","assets/UseScreenWakeLock-0Qo4Gqrx.js","assets/UseScript-ClZ3lmFJ.js","assets/useScript-5w_xTVf7.js","assets/UseSpeechRecognition-8depN3uq.js","assets/usePerformAction-WEvbzeZL.js","assets/UseSpeechSynthesis-mOpEjeHE.js","assets/UseTextSelection-GMR0jumE.js","assets/UseVideo-CqDtvDsd.js","assets/UseWebWorker-bOVqj3vz.js","assets/UseWebWorkerFn-VoTMZd7P.js","assets/UseBeforeUnload-6umoMwip.js","assets/useEventListener-fT8bqR5j.js","assets/useMemoizedFn-mCfFDcI4.js","assets/UseClickOutside-acvxHO7y.js","assets/UseContextMenu-0Gk7UeAo.js","assets/UseDocumentVisibility-HMMpCJPD.js","assets/UseEventDispatcher-HZF3dJTj.js","assets/UseEventListener-uH8Xn9aS.js","assets/UseEvents-flGuZTJz.js","assets/useEvents-qRoFKEyl.js","assets/UseHotKeys-1jW8UbwP.js","assets/UseHover-QqS13tv0.js","assets/UseInfiniteScroll-LSnp5dVN.js","assets/UseIntersectionObserver-_nW3QuaG.js","assets/UseIsOnline-epgYv72a.js","assets/useNetwork--reRFVMY.js","assets/UseMeasure-_IRSOQEO.js","assets/UseMouse-mIvtIbcA.js","assets/UseMutationObserver-DI2Tkcd1.js","assets/UseNetwork-FCC4vhX7.js","assets/UsePerformAction-FQ19guzZ.js","assets/UsePinchZoom-FFoVgK9k.js","assets/UseResizeObserver-veskilwz.js","assets/UseResponsive-jRWpk0OQ.js","assets/UseScreen-605AqHWd.js","assets/UseScrollIntoView-1ZKkwGv8.js","assets/UseSwipe-KFDeV_zT.js","assets/UseVisible-zICedEB4.js","assets/UseEffectDeepCompare-IY3LJJ79.js","assets/UseEffectOnce-PrLsEBJb.js","assets/UseIsMounted-ADopCD30.js","assets/UseRerender-pgFkXSwT.js","assets/UseCallbackDeepCompare-0E8U9KBK.js","assets/UseLazyRef-oNVjNWI2.js","assets/UseMemoDeepCompare-Zgf9pcgW.js","assets/UseMemoizedFn-iZJrQMTj.js","assets/UseMergedRef-I9HpgYaS.js","assets/CreatePubSubStore-ulLEdZex.js","assets/UseLocalStorageState-CaG-u8QD.js","assets/UseSessionStorageState-TzKr2Fa9.js","assets/UseStateGetReset-D2LGlOj9.js","assets/UseStateValidator-pVbq0ZqE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
