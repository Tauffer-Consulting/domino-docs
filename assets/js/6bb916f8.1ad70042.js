"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[6400],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),d=i,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return o?n.createElement(g,a(a({ref:t},u),{},{components:o})):n.createElement(g,a({ref:t},u))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5576:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));o(1954);const r={slug:"workflow-example-podcast-digest",title:"Build your own podcast digest service with Domino",description:"Domino helps you build creative workflows using data and AI. In this post, we will learn how to combine Youtube, Speech Recognition models and LLMs Pieces in Domino to create your own personalized podcast digest service.",authors:["luiz","vinicius"],tags:["domino","data","ai","workflows","airflow","llm","speech-recognition","youtube","email"],image:"./illustration.png"},a=void 0,l={permalink:"/blog/workflow-example-podcast-digest",source:"@site/blog/2023-12-13-workflow-example-podcast-digest/index.mdx",title:"Build your own podcast digest service with Domino",description:"Domino helps you build creative workflows using data and AI. In this post, we will learn how to combine Youtube, Speech Recognition models and LLMs Pieces in Domino to create your own personalized podcast digest service.",date:"2023-12-13T00:00:00.000Z",formattedDate:"December 13, 2023",tags:[{label:"domino",permalink:"/blog/tags/domino"},{label:"data",permalink:"/blog/tags/data"},{label:"ai",permalink:"/blog/tags/ai"},{label:"workflows",permalink:"/blog/tags/workflows"},{label:"airflow",permalink:"/blog/tags/airflow"},{label:"llm",permalink:"/blog/tags/llm"},{label:"speech-recognition",permalink:"/blog/tags/speech-recognition"},{label:"youtube",permalink:"/blog/tags/youtube"},{label:"email",permalink:"/blog/tags/email"}],readingTime:4.855,hasTruncateMarker:!0,authors:[{name:"Luiz Tauffer",title:"Creator and Maintainer of Domino",url:"https://github.com/luiztauffer",imageURL:"https://github.com/luiztauffer.png",key:"luiz"},{name:"Vin\xedcius Vaz",title:"Maintainer of Domino",url:"https://github.com/vinicvaz",imageURL:"https://github.com/vinicvaz.png",key:"vinicius"}],frontMatter:{slug:"workflow-example-podcast-digest",title:"Build your own podcast digest service with Domino",description:"Domino helps you build creative workflows using data and AI. In this post, we will learn how to combine Youtube, Speech Recognition models and LLMs Pieces in Domino to create your own personalized podcast digest service.",authors:["luiz","vinicius"],tags:["domino","data","ai","workflows","airflow","llm","speech-recognition","youtube","email"],image:"./illustration.png"},nextItem:{title:"Introducing Domino",permalink:"/blog/introducing-domino"}},s={image:o(1389).Z,authorsImageUrls:[void 0,void 0]},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Summary")),(0,i.kt)("p",{parentName:"admonition"},"Domino helps you build creative workflows using data and AI. In this post, we will learn how to combine Youtube, Speech Recognition models and LLMs Pieces in Domino to create your own personalized podcast digest service.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build a podcast digest workflow with Domino",src:o(1389).Z,width:"1344",height:"896"})))}m.isMDXComponent=!0},1389:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/illustration-db5c9a833b9e8c15e37cf471646f88aa.png"}}]);