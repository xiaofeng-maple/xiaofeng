const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ChinaMapView-BY0h_9rV.js","./ChinaMapView-DHdOsH2J.css","./ThreeBodySim-DW3LFPkn.js","./ThreeBodySim-BQ_q5lSi.css","./ChartsPanel-CpyLxS7z.js","./ChartsPanel-Dnwyk0nl.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $l(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ae={},Ls=[],Fn=()=>{},tf=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sa=n=>n.startsWith("onUpdate:"),we=Object.assign,Kl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},lp=Object.prototype.hasOwnProperty,ie=(n,t)=>lp.call(n,t),zt=Array.isArray,Ds=n=>Or(n)==="[object Map]",ef=n=>Or(n)==="[object Set]",Cc=n=>Or(n)==="[object Date]",Gt=n=>typeof n=="function",ge=n=>typeof n=="string",zn=n=>typeof n=="symbol",se=n=>n!==null&&typeof n=="object",nf=n=>(se(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),sf=Object.prototype.toString,Or=n=>sf.call(n),cp=n=>Or(n).slice(8,-1),rf=n=>Or(n)==="[object Object]",Zl=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,lr=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},up=/-\w/g,Tn=ra(n=>n.replace(up,t=>t.slice(1).toUpperCase())),hp=/\B([A-Z])/g,Qi=ra(n=>n.replace(hp,"-$1").toLowerCase()),of=ra(n=>n.charAt(0).toUpperCase()+n.slice(1)),ba=ra(n=>n?`on${of(n)}`:""),Nn=(n,t)=>!Object.is(n,t),Ta=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},af=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},fp=n=>{const t=parseFloat(n);return isNaN(t)?n:t},dp=n=>{const t=ge(n)?Number(n):NaN;return isNaN(t)?n:t};let Pc;const oa=()=>Pc||(Pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ge(i)?_p(i):Mr(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ge(n)||se(n))return n}const pp=/;(?![^(]*\))/g,mp=/:([^]+)/,gp=/\/\*[^]*?\*\//g;function _p(n){const t={};return n.replace(gp,"").split(pp).forEach(e=>{if(e){const i=e.split(mp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function pn(n){let t="";if(ge(n))t=n;else if(zt(n))for(let e=0;e<n.length;e++){const i=pn(n[e]);i&&(t+=i+" ")}else if(se(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xp=$l(vp);function lf(n){return!!n||n===""}function yp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Jl(n[i],t[i]);return e}function Jl(n,t){if(n===t)return!0;let e=Cc(n),i=Cc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=zn(n),i=zn(t),e||i)return n===t;if(e=zt(n),i=zt(t),e||i)return e&&i?yp(n,t):!1;if(e=se(n),i=se(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Jl(n[o],t[o]))return!1}}return String(n)===String(t)}const cf=n=>!!(n&&n.__v_isRef===!0),Jt=n=>ge(n)?n:n==null?"":zt(n)||se(n)&&(n.toString===sf||!Gt(n.toString))?cf(n)?Jt(n.value):JSON.stringify(n,uf,2):String(n),uf=(n,t)=>cf(t)?uf(n,t.value):Ds(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Aa(i,r)+" =>"]=s,e),{})}:ef(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Aa(e))}:zn(t)?Aa(t):se(t)&&!zt(t)&&!rf(t)?String(t):t,Aa=(n,t="")=>{var e;return zn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ue;class Mp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ue&&(Ue.active?(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ue;try{return Ue=this,t()}finally{Ue=e}}}on(){++this._on===1&&(this.prevScope=Ue,Ue=this)}off(){if(this._on>0&&--this._on===0){if(Ue===this)Ue=this.prevScope;else{let t=Ue;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sp(){return Ue}let le;const wa=new WeakSet;class hf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ue&&(Ue.active?Ue.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||df(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lc(this),pf(this);const t=le,e=An;le=this,An=!0;try{return this.fn()}finally{mf(this),le=t,An=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ec(t);this.deps=this.depsTail=void 0,Lc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let ff=0,cr,ur;function df(n,t=!1){if(n.flags|=8,t){n.next=ur,ur=n;return}n.next=cr,cr=n}function Ql(){ff++}function tc(){if(--ff>0)return;if(ur){let t=ur;for(ur=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;cr;){let t=cr;for(cr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function pf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function mf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),ec(i),Ep(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function El(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(gf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function gf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Sr)||(n.globalVersion=Sr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!El(n))))return;n.flags|=2;const t=n.dep,e=le,i=An;le=n,An=!0;try{pf(n);const s=n.fn(n._value);(t.version===0||Nn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=e,An=i,mf(n),n.flags&=-3}}function ec(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)ec(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ep(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let An=!0;const _f=[];function oi(){_f.push(An),An=!1}function ai(){const n=_f.pop();An=n===void 0?!0:n}function Lc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=le;le=void 0;try{t()}finally{le=e}}}let Sr=0;class bp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!le||!An||le===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==le)e=this.activeLink=new bp(le,this),le.deps?(e.prevDep=le.depsTail,le.depsTail.nextDep=e,le.depsTail=e):le.deps=le.depsTail=e,vf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=le.depsTail,e.nextDep=void 0,le.depsTail.nextDep=e,le.depsTail=e,le.deps===e&&(le.deps=i)}return e}trigger(t){this.version++,Sr++,this.notify(t)}notify(t){Ql();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{tc()}}}function vf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)vf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const bl=new WeakMap,Wi=Symbol(""),Tl=Symbol(""),Er=Symbol("");function Ge(n,t,e){if(An&&le){let i=bl.get(n);i||bl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new nc),s.map=i,s.key=e),s.track()}}function ei(n,t,e,i,s,r){const o=bl.get(n);if(!o){Sr++;return}const a=l=>{l&&l.trigger()};if(Ql(),t==="clear")o.forEach(a);else{const l=zt(n),c=l&&Zl(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Er||!zn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Er)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Wi)),Ds(n)&&a(o.get(Tl)));break;case"delete":l||(a(o.get(Wi)),Ds(n)&&a(o.get(Tl)));break;case"set":Ds(n)&&a(o.get(Wi));break}}tc()}function is(n){const t=ne(n);return t===n?t:(Ge(t,"iterate",Er),gn(n)?t:t.map(wn))}function aa(n){return Ge(n=ne(n),"iterate",Er),n}function Dn(n,t){return li(n)?Fs(Xi(n)?wn(t):t):wn(t)}const Tp={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,n=>Dn(this,n))},concat(...n){return is(this).concat(...n.map(t=>zt(t)?is(t):t))},entries(){return Ra(this,"entries",n=>(n[1]=Dn(this,n[1]),n))},every(n,t){return Wn(this,"every",n,t,void 0,arguments)},filter(n,t){return Wn(this,"filter",n,t,e=>e.map(i=>Dn(this,i)),arguments)},find(n,t){return Wn(this,"find",n,t,e=>Dn(this,e),arguments)},findIndex(n,t){return Wn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Wn(this,"findLast",n,t,e=>Dn(this,e),arguments)},findLastIndex(n,t){return Wn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Wn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ca(this,"includes",n)},indexOf(...n){return Ca(this,"indexOf",n)},join(n){return is(this).join(n)},lastIndexOf(...n){return Ca(this,"lastIndexOf",n)},map(n,t){return Wn(this,"map",n,t,void 0,arguments)},pop(){return qs(this,"pop")},push(...n){return qs(this,"push",n)},reduce(n,...t){return Dc(this,"reduce",n,t)},reduceRight(n,...t){return Dc(this,"reduceRight",n,t)},shift(){return qs(this,"shift")},some(n,t){return Wn(this,"some",n,t,void 0,arguments)},splice(...n){return qs(this,"splice",n)},toReversed(){return is(this).toReversed()},toSorted(n){return is(this).toSorted(n)},toSpliced(...n){return is(this).toSpliced(...n)},unshift(...n){return qs(this,"unshift",n)},values(){return Ra(this,"values",n=>Dn(this,n))}};function Ra(n,t,e){const i=aa(n),s=i[t]();return i!==n&&!gn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Ap=Array.prototype;function Wn(n,t,e,i,s,r){const o=aa(n),a=o!==n&&!gn(n),l=o[t];if(l!==Ap[t]){const h=l.apply(n,r);return a?wn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,Dn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Dc(n,t,e,i){const s=aa(n),r=s!==n&&!gn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Dn(n,c)),e.call(this,c,Dn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Dn(n,l):l}function Ca(n,t,e){const i=ne(n);Ge(i,"iterate",Er);const s=i[t](...e);return(s===-1||s===!1)&&rc(e[0])?(e[0]=ne(e[0]),i[t](...e)):s}function qs(n,t,e=[]){oi(),Ql();const i=ne(n)[t].apply(n,e);return tc(),ai(),i}const wp=$l("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zn));function Rp(n){zn(n)||(n=String(n));const t=ne(this);return Ge(t,"has",n),t.hasOwnProperty(n)}class yf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Bp:bf:r?Ef:Sf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=zt(t);if(!s){let l;if(o&&(l=Tp[e]))return l;if(e==="hasOwnProperty")return Rp}const a=Reflect.get(t,e,Ve(t)?t:i);if((zn(e)?xf.has(e):wp(e))||(s||Ge(t,"get",e),r))return a;if(Ve(a)){const l=o&&Zl(e)?a:a.value;return s&&se(l)?Fo(l):l}return se(a)?s?Fo(a):la(a):a}}class Mf extends yf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=zt(t)&&Zl(e);if(!this._isShallow){const c=li(r);if(!gn(i)&&!li(i)&&(r=ne(r),i=ne(i)),!o&&Ve(r)&&!Ve(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ie(t,e),l=Reflect.set(t,e,i,Ve(t)?t:s);return t===ne(s)&&l&&(a?Nn(i,r)&&ei(t,"set",e,i):ei(t,"add",e,i)),l}deleteProperty(t,e){const i=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ei(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!zn(e)||!xf.has(e))&&Ge(t,"has",e),i}ownKeys(t){return Ge(t,"iterate",zt(t)?"length":Wi),Reflect.ownKeys(t)}}class Cp extends yf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Pp=new Mf,Lp=new Cp,Dp=new Mf(!0);const Al=n=>n,Yr=n=>Reflect.getPrototypeOf(n);function Ip(n,t,e){return function(...i){const s=this.__v_raw,r=ne(s),o=Ds(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Al:t?Fs:wn;return!t&&Ge(r,"iterate",l?Tl:Wi),we(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function $r(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Up(n,t){const e={get(s){const r=this.__v_raw,o=ne(r),a=ne(s);n||(Nn(s,a)&&Ge(o,"get",s),Ge(o,"get",a));const{has:l}=Yr(o),c=t?Al:n?Fs:wn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ge(ne(s),"iterate",Wi),s.size},has(s){const r=this.__v_raw,o=ne(r),a=ne(s);return n||(Nn(s,a)&&Ge(o,"has",s),Ge(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ne(a),c=t?Al:n?Fs:wn;return!n&&Ge(l,"iterate",Wi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return we(e,n?{add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear")}:{add(s){const r=ne(this),o=Yr(r),a=ne(s),l=!t&&!gn(s)&&!li(s)?a:s;return o.has.call(r,l)||Nn(s,l)&&o.has.call(r,s)||Nn(a,l)&&o.has.call(r,a)||(r.add(l),ei(r,"add",l,l)),this},set(s,r){!t&&!gn(r)&&!li(r)&&(r=ne(r));const o=ne(this),{has:a,get:l}=Yr(o);let c=a.call(o,s);c||(s=ne(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Nn(r,u)&&ei(o,"set",s,r):ei(o,"add",s,r),this},delete(s){const r=ne(this),{has:o,get:a}=Yr(r);let l=o.call(r,s);l||(s=ne(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ei(r,"delete",s,void 0),c},clear(){const s=ne(this),r=s.size!==0,o=s.clear();return r&&ei(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ip(s,n,t)}),e}function ic(n,t){const e=Up(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ie(e,s)&&s in i?e:i,s,r)}const Np={get:ic(!1,!1)},Op={get:ic(!1,!0)},Fp={get:ic(!0,!1)};const Sf=new WeakMap,Ef=new WeakMap,bf=new WeakMap,Bp=new WeakMap;function zp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function la(n){return li(n)?n:sc(n,!1,Pp,Np,Sf)}function Hp(n){return sc(n,!1,Dp,Op,Ef)}function Fo(n){return sc(n,!0,Lp,Fp,bf)}function sc(n,t,e,i,s){if(!se(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=zp(cp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Xi(n){return li(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function li(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function rc(n){return n?!!n.__v_raw:!1}function ne(n){const t=n&&n.__v_raw;return t?ne(t):n}function Gp(n){return!ie(n,"__v_skip")&&Object.isExtensible(n)&&af(n,"__v_skip",!0),n}const wn=n=>se(n)?la(n):n,Fs=n=>se(n)?Fo(n):n;function Ve(n){return n?n.__v_isRef===!0:!1}function ue(n){return kp(n,!1)}function kp(n,t){return Ve(n)?n:new Vp(n,t)}class Vp{constructor(t,e){this.dep=new nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ne(t),this._value=e?t:wn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||gn(t)||li(t);t=i?t:ne(t),Nn(t,e)&&(this._rawValue=t,this._value=i?t:wn(t),this.dep.trigger())}}function Fe(n){return Ve(n)?n.value:n}const Wp={get:(n,t,e)=>t==="__v_raw"?n:Fe(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ve(s)&&!Ve(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Tf(n){return Xi(n)?n:new Proxy(n,Wp)}class Xp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return df(this,!0),!0}get value(){const t=this.dep.track();return gf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jp(n,t,e=!1){let i,s;return Gt(n)?i=n:(i=n.get,s=n.set),new Xp(i,s,e)}const Kr={},Bo=new WeakMap;let Bi;function qp(n,t=!1,e=Bi){if(e){let i=Bo.get(e);i||Bo.set(e,i=[]),i.push(n)}}function Yp(n,t,e=ae){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=E=>s?E:gn(E)||s===!1||s===0?ni(E,1):ni(E);let u,h,f,p,g=!1,_=!1;if(Ve(n)?(h=()=>n.value,g=gn(n)):Xi(n)?(h=()=>c(n),g=!0):zt(n)?(_=!0,g=n.some(E=>Xi(E)||gn(E)),h=()=>n.map(E=>{if(Ve(E))return E.value;if(Xi(E))return c(E);if(Gt(E))return l?l(E,2):E()})):Gt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){oi();try{f()}finally{ai()}}const E=Bi;Bi=u;try{return l?l(n,3,[p]):n(p)}finally{Bi=E}}:h=Fn,t&&s){const E=h,w=s===!0?1/0:s;h=()=>ni(E(),w)}const m=Sp(),d=()=>{u.stop(),m&&m.active&&Kl(m.effects,u)};if(r&&t){const E=t;t=(...w)=>{const R=E(...w);return d(),R}}let b=_?new Array(n.length).fill(Kr):Kr;const v=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const w=u.run();if(E||s||g||(_?w.some((R,L)=>Nn(R,b[L])):Nn(w,b))){f&&f();const R=Bi;Bi=u;try{const L=[w,b===Kr?void 0:_&&b[0]===Kr?[]:b,p];b=w,l?l(t,3,L):t(...L)}finally{Bi=R}}}else u.run()};return a&&a(v),u=new hf(h),u.scheduler=o?()=>o(v,!1):v,p=E=>qp(E,!1,u),f=u.onStop=()=>{const E=Bo.get(u);if(E){if(l)l(E,4);else for(const w of E)w();Bo.delete(u)}},t?i?v(!0):b=u.run():o?o(v.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ni(n,t=1/0,e){if(t<=0||!se(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ve(n))ni(n.value,t,e);else if(zt(n))for(let i=0;i<n.length;i++)ni(n[i],t,e);else if(ef(n)||Ds(n))n.forEach(i=>{ni(i,t,e)});else if(rf(n)){for(const i in n)ni(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ni(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fr(n,t,e,i){try{return i?n(...i):n()}catch(s){Br(s,t,e)}}function _n(n,t,e,i){if(Gt(n)){const s=Fr(n,t,e,i);return s&&nf(s)&&s.catch(r=>{Br(r,t,e)}),s}if(zt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(_n(n[r],t,e,i));return s}}function Br(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){oi(),Fr(r,null,10,[n,l,c]),ai();return}}$p(n,e,s,i,o)}function $p(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ye=[];let Pn=-1;const Is=[];let xi=null,As=0;const Af=Promise.resolve();let zo=null;function Kp(n){const t=zo||Af;return n?t.then(this?n.bind(this):n):t}function Zp(n){let t=Pn+1,e=Ye.length;for(;t<e;){const i=t+e>>>1,s=Ye[i],r=br(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function oc(n){if(!(n.flags&1)){const t=br(n),e=Ye[Ye.length-1];!e||!(n.flags&2)&&t>=br(e)?Ye.push(n):Ye.splice(Zp(t),0,n),n.flags|=1,wf()}}function wf(){zo||(zo=Af.then(Cf))}function Jp(n){if(!zt(n))xi&&n.id===-1?xi.splice(As+1,0,n):n.flags&1||(Is.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Is.push(n[t]);wf()}function Ic(n,t,e=Pn+1){for(;e<Ye.length;e++){const i=Ye[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ye.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rf(n){if(Is.length){const t=[...new Set(Is)].sort((e,i)=>br(e)-br(i));if(Is.length=0,xi){for(let e=0;e<t.length;e++)xi.push(t[e]);return}for(xi=t,As=0;As<xi.length;As++){const e=xi[As];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}xi=null,As=0}}const br=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cf(n){try{for(Pn=0;Pn<Ye.length;Pn++){const t=Ye[Pn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Fr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pn<Ye.length;Pn++){const t=Ye[Pn];t&&(t.flags&=-2)}Pn=-1,Ye.length=0,Rf(),zo=null,(Ye.length||Is.length)&&Cf()}}let mn=null,Pf=null;function Ho(n){const t=mn;return mn=n,Pf=n&&n.type.__scopeId||null,t}function Lf(n,t=mn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Wo(-1);const r=Ho(t),o=qi.length;let a;try{a=n(...s)}finally{for(let l=qi.length;l>o;l--)id();Ho(r),i._d&&Wo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Pa(n,t){if(mn===null)return n;const e=da(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ae]=t[s];r&&(Gt(r)&&(r={mounted:r,updated:r}),r.deep&&ni(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Pi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(oi(),_n(l,e,8,[n.el,a,n,t]),ai())}}function Qp(n,t){if(ke){let e=ke.provides;const i=ke.parent&&ke.parent.provides;i===e&&(e=ke.provides=Object.create(i)),e[n]=t}}function Do(n,t,e=!1){const i=ad();if(i||Us){let s=Us?Us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}const tm=Symbol.for("v-scx"),em=()=>Do(tm);function ji(n,t,e){return Df(n,t,e)}function Df(n,t,e=ae){const{immediate:i,deep:s,flush:r,once:o}=e,a=we({},e),l=t&&i||!t&&r!=="post";let c;if(Bs){if(r==="sync"){const p=em();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Fn,p.resume=Fn,p.pause=Fn,p}}const u=ke;a.call=(p,g,_)=>_n(p,u,g,_);let h=!1;r==="post"?a.scheduler=p=>{Je(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():oc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Yp(n,t,a);return Bs&&(c?c.push(f):l&&f()),f}function nm(n,t,e){const i=this.proxy,s=ge(n)?n.includes(".")?If(i,n):()=>i[n]:n.bind(i,i);let r;Gt(t)?r=t:(r=t.handler,e=t);const o=Hr(this),a=Df(s,r.bind(i),e);return o(),a}function If(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const im=Symbol("_vte"),ca=n=>n.__isTeleport,ln=Symbol("_leaveCb"),Ys=Symbol("_enterCb");function sm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ts(()=>{n.isMounted=!0}),Vs(()=>{n.isUnmounting=!0}),n}const on=[Function,Array],Uf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},Nf=n=>{const t=n.subTree;return t.component?Nf(t.component):t},rm={name:"BaseTransition",props:Uf,setup(n,{slots:t}){const e=ad(),i=sm();return()=>{const s=t.default&&Bf(t.default(),!0),r=s&&s.length?Of(s):e.subTree?$e():void 0;if(!r)return;const o=ne(n),{mode:a}=o;if(i.isLeaving)return La(r);const l=Go(r);if(!l)return La(r);let c=wl(l,o,i,e,h=>c=h);l.type!==Ke&&Tr(l,c);let u=e.subTree&&Go(e.subTree);if(u&&u.type!==Ke&&!Hi(u,l)&&Nf(e).type!==Ke){let h=wl(u,o,i,e);if(Tr(u,h),a==="out-in"&&l.type!==Ke)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},La(r);a==="in-out"&&l.type!==Ke?h.delayLeave=(f,p,g)=>{const _=Ff(i,u);_[String(u.key)]=u,f[ln]=()=>{p(),f[ln]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Of(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ke){t=e;break}}return t}const om=rm;function Ff(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function wl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:d,onAfterAppear:b,onAppearCancelled:v}=t,E=String(n.key),w=Ff(e,n),R=(S,A)=>{S&&_n(S,i,9,A)},L=(S,A)=>{const W=A[1];R(S,A),zt(S)?S.every(G=>G.length<=1)&&W():S.length<=1&&W()},Q={mode:o,persisted:a,beforeEnter(S){let A=l;if(!e.isMounted)if(r)A=m||l;else return;S[ln]&&S[ln](!0);const W=w[E];W&&Hi(n,W)&&W.el[ln]&&W.el[ln](),R(A,[S])},enter(S){if(w[E]===n)return;let A=c,W=u,G=h;if(!e.isMounted)if(r)A=d||c,W=b||u,G=v||h;else return;let nt=!1;S[Ys]=X=>{nt||(nt=!0,X?R(G,[S]):R(W,[S]),Q.delayedLeave&&Q.delayedLeave(),S[Ys]=void 0)};const N=S[Ys].bind(null,!1);A?L(A,[S,N]):N()},leave(S,A){const W=String(n.key);if(S[Ys]&&S[Ys](!0),e.isUnmounting)return A();R(f,[S]);let G=!1;S[ln]=N=>{G||(G=!0,A(),N?R(_,[S]):R(g,[S]),S[ln]=void 0,w[W]===n&&delete w[W])};const nt=S[ln].bind(null,!1);w[W]=n,p?L(p,[S,nt]):nt()},clone(S){const A=wl(S,t,e,i,s);return s&&s(A),A}};return Q}function La(n){if(zr(n))return n=wi(n),n.children=null,n}function Go(n){if(!zr(n))return ca(n.type)&&n.children?Of(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function Tr(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Tr(ca(e.type)&&Go(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Bf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===de?(o.patchFlag&128&&s++,i=i.concat(Bf(o.children,t,a))):(t||o.type!==Ke)&&i.push(a!=null?wi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function am(n,t){return Gt(n)?we({name:n.name},t,{setup:n}):n}function ac(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Uc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ko=new WeakMap;function hr(n,t,e,i,s=!1){if(zt(n)){n.forEach((_,m)=>hr(_,t&&(zt(t)?t[m]:t),e,i,s));return}if(fr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&hr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?da(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState,f=ne(h),p=h===ae?tf:_=>Uc(u,_)?!1:ie(f,_),g=(_,m)=>!(m&&Uc(u,m));if(c!=null&&c!==l){if(Nc(t),ge(c))u[c]=null,p(c)&&(h[c]=null);else if(Ve(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Gt(l))Fr(l,a,12,[o,u]);else{const _=ge(l),m=Ve(l);if(_||m){const d=()=>{if(n.f){const b=_?p(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)zt(b)&&Kl(b,r);else if(zt(b))b.includes(r)||b.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else _?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const b=()=>{d(),ko.delete(n)};b.id=-1,ko.set(n,b),Je(b,e)}else Nc(n),d()}}}function Nc(n){const t=ko.get(n);t&&(t.flags|=8,ko.delete(n))}const Oc=n=>n.nodeType===8;oa().requestIdleCallback;oa().cancelIdleCallback;function lm(n,t){if(Oc(n)&&n.data==="["){let e=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(Oc(i))if(i.data==="]"){if(--e===0)break}else i.data==="["&&e++;i=i.nextSibling}}else t(n)}const fr=n=>!!n.type.__asyncLoader;function Da(n){Gt(n)&&(n={loader:n});const{loader:t,loadingComponent:e,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,h=0;const f=()=>(h++,c=null,p()),p=()=>{let g;return c||(g=c=t().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,d)=>{l(_,()=>m(f()),()=>d(_),h+1)});throw _}).then(_=>g!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return am({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(g,_,m){const d=g.isConnected;let b=!1;(_.bu||(_.bu=[])).push(()=>b=!0);const v=()=>{b||!g.parentNode||d&&!g.isConnected||m()},E=r?()=>{const w=r(v,R=>lm(g,R));w&&(_.bum||(_.bum=[])).push(w)}:v;u?E():p().then(()=>!_.isUnmounted&&E())},get __asyncResolved(){return u},setup(){const g=ke;if(ac(g),u)return()=>Zr(u,g);const _=w=>{c=null,Br(w,g,13,!i)};if(a&&g.suspense||Bs)return p().then(w=>()=>Zr(w,g)).catch(w=>(_(w),()=>i?pe(i,{error:w}):null));const m=ue(!1),d=ue(),b=ue(!!s);let v,E;return lc(()=>{v!=null&&clearTimeout(v),E!=null&&clearTimeout(E)}),s&&(E=setTimeout(()=>{g.isUnmounted||(b.value=!1)},s)),o!=null&&(v=setTimeout(()=>{if(!g.isUnmounted&&!m.value&&!d.value){const w=new Error(`Async component timed out after ${o}ms.`);_(w),d.value=w}},o)),p().then(()=>{g.isUnmounted||(m.value=!0,g.parent&&zr(g.parent.vnode)&&g.parent.update())}).catch(w=>{if(g.isUnmounted){c=null;return}_(w),d.value=w}),()=>{if(m.value&&u)return Zr(u,g);if(d.value&&i)return pe(i,{error:d.value});if(e&&!b.value)return Zr(e,g)}}})}function Zr(n,t){const{ref:e,props:i,children:s,ce:r}=t.vnode,o=pe(n,i,s);return o.ref=e,o.ce=r,delete t.vnode.ce,o}const zr=n=>n.type.__isKeepAlive;function cm(n,t){zf(n,"a",t)}function um(n,t){zf(n,"da",t)}function zf(n,t,e=ke){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ua(t,i,e),e){let s=e.parent;for(;s&&s.parent;)zr(s.parent.vnode)&&hm(i,t,e,s),s=s.parent}}function hm(n,t,e,i){const s=ua(t,n,i,!0);lc(()=>{Kl(i[t],s)},e)}function ua(n,t,e=ke,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{oi();const a=Hr(e),l=_n(t,e,n,o);return a(),ai(),l});return i?s.unshift(r):s.push(r),r}}const hi=n=>(t,e=ke)=>{(!Bs||n==="sp")&&ua(n,(...i)=>t(...i),e)},fm=hi("bm"),ts=hi("m"),dm=hi("bu"),pm=hi("u"),Vs=hi("bum"),lc=hi("um"),mm=hi("sp"),gm=hi("rtg"),_m=hi("rtc");function vm(n,t=ke){ua("ec",n,t)}const xm=Symbol.for("v-ndc");function En(n,t,e,i){let s;const r=e,o=zt(n);if(o||ge(n)){const a=o&&Xi(n);let l=!1,c=!1;a&&(l=!gn(n),c=li(n),n=aa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Fs(wn(n[u])):wn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(se(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Rl=n=>n?ld(n)?da(n):Rl(n.parent):null,dr=we(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rl(n.parent),$root:n=>Rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gf(n),$forceUpdate:n=>n.f||(n.f=()=>{oc(n.update)}),$nextTick:n=>n.n||(n.n=Kp.bind(n.proxy)),$watch:n=>nm.bind(n)}),Ia=(n,t)=>n!==ae&&!n.__isScriptSetup&&ie(n,t),ym={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ia(i,t))return o[t]=1,i[t];if(s!==ae&&ie(s,t))return o[t]=2,s[t];if(ie(r,t))return o[t]=3,r[t];if(e!==ae&&ie(e,t))return o[t]=4,e[t];Cl&&(o[t]=0)}}const c=dr[t];let u,h;if(c)return t==="$attrs"&&Ge(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ae&&ie(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,ie(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ia(s,t)?(s[t]=e,!0):i!==ae&&ie(i,t)?(i[t]=e,!0):ie(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ae&&a[0]!=="$"&&ie(n,a)||Ia(t,a)||ie(r,a)||ie(i,a)||ie(dr,a)||ie(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ie(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Fc(n){return zt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Cl=!0;function Mm(n){const t=Gf(n),e=n.proxy,i=n.ctx;Cl=!1,t.beforeCreate&&Bc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:b,destroyed:v,unmounted:E,render:w,renderTracked:R,renderTriggered:L,errorCaptured:Q,serverPrefetch:S,expose:A,inheritAttrs:W,components:G,directives:nt,filters:N}=t;if(c&&Sm(c,i,null),o)for(const z in o){const B=o[z];Gt(B)&&(i[z]=B.bind(e))}if(s){const z=s.call(e,e);se(z)&&(n.data=la(z))}if(Cl=!0,r)for(const z in r){const B=r[z],V=Gt(B)?B.bind(e,e):Gt(B.get)?B.get.bind(e,e):Fn,at=!Gt(B)&&Gt(B.set)?B.set.bind(e):Fn,rt=cn({get:V,set:at});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>rt.value,set:ft=>rt.value=ft})}if(a)for(const z in a)Hf(a[z],i,e,z);if(l){const z=Gt(l)?l.call(e):l;Reflect.ownKeys(z).forEach(B=>{Qp(B,z[B])})}u&&Bc(u,n,"c");function Y(z,B){zt(B)?B.forEach(V=>z(V.bind(e))):B&&z(B.bind(e))}if(Y(fm,h),Y(ts,f),Y(dm,p),Y(pm,g),Y(cm,_),Y(um,m),Y(vm,Q),Y(_m,R),Y(gm,L),Y(Vs,b),Y(lc,E),Y(mm,S),zt(A))if(A.length){const z=n.exposed||(n.exposed={});A.forEach(B=>{Object.defineProperty(z,B,{get:()=>e[B],set:V=>e[B]=V,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Fn&&(n.render=w),W!=null&&(n.inheritAttrs=W),G&&(n.components=G),nt&&(n.directives=nt),S&&ac(n)}function Sm(n,t,e=Fn){zt(n)&&(n=Pl(n));for(const i in n){const s=n[i];let r;se(s)?"default"in s?r=Do(s.from||i,s.default,!0):r=Do(s.from||i):r=Do(s),Ve(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Bc(n,t,e){_n(zt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Hf(n,t,e,i){let s=i.includes(".")?If(e,i):()=>e[i];if(ge(n)){const r=t[n];Gt(r)&&ji(s,r)}else if(Gt(n))ji(s,n.bind(e));else if(se(n))if(zt(n))n.forEach(r=>Hf(r,t,e,i));else{const r=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(r)&&ji(s,r,n)}}function Gf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Vo(l,c,o,!0)),Vo(l,t,o)),se(t)&&r.set(t,l),l}function Vo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Vo(n,r,e,!0),s&&s.forEach(o=>Vo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Em[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Em={data:zc,props:Hc,emits:Hc,methods:sr,computed:sr,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:sr,directives:sr,watch:Tm,provide:zc,inject:bm};function zc(n,t){return t?n?function(){return we(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function bm(n,t){return sr(Pl(n),Pl(t))}function Pl(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Xe(n,t){return n?[...new Set([].concat(n,t))]:t}function sr(n,t){return n?we(Object.create(null),n,t):t}function Hc(n,t){return n?zt(n)&&zt(t)?[...new Set([...n,...t])]:we(Object.create(null),Fc(n),Fc(t??{})):t}function Tm(n,t){if(!n)return t;if(!t)return n;const e=we(Object.create(null),n);for(const i in t)e[i]=Xe(n[i],t[i]);return e}function kf(){return{app:null,config:{isNativeTag:tf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Am=0;function wm(n,t){return function(i,s=null){Gt(i)||(i=we({},i)),s!=null&&!se(s)&&(s=null);const r=kf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Am++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Gt(u.install)?(o.add(u),u.install(c,...h)):Gt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||pe(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,da(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(_n(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Us;Us=c;try{return u()}finally{Us=h}}};return c}}let Us=null;const Rm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Tn(t)}Modifiers`]||n[`${Qi(t)}Modifiers`];function Cm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ae;let s=e;const r=t.startsWith("update:"),o=r&&Rm(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>ge(u)?u.trim():u)),o.number&&(s=e.map(fp)));let a,l=i[a=ba(t)]||i[a=ba(Tn(t))];!l&&r&&(l=i[a=ba(Qi(t))]),l&&_n(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,_n(c,n,6,s)}}const Pm=new WeakMap;function Vf(n,t,e=!1){const i=e?Pm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Gt(n)){const l=c=>{const u=Vf(c,t,!0);u&&(a=!0,we(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(se(n)&&i.set(n,null),null):(zt(r)?r.forEach(l=>o[l]=null):we(o,r),se(n)&&i.set(n,o),o)}function ha(n,t){return!n||!ia(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(n,t[0].toLowerCase()+t.slice(1))||ie(n,Qi(t))||ie(n,t))}function Gc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:_}=n,m=Ho(n);let d,b;try{if(e.shapeFlag&4){const E=s||i,w=E;d=In(c.call(w,E,u,h,p,f,g)),b=a}else{const E=t;d=In(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),b=t.props?a:Lm(a)}}catch(E){qi.length=0,Br(E,n,1),d=pe(Ke)}let v=d;if(b&&_!==!1){const E=Object.keys(b),{shapeFlag:w}=v;E.length&&w&7&&(r&&E.some(sa)&&(b=Dm(b,r)),v=wi(v,b,!1,!0))}if(e.dirs&&(v=wi(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition){const E=ca(v.type)&&Go(v)||v;Tr(E,e.transition)}return d=v,Ho(m),d}const Lm=n=>{let t;for(const e in n)(e==="class"||e==="style"||ia(e))&&((t||(t={}))[e]=n[e]);return t},Dm=(n,t)=>{const e={};for(const i in n)(!sa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Im(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?kc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Wf(o,i,f)&&!ha(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?kc(i,o,c):!0:!!o;return!1}function kc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Wf(t,n,r)&&!ha(e,r))return!0}return!1}function Wf(n,t,e){const i=n[e],s=t[e];return e==="style"&&se(i)&&se(s)?!Jl(i,s):i!==s}function Um({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Xf={},jf=()=>Object.create(Xf),qf=n=>Object.getPrototypeOf(n)===Xf;function Nm(n,t,e,i=!1){const s={},r=jf();n.propsDefaults=Object.create(null),Yf(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Hp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Om(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ne(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ha(n.emitsOptions,f))continue;const p=t[f];if(l)if(ie(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Tn(f);s[g]=Ll(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Yf(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ie(t,h)&&((u=Qi(h))===h||!ie(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ll(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ie(t,h))&&(delete r[h],c=!0)}c&&ei(n.attrs,"set","")}function Yf(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(lr(l))continue;const c=t[l];let u;s&&ie(s,u=Tn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ha(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ne(e),c=a||ae;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ll(s,l,h,c[h],n,!ie(c,h))}}return o}function Ll(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Gt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Hr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Qi(e))&&(i=!0))}return i}const Fm=new WeakMap;function $f(n,t,e=!1){const i=e?Fm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Gt(n)){const u=h=>{l=!0;const[f,p]=$f(h,t,!0);we(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return se(n)&&i.set(n,Ls),Ls;if(zt(r))for(let u=0;u<r.length;u++){const h=Tn(r[u]);Vc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=Tn(u);if(Vc(h)){const f=r[u],p=o[h]=zt(f)||Gt(f)?{type:f}:we({},f),g=p.type;let _=!1,m=!0;if(zt(g))for(let d=0;d<g.length;++d){const b=g[d],v=Gt(b)&&b.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=Gt(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||ie(p,"default"))&&a.push(h)}}const c=[o,a];return se(n)&&i.set(n,c),c}function Vc(n){return n[0]!=="$"&&!lr(n)}const cc=n=>n==="_"||n==="_ctx"||n==="$stable",uc=n=>zt(n)?n.map(In):[In(n)],Bm=(n,t,e)=>{if(t._n)return t;const i=Lf((...s)=>uc(t(...s)),e);return i._c=!1,i},Kf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(cc(s))continue;const r=n[s];if(Gt(r))t[s]=Bm(s,r,i);else if(r!=null){const o=uc(r);t[s]=()=>o}}},Zf=(n,t)=>{const e=uc(t);n.slots.default=()=>e},Jf=(n,t,e)=>{for(const i in t)(e||!cc(i))&&(n[i]=t[i])},zm=(n,t,e)=>{const i=n.slots=jf();if(n.vnode.shapeFlag&32){const s=t._;s?(Jf(i,t,e),e&&af(i,"_",s,!0)):Kf(t,i)}else t&&Zf(n,t)},Hm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ae;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Jf(s,t,e):(r=!t.$stable,Kf(t,s)),o=t}else t&&(Zf(n,t),o={default:1});if(r)for(const a in s)!cc(a)&&o[a]==null&&delete s[a]},Je=Xm;function Gm(n){return km(n)}function km(n,t){const e=oa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Fn,insertStaticContent:g}=n,_=(y,O,H,$=null,j=null,et=null,st=void 0,M=null,x=!!O.dynamicChildren)=>{if(y===O)return;y&&!Hi(y,O)&&($=Et(y),ft(y,j,et,!0),y=null),O.patchFlag===-2&&(x=!1,O.dynamicChildren=null);const{type:D,ref:I,shapeFlag:C}=O;switch(D){case fa:m(y,O,H,$);break;case Ke:d(y,O,H,$);break;case Io:y==null&&b(O,H,$,st);break;case de:G(y,O,H,$,j,et,st,M,x);break;default:C&1?w(y,O,H,$,j,et,st,M,x):C&6?nt(y,O,H,$,j,et,st,M,x):(C&64||C&128)&&D.process(y,O,H,$,j,et,st,M,x,bt)}I!=null&&j?hr(I,y&&y.ref,et,O||y,!O):I==null&&y&&y.ref!=null&&hr(y.ref,null,et,y,!0)},m=(y,O,H,$)=>{if(y==null)i(O.el=a(O.children),H,$);else{const j=O.el=y.el;O.children!==y.children&&c(j,O.children)}},d=(y,O,H,$)=>{y==null?i(O.el=l(O.children||""),H,$):O.el=y.el},b=(y,O,H,$)=>{[y.el,y.anchor]=g(y.children,O,H,$,y.el,y.anchor)},v=({el:y,anchor:O},H,$)=>{let j;for(;y&&y!==O;)j=f(y),i(y,H,$),y=j;i(O,H,$)},E=({el:y,anchor:O})=>{let H;for(;y&&y!==O;)H=f(y),s(y),y=H;s(O)},w=(y,O,H,$,j,et,st,M,x)=>{if(O.type==="svg"?st="svg":O.type==="math"&&(st="mathml"),y==null)R(O,H,$,j,et,st,M,x);else{const D=y.el&&y.el._isVueCE?y.el:null;try{D&&D._beginPatch(),S(y,O,j,et,st,M,x)}finally{D&&D._endPatch()}}},R=(y,O,H,$,j,et,st,M)=>{let x,D;const{props:I,shapeFlag:C,transition:k,dirs:it}=y;if(x=y.el=o(y.type,et,I&&I.is,I),C&8?u(x,y.children):C&16&&Q(y.children,x,null,$,j,Ua(y,et),st,M),it&&Pi(y,null,$,"created"),L(x,y,y.scopeId,st,$),I){for(const ht in I)ht!=="value"&&!lr(ht)&&r(x,ht,null,I[ht],et,$);"value"in I&&r(x,"value",null,I.value,et),(D=I.onVnodeBeforeMount)&&Cn(D,$,y)}it&&Pi(y,null,$,"beforeMount");const ut=Vm(j,k);ut&&k.beforeEnter(x),i(x,O,H),((D=I&&I.onVnodeMounted)||ut||it)&&Je(()=>{try{D&&Cn(D,$,y),ut&&k.enter(x),it&&Pi(y,null,$,"mounted")}finally{}},j)},L=(y,O,H,$,j)=>{if(H&&p(y,H),$)for(let et=0;et<$.length;et++)p(y,$[et]);if(j){let et=j.subTree;if(O===et||nd(et.type)&&(et.ssContent===O||et.ssFallback===O)){const st=j.vnode;L(y,st,st.scopeId,st.slotScopeIds,j.parent)}}},Q=(y,O,H,$,j,et,st,M,x=0)=>{for(let D=x;D<y.length;D++){const I=y[D]=M?ti(y[D]):In(y[D]);_(null,I,O,H,$,j,et,st,M)}},S=(y,O,H,$,j,et,st)=>{const M=O.el=y.el;let{patchFlag:x,dynamicChildren:D,dirs:I}=O;x|=y.patchFlag&16;const C=y.props||ae,k=O.props||ae;let it;if(H&&Li(H,!1),(it=k.onVnodeBeforeUpdate)&&Cn(it,H,O,y),I&&Pi(O,y,H,"beforeUpdate"),H&&Li(H,!0),D&&(!y.dynamicChildren||y.dynamicChildren.length!==D.length)&&(x=0,st=!1,D=null),(C.innerHTML&&k.innerHTML==null||C.textContent&&k.textContent==null)&&u(M,""),D?A(y.dynamicChildren,D,M,H,$,Ua(O,j),et):st||B(y,O,M,null,H,$,Ua(O,j),et,!1),x>0){if(x&16)W(M,C,k,H,j);else if(x&2&&C.class!==k.class&&r(M,"class",null,k.class,j),x&4&&r(M,"style",C.style,k.style,j),x&8){const ut=O.dynamicProps;for(let ht=0;ht<ut.length;ht++){const vt=ut[ht],At=C[vt],lt=k[vt];(lt!==At||vt==="value")&&r(M,vt,At,lt,j,H)}}x&1&&y.children!==O.children&&u(M,O.children)}else!st&&D==null&&W(M,C,k,H,j);((it=k.onVnodeUpdated)||I)&&Je(()=>{it&&Cn(it,H,O,y),I&&Pi(O,y,H,"updated")},$)},A=(y,O,H,$,j,et,st)=>{for(let M=0;M<O.length;M++){const x=y[M],D=O[M],I=x.el&&(x.type===de||!Hi(x,D)||x.shapeFlag&198)?h(x.el):H;_(x,D,I,null,$,j,et,st,!0)}},W=(y,O,H,$,j)=>{if(O!==H){if(O!==ae)for(const et in O)!lr(et)&&!(et in H)&&r(y,et,O[et],null,j,$);for(const et in H){if(lr(et))continue;const st=H[et],M=O[et];st!==M&&et!=="value"&&r(y,et,M,st,j,$)}"value"in H&&r(y,"value",O.value,H.value,j)}},G=(y,O,H,$,j,et,st,M,x)=>{const D=O.el=y?y.el:a(""),I=O.anchor=y?y.anchor:a("");let{patchFlag:C,dynamicChildren:k,slotScopeIds:it}=O;it&&(M=M?M.concat(it):it),y==null?(i(D,H,$),i(I,H,$),Q(O.children||[],H,I,j,et,st,M,x)):C>0&&C&64&&k&&y.dynamicChildren&&y.dynamicChildren.length===k.length?(A(y.dynamicChildren,k,H,j,et,st,M),(O.key!=null||j&&O===j.subTree)&&Qf(y,O,!0)):B(y,O,H,I,j,et,st,M,x)},nt=(y,O,H,$,j,et,st,M,x)=>{O.slotScopeIds=M,y==null?O.shapeFlag&512?j.ctx.activate(O,H,$,st,x):N(O,H,$,j,et,st,x):X(y,O,x)},N=(y,O,H,$,j,et,st)=>{const M=y.component=Zm(y,$,j);if(zr(y)&&(M.ctx.renderer=bt),Jm(M,!1,st),M.asyncDep){if(j&&j.registerDep(M,Y,st),!y.el){const x=M.subTree=pe(Ke);d(null,x,O,H),y.placeholder=x.el}}else Y(M,y,O,H,j,et,st)},X=(y,O,H)=>{const $=O.component=y.component;if(Im(y,O,H))if($.asyncDep&&!$.asyncResolved){z($,O,H);return}else $.next=O,$.update();else O.el=y.el,$.vnode=O},Y=(y,O,H,$,j,et,st)=>{const M=()=>{if(y.isMounted){let{next:C,bu:k,u:it,parent:ut,vnode:ht}=y;{const Nt=td(y);if(Nt){C&&(C.el=ht.el,z(y,C,st)),Nt.asyncDep.then(()=>{Je(()=>{y.isUnmounted||D()},j)});return}}let vt=C,At;Li(y,!1),C?(C.el=ht.el,z(y,C,st)):C=ht,k&&Ta(k),(At=C.props&&C.props.onVnodeBeforeUpdate)&&Cn(At,ut,C,ht),Li(y,!0);const lt=Gc(y),Wt=y.subTree;y.subTree=lt,_(Wt,lt,h(Wt.el),Et(Wt),y,j,et),C.el=lt.el,vt===null&&Um(y,lt.el),it&&Je(it,j),(At=C.props&&C.props.onVnodeUpdated)&&Je(()=>Cn(At,ut,C,ht),j)}else{let C;const{el:k,props:it}=O,{bm:ut,m:ht,parent:vt,root:At,type:lt}=y,Wt=fr(O);Li(y,!1),ut&&Ta(ut),!Wt&&(C=it&&it.onVnodeBeforeMount)&&Cn(C,vt,O),Li(y,!0);{At.ce&&At.ce._hasShadowRoot()&&At.ce._injectChildStyle(lt,y.parent?y.parent.type:void 0);const Nt=y.subTree=Gc(y);_(null,Nt,H,$,y,j,et),O.el=Nt.el}if(ht&&Je(ht,j),!Wt&&(C=it&&it.onVnodeMounted)){const Nt=O;Je(()=>Cn(C,vt,Nt),j)}(O.shapeFlag&256||vt&&fr(vt.vnode)&&vt.vnode.shapeFlag&256)&&y.a&&Je(y.a,j),y.isMounted=!0,O=H=$=null}};y.scope.on();const x=y.effect=new hf(M);y.scope.off();const D=y.update=x.run.bind(x),I=y.job=x.runIfDirty.bind(x);I.i=y,I.id=y.uid,x.scheduler=()=>oc(I),Li(y,!0),D()},z=(y,O,H)=>{O.component=y;const $=y.vnode.props;y.vnode=O,y.next=null,Om(y,O.props,$,H),Hm(y,O.children,H),oi(),Ic(y),ai()},B=(y,O,H,$,j,et,st,M,x=!1)=>{const D=y&&y.children,I=y?y.shapeFlag:0,C=O.children,{patchFlag:k,shapeFlag:it}=O;if(k>0){if(k&128){at(D,C,H,$,j,et,st,M,x);return}else if(k&256){V(D,C,H,$,j,et,st,M,x);return}}it&8?(I&16&&_t(D,j,et),C!==D&&u(H,C)):I&16?it&16?at(D,C,H,$,j,et,st,M,x):_t(D,j,et,!0):(I&8&&u(H,""),it&16&&Q(C,H,$,j,et,st,M,x))},V=(y,O,H,$,j,et,st,M,x)=>{y=y||Ls,O=O||Ls;const D=y.length,I=O.length,C=Math.min(D,I);let k;for(k=0;k<C;k++){const it=O[k]=x?ti(O[k]):In(O[k]);_(y[k],it,H,null,j,et,st,M,x)}D>I?_t(y,j,et,!0,!1,C):Q(O,H,$,j,et,st,M,x,C)},at=(y,O,H,$,j,et,st,M,x)=>{let D=0;const I=O.length;let C=y.length-1,k=I-1;for(;D<=C&&D<=k;){const it=y[D],ut=O[D]=x?ti(O[D]):In(O[D]);if(Hi(it,ut))_(it,ut,H,null,j,et,st,M,x);else break;D++}for(;D<=C&&D<=k;){const it=y[C],ut=O[k]=x?ti(O[k]):In(O[k]);if(Hi(it,ut))_(it,ut,H,null,j,et,st,M,x);else break;C--,k--}if(D>C){if(D<=k){const it=k+1,ut=it<I?O[it].el:$;for(;D<=k;)_(null,O[D]=x?ti(O[D]):In(O[D]),H,ut,j,et,st,M,x),D++}}else if(D>k)for(;D<=C;)ft(y[D],j,et,!0),D++;else{const it=D,ut=D,ht=new Map;for(D=ut;D<=k;D++){const xt=O[D]=x?ti(O[D]):In(O[D]);xt.key!=null&&ht.set(xt.key,D)}let vt,At=0;const lt=k-ut+1;let Wt=!1,Nt=0;const Ut=new Array(lt);for(D=0;D<lt;D++)Ut[D]=0;for(D=it;D<=C;D++){const xt=y[D];if(At>=lt){ft(xt,j,et,!0);continue}let P;if(xt.key!=null)P=ht.get(xt.key);else for(vt=ut;vt<=k;vt++)if(Ut[vt-ut]===0&&Hi(xt,O[vt])){P=vt;break}P===void 0?ft(xt,j,et,!0):(Ut[P-ut]=D+1,P>=Nt?Nt=P:Wt=!0,_(xt,O[P],H,null,j,et,st,M,x),At++)}const Lt=Wt?Wm(Ut):Ls;for(vt=Lt.length-1,D=lt-1;D>=0;D--){const xt=ut+D,P=O[xt],pt=O[xt+1],Ct=xt+1<I?pt.el||ed(pt):$;Ut[D]===0?_(null,P,H,Ct,j,et,st,M,x):Wt&&(vt<0||D!==Lt[vt]?rt(P,H,Ct,2):vt--)}}},rt=(y,O,H,$,j=null)=>{const{el:et,type:st,transition:M,children:x,shapeFlag:D}=y;if(D&6){rt(y.component.subTree,O,H,$);return}if(D&128){y.suspense.move(O,H,$);return}if(D&64){st.move(y,O,H,bt);return}if(st===de){i(et,O,H);for(let C=0;C<x.length;C++)rt(x[C],O,H,$);i(y.anchor,O,H);return}if(st===Io){v(y,O,H);return}if($!==2&&D&1&&M)if($===0)M.persisted&&!et[ln]?i(et,O,H):(M.beforeEnter(et),i(et,O,H),Je(()=>M.enter(et),j));else{const{leave:C,delayLeave:k,afterLeave:it}=M,ut=()=>{y.ctx.isUnmounted?s(et):i(et,O,H)},ht=()=>{const vt=et._isLeaving||!!et[ln];et._isLeaving&&et[ln](!0),M.persisted&&!vt?ut():C(et,()=>{ut(),it&&it()})};k?k(et,ut,ht):ht()}else i(et,O,H)},ft=(y,O,H,$=!1,j=!1)=>{const{type:et,props:st,ref:M,children:x,dynamicChildren:D,shapeFlag:I,patchFlag:C,dirs:k,cacheIndex:it,memo:ut}=y;if(C===-2&&(j=!1),M!=null&&(oi(),hr(M,null,H,y,!0),ai()),it!=null&&(O.renderCache[it]=void 0),I&256){O.ctx.deactivate(y);return}const ht=I&1&&k,vt=!fr(y);let At;if(vt&&(At=st&&st.onVnodeBeforeUnmount)&&Cn(At,O,y),I&6)mt(y.component,H,$);else{if(I&128){y.suspense.unmount(H,$);return}ht&&Pi(y,null,O,"beforeUnmount"),I&64?y.type.remove(y,O,H,bt,$):D&&!D.hasOnce&&(et!==de||C>0&&C&64)?_t(D,O,H,!1,!0):(et===de&&C&384||!j&&I&16)&&_t(x,O,H),$&&K(y)}const lt=ut!=null&&it==null;(vt&&(At=st&&st.onVnodeUnmounted)||ht||lt)&&Je(()=>{At&&Cn(At,O,y),ht&&Pi(y,null,O,"unmounted"),lt&&(y.el=null)},H)},K=y=>{const{type:O,el:H,anchor:$,transition:j}=y;if(O===de){ct(H,$);return}if(O===Io){E(y);return}const et=()=>{s(H),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(y.shapeFlag&1&&j&&!j.persisted){const{leave:st,delayLeave:M}=j,x=()=>st(H,et);M?M(y.el,et,x):x()}else et()},ct=(y,O)=>{let H;for(;y!==O;)H=f(y),s(y),y=H;s(O)},mt=(y,O,H)=>{const{bum:$,scope:j,job:et,subTree:st,um:M,m:x,a:D}=y;Wc(x),Wc(D),$&&Ta($),j.stop(),et&&(et.flags|=8,ft(st,y,O,H)),M&&Je(M,O),Je(()=>{y.isUnmounted=!0},O)},_t=(y,O,H,$=!1,j=!1,et=0)=>{for(let st=et;st<y.length;st++)ft(y[st],O,H,$,j)},Et=y=>{if(y.shapeFlag&6)return Et(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const O=f(y.anchor||y.el),H=O&&O[im];return H?f(H):O};let Rt=!1;const Pt=(y,O,H)=>{let $;y==null?O._vnode&&(ft(O._vnode,null,null,!0),$=O._vnode.component):_(O._vnode||null,y,O,null,null,null,H),O._vnode=y,Rt||(Rt=!0,Ic($),Rf(),Rt=!1)},bt={p:_,um:ft,m:rt,r:K,mt:N,mc:Q,pc:B,pbc:A,n:Et,o:n};return{render:Pt,hydrate:void 0,createApp:wm(Pt)}}function Ua({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Li({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Vm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Qf(n,t,e=!1){const i=n.children,s=t.children;if(zt(i)&&zt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ti(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Qf(o,a)),a.type===fa&&(a.patchFlag===-1&&(a=s[r]=ti(a)),a.el=o.el),a.type===Ke&&!a.el&&(a.el=o.el)}}function Wm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function td(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:td(t)}function Wc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ed(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ed(t.subTree):null}const nd=n=>n.__isSuspense;function Xm(n,t){t&&t.pendingBranch?zt(n)?t.effects.push(...n):t.effects.push(n):Jp(n)}const de=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),qi=[];let sn=null;function Bt(n=!1){qi.push(sn=n?null:[])}function id(){qi.pop(),sn=qi[qi.length-1]||null}let Ar=1;function Wo(n,t=!1){Ar+=n,n<0&&sn&&t&&(sn.hasOnce=!0)}function sd(n){return n.dynamicChildren=Ar>0?sn||Ls:null,id(),Ar>0&&sn&&sn.push(n),n}function kt(n,t,e,i,s,r){return sd(ot(n,t,e,i,s,r,!0))}function pr(n,t,e,i,s){return sd(pe(n,t,e,i,s,!0))}function Xo(n){return n?n.__v_isVNode===!0:!1}function Hi(n,t){return n.type===t.type&&n.key===t.key}const rd=({key:n})=>n??null,Uo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||Ve(n)||Gt(n)?{i:mn,r:n,k:t,f:!!e}:n:null);function ot(n,t=null,e=null,i=0,s=null,r=n===de?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&rd(t),ref:t&&Uo(t),scopeId:Pf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(jo(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),Ar>0&&!o&&sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&sn.push(l),l}const pe=jm;function jm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===xm)&&(n=Ke),Xo(n)){const a=wi(n,t,!0);return e&&jo(a,e),Ar>0&&!r&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag=-2,a}if(ng(n)&&(n=n.__vccOpts),t){t=qm(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=pn(a)),se(l)&&(rc(l)&&!zt(l)&&(l=we({},l)),t.style=Mr(l))}const o=ge(n)?1:nd(n)?128:ca(n)?64:se(n)?4:Gt(n)?2:0;return ot(n,t,e,i,s,o,r,!0)}function qm(n){return n?rc(n)||qf(n)?we({},n):n:null}function wi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Ym(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&rd(c),ref:t&&t.ref?e&&r?zt(r)?r.concat(Uo(t)):[r,Uo(t)]:Uo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==de?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wi(n.ssContent),ssFallback:n.ssFallback&&wi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Tr(u,l.clone(u)),u}function ri(n=" ",t=0){return pe(fa,null,n,t)}function od(n,t){const e=pe(Io,null,n);return e.staticCount=t,e}function $e(n="",t=!1){return t?(Bt(),pr(Ke,null,n)):pe(Ke,null,n)}function In(n){return n==null||typeof n=="boolean"?pe(Ke):zt(n)?pe(de,null,n.slice()):Xo(n)?ti(n):pe(fa,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wi(n)}function jo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(zt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),jo(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!qf(t)?t._ctx=mn:s===3&&mn&&(mn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Gt(t)){if(i&65){jo(n,{default:t});return}t={default:t,_ctx:mn},e=32}else t=String(t),i&64?(e=16,t=[ri(t)]):e=8;n.children=t,n.shapeFlag|=e}function Ym(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=pn([t.class,i.class]));else if(s==="style")t.style=Mr([t.style,i.style]);else if(ia(s)){const r=t[s],o=i[s];o&&r!==o&&!(zt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!sa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Cn(n,t,e,i=null){_n(n,t,7,[e,i])}const $m=kf();let Km=0;function Zm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||$m,r={uid:Km++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$f(i,s),emitsOptions:Vf(i,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:i.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Cm.bind(null,r),n.ce&&n.ce(r),r}let ke=null;const ad=()=>ke||mn;let qo,wr;{const n=oa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qo=t("__VUE_INSTANCE_SETTERS__",e=>ke=e),wr=t("__VUE_SSR_SETTERS__",e=>Bs=e)}const Hr=n=>{const t=ke;return qo(n),n.scope.on(),()=>{n.scope.off(),qo(t)}},Xc=()=>{ke&&ke.scope.off(),qo(null)};function ld(n){return n.vnode.shapeFlag&4}let Bs=!1;function Jm(n,t=!1,e=!1){t&&wr(t);const{props:i,children:s}=n.vnode,r=ld(n);Nm(n,i,r,t),zm(n,s,e||t);const o=r?Qm(n,t):void 0;return t&&wr(!1),o}function Qm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ym);const{setup:i}=e;if(i){oi();const s=n.setupContext=i.length>1?eg(n):null,r=Hr(n),o=Fr(i,n,0,[n.props,s]),a=nf(o);if(ai(),r(),(a||n.sp)&&!fr(n)&&ac(n),a){if(o.then(Xc,Xc),t)return o.then(l=>{wr(!0);try{jc(n,l,t)}finally{wr(!1)}}).catch(l=>{Br(l,n,0)});n.asyncDep=o}else jc(n,o)}else cd(n)}function jc(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:se(t)&&(n.setupState=Tf(t)),cd(n)}function cd(n,t,e){const i=n.type;n.render||(n.render=i.render||Fn);{const s=Hr(n);oi();try{Mm(n)}finally{ai(),s()}}}const tg={get(n,t){return Ge(n,"get",""),n[t]}};function eg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,tg),slots:n.slots,emit:n.emit,expose:t}}function da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Tf(Gp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in dr)return dr[e](n)},has(t,e){return e in t||e in dr}})):n.proxy}function ng(n){return Gt(n)&&"__vccOpts"in n}const cn=(n,t)=>jp(n,t,Bs);function ig(n,t,e){try{Wo(-1);const i=arguments.length;return i===2?se(t)&&!zt(t)?Xo(t)?pe(n,null,[t]):pe(n,t):pe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Xo(e)&&(e=[e]),pe(n,t,e))}finally{Wo(1)}}const sg="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dl;const qc=typeof window<"u"&&window.trustedTypes;if(qc)try{Dl=qc.createPolicy("vue",{createHTML:n=>n})}catch{}const ud=Dl?n=>Dl.createHTML(n):n=>n,rg="http://www.w3.org/2000/svg",og="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Yc=Jn&&Jn.createElement("template"),ag={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Jn.createElementNS(rg,n):t==="mathml"?Jn.createElementNS(og,n):e?Jn.createElement(n,{is:e}):Jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Jn.createTextNode(n),createComment:n=>Jn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Yc.innerHTML=ud(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Yc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},fi="transition",$s="animation",Rr=Symbol("_vtc"),hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lg=we({},Uf,hd),cg=n=>(n.displayName="Transition",n.props=lg,n),ug=cg((n,{slots:t})=>ig(om,hg(n),t)),Di=(n,t=[])=>{zt(n)?n.forEach(e=>e(...t)):n&&n(...t)},$c=n=>n?zt(n)?n.some(t=>t.length>1):n.length>1:!1;function hg(n){const t={};for(const G in n)G in hd||(t[G]=n[G]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,g=fg(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:b,onEnterCancelled:v,onLeave:E,onLeaveCancelled:w,onBeforeAppear:R=d,onAppear:L=b,onAppearCancelled:Q=v}=t,S=(G,nt,N,X)=>{G._enterCancelled=X,Ii(G,nt?u:a),Ii(G,nt?c:o),N&&N()},A=(G,nt)=>{G._isLeaving=!1,Ii(G,h),Ii(G,p),Ii(G,f),nt&&nt()},W=G=>(nt,N)=>{const X=G?L:b,Y=()=>S(nt,G,N);Di(X,[nt,Y]),Kc(()=>{Ii(nt,G?l:r),Xn(nt,G?u:a),$c(X)||Zc(nt,i,_,Y)})};return we(t,{onBeforeEnter(G){Di(d,[G]),Xn(G,r),Xn(G,o)},onBeforeAppear(G){Di(R,[G]),Xn(G,l),Xn(G,c)},onEnter:W(!1),onAppear:W(!0),onLeave(G,nt){G._isLeaving=!0;const N=()=>A(G,nt);Xn(G,h),G._enterCancelled?(Xn(G,f),tu(G)):(tu(G),Xn(G,f)),Kc(()=>{G._isLeaving&&(Ii(G,h),Xn(G,p),$c(E)||Zc(G,i,m,N))}),Di(E,[G,N])},onEnterCancelled(G){S(G,!1,void 0,!0),Di(v,[G])},onAppearCancelled(G){S(G,!0,void 0,!0),Di(Q,[G])},onLeaveCancelled(G){A(G),Di(w,[G])}})}function fg(n){if(n==null)return null;if(se(n))return[Na(n.enter),Na(n.leave)];{const t=Na(n);return[t,t]}}function Na(n){return dp(n)}function Xn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Rr]||(n[Rr]=new Set)).add(t)}function Ii(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Rr];e&&(e.delete(t),e.size||(n[Rr]=void 0))}function Kc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let dg=0;function Zc(n,t,e,i){const s=n._endId=++dg,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=pg(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function pg(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${fi}Delay`),r=i(`${fi}Duration`),o=Jc(s,r),a=i(`${$s}Delay`),l=i(`${$s}Duration`),c=Jc(a,l);let u=null,h=0,f=0;t===fi?o>0&&(u=fi,h=o,f=r.length):t===$s?c>0&&(u=$s,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?fi:$s:null,f=u?u===fi?r.length:l.length:0);const p=u===fi&&/\b(?:transform|all)(?:,|$)/.test(i(`${fi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Jc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Qc(e)+Qc(n[i])))}function Qc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function tu(n){return(n?n.ownerDocument:document).body.offsetHeight}function mg(n,t,e){const i=n[Rr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Yo=Symbol("_vod"),fd=Symbol("_vsh"),Oa={name:"show",beforeMount(n,{value:t},{transition:e}){n[Yo]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Ks(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Ks(n,!0),i.enter(n)):i.leave(n,()=>{Ks(n,!1)}):Ks(n,t))},beforeUnmount(n,{value:t}){Ks(n,t)}};function Ks(n,t){n.style.display=t?n[Yo]:"none",n[fd]=!t}const gg=Symbol(""),_g=/(?:^|;)\s*display\s*:/;function vg(n,t,e){const i=n.style,s=ge(e);let r=!1;if(e&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&rr(i,a,"")}else for(const o in t)e[o]==null&&rr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?yg(n,o,!ge(t)&&t?t[o]:void 0,a)||rr(i,o,a):rr(i,o,"")}}else if(s){if(t!==e){const o=i[gg];o&&(e+=";"+o),i.cssText=e,r=_g.test(e)}}else t&&n.removeAttribute("style");Yo in n&&(n[Yo]=r?i.display:"",n[fd]&&(i.display="none"))}const eu=/\s*!important$/;function rr(n,t,e){if(zt(e))e.forEach(i=>rr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=xg(n,t);eu.test(e)?n.setProperty(Qi(i),e.replace(eu,""),"important"):n[i]=e}}const nu=["Webkit","Moz","ms"],Fa={};function xg(n,t){const e=Fa[t];if(e)return e;let i=Tn(t);if(i!=="filter"&&i in n)return Fa[t]=i;i=of(i);for(let s=0;s<nu.length;s++){const r=nu[s]+i;if(r in n)return Fa[t]=r}return t}function yg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ge(i)&&e===i}const iu="http://www.w3.org/1999/xlink";function su(n,t,e,i,s,r=xp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(iu,t.slice(6,t.length)):n.setAttributeNS(iu,t,e):e==null||r&&!lf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":zn(e)?String(e):e)}function ru(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?ud(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=lf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Mg(n,t,e,i){n.addEventListener(t,e,i)}function Sg(n,t,e,i){n.removeEventListener(t,e,i)}const ou=Symbol("_vei");function Eg(n,t,e,i,s=null){const r=n[ou]||(n[ou]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Ag(t);if(i){const c=r[t]=Cg(i,s);Mg(n,a,c,l)}else o&&(Sg(n,a,o,l),r[t]=void 0)}}const bg=/(Once|Passive|Capture)$/,Tg=/^on:?(?:Once|Passive|Capture)$/;function Ag(n){let t,e;for(;(e=n.match(bg))&&!Tg.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Qi(n.slice(2)),t]}let Ba=0;const wg=Promise.resolve(),Rg=()=>Ba||(wg.then(()=>Ba=0),Ba=Date.now());function Cg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(zt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&_n(c,t,5,a)}}else _n(s,t,5,[i])};return e.value=n,e.attached=Rg(),e}const au=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Pg=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?mg(n,i,o):t==="style"?vg(n,e,i):ia(t)?sa(t)||Eg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lg(n,t,i,o))?(ru(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&su(n,t,i,o,r,t!=="value")):n._isVueCE&&(Dg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!ge(i)))?ru(n,Tn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),su(n,t,i,o))};function Lg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&au(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return au(t)&&ge(e)?!1:t in n}function Dg(n,t){const e=n._def.props;if(!e)return!1;const i=Tn(t);return Array.isArray(e)?e.some(s=>Tn(s)===i):Object.keys(e).some(s=>Tn(s)===i)}const Ig=["ctrl","shift","alt","meta"],Ug={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Ig.some(e=>n[`${e}Key`]&&!t.includes(e))},Ng=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=Ug[t[o]];if(a&&a(s,t))return}return n(s,...r)})},Og=we({patchProp:Pg},ag);let lu;function Fg(){return lu||(lu=Gm(Og))}const Bg=(...n)=>{const t=Fg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Hg(i);if(!s)return;const r=t._component;!Gt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,zg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function zg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Hg(n){return ge(n)?document.querySelector(n):n}const Gg="modulepreload",kg=function(n,t){return new URL(n,t).href},cu={},No=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=kg(c,i),c in cu)return;cu[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Gg,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Vg={name:"小枫",enName:"Maple",title:"项目财务管理 · 报表统筹 · 业财融合",birth:"1999.04",phone:"17373513347",email:"235307012@qq.com",location:"广州番禺",joinDate:"2022.07",company:"中建四局交通投资建设有限公司广州分公司",summary:"在工程财务一线摸爬滚打 4 年：管过账、编过表、跑过税局、砍过成本。现在正做一件让自己兴奋的事——把 AI 和数据揉进财务里，让每一笔数据都能开口说话。"},Wg={intro:`我是小枫，一名在工程财务一线工作 4 年的财务人。项目全周期核算、分公司合并报表、税务筹划、业财融合——这些不是简历上的关键词，而是我每天真实面对的战场。

在同事眼里，我是「较真」的那一个：账不平不睡觉，勾稽对不上就从头捋，逻辑必须闭环，数字必须讲得出理由。对财务和数据，我负责且认真。

在工作之外，我正走在财务数字化转型的路上：Excel 自动化、Power Query、AI 工具，能交给机器的绝不重复劳动，把自己留给人去思考、去判断。

我相信财务的终点不是把账做平，而是从数据里挖出经营的价值；AI 不会取代财务，但会用 AI 的财务，会走得更远。`,education:[{school:"湖南城市学院",major:"财务管理",degree:"本科 · 管理学学士 · 全日制",date:"2018.09 – 2022.06"}],certificates:["初级会计师","MS Office 二级","普通话二级乙等","驾驶证 C1","中级会计师（备考中：会计、财管）"],hobbies:[{icon:"📊",title:"数据处理",text:"热爱 Excel 深度应用，擅长 Power Query 数据清洗与自动化，自学 Power BI 可视化。"},{icon:"🛠️",title:"工具开发",text:"结合财务痛点开发「分包成本还原及调拨还原工具」，一键出表，提升团队填报效率。"},{icon:"🤝",title:"团队协作",text:"作为财务小组长，善于协调分工、组织培训，乐于分享经验，帮助新同事快速成长。"},{icon:"⚡",title:"策略爱好者",text:"爱好研究新函数与逻辑建模；英雄联盟资深玩家（大师段位），注重策略与反应。"}]},Xg=[{name:"财务专业",score:95,tags:"中级会计师在考（会计、财管）"},{name:"报表与合并",score:92,tags:"合并报表编制 · 内部交易抵消 · 审计对接"},{name:"数据处理",score:90,tags:"Excel 高级应用 · Power Query · 自研成本还原工具"},{name:"信息系统",score:86,tags:"SAP · 业财一体化软件 · 久其报表系统"},{name:"办公与可视化",score:84,tags:"MS Office 二级 · Power BI 自学 · AI 软件"}],jg={indicators:["财务核算","报表统筹","业财融合","数据分析","信息化工具","团队管理"],values:[95,92,88,90,85,82]},qg=[{id:1,title:"项目财务 · 报表小组长 · 资产化债专员",company:"中建四局交通投资建设有限公司广州分公司",date:"2022.07 – 2026.07",summary:"4 年项目财务管理经验，探索 AI 与财务数字化转型",points:["项目财务：项目全周期核算、资金、税务、成本与业财融合","报表小组长：分公司合并报表、财务分析与审计对接","资产化债专员：资产处置与债务优化，化债创效"],tags:["项目财务","合并报表","资产化债"]}],Yg=[{name:"中建四局广州分公司",start:"2022.07",end:"2026.07",color:"#f5b942",detail:"项目财务 · 报表小组长 · 资产化债专员"},{name:"湖南城市学院 · 财务管理",start:"2018.09",end:"2022.06",color:"#8b5cf6",detail:"本科 · 管理学学士"}],$g=[{id:1,name:"香港城市大学（东莞）项目（一期）工程",city:"东莞",coord:[113.75,23.02],status:"",image:"",note:""},{id:2,name:"东莞市松山湖中心医院心血管病诊疗中心大楼工程项目",city:"东莞",coord:[113.75,23.02],status:"",image:"",note:""},{id:3,name:"西丽医院改扩建代建施工总承包",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:4,name:"罗湖区居民小区二次供水设施提标改造工程（第一阶段）(施工)Ⅴ标段",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:5,name:"南山区红花岭工业南区升级改造工程",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:6,name:"东莞市角美粮食储备库改扩建项目（二期）",city:"东莞",coord:[113.75,23.02],status:"",image:"",note:""},{id:7,name:"“一馆一中心”项目地基与基础工程",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""},{id:8,name:"深圳供电局有限公司中康安居房及变电综合楼主体工程",city:"深圳",coord:[114.06,22.55],status:"",image:"",note:""}],Kg=[{id:1,title:"分包成本还原及调拨还原工具",type:"财务工具",date:"2024",tags:["Excel","自动化","VBA"],desc:"结合财务痛点自主开发：一键还原分包成本与调拨数据、一键出表，帮助同事将效益表填报效率提升数倍。",link:"",cover:"linear-gradient(135deg,#0ea5e9,#6366f1)"},{id:2,title:"财务监控台账",type:"财务工具",date:"2023",tags:["Excel","Power Query","预算管理"],desc:"按月跟踪各项目营收、利润、现金流，对标预算自动预警，支撑经营分析会决策。",link:"",cover:"linear-gradient(135deg,#22d3ee,#0ea5e9)"},{id:3,title:"抵酒业务一体化台账",type:"财务工具",date:"2024",tags:["台账","业财融合","流程"],desc:"需求—发货—跟踪一体台账，按周闭环，从报需到发货 ≤ 15 天；支撑累计化债 800 万+。",link:"",cover:"linear-gradient(135deg,#8b5cf6,#d946ef)"},{id:4,title:"个人档案库网站（本网站）",type:"网页作品",date:"2026.08",tags:["HTML/CSS","JavaScript","ECharts","可视化"],desc:"深空科幻风格交互式个人网站：总看板 + 3D 地球 + 作品集 + 博客 + 地图，支持管理后台增删改与静态导出。",link:"",cover:"linear-gradient(135deg,#0f172a,#1e3a8a)"}],Zg=[{id:1,title:"Power Query 学习笔记：三步完成数据清洗",category:"技能学习",tags:["Power Query","Excel","数据清洗"],date:"2025.03",summary:"从表头处理、类型修正到合并查询，用三步套路把脏数据变成可分析的结构化表格。",markdown:`## 为什么是 Power Query

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

*本文为示例文章，可在「管理 → 学习记录」中编辑或删除。*`}],Jg=[{name:"广州",coord:[113.26,23.13],type:"work",note:"现居 · 公司所在地（中建四局广州分公司）"},{name:"益阳",coord:[112.36,28.55],type:"study",note:"母校 · 湖南城市学院（2018–2022）"}],Qg={siteTitle:"小枫 · 个人档案库",footerNote:"数据可视化档案 · ECharts 驱动 · 本地编辑 / 云端展示",siteStart:"2026-08-15",adminPassword:"houkanfeng123.."},t_=[{date:"2026-08-20",title:"看板·档案库合体上线",desc:"3D 数据看板与个人档案库合并为同一应用部署，一站式管理。"},{date:"2026-10-01",title:"国庆 · 站点更新计划",desc:"国庆假期：整理年度数据、规划下阶段内容更新。"}],e_={profile:Vg,about:Wg,skills:Xg,radar:jg,experience:qg,timeline:Yg,projects:$g,portfolio:Kg,blog:Zg,locations:Jg,settings:Qg,calendar:t_},n_="kanbanFeng_data";function dd(){try{const n=localStorage.getItem(n_);if(n){const t=JSON.parse(n);if(t&&typeof t=="object")return t}}catch{}return null}const Qn=la({loading:!1,error:null,data:Object.assign({},e_,dd()||{})});async function za(){Qn.loading=!0;try{const n=dd();if(n){Object.assign(Qn.data,n),Qn.error=null;return}const t=await fetch("./data/data.json",{cache:"no-store"});if(!t.ok)throw new Error("HTTP "+t.status);const e=await t.json();e&&typeof e=="object"&&(Object.assign(Qn.data,e),Qn.error=null)}catch(n){Qn.error=n&&n.message?n.message:String(n)}finally{Qn.loading=!1}}function Gr(){return{state:Qn,data:Fo(Qn.data)}}typeof window<"u"&&(za(),setInterval(za,6e4),window.addEventListener("visibilitychange",()=>{document.hidden||za()}));function di(n){const t=Number(n)||0;return t>=1e8?(t/1e8).toFixed(2)+" 亿":t>=1e4?(t/1e4).toFixed(1)+" 万":String(t)}function or(n){const t=new Map;return(n||[]).forEach(e=>{const i=e.city||"未分类";t.has(i)||t.set(i,{city:i,coord:e.coord,list:[]}),t.get(i).list.push(e)}),[...t.values()].map(e=>({city:e.city,coord:e.coord,list:e.list,count:e.list.length,contract:e.list.reduce((i,s)=>i+(Number(s.contract)||0),0),done:e.list.reduce((i,s)=>i+(Number(s.done)||0),0),received:e.list.reduce((i,s)=>i+(Number(s.received)||0),0)}))}const es=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},i_={class:"topbar"},s_={class:"brand"},r_={class:"brand-name"},o_={class:"brand-en"},a_={class:"top-right"},l_={class:"clock num"},c_={__name:"TopBar",setup(n){const{data:t}=Gr(),e=ue("");let i=null;const s=o=>String(o).padStart(2,"0");function r(){const o=new Date;e.value=`${o.getFullYear()}-${s(o.getMonth()+1)}-${s(o.getDate())} ${s(o.getHours())}:${s(o.getMinutes())}:${s(o.getSeconds())}`}return ts(()=>{r(),i=setInterval(r,1e3)}),Vs(()=>clearInterval(i)),(o,a)=>(Bt(),kt("header",i_,[ot("div",s_,[ot("span",r_,Jt(Fe(t).profile.name),1),ot("span",o_,Jt(Fe(t).profile.enName),1)]),ot("div",a_,[ot("span",l_,Jt(e.value),1)])]))}},u_=es(c_,[["__scopeId","data-v-55f212cd"]]),h_={class:"left-panel"},f_={class:"panel card-profile"},d_={class:"profile-head"},p_={class:"avatar"},m_={class:"p-name"},g_={class:"p-title"},__={class:"p-intro"},v_={class:"panel card-control"},x_={class:"ctrl-group"},y_={class:"ctrl-btns"},M_={class:"ctrl-group"},S_={class:"ctrl-btns"},E_={class:"ctrl-group"},b_={class:"seg"},T_={key:0,class:"ctrl-group"},A_={class:"ctrl-btns"},w_={key:1,class:"ctrl-group"},R_={class:"ctrl-btns"},C_={key:2,class:"ctrl-group"},P_={class:"ctrl-btns"},L_={class:"seg"},D_={class:"seg"},I_={__name:"LeftPanel",props:{viewMode:{type:String,default:"earth"},dayNightMode:{type:String,default:"auto"},rotating:{type:Boolean,default:!0}},emits:["set-view","cycle-daynight","toggle-rotate","reset","archive","toggle-charts","tb-start","tb-pause","tb-reset","tb-speed","tb-preset","tb-kick"],setup(n,{emit:t}){const e=t,{data:i}=Gr(),s={auto:"昼夜·自动",day:"白天",night:"夜晚"};return(r,o)=>(Bt(),kt("aside",h_,[ot("section",f_,[o[20]||(o[20]=ot("div",{class:"panel-title"},[ri("小枫 · 数据大屏"),ot("span",{class:"en"},"Maple")],-1)),ot("div",d_,[ot("div",p_,Jt(Fe(i).profile.name.slice(0,1)),1),ot("div",null,[ot("p",m_,[ri(Jt(Fe(i).profile.name),1),ot("i",null,Jt(Fe(i).profile.enName),1)]),ot("p",g_,Jt(Fe(i).profile.title),1)])]),ot("p",__,Jt(Fe(i).profile.summary),1)]),ot("section",v_,[o[34]||(o[34]=ot("div",{class:"panel-title"},[ri("控制面板"),ot("span",{class:"en"},"Control")],-1)),ot("div",x_,[o[21]||(o[21]=ot("p",{class:"ctrl-label"},"个人档案库",-1)),ot("div",y_,[ot("button",{class:"cbtn gold",onClick:o[0]||(o[0]=a=>e("archive"))},"📄 进入个人档案库")]),o[22]||(o[22]=ot("p",{class:"ctrl-hint"},"也可长按中央地球（空白处）进入",-1))]),ot("div",M_,[o[23]||(o[23]=ot("p",{class:"ctrl-label"},"数据图表",-1)),ot("div",S_,[ot("button",{class:"cbtn",onClick:o[1]||(o[1]=a=>e("toggle-charts"))},"📊 数据图表")]),o[24]||(o[24]=ot("p",{class:"ctrl-hint"},"作品类型分布 + 博客分类统计（ECharts）",-1))]),ot("div",E_,[o[25]||(o[25]=ot("p",{class:"ctrl-label"},"中央视图",-1)),ot("div",b_,[ot("button",{class:pn(["seg-btn",{on:n.viewMode==="earth"}]),onClick:o[2]||(o[2]=a=>e("set-view","earth"))},"🌍 地球",2),ot("button",{class:pn(["seg-btn",{on:n.viewMode==="china"}]),onClick:o[3]||(o[3]=a=>e("set-view","china"))},"🗺️ 中国地图",2),ot("button",{class:pn(["seg-btn",{on:n.viewMode==="threebody"}]),onClick:o[4]||(o[4]=a=>e("set-view","threebody"))},"☀️ 三体模拟",2)])]),n.viewMode==="earth"?(Bt(),kt("div",T_,[o[26]||(o[26]=ot("p",{class:"ctrl-label"},"地球控制",-1)),ot("div",A_,[ot("button",{class:"cbtn",onClick:o[5]||(o[5]=a=>e("cycle-daynight"))},Jt(s[n.dayNightMode]),1),ot("button",{class:"cbtn",onClick:o[6]||(o[6]=a=>e("toggle-rotate"))},Jt(n.rotating?"旋转·开":"旋转·关"),1),ot("button",{class:"cbtn",onClick:o[7]||(o[7]=a=>e("reset"))},"复位视角")]),o[27]||(o[27]=ot("p",{class:"ctrl-hint"},"点击地球点位 → 聚焦 + 项目明细；点击轨道星球 → 经历详情",-1))])):n.viewMode==="china"?(Bt(),kt("div",w_,[o[28]||(o[28]=ot("p",{class:"ctrl-label"},"地图控制",-1)),ot("div",R_,[ot("button",{class:"cbtn",onClick:o[8]||(o[8]=a=>e("reset"))},"复位视角")]),o[29]||(o[29]=ot("p",{class:"ctrl-hint"},"落点：工作·广州 / 母校·益阳 / 项目城市·东莞·深圳；钻入省份后仍显示该省内落点，可点击弹详情",-1))])):(Bt(),kt("div",C_,[o[30]||(o[30]=ot("p",{class:"ctrl-label"},"三体模拟控制",-1)),ot("div",P_,[ot("button",{class:"cbtn",onClick:o[9]||(o[9]=a=>e("tb-start"))},"▶ 开始"),ot("button",{class:"cbtn",onClick:o[10]||(o[10]=a=>e("tb-pause"))},"⏸ 暂停"),ot("button",{class:"cbtn",onClick:o[11]||(o[11]=a=>e("tb-reset"))},"↺ 重置"),ot("button",{class:"cbtn",onClick:o[12]||(o[12]=a=>e("tb-kick"))},"⚡ 扰动")]),o[31]||(o[31]=ot("p",{class:"ctrl-label tb-sub"},"速度",-1)),ot("div",L_,[ot("button",{class:"seg-btn",onClick:o[13]||(o[13]=a=>e("tb-speed",.5))},"0.5×"),ot("button",{class:"seg-btn",onClick:o[14]||(o[14]=a=>e("tb-speed",1))},"1×"),ot("button",{class:"seg-btn",onClick:o[15]||(o[15]=a=>e("tb-speed",2))},"2×"),ot("button",{class:"seg-btn",onClick:o[16]||(o[16]=a=>e("tb-speed",4))},"4×")]),o[32]||(o[32]=ot("p",{class:"ctrl-label tb-sub"},"预设",-1)),ot("div",D_,[ot("button",{class:"seg-btn",onClick:o[17]||(o[17]=a=>e("tb-preset","figure8"))},"8字"),ot("button",{class:"seg-btn",onClick:o[18]||(o[18]=a=>e("tb-preset","binary"))},"大质量+双星"),ot("button",{class:"seg-btn",onClick:o[19]||(o[19]=a=>e("tb-preset","chaos"))},"随机混沌")]),o[33]||(o[33]=ot("p",{class:"ctrl-hint"},"三颗恒星在万有引力下运动；「扰动」随机给一颗星一个速度脉冲，观察混沌演化",-1))]))])]))}},U_=es(I_,[["__scopeId","data-v-13556afb"]]),N_={class:"panel card-calendar"},O_={class:"cal-head"},F_={class:"cal-ym"},B_={class:"num"},z_={class:"num"},H_={class:"cal-week"},G_={class:"cal-grid"},k_=["onMouseenter","onClick"],V_={class:"cal-daynum"},W_={key:0,class:"cal-today-tag"},X_={key:1,class:"cal-dots"},j_=["title"],q_={class:"cal-detail"},Y_={class:"cd-head"},$_={class:"num"},K_={class:"cd-lunar"},Z_={key:0},J_={key:0,class:"cd-list"},Q_={class:"cd-tag"},t0={key:0},e0={key:1,class:"cd-empty"},n0="0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758",i0={__name:"CalendarPanel",emits:["select-day"],setup(n,{emit:t}){const e=t,{data:i}=Gr(),s={1:{1:"元旦"},2:{14:"情人节"},3:{8:"妇女节",12:"植树节",14:"白色情人节"},4:{1:"愚人节",22:"世界地球日"},5:{1:"劳动节",4:"青年节",12:"国际护士节",20:"网络情人节"},6:{1:"儿童节"},7:{1:"建党节"},8:{1:"建军节"},9:{10:"教师节"},10:{1:"国庆节",31:"万圣节"},11:{11:"光棍节"},12:{24:"平安夜",25:"圣诞节",31:"跨年夜"}},r=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"];function o(z,B){return new Date(315569259747e-1*(z-1900)+Number(n0.split(",")[B])*6e4+Date.UTC(1900,0,6,2,5)).getUTCDate()}const a=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835],l=["正","二","三","四","五","六","七","八","九","十","冬","腊"],c=["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"],u={"1-1":"春节","1-15":"元宵节","2-2":"龙抬头","5-5":"端午节","7-7":"七夕节","7-15":"中元节","8-15":"中秋节","9-9":"重阳节","12-8":"腊八节","12-23":"小年"};function h(z){return a[z-1900]&15}function f(z){return h(z)?a[z-1900]&65536?30:29:0}function p(z,B){return a[z-1900]&65536>>B?30:29}function g(z){let B=348;for(let V=32768;V>8;V>>=1)B+=a[z-1900]&V?1:0;return B+f(z)}function _(z,B,V){const at=new Date(1900,0,31);let rt=Math.floor((new Date(z,B-1,V)-at)/864e5),ft,K=0;for(ft=1900;ft<2101&&rt>0;ft++)K=g(ft),rt-=K;rt<0&&(rt+=K,ft--);const ct=ft;let mt=h(ct),_t=!1,Et;for(ft=1;ft<13&&rt>0;ft++)mt>0&&ft===mt+1&&!_t?(--ft,_t=!0,K=f(ct)):K=p(ct,ft),_t&&ft===mt+1&&(_t=!1),rt-=K;rt===0&&mt>0&&ft===mt+1&&(_t?_t=!1:(_t=!0,--ft)),rt<0&&(rt+=K,--ft),Et=ft;const Rt=rt+1;return{year:ct,month:Et,day:Rt,isLeap:_t}}function m(z){return(z.isLeap?"闰":"")+(z.month===12?"腊":l[z.month-1]||"")+"月"+c[z.day-1]}function d(z,B){return z.month===12&&z.day===p(B,12)?"除夕":u[z.month+"-"+z.day]||""}const b=cn(()=>{const z=new Map;return(i.calendar||[]).forEach(B=>{if(!B||!B.date)return;const V=B.date.slice(0,7);z.has(V)||z.set(V,[]),z.get(V).push(B)}),z}),v=new Date,E=ue(v.getFullYear()),w=ue(v.getMonth()+1),R=ue({y:v.getFullYear(),m:v.getMonth()+1,d:v.getDate()}),L=ue("");function Q(z){let B=w.value+z,V=E.value;B<1?(B=12,V--):B>12&&(B=1,V++),E.value=V,w.value=B}function S(){E.value=R.value.y,w.value=R.value.m}const A=["一","二","三","四","五","六","日"],W=cn(()=>{const z=E.value,B=w.value,at=(new Date(z,B-1,1).getDay()+6)%7,rt=new Date(z,B,0).getDate(),ft=[],K=b.value.get(String(z)+"-"+String(B).padStart(2,"0"))||[],ct={};K.forEach(mt=>{const _t=Number(mt.date.slice(8,10));(ct[_t]=ct[_t]||[]).push(mt)});for(let mt=0;mt<42;mt++){const _t=mt-at+1,Et=_t<1||_t>rt;let Rt=z,Pt=B,bt=_t;if(_t<1){const M=new Date(z,B-1,0).getDate();Rt=B===1?z-1:z,Pt=B===1?12:B-1,bt=M+_t}_t>rt&&(Rt=B===12?z+1:z,Pt=B===12?1:B+1,bt=_t-rt);const Vt=_(Rt,Pt,bt),y=[],O=s[Pt]&&s[Pt][bt];O&&y.push({type:"fest",title:O});const H=(Pt-1)*2,$=o(Rt,H),j=o(Rt,H+1);bt===$&&y.push({type:"term",title:r[H]}),bt===j&&y.push({type:"term",title:r[H+1]});const et=d(Vt,Rt);et&&y.push({type:"lunar",title:et});const st=ct[bt];st&&st.forEach(M=>y.push({type:"event",title:M.title,desc:M.desc||"",date:M.date})),ft.push({key:`${Rt}-${Pt}-${bt}`,y:Rt,m:Pt,d:bt,day:bt,other:Et,lunar:m(Vt),items:y,today:!Et&&Rt===R.value.y&&Pt===R.value.m&&bt===R.value.d})}return ft}),G=cn(()=>W.value.find(z=>z.key===L.value)||null),nt=cn(()=>{const z=G.value||W.value.find(B=>B.today)||null;return z?{key:z.key,month:z.m,day:z.d,lunar:z.lunar,items:z.items,today:!!z.today}:null}),N={fest:"节日",term:"节气",lunar:"传统节日",event:"事项"};function X(z){return N[z]||""}function Y(z){z.items.length&&e("select-day",{title:`${z.m}月${z.d}日 · 星际日历`,meta:"农历 "+z.lunar,rows:z.items.map(B=>[X(B.type),B.title]),text:z.items.map(B=>B.desc).filter(Boolean).join(`
`)||""})}return(z,B)=>(Bt(),kt("section",N_,[B[5]||(B[5]=ot("div",{class:"panel-title"},[ri("星际日历"),ot("span",{class:"en"},"Stellar · Calendar")],-1)),ot("div",O_,[ot("button",{class:"cal-nav",onClick:B[0]||(B[0]=V=>Q(-1)),title:"上月"},"‹"),ot("div",F_,[ot("b",B_,Jt(E.value),1),B[3]||(B[3]=ot("span",null,"年",-1)),ot("b",z_,Jt(w.value),1),B[4]||(B[4]=ot("span",null,"月",-1)),ot("button",{class:"cal-today",onClick:S,title:"回到今天"},"今")]),ot("button",{class:"cal-nav",onClick:B[1]||(B[1]=V=>Q(1)),title:"下月"},"›")]),ot("div",H_,[(Bt(),kt(de,null,En(A,V=>ot("span",{key:V},Jt(V),1)),64))]),ot("div",G_,[(Bt(!0),kt(de,null,En(W.value,V=>(Bt(),kt("div",{key:V.key,class:pn(["cal-cell",{other:V.other,today:V.today,has:V.items.length,hover:L.value===V.key}]),onMouseenter:at=>L.value=V.key,onMouseleave:B[2]||(B[2]=at=>L.value=""),onClick:at=>Y(V)},[ot("span",V_,Jt(V.day),1),V.today?(Bt(),kt("i",W_,"今")):$e("",!0),V.items.length?(Bt(),kt("div",X_,[(Bt(!0),kt(de,null,En(V.items.slice(0,3),(at,rt)=>(Bt(),kt("i",{key:rt,class:pn(["cal-dot","c-"+at.type])},null,2))),128))])):$e("",!0),V.items.length?(Bt(),kt("span",{key:2,class:pn(["cal-label","c-"+V.items[0].type]),title:V.items[0].title},Jt(V.items[0].title),11,j_)):$e("",!0)],42,k_))),128))]),B[6]||(B[6]=od('<div class="cal-legend" data-v-d8f01d55><span data-v-d8f01d55><i class="cal-dot c-fest" data-v-d8f01d55></i>节日</span><span data-v-d8f01d55><i class="cal-dot c-lunar" data-v-d8f01d55></i>传统</span><span data-v-d8f01d55><i class="cal-dot c-term" data-v-d8f01d55></i>节气</span><span data-v-d8f01d55><i class="cal-dot c-event" data-v-d8f01d55></i>事项</span></div>',1)),ot("div",q_,[nt.value?(Bt(),kt(de,{key:0},[ot("div",Y_,[ot("b",$_,Jt(nt.value.month)+"."+Jt(nt.value.day),1),ot("span",K_,Jt(nt.value.lunar),1),nt.value.today?(Bt(),kt("em",Z_,"今天")):$e("",!0)]),nt.value.items.length?(Bt(),kt("ul",J_,[(Bt(!0),kt(de,null,En(nt.value.items,(V,at)=>(Bt(),kt("li",{key:at,class:pn("c-"+V.type)},[ot("span",Q_,Jt(X(V.type)),1),ri(Jt(V.title),1),V.desc?(Bt(),kt("em",t0,Jt(V.desc),1)):$e("",!0)],2))),128))])):(Bt(),kt("p",e0,"这一天没有安排"))],64)):$e("",!0)])]))}},s0=es(i0,[["__scopeId","data-v-d8f01d55"]]),r0={class:"right-panel"},o0={class:"panel card-lists"},a0={class:"work-list"},l0=["onClick"],c0={class:"w-type"},u0={class:"w-name"},h0={class:"w-date"},f0={class:"row-2"},d0={class:"list-col"},p0={class:"list"},m0=["onClick"],g0={class:"list-col"},_0={class:"list"},v0=["onClick"],x0=["onClick"],y0={__name:"RightPanel",emits:["select-portfolio","select-blog","select-location","select-city","select-day"],setup(n,{emit:t}){const e=t,{data:i}=Gr(),s=cn(()=>or(i.projects));return(r,o)=>(Bt(),kt("aside",r0,[pe(s0,{onSelectDay:o[0]||(o[0]=a=>e("select-day",a))}),ot("section",o0,[o[3]||(o[3]=ot("div",{class:"panel-title"},[ri("作品榜"),ot("span",{class:"en"},"Portfolio")],-1)),ot("ul",a0,[(Bt(!0),kt(de,null,En(Fe(i).portfolio,a=>(Bt(),kt("li",{key:a.id,onClick:l=>e("select-portfolio",a)},[ot("span",c0,Jt(a.type),1),ot("span",u0,Jt(a.title),1),ot("span",h0,Jt(a.date),1)],8,l0))),128))]),ot("div",f0,[ot("div",d0,[o[1]||(o[1]=ot("p",{class:"list-head"},"最近博客",-1)),ot("ul",p0,[(Bt(!0),kt(de,null,En(Fe(i).blog,a=>(Bt(),kt("li",{key:a.id,onClick:l=>e("select-blog",a)},Jt(a.title),9,m0))),128))])]),ot("div",g0,[o[2]||(o[2]=ot("p",{class:"list-head"},"地点索引",-1)),ot("ul",_0,[(Bt(!0),kt(de,null,En(Fe(i).locations,a=>(Bt(),kt("li",{key:a.name,onClick:l=>e("select-location",a)},[ri(Jt(a.name),1),ot("em",null,Jt(a.type==="work"?"工作":"母校"),1)],8,v0))),128)),(Bt(!0),kt(de,null,En(s.value,a=>(Bt(),kt("li",{key:"c-"+a.city,onClick:l=>e("select-city",a)},[ri(Jt(a.city),1),ot("em",null,Jt(a.count)+" 项",1)],8,x0))),128))])])])])]))}},M0=es(y0,[["__scopeId","data-v-15cc7428"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="160",ss={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},S0=0,uu=1,E0=2,pd=1,b0=2,Zn=3,Hn=0,Qe=1,ii=2,bi=0,Ns=1,Ln=2,hu=3,fu=4,T0=5,Gi=100,A0=101,w0=102,du=103,pu=104,R0=200,C0=201,P0=202,L0=203,Il=204,Ul=205,D0=206,I0=207,U0=208,N0=209,O0=210,F0=211,B0=212,z0=213,H0=214,G0=0,k0=1,V0=2,$o=3,W0=4,X0=5,j0=6,q0=7,pa=0,Y0=1,$0=2,Ti=0,K0=1,Z0=2,J0=3,Q0=4,tv=5,ev=6,md=300,zs=301,Hs=302,Nl=303,Ol=304,ma=306,Fl=1e3,Mn=1001,Bl=1002,qe=1003,mu=1004,Ha=1005,un=1006,nv=1007,Cr=1008,Ai=1009,iv=1010,sv=1011,fc=1012,gd=1013,Mi=1014,Si=1015,Pr=1016,_d=1017,vd=1018,Yi=1020,rv=1021,Sn=1023,ov=1024,av=1025,$i=1026,Gs=1027,lv=1028,xd=1029,cv=1030,yd=1031,Md=1033,Ga=33776,ka=33777,Va=33778,Wa=33779,gu=35840,_u=35841,vu=35842,xu=35843,Sd=36196,yu=37492,Mu=37496,Su=37808,Eu=37809,bu=37810,Tu=37811,Au=37812,wu=37813,Ru=37814,Cu=37815,Pu=37816,Lu=37817,Du=37818,Iu=37819,Uu=37820,Nu=37821,Xa=36492,Ou=36494,Fu=36495,uv=36283,Bu=36284,zu=36285,Hu=36286,Ed=3e3,Ki=3001,hv=3200,fv=3201,ga=0,dv=1,dn="",Oe="srgb",ci="srgb-linear",dc="display-p3",_a="display-p3-linear",Ko="linear",ce="srgb",Zo="rec709",Jo="p3",os=7680,Gu=519,pv=512,mv=513,gv=514,bd=515,_v=516,vv=517,xv=518,yv=519,zl=35044,ku="300 es",Hl=1035,si=2e3,Qo=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const mr=Math.PI/180,Lr=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function pc(n,t){return(n%t+t)%t}function Mv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Sv(n,t,e){return n!==t?(e-n)/(t-n):0}function gr(n,t,e){return(1-e)*n+e*t}function Ev(n,t,e,i){return gr(n,t,1-Math.exp(-e*i))}function bv(n,t=1){return t-Math.abs(pc(n,t*2)-t)}function Tv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Av(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Rv(n,t){return n+Math.random()*(t-n)}function Cv(n){return n*(.5-Math.random())}function Pv(n){n!==void 0&&(Vu=n);let t=Vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lv(n){return n*mr}function Dv(n){return n*Lr}function Gl(n){return(n&n-1)===0&&n!==0}function Iv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ta(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nv={DEG2RAD:mr,RAD2DEG:Lr,generateUUID:Bn,clamp:De,euclideanModulo:pc,mapLinear:Mv,inverseLerp:Sv,lerp:gr,damp:Ev,pingpong:bv,smoothstep:Tv,smootherstep:Av,randInt:wv,randFloat:Rv,randFloatSpread:Cv,seededRandom:Pv,degToRad:Lv,radToDeg:Dv,isPowerOfTwo:Gl,ceilPowerOfTwo:Iv,floorPowerOfTwo:ta,setQuaternionFromProperEuler:Uv,normalize:re,denormalize:On};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],b=s[1],v=s[4],E=s[7],w=s[2],R=s[5],L=s[8];return r[0]=o*_+a*b+l*w,r[3]=o*m+a*v+l*R,r[6]=o*d+a*E+l*L,r[1]=c*_+u*b+h*w,r[4]=c*m+u*v+h*R,r[7]=c*d+u*E+h*L,r[2]=f*_+p*b+g*w,r[5]=f*m+p*v+g*R,r[8]=f*d+p*E+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Zt;function Td(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ov(){const n=Dr("canvas");return n.style.display="block",n}const Wu={};function _r(n){n in Wu||(Wu[n]=!0,console.warn(n))}const Xu=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ju=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[ci]:{transfer:Ko,primaries:Zo,toReference:n=>n,fromReference:n=>n},[Oe]:{transfer:ce,primaries:Zo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_a]:{transfer:Ko,primaries:Jo,toReference:n=>n.applyMatrix3(ju),fromReference:n=>n.applyMatrix3(Xu)},[dc]:{transfer:ce,primaries:Jo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ju),fromReference:n=>n.applyMatrix3(Xu).convertLinearToSRGB()}},Fv=new Set([ci,_a]),oe={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Jr[t].toReference,s=Jr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Jr[n].primaries},getTransfer:function(n){return n===dn?Ko:Jr[n].transfer}};function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let as;class Ad{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=Dr("canvas")),as.width=t.width,as.height=t.height;const i=as.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Os(e[i]/255)*255):e[i]=Os(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bv=0;class wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Bn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ad.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zv=0;class Ze extends ns{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=Mn,s=Mn,r=un,o=Cr,a=Sn,l=Ai,c=Ze.DEFAULT_ANISOTROPY,u=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Bn(),this.name="",this.source=new wd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ki?Oe:dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?Ki:Ed}set encoding(t){_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ki?Oe:dn}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=md;Ze.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,i=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,E=(p+1)/2,w=(d+1)/2,R=(u+f)/4,L=(h+_)/4,Q=(g+m)/4;return v>E&&v>w?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=L/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=Q/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=L/r,s=Q/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hv extends ns{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(_r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ki?Oe:dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Hv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rd extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gv extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,b=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const w=Math.sqrt(v),R=Math.atan2(w,d*b);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const E=a*b;if(l=l*m+f*E,c=c*m+p*E,u=u*m+g*E,h=h*m+_*E,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new U,qu=new ui;class kr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),to.subVectors(this.max,Zs),ls.subVectors(t.a,Zs),cs.subVectors(t.b,Zs),us.subVectors(t.c,Zs),pi.subVectors(cs,ls),mi.subVectors(us,cs),Ui.subVectors(ls,us);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ui.z,Ui.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ui.z,0,-Ui.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ui.y,Ui.x,0];return!Ka(e,ls,cs,us,to)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,ls,cs,us,to))?!1:(eo.crossVectors(pi,mi),e=[eo.x,eo.y,eo.z],Ka(e,ls,cs,us,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new U,new U,new U,new U,new U,new U,new U,new U],vn=new U,Qr=new kr,ls=new U,cs=new U,us=new U,pi=new U,mi=new U,Ui=new U,Zs=new U,to=new U,eo=new U,Ni=new U;function Ka(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kv=new kr,Js=new U,Za=new U;class Vr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):kv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Za)),this.expandByPoint(Js.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new U,Ja=new U,no=new U,gi=new U,Qa=new U,io=new U,tl=new U;class Wr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ja.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,o=-this.direction.dot(no),a=gi.dot(this.direction),l=-gi.dot(no),c=gi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ja).addScaledVector(no,f),p}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,i,s,r){Qa.subVectors(e,t),io.subVectors(i,t),tl.crossVectors(Qa,io);let o=this.direction.dot(tl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,t);const l=a*this.direction.dot(io.crossVectors(gi,io));if(l<0)return null;const c=a*this.direction.dot(Qa.cross(gi));if(c<0||l+c>o)return null;const u=-a*gi.dot(tl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vv,t,Wv)}lookAt(t,e,i){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),_i.crossVectors(i,en),_i.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),_i.crossVectors(i,en)),_i.normalize(),so.crossVectors(en,_i),s[0]=_i.x,s[4]=so.x,s[8]=en.x,s[1]=_i.y,s[5]=so.y,s[9]=en.y,s[2]=_i.z,s[6]=so.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],b=i[3],v=i[7],E=i[11],w=i[15],R=s[0],L=s[4],Q=s[8],S=s[12],A=s[1],W=s[5],G=s[9],nt=s[13],N=s[2],X=s[6],Y=s[10],z=s[14],B=s[3],V=s[7],at=s[11],rt=s[15];return r[0]=o*R+a*A+l*N+c*B,r[4]=o*L+a*W+l*X+c*V,r[8]=o*Q+a*G+l*Y+c*at,r[12]=o*S+a*nt+l*z+c*rt,r[1]=u*R+h*A+f*N+p*B,r[5]=u*L+h*W+f*X+p*V,r[9]=u*Q+h*G+f*Y+p*at,r[13]=u*S+h*nt+f*z+p*rt,r[2]=g*R+_*A+m*N+d*B,r[6]=g*L+_*W+m*X+d*V,r[10]=g*Q+_*G+m*Y+d*at,r[14]=g*S+_*nt+m*z+d*rt,r[3]=b*R+v*A+E*N+w*B,r[7]=b*L+v*W+E*X+w*V,r[11]=b*Q+v*G+E*Y+w*at,r[15]=b*S+v*nt+E*z+w*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],b=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,E=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,R=e*b+i*v+s*E+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=b*L,t[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*L,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*L,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*L,t[4]=v*L,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*L,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*L,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*L,t[8]=E*L,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*d-e*h*d)*L,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*L,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*L,t[12]=w*L,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*L,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*L,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,b=l*c,v=l*u,E=l*h,w=i.x,R=i.y,L=i.z;return s[0]=(1-(_+d))*w,s[1]=(p+E)*w,s[2]=(g-v)*w,s[3]=0,s[4]=(p-E)*R,s[5]=(1-(f+d))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+v)*L,s[9]=(m-b)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const c=1/r,u=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=si){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(a===si)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=si){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,p=(i+s)*u;let g,_;if(a===si)g=(o+r)*h,_=-2*h;else if(a===Qo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new U,xn=new he,Vv=new U(0,0,0),Wv=new U(1,1,1),_i=new U,so=new U,en=new U,Yu=new he,$u=new ui;class Xr{constructor(t=0,e=0,i=0,s=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xv=0;const Ku=new U,fs=new ui,Yn=new he,ro=new U,Qs=new U,jv=new U,qv=new ui,Zu=new U(1,0,0),Ju=new U(0,1,0),Qu=new U(0,0,1),Yv={type:"added"},$v={type:"removed"};class Ae extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new U,e=new Xr,i=new ui,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Zt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Zu,t)}rotateY(t){return this.rotateOnAxis(Ju,t)}rotateZ(t){return this.rotateOnAxis(Qu,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zu,t)}translateY(t){return this.translateOnAxis(Ju,t)}translateZ(t){return this.translateOnAxis(Qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ro.copy(t):ro.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Qs,ro,this.up):Yn.lookAt(ro,Qs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Yn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($v)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,jv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,qv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new U(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new U,$n=new U,el=new U,Kn=new U,ds=new U,ps=new U,th=new U,nl=new U,il=new U,sl=new U;let oo=!1;class hn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yn.subVectors(s,e),$n.subVectors(i,e),el.subVectors(t,e);const o=yn.dot(yn),a=yn.dot($n),l=yn.dot(el),c=$n.dot($n),u=$n.dot(el),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(t,e,i,s,r,o,a,l){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(t,e,i,s){return yn.subVectors(i,e),$n.subVectors(t,e),yn.cross($n).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),yn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),hn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,i),ps.subVectors(r,i),nl.subVectors(t,i);const l=ds.dot(nl),c=ps.dot(nl);if(l<=0&&c<=0)return e.copy(i);il.subVectors(t,s);const u=ds.dot(il),h=ps.dot(il);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ds,o);sl.subVectors(t,r);const p=ds.dot(sl),g=ps.dot(sl);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ps,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return th.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(th,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function rl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=pc(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=rl(o,r,t+1/3),this.g=rl(o,r,t),this.b=rl(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const i=Cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=qa(t.r),this.g=qa(t.g),this.b=qa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return oe.fromWorkingColorSpace(He.copy(this),t),Math.round(De(He.r*255,0,255))*65536+Math.round(De(He.g*255,0,255))*256+Math.round(De(He.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Oe){oe.fromWorkingColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(ao);const i=gr(vi.h,ao.h,e),s=gr(vi.s,ao.s,e),r=gr(vi.l,ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new qt;qt.NAMES=Cd;let Kv=0;class Gn extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ns,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ul,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Il&&(i.blendSrc=this.blendSrc),this.blendDst!==Ul&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gc extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new U,lo=new yt;class Te{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}}class Pd extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ld extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Se extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Zv=0;const an=new he,ol=new Ae,ms=new U,nn=new kr,tr=new kr,Le=new U;class xe extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Td(t)?Ld:Pd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(nn.min,tr.min),nn.expandByPoint(Le),Le.addVectors(nn.max,tr.max),nn.expandByPoint(Le)):(nn.expandByPoint(tr.min),nn.expandByPoint(tr.max))}nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Le.add(ms)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new U,u[A]=new U;const h=new U,f=new U,p=new U,g=new yt,_=new yt,m=new yt,d=new U,b=new U;function v(A,W,G){h.fromArray(s,A*3),f.fromArray(s,W*3),p.fromArray(s,G*3),g.fromArray(o,A*2),_.fromArray(o,W*2),m.fromArray(o,G*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const nt=1/(_.x*m.y-m.x*_.y);isFinite(nt)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(nt),b.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(nt),c[A].add(d),c[W].add(d),c[G].add(d),u[A].add(b),u[W].add(b),u[G].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let A=0,W=E.length;A<W;++A){const G=E[A],nt=G.start,N=G.count;for(let X=nt,Y=nt+N;X<Y;X+=3)v(i[X+0],i[X+1],i[X+2])}const w=new U,R=new U,L=new U,Q=new U;function S(A){L.fromArray(r,A*3),Q.copy(L);const W=c[A];w.copy(W),w.sub(L.multiplyScalar(L.dot(W))).normalize(),R.crossVectors(Q,W);const nt=R.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=nt}for(let A=0,W=E.length;A<W;++A){const G=E[A],nt=G.start,N=G.count;for(let X=nt,Y=nt+N;X<Y;X+=3)S(i[X+0]),S(i[X+1]),S(i[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Te(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new he,Oi=new Wr,co=new Vr,nh=new U,gs=new U,_s=new U,vs=new U,al=new U,uo=new U,ho=new yt,fo=new yt,po=new yt,ih=new U,sh=new U,rh=new U,mo=new U,go=new U;class Ne extends Ae{constructor(t=new xe,e=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(al.fromBufferAttribute(h,t),o?uo.addScaledVector(al,u):uo.addScaledVector(al.sub(e),u))}e.add(uo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(co.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(co,nh)===null||Oi.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(eh),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,w=v;E<w;E+=3){const R=a.getX(E),L=a.getX(E+1),Q=a.getX(E+2);s=_o(this,d,t,i,c,u,h,R,L,Q),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);s=_o(this,o,t,i,c,u,h,b,v,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,w=v;E<w;E+=3){const R=E,L=E+1,Q=E+2;s=_o(this,d,t,i,c,u,h,R,L,Q),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,v=m+1,E=m+2;s=_o(this,o,t,i,c,u,h,b,v,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jv(n,t,e,i,s,r,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Hn,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(go);return c<e.near||c>e.far?null:{distance:c,point:go.clone(),object:n}}function _o(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,gs),n.getVertexPosition(l,_s),n.getVertexPosition(c,vs);const u=Jv(n,t,e,i,gs,_s,vs,mo);if(u){s&&(ho.fromBufferAttribute(s,a),fo.fromBufferAttribute(s,l),po.fromBufferAttribute(s,c),u.uv=hn.getInterpolation(mo,gs,_s,vs,ho,fo,po,new yt)),r&&(ho.fromBufferAttribute(r,a),fo.fromBufferAttribute(r,l),po.fromBufferAttribute(r,c),u.uv1=hn.getInterpolation(mo,gs,_s,vs,ho,fo,po,new yt),u.uv2=u.uv1),o&&(ih.fromBufferAttribute(o,a),sh.fromBufferAttribute(o,l),rh.fromBufferAttribute(o,c),u.normal=hn.getInterpolation(mo,gs,_s,vs,ih,sh,rh,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};hn.getNormal(gs,_s,vs,h.normal),u.face=h}return u}class Ws extends xe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(h,2));function g(_,m,d,b,v,E,w,R,L,Q,S){const A=E/L,W=w/Q,G=E/2,nt=w/2,N=R/2,X=L+1,Y=Q+1;let z=0,B=0;const V=new U;for(let at=0;at<Y;at++){const rt=at*W-nt;for(let ft=0;ft<X;ft++){const K=ft*A-G;V[_]=K*b,V[m]=rt*v,V[d]=N,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[d]=R>0?1:-1,u.push(V.x,V.y,V.z),h.push(ft/L),h.push(1-at/Q),z+=1}}for(let at=0;at<Q;at++)for(let rt=0;rt<L;rt++){const ft=f+rt+X*at,K=f+rt+X*(at+1),ct=f+(rt+1)+X*(at+1),mt=f+(rt+1)+X*at;l.push(ft,K,mt),l.push(K,ct,mt),B+=6}a.addGroup(p,B,S),p+=B,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function je(n){const t={};for(let e=0;e<n.length;e++){const i=ks(n[e]);for(const s in i)t[s]=i[s]}return t}function Qv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dd(n){return n.getRenderTarget()===null?n.outputColorSpace:oe.workingColorSpace}const tx={clone:ks,merge:je};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=Qv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Id extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Id{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,ys=1;class ix extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(xs,ys,t,e);s.layers=this.layers,this.add(s);const r=new fn(xs,ys,t,e);r.layers=this.layers,this.add(r);const o=new fn(xs,ys,t,e);o.layers=this.layers,this.add(o);const a=new fn(xs,ys,t,e);a.layers=this.layers,this.add(a);const l=new fn(xs,ys,t,e);l.layers=this.layers,this.add(l);const c=new fn(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ud extends Ze{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sx extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(_r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ki?Oe:dn),this.texture=new Ud(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ws(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:bi});r.uniforms.tEquirect.value=e;const o=new Ne(s,r),a=e.minFilter;return e.minFilter===Cr&&(e.minFilter=un),new ix(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ll=new U,rx=new U,ox=new Zt;class yi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ll.subVectors(i,e).cross(rx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ox.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Vr,vo=new U;class _c{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],b=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,m-p,E-d).normalize(),i[1].setComponents(l+r,f+c,m+p,E+d).normalize(),i[2].setComponents(l+o,f+u,m+g,E+b).normalize(),i[3].setComponents(l-o,f-u,m-g,E-b).normalize(),i[4].setComponents(l-a,f-h,m-_,E-v).normalize(),e===si)i[5].setComponents(l+a,f+h,m+_,E+v).normalize();else if(e===Qo)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(vo.x=s.normal.x>0?t.max.x:t.min.x,vo.y=s.normal.y>0?t.max.y:t.min.y,vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ax(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){const f=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];e?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class vc extends xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const b=d*f-o;for(let v=0;v<c;v++){const E=v*h-r;g.push(E,-b,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const v=b+c*d,E=b+c*(d+1),w=b+1+c*(d+1),R=b+1+c*d;p.push(v,E,R),p.push(E,w,R)}this.setIndex(p),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.width,t.height,t.widthSegments,t.heightSegments)}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,Sx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lx=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`
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
}`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
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
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
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
#endif`,ay=`struct PhysicalMaterial {
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
}`,ly=`
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vy=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
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
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#ifdef USE_TRANSMISSION
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
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
}`,pM=`#if DEPTH_PACKING == 3200
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
}`,mM=`#define DISTANCE
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
}`,gM=`#define DISTANCE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
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
}`,yM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,SM=`uniform vec3 diffuse;
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
}`,EM=`#define LAMBERT
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
}`,bM=`#define LAMBERT
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
}`,TM=`#define MATCAP
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
}`,AM=`#define MATCAP
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
}`,wM=`#define NORMAL
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
}`,RM=`#define NORMAL
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
}`,CM=`#define PHONG
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
}`,PM=`#define PHONG
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
}`,LM=`#define STANDARD
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
}`,DM=`#define STANDARD
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
}`,IM=`#define TOON
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
}`,UM=`#define TOON
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
}`,NM=`uniform float size;
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
}`,OM=`uniform vec3 diffuse;
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
}`,FM=`#include <common>
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
}`,BM=`uniform vec3 color;
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
}`,zM=`uniform float rotation;
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
}`,HM=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:ux,alphamap_pars_fragment:hx,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:_x,begin_vertex:vx,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:Mx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:bx,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:Ax,color_fragment:wx,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Px,common:Lx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Ux,displacementmap_vertex:Nx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Fx,colorspace_fragment:Bx,colorspace_pars_fragment:zx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:kx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:ey,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:jx,fog_fragment:qx,fog_pars_fragment:Yx,gradientmap_pars_fragment:$x,lightmap_fragment:Kx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Qx,lights_pars_begin:ty,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:sy,lights_phong_pars_fragment:ry,lights_physical_fragment:oy,lights_physical_pars_fragment:ay,lights_fragment_begin:ly,lights_fragment_maps:cy,lights_fragment_end:uy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:_y,map_particle_pars_fragment:vy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:yy,morphcolor_vertex:My,morphnormal_vertex:Sy,morphtarget_pars_vertex:Ey,morphtarget_vertex:by,normal_fragment_begin:Ty,normal_fragment_maps:Ay,normal_pars_fragment:wy,normal_pars_vertex:Ry,normal_vertex:Cy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Uy,opaque_fragment:Ny,packing:Oy,premultiplied_alpha_fragment:Fy,project_vertex:By,dithering_fragment:zy,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:jy,skinbase_vertex:qy,skinning_pars_vertex:Yy,skinning_vertex:$y,skinnormal_vertex:Ky,specularmap_fragment:Zy,specularmap_pars_fragment:Jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:tM,transmission_fragment:eM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:sM,uv_vertex:rM,worldpos_vertex:oM,background_vert:aM,background_frag:lM,backgroundCube_vert:cM,backgroundCube_frag:uM,cube_vert:hM,cube_frag:fM,depth_vert:dM,depth_frag:pM,distanceRGBA_vert:mM,distanceRGBA_frag:gM,equirect_vert:_M,equirect_frag:vM,linedashed_vert:xM,linedashed_frag:yM,meshbasic_vert:MM,meshbasic_frag:SM,meshlambert_vert:EM,meshlambert_frag:bM,meshmatcap_vert:TM,meshmatcap_frag:AM,meshnormal_vert:wM,meshnormal_frag:RM,meshphong_vert:CM,meshphong_frag:PM,meshphysical_vert:LM,meshphysical_frag:DM,meshtoon_vert:IM,meshtoon_frag:UM,points_vert:NM,points_frag:OM,shadow_vert:FM,shadow_frag:BM,sprite_vert:zM,sprite_frag:HM},Mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Un={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Un.physical={uniforms:je([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const xo={r:0,b:0,g:0};function GM(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let b=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ma)?(u===void 0&&(u=new Ne(new Ws(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ks(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=oe.getTransfer(v.colorSpace)!==ce,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ne(new vc(2,2),new bn({name:"BackgroundMaterial",uniforms:ks(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(xo,Dd(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function kM(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(N,X,Y,z,B){let V=!1;if(o){const at=_(z,Y,X);c!==at&&(c=at,p(c.object)),V=d(N,z,Y,B),V&&b(N,z,Y,B)}else{const at=X.wireframe===!0;(c.geometry!==z.id||c.program!==Y.id||c.wireframe!==at)&&(c.geometry=z.id,c.program=Y.id,c.wireframe=at,V=!0)}B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,Q(N,X,Y,z),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(N){return i.isWebGL2?n.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,X,Y){const z=Y.wireframe===!0;let B=a[N.id];B===void 0&&(B={},a[N.id]=B);let V=B[X.id];V===void 0&&(V={},B[X.id]=V);let at=V[z];return at===void 0&&(at=m(f()),V[z]=at),at}function m(N){const X=[],Y=[],z=[];for(let B=0;B<s;B++)X[B]=0,Y[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:z,object:N,attributes:{},index:null}}function d(N,X,Y,z){const B=c.attributes,V=X.attributes;let at=0;const rt=Y.getAttributes();for(const ft in rt)if(rt[ft].location>=0){const ct=B[ft];let mt=V[ft];if(mt===void 0&&(ft==="instanceMatrix"&&N.instanceMatrix&&(mt=N.instanceMatrix),ft==="instanceColor"&&N.instanceColor&&(mt=N.instanceColor)),ct===void 0||ct.attribute!==mt||mt&&ct.data!==mt.data)return!0;at++}return c.attributesNum!==at||c.index!==z}function b(N,X,Y,z){const B={},V=X.attributes;let at=0;const rt=Y.getAttributes();for(const ft in rt)if(rt[ft].location>=0){let ct=V[ft];ct===void 0&&(ft==="instanceMatrix"&&N.instanceMatrix&&(ct=N.instanceMatrix),ft==="instanceColor"&&N.instanceColor&&(ct=N.instanceColor));const mt={};mt.attribute=ct,ct&&ct.data&&(mt.data=ct.data),B[ft]=mt,at++}c.attributes=B,c.attributesNum=at,c.index=z}function v(){const N=c.newAttributes;for(let X=0,Y=N.length;X<Y;X++)N[X]=0}function E(N){w(N,0)}function w(N,X){const Y=c.newAttributes,z=c.enabledAttributes,B=c.attributeDivisors;Y[N]=1,z[N]===0&&(n.enableVertexAttribArray(N),z[N]=1),B[N]!==X&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),B[N]=X)}function R(){const N=c.newAttributes,X=c.enabledAttributes;for(let Y=0,z=X.length;Y<z;Y++)X[Y]!==N[Y]&&(n.disableVertexAttribArray(Y),X[Y]=0)}function L(N,X,Y,z,B,V,at){at===!0?n.vertexAttribIPointer(N,X,Y,B,V):n.vertexAttribPointer(N,X,Y,z,B,V)}function Q(N,X,Y,z){if(i.isWebGL2===!1&&(N.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const B=z.attributes,V=Y.getAttributes(),at=X.defaultAttributeValues;for(const rt in V){const ft=V[rt];if(ft.location>=0){let K=B[rt];if(K===void 0&&(rt==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),rt==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const ct=K.normalized,mt=K.itemSize,_t=e.get(K);if(_t===void 0)continue;const Et=_t.buffer,Rt=_t.type,Pt=_t.bytesPerElement,bt=i.isWebGL2===!0&&(Rt===n.INT||Rt===n.UNSIGNED_INT||K.gpuType===gd);if(K.isInterleavedBufferAttribute){const Vt=K.data,y=Vt.stride,O=K.offset;if(Vt.isInstancedInterleavedBuffer){for(let H=0;H<ft.locationSize;H++)w(ft.location+H,Vt.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let H=0;H<ft.locationSize;H++)E(ft.location+H);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let H=0;H<ft.locationSize;H++)L(ft.location+H,mt/ft.locationSize,Rt,ct,y*Pt,(O+mt/ft.locationSize*H)*Pt,bt)}else{if(K.isInstancedBufferAttribute){for(let Vt=0;Vt<ft.locationSize;Vt++)w(ft.location+Vt,K.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Vt=0;Vt<ft.locationSize;Vt++)E(ft.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Vt=0;Vt<ft.locationSize;Vt++)L(ft.location+Vt,mt/ft.locationSize,Rt,ct,mt*Pt,mt/ft.locationSize*Vt*Pt,bt)}}else if(at!==void 0){const ct=at[rt];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(ft.location,ct);break;case 3:n.vertexAttrib3fv(ft.location,ct);break;case 4:n.vertexAttrib4fv(ft.location,ct);break;default:n.vertexAttrib1fv(ft.location,ct)}}}}R()}function S(){G();for(const N in a){const X=a[N];for(const Y in X){const z=X[Y];for(const B in z)g(z[B].object),delete z[B];delete X[Y]}delete a[N]}}function A(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const Y in X){const z=X[Y];for(const B in z)g(z[B].object),delete z[B];delete X[Y]}delete a[N.id]}function W(N){for(const X in a){const Y=a[X];if(Y[N.id]===void 0)continue;const z=Y[N.id];for(const B in z)g(z[B].object),delete z[B];delete Y[N.id]}}function G(){nt(),u=!0,c!==l&&(c=l,p(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:nt,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:E,disableUnusedAttributes:R}}function VM(n,t,e,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),e.update(h,r,1)}function l(u,h,f){if(f===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,f),e.update(h,r,f)}function c(u,h,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function WM(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||t.has("OES_texture_float"),w=v&&E,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:R}}function XM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new yi,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,v=b*4;let E=d.clippingState||null;l.value=E,E=u(g,f,v,p);for(let w=0;w!==v;++w)E[w]=e[w];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,E=p;v!==_;++v,E+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function jM(n){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=zs:a===Ol&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===Ol)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sx(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Od extends Id{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,oh=[.125,.215,.35,.446,.526,.582],ki=20,cl=new Od,ah=new qt;let ul=null,hl=0,fl=0;const zi=(1+Math.sqrt(5))/2,Ms=1/zi,lh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,zi,Ms),new U(0,zi,-Ms),new U(Ms,0,zi),new U(-Ms,0,zi),new U(zi,Ms,0),new U(-zi,Ms,0)];class ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,hl,fl),t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Pr,format:Sn,colorSpace:ci,depthBuffer:!1},s=uh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qM(r)),this._blurMaterial=YM(r,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,i,s){const a=new fn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ah),u.toneMapping=Ti,u.autoClear=!1;const p=new gc({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new Ne(new Ws,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ah),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;yo(s,b*v,d>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===zs||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,cl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lh[(s-1)%lh.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ne(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const d=[];let b=0;for(let L=0;L<ki;++L){const Q=L/_,S=Math.exp(-Q*Q/2);d.push(S),L===0?b+=S:L<m&&(b+=2*S)}for(let L=0;L<d.length;L++)d[L]=d[L]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const E=this._sizeLods[s],w=3*E*(s>v-Rs?s-v+Rs:0),R=4*(this._cubeSize-E);yo(e,w,R,3*E,2*E),l.setRenderTarget(e),l.render(h,cl)}}function qM(n){const t=[],e=[],i=[];let s=n;const r=n-Rs+1+oh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Rs?l=oh[o-n+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),v=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,Q=R>2?0:-1,S=[L,Q,0,L+2/3,Q,0,L+2/3,Q+1,0,L,Q,0,L+2/3,Q+1,0,L,Q+1,0];b.set(S,_*g*R),v.set(f,m*g*R);const A=[R,R,R,R,R,R];E.set(A,d*g*R)}const w=new xe;w.setAttribute("position",new Te(b,_)),w.setAttribute("uv",new Te(v,m)),w.setAttribute("faceIndex",new Te(E,d)),t.push(w),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function uh(n,t,e){const i=new Zi(n,t,e);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function YM(n,t,e){const i=new Float32Array(ki),s=new U(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hh(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fh(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function $M(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nl||l===Ol,u=l===zs||l===Hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ch(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new ch(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function KM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ZM(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let v=0,E=b.length;v<E;v+=3){const w=b[v+0],R=b[v+1],L=b[v+2];f.push(w,R,R,L,L,w)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,E=b.length/3-1;v<E;v+=3){const w=v+0,R=v+1,L=v+2;f.push(w,R,R,L,L,w)}}else return;const m=new(Td(f)?Ld:Pd)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function JM(n,t,e,i){const s=i.isWebGL2;let r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(r,g,a,p*l),e.update(g,r,1)}function h(p,g,_){if(_===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*l,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let b=0;b<_;b++)d+=g[b];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function QM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function tS(n,t){return n[0]-t[0]}function eS(n,t){return Math.abs(t[1])-Math.abs(n[1])}function nS(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new Ie,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let N=function(){G.dispose(),r.delete(u),u.removeEventListener("dispose",N)};_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let Q=0;b===!0&&(Q=1),v===!0&&(Q=2),E===!0&&(Q=3);let S=u.attributes.position.count*Q,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const W=new Float32Array(S*A*4*g),G=new Rd(W,S,A,g);G.type=Si,G.needsUpdate=!0;const nt=Q*4;for(let X=0;X<g;X++){const Y=w[X],z=R[X],B=L[X],V=S*A*4*X;for(let at=0;at<Y.count;at++){const rt=at*nt;b===!0&&(o.fromBufferAttribute(Y,at),W[V+rt+0]=o.x,W[V+rt+1]=o.y,W[V+rt+2]=o.z,W[V+rt+3]=0),v===!0&&(o.fromBufferAttribute(z,at),W[V+rt+4]=o.x,W[V+rt+5]=o.y,W[V+rt+6]=o.z,W[V+rt+7]=0),E===!0&&(o.fromBufferAttribute(B,at),W[V+rt+8]=o.x,W[V+rt+9]=o.y,W[V+rt+10]=o.z,W[V+rt+11]=B.itemSize===4?o.w:1)}}_={count:g,texture:G,size:new yt(S,A)},r.set(u,_),u.addEventListener("dispose",N)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];const d=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<p;v++){const E=g[v];E[0]=v,E[1]=f[v]}g.sort(eS);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(tS);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const E=a[v],w=E[0],R=E[1];w!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+v)!==_[w]&&u.setAttribute("morphTarget"+v,_[w]),m&&u.getAttribute("morphNormal"+v)!==m[w]&&u.setAttribute("morphNormal"+v,m[w]),s[v]=R,d+=R):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const b=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function iS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Fd extends Ze{constructor(t,e,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:$i,u!==$i&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$i&&(i=Mi),i===void 0&&u===Gs&&(i=Yi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bd=new Ze,zd=new Fd(1,1);zd.compareFunction=bd;const Hd=new Rd,Gd=new Gv,kd=new Ud,dh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),_h=new Float32Array(4);function Xs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function va(n,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function oS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function aS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function lS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;_h.set(i),n.uniformMatrix2fv(this.addr,!1,_h),Ce(e,i)}}function cS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;gh.set(i),n.uniformMatrix3fv(this.addr,!1,gh),Ce(e,i)}}function uS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;mh.set(i),n.uniformMatrix4fv(this.addr,!1,mh),Ce(e,i)}}function hS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function dS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function pS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function mS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function _S(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function vS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function xS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?zd:Bd;e.setTexture2D(t||r,s)}function yS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Gd,s)}function MS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||kd,s)}function SS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Hd,s)}function ES(n){switch(n){case 5126:return sS;case 35664:return rS;case 35665:return oS;case 35666:return aS;case 35674:return lS;case 35675:return cS;case 35676:return uS;case 5124:case 35670:return hS;case 35667:case 35671:return fS;case 35668:case 35672:return dS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return _S;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return SS}}function bS(n,t){n.uniform1fv(this.addr,t)}function TS(n,t){const e=Xs(t,this.size,2);n.uniform2fv(this.addr,e)}function AS(n,t){const e=Xs(t,this.size,3);n.uniform3fv(this.addr,e)}function wS(n,t){const e=Xs(t,this.size,4);n.uniform4fv(this.addr,e)}function RS(n,t){const e=Xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function CS(n,t){const e=Xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function PS(n,t){const e=Xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function LS(n,t){n.uniform1iv(this.addr,t)}function DS(n,t){n.uniform2iv(this.addr,t)}function IS(n,t){n.uniform3iv(this.addr,t)}function US(n,t){n.uniform4iv(this.addr,t)}function NS(n,t){n.uniform1uiv(this.addr,t)}function OS(n,t){n.uniform2uiv(this.addr,t)}function FS(n,t){n.uniform3uiv(this.addr,t)}function BS(n,t){n.uniform4uiv(this.addr,t)}function zS(n,t,e){const i=this.cache,s=t.length,r=va(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bd,r[o])}function HS(n,t,e){const i=this.cache,s=t.length,r=va(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gd,r[o])}function GS(n,t,e){const i=this.cache,s=t.length,r=va(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kd,r[o])}function kS(n,t,e){const i=this.cache,s=t.length,r=va(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hd,r[o])}function VS(n){switch(n){case 5126:return bS;case 35664:return TS;case 35665:return AS;case 35666:return wS;case 35674:return RS;case 35675:return CS;case 35676:return PS;case 5124:case 35670:return LS;case 35667:case 35671:return DS;case 35668:case 35672:return IS;case 35669:case 35673:return US;case 5125:return NS;case 36294:return OS;case 36295:return FS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return kS}}class WS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ES(e.type)}}class XS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VS(e.type)}}class jS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function vh(n,t){n.seq.push(t),n.map[t.id]=t}function qS(n,t,e){const i=n.name,s=i.length;for(dl.lastIndex=0;;){const r=dl.exec(i),o=dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vh(e,c===void 0?new WS(a,n,t):new XS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new jS(a),vh(e,h)),e=h}}}class Oo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function xh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const YS=37297;let $S=0;function KS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function ZS(n){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(n);let i;switch(t===e?i="":t===Jo&&e===Zo?i="LinearDisplayP3ToLinearSRGB":t===Zo&&e===Jo&&(i="LinearSRGBToLinearDisplayP3"),n){case ci:case _a:return[i,"LinearTransferOETF"];case Oe:case dc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+KS(n.getShaderSource(t),o)}else return s}function JS(n,t){const e=ZS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function QS(n,t){let e;switch(t){case K0:e="Linear";break;case Z0:e="Reinhard";break;case J0:e="OptimizedCineon";break;case Q0:e="ACESFilmic";break;case ev:e="AgX";break;case tv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function eE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function nE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cs(n){return n!==""}function Mh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(sE,oE)}const rE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oE(n,t){let e=Yt[t];if(e===void 0){const i=rE.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}const aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(n){return n.replace(aE,lE)}function lE(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bh(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===b0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function uE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Hs:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function fE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pa:t="ENVMAP_BLENDING_MULTIPLY";break;case Y0:t="ENVMAP_BLENDING_MIX";break;case $0:t="ENVMAP_BLENDING_ADD";break}return t}function dE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function pE(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cE(e),c=uE(e),u=hE(e),h=fE(e),f=dE(e),p=e.isWebGL2?"":tE(e),g=eE(e),_=nE(r),m=s.createProgram();let d,b,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cs).join(`
`),d.length>0&&(d+=`
`),b=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cs).join(`
`),b.length>0&&(b+=`
`)):(d=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),b=[p,bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Ti?QS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,JS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=kl(o),o=Mh(o,e),o=Sh(o,e),a=kl(a),a=Mh(a,e),a=Sh(a,e),o=Eh(o),a=Eh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const E=v+d+o,w=v+b+a,R=xh(s,s.VERTEX_SHADER,E),L=xh(s,s.FRAGMENT_SHADER,w);s.attachShader(m,R),s.attachShader(m,L),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Q(G){if(n.debug.checkShaderErrors){const nt=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(R).trim(),X=s.getShaderInfoLog(L).trim();let Y=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,L);else{const B=yh(s,R,"vertex"),V=yh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+B+`
`+V)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(N===""||X==="")&&(z=!1);z&&(G.diagnostics={runnable:Y,programLog:nt,vertexShader:{log:N,prefix:d},fragmentShader:{log:X,prefix:b}})}s.deleteShader(R),s.deleteShader(L),S=new Oo(s,m),A=iE(s,m)}let S;this.getUniforms=function(){return S===void 0&&Q(this),S};let A;this.getAttributes=function(){return A===void 0&&Q(this),A};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(m,YS)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$S++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=L,this}let mE=0;class gE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _E(t),e.set(t,i)),i}}class _E{constructor(t){this.id=mE++,this.code=t,this.usedTimes=0}}function vE(n,t,e,i,s,r,o){const a=new mc,l=new gE,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,A,W,G,nt){const N=G.fog,X=nt.geometry,Y=S.isMeshStandardMaterial?G.environment:null,z=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),B=z&&z.mapping===ma?z.image.height:null,V=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rt=at!==void 0?at.length:0;let ft=0;X.morphAttributes.position!==void 0&&(ft=1),X.morphAttributes.normal!==void 0&&(ft=2),X.morphAttributes.color!==void 0&&(ft=3);let K,ct,mt,_t;if(V){const ye=Un[V];K=ye.vertexShader,ct=ye.fragmentShader}else K=S.vertexShader,ct=S.fragmentShader,l.update(S),mt=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const Et=n.getRenderTarget(),Rt=nt.isInstancedMesh===!0,Pt=nt.isBatchedMesh===!0,bt=!!S.map,Vt=!!S.matcap,y=!!z,O=!!S.aoMap,H=!!S.lightMap,$=!!S.bumpMap,j=!!S.normalMap,et=!!S.displacementMap,st=!!S.emissiveMap,M=!!S.metalnessMap,x=!!S.roughnessMap,D=S.anisotropy>0,I=S.clearcoat>0,C=S.iridescence>0,k=S.sheen>0,it=S.transmission>0,ut=D&&!!S.anisotropyMap,ht=I&&!!S.clearcoatMap,vt=I&&!!S.clearcoatNormalMap,At=I&&!!S.clearcoatRoughnessMap,lt=C&&!!S.iridescenceMap,Wt=C&&!!S.iridescenceThicknessMap,Nt=k&&!!S.sheenColorMap,Ut=k&&!!S.sheenRoughnessMap,Lt=!!S.specularMap,xt=!!S.specularColorMap,P=!!S.specularIntensityMap,pt=it&&!!S.transmissionMap,Ct=it&&!!S.thicknessMap,wt=!!S.gradientMap,dt=!!S.alphaMap,F=S.alphaTest>0,gt=!!S.alphaHash,St=!!S.extensions,Ot=!!X.attributes.uv1,It=!!X.attributes.uv2,Qt=!!X.attributes.uv3;let te=Ti;return S.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(te=n.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:ct,defines:S.defines,customVertexShaderID:mt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Pt,instancing:Rt,instancingColor:Rt&&nt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ci,map:bt,matcap:Vt,envMap:y,envMapMode:y&&z.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:H,bumpMap:$,normalMap:j,displacementMap:f&&et,emissiveMap:st,normalMapObjectSpace:j&&S.normalMapType===dv,normalMapTangentSpace:j&&S.normalMapType===ga,metalnessMap:M,roughnessMap:x,anisotropy:D,anisotropyMap:ut,clearcoat:I,clearcoatMap:ht,clearcoatNormalMap:vt,clearcoatRoughnessMap:At,iridescence:C,iridescenceMap:lt,iridescenceThicknessMap:Wt,sheen:k,sheenColorMap:Nt,sheenRoughnessMap:Ut,specularMap:Lt,specularColorMap:xt,specularIntensityMap:P,transmission:it,transmissionMap:pt,thicknessMap:Ct,gradientMap:wt,opaque:S.transparent===!1&&S.blending===Ns,alphaMap:dt,alphaTest:F,alphaHash:gt,combine:S.combine,mapUv:bt&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:H&&_(S.lightMap.channel),bumpMapUv:$&&_(S.bumpMap.channel),normalMapUv:j&&_(S.normalMap.channel),displacementMapUv:et&&_(S.displacementMap.channel),emissiveMapUv:st&&_(S.emissiveMap.channel),metalnessMapUv:M&&_(S.metalnessMap.channel),roughnessMapUv:x&&_(S.roughnessMap.channel),anisotropyMapUv:ut&&_(S.anisotropyMap.channel),clearcoatMapUv:ht&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(S.sheenRoughnessMap.channel),specularMapUv:Lt&&_(S.specularMap.channel),specularColorMapUv:xt&&_(S.specularColorMap.channel),specularIntensityMapUv:P&&_(S.specularIntensityMap.channel),transmissionMapUv:pt&&_(S.transmissionMap.channel),thicknessMapUv:Ct&&_(S.thicknessMap.channel),alphaMapUv:dt&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(j||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:It,vertexUv3s:Qt,pointsUvs:nt.isPoints===!0&&!!X.attributes.uv&&(bt||dt),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:nt.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ft,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:bt&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ii,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:St&&S.extensions.derivatives===!0,extensionFragDepth:St&&S.extensions.fragDepth===!0,extensionDrawBuffers:St&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)A.push(W),A.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(b(A,S),v(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function b(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function E(S){const A=g[S.type];let W;if(A){const G=Un[A];W=tx.clone(G.uniforms)}else W=S.uniforms;return W}function w(S,A){let W;for(let G=0,nt=c.length;G<nt;G++){const N=c[G];if(N.cacheKey===A){W=N,++W.usedTimes;break}}return W===void 0&&(W=new pE(n,A,S,r),c.push(W)),W}function R(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function Q(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:w,releaseProgram:R,releaseShaderCache:L,programs:c,dispose:Q}}function xE(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function yE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Th(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ah(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||yE),i.length>1&&i.sort(f||Th),s.length>1&&s.sort(f||Th)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ME(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ah,n.set(i,[o])):s>=r.length?(o=new Ah,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function SE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new qt};break;case"SpotLight":e={position:new U,direction:new U,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function EE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let bE=0;function TE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function AE(n,t){const e=new SE,i=EE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new U);const r=new U,o=new he,a=new he;function l(u,h){let f=0,p=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let _=0,m=0,d=0,b=0,v=0,E=0,w=0,R=0,L=0,Q=0,S=0;u.sort(TE);const A=h===!0?Math.PI:1;for(let G=0,nt=u.length;G<nt;G++){const N=u[G],X=N.color,Y=N.intensity,z=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=X.r*Y*A,p+=X.g*Y*A,g+=X.b*Y*A;else if(N.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(N.sh.coefficients[V],Y);S++}else if(N.isDirectionalLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const at=N.shadow,rt=i.get(N);rt.shadowBias=at.bias,rt.shadowNormalBias=at.normalBias,rt.shadowRadius=at.radius,rt.shadowMapSize=at.mapSize,s.directionalShadow[_]=rt,s.directionalShadowMap[_]=B,s.directionalShadowMatrix[_]=N.shadow.matrix,E++}s.directional[_]=V,_++}else if(N.isSpotLight){const V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(X).multiplyScalar(Y*A),V.distance=z,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,s.spot[d]=V;const at=N.shadow;if(N.map&&(s.spotLightMap[L]=N.map,L++,at.updateMatrices(N),N.castShadow&&Q++),s.spotLightMatrix[d]=at.matrix,N.castShadow){const rt=i.get(N);rt.shadowBias=at.bias,rt.shadowNormalBias=at.normalBias,rt.shadowRadius=at.radius,rt.shadowMapSize=at.mapSize,s.spotShadow[d]=rt,s.spotShadowMap[d]=B,R++}d++}else if(N.isRectAreaLight){const V=e.get(N);V.color.copy(X).multiplyScalar(Y),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),s.rectArea[b]=V,b++}else if(N.isPointLight){const V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),V.distance=N.distance,V.decay=N.decay,N.castShadow){const at=N.shadow,rt=i.get(N);rt.shadowBias=at.bias,rt.shadowNormalBias=at.normalBias,rt.shadowRadius=at.radius,rt.shadowMapSize=at.mapSize,rt.shadowCameraNear=at.camera.near,rt.shadowCameraFar=at.camera.far,s.pointShadow[m]=rt,s.pointShadowMap[m]=B,s.pointShadowMatrix[m]=N.shadow.matrix,w++}s.point[m]=V,m++}else if(N.isHemisphereLight){const V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(Y*A),V.groundColor.copy(N.groundColor).multiplyScalar(Y*A),s.hemi[v]=V,v++}}b>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const W=s.hash;(W.directionalLength!==_||W.pointLength!==m||W.spotLength!==d||W.rectAreaLength!==b||W.hemiLength!==v||W.numDirectionalShadows!==E||W.numPointShadows!==w||W.numSpotShadows!==R||W.numSpotMaps!==L||W.numLightProbes!==S)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=b,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=R+L-Q,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=Q,s.numLightProbes=S,W.directionalLength=_,W.pointLength=m,W.spotLength=d,W.rectAreaLength=b,W.hemiLength=v,W.numDirectionalShadows=E,W.numPointShadows=w,W.numSpotShadows=R,W.numSpotMaps=L,W.numLightProbes=S,s.version=bE++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const E=u[b];if(E.isDirectionalLight){const w=s.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),f++}else if(E.isSpotLight){const w=s.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const w=s.rectArea[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const w=s.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const w=s.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function wh(n,t){const e=new AE(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function wE(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new wh(n,t),e.set(r,[l])):o>=a.length?(l=new wh(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class RE extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CE extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LE=`uniform sampler2D shadow_pass;
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
}`;function DE(n,t,e){let i=new _c;const s=new yt,r=new yt,o=new Ie,a=new RE({depthPacking:fv}),l=new CE,c={},u=e.maxTextureSize,h={[Hn]:Qe,[Qe]:Hn,[ii]:ii},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:PE,fragmentShader:LE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let d=this.type;this.render=function(R,L,Q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),A=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),G=n.state;G.setBlending(bi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const nt=d!==Zn&&this.type===Zn,N=d===Zn&&this.type!==Zn;for(let X=0,Y=R.length;X<Y;X++){const z=R[X],B=z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const V=B.getFrameExtents();if(s.multiply(V),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,B.mapSize.y=r.y)),B.map===null||nt===!0||N===!0){const rt=this.type!==Zn?{minFilter:qe,magFilter:qe}:{};B.map!==null&&B.map.dispose(),B.map=new Zi(s.x,s.y,rt),B.map.texture.name=z.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const at=B.getViewportCount();for(let rt=0;rt<at;rt++){const ft=B.getViewport(rt);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),G.viewport(o),B.updateMatrices(z,rt),i=B.getFrustum(),E(L,Q,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Zn&&b(B,Q),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,W)};function b(R,L){const Q=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zi(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,Q,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,Q,p,_,null)}function v(R,L,Q,S){let A=null;const W=Q.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)A=W;else if(A=Q.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const G=A.uuid,nt=L.uuid;let N=c[G];N===void 0&&(N={},c[G]=N);let X=N[nt];X===void 0&&(X=A.clone(),N[nt]=X,L.addEventListener("dispose",w)),A=X}if(A.visible=L.visible,A.wireframe=L.wireframe,S===Zn?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:h[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,Q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=n.properties.get(A);G.light=Q}return A}function E(R,L,Q,S,A){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===Zn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld);const nt=t.update(R),N=R.material;if(Array.isArray(N)){const X=nt.groups;for(let Y=0,z=X.length;Y<z;Y++){const B=X[Y],V=N[B.materialIndex];if(V&&V.visible){const at=v(R,V,S,A);R.onBeforeShadow(n,R,L,Q,nt,at,B),n.renderBufferDirect(Q,null,nt,at,R,B),R.onAfterShadow(n,R,L,Q,nt,at,B)}}}else if(N.visible){const X=v(R,N,S,A);R.onBeforeShadow(n,R,L,Q,nt,X,null),n.renderBufferDirect(Q,null,nt,X,R,null),R.onAfterShadow(n,R,L,Q,nt,X,null)}}const G=R.children;for(let nt=0,N=G.length;nt<N;nt++)E(G[nt],L,Q,S,A)}function w(R){R.target.removeEventListener("dispose",w);for(const Q in c){const S=c[Q],A=R.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function IE(n,t,e){const i=e.isWebGL2;function s(){let F=!1;const gt=new Ie;let St=null;const Ot=new Ie(0,0,0,0);return{setMask:function(It){St!==It&&!F&&(n.colorMask(It,It,It,It),St=It)},setLocked:function(It){F=It},setClear:function(It,Qt,te,_e,ye){ye===!0&&(It*=_e,Qt*=_e,te*=_e),gt.set(It,Qt,te,_e),Ot.equals(gt)===!1&&(n.clearColor(It,Qt,te,_e),Ot.copy(gt))},reset:function(){F=!1,St=null,Ot.set(-1,0,0,0)}}}function r(){let F=!1,gt=null,St=null,Ot=null;return{setTest:function(It){It?Pt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(It){gt!==It&&!F&&(n.depthMask(It),gt=It)},setFunc:function(It){if(St!==It){switch(It){case G0:n.depthFunc(n.NEVER);break;case k0:n.depthFunc(n.ALWAYS);break;case V0:n.depthFunc(n.LESS);break;case $o:n.depthFunc(n.LEQUAL);break;case W0:n.depthFunc(n.EQUAL);break;case X0:n.depthFunc(n.GEQUAL);break;case j0:n.depthFunc(n.GREATER);break;case q0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=It}},setLocked:function(It){F=It},setClear:function(It){Ot!==It&&(n.clearDepth(It),Ot=It)},reset:function(){F=!1,gt=null,St=null,Ot=null}}}function o(){let F=!1,gt=null,St=null,Ot=null,It=null,Qt=null,te=null,_e=null,ye=null;return{setTest:function(ee){F||(ee?Pt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(ee){gt!==ee&&!F&&(n.stencilMask(ee),gt=ee)},setFunc:function(ee,Ee,Rn){(St!==ee||Ot!==Ee||It!==Rn)&&(n.stencilFunc(ee,Ee,Rn),St=ee,Ot=Ee,It=Rn)},setOp:function(ee,Ee,Rn){(Qt!==ee||te!==Ee||_e!==Rn)&&(n.stencilOp(ee,Ee,Rn),Qt=ee,te=Ee,_e=Rn)},setLocked:function(ee){F=ee},setClear:function(ee){ye!==ee&&(n.clearStencil(ee),ye=ee)},reset:function(){F=!1,gt=null,St=null,Ot=null,It=null,Qt=null,te=null,_e=null,ye=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,E=null,w=null,R=null,L=null,Q=null,S=new qt(0,0,0),A=0,W=!1,G=null,nt=null,N=null,X=null,Y=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const at=n.getParameter(n.VERSION);at.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(at)[1]),B=V>=1):at.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),B=V>=2);let rt=null,ft={};const K=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),mt=new Ie().fromArray(K),_t=new Ie().fromArray(ct);function Et(F,gt,St,Ot){const It=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(F,Qt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<St;te++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(gt,0,n.RGBA,1,1,Ot,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(gt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return Qt}const Rt={};Rt[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),Rt[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Rt[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Rt[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(n.DEPTH_TEST),l.setFunc($o),st(!1),M(uu),Pt(n.CULL_FACE),j(bi);function Pt(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function bt(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function Vt(F,gt){return p[F]!==gt?(n.bindFramebuffer(F,gt),p[F]=gt,i&&(F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=gt),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=gt)),!0):!1}function y(F,gt){let St=_,Ot=!1;if(F)if(St=g.get(gt),St===void 0&&(St=[],g.set(gt,St)),F.isWebGLMultipleRenderTargets){const It=F.texture;if(St.length!==It.length||St[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,te=It.length;Qt<te;Qt++)St[Qt]=n.COLOR_ATTACHMENT0+Qt;St.length=It.length,Ot=!0}}else St[0]!==n.COLOR_ATTACHMENT0&&(St[0]=n.COLOR_ATTACHMENT0,Ot=!0);else St[0]!==n.BACK&&(St[0]=n.BACK,Ot=!0);Ot&&(e.isWebGL2?n.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function O(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const H={[Gi]:n.FUNC_ADD,[A0]:n.FUNC_SUBTRACT,[w0]:n.FUNC_REVERSE_SUBTRACT};if(i)H[du]=n.MIN,H[pu]=n.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(H[du]=F.MIN_EXT,H[pu]=F.MAX_EXT)}const $={[R0]:n.ZERO,[C0]:n.ONE,[P0]:n.SRC_COLOR,[Il]:n.SRC_ALPHA,[O0]:n.SRC_ALPHA_SATURATE,[U0]:n.DST_COLOR,[D0]:n.DST_ALPHA,[L0]:n.ONE_MINUS_SRC_COLOR,[Ul]:n.ONE_MINUS_SRC_ALPHA,[N0]:n.ONE_MINUS_DST_COLOR,[I0]:n.ONE_MINUS_DST_ALPHA,[F0]:n.CONSTANT_COLOR,[B0]:n.ONE_MINUS_CONSTANT_COLOR,[z0]:n.CONSTANT_ALPHA,[H0]:n.ONE_MINUS_CONSTANT_ALPHA};function j(F,gt,St,Ot,It,Qt,te,_e,ye,ee){if(F===bi){d===!0&&(bt(n.BLEND),d=!1);return}if(d===!1&&(Pt(n.BLEND),d=!0),F!==T0){if(F!==b||ee!==W){if((v!==Gi||R!==Gi)&&(n.blendEquation(n.FUNC_ADD),v=Gi,R=Gi),ee)switch(F){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ln:n.blendFunc(n.ONE,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ln:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,w=null,L=null,Q=null,S.set(0,0,0),A=0,b=F,W=ee}return}It=It||gt,Qt=Qt||St,te=te||Ot,(gt!==v||It!==R)&&(n.blendEquationSeparate(H[gt],H[It]),v=gt,R=It),(St!==E||Ot!==w||Qt!==L||te!==Q)&&(n.blendFuncSeparate($[St],$[Ot],$[Qt],$[te]),E=St,w=Ot,L=Qt,Q=te),(_e.equals(S)===!1||ye!==A)&&(n.blendColor(_e.r,_e.g,_e.b,ye),S.copy(_e),A=ye),b=F,W=!1}function et(F,gt){F.side===ii?bt(n.CULL_FACE):Pt(n.CULL_FACE);let St=F.side===Qe;gt&&(St=!St),st(St),F.blending===Ns&&F.transparent===!1?j(bi):j(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Ot=F.stencilWrite;c.setTest(Ot),Ot&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),D(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Pt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(F){G!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),G=F)}function M(F){F!==S0?(Pt(n.CULL_FACE),F!==nt&&(F===uu?n.cullFace(n.BACK):F===E0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),nt=F}function x(F){F!==N&&(B&&n.lineWidth(F),N=F)}function D(F,gt,St){F?(Pt(n.POLYGON_OFFSET_FILL),(X!==gt||Y!==St)&&(n.polygonOffset(gt,St),X=gt,Y=St)):bt(n.POLYGON_OFFSET_FILL)}function I(F){F?Pt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function C(F){F===void 0&&(F=n.TEXTURE0+z-1),rt!==F&&(n.activeTexture(F),rt=F)}function k(F,gt,St){St===void 0&&(rt===null?St=n.TEXTURE0+z-1:St=rt);let Ot=ft[St];Ot===void 0&&(Ot={type:void 0,texture:void 0},ft[St]=Ot),(Ot.type!==F||Ot.texture!==gt)&&(rt!==St&&(n.activeTexture(St),rt=St),n.bindTexture(F,gt||Rt[F]),Ot.type=F,Ot.texture=gt)}function it(){const F=ft[rt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ut(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(F){mt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),mt.copy(F))}function pt(F){_t.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),_t.copy(F))}function Ct(F,gt){let St=h.get(gt);St===void 0&&(St=new WeakMap,h.set(gt,St));let Ot=St.get(F);Ot===void 0&&(Ot=n.getUniformBlockIndex(gt,F.name),St.set(F,Ot))}function wt(F,gt){const Ot=h.get(gt).get(F);u.get(gt)!==Ot&&(n.uniformBlockBinding(gt,Ot,F.__bindingPointIndex),u.set(gt,Ot))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},rt=null,ft={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,E=null,w=null,R=null,L=null,Q=null,S=new qt(0,0,0),A=0,W=!1,G=null,nt=null,N=null,X=null,Y=null,mt.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:bt,bindFramebuffer:Vt,drawBuffers:y,useProgram:O,setBlending:j,setMaterial:et,setFlipSided:st,setCullFace:M,setLineWidth:x,setPolygonOffset:D,setScissorTest:I,activeTexture:C,bindTexture:k,unbindTexture:it,compressedTexImage2D:ut,compressedTexImage3D:ht,texImage2D:Lt,texImage3D:xt,updateUBOMapping:Ct,uniformBlockBinding:wt,texStorage2D:Nt,texStorage3D:Ut,texSubImage2D:vt,texSubImage3D:At,compressedTexSubImage2D:lt,compressedTexSubImage3D:Wt,scissor:P,viewport:pt,reset:dt}}function UE(n,t,e,i,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return p?new OffscreenCanvas(M,x):Dr("canvas")}function _(M,x,D,I){let C=1;if((M.width>I||M.height>I)&&(C=I/Math.max(M.width,M.height)),C<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const k=x?ta:Math.floor,it=k(C*M.width),ut=k(C*M.height);h===void 0&&(h=g(it,ut));const ht=D?g(it,ut):h;return ht.width=it,ht.height=ut,ht.getContext("2d").drawImage(M,0,0,it,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+it+"x"+ut+")."),ht}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Gl(M.width)&&Gl(M.height)}function d(M){return a?!1:M.wrapS!==Mn||M.wrapT!==Mn||M.minFilter!==qe&&M.minFilter!==un}function b(M,x){return M.generateMipmaps&&x&&M.minFilter!==qe&&M.minFilter!==un}function v(M){n.generateMipmap(M)}function E(M,x,D,I,C=!1){if(a===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let k=x;if(x===n.RED&&(D===n.FLOAT&&(k=n.R32F),D===n.HALF_FLOAT&&(k=n.R16F),D===n.UNSIGNED_BYTE&&(k=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(k=n.R8UI),D===n.UNSIGNED_SHORT&&(k=n.R16UI),D===n.UNSIGNED_INT&&(k=n.R32UI),D===n.BYTE&&(k=n.R8I),D===n.SHORT&&(k=n.R16I),D===n.INT&&(k=n.R32I)),x===n.RG&&(D===n.FLOAT&&(k=n.RG32F),D===n.HALF_FLOAT&&(k=n.RG16F),D===n.UNSIGNED_BYTE&&(k=n.RG8)),x===n.RGBA){const it=C?Ko:oe.getTransfer(I);D===n.FLOAT&&(k=n.RGBA32F),D===n.HALF_FLOAT&&(k=n.RGBA16F),D===n.UNSIGNED_BYTE&&(k=it===ce?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function w(M,x,D){return b(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==qe&&M.minFilter!==un?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){return M===qe||M===mu||M===Ha?n.NEAREST:n.LINEAR}function L(M){const x=M.target;x.removeEventListener("dispose",L),S(x),x.isVideoTexture&&u.delete(x)}function Q(M){const x=M.target;x.removeEventListener("dispose",Q),W(x)}function S(M){const x=i.get(M);if(x.__webglInit===void 0)return;const D=M.source,I=f.get(D);if(I){const C=I[x.__cacheKey];C.usedTimes--,C.usedTimes===0&&A(M),Object.keys(I).length===0&&f.delete(D)}i.remove(M)}function A(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const D=M.source,I=f.get(D);delete I[x.__cacheKey],o.memory.textures--}function W(M){const x=M.texture,D=i.get(M),I=i.get(x);if(I.__webglTexture!==void 0&&(n.deleteTexture(I.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(D.__webglFramebuffer[C]))for(let k=0;k<D.__webglFramebuffer[C].length;k++)n.deleteFramebuffer(D.__webglFramebuffer[C][k]);else n.deleteFramebuffer(D.__webglFramebuffer[C]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[C])}else{if(Array.isArray(D.__webglFramebuffer))for(let C=0;C<D.__webglFramebuffer.length;C++)n.deleteFramebuffer(D.__webglFramebuffer[C]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let C=0;C<D.__webglColorRenderbuffer.length;C++)D.__webglColorRenderbuffer[C]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[C]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let C=0,k=x.length;C<k;C++){const it=i.get(x[C]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(x[C])}i.remove(x),i.remove(M)}let G=0;function nt(){G=0}function N(){const M=G;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),G+=1,M}function X(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function Y(M,x){const D=i.get(M);if(M.isVideoTexture&&et(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const I=M.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(D,M,x);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function z(M,x){const D=i.get(M);if(M.version>0&&D.__version!==M.version){mt(D,M,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function B(M,x){const D=i.get(M);if(M.version>0&&D.__version!==M.version){mt(D,M,x);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function V(M,x){const D=i.get(M);if(M.version>0&&D.__version!==M.version){_t(D,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const at={[Fl]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},rt={[qe]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[nv]:n.LINEAR_MIPMAP_NEAREST,[Cr]:n.LINEAR_MIPMAP_LINEAR},ft={[pv]:n.NEVER,[yv]:n.ALWAYS,[mv]:n.LESS,[bd]:n.LEQUAL,[gv]:n.EQUAL,[xv]:n.GEQUAL,[_v]:n.GREATER,[vv]:n.NOTEQUAL};function K(M,x,D){if(D?(n.texParameteri(M,n.TEXTURE_WRAP_S,at[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,at[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,at[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,rt[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,rt[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Mn||x.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==qe&&x.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===qe||x.minFilter!==Ha&&x.minFilter!==Cr||x.type===Si&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Pr&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ct(M,x){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",L));const I=x.source;let C=f.get(I);C===void 0&&(C={},f.set(I,C));const k=X(x);if(k!==M.__cacheKey){C[k]===void 0&&(C[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),C[k].usedTimes++;const it=C[M.__cacheKey];it!==void 0&&(C[M.__cacheKey].usedTimes--,it.usedTimes===0&&A(x)),M.__cacheKey=k,M.__webglTexture=C[k].texture}return D}function mt(M,x,D){let I=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(I=n.TEXTURE_3D);const C=ct(M,x),k=x.source;e.bindTexture(I,M.__webglTexture,n.TEXTURE0+D);const it=i.get(k);if(k.version!==it.__version||C===!0){e.activeTexture(n.TEXTURE0+D);const ut=oe.getPrimaries(oe.workingColorSpace),ht=x.colorSpace===dn?null:oe.getPrimaries(x.colorSpace),vt=x.colorSpace===dn||ut===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const At=d(x)&&m(x.image)===!1;let lt=_(x.image,At,!1,s.maxTextureSize);lt=st(x,lt);const Wt=m(lt)||a,Nt=r.convert(x.format,x.colorSpace);let Ut=r.convert(x.type),Lt=E(x.internalFormat,Nt,Ut,x.colorSpace,x.isVideoTexture);K(I,x,Wt);let xt;const P=x.mipmaps,pt=a&&x.isVideoTexture!==!0&&Lt!==Sd,Ct=it.__version===void 0||C===!0,wt=w(x,lt,Wt);if(x.isDepthTexture)Lt=n.DEPTH_COMPONENT,a?x.type===Si?Lt=n.DEPTH_COMPONENT32F:x.type===Mi?Lt=n.DEPTH_COMPONENT24:x.type===Yi?Lt=n.DEPTH24_STENCIL8:Lt=n.DEPTH_COMPONENT16:x.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===$i&&Lt===n.DEPTH_COMPONENT&&x.type!==fc&&x.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mi,Ut=r.convert(x.type)),x.format===Gs&&Lt===n.DEPTH_COMPONENT&&(Lt=n.DEPTH_STENCIL,x.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Yi,Ut=r.convert(x.type))),Ct&&(pt?e.texStorage2D(n.TEXTURE_2D,1,Lt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,lt.width,lt.height,0,Nt,Ut,null));else if(x.isDataTexture)if(P.length>0&&Wt){pt&&Ct&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,P[0].width,P[0].height);for(let dt=0,F=P.length;dt<F;dt++)xt=P[dt],pt?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,xt.width,xt.height,Nt,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,dt,Lt,xt.width,xt.height,0,Nt,Ut,xt.data);x.generateMipmaps=!1}else pt?(Ct&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,lt.width,lt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,Nt,Ut,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,lt.width,lt.height,0,Nt,Ut,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){pt&&Ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Lt,P[0].width,P[0].height,lt.depth);for(let dt=0,F=P.length;dt<F;dt++)xt=P[dt],x.format!==Sn?Nt!==null?pt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,xt.width,xt.height,lt.depth,Nt,xt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,Lt,xt.width,xt.height,lt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,xt.width,xt.height,lt.depth,Nt,Ut,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,Lt,xt.width,xt.height,lt.depth,0,Nt,Ut,xt.data)}else{pt&&Ct&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,P[0].width,P[0].height);for(let dt=0,F=P.length;dt<F;dt++)xt=P[dt],x.format!==Sn?Nt!==null?pt?e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,xt.width,xt.height,Nt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,xt.width,xt.height,Nt,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,dt,Lt,xt.width,xt.height,0,Nt,Ut,xt.data)}else if(x.isDataArrayTexture)pt?(Ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Lt,lt.width,lt.height,lt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Nt,Ut,lt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,lt.width,lt.height,lt.depth,0,Nt,Ut,lt.data);else if(x.isData3DTexture)pt?(Ct&&e.texStorage3D(n.TEXTURE_3D,wt,Lt,lt.width,lt.height,lt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Nt,Ut,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,lt.width,lt.height,lt.depth,0,Nt,Ut,lt.data);else if(x.isFramebufferTexture){if(Ct)if(pt)e.texStorage2D(n.TEXTURE_2D,wt,Lt,lt.width,lt.height);else{let dt=lt.width,F=lt.height;for(let gt=0;gt<wt;gt++)e.texImage2D(n.TEXTURE_2D,gt,Lt,dt,F,0,Nt,Ut,null),dt>>=1,F>>=1}}else if(P.length>0&&Wt){pt&&Ct&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,P[0].width,P[0].height);for(let dt=0,F=P.length;dt<F;dt++)xt=P[dt],pt?e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Nt,Ut,xt):e.texImage2D(n.TEXTURE_2D,dt,Lt,Nt,Ut,xt);x.generateMipmaps=!1}else pt?(Ct&&e.texStorage2D(n.TEXTURE_2D,wt,Lt,lt.width,lt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,Ut,lt)):e.texImage2D(n.TEXTURE_2D,0,Lt,Nt,Ut,lt);b(x,Wt)&&v(I),it.__version=k.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _t(M,x,D){if(x.image.length!==6)return;const I=ct(M,x),C=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const k=i.get(C);if(C.version!==k.__version||I===!0){e.activeTexture(n.TEXTURE0+D);const it=oe.getPrimaries(oe.workingColorSpace),ut=x.colorSpace===dn?null:oe.getPrimaries(x.colorSpace),ht=x.colorSpace===dn||it===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const vt=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,lt=[];for(let dt=0;dt<6;dt++)!vt&&!At?lt[dt]=_(x.image[dt],!1,!0,s.maxCubemapSize):lt[dt]=At?x.image[dt].image:x.image[dt],lt[dt]=st(x,lt[dt]);const Wt=lt[0],Nt=m(Wt)||a,Ut=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),xt=E(x.internalFormat,Ut,Lt,x.colorSpace),P=a&&x.isVideoTexture!==!0,pt=k.__version===void 0||I===!0;let Ct=w(x,Wt,Nt);K(n.TEXTURE_CUBE_MAP,x,Nt);let wt;if(vt){P&&pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,xt,Wt.width,Wt.height);for(let dt=0;dt<6;dt++){wt=lt[dt].mipmaps;for(let F=0;F<wt.length;F++){const gt=wt[F];x.format!==Sn?Ut!==null?P?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,0,0,gt.width,gt.height,Ut,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,xt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,0,0,gt.width,gt.height,Ut,Lt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,xt,gt.width,gt.height,0,Ut,Lt,gt.data)}}}else{wt=x.mipmaps,P&&pt&&(wt.length>0&&Ct++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,xt,lt[0].width,lt[0].height));for(let dt=0;dt<6;dt++)if(At){P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,lt[dt].width,lt[dt].height,Ut,Lt,lt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,xt,lt[dt].width,lt[dt].height,0,Ut,Lt,lt[dt].data);for(let F=0;F<wt.length;F++){const St=wt[F].image[dt].image;P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,0,0,St.width,St.height,Ut,Lt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,xt,St.width,St.height,0,Ut,Lt,St.data)}}else{P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ut,Lt,lt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,xt,Ut,Lt,lt[dt]);for(let F=0;F<wt.length;F++){const gt=wt[F];P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,0,0,Ut,Lt,gt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,xt,Ut,Lt,gt.image[dt])}}}b(x,Nt)&&v(n.TEXTURE_CUBE_MAP),k.__version=C.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Et(M,x,D,I,C,k){const it=r.convert(D.format,D.colorSpace),ut=r.convert(D.type),ht=E(D.internalFormat,it,ut,D.colorSpace);if(!i.get(x).__hasExternalTextures){const At=Math.max(1,x.width>>k),lt=Math.max(1,x.height>>k);C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?e.texImage3D(C,k,ht,At,lt,x.depth,0,it,ut,null):e.texImage2D(C,k,ht,At,lt,0,it,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),j(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,C,i.get(D).__webglTexture,0,$(x)):(C===n.TEXTURE_2D||C>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,C,i.get(D).__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(M,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let I=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||j(x)){const C=x.depthTexture;C&&C.isDepthTexture&&(C.type===Si?I=n.DEPTH_COMPONENT32F:C.type===Mi&&(I=n.DEPTH_COMPONENT24));const k=$(x);j(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,I,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,k,I,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,I,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const I=$(x);D&&j(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,x.width,x.height):j(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const I=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let C=0;C<I.length;C++){const k=I[C],it=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),ht=E(k.internalFormat,it,ut,k.colorSpace),vt=$(x);D&&j(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,ht,x.width,x.height):j(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,ht,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ht,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const I=i.get(x.depthTexture).__webglTexture,C=$(x);if(x.depthTexture.format===$i)j(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,C):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(x.depthTexture.format===Gs)j(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,C):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function bt(M){const x=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,M)}else if(D){x.__webglDepthbuffer=[];for(let I=0;I<6;I++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[I]),x.__webglDepthbuffer[I]=n.createRenderbuffer(),Rt(x.__webglDepthbuffer[I],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Rt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(M,x,D){const I=i.get(M);x!==void 0&&Et(I.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&bt(M)}function y(M){const x=M.texture,D=i.get(M),I=i.get(x);M.addEventListener("dispose",Q),M.isWebGLMultipleRenderTargets!==!0&&(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=x.version,o.memory.textures++);const C=M.isWebGLCubeRenderTarget===!0,k=M.isWebGLMultipleRenderTargets===!0,it=m(M)||a;if(C){D.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[ut]=[];for(let ht=0;ht<x.mipmaps.length;ht++)D.__webglFramebuffer[ut][ht]=n.createFramebuffer()}else D.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)D.__webglFramebuffer[ut]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(k)if(s.drawBuffers){const ut=M.texture;for(let ht=0,vt=ut.length;ht<vt;ht++){const At=i.get(ut[ht]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&j(M)===!1){const ut=k?x:[x];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ht=0;ht<ut.length;ht++){const vt=ut[ht];D.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ht]);const At=r.convert(vt.format,vt.colorSpace),lt=r.convert(vt.type),Wt=E(vt.internalFormat,At,lt,vt.colorSpace,M.isXRRenderTarget===!0),Nt=$(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Wt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,D.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Rt(D.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(C){e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),K(n.TEXTURE_CUBE_MAP,x,it);for(let ut=0;ut<6;ut++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)Et(D.__webglFramebuffer[ut][ht],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else Et(D.__webglFramebuffer[ut],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);b(x,it)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(k){const ut=M.texture;for(let ht=0,vt=ut.length;ht<vt;ht++){const At=ut[ht],lt=i.get(At);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),K(n.TEXTURE_2D,At,it),Et(D.__webglFramebuffer,M,At,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),b(At,it)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ut=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,I.__webglTexture),K(ut,x,it),a&&x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)Et(D.__webglFramebuffer[ht],M,x,n.COLOR_ATTACHMENT0,ut,ht);else Et(D.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,ut,0);b(x,it)&&v(ut),e.unbindTexture()}M.depthBuffer&&bt(M)}function O(M){const x=m(M)||a,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let I=0,C=D.length;I<C;I++){const k=D[I];if(b(k,x)){const it=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(k).__webglTexture;e.bindTexture(it,ut),v(it),e.unbindTexture()}}}function H(M){if(a&&M.samples>0&&j(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,I=M.height;let C=n.COLOR_BUFFER_BIT;const k=[],it=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(M),ht=M.isWebGLMultipleRenderTargets===!0;if(ht)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){k.push(n.COLOR_ATTACHMENT0+vt),M.depthBuffer&&k.push(it);const At=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(At===!1&&(M.depthBuffer&&(C|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(C|=n.STENCIL_BUFFER_BIT)),ht&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]),At===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[it]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[it])),ht){const lt=i.get(x[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,D,I,0,0,D,I,C,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);const At=i.get(x[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,At,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function $(M){return Math.min(s.maxSamples,M.samples)}function j(M){const x=i.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(M){const x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function st(M,x){const D=M.colorSpace,I=M.format,C=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Hl||D!==ci&&D!==dn&&(oe.getTransfer(D)===ce?a===!1?t.has("EXT_sRGB")===!0&&I===Sn?(M.format=Hl,M.minFilter=un,M.generateMipmaps=!1):x=Ad.sRGBToLinear(x):(I!==Sn||C!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}this.allocateTextureUnit=N,this.resetTextureUnits=nt,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=y,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=j}function NE(n,t,e){const i=e.isWebGL2;function s(r,o=dn){let a;const l=oe.getTransfer(o);if(r===Ai)return n.UNSIGNED_BYTE;if(r===_d)return n.UNSIGNED_SHORT_4_4_4_4;if(r===vd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===iv)return n.BYTE;if(r===sv)return n.SHORT;if(r===fc)return n.UNSIGNED_SHORT;if(r===gd)return n.INT;if(r===Mi)return n.UNSIGNED_INT;if(r===Si)return n.FLOAT;if(r===Pr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rv)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===ov)return n.LUMINANCE;if(r===av)return n.LUMINANCE_ALPHA;if(r===$i)return n.DEPTH_COMPONENT;if(r===Gs)return n.DEPTH_STENCIL;if(r===Hl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===lv)return n.RED;if(r===xd)return n.RED_INTEGER;if(r===cv)return n.RG;if(r===yd)return n.RG_INTEGER;if(r===Md)return n.RGBA_INTEGER;if(r===Ga||r===ka||r===Va||r===Wa)if(l===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gu||r===_u||r===vu||r===xu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yu||r===Mu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yu)return l===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Mu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Su||r===Eu||r===bu||r===Tu||r===Au||r===wu||r===Ru||r===Cu||r===Pu||r===Lu||r===Du||r===Iu||r===Uu||r===Nu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Su)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Au)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ru)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Du)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Iu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xa||r===Ou||r===Fu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Xa)return l===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ou)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uv||r===Bu||r===zu||r===Hu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Xa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class OE extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FE={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class BE extends ns{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const b=[],v=[],E=new yt;let w=null;const R=new fn;R.layers.enable(1),R.viewport=new Ie;const L=new fn;L.layers.enable(2),L.viewport=new Ie;const Q=[R,L],S=new OE;S.layers.enable(1),S.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=b[K];return ct===void 0&&(ct=new pl,b[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=b[K];return ct===void 0&&(ct=new pl,b[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=b[K];return ct===void 0&&(ct=new pl,b[K]=ct),ct.getHandSpace()};function G(K){const ct=v.indexOf(K.inputSource);if(ct===-1)return;const mt=b[ct];mt!==void 0&&(mt.update(K.inputSource,K.frame,c||o),mt.dispatchEvent({type:K.type,data:K.inputSource}))}function nt(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",N);for(let K=0;K<b.length;K++){const ct=v[K];ct!==null&&(v[K]=null,b[K].disconnect(ct))}A=null,W=null,t.setRenderTarget(m),p=null,f=null,h=null,s=null,d=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ct={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Zi(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ct=null,mt=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?Gs:$i,mt=_.stencil?Yi:Mi);const Et={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Zi(f.textureWidth,f.textureHeight,{format:Sn,type:Ai,depthTexture:new Fd(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Rt=t.properties.get(d);Rt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(K){for(let ct=0;ct<K.removed.length;ct++){const mt=K.removed[ct],_t=v.indexOf(mt);_t>=0&&(v[_t]=null,b[_t].disconnect(mt))}for(let ct=0;ct<K.added.length;ct++){const mt=K.added[ct];let _t=v.indexOf(mt);if(_t===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=v.length){v.push(mt),_t=Rt;break}else if(v[Rt]===null){v[Rt]=mt,_t=Rt;break}if(_t===-1)break}const Et=b[_t];Et&&Et.connect(mt)}}const X=new U,Y=new U;function z(K,ct,mt){X.setFromMatrixPosition(ct.matrixWorld),Y.setFromMatrixPosition(mt.matrixWorld);const _t=X.distanceTo(Y),Et=ct.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Pt=Et[14]/(Et[10]-1),bt=Et[14]/(Et[10]+1),Vt=(Et[9]+1)/Et[5],y=(Et[9]-1)/Et[5],O=(Et[8]-1)/Et[0],H=(Rt[8]+1)/Rt[0],$=Pt*O,j=Pt*H,et=_t/(-O+H),st=et*-O;ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(st),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const M=Pt+et,x=bt+et,D=$-st,I=j+(_t-st),C=Vt*bt/x*M,k=y*bt/x*M;K.projectionMatrix.makePerspective(D,I,C,k,M,x),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function B(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;S.near=L.near=R.near=K.near,S.far=L.far=R.far=K.far,(A!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,W=S.far);const ct=K.parent,mt=S.cameras;B(S,ct);for(let _t=0;_t<mt.length;_t++)B(mt[_t],ct);mt.length===2?z(S,R,L):S.projectionMatrix.copy(R.projectionMatrix),V(K,S,ct)};function V(K,ct,mt){mt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Lr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)};let at=null;function rt(K,ct){if(u=ct.getViewerPose(c||o),g=ct,u!==null){const mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let _t=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,_t=!0);for(let Et=0;Et<mt.length;Et++){const Rt=mt[Et];let Pt=null;if(p!==null)Pt=p.getViewport(Rt);else{const Vt=h.getViewSubImage(f,Rt);Pt=Vt.viewport,Et===0&&(t.setRenderTargetTextures(d,Vt.colorTexture,f.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(d))}let bt=Q[Et];bt===void 0&&(bt=new fn,bt.layers.enable(Et),bt.viewport=new Ie,Q[Et]=bt),bt.matrix.fromArray(Rt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Rt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Et===0&&(S.matrix.copy(bt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_t===!0&&S.cameras.push(bt)}}for(let mt=0;mt<b.length;mt++){const _t=v[mt],Et=b[mt];_t!==null&&Et!==void 0&&Et.update(_t,ct,c||o)}at&&at(K,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const ft=new Nd;ft.setAnimationLoop(rt),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}function zE(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Dd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function HE(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){const E=v.program;i.uniformBlockBinding(b,E)}function c(b,v){let E=s[b.id];E===void 0&&(g(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(b,w);const R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function u(b){const v=h();b.__bindingPointIndex=v;const E=n.createBuffer(),w=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=s[b.id],E=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,L=E.length;R<L;R++){const Q=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,A=Q.length;S<A;S++){const W=Q[S];if(p(W,R,S,w)===!0){const G=W.__offset,nt=Array.isArray(W.value)?W.value:[W.value];let N=0;for(let X=0;X<nt.length;X++){const Y=nt[X],z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(W.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,G+N,W.__data)):Y.isMatrix3?(W.__data[0]=Y.elements[0],W.__data[1]=Y.elements[1],W.__data[2]=Y.elements[2],W.__data[3]=0,W.__data[4]=Y.elements[3],W.__data[5]=Y.elements[4],W.__data[6]=Y.elements[5],W.__data[7]=0,W.__data[8]=Y.elements[6],W.__data[9]=Y.elements[7],W.__data[10]=Y.elements[8],W.__data[11]=0):(Y.toArray(W.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,v,E,w){const R=b.value,L=v+"_"+E;if(w[L]===void 0)return typeof R=="number"||typeof R=="boolean"?w[L]=R:w[L]=R.clone(),!0;{const Q=w[L];if(typeof R=="number"||typeof R=="boolean"){if(Q!==R)return w[L]=R,!0}else if(Q.equals(R)===!1)return Q.copy(R),!0}return!1}function g(b){const v=b.uniforms;let E=0;const w=16;for(let L=0,Q=v.length;L<Q;L++){const S=Array.isArray(v[L])?v[L]:[v[L]];for(let A=0,W=S.length;A<W;A++){const G=S[A],nt=Array.isArray(G.value)?G.value:[G.value];for(let N=0,X=nt.length;N<X;N++){const Y=nt[N],z=_(Y),B=E%w;B!==0&&w-B<z.boundary&&(E+=w-B),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=z.storage}}}const R=E%w;return R>0&&(E+=w-R),b.__size=E,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Vd{constructor(t={}){const{canvas:e=Ov(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let E=!1,w=0,R=0,L=null,Q=-1,S=null;const A=new Ie,W=new Ie;let G=null;const nt=new qt(0);let N=0,X=e.width,Y=e.height,z=1,B=null,V=null;const at=new Ie(0,0,X,Y),rt=new Ie(0,0,X,Y);let ft=!1;const K=new _c;let ct=!1,mt=!1,_t=null;const Et=new he,Rt=new yt,Pt=new U,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return L===null?z:1}let y=i;function O(T,q){for(let J=0;J<T.length;J++){const tt=T[J],Z=e.getContext(tt,q);if(Z!==null)return Z}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hc}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",gt,!1),y===null){const q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&q.shift(),y=O(q,T),y===null)throw O(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let H,$,j,et,st,M,x,D,I,C,k,it,ut,ht,vt,At,lt,Wt,Nt,Ut,Lt,xt,P,pt;function Ct(){H=new KM(y),$=new WM(y,H,t),H.init($),xt=new NE(y,H,$),j=new IE(y,H,$),et=new QM(y),st=new xE,M=new UE(y,H,j,st,$,xt,et),x=new jM(v),D=new $M(v),I=new ax(y,$),P=new kM(y,H,I,$),C=new ZM(y,I,et,P),k=new iS(y,C,I,et),Nt=new nS(y,$,M),At=new XM(st),it=new vE(v,x,D,H,$,P,At),ut=new zE(v,st),ht=new ME,vt=new wE(H,$),Wt=new GM(v,x,D,j,k,f,l),lt=new DE(v,k,$),pt=new HE(y,et,$,j),Ut=new VM(y,H,et,$),Lt=new JM(y,H,et,$),et.programs=it.programs,v.capabilities=$,v.extensions=H,v.properties=st,v.renderLists=ht,v.shadowMap=lt,v.state=j,v.info=et}Ct();const wt=new BE(v,y);this.xr=wt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=H.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=H.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(X,Y,!1))},this.getSize=function(T){return T.set(X,Y)},this.setSize=function(T,q,J=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Y=q,e.width=Math.floor(T*z),e.height=Math.floor(q*z),J===!0&&(e.style.width=T+"px",e.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(X*z,Y*z).floor()},this.setDrawingBufferSize=function(T,q,J){X=T,Y=q,z=J,e.width=Math.floor(T*J),e.height=Math.floor(q*J),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(at)},this.setViewport=function(T,q,J,tt){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,q,J,tt),j.viewport(A.copy(at).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,q,J,tt){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,q,J,tt),j.scissor(W.copy(rt).multiplyScalar(z).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(T){j.setScissorTest(ft=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(T=!0,q=!0,J=!0){let tt=0;if(T){let Z=!1;if(L!==null){const Tt=L.texture.format;Z=Tt===Md||Tt===yd||Tt===xd}if(Z){const Tt=L.texture.type,Dt=Tt===Ai||Tt===Mi||Tt===fc||Tt===Yi||Tt===_d||Tt===vd,Ft=Wt.getClearColor(),Ht=Wt.getClearAlpha(),$t=Ft.r,Xt=Ft.g,jt=Ft.b;Dt?(p[0]=$t,p[1]=Xt,p[2]=jt,p[3]=Ht,y.clearBufferuiv(y.COLOR,0,p)):(g[0]=$t,g[1]=Xt,g[2]=jt,g[3]=Ht,y.clearBufferiv(y.COLOR,0,g))}else tt|=y.COLOR_BUFFER_BIT}q&&(tt|=y.DEPTH_BUFFER_BIT),J&&(tt|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),ht.dispose(),vt.dispose(),st.dispose(),x.dispose(),D.dispose(),k.dispose(),P.dispose(),pt.dispose(),it.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ye),wt.removeEventListener("sessionend",ee),_t&&(_t.dispose(),_t=null),Ee.stop()};function dt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=et.autoReset,q=lt.enabled,J=lt.autoUpdate,tt=lt.needsUpdate,Z=lt.type;Ct(),et.autoReset=T,lt.enabled=q,lt.autoUpdate=J,lt.needsUpdate=tt,lt.type=Z}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function St(T){const q=T.target;q.removeEventListener("dispose",St),Ot(q)}function Ot(T){It(T),st.remove(T)}function It(T){const q=st.get(T).programs;q!==void 0&&(q.forEach(function(J){it.releaseProgram(J)}),T.isShaderMaterial&&it.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,J,tt,Z,Tt){q===null&&(q=bt);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ft=sp(T,q,J,tt,Z);j.setMaterial(tt,Dt);let Ht=J.index,$t=1;if(tt.wireframe===!0){if(Ht=C.getWireframeAttribute(J),Ht===void 0)return;$t=2}const Xt=J.drawRange,jt=J.attributes.position;let Me=Xt.start*$t,tn=(Xt.start+Xt.count)*$t;Tt!==null&&(Me=Math.max(Me,Tt.start*$t),tn=Math.min(tn,(Tt.start+Tt.count)*$t)),Ht!==null?(Me=Math.max(Me,0),tn=Math.min(tn,Ht.count)):jt!=null&&(Me=Math.max(Me,0),tn=Math.min(tn,jt.count));const Pe=tn-Me;if(Pe<0||Pe===1/0)return;P.setup(Z,tt,Ft,J,Ht);let Vn,fe=Ut;if(Ht!==null&&(Vn=I.get(Ht),fe=Lt,fe.setIndex(Vn)),Z.isMesh)tt.wireframe===!0?(j.setLineWidth(tt.wireframeLinewidth*Vt()),fe.setMode(y.LINES)):fe.setMode(y.TRIANGLES);else if(Z.isLine){let Kt=tt.linewidth;Kt===void 0&&(Kt=1),j.setLineWidth(Kt*Vt()),Z.isLineSegments?fe.setMode(y.LINES):Z.isLineLoop?fe.setMode(y.LINE_LOOP):fe.setMode(y.LINE_STRIP)}else Z.isPoints?fe.setMode(y.POINTS):Z.isSprite&&fe.setMode(y.TRIANGLES);if(Z.isBatchedMesh)fe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)fe.renderInstances(Me,Pe,Z.count);else if(J.isInstancedBufferGeometry){const Kt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ya=Math.min(J.instanceCount,Kt);fe.renderInstances(Me,Pe,ya)}else fe.render(Me,Pe)};function Qt(T,q,J){T.transparent===!0&&T.side===ii&&T.forceSinglePass===!1?(T.side=Qe,T.needsUpdate=!0,qr(T,q,J),T.side=Hn,T.needsUpdate=!0,qr(T,q,J),T.side=ii):qr(T,q,J)}this.compile=function(T,q,J=null){J===null&&(J=T),m=vt.get(J),m.init(),b.push(m),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),T!==J&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(v._useLegacyLights);const tt=new Set;return T.traverse(function(Z){const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ft=Tt[Dt];Qt(Ft,J,Z),tt.add(Ft)}else Qt(Tt,J,Z),tt.add(Tt)}),b.pop(),m=null,tt},this.compileAsync=function(T,q,J=null){const tt=this.compile(T,q,J);return new Promise(Z=>{function Tt(){if(tt.forEach(function(Dt){st.get(Dt).currentProgram.isReady()&&tt.delete(Dt)}),tt.size===0){Z(T);return}setTimeout(Tt,10)}H.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let te=null;function _e(T){te&&te(T)}function ye(){Ee.stop()}function ee(){Ee.start()}const Ee=new Nd;Ee.setAnimationLoop(_e),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(T){te=T,wt.setAnimationLoop(T),T===null?Ee.stop():Ee.start()},wt.addEventListener("sessionstart",ye),wt.addEventListener("sessionend",ee),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,q,L),m=vt.get(T,b.length),m.init(),b.push(m),Et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,ct=At.init(this.clippingPlanes,mt),_=ht.get(T,d.length),_.init(),d.push(_),Rn(T,q,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(B,V),this.info.render.frame++,ct===!0&&At.beginShadows();const J=m.state.shadowsArray;if(lt.render(J,T,q),ct===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),Wt.render(_,T),m.setupLights(v._useLegacyLights),q.isArrayCamera){const tt=q.cameras;for(let Z=0,Tt=tt.length;Z<Tt;Z++){const Dt=tt[Z];Ec(_,T,Dt,Dt.viewport)}}else Ec(_,T,q);L!==null&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,q),P.resetDefaultState(),Q=-1,S=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Rn(T,q,J,tt){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){tt&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);const Dt=k.update(T),Ft=T.material;Ft.visible&&_.push(T,Dt,Ft,J,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const Dt=k.update(T),Ft=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Pt.copy(Dt.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(Ft)){const Ht=Dt.groups;for(let $t=0,Xt=Ht.length;$t<Xt;$t++){const jt=Ht[$t],Me=Ft[jt.materialIndex];Me&&Me.visible&&_.push(T,Dt,Me,J,Pt.z,jt)}}else Ft.visible&&_.push(T,Dt,Ft,J,Pt.z,null)}}const Tt=T.children;for(let Dt=0,Ft=Tt.length;Dt<Ft;Dt++)Rn(Tt[Dt],q,J,tt)}function Ec(T,q,J,tt){const Z=T.opaque,Tt=T.transmissive,Dt=T.transparent;m.setupLightsView(J),ct===!0&&At.setGlobalState(v.clippingPlanes,J),Tt.length>0&&ip(Z,Tt,q,J),tt&&j.viewport(A.copy(tt)),Z.length>0&&jr(Z,q,J),Tt.length>0&&jr(Tt,q,J),Dt.length>0&&jr(Dt,q,J),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ip(T,q,J,tt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Tt=$.isWebGL2;_t===null&&(_t=new Zi(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?Pr:Ai,minFilter:Cr,samples:Tt?4:0})),v.getDrawingBufferSize(Rt),Tt?_t.setSize(Rt.x,Rt.y):_t.setSize(ta(Rt.x),ta(Rt.y));const Dt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(nt),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Ft=v.toneMapping;v.toneMapping=Ti,jr(T,J,tt),M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t);let Ht=!1;for(let $t=0,Xt=q.length;$t<Xt;$t++){const jt=q[$t],Me=jt.object,tn=jt.geometry,Pe=jt.material,Vn=jt.group;if(Pe.side===ii&&Me.layers.test(tt.layers)){const fe=Pe.side;Pe.side=Qe,Pe.needsUpdate=!0,bc(Me,J,tt,tn,Pe,Vn),Pe.side=fe,Pe.needsUpdate=!0,Ht=!0}}Ht===!0&&(M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t)),v.setRenderTarget(Dt),v.setClearColor(nt,N),v.toneMapping=Ft}function jr(T,q,J){const tt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Tt=T.length;Z<Tt;Z++){const Dt=T[Z],Ft=Dt.object,Ht=Dt.geometry,$t=tt===null?Dt.material:tt,Xt=Dt.group;Ft.layers.test(J.layers)&&bc(Ft,q,J,Ht,$t,Xt)}}function bc(T,q,J,tt,Z,Tt){T.onBeforeRender(v,q,J,tt,Z,Tt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(v,q,J,tt,T,Tt),Z.transparent===!0&&Z.side===ii&&Z.forceSinglePass===!1?(Z.side=Qe,Z.needsUpdate=!0,v.renderBufferDirect(J,q,tt,Z,T,Tt),Z.side=Hn,Z.needsUpdate=!0,v.renderBufferDirect(J,q,tt,Z,T,Tt),Z.side=ii):v.renderBufferDirect(J,q,tt,Z,T,Tt),T.onAfterRender(v,q,J,tt,Z,Tt)}function qr(T,q,J){q.isScene!==!0&&(q=bt);const tt=st.get(T),Z=m.state.lights,Tt=m.state.shadowsArray,Dt=Z.state.version,Ft=it.getParameters(T,Z.state,Tt,q,J),Ht=it.getProgramCacheKey(Ft);let $t=tt.programs;tt.environment=T.isMeshStandardMaterial?q.environment:null,tt.fog=q.fog,tt.envMap=(T.isMeshStandardMaterial?D:x).get(T.envMap||tt.environment),$t===void 0&&(T.addEventListener("dispose",St),$t=new Map,tt.programs=$t);let Xt=$t.get(Ht);if(Xt!==void 0){if(tt.currentProgram===Xt&&tt.lightsStateVersion===Dt)return Ac(T,Ft),Xt}else Ft.uniforms=it.getUniforms(T),T.onBuild(J,Ft,v),T.onBeforeCompile(Ft,v),Xt=it.acquireProgram(Ft,Ht),$t.set(Ht,Xt),tt.uniforms=Ft.uniforms;const jt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=At.uniform),Ac(T,Ft),tt.needsLights=op(T),tt.lightsStateVersion=Dt,tt.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=Xt,tt.uniformsList=null,Xt}function Tc(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Oo.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Ac(T,q){const J=st.get(T);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function sp(T,q,J,tt,Z){q.isScene!==!0&&(q=bt),M.resetTextureUnits();const Tt=q.fog,Dt=tt.isMeshStandardMaterial?q.environment:null,Ft=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ci,Ht=(tt.isMeshStandardMaterial?D:x).get(tt.envMap||Dt),$t=tt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xt=!!J.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),jt=!!J.morphAttributes.position,Me=!!J.morphAttributes.normal,tn=!!J.morphAttributes.color;let Pe=Ti;tt.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pe=v.toneMapping);const Vn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,fe=Vn!==void 0?Vn.length:0,Kt=st.get(tt),ya=m.state.lights;if(ct===!0&&(mt===!0||T!==S)){const rn=T===S&&tt.id===Q;At.setState(tt,T,rn)}let ve=!1;tt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ya.state.version||Kt.outputColorSpace!==Ft||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Kt.envMap!==Ht||tt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Xt||Kt.morphTargets!==jt||Kt.morphNormals!==Me||Kt.morphColors!==tn||Kt.toneMapping!==Pe||$.isWebGL2===!0&&Kt.morphTargetsCount!==fe)&&(ve=!0):(ve=!0,Kt.__version=tt.version);let Ri=Kt.currentProgram;ve===!0&&(Ri=qr(tt,q,Z));let wc=!1,js=!1,Ma=!1;const Be=Ri.getUniforms(),Ci=Kt.uniforms;if(j.useProgram(Ri.program)&&(wc=!0,js=!0,Ma=!0),tt.id!==Q&&(Q=tt.id,js=!0),wc||S!==T){Be.setValue(y,"projectionMatrix",T.projectionMatrix),Be.setValue(y,"viewMatrix",T.matrixWorldInverse);const rn=Be.map.cameraPosition;rn!==void 0&&rn.setValue(y,Pt.setFromMatrixPosition(T.matrixWorld)),$.logarithmicDepthBuffer&&Be.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Be.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,js=!0,Ma=!0)}if(Z.isSkinnedMesh){Be.setOptional(y,Z,"bindMatrix"),Be.setOptional(y,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&($.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Be.setValue(y,"boneTexture",rn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Be.setOptional(y,Z,"batchingTexture"),Be.setValue(y,"batchingTexture",Z._matricesTexture,M));const Sa=J.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0&&$.isWebGL2===!0)&&Nt.update(Z,J,Ri),(js||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Be.setValue(y,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Ci.envMap.value=Ht,Ci.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),js&&(Be.setValue(y,"toneMappingExposure",v.toneMappingExposure),Kt.needsLights&&rp(Ci,Ma),Tt&&tt.fog===!0&&ut.refreshFogUniforms(Ci,Tt),ut.refreshMaterialUniforms(Ci,tt,z,Y,_t),Oo.upload(y,Tc(Kt),Ci,M)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Oo.upload(y,Tc(Kt),Ci,M),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Be.setValue(y,"center",Z.center),Be.setValue(y,"modelViewMatrix",Z.modelViewMatrix),Be.setValue(y,"normalMatrix",Z.normalMatrix),Be.setValue(y,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const rn=tt.uniformsGroups;for(let Ea=0,ap=rn.length;Ea<ap;Ea++)if($.isWebGL2){const Rc=rn[Ea];pt.update(Rc,Ri),pt.bind(Rc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function rp(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function op(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,q,J){st.get(T.texture).__webglTexture=q,st.get(T.depthTexture).__webglTexture=J;const tt=st.get(T);tt.__hasExternalTextures=!0,tt.__hasExternalTextures&&(tt.__autoAllocateDepthBuffer=J===void 0,tt.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,q){const J=st.get(T);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,J=0){L=T,w=q,R=J;let tt=!0,Z=null,Tt=!1,Dt=!1;if(T){const Ht=st.get(T);Ht.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(y.FRAMEBUFFER,null),tt=!1):Ht.__webglFramebuffer===void 0?M.setupRenderTarget(T):Ht.__hasExternalTextures&&M.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const Xt=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[q])?Z=Xt[q][J]:Z=Xt[q],Tt=!0):$.isWebGL2&&T.samples>0&&M.useMultisampledRTT(T)===!1?Z=st.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?Z=Xt[J]:Z=Xt,A.copy(T.viewport),W.copy(T.scissor),G=T.scissorTest}else A.copy(at).multiplyScalar(z).floor(),W.copy(rt).multiplyScalar(z).floor(),G=ft;if(j.bindFramebuffer(y.FRAMEBUFFER,Z)&&$.drawBuffers&&tt&&j.drawBuffers(T,Z),j.viewport(A),j.scissor(W),j.setScissorTest(G),Tt){const Ht=st.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ht.__webglTexture,J)}else if(Dt){const Ht=st.get(T.texture),$t=q||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ht.__webglTexture,J||0,$t)}Q=-1},this.readRenderTargetPixels=function(T,q,J,tt,Z,Tt,Dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){j.bindFramebuffer(y.FRAMEBUFFER,Ft);try{const Ht=T.texture,$t=Ht.format,Xt=Ht.type;if($t!==Sn&&xt.convert($t)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const jt=Xt===Pr&&(H.has("EXT_color_buffer_half_float")||$.isWebGL2&&H.has("EXT_color_buffer_float"));if(Xt!==Ai&&xt.convert(Xt)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===Si&&($.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-tt&&J>=0&&J<=T.height-Z&&y.readPixels(q,J,tt,Z,xt.convert($t),xt.convert(Xt),Tt)}finally{const Ht=L!==null?st.get(L).__webglFramebuffer:null;j.bindFramebuffer(y.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(T,q,J=0){const tt=Math.pow(2,-J),Z=Math.floor(q.image.width*tt),Tt=Math.floor(q.image.height*tt);M.setTexture2D(q,0),y.copyTexSubImage2D(y.TEXTURE_2D,J,0,0,T.x,T.y,Z,Tt),j.unbindTexture()},this.copyTextureToTexture=function(T,q,J,tt=0){const Z=q.image.width,Tt=q.image.height,Dt=xt.convert(J.format),Ft=xt.convert(J.type);M.setTexture2D(J,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,J.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,J.unpackAlignment),q.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,tt,T.x,T.y,Z,Tt,Dt,Ft,q.image.data):q.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,tt,T.x,T.y,q.mipmaps[0].width,q.mipmaps[0].height,Dt,q.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,tt,T.x,T.y,Dt,Ft,q.image),tt===0&&J.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(T,q,J,tt,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=T.max.x-T.min.x+1,Dt=T.max.y-T.min.y+1,Ft=T.max.z-T.min.z+1,Ht=xt.convert(tt.format),$t=xt.convert(tt.type);let Xt;if(tt.isData3DTexture)M.setTexture3D(tt,0),Xt=y.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)M.setTexture2DArray(tt,0),Xt=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,tt.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,tt.unpackAlignment);const jt=y.getParameter(y.UNPACK_ROW_LENGTH),Me=y.getParameter(y.UNPACK_IMAGE_HEIGHT),tn=y.getParameter(y.UNPACK_SKIP_PIXELS),Pe=y.getParameter(y.UNPACK_SKIP_ROWS),Vn=y.getParameter(y.UNPACK_SKIP_IMAGES),fe=J.isCompressedTexture?J.mipmaps[Z]:J.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,fe.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,fe.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,T.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,T.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,T.min.z),J.isDataTexture||J.isData3DTexture?y.texSubImage3D(Xt,Z,q.x,q.y,q.z,Tt,Dt,Ft,Ht,$t,fe.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(Xt,Z,q.x,q.y,q.z,Tt,Dt,Ft,Ht,fe.data)):y.texSubImage3D(Xt,Z,q.x,q.y,q.z,Tt,Dt,Ft,Ht,$t,fe),y.pixelStorei(y.UNPACK_ROW_LENGTH,jt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Me),y.pixelStorei(y.UNPACK_SKIP_PIXELS,tn),y.pixelStorei(y.UNPACK_SKIP_ROWS,Pe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Vn),Z===0&&tt.generateMipmaps&&y.generateMipmap(Xt),j.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,j.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===dc?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===_a?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?Ki:Ed}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ki?Oe:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class GE extends Vd{}GE.prototype.isWebGL1Renderer=!0;class kE extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class VE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new U;class ea{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wd extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ss;const er=new U,Es=new U,bs=new U,Ts=new yt,nr=new yt,Xd=new he,Mo=new U,ir=new U,So=new U,Rh=new yt,ml=new yt,Ch=new yt;class WE extends Ae{constructor(t=new Wd){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new VE(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new ea(i,3,0,!1)),Ss.setAttribute("uv",new ea(i,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Xd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-bs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Eo(Mo.set(-.5,-.5,0),bs,o,Es,s,r),Eo(ir.set(.5,-.5,0),bs,o,Es,s,r),Eo(So.set(.5,.5,0),bs,o,Es,s,r),Rh.set(0,0),ml.set(1,0),Ch.set(1,1);let a=t.ray.intersectTriangle(Mo,ir,So,!1,er);if(a===null&&(Eo(ir.set(-.5,.5,0),bs,o,Es,s,r),ml.set(0,1),a=t.ray.intersectTriangle(Mo,So,ir,!1,er),a===null))return;const l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:hn.getInterpolation(er,Mo,ir,So,Rh,ml,Ch,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Eo(n,t,e,i,s,r){Ts.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(nr.x=r*Ts.x-s*Ts.y,nr.y=s*Ts.x+r*Ts.y):nr.copy(Ts),n.copy(t),n.x+=nr.x,n.y+=nr.y,n.applyMatrix4(Xd)}class ws extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ph=new U,Lh=new U,Dh=new he,gl=new Wr,bo=new Vr;class ar extends Ae{constructor(t=new xe,e=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ph.fromBufferAttribute(e,s-1),Lh.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ph.distanceTo(Lh);t.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;Dh.copy(s).invert(),gl.copy(t.ray).applyMatrix4(Dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,h=new U,f=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let v=d,E=b-1;v<E;v+=p){const w=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,R),gl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const Q=t.ray.origin.distanceTo(f);Q<t.near||Q>t.far||e.push({distance:Q,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let v=d,E=b-1;v<E;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),gl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ih=new U,Uh=new U;class XE extends ar{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ih.fromBufferAttribute(e,s),Uh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ih.distanceTo(Uh);t.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vl extends Gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nh=new he,Wl=new Wr,To=new Vr,Ao=new U;class _l extends Ae{constructor(t=new xe,e=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Nh.copy(s).invert(),Wl.copy(t.ray).applyMatrix4(Nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Ao.fromBufferAttribute(h,m),Oh(Ao,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Ao.fromBufferAttribute(h,g),Oh(Ao,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oh(n,t,e,i,s,r,o){const a=Wl.distanceSqToPoint(n);if(a<e){const l=new U;Wl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Fh extends Ze{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new yt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],o=[],a=new U,l=new he;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(De(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(De(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yc extends kn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new yt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jE extends yc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const wo=new U,vl=new Mc,xl=new Mc,yl=new Mc;class qE extends kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(wo.subVectors(s[0],s[1]).add(s[0]),c=wo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),xl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),yl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),xl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),yl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(vl.calc(l),xl.calc(l),yl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function YE(n,t){const e=1-n;return e*e*t}function $E(n,t){return 2*(1-n)*n*t}function KE(n,t){return n*n*t}function vr(n,t,e,i){return YE(n,t)+$E(n,e)+KE(n,i)}function ZE(n,t){const e=1-n;return e*e*e*t}function JE(n,t){const e=1-n;return 3*e*e*n*t}function QE(n,t){return 3*(1-n)*n*n*t}function tb(n,t){return n*n*n*t}function xr(n,t,e,i,s){return ZE(n,t)+JE(n,e)+QE(n,i)+tb(n,s)}class jd extends kn{constructor(t=new yt,e=new yt,i=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new yt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eb extends kn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y),xr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qd extends kn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nb extends kn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yd extends kn{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $d extends kn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y),vr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kd extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Bh(a,l.x,c.x,u.x,h.x),Bh(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new yt().fromArray(s))}return this}}var zh=Object.freeze({__proto__:null,ArcCurve:jE,CatmullRomCurve3:qE,CubicBezierCurve:jd,CubicBezierCurve3:eb,EllipseCurve:yc,LineCurve:qd,LineCurve3:nb,QuadraticBezierCurve:Yd,QuadraticBezierCurve3:$d,SplineCurve:Kd});class ib extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new zh[s.type]().fromJSON(s))}return this}}class Hh extends ib{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new qd(this.currentPoint.clone(),new yt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Yd(this.currentPoint.clone(),new yt(t,e),new yt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new jd(this.currentPoint.clone(),new yt(t,e),new yt(i,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Kd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new yc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class na extends xe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(p,2));function b(){const E=new U,w=new U;let R=0;const L=(e-t)/i;for(let Q=0;Q<=r;Q++){const S=[],A=Q/r,W=A*(e-t)+t;for(let G=0;G<=s;G++){const nt=G/s,N=nt*l+a,X=Math.sin(N),Y=Math.cos(N);w.x=W*X,w.y=-A*i+m,w.z=W*Y,h.push(w.x,w.y,w.z),E.set(X,L,Y).normalize(),f.push(E.x,E.y,E.z),p.push(nt,1-A),S.push(g++)}_.push(S)}for(let Q=0;Q<s;Q++)for(let S=0;S<r;S++){const A=_[S][Q],W=_[S+1][Q],G=_[S+1][Q+1],nt=_[S][Q+1];u.push(A,W,nt),u.push(W,G,nt),R+=6}c.addGroup(d,R,0),d+=R}function v(E){const w=g,R=new yt,L=new U;let Q=0;const S=E===!0?t:e,A=E===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;const W=g;for(let G=0;G<=s;G++){const N=G/s*l+a,X=Math.cos(N),Y=Math.sin(N);L.x=S*Y,L.y=m*A,L.z=S*X,h.push(L.x,L.y,L.z),f.push(0,A,0),R.x=X*.5+.5,R.y=Y*.5*A+.5,p.push(R.x,R.y),g++}for(let G=0;G<s;G++){const nt=w+G,N=W+G;E===!0?u.push(N,N+1,nt):u.push(N+1,N,nt),Q+=3}c.addGroup(d,Q,E===!0?1:2),d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sb extends Hh{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Hh().fromJSON(s))}return this}}const rb={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Zd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(i&&(r=ub(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ir(r,o,e,a,l,p,0),o}};function Zd(n,t,e,i,s){let r,o;if(s===Mb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Gh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Gh(r,n[r],n[r+1],o);return o&&xa(o,o.next)&&(Nr(o),o=o.next),o}function Ji(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(xa(e,e.next)||me(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ir(n,t,e,i,s,r,o){if(!n)return;!o&&r&&mb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?ab(n,i,s,r):ob(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Nr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=lb(Ji(n),t,e),Ir(n,t,e,i,s,r,2)):o===2&&cb(n,t,e,i,s,r):Ir(Ji(n),t,e,i,s,r,1);break}}}function ob(n){const t=n.prev,e=n,i=n.next;if(me(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Ps(s,a,r,l,o,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ab(n,t,e,i){const s=n.prev,r=n,o=n.next;if(me(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=Xl(p,g,t,e,i),b=Xl(_,m,t,e,i);let v=n.prevZ,E=n.nextZ;for(;v&&v.z>=d&&E&&E.z<=b;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ps(a,u,l,h,c,f,v.x,v.y)&&me(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Ps(a,u,l,h,c,f,E.x,E.y)&&me(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ps(a,u,l,h,c,f,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=b;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Ps(a,u,l,h,c,f,E.x,E.y)&&me(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function lb(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!xa(s,r)&&Jd(s,i,i.next,r)&&Ur(s,r)&&Ur(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Nr(i),Nr(i.next),i=n=r),i=i.next}while(i!==n);return Ji(i)}function cb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vb(o,a)){let l=Qd(o,a);o=Ji(o,o.next),l=Ji(l,l.next),Ir(o,t,e,i,s,r,0),Ir(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ub(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Zd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(_b(c));for(s.sort(hb),r=0;r<s.length;r++)e=fb(s[r],e);return e}function hb(n,t){return n.x-t.x}function fb(n,t){const e=db(n,t);if(!e)return t;const i=Qd(e,n);return Ji(i,i.next),Ji(e,e.next)}function db(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ps(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ur(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&pb(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function pb(n,t){return me(n.prev,n,t.prev)<0&&me(t.next,n,n.next)<0}function mb(n,t,e,i){let s=n;do s.z===0&&(s.z=Xl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gb(s)}function gb(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Xl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function _b(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ps(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function vb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!xb(n,t)&&(Ur(n,t)&&Ur(t,n)&&yb(n,t)&&(me(n.prev,n,t.prev)||me(n,t.prev,t))||xa(n,t)&&me(n.prev,n,n.next)>0&&me(t.prev,t,t.next)>0)}function me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function xa(n,t){return n.x===t.x&&n.y===t.y}function Jd(n,t,e,i){const s=Co(me(n,t,e)),r=Co(me(n,t,i)),o=Co(me(e,i,n)),a=Co(me(e,i,t));return!!(s!==r&&o!==a||s===0&&Ro(n,e,t)||r===0&&Ro(n,i,t)||o===0&&Ro(e,n,i)||a===0&&Ro(e,t,i))}function Ro(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Co(n){return n>0?1:n<0?-1:0}function xb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Jd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ur(n,t){return me(n.prev,n,n.next)<0?me(n,t,n.next)>=0&&me(n,n.prev,t)>=0:me(n,t,n.prev)<0||me(n,n.next,t)<0}function yb(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Qd(n,t){const e=new jl(n.i,n.x,n.y),i=new jl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Gh(n,t,e,i){const s=new jl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class yr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return yr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];kh(t),Vh(i,t);let o=t.length;e.forEach(kh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vh(i,e[l]);const a=rb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function kh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Vh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class tp extends xe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,p=new U,g=new yt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const d=r+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let d=0;d<i;d++){const b=d+m,v=b,E=b+i+1,w=b+i+2,R=b+1;a.push(v,E,R),a.push(E,w,R)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ep extends xe{constructor(t=new sb([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let p=f.shape;const g=f.holes;yr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const b=g[m];yr.isClockWise(b)===!0&&(g[m]=b.reverse())}const _=yr.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const b=g[m];p=p.concat(b)}for(let m=0,d=p.length;m<d;m++){const b=p[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,d=_.length;m<d;m++){const b=_[m],v=b[0]+h,E=b[1]+h,w=b[2]+h;i.push(v,E,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Sb(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new ep(i,t.curveSegments)}}function Sb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Vi extends xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const b=[],v=d/i;let E=0;d===0&&o===0?E=.5/e:d===i&&l===Math.PI&&(E=-.5/e);for(let w=0;w<=e;w++){const R=w/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+E,1-v),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){const v=u[d][b+1],E=u[d][b],w=u[d+1][b],R=u[d+1][b+1];(d!==0||o>0)&&p.push(v,E,R),(d!==i-1||l<Math.PI)&&p.push(E,w,R)}this.setIndex(p),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cT extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uT extends Gn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Po extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Wh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Eb{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const bb=new Eb;class Sc{constructor(t){this.manager=t!==void 0?t:bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Tb extends Sc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Wh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Dr("img");function l(){u(),Wh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Xh extends Sc{constructor(t){super(t)}load(t,e,i,s){const r=new Ze,o=new Tb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class np extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ml=new he,jh=new U,qh=new U;class Ab{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qh),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wb extends Ab{constructor(){super(new Od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rb extends np{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new wb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cb extends np{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yh(){return(typeof performance>"u"?Date:performance).now()}class Lb{constructor(t,e,i=0,s=1/0){this.ray=new Wr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ql(t,this,i,e),i.sort($h),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ql(t[s],this,i,e);return i.sort($h),i}}function $h(n,t){return n.distance-t.distance}function ql(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)ql(s[r],t,e,!0)}}class Kh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);const Zh={type:"change"},Sl={type:"start"},Jh={type:"end"},Lo=new Wr,Qh=new yi,Db=Math.cos(70*Nv.DEG2RAD);class Ib extends ns{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",vt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",vt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zh),i.update(),r=s.NONE},this.update=function(){const P=new U,pt=new ui().setFromUnitVectors(t.up,new U(0,1,0)),Ct=pt.clone().invert(),wt=new U,dt=new ui,F=new U,gt=2*Math.PI;return function(Ot=null){const It=i.object.position;P.copy(It).sub(i.target),P.applyQuaternion(pt),a.setFromVector3(P),i.autoRotate&&r===s.NONE&&G(A(Ot)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Qt=i.minAzimuthAngle,te=i.maxAzimuthAngle;isFinite(Qt)&&isFinite(te)&&(Qt<-Math.PI?Qt+=gt:Qt>Math.PI&&(Qt-=gt),te<-Math.PI?te+=gt:te>Math.PI&&(te-=gt),Qt<=te?a.theta=Math.max(Qt,Math.min(te,a.theta)):a.theta=a.theta>(Qt+te)/2?Math.max(Qt,a.theta):Math.min(te,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=at(a.radius):a.radius=at(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ct),It.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let _e=!1;if(i.zoomToCursor&&R){let ye=null;if(i.object.isPerspectiveCamera){const ee=P.length();ye=at(ee*c);const Ee=ee-ye;i.object.position.addScaledVector(E,Ee),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ee=new U(w.x,w.y,0);ee.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_e=!0;const Ee=new U(w.x,w.y,0);Ee.unproject(i.object),i.object.position.sub(Ee).add(ee),i.object.updateMatrixWorld(),ye=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(Lo.origin.copy(i.object.position),Lo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Lo.direction))<Db?t.lookAt(i.target):(Qh.setFromNormalAndCoplanarPoint(i.object.up,i.target),Lo.intersectPlane(Qh,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_e=!0);return c=1,R=!1,_e||wt.distanceToSquared(i.object.position)>o||8*(1-dt.dot(i.object.quaternion))>o||F.distanceToSquared(i.target)>0?(i.dispatchEvent(Zh),wt.copy(i.object.position),dt.copy(i.object.quaternion),F.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Wt),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",D),i.domElement.removeEventListener("wheel",k),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",D),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",vt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Kh,l=new Kh;let c=1;const u=new U,h=new yt,f=new yt,p=new yt,g=new yt,_=new yt,m=new yt,d=new yt,b=new yt,v=new yt,E=new U,w=new yt;let R=!1;const L=[],Q={};let S=!1;function A(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function W(P){const pt=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*pt)}function G(P){l.theta-=P}function nt(P){l.phi-=P}const N=function(){const P=new U;return function(Ct,wt){P.setFromMatrixColumn(wt,0),P.multiplyScalar(-Ct),u.add(P)}}(),X=function(){const P=new U;return function(Ct,wt){i.screenSpacePanning===!0?P.setFromMatrixColumn(wt,1):(P.setFromMatrixColumn(wt,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ct),u.add(P)}}(),Y=function(){const P=new U;return function(Ct,wt){const dt=i.domElement;if(i.object.isPerspectiveCamera){const F=i.object.position;P.copy(F).sub(i.target);let gt=P.length();gt*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Ct*gt/dt.clientHeight,i.object.matrix),X(2*wt*gt/dt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Ct*(i.object.right-i.object.left)/i.object.zoom/dt.clientWidth,i.object.matrix),X(wt*(i.object.top-i.object.bottom)/i.object.zoom/dt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(P,pt){if(!i.zoomToCursor)return;R=!0;const Ct=i.domElement.getBoundingClientRect(),wt=P-Ct.left,dt=pt-Ct.top,F=Ct.width,gt=Ct.height;w.x=wt/F*2-1,w.y=-(dt/gt)*2+1,E.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function at(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function rt(P){h.set(P.clientX,P.clientY)}function ft(P){V(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function K(P){g.set(P.clientX,P.clientY)}function ct(P){f.set(P.clientX,P.clientY),p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const pt=i.domElement;G(2*Math.PI*p.x/pt.clientHeight),nt(2*Math.PI*p.y/pt.clientHeight),h.copy(f),i.update()}function mt(P){b.set(P.clientX,P.clientY),v.subVectors(b,d),v.y>0?z(W(v.y)):v.y<0&&B(W(v.y)),d.copy(b),i.update()}function _t(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),Y(m.x,m.y),g.copy(_),i.update()}function Et(P){V(P.clientX,P.clientY),P.deltaY<0?B(W(P.deltaY)):P.deltaY>0&&z(W(P.deltaY)),i.update()}function Rt(P){let pt=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?nt(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),pt=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?nt(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),pt=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),pt=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),pt=!0;break}pt&&(P.preventDefault(),i.update())}function Pt(P){if(L.length===1)h.set(P.pageX,P.pageY);else{const pt=xt(P),Ct=.5*(P.pageX+pt.x),wt=.5*(P.pageY+pt.y);h.set(Ct,wt)}}function bt(P){if(L.length===1)g.set(P.pageX,P.pageY);else{const pt=xt(P),Ct=.5*(P.pageX+pt.x),wt=.5*(P.pageY+pt.y);g.set(Ct,wt)}}function Vt(P){const pt=xt(P),Ct=P.pageX-pt.x,wt=P.pageY-pt.y,dt=Math.sqrt(Ct*Ct+wt*wt);d.set(0,dt)}function y(P){i.enableZoom&&Vt(P),i.enablePan&&bt(P)}function O(P){i.enableZoom&&Vt(P),i.enableRotate&&Pt(P)}function H(P){if(L.length==1)f.set(P.pageX,P.pageY);else{const Ct=xt(P),wt=.5*(P.pageX+Ct.x),dt=.5*(P.pageY+Ct.y);f.set(wt,dt)}p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const pt=i.domElement;G(2*Math.PI*p.x/pt.clientHeight),nt(2*Math.PI*p.y/pt.clientHeight),h.copy(f)}function $(P){if(L.length===1)_.set(P.pageX,P.pageY);else{const pt=xt(P),Ct=.5*(P.pageX+pt.x),wt=.5*(P.pageY+pt.y);_.set(Ct,wt)}m.subVectors(_,g).multiplyScalar(i.panSpeed),Y(m.x,m.y),g.copy(_)}function j(P){const pt=xt(P),Ct=P.pageX-pt.x,wt=P.pageY-pt.y,dt=Math.sqrt(Ct*Ct+wt*wt);b.set(0,dt),v.set(0,Math.pow(b.y/d.y,i.zoomSpeed)),z(v.y),d.copy(b);const F=(P.pageX+pt.x)*.5,gt=(P.pageY+pt.y)*.5;V(F,gt)}function et(P){i.enableZoom&&j(P),i.enablePan&&$(P)}function st(P){i.enableZoom&&j(P),i.enableRotate&&H(P)}function M(P){i.enabled!==!1&&(L.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",D)),Nt(P),P.pointerType==="touch"?At(P):I(P))}function x(P){i.enabled!==!1&&(P.pointerType==="touch"?lt(P):C(P))}function D(P){Ut(P),L.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",D)),i.dispatchEvent(Jh),r=s.NONE}function I(P){let pt;switch(P.button){case 0:pt=i.mouseButtons.LEFT;break;case 1:pt=i.mouseButtons.MIDDLE;break;case 2:pt=i.mouseButtons.RIGHT;break;default:pt=-1}switch(pt){case ss.DOLLY:if(i.enableZoom===!1)return;ft(P),r=s.DOLLY;break;case ss.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;K(P),r=s.PAN}else{if(i.enableRotate===!1)return;rt(P),r=s.ROTATE}break;case ss.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;rt(P),r=s.ROTATE}else{if(i.enablePan===!1)return;K(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Sl)}function C(P){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ct(P);break;case s.DOLLY:if(i.enableZoom===!1)return;mt(P);break;case s.PAN:if(i.enablePan===!1)return;_t(P);break}}function k(P){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(P.preventDefault(),i.dispatchEvent(Sl),Et(it(P)),i.dispatchEvent(Jh))}function it(P){const pt=P.deltaMode,Ct={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(pt){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return P.ctrlKey&&!S&&(Ct.deltaY*=10),Ct}function ut(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",ht,{passive:!0,capture:!0}))}function ht(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",ht,{passive:!0,capture:!0}))}function vt(P){i.enabled===!1||i.enablePan===!1||Rt(P)}function At(P){switch(Lt(P),L.length){case 1:switch(i.touches.ONE){case rs.ROTATE:if(i.enableRotate===!1)return;Pt(P),r=s.TOUCH_ROTATE;break;case rs.PAN:if(i.enablePan===!1)return;bt(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;y(P),r=s.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Sl)}function lt(P){switch(Lt(P),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;H(P),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;$(P),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;et(P),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;st(P),i.update();break;default:r=s.NONE}}function Wt(P){i.enabled!==!1&&P.preventDefault()}function Nt(P){L.push(P.pointerId)}function Ut(P){delete Q[P.pointerId];for(let pt=0;pt<L.length;pt++)if(L[pt]==P.pointerId){L.splice(pt,1);return}}function Lt(P){let pt=Q[P.pointerId];pt===void 0&&(pt=new yt,Q[P.pointerId]=pt),pt.set(P.pageX,P.pageY)}function xt(P){const pt=P.pointerId===L[0]?L[1]:L[0];return Q[pt]}i.domElement.addEventListener("contextmenu",Wt),i.domElement.addEventListener("pointerdown",M),i.domElement.addEventListener("pointercancel",D),i.domElement.addEventListener("wheel",k,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}function Yl(){const n=new Date().getHours();return n>=6&&n<18}const Ub={EARTH_R:100,el:null,renderer:null,scene:null,camera:null,controls:null,clock:null,raf:0,_enterRaf:0,_tweenRaf:0,_tween:null,disposed:!1,earth:null,earthMat:null,clouds:null,atmo:null,aperture:null,stars:null,pointGroup:null,points:[],flyLines:[],timelineGroup:null,timelineItems:[],hoveredTl:null,labelsWrap:null,tooltip:null,ray:null,pointer:null,hovered:null,hoveringChina:!1,hoveringGlobe:!1,_interactiveHover:!1,_progressRaf:0,dayNight:1,dayNightTarget:1,lightBoost:0,lightBoostTarget:0,override:"auto",onPointClick:null,onPointHover:null,onTimelineClick:null,onTimelineHover:null,onLongPress:null,onChinaClick:null,onChinaHover:null,onInteractiveHover:null,onLongPressProgress:null,_tmpV:null,_tmpV2:null,async init(n,t){this.el=n,this.EARTH_R=t&&t.radius||100,this.onPointClick=t&&t.onPointClick||null,this.onPointHover=t&&t.onPointHover||null,this.onTimelineClick=t&&t.onTimelineClick||null,this.onTimelineHover=t&&t.onTimelineHover||null,this.onLongPress=t&&t.onLongPress||null,this.onChinaClick=t&&t.onChinaClick||null,this.onChinaHover=t&&t.onChinaHover||null,this.onInteractiveHover=t&&t.onInteractiveHover||null,this.onLongPressProgress=t&&t.onLongPressProgress||null,this.textures=t&&t.textures||{},this._tmpV=new U,this._tmpV2=new U;const e=n.clientWidth||800,i=n.clientHeight||520;this.renderer=new Vd({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(e,i),this.renderer.setClearColor(0,0),n.appendChild(this.renderer.domElement),this.scene=new kE;{const c=new Rb(16777215,1.15);c.position.set(.55,.75,.62),this.scene.add(c),this.scene.add(new Cb(16777215,.5))}this.camera=new fn(45,e/i,1,6e3),this.chinaDir=this.latLngToVec3(34.5,104.5,1).normalize(),this.camera.position.copy(this.chinaDir.clone().multiplyScalar(this.EARTH_R*7.6)),this.controls=new Ib(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=this.EARTH_R*1.25,this.controls.maxDistance=this.EARTH_R*9,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.4,this.clock=new Pb,this.ray=new Lb,this.pointer=new yt,this._buildEarth(),this._buildClouds(),this._buildAtmosphere(),this._buildAperture(),this._buildSatellite(),this._buildGalaxy(),this._buildStarfield(),this._buildOverlay(),this._bindEvents(),this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),this._paused=!1,this._setPaused=c=>{this._paused===c||this.disposed||(this._paused=c,!c&&!this.raf&&this.animate())},"IntersectionObserver"in window&&(this._io=new IntersectionObserver(c=>{this._setPaused(!(c[0]&&c[0].isIntersecting))},{threshold:.02}),this._io.observe(n)),this._onVis=()=>this._setPaused(document.hidden),document.addEventListener("visibilitychange",this._onVis);const s=performance.now(),r=2200,o=this.chinaDir.clone().multiplyScalar(this.EARTH_R*7.6),a=this.chinaDir.clone().multiplyScalar(this.EARTH_R*3.2),l=c=>{const u=Math.min(1,(c-s)/r),h=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;this.camera.position.lerpVectors(o,a,h),this.controls.update(),u<1&&(this._enterRaf=requestAnimationFrame(l))};return this._enterRaf=requestAnimationFrame(l),this.animate(),this},_buildEarth(){const n=new Xh,t=n.load(this.textures.day||"assets/earth3d-night.jpg"),e=n.load(this.textures.night||"assets/earth3d-day.jpg");this.earthMat=new bn({uniforms:{dayMap:{value:t},nightMap:{value:e},uDayNight:{value:1},uSunDir:{value:new U(.55,.75,.62).normalize()}},vertexShader:["varying vec2 vUv;","varying vec3 vNormal;","void main(){","  vUv = uv;","  vNormal = normalize(normalMatrix * normal);","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:["uniform sampler2D dayMap;","uniform sampler2D nightMap;","uniform float uDayNight;","uniform vec3 uSunDir;","varying vec2 vUv;","varying vec3 vNormal;","void main(){","  vec3 day = texture2D(dayMap, vUv).rgb;","  vec3 night = texture2D(nightMap, vUv).rgb;","  float diff = max(dot(vNormal, uSunDir), 0.0);","  float amb = 0.38;","  float lit = amb + (1.0 - amb) * diff;","  vec3 col = mix(night * 1.6, day * 1.25, uDayNight) * lit;","  gl_FragColor = vec4(col, 1.0);","}"].join(`
`)}),this.earth=new Ne(new Vi(this.EARTH_R,64,48),this.earthMat),this.scene.add(this.earth)},_buildClouds(){const t=new Xh().load(this.textures.cloud||"assets/earth3d-cloud.png");this.clouds=new Ne(new Vi(this.EARTH_R*1.025,48,32),new Po({map:t,transparent:!0,opacity:1,depthWrite:!1})),this.scene.add(this.clouds)},_buildAtmosphere(){const n=new bn({uniforms:{uColor:{value:new qt(5087231)},uPower:{value:3.2}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uPower; varying vec3 vN; void main(){ float i = pow(max(0.0, 0.72 - dot(vN, vec3(0.0, 0.0, 1.0))), uPower); gl_FragColor = vec4(uColor, 1.0) * i; }",side:Hn,blending:Ln,transparent:!0,depthWrite:!1});this.atmo=new Ne(new Vi(this.EARTH_R*1.2,48,32),n),this.scene.add(this.atmo)},_buildAperture(){const n=this.EARTH_R*1.42,t=[];for(let s=0;s<=96;s++){const r=s/96*Math.PI*2;t.push(new U(Math.cos(r)*n,Math.sin(r)*n,0))}const e=new xe().setFromPoints(t),i=new ws({color:3524863,transparent:!0,opacity:.8,blending:Ln,depthWrite:!1});this.aperture=new ar(e,i),this.scene.add(this.aperture)},_buildSatellite(){const n=this.EARTH_R;this.sat=new Ei;const t=new Ne(new na(n*.012,n*.015,n*.05,12),new Po({color:13161180}));t.rotation.x=Math.PI/2,this.sat.add(t);const e=new Ws(n*.05,n*.002,n*.022),i=new Po({color:2781142,emissive:662074,emissiveIntensity:.5}),s=new Ne(e,i);s.position.x=n*.033,this.sat.add(s);const r=new Ne(e,i);r.position.x=-n*.033,this.sat.add(r);const o=new Ne(new na(.14,.14,n*.022,6),new Po({color:10135733}));o.position.y=n*.031,this.sat.add(o),this.scene.add(this.sat),this.satGlow=this.makeGlowSprite("#9fd0ff",.5),this.satGlow.scale.set(6,6,1),this.scene.add(this.satGlow),this._moonAngle=.6,this._moonSpeed=.45},_buildGalaxy(){this.satellites=[],[{r:2.5,tilt:.55,speed:.1,color:"#7de3f5",size:3.5},{r:3.1,tilt:-.4,speed:.07,color:"#a78bfa",size:2.8},{r:3.7,tilt:.85,speed:.05,color:"#ffd166",size:2.6},{r:4.3,tilt:-.65,speed:.04,color:"#67e8f9",size:2.2},{r:5,tilt:.25,speed:.03,color:"#93c5fd",size:2}].forEach(t=>{const e=this.makeGlowSprite(t.color,.75);e.scale.set(t.size,t.size,1),this.scene.add(e),this.satellites.push({sprite:e,r:t.r*this.EARTH_R,tilt:t.tilt,speed:t.speed,angle:Math.random()*Math.PI*2})}),this.galaxyRings=[],[[3.4,.42,8250357,.16],[4.2,-.72,10980346,.12]].forEach(([t,e,i,s])=>{const o=new Float32Array(360);for(let u=0;u<120;u++){const h=u/120*Math.PI*2,f=t*this.EARTH_R*(.9+.18*Math.random());o[u*3]=Math.cos(h)*f,o[u*3+1]=Math.sin(h)*f*Math.sin(e),o[u*3+2]=Math.sin(h)*f*Math.cos(e)}const a=new xe;a.setAttribute("position",new Te(o,3));const l=new Vl({color:i,size:1.8,sizeAttenuation:!0,transparent:!0,opacity:s*1.5,depthWrite:!1}),c=new _l(a,l);this.scene.add(c),this.galaxyRings.push(c)})},_buildStarfield(){const t=new Float32Array(2700),e=new Float32Array(900),i=new Float32Array(900),s=new Float32Array(900),r=new Float32Array(900),o=new Float32Array(900*3),a=[[1,1,1],[.75,.88,1],[1,.93,.78],[.62,.82,1]],l=new U;for(let h=0;h<900;h++){const f=Math.random()*2-1,p=Math.random()*Math.PI*2,g=Math.sqrt(1-f*f);l.set(g*Math.cos(p),f,g*Math.sin(p));const _=this.EARTH_R*(55+Math.random()*45);t[h*3]=l.x*_,t[h*3+1]=l.y*_,t[h*3+2]=l.z*_,e[h]=Math.random()*Math.PI*2,i[h]=.3+Math.random()*1.5,s[h]=.08+Math.random()*.38,r[h]=28+Math.random()*60;const m=a[Math.floor(Math.random()*a.length)];o[h*3]=m[0],o[h*3+1]=m[1],o[h*3+2]=m[2]}const c=new xe;c.setAttribute("position",new Te(t,3)),c.setAttribute("aPhase",new Te(e,1)),c.setAttribute("aSpeed",new Te(i,1)),c.setAttribute("aAmp",new Te(s,1)),c.setAttribute("aSize",new Te(r,1)),c.setAttribute("aColor",new Te(o,3));const u=new bn({uniforms:{uTime:{value:0}},vertexShader:["attribute float aPhase;","attribute float aSpeed;","attribute float aAmp;","attribute float aSize;","attribute vec3 aColor;","uniform float uTime;","varying vec3 vColor;","varying float vTw;","void main(){","  vColor = aColor;","  float t = uTime * aSpeed + aPhase;","  vTw = 0.78 + aAmp * sin(t);","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = aSize * (500.0 / -mv.z) * (0.65 + 0.55 * sin(t * 1.7 + aPhase * 3.0));","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["varying vec3 vColor;","varying float vTw;","void main(){","  vec2 uv = gl_PointCoord - 0.5;","  float d = length(uv);","  float a = smoothstep(0.5, 0.05, d);","  gl_FragColor = vec4(vColor, a * clamp(vTw, 0.0, 1.4));","}"].join(`
`),transparent:!0,depthWrite:!1,blending:Ln});this.starfield=new _l(c,u),this.scene.add(this.starfield)},_buildRing(){const n=[];for(let e=0;e<=48;e++)n.push(new U(0,0,0));const t=new xe().setFromPoints(n);this.ring=new ar(t,new ws({color:16765286,transparent:!0,opacity:.95,blending:Ln,depthWrite:!1})),this.ring.visible=!1,this.scene.add(this.ring)},showRing(n,t){this.ring||this._buildRing(),this._ringCenter=this.latLngToVec3(n,t,1).normalize(),this._ringAngle=0,this._ringAnim={t0:performance.now(),dur:480,from:this.EARTH_R*.16,to:this.EARTH_R*.045},this._ringRadius=this.EARTH_R*.16,this._ringPulse=!0,this.ring.visible=!0,this._updateRingGeometry()},_updateRingGeometry(){if(!this._ringCenter||!this.ring)return;const n=this._ringCenter,t=n.clone().multiplyScalar(this.EARTH_R*1.012),e=this._ringRadius,i=Math.abs(n.y)>.9?new U(1,0,0):new U(0,1,0),s=new U().crossVectors(i,n).normalize(),r=new U().crossVectors(n,s).normalize(),o=[];for(let a=0;a<=48;a++){const l=(this._ringAngle||0)+a/48*Math.PI*2;o.push(t.clone().add(s.clone().multiplyScalar(Math.cos(l)*e)).add(r.clone().multiplyScalar(Math.sin(l)*e)))}this.ring.geometry.setFromPoints(o)},hideRing(){this.ring&&(this.ring.visible=!1),this._ringAnim=null,this._ringPulse=!1},_buildOverlay(){this.labelsWrap=document.createElement("div"),this.labelsWrap.className="globe3d-overlay",this.labelsWrap.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:5;",this.el.appendChild(this.labelsWrap),this.tooltip=document.createElement("div"),this.tooltip.className="globe3d-tip",this.tooltip.style.cssText="position:absolute;display:none;pointer-events:none;z-index:60;max-width:250px;padding:10px 12px;border-radius:10px;background:rgba(6,14,30,.95);border:1px solid rgba(34,211,238,.4);box-shadow:0 12px 34px rgba(0,0,0,.55),0 0 22px rgba(34,211,238,.14);color:#e8f4ff;font-size:12px;line-height:1.7;backdrop-filter:blur(8px);",this.labelsWrap.appendChild(this.tooltip)},makePlanetTexture(n){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),i=this._hexToRgb(n),s=e.createLinearGradient(0,0,128,128);s.addColorStop(0,this._rgbaStr(this._mix(i,[255,255,255],.55),1)),s.addColorStop(.45,this._rgbaStr(i,1)),s.addColorStop(1,this._rgbaStr(this._mix(i,[0,0,0],.65),1)),e.fillStyle=s,e.fillRect(0,0,128,128),e.globalAlpha=.22;for(let o=0;o<4;o++){const a=20+Math.random()*90,l=5+Math.random()*10,c=e.createLinearGradient(0,a,0,a+l);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.5,"rgba(255,255,255,0.8)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.beginPath(),e.ellipse(64,a,50+Math.random()*24,l/2,0,0,Math.PI*2),e.fill()}e.globalAlpha=.22;for(let o=0;o<7;o++)e.fillStyle="rgba(0,0,0,0.55)",e.beginPath(),e.arc(18+Math.random()*92,18+Math.random()*92,3+Math.random()*6,0,Math.PI*2),e.fill();e.globalAlpha=1;const r=new Fh(t);return r.anisotropy=4,r},_hexToRgb(n){const t=n.replace("#",""),e=parseInt(t.length===3?t.split("").map(i=>i+i).join(""):t,16);return[e>>16&255,e>>8&255,e&255]},_mix(n,t,e){return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e].map(Math.round)},_rgbaStr(n,t){return"rgba("+n[0]+","+n[1]+","+n[2]+","+t+")"},latLngToVec3(n,t,e){const i=n*Math.PI/180,s=t*Math.PI/180;return new U(e*Math.cos(i)*Math.cos(s),e*Math.sin(i),-e*Math.cos(i)*Math.sin(s))},_hexToRgba(n,t){const e=n.replace("#",""),i=parseInt(e.length===3?e.split("").map(s=>s+s).join(""):e,16);return"rgba("+(i>>16&255)+","+(i>>8&255)+","+(i&255)+","+t+")"},makeGlowSprite(n,t){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d"),s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.18,this._hexToRgba(n,.85)),s.addColorStop(.5,this._hexToRgba(n,.28)),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,128,128);const r=new Fh(e),o=new Wd({map:r,transparent:!0,opacity:t,depthWrite:!1});return new WE(o)},setPoints(n){this.pointGroup&&this.scene.remove(this.pointGroup),this.pointGroup=new Ei,this.points=[],(n||[]).forEach(t=>{const e=t.value[0],i=t.value[1],s=this.latLngToVec3(i,e,this.EARTH_R*1.012),r=t.type==="work"?"#f5b942":t.type==="study"?"#a78bfa":"#22d3ee",o=this.makeGlowSprite(r,t.type==="project"?.75:1);o.position.copy(s);const a=t.type==="work"?9:(t.type==="study",8);o.scale.set(a,a,1),this.pointGroup.add(o),this.points.push({data:t,sprite:o,baseScale:a,type:t.type})}),this.scene.add(this.pointGroup)},buildFlyLines(n){this.flyLines.forEach(t=>{t.line&&this.scene.remove(t.line),t.comet&&this.scene.remove(t.comet)}),this.flyLines=[],(n||[]).forEach(t=>{const e=this.latLngToVec3(t.from[1],t.from[0],this.EARTH_R*1.01),i=this.latLngToVec3(t.to[1],t.to[0],this.EARTH_R*1.01),s=e.clone().add(i).multiplyScalar(.5).normalize().multiplyScalar(this.EARTH_R*1.5),r=new $d(e,s,i),o=new xe().setFromPoints(r.getPoints(48)),a=new ar(o,new ws({color:t.color||2282478,transparent:!0,opacity:.45,depthWrite:!1}));this.scene.add(a);const l=this.makeGlowSprite(t.colorHex||"#22d3ee",.95);l.scale.set(5,5,1),this.scene.add(l),this.flyLines.push({curve:r,comet:l,speed:.22+Math.random()*.12,t:Math.random()})})},buildChinaBorders(n){if(!n||!n.features||this.chinaBorders)return;this.chinaGeo=n,this.chinaBoxes=n.features.map(r=>{const o=r.geometry,a=o&&o.coordinates?o.type==="Polygon"?[o.coordinates]:o.coordinates:[];let l=1/0,c=1/0,u=-1/0,h=-1/0;return a.forEach(f=>{const p=f&&f[0];p&&p.forEach(g=>{g[0]<l&&(l=g[0]),g[0]>u&&(u=g[0]),g[1]<c&&(c=g[1]),g[1]>h&&(h=g[1])})}),{minX:l,minY:c,maxX:u,maxY:h,polys:a}});const t=[],e=this.EARTH_R*1.01;if(n.features.forEach(r=>{const o=r.geometry;if(!o||!o.coordinates)return;(o.type==="Polygon"?[o.coordinates]:o.coordinates).forEach(l=>{const c=l&&l[0];if(!(!c||c.length<3))for(let u=0;u<c.length-1;u++){const h=this.latLngToVec3(c[u][1],c[u][0],e),f=this.latLngToVec3(c[u+1][1],c[u+1][0],e);t.push(h.x,h.y,h.z,f.x,f.y,f.z)}})}),!t.length)return;const i=new xe;i.setAttribute("position",new Te(new Float32Array(t),3));const s=new ws({color:3531007,transparent:!0,opacity:.9,blending:Ln,depthWrite:!1});this.chinaBorders=new XE(i,s),this.scene.add(this.chinaBorders)},buildTimeline(n){this.timelineGroup&&this.scene.remove(this.timelineGroup),this.labelsWrap&&this.labelsWrap.querySelectorAll(".globe3d-tl-label").forEach(i=>i.remove()),this.timelineGroup=new Ei,this.timelineItems=[];const t=n||[],e=this.EARTH_R*2.1;this.timelineGroup.quaternion.setFromEuler(new Xr(Math.PI/3,Math.PI/6,0));{const i=[];for(let l=0;l<=120;l++){const c=l/120*Math.PI*2;i.push(new U(Math.cos(c)*e,Math.sin(c)*e,0))}const s=new xe().setFromPoints(i),r=new ws({color:3524863,transparent:!0,opacity:.18,blending:Ln,depthWrite:!1});this.timelineRing=new ar(s,r),this.timelineGroup.add(this.timelineRing);const o=new xe().setFromPoints(i),a=new Vl({color:8250357,size:1.8,transparent:!0,opacity:.85,sizeAttenuation:!0,blending:Ln,depthWrite:!1});this.timelineRingDots=new _l(o,a),this.timelineGroup.add(this.timelineRingDots)}t.forEach((i,s)=>{const r=i.color||"#22d3ee",o=i.radius||(i.type==="work"?10:i.type==="study"?9:8),a=new Ei,l=new Ne(new Vi(o,32,24),new gc({map:this.makePlanetTexture(r)}));a.add(l);const c=new Ne(new Vi(o*1.16,24,18),new bn({uniforms:{uColor:{value:new qt(r)}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; varying vec3 vN; void main(){ float i = pow(max(0.0, 0.72 - dot(vN, vec3(0.0, 0.0, 1.0))), 2.2); gl_FragColor = vec4(uColor, 1.0) * i; }",side:Hn,blending:Ln,transparent:!0,depthWrite:!1}));a.add(c);const u=this.makeGlowSprite(r,.5);u.scale.set(o*2.2,o*2.2,1),a.add(u),this.timelineGroup.add(a);const h=document.createElement("div");h.className="globe3d-label globe3d-tl-label";const f=i.short||i.name,p=i.timeLabel||(i.start||"")+(i.end?" ~ "+i.end:"");h.innerHTML='<b style="display:block;font-size:13px;letter-spacing:2px;color:'+r+';">'+f+'</b><span style="display:block;font-size:11px;color:#cfe3f7;letter-spacing:1px;">'+p+"</span>",h.style.cssText="position:absolute;left:0;top:0;line-height:1.5;text-align:center;text-shadow:0 0 8px rgba(0,0,0,.95),0 0 18px rgba(0,0,0,.7);white-space:nowrap;pointer-events:none;",this.labelsWrap.appendChild(h);const g=s/Math.max(1,t.length)*Math.PI*2+Math.PI/3;this.timelineItems.push({data:i,group:a,label:h,baseScale:1,orbitR:e,angle:g})}),this.scene.add(this.timelineGroup)},_showTimelineTooltip(n){let t='<b style="color:'+(n.color||"#22d3ee")+'">🛰 '+n.name+"</b>";(n.start||n.end)&&(t+='<br><span style="color:#93b4d4">'+(n.start||"")+" ~ "+(n.end||"")+"</span>"),n.detail&&(t+='<br><span style="color:#e8f4ff">'+n.detail+"</span>"),this.tooltip.innerHTML=t,this.tooltip.style.display="block"},_bindEvents(){const n=this.renderer.domElement;n.addEventListener("pointermove",t=>this._onMove(t)),n.addEventListener("pointerdown",t=>this._onDown(t)),n.addEventListener("pointerup",t=>this._onUp(t)),n.addEventListener("pointerleave",()=>this._clearHover())},_onMove(n){this._pressInfo&&(Math.abs(n.clientX-this._pressInfo.x)>12||Math.abs(n.clientY-this._pressInfo.y)>12)&&this._clearPress();const t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(n.clientX-t.left)/t.width*2-1,this.pointer.y=-((n.clientY-t.top)/t.height)*2+1,this._raycast()},_raycast(){this.ray.setFromCamera(this.pointer,this.camera);const n=this.points.map(a=>a.sprite).concat(this.timelineItems.map(a=>a.group)),t=this.ray.intersectObjects(n,!0),e=t.length?t[0].object:null,i=e?this.points.find(a=>a.sprite===e):null,s=e&&!i?this.timelineItems.find(a=>a.group===e||a.group.children.indexOf(e)>=0):null;let r=!1,o=!1;if(!i&&!s){const a=this._hitEarthLatLng();a&&(r=this._pointInChina(a.lat,a.lng),o=!r)}if(i!==this.hovered||s!==this.hoveredTl||r!==this.hoveringChina||o!==this.hoveringGlobe){this.hovered=i,this.hoveredTl=s,this.hoveringChina=r,this.hoveringGlobe=o,this.points.forEach(l=>l.sprite.scale.setScalar(l.baseScale)),this.timelineItems.forEach(l=>l.group.scale.setScalar(l.baseScale)),this._setChinaHover(r),this._setCursor(i||s||r||o?"pointer":"");const a=!!(i||s||r||o);a!==this._interactiveHover&&(this._interactiveHover=a,this.onInteractiveHover&&this.onInteractiveHover(a)),i?(i.sprite.scale.setScalar(i.baseScale*1.55),this._showTooltip(i.data),this.showRing(i.data.value[1],i.data.value[0]),this.onPointHover&&this.onPointHover(i.data)):s?(s.group.scale.setScalar(s.baseScale*1.3),this._showTimelineTooltip(s.data),this.onTimelineHover&&this.onTimelineHover(s.data)):r?this.onChinaHover&&this.onChinaHover(!0):o?(this._showTooltip({name:"个人档案室",note:"长按进入个人档案库"}),this._positionTooltipAtPointer(),this.onChinaHover&&this.onChinaHover(!1)):(this._hideTooltip(),this.hideRing(),this.onPointHover&&this.onPointHover(null),this.onTimelineHover&&this.onTimelineHover(null),this.onChinaHover&&this.onChinaHover(!1))}},_hitEarthLatLng(){if(!this.earth)return null;this.ray.setFromCamera(this.pointer,this.camera);const n=this.ray.intersectObject(this.earth,!1);if(!n.length)return null;const t=n[0].point.clone().normalize(),e=Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI,i=Math.atan2(-t.z,t.x)*180/Math.PI;return{lat:e,lng:i}},_hitChina(){if(!this.chinaGeo)return!1;const n=this._hitEarthLatLng();return n?this._pointInChina(n.lat,n.lng):!1},_pointInChina(n,t){const e=this.chinaBoxes;if(!e)return!1;for(let i=0;i<e.length;i++){const s=e[i];if(t<s.minX||t>s.maxX||n<s.minY||n>s.maxY)continue;const r=s.polys;for(let o=0;o<r.length;o++){const a=r[o],l=a&&a[0];if(!(!l||l.length<3)&&this._inRing(t,n,l)){let c=!1;for(let u=1;u<a.length;u++)if(this._inRing(t,n,a[u])){c=!0;break}if(!c)return!0}}}return!1},_inRing(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const o=e[s][0],a=e[s][1],l=e[r][0],c=e[r][1];a>t!=c>t&&n<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i},_setChinaHover(n){this.chinaBorders&&(this.chinaBorders.material.opacity=n?1:.9,this.chinaBorders.material.color.setHex(n?16777215:3531007)),n&&(this._showTooltip({name:"中国",note:"点击进入中国地图"}),this._positionTooltipAtPointer())},_setCursor(n){this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.cursor=n||"")},_positionTooltipAtPointer(){const n=this.renderer.domElement.getBoundingClientRect();if(!n.width)return;const t=(this.pointer.x+1)/2*n.width,e=(-this.pointer.y+1)/2*n.height;this.tooltip.style.left=Math.min(Math.max(6,t),n.width-260)+"px",this.tooltip.style.top=Math.max(6,e+16)+"px"},_onDown(n){n.button===0&&(this._clearPress(),this._pressInfo={x:n.clientX,y:n.clientY,t:performance.now()},this._longTimer=setTimeout(()=>{this._pressInfo&&!this.hovered&&!this.hoveringChina&&this.onLongPress&&this.onLongPress(),this._pressInfo=null},900),this._onMove(n),this._pressInfo.china=this.hoveringChina,this.hovered&&this.onPointClick?this.onPointClick(this.hovered.data):this.hoveredTl&&this.onTimelineClick&&this.onTimelineClick(this.hoveredTl.data),!this.hovered&&!this.hoveringChina&&this.onLongPressProgress&&this._tickPressProgress(performance.now()))},_onUp(n){if(n.button!==0)return;const t=this._pressInfo;this._clearPress(),t&&t.china&&!this.hovered&&this.onChinaClick&&this.onChinaClick()},_tickPressProgress(n){if(!this._pressInfo||this.disposed){this._setPressProgress(0);return}const t=Math.min(1,(n-this._pressInfo.t)/900);this._setPressProgress(t),t<1&&this._pressInfo&&(this._progressRaf=requestAnimationFrame(()=>this._tickPressProgress(performance.now())))},_setPressProgress(n){this.onLongPressProgress&&this.onLongPressProgress(n)},_clearPress(){this._longTimer&&(clearTimeout(this._longTimer),this._longTimer=0),this._progressRaf&&(cancelAnimationFrame(this._progressRaf),this._progressRaf=0),this.onLongPressProgress&&this.onLongPressProgress(0),this._pressInfo=null},_clearHover(){(this.hovered||this.hoveredTl)&&(this.hovered=null,this.hoveredTl=null,this.points.forEach(n=>n.sprite.scale.setScalar(n.baseScale)),this.timelineItems.forEach(n=>n.group.scale.setScalar(n.baseScale)),this._hideTooltip(),this.hideRing(),this.onPointHover&&this.onPointHover(null),this.onTimelineHover&&this.onTimelineHover(null))},_showTooltip(n){let t='<b style="color:#22d3ee">📍 '+n.name+"</b>";if(n.note&&(t+='<br><span style="color:#93b4d4">'+n.note+"</span>"),n.projects&&n.projects.length){const e=n.projects.slice(0,5).map(i=>'<div style="border-bottom:1px dashed rgba(120,200,255,.15);padding:2px 0">'+i.name+"</div>").join("");t+='<div style="margin-top:4px">'+e+"</div>"}this.tooltip.innerHTML=t,this.tooltip.style.display="block"},_hideTooltip(){this.tooltip.style.display="none"},focusOn(n,t,e,i){const s=this.latLngToVec3(t,n,this.EARTH_R),r=e??170,o=this.EARTH_R*Math.max(1.5,Math.min(4.2,1.1+r/170*2.1)),a=s.clone().normalize(),l=s.clone().add(a.multiplyScalar(o));this.controls.autoRotate=!1,this.showRing(t,n),this._tweenTo(s,l,1e3,i)},resetView(){this.controls.autoRotate=!0,this.hideRing(),this._tweenTo(new U(0,0,0),this.chinaDir.clone().multiplyScalar(this.EARTH_R*3.2),1200)},setPaused(n){this._setPaused(!!n)},_tweenTo(n,t,e,i){const s=new U(0,0,1),r=this.camera.position.clone().normalize(),o=t.clone().normalize(),a=new ui().setFromUnitVectors(s,r),l=new ui().setFromUnitVectors(s,o);if(this._tween={t0:performance.now(),dur:e,sTarget:this.controls.target.clone(),target:n.clone(),sDist:this.camera.position.length(),eDist:t.length(),qs:a,qe:l},!this._tweenRaf){const c=u=>{const h=this._tween;if(!h){this._tweenRaf=0;return}const f=Math.min(1,(u-h.t0)/h.dur),p=f<.5?2*f*f:1-Math.pow(-2*f+2,2)/2;this.controls.target.lerpVectors(h.sTarget,h.target,p);const g=h.qs.clone().slerp(h.qe,p),_=s.clone().applyQuaternion(g),m=h.sDist+(h.eDist-h.sDist)*p;this.camera.position.copy(_.multiplyScalar(m)),this.controls.update(),f<1?this._tweenRaf=requestAnimationFrame(c):(this._tween=null,this._tweenRaf=0,i&&i())};this._tweenRaf=requestAnimationFrame(c)}},setDayNight(n,t){this.override&&this.override!=="auto"||(this.dayNightTarget=n?1:0,this.lightBoostTarget=n?0:1,t&&(this.dayNight=this.dayNightTarget,this.lightBoost=this.lightBoostTarget))},setOverride(n){this.override=n==="day"||n==="night"?n:"auto";const t=this.override==="day"?!0:this.override==="night"?!1:Yl();this.dayNightTarget=t?1:0,this.lightBoostTarget=t?0:1,this.dayNight=this.dayNightTarget,this.lightBoost=this.lightBoostTarget},resize(){if(this.disposed||!this.el)return;const n=this.el.clientWidth,t=this.el.clientHeight;!n||!t||(this.camera.aspect=n/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,t))},animate(){if(this.disposed)return;if(this._paused){this.raf=0;return}this.raf=requestAnimationFrame(()=>this.animate());const n=Math.min(.05,this.clock.getDelta());if(this.dayNight+=(this.dayNightTarget-this.dayNight)*Math.min(1,n*1.5),this.lightBoost+=(this.lightBoostTarget-this.lightBoost)*Math.min(1,n*1.5),this.earthMat&&(this.earthMat.uniforms.uDayNight.value=this.dayNight),this.points.forEach(t=>{t.sprite.material.opacity=(t.type==="project"?.72:1)*(.5+.5*this.lightBoost)}),this.starfield&&(this.starfield.material.uniforms.uTime.value=performance.now()/1e3),this.clouds&&(this.clouds.rotation.y+=n*.02),this.aperture&&this.camera&&this.aperture.quaternion.copy(this.camera.quaternion),this.sat){this._moonAngle=(this._moonAngle||0)+n*(this._moonSpeed||.45);const t=this._moonAngle,e=this.EARTH_R*1.42,i=this.camera.quaternion,s=new U(Math.cos(t)*e,Math.sin(t)*e,0).applyQuaternion(i);this.sat.position.copy(s);const r=new U(-Math.sin(t)*e,Math.cos(t)*e,0).applyQuaternion(i).normalize(),o=this.camera.position.clone().normalize(),a=new U().crossVectors(o,r).normalize(),l=new he().makeBasis(a,o,r);this.sat.quaternion.setFromRotationMatrix(l),this.satGlow&&this.satGlow.position.copy(s)}if(this.satellites&&this.satellites.forEach(t=>{t.angle+=n*t.speed;const e=t.angle;t.sprite.position.set(Math.cos(e)*t.r,Math.sin(e)*t.r*Math.sin(t.tilt),Math.sin(e)*t.r*Math.cos(t.tilt))}),this.timelineItems){const t=this._timelineSpeed||.06;this.timelineItems.forEach(e=>{e.angle+=n*t;const i=e.angle,s=e.orbitR,r=Math.cos(i)*s,o=Math.sin(i)*s;e.group.position.set(r,o,0)})}if(this._ringAnim&&this.ring&&this.ring.visible){const t=Math.min(1,(performance.now()-this._ringAnim.t0)/this._ringAnim.dur),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;this._ringRadius=this._ringAnim.from+(this._ringAnim.to-this._ringAnim.from)*e,t>=1&&(this._ringAnim=null),this._updateRingGeometry()}else if(this._ringPulse&&this.ring&&this.ring.visible){const t=performance.now()/1e3;this._ringRadius=this.EARTH_R*(.045+.012*Math.sin(t*3.4)),this._ringAngle=(this._ringAngle||0)+.015,this._updateRingGeometry()}this.flyLines.forEach(t=>{t.t=(t.t+n*t.speed)%1,t.comet.position.copy(t.curve.getPoint(t.t))}),this._updateOverlay(),this.controls.update(),this.renderer.render(this.scene,this.camera)},_updateOverlay(){const n=performance.now();if(n-(this._lastOvT||0)<66)return;this._lastOvT=n;const t=this.el.clientWidth||800,e=this.el.clientHeight||520;if(this.timelineItems.length){const i=this.camera.position.clone().normalize(),s=this.camera.fov*Math.PI/180,o=e/2/Math.tan(s/2)*(this.EARTH_R/this.camera.position.length()),a=t/2,l=e/2;this.timelineItems.forEach(c=>{const u=this._tmpV2.copy(c.group.position).applyQuaternion(this.timelineGroup.quaternion),h=this._tmpV.copy(u).project(this.camera),f=(h.x*.5+.5)*t,p=(-h.y*.5+.5)*e,g=u.dot(i)<0,_=Math.sqrt((f-a)*(f-a)+(p-l)*(p-l))<o*.96,m=h.z<1&&h.z>-1&&!(g&&_),d=c.label;m?(d.style.transform="translate("+f+"px,"+p+"px) translate(-50%, calc(-100% - 18px))",d.style.display="block"):d.style.display="none"})}if(this.hoveringChina&&this.tooltip.style.display==="block"&&!this.hovered)this._positionTooltipAtPointer();else if(this.hovered&&this.tooltip.style.display==="block"){const i=this._tmpV2.copy(this.hovered.sprite.position).project(this.camera);if(i.z<1){const s=(i.x*.5+.5)*t,r=(-i.y*.5+.5)*e;this.tooltip.style.left=Math.min(Math.max(6,s),t-260)+"px",this.tooltip.style.top=Math.max(6,r+16)+"px"}}},dispose(){if(this.disposed=!0,cancelAnimationFrame(this.raf),cancelAnimationFrame(this._enterRaf),cancelAnimationFrame(this._tweenRaf),this._longTimer&&clearTimeout(this._longTimer),this._onResize&&window.removeEventListener("resize",this._onResize),this._onVis&&document.removeEventListener("visibilitychange",this._onVis),this._io)try{this._io.disconnect()}catch{}this.timelineGroup&&this.scene.remove(this.timelineGroup),this.labelsWrap&&this.labelsWrap.remove(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.remove()),this.el=null}},Nb=""+new URL("earth3d-night-CehiUZvX.jpg",import.meta.url).href,Ob=""+new URL("earth3d-day-Cfv4RgkR.jpg",import.meta.url).href,Fb=""+new URL("earth3d-cloud-4KQP77mE.png",import.meta.url).href,Bb={__name:"Globe3D",props:{points:{type:Array,default:()=>[]},flyLines:{type:Array,default:()=>[]},timeline:{type:Array,default:()=>[]},autoDayNight:{type:Boolean,default:!0}},emits:["point-click","timeline-click","long-press","china-click","interactive-hover","press-progress","ready"],setup(n,{expose:t,emit:e}){const i=n,s=e,r=ue(null);let o=null,a=null;return ts(async()=>{o=await Ub.init(r.value,{radius:100,textures:{day:Nb,night:Ob,cloud:Fb}}),o.onPointClick=c=>s("point-click",c),o.onTimelineClick=c=>s("timeline-click",c),o.onLongPress=()=>s("long-press"),o.onChinaClick=()=>s("china-click"),o.onInteractiveHover=c=>s("interactive-hover",c),o.onLongPressProgress=c=>s("press-progress",c),o.onTimelineHover=()=>{},i.points.length&&o.setPoints(i.points),i.flyLines.length&&o.buildFlyLines(i.flyLines),i.timeline.length&&o.buildTimeline(i.timeline);const l=await No(()=>import("./chinaGeo-ba7E3HKY.js"),[],import.meta.url);o&&!o.disposed&&o.buildChinaBorders(l.default),i.autoDayNight&&(o.setDayNight(Yl(),!0),a=setInterval(()=>{o&&!o.disposed&&o.setDayNight(Yl(),!1)},6e4)),s("ready",o)}),ji(()=>i.points,l=>{o&&o.setPoints(l)},{deep:!0}),ji(()=>i.flyLines,l=>{o&&o.buildFlyLines(l)},{deep:!0}),ji(()=>i.timeline,l=>{o&&o.buildTimeline(l)},{deep:!0}),Vs(()=>{a&&clearInterval(a),o&&o.dispose(),o=null}),t({focusOn:(l,c,u,h)=>o&&o.focusOn(l,c,u,h),focusChina:l=>o&&o.focusOn(104.5,34.5,55,l),setPaused:l=>{o&&o.setPaused(l)},resetView:()=>o&&o.resetView(),setDayNightMode:l=>o&&o.setOverride(l),setAutoRotate:l=>{o&&(o.controls.autoRotate=l)},setPoints:l=>o&&o.setPoints(l),buildFlyLines:l=>o&&o.buildFlyLines(l),buildTimeline:l=>o&&o.buildTimeline(l)}),(l,c)=>(Bt(),kt("div",{ref_key:"el",ref:r,class:"globe3d-root"},null,512))}},zb=es(Bb,[["__scopeId","data-v-cf2475e0"]]),Hb={class:"modal"},Gb={class:"modal-head"},kb={class:"modal-title"},Vb={key:0,class:"modal-meta"},Wb={key:1,class:"modal-rows"},Xb={class:"m-label"},jb={class:"m-value"},qb={key:2,class:"modal-cards"},Yb={class:"mc-name"},$b={class:"m-label"},Kb={class:"m-value"},Zb={key:3,class:"modal-text"},Jb={__name:"DetailModal",props:{content:{type:Object,default:null}},emits:["close"],setup(n,{emit:t}){const e=t;return(i,s)=>(Bt(),pr(ug,{name:"modal"},{default:Lf(()=>[n.content?(Bt(),kt("div",{key:0,class:"modal-mask",onClick:s[1]||(s[1]=Ng(r=>e("close"),["self"]))},[ot("div",Hb,[ot("div",Gb,[ot("span",kb,Jt(n.content.title),1),ot("button",{class:"modal-close",onClick:s[0]||(s[0]=r=>e("close"))},"✕")]),n.content.meta?(Bt(),kt("div",Vb,Jt(n.content.meta),1)):$e("",!0),n.content.rows&&n.content.rows.length?(Bt(),kt("div",Wb,[(Bt(!0),kt(de,null,En(n.content.rows,(r,o)=>(Bt(),kt("div",{key:o,class:"modal-row"},[ot("span",Xb,Jt(r[0]),1),ot("span",jb,Jt(r[1]),1)]))),128))])):$e("",!0),n.content.cards&&n.content.cards.length?(Bt(),kt("div",qb,[(Bt(!0),kt(de,null,En(n.content.cards,(r,o)=>(Bt(),kt("div",{key:o,class:"modal-card"},[ot("p",Yb,Jt(r.name),1),(Bt(!0),kt(de,null,En(r.rows||[],(a,l)=>(Bt(),kt("div",{key:l,class:"modal-row"},[ot("span",$b,Jt(a[0]),1),ot("span",Kb,Jt(a[1]),1)]))),128))]))),128))])):$e("",!0),n.content.text?(Bt(),kt("div",Zb,Jt(n.content.text),1)):$e("",!0)])])):$e("",!0)]),_:1}))}},Qb=es(Jb,[["__scopeId","data-v-1e68caf9"]]);function tT(n=1920,t=1080){const e=ue(1);function i(){const s=window.innerWidth,r=window.innerHeight;e.value=Math.min(s/n,r/t)}return ts(()=>{i(),window.addEventListener("resize",i)}),Vs(()=>window.removeEventListener("resize",i)),{scale:e}}function eT(){const n="a, button, .cbtn, .seg-btn, .ctrl-btn, .chip, .tag, .nav-item, .panel-item, .kpi, .loc-item, .pf-card, .blog-post, .globe-reset, [data-route]";let t=null,e=null,i=null,s=innerWidth/2,r=innerHeight/2,o=s,a=r,l=0,c=!1;function u(){t&&(t.style.display="block"),e&&(e.style.display="block")}function h(){t&&(t.style.display="none"),e&&(e.style.display="none")}function f(v){u(),s=v.clientX,r=v.clientY,t&&(t.style.left=s+"px",t.style.top=r+"px");const E=v.target.closest("input, textarea, select, .form-input");if(t&&t.classList.toggle("hidden-c",!!E),e&&e.classList.toggle("hidden-c",!!E),!E&&e){const w=!!v.target.closest(n);e.classList.toggle("hovering",w||c),e.classList.toggle("target",!!v.target.closest(".globe-stage, .globe3d-root, canvas"))}l||(l=requestAnimationFrame(p))}function p(){o+=(s-o)*.16,a+=(r-a)*.16,e&&(e.style.left=o+"px",e.style.top=a+"px"),l=0}function g(){e&&e.classList.add("pressed")}function _(){e&&e.classList.remove("pressed")}function m(){h()}function d(v){c=!!v,e&&e.classList.toggle("hovering",c)}function b(v){if(!i)return;const E=Math.max(0,Math.min(1,v));if(E>0){i.classList.add("show"),i.style.left=s+"px",i.style.top=r+"px";const w=i.querySelector(".cp-fill");w&&(w.style.strokeDashoffset=(113.1*(1-E)).toFixed(1))}else i.classList.remove("show")}return ts(()=>{t=document.getElementById("cursorDot"),e=document.getElementById("cursorRing"),i=document.getElementById("cursorProgress"),!(!t||!e)&&(window.matchMedia&&window.matchMedia("(hover: none)").matches||(document.addEventListener("mousemove",f),document.addEventListener("mousedown",g),document.addEventListener("mouseup",_),document.addEventListener("mouseleave",m)))}),Vs(()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mousedown",g),document.removeEventListener("mouseup",_),document.removeEventListener("mouseleave",m)}),{setHover:d,setProgress:b}}const nT="./archive/index.html",iT={class:"screen-wrap"},sT={class:"globe-stage"},rT={class:"china-loading"},oT={class:"threebody-wrap"},aT={__name:"App",setup(n){const t=Da(()=>No(()=>import("./ChinaMapView-BY0h_9rV.js"),__vite__mapDeps([0,1]),import.meta.url)),e=Da(()=>No(()=>import("./ThreeBodySim-DW3LFPkn.js"),__vite__mapDeps([2,3]),import.meta.url)),i=Da(()=>No(()=>import("./ChartsPanel-CpyLxS7z.js"),__vite__mapDeps([4,5]),import.meta.url)),{data:s}=Gr(),{scale:r}=tT(1920,1080),o=eT(),a=ue(!1);ts(()=>requestAnimationFrame(()=>a.value=!0));const l=ue((()=>{const I=new URLSearchParams(location.search).get("view");return I==="china"||I==="threebody"?I:"earth"})()),c=ue(new URLSearchParams(location.search).get("charts")==="1"),u=ue(l.value==="china"),h=ue(l.value==="threebody");ji(l,I=>{I==="china"&&(u.value=!0),I==="threebody"&&(h.value=!0)});const f=ue(!1),p=ue(!1),g=ue(!1);let _=!1,m=!1;const d=[];function b(){for(;d.length;)clearTimeout(d.pop())}const v=cn(()=>l.value==="earth"?1:0),E=cn(()=>l.value==="china"?"china-active":"china-idle"),w=ue(null),R=ue(null),L=ue(null),Q=cn(()=>{const I=[];return(s.locations||[]).forEach(C=>{I.push({name:C.name,type:C.type,city:C.name,count:1,value:[C.coord[0],C.coord[1],0,1],note:C.note})}),or(s.projects).forEach(C=>{I.push({name:C.city,type:"project",city:C.city,count:C.count,value:[C.coord[0],C.coord[1],0,C.count],note:C.count+" 个项目 · 合同额 "+di(C.contract),projects:C.list})}),I}),S=cn(()=>{const I=(s.locations||[]).find(it=>it.type==="study"),C=(s.locations||[]).find(it=>it.type==="work"),k=[];return I&&C&&k.push({from:I.coord,to:C.coord,color:2282478,colorHex:"#22d3ee"}),or(s.projects).forEach(it=>{C&&k.push({from:C.coord,to:it.coord,color:2282478,colorHex:"#22d3ee"})}),k}),A=cn(()=>{const I=(s.timeline||[]).map(C=>({...C}));return I.length<3&&s.profile&&s.profile.birth&&I.unshift({name:"出生",start:s.profile.birth,end:"",color:"#22d3ee",detail:"成长轨迹起点"}),I.forEach(C=>{C.name.indexOf("中建")>=0||C.name.indexOf("公司")>=0?(C.type="work",C.radius=10,C.short="工作"):C.name.indexOf("学院")>=0||C.name.indexOf("大学")>=0?(C.type="study",C.radius=9,C.short="母校"):(C.type="birth",C.radius=8,C.short="出生"),C.timeLabel=(C.start||"")+(C.end?" ~ "+C.end:"")}),I}),W=cn(()=>{const I={};A.value.forEach(ht=>{I[ht.type]=ht});const C=(ht,vt)=>{const At=I[vt]||{};return{short:At.short||(vt==="work"?"工作":"母校"),timeLabel:At.timeLabel||"",coord:ht.coord,color:At.color||(vt==="work"?"#f5b942":"#8b5cf6")}},k=[],it=(s.locations||[]).find(ht=>ht.type==="work"),ut=(s.locations||[]).find(ht=>ht.type==="study");return it&&k.push(C(it,"work")),ut&&k.push(C(ut,"study")),or(s.projects).forEach(ht=>{k.push({short:ht.city,timeLabel:ht.count+" 个项目",coord:ht.coord,color:"#22d3ee",city:ht.city})}),k}),G=ue(null),nt=ue("auto"),N=ue(!0);function X(I){G.value=I}function Y(){G.value=null}function z(I){const C=I&&I.projects?I:or(s.projects).find(it=>it.city===(I&&I.city));if(!C)return;const k=C.done?(C.received/C.done*100).toFixed(1)+"%":"—";X({title:"📍 "+C.city+" · 项目明细",meta:C.count+" 个项目 · 合同额 "+di(C.contract),rows:[["合同总额",di(C.contract)],["累计完成（含税）",di(C.done)],["累计已收款（含税）",di(C.received)],["回款率",k]],cards:C.list.map(it=>({name:it.name,rows:[["合同额",di(it.contract)],["累计完成（含税）",di(it.done)],["累计已收款（含税）",di(it.received)],...it.status?[["状态",it.status]]:[],...it.note?[["备注",it.note]]:[]]}))})}function B(I){if(I)if(w.value&&w.value.focusOn(I.value[0],I.value[1],I.type==="project"?62:56),I.type==="project")z(I);else{const C=(s.locations||[]).find(k=>k.name===I.name);X({title:"📍 "+I.name,meta:C?C.type==="work"?"现居 · 工作地":"母校 · 求学":"",rows:C&&C.note?[["说明",C.note]]:[]})}}function V(I){if(!I)return;const C=(s.experience||[]).find(k=>k.company&&I.name&&I.name.indexOf(k.company.split("公司")[0])>=0);X({title:"🛰 "+I.name,meta:(I.start||"")+" ~ "+(I.end||""),rows:I.detail?[["经历",I.detail]]:[],cards:C?[{name:C.title,rows:[["公司",C.company],["时间",C.date],...(C.points||[]).map(k=>["·",k])]}]:[]})}function at(I){if(!I||!I.coord||R.value&&R.value.drillToCoord(I.coord))return;if(I.city){z({city:I.city});return}const C=(s.locations||[]).find(k=>k.coord[0]===I.coord[0]&&k.coord[1]===I.coord[1]);X({title:"🪐 "+(I.short||"地点"),meta:(I.timeLabel||"")+(C?C.type==="work"?" · 现居 · 工作地":" · 母校 · 求学":""),rows:C&&C.note?[["说明",C.note]]:[]})}function rt(I){X({title:I.title,meta:I.type+" · "+I.date+(I.link?" · 链接："+I.link:""),rows:(I.tags||[]).map(C=>["标签",C]),text:I.desc})}function ft(I){X({title:I.title,meta:I.category+" · "+I.date,rows:(I.tags||[]).map(C=>["标签",C]),text:I.summary})}function K(I){if(l.value==="china")return R.value&&R.value.drillToCoord(I.coord)||R.value&&R.value.focusCoord(I.coord),void 0;mt("earth"),setTimeout(()=>{w.value&&w.value.focusOn(I.coord[0],I.coord[1],56)},60)}function ct(I){if(l.value==="china")return R.value&&R.value.drillToCoord(I.coord)||R.value&&R.value.focusCoord(I.coord),void 0;mt("earth"),setTimeout(()=>{w.value&&w.value.focusOn(I.coord[0],I.coord[1],62)},60),z(I)}function mt(I){if(I==="china"){_t();return}if(I==="threebody"){m=!1,l.value="threebody";return}Pt()}function _t(){if(l.value!=="china"){if(l.value!=="earth"){u.value=!0,l.value="china";return}if(!f.value){u.value=!0,l.value="china";return}b(),m=!0,u.value=!0,g.value=!0,_=!1,w.value&&w.value.focusChina(()=>{_=!0,Rt()}),Rt()}}function Et(){p.value=!0,Rt()}function Rt(){if(l.value!=="china"){if(!m){g.value=!1;return}if(l.value!=="earth"){g.value=!1;return}!p.value||!_||(l.value="china",g.value=!1,d.push(setTimeout(()=>{w.value&&w.value.setPaused(!0)},850)))}}function Pt(){if(l.value!=="earth"){if(l.value==="threebody"){l.value="earth";return}if(!f.value){u.value=!0,l.value="china";return}b(),m=!1,w.value&&w.value.setPaused(!1),l.value="earth",d.push(setTimeout(()=>{l.value==="earth"&&w.value&&w.value.resetView()},750))}}function bt(){nt.value=nt.value==="auto"?"day":nt.value==="day"?"night":"auto",w.value&&w.value.setDayNightMode(nt.value)}function Vt(){N.value=!N.value,w.value&&w.value.setAutoRotate(N.value)}function y(){l.value==="earth"?w.value&&w.value.resetView():R.value&&R.value.resetView()}function O(){L.value&&L.value.start()}function H(){L.value&&L.value.pause()}function $(){L.value&&L.value.reset()}function j(I){L.value&&L.value.setSpeed(I)}function et(I){L.value&&L.value.setPreset(I)}function st(){L.value&&L.value.kick()}function M(){window.location.href=nT}function x(){c.value=!c.value}function D(){f.value=!0}return(I,C)=>(Bt(),kt(de,null,[ot("div",iT,[ot("div",{class:pn(["screen",{"is-show":a.value}]),style:Mr({transform:`scale(${Fe(r)})`})},[C[3]||(C[3]=ot("div",{class:"bg bg-vignette"},null,-1)),ot("div",sT,[ot("div",{class:"earth-wrap",style:Mr({display:l.value==="threebody"?"none":"block",opacity:v.value,pointerEvents:l.value==="earth"?"auto":"none"})},[pe(zb,{ref_key:"globeRef",ref:w,points:Q.value,"fly-lines":S.value,timeline:A.value,onPointClick:B,onTimelineClick:V,onLongPress:M,onChinaClick:_t,onInteractiveHover:C[0]||(C[0]=k=>Fe(o).setHover(k)),onPressProgress:C[1]||(C[1]=k=>Fe(o).setProgress(k)),onReady:D},null,8,["points","fly-lines","timeline"])],4),Pa(ot("div",{class:pn(["china-wrap",E.value])},[u.value?(Bt(),pr(Fe(t),{key:0,ref_key:"mapRef",ref:R,active:l.value==="china",markers:W.value,onReady:Et,onMarkerClick:at},null,8,["active","markers"])):$e("",!0)],2),[[Oa,u.value]]),Pa(ot("div",rT,"🛰 正在进入中国地图…",512),[[Oa,g.value&&l.value==="earth"]]),Pa(ot("div",oT,[h.value?(Bt(),pr(Fe(e),{key:0,ref_key:"threeBodyRef",ref:L,active:l.value==="threebody"},null,8,["active"])):$e("",!0)],512),[[Oa,l.value==="threebody"]])]),pe(u_),pe(U_,{"view-mode":l.value,"day-night-mode":nt.value,rotating:N.value,onSetView:mt,onCycleDaynight:bt,onToggleRotate:Vt,onReset:y,onTbStart:O,onTbPause:H,onTbReset:$,onTbSpeed:j,onTbPreset:et,onTbKick:st,onArchive:M,onToggleCharts:x},null,8,["view-mode","day-night-mode","rotating"]),pe(M0,{onSelectPortfolio:rt,onSelectBlog:ft,onSelectLocation:K,onSelectCity:ct,onSelectDay:X}),c.value?(Bt(),pr(Fe(i),{key:0,visible:c.value,onClose:C[2]||(C[2]=k=>c.value=!1)},null,8,["visible"])):$e("",!0),pe(Qb,{content:G.value,onClose:Y},null,8,["content"])],6)]),C[4]||(C[4]=od('<div id="cursorDot" aria-hidden="true" data-v-318c00ec></div><div id="cursorRing" aria-hidden="true" data-v-318c00ec></div><div id="cursorProgress" aria-hidden="true" data-v-318c00ec><svg viewBox="0 0 40 40" data-v-318c00ec><circle cx="20" cy="20" r="18" fill="none" stroke="rgba(34,211,238,.22)" stroke-width="3" data-v-318c00ec></circle><circle class="cp-fill" cx="20" cy="20" r="18" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linecap="round" stroke-dasharray="113.1" stroke-dashoffset="113.1" transform="rotate(-90 20 20)" data-v-318c00ec></circle></svg></div>',3))],64))}},lT=es(aT,[["__scopeId","data-v-318c00ec"]]);window.addEventListener("error",n=>console.error("GLOBAL ERROR:",n.message,n.filename+":"+n.lineno));window.addEventListener("unhandledrejection",n=>console.error("UNHANDLED REJECTION:",String(n.reason)));Bg(lT).mount("#app");export{WE as $,Cb as A,Vi as B,Po as C,ii as D,qt as E,de as F,Ei as G,Fh as H,tp as I,xe as J,bn as K,ws as L,he as M,Ns as N,Ae as O,fn as P,yr as Q,Fl as R,Oe as S,Xh as T,sb as U,U as V,Vd as W,Hh as X,Se as Y,Te as Z,$d as _,yt as a,Wd as a0,es as a1,pr as a2,pe as a3,ri as a4,Jt as a5,Vl as a6,_l as a7,uT as a8,Pb as a9,Gr as aa,Kp as ab,Pa as ac,Oa as ad,cT as b,Lb as c,am as d,Vs as e,Bt as f,kt as g,ot as h,pn as i,ue as j,kE as k,Ib as l,Rb as m,Mr as n,ts as o,Nv as p,Ne as q,En as r,vc as s,gc as t,Fe as u,Ln as v,ji as w,ep as x,ar as y,XE as z};
