"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[663],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>y});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return o?t.createElement(y,a(a({ref:n},u),{},{components:o})):t.createElement(y,a({ref:n},u))}));function y(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3193:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=o(7462),r=(o(7294),o(3905));const l={sidebar_position:1},a="Run locally with docker compose",i={unversionedId:"run_domino/run_locally_compose",id:"run_domino/run_locally_compose",title:"Run locally with docker compose",description:"You should never use this mode in production. It is intended for development and testing purposes only. To run Domino locally in an environment closer to a production environment, see Run locally with Kind",source:"@site/docs/run_domino/run_locally_compose.md",sourceDirName:"run_domino",slug:"/run_domino/run_locally_compose",permalink:"/domino-docs/docs/run_domino/run_locally_compose",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/run_domino/run_locally_compose.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Run Domino",permalink:"/domino-docs/docs/category/run-domino"},next:{title:"Run locally with Kind",permalink:"/domino-docs/docs/run_domino/run_locally_kind"}},c={},s=[{value:"Dependencies",id:"dependencies",level:2},{value:"Run locally using Domino CLI",id:"run-locally-using-domino-cli",level:2}],u={toc:s},m="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(m,(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-locally-with-docker-compose"},"Run locally with docker compose"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should never use this mode in production. It is intended for development and testing purposes only. To run Domino locally in an environment closer to a production environment, see ",(0,r.kt)("a",{parentName:"p",href:"./run_locally_kind"},"Run locally with Kind"))),(0,r.kt)("p",null,"This method is the simplest way to test Domino locally, it uses docker compose to run all the necessary services:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the necessary dependencies"),(0,r.kt)("li",{parentName:"ol"},"Use Domino command line interface to run the platform locally")),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to run Domino locally, you need to have these dependencies installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Python")," 3.8 or greater."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docker engine"),". You can install it by following the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docker compose"),". You can install it by following the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Domino")," Python package.")),(0,r.kt)("p",null,"The Domino Python package can be installed via pip. We reccommend you install Domino in a separate Python environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install domino-py\n")),(0,r.kt)("h2",{id:"run-locally-using-domino-cli"},"Run locally using Domino CLI"),(0,r.kt)("p",null,"You can use Domino command line interface to easily run the Domino platform locally.\nGo to a new, empty directory and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose\n")),(0,r.kt)("p",null,"This is a convenience command that will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the necessary folder structure for Domino and Airflow processes"),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," file"),(0,r.kt)("li",{parentName:"ul"},"Run the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker compose up")," command")),(0,r.kt)("p",null,"This command might take up to a few minutes to execute, since it will download and run all the necessary docker images.\nIf everything worked as expected, after all processes started successfully you should be able to navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000")," to access the Domino frontend service."),(0,r.kt)("p",null,"To run with compose using the configuration variables from an existing Domino project's  ",(0,r.kt)("inlineCode",{parentName:"p"},"config-domino-local.toml")," file you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-config-file")," flag.\nPlease ensure that the config-domino-local.toml file is located in the same directory you are running the command from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --use-config-file\n")))}p.isMDXComponent=!0}}]);