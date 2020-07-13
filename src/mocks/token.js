const Router = require('@koa/router');

const router = new Router();

router.prefix("/api/token");

router.post("/get", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: "79faf82271944fe38c4f1d99be71bc9c"
    };
});

router.post("/destroy", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data:true
    };
});

module.exports = router;