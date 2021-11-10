"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[4945],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},479:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],c={},l="Log Injection",s={unversionedId:"learn-devsec/vulnerabilities/log-injection",id:"learn-devsec/vulnerabilities/log-injection",isDocsHomePage:!1,title:"Log Injection",description:"What is Log Injection",source:"@site/docs/learn-devsec/vulnerabilities/log-injection.mdx",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/log-injection",permalink:"/docs/learn-devsec/vulnerabilities/log-injection",editUrl:"https://github.com/erikcostlow/contrast-dev-site/edit/main/website/docs/learn-devsec/vulnerabilities/log-injection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"LDAP Injection",permalink:"/docs/learn-devsec/vulnerabilities/ldap-injection"},next:{title:"NoSQL Injection",permalink:"/docs/learn-devsec/vulnerabilities/nosql-injection"}},p=[{value:"What is Log Injection",id:"what-is-log-injection",children:[]},{value:"When can Log Injection affect my application",id:"when-can-log-injection-affect-my-application",children:[]},{value:"How do I know if/where my application has a Log Injection vulnerability",id:"how-do-i-know-ifwhere-my-application-has-a-log-injection-vulnerability",children:[]},{value:"How do I fix Log Injection",id:"how-do-i-fix-log-injection",children:[]},{value:"How do people attack Log Injection flaws",id:"how-do-people-attack-log-injection-flaws",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"log-injection"},"Log Injection"),(0,r.kt)("h2",{id:"what-is-log-injection"},"What is Log Injection"),(0,r.kt)("p",null,"Log Injection occurs when remote input is used as part of a log statement without sanitization.\nAttackers can insert new lines and attempt add additional log statements of things that did not happen or simply pollute the ability of logs to be parsed."),(0,r.kt)("h2",{id:"when-can-log-injection-affect-my-application"},"When can Log Injection affect my application"),(0,r.kt)("p",null,"Log Injection affects applications can affect any application that logs data to files, which is most applications.\nLog Injection is commonly a nuisance vulnerability more than a major risk that can compromise an organization."),(0,r.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-a-log-injection-vulnerability"},"How do I know if/where my application has a Log Injection vulnerability"),(0,r.kt)("p",null,"Contrast Assess can detect log injection vulnerabilities."),(0,r.kt)("h2",{id:"how-do-i-fix-log-injection"},"How do I fix Log Injection"),(0,r.kt)("p",null,"System operators can stream logs remotely or index logs into systems where things like new lines do not impact the records."),(0,r.kt)("h2",{id:"how-do-people-attack-log-injection-flaws"},"How do people attack Log Injection flaws"),(0,r.kt)("p",null,"Attackers generally append new lines to various parameters and then add custom timestamps that follow common logging conventions.\nAs a result when someone goes to parse logs as a file, it becomes difficult to read and hides certain actions."))}d.isMDXComponent=!0}}]);