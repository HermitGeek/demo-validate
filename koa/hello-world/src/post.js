const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 挂载 中间件
app.use(bodyParser());

app.use(async (ctx) => {
    if (ctx.method === 'GET' && ctx.url === '/') {
        const html = `
        <form method="POST"  action="/">
            <p>userName</p>
            <input name="userName" /> <br/>
            <p>age</p>
            <input name="age" /> <br/>
            <p>webSite</p>
            <input name='webSite' /><br/>
            <button type="submit">submit</button>
        </form>
        `;
        ctx.body = html;
    } else if (ctx.url==='/' && ctx.method === 'POST') {
        ctx.body = ctx.request.body;
    } else {
        ctx.body = '404';
    }
});

app.listen(3000, () => {
    console.log('http://localhost:3000 访问接口')
})