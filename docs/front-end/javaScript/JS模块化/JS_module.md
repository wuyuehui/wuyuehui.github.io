---
id: JS_module
sidebar_label: 'JS模块化'
title: JS模块化
slug: /front-end/javaSciprt/JS模块化/JS_module
---

## 背景
> 在JavaScript发展初期，就是为了实现简单的页面交互逻辑,并无模块化 or 命名空间的概念。随着JavaScript不断的发展，JavaScript 应用领域变的越来越广泛，代码量变得越来越大，代码管理变得越来越困难，于是在 JavaScript 社区中出现了一些优秀的模块化方案，逐渐成为 JavaScript 的语言规范。
> 
> 这种模式背后的思想就是：把逻辑分块、各自封装、相互独立、每个块自行决定对外暴露什么，同时自行决定引入执行哪些外部代码。

## IIFE

模块化雏形

定义一个最简单的模块，将模块定义封装在一个立即执行函数中，需要依赖其他模块时，通过传参方式。

```js
const Foo = (function (ModuleA,ModuleB) {
    let bar = "bar";
    let baz = function () {
        console.log(this.bar);
    }
    return {
        bar,
        baz
    }
})(ModuleA,ModuleB);
```

## CommonJS

这个规范主要用于在服务器端实现模块化代码组织，Node.js的模块系统使用了Commonjs规范。

- 暴露模块：module.exports
- 引入模块：require

:::note
CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
:::

```js  title="math.js"
let add = function (num1, num2) {
    return num1 + num2;
};

let sub = function (num1, num2) {
    return num1 - num2;
};
// 暴露模块
module.exports.add = add;
module.exports.sub = sub;

// 或者如下，一次暴露多个
// module.exports = {
//     add,
//     sub
// };
```

```js title="main.js"
// 引入模块
const math = require('./math.js');
const res1 = math.add(1, 1);
const res2 = math.sub(1, 1);
console.log(res1, res2); // 2 0


// 或者如下，使用解构
// const { add, sub } = require('./math.js');

// const res1 = add(1, 1);
// const res2 = sub(1, 1);
// console.log(res1, res2); // 2 0
```

实际执行处理，其实也是转成一个立即执行函数

```js
(function (thisValue, exports, require, module) {
    const dependencyModule1 = require('./dependencyModule1');
    const dependencyModule2 = require('./dependencyModule2');
    // do something

}).call(thisValue, exports, require, module);
```
:::note
CommonJS中模块加载是同步执行的。因为在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因对于异步拉取依赖的处理不是那么的友好，更合理的方案是使用异步加载。
:::

## AMD

CommonJS以服务器端为目标环境，能够一次性把所有模块都加载到内存，而异步模块定义(AMD)则以浏览器为目标执行环境，这需要考虑网络延迟的问题。

经典实现框架是：[require.js](https://requirejs.org/)

- 定义模块：define
- 引入模块：require

定义模块

```js
// ID 为 moduleA的模块定义，moduleA 依赖 moduleB，moduleB 会异步加载
define('moduleA', ['moduleB'], (moduleB) => {
    return {
        stuff: moduleB.doStuff()
    }
})
```

引入模块

```js
require('moduleA', [], (moduleA) => {
    moduleA.stuff()
})
```

如果在AMD中想重用以传统CommonJS模块格式编写的某些代码，AMD也支持require和exports对象[(Define a Module with Simplified CommonJS Wrapper)](https://requirejs.org/docs/api.html#cjsmodule)，通过它们可以在AMD模块的工厂函数内部定义CommonJS风格的模块。

```js
define('moduleA', (require, exports, module) => {
    let moduleB = require('moduleB')
    exports.stuff = moduleB.doStuff()
})
// 等价于，CommonJS Wrapper 只是书写上兼容了 CommonJS 的写法，模块运行逻辑并不会改变。
// define('moduleA', ['moduleB'], (moduleB) => {
//     return {
//         stuff: moduleB.doStuff()
//     }
// });

require('moduleA', [], (moduleA) => {
    moduleA.stuff()
})
```
:::note
* 优点：适合在浏览器中加载异步模块，可以并行加载多个模块
* 缺点：会有引入成本，不能按需加载
:::

## CMD

CMD规范专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。

AMD和CMD区别：依赖就近，按需加载

主要应用的框架 [sea.js](https://seajs.github.io/seajs/docs/#intro)

```js
define('moduleA', (require, exports, module) => {
    // sea.js 推荐的 CMD 模块书写格式。如果你有使用过 Node.js，一切都很自然。
    let $ = require('jquery');
    // jquery相关逻辑

    let moduleB = require('moduleB');
    // moduleB相关逻辑

    // exports
    module.exports = {

    }
})
```

:::note
* 优点：按需加载，依赖就近
* 缺点：依赖于打包时进行解析，模块的加载逻辑偏重
:::

## ES Module

ES Module采用编译器的静态分析，并且也加入了动态引用方式，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。

:::tip
带有`type="module"`属性的`<script>`标签会告诉浏览器相关的代码应该作为模块执行，而不是作为传统的脚本执行。并且采用ES Module 将自动开启严格模式：use strict

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。

export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了ES6模块的设计初衷。
:::

```js title="index.html"
// 引入
<script type="module" src="main.js"></script>
```
### export

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量

```js title="foo.js"
export const name = "wyh"
export const age = 18
```
export的写法，除了像上面这样，还有另外一种

```js title="foo.js"
const name = "why"
const age = 18
export {
    name,
    age,
}
```

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

```js title="foo.js"
const name = "why"
const age = 18
export {
  name as n,
  age as a,
}
```

需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

```js title="foo.js"
// 报错
export 1;

// 报错
var m = 1;
export m;
```

上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出1，第二种写法通过变量m，还是直接输出1。1只是一个值，不是接口。正确的写法是下面这样。

```js title="foo.js"
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```

另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

```js title="foo.js"
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```

```js title="main.js"
import { foo } from './foo.js'

console.log(foo); // bar
setTimeout(() => {
  console.log(foo); // baz
}, 1000);
```

### import

使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

```js title="main.js"
import { name, age } from "./foo.js"
```

由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

```js title="main.js"
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
} 
```
如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

```js title="main.js"
import { name as n, age as a } from './foo.js'
```
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

```js title="main.js"
import * as foo from './foo.js'
```

### export default命令

从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

```js title="foo.js"
export default function () {
  console.log('foo');
}

// 或者
// export default function foo() {
//   console.log('foo');
// }

// 或者
// function foo() {
//   console.log('foo');
// }
// export default foo
```
```js title="main.js"
import foo from './foo.js';
foo(); // 'foo'
```

本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

```js title="foo.js"
function add(x, y) {
  return x * y;
}
export { add as default };

// 等同于
// export default add;
```

```js title="main.js"
import { default as xxx } from './foo.js';

// 等同于
// import xxx from './foo.js';
```

正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句

```js title="foo.js"
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
```

上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。

### export 与 import 的复合写法

如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。

```js title="main.js"
export { foo, bar } from './foo.js';

// 等同于
import { foo, bar } from './foo.js';
export { foo, boo};

// 整体输出
// export * from './foo.js';
```

### import()

前面介绍过，import命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行（import命令叫做“连接” binding 其实更合适）。

这样的设计，固然有利于编译器提高效率，但也导致无法在运行时加载模块。在语法上，条件加载就不可能实现。如果import命令要取代 Node 的require方法，这就形成了一个障碍。因为require是运行时加载模块，import命令无法取代require的动态加载功能。

ES2020提案 引入import()函数，支持动态加载模块。

import()返回一个 Promise 对象。下面是一个例子。

```js
import(`./section-modules/${someVariable}.js`)
    .then(module => {
        module.loadPageInto(main);
    })
    .catch(err => {
        main.textContent = err.message;
    });
```

import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。另外，import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。

### [ES Module解析过程](https://github.com/xitu/gold-miner/blob/master/TODO1/es-modules-a-cartoon-deep-dive.md)

阶段一：构建(Construction)，根据地址查找js文件，并且下载，将其解析成模块记录(Module Record)

阶段二：实例化(Instantition)，对模块记录进行实例化，并且分配内存空间，解析模块的导入和导出语句，把模块指向对应的内存地址。

阶段三：运行(Evaluation)，运行代码，计算值，并且将值填充到内存地址中

## 参考文档 

[ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/module) 

[漫画：深入浅出 ES 模块](https://github.com/xitu/gold-miner/blob/master/TODO1/es-modules-a-cartoon-deep-dive.md)