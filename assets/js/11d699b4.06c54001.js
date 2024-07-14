"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[8219],{5680:(e,n,o)=>{o.d(n,{xA:()=>c,yg:()=>y});var t=o(6540);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(o),d=a,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return o?t.createElement(y,r(r({ref:n},c),{},{components:o})):t.createElement(y,r({ref:n},c))}));function y(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7180:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=o(8168),a=(o(6540),o(5680));const i={sidebar_position:1},r="Run locally with Docker Compose",l={unversionedId:"run_domino/run_locally_compose",id:"run_domino/run_locally_compose",title:"Run locally with Docker Compose",description:"You should never use this mode in production. It is intended for development and testing purposes only. To run Domino locally in an environment closer to a production environment, see Run locally with Kind",source:"@site/docs/run_domino/run_locally_compose.md",sourceDirName:"run_domino",slug:"/run_domino/run_locally_compose",permalink:"/run_domino/run_locally_compose",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Run Domino",permalink:"/category/run-domino"},next:{title:"Run locally with Kind",permalink:"/run_domino/run_locally_kind"}},s={},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"Run locally using Domino CLI",id:"run-locally-using-domino-cli",level:2}],c={toc:u},m="wrapper";function p(e){let{components:n,...o}=e;return(0,a.yg)(m,(0,t.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"run-locally-with-docker-compose"},"Run locally with Docker Compose"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"You should never use this mode in production. It is intended for development and testing purposes only. To run Domino locally in an environment closer to a production environment, see ",(0,a.yg)("a",{parentName:"p",href:"./run_locally_kind"},"Run locally with Kind"))),(0,a.yg)("p",null,"This method is the simplest way to test Domino locally, it uses Docker Compose to run all the necessary services:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Install the necessary dependencies"),(0,a.yg)("li",{parentName:"ol"},"Use Domino command line interface to run the platform locally")),(0,a.yg)("h2",{id:"dependencies"},"Dependencies"),(0,a.yg)("p",null,"In order to run Domino locally, you need to have these dependencies installed:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Python")," 3.9 or greater."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Docker engine")," 20.0 or greater. You can install it by following the instructions ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"here"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Docker Compose")," V2. You can install it by following the instructions ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"here"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Domino CLI"),".")),(0,a.yg)("p",null,"The Domino CLI can be installed via pip. We reccommend you install Domino in a separate Python environment."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"pip install domino-py[cli]\n")),(0,a.yg)("h2",{id:"run-locally-using-domino-cli"},"Run locally using Domino CLI"),(0,a.yg)("p",null,"You can use Domino command line interface to easily run the Domino platform locally.\nGo to a new, empty directory and run the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --github-token <your_github_token>\n")),(0,a.yg)("p",null,"Or run without a github token (some features will not be available)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose\n")),(0,a.yg)("p",null,"This is a convenience command that will:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create the necessary folder structure for Domino and Airflow processes"),(0,a.yg)("li",{parentName:"ul"},"Create a ",(0,a.yg)("inlineCode",{parentName:"li"},"docker-compose.yaml")," file"),(0,a.yg)("li",{parentName:"ul"},"Run the ",(0,a.yg)("inlineCode",{parentName:"li"},"docker compose up")," command")),(0,a.yg)("p",null,"This command might take up to a few minutes to execute, since it will download and run all the necessary docker images.\nIf everything worked as expected, after all processes started successfully you should be able to navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:3000")," to access the Domino frontend service."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The platform will not be fully functional if you do not provide a github token.\nTo run the platform with all features, you need to pass a platform level github token.\nYou can do this by passing the ",(0,a.yg)("inlineCode",{parentName:"p"},"--github-token")," flag to the command, like this:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --github-token <your_github_token>\n"))),(0,a.yg)("p",null,"You can generate a github token by following the instructions ",(0,a.yg)("a",{parentName:"p",href:"/settings/github_token"},"here"),"."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Domino automatically creates an admin user with the following credentials you can use to login:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Email"),": ",(0,a.yg)("a",{parentName:"li",href:"mailto:admin@email.com"},"admin@email.com")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Password"),": admin"))),(0,a.yg)("p",null,"If you want to run Domino with a different configuration you can use some CLI arguments to customize the behavior of the ",(0,a.yg)("inlineCode",{parentName:"p"},"run-compose")," command.\nTo see all the available options you can run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --help\n")),(0,a.yg)("p",null,"The output should be similar to this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"Options:\n  --d                  Run in detached mode.\n  --use-config-file    Use config file to run platform.\n  --dev                Run platform in dev mode.\n  --debug              Debug mode prints docker compose messages on terminal.\n  --stop               Stop and remove containers.\n  --github-token       Github token for access default pieces repositories.\n  --help               Show this message and exit.\n")),(0,a.yg)("p",null,"Also, if you want to run with compose using the configuration variables from an existing Domino project's ",(0,a.yg)("inlineCode",{parentName:"p"},"config-domino-local.toml")," file you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"--use-config-file")," flag.\nPlease ensure that the config-domino-local.toml file is located in the same directory you are running the command from."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"domino platform run-compose --use-config-file\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"When running with `--use-config-file``, all defined flags in CLI will be ignored and the values from the config file will be used instead.")),(0,a.yg)("p",null,"See more about the configuration file ",(0,a.yg)("a",{parentName:"p",href:"/run_domino/run_locally_kind#local-configuration-file"},"here"),"."))}p.isMDXComponent=!0}}]);