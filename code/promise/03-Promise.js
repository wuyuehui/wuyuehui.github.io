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
                // 这边先用queueMicrotask进行处理，相当于是所有代码执行完以后才会进行调用(之后详细讲解)
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
    // reject('reject message')
})

// 调用then方法，传入onFulfilled, onRejected两个回调函数
promise.then(res => {
    console.log("res1:", res)
}, err => {
    console.log("err:", err)
})

// 再次调用then方法，发现只会打印一次resolve的值，其实就是最后一次的
// 这是因为直接把之前的onFulfilled方法覆盖了，所以其实我们需要一个数组来进行保存
promise.then(res => {
    console.log("res2:", res) // res2: resolve message
}, err => {
    console.log("err2:", err)
})

