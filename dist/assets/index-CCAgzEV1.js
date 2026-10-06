function kh(a,o){for(var i=0;i<o.length;i++){const c=o[i];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in a)){const p=Object.getOwnPropertyDescriptor(c,u);p&&Object.defineProperty(a,u,p.get?p:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function i(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(u){if(u.ep)return;u.ep=!0;const p=i(u);fetch(u.href,p)}})();function vp(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var al={exports:{}},ba={},sl={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function wh(){if(Tu)return he;Tu=1;var a=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function N(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,C={};function A(P,M,le){this.props=P,this.context=M,this.refs=C,this.updater=le||O}A.prototype.isReactComponent={},A.prototype.setState=function(P,M){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,M,"setState")},A.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function z(){}z.prototype=A.prototype;function L(P,M,le){this.props=P,this.context=M,this.refs=C,this.updater=le||O}var U=L.prototype=new z;U.constructor=L,B(U,A.prototype),U.isPureReactComponent=!0;var F=Array.isArray,q=Object.prototype.hasOwnProperty,I={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function V(P,M,le){var ue,fe={},ge=null,se=null;if(M!=null)for(ue in M.ref!==void 0&&(se=M.ref),M.key!==void 0&&(ge=""+M.key),M)q.call(M,ue)&&!j.hasOwnProperty(ue)&&(fe[ue]=M[ue]);var me=arguments.length-2;if(me===1)fe.children=le;else if(1<me){for(var je=Array(me),Ze=0;Ze<me;Ze++)je[Ze]=arguments[Ze+2];fe.children=je}if(P&&P.defaultProps)for(ue in me=P.defaultProps,me)fe[ue]===void 0&&(fe[ue]=me[ue]);return{$$typeof:a,type:P,key:ge,ref:se,props:fe,_owner:I.current}}function X(P,M){return{$$typeof:a,type:P.type,key:M,ref:P.ref,props:P.props,_owner:P._owner}}function K(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function pe(P){var M={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(le){return M[le]})}var Ne=/\/+/g;function De(P,M){return typeof P=="object"&&P!==null&&P.key!=null?pe(""+P.key):M.toString(36)}function Se(P,M,le,ue,fe){var ge=typeof P;(ge==="undefined"||ge==="boolean")&&(P=null);var se=!1;if(P===null)se=!0;else switch(ge){case"string":case"number":se=!0;break;case"object":switch(P.$$typeof){case a:case o:se=!0}}if(se)return se=P,fe=fe(se),P=ue===""?"."+De(se,0):ue,F(fe)?(le="",P!=null&&(le=P.replace(Ne,"$&/")+"/"),Se(fe,M,le,"",function(Ze){return Ze})):fe!=null&&(K(fe)&&(fe=X(fe,le+(!fe.key||se&&se.key===fe.key?"":(""+fe.key).replace(Ne,"$&/")+"/")+P)),M.push(fe)),1;if(se=0,ue=ue===""?".":ue+":",F(P))for(var me=0;me<P.length;me++){ge=P[me];var je=ue+De(ge,me);se+=Se(ge,M,le,je,fe)}else if(je=N(P),typeof je=="function")for(P=je.call(P),me=0;!(ge=P.next()).done;)ge=ge.value,je=ue+De(ge,me++),se+=Se(ge,M,le,je,fe);else if(ge==="object")throw M=String(P),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return se}function Ge(P,M,le){if(P==null)return P;var ue=[],fe=0;return Se(P,ue,"","",function(ge){return M.call(le,ge,fe++)}),ue}function Le(P){if(P._status===-1){var M=P._result;M=M(),M.then(function(le){(P._status===0||P._status===-1)&&(P._status=1,P._result=le)},function(le){(P._status===0||P._status===-1)&&(P._status=2,P._result=le)}),P._status===-1&&(P._status=0,P._result=M)}if(P._status===1)return P._result.default;throw P._result}var be={current:null},D={transition:null},J={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:D,ReactCurrentOwner:I};function $(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:Ge,forEach:function(P,M,le){Ge(P,function(){M.apply(this,arguments)},le)},count:function(P){var M=0;return Ge(P,function(){M++}),M},toArray:function(P){return Ge(P,function(M){return M})||[]},only:function(P){if(!K(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},he.Component=A,he.Fragment=i,he.Profiler=u,he.PureComponent=L,he.StrictMode=c,he.Suspense=g,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,he.act=$,he.cloneElement=function(P,M,le){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ue=B({},P.props),fe=P.key,ge=P.ref,se=P._owner;if(M!=null){if(M.ref!==void 0&&(ge=M.ref,se=I.current),M.key!==void 0&&(fe=""+M.key),P.type&&P.type.defaultProps)var me=P.type.defaultProps;for(je in M)q.call(M,je)&&!j.hasOwnProperty(je)&&(ue[je]=M[je]===void 0&&me!==void 0?me[je]:M[je])}var je=arguments.length-2;if(je===1)ue.children=le;else if(1<je){me=Array(je);for(var Ze=0;Ze<je;Ze++)me[Ze]=arguments[Ze+2];ue.children=me}return{$$typeof:a,type:P.type,key:fe,ref:ge,props:ue,_owner:se}},he.createContext=function(P){return P={$$typeof:m,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:p,_context:P},P.Consumer=P},he.createElement=V,he.createFactory=function(P){var M=V.bind(null,P);return M.type=P,M},he.createRef=function(){return{current:null}},he.forwardRef=function(P){return{$$typeof:f,render:P}},he.isValidElement=K,he.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:Le}},he.memo=function(P,M){return{$$typeof:b,type:P,compare:M===void 0?null:M}},he.startTransition=function(P){var M=D.transition;D.transition={};try{P()}finally{D.transition=M}},he.unstable_act=$,he.useCallback=function(P,M){return be.current.useCallback(P,M)},he.useContext=function(P){return be.current.useContext(P)},he.useDebugValue=function(){},he.useDeferredValue=function(P){return be.current.useDeferredValue(P)},he.useEffect=function(P,M){return be.current.useEffect(P,M)},he.useId=function(){return be.current.useId()},he.useImperativeHandle=function(P,M,le){return be.current.useImperativeHandle(P,M,le)},he.useInsertionEffect=function(P,M){return be.current.useInsertionEffect(P,M)},he.useLayoutEffect=function(P,M){return be.current.useLayoutEffect(P,M)},he.useMemo=function(P,M){return be.current.useMemo(P,M)},he.useReducer=function(P,M,le){return be.current.useReducer(P,M,le)},he.useRef=function(P){return be.current.useRef(P)},he.useState=function(P){return be.current.useState(P)},he.useSyncExternalStore=function(P,M,le){return be.current.useSyncExternalStore(P,M,le)},he.useTransition=function(){return be.current.useTransition()},he.version="18.3.1",he}var _u;function Pl(){return _u||(_u=1,sl.exports=wh()),sl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function Nh(){if(Au)return ba;Au=1;var a=Pl(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(f,g,b){var x,y={},N=null,O=null;b!==void 0&&(N=""+b),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(O=g.ref);for(x in g)c.call(g,x)&&!p.hasOwnProperty(x)&&(y[x]=g[x]);if(f&&f.defaultProps)for(x in g=f.defaultProps,g)y[x]===void 0&&(y[x]=g[x]);return{$$typeof:o,type:f,key:N,ref:O,props:y,_owner:u.current}}return ba.Fragment=i,ba.jsx=m,ba.jsxs=m,ba}var Ru;function Sh(){return Ru||(Ru=1,al.exports=Nh()),al.exports}var t=Sh(),k=Pl();const bp=vp(k),Ch=kh({__proto__:null,default:bp},[k]);var Ws={},ol={exports:{}},yt={},il={exports:{}},ll={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function Eh(){return Fu||(Fu=1,(function(a){function o(D,J){var $=D.length;D.push(J);e:for(;0<$;){var P=$-1>>>1,M=D[P];if(0<u(M,J))D[P]=J,D[$]=M,$=P;else break e}}function i(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var J=D[0],$=D.pop();if($!==J){D[0]=$;e:for(var P=0,M=D.length,le=M>>>1;P<le;){var ue=2*(P+1)-1,fe=D[ue],ge=ue+1,se=D[ge];if(0>u(fe,$))ge<M&&0>u(se,fe)?(D[P]=se,D[ge]=$,P=ge):(D[P]=fe,D[ue]=$,P=ue);else if(ge<M&&0>u(se,$))D[P]=se,D[ge]=$,P=ge;else break e}}return J}function u(D,J){var $=D.sortIndex-J.sortIndex;return $!==0?$:D.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var m=Date,f=m.now();a.unstable_now=function(){return m.now()-f}}var g=[],b=[],x=1,y=null,N=3,O=!1,B=!1,C=!1,A=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(D){for(var J=i(b);J!==null;){if(J.callback===null)c(b);else if(J.startTime<=D)c(b),J.sortIndex=J.expirationTime,o(g,J);else break;J=i(b)}}function F(D){if(C=!1,U(D),!B)if(i(g)!==null)B=!0,Le(q);else{var J=i(b);J!==null&&be(F,J.startTime-D)}}function q(D,J){B=!1,C&&(C=!1,z(V),V=-1),O=!0;var $=N;try{for(U(J),y=i(g);y!==null&&(!(y.expirationTime>J)||D&&!pe());){var P=y.callback;if(typeof P=="function"){y.callback=null,N=y.priorityLevel;var M=P(y.expirationTime<=J);J=a.unstable_now(),typeof M=="function"?y.callback=M:y===i(g)&&c(g),U(J)}else c(g);y=i(g)}if(y!==null)var le=!0;else{var ue=i(b);ue!==null&&be(F,ue.startTime-J),le=!1}return le}finally{y=null,N=$,O=!1}}var I=!1,j=null,V=-1,X=5,K=-1;function pe(){return!(a.unstable_now()-K<X)}function Ne(){if(j!==null){var D=a.unstable_now();K=D;var J=!0;try{J=j(!0,D)}finally{J?De():(I=!1,j=null)}}else I=!1}var De;if(typeof L=="function")De=function(){L(Ne)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ge=Se.port2;Se.port1.onmessage=Ne,De=function(){Ge.postMessage(null)}}else De=function(){A(Ne,0)};function Le(D){j=D,I||(I=!0,De())}function be(D,J){V=A(function(){D(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_continueExecution=function(){B||O||(B=!0,Le(q))},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return N},a.unstable_getFirstCallbackNode=function(){return i(g)},a.unstable_next=function(D){switch(N){case 1:case 2:case 3:var J=3;break;default:J=N}var $=N;N=J;try{return D()}finally{N=$}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(D,J){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=N;N=D;try{return J()}finally{N=$}},a.unstable_scheduleCallback=function(D,J,$){var P=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?P+$:P):$=P,D){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=$+M,D={id:x++,callback:J,priorityLevel:D,startTime:$,expirationTime:M,sortIndex:-1},$>P?(D.sortIndex=$,o(b,D),i(g)===null&&D===i(b)&&(C?(z(V),V=-1):C=!0,be(F,$-P))):(D.sortIndex=M,o(g,D),B||O||(B=!0,Le(q))),D},a.unstable_shouldYield=pe,a.unstable_wrapCallback=function(D){var J=N;return function(){var $=N;N=J;try{return D.apply(this,arguments)}finally{N=$}}}})(ll)),ll}var Du;function Ph(){return Du||(Du=1,il.exports=Eh()),il.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function zh(){if(Lu)return yt;Lu=1;var a=Pl(),o=Ph();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,u={};function p(e,r){m(e,r),m(e+"Capture",r)}function m(e,r){for(u[e]=r,e=0;e<r.length;e++)c.add(r[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function N(e){return g.call(y,e)?!0:g.call(x,e)?!1:b.test(e)?y[e]=!0:(x[e]=!0,!1)}function O(e,r,n,s){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,r,n,s){if(r===null||typeof r>"u"||O(e,r,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function C(e,r,n,s,l,d,h){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=d,this.removeEmptyString=h}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];A[r]=new C(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(z,L);A[r]=new C(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(z,L);A[r]=new C(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(z,L);A[r]=new C(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function U(e,r,n,s){var l=A.hasOwnProperty(r)?A[r]:null;(l!==null?l.type!==0:s||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(B(r,n,l,s)&&(n=null),s||l===null?N(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(r=l.attributeName,s=l.attributeNamespace,n===null?e.removeAttribute(r):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,s?e.setAttributeNS(s,r,n):e.setAttribute(r,n))))}var F=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),I=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),pe=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),D=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,P;function M(e){if(P===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);P=r&&r[1]||""}return`
`+P+e}var le=!1;function ue(e,r){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(R){var s=R}Reflect.construct(e,[],r)}else{try{r.call()}catch(R){s=R}e.call(r.prototype)}else{try{throw Error()}catch(R){s=R}e()}}catch(R){if(R&&s&&typeof R.stack=="string"){for(var l=R.stack.split(`
`),d=s.stack.split(`
`),h=l.length-1,v=d.length-1;1<=h&&0<=v&&l[h]!==d[v];)v--;for(;1<=h&&0<=v;h--,v--)if(l[h]!==d[v]){if(h!==1||v!==1)do if(h--,v--,0>v||l[h]!==d[v]){var w=`
`+l[h].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=h&&0<=v);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function fe(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function ge(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case I:return"Portal";case X:return"Profiler";case V:return"StrictMode";case De:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case K:return(e._context.displayName||"Context")+".Provider";case Ne:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ge:return r=e.displayName||null,r!==null?r:ge(e.type)||"Memo";case Le:r=e._payload,e=e._init;try{return ge(e(r))}catch{}}return null}function se(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(r);case 8:return r===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(e){var r=je(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),s=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,d=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(h){s=""+h,d.call(this,h)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function en(e){e._valueTracker||(e._valueTracker=Ze(e))}function ct(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),s="";return e&&(s=je(e)?e.checked?"true":"false":e.value),e=s,e!==n?(r.setValue(e),!0):!1}function dt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jt(e,r){var n=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dn(e,r){var n=r.defaultValue==null?"":r.defaultValue,s=r.checked!=null?r.checked:r.defaultChecked;n=me(r.value!=null?r.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function tn(e,r){r=r.checked,r!=null&&U(e,"checked",r,!1)}function kt(e,r){tn(e,r);var n=me(r.value),s=r.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Ie(e,r.type,n):r.hasOwnProperty("defaultValue")&&Ie(e,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function de(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var s=r.type;if(!(s!=="submit"&&s!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ie(e,r,n){(r!=="number"||dt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ut=Array.isArray;function pt(e,r,n,s){if(e=e.options,r){r={};for(var l=0;l<n.length;l++)r["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=r.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&s&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),r=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function rn(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(i(92));if(ut(n)){if(1<n.length)throw Error(i(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:me(n)}}function ir(e,r){var n=me(r.value),s=me(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function ql(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Hl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Hl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oa,$l=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,s,l){MSApp.execUnsafeLocalFunction(function(){return e(r,n,s,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ln(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sm=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Sm.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),On[r]=On[e]})});function Wl(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||On.hasOwnProperty(e)&&On[e]?(""+r).trim():r+"px"}function Vl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var s=n.indexOf("--")===0,l=Wl(n,r[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,l):e[n]=l}}var Cm=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function go(e,r){if(r){if(Cm[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function xo(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bo=null,nn=null,an=null;function Ql(e){if(e=sa(e)){if(typeof bo!="function")throw Error(i(280));var r=e.stateNode;r&&(r=os(r),bo(e.stateNode,e.type,r))}}function Kl(e){nn?an?an.push(e):an=[e]:nn=e}function Gl(){if(nn){var e=nn,r=an;if(an=nn=null,Ql(e),r)for(e=0;e<r.length;e++)Ql(r[e])}}function Yl(e,r){return e(r)}function Xl(){}var jo=!1;function Jl(e,r,n){if(jo)return e(r,n);jo=!0;try{return Yl(e,r,n)}finally{jo=!1,(nn!==null||an!==null)&&(Xl(),Gl())}}function Mn(e,r){var n=e.stateNode;if(n===null)return null;var s=os(n);if(s===null)return null;n=s[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,r,typeof n));return n}var ko=!1;if(f)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{ko=!1}function Em(e,r,n,s,l,d,h,v,w){var R=Array.prototype.slice.call(arguments,3);try{r.apply(n,R)}catch(W){this.onError(W)}}var In=!1,Ma=null,Ba=!1,wo=null,Pm={onError:function(e){In=!0,Ma=e}};function zm(e,r,n,s,l,d,h,v,w){In=!1,Ma=null,Em.apply(Pm,arguments)}function Tm(e,r,n,s,l,d,h,v,w){if(zm.apply(this,arguments),In){if(In){var R=Ma;In=!1,Ma=null}else throw Error(i(198));Ba||(Ba=!0,wo=R)}}function Dr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Zl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function ec(e){if(Dr(e)!==e)throw Error(i(188))}function _m(e){var r=e.alternate;if(!r){if(r=Dr(e),r===null)throw Error(i(188));return r!==e?null:e}for(var n=e,s=r;;){var l=n.return;if(l===null)break;var d=l.alternate;if(d===null){if(s=l.return,s!==null){n=s;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===n)return ec(l),e;if(d===s)return ec(l),r;d=d.sibling}throw Error(i(188))}if(n.return!==s.return)n=l,s=d;else{for(var h=!1,v=l.child;v;){if(v===n){h=!0,n=l,s=d;break}if(v===s){h=!0,s=l,n=d;break}v=v.sibling}if(!h){for(v=d.child;v;){if(v===n){h=!0,n=d,s=l;break}if(v===s){h=!0,s=d,n=l;break}v=v.sibling}if(!h)throw Error(i(189))}}if(n.alternate!==s)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:r}function tc(e){return e=_m(e),e!==null?rc(e):null}function rc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=rc(e);if(r!==null)return r;e=e.sibling}return null}var nc=o.unstable_scheduleCallback,ac=o.unstable_cancelCallback,Am=o.unstable_shouldYield,Rm=o.unstable_requestPaint,Oe=o.unstable_now,Fm=o.unstable_getCurrentPriorityLevel,No=o.unstable_ImmediatePriority,sc=o.unstable_UserBlockingPriority,Ia=o.unstable_NormalPriority,Dm=o.unstable_LowPriority,oc=o.unstable_IdlePriority,Ua=null,Qt=null;function Lm(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Bm,Om=Math.log,Mm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(Om(e)/Mm|0)|0}var qa=64,Ha=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $a(e,r){var n=e.pendingLanes;if(n===0)return 0;var s=0,l=e.suspendedLanes,d=e.pingedLanes,h=n&268435455;if(h!==0){var v=h&~l;v!==0?s=Un(v):(d&=h,d!==0&&(s=Un(d)))}else h=n&~l,h!==0?s=Un(h):d!==0&&(s=Un(d));if(s===0)return 0;if(r!==0&&r!==s&&(r&l)===0&&(l=s&-s,d=r&-r,l>=d||l===16&&(d&4194240)!==0))return r;if((s&4)!==0&&(s|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=s;0<r;)n=31-Bt(r),l=1<<n,s|=e[n],r&=~l;return s}function Im(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Um(e,r){for(var n=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Bt(d),v=1<<h,w=l[h];w===-1?((v&n)===0||(v&s)!==0)&&(l[h]=Im(v,r)):w<=r&&(e.expiredLanes|=v),d&=~v}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ic(){var e=qa;return qa<<=1,(qa&4194240)===0&&(qa=64),e}function Co(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function qn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Bt(r),e[r]=n}function qm(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Bt(n),d=1<<l;r[l]=0,s[l]=-1,e[l]=-1,n&=~d}}function Eo(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var s=31-Bt(n),l=1<<s;l&r|e[s]&r&&(e[s]|=r),n&=~l}}var ke=0;function lc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cc,Po,dc,uc,pc,zo=!1,Wa=[],lr=null,cr=null,dr=null,Hn=new Map,$n=new Map,ur=[],Hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(e,r){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Hn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(r.pointerId)}}function Wn(e,r,n,s,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:r,domEventName:n,eventSystemFlags:s,nativeEvent:d,targetContainers:[l]},r!==null&&(r=sa(r),r!==null&&Po(r)),e):(e.eventSystemFlags|=s,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function $m(e,r,n,s,l){switch(r){case"focusin":return lr=Wn(lr,e,r,n,s,l),!0;case"dragenter":return cr=Wn(cr,e,r,n,s,l),!0;case"mouseover":return dr=Wn(dr,e,r,n,s,l),!0;case"pointerover":var d=l.pointerId;return Hn.set(d,Wn(Hn.get(d)||null,e,r,n,s,l)),!0;case"gotpointercapture":return d=l.pointerId,$n.set(d,Wn($n.get(d)||null,e,r,n,s,l)),!0}return!1}function fc(e){var r=Lr(e.target);if(r!==null){var n=Dr(r);if(n!==null){if(r=n.tag,r===13){if(r=Zl(n),r!==null){e.blockedOn=r,pc(e.priority,function(){dc(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Va(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=_o(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);yo=s,n.target.dispatchEvent(s),yo=null}else return r=sa(n),r!==null&&Po(r),e.blockedOn=n,!1;r.shift()}return!0}function hc(e,r,n){Va(e)&&n.delete(r)}function Wm(){zo=!1,lr!==null&&Va(lr)&&(lr=null),cr!==null&&Va(cr)&&(cr=null),dr!==null&&Va(dr)&&(dr=null),Hn.forEach(hc),$n.forEach(hc)}function Vn(e,r){e.blockedOn===r&&(e.blockedOn=null,zo||(zo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wm)))}function Qn(e){function r(l){return Vn(l,e)}if(0<Wa.length){Vn(Wa[0],e);for(var n=1;n<Wa.length;n++){var s=Wa[n];s.blockedOn===e&&(s.blockedOn=null)}}for(lr!==null&&Vn(lr,e),cr!==null&&Vn(cr,e),dr!==null&&Vn(dr,e),Hn.forEach(r),$n.forEach(r),n=0;n<ur.length;n++)s=ur[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)fc(n),n.blockedOn===null&&ur.shift()}var sn=F.ReactCurrentBatchConfig,Qa=!0;function Vm(e,r,n,s){var l=ke,d=sn.transition;sn.transition=null;try{ke=1,To(e,r,n,s)}finally{ke=l,sn.transition=d}}function Qm(e,r,n,s){var l=ke,d=sn.transition;sn.transition=null;try{ke=4,To(e,r,n,s)}finally{ke=l,sn.transition=d}}function To(e,r,n,s){if(Qa){var l=_o(e,r,n,s);if(l===null)Ko(e,r,s,Ka,n),mc(e,s);else if($m(l,e,r,n,s))s.stopPropagation();else if(mc(e,s),r&4&&-1<Hm.indexOf(e)){for(;l!==null;){var d=sa(l);if(d!==null&&cc(d),d=_o(e,r,n,s),d===null&&Ko(e,r,s,Ka,n),d===l)break;l=d}l!==null&&s.stopPropagation()}else Ko(e,r,s,null,n)}}var Ka=null;function _o(e,r,n,s){if(Ka=null,e=vo(s),e=Lr(e),e!==null)if(r=Dr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Zl(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Ka=e,null}function gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fm()){case No:return 1;case sc:return 4;case Ia:case Dm:return 16;case oc:return 536870912;default:return 16}default:return 16}}var pr=null,Ao=null,Ga=null;function xc(){if(Ga)return Ga;var e,r=Ao,n=r.length,s,l="value"in pr?pr.value:pr.textContent,d=l.length;for(e=0;e<n&&r[e]===l[e];e++);var h=n-e;for(s=1;s<=h&&r[n-s]===l[d-s];s++);return Ga=l.slice(e,1<s?1-s:void 0)}function Ya(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function yc(){return!1}function wt(e){function r(n,s,l,d,h){this._reactName=n,this._targetInst=l,this.type=s,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(d):d[v]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Xa:yc,this.isPropagationStopped=yc,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),r}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=wt(on),Kn=$({},on,{view:0,detail:0}),Km=wt(Kn),Fo,Do,Gn,Ja=$({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Fo=e.screenX-Gn.screenX,Do=e.screenY-Gn.screenY):Do=Fo=0,Gn=e),Fo)},movementY:function(e){return"movementY"in e?e.movementY:Do}}),vc=wt(Ja),Gm=$({},Ja,{dataTransfer:0}),Ym=wt(Gm),Xm=$({},Kn,{relatedTarget:0}),Lo=wt(Xm),Jm=$({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=wt(Jm),ef=$({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tf=wt(ef),rf=$({},on,{data:0}),bc=wt(rf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function of(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=sf[e])?!!r[e]:!1}function Oo(){return of}var lf=$({},Kn,{key:function(e){if(e.key){var r=nf[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(e){return e.type==="keypress"?Ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cf=wt(lf),df=$({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=wt(df),uf=$({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),pf=wt(uf),mf=$({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=wt(mf),hf=$({},Ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=wt(hf),xf=[9,13,27,32],Mo=f&&"CompositionEvent"in window,Yn=null;f&&"documentMode"in document&&(Yn=document.documentMode);var yf=f&&"TextEvent"in window&&!Yn,kc=f&&(!Mo||Yn&&8<Yn&&11>=Yn),wc=" ",Nc=!1;function Sc(e,r){switch(e){case"keyup":return xf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function vf(e,r){switch(e){case"compositionend":return Cc(r);case"keypress":return r.which!==32?null:(Nc=!0,wc);case"textInput":return e=r.data,e===wc&&Nc?null:e;default:return null}}function bf(e,r){if(ln)return e==="compositionend"||!Mo&&Sc(e,r)?(e=xc(),Ga=Ao=pr=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return kc&&r.locale!=="ko"?null:r.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!jf[e.type]:r==="textarea"}function Pc(e,r,n,s){Kl(s),r=ns(r,"onChange"),0<r.length&&(n=new Ro("onChange","change",null,n,s),e.push({event:n,listeners:r}))}var Xn=null,Jn=null;function kf(e){Vc(e,0)}function Za(e){var r=mn(e);if(ct(r))return e}function wf(e,r){if(e==="change")return r}var zc=!1;if(f){var Bo;if(f){var Io="oninput"in document;if(!Io){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),Io=typeof Tc.oninput=="function"}Bo=Io}else Bo=!1;zc=Bo&&(!document.documentMode||9<document.documentMode)}function _c(){Xn&&(Xn.detachEvent("onpropertychange",Ac),Jn=Xn=null)}function Ac(e){if(e.propertyName==="value"&&Za(Jn)){var r=[];Pc(r,Jn,e,vo(e)),Jl(kf,r)}}function Nf(e,r,n){e==="focusin"?(_c(),Xn=r,Jn=n,Xn.attachEvent("onpropertychange",Ac)):e==="focusout"&&_c()}function Sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(Jn)}function Cf(e,r){if(e==="click")return Za(r)}function Ef(e,r){if(e==="input"||e==="change")return Za(r)}function Pf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var It=typeof Object.is=="function"?Object.is:Pf;function Zn(e,r){if(It(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var l=n[s];if(!g.call(r,l)||!It(e[l],r[l]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,r){var n=Rc(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=r&&s>=r)return{node:n,offset:r-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rc(n)}}function Dc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Dc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Lc(){for(var e=window,r=dt();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=dt(e.document)}return r}function Uo(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function zf(e){var r=Lc(),n=e.focusedElem,s=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Dc(n.ownerDocument.documentElement,n)){if(s!==null&&Uo(n)){if(r=s.start,e=s.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,d=Math.min(s.start,l);s=s.end===void 0?d:Math.min(s.end,l),!e.extend&&d>s&&(l=s,s=d,d=l),l=Fc(n,d);var h=Fc(n,s);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),d>s?(e.addRange(r),e.extend(h.node,h.offset)):(r.setEnd(h.node,h.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=f&&"documentMode"in document&&11>=document.documentMode,cn=null,qo=null,ea=null,Ho=!1;function Oc(e,r,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ho||cn==null||cn!==dt(s)||(s=cn,"selectionStart"in s&&Uo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ea&&Zn(ea,s)||(ea=s,s=ns(qo,"onSelect"),0<s.length&&(r=new Ro("onSelect","select",null,r,n),e.push({event:r,listeners:s}),r.target=cn)))}function es(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var dn={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},$o={},Mc={};f&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function ts(e){if($o[e])return $o[e];if(!dn[e])return e;var r=dn[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Mc)return $o[e]=r[n];return e}var Bc=ts("animationend"),Ic=ts("animationiteration"),Uc=ts("animationstart"),qc=ts("transitionend"),Hc=new Map,$c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(e,r){Hc.set(e,r),p(r,[e])}for(var Wo=0;Wo<$c.length;Wo++){var Vo=$c[Wo],_f=Vo.toLowerCase(),Af=Vo[0].toUpperCase()+Vo.slice(1);mr(_f,"on"+Af)}mr(Bc,"onAnimationEnd"),mr(Ic,"onAnimationIteration"),mr(Uc,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(qc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Wc(e,r,n){var s=e.type||"unknown-event";e.currentTarget=n,Tm(s,r,void 0,e),e.currentTarget=null}function Vc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],l=s.event;s=s.listeners;e:{var d=void 0;if(r)for(var h=s.length-1;0<=h;h--){var v=s[h],w=v.instance,R=v.currentTarget;if(v=v.listener,w!==d&&l.isPropagationStopped())break e;Wc(l,v,R),d=w}else for(h=0;h<s.length;h++){if(v=s[h],w=v.instance,R=v.currentTarget,v=v.listener,w!==d&&l.isPropagationStopped())break e;Wc(l,v,R),d=w}}}if(Ba)throw e=wo,Ba=!1,wo=null,e}function Ce(e,r){var n=r[ei];n===void 0&&(n=r[ei]=new Set);var s=e+"__bubble";n.has(s)||(Qc(r,e,2,!1),n.add(s))}function Qo(e,r,n){var s=0;r&&(s|=4),Qc(n,e,s,r)}var rs="_reactListening"+Math.random().toString(36).slice(2);function ra(e){if(!e[rs]){e[rs]=!0,c.forEach(function(n){n!=="selectionchange"&&(Rf.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[rs]||(r[rs]=!0,Qo("selectionchange",!1,r))}}function Qc(e,r,n,s){switch(gc(r)){case 1:var l=Vm;break;case 4:l=Qm;break;default:l=To}n=l.bind(null,r,n,e),l=void 0,!ko||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(r,n,{capture:!0,passive:l}):e.addEventListener(r,n,!0):l!==void 0?e.addEventListener(r,n,{passive:l}):e.addEventListener(r,n,!1)}function Ko(e,r,n,s,l){var d=s;if((r&1)===0&&(r&2)===0&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var v=s.stateNode.containerInfo;if(v===l||v.nodeType===8&&v.parentNode===l)break;if(h===4)for(h=s.return;h!==null;){var w=h.tag;if((w===3||w===4)&&(w=h.stateNode.containerInfo,w===l||w.nodeType===8&&w.parentNode===l))return;h=h.return}for(;v!==null;){if(h=Lr(v),h===null)return;if(w=h.tag,w===5||w===6){s=d=h;continue e}v=v.parentNode}}s=s.return}Jl(function(){var R=d,W=vo(n),Q=[];e:{var H=Hc.get(e);if(H!==void 0){var Z=Ro,te=e;switch(e){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":Z=cf;break;case"focusin":te="focus",Z=Lo;break;case"focusout":te="blur",Z=Lo;break;case"beforeblur":case"afterblur":Z=Lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=pf;break;case Bc:case Ic:case Uc:Z=Zm;break;case qc:Z=ff;break;case"scroll":Z=Km;break;case"wheel":Z=gf;break;case"copy":case"cut":case"paste":Z=tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=jc}var re=(r&4)!==0,Me=!re&&e==="scroll",T=re?H!==null?H+"Capture":null:H;re=[];for(var E=R,_;E!==null;){_=E;var G=_.stateNode;if(_.tag===5&&G!==null&&(_=G,T!==null&&(G=Mn(E,T),G!=null&&re.push(na(E,G,_)))),Me)break;E=E.return}0<re.length&&(H=new Z(H,te,null,n,W),Q.push({event:H,listeners:re}))}}if((r&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",H&&n!==yo&&(te=n.relatedTarget||n.fromElement)&&(Lr(te)||te[Jt]))break e;if((Z||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,Z?(te=n.relatedTarget||n.toElement,Z=R,te=te?Lr(te):null,te!==null&&(Me=Dr(te),te!==Me||te.tag!==5&&te.tag!==6)&&(te=null)):(Z=null,te=R),Z!==te)){if(re=vc,G="onMouseLeave",T="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(re=jc,G="onPointerLeave",T="onPointerEnter",E="pointer"),Me=Z==null?H:mn(Z),_=te==null?H:mn(te),H=new re(G,E+"leave",Z,n,W),H.target=Me,H.relatedTarget=_,G=null,Lr(W)===R&&(re=new re(T,E+"enter",te,n,W),re.target=_,re.relatedTarget=Me,G=re),Me=G,Z&&te)t:{for(re=Z,T=te,E=0,_=re;_;_=un(_))E++;for(_=0,G=T;G;G=un(G))_++;for(;0<E-_;)re=un(re),E--;for(;0<_-E;)T=un(T),_--;for(;E--;){if(re===T||T!==null&&re===T.alternate)break t;re=un(re),T=un(T)}re=null}else re=null;Z!==null&&Kc(Q,H,Z,re,!1),te!==null&&Me!==null&&Kc(Q,Me,te,re,!0)}}e:{if(H=R?mn(R):window,Z=H.nodeName&&H.nodeName.toLowerCase(),Z==="select"||Z==="input"&&H.type==="file")var ne=wf;else if(Ec(H))if(zc)ne=Ef;else{ne=Sf;var oe=Nf}else(Z=H.nodeName)&&Z.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ne=Cf);if(ne&&(ne=ne(e,R))){Pc(Q,ne,n,W);break e}oe&&oe(e,H,R),e==="focusout"&&(oe=H._wrapperState)&&oe.controlled&&H.type==="number"&&Ie(H,"number",H.value)}switch(oe=R?mn(R):window,e){case"focusin":(Ec(oe)||oe.contentEditable==="true")&&(cn=oe,qo=R,ea=null);break;case"focusout":ea=qo=cn=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,Oc(Q,n,W);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":Oc(Q,n,W)}var ie;if(Mo)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ln?Sc(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(kc&&n.locale!=="ko"&&(ln||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ln&&(ie=xc()):(pr=W,Ao="value"in pr?pr.value:pr.textContent,ln=!0)),oe=ns(R,ce),0<oe.length&&(ce=new bc(ce,e,null,n,W),Q.push({event:ce,listeners:oe}),ie?ce.data=ie:(ie=Cc(n),ie!==null&&(ce.data=ie)))),(ie=yf?vf(e,n):bf(e,n))&&(R=ns(R,"onBeforeInput"),0<R.length&&(W=new bc("onBeforeInput","beforeinput",null,n,W),Q.push({event:W,listeners:R}),W.data=ie))}Vc(Q,r)})}function na(e,r,n){return{instance:e,listener:r,currentTarget:n}}function ns(e,r){for(var n=r+"Capture",s=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=Mn(e,n),d!=null&&s.unshift(na(e,d,l)),d=Mn(e,r),d!=null&&s.push(na(e,d,l))),e=e.return}return s}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kc(e,r,n,s,l){for(var d=r._reactName,h=[];n!==null&&n!==s;){var v=n,w=v.alternate,R=v.stateNode;if(w!==null&&w===s)break;v.tag===5&&R!==null&&(v=R,l?(w=Mn(n,d),w!=null&&h.unshift(na(n,w,v))):l||(w=Mn(n,d),w!=null&&h.push(na(n,w,v)))),n=n.return}h.length!==0&&e.push({event:r,listeners:h})}var Ff=/\r\n?/g,Df=/\u0000|\uFFFD/g;function Gc(e){return(typeof e=="string"?e:""+e).replace(Ff,`
`).replace(Df,"")}function as(e,r,n){if(r=Gc(r),Gc(e)!==r&&n)throw Error(i(425))}function ss(){}var Go=null,Yo=null;function Xo(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jo=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,Of=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(Mf)}:Jo;function Mf(e){setTimeout(function(){throw e})}function Zo(e,r){var n=r,s=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(s===0){e.removeChild(l),Qn(r);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=l}while(n);Qn(r)}function fr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Xc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var pn=Math.random().toString(36).slice(2),Kt="__reactFiber$"+pn,aa="__reactProps$"+pn,Jt="__reactContainer$"+pn,ei="__reactEvents$"+pn,Bf="__reactListeners$"+pn,If="__reactHandles$"+pn;function Lr(e){var r=e[Kt];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Jt]||n[Kt]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Xc(e);e!==null;){if(n=e[Kt])return n;e=Xc(e)}return r}e=n,n=e.parentNode}return null}function sa(e){return e=e[Kt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function os(e){return e[aa]||null}var ti=[],fn=-1;function hr(e){return{current:e}}function Ee(e){0>fn||(e.current=ti[fn],ti[fn]=null,fn--)}function we(e,r){fn++,ti[fn]=e.current,e.current=r}var gr={},et=hr(gr),mt=hr(!1),Or=gr;function hn(e,r){var n=e.type.contextTypes;if(!n)return gr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===r)return s.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in n)l[d]=r[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function ft(e){return e=e.childContextTypes,e!=null}function is(){Ee(mt),Ee(et)}function Jc(e,r,n){if(et.current!==gr)throw Error(i(168));we(et,r),we(mt,n)}function Zc(e,r,n){var s=e.stateNode;if(r=r.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var l in s)if(!(l in r))throw Error(i(108,se(e)||"Unknown",l));return $({},n,s)}function ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Or=et.current,we(et,e),we(mt,mt.current),!0}function ed(e,r,n){var s=e.stateNode;if(!s)throw Error(i(169));n?(e=Zc(e,r,Or),s.__reactInternalMemoizedMergedChildContext=e,Ee(mt),Ee(et),we(et,e)):Ee(mt),we(mt,n)}var Zt=null,cs=!1,ri=!1;function td(e){Zt===null?Zt=[e]:Zt.push(e)}function Uf(e){cs=!0,td(e)}function xr(){if(!ri&&Zt!==null){ri=!0;var e=0,r=ke;try{var n=Zt;for(ke=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Zt=null,cs=!1}catch(l){throw Zt!==null&&(Zt=Zt.slice(e+1)),nc(No,xr),l}finally{ke=r,ri=!1}}return null}var gn=[],xn=0,ds=null,us=0,Et=[],Pt=0,Mr=null,er=1,tr="";function Br(e,r){gn[xn++]=us,gn[xn++]=ds,ds=e,us=r}function rd(e,r,n){Et[Pt++]=er,Et[Pt++]=tr,Et[Pt++]=Mr,Mr=e;var s=er;e=tr;var l=32-Bt(s)-1;s&=~(1<<l),n+=1;var d=32-Bt(r)+l;if(30<d){var h=l-l%5;d=(s&(1<<h)-1).toString(32),s>>=h,l-=h,er=1<<32-Bt(r)+l|n<<l|s,tr=d+e}else er=1<<d|n<<l|s,tr=e}function ni(e){e.return!==null&&(Br(e,1),rd(e,1,0))}function ai(e){for(;e===ds;)ds=gn[--xn],gn[xn]=null,us=gn[--xn],gn[xn]=null;for(;e===Mr;)Mr=Et[--Pt],Et[Pt]=null,tr=Et[--Pt],Et[Pt]=null,er=Et[--Pt],Et[Pt]=null}var Nt=null,St=null,ze=!1,Ut=null;function nd(e,r){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function ad(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Nt=e,St=fr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Nt=e,St=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Mr!==null?{id:er,overflow:tr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Nt=e,St=null,!0):!1;default:return!1}}function si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oi(e){if(ze){var r=St;if(r){var n=r;if(!ad(e,r)){if(si(e))throw Error(i(418));r=fr(n.nextSibling);var s=Nt;r&&ad(e,r)?nd(s,n):(e.flags=e.flags&-4097|2,ze=!1,Nt=e)}}else{if(si(e))throw Error(i(418));e.flags=e.flags&-4097|2,ze=!1,Nt=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function ps(e){if(e!==Nt)return!1;if(!ze)return sd(e),ze=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Xo(e.type,e.memoizedProps)),r&&(r=St)){if(si(e))throw od(),Error(i(418));for(;r;)nd(e,r),r=fr(r.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){St=fr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}St=null}}else St=Nt?fr(e.stateNode.nextSibling):null;return!0}function od(){for(var e=St;e;)e=fr(e.nextSibling)}function yn(){St=Nt=null,ze=!1}function ii(e){Ut===null?Ut=[e]:Ut.push(e)}var qf=F.ReactCurrentBatchConfig;function oa(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var s=n.stateNode}if(!s)throw Error(i(147,e));var l=s,d=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===d?r.ref:(r=function(h){var v=l.refs;h===null?delete v[d]:v[d]=h},r._stringRef=d,r)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function ms(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function id(e){var r=e._init;return r(e._payload)}function ld(e){function r(T,E){if(e){var _=T.deletions;_===null?(T.deletions=[E],T.flags|=16):_.push(E)}}function n(T,E){if(!e)return null;for(;E!==null;)r(T,E),E=E.sibling;return null}function s(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function l(T,E){return T=Sr(T,E),T.index=0,T.sibling=null,T}function d(T,E,_){return T.index=_,e?(_=T.alternate,_!==null?(_=_.index,_<E?(T.flags|=2,E):_):(T.flags|=2,E)):(T.flags|=1048576,E)}function h(T){return e&&T.alternate===null&&(T.flags|=2),T}function v(T,E,_,G){return E===null||E.tag!==6?(E=Ji(_,T.mode,G),E.return=T,E):(E=l(E,_),E.return=T,E)}function w(T,E,_,G){var ne=_.type;return ne===j?W(T,E,_.props.children,G,_.key):E!==null&&(E.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Le&&id(ne)===E.type)?(G=l(E,_.props),G.ref=oa(T,E,_),G.return=T,G):(G=Os(_.type,_.key,_.props,null,T.mode,G),G.ref=oa(T,E,_),G.return=T,G)}function R(T,E,_,G){return E===null||E.tag!==4||E.stateNode.containerInfo!==_.containerInfo||E.stateNode.implementation!==_.implementation?(E=Zi(_,T.mode,G),E.return=T,E):(E=l(E,_.children||[]),E.return=T,E)}function W(T,E,_,G,ne){return E===null||E.tag!==7?(E=Qr(_,T.mode,G,ne),E.return=T,E):(E=l(E,_),E.return=T,E)}function Q(T,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Ji(""+E,T.mode,_),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case q:return _=Os(E.type,E.key,E.props,null,T.mode,_),_.ref=oa(T,null,E),_.return=T,_;case I:return E=Zi(E,T.mode,_),E.return=T,E;case Le:var G=E._init;return Q(T,G(E._payload),_)}if(ut(E)||J(E))return E=Qr(E,T.mode,_,null),E.return=T,E;ms(T,E)}return null}function H(T,E,_,G){var ne=E!==null?E.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return ne!==null?null:v(T,E,""+_,G);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case q:return _.key===ne?w(T,E,_,G):null;case I:return _.key===ne?R(T,E,_,G):null;case Le:return ne=_._init,H(T,E,ne(_._payload),G)}if(ut(_)||J(_))return ne!==null?null:W(T,E,_,G,null);ms(T,_)}return null}function Z(T,E,_,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return T=T.get(_)||null,v(E,T,""+G,ne);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case q:return T=T.get(G.key===null?_:G.key)||null,w(E,T,G,ne);case I:return T=T.get(G.key===null?_:G.key)||null,R(E,T,G,ne);case Le:var oe=G._init;return Z(T,E,_,oe(G._payload),ne)}if(ut(G)||J(G))return T=T.get(_)||null,W(E,T,G,ne,null);ms(E,G)}return null}function te(T,E,_,G){for(var ne=null,oe=null,ie=E,ce=E=0,Qe=null;ie!==null&&ce<_.length;ce++){ie.index>ce?(Qe=ie,ie=null):Qe=ie.sibling;var ve=H(T,ie,_[ce],G);if(ve===null){ie===null&&(ie=Qe);break}e&&ie&&ve.alternate===null&&r(T,ie),E=d(ve,E,ce),oe===null?ne=ve:oe.sibling=ve,oe=ve,ie=Qe}if(ce===_.length)return n(T,ie),ze&&Br(T,ce),ne;if(ie===null){for(;ce<_.length;ce++)ie=Q(T,_[ce],G),ie!==null&&(E=d(ie,E,ce),oe===null?ne=ie:oe.sibling=ie,oe=ie);return ze&&Br(T,ce),ne}for(ie=s(T,ie);ce<_.length;ce++)Qe=Z(ie,T,ce,_[ce],G),Qe!==null&&(e&&Qe.alternate!==null&&ie.delete(Qe.key===null?ce:Qe.key),E=d(Qe,E,ce),oe===null?ne=Qe:oe.sibling=Qe,oe=Qe);return e&&ie.forEach(function(Cr){return r(T,Cr)}),ze&&Br(T,ce),ne}function re(T,E,_,G){var ne=J(_);if(typeof ne!="function")throw Error(i(150));if(_=ne.call(_),_==null)throw Error(i(151));for(var oe=ne=null,ie=E,ce=E=0,Qe=null,ve=_.next();ie!==null&&!ve.done;ce++,ve=_.next()){ie.index>ce?(Qe=ie,ie=null):Qe=ie.sibling;var Cr=H(T,ie,ve.value,G);if(Cr===null){ie===null&&(ie=Qe);break}e&&ie&&Cr.alternate===null&&r(T,ie),E=d(Cr,E,ce),oe===null?ne=Cr:oe.sibling=Cr,oe=Cr,ie=Qe}if(ve.done)return n(T,ie),ze&&Br(T,ce),ne;if(ie===null){for(;!ve.done;ce++,ve=_.next())ve=Q(T,ve.value,G),ve!==null&&(E=d(ve,E,ce),oe===null?ne=ve:oe.sibling=ve,oe=ve);return ze&&Br(T,ce),ne}for(ie=s(T,ie);!ve.done;ce++,ve=_.next())ve=Z(ie,T,ce,ve.value,G),ve!==null&&(e&&ve.alternate!==null&&ie.delete(ve.key===null?ce:ve.key),E=d(ve,E,ce),oe===null?ne=ve:oe.sibling=ve,oe=ve);return e&&ie.forEach(function(jh){return r(T,jh)}),ze&&Br(T,ce),ne}function Me(T,E,_,G){if(typeof _=="object"&&_!==null&&_.type===j&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case q:e:{for(var ne=_.key,oe=E;oe!==null;){if(oe.key===ne){if(ne=_.type,ne===j){if(oe.tag===7){n(T,oe.sibling),E=l(oe,_.props.children),E.return=T,T=E;break e}}else if(oe.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Le&&id(ne)===oe.type){n(T,oe.sibling),E=l(oe,_.props),E.ref=oa(T,oe,_),E.return=T,T=E;break e}n(T,oe);break}else r(T,oe);oe=oe.sibling}_.type===j?(E=Qr(_.props.children,T.mode,G,_.key),E.return=T,T=E):(G=Os(_.type,_.key,_.props,null,T.mode,G),G.ref=oa(T,E,_),G.return=T,T=G)}return h(T);case I:e:{for(oe=_.key;E!==null;){if(E.key===oe)if(E.tag===4&&E.stateNode.containerInfo===_.containerInfo&&E.stateNode.implementation===_.implementation){n(T,E.sibling),E=l(E,_.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else r(T,E);E=E.sibling}E=Zi(_,T.mode,G),E.return=T,T=E}return h(T);case Le:return oe=_._init,Me(T,E,oe(_._payload),G)}if(ut(_))return te(T,E,_,G);if(J(_))return re(T,E,_,G);ms(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,E!==null&&E.tag===6?(n(T,E.sibling),E=l(E,_),E.return=T,T=E):(n(T,E),E=Ji(_,T.mode,G),E.return=T,T=E),h(T)):n(T,E)}return Me}var vn=ld(!0),cd=ld(!1),fs=hr(null),hs=null,bn=null,li=null;function ci(){li=bn=hs=null}function di(e){var r=fs.current;Ee(fs),e._currentValue=r}function ui(e,r,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,s!==null&&(s.childLanes|=r)):s!==null&&(s.childLanes&r)!==r&&(s.childLanes|=r),e===n)break;e=e.return}}function jn(e,r){hs=e,li=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(ht=!0),e.firstContext=null)}function zt(e){var r=e._currentValue;if(li!==e)if(e={context:e,memoizedValue:r,next:null},bn===null){if(hs===null)throw Error(i(308));bn=e,hs.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return r}var Ir=null;function pi(e){Ir===null?Ir=[e]:Ir.push(e)}function dd(e,r,n,s){var l=r.interleaved;return l===null?(n.next=n,pi(r)):(n.next=l.next,l.next=n),r.interleaved=n,rr(e,s)}function rr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yr=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ud(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function vr(e,r,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(xe&2)!==0){var l=s.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),s.pending=r,rr(e,n)}return l=s.interleaved,l===null?(r.next=r,pi(s)):(r.next=l.next,l.next=r),s.interleaved=r,rr(e,n)}function gs(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var s=r.lanes;s&=e.pendingLanes,n|=s,r.lanes=n,Eo(e,n)}}function pd(e,r){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var l=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var h={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?l=d=h:d=d.next=h,n=n.next}while(n!==null);d===null?l=d=r:d=d.next=r}else l=d=r;n={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function xs(e,r,n,s){var l=e.updateQueue;yr=!1;var d=l.firstBaseUpdate,h=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var w=v,R=w.next;w.next=null,h===null?d=R:h.next=R,h=w;var W=e.alternate;W!==null&&(W=W.updateQueue,v=W.lastBaseUpdate,v!==h&&(v===null?W.firstBaseUpdate=R:v.next=R,W.lastBaseUpdate=w))}if(d!==null){var Q=l.baseState;h=0,W=R=w=null,v=d;do{var H=v.lane,Z=v.eventTime;if((s&H)===H){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var te=e,re=v;switch(H=r,Z=n,re.tag){case 1:if(te=re.payload,typeof te=="function"){Q=te.call(Z,Q,H);break e}Q=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=re.payload,H=typeof te=="function"?te.call(Z,Q,H):te,H==null)break e;Q=$({},Q,H);break e;case 2:yr=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,H=l.effects,H===null?l.effects=[v]:H.push(v))}else Z={eventTime:Z,lane:H,tag:v.tag,payload:v.payload,callback:v.callback,next:null},W===null?(R=W=Z,w=Q):W=W.next=Z,h|=H;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;H=v,v=H.next,H.next=null,l.lastBaseUpdate=H,l.shared.pending=null}}while(!0);if(W===null&&(w=Q),l.baseState=w,l.firstBaseUpdate=R,l.lastBaseUpdate=W,r=l.shared.interleaved,r!==null){l=r;do h|=l.lane,l=l.next;while(l!==r)}else d===null&&(l.shared.lanes=0);Hr|=h,e.lanes=h,e.memoizedState=Q}}function md(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var s=e[r],l=s.callback;if(l!==null){if(s.callback=null,s=n,typeof l!="function")throw Error(i(191,l));l.call(s)}}}var ia={},Gt=hr(ia),la=hr(ia),ca=hr(ia);function Ur(e){if(e===ia)throw Error(i(174));return e}function fi(e,r){switch(we(ca,r),we(la,e),we(Gt,ia),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ho(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=ho(r,e)}Ee(Gt),we(Gt,r)}function kn(){Ee(Gt),Ee(la),Ee(ca)}function fd(e){Ur(ca.current);var r=Ur(Gt.current),n=ho(r,e.type);r!==n&&(we(la,e),we(Gt,n))}function hi(e){la.current===e&&(Ee(Gt),Ee(la))}var Te=hr(0);function ys(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var gi=[];function xi(){for(var e=0;e<gi.length;e++)gi[e]._workInProgressVersionPrimary=null;gi.length=0}var vs=F.ReactCurrentDispatcher,yi=F.ReactCurrentBatchConfig,qr=0,_e=null,qe=null,We=null,bs=!1,da=!1,ua=0,Hf=0;function tt(){throw Error(i(321))}function vi(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!It(e[n],r[n]))return!1;return!0}function bi(e,r,n,s,l,d){if(qr=d,_e=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vs.current=e===null||e.memoizedState===null?Qf:Kf,e=n(s,l),da){d=0;do{if(da=!1,ua=0,25<=d)throw Error(i(301));d+=1,We=qe=null,r.updateQueue=null,vs.current=Gf,e=n(s,l)}while(da)}if(vs.current=ws,r=qe!==null&&qe.next!==null,qr=0,We=qe=_e=null,bs=!1,r)throw Error(i(300));return e}function ji(){var e=ua!==0;return ua=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?_e.memoizedState=We=e:We=We.next=e,We}function Tt(){if(qe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var r=We===null?_e.memoizedState:We.next;if(r!==null)We=r,qe=e;else{if(e===null)throw Error(i(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},We===null?_e.memoizedState=We=e:We=We.next=e}return We}function pa(e,r){return typeof r=="function"?r(e):r}function ki(e){var r=Tt(),n=r.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=qe,l=s.baseQueue,d=n.pending;if(d!==null){if(l!==null){var h=l.next;l.next=d.next,d.next=h}s.baseQueue=l=d,n.pending=null}if(l!==null){d=l.next,s=s.baseState;var v=h=null,w=null,R=d;do{var W=R.lane;if((qr&W)===W)w!==null&&(w=w.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),s=R.hasEagerState?R.eagerState:e(s,R.action);else{var Q={lane:W,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};w===null?(v=w=Q,h=s):w=w.next=Q,_e.lanes|=W,Hr|=W}R=R.next}while(R!==null&&R!==d);w===null?h=s:w.next=v,It(s,r.memoizedState)||(ht=!0),r.memoizedState=s,r.baseState=h,r.baseQueue=w,n.lastRenderedState=s}if(e=n.interleaved,e!==null){l=e;do d=l.lane,_e.lanes|=d,Hr|=d,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function wi(e){var r=Tt(),n=r.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var s=n.dispatch,l=n.pending,d=r.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do d=e(d,h.action),h=h.next;while(h!==l);It(d,r.memoizedState)||(ht=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),n.lastRenderedState=d}return[d,s]}function hd(){}function gd(e,r){var n=_e,s=Tt(),l=r(),d=!It(s.memoizedState,l);if(d&&(s.memoizedState=l,ht=!0),s=s.queue,Ni(vd.bind(null,n,s,e),[e]),s.getSnapshot!==r||d||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ma(9,yd.bind(null,n,s,l,r),void 0,null),Ve===null)throw Error(i(349));(qr&30)!==0||xd(n,r,l)}return l}function xd(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function yd(e,r,n,s){r.value=n,r.getSnapshot=s,bd(r)&&jd(e)}function vd(e,r,n){return n(function(){bd(r)&&jd(e)})}function bd(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!It(e,n)}catch{return!0}}function jd(e){var r=rr(e,1);r!==null&&Wt(r,e,1,-1)}function kd(e){var r=Yt();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},r.queue=e,e=e.dispatch=Vf.bind(null,_e,e),[r.memoizedState,e]}function ma(e,r,n,s){return e={tag:e,create:r,destroy:n,deps:s,next:null},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,r.lastEffect=e)),e}function wd(){return Tt().memoizedState}function js(e,r,n,s){var l=Yt();_e.flags|=e,l.memoizedState=ma(1|r,n,void 0,s===void 0?null:s)}function ks(e,r,n,s){var l=Tt();s=s===void 0?null:s;var d=void 0;if(qe!==null){var h=qe.memoizedState;if(d=h.destroy,s!==null&&vi(s,h.deps)){l.memoizedState=ma(r,n,d,s);return}}_e.flags|=e,l.memoizedState=ma(1|r,n,d,s)}function Nd(e,r){return js(8390656,8,e,r)}function Ni(e,r){return ks(2048,8,e,r)}function Sd(e,r){return ks(4,2,e,r)}function Cd(e,r){return ks(4,4,e,r)}function Ed(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Pd(e,r,n){return n=n!=null?n.concat([e]):null,ks(4,4,Ed.bind(null,r,e),n)}function Si(){}function zd(e,r){var n=Tt();r=r===void 0?null:r;var s=n.memoizedState;return s!==null&&r!==null&&vi(r,s[1])?s[0]:(n.memoizedState=[e,r],e)}function Td(e,r){var n=Tt();r=r===void 0?null:r;var s=n.memoizedState;return s!==null&&r!==null&&vi(r,s[1])?s[0]:(e=e(),n.memoizedState=[e,r],e)}function _d(e,r,n){return(qr&21)===0?(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n):(It(n,r)||(n=ic(),_e.lanes|=n,Hr|=n,e.baseState=!0),r)}function $f(e,r){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var s=yi.transition;yi.transition={};try{e(!1),r()}finally{ke=n,yi.transition=s}}function Ad(){return Tt().memoizedState}function Wf(e,r,n){var s=wr(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Rd(e))Fd(r,n);else if(n=dd(e,r,n,s),n!==null){var l=it();Wt(n,e,s,l),Dd(n,r,s)}}function Vf(e,r,n){var s=wr(e),l={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))Fd(r,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var h=r.lastRenderedState,v=d(h,n);if(l.hasEagerState=!0,l.eagerState=v,It(v,h)){var w=r.interleaved;w===null?(l.next=l,pi(r)):(l.next=w.next,w.next=l),r.interleaved=l;return}}catch{}finally{}n=dd(e,r,l,s),n!==null&&(l=it(),Wt(n,e,s,l),Dd(n,r,s))}}function Rd(e){var r=e.alternate;return e===_e||r!==null&&r===_e}function Fd(e,r){da=bs=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Dd(e,r,n){if((n&4194240)!==0){var s=r.lanes;s&=e.pendingLanes,n|=s,r.lanes=n,Eo(e,n)}}var ws={readContext:zt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Qf={readContext:zt,useCallback:function(e,r){return Yt().memoizedState=[e,r===void 0?null:r],e},useContext:zt,useEffect:Nd,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,js(4194308,4,Ed.bind(null,r,e),n)},useLayoutEffect:function(e,r){return js(4194308,4,e,r)},useInsertionEffect:function(e,r){return js(4,2,e,r)},useMemo:function(e,r){var n=Yt();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var s=Yt();return r=n!==void 0?n(r):r,s.memoizedState=s.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=Wf.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var r=Yt();return e={current:e},r.memoizedState=e},useState:kd,useDebugValue:Si,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=kd(!1),r=e[0];return e=$f.bind(null,e[1]),Yt().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var s=_e,l=Yt();if(ze){if(n===void 0)throw Error(i(407));n=n()}else{if(n=r(),Ve===null)throw Error(i(349));(qr&30)!==0||xd(s,r,n)}l.memoizedState=n;var d={value:n,getSnapshot:r};return l.queue=d,Nd(vd.bind(null,s,d,e),[e]),s.flags|=2048,ma(9,yd.bind(null,s,d,n,r),void 0,null),n},useId:function(){var e=Yt(),r=Ve.identifierPrefix;if(ze){var n=tr,s=er;n=(s&~(1<<32-Bt(s)-1)).toString(32)+n,r=":"+r+"R"+n,n=ua++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Hf++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Kf={readContext:zt,useCallback:zd,useContext:zt,useEffect:Ni,useImperativeHandle:Pd,useInsertionEffect:Sd,useLayoutEffect:Cd,useMemo:Td,useReducer:ki,useRef:wd,useState:function(){return ki(pa)},useDebugValue:Si,useDeferredValue:function(e){var r=Tt();return _d(r,qe.memoizedState,e)},useTransition:function(){var e=ki(pa)[0],r=Tt().memoizedState;return[e,r]},useMutableSource:hd,useSyncExternalStore:gd,useId:Ad,unstable_isNewReconciler:!1},Gf={readContext:zt,useCallback:zd,useContext:zt,useEffect:Ni,useImperativeHandle:Pd,useInsertionEffect:Sd,useLayoutEffect:Cd,useMemo:Td,useReducer:wi,useRef:wd,useState:function(){return wi(pa)},useDebugValue:Si,useDeferredValue:function(e){var r=Tt();return qe===null?r.memoizedState=e:_d(r,qe.memoizedState,e)},useTransition:function(){var e=wi(pa)[0],r=Tt().memoizedState;return[e,r]},useMutableSource:hd,useSyncExternalStore:gd,useId:Ad,unstable_isNewReconciler:!1};function qt(e,r){if(e&&e.defaultProps){r=$({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Ci(e,r,n,s){r=e.memoizedState,n=n(s,r),n=n==null?r:$({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={isMounted:function(e){return(e=e._reactInternals)?Dr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var s=it(),l=wr(e),d=nr(s,l);d.payload=r,n!=null&&(d.callback=n),r=vr(e,d,l),r!==null&&(Wt(r,e,l,s),gs(r,e,l))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var s=it(),l=wr(e),d=nr(s,l);d.tag=1,d.payload=r,n!=null&&(d.callback=n),r=vr(e,d,l),r!==null&&(Wt(r,e,l,s),gs(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=it(),s=wr(e),l=nr(n,s);l.tag=2,r!=null&&(l.callback=r),r=vr(e,l,s),r!==null&&(Wt(r,e,s,n),gs(r,e,s))}};function Ld(e,r,n,s,l,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,h):r.prototype&&r.prototype.isPureReactComponent?!Zn(n,s)||!Zn(l,d):!0}function Od(e,r,n){var s=!1,l=gr,d=r.contextType;return typeof d=="object"&&d!==null?d=zt(d):(l=ft(r)?Or:et.current,s=r.contextTypes,d=(s=s!=null)?hn(e,l):gr),r=new r(n,d),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ns,e.stateNode=r,r._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),r}function Md(e,r,n,s){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,s),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,s),r.state!==e&&Ns.enqueueReplaceState(r,r.state,null)}function Ei(e,r,n,s){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mi(e);var d=r.contextType;typeof d=="object"&&d!==null?l.context=zt(d):(d=ft(r)?Or:et.current,l.context=hn(e,d)),l.state=e.memoizedState,d=r.getDerivedStateFromProps,typeof d=="function"&&(Ci(e,r,d,n),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Ns.enqueueReplaceState(l,l.state,null),xs(e,n,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,r){try{var n="",s=r;do n+=fe(s),s=s.return;while(s);var l=n}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:r,stack:l,digest:null}}function Pi(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function zi(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function Bd(e,r,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var s=r.value;return n.callback=function(){_s||(_s=!0,$i=s),zi(e,r)},n}function Id(e,r,n){n=nr(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=r.value;n.payload=function(){return s(l)},n.callback=function(){zi(e,r)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){zi(e,r),typeof s!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var h=r.stack;this.componentDidCatch(r.value,{componentStack:h!==null?h:""})}),n}function Ud(e,r,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Yf;var l=new Set;s.set(r,l)}else l=s.get(r),l===void 0&&(l=new Set,s.set(r,l));l.has(n)||(l.add(n),e=dh.bind(null,e,r,n),r.then(e,e))}function qd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Hd(e,r,n,s,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=nr(-1,1),r.tag=2,vr(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Xf=F.ReactCurrentOwner,ht=!1;function ot(e,r,n,s){r.child=e===null?cd(r,null,n,s):vn(r,e.child,n,s)}function $d(e,r,n,s,l){n=n.render;var d=r.ref;return jn(r,l),s=bi(e,r,n,s,d,l),n=ji(),e!==null&&!ht?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,ar(e,r,l)):(ze&&n&&ni(r),r.flags|=1,ot(e,r,s,l),r.child)}function Wd(e,r,n,s,l){if(e===null){var d=n.type;return typeof d=="function"&&!Xi(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=d,Vd(e,r,d,s,l)):(e=Os(n.type,null,s,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(d=e.child,(e.lanes&l)===0){var h=d.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(h,s)&&e.ref===r.ref)return ar(e,r,l)}return r.flags|=1,e=Sr(d,s),e.ref=r.ref,e.return=r,r.child=e}function Vd(e,r,n,s,l){if(e!==null){var d=e.memoizedProps;if(Zn(d,s)&&e.ref===r.ref)if(ht=!1,r.pendingProps=s=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ht=!0);else return r.lanes=e.lanes,ar(e,r,l)}return Ti(e,r,n,s,l)}function Qd(e,r,n){var s=r.pendingProps,l=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Sn,Ct),Ct|=n;else{if((n&1073741824)===0)return e=d!==null?d.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,we(Sn,Ct),Ct|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:n,we(Sn,Ct),Ct|=s}else d!==null?(s=d.baseLanes|n,r.memoizedState=null):s=n,we(Sn,Ct),Ct|=s;return ot(e,r,l,n),r.child}function Kd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Ti(e,r,n,s,l){var d=ft(n)?Or:et.current;return d=hn(r,d),jn(r,l),n=bi(e,r,n,s,d,l),s=ji(),e!==null&&!ht?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,ar(e,r,l)):(ze&&s&&ni(r),r.flags|=1,ot(e,r,n,l),r.child)}function Gd(e,r,n,s,l){if(ft(n)){var d=!0;ls(r)}else d=!1;if(jn(r,l),r.stateNode===null)Cs(e,r),Od(r,n,s),Ei(r,n,s,l),s=!0;else if(e===null){var h=r.stateNode,v=r.memoizedProps;h.props=v;var w=h.context,R=n.contextType;typeof R=="object"&&R!==null?R=zt(R):(R=ft(n)?Or:et.current,R=hn(r,R));var W=n.getDerivedStateFromProps,Q=typeof W=="function"||typeof h.getSnapshotBeforeUpdate=="function";Q||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==s||w!==R)&&Md(r,h,s,R),yr=!1;var H=r.memoizedState;h.state=H,xs(r,s,h,l),w=r.memoizedState,v!==s||H!==w||mt.current||yr?(typeof W=="function"&&(Ci(r,n,W,s),w=r.memoizedState),(v=yr||Ld(r,n,v,s,H,w,R))?(Q||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(r.flags|=4194308)):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=s,r.memoizedState=w),h.props=s,h.state=w,h.context=R,s=v):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),s=!1)}else{h=r.stateNode,ud(e,r),v=r.memoizedProps,R=r.type===r.elementType?v:qt(r.type,v),h.props=R,Q=r.pendingProps,H=h.context,w=n.contextType,typeof w=="object"&&w!==null?w=zt(w):(w=ft(n)?Or:et.current,w=hn(r,w));var Z=n.getDerivedStateFromProps;(W=typeof Z=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==Q||H!==w)&&Md(r,h,s,w),yr=!1,H=r.memoizedState,h.state=H,xs(r,s,h,l);var te=r.memoizedState;v!==Q||H!==te||mt.current||yr?(typeof Z=="function"&&(Ci(r,n,Z,s),te=r.memoizedState),(R=yr||Ld(r,n,R,s,H,te,w)||!1)?(W||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,te,w),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,te,w)),typeof h.componentDidUpdate=="function"&&(r.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),r.memoizedProps=s,r.memoizedState=te),h.props=s,h.state=te,h.context=w,s=R):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),s=!1)}return _i(e,r,n,s,d,l)}function _i(e,r,n,s,l,d){Kd(e,r);var h=(r.flags&128)!==0;if(!s&&!h)return l&&ed(r,n,!1),ar(e,r,d);s=r.stateNode,Xf.current=r;var v=h&&typeof n.getDerivedStateFromError!="function"?null:s.render();return r.flags|=1,e!==null&&h?(r.child=vn(r,e.child,null,d),r.child=vn(r,null,v,d)):ot(e,r,v,d),r.memoizedState=s.state,l&&ed(r,n,!0),r.child}function Yd(e){var r=e.stateNode;r.pendingContext?Jc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Jc(e,r.context,!1),fi(e,r.containerInfo)}function Xd(e,r,n,s,l){return yn(),ii(l),r.flags|=256,ot(e,r,n,s),r.child}var Ai={dehydrated:null,treeContext:null,retryLane:0};function Ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jd(e,r,n){var s=r.pendingProps,l=Te.current,d=!1,h=(r.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(l&2)!==0),v?(d=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),we(Te,l&1),e===null)return oi(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(h=s.children,e=s.fallback,d?(s=r.mode,d=r.child,h={mode:"hidden",children:h},(s&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=Ms(h,s,0,null),e=Qr(e,s,n,null),d.return=r,e.return=r,d.sibling=e,r.child=d,r.child.memoizedState=Ri(n),r.memoizedState=Ai,e):Fi(r,h));if(l=e.memoizedState,l!==null&&(v=l.dehydrated,v!==null))return Jf(e,r,h,s,v,l,n);if(d){d=s.fallback,h=r.mode,l=e.child,v=l.sibling;var w={mode:"hidden",children:s.children};return(h&1)===0&&r.child!==l?(s=r.child,s.childLanes=0,s.pendingProps=w,r.deletions=null):(s=Sr(l,w),s.subtreeFlags=l.subtreeFlags&14680064),v!==null?d=Sr(v,d):(d=Qr(d,h,n,null),d.flags|=2),d.return=r,s.return=r,s.sibling=d,r.child=s,s=d,d=r.child,h=e.child.memoizedState,h=h===null?Ri(n):{baseLanes:h.baseLanes|n,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~n,r.memoizedState=Ai,s}return d=e.child,e=d.sibling,s=Sr(d,{mode:"visible",children:s.children}),(r.mode&1)===0&&(s.lanes=n),s.return=r,s.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=s,r.memoizedState=null,s}function Fi(e,r){return r=Ms({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Ss(e,r,n,s){return s!==null&&ii(s),vn(r,e.child,null,n),e=Fi(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Jf(e,r,n,s,l,d,h){if(n)return r.flags&256?(r.flags&=-257,s=Pi(Error(i(422))),Ss(e,r,h,s)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(d=s.fallback,l=r.mode,s=Ms({mode:"visible",children:s.children},l,0,null),d=Qr(d,l,h,null),d.flags|=2,s.return=r,d.return=r,s.sibling=d,r.child=s,(r.mode&1)!==0&&vn(r,e.child,null,h),r.child.memoizedState=Ri(h),r.memoizedState=Ai,d);if((r.mode&1)===0)return Ss(e,r,h,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var v=s.dgst;return s=v,d=Error(i(419)),s=Pi(d,s,void 0),Ss(e,r,h,s)}if(v=(h&e.childLanes)!==0,ht||v){if(s=Ve,s!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(s.suspendedLanes|h))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,rr(e,l),Wt(s,e,l,-1))}return Yi(),s=Pi(Error(i(421))),Ss(e,r,h,s)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=uh.bind(null,e),l._reactRetry=r,null):(e=d.treeContext,St=fr(l.nextSibling),Nt=r,ze=!0,Ut=null,e!==null&&(Et[Pt++]=er,Et[Pt++]=tr,Et[Pt++]=Mr,er=e.id,tr=e.overflow,Mr=r),r=Fi(r,s.children),r.flags|=4096,r)}function Zd(e,r,n){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r),ui(e.return,r,n)}function Di(e,r,n,s,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:l}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=n,d.tailMode=l)}function eu(e,r,n){var s=r.pendingProps,l=s.revealOrder,d=s.tail;if(ot(e,r,s.children,n),s=Te.current,(s&2)!==0)s=s&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,n,r);else if(e.tag===19)Zd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(we(Te,s),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(n=r.child,l=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=r.child,r.child=null):(l=n.sibling,n.sibling=null),Di(r,!1,l,n,d);break;case"backwards":for(n=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&ys(e)===null){r.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Di(r,!0,n,null,d);break;case"together":Di(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Cs(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function ar(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Hr|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,n=Sr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Sr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Zf(e,r,n){switch(r.tag){case 3:Yd(r),yn();break;case 5:fd(r);break;case 1:ft(r.type)&&ls(r);break;case 4:fi(r,r.stateNode.containerInfo);break;case 10:var s=r.type._context,l=r.memoizedProps.value;we(fs,s._currentValue),s._currentValue=l;break;case 13:if(s=r.memoizedState,s!==null)return s.dehydrated!==null?(we(Te,Te.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?Jd(e,r,n):(we(Te,Te.current&1),e=ar(e,r,n),e!==null?e.sibling:null);we(Te,Te.current&1);break;case 19:if(s=(n&r.childLanes)!==0,(e.flags&128)!==0){if(s)return eu(e,r,n);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(Te,Te.current),s)break;return null;case 22:case 23:return r.lanes=0,Qd(e,r,n)}return ar(e,r,n)}var tu,Li,ru,nu;tu=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Li=function(){},ru=function(e,r,n,s){var l=e.memoizedProps;if(l!==s){e=r.stateNode,Ur(Gt.current);var d=null;switch(n){case"input":l=jt(e,l),s=jt(e,s),d=[];break;case"select":l=$({},l,{value:void 0}),s=$({},s,{value:void 0}),d=[];break;case"textarea":l=rn(e,l),s=rn(e,s),d=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=ss)}go(n,s);var h;n=null;for(R in l)if(!s.hasOwnProperty(R)&&l.hasOwnProperty(R)&&l[R]!=null)if(R==="style"){var v=l[R];for(h in v)v.hasOwnProperty(h)&&(n||(n={}),n[h]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(u.hasOwnProperty(R)?d||(d=[]):(d=d||[]).push(R,null));for(R in s){var w=s[R];if(v=l!=null?l[R]:void 0,s.hasOwnProperty(R)&&w!==v&&(w!=null||v!=null))if(R==="style")if(v){for(h in v)!v.hasOwnProperty(h)||w&&w.hasOwnProperty(h)||(n||(n={}),n[h]="");for(h in w)w.hasOwnProperty(h)&&v[h]!==w[h]&&(n||(n={}),n[h]=w[h])}else n||(d||(d=[]),d.push(R,n)),n=w;else R==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,v=v?v.__html:void 0,w!=null&&v!==w&&(d=d||[]).push(R,w)):R==="children"?typeof w!="string"&&typeof w!="number"||(d=d||[]).push(R,""+w):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(u.hasOwnProperty(R)?(w!=null&&R==="onScroll"&&Ce("scroll",e),d||v===w||(d=[])):(d=d||[]).push(R,w))}n&&(d=d||[]).push("style",n);var R=d;(r.updateQueue=R)&&(r.flags|=4)}},nu=function(e,r,n,s){n!==s&&(r.flags|=4)};function fa(e,r){if(!ze)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function rt(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(r)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=n,r}function eh(e,r,n){var s=r.pendingProps;switch(ai(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(r),null;case 1:return ft(r.type)&&is(),rt(r),null;case 3:return s=r.stateNode,kn(),Ee(mt),Ee(et),xi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ps(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ut!==null&&(Qi(Ut),Ut=null))),Li(e,r),rt(r),null;case 5:hi(r);var l=Ur(ca.current);if(n=r.type,e!==null&&r.stateNode!=null)ru(e,r,n,s,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!s){if(r.stateNode===null)throw Error(i(166));return rt(r),null}if(e=Ur(Gt.current),ps(r)){s=r.stateNode,n=r.type;var d=r.memoizedProps;switch(s[Kt]=r,s[aa]=d,e=(r.mode&1)!==0,n){case"dialog":Ce("cancel",s),Ce("close",s);break;case"iframe":case"object":case"embed":Ce("load",s);break;case"video":case"audio":for(l=0;l<ta.length;l++)Ce(ta[l],s);break;case"source":Ce("error",s);break;case"img":case"image":case"link":Ce("error",s),Ce("load",s);break;case"details":Ce("toggle",s);break;case"input":Dn(s,d),Ce("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Ce("invalid",s);break;case"textarea":La(s,d),Ce("invalid",s)}go(n,d),l=null;for(var h in d)if(d.hasOwnProperty(h)){var v=d[h];h==="children"?typeof v=="string"?s.textContent!==v&&(d.suppressHydrationWarning!==!0&&as(s.textContent,v,e),l=["children",v]):typeof v=="number"&&s.textContent!==""+v&&(d.suppressHydrationWarning!==!0&&as(s.textContent,v,e),l=["children",""+v]):u.hasOwnProperty(h)&&v!=null&&h==="onScroll"&&Ce("scroll",s)}switch(n){case"input":en(s),de(s,d,!0);break;case"textarea":en(s),ql(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=ss)}s=l,r.updateQueue=s,s!==null&&(r.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=h.createElement(n,{is:s.is}):(e=h.createElement(n),n==="select"&&(h=e,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):e=h.createElementNS(e,n),e[Kt]=r,e[aa]=s,tu(e,r,!1,!1),r.stateNode=e;e:{switch(h=xo(n,s),n){case"dialog":Ce("cancel",e),Ce("close",e),l=s;break;case"iframe":case"object":case"embed":Ce("load",e),l=s;break;case"video":case"audio":for(l=0;l<ta.length;l++)Ce(ta[l],e);l=s;break;case"source":Ce("error",e),l=s;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),l=s;break;case"details":Ce("toggle",e),l=s;break;case"input":Dn(e,s),l=jt(e,s),Ce("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=$({},s,{value:void 0}),Ce("invalid",e);break;case"textarea":La(e,s),l=rn(e,s),Ce("invalid",e);break;default:l=s}go(n,l),v=l;for(d in v)if(v.hasOwnProperty(d)){var w=v[d];d==="style"?Vl(e,w):d==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&$l(e,w)):d==="children"?typeof w=="string"?(n!=="textarea"||w!=="")&&Ln(e,w):typeof w=="number"&&Ln(e,""+w):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(u.hasOwnProperty(d)?w!=null&&d==="onScroll"&&Ce("scroll",e):w!=null&&U(e,d,w,h))}switch(n){case"input":en(e),de(e,s,!1);break;case"textarea":en(e),ql(e);break;case"option":s.value!=null&&e.setAttribute("value",""+me(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?pt(e,!!s.multiple,d,!1):s.defaultValue!=null&&pt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ss)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return rt(r),null;case 6:if(e&&r.stateNode!=null)nu(e,r,e.memoizedProps,s);else{if(typeof s!="string"&&r.stateNode===null)throw Error(i(166));if(n=Ur(ca.current),Ur(Gt.current),ps(r)){if(s=r.stateNode,n=r.memoizedProps,s[Kt]=r,(d=s.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:as(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&as(s.nodeValue,n,(e.mode&1)!==0)}d&&(r.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Kt]=r,r.stateNode=s}return rt(r),null;case 13:if(Ee(Te),s=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&St!==null&&(r.mode&1)!==0&&(r.flags&128)===0)od(),yn(),r.flags|=98560,d=!1;else if(d=ps(r),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Kt]=r}else yn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;rt(r),d=!1}else Ut!==null&&(Qi(Ut),Ut=null),d=!0;if(!d)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Te.current&1)!==0?He===0&&(He=3):Yi())),r.updateQueue!==null&&(r.flags|=4),rt(r),null);case 4:return kn(),Li(e,r),e===null&&ra(r.stateNode.containerInfo),rt(r),null;case 10:return di(r.type._context),rt(r),null;case 17:return ft(r.type)&&is(),rt(r),null;case 19:if(Ee(Te),d=r.memoizedState,d===null)return rt(r),null;if(s=(r.flags&128)!==0,h=d.rendering,h===null)if(s)fa(d,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(h=ys(e),h!==null){for(r.flags|=128,fa(d,!1),s=h.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),r.subtreeFlags=0,s=n,n=r.child;n!==null;)d=n,e=s,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Te,Te.current&1|2),r.child}e=e.sibling}d.tail!==null&&Oe()>Cn&&(r.flags|=128,s=!0,fa(d,!1),r.lanes=4194304)}else{if(!s)if(e=ys(h),e!==null){if(r.flags|=128,s=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),fa(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!ze)return rt(r),null}else 2*Oe()-d.renderingStartTime>Cn&&n!==1073741824&&(r.flags|=128,s=!0,fa(d,!1),r.lanes=4194304);d.isBackwards?(h.sibling=r.child,r.child=h):(n=d.last,n!==null?n.sibling=h:r.child=h,d.last=h)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=Oe(),r.sibling=null,n=Te.current,we(Te,s?n&1|2:n&1),r):(rt(r),null);case 22:case 23:return Gi(),s=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(r.flags|=8192),s&&(r.mode&1)!==0?(Ct&1073741824)!==0&&(rt(r),r.subtreeFlags&6&&(r.flags|=8192)):rt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function th(e,r){switch(ai(r),r.tag){case 1:return ft(r.type)&&is(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return kn(),Ee(mt),Ee(et),xi(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return hi(r),null;case 13:if(Ee(Te),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));yn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ee(Te),null;case 4:return kn(),null;case 10:return di(r.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var Es=!1,nt=!1,rh=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Nn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Re(e,r,s)}else n.current=null}function Oi(e,r,n){try{n()}catch(s){Re(e,r,s)}}var au=!1;function nh(e,r){if(Go=Qa,e=Lc(),Uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var l=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var h=0,v=-1,w=-1,R=0,W=0,Q=e,H=null;t:for(;;){for(var Z;Q!==n||l!==0&&Q.nodeType!==3||(v=h+l),Q!==d||s!==0&&Q.nodeType!==3||(w=h+s),Q.nodeType===3&&(h+=Q.nodeValue.length),(Z=Q.firstChild)!==null;)H=Q,Q=Z;for(;;){if(Q===e)break t;if(H===n&&++R===l&&(v=h),H===d&&++W===s&&(w=h),(Z=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=Z}n=v===-1||w===-1?null:{start:v,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yo={focusedElem:e,selectionRange:n},Qa=!1,ee=r;ee!==null;)if(r=ee,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,ee=e;else for(;ee!==null;){r=ee;try{var te=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var re=te.memoizedProps,Me=te.memoizedState,T=r.stateNode,E=T.getSnapshotBeforeUpdate(r.elementType===r.type?re:qt(r.type,re),Me);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var _=r.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(G){Re(r,r.return,G)}if(e=r.sibling,e!==null){e.return=r.return,ee=e;break}ee=r.return}return te=au,au=!1,te}function ha(e,r,n){var s=r.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&Oi(r,n,d)}l=l.next}while(l!==s)}}function Ps(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==r)}}function Mi(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function su(e){var r=e.alternate;r!==null&&(e.alternate=null,su(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Kt],delete r[aa],delete r[ei],delete r[Bf],delete r[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ou(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,r,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=ss));else if(s!==4&&(e=e.child,e!==null))for(Bi(e,r,n),e=e.sibling;e!==null;)Bi(e,r,n),e=e.sibling}function Ii(e,r,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ii(e,r,n),e=e.sibling;e!==null;)Ii(e,r,n),e=e.sibling}var Ye=null,Ht=!1;function br(e,r,n){for(n=n.child;n!==null;)lu(e,r,n),n=n.sibling}function lu(e,r,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 5:nt||Nn(n,r);case 6:var s=Ye,l=Ht;Ye=null,br(e,r,n),Ye=s,Ht=l,Ye!==null&&(Ht?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Ht?(e=Ye,n=n.stateNode,e.nodeType===8?Zo(e.parentNode,n):e.nodeType===1&&Zo(e,n),Qn(e)):Zo(Ye,n.stateNode));break;case 4:s=Ye,l=Ht,Ye=n.stateNode.containerInfo,Ht=!0,br(e,r,n),Ye=s,Ht=l;break;case 0:case 11:case 14:case 15:if(!nt&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var d=l,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&Oi(n,r,h),l=l.next}while(l!==s)}br(e,r,n);break;case 1:if(!nt&&(Nn(n,r),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(v){Re(n,r,v)}br(e,r,n);break;case 21:br(e,r,n);break;case 22:n.mode&1?(nt=(s=nt)||n.memoizedState!==null,br(e,r,n),nt=s):br(e,r,n);break;default:br(e,r,n)}}function cu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rh),r.forEach(function(s){var l=ph.bind(null,e,s);n.has(s)||(n.add(s),s.then(l,l))})}}function $t(e,r){var n=r.deletions;if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];try{var d=e,h=r,v=h;e:for(;v!==null;){switch(v.tag){case 5:Ye=v.stateNode,Ht=!1;break e;case 3:Ye=v.stateNode.containerInfo,Ht=!0;break e;case 4:Ye=v.stateNode.containerInfo,Ht=!0;break e}v=v.return}if(Ye===null)throw Error(i(160));lu(d,h,l),Ye=null,Ht=!1;var w=l.alternate;w!==null&&(w.return=null),l.return=null}catch(R){Re(l,r,R)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)du(r,e),r=r.sibling}function du(e,r){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(r,e),Xt(e),s&4){try{ha(3,e,e.return),Ps(3,e)}catch(re){Re(e,e.return,re)}try{ha(5,e,e.return)}catch(re){Re(e,e.return,re)}}break;case 1:$t(r,e),Xt(e),s&512&&n!==null&&Nn(n,n.return);break;case 5:if($t(r,e),Xt(e),s&512&&n!==null&&Nn(n,n.return),e.flags&32){var l=e.stateNode;try{Ln(l,"")}catch(re){Re(e,e.return,re)}}if(s&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,h=n!==null?n.memoizedProps:d,v=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{v==="input"&&d.type==="radio"&&d.name!=null&&tn(l,d),xo(v,h);var R=xo(v,d);for(h=0;h<w.length;h+=2){var W=w[h],Q=w[h+1];W==="style"?Vl(l,Q):W==="dangerouslySetInnerHTML"?$l(l,Q):W==="children"?Ln(l,Q):U(l,W,Q,R)}switch(v){case"input":kt(l,d);break;case"textarea":ir(l,d);break;case"select":var H=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var Z=d.value;Z!=null?pt(l,!!d.multiple,Z,!1):H!==!!d.multiple&&(d.defaultValue!=null?pt(l,!!d.multiple,d.defaultValue,!0):pt(l,!!d.multiple,d.multiple?[]:"",!1))}l[aa]=d}catch(re){Re(e,e.return,re)}}break;case 6:if($t(r,e),Xt(e),s&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(re){Re(e,e.return,re)}}break;case 3:if($t(r,e),Xt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(r.containerInfo)}catch(re){Re(e,e.return,re)}break;case 4:$t(r,e),Xt(e);break;case 13:$t(r,e),Xt(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(Hi=Oe())),s&4&&cu(e);break;case 22:if(W=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(R=nt)||W,$t(r,e),nt=R):$t(r,e),Xt(e),s&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!W&&(e.mode&1)!==0)for(ee=e,W=e.child;W!==null;){for(Q=ee=W;ee!==null;){switch(H=ee,Z=H.child,H.tag){case 0:case 11:case 14:case 15:ha(4,H,H.return);break;case 1:Nn(H,H.return);var te=H.stateNode;if(typeof te.componentWillUnmount=="function"){s=H,n=H.return;try{r=s,te.props=r.memoizedProps,te.state=r.memoizedState,te.componentWillUnmount()}catch(re){Re(s,n,re)}}break;case 5:Nn(H,H.return);break;case 22:if(H.memoizedState!==null){mu(Q);continue}}Z!==null?(Z.return=H,ee=Z):mu(Q)}W=W.sibling}e:for(W=null,Q=e;;){if(Q.tag===5){if(W===null){W=Q;try{l=Q.stateNode,R?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(v=Q.stateNode,w=Q.memoizedProps.style,h=w!=null&&w.hasOwnProperty("display")?w.display:null,v.style.display=Wl("display",h))}catch(re){Re(e,e.return,re)}}}else if(Q.tag===6){if(W===null)try{Q.stateNode.nodeValue=R?"":Q.memoizedProps}catch(re){Re(e,e.return,re)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===e)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===e)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===e)break e;W===Q&&(W=null),Q=Q.return}W===Q&&(W=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:$t(r,e),Xt(e),s&4&&cu(e);break;case 21:break;default:$t(r,e),Xt(e)}}function Xt(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(ou(n)){var s=n;break e}n=n.return}throw Error(i(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(Ln(l,""),s.flags&=-33);var d=iu(e);Ii(e,d,l);break;case 3:case 4:var h=s.stateNode.containerInfo,v=iu(e);Bi(e,v,h);break;default:throw Error(i(161))}}catch(w){Re(e,e.return,w)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ah(e,r,n){ee=e,uu(e)}function uu(e,r,n){for(var s=(e.mode&1)!==0;ee!==null;){var l=ee,d=l.child;if(l.tag===22&&s){var h=l.memoizedState!==null||Es;if(!h){var v=l.alternate,w=v!==null&&v.memoizedState!==null||nt;v=Es;var R=nt;if(Es=h,(nt=w)&&!R)for(ee=l;ee!==null;)h=ee,w=h.child,h.tag===22&&h.memoizedState!==null?fu(l):w!==null?(w.return=h,ee=w):fu(l);for(;d!==null;)ee=d,uu(d),d=d.sibling;ee=l,Es=v,nt=R}pu(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,ee=d):pu(e)}}function pu(e){for(;ee!==null;){var r=ee;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:nt||Ps(5,r);break;case 1:var s=r.stateNode;if(r.flags&4&&!nt)if(n===null)s.componentDidMount();else{var l=r.elementType===r.type?n.memoizedProps:qt(r.type,n.memoizedProps);s.componentDidUpdate(l,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=r.updateQueue;d!==null&&md(r,d,s);break;case 3:var h=r.updateQueue;if(h!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}md(r,h,n)}break;case 5:var v=r.stateNode;if(n===null&&r.flags&4){n=v;var w=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&n.focus();break;case"img":w.src&&(n.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var R=r.alternate;if(R!==null){var W=R.memoizedState;if(W!==null){var Q=W.dehydrated;Q!==null&&Qn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}nt||r.flags&512&&Mi(r)}catch(H){Re(r,r.return,H)}}if(r===e){ee=null;break}if(n=r.sibling,n!==null){n.return=r.return,ee=n;break}ee=r.return}}function mu(e){for(;ee!==null;){var r=ee;if(r===e){ee=null;break}var n=r.sibling;if(n!==null){n.return=r.return,ee=n;break}ee=r.return}}function fu(e){for(;ee!==null;){var r=ee;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Ps(4,r)}catch(w){Re(r,n,w)}break;case 1:var s=r.stateNode;if(typeof s.componentDidMount=="function"){var l=r.return;try{s.componentDidMount()}catch(w){Re(r,l,w)}}var d=r.return;try{Mi(r)}catch(w){Re(r,d,w)}break;case 5:var h=r.return;try{Mi(r)}catch(w){Re(r,h,w)}}}catch(w){Re(r,r.return,w)}if(r===e){ee=null;break}var v=r.sibling;if(v!==null){v.return=r.return,ee=v;break}ee=r.return}}var sh=Math.ceil,zs=F.ReactCurrentDispatcher,Ui=F.ReactCurrentOwner,_t=F.ReactCurrentBatchConfig,xe=0,Ve=null,Ue=null,Xe=0,Ct=0,Sn=hr(0),He=0,ga=null,Hr=0,Ts=0,qi=0,xa=null,gt=null,Hi=0,Cn=1/0,sr=null,_s=!1,$i=null,jr=null,As=!1,kr=null,Rs=0,ya=0,Wi=null,Fs=-1,Ds=0;function it(){return(xe&6)!==0?Oe():Fs!==-1?Fs:Fs=Oe()}function wr(e){return(e.mode&1)===0?1:(xe&2)!==0&&Xe!==0?Xe&-Xe:qf.transition!==null?(Ds===0&&(Ds=ic()),Ds):(e=ke,e!==0||(e=window.event,e=e===void 0?16:gc(e.type)),e)}function Wt(e,r,n,s){if(50<ya)throw ya=0,Wi=null,Error(i(185));qn(e,n,s),((xe&2)===0||e!==Ve)&&(e===Ve&&((xe&2)===0&&(Ts|=n),He===4&&Nr(e,Xe)),xt(e,s),n===1&&xe===0&&(r.mode&1)===0&&(Cn=Oe()+500,cs&&xr()))}function xt(e,r){var n=e.callbackNode;Um(e,r);var s=$a(e,e===Ve?Xe:0);if(s===0)n!==null&&ac(n),e.callbackNode=null,e.callbackPriority=0;else if(r=s&-s,e.callbackPriority!==r){if(n!=null&&ac(n),r===1)e.tag===0?Uf(gu.bind(null,e)):td(gu.bind(null,e)),Of(function(){(xe&6)===0&&xr()}),n=null;else{switch(lc(s)){case 1:n=No;break;case 4:n=sc;break;case 16:n=Ia;break;case 536870912:n=oc;break;default:n=Ia}n=Nu(n,hu.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function hu(e,r){if(Fs=-1,Ds=0,(xe&6)!==0)throw Error(i(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var s=$a(e,e===Ve?Xe:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||r)r=Ls(e,s);else{r=s;var l=xe;xe|=2;var d=yu();(Ve!==e||Xe!==r)&&(sr=null,Cn=Oe()+500,Wr(e,r));do try{lh();break}catch(v){xu(e,v)}while(!0);ci(),zs.current=d,xe=l,Ue!==null?r=0:(Ve=null,Xe=0,r=He)}if(r!==0){if(r===2&&(l=So(e),l!==0&&(s=l,r=Vi(e,l))),r===1)throw n=ga,Wr(e,0),Nr(e,s),xt(e,Oe()),n;if(r===6)Nr(e,s);else{if(l=e.current.alternate,(s&30)===0&&!oh(l)&&(r=Ls(e,s),r===2&&(d=So(e),d!==0&&(s=d,r=Vi(e,d))),r===1))throw n=ga,Wr(e,0),Nr(e,s),xt(e,Oe()),n;switch(e.finishedWork=l,e.finishedLanes=s,r){case 0:case 1:throw Error(i(345));case 2:Vr(e,gt,sr);break;case 3:if(Nr(e,s),(s&130023424)===s&&(r=Hi+500-Oe(),10<r)){if($a(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){it(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Jo(Vr.bind(null,e,gt,sr),r);break}Vr(e,gt,sr);break;case 4:if(Nr(e,s),(s&4194240)===s)break;for(r=e.eventTimes,l=-1;0<s;){var h=31-Bt(s);d=1<<h,h=r[h],h>l&&(l=h),s&=~d}if(s=l,s=Oe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*sh(s/1960))-s,10<s){e.timeoutHandle=Jo(Vr.bind(null,e,gt,sr),s);break}Vr(e,gt,sr);break;case 5:Vr(e,gt,sr);break;default:throw Error(i(329))}}}return xt(e,Oe()),e.callbackNode===n?hu.bind(null,e):null}function Vi(e,r){var n=xa;return e.current.memoizedState.isDehydrated&&(Wr(e,r).flags|=256),e=Ls(e,r),e!==2&&(r=gt,gt=n,r!==null&&Qi(r)),e}function Qi(e){gt===null?gt=e:gt.push.apply(gt,e)}function oh(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var l=n[s],d=l.getSnapshot;l=l.value;try{if(!It(d(),l))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Nr(e,r){for(r&=~qi,r&=~Ts,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Bt(r),s=1<<n;e[n]=-1,r&=~s}}function gu(e){if((xe&6)!==0)throw Error(i(327));En();var r=$a(e,0);if((r&1)===0)return xt(e,Oe()),null;var n=Ls(e,r);if(e.tag!==0&&n===2){var s=So(e);s!==0&&(r=s,n=Vi(e,s))}if(n===1)throw n=ga,Wr(e,0),Nr(e,r),xt(e,Oe()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Vr(e,gt,sr),xt(e,Oe()),null}function Ki(e,r){var n=xe;xe|=1;try{return e(r)}finally{xe=n,xe===0&&(Cn=Oe()+500,cs&&xr())}}function $r(e){kr!==null&&kr.tag===0&&(xe&6)===0&&En();var r=xe;xe|=1;var n=_t.transition,s=ke;try{if(_t.transition=null,ke=1,e)return e()}finally{ke=s,_t.transition=n,xe=r,(xe&6)===0&&xr()}}function Gi(){Ct=Sn.current,Ee(Sn)}function Wr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),Ue!==null)for(n=Ue.return;n!==null;){var s=n;switch(ai(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&is();break;case 3:kn(),Ee(mt),Ee(et),xi();break;case 5:hi(s);break;case 4:kn();break;case 13:Ee(Te);break;case 19:Ee(Te);break;case 10:di(s.type._context);break;case 22:case 23:Gi()}n=n.return}if(Ve=e,Ue=e=Sr(e.current,null),Xe=Ct=r,He=0,ga=null,qi=Ts=Hr=0,gt=xa=null,Ir!==null){for(r=0;r<Ir.length;r++)if(n=Ir[r],s=n.interleaved,s!==null){n.interleaved=null;var l=s.next,d=n.pending;if(d!==null){var h=d.next;d.next=l,s.next=h}n.pending=s}Ir=null}return e}function xu(e,r){do{var n=Ue;try{if(ci(),vs.current=ws,bs){for(var s=_e.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}bs=!1}if(qr=0,We=qe=_e=null,da=!1,ua=0,Ui.current=null,n===null||n.return===null){He=1,ga=r,Ue=null;break}e:{var d=e,h=n.return,v=n,w=r;if(r=Xe,v.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var R=w,W=v,Q=W.tag;if((W.mode&1)===0&&(Q===0||Q===11||Q===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=qd(h);if(Z!==null){Z.flags&=-257,Hd(Z,h,v,d,r),Z.mode&1&&Ud(d,R,r),r=Z,w=R;var te=r.updateQueue;if(te===null){var re=new Set;re.add(w),r.updateQueue=re}else te.add(w);break e}else{if((r&1)===0){Ud(d,R,r),Yi();break e}w=Error(i(426))}}else if(ze&&v.mode&1){var Me=qd(h);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),Hd(Me,h,v,d,r),ii(wn(w,v));break e}}d=w=wn(w,v),He!==4&&(He=2),xa===null?xa=[d]:xa.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,r&=-r,d.lanes|=r;var T=Bd(d,w,r);pd(d,T);break e;case 1:v=w;var E=d.type,_=d.stateNode;if((d.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(jr===null||!jr.has(_)))){d.flags|=65536,r&=-r,d.lanes|=r;var G=Id(d,v,r);pd(d,G);break e}}d=d.return}while(d!==null)}bu(n)}catch(ne){r=ne,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function yu(){var e=zs.current;return zs.current=ws,e===null?ws:e}function Yi(){(He===0||He===3||He===2)&&(He=4),Ve===null||(Hr&268435455)===0&&(Ts&268435455)===0||Nr(Ve,Xe)}function Ls(e,r){var n=xe;xe|=2;var s=yu();(Ve!==e||Xe!==r)&&(sr=null,Wr(e,r));do try{ih();break}catch(l){xu(e,l)}while(!0);if(ci(),xe=n,zs.current=s,Ue!==null)throw Error(i(261));return Ve=null,Xe=0,He}function ih(){for(;Ue!==null;)vu(Ue)}function lh(){for(;Ue!==null&&!Am();)vu(Ue)}function vu(e){var r=wu(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,r===null?bu(e):Ue=r,Ui.current=null}function bu(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=eh(n,r,Ct),n!==null){Ue=n;return}}else{if(n=th(n,r),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Ue=null;return}}if(r=r.sibling,r!==null){Ue=r;return}Ue=r=e}while(r!==null);He===0&&(He=5)}function Vr(e,r,n){var s=ke,l=_t.transition;try{_t.transition=null,ke=1,ch(e,r,n,s)}finally{_t.transition=l,ke=s}return null}function ch(e,r,n,s){do En();while(kr!==null);if((xe&6)!==0)throw Error(i(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=n.lanes|n.childLanes;if(qm(e,d),e===Ve&&(Ue=Ve=null,Xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||As||(As=!0,Nu(Ia,function(){return En(),null})),d=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||d){d=_t.transition,_t.transition=null;var h=ke;ke=1;var v=xe;xe|=4,Ui.current=null,nh(e,n),du(n,e),zf(Yo),Qa=!!Go,Yo=Go=null,e.current=n,ah(n),Rm(),xe=v,ke=h,_t.transition=d}else e.current=n;if(As&&(As=!1,kr=e,Rs=l),d=e.pendingLanes,d===0&&(jr=null),Lm(n.stateNode),xt(e,Oe()),r!==null)for(s=e.onRecoverableError,n=0;n<r.length;n++)l=r[n],s(l.value,{componentStack:l.stack,digest:l.digest});if(_s)throw _s=!1,e=$i,$i=null,e;return(Rs&1)!==0&&e.tag!==0&&En(),d=e.pendingLanes,(d&1)!==0?e===Wi?ya++:(ya=0,Wi=e):ya=0,xr(),null}function En(){if(kr!==null){var e=lc(Rs),r=_t.transition,n=ke;try{if(_t.transition=null,ke=16>e?16:e,kr===null)var s=!1;else{if(e=kr,kr=null,Rs=0,(xe&6)!==0)throw Error(i(331));var l=xe;for(xe|=4,ee=e.current;ee!==null;){var d=ee,h=d.child;if((ee.flags&16)!==0){var v=d.deletions;if(v!==null){for(var w=0;w<v.length;w++){var R=v[w];for(ee=R;ee!==null;){var W=ee;switch(W.tag){case 0:case 11:case 15:ha(8,W,d)}var Q=W.child;if(Q!==null)Q.return=W,ee=Q;else for(;ee!==null;){W=ee;var H=W.sibling,Z=W.return;if(su(W),W===R){ee=null;break}if(H!==null){H.return=Z,ee=H;break}ee=Z}}}var te=d.alternate;if(te!==null){var re=te.child;if(re!==null){te.child=null;do{var Me=re.sibling;re.sibling=null,re=Me}while(re!==null)}}ee=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,ee=h;else e:for(;ee!==null;){if(d=ee,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:ha(9,d,d.return)}var T=d.sibling;if(T!==null){T.return=d.return,ee=T;break e}ee=d.return}}var E=e.current;for(ee=E;ee!==null;){h=ee;var _=h.child;if((h.subtreeFlags&2064)!==0&&_!==null)_.return=h,ee=_;else e:for(h=E;ee!==null;){if(v=ee,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:Ps(9,v)}}catch(ne){Re(v,v.return,ne)}if(v===h){ee=null;break e}var G=v.sibling;if(G!==null){G.return=v.return,ee=G;break e}ee=v.return}}if(xe=l,xr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Ua,e)}catch{}s=!0}return s}finally{ke=n,_t.transition=r}}return!1}function ju(e,r,n){r=wn(n,r),r=Bd(e,r,1),e=vr(e,r,1),r=it(),e!==null&&(qn(e,1,r),xt(e,r))}function Re(e,r,n){if(e.tag===3)ju(e,e,n);else for(;r!==null;){if(r.tag===3){ju(r,e,n);break}else if(r.tag===1){var s=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(jr===null||!jr.has(s))){e=wn(n,e),e=Id(r,e,1),r=vr(r,e,1),e=it(),r!==null&&(qn(r,1,e),xt(r,e));break}}r=r.return}}function dh(e,r,n){var s=e.pingCache;s!==null&&s.delete(r),r=it(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Xe&n)===n&&(He===4||He===3&&(Xe&130023424)===Xe&&500>Oe()-Hi?Wr(e,0):qi|=n),xt(e,r)}function ku(e,r){r===0&&((e.mode&1)===0?r=1:(r=Ha,Ha<<=1,(Ha&130023424)===0&&(Ha=4194304)));var n=it();e=rr(e,r),e!==null&&(qn(e,r,n),xt(e,n))}function uh(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),ku(e,n)}function ph(e,r){var n=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(r),ku(e,n)}var wu;wu=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||mt.current)ht=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return ht=!1,Zf(e,r,n);ht=(e.flags&131072)!==0}else ht=!1,ze&&(r.flags&1048576)!==0&&rd(r,us,r.index);switch(r.lanes=0,r.tag){case 2:var s=r.type;Cs(e,r),e=r.pendingProps;var l=hn(r,et.current);jn(r,n),l=bi(null,r,s,e,l,n);var d=ji();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ft(s)?(d=!0,ls(r)):d=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mi(r),l.updater=Ns,r.stateNode=l,l._reactInternals=r,Ei(r,s,e,n),r=_i(null,r,s,!0,d,n)):(r.tag=0,ze&&d&&ni(r),ot(null,r,l,n),r=r.child),r;case 16:s=r.elementType;e:{switch(Cs(e,r),e=r.pendingProps,l=s._init,s=l(s._payload),r.type=s,l=r.tag=fh(s),e=qt(s,e),l){case 0:r=Ti(null,r,s,e,n);break e;case 1:r=Gd(null,r,s,e,n);break e;case 11:r=$d(null,r,s,e,n);break e;case 14:r=Wd(null,r,s,qt(s.type,e),n);break e}throw Error(i(306,s,""))}return r;case 0:return s=r.type,l=r.pendingProps,l=r.elementType===s?l:qt(s,l),Ti(e,r,s,l,n);case 1:return s=r.type,l=r.pendingProps,l=r.elementType===s?l:qt(s,l),Gd(e,r,s,l,n);case 3:e:{if(Yd(r),e===null)throw Error(i(387));s=r.pendingProps,d=r.memoizedState,l=d.element,ud(e,r),xs(r,s,null,n);var h=r.memoizedState;if(s=h.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){l=wn(Error(i(423)),r),r=Xd(e,r,s,n,l);break e}else if(s!==l){l=wn(Error(i(424)),r),r=Xd(e,r,s,n,l);break e}else for(St=fr(r.stateNode.containerInfo.firstChild),Nt=r,ze=!0,Ut=null,n=cd(r,null,s,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),s===l){r=ar(e,r,n);break e}ot(e,r,s,n)}r=r.child}return r;case 5:return fd(r),e===null&&oi(r),s=r.type,l=r.pendingProps,d=e!==null?e.memoizedProps:null,h=l.children,Xo(s,l)?h=null:d!==null&&Xo(s,d)&&(r.flags|=32),Kd(e,r),ot(e,r,h,n),r.child;case 6:return e===null&&oi(r),null;case 13:return Jd(e,r,n);case 4:return fi(r,r.stateNode.containerInfo),s=r.pendingProps,e===null?r.child=vn(r,null,s,n):ot(e,r,s,n),r.child;case 11:return s=r.type,l=r.pendingProps,l=r.elementType===s?l:qt(s,l),$d(e,r,s,l,n);case 7:return ot(e,r,r.pendingProps,n),r.child;case 8:return ot(e,r,r.pendingProps.children,n),r.child;case 12:return ot(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(s=r.type._context,l=r.pendingProps,d=r.memoizedProps,h=l.value,we(fs,s._currentValue),s._currentValue=h,d!==null)if(It(d.value,h)){if(d.children===l.children&&!mt.current){r=ar(e,r,n);break e}}else for(d=r.child,d!==null&&(d.return=r);d!==null;){var v=d.dependencies;if(v!==null){h=d.child;for(var w=v.firstContext;w!==null;){if(w.context===s){if(d.tag===1){w=nr(-1,n&-n),w.tag=2;var R=d.updateQueue;if(R!==null){R=R.shared;var W=R.pending;W===null?w.next=w:(w.next=W.next,W.next=w),R.pending=w}}d.lanes|=n,w=d.alternate,w!==null&&(w.lanes|=n),ui(d.return,n,r),v.lanes|=n;break}w=w.next}}else if(d.tag===10)h=d.type===r.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(i(341));h.lanes|=n,v=h.alternate,v!==null&&(v.lanes|=n),ui(h,n,r),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===r){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}ot(e,r,l.children,n),r=r.child}return r;case 9:return l=r.type,s=r.pendingProps.children,jn(r,n),l=zt(l),s=s(l),r.flags|=1,ot(e,r,s,n),r.child;case 14:return s=r.type,l=qt(s,r.pendingProps),l=qt(s.type,l),Wd(e,r,s,l,n);case 15:return Vd(e,r,r.type,r.pendingProps,n);case 17:return s=r.type,l=r.pendingProps,l=r.elementType===s?l:qt(s,l),Cs(e,r),r.tag=1,ft(s)?(e=!0,ls(r)):e=!1,jn(r,n),Od(r,s,l),Ei(r,s,l,n),_i(null,r,s,!0,e,n);case 19:return eu(e,r,n);case 22:return Qd(e,r,n)}throw Error(i(156,r.tag))};function Nu(e,r){return nc(e,r)}function mh(e,r,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,r,n,s){return new mh(e,r,n,s)}function Xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fh(e){if(typeof e=="function")return Xi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===Ge)return 14}return 2}function Sr(e,r){var n=e.alternate;return n===null?(n=At(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Os(e,r,n,s,l,d){var h=2;if(s=e,typeof e=="function")Xi(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case j:return Qr(n.children,l,d,r);case V:h=8,l|=8;break;case X:return e=At(12,n,r,l|2),e.elementType=X,e.lanes=d,e;case De:return e=At(13,n,r,l),e.elementType=De,e.lanes=d,e;case Se:return e=At(19,n,r,l),e.elementType=Se,e.lanes=d,e;case be:return Ms(n,l,d,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:h=10;break e;case pe:h=9;break e;case Ne:h=11;break e;case Ge:h=14;break e;case Le:h=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=At(h,n,r,l),r.elementType=e,r.type=s,r.lanes=d,r}function Qr(e,r,n,s){return e=At(7,e,s,r),e.lanes=n,e}function Ms(e,r,n,s){return e=At(22,e,s,r),e.elementType=be,e.lanes=n,e.stateNode={isHidden:!1},e}function Ji(e,r,n){return e=At(6,e,null,r),e.lanes=n,e}function Zi(e,r,n){return r=At(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function hh(e,r,n,s,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function el(e,r,n,s,l,d,h,v,w){return e=new hh(e,r,n,v,w),r===1?(r=1,d===!0&&(r|=8)):r=0,d=At(3,null,null,r),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(d),e}function gh(e,r,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:s==null?null:""+s,children:e,containerInfo:r,implementation:n}}function Su(e){if(!e)return gr;e=e._reactInternals;e:{if(Dr(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ft(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(ft(n))return Zc(e,n,r)}return r}function Cu(e,r,n,s,l,d,h,v,w){return e=el(n,s,!0,e,l,d,h,v,w),e.context=Su(null),n=e.current,s=it(),l=wr(n),d=nr(s,l),d.callback=r??null,vr(n,d,l),e.current.lanes=l,qn(e,l,s),xt(e,s),e}function Bs(e,r,n,s){var l=r.current,d=it(),h=wr(l);return n=Su(n),r.context===null?r.context=n:r.pendingContext=n,r=nr(d,h),r.payload={element:e},s=s===void 0?null:s,s!==null&&(r.callback=s),e=vr(l,r,h),e!==null&&(Wt(e,l,h,d),gs(e,l,h)),h}function Is(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function tl(e,r){Eu(e,r),(e=e.alternate)&&Eu(e,r)}function xh(){return null}var Pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function rl(e){this._internalRoot=e}Us.prototype.render=rl.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));Bs(e,r,null,null)},Us.prototype.unmount=rl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;$r(function(){Bs(null,e,null,null)}),r[Jt]=null}};function Us(e){this._internalRoot=e}Us.prototype.unstable_scheduleHydration=function(e){if(e){var r=uc();e={blockedOn:null,target:e,priority:r};for(var n=0;n<ur.length&&r!==0&&r<ur[n].priority;n++);ur.splice(n,0,e),n===0&&fc(e)}};function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function yh(e,r,n,s,l){if(l){if(typeof s=="function"){var d=s;s=function(){var R=Is(h);d.call(R)}}var h=Cu(r,s,e,0,null,!1,!1,"",zu);return e._reactRootContainer=h,e[Jt]=h.current,ra(e.nodeType===8?e.parentNode:e),$r(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var v=s;s=function(){var R=Is(w);v.call(R)}}var w=el(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=w,e[Jt]=w.current,ra(e.nodeType===8?e.parentNode:e),$r(function(){Bs(r,w,n,s)}),w}function Hs(e,r,n,s,l){var d=n._reactRootContainer;if(d){var h=d;if(typeof l=="function"){var v=l;l=function(){var w=Is(h);v.call(w)}}Bs(r,h,e,l)}else h=yh(n,r,e,l,s);return Is(h)}cc=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Un(r.pendingLanes);n!==0&&(Eo(r,n|1),xt(r,Oe()),(xe&6)===0&&(Cn=Oe()+500,xr()))}break;case 13:$r(function(){var s=rr(e,1);if(s!==null){var l=it();Wt(s,e,1,l)}}),tl(e,1)}},Po=function(e){if(e.tag===13){var r=rr(e,134217728);if(r!==null){var n=it();Wt(r,e,134217728,n)}tl(e,134217728)}},dc=function(e){if(e.tag===13){var r=wr(e),n=rr(e,r);if(n!==null){var s=it();Wt(n,e,r,s)}tl(e,r)}},uc=function(){return ke},pc=function(e,r){var n=ke;try{return ke=e,r()}finally{ke=n}},bo=function(e,r,n){switch(r){case"input":if(kt(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var s=n[r];if(s!==e&&s.form===e.form){var l=os(s);if(!l)throw Error(i(90));ct(s),kt(s,l)}}}break;case"textarea":ir(e,n);break;case"select":r=n.value,r!=null&&pt(e,!!n.multiple,r,!1)}},Yl=Ki,Xl=$r;var vh={usingClientEntryPoint:!1,Events:[sa,mn,os,Kl,Gl,Ki]},va={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bh={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tc(e),e===null?null:e.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{Ua=$s.inject(bh),Qt=$s}catch{}}return yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vh,yt.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(r))throw Error(i(200));return gh(e,r,null,n)},yt.createRoot=function(e,r){if(!nl(e))throw Error(i(299));var n=!1,s="",l=Pu;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=el(e,1,!1,null,null,n,!1,s,l),e[Jt]=r.current,ra(e.nodeType===8?e.parentNode:e),new rl(r)},yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=tc(r),e=e===null?null:e.stateNode,e},yt.flushSync=function(e){return $r(e)},yt.hydrate=function(e,r,n){if(!qs(r))throw Error(i(200));return Hs(null,e,r,!0,n)},yt.hydrateRoot=function(e,r,n){if(!nl(e))throw Error(i(405));var s=n!=null&&n.hydratedSources||null,l=!1,d="",h=Pu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),r=Cu(r,null,e,1,n??null,l,!1,d,h),e[Jt]=r.current,ra(e),s)for(e=0;e<s.length;e++)n=s[e],l=n._getVersion,l=l(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,l]:r.mutableSourceEagerHydrationData.push(n,l);return new Us(r)},yt.render=function(e,r,n){if(!qs(r))throw Error(i(200));return Hs(null,e,r,!1,n)},yt.unmountComponentAtNode=function(e){if(!qs(e))throw Error(i(40));return e._reactRootContainer?($r(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1},yt.unstable_batchedUpdates=Ki,yt.unstable_renderSubtreeIntoContainer=function(e,r,n,s){if(!qs(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Hs(e,r,n,!1,s)},yt.version="18.3.1-next-f1338f8080-20240426",yt}var Ou;function jp(){if(Ou)return ol.exports;Ou=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),ol.exports=zh(),ol.exports}var Mu;function Th(){if(Mu)return Ws;Mu=1;var a=jp();return Ws.createRoot=a.createRoot,Ws.hydrateRoot=a.hydrateRoot,Ws}var _h=Th();const Ah=vp(_h);jp();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(a){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var c in i)({}).hasOwnProperty.call(i,c)&&(a[c]=i[c])}return a},Na.apply(null,arguments)}var Er;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Er||(Er={}));const Bu="popstate";function Rh(a){a===void 0&&(a={});function o(c,u){let{pathname:p,search:m,hash:f}=c.location;return vl("",{pathname:p,search:m,hash:f},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(c,u){return typeof u=="string"?u:Xs(u)}return Dh(o,i,null,a)}function Fe(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function kp(a,o){if(!a){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Fh(){return Math.random().toString(36).substr(2,8)}function Iu(a,o){return{usr:a.state,key:a.key,idx:o}}function vl(a,o,i,c){return i===void 0&&(i=null),Na({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof o=="string"?Tn(o):o,{state:i,key:o&&o.key||c||Fh()})}function Xs(a){let{pathname:o="/",search:i="",hash:c=""}=a;return i&&i!=="?"&&(o+=i.charAt(0)==="?"?i:"?"+i),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function Tn(a){let o={};if(a){let i=a.indexOf("#");i>=0&&(o.hash=a.substr(i),a=a.substr(0,i));let c=a.indexOf("?");c>=0&&(o.search=a.substr(c),a=a.substr(0,c)),a&&(o.pathname=a)}return o}function Dh(a,o,i,c){c===void 0&&(c={});let{window:u=document.defaultView,v5Compat:p=!1}=c,m=u.history,f=Er.Pop,g=null,b=x();b==null&&(b=0,m.replaceState(Na({},m.state,{idx:b}),""));function x(){return(m.state||{idx:null}).idx}function y(){f=Er.Pop;let A=x(),z=A==null?null:A-b;b=A,g&&g({action:f,location:C.location,delta:z})}function N(A,z){f=Er.Push;let L=vl(C.location,A,z);b=x()+1;let U=Iu(L,b),F=C.createHref(L);try{m.pushState(U,"",F)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;u.location.assign(F)}p&&g&&g({action:f,location:C.location,delta:1})}function O(A,z){f=Er.Replace;let L=vl(C.location,A,z);b=x();let U=Iu(L,b),F=C.createHref(L);m.replaceState(U,"",F),p&&g&&g({action:f,location:C.location,delta:0})}function B(A){let z=u.location.origin!=="null"?u.location.origin:u.location.href,L=typeof A=="string"?A:Xs(A);return L=L.replace(/ $/,"%20"),Fe(z,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,z)}let C={get action(){return f},get location(){return a(u,m)},listen(A){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(Bu,y),g=A,()=>{u.removeEventListener(Bu,y),g=null}},createHref(A){return o(u,A)},createURL:B,encodeLocation(A){let z=B(A);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:N,replace:O,go(A){return m.go(A)}};return C}var Uu;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(Uu||(Uu={}));function Lh(a,o,i){return i===void 0&&(i="/"),Oh(a,o,i)}function Oh(a,o,i,c){let u=typeof o=="string"?Tn(o):o,p=zn(u.pathname||"/",i);if(p==null)return null;let m=wp(a);Mh(m);let f=null,g=Gh(p);for(let b=0;f==null&&b<m.length;++b)f=Qh(m[b],g);return f}function wp(a,o,i,c){o===void 0&&(o=[]),i===void 0&&(i=[]),c===void 0&&(c="");let u=(p,m,f)=>{let g={relativePath:f===void 0?p.path||"":f,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};g.relativePath.startsWith("/")&&(Fe(g.relativePath.startsWith(c),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(c.length));let b=Pr([c,g.relativePath]),x=i.concat(g);p.children&&p.children.length>0&&(Fe(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),wp(p.children,o,x,b)),!(p.path==null&&!p.index)&&o.push({path:b,score:Wh(b,p.index),routesMeta:x})};return a.forEach((p,m)=>{var f;if(p.path===""||!((f=p.path)!=null&&f.includes("?")))u(p,m);else for(let g of Np(p.path))u(p,m,g)}),o}function Np(a){let o=a.split("/");if(o.length===0)return[];let[i,...c]=o,u=i.endsWith("?"),p=i.replace(/\?$/,"");if(c.length===0)return u?[p,""]:[p];let m=Np(c.join("/")),f=[];return f.push(...m.map(g=>g===""?p:[p,g].join("/"))),u&&f.push(...m),f.map(g=>a.startsWith("/")&&g===""?"/":g)}function Mh(a){a.sort((o,i)=>o.score!==i.score?i.score-o.score:Vh(o.routesMeta.map(c=>c.childrenIndex),i.routesMeta.map(c=>c.childrenIndex)))}const Bh=/^:[\w-]+$/,Ih=3,Uh=2,qh=1,Hh=10,$h=-2,qu=a=>a==="*";function Wh(a,o){let i=a.split("/"),c=i.length;return i.some(qu)&&(c+=$h),o&&(c+=Uh),i.filter(u=>!qu(u)).reduce((u,p)=>u+(Bh.test(p)?Ih:p===""?qh:Hh),c)}function Vh(a,o){return a.length===o.length&&a.slice(0,-1).every((c,u)=>c===o[u])?a[a.length-1]-o[o.length-1]:0}function Qh(a,o,i){let{routesMeta:c}=a,u={},p="/",m=[];for(let f=0;f<c.length;++f){let g=c[f],b=f===c.length-1,x=p==="/"?o:o.slice(p.length)||"/",y=bl({path:g.relativePath,caseSensitive:g.caseSensitive,end:b},x),N=g.route;if(!y)return null;Object.assign(u,y.params),m.push({params:u,pathname:Pr([p,y.pathname]),pathnameBase:Jh(Pr([p,y.pathnameBase])),route:N}),y.pathnameBase!=="/"&&(p=Pr([p,y.pathnameBase]))}return m}function bl(a,o){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,c]=Kh(a.path,a.caseSensitive,a.end),u=o.match(i);if(!u)return null;let p=u[0],m=p.replace(/(.)\/+$/,"$1"),f=u.slice(1);return{params:c.reduce((b,x,y)=>{let{paramName:N,isOptional:O}=x;if(N==="*"){let C=f[y]||"";m=p.slice(0,p.length-C.length).replace(/(.)\/+$/,"$1")}const B=f[y];return O&&!B?b[N]=void 0:b[N]=(B||"").replace(/%2F/g,"/"),b},{}),pathname:p,pathnameBase:m,pattern:a}}function Kh(a,o,i){o===void 0&&(o=!1),i===void 0&&(i=!0),kp(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let c=[],u="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,f,g)=>(c.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),u+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":a!==""&&a!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),c]}function Gh(a){try{return a.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return kp(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),a}}function zn(a,o){if(o==="/")return a;if(!a.toLowerCase().startsWith(o.toLowerCase()))return null;let i=o.endsWith("/")?o.length-1:o.length,c=a.charAt(i);return c&&c!=="/"?null:a.slice(i)||"/"}function Yh(a,o){o===void 0&&(o="/");let{pathname:i,search:c="",hash:u=""}=typeof a=="string"?Tn(a):a,p;return i?(i=Ep(i),i.startsWith("/")?p=Hu(i.substring(1),"/"):p=Hu(i,o)):p=o,{pathname:p,search:Zh(c),hash:eg(u)}}function Hu(a,o){let i=o.replace(/\/+$/,"").split("/");return a.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function cl(a,o,i,c){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xh(a){return a.filter((o,i)=>i===0||o.route.path&&o.route.path.length>0)}function Sp(a,o){let i=Xh(a);return o?i.map((c,u)=>u===i.length-1?c.pathname:c.pathnameBase):i.map(c=>c.pathnameBase)}function Cp(a,o,i,c){c===void 0&&(c=!1);let u;typeof a=="string"?u=Tn(a):(u=Na({},a),Fe(!u.pathname||!u.pathname.includes("?"),cl("?","pathname","search",u)),Fe(!u.pathname||!u.pathname.includes("#"),cl("#","pathname","hash",u)),Fe(!u.search||!u.search.includes("#"),cl("#","search","hash",u)));let p=a===""||u.pathname==="",m=p?"/":u.pathname,f;if(m==null)f=i;else{let y=o.length-1;if(!c&&m.startsWith("..")){let N=m.split("/");for(;N[0]==="..";)N.shift(),y-=1;u.pathname=N.join("/")}f=y>=0?o[y]:"/"}let g=Yh(u,f),b=m&&m!=="/"&&m.endsWith("/"),x=(p||m===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(b||x)&&(g.pathname+="/"),g}const Ep=a=>a.replace(/\/\/+/g,"/"),Pr=a=>Ep(a.join("/")),Jh=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Zh=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,eg=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function tg(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const Pp=["post","put","patch","delete"];new Set(Pp);const rg=["get",...Pp];new Set(rg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign?Object.assign.bind():function(a){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var c in i)({}).hasOwnProperty.call(i,c)&&(a[c]=i[c])}return a},Sa.apply(null,arguments)}const no=k.createContext(null),zp=k.createContext(null),Rr=k.createContext(null),ao=k.createContext(null),Fr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Tp=k.createContext(null);function ng(a,o){let{relative:i}=o===void 0?{}:o;za()||Fe(!1);let{basename:c,navigator:u}=k.useContext(Rr),{hash:p,pathname:m,search:f}=so(a,{relative:i}),g=m;return c!=="/"&&(g=m==="/"?c:Pr([c,m])),u.createHref({pathname:g,search:f,hash:p})}function za(){return k.useContext(ao)!=null}function Zr(){return za()||Fe(!1),k.useContext(ao).location}function _p(a){k.useContext(Rr).static||k.useLayoutEffect(a)}function Lt(){let{isDataRoute:a}=k.useContext(Fr);return a?yg():ag()}function ag(){za()||Fe(!1);let a=k.useContext(no),{basename:o,future:i,navigator:c}=k.useContext(Rr),{matches:u}=k.useContext(Fr),{pathname:p}=Zr(),m=JSON.stringify(Sp(u,i.v7_relativeSplatPath)),f=k.useRef(!1);return _p(()=>{f.current=!0}),k.useCallback(function(b,x){if(x===void 0&&(x={}),!f.current)return;if(typeof b=="number"){c.go(b);return}let y=Cp(b,JSON.parse(m),p,x.relative==="path");a==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:Pr([o,y.pathname])),(x.replace?c.replace:c.push)(y,x.state,x)},[o,c,m,p,a])}const sg=k.createContext(null);function og(a){let o=k.useContext(Fr).outlet;return o&&k.createElement(sg.Provider,{value:a},o)}function so(a,o){let{relative:i}=o===void 0?{}:o,{future:c}=k.useContext(Rr),{matches:u}=k.useContext(Fr),{pathname:p}=Zr(),m=JSON.stringify(Sp(u,c.v7_relativeSplatPath));return k.useMemo(()=>Cp(a,JSON.parse(m),p,i==="path"),[a,m,p,i])}function ig(a,o){return lg(a,o)}function lg(a,o,i,c){za()||Fe(!1);let{navigator:u}=k.useContext(Rr),{matches:p}=k.useContext(Fr),m=p[p.length-1],f=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let b=Zr(),x;if(o){var y;let A=typeof o=="string"?Tn(o):o;g==="/"||(y=A.pathname)!=null&&y.startsWith(g)||Fe(!1),x=A}else x=b;let N=x.pathname||"/",O=N;if(g!=="/"){let A=g.replace(/^\//,"").split("/");O="/"+N.replace(/^\//,"").split("/").slice(A.length).join("/")}let B=Lh(a,{pathname:O}),C=mg(B&&B.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:Pr([g,u.encodeLocation?u.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:Pr([g,u.encodeLocation?u.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),p,i,c);return o&&C?k.createElement(ao.Provider,{value:{location:Sa({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Er.Pop}},C):C}function cg(){let a=xg(),o=tg(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},o),i?k.createElement("pre",{style:u},i):null,null)}const dg=k.createElement(cg,null);class ug extends k.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,i){return i.location!==o.location||i.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:i.error,location:i.location,revalidation:o.revalidation||i.revalidation}}componentDidCatch(o,i){console.error("React Router caught the following error during render",o,i)}render(){return this.state.error!==void 0?k.createElement(Fr.Provider,{value:this.props.routeContext},k.createElement(Tp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pg(a){let{routeContext:o,match:i,children:c}=a,u=k.useContext(no);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(Fr.Provider,{value:o},c)}function mg(a,o,i,c){var u;if(o===void 0&&(o=[]),i===void 0&&(i=null),c===void 0&&(c=null),a==null){var p;if(!i)return null;if(i.errors)a=i.matches;else if((p=c)!=null&&p.v7_partialHydration&&o.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let m=a,f=(u=i)==null?void 0:u.errors;if(f!=null){let x=m.findIndex(y=>y.route.id&&(f==null?void 0:f[y.route.id])!==void 0);x>=0||Fe(!1),m=m.slice(0,Math.min(m.length,x+1))}let g=!1,b=-1;if(i&&c&&c.v7_partialHydration)for(let x=0;x<m.length;x++){let y=m[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(b=x),y.route.id){let{loaderData:N,errors:O}=i,B=y.route.loader&&N[y.route.id]===void 0&&(!O||O[y.route.id]===void 0);if(y.route.lazy||B){g=!0,b>=0?m=m.slice(0,b+1):m=[m[0]];break}}}return m.reduceRight((x,y,N)=>{let O,B=!1,C=null,A=null;i&&(O=f&&y.route.id?f[y.route.id]:void 0,C=y.route.errorElement||dg,g&&(b<0&&N===0?(vg("route-fallback"),B=!0,A=null):b===N&&(B=!0,A=y.route.hydrateFallbackElement||null)));let z=o.concat(m.slice(0,N+1)),L=()=>{let U;return O?U=C:B?U=A:y.route.Component?U=k.createElement(y.route.Component,null):y.route.element?U=y.route.element:U=x,k.createElement(pg,{match:y,routeContext:{outlet:x,matches:z,isDataRoute:i!=null},children:U})};return i&&(y.route.ErrorBoundary||y.route.errorElement||N===0)?k.createElement(ug,{location:i.location,revalidation:i.revalidation,component:C,error:O,children:L(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):L()},null)}var Ap=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(Ap||{}),Rp=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(Rp||{});function fg(a){let o=k.useContext(no);return o||Fe(!1),o}function hg(a){let o=k.useContext(zp);return o||Fe(!1),o}function gg(a){let o=k.useContext(Fr);return o||Fe(!1),o}function Fp(a){let o=gg(),i=o.matches[o.matches.length-1];return i.route.id||Fe(!1),i.route.id}function xg(){var a;let o=k.useContext(Tp),i=hg(),c=Fp();return o!==void 0?o:(a=i.errors)==null?void 0:a[c]}function yg(){let{router:a}=fg(Ap.UseNavigateStable),o=Fp(Rp.UseNavigateStable),i=k.useRef(!1);return _p(()=>{i.current=!0}),k.useCallback(function(u,p){p===void 0&&(p={}),i.current&&(typeof u=="number"?a.navigate(u):a.navigate(u,Sa({fromRouteId:o},p)))},[a,o])}const $u={};function vg(a,o,i){$u[a]||($u[a]=!0)}function bg(a,o){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function jg(a){return og(a.context)}function $e(a){Fe(!1)}function kg(a){let{basename:o="/",children:i=null,location:c,navigationType:u=Er.Pop,navigator:p,static:m=!1,future:f}=a;za()&&Fe(!1);let g=o.replace(/^\/*/,"/"),b=k.useMemo(()=>({basename:g,navigator:p,static:m,future:Sa({v7_relativeSplatPath:!1},f)}),[g,f,p,m]);typeof c=="string"&&(c=Tn(c));let{pathname:x="/",search:y="",hash:N="",state:O=null,key:B="default"}=c,C=k.useMemo(()=>{let A=zn(x,g);return A==null?null:{location:{pathname:A,search:y,hash:N,state:O,key:B},navigationType:u}},[g,x,y,N,O,B,u]);return C==null?null:k.createElement(Rr.Provider,{value:b},k.createElement(ao.Provider,{children:i,value:C}))}function wg(a){let{children:o,location:i}=a;return ig(jl(o),i)}new Promise(()=>{});function jl(a,o){o===void 0&&(o=[]);let i=[];return k.Children.forEach(a,(c,u)=>{if(!k.isValidElement(c))return;let p=[...o,u];if(c.type===k.Fragment){i.push.apply(i,jl(c.props.children,p));return}c.type!==$e&&Fe(!1),!c.props.index||!c.props.children||Fe(!1);let m={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=jl(c.props.children,p)),i.push(m)}),i}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Js(){return Js=Object.assign?Object.assign.bind():function(a){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var c in i)({}).hasOwnProperty.call(i,c)&&(a[c]=i[c])}return a},Js.apply(null,arguments)}function Dp(a,o){if(a==null)return{};var i={};for(var c in a)if({}.hasOwnProperty.call(a,c)){if(o.indexOf(c)!==-1)continue;i[c]=a[c]}return i}function Ng(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Sg(a,o){return a.button===0&&(!o||o==="_self")&&!Ng(a)}function kl(a){return a===void 0&&(a=""),new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((o,i)=>{let c=a[i];return o.concat(Array.isArray(c)?c.map(u=>[i,u]):[[i,c]])},[]))}function Cg(a,o){let i=kl(a);return o&&o.forEach((c,u)=>{i.has(u)||o.getAll(u).forEach(p=>{i.append(u,p)})}),i}const Eg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pg=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],zg="6";try{window.__reactRouterVersion=zg}catch{}const Tg=k.createContext({isTransitioning:!1}),_g="startTransition",Wu=Ch[_g];function Ag(a){let{basename:o,children:i,future:c,window:u}=a,p=k.useRef();p.current==null&&(p.current=Rh({window:u,v5Compat:!0}));let m=p.current,[f,g]=k.useState({action:m.action,location:m.location}),{v7_startTransition:b}=c||{},x=k.useCallback(y=>{b&&Wu?Wu(()=>g(y)):g(y)},[g,b]);return k.useLayoutEffect(()=>m.listen(x),[m,x]),k.useEffect(()=>bg(c),[c]),k.createElement(kg,{basename:o,children:i,location:f.location,navigationType:f.action,navigator:m,future:c})}const Rg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=k.forwardRef(function(o,i){let{onClick:c,relative:u,reloadDocument:p,replace:m,state:f,target:g,to:b,preventScrollReset:x,viewTransition:y}=o,N=Dp(o,Eg),{basename:O}=k.useContext(Rr),B,C=!1;if(typeof b=="string"&&Fg.test(b)&&(B=b,Rg))try{let U=new URL(window.location.href),F=b.startsWith("//")?new URL(U.protocol+b):new URL(b),q=zn(F.pathname,O);F.origin===U.origin&&q!=null?b=q+F.search+F.hash:C=!0}catch{}let A=ng(b,{relative:u}),z=Lg(b,{replace:m,state:f,target:g,preventScrollReset:x,relative:u,viewTransition:y});function L(U){c&&c(U),U.defaultPrevented||z(U)}return k.createElement("a",Js({},N,{href:B||A,onClick:C||p?c:L,ref:i,target:g}))}),Ae=k.forwardRef(function(o,i){let{"aria-current":c="page",caseSensitive:u=!1,className:p="",end:m=!1,style:f,to:g,viewTransition:b,children:x}=o,y=Dp(o,Pg),N=so(g,{relative:y.relative}),O=Zr(),B=k.useContext(zp),{navigator:C,basename:A}=k.useContext(Rr),z=B!=null&&Mg(N)&&b===!0,L=C.encodeLocation?C.encodeLocation(N).pathname:N.pathname,U=O.pathname,F=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;u||(U=U.toLowerCase(),F=F?F.toLowerCase():null,L=L.toLowerCase()),F&&A&&(F=zn(F,A)||F);const q=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let I=U===L||!m&&U.startsWith(L)&&U.charAt(q)==="/",j=F!=null&&(F===L||!m&&F.startsWith(L)&&F.charAt(L.length)==="/"),V={isActive:I,isPending:j,isTransitioning:z},X=I?c:void 0,K;typeof p=="function"?K=p(V):K=[p,I?"active":null,j?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let pe=typeof f=="function"?f(V):f;return k.createElement(Pe,Js({},y,{"aria-current":X,className:K,ref:i,style:pe,to:g,viewTransition:b}),typeof x=="function"?x(V):x)});var wl;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(wl||(wl={}));var Vu;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Vu||(Vu={}));function Dg(a){let o=k.useContext(no);return o||Fe(!1),o}function Lg(a,o){let{target:i,replace:c,state:u,preventScrollReset:p,relative:m,viewTransition:f}=o===void 0?{}:o,g=Lt(),b=Zr(),x=so(a,{relative:m});return k.useCallback(y=>{if(Sg(y,i)){y.preventDefault();let N=c!==void 0?c:Xs(b)===Xs(x);g(a,{replace:N,state:u,preventScrollReset:p,relative:m,viewTransition:f})}},[b,g,x,c,u,i,a,p,m,f])}function Og(a){let o=k.useRef(kl(a)),i=k.useRef(!1),c=Zr(),u=k.useMemo(()=>Cg(c.search,i.current?null:o.current),[c.search]),p=Lt(),m=k.useCallback((f,g)=>{const b=kl(typeof f=="function"?f(u):f);i.current=!0,p("?"+b,g)},[p,u]);return[u,m]}function Mg(a,o){o===void 0&&(o={});let i=k.useContext(Tg);i==null&&Fe(!1);let{basename:c}=Dg(wl.useViewTransitionState),u=so(a,{relative:o.relative});if(!i.isTransitioning)return!1;let p=zn(i.currentLocation.pathname,c)||i.currentLocation.pathname,m=zn(i.nextLocation.pathname,c)||i.nextLocation.pathname;return bl(u.pathname,m)!=null||bl(u.pathname,p)!=null}function Lp(a,o){return function(){return a.apply(o,arguments)}}const{toString:Bg}=Object.prototype,{getPrototypeOf:zr}=Object,{iterator:Ta,toStringTag:Op}=Symbol,Ca=(({hasOwnProperty:a})=>(o,i)=>a.call(o,i))(Object.prototype),Mp=a=>typeof a=="string"&&(a==="__proto__"||a==="constructor"||a==="prototype"),Bp=(a,o,i)=>a===Object.prototype||!i&&o===null,Ig=a=>{if(!Object.isExtensible(a))return!1;const o=Object.getOwnPropertyNames(a);return Object.getOwnPropertySymbols&&o.push(...Object.getOwnPropertySymbols(a)),o.every(i=>{if(Mp(i))return!1;const c=Object.getOwnPropertyDescriptor(a,i);return!!c&&c.configurable&&c.writable===!0})},Ea=(a,o)=>{let i=a;const c=[];for(;i!=null;){if(c.indexOf(i)!==-1)return!1;c.push(i);const u=zr(i);if(Bp(i,u,i===a))return!1;if(Ca(i,o))return!0;i=u}return!1},Ug=(a,o)=>a!=null&&Ea(a,o)?a[o]:void 0,qg=a=>{if(a==null||typeof a!="object"&&typeof a!="function")return a;const o=zr(a);if(o===null&&Ig(a))return a;const i=Object.create(null),c=Object.create(null),u=[];let p=a;for(;p!=null&&u.indexOf(p)===-1;){u.push(p);const m=p===a?o:zr(p);if(Bp(p,m,p===a))break;const f=Object.getOwnPropertyNames(p);Object.getOwnPropertySymbols&&f.push(...Object.getOwnPropertySymbols(p));for(const g of f)Mp(g)||Ca(c,g)||(i[g]=a[g],c[g]=!0);p=m}return i},zl=(a=>o=>{const i=Bg.call(o);return a[i]||(a[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Ot=a=>(a=a.toLowerCase(),o=>zl(o)===a),oo=a=>o=>typeof o===a,{isArray:Yr}=Array,Xr=oo("undefined");function _n(a){return a!==null&&!Xr(a)&&a.constructor!==null&&!Xr(a.constructor)&&vt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Ip=Ot("ArrayBuffer");function Hg(a){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(a):o=a&&a.buffer&&Ip(a.buffer),o}const $g=oo("string"),vt=oo("function"),Up=oo("number"),An=a=>a!==null&&typeof a=="object",Wg=a=>a===!0||a===!1,Qs=a=>{if(!An(a))return!1;const o=zr(a);return(o===null||o===Object.prototype||zr(o)===null)&&!Ea(a,Op)&&!Ea(a,Ta)},Vg=a=>{if(!An(a)||_n(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},Qg=Ot("Date"),Kg=Ot("File"),Gg=a=>!!(a&&typeof a.uri<"u"),Yg=a=>a&&typeof a.getParts<"u",Xg=Ot("Blob"),Jg=Ot("FileList"),Zg=Ot("Set"),ex=a=>An(a)&&vt(a.pipe);function tx(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Qu=tx(),Ku=typeof Qu.FormData<"u"?Qu.FormData:void 0,rx=a=>{if(!a)return!1;if(Ku&&a instanceof Ku)return!0;const o=zr(a);if(!o||o===Object.prototype||!vt(a.append))return!1;const i=zl(a);return i==="formdata"||i==="object"&&vt(a.toString)&&a.toString()==="[object FormData]"},nx=Ot("URLSearchParams"),[ax,sx,ox,ix]=["ReadableStream","Request","Response","Headers"].map(Ot),lx=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _a(a,o,{allOwnKeys:i=!1}={}){if(a===null||typeof a>"u")return;let c,u;if(typeof a!="object"&&(a=[a]),Yr(a))for(c=0,u=a.length;c<u;c++)o.call(null,a[c],c,a);else{if(_n(a))return;const p=i?Object.getOwnPropertyNames(a):Object.keys(a),m=p.length;let f;for(c=0;c<m;c++)f=p[c],o.call(null,a[f],f,a)}}function qp(a,o){if(_n(a))return null;o=o.toLowerCase();const i=Object.keys(a);let c=i.length,u;for(;c-- >0;)if(u=i[c],o===u.toLowerCase())return u;return null}const Kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hp=a=>!Xr(a)&&a!==Kr;function Nl(...a){const{caseless:o,skipUndefined:i}=Hp(this)&&this||{},c={},u=(p,m)=>{if(m==="__proto__"||m==="constructor"||m==="prototype")return;const f=o&&typeof m=="string"&&qp(c,m)||m,g=Ca(c,f)?c[f]:void 0;Qs(g)&&Qs(p)?c[f]=Nl(g,p):Qs(p)?c[f]=Nl({},p):Yr(p)?c[f]=p.slice():(!i||!Xr(p))&&(c[f]=p)};for(let p=0,m=a.length;p<m;p++){const f=a[p];if(!f||_n(f)||(_a(f,u),typeof f!="object"||Yr(f)))continue;const g=Object.getOwnPropertySymbols(f);for(let b=0;b<g.length;b++){const x=g[b];bx.call(f,x)&&u(f[x],x)}}return c}const cx=(a,o,i,{allOwnKeys:c}={})=>(_a(o,(u,p)=>{i&&vt(u)?Object.defineProperty(a,p,{__proto__:null,value:Lp(u,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,p,{__proto__:null,value:u,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:c}),a),dx=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),ux=(a,o,i,c)=>{a.prototype=Object.create(o.prototype,c),Object.defineProperty(a.prototype,"constructor",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{__proto__:null,value:o.prototype}),i&&Object.assign(a.prototype,i)},px=(a,o,i,c)=>{let u,p,m;const f={};if(o=o||{},a==null)return o;do{for(u=Object.getOwnPropertyNames(a),p=u.length;p-- >0;)m=u[p],(!c||c(m,a,o))&&!f[m]&&(o[m]=a[m],f[m]=!0);a=i!==!1&&zr(a)}while(a&&(!i||i(a,o))&&a!==Object.prototype);return o},mx=(a,o,i)=>{a=String(a),(i===void 0||i>a.length)&&(i=a.length),i-=o.length;const c=a.indexOf(o,i);return c!==-1&&c===i},fx=a=>{if(!a)return null;if(Yr(a))return a;let o=a.length;if(!Up(o))return null;const i=new Array(o);for(;o-- >0;)i[o]=a[o];return i},hx=(a=>o=>a&&o instanceof a)(typeof Uint8Array<"u"&&zr(Uint8Array)),gx=(a,o)=>{const c=(a&&a[Ta]).call(a);let u;for(;(u=c.next())&&!u.done;){const p=u.value;o.call(a,p[0],p[1])}},xx=(a,o)=>{let i;const c=[];for(;(i=a.exec(o))!==null;)c.push(i);return c},yx=Ot("HTMLFormElement"),vx=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,c,u){return c.toUpperCase()+u}),{propertyIsEnumerable:bx}=Object.prototype,jx=Ot("RegExp"),$p=(a,o)=>{const i=Object.getOwnPropertyDescriptors(a),c={};_a(i,(u,p)=>{let m;(m=o(u,p,a))!==!1&&(c[p]=m||u)}),Object.defineProperties(a,c)},kx=a=>{$p(a,(o,i)=>{if(vt(a)&&["arguments","caller","callee"].includes(i))return!1;const c=a[i];if(vt(c)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},wx=(a,o)=>{const i={},c=u=>{u.forEach(p=>{i[p]=!0})};return Yr(a)?c(a):c(String(a).split(o)),i},Nx=()=>{},Sx=(a,o)=>a!=null&&Number.isFinite(a=+a)?a:o;function Cx(a){return!!(a&&vt(a.append)&&a[Op]==="FormData"&&a[Ta])}const Ex=a=>{const o=new WeakSet,i=c=>{if(An(c)){if(o.has(c))return;if(_n(c))return c;if(!("toJSON"in c)){o.add(c);let u;if(Zg(c)){u=[];for(const p of c){const m=i(p);!Xr(m)&&u.push(m)}}else u=Yr(c)?[]:{},_a(c,(p,m)=>{const f=i(p);!Xr(f)&&(u[m]=f)});return o.delete(c),u}}return c};return i(a)},Px=Ot("AsyncFunction"),zx=a=>a&&(An(a)||vt(a))&&vt(a.then)&&vt(a.catch),Wp=((a,o)=>a?setImmediate:o?((i,c)=>(Kr.addEventListener("message",({source:u,data:p})=>{u===Kr&&p===i&&c.length&&c.shift()()},!1),u=>{c.push(u),Kr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",vt(Kr.postMessage)),Tx=typeof queueMicrotask<"u"?queueMicrotask.bind(Kr):typeof process<"u"&&process.nextTick||Wp,Vp=a=>a!=null&&vt(a[Ta]),_x=a=>a!=null&&Ea(a,Ta)&&Vp(a),S={isArray:Yr,isArrayBuffer:Ip,isBuffer:_n,isFormData:rx,isArrayBufferView:Hg,isString:$g,isNumber:Up,isBoolean:Wg,isObject:An,isPlainObject:Qs,isEmptyObject:Vg,isReadableStream:ax,isRequest:sx,isResponse:ox,isHeaders:ix,isUndefined:Xr,isDate:Qg,isFile:Kg,isReactNativeBlob:Gg,isReactNative:Yg,isBlob:Xg,isRegExp:jx,isFunction:vt,isStream:ex,isURLSearchParams:nx,isTypedArray:hx,isFileList:Jg,forEach:_a,merge:Nl,extend:cx,trim:lx,stripBOM:dx,inherits:ux,toFlatObject:px,kindOf:zl,kindOfTest:Ot,endsWith:mx,toArray:fx,forEachEntry:gx,matchAll:xx,isHTMLForm:yx,hasOwnProperty:Ca,hasOwnProp:Ca,hasOwnInPrototypeChain:Ea,getSafeProp:Ug,toSafeFlatObject:qg,reduceDescriptors:$p,freezeMethods:kx,toObjectSet:wx,toCamelCase:vx,noop:Nx,toFiniteNumber:Sx,findKey:qp,global:Kr,isContextDefined:Hp,isSpecCompliantForm:Cx,toJSONObject:Ex,isAsyncFn:Px,isThenable:zx,setImmediate:Wp,asap:Tx,isIterable:Vp,isSafeIterable:_x},Ax=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rx=a=>{const o={};let i,c,u;return a&&a.split(`
`).forEach(function(m){u=m.indexOf(":"),i=m.substring(0,u).trim().toLowerCase(),c=m.substring(u+1).trim();const f=S.hasOwnProp(o,i);!i||f&&S.hasOwnProp(Ax,i)||(i==="set-cookie"?f?o[i].push(c):o[i]=[c]:o[i]=f?o[i]+", "+c:c)}),o};function Fx(a){let o=0,i=a.length;for(;o<i;){const c=a.charCodeAt(o);if(c!==9&&c!==32)break;o+=1}for(;i>o;){const c=a.charCodeAt(i-1);if(c!==9&&c!==32)break;i-=1}return o===0&&i===a.length?a:a.slice(o,i)}const Dx=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Lx=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Tl(a,o){return S.isArray(a)?a.map(i=>Tl(i,o)):Fx(String(a).replace(o,""))}const Ox=a=>Tl(a,Dx),Mx=a=>Tl(a,Lx);function Qp(a){const o=Object.create(null);return S.forEach(a.toJSON(),(i,c)=>{o[c]=Mx(i)}),o}const Gu=Symbol("internals");function ja(a){return a&&String(a).trim().toLowerCase()}function Ks(a){return a===!1||a==null?a:S.isArray(a)?a.map(Ks):Ox(String(a))}function Bx(a){const o=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=i.exec(a);)o[c[1]]=c[2];return o}const Ix=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function dl(a){let o=0,i=a.length;for(;o<i;){const c=a.charCodeAt(o);if(c!==9&&c!==32)break;o+=1}for(;i>o;){const c=a.charCodeAt(i-1);if(c!==9&&c!==32)break;i-=1}return o===0&&i===a.length?a:a.slice(o,i)}function Ux(a){const o=a.length-1;if(o<1||a.charCodeAt(0)!==34||a.charCodeAt(o)!==34)return a;let i="";for(let c=1;c<o;c++){const u=a.charCodeAt(c);if(u===34||u===92&&(c+=1,c>=o))return a;i+=a[c]}return i}function qx(a){const o=Object.create(null),i=String(a);let c=0,u=!1,p=!1;function m(f){const g=dl(i.slice(c,f)),b=g.indexOf("=");if(b<1)return;const x=dl(g.slice(0,b));if(!Ix.test(x))return;const y=x.toLowerCase();if(y==="__proto__"||y==="constructor"||y==="prototype")return;const N=dl(g.slice(b+1));o[y]=Ux(N)}for(let f=0;f<i.length;f++){const g=i.charCodeAt(f);u?p?p=!1:g===92?p=!0:g===34&&(u=!1):g===34?u=!0:(g===44||g===59)&&(m(f),c=f+1)}return m(i.length),o}const Hx=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function ul(a,o,i,c,u){if(S.isFunction(c))return c.call(this,o,i);if(u&&(o=i),!!S.isString(o)){if(S.isString(c))return o.indexOf(c)!==-1;if(S.isRegExp(c))return c.test(o)}}function $x(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,i,c)=>i.toUpperCase()+c)}function Wx(a,o){const i=S.toCamelCase(" "+o);["get","set","has"].forEach(c=>{Object.defineProperty(a,c+i,{__proto__:null,value:function(u,p,m){return this[c].call(this,o,u,p,m)},configurable:!0})})}let st=class{constructor(o){o&&this.set(o)}set(o,i,c){const u=this;function p(f,g,b){const x=ja(g);if(!x)return;const y=S.findKey(u,x);(!y||u[y]===void 0||b===!0||b===void 0&&u[y]!==!1)&&(u[y||g]=Ks(f))}const m=(f,g)=>S.forEach(f,(b,x)=>p(b,x,g));if(S.isPlainObject(o)||o instanceof this.constructor)m(o,i);else if(S.isString(o)&&(o=o.trim())&&!Hx(o))m(Rx(o),i);else if(S.isObject(o)&&S.isSafeIterable(o)){let f=Object.create(null),g,b;for(const x of o){if(!S.isArray(x))throw new TypeError("Object iterator must return a key-value pair");b=x[0],S.hasOwnProp(f,b)?(g=f[b],f[b]=S.isArray(g)?[...g,x[1]]:[g,x[1]]):f[b]=x[1]}m(f,i)}else o!=null&&p(i,o,c);return this}get(o,i){if(o=ja(o),o){const c=S.findKey(this,o);if(c){const u=this[c];if(!i)return u;if(i===!0)return Bx(u);if(S.isFunction(i))return i.call(this,u,c);if(S.isRegExp(i))return i.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,i){if(o=ja(o),o){const c=S.findKey(this,o);return!!(c&&this[c]!==void 0&&(!i||ul(this,this[c],c,i)))}return!1}delete(o,i){const c=this;let u=!1;function p(m){if(m=ja(m),m){const f=S.findKey(c,m);f&&(!i||ul(c,c[f],f,i))&&(delete c[f],u=!0)}}return S.isArray(o)?o.forEach(p):p(o),u}clear(o){const i=Object.keys(this);let c=i.length,u=!1;for(;c--;){const p=i[c];(!o||ul(this,this[p],p,o,!0))&&(delete this[p],u=!0)}return u}normalize(o){const i=this,c={};return S.forEach(this,(u,p)=>{const m=S.findKey(c,p);if(m){i[m]=Ks(u),delete i[p];return}const f=o?$x(p):String(p).trim();f!==p&&delete i[p],i[f]=Ks(u),c[f]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const i=Object.create(null);return S.forEach(this,(c,u)=>{c!=null&&c!==!1&&(i[u]=o&&S.isArray(c)?c.join(", "):c)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,i])=>o+": "+i).join(`
`)}getSetCookie(){const o=this.get("set-cookie");return S.isArray(o)?o:o==null||o===!1?[]:[o]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static parseParameters(o){return qx(o)}static concat(o,...i){const c=new this(o);return i.forEach(u=>c.set(u)),c}static accessor(o){const c=(this[Gu]=this[Gu]={accessors:{}}).accessors,u=this.prototype;function p(m){const f=ja(m);c[f]||(Wx(u,m),c[f]=!0)}return S.isArray(o)?o.forEach(p):p(o),this}};st.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(st.prototype,({value:a},o)=>{let i=o[0].toUpperCase()+o.slice(1);return{get:()=>a,set(c){this[i]=c}}});S.freezeMethods(st);const Zs="[REDACTED ****]";function Vx(a){if(S.hasOwnProp(a,"toJSON"))return!0;let o=Object.getPrototypeOf(a);for(;o&&o!==Object.prototype;){if(S.hasOwnProp(o,"toJSON"))return!0;o=Object.getPrototypeOf(o)}return!1}function Qx(a,o){const i=new Set(o.map(p=>String(p).toLowerCase())),c=[],u=p=>{if(p===null||typeof p!="object"||S.isBuffer(p))return p;if(c.indexOf(p)!==-1)return;p instanceof st&&(p=p.toJSON()),c.push(p);let m;if(S.isArray(p))m=[],p.forEach((f,g)=>{const b=u(f);S.isUndefined(b)||(m[g]=b)});else{if(!S.isPlainObject(p)&&Vx(p))return c.pop(),p;m=Object.create(null);for(const[f,g]of Object.entries(p)){const b=i.has(f.toLowerCase())?Zs:u(g);S.isUndefined(b)||(m[f]=b)}}return c.pop(),m};return u(a)}function Yu(a){try{return String(a)}catch{return""}}function Kx(a){return a.errors.map(i=>{try{return i&&i.message?Yu(i.message):Yu(i)}catch{return""}}).filter(Boolean).join("; ")||a.name||"AggregateError"}let Y=class Kp extends Error{static from(o,i,c,u,p,m){let f=o.message;!f&&S.isArray(o.errors)&&o.errors.length&&(f=Kx(o));const g=new Kp(f,i||o.code,c,u,p);return Object.defineProperty(g,"cause",{__proto__:null,value:o,writable:!0,enumerable:!1,configurable:!0}),g.name=o.name,o.status!=null&&g.status==null&&(g.status=o.status),m&&Object.assign(g,m),g}constructor(o,i,c,u,p){super(o),Object.defineProperty(this,"message",{__proto__:null,value:o,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),c&&(this.config=c),u&&(this.request=u),p&&(this.response=p,this.status=p.status)}toJSON(){const o=this.config,i=o&&S.hasOwnProp(o,"redact")?o.redact:void 0,c=S.isArray(i)&&i.length>0?Qx(o,i):S.toJSONObject(o);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c,code:this.code,status:this.status}}};Y.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Y.ERR_BAD_OPTION="ERR_BAD_OPTION";Y.ECONNABORTED="ECONNABORTED";Y.ETIMEDOUT="ETIMEDOUT";Y.ECONNREFUSED="ECONNREFUSED";Y.ERR_NETWORK="ERR_NETWORK";Y.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Y.ERR_DEPRECATED="ERR_DEPRECATED";Y.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Y.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Y.ERR_CANCELED="ERR_CANCELED";Y.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Y.ERR_INVALID_URL="ERR_INVALID_URL";Y.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Gx=null,Gp=100;function Sl(a){return S.isPlainObject(a)||S.isArray(a)}function Yp(a){return S.endsWith(a,"[]")?a.slice(0,-2):a}function pl(a,o,i){return a?a.concat(o).map(function(u,p){return u=Yp(u),!i&&p?"["+u+"]":u}).join(i?".":""):o}function Yx(a){return S.isArray(a)&&!a.some(Sl)}const Xx=S.toFlatObject(S,{},null,function(o){return/^is[A-Z]/.test(o)});function io(a,o,i){if(!S.isObject(a))throw new TypeError("target must be an object");o=o||new FormData;const c=(L,U)=>{const F=S.getSafeProp(i,L);return S.isUndefined(F)?U:F},u=c("metaTokens",!0),p=c("visitor")||C,m=c("dots",!1),f=c("indexes",!1),g=c("Blob")||typeof Blob<"u"&&Blob,b=c("maxDepth",Gp),x=g&&S.isSpecCompliantForm(o),y=[];if(!S.isFunction(p))throw new TypeError("visitor must be a function");function N(L){if(L===null)return"";if(S.isDate(L))return L.toISOString();if(S.isBoolean(L))return L.toString();if(!x&&S.isBlob(L))throw new Y("Blob is not supported. Use a Buffer instead.");if(S.isArrayBuffer(L)||S.isTypedArray(L)){if(x&&typeof g=="function")return new g([L]);throw new Y("Blob is not supported. Use a Buffer instead.",Y.ERR_NOT_SUPPORT)}return L}function O(L){if(L>b)throw new Y("Object is too deeply nested ("+L+" levels). Max depth: "+b,Y.ERR_FORM_DATA_DEPTH_EXCEEDED)}function B(L,U){if(b===1/0)return JSON.stringify(L);const F=[];return JSON.stringify(L,function(I,j){if(!S.isObject(j))return j;for(;F.length&&F[F.length-1]!==this;)F.pop();return F.push(j),O(U+F.length-1),j})}function C(L,U,F){let q=L;if(S.isReactNative(o)&&S.isReactNativeBlob(L))return o.append(pl(F,U,m),N(L)),!1;if(L&&!F&&typeof L=="object"){if(S.endsWith(U,"{}"))U=u?U:U.slice(0,-2),L=B(L,1);else if(S.isArray(L)&&Yx(L)||(S.isFileList(L)||S.endsWith(U,"[]"))&&(q=S.toArray(L)))return U=Yp(U),q.forEach(function(j,V){!(S.isUndefined(j)||j===null)&&o.append(f===!0?pl([U],V,m):f===null?U:U+"[]",N(j))}),!1}return Sl(L)?!0:(o.append(pl(F,U,m),N(L)),!1)}const A=Object.assign(Xx,{defaultVisitor:C,convertValue:N,isVisitable:Sl});function z(L,U,F=0){if(!S.isUndefined(L)){if(O(F),y.indexOf(L)!==-1)throw new Error("Circular reference detected in "+U.join("."));y.push(L),S.forEach(L,function(I,j){(!(S.isUndefined(I)||I===null)&&p.call(o,I,S.isString(j)?j.trim():j,U,A))===!0&&z(I,U?U.concat(j):[j],F+1)}),y.pop()}}if(!S.isObject(a))throw new TypeError("data must be an object");return z(a),o}function Xu(a){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(a).replace(/[!'()~]|%20/g,function(c){return o[c]})}function _l(a,o){this._pairs=[],a&&io(a,this,o)}const Xp=_l.prototype;Xp.append=function(o,i){this._pairs.push([o,i])};Xp.toString=function(o){const i=o?c=>o.call(this,c,Xu):Xu;return this._pairs.map(function(u){return i(u[0])+"="+i(u[1])},"").join("&")};function Jx(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Jp(a,o,i){if(!o)return a;a=a||"";const c=S.isFunction(i)?{serialize:i}:i,u=S.getSafeProp(c,"encode")||Jx,p=S.getSafeProp(c,"serialize");let m;if(p?m=p(o,c):m=S.isURLSearchParams(o)?o.toString():new _l(o,c).toString(u),m){const f=a.indexOf("#");f!==-1&&(a=a.slice(0,f)),a+=(a.indexOf("?")===-1?"?":"&")+m}return a}const ka=Symbol("internals");function Zp(a){return a?a.length:0}function Ju(a){if(a)for(;a.length&&a[a.length-1]===null;)a.pop()}function wa(a,o){const i=a.handlers,c=Zp(i);i!==o.handlersRef?(o.handlersRef=i,o.handlerEntries.clear()):c!==o.handlersLength&&(c?o.handlerEntries.forEach(function(p,m){i[p.index]!==p.handler&&o.handlerEntries.delete(m)}):o.handlerEntries.clear()),o.handlersLength=c}class Zu{constructor(){this.handlers=[],this[ka]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(o,i,c){const u={fulfilled:o,rejected:i,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null},p=this[ka];this.handlers==null&&(this.handlers=[]),wa(this,p);const m=p.nextId++;return this.handlers.push(u),p.handlerEntries.set(m,{handler:u,index:this.handlers.length-1}),p.handlersLength=this.handlers.length,m}eject(o){const i=this[ka];wa(this,i);const c=i.handlerEntries.get(o);if(c){if(i.handlerEntries.delete(o),this.handlers[c.index]!==c.handler)return;this.handlers[c.index]=null,i.iterationDepth||(Ju(this.handlers),i.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],wa(this,this[ka]))}forEach(o){const i=this[ka];wa(this,i),i.iterationDepth++;try{S.forEach(this.handlers,function(u){u!==null&&o(u)})}finally{--i.iterationDepth||(wa(this,i),Ju(this.handlers),i.handlersLength=Zp(this.handlers))}}}const Al={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Zx=typeof URLSearchParams<"u"?URLSearchParams:_l,ey=typeof FormData<"u"?FormData:null,ty=typeof Blob<"u"?Blob:null,ry={isBrowser:!0,classes:{URLSearchParams:Zx,FormData:ey,Blob:ty},protocols:["http","https","file","blob","url","data"]},Rl=typeof window<"u"&&typeof document<"u",Cl=typeof navigator=="object"&&navigator||void 0,ny=Rl&&(!Cl||["ReactNative","NativeScript","NS"].indexOf(Cl.product)<0),ay=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sy=Rl&&window.location.href||"http://localhost",oy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rl,hasStandardBrowserEnv:ny,hasStandardBrowserWebWorkerEnv:ay,navigator:Cl,origin:sy},Symbol.toStringTag,{value:"Module"})),Ke={...oy,...ry};function iy(a,o){return io(a,new Ke.classes.URLSearchParams,{visitor:function(i,c,u,p){return Ke.isNode&&S.isBuffer(i)?(this.append(c,i.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...o})}const ep=Gp;function em(a){if(a>ep)throw new Y("FormData field is too deeply nested ("+a+" levels). Max depth: "+ep,Y.ERR_FORM_DATA_DEPTH_EXCEEDED)}function ly(a){const o=[],i=/[^.[\]]+|\[([^.[\]]*)]/g;let c;for(;(c=i.exec(a))!==null;)em(o.length),o.push(c[0]==="[]"?"":c[1]||c[0]);return o}function cy(a){const o={},i=Object.keys(a);let c;const u=i.length;let p;for(c=0;c<u;c++)p=i[c],o[p]=a[p];return o}function tm(a){function o(i,c,u,p){em(p);let m=i[p++];if(m==="__proto__")return!0;const f=Number.isFinite(+m),g=p>=i.length;return m=!m&&S.isArray(u)?u.length:m,g?(S.hasOwnProp(u,m)?u[m]=S.isArray(u[m])?u[m].concat(c):[u[m],c]:u[m]=c,!f):((!S.hasOwnProp(u,m)||!S.isObject(u[m]))&&(u[m]=[]),o(i,c,u[m],p)&&S.isArray(u[m])&&(u[m]=cy(u[m])),!f)}if(S.isFormData(a)&&S.isFunction(a.entries)){const i={};return S.forEachEntry(a,(c,u)=>{o(ly(c),u,i,0)}),i}return null}const rm=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Pn=(a,o)=>a!=null&&S.hasOwnProp(a,o)?a[o]:void 0;function dy(a,o,i){if(S.isString(a))try{return(o||JSON.parse)(a),S.trim(a)}catch(c){if(c.name!=="SyntaxError")throw c}return(i||JSON.stringify)(a)}const Aa={transitional:Al,adapter:["xhr","http","fetch"],transformRequest:[function(o,i){const c=i.getContentType()||"",u=c.indexOf("application/json")>-1,p=S.isObject(o);if(p&&S.isHTMLForm(o)&&(o=new FormData(o)),S.isFormData(o))return u?JSON.stringify(tm(o)):o;if(S.isArrayBuffer(o)||S.isBuffer(o)||S.isStream(o)||S.isFile(o)||S.isBlob(o)||S.isReadableStream(o))return o;if(S.isArrayBufferView(o))return o.buffer;if(S.isURLSearchParams(o))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let f;if(p){const g=Pn(this,"formSerializer");if(c.indexOf("application/x-www-form-urlencoded")>-1)return iy(o,g).toString();if((f=S.isFileList(o))||c.indexOf("multipart/form-data")>-1){const b=Pn(this,"env"),x=b&&b.FormData;return io(f?{"files[]":o}:o,x&&new x,g)}}return p||u?(i.setContentType("application/json",!1),dy(o)):o}],transformResponse:[function(o){const i=Pn(this,"transitional")||Aa.transitional,c=i&&i.forcedJSONParsing,u=Pn(this,"responseType"),p=u==="json";if(S.isResponse(o)||S.isReadableStream(o))return o;if(o&&S.isString(o)&&(c&&!u||p)){const f=!(i&&i.silentJSONParsing)&&p;try{return JSON.parse(o,Pn(this,"parseReviver"))}catch(g){if(f)throw g.name==="SyntaxError"?Y.from(g,Y.ERR_BAD_RESPONSE,this,null,Pn(this,"response")):g}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ke.classes.FormData,Blob:Ke.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(rm,a=>{Aa.headers[a]={}});function ml(a,o){const i=this||Aa,c=o||i,u=st.from(c.headers);let p=c.data;return S.forEach(a,function(f){p=f.call(i,p,u.normalize(),o?o.status:void 0)}),u.normalize(),p}function nm(a){return!!(a&&a.__CANCEL__)}let Ra=class extends Y{constructor(o,i,c){super(o??"canceled",Y.ERR_CANCELED,i,c),this.name="CanceledError",this.__CANCEL__=!0}};function am(a,o,i){const c=i.config.validateStatus;!i.status||!c||c(i.status)?a(i):o(new Y("Request failed with status code "+i.status,i.status>=400&&i.status<500?Y.ERR_BAD_REQUEST:Y.ERR_BAD_RESPONSE,i.config,i.request,i))}const uy=/[\t\n\r]/g;function sm(a){if(typeof a!="string")return a;let o=0;for(;o<a.length&&a.charCodeAt(o)<=32;)o++;return a.slice(o).replace(uy,"")}function fl(a){const o=/^([-+\w]{1,25}):(?:\/\/)?/.exec(a);return o&&o[1]||""}function py(a,o){a=a||10;const i=new Array(a),c=new Array(a);let u=0,p=0,m;return o=o!==void 0?o:1e3,function(g){const b=Date.now(),x=c[p];m||(m=b),i[u]=g,c[u]=b;let y=p,N=0;for(;y!==u;)N+=i[y++],y=y%a;if(u=(u+1)%a,u===p&&(p=(p+1)%a),b-m<o)return;const O=x&&b-x;return O?Math.round(N*1e3/O):void 0}}function my(a,o){let i=0,c=1e3/o,u,p;const m=(x,y=Date.now())=>{i=y,u=null,p&&(clearTimeout(p),p=null),a(...x)};return[(...x)=>{const y=Date.now(),N=y-i;N>=c?m(x,y):(u=x,p||(p=setTimeout(()=>{p=null,m(u)},c-N)))},()=>u&&m(u),(...x)=>m(x)]}const eo=(a,o,i=3)=>{let c=0;const u=py(50,250);return my(p=>{if(!p||!S.isNumber(p.loaded))return;const m=p.loaded,f=p.lengthComputable?p.total:void 0,g=Math.max(0,f!=null?Math.min(m,f):m),b=Math.max(0,g-c),x=u(b);c=Math.max(c,g);const y={loaded:g,total:f,progress:f?g/f:void 0,bytes:b,rate:x||void 0,estimated:x&&f?(f-g)/x:void 0,event:p,lengthComputable:f!=null,[o?"download":"upload"]:!0};a(y)},i)},tp=(a,o)=>{const i=a!=null;return[c=>o[0]({lengthComputable:i,total:a,loaded:c}),o[1]]},rp=(a,o=S.asap)=>(...i)=>o(()=>a(...i)),fy=Ke.hasStandardBrowserEnv?((a,o)=>i=>(i=new URL(i,Ke.origin),a.protocol===i.protocol&&a.host===i.host&&(o||a.port===i.port)))(new URL(Ke.origin),Ke.navigator&&/(msie|trident)/i.test(Ke.navigator.userAgent)):()=>!0,hy=Ke.hasStandardBrowserEnv?{write(a,o,i,c,u,p,m){if(typeof document>"u")return;const f=[`${a}=${encodeURIComponent(o)}`];S.isNumber(i)&&f.push(`expires=${new Date(i).toUTCString()}`),S.isString(c)&&f.push(`path=${c}`),S.isString(u)&&f.push(`domain=${u}`),p===!0&&f.push("secure"),S.isString(m)&&f.push(`SameSite=${m}`),document.cookie=f.join("; ")},read(a){if(typeof document>"u")return null;const o=document.cookie.split(";");for(let i=0;i<o.length;i++){const c=o[i].replace(/^\s+/,""),u=c.indexOf("=");if(u!==-1&&c.slice(0,u)===a)try{return decodeURIComponent(c.slice(u+1))}catch{return c.slice(u+1)}}return null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function gy(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function xy(a,o){if(!o)return a;let i=a.length;for(;i>0&&a.charCodeAt(i-1)===47;)i--;return a.slice(0,i)+"/"+o.replace(/^\/+/,"")}const yy=/^https?:(?!\/\/)/i;function vy(a){return a&&a.replace(/(^|&)([^=&]*=)?[^&]+/g,(o,i,c="")=>`${i}${c}${Zs}`)}function by(a){const o=a.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Zs}@`),i=o.indexOf("#"),u=(i===-1?o:o.slice(0,i)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Zs}`);return i===-1?u:`${u}#${vy(o.slice(i+1))}`}function np(a,o){if(typeof a=="string"){const i=sm(a);if(yy.test(i))throw new Y(`Invalid URL ${JSON.stringify(by(i))}: missing "//" after protocol`,Y.ERR_INVALID_URL,o)}}function om(a,o,i,c){np(o,c);let u=!gy(o);return a&&(u||i===!1)?(np(a,c),xy(a,o)):o}const ap=a=>a instanceof st?{...a}:a,jy=a=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(a).concat(Object.getOwnPropertySymbols(a).filter(o=>Object.getOwnPropertyDescriptor(a,o).enumerable)):Object.keys(a);function Jr(a,o){a=a||{},o=o||{};const i=Object.create(null);Object.defineProperty(i,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function c(x,y,N,O){return S.isPlainObject(x)&&S.isPlainObject(y)?S.merge.call({caseless:O},x,y):S.isPlainObject(y)?S.merge({},y):S.isArray(y)?y.slice():y}function u(x,y,N,O){if(S.isUndefined(y)){if(!S.isUndefined(x))return c(void 0,x,N,O)}else return c(x,y,N,O)}function p(x,y){if(!S.isUndefined(y))return c(void 0,y)}function m(x,y){if(S.isUndefined(y)){if(!S.isUndefined(x))return c(void 0,x)}else return c(void 0,y)}function f(x){const y=S.hasOwnProp(o,"transitional")?o.transitional:void 0;if(!S.isUndefined(y))if(S.isPlainObject(y)){if(S.hasOwnProp(y,x))return y[x]}else return;const N=S.hasOwnProp(a,"transitional")?a.transitional:void 0;if(S.isPlainObject(N)&&S.hasOwnProp(N,x))return N[x]}function g(x,y,N){if(S.hasOwnProp(o,N))return c(x,y);if(S.hasOwnProp(a,N))return c(void 0,x)}const b={url:p,method:p,data:p,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutErrorMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,allowedSocketPaths:m,responseEncoding:m,validateStatus:g,headers:(x,y,N)=>u(ap(x),ap(y),N,!0)};return S.forEach(jy({...a,...o}),function(y){if(y==="__proto__"||y==="constructor"||y==="prototype")return;const N=S.hasOwnProp(b,y)?b[y]:u,O=S.hasOwnProp(a,y)?a[y]:void 0,B=S.hasOwnProp(o,y)?o[y]:void 0,C=N(O,B,y);S.isUndefined(C)&&N!==g||(i[y]=C)}),S.hasOwnProp(o,"validateStatus")&&S.isUndefined(o.validateStatus)&&f("validateStatusUndefinedResolves")===!1&&(S.hasOwnProp(a,"validateStatus")?i.validateStatus=c(void 0,a.validateStatus):delete i.validateStatus),i}const ky=["content-type","content-length"];function wy(a,o,i){if(i!=="content-only"){a.set(o);return}Object.entries(o||{}).forEach(([c,u])=>{ky.includes(c.toLowerCase())&&a.set(c,u)})}const Ny=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(o,i)=>String.fromCharCode(parseInt(i,16)));function im(a){const o=Jr({},a),i=N=>S.hasOwnProp(o,N)?o[N]:void 0,c=i("data");let u=i("withXSRFToken");const p=i("xsrfHeaderName"),m=i("xsrfCookieName");let f=i("headers");const g=i("auth"),b=i("baseURL"),x=i("allowAbsoluteUrls"),y=i("url");if(o.headers=f=st.from(f),o.url=Jp(om(b,y,x,o),i("params"),i("paramsSerializer")),g){const N=S.getSafeProp(g,"username")||"",O=S.getSafeProp(g,"password")||"";try{f.set("Authorization","Basic "+btoa(N+":"+(O?Ny(O):"")))}catch(B){throw Y.from(B,Y.ERR_BAD_OPTION_VALUE,a)}}if(S.isFormData(c)){const N=S.getSafeProp(c,"getHeaders");Ke.hasStandardBrowserEnv||Ke.hasStandardBrowserWebWorkerEnv||S.isReactNative(c)?f.setContentType(void 0):S.isFunction(N)&&wy(f,N.call(c),i("formDataHeaderPolicy"))}if(Ke.hasStandardBrowserEnv&&(S.isFunction(u)&&(u=u(o)),u===!0||u==null&&fy(o.url))){const O=p&&m&&hy.read(m);O&&f.set(p,O)}return o}const Sy=typeof XMLHttpRequest<"u",Cy=Sy&&function(a){return new Promise(function(i,c){const u=im(a);let p=u.data;const m=st.from(u.headers).normalize();let{responseType:f,onUploadProgress:g,onDownloadProgress:b}=u,x,y,N,O,B,C;function A(){O&&O(),B&&B(),u.cancelToken&&u.cancelToken.unsubscribe(x),u.signal&&u.signal.removeEventListener("abort",x)}let z=new XMLHttpRequest;z.open(u.method.toUpperCase(),u.url,!0),z.timeout=u.timeout;function L(F){if(!z)return;if(z.status===0&&(fl(sm(u.url))||fl(Ke.origin))!=="file"&&!(z.responseURL&&z.responseURL.startsWith("file:"))){c(new Y("Request aborted",Y.ECONNABORTED,a,z)),A(),z=null;return}try{F?C&&C(F):B&&B()}catch(V){setTimeout(()=>{throw V})}if(!z)return;const q=st.from("getAllResponseHeaders"in z&&z.getAllResponseHeaders()),j={data:!f||f==="text"||f==="json"?z.responseText:z.response,status:z.status,statusText:z.statusText,headers:q,config:a,request:z};am(function(X){i(X),A()},function(X){c(X),A()},j),z=null}"onloadend"in z?z.onloadend=L:z.onreadystatechange=function(){!z||z.readyState!==4||z.status===0&&!(z.responseURL&&z.responseURL.startsWith("file:"))||setTimeout(L)},z.onabort=function(){z&&(c(new Y("Request aborted",Y.ECONNABORTED,a,z)),A(),z=null)},z.onerror=function(q){const I=q&&q.message?q.message:"Network Error",j=new Y(I,Y.ERR_NETWORK,a,z);j.event=q||null,c(j),A(),z=null},z.ontimeout=function(){let q=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const I=u.transitional||Al;u.timeoutErrorMessage&&(q=u.timeoutErrorMessage),c(new Y(q,I.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,a,z)),A(),z=null},p===void 0&&m.setContentType(null),"setRequestHeader"in z&&S.forEach(Qp(m),function(q,I){z.setRequestHeader(I,q)}),S.isUndefined(u.withCredentials)||(z.withCredentials=!!u.withCredentials),f&&f!=="json"&&(z.responseType=u.responseType),b&&([N,B,C]=eo(b,!0),z.addEventListener("progress",N)),g&&z.upload&&([y,O]=eo(g),z.upload.addEventListener("progress",y),z.upload.addEventListener("loadend",O)),(u.cancelToken||u.signal)&&(x=F=>{z&&(c(!F||F.type?new Ra(null,a,z):F),z.abort(),A(),z=null)},u.cancelToken&&u.cancelToken.subscribe(x),u.signal&&(u.signal.aborted?x():u.signal.addEventListener("abort",x)));const U=fl(u.url);if(U&&!Ke.protocols.includes(U)){c(new Y("Unsupported protocol "+U+":",Y.ERR_BAD_REQUEST,a)),A();return}z.send(p||null)})},Ey=(a,o)=>{if(a=a?a.filter(Boolean):[],!o&&!a.length)return;const i=new AbortController;let c=!1;const u=function(g){if(!c){c=!0,m();const b=g instanceof Error?g:this.reason;i.abort(b instanceof Y?b:new Ra(b instanceof Error?b.message:b))}};let p=o&&setTimeout(()=>{p=null,u(new Y(`timeout of ${o}ms exceeded`,Y.ETIMEDOUT))},o);const m=()=>{a&&(p&&clearTimeout(p),p=null,a.forEach(g=>{g.unsubscribe?g.unsubscribe(u):g.removeEventListener("abort",u)}),a=null)};a.forEach(g=>{if(!c){if(g.aborted){u.call(g);return}g.addEventListener("abort",u,{once:!0})}});const{signal:f}=i;return f.unsubscribe=()=>S.asap(m),f},Py=function*(a,o){let i=a.byteLength;if(i<o){yield a;return}let c=0,u;for(;c<i;)u=c+o,yield a.slice(c,u),c=u},zy=async function*(a,o){for await(const i of Ty(a))yield*Py(i,o)},Ty=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const o=a.getReader();try{for(;;){const{done:i,value:c}=await o.read();if(i)break;yield c}}finally{await o.cancel()}},sp=(a,o,i,c)=>{const u=zy(a,o);let p=0,m,f=g=>{m||(m=!0,c&&c(g))};return new ReadableStream({async pull(g){try{const{done:b,value:x}=await u.next();if(b){f(),g.close();return}let y=x.byteLength;if(i){let N=p+=y;i(N)}g.enqueue(new Uint8Array(x))}catch(b){throw f(b),b}},cancel(g){return f(g),u.return()}},{highWaterMark:2})},op=a=>a>=48&&a<=57||a>=65&&a<=70||a>=97&&a<=102,lm=(a,o,i)=>o+2<i&&op(a.charCodeAt(o+1))&&op(a.charCodeAt(o+2)),ip=a=>a<=57?a-48:(a&223)-55,_y=a=>a>=65&&a<=90||a>=97&&a<=122||a>=48&&a<=57||a===43||a===47||a===45||a===95,Ay=a=>a===9||a===10||a===12||a===13||a===32,Ry=a=>{const o=Math.floor(a/4),i=a%4;return o*3+(i===2?1:i===3?2:0)},Fy=a=>{const o=a.length;let i=0;return o>0&&a.charCodeAt(o-1)===61&&(i++,o>1&&a.charCodeAt(o-2)===61&&i++),Math.floor((o-i)*3/4)},Dy=a=>{const o=a.length;let i=0,c=0,u=!1;for(let p=0;p<o;p++){let m=a.charCodeAt(p);if(m===37&&lm(a,p,o)&&(m=ip(a.charCodeAt(p+1))*16+ip(a.charCodeAt(p+2)),p+=2),!Ay(m)){if(m===61){c++;continue}if(!_y(m)||c>0){u=!0;continue}i++}}return u||c>2||c>0&&(i+c)%4!==0||i%4===1?Fy(a):Ry(i)},Ly=(a,o)=>{if(!a||typeof a!="string"||!a.startsWith("data:"))return 0;const i=a.indexOf(",");if(i<0)return 0;const c=a.slice(5,i),u=a.slice(i+1);if(/;base64/i.test(c))return o(u);let m=0;for(let f=0,g=u.length;f<g;f++){const b=u.charCodeAt(f);if(b===37&&lm(u,f,g))m+=1,f+=2;else if(b<128)m+=1;else if(b<2048)m+=2;else if(b>=55296&&b<=56319&&f+1<g){const x=u.charCodeAt(f+1);x>=56320&&x<=57343?(m+=4,f++):m+=3}else m+=3}return m};function Oy(a){const o=typeof a=="string"?a.indexOf("#"):-1;return Ly(o===-1?a:a.slice(0,o),Dy)}const Fl="1.20.0",lp=64*1024,My={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Vs}=S,By=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(o,i)=>String.fromCharCode(parseInt(i,16))),cp=a=>{if(!S.isString(a))return a;try{return decodeURIComponent(a)}catch{return a}},dp=(a,...o)=>{try{return!!a(...o)}catch{return!1}},Iy=a=>{const o=a.indexOf("://");let i=a;return o!==-1&&(i=i.slice(o+3)),i.includes("@")||i.includes(":")},Uy=a=>{const o=S.global!==void 0&&S.global!==null?S.global:globalThis,{ReadableStream:i,TextEncoder:c}=o;a=S.merge.call({skipUndefined:!0},{Request:o.Request,Response:o.Response},a);const{fetch:u,Request:p,Response:m}=a,f=u?Vs(u):typeof fetch=="function",g=Vs(p),b=Vs(m);if(!f)return!1;const x=f&&Vs(i),y=f&&(typeof c=="function"?(z=>L=>z.encode(L))(new c):async z=>new Uint8Array(await new p(z).arrayBuffer())),N=g&&x&&dp(()=>{let z=!1;const L=new p(Ke.origin,{body:new i,method:"POST",get duplex(){return z=!0,"half"}}),U=L.headers.has("Content-Type");return L.body!=null&&L.body.cancel(),z&&!U}),O=b&&x&&dp(()=>S.isReadableStream(new m("").body)),B={stream:O&&(z=>z.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(z=>{!B[z]&&(B[z]=(L,U)=>{let F=L&&L[z];if(F)return F.call(L);throw new Y(`Response type '${z}' is not supported`,Y.ERR_NOT_SUPPORT,U)})});const C=async z=>{if(z==null)return 0;if(S.isBlob(z))return z.size;if(S.isSpecCompliantForm(z))return(await new p(Ke.origin,{method:"POST",body:z}).arrayBuffer()).byteLength;if(S.isArrayBufferView(z)||S.isArrayBuffer(z))return z.byteLength;if(S.isURLSearchParams(z)&&(z=z+""),S.isString(z))return(await y(z)).byteLength},A=async(z,L)=>{const U=S.toFiniteNumber(z.getContentLength());return U??C(L)};return async z=>{let{url:L,method:U,data:F,signal:q,cancelToken:I,timeout:j,onDownloadProgress:V,onUploadProgress:X,responseType:K,headers:pe,withCredentials:Ne="same-origin",fetchOptions:De,maxContentLength:Se,maxBodyLength:Ge,maxRedirects:Le}=im(z);const be=S.isNumber(Se)&&Se>-1,D=S.isNumber(Ge)&&Ge>-1,J=se=>S.hasOwnProp(z,se)?z[se]:void 0;let $=u||fetch;K=K?(K+"").toLowerCase():"text";let P=Ey([q,I&&I.toAbortSignal()],j),M=null;const le=P&&P.unsubscribe&&(()=>{P.unsubscribe()});let ue,fe=null;const ge=()=>new Y("Request body larger than maxBodyLength limit",Y.ERR_BAD_REQUEST,z,M);try{let se;const me=J("auth");if(me){const de=S.getSafeProp(me,"username")||"",Ie=S.getSafeProp(me,"password")||"";se={username:de,password:Ie}}if(Iy(L)){const de=new URL(L,Ke.origin);if(!se&&(de.username||de.password)){const Ie=cp(de.username),ut=cp(de.password);se={username:Ie,password:ut}}(de.username||de.password)&&(de.username="",de.password="",L=de.href)}if(se&&(pe.delete("authorization"),pe.set("Authorization","Basic "+btoa(By((se.username||"")+":"+(se.password||""))))),be&&typeof L=="string"&&L.startsWith("data:")&&Oy(L)>Se)throw new Y("maxContentLength size of "+Se+" exceeded",Y.ERR_BAD_RESPONSE,z,M);if(D&&U!=="get"&&U!=="head"){const de=await C(F);if(typeof de=="number"&&isFinite(de)&&(ue=de,de>Ge))throw ge()}const je=D&&(S.isReadableStream(F)||S.isStream(F)),Ze=(de,Ie,ut)=>sp(de,lp,pt=>{if(D&&pt>Ge)throw fe=ge();Ie&&Ie(pt)},ut);if(N&&U!=="get"&&U!=="head"&&(X||je)){if(ue=ue??await A(pe,F),ue!==0||je){let de=new p(L,{method:"POST",body:F,duplex:"half"}),Ie;if(S.isFormData(F)&&(Ie=de.headers.get("content-type"))&&pe.setContentType(Ie),de.body){const[ut,pt]=X&&tp(ue,eo(rp(X)))||[];F=Ze(de.body,ut,pt)}}}else if(je&&!g&&x&&U!=="get"&&U!=="head")F=Ze(F);else if(je&&g&&!N&&U!=="get"&&U!=="head")throw new Y("Stream request bodies are not supported by the current fetch implementation",Y.ERR_NOT_SUPPORT,z,M);S.isString(Ne)||(Ne=Ne?"include":"omit");const en=g&&"credentials"in p.prototype;if(S.isFormData(F)){const de=pe.getContentType();de&&/^multipart\/form-data/i.test(de)&&!/boundary=/i.test(de)&&pe.delete("content-type")}pe.set("User-Agent","axios/"+Fl,!1);const ct=De==null?De:Object.assign(Object.create(null),De);ct&&(delete ct.body,delete ct.headers,delete ct.method,delete ct.signal,delete ct.duplex,delete ct.credentials);const dt=Object.assign(Object.create(null),ct,{signal:P,method:U.toUpperCase(),headers:Qp(pe.normalize()),body:F,duplex:"half",credentials:en?Ne:void 0});g&&(S.forEach(My,(de,Ie)=>{dt[Ie]===void 0&&(dt[Ie]=de)}),dt.signal===void 0&&(dt.signal=null),dt.body===void 0&&(dt.body=null)),Le===0&&(dt.redirect="manual",ct&&(ct.redirect="manual")),M=g&&new p(L,dt);let jt=await(g?$(M,ct):$(L,dt));const Dn=st.from(jt.headers);if(be){const de=S.toFiniteNumber(Dn.getContentLength());if(de!=null&&de>Se)throw new Y("maxContentLength size of "+Se+" exceeded",Y.ERR_BAD_RESPONSE,z,M)}const tn=O&&(K==="stream"||K==="response");if(O&&jt.body&&(V||be||tn&&le)){const de={};["status","statusText","headers"].forEach(ir=>{de[ir]=jt[ir]});const Ie=S.toFiniteNumber(Dn.getContentLength()),[ut,pt]=V&&tp(Ie,eo(rp(V),!0))||[];let rn=0;const La=ir=>{if(be&&(rn=ir,rn>Se))throw new Y("maxContentLength size of "+Se+" exceeded",Y.ERR_BAD_RESPONSE,z,M);ut&&ut(ir)};jt=new m(sp(jt.body,lp,La,()=>{pt&&pt(),le&&le()}),de)}K=K||"text";let kt=await B[S.findKey(B,K)||"text"](jt,z);if(be&&!O&&!tn){let de;if(kt!=null&&(typeof kt.byteLength=="number"?de=kt.byteLength:typeof kt.size=="number"?de=kt.size:typeof kt=="string"&&(de=typeof c=="function"?new c().encode(kt).byteLength:kt.length)),typeof de=="number"&&de>Se)throw new Y("maxContentLength size of "+Se+" exceeded",Y.ERR_BAD_RESPONSE,z,M)}return!tn&&le&&le(),await new Promise((de,Ie)=>{am(de,Ie,{data:kt,headers:st.from(jt.headers),status:jt.status,statusText:jt.statusText,config:z,request:M})})}catch(se){if(le&&le(),P&&P.aborted&&P.reason instanceof Y){const me=P.reason;throw me.config=z,M&&(me.request=M),se!==me&&Object.defineProperty(me,"cause",{__proto__:null,value:se,writable:!0,enumerable:!1,configurable:!0}),me}if(fe)throw M&&!fe.request&&(fe.request=M),fe;if(se instanceof Y)throw M&&!se.request&&(se.request=M),se;if(se&&se.name==="TypeError"&&/Load failed|fetch/i.test(se.message)){const me=new Y("Network Error",Y.ERR_NETWORK,z,M,se&&se.response);throw Object.defineProperty(me,"cause",{__proto__:null,value:se.cause||se,writable:!0,enumerable:!1,configurable:!0}),me}throw Y.from(se,se&&se.code,z,M,se&&se.response)}}},qy=new Map,cm=a=>{let o=a&&a.env||{};const{fetch:i,Request:c,Response:u}=o,p=[c,u,i];let m=p.length,f=m,g,b,x=qy;for(;f--;)g=p[f],b=x.get(g),b===void 0&&x.set(g,b=f?new Map:Uy(o)),x=b;return b};cm();const Dl={http:Gx,xhr:Cy,fetch:{get:cm}};S.forEach(Dl,(a,o)=>{if(a){try{Object.defineProperty(a,"name",{__proto__:null,value:o})}catch{}Object.defineProperty(a,"adapterName",{__proto__:null,value:o})}});const up=a=>`- ${a}`,Hy=a=>S.isFunction(a)||a===null||a===!1;function $y(a,o){a=S.isArray(a)?a:[a];const{length:i}=a;let c,u;const p={};for(let m=0;m<i;m++){c=a[m];let f;if(u=c,!Hy(c)&&(u=Dl[(f=String(c)).toLowerCase()],u===void 0))throw new Y(`Unknown adapter '${f}'`);if(u&&(S.isFunction(u)||(u=u.get(o))))break;p[f||"#"+m]=u}if(!u){const m=Object.entries(p).map(([g,b])=>`adapter ${g} `+(b===!1?"is not supported by the environment":"is not available in the build"));let f=i?m.length>1?`since :
`+m.map(up).join(`
`):" "+up(m[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+f,Y.ERR_NOT_SUPPORT)}return u}const dm={getAdapter:$y,adapters:Dl};function hl(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Ra(null,a)}function gl(a){const o=S.toSafeFlatObject(a);return hl(o),o.headers=st.from(S.getSafeProp(o,"headers")),o.data=ml.call(o,o.transformRequest),["post","put","patch"].indexOf(o.method)!==-1&&o.headers.setContentType("application/x-www-form-urlencoded",!1),dm.getAdapter(o.adapter||Aa.adapter,o)(o).then(function(u){hl(o),o.response=u;try{u.data=ml.call(o,o.transformResponse,u)}finally{delete o.response}return u.headers=st.from(u.headers),u},function(u){if(!nm(u)&&(hl(o),u&&u.response)){o.response=u.response;try{u.response.data=ml.call(o,o.transformResponse,u.response)}finally{delete o.response}u.response.headers=st.from(u.response.headers)}return Promise.reject(u)})}const lo={};["object","boolean","number","function","string","symbol"].forEach((a,o)=>{lo[a]=function(c){return typeof c===a||"a"+(o<1?"n ":" ")+a}});const pp={};lo.transitional=function(o,i,c){function u(p,m){return"[Axios v"+Fl+"] Transitional option '"+p+"'"+m+(c?". "+c:"")}return(p,m,f)=>{if(o===!1)throw new Y(u(m," has been removed"+(i?" in "+i:"")),Y.ERR_DEPRECATED);return i&&!pp[m]&&(pp[m]=!0,console.warn(u(m," has been deprecated since v"+i+" and will be removed in the near future"))),o?o(p,m,f):!0}};lo.spelling=function(o){return(i,c)=>(console.warn(`${c} is likely a misspelling of ${o}`),!0)};function Wy(a,o,i){if(typeof a!="object"||a===null)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const c=Object.keys(a);let u=c.length;for(;u-- >0;){const p=c[u],m=Object.prototype.hasOwnProperty.call(o,p)?o[p]:void 0;if(m){const f=a[p],g=f===void 0||m(f,p,a);if(g!==!0)throw new Y("option "+p+" must be "+g,Y.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new Y("Unknown option "+p,Y.ERR_BAD_OPTION)}}const Gs={assertOptions:Wy,validators:lo},at=Gs.validators;let Gr=class{constructor(o){this.defaults=o||{},this.interceptors={request:new Zu,response:new Zu}}async request(o,i){try{return await this._request(o,i)}catch(c){if(c instanceof Error)try{let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const p=u.stack;let m="";if(typeof p=="string"){const f=p.indexOf(`
`);m=f===-1?"":p.slice(f+1)}if(!c.stack)c.stack=m;else if(m){const f=m.indexOf(`
`),g=f===-1?-1:m.indexOf(`
`,f+1),b=g===-1?"":m.slice(g+1);String(c.stack).endsWith(b)||(c.stack+=`
`+m)}}catch{}throw c}}_request(o,i){typeof o=="string"?(i=i||{},i.url=o):i=o||{},i=Jr(this.defaults,i);const{transitional:c,paramsSerializer:u,headers:p}=i;c!==void 0&&Gs.assertOptions(c,{silentJSONParsing:at.transitional(at.boolean),forcedJSONParsing:at.transitional(at.boolean),clarifyTimeoutError:at.transitional(at.boolean),legacyInterceptorReqResOrdering:at.transitional(at.boolean),advertiseZstdAcceptEncoding:at.transitional(at.boolean),validateStatusUndefinedResolves:at.transitional(at.boolean)},!1),u!=null&&(S.isFunction(u)?i.paramsSerializer={serialize:u}:Gs.assertOptions(u,{encode:at.function,serialize:at.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Gs.assertOptions(i,{baseUrl:at.spelling("baseURL"),withXsrfToken:at.spelling("withXSRFToken")},!0),i.method=(S.getSafeProp(i,"method")||S.getSafeProp(this.defaults,"method")||"get").toLowerCase();let m=p&&S.merge(p.common,p[i.method]);p&&S.forEach(rm.concat("common"),B=>{delete p[B]}),i.headers=st.concat(m,p);const f=[];let g=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(i)===!1)return;g=g&&C.synchronous;const A=i.transitional||Al;A&&A.legacyInterceptorReqResOrdering?f.unshift(C.fulfilled,C.rejected):f.push(C.fulfilled,C.rejected)});const b=[];this.interceptors.response.forEach(function(C){b.push(C.fulfilled,C.rejected)});let x,y=0,N;if(!g){const B=[gl.bind(this),void 0];for(B.unshift(...f),B.push(...b),N=B.length,x=Promise.resolve(i);y<N;)x=x.then(B[y++],B[y++]);return x}N=f.length;let O=i;for(;y<N;){const B=f[y++],C=f[y++];try{O=B?B(O):O}catch(A){if(!C){x=Promise.reject(A);break}try{const z=C.call(this,A);S.isThenable(z)&&(x=Promise.resolve(z).then(()=>gl.call(this,O)))}catch(z){x=Promise.reject(z)}break}}if(!x)try{x=gl.call(this,O)}catch(B){x=Promise.reject(B)}for(y=0,N=b.length;y<N;)x=x.then(b[y++],b[y++]);return x}getUri(o){o=Jr(this.defaults,o);const i=om(o.baseURL,o.url,o.allowAbsoluteUrls,o);return Jp(i,o.params,o.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(o){Gr.prototype[o]=function(i,c){return this.request(Jr(c||{},{method:o,url:i,data:c&&S.hasOwnProp(c,"data")?c.data:void 0}))}});S.forEach(["post","put","patch","query"],function(o){function i(c){return function(p,m,f){return this.request(Jr(f||{},{method:o,headers:c?{"Content-Type":"multipart/form-data"}:{},url:p,data:m}))}}Gr.prototype[o]=i(),o!=="query"&&(Gr.prototype[o+"Form"]=i(!0))});let Vy=class um{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(p){i=p});const c=this;this.promise.then(u=>{if(!c._listeners)return;let p=c._listeners.length;for(;p-- >0;)c._listeners[p](u);c._listeners=null}),this.promise.then=u=>{let p;const m=new Promise(f=>{c.subscribe(f),p=f}).then(u);return m.cancel=function(){c.unsubscribe(p)},m},o(function(p,m,f){c.reason||(c.reason=new Ra(p,m,f),i(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const i=this._listeners.indexOf(o);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const o=new AbortController,i=c=>{o.abort(c)};return this.subscribe(i),o.signal.unsubscribe=()=>this.unsubscribe(i),o.signal}static source(){let o;return{token:new um(function(u){o=u}),cancel:o}}};function Qy(a){return function(i){return a.apply(null,i)}}function Ky(a){return S.isObject(a)&&a.isAxiosError===!0}const Ys={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ys).forEach(([a,o])=>{Ys[o]===void 0&&(Ys[o]=a)});function pm(a){const o=new Gr(a),i=Lp(Gr.prototype.request,o);return S.extend(i,Gr.prototype,o,{allOwnKeys:!0}),S.extend(i,o,null,{allOwnKeys:!0}),i.create=function(u){return pm(Jr(a,u))},i}const Be=pm(Aa);Be.Axios=Gr;Be.CanceledError=Ra;Be.CancelToken=Vy;Be.isCancel=nm;Be.VERSION=Fl;Be.toFormData=io;Be.AxiosError=Y;Be.Cancel=Be.CanceledError;Be.all=function(o){return Promise.all(o)};Be.spread=Qy;Be.isAxiosError=Ky;Be.mergeConfig=Jr;Be.AxiosHeaders=st;Be.formToJSON=a=>tm(S.isHTMLForm(a)?new FormData(a):a);Be.getAdapter=dm.getAdapter;Be.HttpStatusCode=Ys;Be.default=Be;const{Axios:k1,AxiosError:w1,CanceledError:N1,isCancel:S1,CancelToken:C1,VERSION:E1,all:P1,Cancel:z1,isAxiosError:T1,spread:_1,toFormData:A1,AxiosHeaders:R1,HttpStatusCode:F1,formToJSON:D1,getAdapter:L1,mergeConfig:O1,create:M1}=Be,ye=Be.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});ye.interceptors.request.use(a=>{const o=localStorage.getItem("ddc_admin_token");return o&&(a.headers.Authorization=`Bearer ${o}`),a},a=>Promise.reject(a));ye.interceptors.response.use(a=>a,a=>(a.response&&a.response.status===401&&window.location.pathname.startsWith("/admin")&&window.location.pathname!=="/admin/login"&&(localStorage.removeItem("ddc_admin_token"),localStorage.removeItem("ddc_admin_user"),window.location.href="/admin/login"),Promise.reject(a)));const mm=k.createContext(null),Gy=({children:a})=>{const[o,i]=k.useState(null),[c,u]=k.useState(localStorage.getItem("ddc_admin_token")||null),[p,m]=k.useState(!0);k.useEffect(()=>{(async()=>{if(localStorage.getItem("ddc_admin_token"))try{const y=await ye.get("/auth/me");y.data.success&&i(y.data.admin)}catch{localStorage.removeItem("ddc_admin_token"),localStorage.removeItem("ddc_admin_user"),u(null),i(null)}m(!1)})()},[]);const f=async(b,x)=>{const y=await ye.post("/auth/login",{email:b,password:x});if(y.data.success)return localStorage.setItem("ddc_admin_token",y.data.token),localStorage.setItem("ddc_admin_user",JSON.stringify(y.data.admin)),u(y.data.token),i(y.data.admin),y.data;throw new Error(y.data.message||"Login failed")},g=()=>{localStorage.removeItem("ddc_admin_token"),localStorage.removeItem("ddc_admin_user"),u(null),i(null)};return t.jsx(mm.Provider,{value:{admin:o,token:c,isAuthenticated:!!c,loading:p,login:f,logout:g},children:a})},fm=()=>k.useContext(mm);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hm=(...a)=>a.filter((o,i,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=k.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:u="",children:p,iconNode:m,...f},g)=>k.createElement("svg",{ref:g,...Xy,width:o,height:o,stroke:a,strokeWidth:c?Number(i)*24/Number(o):i,className:hm("lucide",u),...f},[...m.map(([b,x])=>k.createElement(b,x)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(a,o)=>{const i=k.forwardRef(({className:c,...u},p)=>k.createElement(Jy,{ref:p,iconNode:o,className:hm(`lucide-${Yy(a)}`,c),...u}));return i.displayName=`${a}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],co=ae("Activity",Zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Rt=ae("ArrowRight",ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],rv=ae("ArrowUpDown",tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],gm=ae("Award",nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],sv=ae("Banknote",av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],iv=ae("Building2",ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],cv=ae("Building",lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],xm=ae("CalendarCheck",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ft=ae("Calendar",uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ll=ae("Check",pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ym=ae("ChevronDown",mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Je=ae("ChevronRight",fv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],gv=ae("ChevronUp",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Pa=ae("CircleAlert",xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lt=ae("CircleCheck",yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bv=ae("CircleHelp",vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],bt=ae("Clock",jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Ol=ae("Cpu",kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],mp=ae("CreditCard",wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Fa=ae("Droplet",Nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Rn=ae("ExternalLink",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],Ev=ae("FileCheck2",Cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],to=ae("FileText",Pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Ml=ae("FlaskConical",zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Bl=ae("Heart",Tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],or=ae("House",_v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],El=ae("Info",Av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Fv=ae("LayoutDashboard",Rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ro=ae("Lock",Dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Ov=ae("LogOut",Lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Il=ae("Mail",Mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Tr=ae("MapPin",Bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Uv=ae("Menu",Iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],_r=ae("MessageSquare",qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],vm=ae("Navigation",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Ul=ae("Package",$v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Da=ae("PenLine",Wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],bm=ae("PhoneCall",Vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],uo=ae("Phone",Qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],jm=ae("Plus",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Yv=ae("Printer",Gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],Jv=ae("QrCode",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],e0=ae("Radio",Zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],po=ae("RefreshCw",t0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],n0=ae("Save",r0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Ar=ae("Search",a0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],o0=ae("Send",s0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],l0=ae("Settings",i0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],d0=ae("ShieldAlert",c0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Dt=ae("ShieldCheck",u0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],m0=ae("Smartphone",p0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],h0=ae("Sparkles",f0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],x0=ae("Star",g0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],km=ae("Trash2",y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],wm=ae("User",v0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],mo=ae("Users",b0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Vt=ae("X",j0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],fo=ae("Zap",k0),Nm=k.createContext(null),w0=({children:a})=>{const[o,i]=k.useState([]),c=k.useCallback((p,m="info",f=4e3)=>{const g=Date.now()+Math.random().toString(36).substr(2,5);i(b=>[...b,{id:g,message:p,type:m}]),f>0&&setTimeout(()=>{u(g)},f)},[]),u=k.useCallback(p=>{i(m=>m.filter(f=>f.id!==p))},[]);return t.jsxs(Nm.Provider,{value:{addToast:c,removeToast:u},children:[a,t.jsx("div",{style:{position:"fixed",top:"24px",right:"24px",zIndex:9999,display:"flex",flexDirection:"column",gap:"10px",maxWidth:"380px"},children:o.map(p=>{let m="#1E293B",f="#334155",g=t.jsx(El,{size:20,color:"#38BDF8"});return p.type==="success"?(m="#064E3B",f="#059669",g=t.jsx(lt,{size:20,color:"#34D399"})):p.type==="error"&&(m="#7F1D1D",f="#DC2626",g=t.jsx(Pa,{size:20,color:"#F87171"})),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",background:m,color:"#FFFFFF",padding:"12px 16px",borderRadius:"10px",boxShadow:"0 8px 20px rgba(0,0,0,0.25)",border:`1px solid ${f}`,animation:"slideUp 0.2s ease",fontSize:"0.9rem",lineHeight:1.4},children:[t.jsx("div",{children:g}),t.jsx("div",{style:{flex:1},children:p.message}),t.jsx("button",{onClick:()=>u(p.id),style:{background:"none",border:"none",color:"rgba(255,255,255,0.7)",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},children:t.jsx(Vt,{size:16})})]},p.id)})})]})},Mt=()=>k.useContext(Nm),N0=({onOpenBooking:a})=>{const[o,i]=k.useState(!1),c=Lt(),u=()=>{i(!1),a?a():c("/book")};return t.jsxs("header",{className:"header-wrapper",children:[t.jsx("div",{className:"top-bar",children:t.jsxs("div",{className:"container top-bar-inner",children:[t.jsxs("div",{className:"top-bar-left",children:[t.jsxs("span",{className:"top-item top-address",children:[t.jsx(Tr,{size:13,className:"top-icon"}),t.jsx("span",{children:"No. 42, Salai Road, Thillai Nagar, Trichy"})]}),t.jsxs("span",{className:"top-item top-hours",children:[t.jsx(bt,{size:13,className:"top-icon"}),t.jsx("span",{children:"Mon - Sat: 6:30 AM - 9:00 PM | Sun: 7:00 AM - 2:00 PM"})]})]}),t.jsxs("div",{className:"top-bar-right",children:[t.jsxs("a",{href:"tel:+919443100000",className:"top-item top-phone",children:[t.jsx(uo,{size:13,className:"top-icon"}),t.jsx("span",{children:"Call: +91 94431 00000"})]}),t.jsxs("span",{className:"badge-free-hc hide-mobile",children:[t.jsx(Dt,{size:13}),t.jsx("span",{children:"Free Home Sample Pickup"})]})]})]})}),t.jsx("div",{className:"main-nav",children:t.jsxs("div",{className:"container nav-container",children:[t.jsxs(Pe,{to:"/",className:"brand-logo",onClick:()=>i(!1),children:[t.jsx("img",{src:"/logo.svg",alt:"Doctor Diagnostics Center Logo",className:"logo-img"}),t.jsxs("div",{className:"brand-text",children:[t.jsx("span",{className:"brand-title",children:"Doctor Diagnostics Center"}),t.jsx("span",{className:"brand-sub",children:"Diagnosis & Research • Trichy"})]})]}),t.jsxs("nav",{className:"desktop-links","aria-label":"Main Navigation",children:[t.jsx(Ae,{to:"/",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"Home"}),t.jsx(Ae,{to:"/tests",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"Tests"}),t.jsx(Ae,{to:"/packages",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"Packages"}),t.jsx(Ae,{to:"/services",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"Services"}),t.jsx(Ae,{to:"/home-collection",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"Home Collection"}),t.jsx(Ae,{to:"/check-status",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"Check Status"}),t.jsx(Ae,{to:"/about",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"About"}),t.jsx(Ae,{to:"/contact",className:({isActive:p})=>p?"nav-link active":"nav-link",children:"Contact"})]}),t.jsxs("div",{className:"nav-actions",children:[t.jsxs("a",{href:"https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Center%20Trichy,%20I%20would%20like%20to%20enquire%20about%20diagnostic%20tests.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp btn-sm nav-wa-btn",title:"Chat on WhatsApp",children:[t.jsx(_r,{size:15}),t.jsx("span",{children:"WhatsApp"})]}),t.jsxs("button",{onClick:u,className:"btn btn-primary btn-sm nav-book-btn",children:[t.jsx(Ft,{size:15}),t.jsx("span",{children:"Book Appointment"})]}),t.jsx("button",{className:"mobile-toggle-btn",onClick:()=>i(!o),"aria-label":o?"Close navigation menu":"Open navigation menu","aria-expanded":o,children:o?t.jsx(Vt,{size:24}):t.jsx(Uv,{size:24})})]})]})}),o&&t.jsx("div",{className:"mobile-drawer",role:"dialog","aria-modal":"true",children:t.jsxs("div",{className:"mobile-drawer-links",children:[t.jsx(Ae,{to:"/",onClick:()=>i(!1),className:"mobile-link",children:"Home"}),t.jsx(Ae,{to:"/tests",onClick:()=>i(!1),className:"mobile-link",children:"Tests Catalog"}),t.jsx(Ae,{to:"/packages",onClick:()=>i(!1),className:"mobile-link",children:"Health Packages"}),t.jsx(Ae,{to:"/services",onClick:()=>i(!1),className:"mobile-link",children:"Diagnostic Services"}),t.jsx(Ae,{to:"/home-collection",onClick:()=>i(!1),className:"mobile-link",children:"Home Sample Collection"}),t.jsx(Ae,{to:"/check-status",onClick:()=>i(!1),className:"mobile-link",children:"Check Status"}),t.jsx(Ae,{to:"/about",onClick:()=>i(!1),className:"mobile-link",children:"About Doctor Diagnostics"}),t.jsx(Ae,{to:"/contact",onClick:()=>i(!1),className:"mobile-link",children:"Contact & Location"}),t.jsxs("div",{className:"mobile-drawer-actions",children:[t.jsxs("button",{onClick:u,className:"btn btn-primary mobile-action-btn",children:[t.jsx(Ft,{size:18}),t.jsx("span",{children:"Book Appointment"})]}),t.jsxs("a",{href:"https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Center%20Trichy",target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp mobile-action-btn",children:[t.jsx(_r,{size:18}),t.jsx("span",{children:"WhatsApp Enquiry"})]})]})]})}),t.jsx("style",{children:`
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 900;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(11, 66, 111, 0.06);
        }
        .top-bar {
          background-color: var(--color-primary-dark);
          color: #E2E8F0;
          font-size: 0.8125rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .top-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #E2E8F0;
        }
        .top-phone {
          font-weight: 600;
        }
        .top-phone:hover {
          color: #5EEAD4;
        }
        .top-icon {
          color: #5EEAD4;
          flex-shrink: 0;
        }
        .badge-free-hc {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(7, 135, 124, 0.25);
          color: #5EEAD4;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          border: 1px solid rgba(94, 234, 212, 0.25);
        }
        .main-nav {
          min-height: 72px;
          display: flex;
          align-items: center;
          background: #ffffff;
          border-bottom: 1px solid var(--color-border);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 1rem;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-img {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          object-fit: contain;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.2;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }
        .brand-sub {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-secondary);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 1;
        }
        .nav-link {
          font-size: 0.885rem;
          font-weight: 600;
          color: var(--color-text-body);
          padding: 6px 4px;
          position: relative;
          white-space: nowrap;
          transition: color var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2.5px;
          background: var(--color-primary);
          border-radius: 2px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .nav-book-btn {
          white-space: nowrap;
        }
        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          padding: 6px;
        }
        .mobile-drawer {
          background: #ffffff;
          border-top: 1px solid var(--color-border);
          padding: 1.25rem;
          box-shadow: 0 10px 20px rgba(11, 66, 111, 0.08);
          animation: slideUp 0.2s ease-out;
        }
        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-link {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-main);
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }
        .mobile-link:hover, .mobile-link.active {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .mobile-drawer-actions {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-action-btn {
          width: 100%;
        }

        @media (max-width: 1140px) {
          .desktop-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
          .nav-wa-btn {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .top-address {
            display: none;
          }
          .hide-mobile {
            display: none;
          }
          .brand-title {
            font-size: 1.05rem;
          }
          .logo-img {
            width: 38px;
            height: 38px;
          }
          .nav-book-btn span {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .top-hours span {
            font-size: 0.75rem;
          }
          .top-phone span {
            font-size: 0.75rem;
          }
        }
      `})]})},S0=()=>t.jsxs("footer",{className:"site-footer",children:[t.jsx("div",{className:"container footer-main",children:t.jsxs("div",{className:"footer-grid",children:[t.jsxs("div",{className:"footer-col brand-col",children:[t.jsxs("div",{className:"footer-brand",children:[t.jsx("img",{src:"/logo.svg",alt:"Doctor Diagnostics Center Logo",className:"footer-logo"}),t.jsxs("div",{children:[t.jsx("h3",{className:"footer-brand-title",children:"Doctor Diagnostics Center"}),t.jsx("span",{className:"footer-brand-sub",children:"Diagnosis & Research • Trichy"})]})]}),t.jsx("p",{className:"footer-desc",children:"Tiruchirappalli’s trusted diagnostic laboratory delivering automated pathology, biochemistry, digital ECG, and radiology with verified clinical precision and same-day digital reporting."}),t.jsxs("div",{className:"footer-badges",children:[t.jsxs("span",{className:"footer-badge-item",children:[t.jsx(Dt,{size:15})," Automated Analytical Analyzers"]}),t.jsxs("span",{className:"footer-badge-item",children:[t.jsx(Dt,{size:15})," Daily Internal Quality Controls"]})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h4",{className:"footer-heading",children:"Quick Navigation"}),t.jsxs("ul",{className:"footer-links",children:[t.jsx("li",{children:t.jsxs(Pe,{to:"/",children:[t.jsx(Je,{size:13})," Home"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/tests",children:[t.jsx(Je,{size:13})," Diagnostic Tests Catalog"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/packages",children:[t.jsx(Je,{size:13})," Health Checkup Packages"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/services",children:[t.jsx(Je,{size:13})," Diagnostic Services"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/home-collection",children:[t.jsx(Je,{size:13})," Home Sample Collection"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/check-status",children:[t.jsx(Je,{size:13})," Check Booking Status"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/about",children:[t.jsx(Je,{size:13})," About Our Center"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/contact",children:[t.jsx(Je,{size:13})," Contact & Directions"]})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h4",{className:"footer-heading",children:"Diagnostic Specialties"}),t.jsxs("ul",{className:"footer-links",children:[t.jsx("li",{children:t.jsxs(Pe,{to:"/tests?category=Hematology",children:[t.jsx(Je,{size:13})," Hematology (CBC, Blood)"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/tests?category=Biochemistry",children:[t.jsx(Je,{size:13})," Biochemistry & Enzymes"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/tests?category=Endocrinology",children:[t.jsx(Je,{size:13})," Thyroid & Hormones"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/tests?category=Diabetes Care",children:[t.jsx(Je,{size:13})," Diabetes Care (HbA1c)"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/tests?category=Immunology",children:[t.jsx(Je,{size:13})," Vitamin D3 & B12"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/services",children:[t.jsx(Je,{size:13})," 12-Lead Digital ECG"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/services",children:[t.jsx(Je,{size:13})," Digital Chest X-Ray"]})}),t.jsx("li",{children:t.jsxs(Pe,{to:"/tests?category=Clinical Pathology",children:[t.jsx(Je,{size:13})," Clinical Pathology"]})})]})]}),t.jsxs("div",{className:"footer-col",children:[t.jsx("h4",{className:"footer-heading",children:"Center & Contact"}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(Tr,{size:16,className:"footer-contact-icon"}),t.jsx("span",{children:"No. 42, Salai Road, Near Thillai Nagar 1st Cross, Tiruchirappalli - 620018, Tamil Nadu"})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(uo,{size:16,className:"footer-contact-icon"}),t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("a",{href:"tel:+919443100000",className:"footer-link-highlight",children:"+91 94431 00000"})}),t.jsx("div",{className:"footer-contact-sub",children:"+91 431 2740000 (Lab Desk)"})]})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(_r,{size:16,className:"footer-contact-icon"}),t.jsx("a",{href:"https://wa.me/919443152200",target:"_blank",rel:"noopener noreferrer",className:"footer-wa-link",children:"+91 94431 52200 (WhatsApp)"})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(bt,{size:16,className:"footer-contact-icon"}),t.jsxs("div",{children:[t.jsx("div",{children:"Mon - Sat: 6:30 AM - 9:00 PM"}),t.jsx("div",{className:"footer-contact-sub",children:"Sunday: 7:00 AM - 2:00 PM"})]})]})]})]})}),t.jsx("div",{className:"footer-bottom",children:t.jsxs("div",{className:"container footer-bottom-inner",children:[t.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," Doctor Diagnostics Center, Trichy. All rights reserved."]}),t.jsxs("div",{className:"footer-bottom-links",children:[t.jsx(Pe,{to:"/about",children:"Privacy & Terms"}),t.jsx("span",{className:"footer-sep",children:"•"}),t.jsx(Pe,{to:"/contact",children:"Trichy Service Area"}),t.jsx("span",{className:"footer-sep",children:"•"}),t.jsxs(Pe,{to:"/admin",className:"admin-portal-link",children:[t.jsx(ro,{size:12})," Staff Portal"]})]})]})}),t.jsx("style",{children:`
        .site-footer {
          background-color: var(--color-primary-dark);
          color: #E2E8F0;
          margin-top: auto;
          border-top: 3px solid var(--color-secondary);
        }
        .footer-main {
          padding: 3.5rem 1.5rem 2.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.95fr 1fr 1.15fr;
          gap: 2.25rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.85rem;
        }
        .footer-logo {
          width: 44px;
          height: 44px;
          background: #ffffff;
          padding: 3px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .footer-brand-title {
          color: #FFFFFF;
          font-size: 1.1rem;
          margin-bottom: 2px;
          line-height: 1.2;
        }
        .footer-brand-sub {
          color: #5EEAD4;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .footer-desc {
          color: #CBD5E1;
          font-size: 0.835rem;
          line-height: 1.55;
          margin-bottom: 1.15rem;
        }
        .footer-badges {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .footer-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.775rem;
          color: #5EEAD4;
        }
        .footer-heading {
          color: #FFFFFF;
          font-size: 1.05rem;
          margin-bottom: 1.15rem;
          position: relative;
          padding-bottom: 6px;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 28px;
          height: 2px;
          background: var(--color-secondary);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .footer-links a {
          color: #CBD5E1;
          font-size: 0.835rem;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .footer-links a:hover {
          color: #5EEAD4;
          transform: translateX(3px);
        }
        .footer-contact-item {
          display: flex;
          gap: 10px;
          margin-bottom: 0.85rem;
          font-size: 0.835rem;
          color: #CBD5E1;
        }
        .footer-contact-icon {
          color: #38BDF8;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-link-highlight {
          color: #FFFFFF;
          font-weight: 600;
        }
        .footer-wa-link {
          color: #5EEAD4;
          font-weight: 600;
        }
        .footer-contact-sub {
          color: #94A3B8;
          font-size: 0.775rem;
        }
        .footer-bottom {
          background-color: #041B30;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem 0;
        }
        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8125rem;
          color: #94A3B8;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-bottom-links a {
          color: #94A3B8;
        }
        .footer-bottom-links a:hover {
          color: #FFFFFF;
        }
        .footer-sep {
          color: #475569;
        }
        .admin-portal-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #38BDF8;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `})]}),C0=({phoneNumber:a="919443152200",message:o="Hello Doctor Diagnostics Center Trichy, I would like to enquire about diagnostic blood tests & health checkup packages."})=>{const i=`https://wa.me/${a}?text=${encodeURIComponent(o)}`;return t.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"floating-whatsapp","aria-label":"Chat with Doctor Diagnostics Center on WhatsApp",children:[t.jsx(_r,{size:30,fill:"#ffffff"}),t.jsx("span",{className:"floating-whatsapp-tooltip",children:"Chat with Doctor Diagnostics on WhatsApp"})]})},E0=["Thillai Nagar","Cantonment","KK Nagar","Srirangam","Woraiyur","Tennur","TVS Tollgate","Palakkarai","Ponmalai (Golden Rock)","Edamalaipatti Pudur","Crawford","Kattur","Melachinthamani","Subramaniyapuram","Beema Nagar"],P0=["06:30 AM - 07:30 AM","07:30 AM - 08:30 AM","08:30 AM - 09:30 AM","09:30 AM - 10:30 AM","10:30 AM - 11:30 AM","11:30 AM - 12:30 PM","04:30 PM - 05:30 PM","05:30 PM - 06:30 PM","06:30 PM - 07:30 PM","07:30 PM - 08:30 PM"],fp=["State Bank of India (SBI)","HDFC Bank","ICICI Bank","Axis Bank","Canara Bank","Indian Bank","Bank of Baroda"],Fn=({isOpen:a,onClose:o,preselectedItem:i=null})=>{const{addToast:c}=Mt(),[u,p]=k.useState(!1),[m,f]=k.useState(null),[g,b]=k.useState(!1),[x,y]=k.useState(null),[N,O]=k.useState({tests:[],packages:[]}),B=new Date().toISOString().split("T")[0],[C,A]=k.useState({bookingType:"lab_visit",itemType:"package",itemId:"",itemName:"Master Health Checkup (Comprehensive)",price:1999,patientName:"",mobileNumber:"",email:"",age:"",gender:"male",appointmentDate:B,timeSlot:"07:30 AM - 08:30 AM",location:"Salai Road, Thillai Nagar",address:"",locality:"Thillai Nagar",pincode:"620018",specialInstructions:"",paymentMethod:"pay_at_lab"}),[z,L]=k.useState("patient@okhdfcbank"),[U,F]=k.useState({cardNumber:"4532 8192 3847 9920",cardHolder:"SENTHIL NATHAN",expiry:"08/29",cvv:"821"}),[q,I]=k.useState(fp[0]),[j,V]=k.useState(!1),[X,K]=k.useState(1);if(k.useEffect(()=>{if(!a)return;(async()=>{try{const[J,$]=await Promise.all([ye.get("/tests?active=true"),ye.get("/packages?active=true")]);J.data.success&&$.data.success&&O({tests:J.data.data,packages:$.data.data})}catch(J){console.error("Error fetching catalog for modal:",J)}})()},[a]),k.useEffect(()=>{i&&A(D=>({...D,itemType:i.type||(i.includedTests?"package":"test"),itemId:i._id||"",itemName:i.name||D.itemName,price:i.price||D.price,bookingType:i.homeCollectionAvailable===!1?"lab_visit":D.bookingType}))},[i]),k.useEffect(()=>{if(!C.appointmentDate||!C.timeSlot)return;let D=!0;return(async()=>{b(!0);try{const $=await ye.get(`/bookings/check-slot?date=${C.appointmentDate}&slot=${encodeURIComponent(C.timeSlot)}`);D&&$.data.success&&y($.data.data)}catch($){console.error("Slot check error:",$)}finally{D&&b(!1)}})(),()=>{D=!1}},[C.appointmentDate,C.timeSlot]),!a)return null;const pe=D=>{const{name:J,value:$}=D.target;A(P=>({...P,[J]:$}))},Ne=D=>{const J=D.target.value;if(C.itemType==="package"){const $=N.packages.find(P=>P._id===J);$&&A(P=>({...P,itemId:$._id,itemName:$.name,price:$.price}))}else{const $=N.tests.find(P=>P._id===J);$&&A(P=>({...P,itemId:$._id,itemName:$.name,price:$.price}))}},De=()=>C.patientName.trim()?!C.mobileNumber.trim()||C.mobileNumber.length<10?(c("Please enter a valid 10-digit mobile number","error"),!1):!C.age||Number(C.age)<=0?(c("Please enter patient age","error"),!1):C.bookingType==="home_collection"&&(!C.address.trim()||!C.locality)?(c("Please provide your complete address and Trichy locality for home sample pickup","error"),!1):x&&!x.available?(c("Selected slot is full. Please choose another time slot.","error"),!1):C.paymentMethod==="dummy_upi"&&!z.trim()?(c("Please enter a demo UPI ID (e.g. yourname@upi)","error"),!1):C.paymentMethod==="dummy_card"&&(!U.cardNumber||!U.expiry||!U.cvv)?(c("Please complete the demo card fields","error"),!1):!0:(c("Please enter patient full name","error"),!1),Se=async(D={})=>{var J,$;p(!0);try{const P={...C,price:Number(C.price),...D},M=await ye.post("/bookings",P);M.data.success&&(f(M.data.data),D.paymentStatus==="paid"?c(`Demo Payment Authorized! Booking confirmed (${M.data.data.bookingReference})`,"success"):c(`Appointment booked successfully! (${M.data.data.bookingReference})`,"success"))}catch(P){const M=(($=(J=P.response)==null?void 0:J.data)==null?void 0:$.message)||"Failed to submit booking. Please try again.";c(M,"error")}finally{p(!1),V(!1)}},Ge=async D=>{if(D.preventDefault(),!!De()){if(C.paymentMethod==="pay_at_lab"){await Se({paymentMethod:"pay_at_lab",paymentStatus:"pending",transactionId:"PAY-AT-LAB",paidAmount:0});return}V(!0),K(1),setTimeout(()=>{K(2)},1100),setTimeout(async()=>{K(3);const J=`TXN-${C.paymentMethod.replace("dummy_","").toUpperCase()}-${Math.floor(1e5+Math.random()*9e5)}`;setTimeout(async()=>{await Se({paymentMethod:C.paymentMethod,paymentStatus:"paid",transactionId:J,paidAmount:Number(C.price)})},700)},2200)}},Le=()=>{f(null),V(!1),o()},be=()=>{F({cardNumber:"4532 8192 3847 9920",cardHolder:(C.patientName||"SENTHIL NATHAN").toUpperCase(),expiry:"11/29",cvv:"742"}),c("Demo test card details filled!","info")};return t.jsx("div",{className:"modal-overlay",onClick:Le,children:t.jsxs("div",{className:"modal-content",onClick:D=>D.stopPropagation(),style:{maxWidth:"720px"},children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"1.25rem",color:"var(--color-primary)",display:"flex",alignItems:"center",gap:"8px"},children:t.jsx("span",{children:m?"Booking & Payment Confirmed!":"Book Diagnostic Appointment"})}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--color-text-muted)"},children:"Doctor Diagnostics Center • Salai Road, Thillai Nagar, Trichy"})]}),t.jsx("button",{onClick:Le,style:{background:"none",border:"none",cursor:"pointer",color:"#64748B"},"aria-label":"Close modal",children:t.jsx(Vt,{size:22})})]}),m?t.jsxs("div",{className:"modal-body",style:{textAlign:"center",padding:"1.75rem 1.5rem"},children:[t.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"var(--color-success-bg)",color:"var(--color-success)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem"},children:t.jsx(lt,{size:38})}),t.jsx("h3",{style:{fontSize:"1.35rem",color:"var(--color-primary-dark)",marginBottom:"0.4rem"},children:"Appointment Reserved Successfully!"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.9rem",marginBottom:"1.25rem"},children:"Your laboratory booking has been registered. You can track this booking at any time with the reference number."}),t.jsxs("div",{style:{background:"#F8FAFC",border:"1.5px solid #CBD5E1",borderRadius:"12px",padding:"1.25rem",marginBottom:"1.25rem",textAlign:"left"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",borderBottom:"1px solid #E2E8F0",paddingBottom:"10px"},children:[t.jsxs("div",{children:[t.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Booking Reference"}),t.jsx("div",{style:{fontWeight:800,color:"var(--color-primary)",fontSize:"1.2rem",letterSpacing:"0.5px"},children:m.bookingReference})]}),t.jsx("div",{style:{textAlign:"right"},children:m.paymentStatus==="paid"?t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#DCFCE7",color:"#15803D",fontWeight:700,fontSize:"0.8125rem",padding:"5px 12px",borderRadius:"9999px",border:"1px solid #86EFAC"},children:[t.jsx(Ll,{size:14}),t.jsx("span",{children:"PAID ONLINE (DEMO)"})]}):t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#FEF3C7",color:"#B45309",fontWeight:700,fontSize:"0.8125rem",padding:"5px 12px",borderRadius:"9999px",border:"1px solid #FCD34D"},children:[t.jsx(bt,{size:14}),t.jsx("span",{children:"PAY AT LAB / PICKUP"})]})})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",fontSize:"0.875rem"},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Patient:"})," ",m.patientName]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Mobile:"})," ",m.mobileNumber]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Service:"})," ",m.itemName]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Total Amount:"})," ₹",m.price]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Date & Slot:"})," ",m.appointmentDate," (",m.timeSlot,")"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Payment Method:"})," ",m.paymentMethod==="dummy_upi"?"UPI (Demo)":m.paymentMethod==="dummy_card"?"Card (Demo)":m.paymentMethod==="dummy_netbanking"?"Net Banking (Demo)":"Pay at Reception / Pickup"]}),m.transactionId&&t.jsxs("div",{style:{gridColumn:"span 2",background:"#FFFFFF",padding:"6px 10px",borderRadius:"6px",border:"1px solid #E2E8F0",marginTop:"4px",fontSize:"0.8125rem"},children:[t.jsx("span",{style:{color:"var(--color-text-muted)"},children:"Demo Transaction ID: "}),t.jsx("code",{style:{color:"var(--color-primary)",fontWeight:700},children:m.transactionId}),t.jsxs("span",{style:{float:"right",color:"#16A34A",fontWeight:600},children:["Amount Settled: ₹",m.price]})]})]})]}),t.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap"},children:[t.jsxs("a",{href:`https://wa.me/919443100000?text=${encodeURIComponent(`Hello Doctor Diagnostics, my booking reference is ${m.bookingReference} for ${m.itemName} on ${m.appointmentDate}. Payment status: ${m.paymentStatus==="paid"?`Paid online (Txn: ${m.transactionId})`:"Pay at center"}.`)}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp",children:[t.jsx("span",{children:"Notify Lab via WhatsApp"}),t.jsx(Rn,{size:15})]}),t.jsxs("button",{type:"button",onClick:()=>window.print(),className:"btn btn-outline",style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(Yv,{size:15}),t.jsx("span",{children:"Print Receipt"})]}),t.jsx("button",{onClick:Le,className:"btn btn-primary",children:"Done"})]})]}):t.jsxs("form",{onSubmit:Ge,children:[t.jsxs("div",{className:"modal-body",style:{maxHeight:"70vh",overflowY:"auto",padding:"1.25rem 1.5rem"},children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",style:{fontWeight:700},children:"Service Type"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsxs("button",{type:"button",onClick:()=>A({...C,bookingType:"lab_visit"}),style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",border:C.bookingType==="lab_visit"?"2px solid var(--color-primary)":"1px solid var(--color-border)",background:C.bookingType==="lab_visit"?"var(--color-primary-light)":"#ffffff",color:C.bookingType==="lab_visit"?"var(--color-primary-dark)":"var(--color-text-main)",fontWeight:600,cursor:"pointer"},children:[t.jsx(iv,{size:18,color:"var(--color-primary)"}),t.jsx("span",{children:"Visit Lab (Thillai Nagar)"})]}),t.jsxs("button",{type:"button",onClick:()=>A({...C,bookingType:"home_collection"}),style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",border:C.bookingType==="home_collection"?"2px solid var(--color-secondary)":"1px solid var(--color-border)",background:C.bookingType==="home_collection"?"var(--color-secondary-light)":"#ffffff",color:C.bookingType==="home_collection"?"var(--color-secondary)":"var(--color-text-main)",fontWeight:600,cursor:"pointer"},children:[t.jsx(or,{size:18,color:"var(--color-secondary)"}),t.jsx("span",{children:"Home Sample Pickup"})]})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",style:{flex:1},children:[t.jsx("label",{className:"form-label",children:"Category"}),t.jsxs("select",{className:"form-control",value:C.itemType,onChange:D=>{const J=D.target.value,$=J==="package"?N.packages[0]:N.tests[0];A({...C,itemType:J,itemId:($==null?void 0:$._id)||"",itemName:($==null?void 0:$.name)||"",price:($==null?void 0:$.price)||0})},children:[t.jsx("option",{value:"package",children:"Health Package"}),t.jsx("option",{value:"test",children:"Individual Diagnostic Test"})]})]}),t.jsxs("div",{className:"form-group",style:{flex:2},children:[t.jsx("label",{className:"form-label",children:"Select Investigation / Package"}),t.jsx("select",{className:"form-control",value:C.itemId,onChange:Ne,children:C.itemType==="package"?N.packages.map(D=>t.jsxs("option",{value:D._id,children:[D.name," — ₹",D.price," (MRP: ₹",D.mrp,")"]},D._id)):N.tests.map(D=>t.jsxs("option",{value:D._id,children:[D.name," — ₹",D.price]},D._id))})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Preferred Date *"}),t.jsx("input",{type:"date",name:"appointmentDate",min:B,value:C.appointmentDate,onChange:pe,className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Time Slot *"}),t.jsx("select",{name:"timeSlot",value:C.timeSlot,onChange:pe,className:"form-control",required:!0,children:P0.map(D=>t.jsx("option",{value:D,children:D},D))}),t.jsx("div",{style:{marginTop:"4px",fontSize:"0.78rem"},children:g?t.jsx("span",{style:{color:"var(--color-text-muted)"},children:"Checking capacity..."}):x?x.available?t.jsxs("span",{style:{color:"var(--color-success)",fontWeight:600},children:["✓ Available (",x.remainingSlots," slots remaining)"]}):t.jsx("span",{style:{color:"var(--color-danger)",fontWeight:600},children:"✕ Slot full. Please choose another time."}):null})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Patient Full Name *"}),t.jsx("input",{type:"text",name:"patientName",value:C.patientName,onChange:pe,placeholder:"e.g. Senthil Nathan",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"10-Digit Mobile Number *"}),t.jsx("input",{type:"tel",name:"mobileNumber",value:C.mobileNumber,onChange:pe,placeholder:"e.g. 9842412345",maxLength:10,className:"form-control",required:!0})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Age *"}),t.jsx("input",{type:"number",name:"age",value:C.age,onChange:pe,placeholder:"e.g. 42",min:"1",max:"120",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Gender *"}),t.jsxs("select",{name:"gender",value:C.gender,onChange:pe,className:"form-control",children:[t.jsx("option",{value:"male",children:"Male"}),t.jsx("option",{value:"female",children:"Female"}),t.jsx("option",{value:"other",children:"Other"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Email (Optional)"}),t.jsx("input",{type:"email",name:"email",value:C.email,onChange:pe,placeholder:"For report PDF delivery",className:"form-control"})]})]}),C.bookingType==="home_collection"&&t.jsxs("div",{style:{background:"var(--color-secondary-light)",padding:"1rem",borderRadius:"10px",marginBottom:"1rem",border:"1px solid rgba(8, 127, 115, 0.2)"},children:[t.jsxs("div",{style:{fontWeight:600,color:"var(--color-secondary)",marginBottom:"0.75rem",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Tr,{size:18}),t.jsx("span",{children:"Home Sample Pickup Address in Trichy"})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Trichy Locality *"}),t.jsx("select",{name:"locality",value:C.locality,onChange:pe,className:"form-control",required:!0,children:E0.map(D=>t.jsx("option",{value:D,children:D},D))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Pincode"}),t.jsx("input",{type:"text",name:"pincode",value:C.pincode,onChange:pe,className:"form-control",placeholder:"e.g. 620018"})]})]}),t.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[t.jsx("label",{className:"form-label",children:"Complete Door/Street Address *"}),t.jsx("textarea",{name:"address",value:C.address,onChange:pe,rows:"2",placeholder:"e.g. No. 15, 2nd Cross, Thillai Nagar West, Trichy",className:"form-control",required:!0})]})]}),t.jsxs("div",{style:{background:"#FFFFFF",border:"1.5px solid #CBD5E1",borderRadius:"12px",padding:"1.25rem",marginTop:"1rem",marginBottom:"1rem"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.85rem"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"6px",background:"var(--color-primary-light)",color:"var(--color-primary)",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(mp,{size:16})}),t.jsx("span",{style:{fontWeight:700,color:"var(--color-primary-dark)",fontSize:"0.95rem"},children:"Payment Method"})]}),t.jsx("span",{style:{fontSize:"0.725rem",color:"#047857",background:"#D1FAE5",padding:"3px 8px",borderRadius:"4px",fontWeight:600},children:"🔒 Simulated Demo Gateway"})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginBottom:"1rem"},children:[t.jsxs("button",{type:"button",onClick:()=>A({...C,paymentMethod:"pay_at_lab"}),style:{padding:"10px 8px",borderRadius:"8px",border:C.paymentMethod==="pay_at_lab"?"2px solid var(--color-primary)":"1px solid #CBD5E1",background:C.paymentMethod==="pay_at_lab"?"var(--color-primary-light)":"#F8FAFC",color:C.paymentMethod==="pay_at_lab"?"var(--color-primary-dark)":"#475569",fontSize:"0.775rem",fontWeight:600,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textAlign:"center"},children:[t.jsx(sv,{size:18,color:C.paymentMethod==="pay_at_lab"?"var(--color-primary)":"#64748B"}),t.jsx("span",{children:"Pay at Lab"})]}),t.jsxs("button",{type:"button",onClick:()=>A({...C,paymentMethod:"dummy_upi"}),style:{padding:"10px 8px",borderRadius:"8px",border:C.paymentMethod==="dummy_upi"?"2px solid var(--color-primary)":"1px solid #CBD5E1",background:C.paymentMethod==="dummy_upi"?"var(--color-primary-light)":"#F8FAFC",color:C.paymentMethod==="dummy_upi"?"var(--color-primary-dark)":"#475569",fontSize:"0.775rem",fontWeight:600,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textAlign:"center"},children:[t.jsx(m0,{size:18,color:C.paymentMethod==="dummy_upi"?"var(--color-primary)":"#64748B"}),t.jsx("span",{children:"Demo UPI"})]}),t.jsxs("button",{type:"button",onClick:()=>A({...C,paymentMethod:"dummy_card"}),style:{padding:"10px 8px",borderRadius:"8px",border:C.paymentMethod==="dummy_card"?"2px solid var(--color-primary)":"1px solid #CBD5E1",background:C.paymentMethod==="dummy_card"?"var(--color-primary-light)":"#F8FAFC",color:C.paymentMethod==="dummy_card"?"var(--color-primary-dark)":"#475569",fontSize:"0.775rem",fontWeight:600,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textAlign:"center"},children:[t.jsx(mp,{size:18,color:C.paymentMethod==="dummy_card"?"var(--color-primary)":"#64748B"}),t.jsx("span",{children:"Demo Card"})]}),t.jsxs("button",{type:"button",onClick:()=>A({...C,paymentMethod:"dummy_netbanking"}),style:{padding:"10px 8px",borderRadius:"8px",border:C.paymentMethod==="dummy_netbanking"?"2px solid var(--color-primary)":"1px solid #CBD5E1",background:C.paymentMethod==="dummy_netbanking"?"var(--color-primary-light)":"#F8FAFC",color:C.paymentMethod==="dummy_netbanking"?"var(--color-primary-dark)":"#475569",fontSize:"0.775rem",fontWeight:600,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",textAlign:"center"},children:[t.jsx(cv,{size:18,color:C.paymentMethod==="dummy_netbanking"?"var(--color-primary)":"#64748B"}),t.jsx("span",{children:"Net Banking"})]})]}),C.paymentMethod==="pay_at_lab"&&t.jsx("div",{style:{background:"#F8FAFC",padding:"10px 14px",borderRadius:"8px",fontSize:"0.825rem",color:"#475569"},children:t.jsxs("p",{style:{margin:0},children:["✓ ",t.jsx("strong",{children:"No Advance Payment Required."})," Pay ₹",C.price," at our Thillai Nagar center reception or in cash/UPI to our phlebotomist during home sample pickup."]})}),C.paymentMethod==="dummy_upi"&&t.jsxs("div",{style:{background:"#F0FDF4",padding:"12px 14px",borderRadius:"8px",border:"1px solid #BBF7D0"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[t.jsx("span",{style:{fontSize:"0.8125rem",fontWeight:700,color:"#166534"},children:"Simulated Instant UPI Payment (Google Pay / PhonePe / Paytm)"}),t.jsx("span",{style:{fontSize:"0.7rem",color:"#15803D"},children:"Zero real charge"})]}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("input",{type:"text",value:z,onChange:D=>L(D.target.value),placeholder:"e.g. yourname@okhdfcbank",className:"form-control",style:{fontSize:"0.85rem"}}),t.jsx("button",{type:"button",onClick:()=>L("demo.patient@okaxis"),className:"btn btn-outline btn-sm",style:{whiteSpace:"nowrap",fontSize:"0.75rem"},children:"Auto-Fill"})]}),t.jsx("p",{style:{margin:"6px 0 0",fontSize:"0.725rem",color:"#15803D"},children:"💡 A simulated UPI approval prompt will verify instantly upon booking submission."})]}),C.paymentMethod==="dummy_card"&&t.jsxs("div",{style:{background:"#EFF6FF",padding:"12px 14px",borderRadius:"8px",border:"1px solid #BFDBFE"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[t.jsx("span",{style:{fontSize:"0.8125rem",fontWeight:700,color:"#1E40AF"},children:"Demo Credit / Debit Card Gateway"}),t.jsx("button",{type:"button",onClick:be,style:{background:"#DBEAFE",border:"none",color:"#1D4ED8",fontSize:"0.725rem",fontWeight:700,padding:"3px 8px",borderRadius:"4px",cursor:"pointer"},children:"⚡ Fill Demo Card"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx("input",{type:"text",value:U.cardNumber,onChange:D=>F({...U,cardNumber:D.target.value}),placeholder:"Card Number (4532 •••• •••• ••••)",className:"form-control",style:{fontSize:"0.85rem"}}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:"8px"},children:[t.jsx("input",{type:"text",value:U.cardHolder,onChange:D=>F({...U,cardHolder:D.target.value}),placeholder:"Cardholder Name",className:"form-control",style:{fontSize:"0.825rem"}}),t.jsx("input",{type:"text",value:U.expiry,onChange:D=>F({...U,expiry:D.target.value}),placeholder:"MM/YY",className:"form-control",style:{fontSize:"0.825rem"}}),t.jsx("input",{type:"password",value:U.cvv,onChange:D=>F({...U,cvv:D.target.value}),placeholder:"CVV",maxLength:4,className:"form-control",style:{fontSize:"0.825rem"}})]})]})]}),C.paymentMethod==="dummy_netbanking"&&t.jsxs("div",{style:{background:"#FAF5FF",padding:"12px 14px",borderRadius:"8px",border:"1px solid #E9D5FF"},children:[t.jsx("span",{style:{fontSize:"0.8125rem",fontWeight:700,color:"#6B21A8",display:"block",marginBottom:"8px"},children:"Select Bank for Simulated Authorization"}),t.jsx("select",{value:q,onChange:D=>I(D.target.value),className:"form-control",style:{fontSize:"0.85rem"},children:fp.map(D=>t.jsx("option",{value:D,children:D},D))})]})]}),t.jsxs("div",{className:"form-group",style:{marginBottom:"0.5rem"},children:[t.jsx("label",{className:"form-label",children:"Clinical or Delivery Instructions (Optional)"}),t.jsx("input",{type:"text",name:"specialInstructions",value:C.specialInstructions,onChange:pe,placeholder:"e.g. Fasting started at 9 PM, Diabetic patient, etc.",className:"form-control"})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.85rem 1rem",background:"var(--color-bg)",borderRadius:"8px",marginTop:"1rem"},children:[t.jsxs("div",{children:[t.jsx("span",{style:{fontSize:"0.85rem",color:"var(--color-text-muted)"},children:"Estimated Payable Amount:"}),t.jsxs("div",{style:{fontSize:"1.25rem",fontWeight:800,color:"var(--color-primary)"},children:["₹",C.price]})]}),t.jsx("div",{style:{fontSize:"0.8rem",color:"var(--color-text-muted)",textAlign:"right"},children:C.paymentMethod==="pay_at_lab"?t.jsxs(t.Fragment,{children:["Pay upon arrival / pickup",t.jsx("br",{}),t.jsx("span",{style:{color:"var(--color-secondary)",fontWeight:600},children:"Cash • UPI • Card Accepted"})]}):t.jsxs(t.Fragment,{children:["Demo Payment Mode",t.jsx("br",{}),t.jsx("span",{style:{color:"#16A34A",fontWeight:700},children:"Instant Test Authorization"})]})})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{type:"button",onClick:Le,className:"btn btn-outline btn-sm",children:"Cancel"}),t.jsx("button",{type:"submit",disabled:u||x&&!x.available,className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:u?t.jsx("span",{children:"Reserving Slot..."}):C.paymentMethod==="pay_at_lab"?t.jsx("span",{children:"Confirm & Reserve Appointment"}):t.jsxs(t.Fragment,{children:[t.jsx(ro,{size:15}),t.jsxs("span",{children:["Pay ₹",C.price," (Demo) & Confirm"]})]})})]})]}),j&&t.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(5px)",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:100,padding:"2rem",textAlign:"center"},children:[t.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:X===3?"#DCFCE7":"#EFF6FF",color:X===3?"#16A34A":"var(--color-primary)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem",transition:"all 0.3s ease"},children:X===3?t.jsx(lt,{size:36}):t.jsx(ro,{size:30,className:"spin"})}),t.jsxs("h3",{style:{color:"var(--color-primary-dark)",fontSize:"1.25rem",marginBottom:"0.4rem"},children:[X===1&&"Connecting to Simulated Payment Gateway...",X===2&&"Authorizing Demo Payment of ₹"+C.price+"...",X===3&&"Payment Authorized Successfully!"]}),t.jsxs("p",{style:{color:"var(--color-text-muted)",fontSize:"0.875rem",maxWidth:"380px",margin:0},children:[X===1&&"Secure 256-bit sandbox handshake in progress...",X===2&&"Simulating bank OTP verification & clearing...",X===3&&"Finalizing laboratory appointment reservation..."]}),t.jsxs("div",{style:{marginTop:"1.5rem",display:"flex",gap:"8px",alignItems:"center"},children:[t.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:X>=1?"var(--color-primary)":"#CBD5E1"}}),t.jsx("div",{style:{width:"20px",height:"2px",background:X>=2?"var(--color-primary)":"#CBD5E1"}}),t.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:X>=2?"var(--color-primary)":"#CBD5E1"}}),t.jsx("div",{style:{width:"20px",height:"2px",background:X>=3?"var(--color-primary)":"#CBD5E1"}}),t.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:X===3?"#16A34A":"#CBD5E1"}})]})]})]})})},z0=[{name:"Complete Blood Count (CBC)",code:"CBC",price:180,query:"CBC"},{name:"HbA1c Glycated Hemoglobin",code:"HBA1C",price:450,query:"HbA1c"},{name:"Thyroid Profile (T3, T4, TSH)",code:"THYROID",price:420,query:"Thyroid"},{name:"Lipid Profile Comprehensive",code:"LIPID",price:550,query:"Lipid"},{name:"Fasting Blood Sugar (FBS)",code:"FBS",price:80,query:"Sugar"}],xl=[{id:"mhc",title:"Comprehensive Master Health Checkup",tagline:"Complete 68-Parameter Baseline Screening",parameters:"68 Parameters",price:1999,mrp:3800,discount:"47% OFF",highlights:["Complete Blood Count","HbA1c HPLC","Lipid Profile","Liver & Kidney Panels","12-Lead Digital ECG"],image:"/images/hero-lab.jpg",badge:"MOST POPULAR",packageData:{_id:"pkg_mhc_01",name:"Comprehensive Master Health Checkup",price:1999,includedTests:["Complete Blood Count","HbA1c HPLC","Lipid Profile","Liver & Kidney Panels","12-Lead Digital ECG"]}},{id:"senior",title:"Senior Citizen Complete Profile",tagline:"Specialized Gerontological & Bone Health Panel",parameters:"45 Parameters",price:1599,mrp:2900,discount:"45% OFF",highlights:["CBC & ESR","Electrolytes (Na, K)","Calcium & Uric Acid","Renal Function","Resting ECG"],image:"/images/lab-microscope.jpg",badge:"SENIOR WELLNESS",packageData:{_id:"pkg_snr_03",name:"Senior Citizen Complete Profile",price:1599,includedTests:["CBC & ESR","Electrolytes","Calcium & Uric Acid","Renal Function","Resting ECG"]}},{id:"diabetic",title:"Comprehensive Diabetic Care Package",tagline:"Targeted Glycemic Control & Organ Monitoring",parameters:"32 Parameters",price:1299,mrp:2300,discount:"43% OFF",highlights:["FBS & PPBS","HbA1c HPLC Gold Standard","Serum Creatinine & eGFR","Lipid Profile Fractions"],image:"/images/diabetic-cardiac.jpg",badge:"CHRONIC CARE",packageData:{_id:"pkg_dia_02",name:"Comprehensive Diabetic Care Package",price:1299,includedTests:["FBS & PPBS","HbA1c HPLC","Serum Creatinine","Lipid Profile Fractions"]}}],T0=[{label:"Routine Full Body Check",icon:co,target:"package",packageId:"mhc"},{label:"Diabetes & Blood Sugar",icon:Fa,target:"package",packageId:"diabetic"},{label:"Heart & Cholesterol",icon:Bl,target:"query",query:"Lipid"},{label:"Joints & Senior Health",icon:mo,target:"package",packageId:"senior"},{label:"Tiredness & Weakness",icon:fo,target:"query",query:"CBC"}],hp=["Thillai Nagar","Cantonment","KK Nagar","Srirangam","Woraiyur","Tennur","TVS Tollgate","Palakkarai"],_0=({onOpenBooking:a})=>{const o=Lt(),i=k.useRef(null),[c,u]=k.useState(""),[p,m]=k.useState([]),[f,g]=k.useState([]),[b,x]=k.useState(!1),[y,N]=k.useState("search"),[O,B]=k.useState(0),[C,A]=k.useState(hp[0]),[z,L]=k.useState("");k.useEffect(()=>{(async()=>{try{const X=await ye.get("/tests?active=true");X.data&&X.data.success&&m(X.data.data)}catch(X){console.error("Error fetching catalog:",X)}})()},[]),k.useEffect(()=>{if(c.trim().length>=2){const V=c.toLowerCase().trim(),X=p.filter(K=>K.name.toLowerCase().includes(V)||K.code.toLowerCase().includes(V)||K.category.toLowerCase().includes(V)).slice(0,6);g(X),x(X.length>0)}else g([]),x(!1)},[c,p]),k.useEffect(()=>{const V=X=>{i.current&&!i.current.contains(X.target)&&x(!1)};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[]);const U=V=>{V&&V.preventDefault(),x(!1),c.trim()?o(`/tests?q=${encodeURIComponent(c.trim())}`):o("/tests")},F=V=>{x(!1),a?a({_id:V._id,name:V.name,price:V.price,type:"test"}):o(`/tests?q=${encodeURIComponent(V.name)}`)},q=V=>{if(V.target==="package"){const X=xl.find(K=>K.id===V.packageId);X&&a?a(X.packageData):o("/packages")}else o(`/tests?q=${encodeURIComponent(V.query)}`)},I=V=>{V.preventDefault(),z.trim()?o(`/check-status?ref=${encodeURIComponent(z.trim().toUpperCase())}`):o("/check-status")},j=xl[O];return t.jsxs("section",{className:"nextgen-hero",children:[t.jsx("div",{className:"hero-ambient-glow glow-top-left"}),t.jsx("div",{className:"hero-ambient-glow glow-bottom-right"}),t.jsx("div",{className:"hero-grid-pattern"}),t.jsxs("div",{className:"container hero-inner-container",children:[t.jsxs("div",{className:"hero-live-announcement",children:[t.jsxs("div",{className:"announcement-beacon",children:[t.jsx("span",{className:"beacon-pulse"}),t.jsx("span",{className:"beacon-dot"})]}),t.jsxs("span",{className:"announcement-text",children:[t.jsx("strong",{children:"Trichy Lab Open Today:"})," 6:30 AM – 9:00 PM • Free Home Sample Pickup Active"]}),t.jsx("span",{className:"announcement-divider",children:"•"}),t.jsxs("a",{href:"tel:+919443100000",className:"announcement-hotline",children:[t.jsx(bm,{size:13}),t.jsx("span",{children:"+91 94431 00000"})]})]}),t.jsxs("div",{className:"hero-main-layout",children:[t.jsxs("div",{className:"hero-primary-col",children:[t.jsxs("div",{className:"hero-badge-pill",children:[t.jsx(h0,{size:14,className:"badge-sparkle"}),t.jsx("span",{children:"Advanced Diagnostics & Research • Trichy"})]}),t.jsxs("h1",{className:"hero-headline",children:["Precision Diagnostics.",t.jsx("br",{}),t.jsx("span",{className:"gradient-highlight-text",children:"Rapid Reports."})," Trusted Care."]}),t.jsx("p",{className:"hero-description",children:"Get accurate clinical testing powered by automated biochemistry, 5-part laser hematology, and verified doorstep phlebotomy across Tiruchirappalli. Reports delivered on WhatsApp in 2–4 hours."}),t.jsxs("div",{className:"hero-command-card",children:[t.jsxs("div",{className:"command-tabs-nav",children:[t.jsxs("button",{type:"button",onClick:()=>N("search"),className:`command-tab-btn ${y==="search"?"active":""}`,children:[t.jsx(Ar,{size:15}),t.jsx("span",{children:"Search Tests"})]}),t.jsxs("button",{type:"button",onClick:()=>N("packages"),className:`command-tab-btn ${y==="packages"?"active":""}`,children:[t.jsx(Ul,{size:15}),t.jsx("span",{children:"Health Packages"})]}),t.jsxs("button",{type:"button",onClick:()=>N("home"),className:`command-tab-btn ${y==="home"?"active":""}`,children:[t.jsx(or,{size:15}),t.jsx("span",{children:"Home Pickup"})]}),t.jsxs("button",{type:"button",onClick:()=>N("status"),className:`command-tab-btn ${y==="status"?"active":""}`,children:[t.jsx(to,{size:15}),t.jsx("span",{children:"Track Report"})]})]}),t.jsxs("div",{className:"command-tab-content",children:[y==="search"&&t.jsxs("div",{className:"tab-pane-search",ref:i,children:[t.jsxs("form",{onSubmit:U,className:"command-search-bar",children:[t.jsx(Ar,{size:18,className:"command-search-icon"}),t.jsx("input",{type:"text",value:c,onChange:V=>u(V.target.value),onFocus:()=>{f.length>0&&x(!0)},placeholder:"Search 100+ diagnostic tests (e.g. CBC, Thyroid, HbA1c, Vitamin D)...",className:"command-search-input"}),c&&t.jsx("button",{type:"button",onClick:()=>{u(""),x(!1)},className:"command-clear-btn",children:t.jsx(Vt,{size:15})}),t.jsxs("button",{type:"submit",className:"command-action-btn",children:[t.jsx("span",{children:"Find Test"}),t.jsx(Rt,{size:15})]})]}),b&&t.jsxs("div",{className:"command-suggestions-menu",children:[t.jsx("div",{className:"suggestions-header",children:"Matching Diagnostic Tests"}),f.map(V=>t.jsxs("div",{onClick:()=>F(V),className:"suggestion-row",children:[t.jsxs("div",{className:"suggestion-main",children:[t.jsx("span",{className:"sug-name",children:V.name}),t.jsxs("span",{className:"sug-cat",children:[V.category," • Code: ",V.code]})]}),t.jsxs("div",{className:"suggestion-right",children:[t.jsxs("span",{className:"sug-price",children:["₹",V.price]}),t.jsx("span",{className:"sug-book-tag",children:"Book Now"})]})]},V._id))]}),t.jsxs("div",{className:"command-chips-row",children:[t.jsx("span",{className:"chips-title",children:"Frequent:"}),z0.map((V,X)=>t.jsxs("button",{type:"button",onClick:()=>{a?a({name:V.name,price:V.price,type:"test"}):o(`/tests?q=${encodeURIComponent(V.query)}`)},className:"command-pill-chip",children:[t.jsx("span",{children:V.code}),t.jsxs("span",{className:"pill-price",children:["₹",V.price]})]},X))]})]}),y==="packages"&&t.jsxs("div",{className:"tab-pane-packages",children:[t.jsx("div",{className:"packages-mini-selector",children:xl.map((V,X)=>t.jsxs("button",{type:"button",onClick:()=>B(X),className:`pkg-mini-btn ${O===X?"active":""}`,children:[t.jsx("span",{className:"pkg-mini-name",children:V.title.split(" ")[0]}),t.jsxs("span",{className:"pkg-mini-price",children:["₹",V.price]})]},V.id))}),t.jsxs("div",{className:"selected-pkg-preview",children:[t.jsxs("div",{className:"spp-info",children:[t.jsx("span",{className:"spp-badge",children:j.badge}),t.jsx("h4",{className:"spp-title",children:j.title}),t.jsxs("p",{className:"spp-desc",children:[j.tagline," (",j.parameters,")"]})]}),t.jsxs("div",{className:"spp-pricing-action",children:[t.jsxs("div",{className:"spp-price-box",children:[t.jsxs("span",{className:"spp-current-price",children:["₹",j.price]}),t.jsxs("span",{className:"spp-mrp",children:["₹",j.mrp]}),t.jsx("span",{className:"spp-discount",children:j.discount})]}),t.jsxs("button",{type:"button",onClick:()=>a?a(j.packageData):o("/book"),className:"btn spp-book-btn",children:[t.jsx(Ft,{size:15}),t.jsx("span",{children:"Book Checkup"})]})]})]})]}),y==="home"&&t.jsx("div",{className:"tab-pane-home",children:t.jsxs("div",{className:"home-quick-form",children:[t.jsxs("div",{className:"hq-field",children:[t.jsx("label",{className:"hq-label",children:"Your Locality in Trichy:"}),t.jsx("select",{value:C,onChange:V=>A(V.target.value),className:"hq-select",children:hp.map(V=>t.jsx("option",{value:V,children:V},V))})]}),t.jsxs("div",{className:"hq-details",children:[t.jsx("span",{className:"hq-perk",children:"✓ 6:30 AM to 12:00 PM Daily"}),t.jsx("span",{className:"hq-perk",children:"✓ Temperature-Controlled Box"}),t.jsx("span",{className:"hq-perk",children:"✓ Certified Phlebotomist"})]}),t.jsxs("button",{type:"button",onClick:()=>o("/home-collection"),className:"btn hq-action-btn",children:[t.jsx(or,{size:16}),t.jsxs("span",{children:["Book Pickup in ",C]}),t.jsx(Rt,{size:15})]})]})}),y==="status"&&t.jsxs("div",{className:"tab-pane-status",children:[t.jsxs("form",{onSubmit:I,className:"status-quick-form",children:[t.jsxs("div",{className:"sq-input-wrap",children:[t.jsx(to,{size:18,className:"sq-icon"}),t.jsx("input",{type:"text",value:z,onChange:V=>L(V.target.value),placeholder:"Enter Booking Reference (e.g. DDC-2026-10821)...",className:"sq-input"})]}),t.jsxs("button",{type:"submit",className:"btn sq-btn",children:[t.jsx("span",{children:"Check Status"}),t.jsx(Rt,{size:15})]})]}),t.jsx("p",{className:"sq-hint",children:"Track sample collection, lab testing stage, and download verified digital PDF reports."})]})]})]}),t.jsxs("div",{className:"hero-symptoms-bar",children:[t.jsx("span",{className:"symptoms-bar-label",children:"Explore by Condition:"}),t.jsx("div",{className:"symptoms-chips-list",children:T0.map((V,X)=>{const K=V.icon;return t.jsxs("button",{type:"button",onClick:()=>q(V),className:"symptom-chip-btn",children:[t.jsx(K,{size:14,className:"symptom-icon"}),t.jsx("span",{children:V.label})]},X)})})]})]}),t.jsxs("div",{className:"hero-deck-col",children:[t.jsxs("div",{className:"hero-deck-card",children:[t.jsxs("div",{className:"deck-media-wrap",children:[t.jsx("img",{src:j.image,alt:j.title,className:"deck-media-img",loading:"eager"}),t.jsx("div",{className:"deck-media-gradient"}),t.jsxs("div",{className:"deck-floating-tag tag-top-left",children:[t.jsx(Dt,{size:14}),t.jsx("span",{children:"NABL Quality Aligned"})]}),t.jsxs("div",{className:"deck-floating-tag tag-top-right",children:[t.jsx(fo,{size:13}),t.jsx("span",{children:"Same-Day WhatsApp PDF"})]}),t.jsxs("div",{className:"deck-media-bottom-badge",children:[t.jsx("span",{className:"dmb-badge",children:j.badge}),t.jsxs("span",{className:"dmb-count",children:[j.parameters," Included"]})]})]}),t.jsxs("div",{className:"deck-body",children:[t.jsxs("div",{className:"deck-header-row",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"deck-title",children:j.title}),t.jsx("p",{className:"deck-subtitle",children:j.tagline})]}),t.jsx("div",{className:"deck-save-badge",children:t.jsx("span",{children:j.discount})})]}),t.jsxs("div",{className:"deck-inclusions-card",children:[t.jsx("span",{className:"dic-label",children:"Core Clinical Parameters:"}),t.jsx("div",{className:"dic-grid",children:j.highlights.map((V,X)=>t.jsxs("div",{className:"dic-item",children:[t.jsx(lt,{size:14,className:"dic-check-icon"}),t.jsx("span",{children:V})]},X))})]}),t.jsxs("div",{className:"deck-footer-row",children:[t.jsxs("div",{className:"deck-pricing",children:[t.jsxs("div",{className:"deck-price-main",children:["₹",j.price.toLocaleString()]}),t.jsxs("div",{className:"deck-price-mrp",children:["MRP ₹",j.mrp.toLocaleString()]})]}),t.jsxs("div",{className:"deck-action-buttons",children:[t.jsxs("button",{type:"button",onClick:()=>a?a(j.packageData):o("/book"),className:"btn deck-book-btn",children:[t.jsx(Ft,{size:16}),t.jsx("span",{children:"Book Online Now"})]}),t.jsxs("button",{type:"button",onClick:()=>o("/packages"),className:"btn deck-details-btn",title:"View all health packages",children:[t.jsx("span",{children:"All Packages"}),t.jsx(Je,{size:15})]})]})]}),t.jsxs("div",{className:"deck-sub-callout",children:[t.jsxs("div",{className:"dsc-left",children:[t.jsx(or,{size:16,className:"dsc-icon"}),t.jsx("span",{children:"Free sample collection available across Trichy for this package."})]}),t.jsx("button",{type:"button",onClick:()=>o("/home-collection"),className:"dsc-link",children:"Request Pickup →"})]})]})]}),t.jsxs("div",{className:"hero-metrics-strip",children:[t.jsxs("div",{className:"metric-cell",children:[t.jsx("span",{className:"metric-number",children:"15,000+"}),t.jsx("span",{className:"metric-label",children:"Patients Served"})]}),t.jsx("div",{className:"metric-cell-divider"}),t.jsxs("div",{className:"metric-cell",children:[t.jsx("span",{className:"metric-number",children:"2–4 Hrs"}),t.jsx("span",{className:"metric-label",children:"Report Turnaround"})]}),t.jsx("div",{className:"metric-cell-divider"}),t.jsxs("div",{className:"metric-cell",children:[t.jsx("span",{className:"metric-number",children:"99.8%"}),t.jsx("span",{className:"metric-label",children:"Analytical Precision"})]}),t.jsx("div",{className:"metric-cell-divider"}),t.jsxs("div",{className:"metric-cell",children:[t.jsx("span",{className:"metric-number",children:"4.9 ★"}),t.jsx("span",{className:"metric-label",children:"Google Rating"})]})]})]})]}),t.jsxs("div",{className:"hero-trust-bar",children:[t.jsxs("div",{className:"trust-pillar",children:[t.jsx("div",{className:"pillar-icon-box",children:t.jsx(Dt,{size:20})}),t.jsxs("div",{className:"pillar-text",children:[t.jsx("strong",{children:"Quality Calibrated"}),t.jsx("span",{children:"Daily 2-Level Control & QC Run"})]})]}),t.jsxs("div",{className:"trust-pillar",children:[t.jsx("div",{className:"pillar-icon-box",children:t.jsx(co,{size:20})}),t.jsxs("div",{className:"pillar-text",children:[t.jsx("strong",{children:"Random-Access Analyzers"}),t.jsx("span",{children:"Biochemistry & Laser Flow Cytometry"})]})]}),t.jsxs("div",{className:"trust-pillar",children:[t.jsx("div",{className:"pillar-icon-box",children:t.jsx(or,{size:20})}),t.jsxs("div",{className:"pillar-text",children:[t.jsx("strong",{children:"Cold-Chain Phlebotomy"}),t.jsx("span",{children:"Monitored Doorstep Sample Transport"})]})]}),t.jsxs("div",{className:"trust-pillar",children:[t.jsx("div",{className:"pillar-icon-box",children:t.jsx(mo,{size:20})}),t.jsxs("div",{className:"pillar-text",children:[t.jsx("strong",{children:"Specialist Pathologists"}),t.jsx("span",{children:"Doctor-Verified Digital Reports"})]})]})]})]}),t.jsx("style",{children:`
        /* NextGen Hero Container & Background Styling */
        .nextgen-hero {
          position: relative;
          background: linear-gradient(135deg, #F8FAFD 0%, #F1F6FC 40%, #E8F2FA 100%);
          padding: 2.25rem 0 3rem;
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
        }

        .hero-ambient-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .glow-top-left {
          top: -100px;
          left: -100px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%);
        }
        .glow-bottom-right {
          bottom: -150px;
          right: -100px;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(7, 135, 124, 0.14) 0%, transparent 70%);
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(11, 66, 111, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 66, 111, 0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner-container {
          position: relative;
          z-index: 1;
        }

        /* Top Announcement Notification Bar */
        .hero-live-announcement {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(14, 165, 233, 0.25);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          color: var(--color-text-main);
          box-shadow: 0 2px 8px rgba(11, 66, 111, 0.04);
          margin-bottom: 1.75rem;
        }
        .announcement-beacon {
          position: relative;
          width: 8px;
          height: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .beacon-pulse {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #10B981;
          opacity: 0.4;
          animation: pulseBeacon 2s infinite ease-out;
        }
        .beacon-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
        }
        @keyframes pulseBeacon {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .announcement-divider {
          color: #CBD5E1;
        }
        .announcement-hotline {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--color-primary);
          font-weight: 700;
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .announcement-hotline:hover {
          color: var(--color-primary-dark);
        }

        /* Main Split Grid */
        .hero-main-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 2.75rem;
          align-items: flex-start;
          margin-bottom: 2.5rem;
        }

        /* Left Primary Column */
        .hero-primary-col {
          display: flex;
          flex-direction: column;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          background: #E6F7F5;
          border: 1px solid #BCE5DF;
          color: #07877C;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          margin-bottom: 1.15rem;
        }
        .badge-sparkle {
          color: #07877C;
        }

        .hero-headline {
          font-size: 3.25rem;
          font-weight: 800;
          color: #0B426F;
          line-height: 1.12;
          letter-spacing: -0.025em;
          margin-bottom: 1.15rem;
        }
        .gradient-highlight-text {
          background: linear-gradient(135deg, #0284C7 0%, #07877C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 1.75rem;
        }

        /* Interactive Command Card */
        .hero-command-card {
          background: #FFFFFF;
          border: 1.5px solid #CBD5E1;
          border-radius: 16px;
          box-shadow: 0 10px 30px -8px rgba(11, 66, 111, 0.08), 0 4px 12px -2px rgba(11, 66, 111, 0.04);
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        /* Command Tabs Nav */
        .command-tabs-nav {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
        }
        .command-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 10px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: #64748B;
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .command-tab-btn:hover {
          color: var(--color-primary);
          background: rgba(255, 255, 255, 0.7);
        }
        .command-tab-btn.active {
          color: var(--color-primary);
          background: #FFFFFF;
          border-bottom-color: var(--color-primary);
          font-weight: 700;
        }

        /* Command Tab Content Container */
        .command-tab-content {
          padding: 1.25rem 1.25rem 1rem;
        }

        /* Tab 1: Search Form */
        .tab-pane-search {
          position: relative;
        }
        .command-search-bar {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1.5px solid #CBD5E1;
          border-radius: 10px;
          padding: 4px 6px 4px 14px;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .command-search-bar:focus-within {
          background: #FFFFFF;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(11, 66, 111, 0.1);
        }
        .command-search-icon {
          color: #64748B;
          margin-right: 8px;
          flex-shrink: 0;
        }
        .command-search-input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.9375rem;
          color: var(--color-text-main);
        }
        .command-search-input::placeholder {
          color: #94A3B8;
        }
        .command-clear-btn {
          background: none;
          border: none;
          color: #94A3B8;
          padding: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          margin-right: 6px;
        }
        .command-action-btn {
          background: var(--color-primary);
          color: #FFFFFF;
          border: none;
          padding: 9px 18px;
          border-radius: 7px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          white-space: nowrap;
          transition: background var(--transition-fast);
        }
        .command-action-btn:hover {
          background: var(--color-primary-dark);
        }

        /* Suggestions Flyout */
        .command-suggestions-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          box-shadow: 0 12px 28px rgba(11, 66, 111, 0.15);
          z-index: 50;
          overflow: hidden;
        }
        .suggestions-header {
          padding: 8px 12px;
          background: #F8FAFC;
          font-size: 0.725rem;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
          border-bottom: 1px solid #E2E8F0;
        }
        .suggestion-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          cursor: pointer;
          border-bottom: 1px solid #F1F5F9;
          transition: background var(--transition-fast);
        }
        .suggestion-row:last-child {
          border-bottom: none;
        }
        .suggestion-row:hover {
          background: var(--color-primary-light);
        }
        .suggestion-main {
          display: flex;
          flex-direction: column;
        }
        .sug-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .sug-cat {
          font-size: 0.75rem;
          color: #64748B;
        }
        .suggestion-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sug-price {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9rem;
        }
        .sug-book-tag {
          font-size: 0.725rem;
          font-weight: 700;
          background: #E0F2FE;
          color: #0284C7;
          padding: 3px 8px;
          border-radius: 4px;
        }

        /* Chips */
        .command-chips-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }
        .chips-title {
          font-size: 0.775rem;
          font-weight: 600;
          color: #64748B;
        }
        .command-pill-chip {
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          border-radius: var(--radius-full);
          padding: 3px 10px;
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--color-primary);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all var(--transition-fast);
        }
        .command-pill-chip:hover {
          background: #E0F2FE;
          border-color: var(--color-primary);
        }
        .pill-price {
          color: #059669;
          font-weight: 700;
        }

        /* Tab 2: Packages Tab */
        .packages-mini-selector {
          display: flex;
          gap: 8px;
          margin-bottom: 10px;
        }
        .pkg-mini-btn {
          flex: 1;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 8px;
          padding: 7px 8px;
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 2px;
          transition: all var(--transition-fast);
        }
        .pkg-mini-btn.active {
          background: #E0F2FE;
          border-color: var(--color-primary);
        }
        .pkg-mini-name {
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .pkg-mini-price {
          font-size: 0.8125rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .selected-pkg-preview {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #F1F5F9;
          padding: 10px 14px;
          border-radius: 8px;
          gap: 12px;
        }
        .spp-badge {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 700;
          background: #0284C7;
          color: #FFFFFF;
          padding: 2px 7px;
          border-radius: 4px;
          margin-bottom: 3px;
        }
        .spp-title {
          font-size: 0.925rem;
          font-weight: 700;
          color: #0B426F;
          margin: 0 0 2px;
        }
        .spp-desc {
          font-size: 0.75rem;
          color: #64748B;
          margin: 0;
        }
        .spp-pricing-action {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .spp-price-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .spp-current-price {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .spp-mrp {
          font-size: 0.75rem;
          color: #94A3B8;
          text-decoration: line-through;
        }
        .spp-discount {
          font-size: 0.7rem;
          color: #059669;
          font-weight: 700;
        }
        .spp-book-btn {
          background: var(--color-primary);
          color: #FFFFFF;
          padding: 8px 14px;
          border-radius: 7px;
          font-size: 0.8125rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          cursor: pointer;
        }
        .spp-book-btn:hover {
          background: var(--color-primary-dark);
        }

        /* Tab 3: Home Pickup */
        .home-quick-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hq-field {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hq-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          white-space: nowrap;
        }
        .hq-select {
          flex: 1;
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid #CBD5E1;
          font-size: 0.85rem;
          color: var(--color-text-main);
          background: #F8FAFC;
        }
        .hq-details {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .hq-perk {
          font-size: 0.75rem;
          color: #059669;
          font-weight: 600;
        }
        .hq-action-btn {
          background: #07877C;
          color: #FFFFFF;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .hq-action-btn:hover {
          background: #056960;
        }

        /* Tab 4: Status Quick */
        .status-quick-form {
          display: flex;
          gap: 8px;
        }
        .sq-input-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1.5px solid #CBD5E1;
          border-radius: 8px;
          padding: 4px 10px;
        }
        .sq-icon {
          color: #64748B;
          margin-right: 8px;
        }
        .sq-input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.875rem;
          text-transform: uppercase;
        }
        .sq-btn {
          background: var(--color-primary);
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .sq-btn:hover {
          background: var(--color-primary-dark);
        }
        .sq-hint {
          font-size: 0.75rem;
          color: #64748B;
          margin: 6px 0 0;
        }

        /* Symptoms Quick Recommender */
        .hero-symptoms-bar {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .symptoms-bar-label {
          font-size: 0.775rem;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .symptoms-chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .symptom-chip-btn {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: var(--radius-full);
          padding: 5px 12px;
          font-size: 0.775rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all var(--transition-fast);
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .symptom-chip-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background: var(--color-primary-light);
          transform: translateY(-1px);
        }
        .symptom-icon {
          color: #0284C7;
        }

        /* Right Column: Diagnostic Deck Card */
        .hero-deck-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .hero-deck-card {
          background: #FFFFFF;
          border-radius: 18px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 20px 45px -12px rgba(11, 66, 111, 0.12), 0 8px 16px -4px rgba(11, 66, 111, 0.04);
          overflow: hidden;
          transition: transform var(--transition-normal);
        }

        .deck-media-wrap {
          position: relative;
          height: 185px;
          overflow: hidden;
        }
        .deck-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .deck-media-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(11, 66, 111, 0.25) 0%, rgba(6, 38, 65, 0.85) 100%);
        }
        .deck-floating-tag {
          position: absolute;
          top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(11, 66, 111, 0.8);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .tag-top-left {
          left: 12px;
          color: #5EEAD4;
        }
        .tag-top-right {
          right: 12px;
          color: #FDE047;
        }

        .deck-media-bottom-badge {
          position: absolute;
          bottom: 12px;
          left: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dmb-badge {
          background: #0284C7;
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 4px;
          letter-spacing: 0.4px;
        }
        .dmb-count {
          color: #E2E8F0;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .deck-body {
          padding: 1.25rem 1.5rem 1.5rem;
        }

        .deck-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .deck-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0B426F;
          line-height: 1.25;
          margin: 0 0 3px;
        }
        .deck-subtitle {
          font-size: 0.8rem;
          color: #64748B;
          margin: 0;
        }
        .deck-save-badge {
          background: #DCFCE7;
          color: #15803D;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid #86EFAC;
          white-space: nowrap;
        }

        .deck-inclusions-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 10px 14px;
          margin-bottom: 1.15rem;
        }
        .dic-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #1E293B;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-bottom: 8px;
        }
        .dic-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 12px;
        }
        .dic-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #334155;
          font-weight: 500;
        }
        .dic-check-icon {
          color: #07877C;
          flex-shrink: 0;
        }

        .deck-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.85rem;
          gap: 12px;
        }
        .deck-pricing {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .deck-price-main {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0B426F;
        }
        .deck-price-mrp {
          font-size: 0.9rem;
          color: #94A3B8;
          text-decoration: line-through;
        }
        .deck-action-buttons {
          display: flex;
          gap: 6px;
        }
        .deck-book-btn {
          background: #0B426F;
          color: #FFFFFF;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .deck-book-btn:hover {
          background: #082F50;
        }
        .deck-details-btn {
          background: #F1F5F9;
          color: #0B426F;
          border: 1px solid #CBD5E1;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        .deck-details-btn:hover {
          background: #E2E8F0;
        }

        .deck-sub-callout {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 0.75rem;
        }
        .dsc-left {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #065F46;
          font-weight: 500;
        }
        .dsc-icon {
          color: #07877C;
          flex-shrink: 0;
        }
        .dsc-link {
          background: none;
          border: none;
          color: #07877C;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          padding: 0;
        }
        .dsc-link:hover {
          text-decoration: underline;
        }

        /* Metrics Strip Under Deck Card */
        .hero-metrics-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 18px;
          box-shadow: 0 4px 12px rgba(11, 66, 111, 0.04);
        }
        .metric-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .metric-number {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0B426F;
          line-height: 1.15;
        }
        .metric-label {
          font-size: 0.725rem;
          color: #64748B;
          font-weight: 500;
        }
        .metric-cell-divider {
          width: 1px;
          height: 24px;
          background: #E2E8F0;
        }

        /* Bottom Trust & Accreditation Assurance Bar */
        .hero-trust-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          padding-top: 1.75rem;
          border-top: 1px solid #E2E8F0;
        }
        .trust-pillar {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(4px);
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 14px;
        }
        .pillar-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #EFF6FF;
          color: #0B426F;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pillar-text {
          display: flex;
          flex-direction: column;
        }
        .pillar-text strong {
          font-size: 0.825rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.25;
        }
        .pillar-text span {
          font-size: 0.75rem;
          color: #64748B;
          line-height: 1.25;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .hero-main-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-headline {
            font-size: 2.75rem;
          }
          .hero-trust-bar {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .nextgen-hero {
            padding: 1.5rem 0 2rem;
          }
          .hero-live-announcement {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 8px 12px;
          }
          .announcement-divider {
            display: none;
          }
          .hero-headline {
            font-size: 2.15rem;
          }
          .command-tabs-nav {
            grid-template-columns: repeat(2, 1fr);
          }
          .command-search-bar {
            flex-direction: column;
            align-items: stretch;
            padding: 8px;
            gap: 8px;
          }
          .command-search-icon {
            display: none;
          }
          .command-action-btn {
            justify-content: center;
          }
          .dic-grid {
            grid-template-columns: 1fr;
          }
          .deck-footer-row {
            flex-direction: column;
            align-items: stretch;
          }
          .deck-action-buttons {
            flex-direction: column;
          }
          .hero-metrics-strip {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .metric-cell-divider {
            display: none;
          }
          .hero-trust-bar {
            grid-template-columns: 1fr;
          }
        }
      `})]})},A0=a=>{switch(a){case"Hematology":return t.jsx(Fa,{size:18,className:"test-cat-icon icon-blue"});case"Biochemistry":case"Diabetes Care":return t.jsx(co,{size:18,className:"test-cat-icon icon-teal"});case"Endocrinology":return t.jsx(fo,{size:18,className:"test-cat-icon icon-teal"});case"Cardiology":return t.jsx(Bl,{size:18,className:"test-cat-icon icon-blue"});default:return t.jsx(to,{size:18,className:"test-cat-icon icon-blue"})}},R0=({onSelectTest:a})=>{const[o,i]=k.useState([]),[c,u]=k.useState(!0),p=Lt();k.useEffect(()=>{(async()=>{try{const g=await ye.get("/tests?popular=true");g.data&&g.data.success&&i(g.data.data.slice(0,6))}catch(g){console.error("Error fetching popular tests:",g)}finally{u(!1)}})()},[]);const m=f=>{a?a(f):p("/book")};return t.jsxs("section",{className:"section popular-tests-section",children:[t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header-split",children:[t.jsxs("div",{children:[t.jsx("span",{className:"section-tag-eyebrow",children:"OUR TESTS"}),t.jsx("h2",{className:"section-main-heading",children:"Popular Diagnostic Tests"})]}),t.jsxs("button",{onClick:()=>p("/tests"),className:"section-header-link",children:[t.jsx("span",{children:"View All Tests"}),t.jsx(Rt,{size:16})]})]}),c?t.jsx("div",{className:"tests-loading-state",children:t.jsx("span",{children:"Loading popular diagnostic tests..."})}):t.jsx("div",{className:"popular-tests-grid",children:o.map(f=>t.jsxs("div",{className:"test-card",children:[t.jsxs("div",{className:"test-card-top",children:[t.jsxs("div",{className:"test-cat-pill",children:[A0(f.category),t.jsx("span",{children:f.category})]}),f.code&&t.jsx("span",{className:"test-code-badge",children:f.code})]}),t.jsx("h3",{className:"test-name",children:f.name}),t.jsx("p",{className:"test-desc",children:f.description}),t.jsxs("div",{className:"test-prep-box",children:[t.jsx(bt,{size:14,className:"prep-icon"}),t.jsx("span",{children:f.fastingRequired?`Fasting required (${f.fastingHours} hrs)`:"No fasting required"})]}),t.jsxs("div",{className:"test-footer",children:[t.jsxs("div",{className:"test-pricing",children:[t.jsxs("span",{className:"test-price",children:["₹",f.price]}),f.mrp&&f.mrp>f.price&&t.jsxs("span",{className:"test-mrp",children:["₹",f.mrp]})]}),t.jsxs("div",{className:"test-action-buttons",children:[t.jsxs("button",{type:"button",onClick:()=>p(`/tests?q=${encodeURIComponent(f.name)}`),className:"test-details-link",children:[t.jsx("span",{children:"Details"}),t.jsx(Rt,{size:13})]}),t.jsxs("button",{type:"button",onClick:()=>m(f),className:"btn btn-primary btn-sm test-book-btn",children:[t.jsx(Ft,{size:13}),t.jsx("span",{children:"Book Test"})]})]})]})]},f._id))}),t.jsx("div",{className:"tests-view-all",children:t.jsxs("button",{onClick:()=>p("/tests"),className:"btn btn-outline btn-lg",children:[t.jsx("span",{children:"Explore All Diagnostic Tests"}),t.jsx(Rt,{size:16})]})})]}),t.jsx("style",{children:`
        .popular-tests-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          padding: 3rem 0;
        }
        .section-header-split {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
        }
        .section-tag-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 4px;
        }
        .section-main-heading {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.2;
          margin: 0;
        }
        .section-header-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: gap var(--transition-fast), color var(--transition-fast);
        }
        .section-header-link:hover {
          color: var(--color-primary-dark);
          gap: 10px;
        }
        .popular-tests-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .test-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .test-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.2);
        }
        .test-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.85rem;
        }
        .test-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .test-cat-icon {
          flex-shrink: 0;
        }
        .icon-blue {
          color: var(--color-primary);
        }
        .icon-teal {
          color: var(--color-secondary);
        }
        .test-code-badge {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-bg);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-subtle);
        }
        .test-name {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }
        .test-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }
        .test-prep-box {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.775rem;
          color: var(--color-text-body);
          background: var(--color-bg);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          margin-bottom: 1.15rem;
          border: 1px solid var(--color-border-subtle);
        }
        .prep-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
        .test-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.85rem;
          border-top: 1px solid var(--color-border-subtle);
        }
        .test-pricing {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .test-price {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .test-mrp {
          font-size: 0.85rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .test-action-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .test-details-link {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 4px;
        }
        .test-details-link:hover {
          color: var(--color-primary);
        }
        .test-book-btn {
          white-space: nowrap;
        }
        .tests-loading-state {
          text-align: center;
          padding: 3rem 0;
          color: var(--color-text-muted);
        }
        .tests-view-all {
          text-align: center;
          margin-top: 2.5rem;
        }

        @media (max-width: 1024px) {
          .popular-tests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .popular-tests-grid {
            grid-template-columns: 1fr;
          }
          .test-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .test-action-buttons {
            width: 100%;
            justify-content: space-between;
          }
        }
      `})]})},F0=({onSelectPackage:a})=>{const[o,i]=k.useState([]),[c,u]=k.useState(!0),p=Lt();k.useEffect(()=>{(async()=>{try{const g=await ye.get("/packages");g.data&&g.data.success&&i(g.data.data.slice(0,3))}catch(g){console.error("Error fetching health packages:",g)}finally{u(!1)}})()},[]);const m=f=>{a?a({itemType:"package",itemId:f._id,itemName:f.name,price:f.price}):p("/book")};return t.jsxs("section",{className:"section section-alt packages-section",children:[t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Preventive Healthcare"}),t.jsx("h2",{className:"section-title",children:"Health Checkup Packages"}),t.jsx("p",{className:"section-desc",children:"Scientifically curated health screenings for every life stage with verified savings up to 47%. Doorstep sample pickup available across Trichy."})]}),c?t.jsx("div",{className:"packages-loading-state",children:t.jsx("span",{children:"Loading health checkup packages..."})}):t.jsx("div",{className:"packages-grid",children:o.map((f,g)=>{const b=g===0||f.code==="PKG-MHC-01";return t.jsxs("div",{className:`pkg-card ${b?"pkg-card-featured":""}`,children:[b&&t.jsxs("div",{className:"pkg-featured-badge",children:[t.jsx(x0,{size:12,fill:"#FFFFFF"}),t.jsx("span",{children:"Most Recommended"})]}),t.jsxs("div",{className:"pkg-top",children:[t.jsx("span",{className:"pkg-target-tag",children:f.targetAudience}),t.jsx("h3",{className:"pkg-name",children:f.name}),t.jsx("p",{className:"pkg-description",children:f.description})]}),t.jsxs("div",{className:"pkg-pricing-box",children:[t.jsxs("div",{className:"pkg-price-now",children:["₹",f.price]}),f.mrp&&f.mrp>f.price&&t.jsxs("div",{className:"pkg-price-mrp",children:["₹",f.mrp]}),t.jsx("div",{className:"pkg-tests-count",children:t.jsxs("span",{children:[f.totalTestsCount||f.includedTests.length," Tests"]})})]}),t.jsxs("div",{className:"pkg-tests-list",children:[t.jsx("span",{className:"pkg-list-title",children:"Key Investigations Included:"}),t.jsxs("ul",{className:"pkg-items",children:[f.includedTests.slice(0,5).map((x,y)=>t.jsxs("li",{children:[t.jsx(Ll,{size:14,className:"pkg-check-icon"}),t.jsx("span",{children:x})]},y)),f.includedTests.length>5&&t.jsxs("li",{className:"pkg-more-li",children:["+ ",f.includedTests.length-5," more investigations"]})]})]}),t.jsxs("div",{className:"pkg-prep-info",children:[t.jsx(bt,{size:14,className:"prep-icon"}),t.jsx("span",{children:f.fastingRequired?`Overnight fasting (${f.fastingHours} hrs) required`:"No fasting required"})]}),t.jsxs("div",{className:"pkg-card-actions",children:[t.jsxs("button",{type:"button",onClick:()=>m(f),className:"btn btn-primary pkg-book-btn",children:[t.jsx(Ft,{size:15}),t.jsx("span",{children:"Book Now"})]}),t.jsxs("button",{type:"button",onClick:()=>p("/packages"),className:"btn btn-outline pkg-details-btn",children:[t.jsx("span",{children:"Details"}),t.jsx(Rt,{size:14})]})]})]},f._id)})}),t.jsx("div",{className:"packages-view-all",children:t.jsxs("button",{onClick:()=>p("/packages"),className:"btn btn-outline btn-lg",children:[t.jsx("span",{children:"Explore All Health Checkup Packages"}),t.jsx(Rt,{size:16})]})})]}),t.jsx("style",{children:`
        .packages-section {
          background-color: var(--color-surface);
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: stretch;
        }
        .pkg-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .pkg-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .pkg-card-featured {
          border: 2px solid var(--color-primary);
          box-shadow: var(--shadow-md);
        }
        .pkg-featured-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .pkg-top {
          margin-bottom: 1.15rem;
        }
        .pkg-target-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .pkg-name {
          font-size: 1.25rem;
          color: var(--color-text-main);
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .pkg-description {
          font-size: 0.835rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        .pkg-pricing-box {
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 1.25rem;
          border: 1px solid var(--color-border-subtle);
        }
        .pkg-price-now {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .pkg-price-mrp {
          font-size: 0.9rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .pkg-tests-count {
          margin-left: auto;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-secondary);
          background: #ffffff;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .pkg-tests-list {
          flex: 1;
          margin-bottom: 1.25rem;
        }
        .pkg-list-title {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-text-main);
          display: block;
          margin-bottom: 6px;
        }
        .pkg-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pkg-items li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          color: var(--color-text-body);
        }
        .pkg-check-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
        .pkg-more-li {
          font-weight: 600;
          color: var(--color-primary);
          padding-left: 20px;
          font-size: 0.78rem;
        }
        .pkg-prep-info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.775rem;
          color: var(--color-text-muted);
          background: var(--color-bg);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
          border: 1px solid var(--color-border-subtle);
        }
        .pkg-card-actions {
          display: flex;
          gap: 8px;
        }
        .pkg-book-btn {
          flex: 1;
        }
        .pkg-details-btn {
          flex-shrink: 0;
        }
        .packages-loading-state {
          text-align: center;
          padding: 3rem 0;
          color: var(--color-text-muted);
        }
        .packages-view-all {
          text-align: center;
          margin-top: 2.5rem;
        }

        @media (max-width: 1024px) {
          .packages-grid {
            grid-template-columns: 1fr;
            max-width: 580px;
            margin: 0 auto;
          }
        }
      `})]})},D0=[{num:"1",title:"Select Tests & Request Pickup",desc:"Choose your individual diagnostic blood tests or health packages online or via WhatsApp."},{num:"2",title:"Choose Available Date & Time",desc:"Pick your preferred morning slot between 6:30 AM and 12:00 PM for fasting tests."},{num:"3",title:"Sterile Collection at Doorstep",desc:"Certified phlebotomists arrive with barcoded vacuum tubes, single-use needles, and cold-chain transport."}],L0=["Thillai Nagar","Cantonment","KK Nagar","Srirangam","Woraiyur","Tennur","TVS Tollgate","Palakkarai","Ponmalai","Kattur"],O0=({onOpenBooking:a})=>{const o=Lt(),i=()=>{a?a({bookingType:"home_collection"}):o("/home-collection")};return t.jsxs("section",{className:"section home-collection-section",children:[t.jsx("div",{className:"container",children:t.jsx("div",{className:"hc-banner",children:t.jsxs("div",{className:"hc-banner-grid",children:[t.jsxs("div",{className:"hc-banner-left",children:[t.jsx("span",{className:"section-subtitle hc-subtitle",children:"Doorstep Service"}),t.jsx("h2",{className:"section-title hc-title",children:"Home Sample Collection in Trichy"}),t.jsx("p",{className:"section-desc hc-desc",children:"Safe, convenient, and sterile sample pickup so you don't have to travel on an empty stomach."}),t.jsx("div",{className:"hc-steps-list",children:D0.map(c=>t.jsxs("div",{className:"hc-step-row",children:[t.jsx("div",{className:"hc-step-badge",children:c.num}),t.jsxs("div",{className:"hc-step-body",children:[t.jsx("h3",{className:"hc-step-title",children:c.title}),t.jsx("p",{className:"hc-step-desc",children:c.desc})]})]},c.num))}),t.jsxs("div",{className:"hc-info-strip",children:[t.jsxs("div",{className:"hc-coverage",children:[t.jsx(Tr,{size:16,className:"hc-strip-icon"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Serviceable Areas:"})," ",L0.join(", ")," & nearby Trichy areas."]})]}),t.jsxs("div",{className:"hc-pricing-note",children:[t.jsx(Dt,{size:16,className:"hc-strip-icon"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Pickup Charges:"})," Free collection for orders above ₹500 & senior citizens. Nominal ₹100 for single routine tests."]})]})]}),t.jsxs("div",{className:"hc-actions",children:[t.jsxs("button",{type:"button",onClick:i,className:"btn btn-secondary btn-lg",children:[t.jsx(or,{size:18}),t.jsx("span",{children:"Book Home Sample Collection"})]}),t.jsxs("a",{href:"https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Trichy,%20I%20would%20like%20to%20schedule%20a%20home%20sample%20pickup.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp btn-lg",children:[t.jsx(_r,{size:18}),t.jsx("span",{children:"WhatsApp Pickup Request"})]})]})]}),t.jsxs("div",{className:"hc-photo-card",children:[t.jsx("img",{src:"/images/home-collection.jpg",alt:"Doctor Diagnostics Certified Phlebotomist for Home Sample Collection",className:"hc-photo-img",loading:"lazy"}),t.jsxs("div",{className:"hc-photo-badge",children:[t.jsx(Dt,{size:16,className:"badge-shield-icon"}),t.jsx("span",{children:"Cold-Chain Insulated Kit & Sterile Equipment"})]})]})]})})}),t.jsx("style",{children:`
        .home-collection-section {
          background-color: var(--color-bg);
          padding: 3.5rem 0;
        }
        .hc-banner {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 2.5rem;
        }
        .hc-banner-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.85fr;
          gap: 2.5rem;
          align-items: center;
        }
        .hc-subtitle {
          margin-bottom: 0.35rem;
        }
        .hc-title {
          font-size: clamp(1.85rem, 2.5vw, 2.25rem);
          margin-bottom: 0.5rem;
        }
        .hc-desc {
          font-size: 0.95rem;
          margin-bottom: 1.75rem;
        }
        .hc-steps-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .hc-step-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .hc-step-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .hc-step-body {
          flex: 1;
        }
        .hc-step-title {
          font-size: 0.975rem;
          color: var(--color-text-main);
          margin-bottom: 2px;
        }
        .hc-step-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }
        .hc-info-strip {
          background: var(--color-secondary-light);
          border: 1px solid rgba(7, 135, 124, 0.2);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1.75rem;
        }
        .hc-coverage, .hc-pricing-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8125rem;
          color: var(--color-text-body);
        }
        .hc-strip-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .hc-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Photo Card */
        .hc-photo-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          height: 100%;
          min-height: 400px;
        }
        .hc-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hc-photo-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(16, 45, 70, 0.88);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .badge-shield-icon {
          color: #5EEAD4;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .hc-banner-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hc-photo-card {
            min-height: 280px;
            max-height: 340px;
          }
        }
        @media (max-width: 640px) {
          .hc-banner {
            padding: 1.5rem 1.25rem;
          }
          .hc-actions .btn {
            width: 100%;
          }
        }
      `})]})},M0=[{icon:t.jsx(Ol,{size:24,className:"advantage-icon icon-primary"}),title:"Automated Analytical Analyzers",desc:"Automated biochemistry and 5-part hematology systems minimize manual variability and deliver consistent clinical accuracy."},{icon:t.jsx(Jv,{size:24,className:"advantage-icon icon-secondary"}),title:"Barcode Sample Identification",desc:"Each vacutainer tube receives a unique barcode at the time of draw, preventing sample mix-ups throughout laboratory processing."},{icon:t.jsx(gm,{size:24,className:"advantage-icon icon-primary"}),title:"Internal Quality Controls",desc:"Daily two-level internal quality control runs alongside standard calibration benchmarks before processing patient specimens."},{icon:t.jsx(mo,{size:24,className:"advantage-icon icon-secondary"}),title:"Senior Medical Verification",desc:"Abnormal and critical clinical values receive mandatory microscopic review and sign-off by qualified diagnostic pathologists."},{icon:t.jsx(bt,{size:24,className:"advantage-icon icon-primary"}),title:"Rapid Digital Delivery",desc:"Routine blood profiles ready within hours, delivered securely in standardized PDF format directly to your phone and email."},{icon:t.jsx(Dt,{size:24,className:"advantage-icon icon-secondary"}),title:"Clear & Honest Pricing",desc:"Transparent pricing schedules with no hidden processing surcharges, serving families across Trichy with diagnostic integrity."}],B0=()=>t.jsxs("section",{className:"section why-choose-section",children:[t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Laboratory Standards"}),t.jsx("h2",{className:"section-title",children:"Why Choose Doctor Diagnostics Center?"}),t.jsx("p",{className:"section-desc",children:"Combining verified laboratory protocols, modern instrumentation, and patient-centered service in Tiruchirappalli."})]}),t.jsx("div",{className:"advantages-grid",children:M0.map((a,o)=>t.jsxs("div",{className:"advantage-card",children:[t.jsx("div",{className:"advantage-icon-wrapper",children:a.icon}),t.jsx("h3",{className:"advantage-title",children:a.title}),t.jsx("p",{className:"advantage-desc",children:a.desc})]},o))})]}),t.jsx("style",{children:`
        .why-choose-section {
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .advantage-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .advantage-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.2);
        }
        .advantage-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--color-bg);
          border: 1px solid var(--color-border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.15rem;
        }
        .icon-primary {
          color: var(--color-primary);
        }
        .icon-secondary {
          color: var(--color-secondary);
        }
        .advantage-title {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .advantage-desc {
          font-size: 0.835rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .advantages-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),I0=[{step:"01",icon:t.jsx(Ar,{size:22,className:"step-icon"}),title:"Choose Test or Package",desc:"Browse 14+ clinical tests or comprehensive health checkup packages online."},{step:"02",icon:t.jsx(Ft,{size:22,className:"step-icon"}),title:"Select Slot & Location",desc:"Book a walk-in visit to our Salai Road center or request home collection."},{step:"03",icon:t.jsx(Fa,{size:22,className:"step-icon"}),title:"Safe Sample Collection",desc:"Barcoded vacuum vacutainers and single-use needles ensure total sterility."},{step:"04",icon:t.jsx(Ol,{size:22,className:"step-icon"}),title:"Automated Lab Analysis",desc:"Processed on calibrated analyzers and validated by medical pathologists."},{step:"05",icon:t.jsx(Ev,{size:22,className:"step-icon"}),title:"Receive Digital Report",desc:"Fast digital delivery direct to your WhatsApp and email as a verified PDF."}],U0=()=>t.jsxs("section",{className:"section how-it-works-section",children:[t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Patient Journey"}),t.jsx("h2",{className:"section-title",children:"How It Works"}),t.jsx("p",{className:"section-desc",children:"Five clear, streamlined steps from initial booking to receiving your verified clinical report."})]}),t.jsx("div",{className:"journey-grid",children:I0.map((a,o)=>t.jsxs("div",{className:"journey-card",children:[t.jsx("div",{className:"journey-step-badge",children:a.step}),t.jsx("div",{className:"journey-icon-box",children:a.icon}),t.jsx("h3",{className:"journey-title",children:a.title}),t.jsx("p",{className:"journey-desc",children:a.desc})]},a.step))})]}),t.jsx("style",{children:`
        .how-it-works-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }
        .journey-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .journey-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.2);
        }
        .journey-step-badge {
          position: absolute;
          top: 10px;
          right: 12px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        .journey-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .step-icon {
          color: var(--color-primary);
        }
        .journey-title {
          font-size: 0.95rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }
        .journey-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .journey-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .journey-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),q0=[{q:"What are the fasting guidelines for diagnostic blood tests?",a:"Fasting Blood Sugar (FBS) requires 8 to 10 hours of overnight fasting. Lipid Profile requires 10 to 12 hours of strict fasting. Plain water is encouraged. Routine tests such as Complete Blood Count (CBC), HbA1c, and Thyroid Profile (T3, T4, TSH) do not require prior fasting."},{q:"How do I book a home sample collection in Trichy?",a:"You can book directly through our website by choosing your tests and preferred morning slot (6:30 AM to 12:00 PM), or by sending a WhatsApp message to +91 94431 52200 with your address. A certified phlebotomist will arrive with sterile equipment and cold-chain transport."},{q:"When and how will I receive my clinical test reports?",a:"Routine hematology, biochemistry, and glucose profiles are typically completed within 2 to 4 hours. You receive an automated SMS and WhatsApp alert with a secure downloadable PDF report signed off by a pathologist. Hard copies are also available at our Salai Road center."},{q:"Which localities in Trichy are covered for doorstep collection?",a:"We cover all major localities including Thillai Nagar, Cantonment, KK Nagar, Srirangam, Woraiyur, Tennur, TVS Tollgate, Palakkarai, Ponmalai, Crawford, and Kattur. Home sample collection is free for bookings above ₹500 and senior citizens; a nominal ₹100 fee applies for single routine tests."},{q:"What payment modes are accepted and what is the cancellation policy?",a:"We accept UPI (GPay, PhonePe, Paytm), cash, and debit/credit cards at our center and during home visits. You can cancel or reschedule your booking at no charge before the phlebotomist departs for your location."},{q:"Do I need a doctor’s prescription to book a health checkup package?",a:"No prescription is required for preventive health checkup packages or general wellness screenings. If your doctor has prescribed specific investigations, please present the prescription so our team can correlate tests accordingly."}],H0=()=>{const[a,o]=k.useState(0),i=c=>{o(a===c?null:c)};return t.jsxs("section",{className:"section faq-section",children:[t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Patient Support"}),t.jsx("h2",{className:"section-title",children:"Frequently Asked Questions"}),t.jsx("p",{className:"section-desc",children:"Essential information regarding sample collection, fasting preparation, and digital report turnaround."})]}),t.jsxs("div",{className:"faq-container",children:[t.jsx("div",{className:"faq-accordion",children:q0.map((c,u)=>{const p=a===u;return t.jsxs("div",{className:`faq-item ${p?"faq-item-open":""}`,children:[t.jsxs("button",{type:"button",onClick:()=>i(u),className:"faq-question-btn","aria-expanded":p,children:[t.jsx("span",{className:"faq-question-text",children:c.q}),t.jsx(ym,{size:18,className:`faq-chevron ${p?"faq-chevron-rotated":""}`})]}),p&&t.jsx("div",{className:"faq-answer-panel",children:t.jsx("p",{className:"faq-answer-text",children:c.a})})]},u)})}),t.jsxs("div",{className:"faq-support-box",children:[t.jsx(bv,{size:28,className:"support-box-icon"}),t.jsx("h3",{className:"support-box-title",children:"Have more questions about tests?"}),t.jsx("p",{className:"support-box-desc",children:"Our clinical desk is available Monday through Saturday from 6:30 AM to 9:00 PM to assist you."}),t.jsxs("div",{className:"support-box-actions",children:[t.jsxs("a",{href:"tel:+919443100000",className:"btn btn-primary btn-sm",children:[t.jsx(bm,{size:14}),t.jsx("span",{children:"Call Lab Desk"})]}),t.jsxs("a",{href:"https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Trichy,%20I%20have%20a%20query%20about%20a%20test.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp btn-sm",children:[t.jsx(_r,{size:14}),t.jsx("span",{children:"WhatsApp Query"})]})]})]})]})]}),t.jsx("style",{children:`
        .faq-section {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }
        .faq-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 2.5rem;
        }
        .faq-item {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item-open {
          border-color: var(--color-primary);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 1.25rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          gap: 12px;
        }
        .faq-question-text {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-main);
          line-height: 1.35;
        }
        .faq-chevron {
          color: var(--color-text-muted);
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .faq-chevron-rotated {
          transform: rotate(180deg);
          color: var(--color-primary);
        }
        .faq-answer-panel {
          padding: 0 1.25rem 1.15rem;
          border-top: 1px solid var(--color-border-subtle);
          background: var(--color-bg);
        }
        .faq-answer-text {
          font-size: 0.885rem;
          color: var(--color-text-body);
          line-height: 1.6;
          padding-top: 0.85rem;
        }
        .faq-support-box {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .support-box-icon {
          color: var(--color-secondary);
          margin-bottom: 0.75rem;
        }
        .support-box-title {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.35rem;
        }
        .support-box-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          max-width: 520px;
          margin-bottom: 1.25rem;
        }
        .support-box-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
      `})]})},$0=({onOpenBooking:a})=>t.jsxs("section",{className:"section location-section",children:[t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Center Location"}),t.jsx("h2",{className:"section-title",children:"Visit Our Thillai Nagar Center"}),t.jsx("p",{className:"section-desc",children:"Easily accessible diagnostic facility on Salai Road, Trichy with dedicated parking and hygienic sample cubicles."})]}),t.jsxs("div",{className:"location-grid",children:[t.jsxs("div",{className:"location-card",children:[t.jsx("h3",{className:"location-card-title",children:"Doctor Diagnostics Center"}),t.jsx("p",{className:"location-card-sub",children:"Main Laboratory & Diagnostic Facility"}),t.jsxs("div",{className:"loc-item",children:[t.jsx(Tr,{size:20,className:"loc-icon"}),t.jsxs("div",{children:[t.jsx("strong",{className:"loc-item-title",children:"Laboratory Address:"}),t.jsx("div",{className:"loc-item-detail",children:"No. 42, Salai Road, Near Thillai Nagar 1st Cross,"}),t.jsx("div",{className:"loc-item-detail",children:"Tiruchirappalli - 620018, Tamil Nadu, India"}),t.jsx("div",{className:"loc-landmark",children:"(Landmark: Opposite City Union Bank / Near Fort Station Junction)"})]})]}),t.jsxs("div",{className:"loc-item",children:[t.jsx(bt,{size:20,className:"loc-icon"}),t.jsxs("div",{children:[t.jsx("strong",{className:"loc-item-title",children:"Center Hours:"}),t.jsxs("div",{className:"loc-item-detail",children:["Monday to Saturday: ",t.jsx("strong",{children:"6:30 AM – 9:00 PM"})]}),t.jsxs("div",{className:"loc-item-detail",children:["Sunday: ",t.jsx("strong",{children:"7:00 AM – 2:00 PM"})]}),t.jsx("div",{className:"loc-hc-hours",children:"Home Sample Pickup: 6:30 AM – 12:00 PM (All 7 Days)"})]})]}),t.jsxs("div",{className:"loc-item",children:[t.jsx(uo,{size:20,className:"loc-icon"}),t.jsxs("div",{children:[t.jsx("strong",{className:"loc-item-title",children:"Telephone & Helplines:"}),t.jsxs("div",{className:"loc-item-detail",children:["Mobile / WhatsApp: ",t.jsx("a",{href:"tel:+919443100000",className:"loc-phone-link",children:"+91 94431 00000"})]}),t.jsx("div",{className:"loc-item-detail",children:"Landline: +91 431 2740000"})]})]}),t.jsxs("div",{className:"loc-item",children:[t.jsx(Il,{size:20,className:"loc-icon"}),t.jsxs("div",{children:[t.jsx("strong",{className:"loc-item-title",children:"Email Desk:"}),t.jsx("div",{className:"loc-item-detail",children:"care@doctordiagnostics.com"})]})]}),t.jsxs("div",{className:"loc-actions",children:[t.jsxs("a",{href:"https://maps.google.com/?q=Salai+Road+Thillai+Nagar+Trichy",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline loc-btn",children:[t.jsx(vm,{size:15}),t.jsx("span",{children:"Get Google Directions"}),t.jsx(Rn,{size:13})]}),t.jsxs("button",{type:"button",onClick:()=>a?a(null):null,className:"btn btn-primary loc-btn",children:[t.jsx(Ft,{size:15}),t.jsx("span",{children:"Book Center Visit"})]})]})]}),t.jsxs("div",{className:"map-card",children:[t.jsxs("div",{className:"map-header",children:[t.jsxs("div",{className:"map-header-left",children:[t.jsx(Tr,{size:16,className:"map-header-icon"}),t.jsx("span",{className:"map-header-title",children:"Salai Road Central Facility"})]}),t.jsx("span",{className:"badge badge-success",children:"Easy Road Access"})]}),t.jsx("div",{className:"map-frame-box",children:t.jsx("iframe",{title:"Doctor Diagnostics Center Location Trichy",src:"https://maps.google.com/maps?q=Salai+Road+Thillai+Nagar+Tiruchirappalli+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed",className:"map-iframe",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),t.jsxs("div",{className:"map-footer-notes",children:[t.jsxs("div",{className:"map-note",children:[t.jsx(Dt,{size:15,className:"map-note-icon"}),t.jsx("span",{children:"Wheelchair accessible ramp"})]}),t.jsxs("div",{className:"map-note",children:[t.jsx(Dt,{size:15,className:"map-note-icon"}),t.jsx("span",{children:"Dedicated two-wheeler & car parking"})]})]})]})]})]}),t.jsx("style",{children:`
        .location-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .location-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }
        .location-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }
        .location-card-title {
          font-size: 1.35rem;
          color: var(--color-text-main);
          margin-bottom: 2px;
        }
        .location-card-sub {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.75rem;
        }
        .loc-item {
          display: flex;
          gap: 12px;
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .loc-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .loc-item-title {
          display: block;
          color: var(--color-text-main);
          font-size: 0.85rem;
          margin-bottom: 2px;
        }
        .loc-item-detail {
          color: var(--color-text-body);
        }
        .loc-landmark {
          font-size: 0.775rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }
        .loc-hc-hours {
          font-size: 0.775rem;
          color: var(--color-secondary);
          font-weight: 600;
          margin-top: 2px;
        }
        .loc-phone-link {
          font-weight: 700;
          color: var(--color-primary);
        }
        .loc-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-subtle);
          flex-wrap: wrap;
        }
        .loc-btn {
          flex: 1;
        }
        .map-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .map-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1.25rem;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .map-header-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .map-header-icon {
          color: var(--color-primary);
        }
        .map-header-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-text-main);
        }
        .map-frame-box {
          flex: 1;
          background: #E2E8F0;
          min-height: 320px;
        }
        .map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .map-footer-notes {
          display: flex;
          justify-content: space-around;
          padding: 0.85rem 1rem;
          background: #ffffff;
          border-top: 1px solid var(--color-border);
          font-size: 0.775rem;
          color: var(--color-text-muted);
        }
        .map-note {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .map-note-icon {
          color: var(--color-secondary);
        }

        @media (max-width: 1024px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
          .map-frame-box {
            min-height: 280px;
          }
        }
      `})]}),W0=()=>{const[a,o]=k.useState(!1),[i,c]=k.useState(null),u=(p=null)=>{c(p),o(!0)};return t.jsxs("div",{className:"homepage-wrapper",children:[t.jsx(_0,{onOpenBooking:u}),t.jsx(R0,{onSelectTest:u}),t.jsx(F0,{onSelectPackage:u}),t.jsx(O0,{onOpenBooking:u}),t.jsx(B0,{}),t.jsx(U0,{}),t.jsx(H0,{}),t.jsx($0,{onOpenBooking:u}),t.jsx(Fn,{isOpen:a,onClose:()=>o(!1),preselectedItem:i})]})},V0=["All","Hematology","Biochemistry","Diabetes Care","Endocrinology","Cardiology","Radiology","Immunology","Clinical Pathology","Serology & Infectious"],Q0=()=>{const[a,o]=Og(),[i,c]=k.useState([]),[u,p]=k.useState(!0),[m,f]=k.useState(a.get("category")||"All"),[g,b]=k.useState(a.get("q")||""),[x,y]=k.useState("popular"),[N,O]=k.useState(!1),[B,C]=k.useState(null),[A,z]=k.useState(null);k.useEffect(()=>{(async()=>{p(!0);try{const I=await ye.get("/tests?active=true");I.data.success&&c(I.data.data)}catch(I){console.error("Error fetching tests catalog:",I)}finally{p(!1)}})()},[]),k.useEffect(()=>{const q=a.get("category");q&&q!==m&&f(q);const I=a.get("q");I!==null&&I!==g&&b(I)},[a]);const L=i.filter(q=>{const I=m==="All"||q.category.toLowerCase()===m.toLowerCase(),j=g===""||q.name.toLowerCase().includes(g.toLowerCase())||q.code.toLowerCase().includes(g.toLowerCase())||q.category.toLowerCase().includes(g.toLowerCase());return I&&j}).sort((q,I)=>x==="price-low"?q.price-I.price:x==="price-high"?I.price-q.price:x==="name"?q.name.localeCompare(I.name):(I.isPopular?1:0)-(q.isPopular?1:0)),U=q=>{C({...q,type:"test"}),O(!0)},F=q=>{f(q),q==="All"?a.delete("category"):a.set("category",q),o(a)};return t.jsxs("div",{className:"tests-page-wrapper",children:[t.jsx("section",{className:"page-header-banner",children:t.jsxs("div",{className:"container",children:[t.jsx("span",{className:"section-subtitle",children:"Diagnostic Catalog"}),t.jsx("h1",{className:"page-header-title",children:"Diagnostic Blood & Imaging Tests"}),t.jsx("p",{className:"page-header-desc",children:"Explore our comprehensive menu of clinical pathology, biochemistry, endocrine CLIA, cardiology ECG, and digital radiology tests. Transparent pricing and verified preparation guidelines."})]})}),t.jsx("section",{className:"section",style:{paddingTop:"2.5rem"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"catalog-controls",children:[t.jsxs("div",{className:"catalog-search-wrap",children:[t.jsx(Ar,{size:20,className:"search-icon"}),t.jsx("input",{type:"text",value:g,onChange:q=>b(q.target.value),placeholder:"Search test by name or code (e.g. CBC, Lipid, HbA1c, DDC-HEM-01)...",className:"catalog-search-input"}),g&&t.jsx("button",{onClick:()=>b(""),style:{background:"none",border:"none",cursor:"pointer",padding:"4px"},children:t.jsx(Vt,{size:16,color:"#94A3B8"})})]}),t.jsxs("div",{className:"catalog-sort-wrap",children:[t.jsx(rv,{size:16,color:"var(--color-primary)"}),t.jsxs("select",{value:x,onChange:q=>y(q.target.value),className:"sort-select",children:[t.jsx("option",{value:"popular",children:"Sort: Most Popular"}),t.jsx("option",{value:"price-low",children:"Price: Low to High"}),t.jsx("option",{value:"price-high",children:"Price: High to Low"}),t.jsx("option",{value:"name",children:"Name: A to Z"})]})]})]}),t.jsx("div",{className:"category-pills-bar",children:V0.map(q=>t.jsx("button",{type:"button",onClick:()=>F(q),className:`category-pill ${m.toLowerCase()===q.toLowerCase()?"active":""}`,children:q},q))}),t.jsxs("div",{className:"results-summary",children:[t.jsxs("span",{children:["Showing ",t.jsx("strong",{children:L.length})," investigations available in Trichy"]}),m!=="All"&&t.jsxs("span",{className:"active-filter-badge",children:["Category: ",m,t.jsx("button",{onClick:()=>F("All"),children:"×"})]})]}),u?t.jsx("div",{style:{textAlign:"center",padding:"4rem 0",color:"var(--color-text-muted)"},children:"Loading diagnostic test catalog..."}):L.length===0?t.jsxs("div",{className:"empty-catalog-state",children:[t.jsx(Pa,{size:44,color:"#94A3B8"}),t.jsxs("h3",{children:['No tests found matching "',g,'"']}),t.jsx("p",{children:"Try searching for common terms like CBC, Sugar, Thyroid, Urine, or clear filters."}),t.jsx("button",{onClick:()=>{b(""),f("All")},className:"btn btn-outline",children:"Clear All Filters"})]}):t.jsx("div",{className:"tests-grid",children:L.map(q=>t.jsxs("div",{className:"test-card",children:[t.jsxs("div",{className:"test-card-top",children:[t.jsx("div",{className:"test-code-badge",children:q.code}),t.jsx("span",{className:"test-cat-badge",children:q.category})]}),t.jsx("h3",{className:"test-name",children:q.name}),t.jsx("p",{className:"test-desc",children:q.description}),t.jsxs("div",{className:"test-meta-grid",children:[t.jsxs("div",{className:"test-meta-item",children:[t.jsx(Fa,{size:15,color:"var(--color-primary)"}),t.jsx("span",{children:q.sampleType})]}),t.jsxs("div",{className:"test-meta-item",children:[t.jsx(bt,{size:15,color:"var(--color-secondary)"}),t.jsxs("span",{children:["Report in ",q.tatHours," hrs"]})]})]}),q.fastingRequired&&t.jsxs("div",{className:"test-fasting-note",children:[t.jsx(Pa,{size:14}),t.jsxs("span",{children:[q.fastingHours," hrs overnight fasting required"]})]}),t.jsxs("div",{className:"test-price-row",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"price-val",children:["₹",q.price]}),q.mrp&&t.jsxs("span",{className:"mrp-val",children:["₹",q.mrp]})]}),t.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-text-muted)"},children:q.homeCollectionAvailable?"✓ Home Pickup":"Center Visit Only"})]}),t.jsxs("div",{className:"test-card-actions",children:[t.jsxs("button",{onClick:()=>z(q),className:"btn btn-outline btn-sm",style:{flex:1},children:[t.jsx(El,{size:15}),t.jsx("span",{children:"Preparation"})]}),t.jsxs("button",{onClick:()=>U(q),className:"btn btn-primary btn-sm",style:{flex:1.2},children:[t.jsx(Ft,{size:15}),t.jsx("span",{children:"Book Test"})]})]})]},q._id))})]})}),A&&t.jsx("div",{className:"modal-overlay",onClick:()=>z(null),children:t.jsxs("div",{className:"modal-content",onClick:q=>q.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{children:[t.jsx("span",{className:"badge badge-primary",children:A.code}),t.jsx("h3",{style:{marginTop:"4px",color:"var(--color-primary)"},children:A.name})]}),t.jsx("button",{onClick:()=>z(null),style:{background:"none",border:"none",cursor:"pointer"},children:t.jsx(Vt,{size:20})})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{style:{marginBottom:"1.25rem"},children:[t.jsx("h4",{style:{fontSize:"0.95rem",color:"var(--color-text-main)",marginBottom:"6px"},children:"Clinical Description"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.9rem",lineHeight:1.6},children:A.description})]}),t.jsxs("div",{style:{background:"var(--color-bg)",borderRadius:"8px",padding:"1rem",marginBottom:"1.25rem"},children:[t.jsxs("h4",{style:{fontSize:"0.95rem",color:"var(--color-primary)",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(El,{size:18})," Verified Patient Preparation Instructions"]}),t.jsx("p",{style:{color:"var(--color-text-body)",fontSize:"0.9rem",lineHeight:1.6},children:A.preparation||"No specific diet restrictions. Drink sufficient plain water."})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",fontSize:"0.85rem"},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Department:"})," ",A.category]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Specimen:"})," ",A.sampleType]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Reporting Time:"})," Within ",A.tatHours," Hours"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Standard Price:"})," ₹",A.price]})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{onClick:()=>z(null),className:"btn btn-outline btn-sm",children:"Close"}),t.jsx("button",{onClick:()=>{const q=A;z(null),U(q)},className:"btn btn-primary btn-sm",children:"Book This Test Now"})]})]})}),t.jsx(Fn,{isOpen:N,onClose:()=>O(!1),preselectedItem:B}),t.jsx("style",{children:`
        .page-header-banner {
          background: linear-gradient(135deg, #0B4778 0%, #07355B 100%);
          color: #ffffff;
          padding: 3.5rem 0 3rem;
          text-align: center;
        }
        .page-header-banner .section-subtitle {
          color: #5EEAD4;
        }
        .page-header-title {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }
        .page-header-desc {
          max-width: 680px;
          margin: 0 auto;
          color: #E2E8F0;
          font-size: 1.05rem;
        }
        .catalog-controls {
          display: flex;
          justify-content: space-between;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .catalog-search-wrap {
          flex: 1;
          min-width: 280px;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 8px 14px;
          box-shadow: var(--shadow-sm);
        }
        .catalog-search-input {
          flex: 1;
          border: none;
          outline: none;
          padding-left: 8px;
          font-size: 0.95rem;
          color: var(--color-text-main);
        }
        .catalog-sort-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 6px 14px;
        }
        .sort-select {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
        }
        .category-pills-bar {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 12px;
          margin-bottom: 1.5rem;
          scrollbar-width: thin;
        }
        .category-pill {
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-body);
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .category-pill:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .category-pill.active {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }
        .results-summary {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .active-filter-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-primary-light);
          color: var(--color-primary);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .active-filter-badge button {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          font-size: 1rem;
        }
        .tests-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .test-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-card);
          transition: all var(--transition-normal);
        }
        .test-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(11, 71, 120, 0.25);
        }
        .test-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .test-code-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 2px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }
        .test-cat-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-secondary);
        }
        .test-name {
          font-size: 1.15rem;
          color: var(--color-primary-dark);
          line-height: 1.35;
          margin-bottom: 0.5rem;
        }
        .test-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }
        .test-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--color-text-body);
          background: var(--color-bg);
          padding: 8px 10px;
          border-radius: 6px;
          margin-bottom: 0.75rem;
        }
        .test-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .test-fasting-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #B45309;
          background: #FEF3C7;
          padding: 4px 8px;
          border-radius: 4px;
          margin-bottom: 0.75rem;
        }
        .test-price-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
          margin-bottom: 1rem;
        }
        .price-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-primary);
          margin-right: 6px;
        }
        .mrp-val {
          font-size: 0.85rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .test-card-actions {
          display: flex;
          gap: 8px;
        }
        .empty-catalog-state {
          text-align: center;
          padding: 4rem 1rem;
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          max-width: 500px;
          margin: 0 auto;
        }
        .empty-catalog-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--color-text-main);
        }
        .empty-catalog-state p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 1024px) {
          .tests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .tests-grid {
            grid-template-columns: 1fr;
          }
          .page-header-title {
            font-size: 1.85rem;
          }
        }
      `})]})},K0=()=>{const[a,o]=k.useState([]),[i,c]=k.useState(!0),[u,p]=k.useState(!1),[m,f]=k.useState(null);k.useEffect(()=>{(async()=>{c(!0);try{const x=await ye.get("/packages?active=true");x.data.success&&o(x.data.data)}catch(x){console.error("Error fetching packages:",x)}finally{c(!1)}})()},[]);const g=b=>{f({...b,type:"package"}),p(!0)};return t.jsxs("div",{className:"packages-page-wrapper",children:[t.jsx("section",{className:"page-header-banner",children:t.jsxs("div",{className:"container",children:[t.jsx("span",{className:"section-subtitle",children:"Preventive Healthcare"}),t.jsx("h1",{className:"page-header-title",children:"Preventive Health Checkup Packages"}),t.jsx("p",{className:"page-header-desc",children:"Early detection is the cornerstone of effective healthcare. Our doctor-designed health packages evaluate your vital organs with discounts up to 47%. Free home sample collection across Trichy."})]})}),t.jsx("section",{className:"section",style:{paddingTop:"3rem"},children:t.jsx("div",{className:"container",children:i?t.jsx("div",{style:{textAlign:"center",padding:"4rem 0",color:"var(--color-text-muted)"},children:"Loading health packages..."}):t.jsx("div",{className:"all-packages-grid",children:a.map(b=>t.jsxs("div",{className:"package-detailed-card",children:[t.jsxs("div",{className:"pkg-card-top-bar",children:[t.jsx("span",{className:"pkg-target-tag",children:b.targetAudience}),b.discountPercentage>0&&t.jsxs("span",{className:"badge badge-success",children:["Save ",b.discountPercentage,"%"]})]}),t.jsx("h3",{className:"pkg-card-title",children:b.name}),t.jsx("p",{className:"pkg-card-desc",children:b.description}),t.jsxs("div",{className:"pkg-card-pricing",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"pkg-now-price",children:["₹",b.price]}),b.mrp&&t.jsxs("span",{className:"pkg-mrp-price",children:["MRP ₹",b.mrp]})]}),t.jsxs("div",{className:"pkg-tests-pill",children:[b.totalTestsCount||b.includedTests.length," Investigations Included"]})]}),t.jsxs("div",{className:"pkg-included-block",children:[t.jsx("h4",{className:"tests-block-title",children:"Included Diagnostic Tests & Panels:"}),t.jsx("div",{className:"tests-chips-list",children:b.includedTests.map((x,y)=>t.jsxs("div",{className:"test-chip-item",children:[t.jsx(Ll,{size:14,color:"var(--color-secondary)"}),t.jsx("span",{children:x})]},y))})]}),t.jsxs("div",{className:"pkg-prep-guidance",children:[t.jsx(bt,{size:16,color:"var(--color-secondary)",style:{flexShrink:0}}),t.jsxs("div",{children:[t.jsx("strong",{children:"Preparation Instructions:"})," ",b.preparation]})]}),t.jsx("div",{className:"pkg-card-cta",children:t.jsxs("button",{onClick:()=>g(b),className:"btn btn-primary btn-lg",style:{width:"100%"},children:[t.jsx(Ft,{size:18}),t.jsx("span",{children:"Book Health Package"})]})})]},b._id))})})}),t.jsx(Fn,{isOpen:u,onClose:()=>p(!1),preselectedItem:m}),t.jsx("style",{children:`
        .all-packages-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        .package-detailed-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
        }
        .package-detailed-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(11, 71, 120, 0.25);
        }
        .pkg-card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .pkg-target-tag {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .pkg-card-title {
          font-size: 1.5rem;
          color: var(--color-primary-dark);
          line-height: 1.3;
          margin-bottom: 0.6rem;
        }
        .pkg-card-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .pkg-card-pricing {
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .pkg-now-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-primary);
          margin-right: 10px;
        }
        .pkg-mrp-price {
          font-size: 1.05rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .pkg-tests-pill {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-secondary);
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid var(--color-border);
        }
        .pkg-included-block {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .tests-block-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
        }
        .tests-chips-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .test-chip-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--color-text-body);
        }
        .pkg-prep-guidance {
          background: #F8FAFC;
          border-left: 3px solid var(--color-secondary);
          padding: 10px 14px;
          border-radius: 4px;
          font-size: 0.825rem;
          color: var(--color-text-body);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .pkg-card-cta {
          margin-top: auto;
        }

        @media (max-width: 1024px) {
          .all-packages-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},G0=[{id:"biochemistry",name:"Biochemistry & Clinical Chemistry",icon:t.jsx(Ml,{size:32,color:"var(--color-primary)"}),headline:"High-Throughput Photometric & Enzymatic Analysis",desc:"Utilizing fully automated clinical chemistry analyzers with refrigerated reagent carousels to perform liver function panels, renal metrics, lipid fractions, uric acid, and serum electrolytes with strict double-level daily calibrators.",equipment:"Fully Automated Random Access Chemistry Analyzer",commonTests:["Lipid Profile Complete","Liver Function Test (LFT)","Renal Function Test (RFT)","Serum Electrolytes (Na+, K+, Cl-)","Serum Calcium & Uric Acid"],preparation:"8 to 12 hours overnight fasting recommended for lipid and metabolic profiles."},{id:"hematology",name:"Hematology & Hemogram Studies",icon:t.jsx(Fa,{size:32,color:"var(--color-secondary)"}),headline:"5-Part Differential Automated Hemograms",desc:"Equipped with multi-angle laser scatter flow cytometry to determine absolute neutrophil, lymphocyte, monocyte, eosinophil, and basophil counts alongside RBC indices, platelet volume, and automated Westergren ESR.",equipment:"5-Part Differential Laser Flow Cytometry Hematology Analyzer",commonTests:["Complete Blood Count (CBC)","ESR (Westergren)","Peripheral Blood Smear Examination","Absolute Eosinophil Count (AEC)","Platelet Count"],preparation:"No fasting required. Maintain routine daily hydration."},{id:"endocrinology",name:"Endocrinology & Chemiluminescence (CLIA)",icon:t.jsx(fo,{size:32,color:"var(--color-primary)"}),headline:"Ultrasensitive Hormone & Micronutrient Quantification",desc:"Chemiluminescent Microparticle Immunoassay (CLIA) offers supreme analytical sensitivity down to picogram levels for thyroid hormones (T3, T4, TSH), fertility biomarkers, 25-OH Vitamin D3, and Vitamin B12.",equipment:"Automated Chemiluminescence Immunoassay (CLIA) System",commonTests:["Thyroid Profile Total (T3, T4, TSH)","Free T3 & Free T4","Vitamin D3 (25-Hydroxy)","Vitamin B12 (Cobalamin)","Serum Ferritin"],preparation:"Morning samples preferred for thyroid assays prior to taking morning medication."},{id:"diabetes",name:"Diabetes & Glycemic Monitoring",icon:t.jsx(co,{size:32,color:"var(--color-secondary)"}),headline:"NGSP Certified Gold Standard HPLC Methodology",desc:"Ion-exchange High Performance Liquid Chromatography (HPLC) ensures interference-free HbA1c estimation regardless of hemoglobin variants, paired with enzymatic glucose hexokinase testing.",equipment:"High Performance Liquid Chromatography (HPLC) System",commonTests:["HbA1c Glycated Hemoglobin","Fasting Blood Sugar (FBS)","Post Prandial Blood Sugar (PPBS)","Estimated Average Glucose (eAG)","Urine Microalbumin/Creatinine"],preparation:"Fasting: 8-10 hours overnight fasting. PPBS: Draw sample exactly 2 hours after start of breakfast."},{id:"cardiology",name:"Cardiology (12-Lead Digital ECG)",icon:t.jsx(Bl,{size:32,color:"#DC2626"}),headline:"High-Precision Electrocardiography with Cardiologist Verification",desc:"Resting 12-lead digital electrocardiography capturing high-fidelity myocardial electrical waveforms, rhythm arrhythmias, conduction blocks, and ischemic changes with automated metric printout and verified review.",equipment:"12-Channel High-Resolution Digital ECG with Filter Compensation",commonTests:["12-Lead Resting Digital ECG","Cardiac Rhythm Evaluation","Pre-operative Cardiac Screen"],preparation:"Wear loose two-piece clothing. Available at center during all operating hours."},{id:"radiology",name:"Digital Radiography (X-Ray)",icon:t.jsx(e0,{size:32,color:"var(--color-primary)"}),headline:"Low-Dose High Frequency Digital Radiology",desc:"High-frequency digital radiography generating crystal-clear bone and chest images with up to 60% lower radiation exposure compared to conventional analog film systems.",equipment:"High Frequency Digital Radiography (DR) Flat Panel Detector",commonTests:["Digital Chest X-Ray PA View","Cervical & Lumbar Spine Views","Extremity & Joint Radiography","Paranasal Sinuses (PNS)"],preparation:"Remove metallic necklaces, body piercings, and metallic clothing around imaging area."},{id:"clinical-pathology",name:"Clinical Pathology & Urinalysis",icon:t.jsx(to,{size:32,color:"var(--color-secondary)"}),headline:"Standardized Automated Urine Chemistry & Microscopy",desc:"Complete physical, biochemical strip reflectance, and microscopic analysis of sediment to detect urinary tract infections, microscopic hematuria, casts, and crystalluria.",equipment:"Automated Urine Chemistry Reflectance Analyzer & Binocular Microscopy",commonTests:["Urine Routine & Microscopic","Urine Bile Salts & Bile Pigments","Stool Routine & Occult Blood"],preparation:"Clean-catch midstream morning urine sample collected in sterile container provided."},{id:"serology",name:"Serology & Infectious Screening",icon:t.jsx(d0,{size:32,color:"var(--color-primary)"}),headline:"Rapid Immunochromatographic & Serological Testing",desc:"Rapid and accurate screening for seasonal and tropical infections including Dengue, Typhoid, Malaria, and Hepatitis markers with stat reporting for febrile emergencies.",equipment:"Standardized Serological & Immunochromatographic Systems",commonTests:["Dengue NS1 Antigen + IgM/IgG Duo","Widal Slide Agglutination","Malaria Rapid Antigen Test (Pf/Pv)","HBsAg & Anti-HCV"],preparation:"No fasting required. Immediate STAT urgent testing available."}],Y0=()=>{const[a,o]=k.useState(!1),[i,c]=k.useState(null),u=Lt(),p=m=>{c({name:m.name,price:350,type:"test"}),o(!0)};return t.jsxs("div",{className:"services-page-wrapper",children:[t.jsx("section",{className:"page-header-banner",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"banner-grid-tech",children:[t.jsxs("div",{className:"banner-text-col",children:[t.jsx("span",{className:"section-subtitle banner-sub",children:"Laboratory Facilities"}),t.jsx("h1",{className:"page-header-title",children:"Diagnostic Services & Clinical Investigations"}),t.jsx("p",{className:"page-header-desc",children:"Explore the clinical diagnostic investigations offered by Doctor Diagnostics Center, Trichy. All investigations are conducted strictly under calibrated protocols by certified medical technologists."})]}),t.jsxs("div",{className:"banner-image-col",children:[t.jsx("img",{src:"/images/clinical-analyzers.jpg",alt:"Automated Clinical Diagnostics Analyzers",className:"banner-tech-img"}),t.jsxs("div",{className:"banner-tech-caption",children:[t.jsx("strong",{children:"Automated Robotic Processing"}),t.jsx("span",{children:"Barcoded Sample Traceability"})]})]})]})})}),t.jsx("section",{className:"section services-list-section",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"services-container-list",children:G0.map((m,f)=>t.jsxs("div",{className:"service-detail-card",children:[t.jsxs("div",{className:"service-detail-header",children:[t.jsx("div",{className:"service-icon-box-lg",children:m.icon}),t.jsxs("div",{children:[t.jsx("span",{className:"service-subhead",children:m.headline}),t.jsx("h2",{className:"service-name-lg",children:m.name})]})]}),t.jsx("p",{className:"service-desc-text",children:m.desc}),t.jsxs("div",{className:"service-equipment-bar",children:[t.jsx("strong",{children:"Analytical Platform:"})," ",m.equipment]}),t.jsxs("div",{className:"service-tests-box",children:[t.jsx("h4",{style:{fontSize:"0.875rem",color:"var(--color-text-main)",marginBottom:"8px"},children:"Common Investigations in this Division:"}),t.jsx("div",{className:"service-chips-wrap",children:m.commonTests.map((g,b)=>t.jsxs("span",{className:"service-test-chip",children:[t.jsx(lt,{size:13,color:"var(--color-secondary)"}),t.jsx("span",{children:g})]},b))})]}),t.jsxs("div",{className:"service-prep-notice",children:[t.jsx(bt,{size:16,color:"var(--color-secondary)",style:{flexShrink:0}}),t.jsxs("div",{children:[t.jsx("strong",{children:"Preparation Advice:"})," ",m.preparation]})]}),t.jsxs("div",{className:"service-card-actions",children:[t.jsxs("button",{onClick:()=>p(m),className:"btn btn-primary",children:[t.jsx(Ft,{size:16}),t.jsx("span",{children:"Book Investigation in this Category"})]}),t.jsxs("button",{onClick:()=>u("/tests"),className:"btn btn-outline",children:[t.jsx("span",{children:"View Catalog Tests"}),t.jsx(Rt,{size:16})]})]})]},m.id))})})}),t.jsx(Fn,{isOpen:a,onClose:()=>o(!1),preselectedItem:i}),t.jsx("style",{children:`
        .page-header-banner {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 3.5rem 0;
        }
        .banner-grid-tech {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 2.5rem;
          align-items: center;
        }
        .banner-sub {
          color: #5EEAD4;
        }
        .page-header-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .page-header-desc {
          color: #CBD5E1;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .banner-image-col {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: 240px;
        }
        .banner-tech-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .banner-tech-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.92) 0%, rgba(6, 42, 74, 0) 100%);
          padding: 20px 14px 10px;
          display: flex;
          flex-direction: column;
        }
        .banner-tech-caption strong {
          font-size: 0.85rem;
          color: #5EEAD4;
        }
        .banner-tech-caption span {
          font-size: 0.75rem;
          color: #E2E8F0;
        }
        .services-list-section {
          padding-top: 3.5rem;
        }
        .services-container-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .service-detail-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.5rem;
          transition: all var(--transition-normal);
        }
        .service-detail-card:hover {
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(11, 71, 120, 0.25);
        }
        .service-detail-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .service-icon-box-lg {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-lg);
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .service-subhead {
          display: block;
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 2px;
        }
        .service-name-lg {
          font-size: 1.55rem;
          color: var(--color-primary-dark);
          line-height: 1.25;
        }
        .service-desc-text {
          font-size: 0.95rem;
          color: var(--color-text-body);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .service-equipment-bar {
          background: var(--color-bg);
          padding: 8px 14px;
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--color-text-main);
          margin-bottom: 1.25rem;
          border-left: 3px solid var(--color-primary);
        }
        .service-tests-box {
          margin-bottom: 1.25rem;
        }
        .service-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .service-test-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--color-text-body);
        }
        .service-prep-notice {
          background: #F8FAFC;
          border: 1px solid var(--color-border-subtle);
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 0.85rem;
          color: var(--color-text-body);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 1.5rem;
        }
        .service-card-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .service-detail-card {
            padding: 1.75rem;
          }
          .service-detail-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .service-name-lg {
            font-size: 1.3rem;
          }
        }
      `})]})},X0=["Thillai Nagar","Cantonment","KK Nagar","Srirangam","Woraiyur","Tennur","TVS Tollgate","Palakkarai","Ponmalai (Golden Rock)","Edamalaipatti Pudur","Crawford","Kattur","Melachinthamani","Subramaniyapuram","Beema Nagar"],gp=["06:30 AM - 07:30 AM (Fasting Priority)","07:30 AM - 08:30 AM","08:30 AM - 09:30 AM","09:30 AM - 10:30 AM","10:30 AM - 11:30 AM","11:30 AM - 12:30 PM"],J0=["Complete Blood Count (CBC with ESR)","Fasting Blood Sugar (FBS) & PPBS","HbA1c Glycated Hemoglobin","Lipid Profile Comprehensive","Thyroid Profile Total (T3, T4, TSH)","Liver Function Test (LFT)","Renal Function Test (RFT)","Vitamin D3 & Vitamin B12","Master Health Checkup (Comprehensive)","Senior Citizen Wellness Profile (Gold)","Diabetic Care Package"],Z0=()=>{const{addToast:a}=Mt(),[o,i]=k.useState(!1),[c,u]=k.useState(null),p=new Date().toISOString().split("T")[0],[m,f]=k.useState({patientName:"",mobileNumber:"",email:"",age:"",gender:"male",address:"",locality:"Thillai Nagar",pincode:"620018",preferredDate:p,preferredSlot:gp[0],selectedTests:["Master Health Checkup (Comprehensive)"],fastingConfirmed:!0,specialInstructions:"",consentAgreed:!0}),g=y=>{const{name:N,value:O,type:B,checked:C}=y.target;f(A=>({...A,[N]:B==="checkbox"?C:O}))},b=y=>{f(N=>N.selectedTests.includes(y)?{...N,selectedTests:N.selectedTests.filter(B=>B!==y)}:{...N,selectedTests:[...N.selectedTests,y]})},x=async y=>{var N,O;if(y.preventDefault(),!m.patientName.trim()){a("Please enter patient full name","error");return}if(!m.mobileNumber.trim()||m.mobileNumber.length<10){a("Please enter a valid 10-digit mobile number","error");return}if(!m.address.trim()){a("Please provide your complete door/flat street address in Trichy","error");return}if(m.selectedTests.length===0){a("Please select at least one test or health package","error");return}if(!m.consentAgreed){a("Please acknowledge the privacy and home sample consent","error");return}i(!0);try{const B=await ye.post("/home-collections",m);B.data.success&&(u(B.data.data),a("Home sample collection scheduled successfully!","success"))}catch(B){const C=((O=(N=B.response)==null?void 0:N.data)==null?void 0:O.message)||"Failed to submit home collection request.";a(C,"error")}finally{i(!1)}};return t.jsxs("div",{className:"home-collection-page-wrapper",children:[t.jsx("section",{className:"page-header-banner",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"banner-grid-tech",children:[t.jsxs("div",{className:"banner-text-col",children:[t.jsx("span",{className:"section-subtitle banner-sub",children:"Doorstep Healthcare"}),t.jsx("h1",{className:"page-header-title",children:"Home Sample Collection in Trichy"}),t.jsx("p",{className:"page-header-desc",children:"Get accurate diagnostic blood testing done in the comfort of your home. Free sample pickup for senior citizens and bookings above ₹500 across Tiruchirappalli city limits."})]}),t.jsxs("div",{className:"banner-image-col",children:[t.jsx("img",{src:"/images/home-collection.jpg",alt:"Phlebotomist Home Sample Pickup Trichy",className:"banner-tech-img"}),t.jsxs("div",{className:"banner-tech-caption",children:[t.jsx("strong",{children:"Certified Phlebotomy Team"}),t.jsx("span",{children:"Cold-Chain Insulated Kit & Sterile Supplies"})]})]})]})})}),t.jsx("section",{className:"section",style:{paddingTop:"3rem"},children:t.jsx("div",{className:"container",style:{maxWidth:"860px"},children:c?t.jsxs("div",{className:"hc-success-card",children:[t.jsx("div",{className:"success-icon-wrap",children:t.jsx(lt,{size:48,color:"var(--color-secondary)"})}),t.jsx("h2",{style:{color:"var(--color-primary-dark)",marginBottom:"0.5rem"},children:"Home Collection Request Received!"}),t.jsx("p",{style:{color:"var(--color-text-muted)",marginBottom:"1.5rem"},children:"Our dispatch supervisor will contact you to verify your location and coordinate our phlebotomist's arrival."}),t.jsxs("div",{className:"hc-ref-box",children:[t.jsxs("div",{className:"ref-line",children:[t.jsx("span",{children:"Reference ID:"}),t.jsx("strong",{style:{color:"var(--color-secondary)",fontSize:"1.25rem"},children:c.referenceNumber})]}),t.jsxs("div",{className:"ref-details-grid",children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Patient:"})," ",c.patientName]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Mobile:"})," ",c.mobileNumber]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Pickup Date:"})," ",c.preferredDate]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Time Slot:"})," ",c.preferredSlot]}),t.jsxs("div",{style:{gridColumn:"span 2"},children:[t.jsx("strong",{children:"Address:"})," ",c.address,", ",c.locality]}),t.jsxs("div",{style:{gridColumn:"span 2"},children:[t.jsx("strong",{children:"Selected Tests:"})," ",c.selectedTests.join(", ")]})]})]}),t.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[t.jsxs("a",{href:`https://wa.me/919443152200?text=${encodeURIComponent(`Hello Doctor Diagnostics Trichy, my Home Collection Reference ID is ${c.referenceNumber} for ${c.patientName} on ${c.preferredDate}.`)}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp btn-lg",children:[t.jsx("span",{children:"Notify via WhatsApp (+91 94431 52200)"}),t.jsx(Rn,{size:18})]}),t.jsx("button",{onClick:()=>u(null),className:"btn btn-outline btn-lg",children:"Book Another Collection"})]})]}):t.jsxs("form",{onSubmit:x,className:"hc-form-card",children:[t.jsxs("div",{className:"hc-form-intro",children:[t.jsx("h3",{style:{color:"var(--color-primary)",marginBottom:"4px"},children:"Doorstep Phlebotomy Request Form"}),t.jsx("p",{style:{fontSize:"0.9rem",color:"var(--color-text-muted)"},children:"All equipment is single-use, sterile, and cold-chain transported to our Salai Road central laboratory."})]}),t.jsxs("div",{className:"form-section-title",children:[t.jsx(wm,{size:18}),t.jsx("span",{children:"1. Patient Information"})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Full Name *"}),t.jsx("input",{type:"text",name:"patientName",value:m.patientName,onChange:g,placeholder:"e.g. S. Meenakshi",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"10-Digit Mobile Number *"}),t.jsx("input",{type:"tel",name:"mobileNumber",value:m.mobileNumber,onChange:g,placeholder:"e.g. 9443123456",maxLength:10,className:"form-control",required:!0})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Age *"}),t.jsx("input",{type:"number",name:"age",value:m.age,onChange:g,placeholder:"e.g. 58",min:"1",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Gender *"}),t.jsxs("select",{name:"gender",value:m.gender,onChange:g,className:"form-control",children:[t.jsx("option",{value:"female",children:"Female"}),t.jsx("option",{value:"male",children:"Male"}),t.jsx("option",{value:"other",children:"Other"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Email (Optional)"}),t.jsx("input",{type:"email",name:"email",value:m.email,onChange:g,placeholder:"For PDF report delivery",className:"form-control"})]})]}),t.jsxs("div",{className:"form-section-title",style:{marginTop:"1.5rem"},children:[t.jsx(Tr,{size:18}),t.jsx("span",{children:"2. Trichy Collection Address"})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",style:{flex:1.5},children:[t.jsx("label",{className:"form-label",children:"Trichy Locality / Area *"}),t.jsx("select",{name:"locality",value:m.locality,onChange:g,className:"form-control",required:!0,children:X0.map(y=>t.jsx("option",{value:y,children:y},y))})]}),t.jsxs("div",{className:"form-group",style:{flex:1},children:[t.jsx("label",{className:"form-label",children:"Pincode"}),t.jsx("input",{type:"text",name:"pincode",value:m.pincode,onChange:g,placeholder:"e.g. 620018",className:"form-control"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Complete Street Address & Door No. *"}),t.jsx("textarea",{name:"address",value:m.address,onChange:g,rows:"2",placeholder:"e.g. Door No. 24, 4th Cross West, Thillai Nagar, Trichy (Near Indian Bank)",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-section-title",style:{marginTop:"1.5rem"},children:[t.jsx(bt,{size:18}),t.jsx("span",{children:"3. Preferred Schedule"})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Pickup Date *"}),t.jsx("input",{type:"date",name:"preferredDate",min:p,value:m.preferredDate,onChange:g,className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Preferred Time Window *"}),t.jsx("select",{name:"preferredSlot",value:m.preferredSlot,onChange:g,className:"form-control",required:!0,children:gp.map(y=>t.jsx("option",{value:y,children:y},y))})]})]}),t.jsx("div",{className:"form-group",children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem"},children:[t.jsx("input",{type:"checkbox",name:"fastingConfirmed",checked:m.fastingConfirmed,onChange:g,style:{width:"18px",height:"18px"}}),t.jsx("span",{children:"Patient will maintain required 10-12 hours overnight fasting prior to morning sample draw."})]})}),t.jsxs("div",{className:"form-section-title",style:{marginTop:"1.5rem"},children:[t.jsx(lt,{size:18}),t.jsx("span",{children:"4. Select Tests or Health Package Required"})]}),t.jsx("div",{className:"tests-selection-grid",children:J0.map(y=>{const N=m.selectedTests.includes(y);return t.jsxs("label",{className:`test-check-box ${N?"checked":""}`,children:[t.jsx("input",{type:"checkbox",checked:N,onChange:()=>b(y),style:{display:"none"}}),t.jsx("div",{className:"check-indicator",children:N&&t.jsx(lt,{size:16,color:"#ffffff"})}),t.jsx("span",{className:"test-check-name",children:y})]},y)})}),t.jsxs("div",{className:"form-group",style:{marginTop:"1.25rem"},children:[t.jsx("label",{className:"form-label",children:"Special Clinical or Entry Instructions (Optional)"}),t.jsx("input",{type:"text",name:"specialInstructions",value:m.specialInstructions,onChange:g,placeholder:"e.g. Senior citizen patient, difficult vein, call 10 mins before reaching",className:"form-control"})]}),t.jsx("div",{className:"form-group",style:{marginTop:"1.5rem",background:"#F8FAFC",padding:"12px",borderRadius:"8px",border:"1px solid var(--color-border)"},children:t.jsxs("label",{style:{display:"flex",alignItems:"flex-start",gap:"10px",cursor:"pointer",fontSize:"0.85rem",color:"var(--color-text-body)"},children:[t.jsx("input",{type:"checkbox",name:"consentAgreed",checked:m.consentAgreed,onChange:g,style:{width:"18px",height:"18px",marginTop:"2px"},required:!0}),t.jsx("span",{children:"I confirm that the address is within Trichy Corporation limits, and I consent to the visit of certified phlebotomists from Doctor Diagnostics Center for biological specimen collection."})]})}),t.jsx("div",{style:{marginTop:"2rem"},children:t.jsxs("button",{type:"submit",disabled:o,className:"btn btn-secondary btn-lg",style:{width:"100%"},children:[t.jsx(or,{size:20}),t.jsx("span",{children:o?"Submitting Request...":"Confirm Home Collection Request"})]})})]})})}),t.jsx("style",{children:`
        .page-header-banner {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 3.5rem 0;
        }
        .banner-grid-tech {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 2.5rem;
          align-items: center;
        }
        .banner-sub {
          color: #5EEAD4;
        }
        .page-header-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .page-header-desc {
          color: #CBD5E1;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .banner-image-col {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: 240px;
        }
        .banner-tech-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .banner-tech-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.92) 0%, rgba(6, 42, 74, 0) 100%);
          padding: 20px 14px 10px;
          display: flex;
          flex-direction: column;
        }
        .banner-tech-caption strong {
          font-size: 0.85rem;
          color: #5EEAD4;
        }
        .banner-tech-caption span {
          font-size: 0.75rem;
          color: #E2E8F0;
        }
        .hc-form-card, .hc-success-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.5rem;
        }
        .hc-form-intro {
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: 1.75rem;
        }
        .form-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1.25rem;
        }
        .tests-selection-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .test-check-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: #ffffff;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .test-check-box:hover {
          border-color: var(--color-secondary);
        }
        .test-check-box.checked {
          background: var(--color-secondary-light);
          border-color: var(--color-secondary);
        }
        .check-indicator {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1.5px solid #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          flex-shrink: 0;
        }
        .test-check-box.checked .check-indicator {
          background: var(--color-secondary);
          border-color: var(--color-secondary);
        }
        .test-check-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .hc-success-card {
          text-align: center;
        }
        .success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--color-secondary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }
        .hc-ref-box {
          background: var(--color-bg);
          border: 2px dashed var(--color-secondary);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          text-align: left;
          margin-bottom: 2rem;
        }
        .ref-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 12px;
        }
        .ref-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
          .hc-form-card {
            padding: 1.75rem 1.25rem;
          }
          .tests-selection-grid {
            grid-template-columns: 1fr;
          }
          .ref-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},e1=[{key:"pending",label:"Booking Received",desc:"Received in lab intake queue"},{key:"confirmed",label:"Confirmed & Slot Reserved",desc:"Staff verified slot availability"},{key:"in_progress",label:"In Lab Processing",desc:"Sample collected & undergoing analysis"},{key:"completed",label:"Report Verified & Ready",desc:"Signed off by pathologist"}],t1=()=>{var O;const{addToast:a}=Mt(),[o,i]=k.useState(""),[c,u]=k.useState(""),[p,m]=k.useState(!1),[f,g]=k.useState(null),[b,x]=k.useState(!1),y=async B=>{var C,A;if(B.preventDefault(),!o.trim()){a("Please enter your booking reference number","error");return}m(!0),x(!0);try{const z=c?`?mobile=${encodeURIComponent(c.trim())}`:"",L=await ye.get(`/bookings/status/${encodeURIComponent(o.trim())}${z}`);L.data.success&&g(L.data.data)}catch(z){g(null);const L=((A=(C=z.response)==null?void 0:C.data)==null?void 0:A.message)||"No booking record found for this reference.";a(L,"error")}finally{m(!1)}},N=(B,C)=>{const A=["pending","confirmed","in_progress","completed"],z=A.indexOf(C),L=A.indexOf(B);return C==="cancelled"?"cancelled":L<z?"completed":L===z?"active":"upcoming"};return t.jsxs("div",{className:"check-status-page-wrapper",children:[t.jsx("section",{className:"page-header-banner",children:t.jsxs("div",{className:"container",children:[t.jsx("span",{className:"section-subtitle",children:"Real-Time Tracking"}),t.jsx("h1",{className:"page-header-title",children:"Check Booking & Sample Status"}),t.jsx("p",{className:"page-header-desc",children:"Track the status of your diagnostic appointment or home sample collection using your reference code."})]})}),t.jsx("section",{className:"section",style:{paddingTop:"3rem"},children:t.jsxs("div",{className:"container",style:{maxWidth:"780px"},children:[t.jsxs("div",{className:"status-lookup-card",children:[t.jsx("h3",{style:{color:"var(--color-primary)",marginBottom:"0.5rem"},children:"Enter Booking Reference"}),t.jsxs("p",{style:{fontSize:"0.875rem",color:"var(--color-text-muted)",marginBottom:"1.5rem"},children:["Your reference number was generated upon booking (e.g. ",t.jsx("code",{children:"DDC-2026-10821"}),")."]}),t.jsxs("form",{onSubmit:y,children:[t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",style:{flex:1.5},children:[t.jsx("label",{className:"form-label",children:"Booking Reference Number *"}),t.jsx("input",{type:"text",value:o,onChange:B=>i(B.target.value.toUpperCase()),placeholder:"e.g. DDC-2026-10821",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",style:{flex:1},children:[t.jsx("label",{className:"form-label",children:"Registered Mobile (Optional)"}),t.jsx("input",{type:"tel",value:c,onChange:B=>u(B.target.value),placeholder:"For security verification",className:"form-control"})]})]}),t.jsxs("button",{type:"submit",disabled:p,className:"btn btn-primary",style:{width:"100%",marginTop:"0.5rem"},children:[t.jsx(Ar,{size:18}),t.jsx("span",{children:p?"Verifying Reference...":"Track Booking Status"})]})]})]}),f&&t.jsxs("div",{className:"status-result-card",children:[t.jsxs("div",{className:"result-header",children:[t.jsxs("div",{children:[t.jsx("span",{className:"badge badge-primary",children:f.bookingReference}),t.jsx("h3",{style:{color:"var(--color-primary-dark)",marginTop:"4px"},children:f.itemName})]}),t.jsx("div",{children:t.jsxs("span",{className:`badge ${f.status==="confirmed"?"badge-success":f.status==="completed"?"badge-primary":f.status==="cancelled"?"badge-danger":"badge-warning"}`,style:{fontSize:"0.85rem",padding:"6px 14px"},children:["Status: ",f.status.toUpperCase()]})})]}),t.jsx("div",{className:"timeline-container",children:e1.map((B,C)=>{const A=N(B.key,f.status);return t.jsxs("div",{className:`timeline-step ${A}`,children:[t.jsx("div",{className:"step-circle",children:A==="completed"?t.jsx(lt,{size:18}):t.jsx("span",{children:C+1})}),t.jsxs("div",{className:"step-content",children:[t.jsx("div",{className:"step-title",children:B.label}),t.jsx("div",{className:"step-desc",children:B.desc})]})]},B.key)})}),t.jsxs("div",{className:"result-details-box",children:[t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Patient Name:"}),t.jsx("span",{children:f.patientName})]}),t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Appointment Date:"}),t.jsx("span",{children:f.appointmentDate})]}),t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Reserved Slot:"}),t.jsx("span",{children:f.timeSlot})]}),t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Service Mode:"}),t.jsx("span",{children:f.bookingType==="home_collection"?"Home Sample Pickup":"Center Lab Visit"})]}),t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Location:"}),t.jsx("span",{children:f.location})]}),t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Payment Status:"}),t.jsx("span",{children:f.paymentStatus==="paid"?t.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.75rem"},children:["✓ PAID ONLINE (",((O=f.paymentMethod)==null?void 0:O.replace("dummy_","").toUpperCase())||"ONLINE",")"]}):t.jsx("span",{className:"badge badge-warning",style:{fontSize:"0.75rem"},children:"PAY AT LAB / PICKUP"})})]}),f.transactionId&&t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Transaction ID:"}),t.jsx("code",{children:f.transactionId})]}),f.maskedMobile&&t.jsxs("div",{className:"res-detail-item",children:[t.jsx("strong",{children:"Patient Contact:"}),t.jsx("span",{children:f.maskedMobile})]})]}),f.statusHistory&&f.statusHistory.length>0&&t.jsxs("div",{style:{marginTop:"1.25rem",background:"#F8FAFC",padding:"1rem",borderRadius:"8px"},children:[t.jsx("h4",{style:{fontSize:"0.85rem",color:"var(--color-text-main)",marginBottom:"8px"},children:"Status Updates History:"}),t.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"6px",fontSize:"0.825rem",color:"var(--color-text-muted)"},children:f.statusHistory.map((B,C)=>t.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(bt,{size:13,color:"var(--color-primary)"}),t.jsxs("span",{children:[t.jsxs("strong",{children:[B.status.toUpperCase(),":"]})," ",B.note]}),t.jsx("span",{style:{fontSize:"0.75rem",color:"#94A3B8",marginLeft:"auto"},children:new Date(B.changedAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]},C))})]}),t.jsx("div",{style:{marginTop:"1.5rem",textAlign:"center"},children:t.jsxs("a",{href:`https://wa.me/919443152200?text=${encodeURIComponent(`Hello Doctor Diagnostics Trichy, I would like to check report status for Reference ${f.bookingReference}.`)}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp",children:[t.jsx("span",{children:"Chat with Lab Desk on WhatsApp"}),t.jsx(Rn,{size:16})]})})]}),b&&!p&&!f&&t.jsxs("div",{className:"empty-status-state",children:[t.jsx(Pa,{size:40,color:"#EF4444"}),t.jsx("h3",{children:"No Record Found"}),t.jsxs("p",{children:['We could not locate any booking with reference "',t.jsx("strong",{children:o}),'". Please verify your booking reference code or contact our reception helpline.']}),t.jsx("a",{href:"tel:+919443100000",className:"btn btn-outline btn-sm",children:"Call Lab Desk: +91 94431 00000"})]})]})}),t.jsx("style",{children:`
        .status-lookup-card, .status-result-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.25rem;
          margin-bottom: 2rem;
        }
        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
          gap: 10px;
        }
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
          position: relative;
          padding-left: 12px;
        }
        .timeline-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          position: relative;
        }
        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          flex-shrink: 0;
          background: #E2E8F0;
          color: #64748B;
        }
        .timeline-step.completed .step-circle {
          background: var(--color-success);
          color: #ffffff;
        }
        .timeline-step.active .step-circle {
          background: var(--color-primary);
          color: #ffffff;
          box-shadow: 0 0 0 4px rgba(11, 71, 120, 0.2);
        }
        .step-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .step-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
        }
        .result-details-box {
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          font-size: 0.875rem;
        }
        .res-detail-item {
          display: flex;
          flex-direction: column;
        }
        .res-detail-item strong {
          color: var(--color-text-muted);
          font-size: 0.775rem;
          text-transform: uppercase;
        }
        .res-detail-item span {
          color: var(--color-primary-dark);
          font-weight: 600;
        }
        .empty-status-state {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: 3rem 1.5rem;
          text-align: center;
        }
        .empty-status-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--color-text-main);
        }
        .empty-status-state p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          max-width: 480px;
          margin: 0 auto 1.5rem;
        }

        @media (max-width: 640px) {
          .result-details-box {
            grid-template-columns: 1fr;
          }
        }
      `})]})},r1=()=>t.jsxs("div",{className:"about-page-wrapper",children:[t.jsx("section",{className:"page-header-banner",children:t.jsxs("div",{className:"container",children:[t.jsx("span",{className:"section-subtitle",children:"Our Heritage & Mission"}),t.jsx("h1",{className:"page-header-title",children:"About Doctor Diagnostics Center"}),t.jsx("p",{className:"page-header-desc",children:"Serving Tiruchirappalli with uncompromised analytical precision, automated pathology, and compassionate patient care."})]})}),t.jsx("section",{className:"section",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"about-grid",children:[t.jsxs("div",{className:"about-content",children:[t.jsx("span",{className:"badge badge-secondary about-badge",children:"Diagnosis & Research • Trichy"}),t.jsx("h2",{className:"about-headline",children:"Committed to Diagnostic Accuracy & Clinical Excellence"}),t.jsxs("p",{className:"about-lead",children:["Established in Tiruchirappalli, ",t.jsx("strong",{children:"Doctor Diagnostics Center"})," was founded with a singular conviction: that accurate, timely diagnostics are the bedrock of curative and preventive medicine."]}),t.jsx("p",{className:"about-body",children:"Located conveniently at Salai Road, near Thillai Nagar, our central laboratory integrates automated clinical biochemistry, laser flow cytometry hematology, chemiluminescent immunoassay (CLIA), HPLC glycated hemoglobin, 12-lead digital cardiology ECG, and low-dose digital radiology."}),t.jsxs("div",{className:"about-features-grid",children:[t.jsxs("div",{className:"about-feat-item",children:[t.jsx(lt,{size:18,className:"feat-check"}),t.jsx("span",{children:"Automated Barcoding Tracking"})]}),t.jsxs("div",{className:"about-feat-item",children:[t.jsx(lt,{size:18,className:"feat-check"}),t.jsx("span",{children:"Dual Pathologist Sign-off"})]}),t.jsxs("div",{className:"about-feat-item",children:[t.jsx(lt,{size:18,className:"feat-check"}),t.jsx("span",{children:"Daily Two-Level Calibrators"})]}),t.jsxs("div",{className:"about-feat-item",children:[t.jsx(lt,{size:18,className:"feat-check"}),t.jsx("span",{children:"Cold-Chain Doorstep Phlebotomy"})]})]}),t.jsx(Pe,{to:"/contact",className:"btn btn-primary btn-lg",children:t.jsx("span",{children:"Visit Our Salai Road Center"})})]}),t.jsxs("div",{className:"about-stats-card",children:[t.jsxs("div",{className:"about-stat-item",children:[t.jsx("div",{className:"stat-big",children:"100%"}),t.jsx("div",{className:"stat-title",children:"Barcoded Sample Traceability"}),t.jsx("p",{className:"stat-sub",children:"Each patient vacutainer is indexed with unique ID preventing sample mix-ups."})]}),t.jsxs("div",{className:"about-stat-item",children:[t.jsx("div",{className:"stat-big",children:"6:30 AM"}),t.jsx("div",{className:"stat-title",children:"Early Morning Operations"}),t.jsx("p",{className:"stat-sub",children:"Open 7 days a week to accommodate early fasting blood collections."})]}),t.jsxs("div",{className:"about-stat-item border-none",children:[t.jsx("div",{className:"stat-big",children:"< 3-4 Hrs"}),t.jsx("div",{className:"stat-title",children:"Routine Turnaround Time"}),t.jsx("p",{className:"stat-sub",children:"Digital PDF reports dispatched promptly to patient WhatsApp & Email."})]})]})]}),t.jsxs("div",{className:"about-photo-showcase",children:[t.jsxs("div",{className:"about-showcase-card",children:[t.jsx("img",{src:"/images/hero-lab.jpg",alt:"Doctor Diagnostics Central Laboratory Facility Trichy",className:"about-showcase-img",loading:"lazy"}),t.jsxs("div",{className:"about-showcase-caption",children:[t.jsx("strong",{children:"Central Diagnostic Facility"}),t.jsx("span",{children:"Salai Road, Thillai Nagar, Trichy"})]})]}),t.jsxs("div",{className:"about-showcase-card",children:[t.jsx("img",{src:"/images/clinical-analyzers.jpg",alt:"Automated Clinical Biochemistry Analyzers",className:"about-showcase-img",loading:"lazy"}),t.jsxs("div",{className:"about-showcase-caption",children:[t.jsx("strong",{children:"Automated Analytical Robotics"}),t.jsx("span",{children:"Random-Access Biochemistry & Laser Flow Cytometry"})]})]})]})]})}),t.jsx("section",{className:"section section-alt",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Standard of Care"}),t.jsx("h2",{className:"section-title",children:"Our Five-Point Quality Assurance Standard"}),t.jsx("p",{className:"section-desc",children:"Every specimen processed at Doctor Diagnostics Center undergoes stringent medical review."})]}),t.jsxs("div",{className:"quality-standards-grid",children:[t.jsxs("div",{className:"quality-card",children:[t.jsx(Ol,{size:32,className:"qc-icon"}),t.jsx("h3",{className:"qc-title",children:"Automated Analytical Robotics"}),t.jsx("p",{className:"qc-desc",children:"Minimizing pipetting variability and subjective reading through direct machine-to-LIS interface."})]}),t.jsxs("div",{className:"quality-card",children:[t.jsx(gm,{size:32,className:"qc-icon qc-icon-teal"}),t.jsx("h3",{className:"qc-title",children:"Internal & External QC (EQAS)"}),t.jsx("p",{className:"qc-desc",children:"Daily running of verified normal and abnormal control sera evaluated against clinical multi-rules."})]}),t.jsxs("div",{className:"quality-card",children:[t.jsx(mo,{size:32,className:"qc-icon"}),t.jsx("h3",{className:"qc-title",children:"Double Medical Verification"}),t.jsx("p",{className:"qc-desc",children:"Clinical review of critical panic values by senior pathologists with immediate telephone escalation."})]}),t.jsxs("div",{className:"quality-card",children:[t.jsx(Dt,{size:32,className:"qc-icon qc-icon-teal"}),t.jsx("h3",{className:"qc-title",children:"Cold-Chain Sample Logistics"}),t.jsx("p",{className:"qc-desc",children:"Doorstep vacutainers transported strictly inside monitored cold-chain insulated gel containers."})]})]})]})}),t.jsx("style",{children:`
        .page-header-banner {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 3.5rem 0;
          text-align: center;
        }
        .page-header-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .page-header-desc {
          color: #CBD5E1;
          font-size: 1.05rem;
          max-width: 650px;
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.9fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }
        .about-badge {
          margin-bottom: 1rem;
        }
        .about-headline {
          font-size: clamp(1.85rem, 2.5vw, 2.25rem);
          color: var(--color-primary);
          margin-bottom: 1.25rem;
        }
        .about-lead {
          color: var(--color-text-body);
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .about-body {
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .about-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 2rem;
        }
        .about-feat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--color-text-main);
        }
        .feat-check {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
        .about-stats-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2rem;
        }
        .about-stat-item {
          padding-bottom: 1.25rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .border-none {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        .stat-big {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 4px;
        }
        .stat-sub {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        /* Photo Showcase */
        .about-photo-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .about-showcase-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          height: 320px;
        }
        .about-showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-showcase-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.9) 0%, rgba(6, 42, 74, 0) 100%);
          padding: 24px 18px 14px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
        }
        .about-showcase-caption strong {
          font-size: 0.95rem;
          color: #5EEAD4;
        }
        .about-showcase-caption span {
          font-size: 0.8rem;
          color: #E2E8F0;
        }

        /* Quality Standards Grid */
        .quality-standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .quality-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }
        .qc-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .qc-icon-teal {
          color: var(--color-secondary);
        }
        .qc-title {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }
        .qc-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-photo-showcase {
            grid-template-columns: 1fr;
          }
          .about-showcase-card {
            height: 260px;
          }
        }
        @media (max-width: 640px) {
          .about-features-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),n1=[{q:"How long do I need to fast for fasting blood sugar and lipid tests?",a:"For Fasting Blood Sugar (FBS), a minimum of 8 to 10 hours overnight fasting is required. For Lipid Profile (cholesterol), 10 to 12 hours fasting is essential. Plain drinking water is permitted and encouraged."},{q:"How does Home Sample Collection work across Trichy?",a:"You can schedule online or via WhatsApp. Our certified phlebotomist visits your home with pre-barcoded sterile vacutainers and cold storage kit, draws the blood sample safely, and transports it directly to our Thillai Nagar central lab."},{q:"When and how will I receive my diagnostic report?",a:"Routine hematology (CBC) and biochemistry results are available within 3 to 4 hours. Once verified and signed off by our consultant pathologist, an official password-protected PDF report is sent directly to your WhatsApp and registered email."},{q:"What payment methods are accepted at Doctor Diagnostics Center?",a:"We accept UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and cash both at our Salai Road center counter and during home sample collection."},{q:"Do I need a doctor prescription to book a health package?",a:"No doctor prescription is mandatory for preventive wellness and master health checkup packages. For specific specialized investigations, bringing your doctor prescription is helpful for clinical correlation."}],a1=()=>{const{addToast:a}=Mt(),[o,i]=k.useState(0),[c,u]=k.useState(!1),[p,m]=k.useState(!1),[f,g]=k.useState({name:"",phone:"",email:"",enquiryType:"general",subject:"",message:""}),b=y=>{const{name:N,value:O}=y.target;g(B=>({...B,[N]:O}))},x=async y=>{var N,O;if(y.preventDefault(),!f.name.trim()||!f.phone.trim()||!f.subject.trim()||!f.message.trim()){a("Please complete all required fields","error");return}u(!0);try{(await ye.post("/enquiries",f)).data.success&&(m(!0),a("Enquiry received! Our lab support team will contact you shortly.","success"),g({name:"",phone:"",email:"",enquiryType:"general",subject:"",message:""}))}catch(B){const C=((O=(N=B.response)==null?void 0:N.data)==null?void 0:O.message)||"Failed to submit enquiry. Please call us directly.";a(C,"error")}finally{u(!1)}};return t.jsxs("div",{className:"contact-page-wrapper",children:[t.jsx("section",{className:"page-header-banner",children:t.jsxs("div",{className:"container",children:[t.jsx("span",{className:"section-subtitle",children:"Reach Our Laboratory"}),t.jsx("h1",{className:"page-header-title",children:"Contact Us & Center Directions"}),t.jsx("p",{className:"page-header-desc",children:"Get in touch with our medical diagnostics support team for enquiries, corporate health screening camps, or location guidance in Trichy."})]})}),t.jsx("section",{className:"section",style:{paddingTop:"3.5rem"},children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"contact-main-grid",children:[t.jsxs("div",{className:"contact-info-card",children:[t.jsx("h2",{style:{fontSize:"1.6rem",color:"var(--color-primary-dark)",marginBottom:"0.75rem"},children:"Doctor Diagnostics Center"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.95rem",marginBottom:"2rem",lineHeight:1.6},children:"Centrally located on Salai Road, Thillai Nagar, providing accessible healthcare diagnostics to the people of Tiruchirappalli and surrounding districts."}),t.jsxs("div",{className:"c-item",children:[t.jsx(Tr,{size:22,className:"c-icon"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Center Address:"}),t.jsx("div",{children:"No. 42, Salai Road, Near Thillai Nagar 1st Cross,"}),t.jsx("div",{children:"Tiruchirappalli - 620018, Tamil Nadu, India"}),t.jsx("div",{style:{fontSize:"0.8rem",color:"var(--color-text-muted)",marginTop:"4px"},children:"Landmark: Opp. City Union Bank / Fort Station Link Road"})]})]}),t.jsxs("div",{className:"c-item",children:[t.jsx(bt,{size:22,className:"c-icon"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Working Hours:"}),t.jsxs("div",{children:["Mon - Sat: ",t.jsx("strong",{children:"6:30 AM – 9:00 PM"})]}),t.jsxs("div",{children:["Sunday: ",t.jsx("strong",{children:"7:00 AM – 2:00 PM"})]}),t.jsx("div",{style:{color:"var(--color-secondary)",fontSize:"0.825rem",marginTop:"4px"},children:"Emergency & Stat sample collection available"})]})]}),t.jsxs("div",{className:"c-item",children:[t.jsx(uo,{size:22,className:"c-icon"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Phone Contact:"}),t.jsxs("div",{children:["Mobile: ",t.jsx("a",{href:"tel:+919443100000",style:{fontWeight:700},children:"+91 94431 00000"})]}),t.jsx("div",{children:"Landline: +91 431 2740000"})]})]}),t.jsxs("div",{className:"c-item",children:[t.jsx(_r,{size:22,className:"c-icon"}),t.jsxs("div",{children:[t.jsx("strong",{children:"WhatsApp Helpline:"}),t.jsx("div",{children:t.jsx("a",{href:"https://wa.me/919443152200",target:"_blank",rel:"noopener noreferrer",style:{color:"#059669",fontWeight:700},children:"+91 94431 52200 (Chat Now)"})})]})]}),t.jsxs("div",{className:"c-item",children:[t.jsx(Il,{size:22,className:"c-icon"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Official Email:"}),t.jsx("div",{children:"care@doctordiagnostics.com"})]})]}),t.jsx("div",{style:{marginTop:"2rem"},children:t.jsxs("a",{href:"https://maps.google.com/?q=Salai+Road+Thillai+Nagar+Trichy",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{width:"100%"},children:[t.jsx(vm,{size:18}),t.jsx("span",{children:"Open in Google Maps for Navigation"}),t.jsx(Rn,{size:16})]})})]}),t.jsxs("div",{className:"contact-form-card",children:[t.jsx("h3",{style:{fontSize:"1.4rem",color:"var(--color-primary)",marginBottom:"0.5rem"},children:"Send Us a Message or Enquiry"}),t.jsx("p",{style:{fontSize:"0.875rem",color:"var(--color-text-muted)",marginBottom:"1.5rem"},children:"Have a question regarding test preparations, corporate packages, or test availability? Fill the form below."}),p&&t.jsxs("div",{style:{background:"var(--color-success-bg)",border:"1px solid var(--color-success)",borderRadius:"8px",padding:"1rem",marginBottom:"1.5rem",display:"flex",alignItems:"center",gap:"10px",color:"#065F46"},children:[t.jsx(lt,{size:22}),t.jsx("span",{children:"Thank you! Your enquiry has been received. Our team will contact you shortly."})]}),t.jsxs("form",{onSubmit:x,children:[t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Your Name *"}),t.jsx("input",{type:"text",name:"name",value:f.name,onChange:b,placeholder:"e.g. Ramesh Balaji",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Phone Number *"}),t.jsx("input",{type:"tel",name:"phone",value:f.phone,onChange:b,placeholder:"e.g. 9842412345",className:"form-control",required:!0})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Email Address (Optional)"}),t.jsx("input",{type:"email",name:"email",value:f.email,onChange:b,placeholder:"e.g. ramesh@example.com",className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Enquiry Type *"}),t.jsxs("select",{name:"enquiryType",value:f.enquiryType,onChange:b,className:"form-control",children:[t.jsx("option",{value:"general",children:"General Enquiry"}),t.jsx("option",{value:"home_collection",children:"Home Collection Query"}),t.jsx("option",{value:"corporate",children:"Corporate Health Checkup"}),t.jsx("option",{value:"report_query",children:"Report Status & Query"}),t.jsx("option",{value:"feedback",children:"Feedback & Suggestions"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Subject *"}),t.jsx("input",{type:"text",name:"subject",value:f.subject,onChange:b,placeholder:"e.g. Enquiry regarding Thyroid Profile or Corporate Camp",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Message / Details *"}),t.jsx("textarea",{name:"message",value:f.message,onChange:b,rows:"4",placeholder:"Please specify your query or requirements...",className:"form-control",required:!0})]}),t.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary btn-lg",style:{width:"100%",marginTop:"0.5rem"},children:[t.jsx(o0,{size:18}),t.jsx("span",{children:c?"Sending Enquiry...":"Submit Medical Enquiry"})]})]})]})]})})}),t.jsx("section",{className:"section-alt",style:{padding:"3.5rem 0"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Location Map"}),t.jsx("h2",{className:"section-title",children:"Find Us on Salai Road, Trichy"})]}),t.jsx("div",{style:{borderRadius:"var(--radius-xl)",overflow:"hidden",border:"1px solid var(--color-border)",boxShadow:"var(--shadow-lg)",height:"420px",background:"#E2E8F0"},children:t.jsx("iframe",{title:"Doctor Diagnostics Center Trichy Google Map",src:"https://maps.google.com/maps?q=Salai+Road+Thillai+Nagar+Tiruchirappalli+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy"})})]})}),t.jsx("section",{className:"section",children:t.jsxs("div",{className:"container",style:{maxWidth:"800px"},children:[t.jsxs("div",{className:"section-header",children:[t.jsx("span",{className:"section-subtitle",children:"Common Queries"}),t.jsx("h2",{className:"section-title",children:"Frequently Asked Questions"}),t.jsx("p",{className:"section-desc",children:"Clear answers regarding fasting, sample collection, and report delivery."})]}),t.jsx("div",{className:"faq-accordion",children:n1.map((y,N)=>{const O=o===N;return t.jsxs("div",{className:`faq-item ${O?"open":""}`,children:[t.jsxs("button",{className:"faq-question-btn",onClick:()=>i(O?-1:N),children:[t.jsx("span",{children:y.q}),O?t.jsx(gv,{size:20}):t.jsx(ym,{size:20})]}),O&&t.jsx("div",{className:"faq-answer-box",children:t.jsx("p",{children:y.a})})]},N)})})]})}),t.jsx("style",{children:`
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-info-card, .contact-form-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.5rem;
        }
        .c-item {
          display: flex;
          gap: 14px;
          margin-bottom: 1.5rem;
          font-size: 0.925rem;
          line-height: 1.5;
        }
        .c-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .c-item strong {
          display: block;
          color: var(--color-text-main);
          margin-bottom: 2px;
        }
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item.open {
          border-color: var(--color-primary);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          cursor: pointer;
        }
        .faq-answer-box {
          padding: 0 1.5rem 1.25rem;
          font-size: 0.925rem;
          color: var(--color-text-body);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},s1=()=>{const a=Lt();return t.jsx("div",{style:{minHeight:"80vh",padding:"2rem 1rem"},children:t.jsx(Fn,{isOpen:!0,onClose:()=>a("/")})})},o1=()=>{const{admin:a,logout:o,isAuthenticated:i,loading:c}=fm(),u=Lt();if(c)return t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#F1F5F9"},children:t.jsx("p",{style:{color:"var(--color-primary)",fontWeight:600},children:"Loading Admin Portal..."})});if(!i)return u("/admin/login"),null;const p=()=>{o(),u("/admin/login")};return t.jsxs("div",{className:"admin-portal-wrapper",children:[t.jsxs("aside",{className:"admin-sidebar",children:[t.jsxs("div",{className:"admin-brand",children:[t.jsx("img",{src:"/logo.svg",alt:"Doctor Diagnostics Logo",className:"admin-logo-img"}),t.jsxs("div",{children:[t.jsx("h2",{className:"admin-brand-title",children:"Doctor Diagnostics"}),t.jsx("span",{className:"admin-brand-tag",children:"Admin Management Portal"})]})]}),t.jsxs("nav",{className:"admin-nav-menu",children:[t.jsxs(Ae,{to:"/admin",end:!0,className:({isActive:m})=>m?"admin-nav-item active":"admin-nav-item",children:[t.jsx(Fv,{size:18}),t.jsx("span",{children:"Dashboard Overview"})]}),t.jsxs(Ae,{to:"/admin/bookings",className:({isActive:m})=>m?"admin-nav-item active":"admin-nav-item",children:[t.jsx(xm,{size:18}),t.jsx("span",{children:"Appointments & Bookings"})]}),t.jsxs(Ae,{to:"/admin/collections",className:({isActive:m})=>m?"admin-nav-item active":"admin-nav-item",children:[t.jsx(or,{size:18}),t.jsx("span",{children:"Home Sample Pickups"})]}),t.jsxs(Ae,{to:"/admin/tests",className:({isActive:m})=>m?"admin-nav-item active":"admin-nav-item",children:[t.jsx(Ml,{size:18}),t.jsx("span",{children:"Diagnostic Tests (CRUD)"})]}),t.jsxs(Ae,{to:"/admin/packages",className:({isActive:m})=>m?"admin-nav-item active":"admin-nav-item",children:[t.jsx(Ul,{size:18}),t.jsx("span",{children:"Health Packages (CRUD)"})]}),t.jsxs(Ae,{to:"/admin/enquiries",className:({isActive:m})=>m?"admin-nav-item active":"admin-nav-item",children:[t.jsx(_r,{size:18}),t.jsx("span",{children:"Patient Enquiries"})]}),t.jsxs(Ae,{to:"/admin/settings",className:({isActive:m})=>m?"admin-nav-item active":"admin-nav-item",children:[t.jsx(l0,{size:18}),t.jsx("span",{children:"Business Settings"})]})]}),t.jsxs("div",{className:"admin-sidebar-footer",children:[t.jsxs(Pe,{to:"/",target:"_blank",className:"admin-public-link",children:[t.jsx("span",{children:"View Public Website"}),t.jsx(Rn,{size:14})]}),t.jsxs("button",{onClick:p,className:"admin-logout-btn",children:[t.jsx(Ov,{size:16}),t.jsx("span",{children:"Sign Out"})]})]})]}),t.jsxs("div",{className:"admin-main-container",children:[t.jsxs("header",{className:"admin-header",children:[t.jsxs("div",{className:"admin-header-title",children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--color-secondary)",fontWeight:700,textTransform:"uppercase"},children:"Doctor Diagnostics Center • Trichy"}),t.jsx("h1",{style:{fontSize:"1.35rem",color:"var(--color-primary-dark)"},children:"Operational Management System"})]}),t.jsxs("div",{className:"admin-profile-box",children:[t.jsx("div",{className:"admin-avatar",children:t.jsx(wm,{size:18,color:"#ffffff"})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.875rem",fontWeight:700,color:"var(--color-text-main)"},children:(a==null?void 0:a.name)||"Administrator"}),t.jsx("span",{className:"badge badge-primary",style:{fontSize:"0.7rem"},children:(a==null?void 0:a.role)==="super_admin"?"Super Administrator":"Lab Staff"})]})]})]}),t.jsx("main",{className:"admin-content-area",children:t.jsx(jg,{})})]}),t.jsx("style",{children:`
        .admin-portal-wrapper {
          display: flex;
          min-height: 100vh;
          background: #F8FAFC;
        }
        .admin-sidebar {
          width: 270px;
          background: #0B4778;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }
        .admin-brand {
          padding: 1.5rem 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .admin-logo-img {
          width: 44px;
          height: 44px;
          background: #ffffff;
          border-radius: 50%;
          padding: 3px;
        }
        .admin-brand-title {
          font-size: 1.05rem;
          color: #ffffff;
          line-height: 1.2;
        }
        .admin-brand-tag {
          font-size: 0.7rem;
          color: #5EEAD4;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .admin-nav-menu {
          padding: 1.25rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          color: #CBD5E1;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .admin-nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }
        .admin-nav-item.active {
          background: var(--color-secondary);
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(8, 127, 115, 0.3);
        }
        .admin-sidebar-footer {
          padding: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .admin-public-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.825rem;
          color: #94A3B8;
          padding: 6px 8px;
        }
        .admin-public-link:hover {
          color: #5EEAD4;
        }
        .admin-logout-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #FCA5A5;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: background var(--transition-fast);
        }
        .admin-logout-btn:hover {
          background: rgba(239, 68, 68, 0.35);
          color: #ffffff;
        }
        .admin-main-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .admin-header {
          height: 70px;
          background: #ffffff;
          border-bottom: 1px solid var(--color-border);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .admin-profile-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .admin-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-content-area {
          padding: 2rem;
          flex: 1;
          overflow-y: auto;
        }

        @media (max-width: 900px) {
          .admin-sidebar {
            width: 72px;
          }
          .admin-brand div, .admin-nav-item span, .admin-sidebar-footer span {
            display: none;
          }
          .admin-brand {
            justify-content: center;
            padding: 1rem 0;
          }
          .admin-nav-item {
            justify-content: center;
            padding: 12px 0;
          }
          .admin-header {
            padding: 0 1rem;
          }
          .admin-content-area {
            padding: 1.25rem;
          }
        }
      `})]})},i1=()=>{const[a,o]=k.useState("admin@doctordiagnostics.com"),[i,c]=k.useState("admin123"),[u,p]=k.useState(!1),[m,f]=k.useState(""),{login:g}=fm(),{addToast:b}=Mt(),x=Lt(),y=async N=>{N.preventDefault(),f(""),p(!0);try{await g(a,i),b("Welcome back, Administrator!","success"),x("/admin")}catch(O){f(O.message||"Invalid email or password")}finally{p(!1)}};return t.jsxs("div",{className:"admin-login-wrapper",children:[t.jsxs("div",{className:"admin-login-card",children:[t.jsxs("div",{className:"login-header",children:[t.jsx("img",{src:"/logo.svg",alt:"Doctor Diagnostics Logo",className:"login-logo"}),t.jsx("h2",{className:"login-title",children:"Staff & Admin Portal"}),t.jsx("p",{className:"login-subtitle",children:"Doctor Diagnostics Center • Trichy"})]}),m&&t.jsxs("div",{className:"login-error-alert",children:[t.jsx(Pa,{size:18}),t.jsx("span",{children:m})]}),t.jsxs("div",{className:"demo-credentials-box",children:[t.jsxs("div",{style:{fontWeight:700,color:"var(--color-primary)",marginBottom:"4px",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Dt,{size:16}),t.jsx("span",{children:"Authorized Access Credentials:"})]}),t.jsxs("div",{style:{fontSize:"0.825rem",color:"var(--color-text-body)"},children:["Email: ",t.jsx("code",{children:"admin@doctordiagnostics.com"}),t.jsx("br",{}),"Password: ",t.jsx("code",{children:"admin123"})]})]}),t.jsxs("form",{onSubmit:y,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Administrator Email"}),t.jsxs("div",{className:"login-input-wrap",children:[t.jsx(Il,{size:18,className:"input-icon"}),t.jsx("input",{type:"email",value:a,onChange:N=>o(N.target.value),placeholder:"admin@doctordiagnostics.com",className:"form-control",style:{paddingLeft:"40px"},required:!0})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Password"}),t.jsxs("div",{className:"login-input-wrap",children:[t.jsx(ro,{size:18,className:"input-icon"}),t.jsx("input",{type:"password",value:i,onChange:N=>c(N.target.value),placeholder:"••••••••",className:"form-control",style:{paddingLeft:"40px"},required:!0})]})]}),t.jsxs("button",{type:"submit",disabled:u,className:"btn btn-primary btn-lg",style:{width:"100%",marginTop:"1rem"},children:[t.jsx("span",{children:u?"Authenticating...":"Sign In to Dashboard"}),t.jsx(Rt,{size:18})]})]}),t.jsx("div",{style:{textAlign:"center",marginTop:"1.5rem"},children:t.jsx("a",{href:"/",style:{fontSize:"0.85rem",color:"var(--color-text-muted)"},children:"← Return to Public Website"})})]}),t.jsx("style",{children:`
        .admin-login-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #0B4778 0%, #072F50 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .admin-login-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          width: 100%;
          max-width: 440px;
          padding: 2.5rem;
        }
        .login-header {
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .login-logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 12px;
        }
        .login-title {
          font-size: 1.45rem;
          color: var(--color-primary-dark);
          margin-bottom: 2px;
        }
        .login-subtitle {
          font-size: 0.85rem;
          color: var(--color-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .login-error-alert {
          background: var(--color-danger-bg);
          border: 1px solid var(--color-danger);
          color: #991B1B;
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .demo-credentials-box {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 1.5rem;
        }
        .login-input-wrap {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }
      `})]})},l1=()=>{const[a,o]=k.useState(null),[i,c]=k.useState(!0),{addToast:u}=Mt(),p=Lt(),m=async()=>{c(!0);try{const f=await ye.get("/admin/metrics");f.data.success&&o(f.data.data)}catch(f){console.error("Error fetching admin metrics:",f),u("Failed to load dashboard metrics","error")}finally{c(!1)}};return k.useEffect(()=>{m()},[]),t.jsxs("div",{className:"admin-dashboard-view",children:[t.jsxs("div",{className:"dashboard-top-row",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.6rem",color:"var(--color-primary-dark)",marginBottom:"4px"},children:"Diagnostic Center Overview"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.9rem"},children:"Live laboratory operational metrics and intake status for Trichy center."})]}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsxs("button",{onClick:m,className:"btn btn-outline btn-sm",children:[t.jsx(po,{size:14,className:i?"spin":""}),t.jsx("span",{children:"Refresh Data"})]}),t.jsxs("button",{onClick:()=>p("/admin/bookings"),className:"btn btn-primary btn-sm",children:[t.jsx(xm,{size:16}),t.jsx("span",{children:"Manage All Bookings"})]})]})]}),t.jsxs("div",{className:"metrics-kpi-grid",children:[t.jsxs("div",{className:"kpi-card",style:{borderLeft:"4px solid var(--color-primary)"},children:[t.jsxs("div",{className:"kpi-header",children:[t.jsx("span",{className:"kpi-label",children:"Today's Appointments"}),t.jsx("div",{className:"kpi-icon-wrap",style:{background:"var(--color-primary-light)"},children:t.jsx(Ft,{size:18,color:"var(--color-primary)"})})]}),t.jsx("div",{className:"kpi-val",children:a?a.todayBookings:"..."}),t.jsx("div",{className:"kpi-note",children:"Scheduled for today's intake"})]}),t.jsxs("div",{className:"kpi-card",style:{borderLeft:"4px solid #F59E0B"},children:[t.jsxs("div",{className:"kpi-header",children:[t.jsx("span",{className:"kpi-label",children:"Pending Verification"}),t.jsx("div",{className:"kpi-icon-wrap",style:{background:"#FEF3C7"},children:t.jsx(bt,{size:18,color:"#D97706"})})]}),t.jsx("div",{className:"kpi-val",style:{color:"#D97706"},children:a?a.pendingBookings:"..."}),t.jsx("div",{className:"kpi-note",children:"Awaiting reception confirmation"})]}),t.jsxs("div",{className:"kpi-card",style:{borderLeft:"4px solid var(--color-secondary)"},children:[t.jsxs("div",{className:"kpi-header",children:[t.jsx("span",{className:"kpi-label",children:"Home Sample Requests"}),t.jsx("div",{className:"kpi-icon-wrap",style:{background:"var(--color-secondary-light)"},children:t.jsx(or,{size:18,color:"var(--color-secondary)"})})]}),t.jsx("div",{className:"kpi-val",style:{color:"var(--color-secondary)"},children:a?a.totalHomeCollections:"..."}),t.jsxs("div",{className:"kpi-note",children:[(a==null?void 0:a.pendingCollections)||0," unassigned pickups"]})]}),t.jsxs("div",{className:"kpi-card",style:{borderLeft:"4px solid var(--color-success)"},children:[t.jsxs("div",{className:"kpi-header",children:[t.jsx("span",{className:"kpi-label",children:"Confirmed Bookings"}),t.jsx("div",{className:"kpi-icon-wrap",style:{background:"var(--color-success-bg)"},children:t.jsx(lt,{size:18,color:"var(--color-success)"})})]}),t.jsx("div",{className:"kpi-val",style:{color:"var(--color-success)"},children:a?a.confirmedBookings:"..."}),t.jsxs("div",{className:"kpi-note",children:["Total bookings: ",(a==null?void 0:a.totalBookings)||0]})]}),t.jsxs("div",{className:"kpi-card",children:[t.jsxs("div",{className:"kpi-header",children:[t.jsx("span",{className:"kpi-label",children:"Active Tests in Catalog"}),t.jsx("div",{className:"kpi-icon-wrap",style:{background:"#F1F5F9"},children:t.jsx(Ml,{size:18,color:"var(--color-primary)"})})]}),t.jsx("div",{className:"kpi-val",children:a?a.activeTestsCount:"..."}),t.jsx("div",{className:"kpi-note",children:"Available for online booking"})]}),t.jsxs("div",{className:"kpi-card",children:[t.jsxs("div",{className:"kpi-header",children:[t.jsx("span",{className:"kpi-label",children:"Active Health Packages"}),t.jsx("div",{className:"kpi-icon-wrap",style:{background:"#F1F5F9"},children:t.jsx(Ul,{size:18,color:"var(--color-secondary)"})})]}),t.jsx("div",{className:"kpi-val",children:a?a.activePackagesCount:"..."}),t.jsx("div",{className:"kpi-note",children:"Preventive health profiles"})]})]}),t.jsxs("div",{className:"dashboard-tables-grid",children:[t.jsxs("div",{className:"card dashboard-table-card",children:[t.jsxs("div",{className:"table-card-header",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"1.15rem",color:"var(--color-primary-dark)"},children:"Recent Appointments"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"var(--color-text-muted)"},children:"Latest online patient bookings"})]}),t.jsxs(Pe,{to:"/admin/bookings",className:"btn btn-outline btn-sm",children:[t.jsx("span",{children:"View All"}),t.jsx(Rt,{size:14})]})]}),t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Ref ID"}),t.jsx("th",{children:"Patient"}),t.jsx("th",{children:"Investigation"}),t.jsx("th",{children:"Date & Slot"}),t.jsx("th",{children:"Status"})]})}),t.jsx("tbody",{children:a!=null&&a.recentBookings&&a.recentBookings.length>0?a.recentBookings.map(f=>t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("strong",{style:{color:"var(--color-primary)",fontSize:"0.85rem"},children:f.bookingReference}),t.jsx("div",{style:{fontSize:"0.72rem",color:"#94A3B8"},children:f.bookingType==="home_collection"?"Home":"Center"})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:600,color:"var(--color-text-main)"},children:f.patientName}),t.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-text-muted)"},children:f.mobileNumber})]}),t.jsx("td",{style:{fontSize:"0.85rem"},children:f.itemName}),t.jsxs("td",{children:[t.jsx("div",{style:{fontSize:"0.825rem",fontWeight:600},children:f.appointmentDate}),t.jsx("div",{style:{fontSize:"0.72rem",color:"var(--color-text-muted)"},children:f.timeSlot})]}),t.jsx("td",{children:t.jsx("span",{className:`badge ${f.status==="confirmed"?"badge-success":f.status==="pending"?"badge-warning":f.status==="completed"?"badge-primary":"badge-danger"}`,children:f.status})})]},f._id)):t.jsx("tr",{children:t.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"1.5rem",color:"#94A3B8"},children:"No recent bookings found."})})})]})})]}),t.jsxs("div",{className:"card dashboard-table-card",children:[t.jsxs("div",{className:"table-card-header",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"1.15rem",color:"var(--color-primary-dark)"},children:"Home Sample Collection Queue"}),t.jsx("p",{style:{fontSize:"0.8rem",color:"var(--color-text-muted)"},children:"Door-step phlebotomy dispatch"})]}),t.jsxs(Pe,{to:"/admin/collections",className:"btn btn-outline btn-sm",children:[t.jsx("span",{children:"View All"}),t.jsx(Rt,{size:14})]})]}),t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Ref ID"}),t.jsx("th",{children:"Patient & Locality"}),t.jsx("th",{children:"Date & Slot"}),t.jsx("th",{children:"Phlebotomist"}),t.jsx("th",{children:"Status"})]})}),t.jsx("tbody",{children:a!=null&&a.recentCollections&&a.recentCollections.length>0?a.recentCollections.map(f=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{style:{color:"var(--color-secondary)",fontSize:"0.85rem"},children:f.referenceNumber})}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:600,color:"var(--color-text-main)"},children:f.patientName}),t.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--color-text-muted)"},children:[f.locality," • ",f.mobileNumber]})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontSize:"0.825rem",fontWeight:600},children:f.preferredDate}),t.jsx("div",{style:{fontSize:"0.72rem",color:"var(--color-text-muted)"},children:f.preferredSlot})]}),t.jsx("td",{style:{fontSize:"0.8rem",color:f.assignedPhlebotomist==="Unassigned"?"#EF4444":"var(--color-primary)",fontWeight:600},children:f.assignedPhlebotomist}),t.jsx("td",{children:t.jsx("span",{className:`badge ${f.status==="confirmed"?"badge-success":f.status==="requested"?"badge-warning":f.status==="completed"?"badge-primary":"badge-secondary"}`,children:f.status})})]},f._id)):t.jsx("tr",{children:t.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"1.5rem",color:"#94A3B8"},children:"No recent home collection requests."})})})]})})]})]}),t.jsx("style",{children:`
        .dashboard-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .metrics-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .kpi-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
        }
        .kpi-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .kpi-label {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .kpi-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kpi-val {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          line-height: 1;
          margin-bottom: 6px;
        }
        .kpi-note {
          font-size: 0.775rem;
          color: var(--color-text-muted);
        }
        .dashboard-tables-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .dashboard-table-card {
          padding: 1.5rem;
        }
        .table-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .admin-table-wrap {
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-table th {
          background: var(--color-bg);
          padding: 8px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
        }
        .admin-table td {
          padding: 10px 12px;
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1200px) {
          .metrics-kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dashboard-tables-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .metrics-kpi-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},c1=()=>{var X;const[a,o]=k.useState([]),[i,c]=k.useState(!0),[u,p]=k.useState("all"),[m,f]=k.useState("all"),[g,b]=k.useState(""),[x,y]=k.useState(null),[N,O]=k.useState("confirmed"),[B,C]=k.useState(""),[A,z]=k.useState(""),[L,U]=k.useState(!1),{addToast:F}=Mt(),q=async()=>{c(!0);try{let K="/bookings?";u!=="all"&&(K+=`status=${u}&`),m!=="all"&&(K+=`bookingType=${m}&`),g&&(K+=`q=${encodeURIComponent(g)}&`);const pe=await ye.get(K);pe.data.success&&o(pe.data.data)}catch(K){console.error("Error fetching bookings:",K),F("Failed to load bookings","error")}finally{c(!1)}};k.useEffect(()=>{q()},[u,m]);const I=K=>{K.preventDefault(),q()},j=K=>{y(K),O(K.status),C(""),z(K.internalNotes||"")},V=async K=>{if(K.preventDefault(),!!x){U(!0);try{(await ye.patch(`/bookings/${x._id}/status`,{status:N,note:B||`Status updated to ${N}`,internalNotes:A})).data.success&&(F("Booking status updated successfully","success"),y(null),q())}catch{F("Failed to update status","error")}finally{U(!1)}}};return t.jsxs("div",{className:"admin-bookings-view",children:[t.jsxs("div",{className:"admin-page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--color-primary-dark)"},children:"Appointment & Booking Management"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Search, verify, reschedule, and track patient laboratory appointments."})]}),t.jsxs("button",{onClick:q,className:"btn btn-outline btn-sm",children:[t.jsx(po,{size:14,className:i?"spin":""}),t.jsx("span",{children:"Refresh"})]})]}),t.jsxs("div",{className:"admin-filter-bar",children:[t.jsxs("form",{onSubmit:I,className:"admin-search-form",children:[t.jsx(Ar,{size:18,className:"search-icon"}),t.jsx("input",{type:"text",value:g,onChange:K=>b(K.target.value),placeholder:"Search by Ref ID, Patient Name, Phone, Test...",className:"admin-search-input"}),t.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Search"})]}),t.jsxs("div",{className:"admin-filter-selects",children:[t.jsxs("select",{value:u,onChange:K=>p(K.target.value),className:"form-control",style:{width:"160px"},children:[t.jsx("option",{value:"all",children:"Status: All"}),t.jsx("option",{value:"pending",children:"Pending"}),t.jsx("option",{value:"confirmed",children:"Confirmed"}),t.jsx("option",{value:"in_progress",children:"In Progress"}),t.jsx("option",{value:"completed",children:"Completed"}),t.jsx("option",{value:"cancelled",children:"Cancelled"})]}),t.jsxs("select",{value:m,onChange:K=>f(K.target.value),className:"form-control",style:{width:"160px"},children:[t.jsx("option",{value:"all",children:"Type: All"}),t.jsx("option",{value:"lab_visit",children:"Center Visit"}),t.jsx("option",{value:"home_collection",children:"Home Collection"})]})]})]}),t.jsx("div",{className:"card",style:{padding:"1rem",overflowX:"auto"},children:t.jsxs("table",{className:"admin-full-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Booking Ref"}),t.jsx("th",{children:"Patient Information"}),t.jsx("th",{children:"Investigation / Package"}),t.jsx("th",{children:"Schedule"}),t.jsx("th",{children:"Type / Locality"}),t.jsx("th",{children:"Amount"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:i?t.jsx("tr",{children:t.jsx("td",{colSpan:"8",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"Loading bookings..."})}):a.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:"8",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"No bookings found matching current filters."})}):a.map(K=>{var pe;return t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("strong",{style:{color:"var(--color-primary)",fontSize:"0.9rem"},children:K.bookingReference}),t.jsx("div",{style:{fontSize:"0.72rem",color:"var(--color-text-muted)"},children:new Date(K.createdAt).toLocaleDateString()})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:700,color:"var(--color-text-main)"},children:K.patientName}),t.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--color-text-muted)"},children:[K.mobileNumber," • ",K.age,"y / ",K.gender]})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:600,fontSize:"0.875rem"},children:K.itemName}),t.jsx("span",{className:"badge badge-primary",style:{fontSize:"0.65rem"},children:K.itemType.toUpperCase()})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem"},children:K.appointmentDate}),t.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-secondary)",fontWeight:600},children:K.timeSlot})]}),t.jsxs("td",{children:[t.jsx("span",{className:`badge ${K.bookingType==="home_collection"?"badge-secondary":"badge-primary"}`,children:K.bookingType==="home_collection"?"Home Sample":"Lab Visit"}),t.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-text-muted)",marginTop:"2px"},children:K.locality})]}),t.jsxs("td",{children:[t.jsxs("strong",{style:{color:"var(--color-primary-dark)"},children:["₹",K.price]}),t.jsx("div",{style:{marginTop:"3px"},children:K.paymentStatus==="paid"?t.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.65rem"},children:["PAID (",((pe=K.paymentMethod)==null?void 0:pe.replace("dummy_","").toUpperCase())||"ONLINE",")"]}):t.jsx("span",{className:"badge badge-warning",style:{fontSize:"0.65rem"},children:"PAY AT LAB"})})]}),t.jsx("td",{children:t.jsx("span",{className:`badge ${K.status==="confirmed"?"badge-success":K.status==="pending"?"badge-warning":K.status==="completed"?"badge-primary":"badge-danger"}`,children:K.status.toUpperCase()})}),t.jsx("td",{children:t.jsxs("button",{onClick:()=>j(K),className:"btn btn-outline btn-sm",title:"Update status & operational notes",children:[t.jsx(Da,{size:14}),t.jsx("span",{children:"Update"})]})})]},K._id)})})]})}),x&&t.jsx("div",{className:"modal-overlay",onClick:()=>y(null),children:t.jsxs("div",{className:"modal-content",onClick:K=>K.stopPropagation(),style:{maxWidth:"520px"},children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{children:[t.jsx("span",{className:"badge badge-primary",children:x.bookingReference}),t.jsx("h3",{style:{marginTop:"4px",color:"var(--color-primary)"},children:"Update Appointment Status"})]}),t.jsx("button",{onClick:()=>y(null),style:{background:"none",border:"none",cursor:"pointer"},children:t.jsx(Vt,{size:20})})]}),t.jsxs("form",{onSubmit:V,children:[t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{style:{background:"var(--color-bg)",padding:"10px 12px",borderRadius:"8px",marginBottom:"1.25rem",fontSize:"0.85rem"},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Patient:"})," ",x.patientName," (",x.mobileNumber,")"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Test:"})," ",x.itemName," (₹",x.price,")"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Slot:"})," ",x.appointmentDate," at ",x.timeSlot]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Payment:"})," ",x.paymentStatus==="paid"?t.jsxs("span",{style:{color:"var(--color-success)",fontWeight:700},children:["PAID ONLINE (",(X=x.paymentMethod)==null?void 0:X.replace("dummy_","").toUpperCase()," • Txn: ",x.transactionId||"DDC-SIM",")"]}):t.jsx("span",{style:{color:"var(--color-warning)",fontWeight:700},children:"PENDING (To be paid at reception / pickup)"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Change Status to:"}),t.jsxs("select",{value:N,onChange:K=>O(K.target.value),className:"form-control",required:!0,children:[t.jsx("option",{value:"pending",children:"Pending"}),t.jsx("option",{value:"confirmed",children:"Confirmed (Slot Reserved)"}),t.jsx("option",{value:"in_progress",children:"In Progress (Sample Processing)"}),t.jsx("option",{value:"completed",children:"Completed (Report Verified)"}),t.jsx("option",{value:"cancelled",children:"Cancelled"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Status History Log Note"}),t.jsx("input",{type:"text",value:B,onChange:K=>C(K.target.value),placeholder:"e.g. Patient called and confirmed arrival time",className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Internal Lab Operational Notes"}),t.jsx("textarea",{value:A,onChange:K=>z(K.target.value),rows:"3",placeholder:"Notes for reception, phlebotomy, or billing...",className:"form-control"})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{type:"button",onClick:()=>y(null),className:"btn btn-outline btn-sm",children:"Cancel"}),t.jsx("button",{type:"submit",disabled:L,className:"btn btn-primary btn-sm",children:L?"Saving...":"Save Status Update"})]})]})]})}),t.jsx("style",{children:`
        .admin-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .admin-filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .admin-search-form {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 4px 6px 4px 12px;
          flex: 1;
          min-width: 280px;
        }
        .admin-search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 6px 8px;
          font-size: 0.9rem;
        }
        .admin-filter-selects {
          display: flex;
          gap: 10px;
        }
        .admin-full-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-full-table th {
          background: var(--color-bg);
          padding: 10px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
          white-space: nowrap;
        }
        .admin-full-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-border-subtle);
          vertical-align: middle;
        }
        .admin-full-table tr:hover {
          background: #F8FAFC;
        }
      `})]})},d1=["All","Thillai Nagar","Cantonment","KK Nagar","Srirangam","Woraiyur","Tennur","TVS Tollgate","Palakkarai","Ponmalai (Golden Rock)","Edamalaipatti Pudur","Crawford","Kattur"],u1=["Unassigned","Senthil Nathan (Phlebotomist)","Ganesh Murugan (Phlebotomist)","Kavitha R. (Phlebotomist)","Manikandan S. (Phlebotomist)"],p1=()=>{const[a,o]=k.useState([]),[i,c]=k.useState(!0),[u,p]=k.useState("all"),[m,f]=k.useState("All"),[g,b]=k.useState(null),[x,y]=k.useState("confirmed"),[N,O]=k.useState("Unassigned"),[B,C]=k.useState(""),[A,z]=k.useState(!1),{addToast:L}=Mt(),U=async()=>{c(!0);try{let I="/home-collections?";u!=="all"&&(I+=`status=${u}&`),m!=="All"&&(I+=`locality=${encodeURIComponent(m)}&`);const j=await ye.get(I);j.data.success&&o(j.data.data)}catch(I){console.error("Error fetching home collections:",I),L("Failed to load home collection requests","error")}finally{c(!1)}};k.useEffect(()=>{U()},[u,m]);const F=I=>{b(I),y(I.status),O(I.assignedPhlebotomist||"Unassigned"),C(I.internalNotes||"")},q=async I=>{if(I.preventDefault(),!!g){z(!0);try{(await ye.patch(`/home-collections/${g._id}/status`,{status:x,assignedPhlebotomist:N,internalNotes:B})).data.success&&(L("Collection request updated successfully","success"),b(null),U())}catch{L("Failed to update request","error")}finally{z(!1)}}};return t.jsxs("div",{className:"admin-collections-view",children:[t.jsxs("div",{className:"admin-page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--color-primary-dark)"},children:"Home Sample Collection Dispatch"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Coordinate door-step phlebotomy visits across Trichy localities."})]}),t.jsxs("button",{onClick:U,className:"btn btn-outline btn-sm",children:[t.jsx(po,{size:14,className:i?"spin":""}),t.jsx("span",{children:"Refresh"})]})]}),t.jsx("div",{className:"admin-filter-bar",children:t.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[t.jsxs("select",{value:u,onChange:I=>p(I.target.value),className:"form-control",style:{width:"180px"},children:[t.jsx("option",{value:"all",children:"Status: All"}),t.jsx("option",{value:"requested",children:"Requested (New)"}),t.jsx("option",{value:"confirmed",children:"Confirmed"}),t.jsx("option",{value:"sample_collected",children:"Sample Collected"}),t.jsx("option",{value:"in_lab",children:"In Lab"}),t.jsx("option",{value:"completed",children:"Completed"}),t.jsx("option",{value:"cancelled",children:"Cancelled"})]}),t.jsx("select",{value:m,onChange:I=>f(I.target.value),className:"form-control",style:{width:"180px"},children:d1.map(I=>t.jsxs("option",{value:I,children:["Locality: ",I]},I))})]})}),t.jsx("div",{className:"card",style:{padding:"1rem",overflowX:"auto"},children:t.jsxs("table",{className:"admin-full-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Reference ID"}),t.jsx("th",{children:"Patient & Contact"}),t.jsx("th",{children:"Pickup Address & Locality"}),t.jsx("th",{children:"Date & Slot"}),t.jsx("th",{children:"Requested Tests"}),t.jsx("th",{children:"Assigned Staff"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Action"})]})}),t.jsx("tbody",{children:i?t.jsx("tr",{children:t.jsx("td",{colSpan:"8",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"Loading home collections..."})}):a.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:"8",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"No collection requests matching current filters."})}):a.map(I=>t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("strong",{style:{color:"var(--color-secondary)",fontSize:"0.9rem"},children:I.referenceNumber}),t.jsx("div",{style:{fontSize:"0.72rem",color:"var(--color-text-muted)"},children:new Date(I.createdAt).toLocaleDateString()})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:700,color:"var(--color-text-main)"},children:I.patientName}),t.jsx("div",{style:{fontSize:"0.78rem",color:"var(--color-text-muted)"},children:I.mobileNumber})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--color-primary)"},children:I.locality}),t.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-text-body)",maxWidth:"240px"},children:I.address})]}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem"},children:I.preferredDate}),t.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-secondary)",fontWeight:600},children:I.preferredSlot})]}),t.jsx("td",{children:t.jsx("div",{style:{fontSize:"0.8rem",color:"var(--color-text-body)"},children:I.selectedTests?I.selectedTests.join(", "):"Tests requested"})}),t.jsx("td",{children:t.jsx("span",{style:{fontWeight:600,fontSize:"0.825rem",color:I.assignedPhlebotomist==="Unassigned"?"#EF4444":"var(--color-primary)"},children:I.assignedPhlebotomist})}),t.jsx("td",{children:t.jsx("span",{className:`badge ${I.status==="confirmed"?"badge-success":I.status==="requested"?"badge-warning":I.status==="completed"?"badge-primary":"badge-secondary"}`,children:I.status.toUpperCase()})}),t.jsx("td",{children:t.jsxs("button",{onClick:()=>F(I),className:"btn btn-outline btn-sm",children:[t.jsx(Da,{size:14}),t.jsx("span",{children:"Dispatch"})]})})]},I._id))})]})}),g&&t.jsx("div",{className:"modal-overlay",onClick:()=>b(null),children:t.jsxs("div",{className:"modal-content",onClick:I=>I.stopPropagation(),style:{maxWidth:"520px"},children:[t.jsxs("div",{className:"modal-header",children:[t.jsxs("div",{children:[t.jsx("span",{className:"badge badge-secondary",children:g.referenceNumber}),t.jsx("h3",{style:{marginTop:"4px",color:"var(--color-primary)"},children:"Dispatch Phlebotomist & Status"})]}),t.jsx("button",{onClick:()=>b(null),style:{background:"none",border:"none",cursor:"pointer"},children:t.jsx(Vt,{size:20})})]}),t.jsxs("form",{onSubmit:q,children:[t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{style:{background:"var(--color-bg)",padding:"10px 12px",borderRadius:"8px",marginBottom:"1.25rem",fontSize:"0.85rem"},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Patient:"})," ",g.patientName," (",g.mobileNumber,")"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Locality:"})," ",g.locality]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Address:"})," ",g.address]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Pickup:"})," ",g.preferredDate," (",g.preferredSlot,")"]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Assign Phlebotomist Staff:"}),t.jsx("select",{value:N,onChange:I=>O(I.target.value),className:"form-control",required:!0,children:u1.map(I=>t.jsx("option",{value:I,children:I},I))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Update Operational Status:"}),t.jsxs("select",{value:x,onChange:I=>y(I.target.value),className:"form-control",required:!0,children:[t.jsx("option",{value:"requested",children:"Requested"}),t.jsx("option",{value:"confirmed",children:"Confirmed"}),t.jsx("option",{value:"sample_collected",children:"Sample Collected"}),t.jsx("option",{value:"in_lab",children:"In Lab (Testing)"}),t.jsx("option",{value:"completed",children:"Completed"}),t.jsx("option",{value:"cancelled",children:"Cancelled"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Internal Phlebotomy / Route Notes"}),t.jsx("textarea",{value:B,onChange:I=>C(I.target.value),rows:"2",placeholder:"e.g. Call patient 15 minutes ahead. Pre-label vacutainers with barcode.",className:"form-control"})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{type:"button",onClick:()=>b(null),className:"btn btn-outline btn-sm",children:"Cancel"}),t.jsx("button",{type:"submit",disabled:A,className:"btn btn-secondary btn-sm",children:A?"Updating...":"Save Dispatch Updates"})]})]})]})}),t.jsx("style",{children:`
        .admin-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .admin-filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .admin-full-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-full-table th {
          background: var(--color-bg);
          padding: 10px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
          white-space: nowrap;
        }
        .admin-full-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-border-subtle);
          vertical-align: middle;
        }
        .admin-full-table tr:hover {
          background: #F8FAFC;
        }
      `})]})},xp=["Hematology","Biochemistry","Diabetes Care","Endocrinology","Cardiology","Radiology","Immunology","Clinical Pathology","Serology & Infectious"],yp={code:"",name:"",category:"Hematology",sampleType:"EDTA Blood (2 ml)",fastingRequired:!1,fastingHours:0,tatHours:4,price:500,mrp:650,description:"",preparation:"No specific preparation needed.",isActive:!0,isPopular:!1,homeCollectionAvailable:!0},m1=()=>{const[a,o]=k.useState([]),[i,c]=k.useState(!0),[u,p]=k.useState("All"),[m,f]=k.useState(""),[g,b]=k.useState(!1),[x,y]=k.useState(null),[N,O]=k.useState(yp),[B,C]=k.useState(!1),{addToast:A}=Mt(),z=async()=>{c(!0);try{const j=await ye.get("/tests");j.data.success&&o(j.data.data)}catch(j){console.error("Error fetching tests:",j),A("Failed to load tests catalog","error")}finally{c(!1)}};k.useEffect(()=>{z()},[]);const L=()=>{y(null),O(yp),b(!0)},U=j=>{y(j._id),O({code:j.code,name:j.name,category:j.category,sampleType:j.sampleType,fastingRequired:j.fastingRequired||!1,fastingHours:j.fastingHours||0,tatHours:j.tatHours||4,price:j.price,mrp:j.mrp,description:j.description||"",preparation:j.preparation||"",isActive:j.isActive!==!1,isPopular:j.isPopular||!1,homeCollectionAvailable:j.homeCollectionAvailable!==!1}),b(!0)},F=async(j,V)=>{if(window.confirm(`Are you sure you want to delete test "${V}"?`))try{(await ye.delete(`/tests/${j}`)).data.success&&(A("Test deleted successfully","success"),z())}catch{A("Failed to delete test","error")}},q=async j=>{var V,X;if(j.preventDefault(),!N.name.trim()||!N.code.trim()){A("Test name and code are required","error");return}C(!0);try{x?(await ye.put(`/tests/${x}`,N)).data.success&&(A("Test updated successfully","success"),b(!1),z()):(await ye.post("/tests",N)).data.success&&(A("New test created successfully","success"),b(!1),z())}catch(K){const pe=((X=(V=K.response)==null?void 0:V.data)==null?void 0:X.message)||"Failed to save test";A(pe,"error")}finally{C(!1)}},I=a.filter(j=>{const V=u==="All"||j.category.toLowerCase()===u.toLowerCase(),X=m===""||j.name.toLowerCase().includes(m.toLowerCase())||j.code.toLowerCase().includes(m.toLowerCase());return V&&X});return t.jsxs("div",{className:"admin-tests-view",children:[t.jsxs("div",{className:"admin-page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--color-primary-dark)"},children:"Diagnostic Tests Catalog Management"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Add, update pricing, specimen protocols, and manage laboratory tests."})]}),t.jsxs("button",{onClick:L,className:"btn btn-primary btn-sm",children:[t.jsx(jm,{size:16}),t.jsx("span",{children:"Add New Test"})]})]}),t.jsx("div",{className:"admin-filter-bar",children:t.jsxs("div",{style:{display:"flex",gap:"10px",flex:1,minWidth:"280px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#fff",border:"1px solid var(--color-border)",borderRadius:"8px",padding:"4px 10px",flex:1},children:[t.jsx(Ar,{size:16,color:"#94A3B8"}),t.jsx("input",{type:"text",value:m,onChange:j=>f(j.target.value),placeholder:"Search tests...",style:{border:"none",outline:"none",paddingLeft:"8px",width:"100%",fontSize:"0.9rem"}})]}),t.jsxs("select",{value:u,onChange:j=>p(j.target.value),className:"form-control",style:{width:"180px"},children:[t.jsx("option",{value:"All",children:"Category: All"}),xp.map(j=>t.jsx("option",{value:j,children:j},j))]})]})}),t.jsx("div",{className:"card",style:{padding:"1rem",overflowX:"auto"},children:t.jsxs("table",{className:"admin-full-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Test Code"}),t.jsx("th",{children:"Test Name"}),t.jsx("th",{children:"Department"}),t.jsx("th",{children:"Specimen"}),t.jsx("th",{children:"Fasting"}),t.jsx("th",{children:"TAT"}),t.jsx("th",{children:"Price / MRP"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:i?t.jsx("tr",{children:t.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"Loading tests..."})}):I.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:"9",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"No tests found."})}):I.map(j=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{style:{color:"var(--color-primary)"},children:j.code})}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:700,color:"var(--color-text-main)"},children:j.name}),t.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--color-text-muted)"},children:[j.isPopular&&t.jsx("span",{className:"badge badge-secondary",style:{fontSize:"0.65rem",marginRight:"4px"},children:"Popular"}),j.homeCollectionAvailable?"Home Pickup":"Lab Only"]})]}),t.jsx("td",{children:j.category}),t.jsx("td",{style:{fontSize:"0.8rem"},children:j.sampleType}),t.jsx("td",{children:j.fastingRequired?t.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.7rem"},children:[j.fastingHours,"h Fasting"]}):t.jsx("span",{style:{color:"var(--color-text-muted)",fontSize:"0.8rem"},children:"None"})}),t.jsxs("td",{children:[j.tatHours," hrs"]}),t.jsxs("td",{children:[t.jsxs("strong",{style:{color:"var(--color-primary-dark)"},children:["₹",j.price]}),t.jsxs("span",{style:{fontSize:"0.75rem",color:"#94A3B8",marginLeft:"4px",textDecoration:"line-through"},children:["₹",j.mrp]})]}),t.jsx("td",{children:t.jsx("span",{className:`badge ${j.isActive?"badge-success":"badge-danger"}`,children:j.isActive?"Active":"Inactive"})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",gap:"6px"},children:[t.jsx("button",{onClick:()=>U(j),className:"btn btn-outline btn-sm",title:"Edit Test",children:t.jsx(Da,{size:14})}),t.jsx("button",{onClick:()=>F(j._id,j.name),className:"btn btn-sm",style:{background:"var(--color-danger-bg)",color:"var(--color-danger)",border:"1px solid rgba(239, 68, 68, 0.3)"},title:"Delete Test",children:t.jsx(km,{size:14})})]})})]},j._id))})]})}),g&&t.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:t.jsxs("div",{className:"modal-content",onClick:j=>j.stopPropagation(),style:{maxWidth:"640px"},children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{style:{color:"var(--color-primary)"},children:x?"Edit Diagnostic Test":"Add New Diagnostic Test"}),t.jsx("button",{onClick:()=>b(!1),style:{background:"none",border:"none",cursor:"pointer"},children:t.jsx(Vt,{size:20})})]}),t.jsxs("form",{onSubmit:q,children:[t.jsxs("div",{className:"modal-body",style:{maxHeight:"70vh",overflowY:"auto"},children:[t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",style:{flex:1},children:[t.jsx("label",{className:"form-label",children:"Test Code *"}),t.jsx("input",{type:"text",value:N.code,onChange:j=>O({...N,code:j.target.value.toUpperCase()}),placeholder:"e.g. DDC-BIO-08",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",style:{flex:2},children:[t.jsx("label",{className:"form-label",children:"Test Full Name *"}),t.jsx("input",{type:"text",value:N.name,onChange:j=>O({...N,name:j.target.value}),placeholder:"e.g. Serum Ferritin",className:"form-control",required:!0})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Department *"}),t.jsx("select",{value:N.category,onChange:j=>O({...N,category:j.target.value}),className:"form-control",required:!0,children:xp.map(j=>t.jsx("option",{value:j,children:j},j))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Specimen / Sample Type *"}),t.jsx("input",{type:"text",value:N.sampleType,onChange:j=>O({...N,sampleType:j.target.value}),placeholder:"e.g. Serum Blood / Spot Urine",className:"form-control",required:!0})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Special Offer Price (₹) *"}),t.jsx("input",{type:"number",value:N.price,onChange:j=>O({...N,price:Number(j.target.value)}),className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Standard MRP (₹) *"}),t.jsx("input",{type:"number",value:N.mrp,onChange:j=>O({...N,mrp:Number(j.target.value)}),className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"TAT (Hours)"}),t.jsx("input",{type:"number",value:N.tatHours,onChange:j=>O({...N,tatHours:Number(j.target.value)}),className:"form-control"})]})]}),t.jsxs("div",{className:"form-row",style:{alignItems:"center"},children:[t.jsx("div",{className:"form-group",children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.85rem"},children:[t.jsx("input",{type:"checkbox",checked:N.fastingRequired,onChange:j=>O({...N,fastingRequired:j.target.checked})}),t.jsx("span",{children:"Fasting Required"})]})}),N.fastingRequired&&t.jsxs("div",{className:"form-group",style:{flex:1},children:[t.jsx("label",{className:"form-label",children:"Fasting Hours"}),t.jsx("input",{type:"number",value:N.fastingHours,onChange:j=>O({...N,fastingHours:Number(j.target.value)}),className:"form-control"})]}),t.jsx("div",{className:"form-group",children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.85rem"},children:[t.jsx("input",{type:"checkbox",checked:N.isPopular,onChange:j=>O({...N,isPopular:j.target.checked})}),t.jsx("span",{children:"Popular Test"})]})}),t.jsx("div",{className:"form-group",children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.85rem"},children:[t.jsx("input",{type:"checkbox",checked:N.isActive,onChange:j=>O({...N,isActive:j.target.checked})}),t.jsx("span",{children:"Active in Catalog"})]})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Clinical Description"}),t.jsx("textarea",{value:N.description,onChange:j=>O({...N,description:j.target.value}),rows:"2",placeholder:"Short description of what the test measures...",className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Preparation Guidelines"}),t.jsx("input",{type:"text",value:N.preparation,onChange:j=>O({...N,preparation:j.target.value}),placeholder:"e.g. 10-12 hours overnight fasting. Water allowed.",className:"form-control"})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{type:"button",onClick:()=>b(!1),className:"btn btn-outline btn-sm",children:"Cancel"}),t.jsx("button",{type:"submit",disabled:B,className:"btn btn-primary btn-sm",children:B?"Saving...":"Save Test"})]})]})]})}),t.jsx("style",{children:`
        .admin-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .admin-filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .admin-full-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-full-table th {
          background: var(--color-bg);
          padding: 10px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
          white-space: nowrap;
        }
        .admin-full-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-border-subtle);
          vertical-align: middle;
        }
        .admin-full-table tr:hover {
          background: #F8FAFC;
        }
      `})]})},yl={code:"",name:"",description:"",targetAudience:"Adults aged 25+",price:1999,mrp:3800,includedTests:["Complete Blood Count (CBC with ESR)","Fasting Blood Sugar (FBS)","Lipid Profile Comprehensive","Liver Function Test (LFT)","Renal Function Test (RFT)","Thyroid Profile (TSH)","Urine Routine"],fastingRequired:!0,fastingHours:10,preparation:"10 to 12 hours overnight fasting. Water allowed.",isPopular:!0,isActive:!0,homeCollectionAvailable:!0},f1=()=>{const[a,o]=k.useState([]),[i,c]=k.useState(!0),[u,p]=k.useState(""),[m,f]=k.useState(!1),[g,b]=k.useState(null),[x,y]=k.useState(yl),[N,O]=k.useState(""),[B,C]=k.useState(!1),{addToast:A}=Mt(),z=async()=>{c(!0);try{const j=await ye.get("/packages");j.data.success&&o(j.data.data)}catch(j){console.error("Error fetching packages:",j),A("Failed to load packages","error")}finally{c(!1)}};k.useEffect(()=>{z()},[]);const L=()=>{b(null),y(yl),O(yl.includedTests.join(`
`)),f(!0)},U=j=>{b(j._id),y({code:j.code,name:j.name,description:j.description||"",targetAudience:j.targetAudience||"All Adults",price:j.price,mrp:j.mrp,includedTests:j.includedTests||[],fastingRequired:j.fastingRequired!==!1,fastingHours:j.fastingHours||10,preparation:j.preparation||"",isPopular:j.isPopular||!1,isActive:j.isActive!==!1,homeCollectionAvailable:j.homeCollectionAvailable!==!1}),O((j.includedTests||[]).join(`
`)),f(!0)},F=async(j,V)=>{if(window.confirm(`Are you sure you want to delete package "${V}"?`))try{(await ye.delete(`/packages/${j}`)).data.success&&(A("Package deleted successfully","success"),z())}catch{A("Failed to delete package","error")}},q=async j=>{var K,pe;if(j.preventDefault(),!x.name.trim()||!x.code.trim()){A("Package name and code are required","error");return}const V=N.split(`
`).map(Ne=>Ne.trim()).filter(Ne=>Ne.length>0),X={...x,includedTests:V,totalTestsCount:V.length};C(!0);try{g?(await ye.put(`/packages/${g}`,X)).data.success&&(A("Package updated successfully","success"),f(!1),z()):(await ye.post("/packages",X)).data.success&&(A("Package created successfully","success"),f(!1),z())}catch(Ne){const De=((pe=(K=Ne.response)==null?void 0:K.data)==null?void 0:pe.message)||"Failed to save package";A(De,"error")}finally{C(!1)}},I=a.filter(j=>u===""||j.name.toLowerCase().includes(u.toLowerCase())||j.code.toLowerCase().includes(u.toLowerCase()));return t.jsxs("div",{className:"admin-packages-view",children:[t.jsxs("div",{className:"admin-page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--color-primary-dark)"},children:"Health Packages Management"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Configure preventive health checkup packages, pricing, discounts, and included tests."})]}),t.jsxs("button",{onClick:L,className:"btn btn-primary btn-sm",children:[t.jsx(jm,{size:16}),t.jsx("span",{children:"Add New Package"})]})]}),t.jsx("div",{className:"admin-filter-bar",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#fff",border:"1px solid var(--color-border)",borderRadius:"8px",padding:"4px 10px",width:"320px"},children:[t.jsx(Ar,{size:16,color:"#94A3B8"}),t.jsx("input",{type:"text",value:u,onChange:j=>p(j.target.value),placeholder:"Search health packages...",style:{border:"none",outline:"none",paddingLeft:"8px",width:"100%",fontSize:"0.9rem"}})]})}),t.jsx("div",{className:"card",style:{padding:"1rem",overflowX:"auto"},children:t.jsxs("table",{className:"admin-full-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Code"}),t.jsx("th",{children:"Package Name"}),t.jsx("th",{children:"Target Audience"}),t.jsx("th",{children:"Tests Included"}),t.jsx("th",{children:"Price / MRP"}),t.jsx("th",{children:"Discount"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:i?t.jsx("tr",{children:t.jsx("td",{colSpan:"8",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"Loading packages..."})}):I.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:"8",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"No packages found."})}):I.map(j=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{style:{color:"var(--color-primary)"},children:j.code})}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:700,color:"var(--color-text-main)"},children:j.name}),t.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--color-text-muted)"},children:[j.isPopular&&t.jsx("span",{className:"badge badge-secondary",style:{fontSize:"0.65rem",marginRight:"4px"},children:"Popular"}),j.homeCollectionAvailable?"Home Collection Available":"Lab Only"]})]}),t.jsx("td",{children:j.targetAudience}),t.jsx("td",{children:t.jsxs("span",{className:"badge badge-primary",children:[j.totalTestsCount||j.includedTests.length," Tests"]})}),t.jsxs("td",{children:[t.jsxs("strong",{style:{color:"var(--color-primary-dark)"},children:["₹",j.price]}),t.jsxs("span",{style:{fontSize:"0.75rem",color:"#94A3B8",marginLeft:"4px",textDecoration:"line-through"},children:["₹",j.mrp]})]}),t.jsx("td",{children:j.discountPercentage>0?t.jsxs("span",{className:"badge badge-success",children:["Save ",j.discountPercentage,"%"]}):"—"}),t.jsx("td",{children:t.jsx("span",{className:`badge ${j.isActive?"badge-success":"badge-danger"}`,children:j.isActive?"Active":"Inactive"})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",gap:"6px"},children:[t.jsx("button",{onClick:()=>U(j),className:"btn btn-outline btn-sm",title:"Edit Package",children:t.jsx(Da,{size:14})}),t.jsx("button",{onClick:()=>F(j._id,j.name),className:"btn btn-sm",style:{background:"var(--color-danger-bg)",color:"var(--color-danger)",border:"1px solid rgba(239, 68, 68, 0.3)"},title:"Delete Package",children:t.jsx(km,{size:14})})]})})]},j._id))})]})}),m&&t.jsx("div",{className:"modal-overlay",onClick:()=>f(!1),children:t.jsxs("div",{className:"modal-content",onClick:j=>j.stopPropagation(),style:{maxWidth:"640px"},children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{style:{color:"var(--color-primary)"},children:g?"Edit Health Package":"Create New Health Package"}),t.jsx("button",{onClick:()=>f(!1),style:{background:"none",border:"none",cursor:"pointer"},children:t.jsx(Vt,{size:20})})]}),t.jsxs("form",{onSubmit:q,children:[t.jsxs("div",{className:"modal-body",style:{maxHeight:"70vh",overflowY:"auto"},children:[t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",style:{flex:1},children:[t.jsx("label",{className:"form-label",children:"Package Code *"}),t.jsx("input",{type:"text",value:x.code,onChange:j=>y({...x,code:j.target.value.toUpperCase()}),placeholder:"e.g. PKG-MHC-02",className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",style:{flex:2},children:[t.jsx("label",{className:"form-label",children:"Package Name *"}),t.jsx("input",{type:"text",value:x.name,onChange:j=>y({...x,name:j.target.value}),placeholder:"e.g. Senior Citizen Wellness Profile",className:"form-control",required:!0})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Target Audience"}),t.jsx("input",{type:"text",value:x.targetAudience,onChange:j=>y({...x,targetAudience:j.target.value}),placeholder:"e.g. Senior Citizens (Men & Women 55+)",className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Offer Price (₹) *"}),t.jsx("input",{type:"number",value:x.price,onChange:j=>y({...x,price:Number(j.target.value)}),className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Total MRP (₹) *"}),t.jsx("input",{type:"number",value:x.mrp,onChange:j=>y({...x,mrp:Number(j.target.value)}),className:"form-control",required:!0})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Included Tests (Enter one test per line) *"}),t.jsx("textarea",{value:N,onChange:j=>O(j.target.value),rows:"6",placeholder:`Complete Blood Count (CBC with ESR)
Fasting Blood Sugar
Lipid Profile
Liver Function Test...`,className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Preparation Guidelines"}),t.jsx("input",{type:"text",value:x.preparation,onChange:j=>y({...x,preparation:j.target.value}),placeholder:"e.g. 10 to 12 hours overnight fasting. Water permitted.",className:"form-control"})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("div",{className:"form-group",children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.85rem"},children:[t.jsx("input",{type:"checkbox",checked:x.isPopular,onChange:j=>y({...x,isPopular:j.target.checked})}),t.jsx("span",{children:"Featured / Popular Package"})]})}),t.jsx("div",{className:"form-group",children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.85rem"},children:[t.jsx("input",{type:"checkbox",checked:x.isActive,onChange:j=>y({...x,isActive:j.target.checked})}),t.jsx("span",{children:"Active in Catalog"})]})})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{type:"button",onClick:()=>f(!1),className:"btn btn-outline btn-sm",children:"Cancel"}),t.jsx("button",{type:"submit",disabled:B,className:"btn btn-primary btn-sm",children:B?"Saving...":"Save Package"})]})]})]})}),t.jsx("style",{children:`
        .admin-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .admin-filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .admin-full-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-full-table th {
          background: var(--color-bg);
          padding: 10px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
          white-space: nowrap;
        }
        .admin-full-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-border-subtle);
          vertical-align: middle;
        }
        .admin-full-table tr:hover {
          background: #F8FAFC;
        }
      `})]})},h1=()=>{const[a,o]=k.useState([]),[i,c]=k.useState(!0),[u,p]=k.useState("all"),[m,f]=k.useState(""),[g,b]=k.useState(null),[x,y]=k.useState("in_progress"),[N,O]=k.useState(""),[B,C]=k.useState(!1),{addToast:A}=Mt(),z=async()=>{c(!0);try{let F="/enquiries?";u!=="all"&&(F+=`status=${u}&`),m&&(F+=`q=${encodeURIComponent(m)}&`);const q=await ye.get(F);q.data.success&&o(q.data.data)}catch(F){console.error("Error fetching enquiries:",F),A("Failed to load enquiries","error")}finally{c(!1)}};k.useEffect(()=>{z()},[u]);const L=F=>{b(F),y(F.status),O(F.internalNotes||"")},U=async F=>{if(F.preventDefault(),!!g){C(!0);try{(await ye.patch(`/enquiries/${g._id}/status`,{status:x,internalNotes:N})).data.success&&(A("Enquiry status updated successfully","success"),b(null),z())}catch{A("Failed to update enquiry status","error")}finally{C(!1)}}};return t.jsxs("div",{className:"admin-enquiries-view",children:[t.jsxs("div",{className:"admin-page-header",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--color-primary-dark)"},children:"Patient & Corporate Enquiries"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Follow up on customer inquiries, home collection requests, and corporate camp proposals."})]}),t.jsxs("button",{onClick:z,className:"btn btn-outline btn-sm",children:[t.jsx(po,{size:14,className:i?"spin":""}),t.jsx("span",{children:"Refresh"})]})]}),t.jsx("div",{className:"admin-filter-bar",children:t.jsx("div",{style:{display:"flex",gap:"10px"},children:t.jsxs("select",{value:u,onChange:F=>p(F.target.value),className:"form-control",style:{width:"180px"},children:[t.jsx("option",{value:"all",children:"Status: All"}),t.jsx("option",{value:"new",children:"New"}),t.jsx("option",{value:"in_progress",children:"In Progress"}),t.jsx("option",{value:"resolved",children:"Resolved"}),t.jsx("option",{value:"closed",children:"Closed"})]})})}),t.jsx("div",{className:"card",style:{padding:"1rem",overflowX:"auto"},children:t.jsxs("table",{className:"admin-full-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Date"}),t.jsx("th",{children:"Contact Name"}),t.jsx("th",{children:"Phone / Email"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Subject & Message"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Action"})]})}),t.jsx("tbody",{children:i?t.jsx("tr",{children:t.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"Loading enquiries..."})}):a.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"3rem",color:"#94A3B8"},children:"No enquiries found."})}):a.map(F=>t.jsxs("tr",{children:[t.jsx("td",{style:{fontSize:"0.8rem",color:"var(--color-text-muted)",whiteSpace:"nowrap"},children:new Date(F.createdAt).toLocaleDateString()}),t.jsx("td",{children:t.jsx("strong",{style:{color:"var(--color-text-main)"},children:F.name})}),t.jsxs("td",{children:[t.jsx("div",{children:t.jsx("a",{href:`tel:${F.phone}`,children:F.phone})}),F.email&&t.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-text-muted)"},children:F.email})]}),t.jsx("td",{children:t.jsx("span",{className:"badge badge-primary",style:{fontSize:"0.7rem"},children:F.enquiryType})}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:600,fontSize:"0.85rem",color:"var(--color-primary)"},children:F.subject}),t.jsx("div",{style:{fontSize:"0.8rem",color:"var(--color-text-muted)",maxWidth:"300px"},children:F.message})]}),t.jsx("td",{children:t.jsx("span",{className:`badge ${F.status==="resolved"?"badge-success":F.status==="new"?"badge-warning":F.status==="in_progress"?"badge-primary":"badge-danger"}`,children:F.status.toUpperCase()})}),t.jsx("td",{children:t.jsxs("button",{onClick:()=>L(F),className:"btn btn-outline btn-sm",children:[t.jsx(Da,{size:14}),t.jsx("span",{children:"Respond"})]})})]},F._id))})]})}),g&&t.jsx("div",{className:"modal-overlay",onClick:()=>b(null),children:t.jsxs("div",{className:"modal-content",onClick:F=>F.stopPropagation(),style:{maxWidth:"520px"},children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{style:{color:"var(--color-primary)"},children:"Update Enquiry Status"}),t.jsx("button",{onClick:()=>b(null),style:{background:"none",border:"none",cursor:"pointer"},children:t.jsx(Vt,{size:20})})]}),t.jsxs("form",{onSubmit:U,children:[t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{style:{background:"var(--color-bg)",padding:"12px",borderRadius:"8px",marginBottom:"1.25rem",fontSize:"0.875rem"},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"From:"})," ",g.name," (",g.phone,")"]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Subject:"})," ",g.subject]}),t.jsxs("div",{style:{marginTop:"6px",color:"var(--color-text-muted)"},children:['"',g.message,'"']})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Status"}),t.jsxs("select",{value:x,onChange:F=>y(F.target.value),className:"form-control",required:!0,children:[t.jsx("option",{value:"new",children:"New"}),t.jsx("option",{value:"in_progress",children:"In Progress (Staff following up)"}),t.jsx("option",{value:"resolved",children:"Resolved"}),t.jsx("option",{value:"closed",children:"Closed"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Staff Notes / Action Taken"}),t.jsx("textarea",{value:N,onChange:F=>O(F.target.value),rows:"3",placeholder:"e.g. Spoke to client on phone, shared corporate checkup tariff via WhatsApp.",className:"form-control"})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{type:"button",onClick:()=>b(null),className:"btn btn-outline btn-sm",children:"Cancel"}),t.jsx("button",{type:"submit",disabled:B,className:"btn btn-primary btn-sm",children:B?"Updating...":"Save Updates"})]})]})]})}),t.jsx("style",{children:`
        .admin-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .admin-filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .admin-full-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-full-table th {
          background: var(--color-bg);
          padding: 10px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
          white-space: nowrap;
        }
        .admin-full-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-border-subtle);
          vertical-align: middle;
        }
        .admin-full-table tr:hover {
          background: #F8FAFC;
        }
      `})]})},g1=()=>{const[a,o]=k.useState({centerName:"",tagline:"",address:"",phone:"",altPhone:"",whatsappNumber:"",email:"",workingHours:"",homeCollectionHours:"",noticeBanner:"",maxSlotCapacity:5}),[i,c]=k.useState(!0),[u,p]=k.useState(!1),{addToast:m}=Mt();k.useEffect(()=>{(async()=>{try{const x=await ye.get("/settings");x.data.success&&x.data.data&&o(x.data.data)}catch(x){console.error("Error fetching settings:",x)}finally{c(!1)}})()},[]);const f=b=>{const{name:x,value:y}=b.target;o(N=>({...N,[x]:y}))},g=async b=>{b.preventDefault(),p(!0);try{(await ye.put("/settings",a)).data.success&&m("Center settings saved successfully!","success")}catch{m("Failed to save settings","error")}finally{p(!1)}};return i?t.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:"Loading settings..."}):t.jsxs("div",{className:"admin-settings-view",children:[t.jsx("div",{className:"admin-page-header",children:t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--color-primary-dark)"},children:"Business & Center Settings"}),t.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Configure center contact details, WhatsApp integration number, hours, and booking capacity."})]})}),t.jsx("div",{className:"card",style:{padding:"2.5rem",maxWidth:"820px"},children:t.jsxs("form",{onSubmit:g,children:[t.jsx("h3",{style:{fontSize:"1.15rem",color:"var(--color-primary)",marginBottom:"1.25rem",borderBottom:"1px solid var(--color-border)",paddingBottom:"8px"},children:"1. Brand & Identity"}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Center Name"}),t.jsx("input",{type:"text",name:"centerName",value:a.centerName||"",onChange:f,className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Center Tagline"}),t.jsx("input",{type:"text",name:"tagline",value:a.tagline||"",onChange:f,className:"form-control"})]})]}),t.jsx("h3",{style:{fontSize:"1.15rem",color:"var(--color-primary)",margin:"1.5rem 0 1.25rem",borderBottom:"1px solid var(--color-border)",paddingBottom:"8px"},children:"2. Contact & WhatsApp Integration"}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Primary Mobile / Helpdesk"}),t.jsx("input",{type:"text",name:"phone",value:a.phone||"",onChange:f,className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Landline Lab Number"}),t.jsx("input",{type:"text",name:"altPhone",value:a.altPhone||"",onChange:f,className:"form-control"})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"WhatsApp Business Number (with country code, e.g. 919443152200)"}),t.jsx("input",{type:"text",name:"whatsappNumber",value:a.whatsappNumber||"",onChange:f,className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Official Support Email"}),t.jsx("input",{type:"email",name:"email",value:a.email||"",onChange:f,className:"form-control"})]})]}),t.jsx("h3",{style:{fontSize:"1.15rem",color:"var(--color-primary)",margin:"1.5rem 0 1.25rem",borderBottom:"1px solid var(--color-border)",paddingBottom:"8px"},children:"3. Address & Operating Hours"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Laboratory Address in Trichy"}),t.jsx("input",{type:"text",name:"address",value:a.address||"",onChange:f,className:"form-control",required:!0})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Center Operating Hours"}),t.jsx("input",{type:"text",name:"workingHours",value:a.workingHours||"",onChange:f,className:"form-control"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Home Sample Collection Hours"}),t.jsx("input",{type:"text",name:"homeCollectionHours",value:a.homeCollectionHours||"",onChange:f,className:"form-control"})]})]}),t.jsx("h3",{style:{fontSize:"1.15rem",color:"var(--color-primary)",margin:"1.5rem 0 1.25rem",borderBottom:"1px solid var(--color-border)",paddingBottom:"8px"},children:"4. Capacity & Public Notices"}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",style:{flex:1},children:[t.jsx("label",{className:"form-label",children:"Max Slot Capacity (Concurrent Bookings)"}),t.jsx("input",{type:"number",name:"maxSlotCapacity",value:a.maxSlotCapacity||5,onChange:f,className:"form-control",min:"1",max:"50",required:!0})]}),t.jsxs("div",{className:"form-group",style:{flex:2},children:[t.jsx("label",{className:"form-label",children:"Notice Banner Announcement"}),t.jsx("input",{type:"text",name:"noticeBanner",value:a.noticeBanner||"",onChange:f,className:"form-control"})]})]}),t.jsx("div",{style:{marginTop:"2.5rem",borderTop:"1px solid var(--color-border)",paddingTop:"1.5rem"},children:t.jsxs("button",{type:"submit",disabled:u,className:"btn btn-primary btn-lg",children:[t.jsx(n0,{size:18}),t.jsx("span",{children:u?"Saving Changes...":"Save Center Settings"})]})})]})})]})};function x1(){const o=Zr().pathname.startsWith("/admin"),[i,c]=k.useState(!1);return t.jsxs("div",{className:"app-main-wrapper",children:[!o&&t.jsx(N0,{onOpenBooking:()=>c(!0)}),t.jsx("div",{className:"page-wrapper",children:t.jsxs(wg,{children:[t.jsx($e,{path:"/",element:t.jsx(W0,{})}),t.jsx($e,{path:"/tests",element:t.jsx(Q0,{})}),t.jsx($e,{path:"/packages",element:t.jsx(K0,{})}),t.jsx($e,{path:"/services",element:t.jsx(Y0,{})}),t.jsx($e,{path:"/home-collection",element:t.jsx(Z0,{})}),t.jsx($e,{path:"/check-status",element:t.jsx(t1,{})}),t.jsx($e,{path:"/about",element:t.jsx(r1,{})}),t.jsx($e,{path:"/contact",element:t.jsx(a1,{})}),t.jsx($e,{path:"/book",element:t.jsx(s1,{})}),t.jsx($e,{path:"/admin/login",element:t.jsx(i1,{})}),t.jsxs($e,{path:"/admin",element:t.jsx(o1,{}),children:[t.jsx($e,{index:!0,element:t.jsx(l1,{})}),t.jsx($e,{path:"bookings",element:t.jsx(c1,{})}),t.jsx($e,{path:"collections",element:t.jsx(p1,{})}),t.jsx($e,{path:"tests",element:t.jsx(m1,{})}),t.jsx($e,{path:"packages",element:t.jsx(f1,{})}),t.jsx($e,{path:"enquiries",element:t.jsx(h1,{})}),t.jsx($e,{path:"settings",element:t.jsx(g1,{})})]})]})}),!o&&t.jsxs(t.Fragment,{children:[t.jsx(S0,{}),t.jsx(C0,{}),t.jsx(Fn,{isOpen:i,onClose:()=>c(!1)})]})]})}function y1(){return t.jsx(Gy,{children:t.jsx(w0,{children:t.jsx(x1,{})})})}Ah.createRoot(document.getElementById("root")).render(t.jsx(bp.StrictMode,{children:t.jsx(Ag,{children:t.jsx(y1,{})})}));
