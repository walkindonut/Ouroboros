const jwt = require('jsonwebtoken');
const { repository } = require('./database');

const Assert = {
    validate(statement, error) {
        if (!statement())
            throw new Error(error);
    },
    jwtTokenExists: (token) => Assert.validate(() => token, "Unauthorized request"),
    userSignInExists: (user) => Assert.validate(() => user, "Login failed! Please recheck the username and password and try again."),
    userEmailExists: (user, email) => Assert.validate(() => !user, `A user with the email ${email} already exists.`),
    authorizedUserId: (userId, jwtId) => Assert.validate(() => userId == jwtId, `Unauthorized to make requests on behalf of user id ${userId}`),
    ticketExists: (ticket) => Assert.validate(() => ticket, "Ticket not found"),
    userExists: (user) => Assert.validate(() => user, "User not found")
};

function api(asyncCallback) {
    return async (req, res) => {
        //res.setHeader("Access-Control-Allow-Credentials", true);
        //res.setHeader("Access-Control-Allow-Origin", "*");
        //res.setHeader('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        //res.setHeader('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
        res.setHeader('content-type', 'application/json');
        try {
            const result = await asyncCallback(req, res, repository);
            res.send(JSON.stringify({
                success: true,
                result
            }));
        }
        catch (ex) {
            //res.status(500);
            res.send(JSON.stringify({
                success: false,
                error: ex.toString()
            }));
            //console.error(ex);
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
        Assert.jwtTokenExists(token);

        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.jwt = data;
        next();
    } catch (ex) {
        res.status(500);
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify({
            success: false,
            error: ex.toString()
        }));
    }
};

module.exports = {
    api,
    Assert,
    jwtSign,
    jwtAuthorization,
    createUserJwtToken,
}