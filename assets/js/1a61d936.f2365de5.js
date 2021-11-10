"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[2863],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3875:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"Bangladesh JUG",title:"Securing and Exploiting Java Applications",authors:["costlow"],tags:["java","video"]},c=void 0,u={permalink:"/blog/Bangladesh JUG",editUrl:"https://github.com/erikcostlow/contrast-dev-site/edit/main/website/blog/blog/2021-09-26/index.md",source:"@site/blog/2021-09-26/index.md",title:"Securing and Exploiting Java Applications",description:"Really excited to speak at the Bangladesh Java User Group with Bazlur and Oronno.",date:"2021-09-26T00:00:00.000Z",formattedDate:"September 26, 2021",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"video",permalink:"/blog/tags/video"}],readingTime:.565,truncated:!1,authors:[{name:"Erik Costlow",title:"DevRel",imageURL:"https://github.com/erikcostlow.png",key:"costlow"}],prevItem:{title:"Capture the Flag, Solution Write-Up",permalink:"/blog/CTF Write-Up"},nextItem:{title:"Journey to Jakarta Podcast",permalink:"/blog/Podcast - Jakarta EE"}},p={authorsImageUrls:[void 0]},s=[{value:"Presentation",id:"presentation",children:[]}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Really excited to speak at the Bangladesh Java User Group with Bazlur and Oronno."),(0,o.kt)("p",null,'The best question I got after was about where to start in security, given that developers have limited time. In my opinion the best place to start is narrowing the scope ot "security" to limit it to what\'s relevant to your application.'),(0,o.kt)("h2",{id:"presentation"},"Presentation"),(0,o.kt)("p",null,"OpenJDK 17 makes the interesting decision that deprecating a security feature (the SecurityManager) can actually improve security of the platform and running applications, setting out a path to remove a feature that hasn\u2019t been used and hasn\u2019t blocked many exploits."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/78O8lmS0jRE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0}}]);