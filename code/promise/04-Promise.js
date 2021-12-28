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
// 但是官方的Promise是可以的,可以尝试一下看看，所以我们也要在then方法中进行处理
setTimeout(() => {
    promise.then(res => {
        console.log("res3:", res)
    }, err => {
        console.log("err3:", err)
    })
}, 1000)
