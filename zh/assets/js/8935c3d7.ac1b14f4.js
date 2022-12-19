"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[70696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,y=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:a,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29918:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"Mqtt \u63d2\u4ef6",keywords:["Mqtt"],description:"Mqtt \u63d2\u4ef6"},p=void 0,l={unversionedId:"plugin-center/proxy/mqtt-plugin",id:"version-2.5.0/plugin-center/proxy/mqtt-plugin",isDocsHomePage:!1,title:"Mqtt \u63d2\u4ef6",description:"Mqtt \u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/proxy/mqtt-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/mqtt-plugin",permalink:"/zh/docs/plugin-center/proxy/mqtt-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/plugin-center/proxy/mqtt-plugin.md",version:"2.5.0",frontMatter:{title:"Mqtt \u63d2\u4ef6",keywords:["Mqtt"],description:"Mqtt \u63d2\u4ef6"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Motan\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/motan-plugin"},next:{title:"Sofa\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/sofa-plugin"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5f15\u5165 Mqtt \u7f51\u5173\u7684\u63d2\u4ef6\u652f\u6301",id:"\u5f15\u5165-mqtt-\u7f51\u5173\u7684\u63d2\u4ef6\u652f\u6301",children:[]},{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u524d MQTT \u534f\u8bae\u5b9e\u73b0\u4e3a 3.1 \u7248\u672c\uff0c\u5b9e\u73b0\u7684\u6807\u8bc6\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"connect"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"publish"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"unsubscribe"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"disconnect"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"PingReq"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"PingResp"),"\uff0c\u4ee5\u53ca QoS 0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f3a\u5c11 retain\u3001Qos\uff081\uff0c2\uff09 \u5b9e\u73b0\uff0c\u4ee5\u53ca\u96c6\u7fa4\u6a21\u5f0f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5177\u4f53\u8bf7\u770b ",(0,a.kt)("a",{parentName:"p",href:"http://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html"},"http://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html")," \u5185\u5bb9"))),(0,a.kt)("h2",{id:"\u5f15\u5165-mqtt-\u7f51\u5173\u7684\u63d2\u4ef6\u652f\u6301"},"\u5f15\u5165 Mqtt \u7f51\u5173\u7684\u63d2\u4ef6\u652f\u6301"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 pom.xml \u6587\u4ef6\u4e2d\u5f15\u5165\u8fd9\u4e9b\u4f9d\u8d56\u9879\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu mqtt plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-mqtt</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u914d\u7f6e"},"\u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"port\uff1aMqtt\u76d1\u542c\u7aef\u53e3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"bossGroupThreadCount\uff1aNetty\u4e3b\u7ebf\u7a0b\u6c60\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a1\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"maxPayloadSize\uff1a\u6700\u5927\u6709\u6548\u8f7d\u8377\u5927\u5c0f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"workerGroupThreadCount\uff1aNetty\u5b50\u7ebf\u7a0b\u6c60\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a12\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"username\uff1a\u7528\u6237\u540d\uff0c\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"password\uff1a\u5bc6\u7801\uff0c\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"isEncryptPassword\uff1a\u662f\u5426\u52a0\u5bc6\u5bc6\u7801\uff0c\u9ed8\u8ba4\u4e3a false \u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"encryptMode\uff1a\u52a0\u5bc6\u6a21\u5f0f\uff0c\u76ee\u524d\u4ec5\u652f\u6301MD5\uff0c\u5176\u4ed6\u52a0\u5bc6\u65b9\u5f0f\u53ef\u4ee5\u81ea\u884c\u5b9e\u73b0\uff0c\u76f8\u5173\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.protocol.mqtt.utils.EncryptUtil"),"\u8fd9\u4e2a\u52a0\u5bc6\u5de5\u5177\u7c7b\u7684\u5b9e\u73b0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"leakDetectorLevel\uff1a\u8d44\u6e90\u6cc4\u9732\u68c0\u6d4b\u7ea7\u522b\uff0c\u9ed8\u8ba4DISABLED\u3002"))),(0,a.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mqtt\u63d2\u4ef6\u6ca1\u6709\u9009\u62e9\u5668\u914d\u7f6e\u548c\u89c4\u5219\u914d\u7f6e\u3002")))}c.isMDXComponent=!0}}]);