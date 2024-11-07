import{j as a,r as N}from"./index-mSrEaNcz.js";import{c as y,S as p}from"./utils-CuJ5-xeQ.js";function b(t){var n,e,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=b(t[n]))&&(r&&(r+=" "),r+=e);else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function k(){for(var t,n,e=0,r="";e<arguments.length;)(t=arguments[e++])&&(n=b(t))&&(r&&(r+=" "),r+=n);return r}const x=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,g=k,V=(t,n)=>e=>{var r;if((n==null?void 0:n.variants)==null)return g(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:u,defaultVariants:o}=n,c=Object.keys(u).map(s=>{const i=e==null?void 0:e[s],d=o==null?void 0:o[s];if(i===null)return null;const l=x(i)||x(d);return u[s][l]}),m=e&&Object.entries(e).reduce((s,i)=>{let[d,l]=i;return l===void 0||(s[d]=l),s},{}),v=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((s,i)=>{let{class:d,className:l,...w}=i;return Object.entries(w).every(j=>{let[h,f]=j;return Array.isArray(f)?f.includes({...o,...m}[h]):{...o,...m}[h]===f})?[...s,d,l]:s},[]);return g(t,c,v,e==null?void 0:e.class,e==null?void 0:e.className)},C={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-16 w-16",xl:"h-24 w-24"},z={light:"text-white",primary:"text-slate-600"},A=({size:t="md",variant:n="primary",className:e=""})=>a.jsxs(a.Fragment,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:y("animate-spin",C[t],z[n],e),children:a.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),a.jsx("span",{className:"sr-only",children:"Loading"})]}),B=V("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}}),O=N.forwardRef(({className:t,variant:n,size:e,asChild:r=!1,children:u,isLoading:o,icon:c,...m},v)=>{const s=r?p:"button";return a.jsxs(s,{className:y(B({variant:n,size:e,className:t})),ref:v,...m,children:[o&&a.jsx(A,{size:"sm",className:"text-current"}),!o&&c&&a.jsx("span",{className:"mr-2",children:c}),a.jsx("span",{className:"mx-2",children:u})]})});O.displayName="Button";export{O as B,B as b,V as c};