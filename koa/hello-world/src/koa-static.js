const path = require('path');
const Koa = require('koa');
const static = require('koa-static'); 


const app = new Koa();
// 设置相对路径
const staticPath = path.join( __dirname, './static');

app.use(static(staticPath))
app.use(async (ctx) => {
    ctx.body = 'hello world'
});

app.listen(3000, () => {
    console.log('http://localhost:3000/1.png 访问图片')
})

