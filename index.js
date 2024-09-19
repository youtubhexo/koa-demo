const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

//  request   response
//  router  ->根据不同的路由，跳转到不同的方法
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body='AI赋能开发'
});

router.get('/about', (ctx, next) => {
  // ctx.router available
  ctx.body='这是关于页面的api数据'
});
app
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000);