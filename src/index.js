const Koa = require('koa');
const router = require('./routers/routers')

const app = new Koa();
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');
const serve = require('koa-static');
const path=require('path')


   

app.use(cors({
  allowMethods: ['GET', 'POST'],
}));
app
.use(router())
app.use(serve(path.join(__dirname, '../public')));


//1 request  response
//2 router
//3 ctx,async

module.exports = app;
