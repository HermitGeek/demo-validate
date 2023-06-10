export default {
    name: 'demo',

    data() {
        return {
            isShow: false,
            top: 0
        };
    },

    watch: {
        isShow(next) {
            // const scrollingElement = document.scrollingElement;

            // if (next) {
            //     this.top = scrollingElement.scrollTop;

            //     scrollingElement.style.top = `-${this.top}px`;
            //     scrollingElement.style.position = 'fixed';
            // } else {
            //     scrollingElement.style.top = 0;
            //     scrollingElement.style.position = 'static';
            //     document.scrollingElement.scrollTop = this.top;
            // }
        }
    }
};

