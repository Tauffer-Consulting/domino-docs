"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[520],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(o),u=r,f=p["".concat(c,".").concat(u)]||p[u]||l[u]||a;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2416:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:3},i="Domino Database",s={unversionedId:"domino_components/domino_components_database",id:"domino_components/domino_components_database",title:"Domino Database",description:"Domino database is a PostgreSQL database. It is used by the Domino API to store and retrieve information domino specific resources. These resources include:",source:"@site/docs/domino_components/domino_components_database.md",sourceDirName:"domino_components",slug:"/domino_components/domino_components_database",permalink:"/domino-docs/docs/domino_components/domino_components_database",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Domino REST API",permalink:"/domino-docs/docs/domino_components/domino_components_rest"},next:{title:"Domino Python package",permalink:"/domino-docs/docs/domino_components/domino_components_python_package"}},c={},m=[{value:"Database Schema",id:"database-schema",level:3}],d={toc:m},p="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"domino-database"},"Domino Database"),(0,r.kt)("p",null,"Domino database is a PostgreSQL database. It is used by the Domino API to store and retrieve information domino specific resources. These resources include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users"),(0,r.kt)("li",{parentName:"ul"},"Workspaces"),(0,r.kt)("li",{parentName:"ul"},"Piece Repositories"),(0,r.kt)("li",{parentName:"ul"},"Secrets"),(0,r.kt)("li",{parentName:"ul"},"Pieces"),(0,r.kt)("li",{parentName:"ul"},"Workflows")),(0,r.kt)("p",null,"Other information rather than Domino specific is stored in the Airflow database but you don't need to interact with it directly, our ",(0,r.kt)("strong",{parentName:"p"},"REST API")," will do it for you."),(0,r.kt)("h3",{id:"database-schema"},"Database Schema"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Domino Classes Diagram",src:o(9414).Z,width:"1590",height:"719"})))}l.isMDXComponent=!0},9414:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/domino-db-diagram-1d5872d88b4767f41ff472338d2393a0.png"}}]);