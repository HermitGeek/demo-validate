module.exports = {
    presets: [
        ['@babel/preset-env',{
            modules: false,
            useBuiltIns: "usage"        // 按需加载 pollify，解决IE兼容问题
        }]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        ['import',{
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        },'vant']
    ],
    comments: false
};
