"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[2254],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5116:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Learn DevSec",c={unversionedId:"learn-devsec/index",id:"learn-devsec/index",isDocsHomePage:!1,title:"Learn DevSec",description:'Learning DevSec is designed for developers who have already started adding DevSec automation to their toolchain and just want to know "the rest."',source:"@site/docs/learn-devsec/index.md",sourceDirName:"learn-devsec",slug:"/learn-devsec/index",permalink:"/docs/learn-devsec/index",editUrl:"https://github.com/erikcostlow/contrast-dev-site/edit/main/website/docs/learn-devsec/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar2",previous:{title:"What is DevSec",permalink:"/docs/learn-devsec/what-is-devsec"},next:{title:"IAST",permalink:"/docs/learn-devsec/finding/iast"}},u=[{value:"What Developers Do and Don&#39;t Do",id:"what-developers-do-and-dont-do",children:[]},{value:"Things you should not do",id:"things-you-should-not-do",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"learn-devsec"},"Learn DevSec"),(0,o.kt)("p",null,'Learning DevSec is designed for developers who have already started adding DevSec automation to their toolchain and just want to know "the rest."'),(0,o.kt)("p",null,'This contains other bits of information to understand what "security" means in context. The benefit of DevSec is that the security tools make it easier to point your attention at what a piece of security means and when you should pay attention to it.'),(0,o.kt)("p",null,"Security is a vast large topic across many disciplines. The best way to learn about security is to focus on things relevant to what you are working on and learn security in context."),(0,o.kt)("p",null,"Another approach is to focus on defense of your application and its assets. There are many attacks. Attacks change and many of them will not impact you. Many of the attacks that can impact you will be similar in nature."),(0,o.kt)("h2",{id:"what-developers-do-and-dont-do"},"What Developers Do and Don't Do"),(0,o.kt)("p",null,"Application developers are responsible for the security of the code: how it handles sensitive data and how it interacts with the environment."),(0,o.kt)("p",null,"In a cloud environment, application developers follow models such as the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/compliance/shared-responsibility-model/"},"AWS Shared Responsibility Model"),". Cloud customers are responsible for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Customer data"),(0,o.kt)("li",{parentName:"ul"},"Platforms, Applications, Identity & Access Management"),(0,o.kt)("li",{parentName:"ul"},"Operating System, Network & Firewall Management"),(0,o.kt)("li",{parentName:"ul"},"Client-side data encryption & Data integrity authentication"),(0,o.kt)("li",{parentName:"ul"},"Server-side encryption (file system and/or data)"),(0,o.kt)("li",{parentName:"ul"},"Networking traffic protection (encryption integrity, identity)")),(0,o.kt)("p",null,"Specifically when writing software, developers are responsible for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Libraries used by the application"),(0,o.kt)("li",{parentName:"ul"},"Custom code of the application and interaction with libraries"),(0,o.kt)("li",{parentName:"ul"},"Any runtime used to execute the code"),(0,o.kt)("li",{parentName:"ul"},"Middleware components shared between microservices"),(0,o.kt)("li",{parentName:"ul"},"The way that the application interacts with everything else in the shared responsibility model.")),(0,o.kt)("h2",{id:"things-you-should-not-do"},"Things you should not do"),(0,o.kt)("p",null,'Security is expansive and security fits into everything. Attacks often change and many attacks, while interesting, are not relevant to your application. Do not start with a vague or broad scope unrelated to things you are working on. Rather than aiming to "learn security," leverage automated tools to hone in what security means in your context and branch out from there.'),(0,o.kt)("p",null,"Developers receive more benefit from defensive security, to build secure applications, rather than offensive security, of learning about attacks."),(0,o.kt)("p",null,'One simple way to establish this focus is to ask, "what am I defending and what am I defending it from."'))}p.isMDXComponent=!0}}]);