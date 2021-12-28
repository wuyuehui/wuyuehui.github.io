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
