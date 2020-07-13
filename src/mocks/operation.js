const Router = require('@koa/router');

const router = new Router();

router.prefix("/api/operation");

const operations = [
    {
        id: "96beb73e-6fab-40ae-8ef9-5ade99705b2b",
        account: "operation1",
        password: "123456",
        name: "运维人员一",
        avatar: "",
        describe: ""
    },
    {
        id: "45c7e100-26bd-41c8-8009-fe65fb0f083b",
        account: "operation2",
        password: "123456",
        name: "运维人员二",
        avatar: "",
        describe: ""
    },
    {
        id: "ebc2642a-790b-457b-9e59-e98a088d91c6",
        account: "operation3",
        password: "123456",
        name: "运维人员三",
        avatar: "",
        describe: ""
    },
    {
        id: "225d45d4-65eb-47c7-92e7-875d5d1db109",
        account: "operation4",
        password: "123456",
        name: "运维人员四",
        avatar: "",
        describe: ""
    },
    {
        id: "2e6f21de-d623-4c8c-9850-118c22c4c998",
        account: "operation5",
        password: "123456",
        name: "运维人员五",
        avatar: "",
        describe: ""
    }
];

router.get("/self", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: operations[0]
    };
});

router.post("/", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: true
    };
});

router.patch("/:id", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: true
    };
});

router.delete("/:id", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: true
    };
});

router.get("/", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: {
            rows: operations,
            totle: 5
        }
    };
});

router.get("/:id", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: operations[0]
    };
});

module.exports = router;