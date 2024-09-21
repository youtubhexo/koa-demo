
const combineRouters = require('koa-combine-routers')

const aRouter=require('./aRouter')
const bRouter=require('./bRouter')

const router = combineRouters(
  aRouter,
  bRouter
)
 
module.exports = router