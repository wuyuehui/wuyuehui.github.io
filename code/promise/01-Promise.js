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
    resolve('resolve message') // resolve message
    // 执行resolve
    reject('reject message') // reject message
})
