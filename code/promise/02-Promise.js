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
            this.status = REJECTED
            if (this.status === PENDING) {
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

