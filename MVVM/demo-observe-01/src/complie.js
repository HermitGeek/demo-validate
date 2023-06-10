class Complie {
    constructor(vm) {
        this.$vm = vm;
        this.$el = this.isString ? document.querySelector(vm.$el) : vm.$el;


        /*
            思路
                1. 获取 根节点 所有子节点，将其转为 documentFragment（提升性能）
                2. 递归处理 documentFragment 节点（解析指令、解析插值表达式）
                3. 将处理好的 documentFragment 一次性插入到 根节点上
        */
        const fragment = this.nodeToFragment(this.$el);

        this.complie(fragment);
        this.$el.appendChild(fragment);
    }

    nodeToFragment(node) {
        const children = this.toArray(node.childNodes);
        const fragment = document.createDocumentFragment();


        children.forEach((node) => {
            fragment.appendChild(node);
        })

        return fragment;
    }

    complie(node) {
        const children = this.toArray(node.childNodes);

        children.forEach((node) => {
            // 处理 文本节点 插值表达式
            if (node.nodeType === 3) {
                this.complieText(node);
            }

            // 处理 标签节点 指令
            if (node.nodeType === 1) {
                this.complieElement(node);
            }

            if (node.childNodes && node.childNodes.length) {
                return this.complie(node);
            }
        })
    }

    complieText(node) {
        const textContent = node.textContent;
        const reg = /\{\{(.+)\}\}/;

        if (reg.test(textContent)) {
            const expr = RegExp.$1.trim();

            console.log(RegExp.$1)

            node.textContent = textContent.replace(reg, this.getVmData(this.$vm, expr))
        }
    }

    complieElement(node) {
        const attrs = this.toArray(node.attributes);
        
        attrs.forEach((attr) => {
            const attrName = attr.name;
            const attrValue = attr.value;

            if (attrName === 'v-text') {
                node.textContent =  this.getVmData(this.$vm, attrValue);

                new Watcher(this.$vm, attrValue, newValue => {
                    node.textContent =  newValue
                })
            }

            if (attrName === 'v-html') {
                node.innerHTML =  this.getVmData(this.$vm, attrValue);                
            }

            if (attrName.startsWith('v-on:')) {
                const eventType = attrName.split(':')[1];

                node.addEventListener(eventType, this.$vm.methods[attrValue].bind(this.$vm));

            }
        });
    }

    toArray(likeArray) {
        return [...likeArray];
    }

    isString(value) {
        return typeof value === 'string';
    }

    getVmData(vm, expr) {
        let data = vm.$data;

        expr.split('.').forEach((key) => {
            data = data[key];
        });

        return data;
    }
}