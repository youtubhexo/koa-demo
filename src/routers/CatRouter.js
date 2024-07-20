const Router = require('@koa/router')
const CatController=require('../api/CatController')

const catRouter = new Router()
 
const demo1=catRouter.get('/cats',CatController.cat)

module.exports=demo1