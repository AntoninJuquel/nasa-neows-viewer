import{r as a,q as Ne,j as I,e as Oe,t as Ae}from"./index-mSrEaNcz.js";import{S as Te,u as Z}from"./utils-CuJ5-xeQ.js";function z(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}var $=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},Me=Ne.useId||(()=>{}),xe=0;function Qt(e){const[t,n]=a.useState(Me());return $(()=>{e||n(r=>r??String(xe++))},[e]),e||(t?`radix-${t}`:"")}function O(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Jt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=ke({defaultProp:t,onChange:n}),c=e!==void 0,l=c?e:r,i=O(n),p=a.useCallback(s=>{if(c){const f=typeof s=="function"?s(e):s;f!==e&&i(f)}else o(s)},[c,e,o,i]);return[l,p]}function ke({defaultProp:e,onChange:t}){const n=a.useState(e),[r]=n,o=a.useRef(r),c=O(t);return a.useEffect(()=>{o.current!==r&&(c(r),o.current=r)},[r,o,c]),n}var Ie=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],V=Ie.reduce((e,t)=>{const n=a.forwardRef((r,o)=>{const{asChild:c,...l}=r,i=c?Te:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),I.jsx(i,{...l,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function De(e,t){e&&Oe.flushSync(()=>e.dispatchEvent(t))}function Fe(e,t=globalThis==null?void 0:globalThis.document){const n=O(e);a.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var We="DismissableLayer",ne="dismissableLayer.update",Be="dismissableLayer.pointerDownOutside",Ue="dismissableLayer.focusOutside",oe,pe=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),_e=a.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:c,onInteractOutside:l,onDismiss:i,...p}=e,s=a.useContext(pe),[d,f]=a.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=a.useState({}),S=Z(t,y=>f(y)),u=Array.from(s.layers),[v]=[...s.layersWithOutsidePointerEventsDisabled].slice(-1),g=u.indexOf(v),C=d?u.indexOf(d):-1,E=s.layersWithOutsidePointerEventsDisabled.size>0,b=C>=g,w=$e(y=>{const P=y.target,k=[...s.branches].some(Y=>Y.contains(P));!b||k||(o==null||o(y),l==null||l(y),y.defaultPrevented||i==null||i())},h),R=Ze(y=>{const P=y.target;[...s.branches].some(Y=>Y.contains(P))||(c==null||c(y),l==null||l(y),y.defaultPrevented||i==null||i())},h);return Fe(y=>{C===s.layers.size-1&&(r==null||r(y),!y.defaultPrevented&&i&&(y.preventDefault(),i()))},h),a.useEffect(()=>{if(d)return n&&(s.layersWithOutsidePointerEventsDisabled.size===0&&(oe=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),s.layersWithOutsidePointerEventsDisabled.add(d)),s.layers.add(d),ae(),()=>{n&&s.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=oe)}},[d,h,n,s]),a.useEffect(()=>()=>{d&&(s.layers.delete(d),s.layersWithOutsidePointerEventsDisabled.delete(d),ae())},[d,s]),a.useEffect(()=>{const y=()=>m({});return document.addEventListener(ne,y),()=>document.removeEventListener(ne,y)},[]),I.jsx(V.div,{...p,ref:S,style:{pointerEvents:E?b?"auto":"none":void 0,...e.style},onFocusCapture:z(e.onFocusCapture,R.onFocusCapture),onBlurCapture:z(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:z(e.onPointerDownCapture,w.onPointerDownCapture)})});_e.displayName=We;var je="DismissableLayerBranch",Ke=a.forwardRef((e,t)=>{const n=a.useContext(pe),r=a.useRef(null),o=Z(t,r);return a.useEffect(()=>{const c=r.current;if(c)return n.branches.add(c),()=>{n.branches.delete(c)}},[n.branches]),I.jsx(V.div,{...e,ref:o})});Ke.displayName=je;function $e(e,t=globalThis==null?void 0:globalThis.document){const n=O(e),r=a.useRef(!1),o=a.useRef(()=>{});return a.useEffect(()=>{const c=i=>{if(i.target&&!r.current){let p=function(){ge(Be,n,s,{discrete:!0})};const s={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=p,t.addEventListener("click",o.current,{once:!0})):p()}else t.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",c),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Ze(e,t=globalThis==null?void 0:globalThis.document){const n=O(e),r=a.useRef(!1);return a.useEffect(()=>{const o=c=>{c.target&&!r.current&&ge(Ue,n,{originalEvent:c},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ae(){const e=new CustomEvent(ne);document.dispatchEvent(e)}function ge(e,t,n,{discrete:r}){const o=n.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?De(o,c):o.dispatchEvent(c)}var H="focusScope.autoFocusOnMount",G="focusScope.autoFocusOnUnmount",ie={bubbles:!1,cancelable:!0},Ve="FocusScope",Xe=a.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:c,...l}=e,[i,p]=a.useState(null),s=O(o),d=O(c),f=a.useRef(null),h=Z(t,u=>p(u)),m=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let u=function(E){if(m.paused||!i)return;const b=E.target;i.contains(b)?f.current=b:N(f.current,{select:!0})},v=function(E){if(m.paused||!i)return;const b=E.relatedTarget;b!==null&&(i.contains(b)||N(f.current,{select:!0}))},g=function(E){if(document.activeElement===document.body)for(const w of E)w.removedNodes.length>0&&N(i)};document.addEventListener("focusin",u),document.addEventListener("focusout",v);const C=new MutationObserver(g);return i&&C.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",v),C.disconnect()}}},[r,i,m.paused]),a.useEffect(()=>{if(i){ue.add(m);const u=document.activeElement;if(!i.contains(u)){const g=new CustomEvent(H,ie);i.addEventListener(H,s),i.dispatchEvent(g),g.defaultPrevented||(Ye(Qe(ye(i)),{select:!0}),document.activeElement===u&&N(i))}return()=>{i.removeEventListener(H,s),setTimeout(()=>{const g=new CustomEvent(G,ie);i.addEventListener(G,d),i.dispatchEvent(g),g.defaultPrevented||N(u??document.body,{select:!0}),i.removeEventListener(G,d),ue.remove(m)},0)}}},[i,s,d,m]);const S=a.useCallback(u=>{if(!n&&!r||m.paused)return;const v=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,g=document.activeElement;if(v&&g){const C=u.currentTarget,[E,b]=ze(C);E&&b?!u.shiftKey&&g===b?(u.preventDefault(),n&&N(E,{select:!0})):u.shiftKey&&g===E&&(u.preventDefault(),n&&N(b,{select:!0})):g===C&&u.preventDefault()}},[n,r,m.paused]);return I.jsx(V.div,{tabIndex:-1,...l,ref:h,onKeyDown:S})});Xe.displayName=Ve;function Ye(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(N(r,{select:t}),document.activeElement!==n)return}function ze(e){const t=ye(e),n=ce(t,e),r=ce(t.reverse(),e);return[n,r]}function ye(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ce(e,t){for(const n of e)if(!He(n,{upTo:t}))return n}function He(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ge(e){return e instanceof HTMLInputElement&&"select"in e}function N(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ge(e)&&t&&e.select()}}var ue=qe();function qe(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=se(e,t),e.unshift(t)},remove(t){var n;e=se(e,t),(n=e[0])==null||n.resume()}}}function se(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Qe(e){return e.filter(t=>t.tagName!=="A")}var Je="Portal",et=a.forwardRef((e,t)=>{var i;const{container:n,...r}=e,[o,c]=a.useState(!1);$(()=>c(!0),[]);const l=n||o&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return l?Ae.createPortal(I.jsx(V.div,{...r,ref:t}),l):null});et.displayName=Je;function tt(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}var nt=e=>{const{present:t,children:n}=e,r=rt(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),c=Z(r.ref,ot(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:c}):null};nt.displayName="Presence";function rt(e){const[t,n]=a.useState(),r=a.useRef({}),o=a.useRef(e),c=a.useRef("none"),l=e?"mounted":"unmounted",[i,p]=tt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const s=F(r.current);c.current=i==="mounted"?s:"none"},[i]),$(()=>{const s=r.current,d=o.current;if(d!==e){const h=c.current,m=F(s);e?p("MOUNT"):m==="none"||(s==null?void 0:s.display)==="none"?p("UNMOUNT"):p(d&&h!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,p]),$(()=>{if(t){let s;const d=t.ownerDocument.defaultView??window,f=m=>{const u=F(r.current).includes(m.animationName);if(m.target===t&&u&&(p("ANIMATION_END"),!o.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",s=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},h=m=>{m.target===t&&(c.current=F(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(s),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:a.useCallback(s=>{s&&(r.current=getComputedStyle(s)),n(s)},[])}}function F(e){return(e==null?void 0:e.animationName)||"none"}function ot(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var q=0;function en(){a.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??le()),document.body.insertAdjacentElement("beforeend",e[1]??le()),q++,()=>{q===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),q--}},[])}function le(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var L=function(){return L=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},L.apply(this,arguments)};function Ee(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function at(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,c;r<o;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var j="right-scroll-bar-position",K="width-before-scroll-bar",it="with-scroll-bars-hidden",ct="--removed-body-scroll-bar-size";function Q(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ut(e,t){var n=a.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var st=typeof window<"u"?a.useLayoutEffect:a.useEffect,de=new WeakMap;function lt(e,t){var n=ut(null,function(r){return e.forEach(function(o){return Q(o,r)})});return st(function(){var r=de.get(n);if(r){var o=new Set(r),c=new Set(e),l=n.current;o.forEach(function(i){c.has(i)||Q(i,null)}),c.forEach(function(i){o.has(i)||Q(i,l)})}de.set(n,e)},[e]),n}function dt(e){return e}function ft(e,t){t===void 0&&(t=dt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var l=t(c,r);return n.push(l),function(){n=n.filter(function(i){return i!==l})}},assignSyncMedium:function(c){for(r=!0;n.length;){var l=n;n=[],l.forEach(c)}n={push:function(i){return c(i)},filter:function(){return n}}},assignMedium:function(c){r=!0;var l=[];if(n.length){var i=n;n=[],i.forEach(c),l=n}var p=function(){var d=l;l=[],d.forEach(c)},s=function(){return Promise.resolve().then(p)};s(),n={push:function(d){l.push(d),s()},filter:function(d){return l=l.filter(d),n}}}};return o}function vt(e){e===void 0&&(e={});var t=ft(null);return t.options=L({async:!0,ssr:!1},e),t}var be=function(e){var t=e.sideCar,n=Ee(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return a.createElement(r,L({},n))};be.isSideCarExport=!0;function ht(e,t){return e.useMedium(t),be}var we=vt(),J=function(){},X=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:J,onWheelCapture:J,onTouchMoveCapture:J}),o=r[0],c=r[1],l=e.forwardProps,i=e.children,p=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,h=e.sideCar,m=e.noIsolation,S=e.inert,u=e.allowPinchZoom,v=e.as,g=v===void 0?"div":v,C=e.gapMode,E=Ee(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=h,w=lt([n,t]),R=L(L({},E),o);return a.createElement(a.Fragment,null,d&&a.createElement(b,{sideCar:we,removeScrollBar:s,shards:f,noIsolation:m,inert:S,setCallbacks:c,allowPinchZoom:!!u,lockRef:n,gapMode:C}),l?a.cloneElement(a.Children.only(i),L(L({},R),{ref:w})):a.createElement(g,L({},R,{className:p,ref:w}),i))});X.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};X.classNames={fullWidth:K,zeroRight:j};var mt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function pt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=mt();return t&&e.setAttribute("nonce",t),e}function gt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function yt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Et=function(){var e=0,t=null;return{add:function(n){e==0&&(t=pt())&&(gt(t,n),yt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},bt=function(){var e=Et();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ce=function(){var e=bt(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},wt={left:0,top:0,right:0,gap:0},ee=function(e){return parseInt(e||"",10)||0},Ct=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ee(n),ee(r),ee(o)]},St=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return wt;var t=Ct(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Lt=Ce(),x="data-scroll-locked",Rt=function(e,t,n,r){var o=e.left,c=e.top,l=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(it,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(x,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(j,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(K,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(j," .").concat(j,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(K," .").concat(K,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(x,`] {
    `).concat(ct,": ").concat(i,`px;
  }
`)},fe=function(){var e=parseInt(document.body.getAttribute(x)||"0",10);return isFinite(e)?e:0},Pt=function(){a.useEffect(function(){return document.body.setAttribute(x,(fe()+1).toString()),function(){var e=fe()-1;e<=0?document.body.removeAttribute(x):document.body.setAttribute(x,e.toString())}},[])},Nt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Pt();var c=a.useMemo(function(){return St(o)},[o]);return a.createElement(Lt,{styles:Rt(c,!t,o,n?"":"!important")})},re=!1;if(typeof window<"u")try{var W=Object.defineProperty({},"passive",{get:function(){return re=!0,!0}});window.addEventListener("test",W,W),window.removeEventListener("test",W,W)}catch{re=!1}var A=re?{passive:!1}:!1,Ot=function(e){return e.tagName==="TEXTAREA"},Se=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ot(e)&&n[t]==="visible")},At=function(e){return Se(e,"overflowY")},Tt=function(e){return Se(e,"overflowX")},ve=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Le(e,r);if(o){var c=Re(e,r),l=c[1],i=c[2];if(l>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Mt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},xt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Le=function(e,t){return e==="v"?At(t):Tt(t)},Re=function(e,t){return e==="v"?Mt(t):xt(t)},kt=function(e,t){return e==="h"&&t==="rtl"?-1:1},It=function(e,t,n,r,o){var c=kt(e,window.getComputedStyle(t).direction),l=c*r,i=n.target,p=t.contains(i),s=!1,d=l>0,f=0,h=0;do{var m=Re(e,i),S=m[0],u=m[1],v=m[2],g=u-v-c*S;(S||g)&&Le(e,i)&&(f+=g,h+=S),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!p&&i!==document.body||p&&(t.contains(i)||t===i));return(d&&(Math.abs(f)<1||!o)||!d&&(Math.abs(h)<1||!o))&&(s=!0),s},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},he=function(e){return[e.deltaX,e.deltaY]},me=function(e){return e&&"current"in e?e.current:e},Dt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ft=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Wt=0,T=[];function Bt(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(Wt++)[0],c=a.useState(Ce)[0],l=a.useRef(e);a.useEffect(function(){l.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var u=at([e.lockRef.current],(e.shards||[]).map(me),!0).filter(Boolean);return u.forEach(function(v){return v.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),u.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=a.useCallback(function(u,v){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!l.current.allowPinchZoom;var g=B(u),C=n.current,E="deltaX"in u?u.deltaX:C[0]-g[0],b="deltaY"in u?u.deltaY:C[1]-g[1],w,R=u.target,y=Math.abs(E)>Math.abs(b)?"h":"v";if("touches"in u&&y==="h"&&R.type==="range")return!1;var P=ve(y,R);if(!P)return!0;if(P?w=y:(w=y==="v"?"h":"v",P=ve(y,R)),!P)return!1;if(!r.current&&"changedTouches"in u&&(E||b)&&(r.current=w),!w)return!0;var k=r.current||w;return It(k,v,u,k==="h"?E:b,!0)},[]),p=a.useCallback(function(u){var v=u;if(!(!T.length||T[T.length-1]!==c)){var g="deltaY"in v?he(v):B(v),C=t.current.filter(function(w){return w.name===v.type&&(w.target===v.target||v.target===w.shadowParent)&&Dt(w.delta,g)})[0];if(C&&C.should){v.cancelable&&v.preventDefault();return}if(!C){var E=(l.current.shards||[]).map(me).filter(Boolean).filter(function(w){return w.contains(v.target)}),b=E.length>0?i(v,E[0]):!l.current.noIsolation;b&&v.cancelable&&v.preventDefault()}}},[]),s=a.useCallback(function(u,v,g,C){var E={name:u,delta:v,target:g,should:C,shadowParent:Ut(g)};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(b){return b!==E})},1)},[]),d=a.useCallback(function(u){n.current=B(u),r.current=void 0},[]),f=a.useCallback(function(u){s(u.type,he(u),u.target,i(u,e.lockRef.current))},[]),h=a.useCallback(function(u){s(u.type,B(u),u.target,i(u,e.lockRef.current))},[]);a.useEffect(function(){return T.push(c),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",p,A),document.addEventListener("touchmove",p,A),document.addEventListener("touchstart",d,A),function(){T=T.filter(function(u){return u!==c}),document.removeEventListener("wheel",p,A),document.removeEventListener("touchmove",p,A),document.removeEventListener("touchstart",d,A)}},[]);var m=e.removeScrollBar,S=e.inert;return a.createElement(a.Fragment,null,S?a.createElement(c,{styles:Ft(o)}):null,m?a.createElement(Nt,{gapMode:e.gapMode}):null)}function Ut(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const _t=ht(we,Bt);var jt=a.forwardRef(function(e,t){return a.createElement(X,L({},e,{ref:t,sideCar:_t}))});jt.classNames=X.classNames;var Kt=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},M=new WeakMap,U=new WeakMap,_={},te=0,Pe=function(e){return e&&(e.host||Pe(e.parentNode))},$t=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Pe(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Zt=function(e,t,n,r){var o=$t(t,Array.isArray(e)?e:[e]);_[n]||(_[n]=new WeakMap);var c=_[n],l=[],i=new Set,p=new Set(o),s=function(f){!f||i.has(f)||(i.add(f),s(f.parentNode))};o.forEach(s);var d=function(f){!f||p.has(f)||Array.prototype.forEach.call(f.children,function(h){if(i.has(h))d(h);else try{var m=h.getAttribute(r),S=m!==null&&m!=="false",u=(M.get(h)||0)+1,v=(c.get(h)||0)+1;M.set(h,u),c.set(h,v),l.push(h),u===1&&S&&U.set(h,!0),v===1&&h.setAttribute(n,"true"),S||h.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",h,g)}})};return d(t),i.clear(),te++,function(){l.forEach(function(f){var h=M.get(f)-1,m=c.get(f)-1;M.set(f,h),c.set(f,m),h||(U.has(f)||f.removeAttribute(r),U.delete(f)),m||f.removeAttribute(n)}),te--,te||(M=new WeakMap,M=new WeakMap,U=new WeakMap,_={})}},tn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Kt(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Zt(r,o,n,"aria-hidden")):function(){return null}};function D(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,c;for(c=0;c<r.length;c++)o=r[c],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Vt=["color"],nn=a.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=D(e,Vt);return a.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),a.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Xt=["color"],rn=a.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=D(e,Xt);return a.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),a.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Yt=["color"],on=a.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=D(e,Yt);return a.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),a.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),zt=["color"],an=a.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=D(e,zt);return a.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),a.createElement("path",{d:"M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Ht=["color"],cn=a.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=D(e,Ht);return a.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),a.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});export{cn as C,_e as D,Xe as F,V as P,jt as R,nt as a,et as b,z as c,Jt as d,Qt as e,O as f,$ as g,tn as h,nn as i,an as j,on as k,rn as l,en as u};
