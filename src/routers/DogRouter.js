const Router = require('@koa/router')
const dogController=require('../api/DogController')
const dogRouter = new Router()
const demo1=dogRouter.get('/dogs',dogController)


module.exports=demo1