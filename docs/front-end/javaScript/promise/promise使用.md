---
id: promise使用
sidebar_label: 'Promise使用'
title: Promise
slug: /front-end/javaSciprt/promise/promise使用
---

## 使用Promis之前

在介绍Promise之前，需要说一下在没有Promise之前，我们一般是如何处理异步任务的。

如下，以前我们都是使用**回调函数**的方式来进行处理的，因为在异步函数中，我们是不能直接return得到我们想要的值的。
 
```js {6,9}
function requestData(url, successCallback, failureCallback) {
    // 模拟网络请求
    setTimeout(() => {
        if (url === "wyh") {
            let result = "请求成功"
            successCallback(result)
        } else {
            let errMessage = "请求失败, url错误"
            failureCallback(errMessage)
        }
    }, 1000);
}

requestData("wyh", (res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})

```

:::note

- 这种回调的方式有很多的弊端:
    1. 如果是我们自己封装的requestData,那么我们在封装的时候必须要自己设计好callback名称, 并且使用好
    2. 如果我们使用的是别人封装的requestData或者一些第三方库, 那么我们必须去看别人的源码或者文档, 才知道它这个函数需要怎么去获取到结果

:::

所以有了Promise的诞生，一种**更规范/更好的**方案(规范好了所有的代码编写逻辑) 

## Promise基本概念

Promise是一个类，中文可以翻译成 承诺、许诺 、期约。

当我们需要给予调用者一个承诺(比如待会儿我会给你回调数据时)，就可以创建一个Promise的对象。在通过new创建Promise对象时，我们需要传入一个函数，我们称之为**executor**。
- **executor会立即执行**，并且它会传入另外两个回调函数resolve、reject；
- 当我们调用resolve回调函数时，会执行Promise对象的then方法传入的回调函数；
- 当我们调用reject回调函数时，会执行Promise对象的catch方法传入的回调函数；
  
## Promise代码结构

```js
const promise = new Promise((resolve, reject) => {
  console.log("promise传入的executor被执行了")
  // resolve()
  // reject()
})

promise.then(res => {
  // then方法传入的回调函数, 会在Promise执行resolve函数时, 被回调
  console.log(res);
})

promise.catch(err => {
  // catch方法传入的回调函数, 会在Promise执行reject函数时, 被回调
  console.log(err);
})
```

## Promise尝试

```js
function requestData(url) {
  // 异步请求的代码放入到executor中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      if (url === "wyh") {
        // 成功
        let result = "请求成功"
        resolve(result)
      } else {
        // 失败
        let errMessage = "请求失败, url错误"
        reject(errMessage)
      }
    }, 1000);
  })
}

const promise = requestData("wyh")
// then 也可以一次传入两个回调函数
// 第一个作为是Promise执行resolve的回调，第二个作为Promise执行reject的回调
// 一般都使用这种写法比较多
promise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})
```

## Promise的resolve参数

### resolve普通的值或者普通对象

```js
const promise = new Promise((resolve, reject) => {
  // pending -> fulfilled
  resolve('resolve message')
})
```

### resolve一个Promise

那么当前的Promise的状态会由传入的Promise来决定，相当于状态进行了移交

```js
// promise2的状态由promise1决定
const promise1 = new Promise((resolve, reject) => {
  resolve('resolve message')
  // reject('reject message')
})

const promise2 = new Promise((resolve, reject) => {
  // pending -> fulfilled
  resolve(promise1)
}).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})
```

### resolve有then方法的对象(实现了thenable)

那么也会执行该then方法, 并且由该then方法决定后续状态
```js
new Promise((resolve, reject) => {
  // pending -> fulfilled
  const obj = {
    then: function (resolve, reject) {
      resolve("resolve message")
      // reject("reject message")
    }
  }
  resolve(obj)
}).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})
```

## Promise对象的then方法 

### 同一个Promise对象可以调用多次then方法
```js
const promise = new Promise((resolve, reject) => {
  resolve("resolve message")
})

// 当我们的resolve方法被回调时, 所有的then方法传入的回调函数都会被调用
promise.then(res => {
  console.log(res)
})

promise.then(res => {
  console.log(res)
})
```

### then方法链式调用

then方法本身是有返回值的，他会返回一个新的Promise，并将resolve回调的返回值作为新Promise的resolve的值

- 如果返回普通值，则作为一个新的Promise的resolve值
```js
const promise = new Promise((resolve, reject) => {
  resolve("resolve message")
})

promise.then(res => {
  console.log(res) // resolve message
  return "a"
}).then(res => {
  console.log(res) // a
  return "b"
}).then(res => {
  console.log(res) // b
}).then(res => {
  console.log(res) // undefined
})
```

- 如果返回的是一个Promise,相当于resolve了一个Promise
```js
const promise = new Promise((resolve, reject) => {
  resolve("resolve message")
})

promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a')
    }, 1000)
  })
}).then(res => {
  console.log(res) // a
})
```

- 如果返回的是一个对象, 并且该对象实现了thenable,相当于resolve有then方法的对象
```js
const promise = new Promise((resolve, reject) => {
  resolve("resolve message")
})

promise.then(res => {
  return {
    then: function (resolve, reject) {
      resolve('a')
    }
  }
}).then(res => {
  console.log(res) // a
})
```

## Promise对象的catch方法

### executor抛出异常时, 会调用错误(拒绝)捕获的回调函数的
```js
const promise = new Promise((resolve, reject) => {
  throw new Error("error message")
})

promise.then(undefined, err => {
  console.log(err)
})
```

### 也可以通过catch方法来传入错误(拒绝)捕获的回调函数

:::note
PromiseA+规范中，没有promise.catch这种规范，是ES6为了使用方便实现的
:::

```js
const promise = new Promise((resolve, reject) => {
  throw new Error("error message")
})

promise.catch(err => {
  console.log(err)
})
```

```js
const promise = new Promise((resolve, reject) => {
  resolve()
})

promise.then(res => {
  throw new Error("error message")
  // return new Promise((resolve, reject) => {
  //   reject("rejected message")
  // })
}).catch(err => {
  console.log(err)
})
```

### 同一个Promise对象可以调用多次catch方法

```js
const promise = new Promise((resolve, reject) => {
  reject("rejected message")
})

promise.catch(err => {
  console.log(err)
})
promise.catch(err => {
  console.log(err)
})
promise.catch(err => {
  console.log(err)
})
```

### catch方法的返回值

catch方法本身也是有返回值的，他会返回一个新的Promise，并将catch的返回值作为新Promise的resolve的值

```js
const promise = new Promise((resolve, reject) => {
  reject("rejected message")
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err) // rejected message
  return "catch return value"
}).then(res => {
  console.log(res) // catch return value
}).catch(err => {
  console.log(err)
})
```

## Promise对象的finall方法

finally是在ES9（ES2018）中新增的一个特性：表示无论Promise对象无论变成fulfilled还是reject状态，最终都会
被执行的代码。

finally方法是不接收参数的，因为无论前面是fulfilled状态，还是reject状态，它都会执行。

```js
const promise = new Promise((resolve, reject) => {
  // resolve("resolve message")
  reject("reject message")
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log("finally code execute")
})

```

## Promise类的resolve方法

前面的then、catch、finally方法都属于Promise的实例方法，都是存放在Promise的prototype上的

有时候我们已经有一个现成的内容了，希望将其转成Promise来使用，则需要通过new Promise来实现

```js
function foo() {
  const obj = { name: "wyh" }
  return new Promise((resolve) => {
    resolve(obj)
  })
}

foo().then(res => {
  console.log(res)
})
```

这个时候我们可以使用 Promise.resolve 方法来完成

```js
// 转成Promise对象
const promise = Promise.resolve({ name: "wyh" })

promise.then(res => {
  console.log(res)
})
```

### 传入一个Promise

```js
const promise = Promise.resolve(new Promise((resolve, reject) => {
  resolve("resolve message")
}))

promise.then(res => {
  console.log(res) // resolve message
})
```
### 传入thenable对象

```js
const promise = Promise.resolve({
  then: function (resolve, reject) {
    resolve("resolve message")
  }
})

promise.then(res => {
  console.log(res) // resolve message
})
```

## Promise类的reject方法

### 无论传入什么值都是一样的,直接reject这个值

```js
const promise = Promise.reject("rejected message")
// 相当于
// const promise = new Promsie((resolve, reject) => {
//   reject("rejected message")
// })
promise.then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err) // err: rejected message
})
```

```js
const promise = Promise.reject(new Promise(() => { }))

promise.then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err) // err: Promise {<pending>}
})
```

## Promise类的all方法

调用all方法，会在所有的Promise都变成fulfilled时, 再拿到结果，返回的是一个Promise。

返回的是一个数组，结果的顺序是按照传入的顺序返回的

在拿到所有结果之前, 如果有一个Promise变成了rejected, 那么整个Promise就是rejected

```js
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222)
    // reject(222)
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333)
  }, 3000);
})

// 传入不是promise的值会调用romise.resolve方法，转换成promise
Promise.all([p2, p1, p3, "aaa"]).then(res => {
  console.log(res) // [222, 111, 333, 'aaa']
}).catch(err => {
  console.log("err:", err)
})

```

## Promise类的allSettled方法

ES11新增的方法,该方法会在所有的Promise都有结果(settled),无论是fulfilled，还是rejected时，才会有最终状态

并且这个Promise的结果一定是fulfilled

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333)
  }, 3000);
})

Promise.allSettled([p1, p2, p3]).then(res => {
  console.log(res)
  // [
  //   {
  //     "status": "fulfilled",
  //     "value": 111
  //   },
  //   {
  //     "status": "rejected",
  //     "reason": 222
  //   },
  //   {
  //     "status": "fulfilled",
  //     "value": 333
  //   }
  // ]
}).catch(err => {
  console.log(err) // 不会到catch
})

```

## Promise类的race方法

谁先有结果，那么就使用谁的结果

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 3000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 1500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333)
  }, 1000);
})

Promise.race([p1, p2, p3]).then(res => {
  console.log("res:", res) // res: 333
}).catch(err => {
  console.log("err:", err)
})

```

## Promise类的any方法

ES12新增的方法,和race类似,至少等到一个fulfilled状态，才决定promise的状态

如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态

如果所有的Promise都是reject的，那么会报一个AggregateError的错误

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333)
  }, 3000);
})

Promise.any([p1, p2, p3]).then(res => {
  console.log("res:", res) // res: 111
}).catch(err => {
  console.log("err:", err.errors)
})

```

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333)
  }, 3000);
})

Promise.any([p1, p2, p3]).then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err) // err: AggregateError: All promises were rejected
  console.log("err:", err.errors) // err: [111, 222, 333]
})

```