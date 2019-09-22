import Observer from './Observer'
import Complier from './Complier'

class Vue {
    constructor(options) {
        this.$options = options;

        this.$el = this.$options.el;
        this._data = this.$options.data;

        Object.keys(this._data).forEach(key => {
            this._proxy(key)
        })

        new Observer(this._data)
        new Complier(this.$el, this)

    }

    _proxy(key) {
        const self = this
        Object.defineProperty(this, key, {
            get() {
                return self._data[key]
            },
            set(value) {
                self._data[key] = value
            }
        })
    }
}

export default Vue