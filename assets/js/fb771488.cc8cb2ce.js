"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5288],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=i,g=p["".concat(c,".").concat(s)]||p[s]||m[s]||o;return n?r.createElement(g,a(a({ref:t},f),{},{components:n})):r.createElement(g,a({ref:t},f))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"704.\u4e8c\u5206\u67e5\u627e"},c=void 0,u={unversionedId:"algorithm/704.\u4e8c\u5206\u67e5\u627e",id:"algorithm/704.\u4e8c\u5206\u67e5\u627e",title:"704.\u4e8c\u5206\u67e5\u627e",description:"",source:"@site/docs/algorithm/704.\u4e8c\u5206\u67e5\u627e.md",sourceDirName:"algorithm",slug:"/algorithm/704.\u4e8c\u5206\u67e5\u627e",permalink:"/algorithm/704.\u4e8c\u5206\u67e5\u627e",editUrl:"https://github.com/wuyuehui/wuyuehui.github.io/edit/main/docs/algorithm/704.\u4e8c\u5206\u67e5\u627e.md",tags:[],version:"current",sidebarPosition:704,frontMatter:{id:"704.\u4e8c\u5206\u67e5\u627e"},sidebar:"docs",previous:{title:"26.\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",permalink:"/algorithm/26.\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"},next:{title:"TypeScript+ESLint+Prettier\u914d\u5408\u4f7f\u7528",permalink:"/front-end/\u524d\u7aef\u5de5\u7a0b\u4ee3\u7801\u89c4\u8303/TypeScript+ESLint+Prettier\u914d\u5408\u4f7f\u7528"}},f=[],m={toc:f};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// [left,right] \u5de6\u95ed\u53f3\u95ed\u533a\u95f4\nconst search = (nums, target) => {\n    let left = 0\n    let right = nums.length - 1\n    while (left <= right) {\n        const mid = left + Math.floor((right - left) / 2)\n        if (nums[mid] > target) {\n            right = mid - 1 // \u53bb\u5de6\u9762\u95ed\u533a\u95f4\u5bfb\u627e\n        } else if (nums[mid] < target) {\n            left = mid + 1 // \u53bb\u53f3\u9762\u95ed\u533a\u95f4\u5bfb\u627e\n        } else {\n            return mid\n        }\n    }\n    return -1\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// [left,right) \u5de6\u95ed\u53f3\u5f00\u533a\u95f4\nconst search = (nums, target) => {\n    let left = 0, right = nums.length;\n    while (left < right) {\n        let mid = left + Math.floor((right - left)/2);\n        if (nums[mid] > target) {\n            right = mid; // \u53bb\u5de6\u533a\u95f4\u5bfb\u627e\n        } else if (nums[mid] < target) {\n            left = mid + 1; // \u53bb\u53f3\u533a\u95f4\u5bfb\u627e\n        } else {\n            return mid;\n        }\n    }\n    return -1;\n};\n")))}p.isMDXComponent=!0}}]);