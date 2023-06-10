class Watcher {
    constructor(data, expr, callback) {
        this.data = data;
        this.expr = expr;
        this.callback = callback;

        Dep.target = this;


        // 存储旧值
        this.oldValue = this.getData(this.data, this.expr);
    }

    update() {
        const newValue = this.getData(this.data, this.expr);

        if (newValue !== oldValue) {
            this.callback(newData, this.oldData);

        }
    }

    getData(data, expr) {
        let dataCopy = data;

        expr.split('.').forEach((key) => {
            dataCopy = dataCopy[key];
        });

        return dataCopy;
    }
}


class Dep {
    constructor() {
        this.subList = [];
    }

    addSub(watcher) {
        this.subList.push(watcher);
    }

    notify() {
        this.subList.forEach((ele) => {
            ele.update();
        })
    }
}