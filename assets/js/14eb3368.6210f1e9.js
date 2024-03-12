"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[6969],{1243:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(8168),r=a(6540),i=a(53),l=a(7559),c=a(4142),s=a(9169),o=a(5489),m=a(1312),d=a(6025);function u(e){return r.createElement("svg",(0,n.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.A)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.A,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:a,index:l,addMicrodata:c}=e;return r.createElement("li",(0,n.A)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){const e=(0,c.OF)(),t=(0,s.Dt)();return e?r.createElement("nav",{className:(0,i.A)(l.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:n},t.label))})))):null}},3514:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(6540),r=a(53),i=a(4142),l=a(5489),c=a(6654),s=a(1312);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:a}=e;return n.createElement(l.A,{href:t,className:(0,r.A)("card padding--lg",o.cardContainer)},a)}function d(e){let{href:t,icon:a,title:i,description:l}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.A)("text--truncate",o.cardTitle),title:i},a," ",i),l&&n.createElement("p",{className:(0,r.A)("text--truncate",o.cardDescription),title:l},l))}function u(e){let{item:t}=e;const a=(0,i._o)(t);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const a=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const a=(0,i.$S)();return n.createElement(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return n.createElement(v,e);const l=(0,i.d1)(t);return n.createElement("section",{className:(0,r.A)("row",a)},l.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},5847:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(6540),r=a(1003),i=a(4142),l=a(6025),c=a(3514),s=a(7719),o=a(1878),m=a(4267),d=a(1243),u=a(1107);const h={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function b(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.A)(t.image)})}function v(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.$S)();return n.createElement("div",{className:h.generatedIndexPage},n.createElement(o.A,null),n.createElement(d.A,null),n.createElement(m.A,null),n.createElement("header",null,n.createElement(u.A,{as:"h1",className:h.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(c.A,{items:a.items,className:h.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(s.A,{previous:t.navigation.previous,next:t.navigation.next})))}function g(e){return n.createElement(n.Fragment,null,n.createElement(b,e),n.createElement(v,e))}},7719:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(8168),r=a(6540),i=a(1312),l=a(9022);function c(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.A,(0,n.A)({},t,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.A,(0,n.A)({},a,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4267:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),r=a(53),i=a(1312),l=a(7559),c=a(2252);function s(e){let{className:t}=e;const a=(0,c.r)();return a.badge?n.createElement("span",{className:(0,r.A)(t,l.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},1878:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(6540),r=a(53),i=a(4586),l=a(5489),c=a(1312),s=a(4070),o=a(7559),m=a(5597),d=a(2252);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(c.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.A,{to:a,onClick:r},n.createElement(c.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.A)(),{pluginId:c}=(0,s.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,m.g1)(c),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,s.HW)(c),g=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.r)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},1107:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(8168),r=a(6540),i=a(53),l=a(1312),c=a(6342),s=a(5489);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.p)();if("h1"===t||!a)return r.createElement(t,(0,n.A)({},m,{id:void 0}));const u=(0,l.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.A)({},m,{className:(0,i.A)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(s.A,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},9022:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(6540),r=a(53),i=a(5489);function l(e){const{permalink:t,title:a,subLabel:l,isNext:c}=e;return n.createElement(i.A,{className:(0,r.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);