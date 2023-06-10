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
    console.log(2);
});

setTimeout(function () {
    console.log(5);
}, 0);

console.log(1);

/*
浏览器 6 1 2 3 4 5

node 6 1 2 3 4 5
*/