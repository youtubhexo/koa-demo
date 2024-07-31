const combineRouters = require('koa-combine-routers')
 
const ai=require('./AIRouter')
const cat=require('./CatRouter')
const dog=require('./DogRouter')
import captcha from './PublicRouter'
  
const routers = combineRouters(
  ai,
  cat,
  dog,
  captcha
)
module.exports = routers