"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[1032],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return f}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5845:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),o=["components"],s={},l="Untrusted Deserialization",c={unversionedId:"learn-devsec/vulnerabilities/deserialization",id:"learn-devsec/vulnerabilities/deserialization",isDocsHomePage:!1,title:"Untrusted Deserialization",description:"What is Untrusted Deserialization",source:"@site/docs/learn-devsec/vulnerabilities/deserialization.md",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/deserialization",permalink:"/docs/learn-devsec/vulnerabilities/deserialization",editUrl:"https://github.com/erikcostlow/contrast-dev-site/edit/main/website/docs/learn-devsec/vulnerabilities/deserialization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"Cross Site Request Forgery",permalink:"/docs/learn-devsec/vulnerabilities/csrf"},next:{title:"Expression Language Injection / EL Injection",permalink:"/docs/learn-devsec/vulnerabilities/el-injection"}},u=[{value:"What is Untrusted Deserialization",id:"what-is-untrusted-deserialization",children:[]},{value:"When can Untrusted Deserialization affect my application",id:"when-can-untrusted-deserialization-affect-my-application",children:[]},{value:"How do I know if/where my application has an Untrusted Deserialization vulnerability",id:"how-do-i-know-ifwhere-my-application-has-an-untrusted-deserialization-vulnerability",children:[]},{value:"How do I fix Untrusted Deserialization",id:"how-do-i-fix-untrusted-deserialization",children:[]},{value:"How do people attack Untrusted Deserialization flaws",id:"how-do-people-attack-untrusted-deserialization-flaws",children:[]}],d={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"untrusted-deserialization"},"Untrusted Deserialization"),(0,r.kt)("h2",{id:"what-is-untrusted-deserialization"},"What is Untrusted Deserialization"),(0,r.kt)("p",null,"Untrusted Deserialization occurs when an application deserializes remote data and executes code instructions from the incoming data as part of the process. This results in a remote code execution flaw when attackers embed custom commands into the serialized objects."),(0,r.kt)("h2",{id:"when-can-untrusted-deserialization-affect-my-application"},"When can Untrusted Deserialization affect my application"),(0,r.kt)("p",null,"Untrusted Deserialization affects many applications because serialization is often done by a third party library or framework that the application relies on. This vulnerability can occur if any part of the application deserializes data."),(0,r.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-an-untrusted-deserialization-vulnerability"},"How do I know if/where my application has an Untrusted Deserialization vulnerability"),(0,r.kt)("p",null,"Contrast Scan can detect if an application has Untrusted Deserialization by looking at its code."),(0,r.kt)("p",null,"Contrast Assess can detect if an application has Untrusted Deserialization as it is tested."),(0,r.kt)("p",null,"Contrast Protect can permit trusted serialization while blocking untrusted deserialization from exploiting a running system."),(0,r.kt)("h2",{id:"how-do-i-fix-untrusted-deserialization"},"How do I fix Untrusted Deserialization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Patch any libraries that have serialization flaws."),(0,r.kt)("li",{parentName:"ul"},"Use any serialization filters to create an allow-list of classes."),(0,r.kt)("li",{parentName:"ul"},"Use an alternate serialization format that does not mix data and code.")),(0,r.kt)("h2",{id:"how-do-people-attack-untrusted-deserialization-flaws"},"How do people attack Untrusted Deserialization flaws"),(0,r.kt)("p",null,"Various tools exist to attack deserialization flaws, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/frohoff/ysoserial"},"ysoserial")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pwntester/ysoserial.net"},"ysoserial.net"),"."),(0,r.kt)("p",null,"Deserialization ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GrrrDog/Java-Deserialization-Cheat-Sheet"},"attack cheat sheets")," exist for various languages."))}p.isMDXComponent=!0}}]);