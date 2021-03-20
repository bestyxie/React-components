
interface SyncFnCall {
  (resolve, reject): void
}

const MyPromiseStatus = {
  PENDING: Symbol('PENDING'),
  FULFILL: Symbol('FULFILL'),
  REJECT: Symbol('REJECT'),
}

export const MyPromise = function (syncFnCall: SyncFnCall): void {
  this.status = MyPromiseStatus.PENDING
  this.result = undefined
  this.error = undefined
  const resolve = (data) => {
    if (this.status !== MyPromiseStatus.PENDING) return
    this.resolveHandler && setTimeout(() => this.resolveHandler(data))
    this.result = data
    this.status = MyPromiseStatus.FULFILL
  }
  function reject(error) {
    if (this.status !== MyPromiseStatus.PENDING) return
    this.errorHandler && this.errorHandler(error)
    this.status = MyPromiseStatus.REJECT
    this.error = error
  }
  syncFnCall(resolve, reject)

  this.then = function (resolveHandler, errorHandler) {
    if (this.status === MyPromiseStatus.FULFILL) {
      setTimeout(() => resolveHandler(this.result))
    } else if (this.status === MyPromiseStatus.REJECT) {
      setTimeout(() => errorHandler(this.error))
    } else {
     this.resolveHandler = resolveHandler
     this.errorHandler = errorHandler
    }
    return new MyPromise((resolve, reject) => {
      if (this.status === MyPromiseStatus.FULFILL) {
        resolve(this.result)
      } else if (this.status === MyPromiseStatus.REJECT) {
        reject(this.error)
      }
    })
  }

  this.catch = (errorHandler) => {
    this.then(null, errorHandler)
  }
}

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve({ a: 1 })
  }, 1000)
}).then((data) => {
  console.log(data)
})

interface Point {
  x: string,
  y: string
}

function point(p: Point) {
  console.log(p.x, p.y)
}

const p = {x: 'xx', y: 'yy', width: 'akkk'}
point(p)

interface X {
  length: number
}

function loggingIdentity<T extends X>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(['akssssdkj'])
loggingIdentity('akssssdkj')