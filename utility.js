const jwt = require('jsonwebtoken');
const { repository } = require('./database');

function api(asyncCallback) {
    return async (req, res) => {
        res.setHeader('content-type', 'application/json');
        try {
            const result = await asyncCallback(req, res, repository);
            res.send(JSON.stringify({
                success: true,
                result
            }));
        }
        catch (ex) {
            res.status(500);
            res.send(JSON.stringify({
                success: false,
                error: ex.toString()
            }));
            console.error(ex);
        }
    };
}

function jwtSign(obj) {
    return jwt.sign(obj, process.env.JWT_SECRET);
}

function createUserJwtToken(user) {
    return jwtSign({ _id: user._id });
}

async function jwtAuthorization(req, res, next) {
    const token = req.cookies.access_token;

    try {
        if (!token) {
            throw new Error("Unauthorized");
        }
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.jwt = data;
        return next();
    } catch (ex) {
        res.status(500);
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify({
            success: false,
            error: ex.toString()
        }));
    }
};

function assert(statement, error) {
    if (!statement())
        throw new Error(error);
}

module.exports = {
    api,
    assert,
    jwtSign,
    jwtAuthorization,
    createUserJwtToken,
}