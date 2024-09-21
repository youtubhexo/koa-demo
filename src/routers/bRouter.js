const Router = require('@koa/router');
const router = new Router();
const b=require("../api/b")

router.get('/b',b);

module.exports = router