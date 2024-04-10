/*! For license information please see 2503.c3e9bc5b.js.LICENSE.txt */
(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[2503],{6942:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=i(e,l(o)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=i(t,o));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},2503:(e,t,o)=>{"use strict";o.d(t,{m_:()=>Le});var n=o(6540);const r=Math.min,l=Math.max,i=Math.round,c=Math.floor,s=e=>({x:e,y:e}),a={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function d(e,t,o){return l(e,r(t,o))}function f(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function y(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function h(e){return["top","bottom"].includes(p(e))?"y":"x"}function w(e){return y(h(e))}function g(e){return e.replace(/start|end/g,(e=>u[e]))}function b(e){return e.replace(/left|right|bottom|top/g,(e=>a[e]))}function x(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function _(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function E(e,t,o){let{reference:n,floating:r}=e;const l=h(t),i=w(t),c=v(i),s=p(t),a="y"===l,u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,f=n[c]/2-r[c]/2;let y;switch(s){case"top":y={x:u,y:n.y-r.height};break;case"bottom":y={x:u,y:n.y+n.height};break;case"right":y={x:n.x+n.width,y:d};break;case"left":y={x:n.x-r.width,y:d};break;default:y={x:n.x,y:n.y}}switch(m(t)){case"start":y[i]-=f*(o&&a?-1:1);break;case"end":y[i]+=f*(o&&a?-1:1)}return y}async function S(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=f(t,e),y=x(m),v=c[p?"floating"===d?"reference":"floating":d],h=_(await l.getClippingRect({element:null==(o=await(null==l.isElement?void 0:l.isElement(v)))||o?v:v.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),w="floating"===d?{...i.floating,x:n,y:r}:i.reference,g=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),b=await(null==l.isElement?void 0:l.isElement(g))&&await(null==l.getScale?void 0:l.getScale(g))||{x:1,y:1},E=_(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:g,strategy:s}):w);return{top:(h.top-E.top+y.top)/b.y,bottom:(E.bottom-h.bottom+y.bottom)/b.y,left:(h.left-E.left+y.left)/b.x,right:(E.right-h.right+y.right)/b.x}}const A=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:r,y:l,placement:i,middlewareData:c}=t,s=await async function(e,t){const{placement:o,platform:n,elements:r}=e,l=await(null==n.isRTL?void 0:n.isRTL(r.floating)),i=p(o),c=m(o),s="y"===h(o),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,d=f(t,e);let{mainAxis:y,crossAxis:v,alignmentAxis:w}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&"number"==typeof w&&(v="end"===c?-1*w:w),s?{x:v*u,y:y*a}:{x:y*a,y:v*u}}(t,e);return i===(null==(o=c.offset)?void 0:o.placement)&&null!=(n=c.arrow)&&n.alignmentOffset?{}:{x:r+s.x,y:l+s.y,data:{...s,placement:i}}}}};function T(e){return k(e)?(e.nodeName||"").toLowerCase():"#document"}function R(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function O(e){var t;return null==(t=(k(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function k(e){return e instanceof Node||e instanceof R(e).Node}function L(e){return e instanceof Element||e instanceof R(e).Element}function C(e){return e instanceof HTMLElement||e instanceof R(e).HTMLElement}function N(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof R(e).ShadowRoot)}function D(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function $(e){return["table","td","th"].includes(T(e))}function B(e){const t=I(),o=H(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function I(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function j(e){return["html","body","#document"].includes(T(e))}function H(e){return R(e).getComputedStyle(e)}function P(e){return L(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function W(e){if("html"===T(e))return e;const t=e.assignedSlot||e.parentNode||N(e)&&e.host||O(e);return N(t)?t.host:t}function z(e){const t=W(e);return j(t)?e.ownerDocument?e.ownerDocument.body:e.body:C(t)&&D(t)?t:z(t)}function F(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=z(e),l=r===(null==(n=e.ownerDocument)?void 0:n.body),i=R(r);return l?t.concat(i,i.visualViewport||[],D(r)?r:[],i.frameElement&&o?F(i.frameElement):[]):t.concat(r,F(r,[],o))}function M(e){const t=H(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=C(e),l=r?e.offsetWidth:o,c=r?e.offsetHeight:n,s=i(o)!==l||i(n)!==c;return s&&(o=l,n=c),{width:o,height:n,$:s}}function V(e){return L(e)?e:e.contextElement}function q(e){const t=V(e);if(!C(t))return s(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:l}=M(t);let c=(l?i(o.width):o.width)/n,a=(l?i(o.height):o.height)/r;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const K=s(0);function X(e){const t=R(e);return I()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:K}function Y(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),l=V(e);let i=s(1);t&&(n?L(n)&&(i=q(n)):i=q(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==R(e))&&t}(l,o,n)?X(l):s(0);let a=(r.left+c.x)/i.x,u=(r.top+c.y)/i.y,d=r.width/i.x,f=r.height/i.y;if(l){const e=R(l),t=n&&L(n)?R(n):n;let o=e,r=o.frameElement;for(;r&&n&&t!==o;){const e=q(r),t=r.getBoundingClientRect(),n=H(r),l=t.left+(r.clientLeft+parseFloat(n.paddingLeft))*e.x,i=t.top+(r.clientTop+parseFloat(n.paddingTop))*e.y;a*=e.x,u*=e.y,d*=e.x,f*=e.y,a+=l,u+=i,o=R(r),r=o.frameElement}}return _({width:d,height:f,x:a,y:u})}const Z=[":popover-open",":modal"];function G(e){return Z.some((t=>{try{return e.matches(t)}catch(o){return!1}}))}function U(e){return Y(O(e)).left+P(e).scrollLeft}function J(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=R(e),n=O(e),r=o.visualViewport;let l=n.clientWidth,i=n.clientHeight,c=0,s=0;if(r){l=r.width,i=r.height;const e=I();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,s=r.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,o);else if("document"===t)n=function(e){const t=O(e),o=P(e),n=e.ownerDocument.body,r=l(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=l(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let c=-o.scrollLeft+U(e);const s=-o.scrollTop;return"rtl"===H(n).direction&&(c+=l(t.clientWidth,n.clientWidth)-r),{width:r,height:i,x:c,y:s}}(O(e));else if(L(t))n=function(e,t){const o=Y(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,l=C(e)?q(e):s(1);return{width:e.clientWidth*l.x,height:e.clientHeight*l.y,x:r*l.x,y:n*l.y}}(t,o);else{const o=X(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return _(n)}function Q(e,t){const o=W(e);return!(o===t||!L(o)||j(o))&&("fixed"===H(o).position||Q(o,t))}function ee(e,t,o){const n=C(t),r=O(t),l="fixed"===o,i=Y(e,!0,l,t);let c={scrollLeft:0,scrollTop:0};const a=s(0);if(n||!n&&!l)if(("body"!==T(t)||D(r))&&(c=P(t)),n){const e=Y(t,!0,l,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=U(r));return{x:i.left+c.scrollLeft-a.x,y:i.top+c.scrollTop-a.y,width:i.width,height:i.height}}function te(e,t){return C(e)&&"fixed"!==H(e).position?t?t(e):e.offsetParent:null}function oe(e,t){const o=R(e);if(!C(e)||G(e))return o;let n=te(e,t);for(;n&&$(n)&&"static"===H(n).position;)n=te(n,t);return n&&("html"===T(n)||"body"===T(n)&&"static"===H(n).position&&!B(n))?o:n||function(e){let t=W(e);for(;C(t)&&!j(t);){if(B(t))return t;t=W(t)}return null}(e)||o}const ne={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:n,strategy:r}=e;const l="fixed"===r,i=O(n),c=!!t&&G(t.floating);if(n===i||c&&l)return o;let a={scrollLeft:0,scrollTop:0},u=s(1);const d=s(0),f=C(n);if((f||!f&&!l)&&(("body"!==T(n)||D(i))&&(a=P(n)),C(n))){const e=Y(n);u=q(n),d.x=e.x+n.clientLeft,d.y=e.y+n.clientTop}return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-a.scrollLeft*u.x+d.x,y:o.y*u.y-a.scrollTop*u.y+d.y}},getDocumentElement:O,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const c=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=F(e,[],!1).filter((e=>L(e)&&"body"!==T(e))),r=null;const l="fixed"===H(e).position;let i=l?W(e):e;for(;L(i)&&!j(i);){const t=H(i),o=B(i);o||"fixed"!==t.position||(r=null),(l?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||D(i)&&!o&&Q(e,i))?n=n.filter((e=>e!==i)):r=t,i=W(i)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=c[0],a=c.reduce(((e,o)=>{const n=J(t,o,i);return e.top=l(n.top,e.top),e.right=r(n.right,e.right),e.bottom=r(n.bottom,e.bottom),e.left=l(n.left,e.left),e}),J(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:oe,getElementRects:async function(e){const t=this.getOffsetParent||oe,o=this.getDimensions;return{reference:ee(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await o(e.floating)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=M(e);return{width:t,height:o}},getScale:q,isElement:L,isRTL:function(e){return"rtl"===H(e).direction}};function re(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,f=V(e),p=i||s?[...f?F(f):[],...F(t)]:[];p.forEach((e=>{i&&e.addEventListener("scroll",o,{passive:!0}),s&&e.addEventListener("resize",o)}));const m=f&&u?function(e,t){let o,n=null;const i=O(e);function s(){var e;clearTimeout(o),null==(e=n)||e.disconnect(),n=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),s();const{left:f,top:p,width:m,height:y}=e.getBoundingClientRect();if(u||t(),!m||!y)return;const v={rootMargin:-c(p)+"px "+-c(i.clientWidth-(f+m))+"px "+-c(i.clientHeight-(p+y))+"px "+-c(f)+"px",threshold:l(0,r(1,d))||1};let h=!0;function w(e){const t=e[0].intersectionRatio;if(t!==d){if(!h)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),100)}h=!1}try{n=new IntersectionObserver(w,{...v,root:i.ownerDocument})}catch(g){n=new IntersectionObserver(w,v)}n.observe(e)}(!0),s}(f,o):null;let y,v=-1,h=null;a&&(h=new ResizeObserver((e=>{let[n]=e;n&&n.target===f&&h&&(h.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame((()=>{var e;null==(e=h)||e.observe(t)}))),o()})),f&&!d&&h.observe(f),h.observe(t));let w=d?Y(e):null;return d&&function t(){const n=Y(e);!w||n.x===w.x&&n.y===w.y&&n.width===w.width&&n.height===w.height||o();w=n,y=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{i&&e.removeEventListener("scroll",o),s&&e.removeEventListener("resize",o)})),null==m||m(),null==(e=h)||e.disconnect(),h=null,d&&cancelAnimationFrame(y)}}const le=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:r}=t,{mainAxis:l=!0,crossAxis:i=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...s}=f(e,t),a={x:o,y:n},u=await S(t,s),m=h(p(r)),v=y(m);let w=a[v],g=a[m];if(l){const e="y"===v?"bottom":"right";w=d(w+u["y"===v?"top":"left"],w,w-u[e])}if(i){const e="y"===m?"bottom":"right";g=d(g+u["y"===m?"top":"left"],g,g-u[e])}const b=c.fn({...t,[v]:w,[m]:g});return{...b,data:{x:b.x-o,y:b.y-n}}}}},ie=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:l,rects:i,initialPlacement:c,platform:s,elements:a}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:y,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:_=!0,...E}=f(e,t);if(null!=(o=l.arrow)&&o.alignmentOffset)return{};const A=p(r),T=p(c)===c,R=await(null==s.isRTL?void 0:s.isRTL(a.floating)),O=y||(T||!_?[b(c)]:function(e){const t=b(e);return[g(e),t,g(t)]}(c));y||"none"===x||O.push(...function(e,t,o,n){const r=m(e);let l=function(e,t,o){const n=["left","right"],r=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?l:i;default:return[]}}(p(e),"start"===o,n);return r&&(l=l.map((e=>e+"-"+r)),t&&(l=l.concat(l.map(g)))),l}(c,_,x,R));const k=[c,...O],L=await S(t,E),C=[];let N=(null==(n=l.flip)?void 0:n.overflows)||[];if(u&&C.push(L[A]),d){const e=function(e,t,o){void 0===o&&(o=!1);const n=m(e),r=w(e),l=v(r);let i="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=b(i)),[i,b(i)]}(r,i,R);C.push(L[e[0]],L[e[1]])}if(N=[...N,{placement:r,overflows:C}],!C.every((e=>e<=0))){var D,$;const e=((null==(D=l.flip)?void 0:D.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:N},reset:{placement:t}};let o=null==($=N.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:$.placement;if(!o)switch(h){case"bestFit":{var B;const e=null==(B=N.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:B[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},ce=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:l,rects:i,platform:c,elements:s,middlewareData:a}=t,{element:u,padding:p=0}=f(e,t)||{};if(null==u)return{};const y=x(p),h={x:o,y:n},g=w(l),b=v(g),_=await c.getDimensions(u),E="y"===g,S=E?"top":"left",A=E?"bottom":"right",T=E?"clientHeight":"clientWidth",R=i.reference[b]+i.reference[g]-h[g]-i.floating[b],O=h[g]-i.reference[g],k=await(null==c.getOffsetParent?void 0:c.getOffsetParent(u));let L=k?k[T]:0;L&&await(null==c.isElement?void 0:c.isElement(k))||(L=s.floating[T]||i.floating[b]);const C=R/2-O/2,N=L/2-_[b]/2-1,D=r(y[S],N),$=r(y[A],N),B=D,I=L-_[b]-$,j=L/2-_[b]/2+C,H=d(B,j,I),P=!a.arrow&&null!=m(l)&&j!==H&&i.reference[b]/2-(j<B?D:$)-_[b]/2<0,W=P?j<B?j-B:j-I:0;return{[g]:h[g]+W,data:{[g]:H,centerOffset:j-H-W,...P&&{alignmentOffset:W}},reset:P}}}),se=(e,t,o)=>{const n=new Map,r={platform:ne,...o},l={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:l=[],platform:i}=o,c=l.filter(Boolean),s=await(null==i.isRTL?void 0:i.isRTL(t));let a=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=E(a,n,s),f=n,p={},m=0;for(let y=0;y<c.length;y++){const{name:o,fn:l}=c[y],{x:v,y:h,data:w,reset:g}=await l({x:u,y:d,initialPlacement:n,placement:f,strategy:r,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=v?v:u,d=null!=h?h:d,p={...p,[o]:{...p[o],...w}},g&&m<=50&&(m++,"object"==typeof g&&(g.placement&&(f=g.placement),g.rects&&(a=!0===g.rects?await i.getElementRects({reference:e,floating:t,strategy:r}):g.rects),({x:u,y:d}=E(a,f,s))),y=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}})(e,t,{...r,platform:l})};var ae=o(6942);const ue="react-tooltip-core-styles",de="react-tooltip-base-styles",fe={core:!1,base:!1};function pe({css:e,id:t=de,type:o="base",ref:n}){var r,l;if(!e||"undefined"==typeof document||fe[o])return;if("core"===o&&"undefined"!=typeof process&&(null===(r=null===process||void 0===process?void 0:process.env)||void 0===r?void 0:r.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==o&&"undefined"!=typeof process&&(null===(l=null===process||void 0===process?void 0:process.env)||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===o&&(t=ue),n||(n={});const{insertAt:i}=n;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),fe[o]=!0}const me=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:o=null,place:n="top",offset:r=10,strategy:l="absolute",middlewares:i=[A(Number(r)),ie({fallbackAxisSideDirection:"start"}),le({padding:5})],border:c})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};const s=i;return o?(s.push(ce({element:o,padding:5})),se(e,t,{placement:n,strategy:l,middleware:s}).then((({x:e,y:t,placement:o,middlewareData:n})=>{var r,l;const i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(r=n.arrow)&&void 0!==r?r:{x:0,y:0},u=null!==(l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]])&&void 0!==l?l:"bottom",d=c&&{borderBottom:c,borderRight:c};let f=0;if(c){const e=`${c}`.match(/(\d+)px/);f=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...d,[u]:`-${4+f}px`},place:o}}))):se(e,t,{placement:"bottom",strategy:l,middleware:s}).then((({x:e,y:t,placement:o})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:o})))},ye=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),ve=(e,t,o)=>{let n=null;const r=function(...r){const l=()=>{n=null,o||e.apply(this,r)};o&&!n&&(e.apply(this,r),n=setTimeout(l,t)),o||(n&&clearTimeout(n),n=setTimeout(l,t))};return r.cancel=()=>{n&&(clearTimeout(n),n=null)},r},he=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,we=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,o)=>we(e,t[o])));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!he(e)||!he(t))return e===t;const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every((o=>we(e[o],t[o])))},ge=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const o=t.getPropertyValue(e);return"auto"===o||"scroll"===o}))},be=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(ge(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},xe="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,_e="DEFAULT_TOOLTIP_ID",Ee={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Se=(0,n.createContext)({getTooltipData:()=>Ee});function Ae(e=_e){return(0,n.useContext)(Se).getTooltipData(e)}var Te={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Re={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const Oe=({forwardRef:e,id:t,className:o,classNameArrow:r,variant:l="dark",anchorId:i,anchorSelect:c,place:s="top",offset:a=10,events:u=["hover"],openOnClick:d=!1,positionStrategy:f="absolute",middlewares:p,wrapper:m,delayShow:y=0,delayHide:v=0,float:h=!1,hidden:w=!1,noArrow:g=!1,clickable:b=!1,closeOnEsc:x=!1,closeOnScroll:_=!1,closeOnResize:E=!1,openEvents:S,closeEvents:A,globalCloseEvents:T,imperativeModeOnly:R,style:O,position:k,afterShow:L,afterHide:C,content:N,contentWrapperRef:D,isOpen:$,defaultIsOpen:B=!1,setIsOpen:I,activeAnchor:j,setActiveAnchor:H,border:P,opacity:W,arrowColor:z,role:F="tooltip"})=>{var M;const V=(0,n.useRef)(null),q=(0,n.useRef)(null),K=(0,n.useRef)(null),X=(0,n.useRef)(null),Y=(0,n.useRef)(null),[Z,G]=(0,n.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:s}),[U,J]=(0,n.useState)(!1),[Q,ee]=(0,n.useState)(!1),[te,oe]=(0,n.useState)(null),ne=(0,n.useRef)(!1),le=(0,n.useRef)(null),{anchorRefs:ie,setActiveAnchor:ce}=Ae(t),se=(0,n.useRef)(!1),[ue,de]=(0,n.useState)([]),fe=(0,n.useRef)(!1),pe=d||u.includes("click"),ye=pe||(null==S?void 0:S.click)||(null==S?void 0:S.dblclick)||(null==S?void 0:S.mousedown),he=S?{...S}:{mouseenter:!0,focus:!0,click:!1,dblclick:!1,mousedown:!1};!S&&pe&&Object.assign(he,{mouseenter:!1,focus:!1,click:!0});const ge=A?{...A}:{mouseleave:!0,blur:!0,click:!1,dblclick:!1,mouseup:!1};!A&&pe&&Object.assign(ge,{mouseleave:!1,blur:!1});const _e=T?{...T}:{escape:x||!1,scroll:_||!1,resize:E||!1,clickOutsideAnchor:ye||!1};R&&(Object.assign(he,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(ge,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(_e,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),xe((()=>(fe.current=!0,()=>{fe.current=!1})),[]);const Ee=e=>{fe.current&&(e&&ee(!0),setTimeout((()=>{fe.current&&(null==I||I(e),void 0===$&&J(e))}),10))};(0,n.useEffect)((()=>{if(void 0===$)return()=>null;$&&ee(!0);const e=setTimeout((()=>{J($)}),10);return()=>{clearTimeout(e)}}),[$]),(0,n.useEffect)((()=>{if(U!==ne.current)if(Y.current&&clearTimeout(Y.current),ne.current=U,U)null==L||L();else{const e=(e=>{const t=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(ms|s)$/);if(!t)return 0;const[,o,n]=t;return Number(o)*("ms"===n?1:1e3)})();Y.current=setTimeout((()=>{ee(!1),oe(null),null==C||C()}),e+25)}}),[U]);const Se=e=>{G((t=>we(t,e)?t:e))},Oe=(e=y)=>{K.current&&clearTimeout(K.current),Q?Ee(!0):K.current=setTimeout((()=>{Ee(!0)}),e)},ke=(e=v)=>{X.current&&clearTimeout(X.current),X.current=setTimeout((()=>{se.current||Ee(!1)}),e)},Le=e=>{var t;if(!e)return;const o=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==o?void 0:o.isConnected))return H(null),void ce({current:null});y?Oe():Ee(!0),H(o),ce({current:o}),X.current&&clearTimeout(X.current)},Ce=()=>{b?ke(v||100):v?ke():Ee(!1),K.current&&clearTimeout(K.current)},Ne=({x:e,y:t})=>{var o;const n={getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})};me({place:null!==(o=null==te?void 0:te.place)&&void 0!==o?o:s,offset:a,elementReference:n,tooltipReference:V.current,tooltipArrowReference:q.current,strategy:f,middlewares:p,border:P}).then((e=>{Se(e)}))},De=e=>{if(!e)return;const t=e,o={x:t.clientX,y:t.clientY};Ne(o),le.current=o},$e=e=>{var t;if(!U)return;const o=e.target;o.isConnected&&((null===(t=V.current)||void 0===t?void 0:t.contains(o))||[document.querySelector(`[id='${i}']`),...ue].some((e=>null==e?void 0:e.contains(o)))||(Ee(!1),K.current&&clearTimeout(K.current)))},Be=ve(Le,50,!0),Ie=ve(Ce,50,!0),je=e=>{Ie.cancel(),Be(e)},He=()=>{Be.cancel(),Ie()},Pe=(0,n.useCallback)((()=>{var e,t;const o=null!==(e=null==te?void 0:te.position)&&void 0!==e?e:k;o?Ne(o):h?le.current&&Ne(le.current):(null==j?void 0:j.isConnected)&&me({place:null!==(t=null==te?void 0:te.place)&&void 0!==t?t:s,offset:a,elementReference:j,tooltipReference:V.current,tooltipArrowReference:q.current,strategy:f,middlewares:p,border:P}).then((e=>{fe.current&&Se(e)}))}),[U,j,N,O,s,null==te?void 0:te.place,a,f,k,null==te?void 0:te.position,h]);(0,n.useEffect)((()=>{var e,t;const o=new Set(ie);ue.forEach((e=>{o.add({current:e})}));const n=document.querySelector(`[id='${i}']`);n&&o.add({current:n});const r=()=>{Ee(!1)},l=be(j),c=be(V.current);_e.scroll&&(window.addEventListener("scroll",r),null==l||l.addEventListener("scroll",r),null==c||c.addEventListener("scroll",r));let s=null;_e.resize?window.addEventListener("resize",r):j&&V.current&&(s=re(j,V.current,Pe,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const a=e=>{"Escape"===e.key&&Ee(!1)};_e.escape&&window.addEventListener("keydown",a),_e.clickOutsideAnchor&&window.addEventListener("click",$e);const u=[],d=e=>{U&&(null==e?void 0:e.target)===j||Le(e)},f=e=>{U&&(null==e?void 0:e.target)===j&&Ce()},p=["mouseenter","mouseleave","focus","blur"],m=["click","dblclick","mousedown","mouseup"];Object.entries(he).forEach((([e,t])=>{t&&(p.includes(e)?u.push({event:e,listener:je}):m.includes(e)&&u.push({event:e,listener:d}))})),Object.entries(ge).forEach((([e,t])=>{t&&(p.includes(e)?u.push({event:e,listener:He}):m.includes(e)&&u.push({event:e,listener:f}))})),h&&u.push({event:"pointermove",listener:De});const y=()=>{se.current=!0},v=()=>{se.current=!1,Ce()};return b&&!ye&&(null===(e=V.current)||void 0===e||e.addEventListener("mouseenter",y),null===(t=V.current)||void 0===t||t.addEventListener("mouseleave",v)),u.forEach((({event:e,listener:t})=>{o.forEach((o=>{var n;null===(n=o.current)||void 0===n||n.addEventListener(e,t)}))})),()=>{var e,t;_e.scroll&&(window.removeEventListener("scroll",r),null==l||l.removeEventListener("scroll",r),null==c||c.removeEventListener("scroll",r)),_e.resize?window.removeEventListener("resize",r):null==s||s(),_e.clickOutsideAnchor&&window.removeEventListener("click",$e),_e.escape&&window.removeEventListener("keydown",a),b&&!ye&&(null===(e=V.current)||void 0===e||e.removeEventListener("mouseenter",y),null===(t=V.current)||void 0===t||t.removeEventListener("mouseleave",v)),u.forEach((({event:e,listener:t})=>{o.forEach((o=>{var n;null===(n=o.current)||void 0===n||n.removeEventListener(e,t)}))}))}}),[j,Pe,Q,ie,ue,S,A,T,pe,y,v]),(0,n.useEffect)((()=>{var e,o;let n=null!==(o=null!==(e=null==te?void 0:te.anchorSelect)&&void 0!==e?e:c)&&void 0!==o?o:"";!n&&t&&(n=`[data-tooltip-id='${t}']`);const r=new MutationObserver((e=>{const o=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===t?o.push(e.target):e.oldValue===t&&r.push(e.target)),"childList"===e.type){if(j){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(n)try{r.push(...t.filter((e=>e.matches(n)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,j))&&(ee(!1),Ee(!1),H(null),K.current&&clearTimeout(K.current),X.current&&clearTimeout(X.current),!0)}))}if(n)try{const t=[...e.addedNodes].filter((e=>1===e.nodeType));o.push(...t.filter((e=>e.matches(n)))),o.push(...t.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}}})),(o.length||r.length)&&de((e=>[...e.filter((e=>!r.includes(e))),...o]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{r.disconnect()}}),[t,c,null==te?void 0:te.anchorSelect,j]),(0,n.useEffect)((()=>{Pe()}),[Pe]),(0,n.useEffect)((()=>{if(!(null==D?void 0:D.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>Pe()))}));return e.observe(D.current),()=>{e.disconnect()}}),[N,null==D?void 0:D.current]),(0,n.useEffect)((()=>{var e;const t=document.querySelector(`[id='${i}']`),o=[...ue,t];j&&o.includes(j)||H(null!==(e=ue[0])&&void 0!==e?e:t)}),[i,ue,j]),(0,n.useEffect)((()=>(B&&Ee(!0),()=>{K.current&&clearTimeout(K.current),X.current&&clearTimeout(X.current)})),[]),(0,n.useEffect)((()=>{var e;let o=null!==(e=null==te?void 0:te.anchorSelect)&&void 0!==e?e:c;if(!o&&t&&(o=`[data-tooltip-id='${t}']`),o)try{const e=Array.from(document.querySelectorAll(o));de(e)}catch(e){de([])}}),[t,c,null==te?void 0:te.anchorSelect]),(0,n.useEffect)((()=>{K.current&&(clearTimeout(K.current),Oe(y))}),[y]);const We=null!==(M=null==te?void 0:te.content)&&void 0!==M?M:N,ze=U&&Object.keys(Z.tooltipStyles).length>0;return(0,n.useImperativeHandle)(e,(()=>({open:t=>{if(null==t?void 0:t.anchorSelect)try{document.querySelector(t.anchorSelect)}catch(e){return void console.warn(`[react-tooltip] "${t.anchorSelect}" is not a valid CSS selector`)}oe(null!=t?t:null),(null==t?void 0:t.delay)?Oe(t.delay):Ee(!0)},close:e=>{(null==e?void 0:e.delay)?ke(e.delay):Ee(!1)},activeAnchor:j,place:Z.place,isOpen:Boolean(Q&&!w&&We&&ze)}))),Q&&!w&&We?n.createElement(m,{id:t,role:F,className:ae("react-tooltip",Te.tooltip,Re.tooltip,Re[l],o,`react-tooltip__place-${Z.place}`,Te[ze?"show":"closing"],ze?"react-tooltip__show":"react-tooltip__closing","fixed"===f&&Te.fixed,b&&Te.clickable),onTransitionEnd:e=>{Y.current&&clearTimeout(Y.current),U||"opacity"!==e.propertyName||(ee(!1),oe(null),null==C||C())},style:{...O,...Z.tooltipStyles,opacity:void 0!==W&&ze?W:void 0},ref:V},We,n.createElement(m,{className:ae("react-tooltip-arrow",Te.arrow,Re.arrow,r,g&&Te.noArrow),style:{...Z.tooltipArrowStyles,background:z?`linear-gradient(to right bottom, transparent 50%, ${z} 50%)`:void 0},ref:q})):null},ke=({content:e})=>n.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),Le=n.forwardRef((({id:e,anchorId:t,anchorSelect:o,content:r,html:l,render:i,className:c,classNameArrow:s,variant:a="dark",place:u="top",offset:d=10,wrapper:f="div",children:p=null,events:m=["hover"],openOnClick:y=!1,positionStrategy:v="absolute",middlewares:h,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:x=!1,noArrow:_=!1,clickable:E=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:T=!1,openEvents:R,closeEvents:O,globalCloseEvents:k,imperativeModeOnly:L=!1,style:C,position:N,isOpen:D,defaultIsOpen:$=!1,disableStyleInjection:B=!1,border:I,opacity:j,arrowColor:H,setIsOpen:P,afterShow:W,afterHide:z,role:F="tooltip"},M)=>{const[V,q]=(0,n.useState)(r),[K,X]=(0,n.useState)(l),[Y,Z]=(0,n.useState)(u),[G,U]=(0,n.useState)(a),[J,Q]=(0,n.useState)(d),[ee,te]=(0,n.useState)(w),[oe,ne]=(0,n.useState)(g),[re,le]=(0,n.useState)(b),[ie,ce]=(0,n.useState)(x),[se,ue]=(0,n.useState)(f),[de,fe]=(0,n.useState)(m),[pe,me]=(0,n.useState)(v),[ve,he]=(0,n.useState)(null),[we,ge]=(0,n.useState)(null),be=(0,n.useRef)(B),{anchorRefs:xe,activeAnchor:_e}=Ae(e),Ee=e=>null==e?void 0:e.getAttributeNames().reduce(((t,o)=>{var n;return o.startsWith("data-tooltip-")&&(t[o.replace(/^data-tooltip-/,"")]=null!==(n=null==e?void 0:e.getAttribute(o))&&void 0!==n?n:null),t}),{}),Se=e=>{const t={place:e=>{var t;Z(null!==(t=e)&&void 0!==t?t:u)},content:e=>{q(null!=e?e:r)},html:e=>{X(null!=e?e:l)},variant:e=>{var t;U(null!==(t=e)&&void 0!==t?t:a)},offset:e=>{Q(null===e?d:Number(e))},wrapper:e=>{var t;ue(null!==(t=e)&&void 0!==t?t:f)},events:e=>{const t=null==e?void 0:e.split(" ");fe(null!=t?t:m)},"position-strategy":e=>{var t;me(null!==(t=e)&&void 0!==t?t:v)},"delay-show":e=>{te(null===e?w:Number(e))},"delay-hide":e=>{ne(null===e?g:Number(e))},float:e=>{le(null===e?b:"true"===e)},hidden:e=>{ce(null===e?x:"true"===e)},"class-name":e=>{he(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,o])=>{var n;null===(n=t[e])||void 0===n||n.call(t,o)}))};(0,n.useEffect)((()=>{q(r)}),[r]),(0,n.useEffect)((()=>{X(l)}),[l]),(0,n.useEffect)((()=>{Z(u)}),[u]),(0,n.useEffect)((()=>{U(a)}),[a]),(0,n.useEffect)((()=>{Q(d)}),[d]),(0,n.useEffect)((()=>{te(w)}),[w]),(0,n.useEffect)((()=>{ne(g)}),[g]),(0,n.useEffect)((()=>{le(b)}),[b]),(0,n.useEffect)((()=>{ce(x)}),[x]),(0,n.useEffect)((()=>{me(v)}),[v]),(0,n.useEffect)((()=>{be.current!==B&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[B]),(0,n.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===B,disableBase:B}}))}),[]),(0,n.useEffect)((()=>{var n;const r=new Set(xe);let l=o;if(!l&&e&&(l=`[data-tooltip-id='${e}']`),l)try{document.querySelectorAll(l).forEach((e=>{r.add({current:e})}))}catch(n){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${t}']`);if(i&&r.add({current:i}),!r.size)return()=>null;const c=null!==(n=null!=we?we:i)&&void 0!==n?n:_e.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const o=Ee(c);Se(o)}))})),a={attributes:!0,childList:!1,subtree:!1};if(c){const e=Ee(c);Se(e),s.observe(c,a)}return()=>{s.disconnect()}}),[xe,_e,we,t,o]),(0,n.useEffect)((()=>{(null==C?void 0:C.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),I&&!ye("border",`${I}`)&&console.warn(`[react-tooltip] "${I}" is not a valid \`border\`.`),(null==C?void 0:C.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),j&&!ye("opacity",`${j}`)&&console.warn(`[react-tooltip] "${j}" is not a valid \`opacity\`.`)}),[]);let Te=p;const Re=(0,n.useRef)(null);if(i){const e=i({content:(null==we?void 0:we.getAttribute("data-tooltip-content"))||V||null,activeAnchor:we});Te=e?n.createElement("div",{ref:Re,className:"react-tooltip-content-wrapper"},e):null}else V&&(Te=V);K&&(Te=n.createElement(ke,{content:K}));const Le={forwardRef:M,id:e,anchorId:t,anchorSelect:o,className:ae(c,ve),classNameArrow:s,content:Te,contentWrapperRef:Re,place:Y,variant:G,offset:J,wrapper:se,events:de,openOnClick:y,positionStrategy:pe,middlewares:h,delayShow:ee,delayHide:oe,float:re,hidden:ie,noArrow:_,clickable:E,closeOnEsc:S,closeOnScroll:A,closeOnResize:T,openEvents:R,closeEvents:O,globalCloseEvents:k,imperativeModeOnly:L,style:C,position:N,isOpen:D,defaultIsOpen:$,border:I,opacity:j,arrowColor:H,setIsOpen:P,afterShow:W,afterHide:z,activeAnchor:we,setActiveAnchor:e=>ge(e),role:F};return n.createElement(Oe,{...Le})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||pe({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||pe({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}))}}]);