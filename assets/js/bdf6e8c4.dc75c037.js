"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[9251],{5680:(e,o,n)=>{n.d(o,{xA:()=>d,yg:()=>m});var i=n(6540);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,i,t=function(e,o){if(null==e)return{};var n,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=i.createContext({}),c=function(e){var o=i.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},d=function(e){var o=c(e.components);return i.createElement(l.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return i.createElement(i.Fragment,{},o)}},g=i.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=t,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return n?i.createElement(m,r(r({ref:o},d),{},{components:n})):i.createElement(m,r({ref:o},d))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,r=new Array(a);r[0]=g;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[u]="string"==typeof e?e:t,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6948:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(8168),t=(n(6540),n(5680)),a=n(5066);const r={slug:"introducing-domino",title:"Introducing Domino",description:"Domino is a groundbreaking open-source platform dedicated to visually creating and managing data and AI workflows. With its intuitive drag-and-drop graphical interface, anyone can effortlessly construct complex workflows by piecing together cutting-edge modular operations, no coding required! Additionally, Domino gives developers the power to bundle their Python functions into self-containing, reusable, shareable modules, promoting a culture of collaboration, efficiency and reproducibility.",authors:["luiz","vinicius"],tags:["domino","data","ai","workflows","airflow"],image:"https://raw.githubusercontent.com/Tauffer-Consulting/domino-docs/main/blog/2023-12-01-introduction/domino_introduction.png"},s=void 0,l={permalink:"/blog/introducing-domino",source:"@site/blog/2023-12-01-introduction/index.mdx",title:"Introducing Domino",description:"Domino is a groundbreaking open-source platform dedicated to visually creating and managing data and AI workflows. With its intuitive drag-and-drop graphical interface, anyone can effortlessly construct complex workflows by piecing together cutting-edge modular operations, no coding required! Additionally, Domino gives developers the power to bundle their Python functions into self-containing, reusable, shareable modules, promoting a culture of collaboration, efficiency and reproducibility.",date:"2023-12-01T00:00:00.000Z",formattedDate:"December 1, 2023",tags:[{label:"domino",permalink:"/blog/tags/domino"},{label:"data",permalink:"/blog/tags/data"},{label:"ai",permalink:"/blog/tags/ai"},{label:"workflows",permalink:"/blog/tags/workflows"},{label:"airflow",permalink:"/blog/tags/airflow"}],readingTime:8.61,hasTruncateMarker:!0,authors:[{name:"Luiz Tauffer",title:"Creator and Maintainer of Domino",url:"https://github.com/luiztauffer",imageURL:"https://github.com/luiztauffer.png",key:"luiz"},{name:"Vin\xedcius Vaz",title:"Maintainer of Domino",url:"https://github.com/vinicvaz",imageURL:"https://github.com/vinicvaz.png",key:"vinicius"}],frontMatter:{slug:"introducing-domino",title:"Introducing Domino",description:"Domino is a groundbreaking open-source platform dedicated to visually creating and managing data and AI workflows. With its intuitive drag-and-drop graphical interface, anyone can effortlessly construct complex workflows by piecing together cutting-edge modular operations, no coding required! Additionally, Domino gives developers the power to bundle their Python functions into self-containing, reusable, shareable modules, promoting a culture of collaboration, efficiency and reproducibility.",authors:["luiz","vinicius"],tags:["domino","data","ai","workflows","airflow"],image:"https://raw.githubusercontent.com/Tauffer-Consulting/domino-docs/main/blog/2023-12-01-introduction/domino_introduction.png"},prevItem:{title:"Build your own podcast digest service with Domino",permalink:"/blog/workflow-example-podcast-digest"}},c={authorsImageUrls:[void 0,void 0]},d=[{value:"Introduction to Domino (for non-devs)",id:"introduction-to-domino-for-non-devs",level:2},{value:"Introduction to Domino (for devs)",id:"introduction-to-domino-for-devs",level:2},{value:"What does Domino do?",id:"what-does-domino-do",level:2},{value:"GUI-first creation of workflows",id:"gui-first-creation-of-workflows",level:3},{value:"Intuitive workflows supervision",id:"intuitive-workflows-supervision",level:3},{value:"Creation and distribution of plug-and-play modular Pieces",id:"creation-and-distribution-of-plug-and-play-modular-pieces",level:3},{value:"Who can benefit from Domino?",id:"who-can-benefit-from-domino",level:2},{value:"Why is Domino a Game-Changer?",id:"why-is-domino-a-game-changer",level:2}],u={toc:d},p="wrapper";function g(e){let{components:o,...r}=e;return(0,t.yg)(p,(0,i.A)({},u,r,{components:o,mdxType:"MDXLayout"}),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("mdxAdmonitionTitle",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"mdxAdmonitionTitle"},"TL-DR:")),(0,t.yg)("p",{parentName:"admonition"},"Domino is a groundbreaking open-source platform dedicated to visually creating and managing data and AI workflows. With its intuitive drag-and-drop graphical interface, anyone can effortlessly construct complex workflows by piecing together cutting-edge modular operations, no coding required! Additionally, Domino gives developers the power to bundle their Python functions into self-containing, reusable, shareable modules, promoting a culture of collaboration, efficiency and reproducibility.")),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Domino - build amazing ideas, piece by piece",src:n(2405).A,width:"1344",height:"896"})),(0,t.yg)("h2",{id:"introduction-to-domino-for-non-devs"},"Introduction to Domino (for non-devs)"),(0,t.yg)("p",null,"The world of data and artificial intelligence is continuously evolving at a rapid pace, which can be overwhelming to non-technical individuals to follow. Technologies such as containers and code repositories have certainly democratized these advancements, making them more accessible than ever. Yet, harnessing advanced algorithms from disparate sources to create tailor-made solutions for specific use cases still requires significant coding expertise. Domino comes to change that."),(0,t.yg)("p",null,"Domino brings an intuitive graphical interface, designed to simplify the process of building and managing complex data and AI workflows. It is as easy as playing with toy blocks! You can literally drag and drop 'Pieces', as we call them in Domino language, to construct intricate workflows, all without writing a single line of code. No more intimidation by complex coding environments or the need for a deep understanding of programming languages. Domino puts the power of data and AI into your hands, regardless of your technical background."),(0,t.yg)("p",null,"The modular nature of Pieces allows you to take advantage of complex data and AI operations that have been pre-packaged by experts. Imagine being able to harness the power of advanced algorithms, state-of-the-art machine learning models, or sophisticated data transformation processes, all readily available for you to plug into your workflows. The power of Python functions are now accessible to you in a visual, interactive, and intuitive way."),(0,t.yg)("p",null,"And it doesn't stop there. Domino's GUI-first approach doesn't just simplify the creation of workflows. It also provides an intuitive supervision experience, allowing you to visually monitor and manage your workflows in real-time. It's like having a dashboard for your data and AI operations, giving you complete visibility and control over your workflows."),(0,t.yg)("p",null,"If you are a non-technical individual working in a domain that could benefit from leveraging data and AI, Domino is for you. It breaks down the barriers to entry into the world of data and AI, allowing you to implement your ideas effectively and efficiently. With Domino, you don't just consume technology - you create with it."),(0,t.yg)("h2",{id:"introduction-to-domino-for-devs"},"Introduction to Domino (for devs)"),(0,t.yg)("p",null,"Ever had that euphoric moment when you've just successfully completed a complex data workflow project? After many hours spent crafting functions, meticulously documenting them, ensuring robust error handling, and striving for efficiency, you can finally take a breather and enjoy the satisfaction of your accomplishment. But in the aftermath, you may find yourself pondering:"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},'"If only I could encapsulate these functions as neat modules on my screen, then just drag and drop them whenever I want to use them in future..."')),(0,t.yg)("p",null,"If you've worked with data science, machine learning or a related field, this scenario is likely a familiar one. Well, guess what? Now you can! Domino offers the capability to transform any Python code into modular Pieces that can be seamlessly arranged within an intuitive graphical interface to create powerful  data workflows."),(0,t.yg)("p",null,"Domino\u2019s innovative approach not only boosts the efficiency of the workflow creation process, but also encourages a collaborative environment. You can package your well-crafted Python functions into a Piece, complete with its unique data model and isolated execution environment, and share it across your organization, or even beyond. Over time, your colleagues and peers can assemble a rich and diverse toolbox of Pieces, each embodying the expertise of different teams, ready to be pieced together in any number of ways."),(0,t.yg)("p",null,"The underlying design of Domino places a strong emphasis on promoting best practices in open-source code sharing. By creating a standard for creating Pieces - reusable modules of Python functions - it encourages you to think modularly, breaking down complex workflows into simple, manageable components. Each Piece is designed to be self-contained, bundled as a container, ensuring not only its portability across systems but also its consistent execution."),(0,t.yg)("p",null,"A core element of Domino's standard is a well-defined data model for each Piece, which clearly outlines the inputs required and outputs generated. This fosters transparency and understanding among users, making it easier to incorporate into existing or new workflows. It's also a boon for documentation, as each Piece can come with detailed notes explaining its purpose, the function it carries out, and the data it works with."),(0,t.yg)("p",null,"Furthermore, the Pieces you create can be shared within your organization or published in an open-source repository, inviting contributions and usage from the wider developer community. This approach not only accelerates the spread of innovative solutions and ideas but also enhances the collaborative spirit that is at the heart of open-source culture."),(0,t.yg)("p",null,"Domino provides an optimal framework for developers to adhere to best practices of open source code sharing, promoting modular programming and informative documentation. Domino lets you focus on what you do best: writing effective and efficient code to solve complex problems. It takes care of the orchestration, execution, and scalability, and provides a platform for your work to be leveraged and appreciated by others."),(0,t.yg)("h2",{id:"what-does-domino-do"},"What does Domino do?"),(0,t.yg)("p",null,"At its core, Domino operates as an application on top of Apache Airflow. Domino aims at drastically enhancing the user experience in creating, editing, and monitoring workflows, while still relying on Airflow\u2019s powerful workflow orchestration capabilities. Domino brings the Airflow experience to a whole new level with:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"A GUI-first approach in the creation of data and AI workflows"),(0,t.yg)("li",{parentName:"ul"},"Intuitive and rich workflows supervision panels"),(0,t.yg)("li",{parentName:"ul"},"The ability to create and distribute plug-and-play modular Pieces")),(0,t.yg)("p",null,"Let's dive deeper into each of these exciting features."),(0,t.yg)("h3",{id:"gui-first-creation-of-workflows"},"GUI-first creation of workflows"),(0,t.yg)("p",null,"The journey of creating workflows in Airflow can begin quite straightforwardly, but as the complexity scales up, the task can quickly become intimidating. This is where Domino shines, replacing script-writing with an interactive graphical interface that allows you to build and edit workflows with simple drag-and-drop operations."),(0,t.yg)("p",null,"On top of that, Domino transcends the language barrier imposed by Airflow's Python-writing requirement, thereby empowering even non-developers to tailor data pipelines. Pieces in Domino are interactive nodes that let you manually enter input data and connect output data variables from upstream tasks to input data variables of downstream tasks."),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"GIF showing the creation of a workflow in Domino",src:n(8363).A,width:"1918",height:"944"})),(0,t.yg)("p",null,"Domino\u2019s graphical interface brings a breath of fresh air to workflows creation, reducing complex coding processes to simple clicks!"),(0,t.yg)("h3",{id:"intuitive-workflows-supervision"},"Intuitive workflows supervision"),(0,t.yg)("p",null,"Tired of scourging through a cluttered Airflow UI to find simple information about your dag runs? Domino brings a more streamlined UI experience, with the rich information from Airflow's UI, only better organized and easier to navigate. In fact, Domino goes beyond and provides a richer interface for visual inspection of task-level results."),(0,t.yg)("h3",{id:"creation-and-distribution-of-plug-and-play-modular-pieces"},"Creation and distribution of plug-and-play modular Pieces"),(0,t.yg)("p",null,"Perhaps the most game-changing feature of Domino is its standard for the creation of reusable, modular Pieces. Each Piece is defined by its function and data models, and ships in its isolated and self-contained execution environment, ensuring that dependencies are satisfied and the operations will run safely and consistently upon deployment."),(0,t.yg)("p",null,"We've reimagined how Airflow tasks are written, adding a layer of abstraction with the help of Pydantic models, Containers, and the KubernetesPodOperator. This modular approach allows you to create atomic components which can be easily configured and shared. The result? Highly reusable and distributable code that others can seamlessly incorporate into their own workflows!"),(0,t.yg)("h2",{id:"who-can-benefit-from-domino"},"Who can benefit from Domino?"),(0,t.yg)("p",null,"At its heart, Domino is an enabler; it seeks to empower individuals who work with data and AI workflows in any capacity. If you've been yearning for a visual tool for crafting and modifying your workflows, or looking for a streamlined and intuitive way to navigate through your workflows tasks, Domino is just the ticket for you. This innovative tool puts the power of sharing and reusing workflow components at your fingertips, and enables you to grant your clients a degree of autonomy and involvement over the workflows you manage."),(0,t.yg)("p",null,"Domino transcends the boundaries of technical expertise. Regardless of your role - whether you are an infrastructure specialist, a contributing developer, a data science enthusiast, or a business professional, Domino has resources and tools tailored for your needs. The platform is designed to nurture creativity and collaboration, facilitating the design and supervision of sophisticated data workflows. With Domino transformative approach, you\u2019ll be empowered to explore the full potential of cutting-edge methods in machine learning and data science."),(0,t.yg)("h2",{id:"why-is-domino-a-game-changer"},"Why is Domino a Game-Changer?"),(0,t.yg)("p",null,"Here's the real magic of Domino: unlike commercial pipeline builders that limit data processing steps to what their internal software team can develop, Domino encourages the open source community to contribute and share repositories of reusable code. We hope this will allow for a rapid expansion of Pieces within the ecosystem, leveraging the vast array of tools available to the open source community."),(0,t.yg)("p",null,"Being Kubernetes native, Domino fully supports containerized Operators, allowing functions to ship together with their dependencies. This means they are immutable, ready-to-run, and will operate in an isolated environment, guaranteeing consistency and reproducibility of workflows."),(0,t.yg)("p",null,"In summary, Domino is a groundbreaking open source, intuitive GUI workflows platform that promotes the creation, distribution, and reuse of modular workflow components. Our aim is to democratize access to complex workflows, and enable anyone to create and manage them with ease. And we are just getting started. Join us in this exciting journey, and contribute to shaping the future of data and AI workflows with Domino. Try it out today!"),(0,t.yg)("a",{href:"https://github.com/Tauffer-Consulting/domino",style:{display:"flex",alignItems:"center",textDecoration:"none",fontSize:"16px",textDecoration:"none",marginBottom:"10px"}},(0,t.yg)(a.In,{icon:"mdi:github",width:"40",style:{marginRight:"10px"},mdxType:"Icon"}),"Domino on GitHub"),(0,t.yg)("a",{href:"https://domino-workflows.io/docs/intro",style:{display:"flex",alignItems:"center",textDecoration:"none",fontSize:"16px",textDecoration:"none",marginBottom:"10px"}},(0,t.yg)(a.In,{icon:"iconoir:google-docs",width:"40",style:{marginRight:"10px"},mdxType:"Icon"}),"Domino's documentation"),(0,t.yg)("br",null),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Do you want to incorporate Domino as a visual workflow creation and supervision tool to your business operations, but lack technical personnel well versed in data workflows, Apache Airflow or Kubernetes? ",(0,t.yg)("a",{parentName:"p",href:"https://domino-workflows.io/#contact"},"Get in touch with us"),"!")))}g.isMDXComponent=!0},2405:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/domino_introduction-4e122aa96a5635dd8f949f860010e3ae.png"},8363:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/create-workflow-03af58bfb707eab2033c3340b5da70fd.gif"}}]);