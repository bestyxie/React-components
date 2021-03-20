/**
 * new SelfVue 的时候，给 data 的每个属性执行 defineProperty，设置 getter 和 setter
 * 进行监听
 * 同时，SelfVue 实例同样需要进行同样的操作，把实例里面与 data 对应的属性映射到实例里，这样
 * 就可以直接 selfVue[key] 获取到 data 里面的数据
 * 
 * 
 */



function defineReactive(data: ObserverParams, key: string, val: any): void {
  Observer(val)
  const sub = new Subscribe()
  Object.defineProperty(data, key, {
    get: function () {
      if (Subscribe.target) {
        sub.addSub(Subscribe.target)
      }
      return val
    },
    set: function (newVal) {
      if (val === newVal) return
      val = newVal
      sub.notify()
    }
  })
}

interface ObserverParams {
  [key: string]: any
}

export function Observer(data: ObserverParams): void {
  if (typeof data !== 'object') {
    return
  }
  Object.keys(data).map(key => {
    defineReactive(data, key, data[key])
  })
}

/**
 * let sub = new Subscribe()
 * sub.addSub(watcher)
 * sub.notify()
 * 
 * let watcher = new Watcher(data, key, val)
 * watcher.data = data
 * watcher.key = key
 * watcher.oldVal = val
 * watcher.update()
 */
class Subscribe {
  static target = null

  subs: Watcher[] = []

  addSub = (watcher: Watcher) => {
    this.subs.push(watcher)
  }

  notify = () => {
    this.subs.map(sub => {
      sub.update()
    })
  }
}


class Watcher{
  vm: SelfVue
  exp: string
  callback: { (): void }
  value: any

  constructor(vm: SelfVue, exp, callback) {
    this.vm = vm
    this.exp = exp
    this.callback = callback
    this.value = this.get()
  }

  update = () => {
    // TODO
  }

  get = () => {
    Subscribe.target = this
    const value = this.vm.data[this.exp]
    Subscribe.target = null
    return value
  }
}

class SelfVue {
  data: { [key: string]: any } = {}
  vm
  constructor(options) {
    this.vm = this
    this.data = options.data

    Observer(this.data)

    Object.keys(this.data).forEach((key) => {
      this.proxyKeys(key)
      // 可以在回调函数里面做试图更新
      new Watcher(this.vm, key, ()=> {console.log('触发了::', key)})
    })
  }
  proxyKeys = (key: string) => {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: () => {
        return this.data[key]
      },
      set: (newVal: any) => {
        this.data[key] = newVal
      }
    })
  }
}

const selfvueInstance = new SelfVue({
  data: {
    a: 1,
  }
})

selfvueInstance.data.a = 3
console.log((selfvueInstance as any).a)