const Router = require('@koa/router');
const router = new Router();
const a=require("../api/a")

router.get('/a',a);

module.exports = router