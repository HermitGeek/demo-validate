class Complie {
    constructor(data, el) {
        this.data = data;

        /*
            第一步：将根元素上的节点，全部移动到 documentFragment 上，提升性能
            第二步：编译
            第三步：向根元素上添加编译好的节点
        */
        const fragment = this.nodeToFragment(el);

        this.complieNode(fragment);
        el.appendChild(fragment)
    }

    nodeToFragment(node) {
        const fragment = document.createDocumentFragment();

        Array.from(node.childNodes).forEach((ele) => {
            fragment.appendChild(ele);
        })

        return fragment;
    }

    complieNode(node) {
        Array.from(node.childNodes || []).forEach((ele) => {

            // 处理标签
            if (ele.nodeType === 1) {
                this.complieElement(ele);
            }

            // 处理文本
            if (ele.nodeType === 3) {
                this.complieText(ele);
            }

            if (node.childNodes && node.childNodes.length) {
                return this.complieNode(node.childNodes)
            }

        })
    }

    // 编译文本
    complieText(node) {
        const textContent = node.textContent;
        const reg = /\{\{(.+)\}\}/;

        if (reg.test(textContent)) {
            const expr = RegExp.$1.trim();

            node.textContent = textContent.replace(reg, this.getData(this.data, expr))

            new Watcher(this.data, expr, newValue => {
                node.textContent =  newValue
            })
        }
    }

    // 编译标签
    complieElement(node) {

    }

    getData(data, expr) {
        let dataCopy = data;

        expr.split('.').forEach((key) => {
            dataCopy = dataCopy[key]
        })

        return dataCopy;
    }
}