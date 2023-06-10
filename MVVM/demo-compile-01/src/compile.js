// Complie解析 模板内容
class Complie {
    constructor(vm) {
        this.$vm = vm;
        this.$el = this.isString ? document.querySelector(vm.$el) : vm.$el;
        this.$data = vm.$data;
        this.$methods = vm.$methods;


        /*
            思路 【重点一】
                1. 将 node转成DocumentFragment，直接操作 DocumentFragment
                2. documentFragment 在内存中编译
                3. 然后一次插入到DOM中，避免重绘 重拍
        */
        const fragment = this.nodeToFragment(this.$el);


        // 编译 documentFragment
        this.complie(fragment);


        // 将 documentFragment 插入到文档中
        this.$el.appendChild(fragment);
    }


    /*
        核心方法
    */
    nodeToFragment(el) {
        const fragment = document.createDocumentFragment();

        this.toArray(el.childNodes).forEach((node) => {
            fragment.appendChild(node);
        })

        return fragment;
    }

    complie(fragment) {
        // 【重点二】
        // 思路：递归判断子元素是 文本节点、标签节点
        const children = fragment.childNodes;

        this.toArray(children).forEach((node) => {
            // 文本节点，解析插值表达式
            if (this.isTextNode(node)) {
                this.complieText(node);
            }

            // 元素节点，解析指令
            if (this.isElementNode(node)) {
                this.complieElement(node);
            }

            // 递归解析
            if (node.childNodes && node.childNodes.length > 0) {
                return this.complie(node);
            }
        })
    }

    complieText(node) {
        const text = node.textContent;
        // 【重点三】
        // 插值表达式，正则替换
        const reg = /\{\{(.+)\}\}/;

        if (reg.test(text)) {
            const expr = RegExp.$1.trim();

            node.textContent = text.replace(reg, this.getVMData(this.$vm, expr))
        }
    }

    complieElement(node) {
        const attributes = this.toArray(node.attributes);

        /*  【重点 四】
            先判断是否是 vue指令
            在判断指令类型，分别做操作
        */

        // attr 类型是 object；console.dir 打印即可
        attributes.forEach((attr) => {
            const directType = this.getDirectType(attr.name);
            const directExpr = attr.value;


            if (directType === 'text') {
                node.textContent = this.getVMData(this.$vm, directExpr)
            }

            if (directType === 'html') {
                node.innerHTML = this.getVMData(this.$vm, directExpr);
            }

            if (directType === 'on') {
                const eventType = this.getEventType(attr.name);

                node.addEventListener(eventType, this.$methods[directExpr].bind(this.$vm))
            }

            if (directType === 'bind') {
                console.log(directExpr)

            }
        })
    }

    /*
        工具方法
    */
    toArray(likeArray) {
        return [...likeArray];
    }

    isString(value) {
        return typeof value === 'string';
    }

    isDirect(attr) {
        return attr.startsWith('v-') || attr.startsWith(':') || attr.startsWith('@');
    }

    // 【重点五】对象取值
    getVMData(vm, expr) {
        let data = vm.$data;

        expr.split('.').forEach((key) => {
            data = data[key];
        })

        return data;
    }

    getDirectType(attr) {
        let type = '';
        // 【技巧】

        if (attr.startsWith(':')) {
            type = 'bind';
        } else if (attr.startsWith('@')) {
            type = 'on';
        } else if (this.isDirect(attr)){

            type = attr.split('v-')[1];
        }

        return type;
    }

    getEventType(attr) {
        if (attr.startsWith('v-on')) {
            return attr.split('v-on:')[1];
        }

        return attr.split('@')[1] 
    }

    isTextNode(node) {
        return node.nodeType === 3;
    }

    isElementNode(node) {
        return node.nodeType === 1;
    }
}