const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const routerPlan = new Router({
    
});


routerPlan.all('/login', ctx => {
    ctx.redirect('/sign-in');
    ctx.status = 301;
  });

routerPlan
    .all('/list/get', async (ctx) => {
        ctx.body = ctx.request.url;
    })
    .get('/detail/get', async (ctx) => {
        ctx.body = ctx.request.url;
    })


const routerOrder = new Router();



routerOrder
    .get('/list/get', async (ctx) => {
        ctx.body = ctx.request.url;
    })
    .get('/detail/get', async (ctx) => {
        ctx.body = ctx.request.url;
    })

    
// 装载 所有路由
const router = new Router();
router.use('/plan', routerPlan.routes(), routerPlan.allowedMethods())
router.use('/order', routerOrder.routes(), routerOrder.allowedMethods())


const url = router.url('user', { id: 3 }, { query: { limit: 1 } });

console.log(url)

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
