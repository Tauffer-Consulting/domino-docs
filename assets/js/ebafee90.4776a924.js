"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[2714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},a="Pieces unit testing",s={unversionedId:"pieces/pieces_unit_testing",id:"pieces/pieces_unit_testing",title:"Pieces unit testing",description:"Domino provides a convenient function to test Pieces, the piecedryrun function.",source:"@site/docs/pieces/pieces_unit_testing.mdx",sourceDirName:"pieces",slug:"/pieces/pieces_unit_testing",permalink:"/domino-docs/docs/pieces/pieces_unit_testing",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create Pieces",permalink:"/domino-docs/docs/pieces/create_pieces"},next:{title:"Domino Components",permalink:"/domino-docs/docs/category/domino-components"}},l={},p=[{value:"Unit tests on Github Actions",id:"unit-tests-on-github-actions",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pieces-unit-testing"},"Pieces unit testing"),(0,r.kt)("p",null,"Domino provides a convenient function to test Pieces, the ",(0,r.kt)("inlineCode",{parentName:"p"},"piece_dry_run")," function."),(0,r.kt)("p",null,"Suppose you created a Pieces repository and want to test the Pieces locally. It's possible to run tests without the whole Domino platform or a new repository release on GitHub."),(0,r.kt)("p",null,"Pre-requisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domino-py")," installed in your local environment. "),(0,r.kt)("li",{parentName:"ul"},"A local Pieces repository folder, following the standard organization (see ",(0,r.kt)("a",{parentName:"li",href:"./create_pieces"},"Create Pieces"),").")),(0,r.kt)("p",null,"You simply need to create a script importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"piece_dry_run")," function and fill the arguments with the Piece inputs and secrets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="test_examplepiece.py"',title:'"test_examplepiece.py"'},'from domino.testing.dry_run import piece_dry_run\nimport os\n\npiece_dry_run(\n    repository_folder_path="path/to/pieces_repository",\n    piece_name="ExamplePiece",\n    input_data={ \n        "in_argument_1": value,\n        "in_argument_2": value,\n        "in_argument_3": value\n    }\n    secrets_data={ \n        "EXAMPLE_SECRET_1": os.environ.get("EXAMPLE_SECRET_1"),\n        "EXAMPLE_SECRET_2": os.environ.get("EXAMPLE_SECRET_2")\n    }\n)\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"repository_folder_path")," should be the path to the root of the piece repository. Default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"'.'"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"piece_name")," must be the same defined at the Piece's Folder."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"input_data")," is a dict with the key-value arguments as defined in the Piece's InputModel."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets_data")," is a dict with the key-value arguments as defined in the Piece's SecretsModel."),(0,r.kt)("h3",{id:"unit-tests-on-github-actions"},"Unit tests on Github Actions"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Tauffer-Consulting/domino_pieces_repository_template"},"Template for Pieces repository")," provides out-of-the box Github actions that will automatically run the unit tests for all Pieces.\nThe unit tests should run successfully before the action publish the Pieces images."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pytest")," will recognize all files named ",(0,r.kt)("inlineCode",{parentName:"p"},"test_*.py")," in the Pieces folders and run them as tests."),(0,r.kt)("p",null,"For Pieces that require secrets, the best practice is to store the secrets in the repository settings: ",(0,r.kt)("inlineCode",{parentName:"p"},"Setings > Secrets and variables > Actions > Repository secrets"),". Then you should explicitly import the secrets as environment variables inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/.github/workflows/validate-and-organize.yml"),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="validate-and-organize.yml"',title:'"validate-and-organize.yml"'},"- name: Run tests over built images\n  env:\n    EXAMPLE_SECRET_1: ${{ secrets.EXAMPLE_SECRET_1 }}\n    EXAMPLE_SECRET_2: ${{ secrets.EXAMPLE_SECRET_2 }}\n  run: |\n    pytest\n")))}d.isMDXComponent=!0}}]);