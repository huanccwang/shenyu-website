"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[93076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79146:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={title:"OAuth2 Plugin",keywords:["OAuth2"],description:"OAuth2 plugin"},o=void 0,u={unversionedId:"plugin-center/authority-and-certification/oauth2-plugin",id:"version-2.4.2/plugin-center/authority-and-certification/oauth2-plugin",isDocsHomePage:!1,title:"OAuth2 Plugin",description:"OAuth2 plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/authority-and-certification/oauth2-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/oauth2-plugin",permalink:"/docs/2.4.2/plugin-center/authority-and-certification/oauth2-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/authority-and-certification/oauth2-plugin.md",version:"2.4.2",frontMatter:{title:"OAuth2 Plugin",keywords:["OAuth2"],description:"OAuth2 plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"JWT plugin",permalink:"/docs/2.4.2/plugin-center/authority-and-certification/jwt-plugin"},next:{title:"Sign Plugin",permalink:"/docs/2.4.2/plugin-center/authority-and-certification/sign-plugin"}},l=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2")," plugin is implemented using ",(0,r.kt)("inlineCode",{parentName:"li"},"Webflux OAuth2"),", used to support ",(0,r.kt)("inlineCode",{parentName:"li"},"OAuth")," protocol.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, ",(0,r.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,r.kt)("inlineCode",{parentName:"p"},"oauth2")," set to enable. If you don't want to use this function, please disable this plugin in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"."),(0,r.kt)("img",{src:"/img/shenyu/plugin/oauth2/oauth2_open_en.jpg",width:"80%",height:"80%"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add configuration mode in plugin editing."))),(0,r.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add support for ",(0,r.kt)("inlineCode",{parentName:"li"},"oauth2")," to the pom file of the gateway")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu oauth2 plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-oauth2</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu oauth2 plugin end--\x3e\n  \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure the relevant configuration of ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.security.oauth2")," in the configuration file of the gateway. For detailed configuration instructions, please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-security/site/docs/current/reference/html5/#webflux-oauth2"},"Spring Webflux OAuth2")),(0,r.kt)("li",{parentName:"ul"},"Configure the selector and rule as the request address that you need ",(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2")," authorization, and release all requests by default. For more instructions on selector and rule configuration, please refer to: ",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),".")))}c.isMDXComponent=!0}}]);