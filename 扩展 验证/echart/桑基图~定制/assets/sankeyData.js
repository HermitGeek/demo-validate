const nodes = [{
        name: '万达百货'
    },
    {
        name: '生活精品'
    },
    {
        name: '服装服饰'
    },
    {
        name: '超市'
    },
    {
        name: '乐购'
    },
    {
        name: '百货'
    },
    {
        name: '屈臣氏'
    },
    {
        name: 'C&A'
    },
    {
        name: 'VERO MODA'
    },
    {
        name: '餐饮美食'
    },
    {
        name: '宝贝王'
    },
    {
        name: '悦诗风吟'
    },
    {
        name: '三叶草'
    },
    {
        name: '热风'
    },
    {
        name: '休闲娱乐'
    },
    {
        name: '避风塘'
    },
    {
        name: '数码'
    }
];

const links = [{
        source: "万达百货",
        target: "生活精品",
        value: 3003
    },
    {
        source: "万达百货",
        target: "服装服饰",
        value: 4659
    },
    {
        source: "万达百货",
        target: "超市",
        value: 700
    },
    {
        source: "乐购",
        target: "百货",
        value: 700
    },
    {
        source: "屈臣氏",
        target: "服装服饰",
        value: 649
    },
    {
        source: "C&A",
        target: "服装服饰",
        value: 1348
    },
    {
        source: "VERO MODA",
        target: "服装服饰",
        value: 715
    },
    {
        source: "C&A",
        target: "超市",
        value: 299
    },
    {
        source: "乐购",
        target: "餐饮美食",
        value: 858
    },
    {
        source: "万达百货",
        target: "餐饮美食",
        value: 2356
    },
    {
        source: "宝贝王",
        target: "餐饮美食",
        value: 484
    },
    {
        source: "悦诗风吟",
        target: "服装服饰",
        value: 764
    },
    {
        source: "VERO MODA",
        target: "生活精品",
        value: 387
    },
    {
        source: "三叶草",
        target: "百货",
        value: 303
    },
    {
        source: "C&A",
        target: "百货",
        value: 1264
    },
    {
        source: "三叶草",
        target: "服装服饰",
        value: 658
    },
    {
        source: "热风",
        target: "百货",
        value: 545
    },
    {
        source: "乐购",
        target: "服装服饰",
        value: 943
    },
    {
        source: "C&A",
        target: "生活精品",
        value: 1216
    },
    {
        source: "三叶草",
        target: "餐饮美食",
        value: 303
    },
    {
        source: "万达百货",
        target: "休闲娱乐",
        value: 197
    },
    {
        source: "乐购",
        target: "超市",
        value: 72
    },
    {
        source: "乐购",
        target: "生活精品",
        value: 762
    },
    {
        source: "屈臣氏",
        target: "生活精品",
        value: 729
    },
    {
        source: "悦诗风吟",
        target: "生活精品",
        value: 609
    },
    {
        source: "热风",
        target: "餐饮美食",
        value: 360
    },
    {
        source: "万达百货",
        target: "百货",
        value: 618
    },
    {
        source: "三叶草",
        target: "生活精品",
        value: 362
    },
    {
        source: "热风",
        target: "生活精品",
        value: 443
    },
    {
        source: "C&A",
        target: "餐饮美食",
        value: 986
    },
    {
        source: "避风塘",
        target: "服装服饰",
        value: 680
    },
    {
        source: "VERO MODA",
        target: "超市",
        value: 69
    },
    {
        source: "悦诗风吟",
        target: "百货",
        value: 411
    },
    {
        source: "宝贝王",
        target: "生活精品",
        value: 362
    },
    {
        source: "避风塘",
        target: "百货",
        value: 467
    },
    {
        source: "避风塘",
        target: "生活精品",
        value: 509
    },
    {
        source: "热风",
        target: "服装服饰",
        value: 708
    },
    {
        source: "宝贝王",
        target: "服装服饰",
        value: 428
    },
    {
        source: "VERO MODA",
        target: "百货",
        value: 239
    },
    {
        source: "屈臣氏",
        target: "百货",
        value: 517
    },
    {
        source: "屈臣氏",
        target: "餐饮美食",
        value: 513
    },
    {
        source: "C&A",
        target: "休闲娱乐",
        value: 132
    },
    {
        source: "避风塘",
        target: "餐饮美食",
        value: 346
    },
    {
        source: "屈臣氏",
        target: "超市",
        value: 134
    },
    {
        source: "悦诗风吟",
        target: "超市",
        value: 133
    },
    {
        source: "VERO MODA",
        target: "餐饮美食",
        value: 260
    },
    {
        source: "宝贝王",
        target: "超市",
        value: 81
    },
    {
        source: "悦诗风吟",
        target: "餐饮美食",
        value: 373
    },
    {
        source: "热风",
        target: "超市",
        value: 85
    },
    {
        source: "C&A",
        target: "数码",
        value: 20
    },
    {
        source: "三叶草",
        target: "休闲娱乐",
        value: 37
    },
    {
        source: "屈臣氏",
        target: "数码",
        value: 7
    },
    {
        source: "宝贝王",
        target: "百货",
        value: 197
    },
    {
        source: "万达百货",
        target: "数码",
        value: 38
    },
    {
        source: "三叶草",
        target: "超市",
        value: 82
    },
    {
        source: "避风塘",
        target: "超市",
        value: 154
    },
    {
        source: "屈臣氏",
        target: "休闲娱乐",
        value: 66
    },
    {
        source: "悦诗风吟",
        target: "休闲娱乐",
        value: 44
    },
    {
        source: "热风",
        target: "休闲娱乐",
        value: 37
    },
    {
        source: "悦诗风吟",
        target: "数码",
        value: 8
    },
    {
        source: "乐购",
        target: "休闲娱乐",
        value: 81
    },
    {
        source: "VERO MODA",
        target: "数码",
        value: 2
    },
    {
        source: "避风塘",
        target: "休闲娱乐",
        value: 102
    },
    {
        source: "热风",
        target: "数码",
        value: 7
    },
    {
        source: "乐购",
        target: "数码",
        value: 12
    },
    {
        source: "三叶草",
        target: "数码",
        value: 7
    },
    {
        source: "VERO MODA",
        target: "休闲娱乐",
        value: 11
    },
    {
        source: "宝贝王",
        target: "休闲娱乐",
        value: 20
    },
    {
        source: "避风塘",
        target: "数码",
        value: 7
    },
    {
        source: "宝贝王",
        target: "数码",
        value: 1
    }
];