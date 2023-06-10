var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function (f) {
        f();
        arguments[0]();
        arguments[0].call(this);
        arguments[0].call();
    }
};

var obj2 = {
    method: (function () {
        console.log(this);
    })()
};

obj.method(fn);


// 对比 01.js