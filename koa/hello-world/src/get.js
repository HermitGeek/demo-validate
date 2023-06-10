const Koa = require('koa');


const app = new Koa();

app.use(async (ctx) => {
    ctx.body = ctx.request
});

app.listen(3000, () => {

});