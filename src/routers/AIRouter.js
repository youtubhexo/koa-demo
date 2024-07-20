const Router=require('@koa/router')
const ai=new Router() 
const AIcontroller = require('../api/AiController')
const { koaBody } = require('koa-body');
ai.get('/',AIcontroller.demo1);
ai.get('/async', AIcontroller.demo2);
ai.post('/post/upload',koaBody({
    multipart: true,
    formidable: {
      uploadDir: __dirname + '/uploads',
    },
  }),AIcontroller.demo3);

module.exports = ai