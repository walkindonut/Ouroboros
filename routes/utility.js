const { repository } = require('../database');

function api(asyncCallback) {
    return async (req, res) => {
        res.setHeader('content-type', 'application/json');
        try {
            const result = await asyncCallback(req, res, repository);
            res.send(JSON.stringify({
                result
            }));
        }
        catch (ex) {
            res.status(500);
            res.send(JSON.stringify({
                error: ex.toString()
                //error: ex.message
            }));

            console.error(ex);
        }
    };
}

module.exports = {
    api
}