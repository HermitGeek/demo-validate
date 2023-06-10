/*
    编译模板
*/
class Complie {
    constructor(vm) {
        this.$vm = vm;
        this.$el = this.isString(vm.$el) ? document.querySelector(vm.$el) : vm.$el;

        /*
            编译思路    【重点一】
                1. 获取根实例 子节点，转成 documentFragment 
                2. 递归解析 documentFragment 节点上的 指令、插值表达式
                3. 将 documentFragment 一次性插入到根实例中，避免重绘、重排
        */
        const fragment = this.nodeToFragment(this.$el);

        this.complie(fragment, vm);
        this.$el.appendChild(fragment);
    }

    nodeToFragment(node) {
        const fragment = document.createDocumentFragment();


        this.toArray(node.childNodes).forEach((node) => {
            fragment.appendChild(node);
        })

        return fragment;
    }

    complie(fragment, vm) {
        const children = this.toArray(fragment.childNodes);

        // 【重点二】
        children.forEach((node) => {
            // 标签：解析指令
            if (this.isElementNode(node)) {
                this.complieElement(node, vm);
            }

            // 文本：解析插值表达式
            if (this.isTextNode(node)) {
                this.complieText(node, vm);
            }

            if (node.childNodes && node.childNodes.length) {
                return this.complie(node, vm)
            }
        });
    }

    complieElement(node, vm) {
        const attrs = this.toArray(node.attributes);

        // 【重点四】
        attrs.forEach((attr) => {
            const attrName = attr.name;
            const attrValue = attr.value;

            // 操作 node，解析指令
            if (attrName.startsWith('v-text')) {
                node.textContent = this.getVMData(vm, attrValue);
            }

            if (attrName.startsWith('v-html')) {
                node.innerHTML = this.getVMData(vm, attrValue);
            }


            // this借用
            if (attrName.startsWith('v-on')) {
                const eventType = attrName.split(':')[1];

                node.addEventListener(eventType, vm.$methods[attrValue].bind(this.$vm))
            }
        })
    }

    complieText(node, vm) {
        // 【重点四】 操作node、操作正则
        const text = node.textContent;
        const reg = /\{\{(.+)\}\}/;

        if (reg.test(text)) {
            const key = RegExp.$1.trim();

            node.textContent = text.replace(reg, this.getVMData(vm, key))
        }


    }

    toArray(likeArray) {
        return [...likeArray];
    }

    isString(value) {
        return typeof value === 'string';
    }

    isElementNode(node) {
        return node.nodeType === 1;
    }

    isTextNode(node) {
        return node.nodeType === 3;
    }

    getVMData(vm, expr) {
        let data = vm.$data;

        expr.split('.').forEach((key) => {
            data = data[key];
        });

        return data;
    }
}