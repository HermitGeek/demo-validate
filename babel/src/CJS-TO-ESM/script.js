const fs = require("fs");
const babel = require("@babel/core");
const data = fs.readFileSync('./source.js');


// console.log(core.transform);

babel.transform(data.toString(), {
    plugins: ["babel-plugin-transform-commonjs"],
    sourceType: 'module',
}, function(err, result) {
    console.log(result);

    fs.writeFileSync('./target.js', result.code)
});