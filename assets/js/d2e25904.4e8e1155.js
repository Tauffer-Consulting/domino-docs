"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),m=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=m(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return t?o.createElement(g,a(a({ref:n},l),{},{components:t})):o.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var m=2;m<i;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},a="Domino GUI",s={unversionedId:"domino_components/domino_components_gui",id:"domino_components/domino_components_gui",title:"Domino GUI",description:"The Domino frontend service is a React application that provides the GUI for easily creating, editing and monitoring Workflows. Here are some of its features:",source:"@site/docs/domino_components/domino_components_gui.md",sourceDirName:"domino_components",slug:"/domino_components/domino_components_gui",permalink:"/domino-docs/docs/domino_components/domino_components_gui",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/domino_components/domino_components_gui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Domino Components",permalink:"/domino-docs/docs/category/domino-components"},next:{title:"Domino REST API",permalink:"/domino-docs/docs/domino_components/domino_components_rest"}},c={},m=[],l={toc:m},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"domino-gui"},"Domino GUI"),(0,r.kt)("p",null,"The Domino frontend service is a React application that provides the GUI for easily creating, editing and monitoring Workflows. Here are some of its features:"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<details>\n    <summary>\n        <strong>Sign up and login</strong>\n    </summary>\n    <br>\n    Sign up and login to use the Domino platform. \n    <br>\n    <img src="../_static/media/1_sign_up.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Create your workspace</strong>\n    </summary>\n    <br>\n    Create a new workspace and add your github access token.\n    <br>\n    <img src="../_static/media/2_create_workspace_and_token.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Invite an user to your workspace</strong>\n    </summary>\n    <br>\n    In Domino UI you can create different workspaces and invite other users to collaborate with you.\n    For each workspace you can select the users that will have access to it and the pieces repositories you want to install on it.\n    <br>\n    <img src="../_static/media/3_invite_user.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Accept/Reject workspace invites</strong>\n    </summary>\n    <br>\n    When you are invited to a workspace, you will see the workspace invite in the workspaces page.\n    You can accept or reject an invite.\n    <br>\n    <img src="../_static/media/4_accept_invite.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Remove an user from workspace</strong>\n    </summary>\n    <br>\n    If you are the owner of a workspace, you can remove an user from it.\n    If you are not the owner, you can leave the workspace by yourself.\n    <br>\n    <img src="../_static/media/5_remove_user.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Install Pieces repositories</strong>\n    </summary>\n    <br>\n    Install bundles of Pieces to your Domino Workspaces direclty from Github repositories, and use them in your Workflows. \n    <br>\n    <img src="../_static/media/6_install_pieces.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Create Workflows</strong>\n    </summary>\n    <br>\n    Create Workflows by dragging and dropping Pieces to the canvas, and connecting them. \n    <br>\n    <img src="../_static/media/7_create_workflow.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Edit Pieces</strong>\n    </summary>\n    <br>\n    Edit Pieces by changing their input. Outputs from upstream Pieces are automatically available as inputs for downstream Pieces. Pieces can pass forward any type of data, from simple strings to heavy files, all automatically handled by Domino shared storage system.\n    <br>\n    <img src="../_static/media/8_edit_pieces.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Edit and schedule Workflows</strong>\n    </summary>\n    <br>\n    Schedule Workflows to run periodically, at a specific date/time, or trigger them manually, and select the the shared storage service.\n    <br>\n    <img src="../_static/media/9_edit_workflow.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n\n<details>\n    <summary>\n        <strong>Monitor Workflows</strong>\n    </summary>\n    <br>\n    Monitor Workflows in real time, including the status of each Piece, the logs and results of each run.\n    <br>\n    <img src="../_static/media/10_monitor_workflow.gif" style="margin-top: 20px;">\n</details>\n\n<br>\n')))}d.isMDXComponent=!0}}]);