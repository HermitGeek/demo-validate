const autoprefixer = require('autoprefixer');
const px2remExclude = require('postcss-px2rem-exclude');



module.exports = {
    plugins: [
        autoprefixer(),
        // https://www.npmjs.com/package/postcss-px2rem-exclude
        px2remExclude({
            remUnit: 75,
            exclude: /(\/|\\)(node_modules)(\/|\\)/
        })
    ]
};
