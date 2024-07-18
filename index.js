const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();


router.get('/', (ctx) => {
    // ctx.router available
    ctx.body = ('AI赋能开发')
});

router.get('/async', async(ctx) => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
       resolve('AI赋能开发')
    }, 5000)
  })
    ctx.body = result
})
   


app
  .use(router.routes())
  .use(router.allowedMethods());

//1 request  response
//2 router
//3 ctx,async

module.exports = app;
