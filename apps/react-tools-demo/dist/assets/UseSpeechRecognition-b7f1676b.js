import{r as n,j as u}from"./index-5eafcd1e.js";import{u as F}from"./usePerformAction-e9a10354.js";import{u as q}from"./useSyncExternalStore-543af22c.js";import{u as z}from"./useEffectOnce-bbae9380.js";const D=({alreadyStarted:m,defaultConfig:e,onAudioStart:p,onAudioEnd:h,onEnd:b,onError:i,onNoMatch:l,onResult:d,onSoundStart:y,onSoundEnd:v,onSpeechStart:x,onSpeechEnd:t,onStart:w})=>{const k=n.useRef(!!window&&("SpeechRecognition"in window||"webkitSpeechRecognition"in window)&&("SpeechGrammarList"in window||"webkitSpeechGrammarList"in window)&&("SpeechRecognitionEvent"in window||"webkitSpeechRecognitionEvent"in window)),L=n.useRef(window&&(window.SpeechRecognition||window.webkitSpeechRecognition)),r=n.useRef(),o=n.useRef(),a=n.useRef(!1),j=n.useRef({resultIndex:null,results:null}),S=n.useCallback(s=>{if(k.current&&!a.current){const c={grammars:(s==null?void 0:s.grammars)??(e==null?void 0:e.grammars),lang:(s==null?void 0:s.lang)??(e==null?void 0:e.lang),continuous:(s==null?void 0:s.continuous)??(e==null?void 0:e.continuous),interimResults:(s==null?void 0:s.interimResults)??(e==null?void 0:e.interimResults),maxAlternatives:(s==null?void 0:s.maxAlternatives)??(e==null?void 0:e.maxAlternatives)};r.current&&(r.current=void 0),r.current=new L.current,c.grammars&&(r.current.grammars=c.grammars),c.lang&&(r.current.lang=c.lang),c.continuous&&(r.current.continuous=c.continuous),c.interimResults&&(r.current.interimResults=c.interimResults),c.maxAlternatives&&(r.current.maxAlternatives=c.maxAlternatives),p&&(r.current.onaudiostart=p),x&&(r.current.onspeechstart=x),y&&(r.current.onsoundstart=y),w&&(r.current.onstart=w),i&&(r.current.onerror=i),l&&(r.current.onnomatch=l),r.current.onresult=R=>{console.log("result"),j.current={results:R.results,resultIndex:R.resultIndex},o.current&&o.current(),d&&d.call(r.current,R)},v&&(r.current.onsoundend=v),h&&(r.current.onaudioend=h),b&&(r.current.onend=b),t&&(r.current.onspeechend=t),a.current=!0,o.current&&o.current(),r.current.start()}},[e==null?void 0:e.grammars,e==null?void 0:e.lang,e==null?void 0:e.continuous,e==null?void 0:e.interimResults,e==null?void 0:e.maxAlternatives,p,h,i,b,l,d,v,y,t,x,w]),I=n.useRef(()=>{k.current&&a.current&&(r.current.stop(),a.current=!1,o.current&&o.current())}),G=n.useRef((s=!1)=>{r.current&&(r.current.abort(),r.current.onaudiostart=null,r.current.onaudioend=null,r.current.onend=null,r.current.onerror=null,r.current.onnomatch=null,r.current.onresult=null,r.current.onsoundstart=null,r.current.onsoundend=null,r.current.onspeechstart=null,r.current.onspeechend=null,r.current.onstart=null,r.current=void 0,a.current=!1,s&&(j.current={resultIndex:null,results:null}),o.current&&o.current())}),A=q(n.useCallback(s=>(o.current=s,()=>{o.current=void 0}),[]),n.useMemo(()=>{let s={isSupported:k.current,isListening:!1,result:{results:null,resultIndex:null}};return()=>{var c,R;return(a.current!==s.isListening||((c=j.current)==null?void 0:c.resultIndex)!==s.result.resultIndex||((R=j.current)==null?void 0:R.results)!==s.result.results)&&(s={isSupported:k.current,isListening:a.current,result:j.current}),s}},[]));return z(()=>{k.current&&m&&(a.current=!0,S())}),[A,S,I.current,G.current]},M=window.SpeechGrammarList||window.webkitSpeechGrammarList,O=()=>{const m=["aqua","azure","beige","bisque","black","blue","brown","chocolate","coral","crimson","cyan","fuchsia","ghostwhite","gold","goldenrod","gray","green","indigo","ivory","khaki","lavender","lime","linen","magenta","maroon","moccasin","navy","olive","orange","orchid","peru","pink","plum","purple","red","salmon","sienna","silver","snow","tan","teal","thistle","tomato","turquoise","violet","white","yellow","transparent"],e=`#JSGF V1.0; grammar colors; public <color> = ${m.join(" | ")} ;`,p=n.useRef(null),h=F(()=>{var t;return(t=p.current)==null?void 0:t.focus()}),[b,i]=n.useState("Ready"),[l,d,y]=D({onStart:n.useCallback(()=>{i("Listening...")},[]),onEnd:n.useCallback(()=>{y(),i("Finish"),h()},[h]),onNoMatch:n.useCallback(()=>{i("Color not recognized.")},[]),onError:n.useCallback(t=>{i(`Error occurred in recognition: ${t.message?t.message:t.error}`)},[])}),v=()=>{const t=new M;t.addFromString(e,1),d({lang:"en-US",continuous:!1,interimResults:!1,maxAlternatives:1,grammars:t})},x=n.useMemo(()=>{let t="transparent";if(l.result.results){const w=l.result.results[0][0].transcript;m.includes(w)&&(t=w)}return t},[l.result.results,m]);return u.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",gap:10},children:l.isSupported?u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[u.jsx("p",{children:"Click on start to say a color to change backgroundColor of bordered div. Try"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10},children:m.map(t=>u.jsx("span",{style:{color:t},children:t},t))})]}),u.jsx("p",{children:b}),u.jsx("div",{style:{border:"1px solid lightgray",width:300,height:150,backgroundColor:x,margin:"0 auto"},children:l.result&&u.jsxs("p",{children:["Color is: ",x]})}),u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:10},children:u.jsx("button",{ref:p,onClick:v,disabled:l.isListening,children:"Start"})})]}):u.jsx("p",{children:"Speech Recognition not supported"})})};export{O as UseSpeechRecognition};
