const Router = require('@koa/router');

const router = new Router();

router.prefix("/api/tourist");

const tourists = [
    {
        id: "96beb73e-6fab-40ae-8ef9-5ade99705b2b",
        account: "tourist1",
        password: "123456",
        name: "游客一",
        phoneNumber: "18899889988",
        avatar: "",
        describe: ""
    },
    {
        id: "45c7e100-26bd-41c8-8009-fe65fb0f083b",
        account: "tourist2",
        password: "123456",
        name: "游客二",
        phoneNumber: "18899889988",
        avatar: "",
        describe: ""
    },
    {
        id: "ebc2642a-790b-457b-9e59-e98a088d91c6",
        account: "tourist3",
        password: "123456",
        name: "游客三",
        phoneNumber: "18899889988",
        avatar: "",
        describe: ""
    },
    {
        id: "225d45d4-65eb-47c7-92e7-875d5d1db109",
        account: "tourist4",
        password: "123456",
        name: "游客四",
        phoneNumber: "18899889988",
        avatar: "",
        describe: ""
    },
    {
        id: "2e6f21de-d623-4c8c-9850-118c22c4c998",
        account: "tourist5",
        password: "123456",
        name: "游客五",
        phoneNumber: "18899889988",
        avatar: "",
        describe: ""
    }
];

router.get("/self", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: tourists[0]
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
            rows: tourists,
            totle: 5
        }
    };
});

router.get("/:id", (ctx, next) => {
    ctx.response.body = {
        code: 200,
        data: tourists[0]
    };
});

module.exports = router;