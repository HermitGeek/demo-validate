const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('--------------------')
console.log(process.env.NAME)
console.log('--------------------')


module.exports = {
    mode: 'development',

    entry: {
        main: './src/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,     // 文件体积小于 8192kb 时，将被转为 base64 资源
                    name: '[name].[ext]',
                    outputPath: 'static/assets/'    // 资源 输出路径
                }
            }]
        }, {
            test: /\.(htm|html)$/,
            use:[{
                loader: 'html-withimg-loader'
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',         // 输出文件名
            template: './src/index.html',   // 使用的模板
            hash: true,                     // html 引入脚本，自动加hash
            cache: false                    // 是否使用缓存（建议 生产环境下为true）
        })
    ],

    devServer: {
        index: 'index.html',                // 服务器启动的页面
        contentBase: path.resolve(__dirname, 'dist'),   // 服务器启动页面目录

        port: 3000,                         // 端口号
        host: 'localhost',                  // 指定host; 默认 localhost
        host: '0.0.0.0',                    
        useLocalIp: true,                   // 是否启动IP访问 
        open: true,                         // 是否自动在浏览器中打开
        compress: true,                     // 服务端压缩
        progress: true,                     // 显示进度

        // 精简 终端输出（本地运行时）
        stats: {
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    }
}