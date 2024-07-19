const Router = require('@koa/router')
const combineRouters = require('koa-combine-routers')
 
const dogRouter = new Router()
const catRouter = new Router()
const { koaBody } = require('koa-body');

const ai=new Router()
 
dogRouter.get('/dogs', async ctx => {
  ctx.body = 'ok'
})
 
catRouter.get('/cats', async ctx => {
  ctx.body = 'ok'
})


ai.get('/', (ctx) => {
  // ctx.router available
  ctx.body = ('AI赋能开发')
});

ai.get('/async', async(ctx) => {
const result = await new Promise((resolve) => {
  setTimeout(() => {
     resolve('AI赋能开发')
  }, 5000)
})
  ctx.body = result
})
ai.post(
'/post/upload',
koaBody({
  multipart: true,
  formidable: {
    uploadDir: __dirname + '/uploads',
  },
}),
(ctx) => {
  const fields = ctx.request.body.fields; // this will be undefined for file uploads
  const files = ctx.request.files;
  console.log('files', JSON.stringify(files, null, 2));
  /*{
    "requestFields": null,
    "requestFiles": {
      "source": {
        "size": 748831,
        "path": "/some-dir/upload_cc1e0c49b97af0b9ef17b7b2f96b307d",
        "name": "avatar.png",
        "type": "image/png",
        "mtime": "2018-07-07T14:16:22.576Z"
      }
    }
  }*/

  // respond with the fields and files for example purposes
  ctx.body = JSON.stringify(
    {
      requestFields: fields || null,
      requestFiles: files || null,
    },
    null,
    2,
  );
},
);
  
const routers = combineRouters(
  dogRouter,
  catRouter,
  ai
)
module.exports = routers