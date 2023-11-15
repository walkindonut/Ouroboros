function api(asyncCallback) {
    return async (req, res) => {
        res.setHeader('content-type', 'application/json');
        try {
            const result = await asyncCallback();
            res.send(JSON.stringify({
                result
            }));
        }
        catch (ex) {
            res.status(500);
            res.send(JSON.stringify({
                error: ex.message
            }));
        }
    };
}

module.exports = {
    api
}