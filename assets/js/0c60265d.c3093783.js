"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[57],{3905:function(e,r,n){n.d(r,{Zo:function(){return m},kt:function(){return v}});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),c=function(e){var r=o.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},m=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(n),v=t,d=u["".concat(i,".").concat(v)]||u[v]||p[v]||s;return n?o.createElement(d,l(l({ref:r},m),{},{components:n})):o.createElement(d,l({ref:r},m))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,l=new Array(s);l[0]=u;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,l[1]=a;for(var c=2;c<s;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9461:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var o=n(7462),t=n(3366),s=(n(7294),n(3905)),l=["components"],a={id:"promise\u4f7f\u7528",sidebar_label:"Promise\u4f7f\u7528",title:"Promise",slug:"/front-end/javaSciprt/promise/promise\u4f7f\u7528"},i=void 0,c={unversionedId:"front-end/javaScript/promise/promise\u4f7f\u7528",id:"front-end/javaScript/promise/promise\u4f7f\u7528",title:"Promise",description:"\u4f7f\u7528Promis\u4e4b\u524d",source:"@site/docs/front-end/javaScript/promise/promise\u4f7f\u7528.md",sourceDirName:"front-end/javaScript/promise",slug:"/front-end/javaSciprt/promise/promise\u4f7f\u7528",permalink:"/front-end/javaSciprt/promise/promise\u4f7f\u7528",editUrl:"https://github.com/wuyuehui/wuyuehui.github.io/edit/main/docs/front-end/javaScript/promise/promise\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{id:"promise\u4f7f\u7528",sidebar_label:"Promise\u4f7f\u7528",title:"Promise",slug:"/front-end/javaSciprt/promise/promise\u4f7f\u7528"},sidebar:"docs",previous:{title:"JavaScript",permalink:"/category/javascript"}},m=[{value:"\u4f7f\u7528Promis\u4e4b\u524d",id:"\u4f7f\u7528promis\u4e4b\u524d",children:[],level:2},{value:"Promise\u57fa\u672c\u6982\u5ff5",id:"promise\u57fa\u672c\u6982\u5ff5",children:[],level:2},{value:"Promise\u4ee3\u7801\u7ed3\u6784",id:"promise\u4ee3\u7801\u7ed3\u6784",children:[],level:2},{value:"Promise\u5c1d\u8bd5",id:"promise\u5c1d\u8bd5",children:[],level:2},{value:"Promise\u7684resolve\u53c2\u6570",id:"promise\u7684resolve\u53c2\u6570",children:[{value:"resolve\u666e\u901a\u7684\u503c\u6216\u8005\u666e\u901a\u5bf9\u8c61",id:"resolve\u666e\u901a\u7684\u503c\u6216\u8005\u666e\u901a\u5bf9\u8c61",children:[],level:3},{value:"resolve\u4e00\u4e2aPromise",id:"resolve\u4e00\u4e2apromise",children:[],level:3},{value:"resolve\u6709then\u65b9\u6cd5\u7684\u5bf9\u8c61(\u5b9e\u73b0\u4e86thenable)",id:"resolve\u6709then\u65b9\u6cd5\u7684\u5bf9\u8c61\u5b9e\u73b0\u4e86thenable",children:[],level:3}],level:2},{value:"Promise\u5bf9\u8c61\u7684then\u65b9\u6cd5",id:"promise\u5bf9\u8c61\u7684then\u65b9\u6cd5",children:[{value:"\u540c\u4e00\u4e2aPromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21then\u65b9\u6cd5",id:"\u540c\u4e00\u4e2apromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21then\u65b9\u6cd5",children:[],level:3},{value:"then\u65b9\u6cd5\u94fe\u5f0f\u8c03\u7528",id:"then\u65b9\u6cd5\u94fe\u5f0f\u8c03\u7528",children:[],level:3}],level:2},{value:"Promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5",id:"promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5",children:[{value:"executor\u629b\u51fa\u5f02\u5e38\u65f6, \u4f1a\u8c03\u7528\u9519\u8bef(\u62d2\u7edd)\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570\u7684",id:"executor\u629b\u51fa\u5f02\u5e38\u65f6-\u4f1a\u8c03\u7528\u9519\u8bef\u62d2\u7edd\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570\u7684",children:[],level:3},{value:"\u4e5f\u53ef\u4ee5\u901a\u8fc7catch\u65b9\u6cd5\u6765\u4f20\u5165\u9519\u8bef(\u62d2\u7edd)\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570",id:"\u4e5f\u53ef\u4ee5\u901a\u8fc7catch\u65b9\u6cd5\u6765\u4f20\u5165\u9519\u8bef\u62d2\u7edd\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570",children:[],level:3},{value:"\u540c\u4e00\u4e2aPromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21catch\u65b9\u6cd5",id:"\u540c\u4e00\u4e2apromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21catch\u65b9\u6cd5",children:[],level:3},{value:"catch\u65b9\u6cd5\u7684\u8fd4\u56de\u503c",id:"catch\u65b9\u6cd5\u7684\u8fd4\u56de\u503c",children:[],level:3}],level:2},{value:"Promise\u5bf9\u8c61\u7684finall\u65b9\u6cd5",id:"promise\u5bf9\u8c61\u7684finall\u65b9\u6cd5",children:[],level:2},{value:"Promise\u7c7b\u7684resolve\u65b9\u6cd5",id:"promise\u7c7b\u7684resolve\u65b9\u6cd5",children:[],level:2},{value:"Promise\u7c7b\u7684reject\u65b9\u6cd5",id:"promise\u7c7b\u7684reject\u65b9\u6cd5",children:[],level:2}],p={toc:m};function u(e){var r=e.components,n=(0,t.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4f7f\u7528promis\u4e4b\u524d"},"\u4f7f\u7528Promis\u4e4b\u524d"),(0,s.kt)("p",null,"\u5728\u4ecb\u7ecdPromise\u4e4b\u524d\uff0c\u9700\u8981\u8bf4\u4e00\u4e0b\u5728\u6ca1\u6709Promise\u4e4b\u524d\uff0c\u6211\u4eec\u4e00\u822c\u662f\u5982\u4f55\u5904\u7406\u5f02\u6b65\u4efb\u52a1\u7684\u3002"),(0,s.kt)("p",null,"\u5982\u4e0b\uff0c\u4ee5\u524d\u6211\u4eec\u90fd\u662f\u4f7f\u7528",(0,s.kt)("strong",{parentName:"p"},"\u56de\u8c03\u51fd\u6570"),"\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u5904\u7406\u7684\uff0c\u56e0\u4e3a\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u662f\u4e0d\u80fd\u76f4\u63a5return\u5f97\u5230\u6211\u4eec\u60f3\u8981\u7684\u503c\u7684\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6,9}","{6,9}":!0},'function requestData(url, successCallback, failureCallback) {\n    // \u6a21\u62df\u7f51\u7edc\u8bf7\u6c42\n    setTimeout(() => {\n        if (url === "wyh") {\n            let result = "\u8bf7\u6c42\u6210\u529f"\n            successCallback(result)\n        } else {\n            let errMessage = "\u8bf7\u6c42\u5931\u8d25, url\u9519\u8bef"\n            failureCallback(errMessage)\n        }\n    }, 1000);\n}\n\nrequestData("wyh", (res) => {\n    console.log(res)\n}, (err) => {\n    console.log(err)\n})\n\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"\u8fd9\u79cd\u56de\u8c03\u7684\u65b9\u5f0f\u6709\u5f88\u591a\u7684\u5f0a\u7aef:",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u6211\u4eec\u81ea\u5df1\u5c01\u88c5\u7684requestData,\u90a3\u4e48\u6211\u4eec\u5728\u5c01\u88c5\u7684\u65f6\u5019\u5fc5\u987b\u8981\u81ea\u5df1\u8bbe\u8ba1\u597dcallback\u540d\u79f0, \u5e76\u4e14\u4f7f\u7528\u597d"),(0,s.kt)("li",{parentName:"ol"},"\u5982\u679c\u6211\u4eec\u4f7f\u7528\u7684\u662f\u522b\u4eba\u5c01\u88c5\u7684requestData\u6216\u8005\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93, \u90a3\u4e48\u6211\u4eec\u5fc5\u987b\u53bb\u770b\u522b\u4eba\u7684\u6e90\u7801\u6216\u8005\u6587\u6863, \u624d\u77e5\u9053\u5b83\u8fd9\u4e2a\u51fd\u6570\u9700\u8981\u600e\u4e48\u53bb\u83b7\u53d6\u5230\u7ed3\u679c")))))),(0,s.kt)("p",null,"\u6240\u4ee5\u6709\u4e86Promise\u7684\u8bde\u751f\uff0c\u4e00\u79cd",(0,s.kt)("strong",{parentName:"p"},"\u66f4\u89c4\u8303/\u66f4\u597d\u7684"),"\u65b9\u6848(\u89c4\u8303\u597d\u4e86\u6240\u6709\u7684\u4ee3\u7801\u7f16\u5199\u903b\u8f91) "),(0,s.kt)("h2",{id:"promise\u57fa\u672c\u6982\u5ff5"},"Promise\u57fa\u672c\u6982\u5ff5"),(0,s.kt)("p",null,"Promise\u662f\u4e00\u4e2a\u7c7b\uff0c\u4e2d\u6587\u53ef\u4ee5\u7ffb\u8bd1\u6210 \u627f\u8bfa\u3001\u8bb8\u8bfa \u3001\u671f\u7ea6\u3002"),(0,s.kt)("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u7ed9\u4e88\u8c03\u7528\u8005\u4e00\u4e2a\u627f\u8bfa(\u6bd4\u5982\u5f85\u4f1a\u513f\u6211\u4f1a\u7ed9\u4f60\u56de\u8c03\u6570\u636e\u65f6)\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2aPromise\u7684\u5bf9\u8c61\u3002\u5728\u901a\u8fc7new\u521b\u5efaPromise\u5bf9\u8c61\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a",(0,s.kt)("strong",{parentName:"p"},"executor"),"\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"executor\u4f1a\u7acb\u5373\u6267\u884c"),"\uff0c\u5e76\u4e14\u5b83\u4f1a\u4f20\u5165\u53e6\u5916\u4e24\u4e2a\u56de\u8c03\u51fd\u6570resolve\u3001reject\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u8c03\u7528resolve\u56de\u8c03\u51fd\u6570\u65f6\uff0c\u4f1a\u6267\u884cPromise\u5bf9\u8c61\u7684then\u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u8c03\u7528reject\u56de\u8c03\u51fd\u6570\u65f6\uff0c\u4f1a\u6267\u884cPromise\u5bf9\u8c61\u7684catch\u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\uff1b")),(0,s.kt)("h2",{id:"promise\u4ee3\u7801\u7ed3\u6784"},"Promise\u4ee3\u7801\u7ed3\u6784"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  console.log("promise\u4f20\u5165\u7684executor\u88ab\u6267\u884c\u4e86")\n  // resolve()\n  // reject()\n})\n\npromise.then(res => {\n  // then\u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570, \u4f1a\u5728Promise\u6267\u884cresolve\u51fd\u6570\u65f6, \u88ab\u56de\u8c03\n  console.log(res);\n})\n\npromise.catch(err => {\n  // catch\u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570, \u4f1a\u5728Promise\u6267\u884creject\u51fd\u6570\u65f6, \u88ab\u56de\u8c03\n  console.log(err);\n})\n')),(0,s.kt)("h2",{id:"promise\u5c1d\u8bd5"},"Promise\u5c1d\u8bd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function requestData(url) {\n  // \u5f02\u6b65\u8bf7\u6c42\u7684\u4ee3\u7801\u653e\u5165\u5230executor\u4e2d\n  return new Promise((resolve, reject) => {\n    // \u6a21\u62df\u7f51\u7edc\u8bf7\u6c42\n    setTimeout(() => {\n      if (url === "wyh") {\n        // \u6210\u529f\n        let result = "\u8bf7\u6c42\u6210\u529f"\n        resolve(result)\n      } else {\n        // \u5931\u8d25\n        let errMessage = "\u8bf7\u6c42\u5931\u8d25, url\u9519\u8bef"\n        reject(errMessage)\n      }\n    }, 1000);\n  })\n}\n\nconst promise = requestData("wyh")\n// then \u4e5f\u53ef\u4ee5\u4e00\u6b21\u4f20\u5165\u4e24\u4e2a\u56de\u8c03\u51fd\u6570\n// \u7b2c\u4e00\u4e2a\u4f5c\u4e3a\u662fPromise\u6267\u884cresolve\u7684\u56de\u8c03\uff0c\u7b2c\u4e8c\u4e2a\u4f5c\u4e3aPromise\u6267\u884creject\u7684\u56de\u8c03\n// \u4e00\u822c\u90fd\u4f7f\u7528\u8fd9\u79cd\u5199\u6cd5\u6bd4\u8f83\u591a\npromise.then((res) => {\n  console.log(res)\n}, (err) => {\n  console.log(err)\n})\n')),(0,s.kt)("h2",{id:"promise\u7684resolve\u53c2\u6570"},"Promise\u7684resolve\u53c2\u6570"),(0,s.kt)("h3",{id:"resolve\u666e\u901a\u7684\u503c\u6216\u8005\u666e\u901a\u5bf9\u8c61"},"resolve\u666e\u901a\u7684\u503c\u6216\u8005\u666e\u901a\u5bf9\u8c61"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise((resolve, reject) => {\n  // pending -> fulfilled\n  resolve('resolve message')\n})\n")),(0,s.kt)("h3",{id:"resolve\u4e00\u4e2apromise"},"resolve\u4e00\u4e2aPromise"),(0,s.kt)("p",null,"\u90a3\u4e48\u5f53\u524d\u7684Promise\u7684\u72b6\u6001\u4f1a\u7531\u4f20\u5165\u7684Promise\u6765\u51b3\u5b9a\uff0c\u76f8\u5f53\u4e8e\u72b6\u6001\u8fdb\u884c\u4e86\u79fb\u4ea4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// promise2\u7684\u72b6\u6001\u7531promise1\u51b3\u5b9a\nconst promise1 = new Promise((resolve, reject) => {\n  resolve('resolve message')\n  // reject('reject message')\n})\n\nconst promise2 = new Promise((resolve, reject) => {\n  // pending -> fulfilled\n  resolve(promise1)\n}).then(res => {\n  console.log(res)\n}, err => {\n  console.log(err)\n})\n")),(0,s.kt)("h3",{id:"resolve\u6709then\u65b9\u6cd5\u7684\u5bf9\u8c61\u5b9e\u73b0\u4e86thenable"},"resolve\u6709then\u65b9\u6cd5\u7684\u5bf9\u8c61(\u5b9e\u73b0\u4e86thenable)"),(0,s.kt)("p",null,"\u90a3\u4e48\u4e5f\u4f1a\u6267\u884c\u8be5then\u65b9\u6cd5, \u5e76\u4e14\u7531\u8be5then\u65b9\u6cd5\u51b3\u5b9a\u540e\u7eed\u72b6\u6001"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'new Promise((resolve, reject) => {\n  // pending -> fulfilled\n  const obj = {\n    then: function (resolve, reject) {\n      resolve("resolve message")\n      // reject("reject message")\n    }\n  }\n  resolve(obj)\n}).then(res => {\n  console.log(res)\n}, err => {\n  console.log(err)\n})\n')),(0,s.kt)("h2",{id:"promise\u5bf9\u8c61\u7684then\u65b9\u6cd5"},"Promise\u5bf9\u8c61\u7684then\u65b9\u6cd5"),(0,s.kt)("h3",{id:"\u540c\u4e00\u4e2apromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21then\u65b9\u6cd5"},"\u540c\u4e00\u4e2aPromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21then\u65b9\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  resolve("resolve message")\n})\n\n// \u5f53\u6211\u4eec\u7684resolve\u65b9\u6cd5\u88ab\u56de\u8c03\u65f6, \u6240\u6709\u7684then\u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u90fd\u4f1a\u88ab\u8c03\u7528\npromise.then(res => {\n  console.log(res)\n})\n\npromise.then(res => {\n  console.log(res)\n})\n')),(0,s.kt)("h3",{id:"then\u65b9\u6cd5\u94fe\u5f0f\u8c03\u7528"},"then\u65b9\u6cd5\u94fe\u5f0f\u8c03\u7528"),(0,s.kt)("p",null,"then\u65b9\u6cd5\u672c\u8eab\u662f\u6709\u8fd4\u56de\u503c\u7684\uff0c\u4ed6\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684Promise\uff0c\u5e76\u5c06resolve\u56de\u8c03\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u65b0Promise\u7684resolve\u7684\u503c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de\u666e\u901a\u503c\uff0c\u5219\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684Promise\u7684resolve\u503c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  resolve("resolve message")\n})\n\npromise.then(res => {\n  console.log(res) // resolve message\n  return "a"\n}).then(res => {\n  console.log(res) // a\n  return "b"\n}).then(res => {\n  console.log(res) // b\n}).then(res => {\n  console.log(res) // undefined\n})\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de\u7684\u662f\u4e00\u4e2aPromise,\u76f8\u5f53\u4e8eresolve\u4e86\u4e00\u4e2aPromise")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise((resolve, reject) => {\n  resolve(\"resolve message\")\n})\n\npromise.then(res => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('a')\n    }, 1000)\n  })\n}).then(res => {\n  console.log(res) // a\n})\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61, \u5e76\u4e14\u8be5\u5bf9\u8c61\u5b9e\u73b0\u4e86thenable,\u76f8\u5f53\u4e8eresolve\u6709then\u65b9\u6cd5\u7684\u5bf9\u8c61")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise((resolve, reject) => {\n  resolve(\"resolve message\")\n})\n\npromise.then(res => {\n  return {\n    then: function (resolve, reject) {\n      resolve('a')\n    }\n  }\n}).then(res => {\n  console.log(res) // a\n})\n")),(0,s.kt)("h2",{id:"promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5"},"Promise\u5bf9\u8c61\u7684catch\u65b9\u6cd5"),(0,s.kt)("h3",{id:"executor\u629b\u51fa\u5f02\u5e38\u65f6-\u4f1a\u8c03\u7528\u9519\u8bef\u62d2\u7edd\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570\u7684"},"executor\u629b\u51fa\u5f02\u5e38\u65f6, \u4f1a\u8c03\u7528\u9519\u8bef(\u62d2\u7edd)\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570\u7684"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  throw new Error("error message")\n})\n\npromise.then(undefined, err => {\n  console.log(err)\n})\n')),(0,s.kt)("h3",{id:"\u4e5f\u53ef\u4ee5\u901a\u8fc7catch\u65b9\u6cd5\u6765\u4f20\u5165\u9519\u8bef\u62d2\u7edd\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7catch\u65b9\u6cd5\u6765\u4f20\u5165\u9519\u8bef(\u62d2\u7edd)\u6355\u83b7\u7684\u56de\u8c03\u51fd\u6570"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"PromiseA+\u89c4\u8303\u4e2d\uff0c\u6ca1\u6709promise.catch\u8fd9\u79cd\u89c4\u8303\uff0c\u662fES6\u4e3a\u4e86\u4f7f\u7528\u65b9\u4fbf\u5b9e\u73b0\u7684"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  throw new Error("error message")\n})\n\npromise.catch(err => {\n  console.log(err)\n})\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  resolve()\n})\n\npromise.then(res => {\n  throw new Error("error message")\n  // return new Promise((resolve, reject) => {\n  //   reject("rejected message")\n  // })\n}).catch(err => {\n  console.log(err)\n})\n')),(0,s.kt)("h3",{id:"\u540c\u4e00\u4e2apromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21catch\u65b9\u6cd5"},"\u540c\u4e00\u4e2aPromise\u5bf9\u8c61\u53ef\u4ee5\u8c03\u7528\u591a\u6b21catch\u65b9\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  reject("rejected message")\n})\n\npromise.catch(err => {\n  console.log(err)\n})\npromise.catch(err => {\n  console.log(err)\n})\npromise.catch(err => {\n  console.log(err)\n})\n')),(0,s.kt)("h3",{id:"catch\u65b9\u6cd5\u7684\u8fd4\u56de\u503c"},"catch\u65b9\u6cd5\u7684\u8fd4\u56de\u503c"),(0,s.kt)("p",null,"catch\u65b9\u6cd5\u672c\u8eab\u4e5f\u662f\u6709\u8fd4\u56de\u503c\u7684\uff0c\u4ed6\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684Promise\uff0c\u5e76\u5c06catch\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u65b0Promise\u7684resolve\u7684\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  reject("rejected message")\n})\n\npromise.then(res => {\n  console.log(res)\n}).catch(err => {\n  console.log(err) // rejected message\n  return "catch return value"\n}).then(res => {\n  console.log(res) // catch return value\n}).catch(err => {\n  console.log(err)\n})\n')),(0,s.kt)("h2",{id:"promise\u5bf9\u8c61\u7684finall\u65b9\u6cd5"},"Promise\u5bf9\u8c61\u7684finall\u65b9\u6cd5"),(0,s.kt)("p",null,"finally\u662f\u5728ES9\uff08ES2018\uff09\u4e2d\u65b0\u589e\u7684\u4e00\u4e2a\u7279\u6027\uff1a\u8868\u793a\u65e0\u8bbaPromise\u5bf9\u8c61\u65e0\u8bba\u53d8\u6210fulfilled\u8fd8\u662freject\u72b6\u6001\uff0c\u6700\u7ec8\u90fd\u4f1a\n\u88ab\u6267\u884c\u7684\u4ee3\u7801\u3002"),(0,s.kt)("p",null,"finally\u65b9\u6cd5\u662f\u4e0d\u63a5\u6536\u53c2\u6570\u7684\uff0c\u56e0\u4e3a\u65e0\u8bba\u524d\u9762\u662ffulfilled\u72b6\u6001\uff0c\u8fd8\u662freject\u72b6\u6001\uff0c\u5b83\u90fd\u4f1a\u6267\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  // resolve("resolve message")\n  reject("reject message")\n})\n\npromise.then(res => {\n  console.log(res)\n}).catch(err => {\n  console.log(err)\n}).finally(() => {\n  console.log("finally code execute")\n})\n\n')),(0,s.kt)("h2",{id:"promise\u7c7b\u7684resolve\u65b9\u6cd5"},"Promise\u7c7b\u7684resolve\u65b9\u6cd5"),(0,s.kt)("p",null,"\u524d\u9762\u7684then\u3001catch\u3001finally\u65b9\u6cd5\u90fd\u5c5e\u4e8ePromise\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u90fd\u662f\u5b58\u653e\u5728Promise\u7684prototype\u4e0a\u7684"),(0,s.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5df2\u7ecf\u6709\u4e00\u4e2a\u73b0\u6210\u7684\u5185\u5bb9\u4e86\uff0c\u5e0c\u671b\u5c06\u5176\u8f6c\u6210Promise\u6765\u4f7f\u7528\uff0c\u5219\u9700\u8981\u901a\u8fc7new Promise\u6765\u5b9e\u73b0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function foo() {\n  const obj = { name: "wyh" }\n  return new Promise((resolve) => {\n    resolve(obj)\n  })\n}\n\nfoo().then(res => {\n  console.log(res)\n})\n')),(0,s.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Promise.resolve \u65b9\u6cd5\u6765\u5b8c\u6210"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// \u8f6c\u6210Promise\u5bf9\u8c61\nconst promise = Promise.resolve({ name: "wyh" })\n\npromise.then(res => {\n  console.log(res)\n})\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f20\u5165\u4e00\u4e2aPromise")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = Promise.resolve(new Promise((resolve, reject) => {\n  resolve("resolve message")\n}))\n\npromise.then(res => {\n  console.log(res) // resolve message\n})\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f20\u5165thenable\u5bf9\u8c61")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = Promise.resolve({\n  then: function (resolve, reject) {\n    resolve("resolve message")\n  }\n})\n\npromise.then(res => {\n  console.log(res) // resolve message\n})\n')),(0,s.kt)("h2",{id:"promise\u7c7b\u7684reject\u65b9\u6cd5"},"Promise\u7c7b\u7684reject\u65b9\u6cd5"))}u.isMDXComponent=!0}}]);