import echarts from 'echarts';



export default {
    data() {
        return {
            chart: null
        };
    },
    props: {

        /**
         * 图表配置
         * @type {Object}
         */
        options: {
            type: Object,
            require: true
        },

        /**
         * 图表与数据对应关系
         * @type {Object}
         */
        methods: {
            type: Object,
            require: false
        },

        /**
         * 图表数据
         * @type {Object}
         */
        data: {
            type: Object,
            require: false
        },

        /**
         * 图表宽
         * @type {Number}
         */
        width: {
            type: Number,
            default: 300
        },

        /**
         * 图表高
         * @type {Number}
         */
        height: {
            type: Number,
            default: 200
        }
    },

    mounted() {
        this.chart = echarts.init(this.$el);
        this.chart.setOption(this.handleOptions(this.options));
    },
    watch: {
        options: {
            handler(val) {
                this.chart.setOption(this.handleOptions(val));
            },
            deep: true
        },
        data: {
            handler() {
                this.chart.setOption(this.handleOptions(this.options));
            },
            deep: true
        }
    },
    methods: {
        handleOptions(val) {
            /**
             * 图表配置对象转换成字符串，为了替换变量
             * @type {String}
             */
            let str = JSON.stringify(val);

            for (const key in this.methods) {
                str = str.replace(new RegExp(`"\\${key}"`, 'img'), JSON.stringify(this.methods[key](this.data)));
            }

            return JSON.parse(str);
        }
    }
};
