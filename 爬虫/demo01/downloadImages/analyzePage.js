const http = require('http');
const cheerio = require('cheerio');
const baseUrl = 'http://web.itheima.com/';


let req = http.request(`${baseUrl}teacher.html#ajavaee`, (res) => {
    let chunks = []

    // 监听data事件，获取 一个个 数据包
    res.on('data', (chunk) => {
        chunks.push(chunk)
    });

    // 拼接数据包，转码
    res.on('end', () => {
        const htmlStr = Buffer.concat(chunks).toString('utf-8')

        const $ = cheerio.load(htmlStr);

        const imgs = $('.tea_con > .tea_txt .li_img > img');
        const imgsUrl = [];

        imgs.each((index, item) => {
            const src = $(item).attr('src');

            imgsUrl.push(`${baseUrl}${src}`)
        });

        console.log(imgsUrl)
    })
})

req.end();