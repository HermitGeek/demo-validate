console.log('1');

setTimeout(function () {
    console.log('2');
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5')
    })
})

new Promise(function (resolve) {
    console.log('7');
    resolve();
}).then(function () {
    console.log('8')
})


setTimeout(function () {
    console.log('9');
    new Promise(function (resolve) {
        console.log('11');
        resolve();
    }).then(function () {
        console.log('12')
    })
})

// 浏览器: 1 7 8 2 4 5 9 11 12