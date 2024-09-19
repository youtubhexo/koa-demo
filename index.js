const Koa = require('koa');
const Router = require('@koa/router');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const app = new Koa();
const router = new Router();


//  request   response
//  router  ->根据不同的路由，跳转到不同的方法


//koa-body
  //http 协议的传输，传输字符串，音频，视频
  //早期开发过程中，使用的请求地址传参 或者表单传参  现在使用的是json传参


//koa/cors   处于跨域请求，为什么有跨域请求，是因为浏览器的保护策略  因为一般我们的后端服务和前端服务不在同一个
//端口或域名下  （比如前后端分离）




router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body='AI赋能开发'
});

router.get('/about', (ctx, next) => {
  // ctx.router available
  ctx.body='这是关于页面的api数据'
});
router.post('/users', koaBody(), (ctx) => {
  console.log(ctx.request.body);
  // => POST body
  ctx.body = ctx.request.body;
});
app.use(koaBody());
app.use(cors());

app
.use(router.routes())
.use(router.allowedMethods());
app.use(cors());
app.listen(3000);