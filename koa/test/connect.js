const connect = require('connect')
const app = connect()
const sleep = () => new Promise(resolve => setTimeout(function(){resolve(1)}, 2000))

app.use(function m1(req, res, next) {
    console.log('m1')
    next()
    console.log('m1 end')
})
app.use(function m2(req, res, next) {
    console.log('m2')
    next()
    console.log('m2 end')
})
app.use(async function m3(req, res, next) {
    console.log('m3')
    res.end('hello')
})
app.listen(8080)