const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ChinaMapView-BDyPlaas.js","./ChinaMapView-DHdOsH2J.css","./ThreeBodySim-DFsGgf9t.js","./ThreeBodySim-BQ_q5lSi.css","./ChartsPanel-DjZrJuhq.js","./ChartsPanel-Dnwyk0nl.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ce={},Ns=[],Gn=()=>{},df=()=>!1,ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ua=n=>n.startsWith("onUpdate:"),Pe=Object.assign,ec=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},vp=Object.prototype.hasOwnProperty,se=(n,t)=>vp.call(n,t),zt=Array.isArray,Os=n=>zr(n)==="[object Map]",pf=n=>zr(n)==="[object Set]",Bc=n=>zr(n)==="[object Date]",Wt=n=>typeof n=="function",ye=n=>typeof n=="string",Xn=n=>typeof n=="symbol",re=n=>n!==null&&typeof n=="object",mf=n=>(re(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),gf=Object.prototype.toString,zr=n=>gf.call(n),xp=n=>zr(n).slice(8,-1),_f=n=>zr(n)==="[object Object]",nc=n=>ye(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,dr=tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},yp=/-\w/g,Cn=ha(n=>n.replace(yp,t=>t.slice(1).toUpperCase())),Mp=/\B([A-Z])/g,ss=ha(n=>n.replace(Mp,"-$1").toLowerCase()),vf=ha(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=ha(n=>n?`on${vf(n)}`:""),Bn=(n,t)=>!Object.is(n,t),La=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},xf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Sp=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Ep=n=>{const t=ye(n)?Number(n):NaN;return isNaN(t)?n:t};let zc;const fa=()=>zc||(zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ks(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ye(i)?Ap(i):ks(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ye(n)||re(n))return n}const bp=/;(?![^(]*\))/g,Tp=/:([^]+)/,wp=/\/\*[^]*?\*\//g;function Ap(n){const t={};return n.replace(wp,"").split(bp).forEach(e=>{if(e){const i=e.split(Tp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function on(n){let t="";if(ye(n))t=n;else if(zt(n))for(let e=0;e<n.length;e++){const i=on(n[e]);i&&(t+=i+" ")}else if(re(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Rp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cp=tc(Rp);function yf(n){return!!n||n===""}function Pp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=ic(n[i],t[i]);return e}function ic(n,t){if(n===t)return!0;let e=Bc(n),i=Bc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Xn(n),i=Xn(t),e||i)return n===t;if(e=zt(n),i=zt(t),e||i)return e&&i?Pp(n,t):!1;if(e=re(n),i=re(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!ic(n[o],t[o]))return!1}}return String(n)===String(t)}const Mf=n=>!!(n&&n.__v_isRef===!0),$t=n=>ye(n)?n:n==null?"":zt(n)||re(n)&&(n.toString===gf||!Wt(n.toString))?Mf(n)?$t(n.value):JSON.stringify(n,Sf,2):String(n),Sf=(n,t)=>Mf(t)?Sf(n,t.value):Os(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Da(i,r)+" =>"]=s,e),{})}:pf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Da(e))}:Xn(t)?Da(t):re(t)&&!zt(t)&&!_f(t)?String(t):t,Da=(n,t="")=>{var e;return Xn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Lp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Oe;try{return Oe=this,t()}finally{Oe=e}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Dp(){return Oe}let he;const Ia=new WeakSet;class Ef{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hc(this),wf(this);const t=he,e=Pn;he=this,Pn=!0;try{return this.fn()}finally{Af(this),he=t,Pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)oc(t);this.deps=this.depsTail=void 0,Hc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rl(this)&&this.run()}get dirty(){return Rl(this)}}let bf=0,pr,mr;function Tf(n,t=!1){if(n.flags|=8,t){n.next=mr,mr=n;return}n.next=pr,pr=n}function sc(){bf++}function rc(){if(--bf>0)return;if(mr){let t=mr;for(mr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;pr;){let t=pr;for(pr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function wf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Af(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),oc(i),Ip(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Rl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Rf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Rf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Tr)||(n.globalVersion=Tr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rl(n))))return;n.flags|=2;const t=n.dep,e=he,i=Pn;he=n,Pn=!0;try{wf(n);const s=n.fn(n._value);(t.version===0||Bn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{he=e,Pn=i,Af(n),n.flags&=-3}}function oc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)oc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ip(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Pn=!0;const Cf=[];function hi(){Cf.push(Pn),Pn=!1}function fi(){const n=Cf.pop();Pn=n===void 0?!0:n}function Hc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=he;he=void 0;try{t()}finally{he=e}}}let Tr=0;class Up{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ac{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!he||!Pn||he===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==he)e=this.activeLink=new Up(he,this),he.deps?(e.prevDep=he.depsTail,he.depsTail.nextDep=e,he.depsTail=e):he.deps=he.depsTail=e,Pf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=he.depsTail,e.nextDep=void 0,he.depsTail.nextDep=e,he.depsTail=e,he.deps===e&&(he.deps=i)}return e}trigger(t){this.version++,Tr++,this.notify(t)}notify(t){sc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{rc()}}}function Pf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Pf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Cl=new WeakMap,$i=Symbol(""),Pl=Symbol(""),wr=Symbol("");function Ge(n,t,e){if(Pn&&he){let i=Cl.get(n);i||Cl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new ac),s.map=i,s.key=e),s.track()}}function ai(n,t,e,i,s,r){const o=Cl.get(n);if(!o){Tr++;return}const a=l=>{l&&l.trigger()};if(sc(),t==="clear")o.forEach(a);else{const l=zt(n),c=l&&nc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===wr||!Xn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(wr)),t){case"add":l?c&&a(o.get("length")):(a(o.get($i)),Os(n)&&a(o.get(Pl)));break;case"delete":l||(a(o.get($i)),Os(n)&&a(o.get(Pl)));break;case"set":Os(n)&&a(o.get($i));break}}rc()}function os(n){const t=ie(n);return t===n?t:(Ge(t,"iterate",wr),vn(n)?t:t.map(Ln))}function da(n){return Ge(n=ie(n),"iterate",wr),n}function Nn(n,t){return di(n)?Gs(Ki(n)?Ln(t):t):Ln(t)}const Np={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,n=>Nn(this,n))},concat(...n){return os(this).concat(...n.map(t=>zt(t)?os(t):t))},entries(){return Ua(this,"entries",n=>(n[1]=Nn(this,n[1]),n))},every(n,t){return Kn(this,"every",n,t,void 0,arguments)},filter(n,t){return Kn(this,"filter",n,t,e=>e.map(i=>Nn(this,i)),arguments)},find(n,t){return Kn(this,"find",n,t,e=>Nn(this,e),arguments)},findIndex(n,t){return Kn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Kn(this,"findLast",n,t,e=>Nn(this,e),arguments)},findLastIndex(n,t){return Kn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Kn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Na(this,"includes",n)},indexOf(...n){return Na(this,"indexOf",n)},join(n){return os(this).join(n)},lastIndexOf(...n){return Na(this,"lastIndexOf",n)},map(n,t){return Kn(this,"map",n,t,void 0,arguments)},pop(){return Zs(this,"pop")},push(...n){return Zs(this,"push",n)},reduce(n,...t){return kc(this,"reduce",n,t)},reduceRight(n,...t){return kc(this,"reduceRight",n,t)},shift(){return Zs(this,"shift")},some(n,t){return Kn(this,"some",n,t,void 0,arguments)},splice(...n){return Zs(this,"splice",n)},toReversed(){return os(this).toReversed()},toSorted(n){return os(this).toSorted(n)},toSpliced(...n){return os(this).toSpliced(...n)},unshift(...n){return Zs(this,"unshift",n)},values(){return Ua(this,"values",n=>Nn(this,n))}};function Ua(n,t,e){const i=da(n),s=i[t]();return i!==n&&!vn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Op=Array.prototype;function Kn(n,t,e,i,s,r){const o=da(n),a=o!==n&&!vn(n),l=o[t];if(l!==Op[t]){const h=l.apply(n,r);return a?Ln(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,Nn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function kc(n,t,e,i){const s=da(n),r=s!==n&&!vn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Nn(n,c)),e.call(this,c,Nn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Nn(n,l):l}function Na(n,t,e){const i=ie(n);Ge(i,"iterate",wr);const s=i[t](...e);return(s===-1||s===!1)&&uc(e[0])?(e[0]=ie(e[0]),i[t](...e)):s}function Zs(n,t,e=[]){hi(),sc();const i=ie(n)[t].apply(n,e);return rc(),fi(),i}const Fp=tc("__proto__,__v_isRef,__isVue"),Lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xn));function Bp(n){Xn(n)||(n=String(n));const t=ie(this);return Ge(t,"has",n),t.hasOwnProperty(n)}class Df{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Yp:Of:r?Nf:Uf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=zt(t);if(!s){let l;if(o&&(l=Np[e]))return l;if(e==="hasOwnProperty")return Bp}const a=Reflect.get(t,e,Xe(t)?t:i);if((Xn(e)?Lf.has(e):Fp(e))||(s||Ge(t,"get",e),r))return a;if(Xe(a)){const l=o&&nc(e)?a:a.value;return s&&re(l)?Vo(l):l}return re(a)?s?Vo(a):pa(a):a}}class If extends Df{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=zt(t)&&nc(e);if(!this._isShallow){const c=di(r);if(!vn(i)&&!di(i)&&(r=ie(r),i=ie(i)),!o&&Xe(r)&&!Xe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:se(t,e),l=Reflect.set(t,e,i,Xe(t)?t:s);return t===ie(s)&&l&&(a?Bn(i,r)&&ai(t,"set",e,i):ai(t,"add",e,i)),l}deleteProperty(t,e){const i=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ai(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Xn(e)||!Lf.has(e))&&Ge(t,"has",e),i}ownKeys(t){return Ge(t,"iterate",zt(t)?"length":$i),Reflect.ownKeys(t)}}class zp extends Df{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Hp=new If,kp=new zp,Gp=new If(!0);const Ll=n=>n,Zr=n=>Reflect.getPrototypeOf(n);function Vp(n,t,e){return function(...i){const s=this.__v_raw,r=ie(s),o=Os(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ll:t?Gs:Ln;return!t&&Ge(r,"iterate",l?Pl:$i),Pe(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Jr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Wp(n,t){const e={get(s){const r=this.__v_raw,o=ie(r),a=ie(s);n||(Bn(s,a)&&Ge(o,"get",s),Ge(o,"get",a));const{has:l}=Zr(o),c=t?Ll:n?Gs:Ln;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ge(ie(s),"iterate",$i),s.size},has(s){const r=this.__v_raw,o=ie(r),a=ie(s);return n||(Bn(s,a)&&Ge(o,"has",s),Ge(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ie(a),c=t?Ll:n?Gs:Ln;return!n&&Ge(l,"iterate",$i),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Pe(e,n?{add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear")}:{add(s){const r=ie(this),o=Zr(r),a=ie(s),l=!t&&!vn(s)&&!di(s)?a:s;return o.has.call(r,l)||Bn(s,l)&&o.has.call(r,s)||Bn(a,l)&&o.has.call(r,a)||(r.add(l),ai(r,"add",l,l)),this},set(s,r){!t&&!vn(r)&&!di(r)&&(r=ie(r));const o=ie(this),{has:a,get:l}=Zr(o);let c=a.call(o,s);c||(s=ie(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Bn(r,u)&&ai(o,"set",s,r):ai(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:a}=Zr(r);let l=o.call(r,s);l||(s=ie(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ai(r,"delete",s,void 0),c},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&ai(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Vp(s,n,t)}),e}function lc(n,t){const e=Wp(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(se(e,s)&&s in i?e:i,s,r)}const Xp={get:lc(!1,!1)},jp={get:lc(!1,!0)},qp={get:lc(!0,!1)};const Uf=new WeakMap,Nf=new WeakMap,Of=new WeakMap,Yp=new WeakMap;function $p(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pa(n){return di(n)?n:cc(n,!1,Hp,Xp,Uf)}function Kp(n){return cc(n,!1,Gp,jp,Nf)}function Vo(n){return cc(n,!0,kp,qp,Of)}function cc(n,t,e,i,s){if(!re(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=$p(xp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Ki(n){return di(n)?Ki(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function vn(n){return!!(n&&n.__v_isShallow)}function uc(n){return n?!!n.__v_raw:!1}function ie(n){const t=n&&n.__v_raw;return t?ie(t):n}function Zp(n){return!se(n,"__v_skip")&&Object.isExtensible(n)&&xf(n,"__v_skip",!0),n}const Ln=n=>re(n)?pa(n):n,Gs=n=>re(n)?Vo(n):n;function Xe(n){return n?n.__v_isRef===!0:!1}function oe(n){return Jp(n,!1)}function Jp(n,t){return Xe(n)?n:new Qp(n,t)}class Qp{constructor(t,e){this.dep=new ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ie(t),this._value=e?t:Ln(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||vn(t)||di(t);t=i?t:ie(t),Bn(t,e)&&(this._rawValue=t,this._value=i?t:Ln(t),this.dep.trigger())}}function Be(n){return Xe(n)?n.value:n}const tm={get:(n,t,e)=>t==="__v_raw"?n:Be(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Xe(s)&&!Xe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Ff(n){return Ki(n)?n:new Proxy(n,tm)}class em{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Tf(this,!0),!0}get value(){const t=this.dep.track();return Rf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function nm(n,t,e=!1){let i,s;return Wt(n)?i=n:(i=n.get,s=n.set),new em(i,s,e)}const Qr={},Wo=new WeakMap;let Wi;function im(n,t=!1,e=Wi){if(e){let i=Wo.get(e);i||Wo.set(e,i=[]),i.push(n)}}function sm(n,t,e=ce){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:vn(b)||s===!1||s===0?li(b,1):li(b);let u,h,f,d,g=!1,_=!1;if(Xe(n)?(h=()=>n.value,g=vn(n)):Ki(n)?(h=()=>c(n),g=!0):zt(n)?(_=!0,g=n.some(b=>Ki(b)||vn(b)),h=()=>n.map(b=>{if(Xe(b))return b.value;if(Ki(b))return c(b);if(Wt(b))return l?l(b,2):b()})):Wt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){hi();try{f()}finally{fi()}}const b=Wi;Wi=u;try{return l?l(n,3,[d]):n(d)}finally{Wi=b}}:h=Gn,t&&s){const b=h,C=s===!0?1/0:s;h=()=>li(b(),C)}const m=Dp(),p=()=>{u.stop(),m&&m.active&&ec(m.effects,u)};if(r&&t){const b=t;t=(...C)=>{const R=b(...C);return p(),R}}let S=_?new Array(n.length).fill(Qr):Qr;const v=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const C=u.run();if(b||s||g||(_?C.some((R,P)=>Bn(R,S[P])):Bn(C,S))){f&&f();const R=Wi;Wi=u;try{const P=[C,S===Qr?void 0:_&&S[0]===Qr?[]:S,d];S=C,l?l(t,3,P):t(...P)}finally{Wi=R}}}else u.run()};return a&&a(v),u=new Ef(h),u.scheduler=o?()=>o(v,!1):v,d=b=>im(b,!1,u),f=u.onStop=()=>{const b=Wo.get(u);if(b){if(l)l(b,4);else for(const C of b)C();Wo.delete(u)}},t?i?v(!0):S=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function li(n,t=1/0,e){if(t<=0||!re(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Xe(n))li(n.value,t,e);else if(zt(n))for(let i=0;i<n.length;i++)li(n[i],t,e);else if(pf(n)||Os(n))n.forEach(i=>{li(i,t,e)});else if(_f(n)){for(const i in n)li(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&li(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(n,t,e,i){try{return i?n(...i):n()}catch(s){kr(s,t,e)}}function xn(n,t,e,i){if(Wt(n)){const s=Hr(n,t,e,i);return s&&mf(s)&&s.catch(r=>{kr(r,t,e)}),s}if(zt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(xn(n[r],t,e,i));return s}}function kr(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ce;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){hi(),Hr(r,null,10,[n,l,c]),fi();return}}rm(n,e,s,i,o)}function rm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ke=[];let Un=-1;const Fs=[];let bi=null,Cs=0;const Bf=Promise.resolve();let Xo=null;function om(n){const t=Xo||Bf;return n?t.then(this?n.bind(this):n):t}function am(n){let t=Un+1,e=Ke.length;for(;t<e;){const i=t+e>>>1,s=Ke[i],r=Ar(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function hc(n){if(!(n.flags&1)){const t=Ar(n),e=Ke[Ke.length-1];!e||!(n.flags&2)&&t>=Ar(e)?Ke.push(n):Ke.splice(am(t),0,n),n.flags|=1,zf()}}function zf(){Xo||(Xo=Bf.then(kf))}function lm(n){if(!zt(n))bi&&n.id===-1?bi.splice(Cs+1,0,n):n.flags&1||(Fs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Fs.push(n[t]);zf()}function Gc(n,t,e=Un+1){for(;e<Ke.length;e++){const i=Ke[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ke.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Hf(n){if(Fs.length){const t=[...new Set(Fs)].sort((e,i)=>Ar(e)-Ar(i));if(Fs.length=0,bi){for(let e=0;e<t.length;e++)bi.push(t[e]);return}for(bi=t,Cs=0;Cs<bi.length;Cs++){const e=bi[Cs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}bi=null,Cs=0}}const Ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function kf(n){try{for(Un=0;Un<Ke.length;Un++){const t=Ke[Un];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Un<Ke.length;Un++){const t=Ke[Un];t&&(t.flags&=-2)}Un=-1,Ke.length=0,Hf(),Xo=null,(Ke.length||Fs.length)&&kf()}}let _n=null,Gf=null;function jo(n){const t=_n;return _n=n,Gf=n&&n.type.__scopeId||null,t}function Vf(n,t=_n,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Ko(-1);const r=jo(t),o=Ji.length;let a;try{a=n(...s)}finally{for(let l=Ji.length;l>o;l--)md();jo(r),i._d&&Ko(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function No(n,t){if(_n===null)return n;const e=xa(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ce]=t[s];r&&(Wt(r)&&(r={mounted:r,updated:r}),r.deep&&li(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Oi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(hi(),xn(l,e,8,[n.el,a,n,t]),fi())}}function cm(n,t){if(We){let e=We.provides;const i=We.parent&&We.parent.provides;i===e&&(e=We.provides=Object.create(i)),e[n]=t}}function Oo(n,t,e=!1){const i=vd();if(i||Bs){let s=Bs?Bs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}const um=Symbol.for("v-scx"),hm=()=>Oo(um);function Zi(n,t,e){return Wf(n,t,e)}function Wf(n,t,e=ce){const{immediate:i,deep:s,flush:r,once:o}=e,a=Pe({},e),l=t&&i||!t&&r!=="post";let c;if(Vs){if(r==="sync"){const d=hm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Gn,d.resume=Gn,d.pause=Gn,d}}const u=We;a.call=(d,g,_)=>xn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{Qe(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():hc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=sm(n,t,a);return Vs&&(c?c.push(f):l&&f()),f}function fm(n,t,e){const i=this.proxy,s=ye(n)?n.includes(".")?Xf(i,n):()=>i[n]:n.bind(i,i);let r;Wt(t)?r=t:(r=t.handler,e=t);const o=Vr(this),a=Wf(s,r.bind(i),e);return o(),a}function Xf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const dm=Symbol("_vte"),ma=n=>n.__isTeleport,hn=Symbol("_leaveCb"),Js=Symbol("_enterCb");function pm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{n.isMounted=!0}),Ys(()=>{n.isUnmounting=!0}),n}const cn=[Function,Array],jf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},qf=n=>{const t=n.subTree;return t.component?qf(t.component):t},mm={name:"BaseTransition",props:jf,setup(n,{slots:t}){const e=vd(),i=pm();return()=>{const s=t.default&&Kf(t.default(),!0),r=s&&s.length?Yf(s):e.subTree?Ve():void 0;if(!r)return;const o=ie(n),{mode:a}=o;if(i.isLeaving)return Oa(r);const l=qo(r);if(!l)return Oa(r);let c=Dl(l,o,i,e,h=>c=h);l.type!==Ze&&Rr(l,c);let u=e.subTree&&qo(e.subTree);if(u&&u.type!==Ze&&!ji(u,l)&&qf(e).type!==Ze){let h=Dl(u,o,i,e);if(Rr(u,h),a==="out-in"&&l.type!==Ze)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},Oa(r);a==="in-out"&&l.type!==Ze?h.delayLeave=(f,d,g)=>{const _=$f(i,u);_[String(u.key)]=u,f[hn]=()=>{d(),f[hn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Yf(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ze){t=e;break}}return t}const gm=mm;function $f(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Dl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:S,onAppearCancelled:v}=t,b=String(n.key),C=$f(e,n),R=(E,w)=>{E&&xn(E,i,9,w)},P=(E,w)=>{const X=w[1];R(E,w),zt(E)?E.every(V=>V.length<=1)&&X():E.length<=1&&X()},J={mode:o,persisted:a,beforeEnter(E){let w=l;if(!e.isMounted)if(r)w=m||l;else return;E[hn]&&E[hn](!0);const X=C[b];X&&ji(n,X)&&X.el[hn]&&X.el[hn](),R(w,[E])},enter(E){if(C[b]===n)return;let w=c,X=u,V=h;if(!e.isMounted)if(r)w=p||c,X=S||u,V=v||h;else return;let rt=!1;E[Js]=B=>{rt||(rt=!0,B?R(V,[E]):R(X,[E]),J.delayedLeave&&J.delayedLeave(),E[Js]=void 0)};const A=E[Js].bind(null,!1);w?P(w,[E,A]):A()},leave(E,w){const X=String(n.key);if(E[Js]&&E[Js](!0),e.isUnmounting)return w();R(f,[E]);let V=!1;E[hn]=A=>{V||(V=!0,w(),A?R(_,[E]):R(g,[E]),E[hn]=void 0,C[X]===n&&delete C[X])};const rt=E[hn].bind(null,!1);C[X]=n,d?P(d,[E,rt]):rt()},clone(E){const w=Dl(E,t,e,i,s);return s&&s(w),w}};return J}function Oa(n){if(Gr(n))return n=Li(n),n.children=null,n}function qo(n){if(!Gr(n))return ma(n.type)&&n.children?Yf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Wt(e.default))return e.default()}}function Rr(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Rr(ma(e.type)&&qo(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Kf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===me?(o.patchFlag&128&&s++,i=i.concat(Kf(o.children,t,a))):(t||o.type!==Ze)&&i.push(a!=null?Li(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function _m(n,t){return Wt(n)?Pe({name:n.name},t,{setup:n}):n}function fc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Vc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Yo=new WeakMap;function gr(n,t,e,i,s=!1){if(zt(n)){n.forEach((_,m)=>gr(_,t&&(zt(t)?t[m]:t),e,i,s));return}if(_r(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?xa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ce?a.refs={}:a.refs,h=a.setupState,f=ie(h),d=h===ce?df:_=>Vc(u,_)?!1:se(f,_),g=(_,m)=>!(m&&Vc(u,m));if(c!=null&&c!==l){if(Wc(t),ye(c))u[c]=null,d(c)&&(h[c]=null);else if(Xe(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Wt(l))Hr(l,a,12,[o,u]);else{const _=ye(l),m=Xe(l);if(_||m){const p=()=>{if(n.f){const S=_?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)zt(S)&&ec(S,r);else if(zt(S))S.includes(r)||S.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else _?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const S=()=>{p(),Yo.delete(n)};S.id=-1,Yo.set(n,S),Qe(S,e)}else Wc(n),p()}}}function Wc(n){const t=Yo.get(n);t&&(t.flags|=8,Yo.delete(n))}const Xc=n=>n.nodeType===8;fa().requestIdleCallback;fa().cancelIdleCallback;function vm(n,t){if(Xc(n)&&n.data==="["){let e=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(Xc(i))if(i.data==="]"){if(--e===0)break}else i.data==="["&&e++;i=i.nextSibling}}else t(n)}const _r=n=>!!n.type.__asyncLoader;function Fa(n){Wt(n)&&(n={loader:n});const{loader:t,loadingComponent:e,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,h=0;const f=()=>(h++,c=null,d()),d=()=>{let g;return c||(g=c=t().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,p)=>{l(_,()=>m(f()),()=>p(_),h+1)});throw _}).then(_=>g!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return _m({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(g,_,m){const p=g.isConnected;let S=!1;(_.bu||(_.bu=[])).push(()=>S=!0);const v=()=>{S||!g.parentNode||p&&!g.isConnected||m()},b=r?()=>{const C=r(v,R=>vm(g,R));C&&(_.bum||(_.bum=[])).push(C)}:v;u?b():d().then(()=>!_.isUnmounted&&b())},get __asyncResolved(){return u},setup(){const g=We;if(fc(g),u)return()=>to(u,g);const _=C=>{c=null,kr(C,g,13,!i)};if(a&&g.suspense||Vs)return d().then(C=>()=>to(C,g)).catch(C=>(_(C),()=>i?ve(i,{error:C}):null));const m=oe(!1),p=oe(),S=oe(!!s);let v,b;return dc(()=>{v!=null&&clearTimeout(v),b!=null&&clearTimeout(b)}),s&&(b=setTimeout(()=>{g.isUnmounted||(S.value=!1)},s)),o!=null&&(v=setTimeout(()=>{if(!g.isUnmounted&&!m.value&&!p.value){const C=new Error(`Async component timed out after ${o}ms.`);_(C),p.value=C}},o)),d().then(()=>{g.isUnmounted||(m.value=!0,g.parent&&Gr(g.parent.vnode)&&g.parent.update())}).catch(C=>{if(g.isUnmounted){c=null;return}_(C),p.value=C}),()=>{if(m.value&&u)return to(u,g);if(p.value&&i)return ve(i,{error:p.value});if(e&&!S.value)return to(e,g)}}})}function to(n,t){const{ref:e,props:i,children:s,ce:r}=t.vnode,o=ve(n,i,s);return o.ref=e,o.ce=r,delete t.vnode.ce,o}const Gr=n=>n.type.__isKeepAlive;function xm(n,t){Zf(n,"a",t)}function ym(n,t){Zf(n,"da",t)}function Zf(n,t,e=We){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ga(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Gr(s.parent.vnode)&&Mm(i,t,e,s),s=s.parent}}function Mm(n,t,e,i){const s=ga(t,n,i,!0);dc(()=>{ec(i[t],s)},e)}function ga(n,t,e=We,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{hi();const a=Vr(e),l=xn(t,e,n,o);return a(),fi(),l});return i?s.unshift(r):s.push(r),r}}const gi=n=>(t,e=We)=>{(!Vs||n==="sp")&&ga(n,(...i)=>t(...i),e)},Sm=gi("bm"),Di=gi("m"),Em=gi("bu"),bm=gi("u"),Ys=gi("bum"),dc=gi("um"),Tm=gi("sp"),wm=gi("rtg"),Am=gi("rtc");function Rm(n,t=We){ga("ec",n,t)}const Cm=Symbol.for("v-ndc");function An(n,t,e,i){let s;const r=e,o=zt(n);if(o||ye(n)){const a=o&&Ki(n);let l=!1,c=!1;a&&(l=!vn(n),c=di(n),n=da(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Gs(Ln(n[u])):Ln(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(re(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Il=n=>n?xd(n)?xa(n):Il(n.parent):null,vr=Pe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Il(n.parent),$root:n=>Il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Qf(n),$forceUpdate:n=>n.f||(n.f=()=>{hc(n.update)}),$nextTick:n=>n.n||(n.n=om.bind(n.proxy)),$watch:n=>fm.bind(n)}),Ba=(n,t)=>n!==ce&&!n.__isScriptSetup&&se(n,t),Pm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ba(i,t))return o[t]=1,i[t];if(s!==ce&&se(s,t))return o[t]=2,s[t];if(se(r,t))return o[t]=3,r[t];if(e!==ce&&se(e,t))return o[t]=4,e[t];Ul&&(o[t]=0)}}const c=vr[t];let u,h;if(c)return t==="$attrs"&&Ge(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ce&&se(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,se(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ba(s,t)?(s[t]=e,!0):i!==ce&&se(i,t)?(i[t]=e,!0):se(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ce&&a[0]!=="$"&&se(n,a)||Ba(t,a)||se(r,a)||se(i,a)||se(vr,a)||se(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:se(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function jc(n){return zt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ul=!0;function Lm(n){const t=Qf(n),e=n.proxy,i=n.ctx;Ul=!1,t.beforeCreate&&qc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:v,unmounted:b,render:C,renderTracked:R,renderTriggered:P,errorCaptured:J,serverPrefetch:E,expose:w,inheritAttrs:X,components:V,directives:rt,filters:A}=t;if(c&&Dm(c,i,null),o)for(const O in o){const U=o[O];Wt(U)&&(i[O]=U.bind(e))}if(s){const O=s.call(e,e);re(O)&&(n.data=pa(O))}if(Ul=!0,r)for(const O in r){const U=r[O],W=Wt(U)?U.bind(e,e):Wt(U.get)?U.get.bind(e,e):Gn,et=!Wt(U)&&Wt(U.set)?U.set.bind(e):Gn,ot=fn({get:W,set:et});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>ot.value,set:ft=>ot.value=ft})}if(a)for(const O in a)Jf(a[O],i,e,O);if(l){const O=Wt(l)?l.call(e):l;Reflect.ownKeys(O).forEach(U=>{cm(U,O[U])})}u&&qc(u,n,"c");function G(O,U){zt(U)?U.forEach(W=>O(W.bind(e))):U&&O(U.bind(e))}if(G(Sm,h),G(Di,f),G(Em,d),G(bm,g),G(xm,_),G(ym,m),G(Rm,J),G(Am,R),G(wm,P),G(Ys,S),G(dc,b),G(Tm,E),zt(w))if(w.length){const O=n.exposed||(n.exposed={});w.forEach(U=>{Object.defineProperty(O,U,{get:()=>e[U],set:W=>e[U]=W,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Gn&&(n.render=C),X!=null&&(n.inheritAttrs=X),V&&(n.components=V),rt&&(n.directives=rt),E&&fc(n)}function Dm(n,t,e=Gn){zt(n)&&(n=Nl(n));for(const i in n){const s=n[i];let r;re(s)?"default"in s?r=Oo(s.from||i,s.default,!0):r=Oo(s.from||i):r=Oo(s),Xe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function qc(n,t,e){xn(zt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Jf(n,t,e,i){let s=i.includes(".")?Xf(e,i):()=>e[i];if(ye(n)){const r=t[n];Wt(r)&&Zi(s,r)}else if(Wt(n))Zi(s,n.bind(e));else if(re(n))if(zt(n))n.forEach(r=>Jf(r,t,e,i));else{const r=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(r)&&Zi(s,r,n)}}function Qf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>$o(l,c,o,!0)),$o(l,t,o)),re(t)&&r.set(t,l),l}function $o(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&$o(n,r,e,!0),s&&s.forEach(o=>$o(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Im[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Im={data:Yc,props:$c,emits:$c,methods:cr,computed:cr,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:cr,directives:cr,watch:Nm,provide:Yc,inject:Um};function Yc(n,t){return t?n?function(){return Pe(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function Um(n,t){return cr(Nl(n),Nl(t))}function Nl(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function qe(n,t){return n?[...new Set([].concat(n,t))]:t}function cr(n,t){return n?Pe(Object.create(null),n,t):t}function $c(n,t){return n?zt(n)&&zt(t)?[...new Set([...n,...t])]:Pe(Object.create(null),jc(n),jc(t??{})):t}function Nm(n,t){if(!n)return t;if(!t)return n;const e=Pe(Object.create(null),n);for(const i in t)e[i]=qe(n[i],t[i]);return e}function td(){return{app:null,config:{isNativeTag:df,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Om=0;function Fm(n,t){return function(i,s=null){Wt(i)||(i=Pe({},i)),s!=null&&!re(s)&&(s=null);const r=td(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Om++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:pg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Wt(u.install)?(o.add(u),u.install(c,...h)):Wt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||ve(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,xa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(xn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Bs;Bs=c;try{return u()}finally{Bs=h}}};return c}}let Bs=null;const Bm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Cn(t)}Modifiers`]||n[`${ss(t)}Modifiers`];function zm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ce;let s=e;const r=t.startsWith("update:"),o=r&&Bm(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>ye(u)?u.trim():u)),o.number&&(s=e.map(Sp)));let a,l=i[a=Pa(t)]||i[a=Pa(Cn(t))];!l&&r&&(l=i[a=Pa(ss(t))]),l&&xn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,xn(c,n,6,s)}}const Hm=new WeakMap;function ed(n,t,e=!1){const i=e?Hm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=ed(c,t,!0);u&&(a=!0,Pe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(re(n)&&i.set(n,null),null):(zt(r)?r.forEach(l=>o[l]=null):Pe(o,r),re(n)&&i.set(n,o),o)}function _a(n,t){return!n||!ca(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),se(n,t[0].toLowerCase()+t.slice(1))||se(n,ss(t))||se(n,t))}function Kc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=jo(n);let p,S;try{if(e.shapeFlag&4){const b=s||i,C=b;p=On(c.call(C,b,u,h,d,f,g)),S=a}else{const b=t;p=On(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),S=t.props?a:km(a)}}catch(b){Ji.length=0,kr(b,n,1),p=ve(Ze)}let v=p;if(S&&_!==!1){const b=Object.keys(S),{shapeFlag:C}=v;b.length&&C&7&&(r&&b.some(ua)&&(S=Gm(S,r)),v=Li(v,S,!1,!0))}if(e.dirs&&(v=Li(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition){const b=ma(v.type)&&qo(v)||v;Rr(b,e.transition)}return p=v,jo(m),p}const km=n=>{let t;for(const e in n)(e==="class"||e==="style"||ca(e))&&((t||(t={}))[e]=n[e]);return t},Gm=(n,t)=>{const e={};for(const i in n)(!ua(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Vm(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Zc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(nd(o,i,f)&&!_a(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zc(i,o,c):!0:!!o;return!1}function Zc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(nd(t,n,r)&&!_a(e,r))return!0}return!1}function nd(n,t,e){const i=n[e],s=t[e];return e==="style"&&re(i)&&re(s)?!ic(i,s):i!==s}function Wm({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const id={},sd=()=>Object.create(id),rd=n=>Object.getPrototypeOf(n)===id;function Xm(n,t,e,i=!1){const s={},r=sd();n.propsDefaults=Object.create(null),od(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Kp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function jm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ie(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_a(n.emitsOptions,f))continue;const d=t[f];if(l)if(se(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Cn(f);s[g]=Ol(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{od(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!se(t,h)&&((u=ss(h))===h||!se(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ol(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!se(t,h))&&(delete r[h],c=!0)}c&&ai(n.attrs,"set","")}function od(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(dr(l))continue;const c=t[l];let u;s&&se(s,u=Cn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:_a(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ie(e),c=a||ce;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ol(s,l,h,c[h],n,!se(c,h))}}return o}function Ol(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Vr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ss(e))&&(i=!0))}return i}const qm=new WeakMap;function ad(n,t,e=!1){const i=e?qm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=h=>{l=!0;const[f,d]=ad(h,t,!0);Pe(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return re(n)&&i.set(n,Ns),Ns;if(zt(r))for(let u=0;u<r.length;u++){const h=Cn(r[u]);Jc(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=Cn(u);if(Jc(h)){const f=r[u],d=o[h]=zt(f)||Wt(f)?{type:f}:Pe({},f),g=d.type;let _=!1,m=!0;if(zt(g))for(let p=0;p<g.length;++p){const S=g[p],v=Wt(S)&&S.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=Wt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||se(d,"default"))&&a.push(h)}}const c=[o,a];return re(n)&&i.set(n,c),c}function Jc(n){return n[0]!=="$"&&!dr(n)}const pc=n=>n==="_"||n==="_ctx"||n==="$stable",mc=n=>zt(n)?n.map(On):[On(n)],Ym=(n,t,e)=>{if(t._n)return t;const i=Vf((...s)=>mc(t(...s)),e);return i._c=!1,i},ld=(n,t,e)=>{const i=n._ctx;for(const s in n){if(pc(s))continue;const r=n[s];if(Wt(r))t[s]=Ym(s,r,i);else if(r!=null){const o=mc(r);t[s]=()=>o}}},cd=(n,t)=>{const e=mc(t);n.slots.default=()=>e},ud=(n,t,e)=>{for(const i in t)(e||!pc(i))&&(n[i]=t[i])},$m=(n,t,e)=>{const i=n.slots=sd();if(n.vnode.shapeFlag&32){const s=t._;s?(ud(i,t,e),e&&xf(i,"_",s,!0)):ld(t,i)}else t&&cd(n,t)},Km=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ce;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:ud(s,t,e):(r=!t.$stable,ld(t,s)),o=t}else t&&(cd(n,t),o={default:1});if(r)for(const a in s)!pc(a)&&o[a]==null&&delete s[a]},Qe=eg;function Zm(n){return Jm(n)}function Jm(n,t){const e=fa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Gn,insertStaticContent:g}=n,_=(y,N,k,K=null,q=null,st=null,ct=void 0,M=null,x=!!N.dynamicChildren)=>{if(y===N)return;y&&!ji(y,N)&&(K=bt(y),ft(y,q,st,!0),y=null),N.patchFlag===-2&&(x=!1,N.dynamicChildren=null);const{type:D,ref:Q,shapeFlag:j}=N;switch(D){case va:m(y,N,k,K);break;case Ze:p(y,N,k,K);break;case Fo:y==null&&S(N,k,K,ct);break;case me:V(y,N,k,K,q,st,ct,M,x);break;default:j&1?C(y,N,k,K,q,st,ct,M,x):j&6?rt(y,N,k,K,q,st,ct,M,x):(j&64||j&128)&&D.process(y,N,k,K,q,st,ct,M,x,Et)}Q!=null&&q?gr(Q,y&&y.ref,st,N||y,!N):Q==null&&y&&y.ref!=null&&gr(y.ref,null,st,y,!0)},m=(y,N,k,K)=>{if(y==null)i(N.el=a(N.children),k,K);else{const q=N.el=y.el;N.children!==y.children&&c(q,N.children)}},p=(y,N,k,K)=>{y==null?i(N.el=l(N.children||""),k,K):N.el=y.el},S=(y,N,k,K)=>{[y.el,y.anchor]=g(y.children,N,k,K,y.el,y.anchor)},v=({el:y,anchor:N},k,K)=>{let q;for(;y&&y!==N;)q=f(y),i(y,k,K),y=q;i(N,k,K)},b=({el:y,anchor:N})=>{let k;for(;y&&y!==N;)k=f(y),s(y),y=k;s(N)},C=(y,N,k,K,q,st,ct,M,x)=>{if(N.type==="svg"?ct="svg":N.type==="math"&&(ct="mathml"),y==null)R(N,k,K,q,st,ct,M,x);else{const D=y.el&&y.el._isVueCE?y.el:null;try{D&&D._beginPatch(),E(y,N,q,st,ct,M,x)}finally{D&&D._endPatch()}}},R=(y,N,k,K,q,st,ct,M)=>{let x,D;const{props:Q,shapeFlag:j,transition:Z,dirs:z}=y;if(x=y.el=o(y.type,st,Q&&Q.is,Q),j&8?u(x,y.children):j&16&&J(y.children,x,null,K,q,za(y,st),ct,M),z&&Oi(y,null,K,"created"),P(x,y,y.scopeId,ct,K),Q){for(const ut in Q)ut!=="value"&&!dr(ut)&&r(x,ut,null,Q[ut],st,K);"value"in Q&&r(x,"value",null,Q.value,st),(D=Q.onVnodeBeforeMount)&&In(D,K,y)}z&&Oi(y,null,K,"beforeMount");const H=Qm(q,Z);H&&Z.beforeEnter(x),i(x,N,k),((D=Q&&Q.onVnodeMounted)||H||z)&&Qe(()=>{try{D&&In(D,K,y),H&&Z.enter(x),z&&Oi(y,null,K,"mounted")}finally{}},q)},P=(y,N,k,K,q)=>{if(k&&d(y,k),K)for(let st=0;st<K.length;st++)d(y,K[st]);if(q){let st=q.subTree;if(N===st||pd(st.type)&&(st.ssContent===N||st.ssFallback===N)){const ct=q.vnode;P(y,ct,ct.scopeId,ct.slotScopeIds,q.parent)}}},J=(y,N,k,K,q,st,ct,M,x=0)=>{for(let D=x;D<y.length;D++){const Q=y[D]=M?oi(y[D]):On(y[D]);_(null,Q,N,k,K,q,st,ct,M)}},E=(y,N,k,K,q,st,ct)=>{const M=N.el=y.el;let{patchFlag:x,dynamicChildren:D,dirs:Q}=N;x|=y.patchFlag&16;const j=y.props||ce,Z=N.props||ce;let z;if(k&&Fi(k,!1),(z=Z.onVnodeBeforeUpdate)&&In(z,k,N,y),Q&&Oi(N,y,k,"beforeUpdate"),k&&Fi(k,!0),D&&(!y.dynamicChildren||y.dynamicChildren.length!==D.length)&&(x=0,ct=!1,D=null),(j.innerHTML&&Z.innerHTML==null||j.textContent&&Z.textContent==null)&&u(M,""),D?w(y.dynamicChildren,D,M,k,K,za(N,q),st):ct||U(y,N,M,null,k,K,za(N,q),st,!1),x>0){if(x&16)X(M,j,Z,k,q);else if(x&2&&j.class!==Z.class&&r(M,"class",null,Z.class,q),x&4&&r(M,"style",j.style,Z.style,q),x&8){const H=N.dynamicProps;for(let ut=0;ut<H.length;ut++){const dt=H[ut],At=j[dt],lt=Z[dt];(lt!==At||dt==="value")&&r(M,dt,At,lt,q,k)}}x&1&&y.children!==N.children&&u(M,N.children)}else!ct&&D==null&&X(M,j,Z,k,q);((z=Z.onVnodeUpdated)||Q)&&Qe(()=>{z&&In(z,k,N,y),Q&&Oi(N,y,k,"updated")},K)},w=(y,N,k,K,q,st,ct)=>{for(let M=0;M<N.length;M++){const x=y[M],D=N[M],Q=x.el&&(x.type===me||!ji(x,D)||x.shapeFlag&198)?h(x.el):k;_(x,D,Q,null,K,q,st,ct,!0)}},X=(y,N,k,K,q)=>{if(N!==k){if(N!==ce)for(const st in N)!dr(st)&&!(st in k)&&r(y,st,N[st],null,q,K);for(const st in k){if(dr(st))continue;const ct=k[st],M=N[st];ct!==M&&st!=="value"&&r(y,st,M,ct,q,K)}"value"in k&&r(y,"value",N.value,k.value,q)}},V=(y,N,k,K,q,st,ct,M,x)=>{const D=N.el=y?y.el:a(""),Q=N.anchor=y?y.anchor:a("");let{patchFlag:j,dynamicChildren:Z,slotScopeIds:z}=N;z&&(M=M?M.concat(z):z),y==null?(i(D,k,K),i(Q,k,K),J(N.children||[],k,Q,q,st,ct,M,x)):j>0&&j&64&&Z&&y.dynamicChildren&&y.dynamicChildren.length===Z.length?(w(y.dynamicChildren,Z,k,q,st,ct,M),(N.key!=null||q&&N===q.subTree)&&hd(y,N,!0)):U(y,N,k,Q,q,st,ct,M,x)},rt=(y,N,k,K,q,st,ct,M,x)=>{N.slotScopeIds=M,y==null?N.shapeFlag&512?q.ctx.activate(N,k,K,ct,x):A(N,k,K,q,st,ct,x):B(y,N,x)},A=(y,N,k,K,q,st,ct)=>{const M=y.component=ag(y,K,q);if(Gr(y)&&(M.ctx.renderer=Et),lg(M,!1,ct),M.asyncDep){if(q&&q.registerDep(M,G,ct),!y.el){const x=M.subTree=ve(Ze);p(null,x,N,k),y.placeholder=x.el}}else G(M,y,N,k,q,st,ct)},B=(y,N,k)=>{const K=N.component=y.component;if(Vm(y,N,k))if(K.asyncDep&&!K.asyncResolved){O(K,N,k);return}else K.next=N,K.update();else N.el=y.el,K.vnode=N},G=(y,N,k,K,q,st,ct)=>{const M=()=>{if(y.isMounted){let{next:j,bu:Z,u:z,parent:H,vnode:ut}=y;{const It=fd(y);if(It){j&&(j.el=ut.el,O(y,j,ct)),It.asyncDep.then(()=>{Qe(()=>{y.isUnmounted||D()},q)});return}}let dt=j,At;Fi(y,!1),j?(j.el=ut.el,O(y,j,ct)):j=ut,Z&&La(Z),(At=j.props&&j.props.onVnodeBeforeUpdate)&&In(At,H,j,ut),Fi(y,!0);const lt=Kc(y),kt=y.subTree;y.subTree=lt,_(kt,lt,h(kt.el),bt(kt),y,q,st),j.el=lt.el,dt===null&&Wm(y,lt.el),z&&Qe(z,q),(At=j.props&&j.props.onVnodeUpdated)&&Qe(()=>In(At,H,j,ut),q)}else{let j;const{el:Z,props:z}=N,{bm:H,m:ut,parent:dt,root:At,type:lt}=y,kt=_r(N);Fi(y,!1),H&&La(H),!kt&&(j=z&&z.onVnodeBeforeMount)&&In(j,dt,N),Fi(y,!0);{At.ce&&At.ce._hasShadowRoot()&&At.ce._injectChildStyle(lt,y.parent?y.parent.type:void 0);const It=y.subTree=Kc(y);_(null,It,k,K,y,q,st),N.el=It.el}if(ut&&Qe(ut,q),!kt&&(j=z&&z.onVnodeMounted)){const It=N;Qe(()=>In(j,dt,It),q)}(N.shapeFlag&256||dt&&_r(dt.vnode)&&dt.vnode.shapeFlag&256)&&y.a&&Qe(y.a,q),y.isMounted=!0,N=k=K=null}};y.scope.on();const x=y.effect=new Ef(M);y.scope.off();const D=y.update=x.run.bind(x),Q=y.job=x.runIfDirty.bind(x);Q.i=y,Q.id=y.uid,x.scheduler=()=>hc(Q),Fi(y,!0),D()},O=(y,N,k)=>{N.component=y;const K=y.vnode.props;y.vnode=N,y.next=null,jm(y,N.props,K,k),Km(y,N.children,k),hi(),Gc(y),fi()},U=(y,N,k,K,q,st,ct,M,x=!1)=>{const D=y&&y.children,Q=y?y.shapeFlag:0,j=N.children,{patchFlag:Z,shapeFlag:z}=N;if(Z>0){if(Z&128){et(D,j,k,K,q,st,ct,M,x);return}else if(Z&256){W(D,j,k,K,q,st,ct,M,x);return}}z&8?(Q&16&&_t(D,q,st),j!==D&&u(k,j)):Q&16?z&16?et(D,j,k,K,q,st,ct,M,x):_t(D,q,st,!0):(Q&8&&u(k,""),z&16&&J(j,k,K,q,st,ct,M,x))},W=(y,N,k,K,q,st,ct,M,x)=>{y=y||Ns,N=N||Ns;const D=y.length,Q=N.length,j=Math.min(D,Q);let Z;for(Z=0;Z<j;Z++){const z=N[Z]=x?oi(N[Z]):On(N[Z]);_(y[Z],z,k,null,q,st,ct,M,x)}D>Q?_t(y,q,st,!0,!1,j):J(N,k,K,q,st,ct,M,x,j)},et=(y,N,k,K,q,st,ct,M,x)=>{let D=0;const Q=N.length;let j=y.length-1,Z=Q-1;for(;D<=j&&D<=Z;){const z=y[D],H=N[D]=x?oi(N[D]):On(N[D]);if(ji(z,H))_(z,H,k,null,q,st,ct,M,x);else break;D++}for(;D<=j&&D<=Z;){const z=y[j],H=N[Z]=x?oi(N[Z]):On(N[Z]);if(ji(z,H))_(z,H,k,null,q,st,ct,M,x);else break;j--,Z--}if(D>j){if(D<=Z){const z=Z+1,H=z<Q?N[z].el:K;for(;D<=Z;)_(null,N[D]=x?oi(N[D]):On(N[D]),k,H,q,st,ct,M,x),D++}}else if(D>Z)for(;D<=j;)ft(y[D],q,st,!0),D++;else{const z=D,H=D,ut=new Map;for(D=H;D<=Z;D++){const yt=N[D]=x?oi(N[D]):On(N[D]);yt.key!=null&&ut.set(yt.key,D)}let dt,At=0;const lt=Z-H+1;let kt=!1,It=0;const Nt=new Array(lt);for(D=0;D<lt;D++)Nt[D]=0;for(D=z;D<=j;D++){const yt=y[D];if(At>=lt){ft(yt,q,st,!0);continue}let L;if(yt.key!=null)L=ut.get(yt.key);else for(dt=H;dt<=Z;dt++)if(Nt[dt-H]===0&&ji(yt,N[dt])){L=dt;break}L===void 0?ft(yt,q,st,!0):(Nt[L-H]=D+1,L>=It?It=L:kt=!0,_(yt,N[L],k,null,q,st,ct,M,x),At++)}const Lt=kt?tg(Nt):Ns;for(dt=Lt.length-1,D=lt-1;D>=0;D--){const yt=H+D,L=N[yt],gt=N[yt+1],Pt=yt+1<Q?gt.el||dd(gt):K;Nt[D]===0?_(null,L,k,Pt,q,st,ct,M,x):kt&&(dt<0||D!==Lt[dt]?ot(L,k,Pt,2):dt--)}}},ot=(y,N,k,K,q=null)=>{const{el:st,type:ct,transition:M,children:x,shapeFlag:D}=y;if(D&6){ot(y.component.subTree,N,k,K);return}if(D&128){y.suspense.move(N,k,K);return}if(D&64){ct.move(y,N,k,Et);return}if(ct===me){i(st,N,k);for(let j=0;j<x.length;j++)ot(x[j],N,k,K);i(y.anchor,N,k);return}if(ct===Fo){v(y,N,k);return}if(K!==2&&D&1&&M)if(K===0)M.persisted&&!st[hn]?i(st,N,k):(M.beforeEnter(st),i(st,N,k),Qe(()=>M.enter(st),q));else{const{leave:j,delayLeave:Z,afterLeave:z}=M,H=()=>{y.ctx.isUnmounted?s(st):i(st,N,k)},ut=()=>{const dt=st._isLeaving||!!st[hn];st._isLeaving&&st[hn](!0),M.persisted&&!dt?H():j(st,()=>{H(),z&&z()})};Z?Z(st,H,ut):ut()}else i(st,N,k)},ft=(y,N,k,K=!1,q=!1)=>{const{type:st,props:ct,ref:M,children:x,dynamicChildren:D,shapeFlag:Q,patchFlag:j,dirs:Z,cacheIndex:z,memo:H}=y;if(j===-2&&(q=!1),M!=null&&(hi(),gr(M,null,k,y,!0),fi()),z!=null&&(N.renderCache[z]=void 0),Q&256){N.ctx.deactivate(y);return}const ut=Q&1&&Z,dt=!_r(y);let At;if(dt&&(At=ct&&ct.onVnodeBeforeUnmount)&&In(At,N,y),Q&6)mt(y.component,k,K);else{if(Q&128){y.suspense.unmount(k,K);return}ut&&Oi(y,null,N,"beforeUnmount"),Q&64?y.type.remove(y,N,k,Et,K):D&&!D.hasOnce&&(st!==me||j>0&&j&64)?_t(D,N,k,!1,!0):(st===me&&j&384||!q&&Q&16)&&_t(x,N,k),K&&$(y)}const lt=H!=null&&z==null;(dt&&(At=ct&&ct.onVnodeUnmounted)||ut||lt)&&Qe(()=>{At&&In(At,N,y),ut&&Oi(y,null,N,"unmounted"),lt&&(y.el=null)},k)},$=y=>{const{type:N,el:k,anchor:K,transition:q}=y;if(N===me){ht(k,K);return}if(N===Fo){b(y);return}const st=()=>{s(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(y.shapeFlag&1&&q&&!q.persisted){const{leave:ct,delayLeave:M}=q,x=()=>ct(k,st);M?M(y.el,st,x):x()}else st()},ht=(y,N)=>{let k;for(;y!==N;)k=f(y),s(y),y=k;s(N)},mt=(y,N,k)=>{const{bum:K,scope:q,job:st,subTree:ct,um:M,m:x,a:D}=y;Qc(x),Qc(D),K&&La(K),q.stop(),st&&(st.flags|=8,ft(ct,y,N,k)),M&&Qe(M,N),Qe(()=>{y.isUnmounted=!0},N)},_t=(y,N,k,K=!1,q=!1,st=0)=>{for(let ct=st;ct<y.length;ct++)ft(y[ct],N,k,K,q)},bt=y=>{if(y.shapeFlag&6)return bt(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const N=f(y.anchor||y.el),k=N&&N[dm];return k?f(k):N};let Tt=!1;const Ct=(y,N,k)=>{let K;y==null?N._vnode&&(ft(N._vnode,null,null,!0),K=N._vnode.component):_(N._vnode||null,y,N,null,null,null,k),N._vnode=y,Tt||(Tt=!0,Gc(K),Hf(),Tt=!1)},Et={p:_,um:ft,m:ot,r:$,mt:A,mc:J,pc:U,pbc:w,n:bt,o:n};return{render:Ct,hydrate:void 0,createApp:Fm(Ct)}}function za({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Fi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Qm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function hd(n,t,e=!1){const i=n.children,s=t.children;if(zt(i)&&zt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=oi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&hd(o,a)),a.type===va&&(a.patchFlag===-1&&(a=s[r]=oi(a)),a.el=o.el),a.type===Ze&&!a.el&&(a.el=o.el)}}function tg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function fd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:fd(t)}function Qc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function dd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?dd(t.subTree):null}const pd=n=>n.__isSuspense;function eg(n,t){t&&t.pendingBranch?zt(n)?t.effects.push(...n):t.effects.push(n):lm(n)}const me=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),Ji=[];let an=null;function Ot(n=!1){Ji.push(an=n?null:[])}function md(){Ji.pop(),an=Ji[Ji.length-1]||null}let Cr=1;function Ko(n,t=!1){Cr+=n,n<0&&an&&t&&(an.hasOnce=!0)}function gd(n){return n.dynamicChildren=Cr>0?an||Ns:null,md(),Cr>0&&an&&an.push(n),n}function Vt(n,t,e,i,s,r){return gd(at(n,t,e,i,s,r,!0))}function Ls(n,t,e,i,s){return gd(ve(n,t,e,i,s,!0))}function Zo(n){return n?n.__v_isVNode===!0:!1}function ji(n,t){return n.type===t.type&&n.key===t.key}const _d=({key:n})=>n??null,Bo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ye(n)||Xe(n)||Wt(n)?{i:_n,r:n,k:t,f:!!e}:n:null);function at(n,t=null,e=null,i=0,s=null,r=n===me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&_d(t),ref:t&&Bo(t),scopeId:Gf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(Jo(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ye(e)?8:16),Cr>0&&!o&&an&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&an.push(l),l}const ve=ng;function ng(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Cm)&&(n=Ze),Zo(n)){const a=Li(n,t,!0);return e&&Jo(a,e),Cr>0&&!r&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag=-2,a}if(fg(n)&&(n=n.__vccOpts),t){t=ig(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=on(a)),re(l)&&(uc(l)&&!zt(l)&&(l=Pe({},l)),t.style=ks(l))}const o=ye(n)?1:pd(n)?128:ma(n)?64:re(n)?4:Wt(n)?2:0;return at(n,t,e,i,s,o,r,!0)}function ig(n){return n?uc(n)||rd(n)?Pe({},n):n:null}function Li(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?sg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_d(c),ref:t&&t.ref?e&&r?zt(r)?r.concat(Bo(t)):[r,Bo(t)]:Bo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==me?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Li(n.ssContent),ssFallback:n.ssFallback&&Li(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Rr(u,l.clone(u)),u}function Vn(n=" ",t=0){return ve(va,null,n,t)}function gc(n,t){const e=ve(Fo,null,n);return e.staticCount=t,e}function Ve(n="",t=!1){return t?(Ot(),Ls(Ze,null,n)):ve(Ze,null,n)}function On(n){return n==null||typeof n=="boolean"?ve(Ze):zt(n)?ve(me,null,n.slice()):Zo(n)?oi(n):ve(va,null,String(n))}function oi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Li(n)}function Jo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(zt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Jo(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!rd(t)?t._ctx=_n:s===3&&_n&&(_n.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Wt(t)){if(i&65){Jo(n,{default:t});return}t={default:t,_ctx:_n},e=32}else t=String(t),i&64?(e=16,t=[Vn(t)]):e=8;n.children=t,n.shapeFlag|=e}function sg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=on([t.class,i.class]));else if(s==="style")t.style=ks([t.style,i.style]);else if(ca(s)){const r=t[s],o=i[s];o&&r!==o&&!(zt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ua(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function In(n,t,e,i=null){xn(n,t,7,[e,i])}const rg=td();let og=0;function ag(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||rg,r={uid:og++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ad(i,s),emitsOptions:ed(i,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:i.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=zm.bind(null,r),n.ce&&n.ce(r),r}let We=null;const vd=()=>We||_n;let Qo,Pr;{const n=fa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Qo=t("__VUE_INSTANCE_SETTERS__",e=>We=e),Pr=t("__VUE_SSR_SETTERS__",e=>Vs=e)}const Vr=n=>{const t=We;return Qo(n),n.scope.on(),()=>{n.scope.off(),Qo(t)}},tu=()=>{We&&We.scope.off(),Qo(null)};function xd(n){return n.vnode.shapeFlag&4}let Vs=!1;function lg(n,t=!1,e=!1){t&&Pr(t);const{props:i,children:s}=n.vnode,r=xd(n);Xm(n,i,r,t),$m(n,s,e||t);const o=r?cg(n,t):void 0;return t&&Pr(!1),o}function cg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Pm);const{setup:i}=e;if(i){hi();const s=n.setupContext=i.length>1?hg(n):null,r=Vr(n),o=Hr(i,n,0,[n.props,s]),a=mf(o);if(fi(),r(),(a||n.sp)&&!_r(n)&&fc(n),a){if(o.then(tu,tu),t)return o.then(l=>{Pr(!0);try{eu(n,l,t)}finally{Pr(!1)}}).catch(l=>{kr(l,n,0)});n.asyncDep=o}else eu(n,o)}else yd(n)}function eu(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:re(t)&&(n.setupState=Ff(t)),yd(n)}function yd(n,t,e){const i=n.type;n.render||(n.render=i.render||Gn);{const s=Vr(n);hi();try{Lm(n)}finally{fi(),s()}}}const ug={get(n,t){return Ge(n,"get",""),n[t]}};function hg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,ug),slots:n.slots,emit:n.emit,expose:t}}function xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ff(Zp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in vr)return vr[e](n)},has(t,e){return e in t||e in vr}})):n.proxy}function fg(n){return Wt(n)&&"__vccOpts"in n}const fn=(n,t)=>nm(n,t,Vs);function dg(n,t,e){try{Ko(-1);const i=arguments.length;return i===2?re(t)&&!zt(t)?Zo(t)?ve(n,null,[t]):ve(n,t):ve(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Zo(e)&&(e=[e]),ve(n,t,e))}finally{Ko(1)}}const pg="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fl;const nu=typeof window<"u"&&window.trustedTypes;if(nu)try{Fl=nu.createPolicy("vue",{createHTML:n=>n})}catch{}const Md=Fl?n=>Fl.createHTML(n):n=>n,mg="http://www.w3.org/2000/svg",gg="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,iu=si&&si.createElement("template"),_g={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?si.createElementNS(mg,n):t==="mathml"?si.createElementNS(gg,n):e?si.createElement(n,{is:e}):si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>si.createTextNode(n),createComment:n=>si.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>si.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{iu.innerHTML=Md(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=iu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},_i="transition",Qs="animation",Lr=Symbol("_vtc"),Sd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vg=Pe({},jf,Sd),xg=n=>(n.displayName="Transition",n.props=vg,n),yg=xg((n,{slots:t})=>dg(gm,Mg(n),t)),Bi=(n,t=[])=>{zt(n)?n.forEach(e=>e(...t)):n&&n(...t)},su=n=>n?zt(n)?n.some(t=>t.length>1):n.length>1:!1;function Mg(n){const t={};for(const V in n)V in Sd||(t[V]=n[V]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=Sg(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:v,onLeave:b,onLeaveCancelled:C,onBeforeAppear:R=p,onAppear:P=S,onAppearCancelled:J=v}=t,E=(V,rt,A,B)=>{V._enterCancelled=B,zi(V,rt?u:a),zi(V,rt?c:o),A&&A()},w=(V,rt)=>{V._isLeaving=!1,zi(V,h),zi(V,d),zi(V,f),rt&&rt()},X=V=>(rt,A)=>{const B=V?P:S,G=()=>E(rt,V,A);Bi(B,[rt,G]),ru(()=>{zi(rt,V?l:r),Zn(rt,V?u:a),su(B)||ou(rt,i,_,G)})};return Pe(t,{onBeforeEnter(V){Bi(p,[V]),Zn(V,r),Zn(V,o)},onBeforeAppear(V){Bi(R,[V]),Zn(V,l),Zn(V,c)},onEnter:X(!1),onAppear:X(!0),onLeave(V,rt){V._isLeaving=!0;const A=()=>w(V,rt);Zn(V,h),V._enterCancelled?(Zn(V,f),cu(V)):(cu(V),Zn(V,f)),ru(()=>{V._isLeaving&&(zi(V,h),Zn(V,d),su(b)||ou(V,i,m,A))}),Bi(b,[V,A])},onEnterCancelled(V){E(V,!1,void 0,!0),Bi(v,[V])},onAppearCancelled(V){E(V,!0,void 0,!0),Bi(J,[V])},onLeaveCancelled(V){w(V),Bi(C,[V])}})}function Sg(n){if(n==null)return null;if(re(n))return[Ha(n.enter),Ha(n.leave)];{const t=Ha(n);return[t,t]}}function Ha(n){return Ep(n)}function Zn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Lr]||(n[Lr]=new Set)).add(t)}function zi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Lr];e&&(e.delete(t),e.size||(n[Lr]=void 0))}function ru(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Eg=0;function ou(n,t,e,i){const s=n._endId=++Eg,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=bg(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function bg(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${_i}Delay`),r=i(`${_i}Duration`),o=au(s,r),a=i(`${Qs}Delay`),l=i(`${Qs}Duration`),c=au(a,l);let u=null,h=0,f=0;t===_i?o>0&&(u=_i,h=o,f=r.length):t===Qs?c>0&&(u=Qs,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?_i:Qs:null,f=u?u===_i?r.length:l.length:0);const d=u===_i&&/\b(?:transform|all)(?:,|$)/.test(i(`${_i}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function au(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>lu(e)+lu(n[i])))}function lu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function cu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Tg(n,t,e){const i=n[Lr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ta=Symbol("_vod"),Ed=Symbol("_vsh"),zo={name:"show",beforeMount(n,{value:t},{transition:e}){n[ta]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):tr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),tr(n,!0),i.enter(n)):i.leave(n,()=>{tr(n,!1)}):tr(n,t))},beforeUnmount(n,{value:t}){tr(n,t)}};function tr(n,t){n.style.display=t?n[ta]:"none",n[Ed]=!t}const wg=Symbol(""),Ag=/(?:^|;)\s*display\s*:/;function Rg(n,t,e){const i=n.style,s=ye(e);let r=!1;if(e&&!s){if(t)if(ye(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ur(i,a,"")}else for(const o in t)e[o]==null&&ur(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Pg(n,o,!ye(t)&&t?t[o]:void 0,a)||ur(i,o,a):ur(i,o,"")}}else if(s){if(t!==e){const o=i[wg];o&&(e+=";"+o),i.cssText=e,r=Ag.test(e)}}else t&&n.removeAttribute("style");ta in n&&(n[ta]=r?i.display:"",n[Ed]&&(i.display="none"))}const uu=/\s*!important$/;function ur(n,t,e){if(zt(e))e.forEach(i=>ur(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Cg(n,t);uu.test(e)?n.setProperty(ss(i),e.replace(uu,""),"important"):n[i]=e}}const hu=["Webkit","Moz","ms"],ka={};function Cg(n,t){const e=ka[t];if(e)return e;let i=Cn(t);if(i!=="filter"&&i in n)return ka[t]=i;i=vf(i);for(let s=0;s<hu.length;s++){const r=hu[s]+i;if(r in n)return ka[t]=r}return t}function Pg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ye(i)&&e===i}const fu="http://www.w3.org/1999/xlink";function du(n,t,e,i,s,r=Cp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(fu,t.slice(6,t.length)):n.setAttributeNS(fu,t,e):e==null||r&&!yf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Xn(e)?String(e):e)}function pu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Md(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=yf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Lg(n,t,e,i){n.addEventListener(t,e,i)}function Dg(n,t,e,i){n.removeEventListener(t,e,i)}const mu=Symbol("_vei");function Ig(n,t,e,i,s=null){const r=n[mu]||(n[mu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Og(t);if(i){const c=r[t]=zg(i,s);Lg(n,a,c,l)}else o&&(Dg(n,a,o,l),r[t]=void 0)}}const Ug=/(Once|Passive|Capture)$/,Ng=/^on:?(?:Once|Passive|Capture)$/;function Og(n){let t,e;for(;(e=n.match(Ug))&&!Ng.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ss(n.slice(2)),t]}let Ga=0;const Fg=Promise.resolve(),Bg=()=>Ga||(Fg.then(()=>Ga=0),Ga=Date.now());function zg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(zt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&xn(c,t,5,a)}}else xn(s,t,5,[i])};return e.value=n,e.attached=Bg(),e}const gu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hg=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Tg(n,i,o):t==="style"?Rg(n,e,i):ca(t)?ua(t)||Ig(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kg(n,t,i,o))?(pu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&du(n,t,i,o,r,t!=="value")):n._isVueCE&&(Gg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!ye(i)))?pu(n,Cn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),du(n,t,i,o))};function kg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&gu(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gu(t)&&ye(e)?!1:t in n}function Gg(n,t){const e=n._def.props;if(!e)return!1;const i=Cn(t);return Array.isArray(e)?e.some(s=>Cn(s)===i):Object.keys(e).some(s=>Cn(s)===i)}const Vg=["ctrl","shift","alt","meta"],Wg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Vg.some(e=>n[`${e}Key`]&&!t.includes(e))},Xg=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=Wg[t[o]];if(a&&a(s,t))return}return n(s,...r)})},jg=Pe({patchProp:Hg},_g);let _u;function qg(){return _u||(_u=Zm(jg))}const Yg=(...n)=>{const t=qg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Kg(i);if(!s)return;const r=t._component;!Wt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,$g(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function $g(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Kg(n){return ye(n)?document.querySelector(n):n}const Zg="modulepreload",Jg=function(n,t){return new URL(n,t).href},vu={},Ho=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=Jg(c,i),c in vu)return;vu[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Zg,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Qg={name:"小枫",enName:"Maple",title:"项目财务管理 · 报表统筹 · 业财融合",birth:"1999.04",phone:"17373513347",email:"235307012@qq.com",location:"广州番禺",joinDate:"2022.07",company:"中建四局交通投资建设有限公司广州分公司",summary:"在工程财务一线摸爬滚打 4 年：管过账、编过表、跑过税局、砍过成本。现在正做一件让自己兴奋的事——把 AI 和数据揉进财务里，让每一笔数据都能开口说话。"},t0={intro:`我是小枫，一名在工程财务一线工作 4 年的财务人。项目全周期核算、分公司合并报表、税务筹划、业财融合——这些不是简历上的关键词，而是我每天真实面对的战场。

在同事眼里，我是「较真」的那一个：账不平不睡觉，勾稽对不上就从头捋，逻辑必须闭环，数字必须讲得出理由。对财务和数据，我负责且认真。

在工作之外，我正走在财务数字化转型的路上：Excel 自动化、Power Query、AI 工具，能交给机器的绝不重复劳动，把自己留给人去思考、去判断。

我相信财务的终点不是把账做平，而是从数据里挖出经营的价值；AI 不会取代财务，但会用 AI 的财务，会走得更远。`,education:[{school:"湖南城市学院",major:"财务管理",degree:"本科 · 管理学学士 · 全日制",date:"2018.09 – 2022.06"}],certificates:["初级会计师","MS Office 二级","普通话二级乙等","驾驶证 C1","中级会计师（备考中：会计、财管）"],hobbies:[{icon:"📊",title:"数据处理",text:"热爱 Excel 深度应用，擅长 Power Query 数据清洗与自动化，自学 Power BI 可视化。"},{icon:"🛠️",title:"工具开发",text:"结合财务痛点开发「分包成本还原及调拨还原工具」，一键出表，提升团队填报效率。"},{icon:"🤝",title:"团队协作",text:"作为财务小组长，善于协调分工、组织培训，乐于分享经验，帮助新同事快速成长。"},{icon:"⚡",title:"策略爱好者",text:"爱好研究新函数与逻辑建模；英雄联盟资深玩家（大师段位），注重策略与反应。"}]},e0=[{name:"财务专业",score:95,tags:"中级会计师在考（会计、财管）"},{name:"报表与合并",score:92,tags:"合并报表编制 · 内部交易抵消 · 审计对接"},{name:"数据处理",score:90,tags:"Excel 高级应用 · Power Query · 自研成本还原工具"},{name:"信息系统",score:86,tags:"SAP · 业财一体化软件 · 久其报表系统"},{name:"办公与可视化",score:84,tags:"MS Office 二级 · Power BI 自学 · AI 软件"}],n0={indicators:["财务核算","报表统筹","业财融合","数据分析","信息化工具","团队管理"],values:[95,92,88,90,85,82]},i0=[{id:1,title:"项目财务 · 报表小组长 · 资产化债专员",company:"中建四局交通投资建设有限公司广州分公司",date:"2022.07 – 2026.07",summary:"4 年项目财务管理经验，探索 AI 与财务数字化转型",points:["项目财务：项目全周期核算、资金、税务、成本与业财融合","报表小组长：分公司合并报表、财务分析与审计对接","资产化债专员：资产处置与债务优化，化债创效"],tags:["项目财务","合并报表","资产化债"]}],s0=[{name:"中建四局广州分公司",start:"2022.07",end:"2026.07",color:"#f5b942",detail:"项目财务 · 报表小组长 · 资产化债专员"},{name:"湖南城市学院 · 财务管理",start:"2018.09",end:"2022.06",color:"#8b5cf6",detail:"本科 · 管理学学士"}],r0=[{id:1,name:"香港城市大学（东莞）项目（一期）工程",city:"东莞",coord:[113.75,23.02],status:"",image:"",note:""},{id:2,name:"东莞市松山湖中心医院心血管病诊疗中心大楼工程项目",city:"东莞",coord:[113.75,23.02],status:"",image:"",note:""},{id:3,name:"西丽医院改扩建代建施工总承包",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:4,name:"罗湖区居民小区二次供水设施提标改造工程（第一阶段）(施工)Ⅴ标段",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:5,name:"南山区红花岭工业南区升级改造工程",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:6,name:"东莞市角美粮食储备库改扩建项目（二期）",city:"东莞",coord:[113.75,23.02],status:"",image:"",note:""},{id:7,name:"“一馆一中心”项目地基与基础工程",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:8,name:"深圳供电局有限公司中康安居房及变电综合楼主体工程",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""}],o0=[{id:1,title:"分包成本还原及调拨还原工具",type:"财务工具",date:"2024",tags:["Excel","自动化","VBA"],desc:"结合财务痛点自主开发：一键还原分包成本与调拨数据、一键出表，帮助同事将效益表填报效率提升数倍。",link:"",cover:"linear-gradient(135deg,#0ea5e9,#6366f1)"},{id:2,title:"财务监控台账",type:"财务工具",date:"2023",tags:["Excel","Power Query","预算管理"],desc:"按月跟踪各项目营收、利润、现金流，对标预算自动预警，支撑经营分析会决策。",link:"",cover:"linear-gradient(135deg,#22d3ee,#0ea5e9)"},{id:3,title:"抵酒业务一体化台账",type:"财务工具",date:"2024",tags:["台账","业财融合","流程"],desc:"需求—发货—跟踪一体台账，按周闭环，从报需到发货 ≤ 15 天；支撑累计化债 800 万+。",link:"",cover:"linear-gradient(135deg,#8b5cf6,#d946ef)"},{id:4,title:"个人档案库网站（本网站）",type:"网页作品",date:"2026.08",tags:["HTML/CSS","JavaScript","ECharts","可视化"],desc:"深空科幻风格交互式个人网站：总看板 + 3D 地球 + 作品集 + 博客 + 地图，支持管理后台增删改与静态导出。",link:"",cover:"linear-gradient(135deg,#0f172a,#1e3a8a)"}],a0=[{id:1,title:"Power Query 学习笔记：三步完成数据清洗",category:"技能学习",tags:["Power Query","Excel","数据清洗"],date:"2025.03",summary:"从表头处理、类型修正到合并查询，用三步套路把脏数据变成可分析的结构化表格。",markdown:`## 为什么是 Power Query

财务对账最耗时间的不是计算，而是**清洗**：表头不规范、文本型数字、一表多用途。Power Query（Excel 内置）可以录制并复用每一步清洗动作。

## 三步套路

1. **表头处理**：\`将第一行用作标题\`，删除多余的行列
2. **类型修正**：把「文本」列改为「整数 / 小数 / 日期」，避免求和为 0
3. **合并查询**：以项目编码为键，\`左外部\` 合并分包台账与付款台账

> 关键心法：清洗步骤要**可复用** —— 下次新数据直接「刷新」即可。

## 示例代码（M 语言）

\`\`\`
let
    源 = Excel.CurrentWorkbook(){[Name="台账"]}[Content],
    提升表头 = Table.PromoteHeaders(源, [PromoteAllScalars=true]),
    更改类型 = Table.TransformColumnTypes(提升表头,{{"金额", type number}})
in
    更改类型
\`\`\`

## 收获

- 自动化数据清洗，以达到可更进一步分析的状态

---`},{id:2,title:"本站开发记录：从网页简历到 3D 地球档案库",category:"技术实践",tags:["网站开发","Three.js","ECharts","可视化"],date:"2026.08",summary:"从一份 PDF 简历起步，做成可交互的数据可视化个人档案库：仪表盘、中国地图、3D 地球、内容管理与云端导出。",markdown:`# 本站开发记录：从网页简历到 3D 地球档案库

> 小枫 · 个人档案库（xiaofeng-5fv.pages.dev）—— 深空科幻风格的数据可视化个人网站。

## 项目定位

从一份 PDF 简历起步，把它做成可交互的数据可视化个人档案库：首页总看板、3D 旋转地球、关于我（成长轨迹 · 宇宙穿梭时间轴）、作品集、学习记录、地点地图；支持站内可视化增删改内容（数据存本地 data.json），并一键导出静态只读版上传云端。

## 开发时间线（2026.08）

### 2026.08.15 · 初始搭建

- 建立项目骨架：index.html + css/style.css + js/app.js + js/md.js + data/data.json
- 用 ECharts 实现首页 KPI 卡片、能力雷达图、经历时间轴（甘特）、中国地图打点
- 下载全国 GeoJSON（DataV）注册为 ECharts 地图，effectScatter 脉冲点 + scatter 项目点

### 2026.08.16 · 交互与地图

- 中国地图：城市点击自动放大聚焦 + 项目信息面板（城市级汇总 + 项目明细卡）
- 地点索引列表与地图联动；滚轮在图表区域缩放、页面区域滚动互不冲突
- 本地服务 server.js（静态 + 数据读写 + 导出），启动网站.bat 一键启动

### 2026.08.17 · 3D 地球（Three.js）

- 还原 yzyy.cloud/earth 风格的 3D 地球：白天 / 夜晚 Shader 纹理混合、云层、大气辉光、轨道光环、人造卫星、背景星系
- 金色点位 = 工作地（广州）、紫色 = 母校（益阳）、青色 = 项目城市（东莞 / 深圳，点大小随项目数）
- 中国省份边界高亮（china.geo.js，青色发光线条）；飞线：母校 → 工作 → 项目城市
- 点击点位 → 地球自动放大到城市 + 弹出项目面板；🌐 回到全球视角恢复自动旋转
- 悬停 tooltip、金色定位光圈、标签 DOM 投影

### 2026.08.18 · 收尾、修复与部署

- 全站品牌更新：小枫 / Maple（单字 枫）
- 修复：点击地球点位后地球消失（globeFocus 参数改为数组，经纬度不再错位成 NaN）
- 修复：导出黑地球（贴图内联 dataURL，导出静态版任何环境都不白球 / 黑球）
- 仓库策略：仓库仅保留 export/ 部署内容；本地源码独立维护
- 部署：Cloudflare Pages（xiaofeng-5fv.pages.dev）

## 提交记录

- 50a3c82 初始提交：个人档案库（export 静态版 + 源码）
- 03ee00a 修复导出黑地球（贴图内联 dataURL）+ 优化面板导出提示
- d450c58 仓库仅保留 export/ 部署内容，源码 / 后台移出仓库
- e3e7345 自动推送 2026-08-18-02-21
- 38ce376 全站品牌更新：小枫 / Maple（单字 枫）
- 5930da3 修复：点击地球点位后地球消失（globeFocus 参数改为数组）

## 技术栈回顾

纯前端 + 零依赖 Node 本地服务，无外部 CDN、完全离线可用：

- Three.js（three.min.js + OrbitControls）→ 3D 地球
- ECharts（本地化）→ 2D 中国地图与图表
- 原生 JS 单页多视图 + Markdown 渲染（js/md.js）
- 数据：data/data.json（增删改自动备份 data.json.bak）

## 后续计划

- 学习记录持续更新（本文 + 3D 地球开发文档）
- 更多项目图片与作品案例
- 站点性能与移动端体验继续优化`},{id:4,title:"🌐 3D 地球开发文档（diqiu-feng）",category:"技术实践",tags:["Three.js","3D 地球","开发文档"],date:"2026.08",summary:"个人档案库首页 3D 地球的完整开发文档：架构、场景构建、交互聚焦、昼夜切换、已知问题与扩展指南（已沉淀为 diqiu-feng 技能）。",markdown:`# 🌐 3D 地球开发文档（diqiu-feng）

> 个人档案库首页 3D 旋转地球的完整开发文档，已沉淀为 Codex 技能 \`diqiu-feng\`。
> 风格参考：yzyy.cloud/earth

## 1. 概述

纯 Three.js 实现的 3D 地球，无 CDN、完全离线。地球自动旋转、可拖拽缩放；贴球面渲染城市光点（工作 / 母校 / 项目城市），点击点位自动聚焦到城市并联动项目面板；支持白天 / 夜晚 / 自动昼夜切换。

## 2. 依赖与文件

| 文件 | 说明 |
| --- | --- |
| \`js/globe3d.js\` | 地球模块（Globe3D 单例），场景构建与交互全在这里 |
| \`js/app.js\` | 站点集成：initGlobe / globePoints / globeFocus 等 |
| \`earth-demo.html\` | 独立演示页（可单独打开验证地球） |
| \`assets/three.min.js\` | Three.js 运行时（动态加载） |
| \`assets/OrbitControls.js\` | 轨道控制器（动态加载） |
| \`assets/china.geo.js\` | 中国省份边界 GeoJSON（懒加载） |
| \`assets/earth3d-day.jpg\` / \`assets/earth3d-night.jpg\` | 昼夜贴图（**注意：两者对调用**） |
| \`assets/earth3d-cloud.png\` / \`assets/earth3d-aperture.jpg\` | 云层 / 光环贴图 |

## 3. 初始化流程

\`\`\`js
const g = await Globe3D.init(el, { radius: 100 });
\`\`\`

- 动态加载 three.min.js 与 OrbitControls.js（window.THREE 不存在时）
- 创建 WebGLRenderer（antialias + alpha，pixelRatio 上限 1.5）
- 相机默认对准中国（34.5N, 104.5E），入场 2.2s 从远处飞近
- OrbitControls：启用阻尼、禁用平移、距离 EARTH_R*1.25 ~ *9、自动旋转
- 构建场景：地球 → 云层 → 大气 → 光环 → 卫星 → 星系 → 覆盖层（标签 / tooltip）
- IntersectionObserver + visibilitychange：离开视口 / 标签页隐藏时暂停渲染循环

## 4. 场景构建

### 4.1 地球主体 _buildEarth()

ShaderMaterial 实现昼夜混合：

- uniforms：dayMap / nightMap / uDayNight / uSunDir
- **白天 / 夜晚贴图对调**：earth3d-night（较亮）作白天，earth3d-day（深蓝）作夜晚
- 片元着色器：\`mix(night * 1.6, day * 1.25, uDayNight) * lit\`，lit 由法线与太阳方向点积 + 环境光 0.38 计算

### 4.2 云层 / 大气 / 光环 / 卫星 / 星系

- 云层：透明 MeshLambertMaterial 贴图球（半径 1.025R），动画中缓慢自转
- 大气：AdditiveBlending 辉光 Shader（uColor=#4d9fff，uPower=3.2）
- 光环：相机朝向的细圆环（1.42R，LineBasicMaterial 青色发光）
- 卫星：沿光环公转的银灰色圆柱 + 太阳能板 + 光晕
- 星系：背景装饰
- 金色定位光圈 showRing()：先收缩定位，再持续脉动（呼吸 + 缓旋）

### 4.3 数据点 setPoints()

\`\`\`js
points: [{ name, type: "work|study|project", city, count, value: [lng, lat, 0, n], note, projects }]
\`\`\`

- 颜色：work=#f5b942（金） study=#a78bfa（紫） project=#22d3ee（青）
- 用 canvas 径向渐变生成发光 Sprite（makeGlowSprite），贴在球面 1.012R
- 每个点配一个 DOM 标签（.globe3d-label），约 15fps 更新位置（不每帧改 DOM）

### 4.4 飞线 buildFlyLines()

- 输入连接 \`[{ from:[lng,lat], to:[lng,lat], color, colorHex }]\`
- 起点 / 终点贴球面 1.01R，中点抬到 1.5R，QuadraticBezierCurve3 弧线
- 每条线一个移动光点（comet），速度 0.22~0.34 随机

### 4.5 中国省份边界 buildChinaBorders(geo)

- 遍历 china.geo.js features，把每个 Polygon ring 的相邻点经纬度转三维向量
- LineSegments 青色发光线条（0x35e0ff，AdditiveBlending），贴在 1.01R

## 5. 交互

- pointermove → 射线拾取（Raycaster 对 Sprite 求交）→ 悬停放大 1.55 倍 + tooltip + 金色光圈
- pointerdown（左键）→ 点击回调 onPointClick(data)
- focusOn(lng, lat, dist)：沿城市径向摆动相机到屏幕中央，暂停自动旋转，球面插值（相机方向 slerp + 距离 lerp，平滑不穿越地球），1s 动画
  - dist 兼容站点原 echarts 语义：55≈中国视角、170≈全球视角
- resetView()：恢复自动旋转 + 回到中国视角（1.2s）
- setDayNight(isDay) / setOverride("auto|day|night")：昼夜跟随北京时间或手动

## 6. 站点集成（app.js）

- initGlobe()：懒加载 china.geo.js → Globe3D.init → setPoints(globePoints()) → buildChinaBorders → buildFlyLines（母校→工作→项目城市）→ onPointClick 联动 ProjPanel → setDayNight
- globePoints()：项目按城市聚合为一个点（value 第 4 位 = 项目数），+ 地点（工作 / 母校）
- globeFocus(coord, distance)：**coord 必须传 [经度, 纬度] 数组**（拆参会导致 NaN）
- globeChina / globeLocate / globeShine / globeReset / toggleGlobeDayNight / isSoftwareGL / initGlobeBrightness

## 7. 已知问题与踩坑

| 问题 | 原因 / 解法 |
| --- | --- |
| 点击点位后地球消失 | globeFocus 参数拆成独立参数 → 经纬度 NaN；必须传数组 |
| 导出 / 云端白球或黑球 | 贴图路径失效；导出时贴图内联 dataURL |
| 无 GPU 卡顿 | 软件渲染（SwiftShader/llvmpipe）自动关闭 bloom |
| echarts-gl 2.0.9 兼容 | effectScatter3D/lines3D 与 echarts5 不兼容，改用多层 scatter3D 或直接 Three.js |
| 标签闪烁 | DOM 覆盖层 15fps 更新，不要每帧操作 |

## 8. 如何扩展

- 加城市：data.json → locations 或 projects（同城自动聚合为一点）
- 改点位颜色：setPoints() 中按 type 映射
- 换贴图：替换 assets/earth3d-*.jpg / png（注意昼夜对调）
- 更多飞线：buildFlyLines(conns) 传入新连接
- 独立部署：earth-demo.html 单页可脱离站点运行

## 9. 技能位置

本文档对应 Codex 技能 \`diqiu-feng\`（C:/Users/HUAWEI/.codex/skills/diqiu-feng/），内含完整源码、演示页、贴图与依赖库，可整体复用到其他项目。`},{id:3,title:"SAP 报表合并小技巧：内部交易抵消的检查清单",category:"工作沉淀",tags:["SAP","合并报表","方法论"],date:"2025.11",summary:"200+ 项目合并时最容易漏抵消的 5 个场景，整理成清单后错误率明显下降。",markdown:`## 合并报表的痛点

分公司 9 个节点、200+ 项目合并，最怕**内部交易未抵消**导致的虚增：

1. 项目间材料调拨（有结算单但未入账）
2. 内部分包（总包-分包互为关联方）
3. 资金拆借利息
4. 应收应付对开
5. 固定资产内部销售

## 检查清单（每月节点必查）

- [x] 调拨单与账面金额核对一致
- [x] 分包成本与应付台账勾稽
- [x] 内部往来科目余额方向正确
- [x] 抵消分录摘要规范可追溯

## 效果

建立清单后，节点报表差错率明显下降，2025 年报实现**无保留意见**。

*本文为示例文章，可在「管理 → 学习记录」中编辑或删除。*`}],l0=[{name:"广州",coord:[113.26,23.13],type:"work",note:"现居 · 公司所在地（中建四局广州分公司）"},{name:"益阳",coord:[112.36,28.55],type:"study",note:"母校 · 湖南城市学院（2018–2022）"}],c0={siteTitle:"小枫 · 个人档案库",footerNote:"数据可视化档案 · ECharts 驱动 · 本地编辑 / 云端展示",siteStart:"2026-08-15",adminPassword:"houkanfeng123.."},u0=[{date:"2026-08-20",title:"看板·档案库合体上线",desc:"3D 数据看板与个人档案库合并为同一应用部署，一站式管理。"},{date:"2026-10-01",title:"国庆 · 站点更新计划",desc:"国庆假期：整理年度数据、规划下阶段内容更新。"}],h0={profile:Qg,about:t0,skills:e0,radar:n0,experience:i0,timeline:s0,projects:r0,portfolio:o0,blog:a0,locations:l0,settings:c0,calendar:u0},f0="kanbanFeng_data";function bd(){try{const n=localStorage.getItem(f0);if(n){const t=JSON.parse(n);if(t&&typeof t=="object")return t}}catch{}return null}const ri=pa({loading:!1,error:null,data:Object.assign({},h0,bd()||{})});async function Va(){ri.loading=!0;try{const n=bd();if(n){Object.assign(ri.data,n),ri.error=null;return}const t=await fetch("./data/data.json",{cache:"no-store"});if(!t.ok)throw new Error("HTTP "+t.status);const e=await t.json();e&&typeof e=="object"&&(Object.assign(ri.data,e),ri.error=null)}catch(n){ri.error=n&&n.message?n.message:String(n)}finally{ri.loading=!1}}function Wr(){return{state:ri,data:Vo(ri.data)}}typeof window<"u"&&(Va(),setInterval(Va,6e4),window.addEventListener("visibilitychange",()=>{document.hidden||Va()}));function vi(n){const t=Number(n)||0;return t>=1e8?(t/1e8).toFixed(2)+" 亿":t>=1e4?(t/1e4).toFixed(1)+" 万":String(t)}function hr(n){const t=new Map;return(n||[]).forEach(e=>{const i=e.city||"未分类";t.has(i)||t.set(i,{city:i,coord:e.coord,list:[]}),t.get(i).list.push(e)}),[...t.values()].map(e=>({city:e.city,coord:e.coord,list:e.list,count:e.list.length,contract:e.list.reduce((i,s)=>i+(Number(s.contract)||0),0),done:e.list.reduce((i,s)=>i+(Number(s.done)||0),0),received:e.list.reduce((i,s)=>i+(Number(s.received)||0),0)}))}const Ii=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},d0={class:"topbar"},p0={class:"brand"},m0={class:"brand-name"},g0={class:"brand-en"},_0={class:"top-right"},v0={class:"epoch num"},x0={class:"clock num"},y0={__name:"TopBar",setup(n){const{data:t}=Wr(),e=oe(""),i=oe("");let s=null;const r=a=>String(a).padStart(2,"0");function o(){const a=new Date;e.value=`${a.getFullYear()}-${r(a.getMonth()+1)}-${r(a.getDate())} ${r(a.getHours())}:${r(a.getMinutes())}:${r(a.getSeconds())}`;const l=new Date(t.settings&&t.settings.siteStart||"2026-08-15");let c=a-l;c<0&&(c=0);const u=Math.floor(c/864e5),h=Math.floor(c/36e5)%24,f=Math.floor(c/6e4)%60,d=Math.floor(c/1e3)%60;i.value=`${String(u).padStart(3,"0")}:${r(h)}:${r(f)}:${r(d)}`}return Di(()=>{o(),s=setInterval(o,1e3)}),Ys(()=>clearInterval(s)),(a,l)=>(Ot(),Vt("header",d0,[at("div",p0,[at("span",m0,$t(Be(t).profile.name),1),at("span",g0,$t(Be(t).profile.enName),1)]),at("div",_0,[at("span",v0,[l[0]||(l[0]=Vn("⏳ 纪元存在时间 ",-1)),at("b",null,$t(i.value),1)]),at("span",x0,$t(e.value),1)])]))}},M0=Ii(y0,[["__scopeId","data-v-117ca280"]]),S0={class:"left-panel"},E0={class:"panel card-profile"},b0={class:"profile-head"},T0={class:"avatar"},w0={class:"p-name"},A0={class:"p-title"},R0={class:"p-intro"},C0={class:"panel card-control"},P0={class:"ctrl-group"},L0={class:"ctrl-btns"},D0={class:"ctrl-group"},I0={class:"ctrl-btns"},U0={class:"ctrl-group"},N0={class:"ctrl-btns"},O0={class:"ctrl-group"},F0={class:"seg"},B0={key:0,class:"ctrl-group"},z0={class:"ctrl-btns"},H0={key:1,class:"ctrl-group"},k0={class:"ctrl-btns"},G0={key:2,class:"ctrl-group"},V0={class:"ctrl-btns"},W0={class:"seg"},X0={class:"seg"},j0={__name:"LeftPanel",props:{viewMode:{type:String,default:"earth"},dayNightMode:{type:String,default:"auto"},rotating:{type:Boolean,default:!0}},emits:["set-view","cycle-daynight","toggle-rotate","reset","archive","toggle-charts","fleet","tb-start","tb-pause","tb-reset","tb-speed","tb-preset","tb-kick"],setup(n,{emit:t}){const e=t,{data:i}=Wr(),s={auto:"昼夜·自动",day:"白天",night:"夜晚"};return(r,o)=>(Ot(),Vt("aside",S0,[at("section",E0,[o[21]||(o[21]=at("div",{class:"panel-title"},[Vn("小枫 · 数据大屏"),at("span",{class:"en"},"Maple")],-1)),at("div",b0,[at("div",T0,$t(Be(i).profile.name.slice(0,1)),1),at("div",null,[at("p",w0,[Vn($t(Be(i).profile.name),1),at("i",null,$t(Be(i).profile.enName),1)]),at("p",A0,$t(Be(i).profile.title),1)])]),at("p",R0,$t(Be(i).profile.summary),1)]),at("section",C0,[o[37]||(o[37]=at("div",{class:"panel-title"},[Vn("控制面板"),at("span",{class:"en"},"Control")],-1)),at("div",P0,[o[22]||(o[22]=at("p",{class:"ctrl-label"},"个人档案库",-1)),at("div",L0,[at("button",{class:"cbtn gold",onClick:o[0]||(o[0]=a=>e("archive"))},"📄 进入个人档案库")]),o[23]||(o[23]=at("p",{class:"ctrl-hint"},"也可长按中央地球（空白处）进入",-1))]),at("div",D0,[o[24]||(o[24]=at("p",{class:"ctrl-label"},"数据图表",-1)),at("div",I0,[at("button",{class:"cbtn",onClick:o[1]||(o[1]=a=>e("toggle-charts"))},"📊 数据图表")]),o[25]||(o[25]=at("p",{class:"ctrl-hint"},"作品类型分布 + 博客分类统计（ECharts）",-1))]),at("div",U0,[o[26]||(o[26]=at("p",{class:"ctrl-label"},"三体舰队演示",-1)),at("div",N0,[at("button",{class:"cbtn gold",onClick:o[2]||(o[2]=a=>e("fleet"))},"🚀 战舰曲率跳跃 · 水滴突袭")]),o[27]||(o[27]=at("p",{class:"ctrl-hint"},"恒星级战舰曲率进场 → 水滴突袭摧毁 → 曲率出场（全屏动画）",-1))]),at("div",O0,[o[28]||(o[28]=at("p",{class:"ctrl-label"},"中央视图",-1)),at("div",F0,[at("button",{class:on(["seg-btn",{on:n.viewMode==="earth"}]),onClick:o[3]||(o[3]=a=>e("set-view","earth"))},"🌍 地球",2),at("button",{class:on(["seg-btn",{on:n.viewMode==="china"}]),onClick:o[4]||(o[4]=a=>e("set-view","china"))},"🗺️ 中国地图",2),at("button",{class:on(["seg-btn",{on:n.viewMode==="threebody"}]),onClick:o[5]||(o[5]=a=>e("set-view","threebody"))},"☀️ 三体模拟",2)])]),n.viewMode==="earth"?(Ot(),Vt("div",B0,[o[29]||(o[29]=at("p",{class:"ctrl-label"},"地球控制",-1)),at("div",z0,[at("button",{class:"cbtn",onClick:o[6]||(o[6]=a=>e("cycle-daynight"))},$t(s[n.dayNightMode]),1),at("button",{class:"cbtn",onClick:o[7]||(o[7]=a=>e("toggle-rotate"))},$t(n.rotating?"旋转·开":"旋转·关"),1),at("button",{class:"cbtn",onClick:o[8]||(o[8]=a=>e("reset"))},"复位视角")]),o[30]||(o[30]=at("p",{class:"ctrl-hint"},"点击地球点位 → 聚焦 + 项目明细；点击轨道星球 → 经历详情",-1))])):n.viewMode==="china"?(Ot(),Vt("div",H0,[o[31]||(o[31]=at("p",{class:"ctrl-label"},"地图控制",-1)),at("div",k0,[at("button",{class:"cbtn",onClick:o[9]||(o[9]=a=>e("reset"))},"复位视角")]),o[32]||(o[32]=at("p",{class:"ctrl-hint"},"落点：工作·广州 / 母校·益阳 / 项目城市·东莞·深圳；钻入省份后仍显示该省内落点，可点击弹详情",-1))])):(Ot(),Vt("div",G0,[o[33]||(o[33]=at("p",{class:"ctrl-label"},"三体模拟控制",-1)),at("div",V0,[at("button",{class:"cbtn",onClick:o[10]||(o[10]=a=>e("tb-start"))},"▶ 开始"),at("button",{class:"cbtn",onClick:o[11]||(o[11]=a=>e("tb-pause"))},"⏸ 暂停"),at("button",{class:"cbtn",onClick:o[12]||(o[12]=a=>e("tb-reset"))},"↺ 重置"),at("button",{class:"cbtn",onClick:o[13]||(o[13]=a=>e("tb-kick"))},"⚡ 扰动")]),o[34]||(o[34]=at("p",{class:"ctrl-label tb-sub"},"速度",-1)),at("div",W0,[at("button",{class:"seg-btn",onClick:o[14]||(o[14]=a=>e("tb-speed",.5))},"0.5×"),at("button",{class:"seg-btn",onClick:o[15]||(o[15]=a=>e("tb-speed",1))},"1×"),at("button",{class:"seg-btn",onClick:o[16]||(o[16]=a=>e("tb-speed",2))},"2×"),at("button",{class:"seg-btn",onClick:o[17]||(o[17]=a=>e("tb-speed",4))},"4×")]),o[35]||(o[35]=at("p",{class:"ctrl-label tb-sub"},"预设",-1)),at("div",X0,[at("button",{class:"seg-btn",onClick:o[18]||(o[18]=a=>e("tb-preset","figure8"))},"8字"),at("button",{class:"seg-btn",onClick:o[19]||(o[19]=a=>e("tb-preset","binary"))},"大质量+双星"),at("button",{class:"seg-btn",onClick:o[20]||(o[20]=a=>e("tb-preset","chaos"))},"随机混沌")]),o[36]||(o[36]=at("p",{class:"ctrl-hint"},"三颗恒星在万有引力下运动；「扰动」随机给一颗星一个速度脉冲，观察混沌演化",-1))]))])]))}},q0=Ii(j0,[["__scopeId","data-v-989c3c57"]]),Y0={class:"panel card-calendar"},$0={class:"cal-head"},K0={class:"cal-ym"},Z0={class:"num"},J0={class:"num"},Q0={class:"cal-week"},t_={class:"cal-grid"},e_=["onMouseenter","onClick"],n_={class:"cal-daynum"},i_={key:0,class:"cal-today-tag"},s_={key:1,class:"cal-dots"},r_=["title"],o_={class:"cal-detail"},a_={class:"cd-head"},l_={class:"num"},c_={class:"cd-lunar"},u_={key:0},h_={key:0,class:"cd-list"},f_={class:"cd-tag"},d_={key:0},p_={key:1,class:"cd-empty"},m_="0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758",g_={__name:"CalendarPanel",emits:["select-day"],setup(n,{emit:t}){const e=t,{data:i}=Wr(),s={1:{1:"元旦"},2:{14:"情人节"},3:{8:"妇女节",12:"植树节",14:"白色情人节"},4:{1:"愚人节",22:"世界地球日"},5:{1:"劳动节",4:"青年节",12:"国际护士节",20:"网络情人节"},6:{1:"儿童节"},7:{1:"建党节"},8:{1:"建军节"},9:{10:"教师节"},10:{1:"国庆节",31:"万圣节"},11:{11:"光棍节"},12:{24:"平安夜",25:"圣诞节",31:"跨年夜"}},r=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"];function o(O,U){return new Date(315569259747e-1*(O-1900)+Number(m_.split(",")[U])*6e4+Date.UTC(1900,0,6,2,5)).getUTCDate()}const a=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835],l=["正","二","三","四","五","六","七","八","九","十","冬","腊"],c=["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"],u={"1-1":"春节","1-15":"元宵节","2-2":"龙抬头","5-5":"端午节","7-7":"七夕节","7-15":"中元节","8-15":"中秋节","9-9":"重阳节","12-8":"腊八节","12-23":"小年"};function h(O){return a[O-1900]&15}function f(O){return h(O)?a[O-1900]&65536?30:29:0}function d(O,U){return a[O-1900]&65536>>U?30:29}function g(O){let U=348;for(let W=32768;W>8;W>>=1)U+=a[O-1900]&W?1:0;return U+f(O)}function _(O,U,W){const et=new Date(1900,0,31);let ot=Math.floor((new Date(O,U-1,W)-et)/864e5),ft,$=0;for(ft=1900;ft<2101&&ot>0;ft++)$=g(ft),ot-=$;ot<0&&(ot+=$,ft--);const ht=ft;let mt=h(ht),_t=!1,bt;for(ft=1;ft<13&&ot>0;ft++)mt>0&&ft===mt+1&&!_t?(--ft,_t=!0,$=f(ht)):$=d(ht,ft),_t&&ft===mt+1&&(_t=!1),ot-=$;ot===0&&mt>0&&ft===mt+1&&(_t?_t=!1:(_t=!0,--ft)),ot<0&&(ot+=$,--ft),bt=ft;const Tt=ot+1;return{year:ht,month:bt,day:Tt,isLeap:_t}}function m(O){return(O.isLeap?"闰":"")+(O.month===12?"腊":l[O.month-1]||"")+"月"+c[O.day-1]}function p(O,U){return O.month===12&&O.day===d(U,12)?"除夕":u[O.month+"-"+O.day]||""}const S=fn(()=>{const O=new Map;return(i.calendar||[]).forEach(U=>{if(!U||!U.date)return;const W=U.date.slice(0,7);O.has(W)||O.set(W,[]),O.get(W).push(U)}),O}),v=new Date,b=oe(v.getFullYear()),C=oe(v.getMonth()+1),R=oe({y:v.getFullYear(),m:v.getMonth()+1,d:v.getDate()}),P=oe("");function J(O){let U=C.value+O,W=b.value;U<1?(U=12,W--):U>12&&(U=1,W++),b.value=W,C.value=U}function E(){b.value=R.value.y,C.value=R.value.m}const w=["一","二","三","四","五","六","日"],X=fn(()=>{const O=b.value,U=C.value,et=(new Date(O,U-1,1).getDay()+6)%7,ot=new Date(O,U,0).getDate(),ft=[],$=S.value.get(String(O)+"-"+String(U).padStart(2,"0"))||[],ht={};$.forEach(mt=>{const _t=Number(mt.date.slice(8,10));(ht[_t]=ht[_t]||[]).push(mt)});for(let mt=0;mt<42;mt++){const _t=mt-et+1,bt=_t<1||_t>ot;let Tt=O,Ct=U,Et=_t;if(_t<1){const M=new Date(O,U-1,0).getDate();Tt=U===1?O-1:O,Ct=U===1?12:U-1,Et=M+_t}_t>ot&&(Tt=U===12?O+1:O,Ct=U===12?1:U+1,Et=_t-ot);const Ht=_(Tt,Ct,Et),y=[],N=s[Ct]&&s[Ct][Et];N&&y.push({type:"fest",title:N});const k=(Ct-1)*2,K=o(Tt,k),q=o(Tt,k+1);Et===K&&y.push({type:"term",title:r[k]}),Et===q&&y.push({type:"term",title:r[k+1]});const st=p(Ht,Tt);st&&y.push({type:"lunar",title:st});const ct=ht[Et];ct&&ct.forEach(M=>y.push({type:"event",title:M.title,desc:M.desc||"",date:M.date})),ft.push({key:`${Tt}-${Ct}-${Et}`,y:Tt,m:Ct,d:Et,day:Et,other:bt,lunar:m(Ht),items:y,today:!bt&&Tt===R.value.y&&Ct===R.value.m&&Et===R.value.d})}return ft}),V=fn(()=>X.value.find(O=>O.key===P.value)||null),rt=fn(()=>{const O=V.value||X.value.find(U=>U.today)||null;return O?{key:O.key,month:O.m,day:O.d,lunar:O.lunar,items:O.items,today:!!O.today}:null}),A={fest:"节日",term:"节气",lunar:"传统节日",event:"事项"};function B(O){return A[O]||""}function G(O){O.items.length&&e("select-day",{title:`${O.m}月${O.d}日 · 星际日历`,meta:"农历 "+O.lunar,rows:O.items.map(U=>[B(U.type),U.title]),text:O.items.map(U=>U.desc).filter(Boolean).join(`
`)||""})}return(O,U)=>(Ot(),Vt("section",Y0,[U[5]||(U[5]=at("div",{class:"panel-title"},[Vn("星际日历"),at("span",{class:"en"},"Stellar · Calendar")],-1)),at("div",$0,[at("button",{class:"cal-nav",onClick:U[0]||(U[0]=W=>J(-1)),title:"上月"},"‹"),at("div",K0,[at("b",Z0,$t(b.value),1),U[3]||(U[3]=at("span",null,"年",-1)),at("b",J0,$t(C.value),1),U[4]||(U[4]=at("span",null,"月",-1)),at("button",{class:"cal-today",onClick:E,title:"回到今天"},"今")]),at("button",{class:"cal-nav",onClick:U[1]||(U[1]=W=>J(1)),title:"下月"},"›")]),at("div",Q0,[(Ot(),Vt(me,null,An(w,W=>at("span",{key:W},$t(W),1)),64))]),at("div",t_,[(Ot(!0),Vt(me,null,An(X.value,W=>(Ot(),Vt("div",{key:W.key,class:on(["cal-cell",{other:W.other,today:W.today,has:W.items.length,hover:P.value===W.key}]),onMouseenter:et=>P.value=W.key,onMouseleave:U[2]||(U[2]=et=>P.value=""),onClick:et=>G(W)},[at("span",n_,$t(W.day),1),W.today?(Ot(),Vt("i",i_,"今")):Ve("",!0),W.items.length?(Ot(),Vt("div",s_,[(Ot(!0),Vt(me,null,An(W.items.slice(0,3),(et,ot)=>(Ot(),Vt("i",{key:ot,class:on(["cal-dot","c-"+et.type])},null,2))),128))])):Ve("",!0),W.items.length?(Ot(),Vt("span",{key:2,class:on(["cal-label","c-"+W.items[0].type]),title:W.items[0].title},$t(W.items[0].title),11,r_)):Ve("",!0)],42,e_))),128))]),U[6]||(U[6]=gc('<div class="cal-legend" data-v-d8f01d55><span data-v-d8f01d55><i class="cal-dot c-fest" data-v-d8f01d55></i>节日</span><span data-v-d8f01d55><i class="cal-dot c-lunar" data-v-d8f01d55></i>传统</span><span data-v-d8f01d55><i class="cal-dot c-term" data-v-d8f01d55></i>节气</span><span data-v-d8f01d55><i class="cal-dot c-event" data-v-d8f01d55></i>事项</span></div>',1)),at("div",o_,[rt.value?(Ot(),Vt(me,{key:0},[at("div",a_,[at("b",l_,$t(rt.value.month)+"."+$t(rt.value.day),1),at("span",c_,$t(rt.value.lunar),1),rt.value.today?(Ot(),Vt("em",u_,"今天")):Ve("",!0)]),rt.value.items.length?(Ot(),Vt("ul",h_,[(Ot(!0),Vt(me,null,An(rt.value.items,(W,et)=>(Ot(),Vt("li",{key:et,class:on("c-"+W.type)},[at("span",f_,$t(B(W.type)),1),Vn($t(W.title),1),W.desc?(Ot(),Vt("em",d_,$t(W.desc),1)):Ve("",!0)],2))),128))])):(Ot(),Vt("p",p_,"这一天没有安排"))],64)):Ve("",!0)])]))}},__=Ii(g_,[["__scopeId","data-v-d8f01d55"]]),v_={class:"right-panel"},x_={class:"panel card-lists"},y_={class:"work-list"},M_=["onClick"],S_={class:"w-type"},E_={class:"w-name"},b_={class:"w-date"},T_={class:"row-2"},w_={class:"list-col"},A_={class:"list"},R_=["onClick"],C_={class:"list-col"},P_={class:"list"},L_=["onClick"],D_=["onClick"],I_={__name:"RightPanel",emits:["select-portfolio","select-blog","select-location","select-city","select-day"],setup(n,{emit:t}){const e=t,{data:i}=Wr(),s=fn(()=>hr(i.projects));return(r,o)=>(Ot(),Vt("aside",v_,[ve(__,{onSelectDay:o[0]||(o[0]=a=>e("select-day",a))}),at("section",x_,[o[3]||(o[3]=at("div",{class:"panel-title"},[Vn("作品榜"),at("span",{class:"en"},"Portfolio")],-1)),at("ul",y_,[(Ot(!0),Vt(me,null,An(Be(i).portfolio,a=>(Ot(),Vt("li",{key:a.id,onClick:l=>e("select-portfolio",a)},[at("span",S_,$t(a.type),1),at("span",E_,$t(a.title),1),at("span",b_,$t(a.date),1)],8,M_))),128))]),at("div",T_,[at("div",w_,[o[1]||(o[1]=at("p",{class:"list-head"},"最近博客",-1)),at("ul",A_,[(Ot(!0),Vt(me,null,An(Be(i).blog,a=>(Ot(),Vt("li",{key:a.id,onClick:l=>e("select-blog",a)},$t(a.title),9,R_))),128))])]),at("div",C_,[o[2]||(o[2]=at("p",{class:"list-head"},"地点索引",-1)),at("ul",P_,[(Ot(!0),Vt(me,null,An(Be(i).locations,a=>(Ot(),Vt("li",{key:a.name,onClick:l=>e("select-location",a)},[Vn($t(a.name),1),at("em",null,$t(a.type==="work"?"工作":"母校"),1)],8,L_))),128)),(Ot(!0),Vt(me,null,An(s.value,a=>(Ot(),Vt("li",{key:"c-"+a.city,onClick:l=>e("select-city",a)},[Vn($t(a.city),1),at("em",null,$t(a.count)+" 项",1)],8,D_))),128))])])])])]))}},U_=Ii(I_,[["__scopeId","data-v-15cc7428"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="160",as={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},N_=0,xu=1,O_=2,Td=1,F_=2,ii=3,jn=0,tn=1,bn=2,Ri=0,zs=1,Ne=2,yu=3,Mu=4,B_=5,qi=100,z_=101,H_=102,Su=103,Eu=104,k_=200,G_=201,V_=202,W_=203,Bl=204,zl=205,X_=206,j_=207,q_=208,Y_=209,$_=210,K_=211,Z_=212,J_=213,Q_=214,tv=0,ev=1,nv=2,ea=3,iv=4,sv=5,rv=6,ov=7,ya=0,av=1,lv=2,Ci=0,cv=1,uv=2,hv=3,fv=4,dv=5,pv=6,wd=300,Ws=301,Xs=302,Hl=303,kl=304,Ma=306,Gl=1e3,Tn=1001,Vl=1002,$e=1003,bu=1004,Wa=1005,dn=1006,mv=1007,Dr=1008,Pi=1009,gv=1010,_v=1011,vc=1012,Ad=1013,wi=1014,Ai=1015,Ir=1016,Rd=1017,Cd=1018,Qi=1020,vv=1021,wn=1023,xv=1024,yv=1025,ts=1026,js=1027,Mv=1028,Pd=1029,Sv=1030,Ld=1031,Dd=1033,Xa=33776,ja=33777,qa=33778,Ya=33779,Tu=35840,wu=35841,Au=35842,Ru=35843,Id=36196,Cu=37492,Pu=37496,Lu=37808,Du=37809,Iu=37810,Uu=37811,Nu=37812,Ou=37813,Fu=37814,Bu=37815,zu=37816,Hu=37817,ku=37818,Gu=37819,Vu=37820,Wu=37821,$a=36492,Xu=36494,ju=36495,Ev=36283,qu=36284,Yu=36285,$u=36286,Ud=3e3,es=3001,bv=3200,Tv=3201,Sa=0,wv=1,gn="",Fe="srgb",pi="srgb-linear",xc="display-p3",Ea="display-p3-linear",na="linear",fe="srgb",ia="rec709",sa="p3",cs=7680,Ku=519,Av=512,Rv=513,Cv=514,Nd=515,Pv=516,Lv=517,Dv=518,Iv=519,Wl=35044,Zu="300 es",Xl=1035,ui=2e3,ra=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const xr=Math.PI/180,Ur=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function yc(n,t){return(n%t+t)%t}function Uv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Nv(n,t,e){return n!==t?(e-n)/(t-n):0}function yr(n,t,e){return(1-e)*n+e*t}function Ov(n,t,e,i){return yr(n,t,1-Math.exp(-e*i))}function Fv(n,t=1){return t-Math.abs(yc(n,t*2)-t)}function Bv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function zv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Hv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function kv(n,t){return n+Math.random()*(t-n)}function Gv(n){return n*(.5-Math.random())}function Vv(n){n!==void 0&&(Ju=n);let t=Ju+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wv(n){return n*xr}function Xv(n){return n*Ur}function jl(n){return(n&n-1)===0&&n!==0}function jv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yv={DEG2RAD:xr,RAD2DEG:Ur,generateUUID:Wn,clamp:Ae,euclideanModulo:yc,mapLinear:Uv,inverseLerp:Nv,lerp:yr,damp:Ov,pingpong:Fv,smoothstep:Bv,smootherstep:zv,randInt:Hv,randFloat:kv,randFloatSpread:Gv,seededRandom:Vv,degToRad:Wv,radToDeg:Xv,isPowerOfTwo:jl,ceilPowerOfTwo:jv,floorPowerOfTwo:oa,setQuaternionFromProperEuler:qv,normalize:ae,denormalize:zn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],v=s[4],b=s[7],C=s[2],R=s[5],P=s[8];return r[0]=o*_+a*S+l*C,r[3]=o*m+a*v+l*R,r[6]=o*p+a*b+l*P,r[1]=c*_+u*S+h*C,r[4]=c*m+u*v+h*R,r[7]=c*p+u*b+h*P,r[2]=f*_+d*S+g*C,r[5]=f*m+d*v+g*R,r[8]=f*p+d*b+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Jt;function Od(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $v(){const n=Nr("canvas");return n.style.display="block",n}const Qu={};function Mr(n){n in Qu||(Qu[n]=!0,console.warn(n))}const th=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[pi]:{transfer:na,primaries:ia,toReference:n=>n,fromReference:n=>n},[Fe]:{transfer:fe,primaries:ia,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ea]:{transfer:na,primaries:sa,toReference:n=>n.applyMatrix3(eh),fromReference:n=>n.applyMatrix3(th)},[xc]:{transfer:fe,primaries:sa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(eh),fromReference:n=>n.applyMatrix3(th).convertLinearToSRGB()}},Kv=new Set([pi,Ea]),le={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Kv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=eo[t].toReference,s=eo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return eo[n].primaries},getTransfer:function(n){return n===gn?na:eo[n].transfer}};function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Za(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class Fd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=Nr("canvas")),us.width=t.width,us.height=t.height;const i=us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hs(e[i]/255)*255):e[i]=Hs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zv=0;class Bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Wn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class Je extends rs{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=Tn,s=Tn,r=dn,o=Dr,a=wn,l=Pi,c=Je.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Wn(),this.name="",this.source=new Bd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===es?Fe:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gl:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gl:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?es:Ud}set encoding(t){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===es?Fe:gn}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=wd;Je.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,b=(d+1)/2,C=(p+1)/2,R=(u+f)/4,P=(h+_)/4,J=(g+m)/4;return v>b&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=P/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=J/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=J/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qv extends rs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===es?Fe:gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends Qv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class zd extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tx extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,p*S);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const b=a*S;if(l=l*m+f*b,c=c*m+d*b,u=u*m+g*b,h=h*m+_*b,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new I,nh=new mi;class Xr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),io.subVectors(this.max,er),hs.subVectors(t.a,er),fs.subVectors(t.b,er),ds.subVectors(t.c,er),xi.subVectors(fs,hs),yi.subVectors(ds,fs),Hi.subVectors(hs,ds);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!tl(e,hs,fs,ds,io)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,hs,fs,ds,io))?!1:(so.crossVectors(xi,yi),e=[so.x,so.y,so.z],tl(e,hs,fs,ds,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,no=new Xr,hs=new I,fs=new I,ds=new I,xi=new I,yi=new I,Hi=new I,er=new I,io=new I,so=new I,ki=new I;function tl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ki.fromArray(n,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),u=i.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ex=new Xr,nr=new I,el=new I;class jr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ex.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(el)),this.expandByPoint(nr.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new I,nl=new I,ro=new I,Mi=new I,il=new I,oo=new I,sl=new I;class qr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nl.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(nl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ro),a=Mi.dot(this.direction),l=-Mi.dot(ro),c=Mi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nl).addScaledVector(ro,f),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,s,r){il.subVectors(e,t),oo.subVectors(i,t),sl.crossVectors(il,oo);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const l=a*this.direction.dot(oo.crossVectors(Mi,oo));if(l<0)return null;const c=a*this.direction.dot(il.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(sl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nx,t,ix)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Si.crossVectors(i,nn),Si.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Si.crossVectors(i,nn)),Si.normalize(),ao.crossVectors(nn,Si),s[0]=Si.x,s[4]=ao.x,s[8]=nn.x,s[1]=Si.y,s[5]=ao.y,s[9]=nn.y,s[2]=Si.z,s[6]=ao.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],v=i[7],b=i[11],C=i[15],R=s[0],P=s[4],J=s[8],E=s[12],w=s[1],X=s[5],V=s[9],rt=s[13],A=s[2],B=s[6],G=s[10],O=s[14],U=s[3],W=s[7],et=s[11],ot=s[15];return r[0]=o*R+a*w+l*A+c*U,r[4]=o*P+a*X+l*B+c*W,r[8]=o*J+a*V+l*G+c*et,r[12]=o*E+a*rt+l*O+c*ot,r[1]=u*R+h*w+f*A+d*U,r[5]=u*P+h*X+f*B+d*W,r[9]=u*J+h*V+f*G+d*et,r[13]=u*E+h*rt+f*O+d*ot,r[2]=g*R+_*w+m*A+p*U,r[6]=g*P+_*X+m*B+p*W,r[10]=g*J+_*V+m*G+p*et,r[14]=g*E+_*rt+m*O+p*ot,r[3]=S*R+v*w+b*A+C*U,r[7]=S*P+v*X+b*B+C*W,r[11]=S*J+v*V+b*G+C*et,r[15]=S*E+v*rt+b*O+C*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,b=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,C=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,R=e*S+i*v+s*b+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=S*P,t[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*P,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*P,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,t[4]=v*P,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*P,t[8]=b*P,t[9]=(g*h*r-u*_*r-g*i*d+e*_*d+u*i*p-e*h*p)*P,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*P,t[12]=C*P,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*P,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=l*c,v=l*u,b=l*h,C=i.x,R=i.y,P=i.z;return s[0]=(1-(_+p))*C,s[1]=(d+b)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(f+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+v)*P,s[9]=(m-S)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const c=1/r,u=1/o,h=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,e.setFromRotationMatrix(Mn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ui){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===ui)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ra)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ui){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,_;if(a===ui)g=(o+r)*h,_=-2*h;else if(a===ra)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ps=new I,Mn=new de,nx=new I(0,0,0),ix=new I(1,1,1),Si=new I,ao=new I,nn=new I,ih=new de,sh=new mi;class Yr{constructor(t=0,e=0,i=0,s=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sx=0;const rh=new I,ms=new mi,ti=new de,lo=new I,ir=new I,rx=new I,ox=new mi,oh=new I(1,0,0),ah=new I(0,1,0),lh=new I(0,0,1),ax={type:"added"},lx={type:"removed"};class Ce extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new I,e=new Yr,i=new mi,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lo.copy(t):lo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ir,lo,this.up):ti.lookAt(lo,ir,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ti),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ax)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lx)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,rx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,ox,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,ei=new I,rl=new I,ni=new I,gs=new I,_s=new I,ch=new I,ol=new I,al=new I,ll=new I;let co=!1;class pn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),ei.subVectors(i,e),rl.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(ei),l=Sn.dot(rl),c=ei.dot(ei),u=ei.dot(rl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(t,e,i,s,r,o,a,l){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),ei.subVectors(t,e),Sn.cross(ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Sn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),pn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,i),_s.subVectors(r,i),ol.subVectors(t,i);const l=gs.dot(ol),c=_s.dot(ol);if(l<=0&&c<=0)return e.copy(i);al.subVectors(t,s);const u=gs.dot(al),h=_s.dot(al);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(gs,o);ll.subVectors(t,r);const d=gs.dot(ll),g=_s.dot(ll);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(_s,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ch.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(ch,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},uo={h:0,s:0,l:0};function cl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=yc(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=cl(o,r,t+1/3),this.g=cl(o,r,t),this.b=cl(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const i=Hd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=Za(t.r),this.g=Za(t.g),this.b=Za(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return le.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ae(ke.r*255,0,255))*65536+Math.round(Ae(ke.g*255,0,255))*256+Math.round(Ae(ke.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Fe){le.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(uo);const i=yr(Ei.h,uo.h,e),s=yr(Ei.s,uo.s,e),r=yr(Ei.l,uo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Xt;Xt.NAMES=Hd;let cx=0;class qn extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=zs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class En extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new I,ho=new vt;class Re{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}}class kd extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gd extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ue extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ux=0;const un=new de,ul=new Ce,vs=new I,sn=new Xr,sr=new Xr,Ue=new I;class pe extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Od(t)?Gd:kd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,i){return un.makeTranslation(t,e,i),this.applyMatrix4(un),this}scale(t,e,i){return un.makeScale(t,e,i),this.applyMatrix4(un),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(sn.min,sr.min),sn.expandByPoint(Ue),Ue.addVectors(sn.max,sr.max),sn.expandByPoint(Ue)):(sn.expandByPoint(sr.min),sn.expandByPoint(sr.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(t,c),Ue.add(vs)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new I,u[w]=new I;const h=new I,f=new I,d=new I,g=new vt,_=new vt,m=new vt,p=new I,S=new I;function v(w,X,V){h.fromArray(s,w*3),f.fromArray(s,X*3),d.fromArray(s,V*3),g.fromArray(o,w*2),_.fromArray(o,X*2),m.fromArray(o,V*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const rt=1/(_.x*m.y-m.x*_.y);isFinite(rt)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(rt),S.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(rt),c[w].add(p),c[X].add(p),c[V].add(p),u[w].add(S),u[X].add(S),u[V].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,X=b.length;w<X;++w){const V=b[w],rt=V.start,A=V.count;for(let B=rt,G=rt+A;B<G;B+=3)v(i[B+0],i[B+1],i[B+2])}const C=new I,R=new I,P=new I,J=new I;function E(w){P.fromArray(r,w*3),J.copy(P);const X=c[w];C.copy(X),C.sub(P.multiplyScalar(P.dot(X))).normalize(),R.crossVectors(J,X);const rt=R.dot(u[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=rt}for(let w=0,X=b.length;w<X;++w){const V=b[w],rt=V.start,A=V.count;for(let B=rt,G=rt+A;B<G;B+=3)E(i[B+0]),E(i[B+1]),E(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Re(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new de,Gi=new qr,fo=new jr,hh=new I,xs=new I,ys=new I,Ms=new I,hl=new I,po=new I,mo=new vt,go=new vt,_o=new vt,fh=new I,dh=new I,ph=new I,vo=new I,xo=new I;class ee extends Ce{constructor(t=new pe,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(hl.fromBufferAttribute(h,t),o?po.addScaledVector(hl,u):po.addScaledVector(hl.sub(e),u))}e.add(po)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(fo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(fo,hh)===null||Gi.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,C=v;b<C;b+=3){const R=a.getX(b),P=a.getX(b+1),J=a.getX(b+2);s=yo(this,p,t,i,c,u,h,R,P,J),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);s=yo(this,o,t,i,c,u,h,S,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,C=v;b<C;b+=3){const R=b,P=b+1,J=b+2;s=yo(this,p,t,i,c,u,h,R,P,J),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,b=m+2;s=yo(this,o,t,i,c,u,h,S,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function hx(n,t,e,i,s,r,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:n}}function yo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,xs),n.getVertexPosition(l,ys),n.getVertexPosition(c,Ms);const u=hx(n,t,e,i,xs,ys,Ms,vo);if(u){s&&(mo.fromBufferAttribute(s,a),go.fromBufferAttribute(s,l),_o.fromBufferAttribute(s,c),u.uv=pn.getInterpolation(vo,xs,ys,Ms,mo,go,_o,new vt)),r&&(mo.fromBufferAttribute(r,a),go.fromBufferAttribute(r,l),_o.fromBufferAttribute(r,c),u.uv1=pn.getInterpolation(vo,xs,ys,Ms,mo,go,_o,new vt),u.uv2=u.uv1),o&&(fh.fromBufferAttribute(o,a),dh.fromBufferAttribute(o,l),ph.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(vo,xs,ys,Ms,fh,dh,ph,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};pn.getNormal(xs,ys,Ms,h.normal),u.face=h}return u}class mn extends pe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function g(_,m,p,S,v,b,C,R,P,J,E){const w=b/P,X=C/J,V=b/2,rt=C/2,A=R/2,B=P+1,G=J+1;let O=0,U=0;const W=new I;for(let et=0;et<G;et++){const ot=et*X-rt;for(let ft=0;ft<B;ft++){const $=ft*w-V;W[_]=$*S,W[m]=ot*v,W[p]=A,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=R>0?1:-1,u.push(W.x,W.y,W.z),h.push(ft/P),h.push(1-et/J),O+=1}}for(let et=0;et<J;et++)for(let ot=0;ot<P;ot++){const ft=f+ot+B*et,$=f+ot+B*(et+1),ht=f+(ot+1)+B*(et+1),mt=f+(ot+1)+B*et;l.push(ft,$,mt),l.push($,ht,mt),U+=6}a.addGroup(d,U,E),d+=U,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=qs(n[e]);for(const s in i)t[s]=i[s]}return t}function fx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){return n.getRenderTarget()===null?n.outputColorSpace:le.workingColorSpace}const dx={clone:qs,merge:Ye};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=fx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Wd extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends Wd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,Es=1;class gx extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ss,Es,t,e);s.layers=this.layers,this.add(s);const r=new rn(Ss,Es,t,e);r.layers=this.layers,this.add(r);const o=new rn(Ss,Es,t,e);o.layers=this.layers,this.add(o);const a=new rn(Ss,Es,t,e);a.layers=this.layers,this.add(a);const l=new rn(Ss,Es,t,e);l.layers=this.layers,this.add(l);const c=new rn(Ss,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xd extends Je{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ws,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _x extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===es?Fe:gn),this.texture=new Xd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ri});r.uniforms.tEquirect.value=e;const o=new ee(s,r),a=e.minFilter;return e.minFilter===Dr&&(e.minFilter=dn),new gx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const fl=new I,vx=new I,xx=new Jt;class Ti{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=fl.subVectors(i,e).cross(vx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xx.getNormalMatrix(t),s=this.coplanarPoint(fl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new jr,Mo=new I;class Sc{constructor(t=new Ti,e=new Ti,i=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ui){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],v=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,m-d,b-p).normalize(),i[1].setComponents(l+r,f+c,m+d,b+p).normalize(),i[2].setComponents(l+o,f+u,m+g,b+S).normalize(),i[3].setComponents(l-o,f-u,m-g,b-S).normalize(),i[4].setComponents(l-a,f-h,m-_,b-v).normalize(),e===ui)i[5].setComponents(l+a,f+h,m+_,b+v).normalize();else if(e===ra)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function yx(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),d.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Ec extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let v=0;v<c;v++){const b=v*h-r;g.push(b,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,b=S+c*(p+1),C=S+1+c*(p+1),R=S+1+c*p;d.push(v,b,R),d.push(b,C,R)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ax=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ux=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,My=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Mx,alphahash_pars_fragment:Sx,alphamap_fragment:Ex,alphamap_pars_fragment:bx,alphatest_fragment:Tx,alphatest_pars_fragment:wx,aomap_fragment:Ax,aomap_pars_fragment:Rx,batching_pars_vertex:Cx,batching_vertex:Px,begin_vertex:Lx,beginnormal_vertex:Dx,bsdfs:Ix,iridescence_fragment:Ux,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Ox,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Bx,clipping_planes_vertex:zx,color_fragment:Hx,color_pars_fragment:kx,color_pars_vertex:Gx,color_vertex:Vx,common:Wx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:jx,displacementmap_pars_vertex:qx,displacementmap_vertex:Yx,emissivemap_fragment:$x,emissivemap_pars_fragment:Kx,colorspace_fragment:Zx,colorspace_pars_fragment:Jx,envmap_fragment:Qx,envmap_common_pars_fragment:ty,envmap_pars_fragment:ey,envmap_pars_vertex:ny,envmap_physical_pars_fragment:py,envmap_vertex:iy,fog_vertex:sy,fog_pars_vertex:ry,fog_fragment:oy,fog_pars_fragment:ay,gradientmap_pars_fragment:ly,lightmap_fragment:cy,lightmap_pars_fragment:uy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:fy,lights_pars_begin:dy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:xy,lights_physical_pars_fragment:yy,lights_fragment_begin:My,lights_fragment_maps:Sy,lights_fragment_end:Ey,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Ay,map_fragment:Ry,map_pars_fragment:Cy,map_particle_fragment:Py,map_particle_pars_fragment:Ly,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Iy,morphcolor_vertex:Uy,morphnormal_vertex:Ny,morphtarget_pars_vertex:Oy,morphtarget_vertex:Fy,normal_fragment_begin:By,normal_fragment_maps:zy,normal_pars_fragment:Hy,normal_pars_vertex:ky,normal_vertex:Gy,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:qy,opaque_fragment:Yy,packing:$y,premultiplied_alpha_fragment:Ky,project_vertex:Zy,dithering_fragment:Jy,dithering_pars_fragment:Qy,roughnessmap_fragment:tM,roughnessmap_pars_fragment:eM,shadowmap_pars_fragment:nM,shadowmap_pars_vertex:iM,shadowmap_vertex:sM,shadowmask_pars_fragment:rM,skinbase_vertex:oM,skinning_pars_vertex:aM,skinning_vertex:lM,skinnormal_vertex:cM,specularmap_fragment:uM,specularmap_pars_fragment:hM,tonemapping_fragment:fM,tonemapping_pars_fragment:dM,transmission_fragment:pM,transmission_pars_fragment:mM,uv_pars_fragment:gM,uv_pars_vertex:_M,uv_vertex:vM,worldpos_vertex:xM,background_vert:yM,background_frag:MM,backgroundCube_vert:SM,backgroundCube_frag:EM,cube_vert:bM,cube_frag:TM,depth_vert:wM,depth_frag:AM,distanceRGBA_vert:RM,distanceRGBA_frag:CM,equirect_vert:PM,equirect_frag:LM,linedashed_vert:DM,linedashed_frag:IM,meshbasic_vert:UM,meshbasic_frag:NM,meshlambert_vert:OM,meshlambert_frag:FM,meshmatcap_vert:BM,meshmatcap_frag:zM,meshnormal_vert:HM,meshnormal_frag:kM,meshphong_vert:GM,meshphong_frag:VM,meshphysical_vert:WM,meshphysical_frag:XM,meshtoon_vert:jM,meshtoon_frag:qM,points_vert:YM,points_frag:$M,shadow_vert:KM,shadow_frag:ZM,sprite_vert:JM,sprite_frag:QM},Mt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Fn={basic:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ye([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ye([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ye([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ye([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ye([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ye([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ye([Mt.common,Mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ye([Mt.lights,Mt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Fn.physical={uniforms:Ye([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const So={r:0,b:0,g:0};function tS(n,t,e,i,s,r,o){const a=new Xt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ma)?(u===void 0&&(u=new ee(new mn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:qs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=le.getTransfer(v.colorSpace)!==fe,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ee(new Ec(2,2),new Rn({name:"BackgroundMaterial",uniforms:qs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(So,Vd(n)),i.buffers.color.setClear(So.r,So.g,So.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function eS(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(A,B,G,O,U){let W=!1;if(o){const et=_(O,G,B);c!==et&&(c=et,d(c.object)),W=p(A,O,G,U),W&&S(A,O,G,U)}else{const et=B.wireframe===!0;(c.geometry!==O.id||c.program!==G.id||c.wireframe!==et)&&(c.geometry=O.id,c.program=G.id,c.wireframe=et,W=!0)}U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,J(A,B,G,O),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(A){return i.isWebGL2?n.bindVertexArray(A):r.bindVertexArrayOES(A)}function g(A){return i.isWebGL2?n.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function _(A,B,G){const O=G.wireframe===!0;let U=a[A.id];U===void 0&&(U={},a[A.id]=U);let W=U[B.id];W===void 0&&(W={},U[B.id]=W);let et=W[O];return et===void 0&&(et=m(f()),W[O]=et),et}function m(A){const B=[],G=[],O=[];for(let U=0;U<s;U++)B[U]=0,G[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:O,object:A,attributes:{},index:null}}function p(A,B,G,O){const U=c.attributes,W=B.attributes;let et=0;const ot=G.getAttributes();for(const ft in ot)if(ot[ft].location>=0){const ht=U[ft];let mt=W[ft];if(mt===void 0&&(ft==="instanceMatrix"&&A.instanceMatrix&&(mt=A.instanceMatrix),ft==="instanceColor"&&A.instanceColor&&(mt=A.instanceColor)),ht===void 0||ht.attribute!==mt||mt&&ht.data!==mt.data)return!0;et++}return c.attributesNum!==et||c.index!==O}function S(A,B,G,O){const U={},W=B.attributes;let et=0;const ot=G.getAttributes();for(const ft in ot)if(ot[ft].location>=0){let ht=W[ft];ht===void 0&&(ft==="instanceMatrix"&&A.instanceMatrix&&(ht=A.instanceMatrix),ft==="instanceColor"&&A.instanceColor&&(ht=A.instanceColor));const mt={};mt.attribute=ht,ht&&ht.data&&(mt.data=ht.data),U[ft]=mt,et++}c.attributes=U,c.attributesNum=et,c.index=O}function v(){const A=c.newAttributes;for(let B=0,G=A.length;B<G;B++)A[B]=0}function b(A){C(A,0)}function C(A,B){const G=c.newAttributes,O=c.enabledAttributes,U=c.attributeDivisors;G[A]=1,O[A]===0&&(n.enableVertexAttribArray(A),O[A]=1),U[A]!==B&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,B),U[A]=B)}function R(){const A=c.newAttributes,B=c.enabledAttributes;for(let G=0,O=B.length;G<O;G++)B[G]!==A[G]&&(n.disableVertexAttribArray(G),B[G]=0)}function P(A,B,G,O,U,W,et){et===!0?n.vertexAttribIPointer(A,B,G,U,W):n.vertexAttribPointer(A,B,G,O,U,W)}function J(A,B,G,O){if(i.isWebGL2===!1&&(A.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const U=O.attributes,W=G.getAttributes(),et=B.defaultAttributeValues;for(const ot in W){const ft=W[ot];if(ft.location>=0){let $=U[ot];if($===void 0&&(ot==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),ot==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),$!==void 0){const ht=$.normalized,mt=$.itemSize,_t=e.get($);if(_t===void 0)continue;const bt=_t.buffer,Tt=_t.type,Ct=_t.bytesPerElement,Et=i.isWebGL2===!0&&(Tt===n.INT||Tt===n.UNSIGNED_INT||$.gpuType===Ad);if($.isInterleavedBufferAttribute){const Ht=$.data,y=Ht.stride,N=$.offset;if(Ht.isInstancedInterleavedBuffer){for(let k=0;k<ft.locationSize;k++)C(ft.location+k,Ht.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let k=0;k<ft.locationSize;k++)b(ft.location+k);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let k=0;k<ft.locationSize;k++)P(ft.location+k,mt/ft.locationSize,Tt,ht,y*Ct,(N+mt/ft.locationSize*k)*Ct,Et)}else{if($.isInstancedBufferAttribute){for(let Ht=0;Ht<ft.locationSize;Ht++)C(ft.location+Ht,$.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ht=0;Ht<ft.locationSize;Ht++)b(ft.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Ht=0;Ht<ft.locationSize;Ht++)P(ft.location+Ht,mt/ft.locationSize,Tt,ht,mt*Ct,mt/ft.locationSize*Ht*Ct,Et)}}else if(et!==void 0){const ht=et[ot];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(ft.location,ht);break;case 3:n.vertexAttrib3fv(ft.location,ht);break;case 4:n.vertexAttrib4fv(ft.location,ht);break;default:n.vertexAttrib1fv(ft.location,ht)}}}}R()}function E(){V();for(const A in a){const B=a[A];for(const G in B){const O=B[G];for(const U in O)g(O[U].object),delete O[U];delete B[G]}delete a[A]}}function w(A){if(a[A.id]===void 0)return;const B=a[A.id];for(const G in B){const O=B[G];for(const U in O)g(O[U].object),delete O[U];delete B[G]}delete a[A.id]}function X(A){for(const B in a){const G=a[B];if(G[A.id]===void 0)continue;const O=G[A.id];for(const U in O)g(O[U].object),delete O[U];delete G[A.id]}}function V(){rt(),u=!0,c!==l&&(c=l,d(c.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:rt,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:X,initAttributes:v,enableAttribute:b,disableUnusedAttributes:R}}function nS(n,t,e,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),e.update(h,r,1)}function l(u,h,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),e.update(h,r,f)}function c(u,h,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function iS(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,b=o||t.has("OES_texture_float"),C=v&&b,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:R}}function sS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ti,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,v=S*4;let b=p.clippingState||null;l.value=b,b=u(g,f,v,d);for(let C=0;C!==v;++C)b[C]=e[C];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=d;v!==_;++v,b+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function rS(n){let t=new WeakMap;function e(o,a){return a===Hl?o.mapping=Ws:a===kl&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hl||a===kl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _x(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class qd extends Wd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=4,mh=[.125,.215,.35,.446,.526,.582],Yi=20,dl=new qd,gh=new Xt;let pl=null,ml=0,gl=0;const Xi=(1+Math.sqrt(5))/2,bs=1/Xi,_h=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Xi,bs),new I(0,Xi,-bs),new I(bs,0,Xi),new I(-bs,0,Xi),new I(Xi,bs,0),new I(-Xi,bs,0)];class vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pl,ml,gl),t.scissorTest=!1,Eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ir,format:wn,colorSpace:pi,depthBuffer:!1},s=xh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(r)),this._blurMaterial=aS(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,dl)}_sceneToCubeUV(t,e,i,s){const a=new rn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(gh),u.toneMapping=Ci,u.autoClear=!1;const d=new En({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ee(new mn,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(gh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Eo(s,S*v,p>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ws||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Eo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,dl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_h[(s-1)%_h.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ee(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let S=0;for(let P=0;P<Yi;++P){const J=P/_,E=Math.exp(-J*J/2);p.push(E),P===0?S+=E:P<m&&(S+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const b=this._sizeLods[s],C=3*b*(s>v-Ds?s-v+Ds:0),R=4*(this._cubeSize-b);Eo(e,C,R,3*b,2*b),l.setRenderTarget(e),l.render(h,dl)}}function oS(n){const t=[],e=[],i=[];let s=n;const r=n-Ds+1+mh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ds?l=mh[o-n+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),v=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,J=R>2?0:-1,E=[P,J,0,P+2/3,J,0,P+2/3,J+1,0,P,J,0,P+2/3,J+1,0,P,J+1,0];S.set(E,_*g*R),v.set(f,m*g*R);const w=[R,R,R,R,R,R];b.set(w,p*g*R)}const C=new pe;C.setAttribute("position",new Re(S,_)),C.setAttribute("uv",new Re(v,m)),C.setAttribute("faceIndex",new Re(b,p)),t.push(C),s>Ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xh(n,t,e){const i=new ns(n,t,e);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function aS(n,t,e){const i=new Float32Array(Yi),s=new I(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yh(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Mh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hl||l===kl,u=l===Ws||l===Xs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new vh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new vh(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function cS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uS(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let v=0,b=S.length;v<b;v+=3){const C=S[v+0],R=S[v+1],P=S[v+2];f.push(C,R,R,P,P,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,b=S.length/3-1;v<b;v+=3){const C=v+0,R=v+1,P=v+2;f.push(C,R,R,P,P,C)}}else return;const m=new(Od(f)?Gd:kd)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hS(n,t,e,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){n.drawElements(r,g,a,d*l),e.update(g,r,1)}function h(d,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function fS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function dS(n,t){return n[0]-t[0]}function pS(n,t){return Math.abs(t[1])-Math.abs(n[1])}function mS(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ge,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let A=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",A)};_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let J=0;S===!0&&(J=1),v===!0&&(J=2),b===!0&&(J=3);let E=u.attributes.position.count*J,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const X=new Float32Array(E*w*4*g),V=new zd(X,E,w,g);V.type=Ai,V.needsUpdate=!0;const rt=J*4;for(let B=0;B<g;B++){const G=C[B],O=R[B],U=P[B],W=E*w*4*B;for(let et=0;et<G.count;et++){const ot=et*rt;S===!0&&(o.fromBufferAttribute(G,et),X[W+ot+0]=o.x,X[W+ot+1]=o.y,X[W+ot+2]=o.z,X[W+ot+3]=0),v===!0&&(o.fromBufferAttribute(O,et),X[W+ot+4]=o.x,X[W+ot+5]=o.y,X[W+ot+6]=o.z,X[W+ot+7]=0),b===!0&&(o.fromBufferAttribute(U,et),X[W+ot+8]=o.x,X[W+ot+9]=o.y,X[W+ot+10]=o.z,X[W+ot+11]=U.itemSize===4?o.w:1)}}_={count:g,texture:V,size:new vt(E,w)},r.set(u,_),u.addEventListener("dispose",A)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<d;v++){const b=g[v];b[0]=v,b[1]=f[v]}g.sort(pS);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(dS);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const b=a[v],C=b[0],R=b[1];C!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),m&&u.getAttribute("morphNormal"+v)!==m[C]&&u.setAttribute("morphNormal"+v,m[C]),s[v]=R,p+=R):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function gS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Yd extends Je{constructor(t,e,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:ts,u!==ts&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ts&&(i=wi),i===void 0&&u===js&&(i=Qi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $d=new Je,Kd=new Yd(1,1);Kd.compareFunction=Nd;const Zd=new zd,Jd=new tx,Qd=new Xd,Sh=[],Eh=[],bh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);function $s(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ba(n,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _S(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function xS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function yS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function MS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;wh.set(i),n.uniformMatrix2fv(this.addr,!1,wh),De(e,i)}}function SS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),De(e,i)}}function ES(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;bh.set(i),n.uniformMatrix4fv(this.addr,!1,bh),De(e,i)}}function bS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function TS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function wS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function AS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function RS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function CS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function PS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function LS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function DS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Kd:$d;e.setTexture2D(t||r,s)}function IS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jd,s)}function US(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qd,s)}function NS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zd,s)}function OS(n){switch(n){case 5126:return _S;case 35664:return vS;case 35665:return xS;case 35666:return yS;case 35674:return MS;case 35675:return SS;case 35676:return ES;case 5124:case 35670:return bS;case 35667:case 35671:return TS;case 35668:case 35672:return wS;case 35669:case 35673:return AS;case 5125:return RS;case 36294:return CS;case 36295:return PS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return NS}}function FS(n,t){n.uniform1fv(this.addr,t)}function BS(n,t){const e=$s(t,this.size,2);n.uniform2fv(this.addr,e)}function zS(n,t){const e=$s(t,this.size,3);n.uniform3fv(this.addr,e)}function HS(n,t){const e=$s(t,this.size,4);n.uniform4fv(this.addr,e)}function kS(n,t){const e=$s(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function GS(n,t){const e=$s(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function VS(n,t){const e=$s(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function WS(n,t){n.uniform1iv(this.addr,t)}function XS(n,t){n.uniform2iv(this.addr,t)}function jS(n,t){n.uniform3iv(this.addr,t)}function qS(n,t){n.uniform4iv(this.addr,t)}function YS(n,t){n.uniform1uiv(this.addr,t)}function $S(n,t){n.uniform2uiv(this.addr,t)}function KS(n,t){n.uniform3uiv(this.addr,t)}function ZS(n,t){n.uniform4uiv(this.addr,t)}function JS(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$d,r[o])}function QS(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jd,r[o])}function tE(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qd,r[o])}function eE(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zd,r[o])}function nE(n){switch(n){case 5126:return FS;case 35664:return BS;case 35665:return zS;case 35666:return HS;case 35674:return kS;case 35675:return GS;case 35676:return VS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return jS;case 35669:case 35673:return qS;case 5125:return YS;case 36294:return $S;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return eE}}class iE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=OS(e.type)}}class sE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nE(e.type)}}class rE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function Ah(n,t){n.seq.push(t),n.map[t.id]=t}function oE(n,t,e){const i=n.name,s=i.length;for(_l.lastIndex=0;;){const r=_l.exec(i),o=_l.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ah(e,c===void 0?new iE(a,n,t):new sE(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new rE(a),Ah(e,h)),e=h}}}class ko{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);oE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Rh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const aE=37297;let lE=0;function cE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function uE(n){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(n);let i;switch(t===e?i="":t===sa&&e===ia?i="LinearDisplayP3ToLinearSRGB":t===ia&&e===sa&&(i="LinearSRGBToLinearDisplayP3"),n){case pi:case Ea:return[i,"LinearTransferOETF"];case Fe:case xc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ch(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cE(n.getShaderSource(t),o)}else return s}function hE(n,t){const e=uE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fE(n,t){let e;switch(t){case cv:e="Linear";break;case uv:e="Reinhard";break;case hv:e="OptimizedCineon";break;case fv:e="ACESFilmic";break;case pv:e="AgX";break;case dv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function dE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function pE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function mE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Is(n){return n!==""}function Ph(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _E=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(_E,xE)}const vE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xE(n,t){let e=Yt[t];if(e===void 0){const i=vE.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}const yE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(n){return n.replace(yE,ME)}function ME(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function SE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===F_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function EE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:t="ENVMAP_MODE_REFRACTION";break}return t}function TE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ya:t="ENVMAP_BLENDING_MULTIPLY";break;case av:t="ENVMAP_BLENDING_MIX";break;case lv:t="ENVMAP_BLENDING_ADD";break}return t}function wE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function AE(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=SE(e),c=EE(e),u=bE(e),h=TE(e),f=wE(e),d=e.isWebGL2?"":dE(e),g=pE(e),_=mE(r),m=s.createProgram();let p,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),p.length>0&&(p+=`
`),S=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Is).join(`
`),S.length>0&&(S+=`
`)):(p=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),S=[d,Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?fE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,hE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=ql(o),o=Ph(o,e),o=Lh(o,e),a=ql(a),a=Ph(a,e),a=Lh(a,e),o=Dh(o),a=Dh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=v+p+o,C=v+S+a,R=Rh(s,s.VERTEX_SHADER,b),P=Rh(s,s.FRAGMENT_SHADER,C);s.attachShader(m,R),s.attachShader(m,P),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function J(V){if(n.debug.checkShaderErrors){const rt=s.getProgramInfoLog(m).trim(),A=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(P).trim();let G=!0,O=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,P);else{const U=Ch(s,R,"vertex"),W=Ch(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+U+`
`+W)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(A===""||B==="")&&(O=!1);O&&(V.diagnostics={runnable:G,programLog:rt,vertexShader:{log:A,prefix:p},fragmentShader:{log:B,prefix:S}})}s.deleteShader(R),s.deleteShader(P),E=new ko(s,m),w=gE(s,m)}let E;this.getUniforms=function(){return E===void 0&&J(this),E};let w;this.getAttributes=function(){return w===void 0&&J(this),w};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(m,aE)),X},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lE++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=P,this}let RE=0;class CE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new PE(t),e.set(t,i)),i}}class PE{constructor(t){this.id=RE++,this.code=t,this.usedTimes=0}}function LE(n,t,e,i,s,r,o){const a=new Mc,l=new CE,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function m(E,w,X,V,rt){const A=V.fog,B=rt.geometry,G=E.isMeshStandardMaterial?V.environment:null,O=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),U=O&&O.mapping===Ma?O.image.height:null,W=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=et!==void 0?et.length:0;let ft=0;B.morphAttributes.position!==void 0&&(ft=1),B.morphAttributes.normal!==void 0&&(ft=2),B.morphAttributes.color!==void 0&&(ft=3);let $,ht,mt,_t;if(W){const Ee=Fn[W];$=Ee.vertexShader,ht=Ee.fragmentShader}else $=E.vertexShader,ht=E.fragmentShader,l.update(E),mt=l.getVertexShaderID(E),_t=l.getFragmentShaderID(E);const bt=n.getRenderTarget(),Tt=rt.isInstancedMesh===!0,Ct=rt.isBatchedMesh===!0,Et=!!E.map,Ht=!!E.matcap,y=!!O,N=!!E.aoMap,k=!!E.lightMap,K=!!E.bumpMap,q=!!E.normalMap,st=!!E.displacementMap,ct=!!E.emissiveMap,M=!!E.metalnessMap,x=!!E.roughnessMap,D=E.anisotropy>0,Q=E.clearcoat>0,j=E.iridescence>0,Z=E.sheen>0,z=E.transmission>0,H=D&&!!E.anisotropyMap,ut=Q&&!!E.clearcoatMap,dt=Q&&!!E.clearcoatNormalMap,At=Q&&!!E.clearcoatRoughnessMap,lt=j&&!!E.iridescenceMap,kt=j&&!!E.iridescenceThicknessMap,It=Z&&!!E.sheenColorMap,Nt=Z&&!!E.sheenRoughnessMap,Lt=!!E.specularMap,yt=!!E.specularColorMap,L=!!E.specularIntensityMap,gt=z&&!!E.transmissionMap,Pt=z&&!!E.thicknessMap,Rt=!!E.gradientMap,pt=!!E.alphaMap,F=E.alphaTest>0,xt=!!E.alphaHash,St=!!E.extensions,Ft=!!B.attributes.uv1,Ut=!!B.attributes.uv2,Qt=!!B.attributes.uv3;let te=Ci;return E.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(te=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:$,fragmentShader:ht,defines:E.defines,customVertexShaderID:mt,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ct,instancing:Tt,instancingColor:Tt&&rt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:pi,map:Et,matcap:Ht,envMap:y,envMapMode:y&&O.mapping,envMapCubeUVHeight:U,aoMap:N,lightMap:k,bumpMap:K,normalMap:q,displacementMap:f&&st,emissiveMap:ct,normalMapObjectSpace:q&&E.normalMapType===wv,normalMapTangentSpace:q&&E.normalMapType===Sa,metalnessMap:M,roughnessMap:x,anisotropy:D,anisotropyMap:H,clearcoat:Q,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,iridescence:j,iridescenceMap:lt,iridescenceThicknessMap:kt,sheen:Z,sheenColorMap:It,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:yt,specularIntensityMap:L,transmission:z,transmissionMap:gt,thicknessMap:Pt,gradientMap:Rt,opaque:E.transparent===!1&&E.blending===zs,alphaMap:pt,alphaTest:F,alphaHash:xt,combine:E.combine,mapUv:Et&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:k&&_(E.lightMap.channel),bumpMapUv:K&&_(E.bumpMap.channel),normalMapUv:q&&_(E.normalMap.channel),displacementMapUv:st&&_(E.displacementMap.channel),emissiveMapUv:ct&&_(E.emissiveMap.channel),metalnessMapUv:M&&_(E.metalnessMap.channel),roughnessMapUv:x&&_(E.roughnessMap.channel),anisotropyMapUv:H&&_(E.anisotropyMap.channel),clearcoatMapUv:ut&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(E.sheenRoughnessMap.channel),specularMapUv:Lt&&_(E.specularMap.channel),specularColorMapUv:yt&&_(E.specularColorMap.channel),specularIntensityMapUv:L&&_(E.specularIntensityMap.channel),transmissionMapUv:gt&&_(E.transmissionMap.channel),thicknessMapUv:Pt&&_(E.thicknessMap.channel),alphaMapUv:pt&&_(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(q||D),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:Qt,pointsUvs:rt.isPoints===!0&&!!B.attributes.uv&&(Et||pt),fog:!!A,useFog:E.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:rt.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:St&&E.extensions.derivatives===!0,extensionFragDepth:St&&E.extensions.fragDepth===!0,extensionDrawBuffers:St&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)w.push(X),w.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(S(w,E),v(w,E),w.push(n.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function S(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function v(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function b(E){const w=g[E.type];let X;if(w){const V=Fn[w];X=dx.clone(V.uniforms)}else X=E.uniforms;return X}function C(E,w){let X;for(let V=0,rt=c.length;V<rt;V++){const A=c[V];if(A.cacheKey===w){X=A,++X.usedTimes;break}}return X===void 0&&(X=new AE(n,w,E,r),c.push(X)),X}function R(E){if(--E.usedTimes===0){const w=c.indexOf(E);c[w]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:J}}function DE(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function IE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Uh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||IE),i.length>1&&i.sort(f||Uh),s.length>1&&s.sort(f||Uh)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function UE(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Nh,n.set(i,[o])):s>=r.length?(o=new Nh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function NE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function OE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let FE=0;function BE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zE(n,t){const e=new NE,i=OE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,o=new de,a=new de;function l(u,h){let f=0,d=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let _=0,m=0,p=0,S=0,v=0,b=0,C=0,R=0,P=0,J=0,E=0;u.sort(BE);const w=h===!0?Math.PI:1;for(let V=0,rt=u.length;V<rt;V++){const A=u[V],B=A.color,G=A.intensity,O=A.distance,U=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=B.r*G*w,d+=B.g*G*w,g+=B.b*G*w;else if(A.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(A.sh.coefficients[W],G);E++}else if(A.isDirectionalLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*w),A.castShadow){const et=A.shadow,ot=i.get(A);ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,s.directionalShadow[_]=ot,s.directionalShadowMap[_]=U,s.directionalShadowMatrix[_]=A.shadow.matrix,b++}s.directional[_]=W,_++}else if(A.isSpotLight){const W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(B).multiplyScalar(G*w),W.distance=O,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,s.spot[p]=W;const et=A.shadow;if(A.map&&(s.spotLightMap[P]=A.map,P++,et.updateMatrices(A),A.castShadow&&J++),s.spotLightMatrix[p]=et.matrix,A.castShadow){const ot=i.get(A);ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,s.spotShadow[p]=ot,s.spotShadowMap[p]=U,R++}p++}else if(A.isRectAreaLight){const W=e.get(A);W.color.copy(B).multiplyScalar(G),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),s.rectArea[S]=W,S++}else if(A.isPointLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*w),W.distance=A.distance,W.decay=A.decay,A.castShadow){const et=A.shadow,ot=i.get(A);ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,ot.shadowCameraNear=et.camera.near,ot.shadowCameraFar=et.camera.far,s.pointShadow[m]=ot,s.pointShadowMap[m]=U,s.pointShadowMatrix[m]=A.shadow.matrix,C++}s.point[m]=W,m++}else if(A.isHemisphereLight){const W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(G*w),W.groundColor.copy(A.groundColor).multiplyScalar(G*w),s.hemi[v]=W,v++}}S>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const X=s.hash;(X.directionalLength!==_||X.pointLength!==m||X.spotLength!==p||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==b||X.numPointShadows!==C||X.numSpotShadows!==R||X.numSpotMaps!==P||X.numLightProbes!==E)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=R+P-J,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=J,s.numLightProbes=E,X.directionalLength=_,X.pointLength=m,X.spotLength=p,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=b,X.numPointShadows=C,X.numSpotShadows=R,X.numSpotMaps=P,X.numLightProbes=E,s.version=FE++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const b=u[S];if(b.isDirectionalLight){const C=s.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),f++}else if(b.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const C=s.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const C=s.point[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Oh(n,t){const e=new zE(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function HE(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Oh(n,t),e.set(r,[l])):o>=a.length?(l=new Oh(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class kE extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GE extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const VE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XE(n,t,e){let i=new Sc;const s=new vt,r=new vt,o=new ge,a=new kE({depthPacking:Tv}),l=new GE,c={},u=e.maxTextureSize,h={[jn]:tn,[tn]:jn,[bn]:bn},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:VE,fragmentShader:WE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let p=this.type;this.render=function(R,P,J){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),w=n.getActiveCubeFace(),X=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ri),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const rt=p!==ii&&this.type===ii,A=p===ii&&this.type!==ii;for(let B=0,G=R.length;B<G;B++){const O=R[B],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const W=U.getFrameExtents();if(s.multiply(W),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,U.mapSize.y=r.y)),U.map===null||rt===!0||A===!0){const ot=this.type!==ii?{minFilter:$e,magFilter:$e}:{};U.map!==null&&U.map.dispose(),U.map=new ns(s.x,s.y,ot),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const et=U.getViewportCount();for(let ot=0;ot<et;ot++){const ft=U.getViewport(ot);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),V.viewport(o),U.updateMatrices(O,ot),i=U.getFrustum(),b(P,J,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===ii&&S(U,J),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,w,X)};function S(R,P){const J=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ns(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,J,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,J,d,_,null)}function v(R,P,J,E){let w=null;const X=J.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(X!==void 0)w=X;else if(w=J.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const V=w.uuid,rt=P.uuid;let A=c[V];A===void 0&&(A={},c[V]=A);let B=A[rt];B===void 0&&(B=w.clone(),A[rt]=B,P.addEventListener("dispose",C)),w=B}if(w.visible=P.visible,w.wireframe=P.wireframe,E===ii?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:h[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,J.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=n.properties.get(w);V.light=J}return w}function b(R,P,J,E,w){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===ii)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld);const rt=t.update(R),A=R.material;if(Array.isArray(A)){const B=rt.groups;for(let G=0,O=B.length;G<O;G++){const U=B[G],W=A[U.materialIndex];if(W&&W.visible){const et=v(R,W,E,w);R.onBeforeShadow(n,R,P,J,rt,et,U),n.renderBufferDirect(J,null,rt,et,R,U),R.onAfterShadow(n,R,P,J,rt,et,U)}}}else if(A.visible){const B=v(R,A,E,w);R.onBeforeShadow(n,R,P,J,rt,B,null),n.renderBufferDirect(J,null,rt,B,R,null),R.onAfterShadow(n,R,P,J,rt,B,null)}}const V=R.children;for(let rt=0,A=V.length;rt<A;rt++)b(V[rt],P,J,E,w)}function C(R){R.target.removeEventListener("dispose",C);for(const J in c){const E=c[J],w=R.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function jE(n,t,e){const i=e.isWebGL2;function s(){let F=!1;const xt=new ge;let St=null;const Ft=new ge(0,0,0,0);return{setMask:function(Ut){St!==Ut&&!F&&(n.colorMask(Ut,Ut,Ut,Ut),St=Ut)},setLocked:function(Ut){F=Ut},setClear:function(Ut,Qt,te,Me,Ee){Ee===!0&&(Ut*=Me,Qt*=Me,te*=Me),xt.set(Ut,Qt,te,Me),Ft.equals(xt)===!1&&(n.clearColor(Ut,Qt,te,Me),Ft.copy(xt))},reset:function(){F=!1,St=null,Ft.set(-1,0,0,0)}}}function r(){let F=!1,xt=null,St=null,Ft=null;return{setTest:function(Ut){Ut?Ct(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(Ut){xt!==Ut&&!F&&(n.depthMask(Ut),xt=Ut)},setFunc:function(Ut){if(St!==Ut){switch(Ut){case tv:n.depthFunc(n.NEVER);break;case ev:n.depthFunc(n.ALWAYS);break;case nv:n.depthFunc(n.LESS);break;case ea:n.depthFunc(n.LEQUAL);break;case iv:n.depthFunc(n.EQUAL);break;case sv:n.depthFunc(n.GEQUAL);break;case rv:n.depthFunc(n.GREATER);break;case ov:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=Ut}},setLocked:function(Ut){F=Ut},setClear:function(Ut){Ft!==Ut&&(n.clearDepth(Ut),Ft=Ut)},reset:function(){F=!1,xt=null,St=null,Ft=null}}}function o(){let F=!1,xt=null,St=null,Ft=null,Ut=null,Qt=null,te=null,Me=null,Ee=null;return{setTest:function(ne){F||(ne?Ct(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(ne){xt!==ne&&!F&&(n.stencilMask(ne),xt=ne)},setFunc:function(ne,Te,Dn){(St!==ne||Ft!==Te||Ut!==Dn)&&(n.stencilFunc(ne,Te,Dn),St=ne,Ft=Te,Ut=Dn)},setOp:function(ne,Te,Dn){(Qt!==ne||te!==Te||Me!==Dn)&&(n.stencilOp(ne,Te,Dn),Qt=ne,te=Te,Me=Dn)},setLocked:function(ne){F=ne},setClear:function(ne){Ee!==ne&&(n.clearStencil(ne),Ee=ne)},reset:function(){F=!1,xt=null,St=null,Ft=null,Ut=null,Qt=null,te=null,Me=null,Ee=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,b=null,C=null,R=null,P=null,J=null,E=new Xt(0,0,0),w=0,X=!1,V=null,rt=null,A=null,B=null,G=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(et)[1]),U=W>=1):et.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),U=W>=2);let ot=null,ft={};const $=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),mt=new ge().fromArray($),_t=new ge().fromArray(ht);function bt(F,xt,St,Ft){const Ut=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(F,Qt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<St;te++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(xt,0,n.RGBA,1,1,Ft,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(xt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return Qt}const Tt={};Tt[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Tt[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(n.DEPTH_TEST),l.setFunc(ea),ct(!1),M(xu),Ct(n.CULL_FACE),q(Ri);function Ct(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function Et(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function Ht(F,xt){return d[F]!==xt?(n.bindFramebuffer(F,xt),d[F]=xt,i&&(F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xt),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xt)),!0):!1}function y(F,xt){let St=_,Ft=!1;if(F)if(St=g.get(xt),St===void 0&&(St=[],g.set(xt,St)),F.isWebGLMultipleRenderTargets){const Ut=F.texture;if(St.length!==Ut.length||St[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,te=Ut.length;Qt<te;Qt++)St[Qt]=n.COLOR_ATTACHMENT0+Qt;St.length=Ut.length,Ft=!0}}else St[0]!==n.COLOR_ATTACHMENT0&&(St[0]=n.COLOR_ATTACHMENT0,Ft=!0);else St[0]!==n.BACK&&(St[0]=n.BACK,Ft=!0);Ft&&(e.isWebGL2?n.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function N(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const k={[qi]:n.FUNC_ADD,[z_]:n.FUNC_SUBTRACT,[H_]:n.FUNC_REVERSE_SUBTRACT};if(i)k[Su]=n.MIN,k[Eu]=n.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(k[Su]=F.MIN_EXT,k[Eu]=F.MAX_EXT)}const K={[k_]:n.ZERO,[G_]:n.ONE,[V_]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[$_]:n.SRC_ALPHA_SATURATE,[q_]:n.DST_COLOR,[X_]:n.DST_ALPHA,[W_]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[Y_]:n.ONE_MINUS_DST_COLOR,[j_]:n.ONE_MINUS_DST_ALPHA,[K_]:n.CONSTANT_COLOR,[Z_]:n.ONE_MINUS_CONSTANT_COLOR,[J_]:n.CONSTANT_ALPHA,[Q_]:n.ONE_MINUS_CONSTANT_ALPHA};function q(F,xt,St,Ft,Ut,Qt,te,Me,Ee,ne){if(F===Ri){p===!0&&(Et(n.BLEND),p=!1);return}if(p===!1&&(Ct(n.BLEND),p=!0),F!==B_){if(F!==S||ne!==X){if((v!==qi||R!==qi)&&(n.blendEquation(n.FUNC_ADD),v=qi,R=qi),ne)switch(F){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ne:n.blendFunc(n.ONE,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ne:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,C=null,P=null,J=null,E.set(0,0,0),w=0,S=F,X=ne}return}Ut=Ut||xt,Qt=Qt||St,te=te||Ft,(xt!==v||Ut!==R)&&(n.blendEquationSeparate(k[xt],k[Ut]),v=xt,R=Ut),(St!==b||Ft!==C||Qt!==P||te!==J)&&(n.blendFuncSeparate(K[St],K[Ft],K[Qt],K[te]),b=St,C=Ft,P=Qt,J=te),(Me.equals(E)===!1||Ee!==w)&&(n.blendColor(Me.r,Me.g,Me.b,Ee),E.copy(Me),w=Ee),S=F,X=!1}function st(F,xt){F.side===bn?Et(n.CULL_FACE):Ct(n.CULL_FACE);let St=F.side===tn;xt&&(St=!St),ct(St),F.blending===zs&&F.transparent===!1?q(Ri):q(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Ft=F.stencilWrite;c.setTest(Ft),Ft&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),D(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ct(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(F){V!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),V=F)}function M(F){F!==N_?(Ct(n.CULL_FACE),F!==rt&&(F===xu?n.cullFace(n.BACK):F===O_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),rt=F}function x(F){F!==A&&(U&&n.lineWidth(F),A=F)}function D(F,xt,St){F?(Ct(n.POLYGON_OFFSET_FILL),(B!==xt||G!==St)&&(n.polygonOffset(xt,St),B=xt,G=St)):Et(n.POLYGON_OFFSET_FILL)}function Q(F){F?Ct(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function j(F){F===void 0&&(F=n.TEXTURE0+O-1),ot!==F&&(n.activeTexture(F),ot=F)}function Z(F,xt,St){St===void 0&&(ot===null?St=n.TEXTURE0+O-1:St=ot);let Ft=ft[St];Ft===void 0&&(Ft={type:void 0,texture:void 0},ft[St]=Ft),(Ft.type!==F||Ft.texture!==xt)&&(ot!==St&&(n.activeTexture(St),ot=St),n.bindTexture(F,xt||Tt[F]),Ft.type=F,Ft.texture=xt)}function z(){const F=ft[ot];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(F){mt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),mt.copy(F))}function gt(F){_t.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),_t.copy(F))}function Pt(F,xt){let St=h.get(xt);St===void 0&&(St=new WeakMap,h.set(xt,St));let Ft=St.get(F);Ft===void 0&&(Ft=n.getUniformBlockIndex(xt,F.name),St.set(F,Ft))}function Rt(F,xt){const Ft=h.get(xt).get(F);u.get(xt)!==Ft&&(n.uniformBlockBinding(xt,Ft,F.__bindingPointIndex),u.set(xt,Ft))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ot=null,ft={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,b=null,C=null,R=null,P=null,J=null,E=new Xt(0,0,0),w=0,X=!1,V=null,rt=null,A=null,B=null,G=null,mt.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ct,disable:Et,bindFramebuffer:Ht,drawBuffers:y,useProgram:N,setBlending:q,setMaterial:st,setFlipSided:ct,setCullFace:M,setLineWidth:x,setPolygonOffset:D,setScissorTest:Q,activeTexture:j,bindTexture:Z,unbindTexture:z,compressedTexImage2D:H,compressedTexImage3D:ut,texImage2D:Lt,texImage3D:yt,updateUBOMapping:Pt,uniformBlockBinding:Rt,texStorage2D:It,texStorage3D:Nt,texSubImage2D:dt,texSubImage3D:At,compressedTexSubImage2D:lt,compressedTexSubImage3D:kt,scissor:L,viewport:gt,reset:pt}}function qE(n,t,e,i,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return d?new OffscreenCanvas(M,x):Nr("canvas")}function _(M,x,D,Q){let j=1;if((M.width>Q||M.height>Q)&&(j=Q/Math.max(M.width,M.height)),j<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const Z=x?oa:Math.floor,z=Z(j*M.width),H=Z(j*M.height);h===void 0&&(h=g(z,H));const ut=D?g(z,H):h;return ut.width=z,ut.height=H,ut.getContext("2d").drawImage(M,0,0,z,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+z+"x"+H+")."),ut}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return jl(M.width)&&jl(M.height)}function p(M){return a?!1:M.wrapS!==Tn||M.wrapT!==Tn||M.minFilter!==$e&&M.minFilter!==dn}function S(M,x){return M.generateMipmaps&&x&&M.minFilter!==$e&&M.minFilter!==dn}function v(M){n.generateMipmap(M)}function b(M,x,D,Q,j=!1){if(a===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=x;if(x===n.RED&&(D===n.FLOAT&&(Z=n.R32F),D===n.HALF_FLOAT&&(Z=n.R16F),D===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Z=n.R8UI),D===n.UNSIGNED_SHORT&&(Z=n.R16UI),D===n.UNSIGNED_INT&&(Z=n.R32UI),D===n.BYTE&&(Z=n.R8I),D===n.SHORT&&(Z=n.R16I),D===n.INT&&(Z=n.R32I)),x===n.RG&&(D===n.FLOAT&&(Z=n.RG32F),D===n.HALF_FLOAT&&(Z=n.RG16F),D===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RGBA){const z=j?na:le.getTransfer(Q);D===n.FLOAT&&(Z=n.RGBA32F),D===n.HALF_FLOAT&&(Z=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Z=z===fe?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function C(M,x,D){return S(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==$e&&M.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){return M===$e||M===bu||M===Wa?n.NEAREST:n.LINEAR}function P(M){const x=M.target;x.removeEventListener("dispose",P),E(x),x.isVideoTexture&&u.delete(x)}function J(M){const x=M.target;x.removeEventListener("dispose",J),X(x)}function E(M){const x=i.get(M);if(x.__webglInit===void 0)return;const D=M.source,Q=f.get(D);if(Q){const j=Q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(M),Object.keys(Q).length===0&&f.delete(D)}i.remove(M)}function w(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const D=M.source,Q=f.get(D);delete Q[x.__cacheKey],o.memory.textures--}function X(M){const x=M.texture,D=i.get(M),Q=i.get(x);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(D.__webglFramebuffer[j]))for(let Z=0;Z<D.__webglFramebuffer[j].length;Z++)n.deleteFramebuffer(D.__webglFramebuffer[j][Z]);else n.deleteFramebuffer(D.__webglFramebuffer[j]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[j])}else{if(Array.isArray(D.__webglFramebuffer))for(let j=0;j<D.__webglFramebuffer.length;j++)n.deleteFramebuffer(D.__webglFramebuffer[j]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let j=0;j<D.__webglColorRenderbuffer.length;j++)D.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[j]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let j=0,Z=x.length;j<Z;j++){const z=i.get(x[j]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(x[j])}i.remove(x),i.remove(M)}let V=0;function rt(){V=0}function A(){const M=V;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),V+=1,M}function B(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function G(M,x){const D=i.get(M);if(M.isVideoTexture&&st(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(D,M,x);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function O(M,x){const D=i.get(M);if(M.version>0&&D.__version!==M.version){mt(D,M,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function U(M,x){const D=i.get(M);if(M.version>0&&D.__version!==M.version){mt(D,M,x);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function W(M,x){const D=i.get(M);if(M.version>0&&D.__version!==M.version){_t(D,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const et={[Gl]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},ot={[$e]:n.NEAREST,[bu]:n.NEAREST_MIPMAP_NEAREST,[Wa]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[mv]:n.LINEAR_MIPMAP_NEAREST,[Dr]:n.LINEAR_MIPMAP_LINEAR},ft={[Av]:n.NEVER,[Iv]:n.ALWAYS,[Rv]:n.LESS,[Nd]:n.LEQUAL,[Cv]:n.EQUAL,[Dv]:n.GEQUAL,[Pv]:n.GREATER,[Lv]:n.NOTEQUAL};function $(M,x,D){if(D?(n.texParameteri(M,n.TEXTURE_WRAP_S,et[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,et[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,et[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ot[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ot[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Tn||x.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==$e&&x.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===$e||x.minFilter!==Wa&&x.minFilter!==Dr||x.type===Ai&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ir&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ht(M,x){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",P));const Q=x.source;let j=f.get(Q);j===void 0&&(j={},f.set(Q,j));const Z=B(x);if(Z!==M.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),j[Z].usedTimes++;const z=j[M.__cacheKey];z!==void 0&&(j[M.__cacheKey].usedTimes--,z.usedTimes===0&&w(x)),M.__cacheKey=Z,M.__webglTexture=j[Z].texture}return D}function mt(M,x,D){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const j=ht(M,x),Z=x.source;e.bindTexture(Q,M.__webglTexture,n.TEXTURE0+D);const z=i.get(Z);if(Z.version!==z.__version||j===!0){e.activeTexture(n.TEXTURE0+D);const H=le.getPrimaries(le.workingColorSpace),ut=x.colorSpace===gn?null:le.getPrimaries(x.colorSpace),dt=x.colorSpace===gn||H===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const At=p(x)&&m(x.image)===!1;let lt=_(x.image,At,!1,s.maxTextureSize);lt=ct(x,lt);const kt=m(lt)||a,It=r.convert(x.format,x.colorSpace);let Nt=r.convert(x.type),Lt=b(x.internalFormat,It,Nt,x.colorSpace,x.isVideoTexture);$(Q,x,kt);let yt;const L=x.mipmaps,gt=a&&x.isVideoTexture!==!0&&Lt!==Id,Pt=z.__version===void 0||j===!0,Rt=C(x,lt,kt);if(x.isDepthTexture)Lt=n.DEPTH_COMPONENT,a?x.type===Ai?Lt=n.DEPTH_COMPONENT32F:x.type===wi?Lt=n.DEPTH_COMPONENT24:x.type===Qi?Lt=n.DEPTH24_STENCIL8:Lt=n.DEPTH_COMPONENT16:x.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ts&&Lt===n.DEPTH_COMPONENT&&x.type!==vc&&x.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=wi,Nt=r.convert(x.type)),x.format===js&&Lt===n.DEPTH_COMPONENT&&(Lt=n.DEPTH_STENCIL,x.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Qi,Nt=r.convert(x.type))),Pt&&(gt?e.texStorage2D(n.TEXTURE_2D,1,Lt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,lt.width,lt.height,0,It,Nt,null));else if(x.isDataTexture)if(L.length>0&&kt){gt&&Pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,L[0].width,L[0].height);for(let pt=0,F=L.length;pt<F;pt++)yt=L[pt],gt?e.texSubImage2D(n.TEXTURE_2D,pt,0,0,yt.width,yt.height,It,Nt,yt.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,yt.width,yt.height,0,It,Nt,yt.data);x.generateMipmaps=!1}else gt?(Pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,lt.width,lt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,It,Nt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,lt.width,lt.height,0,It,Nt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){gt&&Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,L[0].width,L[0].height,lt.depth);for(let pt=0,F=L.length;pt<F;pt++)yt=L[pt],x.format!==wn?It!==null?gt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,yt.width,yt.height,lt.depth,It,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,yt.width,yt.height,lt.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,yt.width,yt.height,lt.depth,It,Nt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,yt.width,yt.height,lt.depth,0,It,Nt,yt.data)}else{gt&&Pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,L[0].width,L[0].height);for(let pt=0,F=L.length;pt<F;pt++)yt=L[pt],x.format!==wn?It!==null?gt?e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,yt.width,yt.height,It,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?e.texSubImage2D(n.TEXTURE_2D,pt,0,0,yt.width,yt.height,It,Nt,yt.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,yt.width,yt.height,0,It,Nt,yt.data)}else if(x.isDataArrayTexture)gt?(Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,lt.width,lt.height,lt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,It,Nt,lt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,lt.width,lt.height,lt.depth,0,It,Nt,lt.data);else if(x.isData3DTexture)gt?(Pt&&e.texStorage3D(n.TEXTURE_3D,Rt,Lt,lt.width,lt.height,lt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,It,Nt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,lt.width,lt.height,lt.depth,0,It,Nt,lt.data);else if(x.isFramebufferTexture){if(Pt)if(gt)e.texStorage2D(n.TEXTURE_2D,Rt,Lt,lt.width,lt.height);else{let pt=lt.width,F=lt.height;for(let xt=0;xt<Rt;xt++)e.texImage2D(n.TEXTURE_2D,xt,Lt,pt,F,0,It,Nt,null),pt>>=1,F>>=1}}else if(L.length>0&&kt){gt&&Pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,L[0].width,L[0].height);for(let pt=0,F=L.length;pt<F;pt++)yt=L[pt],gt?e.texSubImage2D(n.TEXTURE_2D,pt,0,0,It,Nt,yt):e.texImage2D(n.TEXTURE_2D,pt,Lt,It,Nt,yt);x.generateMipmaps=!1}else gt?(Pt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,lt.width,lt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Nt,lt)):e.texImage2D(n.TEXTURE_2D,0,Lt,It,Nt,lt);S(x,kt)&&v(Q),z.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _t(M,x,D){if(x.image.length!==6)return;const Q=ht(M,x),j=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const Z=i.get(j);if(j.version!==Z.__version||Q===!0){e.activeTexture(n.TEXTURE0+D);const z=le.getPrimaries(le.workingColorSpace),H=x.colorSpace===gn?null:le.getPrimaries(x.colorSpace),ut=x.colorSpace===gn||z===H?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const dt=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,lt=[];for(let pt=0;pt<6;pt++)!dt&&!At?lt[pt]=_(x.image[pt],!1,!0,s.maxCubemapSize):lt[pt]=At?x.image[pt].image:x.image[pt],lt[pt]=ct(x,lt[pt]);const kt=lt[0],It=m(kt)||a,Nt=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),yt=b(x.internalFormat,Nt,Lt,x.colorSpace),L=a&&x.isVideoTexture!==!0,gt=Z.__version===void 0||Q===!0;let Pt=C(x,kt,It);$(n.TEXTURE_CUBE_MAP,x,It);let Rt;if(dt){L&&gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,yt,kt.width,kt.height);for(let pt=0;pt<6;pt++){Rt=lt[pt].mipmaps;for(let F=0;F<Rt.length;F++){const xt=Rt[F];x.format!==wn?Nt!==null?L?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F,0,0,xt.width,xt.height,Nt,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F,yt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F,0,0,xt.width,xt.height,Nt,Lt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F,yt,xt.width,xt.height,0,Nt,Lt,xt.data)}}}else{Rt=x.mipmaps,L&&gt&&(Rt.length>0&&Pt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,yt,lt[0].width,lt[0].height));for(let pt=0;pt<6;pt++)if(At){L?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,lt[pt].width,lt[pt].height,Nt,Lt,lt[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,yt,lt[pt].width,lt[pt].height,0,Nt,Lt,lt[pt].data);for(let F=0;F<Rt.length;F++){const St=Rt[F].image[pt].image;L?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F+1,0,0,St.width,St.height,Nt,Lt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F+1,yt,St.width,St.height,0,Nt,Lt,St.data)}}else{L?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Nt,Lt,lt[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,yt,Nt,Lt,lt[pt]);for(let F=0;F<Rt.length;F++){const xt=Rt[F];L?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F+1,0,0,Nt,Lt,xt.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,F+1,yt,Nt,Lt,xt.image[pt])}}}S(x,It)&&v(n.TEXTURE_CUBE_MAP),Z.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function bt(M,x,D,Q,j,Z){const z=r.convert(D.format,D.colorSpace),H=r.convert(D.type),ut=b(D.internalFormat,z,H,D.colorSpace);if(!i.get(x).__hasExternalTextures){const At=Math.max(1,x.width>>Z),lt=Math.max(1,x.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,ut,At,lt,x.depth,0,z,H,null):e.texImage2D(j,Z,ut,At,lt,0,z,H,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),q(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,i.get(D).__webglTexture,0,K(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,i.get(D).__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(M,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||q(x)){const j=x.depthTexture;j&&j.isDepthTexture&&(j.type===Ai?Q=n.DEPTH_COMPONENT32F:j.type===wi&&(Q=n.DEPTH_COMPONENT24));const Z=K(x);q(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,Q,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,Q,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const Q=K(x);D&&q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):q(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let j=0;j<Q.length;j++){const Z=Q[j],z=r.convert(Z.format,Z.colorSpace),H=r.convert(Z.type),ut=b(Z.internalFormat,z,H,Z.colorSpace),dt=K(x);D&&q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,ut,x.width,x.height):q(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,j=K(x);if(x.depthTexture.format===ts)q(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===js)q(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Et(M){const x=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ct(x.__webglFramebuffer,M)}else if(D){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=n.createRenderbuffer(),Tt(x.__webglDepthbuffer[Q],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Tt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(M,x,D){const Q=i.get(M);x!==void 0&&bt(Q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Et(M)}function y(M){const x=M.texture,D=i.get(M),Q=i.get(x);M.addEventListener("dispose",J),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,o.memory.textures++);const j=M.isWebGLCubeRenderTarget===!0,Z=M.isWebGLMultipleRenderTargets===!0,z=m(M)||a;if(j){D.__webglFramebuffer=[];for(let H=0;H<6;H++)if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[H]=[];for(let ut=0;ut<x.mipmaps.length;ut++)D.__webglFramebuffer[H][ut]=n.createFramebuffer()}else D.__webglFramebuffer[H]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let H=0;H<x.mipmaps.length;H++)D.__webglFramebuffer[H]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Z)if(s.drawBuffers){const H=M.texture;for(let ut=0,dt=H.length;ut<dt;ut++){const At=i.get(H[ut]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&q(M)===!1){const H=Z?x:[x];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ut=0;ut<H.length;ut++){const dt=H[ut];D.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ut]);const At=r.convert(dt.format,dt.colorSpace),lt=r.convert(dt.type),kt=b(dt.internalFormat,At,lt,dt.colorSpace,M.isXRRenderTarget===!0),It=K(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,kt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,D.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(D.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),$(n.TEXTURE_CUBE_MAP,x,z);for(let H=0;H<6;H++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)bt(D.__webglFramebuffer[H][ut],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ut);else bt(D.__webglFramebuffer[H],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);S(x,z)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){const H=M.texture;for(let ut=0,dt=H.length;ut<dt;ut++){const At=H[ut],lt=i.get(At);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),$(n.TEXTURE_2D,At,z),bt(D.__webglFramebuffer,M,At,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),S(At,z)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let H=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?H=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(H,Q.__webglTexture),$(H,x,z),a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)bt(D.__webglFramebuffer[ut],M,x,n.COLOR_ATTACHMENT0,H,ut);else bt(D.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,H,0);S(x,z)&&v(H),e.unbindTexture()}M.depthBuffer&&Et(M)}function N(M){const x=m(M)||a,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,j=D.length;Q<j;Q++){const Z=D[Q];if(S(Z,x)){const z=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,H=i.get(Z).__webglTexture;e.bindTexture(z,H),v(z),e.unbindTexture()}}}function k(M){if(a&&M.samples>0&&q(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,Q=M.height;let j=n.COLOR_BUFFER_BIT;const Z=[],z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=i.get(M),ut=M.isWebGLMultipleRenderTargets===!0;if(ut)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,H.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,H.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,H.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){Z.push(n.COLOR_ATTACHMENT0+dt),M.depthBuffer&&Z.push(z);const At=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(At===!1&&(M.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,H.__webglColorRenderbuffer[dt]),At===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[z]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[z])),ut){const lt=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,D,Q,0,0,D,Q,j,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const At=i.get(x[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,H.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,At,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,H.__webglMultisampledFramebuffer)}}function K(M){return Math.min(s.maxSamples,M.samples)}function q(M){const x=i.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function st(M){const x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function ct(M,x){const D=M.colorSpace,Q=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Xl||D!==pi&&D!==gn&&(le.getTransfer(D)===fe?a===!1?t.has("EXT_sRGB")===!0&&Q===wn?(M.format=Xl,M.minFilter=dn,M.generateMipmaps=!1):x=Fd.sRGBToLinear(x):(Q!==wn||j!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}this.allocateTextureUnit=A,this.resetTextureUnits=rt,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=W,this.rebindTextures=Ht,this.setupRenderTarget=y,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=q}function YE(n,t,e){const i=e.isWebGL2;function s(r,o=gn){let a;const l=le.getTransfer(o);if(r===Pi)return n.UNSIGNED_BYTE;if(r===Rd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===gv)return n.BYTE;if(r===_v)return n.SHORT;if(r===vc)return n.UNSIGNED_SHORT;if(r===Ad)return n.INT;if(r===wi)return n.UNSIGNED_INT;if(r===Ai)return n.FLOAT;if(r===Ir)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vv)return n.ALPHA;if(r===wn)return n.RGBA;if(r===xv)return n.LUMINANCE;if(r===yv)return n.LUMINANCE_ALPHA;if(r===ts)return n.DEPTH_COMPONENT;if(r===js)return n.DEPTH_STENCIL;if(r===Xl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mv)return n.RED;if(r===Pd)return n.RED_INTEGER;if(r===Sv)return n.RG;if(r===Ld)return n.RG_INTEGER;if(r===Dd)return n.RGBA_INTEGER;if(r===Xa||r===ja||r===qa||r===Ya)if(l===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tu||r===wu||r===Au||r===Ru)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Tu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Au)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ru)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cu||r===Pu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Cu)return l===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Pu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lu||r===Du||r===Iu||r===Uu||r===Nu||r===Ou||r===Fu||r===Bu||r===zu||r===Hu||r===ku||r===Gu||r===Vu||r===Wu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Lu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Du)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Iu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ou)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ku)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wu)return l===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$a||r===Xu||r===ju)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===$a)return l===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ju)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ev||r===qu||r===Yu||r===$u)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===$a)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$u)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class $E extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class kn extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KE={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ZE extends rs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const S=[],v=[],b=new vt;let C=null;const R=new rn;R.layers.enable(1),R.viewport=new ge;const P=new rn;P.layers.enable(2),P.viewport=new ge;const J=[R,P],E=new $E;E.layers.enable(1),E.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ht=S[$];return ht===void 0&&(ht=new vl,S[$]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function($){let ht=S[$];return ht===void 0&&(ht=new vl,S[$]=ht),ht.getGripSpace()},this.getHand=function($){let ht=S[$];return ht===void 0&&(ht=new vl,S[$]=ht),ht.getHandSpace()};function V($){const ht=v.indexOf($.inputSource);if(ht===-1)return;const mt=S[ht];mt!==void 0&&(mt.update($.inputSource,$.frame,c||o),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function rt(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",A);for(let $=0;$<S.length;$++){const ht=v[$];ht!==null&&(v[$]=null,S[$].disconnect(ht))}w=null,X=null,t.setRenderTarget(m),d=null,f=null,h=null,s=null,p=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",A),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ht={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ns(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ht=null,mt=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=_.stencil?js:ts,mt=_.stencil?Qi:wi);const bt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new ns(f.textureWidth,f.textureHeight,{format:wn,type:Pi,depthTexture:new Yd(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Tt=t.properties.get(p);Tt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function A($){for(let ht=0;ht<$.removed.length;ht++){const mt=$.removed[ht],_t=v.indexOf(mt);_t>=0&&(v[_t]=null,S[_t].disconnect(mt))}for(let ht=0;ht<$.added.length;ht++){const mt=$.added[ht];let _t=v.indexOf(mt);if(_t===-1){for(let Tt=0;Tt<S.length;Tt++)if(Tt>=v.length){v.push(mt),_t=Tt;break}else if(v[Tt]===null){v[Tt]=mt,_t=Tt;break}if(_t===-1)break}const bt=S[_t];bt&&bt.connect(mt)}}const B=new I,G=new I;function O($,ht,mt){B.setFromMatrixPosition(ht.matrixWorld),G.setFromMatrixPosition(mt.matrixWorld);const _t=B.distanceTo(G),bt=ht.projectionMatrix.elements,Tt=mt.projectionMatrix.elements,Ct=bt[14]/(bt[10]-1),Et=bt[14]/(bt[10]+1),Ht=(bt[9]+1)/bt[5],y=(bt[9]-1)/bt[5],N=(bt[8]-1)/bt[0],k=(Tt[8]+1)/Tt[0],K=Ct*N,q=Ct*k,st=_t/(-N+k),ct=st*-N;ht.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(st),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const M=Ct+st,x=Et+st,D=K-ct,Q=q+(_t-ct),j=Ht*Et/x*M,Z=y*Et/x*M;$.projectionMatrix.makePerspective(D,Q,j,Z,M,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function U($,ht){ht===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ht.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;E.near=P.near=R.near=$.near,E.far=P.far=R.far=$.far,(w!==E.near||X!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,X=E.far);const ht=$.parent,mt=E.cameras;U(E,ht);for(let _t=0;_t<mt.length;_t++)U(mt[_t],ht);mt.length===2?O(E,R,P):E.projectionMatrix.copy(R.projectionMatrix),W($,E,ht)};function W($,ht,mt){mt===null?$.matrix.copy(ht.matrixWorld):($.matrix.copy(mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ht.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ur*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)};let et=null;function ot($,ht){if(u=ht.getViewerPose(c||o),g=ht,u!==null){const mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let _t=!1;mt.length!==E.cameras.length&&(E.cameras.length=0,_t=!0);for(let bt=0;bt<mt.length;bt++){const Tt=mt[bt];let Ct=null;if(d!==null)Ct=d.getViewport(Tt);else{const Ht=h.getViewSubImage(f,Tt);Ct=Ht.viewport,bt===0&&(t.setRenderTargetTextures(p,Ht.colorTexture,f.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(p))}let Et=J[bt];Et===void 0&&(Et=new rn,Et.layers.enable(bt),Et.viewport=new ge,J[bt]=Et),Et.matrix.fromArray(Tt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Tt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),bt===0&&(E.matrix.copy(Et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_t===!0&&E.cameras.push(Et)}}for(let mt=0;mt<S.length;mt++){const _t=v[mt],bt=S[mt];_t!==null&&bt!==void 0&&bt.update(_t,ht,c||o)}et&&et($,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}const ft=new jd;ft.setAnimationLoop(ot),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}}function JE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QE(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const b=v.program;i.uniformBlockBinding(S,b)}function c(S,v){let b=s[S.id];b===void 0&&(g(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(S,C);const R=t.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function u(S){const v=h();S.__bindingPointIndex=v;const b=n.createBuffer(),C=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=s[S.id],b=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,P=b.length;R<P;R++){const J=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,w=J.length;E<w;E++){const X=J[E];if(d(X,R,E,C)===!0){const V=X.__offset,rt=Array.isArray(X.value)?X.value:[X.value];let A=0;for(let B=0;B<rt.length;B++){const G=rt[B],O=_(G);typeof G=="number"||typeof G=="boolean"?(X.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,V+A,X.__data)):G.isMatrix3?(X.__data[0]=G.elements[0],X.__data[1]=G.elements[1],X.__data[2]=G.elements[2],X.__data[3]=0,X.__data[4]=G.elements[3],X.__data[5]=G.elements[4],X.__data[6]=G.elements[5],X.__data[7]=0,X.__data[8]=G.elements[6],X.__data[9]=G.elements[7],X.__data[10]=G.elements[8],X.__data[11]=0):(G.toArray(X.__data,A),A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,X.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,v,b,C){const R=S.value,P=v+"_"+b;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{const J=C[P];if(typeof R=="number"||typeof R=="boolean"){if(J!==R)return C[P]=R,!0}else if(J.equals(R)===!1)return J.copy(R),!0}return!1}function g(S){const v=S.uniforms;let b=0;const C=16;for(let P=0,J=v.length;P<J;P++){const E=Array.isArray(v[P])?v[P]:[v[P]];for(let w=0,X=E.length;w<X;w++){const V=E[w],rt=Array.isArray(V.value)?V.value:[V.value];for(let A=0,B=rt.length;A<B;A++){const G=rt[A],O=_(G),U=b%C;U!==0&&C-U<O.boundary&&(b+=C-U),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=O.storage}}}const R=b%C;return R>0&&(b+=C-R),S.__size=b,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class tp{constructor(t={}){const{canvas:e=$v(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;const v=this;let b=!1,C=0,R=0,P=null,J=-1,E=null;const w=new ge,X=new ge;let V=null;const rt=new Xt(0);let A=0,B=e.width,G=e.height,O=1,U=null,W=null;const et=new ge(0,0,B,G),ot=new ge(0,0,B,G);let ft=!1;const $=new Sc;let ht=!1,mt=!1,_t=null;const bt=new de,Tt=new vt,Ct=new I,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ht(){return P===null?O:1}let y=i;function N(T,Y){for(let nt=0;nt<T.length;nt++){const it=T[nt],tt=e.getContext(it,Y);if(tt!==null)return tt}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_c}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",xt,!1),y===null){const Y=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Y.shift(),y=N(Y,T),y===null)throw N(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let k,K,q,st,ct,M,x,D,Q,j,Z,z,H,ut,dt,At,lt,kt,It,Nt,Lt,yt,L,gt;function Pt(){k=new cS(y),K=new iS(y,k,t),k.init(K),yt=new YE(y,k,K),q=new jE(y,k,K),st=new fS(y),ct=new DE,M=new qE(y,k,q,ct,K,yt,st),x=new rS(v),D=new lS(v),Q=new yx(y,K),L=new eS(y,k,Q,K),j=new uS(y,Q,st,L),Z=new gS(y,j,Q,st),It=new mS(y,K,M),At=new sS(ct),z=new LE(v,x,D,k,K,L,At),H=new JE(v,ct),ut=new UE,dt=new HE(k,K),kt=new tS(v,x,D,q,Z,f,l),lt=new XE(v,Z,K),gt=new QE(y,st,K,q),Nt=new nS(y,k,st,K),Lt=new hS(y,k,st,K),st.programs=z.programs,v.capabilities=K,v.extensions=k,v.properties=ct,v.renderLists=ut,v.shadowMap=lt,v.state=q,v.info=st}Pt();const Rt=new ZE(v,y);this.xr=Rt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=k.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=k.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(B,G,!1))},this.getSize=function(T){return T.set(B,G)},this.setSize=function(T,Y,nt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,G=Y,e.width=Math.floor(T*O),e.height=Math.floor(Y*O),nt===!0&&(e.style.width=T+"px",e.style.height=Y+"px"),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(B*O,G*O).floor()},this.setDrawingBufferSize=function(T,Y,nt){B=T,G=Y,O=nt,e.width=Math.floor(T*nt),e.height=Math.floor(Y*nt),this.setViewport(0,0,T,Y)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,Y,nt,it){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,Y,nt,it),q.viewport(w.copy(et).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,Y,nt,it){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,Y,nt,it),q.scissor(X.copy(ot).multiplyScalar(O).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(T){q.setScissorTest(ft=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(T=!0,Y=!0,nt=!0){let it=0;if(T){let tt=!1;if(P!==null){const wt=P.texture.format;tt=wt===Dd||wt===Ld||wt===Pd}if(tt){const wt=P.texture.type,Dt=wt===Pi||wt===wi||wt===vc||wt===Qi||wt===Rd||wt===Cd,Bt=kt.getClearColor(),Gt=kt.getClearAlpha(),Kt=Bt.r,jt=Bt.g,qt=Bt.b;Dt?(d[0]=Kt,d[1]=jt,d[2]=qt,d[3]=Gt,y.clearBufferuiv(y.COLOR,0,d)):(g[0]=Kt,g[1]=jt,g[2]=qt,g[3]=Gt,y.clearBufferiv(y.COLOR,0,g))}else it|=y.COLOR_BUFFER_BIT}Y&&(it|=y.DEPTH_BUFFER_BIT),nt&&(it|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ut.dispose(),dt.dispose(),ct.dispose(),x.dispose(),D.dispose(),Z.dispose(),L.dispose(),gt.dispose(),z.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Ee),Rt.removeEventListener("sessionend",ne),_t&&(_t.dispose(),_t=null),Te.stop()};function pt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=st.autoReset,Y=lt.enabled,nt=lt.autoUpdate,it=lt.needsUpdate,tt=lt.type;Pt(),st.autoReset=T,lt.enabled=Y,lt.autoUpdate=nt,lt.needsUpdate=it,lt.type=tt}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function St(T){const Y=T.target;Y.removeEventListener("dispose",St),Ft(Y)}function Ft(T){Ut(T),ct.remove(T)}function Ut(T){const Y=ct.get(T).programs;Y!==void 0&&(Y.forEach(function(nt){z.releaseProgram(nt)}),T.isShaderMaterial&&z.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,nt,it,tt,wt){Y===null&&(Y=Et);const Dt=tt.isMesh&&tt.matrixWorld.determinant()<0,Bt=pp(T,Y,nt,it,tt);q.setMaterial(it,Dt);let Gt=nt.index,Kt=1;if(it.wireframe===!0){if(Gt=j.getWireframeAttribute(nt),Gt===void 0)return;Kt=2}const jt=nt.drawRange,qt=nt.attributes.position;let be=jt.start*Kt,en=(jt.start+jt.count)*Kt;wt!==null&&(be=Math.max(be,wt.start*Kt),en=Math.min(en,(wt.start+wt.count)*Kt)),Gt!==null?(be=Math.max(be,0),en=Math.min(en,Gt.count)):qt!=null&&(be=Math.max(be,0),en=Math.min(en,qt.count));const Ie=en-be;if(Ie<0||Ie===1/0)return;L.setup(tt,it,Bt,nt,Gt);let $n,_e=Nt;if(Gt!==null&&($n=Q.get(Gt),_e=Lt,_e.setIndex($n)),tt.isMesh)it.wireframe===!0?(q.setLineWidth(it.wireframeLinewidth*Ht()),_e.setMode(y.LINES)):_e.setMode(y.TRIANGLES);else if(tt.isLine){let Zt=it.linewidth;Zt===void 0&&(Zt=1),q.setLineWidth(Zt*Ht()),tt.isLineSegments?_e.setMode(y.LINES):tt.isLineLoop?_e.setMode(y.LINE_LOOP):_e.setMode(y.LINE_STRIP)}else tt.isPoints?_e.setMode(y.POINTS):tt.isSprite&&_e.setMode(y.TRIANGLES);if(tt.isBatchedMesh)_e.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)_e.renderInstances(be,Ie,tt.count);else if(nt.isInstancedBufferGeometry){const Zt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,wa=Math.min(nt.instanceCount,Zt);_e.renderInstances(be,Ie,wa)}else _e.render(be,Ie)};function Qt(T,Y,nt){T.transparent===!0&&T.side===bn&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Kr(T,Y,nt),T.side=jn,T.needsUpdate=!0,Kr(T,Y,nt),T.side=bn):Kr(T,Y,nt)}this.compile=function(T,Y,nt=null){nt===null&&(nt=T),m=dt.get(nt),m.init(),S.push(m),nt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),T!==nt&&T.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),m.setupLights(v._useLegacyLights);const it=new Set;return T.traverse(function(tt){const wt=tt.material;if(wt)if(Array.isArray(wt))for(let Dt=0;Dt<wt.length;Dt++){const Bt=wt[Dt];Qt(Bt,nt,tt),it.add(Bt)}else Qt(wt,nt,tt),it.add(wt)}),S.pop(),m=null,it},this.compileAsync=function(T,Y,nt=null){const it=this.compile(T,Y,nt);return new Promise(tt=>{function wt(){if(it.forEach(function(Dt){ct.get(Dt).currentProgram.isReady()&&it.delete(Dt)}),it.size===0){tt(T);return}setTimeout(wt,10)}k.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let te=null;function Me(T){te&&te(T)}function Ee(){Te.stop()}function ne(){Te.start()}const Te=new jd;Te.setAnimationLoop(Me),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(T){te=T,Rt.setAnimationLoop(T),T===null?Te.stop():Te.start()},Rt.addEventListener("sessionstart",Ee),Rt.addEventListener("sessionend",ne),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,Y,P),m=dt.get(T,S.length),m.init(),S.push(m),bt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),$.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,ht=At.init(this.clippingPlanes,mt),_=ut.get(T,p.length),_.init(),p.push(_),Dn(T,Y,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(U,W),this.info.render.frame++,ht===!0&&At.beginShadows();const nt=m.state.shadowsArray;if(lt.render(nt,T,Y),ht===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),kt.render(_,T),m.setupLights(v._useLegacyLights),Y.isArrayCamera){const it=Y.cameras;for(let tt=0,wt=it.length;tt<wt;tt++){const Dt=it[tt];Dc(_,T,Dt,Dt.viewport)}}else Dc(_,T,Y);P!==null&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,Y),L.resetDefaultState(),J=-1,E=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Dn(T,Y,nt,it){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)nt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){it&&Ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);const Dt=Z.update(T),Bt=T.material;Bt.visible&&_.push(T,Dt,Bt,nt,Ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const Dt=Z.update(T),Bt=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ct.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Ct.copy(Dt.boundingSphere.center)),Ct.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(Bt)){const Gt=Dt.groups;for(let Kt=0,jt=Gt.length;Kt<jt;Kt++){const qt=Gt[Kt],be=Bt[qt.materialIndex];be&&be.visible&&_.push(T,Dt,be,nt,Ct.z,qt)}}else Bt.visible&&_.push(T,Dt,Bt,nt,Ct.z,null)}}const wt=T.children;for(let Dt=0,Bt=wt.length;Dt<Bt;Dt++)Dn(wt[Dt],Y,nt,it)}function Dc(T,Y,nt,it){const tt=T.opaque,wt=T.transmissive,Dt=T.transparent;m.setupLightsView(nt),ht===!0&&At.setGlobalState(v.clippingPlanes,nt),wt.length>0&&dp(tt,wt,Y,nt),it&&q.viewport(w.copy(it)),tt.length>0&&$r(tt,Y,nt),wt.length>0&&$r(wt,Y,nt),Dt.length>0&&$r(Dt,Y,nt),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function dp(T,Y,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const wt=K.isWebGL2;_t===null&&(_t=new ns(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")?Ir:Pi,minFilter:Dr,samples:wt?4:0})),v.getDrawingBufferSize(Tt),wt?_t.setSize(Tt.x,Tt.y):_t.setSize(oa(Tt.x),oa(Tt.y));const Dt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(rt),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear();const Bt=v.toneMapping;v.toneMapping=Ci,$r(T,nt,it),M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t);let Gt=!1;for(let Kt=0,jt=Y.length;Kt<jt;Kt++){const qt=Y[Kt],be=qt.object,en=qt.geometry,Ie=qt.material,$n=qt.group;if(Ie.side===bn&&be.layers.test(it.layers)){const _e=Ie.side;Ie.side=tn,Ie.needsUpdate=!0,Ic(be,nt,it,en,Ie,$n),Ie.side=_e,Ie.needsUpdate=!0,Gt=!0}}Gt===!0&&(M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t)),v.setRenderTarget(Dt),v.setClearColor(rt,A),v.toneMapping=Bt}function $r(T,Y,nt){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let tt=0,wt=T.length;tt<wt;tt++){const Dt=T[tt],Bt=Dt.object,Gt=Dt.geometry,Kt=it===null?Dt.material:it,jt=Dt.group;Bt.layers.test(nt.layers)&&Ic(Bt,Y,nt,Gt,Kt,jt)}}function Ic(T,Y,nt,it,tt,wt){T.onBeforeRender(v,Y,nt,it,tt,wt),T.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),tt.onBeforeRender(v,Y,nt,it,T,wt),tt.transparent===!0&&tt.side===bn&&tt.forceSinglePass===!1?(tt.side=tn,tt.needsUpdate=!0,v.renderBufferDirect(nt,Y,it,tt,T,wt),tt.side=jn,tt.needsUpdate=!0,v.renderBufferDirect(nt,Y,it,tt,T,wt),tt.side=bn):v.renderBufferDirect(nt,Y,it,tt,T,wt),T.onAfterRender(v,Y,nt,it,tt,wt)}function Kr(T,Y,nt){Y.isScene!==!0&&(Y=Et);const it=ct.get(T),tt=m.state.lights,wt=m.state.shadowsArray,Dt=tt.state.version,Bt=z.getParameters(T,tt.state,wt,Y,nt),Gt=z.getProgramCacheKey(Bt);let Kt=it.programs;it.environment=T.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(T.isMeshStandardMaterial?D:x).get(T.envMap||it.environment),Kt===void 0&&(T.addEventListener("dispose",St),Kt=new Map,it.programs=Kt);let jt=Kt.get(Gt);if(jt!==void 0){if(it.currentProgram===jt&&it.lightsStateVersion===Dt)return Nc(T,Bt),jt}else Bt.uniforms=z.getUniforms(T),T.onBuild(nt,Bt,v),T.onBeforeCompile(Bt,v),jt=z.acquireProgram(Bt,Gt),Kt.set(Gt,jt),it.uniforms=Bt.uniforms;const qt=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=At.uniform),Nc(T,Bt),it.needsLights=gp(T),it.lightsStateVersion=Dt,it.needsLights&&(qt.ambientLightColor.value=tt.state.ambient,qt.lightProbe.value=tt.state.probe,qt.directionalLights.value=tt.state.directional,qt.directionalLightShadows.value=tt.state.directionalShadow,qt.spotLights.value=tt.state.spot,qt.spotLightShadows.value=tt.state.spotShadow,qt.rectAreaLights.value=tt.state.rectArea,qt.ltc_1.value=tt.state.rectAreaLTC1,qt.ltc_2.value=tt.state.rectAreaLTC2,qt.pointLights.value=tt.state.point,qt.pointLightShadows.value=tt.state.pointShadow,qt.hemisphereLights.value=tt.state.hemi,qt.directionalShadowMap.value=tt.state.directionalShadowMap,qt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,qt.spotShadowMap.value=tt.state.spotShadowMap,qt.spotLightMatrix.value=tt.state.spotLightMatrix,qt.spotLightMap.value=tt.state.spotLightMap,qt.pointShadowMap.value=tt.state.pointShadowMap,qt.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.currentProgram=jt,it.uniformsList=null,jt}function Uc(T){if(T.uniformsList===null){const Y=T.currentProgram.getUniforms();T.uniformsList=ko.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function Nc(T,Y){const nt=ct.get(T);nt.outputColorSpace=Y.outputColorSpace,nt.batching=Y.batching,nt.instancing=Y.instancing,nt.instancingColor=Y.instancingColor,nt.skinning=Y.skinning,nt.morphTargets=Y.morphTargets,nt.morphNormals=Y.morphNormals,nt.morphColors=Y.morphColors,nt.morphTargetsCount=Y.morphTargetsCount,nt.numClippingPlanes=Y.numClippingPlanes,nt.numIntersection=Y.numClipIntersection,nt.vertexAlphas=Y.vertexAlphas,nt.vertexTangents=Y.vertexTangents,nt.toneMapping=Y.toneMapping}function pp(T,Y,nt,it,tt){Y.isScene!==!0&&(Y=Et),M.resetTextureUnits();const wt=Y.fog,Dt=it.isMeshStandardMaterial?Y.environment:null,Bt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pi,Gt=(it.isMeshStandardMaterial?D:x).get(it.envMap||Dt),Kt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,jt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),qt=!!nt.morphAttributes.position,be=!!nt.morphAttributes.normal,en=!!nt.morphAttributes.color;let Ie=Ci;it.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ie=v.toneMapping);const $n=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,_e=$n!==void 0?$n.length:0,Zt=ct.get(it),wa=m.state.lights;if(ht===!0&&(mt===!0||T!==E)){const ln=T===E&&it.id===J;At.setState(it,T,ln)}let Se=!1;it.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==wa.state.version||Zt.outputColorSpace!==Bt||tt.isBatchedMesh&&Zt.batching===!1||!tt.isBatchedMesh&&Zt.batching===!0||tt.isInstancedMesh&&Zt.instancing===!1||!tt.isInstancedMesh&&Zt.instancing===!0||tt.isSkinnedMesh&&Zt.skinning===!1||!tt.isSkinnedMesh&&Zt.skinning===!0||tt.isInstancedMesh&&Zt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Zt.instancingColor===!1&&tt.instanceColor!==null||Zt.envMap!==Gt||it.fog===!0&&Zt.fog!==wt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==Kt||Zt.vertexTangents!==jt||Zt.morphTargets!==qt||Zt.morphNormals!==be||Zt.morphColors!==en||Zt.toneMapping!==Ie||K.isWebGL2===!0&&Zt.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,Zt.__version=it.version);let Ui=Zt.currentProgram;Se===!0&&(Ui=Kr(it,Y,tt));let Oc=!1,Ks=!1,Aa=!1;const ze=Ui.getUniforms(),Ni=Zt.uniforms;if(q.useProgram(Ui.program)&&(Oc=!0,Ks=!0,Aa=!0),it.id!==J&&(J=it.id,Ks=!0),Oc||E!==T){ze.setValue(y,"projectionMatrix",T.projectionMatrix),ze.setValue(y,"viewMatrix",T.matrixWorldInverse);const ln=ze.map.cameraPosition;ln!==void 0&&ln.setValue(y,Ct.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&ze.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ze.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Ks=!0,Aa=!0)}if(tt.isSkinnedMesh){ze.setOptional(y,tt,"bindMatrix"),ze.setOptional(y,tt,"bindMatrixInverse");const ln=tt.skeleton;ln&&(K.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),ze.setValue(y,"boneTexture",ln.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(ze.setOptional(y,tt,"batchingTexture"),ze.setValue(y,"batchingTexture",tt._matricesTexture,M));const Ra=nt.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0&&K.isWebGL2===!0)&&It.update(tt,nt,Ui),(Ks||Zt.receiveShadow!==tt.receiveShadow)&&(Zt.receiveShadow=tt.receiveShadow,ze.setValue(y,"receiveShadow",tt.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Ni.envMap.value=Gt,Ni.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),Ks&&(ze.setValue(y,"toneMappingExposure",v.toneMappingExposure),Zt.needsLights&&mp(Ni,Aa),wt&&it.fog===!0&&H.refreshFogUniforms(Ni,wt),H.refreshMaterialUniforms(Ni,it,O,G,_t),ko.upload(y,Uc(Zt),Ni,M)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ko.upload(y,Uc(Zt),Ni,M),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ze.setValue(y,"center",tt.center),ze.setValue(y,"modelViewMatrix",tt.modelViewMatrix),ze.setValue(y,"normalMatrix",tt.normalMatrix),ze.setValue(y,"modelMatrix",tt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const ln=it.uniformsGroups;for(let Ca=0,_p=ln.length;Ca<_p;Ca++)if(K.isWebGL2){const Fc=ln[Ca];gt.update(Fc,Ui),gt.bind(Fc,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function mp(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function gp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,Y,nt){ct.get(T.texture).__webglTexture=Y,ct.get(T.depthTexture).__webglTexture=nt;const it=ct.get(T);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,Y){const nt=ct.get(T);nt.__webglFramebuffer=Y,nt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(T,Y=0,nt=0){P=T,C=Y,R=nt;let it=!0,tt=null,wt=!1,Dt=!1;if(T){const Gt=ct.get(T);Gt.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(y.FRAMEBUFFER,null),it=!1):Gt.__webglFramebuffer===void 0?M.setupRenderTarget(T):Gt.__hasExternalTextures&&M.rebindTextures(T,ct.get(T.texture).__webglTexture,ct.get(T.depthTexture).__webglTexture);const Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Dt=!0);const jt=ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[Y])?tt=jt[Y][nt]:tt=jt[Y],wt=!0):K.isWebGL2&&T.samples>0&&M.useMultisampledRTT(T)===!1?tt=ct.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?tt=jt[nt]:tt=jt,w.copy(T.viewport),X.copy(T.scissor),V=T.scissorTest}else w.copy(et).multiplyScalar(O).floor(),X.copy(ot).multiplyScalar(O).floor(),V=ft;if(q.bindFramebuffer(y.FRAMEBUFFER,tt)&&K.drawBuffers&&it&&q.drawBuffers(T,tt),q.viewport(w),q.scissor(X),q.setScissorTest(V),wt){const Gt=ct.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Gt.__webglTexture,nt)}else if(Dt){const Gt=ct.get(T.texture),Kt=Y||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Gt.__webglTexture,nt||0,Kt)}J=-1},this.readRenderTargetPixels=function(T,Y,nt,it,tt,wt,Dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){q.bindFramebuffer(y.FRAMEBUFFER,Bt);try{const Gt=T.texture,Kt=Gt.format,jt=Gt.type;if(Kt!==wn&&yt.convert(Kt)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=jt===Ir&&(k.has("EXT_color_buffer_half_float")||K.isWebGL2&&k.has("EXT_color_buffer_float"));if(jt!==Pi&&yt.convert(jt)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(jt===Ai&&(K.isWebGL2||k.has("OES_texture_float")||k.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-it&&nt>=0&&nt<=T.height-tt&&y.readPixels(Y,nt,it,tt,yt.convert(Kt),yt.convert(jt),wt)}finally{const Gt=P!==null?ct.get(P).__webglFramebuffer:null;q.bindFramebuffer(y.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(T,Y,nt=0){const it=Math.pow(2,-nt),tt=Math.floor(Y.image.width*it),wt=Math.floor(Y.image.height*it);M.setTexture2D(Y,0),y.copyTexSubImage2D(y.TEXTURE_2D,nt,0,0,T.x,T.y,tt,wt),q.unbindTexture()},this.copyTextureToTexture=function(T,Y,nt,it=0){const tt=Y.image.width,wt=Y.image.height,Dt=yt.convert(nt.format),Bt=yt.convert(nt.type);M.setTexture2D(nt,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,nt.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,nt.unpackAlignment),Y.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,it,T.x,T.y,tt,wt,Dt,Bt,Y.image.data):Y.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,it,T.x,T.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Dt,Y.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,it,T.x,T.y,Dt,Bt,Y.image),it===0&&nt.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(T,Y,nt,it,tt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=T.max.x-T.min.x+1,Dt=T.max.y-T.min.y+1,Bt=T.max.z-T.min.z+1,Gt=yt.convert(it.format),Kt=yt.convert(it.type);let jt;if(it.isData3DTexture)M.setTexture3D(it,0),jt=y.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)M.setTexture2DArray(it,0),jt=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,it.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,it.unpackAlignment);const qt=y.getParameter(y.UNPACK_ROW_LENGTH),be=y.getParameter(y.UNPACK_IMAGE_HEIGHT),en=y.getParameter(y.UNPACK_SKIP_PIXELS),Ie=y.getParameter(y.UNPACK_SKIP_ROWS),$n=y.getParameter(y.UNPACK_SKIP_IMAGES),_e=nt.isCompressedTexture?nt.mipmaps[tt]:nt.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,_e.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,_e.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,T.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,T.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,T.min.z),nt.isDataTexture||nt.isData3DTexture?y.texSubImage3D(jt,tt,Y.x,Y.y,Y.z,wt,Dt,Bt,Gt,Kt,_e.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(jt,tt,Y.x,Y.y,Y.z,wt,Dt,Bt,Gt,_e.data)):y.texSubImage3D(jt,tt,Y.x,Y.y,Y.z,wt,Dt,Bt,Gt,Kt,_e),y.pixelStorei(y.UNPACK_ROW_LENGTH,qt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,be),y.pixelStorei(y.UNPACK_SKIP_PIXELS,en),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ie),y.pixelStorei(y.UNPACK_SKIP_IMAGES,$n),tt===0&&it.generateMipmaps&&y.generateMipmap(jt),q.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){C=0,R=0,P=null,q.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xc?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?es:Ud}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===es?Fe:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class tb extends tp{}tb.prototype.isWebGL1Renderer=!0;class eb extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class nb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new I;class aa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new aa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ep extends qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const rr=new I,ws=new I,As=new I,Rs=new vt,or=new vt,np=new de,bo=new I,ar=new I,To=new I,Fh=new vt,xl=new vt,Bh=new vt;class ib extends Ce{constructor(t=new ep){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nb(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new aa(i,3,0,!1)),Ts.setAttribute("uv",new aa(i,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),np.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;wo(bo.set(-.5,-.5,0),As,o,ws,s,r),wo(ar.set(.5,-.5,0),As,o,ws,s,r),wo(To.set(.5,.5,0),As,o,ws,s,r),Fh.set(0,0),xl.set(1,0),Bh.set(1,1);let a=t.ray.intersectTriangle(bo,ar,To,!1,rr);if(a===null&&(wo(ar.set(-.5,.5,0),As,o,ws,s,r),xl.set(0,1),a=t.ray.intersectTriangle(bo,To,ar,!1,rr),a===null))return;const l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:pn.getInterpolation(rr,bo,ar,To,Fh,xl,Bh,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wo(n,t,e,i,s,r){Rs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(or.x=r*Rs.x-s*Rs.y,or.y=s*Rs.x+r*Rs.y):or.copy(Rs),n.copy(t),n.x+=or.x,n.y+=or.y,n.applyMatrix4(np)}class Ps extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zh=new I,Hh=new I,kh=new de,yl=new qr,Ao=new jr;class fr extends Ce{constructor(t=new pe,e=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)zh.fromBufferAttribute(e,s-1),Hh.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=zh.distanceTo(Hh);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;kh.copy(s).invert(),yl.copy(t.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=p,b=S-1;v<b;v+=d){const C=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,R),yl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const J=t.ray.origin.distanceTo(f);J<t.near||J>t.far||e.push({distance:J,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let v=p,b=S-1;v<b;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),yl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Gh=new I,Vh=new I;class sb extends fr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Gh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gh.distanceTo(Vh);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yl extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wh=new de,$l=new qr,Ro=new jr,Co=new I;class Ml extends Ce{constructor(t=new pe,e=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;Wh.copy(s).invert(),$l.copy(t.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Co.fromBufferAttribute(h,m),Xh(Co,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Co.fromBufferAttribute(h,g),Xh(Co,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(n,t,e,i,s,r,o){const a=$l.distanceSqToPoint(n);if(a<e){const l=new I;$l.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class jh extends Je{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,s=[],r=[],o=[],a=new I,l=new de;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ae(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tc extends Yn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new vt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rb extends Tc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Po=new I,Sl=new wc,El=new wc,bl=new wc;class ob extends Yn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),c=Po);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Po),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Sl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),El.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),bl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),El.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),bl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Sl.calc(l),El.calc(l),bl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ab(n,t){const e=1-n;return e*e*t}function lb(n,t){return 2*(1-n)*n*t}function cb(n,t){return n*n*t}function Sr(n,t,e,i){return ab(n,t)+lb(n,e)+cb(n,i)}function ub(n,t){const e=1-n;return e*e*e*t}function hb(n,t){const e=1-n;return 3*e*e*n*t}function fb(n,t){return 3*(1-n)*n*n*t}function db(n,t){return n*n*n*t}function Er(n,t,e,i,s){return ub(n,t)+hb(n,e)+fb(n,i)+db(n,s)}class ip extends Yn{constructor(t=new vt,e=new vt,i=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new vt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pb extends Yn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y),Er(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sp extends Yn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mb extends Yn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rp extends Yn{constructor(t=new vt,e=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new vt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(t,s.x,r.x,o.x),Sr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class op extends Yn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Sr(t,s.x,r.x,o.x),Sr(t,s.y,r.y,o.y),Sr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ap extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(qh(a,l.x,c.x,u.x,h.x),qh(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var Yh=Object.freeze({__proto__:null,ArcCurve:rb,CatmullRomCurve3:ob,CubicBezierCurve:ip,CubicBezierCurve3:pb,EllipseCurve:Tc,LineCurve:sp,LineCurve3:mb,QuadraticBezierCurve:rp,QuadraticBezierCurve3:op,SplineCurve:ap});class gb extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}}class $h extends gb{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new sp(this.currentPoint.clone(),new vt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new rp(this.currentPoint.clone(),new vt(t,e),new vt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new ip(this.currentPoint.clone(),new vt(t,e),new vt(i,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new ap(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Tc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ac extends pe{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new I,f=new vt,d=new I,g=new I,_=new I;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){const v=i+S*u*s,b=Math.sin(v),C=Math.cos(v);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*b,h.y=t[R].y,h.z=t[R].x*C,o.push(h.x,h.y,h.z),f.x=S/e,f.y=R/(t.length-1),a.push(f.x,f.y);const P=l[3*R+0]*b,J=l[3*R+1],E=l[3*R+0]*C;c.push(P,J,E)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){const b=v+S*t.length,C=b,R=b+t.length,P=b+t.length+1,J=b+1;r.push(C,R,J),r.push(P,J,R)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.points,t.segments,t.phiStart,t.phiLength)}}class Hn extends pe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function S(){const b=new I,C=new I;let R=0;const P=(e-t)/i;for(let J=0;J<=r;J++){const E=[],w=J/r,X=w*(e-t)+t;for(let V=0;V<=s;V++){const rt=V/s,A=rt*l+a,B=Math.sin(A),G=Math.cos(A);C.x=X*B,C.y=-w*i+m,C.z=X*G,h.push(C.x,C.y,C.z),b.set(B,P,G).normalize(),f.push(b.x,b.y,b.z),d.push(rt,1-w),E.push(g++)}_.push(E)}for(let J=0;J<s;J++)for(let E=0;E<r;E++){const w=_[E][J],X=_[E+1][J],V=_[E+1][J+1],rt=_[E][J+1];u.push(w,X,rt),u.push(X,V,rt),R+=6}c.addGroup(p,R,0),p+=R}function v(b){const C=g,R=new vt,P=new I;let J=0;const E=b===!0?t:e,w=b===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;const X=g;for(let V=0;V<=s;V++){const A=V/s*l+a,B=Math.cos(A),G=Math.sin(A);P.x=E*G,P.y=m*w,P.z=E*B,h.push(P.x,P.y,P.z),f.push(0,w,0),R.x=B*.5+.5,R.y=G*.5*w+.5,d.push(R.x,R.y),g++}for(let V=0;V<s;V++){const rt=C+V,A=X+V;b===!0?u.push(A,A+1,rt):u.push(A+1,A,rt),J+=3}c.addGroup(p,J,b===!0?1:2),p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rc extends Hn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Rc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _b extends $h{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new $h().fromJSON(s))}return this}}const vb={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=lp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=Eb(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Or(r,o,e,a,l,d,0),o}};function lp(n,t,e,i,s){let r,o;if(s===Ub(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Kh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Kh(r,n[r],n[r+1],o);return o&&Ta(o,o.next)&&(Br(o),o=o.next),o}function is(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ta(e,e.next)||xe(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Or(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Rb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?yb(n,i,s,r):xb(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Br(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Mb(is(n),t,e),Or(n,t,e,i,s,r,2)):o===2&&Sb(n,t,e,i,s,r):Or(is(n),t,e,i,s,r,1);break}}}function xb(n){const t=n.prev,e=n,i=n.next;if(xe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Us(s,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yb(n,t,e,i){const s=n.prev,r=n,o=n.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Kl(d,g,t,e,i),S=Kl(_,m,t,e,i);let v=n.prevZ,b=n.nextZ;for(;v&&v.z>=p&&b&&b.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Us(a,u,l,h,c,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Us(a,u,l,h,c,f,b.x,b.y)&&xe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Us(a,u,l,h,c,f,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=S;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Us(a,u,l,h,c,f,b.x,b.y)&&xe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Mb(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Ta(s,r)&&cp(s,i,i.next,r)&&Fr(s,r)&&Fr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Br(i),Br(i.next),i=n=r),i=i.next}while(i!==n);return is(i)}function Sb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lb(o,a)){let l=up(o,a);o=is(o,o.next),l=is(l,l.next),Or(o,t,e,i,s,r,0),Or(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Eb(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=lp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Pb(c));for(s.sort(bb),r=0;r<s.length;r++)e=Tb(s[r],e);return e}function bb(n,t){return n.x-t.x}function Tb(n,t){const e=wb(n,t);if(!e)return t;const i=up(e,n);return is(i,i.next),is(e,e.next)}function wb(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Us(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Fr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Ab(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Ab(n,t){return xe(n.prev,n,t.prev)<0&&xe(t.next,n,n.next)<0}function Rb(n,t,e,i){let s=n;do s.z===0&&(s.z=Kl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cb(s)}function Cb(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Kl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Pb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Us(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Lb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Db(n,t)&&(Fr(n,t)&&Fr(t,n)&&Ib(n,t)&&(xe(n.prev,n,t.prev)||xe(n,t.prev,t))||Ta(n,t)&&xe(n.prev,n,n.next)>0&&xe(t.prev,t,t.next)>0)}function xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ta(n,t){return n.x===t.x&&n.y===t.y}function cp(n,t,e,i){const s=Do(xe(n,t,e)),r=Do(xe(n,t,i)),o=Do(xe(e,i,n)),a=Do(xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Lo(n,e,t)||r===0&&Lo(n,i,t)||o===0&&Lo(e,n,i)||a===0&&Lo(e,t,i))}function Lo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Do(n){return n>0?1:n<0?-1:0}function Db(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&cp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Fr(n,t){return xe(n.prev,n,n.next)<0?xe(n,t,n.next)>=0&&xe(n,n.prev,t)>=0:xe(n,t,n.prev)<0||xe(n,n.next,t)<0}function Ib(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function up(n,t){const e=new Zl(n.i,n.x,n.y),i=new Zl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Kh(n,t,e,i){const s=new Zl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ub(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class br{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return br.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Zh(t),Jh(i,t);let o=t.length;e.forEach(Zh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Jh(i,e[l]);const a=vb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Zh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Jh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Cc extends pe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new I,g=new vt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const S=p+m,v=S,b=S+i+1,C=S+i+2,R=S+1;a.push(v,b,R),a.push(b,C,R)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class hp extends pe{constructor(t=new _b([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;br.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];br.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=br.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){const S=_[m],v=S[0]+h,b=S[1]+h,C=S[2]+h;i.push(v,b,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Nb(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new hp(i,t.curveSegments)}}function Nb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ci extends pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],v=p/i;let b=0;p===0&&o===0?b=.5/e:p===i&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const R=C/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+b,1-v),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const v=u[p][S+1],b=u[p][S],C=u[p+1][S],R=u[p+1][S+1];(p!==0||o>0)&&d.push(v,b,R),(p!==i-1||l<Math.PI)&&d.push(b,C,R)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class la extends pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new I,h=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Go extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ob extends Go{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class RT extends qn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Io extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Qh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Fb{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Bb=new Fb;class Pc{constructor(t){this.manager=t!==void 0?t:Bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";class zb extends Pc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Qh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Nr("img");function l(){u(),Qh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class tf extends Pc{constructor(t){super(t)}load(t,e,i,s){const r=new Je,o=new zb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Lc extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Tl=new de,ef=new I,nf=new I;class fp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nf),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sf=new de,lr=new I,wl=new I;class Hb extends fp{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(lr),wl.copy(i.position),wl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wl),i.updateMatrixWorld(),s.makeTranslation(-lr.x,-lr.y,-lr.z),sf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf)}}class rf extends Lc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kb extends fp{constructor(){super(new qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gb extends Lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vb extends Lc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=of();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function of(){return(typeof performance>"u"?Date:performance).now()}class Xb{constructor(t,e,i=0,s=1/0){this.ray=new qr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Jl(t,this,i,e),i.sort(af),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,i,e);return i.sort(af),i}}function af(n,t){return n.distance-t.distance}function Jl(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Jl(s[r],t,e,!0)}}class lf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const cf={type:"change"},Al={type:"start"},uf={type:"end"},Uo=new qr,hf=new Ti,jb=Math.cos(70*Yv.DEG2RAD);class qb extends rs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",dt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",dt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cf),i.update(),r=s.NONE},this.update=function(){const L=new I,gt=new mi().setFromUnitVectors(t.up,new I(0,1,0)),Pt=gt.clone().invert(),Rt=new I,pt=new mi,F=new I,xt=2*Math.PI;return function(Ft=null){const Ut=i.object.position;L.copy(Ut).sub(i.target),L.applyQuaternion(gt),a.setFromVector3(L),i.autoRotate&&r===s.NONE&&V(w(Ft)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Qt=i.minAzimuthAngle,te=i.maxAzimuthAngle;isFinite(Qt)&&isFinite(te)&&(Qt<-Math.PI?Qt+=xt:Qt>Math.PI&&(Qt-=xt),te<-Math.PI?te+=xt:te>Math.PI&&(te-=xt),Qt<=te?a.theta=Math.max(Qt,Math.min(te,a.theta)):a.theta=a.theta>(Qt+te)/2?Math.max(Qt,a.theta):Math.min(te,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=et(a.radius):a.radius=et(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(Pt),Ut.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Me=!1;if(i.zoomToCursor&&R){let Ee=null;if(i.object.isPerspectiveCamera){const ne=L.length();Ee=et(ne*c);const Te=ne-Ee;i.object.position.addScaledVector(b,Te),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ne=new I(C.x,C.y,0);ne.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Me=!0;const Te=new I(C.x,C.y,0);Te.unproject(i.object),i.object.position.sub(Te).add(ne),i.object.updateMatrixWorld(),Ee=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ee!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ee).add(i.object.position):(Uo.origin.copy(i.object.position),Uo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Uo.direction))<jb?t.lookAt(i.target):(hf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Uo.intersectPlane(hf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Me=!0);return c=1,R=!1,Me||Rt.distanceToSquared(i.object.position)>o||8*(1-pt.dot(i.object.quaternion))>o||F.distanceToSquared(i.target)>0?(i.dispatchEvent(cf),Rt.copy(i.object.position),pt.copy(i.object.quaternion),F.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",kt),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",D),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",D),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",dt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new lf,l=new lf;let c=1;const u=new I,h=new vt,f=new vt,d=new vt,g=new vt,_=new vt,m=new vt,p=new vt,S=new vt,v=new vt,b=new I,C=new vt;let R=!1;const P=[],J={};let E=!1;function w(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function X(L){const gt=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*gt)}function V(L){l.theta-=L}function rt(L){l.phi-=L}const A=function(){const L=new I;return function(Pt,Rt){L.setFromMatrixColumn(Rt,0),L.multiplyScalar(-Pt),u.add(L)}}(),B=function(){const L=new I;return function(Pt,Rt){i.screenSpacePanning===!0?L.setFromMatrixColumn(Rt,1):(L.setFromMatrixColumn(Rt,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Pt),u.add(L)}}(),G=function(){const L=new I;return function(Pt,Rt){const pt=i.domElement;if(i.object.isPerspectiveCamera){const F=i.object.position;L.copy(F).sub(i.target);let xt=L.length();xt*=Math.tan(i.object.fov/2*Math.PI/180),A(2*Pt*xt/pt.clientHeight,i.object.matrix),B(2*Rt*xt/pt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(A(Pt*(i.object.right-i.object.left)/i.object.zoom/pt.clientWidth,i.object.matrix),B(Rt*(i.object.top-i.object.bottom)/i.object.zoom/pt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(L,gt){if(!i.zoomToCursor)return;R=!0;const Pt=i.domElement.getBoundingClientRect(),Rt=L-Pt.left,pt=gt-Pt.top,F=Pt.width,xt=Pt.height;C.x=Rt/F*2-1,C.y=-(pt/xt)*2+1,b.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function et(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ot(L){h.set(L.clientX,L.clientY)}function ft(L){W(L.clientX,L.clientX),p.set(L.clientX,L.clientY)}function $(L){g.set(L.clientX,L.clientY)}function ht(L){f.set(L.clientX,L.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const gt=i.domElement;V(2*Math.PI*d.x/gt.clientHeight),rt(2*Math.PI*d.y/gt.clientHeight),h.copy(f),i.update()}function mt(L){S.set(L.clientX,L.clientY),v.subVectors(S,p),v.y>0?O(X(v.y)):v.y<0&&U(X(v.y)),p.copy(S),i.update()}function _t(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(_),i.update()}function bt(L){W(L.clientX,L.clientY),L.deltaY<0?U(X(L.deltaY)):L.deltaY>0&&O(X(L.deltaY)),i.update()}function Tt(L){let gt=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?rt(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),gt=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?rt(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),gt=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),gt=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),gt=!0;break}gt&&(L.preventDefault(),i.update())}function Ct(L){if(P.length===1)h.set(L.pageX,L.pageY);else{const gt=yt(L),Pt=.5*(L.pageX+gt.x),Rt=.5*(L.pageY+gt.y);h.set(Pt,Rt)}}function Et(L){if(P.length===1)g.set(L.pageX,L.pageY);else{const gt=yt(L),Pt=.5*(L.pageX+gt.x),Rt=.5*(L.pageY+gt.y);g.set(Pt,Rt)}}function Ht(L){const gt=yt(L),Pt=L.pageX-gt.x,Rt=L.pageY-gt.y,pt=Math.sqrt(Pt*Pt+Rt*Rt);p.set(0,pt)}function y(L){i.enableZoom&&Ht(L),i.enablePan&&Et(L)}function N(L){i.enableZoom&&Ht(L),i.enableRotate&&Ct(L)}function k(L){if(P.length==1)f.set(L.pageX,L.pageY);else{const Pt=yt(L),Rt=.5*(L.pageX+Pt.x),pt=.5*(L.pageY+Pt.y);f.set(Rt,pt)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const gt=i.domElement;V(2*Math.PI*d.x/gt.clientHeight),rt(2*Math.PI*d.y/gt.clientHeight),h.copy(f)}function K(L){if(P.length===1)_.set(L.pageX,L.pageY);else{const gt=yt(L),Pt=.5*(L.pageX+gt.x),Rt=.5*(L.pageY+gt.y);_.set(Pt,Rt)}m.subVectors(_,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(_)}function q(L){const gt=yt(L),Pt=L.pageX-gt.x,Rt=L.pageY-gt.y,pt=Math.sqrt(Pt*Pt+Rt*Rt);S.set(0,pt),v.set(0,Math.pow(S.y/p.y,i.zoomSpeed)),O(v.y),p.copy(S);const F=(L.pageX+gt.x)*.5,xt=(L.pageY+gt.y)*.5;W(F,xt)}function st(L){i.enableZoom&&q(L),i.enablePan&&K(L)}function ct(L){i.enableZoom&&q(L),i.enableRotate&&k(L)}function M(L){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",D)),It(L),L.pointerType==="touch"?At(L):Q(L))}function x(L){i.enabled!==!1&&(L.pointerType==="touch"?lt(L):j(L))}function D(L){Nt(L),P.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",D)),i.dispatchEvent(uf),r=s.NONE}function Q(L){let gt;switch(L.button){case 0:gt=i.mouseButtons.LEFT;break;case 1:gt=i.mouseButtons.MIDDLE;break;case 2:gt=i.mouseButtons.RIGHT;break;default:gt=-1}switch(gt){case as.DOLLY:if(i.enableZoom===!1)return;ft(L),r=s.DOLLY;break;case as.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;$(L),r=s.PAN}else{if(i.enableRotate===!1)return;ot(L),r=s.ROTATE}break;case as.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ot(L),r=s.ROTATE}else{if(i.enablePan===!1)return;$(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Al)}function j(L){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ht(L);break;case s.DOLLY:if(i.enableZoom===!1)return;mt(L);break;case s.PAN:if(i.enablePan===!1)return;_t(L);break}}function Z(L){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(L.preventDefault(),i.dispatchEvent(Al),bt(z(L)),i.dispatchEvent(uf))}function z(L){const gt=L.deltaMode,Pt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(gt){case 1:Pt.deltaY*=16;break;case 2:Pt.deltaY*=100;break}return L.ctrlKey&&!E&&(Pt.deltaY*=10),Pt}function H(L){L.key==="Control"&&(E=!0,document.addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(L){L.key==="Control"&&(E=!1,document.removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function dt(L){i.enabled===!1||i.enablePan===!1||Tt(L)}function At(L){switch(Lt(L),P.length){case 1:switch(i.touches.ONE){case ls.ROTATE:if(i.enableRotate===!1)return;Ct(L),r=s.TOUCH_ROTATE;break;case ls.PAN:if(i.enablePan===!1)return;Et(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;y(L),r=s.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Al)}function lt(L){switch(Lt(L),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;k(L),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;K(L),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;st(L),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ct(L),i.update();break;default:r=s.NONE}}function kt(L){i.enabled!==!1&&L.preventDefault()}function It(L){P.push(L.pointerId)}function Nt(L){delete J[L.pointerId];for(let gt=0;gt<P.length;gt++)if(P[gt]==L.pointerId){P.splice(gt,1);return}}function Lt(L){let gt=J[L.pointerId];gt===void 0&&(gt=new vt,J[L.pointerId]=gt),gt.set(L.pageX,L.pageY)}function yt(L){const gt=L.pointerId===P[0]?P[1]:P[0];return J[gt]}i.domElement.addEventListener("contextmenu",kt),i.domElement.addEventListener("pointerdown",M),i.domElement.addEventListener("pointercancel",D),i.domElement.addEventListener("wheel",Z,{passive:!1}),document.addEventListener("keydown",H,{passive:!0,capture:!0}),this.update()}}function Yb(n,t,e){const i=(e||new I(0,.3,-1)).clone().normalize().multiplyScalar(t*1.9),s=new I().crossVectors((e||new I(0,.3,-1)).normalize(),new I(0,1,0)).normalize().multiplyScalar(t*.05),r=i.clone().add(s);let o=Math.random()*Math.PI*2,a="cruise",l=0,c=0,u=null;function h(){const A=new kn,B=new Go({color:9417944,metalness:.8,roughness:.3,emissive:2771560,emissiveIntensity:1.25}),G=new Go({color:7311285,metalness:.65,roughness:.4,emissive:2375774,emissiveIntensity:1.2}),O=new Go({color:8365004,metalness:.6,roughness:.4,emissive:2642048,emissiveIntensity:1.2}),U=new ee(new mn(3.2,2.1,9.5),B);A.add(U);const W=new ee(new Rc(1.7,4.5,4),O);W.rotation.x=-Math.PI/2,W.position.z=6.8,A.add(W);const et=new ee(new Hn(1.5,1.8,3.4,12),G);et.rotation.x=Math.PI/2,et.position.z=-5.8,A.add(et);const ot=new ee(new mn(7.2,.32,3.6),G);ot.position.set(0,-.4,-.8),A.add(ot);const ft=new ee(new mn(1.4,.5,2.2),O);ft.position.set(-3.6,-.1,-.8),A.add(ft);const $=ft.clone();$.position.x=3.6,A.add($);const ht=new ee(new mn(1.3,1.7,2),G);ht.position.set(0,2,-.2),A.add(ht);const mt=new ee(new mn(.9,.7,1.2),O);mt.position.set(0,2.9,-.2),A.add(mt);const _t=new ee(new Hn(.42,.55,4.2,8),G);_t.rotation.x=Math.PI/2,_t.position.set(0,.2,7.4),A.add(_t);const bt=new ee(new mn(3.3,.06,7.5),new En({color:4180223,transparent:!0,opacity:.5,blending:Ne,depthWrite:!1}));bt.position.set(0,1.08,0),A.add(bt);for(const N of[-.7,.7]){const k=new ee(new Hn(.62,.85,1.6,10),G);k.rotation.x=Math.PI/2,k.position.set(N,0,-6.6),A.add(k);const K=new ee(new Hn(.5,.68,1.8,10),new En({color:7331071,transparent:!0,opacity:.95,blending:Ne,depthWrite:!1}));K.rotation.x=Math.PI/2,K.position.set(N,0,-7.4),A.add(K)}const Tt=new rf(7331071,14,80);Tt.position.set(0,0,-7.6),A.add(Tt);const Ct=new ee(new la(1.7,.1,8,28),new En({color:5228799,transparent:!0,opacity:.7,blending:Ne,depthWrite:!1}));Ct.rotation.x=Math.PI/2,A.add(Ct);const Et=new ee(new ci(1.5,14,14),new En({color:8380671,transparent:!0,opacity:1,blending:Ne,depthWrite:!1}));Et.position.set(0,1.8,-3.4),A.add(Et);const Ht=new rf(8380671,60,120);Ht.position.set(0,1.8,-3.4),A.add(Ht);const y=new ee(new la(2.6,.14,8,36),new En({color:5228799,transparent:!0,opacity:.9,blending:Ne,depthWrite:!1}));return y.rotation.x=Math.PI/2,A.add(y),A.userData={engLight:Tt,scale:1,beacon:Et,beaconLight:Ht},A}function f(){const A=[];for(let B=0;B<=26;B++){const G=B/26;A.push(new vt(Math.sin(Math.PI*G)*1.5*Math.pow(1-G,.5),G*3.4-.9))}return new ee(new Ac(A,48),new Ob({color:14676735,metalness:.95,roughness:.06,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.2}))}const d=4,g=[],_=[{a:0,off:new I(0,0,0)},{a:-.45,off:new I(-15,3,9)},{a:.45,off:new I(15,3,9)}],m=new kn;m.frustumCulled=!1,n.add(m),_.forEach((A,B)=>{const G=h();G.scale.setScalar(.001),G.visible=!1,G.userData.form=A,G.userData.warp={stage:"wait",t:0,start:.7+B*1},G.frustumCulled=!1,m.add(G),g.push(G)});const p=f();p.scale.setScalar(2.2),p.visible=!1,m.add(p);const S=g.map(()=>{const A=new ee(new Hn(2.2,4.4,170,14,1,!0),new En({color:5887743,transparent:!0,opacity:0,side:bn,blending:Ne,depthWrite:!1}));return A.visible=!1,m.add(A),A}),v=g.map(()=>{const A=new ee(new Cc(3,5,40),new En({color:10479871,transparent:!0,opacity:0,side:bn,blending:Ne,depthWrite:!1}));return A.visible=!1,m.add(A),A}),b=new ee(new ci(2,16,16),new En({color:12575999,transparent:!0,opacity:0,blending:Ne,depthWrite:!1}));b.visible=!1,m.add(b);function C(A){const B=t*.16,G=new I(Math.cos(A)*B,Math.sin(A*2)*B*.5,Math.sin(A)*B);return r.clone().add(G)}function R(A,B){const G=A.userData.form;A.position.copy(C(B+G.a)).add(G.off),A.lookAt(0,0,0)}function P(A,B){u&&u(A,B)}function J(A,B,G,O){A.position.copy(B),A.visible=!0,A.scale.setScalar(G),A.material.opacity=O}g.forEach(A=>{A.visible=!0,A.scale.setScalar(d),R(A,o)});function E(){const A=new I;return g.forEach(B=>{B.visible&&A.add(B.position)}),g.some(B=>B.visible)?A.divideScalar(g.filter(B=>B.visible).length):A.copy(r),A}function w(A,B){if(l+=A,a==="warpIn"){P("光速跃迁",Math.min(1,l/4.4));let O=!0;g.forEach((U,W)=>{const et=U.userData.warp,ot=S[W],ft=v[W];if(et.stage==="wait"&&(l>=et.start?(et.stage="charge",et.t=0,U.visible=!0,R(U,o)):O=!1),et.stage==="charge"){et.t+=A;const $=Math.min(1,et.t/.5);U.scale.setScalar(.001+.15*$),ot.visible=!0,ot.position.copy(U.position),ot.material.opacity=$*.85,$>=1&&(et.stage="arrive",et.t=0),O=!1}else if(et.stage==="arrive"){et.t+=A;const $=Math.min(1,et.t/.7),ht=1-Math.pow(1-$,3);U.scale.setScalar(d*ht),J(ft,U.position,.6+ht*2.2,(1-$)*.9),$>=1&&(et.stage="done",et.t=0,U.scale.setScalar(d),U.userData.engLight&&(U.userData.engLight.intensity=14)),O=!1}else et.stage==="done"&&(et.t+=A,ot.material.opacity=Math.max(0,ot.material.opacity-A*1.4),et.t>1.2&&(ot.visible=!1,et.stage="settle"),O=!1)}),O&&(a="cruise",l=0,c=0,P("",0))}else if(a==="cruise")o+=A*.02,g.forEach(G=>{G.visible&&(R(G,o),G.position.y+=Math.sin(B*1.4+G.userData.form.a)*1.2,G.userData.engLight&&(G.userData.engLight.intensity=12+Math.sin(B*5+G.userData.form.a)*4))}),l>15&&c===1?(a="raid",l=0,p.visible=!0,P("水滴突袭",0)):l>30&&(a="warpIn",l=0,c=0,P("光速跃迁",0)),l>8&&(c=Math.max(c,1));else if(a==="raid"){const G=Math.min(1,l/1.6),O=E(),U=O.clone().add(new I(0,0,-ORBIT_R*.4)),W=O.clone().add(new I(0,0,ORBIT_R*.4));p.position.lerpVectors(U,W,G),p.lookAt(O),P("水滴突袭",G),G>.3&&G<.75&&g.forEach((et,ot)=>{et.visible&&Math.random()<.12&&J(v[ot],et.position,1.6,.55)}),G>=1&&(p.visible=!1,a="cruise",l=0,c=0,P("",0))}g.forEach((G,O)=>{const U=v[O];U.visible&&(U.material.opacity=Math.max(0,U.material.opacity-A*1.5),U.scale.multiplyScalar(1+A*1.2),U.material.opacity<=0&&(U.visible=!1))}),b.visible&&(b.material.opacity=Math.max(0,b.material.opacity-A*1.6),b.material.opacity<=0&&(b.visible=!1))}function X(){a="warpIn",l=0,g.forEach((A,B)=>{A.visible=!0,A.scale.setScalar(.001),A.userData.warp={stage:"wait",t:0,start:.5+B*.95},R(A,o),S[B].material.opacity=0,S[B].visible=!1}),p.visible=!1,P("光速跃迁",0)}function V(){n.remove(m)}function rt(){return m}return{update:w,trigger:X,getShipPosition:E,getGroup:rt,set onProgress(A){u=A},dispose:V}}function Ql(){const n=new Date().getHours();return n>=6&&n<18}const $b={EARTH_R:100,el:null,renderer:null,scene:null,camera:null,controls:null,clock:null,raf:0,_enterRaf:0,_tweenRaf:0,_tween:null,disposed:!1,earth:null,earthMat:null,clouds:null,atmo:null,aperture:null,stars:null,pointGroup:null,points:[],flyLines:[],timelineGroup:null,timelineItems:[],hoveredTl:null,labelsWrap:null,tooltip:null,ray:null,pointer:null,hovered:null,hoveringChina:!1,hoveringGlobe:!1,_interactiveHover:!1,_progressRaf:0,dayNight:1,dayNightTarget:1,lightBoost:0,lightBoostTarget:0,override:"auto",onPointClick:null,onPointHover:null,onTimelineClick:null,onTimelineHover:null,onLongPress:null,onChinaClick:null,onChinaHover:null,onInteractiveHover:null,onLongPressProgress:null,onFleetProgress:null,_tmpV:null,_tmpV2:null,async init(n,t){this.el=n,this.EARTH_R=t&&t.radius||100,this.onPointClick=t&&t.onPointClick||null,this.onPointHover=t&&t.onPointHover||null,this.onTimelineClick=t&&t.onTimelineClick||null,this.onTimelineHover=t&&t.onTimelineHover||null,this.onLongPress=t&&t.onLongPress||null,this.onChinaClick=t&&t.onChinaClick||null,this.onChinaHover=t&&t.onChinaHover||null,this.onInteractiveHover=t&&t.onInteractiveHover||null,this.onLongPressProgress=t&&t.onLongPressProgress||null,this.textures=t&&t.textures||{},this._tmpV=new I,this._tmpV2=new I;const e=n.clientWidth||800,i=n.clientHeight||520;this.renderer=new tp({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(e,i),this.renderer.setClearColor(0,0),n.appendChild(this.renderer.domElement),this.scene=new eb;{const c=new Gb(16777215,1.15);c.position.set(.55,.75,.62),this.scene.add(c),this.scene.add(new Vb(16777215,.5))}this.camera=new rn(45,e/i,1,6e3),this.chinaDir=this.latLngToVec3(34.5,104.5,1).normalize(),this.camera.position.copy(this.chinaDir.clone().multiplyScalar(this.EARTH_R*7.6)),this.controls=new qb(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=this.EARTH_R*1.25,this.controls.maxDistance=this.EARTH_R*9,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.4,this.clock=new Wb,this.ray=new Xb,this.pointer=new vt,this._buildEarth(),this._buildClouds(),this._buildAtmosphere(),this._buildAperture(),this._buildSatellite(),this._buildGalaxy(),this._buildStarfield(),this._buildOverlay(),this.fleet=Yb(this.scene,this.EARTH_R,this.chinaDir),this.fleet.onProgress=(c,u)=>{this.onFleetProgress&&this.onFleetProgress(c,u)},this._fleetFollowUntil=0,this._bindEvents(),this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),this._paused=!1,this._setPaused=c=>{this._paused===c||this.disposed||(this._paused=c,!c&&!this.raf&&this.animate())},"IntersectionObserver"in window&&(this._io=new IntersectionObserver(c=>{this._setPaused(!(c[0]&&c[0].isIntersecting))},{threshold:.02}),this._io.observe(n)),this._onVis=()=>this._setPaused(document.hidden),document.addEventListener("visibilitychange",this._onVis);const s=performance.now(),r=2200,o=this.chinaDir.clone().multiplyScalar(this.EARTH_R*7.6),a=this.chinaDir.clone().multiplyScalar(this.EARTH_R*3.2),l=c=>{const u=Math.min(1,(c-s)/r),h=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;this.camera.position.lerpVectors(o,a,h),this.controls.update(),u<1&&(this._enterRaf=requestAnimationFrame(l))};return this._enterRaf=requestAnimationFrame(l),this.animate(),this},_buildEarth(){const n=new tf,t=n.load(this.textures.day||"assets/earth3d-night.jpg"),e=n.load(this.textures.night||"assets/earth3d-day.jpg");this.earthMat=new Rn({uniforms:{dayMap:{value:t},nightMap:{value:e},uDayNight:{value:1},uSunDir:{value:new I(.55,.75,.62).normalize()}},vertexShader:["varying vec2 vUv;","varying vec3 vNormal;","void main(){","  vUv = uv;","  vNormal = normalize(normalMatrix * normal);","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:["uniform sampler2D dayMap;","uniform sampler2D nightMap;","uniform float uDayNight;","uniform vec3 uSunDir;","varying vec2 vUv;","varying vec3 vNormal;","void main(){","  vec3 day = texture2D(dayMap, vUv).rgb;","  vec3 night = texture2D(nightMap, vUv).rgb;","  float diff = max(dot(vNormal, uSunDir), 0.0);","  float amb = 0.38;","  float lit = amb + (1.0 - amb) * diff;","  vec3 col = mix(night * 1.6, day * 1.25, uDayNight) * lit;","  gl_FragColor = vec4(col, 1.0);","}"].join(`
`)}),this.earth=new ee(new ci(this.EARTH_R,64,48),this.earthMat),this.scene.add(this.earth)},_buildClouds(){const t=new tf().load(this.textures.cloud||"assets/earth3d-cloud.png");this.clouds=new ee(new ci(this.EARTH_R*1.025,48,32),new Io({map:t,transparent:!0,opacity:1,depthWrite:!1})),this.scene.add(this.clouds)},_buildAtmosphere(){const n=new Rn({uniforms:{uColor:{value:new Xt(5087231)},uPower:{value:3.2}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uPower; varying vec3 vN; void main(){ float i = pow(max(0.0, 0.72 - dot(vN, vec3(0.0, 0.0, 1.0))), uPower); gl_FragColor = vec4(uColor, 1.0) * i; }",side:jn,blending:Ne,transparent:!0,depthWrite:!1});this.atmo=new ee(new ci(this.EARTH_R*1.2,48,32),n),this.scene.add(this.atmo)},_buildAperture(){const n=this.EARTH_R*1.42,t=[];for(let s=0;s<=96;s++){const r=s/96*Math.PI*2;t.push(new I(Math.cos(r)*n,Math.sin(r)*n,0))}const e=new pe().setFromPoints(t),i=new Ps({color:3524863,transparent:!0,opacity:.8,blending:Ne,depthWrite:!1});this.aperture=new fr(e,i),this.scene.add(this.aperture)},_buildSatellite(){const n=this.EARTH_R;this.sat=new kn;const t=new ee(new Hn(n*.012,n*.015,n*.05,12),new Io({color:13161180}));t.rotation.x=Math.PI/2,this.sat.add(t);const e=new mn(n*.05,n*.002,n*.022),i=new Io({color:2781142,emissive:662074,emissiveIntensity:.5}),s=new ee(e,i);s.position.x=n*.033,this.sat.add(s);const r=new ee(e,i);r.position.x=-n*.033,this.sat.add(r);const o=new ee(new Hn(.14,.14,n*.022,6),new Io({color:10135733}));o.position.y=n*.031,this.sat.add(o),this.scene.add(this.sat),this.satGlow=this.makeGlowSprite("#9fd0ff",.5),this.satGlow.scale.set(6,6,1),this.scene.add(this.satGlow),this._moonAngle=.6,this._moonSpeed=.45},_buildGalaxy(){this.satellites=[],[{r:2.5,tilt:.55,speed:.1,color:"#7de3f5",size:3.5},{r:3.1,tilt:-.4,speed:.07,color:"#a78bfa",size:2.8},{r:3.7,tilt:.85,speed:.05,color:"#ffd166",size:2.6},{r:4.3,tilt:-.65,speed:.04,color:"#67e8f9",size:2.2},{r:5,tilt:.25,speed:.03,color:"#93c5fd",size:2}].forEach(t=>{const e=this.makeGlowSprite(t.color,.75);e.scale.set(t.size,t.size,1),this.scene.add(e),this.satellites.push({sprite:e,r:t.r*this.EARTH_R,tilt:t.tilt,speed:t.speed,angle:Math.random()*Math.PI*2})}),this.galaxyRings=[],[[3.4,.42,8250357,.16],[4.2,-.72,10980346,.12]].forEach(([t,e,i,s])=>{const o=new Float32Array(360);for(let u=0;u<120;u++){const h=u/120*Math.PI*2,f=t*this.EARTH_R*(.9+.18*Math.random());o[u*3]=Math.cos(h)*f,o[u*3+1]=Math.sin(h)*f*Math.sin(e),o[u*3+2]=Math.sin(h)*f*Math.cos(e)}const a=new pe;a.setAttribute("position",new Re(o,3));const l=new Yl({color:i,size:1.8,sizeAttenuation:!0,transparent:!0,opacity:s*1.5,depthWrite:!1}),c=new Ml(a,l);this.scene.add(c),this.galaxyRings.push(c)})},_buildStarfield(){const t=new Float32Array(2700),e=new Float32Array(900),i=new Float32Array(900),s=new Float32Array(900),r=new Float32Array(900),o=new Float32Array(900*3),a=[[1,1,1],[.75,.88,1],[1,.93,.78],[.62,.82,1]],l=new I;for(let h=0;h<900;h++){const f=Math.random()*2-1,d=Math.random()*Math.PI*2,g=Math.sqrt(1-f*f);l.set(g*Math.cos(d),f,g*Math.sin(d));const _=this.EARTH_R*(55+Math.random()*45);t[h*3]=l.x*_,t[h*3+1]=l.y*_,t[h*3+2]=l.z*_,e[h]=Math.random()*Math.PI*2,i[h]=.3+Math.random()*1.5,s[h]=.08+Math.random()*.38,r[h]=28+Math.random()*60;const m=a[Math.floor(Math.random()*a.length)];o[h*3]=m[0],o[h*3+1]=m[1],o[h*3+2]=m[2]}const c=new pe;c.setAttribute("position",new Re(t,3)),c.setAttribute("aPhase",new Re(e,1)),c.setAttribute("aSpeed",new Re(i,1)),c.setAttribute("aAmp",new Re(s,1)),c.setAttribute("aSize",new Re(r,1)),c.setAttribute("aColor",new Re(o,3));const u=new Rn({uniforms:{uTime:{value:0}},vertexShader:["attribute float aPhase;","attribute float aSpeed;","attribute float aAmp;","attribute float aSize;","attribute vec3 aColor;","uniform float uTime;","varying vec3 vColor;","varying float vTw;","void main(){","  vColor = aColor;","  float t = uTime * aSpeed + aPhase;","  vTw = 0.78 + aAmp * sin(t);","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = aSize * (500.0 / -mv.z) * (0.65 + 0.55 * sin(t * 1.7 + aPhase * 3.0));","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["varying vec3 vColor;","varying float vTw;","void main(){","  vec2 uv = gl_PointCoord - 0.5;","  float d = length(uv);","  float a = smoothstep(0.5, 0.05, d);","  gl_FragColor = vec4(vColor, a * clamp(vTw, 0.0, 1.4));","}"].join(`
`),transparent:!0,depthWrite:!1,blending:Ne});this.starfield=new Ml(c,u),this.scene.add(this.starfield)},_buildRing(){const n=[];for(let e=0;e<=48;e++)n.push(new I(0,0,0));const t=new pe().setFromPoints(n);this.ring=new fr(t,new Ps({color:16765286,transparent:!0,opacity:.95,blending:Ne,depthWrite:!1})),this.ring.visible=!1,this.scene.add(this.ring)},showRing(n,t){this.ring||this._buildRing(),this._ringCenter=this.latLngToVec3(n,t,1).normalize(),this._ringAngle=0,this._ringAnim={t0:performance.now(),dur:480,from:this.EARTH_R*.16,to:this.EARTH_R*.045},this._ringRadius=this.EARTH_R*.16,this._ringPulse=!0,this.ring.visible=!0,this._updateRingGeometry()},_updateRingGeometry(){if(!this._ringCenter||!this.ring)return;const n=this._ringCenter,t=n.clone().multiplyScalar(this.EARTH_R*1.012),e=this._ringRadius,i=Math.abs(n.y)>.9?new I(1,0,0):new I(0,1,0),s=new I().crossVectors(i,n).normalize(),r=new I().crossVectors(n,s).normalize(),o=[];for(let a=0;a<=48;a++){const l=(this._ringAngle||0)+a/48*Math.PI*2;o.push(t.clone().add(s.clone().multiplyScalar(Math.cos(l)*e)).add(r.clone().multiplyScalar(Math.sin(l)*e)))}this.ring.geometry.setFromPoints(o)},hideRing(){this.ring&&(this.ring.visible=!1),this._ringAnim=null,this._ringPulse=!1},_buildOverlay(){this.labelsWrap=document.createElement("div"),this.labelsWrap.className="globe3d-overlay",this.labelsWrap.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:5;",this.el.appendChild(this.labelsWrap),this.tooltip=document.createElement("div"),this.tooltip.className="globe3d-tip",this.tooltip.style.cssText="position:absolute;display:none;pointer-events:none;z-index:60;max-width:250px;padding:10px 12px;border-radius:10px;background:rgba(6,14,30,.95);border:1px solid rgba(34,211,238,.4);box-shadow:0 12px 34px rgba(0,0,0,.55),0 0 22px rgba(34,211,238,.14);color:#e8f4ff;font-size:12px;line-height:1.7;backdrop-filter:blur(8px);",this.labelsWrap.appendChild(this.tooltip)},makePlanetTexture(n){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),i=this._hexToRgb(n),s=e.createLinearGradient(0,0,128,128);s.addColorStop(0,this._rgbaStr(this._mix(i,[255,255,255],.55),1)),s.addColorStop(.45,this._rgbaStr(i,1)),s.addColorStop(1,this._rgbaStr(this._mix(i,[0,0,0],.65),1)),e.fillStyle=s,e.fillRect(0,0,128,128),e.globalAlpha=.22;for(let o=0;o<4;o++){const a=20+Math.random()*90,l=5+Math.random()*10,c=e.createLinearGradient(0,a,0,a+l);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.5,"rgba(255,255,255,0.8)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.beginPath(),e.ellipse(64,a,50+Math.random()*24,l/2,0,0,Math.PI*2),e.fill()}e.globalAlpha=.22;for(let o=0;o<7;o++)e.fillStyle="rgba(0,0,0,0.55)",e.beginPath(),e.arc(18+Math.random()*92,18+Math.random()*92,3+Math.random()*6,0,Math.PI*2),e.fill();e.globalAlpha=1;const r=new jh(t);return r.anisotropy=4,r},_hexToRgb(n){const t=n.replace("#",""),e=parseInt(t.length===3?t.split("").map(i=>i+i).join(""):t,16);return[e>>16&255,e>>8&255,e&255]},_mix(n,t,e){return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e].map(Math.round)},_rgbaStr(n,t){return"rgba("+n[0]+","+n[1]+","+n[2]+","+t+")"},latLngToVec3(n,t,e){const i=n*Math.PI/180,s=t*Math.PI/180;return new I(e*Math.cos(i)*Math.cos(s),e*Math.sin(i),-e*Math.cos(i)*Math.sin(s))},_hexToRgba(n,t){const e=n.replace("#",""),i=parseInt(e.length===3?e.split("").map(s=>s+s).join(""):e,16);return"rgba("+(i>>16&255)+","+(i>>8&255)+","+(i&255)+","+t+")"},makeGlowSprite(n,t){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d"),s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.18,this._hexToRgba(n,.85)),s.addColorStop(.5,this._hexToRgba(n,.28)),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,128,128);const r=new jh(e),o=new ep({map:r,transparent:!0,opacity:t,depthWrite:!1});return new ib(o)},setPoints(n){this.pointGroup&&this.scene.remove(this.pointGroup),this.pointGroup=new kn,this.points=[],(n||[]).forEach(t=>{const e=t.value[0],i=t.value[1],s=this.latLngToVec3(i,e,this.EARTH_R*1.012),r=t.type==="work"?"#f5b942":t.type==="study"?"#a78bfa":"#22d3ee",o=this.makeGlowSprite(r,t.type==="project"?.75:1);o.position.copy(s);const a=t.type==="work"?9:(t.type==="study",8);o.scale.set(a,a,1),this.pointGroup.add(o),this.points.push({data:t,sprite:o,baseScale:a,type:t.type})}),this.scene.add(this.pointGroup)},buildFlyLines(n){this.flyLines.forEach(t=>{t.line&&this.scene.remove(t.line),t.comet&&this.scene.remove(t.comet)}),this.flyLines=[],(n||[]).forEach(t=>{const e=this.latLngToVec3(t.from[1],t.from[0],this.EARTH_R*1.01),i=this.latLngToVec3(t.to[1],t.to[0],this.EARTH_R*1.01),s=e.clone().add(i).multiplyScalar(.5).normalize().multiplyScalar(this.EARTH_R*1.5),r=new op(e,s,i),o=new pe().setFromPoints(r.getPoints(48)),a=new fr(o,new Ps({color:t.color||2282478,transparent:!0,opacity:.45,depthWrite:!1}));this.scene.add(a);const l=this.makeGlowSprite(t.colorHex||"#22d3ee",.95);l.scale.set(5,5,1),this.scene.add(l),this.flyLines.push({curve:r,comet:l,speed:.22+Math.random()*.12,t:Math.random()})})},buildChinaBorders(n){if(!n||!n.features||this.chinaBorders)return;this.chinaGeo=n,this.chinaBoxes=n.features.map(r=>{const o=r.geometry,a=o&&o.coordinates?o.type==="Polygon"?[o.coordinates]:o.coordinates:[];let l=1/0,c=1/0,u=-1/0,h=-1/0;return a.forEach(f=>{const d=f&&f[0];d&&d.forEach(g=>{g[0]<l&&(l=g[0]),g[0]>u&&(u=g[0]),g[1]<c&&(c=g[1]),g[1]>h&&(h=g[1])})}),{minX:l,minY:c,maxX:u,maxY:h,polys:a}});const t=[],e=this.EARTH_R*1.01;if(n.features.forEach(r=>{const o=r.geometry;if(!o||!o.coordinates)return;(o.type==="Polygon"?[o.coordinates]:o.coordinates).forEach(l=>{const c=l&&l[0];if(!(!c||c.length<3))for(let u=0;u<c.length-1;u++){const h=this.latLngToVec3(c[u][1],c[u][0],e),f=this.latLngToVec3(c[u+1][1],c[u+1][0],e);t.push(h.x,h.y,h.z,f.x,f.y,f.z)}})}),!t.length)return;const i=new pe;i.setAttribute("position",new Re(new Float32Array(t),3));const s=new Ps({color:3531007,transparent:!0,opacity:.9,blending:Ne,depthWrite:!1});this.chinaBorders=new sb(i,s),this.scene.add(this.chinaBorders)},buildTimeline(n){this.fleet&&(this.fleet.dispose(),this.fleet=null),this.timelineGroup&&this.scene.remove(this.timelineGroup),this.labelsWrap&&this.labelsWrap.querySelectorAll(".globe3d-tl-label").forEach(i=>i.remove()),this.timelineGroup=new kn,this.timelineItems=[];const t=n||[],e=this.EARTH_R*2.1;this.timelineGroup.quaternion.setFromEuler(new Yr(Math.PI/3,Math.PI/6,0));{const i=[];for(let l=0;l<=120;l++){const c=l/120*Math.PI*2;i.push(new I(Math.cos(c)*e,Math.sin(c)*e,0))}const s=new pe().setFromPoints(i),r=new Ps({color:3524863,transparent:!0,opacity:.18,blending:Ne,depthWrite:!1});this.timelineRing=new fr(s,r),this.timelineGroup.add(this.timelineRing);const o=new pe().setFromPoints(i),a=new Yl({color:8250357,size:1.8,transparent:!0,opacity:.85,sizeAttenuation:!0,blending:Ne,depthWrite:!1});this.timelineRingDots=new Ml(o,a),this.timelineGroup.add(this.timelineRingDots)}t.forEach((i,s)=>{const r=i.color||"#22d3ee",o=i.radius||(i.type==="work"?10:i.type==="study"?9:8),a=new kn,l=new ee(new ci(o,32,24),new En({map:this.makePlanetTexture(r)}));a.add(l);const c=new ee(new ci(o*1.16,24,18),new Rn({uniforms:{uColor:{value:new Xt(r)}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; varying vec3 vN; void main(){ float i = pow(max(0.0, 0.72 - dot(vN, vec3(0.0, 0.0, 1.0))), 2.2); gl_FragColor = vec4(uColor, 1.0) * i; }",side:jn,blending:Ne,transparent:!0,depthWrite:!1}));a.add(c);const u=this.makeGlowSprite(r,.5);u.scale.set(o*2.2,o*2.2,1),a.add(u),this.timelineGroup.add(a);const h=document.createElement("div");h.className="globe3d-label globe3d-tl-label";const f=i.short||i.name,d=i.timeLabel||(i.start||"")+(i.end?" ~ "+i.end:"");h.innerHTML='<b style="display:block;font-size:13px;letter-spacing:2px;color:'+r+';">'+f+'</b><span style="display:block;font-size:11px;color:#cfe3f7;letter-spacing:1px;">'+d+"</span>",h.style.cssText="position:absolute;left:0;top:0;line-height:1.5;text-align:center;text-shadow:0 0 8px rgba(0,0,0,.95),0 0 18px rgba(0,0,0,.7);white-space:nowrap;pointer-events:none;",this.labelsWrap.appendChild(h);const g=s/Math.max(1,t.length)*Math.PI*2+Math.PI/3;this.timelineItems.push({data:i,group:a,label:h,baseScale:1,orbitR:e,angle:g})}),this.scene.add(this.timelineGroup)},_showTimelineTooltip(n){let t='<b style="color:'+(n.color||"#22d3ee")+'">🛰 '+n.name+"</b>";(n.start||n.end)&&(t+='<br><span style="color:#93b4d4">'+(n.start||"")+" ~ "+(n.end||"")+"</span>"),n.detail&&(t+='<br><span style="color:#e8f4ff">'+n.detail+"</span>"),this.tooltip.innerHTML=t,this.tooltip.style.display="block"},_bindEvents(){const n=this.renderer.domElement;n.addEventListener("pointermove",t=>this._onMove(t)),n.addEventListener("pointerdown",t=>this._onDown(t)),n.addEventListener("pointerup",t=>this._onUp(t)),n.addEventListener("pointerleave",()=>this._clearHover())},_onMove(n){this._pressInfo&&(Math.abs(n.clientX-this._pressInfo.x)>12||Math.abs(n.clientY-this._pressInfo.y)>12)&&this._clearPress();const t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(n.clientX-t.left)/t.width*2-1,this.pointer.y=-((n.clientY-t.top)/t.height)*2+1,this._raycast()},_raycast(){this.ray.setFromCamera(this.pointer,this.camera);const n=this.points.map(a=>a.sprite).concat(this.timelineItems.map(a=>a.group)),t=this.ray.intersectObjects(n,!0),e=t.length?t[0].object:null,i=e?this.points.find(a=>a.sprite===e):null,s=e&&!i?this.timelineItems.find(a=>a.group===e||a.group.children.indexOf(e)>=0):null;let r=!1,o=!1;if(!i&&!s){const a=this._hitEarthLatLng();a&&(r=this._pointInChina(a.lat,a.lng),o=!r)}if(i!==this.hovered||s!==this.hoveredTl||r!==this.hoveringChina||o!==this.hoveringGlobe){this.hovered=i,this.hoveredTl=s,this.hoveringChina=r,this.hoveringGlobe=o,this.points.forEach(l=>l.sprite.scale.setScalar(l.baseScale)),this.timelineItems.forEach(l=>l.group.scale.setScalar(l.baseScale)),this._setChinaHover(r),this._setCursor(i||s||r||o?"pointer":"");const a=!!(i||s||r||o);a!==this._interactiveHover&&(this._interactiveHover=a,this.onInteractiveHover&&this.onInteractiveHover(a)),i?(i.sprite.scale.setScalar(i.baseScale*1.55),this._showTooltip(i.data),this.showRing(i.data.value[1],i.data.value[0]),this.onPointHover&&this.onPointHover(i.data)):s?(s.group.scale.setScalar(s.baseScale*1.3),this._showTimelineTooltip(s.data),this.onTimelineHover&&this.onTimelineHover(s.data)):r?this.onChinaHover&&this.onChinaHover(!0):o?(this._showTooltip({name:"个人档案室",note:"长按进入个人档案库"}),this._positionTooltipAtPointer(),this.onChinaHover&&this.onChinaHover(!1)):(this._hideTooltip(),this.hideRing(),this.onPointHover&&this.onPointHover(null),this.onTimelineHover&&this.onTimelineHover(null),this.onChinaHover&&this.onChinaHover(!1))}},_hitEarthLatLng(){if(!this.earth)return null;this.ray.setFromCamera(this.pointer,this.camera);const n=this.ray.intersectObject(this.earth,!1);if(!n.length)return null;const t=n[0].point.clone().normalize(),e=Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,i=Math.atan2(-t.z,t.x)*180/Math.PI;return{lat:e,lng:i}},_hitChina(){if(!this.chinaGeo)return!1;const n=this._hitEarthLatLng();return n?this._pointInChina(n.lat,n.lng):!1},_pointInChina(n,t){const e=this.chinaBoxes;if(!e)return!1;for(let i=0;i<e.length;i++){const s=e[i];if(t<s.minX||t>s.maxX||n<s.minY||n>s.maxY)continue;const r=s.polys;for(let o=0;o<r.length;o++){const a=r[o],l=a&&a[0];if(!(!l||l.length<3)&&this._inRing(t,n,l)){let c=!1;for(let u=1;u<a.length;u++)if(this._inRing(t,n,a[u])){c=!0;break}if(!c)return!0}}}return!1},_inRing(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const o=e[s][0],a=e[s][1],l=e[r][0],c=e[r][1];a>t!=c>t&&n<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i},_setChinaHover(n){this.chinaBorders&&(this.chinaBorders.material.opacity=n?1:.9,this.chinaBorders.material.color.setHex(n?16777215:3531007)),n&&(this._showTooltip({name:"中国",note:"点击进入中国地图"}),this._positionTooltipAtPointer())},_setCursor(n){this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.cursor=n||"")},_positionTooltipAtPointer(){const n=this.renderer.domElement.getBoundingClientRect();if(!n.width)return;const t=(this.pointer.x+1)/2*n.width,e=(-this.pointer.y+1)/2*n.height;this.tooltip.style.left=Math.min(Math.max(6,t),n.width-260)+"px",this.tooltip.style.top=Math.max(6,e+16)+"px"},_onDown(n){n.button===0&&(this._clearPress(),this._pressInfo={x:n.clientX,y:n.clientY,t:performance.now()},this._longTimer=setTimeout(()=>{this._pressInfo&&!this.hovered&&!this.hoveringChina&&this.onLongPress&&this.onLongPress(),this._pressInfo=null},900),this._onMove(n),this._pressInfo.china=this.hoveringChina,this.hovered&&this.onPointClick?this.onPointClick(this.hovered.data):this.hoveredTl&&this.onTimelineClick&&this.onTimelineClick(this.hoveredTl.data),!this.hovered&&!this.hoveringChina&&this.onLongPressProgress&&this._tickPressProgress(performance.now()))},_onUp(n){if(n.button!==0)return;const t=this._pressInfo;this._clearPress(),t&&t.china&&!this.hovered&&this.onChinaClick&&this.onChinaClick()},_tickPressProgress(n){if(!this._pressInfo||this.disposed){this._setPressProgress(0);return}const t=Math.min(1,(n-this._pressInfo.t)/900);this._setPressProgress(t),t<1&&this._pressInfo&&(this._progressRaf=requestAnimationFrame(()=>this._tickPressProgress(performance.now())))},_setPressProgress(n){this.onLongPressProgress&&this.onLongPressProgress(n)},_clearPress(){this._longTimer&&(clearTimeout(this._longTimer),this._longTimer=0),this._progressRaf&&(cancelAnimationFrame(this._progressRaf),this._progressRaf=0),this.onLongPressProgress&&this.onLongPressProgress(0),this._pressInfo=null},_clearHover(){(this.hovered||this.hoveredTl)&&(this.hovered=null,this.hoveredTl=null,this.points.forEach(n=>n.sprite.scale.setScalar(n.baseScale)),this.timelineItems.forEach(n=>n.group.scale.setScalar(n.baseScale)),this._hideTooltip(),this.hideRing(),this.onPointHover&&this.onPointHover(null),this.onTimelineHover&&this.onTimelineHover(null))},_showTooltip(n){let t='<b style="color:#22d3ee">📍 '+n.name+"</b>";if(n.note&&(t+='<br><span style="color:#93b4d4">'+n.note+"</span>"),n.projects&&n.projects.length){const e=n.projects.slice(0,5).map(i=>'<div style="border-bottom:1px dashed rgba(120,200,255,.15);padding:2px 0">'+i.name+"</div>").join("");t+='<div style="margin-top:4px">'+e+"</div>"}this.tooltip.innerHTML=t,this.tooltip.style.display="block"},_hideTooltip(){this.tooltip.style.display="none"},focusOn(n,t,e,i){const s=this.latLngToVec3(t,n,this.EARTH_R),r=e??170,o=this.EARTH_R*Math.max(1.5,Math.min(4.2,1.1+r/170*2.1)),a=s.clone().normalize(),l=s.clone().add(a.multiplyScalar(o));this.controls.autoRotate=!1,this.showRing(t,n),this._tweenTo(s,l,1e3,i)},resetView(){this.controls.autoRotate=!0,this.hideRing(),this._tweenTo(new I(0,0,0),this.chinaDir.clone().multiplyScalar(this.EARTH_R*3.2),1200)},setPaused(n){this._setPaused(!!n)},triggerFleetDemo(n){if(!this.fleet)return;const t=this.fleet.getShipPosition();t&&this._focusWorld(t,this.EARTH_R*1.05),this.fleet.trigger(),this._fleetFollowUntil=performance.now()+8e3,this._fleetDemoReset=!!n},_focusWorld(n,t){const e=n.clone().normalize(),i=n.clone().add(e.multiplyScalar(t));this.controls.autoRotate=!1,this._tweenTo(n.clone(),i,900)},_tweenTo(n,t,e,i){const s=new I(0,0,1),r=this.camera.position.clone().normalize(),o=t.clone().normalize(),a=new mi().setFromUnitVectors(s,r),l=new mi().setFromUnitVectors(s,o);if(this._tween={t0:performance.now(),dur:e,sTarget:this.controls.target.clone(),target:n.clone(),sDist:this.camera.position.length(),eDist:t.length(),qs:a,qe:l},!this._tweenRaf){const c=u=>{const h=this._tween;if(!h){this._tweenRaf=0;return}const f=Math.min(1,(u-h.t0)/h.dur),d=f<.5?2*f*f:1-Math.pow(-2*f+2,2)/2;this.controls.target.lerpVectors(h.sTarget,h.target,d);const g=h.qs.clone().slerp(h.qe,d),_=s.clone().applyQuaternion(g),m=h.sDist+(h.eDist-h.sDist)*d;this.camera.position.copy(_.multiplyScalar(m)),this.controls.update(),f<1?this._tweenRaf=requestAnimationFrame(c):(this._tween=null,this._tweenRaf=0,i&&i())};this._tweenRaf=requestAnimationFrame(c)}},setDayNight(n,t){this.override&&this.override!=="auto"||(this.dayNightTarget=n?1:0,this.lightBoostTarget=n?0:1,t&&(this.dayNight=this.dayNightTarget,this.lightBoost=this.lightBoostTarget))},setOverride(n){this.override=n==="day"||n==="night"?n:"auto";const t=this.override==="day"?!0:this.override==="night"?!1:Ql();this.dayNightTarget=t?1:0,this.lightBoostTarget=t?0:1,this.dayNight=this.dayNightTarget,this.lightBoost=this.lightBoostTarget},resize(){if(this.disposed||!this.el)return;const n=this.el.clientWidth,t=this.el.clientHeight;!n||!t||(this.camera.aspect=n/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,t))},animate(){if(this.disposed)return;if(this._paused){this.raf=0;return}this.raf=requestAnimationFrame(()=>this.animate());const n=Math.min(.05,this.clock.getDelta());if(this.dayNight+=(this.dayNightTarget-this.dayNight)*Math.min(1,n*1.5),this.lightBoost+=(this.lightBoostTarget-this.lightBoost)*Math.min(1,n*1.5),this.earthMat&&(this.earthMat.uniforms.uDayNight.value=this.dayNight),this.points.forEach(t=>{t.sprite.material.opacity=(t.type==="project"?.72:1)*(.5+.5*this.lightBoost)}),this.starfield&&(this.starfield.material.uniforms.uTime.value=performance.now()/1e3),this.fleet)if(this.fleet.update(n,this.clock.elapsedTime||performance.now()/1e3),this._fleetFollowUntil&&performance.now()<this._fleetFollowUntil){const t=this.fleet.getShipPosition();t&&this.controls.target.lerp(t,.06)}else this._fleetFollowUntil&&this._fleetDemoReset&&(this._fleetDemoReset=!1,this.resetView()),this._fleetFollowUntil=0;if(this.clouds&&(this.clouds.rotation.y+=n*.02),this.aperture&&this.camera&&this.aperture.quaternion.copy(this.camera.quaternion),this.sat){this._moonAngle=(this._moonAngle||0)+n*(this._moonSpeed||.45);const t=this._moonAngle,e=this.EARTH_R*1.42,i=this.camera.quaternion,s=new I(Math.cos(t)*e,Math.sin(t)*e,0).applyQuaternion(i);this.sat.position.copy(s);const r=new I(-Math.sin(t)*e,Math.cos(t)*e,0).applyQuaternion(i).normalize(),o=this.camera.position.clone().normalize(),a=new I().crossVectors(o,r).normalize(),l=new de().makeBasis(a,o,r);this.sat.quaternion.setFromRotationMatrix(l),this.satGlow&&this.satGlow.position.copy(s)}if(this.satellites&&this.satellites.forEach(t=>{t.angle+=n*t.speed;const e=t.angle;t.sprite.position.set(Math.cos(e)*t.r,Math.sin(e)*t.r*Math.sin(t.tilt),Math.sin(e)*t.r*Math.cos(t.tilt))}),this.timelineItems){const t=this._timelineSpeed||.06;this.timelineItems.forEach(e=>{e.angle+=n*t;const i=e.angle,s=e.orbitR,r=Math.cos(i)*s,o=Math.sin(i)*s;e.group.position.set(r,o,0)})}if(this._ringAnim&&this.ring&&this.ring.visible){const t=Math.min(1,(performance.now()-this._ringAnim.t0)/this._ringAnim.dur),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;this._ringRadius=this._ringAnim.from+(this._ringAnim.to-this._ringAnim.from)*e,t>=1&&(this._ringAnim=null),this._updateRingGeometry()}else if(this._ringPulse&&this.ring&&this.ring.visible){const t=performance.now()/1e3;this._ringRadius=this.EARTH_R*(.045+.012*Math.sin(t*3.4)),this._ringAngle=(this._ringAngle||0)+.015,this._updateRingGeometry()}this.flyLines.forEach(t=>{t.t=(t.t+n*t.speed)%1,t.comet.position.copy(t.curve.getPoint(t.t))}),this._updateOverlay(),this.controls.update(),this.renderer.render(this.scene,this.camera)},_updateOverlay(){const n=performance.now();if(n-(this._lastOvT||0)<66)return;this._lastOvT=n;const t=this.el.clientWidth||800,e=this.el.clientHeight||520;if(this.timelineItems.length){const i=this.camera.position.clone().normalize(),s=this.camera.fov*Math.PI/180,o=e/2/Math.tan(s/2)*(this.EARTH_R/this.camera.position.length()),a=t/2,l=e/2;this.timelineItems.forEach(c=>{const u=this._tmpV2.copy(c.group.position).applyQuaternion(this.timelineGroup.quaternion),h=this._tmpV.copy(u).project(this.camera),f=(h.x*.5+.5)*t,d=(-h.y*.5+.5)*e,g=u.dot(i)<0,_=Math.sqrt((f-a)*(f-a)+(d-l)*(d-l))<o*.96,m=h.z<1&&h.z>-1&&!(g&&_),p=c.label;m?(p.style.transform="translate("+f+"px,"+d+"px) translate(-50%, calc(-100% - 18px))",p.style.display="block"):p.style.display="none"})}if(this.hoveringChina&&this.tooltip.style.display==="block"&&!this.hovered)this._positionTooltipAtPointer();else if(this.hovered&&this.tooltip.style.display==="block"){const i=this._tmpV2.copy(this.hovered.sprite.position).project(this.camera);if(i.z<1){const s=(i.x*.5+.5)*t,r=(-i.y*.5+.5)*e;this.tooltip.style.left=Math.min(Math.max(6,s),t-260)+"px",this.tooltip.style.top=Math.max(6,r+16)+"px"}}},dispose(){if(this.disposed=!0,cancelAnimationFrame(this.raf),cancelAnimationFrame(this._enterRaf),cancelAnimationFrame(this._tweenRaf),this._longTimer&&clearTimeout(this._longTimer),this._onResize&&window.removeEventListener("resize",this._onResize),this._onVis&&document.removeEventListener("visibilitychange",this._onVis),this._io)try{this._io.disconnect()}catch{}this.fleet&&(this.fleet.dispose(),this.fleet=null),this.timelineGroup&&this.scene.remove(this.timelineGroup),this.labelsWrap&&this.labelsWrap.remove(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.remove()),this.el=null}},Kb=""+new URL("earth3d-night-CehiUZvX.jpg",import.meta.url).href,Zb=""+new URL("earth3d-day-Cfv4RgkR.jpg",import.meta.url).href,Jb=""+new URL("earth3d-cloud-4KQP77mE.png",import.meta.url).href,Qb={class:"fleet-hud"},tT={class:"fh-state"},eT={class:"fh-bar"},nT={__name:"Globe3D",props:{points:{type:Array,default:()=>[]},flyLines:{type:Array,default:()=>[]},timeline:{type:Array,default:()=>[]},autoDayNight:{type:Boolean,default:!0}},emits:["point-click","timeline-click","long-press","china-click","interactive-hover","press-progress","ready"],setup(n,{expose:t,emit:e}){const i=n,s=e,r=oe(null),o=oe(""),a=oe(0);let l=null,c=null;return Di(async()=>{l=await $b.init(r.value,{radius:100,textures:{day:Kb,night:Zb,cloud:Jb}}),l.onPointClick=h=>s("point-click",h),l.onTimelineClick=h=>s("timeline-click",h),l.onLongPress=()=>s("long-press"),l.onChinaClick=()=>s("china-click"),l.onFleetProgress=(h,f)=>{o.value=h||"",a.value=f||0},l.onInteractiveHover=h=>s("interactive-hover",h),l.onLongPressProgress=h=>s("press-progress",h),l.onTimelineHover=()=>{},i.points.length&&l.setPoints(i.points),i.flyLines.length&&l.buildFlyLines(i.flyLines),i.timeline.length&&l.buildTimeline(i.timeline);const u=await Ho(()=>import("./chinaGeo-ba7E3HKY.js"),[],import.meta.url);l&&!l.disposed&&l.buildChinaBorders(u.default),i.autoDayNight&&(l.setDayNight(Ql(),!0),c=setInterval(()=>{l&&!l.disposed&&l.setDayNight(Ql(),!1)},6e4)),s("ready",l)}),Zi(()=>i.points,u=>{l&&l.setPoints(u)},{deep:!0}),Zi(()=>i.flyLines,u=>{l&&l.buildFlyLines(u)},{deep:!0}),Zi(()=>i.timeline,u=>{l&&l.buildTimeline(u)},{deep:!0}),Ys(()=>{c&&clearInterval(c),l&&l.dispose(),l=null}),t({focusOn:(u,h,f,d)=>l&&l.focusOn(u,h,f,d),focusChina:u=>l&&l.focusOn(104.5,34.5,55,u),setPaused:u=>{l&&l.setPaused(u)},triggerFleetDemo:u=>{l&&l.triggerFleetDemo(u)},resetView:()=>l&&l.resetView(),setDayNightMode:u=>l&&l.setOverride(u),setAutoRotate:u=>{l&&(l.controls.autoRotate=u)},setPoints:u=>l&&l.setPoints(u),buildFlyLines:u=>l&&l.buildFlyLines(u),buildTimeline:u=>l&&l.buildTimeline(u)}),(u,h)=>(Ot(),Vt(me,null,[at("div",{ref_key:"el",ref:r,class:"globe3d-root"},null,512),No(at("div",Qb,[at("span",tT,"⚡ "+$t(o.value),1),at("div",eT,[at("i",{style:ks({width:Math.round(a.value*100)+"%"})},null,4)])],512),[[zo,o.value]])],64))}},iT=Ii(nT,[["__scopeId","data-v-a70593cf"]]),sT={class:"modal"},rT={class:"modal-head"},oT={class:"modal-title"},aT={key:0,class:"modal-meta"},lT={key:1,class:"modal-rows"},cT={class:"m-label"},uT={class:"m-value"},hT={key:2,class:"modal-cards"},fT={class:"mc-name"},dT={class:"m-label"},pT={class:"m-value"},mT={key:3,class:"modal-text"},gT={__name:"DetailModal",props:{content:{type:Object,default:null}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>(Ot(),Ls(yg,{name:"modal"},{default:Vf(()=>[n.content?(Ot(),Vt("div",{key:0,class:"modal-mask",onClick:s[1]||(s[1]=Xg(r=>e("close"),["self"]))},[at("div",sT,[at("div",rT,[at("span",oT,$t(n.content.title),1),at("button",{class:"modal-close",onClick:s[0]||(s[0]=r=>e("close"))},"✕")]),n.content.meta?(Ot(),Vt("div",aT,$t(n.content.meta),1)):Ve("",!0),n.content.rows&&n.content.rows.length?(Ot(),Vt("div",lT,[(Ot(!0),Vt(me,null,An(n.content.rows,(r,o)=>(Ot(),Vt("div",{key:o,class:"modal-row"},[at("span",cT,$t(r[0]),1),at("span",uT,$t(r[1]),1)]))),128))])):Ve("",!0),n.content.cards&&n.content.cards.length?(Ot(),Vt("div",hT,[(Ot(!0),Vt(me,null,An(n.content.cards,(r,o)=>(Ot(),Vt("div",{key:o,class:"modal-card"},[at("p",fT,$t(r.name),1),(Ot(!0),Vt(me,null,An(r.rows||[],(a,l)=>(Ot(),Vt("div",{key:l,class:"modal-row"},[at("span",dT,$t(a[0]),1),at("span",pT,$t(a[1]),1)]))),128))]))),128))])):Ve("",!0),n.content.text?(Ot(),Vt("div",mT,$t(n.content.text),1)):Ve("",!0)])])):Ve("",!0)]),_:1}))}},_T=Ii(gT,[["__scopeId","data-v-1e68caf9"]]),vT={class:"foil-root"},xT={__name:"FoilStrike",emits:["complete"],setup(n,{emit:t}){const e=t;return Di(()=>{const i=setTimeout(()=>e("complete"),2600);return()=>clearTimeout(i)}),(i,s)=>(Ot(),Vt("div",vT,[...s[0]||(s[0]=[gc('<div class="foil-dark" data-v-785026e9></div><div class="foil-dark-cover" data-v-785026e9></div><div class="foil-sweep" data-v-785026e9></div><div class="foil-plane" data-v-785026e9></div><div class="foil-grid" data-v-785026e9></div><div class="foil-text" data-v-785026e9><h2 data-v-785026e9>二向箔 · 降维打击</h2><p data-v-785026e9>三维空间正在被压缩为二维……</p></div><div class="foil-flash" data-v-785026e9></div>',7)])]))}},yT=Ii(xT,[["__scopeId","data-v-785026e9"]]);function MT(n=1920,t=1080){const e=oe(1);function i(){const s=window.innerWidth,r=window.innerHeight;e.value=Math.min(s/n,r/t)}return Di(()=>{i(),window.addEventListener("resize",i)}),Ys(()=>window.removeEventListener("resize",i)),{scale:e}}function ST(){const n="a, button, .cbtn, .seg-btn, .ctrl-btn, .chip, .tag, .nav-item, .panel-item, .kpi, .loc-item, .pf-card, .blog-post, .globe-reset, [data-route]";let t=null,e=null,i=null,s=innerWidth/2,r=innerHeight/2,o=s,a=r,l=0,c=!1;function u(){t&&(t.style.display="block"),e&&(e.style.display="block")}function h(){t&&(t.style.display="none"),e&&(e.style.display="none")}function f(v){u(),s=v.clientX,r=v.clientY,t&&(t.style.left=s+"px",t.style.top=r+"px");const b=v.target.closest("input, textarea, select, .form-input");if(t&&t.classList.toggle("hidden-c",!!b),e&&e.classList.toggle("hidden-c",!!b),!b&&e){const C=!!v.target.closest(n);e.classList.toggle("hovering",C||c),e.classList.toggle("target",!!v.target.closest(".globe-stage, .globe3d-root, canvas"))}l||(l=requestAnimationFrame(d))}function d(){o+=(s-o)*.16,a+=(r-a)*.16,e&&(e.style.left=o+"px",e.style.top=a+"px"),l=0}function g(){e&&e.classList.add("pressed")}function _(){e&&e.classList.remove("pressed")}function m(){h()}function p(v){c=!!v,e&&e.classList.toggle("hovering",c)}function S(v){if(!i)return;const b=Math.max(0,Math.min(1,v));if(b>0){i.classList.add("show"),i.style.left=s+"px",i.style.top=r+"px";const C=i.querySelector(".cp-fill");C&&(C.style.strokeDashoffset=(113.1*(1-b)).toFixed(1))}else i.classList.remove("show")}return Di(()=>{t=document.getElementById("cursorDot"),e=document.getElementById("cursorRing"),i=document.getElementById("cursorProgress"),!(!t||!e)&&(window.matchMedia&&window.matchMedia("(hover: none)").matches||(document.addEventListener("mousemove",f),document.addEventListener("mousedown",g),document.addEventListener("mouseup",_),document.addEventListener("mouseleave",m)))}),Ys(()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mousedown",g),document.removeEventListener("mouseup",_),document.removeEventListener("mouseleave",m)}),{setHover:p,setProgress:S}}const ff="./archive/index.html",ET={class:"globe-stage"},bT={class:"china-loading"},TT={class:"threebody-wrap"},wT={__name:"App",setup(n){const t=Fa(()=>Ho(()=>import("./ChinaMapView-BDyPlaas.js"),__vite__mapDeps([0,1]),import.meta.url)),e=Fa(()=>Ho(()=>import("./ThreeBodySim-DFsGgf9t.js"),__vite__mapDeps([2,3]),import.meta.url)),i=Fa(()=>Ho(()=>import("./ChartsPanel-DjZrJuhq.js"),__vite__mapDeps([4,5]),import.meta.url)),{data:s}=Wr(),{scale:r}=MT(1920,1080),o=ST(),a=oe(!1);Di(()=>requestAnimationFrame(()=>a.value=!0));const l=oe((()=>{const z=new URLSearchParams(location.search).get("view");return z==="china"||z==="threebody"?z:"earth"})()),c=oe(new URLSearchParams(location.search).get("charts")==="1"),u=oe(l.value==="china"),h=oe(l.value==="threebody");Zi(l,z=>{z==="china"&&(u.value=!0),z==="threebody"&&(h.value=!0)});const f=oe(!1),d=oe(!1),g=oe(!1);let _=!1,m=!1;const p=[];function S(){for(;p.length;)clearTimeout(p.pop())}const v=fn(()=>l.value==="earth"?1:0),b=fn(()=>l.value==="china"?"china-active":"china-idle"),C=oe(null),R=oe(null),P=oe(null),J=fn(()=>{const z=[];return(s.locations||[]).forEach(H=>{z.push({name:H.name,type:H.type,city:H.name,count:1,value:[H.coord[0],H.coord[1],0,1],note:H.note})}),hr(s.projects).forEach(H=>{z.push({name:H.city,type:"project",city:H.city,count:H.count,value:[H.coord[0],H.coord[1],0,H.count],note:H.count+" 个项目 · 合同额 "+vi(H.contract),projects:H.list})}),z}),E=fn(()=>{const z=(s.locations||[]).find(dt=>dt.type==="study"),H=(s.locations||[]).find(dt=>dt.type==="work"),ut=[];return z&&H&&ut.push({from:z.coord,to:H.coord,color:2282478,colorHex:"#22d3ee"}),hr(s.projects).forEach(dt=>{H&&ut.push({from:H.coord,to:dt.coord,color:2282478,colorHex:"#22d3ee"})}),ut}),w=fn(()=>{const z=(s.timeline||[]).map(H=>({...H}));return z.length<3&&s.profile&&s.profile.birth&&z.unshift({name:"出生",start:s.profile.birth,end:"",color:"#22d3ee",detail:"成长轨迹起点"}),z.forEach(H=>{H.name.indexOf("中建")>=0||H.name.indexOf("公司")>=0?(H.type="work",H.radius=10,H.short="工作"):H.name.indexOf("学院")>=0||H.name.indexOf("大学")>=0?(H.type="study",H.radius=9,H.short="母校"):(H.type="birth",H.radius=8,H.short="出生"),H.timeLabel=(H.start||"")+(H.end?" ~ "+H.end:"")}),z}),X=fn(()=>{const z={};w.value.forEach(lt=>{z[lt.type]=lt});const H=(lt,kt)=>{const It=z[kt]||{};return{short:It.short||(kt==="work"?"工作":"母校"),timeLabel:It.timeLabel||"",coord:lt.coord,color:It.color||(kt==="work"?"#f5b942":"#8b5cf6")}},ut=[],dt=(s.locations||[]).find(lt=>lt.type==="work"),At=(s.locations||[]).find(lt=>lt.type==="study");return dt&&ut.push(H(dt,"work")),At&&ut.push(H(At,"study")),hr(s.projects).forEach(lt=>{ut.push({short:lt.city,timeLabel:lt.count+" 个项目",coord:lt.coord,color:"#22d3ee",city:lt.city})}),ut}),V=oe(null),rt=oe("auto"),A=oe(!0);function B(z){V.value=z}function G(){V.value=null}function O(z){const H=z&&z.projects?z:hr(s.projects).find(dt=>dt.city===(z&&z.city));if(!H)return;const ut=H.done?(H.received/H.done*100).toFixed(1)+"%":"—";B({title:"📍 "+H.city+" · 项目明细",meta:H.count+" 个项目 · 合同额 "+vi(H.contract),rows:[["合同总额",vi(H.contract)],["累计完成（含税）",vi(H.done)],["累计已收款（含税）",vi(H.received)],["回款率",ut]],cards:H.list.map(dt=>({name:dt.name,rows:[["合同额",vi(dt.contract)],["累计完成（含税）",vi(dt.done)],["累计已收款（含税）",vi(dt.received)],...dt.status?[["状态",dt.status]]:[],...dt.note?[["备注",dt.note]]:[]]}))})}function U(z){if(z)if(C.value&&C.value.focusOn(z.value[0],z.value[1],z.type==="project"?62:56),z.type==="project")O(z);else{const H=(s.locations||[]).find(ut=>ut.name===z.name);B({title:"📍 "+z.name,meta:H?H.type==="work"?"现居 · 工作地":"母校 · 求学":"",rows:H&&H.note?[["说明",H.note]]:[]})}}function W(z){if(!z)return;const H=(s.experience||[]).find(ut=>ut.company&&z.name&&z.name.indexOf(ut.company.split("公司")[0])>=0);B({title:"🛰 "+z.name,meta:(z.start||"")+" ~ "+(z.end||""),rows:z.detail?[["经历",z.detail]]:[],cards:H?[{name:H.title,rows:[["公司",H.company],["时间",H.date],...(H.points||[]).map(ut=>["·",ut])]}]:[]})}function et(z){if(!z||!z.coord||R.value&&R.value.drillToCoord(z.coord))return;if(z.city){O({city:z.city});return}const H=(s.locations||[]).find(ut=>ut.coord[0]===z.coord[0]&&ut.coord[1]===z.coord[1]);B({title:"🪐 "+(z.short||"地点"),meta:(z.timeLabel||"")+(H?H.type==="work"?" · 现居 · 工作地":" · 母校 · 求学":""),rows:H&&H.note?[["说明",H.note]]:[]})}function ot(z){B({title:z.title,meta:z.type+" · "+z.date+(z.link?" · 链接："+z.link:""),rows:(z.tags||[]).map(H=>["标签",H]),text:z.desc})}function ft(z){B({title:z.title,meta:z.category+" · "+z.date,rows:(z.tags||[]).map(H=>["标签",H]),text:z.summary})}function $(z){if(l.value==="china")return R.value&&R.value.drillToCoord(z.coord)||R.value&&R.value.focusCoord(z.coord),void 0;mt("earth"),setTimeout(()=>{C.value&&C.value.focusOn(z.coord[0],z.coord[1],56)},60)}function ht(z){if(l.value==="china")return R.value&&R.value.drillToCoord(z.coord)||R.value&&R.value.focusCoord(z.coord),void 0;mt("earth"),setTimeout(()=>{C.value&&C.value.focusOn(z.coord[0],z.coord[1],62)},60),O(z)}function mt(z){if(z==="china"){_t();return}if(z==="threebody"){m=!1,l.value="threebody";return}Ct()}function _t(){if(l.value!=="china"){if(l.value!=="earth"){u.value=!0,l.value="china";return}if(!f.value){u.value=!0,l.value="china";return}S(),m=!0,u.value=!0,g.value=!0,_=!1,C.value&&C.value.focusChina(()=>{_=!0,Tt()}),Tt()}}function bt(){d.value=!0,Tt()}function Tt(){if(l.value!=="china"){if(!m){g.value=!1;return}if(l.value!=="earth"){g.value=!1;return}!d.value||!_||(l.value="china",g.value=!1,p.push(setTimeout(()=>{C.value&&C.value.setPaused(!0)},850)))}}function Ct(){if(l.value!=="earth"){if(l.value==="threebody"){l.value="earth";return}if(!f.value){u.value=!0,l.value="china";return}S(),m=!1,C.value&&C.value.setPaused(!1),l.value="earth",p.push(setTimeout(()=>{l.value==="earth"&&C.value&&C.value.resetView()},750))}}function Et(){rt.value=rt.value==="auto"?"day":rt.value==="day"?"night":"auto",C.value&&C.value.setDayNightMode(rt.value)}function Ht(){A.value=!A.value,C.value&&C.value.setAutoRotate(A.value)}function y(){l.value==="earth"?C.value&&C.value.resetView():R.value&&R.value.resetView()}function N(){P.value&&P.value.start()}function k(){P.value&&P.value.pause()}function K(){P.value&&P.value.reset()}function q(z){P.value&&P.value.setSpeed(z)}function st(z){P.value&&P.value.setPreset(z)}function ct(){P.value&&P.value.kick()}function M(){l.value!=="earth"&&Ct(),setTimeout(()=>{C.value&&C.value.triggerFleetDemo(!1)},500)}const x=oe(new URLSearchParams(location.search).get("foil")==="1");function D(){x.value||(x.value=!0)}function Q(){const z=ff.indexOf("?")>=0?"&":"?";window.location.href=ff+z+"from=foil"}function j(){c.value=!c.value}function Z(){f.value=!0,setTimeout(()=>{C.value&&C.value.triggerFleetDemo(!0)},3200)}return(z,H)=>(Ot(),Vt(me,null,[at("div",{class:on(["screen-wrap",{"foil-flatten":x.value}])},[at("div",{class:on(["screen",{"is-show":a.value}]),style:ks({transform:`scale(${Be(r)})`})},[H[3]||(H[3]=at("div",{class:"bg bg-vignette"},null,-1)),at("div",ET,[at("div",{class:"earth-wrap",style:ks({display:l.value==="threebody"?"none":"block",opacity:v.value,pointerEvents:l.value==="earth"?"auto":"none"})},[ve(iT,{ref_key:"globeRef",ref:C,points:J.value,"fly-lines":E.value,timeline:w.value,onPointClick:U,onTimelineClick:W,onLongPress:D,onChinaClick:_t,onInteractiveHover:H[0]||(H[0]=ut=>Be(o).setHover(ut)),onPressProgress:H[1]||(H[1]=ut=>Be(o).setProgress(ut)),onReady:Z},null,8,["points","fly-lines","timeline"])],4),No(at("div",{class:on(["china-wrap",b.value])},[u.value?(Ot(),Ls(Be(t),{key:0,ref_key:"mapRef",ref:R,active:l.value==="china",markers:X.value,onReady:bt,onMarkerClick:et},null,8,["active","markers"])):Ve("",!0)],2),[[zo,u.value]]),No(at("div",bT,"🛰 正在进入中国地图…",512),[[zo,g.value&&l.value==="earth"]]),No(at("div",TT,[h.value?(Ot(),Ls(Be(e),{key:0,ref_key:"threeBodyRef",ref:P,active:l.value==="threebody"},null,8,["active"])):Ve("",!0)],512),[[zo,l.value==="threebody"]])]),ve(M0),ve(q0,{"view-mode":l.value,"day-night-mode":rt.value,rotating:A.value,onSetView:mt,onCycleDaynight:Et,onToggleRotate:Ht,onReset:y,onTbStart:N,onTbPause:k,onTbReset:K,onTbSpeed:q,onTbPreset:st,onTbKick:ct,onArchive:D,onToggleCharts:j,onFleet:M},null,8,["view-mode","day-night-mode","rotating"]),ve(U_,{onSelectPortfolio:ot,onSelectBlog:ft,onSelectLocation:$,onSelectCity:ht,onSelectDay:B}),c.value?(Ot(),Ls(Be(i),{key:0,visible:c.value,onClose:H[2]||(H[2]=ut=>c.value=!1)},null,8,["visible"])):Ve("",!0),ve(_T,{content:V.value,onClose:G},null,8,["content"]),x.value?(Ot(),Ls(yT,{key:1,onComplete:Q})):Ve("",!0)],6)],2),H[4]||(H[4]=gc('<div id="cursorDot" aria-hidden="true" data-v-76bc4c8c></div><div id="cursorRing" aria-hidden="true" data-v-76bc4c8c></div><div id="cursorProgress" aria-hidden="true" data-v-76bc4c8c><svg viewBox="0 0 40 40" data-v-76bc4c8c><circle cx="20" cy="20" r="18" fill="none" stroke="rgba(34,211,238,.22)" stroke-width="3" data-v-76bc4c8c></circle><circle class="cp-fill" cx="20" cy="20" r="18" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linecap="round" stroke-dasharray="113.1" stroke-dashoffset="113.1" transform="rotate(-90 20 20)" data-v-76bc4c8c></circle></svg></div>',3))],64))}},AT=Ii(wT,[["__scopeId","data-v-76bc4c8c"]]);window.addEventListener("error",n=>console.error("GLOBAL ERROR:",n.message,n.filename+":"+n.lineno));window.addEventListener("unhandledrejection",n=>console.error("UNHANDLED REJECTION:",String(n.reason)));Yg(AT).mount("#app");export{ib as $,Vb as A,ci as B,Io as C,bn as D,Xt as E,me as F,kn as G,jh as H,Cc as I,pe as J,Rn as K,Ps as L,de as M,zs as N,Ce as O,rn as P,br as Q,Gl as R,Fe as S,tf as T,_b as U,I as V,tp as W,$h as X,ue as Y,Re as Z,op as _,vt as a,ep as a0,Ii as a1,Ls as a2,ve as a3,Vn as a4,$t as a5,Yl as a6,Ml as a7,RT as a8,Wb as a9,Wr as aa,om as ab,No as ac,zo as ad,Go as b,Xb as c,_m as d,Ys as e,Ot as f,Vt as g,at as h,on as i,oe as j,eb as k,qb as l,Gb as m,ks as n,Di as o,Yv as p,ee as q,An as r,Ec as s,En as t,Be as u,Ne as v,Zi as w,hp as x,fr as y,sb as z};
