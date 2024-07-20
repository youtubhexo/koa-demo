const combineRouters = require('koa-combine-routers')
 
const ai=require('./AIRouter')
const cat=require('./CatRouter')
const dog=require('./DogRouter')
  
const routers = combineRouters(
  ai,
  cat,
  dog
)
module.exports = routers