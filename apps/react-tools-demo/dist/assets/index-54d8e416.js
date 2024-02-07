function $y(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(o,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xg={exports:{}},kl={},Cg={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),qy=Symbol.for("react.portal"),Gy=Symbol.for("react.fragment"),Ky=Symbol.for("react.strict_mode"),Qy=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),Jy=Symbol.for("react.forward_ref"),Zy=Symbol.for("react.suspense"),ek=Symbol.for("react.memo"),tk=Symbol.for("react.lazy"),Lp=Symbol.iterator;function nk(e){return e===null||typeof e!="object"?null:(e=Lp&&e[Lp]||e["@@iterator"],typeof e=="function"?e:null)}var Eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,Ag={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Ag,this.updater=n||Eg}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pg(){}Pg.prototype=Cr.prototype;function ed(e,t,n){this.props=e,this.context=t,this.refs=Ag,this.updater=n||Eg}var td=ed.prototype=new Pg;td.constructor=ed;Tg(td,Cr.prototype);td.isPureReactComponent=!0;var Ip=Array.isArray,Rg=Object.prototype.hasOwnProperty,nd={current:null},Mg={key:!0,ref:!0,__self:!0,__source:!0};function Dg(e,t,n){var o,r={},a=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Rg.call(t,o)&&!Mg.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];r.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:Fa,type:e,key:a,ref:i,props:r,_owner:nd.current}}function ok(e,t){return{$$typeof:Fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function od(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fa}function rk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fp=/\/+/g;function Jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rk(""+e.key):t.toString(36)}function Ei(e,t,n,o,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Fa:case qy:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+Jl(i,0):o,Ip(r)?(n="",e!=null&&(n=e.replace(Fp,"$&/")+"/"),Ei(r,t,n,"",function(l){return l})):r!=null&&(od(r)&&(r=ok(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Fp,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",Ip(e))for(var s=0;s<e.length;s++){a=e[s];var c=o+Jl(a,s);i+=Ei(a,t,n,c,r)}else if(c=nk(e),typeof c=="function")for(e=c.call(e),s=0;!(a=e.next()).done;)a=a.value,c=o+Jl(a,s++),i+=Ei(a,t,n,c,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ei(e,t,n){if(e==null)return e;var o=[],r=0;return Ei(e,o,"","",function(a){return t.call(n,a,r++)}),o}function ak(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},Ti={transition:null},ik={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:nd};ge.Children={map:ei,forEach:function(e,t,n){ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ei(e,function(){t++}),t},toArray:function(e){return ei(e,function(t){return t})||[]},only:function(e){if(!od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=Cr;ge.Fragment=Gy;ge.Profiler=Qy;ge.PureComponent=ed;ge.StrictMode=Ky;ge.Suspense=Zy;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ik;ge.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Tg({},e.props),r=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=nd.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Rg.call(t,c)&&!Mg.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:Fa,type:e.type,key:r,ref:a,props:o,_owner:i}};ge.createContext=function(e){return e={$$typeof:Xy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yy,_context:e},e.Consumer=e};ge.createElement=Dg;ge.createFactory=function(e){var t=Dg.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:Jy,render:e}};ge.isValidElement=od;ge.lazy=function(e){return{$$typeof:tk,_payload:{_status:-1,_result:e},_init:ak}};ge.memo=function(e,t){return{$$typeof:ek,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ge.useCallback=function(e,t){return pt.current.useCallback(e,t)};ge.useContext=function(e){return pt.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};ge.useEffect=function(e,t){return pt.current.useEffect(e,t)};ge.useId=function(){return pt.current.useId()};ge.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};ge.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return pt.current.useMemo(e,t)};ge.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};ge.useRef=function(e){return pt.current.useRef(e)};ge.useState=function(e){return pt.current.useState(e)};ge.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};ge.useTransition=function(){return pt.current.useTransition()};ge.version="18.2.0";Cg.exports=ge;var y=Cg.exports;const xe=Bt(y),lk=$y({__proto__:null,default:xe},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sk=y,ck=Symbol.for("react.element"),uk=Symbol.for("react.fragment"),dk=Object.prototype.hasOwnProperty,pk=sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fk={key:!0,ref:!0,__self:!0,__source:!0};function jg(e,t,n){var o,r={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)dk.call(t,o)&&!fk.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:ck,type:e,key:a,ref:i,props:r,_owner:pk.current}}kl.Fragment=uk;kl.jsx=jg;kl.jsxs=jg;xg.exports=kl;var u=xg.exports,Wc={},zg={exports:{}},Rt={},Og={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,V){var S=I.length;I.push(V);e:for(;0<S;){var G=S-1>>>1,Z=I[G];if(0<r(Z,V))I[G]=V,I[S]=Z,S=G;else break e}}function n(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var V=I[0],S=I.pop();if(S!==V){I[0]=S;e:for(var G=0,Z=I.length,C=Z>>>1;G<C;){var J=2*(G+1)-1,ye=I[J],se=J+1,Pe=I[se];if(0>r(ye,S))se<Z&&0>r(Pe,ye)?(I[G]=Pe,I[se]=S,G=se):(I[G]=ye,I[J]=S,G=J);else if(se<Z&&0>r(Pe,S))I[G]=Pe,I[se]=S,G=se;else break e}}return V}function r(I,V){var S=I.sortIndex-V.sortIndex;return S!==0?S:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var c=[],l=[],d=1,p=null,f=3,h=!1,v=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var V=n(l);V!==null;){if(V.callback===null)o(l);else if(V.startTime<=I)o(l),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(l)}}function _(I){if(k=!1,g(I),!v)if(n(c)!==null)v=!0,ne(x);else{var V=n(l);V!==null&&ce(_,V.startTime-I)}}function x(I,V){v=!1,k&&(k=!1,b(R),R=-1),h=!0;var S=f;try{for(g(V),p=n(c);p!==null&&(!(p.expirationTime>V)||I&&!N());){var G=p.callback;if(typeof G=="function"){p.callback=null,f=p.priorityLevel;var Z=G(p.expirationTime<=V);V=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(c)&&o(c),g(V)}else o(c);p=n(c)}if(p!==null)var C=!0;else{var J=n(l);J!==null&&ce(_,J.startTime-V),C=!1}return C}finally{p=null,f=S,h=!1}}var w=!1,A=null,R=-1,j=5,E=-1;function N(){return!(e.unstable_now()-E<j)}function F(){if(A!==null){var I=e.unstable_now();E=I;var V=!0;try{V=A(!0,I)}finally{V?Y():(w=!1,A=null)}}else w=!1}var Y;if(typeof m=="function")Y=function(){m(F)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Q=re.port2;re.port1.onmessage=F,Y=function(){Q.postMessage(null)}}else Y=function(){T(F,0)};function ne(I){A=I,w||(w=!0,Y())}function ce(I,V){R=T(function(){I(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,ne(x))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var S=f;f=V;try{return I()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var S=f;f=I;try{return V()}finally{f=S}},e.unstable_scheduleCallback=function(I,V,S){var G=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?G+S:G):S=G,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=S+Z,I={id:d++,callback:V,priorityLevel:I,startTime:S,expirationTime:Z,sortIndex:-1},S>G?(I.sortIndex=S,t(l,I),n(c)===null&&I===n(l)&&(k?(b(R),R=-1):k=!0,ce(_,S-G))):(I.sortIndex=Z,t(c,I),v||h||(v=!0,ne(x))),I},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(I){var V=f;return function(){var S=f;f=V;try{return I.apply(this,arguments)}finally{f=S}}}})(Lg);Og.exports=Lg;var hk=Og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig=y,Pt=hk;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fg=new Set,_a={};function Oo(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(_a[e]=t,e=0;e<t.length;e++)Fg.add(t[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,mk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Up={},Np={};function gk(e){return Bc.call(Np,e)?!0:Bc.call(Up,e)?!1:mk.test(e)?Np[e]=!0:(Up[e]=!0,!1)}function _k(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bk(e,t,n,o){if(t===null||typeof t>"u"||_k(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ft(e,t,n,o,r,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function ad(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rd,ad);tt[t]=new ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rd,ad);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rd,ad);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function id(e,t,n,o){var r=tt.hasOwnProperty(t)?tt[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bk(t,n,r,o)&&(n=null),o||r===null?gk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Rn=Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ti=Symbol.for("react.element"),Ko=Symbol.for("react.portal"),Qo=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Ug=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),cd=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Hg=Symbol.for("react.offscreen"),Hp=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Hp&&e[Hp]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,Zl;function Jr(e){if(Zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var es=!1;function ts(e,t){if(!e||es)return"";es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var o=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){o=l}e.call(t.prototype)}else{try{throw Error()}catch(l){o=l}e()}}catch(l){if(l&&o&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),a=o.stack.split(`
`),i=r.length-1,s=a.length-1;1<=i&&0<=s&&r[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(r[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||r[i]!==a[s]){var c=`
`+r[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=s);break}}}finally{es=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function vk(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=ts(e.type,!1),e;case 11:return e=ts(e.type.render,!1),e;case 1:return e=ts(e.type,!0),e;default:return""}}function Gc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qo:return"Fragment";case Ko:return"Portal";case Vc:return"Profiler";case ld:return"StrictMode";case $c:return"Suspense";case qc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ng:return(e.displayName||"Context")+".Consumer";case Ug:return(e._context.displayName||"Context")+".Provider";case sd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cd:return t=e.displayName||null,t!==null?t:Gc(e.type)||"Memo";case Un:t=e._payload,e=e._init;try{return Gc(e(t))}catch{}}return null}function yk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(t);case 8:return t===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kk(e){var t=Wg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ni(e){e._valueTracker||(e._valueTracker=kk(e))}function Bg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Wg(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kc(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wp(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vg(e,t){t=t.checked,t!=null&&id(e,"checked",t,!1)}function Qc(e,t){Vg(e,t);var n=Zn(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yc(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yc(e,t,n){(t!=="number"||Wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function cr(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Xc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(W(92));if(Zr(n)){if(1<n.length)throw Error(W(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function $g(e,t){var n=Zn(t.value),o=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function $p(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,Gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ba(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wk=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(e){wk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),aa[t]=aa[e]})});function Kg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||aa.hasOwnProperty(e)&&aa[e]?(""+t).trim():t+"px"}function Qg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Kg(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Sk=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(e,t){if(t){if(Sk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function eu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tu=null;function ud(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nu=null,ur=null,dr=null;function qp(e){if(e=Ha(e)){if(typeof nu!="function")throw Error(W(280));var t=e.stateNode;t&&(t=El(t),nu(e.stateNode,e.type,t))}}function Yg(e){ur?dr?dr.push(e):dr=[e]:ur=e}function Xg(){if(ur){var e=ur,t=dr;if(dr=ur=null,qp(e),t)for(e=0;e<t.length;e++)qp(t[e])}}function Jg(e,t){return e(t)}function Zg(){}var ns=!1;function e_(e,t,n){if(ns)return e(t,n);ns=!0;try{return Jg(e,t,n)}finally{ns=!1,(ur!==null||dr!==null)&&(Zg(),Xg())}}function va(e,t){var n=e.stateNode;if(n===null)return null;var o=El(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var ou=!1;if(En)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{ou=!1}function xk(e,t,n,o,r,a,i,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(d){this.onError(d)}}var ia=!1,Bi=null,Vi=!1,ru=null,Ck={onError:function(e){ia=!0,Bi=e}};function Ek(e,t,n,o,r,a,i,s,c){ia=!1,Bi=null,xk.apply(Ck,arguments)}function Tk(e,t,n,o,r,a,i,s,c){if(Ek.apply(this,arguments),ia){if(ia){var l=Bi;ia=!1,Bi=null}else throw Error(W(198));Vi||(Vi=!0,ru=l)}}function Lo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function t_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gp(e){if(Lo(e)!==e)throw Error(W(188))}function Ak(e){var t=e.alternate;if(!t){if(t=Lo(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Gp(r),e;if(a===o)return Gp(r),t;a=a.sibling}throw Error(W(188))}if(n.return!==o.return)n=r,o=a;else{for(var i=!1,s=r.child;s;){if(s===n){i=!0,n=r,o=a;break}if(s===o){i=!0,o=r,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,o=r;break}if(s===o){i=!0,o=a,n=r;break}s=s.sibling}if(!i)throw Error(W(189))}}if(n.alternate!==o)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function n_(e){return e=Ak(e),e!==null?o_(e):null}function o_(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=o_(e);if(t!==null)return t;e=e.sibling}return null}var r_=Pt.unstable_scheduleCallback,Kp=Pt.unstable_cancelCallback,Pk=Pt.unstable_shouldYield,Rk=Pt.unstable_requestPaint,Be=Pt.unstable_now,Mk=Pt.unstable_getCurrentPriorityLevel,dd=Pt.unstable_ImmediatePriority,a_=Pt.unstable_UserBlockingPriority,$i=Pt.unstable_NormalPriority,Dk=Pt.unstable_LowPriority,i_=Pt.unstable_IdlePriority,wl=null,dn=null;function jk(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Lk,zk=Math.log,Ok=Math.LN2;function Lk(e){return e>>>=0,e===0?32:31-(zk(e)/Ok|0)|0}var ri=64,ai=4194304;function ea(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~r;s!==0?o=ea(s):(a&=i,a!==0&&(o=ea(a)))}else i=n&~r,i!==0?o=ea(i):a!==0&&(o=ea(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Zt(t),r=1<<n,o|=e[n],t&=~r;return o}function Ik(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fk(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Zt(a),s=1<<i,c=r[i];c===-1?(!(s&n)||s&o)&&(r[i]=Ik(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function l_(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function os(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ua(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=n}function Uk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Zt(n),a=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~a}}function pd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Zt(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var we=0;function s_(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var c_,fd,u_,d_,p_,iu=!1,ii=[],$n=null,qn=null,Gn=null,ya=new Map,ka=new Map,Hn=[],Nk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":ya.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function Nr(e,t,n,o,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Ha(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Hk(e,t,n,o,r){switch(t){case"focusin":return $n=Nr($n,e,t,n,o,r),!0;case"dragenter":return qn=Nr(qn,e,t,n,o,r),!0;case"mouseover":return Gn=Nr(Gn,e,t,n,o,r),!0;case"pointerover":var a=r.pointerId;return ya.set(a,Nr(ya.get(a)||null,e,t,n,o,r)),!0;case"gotpointercapture":return a=r.pointerId,ka.set(a,Nr(ka.get(a)||null,e,t,n,o,r)),!0}return!1}function f_(e){var t=ko(e.target);if(t!==null){var n=Lo(t);if(n!==null){if(t=n.tag,t===13){if(t=t_(n),t!==null){e.blockedOn=t,p_(e.priority,function(){u_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);tu=o,n.target.dispatchEvent(o),tu=null}else return t=Ha(n),t!==null&&fd(t),e.blockedOn=n,!1;t.shift()}return!0}function Yp(e,t,n){Ai(e)&&n.delete(t)}function Wk(){iu=!1,$n!==null&&Ai($n)&&($n=null),qn!==null&&Ai(qn)&&(qn=null),Gn!==null&&Ai(Gn)&&(Gn=null),ya.forEach(Yp),ka.forEach(Yp)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,iu||(iu=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,Wk)))}function wa(e){function t(r){return Hr(r,e)}if(0<ii.length){Hr(ii[0],e);for(var n=1;n<ii.length;n++){var o=ii[n];o.blockedOn===e&&(o.blockedOn=null)}}for($n!==null&&Hr($n,e),qn!==null&&Hr(qn,e),Gn!==null&&Hr(Gn,e),ya.forEach(t),ka.forEach(t),n=0;n<Hn.length;n++)o=Hn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&Hn.shift()}var pr=Rn.ReactCurrentBatchConfig,Gi=!0;function Bk(e,t,n,o){var r=we,a=pr.transition;pr.transition=null;try{we=1,hd(e,t,n,o)}finally{we=r,pr.transition=a}}function Vk(e,t,n,o){var r=we,a=pr.transition;pr.transition=null;try{we=4,hd(e,t,n,o)}finally{we=r,pr.transition=a}}function hd(e,t,n,o){if(Gi){var r=lu(e,t,n,o);if(r===null)fs(e,t,o,Ki,n),Qp(e,o);else if(Hk(r,e,t,n,o))o.stopPropagation();else if(Qp(e,o),t&4&&-1<Nk.indexOf(e)){for(;r!==null;){var a=Ha(r);if(a!==null&&c_(a),a=lu(e,t,n,o),a===null&&fs(e,t,o,Ki,n),a===r)break;r=a}r!==null&&o.stopPropagation()}else fs(e,t,o,null,n)}}var Ki=null;function lu(e,t,n,o){if(Ki=null,e=ud(o),e=ko(e),e!==null)if(t=Lo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=t_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function h_(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mk()){case dd:return 1;case a_:return 4;case $i:case Dk:return 16;case i_:return 536870912;default:return 16}default:return 16}}var Bn=null,md=null,Pi=null;function m_(){if(Pi)return Pi;var e,t=md,n=t.length,o,r="value"in Bn?Bn.value:Bn.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[a-o];o++);return Pi=r.slice(e,1<o?1-o:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Xp(){return!1}function Mt(e){function t(n,o,r,a,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?li:Xp,this.isPropagationStopped=Xp,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gd=Mt(Er),Na=Ue({},Er,{view:0,detail:0}),$k=Mt(Na),rs,as,Wr,Sl=Ue({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(rs=e.screenX-Wr.screenX,as=e.screenY-Wr.screenY):as=rs=0,Wr=e),rs)},movementY:function(e){return"movementY"in e?e.movementY:as}}),Jp=Mt(Sl),qk=Ue({},Sl,{dataTransfer:0}),Gk=Mt(qk),Kk=Ue({},Na,{relatedTarget:0}),is=Mt(Kk),Qk=Ue({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),Yk=Mt(Qk),Xk=Ue({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jk=Mt(Xk),Zk=Ue({},Er,{data:0}),Zp=Mt(Zk),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n0[e])?!!t[e]:!1}function _d(){return o0}var r0=Ue({},Na,{key:function(e){if(e.key){var t=e0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a0=Mt(r0),i0=Ue({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=Mt(i0),l0=Ue({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),s0=Mt(l0),c0=Ue({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Mt(c0),d0=Ue({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=Mt(d0),f0=[9,13,27,32],bd=En&&"CompositionEvent"in window,la=null;En&&"documentMode"in document&&(la=document.documentMode);var h0=En&&"TextEvent"in window&&!la,g_=En&&(!bd||la&&8<la&&11>=la),tf=String.fromCharCode(32),nf=!1;function __(e,t){switch(e){case"keyup":return f0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yo=!1;function m0(e,t){switch(e){case"compositionend":return b_(t);case"keypress":return t.which!==32?null:(nf=!0,tf);case"textInput":return e=t.data,e===tf&&nf?null:e;default:return null}}function g0(e,t){if(Yo)return e==="compositionend"||!bd&&__(e,t)?(e=m_(),Pi=md=Bn=null,Yo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return g_&&t.locale!=="ko"?null:t.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_0[e.type]:t==="textarea"}function v_(e,t,n,o){Yg(o),t=Qi(t,"onChange"),0<t.length&&(n=new gd("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var sa=null,Sa=null;function b0(e){R_(e,0)}function xl(e){var t=Zo(e);if(Bg(t))return e}function v0(e,t){if(e==="change")return t}var y_=!1;if(En){var ls;if(En){var ss="oninput"in document;if(!ss){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),ss=typeof rf.oninput=="function"}ls=ss}else ls=!1;y_=ls&&(!document.documentMode||9<document.documentMode)}function af(){sa&&(sa.detachEvent("onpropertychange",k_),Sa=sa=null)}function k_(e){if(e.propertyName==="value"&&xl(Sa)){var t=[];v_(t,Sa,e,ud(e)),e_(b0,t)}}function y0(e,t,n){e==="focusin"?(af(),sa=t,Sa=n,sa.attachEvent("onpropertychange",k_)):e==="focusout"&&af()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Sa)}function w0(e,t){if(e==="click")return xl(t)}function S0(e,t){if(e==="input"||e==="change")return xl(t)}function x0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:x0;function xa(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Bc.call(t,r)||!nn(e[r],t[r]))return!1}return!0}function lf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sf(e,t){var n=lf(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lf(n)}}function w_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?w_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function S_(){for(var e=window,t=Wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wi(e.document)}return t}function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function C0(e){var t=S_(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&w_(n.ownerDocument.documentElement,n)){if(o!==null&&vd(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(o.start,r);o=o.end===void 0?a:Math.min(o.end,r),!e.extend&&a>o&&(r=o,o=a,a=r),r=sf(n,a);var i=sf(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E0=En&&"documentMode"in document&&11>=document.documentMode,Xo=null,su=null,ca=null,cu=!1;function cf(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cu||Xo==null||Xo!==Wi(o)||(o=Xo,"selectionStart"in o&&vd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ca&&xa(ca,o)||(ca=o,o=Qi(su,"onSelect"),0<o.length&&(t=new gd("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Xo)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jo={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},cs={},x_={};En&&(x_=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function Cl(e){if(cs[e])return cs[e];if(!Jo[e])return e;var t=Jo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x_)return cs[e]=t[n];return e}var C_=Cl("animationend"),E_=Cl("animationiteration"),T_=Cl("animationstart"),A_=Cl("transitionend"),P_=new Map,uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function no(e,t){P_.set(e,t),Oo(t,[e])}for(var us=0;us<uf.length;us++){var ds=uf[us],T0=ds.toLowerCase(),A0=ds[0].toUpperCase()+ds.slice(1);no(T0,"on"+A0)}no(C_,"onAnimationEnd");no(E_,"onAnimationIteration");no(T_,"onAnimationStart");no("dblclick","onDoubleClick");no("focusin","onFocus");no("focusout","onBlur");no(A_,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function df(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Tk(o,t,void 0,e),e.currentTarget=null}function R_(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&r.isPropagationStopped())break e;df(r,s,l),a=c}else for(i=0;i<o.length;i++){if(s=o[i],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&r.isPropagationStopped())break e;df(r,s,l),a=c}}}if(Vi)throw e=ru,Vi=!1,ru=null,e}function Me(e,t){var n=t[hu];n===void 0&&(n=t[hu]=new Set);var o=e+"__bubble";n.has(o)||(M_(t,e,2,!1),n.add(o))}function ps(e,t,n){var o=0;t&&(o|=4),M_(n,e,o,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Ca(e){if(!e[ci]){e[ci]=!0,Fg.forEach(function(n){n!=="selectionchange"&&(P0.has(n)||ps(n,!1,e),ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,ps("selectionchange",!1,t))}}function M_(e,t,n,o){switch(h_(t)){case 1:var r=Bk;break;case 4:r=Vk;break;default:r=hd}n=r.bind(null,t,n,e),r=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function fs(e,t,n,o,r){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;i=i.return}for(;s!==null;){if(i=ko(s),i===null)return;if(c=i.tag,c===5||c===6){o=a=i;continue e}s=s.parentNode}}o=o.return}e_(function(){var l=a,d=ud(n),p=[];e:{var f=P_.get(e);if(f!==void 0){var h=gd,v=e;switch(e){case"keypress":if(Ri(n)===0)break e;case"keydown":case"keyup":h=a0;break;case"focusin":v="focus",h=is;break;case"focusout":v="blur",h=is;break;case"beforeblur":case"afterblur":h=is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Gk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=s0;break;case C_:case E_:case T_:h=Yk;break;case A_:h=u0;break;case"scroll":h=$k;break;case"wheel":h=p0;break;case"copy":case"cut":case"paste":h=Jk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ef}var k=(t&4)!==0,T=!k&&e==="scroll",b=k?f!==null?f+"Capture":null:f;k=[];for(var m=l,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,b!==null&&(_=va(m,b),_!=null&&k.push(Ea(m,_,g)))),T)break;m=m.return}0<k.length&&(f=new h(f,v,null,n,d),p.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==tu&&(v=n.relatedTarget||n.fromElement)&&(ko(v)||v[Tn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=l,v=v?ko(v):null,v!==null&&(T=Lo(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=l),h!==v)){if(k=Jp,_="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=ef,_="onPointerLeave",b="onPointerEnter",m="pointer"),T=h==null?f:Zo(h),g=v==null?f:Zo(v),f=new k(_,m+"leave",h,n,d),f.target=T,f.relatedTarget=g,_=null,ko(d)===l&&(k=new k(b,m+"enter",v,n,d),k.target=g,k.relatedTarget=T,_=k),T=_,h&&v)t:{for(k=h,b=v,m=0,g=k;g;g=Ho(g))m++;for(g=0,_=b;_;_=Ho(_))g++;for(;0<m-g;)k=Ho(k),m--;for(;0<g-m;)b=Ho(b),g--;for(;m--;){if(k===b||b!==null&&k===b.alternate)break t;k=Ho(k),b=Ho(b)}k=null}else k=null;h!==null&&pf(p,f,h,k,!1),v!==null&&T!==null&&pf(p,T,v,k,!0)}}e:{if(f=l?Zo(l):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var x=v0;else if(of(f))if(y_)x=S0;else{x=k0;var w=y0}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=w0);if(x&&(x=x(e,l))){v_(p,x,n,d);break e}w&&w(e,f,l),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Yc(f,"number",f.value)}switch(w=l?Zo(l):window,e){case"focusin":(of(w)||w.contentEditable==="true")&&(Xo=w,su=l,ca=null);break;case"focusout":ca=su=Xo=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,cf(p,n,d);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":cf(p,n,d)}var A;if(bd)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Yo?__(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(g_&&n.locale!=="ko"&&(Yo||R!=="onCompositionStart"?R==="onCompositionEnd"&&Yo&&(A=m_()):(Bn=d,md="value"in Bn?Bn.value:Bn.textContent,Yo=!0)),w=Qi(l,R),0<w.length&&(R=new Zp(R,e,null,n,d),p.push({event:R,listeners:w}),A?R.data=A:(A=b_(n),A!==null&&(R.data=A)))),(A=h0?m0(e,n):g0(e,n))&&(l=Qi(l,"onBeforeInput"),0<l.length&&(d=new Zp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:l}),d.data=A))}R_(p,t)})}function Ea(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=va(e,n),a!=null&&o.unshift(Ea(e,a,r)),a=va(e,t),a!=null&&o.push(Ea(e,a,r))),e=e.return}return o}function Ho(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pf(e,t,n,o,r){for(var a=t._reactName,i=[];n!==null&&n!==o;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===o)break;s.tag===5&&l!==null&&(s=l,r?(c=va(n,a),c!=null&&i.unshift(Ea(n,c,s))):r||(c=va(n,a),c!=null&&i.push(Ea(n,c,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var R0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function ff(e){return(typeof e=="string"?e:""+e).replace(R0,`
`).replace(M0,"")}function ui(e,t,n){if(t=ff(t),ff(e)!==t&&n)throw Error(W(425))}function Yi(){}var uu=null,du=null;function pu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,D0=typeof clearTimeout=="function"?clearTimeout:void 0,hf=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof hf<"u"?function(e){return hf.resolve(null).then(e).catch(z0)}:fu;function z0(e){setTimeout(function(){throw e})}function hs(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),wa(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);wa(t)}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),cn="__reactFiber$"+Tr,Ta="__reactProps$"+Tr,Tn="__reactContainer$"+Tr,hu="__reactEvents$"+Tr,O0="__reactListeners$"+Tr,L0="__reactHandles$"+Tr;function ko(e){var t=e[cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tn]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mf(e);e!==null;){if(n=e[cn])return n;e=mf(e)}return t}e=n,n=e.parentNode}return null}function Ha(e){return e=e[cn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function El(e){return e[Ta]||null}var mu=[],er=-1;function oo(e){return{current:e}}function De(e){0>er||(e.current=mu[er],mu[er]=null,er--)}function Ae(e,t){er++,mu[er]=e.current,e.current=t}var eo={},lt=oo(eo),yt=oo(!1),To=eo;function br(e,t){var n=e.type.contextTypes;if(!n)return eo;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function kt(e){return e=e.childContextTypes,e!=null}function Xi(){De(yt),De(lt)}function gf(e,t,n){if(lt.current!==eo)throw Error(W(168));Ae(lt,t),Ae(yt,n)}function D_(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(W(108,yk(e)||"Unknown",r));return Ue({},n,o)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||eo,To=lt.current,Ae(lt,e),Ae(yt,yt.current),!0}function _f(e,t,n){var o=e.stateNode;if(!o)throw Error(W(169));n?(e=D_(e,t,To),o.__reactInternalMemoizedMergedChildContext=e,De(yt),De(lt),Ae(lt,e)):De(yt),Ae(yt,n)}var kn=null,Tl=!1,ms=!1;function j_(e){kn===null?kn=[e]:kn.push(e)}function I0(e){Tl=!0,j_(e)}function ro(){if(!ms&&kn!==null){ms=!0;var e=0,t=we;try{var n=kn;for(we=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}kn=null,Tl=!1}catch(r){throw kn!==null&&(kn=kn.slice(e+1)),r_(dd,ro),r}finally{we=t,ms=!1}}return null}var tr=[],nr=0,Zi=null,el=0,Ot=[],Lt=0,Ao=null,wn=1,Sn="";function _o(e,t){tr[nr++]=el,tr[nr++]=Zi,Zi=e,el=t}function z_(e,t,n){Ot[Lt++]=wn,Ot[Lt++]=Sn,Ot[Lt++]=Ao,Ao=e;var o=wn;e=Sn;var r=32-Zt(o)-1;o&=~(1<<r),n+=1;var a=32-Zt(t)+r;if(30<a){var i=r-r%5;a=(o&(1<<i)-1).toString(32),o>>=i,r-=i,wn=1<<32-Zt(t)+r|n<<r|o,Sn=a+e}else wn=1<<a|n<<r|o,Sn=e}function yd(e){e.return!==null&&(_o(e,1),z_(e,1,0))}function kd(e){for(;e===Zi;)Zi=tr[--nr],tr[nr]=null,el=tr[--nr],tr[nr]=null;for(;e===Ao;)Ao=Ot[--Lt],Ot[Lt]=null,Sn=Ot[--Lt],Ot[Lt]=null,wn=Ot[--Lt],Ot[Lt]=null}var Tt=null,Et=null,ze=!1,Jt=null;function O_(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Et=Kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ao!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Et=null,!0):!1;default:return!1}}function gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(ze){var t=Et;if(t){var n=t;if(!bf(e,t)){if(gu(e))throw Error(W(418));t=Kn(n.nextSibling);var o=Tt;t&&bf(e,t)?O_(o,n):(e.flags=e.flags&-4097|2,ze=!1,Tt=e)}}else{if(gu(e))throw Error(W(418));e.flags=e.flags&-4097|2,ze=!1,Tt=e}}}function vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function di(e){if(e!==Tt)return!1;if(!ze)return vf(e),ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pu(e.type,e.memoizedProps)),t&&(t=Et)){if(gu(e))throw L_(),Error(W(418));for(;t;)O_(e,t),t=Kn(t.nextSibling)}if(vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=Kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=Tt?Kn(e.stateNode.nextSibling):null;return!0}function L_(){for(var e=Et;e;)e=Kn(e.nextSibling)}function vr(){Et=Tt=null,ze=!1}function wd(e){Jt===null?Jt=[e]:Jt.push(e)}var F0=Rn.ReactCurrentBatchConfig;function Qt(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var tl=oo(null),nl=null,or=null,Sd=null;function xd(){Sd=or=nl=null}function Cd(e){var t=tl.current;De(tl),e._currentValue=t}function bu(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){nl=e,Sd=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(Sd!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(nl===null)throw Error(W(308));or=e,nl.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var wo=null;function Ed(e){wo===null?wo=[e]:wo.push(e)}function I_(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,Ed(t)):(n.next=r.next,r.next=n),t.interleaved=n,An(e,o)}function An(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nn=!1;function Td(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,be&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,An(e,n)}return r=o.interleaved,r===null?(t.next=t,Ed(o)):(t.next=r.next,r.next=t),o.interleaved=t,An(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,pd(e,n)}}function yf(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,o){var r=e.updateQueue;Nn=!1;var a=r.firstBaseUpdate,i=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var c=s,l=c.next;c.next=null,i===null?a=l:i.next=l,i=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=l:s.next=l,d.lastBaseUpdate=c))}if(a!==null){var p=r.baseState;i=0,d=l=c=null,s=a;do{var f=s.lane,h=s.eventTime;if((o&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(f=t,h=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){p=v.call(h,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,f=typeof v=="function"?v.call(h,p,f):v,f==null)break e;p=Ue({},p,f);break e;case 2:Nn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(l=d=h,c=p):d=d.next=h,i|=f;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;f=s,s=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(d===null&&(c=p),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=d,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);Ro|=i,e.lanes=i,e.memoizedState=p}}function kf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(W(191,r));r.call(o)}}}var U_=new Ig.Component().refs;function vu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Lo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=dt(),r=Xn(e),a=xn(o,r);a.payload=t,n!=null&&(a.callback=n),t=Qn(e,a,r),t!==null&&(en(t,e,r,o),Mi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=dt(),r=Xn(e),a=xn(o,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qn(e,a,r),t!==null&&(en(t,e,r,o),Mi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),o=Xn(e),r=xn(n,o);r.tag=2,t!=null&&(r.callback=t),t=Qn(e,r,o),t!==null&&(en(t,e,o,n),Mi(t,e,o))}};function wf(e,t,n,o,r,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,i):t.prototype&&t.prototype.isPureReactComponent?!xa(n,o)||!xa(r,a):!0}function N_(e,t,n){var o=!1,r=eo,a=t.contextType;return typeof a=="object"&&a!==null?a=Ht(a):(r=kt(t)?To:lt.current,o=t.contextTypes,a=(o=o!=null)?br(e,r):eo),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function Sf(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function yu(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=U_,Td(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=Ht(a):(a=kt(t)?To:lt.current,r.context=br(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(vu(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Al.enqueueReplaceState(r,r.state,null),ol(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var o=n.stateNode}if(!o)throw Error(W(147,e));var r=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=r.refs;s===U_&&(s=r.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xf(e){var t=e._init;return t(e._payload)}function H_(e){function t(b,m){if(e){var g=b.deletions;g===null?(b.deletions=[m],b.flags|=16):g.push(m)}}function n(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function o(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function r(b,m){return b=Jn(b,m),b.index=0,b.sibling=null,b}function a(b,m,g){return b.index=g,e?(g=b.alternate,g!==null?(g=g.index,g<m?(b.flags|=2,m):g):(b.flags|=2,m)):(b.flags|=1048576,m)}function i(b){return e&&b.alternate===null&&(b.flags|=2),b}function s(b,m,g,_){return m===null||m.tag!==6?(m=ws(g,b.mode,_),m.return=b,m):(m=r(m,g),m.return=b,m)}function c(b,m,g,_){var x=g.type;return x===Qo?d(b,m,g.props.children,_,g.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Un&&xf(x)===m.type)?(_=r(m,g.props),_.ref=Br(b,m,g),_.return=b,_):(_=Ii(g.type,g.key,g.props,null,b.mode,_),_.ref=Br(b,m,g),_.return=b,_)}function l(b,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Ss(g,b.mode,_),m.return=b,m):(m=r(m,g.children||[]),m.return=b,m)}function d(b,m,g,_,x){return m===null||m.tag!==7?(m=Eo(g,b.mode,_,x),m.return=b,m):(m=r(m,g),m.return=b,m)}function p(b,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ws(""+m,b.mode,g),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ti:return g=Ii(m.type,m.key,m.props,null,b.mode,g),g.ref=Br(b,null,m),g.return=b,g;case Ko:return m=Ss(m,b.mode,g),m.return=b,m;case Un:var _=m._init;return p(b,_(m._payload),g)}if(Zr(m)||Fr(m))return m=Eo(m,b.mode,g,null),m.return=b,m;pi(b,m)}return null}function f(b,m,g,_){var x=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(b,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ti:return g.key===x?c(b,m,g,_):null;case Ko:return g.key===x?l(b,m,g,_):null;case Un:return x=g._init,f(b,m,x(g._payload),_)}if(Zr(g)||Fr(g))return x!==null?null:d(b,m,g,_,null);pi(b,g)}return null}function h(b,m,g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return b=b.get(g)||null,s(m,b,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ti:return b=b.get(_.key===null?g:_.key)||null,c(m,b,_,x);case Ko:return b=b.get(_.key===null?g:_.key)||null,l(m,b,_,x);case Un:var w=_._init;return h(b,m,g,w(_._payload),x)}if(Zr(_)||Fr(_))return b=b.get(g)||null,d(m,b,_,x,null);pi(m,_)}return null}function v(b,m,g,_){for(var x=null,w=null,A=m,R=m=0,j=null;A!==null&&R<g.length;R++){A.index>R?(j=A,A=null):j=A.sibling;var E=f(b,A,g[R],_);if(E===null){A===null&&(A=j);break}e&&A&&E.alternate===null&&t(b,A),m=a(E,m,R),w===null?x=E:w.sibling=E,w=E,A=j}if(R===g.length)return n(b,A),ze&&_o(b,R),x;if(A===null){for(;R<g.length;R++)A=p(b,g[R],_),A!==null&&(m=a(A,m,R),w===null?x=A:w.sibling=A,w=A);return ze&&_o(b,R),x}for(A=o(b,A);R<g.length;R++)j=h(A,b,R,g[R],_),j!==null&&(e&&j.alternate!==null&&A.delete(j.key===null?R:j.key),m=a(j,m,R),w===null?x=j:w.sibling=j,w=j);return e&&A.forEach(function(N){return t(b,N)}),ze&&_o(b,R),x}function k(b,m,g,_){var x=Fr(g);if(typeof x!="function")throw Error(W(150));if(g=x.call(g),g==null)throw Error(W(151));for(var w=x=null,A=m,R=m=0,j=null,E=g.next();A!==null&&!E.done;R++,E=g.next()){A.index>R?(j=A,A=null):j=A.sibling;var N=f(b,A,E.value,_);if(N===null){A===null&&(A=j);break}e&&A&&N.alternate===null&&t(b,A),m=a(N,m,R),w===null?x=N:w.sibling=N,w=N,A=j}if(E.done)return n(b,A),ze&&_o(b,R),x;if(A===null){for(;!E.done;R++,E=g.next())E=p(b,E.value,_),E!==null&&(m=a(E,m,R),w===null?x=E:w.sibling=E,w=E);return ze&&_o(b,R),x}for(A=o(b,A);!E.done;R++,E=g.next())E=h(A,b,R,E.value,_),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?R:E.key),m=a(E,m,R),w===null?x=E:w.sibling=E,w=E);return e&&A.forEach(function(F){return t(b,F)}),ze&&_o(b,R),x}function T(b,m,g,_){if(typeof g=="object"&&g!==null&&g.type===Qo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ti:e:{for(var x=g.key,w=m;w!==null;){if(w.key===x){if(x=g.type,x===Qo){if(w.tag===7){n(b,w.sibling),m=r(w,g.props.children),m.return=b,b=m;break e}}else if(w.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Un&&xf(x)===w.type){n(b,w.sibling),m=r(w,g.props),m.ref=Br(b,w,g),m.return=b,b=m;break e}n(b,w);break}else t(b,w);w=w.sibling}g.type===Qo?(m=Eo(g.props.children,b.mode,_,g.key),m.return=b,b=m):(_=Ii(g.type,g.key,g.props,null,b.mode,_),_.ref=Br(b,m,g),_.return=b,b=_)}return i(b);case Ko:e:{for(w=g.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(b,m.sibling),m=r(m,g.children||[]),m.return=b,b=m;break e}else{n(b,m);break}else t(b,m);m=m.sibling}m=Ss(g,b.mode,_),m.return=b,b=m}return i(b);case Un:return w=g._init,T(b,m,w(g._payload),_)}if(Zr(g))return v(b,m,g,_);if(Fr(g))return k(b,m,g,_);pi(b,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(b,m.sibling),m=r(m,g),m.return=b,b=m):(n(b,m),m=ws(g,b.mode,_),m.return=b,b=m),i(b)):n(b,m)}return T}var yr=H_(!0),W_=H_(!1),Wa={},pn=oo(Wa),Aa=oo(Wa),Pa=oo(Wa);function So(e){if(e===Wa)throw Error(W(174));return e}function Ad(e,t){switch(Ae(Pa,t),Ae(Aa,e),Ae(pn,Wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jc(t,e)}De(pn),Ae(pn,t)}function kr(){De(pn),De(Aa),De(Pa)}function B_(e){So(Pa.current);var t=So(pn.current),n=Jc(t,e.type);t!==n&&(Ae(Aa,e),Ae(pn,n))}function Pd(e){Aa.current===e&&(De(pn),De(Aa))}var Ie=oo(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gs=[];function Rd(){for(var e=0;e<gs.length;e++)gs[e]._workInProgressVersionPrimary=null;gs.length=0}var Di=Rn.ReactCurrentDispatcher,_s=Rn.ReactCurrentBatchConfig,Po=0,Fe=null,Qe=null,Xe=null,al=!1,ua=!1,Ra=0,U0=0;function ot(){throw Error(W(321))}function Md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function Dd(e,t,n,o,r,a){if(Po=a,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Di.current=e===null||e.memoizedState===null?B0:V0,e=n(o,r),ua){a=0;do{if(ua=!1,Ra=0,25<=a)throw Error(W(301));a+=1,Xe=Qe=null,t.updateQueue=null,Di.current=$0,e=n(o,r)}while(ua)}if(Di.current=il,t=Qe!==null&&Qe.next!==null,Po=0,Xe=Qe=Fe=null,al=!1,t)throw Error(W(300));return e}function jd(){var e=Ra!==0;return Ra=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Fe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Wt(){if(Qe===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Xe===null?Fe.memoizedState:Xe.next;if(t!==null)Xe=t,Qe=e;else{if(e===null)throw Error(W(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Xe===null?Fe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ma(e,t){return typeof t=="function"?t(e):t}function bs(e){var t=Wt(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var o=Qe,r=o.baseQueue,a=n.pending;if(a!==null){if(r!==null){var i=r.next;r.next=a.next,a.next=i}o.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,o=o.baseState;var s=i=null,c=null,l=a;do{var d=l.lane;if((Po&d)===d)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),o=l.hasEagerState?l.eagerState:e(o,l.action);else{var p={lane:d,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(s=c=p,i=o):c=c.next=p,Fe.lanes|=d,Ro|=d}l=l.next}while(l!==null&&l!==a);c===null?i=o:c.next=s,nn(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do a=r.lane,Fe.lanes|=a,Ro|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vs(e){var t=Wt(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do a=e(a,i.action),i=i.next;while(i!==r);nn(a,t.memoizedState)||(vt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function V_(){}function $_(e,t){var n=Fe,o=Wt(),r=t(),a=!nn(o.memoizedState,r);if(a&&(o.memoizedState=r,vt=!0),o=o.queue,zd(K_.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Da(9,G_.bind(null,n,o,r,t),void 0,null),Je===null)throw Error(W(349));Po&30||q_(n,t,r)}return r}function q_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function G_(e,t,n,o){t.value=n,t.getSnapshot=o,Q_(t)&&Y_(e)}function K_(e,t,n){return n(function(){Q_(t)&&Y_(e)})}function Q_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function Y_(e){var t=An(e,1);t!==null&&en(t,e,1,-1)}function Cf(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},t.queue=e,e=e.dispatch=W0.bind(null,Fe,e),[t.memoizedState,e]}function Da(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function X_(){return Wt().memoizedState}function ji(e,t,n,o){var r=an();Fe.flags|=e,r.memoizedState=Da(1|t,n,void 0,o===void 0?null:o)}function Pl(e,t,n,o){var r=Wt();o=o===void 0?null:o;var a=void 0;if(Qe!==null){var i=Qe.memoizedState;if(a=i.destroy,o!==null&&Md(o,i.deps)){r.memoizedState=Da(t,n,a,o);return}}Fe.flags|=e,r.memoizedState=Da(1|t,n,a,o)}function Ef(e,t){return ji(8390656,8,e,t)}function zd(e,t){return Pl(2048,8,e,t)}function J_(e,t){return Pl(4,2,e,t)}function Z_(e,t){return Pl(4,4,e,t)}function eb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tb(e,t,n){return n=n!=null?n.concat([e]):null,Pl(4,4,eb.bind(null,t,e),n)}function Od(){}function nb(e,t){var n=Wt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Md(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function ob(e,t){var n=Wt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Md(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function rb(e,t,n){return Po&21?(nn(n,t)||(n=l_(),Fe.lanes|=n,Ro|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function N0(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var o=_s.transition;_s.transition={};try{e(!1),t()}finally{we=n,_s.transition=o}}function ab(){return Wt().memoizedState}function H0(e,t,n){var o=Xn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},ib(e))lb(t,n);else if(n=I_(e,t,n,o),n!==null){var r=dt();en(n,e,o,r),sb(n,t,o)}}function W0(e,t,n){var o=Xn(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(ib(e))lb(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(r.hasEagerState=!0,r.eagerState=s,nn(s,i)){var c=t.interleaved;c===null?(r.next=r,Ed(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}n=I_(e,t,r,o),n!==null&&(r=dt(),en(n,e,o,r),sb(n,t,o))}}function ib(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function lb(e,t){ua=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sb(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,pd(e,n)}}var il={readContext:Ht,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},B0={readContext:Ht,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Ef,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,eb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return ji(4,2,e,t)},useMemo:function(e,t){var n=an();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=an();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=H0.bind(null,Fe,e),[o.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:Cf,useDebugValue:Od,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=Cf(!1),t=e[0];return e=N0.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Fe,r=an();if(ze){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),Je===null)throw Error(W(349));Po&30||q_(o,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,Ef(K_.bind(null,o,a,e),[e]),o.flags|=2048,Da(9,G_.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=an(),t=Je.identifierPrefix;if(ze){var n=Sn,o=wn;n=(o&~(1<<32-Zt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ra++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V0={readContext:Ht,useCallback:nb,useContext:Ht,useEffect:zd,useImperativeHandle:tb,useInsertionEffect:J_,useLayoutEffect:Z_,useMemo:ob,useReducer:bs,useRef:X_,useState:function(){return bs(Ma)},useDebugValue:Od,useDeferredValue:function(e){var t=Wt();return rb(t,Qe.memoizedState,e)},useTransition:function(){var e=bs(Ma)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:V_,useSyncExternalStore:$_,useId:ab,unstable_isNewReconciler:!1},$0={readContext:Ht,useCallback:nb,useContext:Ht,useEffect:zd,useImperativeHandle:tb,useInsertionEffect:J_,useLayoutEffect:Z_,useMemo:ob,useReducer:vs,useRef:X_,useState:function(){return vs(Ma)},useDebugValue:Od,useDeferredValue:function(e){var t=Wt();return Qe===null?t.memoizedState=e:rb(t,Qe.memoizedState,e)},useTransition:function(){var e=vs(Ma)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:V_,useSyncExternalStore:$_,useId:ab,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",o=t;do n+=vk(o),o=o.return;while(o);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ku(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function cb(e,t,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){sl||(sl=!0,Mu=o),ku(e,t)},n}function ub(e,t,n){n=xn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){ku(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ku(e,t),typeof o!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Tf(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new q0;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=iw.bind(null,e,t,n),t.then(e,e))}function Af(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pf(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xn(-1,1),t.tag=2,Qn(n,t,1))),n.lanes|=1),e)}var G0=Rn.ReactCurrentOwner,vt=!1;function ct(e,t,n,o){t.child=e===null?W_(t,null,n,o):yr(t,e.child,n,o)}function Rf(e,t,n,o,r){n=n.render;var a=t.ref;return fr(t,r),o=Dd(e,t,n,o,a,r),n=jd(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Pn(e,t,r)):(ze&&n&&yd(t),t.flags|=1,ct(e,t,o,r),t.child)}function Mf(e,t,n,o,r){if(e===null){var a=n.type;return typeof a=="function"&&!Bd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,db(e,t,a,o,r)):(e=Ii(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(i,o)&&e.ref===t.ref)return Pn(e,t,r)}return t.flags|=1,e=Jn(a,o),e.ref=t.ref,e.return=t,t.child=e}function db(e,t,n,o,r){if(e!==null){var a=e.memoizedProps;if(xa(a,o)&&e.ref===t.ref)if(vt=!1,t.pendingProps=o=a,(e.lanes&r)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,Pn(e,t,r)}return wu(e,t,n,o,r)}function pb(e,t,n){var o=t.pendingProps,r=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ar,Ct),Ct|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(ar,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,Ae(ar,Ct),Ct|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,Ae(ar,Ct),Ct|=o;return ct(e,t,r,n),t.child}function fb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wu(e,t,n,o,r){var a=kt(n)?To:lt.current;return a=br(t,a),fr(t,r),n=Dd(e,t,n,o,a,r),o=jd(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Pn(e,t,r)):(ze&&o&&yd(t),t.flags|=1,ct(e,t,n,r),t.child)}function Df(e,t,n,o,r){if(kt(n)){var a=!0;Ji(t)}else a=!1;if(fr(t,r),t.stateNode===null)zi(e,t),N_(t,n,o),yu(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var c=i.context,l=n.contextType;typeof l=="object"&&l!==null?l=Ht(l):(l=kt(n)?To:lt.current,l=br(t,l));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==o||c!==l)&&Sf(t,i,o,l),Nn=!1;var f=t.memoizedState;i.state=f,ol(t,o,i,r),c=t.memoizedState,s!==o||f!==c||yt.current||Nn?(typeof d=="function"&&(vu(t,n,d,o),c=t.memoizedState),(s=Nn||wf(t,n,s,o,f,c,l))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),i.props=o,i.state=c,i.context=l,o=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,F_(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Qt(t.type,s),i.props=l,p=t.pendingProps,f=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ht(c):(c=kt(n)?To:lt.current,c=br(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||f!==c)&&Sf(t,i,o,c),Nn=!1,f=t.memoizedState,i.state=f,ol(t,o,i,r);var v=t.memoizedState;s!==p||f!==v||yt.current||Nn?(typeof h=="function"&&(vu(t,n,h,o),v=t.memoizedState),(l=Nn||wf(t,n,l,o,f,v,c)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),i.props=o,i.state=v,i.context=c,o=l):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return Su(e,t,n,o,a,r)}function Su(e,t,n,o,r,a){fb(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&_f(t,n,!1),Pn(e,t,a);o=t.stateNode,G0.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=yr(t,e.child,null,a),t.child=yr(t,null,s,a)):ct(e,t,s,a),t.memoizedState=o.state,r&&_f(t,n,!0),t.child}function hb(e){var t=e.stateNode;t.pendingContext?gf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gf(e,t.context,!1),Ad(e,t.containerInfo)}function jf(e,t,n,o,r){return vr(),wd(r),t.flags|=256,ct(e,t,n,o),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function mb(e,t,n){var o=t.pendingProps,r=Ie.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Ae(Ie,r&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,a?(o=t.mode,a=t.child,i={mode:"hidden",children:i},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Dl(i,o,0,null),e=Eo(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cu(n),t.memoizedState=xu,e):Ld(t,i));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return K0(e,t,i,o,s,r,n);if(a){a=o.fallback,i=t.mode,r=e.child,s=r.sibling;var c={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Jn(r,c),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=Jn(s,a):(a=Eo(a,i,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,i=e.child.memoizedState,i=i===null?Cu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=xu,o}return a=e.child,e=a.sibling,o=Jn(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ld(e,t){return t=Dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,o){return o!==null&&wd(o),yr(t,e.child,null,n),e=Ld(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n,o,r,a,i){if(n)return t.flags&256?(t.flags&=-257,o=ys(Error(W(422))),fi(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,r=t.mode,o=Dl({mode:"visible",children:o.children},r,0,null),a=Eo(a,r,i,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&yr(t,e.child,null,i),t.child.memoizedState=Cu(i),t.memoizedState=xu,a);if(!(t.mode&1))return fi(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,a=Error(W(419)),o=ys(a,o,void 0),fi(e,t,i,o)}if(s=(i&e.childLanes)!==0,vt||s){if(o=Je,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,An(e,r),en(o,e,r,-1))}return Wd(),o=ys(Error(W(421))),fi(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=lw.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,Et=Kn(r.nextSibling),Tt=t,ze=!0,Jt=null,e!==null&&(Ot[Lt++]=wn,Ot[Lt++]=Sn,Ot[Lt++]=Ao,wn=e.id,Sn=e.overflow,Ao=t),t=Ld(t,o.children),t.flags|=4096,t)}function zf(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),bu(e.return,t,n)}function ks(e,t,n,o,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=r)}function gb(e,t,n){var o=t.pendingProps,r=o.revealOrder,a=o.tail;if(ct(e,t,o.children,n),o=Ie.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zf(e,n,t);else if(e.tag===19)zf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ae(Ie,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),ks(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&rl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}ks(t,!0,n,null,a);break;case"together":ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ro|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Q0(e,t,n){switch(t.tag){case 3:hb(t),vr();break;case 5:B_(t);break;case 1:kt(t.type)&&Ji(t);break;case 4:Ad(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;Ae(tl,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ae(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?mb(e,t,n):(Ae(Ie,Ie.current&1),e=Pn(e,t,n),e!==null?e.sibling:null);Ae(Ie,Ie.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return gb(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ae(Ie,Ie.current),o)break;return null;case 22:case 23:return t.lanes=0,pb(e,t,n)}return Pn(e,t,n)}var _b,Eu,bb,vb;_b=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};bb=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,So(pn.current);var a=null;switch(n){case"input":r=Kc(e,r),o=Kc(e,o),a=[];break;case"select":r=Ue({},r,{value:void 0}),o=Ue({},o,{value:void 0}),a=[];break;case"textarea":r=Xc(e,r),o=Xc(e,o),a=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Yi)}Zc(n,o);var i;n=null;for(l in r)if(!o.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var s=r[l];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_a.hasOwnProperty(l)?a||(a=[]):(a=a||[]).push(l,null));for(l in o){var c=o[l];if(s=r!=null?r[l]:void 0,o.hasOwnProperty(l)&&c!==s&&(c!=null||s!=null))if(l==="style")if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(a=a||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(_a.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&Me("scroll",e),a||s===c||(a=[])):(a=a||[]).push(l,c))}n&&(a=a||[]).push("style",n);var l=a;(t.updateQueue=l)&&(t.flags|=4)}};vb=function(e,t,n,o){n!==o&&(t.flags|=4)};function Vr(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Y0(e,t,n){var o=t.pendingProps;switch(kd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return kt(t.type)&&Xi(),rt(t),null;case 3:return o=t.stateNode,kr(),De(yt),De(lt),Rd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(zu(Jt),Jt=null))),Eu(e,t),rt(t),null;case 5:Pd(t);var r=So(Pa.current);if(n=t.type,e!==null&&t.stateNode!=null)bb(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(W(166));return rt(t),null}if(e=So(pn.current),di(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[cn]=t,o[Ta]=a,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",o),Me("close",o);break;case"iframe":case"object":case"embed":Me("load",o);break;case"video":case"audio":for(r=0;r<ta.length;r++)Me(ta[r],o);break;case"source":Me("error",o);break;case"img":case"image":case"link":Me("error",o),Me("load",o);break;case"details":Me("toggle",o);break;case"input":Wp(o,a),Me("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Me("invalid",o);break;case"textarea":Vp(o,a),Me("invalid",o)}Zc(n,a),r=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?o.textContent!==s&&(a.suppressHydrationWarning!==!0&&ui(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ui(o.textContent,s,e),r=["children",""+s]):_a.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Me("scroll",o)}switch(n){case"input":ni(o),Bp(o,a,!0);break;case"textarea":ni(o),$p(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Yi)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[cn]=t,e[Ta]=o,_b(e,t,!1,!1),t.stateNode=e;e:{switch(i=eu(n,o),n){case"dialog":Me("cancel",e),Me("close",e),r=o;break;case"iframe":case"object":case"embed":Me("load",e),r=o;break;case"video":case"audio":for(r=0;r<ta.length;r++)Me(ta[r],e);r=o;break;case"source":Me("error",e),r=o;break;case"img":case"image":case"link":Me("error",e),Me("load",e),r=o;break;case"details":Me("toggle",e),r=o;break;case"input":Wp(e,o),r=Kc(e,o),Me("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=Ue({},o,{value:void 0}),Me("invalid",e);break;case"textarea":Vp(e,o),r=Xc(e,o),Me("invalid",e);break;default:r=o}Zc(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="style"?Qg(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Gg(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ba(e,c):typeof c=="number"&&ba(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(_a.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Me("scroll",e):c!=null&&id(e,a,c,i))}switch(n){case"input":ni(e),Bp(e,o,!1);break;case"textarea":ni(e),$p(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Zn(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?cr(e,!!o.multiple,a,!1):o.defaultValue!=null&&cr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)vb(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(W(166));if(n=So(Pa.current),So(pn.current),di(t)){if(o=t.stateNode,n=t.memoizedProps,o[cn]=t,(a=o.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:ui(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[cn]=t,t.stateNode=o}return rt(t),null;case 13:if(De(Ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&Et!==null&&t.mode&1&&!(t.flags&128))L_(),vr(),t.flags|=98560,a=!1;else if(a=di(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(W(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(W(317));a[cn]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else Jt!==null&&(zu(Jt),Jt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?Ye===0&&(Ye=3):Wd())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return kr(),Eu(e,t),e===null&&Ca(t.stateNode.containerInfo),rt(t),null;case 10:return Cd(t.type._context),rt(t),null;case 17:return kt(t.type)&&Xi(),rt(t),null;case 19:if(De(Ie),a=t.memoizedState,a===null)return rt(t),null;if(o=(t.flags&128)!==0,i=a.rendering,i===null)if(o)Vr(a,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=rl(e),i!==null){for(t.flags|=128,Vr(a,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&Be()>Sr&&(t.flags|=128,o=!0,Vr(a,!1),t.lanes=4194304)}else{if(!o)if(e=rl(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ze)return rt(t),null}else 2*Be()-a.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,o=!0,Vr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Be(),t.sibling=null,n=Ie.current,Ae(Ie,o?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return Hd(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ct&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function X0(e,t){switch(kd(t),t.tag){case 1:return kt(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),De(yt),De(lt),Rd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pd(t),null;case 13:if(De(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Ie),null;case 4:return kr(),null;case 10:return Cd(t.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var hi=!1,at=!1,J0=typeof WeakSet=="function"?WeakSet:Set,K=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ne(e,t,o)}else n.current=null}function Tu(e,t,n){try{n()}catch(o){Ne(e,t,o)}}var Of=!1;function Z0(e,t){if(uu=Gi,e=S_(),vd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,c=-1,l=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||r!==0&&p.nodeType!==3||(s=i+r),p!==a||o!==0&&p.nodeType!==3||(c=i+o),p.nodeType===3&&(i+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++l===r&&(s=i),f===a&&++d===o&&(c=i),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},Gi=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,T=v.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?k:Qt(t.type,k),T);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(_){Ne(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return v=Of,Of=!1,v}function da(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Tu(t,n,a)}r=r.next}while(r!==o)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Au(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yb(e){var t=e.alternate;t!==null&&(e.alternate=null,yb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[cn],delete t[Ta],delete t[hu],delete t[O0],delete t[L0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kb(e){return e.tag===5||e.tag===3||e.tag===4}function Lf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(o!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}function Ru(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ru(e,t,n),e=e.sibling;e!==null;)Ru(e,t,n),e=e.sibling}var Ze=null,Yt=!1;function Ln(e,t,n){for(n=n.child;n!==null;)wb(e,t,n),n=n.sibling}function wb(e,t,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:at||rr(n,t);case 6:var o=Ze,r=Yt;Ze=null,Ln(e,t,n),Ze=o,Yt=r,Ze!==null&&(Yt?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Yt?(e=Ze,n=n.stateNode,e.nodeType===8?hs(e.parentNode,n):e.nodeType===1&&hs(e,n),wa(e)):hs(Ze,n.stateNode));break;case 4:o=Ze,r=Yt,Ze=n.stateNode.containerInfo,Yt=!0,Ln(e,t,n),Ze=o,Yt=r;break;case 0:case 11:case 14:case 15:if(!at&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var a=r,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&Tu(n,t,i),r=r.next}while(r!==o)}Ln(e,t,n);break;case 1:if(!at&&(rr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){Ne(n,t,s)}Ln(e,t,n);break;case 21:Ln(e,t,n);break;case 22:n.mode&1?(at=(o=at)||n.memoizedState!==null,Ln(e,t,n),at=o):Ln(e,t,n);break;default:Ln(e,t,n)}}function If(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new J0),t.forEach(function(o){var r=sw.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ze=s.stateNode,Yt=!1;break e;case 3:Ze=s.stateNode.containerInfo,Yt=!0;break e;case 4:Ze=s.stateNode.containerInfo,Yt=!0;break e}s=s.return}if(Ze===null)throw Error(W(160));wb(a,i,r),Ze=null,Yt=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){Ne(r,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sb(t,e),t=t.sibling}function Sb(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),rn(e),o&4){try{da(3,e,e.return),Rl(3,e)}catch(k){Ne(e,e.return,k)}try{da(5,e,e.return)}catch(k){Ne(e,e.return,k)}}break;case 1:Kt(t,e),rn(e),o&512&&n!==null&&rr(n,n.return);break;case 5:if(Kt(t,e),rn(e),o&512&&n!==null&&rr(n,n.return),e.flags&32){var r=e.stateNode;try{ba(r,"")}catch(k){Ne(e,e.return,k)}}if(o&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Vg(r,a),eu(s,i);var l=eu(s,a);for(i=0;i<c.length;i+=2){var d=c[i],p=c[i+1];d==="style"?Qg(r,p):d==="dangerouslySetInnerHTML"?Gg(r,p):d==="children"?ba(r,p):id(r,d,p,l)}switch(s){case"input":Qc(r,a);break;case"textarea":$g(r,a);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?cr(r,!!a.multiple,h,!1):f!==!!a.multiple&&(a.defaultValue!=null?cr(r,!!a.multiple,a.defaultValue,!0):cr(r,!!a.multiple,a.multiple?[]:"",!1))}r[Ta]=a}catch(k){Ne(e,e.return,k)}}break;case 6:if(Kt(t,e),rn(e),o&4){if(e.stateNode===null)throw Error(W(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(k){Ne(e,e.return,k)}}break;case 3:if(Kt(t,e),rn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(t.containerInfo)}catch(k){Ne(e,e.return,k)}break;case 4:Kt(t,e),rn(e);break;case 13:Kt(t,e),rn(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Ud=Be())),o&4&&If(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(at=(l=at)||d,Kt(t,e),at=l):Kt(t,e),rn(e),o&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(p=K=d;K!==null;){switch(f=K,h=f.child,f.tag){case 0:case 11:case 14:case 15:da(4,f,f.return);break;case 1:rr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){Ne(o,n,k)}}break;case 5:rr(f,f.return);break;case 22:if(f.memoizedState!==null){Uf(p);continue}}h!==null?(h.return=f,K=h):Uf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,l?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Kg("display",i))}catch(k){Ne(e,e.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(k){Ne(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Kt(t,e),rn(e),o&4&&If(e);break;case 21:break;default:Kt(t,e),rn(e)}}function rn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kb(n)){var o=n;break e}n=n.return}throw Error(W(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(ba(r,""),o.flags&=-33);var a=Lf(e);Ru(e,a,r);break;case 3:case 4:var i=o.stateNode.containerInfo,s=Lf(e);Pu(e,s,i);break;default:throw Error(W(161))}}catch(c){Ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ew(e,t,n){K=e,xb(e)}function xb(e,t,n){for(var o=(e.mode&1)!==0;K!==null;){var r=K,a=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||hi;if(!i){var s=r.alternate,c=s!==null&&s.memoizedState!==null||at;s=hi;var l=at;if(hi=i,(at=c)&&!l)for(K=r;K!==null;)i=K,c=i.child,i.tag===22&&i.memoizedState!==null?Nf(r):c!==null?(c.return=i,K=c):Nf(r);for(;a!==null;)K=a,xb(a),a=a.sibling;K=r,hi=s,at=l}Ff(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,K=a):Ff(e)}}function Ff(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||Rl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!at)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&kf(t,a,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kf(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var d=l.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&wa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}at||t.flags&512&&Au(t)}catch(f){Ne(t,t.return,f)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Uf(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Nf(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(c){Ne(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(c){Ne(t,r,c)}}var a=t.return;try{Au(t)}catch(c){Ne(t,a,c)}break;case 5:var i=t.return;try{Au(t)}catch(c){Ne(t,i,c)}}}catch(c){Ne(t,t.return,c)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var tw=Math.ceil,ll=Rn.ReactCurrentDispatcher,Id=Rn.ReactCurrentOwner,Nt=Rn.ReactCurrentBatchConfig,be=0,Je=null,qe=null,et=0,Ct=0,ar=oo(0),Ye=0,ja=null,Ro=0,Ml=0,Fd=0,pa=null,bt=null,Ud=0,Sr=1/0,yn=null,sl=!1,Mu=null,Yn=null,mi=!1,Vn=null,cl=0,fa=0,Du=null,Oi=-1,Li=0;function dt(){return be&6?Be():Oi!==-1?Oi:Oi=Be()}function Xn(e){return e.mode&1?be&2&&et!==0?et&-et:F0.transition!==null?(Li===0&&(Li=l_()),Li):(e=we,e!==0||(e=window.event,e=e===void 0?16:h_(e.type)),e):1}function en(e,t,n,o){if(50<fa)throw fa=0,Du=null,Error(W(185));Ua(e,n,o),(!(be&2)||e!==Je)&&(e===Je&&(!(be&2)&&(Ml|=n),Ye===4&&Wn(e,et)),wt(e,o),n===1&&be===0&&!(t.mode&1)&&(Sr=Be()+500,Tl&&ro()))}function wt(e,t){var n=e.callbackNode;Fk(e,t);var o=qi(e,e===Je?et:0);if(o===0)n!==null&&Kp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Kp(n),t===1)e.tag===0?I0(Hf.bind(null,e)):j_(Hf.bind(null,e)),j0(function(){!(be&6)&&ro()}),n=null;else{switch(s_(o)){case 1:n=dd;break;case 4:n=a_;break;case 16:n=$i;break;case 536870912:n=i_;break;default:n=$i}n=Db(n,Cb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cb(e,t){if(Oi=-1,Li=0,be&6)throw Error(W(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var o=qi(e,e===Je?et:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ul(e,o);else{t=o;var r=be;be|=2;var a=Tb();(Je!==e||et!==t)&&(yn=null,Sr=Be()+500,Co(e,t));do try{rw();break}catch(s){Eb(e,s)}while(1);xd(),ll.current=a,be=r,qe!==null?t=0:(Je=null,et=0,t=Ye)}if(t!==0){if(t===2&&(r=au(e),r!==0&&(o=r,t=ju(e,r))),t===1)throw n=ja,Co(e,0),Wn(e,o),wt(e,Be()),n;if(t===6)Wn(e,o);else{if(r=e.current.alternate,!(o&30)&&!nw(r)&&(t=ul(e,o),t===2&&(a=au(e),a!==0&&(o=a,t=ju(e,a))),t===1))throw n=ja,Co(e,0),Wn(e,o),wt(e,Be()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(W(345));case 2:bo(e,bt,yn);break;case 3:if(Wn(e,o),(o&130023424)===o&&(t=Ud+500-Be(),10<t)){if(qi(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){dt(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=fu(bo.bind(null,e,bt,yn),t);break}bo(e,bt,yn);break;case 4:if(Wn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-Zt(o);a=1<<i,i=t[i],i>r&&(r=i),o&=~a}if(o=r,o=Be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*tw(o/1960))-o,10<o){e.timeoutHandle=fu(bo.bind(null,e,bt,yn),o);break}bo(e,bt,yn);break;case 5:bo(e,bt,yn);break;default:throw Error(W(329))}}}return wt(e,Be()),e.callbackNode===n?Cb.bind(null,e):null}function ju(e,t){var n=pa;return e.current.memoizedState.isDehydrated&&(Co(e,t).flags|=256),e=ul(e,t),e!==2&&(t=bt,bt=n,t!==null&&zu(t)),e}function zu(e){bt===null?bt=e:bt.push.apply(bt,e)}function nw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],a=r.getSnapshot;r=r.value;try{if(!nn(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t){for(t&=~Fd,t&=~Ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Zt(t),o=1<<n;e[n]=-1,t&=~o}}function Hf(e){if(be&6)throw Error(W(327));hr();var t=qi(e,0);if(!(t&1))return wt(e,Be()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var o=au(e);o!==0&&(t=o,n=ju(e,o))}if(n===1)throw n=ja,Co(e,0),Wn(e,t),wt(e,Be()),n;if(n===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bo(e,bt,yn),wt(e,Be()),null}function Nd(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(Sr=Be()+500,Tl&&ro())}}function Mo(e){Vn!==null&&Vn.tag===0&&!(be&6)&&hr();var t=be;be|=1;var n=Nt.transition,o=we;try{if(Nt.transition=null,we=1,e)return e()}finally{we=o,Nt.transition=n,be=t,!(be&6)&&ro()}}function Hd(){Ct=ar.current,De(ar)}function Co(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D0(n)),qe!==null)for(n=qe.return;n!==null;){var o=n;switch(kd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Xi();break;case 3:kr(),De(yt),De(lt),Rd();break;case 5:Pd(o);break;case 4:kr();break;case 13:De(Ie);break;case 19:De(Ie);break;case 10:Cd(o.type._context);break;case 22:case 23:Hd()}n=n.return}if(Je=e,qe=e=Jn(e.current,null),et=Ct=t,Ye=0,ja=null,Fd=Ml=Ro=0,bt=pa=null,wo!==null){for(t=0;t<wo.length;t++)if(n=wo[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,a=n.pending;if(a!==null){var i=a.next;a.next=r,o.next=i}n.pending=o}wo=null}return e}function Eb(e,t){do{var n=qe;try{if(xd(),Di.current=il,al){for(var o=Fe.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}al=!1}if(Po=0,Xe=Qe=Fe=null,ua=!1,Ra=0,Id.current=null,n===null||n.return===null){Ye=1,ja=t,qe=null;break}e:{var a=e,i=n.return,s=n,c=t;if(t=et,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Af(i);if(h!==null){h.flags&=-257,Pf(h,i,s,a,t),h.mode&1&&Tf(a,l,t),t=h,c=l;var v=t.updateQueue;if(v===null){var k=new Set;k.add(c),t.updateQueue=k}else v.add(c);break e}else{if(!(t&1)){Tf(a,l,t),Wd();break e}c=Error(W(426))}}else if(ze&&s.mode&1){var T=Af(i);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Pf(T,i,s,a,t),wd(wr(c,s));break e}}a=c=wr(c,s),Ye!==4&&(Ye=2),pa===null?pa=[a]:pa.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var b=cb(a,c,t);yf(a,b);break e;case 1:s=c;var m=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yn===null||!Yn.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=ub(a,s,t);yf(a,_);break e}}a=a.return}while(a!==null)}Pb(n)}catch(x){t=x,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(1)}function Tb(){var e=ll.current;return ll.current=il,e===null?il:e}function Wd(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(Ro&268435455)&&!(Ml&268435455)||Wn(Je,et)}function ul(e,t){var n=be;be|=2;var o=Tb();(Je!==e||et!==t)&&(yn=null,Co(e,t));do try{ow();break}catch(r){Eb(e,r)}while(1);if(xd(),be=n,ll.current=o,qe!==null)throw Error(W(261));return Je=null,et=0,Ye}function ow(){for(;qe!==null;)Ab(qe)}function rw(){for(;qe!==null&&!Pk();)Ab(qe)}function Ab(e){var t=Mb(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?Pb(e):qe=t,Id.current=null}function Pb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=X0(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,qe=null;return}}else if(n=Y0(n,t,Ct),n!==null){qe=n;return}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ye===0&&(Ye=5)}function bo(e,t,n){var o=we,r=Nt.transition;try{Nt.transition=null,we=1,aw(e,t,n,o)}finally{Nt.transition=r,we=o}return null}function aw(e,t,n,o){do hr();while(Vn!==null);if(be&6)throw Error(W(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Uk(e,a),e===Je&&(qe=Je=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mi||(mi=!0,Db($i,function(){return hr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Nt.transition,Nt.transition=null;var i=we;we=1;var s=be;be|=4,Id.current=null,Z0(e,n),Sb(n,e),C0(du),Gi=!!uu,du=uu=null,e.current=n,ew(n),Rk(),be=s,we=i,Nt.transition=a}else e.current=n;if(mi&&(mi=!1,Vn=e,cl=r),a=e.pendingLanes,a===0&&(Yn=null),jk(n.stateNode),wt(e,Be()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(sl)throw sl=!1,e=Mu,Mu=null,e;return cl&1&&e.tag!==0&&hr(),a=e.pendingLanes,a&1?e===Du?fa++:(fa=0,Du=e):fa=0,ro(),null}function hr(){if(Vn!==null){var e=s_(cl),t=Nt.transition,n=we;try{if(Nt.transition=null,we=16>e?16:e,Vn===null)var o=!1;else{if(e=Vn,Vn=null,cl=0,be&6)throw Error(W(331));var r=be;for(be|=4,K=e.current;K!==null;){var a=K,i=a.child;if(K.flags&16){var s=a.deletions;if(s!==null){for(var c=0;c<s.length;c++){var l=s[c];for(K=l;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:da(8,d,a)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var f=d.sibling,h=d.return;if(yb(d),d===l){K=null;break}if(f!==null){f.return=h,K=f;break}K=h}}}var v=a.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}K=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,K=i;else e:for(;K!==null;){if(a=K,a.flags&2048)switch(a.tag){case 0:case 11:case 15:da(9,a,a.return)}var b=a.sibling;if(b!==null){b.return=a.return,K=b;break e}K=a.return}}var m=e.current;for(K=m;K!==null;){i=K;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,K=g;else e:for(i=m;K!==null;){if(s=K,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Rl(9,s)}}catch(x){Ne(s,s.return,x)}if(s===i){K=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,K=_;break e}K=s.return}}if(be=r,ro(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(wl,e)}catch{}o=!0}return o}finally{we=n,Nt.transition=t}}return!1}function Wf(e,t,n){t=wr(n,t),t=cb(e,t,1),e=Qn(e,t,1),t=dt(),e!==null&&(Ua(e,1,t),wt(e,t))}function Ne(e,t,n){if(e.tag===3)Wf(e,e,n);else for(;t!==null;){if(t.tag===3){Wf(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yn===null||!Yn.has(o))){e=wr(n,e),e=ub(t,e,1),t=Qn(t,e,1),e=dt(),t!==null&&(Ua(t,1,e),wt(t,e));break}}t=t.return}}function iw(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(et&n)===n&&(Ye===4||Ye===3&&(et&130023424)===et&&500>Be()-Ud?Co(e,0):Fd|=n),wt(e,t)}function Rb(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=dt();e=An(e,t),e!==null&&(Ua(e,t,n),wt(e,n))}function lw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rb(e,n)}function sw(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(W(314))}o!==null&&o.delete(t),Rb(e,n)}var Mb;Mb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,Q0(e,t,n);vt=!!(e.flags&131072)}else vt=!1,ze&&t.flags&1048576&&z_(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;zi(e,t),e=t.pendingProps;var r=br(t,lt.current);fr(t,n),r=Dd(null,t,o,e,r,n);var a=jd();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(o)?(a=!0,Ji(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Td(t),r.updater=Al,t.stateNode=r,r._reactInternals=t,yu(t,o,e,n),t=Su(null,t,o,!0,a,n)):(t.tag=0,ze&&a&&yd(t),ct(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=uw(o),e=Qt(o,e),r){case 0:t=wu(null,t,o,e,n);break e;case 1:t=Df(null,t,o,e,n);break e;case 11:t=Rf(null,t,o,e,n);break e;case 14:t=Mf(null,t,o,Qt(o.type,e),n);break e}throw Error(W(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Qt(o,r),wu(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Qt(o,r),Df(e,t,o,r,n);case 3:e:{if(hb(t),e===null)throw Error(W(387));o=t.pendingProps,a=t.memoizedState,r=a.element,F_(e,t),ol(t,o,null,n);var i=t.memoizedState;if(o=i.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=wr(Error(W(423)),t),t=jf(e,t,o,n,r);break e}else if(o!==r){r=wr(Error(W(424)),t),t=jf(e,t,o,n,r);break e}else for(Et=Kn(t.stateNode.containerInfo.firstChild),Tt=t,ze=!0,Jt=null,n=W_(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),o===r){t=Pn(e,t,n);break e}ct(e,t,o,n)}t=t.child}return t;case 5:return B_(t),e===null&&_u(t),o=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,pu(o,r)?i=null:a!==null&&pu(o,a)&&(t.flags|=32),fb(e,t),ct(e,t,i,n),t.child;case 6:return e===null&&_u(t),null;case 13:return mb(e,t,n);case 4:return Ad(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=yr(t,null,o,n):ct(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Qt(o,r),Rf(e,t,o,r,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,a=t.memoizedProps,i=r.value,Ae(tl,o._currentValue),o._currentValue=i,a!==null)if(nn(a.value,i)){if(a.children===r.children&&!yt.current){t=Pn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var c=s.firstContext;c!==null;){if(c.context===o){if(a.tag===1){c=xn(-1,n&-n),c.tag=2;var l=a.updateQueue;if(l!==null){l=l.shared;var d=l.pending;d===null?c.next=c:(c.next=d.next,d.next=c),l.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),bu(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(W(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),bu(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ct(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,fr(t,n),r=Ht(r),o=o(r),t.flags|=1,ct(e,t,o,n),t.child;case 14:return o=t.type,r=Qt(o,t.pendingProps),r=Qt(o.type,r),Mf(e,t,o,r,n);case 15:return db(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Qt(o,r),zi(e,t),t.tag=1,kt(o)?(e=!0,Ji(t)):e=!1,fr(t,n),N_(t,o,r),yu(t,o,r,n),Su(null,t,o,!0,e,n);case 19:return gb(e,t,n);case 22:return pb(e,t,n)}throw Error(W(156,t.tag))};function Db(e,t){return r_(e,t)}function cw(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,o){return new cw(e,t,n,o)}function Bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uw(e){if(typeof e=="function")return Bd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sd)return 11;if(e===cd)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ii(e,t,n,o,r,a){var i=2;if(o=e,typeof e=="function")Bd(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Qo:return Eo(n.children,r,a,t);case ld:i=8,r|=8;break;case Vc:return e=Ut(12,n,t,r|2),e.elementType=Vc,e.lanes=a,e;case $c:return e=Ut(13,n,t,r),e.elementType=$c,e.lanes=a,e;case qc:return e=Ut(19,n,t,r),e.elementType=qc,e.lanes=a,e;case Hg:return Dl(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ug:i=10;break e;case Ng:i=9;break e;case sd:i=11;break e;case cd:i=14;break e;case Un:i=16,o=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=Ut(i,n,t,r),t.elementType=e,t.type=o,t.lanes=a,t}function Eo(e,t,n,o){return e=Ut(7,e,o,t),e.lanes=n,e}function Dl(e,t,n,o){return e=Ut(22,e,o,t),e.elementType=Hg,e.lanes=n,e.stateNode={isHidden:!1},e}function ws(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Ss(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dw(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=os(0),this.expirationTimes=os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vd(e,t,n,o,r,a,i,s,c){return e=new dw(e,t,n,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ut(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(a),e}function pw(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ko,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function jb(e){if(!e)return eo;e=e._reactInternals;e:{if(Lo(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var n=e.type;if(kt(n))return D_(e,n,t)}return t}function zb(e,t,n,o,r,a,i,s,c){return e=Vd(n,o,!0,e,r,a,i,s,c),e.context=jb(null),n=e.current,o=dt(),r=Xn(n),a=xn(o,r),a.callback=t??null,Qn(n,a,r),e.current.lanes=r,Ua(e,r,o),wt(e,o),e}function jl(e,t,n,o){var r=t.current,a=dt(),i=Xn(r);return n=jb(n),t.context===null?t.context=n:t.pendingContext=n,t=xn(a,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Qn(r,t,i),e!==null&&(en(e,r,i,a),Mi(e,r,i)),i}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $d(e,t){Bf(e,t),(e=e.alternate)&&Bf(e,t)}function fw(){return null}var Ob=typeof reportError=="function"?reportError:function(e){console.error(e)};function qd(e){this._internalRoot=e}zl.prototype.render=qd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));jl(e,t,null,null)};zl.prototype.unmount=qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mo(function(){jl(null,e,null,null)}),t[Tn]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=d_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&f_(e)}};function Gd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function hw(e,t,n,o,r){if(r){if(typeof o=="function"){var a=o;o=function(){var l=dl(i);a.call(l)}}var i=zb(t,o,e,0,null,!1,!1,"",Vf);return e._reactRootContainer=i,e[Tn]=i.current,Ca(e.nodeType===8?e.parentNode:e),Mo(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var l=dl(c);s.call(l)}}var c=Vd(e,0,!1,null,null,!1,!1,"",Vf);return e._reactRootContainer=c,e[Tn]=c.current,Ca(e.nodeType===8?e.parentNode:e),Mo(function(){jl(t,c,n,o)}),c}function Ll(e,t,n,o,r){var a=n._reactRootContainer;if(a){var i=a;if(typeof r=="function"){var s=r;r=function(){var c=dl(i);s.call(c)}}jl(t,i,e,r)}else i=hw(n,t,e,r,o);return dl(i)}c_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ea(t.pendingLanes);n!==0&&(pd(t,n|1),wt(t,Be()),!(be&6)&&(Sr=Be()+500,ro()))}break;case 13:Mo(function(){var o=An(e,1);if(o!==null){var r=dt();en(o,e,1,r)}}),$d(e,1)}};fd=function(e){if(e.tag===13){var t=An(e,134217728);if(t!==null){var n=dt();en(t,e,134217728,n)}$d(e,134217728)}};u_=function(e){if(e.tag===13){var t=Xn(e),n=An(e,t);if(n!==null){var o=dt();en(n,e,t,o)}$d(e,t)}};d_=function(){return we};p_=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};nu=function(e,t,n){switch(t){case"input":if(Qc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=El(o);if(!r)throw Error(W(90));Bg(o),Qc(o,r)}}}break;case"textarea":$g(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Jg=Nd;Zg=Mo;var mw={usingClientEntryPoint:!1,Events:[Ha,Zo,El,Yg,Xg,Nd]},$r={findFiberByHostInstance:ko,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gw={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=n_(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{wl=gi.inject(gw),dn=gi}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gd(t))throw Error(W(200));return pw(e,t,null,n)};Rt.createRoot=function(e,t){if(!Gd(e))throw Error(W(299));var n=!1,o="",r=Ob;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Vd(e,1,!1,null,null,n,!1,o,r),e[Tn]=t.current,Ca(e.nodeType===8?e.parentNode:e),new qd(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=n_(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Mo(e)};Rt.hydrate=function(e,t,n){if(!Ol(t))throw Error(W(200));return Ll(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!Gd(e))throw Error(W(405));var o=n!=null&&n.hydratedSources||null,r=!1,a="",i=Ob;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=zb(t,null,e,1,n??null,r,!1,a,i),e[Tn]=t.current,Ca(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new zl(t)};Rt.render=function(e,t,n){if(!Ol(t))throw Error(W(200));return Ll(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(W(40));return e._reactRootContainer?(Mo(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Nd;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ol(n))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return Ll(e,t,n,!1,o)};Rt.version="18.2.0-next-9e3b772b8-20220608";function Lb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lb)}catch(e){console.error(e)}}Lb(),zg.exports=Rt;var Ib=zg.exports;const _i=Bt(Ib);var $f=Ib;Wc.createRoot=$f.createRoot,Wc.hydrateRoot=$f.hydrateRoot;const _w="modulepreload",bw=function(e){return"/"+e},qf={},H=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=bw(a),a in qf)return;qf[a]=!0;const i=a.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!o)for(let d=r.length-1;d>=0;d--){const p=r[d];if(p.href===a&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":_w,i||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),i)return new Promise((d,p)=>{l.addEventListener("load",d),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})};/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Le.apply(this,arguments)}var $e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($e||($e={}));const Gf="popstate";function vw(e){e===void 0&&(e={});function t(r,a){let{pathname:i="/",search:s="",hash:c=""}=fn(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),za("",{pathname:i,search:s,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){let i=r.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let c=r.location.href,l=c.indexOf("#");s=l===-1?c:c.slice(0,l)}return s+"#"+(typeof a=="string"?a:jo(a))}function o(r,a){Do(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return kw(t,n,o,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Do(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yw(){return Math.random().toString(36).substr(2,8)}function Kf(e,t){return{usr:e.state,key:e.key,idx:t}}function za(e,t,n,o){return n===void 0&&(n=null),Le({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fn(t):t,{state:n,key:t&&t.key||o||yw()})}function jo(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function kw(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:a=!1}=o,i=r.history,s=$e.Pop,c=null,l=d();l==null&&(l=0,i.replaceState(Le({},i.state,{idx:l}),""));function d(){return(i.state||{idx:null}).idx}function p(){s=$e.Pop;let T=d(),b=T==null?null:T-l;l=T,c&&c({action:s,location:k.location,delta:b})}function f(T,b){s=$e.Push;let m=za(k.location,T,b);n&&n(m,T),l=d()+1;let g=Kf(m,l),_=k.createHref(m);try{i.pushState(g,"",_)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(_)}a&&c&&c({action:s,location:k.location,delta:1})}function h(T,b){s=$e.Replace;let m=za(k.location,T,b);n&&n(m,T),l=d();let g=Kf(m,l),_=k.createHref(m);i.replaceState(g,"",_),a&&c&&c({action:s,location:k.location,delta:0})}function v(T){let b=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof T=="string"?T:jo(T);return he(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let k={get action(){return s},get location(){return e(r,i)},listen(T){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Gf,p),c=T,()=>{r.removeEventListener(Gf,p),c=null}},createHref(T){return t(r,T)},createURL:v,encodeLocation(T){let b=v(T);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:f,replace:h,go(T){return i.go(T)}};return k}var We;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(We||(We={}));const ww=new Set(["lazy","caseSensitive","path","id","index","children"]);function Sw(e){return e.index===!0}function Ou(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((r,a)=>{let i=[...n,a],s=typeof r.id=="string"?r.id:i.join("-");if(he(r.index!==!0||!r.children,"Cannot specify children on an index route"),he(!o[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Sw(r)){let c=Le({},r,t(r),{id:s});return o[s]=c,c}else{let c=Le({},r,t(r),{id:s,children:void 0});return o[s]=c,r.children&&(c.children=Ou(r.children,t,i,o)),c}})}function ir(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?fn(t):t,r=Ar(o.pathname||"/",n);if(r==null)return null;let a=Fb(e);Cw(a);let i=null;for(let s=0;i==null&&s<a.length;++s)i=zw(a[s],Iw(r));return i}function xw(e,t){let{route:n,pathname:o,params:r}=e;return{id:n.id,pathname:o,params:r,data:t[n.id],handle:n.handle}}function Fb(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(a,i,s)=>{let c={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let l=Cn([o,c.relativePath]),d=n.concat(c);a.children&&a.children.length>0&&(he(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Fb(a.children,t,d,l)),!(a.path==null&&!a.index)&&t.push({path:l,score:Dw(l,a.index),routesMeta:d})};return e.forEach((a,i)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))r(a,i);else for(let c of Ub(a.path))r(a,i,c)}),t}function Ub(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(o.length===0)return r?[a,""]:[a];let i=Ub(o.join("/")),s=[];return s.push(...i.map(c=>c===""?a:[a,c].join("/"))),r&&s.push(...i),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Cw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jw(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Ew=/^:\w+$/,Tw=3,Aw=2,Pw=1,Rw=10,Mw=-2,Qf=e=>e==="*";function Dw(e,t){let n=e.split("/"),o=n.length;return n.some(Qf)&&(o+=Mw),t&&(o+=Aw),n.filter(r=>!Qf(r)).reduce((r,a)=>r+(Ew.test(a)?Tw:a===""?Pw:Rw),o)}function jw(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function zw(e,t){let{routesMeta:n}=e,o={},r="/",a=[];for(let i=0;i<n.length;++i){let s=n[i],c=i===n.length-1,l=r==="/"?t:t.slice(r.length)||"/",d=Ow({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l);if(!d)return null;Object.assign(o,d.params);let p=s.route;a.push({params:o,pathname:Cn([r,d.pathname]),pathnameBase:Hw(Cn([r,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(r=Cn([r,d.pathnameBase]))}return a}function Ow(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Lw(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],i=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:o.reduce((l,d,p)=>{if(d==="*"){let f=s[p]||"";i=a.slice(0,a.length-f.length).replace(/(.)\/+$/,"$1")}return l[d]=Fw(s[p]||"",d),l},{}),pathname:a,pathnameBase:i,pattern:e}}function Lw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Do(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(o.push(s),"/([^\\/]+)"));return e.endsWith("*")?(o.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function Iw(e){try{return decodeURI(e)}catch(t){return Do(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fw(e,t){try{return decodeURIComponent(e)}catch(n){return Do(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ar(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Uw(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?fn(e):e;return{pathname:n?n.startsWith("/")?n:Nw(n,t):t,search:Ww(o),hash:Bw(r)}}function Nw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function xs(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ba(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Il(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=fn(e):(r=Le({},e),he(!r.pathname||!r.pathname.includes("?"),xs("?","pathname","search",r)),he(!r.pathname||!r.pathname.includes("#"),xs("#","pathname","hash",r)),he(!r.search||!r.search.includes("#"),xs("#","search","hash",r)));let a=e===""||r.pathname==="",i=a?"/":r.pathname,s;if(o||i==null)s=n;else{let p=t.length-1;if(i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),p-=1;r.pathname=f.join("/")}s=p>=0?t[p]:"/"}let c=Uw(r,s),l=i&&i!=="/"&&i.endsWith("/"),d=(a||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||d)&&(c.pathname+="/"),c}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),Hw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ww=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Kd{constructor(t,n,o,r){r===void 0&&(r=!1),this.status=t,this.statusText=n||"",this.internal=r,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function Nb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hb=["post","put","patch","delete"],Vw=new Set(Hb),$w=["get",...Hb],qw=new Set($w),Gw=new Set([301,302,303,307,308]),Kw=new Set([307,308]),Cs={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},qr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yw=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Xw(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(e.mapRouteProperties)r=e.mapRouteProperties;else if(e.detectErrorBoundary){let P=e.detectErrorBoundary;r=M=>({hasErrorBoundary:P(M)})}else r=Yw;let a={},i=Ou(e.routes,r,void 0,a),s,c=e.basename||"/",l=Le({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,p=new Set,f=null,h=null,v=null,k=e.hydrationData!=null,T=ir(i,e.history.location,c),b=null;if(T==null){let P=zt(404,{pathname:e.history.location.pathname}),{matches:M,route:U}=oh(i);T=M,b={[U.id]:P}}let m=!T.some(P=>P.route.lazy)&&(!T.some(P=>P.route.loader)||e.hydrationData!=null),g,_={historyAction:e.history.action,location:e.history.location,matches:T,initialized:m,navigation:Cs,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},x=$e.Pop,w=!1,A,R=!1,j=!1,E=[],N=[],F=new Map,Y=0,re=-1,Q=new Map,ne=new Set,ce=new Map,I=new Map,V=new Map,S=!1;function G(){return d=e.history.listen(P=>{let{action:M,location:U,delta:q}=P;if(S){S=!1;return}Do(V.size===0||q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let le=ae({currentLocation:_.location,nextLocation:U,historyAction:M});if(le&&q!=null){S=!0,e.history.go(q*-1),$(le,{state:"blocked",location:U,proceed(){$(le,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),e.history.go(q)},reset(){let ie=new Map(_.blockers);ie.set(le,qr),J({blockers:ie})}});return}return je(M,U)}),_.initialized||je($e.Pop,_.location),g}function Z(){d&&d(),p.clear(),A&&A.abort(),_.fetchers.forEach((P,M)=>No(M)),_.blockers.forEach((P,M)=>L(M))}function C(P){return p.add(P),()=>p.delete(P)}function J(P){_=Le({},_,P),p.forEach(M=>M(_))}function ye(P,M){var U,q;let le=_.actionData!=null&&_.navigation.formMethod!=null&&Xt(_.navigation.formMethod)&&_.navigation.state==="loading"&&((U=P.state)==null?void 0:U._isRedirect)!==!0,ie;M.actionData?Object.keys(M.actionData).length>0?ie=M.actionData:ie=null:le?ie=_.actionData:ie=null;let ue=M.loaderData?nh(_.loaderData,M.loaderData,M.matches||[],M.errors):_.loaderData,oe=_.blockers;oe.size>0&&(oe=new Map(oe),oe.forEach((Oe,nt)=>oe.set(nt,qr)));let ee=w===!0||_.navigation.formMethod!=null&&Xt(_.navigation.formMethod)&&((q=P.state)==null?void 0:q._isRedirect)!==!0;s&&(i=s,s=void 0),R||x===$e.Pop||(x===$e.Push?e.history.push(P,P.state):x===$e.Replace&&e.history.replace(P,P.state)),J(Le({},M,{actionData:ie,loaderData:ue,historyAction:x,location:P,initialized:!0,navigation:Cs,revalidation:"idle",restoreScrollPosition:Dt(P,M.matches||_.matches),preventScrollReset:ee,blockers:oe})),x=$e.Pop,w=!1,R=!1,j=!1,E=[],N=[]}async function se(P,M){if(typeof P=="number"){e.history.go(P);return}let U=Lu(_.location,_.matches,c,l.v7_prependBasename,P,M==null?void 0:M.fromRouteId,M==null?void 0:M.relative),{path:q,submission:le,error:ie}=Yf(l.v7_normalizeFormMethod,!1,U,M),ue=_.location,oe=za(_.location,q,M&&M.state);oe=Le({},oe,e.history.encodeLocation(oe));let ee=M&&M.replace!=null?M.replace:void 0,Oe=$e.Push;ee===!0?Oe=$e.Replace:ee===!1||le!=null&&Xt(le.formMethod)&&le.formAction===_.location.pathname+_.location.search&&(Oe=$e.Replace);let nt=M&&"preventScrollReset"in M?M.preventScrollReset===!0:void 0,ve=ae({currentLocation:ue,nextLocation:oe,historyAction:Oe});if(ve){$(ve,{state:"blocked",location:oe,proceed(){$(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:oe}),se(P,M)},reset(){let Ce=new Map(_.blockers);Ce.set(ve,qr),J({blockers:Ce})}});return}return await je(Oe,oe,{submission:le,pendingError:ie,preventScrollReset:nt,replace:M&&M.replace})}function Pe(){if(Or(),J({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){je(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}je(x||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function je(P,M,U){A&&A.abort(),A=null,x=P,R=(U&&U.startUninterruptedRevalidation)===!0,gn(_.location,_.matches),w=(U&&U.preventScrollReset)===!0;let q=s||i,le=U&&U.overrideNavigation,ie=ir(q,M,c);if(!ie){let Ce=zt(404,{pathname:M.pathname}),{matches:He,route:fo}=oh(q);pe(),ye(M,{matches:He,loaderData:{},errors:{[fo.id]:Ce}});return}if(_.initialized&&!j&&n1(_.location,M)&&!(U&&U.submission&&Xt(U.submission.formMethod))){ye(M,{matches:ie});return}A=new AbortController;let ue=Kr(e.history,M,A.signal,U&&U.submission),oe,ee;if(U&&U.pendingError)ee={[lr(ie).route.id]:U.pendingError};else if(U&&U.submission&&Xt(U.submission.formMethod)){let Ce=await St(ue,M,U.submission,ie,{replace:U.replace});if(Ce.shortCircuited)return;oe=Ce.pendingActionData,ee=Ce.pendingActionError,le=Es(M,U.submission),ue=new Request(ue.url,{signal:ue.signal})}let{shortCircuited:Oe,loaderData:nt,errors:ve}=await X(ue,M,ie,le,U&&U.submission,U&&U.fetcherSubmission,U&&U.replace,oe,ee);Oe||(A=null,ye(M,Le({matches:ie},oe?{actionData:oe}:{},{loaderData:nt,errors:ve})))}async function St(P,M,U,q,le){le===void 0&&(le={}),Or();let ie=i1(M,U);J({navigation:ie});let ue,oe=Fu(q,M);if(!oe.route.action&&!oe.route.lazy)ue={type:We.error,error:zt(405,{method:P.method,pathname:M.pathname,routeId:oe.route.id})};else if(ue=await Gr("action",P,oe,q,a,r,c),P.signal.aborted)return{shortCircuited:!0};if(mr(ue)){let ee;return le&&le.replace!=null?ee=le.replace:ee=ue.location===_.location.pathname+_.location.search,await zn(_,ue,{submission:U,replace:ee}),{shortCircuited:!0}}if(ha(ue)){let ee=lr(q,oe.route.id);return(le&&le.replace)!==!0&&(x=$e.Push),{pendingActionData:{},pendingActionError:{[ee.route.id]:ue.error}}}if(xo(ue))throw zt(400,{type:"defer-action"});return{pendingActionData:{[oe.route.id]:ue.data}}}async function X(P,M,U,q,le,ie,ue,oe,ee){let Oe=q||Es(M,le),nt=le||ie||ih(Oe),ve=s||i,[Ce,He]=Xf(e.history,_,U,nt,M,j,E,N,ce,ne,ve,c,oe,ee);if(pe(Se=>!(U&&U.some(Gt=>Gt.route.id===Se))||Ce&&Ce.some(Gt=>Gt.route.id===Se)),re=++Y,Ce.length===0&&He.length===0){let Se=Xa();return ye(M,Le({matches:U,loaderData:{},errors:ee||null},oe?{actionData:oe}:{},Se?{fetchers:new Map(_.fetchers)}:{})),{shortCircuited:!0}}if(!R){He.forEach(Gt=>{let On=_.fetchers.get(Gt.key),Xl=Qr(void 0,On?On.data:void 0);_.fetchers.set(Gt.key,Xl)});let Se=oe||_.actionData;J(Le({navigation:Oe},Se?Object.keys(Se).length===0?{actionData:null}:{actionData:Se}:{},He.length>0?{fetchers:new Map(_.fetchers)}:{}))}He.forEach(Se=>{F.has(Se.key)&&on(Se.key),Se.controller&&F.set(Se.key,Se.controller)});let fo=()=>He.forEach(Se=>on(Se.key));A&&A.signal.addEventListener("abort",fo);let{results:ho,loaderResults:Lr,fetcherResults:Gl}=await zr(_.matches,U,Ce,He,P);if(P.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",fo),He.forEach(Se=>F.delete(Se.key));let _n=rh(ho);if(_n){if(_n.idx>=Ce.length){let Se=He[_n.idx-Ce.length].key;ne.add(Se)}return await zn(_,_n.result,{replace:ue}),{shortCircuited:!0}}let{loaderData:bn,errors:Za}=th(_,U,Ce,Lr,ee,He,Gl,I);I.forEach((Se,Gt)=>{Se.subscribe(On=>{(On||Se.done)&&I.delete(Gt)})});let Kl=Xa(),Ql=Ja(re),Yl=Kl||Ql||He.length>0;return Le({loaderData:bn,errors:Za},Yl?{fetchers:new Map(_.fetchers)}:{})}function qt(P){return _.fetchers.get(P)||Qw}function jr(P,M,U,q){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");F.has(P)&&on(P);let le=s||i,ie=Lu(_.location,_.matches,c,l.v7_prependBasename,U,M,q==null?void 0:q.relative),ue=ir(le,ie,c);if(!ue){uo(P,M,zt(404,{pathname:ie}));return}let{path:oe,submission:ee,error:Oe}=Yf(l.v7_normalizeFormMethod,!0,ie,q);if(Oe){uo(P,M,Oe);return}let nt=Fu(ue,oe);if(w=(q&&q.preventScrollReset)===!0,ee&&Xt(ee.formMethod)){co(P,M,oe,nt,ue,ee);return}ce.set(P,{routeId:M,path:oe}),Qa(P,M,oe,nt,ue,ee)}async function co(P,M,U,q,le,ie){if(Or(),ce.delete(P),!q.route.action&&!q.route.lazy){let Ke=zt(405,{method:ie.formMethod,pathname:U,routeId:M});uo(P,M,Ke);return}let ue=_.fetchers.get(P),oe=l1(ie,ue);_.fetchers.set(P,oe),J({fetchers:new Map(_.fetchers)});let ee=new AbortController,Oe=Kr(e.history,U,ee.signal,ie);F.set(P,ee);let nt=Y,ve=await Gr("action",Oe,q,le,a,r,c);if(Oe.signal.aborted){F.get(P)===ee&&F.delete(P);return}if(mr(ve))if(F.delete(P),re>nt){let Ke=$o(void 0);_.fetchers.set(P,Ke),J({fetchers:new Map(_.fetchers)});return}else{ne.add(P);let Ke=Qr(ie);return _.fetchers.set(P,Ke),J({fetchers:new Map(_.fetchers)}),zn(_,ve,{fetcherSubmission:ie})}if(ha(ve)){uo(P,M,ve.error);return}if(xo(ve))throw zt(400,{type:"defer-action"});let Ce=_.navigation.location||_.location,He=Kr(e.history,Ce,ee.signal),fo=s||i,ho=_.navigation.state!=="idle"?ir(fo,_.navigation.location,c):_.matches;he(ho,"Didn't find any matches after fetcher action");let Lr=++Y;Q.set(P,Lr);let Gl=Qr(ie,ve.data);_.fetchers.set(P,Gl);let[_n,bn]=Xf(e.history,_,ho,ie,Ce,j,E,N,ce,ne,fo,c,{[q.route.id]:ve.data},void 0);bn.filter(Ke=>Ke.key!==P).forEach(Ke=>{let Ir=Ke.key,Op=_.fetchers.get(Ir),Vy=Qr(void 0,Op?Op.data:void 0);_.fetchers.set(Ir,Vy),F.has(Ir)&&on(Ir),Ke.controller&&F.set(Ir,Ke.controller)}),J({fetchers:new Map(_.fetchers)});let Za=()=>bn.forEach(Ke=>on(Ke.key));ee.signal.addEventListener("abort",Za);let{results:Kl,loaderResults:Ql,fetcherResults:Yl}=await zr(_.matches,ho,_n,bn,He);if(ee.signal.aborted)return;ee.signal.removeEventListener("abort",Za),Q.delete(P),F.delete(P),bn.forEach(Ke=>F.delete(Ke.key));let Se=rh(Kl);if(Se){if(Se.idx>=_n.length){let Ke=bn[Se.idx-_n.length].key;ne.add(Ke)}return zn(_,Se.result)}let{loaderData:Gt,errors:On}=th(_,_.matches,_n,Ql,void 0,bn,Yl,I);if(_.fetchers.has(P)){let Ke=$o(ve.data);_.fetchers.set(P,Ke)}let Xl=Ja(Lr);_.navigation.state==="loading"&&Lr>re?(he(x,"Expected pending action"),A&&A.abort(),ye(_.navigation.location,{matches:ho,loaderData:Gt,errors:On,fetchers:new Map(_.fetchers)})):(J(Le({errors:On,loaderData:nh(_.loaderData,Gt,ho,On)},Xl||bn.length>0?{fetchers:new Map(_.fetchers)}:{})),j=!1)}async function Qa(P,M,U,q,le,ie){let ue=_.fetchers.get(P),oe=Qr(ie,ue?ue.data:void 0);_.fetchers.set(P,oe),J({fetchers:new Map(_.fetchers)});let ee=new AbortController,Oe=Kr(e.history,U,ee.signal);F.set(P,ee);let nt=Y,ve=await Gr("loader",Oe,q,le,a,r,c);if(xo(ve)&&(ve=await $b(ve,Oe.signal,!0)||ve),F.get(P)===ee&&F.delete(P),Oe.signal.aborted)return;if(mr(ve))if(re>nt){let He=$o(void 0);_.fetchers.set(P,He),J({fetchers:new Map(_.fetchers)});return}else{ne.add(P),await zn(_,ve);return}if(ha(ve)){let He=lr(_.matches,M);_.fetchers.delete(P),J({fetchers:new Map(_.fetchers),errors:{[He.route.id]:ve.error}});return}he(!xo(ve),"Unhandled fetcher deferred data");let Ce=$o(ve.data);_.fetchers.set(P,Ce),J({fetchers:new Map(_.fetchers)})}async function zn(P,M,U){let{submission:q,fetcherSubmission:le,replace:ie}=U===void 0?{}:U;M.revalidate&&(j=!0);let ue=za(P.location,M.location,{_isRedirect:!0});if(he(ue,"Expected a location on the redirect navigation"),n){let Ce=!1;if(M.reloadDocument)Ce=!0;else if(Wb.test(M.location)){const He=e.history.createURL(M.location);Ce=He.origin!==t.location.origin||Ar(He.pathname,c)==null}if(Ce){ie?t.location.replace(M.location):t.location.assign(M.location);return}}A=null;let oe=ie===!0?$e.Replace:$e.Push,{formMethod:ee,formAction:Oe,formEncType:nt}=P.navigation;!q&&!le&&ee&&Oe&&nt&&(q=ih(P.navigation));let ve=q||le;if(Kw.has(M.status)&&ve&&Xt(ve.formMethod))await je(oe,ue,{submission:Le({},ve,{formAction:M.location}),preventScrollReset:w});else{let Ce=Es(ue,q);await je(oe,ue,{overrideNavigation:Ce,fetcherSubmission:le,preventScrollReset:w})}}async function zr(P,M,U,q,le){let ie=await Promise.all([...U.map(ee=>Gr("loader",le,ee,M,a,r,c)),...q.map(ee=>ee.matches&&ee.match&&ee.controller?Gr("loader",Kr(e.history,ee.path,ee.controller.signal),ee.match,ee.matches,a,r,c):{type:We.error,error:zt(404,{pathname:ee.path})})]),ue=ie.slice(0,U.length),oe=ie.slice(U.length);return await Promise.all([ah(P,U,ue,ue.map(()=>le.signal),!1,_.loaderData),ah(P,q.map(ee=>ee.match),oe,q.map(ee=>ee.controller?ee.controller.signal:null),!0)]),{results:ie,loaderResults:ue,fetcherResults:oe}}function Or(){j=!0,E.push(...pe()),ce.forEach((P,M)=>{F.has(M)&&(N.push(M),on(M))})}function uo(P,M,U){let q=lr(_.matches,M);No(P),J({errors:{[q.route.id]:U},fetchers:new Map(_.fetchers)})}function No(P){let M=_.fetchers.get(P);F.has(P)&&!(M&&M.state==="loading"&&Q.has(P))&&on(P),ce.delete(P),Q.delete(P),ne.delete(P),_.fetchers.delete(P)}function on(P){let M=F.get(P);he(M,"Expected fetch controller: "+P),M.abort(),F.delete(P)}function Ya(P){for(let M of P){let U=qt(M),q=$o(U.data);_.fetchers.set(M,q)}}function Xa(){let P=[],M=!1;for(let U of ne){let q=_.fetchers.get(U);he(q,"Expected fetcher: "+U),q.state==="loading"&&(ne.delete(U),P.push(U),M=!0)}return Ya(P),M}function Ja(P){let M=[];for(let[U,q]of Q)if(q<P){let le=_.fetchers.get(U);he(le,"Expected fetcher: "+U),le.state==="loading"&&(on(U),Q.delete(U),M.push(U))}return Ya(M),M.length>0}function ql(P,M){let U=_.blockers.get(P)||qr;return V.get(P)!==M&&V.set(P,M),U}function L(P){_.blockers.delete(P),V.delete(P)}function $(P,M){let U=_.blockers.get(P)||qr;he(U.state==="unblocked"&&M.state==="blocked"||U.state==="blocked"&&M.state==="blocked"||U.state==="blocked"&&M.state==="proceeding"||U.state==="blocked"&&M.state==="unblocked"||U.state==="proceeding"&&M.state==="unblocked","Invalid blocker state transition: "+U.state+" -> "+M.state);let q=new Map(_.blockers);q.set(P,M),J({blockers:q})}function ae(P){let{currentLocation:M,nextLocation:U,historyAction:q}=P;if(V.size===0)return;V.size>1&&Do(!1,"A router only supports one blocker at a time");let le=Array.from(V.entries()),[ie,ue]=le[le.length-1],oe=_.blockers.get(ie);if(!(oe&&oe.state==="proceeding")&&ue({currentLocation:M,nextLocation:U,historyAction:q}))return ie}function pe(P){let M=[];return I.forEach((U,q)=>{(!P||P(q))&&(U.cancel(),M.push(q),I.delete(q))}),M}function ke(P,M,U){if(f=P,v=M,h=U||null,!k&&_.navigation===Cs){k=!0;let q=Dt(_.location,_.matches);q!=null&&J({restoreScrollPosition:q})}return()=>{f=null,v=null,h=null}}function mt(P,M){return h&&h(P,M.map(q=>xw(q,_.loaderData)))||P.key}function gn(P,M){if(f&&v){let U=mt(P,M);f[U]=v()}}function Dt(P,M){if(f){let U=mt(P,M),q=f[U];if(typeof q=="number")return q}return null}function po(P){a={},s=Ou(P,r,void 0,a)}return g={get basename(){return c},get state(){return _},get routes(){return i},initialize:G,subscribe:C,enableScrollRestoration:ke,navigate:se,fetch:jr,revalidate:Pe,createHref:P=>e.history.createHref(P),encodeLocation:P=>e.history.encodeLocation(P),getFetcher:qt,deleteFetcher:No,dispose:Z,getBlocker:ql,deleteBlocker:L,_internalFetchControllers:F,_internalActiveDeferreds:I,_internalSetRoutes:po},g}function Jw(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Lu(e,t,n,o,r,a,i){let s,c;if(a!=null&&i!=="path"){s=[];for(let d of t)if(s.push(d),d.route.id===a){c=d;break}}else s=t,c=t[t.length-1];let l=Il(r||".",Ba(s).map(d=>d.pathnameBase),Ar(e.pathname,n)||e.pathname,i==="path");return r==null&&(l.search=e.search,l.hash=e.hash),(r==null||r===""||r===".")&&c&&c.route.index&&!Qd(l.search)&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(l.pathname=l.pathname==="/"?n:Cn([n,l.pathname])),jo(l)}function Yf(e,t,n,o){if(!o||!Jw(o))return{path:n};if(o.formMethod&&!a1(o.formMethod))return{path:n,error:zt(405,{method:o.formMethod})};let r=()=>({path:n,error:zt(400,{type:"invalid-body"})}),a=o.formMethod||"get",i=e?a.toUpperCase():a.toLowerCase(),s=Vb(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!Xt(i))return r();let f=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((h,v)=>{let[k,T]=v;return""+h+k+"="+T+`
`},""):String(o.body);return{path:n,submission:{formMethod:i,formAction:s,formEncType:o.formEncType,formData:void 0,json:void 0,text:f}}}else if(o.formEncType==="application/json"){if(!Xt(i))return r();try{let f=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:i,formAction:s,formEncType:o.formEncType,formData:void 0,json:f,text:void 0}}}catch{return r()}}}he(typeof FormData=="function","FormData is not available in this environment");let c,l;if(o.formData)c=Iu(o.formData),l=o.formData;else if(o.body instanceof FormData)c=Iu(o.body),l=o.body;else if(o.body instanceof URLSearchParams)c=o.body,l=eh(c);else if(o.body==null)c=new URLSearchParams,l=new FormData;else try{c=new URLSearchParams(o.body),l=eh(c)}catch{return r()}let d={formMethod:i,formAction:s,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:l,json:void 0,text:void 0};if(Xt(d.formMethod))return{path:n,submission:d};let p=fn(n);return t&&p.search&&Qd(p.search)&&c.append("index",""),p.search="?"+c,{path:jo(p),submission:d}}function Zw(e,t){let n=e;if(t){let o=e.findIndex(r=>r.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function Xf(e,t,n,o,r,a,i,s,c,l,d,p,f,h){let v=h?Object.values(h)[0]:f?Object.values(f)[0]:void 0,k=e.createURL(t.location),T=e.createURL(r),b=h?Object.keys(h)[0]:void 0,g=Zw(n,b).filter((x,w)=>{if(x.route.lazy)return!0;if(x.route.loader==null)return!1;if(e1(t.loaderData,t.matches[w],x)||i.some(j=>j===x.route.id))return!0;let A=t.matches[w],R=x;return Jf(x,Le({currentUrl:k,currentParams:A.params,nextUrl:T,nextParams:R.params},o,{actionResult:v,defaultShouldRevalidate:a||k.pathname+k.search===T.pathname+T.search||k.search!==T.search||Bb(A,R)}))}),_=[];return c.forEach((x,w)=>{if(!n.some(N=>N.route.id===x.routeId))return;let A=ir(d,x.path,p);if(!A){_.push({key:w,routeId:x.routeId,path:x.path,matches:null,match:null,controller:null});return}let R=t.fetchers.get(w),j=Fu(A,x.path),E=!1;l.has(w)?E=!1:s.includes(w)?E=!0:R&&R.state!=="idle"&&R.data===void 0?E=a:E=Jf(j,Le({currentUrl:k,currentParams:t.matches[t.matches.length-1].params,nextUrl:T,nextParams:n[n.length-1].params},o,{actionResult:v,defaultShouldRevalidate:a})),E&&_.push({key:w,routeId:x.routeId,path:x.path,matches:A,match:j,controller:new AbortController})}),[g,_]}function e1(e,t,n){let o=!t||n.route.id!==t.route.id,r=e[n.route.id]===void 0;return o||r}function Bb(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Jf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Zf(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let r=n[e.id];he(r,"No route found in manifest");let a={};for(let i in o){let c=r[i]!==void 0&&i!=="hasErrorBoundary";Do(!c,'Route "'+r.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!c&&!ww.has(i)&&(a[i]=o[i])}Object.assign(r,a),Object.assign(r,Le({},t(r),{lazy:void 0}))}async function Gr(e,t,n,o,r,a,i,s){s===void 0&&(s={});let c,l,d,p=v=>{let k,T=new Promise((b,m)=>k=m);return d=()=>k(),t.signal.addEventListener("abort",d),Promise.race([v({request:t,params:n.params,context:s.requestContext}),T])};try{let v=n.route[e];if(n.route.lazy)if(v){let k,T=await Promise.all([p(v).catch(b=>{k=b}),Zf(n.route,a,r)]);if(k)throw k;l=T[0]}else if(await Zf(n.route,a,r),v=n.route[e],v)l=await p(v);else if(e==="action"){let k=new URL(t.url),T=k.pathname+k.search;throw zt(405,{method:t.method,pathname:T,routeId:n.route.id})}else return{type:We.data,data:void 0};else if(v)l=await p(v);else{let k=new URL(t.url),T=k.pathname+k.search;throw zt(404,{pathname:T})}he(l!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(v){c=We.error,l=v}finally{d&&t.signal.removeEventListener("abort",d)}if(r1(l)){let v=l.status;if(Gw.has(v)){let b=l.headers.get("Location");if(he(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!Wb.test(b))b=Lu(new URL(t.url),o.slice(0,o.indexOf(n)+1),i,!0,b);else if(!s.isStaticRequest){let m=new URL(t.url),g=b.startsWith("//")?new URL(m.protocol+b):new URL(b),_=Ar(g.pathname,i)!=null;g.origin===m.origin&&_&&(b=g.pathname+g.search+g.hash)}if(s.isStaticRequest)throw l.headers.set("Location",b),l;return{type:We.redirect,status:v,location:b,revalidate:l.headers.get("X-Remix-Revalidate")!==null,reloadDocument:l.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:c===We.error?We.error:We.data,response:l};let k,T=l.headers.get("Content-Type");return T&&/\bapplication\/json\b/.test(T)?k=await l.json():k=await l.text(),c===We.error?{type:c,error:new Kd(v,l.statusText,k),headers:l.headers}:{type:We.data,data:k,statusCode:l.status,headers:l.headers}}if(c===We.error)return{type:c,error:l};if(o1(l)){var f,h;return{type:We.deferred,deferredData:l,statusCode:(f=l.init)==null?void 0:f.status,headers:((h=l.init)==null?void 0:h.headers)&&new Headers(l.init.headers)}}return{type:We.data,data:l}}function Kr(e,t,n,o){let r=e.createURL(Vb(t)).toString(),a={signal:n};if(o&&Xt(o.formMethod)){let{formMethod:i,formEncType:s}=o;a.method=i.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(o.json)):s==="text/plain"?a.body=o.text:s==="application/x-www-form-urlencoded"&&o.formData?a.body=Iu(o.formData):a.body=o.formData}return new Request(r,a)}function Iu(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function eh(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function t1(e,t,n,o,r){let a={},i=null,s,c=!1,l={};return n.forEach((d,p)=>{let f=t[p].route.id;if(he(!mr(d),"Cannot handle redirect results in processLoaderData"),ha(d)){let h=lr(e,f),v=d.error;o&&(v=Object.values(o)[0],o=void 0),i=i||{},i[h.route.id]==null&&(i[h.route.id]=v),a[f]=void 0,c||(c=!0,s=Nb(d.error)?d.error.status:500),d.headers&&(l[f]=d.headers)}else xo(d)?(r.set(f,d.deferredData),a[f]=d.deferredData.data):a[f]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(s=d.statusCode),d.headers&&(l[f]=d.headers)}),o&&(i=o,a[Object.keys(o)[0]]=void 0),{loaderData:a,errors:i,statusCode:s||200,loaderHeaders:l}}function th(e,t,n,o,r,a,i,s){let{loaderData:c,errors:l}=t1(t,n,o,r,s);for(let d=0;d<a.length;d++){let{key:p,match:f,controller:h}=a[d];he(i!==void 0&&i[d]!==void 0,"Did not find corresponding fetcher result");let v=i[d];if(!(h&&h.signal.aborted))if(ha(v)){let k=lr(e.matches,f==null?void 0:f.route.id);l&&l[k.route.id]||(l=Le({},l,{[k.route.id]:v.error})),e.fetchers.delete(p)}else if(mr(v))he(!1,"Unhandled fetcher revalidation redirect");else if(xo(v))he(!1,"Unhandled fetcher deferred data");else{let k=$o(v.data);e.fetchers.set(p,k)}}return{loaderData:c,errors:l}}function nh(e,t,n,o){let r=Le({},t);for(let a of n){let i=a.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(r[i]=t[i]):e[i]!==void 0&&a.route.loader&&(r[i]=e[i]),o&&o.hasOwnProperty(i))break}return r}function lr(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function oh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function zt(e,t){let{pathname:n,routeId:o,method:r,type:a}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",r&&n&&o?s="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s='Route "'+o+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",r&&n&&o?s="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":r&&(s='Invalid request method "'+r.toUpperCase()+'"')),new Kd(e||500,i,new Error(s),!0)}function rh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(mr(n))return{result:n,idx:t}}}function Vb(e){let t=typeof e=="string"?fn(e):e;return jo(Le({},t,{hash:""}))}function n1(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function xo(e){return e.type===We.deferred}function ha(e){return e.type===We.error}function mr(e){return(e&&e.type)===We.redirect}function o1(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function r1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function a1(e){return qw.has(e.toLowerCase())}function Xt(e){return Vw.has(e.toLowerCase())}async function ah(e,t,n,o,r,a){for(let i=0;i<n.length;i++){let s=n[i],c=t[i];if(!c)continue;let l=e.find(p=>p.route.id===c.route.id),d=l!=null&&!Bb(l,c)&&(a&&a[c.route.id])!==void 0;if(xo(s)&&(r||d)){let p=o[i];he(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await $b(s,p,r).then(f=>{f&&(n[i]=f||n[i])})}}}async function $b(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:We.data,data:e.deferredData.unwrappedData}}catch(r){return{type:We.error,error:r}}return{type:We.data,data:e.deferredData.data}}}function Qd(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Fu(e,t){let n=typeof t=="string"?fn(t).search:t.search;if(e[e.length-1].route.index&&Qd(n||""))return e[e.length-1];let o=Ba(e);return o[o.length-1]}function ih(e){let{formMethod:t,formAction:n,formEncType:o,text:r,formData:a,json:i}=e;if(!(!t||!n||!o)){if(r!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:r};if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:a,json:void 0,text:void 0};if(i!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:i,text:void 0}}}function Es(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function i1(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Qr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function l1(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function $o(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},pl.apply(this,arguments)}const Fl=y.createContext(null),qb=y.createContext(null),Pr=y.createContext(null),Ul=y.createContext(null),Mn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Gb=y.createContext(null);function s1(e,t){let{relative:n}=t===void 0?{}:t;Rr()||he(!1);let{basename:o,navigator:r}=y.useContext(Pr),{hash:a,pathname:i,search:s}=Yb(e,{relative:n}),c=i;return o!=="/"&&(c=i==="/"?o:Cn([o,i])),r.createHref({pathname:c,search:s,hash:a})}function Rr(){return y.useContext(Ul)!=null}function to(){return Rr()||he(!1),y.useContext(Ul).location}function Kb(e){y.useContext(Pr).static||y.useLayoutEffect(e)}function Yd(){let{isDataRoute:e}=y.useContext(Mn);return e?k1():c1()}function c1(){Rr()||he(!1);let e=y.useContext(Fl),{basename:t,navigator:n}=y.useContext(Pr),{matches:o}=y.useContext(Mn),{pathname:r}=to(),a=JSON.stringify(Ba(o).map(c=>c.pathnameBase)),i=y.useRef(!1);return Kb(()=>{i.current=!0}),y.useCallback(function(c,l){if(l===void 0&&(l={}),!i.current)return;if(typeof c=="number"){n.go(c);return}let d=Il(c,JSON.parse(a),r,l.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Cn([t,d.pathname])),(l.replace?n.replace:n.push)(d,l.state,l)},[t,n,a,r,e])}const u1=y.createContext(null);function Qb(e){let t=y.useContext(Mn).outlet;return t&&y.createElement(u1.Provider,{value:e},t)}function Yb(e,t){let{relative:n}=t===void 0?{}:t,{matches:o}=y.useContext(Mn),{pathname:r}=to(),a=JSON.stringify(Ba(o).map(i=>i.pathnameBase));return y.useMemo(()=>Il(e,JSON.parse(a),r,n==="path"),[e,a,r,n])}function d1(e,t,n){Rr()||he(!1);let{navigator:o}=y.useContext(Pr),{matches:r}=y.useContext(Mn),a=r[r.length-1],i=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let c=to(),l;if(t){var d;let k=typeof t=="string"?fn(t):t;s==="/"||(d=k.pathname)!=null&&d.startsWith(s)||he(!1),l=k}else l=c;let p=l.pathname||"/",f=s==="/"?p:p.slice(s.length)||"/",h=ir(e,{pathname:f}),v=g1(h&&h.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:Cn([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Cn([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),r,n);return t&&v?y.createElement(Ul.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:$e.Pop}},v):v}function p1(){let e=y1(),t=Nb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:r},n):null,a)}const f1=y.createElement(p1,null);class h1 extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y.createElement(Mn.Provider,{value:this.props.routeContext},y.createElement(Gb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m1(e){let{routeContext:t,match:n,children:o}=e,r=y.useContext(Fl);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Mn.Provider,{value:t},o)}function g1(e,t,n){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var r;if((r=n)!=null&&r.errors)e=n.matches;else return null}let a=e,i=(o=n)==null?void 0:o.errors;if(i!=null){let s=a.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id]));s>=0||he(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,c,l)=>{let d=c.route.id?i==null?void 0:i[c.route.id]:null,p=null;n&&(p=c.route.errorElement||f1);let f=t.concat(a.slice(0,l+1)),h=()=>{let v;return d?v=p:c.route.Component?v=y.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=s,y.createElement(m1,{match:c,routeContext:{outlet:s,matches:f,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||l===0)?y.createElement(h1,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var Xb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xb||{}),fl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fl||{});function _1(e){let t=y.useContext(Fl);return t||he(!1),t}function b1(e){let t=y.useContext(qb);return t||he(!1),t}function v1(e){let t=y.useContext(Mn);return t||he(!1),t}function Jb(e){let t=v1(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function y1(){var e;let t=y.useContext(Gb),n=b1(fl.UseRouteError),o=Jb(fl.UseRouteError);return t||((e=n.errors)==null?void 0:e[o])}function k1(){let{router:e}=_1(Xb.UseNavigateStable),t=Jb(fl.UseNavigateStable),n=y.useRef(!1);return Kb(()=>{n.current=!0}),y.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,pl({fromRouteId:t},a)))},[e,t])}const w1="startTransition",lh=lk[w1];function S1(e){let{fallbackElement:t,router:n,future:o}=e,[r,a]=y.useState(n.state),{v7_startTransition:i}=o||{},s=y.useCallback(p=>{i&&lh?lh(()=>a(p)):a(p)},[a,i]);y.useLayoutEffect(()=>n.subscribe(s),[n,s]);let c=y.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:p=>n.navigate(p),push:(p,f,h)=>n.navigate(p,{state:f,preventScrollReset:h==null?void 0:h.preventScrollReset}),replace:(p,f,h)=>n.navigate(p,{replace:!0,state:f,preventScrollReset:h==null?void 0:h.preventScrollReset})}),[n]),l=n.basename||"/",d=y.useMemo(()=>({router:n,navigator:c,static:!1,basename:l}),[n,c,l]);return y.createElement(y.Fragment,null,y.createElement(Fl.Provider,{value:d},y.createElement(qb.Provider,{value:r},y.createElement(C1,{basename:l,location:r.location,navigationType:r.historyAction,navigator:c},r.initialized?y.createElement(x1,{routes:n.routes,state:r}):t))),null)}function x1(e){let{routes:t,state:n}=e;return d1(t,void 0,n)}function vn(e){let{to:t,replace:n,state:o,relative:r}=e;Rr()||he(!1);let{matches:a}=y.useContext(Mn),{pathname:i}=to(),s=Yd(),c=Il(t,Ba(a).map(d=>d.pathnameBase),i,r==="path"),l=JSON.stringify(c);return y.useEffect(()=>s(JSON.parse(l),{replace:n,state:o,relative:r}),[s,l,r,n,o]),null}function In(e){return Qb(e.context)}function C1(e){let{basename:t="/",children:n=null,location:o,navigationType:r=$e.Pop,navigator:a,static:i=!1}=e;Rr()&&he(!1);let s=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:s,navigator:a,static:i}),[s,a,i]);typeof o=="string"&&(o=fn(o));let{pathname:l="/",search:d="",hash:p="",state:f=null,key:h="default"}=o,v=y.useMemo(()=>{let k=Ar(l,s);return k==null?null:{location:{pathname:k,search:d,hash:p,state:f,key:h},navigationType:r}},[s,l,d,p,f,h,r]);return v==null?null:y.createElement(Pr.Provider,{value:c},y.createElement(Ul.Provider,{children:n,value:v}))}new Promise(()=>{});function E1(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:y.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:y.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Oa.apply(this,arguments)}function T1(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function A1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function P1(e,t){return e.button===0&&(!t||t==="_self")&&!A1(e)}function Uu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let o=e[n];return t.concat(Array.isArray(o)?o.map(r=>[n,r]):[[n,o]])},[]))}function R1(e,t){let n=Uu(e);return t&&t.forEach((o,r)=>{n.has(r)||t.getAll(r).forEach(a=>{n.append(r,a)})}),n}const M1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function D1(e,t){return Xw({basename:t==null?void 0:t.basename,future:Oa({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:vw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||j1(),routes:e,mapRouteProperties:E1}).initialize()}function j1(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Oa({},t,{errors:z1(t.errors)})),t}function z1(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,r]of t)if(r&&r.__type==="RouteErrorResponse")n[o]=new Kd(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let a=window[r.__subType];if(typeof a=="function")try{let i=new a(r.message);i.stack="",n[o]=i}catch{}}if(n[o]==null){let a=new Error(r.message);a.stack="",n[o]=a}}else n[o]=r;return n}const O1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z=y.forwardRef(function(t,n){let{onClick:o,relative:r,reloadDocument:a,replace:i,state:s,target:c,to:l,preventScrollReset:d}=t,p=T1(t,M1),{basename:f}=y.useContext(Pr),h,v=!1;if(typeof l=="string"&&L1.test(l)&&(h=l,O1))try{let m=new URL(window.location.href),g=l.startsWith("//")?new URL(m.protocol+l):new URL(l),_=Ar(g.pathname,f);g.origin===m.origin&&_!=null?l=_+g.search+g.hash:v=!0}catch{}let k=s1(l,{relative:r}),T=I1(l,{replace:i,state:s,target:c,preventScrollReset:d,relative:r});function b(m){o&&o(m),m.defaultPrevented||T(m)}return y.createElement("a",Oa({},p,{href:h||k,onClick:v||a?o:b,ref:n,target:c}))});var sh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(sh||(sh={}));var ch;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ch||(ch={}));function I1(e,t){let{target:n,replace:o,state:r,preventScrollReset:a,relative:i}=t===void 0?{}:t,s=Yd(),c=to(),l=Yb(e,{relative:i});return y.useCallback(d=>{if(P1(d,n)){d.preventDefault();let p=o!==void 0?o:jo(c)===jo(l);s(e,{replace:p,state:r,preventScrollReset:a,relative:i})}},[c,s,l,o,r,n,e,a,i])}function F1(e){let t=y.useRef(Uu(e)),n=y.useRef(!1),o=to(),r=y.useMemo(()=>R1(o.search,n.current?null:t.current),[o.search]),a=Yd(),i=y.useCallback((s,c)=>{const l=Uu(typeof s=="function"?s(r):s);n.current=!0,a("?"+l,c)},[a,r]);return[r,i]}const U1="/assets/github-24fa8013.svg",Zb="/assets/react-red-a2c8574b.webp";function hl(){return hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},hl.apply(this,arguments)}function Xd(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Nu(e,t){return Nu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},Nu(e,t)}function Jd(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nu(e,t)}function N1(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function H1(e,t){e.classList?e.classList.add(t):N1(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function uh(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function W1(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=uh(e.className,t):e.setAttribute("class",uh(e.className&&e.className.baseVal||"",t))}const dh={disabled:!1},Zd=xe.createContext(null);var ev=function(t){return t.scrollTop},na="unmounted",vo="exited",It="entering",un="entered",La="exiting",Dn=function(e){Jd(t,e);function t(o,r){var a;a=e.call(this,o,r)||this;var i=r,s=i&&!i.isMounting?o.enter:o.appear,c;return a.appearStatus=null,o.in?s?(c=vo,a.appearStatus=It):c=un:o.unmountOnExit||o.mountOnEnter?c=na:c=vo,a.state={status:c},a.nextCallback=null,a}t.getDerivedStateFromProps=function(r,a){var i=r.in;return i&&a.status===na?{status:vo}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var a=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==It&&i!==un&&(a=It):(i===It||i===un)&&(a=La)}this.updateStatus(!1,a)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,a,i,s;return a=i=s=r,r!=null&&typeof r!="number"&&(a=r.exit,i=r.enter,s=r.appear!==void 0?r.appear:i),{exit:a,enter:i,appear:s}},n.updateStatus=function(r,a){if(r===void 0&&(r=!1),a!==null)if(this.cancelNextCallback(),a===It){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this);i&&ev(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===vo&&this.setState({status:na})},n.performEnter=function(r){var a=this,i=this.props.enter,s=this.context?this.context.isMounting:r,c=this.props.nodeRef?[s]:[_i.findDOMNode(this),s],l=c[0],d=c[1],p=this.getTimeouts(),f=s?p.appear:p.enter;if(!r&&!i||dh.disabled){this.safeSetState({status:un},function(){a.props.onEntered(l)});return}this.props.onEnter(l,d),this.safeSetState({status:It},function(){a.props.onEntering(l,d),a.onTransitionEnd(f,function(){a.safeSetState({status:un},function(){a.props.onEntered(l,d)})})})},n.performExit=function(){var r=this,a=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:_i.findDOMNode(this);if(!a||dh.disabled){this.safeSetState({status:vo},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:La},function(){r.props.onExiting(s),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:vo},function(){r.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,a){a=this.setNextCallback(a),this.setState(r,a)},n.setNextCallback=function(r){var a=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,a.nextCallback=null,r(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(r,a){this.setNextCallback(a);var i=this.props.nodeRef?this.props.nodeRef.current:_i.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],l=c[0],d=c[1];this.props.addEndListener(l,d)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===na)return null;var a=this.props,i=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var s=Xd(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return xe.createElement(Zd.Provider,{value:null},typeof i=="function"?i(r,s):xe.cloneElement(xe.Children.only(i),s))},t}(xe.Component);Dn.contextType=Zd;Dn.propTypes={};function Wo(){}Dn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Wo,onEntering:Wo,onEntered:Wo,onExit:Wo,onExiting:Wo,onExited:Wo};Dn.UNMOUNTED=na;Dn.EXITED=vo;Dn.ENTERING=It;Dn.ENTERED=un;Dn.EXITING=La;const B1=Dn;var V1=function(t,n){return t&&n&&n.split(" ").forEach(function(o){return H1(t,o)})},Ts=function(t,n){return t&&n&&n.split(" ").forEach(function(o){return W1(t,o)})},ep=function(e){Jd(t,e);function t(){for(var o,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return o=e.call.apply(e,[this].concat(a))||this,o.appliedClasses={appear:{},enter:{},exit:{}},o.onEnter=function(s,c){var l=o.resolveArguments(s,c),d=l[0],p=l[1];o.removeClasses(d,"exit"),o.addClass(d,p?"appear":"enter","base"),o.props.onEnter&&o.props.onEnter(s,c)},o.onEntering=function(s,c){var l=o.resolveArguments(s,c),d=l[0],p=l[1],f=p?"appear":"enter";o.addClass(d,f,"active"),o.props.onEntering&&o.props.onEntering(s,c)},o.onEntered=function(s,c){var l=o.resolveArguments(s,c),d=l[0],p=l[1],f=p?"appear":"enter";o.removeClasses(d,f),o.addClass(d,f,"done"),o.props.onEntered&&o.props.onEntered(s,c)},o.onExit=function(s){var c=o.resolveArguments(s),l=c[0];o.removeClasses(l,"appear"),o.removeClasses(l,"enter"),o.addClass(l,"exit","base"),o.props.onExit&&o.props.onExit(s)},o.onExiting=function(s){var c=o.resolveArguments(s),l=c[0];o.addClass(l,"exit","active"),o.props.onExiting&&o.props.onExiting(s)},o.onExited=function(s){var c=o.resolveArguments(s),l=c[0];o.removeClasses(l,"exit"),o.addClass(l,"exit","done"),o.props.onExited&&o.props.onExited(s)},o.resolveArguments=function(s,c){return o.props.nodeRef?[o.props.nodeRef.current,s]:[s,c]},o.getClassNames=function(s){var c=o.props.classNames,l=typeof c=="string",d=l&&c?c+"-":"",p=l?""+d+s:c[s],f=l?p+"-active":c[s+"Active"],h=l?p+"-done":c[s+"Done"];return{baseClassName:p,activeClassName:f,doneClassName:h}},o}var n=t.prototype;return n.addClass=function(r,a,i){var s=this.getClassNames(a)[i+"ClassName"],c=this.getClassNames("enter"),l=c.doneClassName;a==="appear"&&i==="done"&&l&&(s+=" "+l),i==="active"&&r&&ev(r),s&&(this.appliedClasses[a][i]=s,V1(r,s))},n.removeClasses=function(r,a){var i=this.appliedClasses[a],s=i.base,c=i.active,l=i.done;this.appliedClasses[a]={},s&&Ts(r,s),c&&Ts(r,c),l&&Ts(r,l)},n.render=function(){var r=this.props;r.classNames;var a=Xd(r,["classNames"]);return xe.createElement(B1,hl({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(xe.Component);ep.defaultProps={classNames:""};ep.propTypes={};const $1=ep;var bi,vi;function q1(e,t){return!(e===t||xe.isValidElement(e)&&xe.isValidElement(t)&&e.key!=null&&e.key===t.key)}var xr={out:"out-in",in:"in-out"},ml=function(t,n,o){return function(){var r;t.props[n]&&(r=t.props)[n].apply(r,arguments),o()}},G1=(bi={},bi[xr.out]=function(e){var t=e.current,n=e.changeState;return xe.cloneElement(t,{in:!1,onExited:ml(t,"onExited",function(){n(It,null)})})},bi[xr.in]=function(e){var t=e.current,n=e.changeState,o=e.children;return[t,xe.cloneElement(o,{in:!0,onEntered:ml(o,"onEntered",function(){n(It)})})]},bi),K1=(vi={},vi[xr.out]=function(e){var t=e.children,n=e.changeState;return xe.cloneElement(t,{in:!0,onEntered:ml(t,"onEntered",function(){n(un,xe.cloneElement(t,{in:!0}))})})},vi[xr.in]=function(e){var t=e.current,n=e.children,o=e.changeState;return[xe.cloneElement(t,{in:!1,onExited:ml(t,"onExited",function(){o(un,xe.cloneElement(n,{in:!0}))})}),xe.cloneElement(n,{in:!0})]},vi),tp=function(e){Jd(t,e);function t(){for(var o,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return o=e.call.apply(e,[this].concat(a))||this,o.state={status:un,current:null},o.appeared=!1,o.changeState=function(s,c){c===void 0&&(c=o.state.current),o.setState({status:s,current:c})},o}var n=t.prototype;return n.componentDidMount=function(){this.appeared=!0},t.getDerivedStateFromProps=function(r,a){return r.children==null?{current:null}:a.status===It&&r.mode===xr.in?{status:It}:a.current&&q1(a.current,r.children)?{status:La}:{current:xe.cloneElement(r.children,{in:!0})}},n.render=function(){var r=this.props,a=r.children,i=r.mode,s=this.state,c=s.status,l=s.current,d={children:a,current:l,changeState:this.changeState,status:c},p;switch(c){case It:p=K1[i](d);break;case La:p=G1[i](d);break;case un:p=l}return xe.createElement(Zd.Provider,{value:{isMounting:!this.appeared}},p)},t}(xe.Component);tp.propTypes={};tp.defaultProps={mode:xr.out};const Q1=tp;function Y1(){const{pathname:e}=to(),t=to(),n=Qb(),o=y.useRef(null),r=y.useRef(null),a=y.useRef({}),i=y.useRef(null),s=y.useCallback(()=>{r.current&&(r.current.style.width="100%")},[]),c=y.useCallback(()=>{r.current&&(r.current.style.width="0")},[]);return y.useEffect(()=>{if(window.innerWidth<1e3)return;const l=Object.values(a.current);for(const d of l)if((d==null?void 0:d.getAttribute("href"))===window.location.hash&&(d==null?void 0:d.offsetTop)>window.innerHeight){d==null||d.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});break}},[]),u.jsxs(u.Fragment,{children:[!["/",""].includes(e)&&u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:s,className:"open-nav",children:"☰"}),u.jsxs("nav",{ref:r,className:"nav",children:[u.jsx("button",{onClick:c,className:"btn-close",children:"X"}),u.jsxs("div",{className:"title-container",children:[u.jsxs(z,{to:"/",className:"title",children:[u.jsx("img",{src:Zb,alt:"react",className:"img"}),u.jsx("p",{className:"text",children:"React Tools"})]}),u.jsx(z,{to:"https://github.com/nDriaDev/react-tools",children:u.jsx("img",{src:U1,className:"img",alt:"github"})})]}),u.jsx("p",{className:"type",children:"Hooks"}),u.jsx("p",{className:"sub-type",children:"State"}),u.jsx(z,{className:e==="/hooks/state/createPubSubStore"?"active":"",ref:l=>a.current.createPubSubStore=l,to:"/hooks/state/createPubSubStore",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"createPubSubStore"}),u.jsx(z,{className:e==="/hooks/state/useArray"?"active":"",ref:l=>a.current.useArray=l,to:"/hooks/state/useArray",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useArray"}),u.jsx(z,{className:e==="/hooks/state/useDerivedState"?"active":"",ref:l=>a.current.useDerivedState=l,to:"/hooks/state/useDerivedState",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDerivedState"}),u.jsx(z,{className:e==="/hooks/state/useLocalStorageState"?"active":"",ref:l=>a.current.useLocalStorageState=l,to:"/hooks/state/useLocalStorageState",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLocalStorageState"}),u.jsx(z,{className:e==="/hooks/state/useMap"?"active":"",ref:l=>a.current.useMap=l,to:"/hooks/state/useMap",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMap"}),u.jsx(z,{className:e==="/hooks/state/usePrevious"?"active":"",ref:l=>a.current.usePrevious=l,to:"/hooks/state/usePrevious",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePrevious"}),u.jsx(z,{className:e==="/hooks/state/useProxyState"?"active":"",ref:l=>a.current.useProxyState=l,to:"/hooks/state/useProxyState",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useProxyState"}),u.jsx(z,{className:e==="/hooks/state/useReducerGetReset"?"active":"",ref:l=>a.current.useReducerGetReset=l,to:"/hooks/state/useReducerGetReset",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useReducerGetReset"}),u.jsx(z,{className:e==="/hooks/state/useReducerHistory"?"active":"",ref:l=>a.current.useReducerHistory=l,to:"/hooks/state/useReducerHistory",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useReducerHistory"}),u.jsx(z,{className:e==="/hooks/state/useReducerHistoryGetter"?"active":"",ref:l=>a.current.useReducerHistoryGetter=l,to:"/hooks/state/useReducerHistoryGetter",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useReducerHistoryGetter"}),u.jsx(z,{className:e==="/hooks/state/useSessionStorageState"?"active":"",ref:l=>a.current.useSessionStorageState=l,to:"/hooks/state/useSessionStorageState",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useSessionStorageState"}),u.jsx(z,{className:e==="/hooks/state/useSet"?"active":"",ref:l=>a.current.useSet=l,to:"/hooks/state/useSet",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useSet"}),u.jsx(z,{className:e==="/hooks/state/useStateGetReset"?"active":"",ref:l=>a.current.useStateGetReset=l,to:"/hooks/state/useStateGetReset",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useStateGetReset"}),u.jsx(z,{className:e==="/hooks/state/useStateHistory"?"active":"",ref:l=>a.current.useStateHistory=l,to:"/hooks/state/useStateHistory",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useStateHistory"}),u.jsx(z,{className:e==="/hooks/state/useStateHistoryGetter"?"active":"",ref:l=>a.current.useStateHistoryGetter=l,to:"/hooks/state/useStateHistoryGetter",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useStateHistoryGetter"}),u.jsx(z,{className:e==="/hooks/state/useStateValidator"?"active":"",ref:l=>a.current.useStateValidator=l,to:"/hooks/state/useStateValidator",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useStateValidator"}),u.jsx(z,{className:e==="/hooks/state/useSyncExternalStore"?"active":"",ref:l=>a.current.useSyncExternalStore=l,to:"/hooks/state/useSyncExternalStore",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useSyncExternalStore"}),u.jsx("p",{className:"sub-type",children:"Lifecycle"}),u.jsx(z,{className:e==="/hooks/lifecycle/useDeferredValue"?"active":"",ref:l=>a.current.useDeferredValue=l,to:"/hooks/lifecycle/useDeferredValue",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDeferredValue"}),u.jsx(z,{className:e==="/hooks/lifecycle/useEffectCompare"?"active":"",ref:l=>a.current.useEffectCompare=l,to:"/hooks/lifecycle/useEffectCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEffectCompare"}),u.jsx(z,{className:e==="/hooks/lifecycle/useEffectDeepCompare"?"active":"",ref:l=>a.current.useEffectDeepCompare=l,to:"/hooks/lifecycle/useEffectDeepCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEffectDeepCompare"}),u.jsx(z,{className:e==="/hooks/lifecycle/useEffectOnce"?"active":"",ref:l=>a.current.useEffectOnce=l,to:"/hooks/lifecycle/useEffectOnce",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEffectOnce"}),u.jsx(z,{className:e==="/hooks/lifecycle/useIsMounted"?"active":"",ref:l=>a.current.useIsMounted=l,to:"/hooks/lifecycle/useIsMounted",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useIsMounted"}),u.jsx(z,{className:e==="/hooks/lifecycle/useLayoutEffectCompare"?"active":"",ref:l=>a.current.useLayoutEffectCompare=l,to:"/hooks/lifecycle/useLayoutEffectCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLayoutEffectCompare"}),u.jsx(z,{className:e==="/hooks/lifecycle/useLayoutEffectDeepCompare"?"active":"",ref:l=>a.current.useLayoutEffectDeepCompare=l,to:"/hooks/lifecycle/useLayoutEffectDeepCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLayoutEffectDeepCompare"}),u.jsx(z,{className:e==="/hooks/lifecycle/useLayoutEffectOnce"?"active":"",ref:l=>a.current.useLayoutEffectOnce=l,to:"/hooks/lifecycle/useLayoutEffectOnce",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLayoutEffectOnce"}),u.jsx(z,{className:e==="/hooks/lifecycle/useLogger"?"active":"",ref:l=>a.current.useLogger=l,to:"/hooks/lifecycle/useLogger",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLogger"}),u.jsx(z,{className:e==="/hooks/lifecycle/useRerender"?"active":"",ref:l=>a.current.useRerender=l,to:"/hooks/lifecycle/useRerender",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useRerender"}),u.jsx("p",{className:"sub-type",children:"Performance"}),u.jsx(z,{className:e==="/hooks/performance/useCallbackCompare"?"active":"",ref:l=>a.current.useCallbackCompare=l,to:"/hooks/performance/useCallbackCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useCallbackCompare"}),u.jsx(z,{className:e==="/hooks/performance/useCallbackDeepCompare"?"active":"",ref:l=>a.current.useCallbackDeepCompare=l,to:"/hooks/performance/useCallbackDeepCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useCallbackDeepCompare"}),u.jsx(z,{className:e==="/hooks/performance/useId"?"active":"",ref:l=>a.current.useId=l,to:"/hooks/performance/useId",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useId"}),u.jsx(z,{className:e==="/hooks/performance/useLazyRef"?"active":"",ref:l=>a.current.useLazyRef=l,to:"/hooks/performance/useLazyRef",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLazyRef"}),u.jsx(z,{className:e==="/hooks/performance/useMemoCompare"?"active":"",ref:l=>a.current.useMemoCompare=l,to:"/hooks/performance/useMemoCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMemoCompare"}),u.jsx(z,{className:e==="/hooks/performance/useMemoDeepCompare"?"active":"",ref:l=>a.current.useMemoDeepCompare=l,to:"/hooks/performance/useMemoDeepCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMemoDeepCompare"}),u.jsx(z,{className:e==="/hooks/performance/useMemoizedFn"?"active":"",ref:l=>a.current.useMemoizedFn=l,to:"/hooks/performance/useMemoizedFn",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMemoizedFn"}),u.jsx(z,{className:e==="/hooks/performance/useMergedRef"?"active":"",ref:l=>a.current.useMergedRef=l,to:"/hooks/performance/useMergedRef",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMergedRef"}),u.jsx("p",{className:"sub-type",children:"Events"}),u.jsx(z,{className:e==="/hooks/events/useBeforeUnload"?"active":"",ref:l=>a.current.useBeforeUnload=l,to:"/hooks/events/useBeforeUnload",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useBeforeUnload"}),u.jsx(z,{className:e==="/hooks/events/useClickOutside"?"active":"",ref:l=>a.current.useClickOutside=l,to:"/hooks/events/useClickOutside",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useClickOutside"}),u.jsx(z,{className:e==="/hooks/events/useContextMenu"?"active":"",ref:l=>a.current.useContextMenu=l,to:"/hooks/events/useContextMenu",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useContextMenu"}),u.jsx(z,{className:e==="/hooks/events/useDocumentVisibility"?"active":"",ref:l=>a.current.useDocumentVisibility=l,to:"/hooks/events/useDocumentVisibility",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDocumentVisibility"}),u.jsx(z,{className:e==="/hooks/events/useDoubleClick"?"active":"",ref:l=>a.current.useDoubleClick=l,to:"/hooks/events/useDoubleClick",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDoubleClick"}),u.jsx(z,{className:e==="/hooks/events/useEventDispatcher"?"active":"",ref:l=>a.current.useEventDispatcher=l,to:"/hooks/events/useEventDispatcher",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEventDispatcher"}),u.jsx(z,{className:e==="/hooks/events/useEventListener"?"active":"",ref:l=>a.current.useEventListener=l,to:"/hooks/events/useEventListener",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEventListener"}),u.jsx(z,{className:e==="/hooks/events/useEvents"?"active":"",ref:l=>a.current.useEvents=l,to:"/hooks/events/useEvents",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEvents"}),u.jsx(z,{className:e==="/hooks/events/useHotKeys"?"active":"",ref:l=>a.current.useHotKeys=l,to:"/hooks/events/useHotKeys",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useHotKeys"}),u.jsx(z,{className:e==="/hooks/events/useHover"?"active":"",ref:l=>a.current.useHover=l,to:"/hooks/events/useHover",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useHover"}),u.jsx(z,{className:e==="/hooks/events/useInfiniteScroll"?"active":"",ref:l=>a.current.useInfiniteScroll=l,to:"/hooks/events/useInfiniteScroll",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useInfiniteScroll"}),u.jsx(z,{className:e==="/hooks/events/useIntersectionObserver"?"active":"",ref:l=>a.current.useIntersectionObserver=l,to:"/hooks/events/useIntersectionObserver",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useIntersectionObserver"}),u.jsx(z,{className:e==="/hooks/events/useIsOnline"?"active":"",ref:l=>a.current.useIsOnline=l,to:"/hooks/events/useIsOnline",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useIsOnline"}),u.jsx(z,{className:e==="/hooks/events/useLongPress"?"active":"",ref:l=>a.current.useLongPress=l,to:"/hooks/events/useLongPress",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLongPress"}),u.jsx(z,{className:e==="/hooks/events/useMeasure"?"active":"",ref:l=>a.current.useMeasure=l,to:"/hooks/events/useMeasure",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMeasure"}),u.jsx(z,{className:e==="/hooks/events/useMouse"?"active":"",ref:l=>a.current.useMouse=l,to:"/hooks/events/useMouse",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMouse"}),u.jsx(z,{className:e==="/hooks/events/useMutationObserver"?"active":"",ref:l=>a.current.useMutationObserver=l,to:"/hooks/events/useMutationObserver",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMutationObserver"}),u.jsx(z,{className:e==="/hooks/events/useNetwork"?"active":"",ref:l=>a.current.useNetwork=l,to:"/hooks/events/useNetwork",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useNetwork"}),u.jsx(z,{className:e==="/hooks/events/usePerformAction"?"active":"",ref:l=>a.current.usePerformAction=l,to:"/hooks/events/usePerformAction",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePerformAction"}),u.jsx(z,{className:e==="/hooks/events/usePinchZoom"?"active":"",ref:l=>a.current.usePinchZoom=l,to:"/hooks/events/usePinchZoom",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePinchZoom"}),u.jsx(z,{className:e==="/hooks/events/usePointerLock"?"active":"",ref:l=>a.current.usePointerLock=l,to:"/hooks/events/usePointerLock",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePointerLock"}),u.jsx(z,{className:e==="/hooks/events/useResizeObserver"?"active":"",ref:l=>a.current.useResizeObserver=l,to:"/hooks/events/useResizeObserver",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useResizeObserver"}),u.jsx(z,{className:e==="/hooks/events/useResponsive"?"active":"",ref:l=>a.current.useResponsive=l,to:"/hooks/events/useResponsive",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useResponsive"}),u.jsx(z,{className:e==="/hooks/events/useScreen"?"active":"",ref:l=>a.current.useScreen=l,to:"/hooks/events/useScreen",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useScreen"}),u.jsx(z,{className:e==="/hooks/events/useScrollIntoView"?"active":"",ref:l=>a.current.useScrollIntoView=l,to:"/hooks/events/useScrollIntoView",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useScrollIntoView"}),u.jsx(z,{className:e==="/hooks/events/useSwipe"?"active":"",ref:l=>a.current.useSwipe=l,to:"/hooks/events/useSwipe",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useSwipe"}),u.jsx(z,{className:e==="/hooks/events/useVisible"?"active":"",ref:l=>a.current.useVisible=l,to:"/hooks/events/useVisible",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useVisible"}),u.jsx("p",{className:"sub-type",children:"API DOM"}),u.jsx(z,{className:e==="/hooks/api-useActiveElement"?"active":"",ref:l=>a.current.useActiveElement=l,to:"/hooks/api-dom/useActiveElement",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useActiveElement"}),u.jsx(z,{className:e==="/hooks/api-useAnimation"?"active":"",ref:l=>a.current.useAnimation=l,to:"/hooks/api-dom/useAnimation",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useAnimation"}),u.jsx(z,{className:e==="/hooks/api-useAudio"?"active":"",ref:l=>a.current.useAudio=l,to:"/hooks/api-dom/useAudio",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useAudio"}),u.jsx(z,{className:e==="/hooks/api-useBattery"?"active":"",ref:l=>a.current.useBattery=l,to:"/hooks/api-dom/useBattery",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useBattery"}),u.jsx(z,{className:e==="/hooks/api-useBluetooth"?"active":"",ref:l=>a.current.useBluetooth=l,to:"/hooks/api-dom/useBluetooth",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useBluetooth"}),u.jsx(z,{className:e==="/hooks/api-useBroadcastChannel"?"active":"",ref:l=>a.current.useBroadcastChannel=l,to:"/hooks/api-dom/useBroadcastChannel",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useBroadcastChannel"}),u.jsx(z,{className:e==="/hooks/api-useClipboard"?"active":"",ref:l=>a.current.useClipboard=l,to:"/hooks/api-dom/useClipboard",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useClipboard"}),u.jsx(z,{className:e==="/hooks/api-useColorScheme"?"active":"",ref:l=>a.current.useColorScheme=l,to:"/hooks/api-dom/useColorScheme",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useColorScheme"}),u.jsx(z,{className:e==="/hooks/api-useDebounce"?"active":"",ref:l=>a.current.useDebounce=l,to:"/hooks/api-dom/useDebounce",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDebounce"}),u.jsx(z,{className:e==="/hooks/api-useDeviceMotion"?"active":"",ref:l=>a.current.useDeviceMotion=l,to:"/hooks/api-dom/useDeviceMotion",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDeviceMotion"}),u.jsx(z,{className:e==="/hooks/api-useDeviceOrientation"?"active":"",ref:l=>a.current.useDeviceOrientation=l,to:"/hooks/api-dom/useDeviceOrientation",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDeviceOrientation"}),u.jsx(z,{className:e==="/hooks/api-useDialogBox"?"active":"",ref:l=>a.current.useDialogBox=l,to:"/hooks/api-dom/useDialogBox",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDialogBox"}),u.jsx(z,{className:e==="/hooks/api-useDisplayMedia"?"active":"",ref:l=>a.current.useDisplayMedia=l,to:"/hooks/api-dom/useDisplayMedia",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDisplayMedia"}),u.jsx(z,{className:e==="/hooks/api-useDocumentPIP"?"active":"",ref:l=>a.current.useDocumentPIP=l,to:"/hooks/api-dom/useDocumentPIP",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useDocumentPIP"}),u.jsx(z,{className:e==="/hooks/api-useEventSource"?"active":"",ref:l=>a.current.useEventSource=l,to:"/hooks/api-dom/useEventSource",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEventSource"}),u.jsx(z,{className:e==="/hooks/api-useEyeDropper"?"active":"",ref:l=>a.current.useEyeDropper=l,to:"/hooks/api-dom/useEyeDropper",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useEyeDropper"}),u.jsx(z,{className:e==="/hooks/api-useFetch"?"active":"",ref:l=>a.current.useFetch=l,to:"/hooks/api-dom/useFetch",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useFetch"}),u.jsx(z,{className:e==="/hooks/api-useFPS"?"active":"",ref:l=>a.current.useFPS=l,to:"/hooks/api-dom/useFPS",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useFPS"}),u.jsx(z,{className:e==="/hooks/api-useFullscreen"?"active":"",ref:l=>a.current.useFullscreen=l,to:"/hooks/api-dom/useFullscreen",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useFullscreen"}),u.jsx(z,{className:e==="/hooks/api-useGeolocation"?"active":"",ref:l=>a.current.useGeolocation=l,to:"/hooks/api-dom/useGeolocation",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useGeolocation"}),u.jsx(z,{className:e==="/hooks/api-useIdleCallback"?"active":"",ref:l=>a.current.useIdleCallback=l,to:"/hooks/api-dom/useIdleCallback",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useIdleCallback"}),u.jsx(z,{className:e==="/hooks/api-useInterval"?"active":"",ref:l=>a.current.useInterval=l,to:"/hooks/api-dom/useInterval",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useInterval"}),u.jsx(z,{className:e==="/hooks/api-useLock"?"active":"",ref:l=>a.current.useLock=l,to:"/hooks/api-dom/useLock",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useLock"}),u.jsx(z,{className:e==="/hooks/api-useMediaDevices"?"active":"",ref:l=>a.current.useMediaDevices=l,to:"/hooks/api-dom/useMediaDevices",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMediaDevices"}),u.jsx(z,{className:e==="/hooks/api-useMediaQuery"?"active":"",ref:l=>a.current.useMediaQuery=l,to:"/hooks/api-dom/useMediaQuery",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useMediaQuery"}),u.jsx(z,{className:e==="/hooks/api-usePermission"?"active":"",ref:l=>a.current.usePermission=l,to:"/hooks/api-dom/usePermission",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePermission"}),u.jsx(z,{className:e==="/hooks/api-usePIP"?"active":"",ref:l=>a.current.usePIP=l,to:"/hooks/api-dom/usePIP",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePIP"}),u.jsx(z,{className:e==="/hooks/api-usePopover"?"active":"",ref:l=>a.current.usePopover=l,to:"/hooks/api-dom/usePopover",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePopover"}),u.jsx(z,{className:e==="/hooks/api-usePromiseSuspensible"?"active":"",ref:l=>a.current.usePromiseSuspensible=l,to:"/hooks/api-dom/usePromiseSuspensible",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePromiseSuspensible"}),u.jsx(z,{className:e==="/hooks/api-usePublishSubscribe"?"active":"",ref:l=>a.current.usePublishSubscribe=l,to:"/hooks/api-dom/usePublishSubscribe",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"usePublishSubscribe"}),u.jsx(z,{className:e==="/hooks/api-useRaf"?"active":"",ref:l=>a.current.useRaf=l,to:"/hooks/api-dom/useRaf",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useRaf"}),u.jsx(z,{className:e==="/hooks/api-useReducedMotion"?"active":"",ref:l=>a.current.useReducedMotion=l,to:"/hooks/api-dom/useReducedMotion",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useReducedMotion"}),u.jsx(z,{className:e==="/hooks/api-useRemotePlayback"?"active":"",ref:l=>a.current.useRemotePlayback=l,to:"/hooks/api-dom/useRemotePlayback",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useRemotePlayback"}),u.jsx(z,{className:e==="/hooks/api-useScreenWakeLock"?"active":"",ref:l=>a.current.useScreenWakeLock=l,to:"/hooks/api-dom/useScreenWakeLock",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useScreenWakeLock"}),u.jsx(z,{className:e==="/hooks/api-useScript"?"active":"",ref:l=>a.current.useScript=l,to:"/hooks/api-dom/useScript",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useScript"}),u.jsx(z,{className:e==="/hooks/api-useShare"?"active":"",ref:l=>a.current.useShare=l,to:"/hooks/api-dom/useShare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useShare"}),u.jsx(z,{className:e==="/hooks/api-useSpeechRecognition"?"active":"",ref:l=>a.current.useSpeechRecognition=l,to:"/hooks/api-dom/useSpeechRecognition",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useSpeechRecognition"}),u.jsx(z,{className:e==="/hooks/api-useSpeechSynthesis"?"active":"",ref:l=>a.current.useSpeechSynthesis=l,to:"/hooks/api-dom/useSpeechSynthesis",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useSpeechSynthesis"}),u.jsx(z,{className:e==="/hooks/api-useTextSelection"?"active":"",ref:l=>a.current.useTextSelection=l,to:"/hooks/api-dom/useTextSelection",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useTextSelection"}),u.jsx(z,{className:e==="/hooks/api-useThrottle"?"active":"",ref:l=>a.current.useThrottle=l,to:"/hooks/api-dom/useThrottle",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useThrottle"}),u.jsx(z,{className:e==="/hooks/api-useTimeout"?"active":"",ref:l=>a.current.useTimeout=l,to:"/hooks/api-dom/useTimeout",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useTimeout"}),u.jsx(z,{className:e==="/hooks/api-useTitle"?"active":"",ref:l=>a.current.useTitle=l,to:"/hooks/api-dom/useTitle",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useTitle"}),u.jsx(z,{className:e==="/hooks/api-useVibrate"?"active":"",ref:l=>a.current.useVibrate=l,to:"/hooks/api-dom/useVibrate",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useVibrate"}),u.jsx(z,{className:e==="/hooks/api-useVideo"?"active":"",ref:l=>a.current.useVideo=l,to:"/hooks/api-dom/useVideo",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useVideo"}),u.jsx(z,{className:e==="/hooks/api-useWebSocket"?"active":"",ref:l=>a.current.useWebSocket=l,to:"/hooks/api-dom/useWebSocket",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useWebSocket"}),u.jsx(z,{className:e==="/hooks/api-useWebWorker"?"active":"",ref:l=>a.current.useWebWorker=l,to:"/hooks/api-dom/useWebWorker",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useWebWorker"}),u.jsx(z,{className:e==="/hooks/api-useWebWorkerFn"?"active":"",ref:l=>a.current.useWebWorkerFn=l,to:"/hooks/api-dom/useWebWorkerFn",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"useWebWorkerFn"}),u.jsx("p",{className:"sub-type",children:"Components"}),u.jsx(z,{className:e==="/components/ErrorBoundary"?"active":"",ref:l=>a.current.ErrorBoundary=l,to:"/components/ErrorBoundary",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"ErrorBoundary"}),u.jsx(z,{className:e==="/components/For"?"active":"",ref:l=>a.current.For=l,to:"/components/For",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"For"}),u.jsx(z,{className:e==="/components/Lazy"?"active":"",ref:l=>a.current.Lazy=l,to:"/components/Lazy",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"Lazy"}),u.jsx(z,{className:e==="/components/Show"?"active":"",ref:l=>a.current.Show=l,to:"/components/Show",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"Show"}),u.jsx(z,{className:e==="/components/SwitchCase"?"active":"",ref:l=>a.current.SwitchCase=l,to:"/components/SwitchCase",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"SwitchCase"}),u.jsx("p",{className:"sub-type",children:"Utils"}),u.jsx(z,{className:e==="/utils/alphanumericCompare"?"active":"",ref:l=>a.current.alphanumericCompare=l,to:"/utils/alphanumericCompare",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"alphanumericCompare"}),u.jsx(z,{className:e==="/utils/changeStringCase"?"active":"",ref:l=>a.current.changeStringCase=l,to:"/utils/changeStringCase",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"changeStringCase"}),u.jsx(z,{className:e==="/utils/defaultSerializer"?"active":"",ref:l=>a.current.defaultSerializer=l,to:"/utils/defaultSerializer",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"defaultSerializer"}),u.jsx(z,{className:e==="/utils/detectBrowser"?"active":"",ref:l=>a.current.detectBrowser=l,to:"/utils/detectBrowser",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"detectBrowser"}),u.jsx(z,{className:e==="/utils/getBase64"?"active":"",ref:l=>a.current.getBase64=l,to:"/utils/getBase64",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"getBase64"}),u.jsx(z,{className:e==="/utils/getKeyObjectFromValue"?"active":"",ref:l=>a.current.getKeyObjectFromValue=l,to:"/utils/getKeyObjectFromValue",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"getKeyObjectFromValue"}),u.jsx(z,{className:e==="/utils/getObjectFromDottedString"?"active":"",ref:l=>a.current.getObjectFromDottedString=l,to:"/utils/getObjectFromDottedString",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"getObjectFromDottedString"}),u.jsx(z,{className:e==="/utils/hotKeyHandler"?"active":"",ref:l=>a.current.hotKeyHandler=l,to:"/utils/hotKeyHandler",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"hotKeyHandler"}),u.jsx(z,{className:e==="/utils/isAsync"?"active":"",ref:l=>a.current.isAsync=l,to:"/utils/isAsync",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"isAsync"}),u.jsx(z,{className:e==="/utils/isClient"?"active":"",ref:l=>a.current.isClient=l,to:"/utils/isClient",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"isClient"}),u.jsx(z,{className:e==="/utils/isDeepEqual"?"active":"",ref:l=>a.current.isDeepEqual=l,to:"/utils/isDeepEqual",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"isDeepEqual"}),u.jsx(z,{className:e==="/utils/isMouseEvent"?"active":"",ref:l=>a.current.isMouseEvent=l,to:"/utils/isMouseEvent",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"isMouseEvent"}),u.jsx(z,{className:e==="/utils/isShallowEqual"?"active":"",ref:l=>a.current.isShallowEqual=l,to:"/utils/isShallowEqual",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"isShallowEqual"}),u.jsx(z,{className:e==="/utils/isTouchEvent"?"active":"",ref:l=>a.current.isTouchEvent=l,to:"/utils/isTouchEvent",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"isTouchEvent"}),u.jsx(z,{className:e==="/utils/lazy"?"active":"",ref:l=>a.current.lazy=l,to:"/utils/lazy",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"lazy"}),u.jsx(z,{className:e==="/utils/mergeObjects"?"active":"",ref:l=>a.current.mergeObjects=l,to:"/utils/mergeObjects",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"mergeObjects"}),u.jsx(z,{className:e==="/utils/removeDuplicatedFromArrayObjects"?"active":"",ref:l=>a.current.removeDuplicatedFromArrayObjects=l,to:"/utils/removeDuplicatedFromArrayObjects",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"removeDuplicatedFromArrayObjects"}),u.jsx(z,{className:e==="/utils/removePropertiesFromArrayObjects"?"active":"",ref:l=>a.current.removePropertiesFromArrayObjects=l,to:"/utils/removePropertiesFromArrayObjects",onClick:()=>{var l;(l=i.current)==null||l.scrollTo(0,0),window.innerWidth<1190&&c()},children:"removePropertiesFromArrayObjects"})]})]}),u.jsx("div",{className:"container",ref:i,children:u.jsx(Q1,{children:u.jsx($1,{nodeRef:o,timeout:300,classNames:"page",unmountOnExit:!0,children:()=>u.jsx("div",{ref:o,className:"page",children:n})},t.pathname)})})]})}function X1({children:e}){return u.jsxs("div",{className:"demo",children:[u.jsx("span",{className:"demo-label",children:"DEMO"}),e]})}function J1(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Z1=/[ \t\n\f\r]/g;function eS(e){return typeof e=="object"?e.type==="text"?ph(e.value):!1:ph(e)}function ph(e){return e.replace(Z1,"")===""}let Va=class{constructor(t,n,o){this.property=t,this.normal=n,o&&(this.space=o)}};Va.prototype.property={};Va.prototype.normal={};Va.prototype.space=null;function tv(e,t){const n={},o={};let r=-1;for(;++r<e.length;)Object.assign(n,e[r].property),Object.assign(o,e[r].normal);return new Va(n,o,t)}function Hu(e){return e.toLowerCase()}let Vt=class{constructor(t,n){this.property=t,this.attribute=n}};Vt.prototype.space=null;Vt.prototype.boolean=!1;Vt.prototype.booleanish=!1;Vt.prototype.overloadedBoolean=!1;Vt.prototype.number=!1;Vt.prototype.commaSeparated=!1;Vt.prototype.spaceSeparated=!1;Vt.prototype.commaOrSpaceSeparated=!1;Vt.prototype.mustUseProperty=!1;Vt.prototype.defined=!1;let tS=0;const de=Io(),Ve=Io(),nv=Io(),B=Io(),Te=Io(),gr=Io(),xt=Io();function Io(){return 2**++tS}const Wu=Object.freeze(Object.defineProperty({__proto__:null,boolean:de,booleanish:Ve,commaOrSpaceSeparated:xt,commaSeparated:gr,number:B,overloadedBoolean:nv,spaceSeparated:Te},Symbol.toStringTag,{value:"Module"})),As=Object.keys(Wu);let np=class extends Vt{constructor(t,n,o,r){let a=-1;if(super(t,n),fh(this,"space",r),typeof o=="number")for(;++a<As.length;){const i=As[a];fh(this,As[a],(o&Wu[i])===Wu[i])}}};np.prototype.defined=!0;function fh(e,t,n){n&&(e[t]=n)}const nS={}.hasOwnProperty;function Mr(e){const t={},n={};let o;for(o in e.properties)if(nS.call(e.properties,o)){const r=e.properties[o],a=new np(o,e.transform(e.attributes||{},o),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(o)&&(a.mustUseProperty=!0),t[o]=a,n[Hu(o)]=o,n[Hu(a.attribute)]=o}return new Va(t,n,e.space)}const ov=Mr({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),rv=Mr({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function av(e,t){return t in e?e[t]:t}function iv(e,t){return av(e,t.toLowerCase())}const lv=Mr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:iv,properties:{xmlns:null,xmlnsXLink:null}}),sv=Mr({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Ve,ariaAutoComplete:null,ariaBusy:Ve,ariaChecked:Ve,ariaColCount:B,ariaColIndex:B,ariaColSpan:B,ariaControls:Te,ariaCurrent:null,ariaDescribedBy:Te,ariaDetails:null,ariaDisabled:Ve,ariaDropEffect:Te,ariaErrorMessage:null,ariaExpanded:Ve,ariaFlowTo:Te,ariaGrabbed:Ve,ariaHasPopup:null,ariaHidden:Ve,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Te,ariaLevel:B,ariaLive:null,ariaModal:Ve,ariaMultiLine:Ve,ariaMultiSelectable:Ve,ariaOrientation:null,ariaOwns:Te,ariaPlaceholder:null,ariaPosInSet:B,ariaPressed:Ve,ariaReadOnly:Ve,ariaRelevant:null,ariaRequired:Ve,ariaRoleDescription:Te,ariaRowCount:B,ariaRowIndex:B,ariaRowSpan:B,ariaSelected:Ve,ariaSetSize:B,ariaSort:null,ariaValueMax:B,ariaValueMin:B,ariaValueNow:B,ariaValueText:null,role:null}}),oS=Mr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:iv,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:gr,acceptCharset:Te,accessKey:Te,action:null,allow:null,allowFullScreen:de,allowPaymentRequest:de,allowUserMedia:de,alt:null,as:null,async:de,autoCapitalize:null,autoComplete:Te,autoFocus:de,autoPlay:de,blocking:Te,capture:de,charSet:null,checked:de,cite:null,className:Te,cols:B,colSpan:null,content:null,contentEditable:Ve,controls:de,controlsList:Te,coords:B|gr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:de,defer:de,dir:null,dirName:null,disabled:de,download:nv,draggable:Ve,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:de,formTarget:null,headers:Te,height:B,hidden:de,high:B,href:null,hrefLang:null,htmlFor:Te,httpEquiv:Te,id:null,imageSizes:null,imageSrcSet:null,inert:de,inputMode:null,integrity:null,is:null,isMap:de,itemId:null,itemProp:Te,itemRef:Te,itemScope:de,itemType:Te,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:de,low:B,manifest:null,max:null,maxLength:B,media:null,method:null,min:null,minLength:B,multiple:de,muted:de,name:null,nonce:null,noModule:de,noValidate:de,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:de,optimum:B,pattern:null,ping:Te,placeholder:null,playsInline:de,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:de,referrerPolicy:null,rel:Te,required:de,reversed:de,rows:B,rowSpan:B,sandbox:Te,scope:null,scoped:de,seamless:de,selected:de,shape:null,size:B,sizes:null,slot:null,span:B,spellCheck:Ve,src:null,srcDoc:null,srcLang:null,srcSet:null,start:B,step:null,style:null,tabIndex:B,target:null,title:null,translate:null,type:null,typeMustMatch:de,useMap:null,value:Ve,width:B,wrap:null,align:null,aLink:null,archive:Te,axis:null,background:null,bgColor:null,border:B,borderColor:null,bottomMargin:B,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:de,declare:de,event:null,face:null,frame:null,frameBorder:null,hSpace:B,leftMargin:B,link:null,longDesc:null,lowSrc:null,marginHeight:B,marginWidth:B,noResize:de,noHref:de,noShade:de,noWrap:de,object:null,profile:null,prompt:null,rev:null,rightMargin:B,rules:null,scheme:null,scrolling:Ve,standby:null,summary:null,text:null,topMargin:B,valueType:null,version:null,vAlign:null,vLink:null,vSpace:B,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:de,disableRemotePlayback:de,prefix:null,property:null,results:B,security:null,unselectable:null}}),rS=Mr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:av,properties:{about:xt,accentHeight:B,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:B,amplitude:B,arabicForm:null,ascent:B,attributeName:null,attributeType:null,azimuth:B,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:B,by:null,calcMode:null,capHeight:B,className:Te,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:B,diffuseConstant:B,direction:null,display:null,dur:null,divisor:B,dominantBaseline:null,download:de,dx:null,dy:null,edgeMode:null,editable:null,elevation:B,enableBackground:null,end:null,event:null,exponent:B,externalResourcesRequired:null,fill:null,fillOpacity:B,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:gr,g2:gr,glyphName:gr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:B,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:B,horizOriginX:B,horizOriginY:B,id:null,ideographic:B,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:B,k:B,k1:B,k2:B,k3:B,k4:B,kernelMatrix:xt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:B,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:B,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:B,overlineThickness:B,paintOrder:null,panose1:null,path:null,pathLength:B,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Te,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:B,pointsAtY:B,pointsAtZ:B,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:xt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:xt,rev:xt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:xt,requiredFeatures:xt,requiredFonts:xt,requiredFormats:xt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:B,specularExponent:B,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:B,strikethroughThickness:B,string:null,stroke:null,strokeDashArray:xt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:B,strokeOpacity:B,strokeWidth:null,style:null,surfaceScale:B,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:xt,tabIndex:B,tableValues:null,target:null,targetX:B,targetY:B,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:xt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:B,underlineThickness:B,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:B,values:null,vAlphabetic:B,vMathematical:B,vectorEffect:null,vHanging:B,vIdeographic:B,version:null,vertAdvY:B,vertOriginX:B,vertOriginY:B,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:B,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),aS=/^data[-\w.:]+$/i,hh=/-[a-z]/g,iS=/[A-Z]/g;function lS(e,t){const n=Hu(t);let o=t,r=Vt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&aS.test(t)){if(t.charAt(4)==="-"){const a=t.slice(5).replace(hh,cS);o="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=t.slice(4);if(!hh.test(a)){let i=a.replace(iS,sS);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}r=np}return new r(o,t)}function sS(e){return"-"+e.toLowerCase()}function cS(e){return e.charAt(1).toUpperCase()}const uS={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},dS=tv([rv,ov,lv,sv,oS],"html"),cv=tv([rv,ov,lv,sv,rS],"svg");function pS(e){return e.join(" ").trim()}var op={exports:{}},mh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,fS=/\n/g,hS=/^\s*/,mS=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,gS=/^:\s*/,_S=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,bS=/^[;\s]*/,vS=/^\s+|\s+$/g,yS=`
`,gh="/",_h="*",yo="",kS="comment",wS="declaration",SS=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,o=1;function r(v){var k=v.match(fS);k&&(n+=k.length);var T=v.lastIndexOf(yS);o=~T?v.length-T:o+v.length}function a(){var v={line:n,column:o};return function(k){return k.position=new i(v),l(),k}}function i(v){this.start=v,this.end={line:n,column:o},this.source=t.source}i.prototype.content=e;function s(v){var k=new Error(t.source+":"+n+":"+o+": "+v);if(k.reason=v,k.filename=t.source,k.line=n,k.column=o,k.source=e,!t.silent)throw k}function c(v){var k=v.exec(e);if(k){var T=k[0];return r(T),e=e.slice(T.length),k}}function l(){c(hS)}function d(v){var k;for(v=v||[];k=p();)k!==!1&&v.push(k);return v}function p(){var v=a();if(!(gh!=e.charAt(0)||_h!=e.charAt(1))){for(var k=2;yo!=e.charAt(k)&&(_h!=e.charAt(k)||gh!=e.charAt(k+1));)++k;if(k+=2,yo===e.charAt(k-1))return s("End of comment missing");var T=e.slice(2,k-2);return o+=2,r(T),e=e.slice(k),o+=2,v({type:kS,comment:T})}}function f(){var v=a(),k=c(mS);if(k){if(p(),!c(gS))return s("property missing ':'");var T=c(_S),b=v({type:wS,property:bh(k[0].replace(mh,yo)),value:T?bh(T[0].replace(mh,yo)):yo});return c(bS),b}}function h(){var v=[];d(v);for(var k;k=f();)k!==!1&&(v.push(k),d(v));return v}return l(),h()};function bh(e){return e?e.replace(vS,yo):yo}var xS=SS;function uv(e,t){var n=null;if(!e||typeof e!="string")return n;for(var o,r=xS(e),a=typeof t=="function",i,s,c=0,l=r.length;c<l;c++)o=r[c],i=o.property,s=o.value,a?t(i,s,o):s&&(n||(n={}),n[i]=s);return n}op.exports=uv;op.exports.default=uv;var CS=op.exports;const ES=Bt(CS),dv=pv("end"),rp=pv("start");function pv(e){return t;function t(n){const o=n&&n.position&&n.position[e]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function TS(e){const t=rp(e),n=dv(e);if(t&&n)return{start:t,end:n}}function ma(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?vh(e.position):"start"in e||"end"in e?vh(e):"line"in e||"column"in e?Bu(e):""}function Bu(e){return yh(e&&e.line)+":"+yh(e&&e.column)}function vh(e){return Bu(e&&e.start)+"-"+Bu(e&&e.end)}function yh(e){return e&&typeof e=="number"?e:1}class ht extends Error{constructor(t,n,o){super(),typeof n=="string"&&(o=n,n=void 0);let r="",a={},i=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?r=t:!a.cause&&t&&(i=!0,r=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof o=="string"){const c=o.indexOf(":");c===-1?a.ruleId=o:(a.source=o.slice(0,c),a.ruleId=o.slice(c+1))}if(!a.place&&a.ancestors&&a.ancestors){const c=a.ancestors[a.ancestors.length-1];c&&(a.place=c.position)}const s=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=s?s.line:void 0,this.name=ma(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=i&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}}ht.prototype.file="";ht.prototype.name="";ht.prototype.reason="";ht.prototype.message="";ht.prototype.stack="";ht.prototype.column=void 0;ht.prototype.line=void 0;ht.prototype.ancestors=void 0;ht.prototype.cause=void 0;ht.prototype.fatal=void 0;ht.prototype.place=void 0;ht.prototype.ruleId=void 0;ht.prototype.source=void 0;const ap={}.hasOwnProperty,AS=new Map,PS=/[A-Z]/g,RS=/-([a-z])/g,MS=new Set(["table","tbody","thead","tfoot","tr"]),DS=new Set(["td","th"]);function jS(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let o;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=OS(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=zS(n,t.jsx,t.jsxs)}const r={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:o,elementAttributeNameCase:t.elementAttributeNameCase||"react",filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?cv:dS,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=fv(r,e,void 0);return a&&typeof a!="string"?a:r.create(e,r.Fragment,{children:a||void 0},void 0)}function fv(e,t,n){if(t.type==="element"||t.type==="root"){const o=e.schema;let r=o;t.type==="element"&&t.tagName.toLowerCase()==="svg"&&o.space==="html"&&(r=cv,e.schema=r),e.ancestors.push(t);let a=LS(e,t);const i=IS(e,e.ancestors);let s=e.Fragment;if(e.ancestors.pop(),t.type==="element")if(a&&MS.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!eS(c):!0})),ap.call(e.components,t.tagName)){const c=t.tagName;s=e.components[c],typeof s!="string"&&s!==e.Fragment&&e.passNode&&(i.node=t)}else s=t.tagName;if(a.length>0){const c=a.length>1?a:a[0];c&&(i.children=c)}return e.schema=o,e.create(t,s,i,n)}if(t.type==="text")return t.value}function zS(e,t,n){return o;function o(r,a,i,s){const l=Array.isArray(i.children)?n:t;return s?l(a,i,s):l(a,i)}}function OS(e,t){return n;function n(o,r,a,i){const s=Array.isArray(a.children),c=rp(o);return t(r,a,i,s,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function LS(e,t){const n=[];let o=-1;const r=e.passKeys?new Map:AS;for(;++o<t.children.length;){const a=t.children[o];let i;if(e.passKeys&&a.type==="element"){const c=r.get(a.tagName)||0;i=a.tagName+"-"+c,r.set(a.tagName,c+1)}const s=fv(e,a,i);s!==void 0&&n.push(s)}return n}function IS(e,t){const n=t[t.length-1],o={};let r;if("properties"in n&&n.properties){let a;for(r in n.properties)if(r!=="children"&&ap.call(n.properties,r)){const i=FS(e,t,r,n.properties[r]);if(i){const[s,c]=i;e.tableCellAlignToStyle&&s==="align"&&typeof c=="string"&&DS.has(n.tagName)?a=c:o[s]=c}}if(a){const i=o.style||(o.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}}return o}function FS(e,t,n,o){const r=lS(e.schema,n);if(!(o==null||typeof o=="number"&&Number.isNaN(o))){if(Array.isArray(o)&&(o=r.commaSeparated?J1(o):pS(o)),r.property==="style"){let a=typeof o=="object"?o:US(e,t,String(o));return e.stylePropertyNameCase==="css"&&(a=NS(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&r.space?uS[r.property]||r.property:r.attribute,o]}}function US(e,t,n){const o={};try{ES(n,r)}catch(a){if(!e.ignoreInvalidStyle){const i=a,s=new ht("Cannot parse `style` attribute",{ancestors:t,cause:i,source:"hast-util-to-jsx-runtime",ruleId:"style"});throw s.file=e.filePath||void 0,s.url="https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute",s}}return o;function r(a,i){let s=a;s.slice(0,2)!=="--"&&(s.slice(0,4)==="-ms-"&&(s="ms-"+s.slice(4)),s=s.replace(RS,WS)),o[s]=i}}function NS(e){const t={};let n;for(n in e)ap.call(e,n)&&(t[HS(n)]=e[n]);return t}function HS(e){let t=e.replace(PS,BS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function WS(e,t){return t.toUpperCase()}function BS(e){return"-"+e.toLowerCase()}const Ps={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},VS=ao(/\p{P}/u),ut=ao(/[A-Za-z]/),it=ao(/[\dA-Za-z]/),$S=ao(/[#-'*+\--9=?A-Z^-~]/);function gl(e){return e!==null&&(e<32||e===127)}const Vu=ao(/\d/),qS=ao(/[\dA-Fa-f]/),hv=ao(/[!-/:-@[-`{-~]/);function te(e){return e!==null&&e<-2}function Ee(e){return e!==null&&(e<0||e===32)}function me(e){return e===-2||e===-1||e===32}function Nl(e){return hv(e)||VS(e)}const zo=ao(/\s/);function ao(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}const GS={'"':"quot","&":"amp","<":"lt",">":"gt"};function KS(e){return e.replace(/["&<>]/g,t);function t(n){return"&"+GS[n]+";"}}function QS(e,t){const n=KS(Fo(e||""));if(!t)return n;const o=n.indexOf(":"),r=n.indexOf("?"),a=n.indexOf("#"),i=n.indexOf("/");return o<0||i>-1&&o>i||r>-1&&o>r||a>-1&&o>a||t.test(n.slice(0,o))?n:""}function Fo(e){const t=[];let n=-1,o=0,r=0;for(;++n<e.length;){const a=e.charCodeAt(n);let i="";if(a===37&&it(e.charCodeAt(n+1))&&it(e.charCodeAt(n+2)))r=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(i=String.fromCharCode(a));else if(a>55295&&a<57344){const s=e.charCodeAt(n+1);a<56320&&s>56319&&s<57344?(i=String.fromCharCode(a,s),r=1):i="�"}else i=String.fromCharCode(a);i&&(t.push(e.slice(o,n),encodeURIComponent(i)),o=n+r+1,i=""),r&&(n+=r,r=0)}return t.join("")+e.slice(o)}const YS={};function ip(e,t){const n=t||YS,o=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return mv(e,o,r)}function mv(e,t,n){if(XS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return kh(e.children,t,n)}return Array.isArray(e)?kh(e,t,n):""}function kh(e,t,n){const o=[];let r=-1;for(;++r<e.length;)o[r]=mv(e[r],t,n);return o.join("")}function XS(e){return!!(e&&typeof e=="object")}const wh=document.createElement("i");function lp(e){const t="&"+e+";";wh.innerHTML=t;const n=wh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function At(e,t,n,o){const r=e.length;let a=0,i;if(t<0?t=-t>r?0:r+t:t=t>r?r:t,n=n>0?n:0,o.length<1e4)i=Array.from(o),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);a<o.length;)i=o.slice(a,a+1e4),i.unshift(t,0),e.splice(...i),a+=1e4,t+=1e4}function Ft(e,t){return e.length>0?(At(e,e.length,0,t),e):t}const Sh={}.hasOwnProperty;function gv(e){const t={};let n=-1;for(;++n<e.length;)JS(t,e[n]);return t}function JS(e,t){let n;for(n in t){const r=(Sh.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n];let i;if(a)for(i in a){Sh.call(r,i)||(r[i]=[]);const s=a[i];ZS(r[i],Array.isArray(s)?s:s?[s]:[])}}}function ZS(e,t){let n=-1;const o=[];for(;++n<t.length;)(t[n].add==="after"?e:o).push(t[n]);At(e,0,0,o)}function _v(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCharCode(n)}function tn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function _e(e,t,n,o){const r=o?o-1:Number.POSITIVE_INFINITY;let a=0;return i;function i(c){return me(c)?(e.enter(n),s(c)):t(c)}function s(c){return me(c)&&a++<r?(e.consume(c),s):(e.exit(n),t(c))}}const ex={tokenize:tx};function tx(e){const t=e.attempt(this.parser.constructs.contentInitial,o,r);let n;return t;function o(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),_e(e,t,"linePrefix")}function r(s){return e.enter("paragraph"),a(s)}function a(s){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,i(s)}function i(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return te(s)?(e.consume(s),e.exit("chunkText"),a):(e.consume(s),i)}}const nx={tokenize:ox},xh={tokenize:rx};function ox(e){const t=this,n=[];let o=0,r,a,i;return s;function s(g){if(o<n.length){const _=n[o];return t.containerState=_[1],e.attempt(_[0].continuation,c,l)(g)}return l(g)}function c(g){if(o++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&m();const _=t.events.length;let x=_,w;for(;x--;)if(t.events[x][0]==="exit"&&t.events[x][1].type==="chunkFlow"){w=t.events[x][1].end;break}b(o);let A=_;for(;A<t.events.length;)t.events[A][1].end=Object.assign({},w),A++;return At(t.events,x+1,0,t.events.slice(_)),t.events.length=A,l(g)}return s(g)}function l(g){if(o===n.length){if(!r)return f(g);if(r.currentConstruct&&r.currentConstruct.concrete)return v(g);t.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(xh,d,p)(g)}function d(g){return r&&m(),b(o),f(g)}function p(g){return t.parser.lazy[t.now().line]=o!==n.length,i=t.now().offset,v(g)}function f(g){return t.containerState={},e.attempt(xh,h,v)(g)}function h(g){return o++,n.push([t.currentConstruct,t.containerState]),f(g)}function v(g){if(g===null){r&&m(),b(0),e.consume(g);return}return r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:a,_tokenizer:r}),k(g)}function k(g){if(g===null){T(e.exit("chunkFlow"),!0),b(0),e.consume(g);return}return te(g)?(e.consume(g),T(e.exit("chunkFlow")),o=0,t.interrupt=void 0,s):(e.consume(g),k)}function T(g,_){const x=t.sliceStream(g);if(_&&x.push(null),g.previous=a,a&&(a.next=g),a=g,r.defineSkip(g.start),r.write(x),t.parser.lazy[g.start.line]){let w=r.events.length;for(;w--;)if(r.events[w][1].start.offset<i&&(!r.events[w][1].end||r.events[w][1].end.offset>i))return;const A=t.events.length;let R=A,j,E;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){if(j){E=t.events[R][1].end;break}j=!0}for(b(o),w=A;w<t.events.length;)t.events[w][1].end=Object.assign({},E),w++;At(t.events,R+1,0,t.events.slice(A)),t.events.length=w}}function b(g){let _=n.length;for(;_-- >g;){const x=n[_];t.containerState=x[1],x[0].exit.call(t,e)}n.length=g}function m(){r.write([null]),a=void 0,r=void 0,t.containerState._closeFlow=void 0}}function rx(e,t,n){return _e(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function _l(e){if(e===null||Ee(e)||zo(e))return 1;if(Nl(e))return 2}function Hl(e,t,n){const o=[];let r=-1;for(;++r<e.length;){const a=e[r].resolveAll;a&&!o.includes(a)&&(t=a(t,n),o.push(a))}return t}const $u={name:"attention",tokenize:ix,resolveAll:ax};function ax(e,t){let n=-1,o,r,a,i,s,c,l,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(o=n;o--;)if(e[o][0]==="exit"&&e[o][1].type==="attentionSequence"&&e[o][1]._open&&t.sliceSerialize(e[o][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[o][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[o][1].end.offset-e[o][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[o][1].end.offset-e[o][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p=Object.assign({},e[o][1].end),f=Object.assign({},e[n][1].start);Ch(p,-c),Ch(f,c),i={type:c>1?"strongSequence":"emphasisSequence",start:p,end:Object.assign({},e[o][1].end)},s={type:c>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},a={type:c>1?"strongText":"emphasisText",start:Object.assign({},e[o][1].end),end:Object.assign({},e[n][1].start)},r={type:c>1?"strong":"emphasis",start:Object.assign({},i.start),end:Object.assign({},s.end)},e[o][1].end=Object.assign({},i.start),e[n][1].start=Object.assign({},s.end),l=[],e[o][1].end.offset-e[o][1].start.offset&&(l=Ft(l,[["enter",e[o][1],t],["exit",e[o][1],t]])),l=Ft(l,[["enter",r,t],["enter",i,t],["exit",i,t],["enter",a,t]]),l=Ft(l,Hl(t.parser.constructs.insideSpan.null,e.slice(o+1,n),t)),l=Ft(l,[["exit",a,t],["enter",s,t],["exit",s,t],["exit",r,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,l=Ft(l,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,At(e,o-1,n-o+3,l),n=o+l.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function ix(e,t){const n=this.parser.constructs.attentionMarkers.null,o=this.previous,r=_l(o);let a;return i;function i(c){return a=c,e.enter("attentionSequence"),s(c)}function s(c){if(c===a)return e.consume(c),s;const l=e.exit("attentionSequence"),d=_l(c),p=!d||d===2&&r||n.includes(c),f=!r||r===2&&d||n.includes(o);return l._open=!!(a===42?p:p&&(r||!f)),l._close=!!(a===42?f:f&&(d||!p)),t(c)}}function Ch(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const lx={name:"autolink",tokenize:sx};function sx(e,t,n){let o=0;return r;function r(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(h){return ut(h)?(e.consume(h),i):l(h)}function i(h){return h===43||h===45||h===46||it(h)?(o=1,s(h)):l(h)}function s(h){return h===58?(e.consume(h),o=0,c):(h===43||h===45||h===46||it(h))&&o++<32?(e.consume(h),s):(o=0,l(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||gl(h)?n(h):(e.consume(h),c)}function l(h){return h===64?(e.consume(h),d):$S(h)?(e.consume(h),l):n(h)}function d(h){return it(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),o=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||it(h))&&o++<63){const v=h===45?f:p;return e.consume(h),v}return n(h)}}const $a={tokenize:cx,partial:!0};function cx(e,t,n){return o;function o(a){return me(a)?_e(e,r,"linePrefix")(a):r(a)}function r(a){return a===null||te(a)?t(a):n(a)}}const bv={name:"blockQuote",tokenize:ux,continuation:{tokenize:dx},exit:px};function ux(e,t,n){const o=this;return r;function r(i){if(i===62){const s=o.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),a}return n(i)}function a(i){return me(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function dx(e,t,n){const o=this;return r;function r(i){return me(i)?_e(e,a,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):a(i)}function a(i){return e.attempt(bv,t,n)(i)}}function px(e){e.exit("blockQuote")}const vv={name:"characterEscape",tokenize:fx};function fx(e,t,n){return o;function o(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),r}function r(a){return hv(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}const yv={name:"characterReference",tokenize:hx};function hx(e,t,n){const o=this;let r=0,a,i;return s;function s(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),a=31,i=it,d(p))}function l(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,i=qS,d):(e.enter("characterReferenceValue"),a=7,i=Vu,d(p))}function d(p){if(p===59&&r){const f=e.exit("characterReferenceValue");return i===it&&!lp(o.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(p)&&r++<a?(e.consume(p),d):n(p)}}const Eh={tokenize:gx,partial:!0},Th={name:"codeFenced",tokenize:mx,concrete:!0};function mx(e,t,n){const o=this,r={tokenize:x,partial:!0};let a=0,i=0,s;return c;function c(w){return l(w)}function l(w){const A=o.events[o.events.length-1];return a=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,s=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===s?(i++,e.consume(w),d):i<3?n(w):(e.exit("codeFencedFenceSequence"),me(w)?_e(e,p,"whitespace")(w):p(w))}function p(w){return w===null||te(w)?(e.exit("codeFencedFence"),o.interrupt?t(w):e.check(Eh,k,_)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===null||te(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(w)):me(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),_e(e,h,"whitespace")(w)):w===96&&w===s?n(w):(e.consume(w),f)}function h(w){return w===null||te(w)?p(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(w))}function v(w){return w===null||te(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(w)):w===96&&w===s?n(w):(e.consume(w),v)}function k(w){return e.attempt(r,_,T)(w)}function T(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),b}function b(w){return a>0&&me(w)?_e(e,m,"linePrefix",a+1)(w):m(w)}function m(w){return w===null||te(w)?e.check(Eh,k,_)(w):(e.enter("codeFlowValue"),g(w))}function g(w){return w===null||te(w)?(e.exit("codeFlowValue"),m(w)):(e.consume(w),g)}function _(w){return e.exit("codeFenced"),t(w)}function x(w,A,R){let j=0;return E;function E(Q){return w.enter("lineEnding"),w.consume(Q),w.exit("lineEnding"),N}function N(Q){return w.enter("codeFencedFence"),me(Q)?_e(w,F,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):F(Q)}function F(Q){return Q===s?(w.enter("codeFencedFenceSequence"),Y(Q)):R(Q)}function Y(Q){return Q===s?(j++,w.consume(Q),Y):j>=i?(w.exit("codeFencedFenceSequence"),me(Q)?_e(w,re,"whitespace")(Q):re(Q)):R(Q)}function re(Q){return Q===null||te(Q)?(w.exit("codeFencedFence"),A(Q)):R(Q)}}}function gx(e,t,n){const o=this;return r;function r(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a)}function a(i){return o.parser.lazy[o.now().line]?n(i):t(i)}}const Rs={name:"codeIndented",tokenize:bx},_x={tokenize:vx,partial:!0};function bx(e,t,n){const o=this;return r;function r(l){return e.enter("codeIndented"),_e(e,a,"linePrefix",4+1)(l)}function a(l){const d=o.events[o.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?i(l):n(l)}function i(l){return l===null?c(l):te(l)?e.attempt(_x,i,c)(l):(e.enter("codeFlowValue"),s(l))}function s(l){return l===null||te(l)?(e.exit("codeFlowValue"),i(l)):(e.consume(l),s)}function c(l){return e.exit("codeIndented"),t(l)}}function vx(e,t,n){const o=this;return r;function r(i){return o.parser.lazy[o.now().line]?n(i):te(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),r):_e(e,a,"linePrefix",4+1)(i)}function a(i){const s=o.events[o.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):te(i)?r(i):n(i)}}const yx={name:"codeText",tokenize:Sx,resolve:kx,previous:wx};function kx(e){let t=e.length-4,n=3,o,r;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(o=n;++o<t;)if(e[o][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(o=n-1,t++;++o<=t;)r===void 0?o!==t&&e[o][1].type!=="lineEnding"&&(r=o):(o===t||e[o][1].type==="lineEnding")&&(e[r][1].type="codeTextData",o!==r+2&&(e[r][1].end=e[o-1][1].end,e.splice(r+2,o-r-2),t-=o-r-2,o=r+2),r=void 0);return e}function wx(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Sx(e,t,n){let o=0,r,a;return i;function i(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),o++,s):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(a=e.enter("codeTextSequence"),r=0,d(p)):te(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),l(p))}function l(p){return p===null||p===32||p===96||te(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),l)}function d(p){return p===96?(e.consume(p),r++,d):r===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(a.type="codeTextData",l(p))}}function kv(e){const t={};let n=-1,o,r,a,i,s,c,l;for(;++n<e.length;){for(;n in t;)n=t[n];if(o=e[n],n&&o[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(c=o[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type==="lineEndingBlank"&&(a+=2),a<c.length&&c[a][1].type==="content"))for(;++a<c.length&&c[a][1].type!=="content";)c[a][1].type==="chunkText"&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(o[0]==="enter")o[1].contentType&&(Object.assign(t,xx(e,n)),n=t[n],l=!0);else if(o[1]._container){for(a=n,r=void 0;a--&&(i=e[a],i[1].type==="lineEnding"||i[1].type==="lineEndingBlank");)i[0]==="enter"&&(r&&(e[r][1].type="lineEndingBlank"),i[1].type="lineEnding",r=a);r&&(o[1].end=Object.assign({},e[r][1].start),s=e.slice(r,n),s.unshift(o),At(e,r,n-r+1,s))}}return!l}function xx(e,t){const n=e[t][1],o=e[t][2];let r=t-1;const a=[],i=n._tokenizer||o.parser[n.contentType](n.start),s=i.events,c=[],l={};let d,p,f=-1,h=n,v=0,k=0;const T=[k];for(;h;){for(;e[++r][1]!==h;);a.push(r),h._tokenizer||(d=o.sliceStream(h),h.next||d.push(null),p&&i.defineSkip(h.start),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(d),h._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(k=f+1,T.push(k),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(i.events=[],h?(h._tokenizer=void 0,h.previous=void 0):T.pop(),f=T.length;f--;){const b=s.slice(T[f],T[f+1]),m=a.pop();c.unshift([m,m+b.length-1]),At(e,m,2,b)}for(f=-1;++f<c.length;)l[v+c[f][0]]=v+c[f][1],v+=c[f][1]-c[f][0]-1;return l}const Cx={tokenize:Ax,resolve:Tx},Ex={tokenize:Px,partial:!0};function Tx(e){return kv(e),e}function Ax(e,t){let n;return o;function o(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(s)}function r(s){return s===null?a(s):te(s)?e.check(Ex,i,a)(s):(e.consume(s),r)}function a(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function i(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function Px(e,t,n){const o=this;return r;function r(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),_e(e,a,"linePrefix")}function a(i){if(i===null||te(i))return n(i);const s=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):e.interrupt(o.parser.constructs.flow,n,t)(i)}}function wv(e,t,n,o,r,a,i,s,c){const l=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(b){return b===60?(e.enter(o),e.enter(r),e.enter(a),e.consume(b),e.exit(a),f):b===null||b===32||b===41||gl(b)?n(b):(e.enter(o),e.enter(i),e.enter(s),e.enter("chunkString",{contentType:"string"}),k(b))}function f(b){return b===62?(e.enter(a),e.consume(b),e.exit(a),e.exit(r),e.exit(o),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(b))}function h(b){return b===62?(e.exit("chunkString"),e.exit(s),f(b)):b===null||b===60||te(b)?n(b):(e.consume(b),b===92?v:h)}function v(b){return b===60||b===62||b===92?(e.consume(b),h):h(b)}function k(b){return!d&&(b===null||b===41||Ee(b))?(e.exit("chunkString"),e.exit(s),e.exit(i),e.exit(o),t(b)):d<l&&b===40?(e.consume(b),d++,k):b===41?(e.consume(b),d--,k):b===null||b===32||b===40||gl(b)?n(b):(e.consume(b),b===92?T:k)}function T(b){return b===40||b===41||b===92?(e.consume(b),k):k(b)}}function Sv(e,t,n,o,r,a){const i=this;let s=0,c;return l;function l(h){return e.enter(o),e.enter(r),e.consume(h),e.exit(r),e.enter(a),d}function d(h){return s>999||h===null||h===91||h===93&&!c||h===94&&!s&&"_hiddenFootnoteSupport"in i.parser.constructs?n(h):h===93?(e.exit(a),e.enter(r),e.consume(h),e.exit(r),e.exit(o),t):te(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||te(h)||s++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!me(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),s++,p):p(h)}}function xv(e,t,n,o,r,a){let i;return s;function s(f){return f===34||f===39||f===40?(e.enter(o),e.enter(r),e.consume(f),e.exit(r),i=f===40?41:f,c):n(f)}function c(f){return f===i?(e.enter(r),e.consume(f),e.exit(r),e.exit(o),t):(e.enter(a),l(f))}function l(f){return f===i?(e.exit(a),c(i)):f===null?n(f):te(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),_e(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===i||f===null||te(f)?(e.exit("chunkString"),l(f)):(e.consume(f),f===92?p:d)}function p(f){return f===i||f===92?(e.consume(f),d):d(f)}}function ga(e,t){let n;return o;function o(r){return te(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,o):me(r)?_e(e,o,n?"linePrefix":"lineSuffix")(r):t(r)}}const Rx={name:"definition",tokenize:Dx},Mx={tokenize:jx,partial:!0};function Dx(e,t,n){const o=this;let r;return a;function a(h){return e.enter("definition"),i(h)}function i(h){return Sv.call(o,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function s(h){return r=tn(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Ee(h)?ga(e,l)(h):l(h)}function l(h){return wv(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(Mx,p,p)(h)}function p(h){return me(h)?_e(e,f,"whitespace")(h):f(h)}function f(h){return h===null||te(h)?(e.exit("definition"),o.parser.defined.push(r),t(h)):n(h)}}function jx(e,t,n){return o;function o(s){return Ee(s)?ga(e,r)(s):n(s)}function r(s){return xv(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function a(s){return me(s)?_e(e,i,"whitespace")(s):i(s)}function i(s){return s===null||te(s)?t(s):n(s)}}const zx={name:"hardBreakEscape",tokenize:Ox};function Ox(e,t,n){return o;function o(a){return e.enter("hardBreakEscape"),e.consume(a),r}function r(a){return te(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}const Lx={name:"headingAtx",tokenize:Fx,resolve:Ix};function Ix(e,t){let n=e.length-2,o=3,r,a;return e[o][1].type==="whitespace"&&(o+=2),n-2>o&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(o===n-1||n-4>o&&e[n-2][1].type==="whitespace")&&(n-=o+1===n?2:4),n>o&&(r={type:"atxHeadingText",start:e[o][1].start,end:e[n][1].end},a={type:"chunkText",start:e[o][1].start,end:e[n][1].end,contentType:"text"},At(e,o,n-o+1,[["enter",r,t],["enter",a,t],["exit",a,t],["exit",r,t]])),e}function Fx(e,t,n){let o=0;return r;function r(d){return e.enter("atxHeading"),a(d)}function a(d){return e.enter("atxHeadingSequence"),i(d)}function i(d){return d===35&&o++<6?(e.consume(d),i):d===null||Ee(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||te(d)?(e.exit("atxHeading"),t(d)):me(d)?_e(e,s,"whitespace")(d):(e.enter("atxHeadingText"),l(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),s(d))}function l(d){return d===null||d===35||Ee(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),l)}}const Ux=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ah=["pre","script","style","textarea"],Nx={name:"htmlFlow",tokenize:Vx,resolveTo:Bx,concrete:!0},Hx={tokenize:qx,partial:!0},Wx={tokenize:$x,partial:!0};function Bx(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Vx(e,t,n){const o=this;let r,a,i,s,c;return l;function l(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),f):C===47?(e.consume(C),a=!0,k):C===63?(e.consume(C),r=3,o.interrupt?t:S):ut(C)?(e.consume(C),i=String.fromCharCode(C),T):n(C)}function f(C){return C===45?(e.consume(C),r=2,h):C===91?(e.consume(C),r=5,s=0,v):ut(C)?(e.consume(C),r=4,o.interrupt?t:S):n(C)}function h(C){return C===45?(e.consume(C),o.interrupt?t:S):n(C)}function v(C){const J="CDATA[";return C===J.charCodeAt(s++)?(e.consume(C),s===J.length?o.interrupt?t:F:v):n(C)}function k(C){return ut(C)?(e.consume(C),i=String.fromCharCode(C),T):n(C)}function T(C){if(C===null||C===47||C===62||Ee(C)){const J=C===47,ye=i.toLowerCase();return!J&&!a&&Ah.includes(ye)?(r=1,o.interrupt?t(C):F(C)):Ux.includes(i.toLowerCase())?(r=6,J?(e.consume(C),b):o.interrupt?t(C):F(C)):(r=7,o.interrupt&&!o.parser.lazy[o.now().line]?n(C):a?m(C):g(C))}return C===45||it(C)?(e.consume(C),i+=String.fromCharCode(C),T):n(C)}function b(C){return C===62?(e.consume(C),o.interrupt?t:F):n(C)}function m(C){return me(C)?(e.consume(C),m):E(C)}function g(C){return C===47?(e.consume(C),E):C===58||C===95||ut(C)?(e.consume(C),_):me(C)?(e.consume(C),g):E(C)}function _(C){return C===45||C===46||C===58||C===95||it(C)?(e.consume(C),_):x(C)}function x(C){return C===61?(e.consume(C),w):me(C)?(e.consume(C),x):g(C)}function w(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),c=C,A):me(C)?(e.consume(C),w):R(C)}function A(C){return C===c?(e.consume(C),c=null,j):C===null||te(C)?n(C):(e.consume(C),A)}function R(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||Ee(C)?x(C):(e.consume(C),R)}function j(C){return C===47||C===62||me(C)?g(C):n(C)}function E(C){return C===62?(e.consume(C),N):n(C)}function N(C){return C===null||te(C)?F(C):me(C)?(e.consume(C),N):n(C)}function F(C){return C===45&&r===2?(e.consume(C),ne):C===60&&r===1?(e.consume(C),ce):C===62&&r===4?(e.consume(C),G):C===63&&r===3?(e.consume(C),S):C===93&&r===5?(e.consume(C),V):te(C)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(Hx,Z,Y)(C)):C===null||te(C)?(e.exit("htmlFlowData"),Y(C)):(e.consume(C),F)}function Y(C){return e.check(Wx,re,Z)(C)}function re(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),Q}function Q(C){return C===null||te(C)?Y(C):(e.enter("htmlFlowData"),F(C))}function ne(C){return C===45?(e.consume(C),S):F(C)}function ce(C){return C===47?(e.consume(C),i="",I):F(C)}function I(C){if(C===62){const J=i.toLowerCase();return Ah.includes(J)?(e.consume(C),G):F(C)}return ut(C)&&i.length<8?(e.consume(C),i+=String.fromCharCode(C),I):F(C)}function V(C){return C===93?(e.consume(C),S):F(C)}function S(C){return C===62?(e.consume(C),G):C===45&&r===2?(e.consume(C),S):F(C)}function G(C){return C===null||te(C)?(e.exit("htmlFlowData"),Z(C)):(e.consume(C),G)}function Z(C){return e.exit("htmlFlow"),t(C)}}function $x(e,t,n){const o=this;return r;function r(i){return te(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a):n(i)}function a(i){return o.parser.lazy[o.now().line]?n(i):t(i)}}function qx(e,t,n){return o;function o(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt($a,t,n)}}const Gx={name:"htmlText",tokenize:Kx};function Kx(e,t,n){const o=this;let r,a,i;return s;function s(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),c}function c(S){return S===33?(e.consume(S),l):S===47?(e.consume(S),x):S===63?(e.consume(S),g):ut(S)?(e.consume(S),R):n(S)}function l(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),a=0,v):ut(S)?(e.consume(S),m):n(S)}function d(S){return S===45?(e.consume(S),h):n(S)}function p(S){return S===null?n(S):S===45?(e.consume(S),f):te(S)?(i=p,ce(S)):(e.consume(S),p)}function f(S){return S===45?(e.consume(S),h):p(S)}function h(S){return S===62?ne(S):S===45?f(S):p(S)}function v(S){const G="CDATA[";return S===G.charCodeAt(a++)?(e.consume(S),a===G.length?k:v):n(S)}function k(S){return S===null?n(S):S===93?(e.consume(S),T):te(S)?(i=k,ce(S)):(e.consume(S),k)}function T(S){return S===93?(e.consume(S),b):k(S)}function b(S){return S===62?ne(S):S===93?(e.consume(S),b):k(S)}function m(S){return S===null||S===62?ne(S):te(S)?(i=m,ce(S)):(e.consume(S),m)}function g(S){return S===null?n(S):S===63?(e.consume(S),_):te(S)?(i=g,ce(S)):(e.consume(S),g)}function _(S){return S===62?ne(S):g(S)}function x(S){return ut(S)?(e.consume(S),w):n(S)}function w(S){return S===45||it(S)?(e.consume(S),w):A(S)}function A(S){return te(S)?(i=A,ce(S)):me(S)?(e.consume(S),A):ne(S)}function R(S){return S===45||it(S)?(e.consume(S),R):S===47||S===62||Ee(S)?j(S):n(S)}function j(S){return S===47?(e.consume(S),ne):S===58||S===95||ut(S)?(e.consume(S),E):te(S)?(i=j,ce(S)):me(S)?(e.consume(S),j):ne(S)}function E(S){return S===45||S===46||S===58||S===95||it(S)?(e.consume(S),E):N(S)}function N(S){return S===61?(e.consume(S),F):te(S)?(i=N,ce(S)):me(S)?(e.consume(S),N):j(S)}function F(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),r=S,Y):te(S)?(i=F,ce(S)):me(S)?(e.consume(S),F):(e.consume(S),re)}function Y(S){return S===r?(e.consume(S),r=void 0,Q):S===null?n(S):te(S)?(i=Y,ce(S)):(e.consume(S),Y)}function re(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||Ee(S)?j(S):(e.consume(S),re)}function Q(S){return S===47||S===62||Ee(S)?j(S):n(S)}function ne(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function ce(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),I}function I(S){return me(S)?_e(e,V,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):V(S)}function V(S){return e.enter("htmlTextData"),i(S)}}const sp={name:"labelEnd",tokenize:eC,resolveTo:Zx,resolveAll:Jx},Qx={tokenize:tC},Yx={tokenize:nC},Xx={tokenize:oC};function Jx(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function Zx(e,t){let n=e.length,o=0,r,a,i,s;for(;n--;)if(r=e[n][1],a){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;e[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(a=n,r.type!=="labelLink")){o=2;break}}else r.type==="labelEnd"&&(i=n);const c={type:e[a][1].type==="labelLink"?"link":"image",start:Object.assign({},e[a][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:"label",start:Object.assign({},e[a][1].start),end:Object.assign({},e[i][1].end)},d={type:"labelText",start:Object.assign({},e[a+o+2][1].end),end:Object.assign({},e[i-2][1].start)};return s=[["enter",c,t],["enter",l,t]],s=Ft(s,e.slice(a+1,a+o+3)),s=Ft(s,[["enter",d,t]]),s=Ft(s,Hl(t.parser.constructs.insideSpan.null,e.slice(a+o+4,i-3),t)),s=Ft(s,[["exit",d,t],e[i-2],e[i-1],["exit",l,t]]),s=Ft(s,e.slice(i+1)),s=Ft(s,[["exit",c,t]]),At(e,a,e.length,s),e}function eC(e,t,n){const o=this;let r=o.events.length,a,i;for(;r--;)if((o.events[r][1].type==="labelImage"||o.events[r][1].type==="labelLink")&&!o.events[r][1]._balanced){a=o.events[r][1];break}return s;function s(f){return a?a._inactive?p(f):(i=o.parser.defined.includes(tn(o.sliceSerialize({start:a.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(Qx,d,i?d:p)(f):f===91?e.attempt(Yx,d,i?l:p)(f):i?d(f):p(f)}function l(f){return e.attempt(Xx,d,p)(f)}function d(f){return t(f)}function p(f){return a._balanced=!0,n(f)}}function tC(e,t,n){return o;function o(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),r}function r(p){return Ee(p)?ga(e,a)(p):a(p)}function a(p){return p===41?d(p):wv(e,i,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function i(p){return Ee(p)?ga(e,c)(p):d(p)}function s(p){return n(p)}function c(p){return p===34||p===39||p===40?xv(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function l(p){return Ee(p)?ga(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function nC(e,t,n){const o=this;return r;function r(s){return Sv.call(o,e,a,i,"reference","referenceMarker","referenceString")(s)}function a(s){return o.parser.defined.includes(tn(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function i(s){return n(s)}}function oC(e,t,n){return o;function o(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),r}function r(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}const rC={name:"labelStartImage",tokenize:aC,resolveAll:sp.resolveAll};function aC(e,t,n){const o=this;return r;function r(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),a}function a(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),i):n(s)}function i(s){return s===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(s):t(s)}}const iC={name:"labelStartLink",tokenize:lC,resolveAll:sp.resolveAll};function lC(e,t,n){const o=this;return r;function r(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),a}function a(i){return i===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(i):t(i)}}const Ms={name:"lineEnding",tokenize:sC};function sC(e,t){return n;function n(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),_e(e,t,"linePrefix")}}const Fi={name:"thematicBreak",tokenize:cC};function cC(e,t,n){let o=0,r;return a;function a(l){return e.enter("thematicBreak"),i(l)}function i(l){return r=l,s(l)}function s(l){return l===r?(e.enter("thematicBreakSequence"),c(l)):o>=3&&(l===null||te(l))?(e.exit("thematicBreak"),t(l)):n(l)}function c(l){return l===r?(e.consume(l),o++,c):(e.exit("thematicBreakSequence"),me(l)?_e(e,s,"whitespace")(l):s(l))}}const _t={name:"list",tokenize:pC,continuation:{tokenize:fC},exit:mC},uC={tokenize:gC,partial:!0},dC={tokenize:hC,partial:!0};function pC(e,t,n){const o=this,r=o.events[o.events.length-1];let a=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,i=0;return s;function s(h){const v=o.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!o.containerState.marker||h===o.containerState.marker:Vu(h)){if(o.containerState.type||(o.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Fi,n,l)(h):l(h);if(!o.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Vu(h)&&++i<10?(e.consume(h),c):(!o.interrupt||i<2)&&(o.containerState.marker?h===o.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),l(h)):n(h)}function l(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||h,e.check($a,o.interrupt?n:d,e.attempt(uC,f,p))}function d(h){return o.containerState.initialBlankLine=!0,a++,f(h)}function p(h){return me(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return o.containerState.size=a+o.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function fC(e,t,n){const o=this;return o.containerState._closeFlow=void 0,e.check($a,r,a);function r(s){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,_e(e,t,"listItemIndent",o.containerState.size+1)(s)}function a(s){return o.containerState.furtherBlankLines||!me(s)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,i(s)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,e.attempt(dC,t,i)(s))}function i(s){return o.containerState._closeFlow=!0,o.interrupt=void 0,_e(e,e.attempt(_t,t,n),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function hC(e,t,n){const o=this;return _e(e,r,"listItemIndent",o.containerState.size+1);function r(a){const i=o.events[o.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===o.containerState.size?t(a):n(a)}}function mC(e){e.exit(this.containerState.type)}function gC(e,t,n){const o=this;return _e(e,r,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function r(a){const i=o.events[o.events.length-1];return!me(a)&&i&&i[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}const Ph={name:"setextUnderline",tokenize:bC,resolveTo:_C};function _C(e,t){let n=e.length,o,r,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){o=n;break}e[n][1].type==="paragraph"&&(r=n)}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);const i={type:"setextHeading",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[r][1].type="setextHeadingText",a?(e.splice(r,0,["enter",i,t]),e.splice(a+1,0,["exit",e[o][1],t]),e[o][1].end=Object.assign({},e[a][1].end)):e[o][1]=i,e.push(["exit",i,t]),e}function bC(e,t,n){const o=this;let r;return a;function a(l){let d=o.events.length,p;for(;d--;)if(o.events[d][1].type!=="lineEnding"&&o.events[d][1].type!=="linePrefix"&&o.events[d][1].type!=="content"){p=o.events[d][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||p)?(e.enter("setextHeadingLine"),r=l,i(l)):n(l)}function i(l){return e.enter("setextHeadingLineSequence"),s(l)}function s(l){return l===r?(e.consume(l),s):(e.exit("setextHeadingLineSequence"),me(l)?_e(e,c,"lineSuffix")(l):c(l))}function c(l){return l===null||te(l)?(e.exit("setextHeadingLine"),t(l)):n(l)}}const vC={tokenize:yC};function yC(e){const t=this,n=e.attempt($a,o,e.attempt(this.parser.constructs.flowInitial,r,_e(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Cx,r)),"linePrefix")));return n;function o(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const kC={resolveAll:Ev()},wC=Cv("string"),SC=Cv("text");function Cv(e){return{tokenize:t,resolveAll:Ev(e==="text"?xC:void 0)};function t(n){const o=this,r=this.parser.constructs[e],a=n.attempt(r,i,s);return i;function i(d){return l(d)?a(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return l(d)?(n.exit("data"),a(d)):(n.consume(d),c)}function l(d){if(d===null)return!0;const p=r[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(o,o.previous))return!0}return!1}}}function Ev(e){return t;function t(n,o){let r=-1,a;for(;++r<=n.length;)a===void 0?n[r]&&n[r][1].type==="data"&&(a=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==a+2&&(n[a][1].end=n[r-1][1].end,n.splice(a+2,r-a-2),r=a+2),a=void 0);return e?e(n,o):n}}function xC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const o=e[n-1][1],r=t.sliceStream(o);let a=r.length,i=-1,s=0,c;for(;a--;){const l=r[a];if(typeof l=="string"){for(i=l.length;l.charCodeAt(i-1)===32;)s++,i--;if(i)break;i=-1}else if(l===-2)c=!0,s++;else if(l!==-1){a++;break}}if(s){const l={type:n===e.length||c||s<2?"lineSuffix":"hardBreakTrailing",start:{line:o.end.line,column:o.end.column-s,offset:o.end.offset-s,_index:o.start._index+a,_bufferIndex:a?i:o.start._bufferIndex+i},end:Object.assign({},o.end)};o.end=Object.assign({},l.start),o.start.offset===o.end.offset?Object.assign(o,l):(e.splice(n,0,["enter",l,t],["exit",l,t]),n+=2)}n++}return e}function CC(e,t,n){let o=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const r={},a=[];let i=[],s=[];const c={consume:m,enter:g,exit:_,attempt:A(x),check:A(w),interrupt:A(w,{interrupt:!0})},l={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:h,sliceSerialize:f,now:v,defineSkip:k,write:p};let d=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function p(N){return i=Ft(i,N),T(),i[i.length-1]!==null?[]:(R(t,0),l.events=Hl(a,l.events,l),l.events)}function f(N,F){return TC(h(N),F)}function h(N){return EC(i,N)}function v(){const{line:N,column:F,offset:Y,_index:re,_bufferIndex:Q}=o;return{line:N,column:F,offset:Y,_index:re,_bufferIndex:Q}}function k(N){r[N.line]=N.column,E()}function T(){let N;for(;o._index<i.length;){const F=i[o._index];if(typeof F=="string")for(N=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===N&&o._bufferIndex<F.length;)b(F.charCodeAt(o._bufferIndex));else b(F)}}function b(N){d=d(N)}function m(N){te(N)?(o.line++,o.column=1,o.offset+=N===-3?2:1,E()):N!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===i[o._index].length&&(o._bufferIndex=-1,o._index++)),l.previous=N}function g(N,F){const Y=F||{};return Y.type=N,Y.start=v(),l.events.push(["enter",Y,l]),s.push(Y),Y}function _(N){const F=s.pop();return F.end=v(),l.events.push(["exit",F,l]),F}function x(N,F){R(N,F.from)}function w(N,F){F.restore()}function A(N,F){return Y;function Y(re,Q,ne){let ce,I,V,S;return Array.isArray(re)?Z(re):"tokenize"in re?Z([re]):G(re);function G(se){return Pe;function Pe(je){const St=je!==null&&se[je],X=je!==null&&se.null,qt=[...Array.isArray(St)?St:St?[St]:[],...Array.isArray(X)?X:X?[X]:[]];return Z(qt)(je)}}function Z(se){return ce=se,I=0,se.length===0?ne:C(se[I])}function C(se){return Pe;function Pe(je){return S=j(),V=se,se.partial||(l.currentConstruct=se),se.name&&l.parser.constructs.disable.null.includes(se.name)?ye():se.tokenize.call(F?Object.assign(Object.create(l),F):l,c,J,ye)(je)}}function J(se){return N(V,S),Q}function ye(se){return S.restore(),++I<ce.length?C(ce[I]):ne}}}function R(N,F){N.resolveAll&&!a.includes(N)&&a.push(N),N.resolve&&At(l.events,F,l.events.length-F,N.resolve(l.events.slice(F),l)),N.resolveTo&&(l.events=N.resolveTo(l.events,l))}function j(){const N=v(),F=l.previous,Y=l.currentConstruct,re=l.events.length,Q=Array.from(s);return{restore:ne,from:re};function ne(){o=N,l.previous=F,l.currentConstruct=Y,l.events.length=re,s=Q,E()}}function E(){o.line in r&&o.column<2&&(o.column=r[o.line],o.offset+=r[o.line]-1)}}function EC(e,t){const n=t.start._index,o=t.start._bufferIndex,r=t.end._index,a=t.end._bufferIndex;let i;if(n===r)i=[e[n].slice(o,a)];else{if(i=e.slice(n,r),o>-1){const s=i[0];typeof s=="string"?i[0]=s.slice(o):i.shift()}a>0&&i.push(e[r].slice(0,a))}return i}function TC(e,t){let n=-1;const o=[];let r;for(;++n<e.length;){const a=e[n];let i;if(typeof a=="string")i=a;else switch(a){case-5:{i="\r";break}case-4:{i=`
`;break}case-3:{i=`\r
`;break}case-2:{i=t?" ":"	";break}case-1:{if(!t&&r)continue;i=" ";break}default:i=String.fromCharCode(a)}r=a===-2,o.push(i)}return o.join("")}const AC={42:_t,43:_t,45:_t,48:_t,49:_t,50:_t,51:_t,52:_t,53:_t,54:_t,55:_t,56:_t,57:_t,62:bv},PC={91:Rx},RC={[-2]:Rs,[-1]:Rs,32:Rs},MC={35:Lx,42:Fi,45:[Ph,Fi],60:Nx,61:Ph,95:Fi,96:Th,126:Th},DC={38:yv,92:vv},jC={[-5]:Ms,[-4]:Ms,[-3]:Ms,33:rC,38:yv,42:$u,60:[lx,Gx],91:iC,92:[zx,vv],93:sp,95:$u,96:yx},zC={null:[$u,kC]},OC={null:[42,95]},LC={null:[]},IC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:OC,contentInitial:PC,disable:LC,document:AC,flow:MC,flowInitial:RC,insideSpan:zC,string:DC,text:jC},Symbol.toStringTag,{value:"Module"}));function FC(e){const n=gv([IC,...(e||{}).extensions||[]]),o={defined:[],lazy:{},constructs:n,content:r(ex),document:r(nx),flow:r(vC),string:r(wC),text:r(SC)};return o;function r(a){return i;function i(s){return CC(o,a,s)}}}function UC(e){for(;!kv(e););return e}const Rh=/[\0\t\n\r]/g;function NC(){let e=1,t="",n=!0,o;return r;function r(a,i,s){const c=[];let l,d,p,f,h;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(i||void 0).decode(a)),p=0,t="",n&&(a.charCodeAt(0)===65279&&p++,n=void 0);p<a.length;){if(Rh.lastIndex=p,l=Rh.exec(a),f=l&&l.index!==void 0?l.index:a.length,h=a.charCodeAt(f),!l){t=a.slice(p);break}if(h===10&&p===f&&o)c.push(-3),o=void 0;else switch(o&&(c.push(-5),o=void 0),p<f&&(c.push(a.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:o=!0,e=1}p=f+1}return s&&(o&&c.push(-5),t&&c.push(t),c.push(null)),c}}const HC=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function WC(e){return e.replace(HC,BC)}function BC(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),a=r===120||r===88;return _v(n.slice(a?2:1),a?16:10)}return lp(n)||e}const Tv={}.hasOwnProperty;function VC(e,t,n){return typeof t!="string"&&(n=t,t=void 0),$C(n)(UC(FC(n).document().write(NC()(e,t,!0))))}function $C(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(uo),autolinkProtocol:j,autolinkEmail:j,atxHeading:a(Qa),blockQuote:a(St),characterEscape:j,characterReference:j,codeFenced:a(X),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:a(X,i),codeText:a(qt,i),codeTextData:j,data:j,codeFlowValue:j,definition:a(jr),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:a(co),hardBreakEscape:a(zn),hardBreakTrailing:a(zn),htmlFlow:a(zr,i),htmlFlowData:j,htmlText:a(zr,i),htmlTextData:j,image:a(Or),label:i,link:a(uo),listItem:a(on),listItemValue:f,listOrdered:a(No,p),listUnordered:a(No),paragraph:a(Ya),reference:C,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:a(Qa),strong:a(Xa),thematicBreak:a(ql)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:je,autolinkProtocol:Pe,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:se,codeFenced:c(T),codeFencedFence:k,codeFencedFenceInfo:h,codeFencedFenceMeta:v,codeFlowValue:E,codeIndented:c(b),codeText:c(Q),codeTextData:E,data:E,definition:c(),definitionDestinationString:_,definitionLabelString:m,definitionTitleString:g,emphasis:c(),hardBreakEscape:c(F),hardBreakTrailing:c(F),htmlFlow:c(Y),htmlFlowData:E,htmlText:c(re),htmlTextData:E,image:c(ce),label:V,labelText:I,lineEnding:N,link:c(ne),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:J,resourceDestinationString:S,resourceTitleString:G,resource:Z,setextHeading:c(R),setextHeadingLineSequence:A,setextHeadingText:w,strong:c(),thematicBreak:c()}};Av(t,(e||{}).mdastExtensions||[]);const n={};return o;function o(L){let $={type:"root",children:[]};const ae={stack:[$],tokenStack:[],config:t,enter:s,exit:l,buffer:i,resume:d,data:n},pe=[];let ke=-1;for(;++ke<L.length;)if(L[ke][1].type==="listOrdered"||L[ke][1].type==="listUnordered")if(L[ke][0]==="enter")pe.push(ke);else{const mt=pe.pop();ke=r(L,mt,ke)}for(ke=-1;++ke<L.length;){const mt=t[L[ke][0]];Tv.call(mt,L[ke][1].type)&&mt[L[ke][1].type].call(Object.assign({sliceSerialize:L[ke][2].sliceSerialize},ae),L[ke][1])}if(ae.tokenStack.length>0){const mt=ae.tokenStack[ae.tokenStack.length-1];(mt[1]||Mh).call(ae,void 0,mt[0])}for($.position={start:Fn(L.length>0?L[0][1].start:{line:1,column:1,offset:0}),end:Fn(L.length>0?L[L.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)$=t.transforms[ke]($)||$;return $}function r(L,$,ae){let pe=$-1,ke=-1,mt=!1,gn,Dt,po,P;for(;++pe<=ae;){const M=L[pe];switch(M[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{M[0]==="enter"?ke++:ke--,P=void 0;break}case"lineEndingBlank":{M[0]==="enter"&&(gn&&!P&&!ke&&!po&&(po=pe),P=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:P=void 0}if(!ke&&M[0]==="enter"&&M[1].type==="listItemPrefix"||ke===-1&&M[0]==="exit"&&(M[1].type==="listUnordered"||M[1].type==="listOrdered")){if(gn){let U=pe;for(Dt=void 0;U--;){const q=L[U];if(q[1].type==="lineEnding"||q[1].type==="lineEndingBlank"){if(q[0]==="exit")continue;Dt&&(L[Dt][1].type="lineEndingBlank",mt=!0),q[1].type="lineEnding",Dt=U}else if(!(q[1].type==="linePrefix"||q[1].type==="blockQuotePrefix"||q[1].type==="blockQuotePrefixWhitespace"||q[1].type==="blockQuoteMarker"||q[1].type==="listItemIndent"))break}po&&(!Dt||po<Dt)&&(gn._spread=!0),gn.end=Object.assign({},Dt?L[Dt][1].start:M[1].end),L.splice(Dt||pe,0,["exit",gn,M[2]]),pe++,ae++}if(M[1].type==="listItemPrefix"){const U={type:"listItem",_spread:!1,start:Object.assign({},M[1].start),end:void 0};gn=U,L.splice(pe,0,["enter",U,M[2]]),pe++,ae++,po=void 0,P=!0}}}return L[$][1]._spread=mt,ae}function a(L,$){return ae;function ae(pe){s.call(this,L(pe),pe),$&&$.call(this,pe)}}function i(){this.stack.push({type:"fragment",children:[]})}function s(L,$,ae){this.stack[this.stack.length-1].children.push(L),this.stack.push(L),this.tokenStack.push([$,ae]),L.position={start:Fn($.start),end:void 0}}function c(L){return $;function $(ae){L&&L.call(this,ae),l.call(this,ae)}}function l(L,$){const ae=this.stack.pop(),pe=this.tokenStack.pop();if(pe)pe[0].type!==L.type&&($?$.call(this,L,pe[0]):(pe[1]||Mh).call(this,L,pe[0]));else throw new Error("Cannot close `"+L.type+"` ("+ma({start:L.start,end:L.end})+"): it’s not open");ae.position.end=Fn(L.end)}function d(){return ip(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(L){if(this.data.expectingFirstListItemValue){const $=this.stack[this.stack.length-2];$.start=Number.parseInt(this.sliceSerialize(L),10),this.data.expectingFirstListItemValue=void 0}}function h(){const L=this.resume(),$=this.stack[this.stack.length-1];$.lang=L}function v(){const L=this.resume(),$=this.stack[this.stack.length-1];$.meta=L}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const L=this.resume(),$=this.stack[this.stack.length-1];$.value=L.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function b(){const L=this.resume(),$=this.stack[this.stack.length-1];$.value=L.replace(/(\r?\n|\r)$/g,"")}function m(L){const $=this.resume(),ae=this.stack[this.stack.length-1];ae.label=$,ae.identifier=tn(this.sliceSerialize(L)).toLowerCase()}function g(){const L=this.resume(),$=this.stack[this.stack.length-1];$.title=L}function _(){const L=this.resume(),$=this.stack[this.stack.length-1];$.url=L}function x(L){const $=this.stack[this.stack.length-1];if(!$.depth){const ae=this.sliceSerialize(L).length;$.depth=ae}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function A(L){const $=this.stack[this.stack.length-1];$.depth=this.sliceSerialize(L).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function j(L){const ae=this.stack[this.stack.length-1].children;let pe=ae[ae.length-1];(!pe||pe.type!=="text")&&(pe=Ja(),pe.position={start:Fn(L.start),end:void 0},ae.push(pe)),this.stack.push(pe)}function E(L){const $=this.stack.pop();$.value+=this.sliceSerialize(L),$.position.end=Fn(L.end)}function N(L){const $=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ae=$.children[$.children.length-1];ae.position.end=Fn(L.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes($.type)&&(j.call(this,L),E.call(this,L))}function F(){this.data.atHardBreak=!0}function Y(){const L=this.resume(),$=this.stack[this.stack.length-1];$.value=L}function re(){const L=this.resume(),$=this.stack[this.stack.length-1];$.value=L}function Q(){const L=this.resume(),$=this.stack[this.stack.length-1];$.value=L}function ne(){const L=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";L.type+="Reference",L.referenceType=$,delete L.url,delete L.title}else delete L.identifier,delete L.label;this.data.referenceType=void 0}function ce(){const L=this.stack[this.stack.length-1];if(this.data.inReference){const $=this.data.referenceType||"shortcut";L.type+="Reference",L.referenceType=$,delete L.url,delete L.title}else delete L.identifier,delete L.label;this.data.referenceType=void 0}function I(L){const $=this.sliceSerialize(L),ae=this.stack[this.stack.length-2];ae.label=WC($),ae.identifier=tn($).toLowerCase()}function V(){const L=this.stack[this.stack.length-1],$=this.resume(),ae=this.stack[this.stack.length-1];if(this.data.inReference=!0,ae.type==="link"){const pe=L.children;ae.children=pe}else ae.alt=$}function S(){const L=this.resume(),$=this.stack[this.stack.length-1];$.url=L}function G(){const L=this.resume(),$=this.stack[this.stack.length-1];$.title=L}function Z(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function J(L){const $=this.resume(),ae=this.stack[this.stack.length-1];ae.label=$,ae.identifier=tn(this.sliceSerialize(L)).toLowerCase(),this.data.referenceType="full"}function ye(L){this.data.characterReferenceType=L.type}function se(L){const $=this.sliceSerialize(L),ae=this.data.characterReferenceType;let pe;ae?(pe=_v($,ae==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):pe=lp($);const ke=this.stack.pop();ke.value+=pe,ke.position.end=Fn(L.end)}function Pe(L){E.call(this,L);const $=this.stack[this.stack.length-1];$.url=this.sliceSerialize(L)}function je(L){E.call(this,L);const $=this.stack[this.stack.length-1];$.url="mailto:"+this.sliceSerialize(L)}function St(){return{type:"blockquote",children:[]}}function X(){return{type:"code",lang:null,meta:null,value:""}}function qt(){return{type:"inlineCode",value:""}}function jr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function co(){return{type:"emphasis",children:[]}}function Qa(){return{type:"heading",depth:0,children:[]}}function zn(){return{type:"break"}}function zr(){return{type:"html",value:""}}function Or(){return{type:"image",title:null,url:"",alt:null}}function uo(){return{type:"link",title:null,url:"",children:[]}}function No(L){return{type:"list",ordered:L.type==="listOrdered",start:null,spread:L._spread,children:[]}}function on(L){return{type:"listItem",spread:L._spread,checked:null,children:[]}}function Ya(){return{type:"paragraph",children:[]}}function Xa(){return{type:"strong",children:[]}}function Ja(){return{type:"text",value:""}}function ql(){return{type:"thematicBreak"}}}function Fn(e){return{line:e.line,column:e.column,offset:e.offset}}function Av(e,t){let n=-1;for(;++n<t.length;){const o=t[n];Array.isArray(o)?Av(e,o):qC(e,o)}}function qC(e,t){let n;for(n in t)if(Tv.call(t,n))switch(n){case"canContainEols":{const o=t[n];o&&e[n].push(...o);break}case"transforms":{const o=t[n];o&&e[n].push(...o);break}case"enter":case"exit":{const o=t[n];o&&Object.assign(e[n],o);break}}}function Mh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ma({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ma({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ma({start:t.start,end:t.end})+") is still open")}function GC(e){const t=this;t.parser=n;function n(o){return VC(o,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function KC(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function QC(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function YC(e,t){const n=t.value?t.value+`
`:"",o={};t.lang&&(o.className=["language-"+t.lang]);let r={type:"element",tagName:"code",properties:o,children:[{type:"text",value:n}]};return t.meta&&(r.data={meta:t.meta}),e.patch(t,r),r=e.applyData(t,r),r={type:"element",tagName:"pre",properties:{},children:[r]},e.patch(t,r),r}function XC(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function JC(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ZC(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",o=String(t.identifier).toUpperCase(),r=Fo(o.toLowerCase()),a=e.footnoteOrder.indexOf(o);let i,s=e.footnoteCounts.get(o);s===void 0?(s=0,e.footnoteOrder.push(o),i=e.footnoteOrder.length):i=a+1,s+=1,e.footnoteCounts.set(o,s);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,c);const l={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function e2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function t2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Pv(e,t){const n=t.referenceType;let o="]";if(n==="collapsed"?o+="[]":n==="full"&&(o+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+o}];const r=e.all(t),a=r[0];a&&a.type==="text"?a.value="["+a.value:r.unshift({type:"text",value:"["});const i=r[r.length-1];return i&&i.type==="text"?i.value+=o:r.push({type:"text",value:o}),r}function n2(e,t){const n=String(t.identifier).toUpperCase(),o=e.definitionById.get(n);if(!o)return Pv(e,t);const r={src:Fo(o.url||""),alt:t.alt};o.title!==null&&o.title!==void 0&&(r.title=o.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,a),e.applyData(t,a)}function o2(e,t){const n={src:Fo(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const o={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,o),e.applyData(t,o)}function r2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const o={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,o),e.applyData(t,o)}function a2(e,t){const n=String(t.identifier).toUpperCase(),o=e.definitionById.get(n);if(!o)return Pv(e,t);const r={href:Fo(o.url||"")};o.title!==null&&o.title!==void 0&&(r.title=o.title);const a={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function i2(e,t){const n={href:Fo(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const o={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function l2(e,t,n){const o=e.all(t),r=n?s2(n):Rv(t),a={},i=[];if(typeof t.checked=="boolean"){const d=o[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},o.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let s=-1;for(;++s<o.length;){const d=o[s];(r||s!==0||d.type!=="element"||d.tagName!=="p")&&i.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!r?i.push(...d.children):i.push(d)}const c=o[o.length-1];c&&(r||c.type!=="element"||c.tagName!=="p")&&i.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:a,children:i};return e.patch(t,l),e.applyData(t,l)}function s2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let o=-1;for(;!t&&++o<n.length;)t=Rv(n[o])}return t}function Rv(e){const t=e.spread;return t??e.children.length>1}function c2(e,t){const n={},o=e.all(t);let r=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++r<o.length;){const i=o[r];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(o,!0)};return e.patch(t,a),e.applyData(t,a)}function u2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function d2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function p2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function f2(e,t){const n=e.all(t),o=n.shift(),r=[];if(o){const i={type:"element",tagName:"thead",properties:{},children:e.wrap([o],!0)};e.patch(t.children[0],i),r.push(i)}if(n.length>0){const i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=rp(t.children[1]),c=dv(t.children[t.children.length-1]);s&&c&&(i.position={start:s,end:c}),r.push(i)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function h2(e,t,n){const o=n?n.children:void 0,a=(o?o.indexOf(t):1)===0?"th":"td",i=n&&n.type==="table"?n.align:void 0,s=i?i.length:t.children.length;let c=-1;const l=[];for(;++c<s;){const p=t.children[c],f={},h=i?i[c]:void 0;h&&(f.align=h);let v={type:"element",tagName:a,properties:f,children:[]};p&&(v.children=e.all(p),e.patch(p,v),v=e.applyData(p,v)),l.push(v)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,d),e.applyData(t,d)}function m2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Dh=9,jh=32;function g2(e){const t=String(e),n=/\r?\n|\r/g;let o=n.exec(t),r=0;const a=[];for(;o;)a.push(zh(t.slice(r,o.index),r>0,!0),o[0]),r=o.index+o[0].length,o=n.exec(t);return a.push(zh(t.slice(r),r>0,!1)),a.join("")}function zh(e,t,n){let o=0,r=e.length;if(t){let a=e.codePointAt(o);for(;a===Dh||a===jh;)o++,a=e.codePointAt(o)}if(n){let a=e.codePointAt(r-1);for(;a===Dh||a===jh;)r--,a=e.codePointAt(r-1)}return r>o?e.slice(o,r):""}function _2(e,t){const n={type:"text",value:g2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function b2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const v2={blockquote:KC,break:QC,code:YC,delete:XC,emphasis:JC,footnoteReference:ZC,heading:e2,html:t2,imageReference:n2,image:o2,inlineCode:r2,linkReference:a2,link:i2,listItem:l2,list:c2,paragraph:u2,root:d2,strong:p2,table:f2,tableCell:m2,tableRow:h2,text:_2,thematicBreak:b2,toml:yi,yaml:yi,definition:yi,footnoteDefinition:yi};function yi(){}const Mv=-1,Wl=0,bl=1,vl=2,cp=3,up=4,dp=5,pp=6,Dv=7,jv=8,Oh=typeof self=="object"?self:globalThis,y2=(e,t)=>{const n=(r,a)=>(e.set(a,r),r),o=r=>{if(e.has(r))return e.get(r);const[a,i]=t[r];switch(a){case Wl:case Mv:return n(i,r);case bl:{const s=n([],r);for(const c of i)s.push(o(c));return s}case vl:{const s=n({},r);for(const[c,l]of i)s[o(c)]=o(l);return s}case cp:return n(new Date(i),r);case up:{const{source:s,flags:c}=i;return n(new RegExp(s,c),r)}case dp:{const s=n(new Map,r);for(const[c,l]of i)s.set(o(c),o(l));return s}case pp:{const s=n(new Set,r);for(const c of i)s.add(o(c));return s}case Dv:{const{name:s,message:c}=i;return n(new Oh[s](c),r)}case jv:return n(BigInt(i),r);case"BigInt":return n(Object(BigInt(i)),r)}return n(new Oh[a](i),r)};return o},Lh=e=>y2(new Map,e)(0),Bo="",{toString:k2}={},{keys:w2}=Object,Yr=e=>{const t=typeof e;if(t!=="object"||!e)return[Wl,t];const n=k2.call(e).slice(8,-1);switch(n){case"Array":return[bl,Bo];case"Object":return[vl,Bo];case"Date":return[cp,Bo];case"RegExp":return[up,Bo];case"Map":return[dp,Bo];case"Set":return[pp,Bo]}return n.includes("Array")?[bl,n]:n.includes("Error")?[Dv,n]:[vl,n]},ki=([e,t])=>e===Wl&&(t==="function"||t==="symbol"),S2=(e,t,n,o)=>{const r=(i,s)=>{const c=o.push(i)-1;return n.set(s,c),c},a=i=>{if(n.has(i))return n.get(i);let[s,c]=Yr(i);switch(s){case Wl:{let d=i;switch(c){case"bigint":s=jv,d=i.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return r([Mv],i)}return r([s,d],i)}case bl:{if(c)return r([c,[...i]],i);const d=[],p=r([s,d],i);for(const f of i)d.push(a(f));return p}case vl:{if(c)switch(c){case"BigInt":return r([c,i.toString()],i);case"Boolean":case"Number":case"String":return r([c,i.valueOf()],i)}if(t&&"toJSON"in i)return a(i.toJSON());const d=[],p=r([s,d],i);for(const f of w2(i))(e||!ki(Yr(i[f])))&&d.push([a(f),a(i[f])]);return p}case cp:return r([s,i.toISOString()],i);case up:{const{source:d,flags:p}=i;return r([s,{source:d,flags:p}],i)}case dp:{const d=[],p=r([s,d],i);for(const[f,h]of i)(e||!(ki(Yr(f))||ki(Yr(h))))&&d.push([a(f),a(h)]);return p}case pp:{const d=[],p=r([s,d],i);for(const f of i)(e||!ki(Yr(f)))&&d.push(a(f));return p}}const{message:l}=i;return r([s,{name:c,message:l}],i)};return a},Ih=(e,{json:t,lossy:n}={})=>{const o=[];return S2(!(t||n),!!t,new Map,o)(e),o},yl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Lh(Ih(e,t)):structuredClone(e):(e,t)=>Lh(Ih(e,t));function x2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function C2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function E2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||x2,o=e.options.footnoteBackLabel||C2,r=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let c=-1;for(;++c<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[c]);if(!l)continue;const d=e.all(l),p=String(l.identifier).toUpperCase(),f=Fo(p.toLowerCase());let h=0;const v=[],k=e.footnoteCounts.get(p);for(;k!==void 0&&++h<=k;){v.length>0&&v.push({type:"text",value:" "});let m=typeof n=="string"?n:n(c,h);typeof m=="string"&&(m={type:"text",value:m}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(c,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const T=d[d.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const m=T.children[T.children.length-1];m&&m.type==="text"?m.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...v)}else d.push(...v);const b={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(l,b),s.push(b)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...yl(i),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Bl=function(e){if(e==null)return R2;if(typeof e=="function")return Vl(e);if(typeof e=="object")return Array.isArray(e)?T2(e):A2(e);if(typeof e=="string")return P2(e);throw new Error("Expected function, string, or object as test")};function T2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Bl(e[n]);return Vl(o);function o(...r){let a=-1;for(;++a<t.length;)if(t[a].apply(this,r))return!0;return!1}}function A2(e){const t=e;return Vl(n);function n(o){const r=o;let a;for(a in e)if(r[a]!==t[a])return!1;return!0}}function P2(e){return Vl(t);function t(n){return n&&n.type===e}}function Vl(e){return t;function t(n,o,r){return!!(M2(n)&&e.call(this,n,typeof o=="number"?o:void 0,r||void 0))}}function R2(){return!0}function M2(e){return e!==null&&typeof e=="object"&&"type"in e}const zv=[],D2=!0,qu=!1,j2="skip";function Ov(e,t,n,o){let r;typeof t=="function"&&typeof n!="function"?(o=n,n=t):r=t;const a=Bl(r),i=o?-1:1;s(e,void 0,[])();function s(c,l,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=zv,v,k,T;if((!t||a(c,l,d[d.length-1]||void 0))&&(h=z2(n(c,d)),h[0]===qu))return h;if("children"in c&&c.children){const b=c;if(b.children&&h[0]!==j2)for(k=(o?b.children.length:-1)+i,T=d.concat(b);k>-1&&k<b.children.length;){const m=b.children[k];if(v=s(m,k,T)(),v[0]===qu)return v;k=typeof v[1]=="number"?v[1]:k+i}}return h}}}function z2(e){return Array.isArray(e)?e:typeof e=="number"?[D2,e]:e==null?zv:[e]}function fp(e,t,n,o){let r,a,i;typeof t=="function"&&typeof n!="function"?(a=void 0,i=t,r=n):(a=t,i=n,r=o),Ov(e,a,s,r);function s(c,l){const d=l[l.length-1],p=d?d.children.indexOf(c):void 0;return i(c,p,d)}}const Gu={}.hasOwnProperty,O2={};function L2(e,t){const n=t||O2,o=new Map,r=new Map,a=new Map,i={...v2,...n.handlers},s={all:l,applyData:F2,definitionById:o,footnoteById:r,footnoteCounts:a,footnoteOrder:[],handlers:i,one:c,options:n,patch:I2,wrap:N2};return fp(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?o:r,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),s;function c(d,p){const f=d.type,h=s.handlers[f];if(Gu.call(s.handlers,f)&&h)return h(s,d,p);if(s.options.passThrough&&s.options.passThrough.includes(f)){if("children"in d){const{children:k,...T}=d,b=yl(T);return b.children=s.all(d),b}return yl(d)}return(s.options.unknownHandler||U2)(s,d,p)}function l(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const v=s.one(f[h],d);if(v){if(h&&f[h-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=Fh(v.value)),!Array.isArray(v)&&v.type==="element")){const k=v.children[0];k&&k.type==="text"&&(k.value=Fh(k.value))}Array.isArray(v)?p.push(...v):p.push(v)}}}return p}}function I2(e,t){e.position&&(t.position=TS(e))}function F2(e,t){let n=t;if(e&&e.data){const o=e.data.hName,r=e.data.hChildren,a=e.data.hProperties;if(typeof o=="string")if(n.type==="element")n.tagName=o;else{const i="children"in n?n.children:[n];n={type:"element",tagName:o,properties:{},children:i}}n.type==="element"&&a&&Object.assign(n.properties,yl(a)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function U2(e,t){const n=t.data||{},o="value"in t&&!(Gu.call(n,"hProperties")||Gu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function N2(e,t){const n=[];let o=-1;for(t&&n.push({type:"text",value:`
`});++o<e.length;)o&&n.push({type:"text",value:`
`}),n.push(e[o]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Fh(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Uh(e,t){const n=L2(e,t),o=n.one(e,void 0),r=E2(n),a=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return r&&a.children.push({type:"text",value:`
`},r),a}function H2(e,t){return e&&"run"in e?async function(n,o){const r=Uh(n,t);await e.run(r,o)}:function(n){return Uh(n,t||e)}}function Nh(e){if(e)throw e}var Ui=Object.prototype.hasOwnProperty,Lv=Object.prototype.toString,Hh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Bh=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Lv.call(t)==="[object Array]"},Vh=function(t){if(!t||Lv.call(t)!=="[object Object]")return!1;var n=Ui.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&Ui.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!o)return!1;var r;for(r in t);return typeof r>"u"||Ui.call(t,r)},$h=function(t,n){Hh&&n.name==="__proto__"?Hh(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},qh=function(t,n){if(n==="__proto__")if(Ui.call(t,n)){if(Wh)return Wh(t,n).value}else return;return t[n]},W2=function e(){var t,n,o,r,a,i,s=arguments[0],c=1,l=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},c=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});c<l;++c)if(t=arguments[c],t!=null)for(n in t)o=qh(s,n),r=qh(t,n),s!==r&&(d&&r&&(Vh(r)||(a=Bh(r)))?(a?(a=!1,i=o&&Bh(o)?o:[]):i=o&&Vh(o)?o:{},$h(s,{name:n,newValue:e(d,i,r)})):typeof r<"u"&&$h(s,{name:n,newValue:r}));return s};const Ds=Bt(W2);function Ku(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function B2(){const e=[],t={run:n,use:o};return t;function n(...r){let a=-1;const i=r.pop();if(typeof i!="function")throw new TypeError("Expected function as last argument, not "+i);s(null,...r);function s(c,...l){const d=e[++a];let p=-1;if(c){i(c);return}for(;++p<r.length;)(l[p]===null||l[p]===void 0)&&(l[p]=r[p]);r=l,d?V2(d,s)(...l):i(null,...l)}}function o(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),t}}function V2(e,t){let n;return o;function o(...i){const s=e.length>i.length;let c;s&&i.push(r);try{c=e.apply(this,i)}catch(l){const d=l;if(s&&n)throw d;return r(d)}s||(c instanceof Promise?c.then(a,r):c instanceof Error?r(c):a(c))}function r(i,...s){n||(n=!0,t(i,...s))}function a(i){r(null,i)}}const ln={basename:$2,dirname:q2,extname:G2,join:K2,sep:"/"};function $2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');qa(e);let n=0,o=-1,r=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(a){n=r+1;break}}else o<0&&(a=!0,o=r+1);return o<0?"":e.slice(n,o)}if(t===e)return"";let i=-1,s=t.length-1;for(;r--;)if(e.codePointAt(r)===47){if(a){n=r+1;break}}else i<0&&(a=!0,i=r+1),s>-1&&(e.codePointAt(r)===t.codePointAt(s--)?s<0&&(o=r):(s=-1,o=i));return n===o?o=i:o<0&&(o=e.length),e.slice(n,o)}function q2(e){if(qa(e),e.length===0)return".";let t=-1,n=e.length,o;for(;--n;)if(e.codePointAt(n)===47){if(o){t=n;break}}else o||(o=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function G2(e){qa(e);let t=e.length,n=-1,o=0,r=-1,a=0,i;for(;t--;){const s=e.codePointAt(t);if(s===47){if(i){o=t+1;break}continue}n<0&&(i=!0,n=t+1),s===46?r<0?r=t:a!==1&&(a=1):r>-1&&(a=-1)}return r<0||n<0||a===0||a===1&&r===n-1&&r===o+1?"":e.slice(r,n)}function K2(...e){let t=-1,n;for(;++t<e.length;)qa(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Q2(n)}function Q2(e){qa(e);const t=e.codePointAt(0)===47;let n=Y2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Y2(e,t){let n="",o=0,r=-1,a=0,i=-1,s,c;for(;++i<=e.length;){if(i<e.length)s=e.codePointAt(i);else{if(s===47)break;s=47}if(s===47){if(!(r===i-1||a===1))if(r!==i-1&&a===2){if(n.length<2||o!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",o=0):(n=n.slice(0,c),o=n.length-1-n.lastIndexOf("/")),r=i,a=0;continue}}else if(n.length>0){n="",o=0,r=i,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",o=2)}else n.length>0?n+="/"+e.slice(r+1,i):n=e.slice(r+1,i),o=i-r-1;r=i,a=0}else s===46&&a>-1?a++:a=-1}return n}function qa(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const X2={cwd:J2};function J2(){return"/"}function Qu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Z2(e){if(typeof e=="string")e=new URL(e);else if(!Qu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return eE(e)}function eE(e){if(e.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const o=t.codePointAt(n+2);if(o===70||o===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(t)}const js=["history","path","basename","stem","extname","dirname"];class Iv{constructor(t){let n;t?Qu(t)?n={path:t}:typeof t=="string"||tE(t)?n={value:t}:n=t:n={},this.cwd=X2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<js.length;){const a=js[o];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let r;for(r in n)js.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?ln.basename(this.path):void 0}set basename(t){Os(t,"basename"),zs(t,"basename"),this.path=ln.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?ln.dirname(this.path):void 0}set dirname(t){Gh(this.basename,"dirname"),this.path=ln.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?ln.extname(this.path):void 0}set extname(t){if(zs(t,"extname"),Gh(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ln.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Qu(t)&&(t=Z2(t)),Os(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?ln.basename(this.path,this.extname):void 0}set stem(t){Os(t,"stem"),zs(t,"stem"),this.path=ln.join(this.dirname||"",t+(this.extname||""))}fail(t,n,o){const r=this.message(t,n,o);throw r.fatal=!0,r}info(t,n,o){const r=this.message(t,n,o);return r.fatal=void 0,r}message(t,n,o){const r=new ht(t,n,o);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function zs(e,t){if(e&&e.includes(ln.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+ln.sep+"`")}function Os(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Gh(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function tE(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const nE=function(e){const o=this.constructor.prototype,r=o[e],a=function(){return r.apply(a,arguments)};Object.setPrototypeOf(a,o);const i=Object.getOwnPropertyNames(r);for(const s of i){const c=Object.getOwnPropertyDescriptor(r,s);c&&Object.defineProperty(a,s,c)}return a},oE={}.hasOwnProperty;class hp extends nE{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=B2()}copy(){const t=new hp;let n=-1;for(;++n<this.attachers.length;){const o=this.attachers[n];t.use(...o)}return t.data(Ds(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Fs("data",this.frozen),this.namespace[t]=n,this):oE.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Fs("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const r=n.call(t,...o);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=wi(t),o=this.parser||this.Parser;return Ls("parse",o),o(String(n),n)}process(t,n){const o=this;return this.freeze(),Ls("process",this.parser||this.Parser),Is("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(a,i){const s=wi(t),c=o.parse(s);o.run(c,s,function(d,p,f){if(d||!p||!f)return l(d);const h=p,v=o.stringify(h,f);iE(v)?f.value=v:f.result=v,l(d,f)});function l(d,p){d||!p?i(d):a?a(p):n(void 0,p)}}}processSync(t){let n=!1,o;return this.freeze(),Ls("processSync",this.parser||this.Parser),Is("processSync",this.compiler||this.Compiler),this.process(t,r),Qh("processSync","process",n),o;function r(a,i){n=!0,Nh(a),o=i}}run(t,n,o){Kh(t),this.freeze();const r=this.transformers;return!o&&typeof n=="function"&&(o=n,n=void 0),o?a(void 0,o):new Promise(a);function a(i,s){const c=wi(n);r.run(t,c,l);function l(d,p,f){const h=p||t;d?s(d):i?i(h):o(void 0,h,f)}}}runSync(t,n){let o=!1,r;return this.run(t,n,a),Qh("runSync","run",o),r;function a(i,s){Nh(i),r=s,o=!0}}stringify(t,n){this.freeze();const o=wi(n),r=this.compiler||this.Compiler;return Is("stringify",r),Kh(t),r(t,o)}use(t,...n){const o=this.attachers,r=this.namespace;if(Fs("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):i(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(l){if(typeof l=="function")c(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[d,...p]=l;c(d,p)}else i(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function i(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(l.plugins),l.settings&&(r.settings=Ds(!0,r.settings,l.settings))}function s(l){let d=-1;if(l!=null)if(Array.isArray(l))for(;++d<l.length;){const p=l[d];a(p)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function c(l,d){let p=-1,f=-1;for(;++p<o.length;)if(o[p][0]===l){f=p;break}if(f===-1)o.push([l,...d]);else if(d.length>0){let[h,...v]=d;const k=o[f][1];Ku(k)&&Ku(h)&&(h=Ds(!0,k,h)),o[f]=[l,h,...v]}}}}const rE=new hp().freeze();function Ls(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Is(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Fs(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Kh(e){if(!Ku(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Qh(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function wi(e){return aE(e)?e:new Iv(e)}function aE(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function iE(e){return typeof e=="string"||lE(e)}function lE(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Yh={}.hasOwnProperty,sE="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Xh=[],Jh={allowDangerousHtml:!0},cE=/^(https?|ircs?|mailto|xmpp)$/i,uE=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function dE(e){const t=e.allowedElements,n=e.allowElement,o=e.children||"",r=e.className,a=e.components,i=e.disallowedElements,s=e.rehypePlugins||Xh,c=e.remarkPlugins||Xh,l=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Jh}:Jh,d=e.skipHtml,p=e.unwrapDisallowed,f=e.urlTransform||pE,h=rE().use(GC).use(c).use(H2,l).use(s),v=new Iv;typeof o=="string"&&(v.value=o);for(const m of uE)Object.hasOwn(e,m.from)&&(""+m.from+(m.to?"use `"+m.to+"` instead":"remove it")+sE+m.id,void 0);const k=h.parse(v);let T=h.runSync(k,v);return r&&(T={type:"element",tagName:"div",properties:{className:r},children:T.type==="root"?T.children:[T]}),fp(T,b),jS(T,{Fragment:u.Fragment,components:a,ignoreInvalidStyle:!0,jsx:u.jsx,jsxs:u.jsxs,passKeys:!0,passNode:!0});function b(m,g,_){if(m.type==="raw"&&_&&typeof g=="number")return d?_.children.splice(g,1):_.children[g]={type:"text",value:m.value},g;if(m.type==="element"){let x;for(x in Ps)if(Yh.call(Ps,x)&&Yh.call(m.properties,x)){const w=m.properties[x],A=Ps[x];(A===null||A.includes(m.tagName))&&(m.properties[x]=f(String(w||""),x,m))}}if(m.type==="element"){let x=t?!t.includes(m.tagName):i?i.includes(m.tagName):!1;if(!x&&n&&typeof g=="number"&&(x=!n(m,g,_)),x&&_&&typeof g=="number")return p&&m.children?_.children.splice(g,1,...m.children):_.children.splice(g,1),g}}}function pE(e){return QS(e,cE)}function fE(e,t){if(e==null)return{};var n=Xd(e,t),o,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Yu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function hE(e){if(Array.isArray(e))return Yu(e)}function mE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gE(e,t){if(e){if(typeof e=="string")return Yu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yu(e,t)}}function _E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bE(e){return hE(e)||mE(e)||gE(e)||_E()}function Ia(e){"@babel/helpers - typeof";return Ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ia(e)}function vE(e,t){if(Ia(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Ia(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yE(e){var t=vE(e,"string");return Ia(t)==="symbol"?t:String(t)}function Fv(e,t,n){return t=yE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function sr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zh(Object(n),!0).forEach(function(o){Fv(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zh(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function kE(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Us={};function wE(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Us[t]||(Us[t]=kE(e)),Us[t]}function SE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(a){return a!=="token"}),r=wE(o);return r.reduce(function(a,i){return sr(sr({},a),n[i])},t)}function em(e){return e.join(" ")}function xE(e,t){var n=0;return function(o){return n+=1,o.map(function(r,a){return Uv({node:r,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})})}}function Uv(e){var t=e.node,n=e.stylesheet,o=e.style,r=o===void 0?{}:o,a=e.useInlineStyles,i=e.key,s=t.properties,c=t.type,l=t.tagName,d=t.value;if(c==="text")return d;if(l){var p=xE(n,a),f;if(!a)f=sr(sr({},s),{},{className:em(s.className)});else{var h=Object.keys(n).reduce(function(b,m){return m.split(".").forEach(function(g){b.includes(g)||b.push(g)}),b},[]),v=s.className&&s.className.includes("token")?["token"]:[],k=s.className&&v.concat(s.className.filter(function(b){return!h.includes(b)}));f=sr(sr({},s),{},{className:em(k)||void 0,style:SE(s.className,Object.assign({},s.style,r),n)})}var T=p(t.children);return xe.createElement(l,hl({key:i},f),T)}}const CE=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var EE=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function sn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tm(Object(n),!0).forEach(function(o){Fv(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tm(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var TE=/\n/g;function AE(e){return e.match(TE)}function PE(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(r,a){var i=a+n;return xe.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(i):o},"".concat(i,`
`))})}function RE(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,r=o===void 0?{float:"left",paddingRight:"10px"}:o,a=e.numberStyle,i=a===void 0?{}:a,s=e.startingLineNumber;return xe.createElement("code",{style:Object.assign({},n,r)},PE({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function ME(e){return"".concat(e.toString().length,".25em")}function Nv(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Hv(e,t,n){var o={display:"inline-block",minWidth:ME(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},r=typeof e=="function"?e(t):e,a=sn(sn({},o),r);return a}function Ni(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,r=e.largestLineNumber,a=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,c=e.className,l=c===void 0?[]:c,d=e.showLineNumbers,p=e.wrapLongLines,f=typeof s=="function"?s(n):s;if(f.className=l,n&&a){var h=Hv(o,n,r);t.unshift(Nv(n,h))}return p&d&&(f.style=sn(sn({},f.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:f,children:t}}function Wv(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var r=e[o];if(r.type==="text")n.push(Ni({children:[r],className:bE(new Set(t))}));else if(r.children){var a=t.concat(r.properties.className);Wv(r.children,a).forEach(function(i){return n.push(i)})}}return n}function DE(e,t,n,o,r,a,i,s,c){var l,d=Wv(e.value),p=[],f=-1,h=0;function v(x,w){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Ni({children:x,lineNumber:w,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:r,lineProps:n,className:A,showLineNumbers:o,wrapLongLines:c})}function k(x,w){if(o&&w&&r){var A=Hv(s,w,i);x.unshift(Nv(w,A))}return x}function T(x,w){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||A.length>0?v(x,w,A):k(x,w)}for(var b=function(){var w=d[h],A=w.children[0].value,R=AE(A);if(R){var j=A.split(`
`);j.forEach(function(E,N){var F=o&&p.length+a,Y={type:"text",value:"".concat(E,`
`)};if(N===0){var re=d.slice(f+1,h).concat(Ni({children:[Y],className:w.properties.className})),Q=T(re,F);p.push(Q)}else if(N===j.length-1){var ne=d[h+1]&&d[h+1].children&&d[h+1].children[0],ce={type:"text",value:"".concat(E)};if(ne){var I=Ni({children:[ce],className:w.properties.className});d.splice(h+1,0,I)}else{var V=[ce],S=T(V,F,w.properties.className);p.push(S)}}else{var G=[Y],Z=T(G,F,w.properties.className);p.push(Z)}}),f=h}h++};h<d.length;)b();if(f!==d.length-1){var m=d.slice(f+1,d.length);if(m&&m.length){var g=o&&p.length+a,_=T(m,g);p.push(_)}}return t?p:(l=[]).concat.apply(l,p)}function jE(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(r,a){return Uv({node:r,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(a)})})}function Bv(e){return e&&typeof e.highlightAuto<"u"}function zE(e){var t=e.astGenerator,n=e.language,o=e.code,r=e.defaultCodeValue;if(Bv(t)){var a=CE(t,n);return n==="text"?{value:r,language:"text"}:a?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:r}}catch{return{value:r}}}function OE(e,t){return function(o){var r=o.language,a=o.children,i=o.style,s=i===void 0?t:i,c=o.customStyle,l=c===void 0?{}:c,d=o.codeTagProps,p=d===void 0?{className:r?"language-".concat(r):void 0,style:sn(sn({},s['code[class*="language-"]']),s['code[class*="language-'.concat(r,'"]')])}:d,f=o.useInlineStyles,h=f===void 0?!0:f,v=o.showLineNumbers,k=v===void 0?!1:v,T=o.showInlineLineNumbers,b=T===void 0?!0:T,m=o.startingLineNumber,g=m===void 0?1:m,_=o.lineNumberContainerStyle,x=o.lineNumberStyle,w=x===void 0?{}:x,A=o.wrapLines,R=o.wrapLongLines,j=R===void 0?!1:R,E=o.lineProps,N=E===void 0?{}:E,F=o.renderer,Y=o.PreTag,re=Y===void 0?"pre":Y,Q=o.CodeTag,ne=Q===void 0?"code":Q,ce=o.code,I=ce===void 0?(Array.isArray(a)?a[0]:a)||"":ce,V=o.astGenerator,S=fE(o,EE);V=V||e;var G=k?xe.createElement(RE,{containerStyle:_,codeStyle:p.style||{},numberStyle:w,startingLineNumber:g,codeString:I}):null,Z=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},C=Bv(V)?"hljs":"prismjs",J=h?Object.assign({},S,{style:Object.assign({},Z,l)}):Object.assign({},S,{className:S.className?"".concat(C," ").concat(S.className):C,style:Object.assign({},l)});if(j?p.style=sn(sn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=sn(sn({},p.style),{},{whiteSpace:"pre"}),!V)return xe.createElement(re,J,G,xe.createElement(ne,p,I));(A===void 0&&F||j)&&(A=!0),F=F||jE;var ye=[{type:"text",value:I}],se=zE({astGenerator:V,language:r,code:I,defaultCodeValue:ye});se.language===null&&(se.value=ye);var Pe=se.value.length+g,je=DE(se,A,N,k,b,g,Pe,w,j);return xe.createElement(re,J,xe.createElement(ne,p,!b&&G,F({rows:je,stylesheet:s,useInlineStyles:h})))}}var LE=FE,IE=Object.prototype.hasOwnProperty;function FE(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)IE.call(n,o)&&(e[o]=n[o])}return e}var Vv=$v,mp=$v.prototype;mp.space=null;mp.normal={};mp.property={};function $v(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var nm=LE,UE=Vv,NE=HE;function HE(e){for(var t=e.length,n=[],o=[],r=-1,a,i;++r<t;)a=e[r],n.push(a.property),o.push(a.normal),i=a.space;return new UE(nm.apply(null,n),nm.apply(null,o),i)}var gp=WE;function WE(e){return e.toLowerCase()}var qv=Gv,$t=Gv.prototype;$t.space=null;$t.attribute=null;$t.property=null;$t.boolean=!1;$t.booleanish=!1;$t.overloadedBoolean=!1;$t.number=!1;$t.commaSeparated=!1;$t.spaceSeparated=!1;$t.commaOrSpaceSeparated=!1;$t.mustUseProperty=!1;$t.defined=!1;function Gv(e,t){this.property=e,this.attribute=t}var hn={},BE=0;hn.boolean=Uo();hn.booleanish=Uo();hn.overloadedBoolean=Uo();hn.number=Uo();hn.spaceSeparated=Uo();hn.commaSeparated=Uo();hn.commaOrSpaceSeparated=Uo();function Uo(){return Math.pow(2,++BE)}var Kv=qv,om=hn,Qv=_p;_p.prototype=new Kv;_p.prototype.defined=!0;var Yv=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],VE=Yv.length;function _p(e,t,n,o){var r=-1,a;for(rm(this,"space",o),Kv.call(this,e,t);++r<VE;)a=Yv[r],rm(this,a,(n&om[a])===om[a])}function rm(e,t,n){n&&(e[t]=n)}var am=gp,$E=Vv,qE=Qv,Ga=GE;function GE(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},r=e.properties,a=e.transform,i={},s={},c,l;for(c in r)l=new qE(c,a(o,c),r[c],t),n.indexOf(c)!==-1&&(l.mustUseProperty=!0),i[c]=l,s[am(c)]=c,s[am(l.attribute)]=c;return new $E(i,s,t)}var KE=Ga,QE=KE({space:"xlink",transform:YE,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function YE(e,t){return"xlink:"+t.slice(5).toLowerCase()}var XE=Ga,JE=XE({space:"xml",transform:ZE,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function ZE(e,t){return"xml:"+t.slice(3).toLowerCase()}var eT=tT;function tT(e,t){return t in e?e[t]:t}var nT=eT,Xv=oT;function oT(e,t){return nT(e,t.toLowerCase())}var rT=Ga,aT=Xv,iT=rT({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:aT,properties:{xmlns:null,xmlnsXLink:null}}),bp=hn,lT=Ga,gt=bp.booleanish,jt=bp.number,mo=bp.spaceSeparated,sT=lT({transform:cT,properties:{ariaActiveDescendant:null,ariaAtomic:gt,ariaAutoComplete:null,ariaBusy:gt,ariaChecked:gt,ariaColCount:jt,ariaColIndex:jt,ariaColSpan:jt,ariaControls:mo,ariaCurrent:null,ariaDescribedBy:mo,ariaDetails:null,ariaDisabled:gt,ariaDropEffect:mo,ariaErrorMessage:null,ariaExpanded:gt,ariaFlowTo:mo,ariaGrabbed:gt,ariaHasPopup:null,ariaHidden:gt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:mo,ariaLevel:jt,ariaLive:null,ariaModal:gt,ariaMultiLine:gt,ariaMultiSelectable:gt,ariaOrientation:null,ariaOwns:mo,ariaPlaceholder:null,ariaPosInSet:jt,ariaPressed:gt,ariaReadOnly:gt,ariaRelevant:null,ariaRequired:gt,ariaRoleDescription:mo,ariaRowCount:jt,ariaRowIndex:jt,ariaRowSpan:jt,ariaSelected:gt,ariaSetSize:jt,ariaSort:null,ariaValueMax:jt,ariaValueMin:jt,ariaValueNow:jt,ariaValueText:null,role:null}});function cT(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Dr=hn,uT=Ga,dT=Xv,fe=Dr.boolean,pT=Dr.overloadedBoolean,Xr=Dr.booleanish,Re=Dr.number,st=Dr.spaceSeparated,Si=Dr.commaSeparated,fT=uT({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:dT,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Si,acceptCharset:st,accessKey:st,action:null,allow:null,allowFullScreen:fe,allowPaymentRequest:fe,allowUserMedia:fe,alt:null,as:null,async:fe,autoCapitalize:null,autoComplete:st,autoFocus:fe,autoPlay:fe,capture:fe,charSet:null,checked:fe,cite:null,className:st,cols:Re,colSpan:null,content:null,contentEditable:Xr,controls:fe,controlsList:st,coords:Re|Si,crossOrigin:null,data:null,dateTime:null,decoding:null,default:fe,defer:fe,dir:null,dirName:null,disabled:fe,download:pT,draggable:Xr,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:fe,formTarget:null,headers:st,height:Re,hidden:fe,high:Re,href:null,hrefLang:null,htmlFor:st,httpEquiv:st,id:null,imageSizes:null,imageSrcSet:Si,inputMode:null,integrity:null,is:null,isMap:fe,itemId:null,itemProp:st,itemRef:st,itemScope:fe,itemType:st,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:fe,low:Re,manifest:null,max:null,maxLength:Re,media:null,method:null,min:null,minLength:Re,multiple:fe,muted:fe,name:null,nonce:null,noModule:fe,noValidate:fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:fe,optimum:Re,pattern:null,ping:st,placeholder:null,playsInline:fe,poster:null,preload:null,readOnly:fe,referrerPolicy:null,rel:st,required:fe,reversed:fe,rows:Re,rowSpan:Re,sandbox:st,scope:null,scoped:fe,seamless:fe,selected:fe,shape:null,size:Re,sizes:null,slot:null,span:Re,spellCheck:Xr,src:null,srcDoc:null,srcLang:null,srcSet:Si,start:Re,step:null,style:null,tabIndex:Re,target:null,title:null,translate:null,type:null,typeMustMatch:fe,useMap:null,value:Xr,width:Re,wrap:null,align:null,aLink:null,archive:st,axis:null,background:null,bgColor:null,border:Re,borderColor:null,bottomMargin:Re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:fe,declare:fe,event:null,face:null,frame:null,frameBorder:null,hSpace:Re,leftMargin:Re,link:null,longDesc:null,lowSrc:null,marginHeight:Re,marginWidth:Re,noResize:fe,noHref:fe,noShade:fe,noWrap:fe,object:null,profile:null,prompt:null,rev:null,rightMargin:Re,rules:null,scheme:null,scrolling:Xr,standby:null,summary:null,text:null,topMargin:Re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:fe,disableRemotePlayback:fe,prefix:null,property:null,results:Re,security:null,unselectable:null}}),hT=NE,mT=QE,gT=JE,_T=iT,bT=sT,vT=fT,yT=hT([gT,mT,_T,bT,vT]),kT=gp,wT=Qv,ST=qv,vp="data",xT=TT,CT=/^data[-\w.:]+$/i,Jv=/-[a-z]/g,ET=/[A-Z]/g;function TT(e,t){var n=kT(t),o=t,r=ST;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===vp&&CT.test(t)&&(t.charAt(4)==="-"?o=AT(t):t=PT(t),r=wT),new r(o,t))}function AT(e){var t=e.slice(5).replace(Jv,MT);return vp+t.charAt(0).toUpperCase()+t.slice(1)}function PT(e){var t=e.slice(4);return Jv.test(t)?e:(t=t.replace(ET,RT),t.charAt(0)!=="-"&&(t="-"+t),vp+t)}function RT(e){return"-"+e.toLowerCase()}function MT(e){return e.charAt(1).toUpperCase()}var DT=jT,im=/[#.]/g;function jT(e,t){for(var n=e||"",o=t||"div",r={},a=0,i,s,c;a<n.length;)im.lastIndex=a,c=im.exec(n),i=n.slice(a,c?c.index:n.length),i&&(s?s==="#"?r.id=i:r.className?r.className.push(i):r.className=[i]:o=i,a+=i.length),c&&(s=c[0],a++);return{type:"element",tagName:o,properties:r,children:[]}}var yp={};yp.parse=LT;yp.stringify=IT;var lm="",zT=" ",OT=/[ \t\n\r\f]+/g;function LT(e){var t=String(e||lm).trim();return t===lm?[]:t.split(OT)}function IT(e){return e.join(zT).trim()}var kp={};kp.parse=FT;kp.stringify=UT;var Xu=",",sm=" ",oa="";function FT(e){for(var t=[],n=String(e||oa),o=n.indexOf(Xu),r=0,a=!1,i;!a;)o===-1&&(o=n.length,a=!0),i=n.slice(r,o).trim(),(i||!a)&&t.push(i),r=o+1,o=n.indexOf(Xu,r);return t}function UT(e,t){var n=t||{},o=n.padLeft===!1?oa:sm,r=n.padRight?sm:oa;return e[e.length-1]===oa&&(e=e.concat(oa)),e.join(r+Xu+o).trim()}var NT=xT,cm=gp,HT=DT,um=yp.parse,dm=kp.parse,WT=VT,BT={}.hasOwnProperty;function VT(e,t,n){var o=n?QT(n):null;return r;function r(i,s){var c=HT(i,t),l=Array.prototype.slice.call(arguments,2),d=c.tagName.toLowerCase(),p;if(c.tagName=o&&BT.call(o,d)?o[d]:d,s&&$T(s,c)&&(l.unshift(s),s=null),s)for(p in s)a(c.properties,p,s[p]);return Zv(c.children,l),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function a(i,s,c){var l,d,p;c==null||c!==c||(l=NT(e,s),d=l.property,p=c,typeof p=="string"&&(l.spaceSeparated?p=um(p):l.commaSeparated?p=dm(p):l.commaOrSpaceSeparated&&(p=um(dm(p).join(" ")))),d==="style"&&typeof c!="string"&&(p=KT(p)),d==="className"&&i.className&&(p=i.className.concat(p)),i[d]=GT(l,d,p))}}function $T(e,t){return typeof e=="string"||"length"in e||qT(t.tagName,e)}function qT(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Zv(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)Zv(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function GT(e,t,n){var o,r,a;if(typeof n!="object"||!("length"in n))return pm(e,t,n);for(r=n.length,o=-1,a=[];++o<r;)a[o]=pm(e,t,n[o]);return a}function pm(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||cm(n)===cm(t))&&(o=!0),o}function KT(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function QT(e){for(var t=e.length,n=-1,o={},r;++n<t;)r=e[n],o[r.toLowerCase()]=r;return o}var YT=yT,XT=WT,ey=XT(YT,"div");ey.displayName="html";var JT=ey,ZT=JT;const eA="Æ",tA="&",nA="Á",oA="Â",rA="À",aA="Å",iA="Ã",lA="Ä",sA="©",cA="Ç",uA="Ð",dA="É",pA="Ê",fA="È",hA="Ë",mA=">",gA="Í",_A="Î",bA="Ì",vA="Ï",yA="<",kA="Ñ",wA="Ó",SA="Ô",xA="Ò",CA="Ø",EA="Õ",TA="Ö",AA='"',PA="®",RA="Þ",MA="Ú",DA="Û",jA="Ù",zA="Ü",OA="Ý",LA="á",IA="â",FA="´",UA="æ",NA="à",HA="&",WA="å",BA="ã",VA="ä",$A="¦",qA="ç",GA="¸",KA="¢",QA="©",YA="¤",XA="°",JA="÷",ZA="é",e3="ê",t3="è",n3="ð",o3="ë",r3="½",a3="¼",i3="¾",l3=">",s3="í",c3="î",u3="¡",d3="ì",p3="¿",f3="ï",h3="«",m3="<",g3="¯",_3="µ",b3="·",v3=" ",y3="¬",k3="ñ",w3="ó",S3="ô",x3="ò",C3="ª",E3="º",T3="ø",A3="õ",P3="ö",R3="¶",M3="±",D3="£",j3='"',z3="»",O3="®",L3="§",I3="­",F3="¹",U3="²",N3="³",H3="ß",W3="þ",B3="×",V3="ú",$3="û",q3="ù",G3="¨",K3="ü",Q3="ý",Y3="¥",X3="ÿ",J3={AElig:eA,AMP:tA,Aacute:nA,Acirc:oA,Agrave:rA,Aring:aA,Atilde:iA,Auml:lA,COPY:sA,Ccedil:cA,ETH:uA,Eacute:dA,Ecirc:pA,Egrave:fA,Euml:hA,GT:mA,Iacute:gA,Icirc:_A,Igrave:bA,Iuml:vA,LT:yA,Ntilde:kA,Oacute:wA,Ocirc:SA,Ograve:xA,Oslash:CA,Otilde:EA,Ouml:TA,QUOT:AA,REG:PA,THORN:RA,Uacute:MA,Ucirc:DA,Ugrave:jA,Uuml:zA,Yacute:OA,aacute:LA,acirc:IA,acute:FA,aelig:UA,agrave:NA,amp:HA,aring:WA,atilde:BA,auml:VA,brvbar:$A,ccedil:qA,cedil:GA,cent:KA,copy:QA,curren:YA,deg:XA,divide:JA,eacute:ZA,ecirc:e3,egrave:t3,eth:n3,euml:o3,frac12:r3,frac14:a3,frac34:i3,gt:l3,iacute:s3,icirc:c3,iexcl:u3,igrave:d3,iquest:p3,iuml:f3,laquo:h3,lt:m3,macr:g3,micro:_3,middot:b3,nbsp:v3,not:y3,ntilde:k3,oacute:w3,ocirc:S3,ograve:x3,ordf:C3,ordm:E3,oslash:T3,otilde:A3,ouml:P3,para:R3,plusmn:M3,pound:D3,quot:j3,raquo:z3,reg:O3,sect:L3,shy:I3,sup1:F3,sup2:U3,sup3:N3,szlig:H3,thorn:W3,times:B3,uacute:V3,ucirc:$3,ugrave:q3,uml:G3,uuml:K3,yacute:Q3,yen:Y3,yuml:X3},Z3={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var ty=eP;function eP(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var tP=nP;function nP(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var oP=rP;function rP(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var aP=oP,iP=ty,lP=sP;function sP(e){return aP(e)||iP(e)}var xi,cP=59,uP=dP;function dP(e){var t="&"+e+";",n;return xi=xi||document.createElement("i"),xi.innerHTML=t,n=xi.textContent,n.charCodeAt(n.length-1)===cP&&e!=="semi"||n===t?!1:n}var fm=J3,hm=Z3,pP=ty,fP=tP,ny=lP,hP=uP,mP=AP,gP={}.hasOwnProperty,Vo=String.fromCharCode,_P=Function.prototype,mm={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},bP=9,gm=10,vP=12,yP=32,_m=38,kP=59,wP=60,SP=61,xP=35,CP=88,EP=120,TP=65533,qo="named",wp="hexadecimal",Sp="decimal",xp={};xp[wp]=16;xp[Sp]=10;var $l={};$l[qo]=ny;$l[Sp]=pP;$l[wp]=fP;var oy=1,ry=2,ay=3,iy=4,ly=5,Ju=6,sy=7,io={};io[oy]="Named character references must be terminated by a semicolon";io[ry]="Numeric character references must be terminated by a semicolon";io[ay]="Named character references cannot be empty";io[iy]="Numeric character references cannot be empty";io[ly]="Named character references must be known";io[Ju]="Numeric character references cannot be disallowed";io[sy]="Numeric character references cannot be outside the permissible Unicode range";function AP(e,t){var n={},o,r;t||(t={});for(r in mm)o=t[r],n[r]=o??mm[r];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),PP(e,n)}function PP(e,t){var n=t.additional,o=t.nonTerminated,r=t.text,a=t.reference,i=t.warning,s=t.textContext,c=t.referenceContext,l=t.warningContext,d=t.position,p=t.indent||[],f=e.length,h=0,v=-1,k=d.column||1,T=d.line||1,b="",m=[],g,_,x,w,A,R,j,E,N,F,Y,re,Q,ne,ce,I,V,S,G;for(typeof n=="string"&&(n=n.charCodeAt(0)),I=Z(),E=i?C:_P,h--,f++;++h<f;)if(A===gm&&(k=p[v]||1),A=e.charCodeAt(h),A===_m){if(j=e.charCodeAt(h+1),j===bP||j===gm||j===vP||j===yP||j===_m||j===wP||j!==j||n&&j===n){b+=Vo(A),k++;continue}for(Q=h+1,re=Q,G=Q,j===xP?(G=++re,j=e.charCodeAt(G),j===CP||j===EP?(ne=wp,G=++re):ne=Sp):ne=qo,g="",Y="",w="",ce=$l[ne],G--;++G<f&&(j=e.charCodeAt(G),!!ce(j));)w+=Vo(j),ne===qo&&gP.call(fm,w)&&(g=w,Y=fm[w]);x=e.charCodeAt(G)===kP,x&&(G++,_=ne===qo?hP(w):!1,_&&(g=w,Y=_)),S=1+G-Q,!x&&!o||(w?ne===qo?(x&&!Y?E(ly,1):(g!==w&&(G=re+g.length,S=1+G-re,x=!1),x||(N=g?oy:ay,t.attribute?(j=e.charCodeAt(G),j===SP?(E(N,S),Y=null):ny(j)?Y=null:E(N,S)):E(N,S))),R=Y):(x||E(ry,S),R=parseInt(w,xp[ne]),RP(R)?(E(sy,S),R=Vo(TP)):R in hm?(E(Ju,S),R=hm[R]):(F="",MP(R)&&E(Ju,S),R>65535&&(R-=65536,F+=Vo(R>>>10|55296),R=56320|R&1023),R=F+Vo(R))):ne!==qo&&E(iy,S)),R?(J(),I=Z(),h=G-1,k+=G-Q+1,m.push(R),V=Z(),V.offset++,a&&a.call(c,R,{start:I,end:V},e.slice(Q-1,G)),I=V):(w=e.slice(Q-1,G),b+=w,k+=w.length,h=G-1)}else A===10&&(T++,v++,k=0),A===A?(b+=Vo(A),k++):J();return m.join("");function Z(){return{line:T,column:k,offset:h+(d.offset||0)}}function C(ye,se){var Pe=Z();Pe.column+=se,Pe.offset+=se,i.call(l,io[ye],Pe,ye)}function J(){b&&(m.push(b),r&&r.call(s,b,{start:I,end:Z()}),b="")}}function RP(e){return e>=55296&&e<=57343||e>1114111}function MP(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var cy={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,i={},s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof c?new c(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++a}),m.__id},clone:function m(g,_){_=_||{};var x,w;switch(s.util.type(g)){case"Object":if(w=s.util.objId(g),_[w])return _[w];x={},_[w]=x;for(var A in g)g.hasOwnProperty(A)&&(x[A]=m(g[A],_));return x;case"Array":return w=s.util.objId(g),_[w]?_[w]:(x=[],_[w]=x,g.forEach(function(R,j){x[j]=m(R,_)}),x);default:return g}},getLanguage:function(m){for(;m;){var g=r.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(r,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(x){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var _ in g)if(g[_].src==m)return g[_]}return null}},isActive:function(m,g,_){for(var x="no-"+g;m;){var w=m.classList;if(w.contains(g))return!0;if(w.contains(x))return!1;m=m.parentElement}return!!_}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(m,g){var _=s.util.clone(s.languages[m]);for(var x in g)_[x]=g[x];return _},insertBefore:function(m,g,_,x){x=x||s.languages;var w=x[m],A={};for(var R in w)if(w.hasOwnProperty(R)){if(R==g)for(var j in _)_.hasOwnProperty(j)&&(A[j]=_[j]);_.hasOwnProperty(R)||(A[R]=w[R])}var E=x[m];return x[m]=A,s.languages.DFS(s.languages,function(N,F){F===E&&N!=m&&(this[N]=A)}),A},DFS:function m(g,_,x,w){w=w||{};var A=s.util.objId;for(var R in g)if(g.hasOwnProperty(R)){_.call(g,R,g[R],x||R);var j=g[R],E=s.util.type(j);E==="Object"&&!w[A(j)]?(w[A(j)]=!0,m(j,_,null,w)):E==="Array"&&!w[A(j)]&&(w[A(j)]=!0,m(j,_,R,w))}}},plugins:{},highlightAll:function(m,g){s.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,_){var x={callback:_,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),s.hooks.run("before-all-elements-highlight",x);for(var w=0,A;A=x.elements[w++];)s.highlightElement(A,g===!0,x.callback)},highlightElement:function(m,g,_){var x=s.util.getLanguage(m),w=s.languages[x];s.util.setLanguage(m,x);var A=m.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(A,x);var R=m.textContent,j={element:m,language:x,grammar:w,code:R};function E(F){j.highlightedCode=F,s.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,s.hooks.run("after-highlight",j),s.hooks.run("complete",j),_&&_.call(j.element)}if(s.hooks.run("before-sanity-check",j),A=j.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!j.code){s.hooks.run("complete",j),_&&_.call(j.element);return}if(s.hooks.run("before-highlight",j),!j.grammar){E(s.util.encode(j.code));return}if(g&&o.Worker){var N=new Worker(s.filename);N.onmessage=function(F){E(F.data)},N.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else E(s.highlight(j.code,j.grammar,j.language))},highlight:function(m,g,_){var x={code:m,grammar:g,language:_};if(s.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=s.tokenize(x.code,x.grammar),s.hooks.run("after-tokenize",x),c.stringify(s.util.encode(x.tokens),x.language)},tokenize:function(m,g){var _=g.rest;if(_){for(var x in _)g[x]=_[x];delete g.rest}var w=new p;return f(w,w.head,m),d(m,w,g,w.head,0),v(w)},hooks:{all:{},add:function(m,g){var _=s.hooks.all;_[m]=_[m]||[],_[m].push(g)},run:function(m,g){var _=s.hooks.all[m];if(!(!_||!_.length))for(var x=0,w;w=_[x++];)w(g)}},Token:c};o.Prism=s;function c(m,g,_,x){this.type=m,this.content=g,this.alias=_,this.length=(x||"").length|0}c.stringify=function m(g,_){if(typeof g=="string")return g;if(Array.isArray(g)){var x="";return g.forEach(function(E){x+=m(E,_)}),x}var w={type:g.type,content:m(g.content,_),tag:"span",classes:["token",g.type],attributes:{},language:_},A=g.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(w.classes,A):w.classes.push(A)),s.hooks.run("wrap",w);var R="";for(var j in w.attributes)R+=" "+j+'="'+(w.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+R+">"+w.content+"</"+w.tag+">"};function l(m,g,_,x){m.lastIndex=g;var w=m.exec(_);if(w&&x&&w[1]){var A=w[1].length;w.index+=A,w[0]=w[0].slice(A)}return w}function d(m,g,_,x,w,A){for(var R in _)if(!(!_.hasOwnProperty(R)||!_[R])){var j=_[R];j=Array.isArray(j)?j:[j];for(var E=0;E<j.length;++E){if(A&&A.cause==R+","+E)return;var N=j[E],F=N.inside,Y=!!N.lookbehind,re=!!N.greedy,Q=N.alias;if(re&&!N.pattern.global){var ne=N.pattern.toString().match(/[imsuy]*$/)[0];N.pattern=RegExp(N.pattern.source,ne+"g")}for(var ce=N.pattern||N,I=x.next,V=w;I!==g.tail&&!(A&&V>=A.reach);V+=I.value.length,I=I.next){var S=I.value;if(g.length>m.length)return;if(!(S instanceof c)){var G=1,Z;if(re){if(Z=l(ce,V,m,Y),!Z||Z.index>=m.length)break;var se=Z.index,C=Z.index+Z[0].length,J=V;for(J+=I.value.length;se>=J;)I=I.next,J+=I.value.length;if(J-=I.value.length,V=J,I.value instanceof c)continue;for(var ye=I;ye!==g.tail&&(J<C||typeof ye.value=="string");ye=ye.next)G++,J+=ye.value.length;G--,S=m.slice(V,J),Z.index-=V}else if(Z=l(ce,0,S,Y),!Z)continue;var se=Z.index,Pe=Z[0],je=S.slice(0,se),St=S.slice(se+Pe.length),X=V+S.length;A&&X>A.reach&&(A.reach=X);var qt=I.prev;je&&(qt=f(g,qt,je),V+=je.length),h(g,qt,G);var jr=new c(R,F?s.tokenize(Pe,F):Pe,Q,Pe);if(I=f(g,qt,jr),St&&f(g,I,St),G>1){var co={cause:R+","+E,reach:X};d(m,g,_,I.prev,V,co),A&&co.reach>A.reach&&(A.reach=co.reach)}}}}}}function p(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function f(m,g,_){var x=g.next,w={value:_,prev:g,next:x};return g.next=w,x.prev=w,m.length++,w}function h(m,g,_){for(var x=g.next,w=0;w<_&&x!==m.tail;w++)x=x.next;g.next=x,x.prev=g,m.length-=w}function v(m){for(var g=[],_=m.head.next;_!==m.tail;)g.push(_.value),_=_.next;return g}if(!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(m){var g=JSON.parse(m.data),_=g.language,x=g.code,w=g.immediateClose;o.postMessage(s.highlight(x,s.languages[_],_)),w&&o.close()},!1)),s;var k=s.util.currentScript();k&&(s.filename=k.src,k.hasAttribute("data-manual")&&(s.manual=!0));function T(){s.manual||s.highlightAll()}if(!s.manual){var b=document.readyState;b==="loading"||b==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return s}(t);e.exports&&(e.exports=n),typeof Hi<"u"&&(Hi.Prism=n)})(cy);var DP=cy.exports,jP=Cp;Cp.displayName="markup";Cp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Cp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var r={};r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var zP=Ep;Ep.displayName="css";Ep.aliases=[];function Ep(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}var OP=Tp;Tp.displayName="clike";Tp.aliases=[];function Tp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var LP=Ap;Ap.displayName="javascript";Ap.aliases=["js"];function Ap(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ra=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Hi=="object"?Hi:{},IP=ZP();ra.Prism={manual:!0,disableWorkerMessageHandler:!0};var FP=ZT,UP=mP,uy=DP,NP=jP,HP=zP,WP=OP,BP=LP;IP();var Pp={}.hasOwnProperty;function dy(){}dy.prototype=uy;var Ge=new dy,VP=Ge;Ge.highlight=qP;Ge.register=Ka;Ge.alias=$P;Ge.registered=GP;Ge.listLanguages=KP;Ka(NP);Ka(HP);Ka(WP);Ka(BP);Ge.util.encode=XP;Ge.Token.stringify=QP;function Ka(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ge.languages[e.displayName]===void 0&&e(Ge)}function $P(e,t){var n=Ge.languages,o=e,r,a,i,s;t&&(o={},o[e]=t);for(r in o)for(a=o[r],a=typeof a=="string"?[a]:a,i=a.length,s=-1;++s<i;)n[a[s]]=n[r]}function qP(e,t){var n=uy.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ge.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Pp.call(Ge.languages,t))o=Ge.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function GP(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Pp.call(Ge.languages,e)}function KP(){var e=Ge.languages,t=[],n;for(n in e)Pp.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function QP(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ge.util.type(e)==="Array"?YP(e,t):(o={type:e.type,content:Ge.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ge.hooks.run("wrap",o),FP(o.tag+"."+o.classes.join("."),JP(o.attributes),o.content))}function YP(e,t){for(var n=[],o=e.length,r=-1,a;++r<o;)a=e[r],a!==""&&a!==null&&a!==void 0&&n.push(a);for(r=-1,o=n.length;++r<o;)a=n[r],n[r]=Ge.Token.stringify(a,t,n);return n}function XP(e){return e}function JP(e){var t;for(t in e)e[t]=UP(e[t]);return e}function ZP(){var e="Prism"in ra,t=e?ra.Prism:void 0;return n;function n(){e?ra.Prism=t:delete ra.Prism,e=void 0,t=void 0}}const Rp=Bt(VP);var Mp=OE(Rp,{});Mp.registerLanguage=function(e,t){return Rp.register(t)};Mp.alias=function(e,t){return Rp.alias(e,t)};const lo=Mp;var Ns,bm;function eR(){if(bm)return Ns;bm=1,Ns=e,e.displayName="bash",e.aliases=["shell"];function e(t){(function(n){var o="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+o),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+o),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+o),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+o),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=n.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=a.variable[1].inside,c=0;c<i.length;c++)s[i[c]]=n.languages.bash[i[c]];n.languages.shell=n.languages.bash})(t)}return Ns}var Hs,vm;function tR(){if(vm)return Hs;vm=1,Hs=e,e.displayName="lua",e.aliases=[];function e(t){t.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}return Hs}var Ws,ym;function py(){if(ym)return Ws;ym=1,Ws=e,e.displayName="typescript",e.aliases=["ts"];function e(t){(function(n){n.languages.typescript=n.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),n.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete n.languages.typescript.parameter,delete n.languages.typescript["literal-property"];var o=n.languages.extend("typescript",{});delete o["class-name"],n.languages.typescript["class-name"].inside=o,n.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),n.languages.ts=n.languages.typescript})(t)}return Ws}var Bs,km;function nR(){if(km)return Bs;km=1,Bs=e,e.displayName="json",e.aliases=["webmanifest"];function e(t){t.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},t.languages.webmanifest=t.languages.json}return Bs}var Vs,wm;function oR(){if(wm)return Vs;wm=1,Vs=e,e.displayName="jsx",e.aliases=[];function e(t){(function(n){var o=n.util.clone(n.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(d,p){return d=d.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(d,p)}i=s(i).source,n.languages.jsx=n.languages.extend("markup",o),n.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=o.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var c=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(c).join(""):""},l=function(d){for(var p=[],f=0;f<d.length;f++){var h=d[f],v=!1;if(typeof h!="string"&&(h.type==="tag"&&h.content[0]&&h.content[0].type==="tag"?h.content[0].content[0].content==="</"?p.length>0&&p[p.length-1].tagName===c(h.content[0].content[1])&&p.pop():h.content[h.content.length-1].content==="/>"||p.push({tagName:c(h.content[0].content[1]),openedBraces:0}):p.length>0&&h.type==="punctuation"&&h.content==="{"?p[p.length-1].openedBraces++:p.length>0&&p[p.length-1].openedBraces>0&&h.type==="punctuation"&&h.content==="}"?p[p.length-1].openedBraces--:v=!0),(v||typeof h=="string")&&p.length>0&&p[p.length-1].openedBraces===0){var k=c(h);f<d.length-1&&(typeof d[f+1]=="string"||d[f+1].type==="plain-text")&&(k+=c(d[f+1]),d.splice(f+1,1)),f>0&&(typeof d[f-1]=="string"||d[f-1].type==="plain-text")&&(k=c(d[f-1])+k,d.splice(f-1,1),f--),d[f]=new n.Token("plain-text",k,null,k)}h.content&&typeof h.content!="string"&&l(h.content)}};n.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||l(d.tokens)})})(t)}return Vs}var $s,Sm;function rR(){if(Sm)return $s;Sm=1,$s=e,e.displayName="markdown",e.aliases=["md"];function e(t){(function(n){var o=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(f){return f=f.replace(/<inner>/g,function(){return o}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+f+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;n.languages.markdown=n.languages.extend("markup",{}),n.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:n.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+s+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+s+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:n.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:n.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(f){["url","bold","italic","strike","code-snippet"].forEach(function(h){f!==h&&(n.languages.markdown[f].inside.content.inside[h]=n.languages.markdown[h])})}),n.hooks.add("after-tokenize",function(f){if(f.language!=="markdown"&&f.language!=="md")return;function h(v){if(!(!v||typeof v=="string"))for(var k=0,T=v.length;k<T;k++){var b=v[k];if(b.type!=="code"){h(b.content);continue}var m=b.content[1],g=b.content[3];if(m&&g&&m.type==="code-language"&&g.type==="code-block"&&typeof m.content=="string"){var _=m.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");_=(/[a-z][\w-]*/i.exec(_)||[""])[0].toLowerCase();var x="language-"+_;g.alias?typeof g.alias=="string"?g.alias=[g.alias,x]:g.alias.push(x):g.alias=[x]}}}h(f.tokens)}),n.hooks.add("wrap",function(f){if(f.type==="code-block"){for(var h="",v=0,k=f.classes.length;v<k;v++){var T=f.classes[v],b=/language-(.+)/.exec(T);if(b){h=b[1];break}}var m=n.languages[h];if(m)f.content=n.highlight(p(f.content.value),m,h);else if(h&&h!=="none"&&n.plugins.autoloader){var g="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);f.attributes.id=g,n.plugins.autoloader.loadLanguages(h,function(){var _=document.getElementById(g);_&&(_.innerHTML=n.highlight(_.textContent,n.languages[h],h))})}}});var c=RegExp(n.languages.markup.tag.pattern.source,"gi"),l={amp:"&",lt:"<",gt:">",quot:'"'},d=String.fromCodePoint||String.fromCharCode;function p(f){var h=f.replace(c,"");return h=h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(v,k){if(k=k.toLowerCase(),k[0]==="#"){var T;return k[1]==="x"?T=parseInt(k.slice(2),16):T=Number(k.slice(1)),d(T)}else{var b=l[k];return b||v}}),h}n.languages.md=n.languages.markdown})(t)}return $s}var qs,xm;function aR(){if(xm)return qs;xm=1,qs=e,e.displayName="scss",e.aliases=[];function e(t){t.languages.scss=t.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),t.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),t.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),t.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),t.languages.scss.atrule.inside.rest=t.languages.scss}return qs}var Gs,Cm;function iR(){if(Cm)return Gs;Cm=1;var e=oR(),t=py();Gs=n,n.displayName="tsx",n.aliases=[];function n(o){o.register(e),o.register(t),function(r){var a=r.util.clone(r.languages.typescript);r.languages.tsx=r.languages.extend("jsx",a),delete r.languages.tsx.parameter,delete r.languages.tsx["literal-property"];var i=r.languages.tsx.tag;i.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+i.pattern.source+")",i.pattern.flags),i.lookbehind=!0}(o)}return Gs}var fy={},hy={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(hy);var so=hy.exports,Ks={},Em;function lR(){return Em||(Em=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",maxHeight:"inherit",height:"inherit",padding:"0 1em",display:"block",overflow:"auto"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",margin:".5em 0",overflow:"visible",padding:"1px",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em"},'pre[class*="language-"] > code':{position:"relative",zIndex:"1",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em",position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal"},'pre[class*="language-"]:before':{content:"''",display:"block",position:"absolute",bottom:"0.75em",left:"0.18em",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(-2deg)",MozTransform:"rotate(-2deg)",msTransform:"rotate(-2deg)",OTransform:"rotate(-2deg)",transform:"rotate(-2deg)"},'pre[class*="language-"]:after':{content:"''",display:"block",position:"absolute",bottom:"0.75em",left:"auto",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)",right:"0.75em"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:".7"},'pre[class*="language-"].line-numbers.line-numbers':{paddingLeft:"0"},'pre[class*="language-"].line-numbers.line-numbers code':{paddingLeft:"3.8em"},'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows':{left:"0"},'pre[class*="language-"][data-line]':{paddingTop:"0",paddingBottom:"0",paddingLeft:"0"},"pre[data-line] code":{position:"relative",paddingLeft:"4em"},"pre .line-highlight":{marginTop:"0"}};e.default=t}(Ks)),Ks}var Qs={},Tm;function sR(){return Tm||(Tm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"white",background:"none",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",background:"hsl(30, 20%, 25%)",textShadow:"0 -.1em .2em black",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:".3em solid hsl(30, 20%, 40%)",borderRadius:".5em",boxShadow:"1px 1px .5em black inset"},':not(pre) > code[class*="language-"]':{background:"hsl(30, 20%, 25%)",padding:".15em .2em .05em",borderRadius:".3em",border:".13em solid hsl(30, 20%, 40%)",boxShadow:"1px 1px .3em -.1em black inset",whiteSpace:"normal"},comment:{color:"hsl(30, 20%, 50%)"},prolog:{color:"hsl(30, 20%, 50%)"},doctype:{color:"hsl(30, 20%, 50%)"},cdata:{color:"hsl(30, 20%, 50%)"},punctuation:{Opacity:".7"},namespace:{Opacity:".7"},property:{color:"hsl(350, 40%, 70%)"},tag:{color:"hsl(350, 40%, 70%)"},boolean:{color:"hsl(350, 40%, 70%)"},number:{color:"hsl(350, 40%, 70%)"},constant:{color:"hsl(350, 40%, 70%)"},symbol:{color:"hsl(350, 40%, 70%)"},selector:{color:"hsl(75, 70%, 60%)"},"attr-name":{color:"hsl(75, 70%, 60%)"},string:{color:"hsl(75, 70%, 60%)"},char:{color:"hsl(75, 70%, 60%)"},builtin:{color:"hsl(75, 70%, 60%)"},inserted:{color:"hsl(75, 70%, 60%)"},operator:{color:"hsl(40, 90%, 60%)"},entity:{color:"hsl(40, 90%, 60%)",cursor:"help"},url:{color:"hsl(40, 90%, 60%)"},".language-css .token.string":{color:"hsl(40, 90%, 60%)"},".style .token.string":{color:"hsl(40, 90%, 60%)"},variable:{color:"hsl(40, 90%, 60%)"},atrule:{color:"hsl(350, 40%, 70%)"},"attr-value":{color:"hsl(350, 40%, 70%)"},keyword:{color:"hsl(350, 40%, 70%)"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},deleted:{color:"red"}};e.default=t}(Qs)),Qs}var Ys={},Am;function cR(){return Am||(Am=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"black",color:"white",boxShadow:"-.3em 0 0 .3em black, .3em 0 0 .3em black"},'pre[class*="language-"]':{fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:".4em .8em",margin:".5em 0",overflow:"auto",background:`url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>')`,backgroundSize:"1em 1em"},':not(pre) > code[class*="language-"]':{padding:".2em",borderRadius:".3em",boxShadow:"none",whiteSpace:"normal"},comment:{color:"#aaa"},prolog:{color:"#aaa"},doctype:{color:"#aaa"},cdata:{color:"#aaa"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#0cf"},tag:{color:"#0cf"},boolean:{color:"#0cf"},number:{color:"#0cf"},constant:{color:"#0cf"},symbol:{color:"#0cf"},selector:{color:"yellow"},"attr-name":{color:"yellow"},string:{color:"yellow"},char:{color:"yellow"},builtin:{color:"yellow"},operator:{color:"yellowgreen"},entity:{color:"yellowgreen",cursor:"help"},url:{color:"yellowgreen"},".language-css .token.string":{color:"yellowgreen"},variable:{color:"yellowgreen"},inserted:{color:"yellowgreen"},atrule:{color:"deeppink"},"attr-value":{color:"deeppink"},keyword:{color:"deeppink"},regex:{color:"orange"},important:{color:"orange",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},deleted:{color:"red"},"pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix)":{backgroundColor:"rgba(255, 0, 0, .3)",display:"inline"},"pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix)":{backgroundColor:"rgba(255, 0, 0, .3)",display:"inline"},"pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix)":{backgroundColor:"rgba(0, 255, 128, .3)",display:"inline"},"pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix)":{backgroundColor:"rgba(0, 255, 128, .3)",display:"inline"}};e.default=t}(Ys)),Ys}var Xs={},Pm;function uR(){return Pm||(Pm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#272822",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#272822",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#8292a2"},prolog:{color:"#8292a2"},doctype:{color:"#8292a2"},cdata:{color:"#8292a2"},punctuation:{color:"#f8f8f2"},namespace:{Opacity:".7"},property:{color:"#f92672"},tag:{color:"#f92672"},constant:{color:"#f92672"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},boolean:{color:"#ae81ff"},number:{color:"#ae81ff"},selector:{color:"#a6e22e"},"attr-name":{color:"#a6e22e"},string:{color:"#a6e22e"},char:{color:"#a6e22e"},builtin:{color:"#a6e22e"},inserted:{color:"#a6e22e"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#e6db74"},"attr-value":{color:"#e6db74"},function:{color:"#e6db74"},"class-name":{color:"#e6db74"},keyword:{color:"#66d9ef"},regex:{color:"#fd971f"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Xs)),Xs}var Js={},Rm;function dR(){return Rm||(Rm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#657b83",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#657b83",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",backgroundColor:"#fdf6e3"},'pre[class*="language-"]::-moz-selection':{background:"#073642"},'pre[class*="language-"] ::-moz-selection':{background:"#073642"},'code[class*="language-"]::-moz-selection':{background:"#073642"},'code[class*="language-"] ::-moz-selection':{background:"#073642"},'pre[class*="language-"]::selection':{background:"#073642"},'pre[class*="language-"] ::selection':{background:"#073642"},'code[class*="language-"]::selection':{background:"#073642"},'code[class*="language-"] ::selection':{background:"#073642"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdf6e3",padding:".1em",borderRadius:".3em"},comment:{color:"#93a1a1"},prolog:{color:"#93a1a1"},doctype:{color:"#93a1a1"},cdata:{color:"#93a1a1"},punctuation:{color:"#586e75"},namespace:{Opacity:".7"},property:{color:"#268bd2"},tag:{color:"#268bd2"},boolean:{color:"#268bd2"},number:{color:"#268bd2"},constant:{color:"#268bd2"},symbol:{color:"#268bd2"},deleted:{color:"#268bd2"},selector:{color:"#2aa198"},"attr-name":{color:"#2aa198"},string:{color:"#2aa198"},char:{color:"#2aa198"},builtin:{color:"#2aa198"},url:{color:"#2aa198"},inserted:{color:"#2aa198"},entity:{color:"#657b83",background:"#eee8d5",cursor:"help"},atrule:{color:"#859900"},"attr-value":{color:"#859900"},keyword:{color:"#859900"},function:{color:"#b58900"},"class-name":{color:"#b58900"},regex:{color:"#cb4b16"},important:{color:"#cb4b16",fontWeight:"bold"},variable:{color:"#cb4b16"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Js)),Js}var Zs={},Mm;function pR(){return Mm||(Mm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#ccc",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ccc",background:"#2d2d2d",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{background:"#2d2d2d",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#999"},"block-comment":{color:"#999"},prolog:{color:"#999"},doctype:{color:"#999"},cdata:{color:"#999"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},deleted:{color:"#e2777a"},"function-name":{color:"#6196cc"},boolean:{color:"#f08d49"},number:{color:"#f08d49"},function:{color:"#f08d49"},property:{color:"#f8c555"},"class-name":{color:"#f8c555"},constant:{color:"#f8c555"},symbol:{color:"#f8c555"},selector:{color:"#cc99cd"},important:{color:"#cc99cd",fontWeight:"bold"},atrule:{color:"#cc99cd"},keyword:{color:"#cc99cd"},builtin:{color:"#cc99cd"},string:{color:"#7ec699"},char:{color:"#7ec699"},"attr-value":{color:"#7ec699"},regex:{color:"#7ec699"},variable:{color:"#7ec699"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}};e.default=t}(Zs)),Zs}var ec={},Dm;function fR(){return Dm||(Dm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"white",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",textShadow:"0 -.1em .2em black",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",background:"hsl(0, 0%, 8%)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",textShadow:"0 -.1em .2em black",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",borderRadius:".5em",border:".3em solid hsl(0, 0%, 33%)",boxShadow:"1px 1px .5em black inset",margin:".5em 0",overflow:"auto",padding:"1em"},':not(pre) > code[class*="language-"]':{background:"hsl(0, 0%, 8%)",borderRadius:".3em",border:".13em solid hsl(0, 0%, 33%)",boxShadow:"1px 1px .3em -.1em black inset",padding:".15em .2em .05em",whiteSpace:"normal"},'pre[class*="language-"]::-moz-selection':{background:"hsla(0, 0%, 93%, 0.15)",textShadow:"none"},'pre[class*="language-"]::selection':{background:"hsla(0, 0%, 93%, 0.15)",textShadow:"none"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"]::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"hsla(0, 0%, 93%, 0.15)"},comment:{color:"hsl(0, 0%, 47%)"},prolog:{color:"hsl(0, 0%, 47%)"},doctype:{color:"hsl(0, 0%, 47%)"},cdata:{color:"hsl(0, 0%, 47%)"},punctuation:{Opacity:".7"},namespace:{Opacity:".7"},tag:{color:"hsl(14, 58%, 55%)"},boolean:{color:"hsl(14, 58%, 55%)"},number:{color:"hsl(14, 58%, 55%)"},deleted:{color:"hsl(14, 58%, 55%)"},keyword:{color:"hsl(53, 89%, 79%)"},property:{color:"hsl(53, 89%, 79%)"},selector:{color:"hsl(53, 89%, 79%)"},constant:{color:"hsl(53, 89%, 79%)"},symbol:{color:"hsl(53, 89%, 79%)"},builtin:{color:"hsl(53, 89%, 79%)"},"attr-name":{color:"hsl(76, 21%, 52%)"},"attr-value":{color:"hsl(76, 21%, 52%)"},string:{color:"hsl(76, 21%, 52%)"},char:{color:"hsl(76, 21%, 52%)"},operator:{color:"hsl(76, 21%, 52%)"},entity:{color:"hsl(76, 21%, 52%)",cursor:"help"},url:{color:"hsl(76, 21%, 52%)"},".language-css .token.string":{color:"hsl(76, 21%, 52%)"},".style .token.string":{color:"hsl(76, 21%, 52%)"},variable:{color:"hsl(76, 21%, 52%)"},inserted:{color:"hsl(76, 21%, 52%)"},atrule:{color:"hsl(218, 22%, 55%)"},regex:{color:"hsl(42, 75%, 65%)"},important:{color:"hsl(42, 75%, 65%)",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},".language-markup .token.tag":{color:"hsl(33, 33%, 52%)"},".language-markup .token.attr-name":{color:"hsl(33, 33%, 52%)"},".language-markup .token.punctuation":{color:"hsl(33, 33%, 52%)"},"":{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",borderBottom:"1px dashed hsl(0, 0%, 33%)",borderTop:"1px dashed hsl(0, 0%, 33%)",marginTop:"0.75em",zIndex:"0"},".line-highlight.line-highlight:before":{backgroundColor:"hsl(215, 15%, 59%)",color:"hsl(24, 20%, 95%)"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"hsl(215, 15%, 59%)",color:"hsl(24, 20%, 95%)"}};e.default=t}(ec)),ec}var tc={},jm;function hR(){return jm||(jm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(tc)),tc}var nc={},zm;function mR(){return zm||(zm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2b2b2b",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#d4d0ab"},prolog:{color:"#d4d0ab"},doctype:{color:"#d4d0ab"},cdata:{color:"#d4d0ab"},punctuation:{color:"#fefefe"},property:{color:"#ffa07a"},tag:{color:"#ffa07a"},constant:{color:"#ffa07a"},symbol:{color:"#ffa07a"},deleted:{color:"#ffa07a"},boolean:{color:"#00e0e0"},number:{color:"#00e0e0"},selector:{color:"#abe338"},"attr-name":{color:"#abe338"},string:{color:"#abe338"},char:{color:"#abe338"},builtin:{color:"#abe338"},inserted:{color:"#abe338"},operator:{color:"#00e0e0"},entity:{color:"#00e0e0",cursor:"help"},url:{color:"#00e0e0"},".language-css .token.string":{color:"#00e0e0"},".style .token.string":{color:"#00e0e0"},variable:{color:"#00e0e0"},atrule:{color:"#ffd700"},"attr-value":{color:"#ffd700"},function:{color:"#ffd700"},keyword:{color:"#00e0e0"},regex:{color:"#ffd700"},important:{color:"#ffd700",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(nc)),nc}var oc={},Om;function gR(){return Om||(Om=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(oc)),oc}var rc={},Lm;function _R(){return Lm||(Lm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#f5f7ff",color:"#5e6687"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#f5f7ff",color:"#5e6687",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#dfe2f1"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"]::selection':{textShadow:"none",background:"#dfe2f1"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#dfe2f1"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#898ea4"},prolog:{color:"#898ea4"},doctype:{color:"#898ea4"},cdata:{color:"#898ea4"},punctuation:{color:"#5e6687"},namespace:{Opacity:".7"},operator:{color:"#c76b29"},boolean:{color:"#c76b29"},number:{color:"#c76b29"},property:{color:"#c08b30"},tag:{color:"#3d8fd1"},string:{color:"#22a2c9"},selector:{color:"#6679cc"},"attr-name":{color:"#c76b29"},entity:{color:"#22a2c9",cursor:"help"},url:{color:"#22a2c9"},".language-css .token.string":{color:"#22a2c9"},".style .token.string":{color:"#22a2c9"},"attr-value":{color:"#ac9739"},keyword:{color:"#ac9739"},control:{color:"#ac9739"},directive:{color:"#ac9739"},unit:{color:"#ac9739"},statement:{color:"#22a2c9"},regex:{color:"#22a2c9"},atrule:{color:"#22a2c9"},placeholder:{color:"#3d8fd1"},variable:{color:"#3d8fd1"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #202746",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#c94922"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:"0.4em solid #c94922",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#dfe2f1"},".line-numbers .line-numbers-rows > span:before":{color:"#979db4"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"}};e.default=t}(rc)),rc}var ac={},Im;function bR(){return Im||(Im=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#fff",textShadow:"0 1px 1px #000",fontFamily:'Menlo, Monaco, "Courier New", monospace',direction:"ltr",textAlign:"left",wordSpacing:"normal",whiteSpace:"pre",wordWrap:"normal",lineHeight:"1.4",background:"none",border:"0",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",textShadow:"0 1px 1px #000",fontFamily:'Menlo, Monaco, "Courier New", monospace',direction:"ltr",textAlign:"left",wordSpacing:"normal",whiteSpace:"pre",wordWrap:"normal",lineHeight:"1.4",background:"#222",border:"0",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"15px",margin:"1em 0",overflow:"auto",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},'pre[class*="language-"] code':{float:"left",padding:"0 15px 0 0"},':not(pre) > code[class*="language-"]':{background:"#222",padding:"5px 10px",lineHeight:"1",MozBorderRadius:"3px",WebkitBorderRadius:"3px",borderRadius:"3px"},comment:{color:"#797979"},prolog:{color:"#797979"},doctype:{color:"#797979"},cdata:{color:"#797979"},selector:{color:"#fff"},operator:{color:"#fff"},punctuation:{color:"#fff"},namespace:{Opacity:".7"},tag:{color:"#ffd893"},boolean:{color:"#ffd893"},atrule:{color:"#B0C975"},"attr-value":{color:"#B0C975"},hex:{color:"#B0C975"},string:{color:"#B0C975"},property:{color:"#c27628"},entity:{color:"#c27628",cursor:"help"},url:{color:"#c27628"},"attr-name":{color:"#c27628"},keyword:{color:"#c27628"},regex:{color:"#9B71C6"},function:{color:"#e5a638"},constant:{color:"#e5a638"},variable:{color:"#fdfba8"},number:{color:"#8799B0"},important:{color:"#E45734"},deliminator:{color:"#E45734"},".line-highlight.line-highlight":{background:"rgba(255, 255, 255, .2)"},".line-highlight.line-highlight:before":{top:".3em",backgroundColor:"rgba(255, 255, 255, .3)",color:"#fff",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},".line-highlight.line-highlight[data-end]:after":{top:".3em",backgroundColor:"rgba(255, 255, 255, .3)",color:"#fff",MozBorderRadius:"8px",WebkitBorderRadius:"8px",borderRadius:"8px"},".line-numbers .line-numbers-rows > span":{borderRight:"3px #d9d336 solid"}};e.default=t}(ac)),ac}var ic={},Fm;function vR(){return Fm||(Fm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#111b27",background:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#111b27",background:"#e3eaf2",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{background:"#8da1b9"},'pre[class*="language-"] ::-moz-selection':{background:"#8da1b9"},'code[class*="language-"]::-moz-selection':{background:"#8da1b9"},'code[class*="language-"] ::-moz-selection':{background:"#8da1b9"},'pre[class*="language-"]::selection':{background:"#8da1b9"},'pre[class*="language-"] ::selection':{background:"#8da1b9"},'code[class*="language-"]::selection':{background:"#8da1b9"},'code[class*="language-"] ::selection':{background:"#8da1b9"},':not(pre) > code[class*="language-"]':{background:"#e3eaf2",padding:"0.1em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#3c526d"},prolog:{color:"#3c526d"},doctype:{color:"#3c526d"},cdata:{color:"#3c526d"},punctuation:{color:"#111b27"},"delimiter.important":{color:"#006d6d",fontWeight:"inherit"},"selector.parent":{color:"#006d6d"},tag:{color:"#006d6d"},"tag.punctuation":{color:"#006d6d"},"attr-name":{color:"#755f00"},boolean:{color:"#755f00"},"boolean.important":{color:"#755f00"},number:{color:"#755f00"},constant:{color:"#755f00"},"selector.attribute":{color:"#755f00"},"class-name":{color:"#005a8e"},key:{color:"#005a8e"},parameter:{color:"#005a8e"},property:{color:"#005a8e"},"property-access":{color:"#005a8e"},variable:{color:"#005a8e"},"attr-value":{color:"#116b00"},inserted:{color:"#116b00"},color:{color:"#116b00"},"selector.value":{color:"#116b00"},string:{color:"#116b00"},"string.url-link":{color:"#116b00"},builtin:{color:"#af00af"},"keyword-array":{color:"#af00af"},package:{color:"#af00af"},regex:{color:"#af00af"},function:{color:"#7c00aa"},"selector.class":{color:"#7c00aa"},"selector.id":{color:"#7c00aa"},"atrule.rule":{color:"#a04900"},combinator:{color:"#a04900"},keyword:{color:"#a04900"},operator:{color:"#a04900"},"pseudo-class":{color:"#a04900"},"pseudo-element":{color:"#a04900"},selector:{color:"#a04900"},unit:{color:"#a04900"},deleted:{color:"#c22f2e"},important:{color:"#c22f2e",fontWeight:"bold"},"keyword-this":{color:"#005a8e",fontWeight:"bold"},this:{color:"#005a8e",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},entity:{cursor:"help"},".language-markdown .token.title":{color:"#005a8e",fontWeight:"bold"},".language-markdown .token.title .token.punctuation":{color:"#005a8e",fontWeight:"bold"},".language-markdown .token.blockquote.punctuation":{color:"#af00af"},".language-markdown .token.code":{color:"#006d6d"},".language-markdown .token.hr.punctuation":{color:"#005a8e"},".language-markdown .token.url > .token.content":{color:"#116b00"},".language-markdown .token.url-link":{color:"#755f00"},".language-markdown .token.list.punctuation":{color:"#af00af"},".language-markdown .token.table-header":{color:"#111b27"},".language-json .token.operator":{color:"#111b27"},".language-scss .token.variable":{color:"#006d6d"},"token.tab:not(:empty):before":{color:"#3c526d"},"token.cr:before":{color:"#3c526d"},"token.lf:before":{color:"#3c526d"},"token.space:before":{color:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{color:"#e3eaf2",background:"#005a8e"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{color:"#e3eaf2",background:"#005a8e"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{color:"#e3eaf2",background:"#005a8eda",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{color:"#e3eaf2",background:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{color:"#e3eaf2",background:"#3c526d"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{color:"#e3eaf2",background:"#3c526d"},".line-highlight.line-highlight":{background:"linear-gradient(to right, #8da1b92f 70%, #8da1b925)"},".line-highlight.line-highlight:before":{backgroundColor:"#3c526d",color:"#e3eaf2",boxShadow:"0 1px #8da1b9"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"#3c526d",color:"#e3eaf2",boxShadow:"0 1px #8da1b9"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"#3c526d1f"},".line-numbers.line-numbers .line-numbers-rows":{borderRight:"1px solid #8da1b97a",background:"#d0dae77a"},".line-numbers .line-numbers-rows > span:before":{color:"#3c526dda"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"#755f00"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"#af00af"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"#005a8e"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"#7c00aa"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"#7c00aa"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"#7c00aa"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"#c22f2e1f"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"#c22f2e1f"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"#116b001f"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"#116b001f"},".command-line .command-line-prompt":{borderRight:"1px solid #8da1b97a"},".command-line .command-line-prompt > span:before":{color:"#3c526dda"}};e.default=t}(ic)),ic}var lc={},Um;function yR(){return Um||(Um=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#e3eaf2",background:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#e3eaf2",background:"#111b27",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{background:"#3c526d"},'pre[class*="language-"] ::-moz-selection':{background:"#3c526d"},'code[class*="language-"]::-moz-selection':{background:"#3c526d"},'code[class*="language-"] ::-moz-selection':{background:"#3c526d"},'pre[class*="language-"]::selection':{background:"#3c526d"},'pre[class*="language-"] ::selection':{background:"#3c526d"},'code[class*="language-"]::selection':{background:"#3c526d"},'code[class*="language-"] ::selection':{background:"#3c526d"},':not(pre) > code[class*="language-"]':{background:"#111b27",padding:"0.1em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#8da1b9"},prolog:{color:"#8da1b9"},doctype:{color:"#8da1b9"},cdata:{color:"#8da1b9"},punctuation:{color:"#e3eaf2"},"delimiter.important":{color:"#66cccc",fontWeight:"inherit"},"selector.parent":{color:"#66cccc"},tag:{color:"#66cccc"},"tag.punctuation":{color:"#66cccc"},"attr-name":{color:"#e6d37a"},boolean:{color:"#e6d37a"},"boolean.important":{color:"#e6d37a"},number:{color:"#e6d37a"},constant:{color:"#e6d37a"},"selector.attribute":{color:"#e6d37a"},"class-name":{color:"#6cb8e6"},key:{color:"#6cb8e6"},parameter:{color:"#6cb8e6"},property:{color:"#6cb8e6"},"property-access":{color:"#6cb8e6"},variable:{color:"#6cb8e6"},"attr-value":{color:"#91d076"},inserted:{color:"#91d076"},color:{color:"#91d076"},"selector.value":{color:"#91d076"},string:{color:"#91d076"},"string.url-link":{color:"#91d076"},builtin:{color:"#f4adf4"},"keyword-array":{color:"#f4adf4"},package:{color:"#f4adf4"},regex:{color:"#f4adf4"},function:{color:"#c699e3"},"selector.class":{color:"#c699e3"},"selector.id":{color:"#c699e3"},"atrule.rule":{color:"#e9ae7e"},combinator:{color:"#e9ae7e"},keyword:{color:"#e9ae7e"},operator:{color:"#e9ae7e"},"pseudo-class":{color:"#e9ae7e"},"pseudo-element":{color:"#e9ae7e"},selector:{color:"#e9ae7e"},unit:{color:"#e9ae7e"},deleted:{color:"#cd6660"},important:{color:"#cd6660",fontWeight:"bold"},"keyword-this":{color:"#6cb8e6",fontWeight:"bold"},this:{color:"#6cb8e6",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},entity:{cursor:"help"},".language-markdown .token.title":{color:"#6cb8e6",fontWeight:"bold"},".language-markdown .token.title .token.punctuation":{color:"#6cb8e6",fontWeight:"bold"},".language-markdown .token.blockquote.punctuation":{color:"#f4adf4"},".language-markdown .token.code":{color:"#66cccc"},".language-markdown .token.hr.punctuation":{color:"#6cb8e6"},".language-markdown .token.url .token.content":{color:"#91d076"},".language-markdown .token.url-link":{color:"#e6d37a"},".language-markdown .token.list.punctuation":{color:"#f4adf4"},".language-markdown .token.table-header":{color:"#e3eaf2"},".language-json .token.operator":{color:"#e3eaf2"},".language-scss .token.variable":{color:"#66cccc"},"token.tab:not(:empty):before":{color:"#8da1b9"},"token.cr:before":{color:"#8da1b9"},"token.lf:before":{color:"#8da1b9"},"token.space:before":{color:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{color:"#111b27",background:"#6cb8e6"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{color:"#111b27",background:"#6cb8e6"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{color:"#111b27",background:"#6cb8e6da",textDecoration:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{color:"#111b27",background:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{color:"#111b27",background:"#8da1b9"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{color:"#111b27",background:"#8da1b9"},".line-highlight.line-highlight":{background:"linear-gradient(to right, #3c526d5f 70%, #3c526d55)"},".line-highlight.line-highlight:before":{backgroundColor:"#8da1b9",color:"#111b27",boxShadow:"0 1px #3c526d"},".line-highlight.line-highlight[data-end]:after":{backgroundColor:"#8da1b9",color:"#111b27",boxShadow:"0 1px #3c526d"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"#8da1b918"},".line-numbers.line-numbers .line-numbers-rows":{borderRight:"1px solid #0b121b",background:"#0b121b7a"},".line-numbers .line-numbers-rows > span:before":{color:"#8da1b9da"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"#e6d37a"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"#f4adf4"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"#6cb8e6"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"#c699e3"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"#c699e3"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"#c699e3"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"#cd66601f"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"#cd66601f"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"#91d0761f"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"#91d0761f"},".command-line .command-line-prompt":{borderRight:"1px solid #0b121b"},".command-line .command-line-prompt > span:before":{color:"#8da1b9da"}};e.default=t}(lc)),lc}var sc={},Nm;function kR(){return Nm||(Nm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0 0 0 #358ccb, 0 0 0 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local",margin:".5em 0",padding:"0 1em"},'pre[class*="language-"] > code':{display:"block"},':not(pre) > code[class*="language-"]':{position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:".7"}};e.default=t}(sc)),sc}var cc={},Hm;function wR(){return Hm||(Hm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33, 66, 131, .85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag.punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value.punctuation":{color:"#a5c261"},"attr-value.punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}};e.default=t}(cc)),cc}var uc={},Wm;function SR(){return Wm||(Wm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#282a36",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#282a36",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#6272a4"},prolog:{color:"#6272a4"},doctype:{color:"#6272a4"},cdata:{color:"#6272a4"},punctuation:{color:"#f8f8f2"},".namespace":{Opacity:".7"},property:{color:"#ff79c6"},tag:{color:"#ff79c6"},constant:{color:"#ff79c6"},symbol:{color:"#ff79c6"},deleted:{color:"#ff79c6"},boolean:{color:"#bd93f9"},number:{color:"#bd93f9"},selector:{color:"#50fa7b"},"attr-name":{color:"#50fa7b"},string:{color:"#50fa7b"},char:{color:"#50fa7b"},builtin:{color:"#50fa7b"},inserted:{color:"#50fa7b"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#f1fa8c"},"attr-value":{color:"#f1fa8c"},function:{color:"#f1fa8c"},"class-name":{color:"#f1fa8c"},keyword:{color:"#8be9fd"},regex:{color:"#ffb86c"},important:{color:"#ffb86c",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(uc)),uc}var dc={},Bm;function xR(){return Bm||(Bm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2734",color:"#9a86fd",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"]::selection':{textShadow:"none",background:"#6a51e6"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#6a51e6"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#6c6783"},prolog:{color:"#6c6783"},doctype:{color:"#6c6783"},cdata:{color:"#6c6783"},punctuation:{color:"#6c6783"},namespace:{Opacity:".7"},tag:{color:"#e09142"},operator:{color:"#e09142"},number:{color:"#e09142"},property:{color:"#9a86fd"},function:{color:"#9a86fd"},"tag-id":{color:"#eeebff"},selector:{color:"#eeebff"},"atrule-id":{color:"#eeebff"},"code.language-javascript":{color:"#c4b9fe"},"attr-name":{color:"#c4b9fe"},"code.language-css":{color:"#ffcc99"},"code.language-scss":{color:"#ffcc99"},boolean:{color:"#ffcc99"},string:{color:"#ffcc99"},entity:{color:"#ffcc99",cursor:"help"},url:{color:"#ffcc99"},".language-css .token.string":{color:"#ffcc99"},".language-scss .token.string":{color:"#ffcc99"},".style .token.string":{color:"#ffcc99"},"attr-value":{color:"#ffcc99"},keyword:{color:"#ffcc99"},control:{color:"#ffcc99"},directive:{color:"#ffcc99"},unit:{color:"#ffcc99"},statement:{color:"#ffcc99"},regex:{color:"#ffcc99"},atrule:{color:"#ffcc99"},placeholder:{color:"#ffcc99"},variable:{color:"#ffcc99"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #eeebff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#c4b9fe"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #8a75f5",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#2c2937"},".line-numbers .line-numbers-rows > span:before":{color:"#3c3949"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"}};e.default=t}(dc)),dc}var pc={},Vm;function CR(){return Vm||(Vm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#322d29",color:"#88786d"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#322d29",color:"#88786d",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#6f5849"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"]::selection':{textShadow:"none",background:"#6f5849"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#6f5849"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#6a5f58"},prolog:{color:"#6a5f58"},doctype:{color:"#6a5f58"},cdata:{color:"#6a5f58"},punctuation:{color:"#6a5f58"},namespace:{Opacity:".7"},tag:{color:"#bfa05a"},operator:{color:"#bfa05a"},number:{color:"#bfa05a"},property:{color:"#88786d"},function:{color:"#88786d"},"tag-id":{color:"#fff3eb"},selector:{color:"#fff3eb"},"atrule-id":{color:"#fff3eb"},"code.language-javascript":{color:"#a48774"},"attr-name":{color:"#a48774"},"code.language-css":{color:"#fcc440"},"code.language-scss":{color:"#fcc440"},boolean:{color:"#fcc440"},string:{color:"#fcc440"},entity:{color:"#fcc440",cursor:"help"},url:{color:"#fcc440"},".language-css .token.string":{color:"#fcc440"},".language-scss .token.string":{color:"#fcc440"},".style .token.string":{color:"#fcc440"},"attr-value":{color:"#fcc440"},keyword:{color:"#fcc440"},control:{color:"#fcc440"},directive:{color:"#fcc440"},unit:{color:"#fcc440"},statement:{color:"#fcc440"},regex:{color:"#fcc440"},atrule:{color:"#fcc440"},placeholder:{color:"#fcc440"},variable:{color:"#fcc440"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #fff3eb",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#a48774"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #816d5f",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#35302b"},".line-numbers .line-numbers-rows > span:before":{color:"#46403d"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"}};e.default=t}(pc)),pc}var fc={},$m;function ER(){return $m||($m=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2d2a",color:"#687d68"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#2a2d2a",color:"#687d68",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#435643"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#435643"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#435643"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#435643"},'code[class*="language-"]::selection':{textShadow:"none",background:"#435643"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#435643"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#535f53"},prolog:{color:"#535f53"},doctype:{color:"#535f53"},cdata:{color:"#535f53"},punctuation:{color:"#535f53"},namespace:{Opacity:".7"},tag:{color:"#a2b34d"},operator:{color:"#a2b34d"},number:{color:"#a2b34d"},property:{color:"#687d68"},function:{color:"#687d68"},"tag-id":{color:"#f0fff0"},selector:{color:"#f0fff0"},"atrule-id":{color:"#f0fff0"},"code.language-javascript":{color:"#b3d6b3"},"attr-name":{color:"#b3d6b3"},"code.language-css":{color:"#e5fb79"},"code.language-scss":{color:"#e5fb79"},boolean:{color:"#e5fb79"},string:{color:"#e5fb79"},entity:{color:"#e5fb79",cursor:"help"},url:{color:"#e5fb79"},".language-css .token.string":{color:"#e5fb79"},".language-scss .token.string":{color:"#e5fb79"},".style .token.string":{color:"#e5fb79"},"attr-value":{color:"#e5fb79"},keyword:{color:"#e5fb79"},control:{color:"#e5fb79"},directive:{color:"#e5fb79"},unit:{color:"#e5fb79"},statement:{color:"#e5fb79"},regex:{color:"#e5fb79"},atrule:{color:"#e5fb79"},placeholder:{color:"#e5fb79"},variable:{color:"#e5fb79"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #f0fff0",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#b3d6b3"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #5c705c",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#2c302c"},".line-numbers .line-numbers-rows > span:before":{color:"#3b423b"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"}};e.default=t}(fc)),fc}var hc={},qm;function TR(){return qm||(qm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#faf8f5",color:"#728fcb",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"]::selection':{textShadow:"none",background:"#faf8f5"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#faf8f5"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#b6ad9a"},prolog:{color:"#b6ad9a"},doctype:{color:"#b6ad9a"},cdata:{color:"#b6ad9a"},punctuation:{color:"#b6ad9a"},namespace:{Opacity:".7"},tag:{color:"#063289"},operator:{color:"#063289"},number:{color:"#063289"},property:{color:"#b29762"},function:{color:"#b29762"},"tag-id":{color:"#2d2006"},selector:{color:"#2d2006"},"atrule-id":{color:"#2d2006"},"code.language-javascript":{color:"#896724"},"attr-name":{color:"#896724"},"code.language-css":{color:"#728fcb"},"code.language-scss":{color:"#728fcb"},boolean:{color:"#728fcb"},string:{color:"#728fcb"},entity:{color:"#728fcb",cursor:"help"},url:{color:"#728fcb"},".language-css .token.string":{color:"#728fcb"},".language-scss .token.string":{color:"#728fcb"},".style .token.string":{color:"#728fcb"},"attr-value":{color:"#728fcb"},keyword:{color:"#728fcb"},control:{color:"#728fcb"},directive:{color:"#728fcb"},unit:{color:"#728fcb"},statement:{color:"#728fcb"},regex:{color:"#728fcb"},atrule:{color:"#728fcb"},placeholder:{color:"#93abdc"},variable:{color:"#93abdc"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #2d2006",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#896724"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #896724",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#ece8de"},".line-numbers .line-numbers-rows > span:before":{color:"#cdc4b1"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"}};e.default=t}(hc)),hc}var mc={},Gm;function AR(){return Gm||(Gm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#1d262f",color:"#57718e"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#1d262f",color:"#57718e",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#004a9e"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"]::selection':{textShadow:"none",background:"#004a9e"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#004a9e"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#4a5f78"},prolog:{color:"#4a5f78"},doctype:{color:"#4a5f78"},cdata:{color:"#4a5f78"},punctuation:{color:"#4a5f78"},namespace:{Opacity:".7"},tag:{color:"#0aa370"},operator:{color:"#0aa370"},number:{color:"#0aa370"},property:{color:"#57718e"},function:{color:"#57718e"},"tag-id":{color:"#ebf4ff"},selector:{color:"#ebf4ff"},"atrule-id":{color:"#ebf4ff"},"code.language-javascript":{color:"#7eb6f6"},"attr-name":{color:"#7eb6f6"},"code.language-css":{color:"#47ebb4"},"code.language-scss":{color:"#47ebb4"},boolean:{color:"#47ebb4"},string:{color:"#47ebb4"},entity:{color:"#47ebb4",cursor:"help"},url:{color:"#47ebb4"},".language-css .token.string":{color:"#47ebb4"},".language-scss .token.string":{color:"#47ebb4"},".style .token.string":{color:"#47ebb4"},"attr-value":{color:"#47ebb4"},keyword:{color:"#47ebb4"},control:{color:"#47ebb4"},directive:{color:"#47ebb4"},unit:{color:"#47ebb4"},statement:{color:"#47ebb4"},regex:{color:"#47ebb4"},atrule:{color:"#47ebb4"},placeholder:{color:"#47ebb4"},variable:{color:"#47ebb4"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #ebf4ff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#7eb6f6"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #34659d",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#1f2932"},".line-numbers .line-numbers-rows > span:before":{color:"#2c3847"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"}};e.default=t}(mc)),mc}var gc={},Km;function PR(){return Km||(Km=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#24242e",color:"#767693"},'pre[class*="language-"]':{fontFamily:'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',fontSize:"14px",lineHeight:"1.375",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",background:"#24242e",color:"#767693",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#5151e6"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"]::selection':{textShadow:"none",background:"#5151e6"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#5151e6"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#5b5b76"},prolog:{color:"#5b5b76"},doctype:{color:"#5b5b76"},cdata:{color:"#5b5b76"},punctuation:{color:"#5b5b76"},namespace:{Opacity:".7"},tag:{color:"#dd672c"},operator:{color:"#dd672c"},number:{color:"#dd672c"},property:{color:"#767693"},function:{color:"#767693"},"tag-id":{color:"#ebebff"},selector:{color:"#ebebff"},"atrule-id":{color:"#ebebff"},"code.language-javascript":{color:"#aaaaca"},"attr-name":{color:"#aaaaca"},"code.language-css":{color:"#fe8c52"},"code.language-scss":{color:"#fe8c52"},boolean:{color:"#fe8c52"},string:{color:"#fe8c52"},entity:{color:"#fe8c52",cursor:"help"},url:{color:"#fe8c52"},".language-css .token.string":{color:"#fe8c52"},".language-scss .token.string":{color:"#fe8c52"},".style .token.string":{color:"#fe8c52"},"attr-value":{color:"#fe8c52"},keyword:{color:"#fe8c52"},control:{color:"#fe8c52"},directive:{color:"#fe8c52"},unit:{color:"#fe8c52"},statement:{color:"#fe8c52"},regex:{color:"#fe8c52"},atrule:{color:"#fe8c52"},placeholder:{color:"#fe8c52"},variable:{color:"#fe8c52"},deleted:{textDecoration:"line-through"},inserted:{borderBottom:"1px dotted #ebebff",textDecoration:"none"},italic:{fontStyle:"italic"},important:{fontWeight:"bold",color:"#aaaaca"},bold:{fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid #7676f4",OutlineOffset:".4em"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#262631"},".line-numbers .line-numbers-rows > span:before":{color:"#393949"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"}};e.default=t}(gc)),gc}var _c={},Qm;function RR(){return Qm||(Qm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:"1px solid #dddddd",backgroundColor:"white"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{background:"#b3d4fc"},'pre[class*="language-"]::selection':{background:"#b3d4fc"},'pre[class*="language-"] ::selection':{background:"#b3d4fc"},'code[class*="language-"]::selection':{background:"#b3d4fc"},'code[class*="language-"] ::selection':{background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{padding:".2em",paddingTop:"1px",paddingBottom:"1px",background:"#f8f8f8",border:"1px solid #dddddd"},comment:{color:"#999988",fontStyle:"italic"},prolog:{color:"#999988",fontStyle:"italic"},doctype:{color:"#999988",fontStyle:"italic"},cdata:{color:"#999988",fontStyle:"italic"},namespace:{Opacity:".7"},string:{color:"#e3116c"},"attr-value":{color:"#e3116c"},punctuation:{color:"#393A34"},operator:{color:"#393A34"},entity:{color:"#36acaa"},url:{color:"#36acaa"},symbol:{color:"#36acaa"},number:{color:"#36acaa"},boolean:{color:"#36acaa"},variable:{color:"#36acaa"},constant:{color:"#36acaa"},property:{color:"#36acaa"},regex:{color:"#36acaa"},inserted:{color:"#36acaa"},atrule:{color:"#00a4db"},keyword:{color:"#00a4db"},"attr-name":{color:"#00a4db"},".language-autohotkey .token.selector":{color:"#00a4db"},function:{color:"#9a050f",fontWeight:"bold"},deleted:{color:"#9a050f"},".language-autohotkey .token.tag":{color:"#9a050f"},tag:{color:"#00009f"},selector:{color:"#00009f"},".language-autohotkey .token.keyword":{color:"#00009f"},important:{fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(_c)),_c}var bc={},Ym;function MR(){return Ym||(Ym=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#ebdbb2",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ebdbb2",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#1d2021"},'pre[class*="language-"]::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"] ::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"]::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"] ::-moz-selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"]::selection':{color:"#fbf1c7",background:"#7c6f64"},'pre[class*="language-"] ::selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"]::selection':{color:"#fbf1c7",background:"#7c6f64"},'code[class*="language-"] ::selection':{color:"#fbf1c7",background:"#7c6f64"},':not(pre) > code[class*="language-"]':{background:"#1d2021",padding:"0.1em",borderRadius:"0.3em"},comment:{color:"#a89984"},prolog:{color:"#a89984"},cdata:{color:"#a89984"},delimiter:{color:"#fb4934"},boolean:{color:"#fb4934"},keyword:{color:"#fb4934"},selector:{color:"#fb4934"},important:{color:"#fb4934"},atrule:{color:"#fb4934"},operator:{color:"#a89984"},punctuation:{color:"#a89984"},"attr-name":{color:"#a89984"},tag:{color:"#fabd2f"},"tag.punctuation":{color:"#fabd2f"},doctype:{color:"#fabd2f"},builtin:{color:"#fabd2f"},entity:{color:"#d3869b"},number:{color:"#d3869b"},symbol:{color:"#d3869b"},property:{color:"#fb4934"},constant:{color:"#fb4934"},variable:{color:"#fb4934"},string:{color:"#b8bb26"},char:{color:"#b8bb26"},"attr-value":{color:"#a89984"},"attr-value.punctuation":{color:"#a89984"},url:{color:"#b8bb26",textDecoration:"underline"},function:{color:"#fabd2f"},regex:{background:"#b8bb26"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#a89984"},deleted:{background:"#fb4934"}};e.default=t}(bc)),bc}var vc={},Xm;function DR(){return Xm||(Xm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#3c3836",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#3c3836",fontFamily:'Consolas, Monaco, "Andale Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#f9f5d7"},'pre[class*="language-"]::-moz-selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"] ::-moz-selection':{color:"#282828",background:"#a89984"},'code[class*="language-"]::-moz-selection':{color:"#282828",background:"#a89984"},'code[class*="language-"] ::-moz-selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"]::selection':{color:"#282828",background:"#a89984"},'pre[class*="language-"] ::selection':{color:"#282828",background:"#a89984"},'code[class*="language-"]::selection':{color:"#282828",background:"#a89984"},'code[class*="language-"] ::selection':{color:"#282828",background:"#a89984"},':not(pre) > code[class*="language-"]':{background:"#f9f5d7",padding:"0.1em",borderRadius:"0.3em"},comment:{color:"#7c6f64"},prolog:{color:"#7c6f64"},cdata:{color:"#7c6f64"},delimiter:{color:"#9d0006"},boolean:{color:"#9d0006"},keyword:{color:"#9d0006"},selector:{color:"#9d0006"},important:{color:"#9d0006"},atrule:{color:"#9d0006"},operator:{color:"#7c6f64"},punctuation:{color:"#7c6f64"},"attr-name":{color:"#7c6f64"},tag:{color:"#b57614"},"tag.punctuation":{color:"#b57614"},doctype:{color:"#b57614"},builtin:{color:"#b57614"},entity:{color:"#8f3f71"},number:{color:"#8f3f71"},symbol:{color:"#8f3f71"},property:{color:"#9d0006"},constant:{color:"#9d0006"},variable:{color:"#9d0006"},string:{color:"#797403"},char:{color:"#797403"},"attr-value":{color:"#7c6f64"},"attr-value.punctuation":{color:"#7c6f64"},url:{color:"#797403",textDecoration:"underline"},function:{color:"#b57614"},regex:{background:"#797403"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#7c6f64"},deleted:{background:"#9d0006"}};e.default=t}(vc)),vc}var yc={},Jm;function jR(){return Jm||(Jm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={"code[class*='language-']":{color:"#d6e7ff",background:"#030314",textShadow:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:"1em",lineHeight:"1.5",letterSpacing:".2px",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",textAlign:"left",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},"pre[class*='language-']":{color:"#d6e7ff",background:"#030314",textShadow:"none",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',fontSize:"1em",lineHeight:"1.5",letterSpacing:".2px",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",textAlign:"left",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",border:"1px solid #2a4555",borderRadius:"5px",padding:"1.5em 1em",margin:"1em 0",overflow:"auto"},"pre[class*='language-']::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-'] ::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-']::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-'] ::-moz-selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-']::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"pre[class*='language-'] ::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-']::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},"code[class*='language-'] ::selection":{color:"inherit",background:"#1d3b54",textShadow:"none"},":not(pre) > code[class*='language-']":{color:"#f0f6f6",background:"#2a4555",padding:"0.2em 0.3em",borderRadius:"0.2em",boxDecorationBreak:"clone"},comment:{color:"#446e69"},prolog:{color:"#446e69"},doctype:{color:"#446e69"},cdata:{color:"#446e69"},punctuation:{color:"#d6b007"},property:{color:"#d6e7ff"},tag:{color:"#d6e7ff"},boolean:{color:"#d6e7ff"},number:{color:"#d6e7ff"},constant:{color:"#d6e7ff"},symbol:{color:"#d6e7ff"},deleted:{color:"#d6e7ff"},selector:{color:"#e60067"},"attr-name":{color:"#e60067"},builtin:{color:"#e60067"},inserted:{color:"#e60067"},string:{color:"#49c6ec"},char:{color:"#49c6ec"},operator:{color:"#ec8e01",background:"transparent"},entity:{color:"#ec8e01",background:"transparent"},url:{color:"#ec8e01",background:"transparent"},".language-css .token.string":{color:"#ec8e01",background:"transparent"},".style .token.string":{color:"#ec8e01",background:"transparent"},atrule:{color:"#0fe468"},"attr-value":{color:"#0fe468"},keyword:{color:"#0fe468"},function:{color:"#78f3e9"},"class-name":{color:"#78f3e9"},regex:{color:"#d6e7ff"},important:{color:"#d6e7ff"},variable:{color:"#d6e7ff"}};e.default=t}(yc)),yc}var kc={},Zm;function zR(){return Zm||(Zm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{fontFamily:'"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',fontSize:"16px",lineHeight:"1.375",direction:"ltr",textAlign:"left",wordSpacing:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",background:"#322931",color:"#b9b5b8"},'pre[class*="language-"]':{fontFamily:'"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',fontSize:"16px",lineHeight:"1.375",direction:"ltr",textAlign:"left",wordSpacing:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",background:"#322931",color:"#b9b5b8",padding:"1em",margin:".5em 0",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{padding:".1em",borderRadius:".3em"},comment:{color:"#797379"},prolog:{color:"#797379"},doctype:{color:"#797379"},cdata:{color:"#797379"},punctuation:{color:"#b9b5b8"},".namespace":{Opacity:".7"},null:{color:"#fd8b19"},operator:{color:"#fd8b19"},boolean:{color:"#fd8b19"},number:{color:"#fd8b19"},property:{color:"#fdcc59"},tag:{color:"#1290bf"},string:{color:"#149b93"},selector:{color:"#c85e7c"},"attr-name":{color:"#fd8b19"},entity:{color:"#149b93",cursor:"help"},url:{color:"#149b93"},".language-css .token.string":{color:"#149b93"},".style .token.string":{color:"#149b93"},"attr-value":{color:"#8fc13e"},keyword:{color:"#8fc13e"},control:{color:"#8fc13e"},directive:{color:"#8fc13e"},unit:{color:"#8fc13e"},statement:{color:"#149b93"},regex:{color:"#149b93"},atrule:{color:"#149b93"},placeholder:{color:"#1290bf"},variable:{color:"#1290bf"},important:{color:"#dd464c",fontWeight:"bold"},"pre > code.highlight":{Outline:".4em solid red",OutlineOffset:".4em"}};e.default=t}(kc)),kc}var wc={},eg;function OR(){return eg||(eg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#263E52",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#263E52",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#5c98cd"},prolog:{color:"#5c98cd"},doctype:{color:"#5c98cd"},cdata:{color:"#5c98cd"},punctuation:{color:"#f8f8f2"},".namespace":{Opacity:".7"},property:{color:"#F05E5D"},tag:{color:"#F05E5D"},constant:{color:"#F05E5D"},symbol:{color:"#F05E5D"},deleted:{color:"#F05E5D"},boolean:{color:"#BC94F9"},number:{color:"#BC94F9"},selector:{color:"#FCFCD6"},"attr-name":{color:"#FCFCD6"},string:{color:"#FCFCD6"},char:{color:"#FCFCD6"},builtin:{color:"#FCFCD6"},inserted:{color:"#FCFCD6"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#66D8EF"},"attr-value":{color:"#66D8EF"},function:{color:"#66D8EF"},"class-name":{color:"#66D8EF"},keyword:{color:"#6EB26E"},regex:{color:"#F05E5D"},important:{color:"#F05E5D",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(wc)),wc}var Sc={},tg;function LR(){return tg||(tg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#eee",background:"#2f2f2f",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#eee",background:"#2f2f2f",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#363636"},'pre[class*="language-"]::-moz-selection':{background:"#363636"},'code[class*="language-"] ::-moz-selection':{background:"#363636"},'pre[class*="language-"] ::-moz-selection':{background:"#363636"},'code[class*="language-"]::selection':{background:"#363636"},'pre[class*="language-"]::selection':{background:"#363636"},'code[class*="language-"] ::selection':{background:"#363636"},'pre[class*="language-"] ::selection':{background:"#363636"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#fd9170"},".language-sass > code":{color:"#fd9170"},".language-scss > code":{color:"#fd9170"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#c792ea"},"attr-name":{color:"#ffcb6b"},"attr-value":{color:"#a5e844"},attribute:{color:"#a5e844"},boolean:{color:"#c792ea"},builtin:{color:"#ffcb6b"},cdata:{color:"#80cbc4"},char:{color:"#80cbc4"},class:{color:"#ffcb6b"},"class-name":{color:"#f2ff00"},comment:{color:"#616161"},constant:{color:"#c792ea"},deleted:{color:"#ff6666"},doctype:{color:"#616161"},entity:{color:"#ff6666"},function:{color:"#c792ea"},hexcode:{color:"#f2ff00"},id:{color:"#c792ea",fontWeight:"bold"},important:{color:"#c792ea",fontWeight:"bold"},inserted:{color:"#80cbc4"},keyword:{color:"#c792ea"},number:{color:"#fd9170"},operator:{color:"#89ddff"},prolog:{color:"#616161"},property:{color:"#80cbc4"},"pseudo-class":{color:"#a5e844"},"pseudo-element":{color:"#a5e844"},punctuation:{color:"#89ddff"},regex:{color:"#f2ff00"},selector:{color:"#ff6666"},string:{color:"#a5e844"},symbol:{color:"#c792ea"},tag:{color:"#ff6666"},unit:{color:"#fd9170"},url:{color:"#ff6666"},variable:{color:"#ff6666"}};e.default=t}(Sc)),Sc}var xc={},ng;function IR(){return ng||(ng=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#90a4ae",background:"#fafafa",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#90a4ae",background:"#fafafa",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"]::-moz-selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"] ::-moz-selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"] ::-moz-selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"]::selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"]::selection':{background:"#cceae7",color:"#263238"},'code[class*="language-"] ::selection':{background:"#cceae7",color:"#263238"},'pre[class*="language-"] ::selection':{background:"#cceae7",color:"#263238"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#f76d47"},".language-sass > code":{color:"#f76d47"},".language-scss > code":{color:"#f76d47"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#7c4dff"},"attr-name":{color:"#39adb5"},"attr-value":{color:"#f6a434"},attribute:{color:"#f6a434"},boolean:{color:"#7c4dff"},builtin:{color:"#39adb5"},cdata:{color:"#39adb5"},char:{color:"#39adb5"},class:{color:"#39adb5"},"class-name":{color:"#6182b8"},comment:{color:"#aabfc9"},constant:{color:"#7c4dff"},deleted:{color:"#e53935"},doctype:{color:"#aabfc9"},entity:{color:"#e53935"},function:{color:"#7c4dff"},hexcode:{color:"#f76d47"},id:{color:"#7c4dff",fontWeight:"bold"},important:{color:"#7c4dff",fontWeight:"bold"},inserted:{color:"#39adb5"},keyword:{color:"#7c4dff"},number:{color:"#f76d47"},operator:{color:"#39adb5"},prolog:{color:"#aabfc9"},property:{color:"#39adb5"},"pseudo-class":{color:"#f6a434"},"pseudo-element":{color:"#f6a434"},punctuation:{color:"#39adb5"},regex:{color:"#6182b8"},selector:{color:"#e53935"},string:{color:"#f6a434"},symbol:{color:"#7c4dff"},tag:{color:"#e53935"},unit:{color:"#f76d47"},url:{color:"#e53935"},variable:{color:"#e53935"}};e.default=t}(xc)),xc}var Cc={},og;function FR(){return og||(og=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#c3cee3",background:"#263238",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",color:"#c3cee3",background:"#263238",fontFamily:"Roboto Mono, monospace",fontSize:"1em",lineHeight:"1.5em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",overflow:"auto",position:"relative",margin:"0.5em 0",padding:"1.25em 1em"},'code[class*="language-"]::-moz-selection':{background:"#363636"},'pre[class*="language-"]::-moz-selection':{background:"#363636"},'code[class*="language-"] ::-moz-selection':{background:"#363636"},'pre[class*="language-"] ::-moz-selection':{background:"#363636"},'code[class*="language-"]::selection':{background:"#363636"},'pre[class*="language-"]::selection':{background:"#363636"},'code[class*="language-"] ::selection':{background:"#363636"},'pre[class*="language-"] ::selection':{background:"#363636"},':not(pre) > code[class*="language-"]':{whiteSpace:"normal",borderRadius:"0.2em",padding:"0.1em"},".language-css > code":{color:"#fd9170"},".language-sass > code":{color:"#fd9170"},".language-scss > code":{color:"#fd9170"},'[class*="language-"] .namespace':{Opacity:"0.7"},atrule:{color:"#c792ea"},"attr-name":{color:"#ffcb6b"},"attr-value":{color:"#c3e88d"},attribute:{color:"#c3e88d"},boolean:{color:"#c792ea"},builtin:{color:"#ffcb6b"},cdata:{color:"#80cbc4"},char:{color:"#80cbc4"},class:{color:"#ffcb6b"},"class-name":{color:"#f2ff00"},color:{color:"#f2ff00"},comment:{color:"#546e7a"},constant:{color:"#c792ea"},deleted:{color:"#f07178"},doctype:{color:"#546e7a"},entity:{color:"#f07178"},function:{color:"#c792ea"},hexcode:{color:"#f2ff00"},id:{color:"#c792ea",fontWeight:"bold"},important:{color:"#c792ea",fontWeight:"bold"},inserted:{color:"#80cbc4"},keyword:{color:"#c792ea",fontStyle:"italic"},number:{color:"#fd9170"},operator:{color:"#89ddff"},prolog:{color:"#546e7a"},property:{color:"#80cbc4"},"pseudo-class":{color:"#c3e88d"},"pseudo-element":{color:"#c3e88d"},punctuation:{color:"#89ddff"},regex:{color:"#f2ff00"},selector:{color:"#f07178"},string:{color:"#c3e88d"},symbol:{color:"#c792ea"},tag:{color:"#f07178"},unit:{color:"#f07178"},url:{color:"#fd9170"},variable:{color:"#f07178"}};e.default=t}(Cc)),Cc}var Ec={},rg;function UR(){return rg||(rg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#d6deeb",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",fontSize:"1em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"white",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",fontSize:"1em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",background:"#011627"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},':not(pre) > code[class*="language-"]':{color:"white",background:"#011627",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"rgb(99, 119, 119)",fontStyle:"italic"},prolog:{color:"rgb(99, 119, 119)",fontStyle:"italic"},cdata:{color:"rgb(99, 119, 119)",fontStyle:"italic"},punctuation:{color:"rgb(199, 146, 234)"},".namespace":{color:"rgb(178, 204, 214)"},deleted:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"},symbol:{color:"rgb(128, 203, 196)"},property:{color:"rgb(128, 203, 196)"},tag:{color:"rgb(127, 219, 202)"},operator:{color:"rgb(127, 219, 202)"},keyword:{color:"rgb(127, 219, 202)"},boolean:{color:"rgb(255, 88, 116)"},number:{color:"rgb(247, 140, 108)"},constant:{color:"rgb(130, 170, 255)"},function:{color:"rgb(130, 170, 255)"},builtin:{color:"rgb(130, 170, 255)"},char:{color:"rgb(130, 170, 255)"},selector:{color:"rgb(199, 146, 234)",fontStyle:"italic"},doctype:{color:"rgb(199, 146, 234)",fontStyle:"italic"},"attr-name":{color:"rgb(173, 219, 103)",fontStyle:"italic"},inserted:{color:"rgb(173, 219, 103)",fontStyle:"italic"},string:{color:"rgb(173, 219, 103)"},url:{color:"rgb(173, 219, 103)"},entity:{color:"rgb(173, 219, 103)"},".language-css .token.string":{color:"rgb(173, 219, 103)"},".style .token.string":{color:"rgb(173, 219, 103)"},"class-name":{color:"rgb(255, 203, 139)"},atrule:{color:"rgb(255, 203, 139)"},"attr-value":{color:"rgb(255, 203, 139)"},regex:{color:"rgb(214, 222, 235)"},important:{color:"rgb(214, 222, 235)",fontWeight:"bold"},variable:{color:"rgb(214, 222, 235)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Ec)),Ec}var Tc={},ag;function NR(){return ag||(ag=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:`"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2E3440",fontFamily:`"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2E3440",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#636f88"},prolog:{color:"#636f88"},doctype:{color:"#636f88"},cdata:{color:"#636f88"},punctuation:{color:"#81A1C1"},".namespace":{Opacity:".7"},property:{color:"#81A1C1"},tag:{color:"#81A1C1"},constant:{color:"#81A1C1"},symbol:{color:"#81A1C1"},deleted:{color:"#81A1C1"},number:{color:"#B48EAD"},boolean:{color:"#81A1C1"},selector:{color:"#A3BE8C"},"attr-name":{color:"#A3BE8C"},string:{color:"#A3BE8C"},char:{color:"#A3BE8C"},builtin:{color:"#A3BE8C"},inserted:{color:"#A3BE8C"},operator:{color:"#81A1C1"},entity:{color:"#81A1C1",cursor:"help"},url:{color:"#81A1C1"},".language-css .token.string":{color:"#81A1C1"},".style .token.string":{color:"#81A1C1"},variable:{color:"#81A1C1"},atrule:{color:"#88C0D0"},"attr-value":{color:"#88C0D0"},function:{color:"#88C0D0"},"class-name":{color:"#88C0D0"},keyword:{color:"#81A1C1"},regex:{color:"#EBCB8B"},important:{color:"#EBCB8B",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Tc)),Tc}var Ac={},ig;function HR(){return ig||(ig=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"]::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},prolog:{color:"hsl(220, 10%, 40%)"},cdata:{color:"hsl(220, 10%, 40%)"},doctype:{color:"hsl(220, 14%, 71%)"},punctuation:{color:"hsl(220, 14%, 71%)"},entity:{color:"hsl(220, 14%, 71%)",cursor:"help"},"attr-name":{color:"hsl(29, 54%, 61%)"},"class-name":{color:"hsl(29, 54%, 61%)"},boolean:{color:"hsl(29, 54%, 61%)"},constant:{color:"hsl(29, 54%, 61%)"},number:{color:"hsl(29, 54%, 61%)"},atrule:{color:"hsl(29, 54%, 61%)"},keyword:{color:"hsl(286, 60%, 67%)"},property:{color:"hsl(355, 65%, 65%)"},tag:{color:"hsl(355, 65%, 65%)"},symbol:{color:"hsl(355, 65%, 65%)"},deleted:{color:"hsl(355, 65%, 65%)"},important:{color:"hsl(355, 65%, 65%)"},selector:{color:"hsl(95, 38%, 62%)"},string:{color:"hsl(95, 38%, 62%)"},char:{color:"hsl(95, 38%, 62%)"},builtin:{color:"hsl(95, 38%, 62%)"},inserted:{color:"hsl(95, 38%, 62%)"},regex:{color:"hsl(95, 38%, 62%)"},"attr-value":{color:"hsl(95, 38%, 62%)"},"attr-value > .token.punctuation":{color:"hsl(95, 38%, 62%)"},variable:{color:"hsl(207, 82%, 66%)"},operator:{color:"hsl(207, 82%, 66%)"},function:{color:"hsl(207, 82%, 66%)"},url:{color:"hsl(187, 47%, 55%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(220, 14%, 71%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(220, 14%, 71%)"},".language-css .token.selector":{color:"hsl(355, 65%, 65%)"},".language-css .token.property":{color:"hsl(220, 14%, 71%)"},".language-css .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.string.url":{color:"hsl(95, 38%, 62%)"},".language-css .token.important":{color:"hsl(286, 60%, 67%)"},".language-css .token.atrule .token.rule":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.operator":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(5, 48%, 51%)"},".language-json .token.operator":{color:"hsl(220, 14%, 71%)"},".language-json .token.null.keyword":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.url":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.operator":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.content":{color:"hsl(207, 82%, 66%)"},".language-markdown .token.url > .token.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.url-reference.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(95, 38%, 62%)"},".language-markdown .token.bold .token.content":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.italic .token.content":{color:"hsl(286, 60%, 67%)"},".language-markdown .token.strike .token.content":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.list.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(355, 65%, 65%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.cr:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.lf:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.space:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},".line-highlight.line-highlight":{background:"hsla(220, 100%, 80%, 0.04)"},".line-highlight.line-highlight:before":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(220, 100%, 80%, 0.04)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".command-line .command-line-prompt":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(220, 14%, 45%)"},".command-line .command-line-prompt > span:before":{color:"hsl(220, 14%, 45%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(286, 60%, 67%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(224, 13%, 17%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(224, 13%, 17%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(224, 13%, 17%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(224, 13%, 17%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(219, 13%, 22%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(220, 14%, 71%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(220, 14%, 71%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(220, 14%, 71%)"}};e.default=t}(Ac)),Ac}var Pc={},lg;function WR(){return lg||(lg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"]::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'code[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},'pre[class*="language-"] *::selection':{background:"hsl(230, 1%, 90%)",color:"inherit"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},prolog:{color:"hsl(230, 4%, 64%)"},cdata:{color:"hsl(230, 4%, 64%)"},doctype:{color:"hsl(230, 8%, 24%)"},punctuation:{color:"hsl(230, 8%, 24%)"},entity:{color:"hsl(230, 8%, 24%)",cursor:"help"},"attr-name":{color:"hsl(35, 99%, 36%)"},"class-name":{color:"hsl(35, 99%, 36%)"},boolean:{color:"hsl(35, 99%, 36%)"},constant:{color:"hsl(35, 99%, 36%)"},number:{color:"hsl(35, 99%, 36%)"},atrule:{color:"hsl(35, 99%, 36%)"},keyword:{color:"hsl(301, 63%, 40%)"},property:{color:"hsl(5, 74%, 59%)"},tag:{color:"hsl(5, 74%, 59%)"},symbol:{color:"hsl(5, 74%, 59%)"},deleted:{color:"hsl(5, 74%, 59%)"},important:{color:"hsl(5, 74%, 59%)"},selector:{color:"hsl(119, 34%, 47%)"},string:{color:"hsl(119, 34%, 47%)"},char:{color:"hsl(119, 34%, 47%)"},builtin:{color:"hsl(119, 34%, 47%)"},inserted:{color:"hsl(119, 34%, 47%)"},regex:{color:"hsl(119, 34%, 47%)"},"attr-value":{color:"hsl(119, 34%, 47%)"},"attr-value > .token.punctuation":{color:"hsl(119, 34%, 47%)"},variable:{color:"hsl(221, 87%, 60%)"},operator:{color:"hsl(221, 87%, 60%)"},function:{color:"hsl(221, 87%, 60%)"},url:{color:"hsl(198, 99%, 37%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(230, 8%, 24%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(230, 8%, 24%)"},".language-css .token.selector":{color:"hsl(5, 74%, 59%)"},".language-css .token.property":{color:"hsl(230, 8%, 24%)"},".language-css .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.function":{color:"hsl(198, 99%, 37%)"},".language-css .token.url > .token.string.url":{color:"hsl(119, 34%, 47%)"},".language-css .token.important":{color:"hsl(301, 63%, 40%)"},".language-css .token.atrule .token.rule":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.operator":{color:"hsl(301, 63%, 40%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(344, 84%, 43%)"},".language-json .token.operator":{color:"hsl(230, 8%, 24%)"},".language-json .token.null.keyword":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.url":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.operator":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(230, 8%, 24%)"},".language-markdown .token.url > .token.content":{color:"hsl(221, 87%, 60%)"},".language-markdown .token.url > .token.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.url-reference.url":{color:"hsl(198, 99%, 37%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(230, 4%, 64%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(119, 34%, 47%)"},".language-markdown .token.bold .token.content":{color:"hsl(35, 99%, 36%)"},".language-markdown .token.italic .token.content":{color:"hsl(301, 63%, 40%)"},".language-markdown .token.strike .token.content":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.list.punctuation":{color:"hsl(5, 74%, 59%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(5, 74%, 59%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.cr:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.lf:before":{color:"hsla(230, 8%, 24%, 0.2)"},"token.space:before":{color:"hsla(230, 8%, 24%, 0.2)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 6%, 44%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(230, 1%, 78%)",color:"hsl(230, 8%, 24%)"},".line-highlight.line-highlight":{background:"hsla(230, 8%, 24%, 0.05)"},".line-highlight.line-highlight:before":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(230, 1%, 90%)",color:"hsl(230, 8%, 24%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(230, 8%, 24%, 0.05)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".command-line .command-line-prompt":{borderRightColor:"hsla(230, 8%, 24%, 0.2)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(230, 1%, 62%)"},".command-line .command-line-prompt > span:before":{color:"hsl(230, 1%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(5, 74%, 59%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(119, 34%, 47%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(221, 87%, 60%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(301, 63%, 40%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(301, 63%, 40%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(0, 0, 95%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(0, 0, 95%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(0, 0, 95%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(0, 0, 95%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(0, 0%, 100%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(0, 0%, 100%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(230, 8%, 24%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(230, 8%, 24%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(230, 8%, 24%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(230, 8%, 24%)"}};e.default=t}(Pc)),Pc}var Rc={},sg;function BR(){return sg||(sg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"15px",lineHeight:"1.5",color:"#dccf8f",textShadow:"0"},'pre[class*="language-"]':{MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordBreak:"break-all",wordWrap:"break-word",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"15px",lineHeight:"1.5",color:"#DCCF8F",textShadow:"0",borderRadius:"5px",border:"1px solid #000",background:"#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",padding:"12px",overflow:"auto"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{borderRadius:"5px",border:"1px solid #000",color:"#DCCF8F",background:"#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",padding:"2px 6px"},namespace:{Opacity:".7"},comment:{color:"#586e75",fontStyle:"italic"},prolog:{color:"#586e75",fontStyle:"italic"},doctype:{color:"#586e75",fontStyle:"italic"},cdata:{color:"#586e75",fontStyle:"italic"},number:{color:"#b89859"},string:{color:"#468966"},char:{color:"#468966"},builtin:{color:"#468966"},inserted:{color:"#468966"},"attr-name":{color:"#b89859"},operator:{color:"#dccf8f"},entity:{color:"#dccf8f",cursor:"help"},url:{color:"#dccf8f"},".language-css .token.string":{color:"#dccf8f"},".style .token.string":{color:"#dccf8f"},selector:{color:"#859900"},regex:{color:"#859900"},atrule:{color:"#cb4b16"},keyword:{color:"#cb4b16"},"attr-value":{color:"#468966"},function:{color:"#b58900"},variable:{color:"#b58900"},placeholder:{color:"#b58900"},property:{color:"#b89859"},tag:{color:"#ffb03b"},boolean:{color:"#b89859"},constant:{color:"#b89859"},symbol:{color:"#b89859"},important:{color:"#dc322f"},statement:{color:"#dc322f"},deleted:{color:"#dc322f"},punctuation:{color:"#dccf8f"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Rc)),Rc}var Mc={},cg;function VR(){return cg||(cg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={"code[class*='language-']":{color:"#9efeff",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",fontFamily:"'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontWeight:"400",fontSize:"17px",lineHeight:"25px",letterSpacing:"0.5px",textShadow:"0 1px #222245"},"pre[class*='language-']":{color:"#9efeff",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",fontFamily:"'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontWeight:"400",fontSize:"17px",lineHeight:"25px",letterSpacing:"0.5px",textShadow:"0 1px #222245",padding:"2em",margin:"0.5em 0",overflow:"auto",background:"#1e1e3f"},"pre[class*='language-']::-moz-selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-'] ::-moz-selection":{color:"inherit",background:"#a599e9"},"code[class*='language-']::-moz-selection":{color:"inherit",background:"#a599e9"},"code[class*='language-'] ::-moz-selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-']::selection":{color:"inherit",background:"#a599e9"},"pre[class*='language-'] ::selection":{color:"inherit",background:"#a599e9"},"code[class*='language-']::selection":{color:"inherit",background:"#a599e9"},"code[class*='language-'] ::selection":{color:"inherit",background:"#a599e9"},":not(pre) > code[class*='language-']":{background:"#1e1e3f",padding:"0.1em",borderRadius:"0.3em"},"":{fontWeight:"400"},comment:{color:"#b362ff"},prolog:{color:"#b362ff"},cdata:{color:"#b362ff"},delimiter:{color:"#ff9d00"},keyword:{color:"#ff9d00"},selector:{color:"#ff9d00"},important:{color:"#ff9d00"},atrule:{color:"#ff9d00"},operator:{color:"rgb(255, 180, 84)",background:"none"},"attr-name":{color:"rgb(255, 180, 84)"},punctuation:{color:"#ffffff"},boolean:{color:"rgb(255, 98, 140)"},tag:{color:"rgb(255, 157, 0)"},"tag.punctuation":{color:"rgb(255, 157, 0)"},doctype:{color:"rgb(255, 157, 0)"},builtin:{color:"rgb(255, 157, 0)"},entity:{color:"#6897bb",background:"none"},symbol:{color:"#6897bb"},number:{color:"#ff628c"},property:{color:"#ff628c"},constant:{color:"#ff628c"},variable:{color:"#ff628c"},string:{color:"#a5ff90"},char:{color:"#a5ff90"},"attr-value":{color:"#a5c261"},"attr-value.punctuation":{color:"#a5c261"},"attr-value.punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline",background:"none"},function:{color:"rgb(250, 208, 0)"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#00ff00"},deleted:{background:"#ff000d"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"},"class-name":{color:"#fb94ff"},".language-css .token.string":{background:"none"},".style .token.string":{background:"none"},".line-highlight.line-highlight":{marginTop:"36px",background:"linear-gradient(to right, rgba(179, 98, 255, 0.17), transparent)"},".line-highlight.line-highlight:before":{content:"''"},".line-highlight.line-highlight[data-end]:after":{content:"''"}};e.default=t}(Mc)),Mc}var Dc={},ug;function $R(){return ug||(ug=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#839496",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#839496",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#002b36"},':not(pre) > code[class*="language-"]':{background:"#002b36",padding:".1em",borderRadius:".3em"},comment:{color:"#586e75"},prolog:{color:"#586e75"},doctype:{color:"#586e75"},cdata:{color:"#586e75"},punctuation:{color:"#93a1a1"},".namespace":{Opacity:".7"},property:{color:"#268bd2"},keyword:{color:"#268bd2"},tag:{color:"#268bd2"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#b58900"},constant:{color:"#b58900"},symbol:{color:"#dc322f"},deleted:{color:"#dc322f"},number:{color:"#859900"},selector:{color:"#859900"},"attr-name":{color:"#859900"},string:{color:"#859900"},char:{color:"#859900"},builtin:{color:"#859900"},inserted:{color:"#859900"},variable:{color:"#268bd2"},operator:{color:"#EDEDED"},function:{color:"#268bd2"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"}};e.default=t}(Dc)),Dc}var jc={},dg;function qR(){return dg||(dg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",backgroundColor:"transparent !important",backgroundImage:"linear-gradient(to bottom, #2a2139 75%, #34294f)"},':not(pre) > code[class*="language-"]':{backgroundColor:"transparent !important",backgroundImage:"linear-gradient(to bottom, #2a2139 75%, #34294f)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#8e8e8e"},"block-comment":{color:"#8e8e8e"},prolog:{color:"#8e8e8e"},doctype:{color:"#8e8e8e"},cdata:{color:"#8e8e8e"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},number:{color:"#e2777a"},unit:{color:"#e2777a"},hexcode:{color:"#e2777a"},deleted:{color:"#e2777a"},property:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"},selector:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"},"function-name":{color:"#6196cc"},boolean:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},"selector.id":{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},function:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"},"class-name":{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"},constant:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},symbol:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},important:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",fontWeight:"bold"},atrule:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},keyword:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},"selector.class":{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},builtin:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"},string:{color:"#f87c32"},char:{color:"#f87c32"},"attr-value":{color:"#f87c32"},regex:{color:"#f87c32"},variable:{color:"#f87c32"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}};e.default=t}(jc)),jc}var zc={},pg;function GR(){return pg||(pg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#393A34",fontFamily:'"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",fontSize:".9em",lineHeight:"1.2em",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",border:"1px solid #dddddd",backgroundColor:"white"},'pre > code[class*="language-"]':{fontSize:"1em"},'pre[class*="language-"]::-moz-selection':{background:"#C1DEF1"},'pre[class*="language-"] ::-moz-selection':{background:"#C1DEF1"},'code[class*="language-"]::-moz-selection':{background:"#C1DEF1"},'code[class*="language-"] ::-moz-selection':{background:"#C1DEF1"},'pre[class*="language-"]::selection':{background:"#C1DEF1"},'pre[class*="language-"] ::selection':{background:"#C1DEF1"},'code[class*="language-"]::selection':{background:"#C1DEF1"},'code[class*="language-"] ::selection':{background:"#C1DEF1"},':not(pre) > code[class*="language-"]':{padding:".2em",paddingTop:"1px",paddingBottom:"1px",background:"#f8f8f8",border:"1px solid #dddddd"},comment:{color:"#008000",fontStyle:"italic"},prolog:{color:"#008000",fontStyle:"italic"},doctype:{color:"#008000",fontStyle:"italic"},cdata:{color:"#008000",fontStyle:"italic"},namespace:{Opacity:".7"},string:{color:"#A31515"},punctuation:{color:"#393A34"},operator:{color:"#393A34"},url:{color:"#36acaa"},symbol:{color:"#36acaa"},number:{color:"#36acaa"},boolean:{color:"#36acaa"},variable:{color:"#36acaa"},constant:{color:"#36acaa"},inserted:{color:"#36acaa"},atrule:{color:"#0000ff"},keyword:{color:"#0000ff"},"attr-value":{color:"#0000ff"},".language-autohotkey .token.selector":{color:"#0000ff"},".language-json .token.boolean":{color:"#0000ff"},".language-json .token.number":{color:"#0000ff"},'code[class*="language-css"]':{color:"#0000ff"},function:{color:"#393A34"},deleted:{color:"#9a050f"},".language-autohotkey .token.tag":{color:"#9a050f"},selector:{color:"#800000"},".language-autohotkey .token.keyword":{color:"#00009f"},important:{color:"#e90",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},"class-name":{color:"#2B91AF"},".language-json .token.property":{color:"#2B91AF"},tag:{color:"#800000"},"attr-name":{color:"#ff0000"},property:{color:"#ff0000"},regex:{color:"#ff0000"},entity:{color:"#ff0000"},"directive.tag.tag":{background:"#ffff00",color:"#393A34"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"#a5a5a5"},".line-numbers .line-numbers-rows > span:before":{color:"#2B91AF"},".line-highlight.line-highlight":{background:"linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"}};e.default=t}(zc)),zc}var Oc={},fg;function KR(){return fg||(fg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};e.default=t}(Oc)),Oc}var Lc={},hg;function QR(){return hg||(hg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordWrap:"normal",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"14px",color:"#76d9e6",textShadow:"none"},'pre[class*="language-"]':{MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",whiteSpace:"pre-wrap",wordWrap:"normal",fontFamily:'Menlo, Monaco, "Courier New", monospace',fontSize:"14px",color:"#76d9e6",textShadow:"none",background:"#2a2a2a",padding:"15px",borderRadius:"4px",border:"1px solid #e1e1e8",overflow:"auto",position:"relative"},'pre > code[class*="language-"]':{fontSize:"1em"},':not(pre) > code[class*="language-"]':{background:"#2a2a2a",padding:"0.15em 0.2em 0.05em",borderRadius:".3em",border:"0.13em solid #7a6652",boxShadow:"1px 1px 0.3em -0.1em #000 inset"},'pre[class*="language-"] code':{whiteSpace:"pre",display:"block"},namespace:{Opacity:".7"},comment:{color:"#6f705e"},prolog:{color:"#6f705e"},doctype:{color:"#6f705e"},cdata:{color:"#6f705e"},operator:{color:"#a77afe"},boolean:{color:"#a77afe"},number:{color:"#a77afe"},"attr-name":{color:"#e6d06c"},string:{color:"#e6d06c"},entity:{color:"#e6d06c",cursor:"help"},url:{color:"#e6d06c"},".language-css .token.string":{color:"#e6d06c"},".style .token.string":{color:"#e6d06c"},selector:{color:"#a6e22d"},inserted:{color:"#a6e22d"},atrule:{color:"#ef3b7d"},"attr-value":{color:"#ef3b7d"},keyword:{color:"#ef3b7d"},important:{color:"#ef3b7d",fontWeight:"bold"},deleted:{color:"#ef3b7d"},regex:{color:"#76d9e6"},statement:{color:"#76d9e6",fontWeight:"bold"},placeholder:{color:"#fff"},variable:{color:"#fff"},bold:{fontWeight:"bold"},punctuation:{color:"#bebec5"},italic:{fontStyle:"italic"},"code.language-markup":{color:"#f9f9f9"},"code.language-markup .token.tag":{color:"#ef3b7d"},"code.language-markup .token.attr-name":{color:"#a6e22d"},"code.language-markup .token.attr-value":{color:"#e6d06c"},"code.language-markup .token.style":{color:"#76d9e6"},"code.language-markup .token.script":{color:"#76d9e6"},"code.language-markup .token.script .token.keyword":{color:"#76d9e6"},".line-highlight.line-highlight":{padding:"0",background:"rgba(255, 255, 255, 0.08)"},".line-highlight.line-highlight:before":{padding:"0.2em 0.5em",backgroundColor:"rgba(255, 255, 255, 0.4)",color:"black",height:"1em",lineHeight:"1em",boxShadow:"0 1px 1px rgba(255, 255, 255, 0.7)"},".line-highlight.line-highlight[data-end]:after":{padding:"0.2em 0.5em",backgroundColor:"rgba(255, 255, 255, 0.4)",color:"black",height:"1em",lineHeight:"1em",boxShadow:"0 1px 1px rgba(255, 255, 255, 0.7)"}};e.default=t}(Lc)),Lc}var Ic={},mg;function YR(){return mg||(mg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={'code[class*="language-"]':{color:"#22da17",fontFamily:"monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",lineHeight:"25px",fontSize:"18px",margin:"5px 0"},'pre[class*="language-"]':{color:"white",fontFamily:"monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",lineHeight:"25px",fontSize:"18px",margin:"0.5em 0",background:"#0a143c",padding:"1em",overflow:"auto"},'pre[class*="language-"] *':{fontFamily:"monospace"},':not(pre) > code[class*="language-"]':{color:"white",background:"#0a143c",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"]::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},'code[class*="language-"] ::selection':{textShadow:"none",background:"rgba(29, 59, 83, 0.99)"},comment:{color:"rgb(99, 119, 119)",fontStyle:"italic"},prolog:{color:"rgb(99, 119, 119)",fontStyle:"italic"},cdata:{color:"rgb(99, 119, 119)",fontStyle:"italic"},punctuation:{color:"rgb(199, 146, 234)"},".namespace":{color:"rgb(178, 204, 214)"},deleted:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"},symbol:{color:"rgb(128, 203, 196)"},property:{color:"rgb(128, 203, 196)"},tag:{color:"rgb(127, 219, 202)"},operator:{color:"rgb(127, 219, 202)"},keyword:{color:"rgb(127, 219, 202)"},boolean:{color:"rgb(255, 88, 116)"},number:{color:"rgb(247, 140, 108)"},constant:{color:"rgb(34 183 199)"},function:{color:"rgb(34 183 199)"},builtin:{color:"rgb(34 183 199)"},char:{color:"rgb(34 183 199)"},selector:{color:"rgb(199, 146, 234)",fontStyle:"italic"},doctype:{color:"rgb(199, 146, 234)",fontStyle:"italic"},"attr-name":{color:"rgb(173, 219, 103)",fontStyle:"italic"},inserted:{color:"rgb(173, 219, 103)",fontStyle:"italic"},string:{color:"rgb(173, 219, 103)"},url:{color:"rgb(173, 219, 103)"},entity:{color:"rgb(173, 219, 103)"},".language-css .token.string":{color:"rgb(173, 219, 103)"},".style .token.string":{color:"rgb(173, 219, 103)"},"class-name":{color:"rgb(255, 203, 139)"},atrule:{color:"rgb(255, 203, 139)"},"attr-value":{color:"rgb(255, 203, 139)"},regex:{color:"rgb(214, 222, 235)"},important:{color:"rgb(214, 222, 235)",fontWeight:"bold"},variable:{color:"rgb(214, 222, 235)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};e.default=t}(Ic)),Ic}(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"a11yDark",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"atomDark",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"base16AteliersulphurpoolLight",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"cb",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"coldarkCold",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"coldarkDark",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(e,"coy",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"coyWithoutShadows",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(e,"darcula",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e,"dark",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"dracula",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"duotoneDark",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e,"duotoneEarth",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"duotoneForest",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"duotoneLight",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"duotoneSea",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e,"duotoneSpace",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(e,"funky",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"ghcolors",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e,"gruvboxDark",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(e,"gruvboxLight",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(e,"holiTheme",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(e,"hopscotch",{enumerable:!0,get:function(){return Y.default}}),Object.defineProperty(e,"lucario",{enumerable:!0,get:function(){return re.default}}),Object.defineProperty(e,"materialDark",{enumerable:!0,get:function(){return Q.default}}),Object.defineProperty(e,"materialLight",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(e,"materialOceanic",{enumerable:!0,get:function(){return ce.default}}),Object.defineProperty(e,"nightOwl",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(e,"nord",{enumerable:!0,get:function(){return V.default}}),Object.defineProperty(e,"okaidia",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"oneDark",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e,"oneLight",{enumerable:!0,get:function(){return G.default}}),Object.defineProperty(e,"pojoaque",{enumerable:!0,get:function(){return Z.default}}),Object.defineProperty(e,"prism",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"shadesOfPurple",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"solarizedDarkAtom",{enumerable:!0,get:function(){return J.default}}),Object.defineProperty(e,"solarizedlight",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"synthwave84",{enumerable:!0,get:function(){return ye.default}}),Object.defineProperty(e,"tomorrow",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"twilight",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"vs",{enumerable:!0,get:function(){return se.default}}),Object.defineProperty(e,"vscDarkPlus",{enumerable:!0,get:function(){return Pe.default}}),Object.defineProperty(e,"xonokai",{enumerable:!0,get:function(){return je.default}}),Object.defineProperty(e,"zTouch",{enumerable:!0,get:function(){return St.default}});var n=t(lR()),o=t(sR()),r=t(cR()),a=t(uR()),i=t(dR()),s=t(pR()),c=t(fR()),l=t(hR()),d=t(mR()),p=t(gR()),f=t(_R()),h=t(bR()),v=t(vR()),k=t(yR()),T=t(kR()),b=t(wR()),m=t(SR()),g=t(xR()),_=t(CR()),x=t(ER()),w=t(TR()),A=t(AR()),R=t(PR()),j=t(RR()),E=t(MR()),N=t(DR()),F=t(jR()),Y=t(zR()),re=t(OR()),Q=t(LR()),ne=t(IR()),ce=t(FR()),I=t(UR()),V=t(NR()),S=t(HR()),G=t(WR()),Z=t(BR()),C=t(VR()),J=t($R()),ye=t(qR()),se=t(GR()),Pe=t(KR()),je=t(QR()),St=t(YR())})(fy);function gg(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let o=0,r=n.indexOf(t);for(;r!==-1;)o++,r=n.indexOf(t,r+t.length);return o}function XR(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function JR(e,t,n){const r=Bl((n||{}).ignore||[]),a=ZR(t);let i=-1;for(;++i<a.length;)Ov(e,"text",s);function s(l,d){let p=-1,f;for(;++p<d.length;){const h=d[p],v=f?f.children:void 0;if(r(h,v?v.indexOf(h):void 0,f))return;f=h}if(f)return c(l,d)}function c(l,d){const p=d[d.length-1],f=a[i][0],h=a[i][1];let v=0;const T=p.children.indexOf(l);let b=!1,m=[];f.lastIndex=0;let g=f.exec(l.value);for(;g;){const _=g.index,x={index:g.index,input:g.input,stack:[...d,l]};let w=h(...g,x);if(typeof w=="string"&&(w=w.length>0?{type:"text",value:w}:void 0),w===!1?f.lastIndex=_+1:(v!==_&&m.push({type:"text",value:l.value.slice(v,_)}),Array.isArray(w)?m.push(...w):w&&m.push(w),v=_+g[0].length,b=!0),!f.global)break;g=f.exec(l.value)}return b?(v<l.value.length&&m.push({type:"text",value:l.value.slice(v)}),p.children.splice(T,1,...m)):m=[l],T+m.length}}function ZR(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let o=-1;for(;++o<n.length;){const r=n[o];t.push([e5(r[0]),t5(r[1])])}return t}function e5(e){return typeof e=="string"?new RegExp(XR(e),"g"):e}function t5(e){return typeof e=="function"?e:function(){return e}}const Fc="phrasing",Uc=["autolink","link","image","label"];function n5(){return{transforms:[c5],enter:{literalAutolink:r5,literalAutolinkEmail:Nc,literalAutolinkHttp:Nc,literalAutolinkWww:Nc},exit:{literalAutolink:s5,literalAutolinkEmail:l5,literalAutolinkHttp:a5,literalAutolinkWww:i5}}}function o5(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Fc,notInConstruct:Uc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Fc,notInConstruct:Uc},{character:":",before:"[ps]",after:"\\/",inConstruct:Fc,notInConstruct:Uc}]}}function r5(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Nc(e){this.config.enter.autolinkProtocol.call(this,e)}function a5(e){this.config.exit.autolinkProtocol.call(this,e)}function i5(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function l5(e){this.config.exit.autolinkEmail.call(this,e)}function s5(e){this.exit(e)}function c5(e){JR(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,u5],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,d5]],{ignore:["link","linkReference"]})}function u5(e,t,n,o,r){let a="";if(!my(r)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!p5(n)))return!1;const i=f5(n+o);if(!i[0])return!1;const s={type:"link",title:null,url:a+t+i[0],children:[{type:"text",value:t+i[0]}]};return i[1]?[s,{type:"text",value:i[1]}]:s}function d5(e,t,n,o){return!my(o,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function p5(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function f5(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],o=n.indexOf(")");const r=gg(e,"(");let a=gg(e,")");for(;o!==-1&&r>a;)e+=n.slice(0,o+1),n=n.slice(o+1),o=n.indexOf(")"),a++;return[e,n]}function my(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||zo(n)||Nl(n))&&(!t||n!==47)}gy.peek=x5;function h5(){return{enter:{gfmFootnoteDefinition:g5,gfmFootnoteDefinitionLabelString:_5,gfmFootnoteCall:y5,gfmFootnoteCallString:k5},exit:{gfmFootnoteDefinition:v5,gfmFootnoteDefinitionLabelString:b5,gfmFootnoteCall:S5,gfmFootnoteCallString:w5}}}function m5(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:C5,footnoteReference:gy}}}function g5(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function _5(){this.buffer()}function b5(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=tn(this.sliceSerialize(e)).toLowerCase()}function v5(e){this.exit(e)}function y5(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function k5(){this.buffer()}function w5(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=tn(this.sliceSerialize(e)).toLowerCase()}function S5(e){this.exit(e)}function gy(e,t,n,o){const r=n.createTracker(o);let a=r.move("[^");const i=n.enter("footnoteReference"),s=n.enter("reference");return a+=r.move(n.safe(n.associationId(e),{...r.current(),before:a,after:"]"})),s(),i(),a+=r.move("]"),a}function x5(){return"["}function C5(e,t,n,o){const r=n.createTracker(o);let a=r.move("[^");const i=n.enter("footnoteDefinition"),s=n.enter("label");return a+=r.move(n.safe(n.associationId(e),{...r.current(),before:a,after:"]"})),s(),a+=r.move("]:"+(e.children&&e.children.length>0?" ":"")),r.shift(4),a+=r.move(n.indentLines(n.containerFlow(e,r.current()),E5)),i(),a}function E5(e,t,n){return t===0?e:(n?"":"    ")+e}const T5=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];_y.peek=D5;function A5(){return{canContainEols:["delete"],enter:{strikethrough:R5},exit:{strikethrough:M5}}}function P5(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:T5}],handlers:{delete:_y}}}function R5(e){this.enter({type:"delete",children:[]},e)}function M5(e){this.exit(e)}function _y(e,t,n,o){const r=n.createTracker(o),a=n.enter("strikethrough");let i=r.move("~~");return i+=n.containerPhrasing(e,{...r.current(),before:i,after:"~"}),i+=r.move("~~"),a(),i}function D5(){return"~"}function j5(e,t={}){const n=(t.align||[]).concat(),o=t.stringLength||O5,r=[],a=[],i=[],s=[];let c=0,l=-1;for(;++l<e.length;){const v=[],k=[];let T=-1;for(e[l].length>c&&(c=e[l].length);++T<e[l].length;){const b=z5(e[l][T]);if(t.alignDelimiters!==!1){const m=o(b);k[T]=m,(s[T]===void 0||m>s[T])&&(s[T]=m)}v.push(b)}a[l]=v,i[l]=k}let d=-1;if(typeof n=="object"&&"length"in n)for(;++d<c;)r[d]=_g(n[d]);else{const v=_g(n);for(;++d<c;)r[d]=v}d=-1;const p=[],f=[];for(;++d<c;){const v=r[d];let k="",T="";v===99?(k=":",T=":"):v===108?k=":":v===114&&(T=":");let b=t.alignDelimiters===!1?1:Math.max(1,s[d]-k.length-T.length);const m=k+"-".repeat(b)+T;t.alignDelimiters!==!1&&(b=k.length+b+T.length,b>s[d]&&(s[d]=b),f[d]=b),p[d]=m}a.splice(1,0,p),i.splice(1,0,f),l=-1;const h=[];for(;++l<a.length;){const v=a[l],k=i[l];d=-1;const T=[];for(;++d<c;){const b=v[d]||"";let m="",g="";if(t.alignDelimiters!==!1){const _=s[d]-(k[d]||0),x=r[d];x===114?m=" ".repeat(_):x===99?_%2?(m=" ".repeat(_/2+.5),g=" ".repeat(_/2-.5)):(m=" ".repeat(_/2),g=m):g=" ".repeat(_)}t.delimiterStart!==!1&&!d&&T.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&b==="")&&(t.delimiterStart!==!1||d)&&T.push(" "),t.alignDelimiters!==!1&&T.push(m),T.push(b),t.alignDelimiters!==!1&&T.push(g),t.padding!==!1&&T.push(" "),(t.delimiterEnd!==!1||d!==c-1)&&T.push("|")}h.push(t.delimiterEnd===!1?T.join("").replace(/ +$/,""):T.join(""))}return h.join(`
`)}function z5(e){return e==null?"":String(e)}function O5(e){return e.length}function _g(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function L5(e,t,n,o){const r=n.enter("blockquote"),a=n.createTracker(o);a.move("> "),a.shift(2);const i=n.indentLines(n.containerFlow(e,a.current()),I5);return r(),i}function I5(e,t,n){return">"+(n?"":" ")+e}function F5(e,t){return bg(e,t.inConstruct,!0)&&!bg(e,t.notInConstruct,!1)}function bg(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let o=-1;for(;++o<t.length;)if(e.includes(t[o]))return!0;return!1}function vg(e,t,n,o){let r=-1;for(;++r<n.unsafe.length;)if(n.unsafe[r].character===`
`&&F5(n.stack,n.unsafe[r]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function U5(e,t){const n=String(e);let o=n.indexOf(t),r=o,a=0,i=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===r?++a>i&&(i=a):a=1,r=o+t.length,o=n.indexOf(t,r);return i}function N5(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function H5(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function W5(e,t,n,o){const r=H5(n),a=e.value||"",i=r==="`"?"GraveAccent":"Tilde";if(N5(e,n)){const p=n.enter("codeIndented"),f=n.indentLines(a,B5);return p(),f}const s=n.createTracker(o),c=r.repeat(Math.max(U5(a,r)+1,3)),l=n.enter("codeFenced");let d=s.move(c);if(e.lang){const p=n.enter(`codeFencedLang${i}`);d+=s.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...s.current()})),p()}if(e.lang&&e.meta){const p=n.enter(`codeFencedMeta${i}`);d+=s.move(" "),d+=s.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...s.current()})),p()}return d+=s.move(`
`),a&&(d+=s.move(a+`
`)),d+=s.move(c),l(),d}function B5(e,t,n){return(n?"":"    ")+e}function Dp(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function V5(e,t,n,o){const r=Dp(n),a=r==='"'?"Quote":"Apostrophe",i=n.enter("definition");let s=n.enter("label");const c=n.createTracker(o);let l=c.move("[");return l+=c.move(n.safe(n.associationId(e),{before:l,after:"]",...c.current()})),l+=c.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),l+=c.move("<"),l+=c.move(n.safe(e.url,{before:l,after:">",...c.current()})),l+=c.move(">")):(s=n.enter("destinationRaw"),l+=c.move(n.safe(e.url,{before:l,after:e.title?" ":`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(" "+r),l+=c.move(n.safe(e.title,{before:l,after:r,...c.current()})),l+=c.move(r),s()),i(),l}function $5(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}by.peek=q5;function by(e,t,n,o){const r=$5(n),a=n.enter("emphasis"),i=n.createTracker(o);let s=i.move(r);return s+=i.move(n.containerPhrasing(e,{before:s,after:r,...i.current()})),s+=i.move(r),a(),s}function q5(e,t,n){return n.options.emphasis||"*"}function G5(e,t){let n=!1;return fp(e,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return n=!0,qu}),!!((!e.depth||e.depth<3)&&ip(e)&&(t.options.setext||n))}function K5(e,t,n,o){const r=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(o);if(G5(e,n)){const d=n.enter("headingSetext"),p=n.enter("phrasing"),f=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return p(),d(),f+`
`+(r===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const i="#".repeat(r),s=n.enter("headingAtx"),c=n.enter("phrasing");a.move(i+" ");let l=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l="&#x"+l.charCodeAt(0).toString(16).toUpperCase()+";"+l.slice(1)),l=l?i+" "+l:i,n.options.closeAtx&&(l+=" "+i),c(),s(),l}vy.peek=Q5;function vy(e){return e.value||""}function Q5(){return"<"}yy.peek=Y5;function yy(e,t,n,o){const r=Dp(n),a=r==='"'?"Quote":"Apostrophe",i=n.enter("image");let s=n.enter("label");const c=n.createTracker(o);let l=c.move("![");return l+=c.move(n.safe(e.alt,{before:l,after:"]",...c.current()})),l+=c.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),l+=c.move("<"),l+=c.move(n.safe(e.url,{before:l,after:">",...c.current()})),l+=c.move(">")):(s=n.enter("destinationRaw"),l+=c.move(n.safe(e.url,{before:l,after:e.title?" ":")",...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(" "+r),l+=c.move(n.safe(e.title,{before:l,after:r,...c.current()})),l+=c.move(r),s()),l+=c.move(")"),i(),l}function Y5(){return"!"}ky.peek=X5;function ky(e,t,n,o){const r=e.referenceType,a=n.enter("imageReference");let i=n.enter("label");const s=n.createTracker(o);let c=s.move("![");const l=n.safe(e.alt,{before:c,after:"]",...s.current()});c+=s.move(l+"]["),i();const d=n.stack;n.stack=[],i=n.enter("reference");const p=n.safe(n.associationId(e),{before:c,after:"]",...s.current()});return i(),n.stack=d,a(),r==="full"||!l||l!==p?c+=s.move(p+"]"):r==="shortcut"?c=c.slice(0,-1):c+=s.move("]"),c}function X5(){return"!"}wy.peek=J5;function wy(e,t,n){let o=e.value||"",r="`",a=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(o);)r+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++a<n.unsafe.length;){const i=n.unsafe[a],s=n.compilePattern(i);let c;if(i.atBreak)for(;c=s.exec(o);){let l=c.index;o.charCodeAt(l)===10&&o.charCodeAt(l-1)===13&&l--,o=o.slice(0,l)+" "+o.slice(c.index+1)}}return r+o+r}function J5(){return"`"}function Sy(e,t){const n=ip(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}xy.peek=Z5;function xy(e,t,n,o){const r=Dp(n),a=r==='"'?"Quote":"Apostrophe",i=n.createTracker(o);let s,c;if(Sy(e,n)){const d=n.stack;n.stack=[],s=n.enter("autolink");let p=i.move("<");return p+=i.move(n.containerPhrasing(e,{before:p,after:">",...i.current()})),p+=i.move(">"),s(),n.stack=d,p}s=n.enter("link"),c=n.enter("label");let l=i.move("[");return l+=i.move(n.containerPhrasing(e,{before:l,after:"](",...i.current()})),l+=i.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter("destinationLiteral"),l+=i.move("<"),l+=i.move(n.safe(e.url,{before:l,after:">",...i.current()})),l+=i.move(">")):(c=n.enter("destinationRaw"),l+=i.move(n.safe(e.url,{before:l,after:e.title?" ":")",...i.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=i.move(" "+r),l+=i.move(n.safe(e.title,{before:l,after:r,...i.current()})),l+=i.move(r),c()),l+=i.move(")"),s(),l}function Z5(e,t,n){return Sy(e,n)?"<":"["}Cy.peek=e4;function Cy(e,t,n,o){const r=e.referenceType,a=n.enter("linkReference");let i=n.enter("label");const s=n.createTracker(o);let c=s.move("[");const l=n.containerPhrasing(e,{before:c,after:"]",...s.current()});c+=s.move(l+"]["),i();const d=n.stack;n.stack=[],i=n.enter("reference");const p=n.safe(n.associationId(e),{before:c,after:"]",...s.current()});return i(),n.stack=d,a(),r==="full"||!l||l!==p?c+=s.move(p+"]"):r==="shortcut"?c=c.slice(0,-1):c+=s.move("]"),c}function e4(){return"["}function jp(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function t4(e){const t=jp(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function n4(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Ey(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function o4(e,t,n,o){const r=n.enter("list"),a=n.bulletCurrent;let i=e.ordered?n4(n):jp(n);const s=e.ordered?i==="."?")":".":t4(n);let c=t&&n.bulletLastUsed?i===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((i==="*"||i==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),Ey(n)===i&&d){let p=-1;for(;++p<e.children.length;){const f=e.children[p];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){c=!0;break}}}}c&&(i=s),n.bulletCurrent=i;const l=n.containerFlow(e,o);return n.bulletLastUsed=i,n.bulletCurrent=a,r(),l}function r4(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function a4(e,t,n,o){const r=r4(n);let a=n.bulletCurrent||jp(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let i=a.length+1;(r==="tab"||r==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(i=Math.ceil(i/4)*4);const s=n.createTracker(o);s.move(a+" ".repeat(i-a.length)),s.shift(i);const c=n.enter("listItem"),l=n.indentLines(n.containerFlow(e,s.current()),d);return c(),l;function d(p,f,h){return f?(h?"":" ".repeat(i))+p:(h?a:a+" ".repeat(i-a.length))+p}}function i4(e,t,n,o){const r=n.enter("paragraph"),a=n.enter("phrasing"),i=n.containerPhrasing(e,o);return a(),r(),i}const l4=Bl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","link","linkReference","strong","text"]);function s4(e,t,n,o){return(e.children.some(function(i){return l4(i)})?n.containerPhrasing:n.containerFlow).call(n,e,o)}function c4(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Ty.peek=u4;function Ty(e,t,n,o){const r=c4(n),a=n.enter("strong"),i=n.createTracker(o);let s=i.move(r+r);return s+=i.move(n.containerPhrasing(e,{before:s,after:r,...i.current()})),s+=i.move(r+r),a(),s}function u4(e,t,n){return n.options.strong||"*"}function d4(e,t,n,o){return n.safe(e.value,o)}function p4(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function f4(e,t,n){const o=(Ey(n)+(n.options.ruleSpaces?" ":"")).repeat(p4(n));return n.options.ruleSpaces?o.slice(0,-1):o}const Ay={blockquote:L5,break:vg,code:W5,definition:V5,emphasis:by,hardBreak:vg,heading:K5,html:vy,image:yy,imageReference:ky,inlineCode:wy,link:xy,linkReference:Cy,list:o4,listItem:a4,paragraph:i4,root:s4,strong:Ty,text:d4,thematicBreak:f4};function h4(){return{enter:{table:m4,tableData:yg,tableHeader:yg,tableRow:_4},exit:{codeText:b4,table:g4,tableData:Hc,tableHeader:Hc,tableRow:Hc}}}function m4(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function g4(e){this.exit(e),this.data.inTable=void 0}function _4(e){this.enter({type:"tableRow",children:[]},e)}function Hc(e){this.exit(e)}function yg(e){this.enter({type:"tableCell",children:[]},e)}function b4(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,v4));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function v4(e,t){return t==="|"?t:e}function y4(e){const t=e||{},n=t.tableCellPadding,o=t.tablePipeAlign,r=t.stringLength,a=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:i,tableCell:c,tableRow:s}};function i(h,v,k,T){return l(d(h,k,T),h.align)}function s(h,v,k,T){const b=p(h,k,T),m=l([b]);return m.slice(0,m.indexOf(`
`))}function c(h,v,k,T){const b=k.enter("tableCell"),m=k.enter("phrasing"),g=k.containerPhrasing(h,{...T,before:a,after:a});return m(),b(),g}function l(h,v){return j5(h,{align:v,alignDelimiters:o,padding:n,stringLength:r})}function d(h,v,k){const T=h.children;let b=-1;const m=[],g=v.enter("table");for(;++b<T.length;)m[b]=p(T[b],v,k);return g(),m}function p(h,v,k){const T=h.children;let b=-1;const m=[],g=v.enter("tableRow");for(;++b<T.length;)m[b]=c(T[b],h,v,k);return g(),m}function f(h,v,k){let T=Ay.inlineCode(h,v,k);return k.stack.includes("tableCell")&&(T=T.replace(/\|/g,"\\$&")),T}}function k4(){return{exit:{taskListCheckValueChecked:kg,taskListCheckValueUnchecked:kg,paragraph:S4}}}function w4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:x4}}}function kg(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function S4(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const o=n.children[0];if(o&&o.type==="text"){const r=t.children;let a=-1,i;for(;++a<r.length;){const s=r[a];if(s.type==="paragraph"){i=s;break}}i===n&&(o.value=o.value.slice(1),o.value.length===0?n.children.shift():n.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,n.position.start=Object.assign({},o.position.start)))}}this.exit(e)}function x4(e,t,n,o){const r=e.children[0],a=typeof e.checked=="boolean"&&r&&r.type==="paragraph",i="["+(e.checked?"x":" ")+"] ",s=n.createTracker(o);a&&s.move(i);let c=Ay.listItem(e,t,n,{...o,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(d){return d+i}}function C4(){return[n5(),h5(),A5(),h4(),k4()]}function E4(e){return{extensions:[o5(),m5(),P5(),y4(e),w4()]}}const T4={tokenize:j4,partial:!0},Py={tokenize:z4,partial:!0},Ry={tokenize:O4,partial:!0},My={tokenize:L4,partial:!0},A4={tokenize:I4,partial:!0},Dy={tokenize:M4,previous:zy},jy={tokenize:D4,previous:Oy},jn={tokenize:R4,previous:Ly},mn={};function P4(){return{text:mn}}let go=48;for(;go<123;)mn[go]=jn,go++,go===58?go=65:go===91&&(go=97);mn[43]=jn;mn[45]=jn;mn[46]=jn;mn[95]=jn;mn[72]=[jn,jy];mn[104]=[jn,jy];mn[87]=[jn,Dy];mn[119]=[jn,Dy];function R4(e,t,n){const o=this;let r,a;return i;function i(p){return!Zu(p)||!Ly.call(o,o.previous)||zp(o.events)?n(p):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(p))}function s(p){return Zu(p)?(e.consume(p),s):p===64?(e.consume(p),c):n(p)}function c(p){return p===46?e.check(A4,d,l)(p):p===45||p===95||it(p)?(a=!0,e.consume(p),c):d(p)}function l(p){return e.consume(p),r=!0,c}function d(p){return a&&r&&ut(o.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(p)):n(p)}}function M4(e,t,n){const o=this;return r;function r(i){return i!==87&&i!==119||!zy.call(o,o.previous)||zp(o.events)?n(i):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(T4,e.attempt(Py,e.attempt(Ry,a),n),n)(i))}function a(i){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(i)}}function D4(e,t,n){const o=this;let r="",a=!1;return i;function i(p){return(p===72||p===104)&&Oy.call(o,o.previous)&&!zp(o.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),r+=String.fromCodePoint(p),e.consume(p),s):n(p)}function s(p){if(ut(p)&&r.length<5)return r+=String.fromCodePoint(p),e.consume(p),s;if(p===58){const f=r.toLowerCase();if(f==="http"||f==="https")return e.consume(p),c}return n(p)}function c(p){return p===47?(e.consume(p),a?l:(a=!0,c)):n(p)}function l(p){return p===null||gl(p)||Ee(p)||zo(p)||Nl(p)?n(p):e.attempt(Py,e.attempt(Ry,d),n)(p)}function d(p){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(p)}}function j4(e,t,n){let o=0;return r;function r(i){return(i===87||i===119)&&o<3?(o++,e.consume(i),r):i===46&&o===3?(e.consume(i),a):n(i)}function a(i){return i===null?n(i):t(i)}}function z4(e,t,n){let o,r,a;return i;function i(l){return l===46||l===95?e.check(My,c,s)(l):l===null||Ee(l)||zo(l)||l!==45&&Nl(l)?c(l):(a=!0,e.consume(l),i)}function s(l){return l===95?o=!0:(r=o,o=void 0),e.consume(l),i}function c(l){return r||o||!a?n(l):t(l)}}function O4(e,t){let n=0,o=0;return r;function r(i){return i===40?(n++,e.consume(i),r):i===41&&o<n?a(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?e.check(My,t,a)(i):i===null||Ee(i)||zo(i)?t(i):(e.consume(i),r)}function a(i){return i===41&&o++,e.consume(i),r}}function L4(e,t,n){return o;function o(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),o):s===38?(e.consume(s),a):s===93?(e.consume(s),r):s===60||s===null||Ee(s)||zo(s)?t(s):n(s)}function r(s){return s===null||s===40||s===91||Ee(s)||zo(s)?t(s):o(s)}function a(s){return ut(s)?i(s):n(s)}function i(s){return s===59?(e.consume(s),o):ut(s)?(e.consume(s),i):n(s)}}function I4(e,t,n){return o;function o(a){return e.consume(a),r}function r(a){return it(a)?n(a):t(a)}}function zy(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Ee(e)}function Oy(e){return!ut(e)}function Ly(e){return!(e===47||Zu(e))}function Zu(e){return e===43||e===45||e===46||e===95||it(e)}function zp(e){let t=e.length,n=!1;for(;t--;){const o=e[t][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){n=!0;break}if(o._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const F4={tokenize:q4,partial:!0};function U4(){return{document:{91:{tokenize:B4,continuation:{tokenize:V4},exit:$4}},text:{91:{tokenize:W4},93:{add:"after",tokenize:N4,resolveTo:H4}}}}function N4(e,t,n){const o=this;let r=o.events.length;const a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let i;for(;r--;){const c=o.events[r][1];if(c.type==="labelImage"){i=c;break}if(c.type==="gfmFootnoteCall"||c.type==="labelLink"||c.type==="label"||c.type==="image"||c.type==="link")break}return s;function s(c){if(!i||!i._balanced)return n(c);const l=tn(o.sliceSerialize({start:i.end,end:o.now()}));return l.codePointAt(0)!==94||!a.includes(l.slice(1))?n(c):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),t(c))}}function H4(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},e[e.length-1][1].start)},i={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],["enter",o,t],e[n+3],e[n+4],["enter",r,t],["exit",r,t],["enter",a,t],["enter",i,t],["exit",i,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",o,t]];return e.splice(n,e.length-n+1,...s),e}function W4(e,t,n){const o=this,r=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let a=0,i;return s;function s(p){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(p),e.exit("gfmFootnoteCallLabelMarker"),c}function c(p){return p!==94?n(p):(e.enter("gfmFootnoteCallMarker"),e.consume(p),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",l)}function l(p){if(a>999||p===93&&!i||p===null||p===91||Ee(p))return n(p);if(p===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return r.includes(tn(o.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(p),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(p)}return Ee(p)||(i=!0),a++,e.consume(p),p===92?d:l}function d(p){return p===91||p===92||p===93?(e.consume(p),a++,l):l(p)}}function B4(e,t,n){const o=this,r=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let a,i=0,s;return c;function c(v){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),l}function l(v){return v===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(v)}function d(v){if(i>999||v===93&&!s||v===null||v===91||Ee(v))return n(v);if(v===93){e.exit("chunkString");const k=e.exit("gfmFootnoteDefinitionLabelString");return a=tn(o.sliceSerialize(k)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return Ee(v)||(s=!0),i++,e.consume(v),v===92?p:d}function p(v){return v===91||v===92||v===93?(e.consume(v),i++,d):d(v)}function f(v){return v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),r.includes(a)||r.push(a),_e(e,h,"gfmFootnoteDefinitionWhitespace")):n(v)}function h(v){return t(v)}}function V4(e,t,n){return e.check($a,t,e.attempt(F4,t,n))}function $4(e){e.exit("gfmFootnoteDefinition")}function q4(e,t,n){const o=this;return _e(e,r,"gfmFootnoteDefinitionIndent",4+1);function r(a){const i=o.events[o.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?t(a):n(a)}}function G4(e){let n=(e||{}).singleTilde;const o={tokenize:a,resolveAll:r};return n==null&&(n=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function r(i,s){let c=-1;for(;++c<i.length;)if(i[c][0]==="enter"&&i[c][1].type==="strikethroughSequenceTemporary"&&i[c][1]._close){let l=c;for(;l--;)if(i[l][0]==="exit"&&i[l][1].type==="strikethroughSequenceTemporary"&&i[l][1]._open&&i[c][1].end.offset-i[c][1].start.offset===i[l][1].end.offset-i[l][1].start.offset){i[c][1].type="strikethroughSequence",i[l][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},i[l][1].start),end:Object.assign({},i[c][1].end)},p={type:"strikethroughText",start:Object.assign({},i[l][1].end),end:Object.assign({},i[c][1].start)},f=[["enter",d,s],["enter",i[l][1],s],["exit",i[l][1],s],["enter",p,s]],h=s.parser.constructs.insideSpan.null;h&&At(f,f.length,0,Hl(h,i.slice(l+1,c),s)),At(f,f.length,0,[["exit",p,s],["enter",i[c][1],s],["exit",i[c][1],s],["exit",d,s]]),At(i,l-1,c-l+3,f),c=l+f.length-2;break}}for(c=-1;++c<i.length;)i[c][1].type==="strikethroughSequenceTemporary"&&(i[c][1].type="data");return i}function a(i,s,c){const l=this.previous,d=this.events;let p=0;return f;function f(v){return l===126&&d[d.length-1][1].type!=="characterEscape"?c(v):(i.enter("strikethroughSequenceTemporary"),h(v))}function h(v){const k=_l(l);if(v===126)return p>1?c(v):(i.consume(v),p++,h);if(p<2&&!n)return c(v);const T=i.exit("strikethroughSequenceTemporary"),b=_l(v);return T._open=!b||b===2&&!!k,T._close=!k||k===2&&!!b,s(v)}}}class K4{constructor(){this.map=[]}add(t,n,o){Q4(this,t,n,o)}consume(t){if(this.map.sort(function(a,i){return a[0]-i[0]}),this.map.length===0)return;let n=this.map.length;const o=[];for(;n>0;)n-=1,o.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];o.push([...t]),t.length=0;let r=o.pop();for(;r;)t.push(...r),r=o.pop();this.map.length=0}}function Q4(e,t,n,o){let r=0;if(!(n===0&&o.length===0)){for(;r<e.map.length;){if(e.map[r][0]===t){e.map[r][1]+=n,e.map[r][2].push(...o);return}r+=1}e.map.push([t,n,o])}}function Y4(e,t){let n=!1;const o=[];for(;t<e.length;){const r=e[t];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&o.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const a=o.length-1;o[a]=o[a]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return o}function X4(){return{flow:{null:{tokenize:J4,resolveAll:Z4}}}}function J4(e,t,n){const o=this;let r=0,a=0,i;return s;function s(E){let N=o.events.length-1;for(;N>-1;){const re=o.events[N][1].type;if(re==="lineEnding"||re==="linePrefix")N--;else break}const F=N>-1?o.events[N][1].type:null,Y=F==="tableHead"||F==="tableRow"?w:c;return Y===w&&o.parser.lazy[o.now().line]?n(E):Y(E)}function c(E){return e.enter("tableHead"),e.enter("tableRow"),l(E)}function l(E){return E===124||(i=!0,a+=1),d(E)}function d(E){return E===null?n(E):te(E)?a>1?(a=0,o.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),h):n(E):me(E)?_e(e,d,"whitespace")(E):(a+=1,i&&(i=!1,r+=1),E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),i=!0,d):(e.enter("data"),p(E)))}function p(E){return E===null||E===124||Ee(E)?(e.exit("data"),d(E)):(e.consume(E),E===92?f:p)}function f(E){return E===92||E===124?(e.consume(E),p):p(E)}function h(E){return o.interrupt=!1,o.parser.lazy[o.now().line]?n(E):(e.enter("tableDelimiterRow"),i=!1,me(E)?_e(e,v,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):v(E))}function v(E){return E===45||E===58?T(E):E===124?(i=!0,e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),k):x(E)}function k(E){return me(E)?_e(e,T,"whitespace")(E):T(E)}function T(E){return E===58?(a+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),b):E===45?(a+=1,b(E)):E===null||te(E)?_(E):x(E)}function b(E){return E===45?(e.enter("tableDelimiterFiller"),m(E)):x(E)}function m(E){return E===45?(e.consume(E),m):E===58?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),g):(e.exit("tableDelimiterFiller"),g(E))}function g(E){return me(E)?_e(e,_,"whitespace")(E):_(E)}function _(E){return E===124?v(E):E===null||te(E)?!i||r!==a?x(E):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(E)):x(E)}function x(E){return n(E)}function w(E){return e.enter("tableRow"),A(E)}function A(E){return E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),A):E===null||te(E)?(e.exit("tableRow"),t(E)):me(E)?_e(e,A,"whitespace")(E):(e.enter("data"),R(E))}function R(E){return E===null||E===124||Ee(E)?(e.exit("data"),A(E)):(e.consume(E),E===92?j:R)}function j(E){return E===92||E===124?(e.consume(E),R):R(E)}}function Z4(e,t){let n=-1,o=!0,r=0,a=[0,0,0,0],i=[0,0,0,0],s=!1,c=0,l,d,p;const f=new K4;for(;++n<e.length;){const h=e[n],v=h[1];h[0]==="enter"?v.type==="tableHead"?(s=!1,c!==0&&(wg(f,t,c,l,d),d=void 0,c=0),l={type:"table",start:Object.assign({},v.start),end:Object.assign({},v.end)},f.add(n,0,[["enter",l,t]])):v.type==="tableRow"||v.type==="tableDelimiterRow"?(o=!0,p=void 0,a=[0,0,0,0],i=[0,n+1,0,0],s&&(s=!1,d={type:"tableBody",start:Object.assign({},v.start),end:Object.assign({},v.end)},f.add(n,0,[["enter",d,t]])),r=v.type==="tableDelimiterRow"?2:d?3:1):r&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")?(o=!1,i[2]===0&&(a[1]!==0&&(i[0]=i[1],p=Ci(f,t,a,r,void 0,p),a=[0,0,0,0]),i[2]=n)):v.type==="tableCellDivider"&&(o?o=!1:(a[1]!==0&&(i[0]=i[1],p=Ci(f,t,a,r,void 0,p)),a=i,i=[a[1],n,0,0])):v.type==="tableHead"?(s=!0,c=n):v.type==="tableRow"||v.type==="tableDelimiterRow"?(c=n,a[1]!==0?(i[0]=i[1],p=Ci(f,t,a,r,n,p)):i[1]!==0&&(p=Ci(f,t,i,r,n,p)),r=0):r&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")&&(i[3]=n)}for(c!==0&&wg(f,t,c,l,d),f.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Y4(t.events,n))}return e}function Ci(e,t,n,o,r,a){const i=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(a.end=Object.assign({},Go(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));const c=Go(t.events,n[1]);if(a={type:i,start:Object.assign({},c),end:Object.assign({},c)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){const l=Go(t.events,n[2]),d=Go(t.events,n[3]),p={type:s,start:Object.assign({},l),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",p,t]]),o!==2){const f=t.events[n[2]],h=t.events[n[3]];if(f[1].end=Object.assign({},h[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){const v=n[2]+1,k=n[3]-n[2]-1;e.add(v,k,[])}}e.add(n[3]+1,0,[["exit",p,t]])}return r!==void 0&&(a.end=Object.assign({},Go(t.events,r)),e.add(r,0,[["exit",a,t]]),a=void 0),a}function wg(e,t,n,o,r){const a=[],i=Go(t.events,n);r&&(r.end=Object.assign({},i),a.push(["exit",r,t])),o.end=Object.assign({},i),a.push(["exit",o,t]),e.add(n+1,0,a)}function Go(e,t){const n=e[t],o=n[0]==="enter"?"start":"end";return n[1][o]}const eM={tokenize:nM};function tM(){return{text:{91:eM}}}function nM(e,t,n){const o=this;return r;function r(c){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?n(c):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),a)}function a(c){return Ee(c)?(e.enter("taskListCheckValueUnchecked"),e.consume(c),e.exit("taskListCheckValueUnchecked"),i):c===88||c===120?(e.enter("taskListCheckValueChecked"),e.consume(c),e.exit("taskListCheckValueChecked"),i):n(c)}function i(c){return c===93?(e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(c)}function s(c){return te(c)?t(c):me(c)?e.check({tokenize:oM},t,n)(c):n(c)}}function oM(e,t,n){return _e(e,o,"whitespace");function o(r){return r===null?n(r):t(r)}}function rM(e){return gv([P4(),U4(),G4(e),X4(),tM()])}const aM={};function iM(e){const t=this,n=e||aM,o=t.data(),r=o.micromarkExtensions||(o.micromarkExtensions=[]),a=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),i=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);r.push(rM(n)),a.push(C4()),i.push(E4(n))}var Iy={};(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(iR()),o=n.default;e.default=o})(Iy);const lM=Bt(Iy);var Fy={};(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(py()),o=n.default;e.default=o})(Fy);const sM=Bt(Fy);var Uy={};(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(aR()),o=n.default;e.default=o})(Uy);const cM=Bt(Uy);var Ny={};(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(eR()),o=n.default;e.default=o})(Ny);const uM=Bt(Ny);var Hy={};(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(rR()),o=n.default;e.default=o})(Hy);const dM=Bt(Hy);var Wy={};(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(nR()),o=n.default;e.default=o})(Wy);const pM=Bt(Wy);var By={};(function(e){var t=so;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(tR()),o=n.default;e.default=o})(By);const fM=Bt(By);lo.registerLanguage("tsx",lM);lo.registerLanguage("typescript",sM);lo.registerLanguage("scss",cM);lo.registerLanguage("bash",uM);lo.registerLanguage("markdown",dM);lo.registerLanguage("json",pM);lo.registerLanguage("lua",fM);function hM({source:e}){const t=e.split(`
`).map(n=>n.indexOf(" [See demo")!==-1?n.substring(0,n.indexOf(" [See")):n).join(`
`);return u.jsx("div",{className:"docs",children:u.jsx("div",{className:"docs-md",children:u.jsx(dE,{remarkPlugins:[iM],components:{code({className:n,...o}){const r=/language-(\w+)/.exec(n||"");return r?u.jsx(lo,{style:fy.oneDark,language:r[1],PreTag:"div",showLineNumbers:!1,useInlineStyles:!0,children:String(o.children).replace(/\n$/,"")}):u.jsx("code",{className:n,...o})},pre:n=>{var r;const o=(r=n.children[0])==null?void 0:r.props.className.replace(/language-/g,"");return u.jsxs("div",{className:"relative overflow-x-hidden",children:[u.jsx("span",{style:{bottom:0,right:0},children:o}),u.jsx("pre",{...n})]})}},children:t})})})}function O({component:e,markdown:t}){return u.jsxs(u.Fragment,{children:[e&&u.jsx(X1,{children:e}),t&&u.jsx(hM,{source:t})]})}const D=()=>u.jsx("div",{style:{position:"absolute",inset:0,display:"flex",width:"100%",height:"99vh",justifyContent:"center",alignItems:"center"},children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"80",height:"71.24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:[u.jsx("animateTransform",{attributeName:"transform",type:"rotate",dur:".8s",values:"0 0 0;360 0 0;",repeatCount:"indefinite"}),u.jsx("path",{fill:"#f84956",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})]})}),mM=`# ErrorBoundary
Wrapper component that lets you display some fallback UI when your application throws an error during rendering. [See demo](https://ndriadev.github.io/react-tools/#/components/ErrorBoundary)

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

> The component uses _ErrorBoundary_ Component to wrap _Component_. _Component_ throw an error so _ErrorBoundary_ catch it and show the _fallback_ element passing to it _error_ and _retry_ function. [See demo](https://ndriadev.github.io/react-tools/#/components/ErrorBoundary)


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
>`,gM=`# For
Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://ndriadev.github.io/react-tools/#/components/For)

## Usage

\`\`\`tsx
export default function ForComponent() {
	const arr = useRef([
		{ id: "1", firstName: "Jhon", lastName: "Doe" },
		{ id: "2", firstName: "Jona", lastName: "Doe" },
		{ id: "3", firstName: "Jhonney", lastName: "Doe" }
	]);
	const [, update] = useReducer(t => !t, false);

	const body = useCallback<(item: { id: string, firstName: string, lastName: string }, index: number|string) => JSX.Element>((item, index) => {
		console.log("body render");
		return <p>{index}: {item.firstName} - {item.lastName}</p>
	}, []);

	useEffect(() => {
		const id = setInterval(() => update(), 1000);
		return () => clearInterval(id)
	}, [])

	return <>
		<For
			elementKey="id"
			of={arr.current}
		>
			{body}
		</For>
	</>
}
\`\`\`

> The component uses _For_ component to render a p element returned from _body_ memoized function for all objects assigned to _arr_  ref variable. It also specified __id__ property as _elementKey_ prop. A setInverval is executed on mount that on every second force component to rerender. If you open dev tools, you can see that _body_ function logs only three times at first, one for each element of _arr_ variable


## API

\`\`\`tsx
For = memo(<T extends unknown>({ of, children, filter, map, sort, elementKey, fallback }: ForProps<T>)
\`\`\`

> ### Params
>
> - __props__: _ForProps<T>_  
component properties object.
> - __props.of__: _T[]_  
array of elements.
> - __props.elementKey?__: _T extends Record<string,unknown> ? keyof T : never_  
a key of array elements if elements are object.
> - __props.children__: _(item: T, index: T extends Record<string,unknown> ? number | T[keyof T] : number) => ReactNode_  
it's a function that takes the current item as first argument and optionally a second argument that is number if element of array aren't object, otherwise it can be a number or the value of the element key specified in the _elementKey_ prop if it is preset.
> - __props.fallback?__: _ReactNode_  
optional element to render when _of_ prop is an empty array.
> - __props.filter?__: _<S extends T>(val: T, index: number, arr: T[]) => val is S_  
callback executed to filter _of_ elements.
> - __props.map?__: _<U extends T>(val: T, index: number, arr: T[]) => U_  
callback executed to map _of_ elements.
> - __props.sort?__: _(a: T, b: T) => number_  
callback executed to sort _of_ elements.
>

> ### Returns
>
> __result__: elements list, rendered from _of_ prop or _fallback_.
> - _JSX.Element_  
>`,_M=`# Lazy
Component Wrapper to lazy loading a Component. [See demo](https://ndriadev.github.io/react-tools/#/components/Lazy)

## Usage

\`\`\`tsx
export default function LC() {
	return (
		<Lazy
			factory={() => import('./LazyComponent').then(async res => {
				await new Promise(resolve => setTimeout(resolve, 5000));
				return res;
			})}
			fallback={<p>Loading component...</p>}
		/>
	);
}
\`\`\`

> The component uses _Lazy_ component to lazy load a component imported dynamically by _factory_ prop. The component loading is delayed by 5 seconds. During this time, _fallback_ prop is shown that renders a p element with the text __Loading component...__.


## API

\`\`\`tsx
Lazy<T extends { default: ComponentType<unknown> } | { [k: string]: ComponentType<unknown> }>({ factory, componentName, fallback, beforeLoad, afterLoad }: { factory: () => Promise<T>, componentName?: string, fallback?: ReactNode, beforeLoad?: ()=>void, afterLoad?: ()=>void })
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
>`,bM=`# Show
Generic component used to conditional render part of the view: it renders _children_ when the _when_ prop is truthy, otherwise the _fallback_ prop, if it is present, or null. [See demo](https://ndriadev.github.io/react-tools/#/components/Show)

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
Show<T extends unknown>({ when, fallback, children }: PropsWithChildren<{ when: T|boolean|undefined|null, fallback?: ReactNode }>)
\`\`\`

> ### Params
>
> - __object__: _PropsWithChildren<{when: boolean, fallback?: ReactNode}>_
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
>`,vM=`# SwitchCase
It works like switch-case construct. It useful for when there are more than 2 mutual exclusive conditions. [See demo](https://ndriadev.github.io/react-tools/#/components/SwitchCase)

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
SwitchCaseSwitch = ({ children, fallback }: PropsWithChildren<{ fallback?: ReactNode }>)
\`\`\`

> ### Params
>
> - __object.fallback?__: _ReactNode_  
optional element to render when _when_ prop is false.
> - __object.children?__: _PropsWithChildren<any>["children"]_  
__Case__ components.
>

> ### Returns
>
> __element__:  _JSX.Element|null_  
> __Case__ Component has these properties:
> - _children_: element to render.
> - _when_: condition that if true return _children_, otherwise null.
>`,yM=`# alphanumericCompare
Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not. [See demo](https://ndriadev.github.io/react-tools/#/utils/alphanumericCompare)

## API

\`\`\`tsx
alphanumericCompare(string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", opts?: Intl.CollatorOptions)
\`\`\`

> ### Params
>
> - __string1__: _string_  
first string to compare.
> - __string2__: _string_  
second string to compare.
> - __compareType__: _"<" | ">" | "=" | ">=" | "<="_  
type of compare to verify.
> - __opts__: _Intl.CollatorOptions_  
options object to execute compare.
>

> ### Returns
>
> __result__: boolean that indicates whether the indicated comparison is respected or not.
> - _boolean_  
>`,kM=`# changeStringCase
Function that given a string, a case type, and an optional delimiter, returns the string in the specified case or empty string. [See demo](https://ndriadev.github.io/react-tools/#/utils/changeStringCase)

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
>`,wM=`# createPubSubStore
A state management hook implemented on Publish-Subscribe pattern. It allows components to subscribe to state changes and receive updates whenever the state is modified, providing a scalable and decoupled state management solution.__N.B.: to work properly, objects like Set, Map, Date or more generally objects without _Symbol.iterator_ must be treated as immutable__. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/createPubSubStore)

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
createPubSubStore<T extends Record<string, unknown>, E extends Record<string, (store: T, ...args: any) => void>>(obj: T, mutatorsFn?: E, persist?: boolean): { getStore: () => T; mutateStore: (cb: (globStore: T) => void) => void; mutators: Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>, usePubSubStore: { (subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>] }}
\`\`\`

> ### Params
>
> - __obj__: _T extends Record<string, unknown>_  
Object that rapresent the initialState of the store.
> - __mutatorsFn?__: _E extends Record<string, (store: T, ...args: any) => void>_  
Object that contains specified void function to mutate the store value, not the store itself, that receives the store as first parameter and other optional parameters.
> - __persist=false?__: _boolean_  
boolean that indicates if the store value will be persisted on the local Storage.
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
>`,SM=`# defaultSerializer
Function to serialize any type of value. [See demo](https://ndriadev.github.io/react-tools/#/utils/defaultSerializer)

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
>`,xM=`# detectBrowser
It detects used browser or return __"No detection"__. [See demo](https://ndriadev.github.io/react-tools/#/utils/detectBrowser)

## API

\`\`\`tsx
detectBrowser(): "chrome" | "firefox" | "safari" | "opera" | "edge" | "No detection"
\`\`\`

> ### Params
>
>
>

> ### Returns
>
> __result__
> - _"chrome"|"firefox"|"safari"|"opera"|"edge"|"No detection"_  
>`,CM=`# getBase64
Function to obtain a Base64 from value specified if supported, otherwise throw an Error. [See demo](https://ndriadev.github.io/react-tools/#/utils/getBase64)

## API

\`\`\`tsx
getBase64<T>(target: string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[], options?: ToDataURLOptions | UseBase64ObjectOptions<T>): Promise<string>
\`\`\`

> ### Params
>
> - __target__: _target: string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[]_
> - __options?__: _ToDataURLOptions | UseBase64ObjectOptions<T>_
>

> ### Returns
>
> 
> - _string_  
>`,EM=`# getKeyObjectFromValue
Function that given an object and a value, returns the corrispondent key of this value or undefined. [See demo](https://ndriadev.github.io/react-tools/#/utils/getKeyObjectFromValue)

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
>`,TM=`# getObjectFromDottedString
Function that, given a path, a value and an optional object, returns an object with as many properties as there are in the path, assigning the value passed to the last one specified. [See demo](https://ndriadev.github.io/react-tools/#/utils/getObjectFromDottedString)

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
>`,AM="# hotKeyHandler\nUtility function for _onKeyDown_ and _onKeyUp_ events handler that supports keys combination. [See demo](https://ndriadev.github.io/react-tools/#/utils/hotKeyHandler)\n\n## API\n\n```tsx\nhotKeyHandler(hotKeys: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>): (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void\n```\n\n> ### Params\n>\n> - __hotKeys__: _`${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`_  \nhotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.\n> - __listener__: _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>_  \nlistener to be executed on specified event\n>\n\n> ### Returns\n>\n> \n> - _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void_  \n>",PM=`# isAsync
It detects if a function is asynchronous. [See demo](https://ndriadev.github.io/react-tools/#/utils/isAsync)

## API

\`\`\`tsx
isAsync<T extends unknown[], E = unknown>(fn: E | Promise<E> | ((...args: T)=> E | Promise<E>)): boolean
\`\`\`

> ### Params
>
> - ____: _(...args: unknown[])=> unknown | Promise<unknown>_
>

> ### Returns
>
> __result__
> - _boolean_  
>`,RM=`# isClient
It detects if code is running on client. [See demo](https://ndriadev.github.io/react-tools/#/utils/isClient)

## API

\`\`\`tsx
isClient(): boolean
\`\`\`

> ### Params
>
>
>

> ### Returns
>
> __result__
> - _boolean_  
>`,MM=`# isDeepEqual
It returns true if the params are equal in depth. [See demo](https://ndriadev.github.io/react-tools/#/utils/isDeepEqual)

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
>`,DM=`# isMouseEvent
It returns true if the event param is of MouseEvent type. [See demo](https://ndriadev.github.io/react-tools/#/utils/isMouseEvent)

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
>`,jM=`# isShallowEqual
It returns true if the params are equal until first level depth. [See demo](https://ndriadev.github.io/react-tools/#/utils/isShallowEqual)

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
>`,zM=`# isTouchEvent
It returns true if the event param is of TouchEvent type. [See demo](https://ndriadev.github.io/react-tools/#/utils/isTouchEvent)

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
>`,OM=`# lazy
Wrapper around _React.lazy_ that works also with component without default export and with possibility to execute a function before and after component loading. [See demo](https://ndriadev.github.io/react-tools/#/utils/lazy)

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
>`,LM=`# mergeObjects
Function that, given two objects version, merges them into a single one. Via an optional parameter _forceUndefinedValue_ you can define how undefined values are treated. [See demo](https://ndriadev.github.io/react-tools/#/utils/mergedObject)

## API

\`\`\`tsx
mergeObjects<T extends Record<string,unknown>>(oldObj: T, newObj: RecursivePartial<T>, forceUndefinedValue?: boolean): T
\`\`\`

> ### Params
>
> - __oldObj__: _Record<string,unknown>_  
previous object version.
> - __newObj__: _RecursivePartial<Record<string,unknown>>_  
new object version.
> - __forceUndefinedValue=false?__: _boolean_  
boolean to indicate how treat undefined value.
>

> ### Returns
>
> __result__: mergedObject
> - _Record<string, unknown>_  
>`,IM=`# removeDuplicatedFromArrayObjects
Function that given a property or an array of properties, and one or more array of object, returns a single array with unique objects by specified properties. If property is __none__, will be return an unique array. [See demo](https://ndriadev.github.io/react-tools/#/utils/removeDuplicatedFromArrayObjects)

## API

\`\`\`tsx
removeDuplicatedFromArrayObjects<T extends Record<string, unknown>>(property: keyof T | (keyof T)[] | "none", ...args: (T[])[]): T[]
\`\`\`

> ### Params
>
> - __property__: _keyof T | (keyof T)[] | "none"_  
property or array of properties belonged to objects inside _arrays_ that will be used like discriminating.
> - __args__: _(T[])[]_  
arrays from which remove duplicated
>

> ### Returns
>
> __result__: array
> - _T[]_  
>`,FM=`# removePropertiesFromArrayObjects
Function that, given an array of objects and a property or an array of properties, return a new array without specified properties. [See demo](https://ndriadev.github.io/react-tools/#/utils/removePropertiesFromArrayObjects)

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
>`,UM=`# useActiveElement
Hook that returns activeElement and listen its changes. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useActiveElement)

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

> ### Params
>
>
>

> ### Returns
>
> __activeELement__
> - __Union of__:  
>     - _Element_  
>     - _null_  
>`,NM=`# useAnimation
Hook to use [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useAnimation)

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
>`,HM=`# useArray
Hook to use _Array data structure_ to handle component state with all Array methods. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useArray)

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
>`,WM=`# useAudio
Hook to use an HTML audio element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useAudio)

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
>`,BM=`# useBattery
Hook for accessing and monitoring device battery status. Refer to [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useBattery)

## Usage

\`\`\`tsx
export const UseBattery = () => {
	const status = useBattery();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(status).map(el => (
				<p key={el}>{el}: {status[el as keyof typeof status]}</p>
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
>`,VM=`# useBeforeUnload
Hook to handle beforeunload event. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useBeforeUnload)

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
>`,$M=`# useBluetooth
Hook to use [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useBluetooth)

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

> ### Params
>
>
>

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
>`,qM=`# useBroadcastChannel
Hook to use [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useBroadcastChannel)

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
>`,GM=`# useCallbackCompare
Custom useCallback that returns memoized callback that changes only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useCallbackCompare)

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
>`,KM=`# useCallbackDeepCompare
Custom useCallback that returns memoized callback that changes only if deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useCallbackDeepCompare)

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
>`,QM=`# useClickOutside
Hook to listen and execute an action when there is a click outside an element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useClickOutside)

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

> ### Returns
>
> 
> 
>`,YM=`# useClipboard
Hook to handle Clipboard. Refers to [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). __N.B.__: The hook has the same compatibility issues as the Clipboard API for Firefox, i.e. it is currently impossible to read from the clipboard. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useClipboard)

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
>`,XM=`# useColorScheme
Hook to handle ColorScheme. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useColorScheme)

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
>`,JM=`# useContextMenu
Hook to add contextmenu event listener. The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useContextMenu)

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

> ### Returns
>
> 
> 
>`,ZM=`# useDebounce
Hook to delay a function execution with possibility to cancel execution and to invoke them immediately. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDebounce)

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
>`,e9=`# useDeferredValue
_useDeferredValue_ hook polyfilled for React versions below 18. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useDeferredValue)

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
>`,t9=`# useDerivedState
Hook useful when the internal state of a component depends on one or more props. It receives an _initial state_ and a _dependency array_ that works the same way as that of a _useEffect_, _useMemo_, and _useCallback_. Every time the dependencies change, the __derived state__ is resetted to _initial state_. A third optional parameter can be passed, to execute a _compute_ function after the dependencies are updated, without having a _useEffect_ within the component. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useDerivedState)

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
>`,n9=`# useDeviceMotion
Hook to handle [device motion](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDeviceMotion)

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

> ### Params
>
>
>

> ### Returns
>
> __props__: device motion properties.
> - _DeviceMotionProps_  
>`,o9=`# useDeviceOrientation
Hook to handle [device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDeviceOrientation)

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

> ### Params
>
>
>

> ### Returns
>
> __props__: device orientation properties.
> - _DeviceOrientationProps_  
>`,r9=`# useDialogBox
Hook to use Dialog Box _prompt_, _alert_ or _confirm_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDialogBox)

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
>`,a9=`# useDisplayMedia
Hook to capture the contents of a display. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDisplayMedia)

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

> ### Params
>
>
>

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
>`,i9=`# useDocumentPIP
Hook to use Document PIP [(Document-Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDocumentPIP)

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
>`,l9=`# useDocumentVisibility
Hook to track document visibility. Refers to [Document VisibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useDocumentVisibility)

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

> ### Params
>
>
>

> ### Returns
>
> __documentVisibility__
> - _DocumentVisibilityState_  
>`,s9=`# useDoubleClick
Hook to handle double click event. Double clicking in react as well as with vanilla js, it is possible to manage it but it is not possible to have both managers on the same element. Thanks to this hook it is possible to do this, and it works with all events that can be associated with a user click (for example _mousedown_ but also _touchstart_). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useDoubleClick)

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
>`,c9=`# useEffectCompare
Custom useEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectCompare)

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
>`,u9=`# useEffectDeepCompare
Custom useEffect that reexecutes EffectCallback only when deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectDeepCompare)

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
>`,d9=`# useEffectOnce
Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectOnce)

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

> ### Returns
>
> 
> 
>`,p9=`# useEventDispatcher
Hook to dispatch an Event or a CustomEvent. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEventDispatcher)

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
>`,f9=`# useEventListener
Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEventListener)

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
>`,h9=`# useEventSource
Hook to handle an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) connection to an HTTP server, which sends events in text/event-stream format. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useEventSource)

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
>`,m9=`# useEvents
Communication system based on Events pattern implemented on a EventTarget subclass. AddListener and dispatch functions to communicate. The result of invoking the _addListener_ function in turn returns a function that can be used to _removeListener_ on event. Otherwise, the listener is automatically removed when the component that has instantiated it is unmounted. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEvents)

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

> ### Params
>
>
>

> ### Returns
>
> __result__: contains the _addListener_ and _dispatch_ functions.
> - __Union of__:  
>     - __Array__:  
>         - _(type: string, callback<T>:(evt: Even_  
>     - _CustomEvent<T>) => void, options?: boolean_  
>     - _AddEventListenerOptions) => ()=>void, <T>(evt: Event_  
>     - _CustomEvent<T>) => void]_  
>`,g9=`# useEyeDropper
Hook to use [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useEyeDropper)

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
>`,_9=`# useFPS
Hook to detect FPS (Frames per second). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useFPS)

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
>`,b9=`# useFetch
Hook to use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with more control and the possibility to execute request with suspense support. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useFetch)

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
>`,v9=`# useFullscreen
Hook to use [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useFullscreen)

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
>`,y9=`# useGeolocation
Hook to use user's geographic location. Refer to [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useGeolocation)

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
>`,k9=`# useHotKeys
Hook to listen for the keyboard press, support key combinations, built on [hotKeyHandler](#/hotKeyHandler) utility function. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useHotKeys)

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
>`,w9=`# useHover
Hook that determines whether the item is hovered or not and handles state hovers. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useHover)

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
>`,S9=`# useId
_useId_ hook polyfilled for React versions below 18: __not use for key prop__. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useId)

## API

\`\`\`tsx
useId(): string
\`\`\`

> ### Params
>
>
>

> ### Returns
>
> 
> - _string_  
>`,x9=`# useIdleCallback
Hook to invoke a callback when the browser is idle. Refer to [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useIdleCallback)

## Usage

\`\`\`tsx
export const UseIdleCallback = () => {
	const [iterations, setIterations] = useState(0);
	const [log, setLog] = useState("");
	const [invoke] = useIdleCallback(() => setLog("RequestIdleCallback executed"));

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
useIdleCallback(cb: (deadline?: IdleDeadline | DOMHighResTimeStamp | void) => void, opts?: {timeout: number , unsupportedBehavior?: "animationFrame" | "timeout" | "immediatly" }): [() => void, () => void]
\`\`\`

> ### Params
>
> - __cb -callback that should be called in the near future.__: _(deadline?: IdleDeadline | DOMHighResTimeStamp | void)=> void_
> - __opts?__: _IdleRequestOptions & { unsupportedBehavior: "animationFrame"|"timeout"|"immediatly" }_  
Contains optional configuration parameters.
>

> ### Returns
>
> __result__: array where functions to invoke and cancel execution.
> - __Array__:  
>     - _()=>void_  
>     - _()=>void_  
>`,C9=`# useInfiniteScroll
Hook to deal with large sets of data. It allow users to scroll through content endlessly without explicit pagination or loading new pages. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useInfiniteScroll)

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
>`,E9=`# useIntersectionObserver
Hook to use Intersection Observer. Refer to [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useIntersectionObserver)

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
>`,T9=`# useInterval
Hook to handle setInterval timer function with the possibility to clear and promisify execution. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useInterval)

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
>`,A9=`# useIsMounted
Hoos to know when a component is mounted or not. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useIsMounted)

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

> ### Params
>
>
>

> ### Returns
>
> 
> - _()=>boolean_  
>`,P9=`# useIsOnline
Hook to detect network connection status. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useIsOnline)

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

> ### Params
>
>
>

> ### Returns
>
> __isOnline__
> - _boolean_  
>`,R9=`# useLayoutEffectCompare
Custom useLayoutEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLayoutEffectCompare)

## Usage

The implementation is like that _useEffectCompare_.

Please visit [useEffectCompare](#/useEffectCompare) example to see how it works.

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
>`,M9=`# useLayoutEffectDeepCompare
Custom useEffect that reexecutes EffectCallback only when deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLayoutEffectDeepCompare)

## Usage

The implementation is like that _useEffectDeepCompare_.

Please visit [useEffectDeepCompare](#/useEffectDeepCompare) example to see how it works.

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
>`,D9=`# useLayoutEffectOnce
Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useLayoutEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useLayoutEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLayoutEffectOnce)

## Usage

The implementation is like that _useEffectOnce_.

Please visit [useEffectOnce](#/useEffectOnce) example to see how it works.

## API

\`\`\`tsx
useLayoutEffectOnce(effect: EffectCallback)
\`\`\`

> ### Params
>
> - __effect__: _EffectCallback_
>

> ### Returns
>
> 
> 
>`,j9=`# useLazyRef
Hook that works 'partially' like the _useState_ hook with lazy initialization: ensures that the __initializer__ function is executed only once. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useLazyRef)

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
>`,z9=`# useLocalStorageState
Custom _useState_ hook implementation using _LocalStorage_, with immutable _getter state_ function and to _remove_ key from localStorage. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useLocalStorageState)

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
>`,O9=`# useLock
Hook to use [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useLock)

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
>`,L9=`# useLogger
Hook to log componet details during Lifecycle events. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLogger)

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

> ### Returns
>
> 
> 
>`,I9=`# useLongPress
Hook to execute a callback on a long press event. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useLongPress)

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
>`,F9=`# useMap
Hook to use _Map data structure_ to handle component state with all Map methods. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useMap)

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
>`,U9=`# useMeasure
Hook to  measure and track element's dimensions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMeasure)

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

> ### Params
>
>
>

> ### Returns
>
> __result__: a refCallback for target element and a object with target element size.
> - __Array__:  
>     - _React.RefCallback<T>_  
>     - _DOMRectReadOnly_  
>`,N9=`# useMediaDevices
Hook to use [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface methods, that give access to any hardware source of media data. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useMediaDevices)

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
>`,H9=`# useMediaQuery
Hook to handle CSS mediaQuery. It returns an object with __matches__ and __media__ properties and receives an optional _onChange_ function to handle _MediaQueryListEvent change_ event. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useMediaQuery)

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
>`,W9=`# useMemoCompare
Custom useMemo that returns memoized value that changes only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoCompare)

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
>`,B9=`# useMemoDeepCompare
Custom useMemo that returns memoized value that changes only if deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoDeepCompare)

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
>`,V9=`# useMemoizedFn
Hook to store a function that will never change while keeping its dependencies always up to date. Can be used instead of _useCallback_, without esplicity dependencies array. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoizedFn)

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
>`,$9=`# useMergedRef
Hook to merge multiple refs into one. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMergedRef)

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
>`,q9=`# useMouse
Hook to track mouse position also in relationship with an element. It works with pointerEvents. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMouse)

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
>`,G9=`# useMutationObserver
Hook to use Mutation Observer. Refer to [Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMutationObserver)

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
>`,K9=`# useNetwork
Hook to detect network connection infos, refer to [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation). It takes optinally a parameter __selectedInfo__ to specify a subset of connection status property. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useNetwork)

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
>`,Q9=`# usePIP
Hook to use PIP [(Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePIP)

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
>`,Y9=`# usePerformAction
Hook that executes a callback after a render. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/usePerformAction)

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
>`,X9=`# usePermission
Hook to query the status of API permissions attributed to the current context. Refer to [PermissionAPI](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePermission)

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
>`,J9=`# usePinchZoom
Hook to handle pinch zoom gestures. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/usePinchZoom)

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
>`,Z9=`# usePointerLock
Hook to use [PointerLock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/usePointerLock)

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
>`,eD=`# usePopover
Hook to use [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePopover)

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
>`,tD=`# usePrevious
It's track the previous value of a variable, with possibility to enable/disable tracking. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/usePrevious)

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
>`,nD=`# usePromiseSuspensible
Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePromiseSuspensible)

## Usage

\`\`\`tsx
const Delayed = () => {
	const data = usePromiseSuspensible(() => {
		return new Promise<number[]>((res, rej) => {
			console.log("called")
			setTimeout(() => {
				Math.random() > 0.5
					? res([1, 2, 3, 4, 5])
					: rej();
			},4000)
		}).catch(() => alert("Error throwed by promise"))
	}, []);

	return <pre>{JSON.stringify(data)}</pre>;
}

export const UsePromiseSuspensible = () => {
	return <Suspense fallback="loading...">
		<Delayed/>
	</Suspense>
}
\`\`\`

> The _Delayed_ component uses _usePromiseSuspensible_ hook to call a promise that resolves with an array of number or reject: if promise has been resolved, array number is rendered, otherwise an alert is invocked. Delayed component is returned from _UsePromiseSuspensible_ component.


## API

\`\`\`tsx
usePromiseSuspensible<T extends (...args: unknown[]) => Promise<unknown>>(promise: T, deps: DependencyList): Awaited<ReturnType<T>>
\`\`\`

> ### Params
>
> - __promise__: _T_  
Function that returns a promise to suspense.
> - __deps__: _DependencyList_  
DependencyList for promise to suspense.
>

> ### Returns
>
> __result__: resolve promise value.
> - _Awaited<ReturnType<T>>_  
>`,oD=`# useProxyState
Hook to handle component state that allows you to use an object for your state and mutating it in a way more idiomatic for JS. __*N.B.*__ not destructure state, otherwise break changes updated. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useProxyState)

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
>`,rD=`# usePublishSubscribe
Communication system based on PubSub pattern. Instantiate a topic and use the publish and subscribe functions to communicate. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePublishSubscribe)

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
>`,aD=`# useRaf
Hook to execute a callback function with _requestAnimationFrame_ to optimize performance. Refer to (requestAnimationFrame)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame]. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useRaf)

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
>`,iD=`# useReducedMotion
Hook to detect if user prefers to reduce motion. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useReducedMotion)

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

> ### Params
>
>
>

> ### Returns
>
> __result__: it is true if user prefers reduced motion, otherwise it is false.
> - _boolean_  
>`,lD=`# useReducerGetReset
Custom useReducer with get and reset state functions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useReducerGetReset)

## Usage

The implementation is like that _useStateGetReset_ but built on _useReducer_.

Please visit [useStateGetReset](#/useStateGetReset) example to see how it works.

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
>`,sD=`# useReducerHistory
Custom useReducer that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useReducerHistory)

## Usage

The implementation is like that _useStateHistory_ but built on _useReducer_.

Please visit [useStateHistory](#/useStateHistory) example to see how it works.

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
>`,cD=`# useReducerHistoryGetter
Custom useReducer with getter state function and that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useReducerHistoryGetter)

## Usage

The implementation is like that _useReducerHistory_, adding getter function of _useReducerGetReset_.

Please visit [useReducerHistory](#/useReducerHistory) and [useReducerGetReset](#/useReducerGetReset) examples to see how it works.

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
>`,uD=`# useRemotePlayback
Hook to use [RemotePlayback API](https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useRemotePlayback)

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
>`,dD=`# useRerender
Hook that force a render. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useRerender)

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
useRerender(): React.DispatchWithoutAction
\`\`\`

> ### Params
>
>
>

> ### Returns
>
> __update__
> - _React.DispatchWithoutAction_  
>`,pD=`# useResizeObserver
Hook to use Resize Observer. Refer to [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useResizeObserver)

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
>`,fD=`# useResponsive
Hook for getting responsive window size. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useResponsive). It receives an optional param __config__ to manually setting breakpoint keys. __config__ can have a keys subset and value can be a number or an object with _value_ and _condition_ properties. If _value_ is a number, the condition will be ">". By default Breakpoints are:
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
>`,hD=`# useScreen
Hook to work with [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API) and [Window Management API](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useScreen)

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
>`,mD=`# useScreenWakeLock
Hook to use [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useScreenWakeLock)

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
>`,gD=`# useScript
Hook to dinamically load an external script like Google Analitycs. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useScript)

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
>`,_D=`# useScrollIntoView
Hook to scroll an element into view. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useScrollIntoView)

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
>`,bD=`# useSessionStorageState
Custom _useState_ hook implementation using _sessionStorage_, with immutable _getter state_ function and to _remove_ key from sessionStorage. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSessionStorageState)

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
>`,vD=`# useSet
Hook to use _Set data structure_ to handle component state with all Set methods. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSet)

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
>`,yD=`# useShare
Hook to use [Web Share Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useShare)

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

> ### Params
>
>
>

> ### Returns
>
> __object__: __isSupported__ to known if share API is supported and __share__ function to use Web share API.
> - __Object__:  
>     - __isSupported__ : _boolean_  
>     - __share__ : _(data?: ShareData) => Promise<void>_  
>`,kD=`# useSpeechRecognition
Hook to use _SpeechRecognition API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useSpeechRecognition)

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
>`,wD=`# useSpeechSynthesis
Hook to use _SpeechSynthesis API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useSpeechSynthesis)

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
>`,SD=`# useStateGetReset
Custom useState with get and reset state functions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateGetReset)

## Usage

\`\`\`tsx
const UseStateGetReset = () => {
	const [stateG, setStateG, getState, resetState] = useStateGetReset({ id: "", name: "", eta: "" });
	const [state, setState] = useState({ id: "", name: "", eta:"" });

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
useStateGetReset<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void]
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
>`,xD=`# useStateHistory
Custom useState that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateHistory)

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
>`,CD=`# useStateHistoryGetter
Custom useState with getter state function and that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateHistoryGetter)

## Usage

The implementation is like that _useStateHistory_, adding getter function of _useStateGetReset_.

Please visit [useStateHistory](#/useStateHistory) and [useStateGetReset](#/useStateGetReset) examples to see how it works.

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
>`,ED=`# useStateValidator
Custom _useState_ hook that validates state on every update. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateValidator)

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
useStateValidator<T>(initialState: T | (() => T), validator: StateValidator<T>): [T, Dispatch<SetStateAction<T>>, T extends Record<string, unknown> ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: string}]
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
    - _T extends Record<string, unknown> ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: strin_  
> Array with:
> - first element: __state__ value.
> - second element: __setState__ function to update state.
> - third element: __valid__ validation value/object for state.
>`,TD=`# useSwipe
Hook to handle swipe gesture. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useSwipe)

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
>`,AD=`# useSyncExternalStore
_useSyncExternalStore_ hook polyfilled for React versions below 18 ___only client side___. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSyncExternalStore)

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
>`,PD=`# useTextSelection
Hook to track text selection. Refers to [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useTextSelection)

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
>`,RD=`# useThrottle
Hook to limit function execution frequency. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useThrottle)

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
>`,MD=`# useTimeout
Hook to handle setTimeout timer function with the possibility to clear and promisify execution. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useTimeout)

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
>`,DD=`# useTitle
Hook to handling app page title. It works _outside Component_ also and it returns array of two functions to read and write title. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useTitle)

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
>`,jD=`# useVibrate
Hook to use device vibration hardware. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useVibrate)

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

> ### Params
>
>
>

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
>`,zD=`# useVideo
Hook to use an HTML video element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useVideo)

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
>`,OD=`# useVisible
Hook to know if an element is visible and optionally the visible area ration of the element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useVisible)

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
>`,LD=`# useWebSocket
Hook for creating and managing a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) connection to a server, as well as for sending and receiving data on the connection. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useWebSocket)

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
>`,ID=`# useWebWorker
Hook to use [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), handling registration and communication. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useWebWorker)

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
>`,FD=`# useWebWorkerFn
Hook to run expensive functions using a Web Worker without blocking the UI handling execution as Promise. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useWebWorkerFn)

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
>`;function UD(){return u.jsxs("div",{className:"home-container",children:[u.jsx("img",{src:Zb,alt:"react",className:"logo"}),u.jsx("h1",{className:"title",children:"React-Tools"}),u.jsx("h2",{children:"A collection of Hooks, Components and Utilities for React"}),u.jsxs("div",{className:"npm-container",children:[u.jsx("span",{className:"npm-copy",onClick:()=>navigator.clipboard.writeText("npm i @ndriadev/react-tools"),children:"copy"}),u.jsx("p",{className:"npm-command",children:u.jsx("code",{children:"npm i @ndriadev/react-tools"})})]}),u.jsx(z,{className:"get-started",onClick:()=>{var e;return(e=document.querySelector(".container"))==null?void 0:e.scrollTo(0,0)},to:"/hooks",children:"GET STARTED"}),u.jsxs("div",{className:"features-container",children:[u.jsxs("div",{className:"cell",children:[u.jsx("div",{className:"title",children:"Typescript"}),u.jsx("div",{className:"body",children:"Written in typescript for type safety."})]}),u.jsxs("div",{className:"cell",children:[u.jsx("div",{className:"title",children:"Tree Shakable"}),u.jsx("div",{className:"body",children:"Import only that you use. Indivual import cost is tiny."})]}),u.jsxs("div",{className:"cell",children:[u.jsx("div",{className:"title",children:"Demos"}),u.jsx("div",{className:"body",children:"All implementations have a demo that allow you to try them."})]})]})]})}function ND(){const[e]=F1();return e.has("route")?u.jsx(vn,{to:`/${e.get("route")}`,replace:!0}):u.jsx(UD,{})}const HD=y.lazy(()=>H(()=>import("./ErrorBoundary-c89f14b2.js"),[]).then(e=>({default:"default"in e?e.default:e.ErrorBoundary}))),WD=y.lazy(()=>H(()=>import("./For-e392fef7.js"),[]).then(e=>({default:"default"in e?e.default:e.For}))),Sg=y.lazy(()=>H(()=>import("./Lazy-8f2eadd1.js"),[]).then(e=>({default:"default"in e?e.default:e.Lazy}))),BD=y.lazy(()=>H(()=>import("./Show-73eedf6e.js"),[]).then(e=>({default:"default"in e?e.default:e.Show}))),VD=y.lazy(()=>H(()=>import("./SwitchCase-abae86a8.js"),[]).then(e=>({default:"default"in e?e.default:e.SwitchCase}))),$D=y.lazy(()=>H(()=>import("./UseActiveElement-177f3990.js"),["assets/UseActiveElement-177f3990.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseActiveElement}))),qD=y.lazy(()=>H(()=>import("./UseAnimation-31a770b4.js"),[]).then(e=>({default:"default"in e?e.default:e.UseAnimation}))),GD=y.lazy(()=>H(()=>import("./UseAudio-65ef3ace.js"),["assets/UseAudio-65ef3ace.js","assets/createHTMLMediaElement-066ea08d.js"]).then(e=>({default:"default"in e?e.default:e.UseAudio}))),KD=y.lazy(()=>H(()=>import("./UseBattery-616c0238.js"),["assets/UseBattery-616c0238.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseBattery}))),QD=y.lazy(()=>H(()=>import("./UseBluetooth-5c07a909.js"),["assets/UseBluetooth-5c07a909.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseBluetooth}))),YD=y.lazy(()=>H(()=>import("./UseBroadcastChannel-6f0c9fd6.js"),["assets/UseBroadcastChannel-6f0c9fd6.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseBroadcastChannel}))),XD=y.lazy(()=>H(()=>import("./UseClipboard-6f5c3cf5.js"),["assets/UseClipboard-6f5c3cf5.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseClipboard}))),JD=y.lazy(()=>H(()=>import("./UseColorScheme-71b74bc7.js"),["assets/UseColorScheme-71b74bc7.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseColorScheme}))),ZD=y.lazy(()=>H(()=>import("./UseDebounce-0ace5bfa.js"),[]).then(e=>({default:"default"in e?e.default:e.UseDebounce}))),ej=y.lazy(()=>H(()=>import("./UseDeviceMotion-f8f493a2.js"),["assets/UseDeviceMotion-f8f493a2.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseDeviceMotion}))),tj=y.lazy(()=>H(()=>import("./UseDeviceOrientation-4e602379.js"),["assets/UseDeviceOrientation-4e602379.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseDeviceOrientation}))),nj=y.lazy(()=>H(()=>import("./UseDialogBox-f0977729.js"),[]).then(e=>({default:"default"in e?e.default:e.UseDialogBox}))),oj=y.lazy(()=>H(()=>import("./UseDisplayMedia-687cfb1c.js"),["assets/UseDisplayMedia-687cfb1c.js","assets/useMediaDevices-fdd7088b.js","assets/useEffectOnce-b14fae5a.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseDisplayMedia}))),rj=y.lazy(()=>H(()=>import("./UseDocumentPIP-beeb8286.js"),["assets/UseDocumentPIP-beeb8286.js","assets/useRerender-3f0d18a9.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseDocumentPIP}))),aj=y.lazy(()=>H(()=>import("./UseEyeDropper-15335633.js"),[]).then(e=>({default:"default"in e?e.default:e.UseEyeDropper}))),ij=y.lazy(()=>H(()=>import("./UseFPS-d43860f5.js"),["assets/UseFPS-d43860f5.js","assets/useRaf-4bf51b1d.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseFPS}))),lj=y.lazy(()=>H(()=>import("./UseFetch-72686063.js"),[]).then(e=>({default:"default"in e?e.default:e.UseFetch}))),sj=y.lazy(()=>H(()=>import("./UseFullscreen-26747b52.js"),["assets/UseFullscreen-26747b52.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseFullscreen}))),cj=y.lazy(()=>H(()=>import("./UseGeolocation-baffb183.js"),["assets/UseGeolocation-baffb183.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseGeolocation}))),uj=y.lazy(()=>H(()=>import("./UseIdleCallback-a2b4da77.js"),[]).then(e=>({default:"default"in e?e.default:e.UseIdleCallback}))),dj=y.lazy(()=>H(()=>import("./UseInterval-ec389918.js"),["assets/UseInterval-ec389918.js","assets/useInterval-e809511a.js"]).then(e=>({default:"default"in e?e.default:e.UseInterval}))),pj=y.lazy(()=>H(()=>import("./UseLock-adaae5cb.js"),[]).then(e=>({default:"default"in e?e.default:e.UseLock}))),fj=y.lazy(()=>H(()=>import("./UseMediaDevices-b379abfd.js"),["assets/UseMediaDevices-b379abfd.js","assets/useMediaDevices-fdd7088b.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseMediaDevices}))),hj=y.lazy(()=>H(()=>import("./UseMediaQuery-b7f7beae.js"),["assets/UseMediaQuery-b7f7beae.js","assets/useMediaQuery-f550f792.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseMediaQuery}))),mj=y.lazy(()=>H(()=>import("./UsePIP-14087e5b.js"),["assets/UsePIP-14087e5b.js","assets/mov_bbb-3a4cadaf.js"]).then(e=>({default:"default"in e?e.default:e.UsePIP}))),gj=y.lazy(()=>H(()=>import("./UsePermission-530ded5d.js"),["assets/UsePermission-530ded5d.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UsePermission}))),_j=y.lazy(()=>H(()=>import("./UsePopover-e0dda02f.js"),["assets/UsePopover-e0dda02f.js","assets/useLazyRef-ce40c59e.js","assets/useMergedRef-02529cb5.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UsePopover}))),bj=y.lazy(()=>H(()=>import("./UsePromiseSuspensible-f7b42b90.js"),["assets/UsePromiseSuspensible-f7b42b90.js","assets/useEffectOnce-b14fae5a.js","assets/isDeepEqual-91d55382.js"]).then(e=>({default:"default"in e?e.default:e.UsePromiseSuspensible}))),vj=y.lazy(()=>H(()=>import("./UsePublishSubscribe-dc7554e7.js"),["assets/UsePublishSubscribe-dc7554e7.js","assets/PublishSubscribePattern-3c538608.js"]).then(e=>({default:"default"in e?e.default:e.UsePublishSubscribe}))),yj=y.lazy(()=>H(()=>import("./UseRaf-7a1bd684.js"),["assets/UseRaf-7a1bd684.js","assets/useRaf-4bf51b1d.js","assets/useResizeObserver-3269bcbe.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseRaf}))),kj=y.lazy(()=>H(()=>import("./UseReducedMotion-67fe1624.js"),["assets/UseReducedMotion-67fe1624.js","assets/useReducedMotion-010ab06c.js","assets/useMediaQuery-f550f792.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseReducedMotion}))),wj=y.lazy(()=>H(()=>import("./UseRemotePlayback-48ee7153.js"),["assets/UseRemotePlayback-48ee7153.js","assets/mov_bbb-3a4cadaf.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseRemotePlayback}))),Sj=y.lazy(()=>H(()=>import("./UseScreenWakeLock-d1cfb5d3.js"),["assets/UseScreenWakeLock-d1cfb5d3.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseScreenWakeLock}))),xj=y.lazy(()=>H(()=>import("./UseScript-81ec5b5f.js"),["assets/UseScript-81ec5b5f.js","assets/useScript-27040c3a.js","assets/useEffectOnce-b14fae5a.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseScript}))),Cj=y.lazy(()=>H(()=>import("./UseShare-ceffd2e4.js"),[]).then(e=>({default:"default"in e?e.default:e.UseShare}))),Ej=y.lazy(()=>H(()=>import("./UseSpeechRecognition-56d7bc22.js"),["assets/UseSpeechRecognition-56d7bc22.js","assets/usePerformAction-c449d649.js","assets/useSyncExternalStore-4b7f3eaf.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseSpeechRecognition}))),Tj=y.lazy(()=>H(()=>import("./UseSpeechSynthesis-6223bd7a.js"),["assets/UseSpeechSynthesis-6223bd7a.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseSpeechSynthesis}))),Aj=y.lazy(()=>H(()=>import("./UseTextSelection-00ed0642.js"),["assets/UseTextSelection-00ed0642.js","assets/useSyncExternalStore-4b7f3eaf.js","assets/isDeepEqual-91d55382.js"]).then(e=>({default:"default"in e?e.default:e.UseTextSelection}))),Pj=y.lazy(()=>H(()=>import("./UseThrottle-bcee84e0.js"),[]).then(e=>({default:"default"in e?e.default:e.UseThrottle}))),Rj=y.lazy(()=>H(()=>import("./UseTimeout-53051eaf.js"),[]).then(e=>({default:"default"in e?e.default:e.UseTimeout}))),Mj=y.lazy(()=>H(()=>import("./UseTitle-e1f39f6e.js"),[]).then(e=>({default:"default"in e?e.default:e.UseTitle}))),Dj=y.lazy(()=>H(()=>import("./UseVibrate-f9a35806.js"),[]).then(e=>({default:"default"in e?e.default:e.UseVibrate}))),jj=y.lazy(()=>H(()=>import("./UseVideo-bab786ff.js"),["assets/UseVideo-bab786ff.js","assets/mov_bbb-3a4cadaf.js","assets/createHTMLMediaElement-066ea08d.js"]).then(e=>({default:"default"in e?e.default:e.UseVideo}))),zj=y.lazy(()=>H(()=>import("./UseWebWorker-61f68b80.js"),["assets/UseWebWorker-61f68b80.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseWebWorker}))),Oj=y.lazy(()=>H(()=>import("./UseWebWorkerFn-435f50bd.js"),["assets/UseWebWorkerFn-435f50bd.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseWebWorkerFn}))),Lj=y.lazy(()=>H(()=>import("./UseBeforeUnload-ae09f2e4.js"),["assets/UseBeforeUnload-ae09f2e4.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseBeforeUnload}))),Ij=y.lazy(()=>H(()=>import("./UseClickOutside-7852b6a6.js"),["assets/UseClickOutside-7852b6a6.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseClickOutside}))),Fj=y.lazy(()=>H(()=>import("./UseContextMenu-8f52d15e.js"),["assets/UseContextMenu-8f52d15e.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseContextMenu}))),Uj=y.lazy(()=>H(()=>import("./UseDocumentVisibility-203e82fd.js"),["assets/UseDocumentVisibility-203e82fd.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseDocumentVisibility}))),Nj=y.lazy(()=>H(()=>import("./UseDoubleClick-3a4dc8e6.js"),[]).then(e=>({default:"default"in e?e.default:e.UseDoubleClick}))),Hj=y.lazy(()=>H(()=>import("./UseEventDispatcher-ada88767.js"),["assets/UseEventDispatcher-ada88767.js","assets/useMemoizedFn-a0441342.js","assets/useEventListener-734c88ed.js"]).then(e=>({default:"default"in e?e.default:e.UseEventDispatcher}))),Wj=y.lazy(()=>H(()=>import("./UseEventListener-b640cdea.js"),["assets/UseEventListener-b640cdea.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseEventListener}))),Bj=y.lazy(()=>H(()=>import("./UseEvents-147fe682.js"),["assets/UseEvents-147fe682.js","assets/useEvents-758663c6.js"]).then(e=>({default:"default"in e?e.default:e.UseEvents}))),Vj=y.lazy(()=>H(()=>import("./UseHotKeys-a39f372b.js"),["assets/UseHotKeys-a39f372b.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseHotKeys}))),$j=y.lazy(()=>H(()=>import("./UseHover-557a7568.js"),["assets/UseHover-557a7568.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseHover}))),qj=y.lazy(()=>H(()=>import("./UseInfiniteScroll-063cee78.js"),["assets/UseInfiniteScroll-063cee78.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseInfiniteScroll}))),Gj=y.lazy(()=>H(()=>import("./UseIntersectionObserver-0de16f0e.js"),["assets/UseIntersectionObserver-0de16f0e.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseIntersectionObserver}))),Kj=y.lazy(()=>H(()=>import("./UseIsOnline-601d70fe.js"),["assets/UseIsOnline-601d70fe.js","assets/useNetwork-d9352671.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseIsOnline}))),Qj=y.lazy(()=>H(()=>import("./UseLongPress-40bf0fc3.js"),[]).then(e=>({default:"default"in e?e.default:e.UseLongPress}))),Yj=y.lazy(()=>H(()=>import("./UseMeasure-6e8e2efb.js"),["assets/UseMeasure-6e8e2efb.js","assets/useResizeObserver-3269bcbe.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseMeasure}))),Xj=y.lazy(()=>H(()=>import("./UseMouse-ac87a075.js"),["assets/UseMouse-ac87a075.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseMouse}))),Jj=y.lazy(()=>H(()=>import("./UseMutationObserver-08910c2f.js"),["assets/UseMutationObserver-08910c2f.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseMutationObserver}))),Zj=y.lazy(()=>H(()=>import("./UseNetwork-29cdb44e.js"),["assets/UseNetwork-29cdb44e.js","assets/useNetwork-d9352671.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseNetwork}))),ez=y.lazy(()=>H(()=>import("./UsePerformAction-aff0e518.js"),["assets/UsePerformAction-aff0e518.js","assets/usePerformAction-c449d649.js","assets/useScript-27040c3a.js","assets/useEffectOnce-b14fae5a.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UsePerformAction}))),tz=y.lazy(()=>H(()=>import("./UsePinchZoom-7e0543d9.js"),["assets/UsePinchZoom-7e0543d9.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UsePinchZoom}))),nz=y.lazy(()=>H(()=>import("./UsePointerLock-c37896ed.js"),[]).then(e=>({default:"default"in e?e.default:e.UsePointerLock}))),oz=y.lazy(()=>H(()=>import("./UseResizeObserver-4d813a96.js"),["assets/UseResizeObserver-4d813a96.js","assets/useResizeObserver-3269bcbe.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseResizeObserver}))),rz=y.lazy(()=>H(()=>import("./UseResponsive-a807455e.js"),["assets/UseResponsive-a807455e.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseResponsive}))),az=y.lazy(()=>H(()=>import("./UseScreen-080e0d06.js"),["assets/UseScreen-080e0d06.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseScreen}))),iz=y.lazy(()=>H(()=>import("./UseScrollIntoView-e5b26e13.js"),["assets/UseScrollIntoView-e5b26e13.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js","assets/useReducedMotion-010ab06c.js","assets/useMediaQuery-f550f792.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseScrollIntoView}))),lz=y.lazy(()=>H(()=>import("./UseSwipe-19287584.js"),["assets/UseSwipe-19287584.js","assets/useEventListener-734c88ed.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseSwipe}))),sz=y.lazy(()=>H(()=>import("./UseVisible-53db598a.js"),["assets/UseVisible-53db598a.js","assets/useEffectOnce-b14fae5a.js","assets/useSyncExternalStore-4b7f3eaf.js"]).then(e=>({default:"default"in e?e.default:e.UseVisible}))),cz=y.lazy(()=>H(()=>import("./UseEffectCompare-d756f176.js"),[]).then(e=>({default:"default"in e?e.default:e.UseEffectCompare}))),uz=y.lazy(()=>H(()=>import("./UseEffectDeepCompare-b5ac16d3.js"),["assets/UseEffectDeepCompare-b5ac16d3.js","assets/isDeepEqual-91d55382.js"]).then(e=>({default:"default"in e?e.default:e.UseEffectDeepCompare}))),dz=y.lazy(()=>H(()=>import("./UseEffectOnce-2270d342.js"),["assets/UseEffectOnce-2270d342.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseEffectOnce}))),pz=y.lazy(()=>H(()=>import("./UseIsMounted-1d2c40a2.js"),["assets/UseIsMounted-1d2c40a2.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseIsMounted}))),fz=y.lazy(()=>H(()=>import("./UseLogger-04cc758a.js"),[]).then(e=>({default:"default"in e?e.default:e.UseLogger}))),hz=y.lazy(()=>H(()=>import("./UseRerender-0af80932.js"),["assets/UseRerender-0af80932.js","assets/useRerender-3f0d18a9.js"]).then(e=>({default:"default"in e?e.default:e.UseRerender}))),mz=y.lazy(()=>H(()=>import("./UseCallbackCompare-72513e47.js"),[]).then(e=>({default:"default"in e?e.default:e.UseCallbackCompare}))),gz=y.lazy(()=>H(()=>import("./UseCallbackDeepCompare-3358dcde.js"),["assets/UseCallbackDeepCompare-3358dcde.js","assets/isDeepEqual-91d55382.js"]).then(e=>({default:"default"in e?e.default:e.UseCallbackDeepCompare}))),_z=y.lazy(()=>H(()=>import("./UseLazyRef-5b937437.js"),["assets/UseLazyRef-5b937437.js","assets/useRerender-3f0d18a9.js","assets/useInterval-e809511a.js","assets/useLazyRef-ce40c59e.js"]).then(e=>({default:"default"in e?e.default:e.UseLazyRef}))),bz=y.lazy(()=>H(()=>import("./UseMemoCompare-86a7cfe8.js"),[]).then(e=>({default:"default"in e?e.default:e.UseMemoCompare}))),vz=y.lazy(()=>H(()=>import("./UseMemoDeepCompare-ddc2d9aa.js"),["assets/UseMemoDeepCompare-ddc2d9aa.js","assets/isDeepEqual-91d55382.js"]).then(e=>({default:"default"in e?e.default:e.UseMemoDeepCompare}))),yz=y.lazy(()=>H(()=>import("./UseMemoizedFn-4c148b12.js"),["assets/UseMemoizedFn-4c148b12.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseMemoizedFn}))),kz=y.lazy(()=>H(()=>import("./UseMergedRef-307f2822.js"),["assets/UseMergedRef-307f2822.js","assets/useResizeObserver-3269bcbe.js","assets/useEffectOnce-b14fae5a.js","assets/useMergedRef-02529cb5.js"]).then(e=>({default:"default"in e?e.default:e.UseMergedRef}))),wz=y.lazy(()=>H(()=>import("./CreatePubSubStore-051ad812.js"),["assets/CreatePubSubStore-051ad812.js","assets/useSyncExternalStore-4b7f3eaf.js","assets/PublishSubscribePattern-3c538608.js","assets/useLazyRef-ce40c59e.js","assets/isDeepEqual-91d55382.js"]).then(e=>({default:"default"in e?e.default:e.CreatePubSubStore}))),Sz=y.lazy(()=>H(()=>import("./UseArray-0e1ebfa4.js"),[]).then(e=>({default:"default"in e?e.default:e.UseArray}))),xz=y.lazy(()=>H(()=>import("./UseDerivedState-a631cd85.js"),[]).then(e=>({default:"default"in e?e.default:e.UseDerivedState}))),Cz=y.lazy(()=>H(()=>import("./UseLocalStorageState-275485f9.js"),["assets/UseLocalStorageState-275485f9.js","assets/useEvents-758663c6.js","assets/useMemoizedFn-a0441342.js","assets/useEffectOnce-b14fae5a.js"]).then(e=>({default:"default"in e?e.default:e.UseLocalStorageState}))),Ez=y.lazy(()=>H(()=>import("./UseMap-99f6499b.js"),[]).then(e=>({default:"default"in e?e.default:e.UseMap}))),Tz=y.lazy(()=>H(()=>import("./UsePrevious-f5773448.js"),[]).then(e=>({default:"default"in e?e.default:e.UsePrevious}))),Az=y.lazy(()=>H(()=>import("./UseProxyState-1b41c82c.js"),[]).then(e=>({default:"default"in e?e.default:e.UseProxyState}))),Pz=y.lazy(()=>H(()=>import("./UseSessionStorageState-1f384ac4.js"),["assets/UseSessionStorageState-1f384ac4.js","assets/useEvents-758663c6.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseSessionStorageState}))),Rz=y.lazy(()=>H(()=>import("./UseSet-0435e294.js"),[]).then(e=>({default:"default"in e?e.default:e.UseSet}))),Mz=y.lazy(()=>H(()=>import("./UseStateGetReset-54fa4b7a.js"),["assets/UseStateGetReset-54fa4b7a.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseStateGetReset}))),Dz=y.lazy(()=>H(()=>import("./UseStateHistory-7e3890e2.js"),[]).then(e=>({default:"default"in e?e.default:e.UseStateHistory}))),jz=y.lazy(()=>H(()=>import("./UseStateValidator-860f2bf0.js"),["assets/UseStateValidator-860f2bf0.js","assets/useMemoizedFn-a0441342.js"]).then(e=>({default:"default"in e?e.default:e.UseStateValidator})));function zz(){const e=D1([{path:"/",element:u.jsx(Y1,{}),children:[{index:!0,element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(ND,{})})},{path:"hooks",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/hooks/state/createPubSubStore",replace:!0})},{path:"state",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/createPubSubStore",replace:!0})},{path:"createPubSubStore",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:wM,component:u.jsx(wz,{})})})},{path:"useArray",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:HM,component:u.jsx(Sz,{})})})},{path:"useDerivedState",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:t9,component:u.jsx(xz,{})})})},{path:"useLocalStorageState",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:z9,component:u.jsx(Cz,{})})})},{path:"useMap",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:F9,component:u.jsx(Ez,{})})})},{path:"usePrevious",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:tD,component:u.jsx(Tz,{})})})},{path:"useProxyState",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:oD,component:u.jsx(Az,{})})})},{path:"useReducerGetReset",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:lD})})},{path:"useReducerHistory",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:sD})})},{path:"useReducerHistoryGetter",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:cD})})},{path:"useSessionStorageState",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:bD,component:u.jsx(Pz,{})})})},{path:"useSet",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:vD,component:u.jsx(Rz,{})})})},{path:"useStateGetReset",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:SD,component:u.jsx(Mz,{})})})},{path:"useStateHistory",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:xD,component:u.jsx(Dz,{})})})},{path:"useStateHistoryGetter",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:CD})})},{path:"useStateValidator",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:ED,component:u.jsx(jz,{})})})},{path:"useSyncExternalStore",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:AD})})}]},{path:"lifecycle",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/useDeferredValue",replace:!0})},{path:"useDeferredValue",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:e9})})},{path:"useEffectCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:c9,component:u.jsx(cz,{})})})},{path:"useEffectDeepCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:u9,component:u.jsx(uz,{})})})},{path:"useEffectOnce",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:d9,component:u.jsx(dz,{})})})},{path:"useIsMounted",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:A9,component:u.jsx(pz,{})})})},{path:"useLayoutEffectCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:R9})})},{path:"useLayoutEffectDeepCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:M9})})},{path:"useLayoutEffectOnce",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:D9})})},{path:"useLogger",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:L9,component:u.jsx(fz,{})})})},{path:"useRerender",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:dD,component:u.jsx(hz,{})})})}]},{path:"performance",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/useCallbackCompare",replace:!0})},{path:"useCallbackCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:GM,component:u.jsx(mz,{})})})},{path:"useCallbackDeepCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:KM,component:u.jsx(gz,{})})})},{path:"useId",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:S9})})},{path:"useLazyRef",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:j9,component:u.jsx(_z,{})})})},{path:"useMemoCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:W9,component:u.jsx(bz,{})})})},{path:"useMemoDeepCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:B9,component:u.jsx(vz,{})})})},{path:"useMemoizedFn",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:V9,component:u.jsx(yz,{})})})},{path:"useMergedRef",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:$9,component:u.jsx(kz,{})})})}]},{path:"events",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/useBeforeUnload",replace:!0})},{path:"useBeforeUnload",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:VM,component:u.jsx(Lj,{})})})},{path:"useClickOutside",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:QM,component:u.jsx(Ij,{})})})},{path:"useContextMenu",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:JM,component:u.jsx(Fj,{})})})},{path:"useDocumentVisibility",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:l9,component:u.jsx(Uj,{})})})},{path:"useDoubleClick",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:s9,component:u.jsx(Nj,{})})})},{path:"useEventDispatcher",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:p9,component:u.jsx(Hj,{})})})},{path:"useEventListener",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:f9,component:u.jsx(Wj,{})})})},{path:"useEvents",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:m9,component:u.jsx(Bj,{})})})},{path:"useHotKeys",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:k9,component:u.jsx(Vj,{})})})},{path:"useHover",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:w9,component:u.jsx($j,{})})})},{path:"useInfiniteScroll",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:C9,component:u.jsx(qj,{})})})},{path:"useIntersectionObserver",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:E9,component:u.jsx(Gj,{})})})},{path:"useIsOnline",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:P9,component:u.jsx(Kj,{})})})},{path:"useLongPress",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:I9,component:u.jsx(Qj,{})})})},{path:"useMeasure",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:U9,component:u.jsx(Yj,{})})})},{path:"useMouse",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:q9,component:u.jsx(Xj,{})})})},{path:"useMutationObserver",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:G9,component:u.jsx(Jj,{})})})},{path:"useNetwork",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:K9,component:u.jsx(Zj,{})})})},{path:"usePerformAction",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:Y9,component:u.jsx(ez,{})})})},{path:"usePinchZoom",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:J9,component:u.jsx(tz,{})})})},{path:"usePointerLock",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:Z9,component:u.jsx(nz,{})})})},{path:"useResizeObserver",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:pD,component:u.jsx(oz,{})})})},{path:"useResponsive",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:fD,component:u.jsx(rz,{})})})},{path:"useScreen",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:hD,component:u.jsx(az,{})})})},{path:"useScrollIntoView",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:_D,component:u.jsx(iz,{})})})},{path:"useSwipe",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:TD,component:u.jsx(lz,{})})})},{path:"useVisible",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:OD,component:u.jsx(sz,{})})})}]},{path:"api-dom",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/useActiveElement",replace:!0})},{path:"useActiveElement",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:UM,component:u.jsx($D,{})})})},{path:"useAnimation",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:NM,component:u.jsx(qD,{})})})},{path:"useAudio",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:WM,component:u.jsx(GD,{})})})},{path:"useBattery",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:BM,component:u.jsx(KD,{})})})},{path:"useBluetooth",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:$M,component:u.jsx(QD,{})})})},{path:"useBroadcastChannel",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:qM,component:u.jsx(YD,{})})})},{path:"useClipboard",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:YM,component:u.jsx(XD,{})})})},{path:"useColorScheme",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:XM,component:u.jsx(JD,{})})})},{path:"useDebounce",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:ZM,component:u.jsx(ZD,{})})})},{path:"useDeviceMotion",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:n9,component:u.jsx(ej,{})})})},{path:"useDeviceOrientation",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:o9,component:u.jsx(tj,{})})})},{path:"useDialogBox",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:r9,component:u.jsx(nj,{})})})},{path:"useDisplayMedia",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:a9,component:u.jsx(oj,{})})})},{path:"useDocumentPIP",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:i9,component:u.jsx(rj,{})})})},{path:"useEventSource",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:h9})})},{path:"useEyeDropper",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:g9,component:u.jsx(aj,{})})})},{path:"useFetch",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:b9,component:u.jsx(lj,{})})})},{path:"useFPS",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:_9,component:u.jsx(ij,{})})})},{path:"useFullscreen",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:v9,component:u.jsx(sj,{})})})},{path:"useGeolocation",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:y9,component:u.jsx(cj,{})})})},{path:"useIdleCallback",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:x9,component:u.jsx(uj,{})})})},{path:"useInterval",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:T9,component:u.jsx(dj,{})})})},{path:"useLock",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:O9,component:u.jsx(pj,{})})})},{path:"useMediaDevices",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:N9,component:u.jsx(fj,{})})})},{path:"useMediaQuery",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:H9,component:u.jsx(hj,{})})})},{path:"usePermission",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:X9,component:u.jsx(gj,{})})})},{path:"usePIP",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:Q9,component:u.jsx(mj,{})})})},{path:"usePopover",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:eD,component:u.jsx(_j,{})})})},{path:"usePromiseSuspensible",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:nD,component:u.jsx(bj,{})})})},{path:"usePublishSubscribe",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:rD,component:u.jsx(vj,{})})})},{path:"useRaf",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:aD,component:u.jsx(yj,{})})})},{path:"useReducedMotion",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:iD,component:u.jsx(kj,{})})})},{path:"useRemotePlayback",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:uD,component:u.jsx(wj,{})})})},{path:"useScreenWakeLock",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:mD,component:u.jsx(Sj,{})})})},{path:"useScript",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:gD,component:u.jsx(xj,{})})})},{path:"useShare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:yD,component:u.jsx(Cj,{})})})},{path:"useSpeechRecognition",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:kD,component:u.jsx(Ej,{})})})},{path:"useSpeechSynthesis",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:wD,component:u.jsx(Tj,{})})})},{path:"useTextSelection",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:PD,component:u.jsx(Aj,{})})})},{path:"useThrottle",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:RD,component:u.jsx(Pj,{})})})},{path:"useTimeout",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:MD,component:u.jsx(Rj,{})})})},{path:"useTitle",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:DD,component:u.jsx(Mj,{})})})},{path:"useVibrate",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:jD,component:u.jsx(Dj,{})})})},{path:"useVideo",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:zD,component:u.jsx(jj,{})})})},{path:"useWebSocket",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:LD})})},{path:"useWebWorker",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:ID,component:u.jsx(zj,{})})})},{path:"useWebWorkerFn",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:FD,component:u.jsx(Oj,{})})})}]}]},{path:"components",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/components/ErrorBoundary",replace:!0})},{path:"ErrorBoundary",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:mM,component:u.jsx(HD,{})})})},{path:"For",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:gM,component:u.jsx(WD,{})})})},{path:"Lazy",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:_M,component:u.jsx(Sg,{})})})},{path:"Show",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:bM,component:u.jsx(BD,{})})})},{path:"SwitchCase",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:vM,component:u.jsx(VD,{})})})}]},{path:"utils",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(In,{})}),children:[{index:!0,element:u.jsx(vn,{to:"/utils/alphanumericCompare",replace:!0})},{path:"alphanumericCompare",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:yM})})},{path:"changeStringCase",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:kM})})},{path:"defaultSerializer",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:SM})})},{path:"detectBrowser",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:xM})})},{path:"getBase64",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:CM})})},{path:"getKeyObjectFromValue",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:EM})})},{path:"getObjectFromDottedString",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:TM})})},{path:"hotKeyHandler",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:AM})})},{path:"isAsync",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:PM})})},{path:"isClient",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:RM})})},{path:"isDeepEqual",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:MM})})},{path:"isMouseEvent",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:DM})})},{path:"isShallowEqual",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:jM})})},{path:"isTouchEvent",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:zM})})},{path:"lazy",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:OM,component:u.jsx(Sg,{})})})},{path:"mergeObjects",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:LM})})},{path:"removeDuplicatedFromArrayObjects",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:IM})})},{path:"removePropertiesFromArrayObjects",element:u.jsx(y.Suspense,{fallback:u.jsx(D,{}),children:u.jsx(O,{markdown:FM})})}]}]}]);return u.jsx(S1,{router:e})}function Oz(){return u.jsx(zz,{})}Wc.createRoot(document.getElementById("root")).render(u.jsx(y.StrictMode,{children:u.jsx(Oz,{})}));export{H as _,Ib as a,u as j,y as r};
