const APIController = {
    async test(req, res, next) {
        const result = { hello: "world" };
        res.send(JSON.stringify(result));
    }
};

module.exports = APIController;