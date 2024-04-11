"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[308],{5680:(e,n,o)=>{o.d(n,{xA:()=>c,yg:()=>u});var t=o(6540);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(o),d=i,u=g["".concat(s,".").concat(d)]||g[d]||m[d]||a;return o?t.createElement(u,r(r({ref:n},c),{},{components:o})):t.createElement(u,r({ref:n},c))}));function u(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=o[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5190:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=o(8168),i=(o(6540),o(5680)),a=o(5066);const r={sidebar_position:1,description:"Domino is an open source workflow management platform, with an intuitive Graphical User Interface that facilitates creating, editing and monitoring any type of Workflow, from data processing to machine learning.",keywords:["domino","workflow","airflow","data","machine learning","ml","data science","data engineering","dataops","mlops","devops","kubernetes","k8s","helm","python","react","typescript","fastapi","gitops","docker","github","artifacthub","pypi","pip","kind","open source","oss","low code","no code","automation","versio control","collaboration","monitoring","orchestration","data pipeline"]},l="What is Domino?",s={unversionedId:"index",id:"index",title:"What is Domino?",description:"Domino is an open source workflow management platform, with an intuitive Graphical User Interface that facilitates creating, editing and monitoring any type of Workflow, from data processing to machine learning.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Domino is an open source workflow management platform, with an intuitive Graphical User Interface that facilitates creating, editing and monitoring any type of Workflow, from data processing to machine learning.",keywords:["domino","workflow","airflow","data","machine learning","ml","data science","data engineering","dataops","mlops","devops","kubernetes","k8s","helm","python","react","typescript","fastapi","gitops","docker","github","artifacthub","pypi","pip","kind","open source","oss","low code","no code","automation","versio control","collaboration","monitoring","orchestration","data pipeline"]},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/quickstart/"}},p={},c=[{value:"Data workflows at your fingertips",id:"data-workflows-at-your-fingertips",level:3},{value:"Domino vs Apache Airflow",id:"domino-vs-apache-airflow",level:3},{value:"Development",id:"development",level:3},{value:"Resources",id:"resources",level:3}],g={toc:c},m="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(m,(0,t.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"what-is-domino"},"What is Domino?"),(0,i.yg)("p",null,"Domino is an open source platform for creating and monitoring advanced data workflows, with:"),(0,i.yg)("p",{style:{display:"flex",alignItems:"center",textDecoration:"none",fontSize:"16px",textDecoration:"none",margin:"0px 0px 10px 20px"}},(0,i.yg)(a.In,{icon:"carbon:screen-map",width:"30px",style:{marginRight:"10px"},mdxType:"Icon"}),(0,i.yg)("div",null,"an intuitive ",(0,i.yg)("a",{href:"/domino_components/domino_components_gui"},"Graphical User Interface")," that facilitates creating, editing and monitoring any type of workflow, from data processing to machine learning")),(0,i.yg)("p",{style:{display:"flex",alignItems:"center",textDecoration:"none",fontSize:"16px",textDecoration:"none",margin:"0px 0px 10px 20px"}},(0,i.yg)(a.In,{icon:"ph:package",width:"30px",style:{marginRight:"10px"},mdxType:"Icon"}),(0,i.yg)("div",null,"a standard way of writing and publishing functional ",(0,i.yg)("a",{href:"/pieces"},"Pieces"),", which follows good practices for data modeling, documentation and distribution")),(0,i.yg)("p",{style:{display:"flex",alignItems:"center",textDecoration:"none",fontSize:"16px",textDecoration:"none",margin:"0px 0px 10px 20px"}},(0,i.yg)(a.In,{icon:"ph:gear",width:"30px",style:{marginRight:"10px"},mdxType:"Icon"}),(0,i.yg)("div",null,"a ",(0,i.yg)("a",{href:"/domino_components/domino_components_rest"},"REST API")," that controls a running Apache Airflow instance, leveraging state-of-the-art workflow orchestration capabilities.")),(0,i.yg)("h3",{id:"data-workflows-at-your-fingertips"},"Data workflows at your fingertips"),(0,i.yg)("p",null,"Creating workflows in the GUI is as simple as dragging and dropping Pieces to the canvas and connecting them. The user can schedule the workflow to run periodically, at a specific date/time, or trigger it manually."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Domino create workflow",src:o(8363).A,width:"1918",height:"944"})),(0,i.yg)("p",null,"The monitoring page shows the status of each workflow task in real time, including the informative logs and visual results for each run."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Domino create workflow",src:o(8903).A,width:"1918",height:"944"})),(0,i.yg)("h3",{id:"domino-vs-apache-airflow"},"Domino vs Apache Airflow"),(0,i.yg)("p",null,"Every Domino workflow corresponds to an Apache Airflow DAG, and each Piece corresponds to an Airflow task. Domino controls an Airflow instance, which is responsible for executing, scheduling and monitoring the workflows (DAGs)."),(0,i.yg)("p",null,"You can think of Domino as Airflow with superpowers, where users can:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"create highly complex workflows with simple point-and-click and drag-and-drop operations, in an user-friendly GUI"),(0,i.yg)("li",{parentName:"ul"},"make use of Pieces developed by other people, share and reuse your own Pieces"),(0,i.yg)("li",{parentName:"ul"},"collaborate in groups to edit and monitor workflows"),(0,i.yg)("li",{parentName:"ul"},"experience a cleaner and more intuitive GUI for viewing workflows results, including logs and richer reports with images and tables")),(0,i.yg)("h3",{id:"development"},"Development"),(0,i.yg)("p",null,"The source code of the project is available ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Tauffer-Consulting/domino"},"here"),"."),(0,i.yg)("p",null,"Domino is a modular and open source software, which allows for contributions from a large spectrum of expertises, from DevOps to frontend developers:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Frontend is written in React / Typescript"),(0,i.yg)("li",{parentName:"ul"},"REST API written in Python with FastAPI"),(0,i.yg)("li",{parentName:"ul"},"Worflows management is performed by Apache Airflow"),(0,i.yg)("li",{parentName:"ul"},"GitOps approach to host and version Pieces and workflows"),(0,i.yg)("li",{parentName:"ul"},"Pieces data models are defined with Pydantic"),(0,i.yg)("li",{parentName:"ul"},"Pieces are built and distributed as Docker images, hosted in public repositories such as Github Container Registry"),(0,i.yg)("li",{parentName:"ul"},"Domino runs on Kubernetes, both in the cloud or locally (using Kind)"),(0,i.yg)("li",{parentName:"ul"},"Domino is distributed as a pip installable package and a Helm chart")),(0,i.yg)("h3",{id:"resources"},"Resources"),(0,i.yg)("p",null,"Here's a list of the main resources for Domino:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pypi.org/project/domino-py/"},"Python package")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/domino/domino"},"Helm chart")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-rest"},"REST API image")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-frontend"},"Frontend image")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-airflow-base"},"Airflow image with Domino extension")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-base-piece"},"Base Piece image"))))}d.isMDXComponent=!0},8903:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/run-workflow-be58f9f4c07ade2613938186b5970a63.gif"},8363:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/create-workflow-03af58bfb707eab2033c3340b5da70fd.gif"}}]);