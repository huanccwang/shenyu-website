"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[52495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,d=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24719:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"2.5.1",sidebar_position:3,keywords:["release-notes"],description:"release-notes"},o="2.5.1",i={unversionedId:"2.5.1-release",id:"2.5.1-release",isDocsHomePage:!1,title:"2.5.1",description:"release-notes",source:"@site/i18n/zh/docusaurus-plugin-content-docs-event/current/2.5.1-release.md",sourceDirName:".",slug:"/2.5.1-release",permalink:"/zh/event/2.5.1-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-event/current/2.5.1-release.md",version:"current",lastUpdatedBy:"xiaoyu",lastUpdatedAt:1682248351,formattedLastUpdatedAt:"2023/4/23",sidebarPosition:3,frontMatter:{title:"2.5.1",sidebar_position:3,keywords:["release-notes"],description:"release-notes"}},p=[{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",children:[]},{value:"\u589e\u5f3a",id:"\u589e\u5f3a",children:[]},{value:"\u91cd\u6784",id:"\u91cd\u6784",children:[]},{value:"\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u4fee\u590d",children:[]}],c={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"251"},"2.5.1"),(0,a.kt)("h3",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 brpc \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301nacos\u4e0d\u540c\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 mock \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u4f8b\u652f\u6301eureka"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301 API \u6587\u6863"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 sentinel \u63d2\u4ef6\u7684\u89c4\u5219\u5904\u7406\u53c2\u6570"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 e2e \u6d4b\u8bd5\u5f15\u64ce"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 casdoor\u63d2\u4ef6\u652f\u6301SSO"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 logging-tencent-cls \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 logging-clickhouse \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 logging-pulsar \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 key-auth \u63d2\u4ef6")),(0,a.kt)("h3",{id:"\u589e\u5f3a"},"\u589e\u5f3a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 motan \u5ba2\u6237\u7aef\u6ce8\u89e3"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 motan \u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 websocket \u5ba2\u6237\u7aef\u6ce8\u89e3"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 springcloud \u5ba2\u6237\u7aef\u6ce8\u89e3"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 springmvc \u5ba2\u6237\u7aef\u6ce8\u89e3")),(0,a.kt)("h3",{id:"\u91cd\u6784"},"\u91cd\u6784"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 API\u6587\u6863\u7684mock\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 logging-clickhouse \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 dubbo\u76f8\u5173maven\u4f9d\u8d56"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 sign \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0 ShenyuExtConfiguration"),(0,a.kt)("li",{parentName:"ol"},"\u79fb\u9664\u4e0d\u5fc5\u8981\u7684\u5355\u4f8b"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u5e76\u53d1\u573a\u666fmock\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 sdk \u6d4b\u8bd5"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 DefaultSignService"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 shenyu-admin \u89c4\u5219"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 ShaUtil"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ConcurrentModificationException"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d etcd \u6570\u636e\u540c\u6b65"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 sdk \u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u8bf7\u6c42\u8d85\u65f6"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784\u65e5\u5fd7\u6a21\u5757"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 springcloud \u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 Motan\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 admin \u6570\u636e\u540c\u6b65"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 tars \u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 alibaba-dubbo \u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 springmvc \u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 admin \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u968f\u673a\u7b97\u6cd5"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 logging-kafka \u63d2\u4ef6")),(0,a.kt)("h3",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u79fb\u9664\u591a\u4f59\u7684 cookie \u8bbe\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d appAuth \u5220\u9664\u903b\u8f91"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d Cryptor-Request \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ext \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u5347\u7ea7\u811a\u672c"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d Nacos \u6ce8\u518c\u7a7a\u6307\u9488\u95ee\u9898"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d sandbox json \u89e3\u6790"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u63d2\u4ef6\u66f4\u65b0\u65f6\u7684\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d postgresql \u811a\u672c"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d sentinel \u63d2\u4ef6\u7684\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d TencentClsLog\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u66f4\u65b0\u5bc6\u7801\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u9009\u62e9\u5668\u5206\u9875\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d request \u63d2\u4ef6\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d RateLimiter\u63d2\u4ef6\u5e76\u53d1\u5904\u7406\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d sign \u63d2\u4ef6\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d context-path \u63d2\u4ef6\u5f02\u5e38")))}s.isMDXComponent=!0}}]);