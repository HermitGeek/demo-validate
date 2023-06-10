const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router.get('/plan/get/:id', async (ctx, next) => {

    ctx.body = ctx.params;
});

app
    .use(router.routes())        // 启动路由
    .use(router.allowedMethods()) //作用： 当请求出错时的处理逻辑
    .listen(3000, () => {
        console.log('http://localhost:3000 访问接口')
    })