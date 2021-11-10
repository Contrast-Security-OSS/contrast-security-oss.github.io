"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[8100],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},s="Look at Results",u={unversionedId:"getting-started/keep-going/look-at-results",id:"getting-started/keep-going/look-at-results",isDocsHomePage:!1,title:"Look at Results",description:"Security results are made available in a central console for review, where they can integrate into other systems.",source:"@site/docs/getting-started/keep-going/look-at-results.md",sourceDirName:"getting-started/keep-going",slug:"/getting-started/keep-going/look-at-results",permalink:"/docs/getting-started/keep-going/look-at-results",editUrl:"https://github.com/erikcostlow/contrast-dev-site/edit/main/website/docs/getting-started/keep-going/look-at-results.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Continuous Security",permalink:"/docs/getting-started/keep-going/index"},next:{title:"Integrations",permalink:"/docs/getting-started/keep-going/integrations"}},c=[{value:"Viewing your results (Web)",id:"viewing-your-results-web",children:[{value:"Interpreting a result",id:"interpreting-a-result",children:[]},{value:"Verifying your fix with a re-test",id:"verifying-your-fix-with-a-re-test",children:[]}]},{value:"Viewing your results (IDE Plugin)",id:"viewing-your-results-ide-plugin",children:[]}],p={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"look-at-results"},"Look at Results"),(0,a.kt)("p",null,"Security results are made available in a central console for review, where they can integrate into other systems.",(0,a.kt)("br",null),"\nDevelopers benefit from looking at security results because they can act on and fix any issues.\nSecurity teams benefit from looking at results to understand where they can help. from using the analyzer to improving architecture by partnering up."),(0,a.kt)("p",null,"Results can be viewed in several ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#viewing-your-results-web"},"Through a web browser")," (most common)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#viewing-your-results-ide-plugin"},"Through an IDE plugin (for developers)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.contrastsecurity.com/application-lifecycle-integrations"},"Linked with other systems"),", such as in-chat links when new vulnerabilities are found.")),(0,a.kt)("h2",{id:"viewing-your-results-web"},"Viewing your results (Web)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your Contrast UI console."),(0,a.kt)("li",{parentName:"ol"},"Locate your application on the Applications tab."),(0,a.kt)("li",{parentName:"ol"},"Select the vulnerabilities tab and open an issue.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How to view a result",src:n(2234).Z})),(0,a.kt)("h3",{id:"interpreting-a-result"},"Interpreting a result"),(0,a.kt)("p",null,"Vulnerabilities are split into different severities. Developers focused on fixing vulnerabilities should focus on Critical issues first."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Overview")," section explains what the vulnerability is and how it was observed in the application."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Details")," tab provides a code-level stacktrace that explains how data moved in the application to locate this vulnerability. This tab contains the most information relevant for developers to fix an issue in code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How to Fix")," provides some guidance on what secure code looks like compared to vulnerable code. Developers should compare this against code present on the Details tab.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Overview, Details, How to Fix",src:n(4153).Z})),(0,a.kt)("h3",{id:"verifying-your-fix-with-a-re-test"},"Verifying your fix with a re-test"),(0,a.kt)("p",null,"Once you fix a result, simply re-run the impacted code with the security monitoring agent. The agent will detect any related changes to the code and automatically close the issue."),(0,a.kt)("h2",{id:"viewing-your-results-ide-plugin"},"Viewing your results (IDE Plugin)"),(0,a.kt)("p",null,"Contrast offers the ability to view (and often generate) security results in an IDE plugin. The benefit is that certain links and elements can navigate directly to the code in your editor, and new security results can stream to you as they are discovered."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.contrastsecurity.com/application-lifecycle-integrations"},"Obtain your plugin")," for many IDEs, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Eclipse"),(0,a.kt)("li",{parentName:"ul"},"IntelliJ"),(0,a.kt)("li",{parentName:"ul"},"Visual Studio / VS Code"),(0,a.kt)("li",{parentName:"ul"},"Many others")))}d.isMDXComponent=!0},2234:function(e,t,n){t.Z=n.p+"assets/images/look-at-results-app-0c285a356013a0fea7b1e91c279dc1be.png"},4153:function(e,t,n){t.Z=n.p+"assets/images/look-at-results-details-fbbd23a2552d53f3c95790384e9b763f.png"}}]);