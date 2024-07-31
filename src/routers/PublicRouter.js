import PublicController from "../api/PublicController";
const Router = require('@koa/router')
const router = new Router()
const demo1=router.get('/captcha',PublicController.demo)

export  default demo1
