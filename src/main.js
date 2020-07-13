const path = require('path');
const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('@koa/router');
const static = require('koa-static');
const logger = require('koa-logger');

const tokenRouter = require("./mocks/token");
const touristRouter = require("./mocks/tourist");
const adminRouter = require("./mocks/admin");
const operationRouter = require("./mocks/operation");

const app = new Koa();
const router = new Router();

router.use(tokenRouter.routes(), tokenRouter.allowedMethods());
router.use(touristRouter.routes(), touristRouter.allowedMethods());
router.use(adminRouter.routes(), adminRouter.allowedMethods());
router.use(operationRouter.routes(), operationRouter.allowedMethods());

app
  .use(cors())
  .use(router.routes()).use(router.allowedMethods())
  .use(static(path.join(__dirname)+'/public/'))
  .use(logger());

app.listen(10233);