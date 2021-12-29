---
id: promise实现
sidebar_label: 'Promise实现'
title: Promise
slug: /front-end/javaSciprt/promise/promise实现
---

## 实现Promis之前

为了更好的了解Promise,准备实现一个自己的Promise[完整代码](https://github.com/wuyuehui/wuyuehui.github.io/blob/main/code/promise/MPromise.js)

但是在实现Promise之前，需要了解一下[Promise/A+](https://promisesaplus.com/)([中文](https://promisesaplus.cn/))规范。

接下来开始一步步实现一个符合Promise/A+规范的Promise

## 一步步实现一个Promise


1. 平常用promise的时候, 是通过new关键字来new Promise()

```js
class MPromise {
    constructor() {

    }
}
```

2. 定义三种状态类型

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
```

3. 设置初始状态

同时为了取值和使用方便，把value和reason也挂载在实例上

```js
class MPromise {
    constructor() {
        // 初始状态为pending
        this.status = PENDING;
        this.value = null;
        this.reason = null;
    }
}
```

4. resolve 和 reject 方法

    1. 根据刚范, 这两个方法是要更改status的, 从pending改到fulfilled/rejected.
    2. 注意两个函数的入参分别是value 和 reason. 

```js
class MPromise {
    constructor() {
        // 初始状态为pending
        this.status = PENDING;
        this.value = null;
        this.reason = null;
    }

    resolve(value) {
        if (this.status === PENDING) {
            this.value = value;
            this.status = FULFILLED;
        }
    }

    reject(reason) {
        if (this.status === PENDING) {
            this.reason = reason;
            this.status = REJECTED;
        }
    }
}
```

5. Promise的入参

    1. 入参是一个函数, 函数接收resolve和reject两个参数.
    2. 注意在`初始化`promise的时候, 就要`执行`这个函数, 并且有任何报错都要通过reject抛出去

```js
class MPromise {
    constructor(executor) {
        // 初始状态为pending
        this.status = PENDING;
        this.value = null;
        this.reason = null;

        try {
            // 使用bind绑定this，这样调用的时候
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
    }

    resolve(value) {
        if (this.status === PENDING) {
            this.value = value;
            this.status = FULFILLED;
        }
    }

    reject(reason) {
        if (this.status === PENDING) {
            this.reason = reason;
            this.status = REJECTED;
        }
    }
}
```
    
6. 实现关键的then方法

    1. then接收两个参数, onFulfilled 和 onRejected

    ```js
    then(onFulfilled, onRejected) {}
    ```

    2. 检查并处理参数, 如果不是function, 就忽略. 这个忽略指的是原样返回value或者reason.

    ```js
    // 定义一个isFunction方法用来检查
    isFunction(param) {
        return typeof param === 'function';
    }

    then(onFulfilled, onRejected) {
        const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
            return value
        }
        const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason;
        };
    }
    ```
    3. 调用.then后的返回值是一个promise, 所以用promise来包裹一下, 其他逻辑待会再实现.

    ```js
    then(onFulfilled, onRejected) {
        const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
            return value
        }
        const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason;
        };
        const promise2 = new MPromise((resolve, reject) => {})
        return promise2
    }

    ```
    4. 根据当前promise的状态, 调用不同的函数

    ```js
    then(onFulfilled, onRejected) {
        const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
            return value
        }
        const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason;
        };
        const promise2 = new MPromise((resolve, reject) => {
            switch (this.status) {
                case FULFILLED: {
                    realOnFulfilled()
                    break;
                }
                case REJECTED: {
                    realOnRejected()
                    break;
                }
            }
        })
        return promise2

    }
    ```

    5. 但是这样写, 是在then函数被调用的瞬间就会执行. 这时候如果status还没变成fulfilled或者rejected(比如设置了setTimeout), 很有可能还是pending的. 所以我们需要一个状态的监听机制, 当状态变成fulfilled或者rejected后, 再去执行callback.

        1. 那么我们首先要拿到所有的callback, 然后才能在某个时机去执行他. 新建两个数组, 来分别存储成功和失败的回调, 调用then的时候, 如果还是pending就存入数组.

        ```js
        FULFILLED_CALLBACK_LIST = [];
        REJECTED_CALLBACK_LIST = [];

        then(onFulfilled, onRejected) {
            const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
                return value
            }
            const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
                throw reason;
            };
            const promise2 = new MPromise((resolve, reject) => {
                switch (this.status) {
                    case FULFILLED: {
                        realOnFulfilled()
                        break;
                    }
                    case REJECTED: {
                        realOnRejected()
                        break;
                    }
                    case PENDING: {
                        this.FULFILLED_CALLBACK_LIST.push(realOnFulfilled)
                        this.REJECTED_CALLBACK_LIST.push(realOnRejected)
                    }
                }
            })
            return promise2
        }
        ```

        2. 在status发生变化的时候, 就执行所有的回调. 这里可以使用es6的getter和setter. 这样更符合语义, 当status改变时, 去做什么事情.

        ```js
        _status = PENDING;

        get status() {
            return this._status;
        }

        set status(newStatus) {
            this._status = newStatus;
            switch (newStatus) {
                case FULFILLED: {
                    this.FULFILLED_CALLBACK_LIST.forEach(callback => {
                        callback(this.value);
                    });
                    break;
                }
                case REJECTED: {
                    this.REJECTED_CALLBACK_LIST.forEach(callback => {
                        callback(this.reason);
                    });
                    break;
                }
            }
        }
        ```

7. then的返回值
   我们知道then的返回值是一个Promise, 那么接下来具体分析一下返回promise的value和reason是什么.

    1. 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒绝原因 e。(这样的话, 我们就需要手动catch代码，遇到报错就reject)

    ```js
    then(onFulfilled, onRejected) {
        const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
            return value
        }
        const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason;
        };
        const promise2 = new MPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                try {
                    realOnFulfilled(this.value);
                } catch (e) {
                    reject(e)
                }
            };
            const rejectedMicrotask = () => {
                try {
                    realOnRejected(this.reason);
                } catch (e) {
                    reject(e);
                }
            }

            switch (this.status) {
                case FULFILLED: {
                    fulfilledMicrotask()
                    break;
                }
                case REJECTED: {
                    rejectedMicrotask()
                    break;
                }
                case PENDING: {
                    this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask)
                    this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask)
                }
            }
        })
        return promise2
    }
    ```

    2. 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
    
    3. 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的拒绝原因

    需要注意的是，如果promise1的onRejected执行成功了，promise2应该被resolve

    上面其实已经在参数检查的时候做过了, 也就是这段代码

    ```js
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
        return value
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
        throw reason;
    };
    ```

    4. 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行resolvePromise方法

    ```js
    then(onFulfilled, onRejected) {
        const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
            return value
        }
        const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason;
        };
        const promise2 = new MPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                try {
                    const x = realOnFulfilled(this.value);
                    this.resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e)
                }
            };
            const rejectedMicrotask = () => {
                try {
                    const x = realOnRejected(this.reason);
                    this.resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }

            switch (this.status) {
                case FULFILLED: {
                    fulfilledMicrotask()
                    break;
                }
                case REJECTED: {
                    rejectedMicrotask()
                    break;
                }
                case PENDING: {
                    this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask)
                    this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask)
                }
            }
        })
        return promise2
    }
    ```

        
8. resolvePromise

```js
resolvePromise(promise2, x, resolve, reject) {
    // 如果 newPromise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 newPromise
    // 这是为了防止死循环
    if (promise2 === x) {
        return reject(new TypeError('The promise and the return value are the same'));
    }

    if (x instanceof MPromise) {
        // 如果 x 为 Promise ，则使 newPromise 接受 x 的状态
        // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
        queueMicrotask(() => {
            x.then((y) => {
                this.resolvePromise(promise2, y, resolve, reject);
            }, reject);
        })
    } else if (typeof x === 'object' || this.isFunction(x)) {
        // 如果 x 为对象或者函数
        if (x === null) {
            // null也会被判断为对象
            return resolve(x);
        }
        
        let then = null;

        try {
            // 把 x.then 赋值给 then 
            then = x.then;
        } catch (error) {
            // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
            return reject(error);
        }

        // 如果 then 是函数
        if (this.isFunction(then)) {
            let called = false;
            // 将 x 作为函数的作用域 this 调用
            // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
            try {
                then.call(
                    x,
                    // 如果 resolvePromise 以值 y 为参数被调用，则运行 resolvePromise
                    (y) => {
                        // 需要有一个变量called来保证只调用一次.
                        if (called) return;
                        called = true;
                        this.resolvePromise(promise2, y, resolve, reject);
                    },
                    // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    (r) => {
                        if (called) return;
                        called = true;
                        reject(r);
                    });
            } catch (error) {
                // 如果调用 then 方法抛出了异常 e：
                if (called) return;

                // 否则以 e 为据因拒绝 promise
                reject(error);
            }
        } else {
            // 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
}
```

9. onFulfilled 和 onRejected 是微任务

    可以用[queueMicrotask](https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask)包裹执行函数

```js
const fulfilledMicrotask = () => {
    queueMicrotask(() => {
        try {
            const x = realOnFulfilled(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
            reject(e)
        }
    })
};
const rejectedMicrotask = () => {
    queueMicrotask(() => {
        try {
            const x = realOnRejected(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
            reject(e);
        }
    })
}
```

10. 简单测试一下

```js
const test = new MPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(111);
    }, 1000);
}).then((res) => {
    console.log(res)
});

console.log(test);

setTimeout(() => {
    console.log(test);
}, 2000)
```

11. catch方法

```js
catch (onRejected) {
    return this.then(null, onRejected);
}
```

12. promise.resolve

    将现有对象转为Promise对象，如果 Promise.resolve 方法的参数，不是具有 then 方法的对象（又称 thenable 对象），则返回一个新的 Promise 对象，且它的状态为fulfilled。
    注意这是一个静态方法, 因为是通过Promise.resolve调用的, 而不是通过实例去调用的.

```js
static resolve(value) {
    if (value instanceof MPromise) {
        return value;
    }

    return new MPromise((resolve) => {
        resolve(value);
    });
}
```

13. promise.reject

    返回一个新的Promise实例，该实例的状态为rejected。Promise.reject方法的参数reason，会被传递给实例的回调函数。

```js
static reject(reason) {
    return new MPromise((resolve, reject) => {
        reject(reason);
    });
}
```

14. promise.race

    `const p = Promise.race([p1, p2, p3]);`

    该方法是将多个 Promise 实例，包装成一个新的 Promise 实例。
    只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

```js
static race(promiseList) {
    return new MPromise((resolve, reject) => {
        const length = promiseList.length;

        if (length === 0) {
            return resolve();
        } else {
            for (let i = 0; i < length; i++) {
                MPromise.resolve(promiseList[i]).then(
                    (value) => {
                        return resolve(value);
                    },
                    (reason) => {
                        return reject(reason);
                    });
            }
        }
    });

}
```

15. 简单测试一下

```js
const test1 = new MPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(111);
    }, 1000);
});

const test2 = new MPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(222);
    }, 2000);
});

const test3 = new MPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(333);
    }, 3000);
});

MPromise.race([test1, test2, test3]).then(console.log); // 111
```