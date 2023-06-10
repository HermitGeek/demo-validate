const Koa = require('koa');

const app = new Koa();

app.use( async (ctx, next) => {
    const url = ctx.url;

    // 从 ctx.request 中获取
    // const request =ctx.request;
    // const req_query = request.query;
    // const req_querystring = request.querystring;

    // 直接从 ctx 中获取
    const req_query = ctx.query;
    const req_querystring = ctx.querystring;
 
    ctx.body = {
        url,
        req_query,
        req_querystring
    }
});

app.listen(3000);

console.log('http://localhost:3000 访问接口')