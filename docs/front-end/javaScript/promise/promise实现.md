---
id: promise实现
sidebar_label: 'Promise实现'
title: Promise
slug: /front-end/javaSciprt/promise/promise实现
---

## 实现Promis之前

为了更好的了解Promise,准备实现一个自己的Promise

但是在实现Promise之前，需要了解一下[Promise/A+](https://promisesaplus.com/)([中文](https://promisesaplus.cn/))规范。

接下来开始一步步实现一个符合Promise/A+规范的Promise

## 实现自己的Promise

### 接受并执行executor回调
```js
class MyPromise {
    constructor(executor) {
        const resolve = (value) => {
            console.log(value);
        }
        const reject = (reason) => {
            console.log(reason);
        }
        // 接受传递过来的回调函数,这两个回调函数会在需要时被调用，并且可以传递函数
        executor(resolve, reject)
    }
}

// executor需要立刻执行，并传递了两个回调
const promise = new MyPromise((resolve, reject) => {
    // 执行resolve
    resolve('resolve message')
    // 执行resolve
    reject('reject message')
})
```
:::note
目前resolve后还能继续reject，因为还没有状态。
:::

### Promise状态
```js
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

class MyPromise {
    constructor(executor) {
        // 初始是pending状态
        this.status = PENDING

        const resolve = (value) => {
            // pending状态才执行
            if (this.status === PENDING) {
                // 执行后改变当前状态
                this.status = FULFILLED
                console.log(value);
            }
        }
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                console.log(reason);
            }
        }
        executor(resolve, reject)
    }
}

const promise = new MyPromise((resolve, reject) => {
    // 执行resolve
    resolve('resolve message') // resolve message
    // 执行resolve
    reject('reject message')
})

```

### then方法-初定义

我们知道Promise对象可以调用then方法，先初步进行设计

```js
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

class MyPromise {
    constructor(executor) {
        this.status = PENDING

        const resolve = (value) => {
            if (this.status === PENDING) {
                // 执行后改变当前状态
                this.status = FULFILLED
                // 按照代码顺序then方法是后执行的，resolve方法先执行的
                // 如果这里不做处理，一开始也就是没有this.onFulfilled这个方法的,就会报错
                // 这边先用queueMicrotask(之后详细讲解)进行处理，相当于是所有代码执行完以后才会进行调用
                // 这样我们就有了this.onFulfilled这个方法
                queueMicrotask(() => {
                    this.onFulfilled(value)
                })
            }
        }
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                queueMicrotask(() => {
                    this.onRejected(reason);
                })
            }
        }
        executor(resolve, reject)
    }

    then = (onFulfilled, onRejected) => {
        // onFulfilled回调需要在状态变为fulfilled时执行
        // onRejected回调需要在状态变为rejected时执行
        // 因为这两个回调是在状态变化的时候执行的，所以需要把这两个回调函数保存起来
        this.onFulfilled = onFulfilled
        this.onRejected = onRejected
    }
}

const promise = new MyPromise((resolve, reject) => {
    resolve('resolve message')
})

// 调用then方法，传入onFulfilled, onRejected两个回调函数
promise.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})

// 再次调用then方法，发现只会打印一次resolve的值，其实就是最后一次的
// 这是因为直接把之前的onFulfilled方法覆盖了，所以其实我们需要一个数组来进行保存
promise.then(res => {
    console.log(res); // resolve message
}, err => {
    console.log(err);
})

```

### then方法-多次调用-01

我们知道一个Promise的then方法是可以被多次调用的，并且都会执行并返回相对于的值

```js
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

class MyPromise {
    constructor(executor) {
        this.status = PENDING
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                queueMicrotask(() => {
                    this.onFulfilledCallbacks.forEach(fn => {
                        fn(value)
                    })
                })
            }
        }
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                queueMicrotask(() => {
                    this.onRejectedCallbacks.forEach(fn => {
                        fn(reason)
                    })
                })
            }
        }
        executor(resolve, reject)
    }

    then = (onFulfilled, onRejected) => {
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
    }
}

const promise = new MyPromise((resolve, reject) => {
    resolve('resolve message')
    // reject('reject message')
})

promise.then(res => {
    console.log("res1:", res) // res1: resolve message
}, err => {
    console.log("err:", err)
})

promise.then(res => {
    console.log("res2:", res) // res2: resolve message
}, err => {
    console.log("err2:", err)
})

// 但是如果在确定Promise状态之后, 我们再次调用then
// 这个onFulfilled回调没有执行，因为是后面加入到数组里的，之前的回调数组都已经执行完了
// 但是官方的Promise是可以的
setTimeout(() => {
    promise.then(res => {
        console.log("res3:", res)
    }, err => {
        console.log("err3:", err)
    })
}, 1000)
```

### then方法-多次调用-02

所以对上面的`then方法-多次调用-01`中的then方法进行修改

```js
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

class MyPromise {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                queueMicrotask(() => {
                    this.onFulfilledCallbacks.forEach(fn => {
                        fn(this.value)
                    })
                })
            }
        }
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                queueMicrotask(() => {
                    this.onRejectedCallbacks.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }
        executor(resolve, reject)
    }

    then = (onFulfilled, onRejected) => {
        // 如果状态已经确定，直接执行，因为这里拿不到参数，把参数定义到原型上
        if (this.status === FULFILLED) {
            onFulfilled(this.value)
        }
        if (this.status === REJECTED) {
            onRejected(this.reason)
        }
        // 如果状态没有确认，将成功回调和失败的回调放到数组中
        if (this.status === PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
    }
}

const promise = new MyPromise((resolve, reject) => {
    resolve('resolve message')
    // reject('reject message')
})

promise.then(res => {
    console.log("res1:", res) // res1: resolve message
}, err => {
    console.log("err:", err)
})

promise.then(res => {
    console.log("res2:", res) // res2: resolve message
}, err => {
    console.log("err2:", err)
})

setTimeout(() => {
    promise.then(res => {
        console.log("res3:", res) // res3: resolve message
    }, err => {
        console.log("err3:", err)
    })
}, 1000)

```
