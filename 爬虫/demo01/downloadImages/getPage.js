const http = require('http');

let req = http.request('http://web.itheima.com/teacher.html#ajavaee', (res) => {
    let chunks = []

    // 监听data事件，获取 一个个 数据包
    res.on('data', (chunk) => {
        chunks.push(chunk)
    });

    // 拼接数据包，转码
    res.on('end', () => {
        console.log(Buffer.concat(chunks).toString('utf-8'))
    })
})

req.end();