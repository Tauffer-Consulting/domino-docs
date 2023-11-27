"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[6663],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>f});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(o),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return o?t.createElement(f,i(i({ref:n},u),{},{components:o})):t.createElement(f,i({ref:n},u))}));function f(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3193:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(7462),a=(o(7294),o(3905));const r={sidebar_position:1},i="Run locally with Docker Compose",l={unversionedId:"run_domino/run_locally_compose",id:"run_domino/run_locally_compose",title:"Run locally with Docker Compose",description:"You should never use this mode in production. It is intended for development and testing purposes only. To run Domino locally in an environment closer to a production environment, see Run locally with Kind",source:"@site/docs/run_domino/run_locally_compose.md",sourceDirName:"run_domino",slug:"/run_domino/run_locally_compose",permalink:"/docs/run_domino/run_locally_compose",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Run Domino",permalink:"/docs/category/run-domino"},next:{title:"Run locally with Kind",permalink:"/docs/run_domino/run_locally_kind"}},s={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Run locally using Domino CLI",id:"run-locally-using-domino-cli",level:2}],u={toc:c},m="wrapper";function p(e){let{components:n,...o}=e;return(0,a.kt)(m,(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-locally-with-docker-compose"},"Run locally with Docker Compose"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You should never use this mode in production. It is intended for development and testing purposes only. To run Domino locally in an environment closer to a production environment, see ",(0,a.kt)("a",{parentName:"p",href:"./run_locally_kind"},"Run locally with Kind"))),(0,a.kt)("p",null,"This method is the simplest way to test Domino locally, it uses Docker Compose to run all the necessary services:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the necessary dependencies"),(0,a.kt)("li",{parentName:"ol"},"Use Domino command line interface to run the platform locally")),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"In order to run Domino locally, you need to have these dependencies installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Python")," 3.9 or greater."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker engine")," 20.0 or greater. You can install it by following the instructions ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Compose")," V2. You can install it by following the instructions ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Domino CLI"),".")),(0,a.kt)("p",null,"The Domino CLI can be installed via pip. We reccommend you install Domino in a separate Python environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install domino-py[cli]\n")),(0,a.kt)("h2",{id:"run-locally-using-domino-cli"},"Run locally using Domino CLI"),(0,a.kt)("p",null,"You can use Domino command line interface to easily run the Domino platform locally.\nGo to a new, empty directory and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --github-token <your_github_token>\n")),(0,a.kt)("p",null,"Or run without a github token (some features will not be available)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose\n")),(0,a.kt)("p",null,"This is a convenience command that will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create the necessary folder structure for Domino and Airflow processes"),(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," file"),(0,a.kt)("li",{parentName:"ul"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker compose up")," command")),(0,a.kt)("p",null,"This command might take up to a few minutes to execute, since it will download and run all the necessary docker images.\nIf everything worked as expected, after all processes started successfully you should be able to navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000")," to access the Domino frontend service."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platform will not be fully functional if you do not provide a github token.\nTo run the platform with all features, you need to pass a platform level github token.\nYou can do this by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--github-token")," flag to the command, like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --github-token <your_github_token>\n"))),(0,a.kt)("p",null,"You can generate a github token by following the instructions ",(0,a.kt)("a",{parentName:"p",href:"/docs/quickstart/advanced_concepts/github_token"},"here"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Domino automatically creates an admin user with the following credentials you can use to login:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Email"),": ",(0,a.kt)("a",{parentName:"li",href:"mailto:admin@email.com"},"admin@email.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password"),": admin"))),(0,a.kt)("p",null,"If you want to run Domino with a different configuration you can use some CLI arguments to customize the behavior of the ",(0,a.kt)("inlineCode",{parentName:"p"},"run-compose")," command.\nTo see all the available options you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --help\n")),(0,a.kt)("p",null,"The output should be similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Options:\n  --d                  Run in detached mode.\n  --use-config-file    Use config file to run platform.\n  --dev                Run platform in dev mode.\n  --debug              Debug mode prints docker compose messages on terminal.\n  --stop               Stop and remove containers.\n  --github-token       Github token for access default pieces repositories.\n  --help               Show this message and exit.\n")),(0,a.kt)("p",null,"Also, if you want to run with compose using the configuration variables from an existing Domino project's ",(0,a.kt)("inlineCode",{parentName:"p"},"config-domino-local.toml")," file you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--use-config-file")," flag.\nPlease ensure that the config-domino-local.toml file is located in the same directory you are running the command from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --use-config-file\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When running with `--use-config-file``, all defined flags in CLI will be ignored and the values from the config file will be used instead.")),(0,a.kt)("p",null,"See more about the configuration file ",(0,a.kt)("a",{parentName:"p",href:"/docs/run_domino/run_locally_kind#local-configuration-file"},"here"),"."))}p.isMDXComponent=!0}}]);