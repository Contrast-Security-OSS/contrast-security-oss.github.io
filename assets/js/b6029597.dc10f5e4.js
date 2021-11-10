"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[7333],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2433:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),a=["components"],c={},l="Expression Language Injection / EL Injection",s={unversionedId:"learn-devsec/vulnerabilities/el-injection",id:"learn-devsec/vulnerabilities/el-injection",isDocsHomePage:!1,title:"Expression Language Injection / EL Injection",description:"What is Expression Language Injection (EL Injection)",source:"@site/docs/learn-devsec/vulnerabilities/el-injection.mdx",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/el-injection",permalink:"/docs/learn-devsec/vulnerabilities/el-injection",editUrl:"https://github.com/erikcostlow/contrast-dev-site/edit/main/website/docs/learn-devsec/vulnerabilities/el-injection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"Untrusted Deserialization",permalink:"/docs/learn-devsec/vulnerabilities/deserialization"},next:{title:"Hardcoded Cryptographic Key",permalink:"/docs/learn-devsec/vulnerabilities/hardcoded-key"}},u=[{value:"What is Expression Language Injection (EL Injection)",id:"what-is-expression-language-injection-el-injection",children:[]},{value:"When can EL Injection affect my application",id:"when-can-el-injection-affect-my-application",children:[]},{value:"How do I know if/where my application has an EL Injection vulnerability",id:"how-do-i-know-ifwhere-my-application-has-an-el-injection-vulnerability",children:[]},{value:"How do I fix EL Injection",id:"how-do-i-fix-el-injection",children:[]},{value:"How do people attack EL Injection flaws",id:"how-do-people-attack-el-injection-flaws",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expression-language-injection--el-injection"},"Expression Language Injection / EL Injection"),(0,r.kt)("h2",{id:"what-is-expression-language-injection-el-injection"},"What is Expression Language Injection (EL Injection)"),(0,r.kt)("p",null,"Expression Language Injection occurs when a remote attacker can get their input into the processing of Expression Language processing to run their own code.\nThis is a type of code injection because it lets attackers run code of their choosing on your server."),(0,r.kt)("h2",{id:"when-can-el-injection-affect-my-application"},"When can EL Injection affect my application"),(0,r.kt)("p",null,"EL Injection affects applications that use the Expression Language. Most often this is in Java EE web applications.\nOther languages generally do not use Expression Language but would be vulnerable if they run user input as code in any domain-specific language."),(0,r.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-an-el-injection-vulnerability"},"How do I know if/where my application has an EL Injection vulnerability"),(0,r.kt)("p",null,"Contrast Assess monitors execution and can detect EL Injection vulnerabilities."),(0,r.kt)("p",null,"Contrast Protect can defend EL Injection vulnerabilities."),(0,r.kt)("h2",{id:"how-do-i-fix-el-injection"},"How do I fix EL Injection"),(0,r.kt)("p",null,"Developers should avoid running remote input as part of Expression Language statements. Instead, build specific features as a capability that acts on input rather than running code."),(0,r.kt)("h2",{id:"how-do-people-attack-el-injection-flaws"},"How do people attack EL Injection flaws"),(0,r.kt)("p",null,"Attackers often attempt to provide new Expression Language statements. A common route is to try to execute system commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{Runtime.exec("command")}\n')))}d.isMDXComponent=!0}}]);