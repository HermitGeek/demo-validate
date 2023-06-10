/*
    数据劫持，监听数据变化
    给所有 vm.$data 属性加上 getter setter
*/

class Observe {
    constructor(data) {
        this.walk(data);
    }

    /*
        监听 data 中的数据
    */
    walk(data) {
        if (!data || typeof data !== 'object') {
            return;
        }

        Object.keys(data).forEach((key) => {
            this.defineReactive(data, key, data[key]);
            this.walk(data[key])
        });
    }

    /*
        定义 响应式
    */
    defineReactive(obj, key, value) {
        const that = this;

        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            get() {
                console.log('get data', key)
                return value;
            },
            set(newValue) {
                if (value === newValue) {
                    return;
                }
                
                // 【重点】
                that.walk(newValue);

                value = newValue;
            }
        })
    }
}