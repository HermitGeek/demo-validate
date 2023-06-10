/*
    职责：数据劫持
*/
class Observe {
    constructor(data) {
        this.walk(data);
    }

    walk(data) {
        if (!data || typeof data !== 'object') {
            return;
        }

        Object.keys(data).forEach((key) => {
            this.defineReactive(data, key, data[key]);
            this.walk(data[key]);
        })
    }

    defineReactive(obj, key, value) {
        const that = this;

        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set(newValue) {
                if (newValue === value) return;

                that.walk(newValue);
                dep.notify();

            }
        })
    }

}