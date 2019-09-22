import Dep from './Dep'

class Observer {
    constructor(data) {
        this.data = data;
        Object.keys(this.data).forEach(key => {
            this._bind(data, key, data[key])
        })
    }
    _bind(data, key, val) {
        const myDep = new Dep()
        Object.defineProperty(data, key, {
            get() {
                if (Dep.target) {
                    myDep.listen(Dep.target)
                }

                return val
            },
            set(newVal) {
                if (newVal === val) {
                    return
                } else {
                    val = newVal;
                    myDep.notify()
                }
            }
        })
    }
}

export default Observer;