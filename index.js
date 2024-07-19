const Koa = require('koa');
const router = require('./routers')

const app = new Koa();
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');


   

app.use(cors({
  allowMethods: ['GET', 'POST'],
}));
app
.use(router())


//1 request  response
//2 router
//3 ctx,async

module.exports = app;
