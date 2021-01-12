const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');


router.use('/api', api.routes());

router.get('/', (ctx, next)=>{
    ctx.body = 'home';
});

router.get('/about', (ctx, next)=>{
    ctx.body = 'about';
});


router.get('/about/:name', (ctx, next) =>{
    const {name} = ctx.params;
    ctx.body = name + ' is me'
})

router.get('/post', (ctx, next)=>{
     const {id} = ctx.request.query;
     if(id){
         ctx.body = 'post #'+id;
     }else{
         ctx.body = 'No posts id'
     }
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, ()=>{
    console.log('heurm server is listening to port 4000');
})