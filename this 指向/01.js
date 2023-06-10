var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length: 3,
    method: function (fn) {
        (false || arguments[0])();
    }
};

obj.method(fn, 123, 14, 12, 4);

// 对比 03.js