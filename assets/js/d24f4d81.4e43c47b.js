"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2,description:"Pieces Repositories Secrets",keywords:["domino","workflow","airflow","data","machine learning","ml","data science","data engineering","dataops","mlops","devops","kubernetes","k8s","helm","python","react","typescript","fastapi","gitops","docker","github","artifacthub","pypi","pip","kind","open source","oss","low code","no code","automation","versio control","collaboration","monitoring","orchestration","data pipeline","secrets"]},a="Secrets",s={unversionedId:"quickstart/advanced_concepts/secrets",id:"quickstart/advanced_concepts/secrets",title:"Secrets",description:"Pieces Repositories Secrets",source:"@site/docs/quickstart/advanced_concepts/secrets.md",sourceDirName:"quickstart/advanced_concepts",slug:"/quickstart/advanced_concepts/secrets",permalink:"/docs/quickstart/advanced_concepts/secrets",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Pieces Repositories Secrets",keywords:["domino","workflow","airflow","data","machine learning","ml","data science","data engineering","dataops","mlops","devops","kubernetes","k8s","helm","python","react","typescript","fastapi","gitops","docker","github","artifacthub","pypi","pip","kind","open source","oss","low code","no code","automation","versio control","collaboration","monitoring","orchestration","data pipeline","secrets"]},sidebar:"tutorialSidebar",previous:{title:"Authorizing Domino to access Github repositories",permalink:"/docs/quickstart/advanced_concepts/github_token"},next:{title:"Shared Storage",permalink:"/docs/quickstart/advanced_concepts/shared_storage"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"secrets"},"Secrets"),(0,n.kt)("p",null,"Frequently in your workflows you will need to use Pieces that require a secret variable. For example, you may need to use a Piece to fetch data from an API that requires a Bearer token. In these cases, you will need to set the secret variables to the Piece Repository the Piece belongs to. In Domino, the secrets with same name are shared between Pieces from the same repository, so you only need to set the secret once. Example: Two Pieces with ",(0,n.kt)("inlineCode",{parentName:"p"},"API_KEY")," secret means that both Pieces will use the same value for this variable."),(0,n.kt)("p",null,"To edit a Piece Repository secret, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to your Workspace configuration page."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit repository secrets")," icon on the desired repository. This will open the list of secrets for that repository."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit")," icon on the desired secret and fill the value you want."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save")," button.")),(0,n.kt)("p",null,"Done! Now all Pieces that need to use this secret will have access to the value you set."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Edit repository secrets",src:r(2172).Z,width:"1914",height:"990"})))}u.isMDXComponent=!0},2172:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/editing_secrets-19202ccfc5f9a2bff71a9fd661f242f4.gif"}}]);