const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MPromise {
    FULFILLED_CALLBACK_LIST = [];
    REJECTED_CALLBACK_LIST = [];
    _status = PENDING;

    constructor(executor) {
        this.status = PENDING;
        this.value = null;
        this.reason = null;
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
    }

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

    then(onFulfilled, onRejected) {
        const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
            return value
        }
        const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason;
        };
        const promise2 = new MPromise((resolve, reject) => {
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

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    isFunction(param) {
        return typeof param === 'function';
    }

    resolvePromise(promise2, x, resolve, reject) {
        // ?????? newPromise ??? x ???????????????????????? TypeError ????????????????????? newPromise
        // ???????????????????????????
        if (promise2 === x) {
            return reject(new TypeError('The promise and the return value are the same'));
        }

        if (x instanceof MPromise) {
            // ?????? x ??? Promise ????????? newPromise ?????? x ?????????
            // ?????????????????????x????????????????????????????????????y?????????????????????y
            queueMicrotask(() => {
                x.then((y) => {
                    this.resolvePromise(promise2, y, resolve, reject);
                }, reject);
            })
        } else if (typeof x === 'object' || this.isFunction(x)) {
            // ?????? x ?????????????????????
            if (x === null) {
                // null????????????????????????
                return resolve(x);
            }

            let then = null;

            try {
                // ??? x.then ????????? then 
                then = x.then;
            } catch (error) {
                // ????????? x.then ????????????????????? e ????????? e ??????????????? promise
                return reject(error);
            }

            // ?????? then ?????????
            if (this.isFunction(then)) {
                let called = false;
                // ??? x ???????????????????????? this ??????
                // ???????????????????????????????????????????????????????????? resolvePromise ???????????????????????? rejectPromise
                try {
                    then.call(
                        x,
                        // ?????? resolvePromise ?????? y ?????????????????????????????? resolvePromise
                        (y) => {
                            // ?????????????????????called????????????????????????.
                            if (called) return;
                            called = true;
                            this.resolvePromise(promise2, y, resolve, reject);
                        },
                        // ?????? rejectPromise ????????? r ????????????????????????????????? r ?????? promise
                        (r) => {
                            if (called) return;
                            called = true;
                            reject(r);
                        });
                } catch (error) {
                    // ???????????? then ????????????????????? e???
                    if (called) return;

                    // ????????? e ??????????????? promise
                    reject(error);
                }
            } else {
                // ?????? then ?????????????????? x ??????????????? promise
                resolve(x);
            }
        } else {
            // ?????? x ?????????????????????????????? x ??????????????? promise
            resolve(x);
        }
    }

    static resolve(value) {
        if (value instanceof MPromise) {
            return value;
        }

        return new MPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MPromise((resolve, reject) => {
            reject(reason);
        });
    }

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
}


// const test = new MPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(111);
//     }, 1000);
// }).then((res) => {
//     console.log(res)
// });

// console.log(test);

// setTimeout(() => {
//     console.log(test);
// }, 2000)



// const test1 = new MPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(111);
//     }, 1000);
// });

// const test2 = new MPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(222);
//     }, 2000);
// });

// const test3 = new MPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(333);
//     }, 3000);
// });

// MPromise.race([test1, test2, test3]).then(console.log); // 111