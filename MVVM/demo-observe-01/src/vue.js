class Vue {
    constructor(options) {
        // 变量继承
        this.$el = options.el;
        this.$data = options.data;
        this.methods = options.methods;

       
        new Observe(this.$data);

        this.proxy(this.$data)
        this.proxy(this.methods)

         // 编译模板
         new Complie(this);
    }

    // 属性代理
    proxy(data) {
        Object.keys(data).forEach((key) => {
            Object.defineProperty(this, key, {
                configurable: true,
                enumerable: true,
                get() {
                    return data[key];
                },
                set(newValue) {
                    data[key] = newValue;
                }
            })
        });
    }
}