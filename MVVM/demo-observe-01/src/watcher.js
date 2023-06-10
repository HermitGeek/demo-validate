class Watcher {
    constructor(vm, expr, cb) {
        this.$vm = vm;
        this.expr = expr;
        this.cb = cb;

        Dep.target = this;

        // 存储旧值
        this.oldValue = this.getVmData(vm, expr);
    }   

    update() {
        const oldValue = this.oldValue;
        const newValue = this.getVmData(this.$vm, this.expr);

        console.log(oldValue, newValue)

        if (oldValue !== newValue) {
            this.cb(newValue, oldValue)
        }
    }

    getVmData(vm, expr) {
        let data = vm.$data;

        expr.split('.').forEach((key) => {
            data = data[key];
        });

        return data;
    }
}

class Dep {
    constructor() {
        this.subList = [];
    }

    addSub(watcher) {
        this.subList.push(watcher)
    }

    notify() {
        this.subList.forEach((watcher) => {
            watcher.update();
        });
    }
}

/*
    添加订阅者
        数据改变，通知所有订阅者
*/