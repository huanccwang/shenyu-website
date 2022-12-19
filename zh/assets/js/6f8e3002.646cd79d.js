"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[87518],{3905:(n,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>y});var t=a(67294);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function s(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function r(n,e){if(null==n)return{};var a,t,o=function(n,e){if(null==n)return{};var a,t,o={},s=Object.keys(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||(o[a]=n[a]);return o}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(o[a]=n[a])}return o}var i=t.createContext({}),p=function(n){var e=t.useContext(i),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},c=function(n){var e=p(n.components);return t.createElement(i.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var a=n.components,o=n.mdxType,s=n.originalType,i=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),u=p(a),d=o,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return a?t.createElement(y,l(l({ref:e},c),{},{components:a})):t.createElement(y,l({ref:e},c))}));function y(n,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var s=a.length,l=new Array(s);l[0]=d;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=n,r[u]="string"==typeof n?n:o,l[1]=r;for(var p=2;p<s;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72491:(n,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var t=a(87462),o=(a(67294),a(3905));const s={sidebar_position:4,title:"K8s\u90e8\u7f72",keywords:["k8s"],description:"K8s\u90e8\u7f72"},l=void 0,r={unversionedId:"deployment/deployment-k8s",id:"version-2.4.2/deployment/deployment-k8s",isDocsHomePage:!1,title:"K8s\u90e8\u7f72",description:"K8s\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/deployment/deployment-k8s.md",sourceDirName:"deployment",slug:"/deployment/deployment-k8s",permalink:"/zh/docs/2.4.2/deployment/deployment-k8s",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/deployment/deployment-k8s.md",version:"2.4.2",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"K8s\u90e8\u7f72",keywords:["k8s"],description:"K8s\u90e8\u7f72"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Docker\u90e8\u7f72",permalink:"/zh/docs/2.4.2/deployment/deployment-docker"},next:{title:"Helm\u90e8\u7f72",permalink:"/zh/docs/2.4.2/deployment/deployment-helm"}},i=[{value:"\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528 h2 \u4f5c\u4e3a\u6570\u636e\u5e93",id:"\u793a\u4f8b\u4e00\u4f7f\u7528-h2-\u4f5c\u4e3a\u6570\u636e\u5e93",children:[{value:"1. \u521b\u5efa Namespace \u548c ConfigMap",id:"1-\u521b\u5efa-namespace-\u548c-configmap",children:[]},{value:"2. \u90e8\u7f72 shenyu-admin",id:"2-\u90e8\u7f72-shenyu-admin",children:[]},{value:"3. \u90e8\u7f72 shenyu-bootstrap",id:"3-\u90e8\u7f72-shenyu-bootstrap",children:[]}]},{value:"\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528 MySQL \u4f5c\u4e3a\u6570\u636e\u5e93",id:"\u793a\u4f8b\u4e8c\u4f7f\u7528-mysql-\u4f5c\u4e3a\u6570\u636e\u5e93",children:[{value:"1. \u521b\u5efa Namespace\u548c ConfigMap",id:"1-\u521b\u5efa-namespace\u548c-configmap",children:[]},{value:"2. \u521b\u5efa Endpoints \u4ee3\u7406\u5916\u90e8 MySQL",id:"2-\u521b\u5efa-endpoints-\u4ee3\u7406\u5916\u90e8-mysql",children:[]},{value:"3. \u90e8\u7f72 shenyu-admin",id:"3-\u90e8\u7f72-shenyu-admin",children:[]},{value:"4. \u90e8\u7f72 shenyu-bootstrap",id:"4-\u90e8\u7f72-shenyu-bootstrap",children:[]}]},{value:"\u6d4b\u8bd5\u8bbf\u95ee",id:"\u6d4b\u8bd5\u8bbf\u95ee",children:[]}],p={toc:i};function c(n){let{components:e,...a}=n;return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"K8s")," \u6765\u90e8\u7f72 ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76ee\u5f55"),(0,o.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u4e00. \u4f7f\u7528 h2 \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"1. \u521b\u5efa Namespace \u548c ConfigMap\n2. \u90e8\u7f72 shenyu-admin\n3. \u90e8\u7f72 shenyu-bootstrap\n")),(0,o.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u4e8c. \u4f7f\u7528 MySQL \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,o.kt)("p",{parentName:"blockquote"},"\u548c h2 \u8fc7\u7a0b\u7c7b\u4f3c\uff0c\u9700\u8981\u989d\u5916\u6ce8\u610f\u7684\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"1. \u9700\u8981\u4e0b\u8f7d mysql-connector.jar\uff0c\u5bb9\u5668\u542f\u52a8\u65f6\u4f1a\u6267\u884c\u4e0b\u8f7d\u547d\u4ee4\n2. \u9700\u8981\u6307\u5b9a\u5916\u90e8 MySQL \u6570\u636e\u5e93\u914d\u7f6e\uff0c\u901a\u8fc7 Endpoints \u6765\u4ee3\u7406\u5916\u90e8 MySQL \u6570\u636e\u5e93\n")),(0,o.kt)("p",{parentName:"blockquote"},"\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"1. \u521b\u5efa Namespace\u548c ConfigMap\n2. \u521b\u5efa Endpoints \u4ee3\u7406\u5916\u90e8 MySQL\n3. \u90e8\u7f72 shenyu-admin\n4. \u90e8\u7f72 shenyu-bootstrap\n"))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4e00\u4f7f\u7528-h2-\u4f5c\u4e3a\u6570\u636e\u5e93"},"\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528 h2 \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,o.kt)("h3",{id:"1-\u521b\u5efa-namespace-\u548c-configmap"},"1. \u521b\u5efa Namespace \u548c ConfigMap"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u521b\u5efa Namespace \u548c\u7f51\u5173\u7528\u5230\u7684\u914d\u7f6e\u6587\u4ef6")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-ns.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  shenyu-admin-application.yml: |\n    server:\n      port: 9095\n      address: 0.0.0.0\n    spring:\n      profiles:\n        active: h2\n      thymeleaf:\n        cache: true\n        encoding: utf-8\n        enabled: true\n        prefix: classpath:/static/\n        suffix: .html\n    mybatis:\n      config-location: classpath:/mybatis/mybatis-config.xml\n      mapper-locations: classpath:/mappers/*.xml\n    shenyu:\n      register:\n        registerType: http #http #zookeeper #etcd #nacos #consul\n        serverLists: #localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n          sessionTimeout: 5000\n          connectionTimeout: 2000\n          checked: true\n          zombieCheckTimes: 5\n          scheduledTime: 10\n          nacosNameSpace: ShenyuRegisterCenter\n      sync:\n        websocket:\n          enabled: true\n      aes:\n        secret:\n          key: 2095132720951327\n          iv: 6075877187097700\n      ldap:\n        enabled: false\n        url: ldap://xxxx:xxx\n        bind-dn: cn=xxx,dc=xxx,dc=xxx\n        password: xxxx\n        base-dn: ou=xxx,dc=xxx,dc=xxx\n        object-class: person\n        login-field: cn\n      jwt:\n        expired-seconds: 86400000\n      shiro:\n        white-list:\n          - /\n          - /favicon.*\n          - /static/**\n          - /index**\n          - /platform/login\n          - /websocket\n          - /error\n          - /actuator/health\n          - /swagger-ui.html\n          - /webjars/**\n          - /swagger-resources/**\n          - /v2/api-docs\n          - /csrf\n      swagger:\n        enable: true\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n  shenyu-admin-application-h2.yml: |\n    shenyu:\n      database:\n        dialect: h2\n        init_script: "sql-script/h2/schema.sql"\n        init_enable: true\n    spring:\n      datasource:\n        url: jdbc:h2:mem:~/shenyu;DB_CLOSE_DELAY=-1;MODE=MySQL;\n        username: sa\n        password: sa\n        driver-class-name: org.h2.Driver\n  shenyu-bootstrap-application.yml: |\n    server:\n      port: 9195\n      address: 0.0.0.0\n    spring:\n      main:\n        allow-bean-definition-overriding: true\n      application:\n        name: shenyu-bootstrap\n      cloud:\n        loadbalancer:\n          ribbon:\n            enabled: false\n        discovery:\n          enabled: false\n        nacos:\n          discovery:\n            server-addr: 127.0.0.1:8848 # Spring Cloud Alibaba Dubbo use this.\n            enabled: false\n    management:\n      health:\n        defaults:\n          enabled: false\n    shenyu:\n      netty:\n        tcp:\n          # set to false, user can custom the netty tcp server config.\n          webServerFactoryEnabled: true\n          selectCount: 1\n          workerCount: 4\n          serverSocketChannel:\n            soRcvBuf: 87380\n            soBackLog: 128\n            soReuseAddr: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: true\n            allocType: "pooled"\n          socketChannel:\n            soKeepAlive: false\n            soReuseAddr: false\n            soLinger: -1\n            tcpNoDelay: true\n            soRcvBuf: 87380\n            soSndBuf: 16384\n            ipTos: 0\n            allowHalfClosure: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: true\n            allocType: "pooled"\n      instance:\n        enabled: false\n        registerType: zookeeper #etcd #consul\n        serverLists: localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n      cross:\n        enabled: true\n        allowedHeaders:\n        allowedMethods: "*"\n        allowedOrigin: "*"\n        allowedExpose: "*"\n        maxAge: "18000"\n        allowCredentials: true\n      switchConfig:\n        local: true\n      file:\n        enabled: true\n        maxSize : 10\n      sync:\n        websocket:\n          urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n      exclude:\n        enabled: false\n        paths:\n          - /favicon.ico\n      fallback:\n        enabled: true\n      extPlugin:\n        path:\n        enabled: true\n        threads: 1\n        scheduleTime: 300\n        scheduleDelay: 30\n      scheduler:\n        enabled: false\n        type: fixed\n        threads: 16\n      upstreamCheck:\n        enabled: false\n        timeout: 3000\n        healthyThreshold: 1\n        unhealthyThreshold: 1\n        interval: 5000\n        printEnabled: true\n        printInterval: 60000\n    eureka:\n      client:\n        enabled: false\n        serviceUrl:\n          defaultZone: http://localhost:8761/eureka/\n      instance:\n        prefer-ip-address: true\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,o.kt)("h3",{id:"2-\u90e8\u7f72-shenyu-admin"},"2. \u90e8\u7f72 shenyu-admin"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u521b\u5efa\u7f51\u5173\u7ba1\u7406\u670d\u52a1")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-admin.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      volumes:\n      - name: shenyu-admin-application\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application.yml\n            path: shenyu-admin-application.yml\n      - name: shenyu-admin-application-h2\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application-h2.yml\n            path: shenyu-admin-application-h2.yml\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:2.4.2\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n        volumeMounts:\n        - name: shenyu-admin-application\n          mountPath: /opt/shenyu-admin/conf/application.yml\n          subPath: shenyu-admin-application.yml\n        - name: shenyu-admin-application-h2\n          mountPath: /opt/shenyu-admin/conf/application-h2.yml\n          subPath: shenyu-admin-application-h2.yml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-admin.yaml"))),(0,o.kt)("h3",{id:"3-\u90e8\u7f72-shenyu-bootstrap"},"3. \u90e8\u7f72 shenyu-bootstrap"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u521b\u5efa\u7f51\u5173\u670d\u52a1")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-bootstrap.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9195\n    targetPort: 9195\n    nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n      - name: shenyu-bootstrap-application\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-bootstrap-application.yml\n            path: shenyu-bootstrap-application.yml\n      containers:\n      - name: shenyu-bootstrap\n        image: apache/shenyu-bootstrap:2.4.2\n        ports:\n        - containerPort: 9195\n        env:\n        - name: TZ\n          value: Asia/Beijing\n        volumeMounts:\n        - name: shenyu-bootstrap-application\n          mountPath: /opt/shenyu-bootstrap/conf/application.yml\n          subPath: shenyu-bootstrap-application.yml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4e8c\u4f7f\u7528-mysql-\u4f5c\u4e3a\u6570\u636e\u5e93"},"\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528 MySQL \u4f5c\u4e3a\u6570\u636e\u5e93"),(0,o.kt)("h3",{id:"1-\u521b\u5efa-namespace\u548c-configmap"},"1. \u521b\u5efa Namespace\u548c ConfigMap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-ns.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  shenyu-admin-application.yml: |\n    server:\n      port: 9095\n      address: 0.0.0.0\n    spring:\n      profiles:\n        active: mysql\n      thymeleaf:\n        cache: true\n        encoding: utf-8\n        enabled: true\n        prefix: classpath:/static/\n        suffix: .html\n    mybatis:\n      config-location: classpath:/mybatis/mybatis-config.xml\n      mapper-locations: classpath:/mappers/*.xml\n    shenyu:\n      register:\n        registerType: http #http #zookeeper #etcd #nacos #consul\n        serverLists: #localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n          sessionTimeout: 5000\n          connectionTimeout: 2000\n          checked: true\n          zombieCheckTimes: 5\n          scheduledTime: 10\n          nacosNameSpace: ShenyuRegisterCenter\n      sync:\n        websocket:\n          enabled: true\n      aes:\n        secret:\n          key: 2095132720951327\n          iv: 6075877187097700\n      ldap:\n        enabled: false\n        url: ldap://xxxx:xxx\n        bind-dn: cn=xxx,dc=xxx,dc=xxx\n        password: xxxx\n        base-dn: ou=xxx,dc=xxx,dc=xxx\n        object-class: person\n        login-field: cn\n      jwt:\n        expired-seconds: 86400000\n      shiro:\n        white-list:\n          - /\n          - /favicon.*\n          - /static/**\n          - /index**\n          - /platform/login\n          - /websocket\n          - /error\n          - /actuator/health\n          - /swagger-ui.html\n          - /webjars/**\n          - /swagger-resources/**\n          - /v2/api-docs\n          - /csrf\n      swagger:\n        enable: true\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n  shenyu-admin-application-mysql.yml: |\n    shenyu:\n      database:\n        dialect: mysql\n        init_script: "sql-script/mysql/schema.sql"\n        init_enable: true\n    spring:\n      datasource:\n        url: jdbc:mysql://mysql.shenyu.svc.cluster.local:3306/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false\n        username: {your_mysql_user}\n        password: {your_mysql_password}\n        driver-class-name: com.mysql.jdbc.Driver\n  shenyu-bootstrap-application.yml: |\n    server:\n      port: 9195\n      address: 0.0.0.0\n    spring:\n      main:\n        allow-bean-definition-overriding: true\n      application:\n        name: shenyu-bootstrap\n      cloud:\n        loadbalancer:\n          ribbon:\n            enabled: false\n        discovery:\n          enabled: false\n        nacos:\n          discovery:\n            server-addr: 127.0.0.1:8848 # Spring Cloud Alibaba Dubbo use this.\n            enabled: false\n    management:\n      health:\n        defaults:\n          enabled: false\n    shenyu:\n      netty:\n        tcp:\n          # set to false, user can custom the netty tcp server config.\n          webServerFactoryEnabled: true\n          selectCount: 1\n          workerCount: 4\n          serverSocketChannel:\n            soRcvBuf: 87380\n            soBackLog: 128\n            soReuseAddr: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: true\n            allocType: "pooled"\n          socketChannel:\n            soKeepAlive: false\n            soReuseAddr: false\n            soLinger: -1\n            tcpNoDelay: true\n            soRcvBuf: 87380\n            soSndBuf: 16384\n            ipTos: 0\n            allowHalfClosure: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: true\n            allocType: "pooled"\n      instance:\n        enabled: false\n        registerType: zookeeper #etcd #consul\n        serverLists: localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n      cross:\n        enabled: true\n        allowedHeaders:\n        allowedMethods: "*"\n        allowedOrigin: "*"\n        allowedExpose: "*"\n        maxAge: "18000"\n        allowCredentials: true\n      switchConfig:\n        local: true\n      file:\n        enabled: true\n        maxSize : 10\n      sync:\n        websocket:\n          urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n      exclude:\n        enabled: false\n        paths:\n          - /favicon.ico\n      fallback:\n        enabled: true\n      extPlugin:\n        path:\n        enabled: true\n        threads: 1\n        scheduleTime: 300\n        scheduleDelay: 30\n      scheduler:\n        enabled: false\n        type: fixed\n        threads: 16\n      upstreamCheck:\n        enabled: false\n        timeout: 3000\n        healthyThreshold: 1\n        unhealthyThreshold: 1\n        interval: 5000\n        printEnabled: true\n        printInterval: 60000\n    eureka:\n      client:\n        enabled: false\n        serviceUrl:\n          defaultZone: http://localhost:8761/eureka/\n      instance:\n        prefer-ip-address: true\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,o.kt)("h3",{id:"2-\u521b\u5efa-endpoints-\u4ee3\u7406\u5916\u90e8-mysql"},"2. \u521b\u5efa Endpoints \u4ee3\u7406\u5916\u90e8 MySQL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-ep.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Service\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nspec:\n  ports:\n  - port: 3306\n    name: mysql\n    targetPort: {your_mysql_port}\n---\nkind: Endpoints\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nsubsets:\n- addresses:\n  - ip: {your_mysql_ip}\n  ports:\n  - port: {your_mysql_port}\n    name: mysql\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ep.yaml"))),(0,o.kt)("h3",{id:"3-\u90e8\u7f72-shenyu-admin"},"3. \u90e8\u7f72 shenyu-admin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-admin.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      volumes:\n      - name: shenyu-admin-application\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application.yml\n            path: shenyu-admin-application.yml\n      - name: shenyu-admin-application-mysql\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application-mysql.yml\n            path: shenyu-admin-application-mysql.yml\n      - name: mysql-connector-volume\n        emptyDir: {}\n      initContainers:\n      - name: download-mysql-jar\n        image: busybox:1.35.0\n        command: [ \"sh\",\"-c\"]\n        args: [\"wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.23/mysql-connector-java-8.0.23.jar;\n            wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.23/mysql-connector-java-8.0.23.jar.md5;\n            if [ $(md5sum mysql-connector-java-8.0.23.jar | cut -d ' ' -f1) = $(cat mysql-connector-java-8.0.23.jar.md5) ];\n            then echo success;\n            else echo failed;\n            exit 1;\n            fi;\n            mv /mysql-connector-java-8.0.23.jar /opt/shenyu-admin/ext-lib/mysql-connector-java.jar\" ]\n        volumeMounts:\n        - name: mysql-connector-volume\n          mountPath: /opt/shenyu-admin/ext-lib\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:2.4.2\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n        - name: SPRING_PROFILES_ACTIVE\n          value: mysql\n        volumeMounts:\n        - name: shenyu-admin-application\n          mountPath: /opt/shenyu-admin/conf/application.yml\n          subPath: shenyu-admin-application.yml\n        - name: shenyu-admin-application-mysql\n          mountPath: /opt/shenyu-admin/conf/application-mysql.yml\n          subPath: shenyu-admin-application-mysql.yml\n        - name: mysql-connector-volume\n          mountPath: /opt/shenyu-admin/ext-lib\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-admin.yaml"))),(0,o.kt)("h3",{id:"4-\u90e8\u7f72-shenyu-bootstrap"},"4. \u90e8\u7f72 shenyu-bootstrap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 shenyu-bootstrap.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u4f7f\u7528 nodeport \u65b9\u5f0f\u66b4\u9732\u7aef\u53e3\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9195\n    targetPort: 9195\n    nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n      - name: shenyu-bootstrap-application\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-bootstrap-application.yml\n            path: shenyu-bootstrap-application.yml\n      containers:\n      - name: shenyu-bootstrap\n        image: apache/shenyu-bootstrap:2.4.2\n        ports:\n        - containerPort: 9195\n        env:\n        - name: TZ\n          value: Asia/Beijing\n        volumeMounts:\n        - name: shenyu-bootstrap-application\n          mountPath: /opt/shenyu-bootstrap/conf/application.yml\n          subPath: shenyu-bootstrap-application.yml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u8bbf\u95ee"},"\u6d4b\u8bd5\u8bbf\u95ee"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u5730\u5740"),"\uff1ahttp://{K8S_CLUSTER_IP}:31095/"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8d26\u53f7\u5bc6\u7801"),"\uff1aadmin/123456"))}c.isMDXComponent=!0}}]);