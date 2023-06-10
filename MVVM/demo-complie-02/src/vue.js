class Vue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$methods = options.methods;

        // 数据观察
        new Observe(this.$data);

        // 编译
        new Complie(this);
    }
}