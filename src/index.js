const Kor = require('koa')
const app = new Kor();

app.use(async (ctx, next) => {
    console.log(ctx)
    console.log(1)
    const started = new Date()
    await next()
    console.log(new Date() - started + ' ms')
});

app.listen(4000, ()=>{
    console.log('hello koa server is listening to port 4000');
});