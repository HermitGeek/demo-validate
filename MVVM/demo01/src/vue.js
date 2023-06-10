class Vue {
    constructor(option) {
        this.$el = document.querySelector(option.el);
        this.$data = option.data;
        this.$methods = option.methods;

        // 数据劫持
        new Observe(this.$data);

        // 将 data、methods 中的属性 绑定到 this上
        this.proxy(this.$data); 
        this.proxy(this.$methods);    
        

        // 编译模板
        new Complie(this.$data, this.$el);
    }

    // 将 data、methods 中的属性 绑定到 this上
    proxy(data) {
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        }
    }
}
