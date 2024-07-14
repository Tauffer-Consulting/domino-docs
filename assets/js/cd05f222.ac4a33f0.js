"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[7591],{5680:(e,n,o)=>{o.d(n,{xA:()=>c,yg:()=>y});var t=o(6540);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(o),u=r,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return o?t.createElement(y,i(i({ref:n},c),{},{components:o})):t.createElement(y,i({ref:n},c))}));function y(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8467:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=o(8168),r=(o(6540),o(5680));const a={sidebar_position:1},i="Development with compose",l={unversionedId:"development/run-dev",id:"development/run-dev",title:"Development with compose",description:"You should never use this mode in production. It is intended for development only. To run Domino locally in an environment closer to a production environment, see Run locally with Kind for test proposes see Run locally with compose",source:"@site/docs/development/run-dev.md",sourceDirName:"development",slug:"/development/run-dev",permalink:"/development/run-dev",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributing to Domino",permalink:"/development/"},next:{title:"Domino UI",permalink:"/development/frontend"}},p={},s=[{value:"Dependencies",id:"dependencies",level:2},{value:"Change code",id:"change-code",level:2}],c={toc:s},m="wrapper";function d(e){let{components:n,...o}=e;return(0,r.yg)(m,(0,t.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"development-with-compose"},"Development with compose"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"You should never use this mode in production. It is intended for development only. To run Domino locally in an environment closer to a production environment, see ",(0,r.yg)("a",{parentName:"p",href:"/run_domino/run_locally_kind"},"Run locally with Kind")," for test proposes see ",(0,r.yg)("a",{parentName:"p",href:"/run_domino/run_locally_compose"},"Run locally with compose")," ")),(0,r.yg)("p",null,"This method is the simplest way to test Domino locally, it uses Docker Compose to run all the necessary services:"),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to run Domino locally for development, you need to have these dependencies installed:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Docker engine")," 20.0 or greater. You can install it by following the instructions ",(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"here"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Docker Compose")," V2. You can install it by following the instructions ",(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"here"),".")),(0,r.yg)("p",null,"This command might take up to a few minutes to execute, since it will download and run all the necessary docker images.\nIf everything worked as expected, after all processes started successfully you should be able to navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost:3000")," to access the Domino frontend service."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose-dev.yaml up\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Domino automatically creates an admin user with the following credentials you can use to login:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Email"),": ",(0,r.yg)("a",{parentName:"li",href:"mailto:admin@email.com"},"admin@email.com")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Password"),": admin"))),(0,r.yg)("h2",{id:"change-code"},"Change code"),(0,r.yg)("p",null,"For now on, every modification you made in ",(0,r.yg)("inlineCode",{parentName:"p"},"frontend")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"rest")," folders will take effect immediately, but for each sub-project you may need some configurations on your development environment to use autocomplete and references."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/development/frontend"},"Frontend")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/development/rest"},"Rest"))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Domino package does not support hot reload in compose mode, but you can follow the ",(0,r.yg)("a",{parentName:"p",href:"/run_domino/run_locally_kind#local-deployment-for-development"},"Kubernetes guide")," to be able to test modifications there.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/development/domino-py"},"Domino-py"))))}d.isMDXComponent=!0}}]);