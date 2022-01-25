"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1230],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,k=c["".concat(o,".").concat(m)]||c[m]||s[m]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5534:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],p={id:"\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b"},o=void 0,d={unversionedId:"front-end/typeScript/\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b",id:"front-end/typeScript/\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b",title:"\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b",description:"\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005 TypeScript \u5185\u7f6e\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u7c7b\u578b\uff0c\u6bd4\u5982 Partial\u3001Required\u3001Readonly\u3001Record \u548c ReturnType \u7b49\u3002\u4e0d\u8fc7\u5728\u5177\u4f53\u4ecb\u7ecd\u4e4b\u524d\uff0c\u5f97\u5148\u4e86\u89e3\u4e00\u4e9b\u76f8\u5173\u7684\u57fa\u7840\u77e5\u8bc6\u3002",source:"@site/docs/front-end/typeScript/16\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b.md",sourceDirName:"front-end/typeScript",slug:"/front-end/typeScript/\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b",permalink:"/front-end/typeScript/\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b",editUrl:"https://github.com/wuyuehui/wuyuehui.github.io/edit/main/docs/front-end/typeScript/16\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{id:"\u5e38\u7528\u5185\u7f6e\u5de5\u5177\u7c7b\u578b"},sidebar:"docs",previous:{title:"\u7c7b\u578b\u65ad\u8a00\u548c\u7c7b\u578b\u5b88\u536b",permalink:"/front-end/typeScript/\u7c7b\u578b\u65ad\u8a00\u548c\u7c7b\u578b\u5b88\u536b"},next:{title:"1.\u4e24\u6570\u4e4b\u548c",permalink:"/algorithm/1.\u4e24\u6570\u4e4b\u548c"}},u=[{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",children:[{value:"typeof",id:"typeof",children:[],level:3},{value:"keyof",id:"keyof",children:[],level:3},{value:"in",id:"in",children:[],level:3},{value:"extends",id:"extends",children:[],level:3},{value:"infer",id:"infer",children:[],level:3}],level:2},{value:"\u5e38\u7528\u5de5\u5177\u7c7b\u578b",id:"\u5e38\u7528\u5de5\u5177\u7c7b\u578b",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"ReturnType",id:"returntype",children:[],level:3},{value:"Partial",id:"partial",children:[],level:3},{value:"Required",id:"required",children:[],level:3},{value:"Readonly",id:"readonly",children:[],level:3},{value:"Pick",id:"pick",children:[],level:3},{value:"Record",id:"record",children:[],level:3},{value:"Exclude",id:"exclude",children:[],level:3},{value:"Extract",id:"extract",children:[],level:3},{value:"Omit",id:"omit",children:[],level:3},{value:"NonNullable",id:"nonnullable",children:[],level:3}],level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[],level:2}],s={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005 TypeScript \u5185\u7f6e\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u7c7b\u578b\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"Partial"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Required"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Record")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ReturnType")," \u7b49\u3002\u4e0d\u8fc7\u5728\u5177\u4f53\u4ecb\u7ecd\u4e4b\u524d\uff0c\u5f97\u5148\u4e86\u89e3\u4e00\u4e9b\u76f8\u5173\u7684\u57fa\u7840\u77e5\u8bc6\u3002"),(0,l.kt)("h2",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,l.kt)("h3",{id:"typeof"},"typeof"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"typeof")," \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u6765\u83b7\u53d6\u4e00\u4e2a\u53d8\u91cf\u58f0\u660e\u6216\u5bf9\u8c61\u7684\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string;\n  age: number;\n}\n\nconst wyh: Person = { name: 'wyh', age: 18 };\ntype Wyh = typeof wyh; // -> Person\n\nfunction toArray(x: number): number[] {\n  return [x];\n}\n\ntype Func = typeof toArray; // -> (x: number) => number[]\n")),(0,l.kt)("h3",{id:"keyof"},"keyof"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keyof")," \u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u67d0\u79cd\u7c7b\u578b\u7684\u6240\u6709\u952e\uff0c\u5176\u8fd4\u56de\u7c7b\u578b\u662f\u8054\u5408\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'interface Person {\n  name: string;\n  age: number;\n}\n\ntype K1 = keyof Person; // "name" | "age"\ntype K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" \ntype K3 = keyof { [x: string]: Person };  // string | number\n')),(0,l.kt)("p",null,"\u5728 TypeScript \u4e2d\u652f\u6301\u4e24\u79cd\u7d22\u5f15\u7b7e\u540d\uff0c\u6570\u5b57\u7d22\u5f15\u548c\u5b57\u7b26\u4e32\u7d22\u5f15\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface StringArray1 {\n  // \u5b57\u7b26\u4e32\u7d22\u5f15 -> keyof StringArray => string | number\n  [index: string]: string;\n}\n\ninterface StringArray2 {\n  // \u6570\u5b57\u7d22\u5f15 -> keyof StringArray1 => number\n  [index: number]: string;\n}\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u540c\u65f6\u652f\u6301\u4e24\u79cd\u7d22\u5f15\u7c7b\u578b\uff0c\u5c31\u5f97\u8981\u6c42\u6570\u5b57\u7d22\u5f15\u7684\u8fd4\u56de\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u7d22\u5f15\u8fd4\u56de\u503c\u7684\u5b50\u7c7b\u3002\u5176\u4e2d\u7684\u539f\u56e0\u5c31\u662f\u5f53\u4f7f\u7528\u6570\u503c\u7d22\u5f15\u65f6\uff0cJavaScript \u5728\u6267\u884c\u7d22\u5f15\u64cd\u4f5c\u65f6\uff0c\u4f1a\u5148\u628a\u6570\u503c\u7d22\u5f15\u5148\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u7d22\u5f15\u3002\u6240\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"keyof { [x: string]: Person }")," \u7684\u7ed3\u679c\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"string | number"),"\u3002"),(0,l.kt)("h3",{id:"in"},"in"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"in")," \u7528\u6765\u904d\u5386\u679a\u4e3e\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'type Keys = "a" | "b" | "c"\n\ntype Obj = {\n  [p in Keys]: any\n} // -> { a: any, b: any, c: any }\n')),(0,l.kt)("h3",{id:"extends"},"extends"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u63a5\u53e3\uff0c\u8868\u793a\u7ee7\u627f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface T1 {\n  name: string,\n}\n\ninterface T2 {\n  sex: number,\n}\n\ninterface T3 extends T1, T2 {\n  age: number,\n}\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u63a5\u53e3\u652f\u6301\u591a\u91cd\u7ee7\u627f\uff0c\u8bed\u6cd5\u4e3a\u9017\u53f7\u9694\u5f00\u3002\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5b9e\u73b0\u7ee7\u627f\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4ea4\u53c9\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"type A = B & C & D"),"\u3002"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8868\u793a\u6761\u4ef6\u7c7b\u578b\uff0c\u53ef\u7528\u4e8e\u6761\u4ef6\u5224\u65ad")),(0,l.kt)("p",null,"\u8868\u793a\u6761\u4ef6\u5224\u65ad\uff0c\u5982\u679c\u524d\u9762\u7684\u6761\u4ef6\u6ee1\u8db3\uff0c\u5219\u8fd4\u56de\u95ee\u53f7\u540e\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u5426\u5219\u7b2c\u4e8c\u4e2a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type A1 = 'x' extends 'x' ? 1 : 2;\n// type A1 = 1\n\ntype A2 = 'x' | 'y' extends 'x' ? 1 : 2;\n// type A2 = 2\n\ntype P<T> = T extends 'x' ? 1 : 2;\ntype A3 = P<'x' | 'y'>\n// type A3 = 1 | 2\n")),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"A2")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"A3")," \u7684\u503c\u4e0d\u4e00\u6837\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u4e8e\u7b80\u5355\u7684\u6761\u4ef6\u5224\u65ad\uff0c\u5219\u662f\u76f4\u63a5\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"extends")," \u524d\u9762\u7684\u7c7b\u578b\u662f\u5426\u53ef\u5206\u914d\u7ed9\u540e\u9762\u7684\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"extends")," \u524d\u9762\u7684\u7c7b\u578b\u662f\u6cdb\u578b\uff0c\u4e14\u6cdb\u578b\u4f20\u5165\u7684\u662f\u8054\u5408\u7c7b\u578b\u65f6\uff0c\u5219\u4f1a\u4f9d\u6b21\u5224\u65ad\u8be5\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u5b50\u7c7b\u578b\u662f\u5426\u53ef\u5206\u914d\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"extends")," \u540e\u9762\u7684\u7c7b\u578b\uff08\u662f\u4e00\u4e2a\u5206\u53d1\u7684\u8fc7\u7a0b\uff09\uff0c\u7136\u540e\u5c06\u6700\u7ec8\u7684\u7ed3\u679c\u7ec4\u6210\u65b0\u7684\u8054\u5408\u7c7b\u578b\u3002"))),(0,l.kt)("p",null,"\u5982\u4f55\u963b\u6b62 ",(0,l.kt)("inlineCode",{parentName:"p"},"extends")," \u5173\u952e\u8bcd\u5bf9\u4e8e\u8054\u5408\u7c7b\u578b\u7684\u5206\u53d1\u7279\u6027\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u5143\u7ec4\u7c7b\u578b\u5305\u88f9\u4ee5\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type P<T> = [T] extends ['x'] ? 1 : 2;\ntype A4 = P<'x' | 'y'>\n// type A4 = 2;\n")),(0,l.kt)("h3",{id:"infer"},"infer"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Infer")," \u5173\u952e\u5b57\u7528\u4e8e\u6761\u4ef6\u4e2d\u7684\u7c7b\u578b\u63a8\u5bfc\u3002"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReturnType")," \u4e3e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u6761\u4ef6\u8bed\u53e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"T extends (...args: any[]) => infer R ? R : any")," \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"infer R")," \u8868\u793a\u5f85\u63a8\u65ad\u7684\u51fd\u6570\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u80fd\u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(...args: any[]) => infer R"),"\uff0c\u5219\u7ed3\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"(...args: any[]) => infer R")," \u7c7b\u578b\u4e2d\u7684\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"R"),"\uff0c\u5426\u5219\u8fd4\u56de\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),"\u3002"),(0,l.kt)("h2",{id:"\u5e38\u7528\u5de5\u5177\u7c7b\u578b"},"\u5e38\u7528\u5de5\u5177\u7c7b\u578b"),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"\u83b7\u53d6\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u5c06\u6bcf\u4e2a\u53c2\u6570\u7c7b\u578b\u653e\u5728\u4e00\u4e2a\u5143\u7ec4\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148 ",(0,l.kt)("inlineCode",{parentName:"li"},"Parameters")," \u7ea6\u675f\u4e86\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"T")," \u5fc5\u987b\u662f\u4e2a\u51fd\u6570\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"li"},"T")," \u662f\u5426\u662f\u51fd\u6570\u7c7b\u578b\uff0c\u5982\u679c\u662f\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"inter P")," \u63a8\u5bfc\u51fa\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u5e76\u5c06\u63a8\u5bfc\u7684\u7ed3\u679c\u5b58\u5230\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"li"},"P")," \u4e0a\uff0c\u5426\u5219\u5c31\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"never"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"declare function f1(arg: { a: number; b: string }): void;\n\ntype T0 = Parameters<() => string>;\n// type T0 = []\n\ntype T1 = Parameters<(s: string) => void>;\n// type T1 = [s: string]\n\ntype T2 = Parameters<<T>(arg: T) => T>;\n// type T2 = [arg: unknown]\n\ntype T3 = Parameters<typeof f1>;\n// type T3 = [arg: {\n//   a: number;\n//   b: string;\n// }]\n\ntype T4 = Parameters<any>;\n// type T4 = unknown[]\n\ntype T5 = Parameters<never>;\n// type T5 = never\n\ntype T6 = Parameters<string>;\n// ERROR \u7c7b\u578b\u201cstring\u201d\u4e0d\u6ee1\u8db3\u7ea6\u675f\u201c(...args: any) => any\u201d\u3002\n\ntype T7 = Parameters<Function>;\n// ERROR \u7c7b\u578b\u201cFunction\u201d\u4e0d\u6ee1\u8db3\u7ea6\u675f\u201c(...args: any) => any\u201d\u3002\n//   ERROR \u7c7b\u578b\u201cFunction\u201d\u63d0\u4f9b\u7684\u5185\u5bb9\u4e0e\u7b7e\u540d\u201c(...args: any): any\u201d\u4e0d\u5339\u914d\u3002\n")),(0,l.kt)("h3",{id:"returntype"},"ReturnType"),(0,l.kt)("p",null,"\u83b7\u53d6\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @desc ReturnType \u7684\u5b9e\u73b0\u5176\u5b9e\u548c Parameters \u7684\u57fa\u672c\u4e00\u6837\n * \u65e0\u975e\u662f\u4f7f\u7528 infer R \u7684\u4f4d\u7f6e\u4e0d\u4e00\u6837\u3002\n */\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"declare function f1(): { a: number; b: string };\n\ntype T0 = ReturnType<() => string>;\n// type T0 = string\n\ntype T1 = ReturnType<(s: string) => void>;\n// type T1 = void\n\ntype T2 = ReturnType<<T>() => T>;\n// type T2 = unknown\n\ntype T3 = ReturnType<<T extends U, U extends number[]>() => T>;\n// type T3 = number[]\n\ntype T4 = ReturnType<typeof f1>;\n// type T4 = {\n//   a: number;\n//   b: string;\n// }\n\ntype T5 = ReturnType<any>;\n// type T5 = any\n\ntype T6 = ReturnType<never>;\n// type T6 = never\n\ntype T7 = ReturnType<string>;\n// ERROR \u7c7b\u578b\u201cstring\u201d\u4e0d\u6ee1\u8db3\u7ea6\u675f\u201c(...args: any) => any\u201d\u3002\n\ntype T8 = ReturnType<Function>;\n// ERROR \u7c7b\u578b\u201cFunction\u201d\u4e0d\u6ee1\u8db3\u7ea6\u675f\u201c(...args: any) => any\u201d\u3002\n//   ERROR \u7c7b\u578b\u201cFunction\u201d\u63d0\u4f9b\u7684\u5185\u5bb9\u4e0e\u7b7e\u540d\u201c(...args: any): any\u201d\u4e0d\u5339\u914d\u3002\n")),(0,l.kt)("h3",{id:"partial"},"Partial"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Partial<T>")," \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u6240\u6709\u5c5e\u6027\u53d8\u6210\u53ef\u9009\u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[P in keyof T]")," \u901a\u8fc7\u6620\u5c04\u7c7b\u578b\uff0c\u904d\u5386 ",(0,l.kt)("inlineCode",{parentName:"li"},"T")," \u4e0a\u7684\u6240\u6709\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?:")," \u8bbe\u7f6e\u4e3a\u5c5e\u6027\u4e3a\u53ef\u9009\u7684"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"T[P]")," \u8bbe\u7f6e\u7c7b\u578b\u4e3a\u539f\u6765\u7684\u7c7b\u578b")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n}\n\nfunction updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n  return { ...todo, ...fieldsToUpdate };\n}\n\nconst todo1 = {\n  title: "organize desk",\n  description: "clear clutter",\n};\n\nconst todo2 = updateTodo(todo1, {\n  description: "throw out trash",\n});\n')),(0,l.kt)("h3",{id:"required"},"Required"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Required<T>")," \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u6240\u6709\u5c5e\u6027\u53d8\u4e3a\u5fc5\u9009\u9879"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Required<T> = {\n  [P in keyof T]-?: T[P]\n};\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'interface Props {\n  a?: number;\n  b?: string;\n}\n \nconst obj: Props = { a: 5 };\n \nconst obj2: Required<Props> = { a: 5 };\n// \u7c7b\u578b "{ a: number; }" \u4e2d\u7f3a\u5c11\u5c5e\u6027 "b"\uff0c\u4f46\u7c7b\u578b "Required<Props>" \u4e2d\u9700\u8981\u8be5\u5c5e\u6027\u3002\n')),(0,l.kt)("h3",{id:"readonly"},"Readonly"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Readonly<T>")," \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u6240\u6709\u5c5e\u6027\u53d8\u6210\u53ea\u8bfb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Readonly<T> = {\n  readonly [P in keyof T]: T[P]\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: "Delete inactive users",\n};\n\ntodo.title = "Hello";\n// \u65e0\u6cd5\u5206\u914d\u5230 "title" \uff0c\u56e0\u4e3a\u5b83\u662f\u53ea\u8bfb\u5c5e\u6027\u3002\n')),(0,l.kt)("h3",{id:"pick"},"Pick"),(0,l.kt)("p",null,"\u6311\u9009\u4e00\u7ec4\u5c5e\u6027\u5e76\u7ec4\u6210\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Pick<T, K extends keyof T> = {\n    [P in K]: T[P];\n};\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Pick<Todo, "title" | "completed">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n};\n')),(0,l.kt)("h3",{id:"record"},"Record"),(0,l.kt)("p",null,"\u6784\u9020\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a\u8054\u5408\u7c7b\u578b\u4e2d\u7684\u6bcf\u4e2a\u5b50\u7c7b\u578b\uff0c\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Record<K extends keyof any, T> = {\n  [P in K]: T\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keyof any")," \u5f97\u5230\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"string | number | symbol")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * @desc \u904d\u5386\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u6bcf\u4e2a\u5b50\u7c7b\u578b\uff0c\u7136\u540e\u5c06\u503c\u8bbe\u7f6e\u4e3a\u7b2c\u4e8c\u53c2\u6570\n */\ninterface CatInfo {\n  age: number;\n  breed: string;\n}\n\ntype CatName = "miffy" | "boris" | "mordred";\n\nconst cats: Record<CatName, CatInfo> = {\n  miffy: { age: 10, breed: "Persian" },\n  boris: { age: 5, breed: "Maine Coon" },\n  mordred: { age: 16, breed: "British Shorthair" },\n};\n')),(0,l.kt)("h3",{id:"exclude"},"Exclude"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Exclude<T, U>")," \u63d0\u53d6\u5b58\u5728\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"\uff0c\u4f46\u4e0d\u5b58\u5728\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u7684\u7c7b\u578b\u7ec4\u6210\u7684\u8054\u5408\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Exclude<T, U> = T extends U ? never : T;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'type T0 = Exclude<"a" | "b" | "c", "a">;\n// type T0 = "b" | "c"\n\ntype T1 = Exclude<"a" | "b" | "c", "a" | "b">;\n// type T1 = "c"\n\ntype T2 = Exclude<string | number | (() => void), Function>;\n// type T2 = string | number\n')),(0,l.kt)("h3",{id:"extract"},"Extract"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Extract<T, U>")," \u63d0\u53d6\u8054\u5408\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u548c\u8054\u5408\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u7684\u6240\u6709\u4ea4\u96c6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Extract<T, U> = T extends U ? T : never;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'type T0 = Extract<"a" | "b" | "c", "a" | "f">;\n// type T0 = "a"\n\ntype T1 = Extract<string | number | (() => void), Function>;\n// type T1 = () => void\n')),(0,l.kt)("h3",{id:"omit"},"Omit"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Omit<T, K>")," \u4ece\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u4e2d\u5254\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"K")," \u4e2d\u7684\u6240\u6709\u5c5e\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u53ef\u4ee5\u5229\u7528 Pick \u5b9e\u73b0 Omit\n */\ntype Omit = Pick<T, Exclude<keyof T, K>>;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Pick")," \u63d0\u53d6\u6211\u4eec\u9700\u8981\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"keys")," \u7ec4\u6210\u7684\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Omit = Pick<T, \u9700\u8981\u7684\u5c5e\u6027\u8054\u5408>")),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u7684\u5c5e\u6027\u8054\u5408\uff0c\u5c31\u662f\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},"T")," \u7684\u5c5e\u6027\u8054\u5408\u4e2d\u6392\u51fa\u5b58\u5728\u4e8e\u8054\u5408\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"li"},"K")," \u4e2d\u7684\uff0c\u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Exclude<keyof T, K>"))),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u5229\u7528Pick\u5b9e\u73b0\u5462\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Omit<T, K extends keyof any> = {\n  [P in Exclude<keyof T, K>]: T[P]\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n  createdAt: number;\n}\n\ntype TodoPreview = Omit<Todo, "description">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n  createdAt: 1615544252770,\n};\n\ntype TodoInfo = Omit<Todo, "completed" | "createdAt">;\n\nconst todoInfo: TodoInfo = {\n  title: "Pick up kids",\n  description: "Kindergarten closes at 5pm",\n};\n')),(0,l.kt)("h3",{id:"nonnullable"},"NonNullable"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NonNullable<T>")," \u6392\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," \u7c7b\u540e\u7ec4\u6210\u7684\u65b0\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type NonNullable<T> = T extends null | undefined ? never : T\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type T0 = NonNullable<string | number | undefined>;\n// type T0 = string | number\n\ntype T1 = NonNullable<string[] | null | undefined>;\n// type T1 = string[]\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types"},"distributive-conditional-types")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6994102811218673700"},"Ts\u9ad8\u624b\u7bc7\uff1a22\u4e2a\u793a\u4f8b\u6df1\u5165\u8bb2\u89e3Ts\u6700\u6666\u6da9\u96be\u61c2\u7684\u9ad8\u7ea7\u7c7b\u578b\u5de5\u5177")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"Utility Types")))}c.isMDXComponent=!0}}]);