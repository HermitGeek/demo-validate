const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {

    ctx.cookies.set('name', 'zhangxin')

    console.log(ctx.cookies.get('name'))

    ctx.body = 1; 


});

app.listen(3000);