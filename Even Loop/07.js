// 回调函数 是 异步函数

setTimeout(function () {
    console.log(3);
}, 0);

const promise = new Promise(function (resolve, reject) {
    console.log(6);
    resolve();
});

setTimeout(function () {
    console.log(4);
}, 0);

promise.then(() => {
    setTimeout(() => {
        console.log(2);
    }, 0);
});

setTimeout(function () {
    console.log(5);
}, 0);

console.log(1);

/*
浏览器  6 1 3 4 5 2
node  6 1 3 4 5 2
*/